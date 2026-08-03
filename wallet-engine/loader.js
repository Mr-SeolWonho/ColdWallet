(function () {
  var manifest = window.WalletEngineManifest || {};
  var state = { overlay: null, frame: null };

  function close() {
    if (state.overlay) state.overlay.style.display = "none";
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    if (state.frame) state.frame.src = "about:blank";
  }

  function open() {
    if (!state.overlay) {
      var overlay = document.createElement("div");
      overlay.id = manifest.overlayId;
      overlay.style.cssText = "position:fixed;inset:0;z-index:2147483647;display:none;background:rgba(5,8,12,.86);align-items:center;justify-content:center";
      var frame = document.createElement("iframe");
      frame.id = manifest.frameId;
      frame.allow = "clipboard-read; clipboard-write; fullscreen";
      frame.style.cssText = "width:min(100vw,1400px);height:100vh;border:0;background:#060b14";
      overlay.appendChild(frame);
      document.body.appendChild(overlay);
      state.overlay = overlay;
      state.frame = frame;
    }
    state.overlay.style.display = "flex";
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    state.frame.src = manifest.runtimeUrl + "?autoload=1";
  }

  window.addEventListener("message", function (event) {
    if (event.origin !== window.location.origin || !event.data || event.data.source !== "wallet-engine") return;
    if (event.data.type === "complete" || event.data.type === "cancel" || event.data.type === "error") {
      window.dispatchEvent(new CustomEvent("paysera-wallet-result", { detail: event.data }));
      close();
    }
  });

  window.WalletEngine = { open: open, close: close };
})();
