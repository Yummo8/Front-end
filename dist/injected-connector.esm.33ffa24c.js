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
})({"7rcZv":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "84dd90af33ffa24c";
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

},{}],"5F53w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InjectedConnector", ()=>InjectedConnector
);
parcelHelpers.export(exports, "NoEthereumProviderError", ()=>NoEthereumProviderError
);
parcelHelpers.export(exports, "UserRejectedRequestError", ()=>UserRejectedRequestError
);
var _abstractConnector = require("@web3-react/abstract-connector");
var _tinyWarning = require("tiny-warning");
var _tinyWarningDefault = parcelHelpers.interopDefault(_tinyWarning);
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
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
function isNativeReflectConstruct() {
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
    if (isNativeReflectConstruct()) _construct = Reflect.construct;
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
// A type of promise-like that resolves synchronously and supports only one observer
var _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = /*#__PURE__*/ Symbol("Symbol.iterator")) : "@@iterator"; // Asynchronously iterate through an object's values
var _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? Symbol.asyncIterator || (Symbol.asyncIterator = /*#__PURE__*/ Symbol("Symbol.asyncIterator")) : "@@asyncIterator"; // Asynchronously iterate on a value using it's async iterator if present, or its synchronous iterator if missing
function _catch(body, recover) {
    try {
        var result = body();
    } catch (e) {
        return recover(e);
    }
    if (result && result.then) return result.then(void 0, recover);
    return result;
} // Asynchronously await a promise and pass the result to a finally continuation
function parseSendReturn(sendReturn) {
    return sendReturn.hasOwnProperty('result') ? sendReturn.result : sendReturn;
}
var NoEthereumProviderError = /*#__PURE__*/ function(_Error) {
    _inheritsLoose(NoEthereumProviderError1, _Error);
    function NoEthereumProviderError1() {
        var _this;
        _this = _Error.call(this) || this;
        _this.name = _this.constructor.name;
        _this.message = 'No Ethereum provider was found on window.ethereum.';
        return _this;
    }
    return NoEthereumProviderError1;
}(/*#__PURE__*/ _wrapNativeSuper(Error));
var UserRejectedRequestError = /*#__PURE__*/ function(_Error2) {
    _inheritsLoose(UserRejectedRequestError1, _Error2);
    function UserRejectedRequestError1() {
        var _this2;
        _this2 = _Error2.call(this) || this;
        _this2.name = _this2.constructor.name;
        _this2.message = 'The user rejected the request.';
        return _this2;
    }
    return UserRejectedRequestError1;
}(/*#__PURE__*/ _wrapNativeSuper(Error));
var InjectedConnector = /*#__PURE__*/ function(_AbstractConnector) {
    _inheritsLoose(InjectedConnector1, _AbstractConnector);
    function InjectedConnector1(kwargs) {
        var _this3;
        _this3 = _AbstractConnector.call(this, kwargs) || this;
        _this3.handleNetworkChanged = _this3.handleNetworkChanged.bind(_assertThisInitialized(_this3));
        _this3.handleChainChanged = _this3.handleChainChanged.bind(_assertThisInitialized(_this3));
        _this3.handleAccountsChanged = _this3.handleAccountsChanged.bind(_assertThisInitialized(_this3));
        _this3.handleClose = _this3.handleClose.bind(_assertThisInitialized(_this3));
        return _this3;
    }
    var _proto = InjectedConnector1.prototype;
    _proto.handleChainChanged = function handleChainChanged(chainId) {
        console.log("Handling 'chainChanged' event with payload", chainId);
        this.emitUpdate({
            chainId: chainId,
            provider: window.ethereum
        });
    };
    _proto.handleAccountsChanged = function handleAccountsChanged(accounts) {
        console.log("Handling 'accountsChanged' event with payload", accounts);
        if (accounts.length === 0) this.emitDeactivate();
        else this.emitUpdate({
            account: accounts[0]
        });
    };
    _proto.handleClose = function handleClose(code, reason) {
        console.log("Handling 'close' event with payload", code, reason);
        this.emitDeactivate();
    };
    _proto.handleNetworkChanged = function handleNetworkChanged(networkId) {
        console.log("Handling 'networkChanged' event with payload", networkId);
        this.emitUpdate({
            chainId: networkId,
            provider: window.ethereum
        });
    };
    _proto.activate = function activate() {
        try {
            var _temp5 = function _temp5(_result) {
                if (_exit2) return _result;
                function _temp2() {
                    return _extends({
                        provider: window.ethereum
                    }, account ? {
                        account: account
                    } : {});
                }
                var _temp = function() {
                    if (!account) // if enable is successful but doesn't return accounts, fall back to getAccount (not happy i have to do this...)
                    return Promise.resolve(window.ethereum.enable().then(function(sendReturn) {
                        return sendReturn && parseSendReturn(sendReturn)[0];
                    })).then(function(_window$ethereum$enab) {
                        account = _window$ethereum$enab;
                    });
                }();
                // if unsuccessful, try enable
                return _temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp);
            };
            var _exit2 = false;
            var _this5 = this;
            if (!window.ethereum) throw new NoEthereumProviderError();
            if (window.ethereum.on) {
                window.ethereum.on('chainChanged', _this5.handleChainChanged);
                window.ethereum.on('accountsChanged', _this5.handleAccountsChanged);
                window.ethereum.on('close', _this5.handleClose);
                window.ethereum.on('networkChanged', _this5.handleNetworkChanged);
            }
            if (window.ethereum.isMetaMask) window.ethereum.autoRefreshOnNetworkChange = false;
             // try to activate + get account via eth_requestAccounts
            var account;
            var _temp6 = _catch(function() {
                return Promise.resolve(window.ethereum.send('eth_requestAccounts').then(function(sendReturn) {
                    return parseSendReturn(sendReturn)[0];
                })).then(function(_window$ethereum$send) {
                    account = _window$ethereum$send;
                });
            }, function(error) {
                if (error.code === 4001) throw new UserRejectedRequestError();
                _tinyWarningDefault.default(false, 'eth_requestAccounts was unsuccessful, falling back to enable');
            });
            return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(_temp5) : _temp5(_temp6));
        } catch (e) {
            return Promise.reject(e);
        }
    };
    _proto.getProvider = function getProvider() {
        try {
            return Promise.resolve(window.ethereum);
        } catch (e) {
            return Promise.reject(e);
        }
    };
    _proto.getChainId = function getChainId() {
        try {
            var _temp12 = function _temp12() {
                function _temp9() {
                    if (!chainId) try {
                        chainId = parseSendReturn(window.ethereum.send({
                            method: 'net_version'
                        }));
                    } catch (_unused) {
                        _tinyWarningDefault.default(false, 'net_version v2 was unsuccessful, falling back to manual matches and static properties');
                    }
                    if (!chainId) {
                        if (window.ethereum.isDapper) chainId = parseSendReturn(window.ethereum.cachedResults.net_version);
                        else chainId = window.ethereum.chainId || window.ethereum.netVersion || window.ethereum.networkVersion || window.ethereum._chainId;
                    }
                    return chainId;
                }
                var _temp8 = function() {
                    if (!chainId) {
                        var _temp14 = _catch(function() {
                            return Promise.resolve(window.ethereum.send('net_version').then(parseSendReturn)).then(function(_window$ethereum$send3) {
                                chainId = _window$ethereum$send3;
                            });
                        }, function() {
                            _tinyWarningDefault.default(false, 'net_version was unsuccessful, falling back to net version v2');
                        });
                        if (_temp14 && _temp14.then) return _temp14.then(function() {});
                    }
                }();
                return _temp8 && _temp8.then ? _temp8.then(_temp9) : _temp9(_temp8);
            };
            if (!window.ethereum) throw new NoEthereumProviderError();
            var chainId;
            var _temp13 = _catch(function() {
                return Promise.resolve(window.ethereum.send('eth_chainId').then(parseSendReturn)).then(function(_window$ethereum$send2) {
                    chainId = _window$ethereum$send2;
                });
            }, function() {
                _tinyWarningDefault.default(false, 'eth_chainId was unsuccessful, falling back to net_version');
            });
            return Promise.resolve(_temp13 && _temp13.then ? _temp13.then(_temp12) : _temp12(_temp13));
        } catch (e) {
            return Promise.reject(e);
        }
    };
    _proto.getAccount = function getAccount() {
        try {
            var _temp20 = function _temp20() {
                function _temp17() {
                    if (!account) account = parseSendReturn(window.ethereum.send({
                        method: 'eth_accounts'
                    }))[0];
                    return account;
                }
                var _temp16 = function() {
                    if (!account) {
                        var _temp22 = _catch(function() {
                            return Promise.resolve(window.ethereum.enable().then(function(sendReturn) {
                                return parseSendReturn(sendReturn)[0];
                            })).then(function(_window$ethereum$enab2) {
                                account = _window$ethereum$enab2;
                            });
                        }, function() {
                            _tinyWarningDefault.default(false, 'enable was unsuccessful, falling back to eth_accounts v2');
                        });
                        if (_temp22 && _temp22.then) return _temp22.then(function() {});
                    }
                }();
                return _temp16 && _temp16.then ? _temp16.then(_temp17) : _temp17(_temp16);
            };
            if (!window.ethereum) throw new NoEthereumProviderError();
            var account;
            var _temp21 = _catch(function() {
                return Promise.resolve(window.ethereum.send('eth_accounts').then(function(sendReturn) {
                    return parseSendReturn(sendReturn)[0];
                })).then(function(_window$ethereum$send4) {
                    account = _window$ethereum$send4;
                });
            }, function() {
                _tinyWarningDefault.default(false, 'eth_accounts was unsuccessful, falling back to enable');
            });
            return Promise.resolve(_temp21 && _temp21.then ? _temp21.then(_temp20) : _temp20(_temp21));
        } catch (e) {
            return Promise.reject(e);
        }
    };
    _proto.deactivate = function deactivate() {
        if (window.ethereum && window.ethereum.removeListener) {
            window.ethereum.removeListener('chainChanged', this.handleChainChanged);
            window.ethereum.removeListener('accountsChanged', this.handleAccountsChanged);
            window.ethereum.removeListener('close', this.handleClose);
            window.ethereum.removeListener('networkChanged', this.handleNetworkChanged);
        }
    };
    _proto.isAuthorized = function isAuthorized() {
        try {
            if (!window.ethereum) return Promise.resolve(false);
            return Promise.resolve(_catch(function() {
                return Promise.resolve(window.ethereum.send('eth_accounts').then(function(sendReturn) {
                    if (parseSendReturn(sendReturn).length > 0) return true;
                    else return false;
                }));
            }, function() {
                return false;
            }));
        } catch (e) {
            return Promise.reject(e);
        }
    };
    return InjectedConnector1;
}(_abstractConnector.AbstractConnector);

},{"@web3-react/abstract-connector":"gkcsn","tiny-warning":"82vrW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkcsn":[function(require,module,exports) {
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

},{"events":"1VQLm","@web3-react/types":"5JR8V","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7rcZv"], null, "parcelRequiredb79")

//# sourceMappingURL=injected-connector.esm.33ffa24c.js.map
