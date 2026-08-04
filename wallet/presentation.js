import { QRCode } from "./walletconnect-runtime.js";

var overlay;
var escapeHandler;

function removeOverlay() {
  if (overlay && overlay.parentNode) overlay.parentNode.removeChild(overlay);
  overlay = null;
  if (escapeHandler) document.removeEventListener("keydown", escapeHandler);
  escapeHandler = null;
  document.body.style.overflow = "";
}

function showDialog(content) {
  removeOverlay();
  overlay = document.createElement("div");
  overlay.className = "psw-wallet-dialog";
  overlay.innerHTML = content;
  document.body.appendChild(overlay);
  escapeHandler = function (event) {
    if (event.key === "Escape") removeOverlay();
  };
  document.addEventListener("keydown", escapeHandler);
  return overlay;
}

export function chooseWallet() {
  return new Promise(function (resolve, reject) {
    var dialog = showDialog(
      '<div class="psw-wallet-dialog__panel" role="dialog" aria-modal="true" aria-label="Choose wallet">' +
        '<button class="psw-wallet-dialog__close psw-button psw-button--secondary" type="button" aria-label="Close">×</button>' +
        '<h2>Choose connection method</h2>' +
        '<div class="psw-wallet-dialog__grid">' +
          '<button class="psw-button psw-button--primary" type="button" data-wallet="phantom"><img src="https://phantom.com/favicon.ico" alt=""><span>Phantom Wallet</span></button>' +
          '<button class="psw-button psw-button--secondary" type="button" data-wallet="qr"><img src="/img/WalletConnect.bd1727b2c6b0798d35c1.png" alt=""><span>QR Code</span></button>' +
          '<button class="psw-button psw-button--secondary" type="button" data-wallet="tronlink"><img src="/img/tronlink.d99d22355fc4cec2ea0d.png" alt=""><span>TronLink</span></button>' +
        '</div>' +
      '</div>'
    );
    dialog.querySelector(".psw-wallet-dialog__close").addEventListener("click", function () {
      removeOverlay();
      reject(new Error("WALLET_SELECTION_CANCELLED"));
    });
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) {
        removeOverlay();
        reject(new Error("WALLET_SELECTION_CANCELLED"));
      }
    });
    Array.prototype.forEach.call(dialog.querySelectorAll("[data-wallet]"), function (button) {
      button.addEventListener("click", function () {
        var wallet = button.getAttribute("data-wallet");
        removeOverlay();
        resolve(wallet);
      });
    });
  });
}

export async function showWalletQr(uri, walletName) {
  var dataUrl;
  try {
    dataUrl = await QRCode.toDataURL(uri);
  } catch (error) {
    console.warn("[WalletConnect] QR data URL generation failed, using Phantom fallback", error);
    dataUrl = "https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=" + encodeURIComponent(uri);
  }
  window.dispatchEvent(new CustomEvent("showLoader", { detail: null }));
  window.dispatchEvent(new CustomEvent("openWalletQr", { detail: { qrDataUrl: dataUrl, walletName: walletName } }));
  var dialog = showDialog(
    '<div id="walletQrModal" class="psw-wallet-dialog__qr-shell" role="dialog" aria-modal="true" aria-label="WalletConnect QR code">' +
      '<div class="psw-wallet-dialog__gradient-border">' +
        '<div id="walletContent" class="psw-wallet-dialog__panel psw-wallet-dialog__panel--qr">' +
          '<button class="psw-wallet-dialog__close psw-button psw-button--secondary" type="button" aria-label="Close">×</button>' +
          '<h2>Scan with ' + walletName + ' to connect</h2>' +
          '<img class="psw-wallet-dialog__qr" src="' + dataUrl + '" alt="' + walletName + ' QR">' +
        '</div>' +
      '</div>' +
    '</div>'
  );
  document.body.style.overflow = "hidden";
  dialog.querySelector(".psw-wallet-dialog__close").addEventListener("click", removeOverlay);
}

export function closeWalletDialog() {
  removeOverlay();
  window.dispatchEvent(new Event("closeWalletQr"));
}
