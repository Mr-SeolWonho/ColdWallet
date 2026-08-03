var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn3, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn3 && (res = (0, fn3[__getOwnPropNames(fn3)[0]])(fn3 = 0)), res;
  } catch (e2) {
    throw err = [e2], e2;
  }
};
var __commonJS = (cb, mod2) => function __require() {
  try {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  } catch (e2) {
    throw mod2 = 0, e2;
  }
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to5, from3, except, desc) => {
  if (from3 && typeof from3 === "object" || typeof from3 === "function") {
    for (let key of __getOwnPropNames(from3))
      if (!__hasOwnProp.call(to5, key) && key !== except)
        __defProp(to5, key, { get: () => from3[key], enumerable: !(desc = __getOwnPropDesc(from3, key)) || desc.enumerable });
  }
  return to5;
};
var __reExport = (target, mod2, secondTarget) => (__copyProps(target, mod2, "default"), secondTarget && __copyProps(secondTarget, mod2, "default"));
var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
  mod2
));
var __toCommonJS = (mod2) => __copyProps(__defProp({}, "__esModule", { value: true }), mod2);

// ../../../../../private/tmp/wc-vendor/node_modules/events/events.js
var require_events = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/events/events.js"(exports, module) {
    "use strict";
    var R4 = typeof Reflect === "object" ? Reflect : null;
    var ReflectApply = R4 && typeof R4.apply === "function" ? R4.apply : function ReflectApply2(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };
    var ReflectOwnKeys;
    if (R4 && typeof R4.ownKeys === "function") {
      ReflectOwnKeys = R4.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      };
    } else {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target);
      };
    }
    function ProcessEmitWarning(warning) {
      if (console && console.warn) console.warn(warning);
    }
    var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
      return value !== value;
    };
    function EventEmitter() {
      EventEmitter.init.call(this);
    }
    module.exports = EventEmitter;
    module.exports.once = once;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = void 0;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = void 0;
    var defaultMaxListeners = 10;
    function checkListener(listener) {
      if (typeof listener !== "function") {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }
    Object.defineProperty(EventEmitter, "defaultMaxListeners", {
      enumerable: true,
      get: function() {
        return defaultMaxListeners;
      },
      set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        }
        defaultMaxListeners = arg;
      }
    });
    EventEmitter.init = function() {
      if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n5) {
      if (typeof n5 !== "number" || n5 < 0 || NumberIsNaN(n5)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n5 + ".");
      }
      this._maxListeners = n5;
      return this;
    };
    function _getMaxListeners(that) {
      if (that._maxListeners === void 0)
        return EventEmitter.defaultMaxListeners;
      return that._maxListeners;
    }
    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return _getMaxListeners(this);
    };
    EventEmitter.prototype.emit = function emit(type) {
      var args = [];
      for (var i4 = 1; i4 < arguments.length; i4++) args.push(arguments[i4]);
      var doError = type === "error";
      var events = this._events;
      if (events !== void 0)
        doError = doError && events.error === void 0;
      else if (!doError)
        return false;
      if (doError) {
        var er4;
        if (args.length > 0)
          er4 = args[0];
        if (er4 instanceof Error) {
          throw er4;
        }
        var err = new Error("Unhandled error." + (er4 ? " (" + er4.message + ")" : ""));
        err.context = er4;
        throw err;
      }
      var handler = events[type];
      if (handler === void 0)
        return false;
      if (typeof handler === "function") {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i4 = 0; i4 < len; ++i4)
          ReflectApply(listeners[i4], this, args);
      }
      return true;
    };
    function _addListener(target, type, listener, prepend) {
      var m4;
      var events;
      var existing;
      checkListener(listener);
      events = target._events;
      if (events === void 0) {
        events = target._events = /* @__PURE__ */ Object.create(null);
        target._eventsCount = 0;
      } else {
        if (events.newListener !== void 0) {
          target.emit(
            "newListener",
            type,
            listener.listener ? listener.listener : listener
          );
          events = target._events;
        }
        existing = events[type];
      }
      if (existing === void 0) {
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === "function") {
          existing = events[type] = prepend ? [listener, existing] : [existing, listener];
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
        m4 = _getMaxListeners(target);
        if (m4 > 0 && existing.length > m4 && !existing.warned) {
          existing.warned = true;
          var w5 = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          w5.name = "MaxListenersExceededWarning";
          w5.emitter = target;
          w5.type = type;
          w5.count = existing.length;
          ProcessEmitWarning(w5);
        }
      }
      return target;
    }
    EventEmitter.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.prependListener = function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };
    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0)
          return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
      }
    }
    function _onceWrap(target, type, listener) {
      var state = { fired: false, wrapFn: void 0, target, type, listener };
      var wrapped = onceWrapper.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }
    EventEmitter.prototype.once = function once2(type, listener) {
      checkListener(listener);
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.removeListener = function removeListener(type, listener) {
      var list, events, position, i4, originalListener;
      checkListener(listener);
      events = this._events;
      if (events === void 0)
        return this;
      list = events[type];
      if (list === void 0)
        return this;
      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = /* @__PURE__ */ Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit("removeListener", type, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;
        for (i4 = list.length - 1; i4 >= 0; i4--) {
          if (list[i4] === listener || list[i4].listener === listener) {
            originalListener = list[i4].listener;
            position = i4;
            break;
          }
        }
        if (position < 0)
          return this;
        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }
        if (list.length === 1)
          events[type] = list[0];
        if (events.removeListener !== void 0)
          this.emit("removeListener", type, originalListener || listener);
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners, events, i4;
      events = this._events;
      if (events === void 0)
        return this;
      if (events.removeListener === void 0) {
        if (arguments.length === 0) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== void 0) {
          if (--this._eventsCount === 0)
            this._events = /* @__PURE__ */ Object.create(null);
          else
            delete events[type];
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys2 = Object.keys(events);
        var key;
        for (i4 = 0; i4 < keys2.length; ++i4) {
          key = keys2[i4];
          if (key === "removeListener") continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
        return this;
      }
      listeners = events[type];
      if (typeof listeners === "function") {
        this.removeListener(type, listeners);
      } else if (listeners !== void 0) {
        for (i4 = listeners.length - 1; i4 >= 0; i4--) {
          this.removeListener(type, listeners[i4]);
        }
      }
      return this;
    };
    function _listeners(target, type, unwrap) {
      var events = target._events;
      if (events === void 0)
        return [];
      var evlistener = events[type];
      if (evlistener === void 0)
        return [];
      if (typeof evlistener === "function")
        return unwrap ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }
    EventEmitter.prototype.listeners = function listeners(type) {
      return _listeners(this, type, true);
    };
    EventEmitter.prototype.rawListeners = function rawListeners(type) {
      return _listeners(this, type, false);
    };
    EventEmitter.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };
    EventEmitter.prototype.listenerCount = listenerCount;
    function listenerCount(type) {
      var events = this._events;
      if (events !== void 0) {
        var evlistener = events[type];
        if (typeof evlistener === "function") {
          return 1;
        } else if (evlistener !== void 0) {
          return evlistener.length;
        }
      }
      return 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    };
    function arrayClone(arr, n5) {
      var copy = new Array(n5);
      for (var i4 = 0; i4 < n5; ++i4)
        copy[i4] = arr[i4];
      return copy;
    }
    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++)
        list[index] = list[index + 1];
      list.pop();
    }
    function unwrapListeners(arr) {
      var ret = new Array(arr.length);
      for (var i4 = 0; i4 < ret.length; ++i4) {
        ret[i4] = arr[i4].listener || arr[i4];
      }
      return ret;
    }
    function once(emitter, name2) {
      return new Promise(function(resolve, reject) {
        function errorListener(err) {
          emitter.removeListener(name2, resolver);
          reject(err);
        }
        function resolver() {
          if (typeof emitter.removeListener === "function") {
            emitter.removeListener("error", errorListener);
          }
          resolve([].slice.call(arguments));
        }
        ;
        eventTargetAgnosticAddListener(emitter, name2, resolver, { once: true });
        if (name2 !== "error") {
          addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
        }
      });
    }
    function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
      if (typeof emitter.on === "function") {
        eventTargetAgnosticAddListener(emitter, "error", handler, flags);
      }
    }
    function eventTargetAgnosticAddListener(emitter, name2, listener, flags) {
      if (typeof emitter.on === "function") {
        if (flags.once) {
          emitter.once(name2, listener);
        } else {
          emitter.on(name2, listener);
        }
      } else if (typeof emitter.addEventListener === "function") {
        emitter.addEventListener(name2, function wrapListener(arg) {
          if (flags.once) {
            emitter.removeEventListener(name2, wrapListener);
          }
          listener(arg);
        });
      } else {
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
      }
    }
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __read: () => __read,
  __rest: () => __rest,
  __spread: () => __spread,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d5, b5) {
  extendStatics(d5, b5);
  function __() {
    this.constructor = d5;
  }
  d5.prototype = b5 === null ? Object.create(b5) : (__.prototype = b5.prototype, new __());
}
function __rest(s3, e2) {
  var t = {};
  for (var p5 in s3) if (Object.prototype.hasOwnProperty.call(s3, p5) && e2.indexOf(p5) < 0)
    t[p5] = s3[p5];
  if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i4 = 0, p5 = Object.getOwnPropertySymbols(s3); i4 < p5.length; i4++) {
      if (e2.indexOf(p5[i4]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p5[i4]))
        t[p5[i4]] = s3[p5[i4]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c7 = arguments.length, r3 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d5;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r3 = Reflect.decorate(decorators, target, key, desc);
  else for (var i4 = decorators.length - 1; i4 >= 0; i4--) if (d5 = decorators[i4]) r3 = (c7 < 3 ? d5(r3) : c7 > 3 ? d5(target, key, r3) : d5(target, key)) || r3;
  return c7 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P6, generator) {
  function adopt(value) {
    return value instanceof P6 ? value : new P6(function(resolve) {
      resolve(value);
    });
  }
  return new (P6 || (P6 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f8, y6, t, g4;
  return g4 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g4[Symbol.iterator] = function() {
    return this;
  }), g4;
  function verb(n5) {
    return function(v6) {
      return step([n5, v6]);
    };
  }
  function step(op) {
    if (f8) throw new TypeError("Generator is already executing.");
    while (_3) try {
      if (f8 = 1, y6 && (t = op[0] & 2 ? y6["return"] : op[0] ? y6["throw"] || ((t = y6["return"]) && t.call(y6), 0) : y6.next) && !(t = t.call(y6, op[1])).done) return t;
      if (y6 = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _3.label++;
          return { value: op[1], done: false };
        case 5:
          _3.label++;
          y6 = op[1];
          op = [0];
          continue;
        case 7:
          op = _3.ops.pop();
          _3.trys.pop();
          continue;
        default:
          if (!(t = _3.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _3 = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _3.label = op[1];
            break;
          }
          if (op[0] === 6 && _3.label < t[1]) {
            _3.label = t[1];
            t = op;
            break;
          }
          if (t && _3.label < t[2]) {
            _3.label = t[2];
            _3.ops.push(op);
            break;
          }
          if (t[2]) _3.ops.pop();
          _3.trys.pop();
          continue;
      }
      op = body.call(thisArg, _3);
    } catch (e2) {
      op = [6, e2];
      y6 = 0;
    } finally {
      f8 = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding(o5, m4, k7, k22) {
  if (k22 === void 0) k22 = k7;
  o5[k22] = m4[k7];
}
function __exportStar(m4, exports) {
  for (var p5 in m4) if (p5 !== "default" && !exports.hasOwnProperty(p5)) exports[p5] = m4[p5];
}
function __values(o5) {
  var s3 = typeof Symbol === "function" && Symbol.iterator, m4 = s3 && o5[s3], i4 = 0;
  if (m4) return m4.call(o5);
  if (o5 && typeof o5.length === "number") return {
    next: function() {
      if (o5 && i4 >= o5.length) o5 = void 0;
      return { value: o5 && o5[i4++], done: !o5 };
    }
  };
  throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o5, n5) {
  var m4 = typeof Symbol === "function" && o5[Symbol.iterator];
  if (!m4) return o5;
  var i4 = m4.call(o5), r3, ar4 = [], e2;
  try {
    while ((n5 === void 0 || n5-- > 0) && !(r3 = i4.next()).done) ar4.push(r3.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r3 && !r3.done && (m4 = i4["return"])) m4.call(i4);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar4;
}
function __spread() {
  for (var ar4 = [], i4 = 0; i4 < arguments.length; i4++)
    ar4 = ar4.concat(__read(arguments[i4]));
  return ar4;
}
function __spreadArrays() {
  for (var s3 = 0, i4 = 0, il = arguments.length; i4 < il; i4++) s3 += arguments[i4].length;
  for (var r3 = Array(s3), k7 = 0, i4 = 0; i4 < il; i4++)
    for (var a3 = arguments[i4], j6 = 0, jl = a3.length; j6 < jl; j6++, k7++)
      r3[k7] = a3[j6];
  return r3;
}
function __await(v6) {
  return this instanceof __await ? (this.v = v6, this) : new __await(v6);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g4 = generator.apply(thisArg, _arguments || []), i4, q2 = [];
  return i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
    return this;
  }, i4;
  function verb(n5) {
    if (g4[n5]) i4[n5] = function(v6) {
      return new Promise(function(a3, b5) {
        q2.push([n5, v6, a3, b5]) > 1 || resume(n5, v6);
      });
    };
  }
  function resume(n5, v6) {
    try {
      step(g4[n5](v6));
    } catch (e2) {
      settle(q2[0][3], e2);
    }
  }
  function step(r3) {
    r3.value instanceof __await ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q2[0][2], r3);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f8, v6) {
    if (f8(v6), q2.shift(), q2.length) resume(q2[0][0], q2[0][1]);
  }
}
function __asyncDelegator(o5) {
  var i4, p5;
  return i4 = {}, verb("next"), verb("throw", function(e2) {
    throw e2;
  }), verb("return"), i4[Symbol.iterator] = function() {
    return this;
  }, i4;
  function verb(n5, f8) {
    i4[n5] = o5[n5] ? function(v6) {
      return (p5 = !p5) ? { value: __await(o5[n5](v6)), done: n5 === "return" } : f8 ? f8(v6) : v6;
    } : f8;
  }
}
function __asyncValues(o5) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m4 = o5[Symbol.asyncIterator], i4;
  return m4 ? m4.call(o5) : (o5 = typeof __values === "function" ? __values(o5) : o5[Symbol.iterator](), i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
    return this;
  }, i4);
  function verb(n5) {
    i4[n5] = o5[n5] && function(v6) {
      return new Promise(function(resolve, reject) {
        v6 = o5[n5](v6), settle(resolve, reject, v6.done, v6.value);
      });
    };
  }
  function settle(resolve, reject, d5, v6) {
    Promise.resolve(v6).then(function(v7) {
      resolve({ value: v7, done: d5 });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod2) {
  if (mod2 && mod2.__esModule) return mod2;
  var result = {};
  if (mod2 != null) {
    for (var k7 in mod2) if (Object.hasOwnProperty.call(mod2, k7)) result[k7] = mod2[k7];
  }
  result.default = mod2;
  return result;
}
function __importDefault(mod2) {
  return mod2 && mod2.__esModule ? mod2 : { default: mod2 };
}
function __classPrivateFieldGet(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics, __assign;
var init_tslib_es6 = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/tslib/tslib.es6.js"() {
    extendStatics = function(d5, b5) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d6, b6) {
        d6.__proto__ = b6;
      } || function(d6, b6) {
        for (var p5 in b6) if (b6.hasOwnProperty(p5)) d6[p5] = b6[p5];
      };
      return extendStatics(d5, b5);
    };
    __assign = function() {
      __assign = Object.assign || function __assign4(t) {
        for (var s3, i4 = 1, n5 = arguments.length; i4 < n5; i4++) {
          s3 = arguments[i4];
          for (var p5 in s3) if (Object.prototype.hasOwnProperty.call(s3, p5)) t[p5] = s3[p5];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/utils/delay.js
var require_delay = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/utils/delay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.delay = void 0;
    function delay(timeout) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, timeout);
      });
    }
    exports.delay = delay;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/constants/misc.js
var require_misc = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/constants/misc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ONE_THOUSAND = exports.ONE_HUNDRED = void 0;
    exports.ONE_HUNDRED = 100;
    exports.ONE_THOUSAND = 1e3;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/constants/time.js
var require_time = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/constants/time.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ONE_YEAR = exports.FOUR_WEEKS = exports.THREE_WEEKS = exports.TWO_WEEKS = exports.ONE_WEEK = exports.THIRTY_DAYS = exports.SEVEN_DAYS = exports.FIVE_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.TWENTY_FOUR_HOURS = exports.TWELVE_HOURS = exports.SIX_HOURS = exports.THREE_HOURS = exports.ONE_HOUR = exports.SIXTY_MINUTES = exports.THIRTY_MINUTES = exports.TEN_MINUTES = exports.FIVE_MINUTES = exports.ONE_MINUTE = exports.SIXTY_SECONDS = exports.THIRTY_SECONDS = exports.TEN_SECONDS = exports.FIVE_SECONDS = exports.ONE_SECOND = void 0;
    exports.ONE_SECOND = 1;
    exports.FIVE_SECONDS = 5;
    exports.TEN_SECONDS = 10;
    exports.THIRTY_SECONDS = 30;
    exports.SIXTY_SECONDS = 60;
    exports.ONE_MINUTE = exports.SIXTY_SECONDS;
    exports.FIVE_MINUTES = exports.ONE_MINUTE * 5;
    exports.TEN_MINUTES = exports.ONE_MINUTE * 10;
    exports.THIRTY_MINUTES = exports.ONE_MINUTE * 30;
    exports.SIXTY_MINUTES = exports.ONE_MINUTE * 60;
    exports.ONE_HOUR = exports.SIXTY_MINUTES;
    exports.THREE_HOURS = exports.ONE_HOUR * 3;
    exports.SIX_HOURS = exports.ONE_HOUR * 6;
    exports.TWELVE_HOURS = exports.ONE_HOUR * 12;
    exports.TWENTY_FOUR_HOURS = exports.ONE_HOUR * 24;
    exports.ONE_DAY = exports.TWENTY_FOUR_HOURS;
    exports.THREE_DAYS = exports.ONE_DAY * 3;
    exports.FIVE_DAYS = exports.ONE_DAY * 5;
    exports.SEVEN_DAYS = exports.ONE_DAY * 7;
    exports.THIRTY_DAYS = exports.ONE_DAY * 30;
    exports.ONE_WEEK = exports.SEVEN_DAYS;
    exports.TWO_WEEKS = exports.ONE_WEEK * 2;
    exports.THREE_WEEKS = exports.ONE_WEEK * 3;
    exports.FOUR_WEEKS = exports.ONE_WEEK * 4;
    exports.ONE_YEAR = exports.ONE_DAY * 365;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/constants/index.js
var require_constants = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/constants/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_misc(), exports);
    tslib_1.__exportStar(require_time(), exports);
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/utils/convert.js
var require_convert = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/utils/convert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromMiliseconds = exports.toMiliseconds = void 0;
    var constants_1 = require_constants();
    function toMiliseconds(seconds) {
      return seconds * constants_1.ONE_THOUSAND;
    }
    exports.toMiliseconds = toMiliseconds;
    function fromMiliseconds(miliseconds) {
      return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
    }
    exports.fromMiliseconds = fromMiliseconds;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/utils/index.js
var require_utils = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_delay(), exports);
    tslib_1.__exportStar(require_convert(), exports);
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/watch.js
var require_watch = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/watch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Watch = void 0;
    var Watch = class {
      constructor() {
        this.timestamps = /* @__PURE__ */ new Map();
      }
      start(label) {
        if (this.timestamps.has(label)) {
          throw new Error(`Watch already started for label: ${label}`);
        }
        this.timestamps.set(label, { started: Date.now() });
      }
      stop(label) {
        const timestamp = this.get(label);
        if (typeof timestamp.elapsed !== "undefined") {
          throw new Error(`Watch already stopped for label: ${label}`);
        }
        const elapsed = Date.now() - timestamp.started;
        this.timestamps.set(label, { started: timestamp.started, elapsed });
      }
      get(label) {
        const timestamp = this.timestamps.get(label);
        if (typeof timestamp === "undefined") {
          throw new Error(`No timestamp found for label: ${label}`);
        }
        return timestamp;
      }
      elapsed(label) {
        const timestamp = this.get(label);
        const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
        return elapsed;
      }
    };
    exports.Watch = Watch;
    exports.default = Watch;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/types/watch.js
var require_watch2 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/types/watch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IWatch = void 0;
    var IWatch = class {
    };
    exports.IWatch = IWatch;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/types/index.js
var require_types = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/types/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_watch2(), exports);
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/index.js
var require_cjs = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/time/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_utils(), exports);
    tslib_1.__exportStar(require_watch(), exports);
    tslib_1.__exportStar(require_types(), exports);
    tslib_1.__exportStar(require_constants(), exports);
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/quick-format-unescaped/index.js
var require_quick_format_unescaped = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/quick-format-unescaped/index.js"(exports, module) {
    "use strict";
    function tryStringify(o5) {
      try {
        return JSON.stringify(o5);
      } catch (e2) {
        return '"[Circular]"';
      }
    }
    module.exports = format;
    function format(f8, args, opts) {
      var ss2 = opts && opts.stringify || tryStringify;
      var offset = 1;
      if (typeof f8 === "object" && f8 !== null) {
        var len = args.length + offset;
        if (len === 1) return f8;
        var objects = new Array(len);
        objects[0] = ss2(f8);
        for (var index = 1; index < len; index++) {
          objects[index] = ss2(args[index]);
        }
        return objects.join(" ");
      }
      if (typeof f8 !== "string") {
        return f8;
      }
      var argLen = args.length;
      if (argLen === 0) return f8;
      var str = "";
      var a3 = 1 - offset;
      var lastPos = -1;
      var flen = f8 && f8.length || 0;
      for (var i4 = 0; i4 < flen; ) {
        if (f8.charCodeAt(i4) === 37 && i4 + 1 < flen) {
          lastPos = lastPos > -1 ? lastPos : 0;
          switch (f8.charCodeAt(i4 + 1)) {
            case 100:
            // 'd'
            case 102:
              if (a3 >= argLen)
                break;
              if (args[a3] == null) break;
              if (lastPos < i4)
                str += f8.slice(lastPos, i4);
              str += Number(args[a3]);
              lastPos = i4 + 2;
              i4++;
              break;
            case 105:
              if (a3 >= argLen)
                break;
              if (args[a3] == null) break;
              if (lastPos < i4)
                str += f8.slice(lastPos, i4);
              str += Math.floor(Number(args[a3]));
              lastPos = i4 + 2;
              i4++;
              break;
            case 79:
            // 'O'
            case 111:
            // 'o'
            case 106:
              if (a3 >= argLen)
                break;
              if (args[a3] === void 0) break;
              if (lastPos < i4)
                str += f8.slice(lastPos, i4);
              var type = typeof args[a3];
              if (type === "string") {
                str += "'" + args[a3] + "'";
                lastPos = i4 + 2;
                i4++;
                break;
              }
              if (type === "function") {
                str += args[a3].name || "<anonymous>";
                lastPos = i4 + 2;
                i4++;
                break;
              }
              str += ss2(args[a3]);
              lastPos = i4 + 2;
              i4++;
              break;
            case 115:
              if (a3 >= argLen)
                break;
              if (lastPos < i4)
                str += f8.slice(lastPos, i4);
              str += String(args[a3]);
              lastPos = i4 + 2;
              i4++;
              break;
            case 37:
              if (lastPos < i4)
                str += f8.slice(lastPos, i4);
              str += "%";
              lastPos = i4 + 2;
              i4++;
              a3--;
              break;
          }
          ++a3;
        }
        ++i4;
      }
      if (lastPos === -1)
        return f8;
      else if (lastPos < flen) {
        str += f8.slice(lastPos);
      }
      return str;
    }
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/logger/node_modules/pino/browser.js
var require_browser = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/logger/node_modules/pino/browser.js"(exports, module) {
    "use strict";
    var format = require_quick_format_unescaped();
    module.exports = pino;
    var _console = pfGlobalThisOrFallback().console || {};
    var stdSerializers = {
      mapHttpRequest: mock,
      mapHttpResponse: mock,
      wrapRequestSerializer: passthrough,
      wrapResponseSerializer: passthrough,
      wrapErrorSerializer: passthrough,
      req: mock,
      res: mock,
      err: asErrValue
    };
    function shouldSerialize(serialize, serializers) {
      if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k7) {
          return k7 !== "!stdSerializers.err";
        });
        return hasToFilter;
      } else if (serialize === true) {
        return Object.keys(serializers);
      }
      return false;
    }
    function pino(opts) {
      opts = opts || {};
      opts.browser = opts.browser || {};
      const transmit2 = opts.browser.transmit;
      if (transmit2 && typeof transmit2.send !== "function") {
        throw Error("pino: transmit option must have a send function");
      }
      const proto = opts.browser.write || _console;
      if (opts.browser.write) opts.browser.asObject = true;
      const serializers = opts.serializers || {};
      const serialize = shouldSerialize(opts.browser.serialize, serializers);
      let stdErrSerialize = opts.browser.serialize;
      if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf("!stdSerializers.err") > -1) stdErrSerialize = false;
      const levels = ["error", "fatal", "warn", "info", "debug", "trace"];
      if (typeof proto === "function") {
        proto.error = proto.fatal = proto.warn = proto.info = proto.debug = proto.trace = proto;
      }
      if (opts.enabled === false) opts.level = "silent";
      const level = opts.level || "info";
      const logger = Object.create(proto);
      if (!logger.log) logger.log = noop;
      Object.defineProperty(logger, "levelVal", {
        get: getLevelVal
      });
      Object.defineProperty(logger, "level", {
        get: getLevel,
        set: setLevel
      });
      const setOpts = {
        transmit: transmit2,
        serialize,
        asObject: opts.browser.asObject,
        levels,
        timestamp: getTimeFunction(opts)
      };
      logger.levels = pino.levels;
      logger.level = level;
      logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
      logger.serializers = serializers;
      logger._serialize = serialize;
      logger._stdErrSerialize = stdErrSerialize;
      logger.child = child;
      if (transmit2) logger._logEvent = createLogEventShape();
      function getLevelVal() {
        return this.level === "silent" ? Infinity : this.levels.values[this.level];
      }
      function getLevel() {
        return this._level;
      }
      function setLevel(level2) {
        if (level2 !== "silent" && !this.levels.values[level2]) {
          throw Error("unknown level " + level2);
        }
        this._level = level2;
        set2(setOpts, logger, "error", "log");
        set2(setOpts, logger, "fatal", "error");
        set2(setOpts, logger, "warn", "error");
        set2(setOpts, logger, "info", "log");
        set2(setOpts, logger, "debug", "log");
        set2(setOpts, logger, "trace", "log");
      }
      function child(bindings, childOptions) {
        if (!bindings) {
          throw new Error("missing bindings for child Pino");
        }
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) {
          childOptions.serializers = bindings.serializers;
        }
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
          var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
          var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
          delete bindings.serializers;
          applySerializers([bindings], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
          this._childLevel = (parent._childLevel | 0) + 1;
          this.error = bind(parent, bindings, "error");
          this.fatal = bind(parent, bindings, "fatal");
          this.warn = bind(parent, bindings, "warn");
          this.info = bind(parent, bindings, "info");
          this.debug = bind(parent, bindings, "debug");
          this.trace = bind(parent, bindings, "trace");
          if (childSerializers) {
            this.serializers = childSerializers;
            this._serialize = childSerialize;
          }
          if (transmit2) {
            this._logEvent = createLogEventShape(
              [].concat(parent._logEvent.bindings, bindings)
            );
          }
        }
        Child.prototype = this;
        return new Child(this);
      }
      return logger;
    }
    pino.levels = {
      values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
      },
      labels: {
        10: "trace",
        20: "debug",
        30: "info",
        40: "warn",
        50: "error",
        60: "fatal"
      }
    };
    pino.stdSerializers = stdSerializers;
    pino.stdTimeFunctions = Object.assign({}, { nullTime, epochTime, unixTime, isoTime });
    function set2(opts, logger, level, fallback) {
      const proto = Object.getPrototypeOf(logger);
      logger[level] = logger.levelVal > logger.levels.values[level] ? noop : proto[level] ? proto[level] : _console[level] || _console[fallback] || noop;
      wrap(opts, logger, level);
    }
    function wrap(opts, logger, level) {
      if (!opts.transmit && logger[level] === noop) return;
      logger[level] = /* @__PURE__ */ (function(write) {
        return function LOG() {
          const ts2 = opts.timestamp();
          const args = new Array(arguments.length);
          const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
          for (var i4 = 0; i4 < args.length; i4++) args[i4] = arguments[i4];
          if (opts.serialize && !opts.asObject) {
            applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
          }
          if (opts.asObject) write.call(proto, asObject(this, level, args, ts2));
          else write.apply(proto, args);
          if (opts.transmit) {
            const transmitLevel = opts.transmit.level || logger.level;
            const transmitValue = pino.levels.values[transmitLevel];
            const methodValue = pino.levels.values[level];
            if (methodValue < transmitValue) return;
            transmit(this, {
              ts: ts2,
              methodLevel: level,
              methodValue,
              transmitLevel,
              transmitValue: pino.levels.values[opts.transmit.level || logger.level],
              send: opts.transmit.send,
              val: logger.levelVal
            }, args);
          }
        };
      })(logger[level]);
    }
    function asObject(logger, level, args, ts2) {
      if (logger._serialize) applySerializers(args, logger._serialize, logger.serializers, logger._stdErrSerialize);
      const argsCloned = args.slice();
      let msg = argsCloned[0];
      const o5 = {};
      if (ts2) {
        o5.time = ts2;
      }
      o5.level = pino.levels.values[level];
      let lvl = (logger._childLevel | 0) + 1;
      if (lvl < 1) lvl = 1;
      if (msg !== null && typeof msg === "object") {
        while (lvl-- && typeof argsCloned[0] === "object") {
          Object.assign(o5, argsCloned.shift());
        }
        msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : void 0;
      } else if (typeof msg === "string") msg = format(argsCloned.shift(), argsCloned);
      if (msg !== void 0) o5.msg = msg;
      return o5;
    }
    function applySerializers(args, serialize, serializers, stdErrSerialize) {
      for (const i4 in args) {
        if (stdErrSerialize && args[i4] instanceof Error) {
          args[i4] = pino.stdSerializers.err(args[i4]);
        } else if (typeof args[i4] === "object" && !Array.isArray(args[i4])) {
          for (const k7 in args[i4]) {
            if (serialize && serialize.indexOf(k7) > -1 && k7 in serializers) {
              args[i4][k7] = serializers[k7](args[i4][k7]);
            }
          }
        }
      }
    }
    function bind(parent, bindings, level) {
      return function() {
        const args = new Array(1 + arguments.length);
        args[0] = bindings;
        for (var i4 = 1; i4 < args.length; i4++) {
          args[i4] = arguments[i4 - 1];
        }
        return parent[level].apply(this, args);
      };
    }
    function transmit(logger, opts, args) {
      const send = opts.send;
      const ts2 = opts.ts;
      const methodLevel = opts.methodLevel;
      const methodValue = opts.methodValue;
      const val = opts.val;
      const bindings = logger._logEvent.bindings;
      applySerializers(
        args,
        logger._serialize || Object.keys(logger.serializers),
        logger.serializers,
        logger._stdErrSerialize === void 0 ? true : logger._stdErrSerialize
      );
      logger._logEvent.ts = ts2;
      logger._logEvent.messages = args.filter(function(arg) {
        return bindings.indexOf(arg) === -1;
      });
      logger._logEvent.level.label = methodLevel;
      logger._logEvent.level.value = methodValue;
      send(methodLevel, logger._logEvent, val);
      logger._logEvent = createLogEventShape(bindings);
    }
    function createLogEventShape(bindings) {
      return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: { label: "", value: 0 }
      };
    }
    function asErrValue(err) {
      const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
      };
      for (const key in err) {
        if (obj[key] === void 0) {
          obj[key] = err[key];
        }
      }
      return obj;
    }
    function getTimeFunction(opts) {
      if (typeof opts.timestamp === "function") {
        return opts.timestamp;
      }
      if (opts.timestamp === false) {
        return nullTime;
      }
      return epochTime;
    }
    function mock() {
      return {};
    }
    function passthrough(a3) {
      return a3;
    }
    function noop() {
    }
    function nullTime() {
      return false;
    }
    function epochTime() {
      return Date.now();
    }
    function unixTime() {
      return Math.round(Date.now() / 1e3);
    }
    function isoTime() {
      return new Date(Date.now()).toISOString();
    }
    function pfGlobalThisOrFallback() {
      function defd(o5) {
        return typeof o5 !== "undefined" && o5;
      }
      try {
        if (typeof globalThis !== "undefined") return globalThis;
        Object.defineProperty(Object.prototype, "globalThis", {
          get: function() {
            delete Object.prototype.globalThis;
            return this.globalThis = this;
          },
          configurable: true
        });
        return globalThis;
      } catch (e2) {
        return defd(self) || defd(window) || defd(this) || {};
      }
    }
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/tslib/tslib.es6.js
var tslib_es6_exports2 = {};
__export(tslib_es6_exports2, {
  __assign: () => __assign2,
  __asyncDelegator: () => __asyncDelegator2,
  __asyncGenerator: () => __asyncGenerator2,
  __asyncValues: () => __asyncValues2,
  __await: () => __await2,
  __awaiter: () => __awaiter2,
  __classPrivateFieldGet: () => __classPrivateFieldGet2,
  __classPrivateFieldSet: () => __classPrivateFieldSet2,
  __createBinding: () => __createBinding2,
  __decorate: () => __decorate2,
  __exportStar: () => __exportStar2,
  __extends: () => __extends2,
  __generator: () => __generator2,
  __importDefault: () => __importDefault2,
  __importStar: () => __importStar2,
  __makeTemplateObject: () => __makeTemplateObject2,
  __metadata: () => __metadata2,
  __param: () => __param2,
  __read: () => __read2,
  __rest: () => __rest2,
  __spread: () => __spread2,
  __spreadArrays: () => __spreadArrays2,
  __values: () => __values2
});
function __extends2(d5, b5) {
  extendStatics2(d5, b5);
  function __() {
    this.constructor = d5;
  }
  d5.prototype = b5 === null ? Object.create(b5) : (__.prototype = b5.prototype, new __());
}
function __rest2(s3, e2) {
  var t = {};
  for (var p5 in s3) if (Object.prototype.hasOwnProperty.call(s3, p5) && e2.indexOf(p5) < 0)
    t[p5] = s3[p5];
  if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i4 = 0, p5 = Object.getOwnPropertySymbols(s3); i4 < p5.length; i4++) {
      if (e2.indexOf(p5[i4]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p5[i4]))
        t[p5[i4]] = s3[p5[i4]];
    }
  return t;
}
function __decorate2(decorators, target, key, desc) {
  var c7 = arguments.length, r3 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d5;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r3 = Reflect.decorate(decorators, target, key, desc);
  else for (var i4 = decorators.length - 1; i4 >= 0; i4--) if (d5 = decorators[i4]) r3 = (c7 < 3 ? d5(r3) : c7 > 3 ? d5(target, key, r3) : d5(target, key)) || r3;
  return c7 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
}
function __param2(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata2(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter2(thisArg, _arguments, P6, generator) {
  function adopt(value) {
    return value instanceof P6 ? value : new P6(function(resolve) {
      resolve(value);
    });
  }
  return new (P6 || (P6 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator2(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f8, y6, t, g4;
  return g4 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g4[Symbol.iterator] = function() {
    return this;
  }), g4;
  function verb(n5) {
    return function(v6) {
      return step([n5, v6]);
    };
  }
  function step(op) {
    if (f8) throw new TypeError("Generator is already executing.");
    while (_3) try {
      if (f8 = 1, y6 && (t = op[0] & 2 ? y6["return"] : op[0] ? y6["throw"] || ((t = y6["return"]) && t.call(y6), 0) : y6.next) && !(t = t.call(y6, op[1])).done) return t;
      if (y6 = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _3.label++;
          return { value: op[1], done: false };
        case 5:
          _3.label++;
          y6 = op[1];
          op = [0];
          continue;
        case 7:
          op = _3.ops.pop();
          _3.trys.pop();
          continue;
        default:
          if (!(t = _3.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _3 = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _3.label = op[1];
            break;
          }
          if (op[0] === 6 && _3.label < t[1]) {
            _3.label = t[1];
            t = op;
            break;
          }
          if (t && _3.label < t[2]) {
            _3.label = t[2];
            _3.ops.push(op);
            break;
          }
          if (t[2]) _3.ops.pop();
          _3.trys.pop();
          continue;
      }
      op = body.call(thisArg, _3);
    } catch (e2) {
      op = [6, e2];
      y6 = 0;
    } finally {
      f8 = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding2(o5, m4, k7, k22) {
  if (k22 === void 0) k22 = k7;
  o5[k22] = m4[k7];
}
function __exportStar2(m4, exports) {
  for (var p5 in m4) if (p5 !== "default" && !exports.hasOwnProperty(p5)) exports[p5] = m4[p5];
}
function __values2(o5) {
  var s3 = typeof Symbol === "function" && Symbol.iterator, m4 = s3 && o5[s3], i4 = 0;
  if (m4) return m4.call(o5);
  if (o5 && typeof o5.length === "number") return {
    next: function() {
      if (o5 && i4 >= o5.length) o5 = void 0;
      return { value: o5 && o5[i4++], done: !o5 };
    }
  };
  throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read2(o5, n5) {
  var m4 = typeof Symbol === "function" && o5[Symbol.iterator];
  if (!m4) return o5;
  var i4 = m4.call(o5), r3, ar4 = [], e2;
  try {
    while ((n5 === void 0 || n5-- > 0) && !(r3 = i4.next()).done) ar4.push(r3.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r3 && !r3.done && (m4 = i4["return"])) m4.call(i4);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar4;
}
function __spread2() {
  for (var ar4 = [], i4 = 0; i4 < arguments.length; i4++)
    ar4 = ar4.concat(__read2(arguments[i4]));
  return ar4;
}
function __spreadArrays2() {
  for (var s3 = 0, i4 = 0, il = arguments.length; i4 < il; i4++) s3 += arguments[i4].length;
  for (var r3 = Array(s3), k7 = 0, i4 = 0; i4 < il; i4++)
    for (var a3 = arguments[i4], j6 = 0, jl = a3.length; j6 < jl; j6++, k7++)
      r3[k7] = a3[j6];
  return r3;
}
function __await2(v6) {
  return this instanceof __await2 ? (this.v = v6, this) : new __await2(v6);
}
function __asyncGenerator2(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g4 = generator.apply(thisArg, _arguments || []), i4, q2 = [];
  return i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
    return this;
  }, i4;
  function verb(n5) {
    if (g4[n5]) i4[n5] = function(v6) {
      return new Promise(function(a3, b5) {
        q2.push([n5, v6, a3, b5]) > 1 || resume(n5, v6);
      });
    };
  }
  function resume(n5, v6) {
    try {
      step(g4[n5](v6));
    } catch (e2) {
      settle(q2[0][3], e2);
    }
  }
  function step(r3) {
    r3.value instanceof __await2 ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q2[0][2], r3);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f8, v6) {
    if (f8(v6), q2.shift(), q2.length) resume(q2[0][0], q2[0][1]);
  }
}
function __asyncDelegator2(o5) {
  var i4, p5;
  return i4 = {}, verb("next"), verb("throw", function(e2) {
    throw e2;
  }), verb("return"), i4[Symbol.iterator] = function() {
    return this;
  }, i4;
  function verb(n5, f8) {
    i4[n5] = o5[n5] ? function(v6) {
      return (p5 = !p5) ? { value: __await2(o5[n5](v6)), done: n5 === "return" } : f8 ? f8(v6) : v6;
    } : f8;
  }
}
function __asyncValues2(o5) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m4 = o5[Symbol.asyncIterator], i4;
  return m4 ? m4.call(o5) : (o5 = typeof __values2 === "function" ? __values2(o5) : o5[Symbol.iterator](), i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
    return this;
  }, i4);
  function verb(n5) {
    i4[n5] = o5[n5] && function(v6) {
      return new Promise(function(resolve, reject) {
        v6 = o5[n5](v6), settle(resolve, reject, v6.done, v6.value);
      });
    };
  }
  function settle(resolve, reject, d5, v6) {
    Promise.resolve(v6).then(function(v7) {
      resolve({ value: v7, done: d5 });
    }, reject);
  }
}
function __makeTemplateObject2(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar2(mod2) {
  if (mod2 && mod2.__esModule) return mod2;
  var result = {};
  if (mod2 != null) {
    for (var k7 in mod2) if (Object.hasOwnProperty.call(mod2, k7)) result[k7] = mod2[k7];
  }
  result.default = mod2;
  return result;
}
function __importDefault2(mod2) {
  return mod2 && mod2.__esModule ? mod2 : { default: mod2 };
}
function __classPrivateFieldGet2(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet2(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics2, __assign2;
var init_tslib_es62 = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/tslib/tslib.es6.js"() {
    extendStatics2 = function(d5, b5) {
      extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d6, b6) {
        d6.__proto__ = b6;
      } || function(d6, b6) {
        for (var p5 in b6) if (b6.hasOwnProperty(p5)) d6[p5] = b6[p5];
      };
      return extendStatics2(d5, b5);
    };
    __assign2 = function() {
      __assign2 = Object.assign || function __assign4(t) {
        for (var s3, i4 = 1, n5 = arguments.length; i4 < n5; i4++) {
          s3 = arguments[i4];
          for (var p5 in s3) if (Object.prototype.hasOwnProperty.call(s3, p5)) t[p5] = s3[p5];
        }
        return t;
      };
      return __assign2.apply(this, arguments);
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/utils/delay.js
var require_delay2 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/utils/delay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.delay = void 0;
    function delay(timeout) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(true);
        }, timeout);
      });
    }
    exports.delay = delay;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/constants/misc.js
var require_misc2 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/constants/misc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ONE_THOUSAND = exports.ONE_HUNDRED = void 0;
    exports.ONE_HUNDRED = 100;
    exports.ONE_THOUSAND = 1e3;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/constants/time.js
var require_time2 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/constants/time.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ONE_YEAR = exports.FOUR_WEEKS = exports.THREE_WEEKS = exports.TWO_WEEKS = exports.ONE_WEEK = exports.THIRTY_DAYS = exports.SEVEN_DAYS = exports.FIVE_DAYS = exports.THREE_DAYS = exports.ONE_DAY = exports.TWENTY_FOUR_HOURS = exports.TWELVE_HOURS = exports.SIX_HOURS = exports.THREE_HOURS = exports.ONE_HOUR = exports.SIXTY_MINUTES = exports.THIRTY_MINUTES = exports.TEN_MINUTES = exports.FIVE_MINUTES = exports.ONE_MINUTE = exports.SIXTY_SECONDS = exports.THIRTY_SECONDS = exports.TEN_SECONDS = exports.FIVE_SECONDS = exports.ONE_SECOND = void 0;
    exports.ONE_SECOND = 1;
    exports.FIVE_SECONDS = 5;
    exports.TEN_SECONDS = 10;
    exports.THIRTY_SECONDS = 30;
    exports.SIXTY_SECONDS = 60;
    exports.ONE_MINUTE = exports.SIXTY_SECONDS;
    exports.FIVE_MINUTES = exports.ONE_MINUTE * 5;
    exports.TEN_MINUTES = exports.ONE_MINUTE * 10;
    exports.THIRTY_MINUTES = exports.ONE_MINUTE * 30;
    exports.SIXTY_MINUTES = exports.ONE_MINUTE * 60;
    exports.ONE_HOUR = exports.SIXTY_MINUTES;
    exports.THREE_HOURS = exports.ONE_HOUR * 3;
    exports.SIX_HOURS = exports.ONE_HOUR * 6;
    exports.TWELVE_HOURS = exports.ONE_HOUR * 12;
    exports.TWENTY_FOUR_HOURS = exports.ONE_HOUR * 24;
    exports.ONE_DAY = exports.TWENTY_FOUR_HOURS;
    exports.THREE_DAYS = exports.ONE_DAY * 3;
    exports.FIVE_DAYS = exports.ONE_DAY * 5;
    exports.SEVEN_DAYS = exports.ONE_DAY * 7;
    exports.THIRTY_DAYS = exports.ONE_DAY * 30;
    exports.ONE_WEEK = exports.SEVEN_DAYS;
    exports.TWO_WEEKS = exports.ONE_WEEK * 2;
    exports.THREE_WEEKS = exports.ONE_WEEK * 3;
    exports.FOUR_WEEKS = exports.ONE_WEEK * 4;
    exports.ONE_YEAR = exports.ONE_DAY * 365;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/constants/index.js
var require_constants2 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/constants/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
    tslib_1.__exportStar(require_misc2(), exports);
    tslib_1.__exportStar(require_time2(), exports);
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/utils/convert.js
var require_convert2 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/utils/convert.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromMiliseconds = exports.toMiliseconds = void 0;
    var constants_1 = require_constants2();
    function toMiliseconds(seconds) {
      return seconds * constants_1.ONE_THOUSAND;
    }
    exports.toMiliseconds = toMiliseconds;
    function fromMiliseconds(miliseconds) {
      return Math.floor(miliseconds / constants_1.ONE_THOUSAND);
    }
    exports.fromMiliseconds = fromMiliseconds;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/utils/index.js
var require_utils2 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
    tslib_1.__exportStar(require_delay2(), exports);
    tslib_1.__exportStar(require_convert2(), exports);
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/watch.js
var require_watch3 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/watch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Watch = void 0;
    var Watch = class {
      constructor() {
        this.timestamps = /* @__PURE__ */ new Map();
      }
      start(label) {
        if (this.timestamps.has(label)) {
          throw new Error(`Watch already started for label: ${label}`);
        }
        this.timestamps.set(label, { started: Date.now() });
      }
      stop(label) {
        const timestamp = this.get(label);
        if (typeof timestamp.elapsed !== "undefined") {
          throw new Error(`Watch already stopped for label: ${label}`);
        }
        const elapsed = Date.now() - timestamp.started;
        this.timestamps.set(label, { started: timestamp.started, elapsed });
      }
      get(label) {
        const timestamp = this.timestamps.get(label);
        if (typeof timestamp === "undefined") {
          throw new Error(`No timestamp found for label: ${label}`);
        }
        return timestamp;
      }
      elapsed(label) {
        const timestamp = this.get(label);
        const elapsed = timestamp.elapsed || Date.now() - timestamp.started;
        return elapsed;
      }
    };
    exports.Watch = Watch;
    exports.default = Watch;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/types/watch.js
var require_watch4 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/types/watch.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IWatch = void 0;
    var IWatch = class {
    };
    exports.IWatch = IWatch;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/types/index.js
var require_types2 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/types/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
    tslib_1.__exportStar(require_watch4(), exports);
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/time/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es62(), __toCommonJS(tslib_es6_exports2));
    tslib_1.__exportStar(require_utils2(), exports);
    tslib_1.__exportStar(require_watch3(), exports);
    tslib_1.__exportStar(require_types2(), exports);
    tslib_1.__exportStar(require_constants2(), exports);
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/window-getters/dist/cjs/index.js
var require_cjs3 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/window-getters/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = void 0;
    function getFromWindow(name2) {
      let res = void 0;
      if (typeof window !== "undefined" && typeof window[name2] !== "undefined") {
        res = window[name2];
      }
      return res;
    }
    exports.getFromWindow = getFromWindow;
    function getFromWindowOrThrow(name2) {
      const res = getFromWindow(name2);
      if (!res) {
        throw new Error(`${name2} is not defined in Window`);
      }
      return res;
    }
    exports.getFromWindowOrThrow = getFromWindowOrThrow;
    function getDocumentOrThrow() {
      return getFromWindowOrThrow("document");
    }
    exports.getDocumentOrThrow = getDocumentOrThrow;
    function getDocument() {
      return getFromWindow("document");
    }
    exports.getDocument = getDocument;
    function getNavigatorOrThrow() {
      return getFromWindowOrThrow("navigator");
    }
    exports.getNavigatorOrThrow = getNavigatorOrThrow;
    function getNavigator() {
      return getFromWindow("navigator");
    }
    exports.getNavigator = getNavigator;
    function getLocationOrThrow() {
      return getFromWindowOrThrow("location");
    }
    exports.getLocationOrThrow = getLocationOrThrow;
    function getLocation() {
      return getFromWindow("location");
    }
    exports.getLocation = getLocation;
    function getCryptoOrThrow() {
      return getFromWindowOrThrow("crypto");
    }
    exports.getCryptoOrThrow = getCryptoOrThrow;
    function getCrypto() {
      return getFromWindow("crypto");
    }
    exports.getCrypto = getCrypto;
    function getLocalStorageOrThrow() {
      return getFromWindowOrThrow("localStorage");
    }
    exports.getLocalStorageOrThrow = getLocalStorageOrThrow;
    function getLocalStorage() {
      return getFromWindow("localStorage");
    }
    exports.getLocalStorage = getLocalStorage;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/window-metadata/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/window-metadata/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getWindowMetadata = void 0;
    var window_getters_1 = require_cjs3();
    function getWindowMetadata() {
      let doc;
      let loc;
      try {
        doc = window_getters_1.getDocumentOrThrow();
        loc = window_getters_1.getLocationOrThrow();
      } catch (e2) {
        return null;
      }
      function getIcons() {
        const links = doc.getElementsByTagName("link");
        const icons2 = [];
        for (let i4 = 0; i4 < links.length; i4++) {
          const link = links[i4];
          const rel = link.getAttribute("rel");
          if (rel) {
            if (rel.toLowerCase().indexOf("icon") > -1) {
              const href = link.getAttribute("href");
              if (href) {
                if (href.toLowerCase().indexOf("https:") === -1 && href.toLowerCase().indexOf("http:") === -1 && href.indexOf("//") !== 0) {
                  let absoluteHref = loc.protocol + "//" + loc.host;
                  if (href.indexOf("/") === 0) {
                    absoluteHref += href;
                  } else {
                    const path = loc.pathname.split("/");
                    path.pop();
                    const finalPath = path.join("/");
                    absoluteHref += finalPath + "/" + href;
                  }
                  icons2.push(absoluteHref);
                } else if (href.indexOf("//") === 0) {
                  const absoluteUrl = loc.protocol + href;
                  icons2.push(absoluteUrl);
                } else {
                  icons2.push(href);
                }
              }
            }
          }
        }
        return icons2;
      }
      function getWindowMetadataOfAny(...args) {
        const metaTags = doc.getElementsByTagName("meta");
        for (let i4 = 0; i4 < metaTags.length; i4++) {
          const tag = metaTags[i4];
          const attributes = ["itemprop", "property", "name"].map((target) => tag.getAttribute(target)).filter((attr) => {
            if (attr) {
              return args.includes(attr);
            }
            return false;
          });
          if (attributes.length && attributes) {
            const content = tag.getAttribute("content");
            if (content) {
              return content;
            }
          }
        }
        return "";
      }
      function getName() {
        let name3 = getWindowMetadataOfAny("name", "og:site_name", "og:title", "twitter:title");
        if (!name3) {
          name3 = doc.title;
        }
        return name3;
      }
      function getDescription() {
        const description2 = getWindowMetadataOfAny("description", "og:description", "twitter:description", "keywords");
        return description2;
      }
      const name2 = getName();
      const description = getDescription();
      const url = loc.origin;
      const icons = getIcons();
      const meta = {
        description,
        url,
        icons,
        name: name2
      };
      return meta;
    }
    exports.getWindowMetadata = getWindowMetadata;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/data/isHex.js
function isHex(value, { strict = true } = {}) {
  if (!value)
    return false;
  if (typeof value !== "string")
    return false;
  return strict ? /^0x[0-9a-fA-F]*$/.test(value) : value.startsWith("0x");
}
var init_isHex = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/data/isHex.js"() {
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/data/size.js
function size(value) {
  if (isHex(value, { strict: false }))
    return Math.ceil((value.length - 2) / 2);
  return value.length;
}
var init_size = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/data/size.js"() {
    init_isHex();
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/errors/version.js
var version;
var init_version = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/errors/version.js"() {
    version = "2.31.0";
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/errors/base.js
function walk(err, fn3) {
  if (fn3?.(err))
    return err;
  if (err && typeof err === "object" && "cause" in err && err.cause !== void 0)
    return walk(err.cause, fn3);
  return fn3 ? null : err;
}
var errorConfig, BaseError;
var init_base = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/errors/base.js"() {
    init_version();
    errorConfig = {
      getDocsUrl: ({ docsBaseUrl, docsPath = "", docsSlug }) => docsPath ? `${docsBaseUrl ?? "https://viem.sh"}${docsPath}${docsSlug ? `#${docsSlug}` : ""}` : void 0,
      version: `viem@${version}`
    };
    BaseError = class _BaseError extends Error {
      constructor(shortMessage, args = {}) {
        const details = (() => {
          if (args.cause instanceof _BaseError)
            return args.cause.details;
          if (args.cause?.message)
            return args.cause.message;
          return args.details;
        })();
        const docsPath = (() => {
          if (args.cause instanceof _BaseError)
            return args.cause.docsPath || args.docsPath;
          return args.docsPath;
        })();
        const docsUrl = errorConfig.getDocsUrl?.({ ...args, docsPath });
        const message = [
          shortMessage || "An error occurred.",
          "",
          ...args.metaMessages ? [...args.metaMessages, ""] : [],
          ...docsUrl ? [`Docs: ${docsUrl}`] : [],
          ...details ? [`Details: ${details}`] : [],
          ...errorConfig.version ? [`Version: ${errorConfig.version}`] : []
        ].join("\n");
        super(message, args.cause ? { cause: args.cause } : void 0);
        Object.defineProperty(this, "details", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "docsPath", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "metaMessages", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "shortMessage", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "version", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "name", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "BaseError"
        });
        this.details = details;
        this.docsPath = docsPath;
        this.metaMessages = args.metaMessages;
        this.name = args.name ?? this.name;
        this.shortMessage = shortMessage;
        this.version = version;
      }
      walk(fn3) {
        return walk(this, fn3);
      }
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/errors/data.js
var SizeExceedsPaddingSizeError;
var init_data = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/errors/data.js"() {
    init_base();
    SizeExceedsPaddingSizeError = class extends BaseError {
      constructor({ size: size2, targetSize, type }) {
        super(`${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()} size (${size2}) exceeds padding size (${targetSize}).`, { name: "SizeExceedsPaddingSizeError" });
      }
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/data/pad.js
function pad(hexOrBytes, { dir, size: size2 = 32 } = {}) {
  if (typeof hexOrBytes === "string")
    return padHex(hexOrBytes, { dir, size: size2 });
  return padBytes(hexOrBytes, { dir, size: size2 });
}
function padHex(hex_, { dir, size: size2 = 32 } = {}) {
  if (size2 === null)
    return hex_;
  const hex = hex_.replace("0x", "");
  if (hex.length > size2 * 2)
    throw new SizeExceedsPaddingSizeError({
      size: Math.ceil(hex.length / 2),
      targetSize: size2,
      type: "hex"
    });
  return `0x${hex[dir === "right" ? "padEnd" : "padStart"](size2 * 2, "0")}`;
}
function padBytes(bytes, { dir, size: size2 = 32 } = {}) {
  if (size2 === null)
    return bytes;
  if (bytes.length > size2)
    throw new SizeExceedsPaddingSizeError({
      size: bytes.length,
      targetSize: size2,
      type: "bytes"
    });
  const paddedBytes = new Uint8Array(size2);
  for (let i4 = 0; i4 < size2; i4++) {
    const padEnd = dir === "right";
    paddedBytes[padEnd ? i4 : size2 - i4 - 1] = bytes[padEnd ? i4 : bytes.length - i4 - 1];
  }
  return paddedBytes;
}
var init_pad = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/data/pad.js"() {
    init_data();
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/errors/encoding.js
var IntegerOutOfRangeError, SizeOverflowError;
var init_encoding = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/errors/encoding.js"() {
    init_base();
    IntegerOutOfRangeError = class extends BaseError {
      constructor({ max, min, signed, size: size2, value }) {
        super(`Number "${value}" is not in safe ${size2 ? `${size2 * 8}-bit ${signed ? "signed" : "unsigned"} ` : ""}integer range ${max ? `(${min} to ${max})` : `(above ${min})`}`, { name: "IntegerOutOfRangeError" });
      }
    };
    SizeOverflowError = class extends BaseError {
      constructor({ givenSize, maxSize }) {
        super(`Size cannot exceed ${maxSize} bytes. Given size: ${givenSize} bytes.`, { name: "SizeOverflowError" });
      }
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/encoding/fromHex.js
function assertSize(hexOrBytes, { size: size2 }) {
  if (size(hexOrBytes) > size2)
    throw new SizeOverflowError({
      givenSize: size(hexOrBytes),
      maxSize: size2
    });
}
function hexToBigInt(hex, opts = {}) {
  const { signed } = opts;
  if (opts.size)
    assertSize(hex, { size: opts.size });
  const value = BigInt(hex);
  if (!signed)
    return value;
  const size2 = (hex.length - 2) / 2;
  const max = (1n << BigInt(size2) * 8n - 1n) - 1n;
  if (value <= max)
    return value;
  return value - BigInt(`0x${"f".padStart(size2 * 2, "f")}`) - 1n;
}
function hexToNumber(hex, opts = {}) {
  return Number(hexToBigInt(hex, opts));
}
var init_fromHex = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/encoding/fromHex.js"() {
    init_encoding();
    init_size();
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/encoding/toHex.js
function toHex(value, opts = {}) {
  if (typeof value === "number" || typeof value === "bigint")
    return numberToHex(value, opts);
  if (typeof value === "string") {
    return stringToHex(value, opts);
  }
  if (typeof value === "boolean")
    return boolToHex(value, opts);
  return bytesToHex(value, opts);
}
function boolToHex(value, opts = {}) {
  const hex = `0x${Number(value)}`;
  if (typeof opts.size === "number") {
    assertSize(hex, { size: opts.size });
    return pad(hex, { size: opts.size });
  }
  return hex;
}
function bytesToHex(value, opts = {}) {
  let string3 = "";
  for (let i4 = 0; i4 < value.length; i4++) {
    string3 += hexes[value[i4]];
  }
  const hex = `0x${string3}`;
  if (typeof opts.size === "number") {
    assertSize(hex, { size: opts.size });
    return pad(hex, { dir: "right", size: opts.size });
  }
  return hex;
}
function numberToHex(value_, opts = {}) {
  const { signed, size: size2 } = opts;
  const value = BigInt(value_);
  let maxValue;
  if (size2) {
    if (signed)
      maxValue = (1n << BigInt(size2) * 8n - 1n) - 1n;
    else
      maxValue = 2n ** (BigInt(size2) * 8n) - 1n;
  } else if (typeof value_ === "number") {
    maxValue = BigInt(Number.MAX_SAFE_INTEGER);
  }
  const minValue = typeof maxValue === "bigint" && signed ? -maxValue - 1n : 0;
  if (maxValue && value > maxValue || value < minValue) {
    const suffix = typeof value_ === "bigint" ? "n" : "";
    throw new IntegerOutOfRangeError({
      max: maxValue ? `${maxValue}${suffix}` : void 0,
      min: `${minValue}${suffix}`,
      signed,
      size: size2,
      value: `${value_}${suffix}`
    });
  }
  const hex = `0x${(signed && value < 0 ? (1n << BigInt(size2 * 8)) + BigInt(value) : value).toString(16)}`;
  if (size2)
    return pad(hex, { size: size2 });
  return hex;
}
function stringToHex(value_, opts = {}) {
  const value = encoder.encode(value_);
  return bytesToHex(value, opts);
}
var hexes, encoder;
var init_toHex = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/encoding/toHex.js"() {
    init_encoding();
    init_pad();
    init_fromHex();
    hexes = /* @__PURE__ */ Array.from({ length: 256 }, (_v, i4) => i4.toString(16).padStart(2, "0"));
    encoder = /* @__PURE__ */ new TextEncoder();
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/encoding/toBytes.js
function toBytes(value, opts = {}) {
  if (typeof value === "number" || typeof value === "bigint")
    return numberToBytes(value, opts);
  if (typeof value === "boolean")
    return boolToBytes(value, opts);
  if (isHex(value))
    return hexToBytes(value, opts);
  return stringToBytes(value, opts);
}
function boolToBytes(value, opts = {}) {
  const bytes = new Uint8Array(1);
  bytes[0] = Number(value);
  if (typeof opts.size === "number") {
    assertSize(bytes, { size: opts.size });
    return pad(bytes, { size: opts.size });
  }
  return bytes;
}
function charCodeToBase16(char) {
  if (char >= charCodeMap.zero && char <= charCodeMap.nine)
    return char - charCodeMap.zero;
  if (char >= charCodeMap.A && char <= charCodeMap.F)
    return char - (charCodeMap.A - 10);
  if (char >= charCodeMap.a && char <= charCodeMap.f)
    return char - (charCodeMap.a - 10);
  return void 0;
}
function hexToBytes(hex_, opts = {}) {
  let hex = hex_;
  if (opts.size) {
    assertSize(hex, { size: opts.size });
    hex = pad(hex, { dir: "right", size: opts.size });
  }
  let hexString = hex.slice(2);
  if (hexString.length % 2)
    hexString = `0${hexString}`;
  const length2 = hexString.length / 2;
  const bytes = new Uint8Array(length2);
  for (let index = 0, j6 = 0; index < length2; index++) {
    const nibbleLeft = charCodeToBase16(hexString.charCodeAt(j6++));
    const nibbleRight = charCodeToBase16(hexString.charCodeAt(j6++));
    if (nibbleLeft === void 0 || nibbleRight === void 0) {
      throw new BaseError(`Invalid byte sequence ("${hexString[j6 - 2]}${hexString[j6 - 1]}" in "${hexString}").`);
    }
    bytes[index] = nibbleLeft * 16 + nibbleRight;
  }
  return bytes;
}
function numberToBytes(value, opts) {
  const hex = numberToHex(value, opts);
  return hexToBytes(hex);
}
function stringToBytes(value, opts = {}) {
  const bytes = encoder2.encode(value);
  if (typeof opts.size === "number") {
    assertSize(bytes, { size: opts.size });
    return pad(bytes, { dir: "right", size: opts.size });
  }
  return bytes;
}
var encoder2, charCodeMap;
var init_toBytes = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/encoding/toBytes.js"() {
    init_base();
    init_isHex();
    init_pad();
    init_fromHex();
    init_toHex();
    encoder2 = /* @__PURE__ */ new TextEncoder();
    charCodeMap = {
      zero: 48,
      nine: 57,
      A: 65,
      F: 70,
      a: 97,
      f: 102
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/_u64.js
function fromBig(n5, le6 = false) {
  if (le6)
    return { h: Number(n5 & U32_MASK64), l: Number(n5 >> _32n & U32_MASK64) };
  return { h: Number(n5 >> _32n & U32_MASK64) | 0, l: Number(n5 & U32_MASK64) | 0 };
}
function split(lst, le6 = false) {
  const len = lst.length;
  let Ah = new Uint32Array(len);
  let Al = new Uint32Array(len);
  for (let i4 = 0; i4 < len; i4++) {
    const { h: h6, l: l8 } = fromBig(lst[i4], le6);
    [Ah[i4], Al[i4]] = [h6, l8];
  }
  return [Ah, Al];
}
var U32_MASK64, _32n, rotlSH, rotlSL, rotlBH, rotlBL;
var init_u64 = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/_u64.js"() {
    U32_MASK64 = /* @__PURE__ */ BigInt(2 ** 32 - 1);
    _32n = /* @__PURE__ */ BigInt(32);
    rotlSH = (h6, l8, s3) => h6 << s3 | l8 >>> 32 - s3;
    rotlSL = (h6, l8, s3) => l8 << s3 | h6 >>> 32 - s3;
    rotlBH = (h6, l8, s3) => l8 << s3 - 32 | h6 >>> 64 - s3;
    rotlBL = (h6, l8, s3) => h6 << s3 - 32 | l8 >>> 64 - s3;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/crypto.js
var crypto2;
var init_crypto = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/crypto.js"() {
    crypto2 = typeof globalThis === "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/utils.js
function isBytes(a3) {
  return a3 instanceof Uint8Array || ArrayBuffer.isView(a3) && a3.constructor.name === "Uint8Array";
}
function anumber(n5) {
  if (!Number.isSafeInteger(n5) || n5 < 0)
    throw new Error("positive integer expected, got " + n5);
}
function abytes(b5, ...lengths) {
  if (!isBytes(b5))
    throw new Error("Uint8Array expected");
  if (lengths.length > 0 && !lengths.includes(b5.length))
    throw new Error("Uint8Array expected of length " + lengths + ", got length=" + b5.length);
}
function ahash(h6) {
  if (typeof h6 !== "function" || typeof h6.create !== "function")
    throw new Error("Hash should be wrapped by utils.createHasher");
  anumber(h6.outputLen);
  anumber(h6.blockLen);
}
function aexists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function aoutput(out, instance) {
  abytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error("digestInto() expects output buffer of length at least " + min);
  }
}
function u32(arr) {
  return new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
}
function clean(...arrays) {
  for (let i4 = 0; i4 < arrays.length; i4++) {
    arrays[i4].fill(0);
  }
}
function createView(arr) {
  return new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
}
function rotr(word, shift) {
  return word << 32 - shift | word >>> shift;
}
function byteSwap(word) {
  return word << 24 & 4278190080 | word << 8 & 16711680 | word >>> 8 & 65280 | word >>> 24 & 255;
}
function byteSwap32(arr) {
  for (let i4 = 0; i4 < arr.length; i4++) {
    arr[i4] = byteSwap(arr[i4]);
  }
  return arr;
}
function utf8ToBytes(str) {
  if (typeof str !== "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(str));
}
function toBytes2(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  abytes(data);
  return data;
}
function concatBytes(...arrays) {
  let sum = 0;
  for (let i4 = 0; i4 < arrays.length; i4++) {
    const a3 = arrays[i4];
    abytes(a3);
    sum += a3.length;
  }
  const res = new Uint8Array(sum);
  for (let i4 = 0, pad2 = 0; i4 < arrays.length; i4++) {
    const a3 = arrays[i4];
    res.set(a3, pad2);
    pad2 += a3.length;
  }
  return res;
}
function createHasher(hashCons) {
  const hashC = (msg) => hashCons().update(toBytes2(msg)).digest();
  const tmp = hashCons();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashCons();
  return hashC;
}
function randomBytes(bytesLength = 32) {
  if (crypto2 && typeof crypto2.getRandomValues === "function") {
    return crypto2.getRandomValues(new Uint8Array(bytesLength));
  }
  if (crypto2 && typeof crypto2.randomBytes === "function") {
    return Uint8Array.from(crypto2.randomBytes(bytesLength));
  }
  throw new Error("crypto.getRandomValues must be defined");
}
var isLE, swap32IfBE, Hash;
var init_utils = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/utils.js"() {
    init_crypto();
    isLE = /* @__PURE__ */ (() => new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68)();
    swap32IfBE = isLE ? (u3) => u3 : byteSwap32;
    Hash = class {
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/sha3.js
function keccakP(s3, rounds = 24) {
  const B4 = new Uint32Array(5 * 2);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x7 = 0; x7 < 10; x7++)
      B4[x7] = s3[x7] ^ s3[x7 + 10] ^ s3[x7 + 20] ^ s3[x7 + 30] ^ s3[x7 + 40];
    for (let x7 = 0; x7 < 10; x7 += 2) {
      const idx1 = (x7 + 8) % 10;
      const idx0 = (x7 + 2) % 10;
      const B0 = B4[idx0];
      const B1 = B4[idx0 + 1];
      const Th = rotlH(B0, B1, 1) ^ B4[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B4[idx1 + 1];
      for (let y6 = 0; y6 < 50; y6 += 10) {
        s3[x7 + y6] ^= Th;
        s3[x7 + y6 + 1] ^= Tl;
      }
    }
    let curH = s3[2];
    let curL = s3[3];
    for (let t = 0; t < 24; t++) {
      const shift = SHA3_ROTL[t];
      const Th = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t];
      curH = s3[PI];
      curL = s3[PI + 1];
      s3[PI] = Th;
      s3[PI + 1] = Tl;
    }
    for (let y6 = 0; y6 < 50; y6 += 10) {
      for (let x7 = 0; x7 < 10; x7++)
        B4[x7] = s3[y6 + x7];
      for (let x7 = 0; x7 < 10; x7++)
        s3[y6 + x7] ^= ~B4[(x7 + 2) % 10] & B4[(x7 + 4) % 10];
    }
    s3[0] ^= SHA3_IOTA_H[round];
    s3[1] ^= SHA3_IOTA_L[round];
  }
  clean(B4);
}
var _0n, _1n, _2n, _7n, _256n, _0x71n, SHA3_PI, SHA3_ROTL, _SHA3_IOTA, IOTAS, SHA3_IOTA_H, SHA3_IOTA_L, rotlH, rotlL, Keccak, gen, keccak_256;
var init_sha3 = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/sha3.js"() {
    init_u64();
    init_utils();
    _0n = BigInt(0);
    _1n = BigInt(1);
    _2n = BigInt(2);
    _7n = BigInt(7);
    _256n = BigInt(256);
    _0x71n = BigInt(113);
    SHA3_PI = [];
    SHA3_ROTL = [];
    _SHA3_IOTA = [];
    for (let round = 0, R4 = _1n, x7 = 1, y6 = 0; round < 24; round++) {
      [x7, y6] = [y6, (2 * x7 + 3 * y6) % 5];
      SHA3_PI.push(2 * (5 * y6 + x7));
      SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
      let t = _0n;
      for (let j6 = 0; j6 < 7; j6++) {
        R4 = (R4 << _1n ^ (R4 >> _7n) * _0x71n) % _256n;
        if (R4 & _2n)
          t ^= _1n << (_1n << /* @__PURE__ */ BigInt(j6)) - _1n;
      }
      _SHA3_IOTA.push(t);
    }
    IOTAS = split(_SHA3_IOTA, true);
    SHA3_IOTA_H = IOTAS[0];
    SHA3_IOTA_L = IOTAS[1];
    rotlH = (h6, l8, s3) => s3 > 32 ? rotlBH(h6, l8, s3) : rotlSH(h6, l8, s3);
    rotlL = (h6, l8, s3) => s3 > 32 ? rotlBL(h6, l8, s3) : rotlSL(h6, l8, s3);
    Keccak = class _Keccak extends Hash {
      // NOTE: we accept arguments in bytes instead of bits here.
      constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
        super();
        this.pos = 0;
        this.posOut = 0;
        this.finished = false;
        this.destroyed = false;
        this.enableXOF = false;
        this.blockLen = blockLen;
        this.suffix = suffix;
        this.outputLen = outputLen;
        this.enableXOF = enableXOF;
        this.rounds = rounds;
        anumber(outputLen);
        if (!(0 < blockLen && blockLen < 200))
          throw new Error("only keccak-f1600 function is supported");
        this.state = new Uint8Array(200);
        this.state32 = u32(this.state);
      }
      clone() {
        return this._cloneInto();
      }
      keccak() {
        swap32IfBE(this.state32);
        keccakP(this.state32, this.rounds);
        swap32IfBE(this.state32);
        this.posOut = 0;
        this.pos = 0;
      }
      update(data) {
        aexists(this);
        data = toBytes2(data);
        abytes(data);
        const { blockLen, state } = this;
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          for (let i4 = 0; i4 < take; i4++)
            state[this.pos++] ^= data[pos++];
          if (this.pos === blockLen)
            this.keccak();
        }
        return this;
      }
      finish() {
        if (this.finished)
          return;
        this.finished = true;
        const { state, suffix, pos, blockLen } = this;
        state[pos] ^= suffix;
        if ((suffix & 128) !== 0 && pos === blockLen - 1)
          this.keccak();
        state[blockLen - 1] ^= 128;
        this.keccak();
      }
      writeInto(out) {
        aexists(this, false);
        abytes(out);
        this.finish();
        const bufferOut = this.state;
        const { blockLen } = this;
        for (let pos = 0, len = out.length; pos < len; ) {
          if (this.posOut >= blockLen)
            this.keccak();
          const take = Math.min(blockLen - this.posOut, len - pos);
          out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
          this.posOut += take;
          pos += take;
        }
        return out;
      }
      xofInto(out) {
        if (!this.enableXOF)
          throw new Error("XOF is not possible for this instance");
        return this.writeInto(out);
      }
      xof(bytes) {
        anumber(bytes);
        return this.xofInto(new Uint8Array(bytes));
      }
      digestInto(out) {
        aoutput(out, this);
        if (this.finished)
          throw new Error("digest() was already called");
        this.writeInto(out);
        this.destroy();
        return out;
      }
      digest() {
        return this.digestInto(new Uint8Array(this.outputLen));
      }
      destroy() {
        this.destroyed = true;
        clean(this.state);
      }
      _cloneInto(to5) {
        const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
        to5 || (to5 = new _Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
        to5.state32.set(this.state32);
        to5.pos = this.pos;
        to5.posOut = this.posOut;
        to5.finished = this.finished;
        to5.rounds = rounds;
        to5.suffix = suffix;
        to5.outputLen = outputLen;
        to5.enableXOF = enableXOF;
        to5.destroyed = this.destroyed;
        return to5;
      }
    };
    gen = (suffix, blockLen, outputLen) => createHasher(() => new Keccak(blockLen, suffix, outputLen));
    keccak_256 = /* @__PURE__ */ (() => gen(1, 136, 256 / 8))();
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/hash/keccak256.js
function keccak256(value, to_) {
  const to5 = to_ || "hex";
  const bytes = keccak_256(isHex(value, { strict: false }) ? toBytes(value) : value);
  if (to5 === "bytes")
    return bytes;
  return toHex(bytes);
}
var init_keccak256 = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/hash/keccak256.js"() {
    init_sha3();
    init_isHex();
    init_toBytes();
    init_toHex();
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/lru.js
var LruMap;
var init_lru = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/lru.js"() {
    LruMap = class extends Map {
      constructor(size2) {
        super();
        Object.defineProperty(this, "maxSize", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.maxSize = size2;
      }
      get(key) {
        const value = super.get(key);
        if (super.has(key) && value !== void 0) {
          this.delete(key);
          super.set(key, value);
        }
        return value;
      }
      set(key, value) {
        super.set(key, value);
        if (this.maxSize && this.size > this.maxSize) {
          const firstKey = this.keys().next().value;
          if (firstKey)
            this.delete(firstKey);
        }
        return this;
      }
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/address/getAddress.js
function checksumAddress(address_, chainId) {
  if (checksumAddressCache.has(`${address_}.${chainId}`))
    return checksumAddressCache.get(`${address_}.${chainId}`);
  const hexAddress = chainId ? `${chainId}${address_.toLowerCase()}` : address_.substring(2).toLowerCase();
  const hash = keccak256(stringToBytes(hexAddress), "bytes");
  const address = (chainId ? hexAddress.substring(`${chainId}0x`.length) : hexAddress).split("");
  for (let i4 = 0; i4 < 40; i4 += 2) {
    if (hash[i4 >> 1] >> 4 >= 8 && address[i4]) {
      address[i4] = address[i4].toUpperCase();
    }
    if ((hash[i4 >> 1] & 15) >= 8 && address[i4 + 1]) {
      address[i4 + 1] = address[i4 + 1].toUpperCase();
    }
  }
  const result = `0x${address.join("")}`;
  checksumAddressCache.set(`${address_}.${chainId}`, result);
  return result;
}
var checksumAddressCache;
var init_getAddress = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/address/getAddress.js"() {
    init_toBytes();
    init_keccak256();
    init_lru();
    checksumAddressCache = /* @__PURE__ */ new LruMap(8192);
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/_md.js
function setBigUint64(view, byteOffset, value, isLE2) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE2);
  const _32n2 = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh = Number(value >> _32n2 & _u32_max);
  const wl = Number(value & _u32_max);
  const h6 = isLE2 ? 4 : 0;
  const l8 = isLE2 ? 0 : 4;
  view.setUint32(byteOffset + h6, wh, isLE2);
  view.setUint32(byteOffset + l8, wl, isLE2);
}
function Chi(a3, b5, c7) {
  return a3 & b5 ^ ~a3 & c7;
}
function Maj(a3, b5, c7) {
  return a3 & b5 ^ a3 & c7 ^ b5 & c7;
}
var HashMD, SHA256_IV;
var init_md = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/_md.js"() {
    init_utils();
    HashMD = class extends Hash {
      constructor(blockLen, outputLen, padOffset, isLE2) {
        super();
        this.finished = false;
        this.length = 0;
        this.pos = 0;
        this.destroyed = false;
        this.blockLen = blockLen;
        this.outputLen = outputLen;
        this.padOffset = padOffset;
        this.isLE = isLE2;
        this.buffer = new Uint8Array(blockLen);
        this.view = createView(this.buffer);
      }
      update(data) {
        aexists(this);
        data = toBytes2(data);
        abytes(data);
        const { view, buffer, blockLen } = this;
        const len = data.length;
        for (let pos = 0; pos < len; ) {
          const take = Math.min(blockLen - this.pos, len - pos);
          if (take === blockLen) {
            const dataView = createView(data);
            for (; blockLen <= len - pos; pos += blockLen)
              this.process(dataView, pos);
            continue;
          }
          buffer.set(data.subarray(pos, pos + take), this.pos);
          this.pos += take;
          pos += take;
          if (this.pos === blockLen) {
            this.process(view, 0);
            this.pos = 0;
          }
        }
        this.length += data.length;
        this.roundClean();
        return this;
      }
      digestInto(out) {
        aexists(this);
        aoutput(out, this);
        this.finished = true;
        const { buffer, view, blockLen, isLE: isLE2 } = this;
        let { pos } = this;
        buffer[pos++] = 128;
        clean(this.buffer.subarray(pos));
        if (this.padOffset > blockLen - pos) {
          this.process(view, 0);
          pos = 0;
        }
        for (let i4 = pos; i4 < blockLen; i4++)
          buffer[i4] = 0;
        setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
        this.process(view, 0);
        const oview = createView(out);
        const len = this.outputLen;
        if (len % 4)
          throw new Error("_sha2: outputLen should be aligned to 32bit");
        const outLen = len / 4;
        const state = this.get();
        if (outLen > state.length)
          throw new Error("_sha2: outputLen bigger than state");
        for (let i4 = 0; i4 < outLen; i4++)
          oview.setUint32(4 * i4, state[i4], isLE2);
      }
      digest() {
        const { buffer, outputLen } = this;
        this.digestInto(buffer);
        const res = buffer.slice(0, outputLen);
        this.destroy();
        return res;
      }
      _cloneInto(to5) {
        to5 || (to5 = new this.constructor());
        to5.set(...this.get());
        const { blockLen, buffer, length: length2, finished, destroyed, pos } = this;
        to5.destroyed = destroyed;
        to5.finished = finished;
        to5.length = length2;
        to5.pos = pos;
        if (length2 % blockLen)
          to5.buffer.set(buffer);
        return to5;
      }
      clone() {
        return this._cloneInto();
      }
    };
    SHA256_IV = /* @__PURE__ */ Uint32Array.from([
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ]);
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/sha2.js
var SHA256_K, SHA256_W, SHA256, sha256;
var init_sha2 = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/sha2.js"() {
    init_md();
    init_utils();
    SHA256_K = /* @__PURE__ */ Uint32Array.from([
      1116352408,
      1899447441,
      3049323471,
      3921009573,
      961987163,
      1508970993,
      2453635748,
      2870763221,
      3624381080,
      310598401,
      607225278,
      1426881987,
      1925078388,
      2162078206,
      2614888103,
      3248222580,
      3835390401,
      4022224774,
      264347078,
      604807628,
      770255983,
      1249150122,
      1555081692,
      1996064986,
      2554220882,
      2821834349,
      2952996808,
      3210313671,
      3336571891,
      3584528711,
      113926993,
      338241895,
      666307205,
      773529912,
      1294757372,
      1396182291,
      1695183700,
      1986661051,
      2177026350,
      2456956037,
      2730485921,
      2820302411,
      3259730800,
      3345764771,
      3516065817,
      3600352804,
      4094571909,
      275423344,
      430227734,
      506948616,
      659060556,
      883997877,
      958139571,
      1322822218,
      1537002063,
      1747873779,
      1955562222,
      2024104815,
      2227730452,
      2361852424,
      2428436474,
      2756734187,
      3204031479,
      3329325298
    ]);
    SHA256_W = /* @__PURE__ */ new Uint32Array(64);
    SHA256 = class extends HashMD {
      constructor(outputLen = 32) {
        super(64, outputLen, 8, false);
        this.A = SHA256_IV[0] | 0;
        this.B = SHA256_IV[1] | 0;
        this.C = SHA256_IV[2] | 0;
        this.D = SHA256_IV[3] | 0;
        this.E = SHA256_IV[4] | 0;
        this.F = SHA256_IV[5] | 0;
        this.G = SHA256_IV[6] | 0;
        this.H = SHA256_IV[7] | 0;
      }
      get() {
        const { A: A5, B: B4, C: C5, D: D4, E: E6, F: F3, G: G6, H: H4 } = this;
        return [A5, B4, C5, D4, E6, F3, G6, H4];
      }
      // prettier-ignore
      set(A5, B4, C5, D4, E6, F3, G6, H4) {
        this.A = A5 | 0;
        this.B = B4 | 0;
        this.C = C5 | 0;
        this.D = D4 | 0;
        this.E = E6 | 0;
        this.F = F3 | 0;
        this.G = G6 | 0;
        this.H = H4 | 0;
      }
      process(view, offset) {
        for (let i4 = 0; i4 < 16; i4++, offset += 4)
          SHA256_W[i4] = view.getUint32(offset, false);
        for (let i4 = 16; i4 < 64; i4++) {
          const W15 = SHA256_W[i4 - 15];
          const W22 = SHA256_W[i4 - 2];
          const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
          const s1 = rotr(W22, 17) ^ rotr(W22, 19) ^ W22 >>> 10;
          SHA256_W[i4] = s1 + SHA256_W[i4 - 7] + s0 + SHA256_W[i4 - 16] | 0;
        }
        let { A: A5, B: B4, C: C5, D: D4, E: E6, F: F3, G: G6, H: H4 } = this;
        for (let i4 = 0; i4 < 64; i4++) {
          const sigma1 = rotr(E6, 6) ^ rotr(E6, 11) ^ rotr(E6, 25);
          const T1 = H4 + sigma1 + Chi(E6, F3, G6) + SHA256_K[i4] + SHA256_W[i4] | 0;
          const sigma0 = rotr(A5, 2) ^ rotr(A5, 13) ^ rotr(A5, 22);
          const T22 = sigma0 + Maj(A5, B4, C5) | 0;
          H4 = G6;
          G6 = F3;
          F3 = E6;
          E6 = D4 + T1 | 0;
          D4 = C5;
          C5 = B4;
          B4 = A5;
          A5 = T1 + T22 | 0;
        }
        A5 = A5 + this.A | 0;
        B4 = B4 + this.B | 0;
        C5 = C5 + this.C | 0;
        D4 = D4 + this.D | 0;
        E6 = E6 + this.E | 0;
        F3 = F3 + this.F | 0;
        G6 = G6 + this.G | 0;
        H4 = H4 + this.H | 0;
        this.set(A5, B4, C5, D4, E6, F3, G6, H4);
      }
      roundClean() {
        clean(SHA256_W);
      }
      destroy() {
        this.set(0, 0, 0, 0, 0, 0, 0, 0);
        clean(this.buffer);
      }
    };
    sha256 = /* @__PURE__ */ createHasher(() => new SHA256());
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/hmac.js
var HMAC, hmac;
var init_hmac = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@noble/hashes/esm/hmac.js"() {
    init_utils();
    HMAC = class extends Hash {
      constructor(hash, _key) {
        super();
        this.finished = false;
        this.destroyed = false;
        ahash(hash);
        const key = toBytes2(_key);
        this.iHash = hash.create();
        if (typeof this.iHash.update !== "function")
          throw new Error("Expected instance of class which extends utils.Hash");
        this.blockLen = this.iHash.blockLen;
        this.outputLen = this.iHash.outputLen;
        const blockLen = this.blockLen;
        const pad2 = new Uint8Array(blockLen);
        pad2.set(key.length > blockLen ? hash.create().update(key).digest() : key);
        for (let i4 = 0; i4 < pad2.length; i4++)
          pad2[i4] ^= 54;
        this.iHash.update(pad2);
        this.oHash = hash.create();
        for (let i4 = 0; i4 < pad2.length; i4++)
          pad2[i4] ^= 54 ^ 92;
        this.oHash.update(pad2);
        clean(pad2);
      }
      update(buf) {
        aexists(this);
        this.iHash.update(buf);
        return this;
      }
      digestInto(out) {
        aexists(this);
        abytes(out, this.outputLen);
        this.finished = true;
        this.iHash.digestInto(out);
        this.oHash.update(out);
        this.oHash.digestInto(out);
        this.destroy();
      }
      digest() {
        const out = new Uint8Array(this.oHash.outputLen);
        this.digestInto(out);
        return out;
      }
      _cloneInto(to5) {
        to5 || (to5 = Object.create(Object.getPrototypeOf(this), {}));
        const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
        to5 = to5;
        to5.finished = finished;
        to5.destroyed = destroyed;
        to5.blockLen = blockLen;
        to5.outputLen = outputLen;
        to5.oHash = oHash._cloneInto(to5.oHash);
        to5.iHash = iHash._cloneInto(to5.iHash);
        return to5;
      }
      clone() {
        return this._cloneInto();
      }
      destroy() {
        this.destroyed = true;
        this.oHash.destroy();
        this.iHash.destroy();
      }
    };
    hmac = (hash, key, message) => new HMAC(hash, key).update(message).digest();
    hmac.create = (hash, key) => new HMAC(hash, key);
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/node_modules/@noble/curves/esm/abstract/utils.js
function isBytes2(a3) {
  return a3 instanceof Uint8Array || ArrayBuffer.isView(a3) && a3.constructor.name === "Uint8Array";
}
function abytes2(item) {
  if (!isBytes2(item))
    throw new Error("Uint8Array expected");
}
function abool(title, value) {
  if (typeof value !== "boolean")
    throw new Error(title + " boolean expected, got " + value);
}
function numberToHexUnpadded(num2) {
  const hex = num2.toString(16);
  return hex.length & 1 ? "0" + hex : hex;
}
function hexToNumber2(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  return hex === "" ? _0n2 : BigInt("0x" + hex);
}
function bytesToHex2(bytes) {
  abytes2(bytes);
  if (hasHexBuiltin)
    return bytes.toHex();
  let hex = "";
  for (let i4 = 0; i4 < bytes.length; i4++) {
    hex += hexes2[bytes[i4]];
  }
  return hex;
}
function asciiToBase16(ch) {
  if (ch >= asciis._0 && ch <= asciis._9)
    return ch - asciis._0;
  if (ch >= asciis.A && ch <= asciis.F)
    return ch - (asciis.A - 10);
  if (ch >= asciis.a && ch <= asciis.f)
    return ch - (asciis.a - 10);
  return;
}
function hexToBytes2(hex) {
  if (typeof hex !== "string")
    throw new Error("hex string expected, got " + typeof hex);
  if (hasHexBuiltin)
    return Uint8Array.fromHex(hex);
  const hl = hex.length;
  const al = hl / 2;
  if (hl % 2)
    throw new Error("hex string expected, got unpadded hex of length " + hl);
  const array = new Uint8Array(al);
  for (let ai4 = 0, hi4 = 0; ai4 < al; ai4++, hi4 += 2) {
    const n1 = asciiToBase16(hex.charCodeAt(hi4));
    const n22 = asciiToBase16(hex.charCodeAt(hi4 + 1));
    if (n1 === void 0 || n22 === void 0) {
      const char = hex[hi4] + hex[hi4 + 1];
      throw new Error('hex string expected, got non-hex character "' + char + '" at index ' + hi4);
    }
    array[ai4] = n1 * 16 + n22;
  }
  return array;
}
function bytesToNumberBE(bytes) {
  return hexToNumber2(bytesToHex2(bytes));
}
function bytesToNumberLE(bytes) {
  abytes2(bytes);
  return hexToNumber2(bytesToHex2(Uint8Array.from(bytes).reverse()));
}
function numberToBytesBE(n5, len) {
  return hexToBytes2(n5.toString(16).padStart(len * 2, "0"));
}
function numberToBytesLE(n5, len) {
  return numberToBytesBE(n5, len).reverse();
}
function ensureBytes(title, hex, expectedLength) {
  let res;
  if (typeof hex === "string") {
    try {
      res = hexToBytes2(hex);
    } catch (e2) {
      throw new Error(title + " must be hex string or Uint8Array, cause: " + e2);
    }
  } else if (isBytes2(hex)) {
    res = Uint8Array.from(hex);
  } else {
    throw new Error(title + " must be hex string or Uint8Array");
  }
  const len = res.length;
  if (typeof expectedLength === "number" && len !== expectedLength)
    throw new Error(title + " of length " + expectedLength + " expected, got " + len);
  return res;
}
function concatBytes2(...arrays) {
  let sum = 0;
  for (let i4 = 0; i4 < arrays.length; i4++) {
    const a3 = arrays[i4];
    abytes2(a3);
    sum += a3.length;
  }
  const res = new Uint8Array(sum);
  for (let i4 = 0, pad2 = 0; i4 < arrays.length; i4++) {
    const a3 = arrays[i4];
    res.set(a3, pad2);
    pad2 += a3.length;
  }
  return res;
}
function utf8ToBytes2(str) {
  if (typeof str !== "string")
    throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(str));
}
function inRange(n5, min, max) {
  return isPosBig(n5) && isPosBig(min) && isPosBig(max) && min <= n5 && n5 < max;
}
function aInRange(title, n5, min, max) {
  if (!inRange(n5, min, max))
    throw new Error("expected valid " + title + ": " + min + " <= n < " + max + ", got " + n5);
}
function bitLen(n5) {
  let len;
  for (len = 0; n5 > _0n2; n5 >>= _1n2, len += 1)
    ;
  return len;
}
function createHmacDrbg(hashLen, qByteLen, hmacFn) {
  if (typeof hashLen !== "number" || hashLen < 2)
    throw new Error("hashLen must be a number");
  if (typeof qByteLen !== "number" || qByteLen < 2)
    throw new Error("qByteLen must be a number");
  if (typeof hmacFn !== "function")
    throw new Error("hmacFn must be a function");
  let v6 = u8n(hashLen);
  let k7 = u8n(hashLen);
  let i4 = 0;
  const reset = () => {
    v6.fill(1);
    k7.fill(0);
    i4 = 0;
  };
  const h6 = (...b5) => hmacFn(k7, v6, ...b5);
  const reseed = (seed = u8n(0)) => {
    k7 = h6(u8fr([0]), seed);
    v6 = h6();
    if (seed.length === 0)
      return;
    k7 = h6(u8fr([1]), seed);
    v6 = h6();
  };
  const gen2 = () => {
    if (i4++ >= 1e3)
      throw new Error("drbg: tried 1000 values");
    let len = 0;
    const out = [];
    while (len < qByteLen) {
      v6 = h6();
      const sl = v6.slice();
      out.push(sl);
      len += v6.length;
    }
    return concatBytes2(...out);
  };
  const genUntil = (seed, pred) => {
    reset();
    reseed(seed);
    let res = void 0;
    while (!(res = pred(gen2())))
      reseed();
    reset();
    return res;
  };
  return genUntil;
}
function validateObject(object, validators, optValidators = {}) {
  const checkField = (fieldName, type, isOptional) => {
    const checkVal = validatorFns[type];
    if (typeof checkVal !== "function")
      throw new Error("invalid validator function");
    const val = object[fieldName];
    if (isOptional && val === void 0)
      return;
    if (!checkVal(val, object)) {
      throw new Error("param " + String(fieldName) + " is invalid. Expected " + type + ", got " + val);
    }
  };
  for (const [fieldName, type] of Object.entries(validators))
    checkField(fieldName, type, false);
  for (const [fieldName, type] of Object.entries(optValidators))
    checkField(fieldName, type, true);
  return object;
}
function memoized(fn3) {
  const map = /* @__PURE__ */ new WeakMap();
  return (arg, ...args) => {
    const val = map.get(arg);
    if (val !== void 0)
      return val;
    const computed = fn3(arg, ...args);
    map.set(arg, computed);
    return computed;
  };
}
var _0n2, _1n2, hasHexBuiltin, hexes2, asciis, isPosBig, bitMask, u8n, u8fr, validatorFns;
var init_utils2 = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/node_modules/@noble/curves/esm/abstract/utils.js"() {
    _0n2 = /* @__PURE__ */ BigInt(0);
    _1n2 = /* @__PURE__ */ BigInt(1);
    hasHexBuiltin = // @ts-ignore
    typeof Uint8Array.from([]).toHex === "function" && typeof Uint8Array.fromHex === "function";
    hexes2 = /* @__PURE__ */ Array.from({ length: 256 }, (_3, i4) => i4.toString(16).padStart(2, "0"));
    asciis = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
    isPosBig = (n5) => typeof n5 === "bigint" && _0n2 <= n5;
    bitMask = (n5) => (_1n2 << BigInt(n5)) - _1n2;
    u8n = (len) => new Uint8Array(len);
    u8fr = (arr) => Uint8Array.from(arr);
    validatorFns = {
      bigint: (val) => typeof val === "bigint",
      function: (val) => typeof val === "function",
      boolean: (val) => typeof val === "boolean",
      string: (val) => typeof val === "string",
      stringOrUint8Array: (val) => typeof val === "string" || isBytes2(val),
      isSafeInteger: (val) => Number.isSafeInteger(val),
      array: (val) => Array.isArray(val),
      field: (val, object) => object.Fp.isValid(val),
      hash: (val) => typeof val === "function" && Number.isSafeInteger(val.outputLen)
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/node_modules/@noble/curves/esm/abstract/modular.js
function mod(a3, b5) {
  const result = a3 % b5;
  return result >= _0n3 ? result : b5 + result;
}
function pow2(x7, power, modulo) {
  let res = x7;
  while (power-- > _0n3) {
    res *= res;
    res %= modulo;
  }
  return res;
}
function invert(number, modulo) {
  if (number === _0n3)
    throw new Error("invert: expected non-zero number");
  if (modulo <= _0n3)
    throw new Error("invert: expected positive modulus, got " + modulo);
  let a3 = mod(number, modulo);
  let b5 = modulo;
  let x7 = _0n3, y6 = _1n3, u3 = _1n3, v6 = _0n3;
  while (a3 !== _0n3) {
    const q2 = b5 / a3;
    const r3 = b5 % a3;
    const m4 = x7 - u3 * q2;
    const n5 = y6 - v6 * q2;
    b5 = a3, a3 = r3, x7 = u3, y6 = v6, u3 = m4, v6 = n5;
  }
  const gcd2 = b5;
  if (gcd2 !== _1n3)
    throw new Error("invert: does not exist");
  return mod(x7, modulo);
}
function sqrt3mod4(Fp, n5) {
  const p1div4 = (Fp.ORDER + _1n3) / _4n;
  const root = Fp.pow(n5, p1div4);
  if (!Fp.eql(Fp.sqr(root), n5))
    throw new Error("Cannot find square root");
  return root;
}
function sqrt5mod8(Fp, n5) {
  const p5div8 = (Fp.ORDER - _5n) / _8n;
  const n22 = Fp.mul(n5, _2n2);
  const v6 = Fp.pow(n22, p5div8);
  const nv = Fp.mul(n5, v6);
  const i4 = Fp.mul(Fp.mul(nv, _2n2), v6);
  const root = Fp.mul(nv, Fp.sub(i4, Fp.ONE));
  if (!Fp.eql(Fp.sqr(root), n5))
    throw new Error("Cannot find square root");
  return root;
}
function tonelliShanks(P6) {
  if (P6 < BigInt(3))
    throw new Error("sqrt is not defined for small field");
  let Q6 = P6 - _1n3;
  let S5 = 0;
  while (Q6 % _2n2 === _0n3) {
    Q6 /= _2n2;
    S5++;
  }
  let Z3 = _2n2;
  const _Fp = Field(P6);
  while (FpLegendre(_Fp, Z3) === 1) {
    if (Z3++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  }
  if (S5 === 1)
    return sqrt3mod4;
  let cc2 = _Fp.pow(Z3, Q6);
  const Q1div2 = (Q6 + _1n3) / _2n2;
  return function tonelliSlow(Fp, n5) {
    if (Fp.is0(n5))
      return n5;
    if (FpLegendre(Fp, n5) !== 1)
      throw new Error("Cannot find square root");
    let M6 = S5;
    let c7 = Fp.mul(Fp.ONE, cc2);
    let t = Fp.pow(n5, Q6);
    let R4 = Fp.pow(n5, Q1div2);
    while (!Fp.eql(t, Fp.ONE)) {
      if (Fp.is0(t))
        return Fp.ZERO;
      let i4 = 1;
      let t_tmp = Fp.sqr(t);
      while (!Fp.eql(t_tmp, Fp.ONE)) {
        i4++;
        t_tmp = Fp.sqr(t_tmp);
        if (i4 === M6)
          throw new Error("Cannot find square root");
      }
      const exponent = _1n3 << BigInt(M6 - i4 - 1);
      const b5 = Fp.pow(c7, exponent);
      M6 = i4;
      c7 = Fp.sqr(b5);
      t = Fp.mul(t, c7);
      R4 = Fp.mul(R4, b5);
    }
    return R4;
  };
}
function FpSqrt(P6) {
  if (P6 % _4n === _3n)
    return sqrt3mod4;
  if (P6 % _8n === _5n)
    return sqrt5mod8;
  return tonelliShanks(P6);
}
function validateField(field) {
  const initial = {
    ORDER: "bigint",
    MASK: "bigint",
    BYTES: "isSafeInteger",
    BITS: "isSafeInteger"
  };
  const opts = FIELD_FIELDS.reduce((map, val) => {
    map[val] = "function";
    return map;
  }, initial);
  return validateObject(field, opts);
}
function FpPow(Fp, num2, power) {
  if (power < _0n3)
    throw new Error("invalid exponent, negatives unsupported");
  if (power === _0n3)
    return Fp.ONE;
  if (power === _1n3)
    return num2;
  let p5 = Fp.ONE;
  let d5 = num2;
  while (power > _0n3) {
    if (power & _1n3)
      p5 = Fp.mul(p5, d5);
    d5 = Fp.sqr(d5);
    power >>= _1n3;
  }
  return p5;
}
function FpInvertBatch(Fp, nums, passZero = false) {
  const inverted = new Array(nums.length).fill(passZero ? Fp.ZERO : void 0);
  const multipliedAcc = nums.reduce((acc, num2, i4) => {
    if (Fp.is0(num2))
      return acc;
    inverted[i4] = acc;
    return Fp.mul(acc, num2);
  }, Fp.ONE);
  const invertedAcc = Fp.inv(multipliedAcc);
  nums.reduceRight((acc, num2, i4) => {
    if (Fp.is0(num2))
      return acc;
    inverted[i4] = Fp.mul(acc, inverted[i4]);
    return Fp.mul(acc, num2);
  }, invertedAcc);
  return inverted;
}
function FpLegendre(Fp, n5) {
  const p1mod2 = (Fp.ORDER - _1n3) / _2n2;
  const powered = Fp.pow(n5, p1mod2);
  const yes = Fp.eql(powered, Fp.ONE);
  const zero = Fp.eql(powered, Fp.ZERO);
  const no5 = Fp.eql(powered, Fp.neg(Fp.ONE));
  if (!yes && !zero && !no5)
    throw new Error("invalid Legendre symbol result");
  return yes ? 1 : zero ? 0 : -1;
}
function nLength(n5, nBitLength) {
  if (nBitLength !== void 0)
    anumber(nBitLength);
  const _nBitLength = nBitLength !== void 0 ? nBitLength : n5.toString(2).length;
  const nByteLength = Math.ceil(_nBitLength / 8);
  return { nBitLength: _nBitLength, nByteLength };
}
function Field(ORDER, bitLen2, isLE2 = false, redef = {}) {
  if (ORDER <= _0n3)
    throw new Error("invalid field: expected ORDER > 0, got " + ORDER);
  const { nBitLength: BITS, nByteLength: BYTES } = nLength(ORDER, bitLen2);
  if (BYTES > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let sqrtP;
  const f8 = Object.freeze({
    ORDER,
    isLE: isLE2,
    BITS,
    BYTES,
    MASK: bitMask(BITS),
    ZERO: _0n3,
    ONE: _1n3,
    create: (num2) => mod(num2, ORDER),
    isValid: (num2) => {
      if (typeof num2 !== "bigint")
        throw new Error("invalid field element: expected bigint, got " + typeof num2);
      return _0n3 <= num2 && num2 < ORDER;
    },
    is0: (num2) => num2 === _0n3,
    isOdd: (num2) => (num2 & _1n3) === _1n3,
    neg: (num2) => mod(-num2, ORDER),
    eql: (lhs, rhs) => lhs === rhs,
    sqr: (num2) => mod(num2 * num2, ORDER),
    add: (lhs, rhs) => mod(lhs + rhs, ORDER),
    sub: (lhs, rhs) => mod(lhs - rhs, ORDER),
    mul: (lhs, rhs) => mod(lhs * rhs, ORDER),
    pow: (num2, power) => FpPow(f8, num2, power),
    div: (lhs, rhs) => mod(lhs * invert(rhs, ORDER), ORDER),
    // Same as above, but doesn't normalize
    sqrN: (num2) => num2 * num2,
    addN: (lhs, rhs) => lhs + rhs,
    subN: (lhs, rhs) => lhs - rhs,
    mulN: (lhs, rhs) => lhs * rhs,
    inv: (num2) => invert(num2, ORDER),
    sqrt: redef.sqrt || ((n5) => {
      if (!sqrtP)
        sqrtP = FpSqrt(ORDER);
      return sqrtP(f8, n5);
    }),
    toBytes: (num2) => isLE2 ? numberToBytesLE(num2, BYTES) : numberToBytesBE(num2, BYTES),
    fromBytes: (bytes) => {
      if (bytes.length !== BYTES)
        throw new Error("Field.fromBytes: expected " + BYTES + " bytes, got " + bytes.length);
      return isLE2 ? bytesToNumberLE(bytes) : bytesToNumberBE(bytes);
    },
    // TODO: we don't need it here, move out to separate fn
    invertBatch: (lst) => FpInvertBatch(f8, lst),
    // We can't move this out because Fp6, Fp12 implement it
    // and it's unclear what to return in there.
    cmov: (a3, b5, c7) => c7 ? b5 : a3
  });
  return Object.freeze(f8);
}
function getFieldBytesLength(fieldOrder) {
  if (typeof fieldOrder !== "bigint")
    throw new Error("field order must be bigint");
  const bitLength = fieldOrder.toString(2).length;
  return Math.ceil(bitLength / 8);
}
function getMinHashLength(fieldOrder) {
  const length2 = getFieldBytesLength(fieldOrder);
  return length2 + Math.ceil(length2 / 2);
}
function mapHashToField(key, fieldOrder, isLE2 = false) {
  const len = key.length;
  const fieldLen = getFieldBytesLength(fieldOrder);
  const minLen = getMinHashLength(fieldOrder);
  if (len < 16 || len < minLen || len > 1024)
    throw new Error("expected " + minLen + "-1024 bytes of input, got " + len);
  const num2 = isLE2 ? bytesToNumberLE(key) : bytesToNumberBE(key);
  const reduced = mod(num2, fieldOrder - _1n3) + _1n3;
  return isLE2 ? numberToBytesLE(reduced, fieldLen) : numberToBytesBE(reduced, fieldLen);
}
var _0n3, _1n3, _2n2, _3n, _4n, _5n, _8n, FIELD_FIELDS;
var init_modular = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/node_modules/@noble/curves/esm/abstract/modular.js"() {
    init_utils();
    init_utils2();
    _0n3 = BigInt(0);
    _1n3 = BigInt(1);
    _2n2 = /* @__PURE__ */ BigInt(2);
    _3n = /* @__PURE__ */ BigInt(3);
    _4n = /* @__PURE__ */ BigInt(4);
    _5n = /* @__PURE__ */ BigInt(5);
    _8n = /* @__PURE__ */ BigInt(8);
    FIELD_FIELDS = [
      "create",
      "isValid",
      "is0",
      "neg",
      "inv",
      "sqrt",
      "sqr",
      "eql",
      "add",
      "sub",
      "mul",
      "pow",
      "div",
      "addN",
      "subN",
      "mulN",
      "sqrN"
    ];
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/node_modules/@noble/curves/esm/abstract/curve.js
function constTimeNegate(condition, item) {
  const neg = item.negate();
  return condition ? neg : item;
}
function validateW(W6, bits) {
  if (!Number.isSafeInteger(W6) || W6 <= 0 || W6 > bits)
    throw new Error("invalid window size, expected [1.." + bits + "], got W=" + W6);
}
function calcWOpts(W6, scalarBits) {
  validateW(W6, scalarBits);
  const windows = Math.ceil(scalarBits / W6) + 1;
  const windowSize = 2 ** (W6 - 1);
  const maxNumber = 2 ** W6;
  const mask = bitMask(W6);
  const shiftBy = BigInt(W6);
  return { windows, windowSize, mask, maxNumber, shiftBy };
}
function calcOffsets(n5, window2, wOpts) {
  const { windowSize, mask, maxNumber, shiftBy } = wOpts;
  let wbits = Number(n5 & mask);
  let nextN = n5 >> shiftBy;
  if (wbits > windowSize) {
    wbits -= maxNumber;
    nextN += _1n4;
  }
  const offsetStart = window2 * windowSize;
  const offset = offsetStart + Math.abs(wbits) - 1;
  const isZero = wbits === 0;
  const isNeg = wbits < 0;
  const isNegF = window2 % 2 !== 0;
  const offsetF = offsetStart;
  return { nextN, offset, isZero, isNeg, isNegF, offsetF };
}
function validateMSMPoints(points, c7) {
  if (!Array.isArray(points))
    throw new Error("array expected");
  points.forEach((p5, i4) => {
    if (!(p5 instanceof c7))
      throw new Error("invalid point at index " + i4);
  });
}
function validateMSMScalars(scalars, field) {
  if (!Array.isArray(scalars))
    throw new Error("array of scalars expected");
  scalars.forEach((s3, i4) => {
    if (!field.isValid(s3))
      throw new Error("invalid scalar at index " + i4);
  });
}
function getW(P6) {
  return pointWindowSizes.get(P6) || 1;
}
function wNAF(c7, bits) {
  return {
    constTimeNegate,
    hasPrecomputes(elm) {
      return getW(elm) !== 1;
    },
    // non-const time multiplication ladder
    unsafeLadder(elm, n5, p5 = c7.ZERO) {
      let d5 = elm;
      while (n5 > _0n4) {
        if (n5 & _1n4)
          p5 = p5.add(d5);
        d5 = d5.double();
        n5 >>= _1n4;
      }
      return p5;
    },
    /**
     * Creates a wNAF precomputation window. Used for caching.
     * Default window size is set by `utils.precompute()` and is equal to 8.
     * Number of precomputed points depends on the curve size:
     * 2^(𝑊−1) * (Math.ceil(𝑛 / 𝑊) + 1), where:
     * - 𝑊 is the window size
     * - 𝑛 is the bitlength of the curve order.
     * For a 256-bit curve and window size 8, the number of precomputed points is 128 * 33 = 4224.
     * @param elm Point instance
     * @param W window size
     * @returns precomputed point tables flattened to a single array
     */
    precomputeWindow(elm, W6) {
      const { windows, windowSize } = calcWOpts(W6, bits);
      const points = [];
      let p5 = elm;
      let base3 = p5;
      for (let window2 = 0; window2 < windows; window2++) {
        base3 = p5;
        points.push(base3);
        for (let i4 = 1; i4 < windowSize; i4++) {
          base3 = base3.add(p5);
          points.push(base3);
        }
        p5 = base3.double();
      }
      return points;
    },
    /**
     * Implements ec multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @returns real and fake (for const-time) points
     */
    wNAF(W6, precomputes, n5) {
      let p5 = c7.ZERO;
      let f8 = c7.BASE;
      const wo5 = calcWOpts(W6, bits);
      for (let window2 = 0; window2 < wo5.windows; window2++) {
        const { nextN, offset, isZero, isNeg, isNegF, offsetF } = calcOffsets(n5, window2, wo5);
        n5 = nextN;
        if (isZero) {
          f8 = f8.add(constTimeNegate(isNegF, precomputes[offsetF]));
        } else {
          p5 = p5.add(constTimeNegate(isNeg, precomputes[offset]));
        }
      }
      return { p: p5, f: f8 };
    },
    /**
     * Implements ec unsafe (non const-time) multiplication using precomputed tables and w-ary non-adjacent form.
     * @param W window size
     * @param precomputes precomputed tables
     * @param n scalar (we don't check here, but should be less than curve order)
     * @param acc accumulator point to add result of multiplication
     * @returns point
     */
    wNAFUnsafe(W6, precomputes, n5, acc = c7.ZERO) {
      const wo5 = calcWOpts(W6, bits);
      for (let window2 = 0; window2 < wo5.windows; window2++) {
        if (n5 === _0n4)
          break;
        const { nextN, offset, isZero, isNeg } = calcOffsets(n5, window2, wo5);
        n5 = nextN;
        if (isZero) {
          continue;
        } else {
          const item = precomputes[offset];
          acc = acc.add(isNeg ? item.negate() : item);
        }
      }
      return acc;
    },
    getPrecomputes(W6, P6, transform) {
      let comp = pointPrecomputes.get(P6);
      if (!comp) {
        comp = this.precomputeWindow(P6, W6);
        if (W6 !== 1)
          pointPrecomputes.set(P6, transform(comp));
      }
      return comp;
    },
    wNAFCached(P6, n5, transform) {
      const W6 = getW(P6);
      return this.wNAF(W6, this.getPrecomputes(W6, P6, transform), n5);
    },
    wNAFCachedUnsafe(P6, n5, transform, prev) {
      const W6 = getW(P6);
      if (W6 === 1)
        return this.unsafeLadder(P6, n5, prev);
      return this.wNAFUnsafe(W6, this.getPrecomputes(W6, P6, transform), n5, prev);
    },
    // We calculate precomputes for elliptic curve point multiplication
    // using windowed method. This specifies window size and
    // stores precomputed values. Usually only base point would be precomputed.
    setWindowSize(P6, W6) {
      validateW(W6, bits);
      pointWindowSizes.set(P6, W6);
      pointPrecomputes.delete(P6);
    }
  };
}
function pippenger(c7, fieldN, points, scalars) {
  validateMSMPoints(points, c7);
  validateMSMScalars(scalars, fieldN);
  const plength = points.length;
  const slength = scalars.length;
  if (plength !== slength)
    throw new Error("arrays of points and scalars must have equal length");
  const zero = c7.ZERO;
  const wbits = bitLen(BigInt(plength));
  let windowSize = 1;
  if (wbits > 12)
    windowSize = wbits - 3;
  else if (wbits > 4)
    windowSize = wbits - 2;
  else if (wbits > 0)
    windowSize = 2;
  const MASK = bitMask(windowSize);
  const buckets = new Array(Number(MASK) + 1).fill(zero);
  const lastBits = Math.floor((fieldN.BITS - 1) / windowSize) * windowSize;
  let sum = zero;
  for (let i4 = lastBits; i4 >= 0; i4 -= windowSize) {
    buckets.fill(zero);
    for (let j6 = 0; j6 < slength; j6++) {
      const scalar = scalars[j6];
      const wbits2 = Number(scalar >> BigInt(i4) & MASK);
      buckets[wbits2] = buckets[wbits2].add(points[j6]);
    }
    let resI = zero;
    for (let j6 = buckets.length - 1, sumI = zero; j6 > 0; j6--) {
      sumI = sumI.add(buckets[j6]);
      resI = resI.add(sumI);
    }
    sum = sum.add(resI);
    if (i4 !== 0)
      for (let j6 = 0; j6 < windowSize; j6++)
        sum = sum.double();
  }
  return sum;
}
function validateBasic(curve) {
  validateField(curve.Fp);
  validateObject(curve, {
    n: "bigint",
    h: "bigint",
    Gx: "field",
    Gy: "field"
  }, {
    nBitLength: "isSafeInteger",
    nByteLength: "isSafeInteger"
  });
  return Object.freeze({
    ...nLength(curve.n, curve.nBitLength),
    ...curve,
    ...{ p: curve.Fp.ORDER }
  });
}
var _0n4, _1n4, pointPrecomputes, pointWindowSizes;
var init_curve = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/node_modules/@noble/curves/esm/abstract/curve.js"() {
    init_modular();
    init_utils2();
    _0n4 = BigInt(0);
    _1n4 = BigInt(1);
    pointPrecomputes = /* @__PURE__ */ new WeakMap();
    pointWindowSizes = /* @__PURE__ */ new WeakMap();
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/node_modules/@noble/curves/esm/abstract/weierstrass.js
function validateSigVerOpts(opts) {
  if (opts.lowS !== void 0)
    abool("lowS", opts.lowS);
  if (opts.prehash !== void 0)
    abool("prehash", opts.prehash);
}
function validatePointOpts(curve) {
  const opts = validateBasic(curve);
  validateObject(opts, {
    a: "field",
    b: "field"
  }, {
    allowInfinityPoint: "boolean",
    allowedPrivateKeyLengths: "array",
    clearCofactor: "function",
    fromBytes: "function",
    isTorsionFree: "function",
    toBytes: "function",
    wrapPrivateKey: "boolean"
  });
  const { endo, Fp, a: a3 } = opts;
  if (endo) {
    if (!Fp.eql(a3, Fp.ZERO)) {
      throw new Error("invalid endo: CURVE.a must be 0");
    }
    if (typeof endo !== "object" || typeof endo.beta !== "bigint" || typeof endo.splitScalar !== "function") {
      throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');
    }
  }
  return Object.freeze({ ...opts });
}
function numToSizedHex(num2, size2) {
  return bytesToHex2(numberToBytesBE(num2, size2));
}
function weierstrassPoints(opts) {
  const CURVE = validatePointOpts(opts);
  const { Fp } = CURVE;
  const Fn5 = Field(CURVE.n, CURVE.nBitLength);
  const toBytes3 = CURVE.toBytes || ((_c2, point, _isCompressed) => {
    const a3 = point.toAffine();
    return concatBytes2(Uint8Array.from([4]), Fp.toBytes(a3.x), Fp.toBytes(a3.y));
  });
  const fromBytes = CURVE.fromBytes || ((bytes) => {
    const tail = bytes.subarray(1);
    const x7 = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
    const y6 = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
    return { x: x7, y: y6 };
  });
  function weierstrassEquation(x7) {
    const { a: a3, b: b5 } = CURVE;
    const x22 = Fp.sqr(x7);
    const x32 = Fp.mul(x22, x7);
    return Fp.add(Fp.add(x32, Fp.mul(x7, a3)), b5);
  }
  function isValidXY(x7, y6) {
    const left = Fp.sqr(y6);
    const right = weierstrassEquation(x7);
    return Fp.eql(left, right);
  }
  if (!isValidXY(CURVE.Gx, CURVE.Gy))
    throw new Error("bad curve params: generator point");
  const _4a3 = Fp.mul(Fp.pow(CURVE.a, _3n2), _4n2);
  const _27b2 = Fp.mul(Fp.sqr(CURVE.b), BigInt(27));
  if (Fp.is0(Fp.add(_4a3, _27b2)))
    throw new Error("bad curve params: a or b");
  function isWithinCurveOrder(num2) {
    return inRange(num2, _1n5, CURVE.n);
  }
  function normPrivateKeyToScalar(key) {
    const { allowedPrivateKeyLengths: lengths, nByteLength, wrapPrivateKey, n: N13 } = CURVE;
    if (lengths && typeof key !== "bigint") {
      if (isBytes2(key))
        key = bytesToHex2(key);
      if (typeof key !== "string" || !lengths.includes(key.length))
        throw new Error("invalid private key");
      key = key.padStart(nByteLength * 2, "0");
    }
    let num2;
    try {
      num2 = typeof key === "bigint" ? key : bytesToNumberBE(ensureBytes("private key", key, nByteLength));
    } catch (error) {
      throw new Error("invalid private key, expected hex or " + nByteLength + " bytes, got " + typeof key);
    }
    if (wrapPrivateKey)
      num2 = mod(num2, N13);
    aInRange("private key", num2, _1n5, N13);
    return num2;
  }
  function aprjpoint(other) {
    if (!(other instanceof Point2))
      throw new Error("ProjectivePoint expected");
  }
  const toAffineMemo = memoized((p5, iz) => {
    const { px: x7, py: y6, pz: z4 } = p5;
    if (Fp.eql(z4, Fp.ONE))
      return { x: x7, y: y6 };
    const is0 = p5.is0();
    if (iz == null)
      iz = is0 ? Fp.ONE : Fp.inv(z4);
    const ax = Fp.mul(x7, iz);
    const ay = Fp.mul(y6, iz);
    const zz = Fp.mul(z4, iz);
    if (is0)
      return { x: Fp.ZERO, y: Fp.ZERO };
    if (!Fp.eql(zz, Fp.ONE))
      throw new Error("invZ was invalid");
    return { x: ax, y: ay };
  });
  const assertValidMemo = memoized((p5) => {
    if (p5.is0()) {
      if (CURVE.allowInfinityPoint && !Fp.is0(p5.py))
        return;
      throw new Error("bad point: ZERO");
    }
    const { x: x7, y: y6 } = p5.toAffine();
    if (!Fp.isValid(x7) || !Fp.isValid(y6))
      throw new Error("bad point: x or y not FE");
    if (!isValidXY(x7, y6))
      throw new Error("bad point: equation left != right");
    if (!p5.isTorsionFree())
      throw new Error("bad point: not in prime-order subgroup");
    return true;
  });
  class Point2 {
    constructor(px, py, pz) {
      if (px == null || !Fp.isValid(px))
        throw new Error("x required");
      if (py == null || !Fp.isValid(py) || Fp.is0(py))
        throw new Error("y required");
      if (pz == null || !Fp.isValid(pz))
        throw new Error("z required");
      this.px = px;
      this.py = py;
      this.pz = pz;
      Object.freeze(this);
    }
    // Does not validate if the point is on-curve.
    // Use fromHex instead, or call assertValidity() later.
    static fromAffine(p5) {
      const { x: x7, y: y6 } = p5 || {};
      if (!p5 || !Fp.isValid(x7) || !Fp.isValid(y6))
        throw new Error("invalid affine point");
      if (p5 instanceof Point2)
        throw new Error("projective point not allowed");
      const is0 = (i4) => Fp.eql(i4, Fp.ZERO);
      if (is0(x7) && is0(y6))
        return Point2.ZERO;
      return new Point2(x7, y6, Fp.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    /**
     * Takes a bunch of Projective Points but executes only one
     * inversion on all of them. Inversion is very slow operation,
     * so this improves performance massively.
     * Optimization: converts a list of projective points to a list of identical points with Z=1.
     */
    static normalizeZ(points) {
      const toInv = FpInvertBatch(Fp, points.map((p5) => p5.pz));
      return points.map((p5, i4) => p5.toAffine(toInv[i4])).map(Point2.fromAffine);
    }
    /**
     * Converts hash string or Uint8Array to Point.
     * @param hex short/long ECDSA hex
     */
    static fromHex(hex) {
      const P6 = Point2.fromAffine(fromBytes(ensureBytes("pointHex", hex)));
      P6.assertValidity();
      return P6;
    }
    // Multiplies generator point by privateKey.
    static fromPrivateKey(privateKey) {
      return Point2.BASE.multiply(normPrivateKeyToScalar(privateKey));
    }
    // Multiscalar Multiplication
    static msm(points, scalars) {
      return pippenger(Point2, Fn5, points, scalars);
    }
    // "Private method", don't use it directly
    _setWindowSize(windowSize) {
      wnaf.setWindowSize(this, windowSize);
    }
    // A point on curve is valid if it conforms to equation.
    assertValidity() {
      assertValidMemo(this);
    }
    hasEvenY() {
      const { y: y6 } = this.toAffine();
      if (Fp.isOdd)
        return !Fp.isOdd(y6);
      throw new Error("Field doesn't support isOdd");
    }
    /**
     * Compare one point to another.
     */
    equals(other) {
      aprjpoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X22, py: Y22, pz: Z22 } = other;
      const U1 = Fp.eql(Fp.mul(X1, Z22), Fp.mul(X22, Z1));
      const U22 = Fp.eql(Fp.mul(Y1, Z22), Fp.mul(Y22, Z1));
      return U1 && U22;
    }
    /**
     * Flips point to one corresponding to (x, -y) in Affine coordinates.
     */
    negate() {
      return new Point2(this.px, Fp.neg(this.py), this.pz);
    }
    // Renes-Costello-Batina exception-free doubling formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 3
    // Cost: 8M + 3S + 3*a + 2*b3 + 15add.
    double() {
      const { a: a3, b: b5 } = CURVE;
      const b32 = Fp.mul(b5, _3n2);
      const { px: X1, py: Y1, pz: Z1 } = this;
      let X32 = Fp.ZERO, Y32 = Fp.ZERO, Z3 = Fp.ZERO;
      let t0 = Fp.mul(X1, X1);
      let t1 = Fp.mul(Y1, Y1);
      let t2 = Fp.mul(Z1, Z1);
      let t3 = Fp.mul(X1, Y1);
      t3 = Fp.add(t3, t3);
      Z3 = Fp.mul(X1, Z1);
      Z3 = Fp.add(Z3, Z3);
      X32 = Fp.mul(a3, Z3);
      Y32 = Fp.mul(b32, t2);
      Y32 = Fp.add(X32, Y32);
      X32 = Fp.sub(t1, Y32);
      Y32 = Fp.add(t1, Y32);
      Y32 = Fp.mul(X32, Y32);
      X32 = Fp.mul(t3, X32);
      Z3 = Fp.mul(b32, Z3);
      t2 = Fp.mul(a3, t2);
      t3 = Fp.sub(t0, t2);
      t3 = Fp.mul(a3, t3);
      t3 = Fp.add(t3, Z3);
      Z3 = Fp.add(t0, t0);
      t0 = Fp.add(Z3, t0);
      t0 = Fp.add(t0, t2);
      t0 = Fp.mul(t0, t3);
      Y32 = Fp.add(Y32, t0);
      t2 = Fp.mul(Y1, Z1);
      t2 = Fp.add(t2, t2);
      t0 = Fp.mul(t2, t3);
      X32 = Fp.sub(X32, t0);
      Z3 = Fp.mul(t2, t1);
      Z3 = Fp.add(Z3, Z3);
      Z3 = Fp.add(Z3, Z3);
      return new Point2(X32, Y32, Z3);
    }
    // Renes-Costello-Batina exception-free addition formula.
    // There is 30% faster Jacobian formula, but it is not complete.
    // https://eprint.iacr.org/2015/1060, algorithm 1
    // Cost: 12M + 0S + 3*a + 3*b3 + 23add.
    add(other) {
      aprjpoint(other);
      const { px: X1, py: Y1, pz: Z1 } = this;
      const { px: X22, py: Y22, pz: Z22 } = other;
      let X32 = Fp.ZERO, Y32 = Fp.ZERO, Z3 = Fp.ZERO;
      const a3 = CURVE.a;
      const b32 = Fp.mul(CURVE.b, _3n2);
      let t0 = Fp.mul(X1, X22);
      let t1 = Fp.mul(Y1, Y22);
      let t2 = Fp.mul(Z1, Z22);
      let t3 = Fp.add(X1, Y1);
      let t4 = Fp.add(X22, Y22);
      t3 = Fp.mul(t3, t4);
      t4 = Fp.add(t0, t1);
      t3 = Fp.sub(t3, t4);
      t4 = Fp.add(X1, Z1);
      let t5 = Fp.add(X22, Z22);
      t4 = Fp.mul(t4, t5);
      t5 = Fp.add(t0, t2);
      t4 = Fp.sub(t4, t5);
      t5 = Fp.add(Y1, Z1);
      X32 = Fp.add(Y22, Z22);
      t5 = Fp.mul(t5, X32);
      X32 = Fp.add(t1, t2);
      t5 = Fp.sub(t5, X32);
      Z3 = Fp.mul(a3, t4);
      X32 = Fp.mul(b32, t2);
      Z3 = Fp.add(X32, Z3);
      X32 = Fp.sub(t1, Z3);
      Z3 = Fp.add(t1, Z3);
      Y32 = Fp.mul(X32, Z3);
      t1 = Fp.add(t0, t0);
      t1 = Fp.add(t1, t0);
      t2 = Fp.mul(a3, t2);
      t4 = Fp.mul(b32, t4);
      t1 = Fp.add(t1, t2);
      t2 = Fp.sub(t0, t2);
      t2 = Fp.mul(a3, t2);
      t4 = Fp.add(t4, t2);
      t0 = Fp.mul(t1, t4);
      Y32 = Fp.add(Y32, t0);
      t0 = Fp.mul(t5, t4);
      X32 = Fp.mul(t3, X32);
      X32 = Fp.sub(X32, t0);
      t0 = Fp.mul(t3, t1);
      Z3 = Fp.mul(t5, Z3);
      Z3 = Fp.add(Z3, t0);
      return new Point2(X32, Y32, Z3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    is0() {
      return this.equals(Point2.ZERO);
    }
    wNAF(n5) {
      return wnaf.wNAFCached(this, n5, Point2.normalizeZ);
    }
    /**
     * Non-constant-time multiplication. Uses double-and-add algorithm.
     * It's faster, but should only be used when you don't care about
     * an exposed private key e.g. sig verification, which works over *public* keys.
     */
    multiplyUnsafe(sc2) {
      const { endo: endo2, n: N13 } = CURVE;
      aInRange("scalar", sc2, _0n5, N13);
      const I5 = Point2.ZERO;
      if (sc2 === _0n5)
        return I5;
      if (this.is0() || sc2 === _1n5)
        return this;
      if (!endo2 || wnaf.hasPrecomputes(this))
        return wnaf.wNAFCachedUnsafe(this, sc2, Point2.normalizeZ);
      let { k1neg, k1, k2neg, k2: k22 } = endo2.splitScalar(sc2);
      let k1p = I5;
      let k2p = I5;
      let d5 = this;
      while (k1 > _0n5 || k22 > _0n5) {
        if (k1 & _1n5)
          k1p = k1p.add(d5);
        if (k22 & _1n5)
          k2p = k2p.add(d5);
        d5 = d5.double();
        k1 >>= _1n5;
        k22 >>= _1n5;
      }
      if (k1neg)
        k1p = k1p.negate();
      if (k2neg)
        k2p = k2p.negate();
      k2p = new Point2(Fp.mul(k2p.px, endo2.beta), k2p.py, k2p.pz);
      return k1p.add(k2p);
    }
    /**
     * Constant time multiplication.
     * Uses wNAF method. Windowed method may be 10% faster,
     * but takes 2x longer to generate and consumes 2x memory.
     * Uses precomputes when available.
     * Uses endomorphism for Koblitz curves.
     * @param scalar by which the point would be multiplied
     * @returns New point
     */
    multiply(scalar) {
      const { endo: endo2, n: N13 } = CURVE;
      aInRange("scalar", scalar, _1n5, N13);
      let point, fake;
      if (endo2) {
        const { k1neg, k1, k2neg, k2: k22 } = endo2.splitScalar(scalar);
        let { p: k1p, f: f1p } = this.wNAF(k1);
        let { p: k2p, f: f2p } = this.wNAF(k22);
        k1p = wnaf.constTimeNegate(k1neg, k1p);
        k2p = wnaf.constTimeNegate(k2neg, k2p);
        k2p = new Point2(Fp.mul(k2p.px, endo2.beta), k2p.py, k2p.pz);
        point = k1p.add(k2p);
        fake = f1p.add(f2p);
      } else {
        const { p: p5, f: f8 } = this.wNAF(scalar);
        point = p5;
        fake = f8;
      }
      return Point2.normalizeZ([point, fake])[0];
    }
    /**
     * Efficiently calculate `aP + bQ`. Unsafe, can expose private key, if used incorrectly.
     * Not using Strauss-Shamir trick: precomputation tables are faster.
     * The trick could be useful if both P and Q are not G (not in our case).
     * @returns non-zero affine point
     */
    multiplyAndAddUnsafe(Q6, a3, b5) {
      const G6 = Point2.BASE;
      const mul = (P6, a4) => a4 === _0n5 || a4 === _1n5 || !P6.equals(G6) ? P6.multiplyUnsafe(a4) : P6.multiply(a4);
      const sum = mul(this, a3).add(mul(Q6, b5));
      return sum.is0() ? void 0 : sum;
    }
    // Converts Projective point to affine (x, y) coordinates.
    // Can accept precomputed Z^-1 - for example, from invertBatch.
    // (x, y, z) ∋ (x=x/z, y=y/z)
    toAffine(iz) {
      return toAffineMemo(this, iz);
    }
    isTorsionFree() {
      const { h: cofactor, isTorsionFree } = CURVE;
      if (cofactor === _1n5)
        return true;
      if (isTorsionFree)
        return isTorsionFree(Point2, this);
      throw new Error("isTorsionFree() has not been declared for the elliptic curve");
    }
    clearCofactor() {
      const { h: cofactor, clearCofactor } = CURVE;
      if (cofactor === _1n5)
        return this;
      if (clearCofactor)
        return clearCofactor(Point2, this);
      return this.multiplyUnsafe(CURVE.h);
    }
    toRawBytes(isCompressed = true) {
      abool("isCompressed", isCompressed);
      this.assertValidity();
      return toBytes3(Point2, this, isCompressed);
    }
    toHex(isCompressed = true) {
      abool("isCompressed", isCompressed);
      return bytesToHex2(this.toRawBytes(isCompressed));
    }
  }
  Point2.BASE = new Point2(CURVE.Gx, CURVE.Gy, Fp.ONE);
  Point2.ZERO = new Point2(Fp.ZERO, Fp.ONE, Fp.ZERO);
  const { endo, nBitLength } = CURVE;
  const wnaf = wNAF(Point2, endo ? Math.ceil(nBitLength / 2) : nBitLength);
  return {
    CURVE,
    ProjectivePoint: Point2,
    normPrivateKeyToScalar,
    weierstrassEquation,
    isWithinCurveOrder
  };
}
function validateOpts(curve) {
  const opts = validateBasic(curve);
  validateObject(opts, {
    hash: "hash",
    hmac: "function",
    randomBytes: "function"
  }, {
    bits2int: "function",
    bits2int_modN: "function",
    lowS: "boolean"
  });
  return Object.freeze({ lowS: true, ...opts });
}
function weierstrass(curveDef) {
  const CURVE = validateOpts(curveDef);
  const { Fp, n: CURVE_ORDER, nByteLength, nBitLength } = CURVE;
  const compressedLen = Fp.BYTES + 1;
  const uncompressedLen = 2 * Fp.BYTES + 1;
  function modN2(a3) {
    return mod(a3, CURVE_ORDER);
  }
  function invN(a3) {
    return invert(a3, CURVE_ORDER);
  }
  const { ProjectivePoint: Point2, normPrivateKeyToScalar, weierstrassEquation, isWithinCurveOrder } = weierstrassPoints({
    ...CURVE,
    toBytes(_c2, point, isCompressed) {
      const a3 = point.toAffine();
      const x7 = Fp.toBytes(a3.x);
      const cat = concatBytes2;
      abool("isCompressed", isCompressed);
      if (isCompressed) {
        return cat(Uint8Array.from([point.hasEvenY() ? 2 : 3]), x7);
      } else {
        return cat(Uint8Array.from([4]), x7, Fp.toBytes(a3.y));
      }
    },
    fromBytes(bytes) {
      const len = bytes.length;
      const head = bytes[0];
      const tail = bytes.subarray(1);
      if (len === compressedLen && (head === 2 || head === 3)) {
        const x7 = bytesToNumberBE(tail);
        if (!inRange(x7, _1n5, Fp.ORDER))
          throw new Error("Point is not on curve");
        const y22 = weierstrassEquation(x7);
        let y6;
        try {
          y6 = Fp.sqrt(y22);
        } catch (sqrtError) {
          const suffix = sqrtError instanceof Error ? ": " + sqrtError.message : "";
          throw new Error("Point is not on curve" + suffix);
        }
        const isYOdd = (y6 & _1n5) === _1n5;
        const isHeadOdd = (head & 1) === 1;
        if (isHeadOdd !== isYOdd)
          y6 = Fp.neg(y6);
        return { x: x7, y: y6 };
      } else if (len === uncompressedLen && head === 4) {
        const x7 = Fp.fromBytes(tail.subarray(0, Fp.BYTES));
        const y6 = Fp.fromBytes(tail.subarray(Fp.BYTES, 2 * Fp.BYTES));
        return { x: x7, y: y6 };
      } else {
        const cl = compressedLen;
        const ul = uncompressedLen;
        throw new Error("invalid Point, expected length of " + cl + ", or uncompressed " + ul + ", got " + len);
      }
    }
  });
  function isBiggerThanHalfOrder(number) {
    const HALF = CURVE_ORDER >> _1n5;
    return number > HALF;
  }
  function normalizeS(s3) {
    return isBiggerThanHalfOrder(s3) ? modN2(-s3) : s3;
  }
  const slcNum = (b5, from3, to5) => bytesToNumberBE(b5.slice(from3, to5));
  class Signature {
    constructor(r3, s3, recovery) {
      aInRange("r", r3, _1n5, CURVE_ORDER);
      aInRange("s", s3, _1n5, CURVE_ORDER);
      this.r = r3;
      this.s = s3;
      if (recovery != null)
        this.recovery = recovery;
      Object.freeze(this);
    }
    // pair (bytes of r, bytes of s)
    static fromCompact(hex) {
      const l8 = nByteLength;
      hex = ensureBytes("compactSignature", hex, l8 * 2);
      return new Signature(slcNum(hex, 0, l8), slcNum(hex, l8, 2 * l8));
    }
    // DER encoded ECDSA signature
    // https://bitcoin.stackexchange.com/questions/57644/what-are-the-parts-of-a-bitcoin-transaction-input-script
    static fromDER(hex) {
      const { r: r3, s: s3 } = DER.toSig(ensureBytes("DER", hex));
      return new Signature(r3, s3);
    }
    /**
     * @todo remove
     * @deprecated
     */
    assertValidity() {
    }
    addRecoveryBit(recovery) {
      return new Signature(this.r, this.s, recovery);
    }
    recoverPublicKey(msgHash) {
      const { r: r3, s: s3, recovery: rec } = this;
      const h6 = bits2int_modN(ensureBytes("msgHash", msgHash));
      if (rec == null || ![0, 1, 2, 3].includes(rec))
        throw new Error("recovery id invalid");
      const radj = rec === 2 || rec === 3 ? r3 + CURVE.n : r3;
      if (radj >= Fp.ORDER)
        throw new Error("recovery id 2 or 3 invalid");
      const prefix = (rec & 1) === 0 ? "02" : "03";
      const R4 = Point2.fromHex(prefix + numToSizedHex(radj, Fp.BYTES));
      const ir5 = invN(radj);
      const u1 = modN2(-h6 * ir5);
      const u22 = modN2(s3 * ir5);
      const Q6 = Point2.BASE.multiplyAndAddUnsafe(R4, u1, u22);
      if (!Q6)
        throw new Error("point at infinify");
      Q6.assertValidity();
      return Q6;
    }
    // Signatures should be low-s, to prevent malleability.
    hasHighS() {
      return isBiggerThanHalfOrder(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new Signature(this.r, modN2(-this.s), this.recovery) : this;
    }
    // DER-encoded
    toDERRawBytes() {
      return hexToBytes2(this.toDERHex());
    }
    toDERHex() {
      return DER.hexFromSig(this);
    }
    // padded bytes of r, then padded bytes of s
    toCompactRawBytes() {
      return hexToBytes2(this.toCompactHex());
    }
    toCompactHex() {
      const l8 = nByteLength;
      return numToSizedHex(this.r, l8) + numToSizedHex(this.s, l8);
    }
  }
  const utils = {
    isValidPrivateKey(privateKey) {
      try {
        normPrivateKeyToScalar(privateKey);
        return true;
      } catch (error) {
        return false;
      }
    },
    normPrivateKeyToScalar,
    /**
     * Produces cryptographically secure private key from random of size
     * (groupLen + ceil(groupLen / 2)) with modulo bias being negligible.
     */
    randomPrivateKey: () => {
      const length2 = getMinHashLength(CURVE.n);
      return mapHashToField(CURVE.randomBytes(length2), CURVE.n);
    },
    /**
     * Creates precompute table for an arbitrary EC point. Makes point "cached".
     * Allows to massively speed-up `point.multiply(scalar)`.
     * @returns cached point
     * @example
     * const fast = utils.precompute(8, ProjectivePoint.fromHex(someonesPubKey));
     * fast.multiply(privKey); // much faster ECDH now
     */
    precompute(windowSize = 8, point = Point2.BASE) {
      point._setWindowSize(windowSize);
      point.multiply(BigInt(3));
      return point;
    }
  };
  function getPublicKey(privateKey, isCompressed = true) {
    return Point2.fromPrivateKey(privateKey).toRawBytes(isCompressed);
  }
  function isProbPub(item) {
    if (typeof item === "bigint")
      return false;
    if (item instanceof Point2)
      return true;
    const arr = ensureBytes("key", item);
    const len = arr.length;
    const fpl = Fp.BYTES;
    const compLen = fpl + 1;
    const uncompLen = 2 * fpl + 1;
    if (CURVE.allowedPrivateKeyLengths || nByteLength === compLen) {
      return void 0;
    } else {
      return len === compLen || len === uncompLen;
    }
  }
  function getSharedSecret(privateA, publicB, isCompressed = true) {
    if (isProbPub(privateA) === true)
      throw new Error("first arg must be private key");
    if (isProbPub(publicB) === false)
      throw new Error("second arg must be public key");
    const b5 = Point2.fromHex(publicB);
    return b5.multiply(normPrivateKeyToScalar(privateA)).toRawBytes(isCompressed);
  }
  const bits2int = CURVE.bits2int || function(bytes) {
    if (bytes.length > 8192)
      throw new Error("input is too large");
    const num2 = bytesToNumberBE(bytes);
    const delta = bytes.length * 8 - nBitLength;
    return delta > 0 ? num2 >> BigInt(delta) : num2;
  };
  const bits2int_modN = CURVE.bits2int_modN || function(bytes) {
    return modN2(bits2int(bytes));
  };
  const ORDER_MASK = bitMask(nBitLength);
  function int2octets(num2) {
    aInRange("num < 2^" + nBitLength, num2, _0n5, ORDER_MASK);
    return numberToBytesBE(num2, nByteLength);
  }
  function prepSig(msgHash, privateKey, opts = defaultSigOpts) {
    if (["recovered", "canonical"].some((k7) => k7 in opts))
      throw new Error("sign() legacy options not supported");
    const { hash, randomBytes: randomBytes2 } = CURVE;
    let { lowS, prehash, extraEntropy: ent } = opts;
    if (lowS == null)
      lowS = true;
    msgHash = ensureBytes("msgHash", msgHash);
    validateSigVerOpts(opts);
    if (prehash)
      msgHash = ensureBytes("prehashed msgHash", hash(msgHash));
    const h1int = bits2int_modN(msgHash);
    const d5 = normPrivateKeyToScalar(privateKey);
    const seedArgs = [int2octets(d5), int2octets(h1int)];
    if (ent != null && ent !== false) {
      const e2 = ent === true ? randomBytes2(Fp.BYTES) : ent;
      seedArgs.push(ensureBytes("extraEntropy", e2));
    }
    const seed = concatBytes2(...seedArgs);
    const m4 = h1int;
    function k2sig(kBytes) {
      const k7 = bits2int(kBytes);
      if (!isWithinCurveOrder(k7))
        return;
      const ik = invN(k7);
      const q2 = Point2.BASE.multiply(k7).toAffine();
      const r3 = modN2(q2.x);
      if (r3 === _0n5)
        return;
      const s3 = modN2(ik * modN2(m4 + r3 * d5));
      if (s3 === _0n5)
        return;
      let recovery = (q2.x === r3 ? 0 : 2) | Number(q2.y & _1n5);
      let normS = s3;
      if (lowS && isBiggerThanHalfOrder(s3)) {
        normS = normalizeS(s3);
        recovery ^= 1;
      }
      return new Signature(r3, normS, recovery);
    }
    return { seed, k2sig };
  }
  const defaultSigOpts = { lowS: CURVE.lowS, prehash: false };
  const defaultVerOpts = { lowS: CURVE.lowS, prehash: false };
  function sign(msgHash, privKey, opts = defaultSigOpts) {
    const { seed, k2sig } = prepSig(msgHash, privKey, opts);
    const C5 = CURVE;
    const drbg = createHmacDrbg(C5.hash.outputLen, C5.nByteLength, C5.hmac);
    return drbg(seed, k2sig);
  }
  Point2.BASE._setWindowSize(8);
  function verify(signature, msgHash, publicKey, opts = defaultVerOpts) {
    const sg = signature;
    msgHash = ensureBytes("msgHash", msgHash);
    publicKey = ensureBytes("publicKey", publicKey);
    const { lowS, prehash, format } = opts;
    validateSigVerOpts(opts);
    if ("strict" in opts)
      throw new Error("options.strict was renamed to lowS");
    if (format !== void 0 && format !== "compact" && format !== "der")
      throw new Error("format must be compact or der");
    const isHex2 = typeof sg === "string" || isBytes2(sg);
    const isObj = !isHex2 && !format && typeof sg === "object" && sg !== null && typeof sg.r === "bigint" && typeof sg.s === "bigint";
    if (!isHex2 && !isObj)
      throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    let _sig = void 0;
    let P6;
    try {
      if (isObj)
        _sig = new Signature(sg.r, sg.s);
      if (isHex2) {
        try {
          if (format !== "compact")
            _sig = Signature.fromDER(sg);
        } catch (derError) {
          if (!(derError instanceof DER.Err))
            throw derError;
        }
        if (!_sig && format !== "der")
          _sig = Signature.fromCompact(sg);
      }
      P6 = Point2.fromHex(publicKey);
    } catch (error) {
      return false;
    }
    if (!_sig)
      return false;
    if (lowS && _sig.hasHighS())
      return false;
    if (prehash)
      msgHash = CURVE.hash(msgHash);
    const { r: r3, s: s3 } = _sig;
    const h6 = bits2int_modN(msgHash);
    const is2 = invN(s3);
    const u1 = modN2(h6 * is2);
    const u22 = modN2(r3 * is2);
    const R4 = Point2.BASE.multiplyAndAddUnsafe(P6, u1, u22)?.toAffine();
    if (!R4)
      return false;
    const v6 = modN2(R4.x);
    return v6 === r3;
  }
  return {
    CURVE,
    getPublicKey,
    getSharedSecret,
    sign,
    verify,
    ProjectivePoint: Point2,
    Signature,
    utils
  };
}
function SWUFpSqrtRatio(Fp, Z3) {
  const q2 = Fp.ORDER;
  let l8 = _0n5;
  for (let o5 = q2 - _1n5; o5 % _2n3 === _0n5; o5 /= _2n3)
    l8 += _1n5;
  const c1 = l8;
  const _2n_pow_c1_1 = _2n3 << c1 - _1n5 - _1n5;
  const _2n_pow_c1 = _2n_pow_c1_1 * _2n3;
  const c22 = (q2 - _1n5) / _2n_pow_c1;
  const c32 = (c22 - _1n5) / _2n3;
  const c42 = _2n_pow_c1 - _1n5;
  const c52 = _2n_pow_c1_1;
  const c62 = Fp.pow(Z3, c22);
  const c7 = Fp.pow(Z3, (c22 + _1n5) / _2n3);
  let sqrtRatio = (u3, v6) => {
    let tv1 = c62;
    let tv2 = Fp.pow(v6, c42);
    let tv3 = Fp.sqr(tv2);
    tv3 = Fp.mul(tv3, v6);
    let tv5 = Fp.mul(u3, tv3);
    tv5 = Fp.pow(tv5, c32);
    tv5 = Fp.mul(tv5, tv2);
    tv2 = Fp.mul(tv5, v6);
    tv3 = Fp.mul(tv5, u3);
    let tv4 = Fp.mul(tv3, tv2);
    tv5 = Fp.pow(tv4, c52);
    let isQR = Fp.eql(tv5, Fp.ONE);
    tv2 = Fp.mul(tv3, c7);
    tv5 = Fp.mul(tv4, tv1);
    tv3 = Fp.cmov(tv2, tv3, isQR);
    tv4 = Fp.cmov(tv5, tv4, isQR);
    for (let i4 = c1; i4 > _1n5; i4--) {
      let tv52 = i4 - _2n3;
      tv52 = _2n3 << tv52 - _1n5;
      let tvv5 = Fp.pow(tv4, tv52);
      const e1 = Fp.eql(tvv5, Fp.ONE);
      tv2 = Fp.mul(tv3, tv1);
      tv1 = Fp.mul(tv1, tv1);
      tvv5 = Fp.mul(tv4, tv1);
      tv3 = Fp.cmov(tv2, tv3, e1);
      tv4 = Fp.cmov(tvv5, tv4, e1);
    }
    return { isValid: isQR, value: tv3 };
  };
  if (Fp.ORDER % _4n2 === _3n2) {
    const c12 = (Fp.ORDER - _3n2) / _4n2;
    const c23 = Fp.sqrt(Fp.neg(Z3));
    sqrtRatio = (u3, v6) => {
      let tv1 = Fp.sqr(v6);
      const tv2 = Fp.mul(u3, v6);
      tv1 = Fp.mul(tv1, tv2);
      let y1 = Fp.pow(tv1, c12);
      y1 = Fp.mul(y1, tv2);
      const y22 = Fp.mul(y1, c23);
      const tv3 = Fp.mul(Fp.sqr(y1), v6);
      const isQR = Fp.eql(tv3, u3);
      let y6 = Fp.cmov(y22, y1, isQR);
      return { isValid: isQR, value: y6 };
    };
  }
  return sqrtRatio;
}
function mapToCurveSimpleSWU(Fp, opts) {
  validateField(Fp);
  if (!Fp.isValid(opts.A) || !Fp.isValid(opts.B) || !Fp.isValid(opts.Z))
    throw new Error("mapToCurveSimpleSWU: invalid opts");
  const sqrtRatio = SWUFpSqrtRatio(Fp, opts.Z);
  if (!Fp.isOdd)
    throw new Error("Fp.isOdd is not implemented!");
  return (u3) => {
    let tv1, tv2, tv3, tv4, tv5, tv6, x7, y6;
    tv1 = Fp.sqr(u3);
    tv1 = Fp.mul(tv1, opts.Z);
    tv2 = Fp.sqr(tv1);
    tv2 = Fp.add(tv2, tv1);
    tv3 = Fp.add(tv2, Fp.ONE);
    tv3 = Fp.mul(tv3, opts.B);
    tv4 = Fp.cmov(opts.Z, Fp.neg(tv2), !Fp.eql(tv2, Fp.ZERO));
    tv4 = Fp.mul(tv4, opts.A);
    tv2 = Fp.sqr(tv3);
    tv6 = Fp.sqr(tv4);
    tv5 = Fp.mul(tv6, opts.A);
    tv2 = Fp.add(tv2, tv5);
    tv2 = Fp.mul(tv2, tv3);
    tv6 = Fp.mul(tv6, tv4);
    tv5 = Fp.mul(tv6, opts.B);
    tv2 = Fp.add(tv2, tv5);
    x7 = Fp.mul(tv1, tv3);
    const { isValid, value } = sqrtRatio(tv2, tv6);
    y6 = Fp.mul(tv1, u3);
    y6 = Fp.mul(y6, value);
    x7 = Fp.cmov(x7, tv3, isValid);
    y6 = Fp.cmov(y6, value, isValid);
    const e1 = Fp.isOdd(u3) === Fp.isOdd(y6);
    y6 = Fp.cmov(Fp.neg(y6), y6, e1);
    const tv4_inv = FpInvertBatch(Fp, [tv4], true)[0];
    x7 = Fp.mul(x7, tv4_inv);
    return { x: x7, y: y6 };
  };
}
var DERErr, DER, _0n5, _1n5, _2n3, _3n2, _4n2;
var init_weierstrass = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/node_modules/@noble/curves/esm/abstract/weierstrass.js"() {
    init_curve();
    init_modular();
    init_utils2();
    DERErr = class extends Error {
      constructor(m4 = "") {
        super(m4);
      }
    };
    DER = {
      // asn.1 DER encoding utils
      Err: DERErr,
      // Basic building block is TLV (Tag-Length-Value)
      _tlv: {
        encode: (tag, data) => {
          const { Err: E6 } = DER;
          if (tag < 0 || tag > 256)
            throw new E6("tlv.encode: wrong tag");
          if (data.length & 1)
            throw new E6("tlv.encode: unpadded data");
          const dataLen = data.length / 2;
          const len = numberToHexUnpadded(dataLen);
          if (len.length / 2 & 128)
            throw new E6("tlv.encode: long form length too big");
          const lenLen = dataLen > 127 ? numberToHexUnpadded(len.length / 2 | 128) : "";
          const t = numberToHexUnpadded(tag);
          return t + lenLen + len + data;
        },
        // v - value, l - left bytes (unparsed)
        decode(tag, data) {
          const { Err: E6 } = DER;
          let pos = 0;
          if (tag < 0 || tag > 256)
            throw new E6("tlv.encode: wrong tag");
          if (data.length < 2 || data[pos++] !== tag)
            throw new E6("tlv.decode: wrong tlv");
          const first = data[pos++];
          const isLong = !!(first & 128);
          let length2 = 0;
          if (!isLong)
            length2 = first;
          else {
            const lenLen = first & 127;
            if (!lenLen)
              throw new E6("tlv.decode(long): indefinite length not supported");
            if (lenLen > 4)
              throw new E6("tlv.decode(long): byte length is too big");
            const lengthBytes = data.subarray(pos, pos + lenLen);
            if (lengthBytes.length !== lenLen)
              throw new E6("tlv.decode: length bytes not complete");
            if (lengthBytes[0] === 0)
              throw new E6("tlv.decode(long): zero leftmost byte");
            for (const b5 of lengthBytes)
              length2 = length2 << 8 | b5;
            pos += lenLen;
            if (length2 < 128)
              throw new E6("tlv.decode(long): not minimal encoding");
          }
          const v6 = data.subarray(pos, pos + length2);
          if (v6.length !== length2)
            throw new E6("tlv.decode: wrong value length");
          return { v: v6, l: data.subarray(pos + length2) };
        }
      },
      // https://crypto.stackexchange.com/a/57734 Leftmost bit of first byte is 'negative' flag,
      // since we always use positive integers here. It must always be empty:
      // - add zero byte if exists
      // - if next byte doesn't have a flag, leading zero is not allowed (minimal encoding)
      _int: {
        encode(num2) {
          const { Err: E6 } = DER;
          if (num2 < _0n5)
            throw new E6("integer: negative integers are not allowed");
          let hex = numberToHexUnpadded(num2);
          if (Number.parseInt(hex[0], 16) & 8)
            hex = "00" + hex;
          if (hex.length & 1)
            throw new E6("unexpected DER parsing assertion: unpadded hex");
          return hex;
        },
        decode(data) {
          const { Err: E6 } = DER;
          if (data[0] & 128)
            throw new E6("invalid signature integer: negative");
          if (data[0] === 0 && !(data[1] & 128))
            throw new E6("invalid signature integer: unnecessary leading zero");
          return bytesToNumberBE(data);
        }
      },
      toSig(hex) {
        const { Err: E6, _int: int, _tlv: tlv } = DER;
        const data = ensureBytes("signature", hex);
        const { v: seqBytes, l: seqLeftBytes } = tlv.decode(48, data);
        if (seqLeftBytes.length)
          throw new E6("invalid signature: left bytes after parsing");
        const { v: rBytes, l: rLeftBytes } = tlv.decode(2, seqBytes);
        const { v: sBytes, l: sLeftBytes } = tlv.decode(2, rLeftBytes);
        if (sLeftBytes.length)
          throw new E6("invalid signature: left bytes after parsing");
        return { r: int.decode(rBytes), s: int.decode(sBytes) };
      },
      hexFromSig(sig) {
        const { _tlv: tlv, _int: int } = DER;
        const rs2 = tlv.encode(2, int.encode(sig.r));
        const ss2 = tlv.encode(2, int.encode(sig.s));
        const seq = rs2 + ss2;
        return tlv.encode(48, seq);
      }
    };
    _0n5 = BigInt(0);
    _1n5 = BigInt(1);
    _2n3 = BigInt(2);
    _3n2 = BigInt(3);
    _4n2 = BigInt(4);
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/node_modules/@noble/curves/esm/_shortw_utils.js
function getHash(hash) {
  return {
    hash,
    hmac: (key, ...msgs) => hmac(hash, key, concatBytes(...msgs)),
    randomBytes
  };
}
function createCurve(curveDef, defHash) {
  const create2 = (hash) => weierstrass({ ...curveDef, ...getHash(hash) });
  return { ...create2(defHash), create: create2 };
}
var init_shortw_utils = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/node_modules/@noble/curves/esm/_shortw_utils.js"() {
    init_hmac();
    init_utils();
    init_weierstrass();
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/node_modules/@noble/curves/esm/abstract/hash-to-curve.js
function i2osp(value, length2) {
  anum(value);
  anum(length2);
  if (value < 0 || value >= 1 << 8 * length2)
    throw new Error("invalid I2OSP input: " + value);
  const res = Array.from({ length: length2 }).fill(0);
  for (let i4 = length2 - 1; i4 >= 0; i4--) {
    res[i4] = value & 255;
    value >>>= 8;
  }
  return new Uint8Array(res);
}
function strxor(a3, b5) {
  const arr = new Uint8Array(a3.length);
  for (let i4 = 0; i4 < a3.length; i4++) {
    arr[i4] = a3[i4] ^ b5[i4];
  }
  return arr;
}
function anum(item) {
  if (!Number.isSafeInteger(item))
    throw new Error("number expected");
}
function expand_message_xmd(msg, DST, lenInBytes, H4) {
  abytes2(msg);
  abytes2(DST);
  anum(lenInBytes);
  if (DST.length > 255)
    DST = H4(concatBytes2(utf8ToBytes2("H2C-OVERSIZE-DST-"), DST));
  const { outputLen: b_in_bytes, blockLen: r_in_bytes } = H4;
  const ell = Math.ceil(lenInBytes / b_in_bytes);
  if (lenInBytes > 65535 || ell > 255)
    throw new Error("expand_message_xmd: invalid lenInBytes");
  const DST_prime = concatBytes2(DST, i2osp(DST.length, 1));
  const Z_pad = i2osp(0, r_in_bytes);
  const l_i_b_str = i2osp(lenInBytes, 2);
  const b5 = new Array(ell);
  const b_0 = H4(concatBytes2(Z_pad, msg, l_i_b_str, i2osp(0, 1), DST_prime));
  b5[0] = H4(concatBytes2(b_0, i2osp(1, 1), DST_prime));
  for (let i4 = 1; i4 <= ell; i4++) {
    const args = [strxor(b_0, b5[i4 - 1]), i2osp(i4 + 1, 1), DST_prime];
    b5[i4] = H4(concatBytes2(...args));
  }
  const pseudo_random_bytes = concatBytes2(...b5);
  return pseudo_random_bytes.slice(0, lenInBytes);
}
function expand_message_xof(msg, DST, lenInBytes, k7, H4) {
  abytes2(msg);
  abytes2(DST);
  anum(lenInBytes);
  if (DST.length > 255) {
    const dkLen = Math.ceil(2 * k7 / 8);
    DST = H4.create({ dkLen }).update(utf8ToBytes2("H2C-OVERSIZE-DST-")).update(DST).digest();
  }
  if (lenInBytes > 65535 || DST.length > 255)
    throw new Error("expand_message_xof: invalid lenInBytes");
  return H4.create({ dkLen: lenInBytes }).update(msg).update(i2osp(lenInBytes, 2)).update(DST).update(i2osp(DST.length, 1)).digest();
}
function hash_to_field(msg, count, options) {
  validateObject(options, {
    DST: "stringOrUint8Array",
    p: "bigint",
    m: "isSafeInteger",
    k: "isSafeInteger",
    hash: "hash"
  });
  const { p: p5, k: k7, m: m4, hash, expand, DST: _DST } = options;
  abytes2(msg);
  anum(count);
  const DST = typeof _DST === "string" ? utf8ToBytes2(_DST) : _DST;
  const log2p = p5.toString(2).length;
  const L5 = Math.ceil((log2p + k7) / 8);
  const len_in_bytes = count * m4 * L5;
  let prb;
  if (expand === "xmd") {
    prb = expand_message_xmd(msg, DST, len_in_bytes, hash);
  } else if (expand === "xof") {
    prb = expand_message_xof(msg, DST, len_in_bytes, k7, hash);
  } else if (expand === "_internal_pass") {
    prb = msg;
  } else {
    throw new Error('expand must be "xmd" or "xof"');
  }
  const u3 = new Array(count);
  for (let i4 = 0; i4 < count; i4++) {
    const e2 = new Array(m4);
    for (let j6 = 0; j6 < m4; j6++) {
      const elm_offset = L5 * (j6 + i4 * m4);
      const tv = prb.subarray(elm_offset, elm_offset + L5);
      e2[j6] = mod(os2ip(tv), p5);
    }
    u3[i4] = e2;
  }
  return u3;
}
function isogenyMap(field, map) {
  const coeff = map.map((i4) => Array.from(i4).reverse());
  return (x7, y6) => {
    const [xn5, xd, yn5, yd] = coeff.map((val) => val.reduce((acc, i4) => field.add(field.mul(acc, x7), i4)));
    const [xd_inv, yd_inv] = FpInvertBatch(field, [xd, yd], true);
    x7 = field.mul(xn5, xd_inv);
    y6 = field.mul(y6, field.mul(yn5, yd_inv));
    return { x: x7, y: y6 };
  };
}
function createHasher2(Point2, mapToCurve, defaults) {
  if (typeof mapToCurve !== "function")
    throw new Error("mapToCurve() must be defined");
  function map(num2) {
    return Point2.fromAffine(mapToCurve(num2));
  }
  function clear2(initial) {
    const P6 = initial.clearCofactor();
    if (P6.equals(Point2.ZERO))
      return Point2.ZERO;
    P6.assertValidity();
    return P6;
  }
  return {
    defaults,
    // Encodes byte string to elliptic curve.
    // hash_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    hashToCurve(msg, options) {
      const u3 = hash_to_field(msg, 2, { ...defaults, DST: defaults.DST, ...options });
      const u0 = map(u3[0]);
      const u1 = map(u3[1]);
      return clear2(u0.add(u1));
    },
    // Encodes byte string to elliptic curve.
    // encode_to_curve from https://www.rfc-editor.org/rfc/rfc9380#section-3
    encodeToCurve(msg, options) {
      const u3 = hash_to_field(msg, 1, { ...defaults, DST: defaults.encodeDST, ...options });
      return clear2(map(u3[0]));
    },
    // Same as encodeToCurve, but without hash
    mapToCurve(scalars) {
      if (!Array.isArray(scalars))
        throw new Error("expected array of bigints");
      for (const i4 of scalars)
        if (typeof i4 !== "bigint")
          throw new Error("expected array of bigints");
      return clear2(map(scalars));
    }
  };
}
var os2ip;
var init_hash_to_curve = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/node_modules/@noble/curves/esm/abstract/hash-to-curve.js"() {
    init_modular();
    init_utils2();
    os2ip = bytesToNumberBE;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/node_modules/@noble/curves/esm/secp256k1.js
var secp256k1_exports = {};
__export(secp256k1_exports, {
  encodeToCurve: () => encodeToCurve,
  hashToCurve: () => hashToCurve,
  schnorr: () => schnorr,
  secp256k1: () => secp256k1,
  secp256k1_hasher: () => secp256k1_hasher
});
function sqrtMod(y6) {
  const P6 = secp256k1P;
  const _3n3 = BigInt(3), _6n = BigInt(6), _11n = BigInt(11), _22n = BigInt(22);
  const _23n = BigInt(23), _44n = BigInt(44), _88n = BigInt(88);
  const b22 = y6 * y6 * y6 % P6;
  const b32 = b22 * b22 * y6 % P6;
  const b6 = pow2(b32, _3n3, P6) * b32 % P6;
  const b9 = pow2(b6, _3n3, P6) * b32 % P6;
  const b11 = pow2(b9, _2n4, P6) * b22 % P6;
  const b222 = pow2(b11, _11n, P6) * b11 % P6;
  const b44 = pow2(b222, _22n, P6) * b222 % P6;
  const b88 = pow2(b44, _44n, P6) * b44 % P6;
  const b176 = pow2(b88, _88n, P6) * b88 % P6;
  const b220 = pow2(b176, _44n, P6) * b44 % P6;
  const b223 = pow2(b220, _3n3, P6) * b32 % P6;
  const t1 = pow2(b223, _23n, P6) * b222 % P6;
  const t2 = pow2(t1, _6n, P6) * b22 % P6;
  const root = pow2(t2, _2n4, P6);
  if (!Fpk1.eql(Fpk1.sqr(root), y6))
    throw new Error("Cannot find square root");
  return root;
}
function taggedHash(tag, ...messages) {
  let tagP = TAGGED_HASH_PREFIXES[tag];
  if (tagP === void 0) {
    const tagH = sha256(Uint8Array.from(tag, (c7) => c7.charCodeAt(0)));
    tagP = concatBytes2(tagH, tagH);
    TAGGED_HASH_PREFIXES[tag] = tagP;
  }
  return sha256(concatBytes2(tagP, ...messages));
}
function schnorrGetExtPubKey(priv) {
  let d_ = secp256k1.utils.normPrivateKeyToScalar(priv);
  let p5 = Point.fromPrivateKey(d_);
  const scalar = p5.hasEvenY() ? d_ : modN(-d_);
  return { scalar, bytes: pointToBytes(p5) };
}
function lift_x(x7) {
  aInRange("x", x7, _1n6, secp256k1P);
  const xx = modP(x7 * x7);
  const c7 = modP(xx * x7 + BigInt(7));
  let y6 = sqrtMod(c7);
  if (y6 % _2n4 !== _0n6)
    y6 = modP(-y6);
  const p5 = new Point(x7, y6, _1n6);
  p5.assertValidity();
  return p5;
}
function challenge(...args) {
  return modN(num(taggedHash("BIP0340/challenge", ...args)));
}
function schnorrGetPublicKey(privateKey) {
  return schnorrGetExtPubKey(privateKey).bytes;
}
function schnorrSign(message, privateKey, auxRand = randomBytes(32)) {
  const m4 = ensureBytes("message", message);
  const { bytes: px, scalar: d5 } = schnorrGetExtPubKey(privateKey);
  const a3 = ensureBytes("auxRand", auxRand, 32);
  const t = numTo32b(d5 ^ num(taggedHash("BIP0340/aux", a3)));
  const rand = taggedHash("BIP0340/nonce", t, px, m4);
  const k_ = modN(num(rand));
  if (k_ === _0n6)
    throw new Error("sign failed: k is zero");
  const { bytes: rx, scalar: k7 } = schnorrGetExtPubKey(k_);
  const e2 = challenge(rx, px, m4);
  const sig = new Uint8Array(64);
  sig.set(rx, 0);
  sig.set(numTo32b(modN(k7 + e2 * d5)), 32);
  if (!schnorrVerify(sig, m4, px))
    throw new Error("sign: Invalid signature produced");
  return sig;
}
function schnorrVerify(signature, message, publicKey) {
  const sig = ensureBytes("signature", signature, 64);
  const m4 = ensureBytes("message", message);
  const pub = ensureBytes("publicKey", publicKey, 32);
  try {
    const P6 = lift_x(num(pub));
    const r3 = num(sig.subarray(0, 32));
    if (!inRange(r3, _1n6, secp256k1P))
      return false;
    const s3 = num(sig.subarray(32, 64));
    if (!inRange(s3, _1n6, secp256k1N))
      return false;
    const e2 = challenge(numTo32b(r3), pointToBytes(P6), m4);
    const R4 = GmulAdd(P6, s3, modN(-e2));
    if (!R4 || !R4.hasEvenY() || R4.toAffine().x !== r3)
      return false;
    return true;
  } catch (error) {
    return false;
  }
}
var secp256k1P, secp256k1N, _0n6, _1n6, _2n4, divNearest, Fpk1, secp256k1, TAGGED_HASH_PREFIXES, pointToBytes, numTo32b, modP, modN, Point, GmulAdd, num, schnorr, isoMap, mapSWU, secp256k1_hasher, hashToCurve, encodeToCurve;
var init_secp256k1 = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/node_modules/@noble/curves/esm/secp256k1.js"() {
    init_sha2();
    init_utils();
    init_shortw_utils();
    init_hash_to_curve();
    init_modular();
    init_utils2();
    init_weierstrass();
    secp256k1P = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f");
    secp256k1N = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141");
    _0n6 = BigInt(0);
    _1n6 = BigInt(1);
    _2n4 = BigInt(2);
    divNearest = (a3, b5) => (a3 + b5 / _2n4) / b5;
    Fpk1 = Field(secp256k1P, void 0, void 0, { sqrt: sqrtMod });
    secp256k1 = createCurve({
      a: _0n6,
      b: BigInt(7),
      Fp: Fpk1,
      n: secp256k1N,
      Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
      Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
      h: BigInt(1),
      lowS: true,
      // Allow only low-S signatures by default in sign() and verify()
      endo: {
        // Endomorphism, see above
        beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
        splitScalar: (k7) => {
          const n5 = secp256k1N;
          const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
          const b1 = -_1n6 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
          const a22 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
          const b22 = a1;
          const POW_2_128 = BigInt("0x100000000000000000000000000000000");
          const c1 = divNearest(b22 * k7, n5);
          const c22 = divNearest(-b1 * k7, n5);
          let k1 = mod(k7 - c1 * a1 - c22 * a22, n5);
          let k22 = mod(-c1 * b1 - c22 * b22, n5);
          const k1neg = k1 > POW_2_128;
          const k2neg = k22 > POW_2_128;
          if (k1neg)
            k1 = n5 - k1;
          if (k2neg)
            k22 = n5 - k22;
          if (k1 > POW_2_128 || k22 > POW_2_128) {
            throw new Error("splitScalar: Endomorphism failed, k=" + k7);
          }
          return { k1neg, k1, k2neg, k2: k22 };
        }
      }
    }, sha256);
    TAGGED_HASH_PREFIXES = {};
    pointToBytes = (point) => point.toRawBytes(true).slice(1);
    numTo32b = (n5) => numberToBytesBE(n5, 32);
    modP = (x7) => mod(x7, secp256k1P);
    modN = (x7) => mod(x7, secp256k1N);
    Point = /* @__PURE__ */ (() => secp256k1.ProjectivePoint)();
    GmulAdd = (Q6, a3, b5) => Point.BASE.multiplyAndAddUnsafe(Q6, a3, b5);
    num = bytesToNumberBE;
    schnorr = /* @__PURE__ */ (() => ({
      getPublicKey: schnorrGetPublicKey,
      sign: schnorrSign,
      verify: schnorrVerify,
      utils: {
        randomPrivateKey: secp256k1.utils.randomPrivateKey,
        lift_x,
        pointToBytes,
        numberToBytesBE,
        bytesToNumberBE,
        taggedHash,
        mod
      }
    }))();
    isoMap = /* @__PURE__ */ (() => isogenyMap(Fpk1, [
      // xNum
      [
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7",
        "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581",
        "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262",
        "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"
      ],
      // xDen
      [
        "0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b",
        "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
        // LAST 1
      ],
      // yNum
      [
        "0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c",
        "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3",
        "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931",
        "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"
      ],
      // yDen
      [
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b",
        "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573",
        "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f",
        "0x0000000000000000000000000000000000000000000000000000000000000001"
        // LAST 1
      ]
    ].map((i4) => i4.map((j6) => BigInt(j6)))))();
    mapSWU = /* @__PURE__ */ (() => mapToCurveSimpleSWU(Fpk1, {
      A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"),
      B: BigInt("1771"),
      Z: Fpk1.create(BigInt("-11"))
    }))();
    secp256k1_hasher = /* @__PURE__ */ (() => createHasher2(secp256k1.ProjectivePoint, (scalars) => {
      const { x: x7, y: y6 } = mapSWU(Fpk1.create(scalars[0]));
      return isoMap(x7, y6);
    }, {
      DST: "secp256k1_XMD:SHA-256_SSWU_RO_",
      encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_",
      p: Fpk1.ORDER,
      m: 1,
      k: 128,
      expand: "xmd",
      hash: sha256
    }))();
    hashToCurve = /* @__PURE__ */ (() => secp256k1_hasher.hashToCurve)();
    encodeToCurve = /* @__PURE__ */ (() => secp256k1_hasher.encodeToCurve)();
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/blakejs/util.js
var require_util = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/blakejs/util.js"(exports, module) {
    var ERROR_MSG_INPUT = "Input must be an string, Buffer or Uint8Array";
    function normalizeInput(input) {
      let ret;
      if (input instanceof Uint8Array) {
        ret = input;
      } else if (typeof input === "string") {
        const encoder3 = new TextEncoder();
        ret = encoder3.encode(input);
      } else {
        throw new Error(ERROR_MSG_INPUT);
      }
      return ret;
    }
    function toHex2(bytes) {
      return Array.prototype.map.call(bytes, function(n5) {
        return (n5 < 16 ? "0" : "") + n5.toString(16);
      }).join("");
    }
    function uint32ToHex(val) {
      return (4294967296 + val).toString(16).substring(1);
    }
    function debugPrint(label, arr, size2) {
      let msg = "\n" + label + " = ";
      for (let i4 = 0; i4 < arr.length; i4 += 2) {
        if (size2 === 32) {
          msg += uint32ToHex(arr[i4]).toUpperCase();
          msg += " ";
          msg += uint32ToHex(arr[i4 + 1]).toUpperCase();
        } else if (size2 === 64) {
          msg += uint32ToHex(arr[i4 + 1]).toUpperCase();
          msg += uint32ToHex(arr[i4]).toUpperCase();
        } else throw new Error("Invalid size " + size2);
        if (i4 % 6 === 4) {
          msg += "\n" + new Array(label.length + 4).join(" ");
        } else if (i4 < arr.length - 2) {
          msg += " ";
        }
      }
      console.log(msg);
    }
    function testSpeed(hashFn, N13, M6) {
      let startMs = (/* @__PURE__ */ new Date()).getTime();
      const input = new Uint8Array(N13);
      for (let i4 = 0; i4 < N13; i4++) {
        input[i4] = i4 % 256;
      }
      const genMs = (/* @__PURE__ */ new Date()).getTime();
      console.log("Generated random input in " + (genMs - startMs) + "ms");
      startMs = genMs;
      for (let i4 = 0; i4 < M6; i4++) {
        const hashHex = hashFn(input);
        const hashMs = (/* @__PURE__ */ new Date()).getTime();
        const ms2 = hashMs - startMs;
        startMs = hashMs;
        console.log("Hashed in " + ms2 + "ms: " + hashHex.substring(0, 20) + "...");
        console.log(
          Math.round(N13 / (1 << 20) / (ms2 / 1e3) * 100) / 100 + " MB PER SECOND"
        );
      }
    }
    module.exports = {
      normalizeInput,
      toHex: toHex2,
      debugPrint,
      testSpeed
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/blakejs/blake2b.js
var require_blake2b = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/blakejs/blake2b.js"(exports, module) {
    var util = require_util();
    function ADD64AA(v7, a3, b5) {
      const o0 = v7[a3] + v7[b5];
      let o1 = v7[a3 + 1] + v7[b5 + 1];
      if (o0 >= 4294967296) {
        o1++;
      }
      v7[a3] = o0;
      v7[a3 + 1] = o1;
    }
    function ADD64AC(v7, a3, b0, b1) {
      let o0 = v7[a3] + b0;
      if (b0 < 0) {
        o0 += 4294967296;
      }
      let o1 = v7[a3 + 1] + b1;
      if (o0 >= 4294967296) {
        o1++;
      }
      v7[a3] = o0;
      v7[a3 + 1] = o1;
    }
    function B2B_GET32(arr, i4) {
      return arr[i4] ^ arr[i4 + 1] << 8 ^ arr[i4 + 2] << 16 ^ arr[i4 + 3] << 24;
    }
    function B2B_G(a3, b5, c7, d5, ix, iy) {
      const x0 = m4[ix];
      const x1 = m4[ix + 1];
      const y0 = m4[iy];
      const y1 = m4[iy + 1];
      ADD64AA(v6, a3, b5);
      ADD64AC(v6, a3, x0, x1);
      let xor0 = v6[d5] ^ v6[a3];
      let xor1 = v6[d5 + 1] ^ v6[a3 + 1];
      v6[d5] = xor1;
      v6[d5 + 1] = xor0;
      ADD64AA(v6, c7, d5);
      xor0 = v6[b5] ^ v6[c7];
      xor1 = v6[b5 + 1] ^ v6[c7 + 1];
      v6[b5] = xor0 >>> 24 ^ xor1 << 8;
      v6[b5 + 1] = xor1 >>> 24 ^ xor0 << 8;
      ADD64AA(v6, a3, b5);
      ADD64AC(v6, a3, y0, y1);
      xor0 = v6[d5] ^ v6[a3];
      xor1 = v6[d5 + 1] ^ v6[a3 + 1];
      v6[d5] = xor0 >>> 16 ^ xor1 << 16;
      v6[d5 + 1] = xor1 >>> 16 ^ xor0 << 16;
      ADD64AA(v6, c7, d5);
      xor0 = v6[b5] ^ v6[c7];
      xor1 = v6[b5 + 1] ^ v6[c7 + 1];
      v6[b5] = xor1 >>> 31 ^ xor0 << 1;
      v6[b5 + 1] = xor0 >>> 31 ^ xor1 << 1;
    }
    var BLAKE2B_IV32 = new Uint32Array([
      4089235720,
      1779033703,
      2227873595,
      3144134277,
      4271175723,
      1013904242,
      1595750129,
      2773480762,
      2917565137,
      1359893119,
      725511199,
      2600822924,
      4215389547,
      528734635,
      327033209,
      1541459225
    ]);
    var SIGMA8 = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      14,
      10,
      4,
      8,
      9,
      15,
      13,
      6,
      1,
      12,
      0,
      2,
      11,
      7,
      5,
      3,
      11,
      8,
      12,
      0,
      5,
      2,
      15,
      13,
      10,
      14,
      3,
      6,
      7,
      1,
      9,
      4,
      7,
      9,
      3,
      1,
      13,
      12,
      11,
      14,
      2,
      6,
      5,
      10,
      4,
      0,
      15,
      8,
      9,
      0,
      5,
      7,
      2,
      4,
      10,
      15,
      14,
      1,
      11,
      12,
      6,
      8,
      3,
      13,
      2,
      12,
      6,
      10,
      0,
      11,
      8,
      3,
      4,
      13,
      7,
      5,
      15,
      14,
      1,
      9,
      12,
      5,
      1,
      15,
      14,
      13,
      4,
      10,
      0,
      7,
      6,
      3,
      9,
      2,
      8,
      11,
      13,
      11,
      7,
      14,
      12,
      1,
      3,
      9,
      5,
      0,
      15,
      4,
      8,
      6,
      2,
      10,
      6,
      15,
      14,
      9,
      11,
      3,
      0,
      8,
      12,
      2,
      13,
      7,
      1,
      4,
      10,
      5,
      10,
      2,
      8,
      4,
      7,
      6,
      1,
      5,
      15,
      11,
      9,
      14,
      3,
      12,
      13,
      0,
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      14,
      10,
      4,
      8,
      9,
      15,
      13,
      6,
      1,
      12,
      0,
      2,
      11,
      7,
      5,
      3
    ];
    var SIGMA82 = new Uint8Array(
      SIGMA8.map(function(x7) {
        return x7 * 2;
      })
    );
    var v6 = new Uint32Array(32);
    var m4 = new Uint32Array(32);
    function blake2bCompress(ctx, last) {
      let i4 = 0;
      for (i4 = 0; i4 < 16; i4++) {
        v6[i4] = ctx.h[i4];
        v6[i4 + 16] = BLAKE2B_IV32[i4];
      }
      v6[24] = v6[24] ^ ctx.t;
      v6[25] = v6[25] ^ ctx.t / 4294967296;
      if (last) {
        v6[28] = ~v6[28];
        v6[29] = ~v6[29];
      }
      for (i4 = 0; i4 < 32; i4++) {
        m4[i4] = B2B_GET32(ctx.b, 4 * i4);
      }
      for (i4 = 0; i4 < 12; i4++) {
        B2B_G(0, 8, 16, 24, SIGMA82[i4 * 16 + 0], SIGMA82[i4 * 16 + 1]);
        B2B_G(2, 10, 18, 26, SIGMA82[i4 * 16 + 2], SIGMA82[i4 * 16 + 3]);
        B2B_G(4, 12, 20, 28, SIGMA82[i4 * 16 + 4], SIGMA82[i4 * 16 + 5]);
        B2B_G(6, 14, 22, 30, SIGMA82[i4 * 16 + 6], SIGMA82[i4 * 16 + 7]);
        B2B_G(0, 10, 20, 30, SIGMA82[i4 * 16 + 8], SIGMA82[i4 * 16 + 9]);
        B2B_G(2, 12, 22, 24, SIGMA82[i4 * 16 + 10], SIGMA82[i4 * 16 + 11]);
        B2B_G(4, 14, 16, 26, SIGMA82[i4 * 16 + 12], SIGMA82[i4 * 16 + 13]);
        B2B_G(6, 8, 18, 28, SIGMA82[i4 * 16 + 14], SIGMA82[i4 * 16 + 15]);
      }
      for (i4 = 0; i4 < 16; i4++) {
        ctx.h[i4] = ctx.h[i4] ^ v6[i4] ^ v6[i4 + 16];
      }
    }
    var parameterBlock = new Uint8Array([
      0,
      0,
      0,
      0,
      //  0: outlen, keylen, fanout, depth
      0,
      0,
      0,
      0,
      //  4: leaf length, sequential mode
      0,
      0,
      0,
      0,
      //  8: node offset
      0,
      0,
      0,
      0,
      // 12: node offset
      0,
      0,
      0,
      0,
      // 16: node depth, inner length, rfu
      0,
      0,
      0,
      0,
      // 20: rfu
      0,
      0,
      0,
      0,
      // 24: rfu
      0,
      0,
      0,
      0,
      // 28: rfu
      0,
      0,
      0,
      0,
      // 32: salt
      0,
      0,
      0,
      0,
      // 36: salt
      0,
      0,
      0,
      0,
      // 40: salt
      0,
      0,
      0,
      0,
      // 44: salt
      0,
      0,
      0,
      0,
      // 48: personal
      0,
      0,
      0,
      0,
      // 52: personal
      0,
      0,
      0,
      0,
      // 56: personal
      0,
      0,
      0,
      0
      // 60: personal
    ]);
    function blake2bInit(outlen, key, salt, personal) {
      if (outlen === 0 || outlen > 64) {
        throw new Error("Illegal output length, expected 0 < length <= 64");
      }
      if (key && key.length > 64) {
        throw new Error("Illegal key, expected Uint8Array with 0 < length <= 64");
      }
      if (salt && salt.length !== 16) {
        throw new Error("Illegal salt, expected Uint8Array with length is 16");
      }
      if (personal && personal.length !== 16) {
        throw new Error("Illegal personal, expected Uint8Array with length is 16");
      }
      const ctx = {
        b: new Uint8Array(128),
        h: new Uint32Array(16),
        t: 0,
        // input count
        c: 0,
        // pointer within buffer
        outlen
        // output length in bytes
      };
      parameterBlock.fill(0);
      parameterBlock[0] = outlen;
      if (key) parameterBlock[1] = key.length;
      parameterBlock[2] = 1;
      parameterBlock[3] = 1;
      if (salt) parameterBlock.set(salt, 32);
      if (personal) parameterBlock.set(personal, 48);
      for (let i4 = 0; i4 < 16; i4++) {
        ctx.h[i4] = BLAKE2B_IV32[i4] ^ B2B_GET32(parameterBlock, i4 * 4);
      }
      if (key) {
        blake2bUpdate(ctx, key);
        ctx.c = 128;
      }
      return ctx;
    }
    function blake2bUpdate(ctx, input) {
      for (let i4 = 0; i4 < input.length; i4++) {
        if (ctx.c === 128) {
          ctx.t += ctx.c;
          blake2bCompress(ctx, false);
          ctx.c = 0;
        }
        ctx.b[ctx.c++] = input[i4];
      }
    }
    function blake2bFinal(ctx) {
      ctx.t += ctx.c;
      while (ctx.c < 128) {
        ctx.b[ctx.c++] = 0;
      }
      blake2bCompress(ctx, true);
      const out = new Uint8Array(ctx.outlen);
      for (let i4 = 0; i4 < ctx.outlen; i4++) {
        out[i4] = ctx.h[i4 >> 2] >> 8 * (i4 & 3);
      }
      return out;
    }
    function blake2b(input, key, outlen, salt, personal) {
      outlen = outlen || 64;
      input = util.normalizeInput(input);
      if (salt) {
        salt = util.normalizeInput(salt);
      }
      if (personal) {
        personal = util.normalizeInput(personal);
      }
      const ctx = blake2bInit(outlen, key, salt, personal);
      blake2bUpdate(ctx, input);
      return blake2bFinal(ctx);
    }
    function blake2bHex(input, key, outlen, salt, personal) {
      const output = blake2b(input, key, outlen, salt, personal);
      return util.toHex(output);
    }
    module.exports = {
      blake2b,
      blake2bHex,
      blake2bInit,
      blake2bUpdate,
      blake2bFinal
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/blakejs/blake2s.js
var require_blake2s = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/blakejs/blake2s.js"(exports, module) {
    var util = require_util();
    function B2S_GET32(v7, i4) {
      return v7[i4] ^ v7[i4 + 1] << 8 ^ v7[i4 + 2] << 16 ^ v7[i4 + 3] << 24;
    }
    function B2S_G(a3, b5, c7, d5, x7, y6) {
      v6[a3] = v6[a3] + v6[b5] + x7;
      v6[d5] = ROTR32(v6[d5] ^ v6[a3], 16);
      v6[c7] = v6[c7] + v6[d5];
      v6[b5] = ROTR32(v6[b5] ^ v6[c7], 12);
      v6[a3] = v6[a3] + v6[b5] + y6;
      v6[d5] = ROTR32(v6[d5] ^ v6[a3], 8);
      v6[c7] = v6[c7] + v6[d5];
      v6[b5] = ROTR32(v6[b5] ^ v6[c7], 7);
    }
    function ROTR32(x7, y6) {
      return x7 >>> y6 ^ x7 << 32 - y6;
    }
    var BLAKE2S_IV = new Uint32Array([
      1779033703,
      3144134277,
      1013904242,
      2773480762,
      1359893119,
      2600822924,
      528734635,
      1541459225
    ]);
    var SIGMA = new Uint8Array([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      14,
      10,
      4,
      8,
      9,
      15,
      13,
      6,
      1,
      12,
      0,
      2,
      11,
      7,
      5,
      3,
      11,
      8,
      12,
      0,
      5,
      2,
      15,
      13,
      10,
      14,
      3,
      6,
      7,
      1,
      9,
      4,
      7,
      9,
      3,
      1,
      13,
      12,
      11,
      14,
      2,
      6,
      5,
      10,
      4,
      0,
      15,
      8,
      9,
      0,
      5,
      7,
      2,
      4,
      10,
      15,
      14,
      1,
      11,
      12,
      6,
      8,
      3,
      13,
      2,
      12,
      6,
      10,
      0,
      11,
      8,
      3,
      4,
      13,
      7,
      5,
      15,
      14,
      1,
      9,
      12,
      5,
      1,
      15,
      14,
      13,
      4,
      10,
      0,
      7,
      6,
      3,
      9,
      2,
      8,
      11,
      13,
      11,
      7,
      14,
      12,
      1,
      3,
      9,
      5,
      0,
      15,
      4,
      8,
      6,
      2,
      10,
      6,
      15,
      14,
      9,
      11,
      3,
      0,
      8,
      12,
      2,
      13,
      7,
      1,
      4,
      10,
      5,
      10,
      2,
      8,
      4,
      7,
      6,
      1,
      5,
      15,
      11,
      9,
      14,
      3,
      12,
      13,
      0
    ]);
    var v6 = new Uint32Array(16);
    var m4 = new Uint32Array(16);
    function blake2sCompress(ctx, last) {
      let i4 = 0;
      for (i4 = 0; i4 < 8; i4++) {
        v6[i4] = ctx.h[i4];
        v6[i4 + 8] = BLAKE2S_IV[i4];
      }
      v6[12] ^= ctx.t;
      v6[13] ^= ctx.t / 4294967296;
      if (last) {
        v6[14] = ~v6[14];
      }
      for (i4 = 0; i4 < 16; i4++) {
        m4[i4] = B2S_GET32(ctx.b, 4 * i4);
      }
      for (i4 = 0; i4 < 10; i4++) {
        B2S_G(0, 4, 8, 12, m4[SIGMA[i4 * 16 + 0]], m4[SIGMA[i4 * 16 + 1]]);
        B2S_G(1, 5, 9, 13, m4[SIGMA[i4 * 16 + 2]], m4[SIGMA[i4 * 16 + 3]]);
        B2S_G(2, 6, 10, 14, m4[SIGMA[i4 * 16 + 4]], m4[SIGMA[i4 * 16 + 5]]);
        B2S_G(3, 7, 11, 15, m4[SIGMA[i4 * 16 + 6]], m4[SIGMA[i4 * 16 + 7]]);
        B2S_G(0, 5, 10, 15, m4[SIGMA[i4 * 16 + 8]], m4[SIGMA[i4 * 16 + 9]]);
        B2S_G(1, 6, 11, 12, m4[SIGMA[i4 * 16 + 10]], m4[SIGMA[i4 * 16 + 11]]);
        B2S_G(2, 7, 8, 13, m4[SIGMA[i4 * 16 + 12]], m4[SIGMA[i4 * 16 + 13]]);
        B2S_G(3, 4, 9, 14, m4[SIGMA[i4 * 16 + 14]], m4[SIGMA[i4 * 16 + 15]]);
      }
      for (i4 = 0; i4 < 8; i4++) {
        ctx.h[i4] ^= v6[i4] ^ v6[i4 + 8];
      }
    }
    function blake2sInit(outlen, key) {
      if (!(outlen > 0 && outlen <= 32)) {
        throw new Error("Incorrect output length, should be in [1, 32]");
      }
      const keylen = key ? key.length : 0;
      if (key && !(keylen > 0 && keylen <= 32)) {
        throw new Error("Incorrect key length, should be in [1, 32]");
      }
      const ctx = {
        h: new Uint32Array(BLAKE2S_IV),
        // hash state
        b: new Uint8Array(64),
        // input block
        c: 0,
        // pointer within block
        t: 0,
        // input count
        outlen
        // output length in bytes
      };
      ctx.h[0] ^= 16842752 ^ keylen << 8 ^ outlen;
      if (keylen > 0) {
        blake2sUpdate(ctx, key);
        ctx.c = 64;
      }
      return ctx;
    }
    function blake2sUpdate(ctx, input) {
      for (let i4 = 0; i4 < input.length; i4++) {
        if (ctx.c === 64) {
          ctx.t += ctx.c;
          blake2sCompress(ctx, false);
          ctx.c = 0;
        }
        ctx.b[ctx.c++] = input[i4];
      }
    }
    function blake2sFinal(ctx) {
      ctx.t += ctx.c;
      while (ctx.c < 64) {
        ctx.b[ctx.c++] = 0;
      }
      blake2sCompress(ctx, true);
      const out = new Uint8Array(ctx.outlen);
      for (let i4 = 0; i4 < ctx.outlen; i4++) {
        out[i4] = ctx.h[i4 >> 2] >> 8 * (i4 & 3) & 255;
      }
      return out;
    }
    function blake2s(input, key, outlen) {
      outlen = outlen || 32;
      input = util.normalizeInput(input);
      const ctx = blake2sInit(outlen, key);
      blake2sUpdate(ctx, input);
      return blake2sFinal(ctx);
    }
    function blake2sHex(input, key, outlen) {
      const output = blake2s(input, key, outlen);
      return util.toHex(output);
    }
    module.exports = {
      blake2s,
      blake2sHex,
      blake2sInit,
      blake2sUpdate,
      blake2sFinal
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/blakejs/index.js
var require_blakejs = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/blakejs/index.js"(exports, module) {
    var b2b = require_blake2b();
    var b2s = require_blake2s();
    module.exports = {
      blake2b: b2b.blake2b,
      blake2bHex: b2b.blake2bHex,
      blake2bInit: b2b.blake2bInit,
      blake2bUpdate: b2b.blake2bUpdate,
      blake2bFinal: b2b.blake2bFinal,
      blake2s: b2s.blake2s,
      blake2sHex: b2s.blake2sHex,
      blake2sInit: b2s.blake2sInit,
      blake2sUpdate: b2s.blake2sUpdate,
      blake2sFinal: b2s.blake2sFinal
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-utils/node_modules/tslib/tslib.es6.js
var tslib_es6_exports3 = {};
__export(tslib_es6_exports3, {
  __assign: () => __assign3,
  __asyncDelegator: () => __asyncDelegator3,
  __asyncGenerator: () => __asyncGenerator3,
  __asyncValues: () => __asyncValues3,
  __await: () => __await3,
  __awaiter: () => __awaiter3,
  __classPrivateFieldGet: () => __classPrivateFieldGet3,
  __classPrivateFieldSet: () => __classPrivateFieldSet3,
  __createBinding: () => __createBinding3,
  __decorate: () => __decorate3,
  __exportStar: () => __exportStar3,
  __extends: () => __extends3,
  __generator: () => __generator3,
  __importDefault: () => __importDefault3,
  __importStar: () => __importStar3,
  __makeTemplateObject: () => __makeTemplateObject3,
  __metadata: () => __metadata3,
  __param: () => __param3,
  __read: () => __read3,
  __rest: () => __rest3,
  __spread: () => __spread3,
  __spreadArrays: () => __spreadArrays3,
  __values: () => __values3
});
function __extends3(d5, b5) {
  extendStatics3(d5, b5);
  function __() {
    this.constructor = d5;
  }
  d5.prototype = b5 === null ? Object.create(b5) : (__.prototype = b5.prototype, new __());
}
function __rest3(s3, e2) {
  var t = {};
  for (var p5 in s3) if (Object.prototype.hasOwnProperty.call(s3, p5) && e2.indexOf(p5) < 0)
    t[p5] = s3[p5];
  if (s3 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i4 = 0, p5 = Object.getOwnPropertySymbols(s3); i4 < p5.length; i4++) {
      if (e2.indexOf(p5[i4]) < 0 && Object.prototype.propertyIsEnumerable.call(s3, p5[i4]))
        t[p5[i4]] = s3[p5[i4]];
    }
  return t;
}
function __decorate3(decorators, target, key, desc) {
  var c7 = arguments.length, r3 = c7 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d5;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r3 = Reflect.decorate(decorators, target, key, desc);
  else for (var i4 = decorators.length - 1; i4 >= 0; i4--) if (d5 = decorators[i4]) r3 = (c7 < 3 ? d5(r3) : c7 > 3 ? d5(target, key, r3) : d5(target, key)) || r3;
  return c7 > 3 && r3 && Object.defineProperty(target, key, r3), r3;
}
function __param3(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __metadata3(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter3(thisArg, _arguments, P6, generator) {
  function adopt(value) {
    return value instanceof P6 ? value : new P6(function(resolve) {
      resolve(value);
    });
  }
  return new (P6 || (P6 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator3(thisArg, body) {
  var _3 = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f8, y6, t, g4;
  return g4 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g4[Symbol.iterator] = function() {
    return this;
  }), g4;
  function verb(n5) {
    return function(v6) {
      return step([n5, v6]);
    };
  }
  function step(op) {
    if (f8) throw new TypeError("Generator is already executing.");
    while (_3) try {
      if (f8 = 1, y6 && (t = op[0] & 2 ? y6["return"] : op[0] ? y6["throw"] || ((t = y6["return"]) && t.call(y6), 0) : y6.next) && !(t = t.call(y6, op[1])).done) return t;
      if (y6 = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _3.label++;
          return { value: op[1], done: false };
        case 5:
          _3.label++;
          y6 = op[1];
          op = [0];
          continue;
        case 7:
          op = _3.ops.pop();
          _3.trys.pop();
          continue;
        default:
          if (!(t = _3.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _3 = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _3.label = op[1];
            break;
          }
          if (op[0] === 6 && _3.label < t[1]) {
            _3.label = t[1];
            t = op;
            break;
          }
          if (t && _3.label < t[2]) {
            _3.label = t[2];
            _3.ops.push(op);
            break;
          }
          if (t[2]) _3.ops.pop();
          _3.trys.pop();
          continue;
      }
      op = body.call(thisArg, _3);
    } catch (e2) {
      op = [6, e2];
      y6 = 0;
    } finally {
      f8 = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __createBinding3(o5, m4, k7, k22) {
  if (k22 === void 0) k22 = k7;
  o5[k22] = m4[k7];
}
function __exportStar3(m4, exports) {
  for (var p5 in m4) if (p5 !== "default" && !exports.hasOwnProperty(p5)) exports[p5] = m4[p5];
}
function __values3(o5) {
  var s3 = typeof Symbol === "function" && Symbol.iterator, m4 = s3 && o5[s3], i4 = 0;
  if (m4) return m4.call(o5);
  if (o5 && typeof o5.length === "number") return {
    next: function() {
      if (o5 && i4 >= o5.length) o5 = void 0;
      return { value: o5 && o5[i4++], done: !o5 };
    }
  };
  throw new TypeError(s3 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read3(o5, n5) {
  var m4 = typeof Symbol === "function" && o5[Symbol.iterator];
  if (!m4) return o5;
  var i4 = m4.call(o5), r3, ar4 = [], e2;
  try {
    while ((n5 === void 0 || n5-- > 0) && !(r3 = i4.next()).done) ar4.push(r3.value);
  } catch (error) {
    e2 = { error };
  } finally {
    try {
      if (r3 && !r3.done && (m4 = i4["return"])) m4.call(i4);
    } finally {
      if (e2) throw e2.error;
    }
  }
  return ar4;
}
function __spread3() {
  for (var ar4 = [], i4 = 0; i4 < arguments.length; i4++)
    ar4 = ar4.concat(__read3(arguments[i4]));
  return ar4;
}
function __spreadArrays3() {
  for (var s3 = 0, i4 = 0, il = arguments.length; i4 < il; i4++) s3 += arguments[i4].length;
  for (var r3 = Array(s3), k7 = 0, i4 = 0; i4 < il; i4++)
    for (var a3 = arguments[i4], j6 = 0, jl = a3.length; j6 < jl; j6++, k7++)
      r3[k7] = a3[j6];
  return r3;
}
function __await3(v6) {
  return this instanceof __await3 ? (this.v = v6, this) : new __await3(v6);
}
function __asyncGenerator3(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g4 = generator.apply(thisArg, _arguments || []), i4, q2 = [];
  return i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
    return this;
  }, i4;
  function verb(n5) {
    if (g4[n5]) i4[n5] = function(v6) {
      return new Promise(function(a3, b5) {
        q2.push([n5, v6, a3, b5]) > 1 || resume(n5, v6);
      });
    };
  }
  function resume(n5, v6) {
    try {
      step(g4[n5](v6));
    } catch (e2) {
      settle(q2[0][3], e2);
    }
  }
  function step(r3) {
    r3.value instanceof __await3 ? Promise.resolve(r3.value.v).then(fulfill, reject) : settle(q2[0][2], r3);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f8, v6) {
    if (f8(v6), q2.shift(), q2.length) resume(q2[0][0], q2[0][1]);
  }
}
function __asyncDelegator3(o5) {
  var i4, p5;
  return i4 = {}, verb("next"), verb("throw", function(e2) {
    throw e2;
  }), verb("return"), i4[Symbol.iterator] = function() {
    return this;
  }, i4;
  function verb(n5, f8) {
    i4[n5] = o5[n5] ? function(v6) {
      return (p5 = !p5) ? { value: __await3(o5[n5](v6)), done: n5 === "return" } : f8 ? f8(v6) : v6;
    } : f8;
  }
}
function __asyncValues3(o5) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m4 = o5[Symbol.asyncIterator], i4;
  return m4 ? m4.call(o5) : (o5 = typeof __values3 === "function" ? __values3(o5) : o5[Symbol.iterator](), i4 = {}, verb("next"), verb("throw"), verb("return"), i4[Symbol.asyncIterator] = function() {
    return this;
  }, i4);
  function verb(n5) {
    i4[n5] = o5[n5] && function(v6) {
      return new Promise(function(resolve, reject) {
        v6 = o5[n5](v6), settle(resolve, reject, v6.done, v6.value);
      });
    };
  }
  function settle(resolve, reject, d5, v6) {
    Promise.resolve(v6).then(function(v7) {
      resolve({ value: v7, done: d5 });
    }, reject);
  }
}
function __makeTemplateObject3(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar3(mod2) {
  if (mod2 && mod2.__esModule) return mod2;
  var result = {};
  if (mod2 != null) {
    for (var k7 in mod2) if (Object.hasOwnProperty.call(mod2, k7)) result[k7] = mod2[k7];
  }
  result.default = mod2;
  return result;
}
function __importDefault3(mod2) {
  return mod2 && mod2.__esModule ? mod2 : { default: mod2 };
}
function __classPrivateFieldGet3(receiver, privateMap) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to get private field on non-instance");
  }
  return privateMap.get(receiver);
}
function __classPrivateFieldSet3(receiver, privateMap, value) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to set private field on non-instance");
  }
  privateMap.set(receiver, value);
  return value;
}
var extendStatics3, __assign3;
var init_tslib_es63 = __esm({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-utils/node_modules/tslib/tslib.es6.js"() {
    extendStatics3 = function(d5, b5) {
      extendStatics3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d6, b6) {
        d6.__proto__ = b6;
      } || function(d6, b6) {
        for (var p5 in b6) if (b6.hasOwnProperty(p5)) d6[p5] = b6[p5];
      };
      return extendStatics3(d5, b5);
    };
    __assign3 = function() {
      __assign3 = Object.assign || function __assign4(t) {
        for (var s3, i4 = 1, n5 = arguments.length; i4 < n5; i4++) {
          s3 = arguments[i4];
          for (var p5 in s3) if (Object.prototype.hasOwnProperty.call(s3, p5)) t[p5] = s3[p5];
        }
        return t;
      };
      return __assign3.apply(this, arguments);
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-utils/node_modules/@walletconnect/environment/dist/cjs/crypto.js
var require_crypto = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-utils/node_modules/@walletconnect/environment/dist/cjs/crypto.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBrowserCryptoAvailable = exports.getSubtleCrypto = exports.getBrowerCrypto = void 0;
    function getBrowerCrypto() {
      return (global === null || global === void 0 ? void 0 : global.crypto) || (global === null || global === void 0 ? void 0 : global.msCrypto) || {};
    }
    exports.getBrowerCrypto = getBrowerCrypto;
    function getSubtleCrypto() {
      const browserCrypto = getBrowerCrypto();
      return browserCrypto.subtle || browserCrypto.webkitSubtle;
    }
    exports.getSubtleCrypto = getSubtleCrypto;
    function isBrowserCryptoAvailable() {
      return !!getBrowerCrypto() && !!getSubtleCrypto();
    }
    exports.isBrowserCryptoAvailable = isBrowserCryptoAvailable;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-utils/node_modules/@walletconnect/environment/dist/cjs/env.js
var require_env = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-utils/node_modules/@walletconnect/environment/dist/cjs/env.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isBrowser = exports.isNode = exports.isReactNative = void 0;
    function isReactNative() {
      return typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative";
    }
    exports.isReactNative = isReactNative;
    function isNode2() {
      return typeof process !== "undefined" && typeof process.versions !== "undefined" && typeof process.versions.node !== "undefined";
    }
    exports.isNode = isNode2;
    function isBrowser() {
      return !isReactNative() && !isNode2();
    }
    exports.isBrowser = isBrowser;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-utils/node_modules/@walletconnect/environment/dist/cjs/index.js
var require_cjs5 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-utils/node_modules/@walletconnect/environment/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es63(), __toCommonJS(tslib_es6_exports3));
    tslib_1.__exportStar(require_crypto(), exports);
    tslib_1.__exportStar(require_env(), exports);
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/ws/browser.js
var require_browser2 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/ws/browser.js"(exports, module) {
    "use strict";
    module.exports = function() {
      throw new Error(
        "ws does not work in the browser. Browser clients must use the native WebSocket object"
      );
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/window-getters/dist/cjs/index.js
var require_cjs6 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/window-getters/dist/cjs/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getLocalStorage = exports.getLocalStorageOrThrow = exports.getCrypto = exports.getCryptoOrThrow = exports.getLocation = exports.getLocationOrThrow = exports.getNavigator = exports.getNavigatorOrThrow = exports.getDocument = exports.getDocumentOrThrow = exports.getFromWindowOrThrow = exports.getFromWindow = void 0;
    function getFromWindow(name2) {
      let res = void 0;
      if (typeof window !== "undefined" && typeof window[name2] !== "undefined") {
        res = window[name2];
      }
      return res;
    }
    exports.getFromWindow = getFromWindow;
    function getFromWindowOrThrow(name2) {
      const res = getFromWindow(name2);
      if (!res) {
        throw new Error(`${name2} is not defined in Window`);
      }
      return res;
    }
    exports.getFromWindowOrThrow = getFromWindowOrThrow;
    function getDocumentOrThrow() {
      return getFromWindowOrThrow("document");
    }
    exports.getDocumentOrThrow = getDocumentOrThrow;
    function getDocument() {
      return getFromWindow("document");
    }
    exports.getDocument = getDocument;
    function getNavigatorOrThrow() {
      return getFromWindowOrThrow("navigator");
    }
    exports.getNavigatorOrThrow = getNavigatorOrThrow;
    function getNavigator() {
      return getFromWindow("navigator");
    }
    exports.getNavigator = getNavigator;
    function getLocationOrThrow() {
      return getFromWindowOrThrow("location");
    }
    exports.getLocationOrThrow = getLocationOrThrow;
    function getLocation() {
      return getFromWindow("location");
    }
    exports.getLocation = getLocation;
    function getCryptoOrThrow() {
      return getFromWindowOrThrow("crypto");
    }
    exports.getCryptoOrThrow = getCryptoOrThrow;
    function getCrypto() {
      return getFromWindow("crypto");
    }
    exports.getCrypto = getCrypto;
    function getLocalStorageOrThrow() {
      return getFromWindowOrThrow("localStorage");
    }
    exports.getLocalStorageOrThrow = getLocalStorageOrThrow;
    function getLocalStorage() {
      return getFromWindow("localStorage");
    }
    exports.getLocalStorage = getLocalStorage;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-http-connection/node_modules/cross-fetch/dist/browser-ponyfill.js
var require_browser_ponyfill = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-http-connection/node_modules/cross-fetch/dist/browser-ponyfill.js"(exports, module) {
    var __global__ = typeof globalThis !== "undefined" && globalThis || typeof self !== "undefined" && self || typeof global !== "undefined" && global;
    var __globalThis__ = (function() {
      function F3() {
        this.fetch = false;
        this.DOMException = __global__.DOMException;
      }
      F3.prototype = __global__;
      return new F3();
    })();
    (function(globalThis2) {
      var irrelevant = (function(exports2) {
        var g4 = typeof globalThis2 !== "undefined" && globalThis2 || typeof self !== "undefined" && self || // eslint-disable-next-line no-undef
        typeof global !== "undefined" && global || {};
        var support = {
          searchParams: "URLSearchParams" in g4,
          iterable: "Symbol" in g4 && "iterator" in Symbol,
          blob: "FileReader" in g4 && "Blob" in g4 && (function() {
            try {
              new Blob();
              return true;
            } catch (e2) {
              return false;
            }
          })(),
          formData: "FormData" in g4,
          arrayBuffer: "ArrayBuffer" in g4
        };
        function isDataView(obj) {
          return obj && DataView.prototype.isPrototypeOf(obj);
        }
        if (support.arrayBuffer) {
          var viewClasses = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]"
          ];
          var isArrayBufferView = ArrayBuffer.isView || function(obj) {
            return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
          };
        }
        function normalizeName(name2) {
          if (typeof name2 !== "string") {
            name2 = String(name2);
          }
          if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name2) || name2 === "") {
            throw new TypeError('Invalid character in header field name: "' + name2 + '"');
          }
          return name2.toLowerCase();
        }
        function normalizeValue(value) {
          if (typeof value !== "string") {
            value = String(value);
          }
          return value;
        }
        function iteratorFor(items) {
          var iterator = {
            next: function() {
              var value = items.shift();
              return { done: value === void 0, value };
            }
          };
          if (support.iterable) {
            iterator[Symbol.iterator] = function() {
              return iterator;
            };
          }
          return iterator;
        }
        function Headers(headers) {
          this.map = {};
          if (headers instanceof Headers) {
            headers.forEach(function(value, name2) {
              this.append(name2, value);
            }, this);
          } else if (Array.isArray(headers)) {
            headers.forEach(function(header) {
              if (header.length != 2) {
                throw new TypeError("Headers constructor: expected name/value pair to be length 2, found" + header.length);
              }
              this.append(header[0], header[1]);
            }, this);
          } else if (headers) {
            Object.getOwnPropertyNames(headers).forEach(function(name2) {
              this.append(name2, headers[name2]);
            }, this);
          }
        }
        Headers.prototype.append = function(name2, value) {
          name2 = normalizeName(name2);
          value = normalizeValue(value);
          var oldValue = this.map[name2];
          this.map[name2] = oldValue ? oldValue + ", " + value : value;
        };
        Headers.prototype["delete"] = function(name2) {
          delete this.map[normalizeName(name2)];
        };
        Headers.prototype.get = function(name2) {
          name2 = normalizeName(name2);
          return this.has(name2) ? this.map[name2] : null;
        };
        Headers.prototype.has = function(name2) {
          return this.map.hasOwnProperty(normalizeName(name2));
        };
        Headers.prototype.set = function(name2, value) {
          this.map[normalizeName(name2)] = normalizeValue(value);
        };
        Headers.prototype.forEach = function(callback, thisArg) {
          for (var name2 in this.map) {
            if (this.map.hasOwnProperty(name2)) {
              callback.call(thisArg, this.map[name2], name2, this);
            }
          }
        };
        Headers.prototype.keys = function() {
          var items = [];
          this.forEach(function(value, name2) {
            items.push(name2);
          });
          return iteratorFor(items);
        };
        Headers.prototype.values = function() {
          var items = [];
          this.forEach(function(value) {
            items.push(value);
          });
          return iteratorFor(items);
        };
        Headers.prototype.entries = function() {
          var items = [];
          this.forEach(function(value, name2) {
            items.push([name2, value]);
          });
          return iteratorFor(items);
        };
        if (support.iterable) {
          Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
        }
        function consumed(body) {
          if (body._noBody) return;
          if (body.bodyUsed) {
            return Promise.reject(new TypeError("Already read"));
          }
          body.bodyUsed = true;
        }
        function fileReaderReady(reader) {
          return new Promise(function(resolve, reject) {
            reader.onload = function() {
              resolve(reader.result);
            };
            reader.onerror = function() {
              reject(reader.error);
            };
          });
        }
        function readBlobAsArrayBuffer(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          reader.readAsArrayBuffer(blob);
          return promise;
        }
        function readBlobAsText(blob) {
          var reader = new FileReader();
          var promise = fileReaderReady(reader);
          var match = /charset=([A-Za-z0-9_-]+)/.exec(blob.type);
          var encoding = match ? match[1] : "utf-8";
          reader.readAsText(blob, encoding);
          return promise;
        }
        function readArrayBufferAsText(buf) {
          var view = new Uint8Array(buf);
          var chars = new Array(view.length);
          for (var i4 = 0; i4 < view.length; i4++) {
            chars[i4] = String.fromCharCode(view[i4]);
          }
          return chars.join("");
        }
        function bufferClone(buf) {
          if (buf.slice) {
            return buf.slice(0);
          } else {
            var view = new Uint8Array(buf.byteLength);
            view.set(new Uint8Array(buf));
            return view.buffer;
          }
        }
        function Body() {
          this.bodyUsed = false;
          this._initBody = function(body) {
            this.bodyUsed = this.bodyUsed;
            this._bodyInit = body;
            if (!body) {
              this._noBody = true;
              this._bodyText = "";
            } else if (typeof body === "string") {
              this._bodyText = body;
            } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
              this._bodyBlob = body;
            } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
              this._bodyFormData = body;
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this._bodyText = body.toString();
            } else if (support.arrayBuffer && support.blob && isDataView(body)) {
              this._bodyArrayBuffer = bufferClone(body.buffer);
              this._bodyInit = new Blob([this._bodyArrayBuffer]);
            } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
              this._bodyArrayBuffer = bufferClone(body);
            } else {
              this._bodyText = body = Object.prototype.toString.call(body);
            }
            if (!this.headers.get("content-type")) {
              if (typeof body === "string") {
                this.headers.set("content-type", "text/plain;charset=UTF-8");
              } else if (this._bodyBlob && this._bodyBlob.type) {
                this.headers.set("content-type", this._bodyBlob.type);
              } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
                this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
              }
            }
          };
          if (support.blob) {
            this.blob = function() {
              var rejected = consumed(this);
              if (rejected) {
                return rejected;
              }
              if (this._bodyBlob) {
                return Promise.resolve(this._bodyBlob);
              } else if (this._bodyArrayBuffer) {
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              } else if (this._bodyFormData) {
                throw new Error("could not read FormData body as blob");
              } else {
                return Promise.resolve(new Blob([this._bodyText]));
              }
            };
          }
          this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              var isConsumed = consumed(this);
              if (isConsumed) {
                return isConsumed;
              } else if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
                return Promise.resolve(
                  this._bodyArrayBuffer.buffer.slice(
                    this._bodyArrayBuffer.byteOffset,
                    this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
                  )
                );
              } else {
                return Promise.resolve(this._bodyArrayBuffer);
              }
            } else if (support.blob) {
              return this.blob().then(readBlobAsArrayBuffer);
            } else {
              throw new Error("could not read as ArrayBuffer");
            }
          };
          this.text = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return readBlobAsText(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as text");
            } else {
              return Promise.resolve(this._bodyText);
            }
          };
          if (support.formData) {
            this.formData = function() {
              return this.text().then(decode7);
            };
          }
          this.json = function() {
            return this.text().then(JSON.parse);
          };
          return this;
        }
        var methods = ["CONNECT", "DELETE", "GET", "HEAD", "OPTIONS", "PATCH", "POST", "PUT", "TRACE"];
        function normalizeMethod(method) {
          var upcased = method.toUpperCase();
          return methods.indexOf(upcased) > -1 ? upcased : method;
        }
        function Request(input, options) {
          if (!(this instanceof Request)) {
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          }
          options = options || {};
          var body = options.body;
          if (input instanceof Request) {
            if (input.bodyUsed) {
              throw new TypeError("Already read");
            }
            this.url = input.url;
            this.credentials = input.credentials;
            if (!options.headers) {
              this.headers = new Headers(input.headers);
            }
            this.method = input.method;
            this.mode = input.mode;
            this.signal = input.signal;
            if (!body && input._bodyInit != null) {
              body = input._bodyInit;
              input.bodyUsed = true;
            }
          } else {
            this.url = String(input);
          }
          this.credentials = options.credentials || this.credentials || "same-origin";
          if (options.headers || !this.headers) {
            this.headers = new Headers(options.headers);
          }
          this.method = normalizeMethod(options.method || this.method || "GET");
          this.mode = options.mode || this.mode || null;
          this.signal = options.signal || this.signal || (function() {
            if ("AbortController" in g4) {
              var ctrl = new AbortController();
              return ctrl.signal;
            }
          })();
          this.referrer = null;
          if ((this.method === "GET" || this.method === "HEAD") && body) {
            throw new TypeError("Body not allowed for GET or HEAD requests");
          }
          this._initBody(body);
          if (this.method === "GET" || this.method === "HEAD") {
            if (options.cache === "no-store" || options.cache === "no-cache") {
              var reParamSearch = /([?&])_=[^&]*/;
              if (reParamSearch.test(this.url)) {
                this.url = this.url.replace(reParamSearch, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
              } else {
                var reQueryString = /\?/;
                this.url += (reQueryString.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
              }
            }
          }
        }
        Request.prototype.clone = function() {
          return new Request(this, { body: this._bodyInit });
        };
        function decode7(body) {
          var form = new FormData();
          body.trim().split("&").forEach(function(bytes) {
            if (bytes) {
              var split2 = bytes.split("=");
              var name2 = split2.shift().replace(/\+/g, " ");
              var value = split2.join("=").replace(/\+/g, " ");
              form.append(decodeURIComponent(name2), decodeURIComponent(value));
            }
          });
          return form;
        }
        function parseHeaders(rawHeaders) {
          var headers = new Headers();
          var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
          preProcessedHeaders.split("\r").map(function(header) {
            return header.indexOf("\n") === 0 ? header.substr(1, header.length) : header;
          }).forEach(function(line) {
            var parts = line.split(":");
            var key = parts.shift().trim();
            if (key) {
              var value = parts.join(":").trim();
              try {
                headers.append(key, value);
              } catch (error) {
                console.warn("Response " + error.message);
              }
            }
          });
          return headers;
        }
        Body.call(Request.prototype);
        function Response(bodyInit, options) {
          if (!(this instanceof Response)) {
            throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
          }
          if (!options) {
            options = {};
          }
          this.type = "default";
          this.status = options.status === void 0 ? 200 : options.status;
          if (this.status < 200 || this.status > 599) {
            throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");
          }
          this.ok = this.status >= 200 && this.status < 300;
          this.statusText = options.statusText === void 0 ? "" : "" + options.statusText;
          this.headers = new Headers(options.headers);
          this.url = options.url || "";
          this._initBody(bodyInit);
        }
        Body.call(Response.prototype);
        Response.prototype.clone = function() {
          return new Response(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new Headers(this.headers),
            url: this.url
          });
        };
        Response.error = function() {
          var response = new Response(null, { status: 200, statusText: "" });
          response.ok = false;
          response.status = 0;
          response.type = "error";
          return response;
        };
        var redirectStatuses = [301, 302, 303, 307, 308];
        Response.redirect = function(url, status) {
          if (redirectStatuses.indexOf(status) === -1) {
            throw new RangeError("Invalid status code");
          }
          return new Response(null, { status, headers: { location: url } });
        };
        exports2.DOMException = g4.DOMException;
        try {
          new exports2.DOMException();
        } catch (err) {
          exports2.DOMException = function(message, name2) {
            this.message = message;
            this.name = name2;
            var error = Error(message);
            this.stack = error.stack;
          };
          exports2.DOMException.prototype = Object.create(Error.prototype);
          exports2.DOMException.prototype.constructor = exports2.DOMException;
        }
        function fetch2(input, init) {
          return new Promise(function(resolve, reject) {
            var request = new Request(input, init);
            if (request.signal && request.signal.aborted) {
              return reject(new exports2.DOMException("Aborted", "AbortError"));
            }
            var xhr = new XMLHttpRequest();
            function abortXhr() {
              xhr.abort();
            }
            xhr.onload = function() {
              var options = {
                statusText: xhr.statusText,
                headers: parseHeaders(xhr.getAllResponseHeaders() || "")
              };
              if (request.url.indexOf("file://") === 0 && (xhr.status < 200 || xhr.status > 599)) {
                options.status = 200;
              } else {
                options.status = xhr.status;
              }
              options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
              var body = "response" in xhr ? xhr.response : xhr.responseText;
              setTimeout(function() {
                resolve(new Response(body, options));
              }, 0);
            };
            xhr.onerror = function() {
              setTimeout(function() {
                reject(new TypeError("Network request failed"));
              }, 0);
            };
            xhr.ontimeout = function() {
              setTimeout(function() {
                reject(new TypeError("Network request timed out"));
              }, 0);
            };
            xhr.onabort = function() {
              setTimeout(function() {
                reject(new exports2.DOMException("Aborted", "AbortError"));
              }, 0);
            };
            function fixUrl(url) {
              try {
                return url === "" && g4.location.href ? g4.location.href : url;
              } catch (e2) {
                return url;
              }
            }
            xhr.open(request.method, fixUrl(request.url), true);
            if (request.credentials === "include") {
              xhr.withCredentials = true;
            } else if (request.credentials === "omit") {
              xhr.withCredentials = false;
            }
            if ("responseType" in xhr) {
              if (support.blob) {
                xhr.responseType = "blob";
              } else if (support.arrayBuffer) {
                xhr.responseType = "arraybuffer";
              }
            }
            if (init && typeof init.headers === "object" && !(init.headers instanceof Headers || g4.Headers && init.headers instanceof g4.Headers)) {
              var names = [];
              Object.getOwnPropertyNames(init.headers).forEach(function(name2) {
                names.push(normalizeName(name2));
                xhr.setRequestHeader(name2, normalizeValue(init.headers[name2]));
              });
              request.headers.forEach(function(value, name2) {
                if (names.indexOf(name2) === -1) {
                  xhr.setRequestHeader(name2, value);
                }
              });
            } else {
              request.headers.forEach(function(value, name2) {
                xhr.setRequestHeader(name2, value);
              });
            }
            if (request.signal) {
              request.signal.addEventListener("abort", abortXhr);
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  request.signal.removeEventListener("abort", abortXhr);
                }
              };
            }
            xhr.send(typeof request._bodyInit === "undefined" ? null : request._bodyInit);
          });
        }
        fetch2.polyfill = true;
        if (!g4.fetch) {
          g4.fetch = fetch2;
          g4.Headers = Headers;
          g4.Request = Request;
          g4.Response = Response;
        }
        exports2.Headers = Headers;
        exports2.Request = Request;
        exports2.Response = Response;
        exports2.fetch = fetch2;
        Object.defineProperty(exports2, "__esModule", { value: true });
        return exports2;
      })({});
    })(__globalThis__);
    __globalThis__.fetch.ponyfill = true;
    delete __globalThis__.fetch.polyfill;
    var ctx = __global__.fetch ? __global__ : __globalThis__;
    exports = ctx.fetch;
    exports.default = ctx.fetch;
    exports.fetch = ctx.fetch;
    exports.Headers = ctx.Headers;
    exports.Request = ctx.Request;
    exports.Response = ctx.Response;
    module.exports = exports;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/can-promise.js
var require_can_promise = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/can-promise.js"(exports, module) {
    module.exports = function() {
      return typeof Promise === "function" && Promise.prototype && Promise.prototype.then;
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/utils.js
var require_utils3 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/utils.js"(exports) {
    var toSJISFunction;
    var CODEWORDS_COUNT = [
      0,
      // Not used
      26,
      44,
      70,
      100,
      134,
      172,
      196,
      242,
      292,
      346,
      404,
      466,
      532,
      581,
      655,
      733,
      815,
      901,
      991,
      1085,
      1156,
      1258,
      1364,
      1474,
      1588,
      1706,
      1828,
      1921,
      2051,
      2185,
      2323,
      2465,
      2611,
      2761,
      2876,
      3034,
      3196,
      3362,
      3532,
      3706
    ];
    exports.getSymbolSize = function getSymbolSize(version3) {
      if (!version3) throw new Error('"version" cannot be null or undefined');
      if (version3 < 1 || version3 > 40) throw new Error('"version" should be in range from 1 to 40');
      return version3 * 4 + 17;
    };
    exports.getSymbolTotalCodewords = function getSymbolTotalCodewords(version3) {
      return CODEWORDS_COUNT[version3];
    };
    exports.getBCHDigit = function(data) {
      let digit = 0;
      while (data !== 0) {
        digit++;
        data >>>= 1;
      }
      return digit;
    };
    exports.setToSJISFunction = function setToSJISFunction(f8) {
      if (typeof f8 !== "function") {
        throw new Error('"toSJISFunc" is not a valid function.');
      }
      toSJISFunction = f8;
    };
    exports.isKanjiModeEnabled = function() {
      return typeof toSJISFunction !== "undefined";
    };
    exports.toSJIS = function toSJIS(kanji) {
      return toSJISFunction(kanji);
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/error-correction-level.js
var require_error_correction_level = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/error-correction-level.js"(exports) {
    exports.L = { bit: 1 };
    exports.M = { bit: 0 };
    exports.Q = { bit: 3 };
    exports.H = { bit: 2 };
    function fromString4(string3) {
      if (typeof string3 !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string3.toLowerCase();
      switch (lcStr) {
        case "l":
        case "low":
          return exports.L;
        case "m":
        case "medium":
          return exports.M;
        case "q":
        case "quartile":
          return exports.Q;
        case "h":
        case "high":
          return exports.H;
        default:
          throw new Error("Unknown EC Level: " + string3);
      }
    }
    exports.isValid = function isValid(level) {
      return level && typeof level.bit !== "undefined" && level.bit >= 0 && level.bit < 4;
    };
    exports.from = function from3(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString4(value);
      } catch (e2) {
        return defaultValue;
      }
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/bit-buffer.js
var require_bit_buffer = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/bit-buffer.js"(exports, module) {
    function BitBuffer() {
      this.buffer = [];
      this.length = 0;
    }
    BitBuffer.prototype = {
      get: function(index) {
        const bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) === 1;
      },
      put: function(num2, length2) {
        for (let i4 = 0; i4 < length2; i4++) {
          this.putBit((num2 >>> length2 - i4 - 1 & 1) === 1);
        }
      },
      getLengthInBits: function() {
        return this.length;
      },
      putBit: function(bit) {
        const bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) {
          this.buffer.push(0);
        }
        if (bit) {
          this.buffer[bufIndex] |= 128 >>> this.length % 8;
        }
        this.length++;
      }
    };
    module.exports = BitBuffer;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/bit-matrix.js
var require_bit_matrix = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/bit-matrix.js"(exports, module) {
    function BitMatrix(size2) {
      if (!size2 || size2 < 1) {
        throw new Error("BitMatrix size must be defined and greater than 0");
      }
      this.size = size2;
      this.data = new Uint8Array(size2 * size2);
      this.reservedBit = new Uint8Array(size2 * size2);
    }
    BitMatrix.prototype.set = function(row, col, value, reserved) {
      const index = row * this.size + col;
      this.data[index] = value;
      if (reserved) this.reservedBit[index] = true;
    };
    BitMatrix.prototype.get = function(row, col) {
      return this.data[row * this.size + col];
    };
    BitMatrix.prototype.xor = function(row, col, value) {
      this.data[row * this.size + col] ^= value;
    };
    BitMatrix.prototype.isReserved = function(row, col) {
      return this.reservedBit[row * this.size + col];
    };
    module.exports = BitMatrix;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/alignment-pattern.js
var require_alignment_pattern = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/alignment-pattern.js"(exports) {
    var getSymbolSize = require_utils3().getSymbolSize;
    exports.getRowColCoords = function getRowColCoords(version3) {
      if (version3 === 1) return [];
      const posCount = Math.floor(version3 / 7) + 2;
      const size2 = getSymbolSize(version3);
      const intervals = size2 === 145 ? 26 : Math.ceil((size2 - 13) / (2 * posCount - 2)) * 2;
      const positions = [size2 - 7];
      for (let i4 = 1; i4 < posCount - 1; i4++) {
        positions[i4] = positions[i4 - 1] - intervals;
      }
      positions.push(6);
      return positions.reverse();
    };
    exports.getPositions = function getPositions(version3) {
      const coords = [];
      const pos = exports.getRowColCoords(version3);
      const posLength = pos.length;
      for (let i4 = 0; i4 < posLength; i4++) {
        for (let j6 = 0; j6 < posLength; j6++) {
          if (i4 === 0 && j6 === 0 || // top-left
          i4 === 0 && j6 === posLength - 1 || // bottom-left
          i4 === posLength - 1 && j6 === 0) {
            continue;
          }
          coords.push([pos[i4], pos[j6]]);
        }
      }
      return coords;
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/finder-pattern.js
var require_finder_pattern = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/finder-pattern.js"(exports) {
    var getSymbolSize = require_utils3().getSymbolSize;
    var FINDER_PATTERN_SIZE = 7;
    exports.getPositions = function getPositions(version3) {
      const size2 = getSymbolSize(version3);
      return [
        // top-left
        [0, 0],
        // top-right
        [size2 - FINDER_PATTERN_SIZE, 0],
        // bottom-left
        [0, size2 - FINDER_PATTERN_SIZE]
      ];
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/mask-pattern.js
var require_mask_pattern = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/mask-pattern.js"(exports) {
    exports.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    var PenaltyScores = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    exports.isValid = function isValid(mask) {
      return mask != null && mask !== "" && !isNaN(mask) && mask >= 0 && mask <= 7;
    };
    exports.from = function from3(value) {
      return exports.isValid(value) ? parseInt(value, 10) : void 0;
    };
    exports.getPenaltyN1 = function getPenaltyN1(data) {
      const size2 = data.size;
      let points = 0;
      let sameCountCol = 0;
      let sameCountRow = 0;
      let lastCol = null;
      let lastRow = null;
      for (let row = 0; row < size2; row++) {
        sameCountCol = sameCountRow = 0;
        lastCol = lastRow = null;
        for (let col = 0; col < size2; col++) {
          let module2 = data.get(row, col);
          if (module2 === lastCol) {
            sameCountCol++;
          } else {
            if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
            lastCol = module2;
            sameCountCol = 1;
          }
          module2 = data.get(col, row);
          if (module2 === lastRow) {
            sameCountRow++;
          } else {
            if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
            lastRow = module2;
            sameCountRow = 1;
          }
        }
        if (sameCountCol >= 5) points += PenaltyScores.N1 + (sameCountCol - 5);
        if (sameCountRow >= 5) points += PenaltyScores.N1 + (sameCountRow - 5);
      }
      return points;
    };
    exports.getPenaltyN2 = function getPenaltyN2(data) {
      const size2 = data.size;
      let points = 0;
      for (let row = 0; row < size2 - 1; row++) {
        for (let col = 0; col < size2 - 1; col++) {
          const last = data.get(row, col) + data.get(row, col + 1) + data.get(row + 1, col) + data.get(row + 1, col + 1);
          if (last === 4 || last === 0) points++;
        }
      }
      return points * PenaltyScores.N2;
    };
    exports.getPenaltyN3 = function getPenaltyN3(data) {
      const size2 = data.size;
      let points = 0;
      let bitsCol = 0;
      let bitsRow = 0;
      for (let row = 0; row < size2; row++) {
        bitsCol = bitsRow = 0;
        for (let col = 0; col < size2; col++) {
          bitsCol = bitsCol << 1 & 2047 | data.get(row, col);
          if (col >= 10 && (bitsCol === 1488 || bitsCol === 93)) points++;
          bitsRow = bitsRow << 1 & 2047 | data.get(col, row);
          if (col >= 10 && (bitsRow === 1488 || bitsRow === 93)) points++;
        }
      }
      return points * PenaltyScores.N3;
    };
    exports.getPenaltyN4 = function getPenaltyN4(data) {
      let darkCount = 0;
      const modulesCount = data.data.length;
      for (let i4 = 0; i4 < modulesCount; i4++) darkCount += data.data[i4];
      const k7 = Math.abs(Math.ceil(darkCount * 100 / modulesCount / 5) - 10);
      return k7 * PenaltyScores.N4;
    };
    function getMaskAt(maskPattern, i4, j6) {
      switch (maskPattern) {
        case exports.Patterns.PATTERN000:
          return (i4 + j6) % 2 === 0;
        case exports.Patterns.PATTERN001:
          return i4 % 2 === 0;
        case exports.Patterns.PATTERN010:
          return j6 % 3 === 0;
        case exports.Patterns.PATTERN011:
          return (i4 + j6) % 3 === 0;
        case exports.Patterns.PATTERN100:
          return (Math.floor(i4 / 2) + Math.floor(j6 / 3)) % 2 === 0;
        case exports.Patterns.PATTERN101:
          return i4 * j6 % 2 + i4 * j6 % 3 === 0;
        case exports.Patterns.PATTERN110:
          return (i4 * j6 % 2 + i4 * j6 % 3) % 2 === 0;
        case exports.Patterns.PATTERN111:
          return (i4 * j6 % 3 + (i4 + j6) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + maskPattern);
      }
    }
    exports.applyMask = function applyMask(pattern, data) {
      const size2 = data.size;
      for (let col = 0; col < size2; col++) {
        for (let row = 0; row < size2; row++) {
          if (data.isReserved(row, col)) continue;
          data.xor(row, col, getMaskAt(pattern, row, col));
        }
      }
    };
    exports.getBestMask = function getBestMask(data, setupFormatFunc) {
      const numPatterns = Object.keys(exports.Patterns).length;
      let bestPattern = 0;
      let lowerPenalty = Infinity;
      for (let p5 = 0; p5 < numPatterns; p5++) {
        setupFormatFunc(p5);
        exports.applyMask(p5, data);
        const penalty = exports.getPenaltyN1(data) + exports.getPenaltyN2(data) + exports.getPenaltyN3(data) + exports.getPenaltyN4(data);
        exports.applyMask(p5, data);
        if (penalty < lowerPenalty) {
          lowerPenalty = penalty;
          bestPattern = p5;
        }
      }
      return bestPattern;
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/error-correction-code.js
var require_error_correction_code = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/error-correction-code.js"(exports) {
    var ECLevel = require_error_correction_level();
    var EC_BLOCKS_TABLE = [
      // L  M  Q  H
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      2,
      2,
      1,
      2,
      2,
      4,
      1,
      2,
      4,
      4,
      2,
      4,
      4,
      4,
      2,
      4,
      6,
      5,
      2,
      4,
      6,
      6,
      2,
      5,
      8,
      8,
      4,
      5,
      8,
      8,
      4,
      5,
      8,
      11,
      4,
      8,
      10,
      11,
      4,
      9,
      12,
      16,
      4,
      9,
      16,
      16,
      6,
      10,
      12,
      18,
      6,
      10,
      17,
      16,
      6,
      11,
      16,
      19,
      6,
      13,
      18,
      21,
      7,
      14,
      21,
      25,
      8,
      16,
      20,
      25,
      8,
      17,
      23,
      25,
      9,
      17,
      23,
      34,
      9,
      18,
      25,
      30,
      10,
      20,
      27,
      32,
      12,
      21,
      29,
      35,
      12,
      23,
      34,
      37,
      12,
      25,
      34,
      40,
      13,
      26,
      35,
      42,
      14,
      28,
      38,
      45,
      15,
      29,
      40,
      48,
      16,
      31,
      43,
      51,
      17,
      33,
      45,
      54,
      18,
      35,
      48,
      57,
      19,
      37,
      51,
      60,
      19,
      38,
      53,
      63,
      20,
      40,
      56,
      66,
      21,
      43,
      59,
      70,
      22,
      45,
      62,
      74,
      24,
      47,
      65,
      77,
      25,
      49,
      68,
      81
    ];
    var EC_CODEWORDS_TABLE = [
      // L  M  Q  H
      7,
      10,
      13,
      17,
      10,
      16,
      22,
      28,
      15,
      26,
      36,
      44,
      20,
      36,
      52,
      64,
      26,
      48,
      72,
      88,
      36,
      64,
      96,
      112,
      40,
      72,
      108,
      130,
      48,
      88,
      132,
      156,
      60,
      110,
      160,
      192,
      72,
      130,
      192,
      224,
      80,
      150,
      224,
      264,
      96,
      176,
      260,
      308,
      104,
      198,
      288,
      352,
      120,
      216,
      320,
      384,
      132,
      240,
      360,
      432,
      144,
      280,
      408,
      480,
      168,
      308,
      448,
      532,
      180,
      338,
      504,
      588,
      196,
      364,
      546,
      650,
      224,
      416,
      600,
      700,
      224,
      442,
      644,
      750,
      252,
      476,
      690,
      816,
      270,
      504,
      750,
      900,
      300,
      560,
      810,
      960,
      312,
      588,
      870,
      1050,
      336,
      644,
      952,
      1110,
      360,
      700,
      1020,
      1200,
      390,
      728,
      1050,
      1260,
      420,
      784,
      1140,
      1350,
      450,
      812,
      1200,
      1440,
      480,
      868,
      1290,
      1530,
      510,
      924,
      1350,
      1620,
      540,
      980,
      1440,
      1710,
      570,
      1036,
      1530,
      1800,
      570,
      1064,
      1590,
      1890,
      600,
      1120,
      1680,
      1980,
      630,
      1204,
      1770,
      2100,
      660,
      1260,
      1860,
      2220,
      720,
      1316,
      1950,
      2310,
      750,
      1372,
      2040,
      2430
    ];
    exports.getBlocksCount = function getBlocksCount(version3, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_BLOCKS_TABLE[(version3 - 1) * 4 + 0];
        case ECLevel.M:
          return EC_BLOCKS_TABLE[(version3 - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_BLOCKS_TABLE[(version3 - 1) * 4 + 2];
        case ECLevel.H:
          return EC_BLOCKS_TABLE[(version3 - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
    exports.getTotalCodewordsCount = function getTotalCodewordsCount(version3, errorCorrectionLevel) {
      switch (errorCorrectionLevel) {
        case ECLevel.L:
          return EC_CODEWORDS_TABLE[(version3 - 1) * 4 + 0];
        case ECLevel.M:
          return EC_CODEWORDS_TABLE[(version3 - 1) * 4 + 1];
        case ECLevel.Q:
          return EC_CODEWORDS_TABLE[(version3 - 1) * 4 + 2];
        case ECLevel.H:
          return EC_CODEWORDS_TABLE[(version3 - 1) * 4 + 3];
        default:
          return void 0;
      }
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/galois-field.js
var require_galois_field = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/galois-field.js"(exports) {
    var EXP_TABLE = new Uint8Array(512);
    var LOG_TABLE = new Uint8Array(256);
    (function initTables() {
      let x7 = 1;
      for (let i4 = 0; i4 < 255; i4++) {
        EXP_TABLE[i4] = x7;
        LOG_TABLE[x7] = i4;
        x7 <<= 1;
        if (x7 & 256) {
          x7 ^= 285;
        }
      }
      for (let i4 = 255; i4 < 512; i4++) {
        EXP_TABLE[i4] = EXP_TABLE[i4 - 255];
      }
    })();
    exports.log = function log(n5) {
      if (n5 < 1) throw new Error("log(" + n5 + ")");
      return LOG_TABLE[n5];
    };
    exports.exp = function exp(n5) {
      return EXP_TABLE[n5];
    };
    exports.mul = function mul(x7, y6) {
      if (x7 === 0 || y6 === 0) return 0;
      return EXP_TABLE[LOG_TABLE[x7] + LOG_TABLE[y6]];
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/polynomial.js
var require_polynomial = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/polynomial.js"(exports) {
    var GF = require_galois_field();
    exports.mul = function mul(p1, p22) {
      const coeff = new Uint8Array(p1.length + p22.length - 1);
      for (let i4 = 0; i4 < p1.length; i4++) {
        for (let j6 = 0; j6 < p22.length; j6++) {
          coeff[i4 + j6] ^= GF.mul(p1[i4], p22[j6]);
        }
      }
      return coeff;
    };
    exports.mod = function mod2(divident, divisor) {
      let result = new Uint8Array(divident);
      while (result.length - divisor.length >= 0) {
        const coeff = result[0];
        for (let i4 = 0; i4 < divisor.length; i4++) {
          result[i4] ^= GF.mul(divisor[i4], coeff);
        }
        let offset = 0;
        while (offset < result.length && result[offset] === 0) offset++;
        result = result.slice(offset);
      }
      return result;
    };
    exports.generateECPolynomial = function generateECPolynomial(degree) {
      let poly = new Uint8Array([1]);
      for (let i4 = 0; i4 < degree; i4++) {
        poly = exports.mul(poly, new Uint8Array([1, GF.exp(i4)]));
      }
      return poly;
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/reed-solomon-encoder.js
var require_reed_solomon_encoder = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/reed-solomon-encoder.js"(exports, module) {
    var Polynomial = require_polynomial();
    function ReedSolomonEncoder(degree) {
      this.genPoly = void 0;
      this.degree = degree;
      if (this.degree) this.initialize(this.degree);
    }
    ReedSolomonEncoder.prototype.initialize = function initialize(degree) {
      this.degree = degree;
      this.genPoly = Polynomial.generateECPolynomial(this.degree);
    };
    ReedSolomonEncoder.prototype.encode = function encode6(data) {
      if (!this.genPoly) {
        throw new Error("Encoder not initialized");
      }
      const paddedData = new Uint8Array(data.length + this.degree);
      paddedData.set(data);
      const remainder = Polynomial.mod(paddedData, this.genPoly);
      const start = this.degree - remainder.length;
      if (start > 0) {
        const buff = new Uint8Array(this.degree);
        buff.set(remainder, start);
        return buff;
      }
      return remainder;
    };
    module.exports = ReedSolomonEncoder;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/version-check.js
var require_version_check = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/version-check.js"(exports) {
    exports.isValid = function isValid(version3) {
      return !isNaN(version3) && version3 >= 1 && version3 <= 40;
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/regex.js
var require_regex = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/regex.js"(exports) {
    var numeric = "[0-9]+";
    var alphanumeric = "[A-Z $%*+\\-./:]+";
    var kanji = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
    kanji = kanji.replace(/u/g, "\\u");
    var byte = "(?:(?![A-Z0-9 $%*+\\-./:]|" + kanji + ")(?:.|[\r\n]))+";
    exports.KANJI = new RegExp(kanji, "g");
    exports.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
    exports.BYTE = new RegExp(byte, "g");
    exports.NUMERIC = new RegExp(numeric, "g");
    exports.ALPHANUMERIC = new RegExp(alphanumeric, "g");
    var TEST_KANJI = new RegExp("^" + kanji + "$");
    var TEST_NUMERIC = new RegExp("^" + numeric + "$");
    var TEST_ALPHANUMERIC = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
    exports.testKanji = function testKanji(str) {
      return TEST_KANJI.test(str);
    };
    exports.testNumeric = function testNumeric(str) {
      return TEST_NUMERIC.test(str);
    };
    exports.testAlphanumeric = function testAlphanumeric(str) {
      return TEST_ALPHANUMERIC.test(str);
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/mode.js
var require_mode = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/mode.js"(exports) {
    var VersionCheck = require_version_check();
    var Regex = require_regex();
    exports.NUMERIC = {
      id: "Numeric",
      bit: 1 << 0,
      ccBits: [10, 12, 14]
    };
    exports.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 1 << 1,
      ccBits: [9, 11, 13]
    };
    exports.BYTE = {
      id: "Byte",
      bit: 1 << 2,
      ccBits: [8, 16, 16]
    };
    exports.KANJI = {
      id: "Kanji",
      bit: 1 << 3,
      ccBits: [8, 10, 12]
    };
    exports.MIXED = {
      bit: -1
    };
    exports.getCharCountIndicator = function getCharCountIndicator(mode, version3) {
      if (!mode.ccBits) throw new Error("Invalid mode: " + mode);
      if (!VersionCheck.isValid(version3)) {
        throw new Error("Invalid version: " + version3);
      }
      if (version3 >= 1 && version3 < 10) return mode.ccBits[0];
      else if (version3 < 27) return mode.ccBits[1];
      return mode.ccBits[2];
    };
    exports.getBestModeForData = function getBestModeForData(dataStr) {
      if (Regex.testNumeric(dataStr)) return exports.NUMERIC;
      else if (Regex.testAlphanumeric(dataStr)) return exports.ALPHANUMERIC;
      else if (Regex.testKanji(dataStr)) return exports.KANJI;
      else return exports.BYTE;
    };
    exports.toString = function toString4(mode) {
      if (mode && mode.id) return mode.id;
      throw new Error("Invalid mode");
    };
    exports.isValid = function isValid(mode) {
      return mode && mode.bit && mode.ccBits;
    };
    function fromString4(string3) {
      if (typeof string3 !== "string") {
        throw new Error("Param is not a string");
      }
      const lcStr = string3.toLowerCase();
      switch (lcStr) {
        case "numeric":
          return exports.NUMERIC;
        case "alphanumeric":
          return exports.ALPHANUMERIC;
        case "kanji":
          return exports.KANJI;
        case "byte":
          return exports.BYTE;
        default:
          throw new Error("Unknown mode: " + string3);
      }
    }
    exports.from = function from3(value, defaultValue) {
      if (exports.isValid(value)) {
        return value;
      }
      try {
        return fromString4(value);
      } catch (e2) {
        return defaultValue;
      }
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/version.js
var require_version = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/version.js"(exports) {
    var Utils = require_utils3();
    var ECCode = require_error_correction_code();
    var ECLevel = require_error_correction_level();
    var Mode = require_mode();
    var VersionCheck = require_version_check();
    var G18 = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0;
    var G18_BCH = Utils.getBCHDigit(G18);
    function getBestVersionForDataLength(mode, length2, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        if (length2 <= exports.getCapacity(currentVersion, errorCorrectionLevel, mode)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    function getReservedBitsCount(mode, version3) {
      return Mode.getCharCountIndicator(mode, version3) + 4;
    }
    function getTotalBitsFromDataArray(segments, version3) {
      let totalBits = 0;
      segments.forEach(function(data) {
        const reservedBits = getReservedBitsCount(data.mode, version3);
        totalBits += reservedBits + data.getBitsLength();
      });
      return totalBits;
    }
    function getBestVersionForMixedData(segments, errorCorrectionLevel) {
      for (let currentVersion = 1; currentVersion <= 40; currentVersion++) {
        const length2 = getTotalBitsFromDataArray(segments, currentVersion);
        if (length2 <= exports.getCapacity(currentVersion, errorCorrectionLevel, Mode.MIXED)) {
          return currentVersion;
        }
      }
      return void 0;
    }
    exports.from = function from3(value, defaultValue) {
      if (VersionCheck.isValid(value)) {
        return parseInt(value, 10);
      }
      return defaultValue;
    };
    exports.getCapacity = function getCapacity(version3, errorCorrectionLevel, mode) {
      if (!VersionCheck.isValid(version3)) {
        throw new Error("Invalid QR Code version");
      }
      if (typeof mode === "undefined") mode = Mode.BYTE;
      const totalCodewords = Utils.getSymbolTotalCodewords(version3);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version3, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (mode === Mode.MIXED) return dataTotalCodewordsBits;
      const usableBits = dataTotalCodewordsBits - getReservedBitsCount(mode, version3);
      switch (mode) {
        case Mode.NUMERIC:
          return Math.floor(usableBits / 10 * 3);
        case Mode.ALPHANUMERIC:
          return Math.floor(usableBits / 11 * 2);
        case Mode.KANJI:
          return Math.floor(usableBits / 13);
        case Mode.BYTE:
        default:
          return Math.floor(usableBits / 8);
      }
    };
    exports.getBestVersionForData = function getBestVersionForData(data, errorCorrectionLevel) {
      let seg;
      const ecl = ECLevel.from(errorCorrectionLevel, ECLevel.M);
      if (Array.isArray(data)) {
        if (data.length > 1) {
          return getBestVersionForMixedData(data, ecl);
        }
        if (data.length === 0) {
          return 1;
        }
        seg = data[0];
      } else {
        seg = data;
      }
      return getBestVersionForDataLength(seg.mode, seg.getLength(), ecl);
    };
    exports.getEncodedBits = function getEncodedBits(version3) {
      if (!VersionCheck.isValid(version3) || version3 < 7) {
        throw new Error("Invalid QR Code version");
      }
      let d5 = version3 << 12;
      while (Utils.getBCHDigit(d5) - G18_BCH >= 0) {
        d5 ^= G18 << Utils.getBCHDigit(d5) - G18_BCH;
      }
      return version3 << 12 | d5;
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/format-info.js
var require_format_info = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/format-info.js"(exports) {
    var Utils = require_utils3();
    var G15 = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0;
    var G15_MASK = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1;
    var G15_BCH = Utils.getBCHDigit(G15);
    exports.getEncodedBits = function getEncodedBits(errorCorrectionLevel, mask) {
      const data = errorCorrectionLevel.bit << 3 | mask;
      let d5 = data << 10;
      while (Utils.getBCHDigit(d5) - G15_BCH >= 0) {
        d5 ^= G15 << Utils.getBCHDigit(d5) - G15_BCH;
      }
      return (data << 10 | d5) ^ G15_MASK;
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/numeric-data.js
var require_numeric_data = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/numeric-data.js"(exports, module) {
    var Mode = require_mode();
    function NumericData(data) {
      this.mode = Mode.NUMERIC;
      this.data = data.toString();
    }
    NumericData.getBitsLength = function getBitsLength(length2) {
      return 10 * Math.floor(length2 / 3) + (length2 % 3 ? length2 % 3 * 3 + 1 : 0);
    };
    NumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    NumericData.prototype.getBitsLength = function getBitsLength() {
      return NumericData.getBitsLength(this.data.length);
    };
    NumericData.prototype.write = function write(bitBuffer) {
      let i4, group, value;
      for (i4 = 0; i4 + 3 <= this.data.length; i4 += 3) {
        group = this.data.substr(i4, 3);
        value = parseInt(group, 10);
        bitBuffer.put(value, 10);
      }
      const remainingNum = this.data.length - i4;
      if (remainingNum > 0) {
        group = this.data.substr(i4);
        value = parseInt(group, 10);
        bitBuffer.put(value, remainingNum * 3 + 1);
      }
    };
    module.exports = NumericData;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/alphanumeric-data.js
var require_alphanumeric_data = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/alphanumeric-data.js"(exports, module) {
    var Mode = require_mode();
    var ALPHA_NUM_CHARS = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      " ",
      "$",
      "%",
      "*",
      "+",
      "-",
      ".",
      "/",
      ":"
    ];
    function AlphanumericData(data) {
      this.mode = Mode.ALPHANUMERIC;
      this.data = data;
    }
    AlphanumericData.getBitsLength = function getBitsLength(length2) {
      return 11 * Math.floor(length2 / 2) + 6 * (length2 % 2);
    };
    AlphanumericData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    AlphanumericData.prototype.getBitsLength = function getBitsLength() {
      return AlphanumericData.getBitsLength(this.data.length);
    };
    AlphanumericData.prototype.write = function write(bitBuffer) {
      let i4;
      for (i4 = 0; i4 + 2 <= this.data.length; i4 += 2) {
        let value = ALPHA_NUM_CHARS.indexOf(this.data[i4]) * 45;
        value += ALPHA_NUM_CHARS.indexOf(this.data[i4 + 1]);
        bitBuffer.put(value, 11);
      }
      if (this.data.length % 2) {
        bitBuffer.put(ALPHA_NUM_CHARS.indexOf(this.data[i4]), 6);
      }
    };
    module.exports = AlphanumericData;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/byte-data.js
var require_byte_data = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/byte-data.js"(exports, module) {
    var Mode = require_mode();
    function ByteData(data) {
      this.mode = Mode.BYTE;
      if (typeof data === "string") {
        this.data = new TextEncoder().encode(data);
      } else {
        this.data = new Uint8Array(data);
      }
    }
    ByteData.getBitsLength = function getBitsLength(length2) {
      return length2 * 8;
    };
    ByteData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    ByteData.prototype.getBitsLength = function getBitsLength() {
      return ByteData.getBitsLength(this.data.length);
    };
    ByteData.prototype.write = function(bitBuffer) {
      for (let i4 = 0, l8 = this.data.length; i4 < l8; i4++) {
        bitBuffer.put(this.data[i4], 8);
      }
    };
    module.exports = ByteData;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/kanji-data.js
var require_kanji_data = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/kanji-data.js"(exports, module) {
    var Mode = require_mode();
    var Utils = require_utils3();
    function KanjiData(data) {
      this.mode = Mode.KANJI;
      this.data = data;
    }
    KanjiData.getBitsLength = function getBitsLength(length2) {
      return length2 * 13;
    };
    KanjiData.prototype.getLength = function getLength() {
      return this.data.length;
    };
    KanjiData.prototype.getBitsLength = function getBitsLength() {
      return KanjiData.getBitsLength(this.data.length);
    };
    KanjiData.prototype.write = function(bitBuffer) {
      let i4;
      for (i4 = 0; i4 < this.data.length; i4++) {
        let value = Utils.toSJIS(this.data[i4]);
        if (value >= 33088 && value <= 40956) {
          value -= 33088;
        } else if (value >= 57408 && value <= 60351) {
          value -= 49472;
        } else {
          throw new Error(
            "Invalid SJIS character: " + this.data[i4] + "\nMake sure your charset is UTF-8"
          );
        }
        value = (value >>> 8 & 255) * 192 + (value & 255);
        bitBuffer.put(value, 13);
      }
    };
    module.exports = KanjiData;
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/dijkstrajs/dijkstra.js
var require_dijkstra = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/dijkstrajs/dijkstra.js"(exports, module) {
    "use strict";
    var dijkstra = {
      single_source_shortest_paths: function(graph, s3, d5) {
        var predecessors = {};
        var costs = {};
        costs[s3] = 0;
        var open = dijkstra.PriorityQueue.make();
        open.push(s3, 0);
        var closest, u3, v6, cost_of_s_to_u, adjacent_nodes, cost_of_e, cost_of_s_to_u_plus_cost_of_e, cost_of_s_to_v, first_visit;
        while (!open.empty()) {
          closest = open.pop();
          u3 = closest.value;
          cost_of_s_to_u = closest.cost;
          adjacent_nodes = graph[u3] || {};
          for (v6 in adjacent_nodes) {
            if (adjacent_nodes.hasOwnProperty(v6)) {
              cost_of_e = adjacent_nodes[v6];
              cost_of_s_to_u_plus_cost_of_e = cost_of_s_to_u + cost_of_e;
              cost_of_s_to_v = costs[v6];
              first_visit = typeof costs[v6] === "undefined";
              if (first_visit || cost_of_s_to_v > cost_of_s_to_u_plus_cost_of_e) {
                costs[v6] = cost_of_s_to_u_plus_cost_of_e;
                open.push(v6, cost_of_s_to_u_plus_cost_of_e);
                predecessors[v6] = u3;
              }
            }
          }
        }
        if (typeof d5 !== "undefined" && typeof costs[d5] === "undefined") {
          var msg = ["Could not find a path from ", s3, " to ", d5, "."].join("");
          throw new Error(msg);
        }
        return predecessors;
      },
      extract_shortest_path_from_predecessor_list: function(predecessors, d5) {
        var nodes = [];
        var u3 = d5;
        var predecessor;
        while (u3) {
          nodes.push(u3);
          predecessor = predecessors[u3];
          u3 = predecessors[u3];
        }
        nodes.reverse();
        return nodes;
      },
      find_path: function(graph, s3, d5) {
        var predecessors = dijkstra.single_source_shortest_paths(graph, s3, d5);
        return dijkstra.extract_shortest_path_from_predecessor_list(
          predecessors,
          d5
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(opts) {
          var T5 = dijkstra.PriorityQueue, t = {}, key;
          opts = opts || {};
          for (key in T5) {
            if (T5.hasOwnProperty(key)) {
              t[key] = T5[key];
            }
          }
          t.queue = [];
          t.sorter = opts.sorter || T5.default_sorter;
          return t;
        },
        default_sorter: function(a3, b5) {
          return a3.cost - b5.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(value, cost) {
          var item = { value, cost };
          this.queue.push(item);
          this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    if (typeof module !== "undefined") {
      module.exports = dijkstra;
    }
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/segments.js
var require_segments = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/segments.js"(exports) {
    var Mode = require_mode();
    var NumericData = require_numeric_data();
    var AlphanumericData = require_alphanumeric_data();
    var ByteData = require_byte_data();
    var KanjiData = require_kanji_data();
    var Regex = require_regex();
    var Utils = require_utils3();
    var dijkstra = require_dijkstra();
    function getStringByteLength(str) {
      return unescape(encodeURIComponent(str)).length;
    }
    function getSegments(regex, mode, str) {
      const segments = [];
      let result;
      while ((result = regex.exec(str)) !== null) {
        segments.push({
          data: result[0],
          index: result.index,
          mode,
          length: result[0].length
        });
      }
      return segments;
    }
    function getSegmentsFromString(dataStr) {
      const numSegs = getSegments(Regex.NUMERIC, Mode.NUMERIC, dataStr);
      const alphaNumSegs = getSegments(Regex.ALPHANUMERIC, Mode.ALPHANUMERIC, dataStr);
      let byteSegs;
      let kanjiSegs;
      if (Utils.isKanjiModeEnabled()) {
        byteSegs = getSegments(Regex.BYTE, Mode.BYTE, dataStr);
        kanjiSegs = getSegments(Regex.KANJI, Mode.KANJI, dataStr);
      } else {
        byteSegs = getSegments(Regex.BYTE_KANJI, Mode.BYTE, dataStr);
        kanjiSegs = [];
      }
      const segs = numSegs.concat(alphaNumSegs, byteSegs, kanjiSegs);
      return segs.sort(function(s1, s22) {
        return s1.index - s22.index;
      }).map(function(obj) {
        return {
          data: obj.data,
          mode: obj.mode,
          length: obj.length
        };
      });
    }
    function getSegmentBitsLength(length2, mode) {
      switch (mode) {
        case Mode.NUMERIC:
          return NumericData.getBitsLength(length2);
        case Mode.ALPHANUMERIC:
          return AlphanumericData.getBitsLength(length2);
        case Mode.KANJI:
          return KanjiData.getBitsLength(length2);
        case Mode.BYTE:
          return ByteData.getBitsLength(length2);
      }
    }
    function mergeSegments(segs) {
      return segs.reduce(function(acc, curr) {
        const prevSeg = acc.length - 1 >= 0 ? acc[acc.length - 1] : null;
        if (prevSeg && prevSeg.mode === curr.mode) {
          acc[acc.length - 1].data += curr.data;
          return acc;
        }
        acc.push(curr);
        return acc;
      }, []);
    }
    function buildNodes(segs) {
      const nodes = [];
      for (let i4 = 0; i4 < segs.length; i4++) {
        const seg = segs[i4];
        switch (seg.mode) {
          case Mode.NUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.ALPHANUMERIC, length: seg.length },
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.ALPHANUMERIC:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: seg.length }
            ]);
            break;
          case Mode.KANJI:
            nodes.push([
              seg,
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
            break;
          case Mode.BYTE:
            nodes.push([
              { data: seg.data, mode: Mode.BYTE, length: getStringByteLength(seg.data) }
            ]);
        }
      }
      return nodes;
    }
    function buildGraph(nodes, version3) {
      const table = {};
      const graph = { start: {} };
      let prevNodeIds = ["start"];
      for (let i4 = 0; i4 < nodes.length; i4++) {
        const nodeGroup = nodes[i4];
        const currentNodeIds = [];
        for (let j6 = 0; j6 < nodeGroup.length; j6++) {
          const node = nodeGroup[j6];
          const key = "" + i4 + j6;
          currentNodeIds.push(key);
          table[key] = { node, lastCount: 0 };
          graph[key] = {};
          for (let n5 = 0; n5 < prevNodeIds.length; n5++) {
            const prevNodeId = prevNodeIds[n5];
            if (table[prevNodeId] && table[prevNodeId].node.mode === node.mode) {
              graph[prevNodeId][key] = getSegmentBitsLength(table[prevNodeId].lastCount + node.length, node.mode) - getSegmentBitsLength(table[prevNodeId].lastCount, node.mode);
              table[prevNodeId].lastCount += node.length;
            } else {
              if (table[prevNodeId]) table[prevNodeId].lastCount = node.length;
              graph[prevNodeId][key] = getSegmentBitsLength(node.length, node.mode) + 4 + Mode.getCharCountIndicator(node.mode, version3);
            }
          }
        }
        prevNodeIds = currentNodeIds;
      }
      for (let n5 = 0; n5 < prevNodeIds.length; n5++) {
        graph[prevNodeIds[n5]].end = 0;
      }
      return { map: graph, table };
    }
    function buildSingleSegment(data, modesHint) {
      let mode;
      const bestMode = Mode.getBestModeForData(data);
      mode = Mode.from(modesHint, bestMode);
      if (mode !== Mode.BYTE && mode.bit < bestMode.bit) {
        throw new Error('"' + data + '" cannot be encoded with mode ' + Mode.toString(mode) + ".\n Suggested mode is: " + Mode.toString(bestMode));
      }
      if (mode === Mode.KANJI && !Utils.isKanjiModeEnabled()) {
        mode = Mode.BYTE;
      }
      switch (mode) {
        case Mode.NUMERIC:
          return new NumericData(data);
        case Mode.ALPHANUMERIC:
          return new AlphanumericData(data);
        case Mode.KANJI:
          return new KanjiData(data);
        case Mode.BYTE:
          return new ByteData(data);
      }
    }
    exports.fromArray = function fromArray(array) {
      return array.reduce(function(acc, seg) {
        if (typeof seg === "string") {
          acc.push(buildSingleSegment(seg, null));
        } else if (seg.data) {
          acc.push(buildSingleSegment(seg.data, seg.mode));
        }
        return acc;
      }, []);
    };
    exports.fromString = function fromString4(data, version3) {
      const segs = getSegmentsFromString(data, Utils.isKanjiModeEnabled());
      const nodes = buildNodes(segs);
      const graph = buildGraph(nodes, version3);
      const path = dijkstra.find_path(graph.map, "start", "end");
      const optimizedSegs = [];
      for (let i4 = 1; i4 < path.length - 1; i4++) {
        optimizedSegs.push(graph.table[path[i4]].node);
      }
      return exports.fromArray(mergeSegments(optimizedSegs));
    };
    exports.rawSplit = function rawSplit(data) {
      return exports.fromArray(
        getSegmentsFromString(data, Utils.isKanjiModeEnabled())
      );
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/qrcode.js
var require_qrcode = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/core/qrcode.js"(exports) {
    var Utils = require_utils3();
    var ECLevel = require_error_correction_level();
    var BitBuffer = require_bit_buffer();
    var BitMatrix = require_bit_matrix();
    var AlignmentPattern = require_alignment_pattern();
    var FinderPattern = require_finder_pattern();
    var MaskPattern = require_mask_pattern();
    var ECCode = require_error_correction_code();
    var ReedSolomonEncoder = require_reed_solomon_encoder();
    var Version = require_version();
    var FormatInfo = require_format_info();
    var Mode = require_mode();
    var Segments = require_segments();
    function setupFinderPattern(matrix, version3) {
      const size2 = matrix.size;
      const pos = FinderPattern.getPositions(version3);
      for (let i4 = 0; i4 < pos.length; i4++) {
        const row = pos[i4][0];
        const col = pos[i4][1];
        for (let r3 = -1; r3 <= 7; r3++) {
          if (row + r3 <= -1 || size2 <= row + r3) continue;
          for (let c7 = -1; c7 <= 7; c7++) {
            if (col + c7 <= -1 || size2 <= col + c7) continue;
            if (r3 >= 0 && r3 <= 6 && (c7 === 0 || c7 === 6) || c7 >= 0 && c7 <= 6 && (r3 === 0 || r3 === 6) || r3 >= 2 && r3 <= 4 && c7 >= 2 && c7 <= 4) {
              matrix.set(row + r3, col + c7, true, true);
            } else {
              matrix.set(row + r3, col + c7, false, true);
            }
          }
        }
      }
    }
    function setupTimingPattern(matrix) {
      const size2 = matrix.size;
      for (let r3 = 8; r3 < size2 - 8; r3++) {
        const value = r3 % 2 === 0;
        matrix.set(r3, 6, value, true);
        matrix.set(6, r3, value, true);
      }
    }
    function setupAlignmentPattern(matrix, version3) {
      const pos = AlignmentPattern.getPositions(version3);
      for (let i4 = 0; i4 < pos.length; i4++) {
        const row = pos[i4][0];
        const col = pos[i4][1];
        for (let r3 = -2; r3 <= 2; r3++) {
          for (let c7 = -2; c7 <= 2; c7++) {
            if (r3 === -2 || r3 === 2 || c7 === -2 || c7 === 2 || r3 === 0 && c7 === 0) {
              matrix.set(row + r3, col + c7, true, true);
            } else {
              matrix.set(row + r3, col + c7, false, true);
            }
          }
        }
      }
    }
    function setupVersionInfo(matrix, version3) {
      const size2 = matrix.size;
      const bits = Version.getEncodedBits(version3);
      let row, col, mod2;
      for (let i4 = 0; i4 < 18; i4++) {
        row = Math.floor(i4 / 3);
        col = i4 % 3 + size2 - 8 - 3;
        mod2 = (bits >> i4 & 1) === 1;
        matrix.set(row, col, mod2, true);
        matrix.set(col, row, mod2, true);
      }
    }
    function setupFormatInfo(matrix, errorCorrectionLevel, maskPattern) {
      const size2 = matrix.size;
      const bits = FormatInfo.getEncodedBits(errorCorrectionLevel, maskPattern);
      let i4, mod2;
      for (i4 = 0; i4 < 15; i4++) {
        mod2 = (bits >> i4 & 1) === 1;
        if (i4 < 6) {
          matrix.set(i4, 8, mod2, true);
        } else if (i4 < 8) {
          matrix.set(i4 + 1, 8, mod2, true);
        } else {
          matrix.set(size2 - 15 + i4, 8, mod2, true);
        }
        if (i4 < 8) {
          matrix.set(8, size2 - i4 - 1, mod2, true);
        } else if (i4 < 9) {
          matrix.set(8, 15 - i4 - 1 + 1, mod2, true);
        } else {
          matrix.set(8, 15 - i4 - 1, mod2, true);
        }
      }
      matrix.set(size2 - 8, 8, 1, true);
    }
    function setupData(matrix, data) {
      const size2 = matrix.size;
      let inc = -1;
      let row = size2 - 1;
      let bitIndex = 7;
      let byteIndex = 0;
      for (let col = size2 - 1; col > 0; col -= 2) {
        if (col === 6) col--;
        while (true) {
          for (let c7 = 0; c7 < 2; c7++) {
            if (!matrix.isReserved(row, col - c7)) {
              let dark = false;
              if (byteIndex < data.length) {
                dark = (data[byteIndex] >>> bitIndex & 1) === 1;
              }
              matrix.set(row, col - c7, dark);
              bitIndex--;
              if (bitIndex === -1) {
                byteIndex++;
                bitIndex = 7;
              }
            }
          }
          row += inc;
          if (row < 0 || size2 <= row) {
            row -= inc;
            inc = -inc;
            break;
          }
        }
      }
    }
    function createData(version3, errorCorrectionLevel, segments) {
      const buffer = new BitBuffer();
      segments.forEach(function(data) {
        buffer.put(data.mode.bit, 4);
        buffer.put(data.getLength(), Mode.getCharCountIndicator(data.mode, version3));
        data.write(buffer);
      });
      const totalCodewords = Utils.getSymbolTotalCodewords(version3);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version3, errorCorrectionLevel);
      const dataTotalCodewordsBits = (totalCodewords - ecTotalCodewords) * 8;
      if (buffer.getLengthInBits() + 4 <= dataTotalCodewordsBits) {
        buffer.put(0, 4);
      }
      while (buffer.getLengthInBits() % 8 !== 0) {
        buffer.putBit(0);
      }
      const remainingByte = (dataTotalCodewordsBits - buffer.getLengthInBits()) / 8;
      for (let i4 = 0; i4 < remainingByte; i4++) {
        buffer.put(i4 % 2 ? 17 : 236, 8);
      }
      return createCodewords(buffer, version3, errorCorrectionLevel);
    }
    function createCodewords(bitBuffer, version3, errorCorrectionLevel) {
      const totalCodewords = Utils.getSymbolTotalCodewords(version3);
      const ecTotalCodewords = ECCode.getTotalCodewordsCount(version3, errorCorrectionLevel);
      const dataTotalCodewords = totalCodewords - ecTotalCodewords;
      const ecTotalBlocks = ECCode.getBlocksCount(version3, errorCorrectionLevel);
      const blocksInGroup2 = totalCodewords % ecTotalBlocks;
      const blocksInGroup1 = ecTotalBlocks - blocksInGroup2;
      const totalCodewordsInGroup1 = Math.floor(totalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup1 = Math.floor(dataTotalCodewords / ecTotalBlocks);
      const dataCodewordsInGroup2 = dataCodewordsInGroup1 + 1;
      const ecCount = totalCodewordsInGroup1 - dataCodewordsInGroup1;
      const rs2 = new ReedSolomonEncoder(ecCount);
      let offset = 0;
      const dcData = new Array(ecTotalBlocks);
      const ecData = new Array(ecTotalBlocks);
      let maxDataSize = 0;
      const buffer = new Uint8Array(bitBuffer.buffer);
      for (let b5 = 0; b5 < ecTotalBlocks; b5++) {
        const dataSize = b5 < blocksInGroup1 ? dataCodewordsInGroup1 : dataCodewordsInGroup2;
        dcData[b5] = buffer.slice(offset, offset + dataSize);
        ecData[b5] = rs2.encode(dcData[b5]);
        offset += dataSize;
        maxDataSize = Math.max(maxDataSize, dataSize);
      }
      const data = new Uint8Array(totalCodewords);
      let index = 0;
      let i4, r3;
      for (i4 = 0; i4 < maxDataSize; i4++) {
        for (r3 = 0; r3 < ecTotalBlocks; r3++) {
          if (i4 < dcData[r3].length) {
            data[index++] = dcData[r3][i4];
          }
        }
      }
      for (i4 = 0; i4 < ecCount; i4++) {
        for (r3 = 0; r3 < ecTotalBlocks; r3++) {
          data[index++] = ecData[r3][i4];
        }
      }
      return data;
    }
    function createSymbol(data, version3, errorCorrectionLevel, maskPattern) {
      let segments;
      if (Array.isArray(data)) {
        segments = Segments.fromArray(data);
      } else if (typeof data === "string") {
        let estimatedVersion = version3;
        if (!estimatedVersion) {
          const rawSegments = Segments.rawSplit(data);
          estimatedVersion = Version.getBestVersionForData(rawSegments, errorCorrectionLevel);
        }
        segments = Segments.fromString(data, estimatedVersion || 40);
      } else {
        throw new Error("Invalid data");
      }
      const bestVersion = Version.getBestVersionForData(segments, errorCorrectionLevel);
      if (!bestVersion) {
        throw new Error("The amount of data is too big to be stored in a QR Code");
      }
      if (!version3) {
        version3 = bestVersion;
      } else if (version3 < bestVersion) {
        throw new Error(
          "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + bestVersion + ".\n"
        );
      }
      const dataBits = createData(version3, errorCorrectionLevel, segments);
      const moduleCount = Utils.getSymbolSize(version3);
      const modules = new BitMatrix(moduleCount);
      setupFinderPattern(modules, version3);
      setupTimingPattern(modules);
      setupAlignmentPattern(modules, version3);
      setupFormatInfo(modules, errorCorrectionLevel, 0);
      if (version3 >= 7) {
        setupVersionInfo(modules, version3);
      }
      setupData(modules, dataBits);
      if (isNaN(maskPattern)) {
        maskPattern = MaskPattern.getBestMask(
          modules,
          setupFormatInfo.bind(null, modules, errorCorrectionLevel)
        );
      }
      MaskPattern.applyMask(maskPattern, modules);
      setupFormatInfo(modules, errorCorrectionLevel, maskPattern);
      return {
        modules,
        version: version3,
        errorCorrectionLevel,
        maskPattern,
        segments
      };
    }
    exports.create = function create2(data, options) {
      if (typeof data === "undefined" || data === "") {
        throw new Error("No input text");
      }
      let errorCorrectionLevel = ECLevel.M;
      let version3;
      let mask;
      if (typeof options !== "undefined") {
        errorCorrectionLevel = ECLevel.from(options.errorCorrectionLevel, ECLevel.M);
        version3 = Version.from(options.version);
        mask = MaskPattern.from(options.maskPattern);
        if (options.toSJISFunc) {
          Utils.setToSJISFunction(options.toSJISFunc);
        }
      }
      return createSymbol(data, version3, errorCorrectionLevel, mask);
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/renderer/utils.js
var require_utils4 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/renderer/utils.js"(exports) {
    function hex2rgba(hex) {
      if (typeof hex === "number") {
        hex = hex.toString();
      }
      if (typeof hex !== "string") {
        throw new Error("Color should be defined as hex string");
      }
      let hexCode = hex.slice().replace("#", "").split("");
      if (hexCode.length < 3 || hexCode.length === 5 || hexCode.length > 8) {
        throw new Error("Invalid hex color: " + hex);
      }
      if (hexCode.length === 3 || hexCode.length === 4) {
        hexCode = Array.prototype.concat.apply([], hexCode.map(function(c7) {
          return [c7, c7];
        }));
      }
      if (hexCode.length === 6) hexCode.push("F", "F");
      const hexValue = parseInt(hexCode.join(""), 16);
      return {
        r: hexValue >> 24 & 255,
        g: hexValue >> 16 & 255,
        b: hexValue >> 8 & 255,
        a: hexValue & 255,
        hex: "#" + hexCode.slice(0, 6).join("")
      };
    }
    exports.getOptions = function getOptions(options) {
      if (!options) options = {};
      if (!options.color) options.color = {};
      const margin = typeof options.margin === "undefined" || options.margin === null || options.margin < 0 ? 4 : options.margin;
      const width = options.width && options.width >= 21 ? options.width : void 0;
      const scale = options.scale || 4;
      return {
        width,
        scale: width ? 4 : scale,
        margin,
        color: {
          dark: hex2rgba(options.color.dark || "#000000ff"),
          light: hex2rgba(options.color.light || "#ffffffff")
        },
        type: options.type,
        rendererOpts: options.rendererOpts || {}
      };
    };
    exports.getScale = function getScale(qrSize, opts) {
      return opts.width && opts.width >= qrSize + opts.margin * 2 ? opts.width / (qrSize + opts.margin * 2) : opts.scale;
    };
    exports.getImageWidth = function getImageWidth(qrSize, opts) {
      const scale = exports.getScale(qrSize, opts);
      return Math.floor((qrSize + opts.margin * 2) * scale);
    };
    exports.qrToImageData = function qrToImageData(imgData, qr5, opts) {
      const size2 = qr5.modules.size;
      const data = qr5.modules.data;
      const scale = exports.getScale(size2, opts);
      const symbolSize = Math.floor((size2 + opts.margin * 2) * scale);
      const scaledMargin = opts.margin * scale;
      const palette = [opts.color.light, opts.color.dark];
      for (let i4 = 0; i4 < symbolSize; i4++) {
        for (let j6 = 0; j6 < symbolSize; j6++) {
          let posDst = (i4 * symbolSize + j6) * 4;
          let pxColor = opts.color.light;
          if (i4 >= scaledMargin && j6 >= scaledMargin && i4 < symbolSize - scaledMargin && j6 < symbolSize - scaledMargin) {
            const iSrc = Math.floor((i4 - scaledMargin) / scale);
            const jSrc = Math.floor((j6 - scaledMargin) / scale);
            pxColor = palette[data[iSrc * size2 + jSrc] ? 1 : 0];
          }
          imgData[posDst++] = pxColor.r;
          imgData[posDst++] = pxColor.g;
          imgData[posDst++] = pxColor.b;
          imgData[posDst] = pxColor.a;
        }
      }
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/renderer/canvas.js
var require_canvas = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/renderer/canvas.js"(exports) {
    var Utils = require_utils4();
    function clearCanvas(ctx, canvas, size2) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!canvas.style) canvas.style = {};
      canvas.height = size2;
      canvas.width = size2;
      canvas.style.height = size2 + "px";
      canvas.style.width = size2 + "px";
    }
    function getCanvasElement() {
      try {
        return document.createElement("canvas");
      } catch (e2) {
        throw new Error("You need to specify a canvas element");
      }
    }
    exports.render = function render(qrData, canvas, options) {
      let opts = options;
      let canvasEl = canvas;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!canvas) {
        canvasEl = getCanvasElement();
      }
      opts = Utils.getOptions(opts);
      const size2 = Utils.getImageWidth(qrData.modules.size, opts);
      const ctx = canvasEl.getContext("2d");
      const image = ctx.createImageData(size2, size2);
      Utils.qrToImageData(image.data, qrData, opts);
      clearCanvas(ctx, canvasEl, size2);
      ctx.putImageData(image, 0, 0);
      return canvasEl;
    };
    exports.renderToDataURL = function renderToDataURL(qrData, canvas, options) {
      let opts = options;
      if (typeof opts === "undefined" && (!canvas || !canvas.getContext)) {
        opts = canvas;
        canvas = void 0;
      }
      if (!opts) opts = {};
      const canvasEl = exports.render(qrData, canvas, opts);
      const type = opts.type || "image/png";
      const rendererOpts = opts.rendererOpts || {};
      return canvasEl.toDataURL(type, rendererOpts.quality);
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/renderer/svg-tag.js
var require_svg_tag = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/renderer/svg-tag.js"(exports) {
    var Utils = require_utils4();
    function getColorAttrib(color, attrib) {
      const alpha = color.a / 255;
      const str = attrib + '="' + color.hex + '"';
      return alpha < 1 ? str + " " + attrib + '-opacity="' + alpha.toFixed(2).slice(1) + '"' : str;
    }
    function svgCmd(cmd, x7, y6) {
      let str = cmd + x7;
      if (typeof y6 !== "undefined") str += " " + y6;
      return str;
    }
    function qrToPath(data, size2, margin) {
      let path = "";
      let moveBy = 0;
      let newRow = false;
      let lineLength = 0;
      for (let i4 = 0; i4 < data.length; i4++) {
        const col = Math.floor(i4 % size2);
        const row = Math.floor(i4 / size2);
        if (!col && !newRow) newRow = true;
        if (data[i4]) {
          lineLength++;
          if (!(i4 > 0 && col > 0 && data[i4 - 1])) {
            path += newRow ? svgCmd("M", col + margin, 0.5 + row + margin) : svgCmd("m", moveBy, 0);
            moveBy = 0;
            newRow = false;
          }
          if (!(col + 1 < size2 && data[i4 + 1])) {
            path += svgCmd("h", lineLength);
            lineLength = 0;
          }
        } else {
          moveBy++;
        }
      }
      return path;
    }
    exports.render = function render(qrData, options, cb) {
      const opts = Utils.getOptions(options);
      const size2 = qrData.modules.size;
      const data = qrData.modules.data;
      const qrcodesize = size2 + opts.margin * 2;
      const bg = !opts.color.light.a ? "" : "<path " + getColorAttrib(opts.color.light, "fill") + ' d="M0 0h' + qrcodesize + "v" + qrcodesize + 'H0z"/>';
      const path = "<path " + getColorAttrib(opts.color.dark, "stroke") + ' d="' + qrToPath(data, size2, opts.margin) + '"/>';
      const viewBox = 'viewBox="0 0 ' + qrcodesize + " " + qrcodesize + '"';
      const width = !opts.width ? "" : 'width="' + opts.width + '" height="' + opts.width + '" ';
      const svgTag = '<svg xmlns="http://www.w3.org/2000/svg" ' + width + viewBox + ' shape-rendering="crispEdges">' + bg + path + "</svg>\n";
      if (typeof cb === "function") {
        cb(null, svgTag);
      }
      return svgTag;
    };
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/browser.js
var require_browser3 = __commonJS({
  "../../../../../private/tmp/wc-vendor/node_modules/qrcode/lib/browser.js"(exports) {
    var canPromise = require_can_promise();
    var QRCode2 = require_qrcode();
    var CanvasRenderer = require_canvas();
    var SvgRenderer = require_svg_tag();
    function renderCanvas(renderFunc, canvas, text, opts, cb) {
      const args = [].slice.call(arguments, 1);
      const argsNum = args.length;
      const isLastArgCb = typeof args[argsNum - 1] === "function";
      if (!isLastArgCb && !canPromise()) {
        throw new Error("Callback required as last argument");
      }
      if (isLastArgCb) {
        if (argsNum < 2) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 2) {
          cb = text;
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 3) {
          if (canvas.getContext && typeof cb === "undefined") {
            cb = opts;
            opts = void 0;
          } else {
            cb = opts;
            opts = text;
            text = canvas;
            canvas = void 0;
          }
        }
      } else {
        if (argsNum < 1) {
          throw new Error("Too few arguments provided");
        }
        if (argsNum === 1) {
          text = canvas;
          canvas = opts = void 0;
        } else if (argsNum === 2 && !canvas.getContext) {
          opts = text;
          text = canvas;
          canvas = void 0;
        }
        return new Promise(function(resolve, reject) {
          try {
            const data = QRCode2.create(text, opts);
            resolve(renderFunc(data, canvas, opts));
          } catch (e2) {
            reject(e2);
          }
        });
      }
      try {
        const data = QRCode2.create(text, opts);
        cb(null, renderFunc(data, canvas, opts));
      } catch (e2) {
        cb(e2);
      }
    }
    exports.create = QRCode2.create;
    exports.toCanvas = renderCanvas.bind(null, CanvasRenderer.render);
    exports.toDataURL = renderCanvas.bind(null, CanvasRenderer.renderToDataURL);
    exports.toString = renderCanvas.bind(null, function(data, _3, opts) {
      return SvgRenderer.render(data, opts);
    });
  }
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/core/dist/index.es.js
var import_events7 = __toESM(require_events());

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/heartbeat/dist/index.es.js
var import_events = __toESM(require_events());
var import_time = __toESM(require_cjs());

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/events/dist/esm/events.js
var IEvents = class {
};

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/heartbeat/dist/index.es.js
var n = class extends IEvents {
  constructor(e2) {
    super();
  }
};
var s = import_time.FIVE_SECONDS;
var r = { pulse: "heartbeat_pulse" };
var i = class _i3 extends n {
  constructor(e2) {
    super(e2), this.events = new import_events.EventEmitter(), this.interval = s, this.interval = e2?.interval || s;
  }
  static async init(e2) {
    const t = new _i3(e2);
    return await t.init(), t;
  }
  async init() {
    await this.initialize();
  }
  stop() {
    clearInterval(this.intervalRef);
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  async initialize() {
    this.intervalRef = setInterval(() => this.pulse(), (0, import_time.toMiliseconds)(this.interval));
  }
  pulse() {
    this.events.emit(r.pulse);
  }
};

// ../../../../../private/tmp/wc-vendor/node_modules/destr/dist/index.mjs
var suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
var suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
var JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  if (value[0] === '"' && value[value.length - 1] === '"' && value.indexOf("\\") === -1) {
    return value.slice(1, -1);
  }
  const _value = value.trim();
  if (_value.length <= 9) {
    switch (_value.toLowerCase()) {
      case "true": {
        return true;
      }
      case "false": {
        return false;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "nan": {
        return Number.NaN;
      }
      case "infinity": {
        return Number.POSITIVE_INFINITY;
      }
      case "-infinity": {
        return Number.NEGATIVE_INFINITY;
      }
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/keyvaluestorage/node_modules/unstorage/dist/shared/unstorage.zVDD2mZo.mjs
function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
var BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  return BASE64_PREFIX + base64Encode(value);
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  return base64Decode(value.slice(BASE64_PREFIX.length));
}
function base64Decode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input, "base64");
  }
  return Uint8Array.from(
    globalThis.atob(input),
    (c7) => c7.codePointAt(0)
  );
}
function base64Encode(input) {
  if (globalThis.Buffer) {
    return Buffer.from(input).toString("base64");
  }
  return globalThis.btoa(String.fromCodePoint(...input));
}
function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0]?.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") || "";
}
function joinKeys(...keys2) {
  return normalizeKey(keys2.join(":"));
}
function normalizeBaseKey(base3) {
  base3 = normalizeKey(base3);
  return base3 ? base3 + ":" : "";
}
function filterKeyByDepth(key, depth) {
  if (depth === void 0) {
    return true;
  }
  let substrCount = 0;
  let index = key.indexOf(":");
  while (index > -1) {
    substrCount++;
    index = key.indexOf(":", index + 1);
  }
  return substrCount <= depth;
}
function filterKeyByBase(key, base3) {
  if (base3) {
    return key.startsWith(base3) && key[key.length - 1] !== "$";
  }
  return key[key.length - 1] !== "$";
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/keyvaluestorage/node_modules/unstorage/dist/index.mjs
function defineDriver(factory) {
  return factory;
}
var DRIVER_NAME = "memory";
var memory = defineDriver(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});
function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base3 of context.mountpoints) {
      if (key.startsWith(base3)) {
        return {
          base: base3,
          relativeKey: key.slice(base3.length),
          driver: context.mounts[base3]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base3, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base3) || includeParent && base3.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base3.length > mountpoint.length ? base3.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r3) => r3.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions = {}) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r3) => r3.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base3, opts = {}) {
      base3 = normalizeBaseKey(base3);
      const mounts = getMounts(base3, true);
      let maskedMounts = [];
      const allKeys = [];
      let allMountsSupportMaxDepth = true;
      for (const mount of mounts) {
        if (!mount.driver.flags?.maxDepth) {
          allMountsSupportMaxDepth = false;
        }
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey(key);
          if (!maskedMounts.some((p5) => fullKey.startsWith(p5))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p5) => !p5.startsWith(mount.mountpoint))
        ];
      }
      const shouldFilterByDepth = opts.maxDepth !== void 0 && !allMountsSupportMaxDepth;
      return allKeys.filter(
        (key) => (!shouldFilterByDepth || filterKeyByDepth(key, opts.maxDepth)) && filterKeyByBase(key, base3)
      );
    },
    // Utils
    async clear(base3, opts = {}) {
      base3 = normalizeBaseKey(base3);
      await Promise.all(
        getMounts(base3, false).map(async (m4) => {
          if (m4.driver.clear) {
            return asyncCall(m4.driver.clear, m4.relativeBase, opts);
          }
          if (m4.driver.removeItem) {
            const keys2 = await m4.driver.getKeys(m4.relativeBase || "", opts);
            return Promise.all(
              keys2.map((key) => m4.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base3, driver) {
      base3 = normalizeBaseKey(base3);
      if (base3 && context.mounts[base3]) {
        throw new Error(`already mounted at ${base3}`);
      }
      if (base3) {
        context.mountpoints.push(base3);
        context.mountpoints.sort((a3, b5) => b5.length - a3.length);
      }
      context.mounts[base3] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base3)).then((unwatcher) => {
          context.unwatch[base3] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base3, _dispose = true) {
      base3 = normalizeBaseKey(base3);
      if (!base3 || !context.mounts[base3]) {
        return;
      }
      if (context.watching && base3 in context.unwatch) {
        context.unwatch[base3]?.();
        delete context.unwatch[base3];
      }
      if (_dispose) {
        await dispose(context.mounts[base3]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base3);
      delete context.mounts[base3];
    },
    getMount(key = "") {
      key = normalizeKey(key) + ":";
      const m4 = getMount(key);
      return {
        driver: m4.driver,
        base: m4.base
      };
    },
    getMounts(base3 = "", opts = {}) {
      base3 = normalizeKey(base3);
      const mounts = getMounts(base3, opts.parents);
      return mounts.map((m4) => ({
        driver: m4.driver,
        base: m4.mountpoint
      }));
    },
    // Aliases
    keys: (base3, opts = {}) => storage.getKeys(base3, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base3) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base3 + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/idb-keyval/dist/index.js
function promisifyRequest(request) {
  return new Promise((resolve, reject) => {
    request.oncomplete = request.onsuccess = () => resolve(request.result);
    request.onabort = request.onerror = () => reject(request.error);
  });
}
function createStore(dbName, storeName) {
  let dbp;
  const getDB = () => {
    if (dbp)
      return dbp;
    const request = indexedDB.open(dbName);
    request.onupgradeneeded = () => request.result.createObjectStore(storeName);
    dbp = promisifyRequest(request);
    dbp.then((db) => {
      db.onclose = () => dbp = void 0;
    }, () => {
      dbp = void 0;
    });
    return dbp;
  };
  return (txMode, callback) => getDB().then((db) => callback(db.transaction(storeName, txMode).objectStore(storeName)));
}
var defaultGetStoreFunc;
function defaultGetStore() {
  if (!defaultGetStoreFunc) {
    defaultGetStoreFunc = createStore("keyval-store", "keyval");
  }
  return defaultGetStoreFunc;
}
function get(key, customStore = defaultGetStore()) {
  return customStore("readonly", (store) => promisifyRequest(store.get(key)));
}
function set(key, value, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.put(value, key);
    return promisifyRequest(store.transaction);
  });
}
function del(key, customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.delete(key);
    return promisifyRequest(store.transaction);
  });
}
function clear(customStore = defaultGetStore()) {
  return customStore("readwrite", (store) => {
    store.clear();
    return promisifyRequest(store.transaction);
  });
}
function eachCursor(store, callback) {
  store.openCursor().onsuccess = function() {
    if (!this.result)
      return;
    callback(this.result);
    this.result.continue();
  };
  return promisifyRequest(store.transaction);
}
function keys(customStore = defaultGetStore()) {
  return customStore("readonly", (store) => {
    if (store.getAllKeys) {
      return promisifyRequest(store.getAllKeys());
    }
    const items = [];
    return eachCursor(store, (cursor) => items.push(cursor.key)).then(() => items);
  });
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/safe-json/dist/esm/index.js
var JSONStringify = (data) => JSON.stringify(data, (_3, value) => typeof value === "bigint" ? value.toString() + "n" : value);
var JSONParse = (json) => {
  const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
  const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
  return JSON.parse(serializedData, (_3, value) => {
    const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
    if (isCustomFormatBigInt)
      return BigInt(value.substring(0, value.length - 1));
    return value;
  });
};
function safeJsonParse(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSONParse(value);
  } catch (_a2) {
    return value;
  }
}
function safeJsonStringify(value) {
  return typeof value === "string" ? value : JSONStringify(value) || "";
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/keyvaluestorage/dist/index.es.js
var x = "idb-keyval";
var z = (i4 = {}) => {
  const t = i4.base && i4.base.length > 0 ? `${i4.base}:` : "", e2 = (s3) => t + s3;
  let n5;
  return i4.dbName && i4.storeName && (n5 = createStore(i4.dbName, i4.storeName)), { name: x, options: i4, async hasItem(s3) {
    return !(typeof await get(e2(s3), n5) > "u");
  }, async getItem(s3) {
    return await get(e2(s3), n5) ?? null;
  }, setItem(s3, a3) {
    return set(e2(s3), a3, n5);
  }, removeItem(s3) {
    return del(e2(s3), n5);
  }, getKeys() {
    return keys(n5);
  }, clear() {
    return clear(n5);
  } };
};
var D = "WALLET_CONNECT_V2_INDEXED_DB";
var E = "keyvaluestorage";
var _ = class {
  constructor() {
    this.indexedDb = createStorage({ driver: z({ dbName: D, storeName: E }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t) => [t.key, t.value]);
  }
  async getItem(t) {
    const e2 = await this.indexedDb.getItem(t);
    if (e2 !== null) return e2;
  }
  async setItem(t, e2) {
    await this.indexedDb.setItem(t, safeJsonStringify(e2));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var l2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
var c = { exports: {} };
(function() {
  let i4;
  function t() {
  }
  i4 = t, i4.prototype.getItem = function(e2) {
    return this.hasOwnProperty(e2) ? String(this[e2]) : null;
  }, i4.prototype.setItem = function(e2, n5) {
    this[e2] = String(n5);
  }, i4.prototype.removeItem = function(e2) {
    delete this[e2];
  }, i4.prototype.clear = function() {
    const e2 = this;
    Object.keys(e2).forEach(function(n5) {
      e2[n5] = void 0, delete e2[n5];
    });
  }, i4.prototype.key = function(e2) {
    return e2 = e2 || 0, Object.keys(this)[e2];
  }, i4.prototype.__defineGetter__("length", function() {
    return Object.keys(this).length;
  }), typeof l2 < "u" && l2.localStorage ? c.exports = l2.localStorage : typeof window < "u" && window.localStorage ? c.exports = window.localStorage : c.exports = new t();
})();
function k(i4) {
  var t;
  return [i4[0], safeJsonParse((t = i4[1]) != null ? t : "")];
}
var K = class {
  constructor() {
    this.localStorage = c.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(k);
  }
  async getItem(t) {
    const e2 = this.localStorage.getItem(t);
    if (e2 !== null) return safeJsonParse(e2);
  }
  async setItem(t, e2) {
    this.localStorage.setItem(t, safeJsonStringify(e2));
  }
  async removeItem(t) {
    this.localStorage.removeItem(t);
  }
};
var N = "wc_storage_version";
var y = 1;
var O = async (i4, t, e2) => {
  const n5 = N, s3 = await t.getItem(n5);
  if (s3 && s3 >= y) {
    e2(t);
    return;
  }
  const a3 = await i4.getKeys();
  if (!a3.length) {
    e2(t);
    return;
  }
  const m4 = [];
  for (; a3.length; ) {
    const r3 = a3.shift();
    if (!r3) continue;
    const o5 = r3.toLowerCase();
    if (o5.includes("wc@") || o5.includes("walletconnect") || o5.includes("wc_") || o5.includes("wallet_connect")) {
      const f8 = await i4.getItem(r3);
      await t.setItem(r3, f8), m4.push(r3);
    }
  }
  await t.setItem(n5, y), e2(t), j(i4, m4);
};
var j = async (i4, t) => {
  t.length && t.forEach(async (e2) => {
    await i4.removeItem(e2);
  });
};
var h = class {
  constructor() {
    this.initialized = false, this.setInitialized = (e2) => {
      this.storage = e2, this.initialized = true;
    };
    const t = new K();
    this.storage = t;
    try {
      const e2 = new _();
      O(t, e2, this.setInitialized);
    } catch {
      this.initialized = true;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(t) {
    return await this.initialize(), this.storage.getItem(t);
  }
  async setItem(t, e2) {
    return await this.initialize(), this.storage.setItem(t, e2);
  }
  async removeItem(t) {
    return await this.initialize(), this.storage.removeItem(t);
  }
  async initialize() {
    this.initialized || await new Promise((t) => {
      const e2 = setInterval(() => {
        this.initialized && (clearInterval(e2), t());
      }, 20);
    });
  }
};

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/logger/dist/index.es.js
var import_pino = __toESM(require_browser());
var import_pino2 = __toESM(require_browser());

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/logger/node_modules/@walletconnect/safe-json/dist/esm/index.js
var JSONStringify2 = (data) => JSON.stringify(data, (_3, value) => typeof value === "bigint" ? value.toString() + "n" : value);
function safeJsonStringify2(value) {
  return typeof value === "string" ? value : JSONStringify2(value) || "";
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/logger/dist/index.es.js
var c2 = { level: "info" };
var n2 = "custom_context";
var l3 = 1e3 * 1024;
var O2 = class {
  constructor(e2) {
    this.nodeValue = e2, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
  }
  get value() {
    return this.nodeValue;
  }
  get size() {
    return this.sizeInBytes;
  }
};
var d = class {
  constructor(e2) {
    this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e2, this.sizeInBytes = 0;
  }
  append(e2) {
    const t = new O2(e2);
    if (t.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e2} with size ${t.size}`);
    for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
    this.head ? (this.tail && (this.tail.next = t), this.tail = t) : (this.head = t, this.tail = t), this.lengthInNodes++, this.sizeInBytes += t.size;
  }
  shift() {
    if (!this.head) return;
    const e2 = this.head;
    this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e2.size;
  }
  toArray() {
    const e2 = [];
    let t = this.head;
    for (; t !== null; ) e2.push(t.value), t = t.next;
    return e2;
  }
  get length() {
    return this.lengthInNodes;
  }
  get size() {
    return this.sizeInBytes;
  }
  toOrderedArray() {
    return Array.from(this);
  }
  [Symbol.iterator]() {
    let e2 = this.head;
    return { next: () => {
      if (!e2) return { done: true, value: null };
      const t = e2.value;
      return e2 = e2.next, { done: false, value: t };
    } };
  }
};
var L = class {
  constructor(e2, t = l3) {
    this.level = e2 ?? "error", this.levelValue = import_pino.levels.values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new d(this.MAX_LOG_SIZE_IN_BYTES);
  }
  forwardToConsole(e2, t) {
    t === import_pino.levels.values.error ? console.error(e2) : t === import_pino.levels.values.warn ? console.warn(e2) : t === import_pino.levels.values.debug ? console.debug(e2) : t === import_pino.levels.values.trace ? console.trace(e2) : console.log(e2);
  }
  appendToLogs(e2) {
    this.logs.append(safeJsonStringify2({ timestamp: (/* @__PURE__ */ new Date()).toISOString(), log: e2 }));
    const t = typeof e2 == "string" ? JSON.parse(e2).level : e2.level;
    t >= this.levelValue && this.forwardToConsole(e2, t);
  }
  getLogs() {
    return this.logs;
  }
  clearLogs() {
    this.logs = new d(this.MAX_LOG_SIZE_IN_BYTES);
  }
  getLogArray() {
    return Array.from(this.logs);
  }
  logsToBlob(e2) {
    const t = this.getLogArray();
    return t.push(safeJsonStringify2({ extraMetadata: e2 })), new Blob(t, { type: "application/json" });
  }
};
var m = class {
  constructor(e2, t = l3) {
    this.baseChunkLogger = new L(e2, t);
  }
  write(e2) {
    this.baseChunkLogger.appendToLogs(e2);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e2) {
    return this.baseChunkLogger.logsToBlob(e2);
  }
  downloadLogsBlobInBrowser(e2) {
    const t = URL.createObjectURL(this.logsToBlob(e2)), o5 = document.createElement("a");
    o5.href = t, o5.download = `walletconnect-logs-${(/* @__PURE__ */ new Date()).toISOString()}.txt`, document.body.appendChild(o5), o5.click(), document.body.removeChild(o5), URL.revokeObjectURL(t);
  }
};
var B = class {
  constructor(e2, t = l3) {
    this.baseChunkLogger = new L(e2, t);
  }
  write(e2) {
    this.baseChunkLogger.appendToLogs(e2);
  }
  getLogs() {
    return this.baseChunkLogger.getLogs();
  }
  clearLogs() {
    this.baseChunkLogger.clearLogs();
  }
  getLogArray() {
    return this.baseChunkLogger.getLogArray();
  }
  logsToBlob(e2) {
    return this.baseChunkLogger.logsToBlob(e2);
  }
};
var x2 = Object.defineProperty;
var S = Object.defineProperties;
var _2 = Object.getOwnPropertyDescriptors;
var p = Object.getOwnPropertySymbols;
var T = Object.prototype.hasOwnProperty;
var z2 = Object.prototype.propertyIsEnumerable;
var f = (r3, e2, t) => e2 in r3 ? x2(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var i2 = (r3, e2) => {
  for (var t in e2 || (e2 = {})) T.call(e2, t) && f(r3, t, e2[t]);
  if (p) for (var t of p(e2)) z2.call(e2, t) && f(r3, t, e2[t]);
  return r3;
};
var g = (r3, e2) => S(r3, _2(e2));
function k2(r3) {
  return g(i2({}, r3), { level: r3?.level || c2.level });
}
function v(r3, e2 = n2) {
  return r3[e2] || "";
}
function b(r3, e2, t = n2) {
  return r3[t] = e2, r3;
}
function y2(r3, e2 = n2) {
  let t = "";
  return typeof r3.bindings > "u" ? t = v(r3, e2) : t = r3.bindings().context || "", t;
}
function w(r3, e2, t = n2) {
  const o5 = y2(r3, t);
  return o5.trim() ? `${o5}/${e2}` : e2;
}
function E2(r3, e2, t = n2) {
  const o5 = w(r3, e2, t), a3 = r3.child({ context: o5 });
  return b(a3, o5, t);
}
function C(r3) {
  var e2, t;
  const o5 = new m((e2 = r3.opts) == null ? void 0 : e2.level, r3.maxSizeInBytes);
  return { logger: (0, import_pino.default)(g(i2({}, r3.opts), { level: "trace", browser: g(i2({}, (t = r3.opts) == null ? void 0 : t.browser), { write: (a3) => o5.write(a3) }) })), chunkLoggerController: o5 };
}
function I(r3) {
  var e2;
  const t = new B((e2 = r3.opts) == null ? void 0 : e2.level, r3.maxSizeInBytes);
  return { logger: (0, import_pino.default)(g(i2({}, r3.opts), { level: "trace" }), t), chunkLoggerController: t };
}
function A(r3) {
  return typeof r3.loggerOverride < "u" && typeof r3.loggerOverride != "string" ? { logger: r3.loggerOverride, chunkLoggerController: null } : typeof window < "u" ? C(r3) : I(r3);
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/types/dist/index.es.js
var import_events4 = __toESM(require_events());
var a2 = Object.defineProperty;
var u = (e2, s3, r3) => s3 in e2 ? a2(e2, s3, { enumerable: true, configurable: true, writable: true, value: r3 }) : e2[s3] = r3;
var c3 = (e2, s3, r3) => u(e2, typeof s3 != "symbol" ? s3 + "" : s3, r3);
var h3 = class extends IEvents {
  constructor(s3) {
    super(), this.opts = s3, c3(this, "protocol", "wc"), c3(this, "version", 2);
  }
};
var p2 = Object.defineProperty;
var b2 = (e2, s3, r3) => s3 in e2 ? p2(e2, s3, { enumerable: true, configurable: true, writable: true, value: r3 }) : e2[s3] = r3;
var v2 = (e2, s3, r3) => b2(e2, typeof s3 != "symbol" ? s3 + "" : s3, r3);
var I2 = class extends IEvents {
  constructor(s3, r3) {
    super(), this.core = s3, this.logger = r3, v2(this, "records", /* @__PURE__ */ new Map());
  }
};
var y3 = class {
  constructor(s3, r3) {
    this.logger = s3, this.core = r3;
  }
};
var m2 = class extends IEvents {
  constructor(s3, r3) {
    super(), this.relayer = s3, this.logger = r3;
  }
};
var d2 = class extends IEvents {
  constructor(s3) {
    super();
  }
};
var f2 = class {
  constructor(s3, r3, t, q2) {
    this.core = s3, this.logger = r3, this.name = t;
  }
};
var P = class extends IEvents {
  constructor(s3, r3) {
    super(), this.relayer = s3, this.logger = r3;
  }
};
var S2 = class extends IEvents {
  constructor(s3, r3) {
    super(), this.core = s3, this.logger = r3;
  }
};
var M = class {
  constructor(s3, r3, t) {
    this.core = s3, this.logger = r3, this.store = t;
  }
};
var O3 = class {
  constructor(s3, r3) {
    this.projectId = s3, this.logger = r3;
  }
};
var R = class {
  constructor(s3, r3, t) {
    this.core = s3, this.logger = r3, this.telemetryEnabled = t;
  }
};
var T2 = Object.defineProperty;
var k3 = (e2, s3, r3) => s3 in e2 ? T2(e2, s3, { enumerable: true, configurable: true, writable: true, value: r3 }) : e2[s3] = r3;
var i3 = (e2, s3, r3) => k3(e2, typeof s3 != "symbol" ? s3 + "" : s3, r3);
var J = class {
  constructor(s3) {
    this.opts = s3, i3(this, "protocol", "wc"), i3(this, "version", 2);
  }
};
var V = class {
  constructor(s3) {
    this.client = s3;
  }
};

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/core/dist/index.es.js
var import_time5 = __toESM(require_cjs());

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/relay-auth/dist/index.es.js
var import_time2 = __toESM(require_cjs());
function En(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function fe(t, ...e2) {
  if (!En(t)) throw new Error("Uint8Array expected");
  if (e2.length > 0 && !e2.includes(t.length)) throw new Error("Uint8Array expected of length " + e2 + ", got length=" + t.length);
}
function De(t, e2 = true) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e2 && t.finished) throw new Error("Hash#digest() has already been called");
}
function gn(t, e2) {
  fe(t);
  const n5 = e2.outputLen;
  if (t.length < n5) throw new Error("digestInto() expects output buffer of length at least " + n5);
}
var it = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
var _t = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength);
function yn(t) {
  if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
  return new Uint8Array(new TextEncoder().encode(t));
}
function de(t) {
  return typeof t == "string" && (t = yn(t)), fe(t), t;
}
var xn = class {
  clone() {
    return this._cloneInto();
  }
};
function Bn(t) {
  const e2 = (r3) => t().update(de(r3)).digest(), n5 = t();
  return e2.outputLen = n5.outputLen, e2.blockLen = n5.blockLen, e2.create = () => t(), e2;
}
function he(t = 32) {
  if (it && typeof it.getRandomValues == "function") return it.getRandomValues(new Uint8Array(t));
  if (it && typeof it.randomBytes == "function") return it.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
function Cn(t, e2, n5, r3) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e2, n5, r3);
  const o5 = BigInt(32), s3 = BigInt(4294967295), a3 = Number(n5 >> o5 & s3), u3 = Number(n5 & s3), i4 = r3 ? 4 : 0, D4 = r3 ? 0 : 4;
  t.setUint32(e2 + i4, a3, r3), t.setUint32(e2 + D4, u3, r3);
}
var An = class extends xn {
  constructor(e2, n5, r3, o5) {
    super(), this.blockLen = e2, this.outputLen = n5, this.padOffset = r3, this.isLE = o5, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(e2), this.view = _t(this.buffer);
  }
  update(e2) {
    De(this);
    const { view: n5, buffer: r3, blockLen: o5 } = this;
    e2 = de(e2);
    const s3 = e2.length;
    for (let a3 = 0; a3 < s3; ) {
      const u3 = Math.min(o5 - this.pos, s3 - a3);
      if (u3 === o5) {
        const i4 = _t(e2);
        for (; o5 <= s3 - a3; a3 += o5) this.process(i4, a3);
        continue;
      }
      r3.set(e2.subarray(a3, a3 + u3), this.pos), this.pos += u3, a3 += u3, this.pos === o5 && (this.process(n5, 0), this.pos = 0);
    }
    return this.length += e2.length, this.roundClean(), this;
  }
  digestInto(e2) {
    De(this), gn(e2, this), this.finished = true;
    const { buffer: n5, view: r3, blockLen: o5, isLE: s3 } = this;
    let { pos: a3 } = this;
    n5[a3++] = 128, this.buffer.subarray(a3).fill(0), this.padOffset > o5 - a3 && (this.process(r3, 0), a3 = 0);
    for (let l8 = a3; l8 < o5; l8++) n5[l8] = 0;
    Cn(r3, o5 - 8, BigInt(this.length * 8), s3), this.process(r3, 0);
    const u3 = _t(e2), i4 = this.outputLen;
    if (i4 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const D4 = i4 / 4, c7 = this.get();
    if (D4 > c7.length) throw new Error("_sha2: outputLen bigger than state");
    for (let l8 = 0; l8 < D4; l8++) u3.setUint32(4 * l8, c7[l8], s3);
  }
  digest() {
    const { buffer: e2, outputLen: n5 } = this;
    this.digestInto(e2);
    const r3 = e2.slice(0, n5);
    return this.destroy(), r3;
  }
  _cloneInto(e2) {
    e2 || (e2 = new this.constructor()), e2.set(...this.get());
    const { blockLen: n5, buffer: r3, length: o5, finished: s3, destroyed: a3, pos: u3 } = this;
    return e2.length = o5, e2.pos = u3, e2.finished = s3, e2.destroyed = a3, o5 % n5 && e2.buffer.set(r3), e2;
  }
};
var wt = BigInt(2 ** 32 - 1);
var St = BigInt(32);
function le(t, e2 = false) {
  return e2 ? { h: Number(t & wt), l: Number(t >> St & wt) } : { h: Number(t >> St & wt) | 0, l: Number(t & wt) | 0 };
}
function mn(t, e2 = false) {
  let n5 = new Uint32Array(t.length), r3 = new Uint32Array(t.length);
  for (let o5 = 0; o5 < t.length; o5++) {
    const { h: s3, l: a3 } = le(t[o5], e2);
    [n5[o5], r3[o5]] = [s3, a3];
  }
  return [n5, r3];
}
var _n = (t, e2) => BigInt(t >>> 0) << St | BigInt(e2 >>> 0);
var Sn = (t, e2, n5) => t >>> n5;
var vn = (t, e2, n5) => t << 32 - n5 | e2 >>> n5;
var In = (t, e2, n5) => t >>> n5 | e2 << 32 - n5;
var Un = (t, e2, n5) => t << 32 - n5 | e2 >>> n5;
var Tn = (t, e2, n5) => t << 64 - n5 | e2 >>> n5 - 32;
var Fn = (t, e2, n5) => t >>> n5 - 32 | e2 << 64 - n5;
var Nn = (t, e2) => e2;
var Ln = (t, e2) => t;
var On = (t, e2, n5) => t << n5 | e2 >>> 32 - n5;
var Hn = (t, e2, n5) => e2 << n5 | t >>> 32 - n5;
var zn = (t, e2, n5) => e2 << n5 - 32 | t >>> 64 - n5;
var Mn = (t, e2, n5) => t << n5 - 32 | e2 >>> 64 - n5;
function qn(t, e2, n5, r3) {
  const o5 = (e2 >>> 0) + (r3 >>> 0);
  return { h: t + n5 + (o5 / 2 ** 32 | 0) | 0, l: o5 | 0 };
}
var $n = (t, e2, n5) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0);
var kn = (t, e2, n5, r3) => e2 + n5 + r3 + (t / 2 ** 32 | 0) | 0;
var Rn = (t, e2, n5, r3) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0) + (r3 >>> 0);
var jn = (t, e2, n5, r3, o5) => e2 + n5 + r3 + o5 + (t / 2 ** 32 | 0) | 0;
var Zn = (t, e2, n5, r3, o5) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0) + (r3 >>> 0) + (o5 >>> 0);
var Gn = (t, e2, n5, r3, o5, s3) => e2 + n5 + r3 + o5 + s3 + (t / 2 ** 32 | 0) | 0;
var x3 = { fromBig: le, split: mn, toBig: _n, shrSH: Sn, shrSL: vn, rotrSH: In, rotrSL: Un, rotrBH: Tn, rotrBL: Fn, rotr32H: Nn, rotr32L: Ln, rotlSH: On, rotlSL: Hn, rotlBH: zn, rotlBL: Mn, add: qn, add3L: $n, add3H: kn, add4L: Rn, add4H: jn, add5H: Gn, add5L: Zn };
var [Vn, Yn] = (() => x3.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t) => BigInt(t))))();
var P2 = new Uint32Array(80);
var Q = new Uint32Array(80);
var Jn = class extends An {
  constructor() {
    super(128, 64, 16, false), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  get() {
    const { Ah: e2, Al: n5, Bh: r3, Bl: o5, Ch: s3, Cl: a3, Dh: u3, Dl: i4, Eh: D4, El: c7, Fh: l8, Fl: p5, Gh: w5, Gl: h6, Hh: g4, Hl: S5 } = this;
    return [e2, n5, r3, o5, s3, a3, u3, i4, D4, c7, l8, p5, w5, h6, g4, S5];
  }
  set(e2, n5, r3, o5, s3, a3, u3, i4, D4, c7, l8, p5, w5, h6, g4, S5) {
    this.Ah = e2 | 0, this.Al = n5 | 0, this.Bh = r3 | 0, this.Bl = o5 | 0, this.Ch = s3 | 0, this.Cl = a3 | 0, this.Dh = u3 | 0, this.Dl = i4 | 0, this.Eh = D4 | 0, this.El = c7 | 0, this.Fh = l8 | 0, this.Fl = p5 | 0, this.Gh = w5 | 0, this.Gl = h6 | 0, this.Hh = g4 | 0, this.Hl = S5 | 0;
  }
  process(e2, n5) {
    for (let d5 = 0; d5 < 16; d5++, n5 += 4) P2[d5] = e2.getUint32(n5), Q[d5] = e2.getUint32(n5 += 4);
    for (let d5 = 16; d5 < 80; d5++) {
      const m4 = P2[d5 - 15] | 0, F3 = Q[d5 - 15] | 0, q2 = x3.rotrSH(m4, F3, 1) ^ x3.rotrSH(m4, F3, 8) ^ x3.shrSH(m4, F3, 7), z4 = x3.rotrSL(m4, F3, 1) ^ x3.rotrSL(m4, F3, 8) ^ x3.shrSL(m4, F3, 7), I5 = P2[d5 - 2] | 0, O7 = Q[d5 - 2] | 0, ot3 = x3.rotrSH(I5, O7, 19) ^ x3.rotrBH(I5, O7, 61) ^ x3.shrSH(I5, O7, 6), tt3 = x3.rotrSL(I5, O7, 19) ^ x3.rotrBL(I5, O7, 61) ^ x3.shrSL(I5, O7, 6), st = x3.add4L(z4, tt3, Q[d5 - 7], Q[d5 - 16]), at3 = x3.add4H(st, q2, ot3, P2[d5 - 7], P2[d5 - 16]);
      P2[d5] = at3 | 0, Q[d5] = st | 0;
    }
    let { Ah: r3, Al: o5, Bh: s3, Bl: a3, Ch: u3, Cl: i4, Dh: D4, Dl: c7, Eh: l8, El: p5, Fh: w5, Fl: h6, Gh: g4, Gl: S5, Hh: v6, Hl: L5 } = this;
    for (let d5 = 0; d5 < 80; d5++) {
      const m4 = x3.rotrSH(l8, p5, 14) ^ x3.rotrSH(l8, p5, 18) ^ x3.rotrBH(l8, p5, 41), F3 = x3.rotrSL(l8, p5, 14) ^ x3.rotrSL(l8, p5, 18) ^ x3.rotrBL(l8, p5, 41), q2 = l8 & w5 ^ ~l8 & g4, z4 = p5 & h6 ^ ~p5 & S5, I5 = x3.add5L(L5, F3, z4, Yn[d5], Q[d5]), O7 = x3.add5H(I5, v6, m4, q2, Vn[d5], P2[d5]), ot3 = I5 | 0, tt3 = x3.rotrSH(r3, o5, 28) ^ x3.rotrBH(r3, o5, 34) ^ x3.rotrBH(r3, o5, 39), st = x3.rotrSL(r3, o5, 28) ^ x3.rotrBL(r3, o5, 34) ^ x3.rotrBL(r3, o5, 39), at3 = r3 & s3 ^ r3 & u3 ^ s3 & u3, Ct4 = o5 & a3 ^ o5 & i4 ^ a3 & i4;
      v6 = g4 | 0, L5 = S5 | 0, g4 = w5 | 0, S5 = h6 | 0, w5 = l8 | 0, h6 = p5 | 0, { h: l8, l: p5 } = x3.add(D4 | 0, c7 | 0, O7 | 0, ot3 | 0), D4 = u3 | 0, c7 = i4 | 0, u3 = s3 | 0, i4 = a3 | 0, s3 = r3 | 0, a3 = o5 | 0;
      const At4 = x3.add3L(ot3, st, Ct4);
      r3 = x3.add3H(At4, O7, tt3, at3), o5 = At4 | 0;
    }
    ({ h: r3, l: o5 } = x3.add(this.Ah | 0, this.Al | 0, r3 | 0, o5 | 0)), { h: s3, l: a3 } = x3.add(this.Bh | 0, this.Bl | 0, s3 | 0, a3 | 0), { h: u3, l: i4 } = x3.add(this.Ch | 0, this.Cl | 0, u3 | 0, i4 | 0), { h: D4, l: c7 } = x3.add(this.Dh | 0, this.Dl | 0, D4 | 0, c7 | 0), { h: l8, l: p5 } = x3.add(this.Eh | 0, this.El | 0, l8 | 0, p5 | 0), { h: w5, l: h6 } = x3.add(this.Fh | 0, this.Fl | 0, w5 | 0, h6 | 0), { h: g4, l: S5 } = x3.add(this.Gh | 0, this.Gl | 0, g4 | 0, S5 | 0), { h: v6, l: L5 } = x3.add(this.Hh | 0, this.Hl | 0, v6 | 0, L5 | 0), this.set(r3, o5, s3, a3, u3, i4, D4, c7, l8, p5, w5, h6, g4, S5, v6, L5);
  }
  roundClean() {
    P2.fill(0), Q.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var Kn = Bn(() => new Jn());
var vt = BigInt(0);
var be = BigInt(1);
var Wn = BigInt(2);
function It(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Ut(t) {
  if (!It(t)) throw new Error("Uint8Array expected");
}
function Tt(t, e2) {
  if (typeof e2 != "boolean") throw new Error(t + " boolean expected, got " + e2);
}
var Xn = Array.from({ length: 256 }, (t, e2) => e2.toString(16).padStart(2, "0"));
function Ft(t) {
  Ut(t);
  let e2 = "";
  for (let n5 = 0; n5 < t.length; n5++) e2 += Xn[t[n5]];
  return e2;
}
function pe(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? vt : BigInt("0x" + t);
}
var K2 = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function we(t) {
  if (t >= K2._0 && t <= K2._9) return t - K2._0;
  if (t >= K2.A && t <= K2.F) return t - (K2.A - 10);
  if (t >= K2.a && t <= K2.f) return t - (K2.a - 10);
}
function Ee(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  const e2 = t.length, n5 = e2 / 2;
  if (e2 % 2) throw new Error("hex string expected, got unpadded hex of length " + e2);
  const r3 = new Uint8Array(n5);
  for (let o5 = 0, s3 = 0; o5 < n5; o5++, s3 += 2) {
    const a3 = we(t.charCodeAt(s3)), u3 = we(t.charCodeAt(s3 + 1));
    if (a3 === void 0 || u3 === void 0) {
      const i4 = t[s3] + t[s3 + 1];
      throw new Error('hex string expected, got non-hex character "' + i4 + '" at index ' + s3);
    }
    r3[o5] = a3 * 16 + u3;
  }
  return r3;
}
function Pn(t) {
  return pe(Ft(t));
}
function Et(t) {
  return Ut(t), pe(Ft(Uint8Array.from(t).reverse()));
}
function ge(t, e2) {
  return Ee(t.toString(16).padStart(e2 * 2, "0"));
}
function Nt(t, e2) {
  return ge(t, e2).reverse();
}
function W(t, e2, n5) {
  let r3;
  if (typeof e2 == "string") try {
    r3 = Ee(e2);
  } catch (s3) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + s3);
  }
  else if (It(e2)) r3 = Uint8Array.from(e2);
  else throw new Error(t + " must be hex string or Uint8Array");
  const o5 = r3.length;
  if (typeof n5 == "number" && o5 !== n5) throw new Error(t + " of length " + n5 + " expected, got " + o5);
  return r3;
}
function ye(...t) {
  let e2 = 0;
  for (let r3 = 0; r3 < t.length; r3++) {
    const o5 = t[r3];
    Ut(o5), e2 += o5.length;
  }
  const n5 = new Uint8Array(e2);
  for (let r3 = 0, o5 = 0; r3 < t.length; r3++) {
    const s3 = t[r3];
    n5.set(s3, o5), o5 += s3.length;
  }
  return n5;
}
var Lt = (t) => typeof t == "bigint" && vt <= t;
function Qn(t, e2, n5) {
  return Lt(t) && Lt(e2) && Lt(n5) && e2 <= t && t < n5;
}
function ft(t, e2, n5, r3) {
  if (!Qn(e2, n5, r3)) throw new Error("expected valid " + t + ": " + n5 + " <= n < " + r3 + ", got " + e2);
}
function tr(t) {
  let e2;
  for (e2 = 0; t > vt; t >>= be, e2 += 1) ;
  return e2;
}
var er = (t) => (Wn << BigInt(t - 1)) - be;
var nr = { bigint: (t) => typeof t == "bigint", function: (t) => typeof t == "function", boolean: (t) => typeof t == "boolean", string: (t) => typeof t == "string", stringOrUint8Array: (t) => typeof t == "string" || It(t), isSafeInteger: (t) => Number.isSafeInteger(t), array: (t) => Array.isArray(t), field: (t, e2) => e2.Fp.isValid(t), hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen) };
function Ot(t, e2, n5 = {}) {
  const r3 = (o5, s3, a3) => {
    const u3 = nr[s3];
    if (typeof u3 != "function") throw new Error("invalid validator function");
    const i4 = t[o5];
    if (!(a3 && i4 === void 0) && !u3(i4, t)) throw new Error("param " + String(o5) + " is invalid. Expected " + s3 + ", got " + i4);
  };
  for (const [o5, s3] of Object.entries(e2)) r3(o5, s3, false);
  for (const [o5, s3] of Object.entries(n5)) r3(o5, s3, true);
  return t;
}
function xe(t) {
  const e2 = /* @__PURE__ */ new WeakMap();
  return (n5, ...r3) => {
    const o5 = e2.get(n5);
    if (o5 !== void 0) return o5;
    const s3 = t(n5, ...r3);
    return e2.set(n5, s3), s3;
  };
}
var M2 = BigInt(0);
var N2 = BigInt(1);
var nt = BigInt(2);
var rr = BigInt(3);
var Ht = BigInt(4);
var Be = BigInt(5);
var Ce = BigInt(8);
function H(t, e2) {
  const n5 = t % e2;
  return n5 >= M2 ? n5 : e2 + n5;
}
function or(t, e2, n5) {
  if (e2 < M2) throw new Error("invalid exponent, negatives unsupported");
  if (n5 <= M2) throw new Error("invalid modulus");
  if (n5 === N2) return M2;
  let r3 = N2;
  for (; e2 > M2; ) e2 & N2 && (r3 = r3 * t % n5), t = t * t % n5, e2 >>= N2;
  return r3;
}
function J2(t, e2, n5) {
  let r3 = t;
  for (; e2-- > M2; ) r3 *= r3, r3 %= n5;
  return r3;
}
function Ae(t, e2) {
  if (t === M2) throw new Error("invert: expected non-zero number");
  if (e2 <= M2) throw new Error("invert: expected positive modulus, got " + e2);
  let n5 = H(t, e2), r3 = e2, o5 = M2, s3 = N2;
  for (; n5 !== M2; ) {
    const u3 = r3 / n5, i4 = r3 % n5, D4 = o5 - s3 * u3;
    r3 = n5, n5 = i4, o5 = s3, s3 = D4;
  }
  if (r3 !== N2) throw new Error("invert: does not exist");
  return H(o5, e2);
}
function sr(t) {
  const e2 = (t - N2) / nt;
  let n5, r3, o5;
  for (n5 = t - N2, r3 = 0; n5 % nt === M2; n5 /= nt, r3++) ;
  for (o5 = nt; o5 < t && or(o5, e2, t) !== t - N2; o5++) if (o5 > 1e3) throw new Error("Cannot find square root: likely non-prime P");
  if (r3 === 1) {
    const a3 = (t + N2) / Ht;
    return function(i4, D4) {
      const c7 = i4.pow(D4, a3);
      if (!i4.eql(i4.sqr(c7), D4)) throw new Error("Cannot find square root");
      return c7;
    };
  }
  const s3 = (n5 + N2) / nt;
  return function(u3, i4) {
    if (u3.pow(i4, e2) === u3.neg(u3.ONE)) throw new Error("Cannot find square root");
    let D4 = r3, c7 = u3.pow(u3.mul(u3.ONE, o5), n5), l8 = u3.pow(i4, s3), p5 = u3.pow(i4, n5);
    for (; !u3.eql(p5, u3.ONE); ) {
      if (u3.eql(p5, u3.ZERO)) return u3.ZERO;
      let w5 = 1;
      for (let g4 = u3.sqr(p5); w5 < D4 && !u3.eql(g4, u3.ONE); w5++) g4 = u3.sqr(g4);
      const h6 = u3.pow(c7, N2 << BigInt(D4 - w5 - 1));
      c7 = u3.sqr(h6), l8 = u3.mul(l8, h6), p5 = u3.mul(p5, c7), D4 = w5;
    }
    return l8;
  };
}
function ir(t) {
  if (t % Ht === rr) {
    const e2 = (t + N2) / Ht;
    return function(r3, o5) {
      const s3 = r3.pow(o5, e2);
      if (!r3.eql(r3.sqr(s3), o5)) throw new Error("Cannot find square root");
      return s3;
    };
  }
  if (t % Ce === Be) {
    const e2 = (t - Be) / Ce;
    return function(r3, o5) {
      const s3 = r3.mul(o5, nt), a3 = r3.pow(s3, e2), u3 = r3.mul(o5, a3), i4 = r3.mul(r3.mul(u3, nt), a3), D4 = r3.mul(u3, r3.sub(i4, r3.ONE));
      if (!r3.eql(r3.sqr(D4), o5)) throw new Error("Cannot find square root");
      return D4;
    };
  }
  return sr(t);
}
var ur = (t, e2) => (H(t, e2) & N2) === N2;
var cr = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function ar(t) {
  const e2 = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }, n5 = cr.reduce((r3, o5) => (r3[o5] = "function", r3), e2);
  return Ot(t, n5);
}
function fr(t, e2, n5) {
  if (n5 < M2) throw new Error("invalid exponent, negatives unsupported");
  if (n5 === M2) return t.ONE;
  if (n5 === N2) return e2;
  let r3 = t.ONE, o5 = e2;
  for (; n5 > M2; ) n5 & N2 && (r3 = t.mul(r3, o5)), o5 = t.sqr(o5), n5 >>= N2;
  return r3;
}
function Dr(t, e2) {
  const n5 = new Array(e2.length), r3 = e2.reduce((s3, a3, u3) => t.is0(a3) ? s3 : (n5[u3] = s3, t.mul(s3, a3)), t.ONE), o5 = t.inv(r3);
  return e2.reduceRight((s3, a3, u3) => t.is0(a3) ? s3 : (n5[u3] = t.mul(s3, n5[u3]), t.mul(s3, a3)), o5), n5;
}
function me(t, e2) {
  const n5 = e2 !== void 0 ? e2 : t.toString(2).length, r3 = Math.ceil(n5 / 8);
  return { nBitLength: n5, nByteLength: r3 };
}
function _e(t, e2, n5 = false, r3 = {}) {
  if (t <= M2) throw new Error("invalid field: expected ORDER > 0, got " + t);
  const { nBitLength: o5, nByteLength: s3 } = me(t, e2);
  if (s3 > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let a3;
  const u3 = Object.freeze({ ORDER: t, isLE: n5, BITS: o5, BYTES: s3, MASK: er(o5), ZERO: M2, ONE: N2, create: (i4) => H(i4, t), isValid: (i4) => {
    if (typeof i4 != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof i4);
    return M2 <= i4 && i4 < t;
  }, is0: (i4) => i4 === M2, isOdd: (i4) => (i4 & N2) === N2, neg: (i4) => H(-i4, t), eql: (i4, D4) => i4 === D4, sqr: (i4) => H(i4 * i4, t), add: (i4, D4) => H(i4 + D4, t), sub: (i4, D4) => H(i4 - D4, t), mul: (i4, D4) => H(i4 * D4, t), pow: (i4, D4) => fr(u3, i4, D4), div: (i4, D4) => H(i4 * Ae(D4, t), t), sqrN: (i4) => i4 * i4, addN: (i4, D4) => i4 + D4, subN: (i4, D4) => i4 - D4, mulN: (i4, D4) => i4 * D4, inv: (i4) => Ae(i4, t), sqrt: r3.sqrt || ((i4) => (a3 || (a3 = ir(t)), a3(u3, i4))), invertBatch: (i4) => Dr(u3, i4), cmov: (i4, D4, c7) => c7 ? D4 : i4, toBytes: (i4) => n5 ? Nt(i4, s3) : ge(i4, s3), fromBytes: (i4) => {
    if (i4.length !== s3) throw new Error("Field.fromBytes: expected " + s3 + " bytes, got " + i4.length);
    return n5 ? Et(i4) : Pn(i4);
  } });
  return Object.freeze(u3);
}
var Se = BigInt(0);
var gt = BigInt(1);
function zt(t, e2) {
  const n5 = e2.negate();
  return t ? n5 : e2;
}
function ve(t, e2) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e2) throw new Error("invalid window size, expected [1.." + e2 + "], got W=" + t);
}
function Mt(t, e2) {
  ve(t, e2);
  const n5 = Math.ceil(e2 / t) + 1, r3 = 2 ** (t - 1);
  return { windows: n5, windowSize: r3 };
}
function dr(t, e2) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((n5, r3) => {
    if (!(n5 instanceof e2)) throw new Error("invalid point at index " + r3);
  });
}
function hr(t, e2) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((n5, r3) => {
    if (!e2.isValid(n5)) throw new Error("invalid scalar at index " + r3);
  });
}
var qt = /* @__PURE__ */ new WeakMap();
var Ie = /* @__PURE__ */ new WeakMap();
function $t(t) {
  return Ie.get(t) || 1;
}
function lr(t, e2) {
  return { constTimeNegate: zt, hasPrecomputes(n5) {
    return $t(n5) !== 1;
  }, unsafeLadder(n5, r3, o5 = t.ZERO) {
    let s3 = n5;
    for (; r3 > Se; ) r3 & gt && (o5 = o5.add(s3)), s3 = s3.double(), r3 >>= gt;
    return o5;
  }, precomputeWindow(n5, r3) {
    const { windows: o5, windowSize: s3 } = Mt(r3, e2), a3 = [];
    let u3 = n5, i4 = u3;
    for (let D4 = 0; D4 < o5; D4++) {
      i4 = u3, a3.push(i4);
      for (let c7 = 1; c7 < s3; c7++) i4 = i4.add(u3), a3.push(i4);
      u3 = i4.double();
    }
    return a3;
  }, wNAF(n5, r3, o5) {
    const { windows: s3, windowSize: a3 } = Mt(n5, e2);
    let u3 = t.ZERO, i4 = t.BASE;
    const D4 = BigInt(2 ** n5 - 1), c7 = 2 ** n5, l8 = BigInt(n5);
    for (let p5 = 0; p5 < s3; p5++) {
      const w5 = p5 * a3;
      let h6 = Number(o5 & D4);
      o5 >>= l8, h6 > a3 && (h6 -= c7, o5 += gt);
      const g4 = w5, S5 = w5 + Math.abs(h6) - 1, v6 = p5 % 2 !== 0, L5 = h6 < 0;
      h6 === 0 ? i4 = i4.add(zt(v6, r3[g4])) : u3 = u3.add(zt(L5, r3[S5]));
    }
    return { p: u3, f: i4 };
  }, wNAFUnsafe(n5, r3, o5, s3 = t.ZERO) {
    const { windows: a3, windowSize: u3 } = Mt(n5, e2), i4 = BigInt(2 ** n5 - 1), D4 = 2 ** n5, c7 = BigInt(n5);
    for (let l8 = 0; l8 < a3; l8++) {
      const p5 = l8 * u3;
      if (o5 === Se) break;
      let w5 = Number(o5 & i4);
      if (o5 >>= c7, w5 > u3 && (w5 -= D4, o5 += gt), w5 === 0) continue;
      let h6 = r3[p5 + Math.abs(w5) - 1];
      w5 < 0 && (h6 = h6.negate()), s3 = s3.add(h6);
    }
    return s3;
  }, getPrecomputes(n5, r3, o5) {
    let s3 = qt.get(r3);
    return s3 || (s3 = this.precomputeWindow(r3, n5), n5 !== 1 && qt.set(r3, o5(s3))), s3;
  }, wNAFCached(n5, r3, o5) {
    const s3 = $t(n5);
    return this.wNAF(s3, this.getPrecomputes(s3, n5, o5), r3);
  }, wNAFCachedUnsafe(n5, r3, o5, s3) {
    const a3 = $t(n5);
    return a3 === 1 ? this.unsafeLadder(n5, r3, s3) : this.wNAFUnsafe(a3, this.getPrecomputes(a3, n5, o5), r3, s3);
  }, setWindowSize(n5, r3) {
    ve(r3, e2), Ie.set(n5, r3), qt.delete(n5);
  } };
}
function br(t, e2, n5, r3) {
  if (dr(n5, t), hr(r3, e2), n5.length !== r3.length) throw new Error("arrays of points and scalars must have equal length");
  const o5 = t.ZERO, s3 = tr(BigInt(n5.length)), a3 = s3 > 12 ? s3 - 3 : s3 > 4 ? s3 - 2 : s3 ? 2 : 1, u3 = (1 << a3) - 1, i4 = new Array(u3 + 1).fill(o5), D4 = Math.floor((e2.BITS - 1) / a3) * a3;
  let c7 = o5;
  for (let l8 = D4; l8 >= 0; l8 -= a3) {
    i4.fill(o5);
    for (let w5 = 0; w5 < r3.length; w5++) {
      const h6 = r3[w5], g4 = Number(h6 >> BigInt(l8) & BigInt(u3));
      i4[g4] = i4[g4].add(n5[w5]);
    }
    let p5 = o5;
    for (let w5 = i4.length - 1, h6 = o5; w5 > 0; w5--) h6 = h6.add(i4[w5]), p5 = p5.add(h6);
    if (c7 = c7.add(p5), l8 !== 0) for (let w5 = 0; w5 < a3; w5++) c7 = c7.double();
  }
  return c7;
}
function pr(t) {
  return ar(t.Fp), Ot(t, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...me(t.n, t.nBitLength), ...t, p: t.Fp.ORDER });
}
var G = BigInt(0);
var j2 = BigInt(1);
var yt = BigInt(2);
var wr = BigInt(8);
var Er = { zip215: true };
function gr(t) {
  const e2 = pr(t);
  return Ot(t, { hash: "function", a: "bigint", d: "bigint", randomBytes: "function" }, { adjustScalarBytes: "function", domain: "function", uvRatio: "function", mapToCurve: "function" }), Object.freeze({ ...e2 });
}
function yr(t) {
  const e2 = gr(t), { Fp: n5, n: r3, prehash: o5, hash: s3, randomBytes: a3, nByteLength: u3, h: i4 } = e2, D4 = yt << BigInt(u3 * 8) - j2, c7 = n5.create, l8 = _e(e2.n, e2.nBitLength), p5 = e2.uvRatio || ((y6, f8) => {
    try {
      return { isValid: true, value: n5.sqrt(y6 * n5.inv(f8)) };
    } catch {
      return { isValid: false, value: G };
    }
  }), w5 = e2.adjustScalarBytes || ((y6) => y6), h6 = e2.domain || ((y6, f8, b5) => {
    if (Tt("phflag", b5), f8.length || b5) throw new Error("Contexts/pre-hash are not supported");
    return y6;
  });
  function g4(y6, f8) {
    ft("coordinate " + y6, f8, G, D4);
  }
  function S5(y6) {
    if (!(y6 instanceof d5)) throw new Error("ExtendedPoint expected");
  }
  const v6 = xe((y6, f8) => {
    const { ex: b5, ey: E6, ez: B4 } = y6, C5 = y6.is0();
    f8 == null && (f8 = C5 ? wr : n5.inv(B4));
    const A5 = c7(b5 * f8), U4 = c7(E6 * f8), _3 = c7(B4 * f8);
    if (C5) return { x: G, y: j2 };
    if (_3 !== j2) throw new Error("invZ was invalid");
    return { x: A5, y: U4 };
  }), L5 = xe((y6) => {
    const { a: f8, d: b5 } = e2;
    if (y6.is0()) throw new Error("bad point: ZERO");
    const { ex: E6, ey: B4, ez: C5, et: A5 } = y6, U4 = c7(E6 * E6), _3 = c7(B4 * B4), T5 = c7(C5 * C5), $4 = c7(T5 * T5), R4 = c7(U4 * f8), V4 = c7(T5 * c7(R4 + _3)), Y4 = c7($4 + c7(b5 * c7(U4 * _3)));
    if (V4 !== Y4) throw new Error("bad point: equation left != right (1)");
    const Z3 = c7(E6 * B4), X4 = c7(C5 * A5);
    if (Z3 !== X4) throw new Error("bad point: equation left != right (2)");
    return true;
  });
  class d5 {
    constructor(f8, b5, E6, B4) {
      this.ex = f8, this.ey = b5, this.ez = E6, this.et = B4, g4("x", f8), g4("y", b5), g4("z", E6), g4("t", B4), Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(f8) {
      if (f8 instanceof d5) throw new Error("extended point not allowed");
      const { x: b5, y: E6 } = f8 || {};
      return g4("x", b5), g4("y", E6), new d5(b5, E6, j2, c7(b5 * E6));
    }
    static normalizeZ(f8) {
      const b5 = n5.invertBatch(f8.map((E6) => E6.ez));
      return f8.map((E6, B4) => E6.toAffine(b5[B4])).map(d5.fromAffine);
    }
    static msm(f8, b5) {
      return br(d5, l8, f8, b5);
    }
    _setWindowSize(f8) {
      q2.setWindowSize(this, f8);
    }
    assertValidity() {
      L5(this);
    }
    equals(f8) {
      S5(f8);
      const { ex: b5, ey: E6, ez: B4 } = this, { ex: C5, ey: A5, ez: U4 } = f8, _3 = c7(b5 * U4), T5 = c7(C5 * B4), $4 = c7(E6 * U4), R4 = c7(A5 * B4);
      return _3 === T5 && $4 === R4;
    }
    is0() {
      return this.equals(d5.ZERO);
    }
    negate() {
      return new d5(c7(-this.ex), this.ey, this.ez, c7(-this.et));
    }
    double() {
      const { a: f8 } = e2, { ex: b5, ey: E6, ez: B4 } = this, C5 = c7(b5 * b5), A5 = c7(E6 * E6), U4 = c7(yt * c7(B4 * B4)), _3 = c7(f8 * C5), T5 = b5 + E6, $4 = c7(c7(T5 * T5) - C5 - A5), R4 = _3 + A5, V4 = R4 - U4, Y4 = _3 - A5, Z3 = c7($4 * V4), X4 = c7(R4 * Y4), et = c7($4 * Y4), pt4 = c7(V4 * R4);
      return new d5(Z3, X4, pt4, et);
    }
    add(f8) {
      S5(f8);
      const { a: b5, d: E6 } = e2, { ex: B4, ey: C5, ez: A5, et: U4 } = this, { ex: _3, ey: T5, ez: $4, et: R4 } = f8;
      if (b5 === BigInt(-1)) {
        const re3 = c7((C5 - B4) * (T5 + _3)), oe2 = c7((C5 + B4) * (T5 - _3)), mt4 = c7(oe2 - re3);
        if (mt4 === G) return this.double();
        const se4 = c7(A5 * yt * R4), ie4 = c7(U4 * yt * $4), ue4 = ie4 + se4, ce4 = oe2 + re3, ae4 = ie4 - se4, Dn3 = c7(ue4 * mt4), dn3 = c7(ce4 * ae4), hn3 = c7(ue4 * ae4), ln3 = c7(mt4 * ce4);
        return new d5(Dn3, dn3, ln3, hn3);
      }
      const V4 = c7(B4 * _3), Y4 = c7(C5 * T5), Z3 = c7(U4 * E6 * R4), X4 = c7(A5 * $4), et = c7((B4 + C5) * (_3 + T5) - V4 - Y4), pt4 = X4 - Z3, ee4 = X4 + Z3, ne4 = c7(Y4 - b5 * V4), un3 = c7(et * pt4), cn3 = c7(ee4 * ne4), an3 = c7(et * ne4), fn3 = c7(pt4 * ee4);
      return new d5(un3, cn3, fn3, an3);
    }
    subtract(f8) {
      return this.add(f8.negate());
    }
    wNAF(f8) {
      return q2.wNAFCached(this, f8, d5.normalizeZ);
    }
    multiply(f8) {
      const b5 = f8;
      ft("scalar", b5, j2, r3);
      const { p: E6, f: B4 } = this.wNAF(b5);
      return d5.normalizeZ([E6, B4])[0];
    }
    multiplyUnsafe(f8, b5 = d5.ZERO) {
      const E6 = f8;
      return ft("scalar", E6, G, r3), E6 === G ? F3 : this.is0() || E6 === j2 ? this : q2.wNAFCachedUnsafe(this, E6, d5.normalizeZ, b5);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(i4).is0();
    }
    isTorsionFree() {
      return q2.unsafeLadder(this, r3).is0();
    }
    toAffine(f8) {
      return v6(this, f8);
    }
    clearCofactor() {
      const { h: f8 } = e2;
      return f8 === j2 ? this : this.multiplyUnsafe(f8);
    }
    static fromHex(f8, b5 = false) {
      const { d: E6, a: B4 } = e2, C5 = n5.BYTES;
      f8 = W("pointHex", f8, C5), Tt("zip215", b5);
      const A5 = f8.slice(), U4 = f8[C5 - 1];
      A5[C5 - 1] = U4 & -129;
      const _3 = Et(A5), T5 = b5 ? D4 : n5.ORDER;
      ft("pointHex.y", _3, G, T5);
      const $4 = c7(_3 * _3), R4 = c7($4 - j2), V4 = c7(E6 * $4 - B4);
      let { isValid: Y4, value: Z3 } = p5(R4, V4);
      if (!Y4) throw new Error("Point.fromHex: invalid y coordinate");
      const X4 = (Z3 & j2) === j2, et = (U4 & 128) !== 0;
      if (!b5 && Z3 === G && et) throw new Error("Point.fromHex: x=0 and x_0=1");
      return et !== X4 && (Z3 = c7(-Z3)), d5.fromAffine({ x: Z3, y: _3 });
    }
    static fromPrivateKey(f8) {
      return O7(f8).point;
    }
    toRawBytes() {
      const { x: f8, y: b5 } = this.toAffine(), E6 = Nt(b5, n5.BYTES);
      return E6[E6.length - 1] |= f8 & j2 ? 128 : 0, E6;
    }
    toHex() {
      return Ft(this.toRawBytes());
    }
  }
  d5.BASE = new d5(e2.Gx, e2.Gy, j2, c7(e2.Gx * e2.Gy)), d5.ZERO = new d5(G, j2, j2, G);
  const { BASE: m4, ZERO: F3 } = d5, q2 = lr(d5, u3 * 8);
  function z4(y6) {
    return H(y6, r3);
  }
  function I5(y6) {
    return z4(Et(y6));
  }
  function O7(y6) {
    const f8 = n5.BYTES;
    y6 = W("private key", y6, f8);
    const b5 = W("hashed private key", s3(y6), 2 * f8), E6 = w5(b5.slice(0, f8)), B4 = b5.slice(f8, 2 * f8), C5 = I5(E6), A5 = m4.multiply(C5), U4 = A5.toRawBytes();
    return { head: E6, prefix: B4, scalar: C5, point: A5, pointBytes: U4 };
  }
  function ot3(y6) {
    return O7(y6).pointBytes;
  }
  function tt3(y6 = new Uint8Array(), ...f8) {
    const b5 = ye(...f8);
    return I5(s3(h6(b5, W("context", y6), !!o5)));
  }
  function st(y6, f8, b5 = {}) {
    y6 = W("message", y6), o5 && (y6 = o5(y6));
    const { prefix: E6, scalar: B4, pointBytes: C5 } = O7(f8), A5 = tt3(b5.context, E6, y6), U4 = m4.multiply(A5).toRawBytes(), _3 = tt3(b5.context, U4, C5, y6), T5 = z4(A5 + _3 * B4);
    ft("signature.s", T5, G, r3);
    const $4 = ye(U4, Nt(T5, n5.BYTES));
    return W("result", $4, n5.BYTES * 2);
  }
  const at3 = Er;
  function Ct4(y6, f8, b5, E6 = at3) {
    const { context: B4, zip215: C5 } = E6, A5 = n5.BYTES;
    y6 = W("signature", y6, 2 * A5), f8 = W("message", f8), b5 = W("publicKey", b5, A5), C5 !== void 0 && Tt("zip215", C5), o5 && (f8 = o5(f8));
    const U4 = Et(y6.slice(A5, 2 * A5));
    let _3, T5, $4;
    try {
      _3 = d5.fromHex(b5, C5), T5 = d5.fromHex(y6.slice(0, A5), C5), $4 = m4.multiplyUnsafe(U4);
    } catch {
      return false;
    }
    if (!C5 && _3.isSmallOrder()) return false;
    const R4 = tt3(B4, T5.toRawBytes(), _3.toRawBytes(), f8);
    return T5.add(_3.multiplyUnsafe(R4)).subtract($4).clearCofactor().equals(d5.ZERO);
  }
  return m4._setWindowSize(8), { CURVE: e2, getPublicKey: ot3, sign: st, verify: Ct4, ExtendedPoint: d5, utils: { getExtendedPublicKey: O7, randomPrivateKey: () => a3(n5.BYTES), precompute(y6 = 8, f8 = d5.BASE) {
    return f8._setWindowSize(y6), f8.multiply(BigInt(3)), f8;
  } } };
}
BigInt(0), BigInt(1);
var kt = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
var Ue = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
var xr = BigInt(1);
var Te = BigInt(2);
BigInt(3);
var Br = BigInt(5);
var Cr = BigInt(8);
function Ar(t) {
  const e2 = BigInt(10), n5 = BigInt(20), r3 = BigInt(40), o5 = BigInt(80), s3 = kt, u3 = t * t % s3 * t % s3, i4 = J2(u3, Te, s3) * u3 % s3, D4 = J2(i4, xr, s3) * t % s3, c7 = J2(D4, Br, s3) * D4 % s3, l8 = J2(c7, e2, s3) * c7 % s3, p5 = J2(l8, n5, s3) * l8 % s3, w5 = J2(p5, r3, s3) * p5 % s3, h6 = J2(w5, o5, s3) * w5 % s3, g4 = J2(h6, o5, s3) * w5 % s3, S5 = J2(g4, e2, s3) * c7 % s3;
  return { pow_p_5_8: J2(S5, Te, s3) * t % s3, b2: u3 };
}
function mr(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function _r(t, e2) {
  const n5 = kt, r3 = H(e2 * e2 * e2, n5), o5 = H(r3 * r3 * e2, n5), s3 = Ar(t * o5).pow_p_5_8;
  let a3 = H(t * r3 * s3, n5);
  const u3 = H(e2 * a3 * a3, n5), i4 = a3, D4 = H(a3 * Ue, n5), c7 = u3 === t, l8 = u3 === H(-t, n5), p5 = u3 === H(-t * Ue, n5);
  return c7 && (a3 = i4), (l8 || p5) && (a3 = D4), ur(a3, n5) && (a3 = H(-a3, n5)), { isValid: c7 || l8, value: a3 };
}
var Sr = (() => _e(kt, void 0, true))();
var vr = (() => ({ a: BigInt(-1), d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"), Fp: Sr, n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), h: Cr, Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"), Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"), hash: Kn, randomBytes: he, adjustScalarBytes: mr, uvRatio: _r }))();
var Rt = (() => yr(vr))();
var jt = "EdDSA";
var Zt = "JWT";
var ut = ".";
var Dt = "base64url";
var Gt = "utf8";
var xt = "utf8";
var Vt = ":";
var Yt = "did";
var Jt = "key";
var dt = "base58btc";
var Kt = "z";
var Wt = "K36";
var Ne = 32;
function Xt(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Le(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Xt(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Oe(t, e2) {
  e2 || (e2 = t.reduce((o5, s3) => o5 + s3.length, 0));
  const n5 = Le(e2);
  let r3 = 0;
  for (const o5 of t) n5.set(o5, r3), r3 += o5.length;
  return Xt(n5);
}
function Ir(t, e2) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  for (var n5 = new Uint8Array(256), r3 = 0; r3 < n5.length; r3++) n5[r3] = 255;
  for (var o5 = 0; o5 < t.length; o5++) {
    var s3 = t.charAt(o5), a3 = s3.charCodeAt(0);
    if (n5[a3] !== 255) throw new TypeError(s3 + " is ambiguous");
    n5[a3] = o5;
  }
  var u3 = t.length, i4 = t.charAt(0), D4 = Math.log(u3) / Math.log(256), c7 = Math.log(256) / Math.log(u3);
  function l8(h6) {
    if (h6 instanceof Uint8Array || (ArrayBuffer.isView(h6) ? h6 = new Uint8Array(h6.buffer, h6.byteOffset, h6.byteLength) : Array.isArray(h6) && (h6 = Uint8Array.from(h6))), !(h6 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (h6.length === 0) return "";
    for (var g4 = 0, S5 = 0, v6 = 0, L5 = h6.length; v6 !== L5 && h6[v6] === 0; ) v6++, g4++;
    for (var d5 = (L5 - v6) * c7 + 1 >>> 0, m4 = new Uint8Array(d5); v6 !== L5; ) {
      for (var F3 = h6[v6], q2 = 0, z4 = d5 - 1; (F3 !== 0 || q2 < S5) && z4 !== -1; z4--, q2++) F3 += 256 * m4[z4] >>> 0, m4[z4] = F3 % u3 >>> 0, F3 = F3 / u3 >>> 0;
      if (F3 !== 0) throw new Error("Non-zero carry");
      S5 = q2, v6++;
    }
    for (var I5 = d5 - S5; I5 !== d5 && m4[I5] === 0; ) I5++;
    for (var O7 = i4.repeat(g4); I5 < d5; ++I5) O7 += t.charAt(m4[I5]);
    return O7;
  }
  function p5(h6) {
    if (typeof h6 != "string") throw new TypeError("Expected String");
    if (h6.length === 0) return new Uint8Array();
    var g4 = 0;
    if (h6[g4] !== " ") {
      for (var S5 = 0, v6 = 0; h6[g4] === i4; ) S5++, g4++;
      for (var L5 = (h6.length - g4) * D4 + 1 >>> 0, d5 = new Uint8Array(L5); h6[g4]; ) {
        var m4 = n5[h6.charCodeAt(g4)];
        if (m4 === 255) return;
        for (var F3 = 0, q2 = L5 - 1; (m4 !== 0 || F3 < v6) && q2 !== -1; q2--, F3++) m4 += u3 * d5[q2] >>> 0, d5[q2] = m4 % 256 >>> 0, m4 = m4 / 256 >>> 0;
        if (m4 !== 0) throw new Error("Non-zero carry");
        v6 = F3, g4++;
      }
      if (h6[g4] !== " ") {
        for (var z4 = L5 - v6; z4 !== L5 && d5[z4] === 0; ) z4++;
        for (var I5 = new Uint8Array(S5 + (L5 - z4)), O7 = S5; z4 !== L5; ) I5[O7++] = d5[z4++];
        return I5;
      }
    }
  }
  function w5(h6) {
    var g4 = p5(h6);
    if (g4) return g4;
    throw new Error(`Non-${e2} character`);
  }
  return { encode: l8, decodeUnsafe: p5, decode: w5 };
}
var Ur = Ir;
var Tr = Ur;
var He = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
  if (t instanceof ArrayBuffer) return new Uint8Array(t);
  if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var Fr = (t) => new TextEncoder().encode(t);
var Nr = (t) => new TextDecoder().decode(t);
var Lr = class {
  constructor(e2, n5, r3) {
    this.name = e2, this.prefix = n5, this.baseEncode = r3;
  }
  encode(e2) {
    if (e2 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e2)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var Or = class {
  constructor(e2, n5, r3) {
    if (this.name = e2, this.prefix = n5, n5.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = n5.codePointAt(0), this.baseDecode = r3;
  }
  decode(e2) {
    if (typeof e2 == "string") {
      if (e2.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e2)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e2.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e2) {
    return ze(this, e2);
  }
};
var Hr = class {
  constructor(e2) {
    this.decoders = e2;
  }
  or(e2) {
    return ze(this, e2);
  }
  decode(e2) {
    const n5 = e2[0], r3 = this.decoders[n5];
    if (r3) return r3.decode(e2);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e2)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var ze = (t, e2) => new Hr({ ...t.decoders || { [t.prefix]: t }, ...e2.decoders || { [e2.prefix]: e2 } });
var zr = class {
  constructor(e2, n5, r3, o5) {
    this.name = e2, this.prefix = n5, this.baseEncode = r3, this.baseDecode = o5, this.encoder = new Lr(e2, n5, r3), this.decoder = new Or(e2, n5, o5);
  }
  encode(e2) {
    return this.encoder.encode(e2);
  }
  decode(e2) {
    return this.decoder.decode(e2);
  }
};
var Bt = ({ name: t, prefix: e2, encode: n5, decode: r3 }) => new zr(t, e2, n5, r3);
var ht = ({ prefix: t, name: e2, alphabet: n5 }) => {
  const { encode: r3, decode: o5 } = Tr(n5, e2);
  return Bt({ prefix: t, name: e2, encode: r3, decode: (s3) => He(o5(s3)) });
};
var Mr = (t, e2, n5, r3) => {
  const o5 = {};
  for (let c7 = 0; c7 < e2.length; ++c7) o5[e2[c7]] = c7;
  let s3 = t.length;
  for (; t[s3 - 1] === "="; ) --s3;
  const a3 = new Uint8Array(s3 * n5 / 8 | 0);
  let u3 = 0, i4 = 0, D4 = 0;
  for (let c7 = 0; c7 < s3; ++c7) {
    const l8 = o5[t[c7]];
    if (l8 === void 0) throw new SyntaxError(`Non-${r3} character`);
    i4 = i4 << n5 | l8, u3 += n5, u3 >= 8 && (u3 -= 8, a3[D4++] = 255 & i4 >> u3);
  }
  if (u3 >= n5 || 255 & i4 << 8 - u3) throw new SyntaxError("Unexpected end of data");
  return a3;
};
var qr = (t, e2, n5) => {
  const r3 = e2[e2.length - 1] === "=", o5 = (1 << n5) - 1;
  let s3 = "", a3 = 0, u3 = 0;
  for (let i4 = 0; i4 < t.length; ++i4) for (u3 = u3 << 8 | t[i4], a3 += 8; a3 > n5; ) a3 -= n5, s3 += e2[o5 & u3 >> a3];
  if (a3 && (s3 += e2[o5 & u3 << n5 - a3]), r3) for (; s3.length * n5 & 7; ) s3 += "=";
  return s3;
};
var k4 = ({ name: t, prefix: e2, bitsPerChar: n5, alphabet: r3 }) => Bt({ prefix: e2, name: t, encode(o5) {
  return qr(o5, r3, n5);
}, decode(o5) {
  return Mr(o5, r3, n5, t);
} });
var $r = Bt({ prefix: "\0", name: "identity", encode: (t) => Nr(t), decode: (t) => Fr(t) });
var kr = Object.freeze({ __proto__: null, identity: $r });
var Rr = k4({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var jr = Object.freeze({ __proto__: null, base2: Rr });
var Zr = k4({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Gr = Object.freeze({ __proto__: null, base8: Zr });
var Vr = ht({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Yr = Object.freeze({ __proto__: null, base10: Vr });
var Jr = k4({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
var Kr = k4({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Wr = Object.freeze({ __proto__: null, base16: Jr, base16upper: Kr });
var Xr = k4({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
var Pr = k4({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
var Qr = k4({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
var to = k4({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
var eo = k4({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
var no = k4({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
var ro = k4({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
var oo = k4({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
var so = k4({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var io = Object.freeze({ __proto__: null, base32: Xr, base32upper: Pr, base32pad: Qr, base32padupper: to, base32hex: eo, base32hexupper: no, base32hexpad: ro, base32hexpadupper: oo, base32z: so });
var uo = ht({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
var co = ht({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var ao = Object.freeze({ __proto__: null, base36: uo, base36upper: co });
var fo = ht({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
var Do = ht({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var ho = Object.freeze({ __proto__: null, base58btc: fo, base58flickr: Do });
var lo = k4({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
var bo = k4({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
var po = k4({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
var wo = k4({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Eo = Object.freeze({ __proto__: null, base64: lo, base64pad: bo, base64url: po, base64urlpad: wo });
var Me = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}");
var go = Me.reduce((t, e2, n5) => (t[n5] = e2, t), []);
var yo = Me.reduce((t, e2, n5) => (t[e2.codePointAt(0)] = n5, t), []);
function xo(t) {
  return t.reduce((e2, n5) => (e2 += go[n5], e2), "");
}
function Bo(t) {
  const e2 = [];
  for (const n5 of t) {
    const r3 = yo[n5.codePointAt(0)];
    if (r3 === void 0) throw new Error(`Non-base256emoji character: ${n5}`);
    e2.push(r3);
  }
  return new Uint8Array(e2);
}
var Co = Bt({ prefix: "\u{1F680}", name: "base256emoji", encode: xo, decode: Bo });
var Ao = Object.freeze({ __proto__: null, base256emoji: Co });
var mo = $e;
var qe = 128;
var _o = 127;
var So = ~_o;
var vo = Math.pow(2, 31);
function $e(t, e2, n5) {
  e2 = e2 || [], n5 = n5 || 0;
  for (var r3 = n5; t >= vo; ) e2[n5++] = t & 255 | qe, t /= 128;
  for (; t & So; ) e2[n5++] = t & 255 | qe, t >>>= 7;
  return e2[n5] = t | 0, $e.bytes = n5 - r3 + 1, e2;
}
var Io = Pt;
var Uo = 128;
var ke = 127;
function Pt(t, r3) {
  var n5 = 0, r3 = r3 || 0, o5 = 0, s3 = r3, a3, u3 = t.length;
  do {
    if (s3 >= u3) throw Pt.bytes = 0, new RangeError("Could not decode varint");
    a3 = t[s3++], n5 += o5 < 28 ? (a3 & ke) << o5 : (a3 & ke) * Math.pow(2, o5), o5 += 7;
  } while (a3 >= Uo);
  return Pt.bytes = s3 - r3, n5;
}
var To = Math.pow(2, 7);
var Fo = Math.pow(2, 14);
var No = Math.pow(2, 21);
var Lo = Math.pow(2, 28);
var Oo = Math.pow(2, 35);
var Ho = Math.pow(2, 42);
var zo = Math.pow(2, 49);
var Mo = Math.pow(2, 56);
var qo = Math.pow(2, 63);
var $o = function(t) {
  return t < To ? 1 : t < Fo ? 2 : t < No ? 3 : t < Lo ? 4 : t < Oo ? 5 : t < Ho ? 6 : t < zo ? 7 : t < Mo ? 8 : t < qo ? 9 : 10;
};
var ko = { encode: mo, decode: Io, encodingLength: $o };
var Re = ko;
var je = (t, e2, n5 = 0) => (Re.encode(t, e2, n5), e2);
var Ze = (t) => Re.encodingLength(t);
var Qt = (t, e2) => {
  const n5 = e2.byteLength, r3 = Ze(t), o5 = r3 + Ze(n5), s3 = new Uint8Array(o5 + n5);
  return je(t, s3, 0), je(n5, s3, r3), s3.set(e2, o5), new Ro(t, n5, e2, s3);
};
var Ro = class {
  constructor(e2, n5, r3, o5) {
    this.code = e2, this.size = n5, this.digest = r3, this.bytes = o5;
  }
};
var Ge = ({ name: t, code: e2, encode: n5 }) => new jo(t, e2, n5);
var jo = class {
  constructor(e2, n5, r3) {
    this.name = e2, this.code = n5, this.encode = r3;
  }
  digest(e2) {
    if (e2 instanceof Uint8Array) {
      const n5 = this.encode(e2);
      return n5 instanceof Uint8Array ? Qt(this.code, n5) : n5.then((r3) => Qt(this.code, r3));
    } else throw Error("Unknown type, must be binary type");
  }
};
var Ve = (t) => async (e2) => new Uint8Array(await crypto.subtle.digest(t, e2));
var Zo = Ge({ name: "sha2-256", code: 18, encode: Ve("SHA-256") });
var Go = Ge({ name: "sha2-512", code: 19, encode: Ve("SHA-512") });
var Vo = Object.freeze({ __proto__: null, sha256: Zo, sha512: Go });
var Ye = 0;
var Yo = "identity";
var Je = He;
var Jo = (t) => Qt(Ye, Je(t));
var Ko = { code: Ye, name: Yo, encode: Je, digest: Jo };
var Wo = Object.freeze({ __proto__: null, identity: Ko });
new TextEncoder(), new TextDecoder();
var Ke = { ...kr, ...jr, ...Gr, ...Yr, ...Wr, ...io, ...ao, ...ho, ...Eo, ...Ao };
({ ...Vo, ...Wo });
function We(t, e2, n5, r3) {
  return { name: t, prefix: e2, encoder: { name: t, prefix: e2, encode: n5 }, decoder: { decode: r3 } };
}
var Xe = We("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1)));
var te = We("ascii", "a", (t) => {
  let e2 = "a";
  for (let n5 = 0; n5 < t.length; n5++) e2 += String.fromCharCode(t[n5]);
  return e2;
}, (t) => {
  t = t.substring(1);
  const e2 = Le(t.length);
  for (let n5 = 0; n5 < t.length; n5++) e2[n5] = t.charCodeAt(n5);
  return e2;
});
var Pe = { utf8: Xe, "utf-8": Xe, hex: Ke.base16, latin1: te, ascii: te, binary: te, ...Ke };
function ct(t, e2 = "utf8") {
  const n5 = Pe[e2];
  if (!n5) throw new Error(`Unsupported encoding "${e2}"`);
  return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : n5.encoder.encode(t).substring(1);
}
function rt(t, e2 = "utf8") {
  const n5 = Pe[e2];
  if (!n5) throw new Error(`Unsupported encoding "${e2}"`);
  return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Xt(globalThis.Buffer.from(t, "utf-8")) : n5.decoder.decode(`${n5.prefix}${t}`);
}
function lt(t) {
  return safeJsonParse(ct(rt(t, Dt), Gt));
}
function bt(t) {
  return ct(rt(safeJsonStringify(t), Gt), Dt);
}
function Qe(t) {
  const e2 = rt(Wt, dt), n5 = Kt + ct(Oe([e2, t]), dt);
  return [Yt, Jt, n5].join(Vt);
}
function en(t) {
  return ct(t, Dt);
}
function nn(t) {
  return rt(t, Dt);
}
function rn(t) {
  return rt([bt(t.header), bt(t.payload)].join(ut), xt);
}
function on(t) {
  return [bt(t.header), bt(t.payload), en(t.signature)].join(ut);
}
function sn(t) {
  const e2 = t.split(ut), n5 = lt(e2[0]), r3 = lt(e2[1]), o5 = nn(e2[2]), s3 = rt(e2.slice(0, 2).join(ut), xt);
  return { header: n5, payload: r3, signature: o5, data: s3 };
}
function Po(t = he(Ne)) {
  const e2 = Rt.getPublicKey(t);
  return { secretKey: Oe([t, e2]), publicKey: e2 };
}
async function Qo(t, e2, n5, r3, o5 = (0, import_time2.fromMiliseconds)(Date.now())) {
  const s3 = { alg: jt, typ: Zt }, a3 = Qe(r3.publicKey), u3 = o5 + n5, i4 = { iss: a3, sub: t, aud: e2, iat: o5, exp: u3 }, D4 = rn({ header: s3, payload: i4 }), c7 = Rt.sign(D4, r3.secretKey.slice(0, 32));
  return on({ header: s3, payload: i4, signature: c7 });
}

// ../../../../../private/tmp/wc-vendor/node_modules/detect-browser/es/index.js
var __spreadArray = function(to5, from3, pack) {
  if (pack || arguments.length === 2) for (var i4 = 0, l8 = from3.length, ar4; i4 < l8; i4++) {
    if (ar4 || !(i4 in from3)) {
      if (!ar4) ar4 = Array.prototype.slice.call(from3, 0, i4);
      ar4[i4] = from3[i4];
    }
  }
  return to5.concat(ar4 || Array.prototype.slice.call(from3));
};
var BrowserInfo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function BrowserInfo2(name2, version3, os2) {
      this.name = name2;
      this.version = version3;
      this.os = os2;
      this.type = "browser";
    }
    return BrowserInfo2;
  })()
);
var NodeInfo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function NodeInfo2(version3) {
      this.version = version3;
      this.type = "node";
      this.name = "node";
      this.os = process.platform;
    }
    return NodeInfo2;
  })()
);
var SearchBotDeviceInfo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function SearchBotDeviceInfo2(name2, version3, os2, bot) {
      this.name = name2;
      this.version = version3;
      this.os = os2;
      this.bot = bot;
      this.type = "bot-device";
    }
    return SearchBotDeviceInfo2;
  })()
);
var BotInfo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function BotInfo2() {
      this.type = "bot";
      this.bot = true;
      this.name = "bot";
      this.version = null;
      this.os = null;
    }
    return BotInfo2;
  })()
);
var ReactNativeInfo = (
  /** @class */
  /* @__PURE__ */ (function() {
    function ReactNativeInfo2() {
      this.type = "react-native";
      this.name = "react-native";
      this.version = null;
      this.os = null;
    }
    return ReactNativeInfo2;
  })()
);
var SEARCHBOX_UA_REGEX = /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/;
var SEARCHBOT_OS_REGEX = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/;
var REQUIRED_VERSION_PARTS = 3;
var userAgentRules = [
  ["aol", /AOLShield\/([0-9\._]+)/],
  ["edge", /Edge\/([0-9\._]+)/],
  ["edge-ios", /EdgiOS\/([0-9\._]+)/],
  ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
  ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
  ["samsung", /SamsungBrowser\/([0-9\.]+)/],
  ["silk", /\bSilk\/([0-9._-]+)\b/],
  ["miui", /MiuiBrowser\/([0-9\.]+)$/],
  ["beaker", /BeakerBrowser\/([0-9\.]+)/],
  ["edge-chromium", /EdgA?\/([0-9\.]+)/],
  [
    "chromium-webview",
    /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/
  ],
  ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
  ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
  ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
  ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
  ["fxios", /FxiOS\/([0-9\.]+)/],
  ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
  ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
  ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
  ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
  ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
  ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
  ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
  ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
  ["ie", /MSIE\s(7\.0)/],
  ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
  ["android", /Android\s([0-9\.]+)/],
  ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
  ["safari", /Version\/([0-9\._]+).*Safari/],
  ["facebook", /FB[AS]V\/([0-9\.]+)/],
  ["instagram", /Instagram\s([0-9\.]+)/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
  ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
  ["curl", /^curl\/([0-9\.]+)$/],
  ["searchbot", SEARCHBOX_UA_REGEX]
];
var operatingSystemRules = [
  ["iOS", /iP(hone|od|ad)/],
  ["Android OS", /Android/],
  ["BlackBerry OS", /BlackBerry|BB10/],
  ["Windows Mobile", /IEMobile/],
  ["Amazon OS", /Kindle/],
  ["Windows 3.11", /Win16/],
  ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
  ["Windows 98", /(Windows 98)|(Win98)/],
  ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
  ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
  ["Windows Server 2003", /(Windows NT 5.2)/],
  ["Windows Vista", /(Windows NT 6.0)/],
  ["Windows 7", /(Windows NT 6.1)/],
  ["Windows 8", /(Windows NT 6.2)/],
  ["Windows 8.1", /(Windows NT 6.3)/],
  ["Windows 10", /(Windows NT 10.0)/],
  ["Windows ME", /Windows ME/],
  ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
  ["Open BSD", /OpenBSD/],
  ["Sun OS", /SunOS/],
  ["Chrome OS", /CrOS/],
  ["Linux", /(Linux)|(X11)/],
  ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
  ["QNX", /QNX/],
  ["BeOS", /BeOS/],
  ["OS/2", /OS\/2/]
];
function detect(userAgent) {
  if (!!userAgent) {
    return parseUserAgent(userAgent);
  }
  if (typeof document === "undefined" && typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return new ReactNativeInfo();
  }
  if (typeof navigator !== "undefined") {
    return parseUserAgent(navigator.userAgent);
  }
  return getNodeVersion();
}
function matchUserAgent(ua2) {
  return ua2 !== "" && userAgentRules.reduce(function(matched, _a2) {
    var browser = _a2[0], regex = _a2[1];
    if (matched) {
      return matched;
    }
    var uaMatch = regex.exec(ua2);
    return !!uaMatch && [browser, uaMatch];
  }, false);
}
function parseUserAgent(ua2) {
  var matchedRule = matchUserAgent(ua2);
  if (!matchedRule) {
    return null;
  }
  var name2 = matchedRule[0], match = matchedRule[1];
  if (name2 === "searchbot") {
    return new BotInfo();
  }
  var versionParts = match[1] && match[1].split(".").join("_").split("_").slice(0, 3);
  if (versionParts) {
    if (versionParts.length < REQUIRED_VERSION_PARTS) {
      versionParts = __spreadArray(__spreadArray([], versionParts, true), createVersionParts(REQUIRED_VERSION_PARTS - versionParts.length), true);
    }
  } else {
    versionParts = [];
  }
  var version3 = versionParts.join(".");
  var os2 = detectOS(ua2);
  var searchBotMatch = SEARCHBOT_OS_REGEX.exec(ua2);
  if (searchBotMatch && searchBotMatch[1]) {
    return new SearchBotDeviceInfo(name2, version3, os2, searchBotMatch[1]);
  }
  return new BrowserInfo(name2, version3, os2);
}
function detectOS(ua2) {
  for (var ii4 = 0, count = operatingSystemRules.length; ii4 < count; ii4++) {
    var _a2 = operatingSystemRules[ii4], os2 = _a2[0], regex = _a2[1];
    var match = regex.exec(ua2);
    if (match) {
      return os2;
    }
  }
  return null;
}
function getNodeVersion() {
  var isNode2 = typeof process !== "undefined" && process.version;
  return isNode2 ? new NodeInfo(process.version.slice(1)) : null;
}
function createVersionParts(count) {
  var output = [];
  for (var ii4 = 0; ii4 < count; ii4++) {
    output.push("0");
  }
  return output;
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/dist/index.es.js
var import_time4 = __toESM(require_cjs2());
var import_window_getters = __toESM(require_cjs3());
var import_window_metadata = __toESM(require_cjs4());

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/accounts/utils/publicKeyToAddress.js
init_getAddress();
init_keccak256();
function publicKeyToAddress(publicKey) {
  const address = keccak256(`0x${publicKey.substring(4)}`).substring(26);
  return checksumAddress(`0x${address}`);
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/signature/recoverPublicKey.js
init_isHex();
init_size();
init_fromHex();
init_toHex();
async function recoverPublicKey({ hash, signature }) {
  const hashHex = isHex(hash) ? hash : toHex(hash);
  const { secp256k1: secp256k12 } = await Promise.resolve().then(() => (init_secp256k1(), secp256k1_exports));
  const signature_ = (() => {
    if (typeof signature === "object" && "r" in signature && "s" in signature) {
      const { r: r3, s: s3, v: v6, yParity } = signature;
      const yParityOrV2 = Number(yParity ?? v6);
      const recoveryBit2 = toRecoveryBit(yParityOrV2);
      return new secp256k12.Signature(hexToBigInt(r3), hexToBigInt(s3)).addRecoveryBit(recoveryBit2);
    }
    const signatureHex = isHex(signature) ? signature : toHex(signature);
    if (size(signatureHex) !== 65)
      throw new Error("invalid signature length");
    const yParityOrV = hexToNumber(`0x${signatureHex.slice(130)}`);
    const recoveryBit = toRecoveryBit(yParityOrV);
    return secp256k12.Signature.fromCompact(signatureHex.substring(2, 130)).addRecoveryBit(recoveryBit);
  })();
  const publicKey = signature_.recoverPublicKey(hashHex.substring(2)).toHex(false);
  return `0x${publicKey}`;
}
function toRecoveryBit(yParityOrV) {
  if (yParityOrV === 0 || yParityOrV === 1)
    return yParityOrV;
  if (yParityOrV === 27)
    return 0;
  if (yParityOrV === 28)
    return 1;
  throw new Error("Invalid yParityOrV value");
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/viem/_esm/utils/signature/recoverAddress.js
async function recoverAddress({ hash, signature }) {
  return publicKeyToAddress(await recoverPublicKey({ hash, signature }));
}

// ../../../../../private/tmp/wc-vendor/node_modules/base-x/src/esm/index.js
function base(ALPHABET2) {
  if (ALPHABET2.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  const BASE_MAP = new Uint8Array(256);
  for (let j6 = 0; j6 < BASE_MAP.length; j6++) {
    BASE_MAP[j6] = 255;
  }
  for (let i4 = 0; i4 < ALPHABET2.length; i4++) {
    const x7 = ALPHABET2.charAt(i4);
    const xc2 = x7.charCodeAt(0);
    if (BASE_MAP[xc2] !== 255) {
      throw new TypeError(x7 + " is ambiguous");
    }
    BASE_MAP[xc2] = i4;
  }
  const BASE = ALPHABET2.length;
  const LEADER = ALPHABET2.charAt(0);
  const FACTOR = Math.log(BASE) / Math.log(256);
  const iFACTOR = Math.log(256) / Math.log(BASE);
  function encode6(source) {
    if (source instanceof Uint8Array) {
    } else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    let zeroes = 0;
    let length2 = 0;
    let pbegin = 0;
    const pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    const size2 = (pend - pbegin) * iFACTOR + 1 >>> 0;
    const b58 = new Uint8Array(size2);
    while (pbegin !== pend) {
      let carry = source[pbegin];
      let i4 = 0;
      for (let it1 = size2 - 1; (carry !== 0 || i4 < length2) && it1 !== -1; it1--, i4++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i4;
      pbegin++;
    }
    let it22 = size2 - length2;
    while (it22 !== size2 && b58[it22] === 0) {
      it22++;
    }
    let str = LEADER.repeat(zeroes);
    for (; it22 < size2; ++it22) {
      str += ALPHABET2.charAt(b58[it22]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    let psz = 0;
    let zeroes = 0;
    let length2 = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    const size2 = (source.length - psz) * FACTOR + 1 >>> 0;
    const b256 = new Uint8Array(size2);
    while (psz < source.length) {
      const charCode = source.charCodeAt(psz);
      if (charCode > 255) {
        return;
      }
      let carry = BASE_MAP[charCode];
      if (carry === 255) {
        return;
      }
      let i4 = 0;
      for (let it32 = size2 - 1; (carry !== 0 || i4 < length2) && it32 !== -1; it32--, i4++) {
        carry += BASE * b256[it32] >>> 0;
        b256[it32] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i4;
      psz++;
    }
    let it42 = size2 - length2;
    while (it42 !== size2 && b256[it42] === 0) {
      it42++;
    }
    const vch = new Uint8Array(zeroes + (size2 - it42));
    let j6 = zeroes;
    while (it42 !== size2) {
      vch[j6++] = b256[it42++];
    }
    return vch;
  }
  function decode7(string3) {
    const buffer = decodeUnsafe(string3);
    if (buffer) {
      return buffer;
    }
    throw new Error("Non-base" + BASE + " character");
  }
  return {
    encode: encode6,
    decodeUnsafe,
    decode: decode7
  };
}
var esm_default = base;

// ../../../../../private/tmp/wc-vendor/node_modules/bs58/src/esm/index.js
var ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
var esm_default2 = esm_default(ALPHABET);

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@msgpack/msgpack/dist.esm/utils/utf8.mjs
function utf8Count(str) {
  const strLength = str.length;
  let byteLength = 0;
  let pos = 0;
  while (pos < strLength) {
    let value = str.charCodeAt(pos++);
    if ((value & 4294967168) === 0) {
      byteLength++;
      continue;
    } else if ((value & 4294965248) === 0) {
      byteLength += 2;
    } else {
      if (value >= 55296 && value <= 56319) {
        if (pos < strLength) {
          const extra = str.charCodeAt(pos);
          if ((extra & 64512) === 56320) {
            ++pos;
            value = ((value & 1023) << 10) + (extra & 1023) + 65536;
          }
        }
      }
      if ((value & 4294901760) === 0) {
        byteLength += 3;
      } else {
        byteLength += 4;
      }
    }
  }
  return byteLength;
}
function utf8EncodeJs(str, output, outputOffset) {
  const strLength = str.length;
  let offset = outputOffset;
  let pos = 0;
  while (pos < strLength) {
    let value = str.charCodeAt(pos++);
    if ((value & 4294967168) === 0) {
      output[offset++] = value;
      continue;
    } else if ((value & 4294965248) === 0) {
      output[offset++] = value >> 6 & 31 | 192;
    } else {
      if (value >= 55296 && value <= 56319) {
        if (pos < strLength) {
          const extra = str.charCodeAt(pos);
          if ((extra & 64512) === 56320) {
            ++pos;
            value = ((value & 1023) << 10) + (extra & 1023) + 65536;
          }
        }
      }
      if ((value & 4294901760) === 0) {
        output[offset++] = value >> 12 & 15 | 224;
        output[offset++] = value >> 6 & 63 | 128;
      } else {
        output[offset++] = value >> 18 & 7 | 240;
        output[offset++] = value >> 12 & 63 | 128;
        output[offset++] = value >> 6 & 63 | 128;
      }
    }
    output[offset++] = value & 63 | 128;
  }
}
var sharedTextEncoder = new TextEncoder();
var TEXT_ENCODER_THRESHOLD = 50;
function utf8EncodeTE(str, output, outputOffset) {
  sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
}
function utf8Encode(str, output, outputOffset) {
  if (str.length > TEXT_ENCODER_THRESHOLD) {
    utf8EncodeTE(str, output, outputOffset);
  } else {
    utf8EncodeJs(str, output, outputOffset);
  }
}
var CHUNK_SIZE = 4096;
function utf8DecodeJs(bytes, inputOffset, byteLength) {
  let offset = inputOffset;
  const end = offset + byteLength;
  const units = [];
  let result = "";
  while (offset < end) {
    const byte1 = bytes[offset++];
    if ((byte1 & 128) === 0) {
      units.push(byte1);
    } else if ((byte1 & 224) === 192) {
      const byte2 = bytes[offset++] & 63;
      units.push((byte1 & 31) << 6 | byte2);
    } else if ((byte1 & 240) === 224) {
      const byte2 = bytes[offset++] & 63;
      const byte3 = bytes[offset++] & 63;
      units.push((byte1 & 31) << 12 | byte2 << 6 | byte3);
    } else if ((byte1 & 248) === 240) {
      const byte2 = bytes[offset++] & 63;
      const byte3 = bytes[offset++] & 63;
      const byte4 = bytes[offset++] & 63;
      let unit = (byte1 & 7) << 18 | byte2 << 12 | byte3 << 6 | byte4;
      if (unit > 65535) {
        unit -= 65536;
        units.push(unit >>> 10 & 1023 | 55296);
        unit = 56320 | unit & 1023;
      }
      units.push(unit);
    } else {
      units.push(byte1);
    }
    if (units.length >= CHUNK_SIZE) {
      result += String.fromCharCode(...units);
      units.length = 0;
    }
  }
  if (units.length > 0) {
    result += String.fromCharCode(...units);
  }
  return result;
}
var sharedTextDecoder = new TextDecoder();
var TEXT_DECODER_THRESHOLD = 200;
function utf8DecodeTD(bytes, inputOffset, byteLength) {
  const stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
  return sharedTextDecoder.decode(stringBytes);
}
function utf8Decode(bytes, inputOffset, byteLength) {
  if (byteLength > TEXT_DECODER_THRESHOLD) {
    return utf8DecodeTD(bytes, inputOffset, byteLength);
  } else {
    return utf8DecodeJs(bytes, inputOffset, byteLength);
  }
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@msgpack/msgpack/dist.esm/ExtData.mjs
var ExtData = class {
  constructor(type, data) {
    this.type = type;
    this.data = data;
  }
};

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@msgpack/msgpack/dist.esm/DecodeError.mjs
var DecodeError = class _DecodeError extends Error {
  constructor(message) {
    super(message);
    const proto = Object.create(_DecodeError.prototype);
    Object.setPrototypeOf(this, proto);
    Object.defineProperty(this, "name", {
      configurable: true,
      enumerable: false,
      value: _DecodeError.name
    });
  }
};

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@msgpack/msgpack/dist.esm/utils/int.mjs
var UINT32_MAX = 4294967295;
function setUint64(view, offset, value) {
  const high = value / 4294967296;
  const low = value;
  view.setUint32(offset, high);
  view.setUint32(offset + 4, low);
}
function setInt64(view, offset, value) {
  const high = Math.floor(value / 4294967296);
  const low = value;
  view.setUint32(offset, high);
  view.setUint32(offset + 4, low);
}
function getInt64(view, offset) {
  const high = view.getInt32(offset);
  const low = view.getUint32(offset + 4);
  return high * 4294967296 + low;
}
function getUint64(view, offset) {
  const high = view.getUint32(offset);
  const low = view.getUint32(offset + 4);
  return high * 4294967296 + low;
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@msgpack/msgpack/dist.esm/timestamp.mjs
var EXT_TIMESTAMP = -1;
var TIMESTAMP32_MAX_SEC = 4294967296 - 1;
var TIMESTAMP64_MAX_SEC = 17179869184 - 1;
function encodeTimeSpecToTimestamp({ sec, nsec }) {
  if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) {
    if (nsec === 0 && sec <= TIMESTAMP32_MAX_SEC) {
      const rv = new Uint8Array(4);
      const view = new DataView(rv.buffer);
      view.setUint32(0, sec);
      return rv;
    } else {
      const secHigh = sec / 4294967296;
      const secLow = sec & 4294967295;
      const rv = new Uint8Array(8);
      const view = new DataView(rv.buffer);
      view.setUint32(0, nsec << 2 | secHigh & 3);
      view.setUint32(4, secLow);
      return rv;
    }
  } else {
    const rv = new Uint8Array(12);
    const view = new DataView(rv.buffer);
    view.setUint32(0, nsec);
    setInt64(view, 4, sec);
    return rv;
  }
}
function encodeDateToTimeSpec(date) {
  const msec = date.getTime();
  const sec = Math.floor(msec / 1e3);
  const nsec = (msec - sec * 1e3) * 1e6;
  const nsecInSec = Math.floor(nsec / 1e9);
  return {
    sec: sec + nsecInSec,
    nsec: nsec - nsecInSec * 1e9
  };
}
function encodeTimestampExtension(object) {
  if (object instanceof Date) {
    const timeSpec = encodeDateToTimeSpec(object);
    return encodeTimeSpecToTimestamp(timeSpec);
  } else {
    return null;
  }
}
function decodeTimestampToTimeSpec(data) {
  const view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  switch (data.byteLength) {
    case 4: {
      const sec = view.getUint32(0);
      const nsec = 0;
      return { sec, nsec };
    }
    case 8: {
      const nsec30AndSecHigh2 = view.getUint32(0);
      const secLow32 = view.getUint32(4);
      const sec = (nsec30AndSecHigh2 & 3) * 4294967296 + secLow32;
      const nsec = nsec30AndSecHigh2 >>> 2;
      return { sec, nsec };
    }
    case 12: {
      const sec = getInt64(view, 4);
      const nsec = view.getUint32(0);
      return { sec, nsec };
    }
    default:
      throw new DecodeError(`Unrecognized data size for timestamp (expected 4, 8, or 12): ${data.length}`);
  }
}
function decodeTimestampExtension(data) {
  const timeSpec = decodeTimestampToTimeSpec(data);
  return new Date(timeSpec.sec * 1e3 + timeSpec.nsec / 1e6);
}
var timestampExtension = {
  type: EXT_TIMESTAMP,
  encode: encodeTimestampExtension,
  decode: decodeTimestampExtension
};

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@msgpack/msgpack/dist.esm/ExtensionCodec.mjs
var ExtensionCodec = class {
  constructor() {
    this.builtInEncoders = [];
    this.builtInDecoders = [];
    this.encoders = [];
    this.decoders = [];
    this.register(timestampExtension);
  }
  register({ type, encode: encode6, decode: decode7 }) {
    if (type >= 0) {
      this.encoders[type] = encode6;
      this.decoders[type] = decode7;
    } else {
      const index = -1 - type;
      this.builtInEncoders[index] = encode6;
      this.builtInDecoders[index] = decode7;
    }
  }
  tryToEncode(object, context) {
    for (let i4 = 0; i4 < this.builtInEncoders.length; i4++) {
      const encodeExt = this.builtInEncoders[i4];
      if (encodeExt != null) {
        const data = encodeExt(object, context);
        if (data != null) {
          const type = -1 - i4;
          return new ExtData(type, data);
        }
      }
    }
    for (let i4 = 0; i4 < this.encoders.length; i4++) {
      const encodeExt = this.encoders[i4];
      if (encodeExt != null) {
        const data = encodeExt(object, context);
        if (data != null) {
          const type = i4;
          return new ExtData(type, data);
        }
      }
    }
    if (object instanceof ExtData) {
      return object;
    }
    return null;
  }
  decode(data, type, context) {
    const decodeExt = type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
    if (decodeExt) {
      return decodeExt(data, type, context);
    } else {
      return new ExtData(type, data);
    }
  }
};
ExtensionCodec.defaultCodec = new ExtensionCodec();

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@msgpack/msgpack/dist.esm/utils/typedArrays.mjs
function isArrayBufferLike(buffer) {
  return buffer instanceof ArrayBuffer || typeof SharedArrayBuffer !== "undefined" && buffer instanceof SharedArrayBuffer;
}
function ensureUint8Array(buffer) {
  if (buffer instanceof Uint8Array) {
    return buffer;
  } else if (ArrayBuffer.isView(buffer)) {
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  } else if (isArrayBufferLike(buffer)) {
    return new Uint8Array(buffer);
  } else {
    return Uint8Array.from(buffer);
  }
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@msgpack/msgpack/dist.esm/Encoder.mjs
var DEFAULT_MAX_DEPTH = 100;
var DEFAULT_INITIAL_BUFFER_SIZE = 2048;
var Encoder = class _Encoder {
  constructor(options) {
    this.entered = false;
    this.extensionCodec = options?.extensionCodec ?? ExtensionCodec.defaultCodec;
    this.context = options?.context;
    this.useBigInt64 = options?.useBigInt64 ?? false;
    this.maxDepth = options?.maxDepth ?? DEFAULT_MAX_DEPTH;
    this.initialBufferSize = options?.initialBufferSize ?? DEFAULT_INITIAL_BUFFER_SIZE;
    this.sortKeys = options?.sortKeys ?? false;
    this.forceFloat32 = options?.forceFloat32 ?? false;
    this.ignoreUndefined = options?.ignoreUndefined ?? false;
    this.forceIntegerToFloat = options?.forceIntegerToFloat ?? false;
    this.pos = 0;
    this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
    this.bytes = new Uint8Array(this.view.buffer);
  }
  clone() {
    return new _Encoder({
      extensionCodec: this.extensionCodec,
      context: this.context,
      useBigInt64: this.useBigInt64,
      maxDepth: this.maxDepth,
      initialBufferSize: this.initialBufferSize,
      sortKeys: this.sortKeys,
      forceFloat32: this.forceFloat32,
      ignoreUndefined: this.ignoreUndefined,
      forceIntegerToFloat: this.forceIntegerToFloat
    });
  }
  reinitializeState() {
    this.pos = 0;
  }
  /**
   * This is almost equivalent to {@link Encoder#encode}, but it returns an reference of the encoder's internal buffer and thus much faster than {@link Encoder#encode}.
   *
   * @returns Encodes the object and returns a shared reference the encoder's internal buffer.
   */
  encodeSharedRef(object) {
    if (this.entered) {
      const instance = this.clone();
      return instance.encodeSharedRef(object);
    }
    try {
      this.entered = true;
      this.reinitializeState();
      this.doEncode(object, 1);
      return this.bytes.subarray(0, this.pos);
    } finally {
      this.entered = false;
    }
  }
  /**
   * @returns Encodes the object and returns a copy of the encoder's internal buffer.
   */
  encode(object) {
    if (this.entered) {
      const instance = this.clone();
      return instance.encode(object);
    }
    try {
      this.entered = true;
      this.reinitializeState();
      this.doEncode(object, 1);
      return this.bytes.slice(0, this.pos);
    } finally {
      this.entered = false;
    }
  }
  doEncode(object, depth) {
    if (depth > this.maxDepth) {
      throw new Error(`Too deep objects in depth ${depth}`);
    }
    if (object == null) {
      this.encodeNil();
    } else if (typeof object === "boolean") {
      this.encodeBoolean(object);
    } else if (typeof object === "number") {
      if (!this.forceIntegerToFloat) {
        this.encodeNumber(object);
      } else {
        this.encodeNumberAsFloat(object);
      }
    } else if (typeof object === "string") {
      this.encodeString(object);
    } else if (this.useBigInt64 && typeof object === "bigint") {
      this.encodeBigInt64(object);
    } else {
      this.encodeObject(object, depth);
    }
  }
  ensureBufferSizeToWrite(sizeToWrite) {
    const requiredSize = this.pos + sizeToWrite;
    if (this.view.byteLength < requiredSize) {
      this.resizeBuffer(requiredSize * 2);
    }
  }
  resizeBuffer(newSize) {
    const newBuffer = new ArrayBuffer(newSize);
    const newBytes = new Uint8Array(newBuffer);
    const newView = new DataView(newBuffer);
    newBytes.set(this.bytes);
    this.view = newView;
    this.bytes = newBytes;
  }
  encodeNil() {
    this.writeU8(192);
  }
  encodeBoolean(object) {
    if (object === false) {
      this.writeU8(194);
    } else {
      this.writeU8(195);
    }
  }
  encodeNumber(object) {
    if (!this.forceIntegerToFloat && Number.isSafeInteger(object)) {
      if (object >= 0) {
        if (object < 128) {
          this.writeU8(object);
        } else if (object < 256) {
          this.writeU8(204);
          this.writeU8(object);
        } else if (object < 65536) {
          this.writeU8(205);
          this.writeU16(object);
        } else if (object < 4294967296) {
          this.writeU8(206);
          this.writeU32(object);
        } else if (!this.useBigInt64) {
          this.writeU8(207);
          this.writeU64(object);
        } else {
          this.encodeNumberAsFloat(object);
        }
      } else {
        if (object >= -32) {
          this.writeU8(224 | object + 32);
        } else if (object >= -128) {
          this.writeU8(208);
          this.writeI8(object);
        } else if (object >= -32768) {
          this.writeU8(209);
          this.writeI16(object);
        } else if (object >= -2147483648) {
          this.writeU8(210);
          this.writeI32(object);
        } else if (!this.useBigInt64) {
          this.writeU8(211);
          this.writeI64(object);
        } else {
          this.encodeNumberAsFloat(object);
        }
      }
    } else {
      this.encodeNumberAsFloat(object);
    }
  }
  encodeNumberAsFloat(object) {
    if (this.forceFloat32) {
      this.writeU8(202);
      this.writeF32(object);
    } else {
      this.writeU8(203);
      this.writeF64(object);
    }
  }
  encodeBigInt64(object) {
    if (object >= BigInt(0)) {
      this.writeU8(207);
      this.writeBigUint64(object);
    } else {
      this.writeU8(211);
      this.writeBigInt64(object);
    }
  }
  writeStringHeader(byteLength) {
    if (byteLength < 32) {
      this.writeU8(160 + byteLength);
    } else if (byteLength < 256) {
      this.writeU8(217);
      this.writeU8(byteLength);
    } else if (byteLength < 65536) {
      this.writeU8(218);
      this.writeU16(byteLength);
    } else if (byteLength < 4294967296) {
      this.writeU8(219);
      this.writeU32(byteLength);
    } else {
      throw new Error(`Too long string: ${byteLength} bytes in UTF-8`);
    }
  }
  encodeString(object) {
    const maxHeaderSize = 1 + 4;
    const byteLength = utf8Count(object);
    this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
    this.writeStringHeader(byteLength);
    utf8Encode(object, this.bytes, this.pos);
    this.pos += byteLength;
  }
  encodeObject(object, depth) {
    const ext = this.extensionCodec.tryToEncode(object, this.context);
    if (ext != null) {
      this.encodeExtension(ext);
    } else if (Array.isArray(object)) {
      this.encodeArray(object, depth);
    } else if (ArrayBuffer.isView(object)) {
      this.encodeBinary(object);
    } else if (typeof object === "object") {
      this.encodeMap(object, depth);
    } else {
      throw new Error(`Unrecognized object: ${Object.prototype.toString.apply(object)}`);
    }
  }
  encodeBinary(object) {
    const size2 = object.byteLength;
    if (size2 < 256) {
      this.writeU8(196);
      this.writeU8(size2);
    } else if (size2 < 65536) {
      this.writeU8(197);
      this.writeU16(size2);
    } else if (size2 < 4294967296) {
      this.writeU8(198);
      this.writeU32(size2);
    } else {
      throw new Error(`Too large binary: ${size2}`);
    }
    const bytes = ensureUint8Array(object);
    this.writeU8a(bytes);
  }
  encodeArray(object, depth) {
    const size2 = object.length;
    if (size2 < 16) {
      this.writeU8(144 + size2);
    } else if (size2 < 65536) {
      this.writeU8(220);
      this.writeU16(size2);
    } else if (size2 < 4294967296) {
      this.writeU8(221);
      this.writeU32(size2);
    } else {
      throw new Error(`Too large array: ${size2}`);
    }
    for (const item of object) {
      this.doEncode(item, depth + 1);
    }
  }
  countWithoutUndefined(object, keys2) {
    let count = 0;
    for (const key of keys2) {
      if (object[key] !== void 0) {
        count++;
      }
    }
    return count;
  }
  encodeMap(object, depth) {
    const keys2 = Object.keys(object);
    if (this.sortKeys) {
      keys2.sort();
    }
    const size2 = this.ignoreUndefined ? this.countWithoutUndefined(object, keys2) : keys2.length;
    if (size2 < 16) {
      this.writeU8(128 + size2);
    } else if (size2 < 65536) {
      this.writeU8(222);
      this.writeU16(size2);
    } else if (size2 < 4294967296) {
      this.writeU8(223);
      this.writeU32(size2);
    } else {
      throw new Error(`Too large map object: ${size2}`);
    }
    for (const key of keys2) {
      const value = object[key];
      if (!(this.ignoreUndefined && value === void 0)) {
        this.encodeString(key);
        this.doEncode(value, depth + 1);
      }
    }
  }
  encodeExtension(ext) {
    if (typeof ext.data === "function") {
      const data = ext.data(this.pos + 6);
      const size3 = data.length;
      if (size3 >= 4294967296) {
        throw new Error(`Too large extension object: ${size3}`);
      }
      this.writeU8(201);
      this.writeU32(size3);
      this.writeI8(ext.type);
      this.writeU8a(data);
      return;
    }
    const size2 = ext.data.length;
    if (size2 === 1) {
      this.writeU8(212);
    } else if (size2 === 2) {
      this.writeU8(213);
    } else if (size2 === 4) {
      this.writeU8(214);
    } else if (size2 === 8) {
      this.writeU8(215);
    } else if (size2 === 16) {
      this.writeU8(216);
    } else if (size2 < 256) {
      this.writeU8(199);
      this.writeU8(size2);
    } else if (size2 < 65536) {
      this.writeU8(200);
      this.writeU16(size2);
    } else if (size2 < 4294967296) {
      this.writeU8(201);
      this.writeU32(size2);
    } else {
      throw new Error(`Too large extension object: ${size2}`);
    }
    this.writeI8(ext.type);
    this.writeU8a(ext.data);
  }
  writeU8(value) {
    this.ensureBufferSizeToWrite(1);
    this.view.setUint8(this.pos, value);
    this.pos++;
  }
  writeU8a(values) {
    const size2 = values.length;
    this.ensureBufferSizeToWrite(size2);
    this.bytes.set(values, this.pos);
    this.pos += size2;
  }
  writeI8(value) {
    this.ensureBufferSizeToWrite(1);
    this.view.setInt8(this.pos, value);
    this.pos++;
  }
  writeU16(value) {
    this.ensureBufferSizeToWrite(2);
    this.view.setUint16(this.pos, value);
    this.pos += 2;
  }
  writeI16(value) {
    this.ensureBufferSizeToWrite(2);
    this.view.setInt16(this.pos, value);
    this.pos += 2;
  }
  writeU32(value) {
    this.ensureBufferSizeToWrite(4);
    this.view.setUint32(this.pos, value);
    this.pos += 4;
  }
  writeI32(value) {
    this.ensureBufferSizeToWrite(4);
    this.view.setInt32(this.pos, value);
    this.pos += 4;
  }
  writeF32(value) {
    this.ensureBufferSizeToWrite(4);
    this.view.setFloat32(this.pos, value);
    this.pos += 4;
  }
  writeF64(value) {
    this.ensureBufferSizeToWrite(8);
    this.view.setFloat64(this.pos, value);
    this.pos += 8;
  }
  writeU64(value) {
    this.ensureBufferSizeToWrite(8);
    setUint64(this.view, this.pos, value);
    this.pos += 8;
  }
  writeI64(value) {
    this.ensureBufferSizeToWrite(8);
    setInt64(this.view, this.pos, value);
    this.pos += 8;
  }
  writeBigUint64(value) {
    this.ensureBufferSizeToWrite(8);
    this.view.setBigUint64(this.pos, value);
    this.pos += 8;
  }
  writeBigInt64(value) {
    this.ensureBufferSizeToWrite(8);
    this.view.setBigInt64(this.pos, value);
    this.pos += 8;
  }
};

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@msgpack/msgpack/dist.esm/encode.mjs
function encode(value, options) {
  const encoder3 = new Encoder(options);
  return encoder3.encodeSharedRef(value);
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@msgpack/msgpack/dist.esm/utils/prettyByte.mjs
function prettyByte(byte) {
  return `${byte < 0 ? "-" : ""}0x${Math.abs(byte).toString(16).padStart(2, "0")}`;
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@msgpack/msgpack/dist.esm/CachedKeyDecoder.mjs
var DEFAULT_MAX_KEY_LENGTH = 16;
var DEFAULT_MAX_LENGTH_PER_KEY = 16;
var CachedKeyDecoder = class {
  constructor(maxKeyLength = DEFAULT_MAX_KEY_LENGTH, maxLengthPerKey = DEFAULT_MAX_LENGTH_PER_KEY) {
    this.hit = 0;
    this.miss = 0;
    this.maxKeyLength = maxKeyLength;
    this.maxLengthPerKey = maxLengthPerKey;
    this.caches = [];
    for (let i4 = 0; i4 < this.maxKeyLength; i4++) {
      this.caches.push([]);
    }
  }
  canBeCached(byteLength) {
    return byteLength > 0 && byteLength <= this.maxKeyLength;
  }
  find(bytes, inputOffset, byteLength) {
    const records = this.caches[byteLength - 1];
    FIND_CHUNK: for (const record of records) {
      const recordBytes = record.bytes;
      for (let j6 = 0; j6 < byteLength; j6++) {
        if (recordBytes[j6] !== bytes[inputOffset + j6]) {
          continue FIND_CHUNK;
        }
      }
      return record.str;
    }
    return null;
  }
  store(bytes, value) {
    const records = this.caches[bytes.length - 1];
    const record = { bytes, str: value };
    if (records.length >= this.maxLengthPerKey) {
      records[Math.random() * records.length | 0] = record;
    } else {
      records.push(record);
    }
  }
  decode(bytes, inputOffset, byteLength) {
    const cachedValue = this.find(bytes, inputOffset, byteLength);
    if (cachedValue != null) {
      this.hit++;
      return cachedValue;
    }
    this.miss++;
    const str = utf8DecodeJs(bytes, inputOffset, byteLength);
    const slicedCopyOfBytes = Uint8Array.prototype.slice.call(bytes, inputOffset, inputOffset + byteLength);
    this.store(slicedCopyOfBytes, str);
    return str;
  }
};

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@msgpack/msgpack/dist.esm/Decoder.mjs
var STATE_ARRAY = "array";
var STATE_MAP_KEY = "map_key";
var STATE_MAP_VALUE = "map_value";
var mapKeyConverter = (key) => {
  if (typeof key === "string" || typeof key === "number") {
    return key;
  }
  throw new DecodeError("The type of key must be string or number but " + typeof key);
};
var StackPool = class {
  constructor() {
    this.stack = [];
    this.stackHeadPosition = -1;
  }
  get length() {
    return this.stackHeadPosition + 1;
  }
  top() {
    return this.stack[this.stackHeadPosition];
  }
  pushArrayState(size2) {
    const state = this.getUninitializedStateFromPool();
    state.type = STATE_ARRAY;
    state.position = 0;
    state.size = size2;
    state.array = new Array(size2);
  }
  pushMapState(size2) {
    const state = this.getUninitializedStateFromPool();
    state.type = STATE_MAP_KEY;
    state.readCount = 0;
    state.size = size2;
    state.map = {};
  }
  getUninitializedStateFromPool() {
    this.stackHeadPosition++;
    if (this.stackHeadPosition === this.stack.length) {
      const partialState = {
        type: void 0,
        size: 0,
        array: void 0,
        position: 0,
        readCount: 0,
        map: void 0,
        key: null
      };
      this.stack.push(partialState);
    }
    return this.stack[this.stackHeadPosition];
  }
  release(state) {
    const topStackState = this.stack[this.stackHeadPosition];
    if (topStackState !== state) {
      throw new Error("Invalid stack state. Released state is not on top of the stack.");
    }
    if (state.type === STATE_ARRAY) {
      const partialState = state;
      partialState.size = 0;
      partialState.array = void 0;
      partialState.position = 0;
      partialState.type = void 0;
    }
    if (state.type === STATE_MAP_KEY || state.type === STATE_MAP_VALUE) {
      const partialState = state;
      partialState.size = 0;
      partialState.map = void 0;
      partialState.readCount = 0;
      partialState.type = void 0;
    }
    this.stackHeadPosition--;
  }
  reset() {
    this.stack.length = 0;
    this.stackHeadPosition = -1;
  }
};
var HEAD_BYTE_REQUIRED = -1;
var EMPTY_VIEW = new DataView(new ArrayBuffer(0));
var EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer);
try {
  EMPTY_VIEW.getInt8(0);
} catch (e2) {
  if (!(e2 instanceof RangeError)) {
    throw new Error("This module is not supported in the current JavaScript engine because DataView does not throw RangeError on out-of-bounds access");
  }
}
var MORE_DATA = new RangeError("Insufficient data");
var sharedCachedKeyDecoder = new CachedKeyDecoder();
var Decoder = class _Decoder {
  constructor(options) {
    this.totalPos = 0;
    this.pos = 0;
    this.view = EMPTY_VIEW;
    this.bytes = EMPTY_BYTES;
    this.headByte = HEAD_BYTE_REQUIRED;
    this.stack = new StackPool();
    this.entered = false;
    this.extensionCodec = options?.extensionCodec ?? ExtensionCodec.defaultCodec;
    this.context = options?.context;
    this.useBigInt64 = options?.useBigInt64 ?? false;
    this.rawStrings = options?.rawStrings ?? false;
    this.maxStrLength = options?.maxStrLength ?? UINT32_MAX;
    this.maxBinLength = options?.maxBinLength ?? UINT32_MAX;
    this.maxArrayLength = options?.maxArrayLength ?? UINT32_MAX;
    this.maxMapLength = options?.maxMapLength ?? UINT32_MAX;
    this.maxExtLength = options?.maxExtLength ?? UINT32_MAX;
    this.keyDecoder = options?.keyDecoder !== void 0 ? options.keyDecoder : sharedCachedKeyDecoder;
    this.mapKeyConverter = options?.mapKeyConverter ?? mapKeyConverter;
  }
  clone() {
    return new _Decoder({
      extensionCodec: this.extensionCodec,
      context: this.context,
      useBigInt64: this.useBigInt64,
      rawStrings: this.rawStrings,
      maxStrLength: this.maxStrLength,
      maxBinLength: this.maxBinLength,
      maxArrayLength: this.maxArrayLength,
      maxMapLength: this.maxMapLength,
      maxExtLength: this.maxExtLength,
      keyDecoder: this.keyDecoder
    });
  }
  reinitializeState() {
    this.totalPos = 0;
    this.headByte = HEAD_BYTE_REQUIRED;
    this.stack.reset();
  }
  setBuffer(buffer) {
    const bytes = ensureUint8Array(buffer);
    this.bytes = bytes;
    this.view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
    this.pos = 0;
  }
  appendBuffer(buffer) {
    if (this.headByte === HEAD_BYTE_REQUIRED && !this.hasRemaining(1)) {
      this.setBuffer(buffer);
    } else {
      const remainingData = this.bytes.subarray(this.pos);
      const newData = ensureUint8Array(buffer);
      const newBuffer = new Uint8Array(remainingData.length + newData.length);
      newBuffer.set(remainingData);
      newBuffer.set(newData, remainingData.length);
      this.setBuffer(newBuffer);
    }
  }
  hasRemaining(size2) {
    return this.view.byteLength - this.pos >= size2;
  }
  createExtraByteError(posToShow) {
    const { view, pos } = this;
    return new RangeError(`Extra ${view.byteLength - pos} of ${view.byteLength} byte(s) found at buffer[${posToShow}]`);
  }
  /**
   * @throws {@link DecodeError}
   * @throws {@link RangeError}
   */
  decode(buffer) {
    if (this.entered) {
      const instance = this.clone();
      return instance.decode(buffer);
    }
    try {
      this.entered = true;
      this.reinitializeState();
      this.setBuffer(buffer);
      const object = this.doDecodeSync();
      if (this.hasRemaining(1)) {
        throw this.createExtraByteError(this.pos);
      }
      return object;
    } finally {
      this.entered = false;
    }
  }
  *decodeMulti(buffer) {
    if (this.entered) {
      const instance = this.clone();
      yield* instance.decodeMulti(buffer);
      return;
    }
    try {
      this.entered = true;
      this.reinitializeState();
      this.setBuffer(buffer);
      while (this.hasRemaining(1)) {
        yield this.doDecodeSync();
      }
    } finally {
      this.entered = false;
    }
  }
  async decodeAsync(stream) {
    if (this.entered) {
      const instance = this.clone();
      return instance.decodeAsync(stream);
    }
    try {
      this.entered = true;
      let decoded = false;
      let object;
      for await (const buffer of stream) {
        if (decoded) {
          this.entered = false;
          throw this.createExtraByteError(this.totalPos);
        }
        this.appendBuffer(buffer);
        try {
          object = this.doDecodeSync();
          decoded = true;
        } catch (e2) {
          if (!(e2 instanceof RangeError)) {
            throw e2;
          }
        }
        this.totalPos += this.pos;
      }
      if (decoded) {
        if (this.hasRemaining(1)) {
          throw this.createExtraByteError(this.totalPos);
        }
        return object;
      }
      const { headByte, pos, totalPos } = this;
      throw new RangeError(`Insufficient data in parsing ${prettyByte(headByte)} at ${totalPos} (${pos} in the current buffer)`);
    } finally {
      this.entered = false;
    }
  }
  decodeArrayStream(stream) {
    return this.decodeMultiAsync(stream, true);
  }
  decodeStream(stream) {
    return this.decodeMultiAsync(stream, false);
  }
  async *decodeMultiAsync(stream, isArray) {
    if (this.entered) {
      const instance = this.clone();
      yield* instance.decodeMultiAsync(stream, isArray);
      return;
    }
    try {
      this.entered = true;
      let isArrayHeaderRequired = isArray;
      let arrayItemsLeft = -1;
      for await (const buffer of stream) {
        if (isArray && arrayItemsLeft === 0) {
          throw this.createExtraByteError(this.totalPos);
        }
        this.appendBuffer(buffer);
        if (isArrayHeaderRequired) {
          arrayItemsLeft = this.readArraySize();
          isArrayHeaderRequired = false;
          this.complete();
        }
        try {
          while (true) {
            yield this.doDecodeSync();
            if (--arrayItemsLeft === 0) {
              break;
            }
          }
        } catch (e2) {
          if (!(e2 instanceof RangeError)) {
            throw e2;
          }
        }
        this.totalPos += this.pos;
      }
    } finally {
      this.entered = false;
    }
  }
  doDecodeSync() {
    DECODE: while (true) {
      const headByte = this.readHeadByte();
      let object;
      if (headByte >= 224) {
        object = headByte - 256;
      } else if (headByte < 192) {
        if (headByte < 128) {
          object = headByte;
        } else if (headByte < 144) {
          const size2 = headByte - 128;
          if (size2 !== 0) {
            this.pushMapState(size2);
            this.complete();
            continue DECODE;
          } else {
            object = {};
          }
        } else if (headByte < 160) {
          const size2 = headByte - 144;
          if (size2 !== 0) {
            this.pushArrayState(size2);
            this.complete();
            continue DECODE;
          } else {
            object = [];
          }
        } else {
          const byteLength = headByte - 160;
          object = this.decodeString(byteLength, 0);
        }
      } else if (headByte === 192) {
        object = null;
      } else if (headByte === 194) {
        object = false;
      } else if (headByte === 195) {
        object = true;
      } else if (headByte === 202) {
        object = this.readF32();
      } else if (headByte === 203) {
        object = this.readF64();
      } else if (headByte === 204) {
        object = this.readU8();
      } else if (headByte === 205) {
        object = this.readU16();
      } else if (headByte === 206) {
        object = this.readU32();
      } else if (headByte === 207) {
        if (this.useBigInt64) {
          object = this.readU64AsBigInt();
        } else {
          object = this.readU64();
        }
      } else if (headByte === 208) {
        object = this.readI8();
      } else if (headByte === 209) {
        object = this.readI16();
      } else if (headByte === 210) {
        object = this.readI32();
      } else if (headByte === 211) {
        if (this.useBigInt64) {
          object = this.readI64AsBigInt();
        } else {
          object = this.readI64();
        }
      } else if (headByte === 217) {
        const byteLength = this.lookU8();
        object = this.decodeString(byteLength, 1);
      } else if (headByte === 218) {
        const byteLength = this.lookU16();
        object = this.decodeString(byteLength, 2);
      } else if (headByte === 219) {
        const byteLength = this.lookU32();
        object = this.decodeString(byteLength, 4);
      } else if (headByte === 220) {
        const size2 = this.readU16();
        if (size2 !== 0) {
          this.pushArrayState(size2);
          this.complete();
          continue DECODE;
        } else {
          object = [];
        }
      } else if (headByte === 221) {
        const size2 = this.readU32();
        if (size2 !== 0) {
          this.pushArrayState(size2);
          this.complete();
          continue DECODE;
        } else {
          object = [];
        }
      } else if (headByte === 222) {
        const size2 = this.readU16();
        if (size2 !== 0) {
          this.pushMapState(size2);
          this.complete();
          continue DECODE;
        } else {
          object = {};
        }
      } else if (headByte === 223) {
        const size2 = this.readU32();
        if (size2 !== 0) {
          this.pushMapState(size2);
          this.complete();
          continue DECODE;
        } else {
          object = {};
        }
      } else if (headByte === 196) {
        const size2 = this.lookU8();
        object = this.decodeBinary(size2, 1);
      } else if (headByte === 197) {
        const size2 = this.lookU16();
        object = this.decodeBinary(size2, 2);
      } else if (headByte === 198) {
        const size2 = this.lookU32();
        object = this.decodeBinary(size2, 4);
      } else if (headByte === 212) {
        object = this.decodeExtension(1, 0);
      } else if (headByte === 213) {
        object = this.decodeExtension(2, 0);
      } else if (headByte === 214) {
        object = this.decodeExtension(4, 0);
      } else if (headByte === 215) {
        object = this.decodeExtension(8, 0);
      } else if (headByte === 216) {
        object = this.decodeExtension(16, 0);
      } else if (headByte === 199) {
        const size2 = this.lookU8();
        object = this.decodeExtension(size2, 1);
      } else if (headByte === 200) {
        const size2 = this.lookU16();
        object = this.decodeExtension(size2, 2);
      } else if (headByte === 201) {
        const size2 = this.lookU32();
        object = this.decodeExtension(size2, 4);
      } else {
        throw new DecodeError(`Unrecognized type byte: ${prettyByte(headByte)}`);
      }
      this.complete();
      const stack = this.stack;
      while (stack.length > 0) {
        const state = stack.top();
        if (state.type === STATE_ARRAY) {
          state.array[state.position] = object;
          state.position++;
          if (state.position === state.size) {
            object = state.array;
            stack.release(state);
          } else {
            continue DECODE;
          }
        } else if (state.type === STATE_MAP_KEY) {
          if (object === "__proto__") {
            throw new DecodeError("The key __proto__ is not allowed");
          }
          state.key = this.mapKeyConverter(object);
          state.type = STATE_MAP_VALUE;
          continue DECODE;
        } else {
          state.map[state.key] = object;
          state.readCount++;
          if (state.readCount === state.size) {
            object = state.map;
            stack.release(state);
          } else {
            state.key = null;
            state.type = STATE_MAP_KEY;
            continue DECODE;
          }
        }
      }
      return object;
    }
  }
  readHeadByte() {
    if (this.headByte === HEAD_BYTE_REQUIRED) {
      this.headByte = this.readU8();
    }
    return this.headByte;
  }
  complete() {
    this.headByte = HEAD_BYTE_REQUIRED;
  }
  readArraySize() {
    const headByte = this.readHeadByte();
    switch (headByte) {
      case 220:
        return this.readU16();
      case 221:
        return this.readU32();
      default: {
        if (headByte < 160) {
          return headByte - 144;
        } else {
          throw new DecodeError(`Unrecognized array type byte: ${prettyByte(headByte)}`);
        }
      }
    }
  }
  pushMapState(size2) {
    if (size2 > this.maxMapLength) {
      throw new DecodeError(`Max length exceeded: map length (${size2}) > maxMapLengthLength (${this.maxMapLength})`);
    }
    this.stack.pushMapState(size2);
  }
  pushArrayState(size2) {
    if (size2 > this.maxArrayLength) {
      throw new DecodeError(`Max length exceeded: array length (${size2}) > maxArrayLength (${this.maxArrayLength})`);
    }
    this.stack.pushArrayState(size2);
  }
  decodeString(byteLength, headerOffset) {
    if (!this.rawStrings || this.stateIsMapKey()) {
      return this.decodeUtf8String(byteLength, headerOffset);
    }
    return this.decodeBinary(byteLength, headerOffset);
  }
  /**
   * @throws {@link RangeError}
   */
  decodeUtf8String(byteLength, headerOffset) {
    if (byteLength > this.maxStrLength) {
      throw new DecodeError(`Max length exceeded: UTF-8 byte length (${byteLength}) > maxStrLength (${this.maxStrLength})`);
    }
    if (this.bytes.byteLength < this.pos + headerOffset + byteLength) {
      throw MORE_DATA;
    }
    const offset = this.pos + headerOffset;
    let object;
    if (this.stateIsMapKey() && this.keyDecoder?.canBeCached(byteLength)) {
      object = this.keyDecoder.decode(this.bytes, offset, byteLength);
    } else {
      object = utf8Decode(this.bytes, offset, byteLength);
    }
    this.pos += headerOffset + byteLength;
    return object;
  }
  stateIsMapKey() {
    if (this.stack.length > 0) {
      const state = this.stack.top();
      return state.type === STATE_MAP_KEY;
    }
    return false;
  }
  /**
   * @throws {@link RangeError}
   */
  decodeBinary(byteLength, headOffset) {
    if (byteLength > this.maxBinLength) {
      throw new DecodeError(`Max length exceeded: bin length (${byteLength}) > maxBinLength (${this.maxBinLength})`);
    }
    if (!this.hasRemaining(byteLength + headOffset)) {
      throw MORE_DATA;
    }
    const offset = this.pos + headOffset;
    const object = this.bytes.subarray(offset, offset + byteLength);
    this.pos += headOffset + byteLength;
    return object;
  }
  decodeExtension(size2, headOffset) {
    if (size2 > this.maxExtLength) {
      throw new DecodeError(`Max length exceeded: ext length (${size2}) > maxExtLength (${this.maxExtLength})`);
    }
    const extType = this.view.getInt8(this.pos + headOffset);
    const data = this.decodeBinary(
      size2,
      headOffset + 1
      /* extType */
    );
    return this.extensionCodec.decode(data, extType, this.context);
  }
  lookU8() {
    return this.view.getUint8(this.pos);
  }
  lookU16() {
    return this.view.getUint16(this.pos);
  }
  lookU32() {
    return this.view.getUint32(this.pos);
  }
  readU8() {
    const value = this.view.getUint8(this.pos);
    this.pos++;
    return value;
  }
  readI8() {
    const value = this.view.getInt8(this.pos);
    this.pos++;
    return value;
  }
  readU16() {
    const value = this.view.getUint16(this.pos);
    this.pos += 2;
    return value;
  }
  readI16() {
    const value = this.view.getInt16(this.pos);
    this.pos += 2;
    return value;
  }
  readU32() {
    const value = this.view.getUint32(this.pos);
    this.pos += 4;
    return value;
  }
  readI32() {
    const value = this.view.getInt32(this.pos);
    this.pos += 4;
    return value;
  }
  readU64() {
    const value = getUint64(this.view, this.pos);
    this.pos += 8;
    return value;
  }
  readI64() {
    const value = getInt64(this.view, this.pos);
    this.pos += 8;
    return value;
  }
  readU64AsBigInt() {
    const value = this.view.getBigUint64(this.pos);
    this.pos += 8;
    return value;
  }
  readI64AsBigInt() {
    const value = this.view.getBigInt64(this.pos);
    this.pos += 8;
    return value;
  }
  readF32() {
    const value = this.view.getFloat32(this.pos);
    this.pos += 4;
    return value;
  }
  readF64() {
    const value = this.view.getFloat64(this.pos);
    this.pos += 8;
    return value;
  }
};

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@msgpack/msgpack/dist.esm/decode.mjs
function decode(buffer, options) {
  const decoder = new Decoder(options);
  return decoder.decode(buffer);
}

// ../../../../../private/tmp/wc-vendor/node_modules/@scure/base/lib/esm/index.js
function isBytes3(a3) {
  return a3 instanceof Uint8Array || ArrayBuffer.isView(a3) && a3.constructor.name === "Uint8Array";
}
function isArrayOf(isString, arr) {
  if (!Array.isArray(arr))
    return false;
  if (arr.length === 0)
    return true;
  if (isString) {
    return arr.every((item) => typeof item === "string");
  } else {
    return arr.every((item) => Number.isSafeInteger(item));
  }
}
function astr(label, input) {
  if (typeof input !== "string")
    throw new Error(`${label}: string expected`);
  return true;
}
function anumber2(n5) {
  if (!Number.isSafeInteger(n5))
    throw new Error(`invalid integer: ${n5}`);
}
function aArr(input) {
  if (!Array.isArray(input))
    throw new Error("array expected");
}
function astrArr(label, input) {
  if (!isArrayOf(true, input))
    throw new Error(`${label}: array of strings expected`);
}
function anumArr(label, input) {
  if (!isArrayOf(false, input))
    throw new Error(`${label}: array of numbers expected`);
}
// @__NO_SIDE_EFFECTS__
function chain(...args) {
  const id = (a3) => a3;
  const wrap = (a3, b5) => (c7) => a3(b5(c7));
  const encode6 = args.map((x7) => x7.encode).reduceRight(wrap, id);
  const decode7 = args.map((x7) => x7.decode).reduce(wrap, id);
  return { encode: encode6, decode: decode7 };
}
// @__NO_SIDE_EFFECTS__
function alphabet(letters) {
  const lettersA = typeof letters === "string" ? letters.split("") : letters;
  const len = lettersA.length;
  astrArr("alphabet", lettersA);
  const indexes = new Map(lettersA.map((l8, i4) => [l8, i4]));
  return {
    encode: (digits) => {
      aArr(digits);
      return digits.map((i4) => {
        if (!Number.isSafeInteger(i4) || i4 < 0 || i4 >= len)
          throw new Error(`alphabet.encode: digit index outside alphabet "${i4}". Allowed: ${letters}`);
        return lettersA[i4];
      });
    },
    decode: (input) => {
      aArr(input);
      return input.map((letter) => {
        astr("alphabet.decode", letter);
        const i4 = indexes.get(letter);
        if (i4 === void 0)
          throw new Error(`Unknown letter: "${letter}". Allowed: ${letters}`);
        return i4;
      });
    }
  };
}
// @__NO_SIDE_EFFECTS__
function join(separator = "") {
  astr("join", separator);
  return {
    encode: (from3) => {
      astrArr("join.decode", from3);
      return from3.join(separator);
    },
    decode: (to5) => {
      astr("join.decode", to5);
      return to5.split(separator);
    }
  };
}
// @__NO_SIDE_EFFECTS__
function padding(bits, chr = "=") {
  anumber2(bits);
  astr("padding", chr);
  return {
    encode(data) {
      astrArr("padding.encode", data);
      while (data.length * bits % 8)
        data.push(chr);
      return data;
    },
    decode(input) {
      astrArr("padding.decode", input);
      let end = input.length;
      if (end * bits % 8)
        throw new Error("padding: invalid, string should have whole number of bytes");
      for (; end > 0 && input[end - 1] === chr; end--) {
        const last = end - 1;
        const byte = last * bits;
        if (byte % 8 === 0)
          throw new Error("padding: invalid, string has too much padding");
      }
      return input.slice(0, end);
    }
  };
}
var gcd = (a3, b5) => b5 === 0 ? a3 : gcd(b5, a3 % b5);
var radix2carry = /* @__NO_SIDE_EFFECTS__ */ (from3, to5) => from3 + (to5 - gcd(from3, to5));
var powers = /* @__PURE__ */ (() => {
  let res = [];
  for (let i4 = 0; i4 < 40; i4++)
    res.push(2 ** i4);
  return res;
})();
function convertRadix2(data, from3, to5, padding2) {
  aArr(data);
  if (from3 <= 0 || from3 > 32)
    throw new Error(`convertRadix2: wrong from=${from3}`);
  if (to5 <= 0 || to5 > 32)
    throw new Error(`convertRadix2: wrong to=${to5}`);
  if (/* @__PURE__ */ radix2carry(from3, to5) > 32) {
    throw new Error(`convertRadix2: carry overflow from=${from3} to=${to5} carryBits=${/* @__PURE__ */ radix2carry(from3, to5)}`);
  }
  let carry = 0;
  let pos = 0;
  const max = powers[from3];
  const mask = powers[to5] - 1;
  const res = [];
  for (const n5 of data) {
    anumber2(n5);
    if (n5 >= max)
      throw new Error(`convertRadix2: invalid data word=${n5} from=${from3}`);
    carry = carry << from3 | n5;
    if (pos + from3 > 32)
      throw new Error(`convertRadix2: carry overflow pos=${pos} from=${from3}`);
    pos += from3;
    for (; pos >= to5; pos -= to5)
      res.push((carry >> pos - to5 & mask) >>> 0);
    const pow = powers[pos];
    if (pow === void 0)
      throw new Error("invalid carry");
    carry &= pow - 1;
  }
  carry = carry << to5 - pos & mask;
  if (!padding2 && pos >= from3)
    throw new Error("Excess padding");
  if (!padding2 && carry > 0)
    throw new Error(`Non-zero padding: ${carry}`);
  if (padding2 && pos > 0)
    res.push(carry >>> 0);
  return res;
}
// @__NO_SIDE_EFFECTS__
function radix2(bits, revPadding = false) {
  anumber2(bits);
  if (bits <= 0 || bits > 32)
    throw new Error("radix2: bits should be in (0..32]");
  if (/* @__PURE__ */ radix2carry(8, bits) > 32 || /* @__PURE__ */ radix2carry(bits, 8) > 32)
    throw new Error("radix2: carry overflow");
  return {
    encode: (bytes) => {
      if (!isBytes3(bytes))
        throw new Error("radix2.encode input should be Uint8Array");
      return convertRadix2(Array.from(bytes), 8, bits, !revPadding);
    },
    decode: (digits) => {
      anumArr("radix2.decode", digits);
      return Uint8Array.from(convertRadix2(digits, bits, 8, revPadding));
    }
  };
}
var base32 = /* @__PURE__ */ chain(/* @__PURE__ */ radix2(5), /* @__PURE__ */ alphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"), /* @__PURE__ */ padding(5), /* @__PURE__ */ join(""));

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/relay-auth/dist/index.es.js
var import_time3 = __toESM(require_cjs2());

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/safe-json/dist/esm/index.js
var JSONParse2 = (json) => {
  const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
  const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
  return JSON.parse(serializedData, (_3, value) => {
    const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
    if (isCustomFormatBigInt)
      return BigInt(value.substring(0, value.length - 1));
    return value;
  });
};
function safeJsonParse2(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSONParse2(value);
  } catch (_a2) {
    return value;
  }
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/relay-auth/dist/index.es.js
function En2(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function fe2(t, ...e2) {
  if (!En2(t)) throw new Error("Uint8Array expected");
  if (e2.length > 0 && !e2.includes(t.length)) throw new Error("Uint8Array expected of length " + e2 + ", got length=" + t.length);
}
function De2(t, e2 = true) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e2 && t.finished) throw new Error("Hash#digest() has already been called");
}
function gn2(t, e2) {
  fe2(t);
  const n5 = e2.outputLen;
  if (t.length < n5) throw new Error("digestInto() expects output buffer of length at least " + n5);
}
var it2 = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
var _t2 = (t) => new DataView(t.buffer, t.byteOffset, t.byteLength);
function yn2(t) {
  if (typeof t != "string") throw new Error("utf8ToBytes expected string, got " + typeof t);
  return new Uint8Array(new TextEncoder().encode(t));
}
function de2(t) {
  return typeof t == "string" && (t = yn2(t)), fe2(t), t;
}
var xn2 = class {
  clone() {
    return this._cloneInto();
  }
};
function Bn2(t) {
  const e2 = (r3) => t().update(de2(r3)).digest(), n5 = t();
  return e2.outputLen = n5.outputLen, e2.blockLen = n5.blockLen, e2.create = () => t(), e2;
}
function he2(t = 32) {
  if (it2 && typeof it2.getRandomValues == "function") return it2.getRandomValues(new Uint8Array(t));
  if (it2 && typeof it2.randomBytes == "function") return it2.randomBytes(t);
  throw new Error("crypto.getRandomValues must be defined");
}
function Cn2(t, e2, n5, r3) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e2, n5, r3);
  const o5 = BigInt(32), s3 = BigInt(4294967295), a3 = Number(n5 >> o5 & s3), u3 = Number(n5 & s3), i4 = r3 ? 4 : 0, D4 = r3 ? 0 : 4;
  t.setUint32(e2 + i4, a3, r3), t.setUint32(e2 + D4, u3, r3);
}
var An2 = class extends xn2 {
  constructor(e2, n5, r3, o5) {
    super(), this.blockLen = e2, this.outputLen = n5, this.padOffset = r3, this.isLE = o5, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(e2), this.view = _t2(this.buffer);
  }
  update(e2) {
    De2(this);
    const { view: n5, buffer: r3, blockLen: o5 } = this;
    e2 = de2(e2);
    const s3 = e2.length;
    for (let a3 = 0; a3 < s3; ) {
      const u3 = Math.min(o5 - this.pos, s3 - a3);
      if (u3 === o5) {
        const i4 = _t2(e2);
        for (; o5 <= s3 - a3; a3 += o5) this.process(i4, a3);
        continue;
      }
      r3.set(e2.subarray(a3, a3 + u3), this.pos), this.pos += u3, a3 += u3, this.pos === o5 && (this.process(n5, 0), this.pos = 0);
    }
    return this.length += e2.length, this.roundClean(), this;
  }
  digestInto(e2) {
    De2(this), gn2(e2, this), this.finished = true;
    const { buffer: n5, view: r3, blockLen: o5, isLE: s3 } = this;
    let { pos: a3 } = this;
    n5[a3++] = 128, this.buffer.subarray(a3).fill(0), this.padOffset > o5 - a3 && (this.process(r3, 0), a3 = 0);
    for (let l8 = a3; l8 < o5; l8++) n5[l8] = 0;
    Cn2(r3, o5 - 8, BigInt(this.length * 8), s3), this.process(r3, 0);
    const u3 = _t2(e2), i4 = this.outputLen;
    if (i4 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const D4 = i4 / 4, c7 = this.get();
    if (D4 > c7.length) throw new Error("_sha2: outputLen bigger than state");
    for (let l8 = 0; l8 < D4; l8++) u3.setUint32(4 * l8, c7[l8], s3);
  }
  digest() {
    const { buffer: e2, outputLen: n5 } = this;
    this.digestInto(e2);
    const r3 = e2.slice(0, n5);
    return this.destroy(), r3;
  }
  _cloneInto(e2) {
    e2 || (e2 = new this.constructor()), e2.set(...this.get());
    const { blockLen: n5, buffer: r3, length: o5, finished: s3, destroyed: a3, pos: u3 } = this;
    return e2.length = o5, e2.pos = u3, e2.finished = s3, e2.destroyed = a3, o5 % n5 && e2.buffer.set(r3), e2;
  }
};
var wt2 = BigInt(2 ** 32 - 1);
var St2 = BigInt(32);
function le2(t, e2 = false) {
  return e2 ? { h: Number(t & wt2), l: Number(t >> St2 & wt2) } : { h: Number(t >> St2 & wt2) | 0, l: Number(t & wt2) | 0 };
}
function mn2(t, e2 = false) {
  let n5 = new Uint32Array(t.length), r3 = new Uint32Array(t.length);
  for (let o5 = 0; o5 < t.length; o5++) {
    const { h: s3, l: a3 } = le2(t[o5], e2);
    [n5[o5], r3[o5]] = [s3, a3];
  }
  return [n5, r3];
}
var _n2 = (t, e2) => BigInt(t >>> 0) << St2 | BigInt(e2 >>> 0);
var Sn2 = (t, e2, n5) => t >>> n5;
var vn2 = (t, e2, n5) => t << 32 - n5 | e2 >>> n5;
var In2 = (t, e2, n5) => t >>> n5 | e2 << 32 - n5;
var Un2 = (t, e2, n5) => t << 32 - n5 | e2 >>> n5;
var Tn2 = (t, e2, n5) => t << 64 - n5 | e2 >>> n5 - 32;
var Fn2 = (t, e2, n5) => t >>> n5 - 32 | e2 << 64 - n5;
var Nn2 = (t, e2) => e2;
var Ln2 = (t, e2) => t;
var On2 = (t, e2, n5) => t << n5 | e2 >>> 32 - n5;
var Hn2 = (t, e2, n5) => e2 << n5 | t >>> 32 - n5;
var zn2 = (t, e2, n5) => e2 << n5 - 32 | t >>> 64 - n5;
var Mn2 = (t, e2, n5) => t << n5 - 32 | e2 >>> 64 - n5;
function qn2(t, e2, n5, r3) {
  const o5 = (e2 >>> 0) + (r3 >>> 0);
  return { h: t + n5 + (o5 / 2 ** 32 | 0) | 0, l: o5 | 0 };
}
var $n2 = (t, e2, n5) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0);
var kn2 = (t, e2, n5, r3) => e2 + n5 + r3 + (t / 2 ** 32 | 0) | 0;
var Rn2 = (t, e2, n5, r3) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0) + (r3 >>> 0);
var jn2 = (t, e2, n5, r3, o5) => e2 + n5 + r3 + o5 + (t / 2 ** 32 | 0) | 0;
var Zn2 = (t, e2, n5, r3, o5) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0) + (r3 >>> 0) + (o5 >>> 0);
var Gn2 = (t, e2, n5, r3, o5, s3) => e2 + n5 + r3 + o5 + s3 + (t / 2 ** 32 | 0) | 0;
var x4 = { fromBig: le2, split: mn2, toBig: _n2, shrSH: Sn2, shrSL: vn2, rotrSH: In2, rotrSL: Un2, rotrBH: Tn2, rotrBL: Fn2, rotr32H: Nn2, rotr32L: Ln2, rotlSH: On2, rotlSL: Hn2, rotlBH: zn2, rotlBL: Mn2, add: qn2, add3L: $n2, add3H: kn2, add4L: Rn2, add4H: jn2, add5H: Gn2, add5L: Zn2 };
var [Vn2, Yn2] = (() => x4.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t) => BigInt(t))))();
var P3 = new Uint32Array(80);
var Q2 = new Uint32Array(80);
var Jn2 = class extends An2 {
  constructor() {
    super(128, 64, 16, false), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  get() {
    const { Ah: e2, Al: n5, Bh: r3, Bl: o5, Ch: s3, Cl: a3, Dh: u3, Dl: i4, Eh: D4, El: c7, Fh: l8, Fl: p5, Gh: w5, Gl: h6, Hh: g4, Hl: S5 } = this;
    return [e2, n5, r3, o5, s3, a3, u3, i4, D4, c7, l8, p5, w5, h6, g4, S5];
  }
  set(e2, n5, r3, o5, s3, a3, u3, i4, D4, c7, l8, p5, w5, h6, g4, S5) {
    this.Ah = e2 | 0, this.Al = n5 | 0, this.Bh = r3 | 0, this.Bl = o5 | 0, this.Ch = s3 | 0, this.Cl = a3 | 0, this.Dh = u3 | 0, this.Dl = i4 | 0, this.Eh = D4 | 0, this.El = c7 | 0, this.Fh = l8 | 0, this.Fl = p5 | 0, this.Gh = w5 | 0, this.Gl = h6 | 0, this.Hh = g4 | 0, this.Hl = S5 | 0;
  }
  process(e2, n5) {
    for (let d5 = 0; d5 < 16; d5++, n5 += 4) P3[d5] = e2.getUint32(n5), Q2[d5] = e2.getUint32(n5 += 4);
    for (let d5 = 16; d5 < 80; d5++) {
      const m4 = P3[d5 - 15] | 0, F3 = Q2[d5 - 15] | 0, q2 = x4.rotrSH(m4, F3, 1) ^ x4.rotrSH(m4, F3, 8) ^ x4.shrSH(m4, F3, 7), z4 = x4.rotrSL(m4, F3, 1) ^ x4.rotrSL(m4, F3, 8) ^ x4.shrSL(m4, F3, 7), I5 = P3[d5 - 2] | 0, O7 = Q2[d5 - 2] | 0, ot3 = x4.rotrSH(I5, O7, 19) ^ x4.rotrBH(I5, O7, 61) ^ x4.shrSH(I5, O7, 6), tt3 = x4.rotrSL(I5, O7, 19) ^ x4.rotrBL(I5, O7, 61) ^ x4.shrSL(I5, O7, 6), st = x4.add4L(z4, tt3, Q2[d5 - 7], Q2[d5 - 16]), at3 = x4.add4H(st, q2, ot3, P3[d5 - 7], P3[d5 - 16]);
      P3[d5] = at3 | 0, Q2[d5] = st | 0;
    }
    let { Ah: r3, Al: o5, Bh: s3, Bl: a3, Ch: u3, Cl: i4, Dh: D4, Dl: c7, Eh: l8, El: p5, Fh: w5, Fl: h6, Gh: g4, Gl: S5, Hh: v6, Hl: L5 } = this;
    for (let d5 = 0; d5 < 80; d5++) {
      const m4 = x4.rotrSH(l8, p5, 14) ^ x4.rotrSH(l8, p5, 18) ^ x4.rotrBH(l8, p5, 41), F3 = x4.rotrSL(l8, p5, 14) ^ x4.rotrSL(l8, p5, 18) ^ x4.rotrBL(l8, p5, 41), q2 = l8 & w5 ^ ~l8 & g4, z4 = p5 & h6 ^ ~p5 & S5, I5 = x4.add5L(L5, F3, z4, Yn2[d5], Q2[d5]), O7 = x4.add5H(I5, v6, m4, q2, Vn2[d5], P3[d5]), ot3 = I5 | 0, tt3 = x4.rotrSH(r3, o5, 28) ^ x4.rotrBH(r3, o5, 34) ^ x4.rotrBH(r3, o5, 39), st = x4.rotrSL(r3, o5, 28) ^ x4.rotrBL(r3, o5, 34) ^ x4.rotrBL(r3, o5, 39), at3 = r3 & s3 ^ r3 & u3 ^ s3 & u3, Ct4 = o5 & a3 ^ o5 & i4 ^ a3 & i4;
      v6 = g4 | 0, L5 = S5 | 0, g4 = w5 | 0, S5 = h6 | 0, w5 = l8 | 0, h6 = p5 | 0, { h: l8, l: p5 } = x4.add(D4 | 0, c7 | 0, O7 | 0, ot3 | 0), D4 = u3 | 0, c7 = i4 | 0, u3 = s3 | 0, i4 = a3 | 0, s3 = r3 | 0, a3 = o5 | 0;
      const At4 = x4.add3L(ot3, st, Ct4);
      r3 = x4.add3H(At4, O7, tt3, at3), o5 = At4 | 0;
    }
    ({ h: r3, l: o5 } = x4.add(this.Ah | 0, this.Al | 0, r3 | 0, o5 | 0)), { h: s3, l: a3 } = x4.add(this.Bh | 0, this.Bl | 0, s3 | 0, a3 | 0), { h: u3, l: i4 } = x4.add(this.Ch | 0, this.Cl | 0, u3 | 0, i4 | 0), { h: D4, l: c7 } = x4.add(this.Dh | 0, this.Dl | 0, D4 | 0, c7 | 0), { h: l8, l: p5 } = x4.add(this.Eh | 0, this.El | 0, l8 | 0, p5 | 0), { h: w5, l: h6 } = x4.add(this.Fh | 0, this.Fl | 0, w5 | 0, h6 | 0), { h: g4, l: S5 } = x4.add(this.Gh | 0, this.Gl | 0, g4 | 0, S5 | 0), { h: v6, l: L5 } = x4.add(this.Hh | 0, this.Hl | 0, v6 | 0, L5 | 0), this.set(r3, o5, s3, a3, u3, i4, D4, c7, l8, p5, w5, h6, g4, S5, v6, L5);
  }
  roundClean() {
    P3.fill(0), Q2.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var Kn2 = Bn2(() => new Jn2());
var vt2 = BigInt(0);
var be2 = BigInt(1);
var Wn2 = BigInt(2);
function It2(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function Ut2(t) {
  if (!It2(t)) throw new Error("Uint8Array expected");
}
function Tt2(t, e2) {
  if (typeof e2 != "boolean") throw new Error(t + " boolean expected, got " + e2);
}
var Xn2 = Array.from({ length: 256 }, (t, e2) => e2.toString(16).padStart(2, "0"));
function Ft2(t) {
  Ut2(t);
  let e2 = "";
  for (let n5 = 0; n5 < t.length; n5++) e2 += Xn2[t[n5]];
  return e2;
}
function pe2(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? vt2 : BigInt("0x" + t);
}
var K3 = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function we2(t) {
  if (t >= K3._0 && t <= K3._9) return t - K3._0;
  if (t >= K3.A && t <= K3.F) return t - (K3.A - 10);
  if (t >= K3.a && t <= K3.f) return t - (K3.a - 10);
}
function Ee2(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  const e2 = t.length, n5 = e2 / 2;
  if (e2 % 2) throw new Error("hex string expected, got unpadded hex of length " + e2);
  const r3 = new Uint8Array(n5);
  for (let o5 = 0, s3 = 0; o5 < n5; o5++, s3 += 2) {
    const a3 = we2(t.charCodeAt(s3)), u3 = we2(t.charCodeAt(s3 + 1));
    if (a3 === void 0 || u3 === void 0) {
      const i4 = t[s3] + t[s3 + 1];
      throw new Error('hex string expected, got non-hex character "' + i4 + '" at index ' + s3);
    }
    r3[o5] = a3 * 16 + u3;
  }
  return r3;
}
function Pn2(t) {
  return pe2(Ft2(t));
}
function Et2(t) {
  return Ut2(t), pe2(Ft2(Uint8Array.from(t).reverse()));
}
function ge2(t, e2) {
  return Ee2(t.toString(16).padStart(e2 * 2, "0"));
}
function Nt2(t, e2) {
  return ge2(t, e2).reverse();
}
function W2(t, e2, n5) {
  let r3;
  if (typeof e2 == "string") try {
    r3 = Ee2(e2);
  } catch (s3) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + s3);
  }
  else if (It2(e2)) r3 = Uint8Array.from(e2);
  else throw new Error(t + " must be hex string or Uint8Array");
  const o5 = r3.length;
  if (typeof n5 == "number" && o5 !== n5) throw new Error(t + " of length " + n5 + " expected, got " + o5);
  return r3;
}
function ye2(...t) {
  let e2 = 0;
  for (let r3 = 0; r3 < t.length; r3++) {
    const o5 = t[r3];
    Ut2(o5), e2 += o5.length;
  }
  const n5 = new Uint8Array(e2);
  for (let r3 = 0, o5 = 0; r3 < t.length; r3++) {
    const s3 = t[r3];
    n5.set(s3, o5), o5 += s3.length;
  }
  return n5;
}
var Lt2 = (t) => typeof t == "bigint" && vt2 <= t;
function Qn2(t, e2, n5) {
  return Lt2(t) && Lt2(e2) && Lt2(n5) && e2 <= t && t < n5;
}
function ft2(t, e2, n5, r3) {
  if (!Qn2(e2, n5, r3)) throw new Error("expected valid " + t + ": " + n5 + " <= n < " + r3 + ", got " + e2);
}
function tr2(t) {
  let e2;
  for (e2 = 0; t > vt2; t >>= be2, e2 += 1) ;
  return e2;
}
var er2 = (t) => (Wn2 << BigInt(t - 1)) - be2;
var nr2 = { bigint: (t) => typeof t == "bigint", function: (t) => typeof t == "function", boolean: (t) => typeof t == "boolean", string: (t) => typeof t == "string", stringOrUint8Array: (t) => typeof t == "string" || It2(t), isSafeInteger: (t) => Number.isSafeInteger(t), array: (t) => Array.isArray(t), field: (t, e2) => e2.Fp.isValid(t), hash: (t) => typeof t == "function" && Number.isSafeInteger(t.outputLen) };
function Ot2(t, e2, n5 = {}) {
  const r3 = (o5, s3, a3) => {
    const u3 = nr2[s3];
    if (typeof u3 != "function") throw new Error("invalid validator function");
    const i4 = t[o5];
    if (!(a3 && i4 === void 0) && !u3(i4, t)) throw new Error("param " + String(o5) + " is invalid. Expected " + s3 + ", got " + i4);
  };
  for (const [o5, s3] of Object.entries(e2)) r3(o5, s3, false);
  for (const [o5, s3] of Object.entries(n5)) r3(o5, s3, true);
  return t;
}
function xe2(t) {
  const e2 = /* @__PURE__ */ new WeakMap();
  return (n5, ...r3) => {
    const o5 = e2.get(n5);
    if (o5 !== void 0) return o5;
    const s3 = t(n5, ...r3);
    return e2.set(n5, s3), s3;
  };
}
var M3 = BigInt(0);
var N3 = BigInt(1);
var nt2 = BigInt(2);
var rr2 = BigInt(3);
var Ht2 = BigInt(4);
var Be2 = BigInt(5);
var Ce2 = BigInt(8);
function H2(t, e2) {
  const n5 = t % e2;
  return n5 >= M3 ? n5 : e2 + n5;
}
function or2(t, e2, n5) {
  if (e2 < M3) throw new Error("invalid exponent, negatives unsupported");
  if (n5 <= M3) throw new Error("invalid modulus");
  if (n5 === N3) return M3;
  let r3 = N3;
  for (; e2 > M3; ) e2 & N3 && (r3 = r3 * t % n5), t = t * t % n5, e2 >>= N3;
  return r3;
}
function J3(t, e2, n5) {
  let r3 = t;
  for (; e2-- > M3; ) r3 *= r3, r3 %= n5;
  return r3;
}
function Ae2(t, e2) {
  if (t === M3) throw new Error("invert: expected non-zero number");
  if (e2 <= M3) throw new Error("invert: expected positive modulus, got " + e2);
  let n5 = H2(t, e2), r3 = e2, o5 = M3, s3 = N3;
  for (; n5 !== M3; ) {
    const u3 = r3 / n5, i4 = r3 % n5, D4 = o5 - s3 * u3;
    r3 = n5, n5 = i4, o5 = s3, s3 = D4;
  }
  if (r3 !== N3) throw new Error("invert: does not exist");
  return H2(o5, e2);
}
function sr2(t) {
  const e2 = (t - N3) / nt2;
  let n5, r3, o5;
  for (n5 = t - N3, r3 = 0; n5 % nt2 === M3; n5 /= nt2, r3++) ;
  for (o5 = nt2; o5 < t && or2(o5, e2, t) !== t - N3; o5++) if (o5 > 1e3) throw new Error("Cannot find square root: likely non-prime P");
  if (r3 === 1) {
    const a3 = (t + N3) / Ht2;
    return function(i4, D4) {
      const c7 = i4.pow(D4, a3);
      if (!i4.eql(i4.sqr(c7), D4)) throw new Error("Cannot find square root");
      return c7;
    };
  }
  const s3 = (n5 + N3) / nt2;
  return function(u3, i4) {
    if (u3.pow(i4, e2) === u3.neg(u3.ONE)) throw new Error("Cannot find square root");
    let D4 = r3, c7 = u3.pow(u3.mul(u3.ONE, o5), n5), l8 = u3.pow(i4, s3), p5 = u3.pow(i4, n5);
    for (; !u3.eql(p5, u3.ONE); ) {
      if (u3.eql(p5, u3.ZERO)) return u3.ZERO;
      let w5 = 1;
      for (let g4 = u3.sqr(p5); w5 < D4 && !u3.eql(g4, u3.ONE); w5++) g4 = u3.sqr(g4);
      const h6 = u3.pow(c7, N3 << BigInt(D4 - w5 - 1));
      c7 = u3.sqr(h6), l8 = u3.mul(l8, h6), p5 = u3.mul(p5, c7), D4 = w5;
    }
    return l8;
  };
}
function ir2(t) {
  if (t % Ht2 === rr2) {
    const e2 = (t + N3) / Ht2;
    return function(r3, o5) {
      const s3 = r3.pow(o5, e2);
      if (!r3.eql(r3.sqr(s3), o5)) throw new Error("Cannot find square root");
      return s3;
    };
  }
  if (t % Ce2 === Be2) {
    const e2 = (t - Be2) / Ce2;
    return function(r3, o5) {
      const s3 = r3.mul(o5, nt2), a3 = r3.pow(s3, e2), u3 = r3.mul(o5, a3), i4 = r3.mul(r3.mul(u3, nt2), a3), D4 = r3.mul(u3, r3.sub(i4, r3.ONE));
      if (!r3.eql(r3.sqr(D4), o5)) throw new Error("Cannot find square root");
      return D4;
    };
  }
  return sr2(t);
}
var ur2 = (t, e2) => (H2(t, e2) & N3) === N3;
var cr2 = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function ar2(t) {
  const e2 = { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" }, n5 = cr2.reduce((r3, o5) => (r3[o5] = "function", r3), e2);
  return Ot2(t, n5);
}
function fr2(t, e2, n5) {
  if (n5 < M3) throw new Error("invalid exponent, negatives unsupported");
  if (n5 === M3) return t.ONE;
  if (n5 === N3) return e2;
  let r3 = t.ONE, o5 = e2;
  for (; n5 > M3; ) n5 & N3 && (r3 = t.mul(r3, o5)), o5 = t.sqr(o5), n5 >>= N3;
  return r3;
}
function Dr2(t, e2) {
  const n5 = new Array(e2.length), r3 = e2.reduce((s3, a3, u3) => t.is0(a3) ? s3 : (n5[u3] = s3, t.mul(s3, a3)), t.ONE), o5 = t.inv(r3);
  return e2.reduceRight((s3, a3, u3) => t.is0(a3) ? s3 : (n5[u3] = t.mul(s3, n5[u3]), t.mul(s3, a3)), o5), n5;
}
function me2(t, e2) {
  const n5 = e2 !== void 0 ? e2 : t.toString(2).length, r3 = Math.ceil(n5 / 8);
  return { nBitLength: n5, nByteLength: r3 };
}
function _e2(t, e2, n5 = false, r3 = {}) {
  if (t <= M3) throw new Error("invalid field: expected ORDER > 0, got " + t);
  const { nBitLength: o5, nByteLength: s3 } = me2(t, e2);
  if (s3 > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let a3;
  const u3 = Object.freeze({ ORDER: t, isLE: n5, BITS: o5, BYTES: s3, MASK: er2(o5), ZERO: M3, ONE: N3, create: (i4) => H2(i4, t), isValid: (i4) => {
    if (typeof i4 != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof i4);
    return M3 <= i4 && i4 < t;
  }, is0: (i4) => i4 === M3, isOdd: (i4) => (i4 & N3) === N3, neg: (i4) => H2(-i4, t), eql: (i4, D4) => i4 === D4, sqr: (i4) => H2(i4 * i4, t), add: (i4, D4) => H2(i4 + D4, t), sub: (i4, D4) => H2(i4 - D4, t), mul: (i4, D4) => H2(i4 * D4, t), pow: (i4, D4) => fr2(u3, i4, D4), div: (i4, D4) => H2(i4 * Ae2(D4, t), t), sqrN: (i4) => i4 * i4, addN: (i4, D4) => i4 + D4, subN: (i4, D4) => i4 - D4, mulN: (i4, D4) => i4 * D4, inv: (i4) => Ae2(i4, t), sqrt: r3.sqrt || ((i4) => (a3 || (a3 = ir2(t)), a3(u3, i4))), invertBatch: (i4) => Dr2(u3, i4), cmov: (i4, D4, c7) => c7 ? D4 : i4, toBytes: (i4) => n5 ? Nt2(i4, s3) : ge2(i4, s3), fromBytes: (i4) => {
    if (i4.length !== s3) throw new Error("Field.fromBytes: expected " + s3 + " bytes, got " + i4.length);
    return n5 ? Et2(i4) : Pn2(i4);
  } });
  return Object.freeze(u3);
}
var Se2 = BigInt(0);
var gt2 = BigInt(1);
function zt2(t, e2) {
  const n5 = e2.negate();
  return t ? n5 : e2;
}
function ve2(t, e2) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e2) throw new Error("invalid window size, expected [1.." + e2 + "], got W=" + t);
}
function Mt2(t, e2) {
  ve2(t, e2);
  const n5 = Math.ceil(e2 / t) + 1, r3 = 2 ** (t - 1);
  return { windows: n5, windowSize: r3 };
}
function dr2(t, e2) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((n5, r3) => {
    if (!(n5 instanceof e2)) throw new Error("invalid point at index " + r3);
  });
}
function hr2(t, e2) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((n5, r3) => {
    if (!e2.isValid(n5)) throw new Error("invalid scalar at index " + r3);
  });
}
var qt2 = /* @__PURE__ */ new WeakMap();
var Ie2 = /* @__PURE__ */ new WeakMap();
function $t2(t) {
  return Ie2.get(t) || 1;
}
function lr2(t, e2) {
  return { constTimeNegate: zt2, hasPrecomputes(n5) {
    return $t2(n5) !== 1;
  }, unsafeLadder(n5, r3, o5 = t.ZERO) {
    let s3 = n5;
    for (; r3 > Se2; ) r3 & gt2 && (o5 = o5.add(s3)), s3 = s3.double(), r3 >>= gt2;
    return o5;
  }, precomputeWindow(n5, r3) {
    const { windows: o5, windowSize: s3 } = Mt2(r3, e2), a3 = [];
    let u3 = n5, i4 = u3;
    for (let D4 = 0; D4 < o5; D4++) {
      i4 = u3, a3.push(i4);
      for (let c7 = 1; c7 < s3; c7++) i4 = i4.add(u3), a3.push(i4);
      u3 = i4.double();
    }
    return a3;
  }, wNAF(n5, r3, o5) {
    const { windows: s3, windowSize: a3 } = Mt2(n5, e2);
    let u3 = t.ZERO, i4 = t.BASE;
    const D4 = BigInt(2 ** n5 - 1), c7 = 2 ** n5, l8 = BigInt(n5);
    for (let p5 = 0; p5 < s3; p5++) {
      const w5 = p5 * a3;
      let h6 = Number(o5 & D4);
      o5 >>= l8, h6 > a3 && (h6 -= c7, o5 += gt2);
      const g4 = w5, S5 = w5 + Math.abs(h6) - 1, v6 = p5 % 2 !== 0, L5 = h6 < 0;
      h6 === 0 ? i4 = i4.add(zt2(v6, r3[g4])) : u3 = u3.add(zt2(L5, r3[S5]));
    }
    return { p: u3, f: i4 };
  }, wNAFUnsafe(n5, r3, o5, s3 = t.ZERO) {
    const { windows: a3, windowSize: u3 } = Mt2(n5, e2), i4 = BigInt(2 ** n5 - 1), D4 = 2 ** n5, c7 = BigInt(n5);
    for (let l8 = 0; l8 < a3; l8++) {
      const p5 = l8 * u3;
      if (o5 === Se2) break;
      let w5 = Number(o5 & i4);
      if (o5 >>= c7, w5 > u3 && (w5 -= D4, o5 += gt2), w5 === 0) continue;
      let h6 = r3[p5 + Math.abs(w5) - 1];
      w5 < 0 && (h6 = h6.negate()), s3 = s3.add(h6);
    }
    return s3;
  }, getPrecomputes(n5, r3, o5) {
    let s3 = qt2.get(r3);
    return s3 || (s3 = this.precomputeWindow(r3, n5), n5 !== 1 && qt2.set(r3, o5(s3))), s3;
  }, wNAFCached(n5, r3, o5) {
    const s3 = $t2(n5);
    return this.wNAF(s3, this.getPrecomputes(s3, n5, o5), r3);
  }, wNAFCachedUnsafe(n5, r3, o5, s3) {
    const a3 = $t2(n5);
    return a3 === 1 ? this.unsafeLadder(n5, r3, s3) : this.wNAFUnsafe(a3, this.getPrecomputes(a3, n5, o5), r3, s3);
  }, setWindowSize(n5, r3) {
    ve2(r3, e2), Ie2.set(n5, r3), qt2.delete(n5);
  } };
}
function br2(t, e2, n5, r3) {
  if (dr2(n5, t), hr2(r3, e2), n5.length !== r3.length) throw new Error("arrays of points and scalars must have equal length");
  const o5 = t.ZERO, s3 = tr2(BigInt(n5.length)), a3 = s3 > 12 ? s3 - 3 : s3 > 4 ? s3 - 2 : s3 ? 2 : 1, u3 = (1 << a3) - 1, i4 = new Array(u3 + 1).fill(o5), D4 = Math.floor((e2.BITS - 1) / a3) * a3;
  let c7 = o5;
  for (let l8 = D4; l8 >= 0; l8 -= a3) {
    i4.fill(o5);
    for (let w5 = 0; w5 < r3.length; w5++) {
      const h6 = r3[w5], g4 = Number(h6 >> BigInt(l8) & BigInt(u3));
      i4[g4] = i4[g4].add(n5[w5]);
    }
    let p5 = o5;
    for (let w5 = i4.length - 1, h6 = o5; w5 > 0; w5--) h6 = h6.add(i4[w5]), p5 = p5.add(h6);
    if (c7 = c7.add(p5), l8 !== 0) for (let w5 = 0; w5 < a3; w5++) c7 = c7.double();
  }
  return c7;
}
function pr2(t) {
  return ar2(t.Fp), Ot2(t, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...me2(t.n, t.nBitLength), ...t, p: t.Fp.ORDER });
}
var G2 = BigInt(0);
var j3 = BigInt(1);
var yt2 = BigInt(2);
var wr2 = BigInt(8);
var Er2 = { zip215: true };
function gr2(t) {
  const e2 = pr2(t);
  return Ot2(t, { hash: "function", a: "bigint", d: "bigint", randomBytes: "function" }, { adjustScalarBytes: "function", domain: "function", uvRatio: "function", mapToCurve: "function" }), Object.freeze({ ...e2 });
}
function yr2(t) {
  const e2 = gr2(t), { Fp: n5, n: r3, prehash: o5, hash: s3, randomBytes: a3, nByteLength: u3, h: i4 } = e2, D4 = yt2 << BigInt(u3 * 8) - j3, c7 = n5.create, l8 = _e2(e2.n, e2.nBitLength), p5 = e2.uvRatio || ((y6, f8) => {
    try {
      return { isValid: true, value: n5.sqrt(y6 * n5.inv(f8)) };
    } catch {
      return { isValid: false, value: G2 };
    }
  }), w5 = e2.adjustScalarBytes || ((y6) => y6), h6 = e2.domain || ((y6, f8, b5) => {
    if (Tt2("phflag", b5), f8.length || b5) throw new Error("Contexts/pre-hash are not supported");
    return y6;
  });
  function g4(y6, f8) {
    ft2("coordinate " + y6, f8, G2, D4);
  }
  function S5(y6) {
    if (!(y6 instanceof d5)) throw new Error("ExtendedPoint expected");
  }
  const v6 = xe2((y6, f8) => {
    const { ex: b5, ey: E6, ez: B4 } = y6, C5 = y6.is0();
    f8 == null && (f8 = C5 ? wr2 : n5.inv(B4));
    const A5 = c7(b5 * f8), U4 = c7(E6 * f8), _3 = c7(B4 * f8);
    if (C5) return { x: G2, y: j3 };
    if (_3 !== j3) throw new Error("invZ was invalid");
    return { x: A5, y: U4 };
  }), L5 = xe2((y6) => {
    const { a: f8, d: b5 } = e2;
    if (y6.is0()) throw new Error("bad point: ZERO");
    const { ex: E6, ey: B4, ez: C5, et: A5 } = y6, U4 = c7(E6 * E6), _3 = c7(B4 * B4), T5 = c7(C5 * C5), $4 = c7(T5 * T5), R4 = c7(U4 * f8), V4 = c7(T5 * c7(R4 + _3)), Y4 = c7($4 + c7(b5 * c7(U4 * _3)));
    if (V4 !== Y4) throw new Error("bad point: equation left != right (1)");
    const Z3 = c7(E6 * B4), X4 = c7(C5 * A5);
    if (Z3 !== X4) throw new Error("bad point: equation left != right (2)");
    return true;
  });
  class d5 {
    constructor(f8, b5, E6, B4) {
      this.ex = f8, this.ey = b5, this.ez = E6, this.et = B4, g4("x", f8), g4("y", b5), g4("z", E6), g4("t", B4), Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(f8) {
      if (f8 instanceof d5) throw new Error("extended point not allowed");
      const { x: b5, y: E6 } = f8 || {};
      return g4("x", b5), g4("y", E6), new d5(b5, E6, j3, c7(b5 * E6));
    }
    static normalizeZ(f8) {
      const b5 = n5.invertBatch(f8.map((E6) => E6.ez));
      return f8.map((E6, B4) => E6.toAffine(b5[B4])).map(d5.fromAffine);
    }
    static msm(f8, b5) {
      return br2(d5, l8, f8, b5);
    }
    _setWindowSize(f8) {
      q2.setWindowSize(this, f8);
    }
    assertValidity() {
      L5(this);
    }
    equals(f8) {
      S5(f8);
      const { ex: b5, ey: E6, ez: B4 } = this, { ex: C5, ey: A5, ez: U4 } = f8, _3 = c7(b5 * U4), T5 = c7(C5 * B4), $4 = c7(E6 * U4), R4 = c7(A5 * B4);
      return _3 === T5 && $4 === R4;
    }
    is0() {
      return this.equals(d5.ZERO);
    }
    negate() {
      return new d5(c7(-this.ex), this.ey, this.ez, c7(-this.et));
    }
    double() {
      const { a: f8 } = e2, { ex: b5, ey: E6, ez: B4 } = this, C5 = c7(b5 * b5), A5 = c7(E6 * E6), U4 = c7(yt2 * c7(B4 * B4)), _3 = c7(f8 * C5), T5 = b5 + E6, $4 = c7(c7(T5 * T5) - C5 - A5), R4 = _3 + A5, V4 = R4 - U4, Y4 = _3 - A5, Z3 = c7($4 * V4), X4 = c7(R4 * Y4), et = c7($4 * Y4), pt4 = c7(V4 * R4);
      return new d5(Z3, X4, pt4, et);
    }
    add(f8) {
      S5(f8);
      const { a: b5, d: E6 } = e2, { ex: B4, ey: C5, ez: A5, et: U4 } = this, { ex: _3, ey: T5, ez: $4, et: R4 } = f8;
      if (b5 === BigInt(-1)) {
        const re3 = c7((C5 - B4) * (T5 + _3)), oe2 = c7((C5 + B4) * (T5 - _3)), mt4 = c7(oe2 - re3);
        if (mt4 === G2) return this.double();
        const se4 = c7(A5 * yt2 * R4), ie4 = c7(U4 * yt2 * $4), ue4 = ie4 + se4, ce4 = oe2 + re3, ae4 = ie4 - se4, Dn3 = c7(ue4 * mt4), dn3 = c7(ce4 * ae4), hn3 = c7(ue4 * ae4), ln3 = c7(mt4 * ce4);
        return new d5(Dn3, dn3, ln3, hn3);
      }
      const V4 = c7(B4 * _3), Y4 = c7(C5 * T5), Z3 = c7(U4 * E6 * R4), X4 = c7(A5 * $4), et = c7((B4 + C5) * (_3 + T5) - V4 - Y4), pt4 = X4 - Z3, ee4 = X4 + Z3, ne4 = c7(Y4 - b5 * V4), un3 = c7(et * pt4), cn3 = c7(ee4 * ne4), an3 = c7(et * ne4), fn3 = c7(pt4 * ee4);
      return new d5(un3, cn3, fn3, an3);
    }
    subtract(f8) {
      return this.add(f8.negate());
    }
    wNAF(f8) {
      return q2.wNAFCached(this, f8, d5.normalizeZ);
    }
    multiply(f8) {
      const b5 = f8;
      ft2("scalar", b5, j3, r3);
      const { p: E6, f: B4 } = this.wNAF(b5);
      return d5.normalizeZ([E6, B4])[0];
    }
    multiplyUnsafe(f8, b5 = d5.ZERO) {
      const E6 = f8;
      return ft2("scalar", E6, G2, r3), E6 === G2 ? F3 : this.is0() || E6 === j3 ? this : q2.wNAFCachedUnsafe(this, E6, d5.normalizeZ, b5);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(i4).is0();
    }
    isTorsionFree() {
      return q2.unsafeLadder(this, r3).is0();
    }
    toAffine(f8) {
      return v6(this, f8);
    }
    clearCofactor() {
      const { h: f8 } = e2;
      return f8 === j3 ? this : this.multiplyUnsafe(f8);
    }
    static fromHex(f8, b5 = false) {
      const { d: E6, a: B4 } = e2, C5 = n5.BYTES;
      f8 = W2("pointHex", f8, C5), Tt2("zip215", b5);
      const A5 = f8.slice(), U4 = f8[C5 - 1];
      A5[C5 - 1] = U4 & -129;
      const _3 = Et2(A5), T5 = b5 ? D4 : n5.ORDER;
      ft2("pointHex.y", _3, G2, T5);
      const $4 = c7(_3 * _3), R4 = c7($4 - j3), V4 = c7(E6 * $4 - B4);
      let { isValid: Y4, value: Z3 } = p5(R4, V4);
      if (!Y4) throw new Error("Point.fromHex: invalid y coordinate");
      const X4 = (Z3 & j3) === j3, et = (U4 & 128) !== 0;
      if (!b5 && Z3 === G2 && et) throw new Error("Point.fromHex: x=0 and x_0=1");
      return et !== X4 && (Z3 = c7(-Z3)), d5.fromAffine({ x: Z3, y: _3 });
    }
    static fromPrivateKey(f8) {
      return O7(f8).point;
    }
    toRawBytes() {
      const { x: f8, y: b5 } = this.toAffine(), E6 = Nt2(b5, n5.BYTES);
      return E6[E6.length - 1] |= f8 & j3 ? 128 : 0, E6;
    }
    toHex() {
      return Ft2(this.toRawBytes());
    }
  }
  d5.BASE = new d5(e2.Gx, e2.Gy, j3, c7(e2.Gx * e2.Gy)), d5.ZERO = new d5(G2, j3, j3, G2);
  const { BASE: m4, ZERO: F3 } = d5, q2 = lr2(d5, u3 * 8);
  function z4(y6) {
    return H2(y6, r3);
  }
  function I5(y6) {
    return z4(Et2(y6));
  }
  function O7(y6) {
    const f8 = n5.BYTES;
    y6 = W2("private key", y6, f8);
    const b5 = W2("hashed private key", s3(y6), 2 * f8), E6 = w5(b5.slice(0, f8)), B4 = b5.slice(f8, 2 * f8), C5 = I5(E6), A5 = m4.multiply(C5), U4 = A5.toRawBytes();
    return { head: E6, prefix: B4, scalar: C5, point: A5, pointBytes: U4 };
  }
  function ot3(y6) {
    return O7(y6).pointBytes;
  }
  function tt3(y6 = new Uint8Array(), ...f8) {
    const b5 = ye2(...f8);
    return I5(s3(h6(b5, W2("context", y6), !!o5)));
  }
  function st(y6, f8, b5 = {}) {
    y6 = W2("message", y6), o5 && (y6 = o5(y6));
    const { prefix: E6, scalar: B4, pointBytes: C5 } = O7(f8), A5 = tt3(b5.context, E6, y6), U4 = m4.multiply(A5).toRawBytes(), _3 = tt3(b5.context, U4, C5, y6), T5 = z4(A5 + _3 * B4);
    ft2("signature.s", T5, G2, r3);
    const $4 = ye2(U4, Nt2(T5, n5.BYTES));
    return W2("result", $4, n5.BYTES * 2);
  }
  const at3 = Er2;
  function Ct4(y6, f8, b5, E6 = at3) {
    const { context: B4, zip215: C5 } = E6, A5 = n5.BYTES;
    y6 = W2("signature", y6, 2 * A5), f8 = W2("message", f8), b5 = W2("publicKey", b5, A5), C5 !== void 0 && Tt2("zip215", C5), o5 && (f8 = o5(f8));
    const U4 = Et2(y6.slice(A5, 2 * A5));
    let _3, T5, $4;
    try {
      _3 = d5.fromHex(b5, C5), T5 = d5.fromHex(y6.slice(0, A5), C5), $4 = m4.multiplyUnsafe(U4);
    } catch {
      return false;
    }
    if (!C5 && _3.isSmallOrder()) return false;
    const R4 = tt3(B4, T5.toRawBytes(), _3.toRawBytes(), f8);
    return T5.add(_3.multiplyUnsafe(R4)).subtract($4).clearCofactor().equals(d5.ZERO);
  }
  return m4._setWindowSize(8), { CURVE: e2, getPublicKey: ot3, sign: st, verify: Ct4, ExtendedPoint: d5, utils: { getExtendedPublicKey: O7, randomPrivateKey: () => a3(n5.BYTES), precompute(y6 = 8, f8 = d5.BASE) {
    return f8._setWindowSize(y6), f8.multiply(BigInt(3)), f8;
  } } };
}
BigInt(0), BigInt(1);
var kt2 = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949");
var Ue2 = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752");
BigInt(0);
var xr2 = BigInt(1);
var Te2 = BigInt(2);
BigInt(3);
var Br2 = BigInt(5);
var Cr2 = BigInt(8);
function Ar2(t) {
  const e2 = BigInt(10), n5 = BigInt(20), r3 = BigInt(40), o5 = BigInt(80), s3 = kt2, u3 = t * t % s3 * t % s3, i4 = J3(u3, Te2, s3) * u3 % s3, D4 = J3(i4, xr2, s3) * t % s3, c7 = J3(D4, Br2, s3) * D4 % s3, l8 = J3(c7, e2, s3) * c7 % s3, p5 = J3(l8, n5, s3) * l8 % s3, w5 = J3(p5, r3, s3) * p5 % s3, h6 = J3(w5, o5, s3) * w5 % s3, g4 = J3(h6, o5, s3) * w5 % s3, S5 = J3(g4, e2, s3) * c7 % s3;
  return { pow_p_5_8: J3(S5, Te2, s3) * t % s3, b2: u3 };
}
function mr2(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
function _r2(t, e2) {
  const n5 = kt2, r3 = H2(e2 * e2 * e2, n5), o5 = H2(r3 * r3 * e2, n5), s3 = Ar2(t * o5).pow_p_5_8;
  let a3 = H2(t * r3 * s3, n5);
  const u3 = H2(e2 * a3 * a3, n5), i4 = a3, D4 = H2(a3 * Ue2, n5), c7 = u3 === t, l8 = u3 === H2(-t, n5), p5 = u3 === H2(-t * Ue2, n5);
  return c7 && (a3 = i4), (l8 || p5) && (a3 = D4), ur2(a3, n5) && (a3 = H2(-a3, n5)), { isValid: c7 || l8, value: a3 };
}
var Sr2 = (() => _e2(kt2, void 0, true))();
var vr2 = (() => ({ a: BigInt(-1), d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"), Fp: Sr2, n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), h: Cr2, Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"), Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"), hash: Kn2, randomBytes: he2, adjustScalarBytes: mr2, uvRatio: _r2 }))();
var Rt2 = (() => yr2(vr2))();
var ut2 = ".";
var Dt2 = "base64url";
var Gt2 = "utf8";
var xt2 = "utf8";
function Xt2(t) {
  return globalThis.Buffer != null ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t;
}
function Le2(t = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Xt2(globalThis.Buffer.allocUnsafe(t)) : new Uint8Array(t);
}
function Ir2(t, e2) {
  if (t.length >= 255) throw new TypeError("Alphabet too long");
  for (var n5 = new Uint8Array(256), r3 = 0; r3 < n5.length; r3++) n5[r3] = 255;
  for (var o5 = 0; o5 < t.length; o5++) {
    var s3 = t.charAt(o5), a3 = s3.charCodeAt(0);
    if (n5[a3] !== 255) throw new TypeError(s3 + " is ambiguous");
    n5[a3] = o5;
  }
  var u3 = t.length, i4 = t.charAt(0), D4 = Math.log(u3) / Math.log(256), c7 = Math.log(256) / Math.log(u3);
  function l8(h6) {
    if (h6 instanceof Uint8Array || (ArrayBuffer.isView(h6) ? h6 = new Uint8Array(h6.buffer, h6.byteOffset, h6.byteLength) : Array.isArray(h6) && (h6 = Uint8Array.from(h6))), !(h6 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (h6.length === 0) return "";
    for (var g4 = 0, S5 = 0, v6 = 0, L5 = h6.length; v6 !== L5 && h6[v6] === 0; ) v6++, g4++;
    for (var d5 = (L5 - v6) * c7 + 1 >>> 0, m4 = new Uint8Array(d5); v6 !== L5; ) {
      for (var F3 = h6[v6], q2 = 0, z4 = d5 - 1; (F3 !== 0 || q2 < S5) && z4 !== -1; z4--, q2++) F3 += 256 * m4[z4] >>> 0, m4[z4] = F3 % u3 >>> 0, F3 = F3 / u3 >>> 0;
      if (F3 !== 0) throw new Error("Non-zero carry");
      S5 = q2, v6++;
    }
    for (var I5 = d5 - S5; I5 !== d5 && m4[I5] === 0; ) I5++;
    for (var O7 = i4.repeat(g4); I5 < d5; ++I5) O7 += t.charAt(m4[I5]);
    return O7;
  }
  function p5(h6) {
    if (typeof h6 != "string") throw new TypeError("Expected String");
    if (h6.length === 0) return new Uint8Array();
    var g4 = 0;
    if (h6[g4] !== " ") {
      for (var S5 = 0, v6 = 0; h6[g4] === i4; ) S5++, g4++;
      for (var L5 = (h6.length - g4) * D4 + 1 >>> 0, d5 = new Uint8Array(L5); h6[g4]; ) {
        var m4 = n5[h6.charCodeAt(g4)];
        if (m4 === 255) return;
        for (var F3 = 0, q2 = L5 - 1; (m4 !== 0 || F3 < v6) && q2 !== -1; q2--, F3++) m4 += u3 * d5[q2] >>> 0, d5[q2] = m4 % 256 >>> 0, m4 = m4 / 256 >>> 0;
        if (m4 !== 0) throw new Error("Non-zero carry");
        v6 = F3, g4++;
      }
      if (h6[g4] !== " ") {
        for (var z4 = L5 - v6; z4 !== L5 && d5[z4] === 0; ) z4++;
        for (var I5 = new Uint8Array(S5 + (L5 - z4)), O7 = S5; z4 !== L5; ) I5[O7++] = d5[z4++];
        return I5;
      }
    }
  }
  function w5(h6) {
    var g4 = p5(h6);
    if (g4) return g4;
    throw new Error(`Non-${e2} character`);
  }
  return { encode: l8, decodeUnsafe: p5, decode: w5 };
}
var Ur2 = Ir2;
var Tr2 = Ur2;
var He2 = (t) => {
  if (t instanceof Uint8Array && t.constructor.name === "Uint8Array") return t;
  if (t instanceof ArrayBuffer) return new Uint8Array(t);
  if (ArrayBuffer.isView(t)) return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var Fr2 = (t) => new TextEncoder().encode(t);
var Nr2 = (t) => new TextDecoder().decode(t);
var Lr2 = class {
  constructor(e2, n5, r3) {
    this.name = e2, this.prefix = n5, this.baseEncode = r3;
  }
  encode(e2) {
    if (e2 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e2)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var Or2 = class {
  constructor(e2, n5, r3) {
    if (this.name = e2, this.prefix = n5, n5.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = n5.codePointAt(0), this.baseDecode = r3;
  }
  decode(e2) {
    if (typeof e2 == "string") {
      if (e2.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e2)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e2.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e2) {
    return ze2(this, e2);
  }
};
var Hr2 = class {
  constructor(e2) {
    this.decoders = e2;
  }
  or(e2) {
    return ze2(this, e2);
  }
  decode(e2) {
    const n5 = e2[0], r3 = this.decoders[n5];
    if (r3) return r3.decode(e2);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e2)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var ze2 = (t, e2) => new Hr2({ ...t.decoders || { [t.prefix]: t }, ...e2.decoders || { [e2.prefix]: e2 } });
var zr2 = class {
  constructor(e2, n5, r3, o5) {
    this.name = e2, this.prefix = n5, this.baseEncode = r3, this.baseDecode = o5, this.encoder = new Lr2(e2, n5, r3), this.decoder = new Or2(e2, n5, o5);
  }
  encode(e2) {
    return this.encoder.encode(e2);
  }
  decode(e2) {
    return this.decoder.decode(e2);
  }
};
var Bt2 = ({ name: t, prefix: e2, encode: n5, decode: r3 }) => new zr2(t, e2, n5, r3);
var ht2 = ({ prefix: t, name: e2, alphabet: n5 }) => {
  const { encode: r3, decode: o5 } = Tr2(n5, e2);
  return Bt2({ prefix: t, name: e2, encode: r3, decode: (s3) => He2(o5(s3)) });
};
var Mr2 = (t, e2, n5, r3) => {
  const o5 = {};
  for (let c7 = 0; c7 < e2.length; ++c7) o5[e2[c7]] = c7;
  let s3 = t.length;
  for (; t[s3 - 1] === "="; ) --s3;
  const a3 = new Uint8Array(s3 * n5 / 8 | 0);
  let u3 = 0, i4 = 0, D4 = 0;
  for (let c7 = 0; c7 < s3; ++c7) {
    const l8 = o5[t[c7]];
    if (l8 === void 0) throw new SyntaxError(`Non-${r3} character`);
    i4 = i4 << n5 | l8, u3 += n5, u3 >= 8 && (u3 -= 8, a3[D4++] = 255 & i4 >> u3);
  }
  if (u3 >= n5 || 255 & i4 << 8 - u3) throw new SyntaxError("Unexpected end of data");
  return a3;
};
var qr2 = (t, e2, n5) => {
  const r3 = e2[e2.length - 1] === "=", o5 = (1 << n5) - 1;
  let s3 = "", a3 = 0, u3 = 0;
  for (let i4 = 0; i4 < t.length; ++i4) for (u3 = u3 << 8 | t[i4], a3 += 8; a3 > n5; ) a3 -= n5, s3 += e2[o5 & u3 >> a3];
  if (a3 && (s3 += e2[o5 & u3 << n5 - a3]), r3) for (; s3.length * n5 & 7; ) s3 += "=";
  return s3;
};
var k5 = ({ name: t, prefix: e2, bitsPerChar: n5, alphabet: r3 }) => Bt2({ prefix: e2, name: t, encode(o5) {
  return qr2(o5, r3, n5);
}, decode(o5) {
  return Mr2(o5, r3, n5, t);
} });
var $r2 = Bt2({ prefix: "\0", name: "identity", encode: (t) => Nr2(t), decode: (t) => Fr2(t) });
var kr2 = Object.freeze({ __proto__: null, identity: $r2 });
var Rr2 = k5({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var jr2 = Object.freeze({ __proto__: null, base2: Rr2 });
var Zr2 = k5({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Gr2 = Object.freeze({ __proto__: null, base8: Zr2 });
var Vr2 = ht2({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Yr2 = Object.freeze({ __proto__: null, base10: Vr2 });
var Jr2 = k5({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
var Kr2 = k5({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Wr2 = Object.freeze({ __proto__: null, base16: Jr2, base16upper: Kr2 });
var Xr2 = k5({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
var Pr2 = k5({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
var Qr2 = k5({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
var to2 = k5({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
var eo2 = k5({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
var no2 = k5({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
var ro2 = k5({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
var oo2 = k5({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
var so2 = k5({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var io2 = Object.freeze({ __proto__: null, base32: Xr2, base32upper: Pr2, base32pad: Qr2, base32padupper: to2, base32hex: eo2, base32hexupper: no2, base32hexpad: ro2, base32hexpadupper: oo2, base32z: so2 });
var uo2 = ht2({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
var co2 = ht2({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var ao2 = Object.freeze({ __proto__: null, base36: uo2, base36upper: co2 });
var fo2 = ht2({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
var Do2 = ht2({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var ho2 = Object.freeze({ __proto__: null, base58btc: fo2, base58flickr: Do2 });
var lo2 = k5({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
var bo2 = k5({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
var po2 = k5({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
var wo2 = k5({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Eo2 = Object.freeze({ __proto__: null, base64: lo2, base64pad: bo2, base64url: po2, base64urlpad: wo2 });
var Me2 = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}");
var go2 = Me2.reduce((t, e2, n5) => (t[n5] = e2, t), []);
var yo2 = Me2.reduce((t, e2, n5) => (t[e2.codePointAt(0)] = n5, t), []);
function xo2(t) {
  return t.reduce((e2, n5) => (e2 += go2[n5], e2), "");
}
function Bo2(t) {
  const e2 = [];
  for (const n5 of t) {
    const r3 = yo2[n5.codePointAt(0)];
    if (r3 === void 0) throw new Error(`Non-base256emoji character: ${n5}`);
    e2.push(r3);
  }
  return new Uint8Array(e2);
}
var Co2 = Bt2({ prefix: "\u{1F680}", name: "base256emoji", encode: xo2, decode: Bo2 });
var Ao2 = Object.freeze({ __proto__: null, base256emoji: Co2 });
var mo2 = $e2;
var qe2 = 128;
var _o2 = 127;
var So2 = ~_o2;
var vo2 = Math.pow(2, 31);
function $e2(t, e2, n5) {
  e2 = e2 || [], n5 = n5 || 0;
  for (var r3 = n5; t >= vo2; ) e2[n5++] = t & 255 | qe2, t /= 128;
  for (; t & So2; ) e2[n5++] = t & 255 | qe2, t >>>= 7;
  return e2[n5] = t | 0, $e2.bytes = n5 - r3 + 1, e2;
}
var Io2 = Pt2;
var Uo2 = 128;
var ke2 = 127;
function Pt2(t, r3) {
  var n5 = 0, r3 = r3 || 0, o5 = 0, s3 = r3, a3, u3 = t.length;
  do {
    if (s3 >= u3) throw Pt2.bytes = 0, new RangeError("Could not decode varint");
    a3 = t[s3++], n5 += o5 < 28 ? (a3 & ke2) << o5 : (a3 & ke2) * Math.pow(2, o5), o5 += 7;
  } while (a3 >= Uo2);
  return Pt2.bytes = s3 - r3, n5;
}
var To2 = Math.pow(2, 7);
var Fo2 = Math.pow(2, 14);
var No2 = Math.pow(2, 21);
var Lo2 = Math.pow(2, 28);
var Oo2 = Math.pow(2, 35);
var Ho2 = Math.pow(2, 42);
var zo2 = Math.pow(2, 49);
var Mo2 = Math.pow(2, 56);
var qo2 = Math.pow(2, 63);
var $o2 = function(t) {
  return t < To2 ? 1 : t < Fo2 ? 2 : t < No2 ? 3 : t < Lo2 ? 4 : t < Oo2 ? 5 : t < Ho2 ? 6 : t < zo2 ? 7 : t < Mo2 ? 8 : t < qo2 ? 9 : 10;
};
var ko2 = { encode: mo2, decode: Io2, encodingLength: $o2 };
var Re2 = ko2;
var je2 = (t, e2, n5 = 0) => (Re2.encode(t, e2, n5), e2);
var Ze2 = (t) => Re2.encodingLength(t);
var Qt2 = (t, e2) => {
  const n5 = e2.byteLength, r3 = Ze2(t), o5 = r3 + Ze2(n5), s3 = new Uint8Array(o5 + n5);
  return je2(t, s3, 0), je2(n5, s3, r3), s3.set(e2, o5), new Ro2(t, n5, e2, s3);
};
var Ro2 = class {
  constructor(e2, n5, r3, o5) {
    this.code = e2, this.size = n5, this.digest = r3, this.bytes = o5;
  }
};
var Ge2 = ({ name: t, code: e2, encode: n5 }) => new jo2(t, e2, n5);
var jo2 = class {
  constructor(e2, n5, r3) {
    this.name = e2, this.code = n5, this.encode = r3;
  }
  digest(e2) {
    if (e2 instanceof Uint8Array) {
      const n5 = this.encode(e2);
      return n5 instanceof Uint8Array ? Qt2(this.code, n5) : n5.then((r3) => Qt2(this.code, r3));
    } else throw Error("Unknown type, must be binary type");
  }
};
var Ve2 = (t) => async (e2) => new Uint8Array(await crypto.subtle.digest(t, e2));
var Zo2 = Ge2({ name: "sha2-256", code: 18, encode: Ve2("SHA-256") });
var Go2 = Ge2({ name: "sha2-512", code: 19, encode: Ve2("SHA-512") });
var Vo2 = Object.freeze({ __proto__: null, sha256: Zo2, sha512: Go2 });
var Ye2 = 0;
var Yo2 = "identity";
var Je2 = He2;
var Jo2 = (t) => Qt2(Ye2, Je2(t));
var Ko2 = { code: Ye2, name: Yo2, encode: Je2, digest: Jo2 };
var Wo2 = Object.freeze({ __proto__: null, identity: Ko2 });
new TextEncoder(), new TextDecoder();
var Ke2 = { ...kr2, ...jr2, ...Gr2, ...Yr2, ...Wr2, ...io2, ...ao2, ...ho2, ...Eo2, ...Ao2 };
({ ...Vo2, ...Wo2 });
function We2(t, e2, n5, r3) {
  return { name: t, prefix: e2, encoder: { name: t, prefix: e2, encode: n5 }, decoder: { decode: r3 } };
}
var Xe2 = We2("utf8", "u", (t) => "u" + new TextDecoder("utf8").decode(t), (t) => new TextEncoder().encode(t.substring(1)));
var te2 = We2("ascii", "a", (t) => {
  let e2 = "a";
  for (let n5 = 0; n5 < t.length; n5++) e2 += String.fromCharCode(t[n5]);
  return e2;
}, (t) => {
  t = t.substring(1);
  const e2 = Le2(t.length);
  for (let n5 = 0; n5 < t.length; n5++) e2[n5] = t.charCodeAt(n5);
  return e2;
});
var Pe2 = { utf8: Xe2, "utf-8": Xe2, hex: Ke2.base16, latin1: te2, ascii: te2, binary: te2, ...Ke2 };
function ct2(t, e2 = "utf8") {
  const n5 = Pe2[e2];
  if (!n5) throw new Error(`Unsupported encoding "${e2}"`);
  return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? globalThis.Buffer.from(t.buffer, t.byteOffset, t.byteLength).toString("utf8") : n5.encoder.encode(t).substring(1);
}
function rt2(t, e2 = "utf8") {
  const n5 = Pe2[e2];
  if (!n5) throw new Error(`Unsupported encoding "${e2}"`);
  return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Xt2(globalThis.Buffer.from(t, "utf-8")) : n5.decoder.decode(`${n5.prefix}${t}`);
}
function lt2(t) {
  return safeJsonParse2(ct2(rt2(t, Dt2), Gt2));
}
function nn2(t) {
  return rt2(t, Dt2);
}
function sn2(t) {
  const e2 = t.split(ut2), n5 = lt2(e2[0]), r3 = lt2(e2[1]), o5 = nn2(e2[2]), s3 = rt2(e2.slice(0, 2).join(ut2), xt2);
  return { header: n5, payload: r3, signature: o5, data: s3 };
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/uint8arrays/esm/src/util/as-uint8array.js
function asUint8Array(buf) {
  if (globalThis.Buffer != null) {
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  return buf;
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/uint8arrays/esm/src/alloc.js
function allocUnsafe(size2 = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return asUint8Array(globalThis.Buffer.allocUnsafe(size2));
  }
  return new Uint8Array(size2);
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/uint8arrays/esm/src/concat.js
function concat(arrays, length2) {
  if (!length2) {
    length2 = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = allocUnsafe(length2);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return asUint8Array(output);
}

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/bases/identity.js
var identity_exports = {};
__export(identity_exports, {
  identity: () => identity
});

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/vendor/base-x.js
function base2(ALPHABET2, name2) {
  if (ALPHABET2.length >= 255) {
    throw new TypeError("Alphabet too long");
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j6 = 0; j6 < BASE_MAP.length; j6++) {
    BASE_MAP[j6] = 255;
  }
  for (var i4 = 0; i4 < ALPHABET2.length; i4++) {
    var x7 = ALPHABET2.charAt(i4);
    var xc2 = x7.charCodeAt(0);
    if (BASE_MAP[xc2] !== 255) {
      throw new TypeError(x7 + " is ambiguous");
    }
    BASE_MAP[xc2] = i4;
  }
  var BASE = ALPHABET2.length;
  var LEADER = ALPHABET2.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode6(source) {
    if (source instanceof Uint8Array) ;
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError("Expected Uint8Array");
    }
    if (source.length === 0) {
      return "";
    }
    var zeroes = 0;
    var length2 = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size2 = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size2);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i5 = 0;
      for (var it1 = size2 - 1; (carry !== 0 || i5 < length2) && it1 !== -1; it1--, i5++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i5;
      pbegin++;
    }
    var it22 = size2 - length2;
    while (it22 !== size2 && b58[it22] === 0) {
      it22++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it22 < size2; ++it22) {
      str += ALPHABET2.charAt(b58[it22]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== "string") {
      throw new TypeError("Expected String");
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === " ") {
      return;
    }
    var zeroes = 0;
    var length2 = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size2 = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size2);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i5 = 0;
      for (var it32 = size2 - 1; (carry !== 0 || i5 < length2) && it32 !== -1; it32--, i5++) {
        carry += BASE * b256[it32] >>> 0;
        b256[it32] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error("Non-zero carry");
      }
      length2 = i5;
      psz++;
    }
    if (source[psz] === " ") {
      return;
    }
    var it42 = size2 - length2;
    while (it42 !== size2 && b256[it42] === 0) {
      it42++;
    }
    var vch = new Uint8Array(zeroes + (size2 - it42));
    var j7 = zeroes;
    while (it42 !== size2) {
      vch[j7++] = b256[it42++];
    }
    return vch;
  }
  function decode7(string3) {
    var buffer = decodeUnsafe(string3);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${name2} character`);
  }
  return {
    encode: encode6,
    decodeUnsafe,
    decode: decode7
  };
}
var src = base2;
var _brrp__multiformats_scope_baseX = src;
var base_x_default = _brrp__multiformats_scope_baseX;

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/bytes.js
var empty = new Uint8Array(0);
var equals = (aa2, bb) => {
  if (aa2 === bb)
    return true;
  if (aa2.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii4 = 0; ii4 < aa2.byteLength; ii4++) {
    if (aa2[ii4] !== bb[ii4]) {
      return false;
    }
  }
  return true;
};
var coerce = (o5) => {
  if (o5 instanceof Uint8Array && o5.constructor.name === "Uint8Array")
    return o5;
  if (o5 instanceof ArrayBuffer)
    return new Uint8Array(o5);
  if (ArrayBuffer.isView(o5)) {
    return new Uint8Array(o5.buffer, o5.byteOffset, o5.byteLength);
  }
  throw new Error("Unknown type, must be binary type");
};
var fromString = (str) => new TextEncoder().encode(str);
var toString = (b5) => new TextDecoder().decode(b5);

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/bases/base.js
var Encoder2 = class {
  constructor(name2, prefix, baseEncode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${this.prefix}${this.baseEncode(bytes)}`;
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};
var Decoder2 = class {
  constructor(name2, prefix, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    if (prefix.codePointAt(0) === void 0) {
      throw new Error("Invalid prefix character");
    }
    this.prefixCodePoint = prefix.codePointAt(0);
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === "string") {
      if (text.codePointAt(0) !== this.prefixCodePoint) {
        throw Error(`Unable to decode multibase string ${JSON.stringify(text)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      }
      return this.baseDecode(text.slice(this.prefix.length));
    } else {
      throw Error("Can only multibase decode strings");
    }
  }
  or(decoder) {
    return or3(this, decoder);
  }
};
var ComposedDecoder = class {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or3(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${JSON.stringify(input)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
    }
  }
};
var or3 = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
var Codec = class {
  constructor(name2, prefix, baseEncode, baseDecode) {
    this.name = name2;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder2(name2, prefix, baseEncode);
    this.decoder = new Decoder2(name2, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
};
var from = ({ name: name2, prefix, encode: encode6, decode: decode7 }) => new Codec(name2, prefix, encode6, decode7);
var baseX = ({ prefix, name: name2, alphabet: alphabet3 }) => {
  const { encode: encode6, decode: decode7 } = base_x_default(alphabet3, name2);
  return from({
    prefix,
    name: name2,
    encode: encode6,
    decode: (text) => coerce(decode7(text))
  });
};
var decode2 = (string3, alphabet3, bitsPerChar, name2) => {
  const codes = {};
  for (let i4 = 0; i4 < alphabet3.length; ++i4) {
    codes[alphabet3[i4]] = i4;
  }
  let end = string3.length;
  while (string3[end - 1] === "=") {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i4 = 0; i4 < end; ++i4) {
    const value = codes[string3[i4]];
    if (value === void 0) {
      throw new SyntaxError(`Non-${name2} character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError("Unexpected end of data");
  }
  return out;
};
var encode2 = (data, alphabet3, bitsPerChar) => {
  const pad2 = alphabet3[alphabet3.length - 1] === "=";
  const mask = (1 << bitsPerChar) - 1;
  let out = "";
  let bits = 0;
  let buffer = 0;
  for (let i4 = 0; i4 < data.length; ++i4) {
    buffer = buffer << 8 | data[i4];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet3[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet3[mask & buffer << bitsPerChar - bits];
  }
  if (pad2) {
    while (out.length * bitsPerChar & 7) {
      out += "=";
    }
  }
  return out;
};
var rfc4648 = ({ name: name2, prefix, bitsPerChar, alphabet: alphabet3 }) => {
  return from({
    prefix,
    name: name2,
    encode(input) {
      return encode2(input, alphabet3, bitsPerChar);
    },
    decode(input) {
      return decode2(input, alphabet3, bitsPerChar, name2);
    }
  });
};

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/bases/identity.js
var identity = from({
  prefix: "\0",
  name: "identity",
  encode: (buf) => toString(buf),
  decode: (str) => fromString(str)
});

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/bases/base2.js
var base2_exports = {};
__export(base2_exports, {
  base2: () => base22
});
var base22 = rfc4648({
  prefix: "0",
  name: "base2",
  alphabet: "01",
  bitsPerChar: 1
});

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/bases/base8.js
var base8_exports = {};
__export(base8_exports, {
  base8: () => base8
});
var base8 = rfc4648({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3
});

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/bases/base10.js
var base10_exports = {};
__export(base10_exports, {
  base10: () => base10
});
var base10 = baseX({
  prefix: "9",
  name: "base10",
  alphabet: "0123456789"
});

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/bases/base16.js
var base16_exports = {};
__export(base16_exports, {
  base16: () => base16,
  base16upper: () => base16upper
});
var base16 = rfc4648({
  prefix: "f",
  name: "base16",
  alphabet: "0123456789abcdef",
  bitsPerChar: 4
});
var base16upper = rfc4648({
  prefix: "F",
  name: "base16upper",
  alphabet: "0123456789ABCDEF",
  bitsPerChar: 4
});

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/bases/base32.js
var base32_exports = {};
__export(base32_exports, {
  base32: () => base322,
  base32hex: () => base32hex,
  base32hexpad: () => base32hexpad,
  base32hexpadupper: () => base32hexpadupper,
  base32hexupper: () => base32hexupper,
  base32pad: () => base32pad,
  base32padupper: () => base32padupper,
  base32upper: () => base32upper,
  base32z: () => base32z
});
var base322 = rfc4648({
  prefix: "b",
  name: "base32",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567",
  bitsPerChar: 5
});
var base32upper = rfc4648({
  prefix: "B",
  name: "base32upper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
  bitsPerChar: 5
});
var base32pad = rfc4648({
  prefix: "c",
  name: "base32pad",
  alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
  bitsPerChar: 5
});
var base32padupper = rfc4648({
  prefix: "C",
  name: "base32padupper",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
  bitsPerChar: 5
});
var base32hex = rfc4648({
  prefix: "v",
  name: "base32hex",
  alphabet: "0123456789abcdefghijklmnopqrstuv",
  bitsPerChar: 5
});
var base32hexupper = rfc4648({
  prefix: "V",
  name: "base32hexupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
  bitsPerChar: 5
});
var base32hexpad = rfc4648({
  prefix: "t",
  name: "base32hexpad",
  alphabet: "0123456789abcdefghijklmnopqrstuv=",
  bitsPerChar: 5
});
var base32hexpadupper = rfc4648({
  prefix: "T",
  name: "base32hexpadupper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
  bitsPerChar: 5
});
var base32z = rfc4648({
  prefix: "h",
  name: "base32z",
  alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
  bitsPerChar: 5
});

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/bases/base36.js
var base36_exports = {};
__export(base36_exports, {
  base36: () => base36,
  base36upper: () => base36upper
});
var base36 = baseX({
  prefix: "k",
  name: "base36",
  alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
});
var base36upper = baseX({
  prefix: "K",
  name: "base36upper",
  alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
});

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/bases/base58.js
var base58_exports = {};
__export(base58_exports, {
  base58btc: () => base58btc,
  base58flickr: () => base58flickr
});
var base58btc = baseX({
  name: "base58btc",
  prefix: "z",
  alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
});
var base58flickr = baseX({
  name: "base58flickr",
  prefix: "Z",
  alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
});

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/bases/base64.js
var base64_exports = {};
__export(base64_exports, {
  base64: () => base64,
  base64pad: () => base64pad,
  base64url: () => base64url,
  base64urlpad: () => base64urlpad
});
var base64 = rfc4648({
  prefix: "m",
  name: "base64",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
  bitsPerChar: 6
});
var base64pad = rfc4648({
  prefix: "M",
  name: "base64pad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  bitsPerChar: 6
});
var base64url = rfc4648({
  prefix: "u",
  name: "base64url",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
  bitsPerChar: 6
});
var base64urlpad = rfc4648({
  prefix: "U",
  name: "base64urlpad",
  alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
  bitsPerChar: 6
});

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/bases/base256emoji.js
var base256emoji_exports = {};
__export(base256emoji_exports, {
  base256emoji: () => base256emoji
});
var alphabet2 = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}");
var alphabetBytesToChars = alphabet2.reduce((p5, c7, i4) => {
  p5[i4] = c7;
  return p5;
}, []);
var alphabetCharsToBytes = alphabet2.reduce((p5, c7, i4) => {
  p5[c7.codePointAt(0)] = i4;
  return p5;
}, []);
function encode3(data) {
  return data.reduce((p5, c7) => {
    p5 += alphabetBytesToChars[c7];
    return p5;
  }, "");
}
function decode3(str) {
  const byts = [];
  for (const char of str) {
    const byt = alphabetCharsToBytes[char.codePointAt(0)];
    if (byt === void 0) {
      throw new Error(`Non-base256emoji character: ${char}`);
    }
    byts.push(byt);
  }
  return new Uint8Array(byts);
}
var base256emoji = from({
  prefix: "\u{1F680}",
  name: "base256emoji",
  encode: encode3,
  decode: decode3
});

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha2_browser_exports = {};
__export(sha2_browser_exports, {
  sha256: () => sha2562,
  sha512: () => sha512
});

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/vendor/varint.js
var encode_1 = encode4;
var MSB = 128;
var REST = 127;
var MSBALL = ~REST;
var INT = Math.pow(2, 31);
function encode4(num2, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num2 >= INT) {
    out[offset++] = num2 & 255 | MSB;
    num2 /= 128;
  }
  while (num2 & MSBALL) {
    out[offset++] = num2 & 255 | MSB;
    num2 >>>= 7;
  }
  out[offset] = num2 | 0;
  encode4.bytes = offset - oldOffset + 1;
  return out;
}
var decode4 = read;
var MSB$1 = 128;
var REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b5, l8 = buf.length;
  do {
    if (counter >= l8) {
      read.bytes = 0;
      throw new RangeError("Could not decode varint");
    }
    b5 = buf[counter++];
    res += shift < 28 ? (b5 & REST$1) << shift : (b5 & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b5 >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N22 = Math.pow(2, 14);
var N32 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function(value) {
  return value < N1 ? 1 : value < N22 ? 2 : value < N32 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode: decode4,
  encodingLength: length
};
var _brrp_varint = varint;
var varint_default = _brrp_varint;

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/varint.js
var decode5 = (data, offset = 0) => {
  const code2 = varint_default.decode(data, offset);
  return [
    code2,
    varint_default.decode.bytes
  ];
};
var encodeTo = (int, target, offset = 0) => {
  varint_default.encode(int, target, offset);
  return target;
};
var encodingLength = (int) => {
  return varint_default.encodingLength(int);
};

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/hashes/digest.js
var create = (code2, digest2) => {
  const size2 = digest2.byteLength;
  const sizeOffset = encodingLength(code2);
  const digestOffset = sizeOffset + encodingLength(size2);
  const bytes = new Uint8Array(digestOffset + size2);
  encodeTo(code2, bytes, 0);
  encodeTo(size2, bytes, sizeOffset);
  bytes.set(digest2, digestOffset);
  return new Digest(code2, size2, digest2, bytes);
};
var decode6 = (multihash) => {
  const bytes = coerce(multihash);
  const [code2, sizeOffset] = decode5(bytes);
  const [size2, digestOffset] = decode5(bytes.subarray(sizeOffset));
  const digest2 = bytes.subarray(sizeOffset + digestOffset);
  if (digest2.byteLength !== size2) {
    throw new Error("Incorrect length");
  }
  return new Digest(code2, size2, digest2, bytes);
};
var equals2 = (a3, b5) => {
  if (a3 === b5) {
    return true;
  } else {
    return a3.code === b5.code && a3.size === b5.size && equals(a3.bytes, b5.bytes);
  }
};
var Digest = class {
  constructor(code2, size2, digest2, bytes) {
    this.code = code2;
    this.size = size2;
    this.digest = digest2;
    this.bytes = bytes;
  }
};

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/hashes/hasher.js
var from2 = ({ name: name2, code: code2, encode: encode6 }) => new Hasher(name2, code2, encode6);
var Hasher = class {
  constructor(name2, code2, encode6) {
    this.name = name2;
    this.code = code2;
    this.encode = encode6;
  }
  digest(input) {
    if (input instanceof Uint8Array) {
      const result = this.encode(input);
      return result instanceof Uint8Array ? create(this.code, result) : result.then((digest2) => create(this.code, digest2));
    } else {
      throw Error("Unknown type, must be binary type");
    }
  }
};

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/hashes/sha2-browser.js
var sha = (name2) => async (data) => new Uint8Array(await crypto.subtle.digest(name2, data));
var sha2562 = from2({
  name: "sha2-256",
  code: 18,
  encode: sha("SHA-256")
});
var sha512 = from2({
  name: "sha2-512",
  code: 19,
  encode: sha("SHA-512")
});

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/hashes/identity.js
var identity_exports2 = {};
__export(identity_exports2, {
  identity: () => identity2
});
var code = 0;
var name = "identity";
var encode5 = coerce;
var digest = (input) => create(code, encode5(input));
var identity2 = {
  code,
  name,
  encode: encode5,
  digest
};

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/codecs/json.js
var textEncoder = new TextEncoder();
var textDecoder = new TextDecoder();

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/cid.js
var CID = class _CID {
  constructor(version3, code2, multihash, bytes) {
    this.code = code2;
    this.version = version3;
    this.multihash = multihash;
    this.bytes = bytes;
    this.byteOffset = bytes.byteOffset;
    this.byteLength = bytes.byteLength;
    this.asCID = this;
    this._baseCache = /* @__PURE__ */ new Map();
    Object.defineProperties(this, {
      byteOffset: hidden,
      byteLength: hidden,
      code: readonly,
      version: readonly,
      multihash: readonly,
      bytes: readonly,
      _baseCache: hidden,
      asCID: hidden
    });
  }
  toV0() {
    switch (this.version) {
      case 0: {
        return this;
      }
      default: {
        const { code: code2, multihash } = this;
        if (code2 !== DAG_PB_CODE) {
          throw new Error("Cannot convert a non dag-pb CID to CIDv0");
        }
        if (multihash.code !== SHA_256_CODE) {
          throw new Error("Cannot convert non sha2-256 multihash CID to CIDv0");
        }
        return _CID.createV0(multihash);
      }
    }
  }
  toV1() {
    switch (this.version) {
      case 0: {
        const { code: code2, digest: digest2 } = this.multihash;
        const multihash = create(code2, digest2);
        return _CID.createV1(this.code, multihash);
      }
      case 1: {
        return this;
      }
      default: {
        throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`);
      }
    }
  }
  equals(other) {
    return other && this.code === other.code && this.version === other.version && equals2(this.multihash, other.multihash);
  }
  toString(base3) {
    const { bytes, version: version3, _baseCache } = this;
    switch (version3) {
      case 0:
        return toStringV0(bytes, _baseCache, base3 || base58btc.encoder);
      default:
        return toStringV1(bytes, _baseCache, base3 || base322.encoder);
    }
  }
  toJSON() {
    return {
      code: this.code,
      version: this.version,
      hash: this.multihash.bytes
    };
  }
  get [Symbol.toStringTag]() {
    return "CID";
  }
  [/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")]() {
    return "CID(" + this.toString() + ")";
  }
  static isCID(value) {
    deprecate(/^0\.0/, IS_CID_DEPRECATION);
    return !!(value && (value[cidSymbol] || value.asCID === value));
  }
  get toBaseEncodedString() {
    throw new Error("Deprecated, use .toString()");
  }
  get codec() {
    throw new Error('"codec" property is deprecated, use integer "code" property instead');
  }
  get buffer() {
    throw new Error("Deprecated .buffer property, use .bytes to get Uint8Array instead");
  }
  get multibaseName() {
    throw new Error('"multibaseName" property is deprecated');
  }
  get prefix() {
    throw new Error('"prefix" property is deprecated');
  }
  static asCID(value) {
    if (value instanceof _CID) {
      return value;
    } else if (value != null && value.asCID === value) {
      const { version: version3, code: code2, multihash, bytes } = value;
      return new _CID(version3, code2, multihash, bytes || encodeCID(version3, code2, multihash.bytes));
    } else if (value != null && value[cidSymbol] === true) {
      const { version: version3, multihash, code: code2 } = value;
      const digest2 = decode6(multihash);
      return _CID.create(version3, code2, digest2);
    } else {
      return null;
    }
  }
  static create(version3, code2, digest2) {
    if (typeof code2 !== "number") {
      throw new Error("String codecs are no longer supported");
    }
    switch (version3) {
      case 0: {
        if (code2 !== DAG_PB_CODE) {
          throw new Error(`Version 0 CID must use dag-pb (code: ${DAG_PB_CODE}) block encoding`);
        } else {
          return new _CID(version3, code2, digest2, digest2.bytes);
        }
      }
      case 1: {
        const bytes = encodeCID(version3, code2, digest2.bytes);
        return new _CID(version3, code2, digest2, bytes);
      }
      default: {
        throw new Error("Invalid version");
      }
    }
  }
  static createV0(digest2) {
    return _CID.create(0, DAG_PB_CODE, digest2);
  }
  static createV1(code2, digest2) {
    return _CID.create(1, code2, digest2);
  }
  static decode(bytes) {
    const [cid, remainder] = _CID.decodeFirst(bytes);
    if (remainder.length) {
      throw new Error("Incorrect length");
    }
    return cid;
  }
  static decodeFirst(bytes) {
    const specs = _CID.inspectBytes(bytes);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = coerce(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error("Incorrect length");
    }
    const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
    const digest2 = new Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
    const cid = specs.version === 0 ? _CID.createV0(digest2) : _CID.createV1(specs.codec, digest2);
    return [
      cid,
      bytes.subarray(specs.size)
    ];
  }
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i4, length2] = decode5(initialBytes.subarray(offset));
      offset += length2;
      return i4;
    };
    let version3 = next();
    let codec = DAG_PB_CODE;
    if (version3 === 18) {
      version3 = 0;
      offset = 0;
    } else if (version3 === 1) {
      codec = next();
    }
    if (version3 !== 0 && version3 !== 1) {
      throw new RangeError(`Invalid CID version ${version3}`);
    }
    const prefixSize = offset;
    const multihashCode = next();
    const digestSize = next();
    const size2 = offset + digestSize;
    const multihashSize = size2 - prefixSize;
    return {
      version: version3,
      codec,
      multihashCode,
      digestSize,
      multihashSize,
      size: size2
    };
  }
  static parse(source, base3) {
    const [prefix, bytes] = parseCIDtoBytes(source, base3);
    const cid = _CID.decode(bytes);
    cid._baseCache.set(prefix, source);
    return cid;
  }
};
var parseCIDtoBytes = (source, base3) => {
  switch (source[0]) {
    case "Q": {
      const decoder = base3 || base58btc;
      return [
        base58btc.prefix,
        decoder.decode(`${base58btc.prefix}${source}`)
      ];
    }
    case base58btc.prefix: {
      const decoder = base3 || base58btc;
      return [
        base58btc.prefix,
        decoder.decode(source)
      ];
    }
    case base322.prefix: {
      const decoder = base3 || base322;
      return [
        base322.prefix,
        decoder.decode(source)
      ];
    }
    default: {
      if (base3 == null) {
        throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
      }
      return [
        source[0],
        base3.decode(source)
      ];
    }
  }
};
var toStringV0 = (bytes, cache, base3) => {
  const { prefix } = base3;
  if (prefix !== base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${base3.name} encoding`);
  }
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid2 = base3.encode(bytes).slice(1);
    cache.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var toStringV1 = (bytes, cache, base3) => {
  const { prefix } = base3;
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid2 = base3.encode(bytes);
    cache.set(prefix, cid2);
    return cid2;
  } else {
    return cid;
  }
};
var DAG_PB_CODE = 112;
var SHA_256_CODE = 18;
var encodeCID = (version3, code2, multihash) => {
  const codeOffset = encodingLength(version3);
  const hashOffset = codeOffset + encodingLength(code2);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  encodeTo(version3, bytes, 0);
  encodeTo(code2, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
};
var cidSymbol = /* @__PURE__ */ Symbol.for("@ipld/js-cid/CID");
var readonly = {
  writable: false,
  configurable: false,
  enumerable: true
};
var hidden = {
  writable: false,
  enumerable: false,
  configurable: false
};
var version2 = "0.0.0-dev";
var deprecate = (range, message) => {
  if (range.test(version2)) {
    console.warn(message);
  } else {
    throw new Error(message);
  }
};
var IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

// ../../../../../private/tmp/wc-vendor/node_modules/multiformats/esm/src/basics.js
var bases = {
  ...identity_exports,
  ...base2_exports,
  ...base8_exports,
  ...base10_exports,
  ...base16_exports,
  ...base32_exports,
  ...base36_exports,
  ...base58_exports,
  ...base64_exports,
  ...base256emoji_exports
};
var hashes = {
  ...sha2_browser_exports,
  ...identity_exports2
};

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/uint8arrays/esm/src/util/bases.js
function createCodec(name2, prefix, encode6, decode7) {
  return {
    name: name2,
    prefix,
    encoder: {
      name: name2,
      prefix,
      encode: encode6
    },
    decoder: { decode: decode7 }
  };
}
var string = createCodec("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder3 = new TextEncoder();
  return encoder3.encode(str.substring(1));
});
var ascii = createCodec("ascii", "a", (buf) => {
  let string3 = "a";
  for (let i4 = 0; i4 < buf.length; i4++) {
    string3 += String.fromCharCode(buf[i4]);
  }
  return string3;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i4 = 0; i4 < str.length; i4++) {
    buf[i4] = str.charCodeAt(i4);
  }
  return buf;
});
var BASES = {
  utf8: string,
  "utf-8": string,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii,
  ...bases
};
var bases_default = BASES;

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/uint8arrays/esm/src/from-string.js
function fromString2(string3, encoding = "utf8") {
  const base3 = bases_default[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return asUint8Array(globalThis.Buffer.from(string3, "utf-8"));
  }
  return base3.decoder.decode(`${base3.prefix}${string3}`);
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/uint8arrays/esm/src/to-string.js
function toString2(array, encoding = "utf8") {
  const base3 = bases_default[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
  }
  return base3.encoder.encode(array).substring(1);
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/node_modules/@walletconnect/relay-api/dist/index.es.js
var C2 = { waku: { publish: "waku_publish", batchPublish: "waku_batchPublish", subscribe: "waku_subscribe", batchSubscribe: "waku_batchSubscribe", subscription: "waku_subscription", unsubscribe: "waku_unsubscribe", batchUnsubscribe: "waku_batchUnsubscribe", batchFetchMessages: "waku_batchFetchMessages" }, irn: { publish: "irn_publish", batchPublish: "irn_batchPublish", subscribe: "irn_subscribe", batchSubscribe: "irn_batchSubscribe", subscription: "irn_subscription", unsubscribe: "irn_unsubscribe", batchUnsubscribe: "irn_batchUnsubscribe", batchFetchMessages: "irn_batchFetchMessages" }, iridium: { publish: "iridium_publish", batchPublish: "iridium_batchPublish", subscribe: "iridium_subscribe", batchSubscribe: "iridium_batchSubscribe", subscription: "iridium_subscription", unsubscribe: "iridium_unsubscribe", batchUnsubscribe: "iridium_batchUnsubscribe", batchFetchMessages: "iridium_batchFetchMessages" } };

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/utils/dist/index.es.js
var import_blakejs = __toESM(require_blakejs());
var xe3 = ":";
function Fe(t) {
  const [e2, n5] = t.split(xe3);
  return { namespace: e2, reference: n5 };
}
function ve3(t, e2) {
  return t.includes(":") ? [t] : e2.chains || [];
}
var $s = Object.defineProperty;
var Cs = Object.defineProperties;
var Ls = Object.getOwnPropertyDescriptors;
var Jn3 = Object.getOwnPropertySymbols;
var js = Object.prototype.hasOwnProperty;
var ks = Object.prototype.propertyIsEnumerable;
var Ze3 = (t, e2, n5) => e2 in t ? $s(t, e2, { enumerable: true, configurable: true, writable: true, value: n5 }) : t[e2] = n5;
var Qn3 = (t, e2) => {
  for (var n5 in e2 || (e2 = {})) js.call(e2, n5) && Ze3(t, n5, e2[n5]);
  if (Jn3) for (var n5 of Jn3(e2)) ks.call(e2, n5) && Ze3(t, n5, e2[n5]);
  return t;
};
var Ps = (t, e2) => Cs(t, Ls(e2));
var tr3 = (t, e2, n5) => Ze3(t, typeof e2 != "symbol" ? e2 + "" : e2, n5);
var er3 = "ReactNative";
var J4 = { reactNative: "react-native", node: "node", browser: "browser", unknown: "unknown" };
var rr3 = "js";
function Ye3() {
  return typeof process < "u" && typeof process.versions < "u" && typeof process.versions.node < "u";
}
function Bt3() {
  return !(0, import_window_getters.getDocument)() && !!(0, import_window_getters.getNavigator)() && navigator.product === er3;
}
function Ms() {
  return Bt3() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "android";
}
function Vs() {
  return Bt3() && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u" && (global == null ? void 0 : global.Platform.OS) === "ios";
}
function zt3() {
  return !Ye3() && !!(0, import_window_getters.getNavigator)() && !!(0, import_window_getters.getDocument)();
}
function Pt3() {
  return Bt3() ? J4.reactNative : Ye3() ? J4.node : zt3() ? J4.browser : J4.unknown;
}
function qs() {
  var t;
  try {
    return Bt3() && typeof global < "u" && typeof (global == null ? void 0 : global.Application) < "u" ? (t = global.Application) == null ? void 0 : t.applicationId : void 0;
  } catch {
    return;
  }
}
function or4(t, e2) {
  const n5 = new URLSearchParams(t);
  for (const r3 of Object.keys(e2).sort()) if (e2.hasOwnProperty(r3)) {
    const o5 = e2[r3];
    o5 !== void 0 && n5.set(r3, o5);
  }
  return n5.toString();
}
function Ks(t) {
  var e2, n5;
  const r3 = sr3();
  try {
    return t != null && t.url && r3.url && new URL(t.url).host !== new URL(r3.url).host && (console.warn(`The configured WalletConnect 'metadata.url':${t.url} differs from the actual page url:${r3.url}. This is probably unintended and can lead to issues.`), t.url = r3.url), (e2 = t?.icons) != null && e2.length && t.icons.length > 0 && (t.icons = t.icons.filter((o5) => o5 !== "")), Ps(Qn3(Qn3({}, r3), t), { url: t?.url || r3.url, name: t?.name || r3.name, description: t?.description || r3.description, icons: (n5 = t?.icons) != null && n5.length && t.icons.length > 0 ? t.icons : r3.icons });
  } catch (o5) {
    return console.warn("Error populating app metadata", o5), t || r3;
  }
}
function sr3() {
  return (0, import_window_metadata.getWindowMetadata)() || { name: "", description: "", url: "", icons: [""] };
}
function ir3() {
  if (Pt3() === J4.reactNative && typeof global < "u" && typeof (global == null ? void 0 : global.Platform) < "u") {
    const { OS: n5, Version: r3 } = global.Platform;
    return [n5, r3].join("-");
  }
  const t = detect();
  if (t === null) return "unknown";
  const e2 = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
  return t.type === "browser" ? [e2, t.name, t.version].join("-") : [e2, t.version].join("-");
}
function fr3() {
  var t;
  const e2 = Pt3();
  return e2 === J4.browser ? [e2, ((t = (0, import_window_getters.getLocation)()) == null ? void 0 : t.host) || "unknown"].join(":") : e2;
}
function cr3(t, e2, n5) {
  const r3 = ir3(), o5 = fr3();
  return [[t, e2].join("-"), [rr3, n5].join("-"), r3, o5].join("/");
}
function zs({ protocol: t, version: e2, relayUrl: n5, sdkVersion: r3, auth: o5, projectId: s3, useOnCloseEvent: i4, bundleId: f8, packageName: a3 }) {
  const l8 = n5.split("?"), c7 = cr3(t, e2, r3), u3 = { auth: o5, ua: c7, projectId: s3, useOnCloseEvent: i4 || void 0, packageName: a3 || void 0, bundleId: f8 || void 0 }, h6 = or4(l8[1] || "", u3);
  return l8[0] + "?" + h6;
}
function It3(t, e2) {
  return t.filter((n5) => e2.includes(n5)).length === t.length;
}
function Ys(t) {
  return Object.fromEntries(t.entries());
}
function Xs(t) {
  return new Map(Object.entries(t));
}
function ei(t = import_time4.FIVE_MINUTES, e2) {
  const n5 = (0, import_time4.toMiliseconds)(t || import_time4.FIVE_MINUTES);
  let r3, o5, s3, i4;
  return { resolve: (f8) => {
    s3 && r3 && (clearTimeout(s3), r3(f8), i4 = Promise.resolve(f8));
  }, reject: (f8) => {
    s3 && o5 && (clearTimeout(s3), o5(f8));
  }, done: () => new Promise((f8, a3) => {
    if (i4) return f8(i4);
    s3 = setTimeout(() => {
      const l8 = new Error(e2);
      i4 = Promise.reject(l8), a3(l8);
    }, n5), r3 = f8, o5 = a3;
  }) };
}
function ni(t, e2, n5) {
  return new Promise(async (r3, o5) => {
    const s3 = setTimeout(() => o5(new Error(n5)), e2);
    try {
      const i4 = await t;
      r3(i4);
    } catch (i4) {
      o5(i4);
    }
    clearTimeout(s3);
  });
}
function Xe3(t, e2) {
  if (typeof e2 == "string" && e2.startsWith(`${t}:`)) return e2;
  if (t.toLowerCase() === "topic") {
    if (typeof e2 != "string") throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e2}`;
  } else if (t.toLowerCase() === "id") {
    if (typeof e2 != "number") throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e2}`;
  }
  throw new Error(`Unknown expirer target type: ${t}`);
}
function ri(t) {
  return Xe3("topic", t);
}
function oi(t) {
  return Xe3("id", t);
}
function si(t) {
  const [e2, n5] = t.split(":"), r3 = { id: void 0, topic: void 0 };
  if (e2 === "topic" && typeof n5 == "string") r3.topic = n5;
  else if (e2 === "id" && Number.isInteger(Number(n5))) r3.id = Number(n5);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${e2}:${n5}`);
  return r3;
}
function ii(t, e2) {
  return (0, import_time4.fromMiliseconds)((e2 || Date.now()) + (0, import_time4.toMiliseconds)(t));
}
function fi(t) {
  return Date.now() >= (0, import_time4.toMiliseconds)(t);
}
function ci(t, e2) {
  return `${t}${e2 ? `:${e2}` : ""}`;
}
function ct3(t = [], e2 = []) {
  return [.../* @__PURE__ */ new Set([...t, ...e2])];
}
async function ai({ id: t, topic: e2, wcDeepLink: n5 }) {
  var r3;
  try {
    if (!n5) return;
    const o5 = typeof n5 == "string" ? JSON.parse(n5) : n5, s3 = o5?.href;
    if (typeof s3 != "string") return;
    const i4 = dr3(s3, t, e2), f8 = Pt3();
    if (f8 === J4.browser) {
      if (!((r3 = (0, import_window_getters.getDocument)()) != null && r3.hasFocus())) {
        console.warn("Document does not have focus, skipping deeplink.");
        return;
      }
      hr3(i4);
    } else f8 === J4.reactNative && typeof (global == null ? void 0 : global.Linking) < "u" && await global.Linking.openURL(i4);
  } catch (o5) {
    console.error(o5);
  }
}
function dr3(t, e2, n5) {
  const r3 = `requestId=${e2}&sessionTopic=${n5}`;
  t.endsWith("/") && (t = t.slice(0, -1));
  let o5 = `${t}`;
  if (t.startsWith("https://t.me")) {
    const s3 = t.includes("?") ? "&startapp=" : "?startapp=";
    o5 = `${o5}${s3}${br3(r3, true)}`;
  } else o5 = `${o5}/wc?${r3}`;
  return o5;
}
function hr3(t) {
  let e2 = "_self";
  gr3() ? e2 = "_top" : (pr3() || t.startsWith("https://") || t.startsWith("http://")) && (e2 = "_blank"), window.open(t, e2, "noreferrer noopener");
}
async function ui(t, e2) {
  let n5 = "";
  try {
    if (zt3() && (n5 = localStorage.getItem(e2), n5)) return n5;
    n5 = await t.getItem(e2);
  } catch (r3) {
    console.error(r3);
  }
  return n5;
}
function li(t, e2) {
  if (!t.includes(e2)) return null;
  const n5 = t.split(/([&,?,=])/), r3 = n5.indexOf(e2);
  return n5[r3 + 2];
}
function di() {
  return typeof crypto < "u" && crypto != null && crypto.randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, (t) => {
    const e2 = Math.random() * 16 | 0;
    return (t === "x" ? e2 : e2 & 3 | 8).toString(16);
  });
}
function hi() {
  return typeof process < "u" && process.env.IS_VITEST === "true";
}
function pr3() {
  return typeof window < "u" && (!!window.TelegramWebviewProxy || !!window.Telegram || !!window.TelegramWebviewProxyProto);
}
function gr3() {
  try {
    return window.self !== window.top;
  } catch {
    return false;
  }
}
function br3(t, e2 = false) {
  const n5 = Buffer.from(t).toString("base64");
  return e2 ? n5.replace(/[=]/g, "") : n5;
}
function Qe2(t) {
  return Buffer.from(t, "base64").toString("utf-8");
}
function pi(t) {
  return new Promise((e2) => setTimeout(e2, t));
}
var gi = class {
  constructor({ limit: e2 }) {
    tr3(this, "limit"), tr3(this, "set"), this.limit = e2, this.set = /* @__PURE__ */ new Set();
  }
  add(e2) {
    if (!this.set.has(e2)) {
      if (this.set.size >= this.limit) {
        const n5 = this.set.values().next().value;
        n5 && this.set.delete(n5);
      }
      this.set.add(e2);
    }
  }
  has(e2) {
    return this.set.has(e2);
  }
};
var Be3 = BigInt(2 ** 32 - 1);
var yr3 = BigInt(32);
function mr3(t, e2 = false) {
  return e2 ? { h: Number(t & Be3), l: Number(t >> yr3 & Be3) } : { h: Number(t >> yr3 & Be3) | 0, l: Number(t & Be3) | 0 };
}
function wr3(t, e2 = false) {
  const n5 = t.length;
  let r3 = new Uint32Array(n5), o5 = new Uint32Array(n5);
  for (let s3 = 0; s3 < n5; s3++) {
    const { h: i4, l: f8 } = mr3(t[s3], e2);
    [r3[s3], o5[s3]] = [i4, f8];
  }
  return [r3, o5];
}
var xr3 = (t, e2, n5) => t >>> n5;
var vr3 = (t, e2, n5) => t << 32 - n5 | e2 >>> n5;
var At = (t, e2, n5) => t >>> n5 | e2 << 32 - n5;
var St3 = (t, e2, n5) => t << 32 - n5 | e2 >>> n5;
var se = (t, e2, n5) => t << 64 - n5 | e2 >>> n5 - 32;
var ie = (t, e2, n5) => t >>> n5 - 32 | e2 << 64 - n5;
var bi = (t, e2) => e2;
var yi = (t, e2) => t;
var mi = (t, e2, n5) => t << n5 | e2 >>> 32 - n5;
var wi = (t, e2, n5) => e2 << n5 | t >>> 32 - n5;
var xi = (t, e2, n5) => e2 << n5 - 32 | t >>> 64 - n5;
var vi = (t, e2, n5) => t << n5 - 32 | e2 >>> 64 - n5;
function dt2(t, e2, n5, r3) {
  const o5 = (e2 >>> 0) + (r3 >>> 0);
  return { h: t + n5 + (o5 / 2 ** 32 | 0) | 0, l: o5 | 0 };
}
var tn = (t, e2, n5) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0);
var en2 = (t, e2, n5, r3) => e2 + n5 + r3 + (t / 2 ** 32 | 0) | 0;
var Ei = (t, e2, n5, r3) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0) + (r3 >>> 0);
var Bi = (t, e2, n5, r3, o5) => e2 + n5 + r3 + o5 + (t / 2 ** 32 | 0) | 0;
var Ii = (t, e2, n5, r3, o5) => (t >>> 0) + (e2 >>> 0) + (n5 >>> 0) + (r3 >>> 0) + (o5 >>> 0);
var Ai = (t, e2, n5, r3, o5, s3) => e2 + n5 + r3 + o5 + s3 + (t / 2 ** 32 | 0) | 0;
var Gt3 = typeof globalThis == "object" && "crypto" in globalThis ? globalThis.crypto : void 0;
function nn3(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function mt(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function at(t, ...e2) {
  if (!nn3(t)) throw new Error("Uint8Array expected");
  if (e2.length > 0 && !e2.includes(t.length)) throw new Error("Uint8Array expected of length " + e2 + ", got length=" + t.length);
}
function rn2(t) {
  if (typeof t != "function" || typeof t.create != "function") throw new Error("Hash should be wrapped by utils.createHasher");
  mt(t.outputLen), mt(t.blockLen);
}
function Nt3(t, e2 = true) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e2 && t.finished) throw new Error("Hash#digest() has already been called");
}
function on2(t, e2) {
  at(t);
  const n5 = e2.outputLen;
  if (t.length < n5) throw new Error("digestInto() expects output buffer of length at least " + n5);
}
function fe3(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function ut3(...t) {
  for (let e2 = 0; e2 < t.length; e2++) t[e2].fill(0);
}
function sn3(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
function gt3(t, e2) {
  return t << 32 - e2 | t >>> e2;
}
var Er3 = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Br3(t) {
  return t << 24 & 4278190080 | t << 8 & 16711680 | t >>> 8 & 65280 | t >>> 24 & 255;
}
var wt3 = Er3 ? (t) => t : (t) => Br3(t);
function Si(t) {
  for (let e2 = 0; e2 < t.length; e2++) t[e2] = Br3(t[e2]);
  return t;
}
var Ot3 = Er3 ? (t) => t : Si;
var Ir3 = typeof Uint8Array.from([]).toHex == "function" && typeof Uint8Array.fromHex == "function";
var Ni = Array.from({ length: 256 }, (t, e2) => e2.toString(16).padStart(2, "0"));
function ce(t) {
  if (at(t), Ir3) return t.toHex();
  let e2 = "";
  for (let n5 = 0; n5 < t.length; n5++) e2 += Ni[t[n5]];
  return e2;
}
var xt3 = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
function Ar3(t) {
  if (t >= xt3._0 && t <= xt3._9) return t - xt3._0;
  if (t >= xt3.A && t <= xt3.F) return t - (xt3.A - 10);
  if (t >= xt3.a && t <= xt3.f) return t - (xt3.a - 10);
}
function fn(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  if (Ir3) return Uint8Array.fromHex(t);
  const e2 = t.length, n5 = e2 / 2;
  if (e2 % 2) throw new Error("hex string expected, got unpadded hex of length " + e2);
  const r3 = new Uint8Array(n5);
  for (let o5 = 0, s3 = 0; o5 < n5; o5++, s3 += 2) {
    const i4 = Ar3(t.charCodeAt(s3)), f8 = Ar3(t.charCodeAt(s3 + 1));
    if (i4 === void 0 || f8 === void 0) {
      const a3 = t[s3] + t[s3 + 1];
      throw new Error('hex string expected, got non-hex character "' + a3 + '" at index ' + s3);
    }
    r3[o5] = i4 * 16 + f8;
  }
  return r3;
}
function Oi(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function ht3(t) {
  return typeof t == "string" && (t = Oi(t)), at(t), t;
}
function Ht3(...t) {
  let e2 = 0;
  for (let r3 = 0; r3 < t.length; r3++) {
    const o5 = t[r3];
    at(o5), e2 += o5.length;
  }
  const n5 = new Uint8Array(e2);
  for (let r3 = 0, o5 = 0; r3 < t.length; r3++) {
    const s3 = t[r3];
    n5.set(s3, o5), o5 += s3.length;
  }
  return n5;
}
var Ie3 = class {
};
function ae(t) {
  const e2 = (r3) => t().update(ht3(r3)).digest(), n5 = t();
  return e2.outputLen = n5.outputLen, e2.blockLen = n5.blockLen, e2.create = () => t(), e2;
}
function Ui(t) {
  const e2 = (r3, o5) => t(o5).update(ht3(r3)).digest(), n5 = t({});
  return e2.outputLen = n5.outputLen, e2.blockLen = n5.blockLen, e2.create = (r3) => t(r3), e2;
}
function Zt2(t = 32) {
  if (Gt3 && typeof Gt3.getRandomValues == "function") return Gt3.getRandomValues(new Uint8Array(t));
  if (Gt3 && typeof Gt3.randomBytes == "function") return Uint8Array.from(Gt3.randomBytes(t));
  throw new Error("crypto.getRandomValues must be defined");
}
var _i = BigInt(0);
var ue = BigInt(1);
var Ti = BigInt(2);
var Ri = BigInt(7);
var $i = BigInt(256);
var Ci = BigInt(113);
var Sr3 = [];
var Nr3 = [];
var Or3 = [];
for (let t = 0, e2 = ue, n5 = 1, r3 = 0; t < 24; t++) {
  [n5, r3] = [r3, (2 * n5 + 3 * r3) % 5], Sr3.push(2 * (5 * r3 + n5)), Nr3.push((t + 1) * (t + 2) / 2 % 64);
  let o5 = _i;
  for (let s3 = 0; s3 < 7; s3++) e2 = (e2 << ue ^ (e2 >> Ri) * Ci) % $i, e2 & Ti && (o5 ^= ue << (ue << BigInt(s3)) - ue);
  Or3.push(o5);
}
var Ur3 = wr3(Or3, true);
var Li = Ur3[0];
var ji = Ur3[1];
var _r3 = (t, e2, n5) => n5 > 32 ? xi(t, e2, n5) : mi(t, e2, n5);
var Tr3 = (t, e2, n5) => n5 > 32 ? vi(t, e2, n5) : wi(t, e2, n5);
function ki(t, e2 = 24) {
  const n5 = new Uint32Array(10);
  for (let r3 = 24 - e2; r3 < 24; r3++) {
    for (let i4 = 0; i4 < 10; i4++) n5[i4] = t[i4] ^ t[i4 + 10] ^ t[i4 + 20] ^ t[i4 + 30] ^ t[i4 + 40];
    for (let i4 = 0; i4 < 10; i4 += 2) {
      const f8 = (i4 + 8) % 10, a3 = (i4 + 2) % 10, l8 = n5[a3], c7 = n5[a3 + 1], u3 = _r3(l8, c7, 1) ^ n5[f8], h6 = Tr3(l8, c7, 1) ^ n5[f8 + 1];
      for (let g4 = 0; g4 < 50; g4 += 10) t[i4 + g4] ^= u3, t[i4 + g4 + 1] ^= h6;
    }
    let o5 = t[2], s3 = t[3];
    for (let i4 = 0; i4 < 24; i4++) {
      const f8 = Nr3[i4], a3 = _r3(o5, s3, f8), l8 = Tr3(o5, s3, f8), c7 = Sr3[i4];
      o5 = t[c7], s3 = t[c7 + 1], t[c7] = a3, t[c7 + 1] = l8;
    }
    for (let i4 = 0; i4 < 50; i4 += 10) {
      for (let f8 = 0; f8 < 10; f8++) n5[f8] = t[i4 + f8];
      for (let f8 = 0; f8 < 10; f8++) t[i4 + f8] ^= ~n5[(f8 + 2) % 10] & n5[(f8 + 4) % 10];
    }
    t[0] ^= Li[r3], t[1] ^= ji[r3];
  }
  ut3(n5);
}
var qn3 = class _qn extends Ie3 {
  constructor(e2, n5, r3, o5 = false, s3 = 24) {
    if (super(), this.pos = 0, this.posOut = 0, this.finished = false, this.destroyed = false, this.enableXOF = false, this.blockLen = e2, this.suffix = n5, this.outputLen = r3, this.enableXOF = o5, this.rounds = s3, mt(r3), !(0 < e2 && e2 < 200)) throw new Error("only keccak-f1600 function is supported");
    this.state = new Uint8Array(200), this.state32 = fe3(this.state);
  }
  clone() {
    return this._cloneInto();
  }
  keccak() {
    Ot3(this.state32), ki(this.state32, this.rounds), Ot3(this.state32), this.posOut = 0, this.pos = 0;
  }
  update(e2) {
    Nt3(this), e2 = ht3(e2), at(e2);
    const { blockLen: n5, state: r3 } = this, o5 = e2.length;
    for (let s3 = 0; s3 < o5; ) {
      const i4 = Math.min(n5 - this.pos, o5 - s3);
      for (let f8 = 0; f8 < i4; f8++) r3[this.pos++] ^= e2[s3++];
      this.pos === n5 && this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished) return;
    this.finished = true;
    const { state: e2, suffix: n5, pos: r3, blockLen: o5 } = this;
    e2[r3] ^= n5, (n5 & 128) !== 0 && r3 === o5 - 1 && this.keccak(), e2[o5 - 1] ^= 128, this.keccak();
  }
  writeInto(e2) {
    Nt3(this, false), at(e2), this.finish();
    const n5 = this.state, { blockLen: r3 } = this;
    for (let o5 = 0, s3 = e2.length; o5 < s3; ) {
      this.posOut >= r3 && this.keccak();
      const i4 = Math.min(r3 - this.posOut, s3 - o5);
      e2.set(n5.subarray(this.posOut, this.posOut + i4), o5), this.posOut += i4, o5 += i4;
    }
    return e2;
  }
  xofInto(e2) {
    if (!this.enableXOF) throw new Error("XOF is not possible for this instance");
    return this.writeInto(e2);
  }
  xof(e2) {
    return mt(e2), this.xofInto(new Uint8Array(e2));
  }
  digestInto(e2) {
    if (on2(e2, this), this.finished) throw new Error("digest() was already called");
    return this.writeInto(e2), this.destroy(), e2;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true, ut3(this.state);
  }
  _cloneInto(e2) {
    const { blockLen: n5, suffix: r3, outputLen: o5, rounds: s3, enableXOF: i4 } = this;
    return e2 || (e2 = new _qn(n5, r3, o5, i4, s3)), e2.state32.set(this.state32), e2.pos = this.pos, e2.posOut = this.posOut, e2.finished = this.finished, e2.rounds = s3, e2.suffix = r3, e2.outputLen = o5, e2.enableXOF = i4, e2.destroyed = this.destroyed, e2;
  }
};
var Pi = (t, e2, n5) => ae(() => new qn3(e2, t, n5));
var Hi = Pi(1, 136, 256 / 8);
function Di(t, e2, n5, r3) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e2, n5, r3);
  const o5 = BigInt(32), s3 = BigInt(4294967295), i4 = Number(n5 >> o5 & s3), f8 = Number(n5 & s3), a3 = r3 ? 4 : 0, l8 = r3 ? 0 : 4;
  t.setUint32(e2 + a3, i4, r3), t.setUint32(e2 + l8, f8, r3);
}
function Mi(t, e2, n5) {
  return t & e2 ^ ~t & n5;
}
function Vi(t, e2, n5) {
  return t & e2 ^ t & n5 ^ e2 & n5;
}
var Rr3 = class extends Ie3 {
  constructor(e2, n5, r3, o5) {
    super(), this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.blockLen = e2, this.outputLen = n5, this.padOffset = r3, this.isLE = o5, this.buffer = new Uint8Array(e2), this.view = sn3(this.buffer);
  }
  update(e2) {
    Nt3(this), e2 = ht3(e2), at(e2);
    const { view: n5, buffer: r3, blockLen: o5 } = this, s3 = e2.length;
    for (let i4 = 0; i4 < s3; ) {
      const f8 = Math.min(o5 - this.pos, s3 - i4);
      if (f8 === o5) {
        const a3 = sn3(e2);
        for (; o5 <= s3 - i4; i4 += o5) this.process(a3, i4);
        continue;
      }
      r3.set(e2.subarray(i4, i4 + f8), this.pos), this.pos += f8, i4 += f8, this.pos === o5 && (this.process(n5, 0), this.pos = 0);
    }
    return this.length += e2.length, this.roundClean(), this;
  }
  digestInto(e2) {
    Nt3(this), on2(e2, this), this.finished = true;
    const { buffer: n5, view: r3, blockLen: o5, isLE: s3 } = this;
    let { pos: i4 } = this;
    n5[i4++] = 128, ut3(this.buffer.subarray(i4)), this.padOffset > o5 - i4 && (this.process(r3, 0), i4 = 0);
    for (let u3 = i4; u3 < o5; u3++) n5[u3] = 0;
    Di(r3, o5 - 8, BigInt(this.length * 8), s3), this.process(r3, 0);
    const f8 = sn3(e2), a3 = this.outputLen;
    if (a3 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const l8 = a3 / 4, c7 = this.get();
    if (l8 > c7.length) throw new Error("_sha2: outputLen bigger than state");
    for (let u3 = 0; u3 < l8; u3++) f8.setUint32(4 * u3, c7[u3], s3);
  }
  digest() {
    const { buffer: e2, outputLen: n5 } = this;
    this.digestInto(e2);
    const r3 = e2.slice(0, n5);
    return this.destroy(), r3;
  }
  _cloneInto(e2) {
    e2 || (e2 = new this.constructor()), e2.set(...this.get());
    const { blockLen: n5, buffer: r3, length: o5, finished: s3, destroyed: i4, pos: f8 } = this;
    return e2.destroyed = i4, e2.finished = s3, e2.length = o5, e2.pos = f8, o5 % n5 && e2.buffer.set(r3), e2;
  }
  clone() {
    return this._cloneInto();
  }
};
var Ut3 = Uint32Array.from([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]);
var W3 = Uint32Array.from([3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]);
var Y = Uint32Array.from([1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209]);
var qi = Uint32Array.from([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
var _t3 = new Uint32Array(64);
var Ki = class extends Rr3 {
  constructor(e2 = 32) {
    super(64, e2, 8, false), this.A = Ut3[0] | 0, this.B = Ut3[1] | 0, this.C = Ut3[2] | 0, this.D = Ut3[3] | 0, this.E = Ut3[4] | 0, this.F = Ut3[5] | 0, this.G = Ut3[6] | 0, this.H = Ut3[7] | 0;
  }
  get() {
    const { A: e2, B: n5, C: r3, D: o5, E: s3, F: i4, G: f8, H: a3 } = this;
    return [e2, n5, r3, o5, s3, i4, f8, a3];
  }
  set(e2, n5, r3, o5, s3, i4, f8, a3) {
    this.A = e2 | 0, this.B = n5 | 0, this.C = r3 | 0, this.D = o5 | 0, this.E = s3 | 0, this.F = i4 | 0, this.G = f8 | 0, this.H = a3 | 0;
  }
  process(e2, n5) {
    for (let u3 = 0; u3 < 16; u3++, n5 += 4) _t3[u3] = e2.getUint32(n5, false);
    for (let u3 = 16; u3 < 64; u3++) {
      const h6 = _t3[u3 - 15], g4 = _t3[u3 - 2], w5 = gt3(h6, 7) ^ gt3(h6, 18) ^ h6 >>> 3, y6 = gt3(g4, 17) ^ gt3(g4, 19) ^ g4 >>> 10;
      _t3[u3] = y6 + _t3[u3 - 7] + w5 + _t3[u3 - 16] | 0;
    }
    let { A: r3, B: o5, C: s3, D: i4, E: f8, F: a3, G: l8, H: c7 } = this;
    for (let u3 = 0; u3 < 64; u3++) {
      const h6 = gt3(f8, 6) ^ gt3(f8, 11) ^ gt3(f8, 25), g4 = c7 + h6 + Mi(f8, a3, l8) + qi[u3] + _t3[u3] | 0, y6 = (gt3(r3, 2) ^ gt3(r3, 13) ^ gt3(r3, 22)) + Vi(r3, o5, s3) | 0;
      c7 = l8, l8 = a3, a3 = f8, f8 = i4 + g4 | 0, i4 = s3, s3 = o5, o5 = r3, r3 = g4 + y6 | 0;
    }
    r3 = r3 + this.A | 0, o5 = o5 + this.B | 0, s3 = s3 + this.C | 0, i4 = i4 + this.D | 0, f8 = f8 + this.E | 0, a3 = a3 + this.F | 0, l8 = l8 + this.G | 0, c7 = c7 + this.H | 0, this.set(r3, o5, s3, i4, f8, a3, l8, c7);
  }
  roundClean() {
    ut3(_t3);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), ut3(this.buffer);
  }
};
var $r3 = wr3(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((t) => BigInt(t)));
var Fi = $r3[0];
var zi = $r3[1];
var Tt3 = new Uint32Array(80);
var Rt3 = new Uint32Array(80);
var cn = class extends Rr3 {
  constructor(e2 = 64) {
    super(128, e2, 16, false), this.Ah = Y[0] | 0, this.Al = Y[1] | 0, this.Bh = Y[2] | 0, this.Bl = Y[3] | 0, this.Ch = Y[4] | 0, this.Cl = Y[5] | 0, this.Dh = Y[6] | 0, this.Dl = Y[7] | 0, this.Eh = Y[8] | 0, this.El = Y[9] | 0, this.Fh = Y[10] | 0, this.Fl = Y[11] | 0, this.Gh = Y[12] | 0, this.Gl = Y[13] | 0, this.Hh = Y[14] | 0, this.Hl = Y[15] | 0;
  }
  get() {
    const { Ah: e2, Al: n5, Bh: r3, Bl: o5, Ch: s3, Cl: i4, Dh: f8, Dl: a3, Eh: l8, El: c7, Fh: u3, Fl: h6, Gh: g4, Gl: w5, Hh: y6, Hl: x7 } = this;
    return [e2, n5, r3, o5, s3, i4, f8, a3, l8, c7, u3, h6, g4, w5, y6, x7];
  }
  set(e2, n5, r3, o5, s3, i4, f8, a3, l8, c7, u3, h6, g4, w5, y6, x7) {
    this.Ah = e2 | 0, this.Al = n5 | 0, this.Bh = r3 | 0, this.Bl = o5 | 0, this.Ch = s3 | 0, this.Cl = i4 | 0, this.Dh = f8 | 0, this.Dl = a3 | 0, this.Eh = l8 | 0, this.El = c7 | 0, this.Fh = u3 | 0, this.Fl = h6 | 0, this.Gh = g4 | 0, this.Gl = w5 | 0, this.Hh = y6 | 0, this.Hl = x7 | 0;
  }
  process(e2, n5) {
    for (let L5 = 0; L5 < 16; L5++, n5 += 4) Tt3[L5] = e2.getUint32(n5), Rt3[L5] = e2.getUint32(n5 += 4);
    for (let L5 = 16; L5 < 80; L5++) {
      const V4 = Tt3[L5 - 15] | 0, _3 = Rt3[L5 - 15] | 0, k7 = At(V4, _3, 1) ^ At(V4, _3, 8) ^ xr3(V4, _3, 7), j6 = St3(V4, _3, 1) ^ St3(V4, _3, 8) ^ vr3(V4, _3, 7), $4 = Tt3[L5 - 2] | 0, d5 = Rt3[L5 - 2] | 0, m4 = At($4, d5, 19) ^ se($4, d5, 61) ^ xr3($4, d5, 6), p5 = St3($4, d5, 19) ^ ie($4, d5, 61) ^ vr3($4, d5, 6), b5 = Ei(j6, p5, Rt3[L5 - 7], Rt3[L5 - 16]), v6 = Bi(b5, k7, m4, Tt3[L5 - 7], Tt3[L5 - 16]);
      Tt3[L5] = v6 | 0, Rt3[L5] = b5 | 0;
    }
    let { Ah: r3, Al: o5, Bh: s3, Bl: i4, Ch: f8, Cl: a3, Dh: l8, Dl: c7, Eh: u3, El: h6, Fh: g4, Fl: w5, Gh: y6, Gl: x7, Hh: R4, Hl: M6 } = this;
    for (let L5 = 0; L5 < 80; L5++) {
      const V4 = At(u3, h6, 14) ^ At(u3, h6, 18) ^ se(u3, h6, 41), _3 = St3(u3, h6, 14) ^ St3(u3, h6, 18) ^ ie(u3, h6, 41), k7 = u3 & g4 ^ ~u3 & y6, j6 = h6 & w5 ^ ~h6 & x7, $4 = Ii(M6, _3, j6, zi[L5], Rt3[L5]), d5 = Ai($4, R4, V4, k7, Fi[L5], Tt3[L5]), m4 = $4 | 0, p5 = At(r3, o5, 28) ^ se(r3, o5, 34) ^ se(r3, o5, 39), b5 = St3(r3, o5, 28) ^ ie(r3, o5, 34) ^ ie(r3, o5, 39), v6 = r3 & s3 ^ r3 & f8 ^ s3 & f8, B4 = o5 & i4 ^ o5 & a3 ^ i4 & a3;
      R4 = y6 | 0, M6 = x7 | 0, y6 = g4 | 0, x7 = w5 | 0, g4 = u3 | 0, w5 = h6 | 0, { h: u3, l: h6 } = dt2(l8 | 0, c7 | 0, d5 | 0, m4 | 0), l8 = f8 | 0, c7 = a3 | 0, f8 = s3 | 0, a3 = i4 | 0, s3 = r3 | 0, i4 = o5 | 0;
      const E6 = tn(m4, b5, B4);
      r3 = en2(E6, d5, p5, v6), o5 = E6 | 0;
    }
    ({ h: r3, l: o5 } = dt2(this.Ah | 0, this.Al | 0, r3 | 0, o5 | 0)), { h: s3, l: i4 } = dt2(this.Bh | 0, this.Bl | 0, s3 | 0, i4 | 0), { h: f8, l: a3 } = dt2(this.Ch | 0, this.Cl | 0, f8 | 0, a3 | 0), { h: l8, l: c7 } = dt2(this.Dh | 0, this.Dl | 0, l8 | 0, c7 | 0), { h: u3, l: h6 } = dt2(this.Eh | 0, this.El | 0, u3 | 0, h6 | 0), { h: g4, l: w5 } = dt2(this.Fh | 0, this.Fl | 0, g4 | 0, w5 | 0), { h: y6, l: x7 } = dt2(this.Gh | 0, this.Gl | 0, y6 | 0, x7 | 0), { h: R4, l: M6 } = dt2(this.Hh | 0, this.Hl | 0, R4 | 0, M6 | 0), this.set(r3, o5, s3, i4, f8, a3, l8, c7, u3, h6, g4, w5, y6, x7, R4, M6);
  }
  roundClean() {
    ut3(Tt3, Rt3);
  }
  destroy() {
    ut3(this.buffer), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var Gi = class extends cn {
  constructor() {
    super(48), this.Ah = W3[0] | 0, this.Al = W3[1] | 0, this.Bh = W3[2] | 0, this.Bl = W3[3] | 0, this.Ch = W3[4] | 0, this.Cl = W3[5] | 0, this.Dh = W3[6] | 0, this.Dl = W3[7] | 0, this.Eh = W3[8] | 0, this.El = W3[9] | 0, this.Fh = W3[10] | 0, this.Fl = W3[11] | 0, this.Gh = W3[12] | 0, this.Gl = W3[13] | 0, this.Hh = W3[14] | 0, this.Hl = W3[15] | 0;
  }
};
var X = Uint32Array.from([573645204, 4230739756, 2673172387, 3360449730, 596883563, 1867755857, 2520282905, 1497426621, 2519219938, 2827943907, 3193839141, 1401305490, 721525244, 746961066, 246885852, 2177182882]);
var Zi = class extends cn {
  constructor() {
    super(32), this.Ah = X[0] | 0, this.Al = X[1] | 0, this.Bh = X[2] | 0, this.Bl = X[3] | 0, this.Ch = X[4] | 0, this.Cl = X[5] | 0, this.Dh = X[6] | 0, this.Dl = X[7] | 0, this.Eh = X[8] | 0, this.El = X[9] | 0, this.Fh = X[10] | 0, this.Fl = X[11] | 0, this.Gh = X[12] | 0, this.Gl = X[13] | 0, this.Hh = X[14] | 0, this.Hl = X[15] | 0;
  }
};
var Ae3 = ae(() => new Ki());
var Wi = ae(() => new cn());
var Yi = ae(() => new Gi());
var Xi = ae(() => new Zi());
var Ji = Uint8Array.from([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9, 12, 5, 1, 15, 14, 13, 4, 10, 0, 7, 6, 3, 9, 2, 8, 11, 13, 11, 7, 14, 12, 1, 3, 9, 5, 0, 15, 4, 8, 6, 2, 10, 6, 15, 14, 9, 11, 3, 0, 8, 12, 2, 13, 7, 1, 4, 10, 5, 10, 2, 8, 4, 7, 6, 1, 5, 15, 11, 9, 14, 3, 12, 13, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 10, 4, 8, 9, 15, 13, 6, 1, 12, 0, 2, 11, 7, 5, 3, 11, 8, 12, 0, 5, 2, 15, 13, 10, 14, 3, 6, 7, 1, 9, 4, 7, 9, 3, 1, 13, 12, 11, 14, 2, 6, 5, 10, 4, 0, 15, 8, 9, 0, 5, 7, 2, 4, 10, 15, 14, 1, 11, 12, 6, 8, 3, 13, 2, 12, 6, 10, 0, 11, 8, 3, 4, 13, 7, 5, 15, 14, 1, 9]);
var F = Uint32Array.from([4089235720, 1779033703, 2227873595, 3144134277, 4271175723, 1013904242, 1595750129, 2773480762, 2917565137, 1359893119, 725511199, 2600822924, 4215389547, 528734635, 327033209, 1541459225]);
var N10 = new Uint32Array(32);
function $t3(t, e2, n5, r3, o5, s3) {
  const i4 = o5[s3], f8 = o5[s3 + 1];
  let a3 = N10[2 * t], l8 = N10[2 * t + 1], c7 = N10[2 * e2], u3 = N10[2 * e2 + 1], h6 = N10[2 * n5], g4 = N10[2 * n5 + 1], w5 = N10[2 * r3], y6 = N10[2 * r3 + 1], x7 = tn(a3, c7, i4);
  l8 = en2(x7, l8, u3, f8), a3 = x7 | 0, { Dh: y6, Dl: w5 } = { Dh: y6 ^ l8, Dl: w5 ^ a3 }, { Dh: y6, Dl: w5 } = { Dh: bi(y6, w5), Dl: yi(y6) }, { h: g4, l: h6 } = dt2(g4, h6, y6, w5), { Bh: u3, Bl: c7 } = { Bh: u3 ^ g4, Bl: c7 ^ h6 }, { Bh: u3, Bl: c7 } = { Bh: At(u3, c7, 24), Bl: St3(u3, c7, 24) }, N10[2 * t] = a3, N10[2 * t + 1] = l8, N10[2 * e2] = c7, N10[2 * e2 + 1] = u3, N10[2 * n5] = h6, N10[2 * n5 + 1] = g4, N10[2 * r3] = w5, N10[2 * r3 + 1] = y6;
}
function Ct(t, e2, n5, r3, o5, s3) {
  const i4 = o5[s3], f8 = o5[s3 + 1];
  let a3 = N10[2 * t], l8 = N10[2 * t + 1], c7 = N10[2 * e2], u3 = N10[2 * e2 + 1], h6 = N10[2 * n5], g4 = N10[2 * n5 + 1], w5 = N10[2 * r3], y6 = N10[2 * r3 + 1], x7 = tn(a3, c7, i4);
  l8 = en2(x7, l8, u3, f8), a3 = x7 | 0, { Dh: y6, Dl: w5 } = { Dh: y6 ^ l8, Dl: w5 ^ a3 }, { Dh: y6, Dl: w5 } = { Dh: At(y6, w5, 16), Dl: St3(y6, w5, 16) }, { h: g4, l: h6 } = dt2(g4, h6, y6, w5), { Bh: u3, Bl: c7 } = { Bh: u3 ^ g4, Bl: c7 ^ h6 }, { Bh: u3, Bl: c7 } = { Bh: se(u3, c7, 63), Bl: ie(u3, c7, 63) }, N10[2 * t] = a3, N10[2 * t + 1] = l8, N10[2 * e2] = c7, N10[2 * e2 + 1] = u3, N10[2 * n5] = h6, N10[2 * n5 + 1] = g4, N10[2 * r3] = w5, N10[2 * r3 + 1] = y6;
}
function Qi(t, e2 = {}, n5, r3, o5) {
  if (mt(n5), t < 0 || t > n5) throw new Error("outputLen bigger than keyLen");
  const { key: s3, salt: i4, personalization: f8 } = e2;
  if (s3 !== void 0 && (s3.length < 1 || s3.length > n5)) throw new Error("key length must be undefined or 1.." + n5);
  if (i4 !== void 0 && i4.length !== r3) throw new Error("salt must be undefined or " + r3);
  if (f8 !== void 0 && f8.length !== o5) throw new Error("personalization must be undefined or " + o5);
}
var tf = class extends Ie3 {
  constructor(e2, n5) {
    super(), this.finished = false, this.destroyed = false, this.length = 0, this.pos = 0, mt(e2), mt(n5), this.blockLen = e2, this.outputLen = n5, this.buffer = new Uint8Array(e2), this.buffer32 = fe3(this.buffer);
  }
  update(e2) {
    Nt3(this), e2 = ht3(e2), at(e2);
    const { blockLen: n5, buffer: r3, buffer32: o5 } = this, s3 = e2.length, i4 = e2.byteOffset, f8 = e2.buffer;
    for (let a3 = 0; a3 < s3; ) {
      this.pos === n5 && (Ot3(o5), this.compress(o5, 0, false), Ot3(o5), this.pos = 0);
      const l8 = Math.min(n5 - this.pos, s3 - a3), c7 = i4 + a3;
      if (l8 === n5 && !(c7 % 4) && a3 + l8 < s3) {
        const u3 = new Uint32Array(f8, c7, Math.floor((s3 - a3) / 4));
        Ot3(u3);
        for (let h6 = 0; a3 + n5 < s3; h6 += o5.length, a3 += n5) this.length += n5, this.compress(u3, h6, false);
        Ot3(u3);
        continue;
      }
      r3.set(e2.subarray(a3, a3 + l8), this.pos), this.pos += l8, this.length += l8, a3 += l8;
    }
    return this;
  }
  digestInto(e2) {
    Nt3(this), on2(e2, this);
    const { pos: n5, buffer32: r3 } = this;
    this.finished = true, ut3(this.buffer.subarray(n5)), Ot3(r3), this.compress(r3, 0, true), Ot3(r3);
    const o5 = fe3(e2);
    this.get().forEach((s3, i4) => o5[i4] = wt3(s3));
  }
  digest() {
    const { buffer: e2, outputLen: n5 } = this;
    this.digestInto(e2);
    const r3 = e2.slice(0, n5);
    return this.destroy(), r3;
  }
  _cloneInto(e2) {
    const { buffer: n5, length: r3, finished: o5, destroyed: s3, outputLen: i4, pos: f8 } = this;
    return e2 || (e2 = new this.constructor({ dkLen: i4 })), e2.set(...this.get()), e2.buffer.set(n5), e2.destroyed = s3, e2.finished = o5, e2.length = r3, e2.pos = f8, e2.outputLen = i4, e2;
  }
  clone() {
    return this._cloneInto();
  }
};
var ef = class extends tf {
  constructor(e2 = {}) {
    const n5 = e2.dkLen === void 0 ? 64 : e2.dkLen;
    super(128, n5), this.v0l = F[0] | 0, this.v0h = F[1] | 0, this.v1l = F[2] | 0, this.v1h = F[3] | 0, this.v2l = F[4] | 0, this.v2h = F[5] | 0, this.v3l = F[6] | 0, this.v3h = F[7] | 0, this.v4l = F[8] | 0, this.v4h = F[9] | 0, this.v5l = F[10] | 0, this.v5h = F[11] | 0, this.v6l = F[12] | 0, this.v6h = F[13] | 0, this.v7l = F[14] | 0, this.v7h = F[15] | 0, Qi(n5, e2, 64, 16, 16);
    let { key: r3, personalization: o5, salt: s3 } = e2, i4 = 0;
    if (r3 !== void 0 && (r3 = ht3(r3), i4 = r3.length), this.v0l ^= this.outputLen | i4 << 8 | 65536 | 1 << 24, s3 !== void 0) {
      s3 = ht3(s3);
      const f8 = fe3(s3);
      this.v4l ^= wt3(f8[0]), this.v4h ^= wt3(f8[1]), this.v5l ^= wt3(f8[2]), this.v5h ^= wt3(f8[3]);
    }
    if (o5 !== void 0) {
      o5 = ht3(o5);
      const f8 = fe3(o5);
      this.v6l ^= wt3(f8[0]), this.v6h ^= wt3(f8[1]), this.v7l ^= wt3(f8[2]), this.v7h ^= wt3(f8[3]);
    }
    if (r3 !== void 0) {
      const f8 = new Uint8Array(this.blockLen);
      f8.set(r3), this.update(f8);
    }
  }
  get() {
    let { v0l: e2, v0h: n5, v1l: r3, v1h: o5, v2l: s3, v2h: i4, v3l: f8, v3h: a3, v4l: l8, v4h: c7, v5l: u3, v5h: h6, v6l: g4, v6h: w5, v7l: y6, v7h: x7 } = this;
    return [e2, n5, r3, o5, s3, i4, f8, a3, l8, c7, u3, h6, g4, w5, y6, x7];
  }
  set(e2, n5, r3, o5, s3, i4, f8, a3, l8, c7, u3, h6, g4, w5, y6, x7) {
    this.v0l = e2 | 0, this.v0h = n5 | 0, this.v1l = r3 | 0, this.v1h = o5 | 0, this.v2l = s3 | 0, this.v2h = i4 | 0, this.v3l = f8 | 0, this.v3h = a3 | 0, this.v4l = l8 | 0, this.v4h = c7 | 0, this.v5l = u3 | 0, this.v5h = h6 | 0, this.v6l = g4 | 0, this.v6h = w5 | 0, this.v7l = y6 | 0, this.v7h = x7 | 0;
  }
  compress(e2, n5, r3) {
    this.get().forEach((a3, l8) => N10[l8] = a3), N10.set(F, 16);
    let { h: o5, l: s3 } = mr3(BigInt(this.length));
    N10[24] = F[8] ^ s3, N10[25] = F[9] ^ o5, r3 && (N10[28] = ~N10[28], N10[29] = ~N10[29]);
    let i4 = 0;
    const f8 = Ji;
    for (let a3 = 0; a3 < 12; a3++) $t3(0, 4, 8, 12, e2, n5 + 2 * f8[i4++]), Ct(0, 4, 8, 12, e2, n5 + 2 * f8[i4++]), $t3(1, 5, 9, 13, e2, n5 + 2 * f8[i4++]), Ct(1, 5, 9, 13, e2, n5 + 2 * f8[i4++]), $t3(2, 6, 10, 14, e2, n5 + 2 * f8[i4++]), Ct(2, 6, 10, 14, e2, n5 + 2 * f8[i4++]), $t3(3, 7, 11, 15, e2, n5 + 2 * f8[i4++]), Ct(3, 7, 11, 15, e2, n5 + 2 * f8[i4++]), $t3(0, 5, 10, 15, e2, n5 + 2 * f8[i4++]), Ct(0, 5, 10, 15, e2, n5 + 2 * f8[i4++]), $t3(1, 6, 11, 12, e2, n5 + 2 * f8[i4++]), Ct(1, 6, 11, 12, e2, n5 + 2 * f8[i4++]), $t3(2, 7, 8, 13, e2, n5 + 2 * f8[i4++]), Ct(2, 7, 8, 13, e2, n5 + 2 * f8[i4++]), $t3(3, 4, 9, 14, e2, n5 + 2 * f8[i4++]), Ct(3, 4, 9, 14, e2, n5 + 2 * f8[i4++]);
    this.v0l ^= N10[0] ^ N10[16], this.v0h ^= N10[1] ^ N10[17], this.v1l ^= N10[2] ^ N10[18], this.v1h ^= N10[3] ^ N10[19], this.v2l ^= N10[4] ^ N10[20], this.v2h ^= N10[5] ^ N10[21], this.v3l ^= N10[6] ^ N10[22], this.v3h ^= N10[7] ^ N10[23], this.v4l ^= N10[8] ^ N10[24], this.v4h ^= N10[9] ^ N10[25], this.v5l ^= N10[10] ^ N10[26], this.v5h ^= N10[11] ^ N10[27], this.v6l ^= N10[12] ^ N10[28], this.v6h ^= N10[13] ^ N10[29], this.v7l ^= N10[14] ^ N10[30], this.v7h ^= N10[15] ^ N10[31], ut3(N10);
  }
  destroy() {
    this.destroyed = true, ut3(this.buffer32), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
var nf = Ui((t) => new ef(t));
var rf = "https://rpc.walletconnect.org/v1";
function an(t) {
  const e2 = `Ethereum Signed Message:
${t.length}`, n5 = new TextEncoder().encode(e2 + t);
  return "0x" + Buffer.from(Hi(n5)).toString("hex");
}
async function Cr3(t, e2, n5, r3, o5, s3) {
  switch (n5.t) {
    case "eip191":
      return await Lr3(t, e2, n5.s);
    case "eip1271":
      return await jr3(t, e2, n5.s, r3, o5, s3);
    default:
      throw new Error(`verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${n5.t}`);
  }
}
async function Lr3(t, e2, n5) {
  return (await recoverAddress({ hash: an(e2), signature: n5 })).toLowerCase() === t.toLowerCase();
}
async function jr3(t, e2, n5, r3, o5, s3) {
  const i4 = Fe(r3);
  if (!i4.namespace || !i4.reference) throw new Error(`isValidEip1271Signature failed: chainId must be in CAIP-2 format, received: ${r3}`);
  try {
    const f8 = "0x1626ba7e", a3 = "0000000000000000000000000000000000000000000000000000000000000040", l8 = n5.substring(2), c7 = (l8.length / 2).toString(16).padStart(64, "0"), u3 = (e2.startsWith("0x") ? e2 : an(e2)).substring(2), h6 = f8 + u3 + a3 + c7 + l8, g4 = await fetch(`${s3 || rf}/?chainId=${r3}&projectId=${o5}`, { headers: { "Content-Type": "application/json" }, method: "POST", body: JSON.stringify({ id: of(), jsonrpc: "2.0", method: "eth_call", params: [{ to: t, data: h6 }, "latest"] }) }), { result: w5 } = await g4.json();
    return w5 ? w5.slice(0, f8.length).toLowerCase() === f8.toLowerCase() : false;
  } catch (f8) {
    return console.error("isValidEip1271Signature: ", f8), false;
  }
}
function of() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
function sf(t) {
  const e2 = atob(t), n5 = new Uint8Array(e2.length);
  for (let i4 = 0; i4 < e2.length; i4++) n5[i4] = e2.charCodeAt(i4);
  const r3 = n5[0];
  if (r3 === 0) throw new Error("No signatures found");
  const o5 = 1 + r3 * 64;
  if (n5.length < o5) throw new Error("Transaction data too short for claimed signature count");
  if (n5.length < 100) throw new Error("Transaction too short");
  const s3 = Buffer.from(t, "base64").slice(1, 65);
  return esm_default2.encode(s3);
}
function ff(t) {
  const e2 = new Uint8Array(Buffer.from(t, "base64")), n5 = Array.from("TransactionData::").map((s3) => s3.charCodeAt(0)), r3 = new Uint8Array(n5.length + e2.length);
  r3.set(n5), r3.set(e2, n5.length);
  const o5 = nf(r3, { dkLen: 32 });
  return esm_default2.encode(o5);
}
function cf(t) {
  const e2 = new Uint8Array(Ae3(kr3(t)));
  return esm_default2.encode(e2);
}
function kr3(t) {
  if (t instanceof Uint8Array) return t;
  if (Array.isArray(t)) return new Uint8Array(t);
  if (typeof t == "object" && t != null && t.data) return new Uint8Array(Object.values(t.data));
  if (typeof t == "object" && t) return new Uint8Array(Object.values(t));
  throw new Error("getNearUint8ArrayFromBytes: Unexpected result type from bytes array");
}
function af(t) {
  const e2 = Buffer.from(t, "base64"), n5 = decode(e2).txn;
  if (!n5) throw new Error("Invalid signed transaction: missing 'txn' field");
  const r3 = encode(n5), o5 = Buffer.from("TX"), s3 = Buffer.concat([o5, Buffer.from(r3)]), i4 = Xi(s3);
  return base32.encode(i4).replace(/=+$/, "");
}
function un(t) {
  const e2 = [];
  let n5 = BigInt(t);
  for (; n5 >= BigInt(128); ) e2.push(Number(n5 & BigInt(127) | BigInt(128))), n5 >>= BigInt(7);
  return e2.push(Number(n5)), Buffer.from(e2);
}
function uf(t) {
  const e2 = Buffer.from(t.signed.bodyBytes, "base64"), n5 = Buffer.from(t.signed.authInfoBytes, "base64"), r3 = Buffer.from(t.signature.signature, "base64"), o5 = [];
  o5.push(Buffer.from([10])), o5.push(un(e2.length)), o5.push(e2), o5.push(Buffer.from([18])), o5.push(un(n5.length)), o5.push(n5), o5.push(Buffer.from([26])), o5.push(un(r3.length)), o5.push(r3);
  const s3 = Buffer.concat(o5), i4 = Ae3(s3);
  return Buffer.from(i4).toString("hex").toUpperCase();
}
var lf = Object.defineProperty;
var df = Object.defineProperties;
var hf = Object.getOwnPropertyDescriptors;
var Pr3 = Object.getOwnPropertySymbols;
var pf = Object.prototype.hasOwnProperty;
var gf = Object.prototype.propertyIsEnumerable;
var Hr3 = (t, e2, n5) => e2 in t ? lf(t, e2, { enumerable: true, configurable: true, writable: true, value: n5 }) : t[e2] = n5;
var ln = (t, e2) => {
  for (var n5 in e2 || (e2 = {})) pf.call(e2, n5) && Hr3(t, n5, e2[n5]);
  if (Pr3) for (var n5 of Pr3(e2)) gf.call(e2, n5) && Hr3(t, n5, e2[n5]);
  return t;
};
var Dr3 = (t, e2) => df(t, hf(e2));
var bf = "did:pkh:";
var Se3 = (t) => t?.split(":");
var Mr3 = (t) => {
  const e2 = t && Se3(t);
  if (e2) return t.includes(bf) ? e2[3] : e2[1];
};
var Vr3 = (t) => {
  const e2 = t && Se3(t);
  if (e2) return e2[2] + ":" + e2[3];
};
var dn = (t) => {
  const e2 = t && Se3(t);
  if (e2) return e2.pop();
};
async function yf(t) {
  const { cacao: e2, projectId: n5 } = t, { s: r3, p: o5 } = e2, s3 = qr3(o5, o5.iss), i4 = dn(o5.iss);
  return await Cr3(i4, s3, r3, Vr3(o5.iss), n5);
}
var qr3 = (t, e2) => {
  const n5 = `${t.domain} wants you to sign in with your Ethereum account:`, r3 = dn(e2);
  if (!t.aud && !t.uri) throw new Error("Either `aud` or `uri` is required to construct the message");
  let o5 = t.statement || void 0;
  const s3 = `URI: ${t.aud || t.uri}`, i4 = `Version: ${t.version}`, f8 = `Chain ID: ${Mr3(e2)}`, a3 = `Nonce: ${t.nonce}`, l8 = `Issued At: ${t.iat}`, c7 = t.exp ? `Expiration Time: ${t.exp}` : void 0, u3 = t.nbf ? `Not Before: ${t.nbf}` : void 0, h6 = t.requestId ? `Request ID: ${t.requestId}` : void 0, g4 = t.resources ? `Resources:${t.resources.map((y6) => `
- ${y6}`).join("")}` : void 0, w5 = Oe2(t.resources);
  if (w5) {
    const y6 = Lt3(w5);
    o5 = gn3(o5, y6);
  }
  return [n5, r3, "", o5, "", s3, i4, f8, a3, l8, c7, u3, h6, g4].filter((y6) => y6 != null).join(`
`);
};
function Gr3(t) {
  return Buffer.from(JSON.stringify(t)).toString("base64");
}
function Zr3(t) {
  return JSON.parse(Buffer.from(t, "base64").toString("utf-8"));
}
function bt2(t) {
  if (!t) throw new Error("No recap provided, value is undefined");
  if (!t.att) throw new Error("No `att` property found");
  const e2 = Object.keys(t.att);
  if (!(e2 != null && e2.length)) throw new Error("No resources found in `att` property");
  e2.forEach((n5) => {
    const r3 = t.att[n5];
    if (Array.isArray(r3)) throw new Error(`Resource must be an object: ${n5}`);
    if (typeof r3 != "object") throw new Error(`Resource must be an object: ${n5}`);
    if (!Object.keys(r3).length) throw new Error(`Resource object is empty: ${n5}`);
    Object.keys(r3).forEach((o5) => {
      const s3 = r3[o5];
      if (!Array.isArray(s3)) throw new Error(`Ability limits ${o5} must be an array of objects, found: ${s3}`);
      if (!s3.length) throw new Error(`Value of ${o5} is empty array, must be an array with objects`);
      s3.forEach((i4) => {
        if (typeof i4 != "object") throw new Error(`Ability limits (${o5}) must be an array of objects, found: ${i4}`);
      });
    });
  });
}
function Wr3(t, e2, n5, r3 = {}) {
  return n5?.sort((o5, s3) => o5.localeCompare(s3)), { att: { [t]: hn(e2, n5, r3) } };
}
function hn(t, e2, n5 = {}) {
  e2 = e2?.sort((o5, s3) => o5.localeCompare(s3));
  const r3 = e2.map((o5) => ({ [`${t}/${o5}`]: [n5] }));
  return Object.assign({}, ...r3);
}
function Ne2(t) {
  return bt2(t), `urn:recap:${Gr3(t).replace(/=/g, "")}`;
}
function Lt3(t) {
  const e2 = Zr3(t.replace("urn:recap:", ""));
  return bt2(e2), e2;
}
function Ef(t, e2, n5) {
  const r3 = Wr3(t, e2, n5);
  return Ne2(r3);
}
function pn(t) {
  return t && t.includes("urn:recap:");
}
function Bf(t, e2) {
  const n5 = Lt3(t), r3 = Lt3(e2), o5 = Xr3(n5, r3);
  return Ne2(o5);
}
function Xr3(t, e2) {
  bt2(t), bt2(e2);
  const n5 = Object.keys(t.att).concat(Object.keys(e2.att)).sort((o5, s3) => o5.localeCompare(s3)), r3 = { att: {} };
  return n5.forEach((o5) => {
    var s3, i4;
    Object.keys(((s3 = t.att) == null ? void 0 : s3[o5]) || {}).concat(Object.keys(((i4 = e2.att) == null ? void 0 : i4[o5]) || {})).sort((f8, a3) => f8.localeCompare(a3)).forEach((f8) => {
      var a3, l8;
      r3.att[o5] = Dr3(ln({}, r3.att[o5]), { [f8]: ((a3 = t.att[o5]) == null ? void 0 : a3[f8]) || ((l8 = e2.att[o5]) == null ? void 0 : l8[f8]) });
    });
  }), r3;
}
function gn3(t = "", e2) {
  bt2(e2);
  const n5 = "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (t.includes(n5)) return t;
  const r3 = [];
  let o5 = 0;
  Object.keys(e2.att).forEach((f8) => {
    const a3 = Object.keys(e2.att[f8]).map((u3) => ({ ability: u3.split("/")[0], action: u3.split("/")[1] }));
    a3.sort((u3, h6) => u3.action.localeCompare(h6.action));
    const l8 = {};
    a3.forEach((u3) => {
      l8[u3.ability] || (l8[u3.ability] = []), l8[u3.ability].push(u3.action);
    });
    const c7 = Object.keys(l8).map((u3) => (o5++, `(${o5}) '${u3}': '${l8[u3].join("', '")}' for '${f8}'.`));
    r3.push(c7.join(", ").replace(".,", "."));
  });
  const s3 = r3.join(" "), i4 = `${n5}${s3}`;
  return `${t ? t + " " : ""}${i4}`;
}
function If(t) {
  var e2;
  const n5 = Lt3(t);
  bt2(n5);
  const r3 = (e2 = n5.att) == null ? void 0 : e2.eip155;
  return r3 ? Object.keys(r3).map((o5) => o5.split("/")[1]) : [];
}
function Af(t) {
  const e2 = Lt3(t);
  bt2(e2);
  const n5 = [];
  return Object.values(e2.att).forEach((r3) => {
    Object.values(r3).forEach((o5) => {
      var s3;
      (s3 = o5?.[0]) != null && s3.chains && n5.push(o5[0].chains);
    });
  }), [...new Set(n5.flat())];
}
function Oe2(t) {
  if (!t) return;
  const e2 = t?.[t.length - 1];
  return pn(e2) ? e2 : void 0;
}
function Qr3(t) {
  return t instanceof Uint8Array || ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array";
}
function bn3(t) {
  if (typeof t != "boolean") throw new Error(`boolean expected, not ${t}`);
}
function yn3(t) {
  if (!Number.isSafeInteger(t) || t < 0) throw new Error("positive integer expected, got " + t);
}
function nt3(t, ...e2) {
  if (!Qr3(t)) throw new Error("Uint8Array expected");
  if (e2.length > 0 && !e2.includes(t.length)) throw new Error("Uint8Array expected of length " + e2 + ", got length=" + t.length);
}
function to3(t, e2 = true) {
  if (t.destroyed) throw new Error("Hash instance has been destroyed");
  if (e2 && t.finished) throw new Error("Hash#digest() has already been called");
}
function Sf(t, e2) {
  nt3(t);
  const n5 = e2.outputLen;
  if (t.length < n5) throw new Error("digestInto() expects output buffer of length at least " + n5);
}
function jt2(t) {
  return new Uint32Array(t.buffer, t.byteOffset, Math.floor(t.byteLength / 4));
}
function Wt2(...t) {
  for (let e2 = 0; e2 < t.length; e2++) t[e2].fill(0);
}
function Nf(t) {
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
var Of = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
function Uf(t) {
  if (typeof t != "string") throw new Error("string expected");
  return new Uint8Array(new TextEncoder().encode(t));
}
function mn3(t) {
  if (typeof t == "string") t = Uf(t);
  else if (Qr3(t)) t = wn(t);
  else throw new Error("Uint8Array expected, got " + typeof t);
  return t;
}
function _f(t, e2) {
  if (e2 == null || typeof e2 != "object") throw new Error("options must be defined");
  return Object.assign(t, e2);
}
function Tf(t, e2) {
  if (t.length !== e2.length) return false;
  let n5 = 0;
  for (let r3 = 0; r3 < t.length; r3++) n5 |= t[r3] ^ e2[r3];
  return n5 === 0;
}
var Rf = (t, e2) => {
  function n5(r3, ...o5) {
    if (nt3(r3), !Of) throw new Error("Non little-endian hardware is not yet supported");
    if (t.nonceLength !== void 0) {
      const c7 = o5[0];
      if (!c7) throw new Error("nonce / iv required");
      t.varSizeNonce ? nt3(c7) : nt3(c7, t.nonceLength);
    }
    const s3 = t.tagLength;
    s3 && o5[1] !== void 0 && nt3(o5[1]);
    const i4 = e2(r3, ...o5), f8 = (c7, u3) => {
      if (u3 !== void 0) {
        if (c7 !== 2) throw new Error("cipher output not supported");
        nt3(u3);
      }
    };
    let a3 = false;
    return { encrypt(c7, u3) {
      if (a3) throw new Error("cannot encrypt() twice with same key + nonce");
      return a3 = true, nt3(c7), f8(i4.encrypt.length, u3), i4.encrypt(c7, u3);
    }, decrypt(c7, u3) {
      if (nt3(c7), s3 && c7.length < s3) throw new Error("invalid ciphertext length: smaller than tagLength=" + s3);
      return f8(i4.decrypt.length, u3), i4.decrypt(c7, u3);
    } };
  }
  return Object.assign(n5, t), n5;
};
function eo3(t, e2, n5 = true) {
  if (e2 === void 0) return new Uint8Array(t);
  if (e2.length !== t) throw new Error("invalid output length, expected " + t + ", got: " + e2.length);
  if (n5 && !Cf(e2)) throw new Error("invalid output, must be aligned");
  return e2;
}
function no3(t, e2, n5, r3) {
  if (typeof t.setBigUint64 == "function") return t.setBigUint64(e2, n5, r3);
  const o5 = BigInt(32), s3 = BigInt(4294967295), i4 = Number(n5 >> o5 & s3), f8 = Number(n5 & s3), a3 = r3 ? 4 : 0, l8 = r3 ? 0 : 4;
  t.setUint32(e2 + a3, i4, r3), t.setUint32(e2 + l8, f8, r3);
}
function $f(t, e2, n5) {
  bn3(n5);
  const r3 = new Uint8Array(16), o5 = Nf(r3);
  return no3(o5, 0, BigInt(e2), n5), no3(o5, 8, BigInt(t), n5), r3;
}
function Cf(t) {
  return t.byteOffset % 4 === 0;
}
function wn(t) {
  return Uint8Array.from(t);
}
var ro3 = (t) => Uint8Array.from(t.split("").map((e2) => e2.charCodeAt(0)));
var Lf = ro3("expand 16-byte k");
var jf = ro3("expand 32-byte k");
var kf = jt2(Lf);
var Pf = jt2(jf);
function D2(t, e2) {
  return t << e2 | t >>> 32 - e2;
}
function xn3(t) {
  return t.byteOffset % 4 === 0;
}
var Ue3 = 64;
var Hf = 16;
var oo3 = 2 ** 32 - 1;
var so3 = new Uint32Array();
function Df(t, e2, n5, r3, o5, s3, i4, f8) {
  const a3 = o5.length, l8 = new Uint8Array(Ue3), c7 = jt2(l8), u3 = xn3(o5) && xn3(s3), h6 = u3 ? jt2(o5) : so3, g4 = u3 ? jt2(s3) : so3;
  for (let w5 = 0; w5 < a3; i4++) {
    if (t(e2, n5, r3, c7, i4, f8), i4 >= oo3) throw new Error("arx: counter overflow");
    const y6 = Math.min(Ue3, a3 - w5);
    if (u3 && y6 === Ue3) {
      const x7 = w5 / 4;
      if (w5 % 4 !== 0) throw new Error("arx: invalid block position");
      for (let R4 = 0, M6; R4 < Hf; R4++) M6 = x7 + R4, g4[M6] = h6[M6] ^ c7[R4];
      w5 += Ue3;
      continue;
    }
    for (let x7 = 0, R4; x7 < y6; x7++) R4 = w5 + x7, s3[R4] = o5[R4] ^ l8[x7];
    w5 += y6;
  }
}
function Mf(t, e2) {
  const { allowShortKeys: n5, extendNonceFn: r3, counterLength: o5, counterRight: s3, rounds: i4 } = _f({ allowShortKeys: false, counterLength: 8, counterRight: false, rounds: 20 }, e2);
  if (typeof t != "function") throw new Error("core must be a function");
  return yn3(o5), yn3(i4), bn3(s3), bn3(n5), (f8, a3, l8, c7, u3 = 0) => {
    nt3(f8), nt3(a3), nt3(l8);
    const h6 = l8.length;
    if (c7 === void 0 && (c7 = new Uint8Array(h6)), nt3(c7), yn3(u3), u3 < 0 || u3 >= oo3) throw new Error("arx: counter overflow");
    if (c7.length < h6) throw new Error(`arx: output (${c7.length}) is shorter than data (${h6})`);
    const g4 = [];
    let w5 = f8.length, y6, x7;
    if (w5 === 32) g4.push(y6 = wn(f8)), x7 = Pf;
    else if (w5 === 16 && n5) y6 = new Uint8Array(32), y6.set(f8), y6.set(f8, 16), x7 = kf, g4.push(y6);
    else throw new Error(`arx: invalid 32-byte key, got length=${w5}`);
    xn3(a3) || g4.push(a3 = wn(a3));
    const R4 = jt2(y6);
    if (r3) {
      if (a3.length !== 24) throw new Error("arx: extended nonce must be 24 bytes");
      r3(x7, R4, jt2(a3.subarray(0, 16)), R4), a3 = a3.subarray(16);
    }
    const M6 = 16 - o5;
    if (M6 !== a3.length) throw new Error(`arx: nonce must be ${M6} or 16 bytes`);
    if (M6 !== 12) {
      const V4 = new Uint8Array(12);
      V4.set(a3, s3 ? 0 : 12 - a3.length), a3 = V4, g4.push(a3);
    }
    const L5 = jt2(a3);
    return Df(t, x7, R4, L5, l8, c7, u3, i4), Wt2(...g4), c7;
  };
}
var G3 = (t, e2) => t[e2++] & 255 | (t[e2++] & 255) << 8;
var Vf = class {
  constructor(e2) {
    this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e2 = mn3(e2), nt3(e2, 32);
    const n5 = G3(e2, 0), r3 = G3(e2, 2), o5 = G3(e2, 4), s3 = G3(e2, 6), i4 = G3(e2, 8), f8 = G3(e2, 10), a3 = G3(e2, 12), l8 = G3(e2, 14);
    this.r[0] = n5 & 8191, this.r[1] = (n5 >>> 13 | r3 << 3) & 8191, this.r[2] = (r3 >>> 10 | o5 << 6) & 7939, this.r[3] = (o5 >>> 7 | s3 << 9) & 8191, this.r[4] = (s3 >>> 4 | i4 << 12) & 255, this.r[5] = i4 >>> 1 & 8190, this.r[6] = (i4 >>> 14 | f8 << 2) & 8191, this.r[7] = (f8 >>> 11 | a3 << 5) & 8065, this.r[8] = (a3 >>> 8 | l8 << 8) & 8191, this.r[9] = l8 >>> 5 & 127;
    for (let c7 = 0; c7 < 8; c7++) this.pad[c7] = G3(e2, 16 + 2 * c7);
  }
  process(e2, n5, r3 = false) {
    const o5 = r3 ? 0 : 2048, { h: s3, r: i4 } = this, f8 = i4[0], a3 = i4[1], l8 = i4[2], c7 = i4[3], u3 = i4[4], h6 = i4[5], g4 = i4[6], w5 = i4[7], y6 = i4[8], x7 = i4[9], R4 = G3(e2, n5 + 0), M6 = G3(e2, n5 + 2), L5 = G3(e2, n5 + 4), V4 = G3(e2, n5 + 6), _3 = G3(e2, n5 + 8), k7 = G3(e2, n5 + 10), j6 = G3(e2, n5 + 12), $4 = G3(e2, n5 + 14);
    let d5 = s3[0] + (R4 & 8191), m4 = s3[1] + ((R4 >>> 13 | M6 << 3) & 8191), p5 = s3[2] + ((M6 >>> 10 | L5 << 6) & 8191), b5 = s3[3] + ((L5 >>> 7 | V4 << 9) & 8191), v6 = s3[4] + ((V4 >>> 4 | _3 << 12) & 8191), B4 = s3[5] + (_3 >>> 1 & 8191), E6 = s3[6] + ((_3 >>> 14 | k7 << 2) & 8191), I5 = s3[7] + ((k7 >>> 11 | j6 << 5) & 8191), S5 = s3[8] + ((j6 >>> 8 | $4 << 8) & 8191), O7 = s3[9] + ($4 >>> 5 | o5), A5 = 0, T5 = A5 + d5 * f8 + m4 * (5 * x7) + p5 * (5 * y6) + b5 * (5 * w5) + v6 * (5 * g4);
    A5 = T5 >>> 13, T5 &= 8191, T5 += B4 * (5 * h6) + E6 * (5 * u3) + I5 * (5 * c7) + S5 * (5 * l8) + O7 * (5 * a3), A5 += T5 >>> 13, T5 &= 8191;
    let U4 = A5 + d5 * a3 + m4 * f8 + p5 * (5 * x7) + b5 * (5 * y6) + v6 * (5 * w5);
    A5 = U4 >>> 13, U4 &= 8191, U4 += B4 * (5 * g4) + E6 * (5 * h6) + I5 * (5 * u3) + S5 * (5 * c7) + O7 * (5 * l8), A5 += U4 >>> 13, U4 &= 8191;
    let C5 = A5 + d5 * l8 + m4 * a3 + p5 * f8 + b5 * (5 * x7) + v6 * (5 * y6);
    A5 = C5 >>> 13, C5 &= 8191, C5 += B4 * (5 * w5) + E6 * (5 * g4) + I5 * (5 * h6) + S5 * (5 * u3) + O7 * (5 * c7), A5 += C5 >>> 13, C5 &= 8191;
    let H4 = A5 + d5 * c7 + m4 * l8 + p5 * a3 + b5 * f8 + v6 * (5 * x7);
    A5 = H4 >>> 13, H4 &= 8191, H4 += B4 * (5 * y6) + E6 * (5 * w5) + I5 * (5 * g4) + S5 * (5 * h6) + O7 * (5 * u3), A5 += H4 >>> 13, H4 &= 8191;
    let q2 = A5 + d5 * u3 + m4 * c7 + p5 * l8 + b5 * a3 + v6 * f8;
    A5 = q2 >>> 13, q2 &= 8191, q2 += B4 * (5 * x7) + E6 * (5 * y6) + I5 * (5 * w5) + S5 * (5 * g4) + O7 * (5 * h6), A5 += q2 >>> 13, q2 &= 8191;
    let P6 = A5 + d5 * h6 + m4 * u3 + p5 * c7 + b5 * l8 + v6 * a3;
    A5 = P6 >>> 13, P6 &= 8191, P6 += B4 * f8 + E6 * (5 * x7) + I5 * (5 * y6) + S5 * (5 * w5) + O7 * (5 * g4), A5 += P6 >>> 13, P6 &= 8191;
    let K5 = A5 + d5 * g4 + m4 * h6 + p5 * u3 + b5 * c7 + v6 * l8;
    A5 = K5 >>> 13, K5 &= 8191, K5 += B4 * a3 + E6 * f8 + I5 * (5 * x7) + S5 * (5 * y6) + O7 * (5 * w5), A5 += K5 >>> 13, K5 &= 8191;
    let et = A5 + d5 * w5 + m4 * g4 + p5 * h6 + b5 * u3 + v6 * c7;
    A5 = et >>> 13, et &= 8191, et += B4 * l8 + E6 * a3 + I5 * f8 + S5 * (5 * x7) + O7 * (5 * y6), A5 += et >>> 13, et &= 8191;
    let Z3 = A5 + d5 * y6 + m4 * w5 + p5 * g4 + b5 * h6 + v6 * u3;
    A5 = Z3 >>> 13, Z3 &= 8191, Z3 += B4 * c7 + E6 * l8 + I5 * a3 + S5 * f8 + O7 * (5 * x7), A5 += Z3 >>> 13, Z3 &= 8191;
    let z4 = A5 + d5 * x7 + m4 * y6 + p5 * w5 + b5 * g4 + v6 * h6;
    A5 = z4 >>> 13, z4 &= 8191, z4 += B4 * u3 + E6 * c7 + I5 * l8 + S5 * a3 + O7 * f8, A5 += z4 >>> 13, z4 &= 8191, A5 = (A5 << 2) + A5 | 0, A5 = A5 + T5 | 0, T5 = A5 & 8191, A5 = A5 >>> 13, U4 += A5, s3[0] = T5, s3[1] = U4, s3[2] = C5, s3[3] = H4, s3[4] = q2, s3[5] = P6, s3[6] = K5, s3[7] = et, s3[8] = Z3, s3[9] = z4;
  }
  finalize() {
    const { h: e2, pad: n5 } = this, r3 = new Uint16Array(10);
    let o5 = e2[1] >>> 13;
    e2[1] &= 8191;
    for (let f8 = 2; f8 < 10; f8++) e2[f8] += o5, o5 = e2[f8] >>> 13, e2[f8] &= 8191;
    e2[0] += o5 * 5, o5 = e2[0] >>> 13, e2[0] &= 8191, e2[1] += o5, o5 = e2[1] >>> 13, e2[1] &= 8191, e2[2] += o5, r3[0] = e2[0] + 5, o5 = r3[0] >>> 13, r3[0] &= 8191;
    for (let f8 = 1; f8 < 10; f8++) r3[f8] = e2[f8] + o5, o5 = r3[f8] >>> 13, r3[f8] &= 8191;
    r3[9] -= 8192;
    let s3 = (o5 ^ 1) - 1;
    for (let f8 = 0; f8 < 10; f8++) r3[f8] &= s3;
    s3 = ~s3;
    for (let f8 = 0; f8 < 10; f8++) e2[f8] = e2[f8] & s3 | r3[f8];
    e2[0] = (e2[0] | e2[1] << 13) & 65535, e2[1] = (e2[1] >>> 3 | e2[2] << 10) & 65535, e2[2] = (e2[2] >>> 6 | e2[3] << 7) & 65535, e2[3] = (e2[3] >>> 9 | e2[4] << 4) & 65535, e2[4] = (e2[4] >>> 12 | e2[5] << 1 | e2[6] << 14) & 65535, e2[5] = (e2[6] >>> 2 | e2[7] << 11) & 65535, e2[6] = (e2[7] >>> 5 | e2[8] << 8) & 65535, e2[7] = (e2[8] >>> 8 | e2[9] << 5) & 65535;
    let i4 = e2[0] + n5[0];
    e2[0] = i4 & 65535;
    for (let f8 = 1; f8 < 8; f8++) i4 = (e2[f8] + n5[f8] | 0) + (i4 >>> 16) | 0, e2[f8] = i4 & 65535;
    Wt2(r3);
  }
  update(e2) {
    to3(this), e2 = mn3(e2), nt3(e2);
    const { buffer: n5, blockLen: r3 } = this, o5 = e2.length;
    for (let s3 = 0; s3 < o5; ) {
      const i4 = Math.min(r3 - this.pos, o5 - s3);
      if (i4 === r3) {
        for (; r3 <= o5 - s3; s3 += r3) this.process(e2, s3);
        continue;
      }
      n5.set(e2.subarray(s3, s3 + i4), this.pos), this.pos += i4, s3 += i4, this.pos === r3 && (this.process(n5, 0, false), this.pos = 0);
    }
    return this;
  }
  destroy() {
    Wt2(this.h, this.r, this.buffer, this.pad);
  }
  digestInto(e2) {
    to3(this), Sf(e2, this), this.finished = true;
    const { buffer: n5, h: r3 } = this;
    let { pos: o5 } = this;
    if (o5) {
      for (n5[o5++] = 1; o5 < 16; o5++) n5[o5] = 0;
      this.process(n5, 0, true);
    }
    this.finalize();
    let s3 = 0;
    for (let i4 = 0; i4 < 8; i4++) e2[s3++] = r3[i4] >>> 0, e2[s3++] = r3[i4] >>> 8;
    return e2;
  }
  digest() {
    const { buffer: e2, outputLen: n5 } = this;
    this.digestInto(e2);
    const r3 = e2.slice(0, n5);
    return this.destroy(), r3;
  }
};
function qf(t) {
  const e2 = (r3, o5) => t(o5).update(mn3(r3)).digest(), n5 = t(new Uint8Array(32));
  return e2.outputLen = n5.outputLen, e2.blockLen = n5.blockLen, e2.create = (r3) => t(r3), e2;
}
var Kf = qf((t) => new Vf(t));
function Ff(t, e2, n5, r3, o5, s3 = 20) {
  let i4 = t[0], f8 = t[1], a3 = t[2], l8 = t[3], c7 = e2[0], u3 = e2[1], h6 = e2[2], g4 = e2[3], w5 = e2[4], y6 = e2[5], x7 = e2[6], R4 = e2[7], M6 = o5, L5 = n5[0], V4 = n5[1], _3 = n5[2], k7 = i4, j6 = f8, $4 = a3, d5 = l8, m4 = c7, p5 = u3, b5 = h6, v6 = g4, B4 = w5, E6 = y6, I5 = x7, S5 = R4, O7 = M6, A5 = L5, T5 = V4, U4 = _3;
  for (let H4 = 0; H4 < s3; H4 += 2) k7 = k7 + m4 | 0, O7 = D2(O7 ^ k7, 16), B4 = B4 + O7 | 0, m4 = D2(m4 ^ B4, 12), k7 = k7 + m4 | 0, O7 = D2(O7 ^ k7, 8), B4 = B4 + O7 | 0, m4 = D2(m4 ^ B4, 7), j6 = j6 + p5 | 0, A5 = D2(A5 ^ j6, 16), E6 = E6 + A5 | 0, p5 = D2(p5 ^ E6, 12), j6 = j6 + p5 | 0, A5 = D2(A5 ^ j6, 8), E6 = E6 + A5 | 0, p5 = D2(p5 ^ E6, 7), $4 = $4 + b5 | 0, T5 = D2(T5 ^ $4, 16), I5 = I5 + T5 | 0, b5 = D2(b5 ^ I5, 12), $4 = $4 + b5 | 0, T5 = D2(T5 ^ $4, 8), I5 = I5 + T5 | 0, b5 = D2(b5 ^ I5, 7), d5 = d5 + v6 | 0, U4 = D2(U4 ^ d5, 16), S5 = S5 + U4 | 0, v6 = D2(v6 ^ S5, 12), d5 = d5 + v6 | 0, U4 = D2(U4 ^ d5, 8), S5 = S5 + U4 | 0, v6 = D2(v6 ^ S5, 7), k7 = k7 + p5 | 0, U4 = D2(U4 ^ k7, 16), I5 = I5 + U4 | 0, p5 = D2(p5 ^ I5, 12), k7 = k7 + p5 | 0, U4 = D2(U4 ^ k7, 8), I5 = I5 + U4 | 0, p5 = D2(p5 ^ I5, 7), j6 = j6 + b5 | 0, O7 = D2(O7 ^ j6, 16), S5 = S5 + O7 | 0, b5 = D2(b5 ^ S5, 12), j6 = j6 + b5 | 0, O7 = D2(O7 ^ j6, 8), S5 = S5 + O7 | 0, b5 = D2(b5 ^ S5, 7), $4 = $4 + v6 | 0, A5 = D2(A5 ^ $4, 16), B4 = B4 + A5 | 0, v6 = D2(v6 ^ B4, 12), $4 = $4 + v6 | 0, A5 = D2(A5 ^ $4, 8), B4 = B4 + A5 | 0, v6 = D2(v6 ^ B4, 7), d5 = d5 + m4 | 0, T5 = D2(T5 ^ d5, 16), E6 = E6 + T5 | 0, m4 = D2(m4 ^ E6, 12), d5 = d5 + m4 | 0, T5 = D2(T5 ^ d5, 8), E6 = E6 + T5 | 0, m4 = D2(m4 ^ E6, 7);
  let C5 = 0;
  r3[C5++] = i4 + k7 | 0, r3[C5++] = f8 + j6 | 0, r3[C5++] = a3 + $4 | 0, r3[C5++] = l8 + d5 | 0, r3[C5++] = c7 + m4 | 0, r3[C5++] = u3 + p5 | 0, r3[C5++] = h6 + b5 | 0, r3[C5++] = g4 + v6 | 0, r3[C5++] = w5 + B4 | 0, r3[C5++] = y6 + E6 | 0, r3[C5++] = x7 + I5 | 0, r3[C5++] = R4 + S5 | 0, r3[C5++] = M6 + O7 | 0, r3[C5++] = L5 + A5 | 0, r3[C5++] = V4 + T5 | 0, r3[C5++] = _3 + U4 | 0;
}
var zf = Mf(Ff, { counterRight: false, counterLength: 4, allowShortKeys: false });
var Gf = new Uint8Array(16);
var io3 = (t, e2) => {
  t.update(e2);
  const n5 = e2.length % 16;
  n5 && t.update(Gf.subarray(n5));
};
var Zf = new Uint8Array(32);
function fo3(t, e2, n5, r3, o5) {
  const s3 = t(e2, n5, Zf), i4 = Kf.create(s3);
  o5 && io3(i4, o5), io3(i4, r3);
  const f8 = $f(r3.length, o5 ? o5.length : 0, true);
  i4.update(f8);
  const a3 = i4.digest();
  return Wt2(s3, f8), a3;
}
var Wf = (t) => (e2, n5, r3) => ({ encrypt(s3, i4) {
  const f8 = s3.length;
  i4 = eo3(f8 + 16, i4, false), i4.set(s3);
  const a3 = i4.subarray(0, -16);
  t(e2, n5, a3, a3, 1);
  const l8 = fo3(t, e2, n5, a3, r3);
  return i4.set(l8, f8), Wt2(l8), i4;
}, decrypt(s3, i4) {
  i4 = eo3(s3.length - 16, i4, false);
  const f8 = s3.subarray(0, -16), a3 = s3.subarray(-16), l8 = fo3(t, e2, n5, f8, r3);
  if (!Tf(a3, l8)) throw new Error("invalid tag");
  return i4.set(s3.subarray(0, -16)), t(e2, n5, i4, i4, 1), Wt2(l8), i4;
} });
var co3 = Rf({ blockSize: 64, nonceLength: 12, tagLength: 16 }, Wf(zf));
var ao3 = class extends Ie3 {
  constructor(e2, n5) {
    super(), this.finished = false, this.destroyed = false, rn2(e2);
    const r3 = ht3(n5);
    if (this.iHash = e2.create(), typeof this.iHash.update != "function") throw new Error("Expected instance of class which extends utils.Hash");
    this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
    const o5 = this.blockLen, s3 = new Uint8Array(o5);
    s3.set(r3.length > o5 ? e2.create().update(r3).digest() : r3);
    for (let i4 = 0; i4 < s3.length; i4++) s3[i4] ^= 54;
    this.iHash.update(s3), this.oHash = e2.create();
    for (let i4 = 0; i4 < s3.length; i4++) s3[i4] ^= 106;
    this.oHash.update(s3), ut3(s3);
  }
  update(e2) {
    return Nt3(this), this.iHash.update(e2), this;
  }
  digestInto(e2) {
    Nt3(this), at(e2, this.outputLen), this.finished = true, this.iHash.digestInto(e2), this.oHash.update(e2), this.oHash.digestInto(e2), this.destroy();
  }
  digest() {
    const e2 = new Uint8Array(this.oHash.outputLen);
    return this.digestInto(e2), e2;
  }
  _cloneInto(e2) {
    e2 || (e2 = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash: n5, iHash: r3, finished: o5, destroyed: s3, blockLen: i4, outputLen: f8 } = this;
    return e2 = e2, e2.finished = o5, e2.destroyed = s3, e2.blockLen = i4, e2.outputLen = f8, e2.oHash = n5._cloneInto(e2.oHash), e2.iHash = r3._cloneInto(e2.iHash), e2;
  }
  clone() {
    return this._cloneInto();
  }
  destroy() {
    this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
  }
};
var _e3 = (t, e2, n5) => new ao3(t, e2).update(n5).digest();
_e3.create = (t, e2) => new ao3(t, e2);
function Yf(t, e2, n5) {
  return rn2(t), n5 === void 0 && (n5 = new Uint8Array(t.outputLen)), _e3(t, ht3(n5), ht3(e2));
}
var vn3 = Uint8Array.from([0]);
var uo3 = Uint8Array.of();
function Xf(t, e2, n5, r3 = 32) {
  rn2(t), mt(r3);
  const o5 = t.outputLen;
  if (r3 > 255 * o5) throw new Error("Length should be <= 255*HashLen");
  const s3 = Math.ceil(r3 / o5);
  n5 === void 0 && (n5 = uo3);
  const i4 = new Uint8Array(s3 * o5), f8 = _e3.create(t, e2), a3 = f8._cloneInto(), l8 = new Uint8Array(f8.outputLen);
  for (let c7 = 0; c7 < s3; c7++) vn3[0] = c7 + 1, a3.update(c7 === 0 ? uo3 : l8).update(n5).update(vn3).digestInto(l8), i4.set(l8, o5 * c7), f8._cloneInto(a3);
  return f8.destroy(), a3.destroy(), ut3(l8, vn3), i4.slice(0, r3);
}
var Jf = (t, e2, n5, r3, o5) => Xf(t, Yf(t, e2, n5), r3, o5);
var Te3 = Ae3;
var En3 = BigInt(0);
var Bn3 = BigInt(1);
function Re3(t, e2) {
  if (typeof e2 != "boolean") throw new Error(t + " boolean expected, got " + e2);
}
function $e3(t) {
  const e2 = t.toString(16);
  return e2.length & 1 ? "0" + e2 : e2;
}
function lo3(t) {
  if (typeof t != "string") throw new Error("hex string expected, got " + typeof t);
  return t === "" ? En3 : BigInt("0x" + t);
}
function Ce3(t) {
  return lo3(ce(t));
}
function Le3(t) {
  return at(t), lo3(ce(Uint8Array.from(t).reverse()));
}
function In3(t, e2) {
  return fn(t.toString(16).padStart(e2 * 2, "0"));
}
function An3(t, e2) {
  return In3(t, e2).reverse();
}
function rt3(t, e2, n5) {
  let r3;
  if (typeof e2 == "string") try {
    r3 = fn(e2);
  } catch (s3) {
    throw new Error(t + " must be hex string or Uint8Array, cause: " + s3);
  }
  else if (nn3(e2)) r3 = Uint8Array.from(e2);
  else throw new Error(t + " must be hex string or Uint8Array");
  const o5 = r3.length;
  if (typeof n5 == "number" && o5 !== n5) throw new Error(t + " of length " + n5 + " expected, got " + o5);
  return r3;
}
var Sn3 = (t) => typeof t == "bigint" && En3 <= t;
function Qf(t, e2, n5) {
  return Sn3(t) && Sn3(e2) && Sn3(n5) && e2 <= t && t < n5;
}
function Nn3(t, e2, n5, r3) {
  if (!Qf(e2, n5, r3)) throw new Error("expected valid " + t + ": " + n5 + " <= n < " + r3 + ", got " + e2);
}
function tc(t) {
  let e2;
  for (e2 = 0; t > En3; t >>= Bn3, e2 += 1) ;
  return e2;
}
var je3 = (t) => (Bn3 << BigInt(t)) - Bn3;
function ec(t, e2, n5) {
  if (typeof t != "number" || t < 2) throw new Error("hashLen must be a number");
  if (typeof e2 != "number" || e2 < 2) throw new Error("qByteLen must be a number");
  if (typeof n5 != "function") throw new Error("hmacFn must be a function");
  const r3 = (g4) => new Uint8Array(g4), o5 = (g4) => Uint8Array.of(g4);
  let s3 = r3(t), i4 = r3(t), f8 = 0;
  const a3 = () => {
    s3.fill(1), i4.fill(0), f8 = 0;
  }, l8 = (...g4) => n5(i4, s3, ...g4), c7 = (g4 = r3(0)) => {
    i4 = l8(o5(0), g4), s3 = l8(), g4.length !== 0 && (i4 = l8(o5(1), g4), s3 = l8());
  }, u3 = () => {
    if (f8++ >= 1e3) throw new Error("drbg: tried 1000 values");
    let g4 = 0;
    const w5 = [];
    for (; g4 < e2; ) {
      s3 = l8();
      const y6 = s3.slice();
      w5.push(y6), g4 += s3.length;
    }
    return Ht3(...w5);
  };
  return (g4, w5) => {
    a3(), c7(g4);
    let y6;
    for (; !(y6 = w5(u3())); ) c7();
    return a3(), y6;
  };
}
function ke3(t, e2, n5 = {}) {
  if (!t || typeof t != "object") throw new Error("expected valid options object");
  function r3(o5, s3, i4) {
    const f8 = t[o5];
    if (i4 && f8 === void 0) return;
    const a3 = typeof f8;
    if (a3 !== s3 || f8 === null) throw new Error(`param "${o5}" is invalid: expected ${s3}, got ${a3}`);
  }
  Object.entries(e2).forEach(([o5, s3]) => r3(o5, s3, false)), Object.entries(n5).forEach(([o5, s3]) => r3(o5, s3, true));
}
function ho3(t) {
  const e2 = /* @__PURE__ */ new WeakMap();
  return (n5, ...r3) => {
    const o5 = e2.get(n5);
    if (o5 !== void 0) return o5;
    const s3 = t(n5, ...r3);
    return e2.set(n5, s3), s3;
  };
}
var ot = BigInt(0);
var Q3 = BigInt(1);
var Dt3 = BigInt(2);
var nc = BigInt(3);
var po3 = BigInt(4);
var go3 = BigInt(5);
var bo3 = BigInt(8);
function lt3(t, e2) {
  const n5 = t % e2;
  return n5 >= ot ? n5 : e2 + n5;
}
function pt(t, e2, n5) {
  let r3 = t;
  for (; e2-- > ot; ) r3 *= r3, r3 %= n5;
  return r3;
}
function yo3(t, e2) {
  if (t === ot) throw new Error("invert: expected non-zero number");
  if (e2 <= ot) throw new Error("invert: expected positive modulus, got " + e2);
  let n5 = lt3(t, e2), r3 = e2, o5 = ot, s3 = Q3;
  for (; n5 !== ot; ) {
    const f8 = r3 / n5, a3 = r3 % n5, l8 = o5 - s3 * f8;
    r3 = n5, n5 = a3, o5 = s3, s3 = l8;
  }
  if (r3 !== Q3) throw new Error("invert: does not exist");
  return lt3(o5, e2);
}
function mo3(t, e2) {
  const n5 = (t.ORDER + Q3) / po3, r3 = t.pow(e2, n5);
  if (!t.eql(t.sqr(r3), e2)) throw new Error("Cannot find square root");
  return r3;
}
function rc(t, e2) {
  const n5 = (t.ORDER - go3) / bo3, r3 = t.mul(e2, Dt3), o5 = t.pow(r3, n5), s3 = t.mul(e2, o5), i4 = t.mul(t.mul(s3, Dt3), o5), f8 = t.mul(s3, t.sub(i4, t.ONE));
  if (!t.eql(t.sqr(f8), e2)) throw new Error("Cannot find square root");
  return f8;
}
function oc(t) {
  if (t < BigInt(3)) throw new Error("sqrt is not defined for small field");
  let e2 = t - Q3, n5 = 0;
  for (; e2 % Dt3 === ot; ) e2 /= Dt3, n5++;
  let r3 = Dt3;
  const o5 = Yt2(t);
  for (; xo3(o5, r3) === 1; ) if (r3++ > 1e3) throw new Error("Cannot find square root: probably non-prime P");
  if (n5 === 1) return mo3;
  let s3 = o5.pow(r3, e2);
  const i4 = (e2 + Q3) / Dt3;
  return function(a3, l8) {
    if (a3.is0(l8)) return l8;
    if (xo3(a3, l8) !== 1) throw new Error("Cannot find square root");
    let c7 = n5, u3 = a3.mul(a3.ONE, s3), h6 = a3.pow(l8, e2), g4 = a3.pow(l8, i4);
    for (; !a3.eql(h6, a3.ONE); ) {
      if (a3.is0(h6)) return a3.ZERO;
      let w5 = 1, y6 = a3.sqr(h6);
      for (; !a3.eql(y6, a3.ONE); ) if (w5++, y6 = a3.sqr(y6), w5 === c7) throw new Error("Cannot find square root");
      const x7 = Q3 << BigInt(c7 - w5 - 1), R4 = a3.pow(u3, x7);
      c7 = w5, u3 = a3.sqr(R4), h6 = a3.mul(h6, u3), g4 = a3.mul(g4, R4);
    }
    return g4;
  };
}
function sc(t) {
  return t % po3 === nc ? mo3 : t % bo3 === go3 ? rc : oc(t);
}
var ic = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function fc(t) {
  const e2 = { ORDER: "bigint", MASK: "bigint", BYTES: "number", BITS: "number" }, n5 = ic.reduce((r3, o5) => (r3[o5] = "function", r3), e2);
  return ke3(t, n5), t;
}
function cc(t, e2, n5) {
  if (n5 < ot) throw new Error("invalid exponent, negatives unsupported");
  if (n5 === ot) return t.ONE;
  if (n5 === Q3) return e2;
  let r3 = t.ONE, o5 = e2;
  for (; n5 > ot; ) n5 & Q3 && (r3 = t.mul(r3, o5)), o5 = t.sqr(o5), n5 >>= Q3;
  return r3;
}
function wo3(t, e2, n5 = false) {
  const r3 = new Array(e2.length).fill(n5 ? t.ZERO : void 0), o5 = e2.reduce((i4, f8, a3) => t.is0(f8) ? i4 : (r3[a3] = i4, t.mul(i4, f8)), t.ONE), s3 = t.inv(o5);
  return e2.reduceRight((i4, f8, a3) => t.is0(f8) ? i4 : (r3[a3] = t.mul(i4, r3[a3]), t.mul(i4, f8)), s3), r3;
}
function xo3(t, e2) {
  const n5 = (t.ORDER - Q3) / Dt3, r3 = t.pow(e2, n5), o5 = t.eql(r3, t.ONE), s3 = t.eql(r3, t.ZERO), i4 = t.eql(r3, t.neg(t.ONE));
  if (!o5 && !s3 && !i4) throw new Error("invalid Legendre symbol result");
  return o5 ? 1 : s3 ? 0 : -1;
}
function ac(t, e2) {
  e2 !== void 0 && mt(e2);
  const n5 = e2 !== void 0 ? e2 : t.toString(2).length, r3 = Math.ceil(n5 / 8);
  return { nBitLength: n5, nByteLength: r3 };
}
function Yt2(t, e2, n5 = false, r3 = {}) {
  if (t <= ot) throw new Error("invalid field: expected ORDER > 0, got " + t);
  let o5, s3;
  if (typeof e2 == "object" && e2 != null) {
    if (r3.sqrt || n5) throw new Error("cannot specify opts in two arguments");
    const c7 = e2;
    c7.BITS && (o5 = c7.BITS), c7.sqrt && (s3 = c7.sqrt), typeof c7.isLE == "boolean" && (n5 = c7.isLE);
  } else typeof e2 == "number" && (o5 = e2), r3.sqrt && (s3 = r3.sqrt);
  const { nBitLength: i4, nByteLength: f8 } = ac(t, o5);
  if (f8 > 2048) throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let a3;
  const l8 = Object.freeze({ ORDER: t, isLE: n5, BITS: i4, BYTES: f8, MASK: je3(i4), ZERO: ot, ONE: Q3, create: (c7) => lt3(c7, t), isValid: (c7) => {
    if (typeof c7 != "bigint") throw new Error("invalid field element: expected bigint, got " + typeof c7);
    return ot <= c7 && c7 < t;
  }, is0: (c7) => c7 === ot, isValidNot0: (c7) => !l8.is0(c7) && l8.isValid(c7), isOdd: (c7) => (c7 & Q3) === Q3, neg: (c7) => lt3(-c7, t), eql: (c7, u3) => c7 === u3, sqr: (c7) => lt3(c7 * c7, t), add: (c7, u3) => lt3(c7 + u3, t), sub: (c7, u3) => lt3(c7 - u3, t), mul: (c7, u3) => lt3(c7 * u3, t), pow: (c7, u3) => cc(l8, c7, u3), div: (c7, u3) => lt3(c7 * yo3(u3, t), t), sqrN: (c7) => c7 * c7, addN: (c7, u3) => c7 + u3, subN: (c7, u3) => c7 - u3, mulN: (c7, u3) => c7 * u3, inv: (c7) => yo3(c7, t), sqrt: s3 || ((c7) => (a3 || (a3 = sc(t)), a3(l8, c7))), toBytes: (c7) => n5 ? An3(c7, f8) : In3(c7, f8), fromBytes: (c7) => {
    if (c7.length !== f8) throw new Error("Field.fromBytes: expected " + f8 + " bytes, got " + c7.length);
    return n5 ? Le3(c7) : Ce3(c7);
  }, invertBatch: (c7) => wo3(l8, c7), cmov: (c7, u3, h6) => h6 ? u3 : c7 });
  return Object.freeze(l8);
}
function vo3(t) {
  if (typeof t != "bigint") throw new Error("field order must be bigint");
  const e2 = t.toString(2).length;
  return Math.ceil(e2 / 8);
}
function Eo3(t) {
  const e2 = vo3(t);
  return e2 + Math.ceil(e2 / 2);
}
function uc(t, e2, n5 = false) {
  const r3 = t.length, o5 = vo3(e2), s3 = Eo3(e2);
  if (r3 < 16 || r3 < s3 || r3 > 1024) throw new Error("expected " + s3 + "-1024 bytes of input, got " + r3);
  const i4 = n5 ? Le3(t) : Ce3(t), f8 = lt3(i4, e2 - Q3) + Q3;
  return n5 ? An3(f8, o5) : In3(f8, o5);
}
var Xt3 = BigInt(0);
var Mt3 = BigInt(1);
function le3(t, e2) {
  const n5 = e2.negate();
  return t ? n5 : e2;
}
function lc(t, e2, n5) {
  const r3 = e2 === "pz" ? (i4) => i4.pz : (i4) => i4.ez, o5 = wo3(t.Fp, n5.map(r3));
  return n5.map((i4, f8) => i4.toAffine(o5[f8])).map(t.fromAffine);
}
function Bo3(t, e2) {
  if (!Number.isSafeInteger(t) || t <= 0 || t > e2) throw new Error("invalid window size, expected [1.." + e2 + "], got W=" + t);
}
function On3(t, e2) {
  Bo3(t, e2);
  const n5 = Math.ceil(e2 / t) + 1, r3 = 2 ** (t - 1), o5 = 2 ** t, s3 = je3(t), i4 = BigInt(t);
  return { windows: n5, windowSize: r3, mask: s3, maxNumber: o5, shiftBy: i4 };
}
function Io3(t, e2, n5) {
  const { windowSize: r3, mask: o5, maxNumber: s3, shiftBy: i4 } = n5;
  let f8 = Number(t & o5), a3 = t >> i4;
  f8 > r3 && (f8 -= s3, a3 += Mt3);
  const l8 = e2 * r3, c7 = l8 + Math.abs(f8) - 1, u3 = f8 === 0, h6 = f8 < 0, g4 = e2 % 2 !== 0;
  return { nextN: a3, offset: c7, isZero: u3, isNeg: h6, isNegF: g4, offsetF: l8 };
}
function dc(t, e2) {
  if (!Array.isArray(t)) throw new Error("array expected");
  t.forEach((n5, r3) => {
    if (!(n5 instanceof e2)) throw new Error("invalid point at index " + r3);
  });
}
function hc(t, e2) {
  if (!Array.isArray(t)) throw new Error("array of scalars expected");
  t.forEach((n5, r3) => {
    if (!e2.isValid(n5)) throw new Error("invalid scalar at index " + r3);
  });
}
var Un3 = /* @__PURE__ */ new WeakMap();
var Ao3 = /* @__PURE__ */ new WeakMap();
function _n3(t) {
  return Ao3.get(t) || 1;
}
function So3(t) {
  if (t !== Xt3) throw new Error("invalid wNAF");
}
function pc(t, e2) {
  return { constTimeNegate: le3, hasPrecomputes(n5) {
    return _n3(n5) !== 1;
  }, unsafeLadder(n5, r3, o5 = t.ZERO) {
    let s3 = n5;
    for (; r3 > Xt3; ) r3 & Mt3 && (o5 = o5.add(s3)), s3 = s3.double(), r3 >>= Mt3;
    return o5;
  }, precomputeWindow(n5, r3) {
    const { windows: o5, windowSize: s3 } = On3(r3, e2), i4 = [];
    let f8 = n5, a3 = f8;
    for (let l8 = 0; l8 < o5; l8++) {
      a3 = f8, i4.push(a3);
      for (let c7 = 1; c7 < s3; c7++) a3 = a3.add(f8), i4.push(a3);
      f8 = a3.double();
    }
    return i4;
  }, wNAF(n5, r3, o5) {
    let s3 = t.ZERO, i4 = t.BASE;
    const f8 = On3(n5, e2);
    for (let a3 = 0; a3 < f8.windows; a3++) {
      const { nextN: l8, offset: c7, isZero: u3, isNeg: h6, isNegF: g4, offsetF: w5 } = Io3(o5, a3, f8);
      o5 = l8, u3 ? i4 = i4.add(le3(g4, r3[w5])) : s3 = s3.add(le3(h6, r3[c7]));
    }
    return So3(o5), { p: s3, f: i4 };
  }, wNAFUnsafe(n5, r3, o5, s3 = t.ZERO) {
    const i4 = On3(n5, e2);
    for (let f8 = 0; f8 < i4.windows && o5 !== Xt3; f8++) {
      const { nextN: a3, offset: l8, isZero: c7, isNeg: u3 } = Io3(o5, f8, i4);
      if (o5 = a3, !c7) {
        const h6 = r3[l8];
        s3 = s3.add(u3 ? h6.negate() : h6);
      }
    }
    return So3(o5), s3;
  }, getPrecomputes(n5, r3, o5) {
    let s3 = Un3.get(r3);
    return s3 || (s3 = this.precomputeWindow(r3, n5), n5 !== 1 && (typeof o5 == "function" && (s3 = o5(s3)), Un3.set(r3, s3))), s3;
  }, wNAFCached(n5, r3, o5) {
    const s3 = _n3(n5);
    return this.wNAF(s3, this.getPrecomputes(s3, n5, o5), r3);
  }, wNAFCachedUnsafe(n5, r3, o5, s3) {
    const i4 = _n3(n5);
    return i4 === 1 ? this.unsafeLadder(n5, r3, s3) : this.wNAFUnsafe(i4, this.getPrecomputes(i4, n5, o5), r3, s3);
  }, setWindowSize(n5, r3) {
    Bo3(r3, e2), Ao3.set(n5, r3), Un3.delete(n5);
  } };
}
function gc(t, e2, n5, r3) {
  let o5 = e2, s3 = t.ZERO, i4 = t.ZERO;
  for (; n5 > Xt3 || r3 > Xt3; ) n5 & Mt3 && (s3 = s3.add(o5)), r3 & Mt3 && (i4 = i4.add(o5)), o5 = o5.double(), n5 >>= Mt3, r3 >>= Mt3;
  return { p1: s3, p2: i4 };
}
function bc(t, e2, n5, r3) {
  dc(n5, t), hc(r3, e2);
  const o5 = n5.length, s3 = r3.length;
  if (o5 !== s3) throw new Error("arrays of points and scalars must have equal length");
  const i4 = t.ZERO, f8 = tc(BigInt(o5));
  let a3 = 1;
  f8 > 12 ? a3 = f8 - 3 : f8 > 4 ? a3 = f8 - 2 : f8 > 0 && (a3 = 2);
  const l8 = je3(a3), c7 = new Array(Number(l8) + 1).fill(i4), u3 = Math.floor((e2.BITS - 1) / a3) * a3;
  let h6 = i4;
  for (let g4 = u3; g4 >= 0; g4 -= a3) {
    c7.fill(i4);
    for (let y6 = 0; y6 < s3; y6++) {
      const x7 = r3[y6], R4 = Number(x7 >> BigInt(g4) & l8);
      c7[R4] = c7[R4].add(n5[y6]);
    }
    let w5 = i4;
    for (let y6 = c7.length - 1, x7 = i4; y6 > 0; y6--) x7 = x7.add(c7[y6]), w5 = w5.add(x7);
    if (h6 = h6.add(w5), g4 !== 0) for (let y6 = 0; y6 < a3; y6++) h6 = h6.double();
  }
  return h6;
}
function No3(t, e2) {
  if (e2) {
    if (e2.ORDER !== t) throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    return fc(e2), e2;
  } else return Yt2(t);
}
function yc(t, e2, n5 = {}) {
  if (!e2 || typeof e2 != "object") throw new Error(`expected valid ${t} CURVE object`);
  for (const f8 of ["p", "n", "h"]) {
    const a3 = e2[f8];
    if (!(typeof a3 == "bigint" && a3 > Xt3)) throw new Error(`CURVE.${f8} must be positive bigint`);
  }
  const r3 = No3(e2.p, n5.Fp), o5 = No3(e2.n, n5.Fn), i4 = ["Gx", "Gy", "a", t === "weierstrass" ? "b" : "d"];
  for (const f8 of i4) if (!r3.isValid(e2[f8])) throw new Error(`CURVE.${f8} must be valid field element of CURVE.Fp`);
  return { Fp: r3, Fn: o5 };
}
BigInt(0), BigInt(1), BigInt(2), BigInt(8);
var de3 = BigInt(0);
var Jt2 = BigInt(1);
var Pe3 = BigInt(2);
function mc(t) {
  return ke3(t, { adjustScalarBytes: "function", powPminus2: "function" }), Object.freeze({ ...t });
}
function wc(t) {
  const e2 = mc(t), { P: n5, type: r3, adjustScalarBytes: o5, powPminus2: s3, randomBytes: i4 } = e2, f8 = r3 === "x25519";
  if (!f8 && r3 !== "x448") throw new Error("invalid type");
  const a3 = i4 || Zt2, l8 = f8 ? 255 : 448, c7 = f8 ? 32 : 56, u3 = BigInt(f8 ? 9 : 5), h6 = BigInt(f8 ? 121665 : 39081), g4 = f8 ? Pe3 ** BigInt(254) : Pe3 ** BigInt(447), w5 = f8 ? BigInt(8) * Pe3 ** BigInt(251) - Jt2 : BigInt(4) * Pe3 ** BigInt(445) - Jt2, y6 = g4 + w5 + Jt2, x7 = (d5) => lt3(d5, n5), R4 = M6(u3);
  function M6(d5) {
    return An3(x7(d5), c7);
  }
  function L5(d5) {
    const m4 = rt3("u coordinate", d5, c7);
    return f8 && (m4[31] &= 127), x7(Le3(m4));
  }
  function V4(d5) {
    return Le3(o5(rt3("scalar", d5, c7)));
  }
  function _3(d5, m4) {
    const p5 = $4(L5(m4), V4(d5));
    if (p5 === de3) throw new Error("invalid private or public key received");
    return M6(p5);
  }
  function k7(d5) {
    return _3(d5, R4);
  }
  function j6(d5, m4, p5) {
    const b5 = x7(d5 * (m4 - p5));
    return m4 = x7(m4 - b5), p5 = x7(p5 + b5), { x_2: m4, x_3: p5 };
  }
  function $4(d5, m4) {
    Nn3("u", d5, de3, n5), Nn3("scalar", m4, g4, y6);
    const p5 = m4, b5 = d5;
    let v6 = Jt2, B4 = de3, E6 = d5, I5 = Jt2, S5 = de3;
    for (let A5 = BigInt(l8 - 1); A5 >= de3; A5--) {
      const T5 = p5 >> A5 & Jt2;
      S5 ^= T5, { x_2: v6, x_3: E6 } = j6(S5, v6, E6), { x_2: B4, x_3: I5 } = j6(S5, B4, I5), S5 = T5;
      const U4 = v6 + B4, C5 = x7(U4 * U4), H4 = v6 - B4, q2 = x7(H4 * H4), P6 = C5 - q2, K5 = E6 + I5, et = E6 - I5, Z3 = x7(et * U4), z4 = x7(K5 * H4), Ft4 = Z3 + z4, yt5 = Z3 - z4;
      E6 = x7(Ft4 * Ft4), I5 = x7(b5 * x7(yt5 * yt5)), v6 = x7(C5 * q2), B4 = x7(P6 * (C5 + x7(h6 * P6)));
    }
    ({ x_2: v6, x_3: E6 } = j6(S5, v6, E6)), { x_2: B4, x_3: I5 } = j6(S5, B4, I5);
    const O7 = s3(B4);
    return x7(v6 * O7);
  }
  return { scalarMult: _3, scalarMultBase: k7, getSharedSecret: (d5, m4) => _3(d5, m4), getPublicKey: (d5) => k7(d5), utils: { randomPrivateKey: () => a3(c7) }, GuBytes: R4.slice() };
}
BigInt(0);
var xc = BigInt(1);
var Oo3 = BigInt(2);
var vc = BigInt(3);
var Ec = BigInt(5);
var Bc = BigInt(8);
var Uo3 = { p: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"), n: BigInt("0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"), h: Bc, a: BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"), d: BigInt("0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"), Gx: BigInt("0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"), Gy: BigInt("0x6666666666666666666666666666666666666666666666666666666666666658") };
function Ic(t) {
  const e2 = BigInt(10), n5 = BigInt(20), r3 = BigInt(40), o5 = BigInt(80), s3 = Uo3.p, f8 = t * t % s3 * t % s3, a3 = pt(f8, Oo3, s3) * f8 % s3, l8 = pt(a3, xc, s3) * t % s3, c7 = pt(l8, Ec, s3) * l8 % s3, u3 = pt(c7, e2, s3) * c7 % s3, h6 = pt(u3, n5, s3) * u3 % s3, g4 = pt(h6, r3, s3) * h6 % s3, w5 = pt(g4, o5, s3) * g4 % s3, y6 = pt(w5, o5, s3) * g4 % s3, x7 = pt(y6, e2, s3) * c7 % s3;
  return { pow_p_5_8: pt(x7, Oo3, s3) * t % s3, b2: f8 };
}
function Ac(t) {
  return t[0] &= 248, t[31] &= 127, t[31] |= 64, t;
}
var Tn3 = (() => {
  const t = Uo3.p;
  return wc({ P: t, type: "x25519", powPminus2: (e2) => {
    const { pow_p_5_8: n5, b2: r3 } = Ic(e2);
    return lt3(pt(n5, vc, t) * r3, t);
  }, adjustScalarBytes: Ac });
})();
function _o3(t) {
  t.lowS !== void 0 && Re3("lowS", t.lowS), t.prehash !== void 0 && Re3("prehash", t.prehash);
}
var Sc = class extends Error {
  constructor(e2 = "") {
    super(e2);
  }
};
var vt3 = { Err: Sc, _tlv: { encode: (t, e2) => {
  const { Err: n5 } = vt3;
  if (t < 0 || t > 256) throw new n5("tlv.encode: wrong tag");
  if (e2.length & 1) throw new n5("tlv.encode: unpadded data");
  const r3 = e2.length / 2, o5 = $e3(r3);
  if (o5.length / 2 & 128) throw new n5("tlv.encode: long form length too big");
  const s3 = r3 > 127 ? $e3(o5.length / 2 | 128) : "";
  return $e3(t) + s3 + o5 + e2;
}, decode(t, e2) {
  const { Err: n5 } = vt3;
  let r3 = 0;
  if (t < 0 || t > 256) throw new n5("tlv.encode: wrong tag");
  if (e2.length < 2 || e2[r3++] !== t) throw new n5("tlv.decode: wrong tlv");
  const o5 = e2[r3++], s3 = !!(o5 & 128);
  let i4 = 0;
  if (!s3) i4 = o5;
  else {
    const a3 = o5 & 127;
    if (!a3) throw new n5("tlv.decode(long): indefinite length not supported");
    if (a3 > 4) throw new n5("tlv.decode(long): byte length is too big");
    const l8 = e2.subarray(r3, r3 + a3);
    if (l8.length !== a3) throw new n5("tlv.decode: length bytes not complete");
    if (l8[0] === 0) throw new n5("tlv.decode(long): zero leftmost byte");
    for (const c7 of l8) i4 = i4 << 8 | c7;
    if (r3 += a3, i4 < 128) throw new n5("tlv.decode(long): not minimal encoding");
  }
  const f8 = e2.subarray(r3, r3 + i4);
  if (f8.length !== i4) throw new n5("tlv.decode: wrong value length");
  return { v: f8, l: e2.subarray(r3 + i4) };
} }, _int: { encode(t) {
  const { Err: e2 } = vt3;
  if (t < he3) throw new e2("integer: negative integers are not allowed");
  let n5 = $e3(t);
  if (Number.parseInt(n5[0], 16) & 8 && (n5 = "00" + n5), n5.length & 1) throw new e2("unexpected DER parsing assertion: unpadded hex");
  return n5;
}, decode(t) {
  const { Err: e2 } = vt3;
  if (t[0] & 128) throw new e2("invalid signature integer: negative");
  if (t[0] === 0 && !(t[1] & 128)) throw new e2("invalid signature integer: unnecessary leading zero");
  return Ce3(t);
} }, toSig(t) {
  const { Err: e2, _int: n5, _tlv: r3 } = vt3, o5 = rt3("signature", t), { v: s3, l: i4 } = r3.decode(48, o5);
  if (i4.length) throw new e2("invalid signature: left bytes after parsing");
  const { v: f8, l: a3 } = r3.decode(2, s3), { v: l8, l: c7 } = r3.decode(2, a3);
  if (c7.length) throw new e2("invalid signature: left bytes after parsing");
  return { r: n5.decode(f8), s: n5.decode(l8) };
}, hexFromSig(t) {
  const { _tlv: e2, _int: n5 } = vt3, r3 = e2.encode(2, n5.encode(t.r)), o5 = e2.encode(2, n5.encode(t.s)), s3 = r3 + o5;
  return e2.encode(48, s3);
} };
var he3 = BigInt(0);
var pe3 = BigInt(1);
var Nc = BigInt(2);
var He3 = BigInt(3);
var Oc = BigInt(4);
function Uc(t, e2, n5) {
  function r3(o5) {
    const s3 = t.sqr(o5), i4 = t.mul(s3, o5);
    return t.add(t.add(i4, t.mul(o5, e2)), n5);
  }
  return r3;
}
function To3(t, e2, n5) {
  const { BYTES: r3 } = t;
  function o5(s3) {
    let i4;
    if (typeof s3 == "bigint") i4 = s3;
    else {
      let f8 = rt3("private key", s3);
      if (e2) {
        if (!e2.includes(f8.length * 2)) throw new Error("invalid private key");
        const a3 = new Uint8Array(r3);
        a3.set(f8, a3.length - f8.length), f8 = a3;
      }
      try {
        i4 = t.fromBytes(f8);
      } catch {
        throw new Error(`invalid private key: expected ui8a of size ${r3}, got ${typeof s3}`);
      }
    }
    if (n5 && (i4 = t.create(i4)), !t.isValidNot0(i4)) throw new Error("invalid private key: out of range [1..N-1]");
    return i4;
  }
  return o5;
}
function _c(t, e2 = {}) {
  const { Fp: n5, Fn: r3 } = yc("weierstrass", t, e2), { h: o5, n: s3 } = t;
  ke3(e2, {}, { allowInfinityPoint: "boolean", clearCofactor: "function", isTorsionFree: "function", fromBytes: "function", toBytes: "function", endo: "object", wrapPrivateKey: "boolean" });
  const { endo: i4 } = e2;
  if (i4 && (!n5.is0(t.a) || typeof i4.beta != "bigint" || typeof i4.splitScalar != "function")) throw new Error('invalid endo: expected "beta": bigint and "splitScalar": function');
  function f8() {
    if (!n5.isOdd) throw new Error("compression is not supported: Field does not have .isOdd()");
  }
  function a3($4, d5, m4) {
    const { x: p5, y: b5 } = d5.toAffine(), v6 = n5.toBytes(p5);
    if (Re3("isCompressed", m4), m4) {
      f8();
      const B4 = !n5.isOdd(b5);
      return Ht3(Ro3(B4), v6);
    } else return Ht3(Uint8Array.of(4), v6, n5.toBytes(b5));
  }
  function l8($4) {
    at($4);
    const d5 = n5.BYTES, m4 = d5 + 1, p5 = 2 * d5 + 1, b5 = $4.length, v6 = $4[0], B4 = $4.subarray(1);
    if (b5 === m4 && (v6 === 2 || v6 === 3)) {
      const E6 = n5.fromBytes(B4);
      if (!n5.isValid(E6)) throw new Error("bad point: is not on curve, wrong x");
      const I5 = h6(E6);
      let S5;
      try {
        S5 = n5.sqrt(I5);
      } catch (T5) {
        const U4 = T5 instanceof Error ? ": " + T5.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + U4);
      }
      f8();
      const O7 = n5.isOdd(S5);
      return (v6 & 1) === 1 !== O7 && (S5 = n5.neg(S5)), { x: E6, y: S5 };
    } else if (b5 === p5 && v6 === 4) {
      const E6 = n5.fromBytes(B4.subarray(d5 * 0, d5 * 1)), I5 = n5.fromBytes(B4.subarray(d5 * 1, d5 * 2));
      if (!g4(E6, I5)) throw new Error("bad point: is not on curve");
      return { x: E6, y: I5 };
    } else throw new Error(`bad point: got length ${b5}, expected compressed=${m4} or uncompressed=${p5}`);
  }
  const c7 = e2.toBytes || a3, u3 = e2.fromBytes || l8, h6 = Uc(n5, t.a, t.b);
  function g4($4, d5) {
    const m4 = n5.sqr(d5), p5 = h6($4);
    return n5.eql(m4, p5);
  }
  if (!g4(t.Gx, t.Gy)) throw new Error("bad curve params: generator point");
  const w5 = n5.mul(n5.pow(t.a, He3), Oc), y6 = n5.mul(n5.sqr(t.b), BigInt(27));
  if (n5.is0(n5.add(w5, y6))) throw new Error("bad curve params: a or b");
  function x7($4, d5, m4 = false) {
    if (!n5.isValid(d5) || m4 && n5.is0(d5)) throw new Error(`bad point coordinate ${$4}`);
    return d5;
  }
  function R4($4) {
    if (!($4 instanceof _3)) throw new Error("ProjectivePoint expected");
  }
  const M6 = ho3(($4, d5) => {
    const { px: m4, py: p5, pz: b5 } = $4;
    if (n5.eql(b5, n5.ONE)) return { x: m4, y: p5 };
    const v6 = $4.is0();
    d5 == null && (d5 = v6 ? n5.ONE : n5.inv(b5));
    const B4 = n5.mul(m4, d5), E6 = n5.mul(p5, d5), I5 = n5.mul(b5, d5);
    if (v6) return { x: n5.ZERO, y: n5.ZERO };
    if (!n5.eql(I5, n5.ONE)) throw new Error("invZ was invalid");
    return { x: B4, y: E6 };
  }), L5 = ho3(($4) => {
    if ($4.is0()) {
      if (e2.allowInfinityPoint && !n5.is0($4.py)) return;
      throw new Error("bad point: ZERO");
    }
    const { x: d5, y: m4 } = $4.toAffine();
    if (!n5.isValid(d5) || !n5.isValid(m4)) throw new Error("bad point: x or y not field elements");
    if (!g4(d5, m4)) throw new Error("bad point: equation left != right");
    if (!$4.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
    return true;
  });
  function V4($4, d5, m4, p5, b5) {
    return m4 = new _3(n5.mul(m4.px, $4), m4.py, m4.pz), d5 = le3(p5, d5), m4 = le3(b5, m4), d5.add(m4);
  }
  class _3 {
    constructor(d5, m4, p5) {
      this.px = x7("x", d5), this.py = x7("y", m4, true), this.pz = x7("z", p5), Object.freeze(this);
    }
    static fromAffine(d5) {
      const { x: m4, y: p5 } = d5 || {};
      if (!d5 || !n5.isValid(m4) || !n5.isValid(p5)) throw new Error("invalid affine point");
      if (d5 instanceof _3) throw new Error("projective point not allowed");
      return n5.is0(m4) && n5.is0(p5) ? _3.ZERO : new _3(m4, p5, n5.ONE);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static normalizeZ(d5) {
      return lc(_3, "pz", d5);
    }
    static fromBytes(d5) {
      return at(d5), _3.fromHex(d5);
    }
    static fromHex(d5) {
      const m4 = _3.fromAffine(u3(rt3("pointHex", d5)));
      return m4.assertValidity(), m4;
    }
    static fromPrivateKey(d5) {
      const m4 = To3(r3, e2.allowedPrivateKeyLengths, e2.wrapPrivateKey);
      return _3.BASE.multiply(m4(d5));
    }
    static msm(d5, m4) {
      return bc(_3, r3, d5, m4);
    }
    precompute(d5 = 8, m4 = true) {
      return j6.setWindowSize(this, d5), m4 || this.multiply(He3), this;
    }
    _setWindowSize(d5) {
      this.precompute(d5);
    }
    assertValidity() {
      L5(this);
    }
    hasEvenY() {
      const { y: d5 } = this.toAffine();
      if (!n5.isOdd) throw new Error("Field doesn't support isOdd");
      return !n5.isOdd(d5);
    }
    equals(d5) {
      R4(d5);
      const { px: m4, py: p5, pz: b5 } = this, { px: v6, py: B4, pz: E6 } = d5, I5 = n5.eql(n5.mul(m4, E6), n5.mul(v6, b5)), S5 = n5.eql(n5.mul(p5, E6), n5.mul(B4, b5));
      return I5 && S5;
    }
    negate() {
      return new _3(this.px, n5.neg(this.py), this.pz);
    }
    double() {
      const { a: d5, b: m4 } = t, p5 = n5.mul(m4, He3), { px: b5, py: v6, pz: B4 } = this;
      let E6 = n5.ZERO, I5 = n5.ZERO, S5 = n5.ZERO, O7 = n5.mul(b5, b5), A5 = n5.mul(v6, v6), T5 = n5.mul(B4, B4), U4 = n5.mul(b5, v6);
      return U4 = n5.add(U4, U4), S5 = n5.mul(b5, B4), S5 = n5.add(S5, S5), E6 = n5.mul(d5, S5), I5 = n5.mul(p5, T5), I5 = n5.add(E6, I5), E6 = n5.sub(A5, I5), I5 = n5.add(A5, I5), I5 = n5.mul(E6, I5), E6 = n5.mul(U4, E6), S5 = n5.mul(p5, S5), T5 = n5.mul(d5, T5), U4 = n5.sub(O7, T5), U4 = n5.mul(d5, U4), U4 = n5.add(U4, S5), S5 = n5.add(O7, O7), O7 = n5.add(S5, O7), O7 = n5.add(O7, T5), O7 = n5.mul(O7, U4), I5 = n5.add(I5, O7), T5 = n5.mul(v6, B4), T5 = n5.add(T5, T5), O7 = n5.mul(T5, U4), E6 = n5.sub(E6, O7), S5 = n5.mul(T5, A5), S5 = n5.add(S5, S5), S5 = n5.add(S5, S5), new _3(E6, I5, S5);
    }
    add(d5) {
      R4(d5);
      const { px: m4, py: p5, pz: b5 } = this, { px: v6, py: B4, pz: E6 } = d5;
      let I5 = n5.ZERO, S5 = n5.ZERO, O7 = n5.ZERO;
      const A5 = t.a, T5 = n5.mul(t.b, He3);
      let U4 = n5.mul(m4, v6), C5 = n5.mul(p5, B4), H4 = n5.mul(b5, E6), q2 = n5.add(m4, p5), P6 = n5.add(v6, B4);
      q2 = n5.mul(q2, P6), P6 = n5.add(U4, C5), q2 = n5.sub(q2, P6), P6 = n5.add(m4, b5);
      let K5 = n5.add(v6, E6);
      return P6 = n5.mul(P6, K5), K5 = n5.add(U4, H4), P6 = n5.sub(P6, K5), K5 = n5.add(p5, b5), I5 = n5.add(B4, E6), K5 = n5.mul(K5, I5), I5 = n5.add(C5, H4), K5 = n5.sub(K5, I5), O7 = n5.mul(A5, P6), I5 = n5.mul(T5, H4), O7 = n5.add(I5, O7), I5 = n5.sub(C5, O7), O7 = n5.add(C5, O7), S5 = n5.mul(I5, O7), C5 = n5.add(U4, U4), C5 = n5.add(C5, U4), H4 = n5.mul(A5, H4), P6 = n5.mul(T5, P6), C5 = n5.add(C5, H4), H4 = n5.sub(U4, H4), H4 = n5.mul(A5, H4), P6 = n5.add(P6, H4), U4 = n5.mul(C5, P6), S5 = n5.add(S5, U4), U4 = n5.mul(K5, P6), I5 = n5.mul(q2, I5), I5 = n5.sub(I5, U4), U4 = n5.mul(q2, C5), O7 = n5.mul(K5, O7), O7 = n5.add(O7, U4), new _3(I5, S5, O7);
    }
    subtract(d5) {
      return this.add(d5.negate());
    }
    is0() {
      return this.equals(_3.ZERO);
    }
    multiply(d5) {
      const { endo: m4 } = e2;
      if (!r3.isValidNot0(d5)) throw new Error("invalid scalar: out of range");
      let p5, b5;
      const v6 = (B4) => j6.wNAFCached(this, B4, _3.normalizeZ);
      if (m4) {
        const { k1neg: B4, k1: E6, k2neg: I5, k2: S5 } = m4.splitScalar(d5), { p: O7, f: A5 } = v6(E6), { p: T5, f: U4 } = v6(S5);
        b5 = A5.add(U4), p5 = V4(m4.beta, O7, T5, B4, I5);
      } else {
        const { p: B4, f: E6 } = v6(d5);
        p5 = B4, b5 = E6;
      }
      return _3.normalizeZ([p5, b5])[0];
    }
    multiplyUnsafe(d5) {
      const { endo: m4 } = e2, p5 = this;
      if (!r3.isValid(d5)) throw new Error("invalid scalar: out of range");
      if (d5 === he3 || p5.is0()) return _3.ZERO;
      if (d5 === pe3) return p5;
      if (j6.hasPrecomputes(this)) return this.multiply(d5);
      if (m4) {
        const { k1neg: b5, k1: v6, k2neg: B4, k2: E6 } = m4.splitScalar(d5), { p1: I5, p2: S5 } = gc(_3, p5, v6, E6);
        return V4(m4.beta, I5, S5, b5, B4);
      } else return j6.wNAFCachedUnsafe(p5, d5);
    }
    multiplyAndAddUnsafe(d5, m4, p5) {
      const b5 = this.multiplyUnsafe(m4).add(d5.multiplyUnsafe(p5));
      return b5.is0() ? void 0 : b5;
    }
    toAffine(d5) {
      return M6(this, d5);
    }
    isTorsionFree() {
      const { isTorsionFree: d5 } = e2;
      return o5 === pe3 ? true : d5 ? d5(_3, this) : j6.wNAFCachedUnsafe(this, s3).is0();
    }
    clearCofactor() {
      const { clearCofactor: d5 } = e2;
      return o5 === pe3 ? this : d5 ? d5(_3, this) : this.multiplyUnsafe(o5);
    }
    toBytes(d5 = true) {
      return Re3("isCompressed", d5), this.assertValidity(), c7(_3, this, d5);
    }
    toRawBytes(d5 = true) {
      return this.toBytes(d5);
    }
    toHex(d5 = true) {
      return ce(this.toBytes(d5));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
  }
  _3.BASE = new _3(t.Gx, t.Gy, n5.ONE), _3.ZERO = new _3(n5.ZERO, n5.ONE, n5.ZERO), _3.Fp = n5, _3.Fn = r3;
  const k7 = r3.BITS, j6 = pc(_3, e2.endo ? Math.ceil(k7 / 2) : k7);
  return _3;
}
function Ro3(t) {
  return Uint8Array.of(t ? 2 : 3);
}
function Tc(t, e2, n5 = {}) {
  ke3(e2, { hash: "function" }, { hmac: "function", lowS: "boolean", randomBytes: "function", bits2int: "function", bits2int_modN: "function" });
  const r3 = e2.randomBytes || Zt2, o5 = e2.hmac || ((p5, ...b5) => _e3(e2.hash, p5, Ht3(...b5))), { Fp: s3, Fn: i4 } = t, { ORDER: f8, BITS: a3 } = i4;
  function l8(p5) {
    const b5 = f8 >> pe3;
    return p5 > b5;
  }
  function c7(p5) {
    return l8(p5) ? i4.neg(p5) : p5;
  }
  function u3(p5, b5) {
    if (!i4.isValidNot0(b5)) throw new Error(`invalid signature ${p5}: out of range 1..CURVE.n`);
  }
  class h6 {
    constructor(b5, v6, B4) {
      u3("r", b5), u3("s", v6), this.r = b5, this.s = v6, B4 != null && (this.recovery = B4), Object.freeze(this);
    }
    static fromCompact(b5) {
      const v6 = i4.BYTES, B4 = rt3("compactSignature", b5, v6 * 2);
      return new h6(i4.fromBytes(B4.subarray(0, v6)), i4.fromBytes(B4.subarray(v6, v6 * 2)));
    }
    static fromDER(b5) {
      const { r: v6, s: B4 } = vt3.toSig(rt3("DER", b5));
      return new h6(v6, B4);
    }
    assertValidity() {
    }
    addRecoveryBit(b5) {
      return new h6(this.r, this.s, b5);
    }
    recoverPublicKey(b5) {
      const v6 = s3.ORDER, { r: B4, s: E6, recovery: I5 } = this;
      if (I5 == null || ![0, 1, 2, 3].includes(I5)) throw new Error("recovery id invalid");
      if (f8 * Nc < v6 && I5 > 1) throw new Error("recovery id is ambiguous for h>1 curve");
      const O7 = I5 === 2 || I5 === 3 ? B4 + f8 : B4;
      if (!s3.isValid(O7)) throw new Error("recovery id 2 or 3 invalid");
      const A5 = s3.toBytes(O7), T5 = t.fromHex(Ht3(Ro3((I5 & 1) === 0), A5)), U4 = i4.inv(O7), C5 = L5(rt3("msgHash", b5)), H4 = i4.create(-C5 * U4), q2 = i4.create(E6 * U4), P6 = t.BASE.multiplyUnsafe(H4).add(T5.multiplyUnsafe(q2));
      if (P6.is0()) throw new Error("point at infinify");
      return P6.assertValidity(), P6;
    }
    hasHighS() {
      return l8(this.s);
    }
    normalizeS() {
      return this.hasHighS() ? new h6(this.r, i4.neg(this.s), this.recovery) : this;
    }
    toBytes(b5) {
      if (b5 === "compact") return Ht3(i4.toBytes(this.r), i4.toBytes(this.s));
      if (b5 === "der") return fn(vt3.hexFromSig(this));
      throw new Error("invalid format");
    }
    toDERRawBytes() {
      return this.toBytes("der");
    }
    toDERHex() {
      return ce(this.toBytes("der"));
    }
    toCompactRawBytes() {
      return this.toBytes("compact");
    }
    toCompactHex() {
      return ce(this.toBytes("compact"));
    }
  }
  const g4 = To3(i4, n5.allowedPrivateKeyLengths, n5.wrapPrivateKey), w5 = { isValidPrivateKey(p5) {
    try {
      return g4(p5), true;
    } catch {
      return false;
    }
  }, normPrivateKeyToScalar: g4, randomPrivateKey: () => {
    const p5 = f8;
    return uc(r3(Eo3(p5)), p5);
  }, precompute(p5 = 8, b5 = t.BASE) {
    return b5.precompute(p5, false);
  } };
  function y6(p5, b5 = true) {
    return t.fromPrivateKey(p5).toBytes(b5);
  }
  function x7(p5) {
    if (typeof p5 == "bigint") return false;
    if (p5 instanceof t) return true;
    const v6 = rt3("key", p5).length, B4 = s3.BYTES, E6 = B4 + 1, I5 = 2 * B4 + 1;
    if (!(n5.allowedPrivateKeyLengths || i4.BYTES === E6)) return v6 === E6 || v6 === I5;
  }
  function R4(p5, b5, v6 = true) {
    if (x7(p5) === true) throw new Error("first arg must be private key");
    if (x7(b5) === false) throw new Error("second arg must be public key");
    return t.fromHex(b5).multiply(g4(p5)).toBytes(v6);
  }
  const M6 = e2.bits2int || function(p5) {
    if (p5.length > 8192) throw new Error("input is too large");
    const b5 = Ce3(p5), v6 = p5.length * 8 - a3;
    return v6 > 0 ? b5 >> BigInt(v6) : b5;
  }, L5 = e2.bits2int_modN || function(p5) {
    return i4.create(M6(p5));
  }, V4 = je3(a3);
  function _3(p5) {
    return Nn3("num < 2^" + a3, p5, he3, V4), i4.toBytes(p5);
  }
  function k7(p5, b5, v6 = j6) {
    if (["recovered", "canonical"].some((q2) => q2 in v6)) throw new Error("sign() legacy options not supported");
    const { hash: B4 } = e2;
    let { lowS: E6, prehash: I5, extraEntropy: S5 } = v6;
    E6 == null && (E6 = true), p5 = rt3("msgHash", p5), _o3(v6), I5 && (p5 = rt3("prehashed msgHash", B4(p5)));
    const O7 = L5(p5), A5 = g4(b5), T5 = [_3(A5), _3(O7)];
    if (S5 != null && S5 !== false) {
      const q2 = S5 === true ? r3(s3.BYTES) : S5;
      T5.push(rt3("extraEntropy", q2));
    }
    const U4 = Ht3(...T5), C5 = O7;
    function H4(q2) {
      const P6 = M6(q2);
      if (!i4.isValidNot0(P6)) return;
      const K5 = i4.inv(P6), et = t.BASE.multiply(P6).toAffine(), Z3 = i4.create(et.x);
      if (Z3 === he3) return;
      const z4 = i4.create(K5 * i4.create(C5 + Z3 * A5));
      if (z4 === he3) return;
      let Ft4 = (et.x === Z3 ? 0 : 2) | Number(et.y & pe3), yt5 = z4;
      return E6 && l8(z4) && (yt5 = c7(z4), Ft4 ^= 1), new h6(Z3, yt5, Ft4);
    }
    return { seed: U4, k2sig: H4 };
  }
  const j6 = { lowS: e2.lowS, prehash: false }, $4 = { lowS: e2.lowS, prehash: false };
  function d5(p5, b5, v6 = j6) {
    const { seed: B4, k2sig: E6 } = k7(p5, b5, v6);
    return ec(e2.hash.outputLen, i4.BYTES, o5)(B4, E6);
  }
  t.BASE.precompute(8);
  function m4(p5, b5, v6, B4 = $4) {
    const E6 = p5;
    b5 = rt3("msgHash", b5), v6 = rt3("publicKey", v6), _o3(B4);
    const { lowS: I5, prehash: S5, format: O7 } = B4;
    if ("strict" in B4) throw new Error("options.strict was renamed to lowS");
    if (O7 !== void 0 && !["compact", "der", "js"].includes(O7)) throw new Error('format must be "compact", "der" or "js"');
    const A5 = typeof E6 == "string" || nn3(E6), T5 = !A5 && !O7 && typeof E6 == "object" && E6 !== null && typeof E6.r == "bigint" && typeof E6.s == "bigint";
    if (!A5 && !T5) throw new Error("invalid signature, expected Uint8Array, hex string or Signature instance");
    let U4, C5;
    try {
      if (T5) if (O7 === void 0 || O7 === "js") U4 = new h6(E6.r, E6.s);
      else throw new Error("invalid format");
      if (A5) {
        try {
          O7 !== "compact" && (U4 = h6.fromDER(E6));
        } catch (yt5) {
          if (!(yt5 instanceof vt3.Err)) throw yt5;
        }
        !U4 && O7 !== "der" && (U4 = h6.fromCompact(E6));
      }
      C5 = t.fromHex(v6);
    } catch {
      return false;
    }
    if (!U4 || I5 && U4.hasHighS()) return false;
    S5 && (b5 = e2.hash(b5));
    const { r: H4, s: q2 } = U4, P6 = L5(b5), K5 = i4.inv(q2), et = i4.create(P6 * K5), Z3 = i4.create(H4 * K5), z4 = t.BASE.multiplyUnsafe(et).add(C5.multiplyUnsafe(Z3));
    return z4.is0() ? false : i4.create(z4.x) === H4;
  }
  return Object.freeze({ getPublicKey: y6, getSharedSecret: R4, sign: d5, verify: m4, utils: w5, Point: t, Signature: h6 });
}
function Rc(t) {
  const e2 = { a: t.a, b: t.b, p: t.Fp.ORDER, n: t.n, h: t.h, Gx: t.Gx, Gy: t.Gy }, n5 = t.Fp, r3 = Yt2(e2.n, t.nBitLength), o5 = { Fp: n5, Fn: r3, allowedPrivateKeyLengths: t.allowedPrivateKeyLengths, allowInfinityPoint: t.allowInfinityPoint, endo: t.endo, wrapPrivateKey: t.wrapPrivateKey, isTorsionFree: t.isTorsionFree, clearCofactor: t.clearCofactor, fromBytes: t.fromBytes, toBytes: t.toBytes };
  return { CURVE: e2, curveOpts: o5 };
}
function $c(t) {
  const { CURVE: e2, curveOpts: n5 } = Rc(t), r3 = { hash: t.hash, hmac: t.hmac, randomBytes: t.randomBytes, lowS: t.lowS, bits2int: t.bits2int, bits2int_modN: t.bits2int_modN };
  return { CURVE: e2, curveOpts: n5, ecdsaOpts: r3 };
}
function Cc(t, e2) {
  return Object.assign({}, e2, { ProjectivePoint: e2.Point, CURVE: t });
}
function Lc(t) {
  const { CURVE: e2, curveOpts: n5, ecdsaOpts: r3 } = $c(t), o5 = _c(e2, n5), s3 = Tc(o5, r3, n5);
  return Cc(t, s3);
}
function Rn3(t, e2) {
  const n5 = (r3) => Lc({ ...t, hash: r3 });
  return { ...n5(e2), create: n5 };
}
var $o3 = { p: BigInt("0xffffffff00000001000000000000000000000000ffffffffffffffffffffffff"), n: BigInt("0xffffffff00000000ffffffffffffffffbce6faada7179e84f3b9cac2fc632551"), h: BigInt(1), a: BigInt("0xffffffff00000001000000000000000000000000fffffffffffffffffffffffc"), b: BigInt("0x5ac635d8aa3a93e7b3ebbd55769886bc651d06b0cc53b0f63bce3c3e27d2604b"), Gx: BigInt("0x6b17d1f2e12c4247f8bce6e563a440f277037d812deb33a0f4a13945d898c296"), Gy: BigInt("0x4fe342e2fe1a7f9b8ee7eb4a7c0f9e162bce33576b315ececbb6406837bf51f5") };
var Co3 = { p: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000ffffffff"), n: BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffc7634d81f4372ddf581a0db248b0a77aecec196accc52973"), h: BigInt(1), a: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeffffffff0000000000000000fffffffc"), b: BigInt("0xb3312fa7e23ee7e4988e056be3f82d19181d9c6efe8141120314088f5013875ac656398d8a2ed19d2a85c8edd3ec2aef"), Gx: BigInt("0xaa87ca22be8b05378eb1c71ef320ad746e1d3b628ba79b9859f741e082542a385502f25dbf55296c3a545e3872760ab7"), Gy: BigInt("0x3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f") };
var Lo3 = { p: BigInt("0x1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), n: BigInt("0x01fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa51868783bf2f966b7fcc0148f709a5d03bb5c9b8899c47aebb6fb71e91386409"), h: BigInt(1), a: BigInt("0x1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc"), b: BigInt("0x0051953eb9618e1c9a1f929a21a0b68540eea2da725b99b315f3b8b489918ef109e156193951ec7e937b1652c0bd3bb1bf073573df883d2c34f1ef451fd46b503f00"), Gx: BigInt("0x00c6858e06b70404e9cd9e3ecb662395b4429c648139053fb521f828af606b4d3dbaa14b5e77efe75928fe1dc127a2ffa8de3348b3c1856a429bf97e7e31c2e5bd66"), Gy: BigInt("0x011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650") };
var jc = Yt2($o3.p);
var kc = Yt2(Co3.p);
var Pc = Yt2(Lo3.p);
var Hc = Rn3({ ...$o3, Fp: jc, lowS: false }, Ae3);
Rn3({ ...Co3, Fp: kc, lowS: false }, Yi), Rn3({ ...Lo3, Fp: Pc, lowS: false, allowedPrivateKeyLengths: [130, 131, 132] }, Wi);
var Dc = Hc;
var $n3 = "base10";
var tt = "base16";
var Qt3 = "base64pad";
var De3 = "base64url";
var te3 = "utf8";
var Cn3 = 0;
var ee = 1;
var ge3 = 2;
var Mc = 0;
var jo3 = 1;
var be3 = 12;
var Ln3 = 32;
function Vc() {
  const t = Tn3.utils.randomPrivateKey(), e2 = Tn3.getPublicKey(t);
  return { privateKey: toString2(t, tt), publicKey: toString2(e2, tt) };
}
function qc() {
  const t = Zt2(Ln3);
  return toString2(t, tt);
}
function Kc(t, e2) {
  const n5 = Tn3.getSharedSecret(fromString2(t, tt), fromString2(e2, tt)), r3 = Jf(Te3, n5, void 0, void 0, Ln3);
  return toString2(r3, tt);
}
function Fc(t) {
  const e2 = Te3(fromString2(t, tt));
  return toString2(e2, tt);
}
function zc(t) {
  const e2 = Te3(fromString2(t, te3));
  return toString2(e2, tt);
}
function jn3(t) {
  return fromString2(`${t}`, $n3);
}
function Vt2(t) {
  return Number(toString2(t, $n3));
}
function ko3(t) {
  return t.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function Po2(t) {
  const e2 = t.replace(/-/g, "+").replace(/_/g, "/"), n5 = (4 - e2.length % 4) % 4;
  return e2 + "=".repeat(n5);
}
function Gc(t) {
  const e2 = jn3(typeof t.type < "u" ? t.type : Cn3);
  if (Vt2(e2) === ee && typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
  const n5 = typeof t.senderPublicKey < "u" ? fromString2(t.senderPublicKey, tt) : void 0, r3 = typeof t.iv < "u" ? fromString2(t.iv, tt) : Zt2(be3), o5 = fromString2(t.symKey, tt), s3 = co3(o5, r3).encrypt(fromString2(t.message, te3)), i4 = kn3({ type: e2, sealed: s3, iv: r3, senderPublicKey: n5 });
  return t.encoding === De3 ? ko3(i4) : i4;
}
function Zc(t) {
  const e2 = fromString2(t.symKey, tt), { sealed: n5, iv: r3 } = Me3({ encoded: t.encoded, encoding: t.encoding }), o5 = co3(e2, r3).decrypt(n5);
  if (o5 === null) throw new Error("Failed to decrypt");
  return toString2(o5, te3);
}
function Wc(t, e2) {
  const n5 = jn3(ge3), r3 = Zt2(be3), o5 = fromString2(t, te3), s3 = kn3({ type: n5, sealed: o5, iv: r3 });
  return e2 === De3 ? ko3(s3) : s3;
}
function Yc(t, e2) {
  const { sealed: n5 } = Me3({ encoded: t, encoding: e2 });
  return toString2(n5, te3);
}
function kn3(t) {
  if (Vt2(t.type) === ge3) return toString2(concat([t.type, t.sealed]), Qt3);
  if (Vt2(t.type) === ee) {
    if (typeof t.senderPublicKey > "u") throw new Error("Missing sender public key for type 1 envelope");
    return toString2(concat([t.type, t.senderPublicKey, t.iv, t.sealed]), Qt3);
  }
  return toString2(concat([t.type, t.iv, t.sealed]), Qt3);
}
function Me3(t) {
  const e2 = (t.encoding || Qt3) === De3 ? Po2(t.encoded) : t.encoded, n5 = fromString2(e2, Qt3), r3 = n5.slice(Mc, jo3), o5 = jo3;
  if (Vt2(r3) === ee) {
    const a3 = o5 + Ln3, l8 = a3 + be3, c7 = n5.slice(o5, a3), u3 = n5.slice(a3, l8), h6 = n5.slice(l8);
    return { type: r3, sealed: h6, iv: u3, senderPublicKey: c7 };
  }
  if (Vt2(r3) === ge3) {
    const a3 = n5.slice(o5), l8 = Zt2(be3);
    return { type: r3, sealed: a3, iv: l8 };
  }
  const s3 = o5 + be3, i4 = n5.slice(o5, s3), f8 = n5.slice(s3);
  return { type: r3, sealed: f8, iv: i4 };
}
function Xc(t, e2) {
  const n5 = Me3({ encoded: t, encoding: e2?.encoding });
  return Ho3({ type: Vt2(n5.type), senderPublicKey: typeof n5.senderPublicKey < "u" ? toString2(n5.senderPublicKey, tt) : void 0, receiverPublicKey: e2?.receiverPublicKey });
}
function Ho3(t) {
  const e2 = t?.type || Cn3;
  if (e2 === ee) {
    if (typeof t?.senderPublicKey > "u") throw new Error("missing sender public key");
    if (typeof t?.receiverPublicKey > "u") throw new Error("missing receiver public key");
  }
  return { type: e2, senderPublicKey: t?.senderPublicKey, receiverPublicKey: t?.receiverPublicKey };
}
function Jc(t) {
  return t.type === ee && typeof t.senderPublicKey == "string" && typeof t.receiverPublicKey == "string";
}
function Qc(t) {
  return t.type === ge3;
}
function Do3(t) {
  const e2 = Buffer.from(t.x, "base64"), n5 = Buffer.from(t.y, "base64");
  return concat([new Uint8Array([4]), e2, n5]);
}
function ta(t, e2) {
  const [n5, r3, o5] = t.split("."), s3 = Buffer.from(Po2(o5), "base64");
  if (s3.length !== 64) throw new Error("Invalid signature length");
  const i4 = s3.slice(0, 32), f8 = s3.slice(32, 64), a3 = `${n5}.${r3}`, l8 = Te3(a3), c7 = Do3(e2);
  if (!Dc.verify(concat([i4, f8]), l8, c7)) throw new Error("Invalid signature");
  return sn2(t).payload;
}
var Mo3 = "irn";
function ea(t) {
  return t?.relay || { protocol: Mo3 };
}
function na(t) {
  const e2 = C2[t];
  if (typeof e2 > "u") throw new Error(`Relay Protocol not supported: ${t}`);
  return e2;
}
function Vo3(t, e2 = "-") {
  const n5 = {}, r3 = "relay" + e2;
  return Object.keys(t).forEach((o5) => {
    if (o5.startsWith(r3)) {
      const s3 = o5.replace(r3, ""), i4 = t[o5];
      n5[s3] = i4;
    }
  }), n5;
}
function ra(t) {
  if (!t.includes("wc:")) {
    const l8 = Qe2(t);
    l8 != null && l8.includes("wc:") && (t = l8);
  }
  t = t.includes("wc://") ? t.replace("wc://", "") : t, t = t.includes("wc:") ? t.replace("wc:", "") : t;
  const e2 = t.indexOf(":"), n5 = t.indexOf("?") !== -1 ? t.indexOf("?") : void 0, r3 = t.substring(0, e2), o5 = t.substring(e2 + 1, n5).split("@"), s3 = typeof n5 < "u" ? t.substring(n5) : "", i4 = new URLSearchParams(s3), f8 = {};
  i4.forEach((l8, c7) => {
    f8[c7] = l8;
  });
  const a3 = typeof f8.methods == "string" ? f8.methods.split(",") : void 0;
  return { protocol: r3, topic: qo3(o5[0]), version: parseInt(o5[1], 10), symKey: f8.symKey, relay: Vo3(f8), methods: a3, expiryTimestamp: f8.expiryTimestamp ? parseInt(f8.expiryTimestamp, 10) : void 0 };
}
function qo3(t) {
  return t.startsWith("//") ? t.substring(2) : t;
}
function Ko3(t, e2 = "-") {
  const n5 = "relay", r3 = {};
  return Object.keys(t).forEach((o5) => {
    const s3 = o5, i4 = n5 + e2 + s3;
    t[s3] && (r3[i4] = t[s3]);
  }), r3;
}
function oa(t) {
  const e2 = new URLSearchParams(), n5 = Ko3(t.relay);
  Object.keys(n5).sort().forEach((o5) => {
    e2.set(o5, n5[o5]);
  }), e2.set("symKey", t.symKey), t.expiryTimestamp && e2.set("expiryTimestamp", t.expiryTimestamp.toString()), t.methods && e2.set("methods", t.methods.join(","));
  const r3 = e2.toString();
  return `${t.protocol}:${t.topic}@${t.version}?${r3}`;
}
function sa(t, e2, n5) {
  return `${t}?wc_ev=${n5}&topic=${e2}`;
}
var ia = Object.defineProperty;
var fa = Object.defineProperties;
var ca = Object.getOwnPropertyDescriptors;
var Fo3 = Object.getOwnPropertySymbols;
var aa = Object.prototype.hasOwnProperty;
var ua = Object.prototype.propertyIsEnumerable;
var zo3 = (t, e2, n5) => e2 in t ? ia(t, e2, { enumerable: true, configurable: true, writable: true, value: n5 }) : t[e2] = n5;
var la = (t, e2) => {
  for (var n5 in e2 || (e2 = {})) aa.call(e2, n5) && zo3(t, n5, e2[n5]);
  if (Fo3) for (var n5 of Fo3(e2)) ua.call(e2, n5) && zo3(t, n5, e2[n5]);
  return t;
};
var da = (t, e2) => fa(t, ca(e2));
function qt3(t) {
  const e2 = [];
  return t.forEach((n5) => {
    const [r3, o5] = n5.split(":");
    e2.push(`${r3}:${o5}`);
  }), e2;
}
function Go3(t) {
  const e2 = [];
  return Object.values(t).forEach((n5) => {
    e2.push(...qt3(n5.accounts));
  }), e2;
}
function Zo3(t, e2) {
  const n5 = [];
  return Object.values(t).forEach((r3) => {
    qt3(r3.accounts).includes(e2) && n5.push(...r3.methods);
  }), n5;
}
function Wo3(t, e2) {
  const n5 = [];
  return Object.values(t).forEach((r3) => {
    qt3(r3.accounts).includes(e2) && n5.push(...r3.events);
  }), n5;
}
function Pn3(t) {
  return t.includes(":");
}
function Yo3(t) {
  return Pn3(t) ? t.split(":")[0] : t;
}
function ye3(t) {
  var e2, n5, r3;
  const o5 = {};
  if (!Ve3(t)) return o5;
  for (const [s3, i4] of Object.entries(t)) {
    const f8 = Pn3(s3) ? [s3] : i4.chains, a3 = i4.methods || [], l8 = i4.events || [], c7 = Yo3(s3);
    o5[c7] = da(la({}, o5[c7]), { chains: ct3(f8, (e2 = o5[c7]) == null ? void 0 : e2.chains), methods: ct3(a3, (n5 = o5[c7]) == null ? void 0 : n5.methods), events: ct3(l8, (r3 = o5[c7]) == null ? void 0 : r3.events) });
  }
  return o5;
}
function Xo(t) {
  const e2 = {};
  return t?.forEach((n5) => {
    var r3;
    const [o5, s3] = n5.split(":");
    e2[o5] || (e2[o5] = { accounts: [], chains: [], events: [], methods: [] }), e2[o5].accounts.push(n5), (r3 = e2[o5].chains) == null || r3.push(`${o5}:${s3}`);
  }), e2;
}
function ga(t, e2) {
  e2 = e2.map((r3) => r3.replace("did:pkh:", ""));
  const n5 = Xo(e2);
  for (const [r3, o5] of Object.entries(n5)) o5.methods ? o5.methods = ct3(o5.methods, t) : o5.methods = t, o5.events = ["chainChanged", "accountsChanged"];
  return n5;
}
function ba(t, e2) {
  var n5, r3, o5, s3, i4, f8;
  const a3 = ye3(t), l8 = ye3(e2), c7 = {}, u3 = Object.keys(a3).concat(Object.keys(l8));
  for (const h6 of u3) c7[h6] = { chains: ct3((n5 = a3[h6]) == null ? void 0 : n5.chains, (r3 = l8[h6]) == null ? void 0 : r3.chains), methods: ct3((o5 = a3[h6]) == null ? void 0 : o5.methods, (s3 = l8[h6]) == null ? void 0 : s3.methods), events: ct3((i4 = a3[h6]) == null ? void 0 : i4.events, (f8 = l8[h6]) == null ? void 0 : f8.events) };
  return c7;
}
var Jo3 = { INVALID_METHOD: { message: "Invalid method.", code: 1001 }, INVALID_EVENT: { message: "Invalid event.", code: 1002 }, INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 }, INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 }, INVALID_SESSION_SETTLE_REQUEST: { message: "Invalid session settle request.", code: 1005 }, UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 }, UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 }, UNAUTHORIZED_UPDATE_REQUEST: { message: "Unauthorized update request.", code: 3003 }, UNAUTHORIZED_EXTEND_REQUEST: { message: "Unauthorized extend request.", code: 3004 }, USER_REJECTED: { message: "User rejected.", code: 5e3 }, USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 }, USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 }, USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 }, UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 }, UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 }, UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 }, UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 }, UNSUPPORTED_NAMESPACE_KEY: { message: "Unsupported namespace key.", code: 5104 }, USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 }, SESSION_SETTLEMENT_FAILED: { message: "Session settlement failed.", code: 7e3 }, WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 } };
var Qo2 = { NOT_INITIALIZED: { message: "Not initialized.", code: 1 }, NO_MATCHING_KEY: { message: "No matching key.", code: 2 }, RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 }, RESUBSCRIBED: { message: "Resubscribed.", code: 4 }, MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 }, EXPIRED: { message: "Expired.", code: 6 }, UNKNOWN_TYPE: { message: "Unknown type.", code: 7 }, MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 }, NON_CONFORMING_NAMESPACES: { message: "Non conforming namespaces.", code: 9 } };
function Et3(t, e2) {
  const { message: n5, code: r3 } = Qo2[t];
  return { message: e2 ? `${n5} ${e2}` : n5, code: r3 };
}
function Kt2(t, e2) {
  const { message: n5, code: r3 } = Jo3[t];
  return { message: e2 ? `${n5} ${e2}` : n5, code: r3 };
}
function me3(t, e2) {
  return Array.isArray(t) ? typeof e2 < "u" && t.length ? t.every(e2) : true : false;
}
function Ve3(t) {
  return Object.getPrototypeOf(t) === Object.prototype && Object.keys(t).length;
}
function kt3(t) {
  return typeof t > "u";
}
function it3(t, e2) {
  return e2 && kt3(t) ? true : typeof t == "string" && !!t.trim().length;
}
function qe3(t, e2) {
  return e2 && kt3(t) ? true : typeof t == "number" && !isNaN(t);
}
function ya(t, e2) {
  const { requiredNamespaces: n5 } = e2, r3 = Object.keys(t.namespaces), o5 = Object.keys(n5);
  let s3 = true;
  return It3(o5, r3) ? (r3.forEach((i4) => {
    const { accounts: f8, methods: a3, events: l8 } = t.namespaces[i4], c7 = qt3(f8), u3 = n5[i4];
    (!It3(ve3(i4, u3), c7) || !It3(u3.methods, a3) || !It3(u3.events, l8)) && (s3 = false);
  }), s3) : false;
}
function we3(t) {
  return it3(t, false) && t.includes(":") ? t.split(":").length === 2 : false;
}
function ts(t) {
  if (it3(t, false) && t.includes(":")) {
    const e2 = t.split(":");
    if (e2.length === 3) {
      const n5 = e2[0] + ":" + e2[1];
      return !!e2[2] && we3(n5);
    }
  }
  return false;
}
function ma(t) {
  function e2(n5) {
    try {
      return typeof new URL(n5) < "u";
    } catch {
      return false;
    }
  }
  try {
    if (it3(t, false)) {
      if (e2(t)) return true;
      const n5 = Qe2(t);
      return e2(n5);
    }
  } catch {
  }
  return false;
}
function wa(t) {
  var e2;
  return (e2 = t?.proposer) == null ? void 0 : e2.publicKey;
}
function xa(t) {
  return t?.topic;
}
function va(t, e2) {
  let n5 = null;
  return it3(t?.publicKey, false) || (n5 = Et3("MISSING_OR_INVALID", `${e2} controller public key should be a string`)), n5;
}
function Hn3(t) {
  let e2 = true;
  return me3(t) ? t.length && (e2 = t.every((n5) => it3(n5, false))) : e2 = false, e2;
}
function es(t, e2, n5) {
  let r3 = null;
  return me3(e2) && e2.length ? e2.forEach((o5) => {
    r3 || we3(o5) || (r3 = Kt2("UNSUPPORTED_CHAINS", `${n5}, chain ${o5} should be a string and conform to "namespace:chainId" format`));
  }) : we3(t) || (r3 = Kt2("UNSUPPORTED_CHAINS", `${n5}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), r3;
}
function ns(t, e2, n5) {
  let r3 = null;
  return Object.entries(t).forEach(([o5, s3]) => {
    if (r3) return;
    const i4 = es(o5, ve3(o5, s3), `${e2} ${n5}`);
    i4 && (r3 = i4);
  }), r3;
}
function rs(t, e2) {
  let n5 = null;
  return me3(t) ? t.forEach((r3) => {
    n5 || ts(r3) || (n5 = Kt2("UNSUPPORTED_ACCOUNTS", `${e2}, account ${r3} should be a string and conform to "namespace:chainId:address" format`));
  }) : n5 = Kt2("UNSUPPORTED_ACCOUNTS", `${e2}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), n5;
}
function os(t, e2) {
  let n5 = null;
  return Object.values(t).forEach((r3) => {
    if (n5) return;
    const o5 = rs(r3?.accounts, `${e2} namespace`);
    o5 && (n5 = o5);
  }), n5;
}
function ss(t, e2) {
  let n5 = null;
  return Hn3(t?.methods) ? Hn3(t?.events) || (n5 = Kt2("UNSUPPORTED_EVENTS", `${e2}, events should be an array of strings or empty array for no events`)) : n5 = Kt2("UNSUPPORTED_METHODS", `${e2}, methods should be an array of strings or empty array for no methods`), n5;
}
function Dn(t, e2) {
  let n5 = null;
  return Object.values(t).forEach((r3) => {
    if (n5) return;
    const o5 = ss(r3, `${e2}, namespace`);
    o5 && (n5 = o5);
  }), n5;
}
function Ea(t, e2, n5) {
  let r3 = null;
  if (t && Ve3(t)) {
    const o5 = Dn(t, e2);
    o5 && (r3 = o5);
    const s3 = ns(t, e2, n5);
    s3 && (r3 = s3);
  } else r3 = Et3("MISSING_OR_INVALID", `${e2}, ${n5} should be an object with data`);
  return r3;
}
function is(t, e2) {
  let n5 = null;
  if (t && Ve3(t)) {
    const r3 = Dn(t, e2);
    r3 && (n5 = r3);
    const o5 = os(t, e2);
    o5 && (n5 = o5);
  } else n5 = Et3("MISSING_OR_INVALID", `${e2}, namespaces should be an object with data`);
  return n5;
}
function fs(t) {
  return it3(t.protocol, true);
}
function Ba(t, e2) {
  let n5 = false;
  return e2 && !t ? n5 = true : t && me3(t) && t.length && t.forEach((r3) => {
    n5 = fs(r3);
  }), n5;
}
function Ia(t) {
  return typeof t == "number";
}
function Aa(t) {
  return typeof t < "u" && typeof t !== null;
}
function Sa(t) {
  return !(!t || typeof t != "object" || !t.code || !qe3(t.code, false) || !t.message || !it3(t.message, false));
}
function Na(t) {
  return !(kt3(t) || !it3(t.method, false));
}
function Oa(t) {
  return !(kt3(t) || kt3(t.result) && kt3(t.error) || !qe3(t.id, false) || !it3(t.jsonrpc, false));
}
function Ua(t) {
  return !(kt3(t) || !it3(t.name, false));
}
function _a(t, e2) {
  return !(!we3(e2) || !Go3(t).includes(e2));
}
function Ta(t, e2, n5) {
  return it3(n5, false) ? Zo3(t, e2).includes(n5) : false;
}
function Ra(t, e2, n5) {
  return it3(n5, false) ? Wo3(t, e2).includes(n5) : false;
}
function cs(t, e2, n5) {
  let r3 = null;
  const o5 = $a(t), s3 = Ca(e2), i4 = Object.keys(o5), f8 = Object.keys(s3), a3 = as(Object.keys(t)), l8 = as(Object.keys(e2)), c7 = a3.filter((u3) => !l8.includes(u3));
  return c7.length && (r3 = Et3("NON_CONFORMING_NAMESPACES", `${n5} namespaces keys don't satisfy requiredNamespaces.
      Required: ${c7.toString()}
      Received: ${Object.keys(e2).toString()}`)), It3(i4, f8) || (r3 = Et3("NON_CONFORMING_NAMESPACES", `${n5} namespaces chains don't satisfy required namespaces.
      Required: ${i4.toString()}
      Approved: ${f8.toString()}`)), Object.keys(e2).forEach((u3) => {
    if (!u3.includes(":") || r3) return;
    const h6 = qt3(e2[u3].accounts);
    h6.includes(u3) || (r3 = Et3("NON_CONFORMING_NAMESPACES", `${n5} namespaces accounts don't satisfy namespace accounts for ${u3}
        Required: ${u3}
        Approved: ${h6.toString()}`));
  }), i4.forEach((u3) => {
    r3 || (It3(o5[u3].methods, s3[u3].methods) ? It3(o5[u3].events, s3[u3].events) || (r3 = Et3("NON_CONFORMING_NAMESPACES", `${n5} namespaces events don't satisfy namespace events for ${u3}`)) : r3 = Et3("NON_CONFORMING_NAMESPACES", `${n5} namespaces methods don't satisfy namespace methods for ${u3}`));
  }), r3;
}
function $a(t) {
  const e2 = {};
  return Object.keys(t).forEach((n5) => {
    var r3;
    n5.includes(":") ? e2[n5] = t[n5] : (r3 = t[n5].chains) == null || r3.forEach((o5) => {
      e2[o5] = { methods: t[n5].methods, events: t[n5].events };
    });
  }), e2;
}
function as(t) {
  return [...new Set(t.map((e2) => e2.includes(":") ? e2.split(":")[0] : e2))];
}
function Ca(t) {
  const e2 = {};
  return Object.keys(t).forEach((n5) => {
    if (n5.includes(":")) e2[n5] = t[n5];
    else {
      const r3 = qt3(t[n5].accounts);
      r3?.forEach((o5) => {
        e2[o5] = { accounts: t[n5].accounts.filter((s3) => s3.includes(`${o5}:`)), methods: t[n5].methods, events: t[n5].events };
      });
    }
  }), e2;
}
function La(t, e2) {
  return qe3(t, false) && t <= e2.max && t >= e2.min;
}
function ja() {
  const t = Pt3();
  return new Promise((e2) => {
    switch (t) {
      case J4.browser:
        e2(us());
        break;
      case J4.reactNative:
        e2(ls());
        break;
      case J4.node:
        e2(ds());
        break;
      default:
        e2(true);
    }
  });
}
function us() {
  return zt3() && navigator?.onLine;
}
async function ls() {
  if (Bt3() && typeof global < "u" && global != null && global.NetInfo) {
    const t = await (global == null ? void 0 : global.NetInfo.fetch());
    return t?.isConnected;
  }
  return true;
}
function ds() {
  return true;
}
function ka(t) {
  switch (Pt3()) {
    case J4.browser:
      hs(t);
      break;
    case J4.reactNative:
      ps(t);
      break;
    case J4.node:
      break;
  }
}
function hs(t) {
  !Bt3() && zt3() && (window.addEventListener("online", () => t(true)), window.addEventListener("offline", () => t(false)));
}
function ps(t) {
  Bt3() && typeof global < "u" && global != null && global.NetInfo && global?.NetInfo.addEventListener((e2) => t(e2?.isConnected));
}
function Pa() {
  var t;
  return zt3() && (0, import_window_getters.getDocument)() ? ((t = (0, import_window_getters.getDocument)()) == null ? void 0 : t.visibilityState) === "visible" : true;
}
var Mn3 = {};
var Ha = class {
  static get(e2) {
    return Mn3[e2];
  }
  static set(e2, n5) {
    Mn3[e2] = n5;
  }
  static delete(e2) {
    delete Mn3[e2];
  }
};
function gs(t) {
  const e2 = esm_default2.decode(t);
  if (e2.length < 33) throw new Error("Too short to contain a public key");
  return e2.slice(1, 33);
}
function bs({ publicKey: t, signature: e2, payload: n5 }) {
  var r3;
  const o5 = Vn3(n5.method), s3 = 128 | parseInt(((r3 = n5.version) == null ? void 0 : r3.toString()) || "4"), i4 = Ma(n5.address), f8 = n5.era === "00" ? new Uint8Array([0]) : Vn3(n5.era);
  if (f8.length !== 1 && f8.length !== 2) throw new Error("Invalid era length");
  const a3 = parseInt(n5.nonce, 16), l8 = new Uint8Array([a3 & 255, a3 >> 8 & 255]), c7 = BigInt(`0x${Da(n5.tip)}`), u3 = qa(c7), h6 = new Uint8Array([0, ...t, i4, ...e2, ...f8, ...l8, ...u3, ...o5]), g4 = Va(h6.length + 1);
  return new Uint8Array([...g4, s3, ...h6]);
}
function ys(t) {
  const e2 = Vn3(t), n5 = (0, import_blakejs.blake2b)(e2, void 0, 32);
  return "0x" + Buffer.from(n5).toString("hex");
}
function Vn3(t) {
  return new Uint8Array(t.replace(/^0x/, "").match(/.{1,2}/g).map((e2) => parseInt(e2, 16)));
}
function Da(t) {
  return t.startsWith("0x") ? t.slice(2) : t;
}
function Ma(t) {
  const e2 = esm_default2.decode(t)[0];
  return e2 === 42 ? 0 : e2 === 60 ? 2 : 1;
}
function Va(t) {
  if (t < 64) return new Uint8Array([t << 2]);
  if (t < 16384) {
    const e2 = t << 2 | 1;
    return new Uint8Array([e2 & 255, e2 >> 8 & 255]);
  } else if (t < 1 << 30) {
    const e2 = t << 2 | 2;
    return new Uint8Array([e2 & 255, e2 >> 8 & 255, e2 >> 16 & 255, e2 >> 24 & 255]);
  } else throw new Error("Compact encoding > 2^30 not supported");
}
function qa(t) {
  if (t < BigInt(1) << BigInt(6)) return new Uint8Array([Number(t << BigInt(2))]);
  if (t < BigInt(1) << BigInt(14)) {
    const e2 = t << BigInt(2) | BigInt(1);
    return new Uint8Array([Number(e2 & BigInt(255)), Number(e2 >> BigInt(8) & BigInt(255))]);
  } else if (t < BigInt(1) << BigInt(30)) {
    const e2 = t << BigInt(2) | BigInt(2);
    return new Uint8Array([Number(e2 & BigInt(255)), Number(e2 >> BigInt(8) & BigInt(255)), Number(e2 >> BigInt(16) & BigInt(255)), Number(e2 >> BigInt(24) & BigInt(255))]);
  } else throw new Error("BigInt compact encoding not supported > 2^30");
}
function Ka(t) {
  const e2 = Uint8Array.from(Buffer.from(t.signature, "hex")), n5 = gs(t.transaction.address), r3 = bs({ publicKey: n5, signature: e2, payload: t.transaction }), o5 = Buffer.from(r3).toString("hex");
  return ys(o5);
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/uint8arrays/esm/src/util/as-uint8array.js
function asUint8Array2(buf) {
  if (globalThis.Buffer != null) {
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  }
  return buf;
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/uint8arrays/esm/src/alloc.js
function allocUnsafe2(size2 = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return asUint8Array2(globalThis.Buffer.allocUnsafe(size2));
  }
  return new Uint8Array(size2);
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/uint8arrays/esm/src/util/bases.js
function createCodec2(name2, prefix, encode6, decode7) {
  return {
    name: name2,
    prefix,
    encoder: {
      name: name2,
      prefix,
      encode: encode6
    },
    decoder: { decode: decode7 }
  };
}
var string2 = createCodec2("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder3 = new TextEncoder();
  return encoder3.encode(str.substring(1));
});
var ascii2 = createCodec2("ascii", "a", (buf) => {
  let string3 = "a";
  for (let i4 = 0; i4 < buf.length; i4++) {
    string3 += String.fromCharCode(buf[i4]);
  }
  return string3;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe2(str.length);
  for (let i4 = 0; i4 < str.length; i4++) {
    buf[i4] = str.charCodeAt(i4);
  }
  return buf;
});
var BASES2 = {
  utf8: string2,
  "utf-8": string2,
  hex: bases.base16,
  latin1: ascii2,
  ascii: ascii2,
  binary: ascii2,
  ...bases
};
var bases_default2 = BASES2;

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/uint8arrays/esm/src/to-string.js
function toString3(array, encoding = "utf8") {
  const base3 = bases_default2[encoding];
  if (!base3) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
  }
  return base3.encoder.encode(array).substring(1);
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js
var import_events5 = __toESM(require_events());

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  DEFAULT_ERROR: () => DEFAULT_ERROR,
  IBaseJsonRpcProvider: () => n4,
  IEvents: () => e,
  IJsonRpcConnection: () => o2,
  IJsonRpcProvider: () => r2,
  INTERNAL_ERROR: () => INTERNAL_ERROR,
  INVALID_PARAMS: () => INVALID_PARAMS,
  INVALID_REQUEST: () => INVALID_REQUEST,
  METHOD_NOT_FOUND: () => METHOD_NOT_FOUND,
  PARSE_ERROR: () => PARSE_ERROR,
  RESERVED_ERROR_CODES: () => RESERVED_ERROR_CODES,
  SERVER_ERROR: () => SERVER_ERROR,
  SERVER_ERROR_CODE_RANGE: () => SERVER_ERROR_CODE_RANGE,
  STANDARD_ERROR_MAP: () => STANDARD_ERROR_MAP,
  formatErrorMessage: () => formatErrorMessage,
  formatJsonRpcError: () => formatJsonRpcError,
  formatJsonRpcRequest: () => formatJsonRpcRequest,
  formatJsonRpcResult: () => formatJsonRpcResult,
  getBigIntRpcId: () => getBigIntRpcId,
  getError: () => getError,
  getErrorByCode: () => getErrorByCode,
  isHttpUrl: () => isHttpUrl,
  isJsonRpcError: () => isJsonRpcError,
  isJsonRpcPayload: () => isJsonRpcPayload,
  isJsonRpcRequest: () => isJsonRpcRequest,
  isJsonRpcResponse: () => isJsonRpcResponse,
  isJsonRpcResult: () => isJsonRpcResult,
  isJsonRpcValidationInvalid: () => isJsonRpcValidationInvalid,
  isLocalhostUrl: () => isLocalhostUrl,
  isNodeJs: () => isNodeJs,
  isReservedErrorCode: () => isReservedErrorCode,
  isServerErrorCode: () => isServerErrorCode,
  isValidDefaultRoute: () => isValidDefaultRoute,
  isValidErrorCode: () => isValidErrorCode,
  isValidLeadingWildcardRoute: () => isValidLeadingWildcardRoute,
  isValidRoute: () => isValidRoute,
  isValidTrailingWildcardRoute: () => isValidTrailingWildcardRoute,
  isValidWildcardRoute: () => isValidWildcardRoute,
  isWsUrl: () => isWsUrl,
  parseConnectionError: () => parseConnectionError,
  payloadId: () => payloadId,
  validateJsonRpcError: () => validateJsonRpcError
});

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-utils/dist/esm/constants.js
var PARSE_ERROR = "PARSE_ERROR";
var INVALID_REQUEST = "INVALID_REQUEST";
var METHOD_NOT_FOUND = "METHOD_NOT_FOUND";
var INVALID_PARAMS = "INVALID_PARAMS";
var INTERNAL_ERROR = "INTERNAL_ERROR";
var SERVER_ERROR = "SERVER_ERROR";
var RESERVED_ERROR_CODES = [-32700, -32600, -32601, -32602, -32603];
var SERVER_ERROR_CODE_RANGE = [-32e3, -32099];
var STANDARD_ERROR_MAP = {
  [PARSE_ERROR]: { code: -32700, message: "Parse error" },
  [INVALID_REQUEST]: { code: -32600, message: "Invalid Request" },
  [METHOD_NOT_FOUND]: { code: -32601, message: "Method not found" },
  [INVALID_PARAMS]: { code: -32602, message: "Invalid params" },
  [INTERNAL_ERROR]: { code: -32603, message: "Internal error" },
  [SERVER_ERROR]: { code: -32e3, message: "Server error" }
};
var DEFAULT_ERROR = SERVER_ERROR;

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-utils/dist/esm/error.js
function isServerErrorCode(code2) {
  return code2 <= SERVER_ERROR_CODE_RANGE[0] && code2 >= SERVER_ERROR_CODE_RANGE[1];
}
function isReservedErrorCode(code2) {
  return RESERVED_ERROR_CODES.includes(code2);
}
function isValidErrorCode(code2) {
  return typeof code2 === "number";
}
function getError(type) {
  if (!Object.keys(STANDARD_ERROR_MAP).includes(type)) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return STANDARD_ERROR_MAP[type];
}
function getErrorByCode(code2) {
  const match = Object.values(STANDARD_ERROR_MAP).find((e2) => e2.code === code2);
  if (!match) {
    return STANDARD_ERROR_MAP[DEFAULT_ERROR];
  }
  return match;
}
function validateJsonRpcError(response) {
  if (typeof response.error.code === "undefined") {
    return { valid: false, error: "Missing code for JSON-RPC error" };
  }
  if (typeof response.error.message === "undefined") {
    return { valid: false, error: "Missing message for JSON-RPC error" };
  }
  if (!isValidErrorCode(response.error.code)) {
    return {
      valid: false,
      error: `Invalid error code type for JSON-RPC: ${response.error.code}`
    };
  }
  if (isReservedErrorCode(response.error.code)) {
    const error = getErrorByCode(response.error.code);
    if (error.message !== STANDARD_ERROR_MAP[DEFAULT_ERROR].message && response.error.message === error.message) {
      return {
        valid: false,
        error: `Invalid error code message for JSON-RPC: ${response.error.code}`
      };
    }
  }
  return { valid: true };
}
function parseConnectionError(e2, url, type) {
  return e2.message.includes("getaddrinfo ENOTFOUND") || e2.message.includes("connect ECONNREFUSED") ? new Error(`Unavailable ${type} RPC url at ${url}`) : e2;
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-utils/dist/esm/env.js
var env_exports = {};
__export(env_exports, {
  isNodeJs: () => isNodeJs
});
var import_environment = __toESM(require_cjs5());
__reExport(env_exports, __toESM(require_cjs5()));
var isNodeJs = import_environment.isNode;

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-utils/dist/esm/index.js
__reExport(esm_exports, env_exports);

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-utils/dist/esm/format.js
function payloadId(entropy = 3) {
  const date = Date.now() * Math.pow(10, entropy);
  const extra = Math.floor(Math.random() * Math.pow(10, entropy));
  return date + extra;
}
function getBigIntRpcId(entropy = 6) {
  return BigInt(payloadId(entropy));
}
function formatJsonRpcRequest(method, params, id) {
  return {
    id: id || payloadId(),
    jsonrpc: "2.0",
    method,
    params
  };
}
function formatJsonRpcResult(id, result) {
  return {
    id,
    jsonrpc: "2.0",
    result
  };
}
function formatJsonRpcError(id, error, data) {
  return {
    id,
    jsonrpc: "2.0",
    error: formatErrorMessage(error, data)
  };
}
function formatErrorMessage(error, data) {
  if (typeof error === "undefined") {
    return getError(INTERNAL_ERROR);
  }
  if (typeof error === "string") {
    error = Object.assign(Object.assign({}, getError(SERVER_ERROR)), { message: error });
  }
  if (typeof data !== "undefined") {
    error.data = data;
  }
  if (isReservedErrorCode(error.code)) {
    error = getErrorByCode(error.code);
  }
  return error;
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-utils/dist/esm/routing.js
function isValidRoute(route) {
  if (route.includes("*")) {
    return isValidWildcardRoute(route);
  }
  if (/\W/g.test(route)) {
    return false;
  }
  return true;
}
function isValidDefaultRoute(route) {
  return route === "*";
}
function isValidWildcardRoute(route) {
  if (isValidDefaultRoute(route)) {
    return true;
  }
  if (!route.includes("*")) {
    return false;
  }
  if (route.split("*").length !== 2) {
    return false;
  }
  if (route.split("*").filter((x7) => x7.trim() === "").length !== 1) {
    return false;
  }
  return true;
}
function isValidLeadingWildcardRoute(route) {
  return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[0].trim();
}
function isValidTrailingWildcardRoute(route) {
  return !isValidDefaultRoute(route) && isValidWildcardRoute(route) && !route.split("*")[1].trim();
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-types/dist/index.es.js
var e = class {
};
var o2 = class extends e {
  constructor(c7) {
    super();
  }
};
var n4 = class extends e {
  constructor() {
    super();
  }
};
var r2 = class extends n4 {
  constructor(c7) {
    super();
  }
};

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-utils/dist/esm/url.js
var HTTP_REGEX = "^https?:";
var WS_REGEX = "^wss?:";
function getUrlProtocol(url) {
  const matches = url.match(new RegExp(/^\w+:/, "gi"));
  if (!matches || !matches.length)
    return;
  return matches[0];
}
function matchRegexProtocol(url, regex) {
  const protocol = getUrlProtocol(url);
  if (typeof protocol === "undefined")
    return false;
  return new RegExp(regex).test(protocol);
}
function isHttpUrl(url) {
  return matchRegexProtocol(url, HTTP_REGEX);
}
function isWsUrl(url) {
  return matchRegexProtocol(url, WS_REGEX);
}
function isLocalhostUrl(url) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(url);
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-utils/dist/esm/validators.js
function isJsonRpcPayload(payload) {
  return typeof payload === "object" && "id" in payload && "jsonrpc" in payload && payload.jsonrpc === "2.0";
}
function isJsonRpcRequest(payload) {
  return isJsonRpcPayload(payload) && "method" in payload;
}
function isJsonRpcResponse(payload) {
  return isJsonRpcPayload(payload) && (isJsonRpcResult(payload) || isJsonRpcError(payload));
}
function isJsonRpcResult(payload) {
  return "result" in payload;
}
function isJsonRpcError(payload) {
  return "error" in payload;
}
function isJsonRpcValidationInvalid(validation) {
  return "error" in validation && validation.valid === false;
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-provider/dist/index.es.js
var o3 = class extends r2 {
  constructor(t) {
    super(t), this.events = new import_events5.EventEmitter(), this.hasRegisteredEventListeners = false, this.connection = this.setConnection(t), this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, e2) {
    this.events.on(t, e2);
  }
  once(t, e2) {
    this.events.once(t, e2);
  }
  off(t, e2) {
    this.events.off(t, e2);
  }
  removeListener(t, e2) {
    this.events.removeListener(t, e2);
  }
  async request(t, e2) {
    return this.requestStrict(formatJsonRpcRequest(t.method, t.params || [], t.id || getBigIntRpcId().toString()), e2);
  }
  async requestStrict(t, e2) {
    return new Promise(async (i4, s3) => {
      if (!this.connection.connected) try {
        await this.open();
      } catch (n5) {
        s3(n5);
      }
      this.events.on(`${t.id}`, (n5) => {
        isJsonRpcError(n5) ? s3(n5.error) : i4(n5.result);
      });
      try {
        await this.connection.send(t, e2);
      } catch (n5) {
        s3(n5);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t), isJsonRpcResponse(t) ? this.events.emit(`${t.id}`, t) : this.events.emit("message", { type: t.method, data: t.params });
  }
  onClose(t) {
    t && t.code === 3e3 && this.events.emit("error", new Error(`WebSocket connection closed abnormally with code: ${t.code} ${t.reason ? `(${t.reason})` : ""}`)), this.events.emit("disconnect");
  }
  async open(t = this.connection) {
    this.connection === t && this.connection.connected || (this.connection.connected && this.close(), typeof t == "string" && (await this.connection.open(t), t = this.connection), this.connection = this.setConnection(t), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners || (this.connection.on("payload", (t) => this.onPayload(t)), this.connection.on("close", (t) => this.onClose(t)), this.connection.on("error", (t) => this.events.emit("error", t)), this.connection.on("register_error", (t) => this.onClose()), this.hasRegisteredEventListeners = true);
  }
};

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/jsonrpc-ws-connection/dist/index.es.js
var import_events6 = __toESM(require_events());
var v3 = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require_browser2();
var w2 = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u";
var d3 = (r3) => r3.split("?")[0];
var h4 = 10;
var b3 = v3();
var f3 = class {
  constructor(e2) {
    if (this.url = e2, this.events = new import_events6.EventEmitter(), this.registering = false, !isWsUrl(e2)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
    this.url = e2;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  async open(e2 = this.url) {
    await this.register(e2);
  }
  async close() {
    return new Promise((e2, t) => {
      if (typeof this.socket > "u") {
        t(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (n5) => {
        this.onClose(n5), e2();
      }, this.socket.close();
    });
  }
  async send(e2) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(safeJsonStringify(e2));
    } catch (t) {
      this.onError(e2.id, t);
    }
  }
  register(e2 = this.url) {
    if (!isWsUrl(e2)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${e2}`);
    if (this.registering) {
      const t = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= t || this.events.listenerCount("open") >= t) && this.events.setMaxListeners(t + 1), new Promise((n5, s3) => {
        this.events.once("register_error", (o5) => {
          this.resetMaxListeners(), s3(o5);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u") return s3(new Error("WebSocket connection is missing or invalid"));
          n5(this.socket);
        });
      });
    }
    return this.url = e2, this.registering = true, new Promise((t, n5) => {
      const s3 = (0, esm_exports.isReactNative)() ? void 0 : { rejectUnauthorized: !isLocalhostUrl(e2) }, o5 = new b3(e2, [], s3);
      w2() ? o5.onerror = (i4) => {
        const a3 = i4;
        n5(this.emitError(a3.error));
      } : o5.on("error", (i4) => {
        n5(this.emitError(i4));
      }), o5.onopen = () => {
        this.onOpen(o5), t(o5);
      };
    });
  }
  onOpen(e2) {
    e2.onmessage = (t) => this.onPayload(t), e2.onclose = (t) => this.onClose(t), this.socket = e2, this.registering = false, this.events.emit("open");
  }
  onClose(e2) {
    this.socket = void 0, this.registering = false, this.events.emit("close", e2);
  }
  onPayload(e2) {
    if (typeof e2.data > "u") return;
    const t = typeof e2.data == "string" ? safeJsonParse(e2.data) : e2.data;
    this.events.emit("payload", t);
  }
  onError(e2, t) {
    const n5 = this.parseError(t), s3 = n5.message || n5.toString(), o5 = formatJsonRpcError(e2, s3);
    this.events.emit("payload", o5);
  }
  parseError(e2, t = this.url) {
    return parseConnectionError(e2, d3(t), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > h4 && this.events.setMaxListeners(h4);
  }
  emitError(e2) {
    const t = this.parseError(new Error(e2?.message || `WebSocket connection failed for host: ${d3(this.url)}`));
    return this.events.emit("register_error", t), t;
  }
};

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/node_modules/@walletconnect/core/dist/index.es.js
var import_window_getters2 = __toESM(require_cjs6());
var ze3 = "wc";
var Le4 = 2;
var he4 = "core";
var B2 = `${ze3}@2:${he4}:`;
var Et4 = { name: he4, logger: "error" };
var It4 = { database: ":memory:" };
var Tt4 = "crypto";
var ke4 = "client_ed25519_seed";
var Ct2 = import_time5.ONE_DAY;
var Pt4 = "keychain";
var St4 = "0.3";
var Ot4 = "messages";
var Rt4 = "0.3";
var je4 = import_time5.SIX_HOURS;
var At2 = "publisher";
var xt4 = "irn";
var Nt4 = "error";
var Ue4 = "wss://relay.walletconnect.org";
var $t4 = "relayer";
var C3 = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" };
var zt4 = "_subscription";
var L2 = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" };
var Lt4 = 0.1;
var _e4 = "2.21.5";
var Q4 = { link_mode: "link_mode", relay: "relay" };
var le4 = { inbound: "inbound", outbound: "outbound" };
var kt4 = "0.3";
var jt3 = "WALLETCONNECT_CLIENT_ID";
var Fe2 = "WALLETCONNECT_LINK_MODE_APPS";
var $ = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" };
var Ut4 = "subscription";
var Ft3 = "0.3";
var Js = import_time5.FIVE_SECONDS * 1e3;
var Mt4 = "pairing";
var Kt3 = "0.3";
var se2 = { wc_pairingDelete: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1e3 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 1001 } }, wc_pairingPing: { req: { ttl: import_time5.THIRTY_SECONDS, prompt: false, tag: 1002 }, res: { ttl: import_time5.THIRTY_SECONDS, prompt: false, tag: 1003 } }, unregistered_method: { req: { ttl: import_time5.ONE_DAY, prompt: false, tag: 0 }, res: { ttl: import_time5.ONE_DAY, prompt: false, tag: 0 } } };
var re = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" };
var F2 = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" };
var Bt4 = "history";
var Vt3 = "0.3";
var qt4 = "expirer";
var M4 = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" };
var Gt4 = "0.3";
var Wt3 = "verify-api";
var Qs = "https://verify.walletconnect.com";
var Ht4 = "https://verify.walletconnect.org";
var ue2 = Ht4;
var Yt3 = `${ue2}/v3`;
var Jt3 = [Qs, Ht4];
var Xt4 = "echo";
var Zt3 = "https://echo.walletconnect.com";
var G4 = { pairing_started: "pairing_started", pairing_uri_validation_success: "pairing_uri_validation_success", pairing_uri_not_expired: "pairing_uri_not_expired", store_new_pairing: "store_new_pairing", subscribing_pairing_topic: "subscribing_pairing_topic", subscribe_pairing_topic_success: "subscribe_pairing_topic_success", existing_pairing: "existing_pairing", pairing_not_expired: "pairing_not_expired", emit_inactive_pairing: "emit_inactive_pairing", emit_session_proposal: "emit_session_proposal", subscribing_to_pairing_topic: "subscribing_to_pairing_topic" };
var Y2 = { no_wss_connection: "no_wss_connection", no_internet_connection: "no_internet_connection", malformed_pairing_uri: "malformed_pairing_uri", active_pairing_already_exists: "active_pairing_already_exists", subscribe_pairing_topic_failure: "subscribe_pairing_topic_failure", pairing_expired: "pairing_expired", proposal_expired: "proposal_expired", proposal_listener_not_found: "proposal_listener_not_found" };
var tr4 = { session_approve_started: "session_approve_started", proposal_not_expired: "proposal_not_expired", session_namespaces_validation_success: "session_namespaces_validation_success", create_session_topic: "create_session_topic", subscribing_session_topic: "subscribing_session_topic", subscribe_session_topic_success: "subscribe_session_topic_success", publishing_session_approve: "publishing_session_approve", session_approve_publish_success: "session_approve_publish_success", store_session: "store_session", publishing_session_settle: "publishing_session_settle", session_settle_publish_success: "session_settle_publish_success" };
var ir4 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", proposal_expired: "proposal_expired", subscribe_session_topic_failure: "subscribe_session_topic_failure", session_approve_publish_failure: "session_approve_publish_failure", session_settle_publish_failure: "session_settle_publish_failure", session_approve_namespace_validation_failure: "session_approve_namespace_validation_failure", proposal_not_found: "proposal_not_found" };
var sr4 = { authenticated_session_approve_started: "authenticated_session_approve_started", authenticated_session_not_expired: "authenticated_session_not_expired", chains_caip2_compliant: "chains_caip2_compliant", chains_evm_compliant: "chains_evm_compliant", create_authenticated_session_topic: "create_authenticated_session_topic", cacaos_verified: "cacaos_verified", store_authenticated_session: "store_authenticated_session", subscribing_authenticated_session_topic: "subscribing_authenticated_session_topic", subscribe_authenticated_session_topic_success: "subscribe_authenticated_session_topic_success", publishing_authenticated_session_approve: "publishing_authenticated_session_approve", authenticated_session_approve_publish_success: "authenticated_session_approve_publish_success" };
var rr4 = { no_internet_connection: "no_internet_connection", no_wss_connection: "no_wss_connection", missing_session_authenticate_request: "missing_session_authenticate_request", session_authenticate_request_expired: "session_authenticate_request_expired", chains_caip2_compliant_failure: "chains_caip2_compliant_failure", chains_evm_compliant_failure: "chains_evm_compliant_failure", invalid_cacao: "invalid_cacao", subscribe_authenticated_session_topic_failure: "subscribe_authenticated_session_topic_failure", authenticated_session_approve_publish_failure: "authenticated_session_approve_publish_failure", authenticated_session_pending_request_not_found: "authenticated_session_pending_request_not_found" };
var Qt4 = 0.1;
var ei2 = "event-client";
var ti = 86400;
var ii2 = "https://pulse.walletconnect.org/batch";
function nr3(r3, e2) {
  if (r3.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i4 = 0; i4 < t.length; i4++) t[i4] = 255;
  for (var s3 = 0; s3 < r3.length; s3++) {
    var n5 = r3.charAt(s3), o5 = n5.charCodeAt(0);
    if (t[o5] !== 255) throw new TypeError(n5 + " is ambiguous");
    t[o5] = s3;
  }
  var a3 = r3.length, c7 = r3.charAt(0), h6 = Math.log(a3) / Math.log(256), l8 = Math.log(256) / Math.log(a3);
  function d5(u3) {
    if (u3 instanceof Uint8Array || (ArrayBuffer.isView(u3) ? u3 = new Uint8Array(u3.buffer, u3.byteOffset, u3.byteLength) : Array.isArray(u3) && (u3 = Uint8Array.from(u3))), !(u3 instanceof Uint8Array)) throw new TypeError("Expected Uint8Array");
    if (u3.length === 0) return "";
    for (var b5 = 0, x7 = 0, I5 = 0, D4 = u3.length; I5 !== D4 && u3[I5] === 0; ) I5++, b5++;
    for (var j6 = (D4 - I5) * l8 + 1 >>> 0, T5 = new Uint8Array(j6); I5 !== D4; ) {
      for (var q2 = u3[I5], J5 = 0, K5 = j6 - 1; (q2 !== 0 || J5 < x7) && K5 !== -1; K5--, J5++) q2 += 256 * T5[K5] >>> 0, T5[K5] = q2 % a3 >>> 0, q2 = q2 / a3 >>> 0;
      if (q2 !== 0) throw new Error("Non-zero carry");
      x7 = J5, I5++;
    }
    for (var H4 = j6 - x7; H4 !== j6 && T5[H4] === 0; ) H4++;
    for (var me6 = c7.repeat(b5); H4 < j6; ++H4) me6 += r3.charAt(T5[H4]);
    return me6;
  }
  function g4(u3) {
    if (typeof u3 != "string") throw new TypeError("Expected String");
    if (u3.length === 0) return new Uint8Array();
    var b5 = 0;
    if (u3[b5] !== " ") {
      for (var x7 = 0, I5 = 0; u3[b5] === c7; ) x7++, b5++;
      for (var D4 = (u3.length - b5) * h6 + 1 >>> 0, j6 = new Uint8Array(D4); u3[b5]; ) {
        var T5 = t[u3.charCodeAt(b5)];
        if (T5 === 255) return;
        for (var q2 = 0, J5 = D4 - 1; (T5 !== 0 || q2 < I5) && J5 !== -1; J5--, q2++) T5 += a3 * j6[J5] >>> 0, j6[J5] = T5 % 256 >>> 0, T5 = T5 / 256 >>> 0;
        if (T5 !== 0) throw new Error("Non-zero carry");
        I5 = q2, b5++;
      }
      if (u3[b5] !== " ") {
        for (var K5 = D4 - I5; K5 !== D4 && j6[K5] === 0; ) K5++;
        for (var H4 = new Uint8Array(x7 + (D4 - K5)), me6 = x7; K5 !== D4; ) H4[me6++] = j6[K5++];
        return H4;
      }
    }
  }
  function _3(u3) {
    var b5 = g4(u3);
    if (b5) return b5;
    throw new Error(`Non-${e2} character`);
  }
  return { encode: d5, decodeUnsafe: g4, decode: _3 };
}
var or5 = nr3;
var ar3 = or5;
var si2 = (r3) => {
  if (r3 instanceof Uint8Array && r3.constructor.name === "Uint8Array") return r3;
  if (r3 instanceof ArrayBuffer) return new Uint8Array(r3);
  if (ArrayBuffer.isView(r3)) return new Uint8Array(r3.buffer, r3.byteOffset, r3.byteLength);
  throw new Error("Unknown type, must be binary type");
};
var cr4 = (r3) => new TextEncoder().encode(r3);
var hr4 = (r3) => new TextDecoder().decode(r3);
var lr3 = class {
  constructor(e2, t, i4) {
    this.name = e2, this.prefix = t, this.baseEncode = i4;
  }
  encode(e2) {
    if (e2 instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e2)}`;
    throw Error("Unknown type, must be binary type");
  }
};
var ur3 = class {
  constructor(e2, t, i4) {
    if (this.name = e2, this.prefix = t, t.codePointAt(0) === void 0) throw new Error("Invalid prefix character");
    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = i4;
  }
  decode(e2) {
    if (typeof e2 == "string") {
      if (e2.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e2)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(e2.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(e2) {
    return ri2(this, e2);
  }
};
var dr4 = class {
  constructor(e2) {
    this.decoders = e2;
  }
  or(e2) {
    return ri2(this, e2);
  }
  decode(e2) {
    const t = e2[0], i4 = this.decoders[t];
    if (i4) return i4.decode(e2);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e2)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
};
var ri2 = (r3, e2) => new dr4({ ...r3.decoders || { [r3.prefix]: r3 }, ...e2.decoders || { [e2.prefix]: e2 } });
var gr4 = class {
  constructor(e2, t, i4, s3) {
    this.name = e2, this.prefix = t, this.baseEncode = i4, this.baseDecode = s3, this.encoder = new lr3(e2, t, i4), this.decoder = new ur3(e2, t, s3);
  }
  encode(e2) {
    return this.encoder.encode(e2);
  }
  decode(e2) {
    return this.decoder.decode(e2);
  }
};
var Ee3 = ({ name: r3, prefix: e2, encode: t, decode: i4 }) => new gr4(r3, e2, t, i4);
var de4 = ({ prefix: r3, name: e2, alphabet: t }) => {
  const { encode: i4, decode: s3 } = ar3(t, e2);
  return Ee3({ prefix: r3, name: e2, encode: i4, decode: (n5) => si2(s3(n5)) });
};
var pr4 = (r3, e2, t, i4) => {
  const s3 = {};
  for (let l8 = 0; l8 < e2.length; ++l8) s3[e2[l8]] = l8;
  let n5 = r3.length;
  for (; r3[n5 - 1] === "="; ) --n5;
  const o5 = new Uint8Array(n5 * t / 8 | 0);
  let a3 = 0, c7 = 0, h6 = 0;
  for (let l8 = 0; l8 < n5; ++l8) {
    const d5 = s3[r3[l8]];
    if (d5 === void 0) throw new SyntaxError(`Non-${i4} character`);
    c7 = c7 << t | d5, a3 += t, a3 >= 8 && (a3 -= 8, o5[h6++] = 255 & c7 >> a3);
  }
  if (a3 >= t || 255 & c7 << 8 - a3) throw new SyntaxError("Unexpected end of data");
  return o5;
};
var yr4 = (r3, e2, t) => {
  const i4 = e2[e2.length - 1] === "=", s3 = (1 << t) - 1;
  let n5 = "", o5 = 0, a3 = 0;
  for (let c7 = 0; c7 < r3.length; ++c7) for (a3 = a3 << 8 | r3[c7], o5 += 8; o5 > t; ) o5 -= t, n5 += e2[s3 & a3 >> o5];
  if (o5 && (n5 += e2[s3 & a3 << t - o5]), i4) for (; n5.length * t & 7; ) n5 += "=";
  return n5;
};
var P4 = ({ name: r3, prefix: e2, bitsPerChar: t, alphabet: i4 }) => Ee3({ prefix: e2, name: r3, encode(s3) {
  return yr4(s3, i4, t);
}, decode(s3) {
  return pr4(s3, i4, t, r3);
} });
var br4 = Ee3({ prefix: "\0", name: "identity", encode: (r3) => hr4(r3), decode: (r3) => cr4(r3) });
var mr4 = Object.freeze({ __proto__: null, identity: br4 });
var fr4 = P4({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var Dr4 = Object.freeze({ __proto__: null, base2: fr4 });
var vr4 = P4({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var wr4 = Object.freeze({ __proto__: null, base8: vr4 });
var _r4 = de4({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Er4 = Object.freeze({ __proto__: null, base10: _r4 });
var Ir4 = P4({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 });
var Tr4 = P4({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Cr4 = Object.freeze({ __proto__: null, base16: Ir4, base16upper: Tr4 });
var Pr4 = P4({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 });
var Sr4 = P4({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 });
var Or4 = P4({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 });
var Rr4 = P4({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 });
var Ar4 = P4({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 });
var xr4 = P4({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 });
var Nr4 = P4({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 });
var $r4 = P4({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 });
var zr3 = P4({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var Lr4 = Object.freeze({ __proto__: null, base32: Pr4, base32upper: Sr4, base32pad: Or4, base32padupper: Rr4, base32hex: Ar4, base32hexupper: xr4, base32hexpad: Nr4, base32hexpadupper: $r4, base32z: zr3 });
var kr4 = de4({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" });
var jr4 = de4({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var Ur4 = Object.freeze({ __proto__: null, base36: kr4, base36upper: jr4 });
var Fr3 = de4({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" });
var Mr4 = de4({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var Kr3 = Object.freeze({ __proto__: null, base58btc: Fr3, base58flickr: Mr4 });
var Br4 = P4({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 });
var Vr4 = P4({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 });
var qr4 = P4({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 });
var Gr4 = P4({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var Wr4 = Object.freeze({ __proto__: null, base64: Br4, base64pad: Vr4, base64url: qr4, base64urlpad: Gr4 });
var ni2 = Array.from("\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}");
var Hr4 = ni2.reduce((r3, e2, t) => (r3[t] = e2, r3), []);
var Yr3 = ni2.reduce((r3, e2, t) => (r3[e2.codePointAt(0)] = t, r3), []);
function Jr3(r3) {
  return r3.reduce((e2, t) => (e2 += Hr4[t], e2), "");
}
function Xr4(r3) {
  const e2 = [];
  for (const t of r3) {
    const i4 = Yr3[t.codePointAt(0)];
    if (i4 === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e2.push(i4);
  }
  return new Uint8Array(e2);
}
var Zr4 = Ee3({ prefix: "\u{1F680}", name: "base256emoji", encode: Jr3, decode: Xr4 });
var Qr4 = Object.freeze({ __proto__: null, base256emoji: Zr4 });
var en3 = ai2;
var oi2 = 128;
var tn2 = 127;
var sn4 = ~tn2;
var rn3 = Math.pow(2, 31);
function ai2(r3, e2, t) {
  e2 = e2 || [], t = t || 0;
  for (var i4 = t; r3 >= rn3; ) e2[t++] = r3 & 255 | oi2, r3 /= 128;
  for (; r3 & sn4; ) e2[t++] = r3 & 255 | oi2, r3 >>>= 7;
  return e2[t] = r3 | 0, ai2.bytes = t - i4 + 1, e2;
}
var nn4 = Me4;
var on3 = 128;
var ci2 = 127;
function Me4(r3, i4) {
  var t = 0, i4 = i4 || 0, s3 = 0, n5 = i4, o5, a3 = r3.length;
  do {
    if (n5 >= a3) throw Me4.bytes = 0, new RangeError("Could not decode varint");
    o5 = r3[n5++], t += s3 < 28 ? (o5 & ci2) << s3 : (o5 & ci2) * Math.pow(2, s3), s3 += 7;
  } while (o5 >= on3);
  return Me4.bytes = n5 - i4, t;
}
var an2 = Math.pow(2, 7);
var cn2 = Math.pow(2, 14);
var hn2 = Math.pow(2, 21);
var ln2 = Math.pow(2, 28);
var un2 = Math.pow(2, 35);
var dn2 = Math.pow(2, 42);
var gn4 = Math.pow(2, 49);
var pn2 = Math.pow(2, 56);
var yn4 = Math.pow(2, 63);
var bn4 = function(r3) {
  return r3 < an2 ? 1 : r3 < cn2 ? 2 : r3 < hn2 ? 3 : r3 < ln2 ? 4 : r3 < un2 ? 5 : r3 < dn2 ? 6 : r3 < gn4 ? 7 : r3 < pn2 ? 8 : r3 < yn4 ? 9 : 10;
};
var mn4 = { encode: en3, decode: nn4, encodingLength: bn4 };
var hi2 = mn4;
var li2 = (r3, e2, t = 0) => (hi2.encode(r3, e2, t), e2);
var ui2 = (r3) => hi2.encodingLength(r3);
var Ke4 = (r3, e2) => {
  const t = e2.byteLength, i4 = ui2(r3), s3 = i4 + ui2(t), n5 = new Uint8Array(s3 + t);
  return li2(r3, n5, 0), li2(t, n5, i4), n5.set(e2, s3), new fn2(r3, t, e2, n5);
};
var fn2 = class {
  constructor(e2, t, i4, s3) {
    this.code = e2, this.size = t, this.digest = i4, this.bytes = s3;
  }
};
var di2 = ({ name: r3, code: e2, encode: t }) => new Dn2(r3, e2, t);
var Dn2 = class {
  constructor(e2, t, i4) {
    this.name = e2, this.code = t, this.encode = i4;
  }
  digest(e2) {
    if (e2 instanceof Uint8Array) {
      const t = this.encode(e2);
      return t instanceof Uint8Array ? Ke4(this.code, t) : t.then((i4) => Ke4(this.code, i4));
    } else throw Error("Unknown type, must be binary type");
  }
};
var gi2 = (r3) => async (e2) => new Uint8Array(await crypto.subtle.digest(r3, e2));
var vn4 = di2({ name: "sha2-256", code: 18, encode: gi2("SHA-256") });
var wn2 = di2({ name: "sha2-512", code: 19, encode: gi2("SHA-512") });
var _n4 = Object.freeze({ __proto__: null, sha256: vn4, sha512: wn2 });
var pi2 = 0;
var En4 = "identity";
var yi2 = si2;
var In4 = (r3) => Ke4(pi2, yi2(r3));
var Tn4 = { code: pi2, name: En4, encode: yi2, digest: In4 };
var Cn4 = Object.freeze({ __proto__: null, identity: Tn4 });
new TextEncoder(), new TextDecoder();
var bi2 = { ...mr4, ...Dr4, ...wr4, ...Er4, ...Cr4, ...Lr4, ...Ur4, ...Kr3, ...Wr4, ...Qr4 };
({ ..._n4, ...Cn4 });
function mi2(r3) {
  return globalThis.Buffer != null ? new Uint8Array(r3.buffer, r3.byteOffset, r3.byteLength) : r3;
}
function Pn4(r3 = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? mi2(globalThis.Buffer.allocUnsafe(r3)) : new Uint8Array(r3);
}
function fi2(r3, e2, t, i4) {
  return { name: r3, prefix: e2, encoder: { name: r3, prefix: e2, encode: t }, decoder: { decode: i4 } };
}
var Di2 = fi2("utf8", "u", (r3) => "u" + new TextDecoder("utf8").decode(r3), (r3) => new TextEncoder().encode(r3.substring(1)));
var Be4 = fi2("ascii", "a", (r3) => {
  let e2 = "a";
  for (let t = 0; t < r3.length; t++) e2 += String.fromCharCode(r3[t]);
  return e2;
}, (r3) => {
  r3 = r3.substring(1);
  const e2 = Pn4(r3.length);
  for (let t = 0; t < r3.length; t++) e2[t] = r3.charCodeAt(t);
  return e2;
});
var Sn4 = { utf8: Di2, "utf-8": Di2, hex: bi2.base16, latin1: Be4, ascii: Be4, binary: Be4, ...bi2 };
function On4(r3, e2 = "utf8") {
  const t = Sn4[e2];
  if (!t) throw new Error(`Unsupported encoding "${e2}"`);
  return (e2 === "utf8" || e2 === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? mi2(globalThis.Buffer.from(r3, "utf-8")) : t.decoder.decode(`${t.prefix}${r3}`);
}
var Rn4 = Object.defineProperty;
var An4 = (r3, e2, t) => e2 in r3 ? Rn4(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var W4 = (r3, e2, t) => An4(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var vi2 = class {
  constructor(e2, t) {
    this.core = e2, this.logger = t, W4(this, "keychain", /* @__PURE__ */ new Map()), W4(this, "name", Pt4), W4(this, "version", St4), W4(this, "initialized", false), W4(this, "storagePrefix", B2), W4(this, "init", async () => {
      if (!this.initialized) {
        const i4 = await this.getKeyChain();
        typeof i4 < "u" && (this.keychain = i4), this.initialized = true;
      }
    }), W4(this, "has", (i4) => (this.isInitialized(), this.keychain.has(i4))), W4(this, "set", async (i4, s3) => {
      this.isInitialized(), this.keychain.set(i4, s3), await this.persist();
    }), W4(this, "get", (i4) => {
      this.isInitialized();
      const s3 = this.keychain.get(i4);
      if (typeof s3 > "u") {
        const { message: n5 } = Et3("NO_MATCHING_KEY", `${this.name}: ${i4}`);
        throw new Error(n5);
      }
      return s3;
    }), W4(this, "del", async (i4) => {
      this.isInitialized(), this.keychain.delete(i4), await this.persist();
    }), this.core = e2, this.logger = E2(t, this.name);
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(e2) {
    await this.core.storage.setItem(this.storageKey, Ys(e2));
  }
  async getKeyChain() {
    const e2 = await this.core.storage.getItem(this.storageKey);
    return typeof e2 < "u" ? Xs(e2) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Et3("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var xn4 = Object.defineProperty;
var Nn4 = (r3, e2, t) => e2 in r3 ? xn4(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var S3 = (r3, e2, t) => Nn4(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var wi2 = class {
  constructor(e2, t, i4) {
    this.core = e2, this.logger = t, S3(this, "name", Tt4), S3(this, "keychain"), S3(this, "randomSessionIdentifier", qc()), S3(this, "initialized", false), S3(this, "init", async () => {
      this.initialized || (await this.keychain.init(), this.initialized = true);
    }), S3(this, "hasKeys", (s3) => (this.isInitialized(), this.keychain.has(s3))), S3(this, "getClientId", async () => {
      this.isInitialized();
      const s3 = await this.getClientSeed(), n5 = Po(s3);
      return Qe(n5.publicKey);
    }), S3(this, "generateKeyPair", () => {
      this.isInitialized();
      const s3 = Vc();
      return this.setPrivateKey(s3.publicKey, s3.privateKey);
    }), S3(this, "signJWT", async (s3) => {
      this.isInitialized();
      const n5 = await this.getClientSeed(), o5 = Po(n5), a3 = this.randomSessionIdentifier, c7 = Ct2;
      return await Qo(a3, s3, c7, o5);
    }), S3(this, "generateSharedKey", (s3, n5, o5) => {
      this.isInitialized();
      const a3 = this.getPrivateKey(s3), c7 = Kc(a3, n5);
      return this.setSymKey(c7, o5);
    }), S3(this, "setSymKey", async (s3, n5) => {
      this.isInitialized();
      const o5 = n5 || Fc(s3);
      return await this.keychain.set(o5, s3), o5;
    }), S3(this, "deleteKeyPair", async (s3) => {
      this.isInitialized(), await this.keychain.del(s3);
    }), S3(this, "deleteSymKey", async (s3) => {
      this.isInitialized(), await this.keychain.del(s3);
    }), S3(this, "encode", async (s3, n5, o5) => {
      this.isInitialized();
      const a3 = Ho3(o5), c7 = safeJsonStringify(n5);
      if (Qc(a3)) return Wc(c7, o5?.encoding);
      if (Jc(a3)) {
        const g4 = a3.senderPublicKey, _3 = a3.receiverPublicKey;
        s3 = await this.generateSharedKey(g4, _3);
      }
      const h6 = this.getSymKey(s3), { type: l8, senderPublicKey: d5 } = a3;
      return Gc({ type: l8, symKey: h6, message: c7, senderPublicKey: d5, encoding: o5?.encoding });
    }), S3(this, "decode", async (s3, n5, o5) => {
      this.isInitialized();
      const a3 = Xc(n5, o5);
      if (Qc(a3)) {
        const c7 = Yc(n5, o5?.encoding);
        return safeJsonParse(c7);
      }
      if (Jc(a3)) {
        const c7 = a3.receiverPublicKey, h6 = a3.senderPublicKey;
        s3 = await this.generateSharedKey(c7, h6);
      }
      try {
        const c7 = this.getSymKey(s3), h6 = Zc({ symKey: c7, encoded: n5, encoding: o5?.encoding });
        return safeJsonParse(h6);
      } catch (c7) {
        this.logger.error(`Failed to decode message from topic: '${s3}', clientId: '${await this.getClientId()}'`), this.logger.error(c7);
      }
    }), S3(this, "getPayloadType", (s3, n5 = Qt3) => {
      const o5 = Me3({ encoded: s3, encoding: n5 });
      return Vt2(o5.type);
    }), S3(this, "getPayloadSenderPublicKey", (s3, n5 = Qt3) => {
      const o5 = Me3({ encoded: s3, encoding: n5 });
      return o5.senderPublicKey ? toString3(o5.senderPublicKey, tt) : void 0;
    }), this.core = e2, this.logger = E2(t, this.name), this.keychain = i4 || new vi2(this.core, this.logger);
  }
  get context() {
    return y2(this.logger);
  }
  async setPrivateKey(e2, t) {
    return await this.keychain.set(e2, t), e2;
  }
  getPrivateKey(e2) {
    return this.keychain.get(e2);
  }
  async getClientSeed() {
    let e2 = "";
    try {
      e2 = this.keychain.get(ke4);
    } catch {
      e2 = qc(), await this.keychain.set(ke4, e2);
    }
    return On4(e2, "base16");
  }
  getSymKey(e2) {
    return this.keychain.get(e2);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Et3("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var $n4 = Object.defineProperty;
var zn4 = Object.defineProperties;
var Ln4 = Object.getOwnPropertyDescriptors;
var _i2 = Object.getOwnPropertySymbols;
var kn4 = Object.prototype.hasOwnProperty;
var jn4 = Object.prototype.propertyIsEnumerable;
var Ve4 = (r3, e2, t) => e2 in r3 ? $n4(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var Un4 = (r3, e2) => {
  for (var t in e2 || (e2 = {})) kn4.call(e2, t) && Ve4(r3, t, e2[t]);
  if (_i2) for (var t of _i2(e2)) jn4.call(e2, t) && Ve4(r3, t, e2[t]);
  return r3;
};
var Fn4 = (r3, e2) => zn4(r3, Ln4(e2));
var k6 = (r3, e2, t) => Ve4(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Ei2 = class extends y3 {
  constructor(e2, t) {
    super(e2, t), this.logger = e2, this.core = t, k6(this, "messages", /* @__PURE__ */ new Map()), k6(this, "messagesWithoutClientAck", /* @__PURE__ */ new Map()), k6(this, "name", Ot4), k6(this, "version", Rt4), k6(this, "initialized", false), k6(this, "storagePrefix", B2), k6(this, "init", async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const i4 = await this.getRelayerMessages();
          typeof i4 < "u" && (this.messages = i4);
          const s3 = await this.getRelayerMessagesWithoutClientAck();
          typeof s3 < "u" && (this.messagesWithoutClientAck = s3), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (i4) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i4);
        } finally {
          this.initialized = true;
        }
      }
    }), k6(this, "set", async (i4, s3, n5) => {
      this.isInitialized();
      const o5 = zc(s3);
      let a3 = this.messages.get(i4);
      if (typeof a3 > "u" && (a3 = {}), typeof a3[o5] < "u") return o5;
      if (a3[o5] = s3, this.messages.set(i4, a3), n5 === le4.inbound) {
        const c7 = this.messagesWithoutClientAck.get(i4) || {};
        this.messagesWithoutClientAck.set(i4, Fn4(Un4({}, c7), { [o5]: s3 }));
      }
      return await this.persist(), o5;
    }), k6(this, "get", (i4) => {
      this.isInitialized();
      let s3 = this.messages.get(i4);
      return typeof s3 > "u" && (s3 = {}), s3;
    }), k6(this, "getWithoutAck", (i4) => {
      this.isInitialized();
      const s3 = {};
      for (const n5 of i4) {
        const o5 = this.messagesWithoutClientAck.get(n5) || {};
        s3[n5] = Object.values(o5);
      }
      return s3;
    }), k6(this, "has", (i4, s3) => {
      this.isInitialized();
      const n5 = this.get(i4), o5 = zc(s3);
      return typeof n5[o5] < "u";
    }), k6(this, "ack", async (i4, s3) => {
      this.isInitialized();
      const n5 = this.messagesWithoutClientAck.get(i4);
      if (typeof n5 > "u") return;
      const o5 = zc(s3);
      delete n5[o5], Object.keys(n5).length === 0 ? this.messagesWithoutClientAck.delete(i4) : this.messagesWithoutClientAck.set(i4, n5), await this.persist();
    }), k6(this, "del", async (i4) => {
      this.isInitialized(), this.messages.delete(i4), this.messagesWithoutClientAck.delete(i4), await this.persist();
    }), this.logger = E2(e2, this.name), this.core = t;
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get storageKeyWithoutClientAck() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name + "_withoutClientAck";
  }
  async setRelayerMessages(e2) {
    await this.core.storage.setItem(this.storageKey, Ys(e2));
  }
  async setRelayerMessagesWithoutClientAck(e2) {
    await this.core.storage.setItem(this.storageKeyWithoutClientAck, Ys(e2));
  }
  async getRelayerMessages() {
    const e2 = await this.core.storage.getItem(this.storageKey);
    return typeof e2 < "u" ? Xs(e2) : void 0;
  }
  async getRelayerMessagesWithoutClientAck() {
    const e2 = await this.core.storage.getItem(this.storageKeyWithoutClientAck);
    return typeof e2 < "u" ? Xs(e2) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages), await this.setRelayerMessagesWithoutClientAck(this.messagesWithoutClientAck);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Et3("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var Mn4 = Object.defineProperty;
var Kn4 = Object.defineProperties;
var Bn4 = Object.getOwnPropertyDescriptors;
var Ii2 = Object.getOwnPropertySymbols;
var Vn4 = Object.prototype.hasOwnProperty;
var qn4 = Object.prototype.propertyIsEnumerable;
var qe4 = (r3, e2, t) => e2 in r3 ? Mn4(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var Ie4 = (r3, e2) => {
  for (var t in e2 || (e2 = {})) Vn4.call(e2, t) && qe4(r3, t, e2[t]);
  if (Ii2) for (var t of Ii2(e2)) qn4.call(e2, t) && qe4(r3, t, e2[t]);
  return r3;
};
var Ge3 = (r3, e2) => Kn4(r3, Bn4(e2));
var V2 = (r3, e2, t) => qe4(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Gn3 = class extends m2 {
  constructor(e2, t) {
    super(e2, t), this.relayer = e2, this.logger = t, V2(this, "events", new import_events7.EventEmitter()), V2(this, "name", At2), V2(this, "queue", /* @__PURE__ */ new Map()), V2(this, "publishTimeout", (0, import_time5.toMiliseconds)(import_time5.ONE_MINUTE)), V2(this, "initialPublishTimeout", (0, import_time5.toMiliseconds)(import_time5.ONE_SECOND * 15)), V2(this, "needsTransportRestart", false), V2(this, "publish", async (i4, s3, n5) => {
      var o5;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: i4, message: s3, opts: n5 } });
      const a3 = n5?.ttl || je4, c7 = ea(n5), h6 = n5?.prompt || false, l8 = n5?.tag || 0, d5 = n5?.id || getBigIntRpcId().toString(), g4 = { topic: i4, message: s3, opts: { ttl: a3, relay: c7, prompt: h6, tag: l8, id: d5, attestation: n5?.attestation, tvf: n5?.tvf } }, _3 = `Failed to publish payload, please try again. id:${d5} tag:${l8}`;
      try {
        const u3 = new Promise(async (b5) => {
          const x7 = ({ id: D4 }) => {
            g4.opts.id === D4 && (this.removeRequestFromQueue(D4), this.relayer.events.removeListener(C3.publish, x7), b5(g4));
          };
          this.relayer.events.on(C3.publish, x7);
          const I5 = ni(new Promise((D4, j6) => {
            this.rpcPublish({ topic: i4, message: s3, ttl: a3, prompt: h6, tag: l8, id: d5, attestation: n5?.attestation, tvf: n5?.tvf }).then(D4).catch((T5) => {
              this.logger.warn(T5, T5?.message), j6(T5);
            });
          }), this.initialPublishTimeout, `Failed initial publish, retrying.... id:${d5} tag:${l8}`);
          try {
            await I5, this.events.removeListener(C3.publish, x7);
          } catch (D4) {
            this.queue.set(d5, Ge3(Ie4({}, g4), { attempt: 1 })), this.logger.warn(D4, D4?.message);
          }
        });
        this.logger.trace({ type: "method", method: "publish", params: { id: d5, topic: i4, message: s3, opts: n5 } }), await ni(u3, this.publishTimeout, _3);
      } catch (u3) {
        if (this.logger.debug("Failed to Publish Payload"), this.logger.error(u3), (o5 = n5?.internal) != null && o5.throwOnFailedPublish) throw u3;
      } finally {
        this.queue.delete(d5);
      }
    }), V2(this, "on", (i4, s3) => {
      this.events.on(i4, s3);
    }), V2(this, "once", (i4, s3) => {
      this.events.once(i4, s3);
    }), V2(this, "off", (i4, s3) => {
      this.events.off(i4, s3);
    }), V2(this, "removeListener", (i4, s3) => {
      this.events.removeListener(i4, s3);
    }), this.relayer = e2, this.logger = E2(t, this.name), this.registerEventListeners();
  }
  get context() {
    return y2(this.logger);
  }
  async rpcPublish(e2) {
    var t, i4, s3, n5;
    const { topic: o5, message: a3, ttl: c7 = je4, prompt: h6, tag: l8, id: d5, attestation: g4, tvf: _3 } = e2, u3 = { method: na(ea().protocol).publish, params: Ie4({ topic: o5, message: a3, ttl: c7, prompt: h6, tag: l8, attestation: g4 }, _3), id: d5 };
    kt3((t = u3.params) == null ? void 0 : t.prompt) && ((i4 = u3.params) == null || delete i4.prompt), kt3((s3 = u3.params) == null ? void 0 : s3.tag) && ((n5 = u3.params) == null || delete n5.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: u3 });
    const b5 = await this.relayer.request(u3);
    return this.relayer.events.emit(C3.publish, e2), this.logger.debug("Successfully Published Payload"), b5;
  }
  removeRequestFromQueue(e2) {
    this.queue.delete(e2);
  }
  checkQueue() {
    this.queue.forEach(async (e2, t) => {
      const i4 = e2.attempt + 1;
      this.queue.set(t, Ge3(Ie4({}, e2), { attempt: i4 }));
      const { topic: s3, message: n5, opts: o5, attestation: a3 } = e2;
      this.logger.warn({}, `Publisher: queue->publishing: ${e2.opts.id}, tag: ${e2.opts.tag}, attempt: ${i4}`), await this.rpcPublish(Ge3(Ie4({}, e2), { topic: s3, message: n5, ttl: o5.ttl, prompt: o5.prompt, tag: o5.tag, id: o5.id, attestation: a3, tvf: o5.tvf })), this.logger.warn({}, `Publisher: queue->published: ${e2.opts.id}`);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(r.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = false, this.relayer.events.emit(C3.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(C3.message_ack, (e2) => {
      this.removeRequestFromQueue(e2.id.toString());
    });
  }
};
var Wn3 = Object.defineProperty;
var Hn4 = (r3, e2, t) => e2 in r3 ? Wn3(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var ne2 = (r3, e2, t) => Hn4(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Yn3 = class {
  constructor() {
    ne2(this, "map", /* @__PURE__ */ new Map()), ne2(this, "set", (e2, t) => {
      const i4 = this.get(e2);
      this.exists(e2, t) || this.map.set(e2, [...i4, t]);
    }), ne2(this, "get", (e2) => this.map.get(e2) || []), ne2(this, "exists", (e2, t) => this.get(e2).includes(t)), ne2(this, "delete", (e2, t) => {
      if (typeof t > "u") {
        this.map.delete(e2);
        return;
      }
      if (!this.map.has(e2)) return;
      const i4 = this.get(e2);
      if (!this.exists(e2, t)) return;
      const s3 = i4.filter((n5) => n5 !== t);
      if (!s3.length) {
        this.map.delete(e2);
        return;
      }
      this.map.set(e2, s3);
    }), ne2(this, "clear", () => {
      this.map.clear();
    });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
};
var Jn4 = Object.defineProperty;
var Xn3 = Object.defineProperties;
var Zn3 = Object.getOwnPropertyDescriptors;
var Ti2 = Object.getOwnPropertySymbols;
var Qn4 = Object.prototype.hasOwnProperty;
var eo4 = Object.prototype.propertyIsEnumerable;
var We3 = (r3, e2, t) => e2 in r3 ? Jn4(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var ge4 = (r3, e2) => {
  for (var t in e2 || (e2 = {})) Qn4.call(e2, t) && We3(r3, t, e2[t]);
  if (Ti2) for (var t of Ti2(e2)) eo4.call(e2, t) && We3(r3, t, e2[t]);
  return r3;
};
var He4 = (r3, e2) => Xn3(r3, Zn3(e2));
var f4 = (r3, e2, t) => We3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Ci2 = class extends P {
  constructor(e2, t) {
    super(e2, t), this.relayer = e2, this.logger = t, f4(this, "subscriptions", /* @__PURE__ */ new Map()), f4(this, "topicMap", new Yn3()), f4(this, "events", new import_events7.EventEmitter()), f4(this, "name", Ut4), f4(this, "version", Ft3), f4(this, "pending", /* @__PURE__ */ new Map()), f4(this, "cached", []), f4(this, "initialized", false), f4(this, "storagePrefix", B2), f4(this, "subscribeTimeout", (0, import_time5.toMiliseconds)(import_time5.ONE_MINUTE)), f4(this, "initialSubscribeTimeout", (0, import_time5.toMiliseconds)(import_time5.ONE_SECOND * 15)), f4(this, "clientId"), f4(this, "batchSubscribeTopicsLimit", 500), f4(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), await this.restore()), this.initialized = true;
    }), f4(this, "subscribe", async (i4, s3) => {
      this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i4, opts: s3 } });
      try {
        const n5 = ea(s3), o5 = { topic: i4, relay: n5, transportType: s3?.transportType };
        this.pending.set(i4, o5);
        const a3 = await this.rpcSubscribe(i4, n5, s3);
        return typeof a3 == "string" && (this.onSubscribe(a3, o5), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: i4, opts: s3 } })), a3;
      } catch (n5) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(n5), n5;
      }
    }), f4(this, "unsubscribe", async (i4, s3) => {
      this.isInitialized(), typeof s3?.id < "u" ? await this.unsubscribeById(i4, s3.id, s3) : await this.unsubscribeByTopic(i4, s3);
    }), f4(this, "isSubscribed", (i4) => new Promise((s3) => {
      s3(this.topicMap.topics.includes(i4));
    })), f4(this, "isKnownTopic", (i4) => new Promise((s3) => {
      s3(this.topicMap.topics.includes(i4) || this.pending.has(i4) || this.cached.some((n5) => n5.topic === i4));
    })), f4(this, "on", (i4, s3) => {
      this.events.on(i4, s3);
    }), f4(this, "once", (i4, s3) => {
      this.events.once(i4, s3);
    }), f4(this, "off", (i4, s3) => {
      this.events.off(i4, s3);
    }), f4(this, "removeListener", (i4, s3) => {
      this.events.removeListener(i4, s3);
    }), f4(this, "start", async () => {
      await this.onConnect();
    }), f4(this, "stop", async () => {
      await this.onDisconnect();
    }), f4(this, "restart", async () => {
      await this.restore(), await this.onRestart();
    }), f4(this, "checkPending", async () => {
      if (this.pending.size === 0 && (!this.initialized || !this.relayer.connected)) return;
      const i4 = [];
      this.pending.forEach((s3) => {
        i4.push(s3);
      }), await this.batchSubscribe(i4);
    }), f4(this, "registerEventListeners", () => {
      this.relayer.core.heartbeat.on(r.pulse, async () => {
        await this.checkPending();
      }), this.events.on($.created, async (i4) => {
        const s3 = $.created;
        this.logger.info(`Emitting ${s3}`), this.logger.debug({ type: "event", event: s3, data: i4 }), await this.persist();
      }), this.events.on($.deleted, async (i4) => {
        const s3 = $.deleted;
        this.logger.info(`Emitting ${s3}`), this.logger.debug({ type: "event", event: s3, data: i4 }), await this.persist();
      });
    }), this.relayer = e2, this.logger = E2(t, this.name), this.clientId = "";
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  get hasAnyTopics() {
    return this.topicMap.topics.length > 0 || this.pending.size > 0 || this.cached.length > 0 || this.subscriptions.size > 0;
  }
  hasSubscription(e2, t) {
    let i4 = false;
    try {
      i4 = this.getSubscription(e2).topic === t;
    } catch {
    }
    return i4;
  }
  reset() {
    this.cached = [], this.initialized = true;
  }
  onDisable() {
    this.values.length > 0 && (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(e2, t) {
    const i4 = this.topicMap.get(e2);
    await Promise.all(i4.map(async (s3) => await this.unsubscribeById(e2, s3, t)));
  }
  async unsubscribeById(e2, t, i4) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t, opts: i4 } });
    try {
      const s3 = ea(i4);
      await this.restartToComplete({ topic: e2, id: t, relay: s3 }), await this.rpcUnsubscribe(e2, t, s3);
      const n5 = Kt2("USER_DISCONNECTED", `${this.name}, ${e2}`);
      await this.onUnsubscribe(e2, t, n5), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: e2, id: t, opts: i4 } });
    } catch (s3) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(s3), s3;
    }
  }
  async rpcSubscribe(e2, t, i4) {
    var s3;
    (!i4 || i4?.transportType === Q4.relay) && await this.restartToComplete({ topic: e2, id: e2, relay: t });
    const n5 = { method: na(t.protocol).subscribe, params: { topic: e2 } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n5 });
    const o5 = (s3 = i4?.internal) == null ? void 0 : s3.throwOnFailedPublish;
    try {
      const a3 = await this.getSubscriptionId(e2);
      if (i4?.transportType === Q4.link_mode) return setTimeout(() => {
        (this.relayer.connected || this.relayer.connecting) && this.relayer.request(n5).catch((l8) => this.logger.warn(l8));
      }, (0, import_time5.toMiliseconds)(import_time5.ONE_SECOND)), a3;
      const c7 = new Promise(async (l8) => {
        const d5 = (g4) => {
          g4.topic === e2 && (this.events.removeListener($.created, d5), l8(g4.id));
        };
        this.events.on($.created, d5);
        try {
          const g4 = await ni(new Promise((_3, u3) => {
            this.relayer.request(n5).catch((b5) => {
              this.logger.warn(b5, b5?.message), u3(b5);
            }).then(_3);
          }), this.initialSubscribeTimeout, `Subscribing to ${e2} failed, please try again`);
          this.events.removeListener($.created, d5), l8(g4);
        } catch {
        }
      }), h6 = await ni(c7, this.subscribeTimeout, `Subscribing to ${e2} failed, please try again`);
      if (!h6 && o5) throw new Error(`Subscribing to ${e2} failed, please try again`);
      return h6 ? a3 : null;
    } catch (a3) {
      if (this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(C3.connection_stalled), o5) throw a3;
    }
    return null;
  }
  async rpcBatchSubscribe(e2) {
    if (!e2.length) return;
    const t = e2[0].relay, i4 = { method: na(t.protocol).batchSubscribe, params: { topics: e2.map((s3) => s3.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i4 });
    try {
      await await ni(new Promise((s3) => {
        this.relayer.request(i4).catch((n5) => this.logger.warn(n5)).then(s3);
      }), this.subscribeTimeout, "rpcBatchSubscribe failed, please try again");
    } catch {
      this.relayer.events.emit(C3.connection_stalled);
    }
  }
  async rpcBatchFetchMessages(e2) {
    if (!e2.length) return;
    const t = e2[0].relay, i4 = { method: na(t.protocol).batchFetchMessages, params: { topics: e2.map((n5) => n5.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: i4 });
    let s3;
    try {
      s3 = await await ni(new Promise((n5, o5) => {
        this.relayer.request(i4).catch((a3) => {
          this.logger.warn(a3), o5(a3);
        }).then(n5);
      }), this.subscribeTimeout, "rpcBatchFetchMessages failed, please try again");
    } catch {
      this.relayer.events.emit(C3.connection_stalled);
    }
    return s3;
  }
  rpcUnsubscribe(e2, t, i4) {
    const s3 = { method: na(i4.protocol).unsubscribe, params: { topic: e2, id: t } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: s3 }), this.relayer.request(s3);
  }
  onSubscribe(e2, t) {
    this.setSubscription(e2, He4(ge4({}, t), { id: e2 })), this.pending.delete(t.topic);
  }
  onBatchSubscribe(e2) {
    e2.length && e2.forEach((t) => {
      this.setSubscription(t.id, ge4({}, t)), this.pending.delete(t.topic);
    });
  }
  async onUnsubscribe(e2, t, i4) {
    this.events.removeAllListeners(t), this.hasSubscription(t, e2) && this.deleteSubscription(t, i4), await this.relayer.messages.del(e2);
  }
  async setRelayerSubscriptions(e2) {
    await this.relayer.core.storage.setItem(this.storageKey, e2);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(e2, t) {
    this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: e2, subscription: t }), this.addSubscription(e2, t);
  }
  addSubscription(e2, t) {
    this.subscriptions.set(e2, ge4({}, t)), this.topicMap.set(t.topic, e2), this.events.emit($.created, t);
  }
  getSubscription(e2) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: e2 });
    const t = this.subscriptions.get(e2);
    if (!t) {
      const { message: i4 } = Et3("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw new Error(i4);
    }
    return t;
  }
  deleteSubscription(e2, t) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: e2, reason: t });
    const i4 = this.getSubscription(e2);
    this.subscriptions.delete(e2), this.topicMap.delete(i4.topic, e2), this.events.emit($.deleted, He4(ge4({}, i4), { reason: t }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit($.sync);
  }
  async onRestart() {
    if (this.cached.length) {
      const e2 = [...this.cached], t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let i4 = 0; i4 < t; i4++) {
        const s3 = e2.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s3);
      }
    }
    this.events.emit($.resubscribed);
  }
  async restore() {
    try {
      const e2 = await this.getRelayerSubscriptions();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.subscriptions.size) {
        const { message: t } = Et3("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e2);
    }
  }
  async batchSubscribe(e2) {
    e2.length && (await this.rpcBatchSubscribe(e2), this.onBatchSubscribe(await Promise.all(e2.map(async (t) => He4(ge4({}, t), { id: await this.getSubscriptionId(t.topic) })))));
  }
  async batchFetchMessages(e2) {
    if (!e2.length) return;
    this.logger.trace(`Fetching batch messages for ${e2.length} subscriptions`);
    const t = await this.rpcBatchFetchMessages(e2);
    t && t.messages && (await pi((0, import_time5.toMiliseconds)(import_time5.ONE_SECOND)), await this.relayer.handleBatchMessageEvents(t.messages));
  }
  async onConnect() {
    await this.restart(), this.reset();
  }
  onDisconnect() {
    this.onDisable();
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Et3("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  async restartToComplete(e2) {
    !this.relayer.connected && !this.relayer.connecting && (this.cached.push(e2), await this.relayer.transportOpen());
  }
  async getClientId() {
    return this.clientId || (this.clientId = await this.relayer.core.crypto.getClientId()), this.clientId;
  }
  async getSubscriptionId(e2) {
    return zc(e2 + await this.getClientId());
  }
};
var to4 = Object.defineProperty;
var Pi2 = Object.getOwnPropertySymbols;
var io4 = Object.prototype.hasOwnProperty;
var so4 = Object.prototype.propertyIsEnumerable;
var Ye4 = (r3, e2, t) => e2 in r3 ? to4(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var Si2 = (r3, e2) => {
  for (var t in e2 || (e2 = {})) io4.call(e2, t) && Ye4(r3, t, e2[t]);
  if (Pi2) for (var t of Pi2(e2)) so4.call(e2, t) && Ye4(r3, t, e2[t]);
  return r3;
};
var y4 = (r3, e2, t) => Ye4(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Oi2 = class extends d2 {
  constructor(e2) {
    super(e2), y4(this, "protocol", "wc"), y4(this, "version", 2), y4(this, "core"), y4(this, "logger"), y4(this, "events", new import_events7.EventEmitter()), y4(this, "provider"), y4(this, "messages"), y4(this, "subscriber"), y4(this, "publisher"), y4(this, "name", $t4), y4(this, "transportExplicitlyClosed", false), y4(this, "initialized", false), y4(this, "connectionAttemptInProgress", false), y4(this, "relayUrl"), y4(this, "projectId"), y4(this, "packageName"), y4(this, "bundleId"), y4(this, "hasExperiencedNetworkDisruption", false), y4(this, "pingTimeout"), y4(this, "heartBeatTimeout", (0, import_time5.toMiliseconds)(import_time5.THIRTY_SECONDS + import_time5.FIVE_SECONDS)), y4(this, "reconnectTimeout"), y4(this, "connectPromise"), y4(this, "reconnectInProgress", false), y4(this, "requestsInFlight", []), y4(this, "connectTimeout", (0, import_time5.toMiliseconds)(import_time5.ONE_SECOND * 15)), y4(this, "request", async (t) => {
      var i4, s3;
      this.logger.debug("Publishing Request Payload");
      const n5 = t.id || getBigIntRpcId().toString();
      await this.toEstablishConnection();
      try {
        this.logger.trace({ id: n5, method: t.method, topic: (i4 = t.params) == null ? void 0 : i4.topic }, "relayer.request - publishing...");
        const o5 = `${n5}:${((s3 = t.params) == null ? void 0 : s3.tag) || ""}`;
        this.requestsInFlight.push(o5);
        const a3 = await this.provider.request(t);
        return this.requestsInFlight = this.requestsInFlight.filter((c7) => c7 !== o5), a3;
      } catch (o5) {
        throw this.logger.debug(`Failed to Publish Request: ${n5}`), o5;
      }
    }), y4(this, "resetPingTimeout", () => {
      Ye3() && (clearTimeout(this.pingTimeout), this.pingTimeout = setTimeout(() => {
        var t, i4, s3, n5;
        try {
          this.logger.debug({}, "pingTimeout: Connection stalled, terminating..."), (n5 = (s3 = (i4 = (t = this.provider) == null ? void 0 : t.connection) == null ? void 0 : i4.socket) == null ? void 0 : s3.terminate) == null || n5.call(s3);
        } catch (o5) {
          this.logger.warn(o5, o5?.message);
        }
      }, this.heartBeatTimeout));
    }), y4(this, "onPayloadHandler", (t) => {
      this.onProviderPayload(t), this.resetPingTimeout();
    }), y4(this, "onConnectHandler", () => {
      this.logger.warn({}, "Relayer connected \u{1F6DC}"), this.startPingTimeout(), this.events.emit(C3.connect);
    }), y4(this, "onDisconnectHandler", () => {
      this.logger.warn({}, "Relayer disconnected \u{1F6D1}"), this.requestsInFlight = [], this.onProviderDisconnect();
    }), y4(this, "onProviderErrorHandler", (t) => {
      this.logger.fatal(`Fatal socket error: ${t.message}`), this.events.emit(C3.error, t), this.logger.fatal("Fatal socket error received, closing transport"), this.transportClose();
    }), y4(this, "registerProviderListeners", () => {
      this.provider.on(L2.payload, this.onPayloadHandler), this.provider.on(L2.connect, this.onConnectHandler), this.provider.on(L2.disconnect, this.onDisconnectHandler), this.provider.on(L2.error, this.onProviderErrorHandler);
    }), this.core = e2.core, this.logger = typeof e2.logger < "u" && typeof e2.logger != "string" ? E2(e2.logger, this.name) : (0, import_pino2.default)(k2({ level: e2.logger || Nt4 })), this.messages = new Ei2(this.logger, e2.core), this.subscriber = new Ci2(this, this.logger), this.publisher = new Gn3(this, this.logger), this.relayUrl = e2?.relayUrl || Ue4, this.projectId = e2.projectId, Ms() ? this.packageName = qs() : Vs() && (this.bundleId = qs()), this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await Promise.all([this.messages.init(), this.subscriber.init()]), this.initialized = true, this.transportOpen().catch((e2) => this.logger.warn(e2, e2?.message));
  }
  get context() {
    return y2(this.logger);
  }
  get connected() {
    var e2, t, i4;
    return ((i4 = (t = (e2 = this.provider) == null ? void 0 : e2.connection) == null ? void 0 : t.socket) == null ? void 0 : i4.readyState) === 1 || false;
  }
  get connecting() {
    var e2, t, i4;
    return ((i4 = (t = (e2 = this.provider) == null ? void 0 : e2.connection) == null ? void 0 : t.socket) == null ? void 0 : i4.readyState) === 0 || this.connectPromise !== void 0 || false;
  }
  async publish(e2, t, i4) {
    this.isInitialized(), await this.publisher.publish(e2, t, i4), await this.recordMessageEvent({ topic: e2, message: t, publishedAt: Date.now(), transportType: Q4.relay }, le4.outbound);
  }
  async subscribe(e2, t) {
    var i4, s3, n5;
    this.isInitialized(), (!(t != null && t.transportType) || t?.transportType === "relay") && await this.toEstablishConnection();
    const o5 = typeof ((i4 = t?.internal) == null ? void 0 : i4.throwOnFailedPublish) > "u" ? true : (s3 = t?.internal) == null ? void 0 : s3.throwOnFailedPublish;
    let a3 = ((n5 = this.subscriber.topicMap.get(e2)) == null ? void 0 : n5[0]) || "", c7;
    const h6 = (l8) => {
      l8.topic === e2 && (this.subscriber.off($.created, h6), c7());
    };
    return await Promise.all([new Promise((l8) => {
      c7 = l8, this.subscriber.on($.created, h6);
    }), new Promise(async (l8, d5) => {
      a3 = await this.subscriber.subscribe(e2, Si2({ internal: { throwOnFailedPublish: o5 } }, t)).catch((g4) => {
        o5 && d5(g4);
      }) || a3, l8();
    })]), a3;
  }
  async unsubscribe(e2, t) {
    this.isInitialized(), await this.subscriber.unsubscribe(e2, t);
  }
  on(e2, t) {
    this.events.on(e2, t);
  }
  once(e2, t) {
    this.events.once(e2, t);
  }
  off(e2, t) {
    this.events.off(e2, t);
  }
  removeListener(e2, t) {
    this.events.removeListener(e2, t);
  }
  async transportDisconnect() {
    this.provider.disconnect && (this.hasExperiencedNetworkDisruption || this.connected) ? await ni(this.provider.disconnect(), 2e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.onProviderDisconnect();
  }
  async transportClose() {
    this.transportExplicitlyClosed = true, await this.transportDisconnect();
  }
  async transportOpen(e2) {
    if (!this.subscriber.hasAnyTopics) {
      this.logger.info("Starting WS connection skipped because the client has no topics to work with.");
      return;
    }
    if (this.connectPromise ? (this.logger.debug({}, "Waiting for existing connection attempt to resolve..."), await this.connectPromise, this.logger.debug({}, "Existing connection attempt resolved")) : (this.connectPromise = new Promise(async (t, i4) => {
      await this.connect(e2).then(t).catch(i4).finally(() => {
        this.connectPromise = void 0;
      });
    }), await this.connectPromise), !this.connected) throw new Error(`Couldn't establish socket connection to the relay server: ${this.relayUrl}`);
  }
  async restartTransport(e2) {
    this.logger.debug({}, "Restarting transport..."), !this.connectionAttemptInProgress && (this.relayUrl = e2 || this.relayUrl, await this.confirmOnlineStateOrThrow(), await this.transportClose(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await ja()) throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  async handleBatchMessageEvents(e2) {
    if (e2?.length === 0) {
      this.logger.trace("Batch message events is empty. Ignoring...");
      return;
    }
    const t = e2.sort((i4, s3) => i4.publishedAt - s3.publishedAt);
    this.logger.debug(`Batch of ${t.length} message events sorted`);
    for (const i4 of t) try {
      await this.onMessageEvent(i4);
    } catch (s3) {
      this.logger.warn(s3, "Error while processing batch message event: " + s3?.message);
    }
    this.logger.trace(`Batch of ${t.length} message events processed`);
  }
  async onLinkMessageEvent(e2, t) {
    const { topic: i4 } = e2;
    if (!t.sessionExists) {
      const s3 = ii(import_time5.FIVE_MINUTES), n5 = { topic: i4, expiry: s3, relay: { protocol: "irn" }, active: false };
      await this.core.pairing.pairings.set(i4, n5);
    }
    this.events.emit(C3.message, e2), await this.recordMessageEvent(e2, le4.inbound);
  }
  async connect(e2) {
    await this.confirmOnlineStateOrThrow(), e2 && e2 !== this.relayUrl && (this.relayUrl = e2, await this.transportDisconnect()), this.connectionAttemptInProgress = true, this.transportExplicitlyClosed = false;
    let t = 1;
    for (; t < 6; ) {
      try {
        if (this.transportExplicitlyClosed) break;
        this.logger.debug({}, `Connecting to ${this.relayUrl}, attempt: ${t}...`), await this.createProvider(), await new Promise(async (i4, s3) => {
          const n5 = () => {
            s3(new Error("Connection interrupted while trying to connect"));
          };
          this.provider.once(L2.disconnect, n5), await ni(new Promise((o5, a3) => {
            this.provider.connect().then(o5).catch(a3);
          }), this.connectTimeout, `Socket stalled when trying to connect to ${this.relayUrl}`).catch((o5) => {
            s3(o5);
          }).finally(() => {
            this.provider.off(L2.disconnect, n5), clearTimeout(this.reconnectTimeout);
          }), await new Promise(async (o5, a3) => {
            const c7 = () => {
              s3(new Error("Connection interrupted while trying to subscribe"));
            };
            this.provider.once(L2.disconnect, c7), await this.subscriber.start().then(o5).catch(a3).finally(() => {
              this.provider.off(L2.disconnect, c7);
            });
          }), this.hasExperiencedNetworkDisruption = false, i4();
        });
      } catch (i4) {
        await this.subscriber.stop();
        const s3 = i4;
        this.logger.warn({}, s3.message), this.hasExperiencedNetworkDisruption = true;
      } finally {
        this.connectionAttemptInProgress = false;
      }
      if (this.connected) {
        this.logger.debug({}, `Connected to ${this.relayUrl} successfully on attempt: ${t}`);
        break;
      }
      await new Promise((i4) => setTimeout(i4, (0, import_time5.toMiliseconds)(t * 1))), t++;
    }
  }
  startPingTimeout() {
    var e2, t, i4, s3, n5;
    if (Ye3()) try {
      (t = (e2 = this.provider) == null ? void 0 : e2.connection) != null && t.socket && ((n5 = (s3 = (i4 = this.provider) == null ? void 0 : i4.connection) == null ? void 0 : s3.socket) == null || n5.on("ping", () => {
        this.resetPingTimeout();
      })), this.resetPingTimeout();
    } catch (o5) {
      this.logger.warn(o5, o5?.message);
    }
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const e2 = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new o3(new f3(zs({ sdkVersion: _e4, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: e2, useOnCloseEvent: true, bundleId: this.bundleId, packageName: this.packageName }))), this.registerProviderListeners();
  }
  async recordMessageEvent(e2, t) {
    const { topic: i4, message: s3 } = e2;
    await this.messages.set(i4, s3, t);
  }
  async shouldIgnoreMessageEvent(e2) {
    const { topic: t, message: i4 } = e2;
    if (!i4 || i4.length === 0) return this.logger.warn(`Ignoring invalid/empty message: ${i4}`), true;
    if (!await this.subscriber.isKnownTopic(t)) return this.logger.warn(`Ignoring message for unknown topic ${t}`), true;
    const s3 = this.messages.has(t, i4);
    return s3 && this.logger.warn(`Ignoring duplicate message: ${i4}`), s3;
  }
  async onProviderPayload(e2) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: e2 }), isJsonRpcRequest(e2)) {
      if (!e2.method.endsWith(zt4)) return;
      const t = e2.params, { topic: i4, message: s3, publishedAt: n5, attestation: o5 } = t.data, a3 = { topic: i4, message: s3, publishedAt: n5, transportType: Q4.relay, attestation: o5 };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(Si2({ type: "event", event: t.id }, a3)), this.events.emit(t.id, a3), await this.acknowledgePayload(e2), await this.onMessageEvent(a3);
    } else isJsonRpcResponse(e2) && this.events.emit(C3.message_ack, e2);
  }
  async onMessageEvent(e2) {
    await this.shouldIgnoreMessageEvent(e2) || (await this.recordMessageEvent(e2, le4.inbound), this.events.emit(C3.message, e2));
  }
  async acknowledgePayload(e2) {
    const t = formatJsonRpcResult(e2.id, true);
    await this.provider.connection.send(t);
  }
  unregisterProviderListeners() {
    this.provider.off(L2.payload, this.onPayloadHandler), this.provider.off(L2.connect, this.onConnectHandler), this.provider.off(L2.disconnect, this.onDisconnectHandler), this.provider.off(L2.error, this.onProviderErrorHandler), clearTimeout(this.pingTimeout);
  }
  async registerEventListeners() {
    let e2 = await ja();
    ka(async (t) => {
      e2 !== t && (e2 = t, t ? await this.transportOpen().catch((i4) => this.logger.error(i4, i4?.message)) : (this.hasExperiencedNetworkDisruption = true, await this.transportDisconnect(), this.transportExplicitlyClosed = false));
    }), this.core.heartbeat.on(r.pulse, async () => {
      if (!this.transportExplicitlyClosed && !this.connected && Pa()) try {
        await this.confirmOnlineStateOrThrow(), await this.transportOpen();
      } catch (t) {
        this.logger.warn(t, t?.message);
      }
    });
  }
  async onProviderDisconnect() {
    clearTimeout(this.pingTimeout), this.events.emit(C3.disconnect), this.connectionAttemptInProgress = false, !this.reconnectInProgress && (this.reconnectInProgress = true, await this.subscriber.stop(), this.subscriber.hasAnyTopics && (this.transportExplicitlyClosed || (this.reconnectTimeout = setTimeout(async () => {
      await this.transportOpen().catch((e2) => this.logger.error(e2, e2?.message)), this.reconnectTimeout = void 0, this.reconnectInProgress = false;
    }, (0, import_time5.toMiliseconds)(Lt4)))));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Et3("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectPromise) {
        await this.connectPromise;
        return;
      }
      await this.connect();
    }
  }
};
function ro4(r3, e2) {
  return r3 === e2 || Number.isNaN(r3) && Number.isNaN(e2);
}
function Ri2(r3) {
  return Object.getOwnPropertySymbols(r3).filter((e2) => Object.prototype.propertyIsEnumerable.call(r3, e2));
}
function Ai2(r3) {
  return r3 == null ? r3 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r3);
}
var no4 = "[object RegExp]";
var oo4 = "[object String]";
var ao4 = "[object Number]";
var co4 = "[object Boolean]";
var xi2 = "[object Arguments]";
var ho4 = "[object Symbol]";
var lo4 = "[object Date]";
var uo4 = "[object Map]";
var go4 = "[object Set]";
var po4 = "[object Array]";
var yo4 = "[object Function]";
var bo4 = "[object ArrayBuffer]";
var Je3 = "[object Object]";
var mo4 = "[object Error]";
var fo4 = "[object DataView]";
var Do4 = "[object Uint8Array]";
var vo4 = "[object Uint8ClampedArray]";
var wo4 = "[object Uint16Array]";
var _o4 = "[object Uint32Array]";
var Eo4 = "[object BigUint64Array]";
var Io4 = "[object Int8Array]";
var To4 = "[object Int16Array]";
var Co4 = "[object Int32Array]";
var Po3 = "[object BigInt64Array]";
var So4 = "[object Float32Array]";
var Oo4 = "[object Float64Array]";
function Ro4() {
}
function Ni2(r3) {
  if (!r3 || typeof r3 != "object") return false;
  const e2 = Object.getPrototypeOf(r3);
  return e2 === null || e2 === Object.prototype || Object.getPrototypeOf(e2) === null ? Object.prototype.toString.call(r3) === "[object Object]" : false;
}
function Ao4(r3, e2, t) {
  return pe4(r3, e2, void 0, void 0, void 0, void 0, t);
}
function pe4(r3, e2, t, i4, s3, n5, o5) {
  const a3 = o5(r3, e2, t, i4, s3, n5);
  if (a3 !== void 0) return a3;
  if (typeof r3 == typeof e2) switch (typeof r3) {
    case "bigint":
    case "string":
    case "boolean":
    case "symbol":
    case "undefined":
      return r3 === e2;
    case "number":
      return r3 === e2 || Object.is(r3, e2);
    case "function":
      return r3 === e2;
    case "object":
      return ye4(r3, e2, n5, o5);
  }
  return ye4(r3, e2, n5, o5);
}
function ye4(r3, e2, t, i4) {
  if (Object.is(r3, e2)) return true;
  let s3 = Ai2(r3), n5 = Ai2(e2);
  if (s3 === xi2 && (s3 = Je3), n5 === xi2 && (n5 = Je3), s3 !== n5) return false;
  switch (s3) {
    case oo4:
      return r3.toString() === e2.toString();
    case ao4: {
      const c7 = r3.valueOf(), h6 = e2.valueOf();
      return ro4(c7, h6);
    }
    case co4:
    case lo4:
    case ho4:
      return Object.is(r3.valueOf(), e2.valueOf());
    case no4:
      return r3.source === e2.source && r3.flags === e2.flags;
    case yo4:
      return r3 === e2;
  }
  t = t ?? /* @__PURE__ */ new Map();
  const o5 = t.get(r3), a3 = t.get(e2);
  if (o5 != null && a3 != null) return o5 === e2;
  t.set(r3, e2), t.set(e2, r3);
  try {
    switch (s3) {
      case uo4: {
        if (r3.size !== e2.size) return false;
        for (const [c7, h6] of r3.entries()) if (!e2.has(c7) || !pe4(h6, e2.get(c7), c7, r3, e2, t, i4)) return false;
        return true;
      }
      case go4: {
        if (r3.size !== e2.size) return false;
        const c7 = Array.from(r3.values()), h6 = Array.from(e2.values());
        for (let l8 = 0; l8 < c7.length; l8++) {
          const d5 = c7[l8], g4 = h6.findIndex((_3) => pe4(d5, _3, void 0, r3, e2, t, i4));
          if (g4 === -1) return false;
          h6.splice(g4, 1);
        }
        return true;
      }
      case po4:
      case Do4:
      case vo4:
      case wo4:
      case _o4:
      case Eo4:
      case Io4:
      case To4:
      case Co4:
      case Po3:
      case So4:
      case Oo4: {
        if (typeof Buffer < "u" && Buffer.isBuffer(r3) !== Buffer.isBuffer(e2) || r3.length !== e2.length) return false;
        for (let c7 = 0; c7 < r3.length; c7++) if (!pe4(r3[c7], e2[c7], c7, r3, e2, t, i4)) return false;
        return true;
      }
      case bo4:
        return r3.byteLength !== e2.byteLength ? false : ye4(new Uint8Array(r3), new Uint8Array(e2), t, i4);
      case fo4:
        return r3.byteLength !== e2.byteLength || r3.byteOffset !== e2.byteOffset ? false : ye4(new Uint8Array(r3), new Uint8Array(e2), t, i4);
      case mo4:
        return r3.name === e2.name && r3.message === e2.message;
      case Je3: {
        if (!(ye4(r3.constructor, e2.constructor, t, i4) || Ni2(r3) && Ni2(e2))) return false;
        const h6 = [...Object.keys(r3), ...Ri2(r3)], l8 = [...Object.keys(e2), ...Ri2(e2)];
        if (h6.length !== l8.length) return false;
        for (let d5 = 0; d5 < h6.length; d5++) {
          const g4 = h6[d5], _3 = r3[g4];
          if (!Object.hasOwn(e2, g4)) return false;
          const u3 = e2[g4];
          if (!pe4(_3, u3, g4, r3, e2, t, i4)) return false;
        }
        return true;
      }
      default:
        return false;
    }
  } finally {
    t.delete(r3), t.delete(e2);
  }
}
function xo4(r3, e2) {
  return Ao4(r3, e2, Ro4);
}
var No4 = Object.defineProperty;
var $i2 = Object.getOwnPropertySymbols;
var $o4 = Object.prototype.hasOwnProperty;
var zo4 = Object.prototype.propertyIsEnumerable;
var Xe4 = (r3, e2, t) => e2 in r3 ? No4(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var zi2 = (r3, e2) => {
  for (var t in e2 || (e2 = {})) $o4.call(e2, t) && Xe4(r3, t, e2[t]);
  if ($i2) for (var t of $i2(e2)) zo4.call(e2, t) && Xe4(r3, t, e2[t]);
  return r3;
};
var z3 = (r3, e2, t) => Xe4(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Li2 = class extends f2 {
  constructor(e2, t, i4, s3 = B2, n5 = void 0) {
    super(e2, t, i4, s3), this.core = e2, this.logger = t, this.name = i4, z3(this, "map", /* @__PURE__ */ new Map()), z3(this, "version", kt4), z3(this, "cached", []), z3(this, "initialized", false), z3(this, "getKey"), z3(this, "storagePrefix", B2), z3(this, "recentlyDeleted", []), z3(this, "recentlyDeletedLimit", 200), z3(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((o5) => {
        this.getKey && o5 !== null && !kt3(o5) ? this.map.set(this.getKey(o5), o5) : wa(o5) ? this.map.set(o5.id, o5) : xa(o5) && this.map.set(o5.topic, o5);
      }), this.cached = [], this.initialized = true);
    }), z3(this, "set", async (o5, a3) => {
      this.isInitialized(), this.map.has(o5) ? await this.update(o5, a3) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: o5, value: a3 }), this.map.set(o5, a3), await this.persist());
    }), z3(this, "get", (o5) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: o5 }), this.getData(o5))), z3(this, "getAll", (o5) => (this.isInitialized(), o5 ? this.values.filter((a3) => Object.keys(o5).every((c7) => xo4(a3[c7], o5[c7]))) : this.values)), z3(this, "update", async (o5, a3) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: o5, update: a3 });
      const c7 = zi2(zi2({}, this.getData(o5)), a3);
      this.map.set(o5, c7), await this.persist();
    }), z3(this, "delete", async (o5, a3) => {
      this.isInitialized(), this.map.has(o5) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: o5, reason: a3 }), this.map.delete(o5), this.addToRecentlyDeleted(o5), await this.persist());
    }), this.logger = E2(t, this.name), this.storagePrefix = s3, this.getKey = n5;
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  addToRecentlyDeleted(e2) {
    this.recentlyDeleted.push(e2), this.recentlyDeleted.length >= this.recentlyDeletedLimit && this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
  }
  async setDataStore(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(e2) {
    const t = this.map.get(e2);
    if (!t) {
      if (this.recentlyDeleted.includes(e2)) {
        const { message: s3 } = Et3("MISSING_OR_INVALID", `Record was recently deleted - ${this.name}: ${e2}`);
        throw this.logger.error(s3), new Error(s3);
      }
      const { message: i4 } = Et3("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw this.logger.error(i4), new Error(i4);
    }
    return t;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const e2 = await this.getDataStore();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.map.size) {
        const { message: t } = Et3("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e2);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Et3("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var Lo4 = Object.defineProperty;
var ko4 = (r3, e2, t) => e2 in r3 ? Lo4(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var p3 = (r3, e2, t) => ko4(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var ki2 = class {
  constructor(e2, t) {
    this.core = e2, this.logger = t, p3(this, "name", Mt4), p3(this, "version", Kt3), p3(this, "events", new import_events7.default()), p3(this, "pairings"), p3(this, "initialized", false), p3(this, "storagePrefix", B2), p3(this, "ignoredPayloadTypes", [ee]), p3(this, "registeredMethods", []), p3(this, "init", async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = true, this.logger.trace("Initialized"));
    }), p3(this, "register", ({ methods: i4 }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...i4])];
    }), p3(this, "create", async (i4) => {
      this.isInitialized();
      const s3 = qc(), n5 = await this.core.crypto.setSymKey(s3), o5 = ii(import_time5.FIVE_MINUTES), a3 = { protocol: xt4 }, c7 = { topic: n5, expiry: o5, relay: a3, active: false, methods: i4?.methods }, h6 = oa({ protocol: this.core.protocol, version: this.core.version, topic: n5, symKey: s3, relay: a3, expiryTimestamp: o5, methods: i4?.methods });
      return this.events.emit(re.create, c7), this.core.expirer.set(n5, o5), await this.pairings.set(n5, c7), await this.core.relayer.subscribe(n5, { transportType: i4?.transportType }), { topic: n5, uri: h6 };
    }), p3(this, "pair", async (i4) => {
      this.isInitialized();
      const s3 = this.core.eventClient.createEvent({ properties: { topic: i4?.uri, trace: [G4.pairing_started] } });
      this.isValidPair(i4, s3);
      const { topic: n5, symKey: o5, relay: a3, expiryTimestamp: c7, methods: h6 } = ra(i4.uri);
      s3.props.properties.topic = n5, s3.addTrace(G4.pairing_uri_validation_success), s3.addTrace(G4.pairing_uri_not_expired);
      let l8;
      if (this.pairings.keys.includes(n5)) {
        if (l8 = this.pairings.get(n5), s3.addTrace(G4.existing_pairing), l8.active) throw s3.setError(Y2.active_pairing_already_exists), new Error(`Pairing already exists: ${n5}. Please try again with a new connection URI.`);
        s3.addTrace(G4.pairing_not_expired);
      }
      const d5 = c7 || ii(import_time5.FIVE_MINUTES), g4 = { topic: n5, relay: a3, expiry: d5, active: false, methods: h6 };
      this.core.expirer.set(n5, d5), await this.pairings.set(n5, g4), s3.addTrace(G4.store_new_pairing), i4.activatePairing && await this.activate({ topic: n5 }), this.events.emit(re.create, g4), s3.addTrace(G4.emit_inactive_pairing), this.core.crypto.keychain.has(n5) || await this.core.crypto.setSymKey(o5, n5), s3.addTrace(G4.subscribing_pairing_topic);
      try {
        await this.core.relayer.confirmOnlineStateOrThrow();
      } catch {
        s3.setError(Y2.no_internet_connection);
      }
      try {
        await this.core.relayer.subscribe(n5, { relay: a3 });
      } catch (_3) {
        throw s3.setError(Y2.subscribe_pairing_topic_failure), _3;
      }
      return s3.addTrace(G4.subscribe_pairing_topic_success), g4;
    }), p3(this, "activate", async ({ topic: i4 }) => {
      this.isInitialized();
      const s3 = ii(import_time5.FIVE_MINUTES);
      this.core.expirer.set(i4, s3), await this.pairings.update(i4, { active: true, expiry: s3 });
    }), p3(this, "ping", async (i4) => {
      this.isInitialized(), await this.isValidPing(i4), this.logger.warn("ping() is deprecated and will be removed in the next major release.");
      const { topic: s3 } = i4;
      if (this.pairings.keys.includes(s3)) {
        const n5 = await this.sendRequest(s3, "wc_pairingPing", {}), { done: o5, resolve: a3, reject: c7 } = ei();
        this.events.once(ci("pairing_ping", n5), ({ error: h6 }) => {
          h6 ? c7(h6) : a3();
        }), await o5();
      }
    }), p3(this, "updateExpiry", async ({ topic: i4, expiry: s3 }) => {
      this.isInitialized(), await this.pairings.update(i4, { expiry: s3 });
    }), p3(this, "updateMetadata", async ({ topic: i4, metadata: s3 }) => {
      this.isInitialized(), await this.pairings.update(i4, { peerMetadata: s3 });
    }), p3(this, "getPairings", () => (this.isInitialized(), this.pairings.values)), p3(this, "disconnect", async (i4) => {
      this.isInitialized(), await this.isValidDisconnect(i4);
      const { topic: s3 } = i4;
      this.pairings.keys.includes(s3) && (await this.sendRequest(s3, "wc_pairingDelete", Kt2("USER_DISCONNECTED")), await this.deletePairing(s3));
    }), p3(this, "formatUriFromPairing", (i4) => {
      this.isInitialized();
      const { topic: s3, relay: n5, expiry: o5, methods: a3 } = i4, c7 = this.core.crypto.keychain.get(s3);
      return oa({ protocol: this.core.protocol, version: this.core.version, topic: s3, symKey: c7, relay: n5, expiryTimestamp: o5, methods: a3 });
    }), p3(this, "sendRequest", async (i4, s3, n5) => {
      const o5 = formatJsonRpcRequest(s3, n5), a3 = await this.core.crypto.encode(i4, o5), c7 = se2[s3].req;
      return this.core.history.set(i4, o5), this.core.relayer.publish(i4, a3, c7), o5.id;
    }), p3(this, "sendResult", async (i4, s3, n5) => {
      const o5 = formatJsonRpcResult(i4, n5), a3 = await this.core.crypto.encode(s3, o5), c7 = (await this.core.history.get(s3, i4)).request.method, h6 = se2[c7].res;
      await this.core.relayer.publish(s3, a3, h6), await this.core.history.resolve(o5);
    }), p3(this, "sendError", async (i4, s3, n5) => {
      const o5 = formatJsonRpcError(i4, n5), a3 = await this.core.crypto.encode(s3, o5), c7 = (await this.core.history.get(s3, i4)).request.method, h6 = se2[c7] ? se2[c7].res : se2.unregistered_method.res;
      await this.core.relayer.publish(s3, a3, h6), await this.core.history.resolve(o5);
    }), p3(this, "deletePairing", async (i4, s3) => {
      await this.core.relayer.unsubscribe(i4), await Promise.all([this.pairings.delete(i4, Kt2("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(i4), s3 ? Promise.resolve() : this.core.expirer.del(i4)]);
    }), p3(this, "cleanup", async () => {
      const i4 = this.pairings.getAll().filter((s3) => fi(s3.expiry));
      await Promise.all(i4.map((s3) => this.deletePairing(s3.topic)));
    }), p3(this, "onRelayEventRequest", async (i4) => {
      const { topic: s3, payload: n5 } = i4;
      switch (n5.method) {
        case "wc_pairingPing":
          return await this.onPairingPingRequest(s3, n5);
        case "wc_pairingDelete":
          return await this.onPairingDeleteRequest(s3, n5);
        default:
          return await this.onUnknownRpcMethodRequest(s3, n5);
      }
    }), p3(this, "onRelayEventResponse", async (i4) => {
      const { topic: s3, payload: n5 } = i4, o5 = (await this.core.history.get(s3, n5.id)).request.method;
      switch (o5) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(s3, n5);
        default:
          return this.onUnknownRpcMethodResponse(o5);
      }
    }), p3(this, "onPairingPingRequest", async (i4, s3) => {
      const { id: n5 } = s3;
      try {
        this.isValidPing({ topic: i4 }), await this.sendResult(n5, i4, true), this.events.emit(re.ping, { id: n5, topic: i4 });
      } catch (o5) {
        await this.sendError(n5, i4, o5), this.logger.error(o5);
      }
    }), p3(this, "onPairingPingResponse", (i4, s3) => {
      const { id: n5 } = s3;
      setTimeout(() => {
        isJsonRpcResult(s3) ? this.events.emit(ci("pairing_ping", n5), {}) : isJsonRpcError(s3) && this.events.emit(ci("pairing_ping", n5), { error: s3.error });
      }, 500);
    }), p3(this, "onPairingDeleteRequest", async (i4, s3) => {
      const { id: n5 } = s3;
      try {
        this.isValidDisconnect({ topic: i4 }), await this.deletePairing(i4), this.events.emit(re.delete, { id: n5, topic: i4 });
      } catch (o5) {
        await this.sendError(n5, i4, o5), this.logger.error(o5);
      }
    }), p3(this, "onUnknownRpcMethodRequest", async (i4, s3) => {
      const { id: n5, method: o5 } = s3;
      try {
        if (this.registeredMethods.includes(o5)) return;
        const a3 = Kt2("WC_METHOD_UNSUPPORTED", o5);
        await this.sendError(n5, i4, a3), this.logger.error(a3);
      } catch (a3) {
        await this.sendError(n5, i4, a3), this.logger.error(a3);
      }
    }), p3(this, "onUnknownRpcMethodResponse", (i4) => {
      this.registeredMethods.includes(i4) || this.logger.error(Kt2("WC_METHOD_UNSUPPORTED", i4));
    }), p3(this, "isValidPair", (i4, s3) => {
      var n5;
      if (!Aa(i4)) {
        const { message: a3 } = Et3("MISSING_OR_INVALID", `pair() params: ${i4}`);
        throw s3.setError(Y2.malformed_pairing_uri), new Error(a3);
      }
      if (!ma(i4.uri)) {
        const { message: a3 } = Et3("MISSING_OR_INVALID", `pair() uri: ${i4.uri}`);
        throw s3.setError(Y2.malformed_pairing_uri), new Error(a3);
      }
      const o5 = ra(i4?.uri);
      if (!((n5 = o5?.relay) != null && n5.protocol)) {
        const { message: a3 } = Et3("MISSING_OR_INVALID", "pair() uri#relay-protocol");
        throw s3.setError(Y2.malformed_pairing_uri), new Error(a3);
      }
      if (!(o5 != null && o5.symKey)) {
        const { message: a3 } = Et3("MISSING_OR_INVALID", "pair() uri#symKey");
        throw s3.setError(Y2.malformed_pairing_uri), new Error(a3);
      }
      if (o5 != null && o5.expiryTimestamp && (0, import_time5.toMiliseconds)(o5?.expiryTimestamp) < Date.now()) {
        s3.setError(Y2.pairing_expired);
        const { message: a3 } = Et3("EXPIRED", "pair() URI has expired. Please try again with a new connection URI.");
        throw new Error(a3);
      }
    }), p3(this, "isValidPing", async (i4) => {
      if (!Aa(i4)) {
        const { message: n5 } = Et3("MISSING_OR_INVALID", `ping() params: ${i4}`);
        throw new Error(n5);
      }
      const { topic: s3 } = i4;
      await this.isValidPairingTopic(s3);
    }), p3(this, "isValidDisconnect", async (i4) => {
      if (!Aa(i4)) {
        const { message: n5 } = Et3("MISSING_OR_INVALID", `disconnect() params: ${i4}`);
        throw new Error(n5);
      }
      const { topic: s3 } = i4;
      await this.isValidPairingTopic(s3);
    }), p3(this, "isValidPairingTopic", async (i4) => {
      if (!it3(i4, false)) {
        const { message: s3 } = Et3("MISSING_OR_INVALID", `pairing topic should be a string: ${i4}`);
        throw new Error(s3);
      }
      if (!this.pairings.keys.includes(i4)) {
        const { message: s3 } = Et3("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i4}`);
        throw new Error(s3);
      }
      if (fi(this.pairings.get(i4).expiry)) {
        await this.deletePairing(i4);
        const { message: s3 } = Et3("EXPIRED", `pairing topic: ${i4}`);
        throw new Error(s3);
      }
    }), this.core = e2, this.logger = E2(t, this.name), this.pairings = new Li2(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return y2(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Et3("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(C3.message, async (e2) => {
      const { topic: t, message: i4, transportType: s3 } = e2;
      if (this.pairings.keys.includes(t) && s3 !== Q4.link_mode && !this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(i4))) try {
        const n5 = await this.core.crypto.decode(t, i4);
        isJsonRpcRequest(n5) ? (this.core.history.set(t, n5), await this.onRelayEventRequest({ topic: t, payload: n5 })) : isJsonRpcResponse(n5) && (await this.core.history.resolve(n5), await this.onRelayEventResponse({ topic: t, payload: n5 }), this.core.history.delete(t, n5.id)), await this.core.relayer.messages.ack(t, i4);
      } catch (n5) {
        this.logger.error(n5);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(M4.expired, async (e2) => {
      const { topic: t } = si(e2.target);
      t && this.pairings.keys.includes(t) && (await this.deletePairing(t, true), this.events.emit(re.expire, { topic: t }));
    });
  }
};
var jo4 = Object.defineProperty;
var Uo4 = (r3, e2, t) => e2 in r3 ? jo4(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var O4 = (r3, e2, t) => Uo4(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var ji2 = class extends I2 {
  constructor(e2, t) {
    super(e2, t), this.core = e2, this.logger = t, O4(this, "records", /* @__PURE__ */ new Map()), O4(this, "events", new import_events7.EventEmitter()), O4(this, "name", Bt4), O4(this, "version", Vt3), O4(this, "cached", []), O4(this, "initialized", false), O4(this, "storagePrefix", B2), O4(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i4) => this.records.set(i4.id, i4)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }), O4(this, "set", (i4, s3, n5) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: i4, request: s3, chainId: n5 }), this.records.has(s3.id)) return;
      const o5 = { id: s3.id, topic: i4, request: { method: s3.method, params: s3.params || null }, chainId: n5, expiry: ii(import_time5.THIRTY_DAYS) };
      this.records.set(o5.id, o5), this.persist(), this.events.emit(F2.created, o5);
    }), O4(this, "resolve", async (i4) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: i4 }), !this.records.has(i4.id)) return;
      const s3 = await this.getRecord(i4.id);
      typeof s3.response > "u" && (s3.response = isJsonRpcError(i4) ? { error: i4.error } : { result: i4.result }, this.records.set(s3.id, s3), this.persist(), this.events.emit(F2.updated, s3));
    }), O4(this, "get", async (i4, s3) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: i4, id: s3 }), await this.getRecord(s3))), O4(this, "delete", (i4, s3) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: s3 }), this.values.forEach((n5) => {
        if (n5.topic === i4) {
          if (typeof s3 < "u" && n5.id !== s3) return;
          this.records.delete(n5.id), this.events.emit(F2.deleted, n5);
        }
      }), this.persist();
    }), O4(this, "exists", async (i4, s3) => (this.isInitialized(), this.records.has(s3) ? (await this.getRecord(s3)).topic === i4 : false)), O4(this, "on", (i4, s3) => {
      this.events.on(i4, s3);
    }), O4(this, "once", (i4, s3) => {
      this.events.once(i4, s3);
    }), O4(this, "off", (i4, s3) => {
      this.events.off(i4, s3);
    }), O4(this, "removeListener", (i4, s3) => {
      this.events.removeListener(i4, s3);
    }), this.logger = E2(t, this.name);
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const e2 = [];
    return this.values.forEach((t) => {
      if (typeof t.response < "u") return;
      const i4 = { topic: t.topic, request: formatJsonRpcRequest(t.request.method, t.request.params, t.id), chainId: t.chainId };
      return e2.push(i4);
    }), e2;
  }
  async setJsonRpcRecords(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(e2) {
    this.isInitialized();
    const t = this.records.get(e2);
    if (!t) {
      const { message: i4 } = Et3("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw new Error(i4);
    }
    return t;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(F2.sync);
  }
  async restore() {
    try {
      const e2 = await this.getJsonRpcRecords();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.records.size) {
        const { message: t } = Et3("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e2);
    }
  }
  registerEventListeners() {
    this.events.on(F2.created, (e2) => {
      const t = F2.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
    }), this.events.on(F2.updated, (e2) => {
      const t = F2.updated;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
    }), this.events.on(F2.deleted, (e2) => {
      const t = F2.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, record: e2 });
    }), this.core.heartbeat.on(r.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.isInitialized();
      let e2 = false;
      this.records.forEach((t) => {
        (0, import_time5.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${t.id}`), this.records.delete(t.id), this.events.emit(F2.deleted, t, false), e2 = true);
      }), e2 && this.persist();
    } catch (e2) {
      this.logger.warn(e2);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Et3("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var Fo4 = Object.defineProperty;
var Mo4 = (r3, e2, t) => e2 in r3 ? Fo4(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var A2 = (r3, e2, t) => Mo4(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Ui2 = class extends S2 {
  constructor(e2, t) {
    super(e2, t), this.core = e2, this.logger = t, A2(this, "expirations", /* @__PURE__ */ new Map()), A2(this, "events", new import_events7.EventEmitter()), A2(this, "name", qt4), A2(this, "version", Gt4), A2(this, "cached", []), A2(this, "initialized", false), A2(this, "storagePrefix", B2), A2(this, "init", async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((i4) => this.expirations.set(i4.target, i4)), this.cached = [], this.registerEventListeners(), this.initialized = true);
    }), A2(this, "has", (i4) => {
      try {
        const s3 = this.formatTarget(i4);
        return typeof this.getExpiration(s3) < "u";
      } catch {
        return false;
      }
    }), A2(this, "set", (i4, s3) => {
      this.isInitialized();
      const n5 = this.formatTarget(i4), o5 = { target: n5, expiry: s3 };
      this.expirations.set(n5, o5), this.checkExpiry(n5, o5), this.events.emit(M4.created, { target: n5, expiration: o5 });
    }), A2(this, "get", (i4) => {
      this.isInitialized();
      const s3 = this.formatTarget(i4);
      return this.getExpiration(s3);
    }), A2(this, "del", (i4) => {
      if (this.isInitialized(), this.has(i4)) {
        const s3 = this.formatTarget(i4), n5 = this.getExpiration(s3);
        this.expirations.delete(s3), this.events.emit(M4.deleted, { target: s3, expiration: n5 });
      }
    }), A2(this, "on", (i4, s3) => {
      this.events.on(i4, s3);
    }), A2(this, "once", (i4, s3) => {
      this.events.once(i4, s3);
    }), A2(this, "off", (i4, s3) => {
      this.events.off(i4, s3);
    }), A2(this, "removeListener", (i4, s3) => {
      this.events.removeListener(i4, s3);
    }), this.logger = E2(t, this.name);
  }
  get context() {
    return y2(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(e2) {
    if (typeof e2 == "string") return ri(e2);
    if (typeof e2 == "number") return oi(e2);
    const { message: t } = Et3("UNKNOWN_TYPE", `Target type: ${typeof e2}`);
    throw new Error(t);
  }
  async setExpirations(e2) {
    await this.core.storage.setItem(this.storageKey, e2);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(M4.sync);
  }
  async restore() {
    try {
      const e2 = await this.getExpirations();
      if (typeof e2 > "u" || !e2.length) return;
      if (this.expirations.size) {
        const { message: t } = Et3("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(t), new Error(t);
      }
      this.cached = e2, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (e2) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e2);
    }
  }
  getExpiration(e2) {
    const t = this.expirations.get(e2);
    if (!t) {
      const { message: i4 } = Et3("NO_MATCHING_KEY", `${this.name}: ${e2}`);
      throw this.logger.warn(i4), new Error(i4);
    }
    return t;
  }
  checkExpiry(e2, t) {
    const { expiry: i4 } = t;
    (0, import_time5.toMiliseconds)(i4) - Date.now() <= 0 && this.expire(e2, t);
  }
  expire(e2, t) {
    this.expirations.delete(e2), this.events.emit(M4.expired, { target: e2, expiration: t });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((e2, t) => this.checkExpiry(t, e2));
  }
  registerEventListeners() {
    this.core.heartbeat.on(r.pulse, () => this.checkExpirations()), this.events.on(M4.created, (e2) => {
      const t = M4.created;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    }), this.events.on(M4.expired, (e2) => {
      const t = M4.expired;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    }), this.events.on(M4.deleted, (e2) => {
      const t = M4.deleted;
      this.logger.info(`Emitting ${t}`), this.logger.debug({ type: "event", event: t, data: e2 }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: e2 } = Et3("NOT_INITIALIZED", this.name);
      throw new Error(e2);
    }
  }
};
var Ko4 = Object.defineProperty;
var Bo4 = (r3, e2, t) => e2 in r3 ? Ko4(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var w3 = (r3, e2, t) => Bo4(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Fi2 = class extends M {
  constructor(e2, t, i4) {
    super(e2, t, i4), this.core = e2, this.logger = t, this.store = i4, w3(this, "name", Wt3), w3(this, "abortController"), w3(this, "isDevEnv"), w3(this, "verifyUrlV3", Yt3), w3(this, "storagePrefix", B2), w3(this, "version", Le4), w3(this, "publicKey"), w3(this, "fetchPromise"), w3(this, "init", async () => {
      var s3;
      this.isDevEnv || (this.publicKey = await this.store.getItem(this.storeKey), this.publicKey && (0, import_time5.toMiliseconds)((s3 = this.publicKey) == null ? void 0 : s3.expiresAt) < Date.now() && (this.logger.debug("verify v2 public key expired"), await this.removePublicKey()));
    }), w3(this, "register", async (s3) => {
      if (!zt3() || this.isDevEnv) return;
      const n5 = window.location.origin, { id: o5, decryptedId: a3 } = s3, c7 = `${this.verifyUrlV3}/attestation?projectId=${this.core.projectId}&origin=${n5}&id=${o5}&decryptedId=${a3}`;
      try {
        const h6 = (0, import_window_getters2.getDocument)(), l8 = this.startAbortTimer(import_time5.ONE_SECOND * 5), d5 = await new Promise((g4, _3) => {
          const u3 = () => {
            window.removeEventListener("message", x7), h6.body.removeChild(b5), _3("attestation aborted");
          };
          this.abortController.signal.addEventListener("abort", u3);
          const b5 = h6.createElement("iframe");
          b5.src = c7, b5.style.display = "none", b5.addEventListener("error", u3, { signal: this.abortController.signal });
          const x7 = (I5) => {
            if (I5.data && typeof I5.data == "string") try {
              const D4 = JSON.parse(I5.data);
              if (D4.type === "verify_attestation") {
                if (sn(D4.attestation).payload.id !== o5) return;
                clearInterval(l8), h6.body.removeChild(b5), this.abortController.signal.removeEventListener("abort", u3), window.removeEventListener("message", x7), g4(D4.attestation === null ? "" : D4.attestation);
              }
            } catch (D4) {
              this.logger.warn(D4);
            }
          };
          h6.body.appendChild(b5), window.addEventListener("message", x7, { signal: this.abortController.signal });
        });
        return this.logger.debug("jwt attestation", d5), d5;
      } catch (h6) {
        this.logger.warn(h6);
      }
      return "";
    }), w3(this, "resolve", async (s3) => {
      if (this.isDevEnv) return "";
      const { attestationId: n5, hash: o5, encryptedId: a3 } = s3;
      if (n5 === "") {
        this.logger.debug("resolve: attestationId is empty, skipping");
        return;
      }
      if (n5) {
        if (sn(n5).payload.id !== a3) return;
        const h6 = await this.isValidJwtAttestation(n5);
        if (h6) {
          if (!h6.isVerified) {
            this.logger.warn("resolve: jwt attestation: origin url not verified");
            return;
          }
          return h6;
        }
      }
      if (!o5) return;
      const c7 = this.getVerifyUrl(s3?.verifyUrl);
      return this.fetchAttestation(o5, c7);
    }), w3(this, "fetchAttestation", async (s3, n5) => {
      this.logger.debug(`resolving attestation: ${s3} from url: ${n5}`);
      const o5 = this.startAbortTimer(import_time5.ONE_SECOND * 5), a3 = await fetch(`${n5}/attestation/${s3}?v2Supported=true`, { signal: this.abortController.signal });
      return clearTimeout(o5), a3.status === 200 ? await a3.json() : void 0;
    }), w3(this, "getVerifyUrl", (s3) => {
      let n5 = s3 || ue2;
      return Jt3.includes(n5) || (this.logger.info(`verify url: ${n5}, not included in trusted list, assigning default: ${ue2}`), n5 = ue2), n5;
    }), w3(this, "fetchPublicKey", async () => {
      try {
        this.logger.debug(`fetching public key from: ${this.verifyUrlV3}`);
        const s3 = this.startAbortTimer(import_time5.FIVE_SECONDS), n5 = await fetch(`${this.verifyUrlV3}/public-key`, { signal: this.abortController.signal });
        return clearTimeout(s3), await n5.json();
      } catch (s3) {
        this.logger.warn(s3);
      }
    }), w3(this, "persistPublicKey", async (s3) => {
      this.logger.debug("persisting public key to local storage", s3), await this.store.setItem(this.storeKey, s3), this.publicKey = s3;
    }), w3(this, "removePublicKey", async () => {
      this.logger.debug("removing verify v2 public key from storage"), await this.store.removeItem(this.storeKey), this.publicKey = void 0;
    }), w3(this, "isValidJwtAttestation", async (s3) => {
      const n5 = await this.getPublicKey();
      try {
        if (n5) return this.validateAttestation(s3, n5);
      } catch (a3) {
        this.logger.error(a3), this.logger.warn("error validating attestation");
      }
      const o5 = await this.fetchAndPersistPublicKey();
      try {
        if (o5) return this.validateAttestation(s3, o5);
      } catch (a3) {
        this.logger.error(a3), this.logger.warn("error validating attestation");
      }
    }), w3(this, "getPublicKey", async () => this.publicKey ? this.publicKey : await this.fetchAndPersistPublicKey()), w3(this, "fetchAndPersistPublicKey", async () => {
      if (this.fetchPromise) return await this.fetchPromise, this.publicKey;
      this.fetchPromise = new Promise(async (n5) => {
        const o5 = await this.fetchPublicKey();
        o5 && (await this.persistPublicKey(o5), n5(o5));
      });
      const s3 = await this.fetchPromise;
      return this.fetchPromise = void 0, s3;
    }), w3(this, "validateAttestation", (s3, n5) => {
      const o5 = ta(s3, n5.publicKey), a3 = { hasExpired: (0, import_time5.toMiliseconds)(o5.exp) < Date.now(), payload: o5 };
      if (a3.hasExpired) throw this.logger.warn("resolve: jwt attestation expired"), new Error("JWT attestation expired");
      return { origin: a3.payload.origin, isScam: a3.payload.isScam, isVerified: a3.payload.isVerified };
    }), this.logger = E2(t, this.name), this.abortController = new AbortController(), this.isDevEnv = hi(), this.init();
  }
  get storeKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//verify:public:key";
  }
  get context() {
    return y2(this.logger);
  }
  startAbortTimer(e2) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), (0, import_time5.toMiliseconds)(e2));
  }
};
var Vo4 = Object.defineProperty;
var qo4 = (r3, e2, t) => e2 in r3 ? Vo4(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var Mi2 = (r3, e2, t) => qo4(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Ki2 = class extends O3 {
  constructor(e2, t) {
    super(e2, t), this.projectId = e2, this.logger = t, Mi2(this, "context", Xt4), Mi2(this, "registerDeviceToken", async (i4) => {
      const { clientId: s3, token: n5, notificationType: o5, enableEncrypted: a3 = false } = i4, c7 = `${Zt3}/${this.projectId}/clients`;
      await fetch(c7, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: s3, type: o5, token: n5, always_raw: a3 }) });
    }), this.logger = E2(t, this.context);
  }
};
var Go4 = Object.defineProperty;
var Bi2 = Object.getOwnPropertySymbols;
var Wo4 = Object.prototype.hasOwnProperty;
var Ho4 = Object.prototype.propertyIsEnumerable;
var Ze4 = (r3, e2, t) => e2 in r3 ? Go4(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var be4 = (r3, e2) => {
  for (var t in e2 || (e2 = {})) Wo4.call(e2, t) && Ze4(r3, t, e2[t]);
  if (Bi2) for (var t of Bi2(e2)) Ho4.call(e2, t) && Ze4(r3, t, e2[t]);
  return r3;
};
var E3 = (r3, e2, t) => Ze4(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Vi2 = class extends R {
  constructor(e2, t, i4 = true) {
    super(e2, t, i4), this.core = e2, this.logger = t, E3(this, "context", ei2), E3(this, "storagePrefix", B2), E3(this, "storageVersion", Qt4), E3(this, "events", /* @__PURE__ */ new Map()), E3(this, "shouldPersist", false), E3(this, "init", async () => {
      if (!hi()) try {
        const s3 = { eventId: di(), timestamp: Date.now(), domain: this.getAppDomain(), props: { event: "INIT", type: "", properties: { client_id: await this.core.crypto.getClientId(), user_agent: cr3(this.core.relayer.protocol, this.core.relayer.version, _e4) } } };
        await this.sendEvent([s3]);
      } catch (s3) {
        this.logger.warn(s3);
      }
    }), E3(this, "createEvent", (s3) => {
      const { event: n5 = "ERROR", type: o5 = "", properties: { topic: a3, trace: c7 } } = s3, h6 = di(), l8 = this.core.projectId || "", d5 = Date.now(), g4 = be4({ eventId: h6, timestamp: d5, props: { event: n5, type: o5, properties: { topic: a3, trace: c7 } }, bundleId: l8, domain: this.getAppDomain() }, this.setMethods(h6));
      return this.telemetryEnabled && (this.events.set(h6, g4), this.shouldPersist = true), g4;
    }), E3(this, "getEvent", (s3) => {
      const { eventId: n5, topic: o5 } = s3;
      if (n5) return this.events.get(n5);
      const a3 = Array.from(this.events.values()).find((c7) => c7.props.properties.topic === o5);
      if (a3) return be4(be4({}, a3), this.setMethods(a3.eventId));
    }), E3(this, "deleteEvent", (s3) => {
      const { eventId: n5 } = s3;
      this.events.delete(n5), this.shouldPersist = true;
    }), E3(this, "setEventListeners", () => {
      this.core.heartbeat.on(r.pulse, async () => {
        this.shouldPersist && await this.persist(), this.events.forEach((s3) => {
          (0, import_time5.fromMiliseconds)(Date.now()) - (0, import_time5.fromMiliseconds)(s3.timestamp) > ti && (this.events.delete(s3.eventId), this.shouldPersist = true);
        });
      });
    }), E3(this, "setMethods", (s3) => ({ addTrace: (n5) => this.addTrace(s3, n5), setError: (n5) => this.setError(s3, n5) })), E3(this, "addTrace", (s3, n5) => {
      const o5 = this.events.get(s3);
      o5 && (o5.props.properties.trace.push(n5), this.events.set(s3, o5), this.shouldPersist = true);
    }), E3(this, "setError", (s3, n5) => {
      const o5 = this.events.get(s3);
      o5 && (o5.props.type = n5, o5.timestamp = Date.now(), this.events.set(s3, o5), this.shouldPersist = true);
    }), E3(this, "persist", async () => {
      await this.core.storage.setItem(this.storageKey, Array.from(this.events.values())), this.shouldPersist = false;
    }), E3(this, "restore", async () => {
      try {
        const s3 = await this.core.storage.getItem(this.storageKey) || [];
        if (!s3.length) return;
        s3.forEach((n5) => {
          this.events.set(n5.eventId, be4(be4({}, n5), this.setMethods(n5.eventId)));
        });
      } catch (s3) {
        this.logger.warn(s3);
      }
    }), E3(this, "submit", async () => {
      if (!this.telemetryEnabled || this.events.size === 0) return;
      const s3 = [];
      for (const [n5, o5] of this.events) o5.props.type && s3.push(o5);
      if (s3.length !== 0) try {
        if ((await this.sendEvent(s3)).ok) for (const n5 of s3) this.events.delete(n5.eventId), this.shouldPersist = true;
      } catch (n5) {
        this.logger.warn(n5);
      }
    }), E3(this, "sendEvent", async (s3) => {
      const n5 = this.getAppDomain() ? "" : "&sp=desktop";
      return await fetch(`${ii2}?projectId=${this.core.projectId}&st=events_sdk&sv=js-${_e4}${n5}`, { method: "POST", body: JSON.stringify(s3) });
    }), E3(this, "getAppDomain", () => sr3().url), this.logger = E2(t, this.context), this.telemetryEnabled = i4, i4 ? this.restore().then(async () => {
      await this.submit(), this.setEventListeners();
    }) : this.persist();
  }
  get storageKey() {
    return this.storagePrefix + this.storageVersion + this.core.customStoragePrefix + "//" + this.context;
  }
};
var Yo4 = Object.defineProperty;
var qi2 = Object.getOwnPropertySymbols;
var Jo4 = Object.prototype.hasOwnProperty;
var Xo2 = Object.prototype.propertyIsEnumerable;
var Qe3 = (r3, e2, t) => e2 in r3 ? Yo4(r3, e2, { enumerable: true, configurable: true, writable: true, value: t }) : r3[e2] = t;
var Gi2 = (r3, e2) => {
  for (var t in e2 || (e2 = {})) Jo4.call(e2, t) && Qe3(r3, t, e2[t]);
  if (qi2) for (var t of qi2(e2)) Xo2.call(e2, t) && Qe3(r3, t, e2[t]);
  return r3;
};
var v4 = (r3, e2, t) => Qe3(r3, typeof e2 != "symbol" ? e2 + "" : e2, t);
var Te4 = class _Te extends h3 {
  constructor(e2) {
    var t;
    super(e2), v4(this, "protocol", ze3), v4(this, "version", Le4), v4(this, "name", he4), v4(this, "relayUrl"), v4(this, "projectId"), v4(this, "customStoragePrefix"), v4(this, "events", new import_events7.EventEmitter()), v4(this, "logger"), v4(this, "heartbeat"), v4(this, "relayer"), v4(this, "crypto"), v4(this, "storage"), v4(this, "history"), v4(this, "expirer"), v4(this, "pairing"), v4(this, "verify"), v4(this, "echoClient"), v4(this, "linkModeSupportedApps"), v4(this, "eventClient"), v4(this, "initialized", false), v4(this, "logChunkController"), v4(this, "on", (a3, c7) => this.events.on(a3, c7)), v4(this, "once", (a3, c7) => this.events.once(a3, c7)), v4(this, "off", (a3, c7) => this.events.off(a3, c7)), v4(this, "removeListener", (a3, c7) => this.events.removeListener(a3, c7)), v4(this, "dispatchEnvelope", ({ topic: a3, message: c7, sessionExists: h6 }) => {
      if (!a3 || !c7) return;
      const l8 = { topic: a3, message: c7, publishedAt: Date.now(), transportType: Q4.link_mode };
      this.relayer.onLinkMessageEvent(l8, { sessionExists: h6 });
    });
    const i4 = this.getGlobalCore(e2?.customStoragePrefix);
    if (i4) try {
      return this.customStoragePrefix = i4.customStoragePrefix, this.logger = i4.logger, this.heartbeat = i4.heartbeat, this.crypto = i4.crypto, this.history = i4.history, this.expirer = i4.expirer, this.storage = i4.storage, this.relayer = i4.relayer, this.pairing = i4.pairing, this.verify = i4.verify, this.echoClient = i4.echoClient, this.linkModeSupportedApps = i4.linkModeSupportedApps, this.eventClient = i4.eventClient, this.initialized = i4.initialized, this.logChunkController = i4.logChunkController, i4;
    } catch (a3) {
      console.warn("Failed to copy global core", a3);
    }
    this.projectId = e2?.projectId, this.relayUrl = e2?.relayUrl || Ue4, this.customStoragePrefix = e2 != null && e2.customStoragePrefix ? `:${e2.customStoragePrefix}` : "";
    const s3 = k2({ level: typeof e2?.logger == "string" && e2.logger ? e2.logger : Et4.logger, name: he4 }), { logger: n5, chunkLoggerController: o5 } = A({ opts: s3, maxSizeInBytes: e2?.maxLogBlobSizeInBytes, loggerOverride: e2?.logger });
    this.logChunkController = o5, (t = this.logChunkController) != null && t.downloadLogsBlobInBrowser && (window.downloadLogsBlobInBrowser = async () => {
      var a3, c7;
      (a3 = this.logChunkController) != null && a3.downloadLogsBlobInBrowser && ((c7 = this.logChunkController) == null || c7.downloadLogsBlobInBrowser({ clientId: await this.crypto.getClientId() }));
    }), this.logger = E2(n5, this.name), this.heartbeat = new i(), this.crypto = new wi2(this, this.logger, e2?.keychain), this.history = new ji2(this, this.logger), this.expirer = new Ui2(this, this.logger), this.storage = e2 != null && e2.storage ? e2.storage : new h(Gi2(Gi2({}, It4), e2?.storageOptions)), this.relayer = new Oi2({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new ki2(this, this.logger), this.verify = new Fi2(this, this.logger, this.storage), this.echoClient = new Ki2(this.projectId || "", this.logger), this.linkModeSupportedApps = [], this.eventClient = new Vi2(this, this.logger, e2?.telemetryEnabled), this.setGlobalCore(this);
  }
  static async init(e2) {
    const t = new _Te(e2);
    await t.initialize();
    const i4 = await t.crypto.getClientId();
    return await t.storage.setItem(jt3, i4), t;
  }
  get context() {
    return y2(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async getLogsBlob() {
    var e2;
    return (e2 = this.logChunkController) == null ? void 0 : e2.logsToBlob({ clientId: await this.crypto.getClientId() });
  }
  async addLinkModeSupportedApp(e2) {
    this.linkModeSupportedApps.includes(e2) || (this.linkModeSupportedApps.push(e2), await this.storage.setItem(Fe2, this.linkModeSupportedApps));
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.linkModeSupportedApps = await this.storage.getItem(Fe2) || [], this.initialized = true, this.logger.info("Core Initialization Success");
    } catch (e2) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e2), this.logger.error(e2.message), e2;
    }
  }
  getGlobalCore(e2 = "") {
    try {
      if (this.isGlobalCoreDisabled()) return;
      const t = `_walletConnectCore_${e2}`, i4 = `${t}_count`;
      return globalThis[i4] = (globalThis[i4] || 0) + 1, globalThis[i4] > 1 && console.warn(`WalletConnect Core is already initialized. This is probably a mistake and can lead to unexpected behavior. Init() was called ${globalThis[i4]} times.`), globalThis[t];
    } catch (t) {
      console.warn("Failed to get global WalletConnect core", t);
      return;
    }
  }
  setGlobalCore(e2) {
    var t;
    try {
      if (this.isGlobalCoreDisabled()) return;
      const i4 = `_walletConnectCore_${((t = e2.opts) == null ? void 0 : t.customStoragePrefix) || ""}`;
      globalThis[i4] = e2;
    } catch (i4) {
      console.warn("Failed to set global WalletConnect core", i4);
    }
  }
  isGlobalCoreDisabled() {
    try {
      return typeof process < "u" && process.env.DISABLE_GLOBAL_CORE === "true";
    } catch {
      return true;
    }
  }
};
var Zo4 = Te4;

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/sign-client/dist/index.es.js
var import_events8 = __toESM(require_events());
var import_time6 = __toESM(require_cjs());
var Ce5 = "wc";
var ke5 = 2;
var De4 = "client";
var me4 = `${Ce5}@${ke5}:${De4}:`;
var we4 = { name: De4, logger: "error", controller: false, relayUrl: "wss://relay.walletconnect.org" };
var Le5 = "WALLETCONNECT_DEEPLINK_CHOICE";
var ht4 = "proposal";
var Me5 = "Proposal expired";
var dt3 = "session";
var X2 = import_time6.SEVEN_DAYS;
var ut4 = "engine";
var N11 = { wc_sessionPropose: { req: { ttl: import_time6.FIVE_MINUTES, prompt: true, tag: 1100 }, res: { ttl: import_time6.FIVE_MINUTES, prompt: false, tag: 1101 }, reject: { ttl: import_time6.FIVE_MINUTES, prompt: false, tag: 1120 }, autoReject: { ttl: import_time6.FIVE_MINUTES, prompt: false, tag: 1121 } }, wc_sessionSettle: { req: { ttl: import_time6.FIVE_MINUTES, prompt: false, tag: 1102 }, res: { ttl: import_time6.FIVE_MINUTES, prompt: false, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: import_time6.ONE_DAY, prompt: false, tag: 1104 }, res: { ttl: import_time6.ONE_DAY, prompt: false, tag: 1105 } }, wc_sessionExtend: { req: { ttl: import_time6.ONE_DAY, prompt: false, tag: 1106 }, res: { ttl: import_time6.ONE_DAY, prompt: false, tag: 1107 } }, wc_sessionRequest: { req: { ttl: import_time6.FIVE_MINUTES, prompt: true, tag: 1108 }, res: { ttl: import_time6.FIVE_MINUTES, prompt: false, tag: 1109 } }, wc_sessionEvent: { req: { ttl: import_time6.FIVE_MINUTES, prompt: true, tag: 1110 }, res: { ttl: import_time6.FIVE_MINUTES, prompt: false, tag: 1111 } }, wc_sessionDelete: { req: { ttl: import_time6.ONE_DAY, prompt: false, tag: 1112 }, res: { ttl: import_time6.ONE_DAY, prompt: false, tag: 1113 } }, wc_sessionPing: { req: { ttl: import_time6.ONE_DAY, prompt: false, tag: 1114 }, res: { ttl: import_time6.ONE_DAY, prompt: false, tag: 1115 } }, wc_sessionAuthenticate: { req: { ttl: import_time6.ONE_HOUR, prompt: true, tag: 1116 }, res: { ttl: import_time6.ONE_HOUR, prompt: false, tag: 1117 }, reject: { ttl: import_time6.FIVE_MINUTES, prompt: false, tag: 1118 }, autoReject: { ttl: import_time6.FIVE_MINUTES, prompt: false, tag: 1119 } } };
var _e5 = { min: import_time6.FIVE_MINUTES, max: import_time6.SEVEN_DAYS };
var $2 = { idle: "IDLE", active: "ACTIVE" };
var gt4 = { eth_sendTransaction: { key: "" }, eth_sendRawTransaction: { key: "" }, wallet_sendCalls: { key: "" }, solana_signTransaction: { key: "signature" }, solana_signAllTransactions: { key: "transactions" }, solana_signAndSendTransaction: { key: "signature" }, sui_signAndExecuteTransaction: { key: "digest" }, sui_signTransaction: { key: "" }, hedera_signAndExecuteTransaction: { key: "transactionId" }, hedera_executeTransaction: { key: "transactionId" }, near_signTransaction: { key: "" }, near_signTransactions: { key: "" }, tron_signTransaction: { key: "txID" }, xrpl_signTransaction: { key: "" }, xrpl_signTransactionFor: { key: "" }, algo_signTxn: { key: "" }, sendTransfer: { key: "txid" }, stacks_stxTransfer: { key: "txId" }, polkadot_signTransaction: { key: "" }, cosmos_signDirect: { key: "" } };
var yt3 = "request";
var mt2 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest", "wc_sessionAuthenticate"];
var wt4 = "wc";
var _t4 = "auth";
var Et5 = "authKeys";
var ft3 = "pairingTopics";
var St5 = "requests";
var ae2 = `${wt4}@${1.5}:${_t4}:`;
var ce2 = `${ae2}:PUB_KEY`;
var Os = Object.defineProperty;
var bs2 = Object.defineProperties;
var As = Object.getOwnPropertyDescriptors;
var Rt5 = Object.getOwnPropertySymbols;
var xs2 = Object.prototype.hasOwnProperty;
var Vs2 = Object.prototype.propertyIsEnumerable;
var $e4 = (S5, o5, t) => o5 in S5 ? Os(S5, o5, { enumerable: true, configurable: true, writable: true, value: t }) : S5[o5] = t;
var I3 = (S5, o5) => {
  for (var t in o5 || (o5 = {})) xs2.call(o5, t) && $e4(S5, t, o5[t]);
  if (Rt5) for (var t of Rt5(o5)) Vs2.call(o5, t) && $e4(S5, t, o5[t]);
  return S5;
};
var x5 = (S5, o5) => bs2(S5, As(o5));
var c5 = (S5, o5, t) => $e4(S5, typeof o5 != "symbol" ? o5 + "" : o5, t);
var Cs2 = class extends V {
  constructor(o5) {
    super(o5), c5(this, "name", ut4), c5(this, "events", new import_events8.default()), c5(this, "initialized", false), c5(this, "requestQueue", { state: $2.idle, queue: [] }), c5(this, "sessionRequestQueue", { state: $2.idle, queue: [] }), c5(this, "emittedSessionRequests", new gi({ limit: 500 })), c5(this, "requestQueueDelay", import_time6.ONE_SECOND), c5(this, "expectedPairingMethodMap", /* @__PURE__ */ new Map()), c5(this, "recentlyDeletedMap", /* @__PURE__ */ new Map()), c5(this, "recentlyDeletedLimit", 200), c5(this, "relayMessageCache", []), c5(this, "pendingSessions", /* @__PURE__ */ new Map()), c5(this, "init", async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), await this.registerLinkModeListeners(), this.client.core.pairing.register({ methods: Object.keys(N11) }), this.initialized = true, setTimeout(async () => {
        await this.processPendingMessageEvents(), this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, (0, import_time6.toMiliseconds)(this.requestQueueDelay)));
    }), c5(this, "connect", async (t) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      const e2 = x5(I3({}, t), { requiredNamespaces: t.requiredNamespaces || {}, optionalNamespaces: t.optionalNamespaces || {} });
      await this.isValidConnect(e2), e2.optionalNamespaces = ba(e2.requiredNamespaces, e2.optionalNamespaces), e2.requiredNamespaces = {};
      const { pairingTopic: s3, requiredNamespaces: i4, optionalNamespaces: r3, sessionProperties: n5, scopedProperties: a3, relays: l8 } = e2;
      let p5 = s3, h6, u3 = false;
      try {
        if (p5) {
          const T5 = this.client.core.pairing.pairings.get(p5);
          this.client.logger.warn("connect() with existing pairing topic is deprecated and will be removed in the next major release."), u3 = T5.active;
        }
      } catch (T5) {
        throw this.client.logger.error(`connect() -> pairing.get(${p5}) failed`), T5;
      }
      if (!p5 || !u3) {
        const { topic: T5, uri: K5 } = await this.client.core.pairing.create({
          internal: {
            skipSubscribe: true
          }
        });
        p5 = T5, h6 = K5;
      }
      if (!p5) {
        const { message: T5 } = Et3("NO_MATCHING_KEY", `connect() pairing topic: ${p5}`);
        throw new Error(T5);
      }
      const d5 = await this.client.core.crypto.generateKeyPair(), w5 = N11.wc_sessionPropose.req.ttl || import_time6.FIVE_MINUTES, m4 = ii(w5), y6 = x5(I3(I3({ requiredNamespaces: i4, optionalNamespaces: r3, relays: l8 ?? [{ protocol: xt4 }], proposer: { publicKey: d5, metadata: this.client.metadata }, expiryTimestamp: m4, pairingTopic: p5 }, n5 && { sessionProperties: n5 }), a3 && { scopedProperties: a3 }), { id: payloadId() }), E6 = ci("session_connect", y6.id), { reject: _3, resolve: V4, done: C5 } = ei(w5, Me5), v6 = ({ id: T5 }) => {
        T5 === y6.id && (this.client.events.off("proposal_expire", v6), this.pendingSessions.delete(y6.id), this.events.emit(E6, { error: { message: Me5, code: 0 } }));
      };
      console.log("[WC][runtime] proposal json", JSON.parse(JSON.stringify(y6)));
      console.log("[WC][runtime] requiredNamespaces", JSON.parse(JSON.stringify(i4)));
      console.log("[WC][runtime] optionalNamespaces", JSON.parse(JSON.stringify(r3)));
      console.log("[WC][runtime] relay protocol", l8 ?? [{ protocol: xt4 }]);
      console.log("[WC][runtime] pairing topic", p5);
      console.log("[WC][runtime] proposal id", y6.id);
      return this.client.events.on("proposal_expire", v6), this.events.once(E6, ({ error: T5, session: K5 }) => {
        this.client.events.off("proposal_expire", v6), T5 ? _3(T5) : K5 && V4(K5);
      }), await this.sendRequest({ topic: p5, method: "wc_sessionPropose", params: y6, throwOnFailedPublish: true, clientRpcId: y6.id }), await this.setProposal(y6.id, y6), { uri: h6, approval: C5 };
    }), c5(this, "pair", async (t) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        return await this.client.core.pairing.pair(t);
      } catch (e2) {
        console.error("[WC][runtime] pairing creation failed", e2, e2 && e2.stack);
        throw this.client.logger.error("pair() failed"), e2;
      }
    }), c5(this, "approve", async (t) => {
      var e2, s3, i4;
      const r3 = this.client.core.eventClient.createEvent({ properties: { topic: (e2 = t?.id) == null ? void 0 : e2.toString(), trace: [tr4.session_approve_started] } });
      try {
        this.isInitialized(), await this.confirmOnlineStateOrThrow();
      } catch (q2) {
        throw r3.setError(ir4.no_internet_connection), q2;
      }
      try {
        await this.isValidProposalId(t?.id);
      } catch (q2) {
        throw this.client.logger.error(`approve() -> proposal.get(${t?.id}) failed`), r3.setError(ir4.proposal_not_found), q2;
      }
      try {
        await this.isValidApprove(t);
      } catch (q2) {
        console.error("[WC][runtime] approve validation failed", q2, q2 && q2.stack);
        if (q2 && ((q2.message || "").toLowerCase().includes("unsupported chains") || q2.code === 5100)) console.error("[WC][runtime] unsupported chains error", q2, q2 && q2.stack);
        throw this.client.logger.error("approve() -> isValidApprove() failed"), r3.setError(ir4.session_approve_namespace_validation_failure), q2;
      }
      const { id: n5, relayProtocol: a3, namespaces: l8, sessionProperties: p5, scopedProperties: h6, sessionConfig: u3 } = t, d5 = this.client.proposal.get(n5);
      this.client.core.eventClient.deleteEvent({ eventId: r3.eventId });
      const { pairingTopic: w5, proposer: m4, requiredNamespaces: y6, optionalNamespaces: E6 } = d5;
      let _3 = (s3 = this.client.core.eventClient) == null ? void 0 : s3.getEvent({ topic: w5 });
      _3 || (_3 = (i4 = this.client.core.eventClient) == null ? void 0 : i4.createEvent({ type: tr4.session_approve_started, properties: { topic: w5, trace: [tr4.session_approve_started, tr4.session_namespaces_validation_success] } }));
      const V4 = await this.client.core.crypto.generateKeyPair(), C5 = m4.publicKey, v6 = await this.client.core.crypto.generateSharedKey(V4, C5), T5 = I3(I3(I3({ relay: { protocol: a3 ?? "irn" }, namespaces: l8, controller: { publicKey: V4, metadata: this.client.metadata }, expiry: ii(X2) }, p5 && { sessionProperties: p5 }), h6 && { scopedProperties: h6 }), u3 && { sessionConfig: u3 }), K5 = Q4.relay;
      _3.addTrace(tr4.subscribing_session_topic);
      try {
        await this.client.core.relayer.subscribe(v6, { transportType: K5 });
      } catch (q2) {
        throw _3.setError(ir4.subscribe_session_topic_failure), q2;
      }
      _3.addTrace(tr4.subscribe_session_topic_success);
      const fe6 = x5(I3({}, T5), { topic: v6, requiredNamespaces: y6, optionalNamespaces: E6, pairingTopic: w5, acknowledged: false, self: T5.controller, peer: { publicKey: m4.publicKey, metadata: m4.metadata }, controller: V4, transportType: Q4.relay });
      await this.client.session.set(v6, fe6), _3.addTrace(tr4.store_session);
      try {
        _3.addTrace(tr4.publishing_session_settle), await this.sendRequest({ topic: v6, method: "wc_sessionSettle", params: T5, throwOnFailedPublish: true }).catch((q2) => {
          throw _3?.setError(ir4.session_settle_publish_failure), q2;
        }), _3.addTrace(tr4.session_settle_publish_success), _3.addTrace(tr4.publishing_session_approve), await this.sendResult({ id: n5, topic: w5, result: { relay: { protocol: a3 ?? "irn" }, responderPublicKey: V4 }, throwOnFailedPublish: true }).catch((q2) => {
          throw _3?.setError(ir4.session_approve_publish_failure), q2;
        }), _3.addTrace(tr4.session_approve_publish_success);
      } catch (q2) {
        throw this.client.logger.error(q2), this.client.session.delete(v6, Kt2("USER_DISCONNECTED")), await this.client.core.relayer.unsubscribe(v6), q2;
      }
      return this.client.core.eventClient.deleteEvent({ eventId: _3.eventId }), await this.client.core.pairing.updateMetadata({ topic: w5, metadata: m4.metadata }), await this.deleteProposal(n5), await this.client.core.pairing.activate({ topic: w5 }), await this.setExpiry(v6, ii(X2)), { topic: v6, acknowledged: () => Promise.resolve(this.client.session.get(v6)) };
    }), c5(this, "reject", async (t) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidReject(t);
      } catch (r3) {
        throw this.client.logger.error("reject() -> isValidReject() failed"), r3;
      }
      const { id: e2, reason: s3 } = t;
      let i4;
      try {
        i4 = this.client.proposal.get(e2).pairingTopic;
      } catch (r3) {
        console.error("[WC][runtime] reject proposal lookup failed", r3, r3 && r3.stack);
        throw this.client.logger.error(`reject() -> proposal.get(${e2}) failed`), r3;
      }
      console.log("[WC][runtime] proposal rejection reason", JSON.parse(JSON.stringify(s3)));
      i4 && await this.sendError({ id: e2, topic: i4, error: s3, rpcOpts: N11.wc_sessionPropose.reject }), await this.deleteProposal(e2);
    }), c5(this, "update", async (t) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidUpdate(t);
      } catch (h6) {
        throw this.client.logger.error("update() -> isValidUpdate() failed"), h6;
      }
      const { topic: e2, namespaces: s3 } = t, { done: i4, resolve: r3, reject: n5 } = ei(), a3 = payloadId(), l8 = getBigIntRpcId().toString(), p5 = this.client.session.get(e2).namespaces;
      return this.events.once(ci("session_update", a3), ({ error: h6 }) => {
        h6 ? n5(h6) : r3();
      }), await this.client.session.update(e2, { namespaces: s3 }), await this.sendRequest({ topic: e2, method: "wc_sessionUpdate", params: { namespaces: s3 }, throwOnFailedPublish: true, clientRpcId: a3, relayRpcId: l8 }).catch((h6) => {
        this.client.logger.error(h6), this.client.session.update(e2, { namespaces: p5 }), n5(h6);
      }), { acknowledged: i4 };
    }), c5(this, "extend", async (t) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidExtend(t);
      } catch (a3) {
        throw this.client.logger.error("extend() -> isValidExtend() failed"), a3;
      }
      const { topic: e2 } = t, s3 = payloadId(), { done: i4, resolve: r3, reject: n5 } = ei();
      return this.events.once(ci("session_extend", s3), ({ error: a3 }) => {
        a3 ? n5(a3) : r3();
      }), await this.setExpiry(e2, ii(X2)), this.sendRequest({ topic: e2, method: "wc_sessionExtend", params: {}, clientRpcId: s3, throwOnFailedPublish: true }).catch((a3) => {
        n5(a3);
      }), { acknowledged: i4 };
    }), c5(this, "request", async (t) => {
      this.isInitialized();
      try {
        await this.isValidRequest(t);
      } catch (y6) {
        throw this.client.logger.error("request() -> isValidRequest() failed"), y6;
      }
      const { chainId: e2, request: s3, topic: i4, expiry: r3 = N11.wc_sessionRequest.req.ttl } = t, n5 = this.client.session.get(i4);
      n5?.transportType === Q4.relay && await this.confirmOnlineStateOrThrow();
      const a3 = payloadId(), l8 = getBigIntRpcId().toString(), { done: p5, resolve: h6, reject: u3 } = ei(r3, "Request expired. Please try again.");
      this.events.once(ci("session_request", a3), ({ error: y6, result: E6 }) => {
        y6 ? u3(y6) : h6(E6);
      });
      const d5 = "wc_sessionRequest", w5 = this.getAppLinkIfEnabled(n5.peer.metadata, n5.transportType);
      if (w5) return await this.sendRequest({ clientRpcId: a3, relayRpcId: l8, topic: i4, method: d5, params: { request: x5(I3({}, s3), { expiryTimestamp: ii(r3) }), chainId: e2 }, expiry: r3, throwOnFailedPublish: true, appLink: w5 }).catch((y6) => u3(y6)), this.client.events.emit("session_request_sent", { topic: i4, request: s3, chainId: e2, id: a3 }), await p5();
      const m4 = { request: x5(I3({}, s3), { expiryTimestamp: ii(r3) }), chainId: e2 };
      return await Promise.all([new Promise(async (y6) => {
        await this.sendRequest({ clientRpcId: a3, relayRpcId: l8, topic: i4, method: d5, params: m4, expiry: r3, throwOnFailedPublish: true, tvf: this.getTVFParams(a3, m4) }).catch((E6) => u3(E6)), this.client.events.emit("session_request_sent", { topic: i4, request: s3, chainId: e2, id: a3 }), y6();
      }), new Promise(async (y6) => {
        var E6;
        if (!((E6 = n5.sessionConfig) != null && E6.disableDeepLink)) {
          const _3 = await ui(this.client.core.storage, Le5);
          await ai({ id: a3, topic: i4, wcDeepLink: _3 });
        }
        y6();
      }), p5()]).then((y6) => y6[2]);
    }), c5(this, "respond", async (t) => {
      this.isInitialized(), await this.isValidRespond(t);
      const { topic: e2, response: s3 } = t, { id: i4 } = s3, r3 = this.client.session.get(e2);
      r3.transportType === Q4.relay && await this.confirmOnlineStateOrThrow();
      const n5 = this.getAppLinkIfEnabled(r3.peer.metadata, r3.transportType);
      isJsonRpcResult(s3) ? await this.sendResult({ id: i4, topic: e2, result: s3.result, throwOnFailedPublish: true, appLink: n5 }) : isJsonRpcError(s3) && await this.sendError({ id: i4, topic: e2, error: s3.error, appLink: n5 }), this.cleanupAfterResponse(t);
    }), c5(this, "ping", async (t) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow();
      try {
        await this.isValidPing(t);
      } catch (s3) {
        throw this.client.logger.error("ping() -> isValidPing() failed"), s3;
      }
      const { topic: e2 } = t;
      if (this.client.session.keys.includes(e2)) {
        const s3 = payloadId(), i4 = getBigIntRpcId().toString(), { done: r3, resolve: n5, reject: a3 } = ei();
        this.events.once(ci("session_ping", s3), ({ error: l8 }) => {
          l8 ? a3(l8) : n5();
        }), await Promise.all([this.sendRequest({ topic: e2, method: "wc_sessionPing", params: {}, throwOnFailedPublish: true, clientRpcId: s3, relayRpcId: i4 }), r3()]);
      } else this.client.core.pairing.pairings.keys.includes(e2) && (this.client.logger.warn("ping() on pairing topic is deprecated and will be removed in the next major release."), await this.client.core.pairing.ping({ topic: e2 }));
    }), c5(this, "emit", async (t) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidEmit(t);
      const { topic: e2, event: s3, chainId: i4 } = t, r3 = getBigIntRpcId().toString(), n5 = payloadId();
      await this.sendRequest({ topic: e2, method: "wc_sessionEvent", params: { event: s3, chainId: i4 }, throwOnFailedPublish: true, relayRpcId: r3, clientRpcId: n5 });
    }), c5(this, "disconnect", async (t) => {
      this.isInitialized(), await this.confirmOnlineStateOrThrow(), await this.isValidDisconnect(t);
      const { topic: e2 } = t;
      if (this.client.session.keys.includes(e2)) await this.sendRequest({ topic: e2, method: "wc_sessionDelete", params: Kt2("USER_DISCONNECTED"), throwOnFailedPublish: true }), await this.deleteSession({ topic: e2, emitEvent: false });
      else if (this.client.core.pairing.pairings.keys.includes(e2)) await this.client.core.pairing.disconnect({ topic: e2 });
      else {
        const { message: s3 } = Et3("MISMATCHED_TOPIC", `Session or pairing topic not found: ${e2}`);
        throw new Error(s3);
      }
    }), c5(this, "find", (t) => (this.isInitialized(), this.client.session.getAll().filter((e2) => ya(e2, t)))), c5(this, "getPendingSessionRequests", () => this.client.pendingRequest.getAll()), c5(this, "authenticate", async (t, e2) => {
      var s3;
      this.isInitialized(), this.isValidAuthenticate(t);
      const i4 = e2 && this.client.core.linkModeSupportedApps.includes(e2) && ((s3 = this.client.metadata.redirect) == null ? void 0 : s3.linkMode), r3 = i4 ? Q4.link_mode : Q4.relay;
      r3 === Q4.relay && await this.confirmOnlineStateOrThrow();
      const { chains: n5, statement: a3 = "", uri: l8, domain: p5, nonce: h6, type: u3, exp: d5, nbf: w5, methods: m4 = [], expiry: y6 } = t, E6 = [...t.resources || []], { topic: _3, uri: V4 } = await this.client.core.pairing.create({ methods: ["wc_sessionAuthenticate"], transportType: r3 });
      this.client.logger.info({ message: "Generated new pairing", pairing: { topic: _3, uri: V4 } });
      const C5 = await this.client.core.crypto.generateKeyPair(), v6 = Fc(C5);
      if (await Promise.all([this.client.auth.authKeys.set(ce2, { responseTopic: v6, publicKey: C5 }), this.client.auth.pairingTopics.set(v6, { topic: v6, pairingTopic: _3 })]), await this.client.core.relayer.subscribe(v6, { transportType: r3 }), this.client.logger.info(`sending request to new pairing topic: ${_3}`), m4.length > 0) {
        const { namespace: O7 } = Fe(n5[0]);
        let k7 = Ef(O7, "request", m4);
        Oe2(E6) && (k7 = Bf(k7, E6.pop())), E6.push(k7);
      }
      const T5 = y6 && y6 > N11.wc_sessionAuthenticate.req.ttl ? y6 : N11.wc_sessionAuthenticate.req.ttl, K5 = { authPayload: { type: u3 ?? "caip122", chains: n5, statement: a3, aud: l8, domain: p5, version: "1", nonce: h6, iat: (/* @__PURE__ */ new Date()).toISOString(), exp: d5, nbf: w5, resources: E6 }, requester: { publicKey: C5, metadata: this.client.metadata }, expiryTimestamp: ii(T5) }, fe6 = { eip155: { chains: n5, methods: [.../* @__PURE__ */ new Set(["personal_sign", ...m4])], events: ["chainChanged", "accountsChanged"] } }, q2 = { requiredNamespaces: {}, optionalNamespaces: fe6, relays: [{ protocol: "irn" }], pairingTopic: _3, proposer: { publicKey: C5, metadata: this.client.metadata }, expiryTimestamp: ii(N11.wc_sessionPropose.req.ttl), id: payloadId() }, { done: It6, resolve: Ue6, reject: Se6 } = ei(T5, "Request expired"), te5 = payloadId(), le6 = ci("session_connect", q2.id), Re5 = ci("session_request", te5), pe6 = async ({ error: O7, session: k7 }) => {
        this.events.off(Re5, ve5), O7 ? Se6(O7) : k7 && Ue6({ session: k7 });
      }, ve5 = async (O7) => {
        var k7, Ge5, je6;
        if (await this.deletePendingAuthRequest(te5, { message: "fulfilled", code: 0 }), O7.error) {
          const ie4 = Kt2("WC_METHOD_UNSUPPORTED", "wc_sessionAuthenticate");
          return O7.error.code === ie4.code ? void 0 : (this.events.off(le6, pe6), Se6(O7.error.message));
        }
        await this.deleteProposal(q2.id), this.events.off(le6, pe6);
        const { cacaos: Fe4, responder: Q6 } = O7.result, Te6 = [], Qe5 = [];
        for (const ie4 of Fe4) {
          await yf({ cacao: ie4, projectId: this.client.core.projectId }) || (this.client.logger.error(ie4, "Signature verification failed"), Se6(Kt2("SESSION_SETTLEMENT_FAILED", "Signature verification failed")));
          const { p: qe6 } = ie4, Pe6 = Oe2(qe6.resources), He6 = [Vr3(qe6.iss)], Tt6 = dn(qe6.iss);
          if (Pe6) {
            const Ne4 = If(Pe6), qt5 = Af(Pe6);
            Te6.push(...Ne4), He6.push(...qt5);
          }
          for (const Ne4 of He6) Qe5.push(`${Ne4}:${Tt6}`);
        }
        const se4 = await this.client.core.crypto.generateSharedKey(C5, Q6.publicKey);
        let he6;
        Te6.length > 0 && (he6 = { topic: se4, acknowledged: true, self: { publicKey: C5, metadata: this.client.metadata }, peer: Q6, controller: Q6.publicKey, expiry: ii(X2), requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: _3, namespaces: ga([...new Set(Te6)], [...new Set(Qe5)]), transportType: r3 }, await this.client.core.relayer.subscribe(se4, { transportType: r3 }), await this.client.session.set(se4, he6), _3 && await this.client.core.pairing.updateMetadata({ topic: _3, metadata: Q6.metadata }), he6 = this.client.session.get(se4)), (k7 = this.client.metadata.redirect) != null && k7.linkMode && (Ge5 = Q6.metadata.redirect) != null && Ge5.linkMode && (je6 = Q6.metadata.redirect) != null && je6.universal && e2 && (this.client.core.addLinkModeSupportedApp(Q6.metadata.redirect.universal), this.client.session.update(se4, { transportType: Q4.link_mode })), Ue6({ auths: Fe4, session: he6 });
      };
      this.events.once(le6, pe6), this.events.once(Re5, ve5);
      let Ie6;
      try {
        if (i4) {
          const O7 = formatJsonRpcRequest("wc_sessionAuthenticate", K5, te5);
          this.client.core.history.set(_3, O7);
          const k7 = await this.client.core.crypto.encode("", O7, { type: ge3, encoding: De3 });
          Ie6 = sa(e2, _3, k7);
        } else await Promise.all([this.sendRequest({ topic: _3, method: "wc_sessionAuthenticate", params: K5, expiry: t.expiry, throwOnFailedPublish: true, clientRpcId: te5 }), this.sendRequest({ topic: _3, method: "wc_sessionPropose", params: q2, expiry: N11.wc_sessionPropose.req.ttl, throwOnFailedPublish: true, clientRpcId: q2.id })]);
      } catch (O7) {
        throw this.events.off(le6, pe6), this.events.off(Re5, ve5), O7;
      }
      return await this.setProposal(q2.id, q2), await this.setAuthRequest(te5, { request: x5(I3({}, K5), { verifyContext: {} }), pairingTopic: _3, transportType: r3 }), { uri: Ie6 ?? V4, response: It6 };
    }), c5(this, "approveSessionAuthenticate", async (t) => {
      const { id: e2, auths: s3 } = t, i4 = this.client.core.eventClient.createEvent({ properties: { topic: e2.toString(), trace: [sr4.authenticated_session_approve_started] } });
      try {
        this.isInitialized();
      } catch (y6) {
        throw i4.setError(rr4.no_internet_connection), y6;
      }
      const r3 = this.getPendingAuthRequest(e2);
      if (!r3) throw i4.setError(rr4.authenticated_session_pending_request_not_found), new Error(`Could not find pending auth request with id ${e2}`);
      const n5 = r3.transportType || Q4.relay;
      n5 === Q4.relay && await this.confirmOnlineStateOrThrow();
      const a3 = r3.requester.publicKey, l8 = await this.client.core.crypto.generateKeyPair(), p5 = Fc(a3), h6 = { type: ee, receiverPublicKey: a3, senderPublicKey: l8 }, u3 = [], d5 = [];
      for (const y6 of s3) {
        if (!await yf({ cacao: y6, projectId: this.client.core.projectId })) {
          i4.setError(rr4.invalid_cacao);
          const v6 = Kt2("SESSION_SETTLEMENT_FAILED", "Signature verification failed");
          throw await this.sendError({ id: e2, topic: p5, error: v6, encodeOpts: h6 }), new Error(v6.message);
        }
        i4.addTrace(sr4.cacaos_verified);
        const { p: E6 } = y6, _3 = Oe2(E6.resources), V4 = [Vr3(E6.iss)], C5 = dn(E6.iss);
        if (_3) {
          const v6 = If(_3), T5 = Af(_3);
          u3.push(...v6), V4.push(...T5);
        }
        for (const v6 of V4) d5.push(`${v6}:${C5}`);
      }
      const w5 = await this.client.core.crypto.generateSharedKey(l8, a3);
      i4.addTrace(sr4.create_authenticated_session_topic);
      let m4;
      if (u3?.length > 0) {
        m4 = { topic: w5, acknowledged: true, self: { publicKey: l8, metadata: this.client.metadata }, peer: { publicKey: a3, metadata: r3.requester.metadata }, controller: a3, expiry: ii(X2), authentication: s3, requiredNamespaces: {}, optionalNamespaces: {}, relay: { protocol: "irn" }, pairingTopic: r3.pairingTopic, namespaces: ga([...new Set(u3)], [...new Set(d5)]), transportType: n5 }, i4.addTrace(sr4.subscribing_authenticated_session_topic);
        try {
          await this.client.core.relayer.subscribe(w5, { transportType: n5 });
        } catch (y6) {
          throw i4.setError(rr4.subscribe_authenticated_session_topic_failure), y6;
        }
        i4.addTrace(sr4.subscribe_authenticated_session_topic_success), await this.client.session.set(w5, m4), i4.addTrace(sr4.store_authenticated_session), await this.client.core.pairing.updateMetadata({ topic: r3.pairingTopic, metadata: r3.requester.metadata });
      }
      i4.addTrace(sr4.publishing_authenticated_session_approve);
      try {
        await this.sendResult({ topic: p5, id: e2, result: { cacaos: s3, responder: { publicKey: l8, metadata: this.client.metadata } }, encodeOpts: h6, throwOnFailedPublish: true, appLink: this.getAppLinkIfEnabled(r3.requester.metadata, n5) });
      } catch (y6) {
        throw i4.setError(rr4.authenticated_session_approve_publish_failure), y6;
      }
      return await this.client.auth.requests.delete(e2, { message: "fulfilled", code: 0 }), await this.client.core.pairing.activate({ topic: r3.pairingTopic }), this.client.core.eventClient.deleteEvent({ eventId: i4.eventId }), { session: m4 };
    }), c5(this, "rejectSessionAuthenticate", async (t) => {
      this.isInitialized();
      const { id: e2, reason: s3 } = t, i4 = this.getPendingAuthRequest(e2);
      if (!i4) throw new Error(`Could not find pending auth request with id ${e2}`);
      i4.transportType === Q4.relay && await this.confirmOnlineStateOrThrow();
      const r3 = i4.requester.publicKey, n5 = await this.client.core.crypto.generateKeyPair(), a3 = Fc(r3), l8 = { type: ee, receiverPublicKey: r3, senderPublicKey: n5 };
      await this.sendError({ id: e2, topic: a3, error: s3, encodeOpts: l8, rpcOpts: N11.wc_sessionAuthenticate.reject, appLink: this.getAppLinkIfEnabled(i4.requester.metadata, i4.transportType) }), await this.client.auth.requests.delete(e2, { message: "rejected", code: 0 }), await this.deleteProposal(e2);
    }), c5(this, "formatAuthMessage", (t) => {
      this.isInitialized();
      const { request: e2, iss: s3 } = t;
      return qr3(e2, s3);
    }), c5(this, "processRelayMessageCache", () => {
      setTimeout(async () => {
        if (this.relayMessageCache.length !== 0) for (; this.relayMessageCache.length > 0; ) try {
          const t = this.relayMessageCache.shift();
          t && await this.onRelayMessage(t);
        } catch (t) {
          this.client.logger.error(t);
        }
      }, 50);
    }), c5(this, "cleanupDuplicatePairings", async (t) => {
      if (t.pairingTopic) try {
        const e2 = this.client.core.pairing.pairings.get(t.pairingTopic), s3 = this.client.core.pairing.pairings.getAll().filter((i4) => {
          var r3, n5;
          return ((r3 = i4.peerMetadata) == null ? void 0 : r3.url) && ((n5 = i4.peerMetadata) == null ? void 0 : n5.url) === t.peer.metadata.url && i4.topic && i4.topic !== e2.topic;
        });
        if (s3.length === 0) return;
        this.client.logger.info(`Cleaning up ${s3.length} duplicate pairing(s)`), await Promise.all(s3.map((i4) => this.client.core.pairing.disconnect({ topic: i4.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
      } catch (e2) {
        this.client.logger.error(e2);
      }
    }), c5(this, "deleteSession", async (t) => {
      var e2;
      const { topic: s3, expirerHasDeleted: i4 = false, emitEvent: r3 = true, id: n5 = 0 } = t, { self: a3 } = this.client.session.get(s3);
      await this.client.core.relayer.unsubscribe(s3), await this.client.session.delete(s3, Kt2("USER_DISCONNECTED")), this.addToRecentlyDeleted(s3, "session"), this.client.core.crypto.keychain.has(a3.publicKey) && await this.client.core.crypto.deleteKeyPair(a3.publicKey), this.client.core.crypto.keychain.has(s3) && await this.client.core.crypto.deleteSymKey(s3), i4 || this.client.core.expirer.del(s3), this.client.core.storage.removeItem(Le5).catch((l8) => this.client.logger.warn(l8)), this.getPendingSessionRequests().forEach((l8) => {
        l8.topic === s3 && this.deletePendingSessionRequest(l8.id, Kt2("USER_DISCONNECTED"));
      }), s3 === ((e2 = this.sessionRequestQueue.queue[0]) == null ? void 0 : e2.topic) && (this.sessionRequestQueue.state = $2.idle), r3 && this.client.events.emit("session_delete", { id: n5, topic: s3 });
    }), c5(this, "deleteProposal", async (t, e2) => {
      if (e2) try {
        const s3 = this.client.proposal.get(t), i4 = this.client.core.eventClient.getEvent({ topic: s3.pairingTopic });
        i4?.setError(ir4.proposal_expired);
      } catch {
      }
      await Promise.all([this.client.proposal.delete(t, Kt2("USER_DISCONNECTED")), e2 ? Promise.resolve() : this.client.core.expirer.del(t)]), this.addToRecentlyDeleted(t, "proposal");
    }), c5(this, "deletePendingSessionRequest", async (t, e2, s3 = false) => {
      await Promise.all([this.client.pendingRequest.delete(t, e2), s3 ? Promise.resolve() : this.client.core.expirer.del(t)]), this.addToRecentlyDeleted(t, "request"), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((i4) => i4.id !== t), s3 && (this.sessionRequestQueue.state = $2.idle, this.client.events.emit("session_request_expire", { id: t }));
    }), c5(this, "deletePendingAuthRequest", async (t, e2, s3 = false) => {
      await Promise.all([this.client.auth.requests.delete(t, e2), s3 ? Promise.resolve() : this.client.core.expirer.del(t)]);
    }), c5(this, "setExpiry", async (t, e2) => {
      this.client.session.keys.includes(t) && (this.client.core.expirer.set(t, e2), await this.client.session.update(t, { expiry: e2 }));
    }), c5(this, "setProposal", async (t, e2) => {
      this.client.core.expirer.set(t, ii(N11.wc_sessionPropose.req.ttl)), await this.client.proposal.set(t, e2);
    }), c5(this, "setAuthRequest", async (t, e2) => {
      const { request: s3, pairingTopic: i4, transportType: r3 = Q4.relay } = e2;
      this.client.core.expirer.set(t, s3.expiryTimestamp), await this.client.auth.requests.set(t, { authPayload: s3.authPayload, requester: s3.requester, expiryTimestamp: s3.expiryTimestamp, id: t, pairingTopic: i4, verifyContext: s3.verifyContext, transportType: r3 });
    }), c5(this, "setPendingSessionRequest", async (t) => {
      const { id: e2, topic: s3, params: i4, verifyContext: r3 } = t, n5 = i4.request.expiryTimestamp || ii(N11.wc_sessionRequest.req.ttl);
      this.client.core.expirer.set(e2, n5), await this.client.pendingRequest.set(e2, { id: e2, topic: s3, params: i4, verifyContext: r3 });
    }), c5(this, "sendRequest", async (t) => {
      const { topic: e2, method: s3, params: i4, expiry: r3, relayRpcId: n5, clientRpcId: a3, throwOnFailedPublish: l8, appLink: p5, tvf: h6 } = t, u3 = formatJsonRpcRequest(s3, i4, a3);
      let d5;
      const w5 = !!p5;
      try {
        const E6 = w5 ? De3 : Qt3;
        d5 = await this.client.core.crypto.encode(e2, u3, { encoding: E6 });
      } catch (E6) {
        throw await this.cleanup(), this.client.logger.error(`sendRequest() -> core.crypto.encode() for topic ${e2} failed`), E6;
      }
      let m4;
      if (mt2.includes(s3)) {
        const E6 = zc(JSON.stringify(u3)), _3 = zc(d5);
        m4 = await this.client.core.verify.register({ id: _3, decryptedId: E6 });
      }
      const y6 = N11[s3].req;
      if (y6.attestation = m4, r3 && (y6.ttl = r3), n5 && (y6.id = n5), this.client.core.history.set(e2, u3), w5) {
        const E6 = sa(p5, e2, d5);
        await global.Linking.openURL(E6, this.client.name);
      } else {
        const E6 = N11[s3].req;
        r3 && (E6.ttl = r3), n5 && (E6.id = n5), E6.tvf = x5(I3({}, h6), { correlationId: u3.id }), l8 ? (E6.internal = x5(I3({}, E6.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(e2, d5, E6)) : this.client.core.relayer.publish(e2, d5, E6).catch((_3) => this.client.logger.error(_3));
      }
      return u3.id;
    }), c5(this, "sendResult", async (t) => {
      const { id: e2, topic: s3, result: i4, throwOnFailedPublish: r3, encodeOpts: n5, appLink: a3 } = t, l8 = formatJsonRpcResult(e2, i4);
      let p5;
      const h6 = a3 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const w5 = h6 ? De3 : Qt3;
        p5 = await this.client.core.crypto.encode(s3, l8, x5(I3({}, n5 || {}), { encoding: w5 }));
      } catch (w5) {
        throw await this.cleanup(), this.client.logger.error(`sendResult() -> core.crypto.encode() for topic ${s3} failed`), w5;
      }
      let u3, d5;
      try {
        u3 = await this.client.core.history.get(s3, e2);
        const w5 = u3.request;
        try {
          d5 = this.getTVFParams(e2, w5.params, i4);
        } catch (m4) {
          this.client.logger.warn(`sendResult() -> getTVFParams() failed: ${m4?.message}`);
        }
      } catch (w5) {
        throw this.client.logger.error(`sendResult() -> history.get(${s3}, ${e2}) failed`), w5;
      }
      if (h6) {
        const w5 = sa(a3, s3, p5);
        await global.Linking.openURL(w5, this.client.name);
      } else {
        const w5 = u3.request.method, m4 = N11[w5].res;
        m4.tvf = x5(I3({}, d5), { correlationId: e2 }), r3 ? (m4.internal = x5(I3({}, m4.internal), { throwOnFailedPublish: true }), await this.client.core.relayer.publish(s3, p5, m4)) : this.client.core.relayer.publish(s3, p5, m4).catch((y6) => this.client.logger.error(y6));
      }
      await this.client.core.history.resolve(l8);
    }), c5(this, "sendError", async (t) => {
      const { id: e2, topic: s3, error: i4, encodeOpts: r3, rpcOpts: n5, appLink: a3 } = t, l8 = formatJsonRpcError(e2, i4);
      let p5;
      const h6 = a3 && typeof (global == null ? void 0 : global.Linking) < "u";
      try {
        const d5 = h6 ? De3 : Qt3;
        p5 = await this.client.core.crypto.encode(s3, l8, x5(I3({}, r3 || {}), { encoding: d5 }));
      } catch (d5) {
        throw await this.cleanup(), this.client.logger.error(`sendError() -> core.crypto.encode() for topic ${s3} failed`), d5;
      }
      let u3;
      try {
        u3 = await this.client.core.history.get(s3, e2);
      } catch (d5) {
        throw this.client.logger.error(`sendError() -> history.get(${s3}, ${e2}) failed`), d5;
      }
      if (h6) {
        const d5 = sa(a3, s3, p5);
        await global.Linking.openURL(d5, this.client.name);
      } else {
        const d5 = u3.request.method, w5 = n5 || N11[d5].res;
        this.client.core.relayer.publish(s3, p5, w5);
      }
      await this.client.core.history.resolve(l8);
    }), c5(this, "cleanup", async () => {
      const t = [], e2 = [];
      this.client.session.getAll().forEach((s3) => {
        let i4 = false;
        fi(s3.expiry) && (i4 = true), this.client.core.crypto.keychain.has(s3.topic) || (i4 = true), i4 && t.push(s3.topic);
      }), this.client.proposal.getAll().forEach((s3) => {
        fi(s3.expiryTimestamp) && e2.push(s3.id);
      }), await Promise.all([...t.map((s3) => this.deleteSession({ topic: s3 })), ...e2.map((s3) => this.deleteProposal(s3))]);
    }), c5(this, "onProviderMessageEvent", async (t) => {
      !this.initialized || this.relayMessageCache.length > 0 ? this.relayMessageCache.push(t) : await this.onRelayMessage(t);
    }), c5(this, "onRelayEventRequest", async (t) => {
      this.requestQueue.queue.push(t), await this.processRequestsQueue();
    }), c5(this, "processRequestsQueue", async () => {
      if (this.requestQueue.state === $2.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = $2.active;
        const t = this.requestQueue.queue.shift();
        if (t) try {
          await this.processRequest(t);
        } catch (e2) {
          this.client.logger.warn(e2);
        }
      }
      this.requestQueue.state = $2.idle;
    }), c5(this, "processRequest", async (t) => {
      const { topic: e2, payload: s3, attestation: i4, transportType: r3, encryptedId: n5 } = t, a3 = s3.method;
      if (!this.shouldIgnorePairingRequest({ topic: e2, requestMethod: a3 })) switch (a3) {
        case "wc_sessionPropose":
          return await this.onSessionProposeRequest({ topic: e2, payload: s3, attestation: i4, encryptedId: n5 });
        case "wc_sessionSettle":
          return await this.onSessionSettleRequest(e2, s3);
        case "wc_sessionUpdate":
          return await this.onSessionUpdateRequest(e2, s3);
        case "wc_sessionExtend":
          return await this.onSessionExtendRequest(e2, s3);
        case "wc_sessionPing":
          return await this.onSessionPingRequest(e2, s3);
        case "wc_sessionDelete":
          return await this.onSessionDeleteRequest(e2, s3);
        case "wc_sessionRequest":
          return await this.onSessionRequest({ topic: e2, payload: s3, attestation: i4, encryptedId: n5, transportType: r3 });
        case "wc_sessionEvent":
          return await this.onSessionEventRequest(e2, s3);
        case "wc_sessionAuthenticate":
          return await this.onSessionAuthenticateRequest({ topic: e2, payload: s3, attestation: i4, encryptedId: n5, transportType: r3 });
        default:
          return this.client.logger.info(`Unsupported request method ${a3}`);
      }
    }), c5(this, "onRelayEventResponse", async (t) => {
      const { topic: e2, payload: s3, transportType: i4 } = t, r3 = (await this.client.core.history.get(e2, s3.id)).request.method;
      switch (r3) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(e2, s3, i4);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(e2, s3);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(e2, s3);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(e2, s3);
        case "wc_sessionPing":
          return this.onSessionPingResponse(e2, s3);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(e2, s3);
        case "wc_sessionAuthenticate":
          return this.onSessionAuthenticateResponse(e2, s3);
        default:
          return this.client.logger.info(`Unsupported response method ${r3}`);
      }
    }), c5(this, "onRelayEventUnknownPayload", (t) => {
      const { topic: e2 } = t, { message: s3 } = Et3("MISSING_OR_INVALID", `Decoded payload on topic ${e2} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(s3);
    }), c5(this, "shouldIgnorePairingRequest", (t) => {
      const { topic: e2, requestMethod: s3 } = t, i4 = this.expectedPairingMethodMap.get(e2);
      return !i4 || i4.includes(s3) ? false : !!(i4.includes("wc_sessionAuthenticate") && this.client.events.listenerCount("session_authenticate") > 0);
    }), c5(this, "onSessionProposeRequest", async (t) => {
      const { topic: e2, payload: s3, attestation: i4, encryptedId: r3 } = t, { params: n5, id: a3 } = s3;
      try {
        const l8 = this.client.core.eventClient.getEvent({ topic: e2 });
        this.client.events.listenerCount("session_proposal") === 0 && (console.warn("No listener for session_proposal event"), l8?.setError(Y2.proposal_listener_not_found)), this.isValidConnect(I3({}, s3.params));
        const p5 = n5.expiryTimestamp || ii(N11.wc_sessionPropose.req.ttl), h6 = I3({ id: a3, pairingTopic: e2, expiryTimestamp: p5, attestation: i4, encryptedId: r3 }, n5);
        await this.setProposal(a3, h6);
        const u3 = await this.getVerifyContext({ attestationId: i4, hash: zc(JSON.stringify(s3)), encryptedId: r3, metadata: h6.proposer.metadata });
        l8?.addTrace(G4.emit_session_proposal), this.client.events.emit("session_proposal", { id: a3, params: h6, verifyContext: u3 });
      } catch (l8) {
        await this.sendError({ id: a3, topic: e2, error: l8, rpcOpts: N11.wc_sessionPropose.autoReject }), this.client.logger.error(l8);
      }
    }), c5(this, "onSessionProposeResponse", async (t, e2, s3) => {
      const { id: i4 } = e2;
      if (isJsonRpcResult(e2)) {
        const { result: r3 } = e2;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: r3 });
        const n5 = this.client.proposal.get(i4);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: n5 });
        const a3 = n5.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: a3 });
        const l8 = r3.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: l8 });
        const p5 = await this.client.core.crypto.generateSharedKey(a3, l8);
        this.pendingSessions.set(i4, { sessionTopic: p5, pairingTopic: t, proposalId: i4, publicKey: a3 });
        const h6 = await this.client.core.relayer.subscribe(p5, { transportType: s3 });
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: h6 }), await this.client.core.pairing.activate({ topic: t });
      } else if (isJsonRpcError(e2)) {
        await this.deleteProposal(i4);
        const r3 = ci("session_connect", i4);
        if (this.events.listenerCount(r3) === 0) throw new Error(`emitting ${r3} without any listeners, 954`);
        this.events.emit(r3, { error: e2.error });
      }
    }), c5(this, "onSessionSettleRequest", async (t, e2) => {
      const { id: s3, params: i4 } = e2;
      try {
        this.isValidSessionSettleRequest(i4);
        const { relay: r3, controller: n5, expiry: a3, namespaces: l8, sessionProperties: p5, scopedProperties: h6, sessionConfig: u3 } = e2.params, d5 = [...this.pendingSessions.values()].find((y6) => y6.sessionTopic === t);
        if (!d5) return this.client.logger.error(`Pending session not found for topic ${t}`);
        const w5 = this.client.proposal.get(d5.proposalId), m4 = x5(I3(I3(I3({ topic: t, relay: r3, expiry: a3, namespaces: l8, acknowledged: true, pairingTopic: d5.pairingTopic, requiredNamespaces: w5.requiredNamespaces, optionalNamespaces: w5.optionalNamespaces, controller: n5.publicKey, self: { publicKey: d5.publicKey, metadata: this.client.metadata }, peer: { publicKey: n5.publicKey, metadata: n5.metadata } }, p5 && { sessionProperties: p5 }), h6 && { scopedProperties: h6 }), u3 && { sessionConfig: u3 }), { transportType: Q4.relay });
        await this.client.session.set(m4.topic, m4), await this.setExpiry(m4.topic, m4.expiry), await this.client.core.pairing.updateMetadata({ topic: d5.pairingTopic, metadata: m4.peer.metadata }), this.client.events.emit("session_connect", { session: m4 }), this.events.emit(ci("session_connect", d5.proposalId), { session: m4 }), this.pendingSessions.delete(d5.proposalId), this.deleteProposal(d5.proposalId, false), this.cleanupDuplicatePairings(m4), await this.sendResult({ id: e2.id, topic: t, result: true });
      } catch (r3) {
        await this.sendError({ id: s3, topic: t, error: r3 }), this.client.logger.error(r3);
      }
    }), c5(this, "onSessionSettleResponse", async (t, e2) => {
      const { id: s3 } = e2;
      isJsonRpcResult(e2) ? (await this.client.session.update(t, { acknowledged: true }), this.events.emit(ci("session_approve", s3), {})) : isJsonRpcError(e2) && (await this.client.session.delete(t, Kt2("USER_DISCONNECTED")), this.events.emit(ci("session_approve", s3), { error: e2.error }));
    }), c5(this, "onSessionUpdateRequest", async (t, e2) => {
      const { params: s3, id: i4 } = e2;
      try {
        const r3 = `${t}_session_update`, n5 = Ha.get(r3);
        if (n5 && this.isRequestOutOfSync(n5, i4)) {
          this.client.logger.warn(`Discarding out of sync request - ${i4}`), this.sendError({ id: i4, topic: t, error: Kt2("INVALID_UPDATE_REQUEST") });
          return;
        }
        this.isValidUpdate(I3({ topic: t }, s3));
        try {
          Ha.set(r3, i4), await this.client.session.update(t, { namespaces: s3.namespaces }), await this.sendResult({ id: i4, topic: t, result: true });
        } catch (a3) {
          throw Ha.delete(r3), a3;
        }
        this.client.events.emit("session_update", { id: i4, topic: t, params: s3 });
      } catch (r3) {
        await this.sendError({ id: i4, topic: t, error: r3 }), this.client.logger.error(r3);
      }
    }), c5(this, "isRequestOutOfSync", (t, e2) => e2.toString().slice(0, -3) < t.toString().slice(0, -3)), c5(this, "onSessionUpdateResponse", (t, e2) => {
      const { id: s3 } = e2, i4 = ci("session_update", s3);
      if (this.events.listenerCount(i4) === 0) throw new Error(`emitting ${i4} without any listeners`);
      isJsonRpcResult(e2) ? this.events.emit(ci("session_update", s3), {}) : isJsonRpcError(e2) && this.events.emit(ci("session_update", s3), { error: e2.error });
    }), c5(this, "onSessionExtendRequest", async (t, e2) => {
      const { id: s3 } = e2;
      try {
        this.isValidExtend({ topic: t }), await this.setExpiry(t, ii(X2)), await this.sendResult({ id: s3, topic: t, result: true }), this.client.events.emit("session_extend", { id: s3, topic: t });
      } catch (i4) {
        await this.sendError({ id: s3, topic: t, error: i4 }), this.client.logger.error(i4);
      }
    }), c5(this, "onSessionExtendResponse", (t, e2) => {
      const { id: s3 } = e2, i4 = ci("session_extend", s3);
      if (this.events.listenerCount(i4) === 0) throw new Error(`emitting ${i4} without any listeners`);
      isJsonRpcResult(e2) ? this.events.emit(ci("session_extend", s3), {}) : isJsonRpcError(e2) && this.events.emit(ci("session_extend", s3), { error: e2.error });
    }), c5(this, "onSessionPingRequest", async (t, e2) => {
      const { id: s3 } = e2;
      try {
        this.isValidPing({ topic: t }), await this.sendResult({ id: s3, topic: t, result: true, throwOnFailedPublish: true }), this.client.events.emit("session_ping", { id: s3, topic: t });
      } catch (i4) {
        await this.sendError({ id: s3, topic: t, error: i4 }), this.client.logger.error(i4);
      }
    }), c5(this, "onSessionPingResponse", (t, e2) => {
      const { id: s3 } = e2, i4 = ci("session_ping", s3);
      setTimeout(() => {
        if (this.events.listenerCount(i4) === 0) throw new Error(`emitting ${i4} without any listeners 2176`);
        isJsonRpcResult(e2) ? this.events.emit(ci("session_ping", s3), {}) : isJsonRpcError(e2) && this.events.emit(ci("session_ping", s3), { error: e2.error });
      }, 500);
    }), c5(this, "onSessionDeleteRequest", async (t, e2) => {
      const { id: s3 } = e2;
      try {
        this.isValidDisconnect({ topic: t, reason: e2.params }), Promise.all([new Promise((i4) => {
          this.client.core.relayer.once(C3.publish, async () => {
            i4(await this.deleteSession({ topic: t, id: s3 }));
          });
        }), this.sendResult({ id: s3, topic: t, result: true }), this.cleanupPendingSentRequestsForTopic({ topic: t, error: Kt2("USER_DISCONNECTED") })]).catch((i4) => this.client.logger.error(i4));
      } catch (i4) {
        this.client.logger.error(i4);
      }
    }), c5(this, "onSessionRequest", async (t) => {
      var e2, s3, i4;
      const { topic: r3, payload: n5, attestation: a3, encryptedId: l8, transportType: p5 } = t, { id: h6, params: u3 } = n5;
      try {
        await this.isValidRequest(I3({ topic: r3 }, u3));
        const d5 = this.client.session.get(r3), w5 = await this.getVerifyContext({ attestationId: a3, hash: zc(JSON.stringify(formatJsonRpcRequest("wc_sessionRequest", u3, h6))), encryptedId: l8, metadata: d5.peer.metadata, transportType: p5 }), m4 = { id: h6, topic: r3, params: u3, verifyContext: w5 };
        await this.setPendingSessionRequest(m4), p5 === Q4.link_mode && (e2 = d5.peer.metadata.redirect) != null && e2.universal && this.client.core.addLinkModeSupportedApp((s3 = d5.peer.metadata.redirect) == null ? void 0 : s3.universal), (i4 = this.client.signConfig) != null && i4.disableRequestQueue ? this.emitSessionRequest(m4) : (this.addSessionRequestToSessionRequestQueue(m4), this.processSessionRequestQueue());
      } catch (d5) {
        await this.sendError({ id: h6, topic: r3, error: d5 }), this.client.logger.error(d5);
      }
    }), c5(this, "onSessionRequestResponse", (t, e2) => {
      const { id: s3 } = e2, i4 = ci("session_request", s3);
      if (this.events.listenerCount(i4) === 0) throw new Error(`emitting ${i4} without any listeners`);
      isJsonRpcResult(e2) ? this.events.emit(ci("session_request", s3), { result: e2.result }) : isJsonRpcError(e2) && this.events.emit(ci("session_request", s3), { error: e2.error });
    }), c5(this, "onSessionEventRequest", async (t, e2) => {
      const { id: s3, params: i4 } = e2;
      try {
        const r3 = `${t}_session_event_${i4.event.name}`, n5 = Ha.get(r3);
        if (n5 && this.isRequestOutOfSync(n5, s3)) {
          this.client.logger.info(`Discarding out of sync request - ${s3}`);
          return;
        }
        this.isValidEmit(I3({ topic: t }, i4)), this.client.events.emit("session_event", { id: s3, topic: t, params: i4 }), Ha.set(r3, s3);
      } catch (r3) {
        await this.sendError({ id: s3, topic: t, error: r3 }), this.client.logger.error(r3);
      }
    }), c5(this, "onSessionAuthenticateResponse", (t, e2) => {
      const { id: s3 } = e2;
      this.client.logger.trace({ type: "method", method: "onSessionAuthenticateResponse", topic: t, payload: e2 }), isJsonRpcResult(e2) ? this.events.emit(ci("session_request", s3), { result: e2.result }) : isJsonRpcError(e2) && this.events.emit(ci("session_request", s3), { error: e2.error });
    }), c5(this, "onSessionAuthenticateRequest", async (t) => {
      var e2;
      const { topic: s3, payload: i4, attestation: r3, encryptedId: n5, transportType: a3 } = t;
      try {
        const { requester: l8, authPayload: p5, expiryTimestamp: h6 } = i4.params, u3 = await this.getVerifyContext({ attestationId: r3, hash: zc(JSON.stringify(i4)), encryptedId: n5, metadata: l8.metadata, transportType: a3 }), d5 = { requester: l8, pairingTopic: s3, id: i4.id, authPayload: p5, verifyContext: u3, expiryTimestamp: h6 };
        await this.setAuthRequest(i4.id, { request: d5, pairingTopic: s3, transportType: a3 }), a3 === Q4.link_mode && (e2 = l8.metadata.redirect) != null && e2.universal && this.client.core.addLinkModeSupportedApp(l8.metadata.redirect.universal), this.client.events.emit("session_authenticate", { topic: s3, params: i4.params, id: i4.id, verifyContext: u3 });
      } catch (l8) {
        this.client.logger.error(l8);
        const p5 = i4.params.requester.publicKey, h6 = await this.client.core.crypto.generateKeyPair(), u3 = this.getAppLinkIfEnabled(i4.params.requester.metadata, a3), d5 = { type: ee, receiverPublicKey: p5, senderPublicKey: h6 };
        await this.sendError({ id: i4.id, topic: s3, error: l8, encodeOpts: d5, rpcOpts: N11.wc_sessionAuthenticate.autoReject, appLink: u3 });
      }
    }), c5(this, "addSessionRequestToSessionRequestQueue", (t) => {
      this.sessionRequestQueue.queue.push(t);
    }), c5(this, "cleanupAfterResponse", (t) => {
      this.deletePendingSessionRequest(t.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = $2.idle, this.processSessionRequestQueue();
      }, (0, import_time6.toMiliseconds)(this.requestQueueDelay));
    }), c5(this, "cleanupPendingSentRequestsForTopic", ({ topic: t, error: e2 }) => {
      const s3 = this.client.core.history.pending;
      s3.length > 0 && s3.filter((i4) => i4.topic === t && i4.request.method === "wc_sessionRequest").forEach((i4) => {
        const r3 = i4.request.id, n5 = ci("session_request", r3);
        if (this.events.listenerCount(n5) === 0) throw new Error(`emitting ${n5} without any listeners`);
        this.events.emit(ci("session_request", i4.request.id), { error: e2 });
      });
    }), c5(this, "processSessionRequestQueue", () => {
      if (this.sessionRequestQueue.state === $2.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const t = this.sessionRequestQueue.queue[0];
      if (!t) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.emitSessionRequest(t);
      } catch (e2) {
        this.client.logger.error(e2);
      }
    }), c5(this, "emitSessionRequest", (t) => {
      if (this.emittedSessionRequests.has(t.id)) {
        this.client.logger.warn({ id: t.id }, `Skipping emitting \`session_request\` event for duplicate request. id: ${t.id}`);
        return;
      }
      this.sessionRequestQueue.state = $2.active, this.emittedSessionRequests.add(t.id), this.client.events.emit("session_request", t);
    }), c5(this, "onPairingCreated", (t) => {
      if (t.methods && this.expectedPairingMethodMap.set(t.topic, t.methods), t.active) return;
      const e2 = this.client.proposal.getAll().find((s3) => s3.pairingTopic === t.topic);
      e2 && this.onSessionProposeRequest({ topic: t.topic, payload: formatJsonRpcRequest("wc_sessionPropose", x5(I3({}, e2), { requiredNamespaces: e2.requiredNamespaces, optionalNamespaces: e2.optionalNamespaces, relays: e2.relays, proposer: e2.proposer, sessionProperties: e2.sessionProperties, scopedProperties: e2.scopedProperties }), e2.id), attestation: e2.attestation, encryptedId: e2.encryptedId });
    }), c5(this, "isValidConnect", async (t) => {
      if (!Aa(t)) {
        const { message: l8 } = Et3("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(t)}`);
        throw new Error(l8);
      }
      const { pairingTopic: e2, requiredNamespaces: s3, optionalNamespaces: i4, sessionProperties: r3, scopedProperties: n5, relays: a3 } = t;
      console.log("[WC][runtime] validate connect", { pairingTopic: e2, requiredNamespaces: s3, optionalNamespaces: i4, relays: a3, sessionProperties: r3, scopedProperties: n5 });
      if (kt3(e2) || await this.isValidPairingTopic(e2), !Ba(a3, true)) {
        const { message: l8 } = Et3("MISSING_OR_INVALID", `connect() relays: ${a3}`);
        throw new Error(l8);
      }
      if (!kt3(s3) && Ve3(s3) !== 0) {
        const l8 = "requiredNamespaces are deprecated and are automatically assigned to optionalNamespaces";
        ["fatal", "error", "silent"].includes(this.client.logger.level) ? console.warn(l8) : this.client.logger.warn(l8), this.validateNamespaces(s3, "requiredNamespaces");
      }
      if (!kt3(i4) && Ve3(i4) !== 0 && this.validateNamespaces(i4, "optionalNamespaces"), kt3(r3) || this.validateSessionProps(r3, "sessionProperties"), !kt3(n5)) {
        this.validateSessionProps(n5, "scopedProperties");
        const l8 = Object.keys(s3 || {}).concat(Object.keys(i4 || {}));
        if (!Object.keys(n5).every((p5) => l8.includes(p5.split(":")[0]))) throw new Error(`Scoped properties must be a subset of required/optional namespaces, received: ${JSON.stringify(n5)}, required/optional namespaces: ${JSON.stringify(l8)}`);
      }
    }), c5(this, "validateNamespaces", (t, e2) => {
      console.log("[WC][runtime] validateNamespaces", { label: e2, namespaces: t });
      const s3 = Ea(t, "connect()", e2);
      if (s3) throw new Error(s3.message);
    }), c5(this, "isValidApprove", async (t) => {
      if (!Aa(t)) throw new Error(Et3("MISSING_OR_INVALID", `approve() params: ${t}`).message);
      const { id: e2, namespaces: s3, relayProtocol: i4, sessionProperties: r3, scopedProperties: n5 } = t;
      console.log("[WC][runtime] validate approve", { id: e2, namespaces: s3, relayProtocol: i4, sessionProperties: r3, scopedProperties: n5 });
      this.checkRecentlyDeleted(e2), await this.isValidProposalId(e2);
      const a3 = this.client.proposal.get(e2), l8 = is(s3, "approve()");
      if (l8) throw new Error(l8.message);
      const p5 = cs(a3.requiredNamespaces, s3, "approve()");
      if (p5) throw new Error(p5.message);
      if (!it3(i4, true)) {
        const { message: h6 } = Et3("MISSING_OR_INVALID", `approve() relayProtocol: ${i4}`);
        throw new Error(h6);
      }
      if (kt3(r3) || this.validateSessionProps(r3, "sessionProperties"), !kt3(n5)) {
        this.validateSessionProps(n5, "scopedProperties");
        const h6 = new Set(Object.keys(s3));
        if (!Object.keys(n5).every((u3) => h6.has(u3.split(":")[0]))) throw new Error(`Scoped properties must be a subset of approved namespaces, received: ${JSON.stringify(n5)}, approved namespaces: ${Array.from(h6).join(", ")}`);
      }
    }), c5(this, "isValidReject", async (t) => {
      if (!Aa(t)) {
        const { message: i4 } = Et3("MISSING_OR_INVALID", `reject() params: ${t}`);
        throw new Error(i4);
      }
      const { id: e2, reason: s3 } = t;
      if (this.checkRecentlyDeleted(e2), await this.isValidProposalId(e2), !Sa(s3)) {
        const { message: i4 } = Et3("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(s3)}`);
        throw new Error(i4);
      }
    }), c5(this, "isValidSessionSettleRequest", (t) => {
      if (!Aa(t)) {
        const { message: l8 } = Et3("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${t}`);
        throw new Error(l8);
      }
      const { relay: e2, controller: s3, namespaces: i4, expiry: r3 } = t;
      console.log("[WC][runtime] session settle request", { relay: e2, controller: s3, namespaces: i4, expiry: r3 });
      if (!fs(e2)) {
        const { message: l8 } = Et3("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(l8);
      }
      const n5 = va(s3, "onSessionSettleRequest()");
      if (n5) throw new Error(n5.message);
      const a3 = is(i4, "onSessionSettleRequest()");
      if (a3) throw new Error(a3.message);
      if (fi(r3)) {
        const { message: l8 } = Et3("EXPIRED", "onSessionSettleRequest()");
        throw new Error(l8);
      }
    }), c5(this, "isValidUpdate", async (t) => {
      if (!Aa(t)) {
        const { message: a3 } = Et3("MISSING_OR_INVALID", `update() params: ${t}`);
        throw new Error(a3);
      }
      const { topic: e2, namespaces: s3 } = t;
      this.checkRecentlyDeleted(e2), await this.isValidSessionTopic(e2);
      const i4 = this.client.session.get(e2), r3 = is(s3, "update()");
      if (r3) throw new Error(r3.message);
      const n5 = cs(i4.requiredNamespaces, s3, "update()");
      if (n5) throw new Error(n5.message);
    }), c5(this, "isValidExtend", async (t) => {
      if (!Aa(t)) {
        const { message: s3 } = Et3("MISSING_OR_INVALID", `extend() params: ${t}`);
        throw new Error(s3);
      }
      const { topic: e2 } = t;
      this.checkRecentlyDeleted(e2), await this.isValidSessionTopic(e2);
    }), c5(this, "isValidRequest", async (t) => {
      if (!Aa(t)) {
        const { message: a3 } = Et3("MISSING_OR_INVALID", `request() params: ${t}`);
        throw new Error(a3);
      }
      const { topic: e2, request: s3, chainId: i4, expiry: r3 } = t;
      this.checkRecentlyDeleted(e2), await this.isValidSessionTopic(e2);
      const { namespaces: n5 } = this.client.session.get(e2);
      if (!_a(n5, i4)) {
        const { message: a3 } = Et3("MISSING_OR_INVALID", `request() chainId: ${i4}`);
        throw new Error(a3);
      }
      if (!Na(s3)) {
        const { message: a3 } = Et3("MISSING_OR_INVALID", `request() ${JSON.stringify(s3)}`);
        throw new Error(a3);
      }
      if (!Ta(n5, i4, s3.method)) {
        const { message: a3 } = Et3("MISSING_OR_INVALID", `request() method: ${s3.method}`);
        throw new Error(a3);
      }
      if (r3 && !La(r3, _e5)) {
        const { message: a3 } = Et3("MISSING_OR_INVALID", `request() expiry: ${r3}. Expiry must be a number (in seconds) between ${_e5.min} and ${_e5.max}`);
        throw new Error(a3);
      }
    }), c5(this, "isValidRespond", async (t) => {
      var e2;
      if (!Aa(t)) {
        const { message: r3 } = Et3("MISSING_OR_INVALID", `respond() params: ${t}`);
        throw new Error(r3);
      }
      const { topic: s3, response: i4 } = t;
      try {
        await this.isValidSessionTopic(s3);
      } catch (r3) {
        throw (e2 = t?.response) != null && e2.id && this.cleanupAfterResponse(t), r3;
      }
      if (!Oa(i4)) {
        const { message: r3 } = Et3("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(i4)}`);
        throw new Error(r3);
      }
    }), c5(this, "isValidPing", async (t) => {
      if (!Aa(t)) {
        const { message: s3 } = Et3("MISSING_OR_INVALID", `ping() params: ${t}`);
        throw new Error(s3);
      }
      const { topic: e2 } = t;
      await this.isValidSessionOrPairingTopic(e2);
    }), c5(this, "isValidEmit", async (t) => {
      if (!Aa(t)) {
        const { message: n5 } = Et3("MISSING_OR_INVALID", `emit() params: ${t}`);
        throw new Error(n5);
      }
      const { topic: e2, event: s3, chainId: i4 } = t;
      await this.isValidSessionTopic(e2);
      const { namespaces: r3 } = this.client.session.get(e2);
      if (!_a(r3, i4)) {
        const { message: n5 } = Et3("MISSING_OR_INVALID", `emit() chainId: ${i4}`);
        throw new Error(n5);
      }
      if (!Ua(s3)) {
        const { message: n5 } = Et3("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s3)}`);
        throw new Error(n5);
      }
      if (!Ra(r3, i4, s3.name)) {
        const { message: n5 } = Et3("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(s3)}`);
        throw new Error(n5);
      }
    }), c5(this, "isValidDisconnect", async (t) => {
      if (!Aa(t)) {
        const { message: s3 } = Et3("MISSING_OR_INVALID", `disconnect() params: ${t}`);
        throw new Error(s3);
      }
      const { topic: e2 } = t;
      await this.isValidSessionOrPairingTopic(e2);
    }), c5(this, "isValidAuthenticate", (t) => {
      const { chains: e2, uri: s3, domain: i4, nonce: r3 } = t;
      if (!Array.isArray(e2) || e2.length === 0) throw new Error("chains is required and must be a non-empty array");
      if (!it3(s3, false)) throw new Error("uri is required parameter");
      if (!it3(i4, false)) throw new Error("domain is required parameter");
      if (!it3(r3, false)) throw new Error("nonce is required parameter");
      if ([...new Set(e2.map((a3) => Fe(a3).namespace))].length > 1) throw new Error("Multi-namespace requests are not supported. Please request single namespace only.");
      const { namespace: n5 } = Fe(e2[0]);
      if (n5 !== "eip155") throw new Error("Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains.");
    }), c5(this, "getVerifyContext", async (t) => {
      const { attestationId: e2, hash: s3, encryptedId: i4, metadata: r3, transportType: n5 } = t, a3 = { verified: { verifyUrl: r3.verifyUrl || ue2, validation: "UNKNOWN", origin: r3.url || "" } };
      try {
        if (n5 === Q4.link_mode) {
          const p5 = this.getAppLinkIfEnabled(r3, n5);
          return a3.verified.validation = p5 && new URL(p5).origin === new URL(r3.url).origin ? "VALID" : "INVALID", a3;
        }
        const l8 = await this.client.core.verify.resolve({ attestationId: e2, hash: s3, encryptedId: i4, verifyUrl: r3.verifyUrl });
        l8 && (a3.verified.origin = l8.origin, a3.verified.isScam = l8.isScam, a3.verified.validation = l8.origin === new URL(r3.url).origin ? "VALID" : "INVALID");
      } catch (l8) {
        this.client.logger.warn(l8);
      }
      return this.client.logger.debug(`Verify context: ${JSON.stringify(a3)}`), a3;
    }), c5(this, "validateSessionProps", (t, e2) => {
      Object.values(t).forEach((s3, i4) => {
        if (s3 == null) {
          const { message: r3 } = Et3("MISSING_OR_INVALID", `${e2} must contain an existing value for each key. Received: ${s3} for key ${Object.keys(t)[i4]}`);
          throw new Error(r3);
        }
      });
    }), c5(this, "getPendingAuthRequest", (t) => {
      const e2 = this.client.auth.requests.get(t);
      return typeof e2 == "object" ? e2 : void 0;
    }), c5(this, "addToRecentlyDeleted", (t, e2) => {
      if (this.recentlyDeletedMap.set(t, e2), this.recentlyDeletedMap.size >= this.recentlyDeletedLimit) {
        let s3 = 0;
        const i4 = this.recentlyDeletedLimit / 2;
        for (const r3 of this.recentlyDeletedMap.keys()) {
          if (s3++ >= i4) break;
          this.recentlyDeletedMap.delete(r3);
        }
      }
    }), c5(this, "checkRecentlyDeleted", (t) => {
      const e2 = this.recentlyDeletedMap.get(t);
      if (e2) {
        const { message: s3 } = Et3("MISSING_OR_INVALID", `Record was recently deleted - ${e2}: ${t}`);
        throw new Error(s3);
      }
    }), c5(this, "isLinkModeEnabled", (t, e2) => {
      var s3, i4, r3, n5, a3, l8, p5, h6, u3;
      return !t || e2 !== Q4.link_mode ? false : ((i4 = (s3 = this.client.metadata) == null ? void 0 : s3.redirect) == null ? void 0 : i4.linkMode) === true && ((n5 = (r3 = this.client.metadata) == null ? void 0 : r3.redirect) == null ? void 0 : n5.universal) !== void 0 && ((l8 = (a3 = this.client.metadata) == null ? void 0 : a3.redirect) == null ? void 0 : l8.universal) !== "" && ((p5 = t?.redirect) == null ? void 0 : p5.universal) !== void 0 && ((h6 = t?.redirect) == null ? void 0 : h6.universal) !== "" && ((u3 = t?.redirect) == null ? void 0 : u3.linkMode) === true && this.client.core.linkModeSupportedApps.includes(t.redirect.universal) && typeof (global == null ? void 0 : global.Linking) < "u";
    }), c5(this, "getAppLinkIfEnabled", (t, e2) => {
      var s3;
      return this.isLinkModeEnabled(t, e2) ? (s3 = t?.redirect) == null ? void 0 : s3.universal : void 0;
    }), c5(this, "handleLinkModeMessage", ({ url: t }) => {
      if (!t || !t.includes("wc_ev") || !t.includes("topic")) return;
      const e2 = li(t, "topic") || "", s3 = decodeURIComponent(li(t, "wc_ev") || ""), i4 = this.client.session.keys.includes(e2);
      i4 && this.client.session.update(e2, { transportType: Q4.link_mode }), this.client.core.dispatchEnvelope({ topic: e2, message: s3, sessionExists: i4 });
    }), c5(this, "registerLinkModeListeners", async () => {
      var t;
      if (hi() || Bt3() && (t = this.client.metadata.redirect) != null && t.linkMode) {
        const e2 = global == null ? void 0 : global.Linking;
        if (typeof e2 < "u") {
          e2.addEventListener("url", this.handleLinkModeMessage, this.client.name);
          const s3 = await e2.getInitialURL();
          s3 && setTimeout(() => {
            this.handleLinkModeMessage({ url: s3 });
          }, 50);
        }
      }
    }), c5(this, "getTVFParams", (t, e2, s3) => {
      var i4, r3, n5;
      if (!((i4 = e2.request) != null && i4.method)) return {};
      const a3 = { correlationId: t, rpcMethods: [e2.request.method], chainId: e2.chainId };
      try {
        const l8 = this.extractTxHashesFromResult(e2.request, s3);
        a3.txHashes = l8, a3.contractAddresses = this.isValidContractData(e2.request.params) ? [(n5 = (r3 = e2.request.params) == null ? void 0 : r3[0]) == null ? void 0 : n5.to] : [];
      } catch (l8) {
        this.client.logger.warn("Error getting TVF params", l8);
      }
      return a3;
    }), c5(this, "isValidContractData", (t) => {
      var e2;
      if (!t) return false;
      try {
        const s3 = t?.data || ((e2 = t?.[0]) == null ? void 0 : e2.data);
        if (!s3.startsWith("0x")) return false;
        const i4 = s3.slice(2);
        return /^[0-9a-fA-F]*$/.test(i4) ? i4.length % 2 === 0 : false;
      } catch {
      }
      return false;
    }), c5(this, "extractTxHashesFromResult", (t, e2) => {
      var s3;
      try {
        if (!e2) return [];
        const i4 = t.method, r3 = gt4[i4];
        if (i4 === "sui_signTransaction") return [ff(e2.transactionBytes)];
        if (i4 === "near_signTransaction") return [cf(e2)];
        if (i4 === "near_signTransactions") return e2.map((a3) => cf(a3));
        if (i4 === "xrpl_signTransactionFor" || i4 === "xrpl_signTransaction") return [(s3 = e2.tx_json) == null ? void 0 : s3.hash];
        if (i4 === "polkadot_signTransaction") return [Ka({ transaction: t.params.transactionPayload, signature: e2.signature })];
        if (i4 === "algo_signTxn") return me3(e2) ? e2.map((a3) => af(a3)) : [af(e2)];
        if (i4 === "cosmos_signDirect") return [uf(e2)];
        if (typeof e2 == "string") return [e2];
        const n5 = e2[r3.key];
        if (me3(n5)) return i4 === "solana_signAllTransactions" ? n5.map((a3) => sf(a3)) : n5;
        if (typeof n5 == "string") return [n5];
      } catch (i4) {
        this.client.logger.warn("Error extracting tx hashes from result", i4);
      }
      return [];
    });
  }
  async processPendingMessageEvents() {
    try {
      const o5 = this.client.session.keys, t = this.client.core.relayer.messages.getWithoutAck(o5);
      for (const [e2, s3] of Object.entries(t)) for (const i4 of s3) try {
        await this.onProviderMessageEvent({ topic: e2, message: i4, publishedAt: Date.now() });
      } catch {
        this.client.logger.warn(`Error processing pending message event for topic: ${e2}, message: ${i4}`);
      }
    } catch (o5) {
      this.client.logger.warn("processPendingMessageEvents failed", o5);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: o5 } = Et3("NOT_INITIALIZED", this.name);
      throw new Error(o5);
    }
  }
  async confirmOnlineStateOrThrow() {
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(C3.message, (o5) => {
      this.onProviderMessageEvent(o5);
    });
  }
  async onRelayMessage(o5) {
    const { topic: t, message: e2, attestation: s3, transportType: i4 } = o5, { publicKey: r3 } = this.client.auth.authKeys.keys.includes(ce2) ? this.client.auth.authKeys.get(ce2) : { responseTopic: void 0, publicKey: void 0 };
    try {
      const n5 = await this.client.core.crypto.decode(t, e2, { receiverPublicKey: r3, encoding: i4 === Q4.link_mode ? De3 : Qt3 });
      isJsonRpcRequest(n5) ? (this.client.core.history.set(t, n5), await this.onRelayEventRequest({ topic: t, payload: n5, attestation: s3, transportType: i4, encryptedId: zc(e2) })) : isJsonRpcResponse(n5) ? (await this.client.core.history.resolve(n5), await this.onRelayEventResponse({ topic: t, payload: n5, transportType: i4 }), this.client.core.history.delete(t, n5.id)) : await this.onRelayEventUnknownPayload({ topic: t, payload: n5, transportType: i4 }), await this.client.core.relayer.messages.ack(t, e2);
    } catch (n5) {
      this.client.logger.error(n5);
    }
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(M4.expired, async (o5) => {
      const { topic: t, id: e2 } = si(o5.target);
      if (e2 && this.client.pendingRequest.keys.includes(e2)) return await this.deletePendingSessionRequest(e2, Et3("EXPIRED"), true);
      if (e2 && this.client.auth.requests.keys.includes(e2)) return await this.deletePendingAuthRequest(e2, Et3("EXPIRED"), true);
      t ? this.client.session.keys.includes(t) && (await this.deleteSession({ topic: t, expirerHasDeleted: true }), this.client.events.emit("session_expire", { topic: t })) : e2 && (await this.deleteProposal(e2, true), this.client.events.emit("proposal_expire", { id: e2 }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(re.create, (o5) => this.onPairingCreated(o5)), this.client.core.pairing.events.on(re.delete, (o5) => {
      this.addToRecentlyDeleted(o5.topic, "pairing");
    });
  }
  isValidPairingTopic(o5) {
    if (!it3(o5, false)) {
      const { message: t } = Et3("MISSING_OR_INVALID", `pairing topic should be a string: ${o5}`);
      throw new Error(t);
    }
    if (!this.client.core.pairing.pairings.keys.includes(o5)) {
      const { message: t } = Et3("NO_MATCHING_KEY", `pairing topic doesn't exist: ${o5}`);
      throw new Error(t);
    }
    if (fi(this.client.core.pairing.pairings.get(o5).expiry)) {
      const { message: t } = Et3("EXPIRED", `pairing topic: ${o5}`);
      throw new Error(t);
    }
  }
  async isValidSessionTopic(o5) {
    if (!it3(o5, false)) {
      const { message: t } = Et3("MISSING_OR_INVALID", `session topic should be a string: ${o5}`);
      throw new Error(t);
    }
    if (this.checkRecentlyDeleted(o5), !this.client.session.keys.includes(o5)) {
      const { message: t } = Et3("NO_MATCHING_KEY", `session topic doesn't exist: ${o5}`);
      throw new Error(t);
    }
    if (fi(this.client.session.get(o5).expiry)) {
      await this.deleteSession({ topic: o5 });
      const { message: t } = Et3("EXPIRED", `session topic: ${o5}`);
      throw new Error(t);
    }
    if (!this.client.core.crypto.keychain.has(o5)) {
      const { message: t } = Et3("MISSING_OR_INVALID", `session topic does not exist in keychain: ${o5}`);
      throw await this.deleteSession({ topic: o5 }), new Error(t);
    }
  }
  async isValidSessionOrPairingTopic(o5) {
    if (this.checkRecentlyDeleted(o5), this.client.session.keys.includes(o5)) await this.isValidSessionTopic(o5);
    else if (this.client.core.pairing.pairings.keys.includes(o5)) this.isValidPairingTopic(o5);
    else if (it3(o5, false)) {
      const { message: t } = Et3("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${o5}`);
      throw new Error(t);
    } else {
      const { message: t } = Et3("MISSING_OR_INVALID", `session or pairing topic should be a string: ${o5}`);
      throw new Error(t);
    }
  }
  async isValidProposalId(o5) {
    if (!Ia(o5)) {
      const { message: t } = Et3("MISSING_OR_INVALID", `proposal id should be a number: ${o5}`);
      throw new Error(t);
    }
    if (!this.client.proposal.keys.includes(o5)) {
      const { message: t } = Et3("NO_MATCHING_KEY", `proposal id doesn't exist: ${o5}`);
      throw new Error(t);
    }
    if (fi(this.client.proposal.get(o5).expiryTimestamp)) {
      await this.deleteProposal(o5);
      const { message: t } = Et3("EXPIRED", `proposal id: ${o5}`);
      throw new Error(t);
    }
  }
};
var ks2 = class extends Li2 {
  constructor(o5, t) {
    super(o5, t, ht4, me4), this.core = o5, this.logger = t;
  }
};
var vt4 = class extends Li2 {
  constructor(o5, t) {
    super(o5, t, dt3, me4), this.core = o5, this.logger = t;
  }
};
var Ds = class extends Li2 {
  constructor(o5, t) {
    super(o5, t, yt3, me4, (e2) => e2.id), this.core = o5, this.logger = t;
  }
};
var Ls2 = class extends Li2 {
  constructor(o5, t) {
    super(o5, t, Et5, ae2, () => ce2), this.core = o5, this.logger = t;
  }
};
var Ms2 = class extends Li2 {
  constructor(o5, t) {
    super(o5, t, ft3, ae2), this.core = o5, this.logger = t;
  }
};
var $s2 = class extends Li2 {
  constructor(o5, t) {
    super(o5, t, St5, ae2, (e2) => e2.id), this.core = o5, this.logger = t;
  }
};
var Ks2 = Object.defineProperty;
var Us = (S5, o5, t) => o5 in S5 ? Ks2(S5, o5, { enumerable: true, configurable: true, writable: true, value: t }) : S5[o5] = t;
var Ke5 = (S5, o5, t) => Us(S5, typeof o5 != "symbol" ? o5 + "" : o5, t);
var Gs2 = class {
  constructor(o5, t) {
    this.core = o5, this.logger = t, Ke5(this, "authKeys"), Ke5(this, "pairingTopics"), Ke5(this, "requests"), this.authKeys = new Ls2(this.core, this.logger), this.pairingTopics = new Ms2(this.core, this.logger), this.requests = new $s2(this.core, this.logger);
  }
  async init() {
    await this.authKeys.init(), await this.pairingTopics.init(), await this.requests.init();
  }
};
var js2 = Object.defineProperty;
var Fs = (S5, o5, t) => o5 in S5 ? js2(S5, o5, { enumerable: true, configurable: true, writable: true, value: t }) : S5[o5] = t;
var f5 = (S5, o5, t) => Fs(S5, typeof o5 != "symbol" ? o5 + "" : o5, t);
var Ee4 = class _Ee extends J {
  constructor(o5) {
    super(o5), f5(this, "protocol", Ce5), f5(this, "version", ke5), f5(this, "name", we4.name), f5(this, "metadata"), f5(this, "core"), f5(this, "logger"), f5(this, "events", new import_events8.EventEmitter()), f5(this, "engine"), f5(this, "session"), f5(this, "proposal"), f5(this, "pendingRequest"), f5(this, "auth"), f5(this, "signConfig"), f5(this, "on", (e2, s3) => this.events.on(e2, s3)), f5(this, "once", (e2, s3) => this.events.once(e2, s3)), f5(this, "off", (e2, s3) => this.events.off(e2, s3)), f5(this, "removeListener", (e2, s3) => this.events.removeListener(e2, s3)), f5(this, "removeAllListeners", (e2) => this.events.removeAllListeners(e2)), f5(this, "connect", async (e2) => {
      try {
        return await this.engine.connect(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), f5(this, "pair", async (e2) => {
      try {
        return await this.engine.pair(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), f5(this, "approve", async (e2) => {
      try {
        return await this.engine.approve(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), f5(this, "reject", async (e2) => {
      try {
        return await this.engine.reject(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), f5(this, "update", async (e2) => {
      try {
        return await this.engine.update(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), f5(this, "extend", async (e2) => {
      try {
        return await this.engine.extend(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), f5(this, "request", async (e2) => {
      try {
        return await this.engine.request(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), f5(this, "respond", async (e2) => {
      try {
        return await this.engine.respond(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), f5(this, "ping", async (e2) => {
      try {
        return await this.engine.ping(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), f5(this, "emit", async (e2) => {
      try {
        return await this.engine.emit(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), f5(this, "disconnect", async (e2) => {
      try {
        return await this.engine.disconnect(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), f5(this, "find", (e2) => {
      try {
        return this.engine.find(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), f5(this, "getPendingSessionRequests", () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (e2) {
        throw this.logger.error(e2.message), e2;
      }
    }), f5(this, "authenticate", async (e2, s3) => {
      try {
        return await this.engine.authenticate(e2, s3);
      } catch (i4) {
        throw this.logger.error(i4.message), i4;
      }
    }), f5(this, "formatAuthMessage", (e2) => {
      try {
        return this.engine.formatAuthMessage(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), f5(this, "approveSessionAuthenticate", async (e2) => {
      try {
        return await this.engine.approveSessionAuthenticate(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), f5(this, "rejectSessionAuthenticate", async (e2) => {
      try {
        return await this.engine.rejectSessionAuthenticate(e2);
      } catch (s3) {
        throw this.logger.error(s3.message), s3;
      }
    }), this.name = o5?.name || we4.name, this.metadata = Ks(o5?.metadata), this.signConfig = o5?.signConfig;
    const t = typeof o5?.logger < "u" && typeof o5?.logger != "string" ? o5.logger : (0, import_pino2.default)(k2({ level: o5?.logger || we4.logger }));
    this.core = o5?.core || new Zo4(o5), this.logger = E2(t, this.name), this.session = new vt4(this.core, this.logger), this.proposal = new ks2(this.core, this.logger), this.pendingRequest = new Ds(this.core, this.logger), this.engine = new Cs2(this), this.auth = new Gs2(this.core, this.logger);
  }
  static async init(o5) {
    const t = new _Ee(o5);
    return await t.initialize(), t;
  }
  get context() {
    return y2(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.auth.init(), await this.engine.init(), this.logger.info("SignClient Initialization Success");
    } catch (o5) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(o5.message), o5;
    }
  }
};

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-http-connection/dist/index.es.js
var import_events9 = __toESM(require_events());
var import_cross_fetch = __toESM(require_browser_ponyfill());

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-http-connection/node_modules/@walletconnect/safe-json/dist/esm/index.js
var JSONStringify3 = (data) => JSON.stringify(data, (_3, value) => typeof value === "bigint" ? value.toString() + "n" : value);
var JSONParse3 = (json) => {
  const numbersBiggerThanMaxInt = /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g;
  const serializedData = json.replace(numbersBiggerThanMaxInt, '$1"$2n"$3');
  return JSON.parse(serializedData, (_3, value) => {
    const isCustomFormatBigInt = typeof value === "string" && value.match(/^\d+n$/);
    if (isCustomFormatBigInt)
      return BigInt(value.substring(0, value.length - 1));
    return value;
  });
};
function safeJsonParse3(value) {
  if (typeof value !== "string") {
    throw new Error(`Cannot safe json parse value of type ${typeof value}`);
  }
  try {
    return JSONParse3(value);
  } catch (_a2) {
    return value;
  }
}
function safeJsonStringify4(value) {
  return typeof value === "string" ? value : JSONStringify3(value) || "";
}

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/jsonrpc-http-connection/dist/index.es.js
var P5 = Object.defineProperty;
var w4 = Object.defineProperties;
var E4 = Object.getOwnPropertyDescriptors;
var c6 = Object.getOwnPropertySymbols;
var L3 = Object.prototype.hasOwnProperty;
var O5 = Object.prototype.propertyIsEnumerable;
var l6 = (r3, t, e2) => t in r3 ? P5(r3, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : r3[t] = e2;
var p4 = (r3, t) => {
  for (var e2 in t || (t = {})) L3.call(t, e2) && l6(r3, e2, t[e2]);
  if (c6) for (var e2 of c6(t)) O5.call(t, e2) && l6(r3, e2, t[e2]);
  return r3;
};
var v5 = (r3, t) => w4(r3, E4(t));
var j4 = { Accept: "application/json", "Content-Type": "application/json" };
var T3 = "POST";
var d4 = { headers: j4, method: T3 };
var g3 = 10;
var f6 = class {
  constructor(t, e2 = false) {
    if (this.url = t, this.disableProviderPing = e2, this.events = new import_events9.EventEmitter(), this.isAvailable = false, this.registering = false, !isHttpUrl(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    this.url = t, this.disableProviderPing = e2;
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(t, e2) {
    this.events.on(t, e2);
  }
  once(t, e2) {
    this.events.once(t, e2);
  }
  off(t, e2) {
    this.events.off(t, e2);
  }
  removeListener(t, e2) {
    this.events.removeListener(t, e2);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(t) {
    this.isAvailable || await this.register();
    try {
      const e2 = safeJsonStringify4(t), s3 = await (await (0, import_cross_fetch.default)(this.url, v5(p4({}, d4), { body: e2 }))).json();
      this.onPayload({ data: s3 });
    } catch (e2) {
      this.onError(t.id, e2);
    }
  }
  async register(t = this.url) {
    if (!isHttpUrl(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    if (this.registering) {
      const e2 = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= e2 || this.events.listenerCount("open") >= e2) && this.events.setMaxListeners(e2 + 1), new Promise((s3, i4) => {
        this.events.once("register_error", (n5) => {
          this.resetMaxListeners(), i4(n5);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.isAvailable > "u") return i4(new Error("HTTP connection is missing or invalid"));
          s3();
        });
      });
    }
    this.url = t, this.registering = true;
    try {
      if (!this.disableProviderPing) {
        const e2 = safeJsonStringify4({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await (0, import_cross_fetch.default)(t, v5(p4({}, d4), { body: e2 }));
      }
      this.onOpen();
    } catch (e2) {
      const s3 = this.parseError(e2);
      throw this.events.emit("register_error", s3), this.onClose(), s3;
    }
  }
  onOpen() {
    this.isAvailable = true, this.registering = false, this.events.emit("open");
  }
  onClose() {
    this.isAvailable = false, this.registering = false, this.events.emit("close");
  }
  onPayload(t) {
    if (typeof t.data > "u") return;
    const e2 = typeof t.data == "string" ? safeJsonParse3(t.data) : t.data;
    this.events.emit("payload", e2);
  }
  onError(t, e2) {
    const s3 = this.parseError(e2), i4 = s3.message || s3.toString(), n5 = formatJsonRpcError(t, i4);
    this.events.emit("payload", n5);
  }
  parseError(t, e2 = this.url) {
    return parseConnectionError(t, e2, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > g3 && this.events.setMaxListeners(g3);
  }
};

// ../../../../../private/tmp/wc-vendor/node_modules/@walletconnect/universal-provider/dist/index.es.js
var import_events10 = __toESM(require_events());
var rt4 = "error";
var Lt5 = "wss://relay.walletconnect.org";
var Mt5 = "wc";
var Bt5 = "universal_provider";
var U3 = `${Mt5}@2:${Bt5}:`;
var nt4 = "https://rpc.walletconnect.org/v1/";
var I4 = "generic";
var Gt5 = `${nt4}bundler`;
var l7 = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
function W5(i4) {
  return i4 == null || typeof i4 != "object" && typeof i4 != "function";
}
function at2(i4) {
  return Object.getOwnPropertySymbols(i4).filter((t) => Object.prototype.propertyIsEnumerable.call(i4, t));
}
function ct5(i4) {
  return i4 == null ? i4 === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(i4);
}
var Jt4 = "[object RegExp]";
var ot2 = "[object String]";
var ht5 = "[object Number]";
var pt3 = "[object Boolean]";
var dt4 = "[object Arguments]";
var zt5 = "[object Symbol]";
var kt5 = "[object Date]";
var Wt4 = "[object Map]";
var Kt4 = "[object Set]";
var Vt4 = "[object Array]";
var Xt5 = "[object ArrayBuffer]";
var Yt4 = "[object Object]";
var Qt5 = "[object DataView]";
var Zt4 = "[object Uint8Array]";
var Tt5 = "[object Uint8ClampedArray]";
var te4 = "[object Uint16Array]";
var ee3 = "[object Uint32Array]";
var ie3 = "[object Int8Array]";
var se3 = "[object Int16Array]";
var re2 = "[object Int32Array]";
var ne3 = "[object Float32Array]";
var ae3 = "[object Float64Array]";
function K4(i4) {
  return ArrayBuffer.isView(i4) && !(i4 instanceof DataView);
}
function ce3(i4, t) {
  return $3(i4, void 0, i4, /* @__PURE__ */ new Map(), t);
}
function $3(i4, t, e2, s3 = /* @__PURE__ */ new Map(), n5 = void 0) {
  const a3 = n5?.(i4, t, e2, s3);
  if (a3 != null) return a3;
  if (W5(i4)) return i4;
  if (s3.has(i4)) return s3.get(i4);
  if (Array.isArray(i4)) {
    const r3 = new Array(i4.length);
    s3.set(i4, r3);
    for (let c7 = 0; c7 < i4.length; c7++) r3[c7] = $3(i4[c7], c7, e2, s3, n5);
    return Object.hasOwn(i4, "index") && (r3.index = i4.index), Object.hasOwn(i4, "input") && (r3.input = i4.input), r3;
  }
  if (i4 instanceof Date) return new Date(i4.getTime());
  if (i4 instanceof RegExp) {
    const r3 = new RegExp(i4.source, i4.flags);
    return r3.lastIndex = i4.lastIndex, r3;
  }
  if (i4 instanceof Map) {
    const r3 = /* @__PURE__ */ new Map();
    s3.set(i4, r3);
    for (const [c7, o5] of i4) r3.set(c7, $3(o5, c7, e2, s3, n5));
    return r3;
  }
  if (i4 instanceof Set) {
    const r3 = /* @__PURE__ */ new Set();
    s3.set(i4, r3);
    for (const c7 of i4) r3.add($3(c7, void 0, e2, s3, n5));
    return r3;
  }
  if (typeof Buffer < "u" && Buffer.isBuffer(i4)) return i4.subarray();
  if (K4(i4)) {
    const r3 = new (Object.getPrototypeOf(i4)).constructor(i4.length);
    s3.set(i4, r3);
    for (let c7 = 0; c7 < i4.length; c7++) r3[c7] = $3(i4[c7], c7, e2, s3, n5);
    return r3;
  }
  if (i4 instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && i4 instanceof SharedArrayBuffer) return i4.slice(0);
  if (i4 instanceof DataView) {
    const r3 = new DataView(i4.buffer.slice(0), i4.byteOffset, i4.byteLength);
    return s3.set(i4, r3), y5(r3, i4, e2, s3, n5), r3;
  }
  if (typeof File < "u" && i4 instanceof File) {
    const r3 = new File([i4], i4.name, { type: i4.type });
    return s3.set(i4, r3), y5(r3, i4, e2, s3, n5), r3;
  }
  if (i4 instanceof Blob) {
    const r3 = new Blob([i4], { type: i4.type });
    return s3.set(i4, r3), y5(r3, i4, e2, s3, n5), r3;
  }
  if (i4 instanceof Error) {
    const r3 = new i4.constructor();
    return s3.set(i4, r3), r3.message = i4.message, r3.name = i4.name, r3.stack = i4.stack, r3.cause = i4.cause, y5(r3, i4, e2, s3, n5), r3;
  }
  if (typeof i4 == "object" && oe(i4)) {
    const r3 = Object.create(Object.getPrototypeOf(i4));
    return s3.set(i4, r3), y5(r3, i4, e2, s3, n5), r3;
  }
  return i4;
}
function y5(i4, t, e2 = i4, s3, n5) {
  const a3 = [...Object.keys(t), ...at2(t)];
  for (let r3 = 0; r3 < a3.length; r3++) {
    const c7 = a3[r3], o5 = Object.getOwnPropertyDescriptor(i4, c7);
    (o5 == null || o5.writable) && (i4[c7] = $3(t[c7], c7, e2, s3, n5));
  }
}
function oe(i4) {
  switch (ct5(i4)) {
    case dt4:
    case Vt4:
    case Xt5:
    case Qt5:
    case pt3:
    case kt5:
    case ne3:
    case ae3:
    case ie3:
    case se3:
    case re2:
    case Wt4:
    case ht5:
    case Yt4:
    case Jt4:
    case Kt4:
    case ot2:
    case zt5:
    case Zt4:
    case Tt5:
    case te4:
    case ee3:
      return true;
    default:
      return false;
  }
}
function he5(i4, t) {
  return ce3(i4, (e2, s3, n5, a3) => {
    const r3 = t?.(e2, s3, n5, a3);
    if (r3 != null) return r3;
    if (typeof i4 == "object") switch (Object.prototype.toString.call(i4)) {
      case ht5:
      case ot2:
      case pt3: {
        const c7 = new i4.constructor(i4?.valueOf());
        return y5(c7, i4), c7;
      }
      case dt4: {
        const c7 = {};
        return y5(c7, i4), c7.length = i4.length, c7[Symbol.iterator] = i4[Symbol.iterator], c7;
      }
      default:
        return;
    }
  });
}
function ut5(i4) {
  return he5(i4);
}
function lt5(i4) {
  return i4 !== null && typeof i4 == "object" && ct5(i4) === "[object Arguments]";
}
function ft4(i4) {
  return typeof i4 == "object" && i4 !== null;
}
function pe5() {
}
function de5(i4) {
  return K4(i4);
}
function ue3(i4) {
  if (typeof i4 != "object" || i4 == null) return false;
  if (Object.getPrototypeOf(i4) === null) return true;
  if (Object.prototype.toString.call(i4) !== "[object Object]") {
    const e2 = i4[Symbol.toStringTag];
    return e2 == null || !Object.getOwnPropertyDescriptor(i4, Symbol.toStringTag)?.writable ? false : i4.toString() === `[object ${e2}]`;
  }
  let t = i4;
  for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(i4) === t;
}
function le5(i4) {
  if (W5(i4)) return i4;
  if (Array.isArray(i4) || K4(i4) || i4 instanceof ArrayBuffer || typeof SharedArrayBuffer < "u" && i4 instanceof SharedArrayBuffer) return i4.slice(0);
  const t = Object.getPrototypeOf(i4), e2 = t.constructor;
  if (i4 instanceof Date || i4 instanceof Map || i4 instanceof Set) return new e2(i4);
  if (i4 instanceof RegExp) {
    const s3 = new e2(i4);
    return s3.lastIndex = i4.lastIndex, s3;
  }
  if (i4 instanceof DataView) return new e2(i4.buffer.slice(0));
  if (i4 instanceof Error) {
    const s3 = new e2(i4.message);
    return s3.stack = i4.stack, s3.name = i4.name, s3.cause = i4.cause, s3;
  }
  if (typeof File < "u" && i4 instanceof File) return new e2([i4], i4.name, { type: i4.type, lastModified: i4.lastModified });
  if (typeof i4 == "object") {
    const s3 = Object.create(t);
    return Object.assign(s3, i4);
  }
  return i4;
}
function fe5(i4, ...t) {
  const e2 = t.slice(0, -1), s3 = t[t.length - 1];
  let n5 = i4;
  for (let a3 = 0; a3 < e2.length; a3++) {
    const r3 = e2[a3];
    n5 = x6(n5, r3, s3, /* @__PURE__ */ new Map());
  }
  return n5;
}
function x6(i4, t, e2, s3) {
  if (W5(i4) && (i4 = Object(i4)), t == null || typeof t != "object") return i4;
  if (s3.has(t)) return le5(s3.get(t));
  if (s3.set(t, i4), Array.isArray(t)) {
    t = t.slice();
    for (let a3 = 0; a3 < t.length; a3++) t[a3] = t[a3] ?? void 0;
  }
  const n5 = [...Object.keys(t), ...at2(t)];
  for (let a3 = 0; a3 < n5.length; a3++) {
    const r3 = n5[a3];
    let c7 = t[r3], o5 = i4[r3];
    if (lt5(c7) && (c7 = { ...c7 }), lt5(o5) && (o5 = { ...o5 }), typeof Buffer < "u" && Buffer.isBuffer(c7) && (c7 = ut5(c7)), Array.isArray(c7)) if (typeof o5 == "object" && o5 != null) {
      const v6 = [], w5 = Reflect.ownKeys(o5);
      for (let P6 = 0; P6 < w5.length; P6++) {
        const d5 = w5[P6];
        v6[d5] = o5[d5];
      }
      o5 = v6;
    } else o5 = [];
    const p5 = e2(o5, c7, r3, i4, t, s3);
    p5 != null ? i4[r3] = p5 : Array.isArray(c7) || ft4(o5) && ft4(c7) ? i4[r3] = x6(o5, c7, e2, s3) : o5 == null && ue3(c7) ? i4[r3] = x6({}, c7, e2, s3) : o5 == null && de5(c7) ? i4[r3] = ut5(c7) : (o5 === void 0 || c7 !== void 0) && (i4[r3] = c7);
  }
  return i4;
}
function me5(i4, ...t) {
  return fe5(i4, ...t, pe5);
}
var ve4 = Object.defineProperty;
var ge5 = Object.defineProperties;
var Pe5 = Object.getOwnPropertyDescriptors;
var mt3 = Object.getOwnPropertySymbols;
var we5 = Object.prototype.hasOwnProperty;
var ye5 = Object.prototype.propertyIsEnumerable;
var vt5 = (i4, t, e2) => t in i4 ? ve4(i4, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : i4[t] = e2;
var L4 = (i4, t) => {
  for (var e2 in t || (t = {})) we5.call(t, e2) && vt5(i4, e2, t[e2]);
  if (mt3) for (var e2 of mt3(t)) ye5.call(t, e2) && vt5(i4, e2, t[e2]);
  return i4;
};
var be5 = (i4, t) => ge5(i4, Pe5(t));
function u2(i4, t, e2) {
  var s3;
  const n5 = Fe(i4);
  return ((s3 = t.rpcMap) == null ? void 0 : s3[n5.reference]) || `${nt4}?chainId=${n5.namespace}:${n5.reference}&projectId=${e2}`;
}
function b4(i4) {
  return i4.includes(":") ? i4.split(":")[1] : i4;
}
function gt5(i4) {
  return i4.map((t) => `${t.split(":")[0]}:${t.split(":")[1]}`);
}
function Ie5(i4, t) {
  const e2 = Object.keys(t.namespaces).filter((n5) => n5.includes(i4));
  if (!e2.length) return [];
  const s3 = [];
  return e2.forEach((n5) => {
    const a3 = t.namespaces[n5].accounts;
    s3.push(...a3);
  }), s3;
}
function Pt5(i4) {
  return Object.fromEntries(Object.entries(i4).filter(([t, e2]) => {
    var s3, n5;
    return ((s3 = e2?.chains) == null ? void 0 : s3.length) && ((n5 = e2?.chains) == null ? void 0 : n5.length) > 0;
  }));
}
function M5(i4 = {}, t = {}) {
  const e2 = Pt5(wt5(i4)), s3 = Pt5(wt5(t));
  return me5(e2, s3);
}
function wt5(i4) {
  var t, e2, s3, n5, a3;
  const r3 = {};
  if (!Ve3(i4)) return r3;
  for (const [c7, o5] of Object.entries(i4)) {
    const p5 = Pn3(c7) ? [c7] : o5.chains, v6 = o5.methods || [], w5 = o5.events || [], P6 = o5.rpcMap || {}, d5 = Yo3(c7);
    r3[d5] = be5(L4(L4({}, r3[d5]), o5), { chains: ct3(p5, (t = r3[d5]) == null ? void 0 : t.chains), methods: ct3(v6, (e2 = r3[d5]) == null ? void 0 : e2.methods), events: ct3(w5, (s3 = r3[d5]) == null ? void 0 : s3.events) }), (Ve3(P6) || Ve3(((n5 = r3[d5]) == null ? void 0 : n5.rpcMap) || {})) && (r3[d5].rpcMap = L4(L4({}, P6), (a3 = r3[d5]) == null ? void 0 : a3.rpcMap));
  }
  return r3;
}
function yt4(i4) {
  return i4.includes(":") ? i4.split(":")[2] : i4;
}
function bt3(i4) {
  const t = {};
  for (const [e2, s3] of Object.entries(i4)) {
    const n5 = s3.methods || [], a3 = s3.events || [], r3 = s3.accounts || [], c7 = Pn3(e2) ? [e2] : s3.chains ? s3.chains : gt5(s3.accounts);
    t[e2] = { chains: c7, methods: n5, events: a3, accounts: r3 };
  }
  return t;
}
function V3(i4) {
  return typeof i4 == "number" ? i4 : i4.includes("0x") ? parseInt(i4, 16) : (i4 = i4.includes(":") ? i4.split(":")[1] : i4, isNaN(Number(i4)) ? i4 : Number(i4));
}
var It5 = {};
var h5 = (i4) => It5[i4];
var X3 = (i4, t) => {
  It5[i4] = t;
};
var $e5 = Object.defineProperty;
var $t5 = Object.getOwnPropertySymbols;
var Oe3 = Object.prototype.hasOwnProperty;
var Ae4 = Object.prototype.propertyIsEnumerable;
var Ot5 = (i4, t, e2) => t in i4 ? $e5(i4, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : i4[t] = e2;
var At3 = (i4, t) => {
  for (var e2 in t || (t = {})) Oe3.call(t, e2) && Ot5(i4, e2, t[e2]);
  if ($t5) for (var e2 of $t5(t)) Ae4.call(t, e2) && Ot5(i4, e2, t[e2]);
  return i4;
};
var Ct3 = "eip155";
var Ce6 = ["atomic", "flow-control", "paymasterService", "sessionKeys", "auxiliaryFunds"];
var Ee5 = (i4) => i4 && i4.startsWith("0x") ? BigInt(i4).toString(10) : i4;
var Y3 = (i4) => i4 && i4.startsWith("0x") ? i4 : `0x${BigInt(i4).toString(16)}`;
var Et6 = (i4) => Object.keys(i4).filter((t) => Ce6.includes(t)).reduce((t, e2) => (t[e2] = i4[e2], t), {});
var He5 = (i4, t, e2) => {
  const { sessionProperties: s3 = {}, scopedProperties: n5 = {} } = i4, a3 = {};
  if (!Ve3(n5) && !Ve3(s3)) return;
  const r3 = Et6(s3);
  for (const c7 of e2) {
    const o5 = Ee5(c7);
    if (!o5) continue;
    a3[Y3(o5)] = r3;
    const p5 = n5?.[`${Ct3}:${o5}`];
    if (p5) {
      const v6 = p5?.[`${Ct3}:${o5}:${t}`];
      a3[Y3(o5)] = At3(At3({}, a3[Y3(o5)]), Et6(v6 || p5));
    }
  }
  for (const [c7, o5] of Object.entries(a3)) Object.keys(o5).length === 0 && delete a3[c7];
  return Object.keys(a3).length > 0 ? a3 : void 0;
};
var Se5 = Object.defineProperty;
var Ne3 = (i4, t, e2) => t in i4 ? Se5(i4, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : i4[t] = e2;
var O6 = (i4, t, e2) => Ne3(i4, typeof t != "symbol" ? t + "" : t, e2);
var De5 = class {
  constructor(t) {
    O6(this, "name", "polkadot"), O6(this, "client"), O6(this, "httpProviders"), O6(this, "events"), O6(this, "namespace"), O6(this, "chainId"), this.namespace = t.namespace, this.events = h5("events"), this.client = h5("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e2) {
    this.httpProviders[t] || this.setHttpProvider(t, e2), this.chainId = t, this.events.emit(l7.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((e2) => e2.split(":")[1] === this.chainId.toString()).map((e2) => e2.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e2) => {
      var s3;
      const n5 = b4(e2);
      t[n5] = this.createHttpProvider(n5, (s3 = this.namespace.rpcMap) == null ? void 0 : s3[e2]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e2 = this.httpProviders[t];
    if (typeof e2 > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e2;
  }
  setHttpProvider(t, e2) {
    const s3 = this.createHttpProvider(t, e2);
    s3 && (this.httpProviders[t] = s3);
  }
  createHttpProvider(t, e2) {
    const s3 = e2 || u2(t, this.namespace, this.client.core.projectId);
    if (!s3) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o3(new f6(s3, h5("disableProviderPing")));
  }
};
var qe5 = Object.defineProperty;
var je5 = Object.defineProperties;
var Re4 = Object.getOwnPropertyDescriptors;
var Ht5 = Object.getOwnPropertySymbols;
var _e6 = Object.prototype.hasOwnProperty;
var Fe3 = Object.prototype.propertyIsEnumerable;
var Q5 = (i4, t, e2) => t in i4 ? qe5(i4, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : i4[t] = e2;
var St6 = (i4, t) => {
  for (var e2 in t || (t = {})) _e6.call(t, e2) && Q5(i4, e2, t[e2]);
  if (Ht5) for (var e2 of Ht5(t)) Fe3.call(t, e2) && Q5(i4, e2, t[e2]);
  return i4;
};
var Nt5 = (i4, t) => je5(i4, Re4(t));
var A4 = (i4, t, e2) => Q5(i4, typeof t != "symbol" ? t + "" : t, e2);
var Ue5 = class {
  constructor(t) {
    A4(this, "name", "eip155"), A4(this, "client"), A4(this, "chainId"), A4(this, "namespace"), A4(this, "httpProviders"), A4(this, "events"), this.namespace = t.namespace, this.events = h5("events"), this.client = h5("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(t) {
    switch (t.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(t);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
      case "wallet_getCapabilities":
        return await this.getCapabilities(t);
      case "wallet_getCallsStatus":
        return await this.getCallStatus(t);
    }
    return this.namespace.methods.includes(t.request.method) ? await this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  setDefaultChain(t, e2) {
    this.httpProviders[t] || this.setHttpProvider(parseInt(t), e2), this.chainId = parseInt(t), this.events.emit(l7.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  createHttpProvider(t, e2) {
    const s3 = e2 || u2(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
    if (!s3) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o3(new f6(s3, h5("disableProviderPing")));
  }
  setHttpProvider(t, e2) {
    const s3 = this.createHttpProvider(t, e2);
    s3 && (this.httpProviders[t] = s3);
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e2) => {
      var s3;
      const n5 = parseInt(b4(e2));
      t[n5] = this.createHttpProvider(n5, (s3 = this.namespace.rpcMap) == null ? void 0 : s3[e2]);
    }), t;
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e2) => e2.split(":")[1] === this.chainId.toString()).map((e2) => e2.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const t = this.chainId, e2 = this.httpProviders[t];
    if (typeof e2 > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e2;
  }
  async handleSwitchChain(t) {
    var e2, s3;
    let n5 = t.request.params ? (e2 = t.request.params[0]) == null ? void 0 : e2.chainId : "0x0";
    n5 = n5.startsWith("0x") ? n5 : `0x${n5}`;
    const a3 = parseInt(n5, 16);
    if (this.isChainApproved(a3)) this.setDefaultChain(`${a3}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({ topic: t.topic, request: { method: t.request.method, params: [{ chainId: n5 }] }, chainId: (s3 = this.namespace.chains) == null ? void 0 : s3[0] }), this.setDefaultChain(`${a3}`);
    else throw new Error(`Failed to switch to chain 'eip155:${a3}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(t) {
    return this.namespace.chains.includes(`${this.name}:${t}`);
  }
  async getCapabilities(t) {
    var e2, s3, n5, a3, r3;
    const c7 = (s3 = (e2 = t.request) == null ? void 0 : e2.params) == null ? void 0 : s3[0], o5 = ((a3 = (n5 = t.request) == null ? void 0 : n5.params) == null ? void 0 : a3[1]) || [];
    if (!c7) throw new Error("Missing address parameter in `wallet_getCapabilities` request");
    const p5 = this.client.session.get(t.topic), v6 = ((r3 = p5?.sessionProperties) == null ? void 0 : r3.capabilities) || {}, w5 = `${c7}${o5.join(",")}`, P6 = v6?.[w5];
    if (P6) return P6;
    let d5;
    try {
      d5 = He5(p5, c7, o5);
    } catch (J5) {
      console.warn("Failed to extract capabilities from session", J5);
    }
    if (d5) return d5;
    const tt3 = await this.client.request(t);
    try {
      await this.client.session.update(t.topic, { sessionProperties: Nt5(St6({}, p5.sessionProperties || {}), { capabilities: Nt5(St6({}, v6 || {}), { [w5]: tt3 }) }) });
    } catch (J5) {
      console.warn("Failed to update session with capabilities", J5);
    }
    return tt3;
  }
  async getCallStatus(t) {
    var e2, s3;
    const n5 = this.client.session.get(t.topic), a3 = (e2 = n5.sessionProperties) == null ? void 0 : e2.bundler_name;
    if (a3) {
      const c7 = this.getBundlerUrl(t.chainId, a3);
      try {
        return await this.getUserOperationReceipt(c7, t);
      } catch (o5) {
        console.warn("Failed to fetch call status from bundler", o5, c7);
      }
    }
    const r3 = (s3 = n5.sessionProperties) == null ? void 0 : s3.bundler_url;
    if (r3) try {
      return await this.getUserOperationReceipt(r3, t);
    } catch (c7) {
      console.warn("Failed to fetch call status from custom bundler", c7, r3);
    }
    if (this.namespace.methods.includes(t.request.method)) return await this.client.request(t);
    throw new Error("Fetching call status not approved by the wallet.");
  }
  async getUserOperationReceipt(t, e2) {
    var s3;
    const n5 = new URL(t), a3 = await fetch(n5, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(formatJsonRpcRequest("eth_getUserOperationReceipt", [(s3 = e2.request.params) == null ? void 0 : s3[0]])) });
    if (!a3.ok) throw new Error(`Failed to fetch user operation receipt - ${a3.status}`);
    return await a3.json();
  }
  getBundlerUrl(t, e2) {
    return `${Gt5}?projectId=${this.client.core.projectId}&chainId=${t}&bundler=${e2}`;
  }
};
var xe4 = Object.defineProperty;
var Le6 = (i4, t, e2) => t in i4 ? xe4(i4, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : i4[t] = e2;
var C4 = (i4, t, e2) => Le6(i4, typeof t != "symbol" ? t + "" : t, e2);
var Me6 = class {
  constructor(t) {
    C4(this, "name", "solana"), C4(this, "client"), C4(this, "httpProviders"), C4(this, "events"), C4(this, "namespace"), C4(this, "chainId"), this.namespace = t.namespace, this.events = h5("events"), this.client = h5("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e2) {
    this.httpProviders[t] || this.setHttpProvider(t, e2), this.chainId = t, this.events.emit(l7.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e2) => e2.split(":")[1] === this.chainId.toString()).map((e2) => e2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e2) => {
      var s3;
      const n5 = b4(e2);
      t[n5] = this.createHttpProvider(n5, (s3 = this.namespace.rpcMap) == null ? void 0 : s3[e2]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e2 = this.httpProviders[t];
    if (typeof e2 > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e2;
  }
  setHttpProvider(t, e2) {
    const s3 = this.createHttpProvider(t, e2);
    s3 && (this.httpProviders[t] = s3);
  }
  createHttpProvider(t, e2) {
    const s3 = e2 || u2(t, this.namespace, this.client.core.projectId);
    if (!s3) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o3(new f6(s3, h5("disableProviderPing")));
  }
};
var Be5 = Object.defineProperty;
var Ge4 = (i4, t, e2) => t in i4 ? Be5(i4, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : i4[t] = e2;
var E5 = (i4, t, e2) => Ge4(i4, typeof t != "symbol" ? t + "" : t, e2);
var Je4 = class {
  constructor(t) {
    E5(this, "name", "cosmos"), E5(this, "client"), E5(this, "httpProviders"), E5(this, "events"), E5(this, "namespace"), E5(this, "chainId"), this.namespace = t.namespace, this.events = h5("events"), this.client = h5("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e2) {
    this.httpProviders[t] || this.setHttpProvider(t, e2), this.chainId = t, this.events.emit(l7.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e2) => e2.split(":")[1] === this.chainId.toString()).map((e2) => e2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e2) => {
      var s3;
      const n5 = b4(e2);
      t[n5] = this.createHttpProvider(n5, (s3 = this.namespace.rpcMap) == null ? void 0 : s3[e2]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e2 = this.httpProviders[t];
    if (typeof e2 > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e2;
  }
  setHttpProvider(t, e2) {
    const s3 = this.createHttpProvider(t, e2);
    s3 && (this.httpProviders[t] = s3);
  }
  createHttpProvider(t, e2) {
    const s3 = e2 || u2(t, this.namespace, this.client.core.projectId);
    if (!s3) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o3(new f6(s3, h5("disableProviderPing")));
  }
};
var ze4 = Object.defineProperty;
var ke6 = (i4, t, e2) => t in i4 ? ze4(i4, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : i4[t] = e2;
var H3 = (i4, t, e2) => ke6(i4, typeof t != "symbol" ? t + "" : t, e2);
var We4 = class {
  constructor(t) {
    H3(this, "name", "algorand"), H3(this, "client"), H3(this, "httpProviders"), H3(this, "events"), H3(this, "namespace"), H3(this, "chainId"), this.namespace = t.namespace, this.events = h5("events"), this.client = h5("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e2) {
    if (!this.httpProviders[t]) {
      const s3 = e2 || u2(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
      if (!s3) throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, s3);
    }
    this.chainId = t, this.events.emit(l7.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e2) => e2.split(":")[1] === this.chainId.toString()).map((e2) => e2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e2) => {
      var s3;
      t[e2] = this.createHttpProvider(e2, (s3 = this.namespace.rpcMap) == null ? void 0 : s3[e2]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e2 = this.httpProviders[t];
    if (typeof e2 > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e2;
  }
  setHttpProvider(t, e2) {
    const s3 = this.createHttpProvider(t, e2);
    s3 && (this.httpProviders[t] = s3);
  }
  createHttpProvider(t, e2) {
    const s3 = e2 || u2(t, this.namespace, this.client.core.projectId);
    return typeof s3 > "u" ? void 0 : new o3(new f6(s3, h5("disableProviderPing")));
  }
};
var Ke6 = Object.defineProperty;
var Ve5 = (i4, t, e2) => t in i4 ? Ke6(i4, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : i4[t] = e2;
var S4 = (i4, t, e2) => Ve5(i4, typeof t != "symbol" ? t + "" : t, e2);
var Xe5 = class {
  constructor(t) {
    S4(this, "name", "cip34"), S4(this, "client"), S4(this, "httpProviders"), S4(this, "events"), S4(this, "namespace"), S4(this, "chainId"), this.namespace = t.namespace, this.events = h5("events"), this.client = h5("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e2) {
    this.httpProviders[t] || this.setHttpProvider(t, e2), this.chainId = t, this.events.emit(l7.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e2) => e2.split(":")[1] === this.chainId.toString()).map((e2) => e2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e2) => {
      const s3 = this.getCardanoRPCUrl(e2), n5 = b4(e2);
      t[n5] = this.createHttpProvider(n5, s3);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e2 = this.httpProviders[t];
    if (typeof e2 > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e2;
  }
  getCardanoRPCUrl(t) {
    const e2 = this.namespace.rpcMap;
    if (e2) return e2[t];
  }
  setHttpProvider(t, e2) {
    const s3 = this.createHttpProvider(t, e2);
    s3 && (this.httpProviders[t] = s3);
  }
  createHttpProvider(t, e2) {
    const s3 = e2 || this.getCardanoRPCUrl(t);
    if (!s3) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o3(new f6(s3, h5("disableProviderPing")));
  }
};
var Ye5 = Object.defineProperty;
var Qe4 = (i4, t, e2) => t in i4 ? Ye5(i4, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : i4[t] = e2;
var N12 = (i4, t, e2) => Qe4(i4, typeof t != "symbol" ? t + "" : t, e2);
var Ze5 = class {
  constructor(t) {
    N12(this, "name", "elrond"), N12(this, "client"), N12(this, "httpProviders"), N12(this, "events"), N12(this, "namespace"), N12(this, "chainId"), this.namespace = t.namespace, this.events = h5("events"), this.client = h5("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e2) {
    this.httpProviders[t] || this.setHttpProvider(t, e2), this.chainId = t, this.events.emit(l7.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e2) => e2.split(":")[1] === this.chainId.toString()).map((e2) => e2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e2) => {
      var s3;
      const n5 = b4(e2);
      t[n5] = this.createHttpProvider(n5, (s3 = this.namespace.rpcMap) == null ? void 0 : s3[e2]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e2 = this.httpProviders[t];
    if (typeof e2 > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e2;
  }
  setHttpProvider(t, e2) {
    const s3 = this.createHttpProvider(t, e2);
    s3 && (this.httpProviders[t] = s3);
  }
  createHttpProvider(t, e2) {
    const s3 = e2 || u2(t, this.namespace, this.client.core.projectId);
    if (!s3) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o3(new f6(s3, h5("disableProviderPing")));
  }
};
var Te5 = Object.defineProperty;
var ti2 = (i4, t, e2) => t in i4 ? Te5(i4, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : i4[t] = e2;
var D3 = (i4, t, e2) => ti2(i4, typeof t != "symbol" ? t + "" : t, e2);
var ei3 = class {
  constructor(t) {
    D3(this, "name", "multiversx"), D3(this, "client"), D3(this, "httpProviders"), D3(this, "events"), D3(this, "namespace"), D3(this, "chainId"), this.namespace = t.namespace, this.events = h5("events"), this.client = h5("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e2) {
    this.httpProviders[t] || this.setHttpProvider(t, e2), this.chainId = t, this.events.emit(l7.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e2) => e2.split(":")[1] === this.chainId.toString()).map((e2) => e2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e2) => {
      var s3;
      const n5 = b4(e2);
      t[n5] = this.createHttpProvider(n5, (s3 = this.namespace.rpcMap) == null ? void 0 : s3[e2]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e2 = this.httpProviders[t];
    if (typeof e2 > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e2;
  }
  setHttpProvider(t, e2) {
    const s3 = this.createHttpProvider(t, e2);
    s3 && (this.httpProviders[t] = s3);
  }
  createHttpProvider(t, e2) {
    const s3 = e2 || u2(t, this.namespace, this.client.core.projectId);
    if (!s3) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o3(new f6(s3, h5("disableProviderPing")));
  }
};
var ii3 = Object.defineProperty;
var si3 = (i4, t, e2) => t in i4 ? ii3(i4, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : i4[t] = e2;
var q = (i4, t, e2) => si3(i4, typeof t != "symbol" ? t + "" : t, e2);
var ri3 = class {
  constructor(t) {
    q(this, "name", "near"), q(this, "client"), q(this, "httpProviders"), q(this, "events"), q(this, "namespace"), q(this, "chainId"), this.namespace = t.namespace, this.events = h5("events"), this.client = h5("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e2) {
    if (this.chainId = t, !this.httpProviders[t]) {
      const s3 = e2 || u2(`${this.name}:${t}`, this.namespace);
      if (!s3) throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, s3);
    }
    this.events.emit(l7.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((e2) => e2.split(":")[1] === this.chainId.toString()).map((e2) => e2.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e2) => {
      var s3;
      t[e2] = this.createHttpProvider(e2, (s3 = this.namespace.rpcMap) == null ? void 0 : s3[e2]);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e2 = this.httpProviders[t];
    if (typeof e2 > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e2;
  }
  setHttpProvider(t, e2) {
    const s3 = this.createHttpProvider(t, e2);
    s3 && (this.httpProviders[t] = s3);
  }
  createHttpProvider(t, e2) {
    const s3 = e2 || u2(t, this.namespace);
    return typeof s3 > "u" ? void 0 : new o3(new f6(s3, h5("disableProviderPing")));
  }
};
var ni3 = Object.defineProperty;
var ai3 = (i4, t, e2) => t in i4 ? ni3(i4, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : i4[t] = e2;
var j5 = (i4, t, e2) => ai3(i4, typeof t != "symbol" ? t + "" : t, e2);
var ci3 = class {
  constructor(t) {
    j5(this, "name", "tezos"), j5(this, "client"), j5(this, "httpProviders"), j5(this, "events"), j5(this, "namespace"), j5(this, "chainId"), this.namespace = t.namespace, this.events = h5("events"), this.client = h5("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, e2) {
    if (this.chainId = t, !this.httpProviders[t]) {
      const s3 = e2 || u2(`${this.name}:${t}`, this.namespace);
      if (!s3) throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, s3);
    }
    this.events.emit(l7.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? t.filter((e2) => e2.split(":")[1] === this.chainId.toString()).map((e2) => e2.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const t = {};
    return this.namespace.chains.forEach((e2) => {
      t[e2] = this.createHttpProvider(e2);
    }), t;
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`, e2 = this.httpProviders[t];
    if (typeof e2 > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e2;
  }
  setHttpProvider(t, e2) {
    const s3 = this.createHttpProvider(t, e2);
    s3 && (this.httpProviders[t] = s3);
  }
  createHttpProvider(t, e2) {
    const s3 = e2 || u2(t, this.namespace);
    return typeof s3 > "u" ? void 0 : new o3(new f6(s3));
  }
};
var oi3 = Object.defineProperty;
var hi3 = (i4, t, e2) => t in i4 ? oi3(i4, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : i4[t] = e2;
var R3 = (i4, t, e2) => hi3(i4, typeof t != "symbol" ? t + "" : t, e2);
var pi3 = class {
  constructor(t) {
    R3(this, "name", I4), R3(this, "client"), R3(this, "httpProviders"), R3(this, "events"), R3(this, "namespace"), R3(this, "chainId"), this.namespace = t.namespace, this.events = h5("events"), this.client = h5("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(t) {
    this.namespace.chains = [...new Set((this.namespace.chains || []).concat(t.chains || []))], this.namespace.accounts = [...new Set((this.namespace.accounts || []).concat(t.accounts || []))], this.namespace.methods = [...new Set((this.namespace.methods || []).concat(t.methods || []))], this.namespace.events = [...new Set((this.namespace.events || []).concat(t.events || []))], this.httpProviders = this.createHttpProviders();
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method) ? this.client.request(t) : this.getHttpProvider(t.chainId).request(t.request);
  }
  setDefaultChain(t, e2) {
    this.httpProviders[t] || this.setHttpProvider(t, e2), this.chainId = t, this.events.emit(l7.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t ? [...new Set(t.filter((e2) => e2.split(":")[1] === this.chainId.toString()).map((e2) => e2.split(":")[2]))] : [];
  }
  createHttpProviders() {
    var t, e2;
    const s3 = {};
    return (e2 = (t = this.namespace) == null ? void 0 : t.accounts) == null || e2.forEach((n5) => {
      const a3 = Fe(n5);
      s3[`${a3.namespace}:${a3.reference}`] = this.createHttpProvider(n5);
    }), s3;
  }
  getHttpProvider(t) {
    const e2 = this.httpProviders[t];
    if (typeof e2 > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return e2;
  }
  setHttpProvider(t, e2) {
    const s3 = this.createHttpProvider(t, e2);
    s3 && (this.httpProviders[t] = s3);
  }
  createHttpProvider(t, e2) {
    const s3 = e2 || u2(t, this.namespace, this.client.core.projectId);
    if (!s3) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new o3(new f6(s3, h5("disableProviderPing")));
  }
};
var di3 = Object.defineProperty;
var ui3 = Object.defineProperties;
var li3 = Object.getOwnPropertyDescriptors;
var Dt4 = Object.getOwnPropertySymbols;
var fi3 = Object.prototype.hasOwnProperty;
var mi3 = Object.prototype.propertyIsEnumerable;
var Z2 = (i4, t, e2) => t in i4 ? di3(i4, t, { enumerable: true, configurable: true, writable: true, value: e2 }) : i4[t] = e2;
var B3 = (i4, t) => {
  for (var e2 in t || (t = {})) fi3.call(t, e2) && Z2(i4, e2, t[e2]);
  if (Dt4) for (var e2 of Dt4(t)) mi3.call(t, e2) && Z2(i4, e2, t[e2]);
  return i4;
};
var T4 = (i4, t) => ui3(i4, li3(t));
var f7 = (i4, t, e2) => Z2(i4, typeof t != "symbol" ? t + "" : t, e2);
var G5 = class _G {
  constructor(t) {
    f7(this, "client"), f7(this, "namespaces"), f7(this, "optionalNamespaces"), f7(this, "sessionProperties"), f7(this, "scopedProperties"), f7(this, "events", new import_events10.default()), f7(this, "rpcProviders", {}), f7(this, "session"), f7(this, "providerOpts"), f7(this, "logger"), f7(this, "uri"), f7(this, "disableProviderPing", false), this.providerOpts = t, this.logger = typeof t?.logger < "u" && typeof t?.logger != "string" ? t.logger : (0, import_pino2.default)(k2({ level: t?.logger || rt4 })), this.disableProviderPing = t?.disableProviderPing || false;
  }
  static async init(t) {
    const e2 = new _G(t);
    return await e2.initialize(), e2;
  }
  async request(t, e2, s3) {
    const [n5, a3] = this.validateChain(e2);
    if (!this.session) throw new Error("Please call connect() before request()");
    return await this.getProvider(n5).request({ request: B3({}, t), chainId: `${n5}:${a3}`, topic: this.session.topic, expiry: s3 });
  }
  sendAsync(t, e2, s3, n5) {
    const a3 = (/* @__PURE__ */ new Date()).getTime();
    this.request(t, s3, n5).then((r3) => e2(null, formatJsonRpcResult(a3, r3))).catch((r3) => e2(r3, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var t;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (t = this.session) == null ? void 0 : t.topic, reason: Kt2("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(t) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing) return await this.pair(t.pairingTopic);
  }
  async authenticate(t, e2) {
    if (!this.client) throw new Error("Sign Client not initialized");
    this.setNamespaces(t), await this.cleanupPendingPairings();
    const { uri: s3, response: n5 } = await this.client.authenticate(t, e2);
    s3 && (this.uri = s3, this.events.emit("display_uri", s3));
    const a3 = await n5();
    if (this.session = a3.session, this.session) {
      const r3 = bt3(this.session.namespaces);
      this.namespaces = M5(this.namespaces, r3), await this.persist("namespaces", this.namespaces), this.onConnect();
    }
    return a3;
  }
  on(t, e2) {
    this.events.on(t, e2);
  }
  once(t, e2) {
    this.events.once(t, e2);
  }
  removeListener(t, e2) {
    this.events.removeListener(t, e2);
  }
  off(t, e2) {
    this.events.off(t, e2);
  }
  get isWalletConnect() {
    return true;
  }
  async pair(t) {
    const { uri: e2, approval: s3 } = await this.client.connect({ pairingTopic: t, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties, scopedProperties: this.scopedProperties });
    e2 && (this.uri = e2, this.events.emit("display_uri", e2));
    const n5 = await s3();
    this.session = n5;
    const a3 = bt3(n5.namespaces);
    return this.namespaces = M5(this.namespaces, a3), await this.persist("namespaces", this.namespaces), await this.persist("optionalNamespaces", this.optionalNamespaces), this.onConnect(), this.session;
  }
  setDefaultChain(t, e2) {
    try {
      if (!this.session) return;
      const [s3, n5] = this.validateChain(t), a3 = this.getProvider(s3);
      a3.name === I4 ? a3.setDefaultChain(`${s3}:${n5}`, e2) : a3.setDefaultChain(n5, e2);
    } catch (s3) {
      if (!/Please call connect/.test(s3.message)) throw s3;
    }
  }
  async cleanupPendingPairings(t = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const e2 = this.client.pairing.getAll();
    if (me3(e2)) {
      for (const s3 of e2) t.deletePairings ? this.client.core.expirer.set(s3.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(s3.topic);
      this.logger.info(`Inactive pairings cleared: ${e2.length}`);
    }
  }
  abortPairingAttempt() {
    this.logger.warn("abortPairingAttempt is deprecated. This is now a no-op.");
  }
  async checkStorage() {
    this.namespaces = await this.getFromStore("namespaces") || {}, this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.session && this.createProviders();
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    var t, e2;
    if (this.client = this.providerOpts.client || await Ee4.init({ core: this.providerOpts.core, logger: this.providerOpts.logger || rt4, relayUrl: this.providerOpts.relayUrl || Lt5, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name, customStoragePrefix: this.providerOpts.customStoragePrefix, telemetryEnabled: this.providerOpts.telemetryEnabled }), this.providerOpts.session) try {
      this.session = this.client.session.get(this.providerOpts.session.topic);
    } catch (s3) {
      throw this.logger.error("Failed to get session", s3), new Error(`The provided session: ${(e2 = (t = this.providerOpts) == null ? void 0 : t.session) == null ? void 0 : e2.topic} doesn't exist in the Sign client`);
    }
    else {
      const s3 = this.client.session.getAll();
      this.session = s3[0];
    }
    this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session) throw new Error("Session not initialized. Please call connect() before enable()");
    const t = [...new Set(Object.keys(this.session.namespaces).map((e2) => Yo3(e2)))];
    X3("client", this.client), X3("events", this.events), X3("disableProviderPing", this.disableProviderPing), t.forEach((e2) => {
      if (!this.session) return;
      const s3 = Ie5(e2, this.session);
      if (s3?.length === 0) return;
      const n5 = gt5(s3), a3 = M5(this.namespaces, this.optionalNamespaces), r3 = T4(B3({}, a3[e2]), { accounts: s3, chains: n5 });
      switch (e2) {
        case "eip155":
          this.rpcProviders[e2] = new Ue5({ namespace: r3 });
          break;
        case "algorand":
          this.rpcProviders[e2] = new We4({ namespace: r3 });
          break;
        case "solana":
          this.rpcProviders[e2] = new Me6({ namespace: r3 });
          break;
        case "cosmos":
          this.rpcProviders[e2] = new Je4({ namespace: r3 });
          break;
        case "polkadot":
          this.rpcProviders[e2] = new De5({ namespace: r3 });
          break;
        case "cip34":
          this.rpcProviders[e2] = new Xe5({ namespace: r3 });
          break;
        case "elrond":
          this.rpcProviders[e2] = new Ze5({ namespace: r3 });
          break;
        case "multiversx":
          this.rpcProviders[e2] = new ei3({ namespace: r3 });
          break;
        case "near":
          this.rpcProviders[e2] = new ri3({ namespace: r3 });
          break;
        case "tezos":
          this.rpcProviders[e2] = new ci3({ namespace: r3 });
          break;
        default:
          this.rpcProviders[e2] ? this.rpcProviders[e2].updateNamespace(r3) : this.rpcProviders[e2] = new pi3({ namespace: r3 });
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u") throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (t) => {
      var e2;
      const { topic: s3 } = t;
      s3 === ((e2 = this.session) == null ? void 0 : e2.topic) && this.events.emit("session_ping", t);
    }), this.client.on("session_event", (t) => {
      var e2;
      const { params: s3, topic: n5 } = t;
      if (n5 !== ((e2 = this.session) == null ? void 0 : e2.topic)) return;
      const { event: a3 } = s3;
      if (a3.name === "accountsChanged") {
        const r3 = a3.data;
        r3 && me3(r3) && this.events.emit("accountsChanged", r3.map(yt4));
      } else if (a3.name === "chainChanged") {
        const r3 = s3.chainId, c7 = s3.event.data, o5 = Yo3(r3), p5 = V3(r3) !== V3(c7) ? `${o5}:${V3(c7)}` : r3;
        this.onChainChanged(p5);
      } else this.events.emit(a3.name, a3.data);
      this.events.emit("session_event", t);
    }), this.client.on("session_update", ({ topic: t, params: e2 }) => {
      var s3, n5;
      if (t !== ((s3 = this.session) == null ? void 0 : s3.topic)) return;
      const { namespaces: a3 } = e2, r3 = (n5 = this.client) == null ? void 0 : n5.session.get(t);
      this.session = T4(B3({}, r3), { namespaces: a3 }), this.onSessionUpdate(), this.events.emit("session_update", { topic: t, params: e2 });
    }), this.client.on("session_delete", async (t) => {
      var e2;
      t.topic === ((e2 = this.session) == null ? void 0 : e2.topic) && (await this.cleanup(), this.events.emit("session_delete", t), this.events.emit("disconnect", T4(B3({}, Kt2("USER_DISCONNECTED")), { data: t.topic })));
    }), this.on(l7.DEFAULT_CHAIN_CHANGED, (t) => {
      this.onChainChanged(t, true);
    });
  }
  getProvider(t) {
    return this.rpcProviders[t] || this.rpcProviders[I4];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((t) => {
      var e2;
      this.getProvider(t).updateNamespace((e2 = this.session) == null ? void 0 : e2.namespaces[t]);
    });
  }
  setNamespaces(t) {
    const { namespaces: e2 = {}, optionalNamespaces: s3 = {}, sessionProperties: n5, scopedProperties: a3 } = t;
    this.optionalNamespaces = M5(e2, s3), this.sessionProperties = n5, this.scopedProperties = a3;
  }
  validateChain(t) {
    const [e2, s3] = t?.split(":") || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [e2, s3];
    if (e2 && !Object.keys(this.namespaces || {}).map((r3) => Yo3(r3)).includes(e2)) throw new Error(`Namespace '${e2}' is not configured. Please call connect() first with namespace config.`);
    if (e2 && s3) return [e2, s3];
    const n5 = Yo3(Object.keys(this.namespaces)[0]);

    console.log("========== WalletConnect Debug ==========");
    console.log("Namespace:", n5);
    console.log("this.namespaces =", this.namespaces);
    console.log("this.rpcProviders =", this.rpcProviders);
      console.log("this.rpcProviders[n5] =", this.rpcProviders[n5]);
    console.log("this.session =", this.session);
    console.log("All Sessions =", this.client?.session?.getAll?.());

    const a3 = this.rpcProviders[n5].getDefaultChain();
      return [n5, a3];
  }
  async requestAccounts() {
    const [t] = this.validateChain();
    return await this.getProvider(t).requestAccounts();
  }
  async onChainChanged(t, e2 = false) {
    if (!this.namespaces) return;
    const [s3, n5] = this.validateChain(t);
    if (!n5) return;
    this.updateNamespaceChain(s3, n5), this.events.emit("chainChanged", n5);
    const a3 = this.getProvider(s3).getDefaultChain();
    e2 || this.getProvider(s3).setDefaultChain(n5), this.emitAccountsChangedOnChainChange({ namespace: s3, previousChainId: a3, newChainId: t }), await this.persist("namespaces", this.namespaces);
  }
  emitAccountsChangedOnChainChange({ namespace: t, previousChainId: e2, newChainId: s3 }) {
    var n5, a3;
    try {
      if (e2 === s3) return;
      const r3 = (a3 = (n5 = this.session) == null ? void 0 : n5.namespaces[t]) == null ? void 0 : a3.accounts;
      if (!r3) return;
      const c7 = r3.filter((o5) => o5.includes(`${s3}:`)).map(yt4);
      if (!me3(c7)) return;
      this.events.emit("accountsChanged", c7);
    } catch (r3) {
      this.logger.warn("Failed to emit accountsChanged on chain change", r3);
    }
  }
  updateNamespaceChain(t, e2) {
    if (!this.namespaces) return;
    const s3 = this.namespaces[t] ? t : `${t}:${e2}`, n5 = { chains: [], methods: [], events: [], defaultChain: e2 };
    this.namespaces[s3] ? this.namespaces[s3] && (this.namespaces[s3].defaultChain = e2) : this.namespaces[s3] = n5;
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, await this.deleteFromStore("namespaces"), await this.deleteFromStore("optionalNamespaces"), await this.deleteFromStore("sessionProperties"), this.session = void 0, await this.cleanupPendingPairings({ deletePairings: true }), await this.cleanupStorage();
  }
  async persist(t, e2) {
    var s3;
    const n5 = ((s3 = this.session) == null ? void 0 : s3.topic) || "";
    await this.client.core.storage.setItem(`${U3}/${t}${n5}`, e2);
  }
  async getFromStore(t) {
    var e2;
    const s3 = ((e2 = this.session) == null ? void 0 : e2.topic) || "";
    return await this.client.core.storage.getItem(`${U3}/${t}${s3}`);
  }
  async deleteFromStore(t) {
    var e2;
    const s3 = ((e2 = this.session) == null ? void 0 : e2.topic) || "";
    await this.client.core.storage.removeItem(`${U3}/${t}${s3}`);
  }
  async cleanupStorage() {
    var t;
    try {
      if (((t = this.client) == null ? void 0 : t.session.length) > 0) return;
      const e2 = await this.client.core.storage.getKeys();
      for (const s3 of e2) s3.startsWith(U3) && await this.client.core.storage.removeItem(s3);
    } catch (e2) {
      this.logger.warn("Failed to cleanup storage", e2);
    }
  }
};

// ../../../../../private/tmp/wc-vendor/entry.js
var import_qrcode = __toESM(require_browser3());
var export_QRCode = import_qrcode.default;
export {
  export_QRCode as QRCode,
  G5 as UniversalProvider
};
/*! Bundled license information:

tslib/tslib.es6.js:
tslib/tslib.es6.js:
tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

@noble/hashes/esm/utils.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@noble/curves/esm/abstract/utils.js:
@noble/curves/esm/abstract/modular.js:
@noble/curves/esm/abstract/curve.js:
@noble/curves/esm/abstract/weierstrass.js:
@noble/curves/esm/_shortw_utils.js:
@noble/curves/esm/secp256k1.js:
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@walletconnect/relay-auth/dist/index.es.js:
@walletconnect/relay-auth/dist/index.es.js:
  (*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) *)
  (*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@scure/base/lib/esm/index.js:
  (*! scure-base - MIT License (c) 2022 Paul Miller (paulmillr.com) *)

@walletconnect/utils/dist/index.es.js:
  (*! noble-ciphers - MIT License (c) 2023 Paul Miller (paulmillr.com) *)
*/
