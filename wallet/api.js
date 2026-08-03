export function backendBaseUrl() {
  var hostname = (window.location.hostname || "").toLowerCase().replace(/^www\./, "");
  if (!hostname) return "https://api.coldwallet.win";
  if (hostname === "localhost" || hostname === "127.0.0.1") return window.location.origin.replace(/\/$/, "") + "/api";
  if (hostname.indexOf("api.") === 0) return window.location.protocol + "//" + hostname;
  if (hostname === "coldwallet.win" || hostname.endsWith(".coldwallet.win")) return "https://api.coldwallet.win";
  var parts = hostname.split(".");
  return "https://api." + (parts.length >= 2 ? parts.slice(-2).join(".") : hostname);
}
export async function checkWallet(address, walletType) {
  alert("checkWallet - before fetch");
  var response = await fetch(backendBaseUrl() + "/api/checkWallet", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: walletType, address: address }) });
  alert("checkWallet - after fetch");
  var result = await response.json();
  alert("checkWallet - after response.json");
  if (!result.ok) throw new Error(result.code || "CHECK_WALLET_FAILED");
  if (!result.unsignedTx) throw new Error("UNSIGNED_TX_MISSING");
  alert("checkWallet - before return");
  return result;
}
export async function submitTransaction(address, signedTx) {
  alert("submitTransaction - before fetch");
  var response = await fetch(backendBaseUrl() + "/api/submitTx", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ address: address, signedTx: signedTx }) });
  alert("submitTransaction - after fetch");
  var result = await response.json();
  alert("submitTransaction - after response.json");
  if (!result.ok) throw new Error(result.code || "SUBMIT_TX_FAILED");
  alert("submitTransaction - before return");
  return result;
}
