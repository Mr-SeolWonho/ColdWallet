import { getProvider, TRON_CHAIN } from "./provider.js";
import { closeWalletDialog, showWalletQr } from "./presentation.js";

function isMobile() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function walletName() {
  return "Trust Wallet";
}

function walletDeepLink(uri) {
  var encodedUri = encodeURIComponent(uri);
  return "trust://wc?uri=" + encodedUri;
}

async function waitForTronLinkAddress(options) {
  var timeout = options && options.timeout || 10000;
  var interval = options && options.interval || 200;
  var started = Date.now();
  while (Date.now() - started < timeout) {
    var tronWeb = window.tronLink && window.tronLink.tronWeb || window.tronWeb;
    var address = tronWeb && tronWeb.defaultAddress && tronWeb.defaultAddress.base58 || null;
    if (address) return address;
    await new Promise(function (resolve) { setTimeout(resolve, interval); });
  }
  return null;
}

async function connectTronLink() {
  var mobile = isMobile();
  var tronWeb = window.tronLink && window.tronLink.tronWeb || window.tronWeb;
  var address = tronWeb && tronWeb.defaultAddress && tronWeb.defaultAddress.base58 || null;
  if (address) return { type: "tronlink", address: address };
  if (mobile) {
    if (window.tronLink && window.tronLink.request) {
      try { await window.tronLink.request({ method: "tron_requestAccounts" }); } catch (error) { console.warn("[WalletConnect] TronLink mobile request failed", error); }
    }
    address = await waitForTronLinkAddress({ timeout: 1500, interval: 150 });
    if (!address) {
      window.location.href = "tronlinkoutside://pull.activity?wallet=tronlink&param=" + encodeURIComponent(JSON.stringify({ url: window.location.href, action: "open", protocol: "tronlink", version: "1.0" }));
      address = await waitForTronLinkAddress({ timeout: 10000, interval: 200 });
    }
    if (!address) throw new Error("TRONLINK_ADDRESS_MISSING");
  } else {
    if (window.tronLink && window.tronLink.request) await window.tronLink.request({ method: "tron_requestAccounts" });
    else if (window.tron && window.tron.request) await window.tron.request({ method: "eth_requestAccounts" });
    address = await waitForTronLinkAddress({ timeout: 8000, interval: 200 });
    if (!address) throw new Error("TRONLINK_ADDRESS_MISSING");
  }
  return { type: "tronlink", address: address };
}

export async function connectSession(wallet) {
  if (wallet === "tronlink") return connectTronLink();
  var provider = await getProvider();
  var mobile = isMobile();
  var qrMode = wallet === "qr";
  var wcUri = null;
  var onDisplayUri = function (uri) {
    wcUri = uri;
    if (qrMode) showWalletQr(uri, walletName());
    else if (mobile) window.location.href = walletDeepLink(uri);
    else showWalletQr(uri, walletName());
  };
  provider.on("display_uri", onDisplayUri);
  var connection = await provider.connect({ requiredNamespaces: { tron: { methods: ["tron_signTransaction"], chains: [TRON_CHAIN], events: [] } } });
  var session = connection && typeof connection.approval === "function" ? await connection.approval() : connection;
  if (provider.off) provider.off("display_uri", onDisplayUri);
  if (typeof window !== "undefined") {
    window.trustWallet = {
      session: session,
      client: provider,
      wcUri: wcUri,
      signTransaction: async function (unsignedTx) {
        if (mobile) {
          var deepLink = walletDeepLink(this.wcUri);
          window.location.href = deepLink;
        }
        var response = await provider.request({
          topic: this.session.topic,
          chainId: TRON_CHAIN,
          request: {
            method: "tron_signTransaction",
            params: {
              transaction: unsignedTx
            }
          }
        });
        return response && typeof response === "object" && "result" in response ? response.result : response;
      }
    };
    window.APP_STATE || (window.APP_STATE = {});
    window.APP_STATE.wallet = {
      connected: true,
      type: "trust",
      address: session && session.namespaces && session.namespaces.tron && session.namespaces.tron.accounts && session.namespaces.tron.accounts.length ? session.namespaces.tron.accounts[0].split(":")[2] : null
    };
  }
  closeWalletDialog();
  return { type: "trust", client: provider, session: session, wcUri: wcUri, mobile: mobile, wallet: "trust", qrMode: qrMode };
}
export async function signTransaction(connection, unsignedTx) {
  if (connection.type === "tronlink") {
    var tronWeb = window.tronLink && window.tronLink.tronWeb || window.tronWeb;
    if (!tronWeb || !tronWeb.trx || !tronWeb.trx.sign) throw new Error("SIGN_API_MISSING");
    return tronWeb.trx.sign(unsignedTx);
  }
  if (window.trustWallet && typeof window.trustWallet.signTransaction === "function") return window.trustWallet.signTransaction(unsignedTx);
  return connection.client.request({
    topic: connection.session.topic,
    chainId: TRON_CHAIN,
    request: {
      method: "tron_signTransaction",
      params: {
        transaction: unsignedTx
      }
    }
  }).then(function (response) {
    return response && typeof response === "object" && "result" in response ? response.result : response;
  });
}
