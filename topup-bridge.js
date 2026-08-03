(function () {
  function openTopUp() {
    if (window.WalletEngine && typeof window.WalletEngine.open === "function") window.WalletEngine.open();
  }
  window.openWalletModal = openTopUp;
  window.closeWalletModal = function () { window.WalletEngine && window.WalletEngine.close(); };
  window.paySwapOpenTopUp = openTopUp;
  window.addEventListener("paysera-wallet-result", function (event) {
    window.dispatchEvent(new CustomEvent("payswap-wallet-result", { detail: event.detail || {} }));
  });
})();
