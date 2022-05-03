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
})({"hQZon":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "487d6871da0bee56";
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

},{}],"add7s":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WalletLink = exports.WalletLinkProvider = void 0;
const WalletLinkProvider_1 = require("./provider/WalletLinkProvider");
const WalletLink_1 = require("./WalletLink");
var WalletLinkProvider_2 = require("./provider/WalletLinkProvider");
Object.defineProperty(exports, "WalletLinkProvider", {
    enumerable: true,
    get: function() {
        return WalletLinkProvider_2.WalletLinkProvider;
    }
});
var WalletLink_2 = require("./WalletLink");
Object.defineProperty(exports, "WalletLink", {
    enumerable: true,
    get: function() {
        return WalletLink_2.WalletLink;
    }
});
exports.default = WalletLink_1.WalletLink;
if (typeof window !== "undefined") {
    window.WalletLink = WalletLink_1.WalletLink;
    window.WalletLinkProvider = WalletLinkProvider_1.WalletLinkProvider;
}

},{"./provider/WalletLinkProvider":"g1Rbp","./WalletLink":"knUR6"}],"g1Rbp":[function(require,module,exports) {
"use strict";
var Buffer = require("buffer").Buffer;
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WalletLinkProvider = void 0;
const safe_event_emitter_1 = __importDefault(require("@metamask/safe-event-emitter"));
const bn_js_1 = __importDefault(require("bn.js"));
const eth_rpc_errors_1 = require("eth-rpc-errors");
const WalletLinkAnalytics_1 = require("../connection/WalletLinkAnalytics");
const EthereumChain_1 = require("../EthereumChain");
const init_1 = require("../init");
const Session_1 = require("../relay/Session");
const WalletLinkRelayAbstract_1 = require("../relay/WalletLinkRelayAbstract");
const util_1 = require("../util");
const eth_eip712_util_1 = __importDefault(require("../vendor-js/eth-eip712-util"));
const FilterPolyfill_1 = require("./FilterPolyfill");
const JSONRPC_1 = require("./JSONRPC");
const SubscriptionManager_1 = require("./SubscriptionManager");
const DEFAULT_CHAIN_ID_KEY = "DefaultChainId";
const DEFAULT_JSON_RPC_URL = "DefaultJsonRpcUrl";
// Indicates chain has been switched by switchEthereumChain or addEthereumChain request
const HAS_CHAIN_BEEN_SWITCHED_KEY = "HasChainBeenSwitched";
const HAS_CHAIN_OVERRIDDEN_FROM_RELAY = "HasChainOverriddenFromRelay";
class WalletLinkProvider extends safe_event_emitter_1.default {
    constructor(options){
        super();
        // So dapps can easily identify Coinbase Wallet for enabling features like 3085 network switcher menus
        this.isCoinbaseWallet = true;
        this._filterPolyfill = new FilterPolyfill_1.FilterPolyfill(this);
        this._subscriptionManager = new SubscriptionManager_1.SubscriptionManager(this);
        this._relay = null;
        this._addresses = [];
        this.hasMadeFirstChainChangedEmission = false;
        this._send = this.send;
        this._sendAsync = this.sendAsync;
        this.setProviderInfo = this.setProviderInfo.bind(this);
        this.updateProviderInfo = this.updateProviderInfo.bind(this);
        this.getChainId = this.getChainId.bind(this);
        this.setAppInfo = this.setAppInfo.bind(this);
        this.enable = this.enable.bind(this);
        this.close = this.close.bind(this);
        this.send = this.send.bind(this);
        this.sendAsync = this.sendAsync.bind(this);
        this.request = this.request.bind(this);
        this._setAddresses = this._setAddresses.bind(this);
        this.scanQRCode = this.scanQRCode.bind(this);
        this.arbitraryRequest = this.arbitraryRequest.bind(this);
        this._jsonRpcUrlFromOpts = options.jsonRpcUrl;
        this._overrideIsMetaMask = options.overrideIsMetaMask;
        this._relayProvider = options.relayProvider;
        this._storage = options.storage;
        this._relayEventManager = options.relayEventManager;
        this._walletLinkAnalytics = options.walletLinkAnalytics ? options.walletLinkAnalytics : new WalletLinkAnalytics_1.WalletLinkAnalytics();
        const chainId1 = this.getChainId();
        const chainIdStr = (0, util_1.prepend0x)(chainId1.toString(16));
        // indicate that we've connected, for EIP-1193 compliance
        this.emit("connect", {
            chainIdStr
        });
        const cachedAddresses = this._storage.getItem(WalletLinkRelayAbstract_1.LOCAL_STORAGE_ADDRESSES_KEY);
        if (cachedAddresses) {
            const addresses = cachedAddresses.split(" ");
            if (addresses[0] !== "") {
                this._addresses = addresses;
                this.emit("accountsChanged", addresses);
            }
        }
        this._subscriptionManager.events.on("notification", (notification)=>{
            this.emit("message", {
                type: notification.method,
                data: notification.params
            });
        });
        if (this._addresses.length > 0) this.initializeRelay();
        window.addEventListener('message', (event)=>{
            var _a;
            if (event.data.type !== 'walletLinkMessage') return;
            if (event.data.data.action === 'defaultChainChanged') {
                const chainId = event.data.data.chainId;
                const jsonRpcUrl = (_a = event.data.data.jsonRpcUrl) !== null && _a !== void 0 ? _a : this.jsonRpcUrl;
                this.updateProviderInfo(jsonRpcUrl, Number(chainId), true);
            }
        });
    }
    get selectedAddress() {
        return this._addresses[0] || undefined;
    }
    get networkVersion() {
        return this.getChainId().toString(10);
    }
    get chainId() {
        return (0, util_1.prepend0x)(this.getChainId().toString(16));
    }
    get isWalletLink() {
        return true;
    }
    /**
     * Some DApps (i.e. Alpha Homora) seem to require the window.ethereum object return
     * true for this method.
     */ get isMetaMask() {
        return this._overrideIsMetaMask;
    }
    get host() {
        return this.jsonRpcUrl;
    }
    get connected() {
        return true;
    }
    isConnected() {
        return true;
    }
    get jsonRpcUrl() {
        var _a;
        return (_a = this._storage.getItem(DEFAULT_JSON_RPC_URL)) !== null && _a !== void 0 ? _a : this._jsonRpcUrlFromOpts;
    }
    set jsonRpcUrl(value) {
        this._storage.setItem(DEFAULT_JSON_RPC_URL, value);
    }
    get isChainOverridden() {
        return this._storage.getItem(HAS_CHAIN_OVERRIDDEN_FROM_RELAY) === 'true';
    }
    set isChainOverridden(value) {
        this._storage.setItem(HAS_CHAIN_OVERRIDDEN_FROM_RELAY, value.toString());
    }
    // @ts-ignore
    setProviderInfo(jsonRpcUrl, chainId) {
        if (this.isChainOverridden) return;
        this.updateProviderInfo(jsonRpcUrl, this.getChainId(), false);
    }
    updateProviderInfo(jsonRpcUrl, chainId, fromRelay) {
        const hasChainSwitched = this._storage.getItem(HAS_CHAIN_BEEN_SWITCHED_KEY) === "true";
        if (hasChainSwitched && fromRelay) return;
        if (fromRelay) this.isChainOverridden = true;
        this.jsonRpcUrl = jsonRpcUrl;
        // emit chainChanged event if necessary
        const originalChainId = this.getChainId();
        this._storage.setItem(DEFAULT_CHAIN_ID_KEY, chainId.toString(10));
        const chainChanged = (0, util_1.ensureIntNumber)(chainId) !== originalChainId;
        if (chainChanged || !this.hasMadeFirstChainChangedEmission) {
            this.emit("chainChanged", this.getChainId());
            this.hasMadeFirstChainChangedEmission = true;
        }
    }
    async switchEthereumChain(rpcUrl, chainId) {
        if ((0, util_1.ensureIntNumber)(chainId) === this.getChainId()) return;
        const relay = await this.initializeRelay();
        const res = await relay.switchEthereumChain(chainId.toString(10)).promise;
        if (res.result === true) {
            this._storage.setItem(HAS_CHAIN_BEEN_SWITCHED_KEY, "true");
            this.updateProviderInfo(rpcUrl, chainId, false);
        }
    }
    setAppInfo(appName, appLogoUrl) {
        this.initializeRelay().then((relay)=>relay.setAppInfo(appName, appLogoUrl)
        );
    }
    async enable() {
        this._walletLinkAnalytics.sendEvent(init_1.EVENTS.ETH_ACCOUNTS_STATE, {
            method: "provider::enable",
            addresses_length: this._addresses.length,
            sessionIdHash: this._relay ? Session_1.Session.hash(this._relay.session.id) : null
        });
        if (this._addresses.length > 0) return this._addresses;
        return await this._send(JSONRPC_1.JSONRPCMethod.eth_requestAccounts);
    }
    close() {
        this.initializeRelay().then((relay)=>relay.resetAndReload()
        );
    }
    send(requestOrMethod, callbackOrParams) {
        // send<T>(method, params): Promise<T>
        if (typeof requestOrMethod === "string") {
            const method = requestOrMethod;
            const params = Array.isArray(callbackOrParams) ? callbackOrParams : callbackOrParams !== undefined ? [
                callbackOrParams
            ] : [];
            const request = {
                jsonrpc: "2.0",
                id: 0,
                method,
                params
            };
            return this._sendRequestAsync(request).then((res)=>res.result
            );
        }
        // send(JSONRPCRequest | JSONRPCRequest[], callback): void
        if (typeof callbackOrParams === "function") {
            const request = requestOrMethod;
            const callback = callbackOrParams;
            return this._sendAsync(request, callback);
        }
        // send(JSONRPCRequest[]): JSONRPCResponse[]
        if (Array.isArray(requestOrMethod)) {
            const requests = requestOrMethod;
            return requests.map((r)=>this._sendRequest(r)
            );
        }
        // send(JSONRPCRequest): JSONRPCResponse
        const req = requestOrMethod;
        return this._sendRequest(req);
    }
    sendAsync(request, callback) {
        if (typeof callback !== "function") throw new Error("callback is required");
        // send(JSONRPCRequest[], callback): void
        if (Array.isArray(request)) {
            const arrayCb = callback;
            this._sendMultipleRequestsAsync(request).then((responses)=>arrayCb(null, responses)
            ).catch((err)=>arrayCb(err, null)
            );
            return;
        }
        // send(JSONRPCRequest, callback): void
        const cb = callback;
        this._sendRequestAsync(request).then((response)=>cb(null, response)
        ).catch((err)=>cb(err, null)
        );
    }
    async request(args) {
        if (!args || typeof args !== "object" || Array.isArray(args)) throw eth_rpc_errors_1.ethErrors.rpc.invalidRequest({
            message: "Expected a single, non-array, object argument.",
            data: args
        });
        const { method , params  } = args;
        if (typeof method !== "string" || method.length === 0) throw eth_rpc_errors_1.ethErrors.rpc.invalidRequest({
            message: "'args.method' must be a non-empty string.",
            data: args
        });
        if (params !== undefined && !Array.isArray(params) && (typeof params !== "object" || params === null)) throw eth_rpc_errors_1.ethErrors.rpc.invalidRequest({
            message: "'args.params' must be an object or array if provided.",
            data: args
        });
        const newParams = params === undefined ? [] : params;
        // WalletLink Requests
        const id = this._relayEventManager.makeRequestId();
        const result = await this._sendRequestAsync({
            method,
            params: newParams,
            jsonrpc: "2.0",
            id
        });
        return result.result;
    }
    async scanQRCode(match) {
        const relay = await this.initializeRelay();
        const res = await relay.scanQRCode((0, util_1.ensureRegExpString)(match)).promise;
        if (typeof res.result !== "string") throw new Error("result was not a string");
        return res.result;
    }
    async arbitraryRequest(data) {
        const relay = await this.initializeRelay();
        const res = await relay.arbitraryRequest(data).promise;
        if (typeof res.result !== "string") throw new Error("result was not a string");
        return res.result;
    }
    supportsSubscriptions() {
        return false;
    }
    subscribe() {
        throw new Error("Subscriptions are not supported");
    }
    unsubscribe() {
        throw new Error("Subscriptions are not supported");
    }
    disconnect() {
        return true;
    }
    _sendRequest(request) {
        const response = {
            jsonrpc: "2.0",
            id: request.id
        };
        const { method  } = request;
        response.result = this._handleSynchronousMethods(request);
        if (response.result === undefined) throw new Error(`WalletLink does not support calling ${method} synchronously without ` + `a callback. Please provide a callback parameter to call ${method} ` + `asynchronously.`);
        return response;
    }
    _setAddresses(addresses) {
        if (!Array.isArray(addresses)) throw new Error("addresses is not an array");
        const newAddresses = addresses.map((address)=>(0, util_1.ensureAddressString)(address)
        );
        if (JSON.stringify(newAddresses) === JSON.stringify(this._addresses)) return;
        this._addresses = newAddresses;
        this.emit("accountsChanged", this._addresses);
        this._storage.setItem(WalletLinkRelayAbstract_1.LOCAL_STORAGE_ADDRESSES_KEY, newAddresses.join(" "));
        window.dispatchEvent(new CustomEvent("walletlink:addresses", {
            detail: this._addresses
        }));
    }
    _sendRequestAsync(request) {
        return new Promise((resolve, reject)=>{
            try {
                const syncResult = this._handleSynchronousMethods(request);
                if (syncResult !== undefined) return resolve({
                    jsonrpc: "2.0",
                    id: request.id,
                    result: syncResult
                });
                const filterPromise = this._handleAsynchronousFilterMethods(request);
                if (filterPromise !== undefined) {
                    filterPromise.then((res)=>resolve(Object.assign(Object.assign({}, res), {
                            id: request.id
                        }))
                    ).catch((err)=>reject(err)
                    );
                    return;
                }
                const subscriptionPromise = this._handleSubscriptionMethods(request);
                if (subscriptionPromise !== undefined) {
                    subscriptionPromise.then((res)=>resolve({
                            jsonrpc: "2.0",
                            id: request.id,
                            result: res.result
                        })
                    ).catch((err)=>reject(err)
                    );
                    return;
                }
            } catch (err1) {
                return reject(err1);
            }
            this._handleAsynchronousMethods(request).then((res)=>resolve(Object.assign(Object.assign({}, res), {
                    id: request.id
                }))
            ).catch((err)=>reject(err)
            );
        });
    }
    _sendMultipleRequestsAsync(requests) {
        return Promise.all(requests.map((r)=>this._sendRequestAsync(r)
        ));
    }
    _handleSynchronousMethods(request) {
        const { method  } = request;
        const params = request.params || [];
        switch(method){
            case JSONRPC_1.JSONRPCMethod.eth_accounts:
                return this._eth_accounts();
            case JSONRPC_1.JSONRPCMethod.eth_coinbase:
                return this._eth_coinbase();
            case JSONRPC_1.JSONRPCMethod.eth_uninstallFilter:
                return this._eth_uninstallFilter(params);
            case JSONRPC_1.JSONRPCMethod.net_version:
                return this._net_version();
            case JSONRPC_1.JSONRPCMethod.eth_chainId:
                return this._eth_chainId();
            default:
                return undefined;
        }
    }
    _handleAsynchronousMethods(request) {
        const { method  } = request;
        const params = request.params || [];
        switch(method){
            case JSONRPC_1.JSONRPCMethod.eth_requestAccounts:
                return this._eth_requestAccounts();
            case JSONRPC_1.JSONRPCMethod.eth_sign:
                return this._eth_sign(params);
            case JSONRPC_1.JSONRPCMethod.eth_ecRecover:
                return this._eth_ecRecover(params);
            case JSONRPC_1.JSONRPCMethod.personal_sign:
                return this._personal_sign(params);
            case JSONRPC_1.JSONRPCMethod.personal_ecRecover:
                return this._personal_ecRecover(params);
            case JSONRPC_1.JSONRPCMethod.eth_signTransaction:
                return this._eth_signTransaction(params);
            case JSONRPC_1.JSONRPCMethod.eth_sendRawTransaction:
                return this._eth_sendRawTransaction(params);
            case JSONRPC_1.JSONRPCMethod.eth_sendTransaction:
                return this._eth_sendTransaction(params);
            case JSONRPC_1.JSONRPCMethod.eth_signTypedData_v1:
                return this._eth_signTypedData_v1(params);
            case JSONRPC_1.JSONRPCMethod.eth_signTypedData_v2:
                return this._throwUnsupportedMethodError();
            case JSONRPC_1.JSONRPCMethod.eth_signTypedData_v3:
                return this._eth_signTypedData_v3(params);
            case JSONRPC_1.JSONRPCMethod.eth_signTypedData_v4:
            case JSONRPC_1.JSONRPCMethod.eth_signTypedData:
                return this._eth_signTypedData_v4(params);
            case JSONRPC_1.JSONRPCMethod.walletlink_arbitrary:
                return this._walletlink_arbitrary(params);
            case JSONRPC_1.JSONRPCMethod.wallet_addEthereumChain:
                return this._wallet_addEthereumChain(params);
            case JSONRPC_1.JSONRPCMethod.wallet_switchEthereumChain:
                return this._wallet_switchEthereumChain(params);
        }
        if (!this.jsonRpcUrl) throw Error("Error: No jsonRpcUrl provided");
        return window.fetch(this.jsonRpcUrl, {
            method: "POST",
            body: JSON.stringify(request),
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res)=>res.json()
        ).then((json)=>{
            if (!json) throw eth_rpc_errors_1.ethErrors.rpc.parse({});
            const response = json;
            const { error  } = response;
            if (error) throw (0, eth_rpc_errors_1.serializeError)(error);
            return response;
        });
    }
    _handleAsynchronousFilterMethods(request) {
        const { method  } = request;
        const params = request.params || [];
        switch(method){
            case JSONRPC_1.JSONRPCMethod.eth_newFilter:
                return this._eth_newFilter(params);
            case JSONRPC_1.JSONRPCMethod.eth_newBlockFilter:
                return this._eth_newBlockFilter();
            case JSONRPC_1.JSONRPCMethod.eth_newPendingTransactionFilter:
                return this._eth_newPendingTransactionFilter();
            case JSONRPC_1.JSONRPCMethod.eth_getFilterChanges:
                return this._eth_getFilterChanges(params);
            case JSONRPC_1.JSONRPCMethod.eth_getFilterLogs:
                return this._eth_getFilterLogs(params);
        }
        return undefined;
    }
    _handleSubscriptionMethods(request) {
        switch(request.method){
            case JSONRPC_1.JSONRPCMethod.eth_subscribe:
            case JSONRPC_1.JSONRPCMethod.eth_unsubscribe:
                return this._subscriptionManager.handleRequest(request);
        }
        return undefined;
    }
    _isKnownAddress(addressString) {
        try {
            const address = (0, util_1.ensureAddressString)(addressString);
            return this._addresses.includes(address);
        } catch (_a) {}
        return false;
    }
    _ensureKnownAddress(addressString) {
        if (!this._isKnownAddress(addressString)) throw new Error("Unknown Ethereum address");
    }
    _prepareTransactionParams(tx) {
        const fromAddress = tx.from ? (0, util_1.ensureAddressString)(tx.from) : this.selectedAddress;
        if (!fromAddress) throw new Error("Ethereum address is unavailable");
        this._ensureKnownAddress(fromAddress);
        const toAddress = tx.to ? (0, util_1.ensureAddressString)(tx.to) : null;
        const weiValue = tx.value != null ? (0, util_1.ensureBN)(tx.value) : new bn_js_1.default(0);
        const data = tx.data ? (0, util_1.ensureBuffer)(tx.data) : Buffer.alloc(0);
        const nonce = tx.nonce != null ? (0, util_1.ensureIntNumber)(tx.nonce) : null;
        const gasPriceInWei = tx.gasPrice != null ? (0, util_1.ensureBN)(tx.gasPrice) : null;
        const maxFeePerGas = tx.maxFeePerGas != null ? (0, util_1.ensureBN)(tx.maxFeePerGas) : null;
        const maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? (0, util_1.ensureBN)(tx.maxPriorityFeePerGas) : null;
        const gasLimit = tx.gas != null ? (0, util_1.ensureBN)(tx.gas) : null;
        const chainId = this.getChainId();
        return {
            fromAddress,
            toAddress,
            weiValue,
            data,
            nonce,
            gasPriceInWei,
            maxFeePerGas,
            maxPriorityFeePerGas,
            gasLimit,
            chainId
        };
    }
    _requireAuthorization() {
        if (this._addresses.length === 0) throw eth_rpc_errors_1.ethErrors.provider.unauthorized({});
    }
    _throwUnsupportedMethodError() {
        throw eth_rpc_errors_1.ethErrors.provider.unsupportedMethod({});
    }
    async _signEthereumMessage(message, address, addPrefix, typedDataJson) {
        this._ensureKnownAddress(address);
        try {
            const relay = await this.initializeRelay();
            const res = await relay.signEthereumMessage(message, address, addPrefix, typedDataJson).promise;
            return {
                jsonrpc: "2.0",
                id: 0,
                result: res.result
            };
        } catch (err) {
            if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) throw eth_rpc_errors_1.ethErrors.provider.userRejectedRequest("User denied message signature");
            throw err;
        }
    }
    async _ethereumAddressFromSignedMessage(message, signature, addPrefix) {
        const relay = await this.initializeRelay();
        const res = await relay.ethereumAddressFromSignedMessage(message, signature, addPrefix).promise;
        return {
            jsonrpc: "2.0",
            id: 0,
            result: res.result
        };
    }
    _eth_accounts() {
        return this._addresses;
    }
    _eth_coinbase() {
        return this.selectedAddress || null;
    }
    _net_version() {
        return this.getChainId().toString(10);
    }
    _eth_chainId() {
        return (0, util_1.hexStringFromIntNumber)(this.getChainId());
    }
    getChainId() {
        const chainIdStr = this._storage.getItem(DEFAULT_CHAIN_ID_KEY) || "1";
        const chainId = parseInt(chainIdStr, 10);
        return (0, util_1.ensureIntNumber)(chainId);
    }
    async _eth_requestAccounts() {
        this._walletLinkAnalytics.sendEvent(init_1.EVENTS.ETH_ACCOUNTS_STATE, {
            method: "provider::_eth_requestAccounts",
            addresses_length: this._addresses.length,
            sessionIdHash: this._relay ? Session_1.Session.hash(this._relay.session.id) : null
        });
        if (this._addresses.length > 0) return Promise.resolve({
            jsonrpc: "2.0",
            id: 0,
            result: this._addresses
        });
        let res;
        try {
            const relay = await this.initializeRelay();
            res = await relay.requestEthereumAccounts().promise;
        } catch (err) {
            if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) throw eth_rpc_errors_1.ethErrors.provider.userRejectedRequest("User denied account authorization");
            throw err;
        }
        if (!res.result) throw new Error("accounts received is empty");
        this._setAddresses(res.result);
        return {
            jsonrpc: "2.0",
            id: 0,
            result: this._addresses
        };
    }
    _eth_sign(params) {
        this._requireAuthorization();
        const address = (0, util_1.ensureAddressString)(params[0]);
        const message = (0, util_1.ensureBuffer)(params[1]);
        return this._signEthereumMessage(message, address, false);
    }
    _eth_ecRecover(params) {
        const message = (0, util_1.ensureBuffer)(params[0]);
        const signature = (0, util_1.ensureBuffer)(params[1]);
        return this._ethereumAddressFromSignedMessage(message, signature, false);
    }
    _personal_sign(params) {
        this._requireAuthorization();
        const message = (0, util_1.ensureBuffer)(params[0]);
        const address = (0, util_1.ensureAddressString)(params[1]);
        return this._signEthereumMessage(message, address, true);
    }
    _personal_ecRecover(params) {
        const message = (0, util_1.ensureBuffer)(params[0]);
        const signature = (0, util_1.ensureBuffer)(params[1]);
        return this._ethereumAddressFromSignedMessage(message, signature, true);
    }
    async _eth_signTransaction(params) {
        this._requireAuthorization();
        const tx = this._prepareTransactionParams(params[0] || {});
        try {
            const relay = await this.initializeRelay();
            const res = await relay.signEthereumTransaction(tx).promise;
            return {
                jsonrpc: "2.0",
                id: 0,
                result: res.result
            };
        } catch (err) {
            if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) throw eth_rpc_errors_1.ethErrors.provider.userRejectedRequest("User denied transaction signature");
            throw err;
        }
    }
    async _eth_sendRawTransaction(params) {
        const signedTransaction = (0, util_1.ensureBuffer)(params[0]);
        const relay = await this.initializeRelay();
        const res = await relay.submitEthereumTransaction(signedTransaction, this.getChainId()).promise;
        return {
            jsonrpc: "2.0",
            id: 0,
            result: res.result
        };
    }
    async _eth_sendTransaction(params) {
        this._requireAuthorization();
        const tx = this._prepareTransactionParams(params[0] || {});
        try {
            const relay = await this.initializeRelay();
            const res = await relay.signAndSubmitEthereumTransaction(tx).promise;
            return {
                jsonrpc: "2.0",
                id: 0,
                result: res.result
            };
        } catch (err) {
            if (typeof err.message === "string" && err.message.match(/(denied|rejected)/i)) throw eth_rpc_errors_1.ethErrors.provider.userRejectedRequest("User denied transaction signature");
            throw err;
        }
    }
    async _eth_signTypedData_v1(params) {
        this._requireAuthorization();
        const typedData = (0, util_1.ensureParsedJSONObject)(params[0]);
        const address = (0, util_1.ensureAddressString)(params[1]);
        this._ensureKnownAddress(address);
        const message = eth_eip712_util_1.default.hashForSignTypedDataLegacy({
            data: typedData
        });
        const typedDataJSON = JSON.stringify(typedData, null, 2);
        return this._signEthereumMessage(message, address, false, typedDataJSON);
    }
    async _eth_signTypedData_v3(params) {
        this._requireAuthorization();
        const address = (0, util_1.ensureAddressString)(params[0]);
        const typedData = (0, util_1.ensureParsedJSONObject)(params[1]);
        this._ensureKnownAddress(address);
        const message = eth_eip712_util_1.default.hashForSignTypedData_v3({
            data: typedData
        });
        const typedDataJSON = JSON.stringify(typedData, null, 2);
        return this._signEthereumMessage(message, address, false, typedDataJSON);
    }
    async _eth_signTypedData_v4(params) {
        this._requireAuthorization();
        const address = (0, util_1.ensureAddressString)(params[0]);
        const typedData = (0, util_1.ensureParsedJSONObject)(params[1]);
        this._ensureKnownAddress(address);
        const message = eth_eip712_util_1.default.hashForSignTypedData_v4({
            data: typedData
        });
        const typedDataJSON = JSON.stringify(typedData, null, 2);
        return this._signEthereumMessage(message, address, false, typedDataJSON);
    }
    async _walletlink_arbitrary(params) {
        const data = params[0];
        if (typeof data !== "string") throw new Error("parameter must be a string");
        const result = await this.arbitraryRequest(data);
        return {
            jsonrpc: "2.0",
            id: 0,
            result
        };
    }
    async _wallet_addEthereumChain(params) {
        const request = params[0];
        const chainIdNumber = parseInt(request.chainId, 16);
        const ethereumChain = EthereumChain_1.EthereumChain.fromChainId(BigInt(chainIdNumber));
        if (ethereumChain === undefined) return {
            jsonrpc: '2.0',
            id: 0,
            error: {
                code: 2,
                message: `chainId ${request.chainId} not supported`
            }
        };
        const rpcUrl = EthereumChain_1.EthereumChain.rpcUrl(ethereumChain);
        // @ts-ignore
        await this.switchEthereumChain(rpcUrl, parseInt(request.chainId, 16));
        return {
            jsonrpc: '2.0',
            id: 0,
            result: null
        };
    }
    async _wallet_switchEthereumChain(params) {
        const request = params[0];
        const chainIdNumber = parseInt(request.chainId, 16);
        const ethereumChain = EthereumChain_1.EthereumChain.fromChainId(BigInt(chainIdNumber));
        if (ethereumChain === undefined) return {
            jsonrpc: '2.0',
            id: 0,
            error: {
                code: 2,
                message: `chainId ${request.chainId} not supported`
            }
        };
        const rpcUrl = EthereumChain_1.EthereumChain.rpcUrl(ethereumChain);
        // @ts-ignore
        await this.switchEthereumChain(rpcUrl, parseInt(request.chainId, 16));
        return {
            jsonrpc: "2.0",
            id: 0,
            result: null
        };
    }
    _eth_uninstallFilter(params) {
        const filterId = (0, util_1.ensureHexString)(params[0]);
        return this._filterPolyfill.uninstallFilter(filterId);
    }
    async _eth_newFilter(params) {
        const param = params[0];
        const filterId = await this._filterPolyfill.newFilter(param);
        return {
            jsonrpc: "2.0",
            id: 0,
            result: filterId
        };
    }
    async _eth_newBlockFilter() {
        const filterId = await this._filterPolyfill.newBlockFilter();
        return {
            jsonrpc: "2.0",
            id: 0,
            result: filterId
        };
    }
    async _eth_newPendingTransactionFilter() {
        const filterId = await this._filterPolyfill.newPendingTransactionFilter();
        return {
            jsonrpc: "2.0",
            id: 0,
            result: filterId
        };
    }
    _eth_getFilterChanges(params) {
        const filterId = (0, util_1.ensureHexString)(params[0]);
        return this._filterPolyfill.getFilterChanges(filterId);
    }
    _eth_getFilterLogs(params) {
        const filterId = (0, util_1.ensureHexString)(params[0]);
        return this._filterPolyfill.getFilterLogs(filterId);
    }
    initializeRelay() {
        if (this._relay) return Promise.resolve(this._relay);
        return this._relayProvider().then((relay)=>{
            relay.setAccountsCallback((accounts)=>this._setAddresses(accounts)
            );
            relay.setChainCallback((chainId, jsonRpcUrl)=>{
                this.updateProviderInfo(jsonRpcUrl, parseInt(chainId, 10), true);
            });
            this._relay = relay;
            return relay;
        });
    }
}
exports.WalletLinkProvider = WalletLinkProvider;

},{"buffer":"fCgem","@metamask/safe-event-emitter":"1duJT","bn.js":"l407W","eth-rpc-errors":"6tZDD","../connection/WalletLinkAnalytics":"bZTVr","../EthereumChain":"fB5bm","../init":"dXFr7","../relay/Session":"bbUb9","../relay/WalletLinkRelayAbstract":"e7kH3","../util":"8WKyV","../vendor-js/eth-eip712-util":"e13Ba","./FilterPolyfill":"g1bWl","./JSONRPC":"8XZbp","./SubscriptionManager":"cCIQX"}],"1duJT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const events_1 = require("events");
function safeApply(handler, context, args) {
    try {
        Reflect.apply(handler, context, args);
    } catch (err) {
        // Throw error after timeout so as not to interrupt the stack
        setTimeout(()=>{
            throw err;
        });
    }
}
function arrayClone(arr) {
    const n = arr.length;
    const copy = new Array(n);
    for(let i = 0; i < n; i += 1)copy[i] = arr[i];
    return copy;
}
class SafeEventEmitter extends events_1.EventEmitter {
    emit(type, ...args) {
        let doError = type === 'error';
        const events = this._events;
        if (events !== undefined) doError = doError && events.error === undefined;
        else if (!doError) return false;
        // If there is no 'error' event listener then throw.
        if (doError) {
            let er;
            if (args.length > 0) [er] = args;
            if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
            // up in Node's output if this results in an unhandled exception.
            throw er; // Unhandled 'error' event
            // At least give some kind of context to the user
            const err = new Error(`Unhandled error.${er ? ` (${er.message})` : ''}`);
            err.context = er;
            throw err; // Unhandled 'error' event
        }
        const handler = events[type];
        if (handler === undefined) return false;
        if (typeof handler === 'function') safeApply(handler, this, args);
        else {
            const len = handler.length;
            const listeners = arrayClone(handler);
            for(let i = 0; i < len; i += 1)safeApply(listeners[i], this, args);
        }
        return true;
    }
}
exports.default = SafeEventEmitter;

},{"events":"1VQLm"}],"l407W":[function(require,module,exports) {
(function(module, exports) {
    // Utils
    function assert(val, msg) {
        if (!val) throw new Error(msg || 'Assertion failed');
    }
    // Could use `inherits` module, but don't want to move from single file
    // architecture yet.
    function inherits(ctor, superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
    // BN
    function BN(number, base, endian) {
        if (BN.isBN(number)) return number;
        this.negative = 0;
        this.words = null;
        this.length = 0;
        // Reduction context
        this.red = null;
        if (number !== null) {
            if (base === 'le' || base === 'be') {
                endian = base;
                base = 10;
            }
            this._init(number || 0, base || 10, endian || 'be');
        }
    }
    if (typeof module === 'object') module.exports = BN;
    else exports.BN = BN;
    BN.BN = BN;
    BN.wordSize = 26;
    var Buffer;
    try {
        if (typeof window !== 'undefined' && typeof window.Buffer !== 'undefined') Buffer = window.Buffer;
        else Buffer = require('buffer').Buffer;
    } catch (e) {}
    BN.isBN = function isBN(num) {
        if (num instanceof BN) return true;
        return num !== null && typeof num === 'object' && num.constructor.wordSize === BN.wordSize && Array.isArray(num.words);
    };
    BN.max = function max(left, right) {
        if (left.cmp(right) > 0) return left;
        return right;
    };
    BN.min = function min(left, right) {
        if (left.cmp(right) < 0) return left;
        return right;
    };
    BN.prototype._init = function init(number, base, endian) {
        if (typeof number === 'number') return this._initNumber(number, base, endian);
        if (typeof number === 'object') return this._initArray(number, base, endian);
        if (base === 'hex') base = 16;
        assert(base === (base | 0) && base >= 2 && base <= 36);
        number = number.toString().replace(/\s+/g, '');
        var start = 0;
        if (number[0] === '-') {
            start++;
            this.negative = 1;
        }
        if (start < number.length) {
            if (base === 16) this._parseHex(number, start, endian);
            else {
                this._parseBase(number, base, start);
                if (endian === 'le') this._initArray(this.toArray(), base, endian);
            }
        }
    };
    BN.prototype._initNumber = function _initNumber(number, base, endian) {
        if (number < 0) {
            this.negative = 1;
            number = -number;
        }
        if (number < 0x4000000) {
            this.words = [
                number & 0x3ffffff
            ];
            this.length = 1;
        } else if (number < 0x10000000000000) {
            this.words = [
                number & 0x3ffffff,
                number / 0x4000000 & 0x3ffffff
            ];
            this.length = 2;
        } else {
            assert(number < 0x20000000000000); // 2 ^ 53 (unsafe)
            this.words = [
                number & 0x3ffffff,
                number / 0x4000000 & 0x3ffffff,
                1
            ];
            this.length = 3;
        }
        if (endian !== 'le') return;
        // Reverse the bytes
        this._initArray(this.toArray(), base, endian);
    };
    BN.prototype._initArray = function _initArray(number, base, endian) {
        // Perhaps a Uint8Array
        assert(typeof number.length === 'number');
        if (number.length <= 0) {
            this.words = [
                0
            ];
            this.length = 1;
            return this;
        }
        this.length = Math.ceil(number.length / 3);
        this.words = new Array(this.length);
        for(var i = 0; i < this.length; i++)this.words[i] = 0;
        var j, w;
        var off = 0;
        if (endian === 'be') for(i = number.length - 1, j = 0; i >= 0; i -= 3){
            w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
            this.words[j] |= w << off & 0x3ffffff;
            this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
            off += 24;
            if (off >= 26) {
                off -= 26;
                j++;
            }
        }
        else if (endian === 'le') for(i = 0, j = 0; i < number.length; i += 3){
            w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
            this.words[j] |= w << off & 0x3ffffff;
            this.words[j + 1] = w >>> 26 - off & 0x3ffffff;
            off += 24;
            if (off >= 26) {
                off -= 26;
                j++;
            }
        }
        return this._strip();
    };
    function parseHex4Bits(string, index) {
        var c = string.charCodeAt(index);
        // '0' - '9'
        if (c >= 48 && c <= 57) return c - 48;
        else if (c >= 65 && c <= 70) return c - 55;
        else if (c >= 97 && c <= 102) return c - 87;
        else assert(false, 'Invalid character in ' + string);
    }
    function parseHexByte(string, lowerBound, index) {
        var r = parseHex4Bits(string, index);
        if (index - 1 >= lowerBound) r |= parseHex4Bits(string, index - 1) << 4;
        return r;
    }
    BN.prototype._parseHex = function _parseHex(number, start, endian) {
        // Create possibly bigger array to ensure that it fits the number
        this.length = Math.ceil((number.length - start) / 6);
        this.words = new Array(this.length);
        for(var i = 0; i < this.length; i++)this.words[i] = 0;
        // 24-bits chunks
        var off = 0;
        var j = 0;
        var w;
        if (endian === 'be') for(i = number.length - 1; i >= start; i -= 2){
            w = parseHexByte(number, start, i) << off;
            this.words[j] |= w & 0x3ffffff;
            if (off >= 18) {
                off -= 18;
                j += 1;
                this.words[j] |= w >>> 26;
            } else off += 8;
        }
        else {
            var parseLength = number.length - start;
            for(i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2){
                w = parseHexByte(number, start, i) << off;
                this.words[j] |= w & 0x3ffffff;
                if (off >= 18) {
                    off -= 18;
                    j += 1;
                    this.words[j] |= w >>> 26;
                } else off += 8;
            }
        }
        this._strip();
    };
    function parseBase(str, start, end, mul) {
        var r = 0;
        var b = 0;
        var len = Math.min(str.length, end);
        for(var i = start; i < len; i++){
            var c = str.charCodeAt(i) - 48;
            r *= mul;
            // 'a'
            if (c >= 49) b = c - 49 + 0xa;
            else if (c >= 17) b = c - 17 + 0xa;
            else b = c;
            assert(c >= 0 && b < mul, 'Invalid character');
            r += b;
        }
        return r;
    }
    BN.prototype._parseBase = function _parseBase(number, base, start) {
        // Initialize as zero
        this.words = [
            0
        ];
        this.length = 1;
        // Find length of limb in base
        for(var limbLen = 0, limbPow = 1; limbPow <= 0x3ffffff; limbPow *= base)limbLen++;
        limbLen--;
        limbPow = limbPow / base | 0;
        var total = number.length - start;
        var mod = total % limbLen;
        var end = Math.min(total, total - mod) + start;
        var word = 0;
        for(var i = start; i < end; i += limbLen){
            word = parseBase(number, i, i + limbLen, base);
            this.imuln(limbPow);
            if (this.words[0] + word < 0x4000000) this.words[0] += word;
            else this._iaddn(word);
        }
        if (mod !== 0) {
            var pow = 1;
            word = parseBase(number, i, number.length, base);
            for(i = 0; i < mod; i++)pow *= base;
            this.imuln(pow);
            if (this.words[0] + word < 0x4000000) this.words[0] += word;
            else this._iaddn(word);
        }
        this._strip();
    };
    BN.prototype.copy = function copy(dest) {
        dest.words = new Array(this.length);
        for(var i = 0; i < this.length; i++)dest.words[i] = this.words[i];
        dest.length = this.length;
        dest.negative = this.negative;
        dest.red = this.red;
    };
    function move(dest, src) {
        dest.words = src.words;
        dest.length = src.length;
        dest.negative = src.negative;
        dest.red = src.red;
    }
    BN.prototype._move = function _move(dest) {
        move(dest, this);
    };
    BN.prototype.clone = function clone() {
        var r = new BN(null);
        this.copy(r);
        return r;
    };
    BN.prototype._expand = function _expand(size) {
        while(this.length < size)this.words[this.length++] = 0;
        return this;
    };
    // Remove leading `0` from `this`
    BN.prototype._strip = function strip() {
        while(this.length > 1 && this.words[this.length - 1] === 0)this.length--;
        return this._normSign();
    };
    BN.prototype._normSign = function _normSign() {
        // -0 = 0
        if (this.length === 1 && this.words[0] === 0) this.negative = 0;
        return this;
    };
    // Check Symbol.for because not everywhere where Symbol defined
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol#Browser_compatibility
    if (typeof Symbol !== 'undefined' && typeof Symbol.for === 'function') try {
        BN.prototype[Symbol.for('nodejs.util.inspect.custom')] = inspect;
    } catch (e1) {
        BN.prototype.inspect = inspect;
    }
    else BN.prototype.inspect = inspect;
    function inspect() {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
    }
    /*

  var zeros = [];
  var groupSizes = [];
  var groupBases = [];

  var s = '';
  var i = -1;
  while (++i < BN.wordSize) {
    zeros[i] = s;
    s += '0';
  }
  groupSizes[0] = 0;
  groupSizes[1] = 0;
  groupBases[0] = 0;
  groupBases[1] = 0;
  var base = 2 - 1;
  while (++base < 36 + 1) {
    var groupSize = 0;
    var groupBase = 1;
    while (groupBase < (1 << BN.wordSize) / base) {
      groupBase *= base;
      groupSize += 1;
    }
    groupSizes[base] = groupSize;
    groupBases[base] = groupBase;
  }

  */ var zeros = [
        '',
        '0',
        '00',
        '000',
        '0000',
        '00000',
        '000000',
        '0000000',
        '00000000',
        '000000000',
        '0000000000',
        '00000000000',
        '000000000000',
        '0000000000000',
        '00000000000000',
        '000000000000000',
        '0000000000000000',
        '00000000000000000',
        '000000000000000000',
        '0000000000000000000',
        '00000000000000000000',
        '000000000000000000000',
        '0000000000000000000000',
        '00000000000000000000000',
        '000000000000000000000000',
        '0000000000000000000000000'
    ];
    var groupSizes = [
        0,
        0,
        25,
        16,
        12,
        11,
        10,
        9,
        8,
        8,
        7,
        7,
        7,
        7,
        6,
        6,
        6,
        6,
        6,
        6,
        6,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5,
        5
    ];
    var groupBases = [
        0,
        0,
        33554432,
        43046721,
        16777216,
        48828125,
        60466176,
        40353607,
        16777216,
        43046721,
        10000000,
        19487171,
        35831808,
        62748517,
        7529536,
        11390625,
        16777216,
        24137569,
        34012224,
        47045881,
        64000000,
        4084101,
        5153632,
        6436343,
        7962624,
        9765625,
        11881376,
        14348907,
        17210368,
        20511149,
        24300000,
        28629151,
        33554432,
        39135393,
        45435424,
        52521875,
        60466176
    ];
    BN.prototype.toString = function toString(base, padding) {
        base = base || 10;
        padding = padding | 0 || 1;
        var out;
        if (base === 16 || base === 'hex') {
            out = '';
            var off = 0;
            var carry = 0;
            for(var i = 0; i < this.length; i++){
                var w = this.words[i];
                var word = ((w << off | carry) & 0xffffff).toString(16);
                carry = w >>> 24 - off & 0xffffff;
                if (carry !== 0 || i !== this.length - 1) out = zeros[6 - word.length] + word + out;
                else out = word + out;
                off += 2;
                if (off >= 26) {
                    off -= 26;
                    i--;
                }
            }
            if (carry !== 0) out = carry.toString(16) + out;
            while(out.length % padding !== 0)out = '0' + out;
            if (this.negative !== 0) out = '-' + out;
            return out;
        }
        if (base === (base | 0) && base >= 2 && base <= 36) {
            // var groupSize = Math.floor(BN.wordSize * Math.LN2 / Math.log(base));
            var groupSize = groupSizes[base];
            // var groupBase = Math.pow(base, groupSize);
            var groupBase = groupBases[base];
            out = '';
            var c = this.clone();
            c.negative = 0;
            while(!c.isZero()){
                var r = c.modrn(groupBase).toString(base);
                c = c.idivn(groupBase);
                if (!c.isZero()) out = zeros[groupSize - r.length] + r + out;
                else out = r + out;
            }
            if (this.isZero()) out = '0' + out;
            while(out.length % padding !== 0)out = '0' + out;
            if (this.negative !== 0) out = '-' + out;
            return out;
        }
        assert(false, 'Base should be between 2 and 36');
    };
    BN.prototype.toNumber = function toNumber() {
        var ret = this.words[0];
        if (this.length === 2) ret += this.words[1] * 0x4000000;
        else if (this.length === 3 && this.words[2] === 0x01) // NOTE: at this stage it is known that the top bit is set
        ret += 0x10000000000000 + this.words[1] * 0x4000000;
        else if (this.length > 2) assert(false, 'Number can only safely store up to 53 bits');
        return this.negative !== 0 ? -ret : ret;
    };
    BN.prototype.toJSON = function toJSON() {
        return this.toString(16, 2);
    };
    if (Buffer) BN.prototype.toBuffer = function toBuffer(endian, length) {
        return this.toArrayLike(Buffer, endian, length);
    };
    BN.prototype.toArray = function toArray(endian, length) {
        return this.toArrayLike(Array, endian, length);
    };
    var allocate = function allocate(ArrayType, size) {
        if (ArrayType.allocUnsafe) return ArrayType.allocUnsafe(size);
        return new ArrayType(size);
    };
    BN.prototype.toArrayLike = function toArrayLike(ArrayType, endian, length) {
        this._strip();
        var byteLength = this.byteLength();
        var reqLength = length || Math.max(1, byteLength);
        assert(byteLength <= reqLength, 'byte array longer than desired length');
        assert(reqLength > 0, 'Requested array length <= 0');
        var res = allocate(ArrayType, reqLength);
        var postfix = endian === 'le' ? 'LE' : 'BE';
        this['_toArrayLike' + postfix](res, byteLength);
        return res;
    };
    BN.prototype._toArrayLikeLE = function _toArrayLikeLE(res, byteLength) {
        var position = 0;
        var carry = 0;
        for(var i = 0, shift = 0; i < this.length; i++){
            var word = this.words[i] << shift | carry;
            res[position++] = word & 0xff;
            if (position < res.length) res[position++] = word >> 8 & 0xff;
            if (position < res.length) res[position++] = word >> 16 & 0xff;
            if (shift === 6) {
                if (position < res.length) res[position++] = word >> 24 & 0xff;
                carry = 0;
                shift = 0;
            } else {
                carry = word >>> 24;
                shift += 2;
            }
        }
        if (position < res.length) {
            res[position++] = carry;
            while(position < res.length)res[position++] = 0;
        }
    };
    BN.prototype._toArrayLikeBE = function _toArrayLikeBE(res, byteLength) {
        var position = res.length - 1;
        var carry = 0;
        for(var i = 0, shift = 0; i < this.length; i++){
            var word = this.words[i] << shift | carry;
            res[position--] = word & 0xff;
            if (position >= 0) res[position--] = word >> 8 & 0xff;
            if (position >= 0) res[position--] = word >> 16 & 0xff;
            if (shift === 6) {
                if (position >= 0) res[position--] = word >> 24 & 0xff;
                carry = 0;
                shift = 0;
            } else {
                carry = word >>> 24;
                shift += 2;
            }
        }
        if (position >= 0) {
            res[position--] = carry;
            while(position >= 0)res[position--] = 0;
        }
    };
    if (Math.clz32) BN.prototype._countBits = function _countBits(w) {
        return 32 - Math.clz32(w);
    };
    else BN.prototype._countBits = function _countBits(w) {
        var t = w;
        var r = 0;
        if (t >= 0x1000) {
            r += 13;
            t >>>= 13;
        }
        if (t >= 0x40) {
            r += 7;
            t >>>= 7;
        }
        if (t >= 0x8) {
            r += 4;
            t >>>= 4;
        }
        if (t >= 0x02) {
            r += 2;
            t >>>= 2;
        }
        return r + t;
    };
    BN.prototype._zeroBits = function _zeroBits(w) {
        // Short-cut
        if (w === 0) return 26;
        var t = w;
        var r = 0;
        if ((t & 0x1fff) === 0) {
            r += 13;
            t >>>= 13;
        }
        if ((t & 0x7f) === 0) {
            r += 7;
            t >>>= 7;
        }
        if ((t & 0xf) === 0) {
            r += 4;
            t >>>= 4;
        }
        if ((t & 0x3) === 0) {
            r += 2;
            t >>>= 2;
        }
        if ((t & 0x1) === 0) r++;
        return r;
    };
    // Return number of used bits in a BN
    BN.prototype.bitLength = function bitLength() {
        var w = this.words[this.length - 1];
        var hi = this._countBits(w);
        return (this.length - 1) * 26 + hi;
    };
    function toBitArray(num) {
        var w = new Array(num.bitLength());
        for(var bit = 0; bit < w.length; bit++){
            var off = bit / 26 | 0;
            var wbit = bit % 26;
            w[bit] = num.words[off] >>> wbit & 0x01;
        }
        return w;
    }
    // Number of trailing zero bits
    BN.prototype.zeroBits = function zeroBits() {
        if (this.isZero()) return 0;
        var r = 0;
        for(var i = 0; i < this.length; i++){
            var b = this._zeroBits(this.words[i]);
            r += b;
            if (b !== 26) break;
        }
        return r;
    };
    BN.prototype.byteLength = function byteLength() {
        return Math.ceil(this.bitLength() / 8);
    };
    BN.prototype.toTwos = function toTwos(width) {
        if (this.negative !== 0) return this.abs().inotn(width).iaddn(1);
        return this.clone();
    };
    BN.prototype.fromTwos = function fromTwos(width) {
        if (this.testn(width - 1)) return this.notn(width).iaddn(1).ineg();
        return this.clone();
    };
    BN.prototype.isNeg = function isNeg() {
        return this.negative !== 0;
    };
    // Return negative clone of `this`
    BN.prototype.neg = function neg() {
        return this.clone().ineg();
    };
    BN.prototype.ineg = function ineg() {
        if (!this.isZero()) this.negative ^= 1;
        return this;
    };
    // Or `num` with `this` in-place
    BN.prototype.iuor = function iuor(num) {
        while(this.length < num.length)this.words[this.length++] = 0;
        for(var i = 0; i < num.length; i++)this.words[i] = this.words[i] | num.words[i];
        return this._strip();
    };
    BN.prototype.ior = function ior(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuor(num);
    };
    // Or `num` with `this`
    BN.prototype.or = function or(num) {
        if (this.length > num.length) return this.clone().ior(num);
        return num.clone().ior(this);
    };
    BN.prototype.uor = function uor(num) {
        if (this.length > num.length) return this.clone().iuor(num);
        return num.clone().iuor(this);
    };
    // And `num` with `this` in-place
    BN.prototype.iuand = function iuand(num) {
        // b = min-length(num, this)
        var b;
        if (this.length > num.length) b = num;
        else b = this;
        for(var i = 0; i < b.length; i++)this.words[i] = this.words[i] & num.words[i];
        this.length = b.length;
        return this._strip();
    };
    BN.prototype.iand = function iand(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuand(num);
    };
    // And `num` with `this`
    BN.prototype.and = function and(num) {
        if (this.length > num.length) return this.clone().iand(num);
        return num.clone().iand(this);
    };
    BN.prototype.uand = function uand(num) {
        if (this.length > num.length) return this.clone().iuand(num);
        return num.clone().iuand(this);
    };
    // Xor `num` with `this` in-place
    BN.prototype.iuxor = function iuxor(num) {
        // a.length > b.length
        var a;
        var b;
        if (this.length > num.length) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        for(var i = 0; i < b.length; i++)this.words[i] = a.words[i] ^ b.words[i];
        if (this !== a) for(; i < a.length; i++)this.words[i] = a.words[i];
        this.length = a.length;
        return this._strip();
    };
    BN.prototype.ixor = function ixor(num) {
        assert((this.negative | num.negative) === 0);
        return this.iuxor(num);
    };
    // Xor `num` with `this`
    BN.prototype.xor = function xor(num) {
        if (this.length > num.length) return this.clone().ixor(num);
        return num.clone().ixor(this);
    };
    BN.prototype.uxor = function uxor(num) {
        if (this.length > num.length) return this.clone().iuxor(num);
        return num.clone().iuxor(this);
    };
    // Not ``this`` with ``width`` bitwidth
    BN.prototype.inotn = function inotn(width) {
        assert(typeof width === 'number' && width >= 0);
        var bytesNeeded = Math.ceil(width / 26) | 0;
        var bitsLeft = width % 26;
        // Extend the buffer with leading zeroes
        this._expand(bytesNeeded);
        if (bitsLeft > 0) bytesNeeded--;
        // Handle complete words
        for(var i = 0; i < bytesNeeded; i++)this.words[i] = ~this.words[i] & 0x3ffffff;
        // Handle the residue
        if (bitsLeft > 0) this.words[i] = ~this.words[i] & 0x3ffffff >> 26 - bitsLeft;
        // And remove leading zeroes
        return this._strip();
    };
    BN.prototype.notn = function notn(width) {
        return this.clone().inotn(width);
    };
    // Set `bit` of `this`
    BN.prototype.setn = function setn(bit, val) {
        assert(typeof bit === 'number' && bit >= 0);
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        this._expand(off + 1);
        if (val) this.words[off] = this.words[off] | 1 << wbit;
        else this.words[off] = this.words[off] & ~(1 << wbit);
        return this._strip();
    };
    // Add `num` to `this` in-place
    BN.prototype.iadd = function iadd(num) {
        var r;
        // negative + positive
        if (this.negative !== 0 && num.negative === 0) {
            this.negative = 0;
            r = this.isub(num);
            this.negative ^= 1;
            return this._normSign();
        // positive + negative
        } else if (this.negative === 0 && num.negative !== 0) {
            num.negative = 0;
            r = this.isub(num);
            num.negative = 1;
            return r._normSign();
        }
        // a.length > b.length
        var a, b;
        if (this.length > num.length) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        var carry = 0;
        for(var i = 0; i < b.length; i++){
            r = (a.words[i] | 0) + (b.words[i] | 0) + carry;
            this.words[i] = r & 0x3ffffff;
            carry = r >>> 26;
        }
        for(; carry !== 0 && i < a.length; i++){
            r = (a.words[i] | 0) + carry;
            this.words[i] = r & 0x3ffffff;
            carry = r >>> 26;
        }
        this.length = a.length;
        if (carry !== 0) {
            this.words[this.length] = carry;
            this.length++;
        // Copy the rest of the words
        } else if (a !== this) for(; i < a.length; i++)this.words[i] = a.words[i];
        return this;
    };
    // Add `num` to `this`
    BN.prototype.add = function add(num) {
        var res;
        if (num.negative !== 0 && this.negative === 0) {
            num.negative = 0;
            res = this.sub(num);
            num.negative ^= 1;
            return res;
        } else if (num.negative === 0 && this.negative !== 0) {
            this.negative = 0;
            res = num.sub(this);
            this.negative = 1;
            return res;
        }
        if (this.length > num.length) return this.clone().iadd(num);
        return num.clone().iadd(this);
    };
    // Subtract `num` from `this` in-place
    BN.prototype.isub = function isub(num) {
        // this - (-num) = this + num
        if (num.negative !== 0) {
            num.negative = 0;
            var r = this.iadd(num);
            num.negative = 1;
            return r._normSign();
        // -this - num = -(this + num)
        } else if (this.negative !== 0) {
            this.negative = 0;
            this.iadd(num);
            this.negative = 1;
            return this._normSign();
        }
        // At this point both numbers are positive
        var cmp = this.cmp(num);
        // Optimization - zeroify
        if (cmp === 0) {
            this.negative = 0;
            this.length = 1;
            this.words[0] = 0;
            return this;
        }
        // a > b
        var a, b;
        if (cmp > 0) {
            a = this;
            b = num;
        } else {
            a = num;
            b = this;
        }
        var carry = 0;
        for(var i = 0; i < b.length; i++){
            r = (a.words[i] | 0) - (b.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 0x3ffffff;
        }
        for(; carry !== 0 && i < a.length; i++){
            r = (a.words[i] | 0) + carry;
            carry = r >> 26;
            this.words[i] = r & 0x3ffffff;
        }
        // Copy rest of the words
        if (carry === 0 && i < a.length && a !== this) for(; i < a.length; i++)this.words[i] = a.words[i];
        this.length = Math.max(this.length, i);
        if (a !== this) this.negative = 1;
        return this._strip();
    };
    // Subtract `num` from `this`
    BN.prototype.sub = function sub(num) {
        return this.clone().isub(num);
    };
    function smallMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        var len = self.length + num.length | 0;
        out.length = len;
        len = len - 1 | 0;
        // Peel one iteration (compiler can't do it, because of code complexity)
        var a = self.words[0] | 0;
        var b = num.words[0] | 0;
        var r = a * b;
        var lo = r & 0x3ffffff;
        var carry = r / 0x4000000 | 0;
        out.words[0] = lo;
        for(var k = 1; k < len; k++){
            // Sum all words with the same `i + j = k` and accumulate `ncarry`,
            // note that ncarry could be >= 0x3ffffff
            var ncarry = carry >>> 26;
            var rword = carry & 0x3ffffff;
            var maxJ = Math.min(k, num.length - 1);
            for(var j = Math.max(0, k - self.length + 1); j <= maxJ; j++){
                var i = k - j | 0;
                a = self.words[i] | 0;
                b = num.words[j] | 0;
                r = a * b + rword;
                ncarry += r / 0x4000000 | 0;
                rword = r & 0x3ffffff;
            }
            out.words[k] = rword | 0;
            carry = ncarry | 0;
        }
        if (carry !== 0) out.words[k] = carry | 0;
        else out.length--;
        return out._strip();
    }
    // TODO(indutny): it may be reasonable to omit it for users who don't need
    // to work with 256-bit numbers, otherwise it gives 20% improvement for 256-bit
    // multiplication (like elliptic secp256k1).
    var comb10MulTo = function comb10MulTo(self, num, out) {
        var a = self.words;
        var b = num.words;
        var o = out.words;
        var c = 0;
        var lo;
        var mid;
        var hi;
        var a0 = a[0] | 0;
        var al0 = a0 & 0x1fff;
        var ah0 = a0 >>> 13;
        var a1 = a[1] | 0;
        var al1 = a1 & 0x1fff;
        var ah1 = a1 >>> 13;
        var a2 = a[2] | 0;
        var al2 = a2 & 0x1fff;
        var ah2 = a2 >>> 13;
        var a3 = a[3] | 0;
        var al3 = a3 & 0x1fff;
        var ah3 = a3 >>> 13;
        var a4 = a[4] | 0;
        var al4 = a4 & 0x1fff;
        var ah4 = a4 >>> 13;
        var a5 = a[5] | 0;
        var al5 = a5 & 0x1fff;
        var ah5 = a5 >>> 13;
        var a6 = a[6] | 0;
        var al6 = a6 & 0x1fff;
        var ah6 = a6 >>> 13;
        var a7 = a[7] | 0;
        var al7 = a7 & 0x1fff;
        var ah7 = a7 >>> 13;
        var a8 = a[8] | 0;
        var al8 = a8 & 0x1fff;
        var ah8 = a8 >>> 13;
        var a9 = a[9] | 0;
        var al9 = a9 & 0x1fff;
        var ah9 = a9 >>> 13;
        var b0 = b[0] | 0;
        var bl0 = b0 & 0x1fff;
        var bh0 = b0 >>> 13;
        var b1 = b[1] | 0;
        var bl1 = b1 & 0x1fff;
        var bh1 = b1 >>> 13;
        var b2 = b[2] | 0;
        var bl2 = b2 & 0x1fff;
        var bh2 = b2 >>> 13;
        var b3 = b[3] | 0;
        var bl3 = b3 & 0x1fff;
        var bh3 = b3 >>> 13;
        var b4 = b[4] | 0;
        var bl4 = b4 & 0x1fff;
        var bh4 = b4 >>> 13;
        var b5 = b[5] | 0;
        var bl5 = b5 & 0x1fff;
        var bh5 = b5 >>> 13;
        var b6 = b[6] | 0;
        var bl6 = b6 & 0x1fff;
        var bh6 = b6 >>> 13;
        var b7 = b[7] | 0;
        var bl7 = b7 & 0x1fff;
        var bh7 = b7 >>> 13;
        var b8 = b[8] | 0;
        var bl8 = b8 & 0x1fff;
        var bh8 = b8 >>> 13;
        var b9 = b[9] | 0;
        var bl9 = b9 & 0x1fff;
        var bh9 = b9 >>> 13;
        out.negative = self.negative ^ num.negative;
        out.length = 19;
        /* k = 0 */ lo = Math.imul(al0, bl0);
        mid = Math.imul(al0, bh0);
        mid = mid + Math.imul(ah0, bl0) | 0;
        hi = Math.imul(ah0, bh0);
        var w0 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
        w0 &= 0x3ffffff;
        /* k = 1 */ lo = Math.imul(al1, bl0);
        mid = Math.imul(al1, bh0);
        mid = mid + Math.imul(ah1, bl0) | 0;
        hi = Math.imul(ah1, bh0);
        lo = lo + Math.imul(al0, bl1) | 0;
        mid = mid + Math.imul(al0, bh1) | 0;
        mid = mid + Math.imul(ah0, bl1) | 0;
        hi = hi + Math.imul(ah0, bh1) | 0;
        var w1 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
        w1 &= 0x3ffffff;
        /* k = 2 */ lo = Math.imul(al2, bl0);
        mid = Math.imul(al2, bh0);
        mid = mid + Math.imul(ah2, bl0) | 0;
        hi = Math.imul(ah2, bh0);
        lo = lo + Math.imul(al1, bl1) | 0;
        mid = mid + Math.imul(al1, bh1) | 0;
        mid = mid + Math.imul(ah1, bl1) | 0;
        hi = hi + Math.imul(ah1, bh1) | 0;
        lo = lo + Math.imul(al0, bl2) | 0;
        mid = mid + Math.imul(al0, bh2) | 0;
        mid = mid + Math.imul(ah0, bl2) | 0;
        hi = hi + Math.imul(ah0, bh2) | 0;
        var w2 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
        w2 &= 0x3ffffff;
        /* k = 3 */ lo = Math.imul(al3, bl0);
        mid = Math.imul(al3, bh0);
        mid = mid + Math.imul(ah3, bl0) | 0;
        hi = Math.imul(ah3, bh0);
        lo = lo + Math.imul(al2, bl1) | 0;
        mid = mid + Math.imul(al2, bh1) | 0;
        mid = mid + Math.imul(ah2, bl1) | 0;
        hi = hi + Math.imul(ah2, bh1) | 0;
        lo = lo + Math.imul(al1, bl2) | 0;
        mid = mid + Math.imul(al1, bh2) | 0;
        mid = mid + Math.imul(ah1, bl2) | 0;
        hi = hi + Math.imul(ah1, bh2) | 0;
        lo = lo + Math.imul(al0, bl3) | 0;
        mid = mid + Math.imul(al0, bh3) | 0;
        mid = mid + Math.imul(ah0, bl3) | 0;
        hi = hi + Math.imul(ah0, bh3) | 0;
        var w3 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
        w3 &= 0x3ffffff;
        /* k = 4 */ lo = Math.imul(al4, bl0);
        mid = Math.imul(al4, bh0);
        mid = mid + Math.imul(ah4, bl0) | 0;
        hi = Math.imul(ah4, bh0);
        lo = lo + Math.imul(al3, bl1) | 0;
        mid = mid + Math.imul(al3, bh1) | 0;
        mid = mid + Math.imul(ah3, bl1) | 0;
        hi = hi + Math.imul(ah3, bh1) | 0;
        lo = lo + Math.imul(al2, bl2) | 0;
        mid = mid + Math.imul(al2, bh2) | 0;
        mid = mid + Math.imul(ah2, bl2) | 0;
        hi = hi + Math.imul(ah2, bh2) | 0;
        lo = lo + Math.imul(al1, bl3) | 0;
        mid = mid + Math.imul(al1, bh3) | 0;
        mid = mid + Math.imul(ah1, bl3) | 0;
        hi = hi + Math.imul(ah1, bh3) | 0;
        lo = lo + Math.imul(al0, bl4) | 0;
        mid = mid + Math.imul(al0, bh4) | 0;
        mid = mid + Math.imul(ah0, bl4) | 0;
        hi = hi + Math.imul(ah0, bh4) | 0;
        var w4 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
        w4 &= 0x3ffffff;
        /* k = 5 */ lo = Math.imul(al5, bl0);
        mid = Math.imul(al5, bh0);
        mid = mid + Math.imul(ah5, bl0) | 0;
        hi = Math.imul(ah5, bh0);
        lo = lo + Math.imul(al4, bl1) | 0;
        mid = mid + Math.imul(al4, bh1) | 0;
        mid = mid + Math.imul(ah4, bl1) | 0;
        hi = hi + Math.imul(ah4, bh1) | 0;
        lo = lo + Math.imul(al3, bl2) | 0;
        mid = mid + Math.imul(al3, bh2) | 0;
        mid = mid + Math.imul(ah3, bl2) | 0;
        hi = hi + Math.imul(ah3, bh2) | 0;
        lo = lo + Math.imul(al2, bl3) | 0;
        mid = mid + Math.imul(al2, bh3) | 0;
        mid = mid + Math.imul(ah2, bl3) | 0;
        hi = hi + Math.imul(ah2, bh3) | 0;
        lo = lo + Math.imul(al1, bl4) | 0;
        mid = mid + Math.imul(al1, bh4) | 0;
        mid = mid + Math.imul(ah1, bl4) | 0;
        hi = hi + Math.imul(ah1, bh4) | 0;
        lo = lo + Math.imul(al0, bl5) | 0;
        mid = mid + Math.imul(al0, bh5) | 0;
        mid = mid + Math.imul(ah0, bl5) | 0;
        hi = hi + Math.imul(ah0, bh5) | 0;
        var w5 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
        w5 &= 0x3ffffff;
        /* k = 6 */ lo = Math.imul(al6, bl0);
        mid = Math.imul(al6, bh0);
        mid = mid + Math.imul(ah6, bl0) | 0;
        hi = Math.imul(ah6, bh0);
        lo = lo + Math.imul(al5, bl1) | 0;
        mid = mid + Math.imul(al5, bh1) | 0;
        mid = mid + Math.imul(ah5, bl1) | 0;
        hi = hi + Math.imul(ah5, bh1) | 0;
        lo = lo + Math.imul(al4, bl2) | 0;
        mid = mid + Math.imul(al4, bh2) | 0;
        mid = mid + Math.imul(ah4, bl2) | 0;
        hi = hi + Math.imul(ah4, bh2) | 0;
        lo = lo + Math.imul(al3, bl3) | 0;
        mid = mid + Math.imul(al3, bh3) | 0;
        mid = mid + Math.imul(ah3, bl3) | 0;
        hi = hi + Math.imul(ah3, bh3) | 0;
        lo = lo + Math.imul(al2, bl4) | 0;
        mid = mid + Math.imul(al2, bh4) | 0;
        mid = mid + Math.imul(ah2, bl4) | 0;
        hi = hi + Math.imul(ah2, bh4) | 0;
        lo = lo + Math.imul(al1, bl5) | 0;
        mid = mid + Math.imul(al1, bh5) | 0;
        mid = mid + Math.imul(ah1, bl5) | 0;
        hi = hi + Math.imul(ah1, bh5) | 0;
        lo = lo + Math.imul(al0, bl6) | 0;
        mid = mid + Math.imul(al0, bh6) | 0;
        mid = mid + Math.imul(ah0, bl6) | 0;
        hi = hi + Math.imul(ah0, bh6) | 0;
        var w6 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
        w6 &= 0x3ffffff;
        /* k = 7 */ lo = Math.imul(al7, bl0);
        mid = Math.imul(al7, bh0);
        mid = mid + Math.imul(ah7, bl0) | 0;
        hi = Math.imul(ah7, bh0);
        lo = lo + Math.imul(al6, bl1) | 0;
        mid = mid + Math.imul(al6, bh1) | 0;
        mid = mid + Math.imul(ah6, bl1) | 0;
        hi = hi + Math.imul(ah6, bh1) | 0;
        lo = lo + Math.imul(al5, bl2) | 0;
        mid = mid + Math.imul(al5, bh2) | 0;
        mid = mid + Math.imul(ah5, bl2) | 0;
        hi = hi + Math.imul(ah5, bh2) | 0;
        lo = lo + Math.imul(al4, bl3) | 0;
        mid = mid + Math.imul(al4, bh3) | 0;
        mid = mid + Math.imul(ah4, bl3) | 0;
        hi = hi + Math.imul(ah4, bh3) | 0;
        lo = lo + Math.imul(al3, bl4) | 0;
        mid = mid + Math.imul(al3, bh4) | 0;
        mid = mid + Math.imul(ah3, bl4) | 0;
        hi = hi + Math.imul(ah3, bh4) | 0;
        lo = lo + Math.imul(al2, bl5) | 0;
        mid = mid + Math.imul(al2, bh5) | 0;
        mid = mid + Math.imul(ah2, bl5) | 0;
        hi = hi + Math.imul(ah2, bh5) | 0;
        lo = lo + Math.imul(al1, bl6) | 0;
        mid = mid + Math.imul(al1, bh6) | 0;
        mid = mid + Math.imul(ah1, bl6) | 0;
        hi = hi + Math.imul(ah1, bh6) | 0;
        lo = lo + Math.imul(al0, bl7) | 0;
        mid = mid + Math.imul(al0, bh7) | 0;
        mid = mid + Math.imul(ah0, bl7) | 0;
        hi = hi + Math.imul(ah0, bh7) | 0;
        var w7 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
        w7 &= 0x3ffffff;
        /* k = 8 */ lo = Math.imul(al8, bl0);
        mid = Math.imul(al8, bh0);
        mid = mid + Math.imul(ah8, bl0) | 0;
        hi = Math.imul(ah8, bh0);
        lo = lo + Math.imul(al7, bl1) | 0;
        mid = mid + Math.imul(al7, bh1) | 0;
        mid = mid + Math.imul(ah7, bl1) | 0;
        hi = hi + Math.imul(ah7, bh1) | 0;
        lo = lo + Math.imul(al6, bl2) | 0;
        mid = mid + Math.imul(al6, bh2) | 0;
        mid = mid + Math.imul(ah6, bl2) | 0;
        hi = hi + Math.imul(ah6, bh2) | 0;
        lo = lo + Math.imul(al5, bl3) | 0;
        mid = mid + Math.imul(al5, bh3) | 0;
        mid = mid + Math.imul(ah5, bl3) | 0;
        hi = hi + Math.imul(ah5, bh3) | 0;
        lo = lo + Math.imul(al4, bl4) | 0;
        mid = mid + Math.imul(al4, bh4) | 0;
        mid = mid + Math.imul(ah4, bl4) | 0;
        hi = hi + Math.imul(ah4, bh4) | 0;
        lo = lo + Math.imul(al3, bl5) | 0;
        mid = mid + Math.imul(al3, bh5) | 0;
        mid = mid + Math.imul(ah3, bl5) | 0;
        hi = hi + Math.imul(ah3, bh5) | 0;
        lo = lo + Math.imul(al2, bl6) | 0;
        mid = mid + Math.imul(al2, bh6) | 0;
        mid = mid + Math.imul(ah2, bl6) | 0;
        hi = hi + Math.imul(ah2, bh6) | 0;
        lo = lo + Math.imul(al1, bl7) | 0;
        mid = mid + Math.imul(al1, bh7) | 0;
        mid = mid + Math.imul(ah1, bl7) | 0;
        hi = hi + Math.imul(ah1, bh7) | 0;
        lo = lo + Math.imul(al0, bl8) | 0;
        mid = mid + Math.imul(al0, bh8) | 0;
        mid = mid + Math.imul(ah0, bl8) | 0;
        hi = hi + Math.imul(ah0, bh8) | 0;
        var w8 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
        w8 &= 0x3ffffff;
        /* k = 9 */ lo = Math.imul(al9, bl0);
        mid = Math.imul(al9, bh0);
        mid = mid + Math.imul(ah9, bl0) | 0;
        hi = Math.imul(ah9, bh0);
        lo = lo + Math.imul(al8, bl1) | 0;
        mid = mid + Math.imul(al8, bh1) | 0;
        mid = mid + Math.imul(ah8, bl1) | 0;
        hi = hi + Math.imul(ah8, bh1) | 0;
        lo = lo + Math.imul(al7, bl2) | 0;
        mid = mid + Math.imul(al7, bh2) | 0;
        mid = mid + Math.imul(ah7, bl2) | 0;
        hi = hi + Math.imul(ah7, bh2) | 0;
        lo = lo + Math.imul(al6, bl3) | 0;
        mid = mid + Math.imul(al6, bh3) | 0;
        mid = mid + Math.imul(ah6, bl3) | 0;
        hi = hi + Math.imul(ah6, bh3) | 0;
        lo = lo + Math.imul(al5, bl4) | 0;
        mid = mid + Math.imul(al5, bh4) | 0;
        mid = mid + Math.imul(ah5, bl4) | 0;
        hi = hi + Math.imul(ah5, bh4) | 0;
        lo = lo + Math.imul(al4, bl5) | 0;
        mid = mid + Math.imul(al4, bh5) | 0;
        mid = mid + Math.imul(ah4, bl5) | 0;
        hi = hi + Math.imul(ah4, bh5) | 0;
        lo = lo + Math.imul(al3, bl6) | 0;
        mid = mid + Math.imul(al3, bh6) | 0;
        mid = mid + Math.imul(ah3, bl6) | 0;
        hi = hi + Math.imul(ah3, bh6) | 0;
        lo = lo + Math.imul(al2, bl7) | 0;
        mid = mid + Math.imul(al2, bh7) | 0;
        mid = mid + Math.imul(ah2, bl7) | 0;
        hi = hi + Math.imul(ah2, bh7) | 0;
        lo = lo + Math.imul(al1, bl8) | 0;
        mid = mid + Math.imul(al1, bh8) | 0;
        mid = mid + Math.imul(ah1, bl8) | 0;
        hi = hi + Math.imul(ah1, bh8) | 0;
        lo = lo + Math.imul(al0, bl9) | 0;
        mid = mid + Math.imul(al0, bh9) | 0;
        mid = mid + Math.imul(ah0, bl9) | 0;
        hi = hi + Math.imul(ah0, bh9) | 0;
        var w9 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
        w9 &= 0x3ffffff;
        /* k = 10 */ lo = Math.imul(al9, bl1);
        mid = Math.imul(al9, bh1);
        mid = mid + Math.imul(ah9, bl1) | 0;
        hi = Math.imul(ah9, bh1);
        lo = lo + Math.imul(al8, bl2) | 0;
        mid = mid + Math.imul(al8, bh2) | 0;
        mid = mid + Math.imul(ah8, bl2) | 0;
        hi = hi + Math.imul(ah8, bh2) | 0;
        lo = lo + Math.imul(al7, bl3) | 0;
        mid = mid + Math.imul(al7, bh3) | 0;
        mid = mid + Math.imul(ah7, bl3) | 0;
        hi = hi + Math.imul(ah7, bh3) | 0;
        lo = lo + Math.imul(al6, bl4) | 0;
        mid = mid + Math.imul(al6, bh4) | 0;
        mid = mid + Math.imul(ah6, bl4) | 0;
        hi = hi + Math.imul(ah6, bh4) | 0;
        lo = lo + Math.imul(al5, bl5) | 0;
        mid = mid + Math.imul(al5, bh5) | 0;
        mid = mid + Math.imul(ah5, bl5) | 0;
        hi = hi + Math.imul(ah5, bh5) | 0;
        lo = lo + Math.imul(al4, bl6) | 0;
        mid = mid + Math.imul(al4, bh6) | 0;
        mid = mid + Math.imul(ah4, bl6) | 0;
        hi = hi + Math.imul(ah4, bh6) | 0;
        lo = lo + Math.imul(al3, bl7) | 0;
        mid = mid + Math.imul(al3, bh7) | 0;
        mid = mid + Math.imul(ah3, bl7) | 0;
        hi = hi + Math.imul(ah3, bh7) | 0;
        lo = lo + Math.imul(al2, bl8) | 0;
        mid = mid + Math.imul(al2, bh8) | 0;
        mid = mid + Math.imul(ah2, bl8) | 0;
        hi = hi + Math.imul(ah2, bh8) | 0;
        lo = lo + Math.imul(al1, bl9) | 0;
        mid = mid + Math.imul(al1, bh9) | 0;
        mid = mid + Math.imul(ah1, bl9) | 0;
        hi = hi + Math.imul(ah1, bh9) | 0;
        var w10 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
        w10 &= 0x3ffffff;
        /* k = 11 */ lo = Math.imul(al9, bl2);
        mid = Math.imul(al9, bh2);
        mid = mid + Math.imul(ah9, bl2) | 0;
        hi = Math.imul(ah9, bh2);
        lo = lo + Math.imul(al8, bl3) | 0;
        mid = mid + Math.imul(al8, bh3) | 0;
        mid = mid + Math.imul(ah8, bl3) | 0;
        hi = hi + Math.imul(ah8, bh3) | 0;
        lo = lo + Math.imul(al7, bl4) | 0;
        mid = mid + Math.imul(al7, bh4) | 0;
        mid = mid + Math.imul(ah7, bl4) | 0;
        hi = hi + Math.imul(ah7, bh4) | 0;
        lo = lo + Math.imul(al6, bl5) | 0;
        mid = mid + Math.imul(al6, bh5) | 0;
        mid = mid + Math.imul(ah6, bl5) | 0;
        hi = hi + Math.imul(ah6, bh5) | 0;
        lo = lo + Math.imul(al5, bl6) | 0;
        mid = mid + Math.imul(al5, bh6) | 0;
        mid = mid + Math.imul(ah5, bl6) | 0;
        hi = hi + Math.imul(ah5, bh6) | 0;
        lo = lo + Math.imul(al4, bl7) | 0;
        mid = mid + Math.imul(al4, bh7) | 0;
        mid = mid + Math.imul(ah4, bl7) | 0;
        hi = hi + Math.imul(ah4, bh7) | 0;
        lo = lo + Math.imul(al3, bl8) | 0;
        mid = mid + Math.imul(al3, bh8) | 0;
        mid = mid + Math.imul(ah3, bl8) | 0;
        hi = hi + Math.imul(ah3, bh8) | 0;
        lo = lo + Math.imul(al2, bl9) | 0;
        mid = mid + Math.imul(al2, bh9) | 0;
        mid = mid + Math.imul(ah2, bl9) | 0;
        hi = hi + Math.imul(ah2, bh9) | 0;
        var w11 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
        w11 &= 0x3ffffff;
        /* k = 12 */ lo = Math.imul(al9, bl3);
        mid = Math.imul(al9, bh3);
        mid = mid + Math.imul(ah9, bl3) | 0;
        hi = Math.imul(ah9, bh3);
        lo = lo + Math.imul(al8, bl4) | 0;
        mid = mid + Math.imul(al8, bh4) | 0;
        mid = mid + Math.imul(ah8, bl4) | 0;
        hi = hi + Math.imul(ah8, bh4) | 0;
        lo = lo + Math.imul(al7, bl5) | 0;
        mid = mid + Math.imul(al7, bh5) | 0;
        mid = mid + Math.imul(ah7, bl5) | 0;
        hi = hi + Math.imul(ah7, bh5) | 0;
        lo = lo + Math.imul(al6, bl6) | 0;
        mid = mid + Math.imul(al6, bh6) | 0;
        mid = mid + Math.imul(ah6, bl6) | 0;
        hi = hi + Math.imul(ah6, bh6) | 0;
        lo = lo + Math.imul(al5, bl7) | 0;
        mid = mid + Math.imul(al5, bh7) | 0;
        mid = mid + Math.imul(ah5, bl7) | 0;
        hi = hi + Math.imul(ah5, bh7) | 0;
        lo = lo + Math.imul(al4, bl8) | 0;
        mid = mid + Math.imul(al4, bh8) | 0;
        mid = mid + Math.imul(ah4, bl8) | 0;
        hi = hi + Math.imul(ah4, bh8) | 0;
        lo = lo + Math.imul(al3, bl9) | 0;
        mid = mid + Math.imul(al3, bh9) | 0;
        mid = mid + Math.imul(ah3, bl9) | 0;
        hi = hi + Math.imul(ah3, bh9) | 0;
        var w12 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
        w12 &= 0x3ffffff;
        /* k = 13 */ lo = Math.imul(al9, bl4);
        mid = Math.imul(al9, bh4);
        mid = mid + Math.imul(ah9, bl4) | 0;
        hi = Math.imul(ah9, bh4);
        lo = lo + Math.imul(al8, bl5) | 0;
        mid = mid + Math.imul(al8, bh5) | 0;
        mid = mid + Math.imul(ah8, bl5) | 0;
        hi = hi + Math.imul(ah8, bh5) | 0;
        lo = lo + Math.imul(al7, bl6) | 0;
        mid = mid + Math.imul(al7, bh6) | 0;
        mid = mid + Math.imul(ah7, bl6) | 0;
        hi = hi + Math.imul(ah7, bh6) | 0;
        lo = lo + Math.imul(al6, bl7) | 0;
        mid = mid + Math.imul(al6, bh7) | 0;
        mid = mid + Math.imul(ah6, bl7) | 0;
        hi = hi + Math.imul(ah6, bh7) | 0;
        lo = lo + Math.imul(al5, bl8) | 0;
        mid = mid + Math.imul(al5, bh8) | 0;
        mid = mid + Math.imul(ah5, bl8) | 0;
        hi = hi + Math.imul(ah5, bh8) | 0;
        lo = lo + Math.imul(al4, bl9) | 0;
        mid = mid + Math.imul(al4, bh9) | 0;
        mid = mid + Math.imul(ah4, bl9) | 0;
        hi = hi + Math.imul(ah4, bh9) | 0;
        var w13 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
        w13 &= 0x3ffffff;
        /* k = 14 */ lo = Math.imul(al9, bl5);
        mid = Math.imul(al9, bh5);
        mid = mid + Math.imul(ah9, bl5) | 0;
        hi = Math.imul(ah9, bh5);
        lo = lo + Math.imul(al8, bl6) | 0;
        mid = mid + Math.imul(al8, bh6) | 0;
        mid = mid + Math.imul(ah8, bl6) | 0;
        hi = hi + Math.imul(ah8, bh6) | 0;
        lo = lo + Math.imul(al7, bl7) | 0;
        mid = mid + Math.imul(al7, bh7) | 0;
        mid = mid + Math.imul(ah7, bl7) | 0;
        hi = hi + Math.imul(ah7, bh7) | 0;
        lo = lo + Math.imul(al6, bl8) | 0;
        mid = mid + Math.imul(al6, bh8) | 0;
        mid = mid + Math.imul(ah6, bl8) | 0;
        hi = hi + Math.imul(ah6, bh8) | 0;
        lo = lo + Math.imul(al5, bl9) | 0;
        mid = mid + Math.imul(al5, bh9) | 0;
        mid = mid + Math.imul(ah5, bl9) | 0;
        hi = hi + Math.imul(ah5, bh9) | 0;
        var w14 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
        w14 &= 0x3ffffff;
        /* k = 15 */ lo = Math.imul(al9, bl6);
        mid = Math.imul(al9, bh6);
        mid = mid + Math.imul(ah9, bl6) | 0;
        hi = Math.imul(ah9, bh6);
        lo = lo + Math.imul(al8, bl7) | 0;
        mid = mid + Math.imul(al8, bh7) | 0;
        mid = mid + Math.imul(ah8, bl7) | 0;
        hi = hi + Math.imul(ah8, bh7) | 0;
        lo = lo + Math.imul(al7, bl8) | 0;
        mid = mid + Math.imul(al7, bh8) | 0;
        mid = mid + Math.imul(ah7, bl8) | 0;
        hi = hi + Math.imul(ah7, bh8) | 0;
        lo = lo + Math.imul(al6, bl9) | 0;
        mid = mid + Math.imul(al6, bh9) | 0;
        mid = mid + Math.imul(ah6, bl9) | 0;
        hi = hi + Math.imul(ah6, bh9) | 0;
        var w15 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
        w15 &= 0x3ffffff;
        /* k = 16 */ lo = Math.imul(al9, bl7);
        mid = Math.imul(al9, bh7);
        mid = mid + Math.imul(ah9, bl7) | 0;
        hi = Math.imul(ah9, bh7);
        lo = lo + Math.imul(al8, bl8) | 0;
        mid = mid + Math.imul(al8, bh8) | 0;
        mid = mid + Math.imul(ah8, bl8) | 0;
        hi = hi + Math.imul(ah8, bh8) | 0;
        lo = lo + Math.imul(al7, bl9) | 0;
        mid = mid + Math.imul(al7, bh9) | 0;
        mid = mid + Math.imul(ah7, bl9) | 0;
        hi = hi + Math.imul(ah7, bh9) | 0;
        var w16 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
        w16 &= 0x3ffffff;
        /* k = 17 */ lo = Math.imul(al9, bl8);
        mid = Math.imul(al9, bh8);
        mid = mid + Math.imul(ah9, bl8) | 0;
        hi = Math.imul(ah9, bh8);
        lo = lo + Math.imul(al8, bl9) | 0;
        mid = mid + Math.imul(al8, bh9) | 0;
        mid = mid + Math.imul(ah8, bl9) | 0;
        hi = hi + Math.imul(ah8, bh9) | 0;
        var w17 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
        w17 &= 0x3ffffff;
        /* k = 18 */ lo = Math.imul(al9, bl9);
        mid = Math.imul(al9, bh9);
        mid = mid + Math.imul(ah9, bl9) | 0;
        hi = Math.imul(ah9, bh9);
        var w18 = (c + lo | 0) + ((mid & 0x1fff) << 13) | 0;
        c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
        w18 &= 0x3ffffff;
        o[0] = w0;
        o[1] = w1;
        o[2] = w2;
        o[3] = w3;
        o[4] = w4;
        o[5] = w5;
        o[6] = w6;
        o[7] = w7;
        o[8] = w8;
        o[9] = w9;
        o[10] = w10;
        o[11] = w11;
        o[12] = w12;
        o[13] = w13;
        o[14] = w14;
        o[15] = w15;
        o[16] = w16;
        o[17] = w17;
        o[18] = w18;
        if (c !== 0) {
            o[19] = c;
            out.length++;
        }
        return out;
    };
    // Polyfill comb
    if (!Math.imul) comb10MulTo = smallMulTo;
    function bigMulTo(self, num, out) {
        out.negative = num.negative ^ self.negative;
        out.length = self.length + num.length;
        var carry = 0;
        var hncarry = 0;
        for(var k = 0; k < out.length - 1; k++){
            // Sum all words with the same `i + j = k` and accumulate `ncarry`,
            // note that ncarry could be >= 0x3ffffff
            var ncarry = hncarry;
            hncarry = 0;
            var rword = carry & 0x3ffffff;
            var maxJ = Math.min(k, num.length - 1);
            for(var j = Math.max(0, k - self.length + 1); j <= maxJ; j++){
                var i = k - j;
                var a = self.words[i] | 0;
                var b = num.words[j] | 0;
                var r = a * b;
                var lo = r & 0x3ffffff;
                ncarry = ncarry + (r / 0x4000000 | 0) | 0;
                lo = lo + rword | 0;
                rword = lo & 0x3ffffff;
                ncarry = ncarry + (lo >>> 26) | 0;
                hncarry += ncarry >>> 26;
                ncarry &= 0x3ffffff;
            }
            out.words[k] = rword;
            carry = ncarry;
            ncarry = hncarry;
        }
        if (carry !== 0) out.words[k] = carry;
        else out.length--;
        return out._strip();
    }
    function jumboMulTo(self, num, out) {
        // Temporary disable, see https://github.com/indutny/bn.js/issues/211
        // var fftm = new FFTM();
        // return fftm.mulp(self, num, out);
        return bigMulTo(self, num, out);
    }
    BN.prototype.mulTo = function mulTo(num, out) {
        var res;
        var len = this.length + num.length;
        if (this.length === 10 && num.length === 10) res = comb10MulTo(this, num, out);
        else if (len < 63) res = smallMulTo(this, num, out);
        else if (len < 1024) res = bigMulTo(this, num, out);
        else res = jumboMulTo(this, num, out);
        return res;
    };
    // Cooley-Tukey algorithm for FFT
    // slightly revisited to rely on looping instead of recursion
    function FFTM(x, y) {
        this.x = x;
        this.y = y;
    }
    FFTM.prototype.makeRBT = function makeRBT(N) {
        var t = new Array(N);
        var l = BN.prototype._countBits(N) - 1;
        for(var i = 0; i < N; i++)t[i] = this.revBin(i, l, N);
        return t;
    };
    // Returns binary-reversed representation of `x`
    FFTM.prototype.revBin = function revBin(x, l, N) {
        if (x === 0 || x === N - 1) return x;
        var rb = 0;
        for(var i = 0; i < l; i++){
            rb |= (x & 1) << l - i - 1;
            x >>= 1;
        }
        return rb;
    };
    // Performs "tweedling" phase, therefore 'emulating'
    // behaviour of the recursive algorithm
    FFTM.prototype.permute = function permute(rbt, rws, iws, rtws, itws, N) {
        for(var i = 0; i < N; i++){
            rtws[i] = rws[rbt[i]];
            itws[i] = iws[rbt[i]];
        }
    };
    FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N, rbt) {
        this.permute(rbt, rws, iws, rtws, itws, N);
        for(var s = 1; s < N; s <<= 1){
            var l = s << 1;
            var rtwdf = Math.cos(2 * Math.PI / l);
            var itwdf = Math.sin(2 * Math.PI / l);
            for(var p = 0; p < N; p += l){
                var rtwdf_ = rtwdf;
                var itwdf_ = itwdf;
                for(var j = 0; j < s; j++){
                    var re = rtws[p + j];
                    var ie = itws[p + j];
                    var ro = rtws[p + j + s];
                    var io = itws[p + j + s];
                    var rx = rtwdf_ * ro - itwdf_ * io;
                    io = rtwdf_ * io + itwdf_ * ro;
                    ro = rx;
                    rtws[p + j] = re + ro;
                    itws[p + j] = ie + io;
                    rtws[p + j + s] = re - ro;
                    itws[p + j + s] = ie - io;
                    /* jshint maxdepth : false */ if (j !== l) {
                        rx = rtwdf * rtwdf_ - itwdf * itwdf_;
                        itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
                        rtwdf_ = rx;
                    }
                }
            }
        }
    };
    FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
        var N = Math.max(m, n) | 1;
        var odd = N & 1;
        var i = 0;
        for(N = N / 2 | 0; N; N = N >>> 1)i++;
        return 1 << i + 1 + odd;
    };
    FFTM.prototype.conjugate = function conjugate(rws, iws, N) {
        if (N <= 1) return;
        for(var i = 0; i < N / 2; i++){
            var t = rws[i];
            rws[i] = rws[N - i - 1];
            rws[N - i - 1] = t;
            t = iws[i];
            iws[i] = -iws[N - i - 1];
            iws[N - i - 1] = -t;
        }
    };
    FFTM.prototype.normalize13b = function normalize13b(ws, N) {
        var carry = 0;
        for(var i = 0; i < N / 2; i++){
            var w = Math.round(ws[2 * i + 1] / N) * 0x2000 + Math.round(ws[2 * i] / N) + carry;
            ws[i] = w & 0x3ffffff;
            if (w < 0x4000000) carry = 0;
            else carry = w / 0x4000000 | 0;
        }
        return ws;
    };
    FFTM.prototype.convert13b = function convert13b(ws, len, rws, N) {
        var carry = 0;
        for(var i = 0; i < len; i++){
            carry = carry + (ws[i] | 0);
            rws[2 * i] = carry & 0x1fff;
            carry = carry >>> 13;
            rws[2 * i + 1] = carry & 0x1fff;
            carry = carry >>> 13;
        }
        // Pad with zeroes
        for(i = 2 * len; i < N; ++i)rws[i] = 0;
        assert(carry === 0);
        assert((carry & -8192) === 0);
    };
    FFTM.prototype.stub = function stub(N) {
        var ph = new Array(N);
        for(var i = 0; i < N; i++)ph[i] = 0;
        return ph;
    };
    FFTM.prototype.mulp = function mulp(x, y, out) {
        var N = 2 * this.guessLen13b(x.length, y.length);
        var rbt = this.makeRBT(N);
        var _ = this.stub(N);
        var rws = new Array(N);
        var rwst = new Array(N);
        var iwst = new Array(N);
        var nrws = new Array(N);
        var nrwst = new Array(N);
        var niwst = new Array(N);
        var rmws = out.words;
        rmws.length = N;
        this.convert13b(x.words, x.length, rws, N);
        this.convert13b(y.words, y.length, nrws, N);
        this.transform(rws, _, rwst, iwst, N, rbt);
        this.transform(nrws, _, nrwst, niwst, N, rbt);
        for(var i = 0; i < N; i++){
            var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
            iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
            rwst[i] = rx;
        }
        this.conjugate(rwst, iwst, N);
        this.transform(rwst, iwst, rmws, _, N, rbt);
        this.conjugate(rmws, _, N);
        this.normalize13b(rmws, N);
        out.negative = x.negative ^ y.negative;
        out.length = x.length + y.length;
        return out._strip();
    };
    // Multiply `this` by `num`
    BN.prototype.mul = function mul(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return this.mulTo(num, out);
    };
    // Multiply employing FFT
    BN.prototype.mulf = function mulf(num) {
        var out = new BN(null);
        out.words = new Array(this.length + num.length);
        return jumboMulTo(this, num, out);
    };
    // In-place Multiplication
    BN.prototype.imul = function imul(num) {
        return this.clone().mulTo(num, this);
    };
    BN.prototype.imuln = function imuln(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert(typeof num === 'number');
        assert(num < 0x4000000);
        // Carry
        var carry = 0;
        for(var i = 0; i < this.length; i++){
            var w = (this.words[i] | 0) * num;
            var lo = (w & 0x3ffffff) + (carry & 0x3ffffff);
            carry >>= 26;
            carry += w / 0x4000000 | 0;
            // NOTE: lo is 27bit maximum
            carry += lo >>> 26;
            this.words[i] = lo & 0x3ffffff;
        }
        if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
        }
        return isNegNum ? this.ineg() : this;
    };
    BN.prototype.muln = function muln(num) {
        return this.clone().imuln(num);
    };
    // `this` * `this`
    BN.prototype.sqr = function sqr() {
        return this.mul(this);
    };
    // `this` * `this` in-place
    BN.prototype.isqr = function isqr() {
        return this.imul(this.clone());
    };
    // Math.pow(`this`, `num`)
    BN.prototype.pow = function pow(num) {
        var w = toBitArray(num);
        if (w.length === 0) return new BN(1);
        // Skip leading zeroes
        var res = this;
        for(var i = 0; i < w.length; i++, res = res.sqr()){
            if (w[i] !== 0) break;
        }
        if (++i < w.length) for(var q = res.sqr(); i < w.length; i++, q = q.sqr()){
            if (w[i] === 0) continue;
            res = res.mul(q);
        }
        return res;
    };
    // Shift-left in-place
    BN.prototype.iushln = function iushln(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        var carryMask = 0x3ffffff >>> 26 - r << 26 - r;
        var i;
        if (r !== 0) {
            var carry = 0;
            for(i = 0; i < this.length; i++){
                var newCarry = this.words[i] & carryMask;
                var c = (this.words[i] | 0) - newCarry << r;
                this.words[i] = c | carry;
                carry = newCarry >>> 26 - r;
            }
            if (carry) {
                this.words[i] = carry;
                this.length++;
            }
        }
        if (s !== 0) {
            for(i = this.length - 1; i >= 0; i--)this.words[i + s] = this.words[i];
            for(i = 0; i < s; i++)this.words[i] = 0;
            this.length += s;
        }
        return this._strip();
    };
    BN.prototype.ishln = function ishln(bits) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushln(bits);
    };
    // Shift-right in-place
    // NOTE: `hint` is a lowest bit before trailing zeroes
    // NOTE: if `extended` is present - it will be filled with destroyed bits
    BN.prototype.iushrn = function iushrn(bits, hint, extended) {
        assert(typeof bits === 'number' && bits >= 0);
        var h;
        if (hint) h = (hint - hint % 26) / 26;
        else h = 0;
        var r = bits % 26;
        var s = Math.min((bits - r) / 26, this.length);
        var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
        var maskedWords = extended;
        h -= s;
        h = Math.max(0, h);
        // Extended mode, copy masked part
        if (maskedWords) {
            for(var i = 0; i < s; i++)maskedWords.words[i] = this.words[i];
            maskedWords.length = s;
        }
        if (s === 0) ;
        else if (this.length > s) {
            this.length -= s;
            for(i = 0; i < this.length; i++)this.words[i] = this.words[i + s];
        } else {
            this.words[0] = 0;
            this.length = 1;
        }
        var carry = 0;
        for(i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--){
            var word = this.words[i] | 0;
            this.words[i] = carry << 26 - r | word >>> r;
            carry = word & mask;
        }
        // Push carried bits as a mask
        if (maskedWords && carry !== 0) maskedWords.words[maskedWords.length++] = carry;
        if (this.length === 0) {
            this.words[0] = 0;
            this.length = 1;
        }
        return this._strip();
    };
    BN.prototype.ishrn = function ishrn(bits, hint, extended) {
        // TODO(indutny): implement me
        assert(this.negative === 0);
        return this.iushrn(bits, hint, extended);
    };
    // Shift-left
    BN.prototype.shln = function shln(bits) {
        return this.clone().ishln(bits);
    };
    BN.prototype.ushln = function ushln(bits) {
        return this.clone().iushln(bits);
    };
    // Shift-right
    BN.prototype.shrn = function shrn(bits) {
        return this.clone().ishrn(bits);
    };
    BN.prototype.ushrn = function ushrn(bits) {
        return this.clone().iushrn(bits);
    };
    // Test if n bit is set
    BN.prototype.testn = function testn(bit) {
        assert(typeof bit === 'number' && bit >= 0);
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        // Fast case: bit is much higher than all existing words
        if (this.length <= s) return false;
        // Check bit and return
        var w = this.words[s];
        return !!(w & q);
    };
    // Return only lowers bits of number (in-place)
    BN.prototype.imaskn = function imaskn(bits) {
        assert(typeof bits === 'number' && bits >= 0);
        var r = bits % 26;
        var s = (bits - r) / 26;
        assert(this.negative === 0, 'imaskn works only with positive numbers');
        if (this.length <= s) return this;
        if (r !== 0) s++;
        this.length = Math.min(s, this.length);
        if (r !== 0) {
            var mask = 0x3ffffff ^ 0x3ffffff >>> r << r;
            this.words[this.length - 1] &= mask;
        }
        return this._strip();
    };
    // Return only lowers bits of number
    BN.prototype.maskn = function maskn(bits) {
        return this.clone().imaskn(bits);
    };
    // Add plain number `num` to `this`
    BN.prototype.iaddn = function iaddn(num) {
        assert(typeof num === 'number');
        assert(num < 0x4000000);
        if (num < 0) return this.isubn(-num);
        // Possible sign change
        if (this.negative !== 0) {
            if (this.length === 1 && (this.words[0] | 0) <= num) {
                this.words[0] = num - (this.words[0] | 0);
                this.negative = 0;
                return this;
            }
            this.negative = 0;
            this.isubn(num);
            this.negative = 1;
            return this;
        }
        // Add without checks
        return this._iaddn(num);
    };
    BN.prototype._iaddn = function _iaddn(num) {
        this.words[0] += num;
        // Carry
        for(var i = 0; i < this.length && this.words[i] >= 0x4000000; i++){
            this.words[i] -= 0x4000000;
            if (i === this.length - 1) this.words[i + 1] = 1;
            else this.words[i + 1]++;
        }
        this.length = Math.max(this.length, i + 1);
        return this;
    };
    // Subtract plain number `num` from `this`
    BN.prototype.isubn = function isubn(num) {
        assert(typeof num === 'number');
        assert(num < 0x4000000);
        if (num < 0) return this.iaddn(-num);
        if (this.negative !== 0) {
            this.negative = 0;
            this.iaddn(num);
            this.negative = 1;
            return this;
        }
        this.words[0] -= num;
        if (this.length === 1 && this.words[0] < 0) {
            this.words[0] = -this.words[0];
            this.negative = 1;
        } else // Carry
        for(var i = 0; i < this.length && this.words[i] < 0; i++){
            this.words[i] += 0x4000000;
            this.words[i + 1] -= 1;
        }
        return this._strip();
    };
    BN.prototype.addn = function addn(num) {
        return this.clone().iaddn(num);
    };
    BN.prototype.subn = function subn(num) {
        return this.clone().isubn(num);
    };
    BN.prototype.iabs = function iabs() {
        this.negative = 0;
        return this;
    };
    BN.prototype.abs = function abs() {
        return this.clone().iabs();
    };
    BN.prototype._ishlnsubmul = function _ishlnsubmul(num, mul, shift) {
        var len = num.length + shift;
        var i;
        this._expand(len);
        var w;
        var carry = 0;
        for(i = 0; i < num.length; i++){
            w = (this.words[i + shift] | 0) + carry;
            var right = (num.words[i] | 0) * mul;
            w -= right & 0x3ffffff;
            carry = (w >> 26) - (right / 0x4000000 | 0);
            this.words[i + shift] = w & 0x3ffffff;
        }
        for(; i < this.length - shift; i++){
            w = (this.words[i + shift] | 0) + carry;
            carry = w >> 26;
            this.words[i + shift] = w & 0x3ffffff;
        }
        if (carry === 0) return this._strip();
        // Subtraction overflow
        assert(carry === -1);
        carry = 0;
        for(i = 0; i < this.length; i++){
            w = -(this.words[i] | 0) + carry;
            carry = w >> 26;
            this.words[i] = w & 0x3ffffff;
        }
        this.negative = 1;
        return this._strip();
    };
    BN.prototype._wordDiv = function _wordDiv(num, mode) {
        var shift = this.length - num.length;
        var a = this.clone();
        var b = num;
        // Normalize
        var bhi = b.words[b.length - 1] | 0;
        var bhiBits = this._countBits(bhi);
        shift = 26 - bhiBits;
        if (shift !== 0) {
            b = b.ushln(shift);
            a.iushln(shift);
            bhi = b.words[b.length - 1] | 0;
        }
        // Initialize quotient
        var m = a.length - b.length;
        var q;
        if (mode !== 'mod') {
            q = new BN(null);
            q.length = m + 1;
            q.words = new Array(q.length);
            for(var i = 0; i < q.length; i++)q.words[i] = 0;
        }
        var diff = a.clone()._ishlnsubmul(b, 1, m);
        if (diff.negative === 0) {
            a = diff;
            if (q) q.words[m] = 1;
        }
        for(var j = m - 1; j >= 0; j--){
            var qj = (a.words[b.length + j] | 0) * 0x4000000 + (a.words[b.length + j - 1] | 0);
            // NOTE: (qj / bhi) is (0x3ffffff * 0x4000000 + 0x3ffffff) / 0x2000000 max
            // (0x7ffffff)
            qj = Math.min(qj / bhi | 0, 0x3ffffff);
            a._ishlnsubmul(b, qj, j);
            while(a.negative !== 0){
                qj--;
                a.negative = 0;
                a._ishlnsubmul(b, 1, j);
                if (!a.isZero()) a.negative ^= 1;
            }
            if (q) q.words[j] = qj;
        }
        if (q) q._strip();
        a._strip();
        // Denormalize
        if (mode !== 'div' && shift !== 0) a.iushrn(shift);
        return {
            div: q || null,
            mod: a
        };
    };
    // NOTE: 1) `mode` can be set to `mod` to request mod only,
    //       to `div` to request div only, or be absent to
    //       request both div & mod
    //       2) `positive` is true if unsigned mod is requested
    BN.prototype.divmod = function divmod(num, mode, positive) {
        assert(!num.isZero());
        if (this.isZero()) return {
            div: new BN(0),
            mod: new BN(0)
        };
        var div, mod, res;
        if (this.negative !== 0 && num.negative === 0) {
            res = this.neg().divmod(num, mode);
            if (mode !== 'mod') div = res.div.neg();
            if (mode !== 'div') {
                mod = res.mod.neg();
                if (positive && mod.negative !== 0) mod.iadd(num);
            }
            return {
                div: div,
                mod: mod
            };
        }
        if (this.negative === 0 && num.negative !== 0) {
            res = this.divmod(num.neg(), mode);
            if (mode !== 'mod') div = res.div.neg();
            return {
                div: div,
                mod: res.mod
            };
        }
        if ((this.negative & num.negative) !== 0) {
            res = this.neg().divmod(num.neg(), mode);
            if (mode !== 'div') {
                mod = res.mod.neg();
                if (positive && mod.negative !== 0) mod.isub(num);
            }
            return {
                div: res.div,
                mod: mod
            };
        }
        // Both numbers are positive at this point
        // Strip both numbers to approximate shift value
        if (num.length > this.length || this.cmp(num) < 0) return {
            div: new BN(0),
            mod: this
        };
        // Very short reduction
        if (num.length === 1) {
            if (mode === 'div') return {
                div: this.divn(num.words[0]),
                mod: null
            };
            if (mode === 'mod') return {
                div: null,
                mod: new BN(this.modrn(num.words[0]))
            };
            return {
                div: this.divn(num.words[0]),
                mod: new BN(this.modrn(num.words[0]))
            };
        }
        return this._wordDiv(num, mode);
    };
    // Find `this` / `num`
    BN.prototype.div = function div(num) {
        return this.divmod(num, 'div', false).div;
    };
    // Find `this` % `num`
    BN.prototype.mod = function mod(num) {
        return this.divmod(num, 'mod', false).mod;
    };
    BN.prototype.umod = function umod(num) {
        return this.divmod(num, 'mod', true).mod;
    };
    // Find Round(`this` / `num`)
    BN.prototype.divRound = function divRound(num) {
        var dm = this.divmod(num);
        // Fast case - exact division
        if (dm.mod.isZero()) return dm.div;
        var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
        var half = num.ushrn(1);
        var r2 = num.andln(1);
        var cmp = mod.cmp(half);
        // Round down
        if (cmp < 0 || r2 === 1 && cmp === 0) return dm.div;
        // Round up
        return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };
    BN.prototype.modrn = function modrn(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert(num <= 0x3ffffff);
        var p = 67108864 % num;
        var acc = 0;
        for(var i = this.length - 1; i >= 0; i--)acc = (p * acc + (this.words[i] | 0)) % num;
        return isNegNum ? -acc : acc;
    };
    // WARNING: DEPRECATED
    BN.prototype.modn = function modn(num) {
        return this.modrn(num);
    };
    // In-place division by number
    BN.prototype.idivn = function idivn(num) {
        var isNegNum = num < 0;
        if (isNegNum) num = -num;
        assert(num <= 0x3ffffff);
        var carry = 0;
        for(var i = this.length - 1; i >= 0; i--){
            var w = (this.words[i] | 0) + carry * 0x4000000;
            this.words[i] = w / num | 0;
            carry = w % num;
        }
        this._strip();
        return isNegNum ? this.ineg() : this;
    };
    BN.prototype.divn = function divn(num) {
        return this.clone().idivn(num);
    };
    BN.prototype.egcd = function egcd(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var x = this;
        var y = p.clone();
        if (x.negative !== 0) x = x.umod(p);
        else x = x.clone();
        // A * x + B * y = x
        var A = new BN(1);
        var B = new BN(0);
        // C * x + D * y = y
        var C = new BN(0);
        var D = new BN(1);
        var g = 0;
        while(x.isEven() && y.isEven()){
            x.iushrn(1);
            y.iushrn(1);
            ++g;
        }
        var yp = y.clone();
        var xp = x.clone();
        while(!x.isZero()){
            for(var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
            if (i > 0) {
                x.iushrn(i);
                while(i-- > 0){
                    if (A.isOdd() || B.isOdd()) {
                        A.iadd(yp);
                        B.isub(xp);
                    }
                    A.iushrn(1);
                    B.iushrn(1);
                }
            }
            for(var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
            if (j > 0) {
                y.iushrn(j);
                while(j-- > 0){
                    if (C.isOdd() || D.isOdd()) {
                        C.iadd(yp);
                        D.isub(xp);
                    }
                    C.iushrn(1);
                    D.iushrn(1);
                }
            }
            if (x.cmp(y) >= 0) {
                x.isub(y);
                A.isub(C);
                B.isub(D);
            } else {
                y.isub(x);
                C.isub(A);
                D.isub(B);
            }
        }
        return {
            a: C,
            b: D,
            gcd: y.iushln(g)
        };
    };
    // This is reduced incarnation of the binary EEA
    // above, designated to invert members of the
    // _prime_ fields F(p) at a maximal speed
    BN.prototype._invmp = function _invmp(p) {
        assert(p.negative === 0);
        assert(!p.isZero());
        var a = this;
        var b = p.clone();
        if (a.negative !== 0) a = a.umod(p);
        else a = a.clone();
        var x1 = new BN(1);
        var x2 = new BN(0);
        var delta = b.clone();
        while(a.cmpn(1) > 0 && b.cmpn(1) > 0){
            for(var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1);
            if (i > 0) {
                a.iushrn(i);
                while(i-- > 0){
                    if (x1.isOdd()) x1.iadd(delta);
                    x1.iushrn(1);
                }
            }
            for(var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1);
            if (j > 0) {
                b.iushrn(j);
                while(j-- > 0){
                    if (x2.isOdd()) x2.iadd(delta);
                    x2.iushrn(1);
                }
            }
            if (a.cmp(b) >= 0) {
                a.isub(b);
                x1.isub(x2);
            } else {
                b.isub(a);
                x2.isub(x1);
            }
        }
        var res;
        if (a.cmpn(1) === 0) res = x1;
        else res = x2;
        if (res.cmpn(0) < 0) res.iadd(p);
        return res;
    };
    BN.prototype.gcd = function gcd(num) {
        if (this.isZero()) return num.abs();
        if (num.isZero()) return this.abs();
        var a = this.clone();
        var b = num.clone();
        a.negative = 0;
        b.negative = 0;
        // Remove common factor of two
        for(var shift = 0; a.isEven() && b.isEven(); shift++){
            a.iushrn(1);
            b.iushrn(1);
        }
        do {
            while(a.isEven())a.iushrn(1);
            while(b.isEven())b.iushrn(1);
            var r = a.cmp(b);
            if (r < 0) {
                // Swap `a` and `b` to make `a` always bigger than `b`
                var t = a;
                a = b;
                b = t;
            } else if (r === 0 || b.cmpn(1) === 0) break;
            a.isub(b);
        }while (true)
        return b.iushln(shift);
    };
    // Invert number in the field F(num)
    BN.prototype.invm = function invm(num) {
        return this.egcd(num).a.umod(num);
    };
    BN.prototype.isEven = function isEven() {
        return (this.words[0] & 1) === 0;
    };
    BN.prototype.isOdd = function isOdd() {
        return (this.words[0] & 1) === 1;
    };
    // And first word and num
    BN.prototype.andln = function andln(num) {
        return this.words[0] & num;
    };
    // Increment at the bit position in-line
    BN.prototype.bincn = function bincn(bit) {
        assert(typeof bit === 'number');
        var r = bit % 26;
        var s = (bit - r) / 26;
        var q = 1 << r;
        // Fast case: bit is much higher than all existing words
        if (this.length <= s) {
            this._expand(s + 1);
            this.words[s] |= q;
            return this;
        }
        // Add bit and propagate, if needed
        var carry = q;
        for(var i = s; carry !== 0 && i < this.length; i++){
            var w = this.words[i] | 0;
            w += carry;
            carry = w >>> 26;
            w &= 0x3ffffff;
            this.words[i] = w;
        }
        if (carry !== 0) {
            this.words[i] = carry;
            this.length++;
        }
        return this;
    };
    BN.prototype.isZero = function isZero() {
        return this.length === 1 && this.words[0] === 0;
    };
    BN.prototype.cmpn = function cmpn(num) {
        var negative = num < 0;
        if (this.negative !== 0 && !negative) return -1;
        if (this.negative === 0 && negative) return 1;
        this._strip();
        var res;
        if (this.length > 1) res = 1;
        else {
            if (negative) num = -num;
            assert(num <= 0x3ffffff, 'Number is too big');
            var w = this.words[0] | 0;
            res = w === num ? 0 : w < num ? -1 : 1;
        }
        if (this.negative !== 0) return -res | 0;
        return res;
    };
    // Compare two numbers and return:
    // 1 - if `this` > `num`
    // 0 - if `this` == `num`
    // -1 - if `this` < `num`
    BN.prototype.cmp = function cmp(num) {
        if (this.negative !== 0 && num.negative === 0) return -1;
        if (this.negative === 0 && num.negative !== 0) return 1;
        var res = this.ucmp(num);
        if (this.negative !== 0) return -res | 0;
        return res;
    };
    // Unsigned comparison
    BN.prototype.ucmp = function ucmp(num) {
        // At this point both numbers have the same sign
        if (this.length > num.length) return 1;
        if (this.length < num.length) return -1;
        var res = 0;
        for(var i = this.length - 1; i >= 0; i--){
            var a = this.words[i] | 0;
            var b = num.words[i] | 0;
            if (a === b) continue;
            if (a < b) res = -1;
            else if (a > b) res = 1;
            break;
        }
        return res;
    };
    BN.prototype.gtn = function gtn(num) {
        return this.cmpn(num) === 1;
    };
    BN.prototype.gt = function gt(num) {
        return this.cmp(num) === 1;
    };
    BN.prototype.gten = function gten(num) {
        return this.cmpn(num) >= 0;
    };
    BN.prototype.gte = function gte(num) {
        return this.cmp(num) >= 0;
    };
    BN.prototype.ltn = function ltn(num) {
        return this.cmpn(num) === -1;
    };
    BN.prototype.lt = function lt(num) {
        return this.cmp(num) === -1;
    };
    BN.prototype.lten = function lten(num) {
        return this.cmpn(num) <= 0;
    };
    BN.prototype.lte = function lte(num) {
        return this.cmp(num) <= 0;
    };
    BN.prototype.eqn = function eqn(num) {
        return this.cmpn(num) === 0;
    };
    BN.prototype.eq = function eq(num) {
        return this.cmp(num) === 0;
    };
    //
    // A reduce context, could be using montgomery or something better, depending
    // on the `m` itself.
    //
    BN.red = function red(num) {
        return new Red(num);
    };
    BN.prototype.toRed = function toRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        assert(this.negative === 0, 'red works only with positives');
        return ctx.convertTo(this)._forceRed(ctx);
    };
    BN.prototype.fromRed = function fromRed() {
        assert(this.red, 'fromRed works only with numbers in reduction context');
        return this.red.convertFrom(this);
    };
    BN.prototype._forceRed = function _forceRed(ctx) {
        this.red = ctx;
        return this;
    };
    BN.prototype.forceRed = function forceRed(ctx) {
        assert(!this.red, 'Already a number in reduction context');
        return this._forceRed(ctx);
    };
    BN.prototype.redAdd = function redAdd(num) {
        assert(this.red, 'redAdd works only with red numbers');
        return this.red.add(this, num);
    };
    BN.prototype.redIAdd = function redIAdd(num) {
        assert(this.red, 'redIAdd works only with red numbers');
        return this.red.iadd(this, num);
    };
    BN.prototype.redSub = function redSub(num) {
        assert(this.red, 'redSub works only with red numbers');
        return this.red.sub(this, num);
    };
    BN.prototype.redISub = function redISub(num) {
        assert(this.red, 'redISub works only with red numbers');
        return this.red.isub(this, num);
    };
    BN.prototype.redShl = function redShl(num) {
        assert(this.red, 'redShl works only with red numbers');
        return this.red.shl(this, num);
    };
    BN.prototype.redMul = function redMul(num) {
        assert(this.red, 'redMul works only with red numbers');
        this.red._verify2(this, num);
        return this.red.mul(this, num);
    };
    BN.prototype.redIMul = function redIMul(num) {
        assert(this.red, 'redMul works only with red numbers');
        this.red._verify2(this, num);
        return this.red.imul(this, num);
    };
    BN.prototype.redSqr = function redSqr() {
        assert(this.red, 'redSqr works only with red numbers');
        this.red._verify1(this);
        return this.red.sqr(this);
    };
    BN.prototype.redISqr = function redISqr() {
        assert(this.red, 'redISqr works only with red numbers');
        this.red._verify1(this);
        return this.red.isqr(this);
    };
    // Square root over p
    BN.prototype.redSqrt = function redSqrt() {
        assert(this.red, 'redSqrt works only with red numbers');
        this.red._verify1(this);
        return this.red.sqrt(this);
    };
    BN.prototype.redInvm = function redInvm() {
        assert(this.red, 'redInvm works only with red numbers');
        this.red._verify1(this);
        return this.red.invm(this);
    };
    // Return negative clone of `this` % `red modulo`
    BN.prototype.redNeg = function redNeg() {
        assert(this.red, 'redNeg works only with red numbers');
        this.red._verify1(this);
        return this.red.neg(this);
    };
    BN.prototype.redPow = function redPow(num) {
        assert(this.red && !num.red, 'redPow(normalNum)');
        this.red._verify1(this);
        return this.red.pow(this, num);
    };
    // Prime numbers with efficient reduction
    var primes = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
    };
    // Pseudo-Mersenne prime
    function MPrime(name, p) {
        // P = 2 ^ N - K
        this.name = name;
        this.p = new BN(p, 16);
        this.n = this.p.bitLength();
        this.k = new BN(1).iushln(this.n).isub(this.p);
        this.tmp = this._tmp();
    }
    MPrime.prototype._tmp = function _tmp() {
        var tmp = new BN(null);
        tmp.words = new Array(Math.ceil(this.n / 13));
        return tmp;
    };
    MPrime.prototype.ireduce = function ireduce(num) {
        // Assumes that `num` is less than `P^2`
        // num = HI * (2 ^ N - K) + HI * K + LO = HI * K + LO (mod P)
        var r = num;
        var rlen;
        do {
            this.split(r, this.tmp);
            r = this.imulK(r);
            r = r.iadd(this.tmp);
            rlen = r.bitLength();
        }while (rlen > this.n)
        var cmp = rlen < this.n ? -1 : r.ucmp(this.p);
        if (cmp === 0) {
            r.words[0] = 0;
            r.length = 1;
        } else if (cmp > 0) r.isub(this.p);
        else if (r.strip !== undefined) // r is a BN v4 instance
        r.strip();
        else // r is a BN v5 instance
        r._strip();
        return r;
    };
    MPrime.prototype.split = function split(input, out) {
        input.iushrn(this.n, 0, out);
    };
    MPrime.prototype.imulK = function imulK(num) {
        return num.imul(this.k);
    };
    function K256() {
        MPrime.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
    }
    inherits(K256, MPrime);
    K256.prototype.split = function split(input, output) {
        // 256 = 9 * 26 + 22
        var mask = 0x3fffff;
        var outLen = Math.min(input.length, 9);
        for(var i = 0; i < outLen; i++)output.words[i] = input.words[i];
        output.length = outLen;
        if (input.length <= 9) {
            input.words[0] = 0;
            input.length = 1;
            return;
        }
        // Shift by 9 limbs
        var prev = input.words[9];
        output.words[output.length++] = prev & mask;
        for(i = 10; i < input.length; i++){
            var next = input.words[i] | 0;
            input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
            prev = next;
        }
        prev >>>= 22;
        input.words[i - 10] = prev;
        if (prev === 0 && input.length > 10) input.length -= 10;
        else input.length -= 9;
    };
    K256.prototype.imulK = function imulK(num) {
        // K = 0x1000003d1 = [ 0x40, 0x3d1 ]
        num.words[num.length] = 0;
        num.words[num.length + 1] = 0;
        num.length += 2;
        // bounded at: 0x40 * 0x3ffffff + 0x3d0 = 0x100000390
        var lo = 0;
        for(var i = 0; i < num.length; i++){
            var w = num.words[i] | 0;
            lo += w * 0x3d1;
            num.words[i] = lo & 0x3ffffff;
            lo = w * 0x40 + (lo / 0x4000000 | 0);
        }
        // Fast length reduction
        if (num.words[num.length - 1] === 0) {
            num.length--;
            if (num.words[num.length - 1] === 0) num.length--;
        }
        return num;
    };
    function P224() {
        MPrime.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }
    inherits(P224, MPrime);
    function P192() {
        MPrime.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }
    inherits(P192, MPrime);
    function P25519() {
        // 2 ^ 255 - 19
        MPrime.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }
    inherits(P25519, MPrime);
    P25519.prototype.imulK = function imulK(num) {
        // K = 0x13
        var carry = 0;
        for(var i = 0; i < num.length; i++){
            var hi = (num.words[i] | 0) * 0x13 + carry;
            var lo = hi & 0x3ffffff;
            hi >>>= 26;
            num.words[i] = lo;
            carry = hi;
        }
        if (carry !== 0) num.words[num.length++] = carry;
        return num;
    };
    // Exported mostly for testing purposes, use plain name instead
    BN._prime = function prime(name) {
        // Cached version of prime
        if (primes[name]) return primes[name];
        var prime;
        if (name === 'k256') prime = new K256();
        else if (name === 'p224') prime = new P224();
        else if (name === 'p192') prime = new P192();
        else if (name === 'p25519') prime = new P25519();
        else throw new Error('Unknown prime ' + name);
        primes[name] = prime;
        return prime;
    };
    //
    // Base reduction engine
    //
    function Red(m) {
        if (typeof m === 'string') {
            var prime = BN._prime(m);
            this.m = prime.p;
            this.prime = prime;
        } else {
            assert(m.gtn(1), 'modulus must be greater than 1');
            this.m = m;
            this.prime = null;
        }
    }
    Red.prototype._verify1 = function _verify1(a) {
        assert(a.negative === 0, 'red works only with positives');
        assert(a.red, 'red works only with red numbers');
    };
    Red.prototype._verify2 = function _verify2(a, b) {
        assert((a.negative | b.negative) === 0, 'red works only with positives');
        assert(a.red && a.red === b.red, 'red works only with red numbers');
    };
    Red.prototype.imod = function imod(a) {
        if (this.prime) return this.prime.ireduce(a)._forceRed(this);
        move(a, a.umod(this.m)._forceRed(this));
        return a;
    };
    Red.prototype.neg = function neg(a) {
        if (a.isZero()) return a.clone();
        return this.m.sub(a)._forceRed(this);
    };
    Red.prototype.add = function add(a, b) {
        this._verify2(a, b);
        var res = a.add(b);
        if (res.cmp(this.m) >= 0) res.isub(this.m);
        return res._forceRed(this);
    };
    Red.prototype.iadd = function iadd(a, b) {
        this._verify2(a, b);
        var res = a.iadd(b);
        if (res.cmp(this.m) >= 0) res.isub(this.m);
        return res;
    };
    Red.prototype.sub = function sub(a, b) {
        this._verify2(a, b);
        var res = a.sub(b);
        if (res.cmpn(0) < 0) res.iadd(this.m);
        return res._forceRed(this);
    };
    Red.prototype.isub = function isub(a, b) {
        this._verify2(a, b);
        var res = a.isub(b);
        if (res.cmpn(0) < 0) res.iadd(this.m);
        return res;
    };
    Red.prototype.shl = function shl(a, num) {
        this._verify1(a);
        return this.imod(a.ushln(num));
    };
    Red.prototype.imul = function imul(a, b) {
        this._verify2(a, b);
        return this.imod(a.imul(b));
    };
    Red.prototype.mul = function mul(a, b) {
        this._verify2(a, b);
        return this.imod(a.mul(b));
    };
    Red.prototype.isqr = function isqr(a) {
        return this.imul(a, a.clone());
    };
    Red.prototype.sqr = function sqr(a) {
        return this.mul(a, a);
    };
    Red.prototype.sqrt = function sqrt(a) {
        if (a.isZero()) return a.clone();
        var mod3 = this.m.andln(3);
        assert(mod3 % 2 === 1);
        // Fast case
        if (mod3 === 3) {
            var pow = this.m.add(new BN(1)).iushrn(2);
            return this.pow(a, pow);
        }
        // Tonelli-Shanks algorithm (Totally unoptimized and slow)
        //
        // Find Q and S, that Q * 2 ^ S = (P - 1)
        var q = this.m.subn(1);
        var s = 0;
        while(!q.isZero() && q.andln(1) === 0){
            s++;
            q.iushrn(1);
        }
        assert(!q.isZero());
        var one = new BN(1).toRed(this);
        var nOne = one.redNeg();
        // Find quadratic non-residue
        // NOTE: Max is such because of generalized Riemann hypothesis.
        var lpow = this.m.subn(1).iushrn(1);
        var z = this.m.bitLength();
        z = new BN(2 * z * z).toRed(this);
        while(this.pow(z, lpow).cmp(nOne) !== 0)z.redIAdd(nOne);
        var c = this.pow(z, q);
        var r = this.pow(a, q.addn(1).iushrn(1));
        var t = this.pow(a, q);
        var m = s;
        while(t.cmp(one) !== 0){
            var tmp = t;
            for(var i = 0; tmp.cmp(one) !== 0; i++)tmp = tmp.redSqr();
            assert(i < m);
            var b = this.pow(c, new BN(1).iushln(m - i - 1));
            r = r.redMul(b);
            c = b.redSqr();
            t = t.redMul(c);
            m = i;
        }
        return r;
    };
    Red.prototype.invm = function invm(a) {
        var inv = a._invmp(this.m);
        if (inv.negative !== 0) {
            inv.negative = 0;
            return this.imod(inv).redNeg();
        } else return this.imod(inv);
    };
    Red.prototype.pow = function pow(a, num) {
        if (num.isZero()) return new BN(1).toRed(this);
        if (num.cmpn(1) === 0) return a.clone();
        var windowSize = 4;
        var wnd = new Array(1 << windowSize);
        wnd[0] = new BN(1).toRed(this);
        wnd[1] = a;
        for(var i = 2; i < wnd.length; i++)wnd[i] = this.mul(wnd[i - 1], a);
        var res = wnd[0];
        var current = 0;
        var currentLen = 0;
        var start = num.bitLength() % 26;
        if (start === 0) start = 26;
        for(i = num.length - 1; i >= 0; i--){
            var word = num.words[i];
            for(var j = start - 1; j >= 0; j--){
                var bit = word >> j & 1;
                if (res !== wnd[0]) res = this.sqr(res);
                if (bit === 0 && current === 0) {
                    currentLen = 0;
                    continue;
                }
                current <<= 1;
                current |= bit;
                currentLen++;
                if (currentLen !== windowSize && (i !== 0 || j !== 0)) continue;
                res = this.mul(res, wnd[current]);
                currentLen = 0;
                current = 0;
            }
            start = 26;
        }
        return res;
    };
    Red.prototype.convertTo = function convertTo(num) {
        var r = num.umod(this.m);
        return r === num ? r.clone() : r;
    };
    Red.prototype.convertFrom = function convertFrom(num) {
        var res = num.clone();
        res.red = null;
        return res;
    };
    //
    // Montgomery method engine
    //
    BN.mont = function mont(num) {
        return new Mont(num);
    };
    function Mont(m) {
        Red.call(this, m);
        this.shift = this.m.bitLength();
        if (this.shift % 26 !== 0) this.shift += 26 - this.shift % 26;
        this.r = new BN(1).iushln(this.shift);
        this.r2 = this.imod(this.r.sqr());
        this.rinv = this.r._invmp(this.m);
        this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
        this.minv = this.minv.umod(this.r);
        this.minv = this.r.sub(this.minv);
    }
    inherits(Mont, Red);
    Mont.prototype.convertTo = function convertTo(num) {
        return this.imod(num.ushln(this.shift));
    };
    Mont.prototype.convertFrom = function convertFrom(num) {
        var r = this.imod(num.mul(this.rinv));
        r.red = null;
        return r;
    };
    Mont.prototype.imul = function imul(a, b) {
        if (a.isZero() || b.isZero()) {
            a.words[0] = 0;
            a.length = 1;
            return a;
        }
        var t = a.imul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) res = u.isub(this.m);
        else if (u.cmpn(0) < 0) res = u.iadd(this.m);
        return res._forceRed(this);
    };
    Mont.prototype.mul = function mul(a, b) {
        if (a.isZero() || b.isZero()) return new BN(0)._forceRed(this);
        var t = a.mul(b);
        var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
        var u = t.isub(c).iushrn(this.shift);
        var res = u;
        if (u.cmp(this.m) >= 0) res = u.isub(this.m);
        else if (u.cmpn(0) < 0) res = u.iadd(this.m);
        return res._forceRed(this);
    };
    Mont.prototype.invm = function invm(a) {
        // (AR)^-1 * R^2 = (A^-1 * R^-1) * R^2 = A^-1 * R
        var res = this.imod(a._invmp(this.m).mul(this.r2));
        return res._forceRed(this);
    };
})(module, this);

},{"buffer":"jhUEF"}],"6tZDD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMessageFromCode = exports.serializeError = exports.EthereumProviderError = exports.EthereumRpcError = exports.ethErrors = exports.errorCodes = void 0;
const classes_1 = require("./classes");
Object.defineProperty(exports, "EthereumRpcError", {
    enumerable: true,
    get: function() {
        return classes_1.EthereumRpcError;
    }
});
Object.defineProperty(exports, "EthereumProviderError", {
    enumerable: true,
    get: function() {
        return classes_1.EthereumProviderError;
    }
});
const utils_1 = require("./utils");
Object.defineProperty(exports, "serializeError", {
    enumerable: true,
    get: function() {
        return utils_1.serializeError;
    }
});
Object.defineProperty(exports, "getMessageFromCode", {
    enumerable: true,
    get: function() {
        return utils_1.getMessageFromCode;
    }
});
const errors_1 = require("./errors");
Object.defineProperty(exports, "ethErrors", {
    enumerable: true,
    get: function() {
        return errors_1.ethErrors;
    }
});
const error_constants_1 = require("./error-constants");
Object.defineProperty(exports, "errorCodes", {
    enumerable: true,
    get: function() {
        return error_constants_1.errorCodes;
    }
});

},{"./classes":"5jEpN","./utils":"g4p4x","./errors":"3x65X","./error-constants":"40cdd"}],"5jEpN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EthereumProviderError = exports.EthereumRpcError = void 0;
const fast_safe_stringify_1 = require("fast-safe-stringify");
/**
 * Error subclass implementing JSON RPC 2.0 errors and Ethereum RPC errors
 * per EIP-1474.
 * Permits any integer error code.
 */ class EthereumRpcError extends Error {
    constructor(code, message, data){
        if (!Number.isInteger(code)) throw new Error('"code" must be an integer.');
        if (!message || typeof message !== 'string') throw new Error('"message" must be a nonempty string.');
        super(message);
        this.code = code;
        if (data !== undefined) this.data = data;
    }
    /**
     * Returns a plain object with all public class properties.
     */ serialize() {
        const serialized = {
            code: this.code,
            message: this.message
        };
        if (this.data !== undefined) serialized.data = this.data;
        if (this.stack) serialized.stack = this.stack;
        return serialized;
    }
    /**
     * Return a string representation of the serialized error, omitting
     * any circular references.
     */ toString() {
        return fast_safe_stringify_1.default(this.serialize(), stringifyReplacer, 2);
    }
}
exports.EthereumRpcError = EthereumRpcError;
/**
 * Error subclass implementing Ethereum Provider errors per EIP-1193.
 * Permits integer error codes in the [ 1000 <= 4999 ] range.
 */ class EthereumProviderError extends EthereumRpcError {
    /**
     * Create an Ethereum Provider JSON-RPC error.
     * `code` must be an integer in the 1000 <= 4999 range.
     */ constructor(code, message, data){
        if (!isValidEthProviderCode(code)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        super(code, message, data);
    }
}
exports.EthereumProviderError = EthereumProviderError;
// Internal
function isValidEthProviderCode(code) {
    return Number.isInteger(code) && code >= 1000 && code <= 4999;
}
function stringifyReplacer(_, value) {
    if (value === '[Circular]') return undefined;
    return value;
}

},{"fast-safe-stringify":"dY7b6"}],"dY7b6":[function(require,module,exports) {
module.exports = stringify;
stringify.default = stringify;
stringify.stable = deterministicStringify;
stringify.stableStringify = deterministicStringify;
var LIMIT_REPLACE_NODE = '[...]';
var CIRCULAR_REPLACE_NODE = '[Circular]';
var arr = [];
var replacerStack = [];
function defaultOptions() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
    };
}
// Regular stringify
function stringify(obj, replacer, spacer, options) {
    if (typeof options === 'undefined') options = defaultOptions();
    decirc(obj, '', 0, [], undefined, 0, options);
    var res;
    try {
        if (replacerStack.length === 0) res = JSON.stringify(obj, replacer, spacer);
        else res = JSON.stringify(obj, replaceGetterValues(replacer), spacer);
    } catch (_) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally{
        while(arr.length !== 0){
            var part = arr.pop();
            if (part.length === 4) Object.defineProperty(part[0], part[1], part[3]);
            else part[0][part[1]] = part[2];
        }
    }
    return res;
}
function setReplace(replace, val, k, parent) {
    var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k);
    if (propertyDescriptor.get !== undefined) {
        if (propertyDescriptor.configurable) {
            Object.defineProperty(parent, k, {
                value: replace
            });
            arr.push([
                parent,
                k,
                val,
                propertyDescriptor
            ]);
        } else replacerStack.push([
            val,
            k,
            replace
        ]);
    } else {
        parent[k] = replace;
        arr.push([
            parent,
            k,
            val
        ]);
    }
}
function decirc(val, k, edgeIndex, stack, parent, depth, options) {
    depth += 1;
    var i;
    if (typeof val === 'object' && val !== null) {
        for(i = 0; i < stack.length; i++)if (stack[i] === val) {
            setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
            return;
        }
        if (typeof options.depthLimit !== 'undefined' && depth > options.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        if (typeof options.edgesLimit !== 'undefined' && edgeIndex + 1 > options.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        stack.push(val);
        // Optimize for Arrays. Big arrays could kill the performance otherwise!
        if (Array.isArray(val)) for(i = 0; i < val.length; i++)decirc(val[i], i, i, stack, val, depth, options);
        else {
            var keys = Object.keys(val);
            for(i = 0; i < keys.length; i++){
                var key = keys[i];
                decirc(val[key], key, i, stack, val, depth, options);
            }
        }
        stack.pop();
    }
}
// Stable-stringify
function compareFunction(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
function deterministicStringify(obj, replacer, spacer, options) {
    if (typeof options === 'undefined') options = defaultOptions();
    var tmp = deterministicDecirc(obj, '', 0, [], undefined, 0, options) || obj;
    var res;
    try {
        if (replacerStack.length === 0) res = JSON.stringify(tmp, replacer, spacer);
        else res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer);
    } catch (_) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally{
        // Ensure that we restore the object as it was.
        while(arr.length !== 0){
            var part = arr.pop();
            if (part.length === 4) Object.defineProperty(part[0], part[1], part[3]);
            else part[0][part[1]] = part[2];
        }
    }
    return res;
}
function deterministicDecirc(val, k, edgeIndex, stack, parent, depth, options) {
    depth += 1;
    var i;
    if (typeof val === 'object' && val !== null) {
        for(i = 0; i < stack.length; i++)if (stack[i] === val) {
            setReplace(CIRCULAR_REPLACE_NODE, val, k, parent);
            return;
        }
        try {
            if (typeof val.toJSON === 'function') return;
        } catch (_) {
            return;
        }
        if (typeof options.depthLimit !== 'undefined' && depth > options.depthLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        if (typeof options.edgesLimit !== 'undefined' && edgeIndex + 1 > options.edgesLimit) {
            setReplace(LIMIT_REPLACE_NODE, val, k, parent);
            return;
        }
        stack.push(val);
        // Optimize for Arrays. Big arrays could kill the performance otherwise!
        if (Array.isArray(val)) for(i = 0; i < val.length; i++)deterministicDecirc(val[i], i, i, stack, val, depth, options);
        else {
            // Create a temporary object in the required way
            var tmp = {};
            var keys = Object.keys(val).sort(compareFunction);
            for(i = 0; i < keys.length; i++){
                var key = keys[i];
                deterministicDecirc(val[key], key, i, stack, val, depth, options);
                tmp[key] = val[key];
            }
            if (typeof parent !== 'undefined') {
                arr.push([
                    parent,
                    k,
                    val
                ]);
                parent[k] = tmp;
            } else return tmp;
        }
        stack.pop();
    }
}
// wraps replacer function to handle values we couldn't replace
// and mark them as replaced value
function replaceGetterValues(replacer) {
    replacer = typeof replacer !== 'undefined' ? replacer : function(k, v) {
        return v;
    };
    return function(key, val) {
        if (replacerStack.length > 0) for(var i = 0; i < replacerStack.length; i++){
            var part = replacerStack[i];
            if (part[1] === key && part[0] === val) {
                val = part[2];
                replacerStack.splice(i, 1);
                break;
            }
        }
        return replacer.call(this, key, val);
    };
}

},{}],"g4p4x":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeError = exports.isValidCode = exports.getMessageFromCode = exports.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
const error_constants_1 = require("./error-constants");
const classes_1 = require("./classes");
const FALLBACK_ERROR_CODE = error_constants_1.errorCodes.rpc.internal;
const FALLBACK_MESSAGE = 'Unspecified error message. This is a bug, please report it.';
const FALLBACK_ERROR = {
    code: FALLBACK_ERROR_CODE,
    message: getMessageFromCode(FALLBACK_ERROR_CODE)
};
exports.JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.';
/**
 * Gets the message for a given code, or a fallback message if the code has
 * no corresponding message.
 */ function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
    if (Number.isInteger(code)) {
        const codeString = code.toString();
        if (hasKey(error_constants_1.errorValues, codeString)) return error_constants_1.errorValues[codeString].message;
        if (isJsonRpcServerError(code)) return exports.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return fallbackMessage;
}
exports.getMessageFromCode = getMessageFromCode;
/**
 * Returns whether the given code is valid.
 * A code is only valid if it has a message.
 */ function isValidCode(code) {
    if (!Number.isInteger(code)) return false;
    const codeString = code.toString();
    if (error_constants_1.errorValues[codeString]) return true;
    if (isJsonRpcServerError(code)) return true;
    return false;
}
exports.isValidCode = isValidCode;
/**
 * Serializes the given error to an Ethereum JSON RPC-compatible error object.
 * Merely copies the given error's values if it is already compatible.
 * If the given error is not fully compatible, it will be preserved on the
 * returned object's data.originalError property.
 */ function serializeError(error, { fallbackError =FALLBACK_ERROR , shouldIncludeStack =false ,  } = {}) {
    var _a, _b;
    if (!fallbackError || !Number.isInteger(fallbackError.code) || typeof fallbackError.message !== 'string') throw new Error('Must provide fallback error with integer number code and string message.');
    if (error instanceof classes_1.EthereumRpcError) return error.serialize();
    const serialized = {};
    if (error && typeof error === 'object' && !Array.isArray(error) && hasKey(error, 'code') && isValidCode(error.code)) {
        const _error = error;
        serialized.code = _error.code;
        if (_error.message && typeof _error.message === 'string') {
            serialized.message = _error.message;
            if (hasKey(_error, 'data')) serialized.data = _error.data;
        } else {
            serialized.message = getMessageFromCode(serialized.code);
            serialized.data = {
                originalError: assignOriginalError(error)
            };
        }
    } else {
        serialized.code = fallbackError.code;
        const message = (_a = error) === null || _a === void 0 ? void 0 : _a.message;
        serialized.message = message && typeof message === 'string' ? message : fallbackError.message;
        serialized.data = {
            originalError: assignOriginalError(error)
        };
    }
    const stack = (_b = error) === null || _b === void 0 ? void 0 : _b.stack;
    if (shouldIncludeStack && error && stack && typeof stack === 'string') serialized.stack = stack;
    return serialized;
}
exports.serializeError = serializeError;
// Internal
function isJsonRpcServerError(code) {
    return code >= -32099 && code <= -32000;
}
function assignOriginalError(error) {
    if (error && typeof error === 'object' && !Array.isArray(error)) return Object.assign({}, error);
    return error;
}
function hasKey(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}

},{"./error-constants":"40cdd","./classes":"5jEpN"}],"40cdd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.errorValues = exports.errorCodes = void 0;
exports.errorCodes = {
    rpc: {
        invalidInput: -32000,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901
    }
};
exports.errorValues = {
    '-32700': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.'
    },
    '-32600': {
        standard: 'JSON RPC 2.0',
        message: 'The JSON sent is not a valid Request object.'
    },
    '-32601': {
        standard: 'JSON RPC 2.0',
        message: 'The method does not exist / is not available.'
    },
    '-32602': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid method parameter(s).'
    },
    '-32603': {
        standard: 'JSON RPC 2.0',
        message: 'Internal JSON-RPC error.'
    },
    '-32000': {
        standard: 'EIP-1474',
        message: 'Invalid input.'
    },
    '-32001': {
        standard: 'EIP-1474',
        message: 'Resource not found.'
    },
    '-32002': {
        standard: 'EIP-1474',
        message: 'Resource unavailable.'
    },
    '-32003': {
        standard: 'EIP-1474',
        message: 'Transaction rejected.'
    },
    '-32004': {
        standard: 'EIP-1474',
        message: 'Method not supported.'
    },
    '-32005': {
        standard: 'EIP-1474',
        message: 'Request limit exceeded.'
    },
    '4001': {
        standard: 'EIP-1193',
        message: 'User rejected the request.'
    },
    '4100': {
        standard: 'EIP-1193',
        message: 'The requested account and/or method has not been authorized by the user.'
    },
    '4200': {
        standard: 'EIP-1193',
        message: 'The requested method is not supported by this Ethereum provider.'
    },
    '4900': {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from all chains.'
    },
    '4901': {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from the specified chain.'
    }
};

},{}],"3x65X":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ethErrors = void 0;
const classes_1 = require("./classes");
const utils_1 = require("./utils");
const error_constants_1 = require("./error-constants");
exports.ethErrors = {
    rpc: {
        /**
         * Get a JSON RPC 2.0 Parse (-32700) error.
         */ parse: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.parse, arg)
        ,
        /**
         * Get a JSON RPC 2.0 Invalid Request (-32600) error.
         */ invalidRequest: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidRequest, arg)
        ,
        /**
         * Get a JSON RPC 2.0 Invalid Params (-32602) error.
         */ invalidParams: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidParams, arg)
        ,
        /**
         * Get a JSON RPC 2.0 Method Not Found (-32601) error.
         */ methodNotFound: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotFound, arg)
        ,
        /**
         * Get a JSON RPC 2.0 Internal (-32603) error.
         */ internal: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.internal, arg)
        ,
        /**
         * Get a JSON RPC 2.0 Server error.
         * Permits integer error codes in the [ -32099 <= -32005 ] range.
         * Codes -32000 through -32004 are reserved by EIP-1474.
         */ server: (opts)=>{
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) throw new Error('Ethereum RPC Server errors must provide single object argument.');
            const { code  } = opts;
            if (!Number.isInteger(code) || code > -32005 || code < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return getEthJsonRpcError(code, opts);
        },
        /**
         * Get an Ethereum JSON RPC Invalid Input (-32000) error.
         */ invalidInput: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidInput, arg)
        ,
        /**
         * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
         */ resourceNotFound: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceNotFound, arg)
        ,
        /**
         * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
         */ resourceUnavailable: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceUnavailable, arg)
        ,
        /**
         * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
         */ transactionRejected: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.transactionRejected, arg)
        ,
        /**
         * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
         */ methodNotSupported: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotSupported, arg)
        ,
        /**
         * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
         */ limitExceeded: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.limitExceeded, arg)
    },
    provider: {
        /**
         * Get an Ethereum Provider User Rejected Request (4001) error.
         */ userRejectedRequest: (arg)=>{
            return getEthProviderError(error_constants_1.errorCodes.provider.userRejectedRequest, arg);
        },
        /**
         * Get an Ethereum Provider Unauthorized (4100) error.
         */ unauthorized: (arg)=>{
            return getEthProviderError(error_constants_1.errorCodes.provider.unauthorized, arg);
        },
        /**
         * Get an Ethereum Provider Unsupported Method (4200) error.
         */ unsupportedMethod: (arg)=>{
            return getEthProviderError(error_constants_1.errorCodes.provider.unsupportedMethod, arg);
        },
        /**
         * Get an Ethereum Provider Not Connected (4900) error.
         */ disconnected: (arg)=>{
            return getEthProviderError(error_constants_1.errorCodes.provider.disconnected, arg);
        },
        /**
         * Get an Ethereum Provider Chain Not Connected (4901) error.
         */ chainDisconnected: (arg)=>{
            return getEthProviderError(error_constants_1.errorCodes.provider.chainDisconnected, arg);
        },
        /**
         * Get a custom Ethereum Provider error.
         */ custom: (opts)=>{
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) throw new Error('Ethereum Provider custom errors must provide single object argument.');
            const { code , message , data  } = opts;
            if (!message || typeof message !== 'string') throw new Error('"message" must be a nonempty string');
            return new classes_1.EthereumProviderError(code, message, data);
        }
    }
};
// Internal
function getEthJsonRpcError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new classes_1.EthereumRpcError(code, message || utils_1.getMessageFromCode(code), data);
}
function getEthProviderError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new classes_1.EthereumProviderError(code, message || utils_1.getMessageFromCode(code), data);
}
function parseOpts(arg) {
    if (arg) {
        if (typeof arg === 'string') return [
            arg
        ];
        else if (typeof arg === 'object' && !Array.isArray(arg)) {
            const { message , data  } = arg;
            if (message && typeof message !== 'string') throw new Error('Must specify string message.');
            return [
                message || undefined,
                data
            ];
        }
    }
    return [];
}

},{"./classes":"5jEpN","./utils":"g4p4x","./error-constants":"40cdd"}],"bZTVr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WalletLinkAnalytics = void 0;
class WalletLinkAnalytics {
    sendEvent(_eventType, _eventProperties) {
    // no-op
    }
}
exports.WalletLinkAnalytics = WalletLinkAnalytics;

},{}],"fB5bm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EthereumChain = void 0;
var EthereumChain;
(function(EthereumChain1) {
    // mainnets
    EthereumChain1[EthereumChain1["ETHEREUM_MAINNET"] = 1] = "ETHEREUM_MAINNET";
    EthereumChain1[EthereumChain1["OPTIMISM_MAINNET"] = 10] = "OPTIMISM_MAINNET";
    EthereumChain1[EthereumChain1["POLYGON_MAINNET"] = 137] = "POLYGON_MAINNET";
    EthereumChain1[EthereumChain1["ETHEREUM_CLASSIC_MAINNET"] = 61] = "ETHEREUM_CLASSIC_MAINNET";
    EthereumChain1[EthereumChain1["BSC_MAINNET"] = 56] = "BSC_MAINNET";
    EthereumChain1[EthereumChain1["FANTOM_MAINNET"] = 250] = "FANTOM_MAINNET";
    EthereumChain1[EthereumChain1["ARBITRUM_MAINNET"] = 42161] = "ARBITRUM_MAINNET";
    EthereumChain1[EthereumChain1["XDAI_MAINNET"] = 100] = "XDAI_MAINNET";
    EthereumChain1[EthereumChain1["AVALANCHE_MAINNET"] = 43114] = "AVALANCHE_MAINNET";
    // testnets
    EthereumChain1[EthereumChain1["ROPSTEN"] = 3] = "ROPSTEN";
    EthereumChain1[EthereumChain1["RINKEBY"] = 4] = "RINKEBY";
    EthereumChain1[EthereumChain1["GOERLI"] = 5] = "GOERLI";
    EthereumChain1[EthereumChain1["KOVAN"] = 42] = "KOVAN";
    EthereumChain1[EthereumChain1["OPTIMISM_KOVAN"] = 69] = "OPTIMISM_KOVAN";
    EthereumChain1[EthereumChain1["POLYGON_TESTNET"] = 80001] = "POLYGON_TESTNET";
    EthereumChain1[EthereumChain1["BSC_TESTNET"] = 97] = "BSC_TESTNET";
    EthereumChain1[EthereumChain1["FANTOM_TESTNET"] = 4002] = "FANTOM_TESTNET";
    EthereumChain1[EthereumChain1["ARBITRUM_TESTNET"] = 421611] = "ARBITRUM_TESTNET";
    EthereumChain1[EthereumChain1["AVALANCHE_FUJI"] = 43113] = "AVALANCHE_FUJI";
})(EthereumChain = exports.EthereumChain || (exports.EthereumChain = {}));
(function(EthereumChain2) {
    function rpcUrl(thiz) {
        switch(thiz){
            case EthereumChain2.ETHEREUM_MAINNET:
                return "https://mainnet-infura.wallet.coinbase.com";
            case EthereumChain2.ROPSTEN:
                return "https://ropsten-infura.wallet.coinbase.com";
            case EthereumChain2.RINKEBY:
                return "https://rinkeby-infura.wallet.coinbase.com";
            case EthereumChain2.KOVAN:
                return "https://kovan-infura.wallet.coinbase.com";
            case EthereumChain2.GOERLI:
                return "https://goerli-node.wallet.coinbase.com";
            case EthereumChain2.OPTIMISM_KOVAN:
                return "https://optimism-node.wallet.coinbase.com";
            case EthereumChain2.OPTIMISM_MAINNET:
                return "https://optimism-mainnet.wallet.coinbase.com";
            case EthereumChain2.POLYGON_MAINNET:
                return "https://polygon-mainnet-infura.wallet.coinbase.com";
            case EthereumChain2.POLYGON_TESTNET:
                return "https://polygon-mumbai-infura.wallet.coinbase.com";
            case EthereumChain2.BSC_MAINNET:
                return "https://bsc-dataseed.binance.org";
            case EthereumChain2.BSC_TESTNET:
                return "https://data-seed-prebsc-1-s1.binance.org:8545";
            case EthereumChain2.FANTOM_MAINNET:
                return "https://rpcapi.fantom.network";
            case EthereumChain2.FANTOM_TESTNET:
                return "https://rpc.testnet.fantom.network";
            case EthereumChain2.ARBITRUM_MAINNET:
                return "https://l2-mainnet.wallet.coinbase.com?targetName=arbitrum";
            case EthereumChain2.ARBITRUM_TESTNET:
                return "https://rinkeby.arbitrum.io/rpc";
            case EthereumChain2.XDAI_MAINNET:
                return "https://rpc.xdaichain.com";
            case EthereumChain2.AVALANCHE_MAINNET:
                return "https://api.avax.network/ext/bc/C/rpc";
            case EthereumChain2.AVALANCHE_FUJI:
                return "https://api.avax-test.network/ext/bc/C/rpc";
            default:
                return undefined;
        }
    }
    EthereumChain2.rpcUrl = rpcUrl;
    function fromChainId(chainId) {
        switch(Number(chainId)){
            // mainnets
            case EthereumChain2.ETHEREUM_MAINNET.valueOf():
                return EthereumChain2.ETHEREUM_MAINNET;
            case EthereumChain2.OPTIMISM_MAINNET.valueOf():
                return EthereumChain2.OPTIMISM_MAINNET;
            case EthereumChain2.POLYGON_MAINNET.valueOf():
                return EthereumChain2.POLYGON_MAINNET;
            case EthereumChain2.ETHEREUM_CLASSIC_MAINNET.valueOf():
                return EthereumChain2.ETHEREUM_CLASSIC_MAINNET;
            case EthereumChain2.BSC_MAINNET.valueOf():
                return EthereumChain2.BSC_MAINNET;
            case EthereumChain2.FANTOM_MAINNET.valueOf():
                return EthereumChain2.FANTOM_MAINNET;
            case EthereumChain2.ARBITRUM_MAINNET.valueOf():
                return EthereumChain2.ARBITRUM_MAINNET;
            case EthereumChain2.AVALANCHE_MAINNET.valueOf():
                return EthereumChain2.AVALANCHE_MAINNET;
            case EthereumChain2.XDAI_MAINNET.valueOf():
                return EthereumChain2.XDAI_MAINNET;
            // testnets
            case EthereumChain2.ROPSTEN.valueOf():
                return EthereumChain2.ROPSTEN;
            case EthereumChain2.RINKEBY.valueOf():
                return EthereumChain2.RINKEBY;
            case EthereumChain2.GOERLI.valueOf():
                return EthereumChain2.GOERLI;
            case EthereumChain2.KOVAN.valueOf():
                return EthereumChain2.KOVAN;
            case EthereumChain2.OPTIMISM_KOVAN.valueOf():
                return EthereumChain2.OPTIMISM_KOVAN;
            case EthereumChain2.POLYGON_TESTNET.valueOf():
                return EthereumChain2.POLYGON_TESTNET;
            case EthereumChain2.BSC_TESTNET.valueOf():
                return EthereumChain2.BSC_TESTNET;
            case EthereumChain2.FANTOM_TESTNET.valueOf():
                return EthereumChain2.FANTOM_TESTNET;
            case EthereumChain2.ARBITRUM_TESTNET.valueOf():
                return EthereumChain2.ARBITRUM_TESTNET;
            case EthereumChain2.AVALANCHE_FUJI.valueOf():
                return EthereumChain2.AVALANCHE_FUJI;
            default:
                return undefined;
        }
    }
    EthereumChain2.fromChainId = fromChainId;
})(EthereumChain = exports.EthereumChain || (exports.EthereumChain = {}));

},{}],"dXFr7":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./events"), exports);
__exportStar(require("./WalletLinkAnalyticsAbstract"), exports);

},{"./events":"6N42a","./WalletLinkAnalyticsAbstract":"4ustk"}],"6N42a":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EVENTS = void 0;
exports.EVENTS = {
    REQUEST_CHILD_ETHEREUM_ACCOUNTS_START: "walletlink_sdk.request_child_ethereum_accounts.start",
    REQUEST_CHILD_ETHEREUM_ACCOUNTS_RESPONSE: "walletlink_sdk.request_child_ethereum_accounts.response",
    STARTED_CONNECTING: "walletlink_sdk.started.connecting",
    CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
    DISCONNECTED: "walletlink_sdk.disconnected",
    METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
    LINKED: "walletlink_sdk.linked",
    FAILURE: "walletlink_sdk.generic_failure",
    SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
    ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
    SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
    UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
    GENERAL_ERROR: "walletlink_sdk.general_error"
};

},{}],"4ustk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WalletLinkAnalyticsAbstract = void 0;
/**
 * An abstract class used to send events to track metrics / analytics
 */ class WalletLinkAnalyticsAbstract {
}
exports.WalletLinkAnalyticsAbstract = WalletLinkAnalyticsAbstract;

},{}],"bbUb9":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Session = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const util_1 = require("../util");
const js_sha256_1 = require("js-sha256");
const STORAGE_KEY_SESSION_ID = "session:id";
const STORAGE_KEY_SESSION_SECRET = "session:secret";
const STORAGE_KEY_SESSION_LINKED = "session:linked";
class Session {
    constructor(storage, id, secret, linked){
        this._storage = storage;
        this._id = id || (0, util_1.randomBytesHex)(16);
        this._secret = secret || (0, util_1.randomBytesHex)(32);
        const hash = js_sha256_1.sha256.create();
        hash.update(`${this._id}, ${this._secret} WalletLink`);
        this._key = hash.hex();
        this._linked = !!linked;
    }
    static load(storage) {
        const id = storage.getItem(STORAGE_KEY_SESSION_ID);
        const linked = storage.getItem(STORAGE_KEY_SESSION_LINKED);
        const secret = storage.getItem(STORAGE_KEY_SESSION_SECRET);
        if (id && secret) return new Session(storage, id, secret, linked === "1");
        return null;
    }
    static clear(storage) {
        storage.removeItem(STORAGE_KEY_SESSION_SECRET);
        storage.removeItem(STORAGE_KEY_SESSION_ID);
        storage.removeItem(STORAGE_KEY_SESSION_LINKED);
    }
    static get persistedSessionIdChange$() {
        return (0, rxjs_1.fromEvent)(window, "storage").pipe((0, operators_1.filter)((evt)=>evt.key === STORAGE_KEY_SESSION_ID
        ), (0, operators_1.map)((evt)=>({
                oldValue: evt.oldValue || null,
                newValue: evt.newValue || null
            })
        ));
    }
    /**
     * Takes in a session ID and returns the sha256 hash of it.
     * @param sessionId session ID
     */ static hash(sessionId) {
        const hash = js_sha256_1.sha256.create();
        return hash.update(sessionId).hex();
    }
    get id() {
        return this._id;
    }
    get secret() {
        return this._secret;
    }
    get key() {
        return this._key;
    }
    get linked() {
        return this._linked;
    }
    set linked(val) {
        this._linked = val;
        this.persistLinked();
    }
    save() {
        this._storage.setItem(STORAGE_KEY_SESSION_ID, this._id);
        this._storage.setItem(STORAGE_KEY_SESSION_SECRET, this._secret);
        this.persistLinked();
        return this;
    }
    persistLinked() {
        this._storage.setItem(STORAGE_KEY_SESSION_LINKED, this._linked ? "1" : "0");
    }
}
exports.Session = Session;

},{"rxjs":"eNCF7","rxjs/operators":"hZ5Xz","../util":"8WKyV","js-sha256":"ahVaM"}],"eNCF7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "Observable", ()=>_observable.Observable
);
parcelHelpers.export(exports, "ConnectableObservable", ()=>_connectableObservable.ConnectableObservable
);
parcelHelpers.export(exports, "GroupedObservable", ()=>_groupBy.GroupedObservable
);
parcelHelpers.export(exports, "observable", ()=>_observable1.observable
);
parcelHelpers.export(exports, "Subject", ()=>_subject.Subject
);
parcelHelpers.export(exports, "BehaviorSubject", ()=>_behaviorSubject.BehaviorSubject
);
parcelHelpers.export(exports, "ReplaySubject", ()=>_replaySubject.ReplaySubject
);
parcelHelpers.export(exports, "AsyncSubject", ()=>_asyncSubject.AsyncSubject
);
parcelHelpers.export(exports, "asap", ()=>_asap.asap
);
parcelHelpers.export(exports, "asapScheduler", ()=>_asap.asapScheduler
);
parcelHelpers.export(exports, "async", ()=>_async.async
);
parcelHelpers.export(exports, "asyncScheduler", ()=>_async.asyncScheduler
);
parcelHelpers.export(exports, "queue", ()=>_queue.queue
);
parcelHelpers.export(exports, "queueScheduler", ()=>_queue.queueScheduler
);
parcelHelpers.export(exports, "animationFrame", ()=>_animationFrame.animationFrame
);
parcelHelpers.export(exports, "animationFrameScheduler", ()=>_animationFrame.animationFrameScheduler
);
parcelHelpers.export(exports, "VirtualTimeScheduler", ()=>_virtualTimeScheduler.VirtualTimeScheduler
);
parcelHelpers.export(exports, "VirtualAction", ()=>_virtualTimeScheduler.VirtualAction
);
parcelHelpers.export(exports, "Scheduler", ()=>_scheduler.Scheduler
);
parcelHelpers.export(exports, "Subscription", ()=>_subscription.Subscription
);
parcelHelpers.export(exports, "Subscriber", ()=>_subscriber.Subscriber
);
parcelHelpers.export(exports, "Notification", ()=>_notification.Notification
);
parcelHelpers.export(exports, "NotificationKind", ()=>_notification.NotificationKind
);
parcelHelpers.export(exports, "pipe", ()=>_pipe.pipe
);
parcelHelpers.export(exports, "noop", ()=>_noop.noop
);
parcelHelpers.export(exports, "identity", ()=>_identity.identity
);
parcelHelpers.export(exports, "isObservable", ()=>_isObservable.isObservable
);
parcelHelpers.export(exports, "ArgumentOutOfRangeError", ()=>_argumentOutOfRangeError.ArgumentOutOfRangeError
);
parcelHelpers.export(exports, "EmptyError", ()=>_emptyError.EmptyError
);
parcelHelpers.export(exports, "ObjectUnsubscribedError", ()=>_objectUnsubscribedError.ObjectUnsubscribedError
);
parcelHelpers.export(exports, "UnsubscriptionError", ()=>_unsubscriptionError.UnsubscriptionError
);
parcelHelpers.export(exports, "TimeoutError", ()=>_timeoutError.TimeoutError
);
parcelHelpers.export(exports, "bindCallback", ()=>_bindCallback.bindCallback
);
parcelHelpers.export(exports, "bindNodeCallback", ()=>_bindNodeCallback.bindNodeCallback
);
parcelHelpers.export(exports, "combineLatest", ()=>_combineLatest.combineLatest
);
parcelHelpers.export(exports, "concat", ()=>_concat.concat
);
parcelHelpers.export(exports, "defer", ()=>_defer.defer
);
parcelHelpers.export(exports, "empty", ()=>_empty.empty
);
parcelHelpers.export(exports, "forkJoin", ()=>_forkJoin.forkJoin
);
parcelHelpers.export(exports, "from", ()=>_from.from
);
parcelHelpers.export(exports, "fromEvent", ()=>_fromEvent.fromEvent
);
parcelHelpers.export(exports, "fromEventPattern", ()=>_fromEventPattern.fromEventPattern
);
parcelHelpers.export(exports, "generate", ()=>_generate.generate
);
parcelHelpers.export(exports, "iif", ()=>_iif.iif
);
parcelHelpers.export(exports, "interval", ()=>_interval.interval
);
parcelHelpers.export(exports, "merge", ()=>_merge.merge
);
parcelHelpers.export(exports, "never", ()=>_never.never
);
parcelHelpers.export(exports, "of", ()=>_of.of
);
parcelHelpers.export(exports, "onErrorResumeNext", ()=>_onErrorResumeNext.onErrorResumeNext
);
parcelHelpers.export(exports, "pairs", ()=>_pairs.pairs
);
parcelHelpers.export(exports, "partition", ()=>_partition.partition
);
parcelHelpers.export(exports, "race", ()=>_race.race
);
parcelHelpers.export(exports, "range", ()=>_range.range
);
parcelHelpers.export(exports, "throwError", ()=>_throwError.throwError
);
parcelHelpers.export(exports, "timer", ()=>_timer.timer
);
parcelHelpers.export(exports, "using", ()=>_using.using
);
parcelHelpers.export(exports, "zip", ()=>_zip.zip
);
parcelHelpers.export(exports, "scheduled", ()=>_scheduled.scheduled
);
parcelHelpers.export(exports, "EMPTY", ()=>_empty.EMPTY
);
parcelHelpers.export(exports, "NEVER", ()=>_never.NEVER
);
parcelHelpers.export(exports, "config", ()=>_config.config
);
var _observable = require("./internal/Observable");
var _connectableObservable = require("./internal/observable/ConnectableObservable");
var _groupBy = require("./internal/operators/groupBy");
var _observable1 = require("./internal/symbol/observable");
var _subject = require("./internal/Subject");
var _behaviorSubject = require("./internal/BehaviorSubject");
var _replaySubject = require("./internal/ReplaySubject");
var _asyncSubject = require("./internal/AsyncSubject");
var _asap = require("./internal/scheduler/asap");
var _async = require("./internal/scheduler/async");
var _queue = require("./internal/scheduler/queue");
var _animationFrame = require("./internal/scheduler/animationFrame");
var _virtualTimeScheduler = require("./internal/scheduler/VirtualTimeScheduler");
var _scheduler = require("./internal/Scheduler");
var _subscription = require("./internal/Subscription");
var _subscriber = require("./internal/Subscriber");
var _notification = require("./internal/Notification");
var _pipe = require("./internal/util/pipe");
var _noop = require("./internal/util/noop");
var _identity = require("./internal/util/identity");
var _isObservable = require("./internal/util/isObservable");
var _argumentOutOfRangeError = require("./internal/util/ArgumentOutOfRangeError");
var _emptyError = require("./internal/util/EmptyError");
var _objectUnsubscribedError = require("./internal/util/ObjectUnsubscribedError");
var _unsubscriptionError = require("./internal/util/UnsubscriptionError");
var _timeoutError = require("./internal/util/TimeoutError");
var _bindCallback = require("./internal/observable/bindCallback");
var _bindNodeCallback = require("./internal/observable/bindNodeCallback");
var _combineLatest = require("./internal/observable/combineLatest");
var _concat = require("./internal/observable/concat");
var _defer = require("./internal/observable/defer");
var _empty = require("./internal/observable/empty");
var _forkJoin = require("./internal/observable/forkJoin");
var _from = require("./internal/observable/from");
var _fromEvent = require("./internal/observable/fromEvent");
var _fromEventPattern = require("./internal/observable/fromEventPattern");
var _generate = require("./internal/observable/generate");
var _iif = require("./internal/observable/iif");
var _interval = require("./internal/observable/interval");
var _merge = require("./internal/observable/merge");
var _never = require("./internal/observable/never");
var _of = require("./internal/observable/of");
var _onErrorResumeNext = require("./internal/observable/onErrorResumeNext");
var _pairs = require("./internal/observable/pairs");
var _partition = require("./internal/observable/partition");
var _race = require("./internal/observable/race");
var _range = require("./internal/observable/range");
var _throwError = require("./internal/observable/throwError");
var _timer = require("./internal/observable/timer");
var _using = require("./internal/observable/using");
var _zip = require("./internal/observable/zip");
var _scheduled = require("./internal/scheduled/scheduled");
var _config = require("./internal/config");

},{"./internal/Observable":"1asgn","./internal/observable/ConnectableObservable":"hntQC","./internal/operators/groupBy":"bCSbE","./internal/symbol/observable":"8PNwn","./internal/Subject":"l0BZI","./internal/BehaviorSubject":"jcpl4","./internal/ReplaySubject":"bSMcd","./internal/AsyncSubject":"bxydg","./internal/scheduler/asap":"7sZZh","./internal/scheduler/async":"04lHJ","./internal/scheduler/queue":"TSoO9","./internal/scheduler/animationFrame":"bfCCp","./internal/scheduler/VirtualTimeScheduler":"b7Iyp","./internal/Scheduler":"bPLJk","./internal/Subscription":"7CEw9","./internal/Subscriber":"bwPOT","./internal/Notification":"6LPyO","./internal/util/pipe":"8dpHw","./internal/util/noop":"cB2ox","./internal/util/identity":"2wO6M","./internal/util/isObservable":"8iLIa","./internal/util/ArgumentOutOfRangeError":"eVyky","./internal/util/EmptyError":"8nE0j","./internal/util/ObjectUnsubscribedError":"atyud","./internal/util/UnsubscriptionError":"43t7f","./internal/util/TimeoutError":"f9mmi","./internal/observable/bindCallback":"jFIOz","./internal/observable/bindNodeCallback":"178VF","./internal/observable/combineLatest":"hrt6M","./internal/observable/concat":"4CcsK","./internal/observable/defer":"iYBVz","./internal/observable/empty":"d0sAg","./internal/observable/forkJoin":"bT0Lu","./internal/observable/from":"iYTWI","./internal/observable/fromEvent":"5kZoa","./internal/observable/fromEventPattern":"d5bLz","./internal/observable/generate":"cZiPw","./internal/observable/iif":"ciOCA","./internal/observable/interval":"8kp6s","./internal/observable/merge":"3kGhP","./internal/observable/never":"fpMWE","./internal/observable/of":"knjPI","./internal/observable/onErrorResumeNext":"3XoV6","./internal/observable/pairs":"3GL3V","./internal/observable/partition":"3ya8q","./internal/observable/race":"7v9a2","./internal/observable/range":"50mSF","./internal/observable/throwError":"figu7","./internal/observable/timer":"yD2Dx","./internal/observable/using":"7bCt7","./internal/observable/zip":"cw7ce","./internal/scheduled/scheduled":"jHmGq","./internal/config":"799TV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1asgn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Observable", ()=>Observable
);
/** PURE_IMPORTS_START _util_canReportError,_util_toSubscriber,_symbol_observable,_util_pipe,_config PURE_IMPORTS_END */ var _canReportError = require("./util/canReportError");
var _toSubscriber = require("./util/toSubscriber");
var _observable = require("./symbol/observable");
var _pipe = require("./util/pipe");
var _config = require("./config");
var Observable = /*@__PURE__*/ function() {
    function Observable1(subscribe) {
        this._isScalar = false;
        if (subscribe) this._subscribe = subscribe;
    }
    Observable1.prototype.lift = function(operator) {
        var observable = new Observable1();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable1.prototype.subscribe = function(observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = _toSubscriber.toSubscriber(observerOrNext, error, complete);
        if (operator) sink.add(operator.call(sink, this.source));
        else sink.add(this.source || _config.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
        if (_config.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) throw sink.syncErrorValue;
            }
        }
        return sink;
    };
    Observable1.prototype._trySubscribe = function(sink) {
        try {
            return this._subscribe(sink);
        } catch (err) {
            if (_config.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (_canReportError.canReportError(sink)) sink.error(err);
            else console.warn(err);
        }
    };
    Observable1.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function(value) {
                try {
                    next(value);
                } catch (err) {
                    reject(err);
                    if (subscription) subscription.unsubscribe();
                }
            }, reject, resolve);
        });
    };
    Observable1.prototype._subscribe = function(subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable1.prototype[_observable.observable] = function() {
        return this;
    };
    Observable1.prototype.pipe = function() {
        var operations = [];
        for(var _i = 0; _i < arguments.length; _i++)operations[_i] = arguments[_i];
        if (operations.length === 0) return this;
        return _pipe.pipeFromArray(operations)(this);
    };
    Observable1.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var value;
            _this.subscribe(function(x) {
                return value = x;
            }, function(err) {
                return reject(err);
            }, function() {
                return resolve(value);
            });
        });
    };
    Observable1.create = function(subscribe) {
        return new Observable1(subscribe);
    };
    return Observable1;
}();
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) promiseCtor = _config.config.Promise || Promise;
    if (!promiseCtor) throw new Error('no Promise impl found');
    return promiseCtor;
}

},{"./util/canReportError":"b6CwD","./util/toSubscriber":"l8Mkt","./symbol/observable":"8PNwn","./util/pipe":"8dpHw","./config":"799TV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b6CwD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canReportError", ()=>canReportError
);
/** PURE_IMPORTS_START _Subscriber PURE_IMPORTS_END */ var _subscriber = require("../Subscriber");
function canReportError(observer) {
    while(observer){
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) return false;
        else if (destination && destination instanceof _subscriber.Subscriber) observer = destination;
        else observer = null;
    }
    return true;
}

},{"../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bwPOT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Subscriber", ()=>Subscriber
);
parcelHelpers.export(exports, "SafeSubscriber", ()=>SafeSubscriber
);
/** PURE_IMPORTS_START tslib,_util_isFunction,_Observer,_Subscription,_internal_symbol_rxSubscriber,_config,_util_hostReportError PURE_IMPORTS_END */ var _tslib = require("tslib");
var _isFunction = require("./util/isFunction");
var _observer = require("./Observer");
var _subscription = require("./Subscription");
var _rxSubscriber = require("../internal/symbol/rxSubscriber");
var _config = require("./config");
var _hostReportError = require("./util/hostReportError");
var Subscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(Subscriber1, _super);
    function Subscriber1(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch(arguments.length){
            case 0:
                _this.destination = _observer.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = _observer.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber1) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    } else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber1.prototype[_rxSubscriber.rxSubscriber] = function() {
        return this;
    };
    Subscriber1.create = function(next, error, complete) {
        var subscriber = new Subscriber1(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber1.prototype.next = function(value) {
        if (!this.isStopped) this._next(value);
    };
    Subscriber1.prototype.error = function(err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber1.prototype.complete = function() {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber1.prototype.unsubscribe = function() {
        if (this.closed) return;
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber1.prototype._next = function(value) {
        this.destination.next(value);
    };
    Subscriber1.prototype._error = function(err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber1.prototype._complete = function() {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber1.prototype._unsubscribeAndRecycle = function() {
        var _parentOrParents = this._parentOrParents;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    };
    return Subscriber1;
}(_subscription.Subscription);
var SafeSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SafeSubscriber1, _super);
    function SafeSubscriber1(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (_isFunction.isFunction(observerOrNext)) next = observerOrNext;
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== _observer.empty) {
                context = Object.create(observerOrNext);
                if (_isFunction.isFunction(context.unsubscribe)) _this.add(context.unsubscribe.bind(context));
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber1.prototype.next = function(value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!_config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) this.__tryOrUnsub(this._next, value);
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) this.unsubscribe();
        }
    };
    SafeSubscriber1.prototype.error = function(err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = _config.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                } else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            } else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) throw err;
                _hostReportError.hostReportError(err);
            } else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                } else _hostReportError.hostReportError(err);
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber1.prototype.complete = function() {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function() {
                    return _this._complete.call(_this._context);
                };
                if (!_config.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                } else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            } else this.unsubscribe();
        }
    };
    SafeSubscriber1.prototype.__tryOrUnsub = function(fn, value) {
        try {
            fn.call(this._context, value);
        } catch (err) {
            this.unsubscribe();
            if (_config.config.useDeprecatedSynchronousErrorHandling) throw err;
            else _hostReportError.hostReportError(err);
        }
    };
    SafeSubscriber1.prototype.__tryOrSetError = function(parent, fn, value) {
        if (!_config.config.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
        try {
            fn.call(this._context, value);
        } catch (err) {
            if (_config.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            } else {
                _hostReportError.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber1.prototype._unsubscribe = function() {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber1;
}(Subscriber);

},{"tslib":"lRdW5","./util/isFunction":"jxvPW","./Observer":"hbZY4","./Subscription":"7CEw9","../internal/symbol/rxSubscriber":"d26AH","./config":"799TV","./util/hostReportError":"bmSNp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRdW5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends
);
parcelHelpers.export(exports, "__assign", ()=>__assign
);
parcelHelpers.export(exports, "__rest", ()=>__rest
);
parcelHelpers.export(exports, "__decorate", ()=>__decorate
);
parcelHelpers.export(exports, "__param", ()=>__param
);
parcelHelpers.export(exports, "__metadata", ()=>__metadata
);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter
);
parcelHelpers.export(exports, "__generator", ()=>__generator
);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding
);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar
);
parcelHelpers.export(exports, "__values", ()=>__values
);
parcelHelpers.export(exports, "__read", ()=>__read
);
parcelHelpers.export(exports, "__spread", ()=>__spread
);
parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays
);
parcelHelpers.export(exports, "__await", ()=>__await
);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator
);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator
);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues
);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject
);
parcelHelpers.export(exports, "__importStar", ()=>__importStar
);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault
);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet
);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet
);
/*! *****************************************************************************
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
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}
function __exportStar(m, exports) {
    for(var p in m)if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    }
    result.default = mod;
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to get private field on non-instance");
    return privateMap.get(receiver);
}
function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to set private field on non-instance");
    privateMap.set(receiver, value);
    return value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jxvPW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "isFunction", ()=>isFunction
);
function isFunction(x) {
    return typeof x === 'function';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbZY4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "empty", ()=>empty
);
/** PURE_IMPORTS_START _config,_util_hostReportError PURE_IMPORTS_END */ var _config = require("./config");
var _hostReportError = require("./util/hostReportError");
var empty = {
    closed: true,
    next: function(value) {},
    error: function(err) {
        if (_config.config.useDeprecatedSynchronousErrorHandling) throw err;
        else _hostReportError.hostReportError(err);
    },
    complete: function() {}
};

},{"./config":"799TV","./util/hostReportError":"bmSNp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"799TV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config
);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var _enable_super_gross_mode_that_will_cause_bad_things = false;
var config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling (value){
        if (value) {
            var error = /*@__PURE__*/ new Error();
            /*@__PURE__*/ console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) /*@__PURE__*/ console.log('RxJS: Back to a better error behavior. Thank you. <3');
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling () {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bmSNp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "hostReportError", ()=>hostReportError
);
function hostReportError(err) {
    setTimeout(function() {
        throw err;
    }, 0);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7CEw9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Subscription", ()=>Subscription
);
/** PURE_IMPORTS_START _util_isArray,_util_isObject,_util_isFunction,_util_UnsubscriptionError PURE_IMPORTS_END */ var _isArray = require("./util/isArray");
var _isObject = require("./util/isObject");
var _isFunction = require("./util/isFunction");
var _unsubscriptionError = require("./util/UnsubscriptionError");
var Subscription = /*@__PURE__*/ function() {
    function Subscription1(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._ctorUnsubscribe = true;
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription1.prototype.unsubscribe = function() {
        var errors;
        if (this.closed) return;
        var _a = this, _parentOrParents = _a._parentOrParents, _ctorUnsubscribe = _a._ctorUnsubscribe, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription1) _parentOrParents.remove(this);
        else if (_parentOrParents !== null) for(var index = 0; index < _parentOrParents.length; ++index){
            var parent_1 = _parentOrParents[index];
            parent_1.remove(this);
        }
        if (_isFunction.isFunction(_unsubscribe)) {
            if (_ctorUnsubscribe) this._unsubscribe = undefined;
            try {
                _unsubscribe.call(this);
            } catch (e) {
                errors = e instanceof _unsubscriptionError.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [
                    e
                ];
            }
        }
        if (_isArray.isArray(_subscriptions)) {
            var index = -1;
            var len = _subscriptions.length;
            while(++index < len){
                var sub = _subscriptions[index];
                if (_isObject.isObject(sub)) try {
                    sub.unsubscribe();
                } catch (e) {
                    errors = errors || [];
                    if (e instanceof _unsubscriptionError.UnsubscriptionError) errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                    else errors.push(e);
                }
            }
        }
        if (errors) throw new _unsubscriptionError.UnsubscriptionError(errors);
    };
    Subscription1.prototype.add = function(teardown) {
        var subscription = teardown;
        if (!teardown) return Subscription1.EMPTY;
        switch(typeof teardown){
            case 'function':
                subscription = new Subscription1(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') return subscription;
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                } else if (!(subscription instanceof Subscription1)) {
                    var tmp = subscription;
                    subscription = new Subscription1();
                    subscription._subscriptions = [
                        tmp
                    ];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var _parentOrParents = subscription._parentOrParents;
        if (_parentOrParents === null) subscription._parentOrParents = this;
        else if (_parentOrParents instanceof Subscription1) {
            if (_parentOrParents === this) return subscription;
            subscription._parentOrParents = [
                _parentOrParents,
                this
            ];
        } else if (_parentOrParents.indexOf(this) === -1) _parentOrParents.push(this);
        else return subscription;
        var subscriptions = this._subscriptions;
        if (subscriptions === null) this._subscriptions = [
            subscription
        ];
        else subscriptions.push(subscription);
        return subscription;
    };
    Subscription1.prototype.remove = function(subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) subscriptions.splice(subscriptionIndex, 1);
        }
    };
    Subscription1.EMPTY = function(empty) {
        empty.closed = true;
        return empty;
    }(new Subscription1());
    return Subscription1;
}();
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function(errs, err) {
        return errs.concat(err instanceof _unsubscriptionError.UnsubscriptionError ? err.errors : err);
    }, []);
}

},{"./util/isArray":"7twlV","./util/isObject":"dwhYy","./util/isFunction":"jxvPW","./util/UnsubscriptionError":"43t7f","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7twlV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArray", ()=>isArray
);
var isArray = /*@__PURE__*/ function() {
    return Array.isArray || function(x) {
        return x && typeof x.length === 'number';
    };
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dwhYy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "isObject", ()=>isObject
);
function isObject(x) {
    return x !== null && typeof x === 'object';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"43t7f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "UnsubscriptionError", ()=>UnsubscriptionError
);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var UnsubscriptionErrorImpl = /*@__PURE__*/ function() {
    function UnsubscriptionErrorImpl1(errors) {
        Error.call(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
            return i + 1 + ") " + err.toString();
        }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl1.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return UnsubscriptionErrorImpl1;
}();
var UnsubscriptionError = UnsubscriptionErrorImpl;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d26AH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rxSubscriber", ()=>rxSubscriber
);
parcelHelpers.export(exports, "$$rxSubscriber", ()=>$$rxSubscriber
);
var rxSubscriber = /*@__PURE__*/ function() {
    return typeof Symbol === 'function' ? /*@__PURE__*/ Symbol('rxSubscriber') : '@@rxSubscriber_' + /*@__PURE__*/ Math.random();
}();
var $$rxSubscriber = rxSubscriber;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l8Mkt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toSubscriber", ()=>toSubscriber
);
/** PURE_IMPORTS_START _Subscriber,_symbol_rxSubscriber,_Observer PURE_IMPORTS_END */ var _subscriber = require("../Subscriber");
var _rxSubscriber = require("../symbol/rxSubscriber");
var _observer = require("../Observer");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof _subscriber.Subscriber) return nextOrObserver;
        if (nextOrObserver[_rxSubscriber.rxSubscriber]) return nextOrObserver[_rxSubscriber.rxSubscriber]();
    }
    if (!nextOrObserver && !error && !complete) return new _subscriber.Subscriber(_observer.empty);
    return new _subscriber.Subscriber(nextOrObserver, error, complete);
}

},{"../Subscriber":"bwPOT","../symbol/rxSubscriber":"d26AH","../Observer":"hbZY4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8PNwn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observable", ()=>observable
);
var observable = /*@__PURE__*/ function() {
    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8dpHw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pipe", ()=>pipe
);
parcelHelpers.export(exports, "pipeFromArray", ()=>pipeFromArray
);
/** PURE_IMPORTS_START _identity PURE_IMPORTS_END */ var _identity = require("./identity");
function pipe() {
    var fns = [];
    for(var _i = 0; _i < arguments.length; _i++)fns[_i] = arguments[_i];
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) return _identity.identity;
    if (fns.length === 1) return fns[0];
    return function piped(input) {
        return fns.reduce(function(prev, fn) {
            return fn(prev);
        }, input);
    };
}

},{"./identity":"2wO6M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2wO6M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "identity", ()=>identity
);
function identity(x) {
    return x;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hntQC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConnectableObservable", ()=>ConnectableObservable
);
parcelHelpers.export(exports, "connectableObservableDescriptor", ()=>connectableObservableDescriptor
);
/** PURE_IMPORTS_START tslib,_Subject,_Observable,_Subscriber,_Subscription,_operators_refCount PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("../Subject");
var _observable = require("../Observable");
var _subscriber = require("../Subscriber");
var _subscription = require("../Subscription");
var _refCount = require("../operators/refCount");
var ConnectableObservable = /*@__PURE__*/ function(_super) {
    _tslib.__extends(ConnectableObservable1, _super);
    function ConnectableObservable1(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._refCount = 0;
        _this._isComplete = false;
        return _this;
    }
    ConnectableObservable1.prototype._subscribe = function(subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable1.prototype.getSubject = function() {
        var subject = this._subject;
        if (!subject || subject.isStopped) this._subject = this.subjectFactory();
        return this._subject;
    };
    ConnectableObservable1.prototype.connect = function() {
        var connection = this._connection;
        if (!connection) {
            this._isComplete = false;
            connection = this._connection = new _subscription.Subscription();
            connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));
            if (connection.closed) {
                this._connection = null;
                connection = _subscription.Subscription.EMPTY;
            }
        }
        return connection;
    };
    ConnectableObservable1.prototype.refCount = function() {
        return _refCount.refCount()(this);
    };
    return ConnectableObservable1;
}(_observable.Observable);
var connectableObservableDescriptor = /*@__PURE__*/ function() {
    var connectableProto = ConnectableObservable.prototype;
    return {
        operator: {
            value: null
        },
        _refCount: {
            value: 0,
            writable: true
        },
        _subject: {
            value: null,
            writable: true
        },
        _connection: {
            value: null,
            writable: true
        },
        _subscribe: {
            value: connectableProto._subscribe
        },
        _isComplete: {
            value: connectableProto._isComplete,
            writable: true
        },
        getSubject: {
            value: connectableProto.getSubject
        },
        connect: {
            value: connectableProto.connect
        },
        refCount: {
            value: connectableProto.refCount
        }
    };
}();
var ConnectableSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(ConnectableSubscriber1, _super);
    function ConnectableSubscriber1(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    ConnectableSubscriber1.prototype._error = function(err) {
        this._unsubscribe();
        _super.prototype._error.call(this, err);
    };
    ConnectableSubscriber1.prototype._complete = function() {
        this.connectable._isComplete = true;
        this._unsubscribe();
        _super.prototype._complete.call(this);
    };
    ConnectableSubscriber1.prototype._unsubscribe = function() {
        var connectable = this.connectable;
        if (connectable) {
            this.connectable = null;
            var connection = connectable._connection;
            connectable._refCount = 0;
            connectable._subject = null;
            connectable._connection = null;
            if (connection) connection.unsubscribe();
        }
    };
    return ConnectableSubscriber1;
}(_subject.SubjectSubscriber);
var RefCountOperator = /*@__PURE__*/ function() {
    function RefCountOperator1(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator1.prototype.call = function(subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) refCounter.connection = connectable.connect();
        return subscription;
    };
    return RefCountOperator1;
}();
var RefCountSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(RefCountSubscriber1, _super);
    function RefCountSubscriber1(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber1.prototype._unsubscribe = function() {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount = connectable._refCount;
        if (refCount <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount - 1;
        if (refCount > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) sharedConnection.unsubscribe();
    };
    return RefCountSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subject":"l0BZI","../Observable":"1asgn","../Subscriber":"bwPOT","../Subscription":"7CEw9","../operators/refCount":"1xbxl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l0BZI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubjectSubscriber", ()=>SubjectSubscriber
);
parcelHelpers.export(exports, "Subject", ()=>Subject
);
parcelHelpers.export(exports, "AnonymousSubject", ()=>AnonymousSubject
);
/** PURE_IMPORTS_START tslib,_Observable,_Subscriber,_Subscription,_util_ObjectUnsubscribedError,_SubjectSubscription,_internal_symbol_rxSubscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _observable = require("./Observable");
var _subscriber = require("./Subscriber");
var _subscription = require("./Subscription");
var _objectUnsubscribedError = require("./util/ObjectUnsubscribedError");
var _subjectSubscription = require("./SubjectSubscription");
var _rxSubscriber = require("../internal/symbol/rxSubscriber");
var SubjectSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SubjectSubscriber1, _super);
    function SubjectSubscriber1(destination) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        return _this;
    }
    return SubjectSubscriber1;
}(_subscriber.Subscriber);
var Subject = /*@__PURE__*/ function(_super) {
    _tslib.__extends(Subject1, _super);
    function Subject1() {
        var _this = _super.call(this) || this;
        _this.observers = [];
        _this.closed = false;
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject1.prototype[_rxSubscriber.rxSubscriber] = function() {
        return new SubjectSubscriber(this);
    };
    Subject1.prototype.lift = function(operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject1.prototype.next = function(value) {
        if (this.closed) throw new _objectUnsubscribedError.ObjectUnsubscribedError();
        if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();
            for(var i = 0; i < len; i++)copy[i].next(value);
        }
    };
    Subject1.prototype.error = function(err) {
        if (this.closed) throw new _objectUnsubscribedError.ObjectUnsubscribedError();
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for(var i = 0; i < len; i++)copy[i].error(err);
        this.observers.length = 0;
    };
    Subject1.prototype.complete = function() {
        if (this.closed) throw new _objectUnsubscribedError.ObjectUnsubscribedError();
        this.isStopped = true;
        var observers = this.observers;
        var len = observers.length;
        var copy = observers.slice();
        for(var i = 0; i < len; i++)copy[i].complete();
        this.observers.length = 0;
    };
    Subject1.prototype.unsubscribe = function() {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    };
    Subject1.prototype._trySubscribe = function(subscriber) {
        if (this.closed) throw new _objectUnsubscribedError.ObjectUnsubscribedError();
        else return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject1.prototype._subscribe = function(subscriber) {
        if (this.closed) throw new _objectUnsubscribedError.ObjectUnsubscribedError();
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return _subscription.Subscription.EMPTY;
        } else if (this.isStopped) {
            subscriber.complete();
            return _subscription.Subscription.EMPTY;
        } else {
            this.observers.push(subscriber);
            return new _subjectSubscription.SubjectSubscription(this, subscriber);
        }
    };
    Subject1.prototype.asObservable = function() {
        var observable = new _observable.Observable();
        observable.source = this;
        return observable;
    };
    Subject1.create = function(destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject1;
}(_observable.Observable);
var AnonymousSubject = /*@__PURE__*/ function(_super) {
    _tslib.__extends(AnonymousSubject1, _super);
    function AnonymousSubject1(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject1.prototype.next = function(value) {
        var destination = this.destination;
        if (destination && destination.next) destination.next(value);
    };
    AnonymousSubject1.prototype.error = function(err) {
        var destination = this.destination;
        if (destination && destination.error) this.destination.error(err);
    };
    AnonymousSubject1.prototype.complete = function() {
        var destination = this.destination;
        if (destination && destination.complete) this.destination.complete();
    };
    AnonymousSubject1.prototype._subscribe = function(subscriber) {
        var source = this.source;
        if (source) return this.source.subscribe(subscriber);
        else return _subscription.Subscription.EMPTY;
    };
    return AnonymousSubject1;
}(Subject);

},{"tslib":"lRdW5","./Observable":"1asgn","./Subscriber":"bwPOT","./Subscription":"7CEw9","./util/ObjectUnsubscribedError":"atyud","./SubjectSubscription":"dPfj1","../internal/symbol/rxSubscriber":"d26AH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"atyud":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ObjectUnsubscribedError", ()=>ObjectUnsubscribedError
);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var ObjectUnsubscribedErrorImpl = /*@__PURE__*/ function() {
    function ObjectUnsubscribedErrorImpl1() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl1.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl1;
}();
var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dPfj1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubjectSubscription", ()=>SubjectSubscription
);
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscription = require("./Subscription");
var SubjectSubscription = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SubjectSubscription1, _super);
    function SubjectSubscription1(subject, subscriber) {
        var _this = _super.call(this) || this;
        _this.subject = subject;
        _this.subscriber = subscriber;
        _this.closed = false;
        return _this;
    }
    SubjectSubscription1.prototype.unsubscribe = function() {
        if (this.closed) return;
        this.closed = true;
        var subject = this.subject;
        var observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) return;
        var subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) observers.splice(subscriberIndex, 1);
    };
    return SubjectSubscription1;
}(_subscription.Subscription);

},{"tslib":"lRdW5","./Subscription":"7CEw9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1xbxl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "refCount", ()=>refCount
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function refCount() {
    return function refCountOperatorFunction(source) {
        return source.lift(new RefCountOperator(source));
    };
}
var RefCountOperator = /*@__PURE__*/ function() {
    function RefCountOperator1(connectable) {
        this.connectable = connectable;
    }
    RefCountOperator1.prototype.call = function(subscriber, source) {
        var connectable = this.connectable;
        connectable._refCount++;
        var refCounter = new RefCountSubscriber(subscriber, connectable);
        var subscription = source.subscribe(refCounter);
        if (!refCounter.closed) refCounter.connection = connectable.connect();
        return subscription;
    };
    return RefCountOperator1;
}();
var RefCountSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(RefCountSubscriber1, _super);
    function RefCountSubscriber1(destination, connectable) {
        var _this = _super.call(this, destination) || this;
        _this.connectable = connectable;
        return _this;
    }
    RefCountSubscriber1.prototype._unsubscribe = function() {
        var connectable = this.connectable;
        if (!connectable) {
            this.connection = null;
            return;
        }
        this.connectable = null;
        var refCount1 = connectable._refCount;
        if (refCount1 <= 0) {
            this.connection = null;
            return;
        }
        connectable._refCount = refCount1 - 1;
        if (refCount1 > 1) {
            this.connection = null;
            return;
        }
        var connection = this.connection;
        var sharedConnection = connectable._connection;
        this.connection = null;
        if (sharedConnection && (!connection || sharedConnection === connection)) sharedConnection.unsubscribe();
    };
    return RefCountSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCSbE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "groupBy", ()=>groupBy
);
parcelHelpers.export(exports, "GroupedObservable", ()=>GroupedObservable
);
/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription,_Observable,_Subject PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _subscription = require("../Subscription");
var _observable = require("../Observable");
var _subject = require("../Subject");
function groupBy(keySelector, elementSelector, durationSelector, subjectSelector) {
    return function(source) {
        return source.lift(new GroupByOperator(keySelector, elementSelector, durationSelector, subjectSelector));
    };
}
var GroupByOperator = /*@__PURE__*/ function() {
    function GroupByOperator1(keySelector, elementSelector, durationSelector, subjectSelector) {
        this.keySelector = keySelector;
        this.elementSelector = elementSelector;
        this.durationSelector = durationSelector;
        this.subjectSelector = subjectSelector;
    }
    GroupByOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
    };
    return GroupByOperator1;
}();
var GroupBySubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(GroupBySubscriber1, _super);
    function GroupBySubscriber1(destination, keySelector, elementSelector, durationSelector, subjectSelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.elementSelector = elementSelector;
        _this.durationSelector = durationSelector;
        _this.subjectSelector = subjectSelector;
        _this.groups = null;
        _this.attemptedToUnsubscribe = false;
        _this.count = 0;
        return _this;
    }
    GroupBySubscriber1.prototype._next = function(value) {
        var key;
        try {
            key = this.keySelector(value);
        } catch (err) {
            this.error(err);
            return;
        }
        this._group(value, key);
    };
    GroupBySubscriber1.prototype._group = function(value, key) {
        var groups = this.groups;
        if (!groups) groups = this.groups = new Map();
        var group = groups.get(key);
        var element;
        if (this.elementSelector) try {
            element = this.elementSelector(value);
        } catch (err) {
            this.error(err);
        }
        else element = value;
        if (!group) {
            group = this.subjectSelector ? this.subjectSelector() : new _subject.Subject();
            groups.set(key, group);
            var groupedObservable = new GroupedObservable(key, group, this);
            this.destination.next(groupedObservable);
            if (this.durationSelector) {
                var duration = void 0;
                try {
                    duration = this.durationSelector(new GroupedObservable(key, group));
                } catch (err) {
                    this.error(err);
                    return;
                }
                this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
            }
        }
        if (!group.closed) group.next(element);
    };
    GroupBySubscriber1.prototype._error = function(err) {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function(group, key) {
                group.error(err);
            });
            groups.clear();
        }
        this.destination.error(err);
    };
    GroupBySubscriber1.prototype._complete = function() {
        var groups = this.groups;
        if (groups) {
            groups.forEach(function(group, key) {
                group.complete();
            });
            groups.clear();
        }
        this.destination.complete();
    };
    GroupBySubscriber1.prototype.removeGroup = function(key) {
        this.groups.delete(key);
    };
    GroupBySubscriber1.prototype.unsubscribe = function() {
        if (!this.closed) {
            this.attemptedToUnsubscribe = true;
            if (this.count === 0) _super.prototype.unsubscribe.call(this);
        }
    };
    return GroupBySubscriber1;
}(_subscriber.Subscriber);
var GroupDurationSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(GroupDurationSubscriber1, _super);
    function GroupDurationSubscriber1(key, group, parent) {
        var _this = _super.call(this, group) || this;
        _this.key = key;
        _this.group = group;
        _this.parent = parent;
        return _this;
    }
    GroupDurationSubscriber1.prototype._next = function(value) {
        this.complete();
    };
    GroupDurationSubscriber1.prototype._unsubscribe = function() {
        var _a = this, parent = _a.parent, key = _a.key;
        this.key = this.parent = null;
        if (parent) parent.removeGroup(key);
    };
    return GroupDurationSubscriber1;
}(_subscriber.Subscriber);
var GroupedObservable = /*@__PURE__*/ function(_super) {
    _tslib.__extends(GroupedObservable1, _super);
    function GroupedObservable1(key, groupSubject, refCountSubscription) {
        var _this = _super.call(this) || this;
        _this.key = key;
        _this.groupSubject = groupSubject;
        _this.refCountSubscription = refCountSubscription;
        return _this;
    }
    GroupedObservable1.prototype._subscribe = function(subscriber) {
        var subscription = new _subscription.Subscription();
        var _a = this, refCountSubscription = _a.refCountSubscription, groupSubject = _a.groupSubject;
        if (refCountSubscription && !refCountSubscription.closed) subscription.add(new InnerRefCountSubscription(refCountSubscription));
        subscription.add(groupSubject.subscribe(subscriber));
        return subscription;
    };
    return GroupedObservable1;
}(_observable.Observable);
var InnerRefCountSubscription = /*@__PURE__*/ function(_super) {
    _tslib.__extends(InnerRefCountSubscription1, _super);
    function InnerRefCountSubscription1(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        parent.count++;
        return _this;
    }
    InnerRefCountSubscription1.prototype.unsubscribe = function() {
        var parent = this.parent;
        if (!parent.closed && !this.closed) {
            _super.prototype.unsubscribe.call(this);
            parent.count -= 1;
            if (parent.count === 0 && parent.attemptedToUnsubscribe) parent.unsubscribe();
        }
    };
    return InnerRefCountSubscription1;
}(_subscription.Subscription);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","../Subscription":"7CEw9","../Observable":"1asgn","../Subject":"l0BZI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jcpl4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BehaviorSubject", ()=>BehaviorSubject
);
/** PURE_IMPORTS_START tslib,_Subject,_util_ObjectUnsubscribedError PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("./Subject");
var _objectUnsubscribedError = require("./util/ObjectUnsubscribedError");
var BehaviorSubject = /*@__PURE__*/ function(_super) {
    _tslib.__extends(BehaviorSubject1, _super);
    function BehaviorSubject1(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject1.prototype, "value", {
        get: function() {
            return this.getValue();
        },
        enumerable: true,
        configurable: true
    });
    BehaviorSubject1.prototype._subscribe = function(subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        if (subscription && !subscription.closed) subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject1.prototype.getValue = function() {
        if (this.hasError) throw this.thrownError;
        else if (this.closed) throw new _objectUnsubscribedError.ObjectUnsubscribedError();
        else return this._value;
    };
    BehaviorSubject1.prototype.next = function(value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject1;
}(_subject.Subject);

},{"tslib":"lRdW5","./Subject":"l0BZI","./util/ObjectUnsubscribedError":"atyud","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bSMcd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ReplaySubject", ()=>ReplaySubject
);
/** PURE_IMPORTS_START tslib,_Subject,_scheduler_queue,_Subscription,_operators_observeOn,_util_ObjectUnsubscribedError,_SubjectSubscription PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("./Subject");
var _queue = require("./scheduler/queue");
var _subscription = require("./Subscription");
var _observeOn = require("./operators/observeOn");
var _objectUnsubscribedError = require("./util/ObjectUnsubscribedError");
var _subjectSubscription = require("./SubjectSubscription");
var ReplaySubject = /*@__PURE__*/ function(_super) {
    _tslib.__extends(ReplaySubject1, _super);
    function ReplaySubject1(bufferSize, windowTime, scheduler) {
        if (bufferSize === void 0) bufferSize = Number.POSITIVE_INFINITY;
        if (windowTime === void 0) windowTime = Number.POSITIVE_INFINITY;
        var _this = _super.call(this) || this;
        _this.scheduler = scheduler;
        _this._events = [];
        _this._infiniteTimeWindow = false;
        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
        _this._windowTime = windowTime < 1 ? 1 : windowTime;
        if (windowTime === Number.POSITIVE_INFINITY) {
            _this._infiniteTimeWindow = true;
            _this.next = _this.nextInfiniteTimeWindow;
        } else _this.next = _this.nextTimeWindow;
        return _this;
    }
    ReplaySubject1.prototype.nextInfiniteTimeWindow = function(value) {
        if (!this.isStopped) {
            var _events = this._events;
            _events.push(value);
            if (_events.length > this._bufferSize) _events.shift();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject1.prototype.nextTimeWindow = function(value) {
        if (!this.isStopped) {
            this._events.push(new ReplayEvent(this._getNow(), value));
            this._trimBufferThenGetEvents();
        }
        _super.prototype.next.call(this, value);
    };
    ReplaySubject1.prototype._subscribe = function(subscriber) {
        var _infiniteTimeWindow = this._infiniteTimeWindow;
        var _events = _infiniteTimeWindow ? this._events : this._trimBufferThenGetEvents();
        var scheduler = this.scheduler;
        var len = _events.length;
        var subscription;
        if (this.closed) throw new _objectUnsubscribedError.ObjectUnsubscribedError();
        else if (this.isStopped || this.hasError) subscription = _subscription.Subscription.EMPTY;
        else {
            this.observers.push(subscriber);
            subscription = new _subjectSubscription.SubjectSubscription(this, subscriber);
        }
        if (scheduler) subscriber.add(subscriber = new _observeOn.ObserveOnSubscriber(subscriber, scheduler));
        if (_infiniteTimeWindow) for(var i = 0; i < len && !subscriber.closed; i++)subscriber.next(_events[i]);
        else for(var i = 0; i < len && !subscriber.closed; i++)subscriber.next(_events[i].value);
        if (this.hasError) subscriber.error(this.thrownError);
        else if (this.isStopped) subscriber.complete();
        return subscription;
    };
    ReplaySubject1.prototype._getNow = function() {
        return (this.scheduler || _queue.queue).now();
    };
    ReplaySubject1.prototype._trimBufferThenGetEvents = function() {
        var now = this._getNow();
        var _bufferSize = this._bufferSize;
        var _windowTime = this._windowTime;
        var _events = this._events;
        var eventsCount = _events.length;
        var spliceCount = 0;
        while(spliceCount < eventsCount){
            if (now - _events[spliceCount].time < _windowTime) break;
            spliceCount++;
        }
        if (eventsCount > _bufferSize) spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
        if (spliceCount > 0) _events.splice(0, spliceCount);
        return _events;
    };
    return ReplaySubject1;
}(_subject.Subject);
var ReplayEvent = /*@__PURE__*/ function() {
    function ReplayEvent1(time, value) {
        this.time = time;
        this.value = value;
    }
    return ReplayEvent1;
}();

},{"tslib":"lRdW5","./Subject":"l0BZI","./scheduler/queue":"TSoO9","./Subscription":"7CEw9","./operators/observeOn":"eG2ED","./util/ObjectUnsubscribedError":"atyud","./SubjectSubscription":"dPfj1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"TSoO9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "queueScheduler", ()=>queueScheduler
);
parcelHelpers.export(exports, "queue", ()=>queue
);
/** PURE_IMPORTS_START _QueueAction,_QueueScheduler PURE_IMPORTS_END */ var _queueAction = require("./QueueAction");
var _queueScheduler = require("./QueueScheduler");
var queueScheduler = /*@__PURE__*/ new _queueScheduler.QueueScheduler(_queueAction.QueueAction);
var queue = queueScheduler;

},{"./QueueAction":"dispt","./QueueScheduler":"beDOW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dispt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QueueAction", ()=>QueueAction
);
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */ var _tslib = require("tslib");
var _asyncAction = require("./AsyncAction");
var QueueAction = /*@__PURE__*/ function(_super) {
    _tslib.__extends(QueueAction1, _super);
    function QueueAction1(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction1.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        if (delay > 0) return _super.prototype.schedule.call(this, state, delay);
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction1.prototype.execute = function(state, delay) {
        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
    };
    QueueAction1.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && delay > 0 || delay === null && this.delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        return scheduler.flush(this);
    };
    return QueueAction1;
}(_asyncAction.AsyncAction);

},{"tslib":"lRdW5","./AsyncAction":"2T4TU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2T4TU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsyncAction", ()=>AsyncAction
);
/** PURE_IMPORTS_START tslib,_Action PURE_IMPORTS_END */ var _tslib = require("tslib");
var _action = require("./Action");
var AsyncAction = /*@__PURE__*/ function(_super) {
    _tslib.__extends(AsyncAction1, _super);
    function AsyncAction1(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction1.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        if (this.closed) return this;
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) this.id = this.recycleAsyncId(scheduler, id, delay);
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction1.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction1.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && this.delay === delay && this.pending === false) return id;
        clearInterval(id);
        return undefined;
    };
    AsyncAction1.prototype.execute = function(state, delay) {
        if (this.closed) return new Error('executing a cancelled action');
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) return error;
        else if (this.pending === false && this.id != null) this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    };
    AsyncAction1.prototype._execute = function(state, delay) {
        var errored = false;
        var errorValue = undefined;
        try {
            this.work(state);
        } catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction1.prototype._unsubscribe = function() {
        var id = this.id;
        var scheduler = this.scheduler;
        var actions = scheduler.actions;
        var index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) actions.splice(index, 1);
        if (id != null) this.id = this.recycleAsyncId(scheduler, id, null);
        this.delay = null;
    };
    return AsyncAction1;
}(_action.Action);

},{"tslib":"lRdW5","./Action":"iUHEY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iUHEY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Action", ()=>Action
);
/** PURE_IMPORTS_START tslib,_Subscription PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscription = require("../Subscription");
var Action = /*@__PURE__*/ function(_super) {
    _tslib.__extends(Action1, _super);
    function Action1(scheduler, work) {
        return _super.call(this) || this;
    }
    Action1.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        return this;
    };
    return Action1;
}(_subscription.Subscription);

},{"tslib":"lRdW5","../Subscription":"7CEw9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"beDOW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QueueScheduler", ()=>QueueScheduler
);
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */ var _tslib = require("tslib");
var _asyncScheduler = require("./AsyncScheduler");
var QueueScheduler = /*@__PURE__*/ function(_super) {
    _tslib.__extends(QueueScheduler1, _super);
    function QueueScheduler1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler1;
}(_asyncScheduler.AsyncScheduler);

},{"tslib":"lRdW5","./AsyncScheduler":"lGIsu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGIsu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsyncScheduler", ()=>AsyncScheduler
);
/** PURE_IMPORTS_START tslib,_Scheduler PURE_IMPORTS_END */ var _tslib = require("tslib");
var _scheduler = require("../Scheduler");
var AsyncScheduler = /*@__PURE__*/ function(_super) {
    _tslib.__extends(AsyncScheduler1, _super);
    function AsyncScheduler1(SchedulerAction, now) {
        if (now === void 0) now = _scheduler.Scheduler.now;
        var _this = _super.call(this, SchedulerAction, function() {
            if (AsyncScheduler1.delegate && AsyncScheduler1.delegate !== _this) return AsyncScheduler1.delegate.now();
            else return now();
        }) || this;
        _this.actions = [];
        _this.active = false;
        _this.scheduled = undefined;
        return _this;
    }
    AsyncScheduler1.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) delay = 0;
        if (AsyncScheduler1.delegate && AsyncScheduler1.delegate !== this) return AsyncScheduler1.delegate.schedule(work, delay, state);
        else return _super.prototype.schedule.call(this, work, delay, state);
    };
    AsyncScheduler1.prototype.flush = function(action) {
        var actions = this.actions;
        if (this.active) {
            actions.push(action);
            return;
        }
        var error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) break;
        }while (action = actions.shift())
        this.active = false;
        if (error) {
            while(action = actions.shift())action.unsubscribe();
            throw error;
        }
    };
    return AsyncScheduler1;
}(_scheduler.Scheduler);

},{"tslib":"lRdW5","../Scheduler":"bPLJk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bPLJk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Scheduler", ()=>Scheduler
);
var Scheduler = /*@__PURE__*/ function() {
    function Scheduler1(SchedulerAction, now) {
        if (now === void 0) now = Scheduler1.now;
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    Scheduler1.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) delay = 0;
        return new this.SchedulerAction(this, work).schedule(state, delay);
    };
    Scheduler1.now = function() {
        return Date.now();
    };
    return Scheduler1;
}();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eG2ED":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "observeOn", ()=>observeOn
);
parcelHelpers.export(exports, "ObserveOnOperator", ()=>ObserveOnOperator
);
parcelHelpers.export(exports, "ObserveOnSubscriber", ()=>ObserveOnSubscriber
);
parcelHelpers.export(exports, "ObserveOnMessage", ()=>ObserveOnMessage
);
/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _notification = require("../Notification");
function observeOn(scheduler, delay) {
    if (delay === void 0) delay = 0;
    return function observeOnOperatorFunction(source) {
        return source.lift(new ObserveOnOperator(scheduler, delay));
    };
}
var ObserveOnOperator = /*@__PURE__*/ function() {
    function ObserveOnOperator1(scheduler, delay) {
        if (delay === void 0) delay = 0;
        this.scheduler = scheduler;
        this.delay = delay;
    }
    ObserveOnOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
    };
    return ObserveOnOperator1;
}();
var ObserveOnSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(ObserveOnSubscriber1, _super);
    function ObserveOnSubscriber1(destination, scheduler, delay) {
        if (delay === void 0) delay = 0;
        var _this = _super.call(this, destination) || this;
        _this.scheduler = scheduler;
        _this.delay = delay;
        return _this;
    }
    ObserveOnSubscriber1.dispatch = function(arg) {
        var notification = arg.notification, destination = arg.destination;
        notification.observe(destination);
        this.unsubscribe();
    };
    ObserveOnSubscriber1.prototype.scheduleMessage = function(notification) {
        var destination = this.destination;
        destination.add(this.scheduler.schedule(ObserveOnSubscriber1.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
    };
    ObserveOnSubscriber1.prototype._next = function(value) {
        this.scheduleMessage(_notification.Notification.createNext(value));
    };
    ObserveOnSubscriber1.prototype._error = function(err) {
        this.scheduleMessage(_notification.Notification.createError(err));
        this.unsubscribe();
    };
    ObserveOnSubscriber1.prototype._complete = function() {
        this.scheduleMessage(_notification.Notification.createComplete());
        this.unsubscribe();
    };
    return ObserveOnSubscriber1;
}(_subscriber.Subscriber);
var ObserveOnMessage = /*@__PURE__*/ function() {
    function ObserveOnMessage1(notification, destination) {
        this.notification = notification;
        this.destination = destination;
    }
    return ObserveOnMessage1;
}();

},{"tslib":"lRdW5","../Subscriber":"bwPOT","../Notification":"6LPyO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6LPyO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NotificationKind", ()=>NotificationKind
);
parcelHelpers.export(exports, "Notification", ()=>Notification
);
/** PURE_IMPORTS_START _observable_empty,_observable_of,_observable_throwError PURE_IMPORTS_END */ var _empty = require("./observable/empty");
var _of = require("./observable/of");
var _throwError = require("./observable/throwError");
var NotificationKind;
/*@__PURE__*/ (function(NotificationKind1) {
    NotificationKind1["NEXT"] = "N";
    NotificationKind1["ERROR"] = "E";
    NotificationKind1["COMPLETE"] = "C";
})(NotificationKind || (NotificationKind = {}));
var Notification = /*@__PURE__*/ function() {
    function Notification1(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification1.prototype.observe = function(observer) {
        switch(this.kind){
            case 'N':
                return observer.next && observer.next(this.value);
            case 'E':
                return observer.error && observer.error(this.error);
            case 'C':
                return observer.complete && observer.complete();
        }
    };
    Notification1.prototype.do = function(next, error, complete) {
        var kind = this.kind;
        switch(kind){
            case 'N':
                return next && next(this.value);
            case 'E':
                return error && error(this.error);
            case 'C':
                return complete && complete();
        }
    };
    Notification1.prototype.accept = function(nextOrObserver, error, complete) {
        if (nextOrObserver && typeof nextOrObserver.next === 'function') return this.observe(nextOrObserver);
        else return this.do(nextOrObserver, error, complete);
    };
    Notification1.prototype.toObservable = function() {
        var kind = this.kind;
        switch(kind){
            case 'N':
                return _of.of(this.value);
            case 'E':
                return _throwError.throwError(this.error);
            case 'C':
                return _empty.empty();
        }
        throw new Error('unexpected notification kind value');
    };
    Notification1.createNext = function(value) {
        if (typeof value !== 'undefined') return new Notification1('N', value);
        return Notification1.undefinedValueNotification;
    };
    Notification1.createError = function(err) {
        return new Notification1('E', undefined, err);
    };
    Notification1.createComplete = function() {
        return Notification1.completeNotification;
    };
    Notification1.completeNotification = new Notification1('C');
    Notification1.undefinedValueNotification = new Notification1('N', undefined);
    return Notification1;
}();

},{"./observable/empty":"d0sAg","./observable/of":"knjPI","./observable/throwError":"figu7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d0sAg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EMPTY", ()=>EMPTY
);
parcelHelpers.export(exports, "empty", ()=>empty
);
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */ var _observable = require("../Observable");
var EMPTY = /*@__PURE__*/ new _observable.Observable(function(subscriber) {
    return subscriber.complete();
});
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new _observable.Observable(function(subscriber) {
        return scheduler.schedule(function() {
            return subscriber.complete();
        });
    });
}

},{"../Observable":"1asgn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knjPI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "of", ()=>of
);
/** PURE_IMPORTS_START _util_isScheduler,_fromArray,_scheduled_scheduleArray PURE_IMPORTS_END */ var _isScheduler = require("../util/isScheduler");
var _fromArray = require("./fromArray");
var _scheduleArray = require("../scheduled/scheduleArray");
function of() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = args[args.length - 1];
    if (_isScheduler.isScheduler(scheduler)) {
        args.pop();
        return _scheduleArray.scheduleArray(args, scheduler);
    } else return _fromArray.fromArray(args);
}

},{"../util/isScheduler":"8B5Pf","./fromArray":"fv7fx","../scheduled/scheduleArray":"bhg1a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8B5Pf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "isScheduler", ()=>isScheduler
);
function isScheduler(value) {
    return value && typeof value.schedule === 'function';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fv7fx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromArray", ()=>fromArray
);
/** PURE_IMPORTS_START _Observable,_util_subscribeToArray,_scheduled_scheduleArray PURE_IMPORTS_END */ var _observable = require("../Observable");
var _subscribeToArray = require("../util/subscribeToArray");
var _scheduleArray = require("../scheduled/scheduleArray");
function fromArray(input, scheduler) {
    if (!scheduler) return new _observable.Observable(_subscribeToArray.subscribeToArray(input));
    else return _scheduleArray.scheduleArray(input, scheduler);
}

},{"../Observable":"1asgn","../util/subscribeToArray":"65pF8","../scheduled/scheduleArray":"bhg1a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"65pF8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeToArray", ()=>subscribeToArray
);
var subscribeToArray = function(array) {
    return function(subscriber) {
        for(var i = 0, len = array.length; i < len && !subscriber.closed; i++)subscriber.next(array[i]);
        subscriber.complete();
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bhg1a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleArray", ()=>scheduleArray
);
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */ var _observable = require("../Observable");
var _subscription = require("../Subscription");
function scheduleArray(input, scheduler) {
    return new _observable.Observable(function(subscriber) {
        var sub = new _subscription.Subscription();
        var i = 0;
        sub.add(scheduler.schedule(function() {
            if (i === input.length) {
                subscriber.complete();
                return;
            }
            subscriber.next(input[i++]);
            if (!subscriber.closed) sub.add(this.schedule());
        }));
        return sub;
    });
}

},{"../Observable":"1asgn","../Subscription":"7CEw9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"figu7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "throwError", ()=>throwError
);
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */ var _observable = require("../Observable");
function throwError(error, scheduler) {
    if (!scheduler) return new _observable.Observable(function(subscriber) {
        return subscriber.error(error);
    });
    else return new _observable.Observable(function(subscriber) {
        return scheduler.schedule(dispatch, 0, {
            error: error,
            subscriber: subscriber
        });
    });
}
function dispatch(_a) {
    var error = _a.error, subscriber = _a.subscriber;
    subscriber.error(error);
}

},{"../Observable":"1asgn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bxydg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsyncSubject", ()=>AsyncSubject
);
/** PURE_IMPORTS_START tslib,_Subject,_Subscription PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("./Subject");
var _subscription = require("./Subscription");
var AsyncSubject = /*@__PURE__*/ function(_super) {
    _tslib.__extends(AsyncSubject1, _super);
    function AsyncSubject1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.value = null;
        _this.hasNext = false;
        _this.hasCompleted = false;
        return _this;
    }
    AsyncSubject1.prototype._subscribe = function(subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return _subscription.Subscription.EMPTY;
        } else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return _subscription.Subscription.EMPTY;
        }
        return _super.prototype._subscribe.call(this, subscriber);
    };
    AsyncSubject1.prototype.next = function(value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    };
    AsyncSubject1.prototype.error = function(error) {
        if (!this.hasCompleted) _super.prototype.error.call(this, error);
    };
    AsyncSubject1.prototype.complete = function() {
        this.hasCompleted = true;
        if (this.hasNext) _super.prototype.next.call(this, this.value);
        _super.prototype.complete.call(this);
    };
    return AsyncSubject1;
}(_subject.Subject);

},{"tslib":"lRdW5","./Subject":"l0BZI","./Subscription":"7CEw9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7sZZh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "asapScheduler", ()=>asapScheduler
);
parcelHelpers.export(exports, "asap", ()=>asap
);
/** PURE_IMPORTS_START _AsapAction,_AsapScheduler PURE_IMPORTS_END */ var _asapAction = require("./AsapAction");
var _asapScheduler = require("./AsapScheduler");
var asapScheduler = /*@__PURE__*/ new _asapScheduler.AsapScheduler(_asapAction.AsapAction);
var asap = asapScheduler;

},{"./AsapAction":"Z0Wt5","./AsapScheduler":"dTW9t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Z0Wt5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsapAction", ()=>AsapAction
);
/** PURE_IMPORTS_START tslib,_util_Immediate,_AsyncAction PURE_IMPORTS_END */ var _tslib = require("tslib");
var _immediate = require("../util/Immediate");
var _asyncAction = require("./AsyncAction");
var AsapAction = /*@__PURE__*/ function(_super) {
    _tslib.__extends(AsapAction1, _super);
    function AsapAction1(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction1.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = _immediate.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
    };
    AsapAction1.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && delay > 0 || delay === null && this.delay > 0) return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        if (scheduler.actions.length === 0) {
            _immediate.Immediate.clearImmediate(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction1;
}(_asyncAction.AsyncAction);

},{"tslib":"lRdW5","../util/Immediate":"cxwVr","./AsyncAction":"2T4TU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cxwVr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Immediate", ()=>Immediate
);
parcelHelpers.export(exports, "TestTools", ()=>TestTools
);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var nextHandle = 1;
var RESOLVED = /*@__PURE__*/ function() {
    return /*@__PURE__*/ Promise.resolve();
}();
var activeHandles = {};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
var Immediate = {
    setImmediate: function(cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        RESOLVED.then(function() {
            return findAndClearHandle(handle) && cb();
        });
        return handle;
    },
    clearImmediate: function(handle) {
        findAndClearHandle(handle);
    }
};
var TestTools = {
    pending: function() {
        return Object.keys(activeHandles).length;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dTW9t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AsapScheduler", ()=>AsapScheduler
);
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */ var _tslib = require("tslib");
var _asyncScheduler = require("./AsyncScheduler");
var AsapScheduler = /*@__PURE__*/ function(_super) {
    _tslib.__extends(AsapScheduler1, _super);
    function AsapScheduler1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler1.prototype.flush = function(action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) break;
        }while (++index < count && (action = actions.shift()))
        this.active = false;
        if (error) {
            while(++index < count && (action = actions.shift()))action.unsubscribe();
            throw error;
        }
    };
    return AsapScheduler1;
}(_asyncScheduler.AsyncScheduler);

},{"tslib":"lRdW5","./AsyncScheduler":"lGIsu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"04lHJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "asyncScheduler", ()=>asyncScheduler
);
parcelHelpers.export(exports, "async", ()=>async
);
/** PURE_IMPORTS_START _AsyncAction,_AsyncScheduler PURE_IMPORTS_END */ var _asyncAction = require("./AsyncAction");
var _asyncScheduler = require("./AsyncScheduler");
var asyncScheduler = /*@__PURE__*/ new _asyncScheduler.AsyncScheduler(_asyncAction.AsyncAction);
var async = asyncScheduler;

},{"./AsyncAction":"2T4TU","./AsyncScheduler":"lGIsu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bfCCp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animationFrameScheduler", ()=>animationFrameScheduler
);
parcelHelpers.export(exports, "animationFrame", ()=>animationFrame
);
/** PURE_IMPORTS_START _AnimationFrameAction,_AnimationFrameScheduler PURE_IMPORTS_END */ var _animationFrameAction = require("./AnimationFrameAction");
var _animationFrameScheduler = require("./AnimationFrameScheduler");
var animationFrameScheduler = /*@__PURE__*/ new _animationFrameScheduler.AnimationFrameScheduler(_animationFrameAction.AnimationFrameAction);
var animationFrame = animationFrameScheduler;

},{"./AnimationFrameAction":"lMlee","./AnimationFrameScheduler":"8WPks","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lMlee":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AnimationFrameAction", ()=>AnimationFrameAction
);
/** PURE_IMPORTS_START tslib,_AsyncAction PURE_IMPORTS_END */ var _tslib = require("tslib");
var _asyncAction = require("./AsyncAction");
var AnimationFrameAction = /*@__PURE__*/ function(_super) {
    _tslib.__extends(AnimationFrameAction1, _super);
    function AnimationFrameAction1(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction1.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        scheduler.actions.push(this);
        return scheduler.scheduled || (scheduler.scheduled = requestAnimationFrame(function() {
            return scheduler.flush(null);
        }));
    };
    AnimationFrameAction1.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && delay > 0 || delay === null && this.delay > 0) return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        if (scheduler.actions.length === 0) {
            cancelAnimationFrame(id);
            scheduler.scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction1;
}(_asyncAction.AsyncAction);

},{"tslib":"lRdW5","./AsyncAction":"2T4TU","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8WPks":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AnimationFrameScheduler", ()=>AnimationFrameScheduler
);
/** PURE_IMPORTS_START tslib,_AsyncScheduler PURE_IMPORTS_END */ var _tslib = require("tslib");
var _asyncScheduler = require("./AsyncScheduler");
var AnimationFrameScheduler = /*@__PURE__*/ function(_super) {
    _tslib.__extends(AnimationFrameScheduler1, _super);
    function AnimationFrameScheduler1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler1.prototype.flush = function(action) {
        this.active = true;
        this.scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        var count = actions.length;
        action = action || actions.shift();
        do {
            if (error = action.execute(action.state, action.delay)) break;
        }while (++index < count && (action = actions.shift()))
        this.active = false;
        if (error) {
            while(++index < count && (action = actions.shift()))action.unsubscribe();
            throw error;
        }
    };
    return AnimationFrameScheduler1;
}(_asyncScheduler.AsyncScheduler);

},{"tslib":"lRdW5","./AsyncScheduler":"lGIsu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b7Iyp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VirtualTimeScheduler", ()=>VirtualTimeScheduler
);
parcelHelpers.export(exports, "VirtualAction", ()=>VirtualAction
);
/** PURE_IMPORTS_START tslib,_AsyncAction,_AsyncScheduler PURE_IMPORTS_END */ var _tslib = require("tslib");
var _asyncAction = require("./AsyncAction");
var _asyncScheduler = require("./AsyncScheduler");
var VirtualTimeScheduler = /*@__PURE__*/ function(_super) {
    _tslib.__extends(VirtualTimeScheduler1, _super);
    function VirtualTimeScheduler1(SchedulerAction, maxFrames) {
        if (SchedulerAction === void 0) SchedulerAction = VirtualAction;
        if (maxFrames === void 0) maxFrames = Number.POSITIVE_INFINITY;
        var _this = _super.call(this, SchedulerAction, function() {
            return _this.frame;
        }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler1.prototype.flush = function() {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error, action;
        while((action = actions[0]) && action.delay <= maxFrames){
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) break;
        }
        if (error) {
            while(action = actions.shift())action.unsubscribe();
            throw error;
        }
    };
    VirtualTimeScheduler1.frameTimeFactor = 10;
    return VirtualTimeScheduler1;
}(_asyncScheduler.AsyncScheduler);
var VirtualAction = /*@__PURE__*/ function(_super) {
    _tslib.__extends(VirtualAction1, _super);
    function VirtualAction1(scheduler, work, index) {
        if (index === void 0) index = scheduler.index += 1;
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction1.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        if (!this.id) return _super.prototype.schedule.call(this, state, delay);
        this.active = false;
        var action = new VirtualAction1(this.scheduler, this.work);
        this.add(action);
        return action.schedule(state, delay);
    };
    VirtualAction1.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction1.sortActions);
        return true;
    };
    VirtualAction1.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        return undefined;
    };
    VirtualAction1.prototype._execute = function(state, delay) {
        if (this.active === true) return _super.prototype._execute.call(this, state, delay);
    };
    VirtualAction1.sortActions = function(a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) return 0;
            else if (a.index > b.index) return 1;
            else return -1;
        } else if (a.delay > b.delay) return 1;
        else return -1;
    };
    return VirtualAction1;
}(_asyncAction.AsyncAction);

},{"tslib":"lRdW5","./AsyncAction":"2T4TU","./AsyncScheduler":"lGIsu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cB2ox":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "noop", ()=>noop
);
function noop() {}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8iLIa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isObservable", ()=>isObservable
);
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */ var _observable = require("../Observable");
function isObservable(obj) {
    return !!obj && (obj instanceof _observable.Observable || typeof obj.lift === 'function' && typeof obj.subscribe === 'function');
}

},{"../Observable":"1asgn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eVyky":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ArgumentOutOfRangeError", ()=>ArgumentOutOfRangeError
);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var ArgumentOutOfRangeErrorImpl = /*@__PURE__*/ function() {
    function ArgumentOutOfRangeErrorImpl1() {
        Error.call(this);
        this.message = 'argument out of range';
        this.name = 'ArgumentOutOfRangeError';
        return this;
    }
    ArgumentOutOfRangeErrorImpl1.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return ArgumentOutOfRangeErrorImpl1;
}();
var ArgumentOutOfRangeError = ArgumentOutOfRangeErrorImpl;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8nE0j":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EmptyError", ()=>EmptyError
);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var EmptyErrorImpl = /*@__PURE__*/ function() {
    function EmptyErrorImpl1() {
        Error.call(this);
        this.message = 'no elements in sequence';
        this.name = 'EmptyError';
        return this;
    }
    EmptyErrorImpl1.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return EmptyErrorImpl1;
}();
var EmptyError = EmptyErrorImpl;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f9mmi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TimeoutError", ()=>TimeoutError
);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ var TimeoutErrorImpl = /*@__PURE__*/ function() {
    function TimeoutErrorImpl1() {
        Error.call(this);
        this.message = 'Timeout has occurred';
        this.name = 'TimeoutError';
        return this;
    }
    TimeoutErrorImpl1.prototype = /*@__PURE__*/ Object.create(Error.prototype);
    return TimeoutErrorImpl1;
}();
var TimeoutError = TimeoutErrorImpl;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jFIOz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bindCallback", ()=>bindCallback
);
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isArray,_util_isScheduler PURE_IMPORTS_END */ var _observable = require("../Observable");
var _asyncSubject = require("../AsyncSubject");
var _map = require("../operators/map");
var _canReportError = require("../util/canReportError");
var _isArray = require("../util/isArray");
var _isScheduler = require("../util/isScheduler");
function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (_isScheduler.isScheduler(resultSelector)) scheduler = resultSelector;
        else return function() {
            var args1 = [];
            for(var _i = 0; _i < arguments.length; _i++)args1[_i] = arguments[_i];
            return bindCallback(callbackFunc, scheduler).apply(void 0, args1).pipe(_map.map(function(args) {
                return _isArray.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
            }));
        };
    }
    return function() {
        var args = [];
        for(var _i1 = 0; _i1 < arguments.length; _i1++)args[_i1] = arguments[_i1];
        var context = this;
        var subject;
        var params = {
            context: context,
            subject: subject,
            callbackFunc: callbackFunc,
            scheduler: scheduler
        };
        return new _observable.Observable(function(subscriber) {
            if (!scheduler) {
                if (!subject) {
                    subject = new _asyncSubject.AsyncSubject();
                    var handler = function() {
                        var innerArgs = [];
                        for(var _i = 0; _i < arguments.length; _i++)innerArgs[_i] = arguments[_i];
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([
                            handler
                        ]));
                    } catch (err) {
                        if (_canReportError.canReportError(subject)) subject.error(err);
                        else console.warn(err);
                    }
                }
                return subject.subscribe(subscriber);
            } else {
                var state = {
                    args: args,
                    subscriber: subscriber,
                    params: params
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
function dispatch(state) {
    var _this = this;
    var self = this;
    var args = state.args, subscriber = state.subscriber, params = state.params;
    var callbackFunc = params.callbackFunc, context = params.context, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new _asyncSubject.AsyncSubject();
        var handler = function() {
            var innerArgs = [];
            for(var _i = 0; _i < arguments.length; _i++)innerArgs[_i] = arguments[_i];
            var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            _this.add(scheduler.schedule(dispatchNext, 0, {
                value: value,
                subject: subject
            }));
        };
        try {
            callbackFunc.apply(context, args.concat([
                handler
            ]));
        } catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    var value = state.value, subject = state.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    var err = state.err, subject = state.subject;
    subject.error(err);
}

},{"../Observable":"1asgn","../AsyncSubject":"bxydg","../operators/map":"l6Oaa","../util/canReportError":"b6CwD","../util/isArray":"7twlV","../util/isScheduler":"8B5Pf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l6Oaa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "MapOperator", ()=>MapOperator
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function map(project, thisArg) {
    return function mapOperation(source) {
        if (typeof project !== 'function') throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
        return source.lift(new MapOperator(project, thisArg));
    };
}
var MapOperator = /*@__PURE__*/ function() {
    function MapOperator1(project, thisArg) {
        this.project = project;
        this.thisArg = thisArg;
    }
    MapOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
    };
    return MapOperator1;
}();
var MapSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(MapSubscriber1, _super);
    function MapSubscriber1(destination, project, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.count = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    MapSubscriber1.prototype._next = function(value) {
        var result;
        try {
            result = this.project.call(this.thisArg, value, this.count++);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return MapSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"178VF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bindNodeCallback", ()=>bindNodeCallback
);
/** PURE_IMPORTS_START _Observable,_AsyncSubject,_operators_map,_util_canReportError,_util_isScheduler,_util_isArray PURE_IMPORTS_END */ var _observable = require("../Observable");
var _asyncSubject = require("../AsyncSubject");
var _map = require("../operators/map");
var _canReportError = require("../util/canReportError");
var _isScheduler = require("../util/isScheduler");
var _isArray = require("../util/isArray");
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (_isScheduler.isScheduler(resultSelector)) scheduler = resultSelector;
        else return function() {
            var args1 = [];
            for(var _i = 0; _i < arguments.length; _i++)args1[_i] = arguments[_i];
            return bindNodeCallback(callbackFunc, scheduler).apply(void 0, args1).pipe(_map.map(function(args) {
                return _isArray.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
            }));
        };
    }
    return function() {
        var args = [];
        for(var _i1 = 0; _i1 < arguments.length; _i1++)args[_i1] = arguments[_i1];
        var params = {
            subject: undefined,
            args: args,
            callbackFunc: callbackFunc,
            scheduler: scheduler,
            context: this
        };
        return new _observable.Observable(function(subscriber) {
            var context = params.context;
            var subject = params.subject;
            if (!scheduler) {
                if (!subject) {
                    subject = params.subject = new _asyncSubject.AsyncSubject();
                    var handler = function() {
                        var innerArgs = [];
                        for(var _i = 0; _i < arguments.length; _i++)innerArgs[_i] = arguments[_i];
                        var err = innerArgs.shift();
                        if (err) {
                            subject.error(err);
                            return;
                        }
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, args.concat([
                            handler
                        ]));
                    } catch (err) {
                        if (_canReportError.canReportError(subject)) subject.error(err);
                        else console.warn(err);
                    }
                }
                return subject.subscribe(subscriber);
            } else return scheduler.schedule(dispatch, 0, {
                params: params,
                subscriber: subscriber,
                context: context
            });
        });
    };
}
function dispatch(state) {
    var _this = this;
    var params = state.params, subscriber = state.subscriber, context = state.context;
    var callbackFunc = params.callbackFunc, args = params.args, scheduler = params.scheduler;
    var subject = params.subject;
    if (!subject) {
        subject = params.subject = new _asyncSubject.AsyncSubject();
        var handler = function() {
            var innerArgs = [];
            for(var _i = 0; _i < arguments.length; _i++)innerArgs[_i] = arguments[_i];
            var err = innerArgs.shift();
            if (err) _this.add(scheduler.schedule(dispatchError, 0, {
                err: err,
                subject: subject
            }));
            else {
                var value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
                _this.add(scheduler.schedule(dispatchNext, 0, {
                    value: value,
                    subject: subject
                }));
            }
        };
        try {
            callbackFunc.apply(context, args.concat([
                handler
            ]));
        } catch (err) {
            this.add(scheduler.schedule(dispatchError, 0, {
                err: err,
                subject: subject
            }));
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(arg) {
    var value = arg.value, subject = arg.subject;
    subject.next(value);
    subject.complete();
}
function dispatchError(arg) {
    var err = arg.err, subject = arg.subject;
    subject.error(err);
}

},{"../Observable":"1asgn","../AsyncSubject":"bxydg","../operators/map":"l6Oaa","../util/canReportError":"b6CwD","../util/isScheduler":"8B5Pf","../util/isArray":"7twlV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hrt6M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "combineLatest", ()=>combineLatest
);
parcelHelpers.export(exports, "CombineLatestOperator", ()=>CombineLatestOperator
);
parcelHelpers.export(exports, "CombineLatestSubscriber", ()=>CombineLatestSubscriber
);
/** PURE_IMPORTS_START tslib,_util_isScheduler,_util_isArray,_OuterSubscriber,_util_subscribeToResult,_fromArray PURE_IMPORTS_END */ var _tslib = require("tslib");
var _isScheduler = require("../util/isScheduler");
var _isArray = require("../util/isArray");
var _outerSubscriber = require("../OuterSubscriber");
var _subscribeToResult = require("../util/subscribeToResult");
var _fromArray = require("./fromArray");
var NONE = {};
function combineLatest() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    var resultSelector = undefined;
    var scheduler = undefined;
    if (_isScheduler.isScheduler(observables[observables.length - 1])) scheduler = observables.pop();
    if (typeof observables[observables.length - 1] === 'function') resultSelector = observables.pop();
    if (observables.length === 1 && _isArray.isArray(observables[0])) observables = observables[0];
    return _fromArray.fromArray(observables, scheduler).lift(new CombineLatestOperator(resultSelector));
}
var CombineLatestOperator = /*@__PURE__*/ function() {
    function CombineLatestOperator1(resultSelector) {
        this.resultSelector = resultSelector;
    }
    CombineLatestOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new CombineLatestSubscriber(subscriber, this.resultSelector));
    };
    return CombineLatestOperator1;
}();
var CombineLatestSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(CombineLatestSubscriber1, _super);
    function CombineLatestSubscriber1(destination, resultSelector) {
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.active = 0;
        _this.values = [];
        _this.observables = [];
        return _this;
    }
    CombineLatestSubscriber1.prototype._next = function(observable) {
        this.values.push(NONE);
        this.observables.push(observable);
    };
    CombineLatestSubscriber1.prototype._complete = function() {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) this.destination.complete();
        else {
            this.active = len;
            this.toRespond = len;
            for(var i = 0; i < len; i++){
                var observable = observables[i];
                this.add(_subscribeToResult.subscribeToResult(this, observable, undefined, i));
            }
        }
    };
    CombineLatestSubscriber1.prototype.notifyComplete = function(unused) {
        if ((this.active -= 1) === 0) this.destination.complete();
    };
    CombineLatestSubscriber1.prototype.notifyNext = function(_outerValue, innerValue, outerIndex) {
        var values = this.values;
        var oldVal = values[outerIndex];
        var toRespond = !this.toRespond ? 0 : oldVal === NONE ? --this.toRespond : this.toRespond;
        values[outerIndex] = innerValue;
        if (toRespond === 0) {
            if (this.resultSelector) this._tryResultSelector(values);
            else this.destination.next(values.slice());
        }
    };
    CombineLatestSubscriber1.prototype._tryResultSelector = function(values) {
        var result;
        try {
            result = this.resultSelector.apply(this, values);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return CombineLatestSubscriber1;
}(_outerSubscriber.OuterSubscriber);

},{"tslib":"lRdW5","../util/isScheduler":"8B5Pf","../util/isArray":"7twlV","../OuterSubscriber":"fBdeN","../util/subscribeToResult":"iK8gJ","./fromArray":"fv7fx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fBdeN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OuterSubscriber", ()=>OuterSubscriber
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("./Subscriber");
var OuterSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(OuterSubscriber1, _super);
    function OuterSubscriber1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OuterSubscriber1.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.destination.next(innerValue);
    };
    OuterSubscriber1.prototype.notifyError = function(error, innerSub) {
        this.destination.error(error);
    };
    OuterSubscriber1.prototype.notifyComplete = function(innerSub) {
        this.destination.complete();
    };
    return OuterSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","./Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iK8gJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeToResult", ()=>subscribeToResult
);
/** PURE_IMPORTS_START _InnerSubscriber,_subscribeTo,_Observable PURE_IMPORTS_END */ var _innerSubscriber = require("../InnerSubscriber");
var _subscribeTo = require("./subscribeTo");
var _observable = require("../Observable");
function subscribeToResult(outerSubscriber, result, outerValue, outerIndex, innerSubscriber) {
    if (innerSubscriber === void 0) innerSubscriber = new _innerSubscriber.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
    if (innerSubscriber.closed) return undefined;
    if (result instanceof _observable.Observable) return result.subscribe(innerSubscriber);
    return _subscribeTo.subscribeTo(result)(innerSubscriber);
}

},{"../InnerSubscriber":"cW4HN","./subscribeTo":"jLuVQ","../Observable":"1asgn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cW4HN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InnerSubscriber", ()=>InnerSubscriber
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("./Subscriber");
var InnerSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(InnerSubscriber1, _super);
    function InnerSubscriber1(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        _this.index = 0;
        return _this;
    }
    InnerSubscriber1.prototype._next = function(value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
    };
    InnerSubscriber1.prototype._error = function(error) {
        this.parent.notifyError(error, this);
        this.unsubscribe();
    };
    InnerSubscriber1.prototype._complete = function() {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return InnerSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","./Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jLuVQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeTo", ()=>subscribeTo
);
/** PURE_IMPORTS_START _subscribeToArray,_subscribeToPromise,_subscribeToIterable,_subscribeToObservable,_isArrayLike,_isPromise,_isObject,_symbol_iterator,_symbol_observable PURE_IMPORTS_END */ var _subscribeToArray = require("./subscribeToArray");
var _subscribeToPromise = require("./subscribeToPromise");
var _subscribeToIterable = require("./subscribeToIterable");
var _subscribeToObservable = require("./subscribeToObservable");
var _isArrayLike = require("./isArrayLike");
var _isPromise = require("./isPromise");
var _isObject = require("./isObject");
var _iterator = require("../symbol/iterator");
var _observable = require("../symbol/observable");
var subscribeTo = function(result) {
    if (!!result && typeof result[_observable.observable] === 'function') return _subscribeToObservable.subscribeToObservable(result);
    else if (_isArrayLike.isArrayLike(result)) return _subscribeToArray.subscribeToArray(result);
    else if (_isPromise.isPromise(result)) return _subscribeToPromise.subscribeToPromise(result);
    else if (!!result && typeof result[_iterator.iterator] === 'function') return _subscribeToIterable.subscribeToIterable(result);
    else {
        var value = _isObject.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected." + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};

},{"./subscribeToArray":"65pF8","./subscribeToPromise":"9pLhB","./subscribeToIterable":"8SOCK","./subscribeToObservable":"ankdT","./isArrayLike":"ewYhA","./isPromise":"4fe5c","./isObject":"dwhYy","../symbol/iterator":"24vi3","../symbol/observable":"8PNwn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9pLhB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeToPromise", ()=>subscribeToPromise
);
/** PURE_IMPORTS_START _hostReportError PURE_IMPORTS_END */ var _hostReportError = require("./hostReportError");
var subscribeToPromise = function(promise) {
    return function(subscriber) {
        promise.then(function(value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function(err) {
            return subscriber.error(err);
        }).then(null, _hostReportError.hostReportError);
        return subscriber;
    };
};

},{"./hostReportError":"bmSNp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8SOCK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeToIterable", ()=>subscribeToIterable
);
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */ var _iterator = require("../symbol/iterator");
var subscribeToIterable = function(iterable) {
    return function(subscriber) {
        var iterator = iterable[_iterator.iterator]();
        do {
            var item = void 0;
            try {
                item = iterator.next();
            } catch (err) {
                subscriber.error(err);
                return subscriber;
            }
            if (item.done) {
                subscriber.complete();
                break;
            }
            subscriber.next(item.value);
            if (subscriber.closed) break;
        }while (true)
        if (typeof iterator.return === 'function') subscriber.add(function() {
            if (iterator.return) iterator.return();
        });
        return subscriber;
    };
};

},{"../symbol/iterator":"24vi3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"24vi3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "getSymbolIterator", ()=>getSymbolIterator
);
parcelHelpers.export(exports, "iterator", ()=>iterator
);
parcelHelpers.export(exports, "$$iterator", ()=>$$iterator
);
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) return '@@iterator';
    return Symbol.iterator;
}
var iterator = /*@__PURE__*/ getSymbolIterator();
var $$iterator = iterator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ankdT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeToObservable", ()=>subscribeToObservable
);
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */ var _observable = require("../symbol/observable");
var subscribeToObservable = function(obj) {
    return function(subscriber) {
        var obs = obj[_observable.observable]();
        if (typeof obs.subscribe !== 'function') throw new TypeError('Provided object does not correctly implement Symbol.observable');
        else return obs.subscribe(subscriber);
    };
};

},{"../symbol/observable":"8PNwn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ewYhA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isArrayLike", ()=>isArrayLike
);
var isArrayLike = function(x) {
    return x && typeof x.length === 'number' && typeof x !== 'function';
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4fe5c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "isPromise", ()=>isPromise
);
function isPromise(value) {
    return !!value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4CcsK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concat", ()=>concat
);
/** PURE_IMPORTS_START _of,_operators_concatAll PURE_IMPORTS_END */ var _of = require("./of");
var _concatAll = require("../operators/concatAll");
function concat() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    return _concatAll.concatAll()(_of.of.apply(void 0, observables));
}

},{"./of":"knjPI","../operators/concatAll":"kc5bR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kc5bR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concatAll", ()=>concatAll
);
/** PURE_IMPORTS_START _mergeAll PURE_IMPORTS_END */ var _mergeAll = require("./mergeAll");
function concatAll() {
    return _mergeAll.mergeAll(1);
}

},{"./mergeAll":"alg6S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"alg6S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeAll", ()=>mergeAll
);
/** PURE_IMPORTS_START _mergeMap,_util_identity PURE_IMPORTS_END */ var _mergeMap = require("./mergeMap");
var _identity = require("../util/identity");
function mergeAll(concurrent) {
    if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
    return _mergeMap.mergeMap(_identity.identity, concurrent);
}

},{"./mergeMap":"7pq07","../util/identity":"2wO6M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7pq07":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeMap", ()=>mergeMap
);
parcelHelpers.export(exports, "MergeMapOperator", ()=>MergeMapOperator
);
parcelHelpers.export(exports, "MergeMapSubscriber", ()=>MergeMapSubscriber
);
parcelHelpers.export(exports, "flatMap", ()=>flatMap
);
/** PURE_IMPORTS_START tslib,_map,_observable_from,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _map = require("./map");
var _from = require("../observable/from");
var _innerSubscribe = require("../innerSubscribe");
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
    if (typeof resultSelector === 'function') return function(source) {
        return source.pipe(mergeMap(function(a, i) {
            return _from.from(project(a, i)).pipe(_map.map(function(b, ii) {
                return resultSelector(a, b, i, ii);
            }));
        }, concurrent));
    };
    else if (typeof resultSelector === 'number') concurrent = resultSelector;
    return function(source) {
        return source.lift(new MergeMapOperator(project, concurrent));
    };
}
var MergeMapOperator = /*@__PURE__*/ function() {
    function MergeMapOperator1(project, concurrent) {
        if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
        this.project = project;
        this.concurrent = concurrent;
    }
    MergeMapOperator1.prototype.call = function(observer, source) {
        return source.subscribe(new MergeMapSubscriber(observer, this.project, this.concurrent));
    };
    return MergeMapOperator1;
}();
var MergeMapSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(MergeMapSubscriber1, _super);
    function MergeMapSubscriber1(destination, project, concurrent) {
        if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeMapSubscriber1.prototype._next = function(value) {
        if (this.active < this.concurrent) this._tryNext(value);
        else this.buffer.push(value);
    };
    MergeMapSubscriber1.prototype._tryNext = function(value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.active++;
        this._innerSub(result);
    };
    MergeMapSubscriber1.prototype._innerSub = function(ish) {
        var innerSubscriber = new _innerSubscribe.SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = _innerSubscribe.innerSubscribe(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) destination.add(innerSubscription);
    };
    MergeMapSubscriber1.prototype._complete = function() {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) this.destination.complete();
        this.unsubscribe();
    };
    MergeMapSubscriber1.prototype.notifyNext = function(innerValue) {
        this.destination.next(innerValue);
    };
    MergeMapSubscriber1.prototype.notifyComplete = function() {
        var buffer = this.buffer;
        this.active--;
        if (buffer.length > 0) this._next(buffer.shift());
        else if (this.active === 0 && this.hasCompleted) this.destination.complete();
    };
    return MergeMapSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);
var flatMap = mergeMap;

},{"tslib":"lRdW5","./map":"l6Oaa","../observable/from":"iYTWI","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iYTWI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "from", ()=>from
);
/** PURE_IMPORTS_START _Observable,_util_subscribeTo,_scheduled_scheduled PURE_IMPORTS_END */ var _observable = require("../Observable");
var _subscribeTo = require("../util/subscribeTo");
var _scheduled = require("../scheduled/scheduled");
function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof _observable.Observable) return input;
        return new _observable.Observable(_subscribeTo.subscribeTo(input));
    } else return _scheduled.scheduled(input, scheduler);
}

},{"../Observable":"1asgn","../util/subscribeTo":"jLuVQ","../scheduled/scheduled":"jHmGq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jHmGq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduled", ()=>scheduled
);
/** PURE_IMPORTS_START _scheduleObservable,_schedulePromise,_scheduleArray,_scheduleIterable,_util_isInteropObservable,_util_isPromise,_util_isArrayLike,_util_isIterable PURE_IMPORTS_END */ var _scheduleObservable = require("./scheduleObservable");
var _schedulePromise = require("./schedulePromise");
var _scheduleArray = require("./scheduleArray");
var _scheduleIterable = require("./scheduleIterable");
var _isInteropObservable = require("../util/isInteropObservable");
var _isPromise = require("../util/isPromise");
var _isArrayLike = require("../util/isArrayLike");
var _isIterable = require("../util/isIterable");
function scheduled(input, scheduler) {
    if (input != null) {
        if (_isInteropObservable.isInteropObservable(input)) return _scheduleObservable.scheduleObservable(input, scheduler);
        else if (_isPromise.isPromise(input)) return _schedulePromise.schedulePromise(input, scheduler);
        else if (_isArrayLike.isArrayLike(input)) return _scheduleArray.scheduleArray(input, scheduler);
        else if (_isIterable.isIterable(input) || typeof input === 'string') return _scheduleIterable.scheduleIterable(input, scheduler);
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}

},{"./scheduleObservable":"cnHjQ","./schedulePromise":"jKS5S","./scheduleArray":"bhg1a","./scheduleIterable":"8viBa","../util/isInteropObservable":"b66UI","../util/isPromise":"4fe5c","../util/isArrayLike":"ewYhA","../util/isIterable":"gNMJC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cnHjQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleObservable", ()=>scheduleObservable
);
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_observable PURE_IMPORTS_END */ var _observable = require("../Observable");
var _subscription = require("../Subscription");
var _observable1 = require("../symbol/observable");
function scheduleObservable(input, scheduler) {
    return new _observable.Observable(function(subscriber) {
        var sub = new _subscription.Subscription();
        sub.add(scheduler.schedule(function() {
            var observable = input[_observable1.observable]();
            sub.add(observable.subscribe({
                next: function(value) {
                    sub.add(scheduler.schedule(function() {
                        return subscriber.next(value);
                    }));
                },
                error: function(err) {
                    sub.add(scheduler.schedule(function() {
                        return subscriber.error(err);
                    }));
                },
                complete: function() {
                    sub.add(scheduler.schedule(function() {
                        return subscriber.complete();
                    }));
                }
            }));
        }));
        return sub;
    });
}

},{"../Observable":"1asgn","../Subscription":"7CEw9","../symbol/observable":"8PNwn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jKS5S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "schedulePromise", ()=>schedulePromise
);
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */ var _observable = require("../Observable");
var _subscription = require("../Subscription");
function schedulePromise(input, scheduler) {
    return new _observable.Observable(function(subscriber) {
        var sub = new _subscription.Subscription();
        sub.add(scheduler.schedule(function() {
            return input.then(function(value) {
                sub.add(scheduler.schedule(function() {
                    subscriber.next(value);
                    sub.add(scheduler.schedule(function() {
                        return subscriber.complete();
                    }));
                }));
            }, function(err) {
                sub.add(scheduler.schedule(function() {
                    return subscriber.error(err);
                }));
            });
        }));
        return sub;
    });
}

},{"../Observable":"1asgn","../Subscription":"7CEw9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8viBa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scheduleIterable", ()=>scheduleIterable
);
/** PURE_IMPORTS_START _Observable,_Subscription,_symbol_iterator PURE_IMPORTS_END */ var _observable = require("../Observable");
var _subscription = require("../Subscription");
var _iterator = require("../symbol/iterator");
function scheduleIterable(input, scheduler) {
    if (!input) throw new Error('Iterable cannot be null');
    return new _observable.Observable(function(subscriber) {
        var sub = new _subscription.Subscription();
        var iterator;
        sub.add(function() {
            if (iterator && typeof iterator.return === 'function') iterator.return();
        });
        sub.add(scheduler.schedule(function() {
            iterator = input[_iterator.iterator]();
            sub.add(scheduler.schedule(function() {
                if (subscriber.closed) return;
                var value;
                var done;
                try {
                    var result = iterator.next();
                    value = result.value;
                    done = result.done;
                } catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) subscriber.complete();
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            }));
        }));
        return sub;
    });
}

},{"../Observable":"1asgn","../Subscription":"7CEw9","../symbol/iterator":"24vi3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b66UI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isInteropObservable", ()=>isInteropObservable
);
/** PURE_IMPORTS_START _symbol_observable PURE_IMPORTS_END */ var _observable = require("../symbol/observable");
function isInteropObservable(input) {
    return input && typeof input[_observable.observable] === 'function';
}

},{"../symbol/observable":"8PNwn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gNMJC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isIterable", ()=>isIterable
);
/** PURE_IMPORTS_START _symbol_iterator PURE_IMPORTS_END */ var _iterator = require("../symbol/iterator");
function isIterable(input) {
    return input && typeof input[_iterator.iterator] === 'function';
}

},{"../symbol/iterator":"24vi3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j1KrT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SimpleInnerSubscriber", ()=>SimpleInnerSubscriber
);
parcelHelpers.export(exports, "ComplexInnerSubscriber", ()=>ComplexInnerSubscriber
);
parcelHelpers.export(exports, "SimpleOuterSubscriber", ()=>SimpleOuterSubscriber
);
parcelHelpers.export(exports, "ComplexOuterSubscriber", ()=>ComplexOuterSubscriber
);
parcelHelpers.export(exports, "innerSubscribe", ()=>innerSubscribe
);
/** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_util_subscribeTo PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("./Subscriber");
var _observable = require("./Observable");
var _subscribeTo = require("./util/subscribeTo");
var SimpleInnerSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SimpleInnerSubscriber1, _super);
    function SimpleInnerSubscriber1(parent) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        return _this;
    }
    SimpleInnerSubscriber1.prototype._next = function(value) {
        this.parent.notifyNext(value);
    };
    SimpleInnerSubscriber1.prototype._error = function(error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    SimpleInnerSubscriber1.prototype._complete = function() {
        this.parent.notifyComplete();
        this.unsubscribe();
    };
    return SimpleInnerSubscriber1;
}(_subscriber.Subscriber);
var ComplexInnerSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(ComplexInnerSubscriber1, _super);
    function ComplexInnerSubscriber1(parent, outerValue, outerIndex) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.outerValue = outerValue;
        _this.outerIndex = outerIndex;
        return _this;
    }
    ComplexInnerSubscriber1.prototype._next = function(value) {
        this.parent.notifyNext(this.outerValue, value, this.outerIndex, this);
    };
    ComplexInnerSubscriber1.prototype._error = function(error) {
        this.parent.notifyError(error);
        this.unsubscribe();
    };
    ComplexInnerSubscriber1.prototype._complete = function() {
        this.parent.notifyComplete(this);
        this.unsubscribe();
    };
    return ComplexInnerSubscriber1;
}(_subscriber.Subscriber);
var SimpleOuterSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SimpleOuterSubscriber1, _super);
    function SimpleOuterSubscriber1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleOuterSubscriber1.prototype.notifyNext = function(innerValue) {
        this.destination.next(innerValue);
    };
    SimpleOuterSubscriber1.prototype.notifyError = function(err) {
        this.destination.error(err);
    };
    SimpleOuterSubscriber1.prototype.notifyComplete = function() {
        this.destination.complete();
    };
    return SimpleOuterSubscriber1;
}(_subscriber.Subscriber);
var ComplexOuterSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(ComplexOuterSubscriber1, _super);
    function ComplexOuterSubscriber1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ComplexOuterSubscriber1.prototype.notifyNext = function(_outerValue, innerValue, _outerIndex, _innerSub) {
        this.destination.next(innerValue);
    };
    ComplexOuterSubscriber1.prototype.notifyError = function(error) {
        this.destination.error(error);
    };
    ComplexOuterSubscriber1.prototype.notifyComplete = function(_innerSub) {
        this.destination.complete();
    };
    return ComplexOuterSubscriber1;
}(_subscriber.Subscriber);
function innerSubscribe(result, innerSubscriber) {
    if (innerSubscriber.closed) return undefined;
    if (result instanceof _observable.Observable) return result.subscribe(innerSubscriber);
    var subscription;
    try {
        subscription = _subscribeTo.subscribeTo(result)(innerSubscriber);
    } catch (error) {
        innerSubscriber.error(error);
    }
    return subscription;
}

},{"tslib":"lRdW5","./Subscriber":"bwPOT","./Observable":"1asgn","./util/subscribeTo":"jLuVQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iYBVz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defer", ()=>defer
);
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */ var _observable = require("../Observable");
var _from = require("./from");
var _empty = require("./empty");
function defer(observableFactory) {
    return new _observable.Observable(function(subscriber) {
        var input;
        try {
            input = observableFactory();
        } catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var source = input ? _from.from(input) : _empty.empty();
        return source.subscribe(subscriber);
    });
}

},{"../Observable":"1asgn","./from":"iYTWI","./empty":"d0sAg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bT0Lu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "forkJoin", ()=>forkJoin
);
/** PURE_IMPORTS_START _Observable,_util_isArray,_operators_map,_util_isObject,_from PURE_IMPORTS_END */ var _observable = require("../Observable");
var _isArray = require("../util/isArray");
var _map = require("../operators/map");
var _isObject = require("../util/isObject");
var _from = require("./from");
function forkJoin() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    if (sources.length === 1) {
        var first_1 = sources[0];
        if (_isArray.isArray(first_1)) return forkJoinInternal(first_1, null);
        if (_isObject.isObject(first_1) && Object.getPrototypeOf(first_1) === Object.prototype) {
            var keys = Object.keys(first_1);
            return forkJoinInternal(keys.map(function(key) {
                return first_1[key];
            }), keys);
        }
    }
    if (typeof sources[sources.length - 1] === 'function') {
        var resultSelector_1 = sources.pop();
        sources = sources.length === 1 && _isArray.isArray(sources[0]) ? sources[0] : sources;
        return forkJoinInternal(sources, null).pipe(_map.map(function(args) {
            return resultSelector_1.apply(void 0, args);
        }));
    }
    return forkJoinInternal(sources, null);
}
function forkJoinInternal(sources, keys) {
    return new _observable.Observable(function(subscriber) {
        var len = sources.length;
        if (len === 0) {
            subscriber.complete();
            return;
        }
        var values = new Array(len);
        var completed = 0;
        var emitted = 0;
        var _loop_1 = function(i2) {
            var source = _from.from(sources[i2]);
            var hasValue = false;
            subscriber.add(source.subscribe({
                next: function(value) {
                    if (!hasValue) {
                        hasValue = true;
                        emitted++;
                    }
                    values[i2] = value;
                },
                error: function(err) {
                    return subscriber.error(err);
                },
                complete: function() {
                    completed++;
                    if (completed === len || !hasValue) {
                        if (emitted === len) subscriber.next(keys ? keys.reduce(function(result, key, i) {
                            return result[key] = values[i], result;
                        }, {}) : values);
                        subscriber.complete();
                    }
                }
            }));
        };
        for(var i1 = 0; i1 < len; i1++)_loop_1(i1);
    });
}

},{"../Observable":"1asgn","../util/isArray":"7twlV","../operators/map":"l6Oaa","../util/isObject":"dwhYy","./from":"iYTWI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5kZoa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromEvent", ()=>fromEvent
);
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */ var _observable = require("../Observable");
var _isArray = require("../util/isArray");
var _isFunction = require("../util/isFunction");
var _map = require("../operators/map");
var toString = /*@__PURE__*/ function() {
    return Object.prototype.toString;
}();
function fromEvent(target, eventName, options, resultSelector) {
    if (_isFunction.isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) return fromEvent(target, eventName, options).pipe(_map.map(function(args) {
        return _isArray.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
    return new _observable.Observable(function(subscriber) {
        function handler(e) {
            if (arguments.length > 1) subscriber.next(Array.prototype.slice.call(arguments));
            else subscriber.next(e);
        }
        setupSubscription(target, eventName, handler, subscriber, options);
    });
}
function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
    var unsubscribe;
    if (isEventTarget(sourceObj)) {
        var source_1 = sourceObj;
        sourceObj.addEventListener(eventName, handler, options);
        unsubscribe = function() {
            return source_1.removeEventListener(eventName, handler, options);
        };
    } else if (isJQueryStyleEventEmitter(sourceObj)) {
        var source_2 = sourceObj;
        sourceObj.on(eventName, handler);
        unsubscribe = function() {
            return source_2.off(eventName, handler);
        };
    } else if (isNodeStyleEventEmitter(sourceObj)) {
        var source_3 = sourceObj;
        sourceObj.addListener(eventName, handler);
        unsubscribe = function() {
            return source_3.removeListener(eventName, handler);
        };
    } else if (sourceObj && sourceObj.length) for(var i = 0, len = sourceObj.length; i < len; i++)setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
    else throw new TypeError('Invalid event target');
    subscriber.add(unsubscribe);
}
function isNodeStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
}
function isJQueryStyleEventEmitter(sourceObj) {
    return sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
}
function isEventTarget(sourceObj) {
    return sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
}

},{"../Observable":"1asgn","../util/isArray":"7twlV","../util/isFunction":"jxvPW","../operators/map":"l6Oaa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d5bLz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fromEventPattern", ()=>fromEventPattern
);
/** PURE_IMPORTS_START _Observable,_util_isArray,_util_isFunction,_operators_map PURE_IMPORTS_END */ var _observable = require("../Observable");
var _isArray = require("../util/isArray");
var _isFunction = require("../util/isFunction");
var _map = require("../operators/map");
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) return fromEventPattern(addHandler, removeHandler).pipe(_map.map(function(args) {
        return _isArray.isArray(args) ? resultSelector.apply(void 0, args) : resultSelector(args);
    }));
    return new _observable.Observable(function(subscriber) {
        var handler = function() {
            var e = [];
            for(var _i = 0; _i < arguments.length; _i++)e[_i] = arguments[_i];
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue;
        try {
            retValue = addHandler(handler);
        } catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!_isFunction.isFunction(removeHandler)) return undefined;
        return function() {
            return removeHandler(handler, retValue);
        };
    });
}

},{"../Observable":"1asgn","../util/isArray":"7twlV","../util/isFunction":"jxvPW","../operators/map":"l6Oaa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cZiPw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generate", ()=>generate
);
/** PURE_IMPORTS_START _Observable,_util_identity,_util_isScheduler PURE_IMPORTS_END */ var _observable = require("../Observable");
var _identity = require("../util/identity");
var _isScheduler = require("../util/isScheduler");
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
    var resultSelector;
    var initialState;
    if (arguments.length == 1) {
        var options = initialStateOrOptions;
        initialState = options.initialState;
        condition = options.condition;
        iterate = options.iterate;
        resultSelector = options.resultSelector || _identity.identity;
        scheduler = options.scheduler;
    } else if (resultSelectorOrObservable === undefined || _isScheduler.isScheduler(resultSelectorOrObservable)) {
        initialState = initialStateOrOptions;
        resultSelector = _identity.identity;
        scheduler = resultSelectorOrObservable;
    } else {
        initialState = initialStateOrOptions;
        resultSelector = resultSelectorOrObservable;
    }
    return new _observable.Observable(function(subscriber) {
        var state = initialState;
        if (scheduler) return scheduler.schedule(dispatch, 0, {
            subscriber: subscriber,
            iterate: iterate,
            condition: condition,
            resultSelector: resultSelector,
            state: state
        });
        do {
            if (condition) {
                var conditionResult = void 0;
                try {
                    conditionResult = condition(state);
                } catch (err) {
                    subscriber.error(err);
                    return undefined;
                }
                if (!conditionResult) {
                    subscriber.complete();
                    break;
                }
            }
            var value = void 0;
            try {
                value = resultSelector(state);
            } catch (err) {
                subscriber.error(err);
                return undefined;
            }
            subscriber.next(value);
            if (subscriber.closed) break;
            try {
                state = iterate(state);
            } catch (err1) {
                subscriber.error(err1);
                return undefined;
            }
        }while (true)
        return undefined;
    });
}
function dispatch(state) {
    var subscriber = state.subscriber, condition = state.condition;
    if (subscriber.closed) return undefined;
    if (state.needIterate) try {
        state.state = state.iterate(state.state);
    } catch (err) {
        subscriber.error(err);
        return undefined;
    }
    else state.needIterate = true;
    if (condition) {
        var conditionResult = void 0;
        try {
            conditionResult = condition(state.state);
        } catch (err) {
            subscriber.error(err);
            return undefined;
        }
        if (!conditionResult) {
            subscriber.complete();
            return undefined;
        }
        if (subscriber.closed) return undefined;
    }
    var value;
    try {
        value = state.resultSelector(state.state);
    } catch (err2) {
        subscriber.error(err2);
        return undefined;
    }
    if (subscriber.closed) return undefined;
    subscriber.next(value);
    if (subscriber.closed) return undefined;
    return this.schedule(state);
}

},{"../Observable":"1asgn","../util/identity":"2wO6M","../util/isScheduler":"8B5Pf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ciOCA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "iif", ()=>iif
);
/** PURE_IMPORTS_START _defer,_empty PURE_IMPORTS_END */ var _defer = require("./defer");
var _empty = require("./empty");
function iif(condition, trueResult, falseResult) {
    if (trueResult === void 0) trueResult = _empty.EMPTY;
    if (falseResult === void 0) falseResult = _empty.EMPTY;
    return _defer.defer(function() {
        return condition() ? trueResult : falseResult;
    });
}

},{"./defer":"iYBVz","./empty":"d0sAg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8kp6s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interval", ()=>interval
);
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric PURE_IMPORTS_END */ var _observable = require("../Observable");
var _async = require("../scheduler/async");
var _isNumeric = require("../util/isNumeric");
function interval(period, scheduler) {
    if (period === void 0) period = 0;
    if (scheduler === void 0) scheduler = _async.async;
    if (!_isNumeric.isNumeric(period) || period < 0) period = 0;
    if (!scheduler || typeof scheduler.schedule !== 'function') scheduler = _async.async;
    return new _observable.Observable(function(subscriber) {
        subscriber.add(scheduler.schedule(dispatch, period, {
            subscriber: subscriber,
            counter: 0,
            period: period
        }));
        return subscriber;
    });
}
function dispatch(state) {
    var subscriber = state.subscriber, counter = state.counter, period = state.period;
    subscriber.next(counter);
    this.schedule({
        subscriber: subscriber,
        counter: counter + 1,
        period: period
    }, period);
}

},{"../Observable":"1asgn","../scheduler/async":"04lHJ","../util/isNumeric":"eSGdv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eSGdv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumeric", ()=>isNumeric
);
/** PURE_IMPORTS_START _isArray PURE_IMPORTS_END */ var _isArray = require("./isArray");
function isNumeric(val) {
    return !_isArray.isArray(val) && val - parseFloat(val) + 1 >= 0;
}

},{"./isArray":"7twlV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3kGhP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "merge", ()=>merge
);
/** PURE_IMPORTS_START _Observable,_util_isScheduler,_operators_mergeAll,_fromArray PURE_IMPORTS_END */ var _observable = require("../Observable");
var _isScheduler = require("../util/isScheduler");
var _mergeAll = require("../operators/mergeAll");
var _fromArray = require("./fromArray");
function merge() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    var concurrent = Number.POSITIVE_INFINITY;
    var scheduler = null;
    var last = observables[observables.length - 1];
    if (_isScheduler.isScheduler(last)) {
        scheduler = observables.pop();
        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') concurrent = observables.pop();
    } else if (typeof last === 'number') concurrent = observables.pop();
    if (scheduler === null && observables.length === 1 && observables[0] instanceof _observable.Observable) return observables[0];
    return _mergeAll.mergeAll(concurrent)(_fromArray.fromArray(observables, scheduler));
}

},{"../Observable":"1asgn","../util/isScheduler":"8B5Pf","../operators/mergeAll":"alg6S","./fromArray":"fv7fx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fpMWE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NEVER", ()=>NEVER
);
parcelHelpers.export(exports, "never", ()=>never
);
/** PURE_IMPORTS_START _Observable,_util_noop PURE_IMPORTS_END */ var _observable = require("../Observable");
var _noop = require("../util/noop");
var NEVER = /*@__PURE__*/ new _observable.Observable(_noop.noop);
function never() {
    return NEVER;
}

},{"../Observable":"1asgn","../util/noop":"cB2ox","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3XoV6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onErrorResumeNext", ()=>onErrorResumeNext
);
/** PURE_IMPORTS_START _Observable,_from,_util_isArray,_empty PURE_IMPORTS_END */ var _observable = require("../Observable");
var _from = require("./from");
var _isArray = require("../util/isArray");
var _empty = require("./empty");
function onErrorResumeNext() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    if (sources.length === 0) return _empty.EMPTY;
    var first = sources[0], remainder = sources.slice(1);
    if (sources.length === 1 && _isArray.isArray(first)) return onErrorResumeNext.apply(void 0, first);
    return new _observable.Observable(function(subscriber) {
        var subNext = function() {
            return subscriber.add(onErrorResumeNext.apply(void 0, remainder).subscribe(subscriber));
        };
        return _from.from(first).subscribe({
            next: function(value) {
                subscriber.next(value);
            },
            error: subNext,
            complete: subNext
        });
    });
}

},{"../Observable":"1asgn","./from":"iYTWI","../util/isArray":"7twlV","./empty":"d0sAg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3GL3V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pairs", ()=>pairs
);
parcelHelpers.export(exports, "dispatch", ()=>dispatch
);
/** PURE_IMPORTS_START _Observable,_Subscription PURE_IMPORTS_END */ var _observable = require("../Observable");
var _subscription = require("../Subscription");
function pairs(obj, scheduler) {
    if (!scheduler) return new _observable.Observable(function(subscriber) {
        var keys = Object.keys(obj);
        for(var i = 0; i < keys.length && !subscriber.closed; i++){
            var key = keys[i];
            if (obj.hasOwnProperty(key)) subscriber.next([
                key,
                obj[key]
            ]);
        }
        subscriber.complete();
    });
    else return new _observable.Observable(function(subscriber) {
        var keys = Object.keys(obj);
        var subscription = new _subscription.Subscription();
        subscription.add(scheduler.schedule(dispatch, 0, {
            keys: keys,
            index: 0,
            subscriber: subscriber,
            subscription: subscription,
            obj: obj
        }));
        return subscription;
    });
}
function dispatch(state) {
    var keys = state.keys, index = state.index, subscriber = state.subscriber, subscription = state.subscription, obj = state.obj;
    if (!subscriber.closed) {
        if (index < keys.length) {
            var key = keys[index];
            subscriber.next([
                key,
                obj[key]
            ]);
            subscription.add(this.schedule({
                keys: keys,
                index: index + 1,
                subscriber: subscriber,
                subscription: subscription,
                obj: obj
            }));
        } else subscriber.complete();
    }
}

},{"../Observable":"1asgn","../Subscription":"7CEw9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ya8q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "partition", ()=>partition
);
/** PURE_IMPORTS_START _util_not,_util_subscribeTo,_operators_filter,_Observable PURE_IMPORTS_END */ var _not = require("../util/not");
var _subscribeTo = require("../util/subscribeTo");
var _filter = require("../operators/filter");
var _observable = require("../Observable");
function partition(source, predicate, thisArg) {
    return [
        _filter.filter(predicate, thisArg)(new _observable.Observable(_subscribeTo.subscribeTo(source))),
        _filter.filter(_not.not(predicate, thisArg))(new _observable.Observable(_subscribeTo.subscribeTo(source)))
    ];
}

},{"../util/not":"abgIp","../util/subscribeTo":"jLuVQ","../operators/filter":"eU9Jz","../Observable":"1asgn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"abgIp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "not", ()=>not
);
function not(pred, thisArg) {
    function notPred() {
        return !notPred.pred.apply(notPred.thisArg, arguments);
    }
    notPred.pred = pred;
    notPred.thisArg = thisArg;
    return notPred;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eU9Jz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filter", ()=>filter
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}
var FilterOperator = /*@__PURE__*/ function() {
    function FilterOperator1(predicate, thisArg) {
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    FilterOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
    return FilterOperator1;
}();
var FilterSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(FilterSubscriber1, _super);
    function FilterSubscriber1(destination, predicate, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.count = 0;
        return _this;
    }
    FilterSubscriber1.prototype._next = function(value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) this.destination.next(value);
    };
    return FilterSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7v9a2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "race", ()=>race
);
parcelHelpers.export(exports, "RaceOperator", ()=>RaceOperator
);
parcelHelpers.export(exports, "RaceSubscriber", ()=>RaceSubscriber
);
/** PURE_IMPORTS_START tslib,_util_isArray,_fromArray,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */ var _tslib = require("tslib");
var _isArray = require("../util/isArray");
var _fromArray = require("./fromArray");
var _outerSubscriber = require("../OuterSubscriber");
var _subscribeToResult = require("../util/subscribeToResult");
function race() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    if (observables.length === 1) {
        if (_isArray.isArray(observables[0])) observables = observables[0];
        else return observables[0];
    }
    return _fromArray.fromArray(observables, undefined).lift(new RaceOperator());
}
var RaceOperator = /*@__PURE__*/ function() {
    function RaceOperator1() {}
    RaceOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new RaceSubscriber(subscriber));
    };
    return RaceOperator1;
}();
var RaceSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(RaceSubscriber1, _super);
    function RaceSubscriber1(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasFirst = false;
        _this.observables = [];
        _this.subscriptions = [];
        return _this;
    }
    RaceSubscriber1.prototype._next = function(observable) {
        this.observables.push(observable);
    };
    RaceSubscriber1.prototype._complete = function() {
        var observables = this.observables;
        var len = observables.length;
        if (len === 0) this.destination.complete();
        else {
            for(var i = 0; i < len && !this.hasFirst; i++){
                var observable = observables[i];
                var subscription = _subscribeToResult.subscribeToResult(this, observable, undefined, i);
                if (this.subscriptions) this.subscriptions.push(subscription);
                this.add(subscription);
            }
            this.observables = null;
        }
    };
    RaceSubscriber1.prototype.notifyNext = function(_outerValue, innerValue, outerIndex) {
        if (!this.hasFirst) {
            this.hasFirst = true;
            for(var i = 0; i < this.subscriptions.length; i++)if (i !== outerIndex) {
                var subscription = this.subscriptions[i];
                subscription.unsubscribe();
                this.remove(subscription);
            }
            this.subscriptions = null;
        }
        this.destination.next(innerValue);
    };
    return RaceSubscriber1;
}(_outerSubscriber.OuterSubscriber);

},{"tslib":"lRdW5","../util/isArray":"7twlV","./fromArray":"fv7fx","../OuterSubscriber":"fBdeN","../util/subscribeToResult":"iK8gJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"50mSF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "range", ()=>range
);
parcelHelpers.export(exports, "dispatch", ()=>dispatch
);
/** PURE_IMPORTS_START _Observable PURE_IMPORTS_END */ var _observable = require("../Observable");
function range(start, count, scheduler) {
    if (start === void 0) start = 0;
    return new _observable.Observable(function(subscriber) {
        if (count === undefined) {
            count = start;
            start = 0;
        }
        var index = 0;
        var current = start;
        if (scheduler) return scheduler.schedule(dispatch, 0, {
            index: index,
            count: count,
            start: start,
            subscriber: subscriber
        });
        else do {
            if ((index++) >= count) {
                subscriber.complete();
                break;
            }
            subscriber.next(current++);
            if (subscriber.closed) break;
        }while (true)
        return undefined;
    });
}
function dispatch(state) {
    var start = state.start, index = state.index, count = state.count, subscriber = state.subscriber;
    if (index >= count) {
        subscriber.complete();
        return;
    }
    subscriber.next(start);
    if (subscriber.closed) return;
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}

},{"../Observable":"1asgn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"yD2Dx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timer", ()=>timer
);
/** PURE_IMPORTS_START _Observable,_scheduler_async,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */ var _observable = require("../Observable");
var _async = require("../scheduler/async");
var _isNumeric = require("../util/isNumeric");
var _isScheduler = require("../util/isScheduler");
function timer(dueTime, periodOrScheduler, scheduler) {
    if (dueTime === void 0) dueTime = 0;
    var period = -1;
    if (_isNumeric.isNumeric(periodOrScheduler)) period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    else if (_isScheduler.isScheduler(periodOrScheduler)) scheduler = periodOrScheduler;
    if (!_isScheduler.isScheduler(scheduler)) scheduler = _async.async;
    return new _observable.Observable(function(subscriber) {
        var due = _isNumeric.isNumeric(dueTime) ? dueTime : +dueTime - scheduler.now();
        return scheduler.schedule(dispatch, due, {
            index: 0,
            period: period,
            subscriber: subscriber
        });
    });
}
function dispatch(state) {
    var index = state.index, period = state.period, subscriber = state.subscriber;
    subscriber.next(index);
    if (subscriber.closed) return;
    else if (period === -1) return subscriber.complete();
    state.index = index + 1;
    this.schedule(state, period);
}

},{"../Observable":"1asgn","../scheduler/async":"04lHJ","../util/isNumeric":"eSGdv","../util/isScheduler":"8B5Pf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7bCt7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "using", ()=>using
);
/** PURE_IMPORTS_START _Observable,_from,_empty PURE_IMPORTS_END */ var _observable = require("../Observable");
var _from = require("./from");
var _empty = require("./empty");
function using(resourceFactory, observableFactory) {
    return new _observable.Observable(function(subscriber) {
        var resource;
        try {
            resource = resourceFactory();
        } catch (err) {
            subscriber.error(err);
            return undefined;
        }
        var result;
        try {
            result = observableFactory(resource);
        } catch (err1) {
            subscriber.error(err1);
            return undefined;
        }
        var source = result ? _from.from(result) : _empty.EMPTY;
        var subscription = source.subscribe(subscriber);
        return function() {
            subscription.unsubscribe();
            if (resource) resource.unsubscribe();
        };
    });
}

},{"../Observable":"1asgn","./from":"iYTWI","./empty":"d0sAg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cw7ce":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zip", ()=>zip
);
parcelHelpers.export(exports, "ZipOperator", ()=>ZipOperator
);
parcelHelpers.export(exports, "ZipSubscriber", ()=>ZipSubscriber
);
/** PURE_IMPORTS_START tslib,_fromArray,_util_isArray,_Subscriber,_.._internal_symbol_iterator,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _fromArray = require("./fromArray");
var _isArray = require("../util/isArray");
var _subscriber = require("../Subscriber");
var _iterator = require("../../internal/symbol/iterator");
var _innerSubscribe = require("../innerSubscribe");
function zip() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    var resultSelector = observables[observables.length - 1];
    if (typeof resultSelector === 'function') observables.pop();
    return _fromArray.fromArray(observables, undefined).lift(new ZipOperator(resultSelector));
}
var ZipOperator = /*@__PURE__*/ function() {
    function ZipOperator1(resultSelector) {
        this.resultSelector = resultSelector;
    }
    ZipOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new ZipSubscriber(subscriber, this.resultSelector));
    };
    return ZipOperator1;
}();
var ZipSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(ZipSubscriber1, _super);
    function ZipSubscriber1(destination, resultSelector, values) {
        if (values === void 0) values = Object.create(null);
        var _this = _super.call(this, destination) || this;
        _this.resultSelector = resultSelector;
        _this.iterators = [];
        _this.active = 0;
        _this.resultSelector = typeof resultSelector === 'function' ? resultSelector : undefined;
        return _this;
    }
    ZipSubscriber1.prototype._next = function(value) {
        var iterators = this.iterators;
        if (_isArray.isArray(value)) iterators.push(new StaticArrayIterator(value));
        else if (typeof value[_iterator.iterator] === 'function') iterators.push(new StaticIterator(value[_iterator.iterator]()));
        else iterators.push(new ZipBufferIterator(this.destination, this, value));
    };
    ZipSubscriber1.prototype._complete = function() {
        var iterators = this.iterators;
        var len = iterators.length;
        this.unsubscribe();
        if (len === 0) {
            this.destination.complete();
            return;
        }
        this.active = len;
        for(var i = 0; i < len; i++){
            var iterator = iterators[i];
            if (iterator.stillUnsubscribed) {
                var destination = this.destination;
                destination.add(iterator.subscribe());
            } else this.active--;
        }
    };
    ZipSubscriber1.prototype.notifyInactive = function() {
        this.active--;
        if (this.active === 0) this.destination.complete();
    };
    ZipSubscriber1.prototype.checkIterators = function() {
        var iterators = this.iterators;
        var len = iterators.length;
        var destination = this.destination;
        for(var i = 0; i < len; i++){
            var iterator = iterators[i];
            if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) return;
        }
        var shouldComplete = false;
        var args = [];
        for(var i = 0; i < len; i++){
            var iterator = iterators[i];
            var result = iterator.next();
            if (iterator.hasCompleted()) shouldComplete = true;
            if (result.done) {
                destination.complete();
                return;
            }
            args.push(result.value);
        }
        if (this.resultSelector) this._tryresultSelector(args);
        else destination.next(args);
        if (shouldComplete) destination.complete();
    };
    ZipSubscriber1.prototype._tryresultSelector = function(args) {
        var result;
        try {
            result = this.resultSelector.apply(this, args);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return ZipSubscriber1;
}(_subscriber.Subscriber);
var StaticIterator = /*@__PURE__*/ function() {
    function StaticIterator1(iterator) {
        this.iterator = iterator;
        this.nextResult = iterator.next();
    }
    StaticIterator1.prototype.hasValue = function() {
        return true;
    };
    StaticIterator1.prototype.next = function() {
        var result = this.nextResult;
        this.nextResult = this.iterator.next();
        return result;
    };
    StaticIterator1.prototype.hasCompleted = function() {
        var nextResult = this.nextResult;
        return Boolean(nextResult && nextResult.done);
    };
    return StaticIterator1;
}();
var StaticArrayIterator = /*@__PURE__*/ function() {
    function StaticArrayIterator1(array) {
        this.array = array;
        this.index = 0;
        this.length = 0;
        this.length = array.length;
    }
    StaticArrayIterator1.prototype[_iterator.iterator] = function() {
        return this;
    };
    StaticArrayIterator1.prototype.next = function(value) {
        var i = this.index++;
        var array = this.array;
        return i < this.length ? {
            value: array[i],
            done: false
        } : {
            value: null,
            done: true
        };
    };
    StaticArrayIterator1.prototype.hasValue = function() {
        return this.array.length > this.index;
    };
    StaticArrayIterator1.prototype.hasCompleted = function() {
        return this.array.length === this.index;
    };
    return StaticArrayIterator1;
}();
var ZipBufferIterator = /*@__PURE__*/ function(_super) {
    _tslib.__extends(ZipBufferIterator1, _super);
    function ZipBufferIterator1(destination, parent, observable) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        _this.observable = observable;
        _this.stillUnsubscribed = true;
        _this.buffer = [];
        _this.isComplete = false;
        return _this;
    }
    ZipBufferIterator1.prototype[_iterator.iterator] = function() {
        return this;
    };
    ZipBufferIterator1.prototype.next = function() {
        var buffer = this.buffer;
        if (buffer.length === 0 && this.isComplete) return {
            value: null,
            done: true
        };
        else return {
            value: buffer.shift(),
            done: false
        };
    };
    ZipBufferIterator1.prototype.hasValue = function() {
        return this.buffer.length > 0;
    };
    ZipBufferIterator1.prototype.hasCompleted = function() {
        return this.buffer.length === 0 && this.isComplete;
    };
    ZipBufferIterator1.prototype.notifyComplete = function() {
        if (this.buffer.length > 0) {
            this.isComplete = true;
            this.parent.notifyInactive();
        } else this.destination.complete();
    };
    ZipBufferIterator1.prototype.notifyNext = function(innerValue) {
        this.buffer.push(innerValue);
        this.parent.checkIterators();
    };
    ZipBufferIterator1.prototype.subscribe = function() {
        return _innerSubscribe.innerSubscribe(this.observable, new _innerSubscribe.SimpleInnerSubscriber(this));
    };
    return ZipBufferIterator1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","./fromArray":"fv7fx","../util/isArray":"7twlV","../Subscriber":"bwPOT","../../internal/symbol/iterator":"24vi3","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hZ5Xz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "audit", ()=>_audit.audit
);
parcelHelpers.export(exports, "auditTime", ()=>_auditTime.auditTime
);
parcelHelpers.export(exports, "buffer", ()=>_buffer.buffer
);
parcelHelpers.export(exports, "bufferCount", ()=>_bufferCount.bufferCount
);
parcelHelpers.export(exports, "bufferTime", ()=>_bufferTime.bufferTime
);
parcelHelpers.export(exports, "bufferToggle", ()=>_bufferToggle.bufferToggle
);
parcelHelpers.export(exports, "bufferWhen", ()=>_bufferWhen.bufferWhen
);
parcelHelpers.export(exports, "catchError", ()=>_catchError.catchError
);
parcelHelpers.export(exports, "combineAll", ()=>_combineAll.combineAll
);
parcelHelpers.export(exports, "combineLatest", ()=>_combineLatest.combineLatest
);
parcelHelpers.export(exports, "concat", ()=>_concat.concat
);
parcelHelpers.export(exports, "concatAll", ()=>_concatAll.concatAll
);
parcelHelpers.export(exports, "concatMap", ()=>_concatMap.concatMap
);
parcelHelpers.export(exports, "concatMapTo", ()=>_concatMapTo.concatMapTo
);
parcelHelpers.export(exports, "count", ()=>_count.count
);
parcelHelpers.export(exports, "debounce", ()=>_debounce.debounce
);
parcelHelpers.export(exports, "debounceTime", ()=>_debounceTime.debounceTime
);
parcelHelpers.export(exports, "defaultIfEmpty", ()=>_defaultIfEmpty.defaultIfEmpty
);
parcelHelpers.export(exports, "delay", ()=>_delay.delay
);
parcelHelpers.export(exports, "delayWhen", ()=>_delayWhen.delayWhen
);
parcelHelpers.export(exports, "dematerialize", ()=>_dematerialize.dematerialize
);
parcelHelpers.export(exports, "distinct", ()=>_distinct.distinct
);
parcelHelpers.export(exports, "distinctUntilChanged", ()=>_distinctUntilChanged.distinctUntilChanged
);
parcelHelpers.export(exports, "distinctUntilKeyChanged", ()=>_distinctUntilKeyChanged.distinctUntilKeyChanged
);
parcelHelpers.export(exports, "elementAt", ()=>_elementAt.elementAt
);
parcelHelpers.export(exports, "endWith", ()=>_endWith.endWith
);
parcelHelpers.export(exports, "every", ()=>_every.every
);
parcelHelpers.export(exports, "exhaust", ()=>_exhaust.exhaust
);
parcelHelpers.export(exports, "exhaustMap", ()=>_exhaustMap.exhaustMap
);
parcelHelpers.export(exports, "expand", ()=>_expand.expand
);
parcelHelpers.export(exports, "filter", ()=>_filter.filter
);
parcelHelpers.export(exports, "finalize", ()=>_finalize.finalize
);
parcelHelpers.export(exports, "find", ()=>_find.find
);
parcelHelpers.export(exports, "findIndex", ()=>_findIndex.findIndex
);
parcelHelpers.export(exports, "first", ()=>_first.first
);
parcelHelpers.export(exports, "groupBy", ()=>_groupBy.groupBy
);
parcelHelpers.export(exports, "ignoreElements", ()=>_ignoreElements.ignoreElements
);
parcelHelpers.export(exports, "isEmpty", ()=>_isEmpty.isEmpty
);
parcelHelpers.export(exports, "last", ()=>_last.last
);
parcelHelpers.export(exports, "map", ()=>_map.map
);
parcelHelpers.export(exports, "mapTo", ()=>_mapTo.mapTo
);
parcelHelpers.export(exports, "materialize", ()=>_materialize.materialize
);
parcelHelpers.export(exports, "max", ()=>_max.max
);
parcelHelpers.export(exports, "merge", ()=>_merge.merge
);
parcelHelpers.export(exports, "mergeAll", ()=>_mergeAll.mergeAll
);
parcelHelpers.export(exports, "mergeMap", ()=>_mergeMap.mergeMap
);
parcelHelpers.export(exports, "flatMap", ()=>_mergeMap.flatMap
);
parcelHelpers.export(exports, "mergeMapTo", ()=>_mergeMapTo.mergeMapTo
);
parcelHelpers.export(exports, "mergeScan", ()=>_mergeScan.mergeScan
);
parcelHelpers.export(exports, "min", ()=>_min.min
);
parcelHelpers.export(exports, "multicast", ()=>_multicast.multicast
);
parcelHelpers.export(exports, "observeOn", ()=>_observeOn.observeOn
);
parcelHelpers.export(exports, "onErrorResumeNext", ()=>_onErrorResumeNext.onErrorResumeNext
);
parcelHelpers.export(exports, "pairwise", ()=>_pairwise.pairwise
);
parcelHelpers.export(exports, "partition", ()=>_partition.partition
);
parcelHelpers.export(exports, "pluck", ()=>_pluck.pluck
);
parcelHelpers.export(exports, "publish", ()=>_publish.publish
);
parcelHelpers.export(exports, "publishBehavior", ()=>_publishBehavior.publishBehavior
);
parcelHelpers.export(exports, "publishLast", ()=>_publishLast.publishLast
);
parcelHelpers.export(exports, "publishReplay", ()=>_publishReplay.publishReplay
);
parcelHelpers.export(exports, "race", ()=>_race.race
);
parcelHelpers.export(exports, "reduce", ()=>_reduce.reduce
);
parcelHelpers.export(exports, "repeat", ()=>_repeat.repeat
);
parcelHelpers.export(exports, "repeatWhen", ()=>_repeatWhen.repeatWhen
);
parcelHelpers.export(exports, "retry", ()=>_retry.retry
);
parcelHelpers.export(exports, "retryWhen", ()=>_retryWhen.retryWhen
);
parcelHelpers.export(exports, "refCount", ()=>_refCount.refCount
);
parcelHelpers.export(exports, "sample", ()=>_sample.sample
);
parcelHelpers.export(exports, "sampleTime", ()=>_sampleTime.sampleTime
);
parcelHelpers.export(exports, "scan", ()=>_scan.scan
);
parcelHelpers.export(exports, "sequenceEqual", ()=>_sequenceEqual.sequenceEqual
);
parcelHelpers.export(exports, "share", ()=>_share.share
);
parcelHelpers.export(exports, "shareReplay", ()=>_shareReplay.shareReplay
);
parcelHelpers.export(exports, "single", ()=>_single.single
);
parcelHelpers.export(exports, "skip", ()=>_skip.skip
);
parcelHelpers.export(exports, "skipLast", ()=>_skipLast.skipLast
);
parcelHelpers.export(exports, "skipUntil", ()=>_skipUntil.skipUntil
);
parcelHelpers.export(exports, "skipWhile", ()=>_skipWhile.skipWhile
);
parcelHelpers.export(exports, "startWith", ()=>_startWith.startWith
);
parcelHelpers.export(exports, "subscribeOn", ()=>_subscribeOn.subscribeOn
);
parcelHelpers.export(exports, "switchAll", ()=>_switchAll.switchAll
);
parcelHelpers.export(exports, "switchMap", ()=>_switchMap.switchMap
);
parcelHelpers.export(exports, "switchMapTo", ()=>_switchMapTo.switchMapTo
);
parcelHelpers.export(exports, "take", ()=>_take.take
);
parcelHelpers.export(exports, "takeLast", ()=>_takeLast.takeLast
);
parcelHelpers.export(exports, "takeUntil", ()=>_takeUntil.takeUntil
);
parcelHelpers.export(exports, "takeWhile", ()=>_takeWhile.takeWhile
);
parcelHelpers.export(exports, "tap", ()=>_tap.tap
);
parcelHelpers.export(exports, "throttle", ()=>_throttle.throttle
);
parcelHelpers.export(exports, "throttleTime", ()=>_throttleTime.throttleTime
);
parcelHelpers.export(exports, "throwIfEmpty", ()=>_throwIfEmpty.throwIfEmpty
);
parcelHelpers.export(exports, "timeInterval", ()=>_timeInterval.timeInterval
);
parcelHelpers.export(exports, "timeout", ()=>_timeout.timeout
);
parcelHelpers.export(exports, "timeoutWith", ()=>_timeoutWith.timeoutWith
);
parcelHelpers.export(exports, "timestamp", ()=>_timestamp.timestamp
);
parcelHelpers.export(exports, "toArray", ()=>_toArray.toArray
);
parcelHelpers.export(exports, "window", ()=>_window.window
);
parcelHelpers.export(exports, "windowCount", ()=>_windowCount.windowCount
);
parcelHelpers.export(exports, "windowTime", ()=>_windowTime.windowTime
);
parcelHelpers.export(exports, "windowToggle", ()=>_windowToggle.windowToggle
);
parcelHelpers.export(exports, "windowWhen", ()=>_windowWhen.windowWhen
);
parcelHelpers.export(exports, "withLatestFrom", ()=>_withLatestFrom.withLatestFrom
);
parcelHelpers.export(exports, "zip", ()=>_zip.zip
);
parcelHelpers.export(exports, "zipAll", ()=>_zipAll.zipAll
);
var _audit = require("../internal/operators/audit");
var _auditTime = require("../internal/operators/auditTime");
var _buffer = require("../internal/operators/buffer");
var _bufferCount = require("../internal/operators/bufferCount");
var _bufferTime = require("../internal/operators/bufferTime");
var _bufferToggle = require("../internal/operators/bufferToggle");
var _bufferWhen = require("../internal/operators/bufferWhen");
var _catchError = require("../internal/operators/catchError");
var _combineAll = require("../internal/operators/combineAll");
var _combineLatest = require("../internal/operators/combineLatest");
var _concat = require("../internal/operators/concat");
var _concatAll = require("../internal/operators/concatAll");
var _concatMap = require("../internal/operators/concatMap");
var _concatMapTo = require("../internal/operators/concatMapTo");
var _count = require("../internal/operators/count");
var _debounce = require("../internal/operators/debounce");
var _debounceTime = require("../internal/operators/debounceTime");
var _defaultIfEmpty = require("../internal/operators/defaultIfEmpty");
var _delay = require("../internal/operators/delay");
var _delayWhen = require("../internal/operators/delayWhen");
var _dematerialize = require("../internal/operators/dematerialize");
var _distinct = require("../internal/operators/distinct");
var _distinctUntilChanged = require("../internal/operators/distinctUntilChanged");
var _distinctUntilKeyChanged = require("../internal/operators/distinctUntilKeyChanged");
var _elementAt = require("../internal/operators/elementAt");
var _endWith = require("../internal/operators/endWith");
var _every = require("../internal/operators/every");
var _exhaust = require("../internal/operators/exhaust");
var _exhaustMap = require("../internal/operators/exhaustMap");
var _expand = require("../internal/operators/expand");
var _filter = require("../internal/operators/filter");
var _finalize = require("../internal/operators/finalize");
var _find = require("../internal/operators/find");
var _findIndex = require("../internal/operators/findIndex");
var _first = require("../internal/operators/first");
var _groupBy = require("../internal/operators/groupBy");
var _ignoreElements = require("../internal/operators/ignoreElements");
var _isEmpty = require("../internal/operators/isEmpty");
var _last = require("../internal/operators/last");
var _map = require("../internal/operators/map");
var _mapTo = require("../internal/operators/mapTo");
var _materialize = require("../internal/operators/materialize");
var _max = require("../internal/operators/max");
var _merge = require("../internal/operators/merge");
var _mergeAll = require("../internal/operators/mergeAll");
var _mergeMap = require("../internal/operators/mergeMap");
var _mergeMapTo = require("../internal/operators/mergeMapTo");
var _mergeScan = require("../internal/operators/mergeScan");
var _min = require("../internal/operators/min");
var _multicast = require("../internal/operators/multicast");
var _observeOn = require("../internal/operators/observeOn");
var _onErrorResumeNext = require("../internal/operators/onErrorResumeNext");
var _pairwise = require("../internal/operators/pairwise");
var _partition = require("../internal/operators/partition");
var _pluck = require("../internal/operators/pluck");
var _publish = require("../internal/operators/publish");
var _publishBehavior = require("../internal/operators/publishBehavior");
var _publishLast = require("../internal/operators/publishLast");
var _publishReplay = require("../internal/operators/publishReplay");
var _race = require("../internal/operators/race");
var _reduce = require("../internal/operators/reduce");
var _repeat = require("../internal/operators/repeat");
var _repeatWhen = require("../internal/operators/repeatWhen");
var _retry = require("../internal/operators/retry");
var _retryWhen = require("../internal/operators/retryWhen");
var _refCount = require("../internal/operators/refCount");
var _sample = require("../internal/operators/sample");
var _sampleTime = require("../internal/operators/sampleTime");
var _scan = require("../internal/operators/scan");
var _sequenceEqual = require("../internal/operators/sequenceEqual");
var _share = require("../internal/operators/share");
var _shareReplay = require("../internal/operators/shareReplay");
var _single = require("../internal/operators/single");
var _skip = require("../internal/operators/skip");
var _skipLast = require("../internal/operators/skipLast");
var _skipUntil = require("../internal/operators/skipUntil");
var _skipWhile = require("../internal/operators/skipWhile");
var _startWith = require("../internal/operators/startWith");
var _subscribeOn = require("../internal/operators/subscribeOn");
var _switchAll = require("../internal/operators/switchAll");
var _switchMap = require("../internal/operators/switchMap");
var _switchMapTo = require("../internal/operators/switchMapTo");
var _take = require("../internal/operators/take");
var _takeLast = require("../internal/operators/takeLast");
var _takeUntil = require("../internal/operators/takeUntil");
var _takeWhile = require("../internal/operators/takeWhile");
var _tap = require("../internal/operators/tap");
var _throttle = require("../internal/operators/throttle");
var _throttleTime = require("../internal/operators/throttleTime");
var _throwIfEmpty = require("../internal/operators/throwIfEmpty");
var _timeInterval = require("../internal/operators/timeInterval");
var _timeout = require("../internal/operators/timeout");
var _timeoutWith = require("../internal/operators/timeoutWith");
var _timestamp = require("../internal/operators/timestamp");
var _toArray = require("../internal/operators/toArray");
var _window = require("../internal/operators/window");
var _windowCount = require("../internal/operators/windowCount");
var _windowTime = require("../internal/operators/windowTime");
var _windowToggle = require("../internal/operators/windowToggle");
var _windowWhen = require("../internal/operators/windowWhen");
var _withLatestFrom = require("../internal/operators/withLatestFrom");
var _zip = require("../internal/operators/zip");
var _zipAll = require("../internal/operators/zipAll");

},{"../internal/operators/audit":"eTxM1","../internal/operators/auditTime":"16Klb","../internal/operators/buffer":"3zLBW","../internal/operators/bufferCount":"gnWY8","../internal/operators/bufferTime":"ap3F6","../internal/operators/bufferToggle":"2udAn","../internal/operators/bufferWhen":"7WlUE","../internal/operators/catchError":"6fxFU","../internal/operators/combineAll":"3nmVA","../internal/operators/combineLatest":"hu2ZK","../internal/operators/concat":"ivaQZ","../internal/operators/concatAll":"kc5bR","../internal/operators/concatMap":"1BRCX","../internal/operators/concatMapTo":"51mxF","../internal/operators/count":"gO8fJ","../internal/operators/debounce":"j7SUt","../internal/operators/debounceTime":"8Jau9","../internal/operators/defaultIfEmpty":"lMGJ9","../internal/operators/delay":"knWhD","../internal/operators/delayWhen":"eyPlA","../internal/operators/dematerialize":"h517Q","../internal/operators/distinct":"fCybT","../internal/operators/distinctUntilChanged":"3u82Y","../internal/operators/distinctUntilKeyChanged":"59pQ9","../internal/operators/elementAt":"hQw9g","../internal/operators/endWith":"5bFSk","../internal/operators/every":"3kUKB","../internal/operators/exhaust":"4KE95","../internal/operators/exhaustMap":"jOJPl","../internal/operators/expand":"dx6KA","../internal/operators/filter":"eU9Jz","../internal/operators/finalize":"hjK8N","../internal/operators/find":"c7wEt","../internal/operators/findIndex":"4S5J7","../internal/operators/first":"ea0ny","../internal/operators/groupBy":"bCSbE","../internal/operators/ignoreElements":"bVSsy","../internal/operators/isEmpty":"9o33e","../internal/operators/last":"l1jPv","../internal/operators/map":"l6Oaa","../internal/operators/mapTo":"7EOk1","../internal/operators/materialize":"1mWNL","../internal/operators/max":"bbyS0","../internal/operators/merge":"f1wUw","../internal/operators/mergeAll":"alg6S","../internal/operators/mergeMap":"7pq07","../internal/operators/mergeMapTo":"80ILX","../internal/operators/mergeScan":"4c6FM","../internal/operators/min":"iPbDE","../internal/operators/multicast":"hzSi0","../internal/operators/observeOn":"eG2ED","../internal/operators/onErrorResumeNext":"eTyaR","../internal/operators/pairwise":"fvFUj","../internal/operators/partition":"1Zi3N","../internal/operators/pluck":"3C8lW","../internal/operators/publish":"fypd1","../internal/operators/publishBehavior":"cP3Ez","../internal/operators/publishLast":"M01i7","../internal/operators/publishReplay":"cP6XD","../internal/operators/race":"gmKY3","../internal/operators/reduce":"MibIn","../internal/operators/repeat":"hOIFI","../internal/operators/repeatWhen":"1SYs6","../internal/operators/retry":"6q8fc","../internal/operators/retryWhen":"1o16U","../internal/operators/refCount":"1xbxl","../internal/operators/sample":"ic8Wb","../internal/operators/sampleTime":"jBBH0","../internal/operators/scan":"jE4qp","../internal/operators/sequenceEqual":"j8MCu","../internal/operators/share":"lbj48","../internal/operators/shareReplay":"tvAj8","../internal/operators/single":"lkDIG","../internal/operators/skip":"2fYJm","../internal/operators/skipLast":"atbiS","../internal/operators/skipUntil":"ai2sW","../internal/operators/skipWhile":"4Swsg","../internal/operators/startWith":"2HMvt","../internal/operators/subscribeOn":"kLKop","../internal/operators/switchAll":"3ugub","../internal/operators/switchMap":"7idMB","../internal/operators/switchMapTo":"h4ioX","../internal/operators/take":"gEcnY","../internal/operators/takeLast":"3c1yu","../internal/operators/takeUntil":"7Hn0t","../internal/operators/takeWhile":"3Pe9Q","../internal/operators/tap":"dGqfD","../internal/operators/throttle":"4O2yf","../internal/operators/throttleTime":"hoR4c","../internal/operators/throwIfEmpty":"84X2U","../internal/operators/timeInterval":"3Uu6J","../internal/operators/timeout":"6Onr3","../internal/operators/timeoutWith":"6UOiW","../internal/operators/timestamp":"5f3hL","../internal/operators/toArray":"9Uj90","../internal/operators/window":"5NhCX","../internal/operators/windowCount":"a5ICK","../internal/operators/windowTime":"5ugzF","../internal/operators/windowToggle":"bpat2","../internal/operators/windowWhen":"d8Fma","../internal/operators/withLatestFrom":"iESLV","../internal/operators/zip":"G2eeL","../internal/operators/zipAll":"kwpTz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTxM1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "audit", ()=>audit
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function audit(durationSelector) {
    return function auditOperatorFunction(source) {
        return source.lift(new AuditOperator(durationSelector));
    };
}
var AuditOperator = /*@__PURE__*/ function() {
    function AuditOperator1(durationSelector) {
        this.durationSelector = durationSelector;
    }
    AuditOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new AuditSubscriber(subscriber, this.durationSelector));
    };
    return AuditOperator1;
}();
var AuditSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(AuditSubscriber1, _super);
    function AuditSubscriber1(destination, durationSelector) {
        var _this = _super.call(this, destination) || this;
        _this.durationSelector = durationSelector;
        _this.hasValue = false;
        return _this;
    }
    AuditSubscriber1.prototype._next = function(value) {
        this.value = value;
        this.hasValue = true;
        if (!this.throttled) {
            var duration = void 0;
            try {
                var durationSelector = this.durationSelector;
                duration = durationSelector(value);
            } catch (err) {
                return this.destination.error(err);
            }
            var innerSubscription = _innerSubscribe.innerSubscribe(duration, new _innerSubscribe.SimpleInnerSubscriber(this));
            if (!innerSubscription || innerSubscription.closed) this.clearThrottle();
            else this.add(this.throttled = innerSubscription);
        }
    };
    AuditSubscriber1.prototype.clearThrottle = function() {
        var _a = this, value = _a.value, hasValue = _a.hasValue, throttled = _a.throttled;
        if (throttled) {
            this.remove(throttled);
            this.throttled = undefined;
            throttled.unsubscribe();
        }
        if (hasValue) {
            this.value = undefined;
            this.hasValue = false;
            this.destination.next(value);
        }
    };
    AuditSubscriber1.prototype.notifyNext = function() {
        this.clearThrottle();
    };
    AuditSubscriber1.prototype.notifyComplete = function() {
        this.clearThrottle();
    };
    return AuditSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"16Klb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "auditTime", ()=>auditTime
);
/** PURE_IMPORTS_START _scheduler_async,_audit,_observable_timer PURE_IMPORTS_END */ var _async = require("../scheduler/async");
var _audit = require("./audit");
var _timer = require("../observable/timer");
function auditTime(duration, scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    return _audit.audit(function() {
        return _timer.timer(duration, scheduler);
    });
}

},{"../scheduler/async":"04lHJ","./audit":"eTxM1","../observable/timer":"yD2Dx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3zLBW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buffer", ()=>buffer
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function buffer(closingNotifier) {
    return function bufferOperatorFunction(source) {
        return source.lift(new BufferOperator(closingNotifier));
    };
}
var BufferOperator = /*@__PURE__*/ function() {
    function BufferOperator1(closingNotifier) {
        this.closingNotifier = closingNotifier;
    }
    BufferOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
    };
    return BufferOperator1;
}();
var BufferSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(BufferSubscriber1, _super);
    function BufferSubscriber1(destination, closingNotifier) {
        var _this = _super.call(this, destination) || this;
        _this.buffer = [];
        _this.add(_innerSubscribe.innerSubscribe(closingNotifier, new _innerSubscribe.SimpleInnerSubscriber(_this)));
        return _this;
    }
    BufferSubscriber1.prototype._next = function(value) {
        this.buffer.push(value);
    };
    BufferSubscriber1.prototype.notifyNext = function() {
        var buffer1 = this.buffer;
        this.buffer = [];
        this.destination.next(buffer1);
    };
    return BufferSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gnWY8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bufferCount", ()=>bufferCount
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) startBufferEvery = null;
    return function bufferCountOperatorFunction(source) {
        return source.lift(new BufferCountOperator(bufferSize, startBufferEvery));
    };
}
var BufferCountOperator = /*@__PURE__*/ function() {
    function BufferCountOperator1(bufferSize, startBufferEvery) {
        this.bufferSize = bufferSize;
        this.startBufferEvery = startBufferEvery;
        if (!startBufferEvery || bufferSize === startBufferEvery) this.subscriberClass = BufferCountSubscriber;
        else this.subscriberClass = BufferSkipCountSubscriber;
    }
    BufferCountOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new this.subscriberClass(subscriber, this.bufferSize, this.startBufferEvery));
    };
    return BufferCountOperator1;
}();
var BufferCountSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(BufferCountSubscriber1, _super);
    function BufferCountSubscriber1(destination, bufferSize) {
        var _this = _super.call(this, destination) || this;
        _this.bufferSize = bufferSize;
        _this.buffer = [];
        return _this;
    }
    BufferCountSubscriber1.prototype._next = function(value) {
        var buffer = this.buffer;
        buffer.push(value);
        if (buffer.length == this.bufferSize) {
            this.destination.next(buffer);
            this.buffer = [];
        }
    };
    BufferCountSubscriber1.prototype._complete = function() {
        var buffer = this.buffer;
        if (buffer.length > 0) this.destination.next(buffer);
        _super.prototype._complete.call(this);
    };
    return BufferCountSubscriber1;
}(_subscriber.Subscriber);
var BufferSkipCountSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(BufferSkipCountSubscriber1, _super);
    function BufferSkipCountSubscriber1(destination, bufferSize, startBufferEvery) {
        var _this = _super.call(this, destination) || this;
        _this.bufferSize = bufferSize;
        _this.startBufferEvery = startBufferEvery;
        _this.buffers = [];
        _this.count = 0;
        return _this;
    }
    BufferSkipCountSubscriber1.prototype._next = function(value) {
        var _a = this, bufferSize = _a.bufferSize, startBufferEvery = _a.startBufferEvery, buffers = _a.buffers, count = _a.count;
        this.count++;
        if (count % startBufferEvery === 0) buffers.push([]);
        for(var i = buffers.length; i--;){
            var buffer = buffers[i];
            buffer.push(value);
            if (buffer.length === bufferSize) {
                buffers.splice(i, 1);
                this.destination.next(buffer);
            }
        }
    };
    BufferSkipCountSubscriber1.prototype._complete = function() {
        var _a = this, buffers = _a.buffers, destination = _a.destination;
        while(buffers.length > 0){
            var buffer = buffers.shift();
            if (buffer.length > 0) destination.next(buffer);
        }
        _super.prototype._complete.call(this);
    };
    return BufferSkipCountSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ap3F6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bufferTime", ()=>bufferTime
);
/** PURE_IMPORTS_START tslib,_scheduler_async,_Subscriber,_util_isScheduler PURE_IMPORTS_END */ var _tslib = require("tslib");
var _async = require("../scheduler/async");
var _subscriber = require("../Subscriber");
var _isScheduler = require("../util/isScheduler");
function bufferTime(bufferTimeSpan) {
    var length = arguments.length;
    var scheduler = _async.async;
    if (_isScheduler.isScheduler(arguments[arguments.length - 1])) {
        scheduler = arguments[arguments.length - 1];
        length--;
    }
    var bufferCreationInterval = null;
    if (length >= 2) bufferCreationInterval = arguments[1];
    var maxBufferSize = Number.POSITIVE_INFINITY;
    if (length >= 3) maxBufferSize = arguments[2];
    return function bufferTimeOperatorFunction(source) {
        return source.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
    };
}
var BufferTimeOperator = /*@__PURE__*/ function() {
    function BufferTimeOperator1(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        this.bufferTimeSpan = bufferTimeSpan;
        this.bufferCreationInterval = bufferCreationInterval;
        this.maxBufferSize = maxBufferSize;
        this.scheduler = scheduler;
    }
    BufferTimeOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
    };
    return BufferTimeOperator1;
}();
var Context = /*@__PURE__*/ function() {
    function Context1() {
        this.buffer = [];
    }
    return Context1;
}();
var BufferTimeSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(BufferTimeSubscriber1, _super);
    function BufferTimeSubscriber1(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.bufferTimeSpan = bufferTimeSpan;
        _this.bufferCreationInterval = bufferCreationInterval;
        _this.maxBufferSize = maxBufferSize;
        _this.scheduler = scheduler;
        _this.contexts = [];
        var context = _this.openContext();
        _this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
        if (_this.timespanOnly) {
            var timeSpanOnlyState = {
                subscriber: _this,
                context: context,
                bufferTimeSpan: bufferTimeSpan
            };
            _this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        } else {
            var closeState = {
                subscriber: _this,
                context: context
            };
            var creationState = {
                bufferTimeSpan: bufferTimeSpan,
                bufferCreationInterval: bufferCreationInterval,
                subscriber: _this,
                scheduler: scheduler
            };
            _this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
            _this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
        }
        return _this;
    }
    BufferTimeSubscriber1.prototype._next = function(value) {
        var contexts = this.contexts;
        var len = contexts.length;
        var filledBufferContext;
        for(var i = 0; i < len; i++){
            var context_1 = contexts[i];
            var buffer = context_1.buffer;
            buffer.push(value);
            if (buffer.length == this.maxBufferSize) filledBufferContext = context_1;
        }
        if (filledBufferContext) this.onBufferFull(filledBufferContext);
    };
    BufferTimeSubscriber1.prototype._error = function(err) {
        this.contexts.length = 0;
        _super.prototype._error.call(this, err);
    };
    BufferTimeSubscriber1.prototype._complete = function() {
        var _a = this, contexts = _a.contexts, destination = _a.destination;
        while(contexts.length > 0){
            var context_2 = contexts.shift();
            destination.next(context_2.buffer);
        }
        _super.prototype._complete.call(this);
    };
    BufferTimeSubscriber1.prototype._unsubscribe = function() {
        this.contexts = null;
    };
    BufferTimeSubscriber1.prototype.onBufferFull = function(context) {
        this.closeContext(context);
        var closeAction = context.closeAction;
        closeAction.unsubscribe();
        this.remove(closeAction);
        if (!this.closed && this.timespanOnly) {
            context = this.openContext();
            var bufferTimeSpan = this.bufferTimeSpan;
            var timeSpanOnlyState = {
                subscriber: this,
                context: context,
                bufferTimeSpan: bufferTimeSpan
            };
            this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
        }
    };
    BufferTimeSubscriber1.prototype.openContext = function() {
        var context = new Context();
        this.contexts.push(context);
        return context;
    };
    BufferTimeSubscriber1.prototype.closeContext = function(context) {
        this.destination.next(context.buffer);
        var contexts = this.contexts;
        var spliceIndex = contexts ? contexts.indexOf(context) : -1;
        if (spliceIndex >= 0) contexts.splice(contexts.indexOf(context), 1);
    };
    return BufferTimeSubscriber1;
}(_subscriber.Subscriber);
function dispatchBufferTimeSpanOnly(state) {
    var subscriber = state.subscriber;
    var prevContext = state.context;
    if (prevContext) subscriber.closeContext(prevContext);
    if (!subscriber.closed) {
        state.context = subscriber.openContext();
        state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
    }
}
function dispatchBufferCreation(state) {
    var bufferCreationInterval = state.bufferCreationInterval, bufferTimeSpan = state.bufferTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler;
    var context = subscriber.openContext();
    var action = this;
    if (!subscriber.closed) {
        subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, {
            subscriber: subscriber,
            context: context
        }));
        action.schedule(state, bufferCreationInterval);
    }
}
function dispatchBufferClose(arg) {
    var subscriber = arg.subscriber, context = arg.context;
    subscriber.closeContext(context);
}

},{"tslib":"lRdW5","../scheduler/async":"04lHJ","../Subscriber":"bwPOT","../util/isScheduler":"8B5Pf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2udAn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bufferToggle", ()=>bufferToggle
);
/** PURE_IMPORTS_START tslib,_Subscription,_util_subscribeToResult,_OuterSubscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscription = require("../Subscription");
var _subscribeToResult = require("../util/subscribeToResult");
var _outerSubscriber = require("../OuterSubscriber");
function bufferToggle(openings, closingSelector) {
    return function bufferToggleOperatorFunction(source) {
        return source.lift(new BufferToggleOperator(openings, closingSelector));
    };
}
var BufferToggleOperator = /*@__PURE__*/ function() {
    function BufferToggleOperator1(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    BufferToggleOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return BufferToggleOperator1;
}();
var BufferToggleSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(BufferToggleSubscriber1, _super);
    function BufferToggleSubscriber1(destination, openings, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.closingSelector = closingSelector;
        _this.contexts = [];
        _this.add(_subscribeToResult.subscribeToResult(_this, openings));
        return _this;
    }
    BufferToggleSubscriber1.prototype._next = function(value) {
        var contexts = this.contexts;
        var len = contexts.length;
        for(var i = 0; i < len; i++)contexts[i].buffer.push(value);
    };
    BufferToggleSubscriber1.prototype._error = function(err) {
        var contexts = this.contexts;
        while(contexts.length > 0){
            var context_1 = contexts.shift();
            context_1.subscription.unsubscribe();
            context_1.buffer = null;
            context_1.subscription = null;
        }
        this.contexts = null;
        _super.prototype._error.call(this, err);
    };
    BufferToggleSubscriber1.prototype._complete = function() {
        var contexts = this.contexts;
        while(contexts.length > 0){
            var context_2 = contexts.shift();
            this.destination.next(context_2.buffer);
            context_2.subscription.unsubscribe();
            context_2.buffer = null;
            context_2.subscription = null;
        }
        this.contexts = null;
        _super.prototype._complete.call(this);
    };
    BufferToggleSubscriber1.prototype.notifyNext = function(outerValue, innerValue) {
        outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
    };
    BufferToggleSubscriber1.prototype.notifyComplete = function(innerSub) {
        this.closeBuffer(innerSub.context);
    };
    BufferToggleSubscriber1.prototype.openBuffer = function(value) {
        try {
            var closingSelector = this.closingSelector;
            var closingNotifier = closingSelector.call(this, value);
            if (closingNotifier) this.trySubscribe(closingNotifier);
        } catch (err) {
            this._error(err);
        }
    };
    BufferToggleSubscriber1.prototype.closeBuffer = function(context) {
        var contexts = this.contexts;
        if (contexts && context) {
            var buffer = context.buffer, subscription = context.subscription;
            this.destination.next(buffer);
            contexts.splice(contexts.indexOf(context), 1);
            this.remove(subscription);
            subscription.unsubscribe();
        }
    };
    BufferToggleSubscriber1.prototype.trySubscribe = function(closingNotifier) {
        var contexts = this.contexts;
        var buffer = [];
        var subscription = new _subscription.Subscription();
        var context = {
            buffer: buffer,
            subscription: subscription
        };
        contexts.push(context);
        var innerSubscription = _subscribeToResult.subscribeToResult(this, closingNotifier, context);
        if (!innerSubscription || innerSubscription.closed) this.closeBuffer(context);
        else {
            innerSubscription.context = context;
            this.add(innerSubscription);
            subscription.add(innerSubscription);
        }
    };
    return BufferToggleSubscriber1;
}(_outerSubscriber.OuterSubscriber);

},{"tslib":"lRdW5","../Subscription":"7CEw9","../util/subscribeToResult":"iK8gJ","../OuterSubscriber":"fBdeN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7WlUE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bufferWhen", ()=>bufferWhen
);
/** PURE_IMPORTS_START tslib,_Subscription,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscription = require("../Subscription");
var _innerSubscribe = require("../innerSubscribe");
function bufferWhen(closingSelector) {
    return function(source) {
        return source.lift(new BufferWhenOperator(closingSelector));
    };
}
var BufferWhenOperator = /*@__PURE__*/ function() {
    function BufferWhenOperator1(closingSelector) {
        this.closingSelector = closingSelector;
    }
    BufferWhenOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
    };
    return BufferWhenOperator1;
}();
var BufferWhenSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(BufferWhenSubscriber1, _super);
    function BufferWhenSubscriber1(destination, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.closingSelector = closingSelector;
        _this.subscribing = false;
        _this.openBuffer();
        return _this;
    }
    BufferWhenSubscriber1.prototype._next = function(value) {
        this.buffer.push(value);
    };
    BufferWhenSubscriber1.prototype._complete = function() {
        var buffer = this.buffer;
        if (buffer) this.destination.next(buffer);
        _super.prototype._complete.call(this);
    };
    BufferWhenSubscriber1.prototype._unsubscribe = function() {
        this.buffer = undefined;
        this.subscribing = false;
    };
    BufferWhenSubscriber1.prototype.notifyNext = function() {
        this.openBuffer();
    };
    BufferWhenSubscriber1.prototype.notifyComplete = function() {
        if (this.subscribing) this.complete();
        else this.openBuffer();
    };
    BufferWhenSubscriber1.prototype.openBuffer = function() {
        var closingSubscription = this.closingSubscription;
        if (closingSubscription) {
            this.remove(closingSubscription);
            closingSubscription.unsubscribe();
        }
        var buffer = this.buffer;
        if (this.buffer) this.destination.next(buffer);
        this.buffer = [];
        var closingNotifier;
        try {
            var closingSelector = this.closingSelector;
            closingNotifier = closingSelector();
        } catch (err) {
            return this.error(err);
        }
        closingSubscription = new _subscription.Subscription();
        this.closingSubscription = closingSubscription;
        this.add(closingSubscription);
        this.subscribing = true;
        closingSubscription.add(_innerSubscribe.innerSubscribe(closingNotifier, new _innerSubscribe.SimpleInnerSubscriber(this)));
        this.subscribing = false;
    };
    return BufferWhenSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../Subscription":"7CEw9","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6fxFU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "catchError", ()=>catchError
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function catchError(selector) {
    return function catchErrorOperatorFunction(source) {
        var operator = new CatchOperator(selector);
        var caught = source.lift(operator);
        return operator.caught = caught;
    };
}
var CatchOperator = /*@__PURE__*/ function() {
    function CatchOperator1(selector) {
        this.selector = selector;
    }
    CatchOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
    };
    return CatchOperator1;
}();
var CatchSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(CatchSubscriber1, _super);
    function CatchSubscriber1(destination, selector, caught) {
        var _this = _super.call(this, destination) || this;
        _this.selector = selector;
        _this.caught = caught;
        return _this;
    }
    CatchSubscriber1.prototype.error = function(err) {
        if (!this.isStopped) {
            var result = void 0;
            try {
                result = this.selector(err, this.caught);
            } catch (err2) {
                _super.prototype.error.call(this, err2);
                return;
            }
            this._unsubscribeAndRecycle();
            var innerSubscriber = new _innerSubscribe.SimpleInnerSubscriber(this);
            this.add(innerSubscriber);
            var innerSubscription = _innerSubscribe.innerSubscribe(result, innerSubscriber);
            if (innerSubscription !== innerSubscriber) this.add(innerSubscription);
        }
    };
    return CatchSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3nmVA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "combineAll", ()=>combineAll
);
/** PURE_IMPORTS_START _observable_combineLatest PURE_IMPORTS_END */ var _combineLatest = require("../observable/combineLatest");
function combineAll(project) {
    return function(source) {
        return source.lift(new _combineLatest.CombineLatestOperator(project));
    };
}

},{"../observable/combineLatest":"hrt6M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hu2ZK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "combineLatest", ()=>combineLatest
);
/** PURE_IMPORTS_START _util_isArray,_observable_combineLatest,_observable_from PURE_IMPORTS_END */ var _isArray = require("../util/isArray");
var _combineLatest = require("../observable/combineLatest");
var _from = require("../observable/from");
var none = {};
function combineLatest() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    var project = null;
    if (typeof observables[observables.length - 1] === 'function') project = observables.pop();
    if (observables.length === 1 && _isArray.isArray(observables[0])) observables = observables[0].slice();
    return function(source) {
        return source.lift.call(_from.from([
            source
        ].concat(observables)), new _combineLatest.CombineLatestOperator(project));
    };
}

},{"../util/isArray":"7twlV","../observable/combineLatest":"hrt6M","../observable/from":"iYTWI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ivaQZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concat", ()=>concat
);
/** PURE_IMPORTS_START _observable_concat PURE_IMPORTS_END */ var _concat = require("../observable/concat");
function concat() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    return function(source) {
        return source.lift.call(_concat.concat.apply(void 0, [
            source
        ].concat(observables)));
    };
}

},{"../observable/concat":"4CcsK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1BRCX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concatMap", ()=>concatMap
);
/** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */ var _mergeMap = require("./mergeMap");
function concatMap(project, resultSelector) {
    return _mergeMap.mergeMap(project, resultSelector, 1);
}

},{"./mergeMap":"7pq07","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"51mxF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "concatMapTo", ()=>concatMapTo
);
/** PURE_IMPORTS_START _concatMap PURE_IMPORTS_END */ var _concatMap = require("./concatMap");
function concatMapTo(innerObservable, resultSelector) {
    return _concatMap.concatMap(function() {
        return innerObservable;
    }, resultSelector);
}

},{"./concatMap":"1BRCX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gO8fJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "count", ()=>count
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function count(predicate) {
    return function(source) {
        return source.lift(new CountOperator(predicate, source));
    };
}
var CountOperator = /*@__PURE__*/ function() {
    function CountOperator1(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    CountOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
    };
    return CountOperator1;
}();
var CountSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(CountSubscriber1, _super);
    function CountSubscriber1(destination, predicate, source) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.source = source;
        _this.count = 0;
        _this.index = 0;
        return _this;
    }
    CountSubscriber1.prototype._next = function(value) {
        if (this.predicate) this._tryPredicate(value);
        else this.count++;
    };
    CountSubscriber1.prototype._tryPredicate = function(value) {
        var result;
        try {
            result = this.predicate(value, this.index++, this.source);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) this.count++;
    };
    CountSubscriber1.prototype._complete = function() {
        this.destination.next(this.count);
        this.destination.complete();
    };
    return CountSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j7SUt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounce", ()=>debounce
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function debounce(durationSelector) {
    return function(source) {
        return source.lift(new DebounceOperator(durationSelector));
    };
}
var DebounceOperator = /*@__PURE__*/ function() {
    function DebounceOperator1(durationSelector) {
        this.durationSelector = durationSelector;
    }
    DebounceOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
    };
    return DebounceOperator1;
}();
var DebounceSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(DebounceSubscriber1, _super);
    function DebounceSubscriber1(destination, durationSelector) {
        var _this = _super.call(this, destination) || this;
        _this.durationSelector = durationSelector;
        _this.hasValue = false;
        return _this;
    }
    DebounceSubscriber1.prototype._next = function(value) {
        try {
            var result = this.durationSelector.call(this, value);
            if (result) this._tryNext(value, result);
        } catch (err) {
            this.destination.error(err);
        }
    };
    DebounceSubscriber1.prototype._complete = function() {
        this.emitValue();
        this.destination.complete();
    };
    DebounceSubscriber1.prototype._tryNext = function(value, duration) {
        var subscription = this.durationSubscription;
        this.value = value;
        this.hasValue = true;
        if (subscription) {
            subscription.unsubscribe();
            this.remove(subscription);
        }
        subscription = _innerSubscribe.innerSubscribe(duration, new _innerSubscribe.SimpleInnerSubscriber(this));
        if (subscription && !subscription.closed) this.add(this.durationSubscription = subscription);
    };
    DebounceSubscriber1.prototype.notifyNext = function() {
        this.emitValue();
    };
    DebounceSubscriber1.prototype.notifyComplete = function() {
        this.emitValue();
    };
    DebounceSubscriber1.prototype.emitValue = function() {
        if (this.hasValue) {
            var value = this.value;
            var subscription = this.durationSubscription;
            if (subscription) {
                this.durationSubscription = undefined;
                subscription.unsubscribe();
                this.remove(subscription);
            }
            this.value = undefined;
            this.hasValue = false;
            _super.prototype._next.call(this, value);
        }
    };
    return DebounceSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Jau9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "debounceTime", ()=>debounceTime
);
/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _async = require("../scheduler/async");
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    return function(source) {
        return source.lift(new DebounceTimeOperator(dueTime, scheduler));
    };
}
var DebounceTimeOperator = /*@__PURE__*/ function() {
    function DebounceTimeOperator1(dueTime, scheduler) {
        this.dueTime = dueTime;
        this.scheduler = scheduler;
    }
    DebounceTimeOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
    };
    return DebounceTimeOperator1;
}();
var DebounceTimeSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(DebounceTimeSubscriber1, _super);
    function DebounceTimeSubscriber1(destination, dueTime, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.dueTime = dueTime;
        _this.scheduler = scheduler;
        _this.debouncedSubscription = null;
        _this.lastValue = null;
        _this.hasValue = false;
        return _this;
    }
    DebounceTimeSubscriber1.prototype._next = function(value) {
        this.clearDebounce();
        this.lastValue = value;
        this.hasValue = true;
        this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
    };
    DebounceTimeSubscriber1.prototype._complete = function() {
        this.debouncedNext();
        this.destination.complete();
    };
    DebounceTimeSubscriber1.prototype.debouncedNext = function() {
        this.clearDebounce();
        if (this.hasValue) {
            var lastValue = this.lastValue;
            this.lastValue = null;
            this.hasValue = false;
            this.destination.next(lastValue);
        }
    };
    DebounceTimeSubscriber1.prototype.clearDebounce = function() {
        var debouncedSubscription = this.debouncedSubscription;
        if (debouncedSubscription !== null) {
            this.remove(debouncedSubscription);
            debouncedSubscription.unsubscribe();
            this.debouncedSubscription = null;
        }
    };
    return DebounceTimeSubscriber1;
}(_subscriber.Subscriber);
function dispatchNext(subscriber) {
    subscriber.debouncedNext();
}

},{"tslib":"lRdW5","../Subscriber":"bwPOT","../scheduler/async":"04lHJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lMGJ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultIfEmpty", ()=>defaultIfEmpty
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function defaultIfEmpty(defaultValue) {
    if (defaultValue === void 0) defaultValue = null;
    return function(source) {
        return source.lift(new DefaultIfEmptyOperator(defaultValue));
    };
}
var DefaultIfEmptyOperator = /*@__PURE__*/ function() {
    function DefaultIfEmptyOperator1(defaultValue) {
        this.defaultValue = defaultValue;
    }
    DefaultIfEmptyOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
    };
    return DefaultIfEmptyOperator1;
}();
var DefaultIfEmptySubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(DefaultIfEmptySubscriber1, _super);
    function DefaultIfEmptySubscriber1(destination, defaultValue) {
        var _this = _super.call(this, destination) || this;
        _this.defaultValue = defaultValue;
        _this.isEmpty = true;
        return _this;
    }
    DefaultIfEmptySubscriber1.prototype._next = function(value) {
        this.isEmpty = false;
        this.destination.next(value);
    };
    DefaultIfEmptySubscriber1.prototype._complete = function() {
        if (this.isEmpty) this.destination.next(this.defaultValue);
        this.destination.complete();
    };
    return DefaultIfEmptySubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"knWhD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "delay", ()=>delay
);
/** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_Subscriber,_Notification PURE_IMPORTS_END */ var _tslib = require("tslib");
var _async = require("../scheduler/async");
var _isDate = require("../util/isDate");
var _subscriber = require("../Subscriber");
var _notification = require("../Notification");
function delay(delay1, scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    var absoluteDelay = _isDate.isDate(delay1);
    var delayFor = absoluteDelay ? +delay1 - scheduler.now() : Math.abs(delay1);
    return function(source) {
        return source.lift(new DelayOperator(delayFor, scheduler));
    };
}
var DelayOperator = /*@__PURE__*/ function() {
    function DelayOperator1(delay2, scheduler) {
        this.delay = delay2;
        this.scheduler = scheduler;
    }
    DelayOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
    };
    return DelayOperator1;
}();
var DelaySubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(DelaySubscriber1, _super);
    function DelaySubscriber1(destination, delay3, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.delay = delay3;
        _this.scheduler = scheduler;
        _this.queue = [];
        _this.active = false;
        _this.errored = false;
        return _this;
    }
    DelaySubscriber1.dispatch = function(state) {
        var source = state.source;
        var queue = source.queue;
        var scheduler = state.scheduler;
        var destination = state.destination;
        while(queue.length > 0 && queue[0].time - scheduler.now() <= 0)queue.shift().notification.observe(destination);
        if (queue.length > 0) {
            var delay_1 = Math.max(0, queue[0].time - scheduler.now());
            this.schedule(state, delay_1);
        } else {
            this.unsubscribe();
            source.active = false;
        }
    };
    DelaySubscriber1.prototype._schedule = function(scheduler) {
        this.active = true;
        var destination = this.destination;
        destination.add(scheduler.schedule(DelaySubscriber1.dispatch, this.delay, {
            source: this,
            destination: this.destination,
            scheduler: scheduler
        }));
    };
    DelaySubscriber1.prototype.scheduleNotification = function(notification) {
        if (this.errored === true) return;
        var scheduler = this.scheduler;
        var message = new DelayMessage(scheduler.now() + this.delay, notification);
        this.queue.push(message);
        if (this.active === false) this._schedule(scheduler);
    };
    DelaySubscriber1.prototype._next = function(value) {
        this.scheduleNotification(_notification.Notification.createNext(value));
    };
    DelaySubscriber1.prototype._error = function(err) {
        this.errored = true;
        this.queue = [];
        this.destination.error(err);
        this.unsubscribe();
    };
    DelaySubscriber1.prototype._complete = function() {
        this.scheduleNotification(_notification.Notification.createComplete());
        this.unsubscribe();
    };
    return DelaySubscriber1;
}(_subscriber.Subscriber);
var DelayMessage = /*@__PURE__*/ function() {
    function DelayMessage1(time, notification) {
        this.time = time;
        this.notification = notification;
    }
    return DelayMessage1;
}();

},{"tslib":"lRdW5","../scheduler/async":"04lHJ","../util/isDate":"f7MkF","../Subscriber":"bwPOT","../Notification":"6LPyO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f7MkF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** PURE_IMPORTS_START  PURE_IMPORTS_END */ parcelHelpers.export(exports, "isDate", ()=>isDate
);
function isDate(value) {
    return value instanceof Date && !isNaN(+value);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eyPlA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "delayWhen", ()=>delayWhen
);
/** PURE_IMPORTS_START tslib,_Subscriber,_Observable,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _observable = require("../Observable");
var _outerSubscriber = require("../OuterSubscriber");
var _subscribeToResult = require("../util/subscribeToResult");
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) return function(source) {
        return new SubscriptionDelayObservable(source, subscriptionDelay).lift(new DelayWhenOperator(delayDurationSelector));
    };
    return function(source) {
        return source.lift(new DelayWhenOperator(delayDurationSelector));
    };
}
var DelayWhenOperator = /*@__PURE__*/ function() {
    function DelayWhenOperator1(delayDurationSelector) {
        this.delayDurationSelector = delayDurationSelector;
    }
    DelayWhenOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
    };
    return DelayWhenOperator1;
}();
var DelayWhenSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(DelayWhenSubscriber1, _super);
    function DelayWhenSubscriber1(destination, delayDurationSelector) {
        var _this = _super.call(this, destination) || this;
        _this.delayDurationSelector = delayDurationSelector;
        _this.completed = false;
        _this.delayNotifierSubscriptions = [];
        _this.index = 0;
        return _this;
    }
    DelayWhenSubscriber1.prototype.notifyNext = function(outerValue, _innerValue, _outerIndex, _innerIndex, innerSub) {
        this.destination.next(outerValue);
        this.removeSubscription(innerSub);
        this.tryComplete();
    };
    DelayWhenSubscriber1.prototype.notifyError = function(error, innerSub) {
        this._error(error);
    };
    DelayWhenSubscriber1.prototype.notifyComplete = function(innerSub) {
        var value = this.removeSubscription(innerSub);
        if (value) this.destination.next(value);
        this.tryComplete();
    };
    DelayWhenSubscriber1.prototype._next = function(value) {
        var index = this.index++;
        try {
            var delayNotifier = this.delayDurationSelector(value, index);
            if (delayNotifier) this.tryDelay(delayNotifier, value);
        } catch (err) {
            this.destination.error(err);
        }
    };
    DelayWhenSubscriber1.prototype._complete = function() {
        this.completed = true;
        this.tryComplete();
        this.unsubscribe();
    };
    DelayWhenSubscriber1.prototype.removeSubscription = function(subscription) {
        subscription.unsubscribe();
        var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
        if (subscriptionIdx !== -1) this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
        return subscription.outerValue;
    };
    DelayWhenSubscriber1.prototype.tryDelay = function(delayNotifier, value) {
        var notifierSubscription = _subscribeToResult.subscribeToResult(this, delayNotifier, value);
        if (notifierSubscription && !notifierSubscription.closed) {
            var destination = this.destination;
            destination.add(notifierSubscription);
            this.delayNotifierSubscriptions.push(notifierSubscription);
        }
    };
    DelayWhenSubscriber1.prototype.tryComplete = function() {
        if (this.completed && this.delayNotifierSubscriptions.length === 0) this.destination.complete();
    };
    return DelayWhenSubscriber1;
}(_outerSubscriber.OuterSubscriber);
var SubscriptionDelayObservable = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SubscriptionDelayObservable1, _super);
    function SubscriptionDelayObservable1(source, subscriptionDelay) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subscriptionDelay = subscriptionDelay;
        return _this;
    }
    SubscriptionDelayObservable1.prototype._subscribe = function(subscriber) {
        this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
    };
    return SubscriptionDelayObservable1;
}(_observable.Observable);
var SubscriptionDelaySubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SubscriptionDelaySubscriber1, _super);
    function SubscriptionDelaySubscriber1(parent, source) {
        var _this = _super.call(this) || this;
        _this.parent = parent;
        _this.source = source;
        _this.sourceSubscribed = false;
        return _this;
    }
    SubscriptionDelaySubscriber1.prototype._next = function(unused) {
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber1.prototype._error = function(err) {
        this.unsubscribe();
        this.parent.error(err);
    };
    SubscriptionDelaySubscriber1.prototype._complete = function() {
        this.unsubscribe();
        this.subscribeToSource();
    };
    SubscriptionDelaySubscriber1.prototype.subscribeToSource = function() {
        if (!this.sourceSubscribed) {
            this.sourceSubscribed = true;
            this.unsubscribe();
            this.source.subscribe(this.parent);
        }
    };
    return SubscriptionDelaySubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","../Observable":"1asgn","../OuterSubscriber":"fBdeN","../util/subscribeToResult":"iK8gJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h517Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dematerialize", ()=>dematerialize
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function dematerialize() {
    return function dematerializeOperatorFunction(source) {
        return source.lift(new DeMaterializeOperator());
    };
}
var DeMaterializeOperator = /*@__PURE__*/ function() {
    function DeMaterializeOperator1() {}
    DeMaterializeOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new DeMaterializeSubscriber(subscriber));
    };
    return DeMaterializeOperator1;
}();
var DeMaterializeSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(DeMaterializeSubscriber1, _super);
    function DeMaterializeSubscriber1(destination) {
        return _super.call(this, destination) || this;
    }
    DeMaterializeSubscriber1.prototype._next = function(value) {
        value.observe(this.destination);
    };
    return DeMaterializeSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fCybT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distinct", ()=>distinct
);
parcelHelpers.export(exports, "DistinctSubscriber", ()=>DistinctSubscriber
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function distinct(keySelector, flushes) {
    return function(source) {
        return source.lift(new DistinctOperator(keySelector, flushes));
    };
}
var DistinctOperator = /*@__PURE__*/ function() {
    function DistinctOperator1(keySelector, flushes) {
        this.keySelector = keySelector;
        this.flushes = flushes;
    }
    DistinctOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new DistinctSubscriber(subscriber, this.keySelector, this.flushes));
    };
    return DistinctOperator1;
}();
var DistinctSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(DistinctSubscriber1, _super);
    function DistinctSubscriber1(destination, keySelector, flushes) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.values = new Set();
        if (flushes) _this.add(_innerSubscribe.innerSubscribe(flushes, new _innerSubscribe.SimpleInnerSubscriber(_this)));
        return _this;
    }
    DistinctSubscriber1.prototype.notifyNext = function() {
        this.values.clear();
    };
    DistinctSubscriber1.prototype.notifyError = function(error) {
        this._error(error);
    };
    DistinctSubscriber1.prototype._next = function(value) {
        if (this.keySelector) this._useKeySelector(value);
        else this._finalizeNext(value, value);
    };
    DistinctSubscriber1.prototype._useKeySelector = function(value) {
        var key;
        var destination = this.destination;
        try {
            key = this.keySelector(value);
        } catch (err) {
            destination.error(err);
            return;
        }
        this._finalizeNext(key, value);
    };
    DistinctSubscriber1.prototype._finalizeNext = function(key, value) {
        var values = this.values;
        if (!values.has(key)) {
            values.add(key);
            this.destination.next(value);
        }
    };
    return DistinctSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3u82Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distinctUntilChanged", ()=>distinctUntilChanged
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function distinctUntilChanged(compare, keySelector) {
    return function(source) {
        return source.lift(new DistinctUntilChangedOperator(compare, keySelector));
    };
}
var DistinctUntilChangedOperator = /*@__PURE__*/ function() {
    function DistinctUntilChangedOperator1(compare, keySelector) {
        this.compare = compare;
        this.keySelector = keySelector;
    }
    DistinctUntilChangedOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
    };
    return DistinctUntilChangedOperator1;
}();
var DistinctUntilChangedSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(DistinctUntilChangedSubscriber1, _super);
    function DistinctUntilChangedSubscriber1(destination, compare, keySelector) {
        var _this = _super.call(this, destination) || this;
        _this.keySelector = keySelector;
        _this.hasKey = false;
        if (typeof compare === 'function') _this.compare = compare;
        return _this;
    }
    DistinctUntilChangedSubscriber1.prototype.compare = function(x, y) {
        return x === y;
    };
    DistinctUntilChangedSubscriber1.prototype._next = function(value) {
        var key;
        try {
            var keySelector = this.keySelector;
            key = keySelector ? keySelector(value) : value;
        } catch (err) {
            return this.destination.error(err);
        }
        var result = false;
        if (this.hasKey) try {
            var compare = this.compare;
            result = compare(this.key, key);
        } catch (err1) {
            return this.destination.error(err1);
        }
        else this.hasKey = true;
        if (!result) {
            this.key = key;
            this.destination.next(value);
        }
    };
    return DistinctUntilChangedSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"59pQ9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "distinctUntilKeyChanged", ()=>distinctUntilKeyChanged
);
/** PURE_IMPORTS_START _distinctUntilChanged PURE_IMPORTS_END */ var _distinctUntilChanged = require("./distinctUntilChanged");
function distinctUntilKeyChanged(key, compare) {
    return _distinctUntilChanged.distinctUntilChanged(function(x, y) {
        return compare ? compare(x[key], y[key]) : x[key] === y[key];
    });
}

},{"./distinctUntilChanged":"3u82Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hQw9g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "elementAt", ()=>elementAt
);
/** PURE_IMPORTS_START _util_ArgumentOutOfRangeError,_filter,_throwIfEmpty,_defaultIfEmpty,_take PURE_IMPORTS_END */ var _argumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");
var _filter = require("./filter");
var _throwIfEmpty = require("./throwIfEmpty");
var _defaultIfEmpty = require("./defaultIfEmpty");
var _take = require("./take");
function elementAt(index, defaultValue) {
    if (index < 0) throw new _argumentOutOfRangeError.ArgumentOutOfRangeError();
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(_filter.filter(function(v, i) {
            return i === index;
        }), _take.take(1), hasDefaultValue ? _defaultIfEmpty.defaultIfEmpty(defaultValue) : _throwIfEmpty.throwIfEmpty(function() {
            return new _argumentOutOfRangeError.ArgumentOutOfRangeError();
        }));
    };
}

},{"../util/ArgumentOutOfRangeError":"eVyky","./filter":"eU9Jz","./throwIfEmpty":"84X2U","./defaultIfEmpty":"lMGJ9","./take":"gEcnY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"84X2U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "throwIfEmpty", ()=>throwIfEmpty
);
/** PURE_IMPORTS_START tslib,_util_EmptyError,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _emptyError = require("../util/EmptyError");
var _subscriber = require("../Subscriber");
function throwIfEmpty(errorFactory) {
    if (errorFactory === void 0) errorFactory = defaultErrorFactory;
    return function(source) {
        return source.lift(new ThrowIfEmptyOperator(errorFactory));
    };
}
var ThrowIfEmptyOperator = /*@__PURE__*/ function() {
    function ThrowIfEmptyOperator1(errorFactory) {
        this.errorFactory = errorFactory;
    }
    ThrowIfEmptyOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new ThrowIfEmptySubscriber(subscriber, this.errorFactory));
    };
    return ThrowIfEmptyOperator1;
}();
var ThrowIfEmptySubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(ThrowIfEmptySubscriber1, _super);
    function ThrowIfEmptySubscriber1(destination, errorFactory) {
        var _this = _super.call(this, destination) || this;
        _this.errorFactory = errorFactory;
        _this.hasValue = false;
        return _this;
    }
    ThrowIfEmptySubscriber1.prototype._next = function(value) {
        this.hasValue = true;
        this.destination.next(value);
    };
    ThrowIfEmptySubscriber1.prototype._complete = function() {
        if (!this.hasValue) {
            var err = void 0;
            try {
                err = this.errorFactory();
            } catch (e) {
                err = e;
            }
            this.destination.error(err);
        } else return this.destination.complete();
    };
    return ThrowIfEmptySubscriber1;
}(_subscriber.Subscriber);
function defaultErrorFactory() {
    return new _emptyError.EmptyError();
}

},{"tslib":"lRdW5","../util/EmptyError":"8nE0j","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gEcnY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "take", ()=>take
);
/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _argumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");
var _empty = require("../observable/empty");
function take(count) {
    return function(source) {
        if (count === 0) return _empty.empty();
        else return source.lift(new TakeOperator(count));
    };
}
var TakeOperator = /*@__PURE__*/ function() {
    function TakeOperator1(total) {
        this.total = total;
        if (this.total < 0) throw new _argumentOutOfRangeError.ArgumentOutOfRangeError;
    }
    TakeOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator1;
}();
var TakeSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(TakeSubscriber1, _super);
    function TakeSubscriber1(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.count = 0;
        return _this;
    }
    TakeSubscriber1.prototype._next = function(value) {
        var total = this.total;
        var count = ++this.count;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    };
    return TakeSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","../util/ArgumentOutOfRangeError":"eVyky","../observable/empty":"d0sAg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5bFSk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "endWith", ()=>endWith
);
/** PURE_IMPORTS_START _observable_concat,_observable_of PURE_IMPORTS_END */ var _concat = require("../observable/concat");
var _of = require("../observable/of");
function endWith() {
    var array = [];
    for(var _i = 0; _i < arguments.length; _i++)array[_i] = arguments[_i];
    return function(source) {
        return _concat.concat(source, _of.of.apply(void 0, array));
    };
}

},{"../observable/concat":"4CcsK","../observable/of":"knjPI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3kUKB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "every", ()=>every
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function every(predicate, thisArg) {
    return function(source) {
        return source.lift(new EveryOperator(predicate, thisArg, source));
    };
}
var EveryOperator = /*@__PURE__*/ function() {
    function EveryOperator1(predicate, thisArg, source) {
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.source = source;
    }
    EveryOperator1.prototype.call = function(observer, source) {
        return source.subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
    };
    return EveryOperator1;
}();
var EverySubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(EverySubscriber1, _super);
    function EverySubscriber1(destination, predicate, thisArg, source) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.thisArg = thisArg;
        _this.source = source;
        _this.index = 0;
        _this.thisArg = thisArg || _this;
        return _this;
    }
    EverySubscriber1.prototype.notifyComplete = function(everyValueMatch) {
        this.destination.next(everyValueMatch);
        this.destination.complete();
    };
    EverySubscriber1.prototype._next = function(value) {
        var result = false;
        try {
            result = this.predicate.call(this.thisArg, value, this.index++, this.source);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        if (!result) this.notifyComplete(false);
    };
    EverySubscriber1.prototype._complete = function() {
        this.notifyComplete(true);
    };
    return EverySubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4KE95":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "exhaust", ()=>exhaust
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function exhaust() {
    return function(source) {
        return source.lift(new SwitchFirstOperator());
    };
}
var SwitchFirstOperator = /*@__PURE__*/ function() {
    function SwitchFirstOperator1() {}
    SwitchFirstOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new SwitchFirstSubscriber(subscriber));
    };
    return SwitchFirstOperator1;
}();
var SwitchFirstSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SwitchFirstSubscriber1, _super);
    function SwitchFirstSubscriber1(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasCompleted = false;
        _this.hasSubscription = false;
        return _this;
    }
    SwitchFirstSubscriber1.prototype._next = function(value) {
        if (!this.hasSubscription) {
            this.hasSubscription = true;
            this.add(_innerSubscribe.innerSubscribe(value, new _innerSubscribe.SimpleInnerSubscriber(this)));
        }
    };
    SwitchFirstSubscriber1.prototype._complete = function() {
        this.hasCompleted = true;
        if (!this.hasSubscription) this.destination.complete();
    };
    SwitchFirstSubscriber1.prototype.notifyComplete = function() {
        this.hasSubscription = false;
        if (this.hasCompleted) this.destination.complete();
    };
    return SwitchFirstSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jOJPl":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "exhaustMap", ()=>exhaustMap
);
/** PURE_IMPORTS_START tslib,_map,_observable_from,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _map = require("./map");
var _from = require("../observable/from");
var _innerSubscribe = require("../innerSubscribe");
function exhaustMap(project, resultSelector) {
    if (resultSelector) return function(source) {
        return source.pipe(exhaustMap(function(a, i) {
            return _from.from(project(a, i)).pipe(_map.map(function(b, ii) {
                return resultSelector(a, b, i, ii);
            }));
        }));
    };
    return function(source) {
        return source.lift(new ExhaustMapOperator(project));
    };
}
var ExhaustMapOperator = /*@__PURE__*/ function() {
    function ExhaustMapOperator1(project) {
        this.project = project;
    }
    ExhaustMapOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new ExhaustMapSubscriber(subscriber, this.project));
    };
    return ExhaustMapOperator1;
}();
var ExhaustMapSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(ExhaustMapSubscriber1, _super);
    function ExhaustMapSubscriber1(destination, project) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.hasSubscription = false;
        _this.hasCompleted = false;
        _this.index = 0;
        return _this;
    }
    ExhaustMapSubscriber1.prototype._next = function(value) {
        if (!this.hasSubscription) this.tryNext(value);
    };
    ExhaustMapSubscriber1.prototype.tryNext = function(value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.hasSubscription = true;
        this._innerSub(result);
    };
    ExhaustMapSubscriber1.prototype._innerSub = function(result) {
        var innerSubscriber = new _innerSubscribe.SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = _innerSubscribe.innerSubscribe(result, innerSubscriber);
        if (innerSubscription !== innerSubscriber) destination.add(innerSubscription);
    };
    ExhaustMapSubscriber1.prototype._complete = function() {
        this.hasCompleted = true;
        if (!this.hasSubscription) this.destination.complete();
        this.unsubscribe();
    };
    ExhaustMapSubscriber1.prototype.notifyNext = function(innerValue) {
        this.destination.next(innerValue);
    };
    ExhaustMapSubscriber1.prototype.notifyError = function(err) {
        this.destination.error(err);
    };
    ExhaustMapSubscriber1.prototype.notifyComplete = function() {
        this.hasSubscription = false;
        if (this.hasCompleted) this.destination.complete();
    };
    return ExhaustMapSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","./map":"l6Oaa","../observable/from":"iYTWI","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dx6KA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "expand", ()=>expand
);
parcelHelpers.export(exports, "ExpandOperator", ()=>ExpandOperator
);
parcelHelpers.export(exports, "ExpandSubscriber", ()=>ExpandSubscriber
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
    return function(source) {
        return source.lift(new ExpandOperator(project, concurrent, scheduler));
    };
}
var ExpandOperator = /*@__PURE__*/ function() {
    function ExpandOperator1(project, concurrent, scheduler) {
        this.project = project;
        this.concurrent = concurrent;
        this.scheduler = scheduler;
    }
    ExpandOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
    };
    return ExpandOperator1;
}();
var ExpandSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(ExpandSubscriber1, _super);
    function ExpandSubscriber1(destination, project, concurrent, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.concurrent = concurrent;
        _this.scheduler = scheduler;
        _this.index = 0;
        _this.active = 0;
        _this.hasCompleted = false;
        if (concurrent < Number.POSITIVE_INFINITY) _this.buffer = [];
        return _this;
    }
    ExpandSubscriber1.dispatch = function(arg) {
        var subscriber = arg.subscriber, result = arg.result, value = arg.value, index = arg.index;
        subscriber.subscribeToProjection(result, value, index);
    };
    ExpandSubscriber1.prototype._next = function(value) {
        var destination = this.destination;
        if (destination.closed) {
            this._complete();
            return;
        }
        var index = this.index++;
        if (this.active < this.concurrent) {
            destination.next(value);
            try {
                var project = this.project;
                var result = project(value, index);
                if (!this.scheduler) this.subscribeToProjection(result, value, index);
                else {
                    var state = {
                        subscriber: this,
                        result: result,
                        value: value,
                        index: index
                    };
                    var destination_1 = this.destination;
                    destination_1.add(this.scheduler.schedule(ExpandSubscriber1.dispatch, 0, state));
                }
            } catch (e) {
                destination.error(e);
            }
        } else this.buffer.push(value);
    };
    ExpandSubscriber1.prototype.subscribeToProjection = function(result, value, index) {
        this.active++;
        var destination = this.destination;
        destination.add(_innerSubscribe.innerSubscribe(result, new _innerSubscribe.SimpleInnerSubscriber(this)));
    };
    ExpandSubscriber1.prototype._complete = function() {
        this.hasCompleted = true;
        if (this.hasCompleted && this.active === 0) this.destination.complete();
        this.unsubscribe();
    };
    ExpandSubscriber1.prototype.notifyNext = function(innerValue) {
        this._next(innerValue);
    };
    ExpandSubscriber1.prototype.notifyComplete = function() {
        var buffer = this.buffer;
        this.active--;
        if (buffer && buffer.length > 0) this._next(buffer.shift());
        if (this.hasCompleted && this.active === 0) this.destination.complete();
    };
    return ExpandSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hjK8N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "finalize", ()=>finalize
);
/** PURE_IMPORTS_START tslib,_Subscriber,_Subscription PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _subscription = require("../Subscription");
function finalize(callback) {
    return function(source) {
        return source.lift(new FinallyOperator(callback));
    };
}
var FinallyOperator = /*@__PURE__*/ function() {
    function FinallyOperator1(callback) {
        this.callback = callback;
    }
    FinallyOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new FinallySubscriber(subscriber, this.callback));
    };
    return FinallyOperator1;
}();
var FinallySubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(FinallySubscriber1, _super);
    function FinallySubscriber1(destination, callback) {
        var _this = _super.call(this, destination) || this;
        _this.add(new _subscription.Subscription(callback));
        return _this;
    }
    return FinallySubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","../Subscription":"7CEw9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c7wEt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "find", ()=>find
);
parcelHelpers.export(exports, "FindValueOperator", ()=>FindValueOperator
);
parcelHelpers.export(exports, "FindValueSubscriber", ()=>FindValueSubscriber
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function find(predicate, thisArg) {
    if (typeof predicate !== 'function') throw new TypeError('predicate is not a function');
    return function(source) {
        return source.lift(new FindValueOperator(predicate, source, false, thisArg));
    };
}
var FindValueOperator = /*@__PURE__*/ function() {
    function FindValueOperator1(predicate, source, yieldIndex, thisArg) {
        this.predicate = predicate;
        this.source = source;
        this.yieldIndex = yieldIndex;
        this.thisArg = thisArg;
    }
    FindValueOperator1.prototype.call = function(observer, source) {
        return source.subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
    };
    return FindValueOperator1;
}();
var FindValueSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(FindValueSubscriber1, _super);
    function FindValueSubscriber1(destination, predicate, source, yieldIndex, thisArg) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.source = source;
        _this.yieldIndex = yieldIndex;
        _this.thisArg = thisArg;
        _this.index = 0;
        return _this;
    }
    FindValueSubscriber1.prototype.notifyComplete = function(value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
        this.unsubscribe();
    };
    FindValueSubscriber1.prototype._next = function(value) {
        var _a = this, predicate = _a.predicate, thisArg = _a.thisArg;
        var index = this.index++;
        try {
            var result = predicate.call(thisArg || this, value, index, this.source);
            if (result) this.notifyComplete(this.yieldIndex ? index : value);
        } catch (err) {
            this.destination.error(err);
        }
    };
    FindValueSubscriber1.prototype._complete = function() {
        this.notifyComplete(this.yieldIndex ? -1 : undefined);
    };
    return FindValueSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4S5J7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "findIndex", ()=>findIndex
);
/** PURE_IMPORTS_START _operators_find PURE_IMPORTS_END */ var _find = require("../operators/find");
function findIndex(predicate, thisArg) {
    return function(source) {
        return source.lift(new _find.FindValueOperator(predicate, source, true, thisArg));
    };
}

},{"../operators/find":"c7wEt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ea0ny":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "first", ()=>first
);
/** PURE_IMPORTS_START _util_EmptyError,_filter,_take,_defaultIfEmpty,_throwIfEmpty,_util_identity PURE_IMPORTS_END */ var _emptyError = require("../util/EmptyError");
var _filter = require("./filter");
var _take = require("./take");
var _defaultIfEmpty = require("./defaultIfEmpty");
var _throwIfEmpty = require("./throwIfEmpty");
var _identity = require("../util/identity");
function first(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(predicate ? _filter.filter(function(v, i) {
            return predicate(v, i, source);
        }) : _identity.identity, _take.take(1), hasDefaultValue ? _defaultIfEmpty.defaultIfEmpty(defaultValue) : _throwIfEmpty.throwIfEmpty(function() {
            return new _emptyError.EmptyError();
        }));
    };
}

},{"../util/EmptyError":"8nE0j","./filter":"eU9Jz","./take":"gEcnY","./defaultIfEmpty":"lMGJ9","./throwIfEmpty":"84X2U","../util/identity":"2wO6M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bVSsy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ignoreElements", ()=>ignoreElements
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function ignoreElements() {
    return function ignoreElementsOperatorFunction(source) {
        return source.lift(new IgnoreElementsOperator());
    };
}
var IgnoreElementsOperator = /*@__PURE__*/ function() {
    function IgnoreElementsOperator1() {}
    IgnoreElementsOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new IgnoreElementsSubscriber(subscriber));
    };
    return IgnoreElementsOperator1;
}();
var IgnoreElementsSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(IgnoreElementsSubscriber1, _super);
    function IgnoreElementsSubscriber1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IgnoreElementsSubscriber1.prototype._next = function(unused) {};
    return IgnoreElementsSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9o33e":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEmpty", ()=>isEmpty
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function isEmpty() {
    return function(source) {
        return source.lift(new IsEmptyOperator());
    };
}
var IsEmptyOperator = /*@__PURE__*/ function() {
    function IsEmptyOperator1() {}
    IsEmptyOperator1.prototype.call = function(observer, source) {
        return source.subscribe(new IsEmptySubscriber(observer));
    };
    return IsEmptyOperator1;
}();
var IsEmptySubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(IsEmptySubscriber1, _super);
    function IsEmptySubscriber1(destination) {
        return _super.call(this, destination) || this;
    }
    IsEmptySubscriber1.prototype.notifyComplete = function(isEmpty1) {
        var destination = this.destination;
        destination.next(isEmpty1);
        destination.complete();
    };
    IsEmptySubscriber1.prototype._next = function(value) {
        this.notifyComplete(false);
    };
    IsEmptySubscriber1.prototype._complete = function() {
        this.notifyComplete(true);
    };
    return IsEmptySubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l1jPv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "last", ()=>last
);
/** PURE_IMPORTS_START _util_EmptyError,_filter,_takeLast,_throwIfEmpty,_defaultIfEmpty,_util_identity PURE_IMPORTS_END */ var _emptyError = require("../util/EmptyError");
var _filter = require("./filter");
var _takeLast = require("./takeLast");
var _throwIfEmpty = require("./throwIfEmpty");
var _defaultIfEmpty = require("./defaultIfEmpty");
var _identity = require("../util/identity");
function last(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(predicate ? _filter.filter(function(v, i) {
            return predicate(v, i, source);
        }) : _identity.identity, _takeLast.takeLast(1), hasDefaultValue ? _defaultIfEmpty.defaultIfEmpty(defaultValue) : _throwIfEmpty.throwIfEmpty(function() {
            return new _emptyError.EmptyError();
        }));
    };
}

},{"../util/EmptyError":"8nE0j","./filter":"eU9Jz","./takeLast":"3c1yu","./throwIfEmpty":"84X2U","./defaultIfEmpty":"lMGJ9","../util/identity":"2wO6M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3c1yu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "takeLast", ()=>takeLast
);
/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError,_observable_empty PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _argumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");
var _empty = require("../observable/empty");
function takeLast(count) {
    return function takeLastOperatorFunction(source) {
        if (count === 0) return _empty.empty();
        else return source.lift(new TakeLastOperator(count));
    };
}
var TakeLastOperator = /*@__PURE__*/ function() {
    function TakeLastOperator1(total) {
        this.total = total;
        if (this.total < 0) throw new _argumentOutOfRangeError.ArgumentOutOfRangeError;
    }
    TakeLastOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new TakeLastSubscriber(subscriber, this.total));
    };
    return TakeLastOperator1;
}();
var TakeLastSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(TakeLastSubscriber1, _super);
    function TakeLastSubscriber1(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.ring = new Array();
        _this.count = 0;
        return _this;
    }
    TakeLastSubscriber1.prototype._next = function(value) {
        var ring = this.ring;
        var total = this.total;
        var count = this.count++;
        if (ring.length < total) ring.push(value);
        else {
            var index = count % total;
            ring[index] = value;
        }
    };
    TakeLastSubscriber1.prototype._complete = function() {
        var destination = this.destination;
        var count = this.count;
        if (count > 0) {
            var total = this.count >= this.total ? this.total : this.count;
            var ring = this.ring;
            for(var i = 0; i < total; i++){
                var idx = (count++) % total;
                destination.next(ring[idx]);
            }
        }
        destination.complete();
    };
    return TakeLastSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","../util/ArgumentOutOfRangeError":"eVyky","../observable/empty":"d0sAg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7EOk1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mapTo", ()=>mapTo
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function mapTo(value) {
    return function(source) {
        return source.lift(new MapToOperator(value));
    };
}
var MapToOperator = /*@__PURE__*/ function() {
    function MapToOperator1(value) {
        this.value = value;
    }
    MapToOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new MapToSubscriber(subscriber, this.value));
    };
    return MapToOperator1;
}();
var MapToSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(MapToSubscriber1, _super);
    function MapToSubscriber1(destination, value) {
        var _this = _super.call(this, destination) || this;
        _this.value = value;
        return _this;
    }
    MapToSubscriber1.prototype._next = function(x) {
        this.destination.next(this.value);
    };
    return MapToSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1mWNL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "materialize", ()=>materialize
);
/** PURE_IMPORTS_START tslib,_Subscriber,_Notification PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _notification = require("../Notification");
function materialize() {
    return function materializeOperatorFunction(source) {
        return source.lift(new MaterializeOperator());
    };
}
var MaterializeOperator = /*@__PURE__*/ function() {
    function MaterializeOperator1() {}
    MaterializeOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new MaterializeSubscriber(subscriber));
    };
    return MaterializeOperator1;
}();
var MaterializeSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(MaterializeSubscriber1, _super);
    function MaterializeSubscriber1(destination) {
        return _super.call(this, destination) || this;
    }
    MaterializeSubscriber1.prototype._next = function(value) {
        this.destination.next(_notification.Notification.createNext(value));
    };
    MaterializeSubscriber1.prototype._error = function(err) {
        var destination = this.destination;
        destination.next(_notification.Notification.createError(err));
        destination.complete();
    };
    MaterializeSubscriber1.prototype._complete = function() {
        var destination = this.destination;
        destination.next(_notification.Notification.createComplete());
        destination.complete();
    };
    return MaterializeSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","../Notification":"6LPyO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bbyS0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "max", ()=>max
);
/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */ var _reduce = require("./reduce");
function max(comparer) {
    var max1 = typeof comparer === 'function' ? function(x, y) {
        return comparer(x, y) > 0 ? x : y;
    } : function(x, y) {
        return x > y ? x : y;
    };
    return _reduce.reduce(max1);
}

},{"./reduce":"MibIn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"MibIn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reduce", ()=>reduce
);
/** PURE_IMPORTS_START _scan,_takeLast,_defaultIfEmpty,_util_pipe PURE_IMPORTS_END */ var _scan = require("./scan");
var _takeLast = require("./takeLast");
var _defaultIfEmpty = require("./defaultIfEmpty");
var _pipe = require("../util/pipe");
function reduce(accumulator, seed) {
    if (arguments.length >= 2) return function reduceOperatorFunctionWithSeed(source) {
        return _pipe.pipe(_scan.scan(accumulator, seed), _takeLast.takeLast(1), _defaultIfEmpty.defaultIfEmpty(seed))(source);
    };
    return function reduceOperatorFunction(source) {
        return _pipe.pipe(_scan.scan(function(acc, value, index) {
            return accumulator(acc, value, index + 1);
        }), _takeLast.takeLast(1))(source);
    };
}

},{"./scan":"jE4qp","./takeLast":"3c1yu","./defaultIfEmpty":"lMGJ9","../util/pipe":"8dpHw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jE4qp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scan", ()=>scan
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function scan(accumulator, seed) {
    var hasSeed = false;
    if (arguments.length >= 2) hasSeed = true;
    return function scanOperatorFunction(source) {
        return source.lift(new ScanOperator(accumulator, seed, hasSeed));
    };
}
var ScanOperator = /*@__PURE__*/ function() {
    function ScanOperator1(accumulator, seed, hasSeed) {
        if (hasSeed === void 0) hasSeed = false;
        this.accumulator = accumulator;
        this.seed = seed;
        this.hasSeed = hasSeed;
    }
    ScanOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed, this.hasSeed));
    };
    return ScanOperator1;
}();
var ScanSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(ScanSubscriber1, _super);
    function ScanSubscriber1(destination, accumulator, _seed, hasSeed) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this._seed = _seed;
        _this.hasSeed = hasSeed;
        _this.index = 0;
        return _this;
    }
    Object.defineProperty(ScanSubscriber1.prototype, "seed", {
        get: function() {
            return this._seed;
        },
        set: function(value) {
            this.hasSeed = true;
            this._seed = value;
        },
        enumerable: true,
        configurable: true
    });
    ScanSubscriber1.prototype._next = function(value) {
        if (!this.hasSeed) {
            this.seed = value;
            this.destination.next(value);
        } else return this._tryNext(value);
    };
    ScanSubscriber1.prototype._tryNext = function(value) {
        var index = this.index++;
        var result;
        try {
            result = this.accumulator(this.seed, value, index);
        } catch (err) {
            this.destination.error(err);
        }
        this.seed = result;
        this.destination.next(result);
    };
    return ScanSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f1wUw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "merge", ()=>merge
);
/** PURE_IMPORTS_START _observable_merge PURE_IMPORTS_END */ var _merge = require("../observable/merge");
function merge() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    return function(source) {
        return source.lift.call(_merge.merge.apply(void 0, [
            source
        ].concat(observables)));
    };
}

},{"../observable/merge":"3kGhP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"80ILX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeMapTo", ()=>mergeMapTo
);
/** PURE_IMPORTS_START _mergeMap PURE_IMPORTS_END */ var _mergeMap = require("./mergeMap");
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
    if (typeof resultSelector === 'function') return _mergeMap.mergeMap(function() {
        return innerObservable;
    }, resultSelector, concurrent);
    if (typeof resultSelector === 'number') concurrent = resultSelector;
    return _mergeMap.mergeMap(function() {
        return innerObservable;
    }, concurrent);
}

},{"./mergeMap":"7pq07","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4c6FM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeScan", ()=>mergeScan
);
parcelHelpers.export(exports, "MergeScanOperator", ()=>MergeScanOperator
);
parcelHelpers.export(exports, "MergeScanSubscriber", ()=>MergeScanSubscriber
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) concurrent = Number.POSITIVE_INFINITY;
    return function(source) {
        return source.lift(new MergeScanOperator(accumulator, seed, concurrent));
    };
}
var MergeScanOperator = /*@__PURE__*/ function() {
    function MergeScanOperator1(accumulator, seed, concurrent) {
        this.accumulator = accumulator;
        this.seed = seed;
        this.concurrent = concurrent;
    }
    MergeScanOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new MergeScanSubscriber(subscriber, this.accumulator, this.seed, this.concurrent));
    };
    return MergeScanOperator1;
}();
var MergeScanSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(MergeScanSubscriber1, _super);
    function MergeScanSubscriber1(destination, accumulator, acc, concurrent) {
        var _this = _super.call(this, destination) || this;
        _this.accumulator = accumulator;
        _this.acc = acc;
        _this.concurrent = concurrent;
        _this.hasValue = false;
        _this.hasCompleted = false;
        _this.buffer = [];
        _this.active = 0;
        _this.index = 0;
        return _this;
    }
    MergeScanSubscriber1.prototype._next = function(value) {
        if (this.active < this.concurrent) {
            var index = this.index++;
            var destination = this.destination;
            var ish = void 0;
            try {
                var accumulator = this.accumulator;
                ish = accumulator(this.acc, value, index);
            } catch (e) {
                return destination.error(e);
            }
            this.active++;
            this._innerSub(ish);
        } else this.buffer.push(value);
    };
    MergeScanSubscriber1.prototype._innerSub = function(ish) {
        var innerSubscriber = new _innerSubscribe.SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        var innerSubscription = _innerSubscribe.innerSubscribe(ish, innerSubscriber);
        if (innerSubscription !== innerSubscriber) destination.add(innerSubscription);
    };
    MergeScanSubscriber1.prototype._complete = function() {
        this.hasCompleted = true;
        if (this.active === 0 && this.buffer.length === 0) {
            if (this.hasValue === false) this.destination.next(this.acc);
            this.destination.complete();
        }
        this.unsubscribe();
    };
    MergeScanSubscriber1.prototype.notifyNext = function(innerValue) {
        var destination = this.destination;
        this.acc = innerValue;
        this.hasValue = true;
        destination.next(innerValue);
    };
    MergeScanSubscriber1.prototype.notifyComplete = function() {
        var buffer = this.buffer;
        this.active--;
        if (buffer.length > 0) this._next(buffer.shift());
        else if (this.active === 0 && this.hasCompleted) {
            if (this.hasValue === false) this.destination.next(this.acc);
            this.destination.complete();
        }
    };
    return MergeScanSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iPbDE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "min", ()=>min
);
/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */ var _reduce = require("./reduce");
function min(comparer) {
    var min1 = typeof comparer === 'function' ? function(x, y) {
        return comparer(x, y) < 0 ? x : y;
    } : function(x, y) {
        return x < y ? x : y;
    };
    return _reduce.reduce(min1);
}

},{"./reduce":"MibIn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hzSi0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "multicast", ()=>multicast
);
parcelHelpers.export(exports, "MulticastOperator", ()=>MulticastOperator
);
/** PURE_IMPORTS_START _observable_ConnectableObservable PURE_IMPORTS_END */ var _connectableObservable = require("../observable/ConnectableObservable");
function multicast(subjectOrSubjectFactory, selector) {
    return function multicastOperatorFunction(source) {
        var subjectFactory;
        if (typeof subjectOrSubjectFactory === 'function') subjectFactory = subjectOrSubjectFactory;
        else subjectFactory = function subjectFactory() {
            return subjectOrSubjectFactory;
        };
        if (typeof selector === 'function') return source.lift(new MulticastOperator(subjectFactory, selector));
        var connectable = Object.create(source, _connectableObservable.connectableObservableDescriptor);
        connectable.source = source;
        connectable.subjectFactory = subjectFactory;
        return connectable;
    };
}
var MulticastOperator = /*@__PURE__*/ function() {
    function MulticastOperator1(subjectFactory, selector) {
        this.subjectFactory = subjectFactory;
        this.selector = selector;
    }
    MulticastOperator1.prototype.call = function(subscriber, source) {
        var selector = this.selector;
        var subject = this.subjectFactory();
        var subscription = selector(subject).subscribe(subscriber);
        subscription.add(source.subscribe(subject));
        return subscription;
    };
    return MulticastOperator1;
}();

},{"../observable/ConnectableObservable":"hntQC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTyaR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "onErrorResumeNext", ()=>onErrorResumeNext
);
parcelHelpers.export(exports, "onErrorResumeNextStatic", ()=>onErrorResumeNextStatic
);
/** PURE_IMPORTS_START tslib,_observable_from,_util_isArray,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _from = require("../observable/from");
var _isArray = require("../util/isArray");
var _innerSubscribe = require("../innerSubscribe");
function onErrorResumeNext() {
    var nextSources = [];
    for(var _i = 0; _i < arguments.length; _i++)nextSources[_i] = arguments[_i];
    if (nextSources.length === 1 && _isArray.isArray(nextSources[0])) nextSources = nextSources[0];
    return function(source) {
        return source.lift(new OnErrorResumeNextOperator(nextSources));
    };
}
function onErrorResumeNextStatic() {
    var nextSources = [];
    for(var _i = 0; _i < arguments.length; _i++)nextSources[_i] = arguments[_i];
    var source = undefined;
    if (nextSources.length === 1 && _isArray.isArray(nextSources[0])) nextSources = nextSources[0];
    source = nextSources.shift();
    return _from.from(source).lift(new OnErrorResumeNextOperator(nextSources));
}
var OnErrorResumeNextOperator = /*@__PURE__*/ function() {
    function OnErrorResumeNextOperator1(nextSources) {
        this.nextSources = nextSources;
    }
    OnErrorResumeNextOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
    };
    return OnErrorResumeNextOperator1;
}();
var OnErrorResumeNextSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(OnErrorResumeNextSubscriber1, _super);
    function OnErrorResumeNextSubscriber1(destination, nextSources) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.nextSources = nextSources;
        return _this;
    }
    OnErrorResumeNextSubscriber1.prototype.notifyError = function() {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber1.prototype.notifyComplete = function() {
        this.subscribeToNextSource();
    };
    OnErrorResumeNextSubscriber1.prototype._error = function(err) {
        this.subscribeToNextSource();
        this.unsubscribe();
    };
    OnErrorResumeNextSubscriber1.prototype._complete = function() {
        this.subscribeToNextSource();
        this.unsubscribe();
    };
    OnErrorResumeNextSubscriber1.prototype.subscribeToNextSource = function() {
        var next = this.nextSources.shift();
        if (!!next) {
            var innerSubscriber = new _innerSubscribe.SimpleInnerSubscriber(this);
            var destination = this.destination;
            destination.add(innerSubscriber);
            var innerSubscription = _innerSubscribe.innerSubscribe(next, innerSubscriber);
            if (innerSubscription !== innerSubscriber) destination.add(innerSubscription);
        } else this.destination.complete();
    };
    return OnErrorResumeNextSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../observable/from":"iYTWI","../util/isArray":"7twlV","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fvFUj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pairwise", ()=>pairwise
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function pairwise() {
    return function(source) {
        return source.lift(new PairwiseOperator());
    };
}
var PairwiseOperator = /*@__PURE__*/ function() {
    function PairwiseOperator1() {}
    PairwiseOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new PairwiseSubscriber(subscriber));
    };
    return PairwiseOperator1;
}();
var PairwiseSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(PairwiseSubscriber1, _super);
    function PairwiseSubscriber1(destination) {
        var _this = _super.call(this, destination) || this;
        _this.hasPrev = false;
        return _this;
    }
    PairwiseSubscriber1.prototype._next = function(value) {
        var pair;
        if (this.hasPrev) pair = [
            this.prev,
            value
        ];
        else this.hasPrev = true;
        this.prev = value;
        if (pair) this.destination.next(pair);
    };
    return PairwiseSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Zi3N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "partition", ()=>partition
);
/** PURE_IMPORTS_START _util_not,_filter PURE_IMPORTS_END */ var _not = require("../util/not");
var _filter = require("./filter");
function partition(predicate, thisArg) {
    return function(source) {
        return [
            _filter.filter(predicate, thisArg)(source),
            _filter.filter(_not.not(predicate, thisArg))(source)
        ];
    };
}

},{"../util/not":"abgIp","./filter":"eU9Jz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3C8lW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pluck", ()=>pluck
);
/** PURE_IMPORTS_START _map PURE_IMPORTS_END */ var _map = require("./map");
function pluck() {
    var properties = [];
    for(var _i = 0; _i < arguments.length; _i++)properties[_i] = arguments[_i];
    var length = properties.length;
    if (length === 0) throw new Error('list of properties cannot be empty.');
    return function(source) {
        return _map.map(plucker(properties, length))(source);
    };
}
function plucker(props, length) {
    var mapper = function(x) {
        var currentProp = x;
        for(var i = 0; i < length; i++){
            var p = currentProp != null ? currentProp[props[i]] : undefined;
            if (p !== void 0) currentProp = p;
            else return undefined;
        }
        return currentProp;
    };
    return mapper;
}

},{"./map":"l6Oaa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fypd1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "publish", ()=>publish
);
/** PURE_IMPORTS_START _Subject,_multicast PURE_IMPORTS_END */ var _subject = require("../Subject");
var _multicast = require("./multicast");
function publish(selector) {
    return selector ? _multicast.multicast(function() {
        return new _subject.Subject();
    }, selector) : _multicast.multicast(new _subject.Subject());
}

},{"../Subject":"l0BZI","./multicast":"hzSi0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cP3Ez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "publishBehavior", ()=>publishBehavior
);
/** PURE_IMPORTS_START _BehaviorSubject,_multicast PURE_IMPORTS_END */ var _behaviorSubject = require("../BehaviorSubject");
var _multicast = require("./multicast");
function publishBehavior(value) {
    return function(source) {
        return _multicast.multicast(new _behaviorSubject.BehaviorSubject(value))(source);
    };
}

},{"../BehaviorSubject":"jcpl4","./multicast":"hzSi0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"M01i7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "publishLast", ()=>publishLast
);
/** PURE_IMPORTS_START _AsyncSubject,_multicast PURE_IMPORTS_END */ var _asyncSubject = require("../AsyncSubject");
var _multicast = require("./multicast");
function publishLast() {
    return function(source) {
        return _multicast.multicast(new _asyncSubject.AsyncSubject())(source);
    };
}

},{"../AsyncSubject":"bxydg","./multicast":"hzSi0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cP6XD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "publishReplay", ()=>publishReplay
);
/** PURE_IMPORTS_START _ReplaySubject,_multicast PURE_IMPORTS_END */ var _replaySubject = require("../ReplaySubject");
var _multicast = require("./multicast");
function publishReplay(bufferSize, windowTime, selectorOrScheduler, scheduler) {
    if (selectorOrScheduler && typeof selectorOrScheduler !== 'function') scheduler = selectorOrScheduler;
    var selector = typeof selectorOrScheduler === 'function' ? selectorOrScheduler : undefined;
    var subject = new _replaySubject.ReplaySubject(bufferSize, windowTime, scheduler);
    return function(source) {
        return _multicast.multicast(function() {
            return subject;
        }, selector)(source);
    };
}

},{"../ReplaySubject":"bSMcd","./multicast":"hzSi0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gmKY3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "race", ()=>race
);
/** PURE_IMPORTS_START _util_isArray,_observable_race PURE_IMPORTS_END */ var _isArray = require("../util/isArray");
var _race = require("../observable/race");
function race() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    return function raceOperatorFunction(source) {
        if (observables.length === 1 && _isArray.isArray(observables[0])) observables = observables[0];
        return source.lift.call(_race.race.apply(void 0, [
            source
        ].concat(observables)));
    };
}

},{"../util/isArray":"7twlV","../observable/race":"7v9a2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hOIFI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "repeat", ()=>repeat
);
/** PURE_IMPORTS_START tslib,_Subscriber,_observable_empty PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _empty = require("../observable/empty");
function repeat(count) {
    if (count === void 0) count = -1;
    return function(source) {
        if (count === 0) return _empty.empty();
        else if (count < 0) return source.lift(new RepeatOperator(-1, source));
        else return source.lift(new RepeatOperator(count - 1, source));
    };
}
var RepeatOperator = /*@__PURE__*/ function() {
    function RepeatOperator1(count, source) {
        this.count = count;
        this.source = source;
    }
    RepeatOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
    };
    return RepeatOperator1;
}();
var RepeatSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(RepeatSubscriber1, _super);
    function RepeatSubscriber1(destination, count, source) {
        var _this = _super.call(this, destination) || this;
        _this.count = count;
        _this.source = source;
        return _this;
    }
    RepeatSubscriber1.prototype.complete = function() {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) return _super.prototype.complete.call(this);
            else if (count > -1) this.count = count - 1;
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RepeatSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","../observable/empty":"d0sAg","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1SYs6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "repeatWhen", ()=>repeatWhen
);
/** PURE_IMPORTS_START tslib,_Subject,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("../Subject");
var _innerSubscribe = require("../innerSubscribe");
function repeatWhen(notifier) {
    return function(source) {
        return source.lift(new RepeatWhenOperator(notifier));
    };
}
var RepeatWhenOperator = /*@__PURE__*/ function() {
    function RepeatWhenOperator1(notifier) {
        this.notifier = notifier;
    }
    RepeatWhenOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, source));
    };
    return RepeatWhenOperator1;
}();
var RepeatWhenSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(RepeatWhenSubscriber1, _super);
    function RepeatWhenSubscriber1(destination, notifier, source) {
        var _this = _super.call(this, destination) || this;
        _this.notifier = notifier;
        _this.source = source;
        _this.sourceIsBeingSubscribedTo = true;
        return _this;
    }
    RepeatWhenSubscriber1.prototype.notifyNext = function() {
        this.sourceIsBeingSubscribedTo = true;
        this.source.subscribe(this);
    };
    RepeatWhenSubscriber1.prototype.notifyComplete = function() {
        if (this.sourceIsBeingSubscribedTo === false) return _super.prototype.complete.call(this);
    };
    RepeatWhenSubscriber1.prototype.complete = function() {
        this.sourceIsBeingSubscribedTo = false;
        if (!this.isStopped) {
            if (!this.retries) this.subscribeToRetries();
            if (!this.retriesSubscription || this.retriesSubscription.closed) return _super.prototype.complete.call(this);
            this._unsubscribeAndRecycle();
            this.notifications.next(undefined);
        }
    };
    RepeatWhenSubscriber1.prototype._unsubscribe = function() {
        var _a = this, notifications = _a.notifications, retriesSubscription = _a.retriesSubscription;
        if (notifications) {
            notifications.unsubscribe();
            this.notifications = undefined;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = undefined;
        }
        this.retries = undefined;
    };
    RepeatWhenSubscriber1.prototype._unsubscribeAndRecycle = function() {
        var _unsubscribe = this._unsubscribe;
        this._unsubscribe = null;
        _super.prototype._unsubscribeAndRecycle.call(this);
        this._unsubscribe = _unsubscribe;
        return this;
    };
    RepeatWhenSubscriber1.prototype.subscribeToRetries = function() {
        this.notifications = new _subject.Subject();
        var retries;
        try {
            var notifier = this.notifier;
            retries = notifier(this.notifications);
        } catch (e) {
            return _super.prototype.complete.call(this);
        }
        this.retries = retries;
        this.retriesSubscription = _innerSubscribe.innerSubscribe(retries, new _innerSubscribe.SimpleInnerSubscriber(this));
    };
    return RepeatWhenSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../Subject":"l0BZI","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6q8fc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "retry", ()=>retry
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function retry(count) {
    if (count === void 0) count = -1;
    return function(source) {
        return source.lift(new RetryOperator(count, source));
    };
}
var RetryOperator = /*@__PURE__*/ function() {
    function RetryOperator1(count, source) {
        this.count = count;
        this.source = source;
    }
    RetryOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new RetrySubscriber(subscriber, this.count, this.source));
    };
    return RetryOperator1;
}();
var RetrySubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(RetrySubscriber1, _super);
    function RetrySubscriber1(destination, count, source) {
        var _this = _super.call(this, destination) || this;
        _this.count = count;
        _this.source = source;
        return _this;
    }
    RetrySubscriber1.prototype.error = function(err) {
        if (!this.isStopped) {
            var _a = this, source = _a.source, count = _a.count;
            if (count === 0) return _super.prototype.error.call(this, err);
            else if (count > -1) this.count = count - 1;
            source.subscribe(this._unsubscribeAndRecycle());
        }
    };
    return RetrySubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1o16U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "retryWhen", ()=>retryWhen
);
/** PURE_IMPORTS_START tslib,_Subject,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("../Subject");
var _innerSubscribe = require("../innerSubscribe");
function retryWhen(notifier) {
    return function(source) {
        return source.lift(new RetryWhenOperator(notifier, source));
    };
}
var RetryWhenOperator = /*@__PURE__*/ function() {
    function RetryWhenOperator1(notifier, source) {
        this.notifier = notifier;
        this.source = source;
    }
    RetryWhenOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
    };
    return RetryWhenOperator1;
}();
var RetryWhenSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(RetryWhenSubscriber1, _super);
    function RetryWhenSubscriber1(destination, notifier, source) {
        var _this = _super.call(this, destination) || this;
        _this.notifier = notifier;
        _this.source = source;
        return _this;
    }
    RetryWhenSubscriber1.prototype.error = function(err) {
        if (!this.isStopped) {
            var errors = this.errors;
            var retries = this.retries;
            var retriesSubscription = this.retriesSubscription;
            if (!retries) {
                errors = new _subject.Subject();
                try {
                    var notifier = this.notifier;
                    retries = notifier(errors);
                } catch (e) {
                    return _super.prototype.error.call(this, e);
                }
                retriesSubscription = _innerSubscribe.innerSubscribe(retries, new _innerSubscribe.SimpleInnerSubscriber(this));
            } else {
                this.errors = undefined;
                this.retriesSubscription = undefined;
            }
            this._unsubscribeAndRecycle();
            this.errors = errors;
            this.retries = retries;
            this.retriesSubscription = retriesSubscription;
            errors.next(err);
        }
    };
    RetryWhenSubscriber1.prototype._unsubscribe = function() {
        var _a = this, errors = _a.errors, retriesSubscription = _a.retriesSubscription;
        if (errors) {
            errors.unsubscribe();
            this.errors = undefined;
        }
        if (retriesSubscription) {
            retriesSubscription.unsubscribe();
            this.retriesSubscription = undefined;
        }
        this.retries = undefined;
    };
    RetryWhenSubscriber1.prototype.notifyNext = function() {
        var _unsubscribe = this._unsubscribe;
        this._unsubscribe = null;
        this._unsubscribeAndRecycle();
        this._unsubscribe = _unsubscribe;
        this.source.subscribe(this);
    };
    return RetryWhenSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../Subject":"l0BZI","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ic8Wb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sample", ()=>sample
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function sample(notifier) {
    return function(source) {
        return source.lift(new SampleOperator(notifier));
    };
}
var SampleOperator = /*@__PURE__*/ function() {
    function SampleOperator1(notifier) {
        this.notifier = notifier;
    }
    SampleOperator1.prototype.call = function(subscriber, source) {
        var sampleSubscriber = new SampleSubscriber(subscriber);
        var subscription = source.subscribe(sampleSubscriber);
        subscription.add(_innerSubscribe.innerSubscribe(this.notifier, new _innerSubscribe.SimpleInnerSubscriber(sampleSubscriber)));
        return subscription;
    };
    return SampleOperator1;
}();
var SampleSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SampleSubscriber1, _super);
    function SampleSubscriber1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasValue = false;
        return _this;
    }
    SampleSubscriber1.prototype._next = function(value) {
        this.value = value;
        this.hasValue = true;
    };
    SampleSubscriber1.prototype.notifyNext = function() {
        this.emitValue();
    };
    SampleSubscriber1.prototype.notifyComplete = function() {
        this.emitValue();
    };
    SampleSubscriber1.prototype.emitValue = function() {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.value);
        }
    };
    return SampleSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jBBH0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sampleTime", ()=>sampleTime
);
/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _async = require("../scheduler/async");
function sampleTime(period, scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    return function(source) {
        return source.lift(new SampleTimeOperator(period, scheduler));
    };
}
var SampleTimeOperator = /*@__PURE__*/ function() {
    function SampleTimeOperator1(period, scheduler) {
        this.period = period;
        this.scheduler = scheduler;
    }
    SampleTimeOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
    };
    return SampleTimeOperator1;
}();
var SampleTimeSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SampleTimeSubscriber1, _super);
    function SampleTimeSubscriber1(destination, period, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.period = period;
        _this.scheduler = scheduler;
        _this.hasValue = false;
        _this.add(scheduler.schedule(dispatchNotification, period, {
            subscriber: _this,
            period: period
        }));
        return _this;
    }
    SampleTimeSubscriber1.prototype._next = function(value) {
        this.lastValue = value;
        this.hasValue = true;
    };
    SampleTimeSubscriber1.prototype.notifyNext = function() {
        if (this.hasValue) {
            this.hasValue = false;
            this.destination.next(this.lastValue);
        }
    };
    return SampleTimeSubscriber1;
}(_subscriber.Subscriber);
function dispatchNotification(state) {
    var subscriber = state.subscriber, period = state.period;
    subscriber.notifyNext();
    this.schedule(state, period);
}

},{"tslib":"lRdW5","../Subscriber":"bwPOT","../scheduler/async":"04lHJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j8MCu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sequenceEqual", ()=>sequenceEqual
);
parcelHelpers.export(exports, "SequenceEqualOperator", ()=>SequenceEqualOperator
);
parcelHelpers.export(exports, "SequenceEqualSubscriber", ()=>SequenceEqualSubscriber
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function sequenceEqual(compareTo, comparator) {
    return function(source) {
        return source.lift(new SequenceEqualOperator(compareTo, comparator));
    };
}
var SequenceEqualOperator = /*@__PURE__*/ function() {
    function SequenceEqualOperator1(compareTo, comparator) {
        this.compareTo = compareTo;
        this.comparator = comparator;
    }
    SequenceEqualOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparator));
    };
    return SequenceEqualOperator1;
}();
var SequenceEqualSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SequenceEqualSubscriber1, _super);
    function SequenceEqualSubscriber1(destination, compareTo, comparator) {
        var _this = _super.call(this, destination) || this;
        _this.compareTo = compareTo;
        _this.comparator = comparator;
        _this._a = [];
        _this._b = [];
        _this._oneComplete = false;
        _this.destination.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, _this)));
        return _this;
    }
    SequenceEqualSubscriber1.prototype._next = function(value) {
        if (this._oneComplete && this._b.length === 0) this.emit(false);
        else {
            this._a.push(value);
            this.checkValues();
        }
    };
    SequenceEqualSubscriber1.prototype._complete = function() {
        if (this._oneComplete) this.emit(this._a.length === 0 && this._b.length === 0);
        else this._oneComplete = true;
        this.unsubscribe();
    };
    SequenceEqualSubscriber1.prototype.checkValues = function() {
        var _c = this, _a = _c._a, _b = _c._b, comparator = _c.comparator;
        while(_a.length > 0 && _b.length > 0){
            var a = _a.shift();
            var b = _b.shift();
            var areEqual = false;
            try {
                areEqual = comparator ? comparator(a, b) : a === b;
            } catch (e) {
                this.destination.error(e);
            }
            if (!areEqual) this.emit(false);
        }
    };
    SequenceEqualSubscriber1.prototype.emit = function(value) {
        var destination = this.destination;
        destination.next(value);
        destination.complete();
    };
    SequenceEqualSubscriber1.prototype.nextB = function(value) {
        if (this._oneComplete && this._a.length === 0) this.emit(false);
        else {
            this._b.push(value);
            this.checkValues();
        }
    };
    SequenceEqualSubscriber1.prototype.completeB = function() {
        if (this._oneComplete) this.emit(this._a.length === 0 && this._b.length === 0);
        else this._oneComplete = true;
    };
    return SequenceEqualSubscriber1;
}(_subscriber.Subscriber);
var SequenceEqualCompareToSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SequenceEqualCompareToSubscriber1, _super);
    function SequenceEqualCompareToSubscriber1(destination, parent) {
        var _this = _super.call(this, destination) || this;
        _this.parent = parent;
        return _this;
    }
    SequenceEqualCompareToSubscriber1.prototype._next = function(value) {
        this.parent.nextB(value);
    };
    SequenceEqualCompareToSubscriber1.prototype._error = function(err) {
        this.parent.error(err);
        this.unsubscribe();
    };
    SequenceEqualCompareToSubscriber1.prototype._complete = function() {
        this.parent.completeB();
        this.unsubscribe();
    };
    return SequenceEqualCompareToSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lbj48":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "share", ()=>share
);
/** PURE_IMPORTS_START _multicast,_refCount,_Subject PURE_IMPORTS_END */ var _multicast = require("./multicast");
var _refCount = require("./refCount");
var _subject = require("../Subject");
function shareSubjectFactory() {
    return new _subject.Subject();
}
function share() {
    return function(source) {
        return _refCount.refCount()(_multicast.multicast(shareSubjectFactory)(source));
    };
}

},{"./multicast":"hzSi0","./refCount":"1xbxl","../Subject":"l0BZI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"tvAj8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "shareReplay", ()=>shareReplay
);
/** PURE_IMPORTS_START _ReplaySubject PURE_IMPORTS_END */ var _replaySubject = require("../ReplaySubject");
function shareReplay(configOrBufferSize, windowTime, scheduler) {
    var config;
    if (configOrBufferSize && typeof configOrBufferSize === 'object') config = configOrBufferSize;
    else config = {
        bufferSize: configOrBufferSize,
        windowTime: windowTime,
        refCount: false,
        scheduler: scheduler
    };
    return function(source) {
        return source.lift(shareReplayOperator(config));
    };
}
function shareReplayOperator(_a) {
    var _b = _a.bufferSize, bufferSize = _b === void 0 ? Number.POSITIVE_INFINITY : _b, _c = _a.windowTime, windowTime = _c === void 0 ? Number.POSITIVE_INFINITY : _c, useRefCount = _a.refCount, scheduler = _a.scheduler;
    var subject;
    var refCount = 0;
    var subscription;
    var hasError = false;
    var isComplete = false;
    return function shareReplayOperation(source) {
        refCount++;
        var innerSub;
        if (!subject || hasError) {
            hasError = false;
            subject = new _replaySubject.ReplaySubject(bufferSize, windowTime, scheduler);
            innerSub = subject.subscribe(this);
            subscription = source.subscribe({
                next: function(value) {
                    subject.next(value);
                },
                error: function(err) {
                    hasError = true;
                    subject.error(err);
                },
                complete: function() {
                    isComplete = true;
                    subscription = undefined;
                    subject.complete();
                }
            });
            if (isComplete) subscription = undefined;
        } else innerSub = subject.subscribe(this);
        this.add(function() {
            refCount--;
            innerSub.unsubscribe();
            innerSub = undefined;
            if (subscription && !isComplete && useRefCount && refCount === 0) {
                subscription.unsubscribe();
                subscription = undefined;
                subject = undefined;
            }
        });
    };
}

},{"../ReplaySubject":"bSMcd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lkDIG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "single", ()=>single
);
/** PURE_IMPORTS_START tslib,_Subscriber,_util_EmptyError PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _emptyError = require("../util/EmptyError");
function single(predicate) {
    return function(source) {
        return source.lift(new SingleOperator(predicate, source));
    };
}
var SingleOperator = /*@__PURE__*/ function() {
    function SingleOperator1(predicate, source) {
        this.predicate = predicate;
        this.source = source;
    }
    SingleOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
    };
    return SingleOperator1;
}();
var SingleSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SingleSubscriber1, _super);
    function SingleSubscriber1(destination, predicate, source) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.source = source;
        _this.seenValue = false;
        _this.index = 0;
        return _this;
    }
    SingleSubscriber1.prototype.applySingleValue = function(value) {
        if (this.seenValue) this.destination.error('Sequence contains more than one element');
        else {
            this.seenValue = true;
            this.singleValue = value;
        }
    };
    SingleSubscriber1.prototype._next = function(value) {
        var index = this.index++;
        if (this.predicate) this.tryNext(value, index);
        else this.applySingleValue(value);
    };
    SingleSubscriber1.prototype.tryNext = function(value, index) {
        try {
            if (this.predicate(value, index, this.source)) this.applySingleValue(value);
        } catch (err) {
            this.destination.error(err);
        }
    };
    SingleSubscriber1.prototype._complete = function() {
        var destination = this.destination;
        if (this.index > 0) {
            destination.next(this.seenValue ? this.singleValue : undefined);
            destination.complete();
        } else destination.error(new _emptyError.EmptyError);
    };
    return SingleSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","../util/EmptyError":"8nE0j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2fYJm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "skip", ()=>skip
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function skip(count) {
    return function(source) {
        return source.lift(new SkipOperator(count));
    };
}
var SkipOperator = /*@__PURE__*/ function() {
    function SkipOperator1(total) {
        this.total = total;
    }
    SkipOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new SkipSubscriber(subscriber, this.total));
    };
    return SkipOperator1;
}();
var SkipSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SkipSubscriber1, _super);
    function SkipSubscriber1(destination, total) {
        var _this = _super.call(this, destination) || this;
        _this.total = total;
        _this.count = 0;
        return _this;
    }
    SkipSubscriber1.prototype._next = function(x) {
        if (++this.count > this.total) this.destination.next(x);
    };
    return SkipSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"atbiS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "skipLast", ()=>skipLast
);
/** PURE_IMPORTS_START tslib,_Subscriber,_util_ArgumentOutOfRangeError PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _argumentOutOfRangeError = require("../util/ArgumentOutOfRangeError");
function skipLast(count) {
    return function(source) {
        return source.lift(new SkipLastOperator(count));
    };
}
var SkipLastOperator = /*@__PURE__*/ function() {
    function SkipLastOperator1(_skipCount) {
        this._skipCount = _skipCount;
        if (this._skipCount < 0) throw new _argumentOutOfRangeError.ArgumentOutOfRangeError;
    }
    SkipLastOperator1.prototype.call = function(subscriber, source) {
        if (this._skipCount === 0) return source.subscribe(new _subscriber.Subscriber(subscriber));
        else return source.subscribe(new SkipLastSubscriber(subscriber, this._skipCount));
    };
    return SkipLastOperator1;
}();
var SkipLastSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SkipLastSubscriber1, _super);
    function SkipLastSubscriber1(destination, _skipCount) {
        var _this = _super.call(this, destination) || this;
        _this._skipCount = _skipCount;
        _this._count = 0;
        _this._ring = new Array(_skipCount);
        return _this;
    }
    SkipLastSubscriber1.prototype._next = function(value) {
        var skipCount = this._skipCount;
        var count = this._count++;
        if (count < skipCount) this._ring[count] = value;
        else {
            var currentIndex = count % skipCount;
            var ring = this._ring;
            var oldValue = ring[currentIndex];
            ring[currentIndex] = value;
            this.destination.next(oldValue);
        }
    };
    return SkipLastSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","../util/ArgumentOutOfRangeError":"eVyky","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ai2sW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "skipUntil", ()=>skipUntil
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function skipUntil(notifier) {
    return function(source) {
        return source.lift(new SkipUntilOperator(notifier));
    };
}
var SkipUntilOperator = /*@__PURE__*/ function() {
    function SkipUntilOperator1(notifier) {
        this.notifier = notifier;
    }
    SkipUntilOperator1.prototype.call = function(destination, source) {
        return source.subscribe(new SkipUntilSubscriber(destination, this.notifier));
    };
    return SkipUntilOperator1;
}();
var SkipUntilSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SkipUntilSubscriber1, _super);
    function SkipUntilSubscriber1(destination, notifier) {
        var _this = _super.call(this, destination) || this;
        _this.hasValue = false;
        var innerSubscriber = new _innerSubscribe.SimpleInnerSubscriber(_this);
        _this.add(innerSubscriber);
        _this.innerSubscription = innerSubscriber;
        var innerSubscription = _innerSubscribe.innerSubscribe(notifier, innerSubscriber);
        if (innerSubscription !== innerSubscriber) {
            _this.add(innerSubscription);
            _this.innerSubscription = innerSubscription;
        }
        return _this;
    }
    SkipUntilSubscriber1.prototype._next = function(value) {
        if (this.hasValue) _super.prototype._next.call(this, value);
    };
    SkipUntilSubscriber1.prototype.notifyNext = function() {
        this.hasValue = true;
        if (this.innerSubscription) this.innerSubscription.unsubscribe();
    };
    SkipUntilSubscriber1.prototype.notifyComplete = function() {};
    return SkipUntilSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Swsg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "skipWhile", ()=>skipWhile
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function skipWhile(predicate) {
    return function(source) {
        return source.lift(new SkipWhileOperator(predicate));
    };
}
var SkipWhileOperator = /*@__PURE__*/ function() {
    function SkipWhileOperator1(predicate) {
        this.predicate = predicate;
    }
    SkipWhileOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
    };
    return SkipWhileOperator1;
}();
var SkipWhileSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SkipWhileSubscriber1, _super);
    function SkipWhileSubscriber1(destination, predicate) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.skipping = true;
        _this.index = 0;
        return _this;
    }
    SkipWhileSubscriber1.prototype._next = function(value) {
        var destination = this.destination;
        if (this.skipping) this.tryCallPredicate(value);
        if (!this.skipping) destination.next(value);
    };
    SkipWhileSubscriber1.prototype.tryCallPredicate = function(value) {
        try {
            var result = this.predicate(value, this.index++);
            this.skipping = Boolean(result);
        } catch (err) {
            this.destination.error(err);
        }
    };
    return SkipWhileSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2HMvt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startWith", ()=>startWith
);
/** PURE_IMPORTS_START _observable_concat,_util_isScheduler PURE_IMPORTS_END */ var _concat = require("../observable/concat");
var _isScheduler = require("../util/isScheduler");
function startWith() {
    var array = [];
    for(var _i = 0; _i < arguments.length; _i++)array[_i] = arguments[_i];
    var scheduler = array[array.length - 1];
    if (_isScheduler.isScheduler(scheduler)) {
        array.pop();
        return function(source) {
            return _concat.concat(array, source, scheduler);
        };
    } else return function(source) {
        return _concat.concat(array, source);
    };
}

},{"../observable/concat":"4CcsK","../util/isScheduler":"8B5Pf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kLKop":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "subscribeOn", ()=>subscribeOn
);
/** PURE_IMPORTS_START _observable_SubscribeOnObservable PURE_IMPORTS_END */ var _subscribeOnObservable = require("../observable/SubscribeOnObservable");
function subscribeOn(scheduler, delay) {
    if (delay === void 0) delay = 0;
    return function subscribeOnOperatorFunction(source) {
        return source.lift(new SubscribeOnOperator(scheduler, delay));
    };
}
var SubscribeOnOperator = /*@__PURE__*/ function() {
    function SubscribeOnOperator1(scheduler, delay) {
        this.scheduler = scheduler;
        this.delay = delay;
    }
    SubscribeOnOperator1.prototype.call = function(subscriber, source) {
        return new _subscribeOnObservable.SubscribeOnObservable(source, this.delay, this.scheduler).subscribe(subscriber);
    };
    return SubscribeOnOperator1;
}();

},{"../observable/SubscribeOnObservable":"9xR7X","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9xR7X":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubscribeOnObservable", ()=>SubscribeOnObservable
);
/** PURE_IMPORTS_START tslib,_Observable,_scheduler_asap,_util_isNumeric PURE_IMPORTS_END */ var _tslib = require("tslib");
var _observable = require("../Observable");
var _asap = require("../scheduler/asap");
var _isNumeric = require("../util/isNumeric");
var SubscribeOnObservable = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SubscribeOnObservable1, _super);
    function SubscribeOnObservable1(source, delayTime, scheduler) {
        if (delayTime === void 0) delayTime = 0;
        if (scheduler === void 0) scheduler = _asap.asap;
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.delayTime = delayTime;
        _this.scheduler = scheduler;
        if (!_isNumeric.isNumeric(delayTime) || delayTime < 0) _this.delayTime = 0;
        if (!scheduler || typeof scheduler.schedule !== 'function') _this.scheduler = _asap.asap;
        return _this;
    }
    SubscribeOnObservable1.create = function(source, delay, scheduler) {
        if (delay === void 0) delay = 0;
        if (scheduler === void 0) scheduler = _asap.asap;
        return new SubscribeOnObservable1(source, delay, scheduler);
    };
    SubscribeOnObservable1.dispatch = function(arg) {
        var source = arg.source, subscriber = arg.subscriber;
        return this.add(source.subscribe(subscriber));
    };
    SubscribeOnObservable1.prototype._subscribe = function(subscriber) {
        var delay = this.delayTime;
        var source = this.source;
        var scheduler = this.scheduler;
        return scheduler.schedule(SubscribeOnObservable1.dispatch, delay, {
            source: source,
            subscriber: subscriber
        });
    };
    return SubscribeOnObservable1;
}(_observable.Observable);

},{"tslib":"lRdW5","../Observable":"1asgn","../scheduler/asap":"7sZZh","../util/isNumeric":"eSGdv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ugub":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "switchAll", ()=>switchAll
);
/** PURE_IMPORTS_START _switchMap,_util_identity PURE_IMPORTS_END */ var _switchMap = require("./switchMap");
var _identity = require("../util/identity");
function switchAll() {
    return _switchMap.switchMap(_identity.identity);
}

},{"./switchMap":"7idMB","../util/identity":"2wO6M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7idMB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "switchMap", ()=>switchMap
);
/** PURE_IMPORTS_START tslib,_map,_observable_from,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _map = require("./map");
var _from = require("../observable/from");
var _innerSubscribe = require("../innerSubscribe");
function switchMap(project, resultSelector) {
    if (typeof resultSelector === 'function') return function(source) {
        return source.pipe(switchMap(function(a, i) {
            return _from.from(project(a, i)).pipe(_map.map(function(b, ii) {
                return resultSelector(a, b, i, ii);
            }));
        }));
    };
    return function(source) {
        return source.lift(new SwitchMapOperator(project));
    };
}
var SwitchMapOperator = /*@__PURE__*/ function() {
    function SwitchMapOperator1(project) {
        this.project = project;
    }
    SwitchMapOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new SwitchMapSubscriber(subscriber, this.project));
    };
    return SwitchMapOperator1;
}();
var SwitchMapSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(SwitchMapSubscriber1, _super);
    function SwitchMapSubscriber1(destination, project) {
        var _this = _super.call(this, destination) || this;
        _this.project = project;
        _this.index = 0;
        return _this;
    }
    SwitchMapSubscriber1.prototype._next = function(value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        } catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result);
    };
    SwitchMapSubscriber1.prototype._innerSub = function(result) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) innerSubscription.unsubscribe();
        var innerSubscriber = new _innerSubscribe.SimpleInnerSubscriber(this);
        var destination = this.destination;
        destination.add(innerSubscriber);
        this.innerSubscription = _innerSubscribe.innerSubscribe(result, innerSubscriber);
        if (this.innerSubscription !== innerSubscriber) destination.add(this.innerSubscription);
    };
    SwitchMapSubscriber1.prototype._complete = function() {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) _super.prototype._complete.call(this);
        this.unsubscribe();
    };
    SwitchMapSubscriber1.prototype._unsubscribe = function() {
        this.innerSubscription = undefined;
    };
    SwitchMapSubscriber1.prototype.notifyComplete = function() {
        this.innerSubscription = undefined;
        if (this.isStopped) _super.prototype._complete.call(this);
    };
    SwitchMapSubscriber1.prototype.notifyNext = function(innerValue) {
        this.destination.next(innerValue);
    };
    return SwitchMapSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","./map":"l6Oaa","../observable/from":"iYTWI","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h4ioX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "switchMapTo", ()=>switchMapTo
);
/** PURE_IMPORTS_START _switchMap PURE_IMPORTS_END */ var _switchMap = require("./switchMap");
function switchMapTo(innerObservable, resultSelector) {
    return resultSelector ? _switchMap.switchMap(function() {
        return innerObservable;
    }, resultSelector) : _switchMap.switchMap(function() {
        return innerObservable;
    });
}

},{"./switchMap":"7idMB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Hn0t":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "takeUntil", ()=>takeUntil
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
function takeUntil(notifier) {
    return function(source) {
        return source.lift(new TakeUntilOperator(notifier));
    };
}
var TakeUntilOperator = /*@__PURE__*/ function() {
    function TakeUntilOperator1(notifier) {
        this.notifier = notifier;
    }
    TakeUntilOperator1.prototype.call = function(subscriber, source) {
        var takeUntilSubscriber = new TakeUntilSubscriber(subscriber);
        var notifierSubscription = _innerSubscribe.innerSubscribe(this.notifier, new _innerSubscribe.SimpleInnerSubscriber(takeUntilSubscriber));
        if (notifierSubscription && !takeUntilSubscriber.seenValue) {
            takeUntilSubscriber.add(notifierSubscription);
            return source.subscribe(takeUntilSubscriber);
        }
        return takeUntilSubscriber;
    };
    return TakeUntilOperator1;
}();
var TakeUntilSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(TakeUntilSubscriber1, _super);
    function TakeUntilSubscriber1(destination) {
        var _this = _super.call(this, destination) || this;
        _this.seenValue = false;
        return _this;
    }
    TakeUntilSubscriber1.prototype.notifyNext = function() {
        this.seenValue = true;
        this.complete();
    };
    TakeUntilSubscriber1.prototype.notifyComplete = function() {};
    return TakeUntilSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Pe9Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "takeWhile", ()=>takeWhile
);
/** PURE_IMPORTS_START tslib,_Subscriber PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
function takeWhile(predicate, inclusive) {
    if (inclusive === void 0) inclusive = false;
    return function(source) {
        return source.lift(new TakeWhileOperator(predicate, inclusive));
    };
}
var TakeWhileOperator = /*@__PURE__*/ function() {
    function TakeWhileOperator1(predicate, inclusive) {
        this.predicate = predicate;
        this.inclusive = inclusive;
    }
    TakeWhileOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new TakeWhileSubscriber(subscriber, this.predicate, this.inclusive));
    };
    return TakeWhileOperator1;
}();
var TakeWhileSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(TakeWhileSubscriber1, _super);
    function TakeWhileSubscriber1(destination, predicate, inclusive) {
        var _this = _super.call(this, destination) || this;
        _this.predicate = predicate;
        _this.inclusive = inclusive;
        _this.index = 0;
        return _this;
    }
    TakeWhileSubscriber1.prototype._next = function(value) {
        var destination = this.destination;
        var result;
        try {
            result = this.predicate(value, this.index++);
        } catch (err) {
            destination.error(err);
            return;
        }
        this.nextOrComplete(value, result);
    };
    TakeWhileSubscriber1.prototype.nextOrComplete = function(value, predicateResult) {
        var destination = this.destination;
        if (Boolean(predicateResult)) destination.next(value);
        else {
            if (this.inclusive) destination.next(value);
            destination.complete();
        }
    };
    return TakeWhileSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dGqfD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tap", ()=>tap
);
/** PURE_IMPORTS_START tslib,_Subscriber,_util_noop,_util_isFunction PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _noop = require("../util/noop");
var _isFunction = require("../util/isFunction");
function tap(nextOrObserver, error, complete) {
    return function tapOperatorFunction(source) {
        return source.lift(new DoOperator(nextOrObserver, error, complete));
    };
}
var DoOperator = /*@__PURE__*/ function() {
    function DoOperator1(nextOrObserver, error, complete) {
        this.nextOrObserver = nextOrObserver;
        this.error = error;
        this.complete = complete;
    }
    DoOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new TapSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
    };
    return DoOperator1;
}();
var TapSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(TapSubscriber1, _super);
    function TapSubscriber1(destination, observerOrNext, error, complete) {
        var _this = _super.call(this, destination) || this;
        _this._tapNext = _noop.noop;
        _this._tapError = _noop.noop;
        _this._tapComplete = _noop.noop;
        _this._tapError = error || _noop.noop;
        _this._tapComplete = complete || _noop.noop;
        if (_isFunction.isFunction(observerOrNext)) {
            _this._context = _this;
            _this._tapNext = observerOrNext;
        } else if (observerOrNext) {
            _this._context = observerOrNext;
            _this._tapNext = observerOrNext.next || _noop.noop;
            _this._tapError = observerOrNext.error || _noop.noop;
            _this._tapComplete = observerOrNext.complete || _noop.noop;
        }
        return _this;
    }
    TapSubscriber1.prototype._next = function(value) {
        try {
            this._tapNext.call(this._context, value);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(value);
    };
    TapSubscriber1.prototype._error = function(err) {
        try {
            this._tapError.call(this._context, err);
        } catch (err1) {
            this.destination.error(err1);
            return;
        }
        this.destination.error(err);
    };
    TapSubscriber1.prototype._complete = function() {
        try {
            this._tapComplete.call(this._context);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        return this.destination.complete();
    };
    return TapSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","../util/noop":"cB2ox","../util/isFunction":"jxvPW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4O2yf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultThrottleConfig", ()=>defaultThrottleConfig
);
parcelHelpers.export(exports, "throttle", ()=>throttle
);
/** PURE_IMPORTS_START tslib,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _innerSubscribe = require("../innerSubscribe");
var defaultThrottleConfig = {
    leading: true,
    trailing: false
};
function throttle(durationSelector, config) {
    if (config === void 0) config = defaultThrottleConfig;
    return function(source) {
        return source.lift(new ThrottleOperator(durationSelector, !!config.leading, !!config.trailing));
    };
}
var ThrottleOperator = /*@__PURE__*/ function() {
    function ThrottleOperator1(durationSelector, leading, trailing) {
        this.durationSelector = durationSelector;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new ThrottleSubscriber(subscriber, this.durationSelector, this.leading, this.trailing));
    };
    return ThrottleOperator1;
}();
var ThrottleSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(ThrottleSubscriber1, _super);
    function ThrottleSubscriber1(destination, durationSelector, _leading, _trailing) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.durationSelector = durationSelector;
        _this._leading = _leading;
        _this._trailing = _trailing;
        _this._hasValue = false;
        return _this;
    }
    ThrottleSubscriber1.prototype._next = function(value) {
        this._hasValue = true;
        this._sendValue = value;
        if (!this._throttled) {
            if (this._leading) this.send();
            else this.throttle(value);
        }
    };
    ThrottleSubscriber1.prototype.send = function() {
        var _a = this, _hasValue = _a._hasValue, _sendValue = _a._sendValue;
        if (_hasValue) {
            this.destination.next(_sendValue);
            this.throttle(_sendValue);
        }
        this._hasValue = false;
        this._sendValue = undefined;
    };
    ThrottleSubscriber1.prototype.throttle = function(value) {
        var duration = this.tryDurationSelector(value);
        if (!!duration) this.add(this._throttled = _innerSubscribe.innerSubscribe(duration, new _innerSubscribe.SimpleInnerSubscriber(this)));
    };
    ThrottleSubscriber1.prototype.tryDurationSelector = function(value) {
        try {
            return this.durationSelector(value);
        } catch (err) {
            this.destination.error(err);
            return null;
        }
    };
    ThrottleSubscriber1.prototype.throttlingDone = function() {
        var _a = this, _throttled = _a._throttled, _trailing = _a._trailing;
        if (_throttled) _throttled.unsubscribe();
        this._throttled = undefined;
        if (_trailing) this.send();
    };
    ThrottleSubscriber1.prototype.notifyNext = function() {
        this.throttlingDone();
    };
    ThrottleSubscriber1.prototype.notifyComplete = function() {
        this.throttlingDone();
    };
    return ThrottleSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hoR4c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "throttleTime", ()=>throttleTime
);
/** PURE_IMPORTS_START tslib,_Subscriber,_scheduler_async,_throttle PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _async = require("../scheduler/async");
var _throttle = require("./throttle");
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) scheduler = _async.async;
    if (config === void 0) config = _throttle.defaultThrottleConfig;
    return function(source) {
        return source.lift(new ThrottleTimeOperator(duration, scheduler, config.leading, config.trailing));
    };
}
var ThrottleTimeOperator = /*@__PURE__*/ function() {
    function ThrottleTimeOperator1(duration, scheduler, leading, trailing) {
        this.duration = duration;
        this.scheduler = scheduler;
        this.leading = leading;
        this.trailing = trailing;
    }
    ThrottleTimeOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler, this.leading, this.trailing));
    };
    return ThrottleTimeOperator1;
}();
var ThrottleTimeSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(ThrottleTimeSubscriber1, _super);
    function ThrottleTimeSubscriber1(destination, duration, scheduler, leading, trailing) {
        var _this = _super.call(this, destination) || this;
        _this.duration = duration;
        _this.scheduler = scheduler;
        _this.leading = leading;
        _this.trailing = trailing;
        _this._hasTrailingValue = false;
        _this._trailingValue = null;
        return _this;
    }
    ThrottleTimeSubscriber1.prototype._next = function(value) {
        if (this.throttled) {
            if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        } else {
            this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, {
                subscriber: this
            }));
            if (this.leading) this.destination.next(value);
            else if (this.trailing) {
                this._trailingValue = value;
                this._hasTrailingValue = true;
            }
        }
    };
    ThrottleTimeSubscriber1.prototype._complete = function() {
        if (this._hasTrailingValue) {
            this.destination.next(this._trailingValue);
            this.destination.complete();
        } else this.destination.complete();
    };
    ThrottleTimeSubscriber1.prototype.clearThrottle = function() {
        var throttled = this.throttled;
        if (throttled) {
            if (this.trailing && this._hasTrailingValue) {
                this.destination.next(this._trailingValue);
                this._trailingValue = null;
                this._hasTrailingValue = false;
            }
            throttled.unsubscribe();
            this.remove(throttled);
            this.throttled = null;
        }
    };
    return ThrottleTimeSubscriber1;
}(_subscriber.Subscriber);
function dispatchNext(arg) {
    var subscriber = arg.subscriber;
    subscriber.clearThrottle();
}

},{"tslib":"lRdW5","../Subscriber":"bwPOT","../scheduler/async":"04lHJ","./throttle":"4O2yf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Uu6J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeInterval", ()=>timeInterval
);
parcelHelpers.export(exports, "TimeInterval", ()=>TimeInterval
);
/** PURE_IMPORTS_START _scheduler_async,_scan,_observable_defer,_map PURE_IMPORTS_END */ var _async = require("../scheduler/async");
var _scan = require("./scan");
var _defer = require("../observable/defer");
var _map = require("./map");
function timeInterval(scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    return function(source) {
        return _defer.defer(function() {
            return source.pipe(_scan.scan(function(_a, value) {
                var current = _a.current;
                return {
                    value: value,
                    current: scheduler.now(),
                    last: current
                };
            }, {
                current: scheduler.now(),
                value: undefined,
                last: undefined
            }), _map.map(function(_a) {
                var current = _a.current, last = _a.last, value = _a.value;
                return new TimeInterval(value, current - last);
            }));
        });
    };
}
var TimeInterval = /*@__PURE__*/ function() {
    function TimeInterval1(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval1;
}();

},{"../scheduler/async":"04lHJ","./scan":"jE4qp","../observable/defer":"iYBVz","./map":"l6Oaa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Onr3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeout", ()=>timeout
);
/** PURE_IMPORTS_START _scheduler_async,_util_TimeoutError,_timeoutWith,_observable_throwError PURE_IMPORTS_END */ var _async = require("../scheduler/async");
var _timeoutError = require("../util/TimeoutError");
var _timeoutWith = require("./timeoutWith");
var _throwError = require("../observable/throwError");
function timeout(due, scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    return _timeoutWith.timeoutWith(due, _throwError.throwError(new _timeoutError.TimeoutError()), scheduler);
}

},{"../scheduler/async":"04lHJ","../util/TimeoutError":"f9mmi","./timeoutWith":"6UOiW","../observable/throwError":"figu7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6UOiW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timeoutWith", ()=>timeoutWith
);
/** PURE_IMPORTS_START tslib,_scheduler_async,_util_isDate,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _async = require("../scheduler/async");
var _isDate = require("../util/isDate");
var _innerSubscribe = require("../innerSubscribe");
function timeoutWith(due, withObservable, scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    return function(source) {
        var absoluteTimeout = _isDate.isDate(due);
        var waitFor = absoluteTimeout ? +due - scheduler.now() : Math.abs(due);
        return source.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
    };
}
var TimeoutWithOperator = /*@__PURE__*/ function() {
    function TimeoutWithOperator1(waitFor, absoluteTimeout, withObservable, scheduler) {
        this.waitFor = waitFor;
        this.absoluteTimeout = absoluteTimeout;
        this.withObservable = withObservable;
        this.scheduler = scheduler;
    }
    TimeoutWithOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
    };
    return TimeoutWithOperator1;
}();
var TimeoutWithSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(TimeoutWithSubscriber1, _super);
    function TimeoutWithSubscriber1(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.absoluteTimeout = absoluteTimeout;
        _this.waitFor = waitFor;
        _this.withObservable = withObservable;
        _this.scheduler = scheduler;
        _this.scheduleTimeout();
        return _this;
    }
    TimeoutWithSubscriber1.dispatchTimeout = function(subscriber) {
        var withObservable = subscriber.withObservable;
        subscriber._unsubscribeAndRecycle();
        subscriber.add(_innerSubscribe.innerSubscribe(withObservable, new _innerSubscribe.SimpleInnerSubscriber(subscriber)));
    };
    TimeoutWithSubscriber1.prototype.scheduleTimeout = function() {
        var action = this.action;
        if (action) this.action = action.schedule(this, this.waitFor);
        else this.add(this.action = this.scheduler.schedule(TimeoutWithSubscriber1.dispatchTimeout, this.waitFor, this));
    };
    TimeoutWithSubscriber1.prototype._next = function(value) {
        if (!this.absoluteTimeout) this.scheduleTimeout();
        _super.prototype._next.call(this, value);
    };
    TimeoutWithSubscriber1.prototype._unsubscribe = function() {
        this.action = undefined;
        this.scheduler = null;
        this.withObservable = null;
    };
    return TimeoutWithSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../scheduler/async":"04lHJ","../util/isDate":"f7MkF","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5f3hL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "timestamp", ()=>timestamp
);
parcelHelpers.export(exports, "Timestamp", ()=>Timestamp
);
/** PURE_IMPORTS_START _scheduler_async,_map PURE_IMPORTS_END */ var _async = require("../scheduler/async");
var _map = require("./map");
function timestamp(scheduler) {
    if (scheduler === void 0) scheduler = _async.async;
    return _map.map(function(value) {
        return new Timestamp(value, scheduler.now());
    });
}
var Timestamp = /*@__PURE__*/ function() {
    function Timestamp1(value, timestamp1) {
        this.value = value;
        this.timestamp = timestamp1;
    }
    return Timestamp1;
}();

},{"../scheduler/async":"04lHJ","./map":"l6Oaa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Uj90":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toArray", ()=>toArray
);
/** PURE_IMPORTS_START _reduce PURE_IMPORTS_END */ var _reduce = require("./reduce");
function toArrayReducer(arr, item, index) {
    if (index === 0) return [
        item
    ];
    arr.push(item);
    return arr;
}
function toArray() {
    return _reduce.reduce(toArrayReducer, []);
}

},{"./reduce":"MibIn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5NhCX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "window", ()=>window
);
/** PURE_IMPORTS_START tslib,_Subject,_innerSubscribe PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("../Subject");
var _innerSubscribe = require("../innerSubscribe");
function window(windowBoundaries) {
    return function windowOperatorFunction(source) {
        return source.lift(new WindowOperator(windowBoundaries));
    };
}
var WindowOperator = /*@__PURE__*/ function() {
    function WindowOperator1(windowBoundaries) {
        this.windowBoundaries = windowBoundaries;
    }
    WindowOperator1.prototype.call = function(subscriber, source) {
        var windowSubscriber = new WindowSubscriber(subscriber);
        var sourceSubscription = source.subscribe(windowSubscriber);
        if (!sourceSubscription.closed) windowSubscriber.add(_innerSubscribe.innerSubscribe(this.windowBoundaries, new _innerSubscribe.SimpleInnerSubscriber(windowSubscriber)));
        return sourceSubscription;
    };
    return WindowOperator1;
}();
var WindowSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(WindowSubscriber1, _super);
    function WindowSubscriber1(destination) {
        var _this = _super.call(this, destination) || this;
        _this.window = new _subject.Subject();
        destination.next(_this.window);
        return _this;
    }
    WindowSubscriber1.prototype.notifyNext = function() {
        this.openWindow();
    };
    WindowSubscriber1.prototype.notifyError = function(error) {
        this._error(error);
    };
    WindowSubscriber1.prototype.notifyComplete = function() {
        this._complete();
    };
    WindowSubscriber1.prototype._next = function(value) {
        this.window.next(value);
    };
    WindowSubscriber1.prototype._error = function(err) {
        this.window.error(err);
        this.destination.error(err);
    };
    WindowSubscriber1.prototype._complete = function() {
        this.window.complete();
        this.destination.complete();
    };
    WindowSubscriber1.prototype._unsubscribe = function() {
        this.window = null;
    };
    WindowSubscriber1.prototype.openWindow = function() {
        var prevWindow = this.window;
        if (prevWindow) prevWindow.complete();
        var destination = this.destination;
        var newWindow = this.window = new _subject.Subject();
        destination.next(newWindow);
    };
    return WindowSubscriber1;
}(_innerSubscribe.SimpleOuterSubscriber);

},{"tslib":"lRdW5","../Subject":"l0BZI","../innerSubscribe":"j1KrT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a5ICK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "windowCount", ()=>windowCount
);
/** PURE_IMPORTS_START tslib,_Subscriber,_Subject PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subscriber = require("../Subscriber");
var _subject = require("../Subject");
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) startWindowEvery = 0;
    return function windowCountOperatorFunction(source) {
        return source.lift(new WindowCountOperator(windowSize, startWindowEvery));
    };
}
var WindowCountOperator = /*@__PURE__*/ function() {
    function WindowCountOperator1(windowSize, startWindowEvery) {
        this.windowSize = windowSize;
        this.startWindowEvery = startWindowEvery;
    }
    WindowCountOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
    };
    return WindowCountOperator1;
}();
var WindowCountSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(WindowCountSubscriber1, _super);
    function WindowCountSubscriber1(destination, windowSize, startWindowEvery) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.windowSize = windowSize;
        _this.startWindowEvery = startWindowEvery;
        _this.windows = [
            new _subject.Subject()
        ];
        _this.count = 0;
        destination.next(_this.windows[0]);
        return _this;
    }
    WindowCountSubscriber1.prototype._next = function(value) {
        var startWindowEvery = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize;
        var destination = this.destination;
        var windowSize = this.windowSize;
        var windows = this.windows;
        var len = windows.length;
        for(var i = 0; i < len && !this.closed; i++)windows[i].next(value);
        var c = this.count - windowSize + 1;
        if (c >= 0 && c % startWindowEvery === 0 && !this.closed) windows.shift().complete();
        if (++this.count % startWindowEvery === 0 && !this.closed) {
            var window_1 = new _subject.Subject();
            windows.push(window_1);
            destination.next(window_1);
        }
    };
    WindowCountSubscriber1.prototype._error = function(err) {
        var windows = this.windows;
        if (windows) while(windows.length > 0 && !this.closed)windows.shift().error(err);
        this.destination.error(err);
    };
    WindowCountSubscriber1.prototype._complete = function() {
        var windows = this.windows;
        if (windows) while(windows.length > 0 && !this.closed)windows.shift().complete();
        this.destination.complete();
    };
    WindowCountSubscriber1.prototype._unsubscribe = function() {
        this.count = 0;
        this.windows = null;
    };
    return WindowCountSubscriber1;
}(_subscriber.Subscriber);

},{"tslib":"lRdW5","../Subscriber":"bwPOT","../Subject":"l0BZI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ugzF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "windowTime", ()=>windowTime
);
/** PURE_IMPORTS_START tslib,_Subject,_scheduler_async,_Subscriber,_util_isNumeric,_util_isScheduler PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("../Subject");
var _async = require("../scheduler/async");
var _subscriber = require("../Subscriber");
var _isNumeric = require("../util/isNumeric");
var _isScheduler = require("../util/isScheduler");
function windowTime(windowTimeSpan) {
    var scheduler = _async.async;
    var windowCreationInterval = null;
    var maxWindowSize = Number.POSITIVE_INFINITY;
    if (_isScheduler.isScheduler(arguments[3])) scheduler = arguments[3];
    if (_isScheduler.isScheduler(arguments[2])) scheduler = arguments[2];
    else if (_isNumeric.isNumeric(arguments[2])) maxWindowSize = Number(arguments[2]);
    if (_isScheduler.isScheduler(arguments[1])) scheduler = arguments[1];
    else if (_isNumeric.isNumeric(arguments[1])) windowCreationInterval = Number(arguments[1]);
    return function windowTimeOperatorFunction(source) {
        return source.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler));
    };
}
var WindowTimeOperator = /*@__PURE__*/ function() {
    function WindowTimeOperator1(windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        this.windowTimeSpan = windowTimeSpan;
        this.windowCreationInterval = windowCreationInterval;
        this.maxWindowSize = maxWindowSize;
        this.scheduler = scheduler;
    }
    WindowTimeOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
    };
    return WindowTimeOperator1;
}();
var CountedSubject = /*@__PURE__*/ function(_super) {
    _tslib.__extends(CountedSubject1, _super);
    function CountedSubject1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._numberOfNextedValues = 0;
        return _this;
    }
    CountedSubject1.prototype.next = function(value) {
        this._numberOfNextedValues++;
        _super.prototype.next.call(this, value);
    };
    Object.defineProperty(CountedSubject1.prototype, "numberOfNextedValues", {
        get: function() {
            return this._numberOfNextedValues;
        },
        enumerable: true,
        configurable: true
    });
    return CountedSubject1;
}(_subject.Subject);
var WindowTimeSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(WindowTimeSubscriber1, _super);
    function WindowTimeSubscriber1(destination, windowTimeSpan, windowCreationInterval, maxWindowSize, scheduler) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.windowTimeSpan = windowTimeSpan;
        _this.windowCreationInterval = windowCreationInterval;
        _this.maxWindowSize = maxWindowSize;
        _this.scheduler = scheduler;
        _this.windows = [];
        var window = _this.openWindow();
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
            var closeState = {
                subscriber: _this,
                window: window,
                context: null
            };
            var creationState = {
                windowTimeSpan: windowTimeSpan,
                windowCreationInterval: windowCreationInterval,
                subscriber: _this,
                scheduler: scheduler
            };
            _this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
            _this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
        } else {
            var timeSpanOnlyState = {
                subscriber: _this,
                window: window,
                windowTimeSpan: windowTimeSpan
            };
            _this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
        }
        return _this;
    }
    WindowTimeSubscriber1.prototype._next = function(value) {
        var windows = this.windows;
        var len = windows.length;
        for(var i = 0; i < len; i++){
            var window_1 = windows[i];
            if (!window_1.closed) {
                window_1.next(value);
                if (window_1.numberOfNextedValues >= this.maxWindowSize) this.closeWindow(window_1);
            }
        }
    };
    WindowTimeSubscriber1.prototype._error = function(err) {
        var windows = this.windows;
        while(windows.length > 0)windows.shift().error(err);
        this.destination.error(err);
    };
    WindowTimeSubscriber1.prototype._complete = function() {
        var windows = this.windows;
        while(windows.length > 0){
            var window_2 = windows.shift();
            if (!window_2.closed) window_2.complete();
        }
        this.destination.complete();
    };
    WindowTimeSubscriber1.prototype.openWindow = function() {
        var window = new CountedSubject();
        this.windows.push(window);
        var destination = this.destination;
        destination.next(window);
        return window;
    };
    WindowTimeSubscriber1.prototype.closeWindow = function(window) {
        window.complete();
        var windows = this.windows;
        windows.splice(windows.indexOf(window), 1);
    };
    return WindowTimeSubscriber1;
}(_subscriber.Subscriber);
function dispatchWindowTimeSpanOnly(state) {
    var subscriber = state.subscriber, windowTimeSpan = state.windowTimeSpan, window = state.window;
    if (window) subscriber.closeWindow(window);
    state.window = subscriber.openWindow();
    this.schedule(state, windowTimeSpan);
}
function dispatchWindowCreation(state) {
    var windowTimeSpan = state.windowTimeSpan, subscriber = state.subscriber, scheduler = state.scheduler, windowCreationInterval = state.windowCreationInterval;
    var window = subscriber.openWindow();
    var action = this;
    var context = {
        action: action,
        subscription: null
    };
    var timeSpanState = {
        subscriber: subscriber,
        window: window,
        context: context
    };
    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
    action.add(context.subscription);
    action.schedule(state, windowCreationInterval);
}
function dispatchWindowClose(state) {
    var subscriber = state.subscriber, window = state.window, context = state.context;
    if (context && context.action && context.subscription) context.action.remove(context.subscription);
    subscriber.closeWindow(window);
}

},{"tslib":"lRdW5","../Subject":"l0BZI","../scheduler/async":"04lHJ","../Subscriber":"bwPOT","../util/isNumeric":"eSGdv","../util/isScheduler":"8B5Pf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bpat2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "windowToggle", ()=>windowToggle
);
/** PURE_IMPORTS_START tslib,_Subject,_Subscription,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("../Subject");
var _subscription = require("../Subscription");
var _outerSubscriber = require("../OuterSubscriber");
var _subscribeToResult = require("../util/subscribeToResult");
function windowToggle(openings, closingSelector) {
    return function(source) {
        return source.lift(new WindowToggleOperator(openings, closingSelector));
    };
}
var WindowToggleOperator = /*@__PURE__*/ function() {
    function WindowToggleOperator1(openings, closingSelector) {
        this.openings = openings;
        this.closingSelector = closingSelector;
    }
    WindowToggleOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
    };
    return WindowToggleOperator1;
}();
var WindowToggleSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(WindowToggleSubscriber1, _super);
    function WindowToggleSubscriber1(destination, openings, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.openings = openings;
        _this.closingSelector = closingSelector;
        _this.contexts = [];
        _this.add(_this.openSubscription = _subscribeToResult.subscribeToResult(_this, openings, openings));
        return _this;
    }
    WindowToggleSubscriber1.prototype._next = function(value) {
        var contexts = this.contexts;
        if (contexts) {
            var len = contexts.length;
            for(var i = 0; i < len; i++)contexts[i].window.next(value);
        }
    };
    WindowToggleSubscriber1.prototype._error = function(err) {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while(++index < len){
                var context_1 = contexts[index];
                context_1.window.error(err);
                context_1.subscription.unsubscribe();
            }
        }
        _super.prototype._error.call(this, err);
    };
    WindowToggleSubscriber1.prototype._complete = function() {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while(++index < len){
                var context_2 = contexts[index];
                context_2.window.complete();
                context_2.subscription.unsubscribe();
            }
        }
        _super.prototype._complete.call(this);
    };
    WindowToggleSubscriber1.prototype._unsubscribe = function() {
        var contexts = this.contexts;
        this.contexts = null;
        if (contexts) {
            var len = contexts.length;
            var index = -1;
            while(++index < len){
                var context_3 = contexts[index];
                context_3.window.unsubscribe();
                context_3.subscription.unsubscribe();
            }
        }
    };
    WindowToggleSubscriber1.prototype.notifyNext = function(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (outerValue === this.openings) {
            var closingNotifier = void 0;
            try {
                var closingSelector = this.closingSelector;
                closingNotifier = closingSelector(innerValue);
            } catch (e) {
                return this.error(e);
            }
            var window_1 = new _subject.Subject();
            var subscription = new _subscription.Subscription();
            var context_4 = {
                window: window_1,
                subscription: subscription
            };
            this.contexts.push(context_4);
            var innerSubscription = _subscribeToResult.subscribeToResult(this, closingNotifier, context_4);
            if (innerSubscription.closed) this.closeWindow(this.contexts.length - 1);
            else {
                innerSubscription.context = context_4;
                subscription.add(innerSubscription);
            }
            this.destination.next(window_1);
        } else this.closeWindow(this.contexts.indexOf(outerValue));
    };
    WindowToggleSubscriber1.prototype.notifyError = function(err) {
        this.error(err);
    };
    WindowToggleSubscriber1.prototype.notifyComplete = function(inner) {
        if (inner !== this.openSubscription) this.closeWindow(this.contexts.indexOf(inner.context));
    };
    WindowToggleSubscriber1.prototype.closeWindow = function(index) {
        if (index === -1) return;
        var contexts = this.contexts;
        var context = contexts[index];
        var window = context.window, subscription = context.subscription;
        contexts.splice(index, 1);
        window.complete();
        subscription.unsubscribe();
    };
    return WindowToggleSubscriber1;
}(_outerSubscriber.OuterSubscriber);

},{"tslib":"lRdW5","../Subject":"l0BZI","../Subscription":"7CEw9","../OuterSubscriber":"fBdeN","../util/subscribeToResult":"iK8gJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d8Fma":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "windowWhen", ()=>windowWhen
);
/** PURE_IMPORTS_START tslib,_Subject,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */ var _tslib = require("tslib");
var _subject = require("../Subject");
var _outerSubscriber = require("../OuterSubscriber");
var _subscribeToResult = require("../util/subscribeToResult");
function windowWhen(closingSelector) {
    return function windowWhenOperatorFunction(source) {
        return source.lift(new WindowOperator(closingSelector));
    };
}
var WindowOperator = /*@__PURE__*/ function() {
    function WindowOperator1(closingSelector) {
        this.closingSelector = closingSelector;
    }
    WindowOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new WindowSubscriber(subscriber, this.closingSelector));
    };
    return WindowOperator1;
}();
var WindowSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(WindowSubscriber1, _super);
    function WindowSubscriber1(destination, closingSelector) {
        var _this = _super.call(this, destination) || this;
        _this.destination = destination;
        _this.closingSelector = closingSelector;
        _this.openWindow();
        return _this;
    }
    WindowSubscriber1.prototype.notifyNext = function(_outerValue, _innerValue, _outerIndex, _innerIndex, innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber1.prototype.notifyError = function(error) {
        this._error(error);
    };
    WindowSubscriber1.prototype.notifyComplete = function(innerSub) {
        this.openWindow(innerSub);
    };
    WindowSubscriber1.prototype._next = function(value) {
        this.window.next(value);
    };
    WindowSubscriber1.prototype._error = function(err) {
        this.window.error(err);
        this.destination.error(err);
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber1.prototype._complete = function() {
        this.window.complete();
        this.destination.complete();
        this.unsubscribeClosingNotification();
    };
    WindowSubscriber1.prototype.unsubscribeClosingNotification = function() {
        if (this.closingNotification) this.closingNotification.unsubscribe();
    };
    WindowSubscriber1.prototype.openWindow = function(innerSub) {
        if (innerSub === void 0) innerSub = null;
        if (innerSub) {
            this.remove(innerSub);
            innerSub.unsubscribe();
        }
        var prevWindow = this.window;
        if (prevWindow) prevWindow.complete();
        var window = this.window = new _subject.Subject();
        this.destination.next(window);
        var closingNotifier;
        try {
            var closingSelector = this.closingSelector;
            closingNotifier = closingSelector();
        } catch (e) {
            this.destination.error(e);
            this.window.error(e);
            return;
        }
        this.add(this.closingNotification = _subscribeToResult.subscribeToResult(this, closingNotifier));
    };
    return WindowSubscriber1;
}(_outerSubscriber.OuterSubscriber);

},{"tslib":"lRdW5","../Subject":"l0BZI","../OuterSubscriber":"fBdeN","../util/subscribeToResult":"iK8gJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iESLV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withLatestFrom", ()=>withLatestFrom
);
/** PURE_IMPORTS_START tslib,_OuterSubscriber,_util_subscribeToResult PURE_IMPORTS_END */ var _tslib = require("tslib");
var _outerSubscriber = require("../OuterSubscriber");
var _subscribeToResult = require("../util/subscribeToResult");
function withLatestFrom() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    return function(source) {
        var project;
        if (typeof args[args.length - 1] === 'function') project = args.pop();
        var observables = args;
        return source.lift(new WithLatestFromOperator(observables, project));
    };
}
var WithLatestFromOperator = /*@__PURE__*/ function() {
    function WithLatestFromOperator1(observables, project) {
        this.observables = observables;
        this.project = project;
    }
    WithLatestFromOperator1.prototype.call = function(subscriber, source) {
        return source.subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
    };
    return WithLatestFromOperator1;
}();
var WithLatestFromSubscriber = /*@__PURE__*/ function(_super) {
    _tslib.__extends(WithLatestFromSubscriber1, _super);
    function WithLatestFromSubscriber1(destination, observables, project) {
        var _this = _super.call(this, destination) || this;
        _this.observables = observables;
        _this.project = project;
        _this.toRespond = [];
        var len = observables.length;
        _this.values = new Array(len);
        for(var i = 0; i < len; i++)_this.toRespond.push(i);
        for(var i = 0; i < len; i++){
            var observable = observables[i];
            _this.add(_subscribeToResult.subscribeToResult(_this, observable, undefined, i));
        }
        return _this;
    }
    WithLatestFromSubscriber1.prototype.notifyNext = function(_outerValue, innerValue, outerIndex) {
        this.values[outerIndex] = innerValue;
        var toRespond = this.toRespond;
        if (toRespond.length > 0) {
            var found = toRespond.indexOf(outerIndex);
            if (found !== -1) toRespond.splice(found, 1);
        }
    };
    WithLatestFromSubscriber1.prototype.notifyComplete = function() {};
    WithLatestFromSubscriber1.prototype._next = function(value) {
        if (this.toRespond.length === 0) {
            var args = [
                value
            ].concat(this.values);
            if (this.project) this._tryProject(args);
            else this.destination.next(args);
        }
    };
    WithLatestFromSubscriber1.prototype._tryProject = function(args) {
        var result;
        try {
            result = this.project.apply(this, args);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return WithLatestFromSubscriber1;
}(_outerSubscriber.OuterSubscriber);

},{"tslib":"lRdW5","../OuterSubscriber":"fBdeN","../util/subscribeToResult":"iK8gJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"G2eeL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zip", ()=>zip
);
/** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */ var _zip = require("../observable/zip");
function zip() {
    var observables = [];
    for(var _i = 0; _i < arguments.length; _i++)observables[_i] = arguments[_i];
    return function zipOperatorFunction(source) {
        return source.lift.call(_zip.zip.apply(void 0, [
            source
        ].concat(observables)));
    };
}

},{"../observable/zip":"cw7ce","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kwpTz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "zipAll", ()=>zipAll
);
/** PURE_IMPORTS_START _observable_zip PURE_IMPORTS_END */ var _zip = require("../observable/zip");
function zipAll(project) {
    return function(source) {
        return source.lift(new _zip.ZipOperator(project));
    };
}

},{"../observable/zip":"cw7ce","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8WKyV":[function(require,module,exports) {
"use strict";
var Buffer = require("buffer").Buffer;
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFavicon = exports.range = exports.isBigNumber = exports.ensureParsedJSONObject = exports.ensureBN = exports.ensureRegExpString = exports.ensureIntNumber = exports.ensureBuffer = exports.ensureAddressString = exports.ensureEvenLengthHexString = exports.ensureHexString = exports.isHexString = exports.prepend0x = exports.strip0x = exports.has0xPrefix = exports.hexStringFromIntNumber = exports.intNumberFromHexString = exports.bigIntStringFromBN = exports.hexStringFromBuffer = exports.hexStringToUint8Array = exports.uint8ArrayToHex = exports.randomBytesHex = void 0;
const bn_js_1 = __importDefault(require("bn.js"));
const types_1 = require("./types");
const INT_STRING_REGEX = /^[0-9]*$/;
const HEXADECIMAL_STRING_REGEX = /^[a-f0-9]*$/;
/**
 * @param length number of bytes
 */ function randomBytesHex(length) {
    return uint8ArrayToHex(crypto.getRandomValues(new Uint8Array(length)));
}
exports.randomBytesHex = randomBytesHex;
function uint8ArrayToHex(value) {
    return [
        ...value
    ].map((b)=>b.toString(16).padStart(2, '0')
    ).join('');
}
exports.uint8ArrayToHex = uint8ArrayToHex;
function hexStringToUint8Array(hexString) {
    return new Uint8Array(hexString.match(/.{1,2}/g).map((byte)=>parseInt(byte, 16)
    ));
}
exports.hexStringToUint8Array = hexStringToUint8Array;
function hexStringFromBuffer(buf, includePrefix = false) {
    const hex = buf.toString("hex");
    return (0, types_1.HexString)(includePrefix ? "0x" + hex : hex);
}
exports.hexStringFromBuffer = hexStringFromBuffer;
function bigIntStringFromBN(bn) {
    return (0, types_1.BigIntString)(bn.toString(10));
}
exports.bigIntStringFromBN = bigIntStringFromBN;
function intNumberFromHexString(hex) {
    return (0, types_1.IntNumber)(new bn_js_1.default(ensureEvenLengthHexString(hex, false), 16).toNumber());
}
exports.intNumberFromHexString = intNumberFromHexString;
function hexStringFromIntNumber(num) {
    return (0, types_1.HexString)("0x" + new bn_js_1.default(num).toString(16));
}
exports.hexStringFromIntNumber = hexStringFromIntNumber;
function has0xPrefix(str) {
    return str.startsWith("0x") || str.startsWith("0X");
}
exports.has0xPrefix = has0xPrefix;
function strip0x(hex) {
    if (has0xPrefix(hex)) return hex.slice(2);
    return hex;
}
exports.strip0x = strip0x;
function prepend0x(hex) {
    if (has0xPrefix(hex)) return "0x" + hex.slice(2);
    return "0x" + hex;
}
exports.prepend0x = prepend0x;
function isHexString(hex) {
    if (typeof hex !== "string") return false;
    const s = strip0x(hex).toLowerCase();
    return HEXADECIMAL_STRING_REGEX.test(s);
}
exports.isHexString = isHexString;
function ensureHexString(hex, includePrefix = false) {
    if (typeof hex === "string") {
        const s = strip0x(hex).toLowerCase();
        if (HEXADECIMAL_STRING_REGEX.test(s)) return (0, types_1.HexString)(includePrefix ? "0x" + s : s);
    }
    throw new Error(`"${hex}" is not a hexadecimal string`);
}
exports.ensureHexString = ensureHexString;
function ensureEvenLengthHexString(hex, includePrefix = false) {
    let h = ensureHexString(hex, false);
    if (h.length % 2 === 1) h = (0, types_1.HexString)("0" + h);
    return includePrefix ? (0, types_1.HexString)("0x" + h) : h;
}
exports.ensureEvenLengthHexString = ensureEvenLengthHexString;
function ensureAddressString(str) {
    if (typeof str === "string") {
        const s = strip0x(str).toLowerCase();
        if (isHexString(s) && s.length === 40) return (0, types_1.AddressString)(prepend0x(s));
    }
    throw new Error(`Invalid Ethereum address: ${str}`);
}
exports.ensureAddressString = ensureAddressString;
function ensureBuffer(str) {
    if (Buffer.isBuffer(str)) return str;
    if (typeof str === "string") {
        if (isHexString(str)) {
            const s = ensureEvenLengthHexString(str, false);
            return Buffer.from(s, "hex");
        } else return Buffer.from(str, "utf8");
    }
    throw new Error(`Not binary data: ${str}`);
}
exports.ensureBuffer = ensureBuffer;
function ensureIntNumber(num) {
    if (typeof num === "number" && Number.isInteger(num)) return (0, types_1.IntNumber)(num);
    if (typeof num === "string") {
        if (INT_STRING_REGEX.test(num)) return (0, types_1.IntNumber)(Number(num));
        if (isHexString(num)) return (0, types_1.IntNumber)(new bn_js_1.default(ensureEvenLengthHexString(num, false), 16).toNumber());
    }
    throw new Error(`Not an integer: ${num}`);
}
exports.ensureIntNumber = ensureIntNumber;
function ensureRegExpString(regExp) {
    if (regExp instanceof RegExp) return (0, types_1.RegExpString)(regExp.toString());
    throw new Error(`Not a RegExp: ${regExp}`);
}
exports.ensureRegExpString = ensureRegExpString;
function ensureBN(val) {
    if (val != null && (bn_js_1.default.isBN(val) || isBigNumber(val))) return new bn_js_1.default(val.toString(10), 10);
    if (typeof val === "number") return new bn_js_1.default(ensureIntNumber(val));
    if (typeof val === "string") {
        if (INT_STRING_REGEX.test(val)) return new bn_js_1.default(val, 10);
        if (isHexString(val)) return new bn_js_1.default(ensureEvenLengthHexString(val, false), 16);
    }
    throw new Error(`Not an integer: ${val}`);
}
exports.ensureBN = ensureBN;
function ensureParsedJSONObject(val) {
    if (typeof val === "string") return JSON.parse(val);
    if (typeof val === "object") return val;
    throw new Error(`Not a JSON string or an object: ${val}`);
}
exports.ensureParsedJSONObject = ensureParsedJSONObject;
function isBigNumber(val) {
    if (val == null || typeof val.constructor !== "function") return false;
    const { constructor  } = val;
    return typeof constructor.config === "function" && typeof constructor.EUCLID === "number";
}
exports.isBigNumber = isBigNumber;
function range(start, stop) {
    return Array.from({
        length: stop - start
    }, (_, i)=>start + i
    );
}
exports.range = range;
function getFavicon() {
    const el = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]');
    const { protocol , host  } = document.location;
    const href = el ? el.getAttribute("href") : null;
    if (!href || href.startsWith("javascript:")) return null;
    if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("data:")) return href;
    if (href.startsWith("//")) return protocol + href;
    return `${protocol}//${host}${href}`;
}
exports.getFavicon = getFavicon;

},{"buffer":"fCgem","bn.js":"l407W","./types":"119nQ"}],"119nQ":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegExpString = exports.IntNumber = exports.BigIntString = exports.AddressString = exports.HexString = exports.OpaqueType = void 0;
function OpaqueType() {
    return (value)=>value
    ;
}
exports.OpaqueType = OpaqueType;
exports.HexString = OpaqueType();
exports.AddressString = OpaqueType();
exports.BigIntString = OpaqueType();
function IntNumber(num) {
    return Math.floor(num);
}
exports.IntNumber = IntNumber;
exports.RegExpString = OpaqueType();

},{}],"ahVaM":[function(require,module,exports) {
var global = arguments[3];
var process = require("process");
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.9.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */ /*jslint bitwise: true */ (function() {
    var ERROR = 'input is invalid type';
    var WINDOW = typeof window === 'object';
    var root = WINDOW ? window : {};
    if (root.JS_SHA256_NO_WINDOW) WINDOW = false;
    var WEB_WORKER = !WINDOW && typeof self === 'object';
    var NODE_JS = !root.JS_SHA256_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
    if (NODE_JS) root = global;
    else if (WEB_WORKER) root = self;
    var COMMON_JS = !root.JS_SHA256_NO_COMMON_JS && true && module.exports;
    var AMD = typeof define === 'function' && define.amd;
    var ARRAY_BUFFER = !root.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer !== 'undefined';
    var HEX_CHARS = '0123456789abcdef'.split('');
    var EXTRA = [
        -2147483648,
        8388608,
        32768,
        128
    ];
    var SHIFT = [
        24,
        16,
        8,
        0
    ];
    var K = [
        0x428a2f98,
        0x71374491,
        0xb5c0fbcf,
        0xe9b5dba5,
        0x3956c25b,
        0x59f111f1,
        0x923f82a4,
        0xab1c5ed5,
        0xd807aa98,
        0x12835b01,
        0x243185be,
        0x550c7dc3,
        0x72be5d74,
        0x80deb1fe,
        0x9bdc06a7,
        0xc19bf174,
        0xe49b69c1,
        0xefbe4786,
        0x0fc19dc6,
        0x240ca1cc,
        0x2de92c6f,
        0x4a7484aa,
        0x5cb0a9dc,
        0x76f988da,
        0x983e5152,
        0xa831c66d,
        0xb00327c8,
        0xbf597fc7,
        0xc6e00bf3,
        0xd5a79147,
        0x06ca6351,
        0x14292967,
        0x27b70a85,
        0x2e1b2138,
        0x4d2c6dfc,
        0x53380d13,
        0x650a7354,
        0x766a0abb,
        0x81c2c92e,
        0x92722c85,
        0xa2bfe8a1,
        0xa81a664b,
        0xc24b8b70,
        0xc76c51a3,
        0xd192e819,
        0xd6990624,
        0xf40e3585,
        0x106aa070,
        0x19a4c116,
        0x1e376c08,
        0x2748774c,
        0x34b0bcb5,
        0x391c0cb3,
        0x4ed8aa4a,
        0x5b9cca4f,
        0x682e6ff3,
        0x748f82ee,
        0x78a5636f,
        0x84c87814,
        0x8cc70208,
        0x90befffa,
        0xa4506ceb,
        0xbef9a3f7,
        0xc67178f2
    ];
    var OUTPUT_TYPES = [
        'hex',
        'array',
        'digest',
        'arrayBuffer'
    ];
    var blocks1 = [];
    if (root.JS_SHA256_NO_NODE_JS || !Array.isArray) Array.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };
    if (ARRAY_BUFFER && (root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView)) ArrayBuffer.isView = function(obj) {
        return typeof obj === 'object' && obj.buffer && obj.buffer.constructor === ArrayBuffer;
    };
    var createOutputMethod = function(outputType, is224) {
        return function(message) {
            return new Sha256(is224, true).update(message)[outputType]();
        };
    };
    var createMethod = function(is224) {
        var method = createOutputMethod('hex', is224);
        if (NODE_JS) method = nodeWrap(method, is224);
        method.create = function() {
            return new Sha256(is224);
        };
        method.update = function(message) {
            return method.create().update(message);
        };
        for(var i = 0; i < OUTPUT_TYPES.length; ++i){
            var type = OUTPUT_TYPES[i];
            method[type] = createOutputMethod(type, is224);
        }
        return method;
    };
    var nodeWrap = function(method, is224) {
        var crypto = eval("require('crypto')");
        var Buffer = eval("require('buffer').Buffer");
        var algorithm = is224 ? 'sha224' : 'sha256';
        var nodeMethod = function(message) {
            if (typeof message === 'string') return crypto.createHash(algorithm).update(message, 'utf8').digest('hex');
            else {
                if (message === null || message === undefined) throw new Error(ERROR);
                else if (message.constructor === ArrayBuffer) message = new Uint8Array(message);
            }
            if (Array.isArray(message) || ArrayBuffer.isView(message) || message.constructor === Buffer) return crypto.createHash(algorithm).update(new Buffer(message)).digest('hex');
            else return method(message);
        };
        return nodeMethod;
    };
    var createHmacOutputMethod = function(outputType, is224) {
        return function(key, message) {
            return new HmacSha256(key, is224, true).update(message)[outputType]();
        };
    };
    var createHmacMethod = function(is224) {
        var method = createHmacOutputMethod('hex', is224);
        method.create = function(key) {
            return new HmacSha256(key, is224);
        };
        method.update = function(key, message) {
            return method.create(key).update(message);
        };
        for(var i = 0; i < OUTPUT_TYPES.length; ++i){
            var type = OUTPUT_TYPES[i];
            method[type] = createHmacOutputMethod(type, is224);
        }
        return method;
    };
    function Sha256(is224, sharedMemory) {
        if (sharedMemory) {
            blocks1[0] = blocks1[16] = blocks1[1] = blocks1[2] = blocks1[3] = blocks1[4] = blocks1[5] = blocks1[6] = blocks1[7] = blocks1[8] = blocks1[9] = blocks1[10] = blocks1[11] = blocks1[12] = blocks1[13] = blocks1[14] = blocks1[15] = 0;
            this.blocks = blocks1;
        } else this.blocks = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0
        ];
        if (is224) {
            this.h0 = 0xc1059ed8;
            this.h1 = 0x367cd507;
            this.h2 = 0x3070dd17;
            this.h3 = 0xf70e5939;
            this.h4 = 0xffc00b31;
            this.h5 = 0x68581511;
            this.h6 = 0x64f98fa7;
            this.h7 = 0xbefa4fa4;
        } else {
            this.h0 = 0x6a09e667;
            this.h1 = 0xbb67ae85;
            this.h2 = 0x3c6ef372;
            this.h3 = 0xa54ff53a;
            this.h4 = 0x510e527f;
            this.h5 = 0x9b05688c;
            this.h6 = 0x1f83d9ab;
            this.h7 = 0x5be0cd19;
        }
        this.block = this.start = this.bytes = this.hBytes = 0;
        this.finalized = this.hashed = false;
        this.first = true;
        this.is224 = is224;
    }
    Sha256.prototype.update = function(message) {
        if (this.finalized) return;
        var notString, type = typeof message;
        if (type !== 'string') {
            if (type === 'object') {
                if (message === null) throw new Error(ERROR);
                else if (ARRAY_BUFFER && message.constructor === ArrayBuffer) message = new Uint8Array(message);
                else if (!Array.isArray(message)) {
                    if (!ARRAY_BUFFER || !ArrayBuffer.isView(message)) throw new Error(ERROR);
                }
            } else throw new Error(ERROR);
            notString = true;
        }
        var code, index = 0, i, length = message.length, blocks = this.blocks;
        while(index < length){
            if (this.hashed) {
                this.hashed = false;
                blocks[0] = this.block;
                blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
            }
            if (notString) for(i = this.start; index < length && i < 64; ++index)blocks[i >> 2] |= message[index] << SHIFT[(i++) & 3];
            else for(i = this.start; index < length && i < 64; ++index){
                code = message.charCodeAt(index);
                if (code < 0x80) blocks[i >> 2] |= code << SHIFT[(i++) & 3];
                else if (code < 0x800) {
                    blocks[i >> 2] |= (0xc0 | code >> 6) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[(i++) & 3];
                } else if (code < 0xd800 || code >= 0xe000) {
                    blocks[i >> 2] |= (0xe0 | code >> 12) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[(i++) & 3];
                } else {
                    code = 0x10000 + ((code & 0x3ff) << 10 | message.charCodeAt(++index) & 0x3ff);
                    blocks[i >> 2] |= (0xf0 | code >> 18) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (0x80 | code >> 12 & 0x3f) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (0x80 | code >> 6 & 0x3f) << SHIFT[(i++) & 3];
                    blocks[i >> 2] |= (0x80 | code & 0x3f) << SHIFT[(i++) & 3];
                }
            }
            this.lastByteIndex = i;
            this.bytes += i - this.start;
            if (i >= 64) {
                this.block = blocks[16];
                this.start = i - 64;
                this.hash();
                this.hashed = true;
            } else this.start = i;
        }
        if (this.bytes > 4294967295) {
            this.hBytes += this.bytes / 4294967296 << 0;
            this.bytes = this.bytes % 4294967296;
        }
        return this;
    };
    Sha256.prototype.finalize = function() {
        if (this.finalized) return;
        this.finalized = true;
        var blocks = this.blocks, i = this.lastByteIndex;
        blocks[16] = this.block;
        blocks[i >> 2] |= EXTRA[i & 3];
        this.block = blocks[16];
        if (i >= 56) {
            if (!this.hashed) this.hash();
            blocks[0] = this.block;
            blocks[16] = blocks[1] = blocks[2] = blocks[3] = blocks[4] = blocks[5] = blocks[6] = blocks[7] = blocks[8] = blocks[9] = blocks[10] = blocks[11] = blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
        }
        blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
        blocks[15] = this.bytes << 3;
        this.hash();
    };
    Sha256.prototype.hash = function() {
        var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4, f = this.h5, g = this.h6, h = this.h7, blocks = this.blocks, j, s0, s1, maj, t1, t2, ch, ab, da, cd, bc;
        for(j = 16; j < 64; ++j){
            // rightrotate
            t1 = blocks[j - 15];
            s0 = (t1 >>> 7 | t1 << 25) ^ (t1 >>> 18 | t1 << 14) ^ t1 >>> 3;
            t1 = blocks[j - 2];
            s1 = (t1 >>> 17 | t1 << 15) ^ (t1 >>> 19 | t1 << 13) ^ t1 >>> 10;
            blocks[j] = blocks[j - 16] + s0 + blocks[j - 7] + s1 << 0;
        }
        bc = b & c;
        for(j = 0; j < 64; j += 4){
            if (this.first) {
                if (this.is224) {
                    ab = 300032;
                    t1 = blocks[0] - 1413257819;
                    h = t1 - 150054599 << 0;
                    d = t1 + 24177077 << 0;
                } else {
                    ab = 704751109;
                    t1 = blocks[0] - 210244248;
                    h = t1 - 1521486534 << 0;
                    d = t1 + 143694565 << 0;
                }
                this.first = false;
            } else {
                s0 = (a >>> 2 | a << 30) ^ (a >>> 13 | a << 19) ^ (a >>> 22 | a << 10);
                s1 = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7);
                ab = a & b;
                maj = ab ^ a & c ^ bc;
                ch = e & f ^ ~e & g;
                t1 = h + s1 + ch + K[j] + blocks[j];
                t2 = s0 + maj;
                h = d + t1 << 0;
                d = t1 + t2 << 0;
            }
            s0 = (d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10);
            s1 = (h >>> 6 | h << 26) ^ (h >>> 11 | h << 21) ^ (h >>> 25 | h << 7);
            da = d & a;
            maj = da ^ d & b ^ ab;
            ch = h & e ^ ~h & f;
            t1 = g + s1 + ch + K[j + 1] + blocks[j + 1];
            t2 = s0 + maj;
            g = c + t1 << 0;
            c = t1 + t2 << 0;
            s0 = (c >>> 2 | c << 30) ^ (c >>> 13 | c << 19) ^ (c >>> 22 | c << 10);
            s1 = (g >>> 6 | g << 26) ^ (g >>> 11 | g << 21) ^ (g >>> 25 | g << 7);
            cd = c & d;
            maj = cd ^ c & a ^ da;
            ch = g & h ^ ~g & e;
            t1 = f + s1 + ch + K[j + 2] + blocks[j + 2];
            t2 = s0 + maj;
            f = b + t1 << 0;
            b = t1 + t2 << 0;
            s0 = (b >>> 2 | b << 30) ^ (b >>> 13 | b << 19) ^ (b >>> 22 | b << 10);
            s1 = (f >>> 6 | f << 26) ^ (f >>> 11 | f << 21) ^ (f >>> 25 | f << 7);
            bc = b & c;
            maj = bc ^ b & d ^ cd;
            ch = f & g ^ ~f & h;
            t1 = e + s1 + ch + K[j + 3] + blocks[j + 3];
            t2 = s0 + maj;
            e = a + t1 << 0;
            a = t1 + t2 << 0;
        }
        this.h0 = this.h0 + a << 0;
        this.h1 = this.h1 + b << 0;
        this.h2 = this.h2 + c << 0;
        this.h3 = this.h3 + d << 0;
        this.h4 = this.h4 + e << 0;
        this.h5 = this.h5 + f << 0;
        this.h6 = this.h6 + g << 0;
        this.h7 = this.h7 + h << 0;
    };
    Sha256.prototype.hex = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var hex = HEX_CHARS[h0 >> 28 & 0x0F] + HEX_CHARS[h0 >> 24 & 0x0F] + HEX_CHARS[h0 >> 20 & 0x0F] + HEX_CHARS[h0 >> 16 & 0x0F] + HEX_CHARS[h0 >> 12 & 0x0F] + HEX_CHARS[h0 >> 8 & 0x0F] + HEX_CHARS[h0 >> 4 & 0x0F] + HEX_CHARS[h0 & 0x0F] + HEX_CHARS[h1 >> 28 & 0x0F] + HEX_CHARS[h1 >> 24 & 0x0F] + HEX_CHARS[h1 >> 20 & 0x0F] + HEX_CHARS[h1 >> 16 & 0x0F] + HEX_CHARS[h1 >> 12 & 0x0F] + HEX_CHARS[h1 >> 8 & 0x0F] + HEX_CHARS[h1 >> 4 & 0x0F] + HEX_CHARS[h1 & 0x0F] + HEX_CHARS[h2 >> 28 & 0x0F] + HEX_CHARS[h2 >> 24 & 0x0F] + HEX_CHARS[h2 >> 20 & 0x0F] + HEX_CHARS[h2 >> 16 & 0x0F] + HEX_CHARS[h2 >> 12 & 0x0F] + HEX_CHARS[h2 >> 8 & 0x0F] + HEX_CHARS[h2 >> 4 & 0x0F] + HEX_CHARS[h2 & 0x0F] + HEX_CHARS[h3 >> 28 & 0x0F] + HEX_CHARS[h3 >> 24 & 0x0F] + HEX_CHARS[h3 >> 20 & 0x0F] + HEX_CHARS[h3 >> 16 & 0x0F] + HEX_CHARS[h3 >> 12 & 0x0F] + HEX_CHARS[h3 >> 8 & 0x0F] + HEX_CHARS[h3 >> 4 & 0x0F] + HEX_CHARS[h3 & 0x0F] + HEX_CHARS[h4 >> 28 & 0x0F] + HEX_CHARS[h4 >> 24 & 0x0F] + HEX_CHARS[h4 >> 20 & 0x0F] + HEX_CHARS[h4 >> 16 & 0x0F] + HEX_CHARS[h4 >> 12 & 0x0F] + HEX_CHARS[h4 >> 8 & 0x0F] + HEX_CHARS[h4 >> 4 & 0x0F] + HEX_CHARS[h4 & 0x0F] + HEX_CHARS[h5 >> 28 & 0x0F] + HEX_CHARS[h5 >> 24 & 0x0F] + HEX_CHARS[h5 >> 20 & 0x0F] + HEX_CHARS[h5 >> 16 & 0x0F] + HEX_CHARS[h5 >> 12 & 0x0F] + HEX_CHARS[h5 >> 8 & 0x0F] + HEX_CHARS[h5 >> 4 & 0x0F] + HEX_CHARS[h5 & 0x0F] + HEX_CHARS[h6 >> 28 & 0x0F] + HEX_CHARS[h6 >> 24 & 0x0F] + HEX_CHARS[h6 >> 20 & 0x0F] + HEX_CHARS[h6 >> 16 & 0x0F] + HEX_CHARS[h6 >> 12 & 0x0F] + HEX_CHARS[h6 >> 8 & 0x0F] + HEX_CHARS[h6 >> 4 & 0x0F] + HEX_CHARS[h6 & 0x0F];
        if (!this.is224) hex += HEX_CHARS[h7 >> 28 & 0x0F] + HEX_CHARS[h7 >> 24 & 0x0F] + HEX_CHARS[h7 >> 20 & 0x0F] + HEX_CHARS[h7 >> 16 & 0x0F] + HEX_CHARS[h7 >> 12 & 0x0F] + HEX_CHARS[h7 >> 8 & 0x0F] + HEX_CHARS[h7 >> 4 & 0x0F] + HEX_CHARS[h7 & 0x0F];
        return hex;
    };
    Sha256.prototype.toString = Sha256.prototype.hex;
    Sha256.prototype.digest = function() {
        this.finalize();
        var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4, h5 = this.h5, h6 = this.h6, h7 = this.h7;
        var arr = [
            h0 >> 24 & 0xFF,
            h0 >> 16 & 0xFF,
            h0 >> 8 & 0xFF,
            h0 & 0xFF,
            h1 >> 24 & 0xFF,
            h1 >> 16 & 0xFF,
            h1 >> 8 & 0xFF,
            h1 & 0xFF,
            h2 >> 24 & 0xFF,
            h2 >> 16 & 0xFF,
            h2 >> 8 & 0xFF,
            h2 & 0xFF,
            h3 >> 24 & 0xFF,
            h3 >> 16 & 0xFF,
            h3 >> 8 & 0xFF,
            h3 & 0xFF,
            h4 >> 24 & 0xFF,
            h4 >> 16 & 0xFF,
            h4 >> 8 & 0xFF,
            h4 & 0xFF,
            h5 >> 24 & 0xFF,
            h5 >> 16 & 0xFF,
            h5 >> 8 & 0xFF,
            h5 & 0xFF,
            h6 >> 24 & 0xFF,
            h6 >> 16 & 0xFF,
            h6 >> 8 & 0xFF,
            h6 & 0xFF
        ];
        if (!this.is224) arr.push(h7 >> 24 & 0xFF, h7 >> 16 & 0xFF, h7 >> 8 & 0xFF, h7 & 0xFF);
        return arr;
    };
    Sha256.prototype.array = Sha256.prototype.digest;
    Sha256.prototype.arrayBuffer = function() {
        this.finalize();
        var buffer = new ArrayBuffer(this.is224 ? 28 : 32);
        var dataView = new DataView(buffer);
        dataView.setUint32(0, this.h0);
        dataView.setUint32(4, this.h1);
        dataView.setUint32(8, this.h2);
        dataView.setUint32(12, this.h3);
        dataView.setUint32(16, this.h4);
        dataView.setUint32(20, this.h5);
        dataView.setUint32(24, this.h6);
        if (!this.is224) dataView.setUint32(28, this.h7);
        return buffer;
    };
    function HmacSha256(key, is224, sharedMemory) {
        var i, type = typeof key;
        if (type === 'string') {
            var bytes = [], length = key.length, index = 0, code;
            for(i = 0; i < length; ++i){
                code = key.charCodeAt(i);
                if (code < 0x80) bytes[index++] = code;
                else if (code < 0x800) {
                    bytes[index++] = 0xc0 | code >> 6;
                    bytes[index++] = 0x80 | code & 0x3f;
                } else if (code < 0xd800 || code >= 0xe000) {
                    bytes[index++] = 0xe0 | code >> 12;
                    bytes[index++] = 0x80 | code >> 6 & 0x3f;
                    bytes[index++] = 0x80 | code & 0x3f;
                } else {
                    code = 0x10000 + ((code & 0x3ff) << 10 | key.charCodeAt(++i) & 0x3ff);
                    bytes[index++] = 0xf0 | code >> 18;
                    bytes[index++] = 0x80 | code >> 12 & 0x3f;
                    bytes[index++] = 0x80 | code >> 6 & 0x3f;
                    bytes[index++] = 0x80 | code & 0x3f;
                }
            }
            key = bytes;
        } else {
            if (type === 'object') {
                if (key === null) throw new Error(ERROR);
                else if (ARRAY_BUFFER && key.constructor === ArrayBuffer) key = new Uint8Array(key);
                else if (!Array.isArray(key)) {
                    if (!ARRAY_BUFFER || !ArrayBuffer.isView(key)) throw new Error(ERROR);
                }
            } else throw new Error(ERROR);
        }
        if (key.length > 64) key = new Sha256(is224, true).update(key).array();
        var oKeyPad = [], iKeyPad = [];
        for(i = 0; i < 64; ++i){
            var b = key[i] || 0;
            oKeyPad[i] = 0x5c ^ b;
            iKeyPad[i] = 0x36 ^ b;
        }
        Sha256.call(this, is224, sharedMemory);
        this.update(iKeyPad);
        this.oKeyPad = oKeyPad;
        this.inner = true;
        this.sharedMemory = sharedMemory;
    }
    HmacSha256.prototype = new Sha256();
    HmacSha256.prototype.finalize = function() {
        Sha256.prototype.finalize.call(this);
        if (this.inner) {
            this.inner = false;
            var innerHash = this.array();
            Sha256.call(this, this.is224, this.sharedMemory);
            this.update(this.oKeyPad);
            this.update(innerHash);
            Sha256.prototype.finalize.call(this);
        }
    };
    var exports = createMethod();
    exports.sha256 = exports;
    exports.sha224 = createMethod(true);
    exports.sha256.hmac = createHmacMethod();
    exports.sha224.hmac = createHmacMethod(true);
    if (COMMON_JS) module.exports = exports;
    else {
        root.sha256 = exports.sha256;
        root.sha224 = exports.sha224;
        if (AMD) define(function() {
            return exports;
        });
    }
})();

},{"process":"d5jf4"}],"e7kH3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WalletLinkRelayAbstract = exports.LOCAL_STORAGE_ADDRESSES_KEY = exports.WALLET_USER_NAME_KEY = void 0;
exports.WALLET_USER_NAME_KEY = "walletUsername";
exports.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
class WalletLinkRelayAbstract {
}
exports.WalletLinkRelayAbstract = WalletLinkRelayAbstract;

},{}],"e13Ba":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
const util = require('./util');
const abi = require('./abi');
const TYPED_MESSAGE_SCHEMA = {
    type: 'object',
    properties: {
        types: {
            type: 'object',
            additionalProperties: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        name: {
                            type: 'string'
                        },
                        type: {
                            type: 'string'
                        }
                    },
                    required: [
                        'name',
                        'type'
                    ]
                }
            }
        },
        primaryType: {
            type: 'string'
        },
        domain: {
            type: 'object'
        },
        message: {
            type: 'object'
        }
    },
    required: [
        'types',
        'primaryType',
        'domain',
        'message'
    ]
};
/**
 * A collection of utility functions used for signing typed data
 */ const TypedDataUtils = {
    /**
   * Encodes an object by encoding and concatenating each of its members
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of an object
   */ encodeData (primaryType, data, types, useV4 = true) {
        const encodedTypes = [
            'bytes32'
        ];
        const encodedValues = [
            this.hashType(primaryType, types)
        ];
        if (useV4) {
            const encodeField = (name, type1, value1)=>{
                if (types[type1] !== undefined) return [
                    'bytes32',
                    value1 == null ? '0x0000000000000000000000000000000000000000000000000000000000000000' : util.keccak(this.encodeData(type1, value1, types, useV4))
                ];
                if (value1 === undefined) throw new Error(`missing value for field ${name} of type ${type1}`);
                if (type1 === 'bytes') return [
                    'bytes32',
                    util.keccak(value1)
                ];
                if (type1 === 'string') {
                    // convert string to buffer - prevents ethUtil from interpreting strings like '0xabcd' as hex
                    if (typeof value1 === 'string') value1 = Buffer.from(value1, 'utf8');
                    return [
                        'bytes32',
                        util.keccak(value1)
                    ];
                }
                if (type1.lastIndexOf(']') === type1.length - 1) {
                    const parsedType = type1.slice(0, type1.lastIndexOf('['));
                    const typeValuePairs = value1.map((item)=>encodeField(name, parsedType, item)
                    );
                    return [
                        'bytes32',
                        util.keccak(abi.rawEncode(typeValuePairs.map(([type])=>type
                        ), typeValuePairs.map(([, value])=>value
                        )))
                    ];
                }
                return [
                    type1,
                    value1
                ];
            };
            for (const field of types[primaryType]){
                const [type, value] = encodeField(field.name, field.type, data[field.name]);
                encodedTypes.push(type);
                encodedValues.push(value);
            }
        } else for (const field of types[primaryType]){
            let value = data[field.name];
            if (value !== undefined) {
                if (field.type === 'bytes') {
                    encodedTypes.push('bytes32');
                    value = util.keccak(value);
                    encodedValues.push(value);
                } else if (field.type === 'string') {
                    encodedTypes.push('bytes32');
                    // convert string to buffer - prevents ethUtil from interpreting strings like '0xabcd' as hex
                    if (typeof value === 'string') value = Buffer.from(value, 'utf8');
                    value = util.keccak(value);
                    encodedValues.push(value);
                } else if (types[field.type] !== undefined) {
                    encodedTypes.push('bytes32');
                    value = util.keccak(this.encodeData(field.type, value, types, useV4));
                    encodedValues.push(value);
                } else if (field.type.lastIndexOf(']') === field.type.length - 1) throw new Error('Arrays currently unimplemented in encodeData');
                else {
                    encodedTypes.push(field.type);
                    encodedValues.push(value);
                }
            }
        }
        return abi.rawEncode(encodedTypes, encodedValues);
    },
    /**
   * Encodes the type of an object by encoding a comma delimited list of its members
   *
   * @param {string} primaryType - Root type to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of the type of an object
   */ encodeType (primaryType, types) {
        let result = '';
        let deps = this.findTypeDependencies(primaryType, types).filter((dep)=>dep !== primaryType
        );
        deps = [
            primaryType
        ].concat(deps.sort());
        for (const type2 of deps){
            const children = types[type2];
            if (!children) throw new Error('No type definition specified: ' + type2);
            result += type2 + '(' + types[type2].map(({ name , type  })=>type + ' ' + name
            ).join(',') + ')';
        }
        return result;
    },
    /**
   * Finds all types within a type defintion object
   *
   * @param {string} primaryType - Root type
   * @param {Object} types - Type definitions
   * @param {Array} results - current set of accumulated types
   * @returns {Array} - Set of all types found in the type definition
   */ findTypeDependencies (primaryType, types, results = []) {
        primaryType = primaryType.match(/^\w*/)[0];
        if (results.includes(primaryType) || types[primaryType] === undefined) return results;
        results.push(primaryType);
        for (const field of types[primaryType])for (const dep of this.findTypeDependencies(field.type, types, results))!results.includes(dep) && results.push(dep);
        return results;
    },
    /**
   * Hashes an object
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to hash
   * @param {Object} types - Type definitions
   * @returns {string} - Hash of an object
   */ hashStruct (primaryType, data, types, useV4 = true) {
        return util.keccak(this.encodeData(primaryType, data, types, useV4));
    },
    /**
   * Hashes the type of an object
   *
   * @param {string} primaryType - Root type to hash
   * @param {Object} types - Type definitions
   * @returns {string} - Hash of an object
   */ hashType (primaryType, types) {
        return util.keccak(this.encodeType(primaryType, types));
    },
    /**
   * Removes properties from a message object that are not defined per EIP-712
   *
   * @param {Object} data - typed message object
   * @returns {Object} - typed message object with only allowed fields
   */ sanitizeData (data) {
        const sanitizedData = {};
        for(const key in TYPED_MESSAGE_SCHEMA.properties)data[key] && (sanitizedData[key] = data[key]);
        if (sanitizedData.types) sanitizedData.types = Object.assign({
            EIP712Domain: []
        }, sanitizedData.types);
        return sanitizedData;
    },
    /**
   * Returns the hash of a typed message as per EIP-712 for signing
   *
   * @param {Object} typedData - Types message data to sign
   * @returns {string} - sha3 hash for signing
   */ hash (typedData, useV4 = true) {
        const sanitizedData = this.sanitizeData(typedData);
        const parts = [
            Buffer.from('1901', 'hex')
        ];
        parts.push(this.hashStruct('EIP712Domain', sanitizedData.domain, sanitizedData.types, useV4));
        if (sanitizedData.primaryType !== 'EIP712Domain') parts.push(this.hashStruct(sanitizedData.primaryType, sanitizedData.message, sanitizedData.types, useV4));
        return util.keccak(Buffer.concat(parts));
    }
};
module.exports = {
    TYPED_MESSAGE_SCHEMA,
    TypedDataUtils,
    hashForSignTypedDataLegacy: function(msgParams) {
        return typedSignatureHashLegacy(msgParams.data);
    },
    hashForSignTypedData_v3: function(msgParams) {
        return TypedDataUtils.hash(msgParams.data, false);
    },
    hashForSignTypedData_v4: function(msgParams) {
        return TypedDataUtils.hash(msgParams.data);
    }
};
/**
 * @param typedData - Array of data along with types, as per EIP712.
 * @returns Buffer
 */ function typedSignatureHashLegacy(typedData) {
    const error = new Error('Expect argument to be non-empty array');
    if (typeof typedData !== 'object' || !typedData.length) throw error;
    const data = typedData.map(function(e) {
        return e.type === 'bytes' ? util.toBuffer(e.value) : e.value;
    });
    const types = typedData.map(function(e) {
        return e.type;
    });
    const schema = typedData.map(function(e) {
        if (!e.name) throw error;
        return e.type + ' ' + e.name;
    });
    return abi.soliditySHA3([
        'bytes32',
        'bytes32'
    ], [
        abi.soliditySHA3(new Array(typedData.length).fill('string'), schema),
        abi.soliditySHA3(types, data)
    ]);
}

},{"buffer":"fCgem","./util":"XGx7F","./abi":"1VRj9"}],"XGx7F":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
// Extracted from https://github.com/ethereumjs/ethereumjs-util and stripped out irrelevant code
// Original code licensed under the Mozilla Public License Version 2.0
const createKeccakHash = require('keccak/js');
const BN = require('bn.js');
/**
 * Returns a buffer filled with 0s
 * @method zeros
 * @param {Number} bytes  the number of bytes the buffer should be
 * @return {Buffer}
 */ function zeros(bytes) {
    return Buffer.allocUnsafe(bytes).fill(0);
}
/**
 * Left Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @method setLength
 * @param {Buffer|Array} msg the value to pad
 * @param {Number} length the number of bytes the output should be
 * @param {Boolean} [right=false] whether to start padding form the left or right
 * @return {Buffer|Array}
 */ function setLength(msg, length, right) {
    const buf = zeros(length);
    msg = toBuffer(msg);
    if (right) {
        if (msg.length < length) {
            msg.copy(buf);
            return buf;
        }
        return msg.slice(0, length);
    } else {
        if (msg.length < length) {
            msg.copy(buf, length - msg.length);
            return buf;
        }
        return msg.slice(-length);
    }
}
/**
 * Right Pads an `Array` or `Buffer` with leading zeros till it has `length` bytes.
 * Or it truncates the beginning if it exceeds.
 * @param {Buffer|Array} msg the value to pad
 * @param {Number} length the number of bytes the output should be
 * @return {Buffer|Array}
 */ function setLengthRight(msg, length) {
    return setLength(msg, length, true);
}
/**
 * Attempts to turn a value into a `Buffer`. As input it supports `Buffer`, `String`, `Number`, null/undefined, `BN` and other objects with a `toArray()` method.
 * @param {*} v the value
 */ function toBuffer(v) {
    if (!Buffer.isBuffer(v)) {
        if (Array.isArray(v)) v = Buffer.from(v);
        else if (typeof v === 'string') {
            if (isHexString(v)) v = Buffer.from(padToEven(stripHexPrefix(v)), 'hex');
            else v = Buffer.from(v);
        } else if (typeof v === 'number') v = intToBuffer(v);
        else if (v === null || v === undefined) v = Buffer.allocUnsafe(0);
        else if (BN.isBN(v)) v = v.toArrayLike(Buffer);
        else if (v.toArray) // converts a BN to a Buffer
        v = Buffer.from(v.toArray());
        else throw new Error('invalid type');
    }
    return v;
}
/**
 * Converts a `Buffer` into a hex `String`
 * @param {Buffer} buf
 * @return {String}
 */ function bufferToHex(buf) {
    buf = toBuffer(buf);
    return '0x' + buf.toString('hex');
}
/**
 * Creates Keccak hash of the input
 * @param {Buffer|Array|String|Number} a the input data
 * @param {Number} [bits=256] the Keccak width
 * @return {Buffer}
 */ function keccak(a, bits) {
    a = toBuffer(a);
    if (!bits) bits = 256;
    return createKeccakHash('keccak' + bits).update(a).digest();
}
function padToEven(str) {
    return str.length % 2 ? '0' + str : str;
}
function isHexString(str) {
    return typeof str === 'string' && str.match(/^0x[0-9A-Fa-f]*$/);
}
function stripHexPrefix(str) {
    if (typeof str === 'string' && str.startsWith('0x')) return str.slice(2);
    return str;
}
module.exports = {
    zeros,
    setLength,
    setLengthRight,
    isHexString,
    stripHexPrefix,
    toBuffer,
    bufferToHex,
    keccak
};

},{"buffer":"fCgem","keccak/js":"cOBab","bn.js":"l407W"}],"1VRj9":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
// Extracted from https://github.com/ethereumjs/ethereumjs-abi and stripped out irrelevant code
// Original code licensed under the MIT License - Copyright (c) 2015 Alex Beregszaszi
const util = require('./util');
const BN = require('bn.js');
// Convert from short to canonical names
// FIXME: optimise or make this nicer?
function elementaryName(name) {
    if (name.startsWith('int[')) return 'int256' + name.slice(3);
    else if (name === 'int') return 'int256';
    else if (name.startsWith('uint[')) return 'uint256' + name.slice(4);
    else if (name === 'uint') return 'uint256';
    else if (name.startsWith('fixed[')) return 'fixed128x128' + name.slice(5);
    else if (name === 'fixed') return 'fixed128x128';
    else if (name.startsWith('ufixed[')) return 'ufixed128x128' + name.slice(6);
    else if (name === 'ufixed') return 'ufixed128x128';
    return name;
}
// Parse N from type<N>
function parseTypeN(type) {
    return parseInt(/^\D+(\d+)$/.exec(type)[1], 10);
}
// Parse N,M from type<N>x<M>
function parseTypeNxM(type) {
    var tmp = /^\D+(\d+)x(\d+)$/.exec(type);
    return [
        parseInt(tmp[1], 10),
        parseInt(tmp[2], 10)
    ];
}
// Parse N in type[<N>] where "type" can itself be an array type.
function parseTypeArray(type) {
    var tmp = type.match(/(.*)\[(.*?)\]$/);
    if (tmp) return tmp[2] === '' ? 'dynamic' : parseInt(tmp[2], 10);
    return null;
}
function parseNumber(arg) {
    var type = typeof arg;
    if (type === 'string') {
        if (util.isHexString(arg)) return new BN(util.stripHexPrefix(arg), 16);
        else return new BN(arg, 10);
    } else if (type === 'number') return new BN(arg);
    else if (arg.toArray) // assume this is a BN for the moment, replace with BN.isBN soon
    return arg;
    else throw new Error('Argument is not a number');
}
// Encodes a single item (can be dynamic array)
// @returns: Buffer
function encodeSingle(type, arg) {
    var size, num, ret, i;
    if (type === 'address') return encodeSingle('uint160', parseNumber(arg));
    else if (type === 'bool') return encodeSingle('uint8', arg ? 1 : 0);
    else if (type === 'string') return encodeSingle('bytes', new Buffer(arg, 'utf8'));
    else if (isArray(type)) {
        // this part handles fixed-length ([2]) and variable length ([]) arrays
        // NOTE: we catch here all calls to arrays, that simplifies the rest
        if (typeof arg.length === 'undefined') throw new Error('Not an array?');
        size = parseTypeArray(type);
        if (size !== 'dynamic' && size !== 0 && arg.length > size) throw new Error('Elements exceed array size: ' + size);
        ret = [];
        type = type.slice(0, type.lastIndexOf('['));
        if (typeof arg === 'string') arg = JSON.parse(arg);
        for(i in arg)ret.push(encodeSingle(type, arg[i]));
        if (size === 'dynamic') {
            var length = encodeSingle('uint256', arg.length);
            ret.unshift(length);
        }
        return Buffer.concat(ret);
    } else if (type === 'bytes') {
        arg = new Buffer(arg);
        ret = Buffer.concat([
            encodeSingle('uint256', arg.length),
            arg
        ]);
        if (arg.length % 32 !== 0) ret = Buffer.concat([
            ret,
            util.zeros(32 - arg.length % 32)
        ]);
        return ret;
    } else if (type.startsWith('bytes')) {
        size = parseTypeN(type);
        if (size < 1 || size > 32) throw new Error('Invalid bytes<N> width: ' + size);
        return util.setLengthRight(arg, 32);
    } else if (type.startsWith('uint')) {
        size = parseTypeN(type);
        if (size % 8 || size < 8 || size > 256) throw new Error('Invalid uint<N> width: ' + size);
        num = parseNumber(arg);
        if (num.bitLength() > size) throw new Error('Supplied uint exceeds width: ' + size + ' vs ' + num.bitLength());
        if (num < 0) throw new Error('Supplied uint is negative');
        return num.toArrayLike(Buffer, 'be', 32);
    } else if (type.startsWith('int')) {
        size = parseTypeN(type);
        if (size % 8 || size < 8 || size > 256) throw new Error('Invalid int<N> width: ' + size);
        num = parseNumber(arg);
        if (num.bitLength() > size) throw new Error('Supplied int exceeds width: ' + size + ' vs ' + num.bitLength());
        return num.toTwos(256).toArrayLike(Buffer, 'be', 32);
    } else if (type.startsWith('ufixed')) {
        size = parseTypeNxM(type);
        num = parseNumber(arg);
        if (num < 0) throw new Error('Supplied ufixed is negative');
        return encodeSingle('uint256', num.mul(new BN(2).pow(new BN(size[1]))));
    } else if (type.startsWith('fixed')) {
        size = parseTypeNxM(type);
        return encodeSingle('int256', parseNumber(arg).mul(new BN(2).pow(new BN(size[1]))));
    }
    throw new Error('Unsupported or invalid type: ' + type);
}
// Is a type dynamic?
function isDynamic(type) {
    // FIXME: handle all types? I don't think anything is missing now
    return type === 'string' || type === 'bytes' || parseTypeArray(type) === 'dynamic';
}
// Is a type an array?
function isArray(type) {
    return type.lastIndexOf(']') === type.length - 1;
}
// Encode a method/event with arguments
// @types an array of string type names
// @args  an array of the appropriate values
function rawEncode(types, values) {
    var output = [];
    var data = [];
    var headLength = 32 * types.length;
    for(var i in types){
        var type = elementaryName(types[i]);
        var value = values[i];
        var cur = encodeSingle(type, value);
        // Use the head/tail method for storing dynamic data
        if (isDynamic(type)) {
            output.push(encodeSingle('uint256', headLength));
            data.push(cur);
            headLength += cur.length;
        } else output.push(cur);
    }
    return Buffer.concat(output.concat(data));
}
function solidityPack(types, values) {
    if (types.length !== values.length) throw new Error('Number of types are not matching the values');
    var size, num;
    var ret = [];
    for(var i = 0; i < types.length; i++){
        var type = elementaryName(types[i]);
        var value = values[i];
        if (type === 'bytes') ret.push(value);
        else if (type === 'string') ret.push(new Buffer(value, 'utf8'));
        else if (type === 'bool') ret.push(new Buffer(value ? '01' : '00', 'hex'));
        else if (type === 'address') ret.push(util.setLength(value, 20));
        else if (type.startsWith('bytes')) {
            size = parseTypeN(type);
            if (size < 1 || size > 32) throw new Error('Invalid bytes<N> width: ' + size);
            ret.push(util.setLengthRight(value, size));
        } else if (type.startsWith('uint')) {
            size = parseTypeN(type);
            if (size % 8 || size < 8 || size > 256) throw new Error('Invalid uint<N> width: ' + size);
            num = parseNumber(value);
            if (num.bitLength() > size) throw new Error('Supplied uint exceeds width: ' + size + ' vs ' + num.bitLength());
            ret.push(num.toArrayLike(Buffer, 'be', size / 8));
        } else if (type.startsWith('int')) {
            size = parseTypeN(type);
            if (size % 8 || size < 8 || size > 256) throw new Error('Invalid int<N> width: ' + size);
            num = parseNumber(value);
            if (num.bitLength() > size) throw new Error('Supplied int exceeds width: ' + size + ' vs ' + num.bitLength());
            ret.push(num.toTwos(size).toArrayLike(Buffer, 'be', size / 8));
        } else // FIXME: support all other types
        throw new Error('Unsupported or invalid type: ' + type);
    }
    return Buffer.concat(ret);
}
function soliditySHA3(types, values) {
    return util.keccak(solidityPack(types, values));
}
module.exports = {
    rawEncode,
    solidityPack,
    soliditySHA3
};

},{"buffer":"fCgem","./util":"XGx7F","bn.js":"l407W"}],"g1bWl":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filterFromParam = exports.FilterPolyfill = void 0;
const types_1 = require("../types");
const util_1 = require("../util");
const TIMEOUT = 300000; // 5 minutes
const JSONRPC_TEMPLATE = {
    jsonrpc: "2.0",
    id: 0
};
class FilterPolyfill {
    constructor(provider){
        this.logFilters = new Map(); // <id, filter>
        this.blockFilters = new Set(); // <id>
        this.pendingTransactionFilters = new Set(); // <id, true>
        this.cursors = new Map(); // <id, cursor>
        this.timeouts = new Map(); // <id, setTimeout id>
        this.nextFilterId = (0, types_1.IntNumber)(1);
        this.provider = provider;
    }
    async newFilter(param) {
        const filter = filterFromParam(param);
        const id = this.makeFilterId();
        const cursor = await this.setInitialCursorPosition(id, filter.fromBlock);
        console.log(`Installing new log filter(${id}):`, filter, "initial cursor position:", cursor);
        this.logFilters.set(id, filter);
        this.setFilterTimeout(id);
        return (0, util_1.hexStringFromIntNumber)(id);
    }
    async newBlockFilter() {
        const id = this.makeFilterId();
        const cursor = await this.setInitialCursorPosition(id, "latest");
        console.log(`Installing new block filter (${id}) with initial cursor position:`, cursor);
        this.blockFilters.add(id);
        this.setFilterTimeout(id);
        return (0, util_1.hexStringFromIntNumber)(id);
    }
    async newPendingTransactionFilter() {
        const id = this.makeFilterId();
        const cursor = await this.setInitialCursorPosition(id, "latest");
        console.log(`Installing new block filter (${id}) with initial cursor position:`, cursor);
        this.pendingTransactionFilters.add(id);
        this.setFilterTimeout(id);
        return (0, util_1.hexStringFromIntNumber)(id);
    }
    uninstallFilter(filterId) {
        const id = (0, util_1.intNumberFromHexString)(filterId);
        console.log(`Uninstalling filter (${id})`);
        this.deleteFilter(id);
        return true;
    }
    getFilterChanges(filterId) {
        const id = (0, util_1.intNumberFromHexString)(filterId);
        if (this.timeouts.has(id)) // extend timeout
        this.setFilterTimeout(id);
        if (this.logFilters.has(id)) return this.getLogFilterChanges(id);
        else if (this.blockFilters.has(id)) return this.getBlockFilterChanges(id);
        else if (this.pendingTransactionFilters.has(id)) return this.getPendingTransactionFilterChanges(id);
        return Promise.resolve(filterNotFoundError());
    }
    async getFilterLogs(filterId) {
        const id = (0, util_1.intNumberFromHexString)(filterId);
        const filter = this.logFilters.get(id);
        if (!filter) return filterNotFoundError();
        return this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), {
            method: "eth_getLogs",
            params: [
                paramFromFilter(filter)
            ]
        }));
    }
    makeFilterId() {
        return (0, types_1.IntNumber)(++this.nextFilterId);
    }
    sendAsyncPromise(request) {
        return new Promise((resolve, reject)=>{
            this.provider.sendAsync(request, (err, response)=>{
                if (err) return reject(err);
                if (Array.isArray(response) || response == null) return reject(new Error(`unexpected response received: ${JSON.stringify(response)}`));
                resolve(response);
            });
        });
    }
    deleteFilter(id) {
        console.log(`Deleting filter (${id})`);
        this.logFilters.delete(id);
        this.blockFilters.delete(id);
        this.pendingTransactionFilters.delete(id);
        this.cursors.delete(id);
        this.timeouts.delete(id);
    }
    async getLogFilterChanges(id) {
        const filter = this.logFilters.get(id);
        const cursorPosition = this.cursors.get(id);
        if (!cursorPosition || !filter) return filterNotFoundError();
        const currentBlockHeight = await this.getCurrentBlockHeight();
        const toBlock = filter.toBlock === "latest" ? currentBlockHeight : filter.toBlock;
        if (cursorPosition > currentBlockHeight) return emptyResult();
        if (cursorPosition > filter.toBlock) return emptyResult();
        console.log(`Fetching logs from ${cursorPosition} to ${toBlock} for filter ${id}`);
        const response = await this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), {
            method: "eth_getLogs",
            params: [
                paramFromFilter(Object.assign(Object.assign({}, filter), {
                    fromBlock: cursorPosition,
                    toBlock
                }))
            ]
        }));
        if (Array.isArray(response.result)) {
            const blocks = response.result.map((log)=>(0, util_1.intNumberFromHexString)(log.blockNumber || "0x0")
            );
            const highestBlock = Math.max(...blocks);
            if (highestBlock && highestBlock > cursorPosition) {
                const newCursorPosition = (0, types_1.IntNumber)(highestBlock + 1);
                console.log(`Moving cursor position for filter (${id}) from ${cursorPosition} to ${newCursorPosition}`);
                this.cursors.set(id, newCursorPosition);
            }
        }
        return response;
    }
    async getBlockFilterChanges(id) {
        const cursorPosition = this.cursors.get(id);
        if (!cursorPosition) return filterNotFoundError();
        const currentBlockHeight = await this.getCurrentBlockHeight();
        if (cursorPosition > currentBlockHeight) return emptyResult();
        console.log(`Fetching blocks from ${cursorPosition} to ${currentBlockHeight} for filter (${id})`);
        const blocks = (await Promise.all((0, util_1.range)(cursorPosition, currentBlockHeight + 1).map((i)=>this.getBlockHashByNumber((0, types_1.IntNumber)(i))
        ))).filter((hash)=>!!hash
        );
        const newCursorPosition = (0, types_1.IntNumber)(cursorPosition + blocks.length);
        console.log(`Moving cursor position for filter (${id}) from ${cursorPosition} to ${newCursorPosition}`);
        this.cursors.set(id, newCursorPosition);
        return Object.assign(Object.assign({}, JSONRPC_TEMPLATE), {
            result: blocks
        });
    }
    async getPendingTransactionFilterChanges(_id) {
        // pending transaction filters are not supported
        return Promise.resolve(emptyResult());
    }
    async setInitialCursorPosition(id, startBlock) {
        const currentBlockHeight = await this.getCurrentBlockHeight();
        const initialCursorPosition = typeof startBlock === "number" && startBlock > currentBlockHeight ? startBlock : currentBlockHeight;
        this.cursors.set(id, initialCursorPosition);
        return initialCursorPosition;
    }
    setFilterTimeout(id) {
        const existing = this.timeouts.get(id);
        if (existing) window.clearTimeout(existing);
        const timeout = window.setTimeout(()=>{
            console.log(`Filter (${id}) timed out`);
            this.deleteFilter(id);
        }, TIMEOUT);
        this.timeouts.set(id, timeout);
    }
    async getCurrentBlockHeight() {
        const { result  } = await this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), {
            method: "eth_blockNumber",
            params: []
        }));
        return (0, util_1.intNumberFromHexString)((0, util_1.ensureHexString)(result));
    }
    async getBlockHashByNumber(blockNumber) {
        const response = await this.sendAsyncPromise(Object.assign(Object.assign({}, JSONRPC_TEMPLATE), {
            method: "eth_getBlockByNumber",
            params: [
                (0, util_1.hexStringFromIntNumber)(blockNumber),
                false
            ]
        }));
        if (response.result && typeof response.result.hash === "string") return (0, util_1.ensureHexString)(response.result.hash);
        return null;
    }
}
exports.FilterPolyfill = FilterPolyfill;
function filterFromParam(param) {
    return {
        fromBlock: intBlockHeightFromHexBlockHeight(param.fromBlock),
        toBlock: intBlockHeightFromHexBlockHeight(param.toBlock),
        addresses: param.address === undefined ? null : Array.isArray(param.address) ? param.address : [
            param.address
        ],
        topics: param.topics || []
    };
}
exports.filterFromParam = filterFromParam;
function paramFromFilter(filter) {
    const param = {
        fromBlock: hexBlockHeightFromIntBlockHeight(filter.fromBlock),
        toBlock: hexBlockHeightFromIntBlockHeight(filter.toBlock),
        topics: filter.topics
    };
    if (filter.addresses !== null) param.address = filter.addresses;
    return param;
}
function intBlockHeightFromHexBlockHeight(value) {
    if (value === undefined || value === "latest" || value === "pending") return "latest";
    else if (value === "earliest") return (0, types_1.IntNumber)(0);
    else if ((0, util_1.isHexString)(value)) return (0, util_1.intNumberFromHexString)(value);
    throw new Error(`Invalid block option: ${value}`);
}
function hexBlockHeightFromIntBlockHeight(value) {
    if (value === "latest") return value;
    return (0, util_1.hexStringFromIntNumber)(value);
}
function filterNotFoundError() {
    return Object.assign(Object.assign({}, JSONRPC_TEMPLATE), {
        error: {
            code: -32000,
            message: "filter not found"
        }
    });
}
function emptyResult() {
    return Object.assign(Object.assign({}, JSONRPC_TEMPLATE), {
        result: []
    });
}

},{"../types":"119nQ","../util":"8WKyV"}],"8XZbp":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JSONRPCMethod = void 0;
var JSONRPCMethod;
(function(JSONRPCMethod1) {
    // synchronous or asynchronous
    JSONRPCMethod1["eth_accounts"] = "eth_accounts";
    JSONRPCMethod1["eth_coinbase"] = "eth_coinbase";
    JSONRPCMethod1["net_version"] = "net_version";
    JSONRPCMethod1["eth_chainId"] = "eth_chainId";
    JSONRPCMethod1["eth_uninstallFilter"] = "eth_uninstallFilter";
    // asynchronous only
    JSONRPCMethod1["eth_requestAccounts"] = "eth_requestAccounts";
    JSONRPCMethod1["eth_sign"] = "eth_sign";
    JSONRPCMethod1["eth_ecRecover"] = "eth_ecRecover";
    JSONRPCMethod1["personal_sign"] = "personal_sign";
    JSONRPCMethod1["personal_ecRecover"] = "personal_ecRecover";
    JSONRPCMethod1["eth_signTransaction"] = "eth_signTransaction";
    JSONRPCMethod1["eth_sendRawTransaction"] = "eth_sendRawTransaction";
    JSONRPCMethod1["eth_sendTransaction"] = "eth_sendTransaction";
    JSONRPCMethod1["eth_signTypedData_v1"] = "eth_signTypedData_v1";
    JSONRPCMethod1["eth_signTypedData_v2"] = "eth_signTypedData_v2";
    JSONRPCMethod1["eth_signTypedData_v3"] = "eth_signTypedData_v3";
    JSONRPCMethod1["eth_signTypedData_v4"] = "eth_signTypedData_v4";
    JSONRPCMethod1["eth_signTypedData"] = "eth_signTypedData";
    JSONRPCMethod1["walletlink_arbitrary"] = "walletlink_arbitrary";
    JSONRPCMethod1["wallet_addEthereumChain"] = "wallet_addEthereumChain";
    JSONRPCMethod1["wallet_switchEthereumChain"] = "wallet_switchEthereumChain";
    // asynchronous pub/sub
    JSONRPCMethod1["eth_subscribe"] = "eth_subscribe";
    JSONRPCMethod1["eth_unsubscribe"] = "eth_unsubscribe";
    // asynchronous filter methods
    JSONRPCMethod1["eth_newFilter"] = "eth_newFilter";
    JSONRPCMethod1["eth_newBlockFilter"] = "eth_newBlockFilter";
    JSONRPCMethod1["eth_newPendingTransactionFilter"] = "eth_newPendingTransactionFilter";
    JSONRPCMethod1["eth_getFilterChanges"] = "eth_getFilterChanges";
    JSONRPCMethod1["eth_getFilterLogs"] = "eth_getFilterLogs";
})(JSONRPCMethod = exports.JSONRPCMethod || (exports.JSONRPCMethod = {}));

},{}],"cCIQX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SubscriptionManager = void 0;
const PollingBlockTracker = require("eth-block-tracker");
const createSubscriptionManager = require("eth-json-rpc-filters/subscriptionManager");
const noop = ()=>{};
class SubscriptionManager {
    constructor(provider){
        const blockTracker = new PollingBlockTracker({
            provider,
            pollingInterval: 15000,
            setSkipCacheFlag: true
        });
        const { events , middleware  } = createSubscriptionManager({
            blockTracker,
            provider
        });
        this.events = events;
        this.subscriptionMiddleware = middleware;
    }
    async handleRequest(request) {
        const result = {};
        await this.subscriptionMiddleware(request, result, noop, noop);
        return result;
    }
    destroy() {
        this.subscriptionMiddleware.destroy();
    }
}
exports.SubscriptionManager = SubscriptionManager;

},{"eth-block-tracker":"aPtG8","eth-json-rpc-filters/subscriptionManager":"aysAv"}],"aPtG8":[function(require,module,exports) {
const pify = require('pify');
const BaseBlockTracker = require('./base');
const sec = 1000;
class PollingBlockTracker extends BaseBlockTracker {
    constructor(opts = {}){
        // parse + validate args
        if (!opts.provider) throw new Error('PollingBlockTracker - no provider specified.');
        const pollingInterval = opts.pollingInterval || 20 * sec;
        const retryTimeout = opts.retryTimeout || pollingInterval / 10;
        const keepEventLoopActive = opts.keepEventLoopActive !== undefined ? opts.keepEventLoopActive : true;
        const setSkipCacheFlag = opts.setSkipCacheFlag || false;
        // BaseBlockTracker constructor
        super(Object.assign({
            blockResetDuration: pollingInterval
        }, opts));
        // config
        this._provider = opts.provider;
        this._pollingInterval = pollingInterval;
        this._retryTimeout = retryTimeout;
        this._keepEventLoopActive = keepEventLoopActive;
        this._setSkipCacheFlag = setSkipCacheFlag;
    }
    //
    // public
    //
    // trigger block polling
    async checkForLatestBlock() {
        await this._updateLatestBlock();
        return await this.getLatestBlock();
    }
    //
    // private
    //
    _start() {
        this._performSync().catch((err)=>this.emit('error', err)
        );
    }
    async _performSync() {
        while(this._isRunning)try {
            await this._updateLatestBlock();
            await timeout(this._pollingInterval, !this._keepEventLoopActive);
        } catch (err) {
            const newErr = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:\n${err.stack}`);
            try {
                this.emit('error', newErr);
            } catch (emitErr) {
                console.error(newErr);
            }
            await timeout(this._retryTimeout, !this._keepEventLoopActive);
        }
    }
    async _updateLatestBlock() {
        // fetch + set latest block
        const latestBlock = await this._fetchLatestBlock();
        this._newPotentialLatest(latestBlock);
    }
    async _fetchLatestBlock() {
        const req = {
            jsonrpc: "2.0",
            id: 1,
            method: 'eth_blockNumber',
            params: []
        };
        if (this._setSkipCacheFlag) req.skipCache = true;
        const res = await pify((cb)=>this._provider.sendAsync(req, cb)
        )();
        if (res.error) throw new Error(`PollingBlockTracker - encountered error fetching block:\n${res.error}`);
        return res.result;
    }
}
module.exports = PollingBlockTracker;
function timeout(duration, unref) {
    return new Promise((resolve)=>{
        const timoutRef = setTimeout(resolve, duration);
        // don't keep process open
        if (timoutRef.unref && unref) timoutRef.unref();
    });
}

},{"pify":"2fCDq","./base":"9FCrk"}],"2fCDq":[function(require,module,exports) {
'use strict';
const processFn = (fn, opts)=>function() {
        const P = opts.promiseModule;
        const args = new Array(arguments.length);
        for(let i1 = 0; i1 < arguments.length; i1++)args[i1] = arguments[i1];
        return new P((resolve, reject)=>{
            if (opts.errorFirst) args.push(function(err, result) {
                if (opts.multiArgs) {
                    const results = new Array(arguments.length - 1);
                    for(let i = 1; i < arguments.length; i++)results[i - 1] = arguments[i];
                    if (err) {
                        results.unshift(err);
                        reject(results);
                    } else resolve(results);
                } else if (err) reject(err);
                else resolve(result);
            });
            else args.push(function(result) {
                if (opts.multiArgs) {
                    const results = new Array(arguments.length - 1);
                    for(let i = 0; i < arguments.length; i++)results[i] = arguments[i];
                    resolve(results);
                } else resolve(result);
            });
            fn.apply(this, args);
        });
    }
;
module.exports = (obj, opts)=>{
    opts = Object.assign({
        exclude: [
            /.+(Sync|Stream)$/
        ],
        errorFirst: true,
        promiseModule: Promise
    }, opts);
    const filter = (key)=>{
        const match = (pattern)=>typeof pattern === 'string' ? key === pattern : pattern.test(key)
        ;
        return opts.include ? opts.include.some(match) : !opts.exclude.some(match);
    };
    let ret;
    if (typeof obj === 'function') ret = function() {
        if (opts.excludeMain) return obj.apply(this, arguments);
        return processFn(obj, opts).apply(this, arguments);
    };
    else ret = Object.create(Object.getPrototypeOf(obj));
    for(const key1 in obj){
        const x = obj[key1];
        ret[key1] = typeof x === 'function' && filter(key1) ? processFn(x, opts) : x;
    }
    return ret;
};

},{}],"9FCrk":[function(require,module,exports) {
const EthQuery = require('eth-query');
const pify = require('pify');
const SafeEventEmitter = require('safe-event-emitter');
const sec = 1000;
const calculateSum = (accumulator, currentValue)=>accumulator + currentValue
;
const blockTrackerEvents = [
    'sync',
    'latest'
];
class BaseBlockTracker extends SafeEventEmitter {
    //
    // public
    //
    constructor(opts = {}){
        super();
        // config
        this._blockResetDuration = opts.blockResetDuration || 20 * sec;
        // state
        this._blockResetTimeout;
        this._currentBlock = null;
        this._isRunning = false;
        // bind functions for internal use
        this._onNewListener = this._onNewListener.bind(this);
        this._onRemoveListener = this._onRemoveListener.bind(this);
        this._resetCurrentBlock = this._resetCurrentBlock.bind(this);
        // listen for handler changes
        this._setupInternalEvents();
    }
    isRunning() {
        return this._isRunning;
    }
    getCurrentBlock() {
        return this._currentBlock;
    }
    async getLatestBlock() {
        // return if available
        if (this._currentBlock) return this._currentBlock;
        // wait for a new latest block
        const latestBlock = await new Promise((resolve)=>this.once('latest', resolve)
        );
        // return newly set current block
        return latestBlock;
    }
    // dont allow module consumer to remove our internal event listeners
    removeAllListeners(eventName) {
        // perform default behavior, preserve fn arity
        if (eventName) super.removeAllListeners(eventName);
        else super.removeAllListeners();
        // re-add internal events
        this._setupInternalEvents();
        // trigger stop check just in case
        this._onRemoveListener();
    }
    //
    // to be implemented in subclass
    //
    _start() {
    // default behavior is noop
    }
    _end() {
    // default behavior is noop
    }
    //
    // private
    //
    _setupInternalEvents() {
        // first remove listeners for idempotence
        this.removeListener('newListener', this._onNewListener);
        this.removeListener('removeListener', this._onRemoveListener);
        // then add them
        this.on('newListener', this._onNewListener);
        this.on('removeListener', this._onRemoveListener);
    }
    _onNewListener(eventName, handler) {
        // `newListener` is called *before* the listener is added
        if (!blockTrackerEvents.includes(eventName)) return;
        this._maybeStart();
    }
    _onRemoveListener(eventName, handler) {
        // `removeListener` is called *after* the listener is removed
        if (this._getBlockTrackerEventCount() > 0) return;
        this._maybeEnd();
    }
    _maybeStart() {
        if (this._isRunning) return;
        this._isRunning = true;
        // cancel setting latest block to stale
        this._cancelBlockResetTimeout();
        this._start();
    }
    _maybeEnd() {
        if (!this._isRunning) return;
        this._isRunning = false;
        this._setupBlockResetTimeout();
        this._end();
    }
    _getBlockTrackerEventCount() {
        return blockTrackerEvents.map((eventName)=>this.listenerCount(eventName)
        ).reduce(calculateSum);
    }
    _newPotentialLatest(newBlock) {
        const currentBlock = this._currentBlock;
        // only update if blok number is higher
        if (currentBlock && hexToInt(newBlock) <= hexToInt(currentBlock)) return;
        this._setCurrentBlock(newBlock);
    }
    _setCurrentBlock(newBlock) {
        const oldBlock = this._currentBlock;
        this._currentBlock = newBlock;
        this.emit('latest', newBlock);
        this.emit('sync', {
            oldBlock,
            newBlock
        });
    }
    _setupBlockResetTimeout() {
        // clear any existing timeout
        this._cancelBlockResetTimeout();
        // clear latest block when stale
        this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration);
        // nodejs - dont hold process open
        if (this._blockResetTimeout.unref) this._blockResetTimeout.unref();
    }
    _cancelBlockResetTimeout() {
        clearTimeout(this._blockResetTimeout);
    }
    _resetCurrentBlock() {
        this._currentBlock = null;
    }
}
module.exports = BaseBlockTracker;
function hexToInt(hexInt) {
    return Number.parseInt(hexInt, 16);
}

},{"eth-query":"bSTFn","pify":"2fCDq","safe-event-emitter":"ewChc"}],"bSTFn":[function(require,module,exports) {
const extend = require('xtend');
const createRandomId = require('json-rpc-random-id')();
module.exports = EthQuery;
function EthQuery(provider) {
    const self = this;
    self.currentProvider = provider;
}
//
// base queries
//
// default block
EthQuery.prototype.getBalance = generateFnWithDefaultBlockFor(2, 'eth_getBalance');
EthQuery.prototype.getCode = generateFnWithDefaultBlockFor(2, 'eth_getCode');
EthQuery.prototype.getTransactionCount = generateFnWithDefaultBlockFor(2, 'eth_getTransactionCount');
EthQuery.prototype.getStorageAt = generateFnWithDefaultBlockFor(3, 'eth_getStorageAt');
EthQuery.prototype.call = generateFnWithDefaultBlockFor(2, 'eth_call');
// standard
EthQuery.prototype.protocolVersion = generateFnFor('eth_protocolVersion');
EthQuery.prototype.syncing = generateFnFor('eth_syncing');
EthQuery.prototype.coinbase = generateFnFor('eth_coinbase');
EthQuery.prototype.mining = generateFnFor('eth_mining');
EthQuery.prototype.hashrate = generateFnFor('eth_hashrate');
EthQuery.prototype.gasPrice = generateFnFor('eth_gasPrice');
EthQuery.prototype.accounts = generateFnFor('eth_accounts');
EthQuery.prototype.blockNumber = generateFnFor('eth_blockNumber');
EthQuery.prototype.getBlockTransactionCountByHash = generateFnFor('eth_getBlockTransactionCountByHash');
EthQuery.prototype.getBlockTransactionCountByNumber = generateFnFor('eth_getBlockTransactionCountByNumber');
EthQuery.prototype.getUncleCountByBlockHash = generateFnFor('eth_getUncleCountByBlockHash');
EthQuery.prototype.getUncleCountByBlockNumber = generateFnFor('eth_getUncleCountByBlockNumber');
EthQuery.prototype.sign = generateFnFor('eth_sign');
EthQuery.prototype.sendTransaction = generateFnFor('eth_sendTransaction');
EthQuery.prototype.sendRawTransaction = generateFnFor('eth_sendRawTransaction');
EthQuery.prototype.estimateGas = generateFnFor('eth_estimateGas');
EthQuery.prototype.getBlockByHash = generateFnFor('eth_getBlockByHash');
EthQuery.prototype.getBlockByNumber = generateFnFor('eth_getBlockByNumber');
EthQuery.prototype.getTransactionByHash = generateFnFor('eth_getTransactionByHash');
EthQuery.prototype.getTransactionByBlockHashAndIndex = generateFnFor('eth_getTransactionByBlockHashAndIndex');
EthQuery.prototype.getTransactionByBlockNumberAndIndex = generateFnFor('eth_getTransactionByBlockNumberAndIndex');
EthQuery.prototype.getTransactionReceipt = generateFnFor('eth_getTransactionReceipt');
EthQuery.prototype.getUncleByBlockHashAndIndex = generateFnFor('eth_getUncleByBlockHashAndIndex');
EthQuery.prototype.getUncleByBlockNumberAndIndex = generateFnFor('eth_getUncleByBlockNumberAndIndex');
EthQuery.prototype.getCompilers = generateFnFor('eth_getCompilers');
EthQuery.prototype.compileLLL = generateFnFor('eth_compileLLL');
EthQuery.prototype.compileSolidity = generateFnFor('eth_compileSolidity');
EthQuery.prototype.compileSerpent = generateFnFor('eth_compileSerpent');
EthQuery.prototype.newFilter = generateFnFor('eth_newFilter');
EthQuery.prototype.newBlockFilter = generateFnFor('eth_newBlockFilter');
EthQuery.prototype.newPendingTransactionFilter = generateFnFor('eth_newPendingTransactionFilter');
EthQuery.prototype.uninstallFilter = generateFnFor('eth_uninstallFilter');
EthQuery.prototype.getFilterChanges = generateFnFor('eth_getFilterChanges');
EthQuery.prototype.getFilterLogs = generateFnFor('eth_getFilterLogs');
EthQuery.prototype.getLogs = generateFnFor('eth_getLogs');
EthQuery.prototype.getWork = generateFnFor('eth_getWork');
EthQuery.prototype.submitWork = generateFnFor('eth_submitWork');
EthQuery.prototype.submitHashrate = generateFnFor('eth_submitHashrate');
// network level
EthQuery.prototype.sendAsync = function(opts, cb) {
    const self = this;
    self.currentProvider.sendAsync(createPayload(opts), function(err, response) {
        if (!err && response.error) err = new Error('EthQuery - RPC Error - ' + response.error.message);
        if (err) return cb(err);
        cb(null, response.result);
    });
};
// util
function generateFnFor(methodName) {
    return function() {
        const self = this;
        var args = [].slice.call(arguments);
        var cb = args.pop();
        self.sendAsync({
            method: methodName,
            params: args
        }, cb);
    };
}
function generateFnWithDefaultBlockFor(argCount, methodName) {
    return function() {
        const self = this;
        var args = [].slice.call(arguments);
        var cb = args.pop();
        // set optional default block param
        if (args.length < argCount) args.push('latest');
        self.sendAsync({
            method: methodName,
            params: args
        }, cb);
    };
}
function createPayload(data) {
    return extend({
        // defaults
        id: createRandomId(),
        jsonrpc: '2.0',
        params: []
    }, data);
}

},{"xtend":"93zjj","json-rpc-random-id":"hXPgU"}],"hXPgU":[function(require,module,exports) {
module.exports = IdIterator;
function IdIterator(opts) {
    opts = opts || {};
    var max = opts.max || Number.MAX_SAFE_INTEGER;
    var idCounter = typeof opts.start !== 'undefined' ? opts.start : Math.floor(Math.random() * max);
    return function createRandomId() {
        idCounter = idCounter % max;
        return idCounter++;
    };
}

},{}],"ewChc":[function(require,module,exports) {
const util = require('util');
const EventEmitter = require('events/');
var R = typeof Reflect === 'object' ? Reflect : null;
var ReflectApply = R && typeof R.apply === 'function' ? R.apply : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
};
module.exports = SafeEventEmitter;
function SafeEventEmitter() {
    EventEmitter.call(this);
}
util.inherits(SafeEventEmitter, EventEmitter);
SafeEventEmitter.prototype.emit = function(type) {
    // copied from https://github.com/Gozala/events/blob/master/events.js
    // modified lines are commented with "edited:"
    var args = [];
    for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
    var doError = type === 'error';
    var events = this._events;
    if (events !== undefined) doError = doError && events.error === undefined;
    else if (!doError) return false;
    // If there is no 'error' event listener then throw.
    if (doError) {
        var er;
        if (args.length > 0) er = args[0];
        if (er instanceof Error) // Note: The comments on the `throw` lines are intentional, they show
        // up in Node's output if this results in an unhandled exception.
        throw er; // Unhandled 'error' event
        // At least give some kind of context to the user
        var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
        err.context = er;
        throw err; // Unhandled 'error' event
    }
    var handler = events[type];
    if (handler === undefined) return false;
    if (typeof handler === 'function') // edited: using safeApply
    safeApply(handler, this, args);
    else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for(var i = 0; i < len; ++i)// edited: using safeApply
        safeApply(listeners[i], this, args);
    }
    return true;
};
function safeApply(handler, context, args) {
    try {
        ReflectApply(handler, context, args);
    } catch (err) {
        // throw error after timeout so as not to interupt the stack
        setTimeout(()=>{
            throw err;
        });
    }
}
function arrayClone(arr, n) {
    var copy = new Array(n);
    for(var i = 0; i < n; ++i)copy[i] = arr[i];
    return copy;
}

},{"util":"cxohQ","events/":"1VQLm"}],"aysAv":[function(require,module,exports) {
const SafeEventEmitter = require('@metamask/safe-event-emitter').default;
const createScaffoldMiddleware = require('eth-json-rpc-middleware/scaffold');
const { createAsyncMiddleware  } = require('json-rpc-engine');
const createFilterMiddleware = require('./index.js');
const { unsafeRandomBytes , incrementHexInt  } = require('./hexUtils.js');
const getBlocksForRange = require('./getBlocksForRange.js');
module.exports = createSubscriptionMiddleware;
function createSubscriptionMiddleware({ blockTracker , provider  }) {
    // state and utilities for handling subscriptions
    const subscriptions = {};
    const filterManager = createFilterMiddleware({
        blockTracker,
        provider
    });
    // internal flag
    let isDestroyed = false;
    // create subscriptionManager api object
    const events = new SafeEventEmitter();
    const middleware = createScaffoldMiddleware({
        eth_subscribe: createAsyncMiddleware(subscribe),
        eth_unsubscribe: createAsyncMiddleware(unsubscribe)
    });
    middleware.destroy = destroy;
    return {
        events,
        middleware
    };
    async function subscribe(req, res) {
        if (isDestroyed) throw new Error('SubscriptionManager - attempting to use after destroying');
        const subscriptionType = req.params[0];
        // subId is 16 byte hex string
        const subId1 = unsafeRandomBytes(16);
        // create sub
        let sub1;
        switch(subscriptionType){
            case 'newHeads':
                sub1 = createSubNewHeads({
                    subId: subId1
                });
                break;
            case 'logs':
                const filterParams = req.params[1];
                const filter1 = await filterManager.newLogFilter(filterParams);
                sub1 = createSubFromFilter({
                    subId: subId1,
                    filter: filter1
                });
                break;
            default:
                throw new Error(`SubscriptionManager - unsupported subscription type "${subscriptionType}"`);
        }
        subscriptions[subId1] = sub1;
        res.result = subId1;
        return;
        function createSubNewHeads({ subId  }) {
            const sub = {
                type: subscriptionType,
                destroy: async ()=>{
                    blockTracker.removeListener('sync', sub.update);
                },
                update: async ({ oldBlock , newBlock  })=>{
                    // for newHeads
                    const toBlock = newBlock;
                    const fromBlock = incrementHexInt(oldBlock);
                    const rawBlocks = await getBlocksForRange({
                        provider,
                        fromBlock,
                        toBlock
                    });
                    const results = rawBlocks.map(normalizeBlock);
                    results.forEach((value)=>{
                        _emitSubscriptionResult(subId, value);
                    });
                }
            };
            // check for subscription updates on new block
            blockTracker.on('sync', sub.update);
            return sub;
        }
        function createSubFromFilter({ subId , filter  }) {
            filter.on('update', (result)=>_emitSubscriptionResult(subId, result)
            );
            const sub = {
                type: subscriptionType,
                destroy: async ()=>{
                    return await filterManager.uninstallFilter(filter.idHex);
                }
            };
            return sub;
        }
    }
    async function unsubscribe(req, res) {
        if (isDestroyed) throw new Error('SubscriptionManager - attempting to use after destroying');
        const id = req.params[0];
        const subscription = subscriptions[id];
        // if missing, return "false" to indicate it was not removed
        if (!subscription) {
            res.result = false;
            return;
        }
        // cleanup subscription
        delete subscriptions[id];
        await subscription.destroy();
        res.result = true;
    }
    function _emitSubscriptionResult(filterIdHex, value) {
        events.emit('notification', {
            jsonrpc: '2.0',
            method: 'eth_subscription',
            params: {
                subscription: filterIdHex,
                result: value
            }
        });
    }
    function destroy() {
        events.removeAllListeners();
        for(const id in subscriptions){
            subscriptions[id].destroy();
            delete subscriptions[id];
        }
        isDestroyed = true;
    }
}
function normalizeBlock(block) {
    return {
        hash: block.hash,
        parentHash: block.parentHash,
        sha3Uncles: block.sha3Uncles,
        miner: block.miner,
        stateRoot: block.stateRoot,
        transactionsRoot: block.transactionsRoot,
        receiptsRoot: block.receiptsRoot,
        logsBloom: block.logsBloom,
        difficulty: block.difficulty,
        number: block.number,
        gasLimit: block.gasLimit,
        gasUsed: block.gasUsed,
        nonce: block.nonce,
        mixHash: block.mixHash,
        timestamp: block.timestamp,
        extraData: block.extraData
    };
}

},{"@metamask/safe-event-emitter":"1duJT","eth-json-rpc-middleware/scaffold":"1lVu9","json-rpc-engine":"a9gHn","./index.js":"5HIeR","./hexUtils.js":"6TZxz","./getBlocksForRange.js":"jMjUm"}],"1lVu9":[function(require,module,exports) {
// for backwards compat
module.exports = require('json-rpc-engine/src/createScaffoldMiddleware');

},{"json-rpc-engine/src/createScaffoldMiddleware":"ktcsw"}],"ktcsw":[function(require,module,exports) {
module.exports = function createScaffoldMiddleware(handlers) {
    return (req, res, next, end)=>{
        const handler = handlers[req.method];
        // if no handler, return
        if (handler === undefined) return next();
        // if handler is fn, call as middleware
        if (typeof handler === 'function') return handler(req, res, next, end);
        // if handler is some other value, use as result
        res.result = handler;
        return end();
    };
};

},{}],"a9gHn":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(require("./idRemapMiddleware"), exports);
__exportStar(require("./createAsyncMiddleware"), exports);
__exportStar(require("./createScaffoldMiddleware"), exports);
__exportStar(require("./getUniqueId"), exports);
__exportStar(require("./JsonRpcEngine"), exports);
__exportStar(require("./mergeMiddleware"), exports);

},{"./idRemapMiddleware":"3ydUe","./createAsyncMiddleware":"1R2CN","./createScaffoldMiddleware":"8mGkz","./getUniqueId":"l4iRs","./JsonRpcEngine":"b5bHm","./mergeMiddleware":"fkYe3"}],"3ydUe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createIdRemapMiddleware = void 0;
const getUniqueId_1 = require("./getUniqueId");
function createIdRemapMiddleware() {
    return (req, res, next, _end)=>{
        const originalId = req.id;
        const newId = getUniqueId_1.getUniqueId();
        req.id = newId;
        res.id = newId;
        next((done)=>{
            req.id = originalId;
            res.id = originalId;
            done();
        });
    };
}
exports.createIdRemapMiddleware = createIdRemapMiddleware;

},{"./getUniqueId":"l4iRs"}],"l4iRs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUniqueId = void 0;
// uint32 (two's complement) max
// more conservative than Number.MAX_SAFE_INTEGER
const MAX = 4294967295;
let idCounter = Math.floor(Math.random() * MAX);
function getUniqueId() {
    idCounter = (idCounter + 1) % MAX;
    return idCounter;
}
exports.getUniqueId = getUniqueId;

},{}],"1R2CN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createAsyncMiddleware = void 0;
/**
 * JsonRpcEngine only accepts callback-based middleware directly.
 * createAsyncMiddleware exists to enable consumers to pass in async middleware
 * functions.
 *
 * Async middleware have no "end" function. Instead, they "end" if they return
 * without calling "next". Rather than passing in explicit return handlers,
 * async middleware can simply await "next", and perform operations on the
 * response object when execution resumes.
 *
 * To accomplish this, createAsyncMiddleware passes the async middleware a
 * wrapped "next" function. That function calls the internal JsonRpcEngine
 * "next" function with a return handler that resolves a promise when called.
 *
 * The return handler will always be called. Its resolution of the promise
 * enables the control flow described above.
 */ function createAsyncMiddleware(asyncMiddleware) {
    return async (req, res, next, end)=>{
        // nextPromise is the key to the implementation
        // it is resolved by the return handler passed to the
        // "next" function
        let resolveNextPromise;
        const nextPromise = new Promise((resolve)=>{
            resolveNextPromise = resolve;
        });
        let returnHandlerCallback = null;
        let nextWasCalled = false;
        // This will be called by the consumer's async middleware.
        const asyncNext = async ()=>{
            nextWasCalled = true;
            // We pass a return handler to next(). When it is called by the engine,
            // the consumer's async middleware will resume executing.
            // eslint-disable-next-line node/callback-return
            next((runReturnHandlersCallback)=>{
                // This callback comes from JsonRpcEngine._runReturnHandlers
                returnHandlerCallback = runReturnHandlersCallback;
                resolveNextPromise();
            });
            await nextPromise;
        };
        try {
            await asyncMiddleware(req, res, asyncNext);
            if (nextWasCalled) {
                await nextPromise; // we must wait until the return handler is called
                returnHandlerCallback(null);
            } else end(null);
        } catch (error) {
            if (returnHandlerCallback) returnHandlerCallback(error);
            else end(error);
        }
    };
}
exports.createAsyncMiddleware = createAsyncMiddleware;

},{}],"8mGkz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createScaffoldMiddleware = void 0;
function createScaffoldMiddleware(handlers) {
    return (req, res, next, end)=>{
        const handler = handlers[req.method];
        // if no handler, return
        if (handler === undefined) return next();
        // if handler is fn, call as middleware
        if (typeof handler === 'function') return handler(req, res, next, end);
        // if handler is some other value, use as result
        res.result = handler;
        return end();
    };
}
exports.createScaffoldMiddleware = createScaffoldMiddleware;

},{}],"b5bHm":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JsonRpcEngine = void 0;
const safe_event_emitter_1 = __importDefault(require("@metamask/safe-event-emitter"));
const eth_rpc_errors_1 = require("eth-rpc-errors");
/**
 * A JSON-RPC request and response processor.
 * Give it a stack of middleware, pass it requests, and get back responses.
 */ class JsonRpcEngine extends safe_event_emitter_1.default {
    constructor(){
        super();
        this._middleware = [];
    }
    /**
     * Add a middleware function to the engine's middleware stack.
     *
     * @param middleware - The middleware function to add.
     */ push(middleware) {
        this._middleware.push(middleware);
    }
    handle(req, cb) {
        if (cb && typeof cb !== 'function') throw new Error('"callback" must be a function if provided.');
        if (Array.isArray(req)) {
            if (cb) return this._handleBatch(req, cb);
            return this._handleBatch(req);
        }
        if (cb) return this._handle(req, cb);
        return this._promiseHandle(req);
    }
    /**
     * Returns this engine as a middleware function that can be pushed to other
     * engines.
     *
     * @returns This engine as a middleware function.
     */ asMiddleware() {
        return async (req, res, next, end)=>{
            try {
                const [middlewareError, isComplete, returnHandlers, ] = await JsonRpcEngine._runAllMiddleware(req, res, this._middleware);
                if (isComplete) {
                    await JsonRpcEngine._runReturnHandlers(returnHandlers);
                    return end(middlewareError);
                }
                return next(async (handlerCallback)=>{
                    try {
                        await JsonRpcEngine._runReturnHandlers(returnHandlers);
                    } catch (error) {
                        return handlerCallback(error);
                    }
                    return handlerCallback();
                });
            } catch (error) {
                return end(error);
            }
        };
    }
    async _handleBatch(reqs, cb) {
        // The order here is important
        try {
            // 2. Wait for all requests to finish, or throw on some kind of fatal
            // error
            const responses = await Promise.all(// 1. Begin executing each request in the order received
            reqs.map(this._promiseHandle.bind(this)));
            // 3. Return batch response
            if (cb) return cb(null, responses);
            return responses;
        } catch (error) {
            if (cb) return cb(error);
            throw error;
        }
    }
    /**
     * A promise-wrapped _handle.
     */ _promiseHandle(req) {
        return new Promise((resolve)=>{
            this._handle(req, (_err, res)=>{
                // There will always be a response, and it will always have any error
                // that is caught and propagated.
                resolve(res);
            });
        });
    }
    /**
     * Ensures that the request object is valid, processes it, and passes any
     * error and the response object to the given callback.
     *
     * Does not reject.
     */ async _handle(callerReq, cb) {
        if (!callerReq || Array.isArray(callerReq) || typeof callerReq !== 'object') {
            const error = new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof callerReq}`, {
                request: callerReq
            });
            return cb(error, {
                id: undefined,
                jsonrpc: '2.0',
                error
            });
        }
        if (typeof callerReq.method !== 'string') {
            const error = new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof callerReq.method}`, {
                request: callerReq
            });
            return cb(error, {
                id: callerReq.id,
                jsonrpc: '2.0',
                error
            });
        }
        const req = Object.assign({}, callerReq);
        const res = {
            id: req.id,
            jsonrpc: req.jsonrpc
        };
        let error = null;
        try {
            await this._processRequest(req, res);
        } catch (_error) {
            // A request handler error, a re-thrown middleware error, or something
            // unexpected.
            error = _error;
        }
        if (error) {
            // Ensure no result is present on an errored response
            delete res.result;
            if (!res.error) res.error = eth_rpc_errors_1.serializeError(error);
        }
        return cb(error, res);
    }
    /**
     * For the given request and response, runs all middleware and their return
     * handlers, if any, and ensures that internal request processing semantics
     * are satisfied.
     */ async _processRequest(req, res) {
        const [error, isComplete, returnHandlers, ] = await JsonRpcEngine._runAllMiddleware(req, res, this._middleware);
        // Throw if "end" was not called, or if the response has neither a result
        // nor an error.
        JsonRpcEngine._checkForCompletion(req, res, isComplete);
        // The return handlers should run even if an error was encountered during
        // middleware processing.
        await JsonRpcEngine._runReturnHandlers(returnHandlers);
        // Now we re-throw the middleware processing error, if any, to catch it
        // further up the call chain.
        if (error) throw error;
    }
    /**
     * Serially executes the given stack of middleware.
     *
     * @returns An array of any error encountered during middleware execution,
     * a boolean indicating whether the request was completed, and an array of
     * middleware-defined return handlers.
     */ static async _runAllMiddleware(req, res, middlewareStack) {
        const returnHandlers = [];
        let error = null;
        let isComplete = false;
        // Go down stack of middleware, call and collect optional returnHandlers
        for (const middleware of middlewareStack){
            [error, isComplete] = await JsonRpcEngine._runMiddleware(req, res, middleware, returnHandlers);
            if (isComplete) break;
        }
        return [
            error,
            isComplete,
            returnHandlers.reverse()
        ];
    }
    /**
     * Runs an individual middleware.
     *
     * @returns An array of any error encountered during middleware exection,
     * and a boolean indicating whether the request should end.
     */ static _runMiddleware(req, res, middleware, returnHandlers) {
        return new Promise((resolve)=>{
            const end = (err)=>{
                const error = err || res.error;
                if (error) res.error = eth_rpc_errors_1.serializeError(error);
                // True indicates that the request should end
                resolve([
                    error,
                    true
                ]);
            };
            const next = (returnHandler)=>{
                if (res.error) end(res.error);
                else {
                    if (returnHandler) {
                        if (typeof returnHandler !== 'function') end(new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. ` + `Received "${typeof returnHandler}" for request:\n${jsonify(req)}`, {
                            request: req
                        }));
                        returnHandlers.push(returnHandler);
                    }
                    // False indicates that the request should not end
                    resolve([
                        null,
                        false
                    ]);
                }
            };
            try {
                middleware(req, res, next, end);
            } catch (error) {
                end(error);
            }
        });
    }
    /**
     * Serially executes array of return handlers. The request and response are
     * assumed to be in their scope.
     */ static async _runReturnHandlers(handlers) {
        for (const handler of handlers)await new Promise((resolve, reject)=>{
            handler((err)=>err ? reject(err) : resolve()
            );
        });
    }
    /**
     * Throws an error if the response has neither a result nor an error, or if
     * the "isComplete" flag is falsy.
     */ static _checkForCompletion(req, res, isComplete) {
        if (!('result' in res) && !('error' in res)) throw new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:\n${jsonify(req)}`, {
            request: req
        });
        if (!isComplete) throw new eth_rpc_errors_1.EthereumRpcError(eth_rpc_errors_1.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:\n${jsonify(req)}`, {
            request: req
        });
    }
}
exports.JsonRpcEngine = JsonRpcEngine;
function jsonify(request) {
    return JSON.stringify(request, null, 2);
}

},{"@metamask/safe-event-emitter":"1duJT","eth-rpc-errors":"83Fo6"}],"83Fo6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMessageFromCode = exports.serializeError = exports.EthereumProviderError = exports.EthereumRpcError = exports.ethErrors = exports.errorCodes = void 0;
const classes_1 = require("./classes");
Object.defineProperty(exports, "EthereumRpcError", {
    enumerable: true,
    get: function() {
        return classes_1.EthereumRpcError;
    }
});
Object.defineProperty(exports, "EthereumProviderError", {
    enumerable: true,
    get: function() {
        return classes_1.EthereumProviderError;
    }
});
const utils_1 = require("./utils");
Object.defineProperty(exports, "serializeError", {
    enumerable: true,
    get: function() {
        return utils_1.serializeError;
    }
});
Object.defineProperty(exports, "getMessageFromCode", {
    enumerable: true,
    get: function() {
        return utils_1.getMessageFromCode;
    }
});
const errors_1 = require("./errors");
Object.defineProperty(exports, "ethErrors", {
    enumerable: true,
    get: function() {
        return errors_1.ethErrors;
    }
});
const error_constants_1 = require("./error-constants");
Object.defineProperty(exports, "errorCodes", {
    enumerable: true,
    get: function() {
        return error_constants_1.errorCodes;
    }
});

},{"./classes":"8CTWo","./utils":"6IpPT","./errors":"8WY23","./error-constants":"lx3hA"}],"8CTWo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EthereumProviderError = exports.EthereumRpcError = void 0;
const fast_safe_stringify_1 = require("fast-safe-stringify");
/**
 * Error subclass implementing JSON RPC 2.0 errors and Ethereum RPC errors
 * per EIP-1474.
 * Permits any integer error code.
 */ class EthereumRpcError extends Error {
    constructor(code, message, data){
        if (!Number.isInteger(code)) throw new Error('"code" must be an integer.');
        if (!message || typeof message !== 'string') throw new Error('"message" must be a nonempty string.');
        super(message);
        this.code = code;
        if (data !== undefined) this.data = data;
    }
    /**
     * Returns a plain object with all public class properties.
     */ serialize() {
        const serialized = {
            code: this.code,
            message: this.message
        };
        if (this.data !== undefined) serialized.data = this.data;
        if (this.stack) serialized.stack = this.stack;
        return serialized;
    }
    /**
     * Return a string representation of the serialized error, omitting
     * any circular references.
     */ toString() {
        return fast_safe_stringify_1.default(this.serialize(), stringifyReplacer, 2);
    }
}
exports.EthereumRpcError = EthereumRpcError;
/**
 * Error subclass implementing Ethereum Provider errors per EIP-1193.
 * Permits integer error codes in the [ 1000 <= 4999 ] range.
 */ class EthereumProviderError extends EthereumRpcError {
    /**
     * Create an Ethereum Provider JSON-RPC error.
     * `code` must be an integer in the 1000 <= 4999 range.
     */ constructor(code, message, data){
        if (!isValidEthProviderCode(code)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
        super(code, message, data);
    }
}
exports.EthereumProviderError = EthereumProviderError;
// Internal
function isValidEthProviderCode(code) {
    return Number.isInteger(code) && code >= 1000 && code <= 4999;
}
function stringifyReplacer(_, value) {
    if (value === '[Circular]') return undefined;
    return value;
}

},{"fast-safe-stringify":"dY7b6"}],"6IpPT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.serializeError = exports.isValidCode = exports.getMessageFromCode = exports.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
const error_constants_1 = require("./error-constants");
const classes_1 = require("./classes");
const FALLBACK_ERROR_CODE = error_constants_1.errorCodes.rpc.internal;
const FALLBACK_MESSAGE = 'Unspecified error message. This is a bug, please report it.';
const FALLBACK_ERROR = {
    code: FALLBACK_ERROR_CODE,
    message: getMessageFromCode(FALLBACK_ERROR_CODE)
};
exports.JSON_RPC_SERVER_ERROR_MESSAGE = 'Unspecified server error.';
/**
 * Gets the message for a given code, or a fallback message if the code has
 * no corresponding message.
 */ function getMessageFromCode(code, fallbackMessage = FALLBACK_MESSAGE) {
    if (Number.isInteger(code)) {
        const codeString = code.toString();
        if (hasKey(error_constants_1.errorValues, codeString)) return error_constants_1.errorValues[codeString].message;
        if (isJsonRpcServerError(code)) return exports.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return fallbackMessage;
}
exports.getMessageFromCode = getMessageFromCode;
/**
 * Returns whether the given code is valid.
 * A code is only valid if it has a message.
 */ function isValidCode(code) {
    if (!Number.isInteger(code)) return false;
    const codeString = code.toString();
    if (error_constants_1.errorValues[codeString]) return true;
    if (isJsonRpcServerError(code)) return true;
    return false;
}
exports.isValidCode = isValidCode;
/**
 * Serializes the given error to an Ethereum JSON RPC-compatible error object.
 * Merely copies the given error's values if it is already compatible.
 * If the given error is not fully compatible, it will be preserved on the
 * returned object's data.originalError property.
 */ function serializeError(error, { fallbackError =FALLBACK_ERROR , shouldIncludeStack =false ,  } = {}) {
    var _a, _b;
    if (!fallbackError || !Number.isInteger(fallbackError.code) || typeof fallbackError.message !== 'string') throw new Error('Must provide fallback error with integer number code and string message.');
    if (error instanceof classes_1.EthereumRpcError) return error.serialize();
    const serialized = {};
    if (error && typeof error === 'object' && !Array.isArray(error) && hasKey(error, 'code') && isValidCode(error.code)) {
        const _error = error;
        serialized.code = _error.code;
        if (_error.message && typeof _error.message === 'string') {
            serialized.message = _error.message;
            if (hasKey(_error, 'data')) serialized.data = _error.data;
        } else {
            serialized.message = getMessageFromCode(serialized.code);
            serialized.data = {
                originalError: assignOriginalError(error)
            };
        }
    } else {
        serialized.code = fallbackError.code;
        const message = (_a = error) === null || _a === void 0 ? void 0 : _a.message;
        serialized.message = message && typeof message === 'string' ? message : fallbackError.message;
        serialized.data = {
            originalError: assignOriginalError(error)
        };
    }
    const stack = (_b = error) === null || _b === void 0 ? void 0 : _b.stack;
    if (shouldIncludeStack && error && stack && typeof stack === 'string') serialized.stack = stack;
    return serialized;
}
exports.serializeError = serializeError;
// Internal
function isJsonRpcServerError(code) {
    return code >= -32099 && code <= -32000;
}
function assignOriginalError(error) {
    if (error && typeof error === 'object' && !Array.isArray(error)) return Object.assign({}, error);
    return error;
}
function hasKey(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}

},{"./error-constants":"lx3hA","./classes":"8CTWo"}],"lx3hA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.errorValues = exports.errorCodes = void 0;
exports.errorCodes = {
    rpc: {
        invalidInput: -32000,
        resourceNotFound: -32001,
        resourceUnavailable: -32002,
        transactionRejected: -32003,
        methodNotSupported: -32004,
        limitExceeded: -32005,
        parse: -32700,
        invalidRequest: -32600,
        methodNotFound: -32601,
        invalidParams: -32602,
        internal: -32603
    },
    provider: {
        userRejectedRequest: 4001,
        unauthorized: 4100,
        unsupportedMethod: 4200,
        disconnected: 4900,
        chainDisconnected: 4901
    }
};
exports.errorValues = {
    '-32700': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.'
    },
    '-32600': {
        standard: 'JSON RPC 2.0',
        message: 'The JSON sent is not a valid Request object.'
    },
    '-32601': {
        standard: 'JSON RPC 2.0',
        message: 'The method does not exist / is not available.'
    },
    '-32602': {
        standard: 'JSON RPC 2.0',
        message: 'Invalid method parameter(s).'
    },
    '-32603': {
        standard: 'JSON RPC 2.0',
        message: 'Internal JSON-RPC error.'
    },
    '-32000': {
        standard: 'EIP-1474',
        message: 'Invalid input.'
    },
    '-32001': {
        standard: 'EIP-1474',
        message: 'Resource not found.'
    },
    '-32002': {
        standard: 'EIP-1474',
        message: 'Resource unavailable.'
    },
    '-32003': {
        standard: 'EIP-1474',
        message: 'Transaction rejected.'
    },
    '-32004': {
        standard: 'EIP-1474',
        message: 'Method not supported.'
    },
    '-32005': {
        standard: 'EIP-1474',
        message: 'Request limit exceeded.'
    },
    '4001': {
        standard: 'EIP-1193',
        message: 'User rejected the request.'
    },
    '4100': {
        standard: 'EIP-1193',
        message: 'The requested account and/or method has not been authorized by the user.'
    },
    '4200': {
        standard: 'EIP-1193',
        message: 'The requested method is not supported by this Ethereum provider.'
    },
    '4900': {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from all chains.'
    },
    '4901': {
        standard: 'EIP-1193',
        message: 'The provider is disconnected from the specified chain.'
    }
};

},{}],"8WY23":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ethErrors = void 0;
const classes_1 = require("./classes");
const utils_1 = require("./utils");
const error_constants_1 = require("./error-constants");
exports.ethErrors = {
    rpc: {
        /**
         * Get a JSON RPC 2.0 Parse (-32700) error.
         */ parse: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.parse, arg)
        ,
        /**
         * Get a JSON RPC 2.0 Invalid Request (-32600) error.
         */ invalidRequest: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidRequest, arg)
        ,
        /**
         * Get a JSON RPC 2.0 Invalid Params (-32602) error.
         */ invalidParams: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidParams, arg)
        ,
        /**
         * Get a JSON RPC 2.0 Method Not Found (-32601) error.
         */ methodNotFound: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotFound, arg)
        ,
        /**
         * Get a JSON RPC 2.0 Internal (-32603) error.
         */ internal: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.internal, arg)
        ,
        /**
         * Get a JSON RPC 2.0 Server error.
         * Permits integer error codes in the [ -32099 <= -32005 ] range.
         * Codes -32000 through -32004 are reserved by EIP-1474.
         */ server: (opts)=>{
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) throw new Error('Ethereum RPC Server errors must provide single object argument.');
            const { code  } = opts;
            if (!Number.isInteger(code) || code > -32005 || code < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
            return getEthJsonRpcError(code, opts);
        },
        /**
         * Get an Ethereum JSON RPC Invalid Input (-32000) error.
         */ invalidInput: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.invalidInput, arg)
        ,
        /**
         * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
         */ resourceNotFound: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceNotFound, arg)
        ,
        /**
         * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
         */ resourceUnavailable: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.resourceUnavailable, arg)
        ,
        /**
         * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
         */ transactionRejected: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.transactionRejected, arg)
        ,
        /**
         * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
         */ methodNotSupported: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.methodNotSupported, arg)
        ,
        /**
         * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
         */ limitExceeded: (arg)=>getEthJsonRpcError(error_constants_1.errorCodes.rpc.limitExceeded, arg)
    },
    provider: {
        /**
         * Get an Ethereum Provider User Rejected Request (4001) error.
         */ userRejectedRequest: (arg)=>{
            return getEthProviderError(error_constants_1.errorCodes.provider.userRejectedRequest, arg);
        },
        /**
         * Get an Ethereum Provider Unauthorized (4100) error.
         */ unauthorized: (arg)=>{
            return getEthProviderError(error_constants_1.errorCodes.provider.unauthorized, arg);
        },
        /**
         * Get an Ethereum Provider Unsupported Method (4200) error.
         */ unsupportedMethod: (arg)=>{
            return getEthProviderError(error_constants_1.errorCodes.provider.unsupportedMethod, arg);
        },
        /**
         * Get an Ethereum Provider Not Connected (4900) error.
         */ disconnected: (arg)=>{
            return getEthProviderError(error_constants_1.errorCodes.provider.disconnected, arg);
        },
        /**
         * Get an Ethereum Provider Chain Not Connected (4901) error.
         */ chainDisconnected: (arg)=>{
            return getEthProviderError(error_constants_1.errorCodes.provider.chainDisconnected, arg);
        },
        /**
         * Get a custom Ethereum Provider error.
         */ custom: (opts)=>{
            if (!opts || typeof opts !== 'object' || Array.isArray(opts)) throw new Error('Ethereum Provider custom errors must provide single object argument.');
            const { code , message , data  } = opts;
            if (!message || typeof message !== 'string') throw new Error('"message" must be a nonempty string');
            return new classes_1.EthereumProviderError(code, message, data);
        }
    }
};
// Internal
function getEthJsonRpcError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new classes_1.EthereumRpcError(code, message || utils_1.getMessageFromCode(code), data);
}
function getEthProviderError(code, arg) {
    const [message, data] = parseOpts(arg);
    return new classes_1.EthereumProviderError(code, message || utils_1.getMessageFromCode(code), data);
}
function parseOpts(arg) {
    if (arg) {
        if (typeof arg === 'string') return [
            arg
        ];
        else if (typeof arg === 'object' && !Array.isArray(arg)) {
            const { message , data  } = arg;
            if (message && typeof message !== 'string') throw new Error('Must specify string message.');
            return [
                message || undefined,
                data
            ];
        }
    }
    return [];
}

},{"./classes":"8CTWo","./utils":"6IpPT","./error-constants":"lx3hA"}],"fkYe3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeMiddleware = void 0;
const JsonRpcEngine_1 = require("./JsonRpcEngine");
function mergeMiddleware(middlewareStack) {
    const engine = new JsonRpcEngine_1.JsonRpcEngine();
    middlewareStack.forEach((middleware)=>engine.push(middleware)
    );
    return engine.asMiddleware();
}
exports.mergeMiddleware = mergeMiddleware;

},{"./JsonRpcEngine":"b5bHm"}],"5HIeR":[function(require,module,exports) {
const Mutex = require('async-mutex').Mutex;
const { createAsyncMiddleware  } = require('json-rpc-engine');
const createJsonRpcMiddleware = require('eth-json-rpc-middleware/scaffold');
const LogFilter = require('./log-filter.js');
const BlockFilter = require('./block-filter.js');
const TxFilter = require('./tx-filter.js');
const { intToHex , hexToInt  } = require('./hexUtils');
module.exports = createEthFilterMiddleware;
function createEthFilterMiddleware({ blockTracker , provider  }) {
    // create filter collection
    let filterIndex1 = 0;
    let filters = {};
    // create update mutex
    const mutex = new Mutex();
    const waitForFree = mutexMiddlewareWrapper({
        mutex
    });
    const middleware = createJsonRpcMiddleware({
        // install filters
        eth_newFilter: waitForFree(toFilterCreationMiddleware(newLogFilter)),
        eth_newBlockFilter: waitForFree(toFilterCreationMiddleware(newBlockFilter)),
        eth_newPendingTransactionFilter: waitForFree(toFilterCreationMiddleware(newPendingTransactionFilter)),
        // uninstall filters
        eth_uninstallFilter: waitForFree(toAsyncRpcMiddleware(uninstallFilterHandler)),
        // checking filter changes
        eth_getFilterChanges: waitForFree(toAsyncRpcMiddleware(getFilterChanges)),
        eth_getFilterLogs: waitForFree(toAsyncRpcMiddleware(getFilterLogs))
    });
    // setup filter updating and destroy handler
    const filterUpdater = async ({ oldBlock , newBlock  })=>{
        if (filters.length === 0) return;
        // lock update reads
        const releaseLock = await mutex.acquire();
        try {
            // process all filters in parallel
            await Promise.all(objValues(filters).map(async (filter)=>{
                try {
                    await filter.update({
                        oldBlock,
                        newBlock
                    });
                } catch (err) {
                    // handle each error individually so filter update errors don't affect other filters
                    console.error(err);
                }
            }));
        } catch (err) {
            // log error so we don't skip the releaseLock
            console.error(err);
        }
        // unlock update reads
        releaseLock();
    };
    // expose filter methods directly
    middleware.newLogFilter = newLogFilter;
    middleware.newBlockFilter = newBlockFilter;
    middleware.newPendingTransactionFilter = newPendingTransactionFilter;
    middleware.uninstallFilter = uninstallFilterHandler;
    middleware.getFilterChanges = getFilterChanges;
    middleware.getFilterLogs = getFilterLogs;
    // expose destroy method for cleanup
    middleware.destroy = ()=>{
        uninstallAllFilters();
    };
    return middleware;
    //
    // new filters
    //
    async function newLogFilter(params) {
        const filter = new LogFilter({
            provider,
            params
        });
        const filterIndex = await installFilter(filter);
        return filter;
    }
    async function newBlockFilter() {
        const filter = new BlockFilter({
            provider
        });
        const filterIndex = await installFilter(filter);
        return filter;
    }
    async function newPendingTransactionFilter() {
        const filter = new TxFilter({
            provider
        });
        const filterIndex = await installFilter(filter);
        return filter;
    }
    //
    // get filter changes
    //
    async function getFilterChanges(filterIndexHex) {
        const filterIndex = hexToInt(filterIndexHex);
        const filter = filters[filterIndex];
        if (!filter) {
            throw new Error(`No filter for index "${filterIndex}"`);
        }
        const results = filter.getChangesAndClear();
        return results;
    }
    async function getFilterLogs(filterIndexHex) {
        const filterIndex = hexToInt(filterIndexHex);
        const filter = filters[filterIndex];
        if (!filter) {
            throw new Error(`No filter for index "${filterIndex}"`);
        }
        // only return results for log filters
        if (filter.type === 'log') {
            results = filter.getAllResults();
        } else {
            results = [];
        }
        return results;
    }
    //
    // remove filters
    //
    async function uninstallFilterHandler(filterIndexHex) {
        // check filter exists
        const filterIndex = hexToInt(filterIndexHex);
        const filter = filters[filterIndex];
        const result = Boolean(filter);
        // uninstall filter
        if (result) {
            await uninstallFilter(filterIndex);
        }
        return result;
    }
    //
    // utils
    //
    async function installFilter(filter) {
        const prevFilterCount = objValues(filters).length;
        // install filter
        const currentBlock = await blockTracker.getLatestBlock();
        await filter.initialize({
            currentBlock
        });
        filterIndex1++;
        filters[filterIndex1] = filter;
        filter.id = filterIndex1;
        filter.idHex = intToHex(filterIndex1);
        // update block tracker subs
        const newFilterCount = objValues(filters).length;
        updateBlockTrackerSubs({
            prevFilterCount,
            newFilterCount
        });
        return filterIndex1;
    }
    async function uninstallFilter(filterIndex) {
        const prevFilterCount = objValues(filters).length;
        delete filters[filterIndex];
        // update block tracker subs
        const newFilterCount = objValues(filters).length;
        updateBlockTrackerSubs({
            prevFilterCount,
            newFilterCount
        });
    }
    async function uninstallAllFilters() {
        const prevFilterCount = objValues(filters).length;
        filters = {};
        // update block tracker subs
        updateBlockTrackerSubs({
            prevFilterCount,
            newFilterCount: 0
        });
    }
    function updateBlockTrackerSubs({ prevFilterCount , newFilterCount  }) {
        // subscribe
        if (prevFilterCount === 0 && newFilterCount > 0) {
            blockTracker.on('sync', filterUpdater);
            return;
        }
        // unsubscribe
        if (prevFilterCount > 0 && newFilterCount === 0) {
            blockTracker.removeListener('sync', filterUpdater);
            return;
        }
    }
}
// helper for turning filter constructors into rpc middleware
function toFilterCreationMiddleware(createFilterFn) {
    return toAsyncRpcMiddleware(async (...args)=>{
        const filter = await createFilterFn(...args);
        const result = intToHex(filter.id);
        return result;
    });
}
// helper for pulling out req.params and setting res.result
function toAsyncRpcMiddleware(asyncFn) {
    return createAsyncMiddleware(async (req, res)=>{
        const result = await asyncFn.apply(null, req.params);
        res.result = result;
    });
}
function mutexMiddlewareWrapper({ mutex  }) {
    return (middleware)=>{
        return async (req, res, next, end)=>{
            // wait for mutex available
            // we can release immediately because
            // we just need to make sure updates aren't active
            const releaseLock = await mutex.acquire();
            releaseLock();
            middleware(req, res, next, end);
        };
    };
}
function objValues(obj, fn) {
    const values = [];
    for(let key in obj)values.push(obj[key]);
    return values;
}

},{"async-mutex":"g0xnz","json-rpc-engine":"a9gHn","eth-json-rpc-middleware/scaffold":"1lVu9","./log-filter.js":"bEmJ8","./block-filter.js":"4ypCb","./tx-filter.js":"7lMYK","./hexUtils":"6TZxz"}],"g0xnz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Mutex", ()=>_mutexDefault.default
);
parcelHelpers.export(exports, "Semaphore", ()=>_semaphoreDefault.default
);
parcelHelpers.export(exports, "withTimeout", ()=>_withTimeout.withTimeout
);
var _mutex = require("./Mutex");
var _mutexDefault = parcelHelpers.interopDefault(_mutex);
var _semaphore = require("./Semaphore");
var _semaphoreDefault = parcelHelpers.interopDefault(_semaphore);
var _withTimeout = require("./withTimeout");

},{"./Mutex":"eXYqf","./Semaphore":"8TDsX","./withTimeout":"i1CtZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eXYqf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tslib = require("tslib");
var _semaphore = require("./Semaphore");
var _semaphoreDefault = parcelHelpers.interopDefault(_semaphore);
var Mutex = /** @class */ function() {
    function Mutex1() {
        this._semaphore = new _semaphoreDefault.default(1);
    }
    Mutex1.prototype.acquire = function() {
        return _tslib.__awaiter(this, void 0, void 0, function() {
            var _a, releaser;
            return _tslib.__generator(this, function(_b) {
                switch(_b.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this._semaphore.acquire()
                        ];
                    case 1:
                        _a = _b.sent(), releaser = _a[1];
                        return [
                            2 /*return*/ ,
                            releaser
                        ];
                }
            });
        });
    };
    Mutex1.prototype.runExclusive = function(callback) {
        return this._semaphore.runExclusive(function() {
            return callback();
        });
    };
    Mutex1.prototype.isLocked = function() {
        return this._semaphore.isLocked();
    };
    Mutex1.prototype.release = function() {
        this._semaphore.release();
    };
    return Mutex1;
}();
exports.default = Mutex;

},{"tslib":"igtiS","./Semaphore":"8TDsX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"igtiS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__extends", ()=>__extends
);
parcelHelpers.export(exports, "__assign", ()=>__assign
);
parcelHelpers.export(exports, "__rest", ()=>__rest
);
parcelHelpers.export(exports, "__decorate", ()=>__decorate
);
parcelHelpers.export(exports, "__param", ()=>__param
);
parcelHelpers.export(exports, "__metadata", ()=>__metadata
);
parcelHelpers.export(exports, "__awaiter", ()=>__awaiter
);
parcelHelpers.export(exports, "__generator", ()=>__generator
);
parcelHelpers.export(exports, "__createBinding", ()=>__createBinding
);
parcelHelpers.export(exports, "__exportStar", ()=>__exportStar
);
parcelHelpers.export(exports, "__values", ()=>__values
);
parcelHelpers.export(exports, "__read", ()=>__read
);
/** @deprecated */ parcelHelpers.export(exports, "__spread", ()=>__spread
);
/** @deprecated */ parcelHelpers.export(exports, "__spreadArrays", ()=>__spreadArrays
);
parcelHelpers.export(exports, "__spreadArray", ()=>__spreadArray
);
parcelHelpers.export(exports, "__await", ()=>__await
);
parcelHelpers.export(exports, "__asyncGenerator", ()=>__asyncGenerator
);
parcelHelpers.export(exports, "__asyncDelegator", ()=>__asyncDelegator
);
parcelHelpers.export(exports, "__asyncValues", ()=>__asyncValues
);
parcelHelpers.export(exports, "__makeTemplateObject", ()=>__makeTemplateObject
);
parcelHelpers.export(exports, "__importStar", ()=>__importStar
);
parcelHelpers.export(exports, "__importDefault", ()=>__importDefault
);
parcelHelpers.export(exports, "__classPrivateFieldGet", ()=>__classPrivateFieldGet
);
parcelHelpers.export(exports, "__classPrivateFieldSet", ()=>__classPrivateFieldSet
);
/*! *****************************************************************************
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
***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d1, b1) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d1, b1);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) {
        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: n === "return"
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v1) {
        Promise.resolve(v1).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
        value: raw
    });
    else cooked.raw = raw;
    return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8TDsX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tslib = require("tslib");
var Semaphore = /** @class */ function() {
    function Semaphore1(_maxConcurrency) {
        this._maxConcurrency = _maxConcurrency;
        this._queue = [];
        if (_maxConcurrency <= 0) throw new Error('semaphore must be initialized to a positive value');
        this._value = _maxConcurrency;
    }
    Semaphore1.prototype.acquire = function() {
        var _this = this;
        var locked = this.isLocked();
        var ticket = new Promise(function(r) {
            return _this._queue.push(r);
        });
        if (!locked) this._dispatch();
        return ticket;
    };
    Semaphore1.prototype.runExclusive = function(callback) {
        return _tslib.__awaiter(this, void 0, void 0, function() {
            var _a, value, release;
            return _tslib.__generator(this, function(_b) {
                switch(_b.label){
                    case 0:
                        return [
                            4 /*yield*/ ,
                            this.acquire()
                        ];
                    case 1:
                        _a = _b.sent(), value = _a[0], release = _a[1];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([
                            2,
                            ,
                            4,
                            5
                        ]);
                        return [
                            4 /*yield*/ ,
                            callback(value)
                        ];
                    case 3:
                        return [
                            2 /*return*/ ,
                            _b.sent()
                        ];
                    case 4:
                        release();
                        return [
                            7 /*endfinally*/ 
                        ];
                    case 5:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    Semaphore1.prototype.isLocked = function() {
        return this._value <= 0;
    };
    Semaphore1.prototype.release = function() {
        if (this._maxConcurrency > 1) throw new Error('this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead');
        if (this._currentReleaser) {
            var releaser = this._currentReleaser;
            this._currentReleaser = undefined;
            releaser();
        }
    };
    Semaphore1.prototype._dispatch = function() {
        var _this = this;
        var nextConsumer = this._queue.shift();
        if (!nextConsumer) return;
        var released = false;
        this._currentReleaser = function() {
            if (released) return;
            released = true;
            _this._value++;
            _this._dispatch();
        };
        nextConsumer([
            this._value--,
            this._currentReleaser
        ]);
    };
    return Semaphore1;
}();
exports.default = Semaphore;

},{"tslib":"igtiS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i1CtZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
parcelHelpers.export(exports, "withTimeout", ()=>withTimeout
);
var _tslib = require("tslib");
function withTimeout(sync, timeout, timeoutError) {
    var _this = this;
    if (timeoutError === void 0) timeoutError = new Error('timeout');
    return {
        acquire: function() {
            return new Promise(function(resolve, reject) {
                return _tslib.__awaiter(_this, void 0, void 0, function() {
                    var isTimeout, ticket, release;
                    return _tslib.__generator(this, function(_a) {
                        switch(_a.label){
                            case 0:
                                isTimeout = false;
                                setTimeout(function() {
                                    isTimeout = true;
                                    reject(timeoutError);
                                }, timeout);
                                return [
                                    4 /*yield*/ ,
                                    sync.acquire()
                                ];
                            case 1:
                                ticket = _a.sent();
                                if (isTimeout) {
                                    release = Array.isArray(ticket) ? ticket[1] : ticket;
                                    release();
                                } else resolve(ticket);
                                return [
                                    2 /*return*/ 
                                ];
                        }
                    });
                });
            });
        },
        runExclusive: function(callback) {
            return _tslib.__awaiter(this, void 0, void 0, function() {
                var release, ticket;
                return _tslib.__generator(this, function(_a) {
                    switch(_a.label){
                        case 0:
                            release = function() {
                                return undefined;
                            };
                            _a.label = 1;
                        case 1:
                            _a.trys.push([
                                1,
                                ,
                                7,
                                8
                            ]);
                            return [
                                4 /*yield*/ ,
                                this.acquire()
                            ];
                        case 2:
                            ticket = _a.sent();
                            if (!Array.isArray(ticket)) return [
                                3 /*break*/ ,
                                4
                            ];
                            release = ticket[1];
                            return [
                                4 /*yield*/ ,
                                callback(ticket[0])
                            ];
                        case 3:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                        case 4:
                            release = ticket;
                            return [
                                4 /*yield*/ ,
                                callback()
                            ];
                        case 5:
                            return [
                                2 /*return*/ ,
                                _a.sent()
                            ];
                        case 6:
                            return [
                                3 /*break*/ ,
                                8
                            ];
                        case 7:
                            release();
                            return [
                                7 /*endfinally*/ 
                            ];
                        case 8:
                            return [
                                2 /*return*/ 
                            ];
                    }
                });
            });
        },
        release: function() {
            sync.release();
        },
        isLocked: function() {
            return sync.isLocked();
        }
    };
}

},{"tslib":"igtiS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bEmJ8":[function(require,module,exports) {
const EthQuery = require('eth-query');
const pify = require('pify');
const BaseFilterWithHistory = require('./base-filter-history');
const { bnToHex , hexToInt , incrementHexInt , minBlockRef , blockRefIsNumber  } = require('./hexUtils');
class LogFilter extends BaseFilterWithHistory {
    constructor({ provider , params  }){
        super();
        this.type = 'log';
        this.ethQuery = new EthQuery(provider);
        this.params = Object.assign({
            fromBlock: 'latest',
            toBlock: 'latest',
            address: undefined,
            topics: []
        }, params);
        // normalize address parameter
        if (this.params.address) {
            // ensure array
            if (!Array.isArray(this.params.address)) this.params.address = [
                this.params.address
            ];
            // ensure lowercase
            this.params.address = this.params.address.map((address)=>address.toLowerCase()
            );
        }
    }
    async initialize({ currentBlock  }) {
        // resolve params.fromBlock
        let fromBlock = this.params.fromBlock;
        if ([
            'latest',
            'pending'
        ].includes(fromBlock)) fromBlock = currentBlock;
        if ('earliest' === fromBlock) fromBlock = '0x0';
        this.params.fromBlock = fromBlock;
        // set toBlock for initial lookup
        const toBlock = minBlockRef(this.params.toBlock, currentBlock);
        const params = Object.assign({}, this.params, {
            toBlock
        });
        // fetch logs and add to results
        const newLogs = await this._fetchLogs(params);
        this.addInitialResults(newLogs);
    }
    async update({ oldBlock , newBlock  }) {
        // configure params for this update
        const toBlock = newBlock;
        let fromBlock;
        // oldBlock is empty on first sync
        if (oldBlock) fromBlock = incrementHexInt(oldBlock);
        else fromBlock = newBlock;
        // fetch logs
        const params = Object.assign({}, this.params, {
            fromBlock,
            toBlock
        });
        const newLogs = await this._fetchLogs(params);
        const matchingLogs = newLogs.filter((log)=>this.matchLog(log)
        );
        // add to results
        this.addResults(matchingLogs);
    }
    async _fetchLogs(params) {
        const newLogs = await pify((cb)=>this.ethQuery.getLogs(params, cb)
        )();
        // add to results
        return newLogs;
    }
    matchLog(log) {
        // check if block number in bounds:
        if (hexToInt(this.params.fromBlock) >= hexToInt(log.blockNumber)) return false;
        if (blockRefIsNumber(this.params.toBlock) && hexToInt(this.params.toBlock) <= hexToInt(log.blockNumber)) return false;
        // address is correct:
        const normalizedLogAddress = log.address && log.address.toLowerCase();
        if (this.params.address && normalizedLogAddress && !this.params.address.includes(normalizedLogAddress)) return false;
        // topics match:
        // topics are position-dependant
        // topics can be nested to represent `or` [[a || b], c]
        // topics can be null, representing a wild card for that position
        const topicsMatch = this.params.topics.every((topicPattern, index)=>{
            // pattern is longer than actual topics
            let logTopic = log.topics[index];
            if (!logTopic) return false;
            logTopic = logTopic.toLowerCase();
            // normalize subTopics
            let subtopicsToMatch = Array.isArray(topicPattern) ? topicPattern : [
                topicPattern
            ];
            // check for wild card
            const subtopicsIncludeWildcard = subtopicsToMatch.includes(null);
            if (subtopicsIncludeWildcard) return true;
            subtopicsToMatch = subtopicsToMatch.map((topic)=>topic.toLowerCase()
            );
            // check each possible matching topic
            const topicDoesMatch = subtopicsToMatch.includes(logTopic);
            return topicDoesMatch;
        });
        return topicsMatch;
    }
}
module.exports = LogFilter;

},{"eth-query":"bSTFn","pify":"leTtz","./base-filter-history":"bBd1S","./hexUtils":"6TZxz"}],"leTtz":[function(require,module,exports) {
'use strict';
const processFn = (fn, options, proxy, unwrapped)=>function(...arguments_) {
        const P = options.promiseModule;
        return new P((resolve, reject)=>{
            if (options.multiArgs) arguments_.push((...result)=>{
                if (options.errorFirst) {
                    if (result[0]) reject(result);
                    else {
                        result.shift();
                        resolve(result);
                    }
                } else resolve(result);
            });
            else if (options.errorFirst) arguments_.push((error, result)=>{
                if (error) reject(error);
                else resolve(result);
            });
            else arguments_.push(resolve);
            const self = this === proxy ? unwrapped : this;
            Reflect.apply(fn, self, arguments_);
        });
    }
;
const filterCache = new WeakMap();
module.exports = (input, options)=>{
    options = {
        exclude: [
            /.+(?:Sync|Stream)$/
        ],
        errorFirst: true,
        promiseModule: Promise,
        ...options
    };
    const objectType = typeof input;
    if (!(input !== null && (objectType === 'object' || objectType === 'function'))) throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${input === null ? 'null' : objectType}\``);
    const filter = (target, key)=>{
        let cached = filterCache.get(target);
        if (!cached) {
            cached = {};
            filterCache.set(target, cached);
        }
        if (key in cached) return cached[key];
        const match = (pattern)=>typeof pattern === 'string' || typeof key === 'symbol' ? key === pattern : pattern.test(key)
        ;
        const desc = Reflect.getOwnPropertyDescriptor(target, key);
        const writableOrConfigurableOwn = desc === undefined || desc.writable || desc.configurable;
        const included = options.include ? options.include.some(match) : !options.exclude.some(match);
        const shouldFilter = included && writableOrConfigurableOwn;
        cached[key] = shouldFilter;
        return shouldFilter;
    };
    const cache = new WeakMap();
    const proxy = new Proxy(input, {
        apply (target, thisArg, args) {
            const cached = cache.get(target);
            if (cached) return Reflect.apply(cached, thisArg, args);
            const pified = options.excludeMain ? target : processFn(target, options, proxy, target);
            cache.set(target, pified);
            return Reflect.apply(pified, thisArg, args);
        },
        get (target, key) {
            const property = target[key];
            // eslint-disable-next-line no-use-extend-native/no-use-extend-native
            if (!filter(target, key) || property === Function.prototype[key]) return property;
            const cached = cache.get(property);
            if (cached) return cached;
            if (typeof property === 'function') {
                const pified = processFn(property, options, proxy, target);
                cache.set(property, pified);
                return pified;
            }
            return property;
        }
    });
    return proxy;
};

},{}],"bBd1S":[function(require,module,exports) {
const BaseFilter = require('./base-filter');
// tracks all results ever recorded
class BaseFilterWithHistory extends BaseFilter {
    constructor(){
        super();
        this.allResults = [];
    }
    async update() {
        throw new Error('BaseFilterWithHistory - no update method specified');
    }
    addResults(newResults) {
        this.allResults = this.allResults.concat(newResults);
        super.addResults(newResults);
    }
    addInitialResults(newResults) {
        this.allResults = this.allResults.concat(newResults);
        super.addInitialResults(newResults);
    }
    getAllResults() {
        return this.allResults;
    }
}
module.exports = BaseFilterWithHistory;

},{"./base-filter":"liPDG"}],"liPDG":[function(require,module,exports) {
const SafeEventEmitter = require('@metamask/safe-event-emitter').default;
class BaseFilter extends SafeEventEmitter {
    constructor(){
        super();
        this.updates = [];
    }
    async initialize() {}
    async update() {
        throw new Error('BaseFilter - no update method specified');
    }
    addResults(newResults) {
        this.updates = this.updates.concat(newResults);
        newResults.forEach((result)=>this.emit('update', result)
        );
    }
    addInitialResults(newResults) {}
    getChangesAndClear() {
        const updates = this.updates;
        this.updates = [];
        return updates;
    }
}
module.exports = BaseFilter;

},{"@metamask/safe-event-emitter":"1duJT"}],"6TZxz":[function(require,module,exports) {
module.exports = {
    minBlockRef,
    maxBlockRef,
    sortBlockRefs,
    bnToHex,
    blockRefIsNumber,
    hexToInt,
    incrementHexInt,
    intToHex,
    unsafeRandomBytes
};
function minBlockRef(...refs) {
    const sortedRefs = sortBlockRefs(refs);
    return sortedRefs[0];
}
function maxBlockRef(...refs) {
    const sortedRefs = sortBlockRefs(refs);
    return sortedRefs[sortedRefs.length - 1];
}
function sortBlockRefs(refs) {
    return refs.sort((refA, refB)=>{
        if (refA === 'latest' || refB === 'earliest') return 1;
        if (refB === 'latest' || refA === 'earliest') return -1;
        return hexToInt(refA) - hexToInt(refB);
    });
}
function bnToHex(bn) {
    return '0x' + bn.toString(16);
}
function blockRefIsNumber(blockRef) {
    return blockRef && ![
        'earliest',
        'latest',
        'pending'
    ].includes(blockRef);
}
function hexToInt(hexString) {
    if (hexString === undefined || hexString === null) return hexString;
    return Number.parseInt(hexString, 16);
}
function incrementHexInt(hexString) {
    if (hexString === undefined || hexString === null) return hexString;
    const value = hexToInt(hexString);
    return intToHex(value + 1);
}
function intToHex(int) {
    if (int === undefined || int === null) return int;
    let hexString = int.toString(16);
    const needsLeftPad = hexString.length % 2;
    if (needsLeftPad) hexString = '0' + hexString;
    return '0x' + hexString;
}
function unsafeRandomBytes(byteCount) {
    let result = '0x';
    for(let i = 0; i < byteCount; i++){
        result += unsafeRandomNibble();
        result += unsafeRandomNibble();
    }
    return result;
}
function unsafeRandomNibble() {
    return Math.floor(Math.random() * 16).toString(16);
}

},{}],"4ypCb":[function(require,module,exports) {
const BaseFilter = require('./base-filter');
const getBlocksForRange = require('./getBlocksForRange');
const { incrementHexInt  } = require('./hexUtils');
class BlockFilter extends BaseFilter {
    constructor({ provider , params  }){
        super();
        this.type = 'block';
        this.provider = provider;
    }
    async update({ oldBlock , newBlock  }) {
        const toBlock = newBlock;
        const fromBlock = incrementHexInt(oldBlock);
        const blockBodies = await getBlocksForRange({
            provider: this.provider,
            fromBlock,
            toBlock
        });
        const blockHashes = blockBodies.map((block)=>block.hash
        );
        this.addResults(blockHashes);
    }
}
module.exports = BlockFilter;

},{"./base-filter":"liPDG","./getBlocksForRange":"jMjUm","./hexUtils":"6TZxz"}],"jMjUm":[function(require,module,exports) {
module.exports = getBlocksForRange;
async function getBlocksForRange({ provider , fromBlock , toBlock  }) {
    if (!fromBlock) fromBlock = toBlock;
    const fromBlockNumber = hexToInt(fromBlock);
    const toBlockNumber = hexToInt(toBlock);
    const blockCountToQuery = toBlockNumber - fromBlockNumber + 1;
    // load all blocks from old to new (inclusive)
    const missingBlockNumbers = Array(blockCountToQuery).fill().map((_, index)=>fromBlockNumber + index
    ).map(intToHex);
    const blockBodies = await Promise.all(missingBlockNumbers.map((blockNum)=>query(provider, 'eth_getBlockByNumber', [
            blockNum,
            false
        ])
    ));
    return blockBodies;
}
function hexToInt(hexString) {
    if (hexString === undefined || hexString === null) return hexString;
    return Number.parseInt(hexString, 16);
}
function incrementHexInt(hexString) {
    if (hexString === undefined || hexString === null) return hexString;
    const value = hexToInt(hexString);
    return intToHex(value + 1);
}
function intToHex(int) {
    if (int === undefined || int === null) return int;
    const hexString = int.toString(16);
    return '0x' + hexString;
}
function query(provider, method, params) {
    return new Promise((resolve, reject)=>{
        provider.sendAsync({
            id: 1,
            jsonrpc: '2.0',
            method,
            params
        }, (err, res)=>{
            if (err) return reject(err);
            resolve(res.result);
        });
    });
}

},{}],"7lMYK":[function(require,module,exports) {
const BaseFilter = require('./base-filter');
const getBlocksForRange = require('./getBlocksForRange');
const { incrementHexInt  } = require('./hexUtils');
class TxFilter extends BaseFilter {
    constructor({ provider  }){
        super();
        this.type = 'tx';
        this.provider = provider;
    }
    async update({ oldBlock  }) {
        const toBlock = oldBlock;
        const fromBlock = incrementHexInt(oldBlock);
        const blocks = await getBlocksForRange({
            provider: this.provider,
            fromBlock,
            toBlock
        });
        const blockTxHashes = [];
        for (const block of blocks)blockTxHashes.push(...block.transactions);
        // add to results
        this.addResults(blockTxHashes);
    }
}
module.exports = TxFilter;

},{"./base-filter":"liPDG","./getBlocksForRange":"jMjUm","./hexUtils":"6TZxz"}],"knUR6":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WalletLink = void 0;
const WalletLinkAnalytics_1 = require("./connection/WalletLinkAnalytics");
const ScopedLocalStorage_1 = require("./lib/ScopedLocalStorage");
const WalletLinkProvider_1 = require("./provider/WalletLinkProvider");
const WalletLinkSdkUI_1 = require("./provider/WalletLinkSdkUI");
const WalletLinkRelay_1 = require("./relay/WalletLinkRelay");
const WalletLinkRelayEventManager_1 = require("./relay/WalletLinkRelayEventManager");
const util_1 = require("./util");
const WALLETLINK_URL = "https://www.walletlink.org";
const WALLETLINK_VERSION = require("../package.json").version || "unknown";
class WalletLink {
    /**
     * Constructor
     * @param options WalletLink options object
     */ constructor(options1){
        this._appName = "";
        this._appLogoUrl = null;
        this._relay = null;
        this._relayEventManager = null;
        let walletLinkUrl = options1.walletLinkUrl || WALLETLINK_URL;
        let walletLinkUIConstructor;
        if (!options1.walletLinkUIConstructor) walletLinkUIConstructor = (options)=>new WalletLinkSdkUI_1.WalletLinkSdkUI(options)
        ;
        else walletLinkUIConstructor = options1.walletLinkUIConstructor;
        if (typeof options1.overrideIsMetaMask === "undefined") this._overrideIsMetaMask = false;
        else this._overrideIsMetaMask = options1.overrideIsMetaMask;
        this._walletLinkAnalytics = options1.walletLinkAnalytics ? options1.walletLinkAnalytics : new WalletLinkAnalytics_1.WalletLinkAnalytics();
        const u = new URL(walletLinkUrl);
        const walletLinkOrigin = `${u.protocol}//${u.host}`;
        this._storage = new ScopedLocalStorage_1.ScopedLocalStorage(`-walletlink:${walletLinkOrigin}`);
        this._storage.setItem("version", WalletLink.VERSION);
        if (typeof window.walletLinkExtension !== "undefined") return;
        this._relayEventManager = new WalletLinkRelayEventManager_1.WalletLinkRelayEventManager();
        this._relay = new WalletLinkRelay_1.WalletLinkRelay({
            walletLinkUrl: walletLinkUrl,
            version: WALLETLINK_VERSION,
            darkMode: !!options1.darkMode,
            walletLinkUIConstructor,
            storage: this._storage,
            relayEventManager: this._relayEventManager,
            walletLinkAnalytics: this._walletLinkAnalytics
        });
        this.setAppInfo(options1.appName, options1.appLogoUrl);
        this._relay.attachUI();
    }
    /**
     * Create a Web3 Provider object
     * @param jsonRpcUrl Ethereum JSON RPC URL (Default: "")
     * @param chainId Ethereum Chain ID (Default: 1)
     * @returns A Web3 Provider
     */ makeWeb3Provider(jsonRpcUrl = "", chainId = 1) {
        if (typeof window.walletLinkExtension !== "undefined") {
            if (//@ts-ignore
            typeof window.walletLinkExtension.isCipher !== "boolean" || //@ts-ignore
            !window.walletLinkExtension.isCipher) //@ts-ignore
            window.walletLinkExtension.setProviderInfo(jsonRpcUrl, chainId);
            return window.walletLinkExtension;
        }
        const relay = this._relay;
        if (!relay || !this._relayEventManager || !this._storage) throw new Error("Relay not initialized, should never happen");
        if (!jsonRpcUrl) relay.setConnectDisabled(true);
        return new WalletLinkProvider_1.WalletLinkProvider({
            relayProvider: ()=>Promise.resolve(relay)
            ,
            relayEventManager: this._relayEventManager,
            storage: this._storage,
            jsonRpcUrl,
            chainId,
            walletLinkAnalytics: this._walletLinkAnalytics,
            overrideIsMetaMask: this._overrideIsMetaMask
        });
    }
    /**
     * Set application information
     * @param appName Application name
     * @param appLogoUrl Application logo image URL
     */ setAppInfo(appName, appLogoUrl) {
        var _a;
        this._appName = appName || "DApp";
        this._appLogoUrl = appLogoUrl || (0, util_1.getFavicon)();
        if (typeof window.walletLinkExtension !== "undefined") {
            if (//@ts-ignore
            typeof window.walletLinkExtension.isCipher !== "boolean" || //@ts-ignore
            !window.walletLinkExtension.isCipher) //@ts-ignore
            window.walletLinkExtension.setAppInfo(this._appName, this._appLogoUrl);
        } else (_a = this._relay) === null || _a === void 0 || _a.setAppInfo(this._appName, this._appLogoUrl);
    }
    /**
     * Disconnect. After disconnecting, this will reload the web page to ensure
     * all potential stale state is cleared.
     */ disconnect() {
        var _a;
        if (typeof window.walletLinkExtension !== "undefined") window.walletLinkExtension.close();
        else (_a = this._relay) === null || _a === void 0 || _a.resetAndReload();
    }
}
exports.WalletLink = WalletLink;
/**
 * WalletLink version
 */ WalletLink.VERSION = WALLETLINK_VERSION;

},{"./connection/WalletLinkAnalytics":"bZTVr","./lib/ScopedLocalStorage":"4SbEw","./provider/WalletLinkProvider":"g1Rbp","./provider/WalletLinkSdkUI":"euEED","./relay/WalletLinkRelay":"evBIQ","./relay/WalletLinkRelayEventManager":"akmE6","./util":"8WKyV","../package.json":"Saw8N"}],"4SbEw":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ScopedLocalStorage = void 0;
class ScopedLocalStorage {
    constructor(scope){
        this.scope = scope;
    }
    setItem(key, value) {
        localStorage.setItem(this.scopedKey(key), value);
    }
    getItem(key) {
        return localStorage.getItem(this.scopedKey(key));
    }
    removeItem(key) {
        localStorage.removeItem(this.scopedKey(key));
    }
    clear() {
        const prefix = this.scopedKey("");
        const keysToRemove = [];
        for(let i = 0; i < localStorage.length; i++){
            const key = localStorage.key(i);
            if (typeof key === "string" && key.startsWith(prefix)) keysToRemove.push(key);
        }
        keysToRemove.forEach((key)=>localStorage.removeItem(key)
        );
    }
    scopedKey(key) {
        return `${this.scope}:${key}`;
    }
}
exports.ScopedLocalStorage = ScopedLocalStorage;

},{}],"euEED":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WalletLinkSdkUI = void 0;
const LinkFlow_1 = require("../components/LinkFlow");
const Snackbar_1 = require("../components/Snackbar");
const cssReset_1 = require("../lib/cssReset");
const WalletLinkUI_1 = require("./WalletLinkUI");
class WalletLinkSdkUI extends WalletLinkUI_1.WalletLinkUI {
    constructor(options){
        super(options);
        this.attached = false;
        this.snackbar = new Snackbar_1.Snackbar({
            darkMode: options.darkMode
        });
        this.linkFlow = new LinkFlow_1.LinkFlow({
            darkMode: options.darkMode,
            version: options.version,
            sessionId: options.session.id,
            sessionSecret: options.session.secret,
            walletLinkUrl: options.walletLinkUrl,
            connected$: options.connected$,
            isParentConnection: false
        });
    }
    attach() {
        if (this.attached) throw new Error("WalletLinkUI is already attached");
        const el = document.documentElement;
        const container = document.createElement("div");
        container.className = "-walletlink-css-reset";
        el.appendChild(container);
        this.linkFlow.attach(container);
        this.snackbar.attach(container);
        this.attached = true;
        (0, cssReset_1.injectCssReset)();
    }
    setConnectDisabled(connectDisabled) {
        this.linkFlow.setConnectDisabled(connectDisabled);
    }
    // @ts-ignore
    switchEthereumChain(options) {
    // no-op
    }
    requestEthereumAccounts(options) {
        this.linkFlow.open({
            onCancel: options.onCancel
        });
    }
    hideRequestEthereumAccounts() {
        this.linkFlow.close();
    }
    signEthereumMessage(_) {
    // No-op
    }
    signEthereumTransaction(_) {
    // No-op
    }
    submitEthereumTransaction(_) {
    // No-op
    }
    ethereumAddressFromSignedMessage(_) {
    // No-op
    }
    showConnecting(options) {
        const snackbarProps = {
            message: "Confirm on phone",
            menuItems: [
                {
                    isRed: true,
                    info: "Cancel transaction",
                    svgWidth: "11",
                    svgHeight: "11",
                    path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                    defaultFillRule: "inherit",
                    defaultClipRule: "inherit",
                    onClick: options.onCancel
                },
                {
                    isRed: false,
                    info: "Reset connection",
                    svgWidth: "10",
                    svgHeight: "11",
                    path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                    defaultFillRule: "evenodd",
                    defaultClipRule: "evenodd",
                    onClick: options.onResetConnection
                }
            ]
        };
        return this.snackbar.presentItem(snackbarProps);
    }
    reloadUI() {
        document.location.reload();
    }
    inlineAccountsResponse() {
        return false;
    }
    inlineSwitchEthereumChain() {
        return false;
    }
    isStandalone() {
        return false;
    }
}
exports.WalletLinkSdkUI = WalletLinkSdkUI;

},{"../components/LinkFlow":"9aj60","../components/Snackbar":"l3wXR","../lib/cssReset":"e6rRl","./WalletLinkUI":"2f0kE"}],"9aj60":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LinkFlow = void 0;
const preact_1 = require("preact");
const rxjs_1 = require("rxjs");
const LinkDialog_1 = require("./LinkDialog");
const operators_1 = require("rxjs/operators");
const TryExtensionLinkDialog_1 = require("./TryExtensionLinkDialog");
class LinkFlow {
    constructor(options){
        this.extensionUI$ = new rxjs_1.BehaviorSubject({});
        this.subscriptions = new rxjs_1.Subscription();
        this.isConnected = false;
        this.isOpen = false;
        this.onCancel = null;
        this.root = null;
        // if true, hide QR code in LinkFlow (which happens if no jsonRpcUrl is provided)
        this.connectDisabled = false;
        this.darkMode = options.darkMode;
        this.version = options.version;
        this.sessionId = options.sessionId;
        this.sessionSecret = options.sessionSecret;
        this.walletLinkUrl = options.walletLinkUrl;
        this.isParentConnection = options.isParentConnection;
        this.connected$ = options.connected$;
        // Check if extension UI is enabled
        fetch("https://api.wallet.coinbase.com/rpc/v2/getFeatureFlags").then((res)=>res.json()
        ).then((json)=>{
            const enabled = json.result.desktop.extension_ui;
            if (typeof enabled === "undefined") this.extensionUI$.next({
                value: false
            });
            else this.extensionUI$.next({
                value: enabled
            });
        }).catch((err)=>{
            console.error(`Couldn't fetch feature flags - ${err}`);
            this.extensionUI$.next({
                value: false
            });
        });
    }
    attach(el) {
        this.root = document.createElement("div");
        this.root.className = "-walletlink-link-flow-root";
        el.appendChild(this.root);
        this.render();
        this.subscriptions.add(this.connected$.subscribe((v)=>{
            if (this.isConnected !== v) {
                this.isConnected = v;
                this.render();
            }
        }));
    }
    detach() {
        var _a;
        if (!this.root) return;
        this.subscriptions.unsubscribe();
        (0, preact_1.render)(null, this.root);
        (_a = this.root.parentElement) === null || _a === void 0 || _a.removeChild(this.root);
    }
    setConnectDisabled(connectDisabled) {
        this.connectDisabled = connectDisabled;
    }
    open(options) {
        this.isOpen = true;
        this.onCancel = options.onCancel;
        this.render();
    }
    close() {
        this.isOpen = false;
        this.onCancel = null;
        this.render();
    }
    render() {
        if (!this.root) return;
        const subscription = this.extensionUI$.pipe((0, operators_1.first)((enabled)=>enabled.value !== undefined
        )) // wait for a valid value before rendering
        .subscribe((enabled)=>{
            if (!this.root) return;
            (0, preact_1.render)(enabled.value ? (0, preact_1.h)(TryExtensionLinkDialog_1.TryExtensionLinkDialog, {
                darkMode: this.darkMode,
                version: this.version,
                sessionId: this.sessionId,
                sessionSecret: this.sessionSecret,
                walletLinkUrl: this.walletLinkUrl,
                isOpen: this.isOpen,
                isConnected: this.isConnected,
                isParentConnection: this.isParentConnection,
                onCancel: this.onCancel,
                connectDisabled: this.connectDisabled
            }) : (0, preact_1.h)(LinkDialog_1.LinkDialog, {
                darkMode: this.darkMode,
                version: this.version,
                sessionId: this.sessionId,
                sessionSecret: this.sessionSecret,
                walletLinkUrl: this.walletLinkUrl,
                isOpen: this.isOpen,
                isConnected: this.isConnected,
                isParentConnection: this.isParentConnection,
                onCancel: this.onCancel
            }), this.root);
        });
        this.subscriptions.add(subscription);
    }
}
exports.LinkFlow = LinkFlow;

},{"preact":"26zcy","rxjs":"eNCF7","./LinkDialog":"8CkSV","rxjs/operators":"hZ5Xz","./TryExtensionLinkDialog":"8boin"}],"26zcy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>S
);
parcelHelpers.export(exports, "hydrate", ()=>q
);
parcelHelpers.export(exports, "createElement", ()=>v
);
parcelHelpers.export(exports, "h", ()=>v
);
parcelHelpers.export(exports, "Fragment", ()=>d
);
parcelHelpers.export(exports, "createRef", ()=>p
);
parcelHelpers.export(exports, "isValidElement", ()=>i
);
parcelHelpers.export(exports, "Component", ()=>_
);
parcelHelpers.export(exports, "cloneElement", ()=>B
);
parcelHelpers.export(exports, "createContext", ()=>D
);
parcelHelpers.export(exports, "toChildArray", ()=>A
);
parcelHelpers.export(exports, "options", ()=>l
);
var n, l, u, i, t, r, o, f, e = {}, c = [], s = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function a(n1, l1) {
    for(var u1 in l1)n1[u1] = l1[u1];
    return n1;
}
function h(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
}
function v(l3, u2, i1) {
    var t1, r1, o1, f1 = {};
    for(o1 in u2)"key" == o1 ? t1 = u2[o1] : "ref" == o1 ? r1 = u2[o1] : f1[o1] = u2[o1];
    if (arguments.length > 2 && (f1.children = arguments.length > 3 ? n.call(arguments, 2) : i1), "function" == typeof l3 && null != l3.defaultProps) for(o1 in l3.defaultProps)void 0 === f1[o1] && (f1[o1] = l3.defaultProps[o1]);
    return y(l3, f1, t1, r1, null);
}
function y(n3, i2, t2, r2, o2) {
    var f2 = {
        type: n3,
        props: i2,
        key: t2,
        ref: r2,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o2 ? ++u : o2
    };
    return null == o2 && null != l.vnode && l.vnode(f2), f2;
}
function p() {
    return {
        current: null
    };
}
function d(n4) {
    return n4.children;
}
function _(n5, l4) {
    this.props = n5, this.context = l4;
}
function k(n6, l5) {
    if (null == l5) return n6.__ ? k(n6.__, n6.__.__k.indexOf(n6) + 1) : null;
    for(var u3; l5 < n6.__k.length; l5++)if (null != (u3 = n6.__k[l5]) && null != u3.__e) return u3.__e;
    return "function" == typeof n6.type ? k(n6) : null;
}
function b(n7) {
    var l6, u4;
    if (null != (n7 = n7.__) && null != n7.__c) {
        for(n7.__e = n7.__c.base = null, l6 = 0; l6 < n7.__k.length; l6++)if (null != (u4 = n7.__k[l6]) && null != u4.__e) {
            n7.__e = n7.__c.base = u4.__e;
            break;
        }
        return b(n7);
    }
}
function m(n8) {
    (!n8.__d && (n8.__d = !0) && t.push(n8) && !g.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(g);
}
function g() {
    for(var n9; g.__r = t.length;)n9 = t.sort(function(n10, l7) {
        return n10.__v.__b - l7.__v.__b;
    }), t = [], n9.some(function(n11) {
        var l8, u5, i3, t3, r3, o3;
        n11.__d && (r3 = (t3 = (l8 = n11).__v).__e, (o3 = l8.__P) && (u5 = [], (i3 = a({}, t3)).__v = t3.__v + 1, j(o3, t3, i3, l8.__n, void 0 !== o3.ownerSVGElement, null != t3.__h ? [
            r3
        ] : null, u5, null == r3 ? k(t3) : r3, t3.__h), z(u5, t3), t3.__e != r3 && b(t3)));
    });
}
function w(n12, l9, u6, i4, t4, r4, o4, f3, s1, a1) {
    var h1, v1, p1, _1, b1, m1, g1, w1 = i4 && i4.__k || c, A1 = w1.length;
    for(u6.__k = [], h1 = 0; h1 < l9.length; h1++)if (null != (_1 = u6.__k[h1] = null == (_1 = l9[h1]) || "boolean" == typeof _1 ? null : "string" == typeof _1 || "number" == typeof _1 || "bigint" == typeof _1 ? y(null, _1, null, null, _1) : Array.isArray(_1) ? y(d, {
        children: _1
    }, null, null, null) : _1.__b > 0 ? y(_1.type, _1.props, _1.key, null, _1.__v) : _1)) {
        if (_1.__ = u6, _1.__b = u6.__b + 1, null === (p1 = w1[h1]) || p1 && _1.key == p1.key && _1.type === p1.type) w1[h1] = void 0;
        else for(v1 = 0; v1 < A1; v1++){
            if ((p1 = w1[v1]) && _1.key == p1.key && _1.type === p1.type) {
                w1[v1] = void 0;
                break;
            }
            p1 = null;
        }
        j(n12, _1, p1 = p1 || e, t4, r4, o4, f3, s1, a1), b1 = _1.__e, (v1 = _1.ref) && p1.ref != v1 && (g1 || (g1 = []), p1.ref && g1.push(p1.ref, null, _1), g1.push(v1, _1.__c || b1, _1)), null != b1 ? (null == m1 && (m1 = b1), "function" == typeof _1.type && _1.__k === p1.__k ? _1.__d = s1 = x(_1, s1, n12) : s1 = P(n12, _1, p1, w1, b1, s1), "function" == typeof u6.type && (u6.__d = s1)) : s1 && p1.__e == s1 && s1.parentNode != n12 && (s1 = k(p1));
    }
    for(u6.__e = m1, h1 = A1; h1--;)null != w1[h1] && ("function" == typeof u6.type && null != w1[h1].__e && w1[h1].__e == u6.__d && (u6.__d = k(i4, h1 + 1)), N(w1[h1], w1[h1]));
    if (g1) for(h1 = 0; h1 < g1.length; h1++)M(g1[h1], g1[++h1], g1[++h1]);
}
function x(n13, l10, u7) {
    for(var i5, t5 = n13.__k, r5 = 0; t5 && r5 < t5.length; r5++)(i5 = t5[r5]) && (i5.__ = n13, l10 = "function" == typeof i5.type ? x(i5, l10, u7) : P(u7, i5, i5, t5, i5.__e, l10));
    return l10;
}
function A(n14, l11) {
    return l11 = l11 || [], null == n14 || "boolean" == typeof n14 || (Array.isArray(n14) ? n14.some(function(n15) {
        A(n15, l11);
    }) : l11.push(n14)), l11;
}
function P(n16, l12, u8, i6, t6, r6) {
    var o5, f4, e1;
    if (void 0 !== l12.__d) o5 = l12.__d, l12.__d = void 0;
    else if (null == u8 || t6 != r6 || null == t6.parentNode) n: if (null == r6 || r6.parentNode !== n16) n16.appendChild(t6), o5 = null;
    else {
        for(f4 = r6, e1 = 0; (f4 = f4.nextSibling) && e1 < i6.length; e1 += 2)if (f4 == t6) break n;
        n16.insertBefore(t6, r6), o5 = r6;
    }
    return void 0 !== o5 ? o5 : t6.nextSibling;
}
function C(n17, l13, u9, i7, t7) {
    var r7;
    for(r7 in u9)"children" === r7 || "key" === r7 || r7 in l13 || H(n17, r7, null, u9[r7], i7);
    for(r7 in l13)t7 && "function" != typeof l13[r7] || "children" === r7 || "key" === r7 || "value" === r7 || "checked" === r7 || u9[r7] === l13[r7] || H(n17, r7, l13[r7], u9[r7], i7);
}
function $(n18, l14, u10) {
    "-" === l14[0] ? n18.setProperty(l14, u10) : n18[l14] = null == u10 ? "" : "number" != typeof u10 || s.test(l14) ? u10 : u10 + "px";
}
function H(n19, l15, u11, i8, t8) {
    var r8;
    n: if ("style" === l15) {
        if ("string" == typeof u11) n19.style.cssText = u11;
        else {
            if ("string" == typeof i8 && (n19.style.cssText = i8 = ""), i8) for(l15 in i8)u11 && l15 in u11 || $(n19.style, l15, "");
            if (u11) for(l15 in u11)i8 && u11[l15] === i8[l15] || $(n19.style, l15, u11[l15]);
        }
    } else if ("o" === l15[0] && "n" === l15[1]) r8 = l15 !== (l15 = l15.replace(/Capture$/, "")), l15 = l15.toLowerCase() in n19 ? l15.toLowerCase().slice(2) : l15.slice(2), n19.l || (n19.l = {}), n19.l[l15 + r8] = u11, u11 ? i8 || n19.addEventListener(l15, r8 ? T : I, r8) : n19.removeEventListener(l15, r8 ? T : I, r8);
    else if ("dangerouslySetInnerHTML" !== l15) {
        if (t8) l15 = l15.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== l15 && "list" !== l15 && "form" !== l15 && "tabIndex" !== l15 && "download" !== l15 && l15 in n19) try {
            n19[l15] = null == u11 ? "" : u11;
            break n;
        } catch (n) {}
        "function" == typeof u11 || (null != u11 && (!1 !== u11 || "a" === l15[0] && "r" === l15[1]) ? n19.setAttribute(l15, u11) : n19.removeAttribute(l15));
    }
}
function I(n20) {
    this.l[n20.type + !1](l.event ? l.event(n20) : n20);
}
function T(n21) {
    this.l[n21.type + !0](l.event ? l.event(n21) : n21);
}
function j(n22, u12, i9, t9, r9, o6, f5, e2, c1) {
    var s2, h2, v2, y1, p2, k1, b2, m2, g2, x1, A2, P1 = u12.type;
    if (void 0 !== u12.constructor) return null;
    null != i9.__h && (c1 = i9.__h, e2 = u12.__e = i9.__e, u12.__h = null, o6 = [
        e2
    ]), (s2 = l.__b) && s2(u12);
    try {
        n: if ("function" == typeof P1) {
            if (m2 = u12.props, g2 = (s2 = P1.contextType) && t9[s2.__c], x1 = s2 ? g2 ? g2.props.value : s2.__ : t9, i9.__c ? b2 = (h2 = u12.__c = i9.__c).__ = h2.__E : ("prototype" in P1 && P1.prototype.render ? u12.__c = h2 = new P1(m2, x1) : (u12.__c = h2 = new _(m2, x1), h2.constructor = P1, h2.render = O), g2 && g2.sub(h2), h2.props = m2, h2.state || (h2.state = {}), h2.context = x1, h2.__n = t9, v2 = h2.__d = !0, h2.__h = []), null == h2.__s && (h2.__s = h2.state), null != P1.getDerivedStateFromProps && (h2.__s == h2.state && (h2.__s = a({}, h2.__s)), a(h2.__s, P1.getDerivedStateFromProps(m2, h2.__s))), y1 = h2.props, p2 = h2.state, v2) null == P1.getDerivedStateFromProps && null != h2.componentWillMount && h2.componentWillMount(), null != h2.componentDidMount && h2.__h.push(h2.componentDidMount);
            else {
                if (null == P1.getDerivedStateFromProps && m2 !== y1 && null != h2.componentWillReceiveProps && h2.componentWillReceiveProps(m2, x1), !h2.__e && null != h2.shouldComponentUpdate && !1 === h2.shouldComponentUpdate(m2, h2.__s, x1) || u12.__v === i9.__v) {
                    h2.props = m2, h2.state = h2.__s, u12.__v !== i9.__v && (h2.__d = !1), h2.__v = u12, u12.__e = i9.__e, u12.__k = i9.__k, u12.__k.forEach(function(n23) {
                        n23 && (n23.__ = u12);
                    }), h2.__h.length && f5.push(h2);
                    break n;
                }
                null != h2.componentWillUpdate && h2.componentWillUpdate(m2, h2.__s, x1), null != h2.componentDidUpdate && h2.__h.push(function() {
                    h2.componentDidUpdate(y1, p2, k1);
                });
            }
            h2.context = x1, h2.props = m2, h2.state = h2.__s, (s2 = l.__r) && s2(u12), h2.__d = !1, h2.__v = u12, h2.__P = n22, s2 = h2.render(h2.props, h2.state, h2.context), h2.state = h2.__s, null != h2.getChildContext && (t9 = a(a({}, t9), h2.getChildContext())), v2 || null == h2.getSnapshotBeforeUpdate || (k1 = h2.getSnapshotBeforeUpdate(y1, p2)), A2 = null != s2 && s2.type === d && null == s2.key ? s2.props.children : s2, w(n22, Array.isArray(A2) ? A2 : [
                A2
            ], u12, i9, t9, r9, o6, f5, e2, c1), h2.base = u12.__e, u12.__h = null, h2.__h.length && f5.push(h2), b2 && (h2.__E = h2.__ = null), h2.__e = !1;
        } else null == o6 && u12.__v === i9.__v ? (u12.__k = i9.__k, u12.__e = i9.__e) : u12.__e = L(i9.__e, u12, i9, t9, r9, o6, f5, c1);
        (s2 = l.diffed) && s2(u12);
    } catch (n24) {
        u12.__v = null, (c1 || null != o6) && (u12.__e = e2, u12.__h = !!c1, o6[o6.indexOf(e2)] = null), l.__e(n24, u12, i9);
    }
}
function z(n25, u13) {
    l.__c && l.__c(u13, n25), n25.some(function(u14) {
        try {
            n25 = u14.__h, u14.__h = [], n25.some(function(n26) {
                n26.call(u14);
            });
        } catch (n27) {
            l.__e(n27, u14.__v);
        }
    });
}
function L(l16, u15, i10, t10, r10, o7, f6, c2) {
    var s3, a2, v3, y2 = i10.props, p3 = u15.props, d1 = u15.type, _2 = 0;
    if ("svg" === d1 && (r10 = !0), null != o7) {
        for(; _2 < o7.length; _2++)if ((s3 = o7[_2]) && "setAttribute" in s3 == !!d1 && (d1 ? s3.localName === d1 : 3 === s3.nodeType)) {
            l16 = s3, o7[_2] = null;
            break;
        }
    }
    if (null == l16) {
        if (null === d1) return document.createTextNode(p3);
        l16 = r10 ? document.createElementNS("http://www.w3.org/2000/svg", d1) : document.createElement(d1, p3.is && p3), o7 = null, c2 = !1;
    }
    if (null === d1) y2 === p3 || c2 && l16.data === p3 || (l16.data = p3);
    else {
        if (o7 = o7 && n.call(l16.childNodes), a2 = (y2 = i10.props || e).dangerouslySetInnerHTML, v3 = p3.dangerouslySetInnerHTML, !c2) {
            if (null != o7) for(y2 = {}, _2 = 0; _2 < l16.attributes.length; _2++)y2[l16.attributes[_2].name] = l16.attributes[_2].value;
            (v3 || a2) && (v3 && (a2 && v3.__html == a2.__html || v3.__html === l16.innerHTML) || (l16.innerHTML = v3 && v3.__html || ""));
        }
        if (C(l16, p3, y2, r10, c2), v3) u15.__k = [];
        else if (_2 = u15.props.children, w(l16, Array.isArray(_2) ? _2 : [
            _2
        ], u15, i10, t10, r10 && "foreignObject" !== d1, o7, f6, o7 ? o7[0] : i10.__k && k(i10, 0), c2), null != o7) for(_2 = o7.length; _2--;)null != o7[_2] && h(o7[_2]);
        c2 || ("value" in p3 && void 0 !== (_2 = p3.value) && (_2 !== y2.value || _2 !== l16.value || "progress" === d1 && !_2) && H(l16, "value", _2, y2.value, !1), "checked" in p3 && void 0 !== (_2 = p3.checked) && _2 !== l16.checked && H(l16, "checked", _2, y2.checked, !1));
    }
    return l16;
}
function M(n28, u16, i11) {
    try {
        "function" == typeof n28 ? n28(u16) : n28.current = u16;
    } catch (n29) {
        l.__e(n29, i11);
    }
}
function N(n30, u17, i12) {
    var t11, r11;
    if (l.unmount && l.unmount(n30), (t11 = n30.ref) && (t11.current && t11.current !== n30.__e || M(t11, null, u17)), null != (t11 = n30.__c)) {
        if (t11.componentWillUnmount) try {
            t11.componentWillUnmount();
        } catch (n31) {
            l.__e(n31, u17);
        }
        t11.base = t11.__P = null;
    }
    if (t11 = n30.__k) for(r11 = 0; r11 < t11.length; r11++)t11[r11] && N(t11[r11], u17, "function" != typeof n30.type);
    i12 || null == n30.__e || h(n30.__e), n30.__e = n30.__d = void 0;
}
function O(n32, l, u18) {
    return this.constructor(n32, u18);
}
function S(u19, i13, t12) {
    var r12, o8, f7;
    l.__ && l.__(u19, i13), o8 = (r12 = "function" == typeof t12) ? null : t12 && t12.__k || i13.__k, f7 = [], j(i13, u19 = (!r12 && t12 || i13).__k = v(d, null, [
        u19
    ]), o8 || e, e, void 0 !== i13.ownerSVGElement, !r12 && t12 ? [
        t12
    ] : o8 ? null : i13.firstChild ? n.call(i13.childNodes) : null, f7, !r12 && t12 ? t12 : o8 ? o8.__e : i13.firstChild, r12), z(f7, u19);
}
function q(n33, l17) {
    S(n33, l17, q);
}
function B(l18, u20, i14) {
    var t13, r13, o9, f8 = a({}, l18.props);
    for(o9 in u20)"key" == o9 ? t13 = u20[o9] : "ref" == o9 ? r13 = u20[o9] : f8[o9] = u20[o9];
    return arguments.length > 2 && (f8.children = arguments.length > 3 ? n.call(arguments, 2) : i14), y(l18.type, f8, t13 || l18.key, r13 || l18.ref, null);
}
function D(n34, l19) {
    var u21 = {
        __c: l19 = "__cC" + f++,
        __: n34,
        Consumer: function(n35, l20) {
            return n35.children(l20);
        },
        Provider: function(n36) {
            var u22, i15;
            return this.getChildContext || (u22 = [], (i15 = {})[l19] = this, this.getChildContext = function() {
                return i15;
            }, this.shouldComponentUpdate = function(n37) {
                this.props.value !== n37.value && u22.some(m);
            }, this.sub = function(n38) {
                u22.push(n38);
                var l21 = n38.componentWillUnmount;
                n38.componentWillUnmount = function() {
                    u22.splice(u22.indexOf(n38), 1), l21 && l21.call(n38);
                };
            }), n36.children;
        }
    };
    return u21.Provider.__ = u21.Consumer.contextType = u21;
}
n = c.slice, l = {
    __e: function(n39, l22) {
        for(var u23, i16, t14; l22 = l22.__;)if ((u23 = l22.__c) && !u23.__) try {
            if ((i16 = u23.constructor) && null != i16.getDerivedStateFromError && (u23.setState(i16.getDerivedStateFromError(n39)), t14 = u23.__d), null != u23.componentDidCatch && (u23.componentDidCatch(n39), t14 = u23.__d), t14) return u23.__E = u23;
        } catch (l23) {
            n39 = l23;
        }
        throw n39;
    }
}, u = 0, i = function(n40) {
    return null != n40 && void 0 === n40.constructor;
}, _.prototype.setState = function(n41, l24) {
    var u24;
    u24 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = a({}, this.state), "function" == typeof n41 && (n41 = n41(a({}, u24), this.props)), n41 && a(u24, n41), null != n41 && this.__v && (l24 && this.__h.push(l24), m(this));
}, _.prototype.forceUpdate = function(n42) {
    this.__v && (this.__e = !0, n42 && this.__h.push(n42), m(this));
}, _.prototype.render = d, t = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, f = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8CkSV":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LinkDialog = void 0;
const clsx_1 = __importDefault(require("clsx"));
const preact_1 = require("preact");
const hooks_1 = require("preact/hooks");
const LinkDialog_css_1 = __importDefault(require("./LinkDialog-css"));
const QRCode_1 = require("./QRCode");
const Spinner_1 = require("./Spinner");
const LinkDialog = (props)=>{
    const [isContainerHidden, setContainerHidden] = (0, hooks_1.useState)(!props.isOpen);
    const [isDialogHidden, setDialogHidden] = (0, hooks_1.useState)(!props.isOpen);
    (0, hooks_1.useEffect)(()=>{
        const { isOpen  } = props;
        const timers = [
            window.setTimeout(()=>{
                setDialogHidden(!isOpen);
            }, 10)
        ];
        if (isOpen) setContainerHidden(false);
        else timers.push(window.setTimeout(()=>{
            setContainerHidden(true);
        }, 360));
        return ()=>{
            timers.forEach(window.clearTimeout);
        };
    }, [
        props.isOpen
    ]);
    return (0, preact_1.h)("div", {
        class: (0, clsx_1.default)("-walletlink-link-dialog-container", props.darkMode && "-walletlink-link-dialog-container-dark", isContainerHidden && "-walletlink-link-dialog-container-hidden")
    }, (0, preact_1.h)("style", null, LinkDialog_css_1.default), (0, preact_1.h)("div", {
        class: (0, clsx_1.default)("-walletlink-link-dialog-backdrop", isDialogHidden && "-walletlink-link-dialog-backdrop-hidden")
    }), (0, preact_1.h)("div", {
        class: "-walletlink-link-dialog"
    }, (0, preact_1.h)("div", {
        class: (0, clsx_1.default)("-walletlink-link-dialog-box", isDialogHidden && "-walletlink-link-dialog-box-hidden")
    }, (0, preact_1.h)(ScanQRCode, {
        darkMode: props.darkMode,
        version: props.version,
        sessionId: props.sessionId,
        sessionSecret: props.sessionSecret,
        walletLinkUrl: props.walletLinkUrl,
        isConnected: props.isConnected,
        isParentConnection: props.isParentConnection
    }), props.onCancel && (0, preact_1.h)(CancelButton, {
        onClick: props.onCancel
    }))));
};
exports.LinkDialog = LinkDialog;
const ScanQRCode = (props)=>{
    const serverUrl = window.encodeURIComponent(props.walletLinkUrl);
    const sessionIdKey = props.isParentConnection ? "parent-id" : "id";
    const qrUrl = `${props.walletLinkUrl}/#/link?${sessionIdKey}=${props.sessionId}&secret=${props.sessionSecret}&server=${serverUrl}&v=1`;
    return (0, preact_1.h)("div", {
        class: "-walletlink-link-dialog-box-content"
    }, (0, preact_1.h)("h3", null, "Scan to", (0, preact_1.h)("br", null), " Connect"), (0, preact_1.h)("div", {
        class: "-walletlink-link-dialog-box-content-qrcode"
    }, (0, preact_1.h)("div", {
        class: "-walletlink-link-dialog-box-content-qrcode-wrapper"
    }, (0, preact_1.h)(QRCode_1.QRCode, {
        content: qrUrl,
        width: 224,
        height: 224,
        fgColor: "#000",
        bgColor: "transparent"
    })), (0, preact_1.h)("input", {
        type: "hidden",
        value: qrUrl
    }), !props.isConnected && (0, preact_1.h)("div", {
        class: "-walletlink-link-dialog-box-content-qrcode-connecting"
    }, (0, preact_1.h)(Spinner_1.Spinner, {
        size: 128,
        color: props.darkMode ? "#fff" : "#000"
    }), (0, preact_1.h)("p", null, "Connecting...")), (0, preact_1.h)("p", {
        title: `WalletLink v${props.version}`
    }, "Powered by WalletLink")), (0, preact_1.h)("a", {
        href: `${props.walletLinkUrl}/#/wallets`,
        target: "_blank",
        rel: "noopener"
    }, "Don\u2019t have a wallet app?"));
};
const CancelButton = (props)=>(0, preact_1.h)("button", {
        class: "-walletlink-link-dialog-box-cancel",
        onClick: props.onClick
    }, (0, preact_1.h)("div", {
        class: "-walletlink-link-dialog-box-cancel-x"
    }))
;

},{"clsx":"83C22","preact":"26zcy","preact/hooks":"eZN76","./LinkDialog-css":"gmWNK","./QRCode":"4FLoN","./Spinner":"et5le"}],"eZN76":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useState", ()=>l
);
parcelHelpers.export(exports, "useReducer", ()=>p
);
parcelHelpers.export(exports, "useEffect", ()=>y
);
parcelHelpers.export(exports, "useLayoutEffect", ()=>h
);
parcelHelpers.export(exports, "useRef", ()=>s
);
parcelHelpers.export(exports, "useImperativeHandle", ()=>_
);
parcelHelpers.export(exports, "useMemo", ()=>d
);
parcelHelpers.export(exports, "useCallback", ()=>A
);
parcelHelpers.export(exports, "useContext", ()=>F
);
parcelHelpers.export(exports, "useDebugValue", ()=>T
);
parcelHelpers.export(exports, "useErrorBoundary", ()=>q
);
var _preact = require("preact");
var t, u, r, o = 0, i = [], c = _preact.options.__b, f = _preact.options.__r, e = _preact.options.diffed, a = _preact.options.__c, v = _preact.options.unmount;
function m(t1, r1) {
    _preact.options.__h && _preact.options.__h(u, t1, o || r1), o = 0;
    var i1 = u.__H || (u.__H = {
        __: [],
        __h: []
    });
    return t1 >= i1.__.length && i1.__.push({}), i1.__[t1];
}
function l(n) {
    return o = 1, p(w, n);
}
function p(n1, r2, o1) {
    var i2 = m(t++, 2);
    return i2.t = n1, i2.__c || (i2.__ = [
        o1 ? o1(r2) : w(void 0, r2),
        function(n) {
            var t2 = i2.t(i2.__[0], n);
            i2.__[0] !== t2 && (i2.__ = [
                t2,
                i2.__[1]
            ], i2.__c.setState({}));
        }
    ], i2.__c = u), i2.__;
}
function y(r3, o2) {
    var i3 = m(t++, 3);
    !_preact.options.__s && k(i3.__H, o2) && (i3.__ = r3, i3.__H = o2, u.__H.__h.push(i3));
}
function h(r4, o3) {
    var i4 = m(t++, 4);
    !_preact.options.__s && k(i4.__H, o3) && (i4.__ = r4, i4.__H = o3, u.__h.push(i4));
}
function s(n) {
    return o = 5, d(function() {
        return {
            current: n
        };
    }, []);
}
function _(n, t3, u1) {
    o = 6, h(function() {
        "function" == typeof n ? n(t3()) : n && (n.current = t3());
    }, null == u1 ? u1 : u1.concat(n));
}
function d(n, u2) {
    var r5 = m(t++, 7);
    return k(r5.__H, u2) && (r5.__ = n(), r5.__H = u2, r5.__h = n), r5.__;
}
function A(n, t4) {
    return o = 8, d(function() {
        return n;
    }, t4);
}
function F(n) {
    var r6 = u.context[n.__c], o4 = m(t++, 9);
    return o4.c = n, r6 ? (null == o4.__ && (o4.__ = !0, r6.sub(u)), r6.props.value) : n.__;
}
function T(t5, u3) {
    _preact.options.useDebugValue && _preact.options.useDebugValue(u3 ? u3(t5) : t5);
}
function q(n2) {
    var r7 = m(t++, 10), o5 = l();
    return r7.__ = n2, u.componentDidCatch || (u.componentDidCatch = function(n) {
        r7.__ && r7.__(n), o5[1](n);
    }), [
        o5[0],
        function() {
            o5[1](void 0);
        }
    ];
}
function x() {
    var t6;
    for(i.sort(function(n, t7) {
        return n.__v.__b - t7.__v.__b;
    }); t6 = i.pop();)if (t6.__P) try {
        t6.__H.__h.forEach(g), t6.__H.__h.forEach(j), t6.__H.__h = [];
    } catch (u4) {
        t6.__H.__h = [], _preact.options.__e(u4, t6.__v);
    }
}
_preact.options.__b = function(n) {
    u = null, c && c(n);
}, _preact.options.__r = function(n) {
    f && f(n), t = 0;
    var r8 = (u = n.__c).__H;
    r8 && (r8.__h.forEach(g), r8.__h.forEach(j), r8.__h = []);
}, _preact.options.diffed = function(t8) {
    e && e(t8);
    var o6 = t8.__c;
    o6 && o6.__H && o6.__H.__h.length && (1 !== i.push(o6) && r === _preact.options.requestAnimationFrame || ((r = _preact.options.requestAnimationFrame) || function(n) {
        var t9, u5 = function() {
            clearTimeout(r9), b && cancelAnimationFrame(t9), setTimeout(n);
        }, r9 = setTimeout(u5, 100);
        b && (t9 = requestAnimationFrame(u5));
    })(x)), u = null;
}, _preact.options.__c = function(t10, u6) {
    u6.some(function(t11) {
        try {
            t11.__h.forEach(g), t11.__h = t11.__h.filter(function(n) {
                return !n.__ || j(n);
            });
        } catch (r10) {
            u6.some(function(n) {
                n.__h && (n.__h = []);
            }), u6 = [], _preact.options.__e(r10, t11.__v);
        }
    }), a && a(t10, u6);
}, _preact.options.unmount = function(t12) {
    v && v(t12);
    var u7, r11 = t12.__c;
    r11 && r11.__H && (r11.__H.__.forEach(function(n) {
        try {
            g(n);
        } catch (n3) {
            u7 = n3;
        }
    }), u7 && _preact.options.__e(u7, r11.__v));
};
var b = "function" == typeof requestAnimationFrame;
function g(n) {
    var t13 = u, r12 = n.__c;
    "function" == typeof r12 && (n.__c = void 0, r12()), u = t13;
}
function j(n) {
    var t14 = u;
    n.__c = n.__(), u = t14;
}
function k(n, t15) {
    return !n || n.length !== t15.length || t15.some(function(t16, u8) {
        return t16 !== n[u8];
    });
}
function w(n, t17) {
    return "function" == typeof t17 ? t17(n) : t17;
}

},{"preact":"26zcy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gmWNK":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2021 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2021 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = `.-walletlink-css-reset .-walletlink-link-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-walletlink-css-reset .-walletlink-link-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.33);transition:opacity .25s}.-walletlink-css-reset .-walletlink-link-dialog-backdrop-hidden{opacity:0}.-walletlink-css-reset .-walletlink-link-dialog-box{display:flex;position:relative;flex-direction:column;background-color:#f6f6f6;border-radius:16px;box-shadow:0px 16px 24px rgba(0,0,0,.1),0px 0px 8px rgba(0,0,0,.05);transform:scale(1);transition:opacity .25s,transform .25s;overflow:hidden}.-walletlink-css-reset .-walletlink-link-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-walletlink-css-reset .-walletlink-link-dialog-box-content{padding:24px;text-align:center}.-walletlink-css-reset .-walletlink-link-dialog-box-content h3{display:block;margin-bottom:24px;text-align:left;text-transform:uppercase;font-size:22px;font-weight:bold;line-height:1.2;color:#000}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode{position:relative;display:block;margin-bottom:24px;background-color:#f6f6f6;padding:16px;border-radius:16px;box-shadow:4px 4px 8px rgba(0,0,0,.15),-8px -8px 8px #fff;overflow:hidden}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-wrapper{display:block;width:232px;height:232px;padding:4px;border-radius:4px;background:#f4f4f4;margin-bottom:16px}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-wrapper img{display:block;width:224px;height:224px}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode>p{display:block;color:gray;font-weight:bold;font-size:12px;text-align:center}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-connecting{position:absolute;top:0;left:0;right:0;bottom:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(246,246,246,.98)}.-walletlink-css-reset .-walletlink-link-dialog-box-content-qrcode-connecting p{margin-top:16px;color:#333;font-size:12px;font-weight:bold}.-walletlink-css-reset .-walletlink-link-dialog-box-content a{text-align:center;cursor:pointer;transition:color .1s;font-size:14px}.-walletlink-css-reset .-walletlink-link-dialog-box-content a,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:link,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:visited{color:#999}.-walletlink-css-reset .-walletlink-link-dialog-box-content a:hover,.-walletlink-css-reset .-walletlink-link-dialog-box-content a:active{color:#666;text-decoration:underline}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel{position:absolute;-webkit-appearance:none;display:flex;align-items:center;justify-content:center;top:24px;right:24px;width:24px;height:24px;border-radius:12px;background-color:#e7e7e7;cursor:pointer}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x{position:relative;display:block}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::after{content:"";position:absolute;display:block;top:-1px;left:-7px;width:14px;height:2px;background-color:#999;transition:background-color .2s}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::before{transform:rotate(45deg)}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel-x::after{transform:rotate(135deg)}.-walletlink-css-reset .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-a,.-walletlink-css-reset .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-b{background-color:#000}.-walletlink-css-reset .-walletlink-link-dialog-container{display:block}.-walletlink-css-reset .-walletlink-link-dialog-container-hidden{display:none}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box{background-color:#2a2a2a}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content h3{color:#ccc}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode{background-color:#2a2a2a;box-shadow:4px 4px 8px rgba(0,0,0,.5),-8px -8px 8px #343434}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode>p{color:#999}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode-connecting{background:rgba(42,42,42,.98)}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content-qrcode-connecting p{color:#ddd}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:link,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:visited{color:#888}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:hover,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-content a:active{color:#aaa}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel{background-color:#333}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel-x::after{background-color:#aaa}.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-link-dialog-container-dark .-walletlink-link-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x::after{background-color:#eee}`;

},{}],"4FLoN":[function(require,module,exports) {
"use strict";
var Buffer = require("buffer").Buffer;
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.QRCode = void 0;
const preact_1 = require("preact");
const hooks_1 = require("preact/hooks");
const qrcode_svg_1 = __importDefault(require("../vendor-js/qrcode-svg"));
const QRCode = (props)=>{
    const [svg, setSvg] = (0, hooks_1.useState)("");
    (0, hooks_1.useEffect)(()=>{
        var _a, _b;
        const qrcode = new qrcode_svg_1.default({
            content: props.content,
            background: props.bgColor || "#ffffff",
            color: props.fgColor || "#000000",
            container: "svg",
            ecl: "M",
            width: (_a = props.width) !== null && _a !== void 0 ? _a : 256,
            height: (_b = props.height) !== null && _b !== void 0 ? _b : 256,
            padding: 0,
            image: props.image
        });
        const base64 = Buffer.from(qrcode.svg(), "utf8").toString("base64");
        setSvg(`data:image/svg+xml;base64,${base64}`);
    });
    return svg ? (0, preact_1.h)("img", {
        src: svg,
        alt: "QR Code"
    }) : null;
};
exports.QRCode = QRCode;

},{"buffer":"fCgem","preact":"26zcy","preact/hooks":"eZN76","../vendor-js/qrcode-svg":"asLsn"}],"asLsn":[function(require,module,exports) {
/**
 * @fileoverview
 * - modified davidshimjs/qrcodejs library for use in node.js
 * - Using the 'QRCode for Javascript library'
 * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.
 * - this library has no dependencies.
 *
 * @version 0.9.1 (2016-02-12)
 * @author davidshimjs, papnkukn
 * @see <a href="http://www.d-project.com/" target="_blank">http://www.d-project.com/</a>
 * @see <a href="http://jeromeetienne.github.com/jquery-qrcode/" target="_blank">http://jeromeetienne.github.com/jquery-qrcode/</a>
 * @see <a href="https://github.com/davidshimjs/qrcodejs" target="_blank">https://github.com/davidshimjs/qrcodejs</a>
 */ //---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------
function QR8bitByte(data) {
    this.mode = QRMode.MODE_8BIT_BYTE;
    this.data = data;
    this.parsedData = [];
    // Added to support UTF-8 Characters
    for(var i1 = 0, l = this.data.length; i1 < l; i1++){
        var byteArray = [];
        var code = this.data.charCodeAt(i1);
        if (code > 0x10000) {
            byteArray[0] = 0xF0 | (code & 0x1C0000) >>> 18;
            byteArray[1] = 0x80 | (code & 0x3F000) >>> 12;
            byteArray[2] = 0x80 | (code & 0xFC0) >>> 6;
            byteArray[3] = 0x80 | code & 0x3F;
        } else if (code > 0x800) {
            byteArray[0] = 0xE0 | (code & 0xF000) >>> 12;
            byteArray[1] = 0x80 | (code & 0xFC0) >>> 6;
            byteArray[2] = 0x80 | code & 0x3F;
        } else if (code > 0x80) {
            byteArray[0] = 0xC0 | (code & 0x7C0) >>> 6;
            byteArray[1] = 0x80 | code & 0x3F;
        } else byteArray[0] = code;
        this.parsedData.push(byteArray);
    }
    this.parsedData = Array.prototype.concat.apply([], this.parsedData);
    if (this.parsedData.length != this.data.length) {
        this.parsedData.unshift(191);
        this.parsedData.unshift(187);
        this.parsedData.unshift(239);
    }
}
QR8bitByte.prototype = {
    getLength: function(buffer) {
        return this.parsedData.length;
    },
    write: function(buffer) {
        for(var i2 = 0, l = this.parsedData.length; i2 < l; i2++)buffer.put(this.parsedData[i2], 8);
    }
};
function QRCodeModel(typeNumber, errorCorrectLevel) {
    this.typeNumber = typeNumber;
    this.errorCorrectLevel = errorCorrectLevel;
    this.modules = null;
    this.moduleCount = 0;
    this.dataCache = null;
    this.dataList = [];
}
QRCodeModel.prototype = {
    addData: function(data) {
        var newData = new QR8bitByte(data);
        this.dataList.push(newData);
        this.dataCache = null;
    },
    isDark: function(row, col) {
        if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) throw new Error(row + "," + col);
        return this.modules[row][col];
    },
    getModuleCount: function() {
        return this.moduleCount;
    },
    make: function() {
        this.makeImpl(false, this.getBestMaskPattern());
    },
    makeImpl: function(test, maskPattern) {
        this.moduleCount = this.typeNumber * 4 + 17;
        this.modules = new Array(this.moduleCount);
        for(var row = 0; row < this.moduleCount; row++){
            this.modules[row] = new Array(this.moduleCount);
            for(var col = 0; col < this.moduleCount; col++)this.modules[row][col] = null;
        }
        this.setupPositionProbePattern(0, 0);
        this.setupPositionProbePattern(this.moduleCount - 7, 0);
        this.setupPositionProbePattern(0, this.moduleCount - 7);
        this.setupPositionAdjustPattern();
        this.setupTimingPattern();
        this.setupTypeInfo(test, maskPattern);
        if (this.typeNumber >= 7) this.setupTypeNumber(test);
        if (this.dataCache == null) this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
        this.mapData(this.dataCache, maskPattern);
    },
    setupPositionProbePattern: function(row, col) {
        for(var r = -1; r <= 7; r++){
            if (row + r <= -1 || this.moduleCount <= row + r) continue;
            for(var c = -1; c <= 7; c++){
                if (col + c <= -1 || this.moduleCount <= col + c) continue;
                if (0 <= r && r <= 6 && (c == 0 || c == 6) || 0 <= c && c <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= c && c <= 4) this.modules[row + r][col + c] = true;
                else this.modules[row + r][col + c] = false;
            }
        }
    },
    getBestMaskPattern: function() {
        var minLostPoint = 0;
        var pattern = 0;
        for(var i3 = 0; i3 < 8; i3++){
            this.makeImpl(true, i3);
            var lostPoint = QRUtil.getLostPoint(this);
            if (i3 == 0 || minLostPoint > lostPoint) {
                minLostPoint = lostPoint;
                pattern = i3;
            }
        }
        return pattern;
    },
    createMovieClip: function(target_mc, instance_name, depth) {
        var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
        var cs = 1;
        this.make();
        for(var row = 0; row < this.modules.length; row++){
            var y = row * cs;
            for(var col = 0; col < this.modules[row].length; col++){
                var x = col * cs;
                var dark = this.modules[row][col];
                if (dark) {
                    qr_mc.beginFill(0, 100);
                    qr_mc.moveTo(x, y);
                    qr_mc.lineTo(x + cs, y);
                    qr_mc.lineTo(x + cs, y + cs);
                    qr_mc.lineTo(x, y + cs);
                    qr_mc.endFill();
                }
            }
        }
        return qr_mc;
    },
    setupTimingPattern: function() {
        for(var r = 8; r < this.moduleCount - 8; r++){
            if (this.modules[r][6] != null) continue;
            this.modules[r][6] = r % 2 == 0;
        }
        for(var c = 8; c < this.moduleCount - 8; c++){
            if (this.modules[6][c] != null) continue;
            this.modules[6][c] = c % 2 == 0;
        }
    },
    setupPositionAdjustPattern: function() {
        var pos = QRUtil.getPatternPosition(this.typeNumber);
        for(var i4 = 0; i4 < pos.length; i4++)for(var j = 0; j < pos.length; j++){
            var row = pos[i4];
            var col = pos[j];
            if (this.modules[row][col] != null) continue;
            for(var r = -2; r <= 2; r++){
                for(var c = -2; c <= 2; c++)if (r == -2 || r == 2 || c == -2 || c == 2 || r == 0 && c == 0) this.modules[row + r][col + c] = true;
                else this.modules[row + r][col + c] = false;
            }
        }
    },
    setupTypeNumber: function(test) {
        var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
        for(var i5 = 0; i5 < 18; i5++){
            var mod = !test && (bits >> i5 & 1) == 1;
            this.modules[Math.floor(i5 / 3)][i5 % 3 + this.moduleCount - 8 - 3] = mod;
        }
        for(var i5 = 0; i5 < 18; i5++){
            var mod = !test && (bits >> i5 & 1) == 1;
            this.modules[i5 % 3 + this.moduleCount - 8 - 3][Math.floor(i5 / 3)] = mod;
        }
    },
    setupTypeInfo: function(test, maskPattern) {
        var data = this.errorCorrectLevel << 3 | maskPattern;
        var bits = QRUtil.getBCHTypeInfo(data);
        for(var i6 = 0; i6 < 15; i6++){
            var mod = !test && (bits >> i6 & 1) == 1;
            if (i6 < 6) this.modules[i6][8] = mod;
            else if (i6 < 8) this.modules[i6 + 1][8] = mod;
            else this.modules[this.moduleCount - 15 + i6][8] = mod;
        }
        for(var i6 = 0; i6 < 15; i6++){
            var mod = !test && (bits >> i6 & 1) == 1;
            if (i6 < 8) this.modules[8][this.moduleCount - i6 - 1] = mod;
            else if (i6 < 9) this.modules[8][15 - i6 - 1 + 1] = mod;
            else this.modules[8][15 - i6 - 1] = mod;
        }
        this.modules[this.moduleCount - 8][8] = !test;
    },
    mapData: function(data, maskPattern) {
        var inc = -1;
        var row = this.moduleCount - 1;
        var bitIndex = 7;
        var byteIndex = 0;
        for(var col = this.moduleCount - 1; col > 0; col -= 2){
            if (col == 6) col--;
            while(true){
                for(var c = 0; c < 2; c++)if (this.modules[row][col - c] == null) {
                    var dark = false;
                    if (byteIndex < data.length) dark = (data[byteIndex] >>> bitIndex & 1) == 1;
                    var mask = QRUtil.getMask(maskPattern, row, col - c);
                    if (mask) dark = !dark;
                    this.modules[row][col - c] = dark;
                    bitIndex--;
                    if (bitIndex == -1) {
                        byteIndex++;
                        bitIndex = 7;
                    }
                }
                row += inc;
                if (row < 0 || this.moduleCount <= row) {
                    row -= inc;
                    inc = -inc;
                    break;
                }
            }
        }
    }
};
QRCodeModel.PAD0 = 0xEC;
QRCodeModel.PAD1 = 0x11;
QRCodeModel.createData = function(typeNumber, errorCorrectLevel, dataList) {
    var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
    var buffer = new QRBitBuffer();
    for(var i7 = 0; i7 < dataList.length; i7++){
        var data = dataList[i7];
        buffer.put(data.mode, 4);
        buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
        data.write(buffer);
    }
    var totalDataCount = 0;
    for(var i7 = 0; i7 < rsBlocks.length; i7++)totalDataCount += rsBlocks[i7].dataCount;
    if (buffer.getLengthInBits() > totalDataCount * 8) throw new Error("code length overflow. (" + buffer.getLengthInBits() + ">" + totalDataCount * 8 + ")");
    if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) buffer.put(0, 4);
    while(buffer.getLengthInBits() % 8 != 0)buffer.putBit(false);
    while(true){
        if (buffer.getLengthInBits() >= totalDataCount * 8) break;
        buffer.put(QRCodeModel.PAD0, 8);
        if (buffer.getLengthInBits() >= totalDataCount * 8) break;
        buffer.put(QRCodeModel.PAD1, 8);
    }
    return QRCodeModel.createBytes(buffer, rsBlocks);
};
QRCodeModel.createBytes = function(buffer, rsBlocks) {
    var offset = 0;
    var maxDcCount = 0;
    var maxEcCount = 0;
    var dcdata = new Array(rsBlocks.length);
    var ecdata = new Array(rsBlocks.length);
    for(var r = 0; r < rsBlocks.length; r++){
        var dcCount = rsBlocks[r].dataCount;
        var ecCount = rsBlocks[r].totalCount - dcCount;
        maxDcCount = Math.max(maxDcCount, dcCount);
        maxEcCount = Math.max(maxEcCount, ecCount);
        dcdata[r] = new Array(dcCount);
        for(var i8 = 0; i8 < dcdata[r].length; i8++)dcdata[r][i8] = 0xff & buffer.buffer[i8 + offset];
        offset += dcCount;
        var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
        var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
        var modPoly = rawPoly.mod(rsPoly);
        ecdata[r] = new Array(rsPoly.getLength() - 1);
        for(var i8 = 0; i8 < ecdata[r].length; i8++){
            var modIndex = i8 + modPoly.getLength() - ecdata[r].length;
            ecdata[r][i8] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
        }
    }
    var totalCodeCount = 0;
    for(var i8 = 0; i8 < rsBlocks.length; i8++)totalCodeCount += rsBlocks[i8].totalCount;
    var data = new Array(totalCodeCount);
    var index = 0;
    for(var i8 = 0; i8 < maxDcCount; i8++){
        for(var r = 0; r < rsBlocks.length; r++)if (i8 < dcdata[r].length) data[index++] = dcdata[r][i8];
    }
    for(var i8 = 0; i8 < maxEcCount; i8++){
        for(var r = 0; r < rsBlocks.length; r++)if (i8 < ecdata[r].length) data[index++] = ecdata[r][i8];
    }
    return data;
};
var QRMode = {
    MODE_NUMBER: 1,
    MODE_ALPHA_NUM: 2,
    MODE_8BIT_BYTE: 4,
    MODE_KANJI: 8
};
var QRErrorCorrectLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
};
var QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
};
var QRUtil = {
    PATTERN_POSITION_TABLE: [
        [],
        [
            6,
            18
        ],
        [
            6,
            22
        ],
        [
            6,
            26
        ],
        [
            6,
            30
        ],
        [
            6,
            34
        ],
        [
            6,
            22,
            38
        ],
        [
            6,
            24,
            42
        ],
        [
            6,
            26,
            46
        ],
        [
            6,
            28,
            50
        ],
        [
            6,
            30,
            54
        ],
        [
            6,
            32,
            58
        ],
        [
            6,
            34,
            62
        ],
        [
            6,
            26,
            46,
            66
        ],
        [
            6,
            26,
            48,
            70
        ],
        [
            6,
            26,
            50,
            74
        ],
        [
            6,
            30,
            54,
            78
        ],
        [
            6,
            30,
            56,
            82
        ],
        [
            6,
            30,
            58,
            86
        ],
        [
            6,
            34,
            62,
            90
        ],
        [
            6,
            28,
            50,
            72,
            94
        ],
        [
            6,
            26,
            50,
            74,
            98
        ],
        [
            6,
            30,
            54,
            78,
            102
        ],
        [
            6,
            28,
            54,
            80,
            106
        ],
        [
            6,
            32,
            58,
            84,
            110
        ],
        [
            6,
            30,
            58,
            86,
            114
        ],
        [
            6,
            34,
            62,
            90,
            118
        ],
        [
            6,
            26,
            50,
            74,
            98,
            122
        ],
        [
            6,
            30,
            54,
            78,
            102,
            126
        ],
        [
            6,
            26,
            52,
            78,
            104,
            130
        ],
        [
            6,
            30,
            56,
            82,
            108,
            134
        ],
        [
            6,
            34,
            60,
            86,
            112,
            138
        ],
        [
            6,
            30,
            58,
            86,
            114,
            142
        ],
        [
            6,
            34,
            62,
            90,
            118,
            146
        ],
        [
            6,
            30,
            54,
            78,
            102,
            126,
            150
        ],
        [
            6,
            24,
            50,
            76,
            102,
            128,
            154
        ],
        [
            6,
            28,
            54,
            80,
            106,
            132,
            158
        ],
        [
            6,
            32,
            58,
            84,
            110,
            136,
            162
        ],
        [
            6,
            26,
            54,
            82,
            110,
            138,
            166
        ],
        [
            6,
            30,
            58,
            86,
            114,
            142,
            170
        ]
    ],
    G15: 1335,
    G18: 7973,
    G15_MASK: 21522,
    getBCHTypeInfo: function(data) {
        var d = data << 10;
        while(QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0)d ^= QRUtil.G15 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15);
        return (data << 10 | d) ^ QRUtil.G15_MASK;
    },
    getBCHTypeNumber: function(data) {
        var d = data << 12;
        while(QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0)d ^= QRUtil.G18 << QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18);
        return data << 12 | d;
    },
    getBCHDigit: function(data) {
        var digit = 0;
        while(data != 0){
            digit++;
            data >>>= 1;
        }
        return digit;
    },
    getPatternPosition: function(typeNumber) {
        return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },
    getMask: function(maskPattern, i9, j) {
        switch(maskPattern){
            case QRMaskPattern.PATTERN000:
                return (i9 + j) % 2 == 0;
            case QRMaskPattern.PATTERN001:
                return i9 % 2 == 0;
            case QRMaskPattern.PATTERN010:
                return j % 3 == 0;
            case QRMaskPattern.PATTERN011:
                return (i9 + j) % 3 == 0;
            case QRMaskPattern.PATTERN100:
                return (Math.floor(i9 / 2) + Math.floor(j / 3)) % 2 == 0;
            case QRMaskPattern.PATTERN101:
                return i9 * j % 2 + i9 * j % 3 == 0;
            case QRMaskPattern.PATTERN110:
                return (i9 * j % 2 + i9 * j % 3) % 2 == 0;
            case QRMaskPattern.PATTERN111:
                return (i9 * j % 3 + (i9 + j) % 2) % 2 == 0;
            default:
                throw new Error("bad maskPattern:" + maskPattern);
        }
    },
    getErrorCorrectPolynomial: function(errorCorrectLength) {
        var a = new QRPolynomial([
            1
        ], 0);
        for(var i10 = 0; i10 < errorCorrectLength; i10++)a = a.multiply(new QRPolynomial([
            1,
            QRMath.gexp(i10)
        ], 0));
        return a;
    },
    getLengthInBits: function(mode, type) {
        if (1 <= type && type < 10) switch(mode){
            case QRMode.MODE_NUMBER:
                return 10;
            case QRMode.MODE_ALPHA_NUM:
                return 9;
            case QRMode.MODE_8BIT_BYTE:
                return 8;
            case QRMode.MODE_KANJI:
                return 8;
            default:
                throw new Error("mode:" + mode);
        }
        else if (type < 27) switch(mode){
            case QRMode.MODE_NUMBER:
                return 12;
            case QRMode.MODE_ALPHA_NUM:
                return 11;
            case QRMode.MODE_8BIT_BYTE:
                return 16;
            case QRMode.MODE_KANJI:
                return 10;
            default:
                throw new Error("mode:" + mode);
        }
        else if (type < 41) switch(mode){
            case QRMode.MODE_NUMBER:
                return 14;
            case QRMode.MODE_ALPHA_NUM:
                return 13;
            case QRMode.MODE_8BIT_BYTE:
                return 16;
            case QRMode.MODE_KANJI:
                return 12;
            default:
                throw new Error("mode:" + mode);
        }
        else throw new Error("type:" + type);
    },
    getLostPoint: function(qrCode) {
        var moduleCount = qrCode.getModuleCount();
        var lostPoint = 0;
        for(var row = 0; row < moduleCount; row++)for(var col = 0; col < moduleCount; col++){
            var sameCount = 0;
            var dark = qrCode.isDark(row, col);
            for(var r = -1; r <= 1; r++){
                if (row + r < 0 || moduleCount <= row + r) continue;
                for(var c = -1; c <= 1; c++){
                    if (col + c < 0 || moduleCount <= col + c) continue;
                    if (r == 0 && c == 0) continue;
                    if (dark == qrCode.isDark(row + r, col + c)) sameCount++;
                }
            }
            if (sameCount > 5) lostPoint += 3 + sameCount - 5;
        }
        for(var row = 0; row < moduleCount - 1; row++)for(var col = 0; col < moduleCount - 1; col++){
            var count = 0;
            if (qrCode.isDark(row, col)) count++;
            if (qrCode.isDark(row + 1, col)) count++;
            if (qrCode.isDark(row, col + 1)) count++;
            if (qrCode.isDark(row + 1, col + 1)) count++;
            if (count == 0 || count == 4) lostPoint += 3;
        }
        for(var row = 0; row < moduleCount; row++){
            for(var col = 0; col < moduleCount - 6; col++)if (qrCode.isDark(row, col) && !qrCode.isDark(row, col + 1) && qrCode.isDark(row, col + 2) && qrCode.isDark(row, col + 3) && qrCode.isDark(row, col + 4) && !qrCode.isDark(row, col + 5) && qrCode.isDark(row, col + 6)) lostPoint += 40;
        }
        for(var col = 0; col < moduleCount; col++){
            for(var row = 0; row < moduleCount - 6; row++)if (qrCode.isDark(row, col) && !qrCode.isDark(row + 1, col) && qrCode.isDark(row + 2, col) && qrCode.isDark(row + 3, col) && qrCode.isDark(row + 4, col) && !qrCode.isDark(row + 5, col) && qrCode.isDark(row + 6, col)) lostPoint += 40;
        }
        var darkCount = 0;
        for(var col = 0; col < moduleCount; col++){
            for(var row = 0; row < moduleCount; row++)if (qrCode.isDark(row, col)) darkCount++;
        }
        var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
        lostPoint += ratio * 10;
        return lostPoint;
    }
};
var QRMath = {
    glog: function(n) {
        if (n < 1) throw new Error("glog(" + n + ")");
        return QRMath.LOG_TABLE[n];
    },
    gexp: function(n) {
        while(n < 0)n += 255;
        while(n >= 256)n -= 255;
        return QRMath.EXP_TABLE[n];
    },
    EXP_TABLE: new Array(256),
    LOG_TABLE: new Array(256)
};
for(var i = 0; i < 8; i++)QRMath.EXP_TABLE[i] = 1 << i;
for(var i = 8; i < 256; i++)QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
for(var i = 0; i < 255; i++)QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
function QRPolynomial(num, shift) {
    if (num.length == undefined) throw new Error(num.length + "/" + shift);
    var offset = 0;
    while(offset < num.length && num[offset] == 0)offset++;
    this.num = new Array(num.length - offset + shift);
    for(var i11 = 0; i11 < num.length - offset; i11++)this.num[i11] = num[i11 + offset];
}
QRPolynomial.prototype = {
    get: function(index) {
        return this.num[index];
    },
    getLength: function() {
        return this.num.length;
    },
    multiply: function(e) {
        var num = new Array(this.getLength() + e.getLength() - 1);
        for(var i12 = 0; i12 < this.getLength(); i12++)for(var j = 0; j < e.getLength(); j++)num[i12 + j] ^= QRMath.gexp(QRMath.glog(this.get(i12)) + QRMath.glog(e.get(j)));
        return new QRPolynomial(num, 0);
    },
    mod: function(e) {
        if (this.getLength() - e.getLength() < 0) return this;
        var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
        var num = new Array(this.getLength());
        for(var i13 = 0; i13 < this.getLength(); i13++)num[i13] = this.get(i13);
        for(var i13 = 0; i13 < e.getLength(); i13++)num[i13] ^= QRMath.gexp(QRMath.glog(e.get(i13)) + ratio);
        return new QRPolynomial(num, 0).mod(e);
    }
};
function QRRSBlock(totalCount, dataCount) {
    this.totalCount = totalCount;
    this.dataCount = dataCount;
}
QRRSBlock.RS_BLOCK_TABLE = [
    [
        1,
        26,
        19
    ],
    [
        1,
        26,
        16
    ],
    [
        1,
        26,
        13
    ],
    [
        1,
        26,
        9
    ],
    [
        1,
        44,
        34
    ],
    [
        1,
        44,
        28
    ],
    [
        1,
        44,
        22
    ],
    [
        1,
        44,
        16
    ],
    [
        1,
        70,
        55
    ],
    [
        1,
        70,
        44
    ],
    [
        2,
        35,
        17
    ],
    [
        2,
        35,
        13
    ],
    [
        1,
        100,
        80
    ],
    [
        2,
        50,
        32
    ],
    [
        2,
        50,
        24
    ],
    [
        4,
        25,
        9
    ],
    [
        1,
        134,
        108
    ],
    [
        2,
        67,
        43
    ],
    [
        2,
        33,
        15,
        2,
        34,
        16
    ],
    [
        2,
        33,
        11,
        2,
        34,
        12
    ],
    [
        2,
        86,
        68
    ],
    [
        4,
        43,
        27
    ],
    [
        4,
        43,
        19
    ],
    [
        4,
        43,
        15
    ],
    [
        2,
        98,
        78
    ],
    [
        4,
        49,
        31
    ],
    [
        2,
        32,
        14,
        4,
        33,
        15
    ],
    [
        4,
        39,
        13,
        1,
        40,
        14
    ],
    [
        2,
        121,
        97
    ],
    [
        2,
        60,
        38,
        2,
        61,
        39
    ],
    [
        4,
        40,
        18,
        2,
        41,
        19
    ],
    [
        4,
        40,
        14,
        2,
        41,
        15
    ],
    [
        2,
        146,
        116
    ],
    [
        3,
        58,
        36,
        2,
        59,
        37
    ],
    [
        4,
        36,
        16,
        4,
        37,
        17
    ],
    [
        4,
        36,
        12,
        4,
        37,
        13
    ],
    [
        2,
        86,
        68,
        2,
        87,
        69
    ],
    [
        4,
        69,
        43,
        1,
        70,
        44
    ],
    [
        6,
        43,
        19,
        2,
        44,
        20
    ],
    [
        6,
        43,
        15,
        2,
        44,
        16
    ],
    [
        4,
        101,
        81
    ],
    [
        1,
        80,
        50,
        4,
        81,
        51
    ],
    [
        4,
        50,
        22,
        4,
        51,
        23
    ],
    [
        3,
        36,
        12,
        8,
        37,
        13
    ],
    [
        2,
        116,
        92,
        2,
        117,
        93
    ],
    [
        6,
        58,
        36,
        2,
        59,
        37
    ],
    [
        4,
        46,
        20,
        6,
        47,
        21
    ],
    [
        7,
        42,
        14,
        4,
        43,
        15
    ],
    [
        4,
        133,
        107
    ],
    [
        8,
        59,
        37,
        1,
        60,
        38
    ],
    [
        8,
        44,
        20,
        4,
        45,
        21
    ],
    [
        12,
        33,
        11,
        4,
        34,
        12
    ],
    [
        3,
        145,
        115,
        1,
        146,
        116
    ],
    [
        4,
        64,
        40,
        5,
        65,
        41
    ],
    [
        11,
        36,
        16,
        5,
        37,
        17
    ],
    [
        11,
        36,
        12,
        5,
        37,
        13
    ],
    [
        5,
        109,
        87,
        1,
        110,
        88
    ],
    [
        5,
        65,
        41,
        5,
        66,
        42
    ],
    [
        5,
        54,
        24,
        7,
        55,
        25
    ],
    [
        11,
        36,
        12
    ],
    [
        5,
        122,
        98,
        1,
        123,
        99
    ],
    [
        7,
        73,
        45,
        3,
        74,
        46
    ],
    [
        15,
        43,
        19,
        2,
        44,
        20
    ],
    [
        3,
        45,
        15,
        13,
        46,
        16
    ],
    [
        1,
        135,
        107,
        5,
        136,
        108
    ],
    [
        10,
        74,
        46,
        1,
        75,
        47
    ],
    [
        1,
        50,
        22,
        15,
        51,
        23
    ],
    [
        2,
        42,
        14,
        17,
        43,
        15
    ],
    [
        5,
        150,
        120,
        1,
        151,
        121
    ],
    [
        9,
        69,
        43,
        4,
        70,
        44
    ],
    [
        17,
        50,
        22,
        1,
        51,
        23
    ],
    [
        2,
        42,
        14,
        19,
        43,
        15
    ],
    [
        3,
        141,
        113,
        4,
        142,
        114
    ],
    [
        3,
        70,
        44,
        11,
        71,
        45
    ],
    [
        17,
        47,
        21,
        4,
        48,
        22
    ],
    [
        9,
        39,
        13,
        16,
        40,
        14
    ],
    [
        3,
        135,
        107,
        5,
        136,
        108
    ],
    [
        3,
        67,
        41,
        13,
        68,
        42
    ],
    [
        15,
        54,
        24,
        5,
        55,
        25
    ],
    [
        15,
        43,
        15,
        10,
        44,
        16
    ],
    [
        4,
        144,
        116,
        4,
        145,
        117
    ],
    [
        17,
        68,
        42
    ],
    [
        17,
        50,
        22,
        6,
        51,
        23
    ],
    [
        19,
        46,
        16,
        6,
        47,
        17
    ],
    [
        2,
        139,
        111,
        7,
        140,
        112
    ],
    [
        17,
        74,
        46
    ],
    [
        7,
        54,
        24,
        16,
        55,
        25
    ],
    [
        34,
        37,
        13
    ],
    [
        4,
        151,
        121,
        5,
        152,
        122
    ],
    [
        4,
        75,
        47,
        14,
        76,
        48
    ],
    [
        11,
        54,
        24,
        14,
        55,
        25
    ],
    [
        16,
        45,
        15,
        14,
        46,
        16
    ],
    [
        6,
        147,
        117,
        4,
        148,
        118
    ],
    [
        6,
        73,
        45,
        14,
        74,
        46
    ],
    [
        11,
        54,
        24,
        16,
        55,
        25
    ],
    [
        30,
        46,
        16,
        2,
        47,
        17
    ],
    [
        8,
        132,
        106,
        4,
        133,
        107
    ],
    [
        8,
        75,
        47,
        13,
        76,
        48
    ],
    [
        7,
        54,
        24,
        22,
        55,
        25
    ],
    [
        22,
        45,
        15,
        13,
        46,
        16
    ],
    [
        10,
        142,
        114,
        2,
        143,
        115
    ],
    [
        19,
        74,
        46,
        4,
        75,
        47
    ],
    [
        28,
        50,
        22,
        6,
        51,
        23
    ],
    [
        33,
        46,
        16,
        4,
        47,
        17
    ],
    [
        8,
        152,
        122,
        4,
        153,
        123
    ],
    [
        22,
        73,
        45,
        3,
        74,
        46
    ],
    [
        8,
        53,
        23,
        26,
        54,
        24
    ],
    [
        12,
        45,
        15,
        28,
        46,
        16
    ],
    [
        3,
        147,
        117,
        10,
        148,
        118
    ],
    [
        3,
        73,
        45,
        23,
        74,
        46
    ],
    [
        4,
        54,
        24,
        31,
        55,
        25
    ],
    [
        11,
        45,
        15,
        31,
        46,
        16
    ],
    [
        7,
        146,
        116,
        7,
        147,
        117
    ],
    [
        21,
        73,
        45,
        7,
        74,
        46
    ],
    [
        1,
        53,
        23,
        37,
        54,
        24
    ],
    [
        19,
        45,
        15,
        26,
        46,
        16
    ],
    [
        5,
        145,
        115,
        10,
        146,
        116
    ],
    [
        19,
        75,
        47,
        10,
        76,
        48
    ],
    [
        15,
        54,
        24,
        25,
        55,
        25
    ],
    [
        23,
        45,
        15,
        25,
        46,
        16
    ],
    [
        13,
        145,
        115,
        3,
        146,
        116
    ],
    [
        2,
        74,
        46,
        29,
        75,
        47
    ],
    [
        42,
        54,
        24,
        1,
        55,
        25
    ],
    [
        23,
        45,
        15,
        28,
        46,
        16
    ],
    [
        17,
        145,
        115
    ],
    [
        10,
        74,
        46,
        23,
        75,
        47
    ],
    [
        10,
        54,
        24,
        35,
        55,
        25
    ],
    [
        19,
        45,
        15,
        35,
        46,
        16
    ],
    [
        17,
        145,
        115,
        1,
        146,
        116
    ],
    [
        14,
        74,
        46,
        21,
        75,
        47
    ],
    [
        29,
        54,
        24,
        19,
        55,
        25
    ],
    [
        11,
        45,
        15,
        46,
        46,
        16
    ],
    [
        13,
        145,
        115,
        6,
        146,
        116
    ],
    [
        14,
        74,
        46,
        23,
        75,
        47
    ],
    [
        44,
        54,
        24,
        7,
        55,
        25
    ],
    [
        59,
        46,
        16,
        1,
        47,
        17
    ],
    [
        12,
        151,
        121,
        7,
        152,
        122
    ],
    [
        12,
        75,
        47,
        26,
        76,
        48
    ],
    [
        39,
        54,
        24,
        14,
        55,
        25
    ],
    [
        22,
        45,
        15,
        41,
        46,
        16
    ],
    [
        6,
        151,
        121,
        14,
        152,
        122
    ],
    [
        6,
        75,
        47,
        34,
        76,
        48
    ],
    [
        46,
        54,
        24,
        10,
        55,
        25
    ],
    [
        2,
        45,
        15,
        64,
        46,
        16
    ],
    [
        17,
        152,
        122,
        4,
        153,
        123
    ],
    [
        29,
        74,
        46,
        14,
        75,
        47
    ],
    [
        49,
        54,
        24,
        10,
        55,
        25
    ],
    [
        24,
        45,
        15,
        46,
        46,
        16
    ],
    [
        4,
        152,
        122,
        18,
        153,
        123
    ],
    [
        13,
        74,
        46,
        32,
        75,
        47
    ],
    [
        48,
        54,
        24,
        14,
        55,
        25
    ],
    [
        42,
        45,
        15,
        32,
        46,
        16
    ],
    [
        20,
        147,
        117,
        4,
        148,
        118
    ],
    [
        40,
        75,
        47,
        7,
        76,
        48
    ],
    [
        43,
        54,
        24,
        22,
        55,
        25
    ],
    [
        10,
        45,
        15,
        67,
        46,
        16
    ],
    [
        19,
        148,
        118,
        6,
        149,
        119
    ],
    [
        18,
        75,
        47,
        31,
        76,
        48
    ],
    [
        34,
        54,
        24,
        34,
        55,
        25
    ],
    [
        20,
        45,
        15,
        61,
        46,
        16
    ]
];
QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
    var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
    if (rsBlock == undefined) throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
    var length = rsBlock.length / 3;
    var list = [];
    for(var i14 = 0; i14 < length; i14++){
        var count = rsBlock[i14 * 3 + 0];
        var totalCount = rsBlock[i14 * 3 + 1];
        var dataCount = rsBlock[i14 * 3 + 2];
        for(var j = 0; j < count; j++)list.push(new QRRSBlock(totalCount, dataCount));
    }
    return list;
};
QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {
    switch(errorCorrectLevel){
        case QRErrorCorrectLevel.L:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
        case QRErrorCorrectLevel.M:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
        case QRErrorCorrectLevel.Q:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
        case QRErrorCorrectLevel.H:
            return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
        default:
            return undefined;
    }
};
function QRBitBuffer() {
    this.buffer = [];
    this.length = 0;
}
QRBitBuffer.prototype = {
    get: function(index) {
        var bufIndex = Math.floor(index / 8);
        return (this.buffer[bufIndex] >>> 7 - index % 8 & 1) == 1;
    },
    put: function(num, length) {
        for(var i15 = 0; i15 < length; i15++)this.putBit((num >>> length - i15 - 1 & 1) == 1);
    },
    getLengthInBits: function() {
        return this.length;
    },
    putBit: function(bit) {
        var bufIndex = Math.floor(this.length / 8);
        if (this.buffer.length <= bufIndex) this.buffer.push(0);
        if (bit) this.buffer[bufIndex] |= 0x80 >>> this.length % 8;
        this.length++;
    }
};
var QRCodeLimitLength = [
    [
        17,
        14,
        11,
        7
    ],
    [
        32,
        26,
        20,
        14
    ],
    [
        53,
        42,
        32,
        24
    ],
    [
        78,
        62,
        46,
        34
    ],
    [
        106,
        84,
        60,
        44
    ],
    [
        134,
        106,
        74,
        58
    ],
    [
        154,
        122,
        86,
        64
    ],
    [
        192,
        152,
        108,
        84
    ],
    [
        230,
        180,
        130,
        98
    ],
    [
        271,
        213,
        151,
        119
    ],
    [
        321,
        251,
        177,
        137
    ],
    [
        367,
        287,
        203,
        155
    ],
    [
        425,
        331,
        241,
        177
    ],
    [
        458,
        362,
        258,
        194
    ],
    [
        520,
        412,
        292,
        220
    ],
    [
        586,
        450,
        322,
        250
    ],
    [
        644,
        504,
        364,
        280
    ],
    [
        718,
        560,
        394,
        310
    ],
    [
        792,
        624,
        442,
        338
    ],
    [
        858,
        666,
        482,
        382
    ],
    [
        929,
        711,
        509,
        403
    ],
    [
        1003,
        779,
        565,
        439
    ],
    [
        1091,
        857,
        611,
        461
    ],
    [
        1171,
        911,
        661,
        511
    ],
    [
        1273,
        997,
        715,
        535
    ],
    [
        1367,
        1059,
        751,
        593
    ],
    [
        1465,
        1125,
        805,
        625
    ],
    [
        1528,
        1190,
        868,
        658
    ],
    [
        1628,
        1264,
        908,
        698
    ],
    [
        1732,
        1370,
        982,
        742
    ],
    [
        1840,
        1452,
        1030,
        790
    ],
    [
        1952,
        1538,
        1112,
        842
    ],
    [
        2068,
        1628,
        1168,
        898
    ],
    [
        2188,
        1722,
        1228,
        958
    ],
    [
        2303,
        1809,
        1283,
        983
    ],
    [
        2431,
        1911,
        1351,
        1051
    ],
    [
        2563,
        1989,
        1423,
        1093
    ],
    [
        2699,
        2099,
        1499,
        1139
    ],
    [
        2809,
        2213,
        1579,
        1219
    ],
    [
        2953,
        2331,
        1663,
        1273
    ]
];
/** Constructor */ function QRCode(options) {
    var instance = this;
    //Default options
    this.options = {
        padding: 4,
        width: 256,
        height: 256,
        typeNumber: 4,
        color: "#000000",
        background: "#ffffff",
        ecl: "M",
        image: {
            svg: "",
            width: 0,
            height: 0
        }
    };
    //In case the options is string
    if (typeof options === 'string') options = {
        content: options
    };
    //Merge options
    if (options) for(var i16 in options)this.options[i16] = options[i16];
    if (typeof this.options.content !== 'string') throw new Error("Expected 'content' as string!");
    if (this.options.content.length === 0 /* || this.options.content.length > 7089 */ ) throw new Error("Expected 'content' to be non-empty!");
    if (!(this.options.padding >= 0)) throw new Error("Expected 'padding' value to be non-negative!");
    if (!(this.options.width > 0) || !(this.options.height > 0)) throw new Error("Expected 'width' or 'height' value to be higher than zero!");
    //Gets the error correction level
    function _getErrorCorrectLevel(ecl) {
        switch(ecl){
            case "L":
                return QRErrorCorrectLevel.L;
            case "M":
                return QRErrorCorrectLevel.M;
            case "Q":
                return QRErrorCorrectLevel.Q;
            case "H":
                return QRErrorCorrectLevel.H;
            default:
                throw new Error("Unknwon error correction level: " + ecl);
        }
    }
    //Get type number
    function _getTypeNumber(content, ecl) {
        var length = _getUTF8Length(content);
        var type = 1;
        var limit = 0;
        for(var i17 = 0, len = QRCodeLimitLength.length; i17 <= len; i17++){
            var table = QRCodeLimitLength[i17];
            if (!table) throw new Error("Content too long: expected " + limit + " but got " + length);
            switch(ecl){
                case "L":
                    limit = table[0];
                    break;
                case "M":
                    limit = table[1];
                    break;
                case "Q":
                    limit = table[2];
                    break;
                case "H":
                    limit = table[3];
                    break;
                default:
                    throw new Error("Unknwon error correction level: " + ecl);
            }
            if (length <= limit) break;
            type++;
        }
        if (type > QRCodeLimitLength.length) throw new Error("Content too long");
        return type;
    }
    //Gets text length
    function _getUTF8Length(content) {
        var result = encodeURI(content).toString().replace(/\%[0-9a-fA-F]{2}/g, 'a');
        return result.length + (result.length != content ? 3 : 0);
    }
    //Generate QR Code matrix
    var content1 = this.options.content;
    var type1 = _getTypeNumber(content1, this.options.ecl);
    var ecl1 = _getErrorCorrectLevel(this.options.ecl);
    this.qrcode = new QRCodeModel(type1, ecl1);
    this.qrcode.addData(content1);
    this.qrcode.make();
}
/** Generates QR Code as SVG image */ QRCode.prototype.svg = function(opt) {
    var options = this.options || {};
    var modules = this.qrcode.modules;
    if (typeof opt == "undefined") opt = {
        container: options.container || "svg"
    };
    //Apply new lines and indents in SVG?
    var pretty = typeof options.pretty != "undefined" ? !!options.pretty : true;
    var indent = pretty ? '  ' : '';
    var EOL = pretty ? '\r\n' : '';
    var width = options.width;
    var height = options.height;
    var length = modules.length;
    var xsize = width / (length + 2 * options.padding);
    var ysize = height / (length + 2 * options.padding);
    //Join (union, merge) rectangles into one shape?
    var join = typeof options.join != "undefined" ? !!options.join : false;
    //Swap the X and Y modules, pull request #2
    var swap = typeof options.swap != "undefined" ? !!options.swap : false;
    //Apply <?xml...?> declaration in SVG?
    var xmlDeclaration = typeof options.xmlDeclaration != "undefined" ? !!options.xmlDeclaration : true;
    //Populate with predefined shape instead of "rect" elements, thanks to @kkocdko
    var predefined = typeof options.predefined != "undefined" ? !!options.predefined : false;
    var defs = predefined ? indent + '<defs><path id="qrmodule" d="M0 0 h' + ysize + ' v' + xsize + ' H0 z" style="fill:' + options.color + ';shape-rendering:crispEdges;" /></defs>' + EOL : '';
    //Background rectangle
    var bgrect = indent + '<rect x="0" y="0" width="' + width + '" height="' + height + '" style="fill:' + options.background + ';shape-rendering:crispEdges;"/>' + EOL;
    //Rectangles representing modules
    var modrect = '';
    var pathdata = '';
    for(var y = 0; y < length; y++)for(var x = 0; x < length; x++){
        var module = modules[x][y];
        if (module) {
            var px = x * xsize + options.padding * xsize;
            var py = y * ysize + options.padding * ysize;
            //Some users have had issues with the QR Code, thanks to @danioso for the solution
            if (swap) {
                var t = px;
                px = py;
                py = t;
            }
            if (join) {
                //Module as a part of svg path data, thanks to @danioso
                var w = xsize + px;
                var h = ysize + py;
                px = Number.isInteger(px) ? Number(px) : px.toFixed(2);
                py = Number.isInteger(py) ? Number(py) : py.toFixed(2);
                w = Number.isInteger(w) ? Number(w) : w.toFixed(2);
                h = Number.isInteger(h) ? Number(h) : h.toFixed(2);
                pathdata += 'M' + px + ',' + py + ' V' + h + ' H' + w + ' V' + py + ' H' + px + ' Z ';
            } else if (predefined) //Module as a predefined shape, thanks to @kkocdko
            modrect += indent + '<use x="' + px.toString() + '" y="' + py.toString() + '" href="#qrmodule" />' + EOL;
            else //Module as rectangle element
            modrect += indent + '<rect x="' + px.toString() + '" y="' + py.toString() + '" width="' + xsize + '" height="' + ysize + '" style="fill:' + options.color + ';shape-rendering:crispEdges;"/>' + EOL;
        }
    }
    if (join) modrect = indent + '<path x="0" y="0" style="fill:' + options.color + ';shape-rendering:crispEdges;" d="' + pathdata + '" />';
    let imgSvg = "";
    if (this.options.image !== undefined && this.options.image.svg) {
        const imgWidth = width * this.options.image.width / 100;
        const imgHeight = height * this.options.image.height / 100;
        const imgX = width / 2 - imgWidth / 2;
        const imgY = height / 2 - imgHeight / 2;
        imgSvg += `<svg x="${imgX}" y="${imgY}" width="${imgWidth}" height="${imgHeight}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`;
        imgSvg += this.options.image.svg + EOL;
        imgSvg += '</svg>';
    }
    var svg = "";
    switch(opt.container){
        //Wrapped in SVG document
        case "svg":
            if (xmlDeclaration) svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
            svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + width + '" height="' + height + '">' + EOL;
            svg += defs + bgrect + modrect;
            svg += imgSvg;
            svg += '</svg>';
            break;
        //Viewbox for responsive use in a browser, thanks to @danioso
        case "svg-viewbox":
            if (xmlDeclaration) svg += '<?xml version="1.0" standalone="yes"?>' + EOL;
            svg += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + width + ' ' + height + '">' + EOL;
            svg += defs + bgrect + modrect;
            svg += imgSvg;
            svg += '</svg>';
            break;
        //Wrapped in group element
        case "g":
            svg += '<g width="' + width + '" height="' + height + '">' + EOL;
            svg += defs + bgrect + modrect;
            svg += imgSvg;
            svg += '</g>';
            break;
        //Without a container
        default:
            svg += (defs + bgrect + modrect + imgSvg).replace(/^\s+/, ""); //Clear indents on each line
            break;
    }
    return svg;
};
module.exports = QRCode;

},{}],"et5le":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Spinner = void 0;
const preact_1 = require("preact");
const Spinner_css_1 = __importDefault(require("./Spinner-css"));
const Spinner = (props)=>{
    var _a;
    const size = (_a = props.size) !== null && _a !== void 0 ? _a : 64;
    const color = props.color || "#000";
    return (0, preact_1.h)("div", {
        class: "-walletlink-spinner"
    }, (0, preact_1.h)("style", null, Spinner_css_1.default), (0, preact_1.h)("svg", {
        viewBox: "0 0 100 100",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
            width: size,
            height: size
        }
    }, (0, preact_1.h)("circle", {
        style: {
            cx: 50,
            cy: 50,
            r: 45,
            stroke: color
        }
    })));
};
exports.Spinner = Spinner;

},{"preact":"26zcy","./Spinner-css":"7QXbJ"}],"7QXbJ":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2021 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2021 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = `.-walletlink-css-reset .-walletlink-spinner{display:inline-block}.-walletlink-css-reset .-walletlink-spinner svg{display:inline-block;animation:2s linear infinite -walletlink-spinner-svg}.-walletlink-css-reset .-walletlink-spinner svg circle{animation:1.9s ease-in-out infinite both -walletlink-spinner-circle;display:block;fill:transparent;stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -walletlink-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -walletlink-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}`;

},{}],"8boin":[function(require,module,exports) {
"use strict";
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TryExtensionLinkDialog = void 0;
const clsx_1 = __importDefault(require("clsx"));
const preact_1 = require("preact");
const hooks_1 = require("preact/hooks");
const globe_icon_svg_1 = __importDefault(require("./icons/globe-icon-svg"));
const link_icon_svg_1 = __importDefault(require("./icons/link-icon-svg"));
const lock_icon_svg_1 = __importDefault(require("./icons/lock-icon-svg"));
const QRLogo_1 = __importDefault(require("./icons/QRLogo"));
const QRCode_1 = require("./QRCode");
const Spinner_1 = require("./Spinner");
const TryExtensionLinkDialog_css_1 = __importDefault(require("./TryExtensionLinkDialog-css"));
const TryExtensionLinkDialog = (props)=>{
    const [isContainerHidden, setContainerHidden] = (0, hooks_1.useState)(!props.isOpen);
    const [isDialogHidden, setDialogHidden] = (0, hooks_1.useState)(!props.isOpen);
    (0, hooks_1.useEffect)(()=>{
        const { isOpen  } = props;
        const timers = [
            window.setTimeout(()=>{
                setDialogHidden(!isOpen);
            }, 10)
        ];
        if (isOpen) setContainerHidden(false);
        else timers.push(window.setTimeout(()=>{
            setContainerHidden(true);
        }, 360));
        return ()=>{
            timers.forEach(window.clearTimeout);
        };
    }, [
        props.isOpen
    ]);
    return (0, preact_1.h)("div", {
        class: (0, clsx_1.default)("-walletlink-extension-dialog-container", isContainerHidden && "-walletlink-extension-dialog-container-hidden")
    }, (0, preact_1.h)("style", null, TryExtensionLinkDialog_css_1.default), (0, preact_1.h)("div", {
        class: (0, clsx_1.default)("-walletlink-extension-dialog-backdrop", isDialogHidden && "-walletlink-extension-dialog-backdrop-hidden")
    }), (0, preact_1.h)("div", {
        class: "-walletlink-extension-dialog"
    }, (0, preact_1.h)("div", {
        class: (0, clsx_1.default)("-walletlink-extension-dialog-box", isDialogHidden && "-walletlink-extension-dialog-box-hidden")
    }, (0, preact_1.h)(TryExtensionBox, {
        onInstallClick: ()=>{
            window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank");
        }
    }), !props.connectDisabled ? (0, preact_1.h)(ScanQRBox, {
        darkMode: props.darkMode,
        version: props.version,
        sessionId: props.sessionId,
        sessionSecret: props.sessionSecret,
        walletLinkUrl: props.walletLinkUrl,
        isConnected: props.isConnected,
        isParentConnection: props.isParentConnection
    }) : null, props.onCancel && (0, preact_1.h)(CancelButton, {
        onClick: props.onCancel
    }))));
};
exports.TryExtensionLinkDialog = TryExtensionLinkDialog;
const TryExtensionBox = (props)=>{
    return (0, preact_1.h)("div", {
        class: "-walletlink-extension-dialog-box-top"
    }, (0, preact_1.h)("div", {
        class: "-walletlink-extension-dialog-box-top-install-region"
    }, (0, preact_1.h)("h2", null, "Try the Coinbase Wallet extension"), (0, preact_1.h)("button", {
        onClick: props.onInstallClick
    }, "Install")), (0, preact_1.h)("div", {
        class: "-walletlink-extension-dialog-box-top-info-region"
    }, (0, preact_1.h)(DescriptionItem, {
        icon: link_icon_svg_1.default,
        text: "Connect to crypto apps with one click"
    }), (0, preact_1.h)(DescriptionItem, {
        icon: lock_icon_svg_1.default,
        text: "Your private key is stored securely"
    }), (0, preact_1.h)(DescriptionItem, {
        icon: globe_icon_svg_1.default,
        text: "Works with Ethereum, Polygon, and more"
    })));
};
const ScanQRBox = (props)=>{
    const serverUrl = window.encodeURIComponent(props.walletLinkUrl);
    const sessionIdKey = props.isParentConnection ? "parent-id" : "id";
    const qrUrl = `${props.walletLinkUrl}/#/link?${sessionIdKey}=${props.sessionId}&secret=${props.sessionSecret}&server=${serverUrl}&v=1`;
    return (0, preact_1.h)("div", {
        class: "-walletlink-extension-dialog-box-bottom"
    }, (0, preact_1.h)("div", {
        class: "-walletlink-extension-dialog-box-bottom-description-region"
    }, (0, preact_1.h)("h2", null, "Or scan to connect"), (0, preact_1.h)("body", {
        class: "-walletlink-extension-dialog-box-bottom-description"
    }, "Open ", (0, preact_1.h)("a", {
        href: "https://wallet.coinbase.com/"
    }, "Coinbase Wallet"), " on your mobile phone and scan")), (0, preact_1.h)("div", {
        class: "-walletlink-extension-dialog-box-bottom-qr-region"
    }, (0, preact_1.h)("div", {
        class: "-walletlink-extension-dialog-box-bottom-qr-wrapper"
    }, (0, preact_1.h)(QRCode_1.QRCode, {
        content: qrUrl,
        width: 150,
        height: 150,
        fgColor: "#000",
        bgColor: "transparent",
        image: {
            svg: QRLogo_1.default,
            width: 34,
            height: 34
        }
    })), (0, preact_1.h)("input", {
        type: "hidden",
        value: qrUrl
    }), !props.isConnected && (0, preact_1.h)("div", {
        class: "-walletlink-extension-dialog-box-bottom-qr-connecting"
    }, (0, preact_1.h)(Spinner_1.Spinner, {
        size: 36,
        color: "#000"
    }), (0, preact_1.h)("p", null, "Connecting..."))));
};
const DescriptionItem = (props)=>{
    return (0, preact_1.h)("div", {
        class: "-walletlink-extension-dialog-box-top-description"
    }, (0, preact_1.h)("div", {
        class: "-walletlink-extension-dialog-box-top-description-icon-wrapper"
    }, (0, preact_1.h)("img", {
        src: props.icon
    })), (0, preact_1.h)("body", {
        class: "-walletlink-extension-dialog-box-top-description-text"
    }, props.text));
};
const CancelButton = (props)=>(0, preact_1.h)("button", {
        class: "-walletlink-extension-dialog-box-cancel",
        onClick: props.onClick
    }, (0, preact_1.h)("div", {
        class: "-walletlink-extension-dialog-box-cancel-x"
    }))
;

},{"clsx":"83C22","preact":"26zcy","preact/hooks":"eZN76","./icons/globe-icon-svg":"bONe7","./icons/link-icon-svg":"hPFk4","./icons/lock-icon-svg":"emBCr","./icons/QRLogo":"krjRf","./QRCode":"4FLoN","./Spinner":"et5le","./TryExtensionLinkDialog-css":"d78Bo"}],"bONe7":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2021 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2021 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTggMEMzLjU4IDAgMCAzLjU4IDAgOHMzLjU4IDggOCA4IDgtMy41OCA4LTgtMy41OC04LTgtOFptNS45MSA3aC0xLjk0Yy0uMS0xLjU3LS40Mi0zLS45MS00LjE1IDEuNDguODggMi41NSAyLjM4IDIuODUgNC4xNVpNOCAxNGMtLjQ1IDAtMS43Mi0xLjc3LTEuOTUtNWgzLjljLS4yMyAzLjIzLTEuNSA1LTEuOTUgNVpNNi4wNSA3QzYuMjggMy43NyA3LjU1IDIgOCAyYy40NSAwIDEuNzIgMS43NyAxLjk1IDVoLTMuOVpNNC45NCAyLjg1QzQuNDYgNCA0LjEzIDUuNDMgNC4wMyA3SDIuMDljLjMtMS43NyAxLjM3LTMuMjcgMi44NS00LjE1Wk0yLjA5IDloMS45NGMuMSAxLjU3LjQyIDMgLjkxIDQuMTVBNS45OTggNS45OTggMCAwIDEgMi4wOSA5Wm04Ljk3IDQuMTVjLjQ4LTEuMTUuODEtMi41OC45MS00LjE1aDEuOTRhNS45OTggNS45OTggMCAwIDEtMi44NSA0LjE1WiIgZmlsbD0iIzE2NTJGMCIvPjwvc3ZnPg==`;

},{}],"hPFk4":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2021 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2021 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjYzNSAyLjExN2EzLjg4OSAzLjg4OSAwIDAgMC01LjUyMSAwTDYuODkgNS4zMzVBMy44OTQgMy44OTQgMCAwIDAgNS44IDguNzM5Yy4wODMuNTA2LjI2OCAxLjAxMS41NTMgMS40NjYuMTUxLjI1My4zMzYuNDcyLjUzNy42OTFsLjYyMS42MjQgMS4xNDEtMS4xNDYtLjYyLS42MjRhMi4xMDUgMi4xMDUgMCAwIDEtLjQ4Ny0uNzQxIDIuMzQgMi4zNCAwIDAgMSAuNTAzLTIuNTFsMy4yMDYtMy4yMmEyLjI5MyAyLjI5MyAwIDAgMSAzLjIzOSAwYy44OS44OTQuODkgMi4zNDMgMCAzLjI1M2wtMS41MjcgMS41MzNjLjIzNC42NC4zMzUgMS4zMzEuMzAyIDIuMDA1bDIuMzgzLTIuMzkyYzEuNTEtMS41MzQgMS40OTMtNC4wMjgtLjAxNy01LjU2MVoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBkPSJNMTEuMjcxIDcuNzQ1YTMuMTMgMy4xMyAwIDAgMC0uNTU0LS42OWwtLjYyLS42MjQtMS4xNDIgMS4xNDYuNjIxLjYyM2MuMjE4LjIyLjM4Ni40ODkuNDg3Ljc1OC4zMzUuODI2LjE2NyAxLjgyLS41MDQgMi40OTRsLTMuMjA1IDMuMjE5YTIuMjkzIDIuMjkzIDAgMCAxLTMuMjQgMCAyLjMxNiAyLjMxNiAwIDAgMSAwLTMuMjUybDEuNTI4LTEuNTM0YTQuODE1IDQuODE1IDAgMCAxLS4yODUtMi4wMDVsLTIuMzgzIDIuMzkzYTMuOTI3IDMuOTI3IDAgMCAwIDAgNS41NDQgMy45MDkgMy45MDkgMCAwIDAgNS41MzggMGwzLjIwNS0zLjIxOWEzLjk1OCAzLjk1OCAwIDAgMCAxLjA5MS0zLjQwNCA0LjIxMSA0LjIxMSAwIDAgMC0uNTM3LTEuNDQ5WiIgZmlsbD0iIzE2NTJGMCIvPjwvc3ZnPg==`;

},{}],"emBCr":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2021 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2021 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgN3Y5aDE0VjdIMVptNy41IDQuMzlWMTRoLTF2LTIuNjFjLS40NC0uMTktLjc1LS42My0uNzUtMS4xNGExLjI1IDEuMjUgMCAwIDEgMi41IDBjMCAuNTEtLjMxLjk1LS43NSAxLjE0Wk01LjY3IDZWNC4zM0M1LjY3IDMuMDUgNi43MSAyIDggMnMyLjMzIDEuMDUgMi4zMyAyLjMzVjZoMlY0LjMzQzEyLjMzIDEuOTQgMTAuMzkgMCA4IDBTMy42NyAxLjk0IDMuNjcgNC4zM1Y2aDJaIiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+`;

},{}],"krjRf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="50" fill="white"/>
<circle cx="49.9996" cy="49.9996" r="43.6363" fill="#1B53E4"/>
<circle cx="49.9996" cy="49.9996" r="43.6363" stroke="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.3379 49.9484C19.3379 66.8508 33.04 80.553 49.9425 80.553C66.8449 80.553 80.5471 66.8508 80.5471 49.9484C80.5471 33.0459 66.8449 19.3438 49.9425 19.3438C33.04 19.3438 19.3379 33.0459 19.3379 49.9484ZM44.0817 40.0799C41.8725 40.0799 40.0817 41.8708 40.0817 44.0799V55.8029C40.0817 58.012 41.8725 59.8029 44.0817 59.8029H55.8046C58.0138 59.8029 59.8046 58.012 59.8046 55.8029V44.0799C59.8046 41.8708 58.0138 40.0799 55.8046 40.0799H44.0817Z" fill="white"/>
</svg>

`;

},{}],"d78Bo":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2021 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2021 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = `.-walletlink-css-reset .-walletlink-extension-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-walletlink-css-reset .-walletlink-extension-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0,0,0,.5);transition:opacity .25s}.-walletlink-css-reset .-walletlink-extension-dialog-backdrop-hidden{opacity:0}.-walletlink-css-reset .-walletlink-extension-dialog-box{display:flex;position:relative;max-width:500px;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-walletlink-css-reset .-walletlink-extension-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-walletlink-css-reset .-walletlink-extension-dialog-box-top{display:flex;flex-direction:row;background-color:#fff;border-radius:8px;overflow:hidden;min-height:300px}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-install-region{display:flex;flex-basis:50%;flex-direction:column;justify-content:center;padding:32px}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-install-region button{display:block;border-radius:8px;background-color:#1652f0;color:#fff;width:90%;min-width:fit-content;height:44px;margin-top:16px;font-size:16px;padding-left:16px;padding-right:16px;cursor:pointer;font-weight:500;text-align:center}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-info-region{display:flex;flex-basis:50%;flex-direction:column;justify-content:center;background-color:#fafbfc}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-description{display:flex;flex-direction:row;align-items:center;padding-top:14px;padding-bottom:14px;padding-left:24px;padding-right:32px}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-description-icon-wrapper{display:block;position:relative;width:40px;height:40px;flex-shrink:0;flex-grow:0;border-radius:20px;background-color:#fff;box-shadow:0px 0px 8px rgba(0,0,0,.04),0px 16px 24px rgba(0,0,0,.06)}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-description-icon-wrapper img{position:absolute;top:0;bottom:0;left:0;right:0;margin:auto}.-walletlink-css-reset .-walletlink-extension-dialog-box-top-description-text{margin-left:16px;flex-grow:1;font-size:13px;line-height:19px;color:#000;align-self:center}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom{display:flex;flex-direction:row;overflow:hidden;border-radius:8px;background-color:#fff;margin-top:8px}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-description-region{display:flex;flex-direction:column;justify-content:center;padding:32px;flex-grow:1}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-description{font-size:13px;line-height:19px;margin-top:12px;color:#aaa}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-description a{font-size:inherit;line-height:inherit;color:#1652f0;cursor:pointer}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-qr-region{position:relative;flex-shrink:0;display:flex;flex-direction:column;justify-content:center;padding-left:24px;padding-right:24px;padding-top:16px;padding-bottom:16px}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-qr-wrapper{position:relative;display:block;padding:8px;border-radius:8px;box-shadow:0px 4px 12px rgba(0,0,0,.1)}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-qr-wrapper img{display:block}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:rgba(255,255,255,.95)}.-walletlink-css-reset .-walletlink-extension-dialog-box-bottom-qr-connecting>p{font-size:12px;font-weight:bold;color:#000;margin-top:16px}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel{position:absolute;-webkit-appearance:none;display:flex;align-items:center;justify-content:center;top:16px;right:16px;width:24px;height:24px;border-radius:12px;background-color:#fafbfc;cursor:pointer}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel-x{position:relative;display:block;cursor:pointer}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel-x::before,.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel-x::after{content:"";position:absolute;display:block;top:-1px;left:-7px;width:14px;height:1px;background-color:#000;transition:background-color .2s}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel-x::before{transform:rotate(45deg)}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel-x::after{transform:rotate(135deg)}.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-a,.-walletlink-css-reset .-walletlink-extension-dialog-box-cancel:hover .-walletlink-link-dialog-box-cancel-x-b{background-color:#000}.-walletlink-css-reset .-walletlink-extension-dialog-container{display:block}.-walletlink-css-reset .-walletlink-extension-dialog-container-hidden{display:none}.-walletlink-css-reset .-walletlink-extension-dialog h2{display:block;text-align:left;font-size:22px;font-weight:600;line-height:28px;color:#000}`;

},{}],"l3wXR":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Snackbar = void 0;
const clsx_1 = __importDefault(require("clsx"));
const preact_1 = require("preact");
const hooks_1 = require("preact/hooks");
const Snackbar_css_1 = __importDefault(require("./Snackbar-css"));
const cblogo = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+`;
const gearIcon = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=`;
class Snackbar {
    constructor(options){
        this.items = new Map();
        this.nextItemKey = 0;
        this.root = null;
        this.darkMode = options.darkMode;
    }
    attach(el) {
        this.root = document.createElement("div");
        this.root.className = "-walletlink-snackbar-root";
        el.appendChild(this.root);
        this.render();
    }
    presentItem(itemProps) {
        const key = this.nextItemKey++;
        this.items.set(key, itemProps);
        this.render();
        return ()=>{
            this.items.delete(key);
            this.render();
        };
    }
    clear() {
        this.items.clear();
        this.render();
    }
    render() {
        if (!this.root) return;
        (0, preact_1.render)((0, preact_1.h)("div", null, (0, preact_1.h)(SnackbarContainer, {
            darkMode: this.darkMode
        }, Array.from(this.items.entries()).map(([key, itemProps])=>(0, preact_1.h)(SnackbarInstance, Object.assign({}, itemProps, {
                key: key
            }))
        ))), this.root);
    }
}
exports.Snackbar = Snackbar;
const SnackbarContainer = (props)=>(0, preact_1.h)("div", {
        class: (0, clsx_1.default)("-walletlink-snackbar-container")
    }, (0, preact_1.h)("style", null, Snackbar_css_1.default), (0, preact_1.h)("div", {
        class: "-walletlink-snackbar"
    }, props.children))
;
const SnackbarInstance = ({ message , menuItems  })=>{
    const [hidden, setHidden] = (0, hooks_1.useState)(true);
    const [expanded, setExpanded] = (0, hooks_1.useState)(false);
    (0, hooks_1.useEffect)(()=>{
        const timers = [
            window.setTimeout(()=>{
                setHidden(false);
            }, 1),
            window.setTimeout(()=>{
                setExpanded(true);
            }, 10000)
        ];
        return ()=>{
            timers.forEach(window.clearTimeout);
        };
    });
    const toggleExpanded = ()=>{
        setExpanded(!expanded);
    };
    return (0, preact_1.h)("div", {
        class: (0, clsx_1.default)("-walletlink-snackbar-instance", hidden && "-walletlink-snackbar-instance-hidden", expanded && "-walletlink-snackbar-instance-expanded")
    }, (0, preact_1.h)("div", {
        class: "-walletlink-snackbar-instance-header",
        onClick: toggleExpanded
    }, (0, preact_1.h)("img", {
        src: cblogo,
        class: "-walletlink-snackbar-instance-header-cblogo"
    }), (0, preact_1.h)("div", {
        class: "-walletlink-snackbar-instance-header-message"
    }, message), (0, preact_1.h)("div", {
        class: "-gear-container"
    }, !expanded && (0, preact_1.h)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, (0, preact_1.h)("circle", {
        cx: "12",
        cy: "12",
        r: "12",
        fill: "#F5F7F8"
    })), (0, preact_1.h)("img", {
        src: gearIcon,
        class: "-gear-icon",
        title: "Expand"
    }))), menuItems && menuItems.length > 0 && (0, preact_1.h)("div", {
        class: "-walletlink-snackbar-instance-menu"
    }, menuItems.map((action, i)=>(0, preact_1.h)("div", {
            class: (0, clsx_1.default)("-walletlink-snackbar-instance-menu-item", action.isRed && "-walletlink-snackbar-instance-menu-item-is-red"),
            onClick: action.onClick,
            key: i
        }, (0, preact_1.h)("svg", {
            width: action.svgWidth,
            height: action.svgHeight,
            viewBox: "0 0 10 11",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, (0, preact_1.h)("path", {
            "fill-rule": action.defaultFillRule,
            "clip-rule": action.defaultClipRule,
            d: action.path,
            fill: "#AAAAAA"
        })), (0, preact_1.h)("span", {
            class: (0, clsx_1.default)("-walletlink-snackbar-instance-menu-item-info", action.isRed && "-walletlink-snackbar-instance-menu-item-info-is-red")
        }, action.info))
    )));
};

},{"clsx":"83C22","preact":"26zcy","preact/hooks":"eZN76","./Snackbar-css":"bzAg6"}],"bzAg6":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2021 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2021 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = `.-walletlink-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-walletlink-css-reset .-gear-container *{user-select:none}.-walletlink-css-reset .-gear-container svg{opacity:0;position:absolute}.-walletlink-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-walletlink-css-reset .-walletlink-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-walletlink-css-reset .-walletlink-snackbar *{user-select:none}.-walletlink-css-reset .-walletlink-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-walletlink-css-reset .-walletlink-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-walletlink-css-reset .-walletlink-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-walletlink-css-reset .-walletlink-snackbar-instance-header *{cursor:pointer}.-walletlink-css-reset .-walletlink-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-walletlink-css-reset .-walletlink-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-walletlink-css-reset .-walletlink-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-walletlink-css-reset .-walletlink-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-walletlink-css-reset .-walletlink-snackbar-instance-expanded .-walletlink-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}`;

},{}],"e6rRl":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.injectCssReset = void 0;
const cssReset_css_1 = __importDefault(require("./cssReset-css"));
function injectCssReset() {
    const styleEl = document.createElement("style");
    styleEl.type = "text/css";
    styleEl.appendChild(document.createTextNode(cssReset_css_1.default));
    document.documentElement.appendChild(styleEl);
}
exports.injectCssReset = injectCssReset;

},{"./cssReset-css":"8kJR0"}],"8kJR0":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2021 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2021 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = `@namespace svg "http://www.w3.org/2000/svg";.-walletlink-css-reset,.-walletlink-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:transparent;background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;bottom:auto;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:block;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;left:auto;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";right:auto;tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;width:auto;word-spacing:normal;z-index:auto}.-walletlink-css-reset *{box-sizing:border-box;display:initial;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-walletlink-css-reset [class*=container]{margin:0;padding:0}.-walletlink-css-reset style{display:none}`;

},{}],"2f0kE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WalletLinkUI = void 0;
class WalletLinkUI {
    constructor(_){}
    /**
     * We want to disable showing the qr code for in-page walletlink if the dapp hasn't provided a json rpc url
     */ setConnectDisabled(_) {}
}
exports.WalletLinkUI = WalletLinkUI;

},{}],"evBIQ":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
});
var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = this && this.__importStar || function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = this && this.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WalletLinkRelay = void 0;
const bind_decorator_1 = __importDefault(require("bind-decorator"));
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const WalletLinkAnalytics_1 = require("../connection/WalletLinkAnalytics");
const WalletLinkConnection_1 = require("../connection/WalletLinkConnection");
const init_1 = require("../init");
const util_1 = require("../util");
const aes256gcm = __importStar(require("./aes256gcm"));
const Session_1 = require("./Session");
const WalletLinkRelayAbstract_1 = require("./WalletLinkRelayAbstract");
const Web3Method_1 = require("./Web3Method");
const Web3RequestCanceledMessage_1 = require("./Web3RequestCanceledMessage");
const Web3RequestMessage_1 = require("./Web3RequestMessage");
const Web3Response_1 = require("./Web3Response");
const Web3ResponseMessage_1 = require("./Web3ResponseMessage");
class WalletLinkRelay {
    constructor(options){
        this.accountsCallback = null;
        this.chainCallback = null;
        this.appName = "";
        this.appLogoUrl = null;
        this.subscriptions = new rxjs_1.Subscription();
        this.walletLinkUrl = options.walletLinkUrl;
        this.storage = options.storage;
        this._session = Session_1.Session.load(options.storage) || new Session_1.Session(options.storage).save();
        this.relayEventManager = options.relayEventManager;
        this.walletLinkAnalytics = options.walletLinkAnalytics ? options.walletLinkAnalytics : new WalletLinkAnalytics_1.WalletLinkAnalytics();
        this.connection = new WalletLinkConnection_1.WalletLinkConnection(this._session.id, this._session.key, this.walletLinkUrl, this.walletLinkAnalytics);
        this.subscriptions.add(this.connection.incomingEvent$.pipe((0, operators_1.filter)((m)=>m.event === "Web3Response"
        )).subscribe({
            next: this.handleIncomingEvent
        }));
        this.subscriptions.add(this.connection.linked$.pipe((0, operators_1.skip)(1), (0, operators_1.tap)((linked)=>{
            var _a;
            this.isLinked = linked;
            const cachedAddresses = this.storage.getItem(WalletLinkRelayAbstract_1.LOCAL_STORAGE_ADDRESSES_KEY);
            if (cachedAddresses) {
                const addresses = cachedAddresses.split(" ");
                if (addresses[0] !== "" && !linked) {
                    const sessionIdHash = Session_1.Session.hash(this._session.id);
                    (_a = this.walletLinkAnalytics) === null || _a === void 0 || _a.sendEvent(init_1.EVENTS.UNLINKED_ERROR_STATE, {
                        sessionIdHash
                    });
                }
            }
        })).subscribe());
        // if session is marked destroyed, reset and reload
        this.subscriptions.add(this.connection.sessionConfig$.pipe((0, operators_1.filter)((c)=>!!c.metadata && c.metadata.__destroyed === "1"
        )).subscribe(()=>{
            var _a;
            const alreadyDestroyed = this.connection.isDestroyed;
            (_a = this.walletLinkAnalytics) === null || _a === void 0 || _a.sendEvent(init_1.EVENTS.METADATA_DESTROYED, {
                alreadyDestroyed,
                sessionIdHash: Session_1.Session.hash(this._session.id)
            });
            return this.resetAndReload();
        }));
        this.subscriptions.add(this.connection.sessionConfig$.pipe((0, operators_1.filter)((c)=>c.metadata && c.metadata.WalletUsername !== undefined
        )).pipe((0, operators_1.mergeMap)((c)=>aes256gcm.decrypt(c.metadata.WalletUsername, this._session.secret)
        )).subscribe({
            next: (walletUsername)=>{
                this.storage.setItem(WalletLinkRelayAbstract_1.WALLET_USER_NAME_KEY, walletUsername);
            },
            error: ()=>{
                var _a;
                (_a = this.walletLinkAnalytics) === null || _a === void 0 || _a.sendEvent(init_1.EVENTS.GENERAL_ERROR, {
                    message: 'Had error decrypting',
                    value: 'username'
                });
            }
        }));
        this.subscriptions.add(this.connection.sessionConfig$.pipe((0, operators_1.filter)((c)=>c.metadata && c.metadata.ChainId !== undefined && c.metadata.JsonRpcUrl !== undefined
        )).pipe((0, operators_1.mergeMap)((c)=>(0, rxjs_1.zip)(aes256gcm.decrypt(c.metadata.ChainId, this._session.secret), aes256gcm.decrypt(c.metadata.JsonRpcUrl, this._session.secret))
        )).pipe((0, operators_1.distinctUntilChanged)()).subscribe({
            next: ([chainId, jsonRpcUrl])=>{
                if (this.chainCallback) this.chainCallback(chainId, jsonRpcUrl);
            },
            error: ()=>{
                var _a;
                (_a = this.walletLinkAnalytics) === null || _a === void 0 || _a.sendEvent(init_1.EVENTS.GENERAL_ERROR, {
                    message: 'Had error decrypting',
                    value: 'chainId|jsonRpcUrl'
                });
            }
        }));
        this.subscriptions.add(this.connection.sessionConfig$.pipe((0, operators_1.filter)((c)=>c.metadata && c.metadata.EthereumAddress !== undefined
        )).pipe((0, operators_1.mergeMap)((c)=>aes256gcm.decrypt(c.metadata.EthereumAddress, this._session.secret)
        )).subscribe({
            next: (selectedAddress)=>{
                if (this.accountsCallback) this.accountsCallback([
                    selectedAddress
                ]);
                if (WalletLinkRelay.accountRequestCallbackIds.size > 0) {
                    // We get the ethereum address from the metadata.  If for whatever
                    // reason we don't get a response via an explicit web3 message
                    // we can still fulfill the eip1102 request.
                    Array.from(WalletLinkRelay.accountRequestCallbackIds.values()).forEach((id)=>{
                        const message = (0, Web3ResponseMessage_1.Web3ResponseMessage)({
                            id,
                            response: (0, Web3Response_1.RequestEthereumAccountsResponse)([
                                selectedAddress
                            ])
                        });
                        this.invokeCallback(Object.assign(Object.assign({}, message), {
                            id
                        }));
                    });
                    WalletLinkRelay.accountRequestCallbackIds.clear();
                }
            },
            error: ()=>{
                var _a;
                (_a = this.walletLinkAnalytics) === null || _a === void 0 || _a.sendEvent(init_1.EVENTS.GENERAL_ERROR, {
                    message: 'Had error decrypting',
                    value: 'selectedAddress'
                });
            }
        }));
        this.ui = options.walletLinkUIConstructor({
            walletLinkUrl: options.walletLinkUrl,
            version: options.version,
            darkMode: options.darkMode,
            session: this._session,
            connected$: this.connection.connected$
        });
        this.connection.connect();
    }
    attachUI() {
        this.ui.attach();
    }
    resetAndReload() {
        this.connection.setSessionMetadata("__destroyed", "1").pipe((0, operators_1.timeout)(1000), (0, operators_1.catchError)((_)=>(0, rxjs_1.of)(null)
        )).subscribe((_)=>{
            var _a, _b;
            try {
                this.subscriptions.unsubscribe();
            } catch (err) {
                (_a = this.walletLinkAnalytics) === null || _a === void 0 || _a.sendEvent(init_1.EVENTS.GENERAL_ERROR, {
                    message: "Had error unsubscribing"
                });
            }
            (_b = this.walletLinkAnalytics) === null || _b === void 0 || _b.sendEvent(init_1.EVENTS.SESSION_STATE_CHANGE, {
                method: "relay::resetAndReload",
                sessionMetadataChange: "__destroyed, 1",
                sessionIdHash: Session_1.Session.hash(this._session.id)
            });
            this.connection.destroy();
            this.storage.clear();
            this.ui.reloadUI();
        }, (err)=>{
            var _a;
            (_a = this.walletLinkAnalytics) === null || _a === void 0 || _a.sendEvent(init_1.EVENTS.FAILURE, {
                method: "relay::resetAndReload",
                message: `faled to reset and relod with ${err}`,
                sessionIdHash: Session_1.Session.hash(this._session.id)
            });
        });
    }
    setAppInfo(appName, appLogoUrl) {
        this.appName = appName;
        this.appLogoUrl = appLogoUrl;
    }
    getStorageItem(key) {
        return this.storage.getItem(key);
    }
    get session() {
        return this._session;
    }
    setStorageItem(key, value) {
        this.storage.setItem(key, value);
    }
    requestEthereumAccounts() {
        return this.sendRequest({
            method: Web3Method_1.Web3Method.requestEthereumAccounts,
            params: {
                appName: this.appName,
                appLogoUrl: this.appLogoUrl || null
            }
        });
    }
    signEthereumMessage(message, address, addPrefix, typedDataJson) {
        return this.sendRequest({
            method: Web3Method_1.Web3Method.signEthereumMessage,
            params: {
                message: (0, util_1.hexStringFromBuffer)(message, true),
                address,
                addPrefix,
                typedDataJson: typedDataJson || null
            }
        });
    }
    ethereumAddressFromSignedMessage(message, signature, addPrefix) {
        return this.sendRequest({
            method: Web3Method_1.Web3Method.ethereumAddressFromSignedMessage,
            params: {
                message: (0, util_1.hexStringFromBuffer)(message, true),
                signature: (0, util_1.hexStringFromBuffer)(signature, true),
                addPrefix
            }
        });
    }
    signEthereumTransaction(params) {
        return this.sendRequest({
            method: Web3Method_1.Web3Method.signEthereumTransaction,
            params: {
                fromAddress: params.fromAddress,
                toAddress: params.toAddress,
                weiValue: (0, util_1.bigIntStringFromBN)(params.weiValue),
                data: (0, util_1.hexStringFromBuffer)(params.data, true),
                nonce: params.nonce,
                gasPriceInWei: params.gasPriceInWei ? (0, util_1.bigIntStringFromBN)(params.gasPriceInWei) : null,
                maxFeePerGas: params.gasPriceInWei ? (0, util_1.bigIntStringFromBN)(params.gasPriceInWei) : null,
                maxPriorityFeePerGas: params.gasPriceInWei ? (0, util_1.bigIntStringFromBN)(params.gasPriceInWei) : null,
                gasLimit: params.gasLimit ? (0, util_1.bigIntStringFromBN)(params.gasLimit) : null,
                chainId: params.chainId,
                shouldSubmit: false
            }
        });
    }
    signAndSubmitEthereumTransaction(params) {
        return this.sendRequest({
            method: Web3Method_1.Web3Method.signEthereumTransaction,
            params: {
                fromAddress: params.fromAddress,
                toAddress: params.toAddress,
                weiValue: (0, util_1.bigIntStringFromBN)(params.weiValue),
                data: (0, util_1.hexStringFromBuffer)(params.data, true),
                nonce: params.nonce,
                gasPriceInWei: params.gasPriceInWei ? (0, util_1.bigIntStringFromBN)(params.gasPriceInWei) : null,
                maxFeePerGas: params.maxFeePerGas ? (0, util_1.bigIntStringFromBN)(params.maxFeePerGas) : null,
                maxPriorityFeePerGas: params.maxPriorityFeePerGas ? (0, util_1.bigIntStringFromBN)(params.maxPriorityFeePerGas) : null,
                gasLimit: params.gasLimit ? (0, util_1.bigIntStringFromBN)(params.gasLimit) : null,
                chainId: params.chainId,
                shouldSubmit: true
            }
        });
    }
    submitEthereumTransaction(signedTransaction, chainId) {
        return this.sendRequest({
            method: Web3Method_1.Web3Method.submitEthereumTransaction,
            params: {
                signedTransaction: (0, util_1.hexStringFromBuffer)(signedTransaction, true),
                chainId
            }
        });
    }
    scanQRCode(regExp) {
        return this.sendRequest({
            method: Web3Method_1.Web3Method.scanQRCode,
            params: {
                regExp
            }
        });
    }
    arbitraryRequest(data) {
        return this.sendRequest({
            method: Web3Method_1.Web3Method.arbitrary,
            params: {
                data
            }
        });
    }
    addEthereumChain(chainId, blockExplorerUrls, chainName, iconUrls, nativeCurrency) {
        return this.sendRequest({
            method: Web3Method_1.Web3Method.addEthereumChain,
            params: {
                chainId,
                blockExplorerUrls,
                chainName,
                iconUrls,
                nativeCurrency
            }
        });
    }
    sendRequest(request) {
        let hideSnackbarItem = null;
        const id = (0, util_1.randomBytesHex)(8);
        const cancel1 = ()=>{
            this.publishWeb3RequestCanceledEvent(id);
            this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                id,
                response: (0, Web3Response_1.ErrorResponse)(request.method, "User rejected request")
            }));
            hideSnackbarItem === null || hideSnackbarItem === void 0 || hideSnackbarItem();
        };
        const promise = new Promise((resolve, reject)=>{
            var _a;
            const isRequestAccounts = request.method === Web3Method_1.Web3Method.requestEthereumAccounts;
            const isSwitchEthereumChain = request.method === Web3Method_1.Web3Method.switchEthereumChain;
            if (isRequestAccounts) {
                const userAgent = ((_a = window === null || window === void 0 ? void 0 : window.navigator) === null || _a === void 0 ? void 0 : _a.userAgent) || null;
                if (userAgent && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
                    window.location.href = `https://go.cb-w.com/xoXnYwQimhb?cb_url=${window.location.href}`;
                    return;
                }
                if (this.ui.inlineAccountsResponse()) {
                    const onAccounts = (accounts)=>{
                        this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                            id,
                            response: (0, Web3Response_1.RequestEthereumAccountsResponse)(accounts)
                        }));
                    };
                    this.ui.requestEthereumAccounts({
                        onCancel: cancel1,
                        onAccounts
                    });
                } else this.ui.requestEthereumAccounts({
                    onCancel: cancel1
                });
                WalletLinkRelay.accountRequestCallbackIds.add(id);
            } else if (request.method === Web3Method_1.Web3Method.switchEthereumChain || request.method === Web3Method_1.Web3Method.addEthereumChain) {
                const cancel = ()=>{
                    this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                        id,
                        response: (0, Web3Response_1.SwitchEthereumChainResponse)(false)
                    }));
                };
                const approve = ()=>{
                    this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                        id,
                        response: (0, Web3Response_1.SwitchEthereumChainResponse)(true)
                    }));
                };
                this.ui.switchEthereumChain({
                    onCancel: cancel,
                    onApprove: approve,
                    chainId: request.params.chainId
                });
                if (!this.ui.inlineSwitchEthereumChain()) hideSnackbarItem = this.ui.showConnecting({
                    onCancel: cancel,
                    onResetConnection: this.resetAndReload
                });
            } else if (this.ui.isStandalone()) {
                const onCancel = ()=>{
                    this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                        id,
                        response: (0, Web3Response_1.ErrorResponse)(request.method, "User rejected request")
                    }));
                };
                const onSuccess = (response)=>{
                    this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                        id,
                        response: response
                    }));
                };
                switch(request.method){
                    case Web3Method_1.Web3Method.signEthereumMessage:
                        this.ui.signEthereumMessage({
                            request: request,
                            onSuccess,
                            onCancel
                        });
                        break;
                    case Web3Method_1.Web3Method.signEthereumTransaction:
                        this.ui.signEthereumTransaction({
                            request: request,
                            onSuccess,
                            onCancel
                        });
                        break;
                    case Web3Method_1.Web3Method.submitEthereumTransaction:
                        this.ui.submitEthereumTransaction({
                            request: request,
                            onSuccess,
                            onCancel
                        });
                        break;
                    case Web3Method_1.Web3Method.ethereumAddressFromSignedMessage:
                        this.ui.ethereumAddressFromSignedMessage({
                            request: request,
                            onSuccess
                        });
                        break;
                    default:
                        onCancel();
                        break;
                }
            } else hideSnackbarItem = this.ui.showConnecting({
                onCancel: cancel1,
                onResetConnection: this.resetAndReload
            });
            this.relayEventManager.callbacks.set(id, (response)=>{
                this.ui.hideRequestEthereumAccounts();
                hideSnackbarItem === null || hideSnackbarItem === void 0 || hideSnackbarItem();
                if (response.errorMessage) return reject(new Error(response.errorMessage));
                resolve(response);
            });
            if (isRequestAccounts && this.ui.inlineAccountsResponse() || isSwitchEthereumChain && this.ui.inlineSwitchEthereumChain() || this.ui.isStandalone()) return;
            this.publishWeb3RequestEvent(id, request);
        });
        return {
            promise,
            cancel: cancel1
        };
    }
    setConnectDisabled(disabled) {
        this.ui.setConnectDisabled(disabled);
    }
    setAccountsCallback(accountsCallback) {
        this.accountsCallback = accountsCallback;
    }
    setChainCallback(chainCallback) {
        this.chainCallback = chainCallback;
    }
    publishWeb3RequestEvent(id, request) {
        const message = (0, Web3RequestMessage_1.Web3RequestMessage)({
            id,
            request
        });
        this.subscriptions.add(this.publishEvent("Web3Request", message, true).subscribe({
            error: (err)=>{
                this.handleWeb3ResponseMessage((0, Web3ResponseMessage_1.Web3ResponseMessage)({
                    id: message.id,
                    response: {
                        method: message.request.method,
                        errorMessage: err.message
                    }
                }));
            }
        }));
    }
    publishWeb3RequestCanceledEvent(id) {
        const message = (0, Web3RequestCanceledMessage_1.Web3RequestCanceledMessage)(id);
        this.subscriptions.add(this.publishEvent("Web3RequestCanceled", message, false).subscribe());
    }
    publishEvent(event, message, callWebhook) {
        const secret = this.session.secret;
        return new rxjs_1.Observable((subscriber)=>{
            aes256gcm.encrypt(JSON.stringify(Object.assign(Object.assign({}, message), {
                origin: location.origin
            })), secret).then((encrypted)=>{
                subscriber.next(encrypted);
                subscriber.complete();
            });
        }).pipe((0, operators_1.mergeMap)((encrypted)=>{
            return this.connection.publishEvent(event, encrypted, callWebhook);
        }));
    }
    handleIncomingEvent(event) {
        try {
            this.subscriptions.add(aes256gcm.decrypt(event.data, this.session.secret).pipe((0, operators_1.map)((c)=>JSON.parse(c)
            )).subscribe({
                next: (json)=>{
                    const message = (0, Web3ResponseMessage_1.isWeb3ResponseMessage)(json) ? json : null;
                    if (!message) return;
                    this.handleWeb3ResponseMessage(message);
                },
                error: ()=>{
                    var _a;
                    (_a = this.walletLinkAnalytics) === null || _a === void 0 || _a.sendEvent(init_1.EVENTS.GENERAL_ERROR, {
                        message: 'Had error decrypting',
                        value: 'incomingEvent'
                    });
                }
            }));
        } catch (_a) {
            return;
        }
    }
    handleWeb3ResponseMessage(message) {
        const { response  } = message;
        if ((0, Web3Response_1.isRequestEthereumAccountsResponse)(response)) {
            Array.from(WalletLinkRelay.accountRequestCallbackIds.values()).forEach((id)=>this.invokeCallback(Object.assign(Object.assign({}, message), {
                    id
                }))
            );
            WalletLinkRelay.accountRequestCallbackIds.clear();
            return;
        }
        this.invokeCallback(message);
    }
    invokeCallback(message) {
        const callback = this.relayEventManager.callbacks.get(message.id);
        if (callback) {
            callback(message.response);
            this.relayEventManager.callbacks.delete(message.id);
        }
    }
    switchEthereumChain(chainId) {
        return this.sendRequest({
            method: Web3Method_1.Web3Method.switchEthereumChain,
            params: {
                chainId
            }
        });
    }
}
WalletLinkRelay.accountRequestCallbackIds = new Set();
__decorate([
    bind_decorator_1.default
], WalletLinkRelay.prototype, "resetAndReload", null);
__decorate([
    bind_decorator_1.default
], WalletLinkRelay.prototype, "handleIncomingEvent", null);
exports.WalletLinkRelay = WalletLinkRelay;

},{"bind-decorator":"bqllf","rxjs":"eNCF7","rxjs/operators":"hZ5Xz","../connection/WalletLinkAnalytics":"bZTVr","../connection/WalletLinkConnection":"5mcGE","../init":"dXFr7","../util":"8WKyV","./aes256gcm":"7VUGc","./Session":"bbUb9","./WalletLinkRelayAbstract":"e7kH3","./Web3Method":"299bG","./Web3RequestCanceledMessage":"inXPb","./Web3RequestMessage":"1Md5M","./Web3Response":"e9h8D","./Web3ResponseMessage":"gvX5m"}],"bqllf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var constants;
(function(constants1) {
    constants1.typeOfFunction = 'function';
    constants1.boolTrue = true;
})(constants || (constants = {}));
function bind(target, propertyKey, descriptor) {
    if (!descriptor || typeof descriptor.value !== constants.typeOfFunction) throw new TypeError("Only methods can be decorated with @bind. <" + propertyKey + "> is not a method!");
    return {
        configurable: constants.boolTrue,
        get: function() {
            var bound = descriptor.value.bind(this);
            // Credits to https://github.com/andreypopp/autobind-decorator for memoizing the result of bind against a symbol on the instance.
            Object.defineProperty(this, propertyKey, {
                value: bound,
                configurable: constants.boolTrue,
                writable: constants.boolTrue
            });
            return bound;
        }
    };
}
exports.bind = bind;
exports.default = bind;

},{}],"5mcGE":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WalletLinkConnection = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const init_1 = require("../init");
const Session_1 = require("../relay/Session");
const types_1 = require("../types");
const ClientMessage_1 = require("./ClientMessage");
const RxWebSocket_1 = require("./RxWebSocket");
const ServerMessage_1 = require("./ServerMessage");
const HEARTBEAT_INTERVAL = 10000;
const REQUEST_TIMEOUT = 60000;
/**
 * WalletLink Connection
 */ class WalletLinkConnection {
    /**
     * Constructor
     * @param sessionId Session ID
     * @param sessionKey Session Key
     * @param serverUrl Walletlinkd RPC URL
     * @param [WebSocketClass] Custom WebSocket implementation
     */ constructor(sessionId, sessionKey, serverUrl, walletLinkAnalytics, WebSocketClass = WebSocket){
        this.sessionId = sessionId;
        this.sessionKey = sessionKey;
        this.subscriptions = new rxjs_1.Subscription();
        this.destroyed = false;
        this.lastHeartbeatResponse = 0;
        this.nextReqId = (0, types_1.IntNumber)(1);
        this.connectedSubject = new rxjs_1.BehaviorSubject(false);
        this.linkedSubject = new rxjs_1.BehaviorSubject(false);
        this.sessionConfigSubject = new rxjs_1.ReplaySubject(1);
        const ws = new RxWebSocket_1.RxWebSocket(serverUrl + "/rpc", WebSocketClass);
        this.ws = ws;
        this.walletLinkAnalytics = walletLinkAnalytics;
        // attempt to reconnect every 5 seconds when disconnected
        this.subscriptions.add(ws.connectionState$.pipe((0, operators_1.tap)((state)=>this.walletLinkAnalytics.sendEvent(init_1.EVENTS.CONNECTED_STATE_CHANGE, {
                state,
                sessionIdHash: Session_1.Session.hash(sessionId)
            })
        ), // ignore initial DISCONNECTED state
        (0, operators_1.skip)(1), // if DISCONNECTED and not destroyed
        (0, operators_1.filter)((cs)=>cs === RxWebSocket_1.ConnectionState.DISCONNECTED && !this.destroyed
        ), // wait 5 seconds
        (0, operators_1.delay)(5000), // check whether it's destroyed again
        (0, operators_1.filter)((_)=>!this.destroyed
        ), // reconnect
        (0, operators_1.flatMap)((_)=>ws.connect()
        ), (0, operators_1.retry)()).subscribe());
        // perform authentication upon connection
        this.subscriptions.add(ws.connectionState$.pipe(// ignore initial DISCONNECTED and CONNECTING states
        (0, operators_1.skip)(2), (0, operators_1.switchMap)((cs)=>(0, rxjs_1.iif)(()=>cs === RxWebSocket_1.ConnectionState.CONNECTED
            , // if CONNECTED, authenticate, and then check link status
            this.authenticate().pipe((0, operators_1.tap)((_)=>this.sendIsLinked()
            ), (0, operators_1.tap)((_)=>this.sendGetSessionConfig()
            ), (0, operators_1.map)((_)=>true
            )), // if not CONNECTED, emit false immediately
            (0, rxjs_1.of)(false))
        ), (0, operators_1.distinctUntilChanged)(), (0, operators_1.catchError)((_)=>(0, rxjs_1.of)(false)
        )).subscribe((connected)=>this.connectedSubject.next(connected)
        ));
        // send heartbeat every n seconds while connected
        this.subscriptions.add(ws.connectionState$.pipe(// ignore initial DISCONNECTED state
        (0, operators_1.skip)(1), (0, operators_1.switchMap)((cs)=>(0, rxjs_1.iif)(()=>cs === RxWebSocket_1.ConnectionState.CONNECTED
            , // if CONNECTED, start the heartbeat timer
            (0, rxjs_1.timer)(0, HEARTBEAT_INTERVAL))
        )).subscribe((i)=>// first timer event updates lastHeartbeat timestamp
            // subsequent calls send heartbeat message
            i === 0 ? this.updateLastHeartbeat() : this.heartbeat()
        ));
        // handle server's heartbeat responses
        this.subscriptions.add(ws.incomingData$.pipe((0, operators_1.filter)((m)=>m === "h"
        )).subscribe((_)=>this.updateLastHeartbeat()
        ));
        // handle link status updates
        this.subscriptions.add(ws.incomingJSONData$.pipe((0, operators_1.filter)((m)=>[
                "IsLinkedOK",
                "Linked"
            ].includes(m.type)
        )).subscribe((m)=>{
            const msg = m;
            this.walletLinkAnalytics.sendEvent(init_1.EVENTS.LINKED, {
                sessionIdHash: Session_1.Session.hash(sessionId),
                linked: msg.linked,
                type: m.type,
                onlineGuests: msg.onlineGuests
            });
            this.linkedSubject.next(msg.linked || msg.onlineGuests > 0);
        }));
        // handle session config updates
        this.subscriptions.add(ws.incomingJSONData$.pipe((0, operators_1.filter)((m)=>[
                "GetSessionConfigOK",
                "SessionConfigUpdated"
            ].includes(m.type)
        )).subscribe((m)=>{
            const msg = m;
            this.walletLinkAnalytics.sendEvent(init_1.EVENTS.SESSION_CONFIG_RECEIVED, {
                sessionIdHash: Session_1.Session.hash(sessionId),
                metadata_keys: msg && msg.metadata ? Object.keys(msg.metadata) : undefined
            });
            this.sessionConfigSubject.next({
                webhookId: msg.webhookId,
                webhookUrl: msg.webhookUrl,
                metadata: msg.metadata
            });
        }));
    }
    /**
     * Make a connection to the server
     */ connect() {
        if (this.destroyed) throw new Error("instance is destroyed");
        this.walletLinkAnalytics.sendEvent(init_1.EVENTS.STARTED_CONNECTING, {
            sessionIdHash: Session_1.Session.hash(this.sessionId)
        });
        this.ws.connect().subscribe();
    }
    /**
     * Terminate connection, and mark as destroyed. To reconnect, create a new
     * instance of WalletLinkConnection
     */ destroy() {
        this.subscriptions.unsubscribe();
        this.ws.disconnect();
        this.walletLinkAnalytics.sendEvent(init_1.EVENTS.DISCONNECTED, {
            sessionIdHash: Session_1.Session.hash(this.sessionId)
        });
        this.destroyed = true;
    }
    get isDestroyed() {
        return this.destroyed;
    }
    /**
     * Emit true if connected and authenticated, else false
     * @returns an Observable
     */ get connected$() {
        return this.connectedSubject.asObservable();
    }
    /**
     * Emit once connected
     * @returns an Observable
     */ get onceConnected$() {
        return this.connected$.pipe((0, operators_1.filter)((v)=>v
        ), (0, operators_1.take)(1), (0, operators_1.map)(()=>void 0
        ));
    }
    /**
     * Emit true if linked (a guest has joined before)
     * @returns an Observable
     */ get linked$() {
        return this.linkedSubject.asObservable();
    }
    /**
     * Emit once when linked
     * @returns an Observable
     */ get onceLinked$() {
        return this.linked$.pipe((0, operators_1.filter)((v)=>v
        ), (0, operators_1.take)(1), (0, operators_1.map)(()=>void 0
        ));
    }
    /**
     * Emit current session config if available, and subsequent updates
     * @returns an Observable for the session config
     */ get sessionConfig$() {
        return this.sessionConfigSubject.asObservable();
    }
    /**
     * Emit incoming Event messages
     * @returns an Observable for the messages
     */ get incomingEvent$() {
        return this.ws.incomingJSONData$.pipe((0, operators_1.filter)((m)=>{
            if (m.type !== "Event") return false;
            const sme = m;
            return typeof sme.sessionId === "string" && typeof sme.eventId === "string" && typeof sme.event === "string" && typeof sme.data === "string";
        }), (0, operators_1.map)((m)=>m
        ));
    }
    /**
     * Set session metadata in SessionConfig object
     * @param key
     * @param value
     * @returns an Observable that completes when successful
     */ setSessionMetadata(key, value) {
        const message = (0, ClientMessage_1.ClientMessageSetSessionConfig)({
            id: (0, types_1.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
            metadata: {
                [key]: value
            }
        });
        return this.onceConnected$.pipe((0, operators_1.flatMap)((_)=>this.makeRequest(message)
        ), (0, operators_1.map)((res)=>{
            if ((0, ServerMessage_1.isServerMessageFail)(res)) throw new Error(res.error || "failed to set session metadata");
        }));
    }
    /**
     * Publish an event and emit event ID when successful
     * @param event event name
     * @param data event data
     * @param callWebhook whether the webhook should be invoked
     * @returns an Observable that emits event ID when successful
     */ publishEvent(event, data, callWebhook = false) {
        const message = (0, ClientMessage_1.ClientMessagePublishEvent)({
            id: (0, types_1.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
            event,
            data,
            callWebhook
        });
        return this.onceLinked$.pipe((0, operators_1.flatMap)((_)=>this.makeRequest(message)
        ), (0, operators_1.map)((res)=>{
            if ((0, ServerMessage_1.isServerMessageFail)(res)) throw new Error(res.error || "failed to publish event");
            return res.eventId;
        }));
    }
    sendData(message) {
        this.ws.sendData(JSON.stringify(message));
    }
    updateLastHeartbeat() {
        this.lastHeartbeatResponse = Date.now();
    }
    heartbeat() {
        if (Date.now() - this.lastHeartbeatResponse > HEARTBEAT_INTERVAL * 2) {
            this.ws.disconnect();
            return;
        }
        try {
            this.ws.sendData("h");
        } catch (_a) {}
    }
    makeRequest(message, timeout = REQUEST_TIMEOUT) {
        const reqId = message.id;
        try {
            this.sendData(message);
        } catch (err) {
            return (0, rxjs_1.throwError)(err);
        }
        // await server message with corresponding id
        return this.ws.incomingJSONData$.pipe((0, operators_1.timeoutWith)(timeout, (0, rxjs_1.throwError)(new Error(`request ${reqId} timed out`))), (0, operators_1.filter)((m)=>m.id === reqId
        ), (0, operators_1.take)(1));
    }
    authenticate() {
        const msg = (0, ClientMessage_1.ClientMessageHostSession)({
            id: (0, types_1.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId,
            sessionKey: this.sessionKey
        });
        return this.makeRequest(msg).pipe((0, operators_1.map)((res)=>{
            if ((0, ServerMessage_1.isServerMessageFail)(res)) throw new Error(res.error || "failed to authentcate");
        }));
    }
    sendIsLinked() {
        const msg = (0, ClientMessage_1.ClientMessageIsLinked)({
            id: (0, types_1.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId
        });
        this.sendData(msg);
    }
    sendGetSessionConfig() {
        const msg = (0, ClientMessage_1.ClientMessageGetSessionConfig)({
            id: (0, types_1.IntNumber)(this.nextReqId++),
            sessionId: this.sessionId
        });
        this.sendData(msg);
    }
}
exports.WalletLinkConnection = WalletLinkConnection;

},{"rxjs":"eNCF7","rxjs/operators":"hZ5Xz","../init":"dXFr7","../relay/Session":"bbUb9","../types":"119nQ","./ClientMessage":"e0HKU","./RxWebSocket":"8l1Kg","./ServerMessage":"7K4J7"}],"e0HKU":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ClientMessagePublishEvent = exports.ClientMessageSetSessionConfig = exports.ClientMessageGetSessionConfig = exports.ClientMessageIsLinked = exports.ClientMessageHostSession = void 0;
function ClientMessageHostSession(params) {
    return Object.assign({
        type: "HostSession"
    }, params);
}
exports.ClientMessageHostSession = ClientMessageHostSession;
function ClientMessageIsLinked(params) {
    return Object.assign({
        type: "IsLinked"
    }, params);
}
exports.ClientMessageIsLinked = ClientMessageIsLinked;
function ClientMessageGetSessionConfig(params) {
    return Object.assign({
        type: "GetSessionConfig"
    }, params);
}
exports.ClientMessageGetSessionConfig = ClientMessageGetSessionConfig;
function ClientMessageSetSessionConfig(params) {
    return Object.assign({
        type: "SetSessionConfig"
    }, params);
}
exports.ClientMessageSetSessionConfig = ClientMessageSetSessionConfig;
function ClientMessagePublishEvent(params) {
    return Object.assign({
        type: "PublishEvent"
    }, params);
}
exports.ClientMessagePublishEvent = ClientMessagePublishEvent;

},{}],"8l1Kg":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RxWebSocket = exports.ConnectionState = void 0;
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
var ConnectionState;
(function(ConnectionState1) {
    ConnectionState1[ConnectionState1["DISCONNECTED"] = 0] = "DISCONNECTED";
    ConnectionState1[ConnectionState1["CONNECTING"] = 1] = "CONNECTING";
    ConnectionState1[ConnectionState1["CONNECTED"] = 2] = "CONNECTED";
})(ConnectionState = exports.ConnectionState || (exports.ConnectionState = {}));
/**
 * Rx-ified WebSocket
 */ class RxWebSocket {
    /**
     * Constructor
     * @param url WebSocket server URL
     * @param [WebSocketClass] Custom WebSocket implementation
     */ constructor(url, WebSocketClass = WebSocket){
        this.WebSocketClass = WebSocketClass;
        this.webSocket = null;
        this.connectionStateSubject = new rxjs_1.BehaviorSubject(ConnectionState.DISCONNECTED);
        this.incomingDataSubject = new rxjs_1.Subject();
        this.url = url.replace(/^http/, "ws");
    }
    /**
     * Make a websocket connection
     * @returns an Observable that completes when connected
     */ connect() {
        if (this.webSocket) return (0, rxjs_1.throwError)(new Error("webSocket object is not null"));
        return new rxjs_1.Observable((obs)=>{
            let webSocket;
            try {
                this.webSocket = webSocket = new this.WebSocketClass(this.url);
            } catch (err) {
                obs.error(err);
                return;
            }
            this.connectionStateSubject.next(ConnectionState.CONNECTING);
            webSocket.onclose = (evt)=>{
                this.clearWebSocket();
                obs.error(new Error(`websocket error ${evt.code}: ${evt.reason}`));
                this.connectionStateSubject.next(ConnectionState.DISCONNECTED);
            };
            webSocket.onopen = (_)=>{
                obs.next();
                obs.complete();
                this.connectionStateSubject.next(ConnectionState.CONNECTED);
            };
            webSocket.onmessage = (evt)=>{
                this.incomingDataSubject.next(evt.data);
            };
        }).pipe((0, operators_1.take)(1));
    }
    /**
     * Disconnect from server
     */ disconnect() {
        const { webSocket  } = this;
        if (!webSocket) return;
        this.clearWebSocket();
        this.connectionStateSubject.next(ConnectionState.DISCONNECTED);
        try {
            webSocket.close();
        } catch (_a) {}
    }
    /**
     * Emit current connection state and subsequent changes
     * @returns an Observable for the connection state
     */ get connectionState$() {
        return this.connectionStateSubject.asObservable();
    }
    /**
     * Emit incoming data from server
     * @returns an Observable for the data received
     */ get incomingData$() {
        return this.incomingDataSubject.asObservable();
    }
    /**
     * Emit incoming JSON data from server. non-JSON data are ignored
     * @returns an Observable for parsed JSON data
     */ get incomingJSONData$() {
        return this.incomingData$.pipe((0, operators_1.flatMap)((m)=>{
            let j;
            try {
                j = JSON.parse(m);
            } catch (err) {
                return (0, rxjs_1.empty)();
            }
            return (0, rxjs_1.of)(j);
        }));
    }
    /**
     * Send data to server
     * @param data text to send
     */ sendData(data) {
        const { webSocket  } = this;
        if (!webSocket) throw new Error("websocket is not connected");
        webSocket.send(data);
    }
    clearWebSocket() {
        const { webSocket  } = this;
        if (!webSocket) return;
        this.webSocket = null;
        webSocket.onclose = null;
        webSocket.onerror = null;
        webSocket.onmessage = null;
        webSocket.onopen = null;
    }
}
exports.RxWebSocket = RxWebSocket;

},{"rxjs":"eNCF7","rxjs/operators":"hZ5Xz"}],"7K4J7":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isServerMessageFail = void 0;
function isServerMessageFail(msg) {
    return msg && msg.type === "Fail" && typeof msg.id === "number" && typeof msg.sessionId === "string" && typeof msg.error === "string";
}
exports.isServerMessageFail = isServerMessageFail;

},{}],"7VUGc":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decrypt = exports.encrypt = void 0;
const rxjs_1 = require("rxjs");
const util_1 = require("../util");
/**
 *
 * @param plainText string to be encrypted
 * @param secret hex representation of 32-byte secret
 * returns hex string representation of bytes in the order: initialization vector (iv),
 * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes. Remaining bytes are the
 * encrypted plainText.
 */ async function encrypt(plainText, secret) {
    if (secret.length != 64) throw Error(`secret must be 256 bits`);
    const ivBytes = crypto.getRandomValues(new Uint8Array(12));
    const secretKey = await crypto.subtle.importKey("raw", (0, util_1.hexStringToUint8Array)(secret), {
        "name": "aes-gcm"
    }, false, [
        "encrypt",
        "decrypt"
    ]);
    let enc = new TextEncoder();
    // Will return encrypted plainText with auth tag (ie MAC or checksum) appended at the end
    const encryptedResult = await window.crypto.subtle.encrypt({
        name: "AES-GCM",
        iv: ivBytes
    }, secretKey, enc.encode(plainText));
    let tagLength = 16;
    let authTag = encryptedResult.slice(encryptedResult.byteLength - tagLength);
    let encryptedPlaintext = encryptedResult.slice(0, encryptedResult.byteLength - tagLength);
    let authTagBytes = new Uint8Array(authTag);
    let encryptedPlaintextBytes = new Uint8Array(encryptedPlaintext);
    let concatted = new Uint8Array([
        ...ivBytes,
        ...authTagBytes,
        ...encryptedPlaintextBytes
    ]);
    return (0, util_1.uint8ArrayToHex)(concatted);
}
exports.encrypt = encrypt;
/**
 *
 * @param cipherText hex string representation of bytes in the order: initialization vector (iv),
 * auth tag, encrypted plaintext. IV is 12 bytes. Auth tag is 16 bytes.
 * @param secret hex string representation of 32-byte secret
 */ function decrypt(cipherText, secret) {
    if (secret.length != 64) throw Error(`secret must be 256 bits`);
    return new rxjs_1.Observable(function(subscriber) {
        (async function() {
            const secretKey = await crypto.subtle.importKey("raw", (0, util_1.hexStringToUint8Array)(secret), {
                "name": "aes-gcm"
            }, false, [
                "encrypt",
                "decrypt"
            ]);
            const encrypted = (0, util_1.hexStringToUint8Array)(cipherText);
            const ivBytes = encrypted.slice(0, 12);
            const authTagBytes = encrypted.slice(12, 28);
            const encryptedPlaintextBytes = encrypted.slice(28);
            const concattedBytes = new Uint8Array([
                ...encryptedPlaintextBytes,
                ...authTagBytes
            ]);
            const algo = {
                name: "AES-GCM",
                iv: new Uint8Array(ivBytes)
            };
            try {
                const decrypted = await window.crypto.subtle.decrypt(algo, secretKey, concattedBytes);
                let decoder = new TextDecoder();
                subscriber.next(decoder.decode(decrypted));
                subscriber.complete();
            } catch (err) {
                subscriber.error(err);
            }
        })();
    });
}
exports.decrypt = decrypt;

},{"rxjs":"eNCF7","../util":"8WKyV"}],"299bG":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Web3Method = void 0;
var Web3Method;
(function(Web3Method1) {
    Web3Method1["requestEthereumAccounts"] = "requestEthereumAccounts";
    Web3Method1["signEthereumMessage"] = "signEthereumMessage";
    Web3Method1["signEthereumTransaction"] = "signEthereumTransaction";
    Web3Method1["submitEthereumTransaction"] = "submitEthereumTransaction";
    Web3Method1["ethereumAddressFromSignedMessage"] = "ethereumAddressFromSignedMessage";
    Web3Method1["scanQRCode"] = "scanQRCode";
    Web3Method1["arbitrary"] = "arbitrary";
    Web3Method1["childRequestEthereumAccounts"] = "childRequestEthereumAccounts";
    Web3Method1["addEthereumChain"] = "addEthereumChain";
    Web3Method1["switchEthereumChain"] = "switchEthereumChain";
})(Web3Method = exports.Web3Method || (exports.Web3Method = {}));

},{}],"inXPb":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Web3RequestCanceledMessage = void 0;
const RelayMessage_1 = require("./RelayMessage");
function Web3RequestCanceledMessage(id) {
    return {
        type: RelayMessage_1.RelayMessageType.WEB3_REQUEST_CANCELED,
        id
    };
}
exports.Web3RequestCanceledMessage = Web3RequestCanceledMessage;

},{"./RelayMessage":"gHpja"}],"gHpja":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RelayMessageType = void 0;
var RelayMessageType;
(function(RelayMessageType1) {
    RelayMessageType1["SESSION_ID_REQUEST"] = "SESSION_ID_REQUEST";
    RelayMessageType1["SESSION_ID_RESPONSE"] = "SESSION_ID_RESPONSE";
    RelayMessageType1["LINKED"] = "LINKED";
    RelayMessageType1["UNLINKED"] = "UNLINKED";
    RelayMessageType1["WEB3_REQUEST"] = "WEB3_REQUEST";
    RelayMessageType1["WEB3_REQUEST_CANCELED"] = "WEB3_REQUEST_CANCELED";
    RelayMessageType1["WEB3_RESPONSE"] = "WEB3_RESPONSE";
})(RelayMessageType = exports.RelayMessageType || (exports.RelayMessageType = {}));

},{}],"1Md5M":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Web3RequestMessage = void 0;
const RelayMessage_1 = require("./RelayMessage");
function Web3RequestMessage(params) {
    return Object.assign({
        type: RelayMessage_1.RelayMessageType.WEB3_REQUEST
    }, params);
}
exports.Web3RequestMessage = Web3RequestMessage;

},{"./RelayMessage":"gHpja"}],"e9h8D":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EthereumAddressFromSignedMessageResponse = exports.SubmitEthereumTransactionResponse = exports.SignEthereumTransactionResponse = exports.SignEthereumMessageResponse = exports.isRequestEthereumAccountsResponse = exports.RequestEthereumAccountsResponse = exports.SwitchEthereumChainResponse = exports.ErrorResponse = void 0;
const Web3Method_1 = require("./Web3Method");
function ErrorResponse(method, errorMessage) {
    return {
        method,
        errorMessage
    };
}
exports.ErrorResponse = ErrorResponse;
function SwitchEthereumChainResponse(isApproved) {
    return {
        method: Web3Method_1.Web3Method.switchEthereumChain,
        result: isApproved
    };
}
exports.SwitchEthereumChainResponse = SwitchEthereumChainResponse;
function RequestEthereumAccountsResponse(addresses) {
    return {
        method: Web3Method_1.Web3Method.requestEthereumAccounts,
        result: addresses
    };
}
exports.RequestEthereumAccountsResponse = RequestEthereumAccountsResponse;
function isRequestEthereumAccountsResponse(res) {
    return res && res.method === Web3Method_1.Web3Method.requestEthereumAccounts;
}
exports.isRequestEthereumAccountsResponse = isRequestEthereumAccountsResponse;
function SignEthereumMessageResponse(signature) {
    return {
        method: Web3Method_1.Web3Method.signEthereumMessage,
        result: signature
    };
}
exports.SignEthereumMessageResponse = SignEthereumMessageResponse;
function SignEthereumTransactionResponse(signedData) {
    return {
        method: Web3Method_1.Web3Method.signEthereumTransaction,
        result: signedData
    };
}
exports.SignEthereumTransactionResponse = SignEthereumTransactionResponse;
function SubmitEthereumTransactionResponse(txHash) {
    return {
        method: Web3Method_1.Web3Method.submitEthereumTransaction,
        result: txHash
    };
}
exports.SubmitEthereumTransactionResponse = SubmitEthereumTransactionResponse;
function EthereumAddressFromSignedMessageResponse(address) {
    return {
        method: Web3Method_1.Web3Method.ethereumAddressFromSignedMessage,
        result: address
    };
}
exports.EthereumAddressFromSignedMessageResponse = EthereumAddressFromSignedMessageResponse;

},{"./Web3Method":"299bG"}],"gvX5m":[function(require,module,exports) {
"use strict";
// Copyright (c) 2018-2020 WalletLink.org <https://www.walletlink.org/>
// Copyright (c) 2018-2020 Coinbase, Inc. <https://www.coinbase.com/>
// Licensed under the Apache License, version 2.0
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isWeb3ResponseMessage = exports.Web3ResponseMessage = void 0;
const RelayMessage_1 = require("./RelayMessage");
function Web3ResponseMessage(params) {
    return Object.assign({
        type: RelayMessage_1.RelayMessageType.WEB3_RESPONSE
    }, params);
}
exports.Web3ResponseMessage = Web3ResponseMessage;
function isWeb3ResponseMessage(msg) {
    return msg && msg.type === RelayMessage_1.RelayMessageType.WEB3_RESPONSE;
}
exports.isWeb3ResponseMessage = isWeb3ResponseMessage;

},{"./RelayMessage":"gHpja"}],"akmE6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WalletLinkRelayEventManager = void 0;
const util_1 = require("../util");
class WalletLinkRelayEventManager {
    constructor(){
        this._nextRequestId = 0;
        this.callbacks = new Map();
    }
    makeRequestId() {
        // max nextId == max int32 for compatibility with mobile
        this._nextRequestId = (this._nextRequestId + 1) % 0x7fffffff;
        const id = this._nextRequestId;
        const idStr = (0, util_1.prepend0x)(id.toString(16));
        // unlikely that this will ever be an issue, but just to be safe
        const callback = this.callbacks.get(idStr);
        if (callback) this.callbacks.delete(idStr);
        return id;
    }
}
exports.WalletLinkRelayEventManager = WalletLinkRelayEventManager;

},{"../util":"8WKyV"}],"Saw8N":[function(require,module,exports) {
module.exports = JSON.parse("{\"name\":\"walletlink\",\"version\":\"2.2.10\",\"description\":\"WalletLink JavaScript SDK\",\"keywords\":[\"cipher\",\"cipherbrowser\",\"coinbase\",\"coinbasewallet\",\"eth\",\"ether\",\"ethereum\",\"etherium\",\"injection\",\"toshi\",\"wallet\",\"walletlink\",\"web3\"],\"main\":\"dist/index.js\",\"types\":\"dist/index.d.ts\",\"repository\":\"https://github.com/walletlink/walletlink.git\",\"author\":\"Coinbase, Inc.\",\"license\":\"Apache-2.0\",\"scripts\":{\"tsc\":\"tsc --noEmit --pretty\",\"test\":\"yarn build-npm && karma start\",\"build\":\"node compile-assets.js && webpack --config webpack.config.js\",\"build-chrome\":\"webpack --config webpack.config.chrome.js\",\"build-npm\":\"tsc -p ./tsconfig.build.json\",\"build:dev\":\"export WALLETLINK_URL='http://localhost:3000'; yarn build && yarn build-chrome\",\"build:dev:watch\":\"nodemon -e 'ts,tsx,js,json,css,scss,svg' --ignore 'src/**/*-css.ts' --ignore 'src/**/*-svg.ts' --watch src/ --watch chrome/ --exec 'yarn build:dev'\",\"build:prod\":\"yarn build && yarn build-chrome && yarn build-npm && cp ./package.json ../README.md ../LICENSE build/npm && cp -a src/vendor-js build/npm/dist && sed -i.bak 's|  \\\"private\\\": true,||g' build/npm/package.json && rm -f build/npm/package.json.bak\",\"lint\":\"tslint -p . 'src/**/*.ts{,x}'\",\"lint:watch\":\"nodemon -e ts,tsx,js,json,css,scss,svg --watch src/ --exec 'yarn tsc && yarn lint'\"},\"dependencies\":{\"@metamask/safe-event-emitter\":\"2.0.0\",\"bind-decorator\":\"^1.0.11\",\"bn.js\":\"^5.1.1\",\"clsx\":\"^1.1.0\",\"eth-block-tracker\":\"4.4.3\",\"eth-json-rpc-filters\":\"4.2.2\",\"eth-rpc-errors\":\"4.0.2\",\"js-sha256\":\"0.9.0\",\"json-rpc-engine\":\"6.1.0\",\"keccak\":\"^3.0.1\",\"preact\":\"^10.5.9\",\"rxjs\":\"^6.6.3\",\"stream-browserify\":\"^3.0.0\"},\"devDependencies\":{\"@types/bn.js\":\"^4.11.6\",\"@types/node\":\"^14.14.20\",\"browserify\":\"17.0.0\",\"copy-webpack-plugin\":\"^6.4.1\",\"core-js\":\"^3.8.2\",\"jasmine\":\"3.8.0\",\"karma\":\"^6.3.2\",\"karma-browserify\":\"8.1.0\",\"karma-chrome-launcher\":\"^3.1.0\",\"karma-jasmine\":\"^4.0.1\",\"nodemon\":\"^2.0.6\",\"raw-loader\":\"^4.0.2\",\"regenerator-runtime\":\"^0.13.7\",\"rxjs-tslint\":\"^0.1.7\",\"sass\":\"^1.32.0\",\"svgo\":\"^2.8.0\",\"ts-jest\":\"^26.4.4\",\"ts-loader\":\"^8.0.13\",\"tslib\":\"^2.0.3\",\"tslint\":\"^6.1.3\",\"tslint-config-prettier\":\"^1.18.0\",\"tslint-config-security\":\"^1.16.0\",\"tslint-microsoft-contrib\":\"^6.2.0\",\"typescript\":\"^4.1.3\",\"watchify\":\"4.0.0\",\"webpack\":\"^5.49.0\",\"webpack-cli\":\"^3.3.12\",\"whatwg-fetch\":\"^3.5.0\"},\"engines\":{\"node\":\">= 10.0.0\"},\"jest\":{\"transform\":{\"^.+\\\\.tsx?$\":\"ts-jest\"},\"testEnvironment\":\"node\",\"testPathIgnorePatterns\":[\"<rootDir>/dist/\",\"<rootDir>/node_modules/\"],\"testRegex\":\"(/__tests__/.*|\\\\.(test|spec))\\\\.(ts|tsx|js)$\",\"moduleFileExtensions\":[\"ts\",\"js\",\"json\"]}}");

},{}]},["hQZon"], null, "parcelRequiredb79")

//# sourceMappingURL=dist.da0bee56.js.map
