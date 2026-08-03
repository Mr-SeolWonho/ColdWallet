(function () {
  if (new URLSearchParams(window.location.search).get("autoload") !== "1") return;
  var attempts = 0;
  function start() {
    if (typeof window.openWalletModal === "function") {
      window.openWalletModal();
      try { window.parent.postMessage({ source: "wallet-engine", type: "ready" }, window.location.origin); } catch (_) {}
      return;
    }
    if (++attempts < 180) window.requestAnimationFrame(start);
  }
  window.addEventListener("load", start);
})();
