module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/next/dist/next-server/lib/constants.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/constants.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PHASE_EXPORT = 'phase-export';
exports.PHASE_PRODUCTION_BUILD = 'phase-production-build';
exports.PHASE_PRODUCTION_SERVER = 'phase-production-server';
exports.PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
exports.PAGES_MANIFEST = 'pages-manifest.json';
exports.BUILD_MANIFEST = 'build-manifest.json';
exports.EXPORT_MARKER = 'export-marker.json';
exports.EXPORT_DETAIL = 'export-detail.json';
exports.PRERENDER_MANIFEST = 'prerender-manifest.json';
exports.ROUTES_MANIFEST = 'routes-manifest.json';
exports.REACT_LOADABLE_MANIFEST = 'react-loadable-manifest.json';
exports.SERVER_DIRECTORY = 'server';
exports.SERVERLESS_DIRECTORY = 'serverless';
exports.CONFIG_FILE = 'next.config.js';
exports.BUILD_ID_FILE = 'BUILD_ID';
exports.BLOCKED_PAGES = ['/_document', '/_app'];
exports.CLIENT_PUBLIC_FILES_PATH = 'public';
exports.CLIENT_STATIC_FILES_PATH = 'static';
exports.CLIENT_STATIC_FILES_RUNTIME = 'runtime';
exports.AMP_RENDER_TARGET = '__NEXT_AMP_RENDER_TARGET__';
exports.CLIENT_STATIC_FILES_RUNTIME_PATH = `${exports.CLIENT_STATIC_FILES_PATH}/${exports.CLIENT_STATIC_FILES_RUNTIME}`; // static/runtime/main.js

exports.CLIENT_STATIC_FILES_RUNTIME_MAIN = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/main.js`; // static/runtime/amp.js

exports.CLIENT_STATIC_FILES_RUNTIME_AMP = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/amp.js`; // static/runtime/webpack.js

exports.CLIENT_STATIC_FILES_RUNTIME_WEBPACK = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/webpack.js`; // static/runtime/polyfills.js

exports.CLIENT_STATIC_FILES_RUNTIME_POLYFILLS = `${exports.CLIENT_STATIC_FILES_RUNTIME_PATH}/polyfills.js`; // matches static/<buildid>/pages/<page>.js

exports.IS_BUNDLED_PAGE_REGEX = /^static[/\\][^/\\]+[/\\]pages.*\.js$/; // matches static/<buildid>/pages/:page*.js

exports.ROUTE_NAME_REGEX = /^static[/\\][^/\\]+[/\\]pages[/\\](.*)\.js$/;
exports.SERVERLESS_ROUTE_NAME_REGEX = /^pages[/\\](.*)\.js$/;
exports.TEMPORARY_REDIRECT_STATUS = 307;
exports.PERMANENT_REDIRECT_STATUS = 308;
exports.STATIC_PROPS_ID = '__N_SSG';
exports.SERVER_PROPS_ID = '__N_SSP';

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/document-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/document-context.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.DocumentContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/utils.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/utils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = __webpack_require__(/*! ../lib/constants */ "./node_modules/next/dist/next-server/lib/constants.js");
function isBlockedPage(pathname) {
    return constants_1.BLOCKED_PAGES.indexOf(pathname) !== -1;
}
exports.isBlockedPage = isBlockedPage;
function cleanAmpPath(pathname) {
    if (pathname.match(/\?amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/\?amp=(y|yes|true|1)&?/, '?');
    }
    if (pathname.match(/&amp=(y|yes|true|1)/)) {
        pathname = pathname.replace(/&amp=(y|yes|true|1)/, '');
    }
    pathname = pathname.replace(/\?$/, '');
    return pathname;
}
exports.cleanAmpPath = cleanAmpPath;


/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.middleware = middleware;
exports.NextScript = exports.Main = exports.Head = exports.Html = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "./node_modules/next/dist/next-server/lib/constants.js");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "./node_modules/next/dist/next-server/lib/document-context.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "./node_modules/next/dist/next-server/server/utils.js");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

async function middleware({
  req,
  res
}) {}

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhancers =  false ? undefined : [];

    const enhanceApp = App => {
      for (const enhancer of enhancers) {
        App = enhancer(App);
      }

      return props => _react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)(), ...( false ? undefined : [])];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(Document, props) {
    return _react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: {
        _documentProps: props,
        // In dev we invalidate the cache by appending a timestamp to the resource URL.
        // This is a workaround to fix https://github.com/zeit/next.js/issues/5860
        // TODO: remove this workaround when https://bugs.webkit.org/show_bug.cgi?id=187726 is fixed.
        _devOnlyInvalidateCacheQueryString: true ? '?ts=' + Date.now() : undefined
      }
    }, _react.default.createElement(Document, props));
  }

  render() {
    return _react.default.createElement(Html, null, _react.default.createElement(Head, null), _react.default.createElement("body", null, _react.default.createElement(Main, null), _react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];
Document.bodyTagsMiddleware =  false ? undefined : () => [];
Document.htmlPropsMiddleware =  false ? undefined : () => [];

class Html extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      htmlProps
    } = this.context._documentProps;
    return _react.default.createElement("html", Object.assign({}, htmlProps, this.props, {
      amp: inAmpMode ? '' : undefined,
      "data-ampdevmode": inAmpMode && true ? '' : undefined
    }));
  }

}

exports.Html = Html;
Html.contextType = _documentContext.DocumentContext;
Html.propTypes = {
  children: _propTypes.default.node.isRequired
};

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const cssFiles = files && files.length ? files.filter(f => /\.css$/.test(f)) : [];
    const cssLinkElements = [];
    cssFiles.forEach(file => {
      cssLinkElements.push(_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return _react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks() {
    const {
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const preloadFiles = files && files.length ? files.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    }) : [];
    return preloadFiles.length === 0 ? null : preloadFiles.map(file => {
      return _react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        as: "script",
        crossOrigin: this.props.crossOrigin || undefined
      });
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      assetPrefix,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const {
      page,
      buildId
    } = __NEXT_DATA__;
    let {
      head
    } = this.context._documentProps;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        const isReactHelmet = child && child.props && child.props['data-react-helmet'];

        if (child && child.type === 'title' && !isReactHelmet) {
          console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => el && el.props && el.props.dangerouslySetInnerHTML && el.props.dangerouslySetInnerHTML.__html; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.map(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    return _react.default.createElement("head", this.props, this.context._documentProps.isDevelopment && this.context._documentProps.hasCssMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), _react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, _react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, _react.default.createElement("meta", {
      name: "next-head-count",
      content: _react.default.Children.count(head || []).toString()
    }), inAmpMode && _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && _react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), _react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && _react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), _react.default.createElement("noscript", null, _react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), _react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && _react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && _react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }), this.getCssLinks(), page !== '/_error' && _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), _react.default.createElement("link", {
      rel: "preload",
      href: assetPrefix + getOptionalModernScriptVariant(encodeURI(`/_next/static/${buildId}/pages/_app.js`)) + _devOnlyInvalidateCacheQueryString,
      as: "script",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    }), this.getPreloadDynamicChunks(), this.getPreloadMainLinks(), this.context._documentProps.isDevelopment && this.context._documentProps.hasCssMode && // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), _react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

class Main extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  render() {
    const {
      inAmpMode,
      html
    } = this.context._documentProps;
    if (inAmpMode) return _constants.AMP_RENDER_TARGET;
    return _react.default.createElement("div", {
      id: "__next",
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  }

}

exports.Main = Main;
Main.contextType = _documentContext.DocumentContext;

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      files
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!/\.js$/.test(bundle.file) || files.includes(bundle.file)) return null;
      return _react.default.createElement("script", Object.assign({
        async: true,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts() {
    const {
      assetPrefix,
      files,
      lowPriorityFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    const normalScripts = files === null || files === void 0 ? void 0 : files.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = lowPriorityFiles === null || lowPriorityFiles === void 0 ? void 0 : lowPriorityFiles.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return _react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        async: true,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      polyfillFiles
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;
    return polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !/\.module\.js$/.test(polyfill)).map(polyfill => _react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${_devOnlyInvalidateCacheQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/zeit/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      staticMarkup,
      assetPrefix,
      inAmpMode,
      devFiles,
      __NEXT_DATA__,
      bodyTags
    } = this.context._documentProps;
    const {
      _devOnlyInvalidateCacheQueryString
    } = this.context;

    if (inAmpMode) {
      if (false) {}

      const devFiles = [_constants.CLIENT_STATIC_FILES_RUNTIME_AMP, _constants.CLIENT_STATIC_FILES_RUNTIME_WEBPACK];
      return _react.default.createElement(_react.default.Fragment, null, staticMarkup ? null : _react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context._documentProps)
        },
        "data-ampdevmode": true
      }), devFiles ? devFiles.map(file => _react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${_devOnlyInvalidateCacheQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })) : null, _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
    }

    const {
      page,
      buildId
    } = __NEXT_DATA__;

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const pageScript = [_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": page,
      key: page,
      src: assetPrefix + encodeURI(`/_next/static/${buildId}/pages${getPageFile(page)}`) + _devOnlyInvalidateCacheQueryString,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    const appScript = [_react.default.createElement("script", Object.assign({
      async: true,
      "data-next-page": "/_app",
      src: assetPrefix + `/_next/static/${buildId}/pages/_app.js` + _devOnlyInvalidateCacheQueryString,
      key: "_app",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    },  false ? undefined : {})),  false && false];
    return _react.default.createElement(_react.default.Fragment, null, devFiles ? devFiles.map(file => !file.match(/\.js\.map/) && _react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${_devOnlyInvalidateCacheQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, staticMarkup ? null : _react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context._documentProps)
      }
    }),  false ? undefined : null, this.getPolyfillScripts(), page !== '/_error' && pageScript, appScript, staticMarkup ? null : this.getDynamicChunks(), staticMarkup ? null : this.getScripts(), _react.default.createElement(_react.default.Fragment, {}, ...(bodyTags || [])));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath ? ampPath : `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

function getPageFile(page, buildId) {
  if (page === '/') {
    return buildId ? `/index.${buildId}.js` : '/index.js';
  }

  return buildId ? `${page}.${buildId}.js` : `${page}.js`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}

/***/ }),

/***/ 2:
/*!***************************************!*\
  !*** multi next/dist/pages/_document ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next/dist/pages/_document */"./node_modules/next/dist/pages/_document.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19kb2N1bWVudC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3BhZ2VzL19kb2N1bWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBIQVNFX0VYUE9SVCA9ICdwaGFzZS1leHBvcnQnO1xuZXhwb3J0cy5QSEFTRV9QUk9EVUNUSU9OX0JVSUxEID0gJ3BoYXNlLXByb2R1Y3Rpb24tYnVpbGQnO1xuZXhwb3J0cy5QSEFTRV9QUk9EVUNUSU9OX1NFUlZFUiA9ICdwaGFzZS1wcm9kdWN0aW9uLXNlcnZlcic7XG5leHBvcnRzLlBIQVNFX0RFVkVMT1BNRU5UX1NFUlZFUiA9ICdwaGFzZS1kZXZlbG9wbWVudC1zZXJ2ZXInO1xuZXhwb3J0cy5QQUdFU19NQU5JRkVTVCA9ICdwYWdlcy1tYW5pZmVzdC5qc29uJztcbmV4cG9ydHMuQlVJTERfTUFOSUZFU1QgPSAnYnVpbGQtbWFuaWZlc3QuanNvbic7XG5leHBvcnRzLkVYUE9SVF9NQVJLRVIgPSAnZXhwb3J0LW1hcmtlci5qc29uJztcbmV4cG9ydHMuRVhQT1JUX0RFVEFJTCA9ICdleHBvcnQtZGV0YWlsLmpzb24nO1xuZXhwb3J0cy5QUkVSRU5ERVJfTUFOSUZFU1QgPSAncHJlcmVuZGVyLW1hbmlmZXN0Lmpzb24nO1xuZXhwb3J0cy5ST1VURVNfTUFOSUZFU1QgPSAncm91dGVzLW1hbmlmZXN0Lmpzb24nO1xuZXhwb3J0cy5SRUFDVF9MT0FEQUJMRV9NQU5JRkVTVCA9ICdyZWFjdC1sb2FkYWJsZS1tYW5pZmVzdC5qc29uJztcbmV4cG9ydHMuU0VSVkVSX0RJUkVDVE9SWSA9ICdzZXJ2ZXInO1xuZXhwb3J0cy5TRVJWRVJMRVNTX0RJUkVDVE9SWSA9ICdzZXJ2ZXJsZXNzJztcbmV4cG9ydHMuQ09ORklHX0ZJTEUgPSAnbmV4dC5jb25maWcuanMnO1xuZXhwb3J0cy5CVUlMRF9JRF9GSUxFID0gJ0JVSUxEX0lEJztcbmV4cG9ydHMuQkxPQ0tFRF9QQUdFUyA9IFsnL19kb2N1bWVudCcsICcvX2FwcCddO1xuZXhwb3J0cy5DTElFTlRfUFVCTElDX0ZJTEVTX1BBVEggPSAncHVibGljJztcbmV4cG9ydHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19QQVRIID0gJ3N0YXRpYyc7XG5leHBvcnRzLkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRSA9ICdydW50aW1lJztcbmV4cG9ydHMuQU1QX1JFTkRFUl9UQVJHRVQgPSAnX19ORVhUX0FNUF9SRU5ERVJfVEFSR0VUX18nO1xuZXhwb3J0cy5DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUEFUSCA9IGAke2V4cG9ydHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19QQVRIfS8ke2V4cG9ydHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FfWA7XG4vLyBzdGF0aWMvcnVudGltZS9tYWluLmpzXG5leHBvcnRzLkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9NQUlOID0gYCR7ZXhwb3J0cy5DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUEFUSH0vbWFpbi5qc2A7XG4vLyBzdGF0aWMvcnVudGltZS9hbXAuanNcbmV4cG9ydHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX0FNUCA9IGAke2V4cG9ydHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1BBVEh9L2FtcC5qc2A7XG4vLyBzdGF0aWMvcnVudGltZS93ZWJwYWNrLmpzXG5leHBvcnRzLkNMSUVOVF9TVEFUSUNfRklMRVNfUlVOVElNRV9XRUJQQUNLID0gYCR7ZXhwb3J0cy5DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfUEFUSH0vd2VicGFjay5qc2A7XG4vLyBzdGF0aWMvcnVudGltZS9wb2x5ZmlsbHMuanNcbmV4cG9ydHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1BPTFlGSUxMUyA9IGAke2V4cG9ydHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1BBVEh9L3BvbHlmaWxscy5qc2A7XG4vLyBtYXRjaGVzIHN0YXRpYy88YnVpbGRpZD4vcGFnZXMvPHBhZ2U+LmpzXG5leHBvcnRzLklTX0JVTkRMRURfUEFHRV9SRUdFWCA9IC9ec3RhdGljWy9cXFxcXVteL1xcXFxdK1svXFxcXF1wYWdlcy4qXFwuanMkLztcbi8vIG1hdGNoZXMgc3RhdGljLzxidWlsZGlkPi9wYWdlcy86cGFnZSouanNcbmV4cG9ydHMuUk9VVEVfTkFNRV9SRUdFWCA9IC9ec3RhdGljWy9cXFxcXVteL1xcXFxdK1svXFxcXF1wYWdlc1svXFxcXF0oLiopXFwuanMkLztcbmV4cG9ydHMuU0VSVkVSTEVTU19ST1VURV9OQU1FX1JFR0VYID0gL15wYWdlc1svXFxcXF0oLiopXFwuanMkLztcbmV4cG9ydHMuVEVNUE9SQVJZX1JFRElSRUNUX1NUQVRVUyA9IDMwNztcbmV4cG9ydHMuUEVSTUFORU5UX1JFRElSRUNUX1NUQVRVUyA9IDMwODtcbmV4cG9ydHMuU1RBVElDX1BST1BTX0lEID0gJ19fTl9TU0cnO1xuZXhwb3J0cy5TRVJWRVJfUFJPUFNfSUQgPSAnX19OX1NTUCc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2ltcG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0U3RhcikgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XG4gICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XG4gICAgcmVzdWx0W1wiZGVmYXVsdFwiXSA9IG1vZDtcbiAgICByZXR1cm4gcmVzdWx0O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFJlYWN0ID0gX19pbXBvcnRTdGFyKHJlcXVpcmUoXCJyZWFjdFwiKSk7XG5leHBvcnRzLkRvY3VtZW50Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHVybF8xID0gcmVxdWlyZShcInVybFwiKTtcbi8qKlxuICogVXRpbHNcbiAqL1xuZnVuY3Rpb24gZXhlY09uY2UoZm4pIHtcbiAgICBsZXQgdXNlZCA9IGZhbHNlO1xuICAgIGxldCByZXN1bHQgPSBudWxsO1xuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICBpZiAoIXVzZWQpIHtcbiAgICAgICAgICAgIHVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzdWx0ID0gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xufVxuZXhwb3J0cy5leGVjT25jZSA9IGV4ZWNPbmNlO1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gICAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvbjtcbiAgICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gO1xufVxuZXhwb3J0cy5nZXRMb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luO1xuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICAgIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uO1xuICAgIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO1xufVxuZXhwb3J0cy5nZXRVUkwgPSBnZXRVUkw7XG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgPyBDb21wb25lbnRcbiAgICAgICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nO1xufVxuZXhwb3J0cy5nZXREaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lO1xuZnVuY3Rpb24gaXNSZXNTZW50KHJlcykge1xuICAgIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50O1xufVxuZXhwb3J0cy5pc1Jlc1NlbnQgPSBpc1Jlc1NlbnQ7XG5hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgY3R4KSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICgoX2EgPSBBcHAucHJvdG90eXBlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKTtcbiAgICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gICAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7XG4gICAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoQXBwKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BzO1xufVxuZXhwb3J0cy5sb2FkR2V0SW5pdGlhbFByb3BzID0gbG9hZEdldEluaXRpYWxQcm9wcztcbmV4cG9ydHMudXJsT2JqZWN0S2V5cyA9IFtcbiAgICAnYXV0aCcsXG4gICAgJ2hhc2gnLFxuICAgICdob3N0JyxcbiAgICAnaG9zdG5hbWUnLFxuICAgICdocmVmJyxcbiAgICAncGF0aCcsXG4gICAgJ3BhdGhuYW1lJyxcbiAgICAncG9ydCcsXG4gICAgJ3Byb3RvY29sJyxcbiAgICAncXVlcnknLFxuICAgICdzZWFyY2gnLFxuICAgICdzbGFzaGVzJyxcbl07XG5mdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwsIG9wdGlvbnMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGV4cG9ydHMudXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdXJsXzEuZm9ybWF0KHVybCwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmZvcm1hdFdpdGhWYWxpZGF0aW9uID0gZm9ybWF0V2l0aFZhbGlkYXRpb247XG5leHBvcnRzLlNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJztcbmV4cG9ydHMuU1QgPSBleHBvcnRzLlNQICYmXG4gICAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vbGliL2NvbnN0YW50c1wiKTtcbmZ1bmN0aW9uIGlzQmxvY2tlZFBhZ2UocGF0aG5hbWUpIHtcbiAgICByZXR1cm4gY29uc3RhbnRzXzEuQkxPQ0tFRF9QQUdFUy5pbmRleE9mKHBhdGhuYW1lKSAhPT0gLTE7XG59XG5leHBvcnRzLmlzQmxvY2tlZFBhZ2UgPSBpc0Jsb2NrZWRQYWdlO1xuZnVuY3Rpb24gY2xlYW5BbXBQYXRoKHBhdGhuYW1lKSB7XG4gICAgaWYgKHBhdGhuYW1lLm1hdGNoKC9cXD9hbXA9KHl8eWVzfHRydWV8MSkvKSkge1xuICAgICAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1xcP2FtcD0oeXx5ZXN8dHJ1ZXwxKSY/LywgJz8nKTtcbiAgICB9XG4gICAgaWYgKHBhdGhuYW1lLm1hdGNoKC8mYW1wPSh5fHllc3x0cnVlfDEpLykpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC8mYW1wPSh5fHllc3x0cnVlfDEpLywgJycpO1xuICAgIH1cbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1xcPyQvLCAnJyk7XG4gICAgcmV0dXJuIHBhdGhuYW1lO1xufVxuZXhwb3J0cy5jbGVhbkFtcFBhdGggPSBjbGVhbkFtcFBhdGg7XG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm1pZGRsZXdhcmU9bWlkZGxld2FyZTtleHBvcnRzLk5leHRTY3JpcHQ9ZXhwb3J0cy5NYWluPWV4cG9ydHMuSGVhZD1leHBvcnRzLkh0bWw9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3Byb3BUeXBlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9zZXJ2ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIikpO3ZhciBfY29uc3RhbnRzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzXCIpO3ZhciBfZG9jdW1lbnRDb250ZXh0PXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvdXRpbHNcIik7ZXhwb3J0cy5Eb2N1bWVudENvbnRleHQ9X3V0aWxzLkRvY3VtZW50Q29udGV4dDtleHBvcnRzLkRvY3VtZW50SW5pdGlhbFByb3BzPV91dGlscy5Eb2N1bWVudEluaXRpYWxQcm9wcztleHBvcnRzLkRvY3VtZW50UHJvcHM9X3V0aWxzLkRvY3VtZW50UHJvcHM7dmFyIF91dGlsczI9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL3NlcnZlci91dGlsc1wiKTt2YXIgX2h0bWxlc2NhcGU9cmVxdWlyZShcIi4uL3NlcnZlci9odG1sZXNjYXBlXCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO31hc3luYyBmdW5jdGlvbiBtaWRkbGV3YXJlKHtyZXEscmVzfSl7fWZ1bmN0aW9uIGRlZHVwZShidW5kbGVzKXtjb25zdCBmaWxlcz1uZXcgU2V0KCk7Y29uc3Qga2VwdD1bXTtmb3IoY29uc3QgYnVuZGxlIG9mIGJ1bmRsZXMpe2lmKGZpbGVzLmhhcyhidW5kbGUuZmlsZSkpY29udGludWU7ZmlsZXMuYWRkKGJ1bmRsZS5maWxlKTtrZXB0LnB1c2goYnVuZGxlKTt9cmV0dXJuIGtlcHQ7fWZ1bmN0aW9uIGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChwYXRoKXtpZihwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC5qcyQvLCcubW9kdWxlLmpzJyk7fXJldHVybiBwYXRoO30vKipcbiAqIGBEb2N1bWVudGAgY29tcG9uZW50IGhhbmRsZXMgdGhlIGluaXRpYWwgYGRvY3VtZW50YCBtYXJrdXAgYW5kIHJlbmRlcnMgb25seSBvbiB0aGUgc2VydmVyIHNpZGUuXG4gKiBDb21tb25seSB1c2VkIGZvciBpbXBsZW1lbnRpbmcgc2VydmVyIHNpZGUgcmVuZGVyaW5nIGZvciBgY3NzLWluLWpzYCBsaWJyYXJpZXMuXG4gKi9jbGFzcyBEb2N1bWVudCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7LyoqXG4gICAqIGBnZXRJbml0aWFsUHJvcHNgIGhvb2sgcmV0dXJucyB0aGUgY29udGV4dCBvYmplY3Qgd2l0aCB0aGUgYWRkaXRpb24gb2YgYHJlbmRlclBhZ2VgLlxuICAgKiBgcmVuZGVyUGFnZWAgY2FsbGJhY2sgZXhlY3V0ZXMgYFJlYWN0YCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseSB0byBzdXBwb3J0IHNlcnZlci1yZW5kZXJpbmcgd3JhcHBlcnNcbiAgICovc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpe2NvbnN0IGVuaGFuY2Vycz1wcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUz9hd2FpdCBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT11bnN0YWJsZS1lbmhhbmNlLWFwcC1zZXJ2ZXIhJykpKS50aGVuKG1vZD0+bW9kLmRlZmF1bHQoY3R4KSk6W107Y29uc3QgZW5oYW5jZUFwcD1BcHA9Pntmb3IoY29uc3QgZW5oYW5jZXIgb2YgZW5oYW5jZXJzKXtBcHA9ZW5oYW5jZXIoQXBwKTt9cmV0dXJuIHByb3BzPT5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KEFwcCxwcm9wcyk7fTtjb25zdHtodG1sLGhlYWR9PWF3YWl0IGN0eC5yZW5kZXJQYWdlKHtlbmhhbmNlQXBwfSk7Y29uc3Qgc3R5bGVzPVsuLi4oMCxfc2VydmVyLmRlZmF1bHQpKCksLi4uKHByb2Nlc3MuZW52Ll9fTkVYVF9QTFVHSU5TP2F3YWl0IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9Pl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoJ25leHQtcGx1Z2luLWxvYWRlcj9taWRkbGV3YXJlPXVuc3RhYmxlLWdldC1zdHlsZXMtc2VydmVyIScpKSkudGhlbihtb2Q9Pm1vZC5kZWZhdWx0KGN0eCkpOltdKV07cmV0dXJue2h0bWwsaGVhZCxzdHlsZXN9O31zdGF0aWMgcmVuZGVyRG9jdW1lbnQoRG9jdW1lbnQscHJvcHMpe3JldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0LlByb3ZpZGVyLHt2YWx1ZTp7X2RvY3VtZW50UHJvcHM6cHJvcHMsLy8gSW4gZGV2IHdlIGludmFsaWRhdGUgdGhlIGNhY2hlIGJ5IGFwcGVuZGluZyBhIHRpbWVzdGFtcCB0byB0aGUgcmVzb3VyY2UgVVJMLlxuLy8gVGhpcyBpcyBhIHdvcmthcm91bmQgdG8gZml4IGh0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMvaXNzdWVzLzU4NjBcbi8vIFRPRE86IHJlbW92ZSB0aGlzIHdvcmthcm91bmQgd2hlbiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTg3NzI2IGlzIGZpeGVkLlxuX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZzpwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJz8nP3RzPScrRGF0ZS5ub3coKTonJ319LF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoRG9jdW1lbnQscHJvcHMpKTt9cmVuZGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSHRtbCxudWxsLF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSGVhZCxudWxsKSxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYm9keVwiLG51bGwsX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChNYWluLG51bGwpLF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTmV4dFNjcmlwdCxudWxsKSkpO319ZXhwb3J0cy5kZWZhdWx0PURvY3VtZW50O0RvY3VtZW50LmhlYWRUYWdzTWlkZGxld2FyZT1wcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUz9Qcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1oZWFkLXRhZ3Mtc2VydmVyIScpKSk6KCk9PltdO0RvY3VtZW50LmJvZHlUYWdzTWlkZGxld2FyZT1wcm9jZXNzLmVudi5fX05FWFRfUExVR0lOUz9Qcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKCduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1ib2R5LXRhZ3Mtc2VydmVyIScpKSk6KCk9PltdO0RvY3VtZW50Lmh0bWxQcm9wc01pZGRsZXdhcmU9cHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlM/UHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZSgnbmV4dC1wbHVnaW4tbG9hZGVyP21pZGRsZXdhcmU9ZG9jdW1lbnQtaHRtbC1wcm9wcy1zZXJ2ZXIhJykpKTooKT0+W107Y2xhc3MgSHRtbCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IoLi4uYXJncyl7c3VwZXIoLi4uYXJncyk7dGhpcy5jb250ZXh0PXZvaWQgMDt9cmVuZGVyKCl7Y29uc3R7aW5BbXBNb2RlLGh0bWxQcm9wc309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO3JldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaHRtbFwiLE9iamVjdC5hc3NpZ24oe30saHRtbFByb3BzLHRoaXMucHJvcHMse2FtcDppbkFtcE1vZGU/Jyc6dW5kZWZpbmVkLFwiZGF0YS1hbXBkZXZtb2RlXCI6aW5BbXBNb2RlJiZwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJz8nJzp1bmRlZmluZWR9KSk7fX1leHBvcnRzLkh0bWw9SHRtbDtIdG1sLmNvbnRleHRUeXBlPV9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0O0h0bWwucHJvcFR5cGVzPXtjaGlsZHJlbjpfcHJvcFR5cGVzLmRlZmF1bHQubm9kZS5pc1JlcXVpcmVkfTtjbGFzcyBIZWFkIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3RvciguLi5hcmdzKXtzdXBlciguLi5hcmdzKTt0aGlzLmNvbnRleHQ9dm9pZCAwO31nZXRDc3NMaW5rcygpe2NvbnN0e2Fzc2V0UHJlZml4LGZpbGVzfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O2NvbnN0IGNzc0ZpbGVzPWZpbGVzJiZmaWxlcy5sZW5ndGg/ZmlsZXMuZmlsdGVyKGY9Pi9cXC5jc3MkLy50ZXN0KGYpKTpbXTtjb25zdCBjc3NMaW5rRWxlbWVudHM9W107Y3NzRmlsZXMuZm9yRWFjaChmaWxlPT57Y3NzTGlua0VsZW1lbnRzLnB1c2goX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmAke2ZpbGV9LXByZWxvYWRgLG5vbmNlOnRoaXMucHJvcHMubm9uY2UscmVsOlwicHJlbG9hZFwiLGhyZWY6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGZpbGUpfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gLGFzOlwic3R5bGVcIixjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSksX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmZpbGUsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJzdHlsZXNoZWV0XCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWAsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0pKTt9KTtyZXR1cm4gY3NzTGlua0VsZW1lbnRzLmxlbmd0aD09PTA/bnVsbDpjc3NMaW5rRWxlbWVudHM7fWdldFByZWxvYWREeW5hbWljQ2h1bmtzKCl7Y29uc3R7ZHluYW1pY0ltcG9ydHMsYXNzZXRQcmVmaXh9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztjb25zdHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfT10aGlzLmNvbnRleHQ7cmV0dXJuIGRlZHVwZShkeW5hbWljSW1wb3J0cykubWFwKGJ1bmRsZT0+ey8vIGBkeW5hbWljSW1wb3J0c2Agd2lsbCBjb250YWluIGJvdGggYC5qc2AgYW5kIGAubW9kdWxlLmpzYCB3aGVuIHRoZVxuLy8gZmVhdHVyZSBpcyBlbmFibGVkLiBUaGlzIGNsYXVzZSB3aWxsIGZpbHRlciBkb3duIHRvIHRoZSBtb2Rlcm5cbi8vIHZhcmlhbnRzIG9ubHkuXG5pZighYnVuZGxlLmZpbGUuZW5kc1dpdGgoZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KCcuanMnKSkpe3JldHVybiBudWxsO31yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwicHJlbG9hZFwiLGtleTpidW5kbGUuZmlsZSxocmVmOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShidW5kbGUuZmlsZSl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWAsYXM6XCJzY3JpcHRcIixub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59KTt9KS8vIEZpbHRlciBvdXQgbnVsbGVkIHNjcmlwdHNcbi5maWx0ZXIoQm9vbGVhbik7fWdldFByZWxvYWRNYWluTGlua3MoKXtjb25zdHthc3NldFByZWZpeCxmaWxlc309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2NvbnN0e19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtjb25zdCBwcmVsb2FkRmlsZXM9ZmlsZXMmJmZpbGVzLmxlbmd0aD9maWxlcy5maWx0ZXIoZmlsZT0+ey8vIGBkeW5hbWljSW1wb3J0c2Agd2lsbCBjb250YWluIGJvdGggYC5qc2AgYW5kIGAubW9kdWxlLmpzYCB3aGVuXG4vLyB0aGUgZmVhdHVyZSBpcyBlbmFibGVkLiBUaGlzIGNsYXVzZSB3aWxsIGZpbHRlciBkb3duIHRvIHRoZVxuLy8gbW9kZXJuIHZhcmlhbnRzIG9ubHkuXG5yZXR1cm4gZmlsZS5lbmRzV2l0aChnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoJy5qcycpKTt9KTpbXTtyZXR1cm4gcHJlbG9hZEZpbGVzLmxlbmd0aD09PTA/bnVsbDpwcmVsb2FkRmlsZXMubWFwKGZpbGU9PntyZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7a2V5OmZpbGUsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxyZWw6XCJwcmVsb2FkXCIsaHJlZjpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWAsYXM6XCJzY3JpcHRcIixjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSk7fSk7fXJlbmRlcigpe2NvbnN0e3N0eWxlcyxhbXBQYXRoLGluQW1wTW9kZSxhc3NldFByZWZpeCxoeWJyaWRBbXAsY2Fub25pY2FsQmFzZSxfX05FWFRfREFUQV9fLGRhbmdlcm91c0FzUGF0aCxoZWFkVGFnc309dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2NvbnN0e19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9PXRoaXMuY29udGV4dDtjb25zdHtwYWdlLGJ1aWxkSWR9PV9fTkVYVF9EQVRBX187bGV0e2hlYWR9PXRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcztsZXQgY2hpbGRyZW49dGhpcy5wcm9wcy5jaGlsZHJlbjsvLyBzaG93IGEgd2FybmluZyBpZiBIZWFkIGNvbnRhaW5zIDx0aXRsZT4gKG9ubHkgaW4gZGV2ZWxvcG1lbnQpXG5pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y2hpbGRyZW49X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLGNoaWxkPT57Y29uc3QgaXNSZWFjdEhlbG1ldD1jaGlsZCYmY2hpbGQucHJvcHMmJmNoaWxkLnByb3BzWydkYXRhLXJlYWN0LWhlbG1ldCddO2lmKGNoaWxkJiZjaGlsZC50eXBlPT09J3RpdGxlJyYmIWlzUmVhY3RIZWxtZXQpe2NvbnNvbGUud2FybihcIldhcm5pbmc6IDx0aXRsZT4gc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uby1kb2N1bWVudC10aXRsZVwiKTt9cmV0dXJuIGNoaWxkO30pO2lmKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pY29uc29sZS53YXJuKCdXYXJuaW5nOiBgSGVhZGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCcpO31sZXQgaGFzQW1waHRtbFJlbD1mYWxzZTtsZXQgaGFzQ2Fub25pY2FsUmVsPWZhbHNlOy8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbmhlYWQ9X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ubWFwKGhlYWR8fFtdLGNoaWxkPT57aWYoIWNoaWxkKXJldHVybiBjaGlsZDtjb25zdHt0eXBlLHByb3BzfT1jaGlsZDtpZihpbkFtcE1vZGUpe2xldCBiYWRQcm9wPScnO2lmKHR5cGU9PT0nbWV0YScmJnByb3BzLm5hbWU9PT0ndmlld3BvcnQnKXtiYWRQcm9wPSduYW1lPVwidmlld3BvcnRcIic7fWVsc2UgaWYodHlwZT09PSdsaW5rJyYmcHJvcHMucmVsPT09J2Nhbm9uaWNhbCcpe2hhc0Nhbm9uaWNhbFJlbD10cnVlO31lbHNlIGlmKHR5cGU9PT0nc2NyaXB0Jyl7Ly8gb25seSBibG9jayBpZlxuLy8gMS4gaXQgaGFzIGEgc3JjIGFuZCBpc24ndCBwb2ludGluZyB0byBhbXBwcm9qZWN0J3MgQ0ROXG4vLyAyLiBpdCBpcyB1c2luZyBkYW5nZXJvdXNseVNldElubmVySFRNTCB3aXRob3V0IGEgdHlwZSBvclxuLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuaWYocHJvcHMuc3JjJiZwcm9wcy5zcmMuaW5kZXhPZignYW1wcHJvamVjdCcpPC0xfHxwcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTCYmKCFwcm9wcy50eXBlfHxwcm9wcy50eXBlPT09J3RleHQvamF2YXNjcmlwdCcpKXtiYWRQcm9wPSc8c2NyaXB0JztPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaChwcm9wPT57YmFkUHJvcCs9YCAke3Byb3B9PVwiJHtwcm9wc1twcm9wXX1cImA7fSk7YmFkUHJvcCs9Jy8+Jzt9fWlmKGJhZFByb3Ape2NvbnNvbGUud2FybihgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvY29uZmxpY3RpbmctYW1wLXRhZ2ApO3JldHVybiBudWxsO319ZWxzZXsvLyBub24tYW1wIG1vZGVcbmlmKHR5cGU9PT0nbGluaycmJnByb3BzLnJlbD09PSdhbXBodG1sJyl7aGFzQW1waHRtbFJlbD10cnVlO319cmV0dXJuIGNoaWxkO30pOy8vIHRyeSB0byBwYXJzZSBzdHlsZXMgZnJvbSBmcmFnbWVudCBmb3IgYmFja3dhcmRzIGNvbXBhdFxuY29uc3QgY3VyU3R5bGVzPUFycmF5LmlzQXJyYXkoc3R5bGVzKT9zdHlsZXM6W107aWYoaW5BbXBNb2RlJiZzdHlsZXMmJi8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuc3R5bGVzLnByb3BzJiYvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbkFycmF5LmlzQXJyYXkoc3R5bGVzLnByb3BzLmNoaWxkcmVuKSl7Y29uc3QgaGFzU3R5bGVzPWVsPT5lbCYmZWwucHJvcHMmJmVsLnByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZlbC5wcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWw7Ly8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG5zdHlsZXMucHJvcHMuY2hpbGRyZW4uZm9yRWFjaChjaGlsZD0+e2lmKEFycmF5LmlzQXJyYXkoY2hpbGQpKXtjaGlsZC5tYXAoZWw9Pmhhc1N0eWxlcyhlbCkmJmN1clN0eWxlcy5wdXNoKGVsKSk7fWVsc2UgaWYoaGFzU3R5bGVzKGNoaWxkKSl7Y3VyU3R5bGVzLnB1c2goY2hpbGQpO319KTt9cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJoZWFkXCIsdGhpcy5wcm9wcyx0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHMuaXNEZXZlbG9wbWVudCYmdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzLmhhc0Nzc01vZGUmJl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJkYXRhLW5leHQtaGlkZS1mb3VjXCI6dHJ1ZSxcImRhdGEtYW1wZGV2bW9kZVwiOmluQW1wTW9kZT8ndHJ1ZSc6dW5kZWZpbmVkLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7ZGlzcGxheTpub25lfWB9fSksX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIse1wiZGF0YS1uZXh0LWhpZGUtZm91Y1wiOnRydWUsXCJkYXRhLWFtcGRldm1vZGVcIjppbkFtcE1vZGU/J3RydWUnOnVuZGVmaW5lZH0sX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIse2Rhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7ZGlzcGxheTpibG9ja31gfX0pKSksY2hpbGRyZW4saGVhZCxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtuYW1lOlwibmV4dC1oZWFkLWNvdW50XCIsY29udGVudDpfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5jb3VudChoZWFkfHxbXSkudG9TdHJpbmcoKX0pLGluQW1wTW9kZSYmX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJ2aWV3cG9ydFwiLGNvbnRlbnQ6XCJ3aWR0aD1kZXZpY2Utd2lkdGgsbWluaW11bS1zY2FsZT0xLGluaXRpYWwtc2NhbGU9MVwifSksIWhhc0Nhbm9uaWNhbFJlbCYmX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwiY2Fub25pY2FsXCIsaHJlZjpjYW5vbmljYWxCYXNlKygwLF91dGlsczIuY2xlYW5BbXBQYXRoKShkYW5nZXJvdXNBc1BhdGgpfSksX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwicHJlbG9hZFwiLGFzOlwic2NyaXB0XCIsaHJlZjpcImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCJ9KSxzdHlsZXMmJl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtcImFtcC1jdXN0b21cIjpcIlwiLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6Y3VyU3R5bGVzLm1hcChzdHlsZT0+c3R5bGUucHJvcHMuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwuX19odG1sKS5qb2luKCcnKS5yZXBsYWNlKC9cXC9cXCojIHNvdXJjZU1hcHBpbmdVUkw9LipcXCpcXC8vZywnJykucmVwbGFjZSgvXFwvXFwqQCBzb3VyY2VVUkw9Lio/XFwqXFwvL2csJycpfX0pLF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtcImFtcC1ib2lsZXJwbGF0ZVwiOlwiXCIsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpgYm9keXstd2Via2l0LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tb3otYW5pbWF0aW9uOi1hbXAtc3RhcnQgOHMgc3RlcHMoMSxlbmQpIDBzIDEgbm9ybWFsIGJvdGg7LW1zLWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoO2FuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RofUAtd2Via2l0LWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1ALW1vei1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tcy1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1vLWtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1Aa2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fWB9fSksX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsbnVsbCxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7XCJhbXAtYm9pbGVycGxhdGVcIjpcIlwiLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6YGJvZHl7LXdlYmtpdC1hbmltYXRpb246bm9uZTstbW96LWFuaW1hdGlvbjpub25lOy1tcy1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZX1gfX0pKSxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2FzeW5jOnRydWUsc3JjOlwiaHR0cHM6Ly9jZG4uYW1wcHJvamVjdC5vcmcvdjAuanNcIn0pKSwhaW5BbXBNb2RlJiZfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsIWhhc0FtcGh0bWxSZWwmJmh5YnJpZEFtcCYmX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwiYW1waHRtbFwiLGhyZWY6Y2Fub25pY2FsQmFzZStnZXRBbXBQYXRoKGFtcFBhdGgsZGFuZ2Vyb3VzQXNQYXRoKX0pLHRoaXMuZ2V0Q3NzTGlua3MoKSxwYWdlIT09Jy9fZXJyb3InJiZfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJwcmVsb2FkXCIsaHJlZjphc3NldFByZWZpeCtnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMke2dldFBhZ2VGaWxlKHBhZ2UpfWApKStfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLGFzOlwic2NyaXB0XCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2lufSksX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwicHJlbG9hZFwiLGhyZWY6YXNzZXRQcmVmaXgrZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50KGVuY29kZVVSSShgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzL19hcHAuanNgKSkrX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyxhczpcInNjcmlwdFwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0pLHRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSx0aGlzLmdldFByZWxvYWRNYWluTGlua3MoKSx0aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHMuaXNEZXZlbG9wbWVudCYmdGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzLmhhc0Nzc01vZGUmJi8vIHRoaXMgZWxlbWVudCBpcyB1c2VkIHRvIG1vdW50IGRldmVsb3BtZW50IHN0eWxlcyBzbyB0aGVcbi8vIG9yZGVyaW5nIG1hdGNoZXMgcHJvZHVjdGlvblxuLy8gKGJ5IGRlZmF1bHQsIHN0eWxlLWxvYWRlciBpbmplY3RzIGF0IHRoZSBib3R0b20gb2YgPGhlYWQgLz4pXG5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIix7aWQ6XCJfX25leHRfY3NzX19ET19OT1RfVVNFX19cIn0pLHN0eWxlc3x8bnVsbCksX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCx7fSwuLi4oaGVhZFRhZ3N8fFtdKSkpO319ZXhwb3J0cy5IZWFkPUhlYWQ7SGVhZC5jb250ZXh0VHlwZT1fZG9jdW1lbnRDb250ZXh0LkRvY3VtZW50Q29udGV4dDtIZWFkLnByb3BUeXBlcz17bm9uY2U6X3Byb3BUeXBlcy5kZWZhdWx0LnN0cmluZyxjcm9zc09yaWdpbjpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nfTtjbGFzcyBNYWluIGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3RvciguLi5hcmdzKXtzdXBlciguLi5hcmdzKTt0aGlzLmNvbnRleHQ9dm9pZCAwO31yZW5kZXIoKXtjb25zdHtpbkFtcE1vZGUsaHRtbH09dGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzO2lmKGluQW1wTW9kZSlyZXR1cm4gX2NvbnN0YW50cy5BTVBfUkVOREVSX1RBUkdFVDtyZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtpZDpcIl9fbmV4dFwiLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6aHRtbH19KTt9fWV4cG9ydHMuTWFpbj1NYWluO01haW4uY29udGV4dFR5cGU9X2RvY3VtZW50Q29udGV4dC5Eb2N1bWVudENvbnRleHQ7Y2xhc3MgTmV4dFNjcmlwdCBleHRlbmRzIF9yZWFjdC5Db21wb25lbnR7Y29uc3RydWN0b3IoLi4uYXJncyl7c3VwZXIoLi4uYXJncyk7dGhpcy5jb250ZXh0PXZvaWQgMDt9Z2V0RHluYW1pY0NodW5rcygpe2NvbnN0e2R5bmFtaWNJbXBvcnRzLGFzc2V0UHJlZml4LGZpbGVzfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O3JldHVybiBkZWR1cGUoZHluYW1pY0ltcG9ydHMpLm1hcChidW5kbGU9PntsZXQgbW9kZXJuUHJvcHM9e307aWYocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCl7bW9kZXJuUHJvcHM9L1xcLm1vZHVsZVxcLmpzJC8udGVzdChidW5kbGUuZmlsZSk/e3R5cGU6J21vZHVsZSd9Ontub01vZHVsZTp0cnVlfTt9aWYoIS9cXC5qcyQvLnRlc3QoYnVuZGxlLmZpbGUpfHxmaWxlcy5pbmNsdWRlcyhidW5kbGUuZmlsZSkpcmV0dXJuIG51bGw7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIixPYmplY3QuYXNzaWduKHthc3luYzp0cnVlLGtleTpidW5kbGUuZmlsZSxzcmM6YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKGJ1bmRsZS5maWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59LG1vZGVyblByb3BzKSk7fSk7fWdldFNjcmlwdHMoKXtjb25zdHthc3NldFByZWZpeCxmaWxlcyxsb3dQcmlvcml0eUZpbGVzfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O2NvbnN0IG5vcm1hbFNjcmlwdHM9ZmlsZXM9PT1udWxsfHxmaWxlcz09PXZvaWQgMD92b2lkIDA6ZmlsZXMuZmlsdGVyKGZpbGU9PmZpbGUuZW5kc1dpdGgoJy5qcycpKTtjb25zdCBsb3dQcmlvcml0eVNjcmlwdHM9bG93UHJpb3JpdHlGaWxlcz09PW51bGx8fGxvd1ByaW9yaXR5RmlsZXM9PT12b2lkIDA/dm9pZCAwOmxvd1ByaW9yaXR5RmlsZXMuZmlsdGVyKGZpbGU9PmZpbGUuZW5kc1dpdGgoJy5qcycpKTtyZXR1cm5bLi4ubm9ybWFsU2NyaXB0cywuLi5sb3dQcmlvcml0eVNjcmlwdHNdLm1hcChmaWxlPT57bGV0IG1vZGVyblByb3BzPXt9O2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQpe21vZGVyblByb3BzPWZpbGUuZW5kc1dpdGgoJy5tb2R1bGUuanMnKT97dHlwZTonbW9kdWxlJ306e25vTW9kdWxlOnRydWV9O31yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLE9iamVjdC5hc3NpZ24oe2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoZmlsZSl9JHtfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nfWAsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxhc3luYzp0cnVlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59LG1vZGVyblByb3BzKSk7fSk7fWdldFBvbHlmaWxsU2NyaXB0cygpey8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuLy8gSXQgYWxzbyBoYXMgdG8gYmUgdGhlIGZpcnN0IHNjcmlwdCB0byBsb2FkXG5jb25zdHthc3NldFByZWZpeCxwb2x5ZmlsbEZpbGVzfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O3JldHVybiBwb2x5ZmlsbEZpbGVzLmZpbHRlcihwb2x5ZmlsbD0+cG9seWZpbGwuZW5kc1dpdGgoJy5qcycpJiYhL1xcLm1vZHVsZVxcLmpzJC8udGVzdChwb2x5ZmlsbCkpLm1hcChwb2x5ZmlsbD0+X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtrZXk6cG9seWZpbGwsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2luLG5vTW9kdWxlOnRydWUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gfSkpO31zdGF0aWMgZ2V0SW5saW5lU2NyaXB0U291cmNlKGRvY3VtZW50UHJvcHMpe2NvbnN0e19fTkVYVF9EQVRBX199PWRvY3VtZW50UHJvcHM7dHJ5e2NvbnN0IGRhdGE9SlNPTi5zdHJpbmdpZnkoX19ORVhUX0RBVEFfXyk7cmV0dXJuKDAsX2h0bWxlc2NhcGUuaHRtbEVzY2FwZUpzb25TdHJpbmcpKGRhdGEpO31jYXRjaChlcnIpe2lmKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NpcmN1bGFyIHN0cnVjdHVyZScpKXt0aHJvdyBuZXcgRXJyb3IoYENpcmN1bGFyIHN0cnVjdHVyZSBpbiBcImdldEluaXRpYWxQcm9wc1wiIHJlc3VsdCBvZiBwYWdlIFwiJHtfX05FWFRfREFUQV9fLnBhZ2V9XCIuIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9jaXJjdWxhci1zdHJ1Y3R1cmVgKTt9dGhyb3cgZXJyO319cmVuZGVyKCl7Y29uc3R7c3RhdGljTWFya3VwLGFzc2V0UHJlZml4LGluQW1wTW9kZSxkZXZGaWxlcyxfX05FWFRfREFUQV9fLGJvZHlUYWdzfT10aGlzLmNvbnRleHQuX2RvY3VtZW50UHJvcHM7Y29uc3R7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ309dGhpcy5jb250ZXh0O2lmKGluQW1wTW9kZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicpe3JldHVybiBudWxsO31jb25zdCBkZXZGaWxlcz1bX2NvbnN0YW50cy5DTElFTlRfU1RBVElDX0ZJTEVTX1JVTlRJTUVfQU1QLF9jb25zdGFudHMuQ0xJRU5UX1NUQVRJQ19GSUxFU19SVU5USU1FX1dFQlBBQ0tdO3JldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LG51bGwsc3RhdGljTWFya3VwP251bGw6X3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHtpZDpcIl9fTkVYVF9EQVRBX19cIix0eXBlOlwiYXBwbGljYXRpb24vanNvblwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbixkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOk5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dC5fZG9jdW1lbnRQcm9wcyl9LFwiZGF0YS1hbXBkZXZtb2RlXCI6dHJ1ZX0pLGRldkZpbGVzP2RldkZpbGVzLm1hcChmaWxlPT5fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2tleTpmaWxlLHNyYzpgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7X2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZ31gLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbixcImRhdGEtYW1wZGV2bW9kZVwiOnRydWV9KSk6bnVsbCxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LHt9LC4uLihib2R5VGFnc3x8W10pKSk7fWNvbnN0e3BhZ2UsYnVpbGRJZH09X19ORVhUX0RBVEFfXztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodGhpcy5wcm9wcy5jcm9zc09yaWdpbiljb25zb2xlLndhcm4oJ1dhcm5pbmc6IGBOZXh0U2NyaXB0YCBhdHRyaWJ1dGUgYGNyb3NzT3JpZ2luYCBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC9uZXh0LmpzL2RvYy1jcm9zc29yaWdpbi1kZXByZWNhdGVkJyk7fWNvbnN0IHBhZ2VTY3JpcHQ9W19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIixPYmplY3QuYXNzaWduKHthc3luYzp0cnVlLFwiZGF0YS1uZXh0LXBhZ2VcIjpwYWdlLGtleTpwYWdlLHNyYzphc3NldFByZWZpeCtlbmNvZGVVUkkoYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcyR7Z2V0UGFnZUZpbGUocGFnZSl9YCkrX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59LHByb2Nlc3MuZW52Ll9fTkVYVF9NT0RFUk5fQlVJTEQ/e25vTW9kdWxlOnRydWV9Ont9KSkscHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCYmX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLHthc3luYzp0cnVlLFwiZGF0YS1uZXh0LXBhZ2VcIjpwYWdlLGtleTpgJHtwYWdlfS1tb2Rlcm5gLHNyYzphc3NldFByZWZpeCtnZXRPcHRpb25hbE1vZGVyblNjcmlwdFZhcmlhbnQoZW5jb2RlVVJJKGAvX25leHQvc3RhdGljLyR7YnVpbGRJZH0vcGFnZXMke2dldFBhZ2VGaWxlKHBhZ2UpfWApKStfZGV2T25seUludmFsaWRhdGVDYWNoZVF1ZXJ5U3RyaW5nLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbix0eXBlOlwibW9kdWxlXCJ9KV07Y29uc3QgYXBwU2NyaXB0PVtfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsT2JqZWN0LmFzc2lnbih7YXN5bmM6dHJ1ZSxcImRhdGEtbmV4dC1wYWdlXCI6XCIvX2FwcFwiLHNyYzphc3NldFByZWZpeCtgL19uZXh0L3N0YXRpYy8ke2J1aWxkSWR9L3BhZ2VzL19hcHAuanNgK19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmcsa2V5OlwiX2FwcFwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbn0scHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRD97bm9Nb2R1bGU6dHJ1ZX06e30pKSxwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEJiZfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2FzeW5jOnRydWUsXCJkYXRhLW5leHQtcGFnZVwiOlwiL19hcHBcIixzcmM6YXNzZXRQcmVmaXgrYC9fbmV4dC9zdGF0aWMvJHtidWlsZElkfS9wYWdlcy9fYXBwLm1vZHVsZS5qc2ArX2Rldk9ubHlJbnZhbGlkYXRlQ2FjaGVRdWVyeVN0cmluZyxrZXk6XCJfYXBwLW1vZGVyblwiLG5vbmNlOnRoaXMucHJvcHMubm9uY2UsY3Jvc3NPcmlnaW46dGhpcy5wcm9wcy5jcm9zc09yaWdpbnx8cHJvY2Vzcy5jcm9zc09yaWdpbix0eXBlOlwibW9kdWxlXCJ9KV07cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3JlYWN0LmRlZmF1bHQuRnJhZ21lbnQsbnVsbCxkZXZGaWxlcz9kZXZGaWxlcy5tYXAoZmlsZT0+IWZpbGUubWF0Y2goL1xcLmpzXFwubWFwLykmJl9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7a2V5OmZpbGUsc3JjOmAke2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShmaWxlKX0ke19kZXZPbmx5SW52YWxpZGF0ZUNhY2hlUXVlcnlTdHJpbmd9YCxub25jZTp0aGlzLnByb3BzLm5vbmNlLGNyb3NzT3JpZ2luOnRoaXMucHJvcHMuY3Jvc3NPcmlnaW58fHByb2Nlc3MuY3Jvc3NPcmlnaW59KSk6bnVsbCxzdGF0aWNNYXJrdXA/bnVsbDpfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIse2lkOlwiX19ORVhUX0RBVEFfX1wiLHR5cGU6XCJhcHBsaWNhdGlvbi9qc29uXCIsbm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2luLGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOntfX2h0bWw6TmV4dFNjcmlwdC5nZXRJbmxpbmVTY3JpcHRTb3VyY2UodGhpcy5jb250ZXh0Ll9kb2N1bWVudFByb3BzKX19KSxwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEP19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIix7bm9uY2U6dGhpcy5wcm9wcy5ub25jZSxjcm9zc09yaWdpbjp0aGlzLnByb3BzLmNyb3NzT3JpZ2lufHxwcm9jZXNzLmNyb3NzT3JpZ2luLG5vTW9kdWxlOnRydWUsZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpOZXh0U2NyaXB0LnNhZmFyaU5vbW9kdWxlRml4fX0pOm51bGwsdGhpcy5nZXRQb2x5ZmlsbFNjcmlwdHMoKSxwYWdlIT09Jy9fZXJyb3InJiZwYWdlU2NyaXB0LGFwcFNjcmlwdCxzdGF0aWNNYXJrdXA/bnVsbDp0aGlzLmdldER5bmFtaWNDaHVua3MoKSxzdGF0aWNNYXJrdXA/bnVsbDp0aGlzLmdldFNjcmlwdHMoKSxfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9yZWFjdC5kZWZhdWx0LkZyYWdtZW50LHt9LC4uLihib2R5VGFnc3x8W10pKSk7fX1leHBvcnRzLk5leHRTY3JpcHQ9TmV4dFNjcmlwdDtOZXh0U2NyaXB0LmNvbnRleHRUeXBlPV9kb2N1bWVudENvbnRleHQuRG9jdW1lbnRDb250ZXh0O05leHRTY3JpcHQucHJvcFR5cGVzPXtub25jZTpfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLGNyb3NzT3JpZ2luOl9wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmd9O05leHRTY3JpcHQuc2FmYXJpTm9tb2R1bGVGaXg9JyFmdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LHQ9ZS5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO2lmKCEoXCJub01vZHVsZVwiaW4gdCkmJlwib25iZWZvcmVsb2FkXCJpbiB0KXt2YXIgbj0hMTtlLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmVsb2FkXCIsZnVuY3Rpb24oZSl7aWYoZS50YXJnZXQ9PT10KW49ITA7ZWxzZSBpZighZS50YXJnZXQuaGFzQXR0cmlidXRlKFwibm9tb2R1bGVcIil8fCFuKXJldHVybjtlLnByZXZlbnREZWZhdWx0KCl9LCEwKSx0LnR5cGU9XCJtb2R1bGVcIix0LnNyYz1cIi5cIixlLmhlYWQuYXBwZW5kQ2hpbGQodCksdC5yZW1vdmUoKX19KCk7JztmdW5jdGlvbiBnZXRBbXBQYXRoKGFtcFBhdGgsYXNQYXRoKXtyZXR1cm4gYW1wUGF0aD9hbXBQYXRoOmAke2FzUGF0aH0ke2FzUGF0aC5pbmNsdWRlcygnPycpPycmJzonPyd9YW1wPTFgO31mdW5jdGlvbiBnZXRQYWdlRmlsZShwYWdlLGJ1aWxkSWQpe2lmKHBhZ2U9PT0nLycpe3JldHVybiBidWlsZElkP2AvaW5kZXguJHtidWlsZElkfS5qc2A6Jy9pbmRleC5qcyc7fXJldHVybiBidWlsZElkP2Ake3BhZ2V9LiR7YnVpbGRJZH0uanNgOmAke3BhZ2V9LmpzYDt9IiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5odG1sRXNjYXBlSnNvblN0cmluZz1odG1sRXNjYXBlSnNvblN0cmluZzsvLyBUaGlzIHV0aWxpdHkgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZVxuLy8gTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL3plcnRvc2gvaHRtbGVzY2FwZS9ibG9iLzA1MjdjYTcxNTZhNTI0ZDI1NjEwMWJiMzEwYTlmOTcwZjYzMDc4YWQvTElDRU5TRVxuY29uc3QgRVNDQVBFX0xPT0tVUD17JyYnOidcXFxcdTAwMjYnLCc+JzonXFxcXHUwMDNlJywnPCc6J1xcXFx1MDAzYycsJ1xcdTIwMjgnOidcXFxcdTIwMjgnLCdcXHUyMDI5JzonXFxcXHUyMDI5J307Y29uc3QgRVNDQVBFX1JFR0VYPS9bJj48XFx1MjAyOFxcdTIwMjldL2c7ZnVuY3Rpb24gaHRtbEVzY2FwZUpzb25TdHJpbmcoc3RyKXtyZXR1cm4gc3RyLnJlcGxhY2UoRVNDQVBFX1JFR0VYLG1hdGNoPT5FU0NBUEVfTE9PS1VQW21hdGNoXSk7fSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7Ozs7OztBQUdBO0FBQUE7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBUEE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBSUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQXRCQTtBQUNBO0FBb0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9