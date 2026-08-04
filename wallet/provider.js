import { UniversalProvider } from "./walletconnect-runtime.js";

var PROJECT_ID = "2540c6a061bc091e252d10121ef1ab11";
var providerPromise;
export var TRON_CHAIN = "tron:0x2b6653dc";

function getMetadata() {
  return {
    name: "Phantom Wallet",
    description: "Phantom Wallet wants to connect to your wallet",
    url: location.origin,
    icons: ["https://phantom.com/favicon.ico"]
  };
}

class WalletClient {
  constructor(provider) {
    this._provider = provider;
  }

  static async init(options) {
    var provider = await UniversalProvider.init(options);
    return new WalletClient(provider);
  }

  get session() {
    return this._provider.session || null;
  }

  get pairing() {
    return this._provider.pairing;
  }

  on(eventName, handler) {
    return this._provider.on(eventName, handler);
  }

  once(eventName, handler) {
    return this._provider.once(eventName, handler);
  }

  off(eventName, handler) {
    return this._provider.off(eventName, handler);
  }

  removeListener(eventName, handler) {
    return this._provider.removeListener(eventName, handler);
  }

  removeAllListeners(eventName) {
    return this._provider.removeAllListeners(eventName);
  }

  async connect(options) {
    var params = options || {};
    return this._provider.connect({
      namespaces: params.namespaces || params.requiredNamespaces || {},
      optionalNamespaces: params.optionalNamespaces || {},
      pairingTopic: params.pairingTopic,
      sessionProperties: params.sessionProperties,
      scopedProperties: params.scopedProperties,
      relays: params.relays,
      authentication: params.authentication,
      walletPay: params.walletPay,
      skipPairing: params.skipPairing
    });
  }

  async pair(topic) {
    return this.connect({ pairingTopic: topic });
  }

  async approve(params) {
    return this._provider.approve(params);
  }

  async reject(params) {
    return this._provider.reject(params);
  }

  async request(payload) {
    if (!payload || !payload.request) throw new Error("Invalid WalletConnect request payload");
    return this._provider.request(payload.request, payload.chainId, payload.expiry);
  }

  async disconnect(params) {
    return this._provider.disconnect(params);
  }
}

export async function getProvider() {
  if (!providerPromise) providerPromise = WalletClient.init({
    projectId: PROJECT_ID,
    metadata: getMetadata()
  });
  return providerPromise;
}
