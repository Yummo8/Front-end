// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5TWho":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "3c5f3e283a86c5be";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"ahXNU":[function(require,module,exports) {
module.exports = function(e1) {
    var t1 = {};
    function r(n) {
        if (t1[n]) return t1[n].exports;
        var o = t1[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e1[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
    }
    return r.m = e1, r.c = t1, r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        });
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        });
    }, r.t = function(e, t2) {
        if (1 & t2 && (e = r(e)), 8 & t2) return e;
        if (4 & t2 && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (r.r(n), Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }), 2 & t2 && "string" != typeof e) for(var o in e)r.d(n, o, (function(t) {
            return e[t];
        }).bind(null, o));
        return n;
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return r.d(t, "a", t), t;
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, r.p = "", r(r.s = 3);
}([
    function(e2, t) {
        e2.exports = function(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        };
    },
    function(e3, t3) {
        e3.exports = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        };
    },
    function(e4, t4, r1) {
        "use strict";
        function n1() {
            return Math.floor(9e4 * Math.random()) + 1e4;
        }
        Object.defineProperty(t4, "__esModule", {
            value: !0
        }), t4.sendAsyncWrapper = function(e5, t5) {
            var r = this;
            return new Promise(function(o, a) {
                r.sendAsync({
                    jsonrpc: "2.0",
                    id: n1(),
                    method: e5,
                    params: t5 || []
                }, function(e, t) {
                    e ? a(e) : o(t.result);
                });
            });
        }, t4.sendFortmaticAsyncWrapper = function(e6) {
            var t6 = this;
            return new Promise(function(r, n) {
                t6.getProvider().sendFortmaticAsync(e6, function(e, t) {
                    e ? n(e) : r(t ? t.result : {});
                });
            });
        }, t4.randomId = n1, t4.findExistingResponse = function(e, t) {
            for(var r = 0; r < e.length; r++)if (e[r].id === t) return e[r];
            return null;
        };
    },
    function(e, t, r) {
        e.exports = r(4);
    },
    function(e7, t7, r2) {
        "use strict";
        var n2 = r2(0), o = n2(r2(1)), a = n2(r2(5)), i = r2(2), s = "fm_composeSend", c = "fm_logout", u = "fm_get_balances", l = "fm_get_transactions", f = "fm_is_logged_in", d = "fm_accountSettings", h = "fm_deposit", p = "fm_get_user", m = "fm_configure", y = {};
        e7.exports = function e8(t8, r3, n) {
            var g = this;
            if ((0, o.default)(this, e8), this.fortmaticClient = "https://x2.fortmatic.com", !t8) throw new Error("Please provide a Fortmatic API key that you acquired from the developer dashboard.");
            this.apiKey = t8, this.options = n, this.ethNetwork = r3, this.queryParams = btoa(JSON.stringify({
                API_KEY: t8,
                ETH_NETWORK: r3
            })), this.transactions = {
                send: function(e, t) {
                    var r = new v(s, {
                        to: e.to,
                        value: e.amount
                    });
                    g.getProvider().sendFortmaticAsync(r, t);
                }
            }, this.getProvider = function() {
                return y["fortmatic-".concat(g.queryParams)] || (y["fortmatic-".concat(g.queryParams)] = new a.default(g.fortmaticClient, {
                    API_KEY: t8,
                    ETH_NETWORK: r3
                })), y["fortmatic-".concat(g.queryParams)];
            }, this.user = {
                login: function() {
                    return g.getProvider().enable();
                },
                logout: function() {
                    g.getProvider().account = null, g.getProvider().network = null;
                    var e = new v(c);
                    return i.sendFortmaticAsyncWrapper.call(g, e);
                },
                getUser: function() {
                    var e = new v(p);
                    return i.sendFortmaticAsyncWrapper.call(g, e);
                },
                getBalances: function() {
                    var e = new v(u);
                    return i.sendFortmaticAsyncWrapper.call(g, e);
                },
                getTransactions: function() {
                    var e = new v(l);
                    return i.sendFortmaticAsyncWrapper.call(g, e);
                },
                isLoggedIn: function() {
                    var e = new v(f);
                    return i.sendFortmaticAsyncWrapper.call(g, e);
                },
                settings: function() {
                    var e = new v(d);
                    return i.sendFortmaticAsyncWrapper.call(g, e);
                },
                deposit: function(e) {
                    var t = new v(h, e);
                    return i.sendFortmaticAsyncWrapper.call(g, t);
                }
            }, this.configure = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = new v(m);
                return t.params = [
                    e
                ], i.sendFortmaticAsyncWrapper.call(g, t);
            };
        };
        var v = function e(t, r) {
            (0, o.default)(this, e), this.id = (0, i.randomId)(), this.method = t, this.params = r ? [
                r
            ] : [
                {}
            ];
        };
    },
    function(e9, t9, r4) {
        "use strict";
        var n3 = r4(0);
        Object.defineProperty(t9, "__esModule", {
            value: !0
        }), t9.default = void 0;
        var o1 = n3(r4(6)), a1 = n3(r4(9)), i = n3(r4(1)), s = n3(r4(10)), c = r4(11), u = n3(r4(12)), l = r4(2), f = function() {
            function e10(t, r) {
                if ((0, i.default)(this, e10), this.fortmaticClient = t, this.requests = {}, this.queue = [], this.account = null, this.network = null, this.isFortmatic = !0, this.overlayReady = !1, this.isLoggedIn = !1, this.postMessages = {
                    FORTMATIC_HANDLE_BATCH_REQUEST: "FORTMATIC_HANDLE_BATCH_REQUEST",
                    FORTMATIC_HANDLE_REQUEST: "FORTMATIC_HANDLE_REQUEST",
                    FORTMATIC_HANDLE_FORTMATIC_REQUEST: "FORTMATIC_HANDLE_FORTMATIC_REQUEST",
                    FORTMATIC_HANDLE_RESPONSE: "FORTMATIC_HANDLE_RESPONSE",
                    FORTMATIC_OVERLAY_READY: "FORTMATIC_OVERLAY_READY",
                    FORTMATIC_SHOW_OVERLAY: "FORTMATIC_SHOW_OVERLAY",
                    FORTMATIC_HIDE_OVERLAY: "FORTMATIC_HIDE_OVERLAY",
                    FORTMATIC_USER_DENIED: "FORTMATIC_USER_DENIED",
                    FORTMATIC_USER_LOGOUT: "FORTMATIC_USER_LOGOUT",
                    FORTMATIC_UNAUTHORIZED_API_KEY: "FORTMATIC_UNAUTHORIZED_API_KEY"
                }, !r.API_KEY) throw new Error("Please provide a Fortmatic API key that you acquired from the developer dashboard.");
                this.options = {
                    API_KEY: r.API_KEY,
                    ETH_NETWORK: r.ETH_NETWORK,
                    DOMAIN_ORIGIN: window.location ? window.location.origin : "",
                    version: c.version
                }, this.queryParams = btoa(JSON.stringify(this.options)), this.constructPostMessage(), this.overlay = this.createOverlay(), this.listenMessage();
            }
            return (0, s.default)(e10, [
                {
                    key: "constructPostMessage",
                    value: function() {
                        var e = this;
                        Object.keys(this.postMessages).map(function(t) {
                            e.postMessages[t] += "-".concat(e.queryParams);
                        });
                    }
                },
                {
                    key: "createOverlay",
                    value: function() {
                        var e11 = this;
                        return new Promise(function(t10, r5) {
                            var n4 = function() {
                                if (function() {
                                    var t = !0, r = !1, n = void 0;
                                    try {
                                        for(var o, a = document.getElementsByClassName("fortmatic-iframe")[Symbol.iterator](); !(t = (o = a.next()).done); t = !0)if (o.value.src.includes(e11.queryParams)) return !1;
                                    } catch (e) {
                                        r = !0, n = e;
                                    } finally{
                                        try {
                                            t || null == a.return || a.return();
                                        } finally{
                                            if (r) throw n;
                                        }
                                    }
                                    return !0;
                                }()) {
                                    var r6 = document.createElement("style");
                                    r6.innerHTML = u.default.css, r6.type = "text/css", document.head.appendChild(r6);
                                    var n5 = document.createElement("iframe");
                                    n5.className = "fortmatic-iframe", n5.src = "".concat(e11.fortmaticClient, "/send?params=").concat(e11.queryParams), document.body.appendChild(n5);
                                    var o2 = document.createElement("img");
                                    o2.src = "https://static.fortmatic.com/assets/trans.gif", document.body.appendChild(o2), t10({
                                        iframe: n5
                                    });
                                } else console.error("Fortmatic: Duplicate instances found.");
                            };
                            [
                                "loaded",
                                "interactive",
                                "complete"
                            ].indexOf(document.readyState) > -1 ? n4() : window.addEventListener("load", n4.bind(e11), !1);
                        });
                    }
                },
                {
                    key: "showOverlay",
                    value: function() {
                        var e12 = (0, a1.default)(o1.default.mark(function e13() {
                            return o1.default.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return e.next = 2, this.overlay;
                                    case 2:
                                        e.sent.iframe.style.display = "block";
                                    case 4:
                                    case "end":
                                        return e.stop();
                                }
                            }, e13, this);
                        }));
                        return function() {
                            return e12.apply(this, arguments);
                        };
                    }()
                },
                {
                    key: "hideOverlay",
                    value: function() {
                        var e14 = (0, a1.default)(o1.default.mark(function e15() {
                            return o1.default.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return e.next = 2, this.overlay;
                                    case 2:
                                        e.sent.iframe.style.display = "none";
                                    case 4:
                                    case "end":
                                        return e.stop();
                                }
                            }, e15, this);
                        }));
                        return function() {
                            return e14.apply(this, arguments);
                        };
                    }()
                },
                {
                    key: "sendAsync",
                    value: function(e16, t) {
                        e16.length > 0 ? this.enqueue({
                            payload: {
                                id: (0, l.randomId)(),
                                batch: e16.map(function(e) {
                                    return e.id = (0, l.randomId)(), e;
                                }),
                                method: "eth_batchRequest"
                            },
                            cb: t
                        }) : this.enqueue({
                            payload: e16,
                            cb: t
                        });
                    }
                },
                {
                    key: "sendFortmaticAsync",
                    value: function(e, t) {
                        this.enqueue({
                            payload: e,
                            cb: t,
                            isNative: !0
                        });
                    }
                },
                {
                    key: "send",
                    value: function(e, t) {
                        if ("string" == typeof e) return l.sendAsyncWrapper.call(this, e, t);
                        if (!t) {
                            console.warn("Non-async web3 methods will be deprecated in web3 > 1.0, and are not supported by the Fortmatic provider. An async method to be used instead."), this.sendAsync(e, function() {});
                            var r = {};
                            switch(e.method){
                                case "eth_accounts":
                                    r = this.account ? [
                                        this.account
                                    ] : [];
                                    break;
                                case "eth_coinbase":
                                    r = this.account;
                                    break;
                                case "net_version":
                                    r = this.network || (this.options.API_KEY.startsWith("pk_live") ? 1 : 4);
                                    break;
                                case "eth_uninstallFilter":
                                    r = !0;
                                    break;
                                default:
                                    r = {};
                            }
                            return {
                                id: e.id,
                                jsonrpc: e.jsonrpc,
                                result: r
                            };
                        }
                        this.sendAsync(e, t);
                    }
                },
                {
                    key: "enqueue",
                    value: function(e) {
                        this.queue.push(e), this.overlayReady && this.dequeue();
                    }
                },
                {
                    key: "dequeue",
                    value: function() {
                        var e17 = (0, a1.default)(o1.default.mark(function e18() {
                            var t11, r, n6, a = this;
                            return o1.default.wrap(function(e19) {
                                for(;;)switch(e19.prev = e19.next){
                                    case 0:
                                        if (0 !== this.queue.length) {
                                            e19.next = 2;
                                            break;
                                        }
                                        return e19.abrupt("return");
                                    case 2:
                                        if (!(t11 = this.queue.shift())) {
                                            e19.next = 11;
                                            break;
                                        }
                                        return r = t11.payload, n6 = t11.cb, r.id = (0, l.randomId)(), e19.next = 9, this.postMessage(t11.isNative ? this.postMessages.FORTMATIC_HANDLE_FORTMATIC_REQUEST : this.postMessages.FORTMATIC_HANDLE_REQUEST, t11.payload);
                                    case 9:
                                        r.batch && r.batch.length > 0 ? (r.batch.forEach(function(e20) {
                                            a.requests[e20.id] = {
                                                parentId: r.id,
                                                payload: e20,
                                                cb: function(e, t) {
                                                    var n = a.requests[r.id].batchResponse;
                                                    if (e && e.response && !(0, l.findExistingResponse)(n, e.response.id)) throw n.push({
                                                        jsonrpc: "2.0",
                                                        id: e.response.id,
                                                        error: {
                                                            code: e.response.code,
                                                            message: e.response.message
                                                        }
                                                    }), a.requests[r.id].cb(null, n), e.response;
                                                    if (t && t.result && !(0, l.findExistingResponse)(n, t.id)) return n.push(t);
                                                    throw new Error("Fortmatic: unexpected callback behavior");
                                                }
                                            };
                                        }), this.requests[r.id] = {
                                            payload: r,
                                            cb: n6,
                                            batchResponse: []
                                        }) : this.requests[r.id] = {
                                            payload: r,
                                            cb: n6
                                        }, this.dequeue();
                                    case 11:
                                    case "end":
                                        return e19.stop();
                                }
                            }, e18, this);
                        }));
                        return function() {
                            return e17.apply(this, arguments);
                        };
                    }()
                },
                {
                    key: "postMessage",
                    value: function() {
                        var e21 = (0, a1.default)(o1.default.mark(function e22(t, r) {
                            var n;
                            return o1.default.wrap(function(e) {
                                for(;;)switch(e.prev = e.next){
                                    case 0:
                                        return e.next = 2, this.overlay;
                                    case 2:
                                        if (!(n = e.sent).iframe.contentWindow) {
                                            e.next = 7;
                                            break;
                                        }
                                        n.iframe.contentWindow.postMessage({
                                            msgType: t,
                                            payload: r
                                        }, "*"), e.next = 8;
                                        break;
                                    case 7:
                                        throw new Error("Fortmatic: Modal is not ready.");
                                    case 8:
                                    case "end":
                                        return e.stop();
                                }
                            }, e22, this);
                        }));
                        return function(t, r) {
                            return e21.apply(this, arguments);
                        };
                    }()
                },
                {
                    key: "enable",
                    value: function() {
                        return l.sendAsyncWrapper.call(this, "eth_accounts");
                    }
                },
                {
                    key: "listenMessage",
                    value: function() {
                        var e25 = this;
                        window.addEventListener("message", function(t) {
                            if (t.origin === e25.fortmaticClient) {
                                var r = t.data.response ? t.data.response.id : null;
                                switch(t.data.msgType){
                                    case e25.postMessages.FORTMATIC_OVERLAY_READY:
                                        e25.overlayReady = !0, e25.dequeue();
                                        break;
                                    case e25.postMessages.FORTMATIC_HANDLE_RESPONSE:
                                        try {
                                            e25.requests[r].cb(null, t.data.response);
                                            var n = e25.requests[r].parentId;
                                            n && e25.requests[n].payload.batch.length === e25.requests[n].batchResponse.length && e25.requests[n].cb(null, e25.requests[n].batchResponse), "eth_accounts" === e25.requests[r].payload.method ? e25.account = t.data.response.result[0] : "eth_coinbase" === e25.requests[r].payload.method ? e25.account = t.data.response.result : "net_version" === e25.requests[r].payload.method && (e25.network = t.data.response.result);
                                        } catch (e23) {}
                                        e25.isLoggedIn = !0, e25.dequeue();
                                        break;
                                    case e25.postMessages.FORTMATIC_HIDE_OVERLAY:
                                        e25.hideOverlay();
                                        break;
                                    case e25.postMessages.FORTMATIC_SHOW_OVERLAY:
                                        e25.showOverlay();
                                        break;
                                    case e25.postMessages.FORTMATIC_USER_LOGOUT:
                                        e25.account = null, e25.network = null, e25.isLoggedIn = !1;
                                        break;
                                    case e25.postMessages.FORTMATIC_UNAUTHORIZED_API_KEY:
                                        throw e25.overlayReady = !1, new Error("Given API key is not authorized to access the resource.");
                                    case e25.postMessages.FORTMATIC_USER_DENIED:
                                        if (r) {
                                            var o = t.data.response && t.data.response.message ? t.data.response.message : "Fortmatic: Modal was closed without executing action!", a = t.data.response && t.data.response.code ? t.data.response.code : 1;
                                            e25.requests[r].cb({
                                                message: o,
                                                code: a,
                                                response: t.data.response
                                            });
                                        } else e25.queue.forEach(function(e) {
                                            return e.cb({
                                                message: "Fortmatic: Modal was closed without executing action!",
                                                code: 1
                                            });
                                        });
                                        e25.dequeue();
                                }
                            }
                        });
                    }
                }
            ]), e10;
        }();
        t9.default = f;
    },
    function(e, t, r) {
        e.exports = r(7);
    },
    function(e, t, r) {
        var n = function() {
            return this || "object" == typeof self && self;
        }() || Function("return this")(), o = n.regeneratorRuntime && Object.getOwnPropertyNames(n).indexOf("regeneratorRuntime") >= 0, a = o && n.regeneratorRuntime;
        if (n.regeneratorRuntime = void 0, e.exports = r(8), o) n.regeneratorRuntime = a;
        else try {
            delete n.regeneratorRuntime;
        } catch (e26) {
            n.regeneratorRuntime = void 0;
        }
    },
    function(e27, t12) {
        !function(t13) {
            var r7, n7 = Object.prototype, o3 = n7.hasOwnProperty, a2 = "function" == typeof Symbol ? Symbol : {}, i1 = a2.iterator || "@@iterator", s1 = a2.asyncIterator || "@@asyncIterator", c1 = a2.toStringTag || "@@toStringTag", u1 = "object" == typeof e27, l = t13.regeneratorRuntime;
            if (l) u1 && (e27.exports = l);
            else {
                (l = t13.regeneratorRuntime = u1 ? e27.exports : {}).wrap = _;
                var f = "suspendedStart", d = "suspendedYield", h = "executing", p = "completed", m = {}, y = {};
                y[i1] = function() {
                    return this;
                };
                var v = Object.getPrototypeOf, g = v && v(v(L([])));
                g && g !== n7 && o3.call(g, i1) && (y = g);
                var b = A.prototype = w.prototype = Object.create(y);
                T.prototype = b.constructor = A, A.constructor = T, A[c1] = T.displayName = "GeneratorFunction", l.isGeneratorFunction = function(e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === T || "GeneratorFunction" === (t.displayName || t.name));
                }, l.mark = function(e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, A) : (e.__proto__ = A, c1 in e || (e[c1] = "GeneratorFunction")), e.prototype = Object.create(b), e;
                }, l.awrap = function(e) {
                    return {
                        __await: e
                    };
                }, O(R.prototype), R.prototype[s1] = function() {
                    return this;
                }, l.AsyncIterator = R, l.async = function(e28, t, r, n) {
                    var o = new R(_(e28, t, r, n));
                    return l.isGeneratorFunction(t) ? o : o.next().then(function(e) {
                        return e.done ? e.value : o.next();
                    });
                }, O(b), b[c1] = "Generator", b[i1] = function() {
                    return this;
                }, b.toString = function() {
                    return "[object Generator]";
                }, l.keys = function(e) {
                    var t = [];
                    for(var r8 in e)t.push(r8);
                    return t.reverse(), function r() {
                        for(; t.length;){
                            var n = t.pop();
                            if (n in e) return r.value = n, r.done = !1, r;
                        }
                        return r.done = !0, r;
                    };
                }, l.values = L, F.prototype = {
                    constructor: F,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = r7, this.done = !1, this.delegate = null, this.method = "next", this.arg = r7, this.tryEntries.forEach(M), !e) for(var t in this)"t" === t.charAt(0) && o3.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = r7);
                    },
                    stop: function() {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var t = this;
                        function n8(n, o) {
                            return s.type = "throw", s.arg = e, t.next = n, o && (t.method = "next", t.arg = r7), !!o;
                        }
                        for(var a = this.tryEntries.length - 1; a >= 0; --a){
                            var i = this.tryEntries[a], s = i.completion;
                            if ("root" === i.tryLoc) return n8("end");
                            if (i.tryLoc <= this.prev) {
                                var c = o3.call(i, "catchLoc"), u = o3.call(i, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < i.catchLoc) return n8(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return n8(i.finallyLoc);
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return n8(i.catchLoc, !0);
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return n8(i.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function(e, t) {
                        for(var r = this.tryEntries.length - 1; r >= 0; --r){
                            var n = this.tryEntries[r];
                            if (n.tryLoc <= this.prev && o3.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var a = n;
                                break;
                            }
                        }
                        a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, m) : this.complete(i);
                    },
                    complete: function(e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m;
                    },
                    finish: function(e) {
                        for(var t = this.tryEntries.length - 1; t >= 0; --t){
                            var r = this.tryEntries[t];
                            if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), M(r), m;
                        }
                    },
                    catch: function(e) {
                        for(var t = this.tryEntries.length - 1; t >= 0; --t){
                            var r = this.tryEntries[t];
                            if (r.tryLoc === e) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    M(r);
                                }
                                return o;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function(e, t, n) {
                        return this.delegate = {
                            iterator: L(e),
                            resultName: t,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = r7), m;
                    }
                };
            }
            function _(e29, t14, r9, n9) {
                var o4 = t14 && t14.prototype instanceof w ? t14 : w, a3 = Object.create(o4.prototype), i2 = new F(n9 || []);
                return a3._invoke = function(e, t, r) {
                    var n = f;
                    return function(o, a) {
                        if (n === h) throw new Error("Generator is already running");
                        if (n === p) {
                            if ("throw" === o) throw a;
                            return k();
                        }
                        for(r.method = o, r.arg = a;;){
                            var i = r.delegate;
                            if (i) {
                                var s = I(i, r);
                                if (s) {
                                    if (s === m) continue;
                                    return s;
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (n === f) throw n = p, r.arg;
                                r.dispatchException(r.arg);
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            n = h;
                            var c = E(e, t, r);
                            if ("normal" === c.type) {
                                if (n = r.done ? p : d, c.arg === m) continue;
                                return {
                                    value: c.arg,
                                    done: r.done
                                };
                            }
                            "throw" === c.type && (n = p, r.method = "throw", r.arg = c.arg);
                        }
                    };
                }(e29, r9, i2), a3;
            }
            function E(e, t, r) {
                try {
                    return {
                        type: "normal",
                        arg: e.call(t, r)
                    };
                } catch (e30) {
                    return {
                        type: "throw",
                        arg: e30
                    };
                }
            }
            function w() {}
            function T() {}
            function A() {}
            function O(e31) {
                [
                    "next",
                    "throw",
                    "return"
                ].forEach(function(t) {
                    e31[t] = function(e) {
                        return this._invoke(t, e);
                    };
                });
            }
            function R(e32) {
                var t15;
                this._invoke = function(r10, n10) {
                    function a4() {
                        return new Promise(function(t16, a5) {
                            !function t(r, n, a, i) {
                                var s = E(e32[r], e32, n);
                                if ("throw" !== s.type) {
                                    var c = s.arg, u = c.value;
                                    return u && "object" == typeof u && o3.call(u, "__await") ? Promise.resolve(u.__await).then(function(e) {
                                        t("next", e, a, i);
                                    }, function(e) {
                                        t("throw", e, a, i);
                                    }) : Promise.resolve(u).then(function(e) {
                                        c.value = e, a(c);
                                    }, function(e) {
                                        return t("throw", e, a, i);
                                    });
                                }
                                i(s.arg);
                            }(r10, n10, t16, a5);
                        });
                    }
                    return t15 = t15 ? t15.then(a4, a4) : a4();
                };
            }
            function I(e, t) {
                var n = e.iterator[t.method];
                if (n === r7) {
                    if (t.delegate = null, "throw" === t.method) {
                        if (e.iterator.return && (t.method = "return", t.arg = r7, I(e, t), "throw" === t.method)) return m;
                        t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method");
                    }
                    return m;
                }
                var o = E(n, e.iterator, t.arg);
                if ("throw" === o.type) return t.method = "throw", t.arg = o.arg, t.delegate = null, m;
                var a = o.arg;
                return a ? a.done ? (t[e.resultName] = a.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = r7), t.delegate = null, m) : a : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, m);
            }
            function x(e) {
                var t = {
                    tryLoc: e[0]
                };
                1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
            }
            function M(e) {
                var t = e.completion || {};
                t.type = "normal", delete t.arg, e.completion = t;
            }
            function F(e) {
                this.tryEntries = [
                    {
                        tryLoc: "root"
                    }
                ], e.forEach(x, this), this.reset(!0);
            }
            function L(e) {
                if (e) {
                    var t17 = e[i1];
                    if (t17) return t17.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var n = -1, a = function t() {
                            for(; ++n < e.length;)if (o3.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = r7, t.done = !0, t;
                        };
                        return a.next = a;
                    }
                }
                return {
                    next: k
                };
            }
            function k() {
                return {
                    value: r7,
                    done: !0
                };
            }
        }(function() {
            return this || "object" == typeof self && self;
        }() || Function("return this")());
    },
    function(e33, t19) {
        function r11(e, t, r, n, o, a, i) {
            try {
                var s = e[a](i), c = s.value;
            } catch (e34) {
                return void r(e34);
            }
            s.done ? t(c) : Promise.resolve(c).then(n, o);
        }
        e33.exports = function(e35) {
            return function() {
                var t = this, n = arguments;
                return new Promise(function(o, a) {
                    var i = e35.apply(t, n);
                    function s(e) {
                        r11(i, o, a, s, c, "next", e);
                    }
                    function c(e) {
                        r11(i, o, a, s, c, "throw", e);
                    }
                    s(void 0);
                });
            };
        };
    },
    function(e36, t20) {
        function r12(e, t) {
            for(var r = 0; r < t.length; r++){
                var n = t[r];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        e36.exports = function(e, t, n) {
            return t && r12(e.prototype, t), n && r12(e, n), e;
        };
    },
    function(e) {
        e.exports = {
            name: "fortmatic",
            version: "1.1.3",
            description: "Fortmatic Javascript SDK",
            main: "lib/fortmatic.js",
            scripts: {
                build: "WEBPACK_ENV=production webpack",
                "build:dev": "WEBPACK_ENV=development BABEL_ENV=development webpack --progress --colors --watch",
                test: "nyc --reporter=lcov --reporter=text-summary ava"
            },
            author: "Fortmatic <team@fortmatic.com> (https://fortmatic.com/)",
            license: "MIT",
            repository: {
                type: "git",
                url: "https://github.com/fortmatic/fortmatic-js"
            },
            keywords: [
                "Auth",
                "Login",
                "Web3",
                "Crypto",
                "Ethereum",
                "MetaMask",
                "Wallet",
                "Blockchain",
                "Dapp"
            ],
            homepage: "https://www.fortmatic.com",
            ava: {
                require: [
                    "@babel/register"
                ],
                files: [
                    "test/**/*.spec.js"
                ],
                babel: {
                    testOptions: {
                        presets: [
                            "@babel/env"
                        ],
                        plugins: [
                            "@babel/plugin-proposal-function-bind",
                            "@babel/plugin-transform-runtime"
                        ]
                    }
                },
                verbose: !0
            },
            nyc: {
                all: !1,
                "check-coverage": !0,
                "per-file": !0,
                lines: 80,
                statements: 80,
                functions: 80,
                branches: 80,
                include: [
                    "src/**/*.js"
                ],
                exclude: [
                    "*/style.js"
                ],
                require: [],
                reporter: [
                    "html",
                    "lcov"
                ]
            },
            dependencies: {
                "@babel/runtime": "7.3.4"
            },
            devDependencies: {
                "@babel/core": "7.3.4",
                "@babel/plugin-proposal-function-bind": "7.2.0",
                "@babel/plugin-transform-modules-commonjs": "7.2.0",
                "@babel/plugin-transform-runtime": "7.3.4",
                "@babel/preset-env": "7.3.4",
                "@babel/register": "7.0.0",
                ava: "2.2.0",
                "babel-eslint": "10.0.1",
                "babel-loader": "8.0.5",
                eslint: "5.9.0",
                lodash: "4.17.11",
                nyc: "13.1.0",
                sinon: "7.1.1",
                webpack: "4.26.1",
                "webpack-cli": "3.1.2"
            }
        };
    },
    function(e, t, r) {
        "use strict";
        t.css = "\n  .fortmatic-iframe {\n    display: none;\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 100%;\n    height: 100%;\n    border: none;\n    border-radius: 0;\n    z-index: 2147483647;\n  }\n";
    }
]);

},{}]},["5TWho"], null, "parcelRequiredb79")

//# sourceMappingURL=fortmatic.3a86c5be.js.map
