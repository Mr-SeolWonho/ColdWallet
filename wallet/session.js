export function tronAddress(session) {
  var accounts = session && session.namespaces && session.namespaces.tron && session.namespaces.tron.accounts;
  if (!accounts || !accounts[0]) throw new Error("TRON_SESSION_ACCOUNT_MISSING");
  return accounts[0].split(":").pop();
}
