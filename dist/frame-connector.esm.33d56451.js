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
})({"bD74R":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "e081ccfc33d56451";
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

},{}],"7A8GJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FrameConnector", ()=>FrameConnector
);
parcelHelpers.export(exports, "UserRejectedRequestError", ()=>UserRejectedRequestError
);
var _abstractConnector = require("@web3-react/abstract-connector");
var _ethProvider = require("eth-provider");
var _ethProviderDefault = parcelHelpers.interopDefault(_ethProvider);
var _tinyInvariant = require("tiny-invariant");
var _tinyInvariantDefault = parcelHelpers.interopDefault(_tinyInvariant);
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent1, args1, Class1) {
    if (_isNativeReflectConstruct()) _construct = Reflect.construct;
    else _construct = function _construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
    };
    return _construct.apply(null, arguments);
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _wrapNativeSuper(Class2) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class2);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
var UserRejectedRequestError = /*#__PURE__*/ function(_Error) {
    _inheritsLoose(UserRejectedRequestError1, _Error);
    function UserRejectedRequestError1() {
        var _this;
        _this = _Error.call(this) || this;
        _this.name = _this.constructor.name;
        _this.message = 'The user rejected the request.';
        return _this;
    }
    return UserRejectedRequestError1;
}(/*#__PURE__*/ _wrapNativeSuper(Error));
var FrameConnector = /*#__PURE__*/ function(_AbstractConnector) {
    _inheritsLoose(FrameConnector1, _AbstractConnector);
    function FrameConnector1(kwargs) {
        var _this2;
        !(kwargs.supportedChainIds.length === 1) && _tinyInvariantDefault.default(false, 'This connector only supports 1 chainId at the moment.');
        _this2 = _AbstractConnector.call(this, kwargs) || this;
        _this2.handleNetworkChanged = _this2.handleNetworkChanged.bind(_assertThisInitialized(_this2));
        _this2.handleChainChanged = _this2.handleChainChanged.bind(_assertThisInitialized(_this2));
        _this2.handleAccountsChanged = _this2.handleAccountsChanged.bind(_assertThisInitialized(_this2));
        _this2.handleClose = _this2.handleClose.bind(_assertThisInitialized(_this2));
        return _this2;
    }
    var _proto = FrameConnector1.prototype;
    _proto.handleNetworkChanged = function handleNetworkChanged(networkId) {
        console.log("Handling 'networkChanged' event with payload", networkId);
        this.emitUpdate({
            provider: this.provider,
            chainId: networkId
        });
    };
    _proto.handleChainChanged = function handleChainChanged(chainId) {
        console.log("Handling 'chainChanged' event with payload", chainId);
        this.emitUpdate({
            chainId: chainId
        });
    };
    _proto.handleAccountsChanged = function handleAccountsChanged(accounts) {
        console.log("Handling 'accountsChanged' event with payload", accounts);
        this.emitUpdate({
            account: accounts.length === 0 ? null : accounts[0]
        });
    };
    _proto.handleClose = function handleClose(code, reason) {
        console.log("Handling 'close' event with payload", code, reason);
        this.emitDeactivate();
    };
    _proto.activate = function activate() {
        try {
            var _this4 = this;
            if (!_this4.provider) _this4.provider = _ethProviderDefault.default('frame');
            _this4.provider.on('networkChanged', _this4.handleNetworkChanged).on('chainChanged', _this4.handleChainChanged).on('accountsChanged', _this4.handleAccountsChanged).on('close', _this4.handleClose);
            return Promise.resolve(_this4.provider.enable().then(function(accounts) {
                return accounts[0];
            })["catch"](function(error) {
                if (error && error.code === 4001) throw new UserRejectedRequestError();
                else throw error;
            })).then(function(account) {
                return {
                    provider: _this4.provider,
                    account: account
                };
            });
        } catch (e) {
            return Promise.reject(e);
        }
    };
    _proto.getProvider = function getProvider() {
        try {
            var _this6 = this;
            return Promise.resolve(_this6.provider);
        } catch (e) {
            return Promise.reject(e);
        }
    };
    _proto.getChainId = function getChainId() {
        try {
            var _this8 = this;
            return Promise.resolve(_this8.provider.send('eth_chainId'));
        } catch (e) {
            return Promise.reject(e);
        }
    };
    _proto.getAccount = function getAccount() {
        try {
            var _this10 = this;
            return Promise.resolve(_this10.provider.send('eth_accounts').then(function(accounts) {
                return accounts[0];
            }));
        } catch (e) {
            return Promise.reject(e);
        }
    };
    _proto.deactivate = function deactivate() {
        this.provider.removeListener('networkChanged', this.handleNetworkChanged).removeListener('chainChanged', this.handleChainChanged).removeListener('accountsChanged', this.handleAccountsChanged).removeListener('close', this.handleClose);
    };
    return FrameConnector1;
}(_abstractConnector.AbstractConnector);

},{"@web3-react/abstract-connector":"gkcsn","eth-provider":"kbj35","tiny-invariant":"fnIPv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkcsn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AbstractConnector", ()=>AbstractConnector
);
var _events = require("events");
var _types = require("@web3-react/types");
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
var AbstractConnector = /*#__PURE__*/ function(_EventEmitter) {
    _inheritsLoose(AbstractConnector1, _EventEmitter);
    function AbstractConnector1(_temp) {
        var _this;
        var _ref = _temp === void 0 ? {} : _temp, supportedChainIds = _ref.supportedChainIds;
        _this = _EventEmitter.call(this) || this;
        _this.supportedChainIds = supportedChainIds;
        return _this;
    }
    var _proto = AbstractConnector1.prototype;
    _proto.emitUpdate = function emitUpdate(update) {
        console.log("Emitting '" + _types.ConnectorEvent.Update + "' with payload", update);
        this.emit(_types.ConnectorEvent.Update, update);
    };
    _proto.emitError = function emitError(error) {
        console.log("Emitting '" + _types.ConnectorEvent.Error + "' with payload", error);
        this.emit(_types.ConnectorEvent.Error, error);
    };
    _proto.emitDeactivate = function emitDeactivate() {
        console.log("Emitting '" + _types.ConnectorEvent.Deactivate + "'");
        this.emit(_types.ConnectorEvent.Deactivate);
    };
    return AbstractConnector1;
}(_events.EventEmitter);

},{"events":"1VQLm","@web3-react/types":"5JR8V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kbj35":[function(require,module,exports) {
const resolve = require('./resolve');
const provider = require('./provider');
const presets = require('./presets');
const injected = {
    ethereum: typeof window !== 'undefined' && typeof window.ethereum !== 'undefined' ? window.ethereum : null,
    web3: typeof window !== 'undefined' && typeof window.web3 !== 'undefined' ? window.web3.currentProvider : null
};
const ws = typeof window !== 'undefined' && typeof window.WebSocket !== 'undefined' ? window.WebSocket : null;
const XHR = typeof window !== 'undefined' && typeof window.XMLHttpRequest !== 'undefined' ? window.XMLHttpRequest : null;
if (injected.ethereum) injected.ethereum.__isProvider = true;
const connections = {
    injected: injected.ethereum || require('./connections/injected')(injected.web3),
    ipc: require('./connections/unavailable')('IPC connections are unavliable in the browser'),
    ws: require('./connections/ws')(ws),
    http: require('./connections/http')(XHR)
};
module.exports = (targets = [
    'injected',
    'frame'
], options = {})=>provider(connections, resolve(targets, presets), options)
;

},{"./resolve":"l7IAZ","./provider":"aat2S","./presets":"6q3sk","./connections/injected":"f6Jju","./connections/unavailable":"kLwRR","./connections/ws":"l8hkA","./connections/http":"j3YjR"}],"l7IAZ":[function(require,module,exports) {
const getProtocol = (location)=>{
    if (location === 'injected') return 'injected';
    if (location.endsWith('.ipc')) return 'ipc';
    if (location.startsWith('wss://') || location.startsWith('ws://')) return 'ws';
    if (location.startsWith('https://') || location.startsWith('http://')) return 'http';
    return '';
};
module.exports = (targets, presets)=>{
    return [].concat(...[].concat(targets).map((provider)=>{
        if (presets[provider]) return presets[provider].map((location)=>({
                type: provider,
                location,
                protocol: getProtocol(location)
            })
        );
        else return {
            type: 'custom',
            location: provider,
            protocol: getProtocol(provider)
        };
    })).filter((provider)=>{
        if (provider.protocol || provider.type === 'injected') return true;
        else {
            console.log('eth-provider | Invalid provider preset/location: "' + provider.location + '"');
            return false;
        }
    });
};

},{}],"aat2S":[function(require,module,exports) {
const EventEmitter = require('events');
const EthereumProvider = require('ethereum-provider');
const ConnectionManager = require('../ConnectionManager');
const monitor = (provider)=>{
    function update(status) {
        provider.status = status;
        if (provider instanceof EventEmitter) provider.emit('status', status);
    }
    async function check() {
        if (provider.inSetup) return setTimeout(check, 1000);
        try {
            if (await provider.send('eth_syncing')) {
                update('syncing');
                setTimeout(()=>check()
                , 5000);
            } else update('connected');
        } catch (e) {
            update('disconnected');
        }
    }
    update('loading');
    check();
    provider.on('connect', ()=>check()
    );
    provider.on('close', ()=>update('disconnected')
    );
    return provider;
};
module.exports = (connections, targets, options)=>{
    // If window.ethereum and injected is a target in any priority, return ethereum provider
    if (connections.injected.__isProvider && targets.map((t)=>t.type
    ).indexOf('injected') > -1) {
        delete connections.injected.__isProvider;
        return monitor(connections.injected);
    }
    const provider = new EthereumProvider(new ConnectionManager(connections, targets, options));
    provider.setMaxListeners(128);
    return monitor(provider);
};

},{"events":"1VQLm","ethereum-provider":"il6Mc","../ConnectionManager":"3iPPG"}],"il6Mc":[function(require,module,exports) {
const EventEmitter = require('events');
class EthereumProvider extends EventEmitter {
    constructor(connection){
        super();
        this.connected = false;
        this.nextId = 0;
        this.promises = {};
        this.subscriptions = [];
        this.connection = connection;
        this.connection.on('connect', ()=>this.checkConnection()
        );
        this.connection.on('close', ()=>this.emit('close')
        );
        this.connection.on('payload', (payload)=>{
            const { id , method , error , result  } = payload;
            if (typeof id !== 'undefined') {
                if (this.promises[id]) {
                    payload.error ? this.promises[id].reject(error) : this.promises[id].resolve(result);
                    delete this.promises[id];
                }
            } else if (method && method.indexOf('_subscription') > -1) {
                this.emit(payload.params.subscription, payload.params.result);
                this.emit(method, payload.params) // Latest EIP-1193
                ;
                this.emit('data', payload) // Backwards Compatibility
                ;
            }
        });
        this.on('newListener', (event, listener)=>{
            if (event === 'networkChanged') {
                if (!this.attemptedNetworkSubscription && this.connected) this.startNetworkSubscription();
            } else if (event === 'accountsChanged') {
                if (!this.attemptedAccountsSubscription && this.connected) this.startAccountsSubscription();
            }
        });
    }
    async checkConnection() {
        try {
            this.emit('connect', await this._send('net_version'));
            this.connected = true;
            if (this.listenerCount('networkChanged') && !this.attemptedNetworkSubscription) this.startNetworkSubscription();
            if (this.listenerCount('accountsChanged') && !this.attemptedAccountsSubscription) this.startAccountsSubscription();
        } catch (e) {
            this.connected = false;
        }
    }
    async startNetworkSubscription() {
        this.attemptedNetworkSubscription = true;
        try {
            let networkChanged = await this.subscribe('eth_subscribe', 'networkChanged');
            this.on(networkChanged, (netId)=>this.emit('networkChanged', netId)
            );
        } catch (e) {
            console.warn('Unable to subscribe to networkChanged', e);
        }
    }
    async startAccountsSubscription() {
        this.attemptedAccountsSubscription = true;
        try {
            let accountsChanged = await this.subscribe('eth_subscribe', 'accountsChanged');
            this.on(accountsChanged, (accounts)=>this.emit('accountsChanged', accounts)
            );
        } catch (e) {
            console.warn('Unable to subscribe to accountsChanged', e);
        }
    }
    enable() {
        return new Promise((resolve, reject)=>{
            this._send('eth_accounts').then((accounts)=>{
                if (accounts.length > 0) {
                    this.accounts = accounts;
                    this.coinbase = accounts[0];
                    this.emit('enable');
                    resolve(accounts);
                } else {
                    const err = new Error('User Denied Full Provider');
                    err.code = 4001;
                    reject(err);
                }
            }).catch(reject);
        });
    }
    _send(method, params = []) {
        if (!method || typeof method !== 'string') return new Error('Method is not a valid string.');
        if (!(params instanceof Array)) return new Error('Params is not a valid array.');
        const payload = {
            jsonrpc: '2.0',
            id: this.nextId++,
            method,
            params
        };
        const promise = new Promise((resolve, reject)=>{
            this.promises[payload.id] = {
                resolve,
                reject
            };
        });
        this.connection.send(payload);
        return promise;
    }
    send(...args) {
        return this._send(...args);
    }
    _sendBatch(requests) {
        return Promise.all(requests.map((payload)=>this._send(payload.method, payload.params)
        ));
    }
    subscribe(type, method, params = []) {
        return this._send(type, [
            method,
            ...params
        ]).then((id)=>{
            this.subscriptions.push(id);
            return id;
        });
    }
    unsubscribe(type, id) {
        return this._send(type, [
            id
        ]).then((success)=>{
            if (success) {
                this.subscriptions = this.subscriptions.filter((_id)=>_id !== id
                ) // Remove subscription
                ;
                this.removeAllListeners(id) // Remove listeners
                ;
                return success;
            }
        });
    }
    sendAsync(payload, cb) {
        if (!cb || typeof cb !== 'function') return cb(new Error('Invalid or undefined callback provided to sendAsync'));
        if (!payload) return cb(new Error('Invalid Payload'));
        // sendAsync can be called with an array for batch requests used by web3.js 0.x
        // this is not part of EIP-1193's backwards compatibility but we still want to support it
        if (payload instanceof Array) return this.sendAsyncBatch(payload, cb);
        else return this._send(payload.method, payload.params).then((result)=>{
            cb(null, {
                id: payload.id,
                jsonrpc: payload.jsonrpc,
                result
            });
        }).catch((err)=>{
            cb(err);
        });
    }
    sendAsyncBatch(payload, cb) {
        return this._sendBatch(payload).then((results)=>{
            let result = results.map((entry, index)=>{
                return {
                    id: payload[index].id,
                    jsonrpc: payload[index].jsonrpc,
                    result: entry
                };
            });
            cb(null, result);
        }).catch((err)=>{
            cb(err);
        });
    }
    isConnected() {
        return this.connected;
    }
    close() {
        this.connection.close();
        this.connected = false;
        let error = new Error(`Provider closed, subscription lost, please subscribe again.`);
        this.subscriptions.forEach((id)=>this.emit(id, error)
        ) // Send Error objects to any open subscriptions
        ;
        this.subscriptions = [] // Clear subscriptions
        ;
    }
}
module.exports = EthereumProvider;

},{"events":"1VQLm"}],"3iPPG":[function(require,module,exports) {
const EventEmitter = require('events');
const dev = true;
class ConnectionManager extends EventEmitter {
    constructor(connections, targets, options){
        super();
        this.targets = targets;
        this.connections = connections;
        this.connected = false;
        this.status = 'loading';
        this.interval = options.interval || 5000;
        this.name = options.name || 'default';
        this.inSetup = true;
        this.connect();
    }
    connect(index = 0) {
        if (dev && index === 0) console.log(`\n\n\n\nA connection cycle started for provider with name: ${this.name}`);
        if (this.connection && this.connection.status === 'connected' && index >= this.connection.index) {
            if (dev) console.log('Stopping connection cycle becasuse we\'re already connected to a higher priority provider');
        } else if (this.targets.length === 0) {
            if (dev) console.log('No valid targets supplied');
        } else {
            const { protocol , location  } = this.targets[index];
            this.connection = this.connections[protocol](location);
            this.connection.on('error', (err)=>{
                if (!this.connected) return this.connectionError(index, err);
                if (this.listenerCount('error')) return this.emit('error', err);
                console.warn('eth-provider - Uncaught connection error: ' + err.message);
            });
            this.connection.on('close', (summary)=>{
                this.connected = false;
                this.emit('close');
                if (!this.closing) this.refresh();
            });
            this.connection.on('connect', ()=>{
                this.connection.target = this.targets[index];
                this.connection.index = index;
                this.targets[index].status = this.connection.status;
                this.connected = true;
                this.inSetup = false;
                if (dev) console.log('Successfully connected to: ' + this.targets[index].location);
                this.emit('connect');
            });
            this.connection.on('data', (data)=>this.emit('data', data)
            );
            this.connection.on('payload', (payload)=>this.emit('payload', payload)
            );
        }
    }
    refresh(interval = this.interval) {
        if (dev) console.log(`Reconnect queued for ${(interval / 1000).toFixed(2)}s in the future`);
        clearTimeout(this.connectTimer);
        this.connectTimer = setTimeout(()=>this.connect()
        , interval);
    }
    connectionError(index, err) {
        this.targets[index].status = err;
        if (this.targets.length - 1 === index) {
            this.inSetup = false;
            if (dev) console.warn('eth-provider unable to connect to any targets, view connection cycle summary: ', this.targets);
            this.refresh();
        } else this.connect(++index);
    }
    close() {
        this.closing = true;
        if (this.connection) this.connection.close() // Let event bubble from here
        ;
        else this.emit('close');
        clearTimeout(this.connectTimer);
    }
    error(payload, message, code = -1) {
        this.emit('payload', {
            id: payload.id,
            jsonrpc: payload.jsonrpc,
            error: {
                message,
                code
            }
        });
    }
    send(payload) {
        if (this.inSetup) setTimeout(()=>this.send(payload)
        , 100);
        else if (this.connection.closed) this.error(payload, 'Not connected');
        else this.connection.send(payload);
    }
}
module.exports = ConnectionManager;

},{"events":"1VQLm"}],"6q3sk":[function(require,module,exports) {
module.exports = {
    injected: [
        'injected'
    ],
    frame: [
        'ws://127.0.0.1:1248',
        'http://127.0.0.1:1248'
    ],
    direct: [
        'ws://127.0.0.1:8546',
        'http://127.0.0.1:8545'
    ],
    infura: [
        'wss://mainnet.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b',
        'https://mainnet.infura.io/v3/786ade30f36244469480aa5c2bf0743b'
    ],
    infuraRopsten: [
        'wss://ropsten.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b',
        'https://ropsten.infura.io/v3/786ade30f36244469480aa5c2bf0743b'
    ],
    infuraRinkeby: [
        'wss://rinkeby.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b',
        'https://rinkeby.infura.io/v3/786ade30f36244469480aa5c2bf0743b'
    ],
    infuraKovan: [
        'wss://kovan.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b',
        'https://kovan.infura.io/v3/786ade30f36244469480aa5c2bf0743b'
    ]
};

},{}],"f6Jju":[function(require,module,exports) {
const EventEmitter = require('events');
class InjectedConnection extends EventEmitter {
    constructor(_injected, options){
        super();
        if (_injected) setTimeout(()=>this.emit('error', new Error('Injected web3 provider is not currently supported'))
        , 0);
        else setTimeout(()=>this.emit('error', new Error('No injected provider found'))
        , 0);
    }
}
module.exports = (injected)=>(options)=>new InjectedConnection(injected, options)
;

},{"events":"1VQLm"}],"kLwRR":[function(require,module,exports) {
const EventEmitter = require('events');
class UnavailableConnection extends EventEmitter {
    constructor(message){
        super();
        setTimeout(()=>this.emit('error', new Error(message))
        , 0);
    }
}
module.exports = (message)=>()=>new UnavailableConnection(message)
;

},{"events":"1VQLm"}],"l8hkA":[function(require,module,exports) {
const EventEmitter = require('events');
const parse = require('../parse');
const dev = true;
let WebSocket;
class WebSocketConnection extends EventEmitter {
    constructor(_WebSocket, url, options){
        super();
        WebSocket = _WebSocket;
        setTimeout(()=>this.create(url, options)
        , 0);
    }
    create(url, options) {
        if (!WebSocket) this.emit('error', new Error('No WebSocket transport available'));
        try {
            this.socket = new WebSocket(url);
        } catch (e) {
            return this.emit('error', e);
        }
        this.socket.addEventListener('error', (err)=>this.emit('error', err)
        );
        this.socket.addEventListener('open', ()=>{
            this.emit('connect');
            this.socket.addEventListener('message', (message)=>{
                const data = typeof message.data === 'string' ? message.data : '';
                parse(data, (err, payloads)=>{
                    if (err) return; //
                    payloads.forEach((load)=>{
                        if (Array.isArray(load)) load.forEach((payload)=>this.emit('payload', payload)
                        );
                        else this.emit('payload', load);
                    });
                });
            });
            this.socket.addEventListener('close', ()=>this.onClose()
            );
        });
    }
    onClose() {
        this.socket = null;
        this.closed = true;
        if (dev) console.log('Closing WebSocket connection');
        this.emit('close');
        this.removeAllListeners();
    }
    close() {
        if (this.socket) this.socket.close();
        else this.onClose();
    }
    error(payload, message, code = -1) {
        this.emit('payload', {
            id: payload.id,
            jsonrpc: payload.jsonrpc,
            error: {
                message,
                code
            }
        });
    }
    send(payload) {
        if (this.socket && this.socket.readyState === this.socket.CONNECTING) setTimeout((_)=>this.send(payload)
        , 10);
        else if (!this.socket || this.socket.readyState > 1) {
            this.connected = false;
            this.error(payload, 'Not connected');
        } else this.socket.send(JSON.stringify(payload));
    }
}
module.exports = (WebSocket1)=>(url, cb)=>new WebSocketConnection(WebSocket1, url, cb)
;

},{"events":"1VQLm","../parse":"hfsV7"}],"hfsV7":[function(require,module,exports) {
let last, timeout;
module.exports = (res, cb)=>{
    const values = [];
    res.replace(/\}[\n\r]?\{/g, '}|--|{') // }{
    .replace(/\}\][\n\r]?\[\{/g, '}]|--|[{') // }][{
    .replace(/\}[\n\r]?\[\{/g, '}|--|[{') // }[{
    .replace(/\}\][\n\r]?\{/g, '}]|--|{') // }]{
    .split('|--|').forEach((data)=>{
        if (last) data = last + data // prepend the last chunk
        ;
        let result;
        try {
            result = JSON.parse(data);
        } catch (e) {
            last = data;
            clearTimeout(timeout) // restart timeout
            ;
            timeout = setTimeout(()=>cb(new Error('Parse response timeout'))
            , 15000);
            return;
        }
        clearTimeout(timeout);
        last = null;
        if (result) values.push(result);
    });
    cb(null, values);
};

},{}],"j3YjR":[function(require,module,exports) {
const EventEmitter = require('events');
const uuid = require('uuid/v4');
const dev = true;
let XHR;
class HTTPConnection extends EventEmitter {
    constructor(_XHR, url, options){
        super();
        XHR = _XHR;
        this.connected = false;
        this.subscriptions = false;
        this.status = 'loading';
        this.url = url;
        this.pollId = uuid();
        setTimeout(()=>this.create()
        , 0);
    }
    create() {
        if (!XHR) return this.emit('error', new Error('No HTTP transport available'));
        this.on('error', ()=>{
            if (this.connected) this.close();
        });
        this.init();
    }
    init() {
        this.send({
            jsonrpc: '2.0',
            method: 'eth_syncing',
            params: [],
            id: 1
        }, (err1, response)=>{
            if (err1) return this.emit('error', err1);
            this.send({
                jsonrpc: '2.0',
                id: 1,
                method: 'eth_pollSubscriptions',
                params: [
                    this.pollId,
                    'immediate'
                ]
            }, (err, response)=>{
                if (!err) {
                    this.subscriptions = true;
                    this.pollSubscriptions();
                }
                this.connected = true;
                this.emit('connect');
            });
        });
    }
    pollSubscriptions() {
        this.send({
            jsonrpc: '2.0',
            id: 1,
            method: 'eth_pollSubscriptions',
            params: [
                this.pollId
            ]
        }, (err, result)=>{
            if (err) {
                this.subscriptionTimeout = setTimeout(()=>this.pollSubscriptions()
                , 10000);
                return this.emit('error', err);
            } else {
                if (!this.closed) this.subscriptionTimeout = this.pollSubscriptions();
                if (result) result.map((p)=>{
                    let parse;
                    try {
                        parse = JSON.parse(p);
                    } catch (e) {
                        parse = false;
                    }
                    return parse;
                }).filter((n)=>n
                ).forEach((p)=>this.emit('payload', p)
                );
            }
        });
    }
    close() {
        if (dev) console.log('Closing HTTP connection');
        this.closed = true;
        this.emit('close');
        clearTimeout(this.subscriptionTimeout);
        this.removeAllListeners();
    }
    filterStatus(res) {
        if (res.status >= 200 && res.status < 300) return res;
        const error = new Error(res.statusText);
        error.res = res;
        throw error.message;
    }
    error(payload, message, code = -1) {
        this.emit('payload', {
            id: payload.id,
            jsonrpc: payload.jsonrpc,
            error: {
                message,
                code
            }
        });
    }
    send(payload, internal) {
        if (this.closed) return this.error(payload, 'Not connected');
        if (payload.method === 'eth_subscribe') {
            if (this.subscriptions) payload.pollId = this.pollId;
            else return this.error(payload, 'Subscriptions are not supported by this HTTP endpoint');
        }
        const xhr = new XHR();
        let responded = false;
        const res = (err, result)=>{
            if (!responded) {
                xhr.abort();
                responded = true;
                if (internal) internal(err, result);
                else {
                    const { id , jsonrpc  } = payload;
                    const load = err ? {
                        id,
                        jsonrpc,
                        error: {
                            message: err.message,
                            code: err.code
                        }
                    } : {
                        id,
                        jsonrpc,
                        result
                    };
                    this.emit('payload', load);
                }
            }
        };
        xhr.open('POST', this.url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.timeout = 60000;
        xhr.onerror = res;
        xhr.ontimeout = res;
        xhr.onreadystatechange = ()=>{
            if (xhr.readyState === 4) try {
                const response = JSON.parse(xhr.responseText);
                res(response.error, response.result);
            } catch (e) {
                res(e);
            }
        };
        xhr.send(JSON.stringify(payload));
    }
}
module.exports = (XHR1)=>(url, options)=>new HTTPConnection(XHR1, url, options)
;

},{"events":"1VQLm","uuid/v4":"nZnAg"}]},["bD74R"], null, "parcelRequiredb79")

//# sourceMappingURL=frame-connector.esm.33d56451.js.map
