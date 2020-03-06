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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+E3a":
/***/ (function(module, exports) {



/***/ }),

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "+oT+":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "/3gS":
/***/ (function(module, exports) {



/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "0Oq+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rsk+");
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nXVh");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "pause",
  "use": "pause-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" id=\"pause\"><path d=\"M209.417 62h150.008v900h-150.008v-900z\" p-id=\"11992\" /><path d=\"M659.417 62h149.985v900h-149.985v-900z\" p-id=\"11993\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "153H":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PROJECT_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return WEBSITE_TITLE; });
/* unused harmony export TITLE */
/* unused harmony export TITLE_ENTRY */
/* unused harmony export TITLE_OUT */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SVG_DEFAULT_COLOR; });
/* unused harmony export CONSOLE_TEXT */
/* unused harmony export CONSOLE_BGS */
/* unused harmony export SELF_SHEET_INFO */
/* unused harmony export DEFAULT_BLOG_DETAIL */
/* unused harmony export MUSIC_SHEET_DEFAULT_LIMIT */
/* unused harmony export MUSIC_SHEET_TRANSITION_DURATION */
/* unused harmony export MUSIC_SEARCH_DEFAULT_LIMIT */
/* unused harmony export BLOG_LIST_DEFAULT_LIMIT */
/* unused harmony export INTER_LINK_DEFAULT_LIMIT */
/* unused harmony export BLOG_TAGS_ALL_INFO */
/* unused harmony export MUSIC_RANK_TYPE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COPY_RIGHT_CONFIG; });
const PROJECT_NAME = 'react-next-web';
const WEBSITE_TITLE = 'D.w';
const TITLE = '未曾遗忘的青春 | web前端_技术分享_戴伟的个人网站';
const TITLE_ENTRY = 'ヽ(✿ﾟ▽ﾟ)ノ 欢迎回来';
const TITLE_OUT = 'w(ﾟДﾟ)w 你走了 呜啊啊';
const SVG_DEFAULT_COLOR = 'green';
const CONSOLE_TEXT = '    R E A C T - W E B S I T E    ';
const CONSOLE_BGS = ['#a18cd1', '#fbc2eb'];
const SELF_SHEET_INFO = {
  id: 2179377798,
  name: '程序员必备，带上耳机代码就是全世界'
};
const DEFAULT_BLOG_DETAIL = {
  detail: {
    id: '',
    name: '',
    readCount: '',
    editDate: '',
    createDate: '',
    content: '',
    tagLists: [{
      id: '',
      name: ''
    }]
  },
  next: {
    id: null,
    name: null
  },
  prev: {
    id: null,
    name: null
  }
};
const MUSIC_SHEET_DEFAULT_LIMIT = 30;
const MUSIC_SHEET_TRANSITION_DURATION = MUSIC_SHEET_DEFAULT_LIMIT * 200 / 2;
const MUSIC_SEARCH_DEFAULT_LIMIT = 20;
const BLOG_LIST_DEFAULT_LIMIT = 12;
const INTER_LINK_DEFAULT_LIMIT = 12;
const BLOG_TAGS_ALL_INFO = {
  id: '',
  name: '全部'
}; // 排行榜信息

const MUSIC_RANK_TYPE = {
  '0': '云音新歌榜',
  '1': '云音热歌榜',
  '2': '网易原创歌曲榜',
  '3': '云音乐飙升榜',
  '4': '云音乐电音榜',
  '5': 'UK排行榜周榜',
  '6': '美国Billboard周榜',
  '7': 'KTV嗨榜',
  '8': 'iTunes榜',
  '10': '日本Oricon周榜',
  '12': '韩国Mnet排行榜周榜',
  '17': '华语金曲榜',
  '22': '云音乐ACG音乐榜'
}; // copyright 配置

const COPY_RIGHT_CONFIG = [{
  name: 'd-utils',
  to: 'https://d-utils.daiwei.site'
} // , {
//   name: '友情链接',
//   to: '/interlink'
// }
];

/***/ }),

/***/ "1dyp":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rsk+");
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nXVh");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "creat",
  "use": "creat-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" id=\"creat\"><path d=\"M704 111.04V38.29333333H320v72.74666667H90.66666667v874.66666667h404.16v-53.33333334H144v-768h176v65.92h384v-65.92h176V550.4h53.33333333V111.04H704z m-53.33333333 65.92H373.33333333v-85.33333333h277.33333334v85.33333333zM272 526.72h298.66666667v53.33333333H272v-53.33333333z m480-107.41333333H272v-53.33333334h480v53.33333334z m5.33333333 337.06666666h176v53.33333334H757.33333333v176h-53.33333333v-176H528v-53.33333334h176v-176h53.33333333v176z\" p-id=\"1973\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


/***/ }),

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__("+oT+"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _utils = __webpack_require__("p8BD");

exports.AppInitialProps = _utils.AppInitialProps;

var _router = __webpack_require__("nOHt");
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/


function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    let {
      Component,
      ctx
    } = _ref;
    const pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  getChildContext() {
    return {
      router: (0, _router.makePublicRouterInstance)(this.props.router)
    };
  } // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level


  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps
    } = this.props;
    const url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.childContextTypes = {
  router: _propTypes.default.object
};
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "BYIc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rsk+");
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nXVh");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "play",
  "use": "play-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" id=\"play\"><path d=\"M917.8112 450.4064L160.5888 8.5504C151.3728 3.1744 141.824 0 130.944 0 101.2736 0 77.0816 24.0128 77.0816 53.3248H76.8v917.3504h0.256C77.056 999.9872 101.2992 1024 130.944 1024c11.1616 0 20.4032-3.7376 30.464-9.0624l756.4288-441.344A79.3344 79.3344 0 0 0 947.2 512c0-24.8064-11.4176-46.6688-29.3888-61.5936z\" p-id=\"9414\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "NLF9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rsk+");
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nXVh");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "menu",
  "use": "menu-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" id=\"menu\"><path d=\"M51.2 56.32h921.6c28.27776 0 51.2 22.92224 51.2 51.2s-22.92224 51.2-51.2 51.2H51.2C22.92224 158.72 0 135.79776 0 107.52s22.92224-51.2 51.2-51.2z m0 399.36h921.6c28.27776 0 51.2 22.92224 51.2 51.2s-22.92224 51.2-51.2 51.2H51.2c-28.27776 0-51.2-22.92224-51.2-51.2s22.92224-51.2 51.2-51.2z m0 399.36h921.6c28.27776 0 51.2 22.92224 51.2 51.2s-22.92224 51.2-51.2 51.2H51.2c-28.27776 0-51.2-22.92224-51.2-51.2s22.92224-51.2 51.2-51.2z\" p-id=\"8537\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SSLj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rsk+");
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nXVh");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "close",
  "use": "close-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" id=\"close\"><defs><style type=\"text/css\"></style></defs><path d=\"M583.5 512.8L944 152.3c19.4-19.4 19.4-51.3 0-70.7-19.4-19.4-51.3-19.4-70.7 0L512.8 442.1 150.7 80C131.3 60.6 99.5 60.6 80 80c-19.4 19.4-19.4 51.3 0 70.7l362.1 362.1-362 362c-19.4 19.4-19.4 51.3 0 70.7 19.4 19.4 51.3 19.4 70.7 0l362-362L873.3 944c19.4 19.4 51.3 19.4 70.7 0 19.4-19.4 19.4-51.3 0-70.7L583.5 512.8z\" p-id=\"2376\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Wbvx":
/***/ (function(module, exports) {



/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YCzx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rsk+");
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nXVh");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "tag",
  "use": "tag-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" id=\"tag\"><path d=\"M499.73107 797.412378c-2.839675 1.13894-6.279007 1.719154-9.698896 1.719154l0 0 0 0c-7.398504 0-13.677511-2.859118-18.237363-7.41897l0 0c-4.558829-4.557806-7.399527-11.417027-7.399527-18.255783l0 0 0 0c0-3.419889 0.560772-6.859221 1.700735-9.698896l0 0c1.139963-3.419889 3.419889-6.279007 5.698792-8.558933l0 0 80.369446-80.464613 0 0c2.278903-2.279926 5.13802-4.559852 8.556886-5.698792 2.839675-1.140986 6.259564-2.28095 9.679453-2.28095 7.417947 0 13.677511 3.419889 18.237363 7.979742 4.558829 4.559852 7.417947 10.837836 7.417947 18.256806 0 3.438309-0.559748 6.858198-1.700735 9.698896l0 0c-1.158383 3.438309-3.437286 6.279007-5.717212 8.55791l0 0-80.350003 80.464613 0 0C506.010077 793.992489 503.149936 795.711644 499.73107 797.412378L499.73107 797.412378zM113.826953 521.242502l376.204198 376.61045 284.998963-285.308001L398.826939 235.365542 128.085702 235.365542c-3.979638 0-7.41897 1.710968-10.258645 4.570085l0 0c-2.840698 2.279926-4.000104 6.268774-4.000104 10.267854L113.826953 521.242502zM419.342182 185.724958c3.439332 1.709945 6.29845 3.418866 8.578376 5.698792l0 0L829.761646 594.289168l0 0c2.840698 2.279926 4.559852 5.119601 5.698792 7.979742l0 0c1.13894 3.419889 2.279926 6.277984 2.279926 10.277064l0 0c0 3.419889-1.139963 6.839779-2.279926 9.698896l0 0c-1.13894 2.860141-2.858094 5.698792-5.698792 8.558933l0 0L508.28898 952.622346l0 0c-2.278903 2.28095-5.13802 4.579295-8.55791 5.719258l0 0c-2.839675 1.139963-6.279007 1.700735-9.698896 1.700735s-6.839779-0.560772-9.67843-1.700735c-3.439332-1.139963-6.277984-3.437286-8.558933-5.719258l0 0L69.374532 550.338167l0-0.560772c-2.279926-2.279926-4.000104-5.13802-5.119601-7.997138-1.720178-3.419889-2.279926-6.279007-2.279926-10.258645L61.975005 250.203482c0-18.266016 7.399527-34.812877 19.376303-46.790676l0 0c11.95938-11.988032 28.497031-19.405979 46.733371-19.405979l0 0L409.663752 184.006827l0 0C413.083641 184.006827 416.503531 184.586019 419.342182 185.724958L419.342182 185.724958zM391.427412 711.24795 391.427412 711.24795c-4.559852-4.559852-7.399527-11.398608-7.399527-18.256806 0-3.419889 0.560772-6.839779 1.700735-10.258645l0 0c1.139963-2.858094 3.419889-5.718235 5.699816-7.997138l19.956517-20.535709c2.278903-2.279926 5.118578-3.999081 8.538467-5.139044 2.859118-1.720178 6.279007-2.28095 9.698896-2.28095l0 0 0 0 0 0c7.41897 0 13.678534 2.861164 18.237363 7.419993l0 0c4.560876 5.13802 7.41897 11.417027 7.41897 18.256806l0 0c0 3.999081-0.580215 6.839779-1.719154 10.277064-1.139963 2.839675-3.419889 5.699816-5.699816 7.980765l0 0-19.936051 20.534685c-2.28095 2.300392-5.139044 4.000104-8.578376 5.718235l0 0c-2.839675 1.139963-6.259564 1.701758-9.67843 1.701758l0 0C402.265248 718.667943 395.986241 715.826222 391.427412 711.24795L391.427412 711.24795zM548.744367 70.456678 950.603875 473.312886l0 0c2.279926 2.278903 4.558829 5.13802 5.697769 8.55791 1.14201 2.849908 1.700735 6.277984 1.700735 9.698896 0 3.429099-0.558725 6.847965-1.700735 9.697873-1.13894 3.429099-3.418866 6.279007-5.697769 8.568143l0 0-60.430324 60.479443 0 0c-2.28095 2.278903-5.120624 3.999081-7.978718 5.697769-3.420913 1.160429-6.839779 1.721201-10.259668 1.721201-6.838755 0-13.677511-2.860141-18.237363-7.41897-4.557806-4.559852-7.416923-11.418051-7.416923-18.257829 0-3.419889 0.577145-6.857175 1.720178-9.698896 1.698688-3.418866 3.418866-6.279007 5.696746-8.556886l0 0 42.173518-42.231847L519.669168 114.968451 248.927931 114.968451l0 0c-3.999081 0-7.978718 1.139963-10.258645 3.988848l0 0c-2.859118 2.859118-4.558829 6.279007-4.558829 10.278087 0 6.838755-2.859118 13.68672-7.41897 18.256806-4.558829 4.559852-10.81737 7.41897-18.237363 7.41897-6.838755 0-13.678534-2.859118-18.237363-7.41897-4.558829-4.569062-7.417947-11.418051-7.417947-18.256806l0 0c0-18.266016 7.417947-34.8139 19.396769-46.791699l0 0c11.958356-11.988032 28.496008-19.405979 46.732347-19.405979l0 0 281.018302 0 0 0c3.979638 0 6.838755 0.569982 10.258645 2.279926 2.838651 1.149173 5.697769 2.859118 7.978718 5.13802L548.744367 70.455655zM499.73107 635.941823c-2.839675 1.699712-6.279007 2.279926-9.698896 2.279926l0 0 0 0c-7.398504 0-13.677511-2.860141-18.237363-7.417947-4.558829-4.559852-7.399527-11.418051-7.399527-18.257829l0 0 0 0c0-3.419889 0.560772-6.857175 1.700735-10.277064 1.139963-2.860141 3.419889-5.699816 5.698792-7.979742l0 0 39.894615-40.512692 0.579191 0c2.28095-2.299369 5.119601-3.999081 7.977695-5.718235 3.419889-1.13894 6.260587-1.700735 9.699919-1.700735l0.559748 0 0 0c6.838755 0 13.117762 2.839675 17.677615 7.41897l0.560772 0c4.558829 4.558829 7.417947 11.398608 7.417947 18.256806l0 0c0 3.419889-0.579191 6.839779-2.28095 9.697873-1.139963 3.419889-2.859118 6.28003-5.13802 8.559956l-40.455387 40.512692C506.010077 633.081683 503.149936 634.80186 499.73107 635.941823L499.73107 635.941823zM238.669286 380.869451c2.279926 2.859118 6.259564 4.569062 10.258645 4.569062l0 0 0 0c3.999081 0 7.399527-1.709945 9.679453-4.569062 2.859118-2.279926 4.559852-6.279007 4.559852-10.267854l0 0 0 0 0 0 0 0c0-4.000104-1.700735-7.41897-4.559852-10.267854-2.279926-2.289136-5.680373-4.000104-9.679453-4.000104l0 0c-3.999081 0-7.978718 1.709945-10.258645 4.000104-2.859118 2.848884-4.558829 6.26775-4.558829 10.267854C234.110457 374.590444 235.809145 378.589524 238.669286 380.869451L238.669286 380.869451zM202.19456 323.808874c11.958356-11.976776 28.496008-19.396769 46.732347-19.396769l0 0c18.237363 0 34.755572 7.41897 46.733371 19.396769 11.398608 11.989055 18.816554 28.534893 18.816554 46.792723 0 18.256806-7.41897 34.802644-18.816554 46.790676-11.978822 11.977799-28.497031 19.397792-46.733371 19.397792l0 0c-18.237363 0-34.773991-7.41897-46.732347-19.397792l0 0c-11.978822-11.988032-19.396769-28.53387-19.396769-46.790676l0 0C182.798814 352.34479 190.216761 335.797929 202.19456 323.808874L202.19456 323.808874z\" p-id=\"4524\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("hfKm");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    define_property_default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./assets/svg/index.ts
const requireAll = requireContext => requireContext.keys().map(requireContext);

const req = __webpack_require__("h9kw");

requireAll(req);
/* harmony default export */ var svg = (req);
// EXTERNAL MODULE: ./style/index.less
var style = __webpack_require__("+E3a");

// EXTERNAL MODULE: ./components/Nav/nav.less
var nav = __webpack_require__("Wbvx");

// EXTERNAL MODULE: ./constance/index.ts
var constance = __webpack_require__("153H");

// CONCATENATED MODULE: ./components/Nav/index.tsx
var __jsx = external_react_default.a.createElement;



 // import Theme from '@components/Theme'

const Nav = () => {
  const classString = external_classnames_default()({
    [`${constance["b" /* PROJECT_NAME */]}-nav`]: true
  });
  return __jsx("nav", {
    className: classString
  }, __jsx("div", {
    className: "nav-content"
  }, __jsx("div", {
    className: "nav-logo"
  }, __jsx("h2", {
    className: "nav-title"
  }, constance["d" /* WEBSITE_TITLE */]))));
};

/* harmony default export */ var components_Nav = (Nav);
// EXTERNAL MODULE: ./components/CopyRight/copy-right.less
var copy_right = __webpack_require__("/3gS");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./utils/utils.ts
var utils = __webpack_require__("z1bh");

// CONCATENATED MODULE: ./components/CopyRight/index.tsx
var CopyRight_jsx = external_react_default.a.createElement;





 // import { NextPage } from 'next'

const CopyRight = () => {
  const classString = external_classnames_default()({
    [`${constance["b" /* PROJECT_NAME */]}-comp-copy-right`]: true
  });
  return CopyRight_jsx("footer", {
    className: classString
  }, CopyRight_jsx("span", {
    className: `${classString}-info list`
  }, "\xA9 2016 - ", Object(utils["a" /* formatDate */])('yyyy', new Date()), " from dw"), CopyRight_jsx(external_react_default.a.Fragment, null, constance["a" /* COPY_RIGHT_CONFIG */].map(item => item.to.includes('http') ? CopyRight_jsx("a", {
    className: "list",
    target: "_black",
    key: item.name,
    href: item.to
  }, item.name) : CopyRight_jsx(link_default.a, {
    key: item.name,
    href: item.to
  }, CopyRight_jsx("a", {
    className: "list"
  }, item.name)))));
};

/* harmony default export */ var components_CopyRight = (CopyRight);
// CONCATENATED MODULE: ./pages/_app.tsx

var _app_jsx = external_react_default.a.createElement;








class _app_MyApp extends app_default.a {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "classWrapperString", external_classnames_default()({
      [`react-next-wrapper`]: true,
      [`theme-default`]: true
    }));
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return _app_jsx("div", {
      className: this.classWrapperString,
      id: "dw-next-container"
    }, _app_jsx("div", {
      className: "react-next-content"
    }, _app_jsx("header", null, _app_jsx(components_Nav, null)), _app_jsx("section", null, _app_jsx(Component, pageProps)), _app_jsx(components_CopyRight, null)));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (_app_MyApp);

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "h9kw":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cat.svg": "ycjk",
	"./close.svg": "SSLj",
	"./creat.svg": "1dyp",
	"./logo.svg": "vFpN",
	"./menu.svg": "NLF9",
	"./next.svg": "x3P+",
	"./pause.svg": "0Oq+",
	"./play.svg": "BYIc",
	"./read.svg": "kQsm",
	"./tag.svg": "YCzx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "h9kw";

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "kQsm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rsk+");
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nXVh");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "read",
  "use": "read-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" id=\"read\"><path d=\"M512 127.839597c-282.594193 0-511.978511 280.518928-511.978511 384.160403 0 103.431697 229.384317 382.482181 511.978511 382.482181 282.59931 0 511.391133-276.361235 511.391133-382.482181 0-111.709221-228.791823-384.160403-511.391133-384.160403z m0 703.709253c-244.63158 0-440.161858-259.544221-448.01778-319.54885 7.785314-55.466266 203.242937-320.057433 448.01778-320.057433 247.989047 0 442.430528 262.322497 447.430402 320.057433-6.999414 57.146535-200.227254 319.54885-447.430402 319.54885z\" p-id=\"2840\" /><path d=\"M512.001023 319.644017c-105.913215 0-191.771675 85.85846-191.771674 191.771675S406.087808 703.18839 512.001023 703.18839c105.909122 0 191.771675-85.85846 191.771675-191.771675s-85.862553-191.772698-191.771675-191.772698z m0.01535 320.022641c-70.479191 0-128.231523-57.791218-128.231523-128.270409s57.752332-127.572514 128.231523-127.572513 127.611399 57.094346 127.611399 127.572513-57.132208 128.270409-127.611399 128.270409z\" p-id=\"2841\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "nXVh":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var deepmerge$1 = createCommonjsModule(function (module, exports) {
(function (root, factory) {
    if (false) {} else {
        module.exports = factory();
    }
}(commonjsGlobal, function () {

function isMergeableObject(val) {
    var nonNullObject = val && typeof val === 'object';

    return nonNullObject
        && Object.prototype.toString.call(val) !== '[object RegExp]'
        && Object.prototype.toString.call(val) !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && isMergeableObject(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (isMergeableObject(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (isMergeableObject(target)) {
        Object.keys(target).forEach(function (key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function (key) {
        if (!isMergeableObject(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var array = Array.isArray(source);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var arrayMerge = options.arrayMerge || defaultArrayMerge;

    if (array) {
        return Array.isArray(target) ? arrayMerge(target, source, optionsArgument) : cloneIfNecessary(source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

return deepmerge

}));
});

var namespaces_1 = createCommonjsModule(function (module, exports) {
var namespaces = {
  svg: {
    name: 'xmlns',
    uri: 'http://www.w3.org/2000/svg'
  },
  xlink: {
    name: 'xmlns:xlink',
    uri: 'http://www.w3.org/1999/xlink'
  }
};

exports.default = namespaces;
module.exports = exports.default;
});

/**
 * @param {Object} attrs
 * @return {string}
 */
var objectToAttrsString = function (attrs) {
  return Object.keys(attrs).map(function (attr) {
    var value = attrs[attr].toString().replace(/"/g, '&quot;');
    return (attr + "=\"" + value + "\"");
  }).join(' ');
};

var svg = namespaces_1.svg;
var xlink = namespaces_1.xlink;

var defaultAttrs = {};
defaultAttrs[svg.name] = svg.uri;
defaultAttrs[xlink.name] = xlink.uri;

/**
 * @param {string} [content]
 * @param {Object} [attributes]
 * @return {string}
 */
var wrapInSvgString = function (content, attributes) {
  if ( content === void 0 ) content = '';

  var attrs = deepmerge$1(defaultAttrs, attributes || {});
  var attrsRendered = objectToAttrsString(attrs);
  return ("<svg " + attrsRendered + ">" + content + "</svg>");
};

var svg$1 = namespaces_1.svg;
var xlink$1 = namespaces_1.xlink;

var defaultConfig = {
  attrs: ( obj = {
    style: ['position: absolute', 'width: 0', 'height: 0'].join('; ')
  }, obj[svg$1.name] = svg$1.uri, obj[xlink$1.name] = xlink$1.uri, obj )
};
var obj;

var Sprite = function Sprite(config) {
  this.config = deepmerge$1(defaultConfig, config || {});
  this.symbols = [];
};

/**
 * Add new symbol. If symbol with the same id exists it will be replaced.
 * @param {SpriteSymbol} symbol
 * @return {boolean} `true` - symbol was added, `false` - replaced
 */
Sprite.prototype.add = function add (symbol) {
  var ref = this;
    var symbols = ref.symbols;
  var existing = this.find(symbol.id);

  if (existing) {
    symbols[symbols.indexOf(existing)] = symbol;
    return false;
  }

  symbols.push(symbol);
  return true;
};

/**
 * Remove symbol & destroy it
 * @param {string} id
 * @return {boolean} `true` - symbol was found & successfully destroyed, `false` - otherwise
 */
Sprite.prototype.remove = function remove (id) {
  var ref = this;
    var symbols = ref.symbols;
  var symbol = this.find(id);

  if (symbol) {
    symbols.splice(symbols.indexOf(symbol), 1);
    symbol.destroy();
    return true;
  }

  return false;
};

/**
 * @param {string} id
 * @return {SpriteSymbol|null}
 */
Sprite.prototype.find = function find (id) {
  return this.symbols.filter(function (s) { return s.id === id; })[0] || null;
};

/**
 * @param {string} id
 * @return {boolean}
 */
Sprite.prototype.has = function has (id) {
  return this.find(id) !== null;
};

/**
 * @return {string}
 */
Sprite.prototype.stringify = function stringify () {
  var ref = this.config;
    var attrs = ref.attrs;
  var stringifiedSymbols = this.symbols.map(function (s) { return s.stringify(); }).join('');
  return wrapInSvgString(stringifiedSymbols, attrs);
};

/**
 * @return {string}
 */
Sprite.prototype.toString = function toString () {
  return this.stringify();
};

Sprite.prototype.destroy = function destroy () {
  this.symbols.forEach(function (s) { return s.destroy(); });
};

var sprite = new Sprite({ attrs: { id: '__SVG_SPRITE_NODE__' } });

return sprite;

})));


/***/ }),

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rsk+":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

var SpriteSymbol = function SpriteSymbol(ref) {
  var id = ref.id;
  var viewBox = ref.viewBox;
  var content = ref.content;

  this.id = id;
  this.viewBox = viewBox;
  this.content = content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.stringify = function stringify () {
  return this.content;
};

/**
 * @return {string}
 */
SpriteSymbol.prototype.toString = function toString () {
  return this.stringify();
};

SpriteSymbol.prototype.destroy = function destroy () {
    var this$1 = this;

  ['id', 'viewBox', 'content'].forEach(function (prop) { return delete this$1[prop]; });
};

return SpriteSymbol;

})));


/***/ }),

/***/ "vFpN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rsk+");
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nXVh");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "logo",
  "use": "logo-usage",
  "viewBox": "0 0 399 399",
  "content": "<symbol xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 399 399\" id=\"logo\">  <image id=\"logo_image0\" width=\"399\" height=\"399\" x=\"0\" y=\"0\" href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAY8AAAGPCAQAAAAOk5RsAAAABGdBTUEAALGPC/xhBQAAACBjSFJN\nAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAAAmJLR0QA/4ePzL8AAAAJcEhZ\ncwAACxMAAAsTAQCanBgAAAAHdElNRQfjCgwGAxxnwxerAAAY40lEQVR42u2d4ZXbttKGX3/n/g9T\nQegKwltBmArCVHDpCq62gitXELkCcysIXYGpCiJVEKmCSBXw+6FdW7urwYAkyAGp98HJOVmTAocE\nXmKAAcB3LQght/k/awMIiRfKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxAR\nyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHK\ngxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqD\nEBHKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQ\nEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxAR\nyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHK\ngxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqDEBHKgxARyoMQEcqD\nEBHKgxARyoMQkX9ZG7BoMiRXf+1wsjaIdIPyGEqOZxnkAIAUP6m/2eOEi1wOOFA28fKutbZgbiTI\nkCFBDuCXYLluccAOOzTWt0euoTz8yL6lH0a+0h4NGjRsUWKA8nDxLIlwrYQ/e9SosbN+BPcN5XGL\nHDnyCVoKnSMaVHS5rKA8vpM8icKirXBzRI0NDtZm3B+UB3BpLQr8bG2GwhYVKmsj7ov7lkeGHDl+\nszajA0dU2LDbPhX3Ko8CBXKPCEWMnLGhRKbh3uSRoEAxq/biNpTIJNyPPFIUKCLsdvfnjBX7IuNy\nD/JIUKKMvuPdjz1WHPYdj2XLYymulJtPWNPNGoflyqNAgSKCwN4UHFGyDRmDJcojxQrFTEel+vMR\na2sTlsfS5FGiXFT3uwtbFHSywrIceaRYobwTZ0riiIKTGEOyDHncc5vxkjNK1NZGLIe5yyPBCuXd\n9TPcfGA0JBRzXkybYn03Y1Nd+AxQIGGYqzxyrBYfz+gPBRKIOcojx5o9DQUKJAhzk0eJ1UKnh4SG\nAgnAnLrmJdbshHfi3xzmHcZc5EGHqg9nZFyCO4Q5bCKao8FXiqMHP6B+sU8j6Ujs8khRUxoD+Bkb\naxPmTMzySLDB3xy+Hch/UFibMF/i7XuU2DDkFwT2QHoTZ+uRocFniiMQP3CAty8xymONv9jbCMov\ndLD6EZtzlaJm2G8Ezki5FqQ7cbUeBXYUxyj8gJW1CXMkptajxGdrExbNe3bQuxJP61FRHCOztjZg\nfsTSeqzwh7UJdwDbj47E0XqUFMckrK0NmBsxtB4ZmlnGOM5P82Gbp7+vP6Hp+pxmguzp//Knv5LJ\nBiTYfnQiBnnMa7TqeDWp/l3AfFOkyJCO/PmdR5Qj5r447OWxxv+sTVA4Y4cdDtjhgMOLXtJY7+Ls\n6fNt4dtUxj86YS2PFH9bPwKB49OHlF+6SS8dwd9H3jQnQx588+wHzuH1x1oedXQzcrdo3ojimQTN\ni8o6zcadKQqsgq2TPCKdwOaFYCuPHF+tH8AT56evie+cZ1X4z4u/t8gnszDD6tXV+8Iltt7YDuyW\n1rcPYIsH/BsJCmyUalMEqp792KHEj/iI8+CcSsO7mBmWrYdtv2OPBk2HvkOK3Y2ucsixKz8SrLAa\n1Gmne+WNpTw2+K/BVc9oUKPpPOZ0e/h5enkAl/0hh7RkdK88sZTHYeJteY6oO7UX10jDzzbyAIAc\nVe/n94nzd/2wk0eGvya71h4NqgFvTGkI4Wy6D0iCTc82ZP8tbk+c2O2SWE5ylT0q1AODd4nY4uwm\nuQeJE0o0vVbk/4yUk0t8sBu5KkbOf48HvEeGzeCKUIkVsB75Hnxsy3uNZeXWhs8DK3mkI/Y7jvgY\nSBgAnDvB16Pdgz87pNh3/lVubfY8sHKu8lFyPaMa1Md4S+aIi3+JxEE5IX8Vzfe5L+KBlTyy4Dl+\nQRX8bZ44HCtENHepu0B+RsKpiTpWzlUWMK89HvAjihFcnbWjym2j+pL4qXMfJLM2eQ5YySPMmoYz\nHvFvZNiM8iYsnGHL9QhXHEJXgWTWBs8BG3lkAfI44gEpytEGVxPn3oJxtR0Xdp2CfZm1uXPARh7J\nwN9v8TvSkdqMZ2pnPGE14pX7U+GL97mptbFzwEYe+YDfPuI98tGHVFdO9+9TtHOWSm8HK7M2dQ7E\nsVOJL494j3KC4dTM2bM4R9fv+M7Ju12b4+YXkzOfvsdU0gDgHM4FVlEPiVY4ep6ZW5saPzZxj6Tj\n+dtOwsifrpEBAJrOneiNM4Kwjf5zACv8aW3CUoj/w81nrJwVMn1KGZIXU1X6ruvIlVUoK+sHolK/\n2GxIJotw9C0ybOSRdTg3v9ENzp72hEpvdqCPqFH3LPpEaRvi7ZRfs/barzixNjN+bOTh3y08Pr39\nkyc5ZEgdrs8eNepBFdi9xOgYcaf8mpofngtD7M7VT/jHy1U4og4wQ7dQthWKu1P+nRNqj4VSibWZ\n8TOHgV23OC4TS1KsBosjVRyrL1FMYPfDx9LM2sj4ib31cLNFFXAcyT2ce57VBjg1znSvhjOH1uMW\nZ3zCe+QBxbFSpkmuZ+JYPdNYG7AE5iiPPT4gCeBMXZMpXxjZRrS6w4/G2oAlMDfn6lHdy7AflXK8\ntL7xzuysDVgCNvLwC1u9/k012hzdtbLS7mMky2a70FgbsARs5NF1A7g9NiNO5ciVL4zsZxLteE2f\nlxB5gU3fo+5w7hf8imxEcWhx8jk6VhcO1gbMn5jlcRmdKkZ2E9bKO3Ye00huMVe7I8JGHgd8Us44\n4kOQUJ+GNgFxLtNIbnGyNmD+WA3srh1blz3iV6SoJiheH8dqfCusOFgbED9W8jghx+Obf/2CD/gR\n5WSjLtoe559mPf6j2X6wNjB+7OIeJ5RYI3/aEuCE3eRVUZuAGPOiWTIJtmHBg+HKu/t2rAD2TTyY\n46SSMFTKlL05zc/tx87agPi5V3nojlVpbSKx5z7lcR+OVaIcb6wNjJ/7lIfmWG0X4VhlzqPDPwB9\nB9yjPOhYAex5eHF/8tAdq/VCIgKJ8+jO2rw5cH/y0B2rjbWJgcicRw/W5s2Be5OH5ljNYZs3X1Ln\n0Z21eXPA7rvmFiQ4KG3HxwVFyt1F+87avDlwX62H5ljNdeHTLXLlTokH9ySPe3Ks6FoF4X7kkahd\n7nnPz31N7jy6pDsdkfuRh7YqcM4Ln26RO4821ubNg3vpmuf4qpzx+yIi5c+k+Ntx9MgvC/pxH62H\nHgpc2vzc3Hl0Wfc6IvchD82xOi+qUw4AhfNoY23eXLgH5yrDX8oZD4uJlF9I8I/j6JmfLvDlHlqP\nSjm+nGkkzxTOo421efNh+fLQNghdVrTjQuE8WlubNx+W7lyl2N3RNJLne/7befzHBSz1moiltx7a\nNJLj4hwrbdPTR4rDn2XLo1Q+abOMRbNv78lFbW3enFiyc6XPz/2ieOlzpHR+tJkBwU4sufXQPl68\nvGgHAKUnVVubNy+WK49c/XTxUhbNXlMqAdCNtYHzYrnOlfaJnf0iP1zsvuu5O5MJCqTIAeywm2SH\nzXaZad1q5OY2hk/lou953Z5e3M2uTca+5jJbD23kH3hc4GY92lDEnLvlCZob4d3RS3GZfY9KOb7M\nTvlKGYpYWxvYm9vigNq7HMwS5VGo0Y71AqMdmfIB0aPhbvhDqcWJQfm4F16ePPRFs/tFjt9o97S2\nNrA3enB3NJYnD21txxKnIAIrpQrNt+3QX3cjsjR5ZMqnNIHHBU7oztS2QTseL6XSoxqVpY1cNcpb\n9IxsgcHAnTJpP9SYVfIUK2omvDd3JOfXcW1ZVuuhe6mbBYpjo65oWQe4So4a/+ArvuIrDpOFF3PV\nVR4X82BPuJS8Chu95TB+IGnyVKgB0GbwNdK2eZNrOcndVcq9jXz9JbUea9VLXd6AburR5V4PvEaB\n3Y1W+fMkLUg+wTVcmL/9QqV0grdobClpd+pd1wOvsXG0xWPfX2ZdostpPSr1jLW1icHRex1D5wdU\njpHAn0af1Jkrxw8jX9/4u+bh0CPlyxvQXXlMqhgyFJGgVp5q0jG/DABw8t4AO1OO++bTH3MHIYyT\ncVCdjNTcyrBJm53btm27G/RMdcct72Dtdef+1K69fqVZ4H/9nsm6kMMkffq6X3HMJ2XqKF3btm02\n4Aq1mvvJ29bmxq99pqNrjP6crYs5RErVqnJa2ICunzg2A66gDaj651+Ktmq/z5XrN+M/aeuCDpH0\noizNbQyZ9PhO2w6L8fiIw++V43YB3b/VfIL1+M96/iNX+pry+U7Hu0WCxmsWUv8tikqvdRQ++bt3\nTdHIlOPNgLx9MX8XDk1Nq1GY2xgu+XSYfRwXOelR+LZt28ojJy1qsVN+724jT1M8b+viHpr08ZvG\n3MZwyVccu95X8OvV+DxTvUe4UiwZLtDBad7OVeIR6tPPmAvSktK3lL2voG26CgB7j+kkCWp1l7HK\neTxXrlD3vMdOzFseK3U+55fFBAP9xfHQO1xWeVxhj9yj16HnVCm55M6j54k2tDN3GIa4GrojkJpb\nGSZlHoHPC3Xva+jRI9/Nc3xy0krGXbbVNM/dutiHJH34caKHOHry6xG07ZDhXC3K4C8On869VjKa\nNcU0T9664PsnfYbuUoKBhbc4+sfJfVpiP3HoXfK21duOjfPXh6me/Xz7HhuPM07WRgagxJ/eq60/\n9O51aB1p4IzC43nqXXIAeFQnSuaKtVNh/m7sl3RXYBlth0/8+pmq91VWHk8zC2hvquSieQba74Ml\n6+Lvm/Rg4NrcxqEp8bjL7+x6X0eLMPiLQ5dZ2/qELN35NNOVgXUV6Jf0zt/B3MahKfMMAT7fb9Lz\nOj6hxsLTYh98WvVdAGuCJOtK0C/pg5yluY3DUtmhO+7/dr+VNmrufs/Sb6KkT6vudq0OU5aDdTXo\nV3U0Jn2EIyS9yoZ6n+p9uMozJz9H0KftcEdNVlOWhHVF6JOW3XaknZyqYXerv/Frz5x8AoG+ldtV\nvhMPuFhXhu5J7/415jb2T92cqrYdtuhJWxHo+4EZv1m+fq26O6/1tOVhXR26Jh8PNze3su+96QtY\nX1MNuJ5WqX17NH6BwLb1cwLdTlo6bZlYV4muSW/EG3Mb+6Xce1ZVGHHoL5rCMx9fZ9CnZNzd8iH3\n2ytZV4rQRTps+wG7++raGW/bYfuQ6I7VxjMf/8BlPji3dOqSsa4Y3ZLedlTmNnZPfdqNoR+e1Byr\nnWc+foFA35JJYitb66rRJeltx2l2E9j79DeGi0PbF8z3OfrM8n3GJ8f14BwCJ+vq0SUtbzer7uNU\nIcShx1UKr1x8A4Ft6+equfOrLErIuoL4p6V9niDrNKMqpDi0d/7GMx//+IxftMLtqKUWpWRdSfyT\n3naU5jb6pn5d8TDi0Kq170umy1zitVeOh8E5BE/WFcW/Qulth7WNvqmvS9W2bVsPFofWmc6C5HLN\n8A3jzBYnWFcV36S3Hbm5jT4p7zxl5Jpq8PW118za8y66UHrlGWHbMRd56G1HY26jnvr3NkKJQ3OJ\nDp730aX188uzdOaQWJWZdZXxS3pTnpvb6E5pJ1/9FqsAVmhvfZ+n6B8lv1B6WXYYnMMoybra+CUt\nbFabW+hKw6URqoq4W69NgDxec/DK0+U6N5ZlZ111fJK+viM1t1FKIaQxZLGT/3P06/52vZvSI0+3\n65xblp919fFJWtvRmFt4O4WQRtvugs0icz/HwiMHny9SXXPwssvVdlS2ZWhdhfSkryXIzW18m7Ig\n0mjbJli3dK1cJ0RJvKb0yNU1Hd58kpB1NdKT5uvuzC18W42GjVB9ZxPMJm3sT6+G3car2ta37XC9\nRtbWZWldlbSkj7CX5jZeV8Ky1+zbW5yC3pm77dh43Fn3UKaP/a7yPZiXZ/Ty0F2UxNzGS0rbakA0\n/G3VyALa5q7ceqdcHsw9DcgVrXuCS25eppHLQ99Htza38dJmhHKnnu/Kp2r5p6F7f0iV+OCYjr/2\nsMsVz4qhZCOXR/zTELOgbYZvde2W3G3HQf293IK7OuvJILsi2QL2X5Nt5tuHUj2jMbMtRYlS/fxO\nV44oem8jLbFybgq9Un5diR/ifHB8HPPR6xM5sl3rSLYPt9anI/kMJFrYlbarQRMLZUI7VZfkajsa\n5bcbh62uSEo2qHQ1qyZL5gY4kt4tn/oxZqMJI/RI1ffkDuXlPX97aBNHBdfLxb2cNzOve0/J3ADH\nA/RhKmuKdhNsyPZ2hUpHsvzgvKrrl7I4LtNc5G55qVrlWmG/Nq9735K5AT0K55p8ZCuydtVzs4Qu\nrEaz3x03cj091/MvW9fr66Ra5XKsDuY17yqZGyAmv0rZjHT1iyxCj0ndItycqlupcl5Z/p1LHFWL\n1jUoWyk2pfFOQXydzA0Qk2/VrAJ2Z9O2aNdtM4ks2rZtTyPvN+52UMte4nhe6y73wTLFKleMaGNe\n714kcwOE1GW55qFdDZJI3paTiuKZ8fobPtX8JP5q5fzVxWY5YHtQbHJtQhHdXjOxxj3yDuf+hD/w\nB7ZosMNBjRokyABkSJ7+8/2sZVjOWKEa/Sorx7Fa+Hc5zgEA5dNHM4vO+eLpd/915n4a/Zl0Ygny\nuPALfvn2/9ubZ1hJ4S2fJgl7pfjZcbS68W8JNk5xfPxW+XPxnNrx+8z5SvhkGOQVeNdaW3CbUzRV\nOTRbrILHxW9T4rPj6Ls3/5Kidgrqy7c2I8E/wjlnJOLvEzSO/PfIY2s7EOl3zZOFiuOMD8gnEofL\nAQKON87eOcWxv5rik4tnue7NLb7oHCsgVnlk1gaMwkekE/Q3vvOb41jy6q8KfzpfSecX1TcXz2vE\nI9WV8/uWh8leGp2IUx6JtQHBecT7iafZ5c6jP3xrCxKscXD2OACgfFF95bwb4d/dfZotNhM+mQ7E\n2TXPrA0IynS9jWty5fhn5Dggc7Yxzzy86nD/7PGba0rneNXZ6QaaEqc8lsMWa6PxmEw9Q2sxnnl8\n9W7PHefeutcV/nDmX8TY67gQpzwSawOCsMfKcKgyC3YX5aCcK0WGH+Mbzv1OnH2PzNqAwezxAZlp\nwYdZqLW/0VakjvNfnp2gUcSxxXrSp9KROOUxb7b4VQmAjU8WJJfzTcfHlffq6v9LHJyjVVH3Oi7E\n6VzNF7u+xkuSAHmckT9NIfHP+zfUqHBCgcKj/YowEPgSyiMcj9jEOXrfi7MYwHSPW/3mNRYGAB/i\nf1qURwjO2KC6+aadK+fRo/ufjN1PLyiPoRyxRh27k9CZ8PulvOSLukNKFFAeQ3hEFUVPIzQfRr6r\nvccWTVFAefTjiA2qxbUZFz6M7PZEOTf3NpRHV86oZ9Bm7Hrf3djLtM4xR8lfE6c8dsp4uRVbVDPp\nZ5xw7BEYHL9DLg0WR0qcYcGTtQFv2OMB75HPyKFqOv/CVxxHj3OGXSEa4mw9DtYGXLFHhToqi/yo\nvaccXvCvuoeeE1ZmJw7Kw8VchXGh7uRedekuN71c3/2rNSOzINa15rZmfUGNZrbCeMa91vzl/XZZ\nyprja2dbZjRadU2s8qi9pyaEZI8GjbIVzZzwc4M+dp4129W9esRqjuKI1bmaWh5HNGgW0F68psBf\n6p2XPTrxFf7X4eyHWJfK6sTaevTvAHZhj90iZfEdl4N1xgabXm/1BDvP0hnjcz4TEq88Cvw5Us5H\n7LBDg908G/yOFDe/wtRfGhcyNB6bLX0cdI0IiFceXbqWPmxxwOFuRHFNghWKb9PQL45kNThXTSCP\nWM+/VY5ZHkCGzYD4+RZAgxN2OMy/oCIkxfpmbOWMegnSAGKXBwCkKJAhdcrksqfuCTvgSQqNtdl3\nwnPpPNNgt6CRvxnI4zUZkjt0kIgJ85MHIZMR55REQqKA8iBEhPIgRITyIESE8iBEhPIgRITyIESE\n8iBEhPIgRITyIESE8iBEhPIgRITyIESE8iBEhPIgRITyIESE8iBEhPIgRITyIESE8iBEhPIgRITy\nIESE8iBEhPIgRITyIESE8iBEhPIgRITyIESE8iBEhPIgRITyIESE8iBEhPIgRITyIESE8iBEhPIg\nRITyIESE8iBEhPIgRITyIESE8iBEhPIgRITyIESE8iBEhPIgRITyIESE8iBEhPIgRITyIESE8iBE\nhPIgRITyIESE8iBEhPIgRITyIESE8iBEhPIgRITyIESE8iBEhPIgRITyIESE8iBEhPIgRITyIESE\n8iBEhPIgRITyIESE8iBEhPIgRITyIESE8iBEhPIgRITyIESE8iBEhPIgRITyIESE8iBEhPIgRITy\nIESE8iBEhPIgRITyIESE8iBEhPIgRITyIESE8iBEhPIgRITyIESE8iBEhPIgRITyIESE8iBEhPIg\nRITyIESE8iBEhPIgRITyIESE8iBE5P8By4iFxGoTPskAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTkt\nMTAtMTFUMjI6MDM6MjgrMDg6MDBGwNeLAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTEwLTExVDIy\nOjAzOjI4KzA4OjAwN51vNwAAAABJRU5ErkJggg==\"></image>\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "x3P+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rsk+");
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nXVh");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "next",
  "use": "next-usage",
  "viewBox": "0 0 1024 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1024 1024\" xmlns=\"http://www.w3.org/2000/svg\" id=\"next\"><path d=\"M655.706179 465.602819L332.053897 218.588294c-38.414608-29.327534-93.791393-1.929039-93.791392 46.396277v494.029051c0 48.325316 55.376785 75.725617 93.791392 46.398084l323.652282-247.014525c30.602722-23.357989 30.602722-69.436372 0-92.794362zM781.064814 780.798397V451.684117v-164.562559c0-19.628152 5.904521-60.475733-17.057907-75.841215-25.523642-17.068744-59.747828 1.210165-59.747828 31.919454v493.676839c0 19.628152-5.915358 60.473927 17.047069 75.841215 25.532673 17.068744 59.758666-1.211971 59.758666-31.919454z\" p-id=\"12901\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "ycjk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rsk+");
/* harmony import */ var _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nXVh");
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new _node_modules_svg_baker_runtime_symbol_js__WEBPACK_IMPORTED_MODULE_0___default.a({
  "id": "cat",
  "use": "cat-usage",
  "viewBox": "0 0 1082 1024",
  "content": "<symbol class=\"icon\" viewBox=\"0 0 1082 1024\" xmlns=\"http://www.w3.org/2000/svg\" id=\"cat\"><path d=\"M877.714286 1024H204.8A204.8 204.8 0 0 1 0 819.2V424.228571a29.257143 29.257143 0 0 1 29.257143-29.257142h1024a29.257143 29.257143 0 0 1 29.257143 29.257142v394.971429a204.8 204.8 0 0 1-204.8 204.8zM58.514286 453.485714v365.714286a146.285714 146.285714 0 0 0 146.285714 146.285714h672.914286a146.285714 146.285714 0 0 0 146.285714-146.285714V453.485714z\" fill=\"\" p-id=\"3637\" /><path d=\"M321.828571 453.485714H146.285714a29.257143 29.257143 0 0 1-29.257143-29.257143V29.257143a29.257143 29.257143 0 0 1 29.257143-29.257143h175.542857a29.257143 29.257143 0 0 1 29.257143 29.257143v394.971428a29.257143 29.257143 0 0 1-29.257143 29.257143z m-146.285714-58.514285h117.028572V58.514286h-117.028572zM950.857143 453.485714H775.314286a29.257143 29.257143 0 0 1-29.257143-29.257143V29.257143a29.257143 29.257143 0 0 1 29.257143-29.257143h175.542857a29.257143 29.257143 0 0 1 29.257143 29.257143v394.971428a29.257143 29.257143 0 0 1-29.257143 29.257143z m-146.285714-58.514285h117.028571V58.514286h-117.028571zM471.04 438.857143a29.257143 29.257143 0 0 1-28.233143-21.650286L356.790857 96.256a29.257143 29.257143 0 0 1 20.626286-35.84L547.108571 14.628571a29.257143 29.257143 0 0 1 35.693715 20.626286l94.354285 351.085714a29.257143 29.257143 0 0 1-56.612571 14.628572l-86.601143-321.828572-113.078857 30.281143 78.409143 292.571429a29.257143 29.257143 0 0 1-20.626286 35.84 27.940571 27.940571 0 0 1-7.606857 1.024z\" fill=\"\" p-id=\"3638\" /></symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default.a.add(symbol);
/* harmony default export */ __webpack_exports__["default"] = (symbol);

/***/ }),

/***/ "z1bh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return formatDate; });
/* unused harmony export hasClass */
/* unused harmony export addClass */
/* unused harmony export removeClass */
/* unused harmony export setCookie */
/* unused harmony export getCookie */
/* unused harmony export removeCookie */
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("p0XB");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @description 日期格式化 可转换成自己想要的格式
 * @param { String } fmt 格式模板 'yyyy-MM-dd hh:mm:ss'
 * @param { Date } date 日期内容  如 当前日期 new Date()
 * @return { String } '2018-08-15 01:46:22'
 * @example
 * formatDate(`yyyy-MM-dd hh:mm:ss`, new Date())
 * @example
 * formatDate(`yyyy-MM-dd`, new Date())
 */
function formatDate(fmt, date = new Date()) {
  const newDate = new Date(date);
  let o = {
    'M+': newDate.getMonth() + 1,
    'd+': newDate.getDate(),
    'h+': newDate.getHours(),
    'm+': newDate.getMinutes(),
    's+': newDate.getSeconds(),
    'q+': ~~((newDate.getMonth() + 3) / 3),
    'S': newDate.getMilliseconds() // 毫秒

  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (newDate.getFullYear() + '').substr(4 - RegExp.$1.length));
  }

  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }

  return fmt;
}
/**
 * @description 判断元素是否存在某个class类
 * @param { HTMLElement } el dom元素
 * @param { String } className class名称
 * @example
 * hasClass(document.body, 'd-utils')
 */

function hasClass(el, className) {
  return el.classList.contains(className);
}
/**
 * @description 判断元素是否存在某个class类
 * @param { HTMLElement } el dom元素
 * @param { String } className class名称
 * @example
 * hasClass(document.body, 'd-utils')
 */

function addClass(el, className) {
  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(className)) {
    className.forEach(item => {
      if (!hasClass(el, item)) {
        el.classList.add(item);
      }
    });
    return;
  }

  if (!hasClass(el, className)) {
    el.classList.add(className);
  }
}
/**
 * @description 元素删除class
 * @param { HTMLElement } el dom元素
 * @param { (String | Array) } className class名称，可以是多个
 * @example
 * removeClass(document.body, 'd-utils')
 */

function removeClass(el, className) {
  if (_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(className)) {
    className.forEach(item => {
      if (hasClass(el, item)) {
        el.classList.remove(item);
      }
    });
    return;
  }

  if (hasClass(el, className)) {
    el.classList.remove(className);
  }
}
/**
 * @description 设置Cookie
 * @param { String } name cookie名称
 * @param { String } value cooke的值
 * @param { Number } exp 过期时间 默认2小时 单位毫秒
 * @example
 * // 设置name为test的值为12345，设置过期时间为1小时
 * setCookie('test', '12345', 60 * 60 * 1000)
 */

function setCookie(name, value, exp = 60 * 60 * 2 * 1000) {
  const date = new Date();
  date.setTime(date.getTime() + exp);
  document.cookie = `${name}=${escape(value)};expires=${date.toUTCString()}`;
}
/**
 * @description 获取Cookie
 * @param { String } name cookie名称
 * @returns { (Array | Null) } 返回数据
 * @example
 * getCookie('test')
 */

function getCookie(name) {
  if (name) {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    const arr = document.cookie.match(reg);
    return arr && arr[2] ? arr[2] : null;
  }

  const getAllCookies = [];

  if (document.cookie.length) {
    const arrCookie = document.cookie.split('; ');

    for (let k in arrCookie) {
      getAllCookies.push({
        name: `${unescape(arrCookie[k].split('=')[0])}`,
        value: `${unescape(arrCookie[k].split('=')[1])}`
      });
    }

    return getAllCookies;
  } else {
    return null;
  }
}
/**
 * @description 删除Cookie
 * @param { String } name cookie名称 如果不传参数则设置所有cookie过期
 * @returns { Array } 是一个伪数组
 * @example
 * removeCookie('test')
 */

function removeCookie(name) {
  const date = new Date();
  date.setTime(date.getTime() - 1);

  if (name) {
    const cookieInfo = getCookie(name);

    if (cookieInfo !== null) {
      document.cookie = `${name}=${cookieInfo};expires=${date.toUTCString()}`;
    }

    return;
  }

  const allCookies = getCookie();

  for (let k in allCookies) {
    document.cookie = `${allCookies[k].name}=${allCookies[k].value};expires=${date.toUTCString()}`;
  }
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL0VqWnl1czhCdjVaaFFKRlV6aTFOcS9wYWdlcy9fYXBwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtc2VydmVyL2Rpc3QvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0XCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdmcvcGF1c2Uuc3ZnIiwid2VicGFjazovLy8uL2NvbnN0YW5jZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ZnL2NyZWF0LnN2ZyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ZnL3BsYXkuc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N2Zy9tZW51LnN2ZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvaXMtYXJyYXlcIiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ZnL2Nsb3NlLnN2ZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2xpYnJhcnkvZm4vbWFwXCIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N2Zy90YWcuc3ZnIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ZnL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvcHlSaWdodC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N2ZyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC5zdmckIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N2Zy9yZWFkLnN2ZyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNlcnZlci9kaXN0L2xpYi9yb3V0ZXItY29udGV4dFwiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9zcHJpdGUuYnVpbGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9hcnJheS9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNlcnZlci9kaXN0L2xpYi91dGlsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtc2VydmVyL2Rpc3QvbGliL3JvdXRlci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3ZnL2xvZ28uc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9zdmcvbmV4dC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N2Zy9jYXQuc3ZnIiwid2VicGFjazovLy8uL3V0aWxzL3V0aWxzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2VydmVyL2Rpc3QvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0XCIpOyIsInZhciBfUHJvbWlzZSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL3Byb21pc2VcIik7XG5cbmZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBfUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgX1Byb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXdpdGhSb3V0ZXI7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9wcm9wVHlwZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7Y2xhc3MgV2l0aFJvdXRlV3JhcHBlciBleHRlbmRzIF9yZWFjdC5kZWZhdWx0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcigpe3N1cGVyKC4uLmFyZ3VtZW50cyk7dGhpcy5jb250ZXh0PXZvaWQgMDt9cmVuZGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsKDAsX2V4dGVuZHMyLmRlZmF1bHQpKHtyb3V0ZXI6dGhpcy5jb250ZXh0LnJvdXRlcn0sdGhpcy5wcm9wcykpO319V2l0aFJvdXRlV3JhcHBlci5kaXNwbGF5TmFtZT12b2lkIDA7V2l0aFJvdXRlV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9dm9pZCAwO1dpdGhSb3V0ZVdyYXBwZXIuY29udGV4dFR5cGVzPXtyb3V0ZXI6X3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdH07V2l0aFJvdXRlV3JhcHBlci5nZXRJbml0aWFsUHJvcHM9Q29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdCBuYW1lPUNvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lfHxDb21wb3NlZENvbXBvbmVudC5uYW1lfHwnVW5rbm93bic7V2l0aFJvdXRlV3JhcHBlci5kaXNwbGF5TmFtZT1cIndpdGhSb3V0ZXIoXCIrbmFtZStcIilcIjt9cmV0dXJuIFdpdGhSb3V0ZVdyYXBwZXI7fSIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9zeW1ib2wuanNcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL3Nwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwicGF1c2VcIixcbiAgXCJ1c2VcIjogXCJwYXVzZS11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAyNCAxMDI0XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgY2xhc3M9XFxcImljb25cXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDI0IDEwMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgaWQ9XFxcInBhdXNlXFxcIj48cGF0aCBkPVxcXCJNMjA5LjQxNyA2MmgxNTAuMDA4djkwMGgtMTUwLjAwOHYtOTAwelxcXCIgcC1pZD1cXFwiMTE5OTJcXFwiIC8+PHBhdGggZD1cXFwiTTY1OS40MTcgNjJoMTQ5Ljk4NXY5MDBoLTE0OS45ODV2LTkwMHpcXFwiIHAtaWQ9XFxcIjExOTkzXFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiLCJleHBvcnQgY29uc3QgUFJPSkVDVF9OQU1FID0gJ3JlYWN0LW5leHQtd2ViJ1xuZXhwb3J0IGNvbnN0IFdFQlNJVEVfVElUTEUgPSAnRC53J1xuZXhwb3J0IGNvbnN0IFRJVExFID0gJ+acquabvumBl+W/mOeahOmdkuaYpSB8IHdlYuWJjeerr1/mioDmnK/liIbkuqtf5oi05Lyf55qE5Liq5Lq6572R56uZJ1xuZXhwb3J0IGNvbnN0IFRJVExFX0VOVFJZID0gJ+ODvSjinL/vvp/ilr3vvp8p44OOIOasoui/juWbnuadpSdcbmV4cG9ydCBjb25zdCBUSVRMRV9PVVQgPSAndyjvvp/QlO++nyl3IOS9oOi1sOS6hiDlkZzllYrllYonXG5leHBvcnQgY29uc3QgU1ZHX0RFRkFVTFRfQ09MT1IgPSAnZ3JlZW4nXG5leHBvcnQgY29uc3QgQ09OU09MRV9URVhUID0gJyAgICBSIEUgQSBDIFQgLSBXIEUgQiBTIEkgVCBFICAgICdcbmV4cG9ydCBjb25zdCBDT05TT0xFX0JHUyA9IFsnI2ExOGNkMScsICcjZmJjMmViJ11cblxuZXhwb3J0IGNvbnN0IFNFTEZfU0hFRVRfSU5GTyA9IHtcbiAgaWQ6IDIxNzkzNzc3OTgsXG4gIG5hbWU6ICfnqIvluo/lkZjlv4XlpIfvvIzluKbkuIrogLPmnLrku6PnoIHlsLHmmK/lhajkuJbnlYwnXG59XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX0JMT0dfREVUQUlMID0ge1xuICBkZXRhaWw6IHtcbiAgICBpZDogJycsXG4gICAgbmFtZTogJycsXG4gICAgcmVhZENvdW50OiAnJyxcbiAgICBlZGl0RGF0ZTogJycsXG4gICAgY3JlYXRlRGF0ZTogJycsXG4gICAgY29udGVudDogJycsXG4gICAgdGFnTGlzdHM6IFt7XG4gICAgICBpZDogJycsXG4gICAgICBuYW1lOiAnJ1xuICAgIH1dXG4gIH0sXG4gIG5leHQ6IHtcbiAgICBpZDogbnVsbCxcbiAgICBuYW1lOiBudWxsXG4gIH0sXG4gIHByZXY6IHtcbiAgICBpZDogbnVsbCxcbiAgICBuYW1lOiBudWxsXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IE1VU0lDX1NIRUVUX0RFRkFVTFRfTElNSVQgPSAzMFxuZXhwb3J0IGNvbnN0IE1VU0lDX1NIRUVUX1RSQU5TSVRJT05fRFVSQVRJT04gPSBNVVNJQ19TSEVFVF9ERUZBVUxUX0xJTUlUICogMjAwIC8gMlxuXG5leHBvcnQgY29uc3QgTVVTSUNfU0VBUkNIX0RFRkFVTFRfTElNSVQgPSAyMFxuXG5leHBvcnQgY29uc3QgQkxPR19MSVNUX0RFRkFVTFRfTElNSVQgPSAxMlxuXG5leHBvcnQgY29uc3QgSU5URVJfTElOS19ERUZBVUxUX0xJTUlUID0gMTJcblxuZXhwb3J0IGNvbnN0IEJMT0dfVEFHU19BTExfSU5GTyA9IHtcbiAgaWQ6ICcnLFxuICBuYW1lOiAn5YWo6YOoJ1xufVxuXG4vLyDmjpLooYzmppzkv6Hmga9cbmV4cG9ydCBjb25zdCBNVVNJQ19SQU5LX1RZUEU6IGFueSA9IHtcbiAgJzAnOiAn5LqR6Z+z5paw5q2M5qacJyxcbiAgJzEnOiAn5LqR6Z+z54Ot5q2M5qacJyxcbiAgJzInOiAn572R5piT5Y6f5Yib5q2M5puy5qacJyxcbiAgJzMnOiAn5LqR6Z+z5LmQ6aOZ5Y2H5qacJyxcbiAgJzQnOiAn5LqR6Z+z5LmQ55S16Z+z5qacJyxcbiAgJzUnOiAnVUvmjpLooYzmppzlkajmppwnLFxuICAnNic6ICfnvo7lm71CaWxsYm9hcmTlkajmppwnLFxuICAnNyc6ICdLVFbll6jmppwnLFxuICAnOCc6ICdpVHVuZXPmppwnLFxuICAnMTAnOiAn5pel5pysT3JpY29u5ZGo5qacJyxcbiAgJzEyJzogJ+mfqeWbvU1uZXTmjpLooYzmppzlkajmppwnLFxuICAnMTcnOiAn5Y2O6K+t6YeR5puy5qacJyxcbiAgJzIyJzogJ+S6kemfs+S5kEFDR+mfs+S5kOamnCdcbn1cblxuLy8gY29weXJpZ2h0IOmFjee9rlxuZXhwb3J0IGNvbnN0IENPUFlfUklHSFRfQ09ORklHID0gW1xuICB7XG4gICAgbmFtZTogJ2QtdXRpbHMnLFxuICAgIHRvOiAnaHR0cHM6Ly9kLXV0aWxzLmRhaXdlaS5zaXRlJ1xuICB9XG4gIC8vICwge1xuICAvLyAgIG5hbWU6ICflj4vmg4Xpk77mjqUnLFxuICAvLyAgIHRvOiAnL2ludGVybGluaydcbiAgLy8gfVxuXSIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9zeW1ib2wuanNcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL3Nwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiY3JlYXRcIixcbiAgXCJ1c2VcIjogXCJjcmVhdC11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAyNCAxMDI0XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgY2xhc3M9XFxcImljb25cXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDI0IDEwMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgaWQ9XFxcImNyZWF0XFxcIj48cGF0aCBkPVxcXCJNNzA0IDExMS4wNFYzOC4yOTMzMzMzM0gzMjB2NzIuNzQ2NjY2NjdIOTAuNjY2NjY2Njd2ODc0LjY2NjY2NjY3aDQwNC4xNnYtNTMuMzMzMzMzMzRIMTQ0di03NjhoMTc2djY1LjkyaDM4NHYtNjUuOTJoMTc2VjU1MC40aDUzLjMzMzMzMzMzVjExMS4wNEg3MDR6IG0tNTMuMzMzMzMzMzMgNjUuOTJIMzczLjMzMzMzMzMzdi04NS4zMzMzMzMzM2gyNzcuMzMzMzMzMzR2ODUuMzMzMzMzMzN6TTI3MiA1MjYuNzJoMjk4LjY2NjY2NjY3djUzLjMzMzMzMzMzSDI3MnYtNTMuMzMzMzMzMzN6IG00ODAtMTA3LjQxMzMzMzMzSDI3MnYtNTMuMzMzMzMzMzRoNDgwdjUzLjMzMzMzMzM0eiBtNS4zMzMzMzMzMyAzMzcuMDY2NjY2NjZoMTc2djUzLjMzMzMzMzM0SDc1Ny4zMzMzMzMzM3YxNzZoLTUzLjMzMzMzMzMzdi0xNzZINTI4di01My4zMzMzMzMzNGgxNzZ2LTE3Nmg1My4zMzMzMzMzM3YxNzZ6XFxcIiBwLWlkPVxcXCIxOTczXFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiLCJ2YXIgX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpO1xuXG52YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbmV3T2JqID0ge307XG5cbiAgICBpZiAob2JqICE9IG51bGwpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICB2YXIgZGVzYyA9IF9PYmplY3QkZGVmaW5lUHJvcGVydHkgJiYgX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTtcblxuICAgICAgICAgIGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkge1xuICAgICAgICAgICAgX09iamVjdCRkZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcbiAgICByZXR1cm4gbmV3T2JqO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkNvbnRhaW5lcj1Db250YWluZXI7ZXhwb3J0cy5jcmVhdGVVcmw9Y3JlYXRlVXJsO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9hc3luY1RvR2VuZXJhdG9yMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9wcm9wVHlwZXM9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicHJvcC10eXBlc1wiKSk7dmFyIF91dGlscz1yZXF1aXJlKFwibmV4dC1zZXJ2ZXIvZGlzdC9saWIvdXRpbHNcIik7ZXhwb3J0cy5BcHBJbml0aWFsUHJvcHM9X3V0aWxzLkFwcEluaXRpYWxQcm9wczt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vY2xpZW50L3JvdXRlclwiKTsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKF94KXtyZXR1cm4gX2FwcEdldEluaXRpYWxQcm9wcy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7fWZ1bmN0aW9uIF9hcHBHZXRJbml0aWFsUHJvcHMoKXtfYXBwR2V0SW5pdGlhbFByb3BzPSgwLF9hc3luY1RvR2VuZXJhdG9yMi5kZWZhdWx0KShmdW5jdGlvbiooX3JlZil7bGV0e0NvbXBvbmVudCxjdHh9PV9yZWY7Y29uc3QgcGFnZVByb3BzPXlpZWxkKDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O30pO3JldHVybiBfYXBwR2V0SW5pdGlhbFByb3BzLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt9Y2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50e2dldENoaWxkQ29udGV4dCgpe3JldHVybntyb3V0ZXI6KDAsX3JvdXRlci5tYWtlUHVibGljUm91dGVySW5zdGFuY2UpKHRoaXMucHJvcHMucm91dGVyKX07fS8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4vLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsX2Vycm9ySW5mbyl7dGhyb3cgZXJyb3I7fXJlbmRlcigpe2NvbnN0e3JvdXRlcixDb21wb25lbnQscGFnZVByb3BzfT10aGlzLnByb3BzO2NvbnN0IHVybD1jcmVhdGVVcmwocm91dGVyKTtyZXR1cm4gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsKDAsX2V4dGVuZHMyLmRlZmF1bHQpKHt9LHBhZ2VQcm9wcyx7dXJsOnVybH0pKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLmNoaWxkQ29udGV4dFR5cGVzPXtyb3V0ZXI6X3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdH07QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO2xldCB3YXJuQ29udGFpbmVyO2xldCB3YXJuVXJsO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt3YXJuQ29udGFpbmVyPSgwLF91dGlscy5leGVjT25jZSkoKCk9Pntjb25zb2xlLndhcm4oXCJXYXJuaW5nOiB0aGUgYENvbnRhaW5lcmAgaW4gYF9hcHBgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkXCIpO30pO3dhcm5Vcmw9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUuZXJyb3IoXCJXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3VybC1kZXByZWNhdGVkXCIpO30pO30vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZnVuY3Rpb24gQ29udGFpbmVyKHApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5Db250YWluZXIoKTtyZXR1cm4gcC5jaGlsZHJlbjt9ZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcil7Ly8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbmNvbnN0e3BhdGhuYW1lLGFzUGF0aCxxdWVyeX09cm91dGVyO3JldHVybntnZXQgcXVlcnkoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHF1ZXJ5O30sZ2V0IHBhdGhuYW1lKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBwYXRobmFtZTt9LGdldCBhc1BhdGgoKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIGFzUGF0aDt9LGJhY2s6KCk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cm91dGVyLmJhY2soKTt9LHB1c2g6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5wdXNoKHVybCxhcyk7fSxwdXNoVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO2NvbnN0IHB1c2hSb3V0ZT1hcz9ocmVmOicnO2NvbnN0IHB1c2hVcmw9YXN8fGhyZWY7cmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSxwdXNoVXJsKTt9LHJlcGxhY2U6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCxhcyk7fSxyZXBsYWNlVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO2NvbnN0IHJlcGxhY2VSb3V0ZT1hcz9ocmVmOicnO2NvbnN0IHJlcGxhY2VVcmw9YXN8fGhyZWY7cmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSxyZXBsYWNlVXJsKTt9fTt9IiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL3N5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvc3ByaXRlLmJ1aWxkLmpzXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJwbGF5XCIsXG4gIFwidXNlXCI6IFwicGxheS11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAyNCAxMDI0XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgY2xhc3M9XFxcImljb25cXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDI0IDEwMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgaWQ9XFxcInBsYXlcXFwiPjxwYXRoIGQ9XFxcIk05MTcuODExMiA0NTAuNDA2NEwxNjAuNTg4OCA4LjU1MDRDMTUxLjM3MjggMy4xNzQ0IDE0MS44MjQgMCAxMzAuOTQ0IDAgMTAxLjI3MzYgMCA3Ny4wODE2IDI0LjAxMjggNzcuMDgxNiA1My4zMjQ4SDc2Ljh2OTE3LjM1MDRoMC4yNTZDNzcuMDU2IDk5OS45ODcyIDEwMS4yOTkyIDEwMjQgMTMwLjk0NCAxMDI0YzExLjE2MTYgMCAyMC40MDMyLTMuNzM3NiAzMC40NjQtOS4wNjI0bDc1Ni40Mjg4LTQ0MS4zNDRBNzkuMzM0NCA3OS4zMzQ0IDAgMCAwIDk0Ny4yIDUxMmMwLTI0LjgwNjQtMTEuNDE3Ni00Ni42Njg4LTI5LjM4ODgtNjEuNTkzNnpcXFwiIHAtaWQ9XFxcIjk0MTRcXFwiIC8+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vbWFwXCIpOyIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9zeW1ib2wuanNcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL3Nwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwibWVudVwiLFxuICBcInVzZVwiOiBcIm1lbnUtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMjQgMTAyNFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIGNsYXNzPVxcXCJpY29uXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAyNCAxMDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGlkPVxcXCJtZW51XFxcIj48cGF0aCBkPVxcXCJNNTEuMiA1Ni4zMmg5MjEuNmMyOC4yNzc3NiAwIDUxLjIgMjIuOTIyMjQgNTEuMiA1MS4ycy0yMi45MjIyNCA1MS4yLTUxLjIgNTEuMkg1MS4yQzIyLjkyMjI0IDE1OC43MiAwIDEzNS43OTc3NiAwIDEwNy41MnMyMi45MjIyNC01MS4yIDUxLjItNTEuMnogbTAgMzk5LjM2aDkyMS42YzI4LjI3Nzc2IDAgNTEuMiAyMi45MjIyNCA1MS4yIDUxLjJzLTIyLjkyMjI0IDUxLjItNTEuMiA1MS4ySDUxLjJjLTI4LjI3Nzc2IDAtNTEuMi0yMi45MjIyNC01MS4yLTUxLjJzMjIuOTIyMjQtNTEuMiA1MS4yLTUxLjJ6IG0wIDM5OS4zNmg5MjEuNmMyOC4yNzc3NiAwIDUxLjIgMjIuOTIyMjQgNTEuMiA1MS4ycy0yMi45MjIyNCA1MS4yLTUxLjIgNTEuMkg1MS4yYy0yOC4yNzc3NiAwLTUxLjItMjIuOTIyMjQtNTEuMi01MS4yczIyLjkyMjI0LTUxLjIgNTEuMi01MS4yelxcXCIgcC1pZD1cXFwiODUzN1xcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2lzLWFycmF5XCIpOyIsImltcG9ydCBTcHJpdGVTeW1ib2wgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctYmFrZXItcnVudGltZS9zeW1ib2wuanNcIjtcbmltcG9ydCBzcHJpdGUgZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9zdmctc3ByaXRlLWxvYWRlci9ydW50aW1lL3Nwcml0ZS5idWlsZC5qc1wiO1xudmFyIHN5bWJvbCA9IG5ldyBTcHJpdGVTeW1ib2woe1xuICBcImlkXCI6IFwiY2xvc2VcIixcbiAgXCJ1c2VcIjogXCJjbG9zZS11c2FnZVwiLFxuICBcInZpZXdCb3hcIjogXCIwIDAgMTAyNCAxMDI0XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgY2xhc3M9XFxcImljb25cXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDI0IDEwMjRcXFwiIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgeG1sbnM6eGxpbms9XFxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcXFwiIGlkPVxcXCJjbG9zZVxcXCI+PGRlZnM+PHN0eWxlIHR5cGU9XFxcInRleHQvY3NzXFxcIj48L3N0eWxlPjwvZGVmcz48cGF0aCBkPVxcXCJNNTgzLjUgNTEyLjhMOTQ0IDE1Mi4zYzE5LjQtMTkuNCAxOS40LTUxLjMgMC03MC43LTE5LjQtMTkuNC01MS4zLTE5LjQtNzAuNyAwTDUxMi44IDQ0Mi4xIDE1MC43IDgwQzEzMS4zIDYwLjYgOTkuNSA2MC42IDgwIDgwYy0xOS40IDE5LjQtMTkuNCA1MS4zIDAgNzAuN2wzNjIuMSAzNjIuMS0zNjIgMzYyYy0xOS40IDE5LjQtMTkuNCA1MS4zIDAgNzAuNyAxOS40IDE5LjQgNTEuMyAxOS40IDcwLjcgMGwzNjItMzYyTDg3My4zIDk0NGMxOS40IDE5LjQgNTEuMyAxOS40IDcwLjcgMCAxOS40LTE5LjQgMTkuNC01MS4zIDAtNzAuN0w1ODMuNSA1MTIuOHpcXFwiIHAtaWQ9XFxcIjIzNzZcXFwiIC8+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9tYXBcIik7IiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL3N5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvc3ByaXRlLmJ1aWxkLmpzXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJ0YWdcIixcbiAgXCJ1c2VcIjogXCJ0YWctdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwMjQgMTAyNFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIGNsYXNzPVxcXCJpY29uXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAyNCAxMDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGlkPVxcXCJ0YWdcXFwiPjxwYXRoIGQ9XFxcIk00OTkuNzMxMDcgNzk3LjQxMjM3OGMtMi44Mzk2NzUgMS4xMzg5NC02LjI3OTAwNyAxLjcxOTE1NC05LjY5ODg5NiAxLjcxOTE1NGwwIDAgMCAwYy03LjM5ODUwNCAwLTEzLjY3NzUxMS0yLjg1OTExOC0xOC4yMzczNjMtNy40MTg5N2wwIDBjLTQuNTU4ODI5LTQuNTU3ODA2LTcuMzk5NTI3LTExLjQxNzAyNy03LjM5OTUyNy0xOC4yNTU3ODNsMCAwIDAgMGMwLTMuNDE5ODg5IDAuNTYwNzcyLTYuODU5MjIxIDEuNzAwNzM1LTkuNjk4ODk2bDAgMGMxLjEzOTk2My0zLjQxOTg4OSAzLjQxOTg4OS02LjI3OTAwNyA1LjY5ODc5Mi04LjU1ODkzM2wwIDAgODAuMzY5NDQ2LTgwLjQ2NDYxMyAwIDBjMi4yNzg5MDMtMi4yNzk5MjYgNS4xMzgwMi00LjU1OTg1MiA4LjU1Njg4Ni01LjY5ODc5MiAyLjgzOTY3NS0xLjE0MDk4NiA2LjI1OTU2NC0yLjI4MDk1IDkuNjc5NDUzLTIuMjgwOTUgNy40MTc5NDcgMCAxMy42Nzc1MTEgMy40MTk4ODkgMTguMjM3MzYzIDcuOTc5NzQyIDQuNTU4ODI5IDQuNTU5ODUyIDcuNDE3OTQ3IDEwLjgzNzgzNiA3LjQxNzk0NyAxOC4yNTY4MDYgMCAzLjQzODMwOS0wLjU1OTc0OCA2Ljg1ODE5OC0xLjcwMDczNSA5LjY5ODg5NmwwIDBjLTEuMTU4MzgzIDMuNDM4MzA5LTMuNDM3Mjg2IDYuMjc5MDA3LTUuNzE3MjEyIDguNTU3OTFsMCAwLTgwLjM1MDAwMyA4MC40NjQ2MTMgMCAwQzUwNi4wMTAwNzcgNzkzLjk5MjQ4OSA1MDMuMTQ5OTM2IDc5NS43MTE2NDQgNDk5LjczMTA3IDc5Ny40MTIzNzhMNDk5LjczMTA3IDc5Ny40MTIzNzh6TTExMy44MjY5NTMgNTIxLjI0MjUwMmwzNzYuMjA0MTk4IDM3Ni42MTA0NSAyODQuOTk4OTYzLTI4NS4zMDgwMDFMMzk4LjgyNjkzOSAyMzUuMzY1NTQyIDEyOC4wODU3MDIgMjM1LjM2NTU0MmMtMy45Nzk2MzggMC03LjQxODk3IDEuNzEwOTY4LTEwLjI1ODY0NSA0LjU3MDA4NWwwIDBjLTIuODQwNjk4IDIuMjc5OTI2LTQuMDAwMTA0IDYuMjY4Nzc0LTQuMDAwMTA0IDEwLjI2Nzg1NEwxMTMuODI2OTUzIDUyMS4yNDI1MDJ6TTQxOS4zNDIxODIgMTg1LjcyNDk1OGMzLjQzOTMzMiAxLjcwOTk0NSA2LjI5ODQ1IDMuNDE4ODY2IDguNTc4Mzc2IDUuNjk4NzkybDAgMEw4MjkuNzYxNjQ2IDU5NC4yODkxNjhsMCAwYzIuODQwNjk4IDIuMjc5OTI2IDQuNTU5ODUyIDUuMTE5NjAxIDUuNjk4NzkyIDcuOTc5NzQybDAgMGMxLjEzODk0IDMuNDE5ODg5IDIuMjc5OTI2IDYuMjc3OTg0IDIuMjc5OTI2IDEwLjI3NzA2NGwwIDBjMCAzLjQxOTg4OS0xLjEzOTk2MyA2LjgzOTc3OS0yLjI3OTkyNiA5LjY5ODg5NmwwIDBjLTEuMTM4OTQgMi44NjAxNDEtMi44NTgwOTQgNS42OTg3OTItNS42OTg3OTIgOC41NTg5MzNsMCAwTDUwOC4yODg5OCA5NTIuNjIyMzQ2bDAgMGMtMi4yNzg5MDMgMi4yODA5NS01LjEzODAyIDQuNTc5Mjk1LTguNTU3OTEgNS43MTkyNThsMCAwYy0yLjgzOTY3NSAxLjEzOTk2My02LjI3OTAwNyAxLjcwMDczNS05LjY5ODg5NiAxLjcwMDczNXMtNi44Mzk3NzktMC41NjA3NzItOS42Nzg0My0xLjcwMDczNWMtMy40MzkzMzItMS4xMzk5NjMtNi4yNzc5ODQtMy40MzcyODYtOC41NTg5MzMtNS43MTkyNThsMCAwTDY5LjM3NDUzMiA1NTAuMzM4MTY3bDAtMC41NjA3NzJjLTIuMjc5OTI2LTIuMjc5OTI2LTQuMDAwMTA0LTUuMTM4MDItNS4xMTk2MDEtNy45OTcxMzgtMS43MjAxNzgtMy40MTk4ODktMi4yNzk5MjYtNi4yNzkwMDctMi4yNzk5MjYtMTAuMjU4NjQ1TDYxLjk3NTAwNSAyNTAuMjAzNDgyYzAtMTguMjY2MDE2IDcuMzk5NTI3LTM0LjgxMjg3NyAxOS4zNzYzMDMtNDYuNzkwNjc2bDAgMGMxMS45NTkzOC0xMS45ODgwMzIgMjguNDk3MDMxLTE5LjQwNTk3OSA0Ni43MzMzNzEtMTkuNDA1OTc5bDAgMEw0MDkuNjYzNzUyIDE4NC4wMDY4MjdsMCAwQzQxMy4wODM2NDEgMTg0LjAwNjgyNyA0MTYuNTAzNTMxIDE4NC41ODYwMTkgNDE5LjM0MjE4MiAxODUuNzI0OTU4TDQxOS4zNDIxODIgMTg1LjcyNDk1OHpNMzkxLjQyNzQxMiA3MTEuMjQ3OTUgMzkxLjQyNzQxMiA3MTEuMjQ3OTVjLTQuNTU5ODUyLTQuNTU5ODUyLTcuMzk5NTI3LTExLjM5ODYwOC03LjM5OTUyNy0xOC4yNTY4MDYgMC0zLjQxOTg4OSAwLjU2MDc3Mi02LjgzOTc3OSAxLjcwMDczNS0xMC4yNTg2NDVsMCAwYzEuMTM5OTYzLTIuODU4MDk0IDMuNDE5ODg5LTUuNzE4MjM1IDUuNjk5ODE2LTcuOTk3MTM4bDE5Ljk1NjUxNy0yMC41MzU3MDljMi4yNzg5MDMtMi4yNzk5MjYgNS4xMTg1NzgtMy45OTkwODEgOC41Mzg0NjctNS4xMzkwNDQgMi44NTkxMTgtMS43MjAxNzggNi4yNzkwMDctMi4yODA5NSA5LjY5ODg5Ni0yLjI4MDk1bDAgMCAwIDAgMCAwYzcuNDE4OTcgMCAxMy42Nzg1MzQgMi44NjExNjQgMTguMjM3MzYzIDcuNDE5OTkzbDAgMGM0LjU2MDg3NiA1LjEzODAyIDcuNDE4OTcgMTEuNDE3MDI3IDcuNDE4OTcgMTguMjU2ODA2bDAgMGMwIDMuOTk5MDgxLTAuNTgwMjE1IDYuODM5Nzc5LTEuNzE5MTU0IDEwLjI3NzA2NC0xLjEzOTk2MyAyLjgzOTY3NS0zLjQxOTg4OSA1LjY5OTgxNi01LjY5OTgxNiA3Ljk4MDc2NWwwIDAtMTkuOTM2MDUxIDIwLjUzNDY4NWMtMi4yODA5NSAyLjMwMDM5Mi01LjEzOTA0NCA0LjAwMDEwNC04LjU3ODM3NiA1LjcxODIzNWwwIDBjLTIuODM5Njc1IDEuMTM5OTYzLTYuMjU5NTY0IDEuNzAxNzU4LTkuNjc4NDMgMS43MDE3NThsMCAwQzQwMi4yNjUyNDggNzE4LjY2Nzk0MyAzOTUuOTg2MjQxIDcxNS44MjYyMjIgMzkxLjQyNzQxMiA3MTEuMjQ3OTVMMzkxLjQyNzQxMiA3MTEuMjQ3OTV6TTU0OC43NDQzNjcgNzAuNDU2Njc4IDk1MC42MDM4NzUgNDczLjMxMjg4NmwwIDBjMi4yNzk5MjYgMi4yNzg5MDMgNC41NTg4MjkgNS4xMzgwMiA1LjY5Nzc2OSA4LjU1NzkxIDEuMTQyMDEgMi44NDk5MDggMS43MDA3MzUgNi4yNzc5ODQgMS43MDA3MzUgOS42OTg4OTYgMCAzLjQyOTA5OS0wLjU1ODcyNSA2Ljg0Nzk2NS0xLjcwMDczNSA5LjY5Nzg3My0xLjEzODk0IDMuNDI5MDk5LTMuNDE4ODY2IDYuMjc5MDA3LTUuNjk3NzY5IDguNTY4MTQzbDAgMC02MC40MzAzMjQgNjAuNDc5NDQzIDAgMGMtMi4yODA5NSAyLjI3ODkwMy01LjEyMDYyNCAzLjk5OTA4MS03Ljk3ODcxOCA1LjY5Nzc2OS0zLjQyMDkxMyAxLjE2MDQyOS02LjgzOTc3OSAxLjcyMTIwMS0xMC4yNTk2NjggMS43MjEyMDEtNi44Mzg3NTUgMC0xMy42Nzc1MTEtMi44NjAxNDEtMTguMjM3MzYzLTcuNDE4OTctNC41NTc4MDYtNC41NTk4NTItNy40MTY5MjMtMTEuNDE4MDUxLTcuNDE2OTIzLTE4LjI1NzgyOSAwLTMuNDE5ODg5IDAuNTc3MTQ1LTYuODU3MTc1IDEuNzIwMTc4LTkuNjk4ODk2IDEuNjk4Njg4LTMuNDE4ODY2IDMuNDE4ODY2LTYuMjc5MDA3IDUuNjk2NzQ2LTguNTU2ODg2bDAgMCA0Mi4xNzM1MTgtNDIuMjMxODQ3TDUxOS42NjkxNjggMTE0Ljk2ODQ1MSAyNDguOTI3OTMxIDExNC45Njg0NTFsMCAwYy0zLjk5OTA4MSAwLTcuOTc4NzE4IDEuMTM5OTYzLTEwLjI1ODY0NSAzLjk4ODg0OGwwIDBjLTIuODU5MTE4IDIuODU5MTE4LTQuNTU4ODI5IDYuMjc5MDA3LTQuNTU4ODI5IDEwLjI3ODA4NyAwIDYuODM4NzU1LTIuODU5MTE4IDEzLjY4NjcyLTcuNDE4OTcgMTguMjU2ODA2LTQuNTU4ODI5IDQuNTU5ODUyLTEwLjgxNzM3IDcuNDE4OTctMTguMjM3MzYzIDcuNDE4OTctNi44Mzg3NTUgMC0xMy42Nzg1MzQtMi44NTkxMTgtMTguMjM3MzYzLTcuNDE4OTctNC41NTg4MjktNC41NjkwNjItNy40MTc5NDctMTEuNDE4MDUxLTcuNDE3OTQ3LTE4LjI1NjgwNmwwIDBjMC0xOC4yNjYwMTYgNy40MTc5NDctMzQuODEzOSAxOS4zOTY3NjktNDYuNzkxNjk5bDAgMGMxMS45NTgzNTYtMTEuOTg4MDMyIDI4LjQ5NjAwOC0xOS40MDU5NzkgNDYuNzMyMzQ3LTE5LjQwNTk3OWwwIDAgMjgxLjAxODMwMiAwIDAgMGMzLjk3OTYzOCAwIDYuODM4NzU1IDAuNTY5OTgyIDEwLjI1ODY0NSAyLjI3OTkyNiAyLjgzODY1MSAxLjE0OTE3MyA1LjY5Nzc2OSAyLjg1OTExOCA3Ljk3ODcxOCA1LjEzODAyTDU0OC43NDQzNjcgNzAuNDU1NjU1ek00OTkuNzMxMDcgNjM1Ljk0MTgyM2MtMi44Mzk2NzUgMS42OTk3MTItNi4yNzkwMDcgMi4yNzk5MjYtOS42OTg4OTYgMi4yNzk5MjZsMCAwIDAgMGMtNy4zOTg1MDQgMC0xMy42Nzc1MTEtMi44NjAxNDEtMTguMjM3MzYzLTcuNDE3OTQ3LTQuNTU4ODI5LTQuNTU5ODUyLTcuMzk5NTI3LTExLjQxODA1MS03LjM5OTUyNy0xOC4yNTc4MjlsMCAwIDAgMGMwLTMuNDE5ODg5IDAuNTYwNzcyLTYuODU3MTc1IDEuNzAwNzM1LTEwLjI3NzA2NCAxLjEzOTk2My0yLjg2MDE0MSAzLjQxOTg4OS01LjY5OTgxNiA1LjY5ODc5Mi03Ljk3OTc0MmwwIDAgMzkuODk0NjE1LTQwLjUxMjY5MiAwLjU3OTE5MSAwYzIuMjgwOTUtMi4yOTkzNjkgNS4xMTk2MDEtMy45OTkwODEgNy45Nzc2OTUtNS43MTgyMzUgMy40MTk4ODktMS4xMzg5NCA2LjI2MDU4Ny0xLjcwMDczNSA5LjY5OTkxOS0xLjcwMDczNWwwLjU1OTc0OCAwIDAgMGM2LjgzODc1NSAwIDEzLjExNzc2MiAyLjgzOTY3NSAxNy42Nzc2MTUgNy40MTg5N2wwLjU2MDc3MiAwYzQuNTU4ODI5IDQuNTU4ODI5IDcuNDE3OTQ3IDExLjM5ODYwOCA3LjQxNzk0NyAxOC4yNTY4MDZsMCAwYzAgMy40MTk4ODktMC41NzkxOTEgNi44Mzk3NzktMi4yODA5NSA5LjY5Nzg3My0xLjEzOTk2MyAzLjQxOTg4OS0yLjg1OTExOCA2LjI4MDAzLTUuMTM4MDIgOC41NTk5NTZsLTQwLjQ1NTM4NyA0MC41MTI2OTJDNTA2LjAxMDA3NyA2MzMuMDgxNjgzIDUwMy4xNDk5MzYgNjM0LjgwMTg2IDQ5OS43MzEwNyA2MzUuOTQxODIzTDQ5OS43MzEwNyA2MzUuOTQxODIzek0yMzguNjY5Mjg2IDM4MC44Njk0NTFjMi4yNzk5MjYgMi44NTkxMTggNi4yNTk1NjQgNC41NjkwNjIgMTAuMjU4NjQ1IDQuNTY5MDYybDAgMCAwIDBjMy45OTkwODEgMCA3LjM5OTUyNy0xLjcwOTk0NSA5LjY3OTQ1My00LjU2OTA2MiAyLjg1OTExOC0yLjI3OTkyNiA0LjU1OTg1Mi02LjI3OTAwNyA0LjU1OTg1Mi0xMC4yNjc4NTRsMCAwIDAgMCAwIDAgMCAwYzAtNC4wMDAxMDQtMS43MDA3MzUtNy40MTg5Ny00LjU1OTg1Mi0xMC4yNjc4NTQtMi4yNzk5MjYtMi4yODkxMzYtNS42ODAzNzMtNC4wMDAxMDQtOS42Nzk0NTMtNC4wMDAxMDRsMCAwYy0zLjk5OTA4MSAwLTcuOTc4NzE4IDEuNzA5OTQ1LTEwLjI1ODY0NSA0LjAwMDEwNC0yLjg1OTExOCAyLjg0ODg4NC00LjU1ODgyOSA2LjI2Nzc1LTQuNTU4ODI5IDEwLjI2Nzg1NEMyMzQuMTEwNDU3IDM3NC41OTA0NDQgMjM1LjgwOTE0NSAzNzguNTg5NTI0IDIzOC42NjkyODYgMzgwLjg2OTQ1MUwyMzguNjY5Mjg2IDM4MC44Njk0NTF6TTIwMi4xOTQ1NiAzMjMuODA4ODc0YzExLjk1ODM1Ni0xMS45NzY3NzYgMjguNDk2MDA4LTE5LjM5Njc2OSA0Ni43MzIzNDctMTkuMzk2NzY5bDAgMGMxOC4yMzczNjMgMCAzNC43NTU1NzIgNy40MTg5NyA0Ni43MzMzNzEgMTkuMzk2NzY5IDExLjM5ODYwOCAxMS45ODkwNTUgMTguODE2NTU0IDI4LjUzNDg5MyAxOC44MTY1NTQgNDYuNzkyNzIzIDAgMTguMjU2ODA2LTcuNDE4OTcgMzQuODAyNjQ0LTE4LjgxNjU1NCA0Ni43OTA2NzYtMTEuOTc4ODIyIDExLjk3Nzc5OS0yOC40OTcwMzEgMTkuMzk3NzkyLTQ2LjczMzM3MSAxOS4zOTc3OTJsMCAwYy0xOC4yMzczNjMgMC0zNC43NzM5OTEtNy40MTg5Ny00Ni43MzIzNDctMTkuMzk3NzkybDAgMGMtMTEuOTc4ODIyLTExLjk4ODAzMi0xOS4zOTY3NjktMjguNTMzODctMTkuMzk2NzY5LTQ2Ljc5MDY3NmwwIDBDMTgyLjc5ODgxNCAzNTIuMzQ0NzkgMTkwLjIxNjc2MSAzMzUuNzk3OTI5IDIwMi4xOTQ1NiAzMjMuODA4ODc0TDIwMi4xOTQ1NiAzMjMuODA4ODc0elxcXCIgcC1pZD1cXFwiNDUyNFxcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX21hcD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvbWFwXCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3Byb3BUeXBlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yZXdyaXRlVXJsRm9yRXhwb3J0PXJlcXVpcmUoXCJuZXh0LXNlcnZlci9kaXN0L2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCJuZXh0LXNlcnZlci9kaXN0L2xpYi91dGlsc1wiKTsvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL2Z1bmN0aW9uIGlzTG9jYWwoaHJlZil7Y29uc3QgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7bGV0IGxhc3RIcmVmPW51bGw7bGV0IGxhc3RBcz1udWxsO2xldCBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fWNvbnN0IHJlc3VsdD1mb3JtYXRGdW5jKGhyZWYsYXMpO2xhc3RIcmVmPWhyZWY7bGFzdEFzPWFzO2xhc3RSZXN1bHQ9cmVzdWx0O3JldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZm9ybWF0VXJsKHVybCl7cmV0dXJuIHVybCYmdHlwZW9mIHVybD09PSdvYmplY3QnPygwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikodXJsKTp1cmw7fWxldCBvYnNlcnZlcjtjb25zdCBsaXN0ZW5lcnM9bmV3IF9tYXAuZGVmYXVsdCgpO2NvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO31jb25zdCBjYj1saXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCk7aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjApe29ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO2xpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KTtjYigpO319KTt9LHtyb290TWFyZ2luOicyMDBweCd9KTt9Y29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pntjb25zdCBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e29ic2VydmVyLnVub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6Zm9ybWF0VXJsKGhyZWYpLGFzOmFzSHJlZj9mb3JtYXRVcmwoYXNIcmVmKTphc0hyZWZ9O30pO3RoaXMubGlua0NsaWNrZWQ9ZT0+ey8vIEB0cy1pZ25vcmUgdGFyZ2V0IGV4aXN0cyBvbiBjdXJyZW50VGFyZ2V0XG5jb25zdHtub2RlTmFtZSx0YXJnZXR9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZS5tZXRhS2V5fHxlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUubmF0aXZlRXZlbnQmJmUubmF0aXZlRXZlbnQud2hpY2g9PT0yKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxucmV0dXJuO31sZXR7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTtpZighaXNMb2NhbChocmVmKSl7Ly8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxucmV0dXJuO31jb25zdHtwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmxldHtzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2goKXtpZighdGhpcy5wfHx0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbmNvbnN0e3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247Y29uc3R7aHJlZjpwYXJzZWRIcmVmfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2NvbnN0IGhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtfcm91dGVyLmRlZmF1bHQucHJlZmV0Y2goaHJlZik7fXJlbmRlcigpe2xldHtjaGlsZHJlbn09dGhpcy5wcm9wcztjb25zdHtocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPV9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuY29uc3QgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO2NvbnN0IHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKCk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbn07aWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe2lmKHByb3BzLmhyZWYmJnR5cGVvZiBfX05FWFRfREFUQV9fIT09J3VuZGVmaW5lZCcmJl9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCl7cHJvcHMuaHJlZj0oMCxfcmV3cml0ZVVybEZvckV4cG9ydC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCkocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fUxpbmsucHJvcFR5cGVzPXZvaWQgMDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2NvbnN0IHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbmNvbnN0IGV4YWN0PXJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKTtMaW5rLnByb3BUeXBlcz1leGFjdCh7aHJlZjpfcHJvcFR5cGVzLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLF9wcm9wVHlwZXMuZGVmYXVsdC5vYmplY3RdKS5pc1JlcXVpcmVkLGFzOl9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdF0pLHByZWZldGNoOl9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLHJlcGxhY2U6X3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsc2hhbGxvdzpfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxwYXNzSHJlZjpfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxzY3JvbGw6X3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsY2hpbGRyZW46X3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlcy5kZWZhdWx0LmVsZW1lbnQsKHByb3BzLHByb3BOYW1lKT0+e2NvbnN0IHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJpbXBvcnQgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSBmcm9tIFwiLi4vLi4vY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgX09iamVjdCRkZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwiY29uc3QgcmVxdWlyZUFsbCA9IChyZXF1aXJlQ29udGV4dDogYW55KSA9PiByZXF1aXJlQ29udGV4dC5rZXlzKCkubWFwKHJlcXVpcmVDb250ZXh0KVxuY29uc3QgcmVxID0gcmVxdWlyZS5jb250ZXh0KCcuLycsIGZhbHNlLCAvXFwuc3ZnJC8pXG5yZXF1aXJlQWxsKHJlcSlcbmV4cG9ydCBkZWZhdWx0IHJlcVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCAnLi9uYXYubGVzcydcbmltcG9ydCB7XG4gIFBST0pFQ1RfTkFNRSxcbiAgV0VCU0lURV9USVRMRVxufSBmcm9tICdAY29uc3RhbmNlL2luZGV4JyBcblxuLy8gaW1wb3J0IFRoZW1lIGZyb20gJ0Bjb21wb25lbnRzL1RoZW1lJ1xuXG5jb25zdCBOYXYgPSAoKSA9PiB7XG4gIGNvbnN0IGNsYXNzU3RyaW5nID0gY2xhc3NOYW1lcyh7XG4gICAgW2Ake1BST0pFQ1RfTkFNRX0tbmF2YF06IHRydWVcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPXsgY2xhc3NTdHJpbmcgfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWNvbnRlbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtbG9nb1wiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJuYXYtdGl0bGVcIj57V0VCU0lURV9USVRMRX08L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIDxzcGFuPlxuICAgICAgICAgIDxUaGVtZS8+XG4gICAgICAgIDwvc3Bhbj4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXYiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQUk9KRUNUX05BTUUsIENPUFlfUklHSFRfQ09ORklHIH0gZnJvbSAnQGNvbnN0YW5jZS9pbmRleCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgJy4vY29weS1yaWdodC5sZXNzJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tICdAdXRpbHMvdXRpbHMnXG4vLyBpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5cbmNvbnN0IENvcHlSaWdodCA9ICgpID0+IHtcbiAgY29uc3QgY2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKHtcbiAgICBbYCR7UFJPSkVDVF9OQU1FfS1jb21wLWNvcHktcmlnaHRgXTogdHJ1ZVxuICB9KVxuXG4gIHJldHVybiAoXG4gICAgPGZvb3RlciBjbGFzc05hbWU9e2NsYXNzU3RyaW5nfT5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7Y2xhc3NTdHJpbmd9LWluZm8gbGlzdGB9PsKpIDIwMTYgLSB7IGZvcm1hdERhdGUoJ3l5eXknLCBuZXcgRGF0ZSgpKSB9IGZyb20gZHc8L3NwYW4+XG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIHtcbiAgICAgICAgICBDT1BZX1JJR0hUX0NPTkZJRy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIGl0ZW0udG8uaW5jbHVkZXMoJ2h0dHAnKSA/IChcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlzdFwiIHRhcmdldD1cIl9ibGFja1wiIGtleT17aXRlbS5uYW1lfSBocmVmPXtpdGVtLnRvfT57aXRlbS5uYW1lfTwvYT5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxMaW5rIGtleT17aXRlbS5uYW1lfSBocmVmPXtpdGVtLnRvfT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaXN0XCI+e2l0ZW0ubmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgIDwvZm9vdGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvcHlSaWdodFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgJ0Bhc3NldHMvc3ZnJ1xuaW1wb3J0ICAnQHN0eWxlL2luZGV4Lmxlc3MnXG5pbXBvcnQgTmF2IGZyb20gJ0Byb290L2NvbXBvbmVudHMvTmF2J1xuaW1wb3J0IENvcHlSaWdodCBmcm9tICdAcm9vdC9jb21wb25lbnRzL0NvcHlSaWdodCdcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBwdWJsaWMgY2xhc3NXcmFwcGVyU3RyaW5nID0gY2xhc3NOYW1lcyh7XG4gICAgW2ByZWFjdC1uZXh0LXdyYXBwZXJgXTogdHJ1ZSxcbiAgICBbYHRoZW1lLWRlZmF1bHRgXTogdHJ1ZVxuICB9KVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt0aGlzLmNsYXNzV3JhcHBlclN0cmluZ30gaWQ9J2R3LW5leHQtY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlYWN0LW5leHQtY29udGVudCc+XG4gICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgIDxOYXYvPlxuICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8Q29weVJpZ2h0Lz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY2F0LnN2Z1wiOiBcInljamtcIixcblx0XCIuL2Nsb3NlLnN2Z1wiOiBcIlNTTGpcIixcblx0XCIuL2NyZWF0LnN2Z1wiOiBcIjFkeXBcIixcblx0XCIuL2xvZ28uc3ZnXCI6IFwidkZwTlwiLFxuXHRcIi4vbWVudS5zdmdcIjogXCJOTEY5XCIsXG5cdFwiLi9uZXh0LnN2Z1wiOiBcIngzUCtcIixcblx0XCIuL3BhdXNlLnN2Z1wiOiBcIjBPcStcIixcblx0XCIuL3BsYXkuc3ZnXCI6IFwiQllJY1wiLFxuXHRcIi4vcmVhZC5zdmdcIjogXCJrUXNtXCIsXG5cdFwiLi90YWcuc3ZnXCI6IFwiWUN6eFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCJoOWt3XCI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7IiwidmFyIF9PYmplY3QkYXNzaWduID0gcmVxdWlyZShcIi4uL2NvcmUtanMvb2JqZWN0L2Fzc2lnblwiKTtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBfT2JqZWN0JGFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kczsiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcInJlYWRcIixcbiAgXCJ1c2VcIjogXCJyZWFkLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCBjbGFzcz1cXFwiaWNvblxcXCIgdmlld0JveD1cXFwiMCAwIDEwMjQgMTAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBpZD1cXFwicmVhZFxcXCI+PHBhdGggZD1cXFwiTTUxMiAxMjcuODM5NTk3Yy0yODIuNTk0MTkzIDAtNTExLjk3ODUxMSAyODAuNTE4OTI4LTUxMS45Nzg1MTEgMzg0LjE2MDQwMyAwIDEwMy40MzE2OTcgMjI5LjM4NDMxNyAzODIuNDgyMTgxIDUxMS45Nzg1MTEgMzgyLjQ4MjE4MSAyODIuNTk5MzEgMCA1MTEuMzkxMTMzLTI3Ni4zNjEyMzUgNTExLjM5MTEzMy0zODIuNDgyMTgxIDAtMTExLjcwOTIyMS0yMjguNzkxODIzLTM4NC4xNjA0MDMtNTExLjM5MTEzMy0zODQuMTYwNDAzeiBtMCA3MDMuNzA5MjUzYy0yNDQuNjMxNTggMC00NDAuMTYxODU4LTI1OS41NDQyMjEtNDQ4LjAxNzc4LTMxOS41NDg4NSA3Ljc4NTMxNC01NS40NjYyNjYgMjAzLjI0MjkzNy0zMjAuMDU3NDMzIDQ0OC4wMTc3OC0zMjAuMDU3NDMzIDI0Ny45ODkwNDcgMCA0NDIuNDMwNTI4IDI2Mi4zMjI0OTcgNDQ3LjQzMDQwMiAzMjAuMDU3NDMzLTYuOTk5NDE0IDU3LjE0NjUzNS0yMDAuMjI3MjU0IDMxOS41NDg4NS00NDcuNDMwNDAyIDMxOS41NDg4NXpcXFwiIHAtaWQ9XFxcIjI4NDBcXFwiIC8+PHBhdGggZD1cXFwiTTUxMi4wMDEwMjMgMzE5LjY0NDAxN2MtMTA1LjkxMzIxNSAwLTE5MS43NzE2NzUgODUuODU4NDYtMTkxLjc3MTY3NCAxOTEuNzcxNjc1UzQwNi4wODc4MDggNzAzLjE4ODM5IDUxMi4wMDEwMjMgNzAzLjE4ODM5YzEwNS45MDkxMjIgMCAxOTEuNzcxNjc1LTg1Ljg1ODQ2IDE5MS43NzE2NzUtMTkxLjc3MTY3NXMtODUuODYyNTUzLTE5MS43NzI2OTgtMTkxLjc3MTY3NS0xOTEuNzcyNjk4eiBtMC4wMTUzNSAzMjAuMDIyNjQxYy03MC40NzkxOTEgMC0xMjguMjMxNTIzLTU3Ljc5MTIxOC0xMjguMjMxNTIzLTEyOC4yNzA0MDlzNTcuNzUyMzMyLTEyNy41NzI1MTQgMTI4LjIzMTUyMy0xMjcuNTcyNTEzIDEyNy42MTEzOTkgNTcuMDk0MzQ2IDEyNy42MTEzOTkgMTI3LjU3MjUxMy01Ny4xMzIyMDggMTI4LjI3MDQwOS0xMjcuNjExMzk5IDEyOC4yNzA0MDl6XFxcIiBwLWlkPVxcXCIyODQxXFxcIiAvPjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXNlcnZlci9kaXN0L2xpYi9yb3V0ZXItY29udGV4dFwiKTsiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMudXNlUm91dGVyPXVzZVJvdXRlcjtleHBvcnRzLm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZT1tYWtlUHVibGljUm91dGVySW5zdGFuY2U7ZXhwb3J0cy5jcmVhdGVSb3V0ZXI9ZXhwb3J0cy53aXRoUm91dGVyPWV4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9leHRlbmRzMj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvZXh0ZW5kc1wiKSk7dmFyIF9kZWZpbmVQcm9wZXJ0eT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSk7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9yb3V0ZXIyPV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJuZXh0LXNlcnZlci9kaXN0L2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwibmV4dC1zZXJ2ZXIvZGlzdC9saWIvcm91dGVyLWNvbnRleHRcIik7dmFyIF93aXRoUm91dGVyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO2V4cG9ydHMud2l0aFJvdXRlcj1fd2l0aFJvdXRlci5kZWZhdWx0Oy8qIGdsb2JhbCB3aW5kb3cgKi9jb25zdCBzaW5nbGV0b25Sb3V0ZXI9e3JvdXRlcjpudWxsLC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG5yZWFkeUNhbGxiYWNrczpbXSxyZWFkeShjYil7aWYodGhpcy5yb3V0ZXIpcmV0dXJuIGNiKCk7aWYodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnKXt0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO319fTsvLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcz1bJ3BhdGhuYW1lJywncm91dGUnLCdxdWVyeScsJ2FzUGF0aCcsJ2NvbXBvbmVudHMnXTtjb25zdCByb3V0ZXJFdmVudHM9Wydyb3V0ZUNoYW5nZVN0YXJ0JywnYmVmb3JlSGlzdG9yeUNoYW5nZScsJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCdyb3V0ZUNoYW5nZUVycm9yJywnaGFzaENoYW5nZVN0YXJ0JywnaGFzaENoYW5nZUNvbXBsZXRlJ107Y29uc3QgY29yZU1ldGhvZEZpZWxkcz1bJ3B1c2gnLCdyZXBsYWNlJywncmVsb2FkJywnYmFjaycsJ3ByZWZldGNoJywnYmVmb3JlUG9wU3RhdGUnXTsvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4oMCxfZGVmaW5lUHJvcGVydHkuZGVmYXVsdCkoc2luZ2xldG9uUm91dGVyLCdldmVudHMnLHtnZXQoKXtyZXR1cm4gX3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7fX0pO3VybFByb3BlcnR5RmllbGRzLmZvckVhY2goZmllbGQ9PnsvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4oMCxfZGVmaW5lUHJvcGVydHkuZGVmYXVsdCkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT1mdW5jdGlvbigpe2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmd1bWVudHMpO307fSk7cm91dGVyRXZlbnRzLmZvckVhY2goZXZlbnQ9PntzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9Pntfcm91dGVyMi5kZWZhdWx0LmV2ZW50cy5vbihldmVudCxmdW5jdGlvbigpe2NvbnN0IGV2ZW50RmllbGQ9XCJvblwiK2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2V2ZW50LnN1YnN0cmluZygxKTtjb25zdCBfc2luZ2xldG9uUm91dGVyPXNpbmdsZXRvblJvdXRlcjtpZihfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKXt0cnl7X3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmd1bWVudHMpO31jYXRjaChlcnIpey8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKFwiRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6IFwiK2V2ZW50RmllbGQpOy8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG5jb25zb2xlLmVycm9yKGVyci5tZXNzYWdlK1wiXFxuXCIrZXJyLnN0YWNrKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nO3Rocm93IG5ldyBFcnJvcihtZXNzYWdlKTt9cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fS8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxudmFyIF9kZWZhdWx0PXNpbmdsZXRvblJvdXRlcjsvLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O2Z1bmN0aW9uIHVzZVJvdXRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9yb3V0ZXJDb250ZXh0LlJvdXRlckNvbnRleHQpO30vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPWZ1bmN0aW9uIGNyZWF0ZVJvdXRlcigpe2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9bmV3IEFycmF5KF9sZW4pLF9rZXk9MDtfa2V5PF9sZW47X2tleSsrKXthcmdzW19rZXldPWFyZ3VtZW50c1tfa2V5XTt9c2luZ2xldG9uUm91dGVyLnJvdXRlcj1uZXcgX3JvdXRlcjIuZGVmYXVsdCguLi5hcmdzKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaChjYj0+Y2IoKSk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzPVtdO3JldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyO307Ly8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0cy5jcmVhdGVSb3V0ZXI9Y3JlYXRlUm91dGVyO2Z1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXIpe2NvbnN0IF9yb3V0ZXI9cm91dGVyO2NvbnN0IGluc3RhbmNlPXt9O2Zvcihjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcyl7aWYodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldPT09J29iamVjdCcpe2luc3RhbmNlW3Byb3BlcnR5XT0oMCxfZXh0ZW5kczIuZGVmYXVsdCkoe30sX3JvdXRlcltwcm9wZXJ0eV0pOy8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG5jb250aW51ZTt9aW5zdGFuY2VbcHJvcGVydHldPV9yb3V0ZXJbcHJvcGVydHldO30vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5pbnN0YW5jZS5ldmVudHM9X3JvdXRlcjIuZGVmYXVsdC5ldmVudHM7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57aW5zdGFuY2VbZmllbGRdPWZ1bmN0aW9uKCl7cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyZXR1cm4gaW5zdGFuY2U7fSIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5TcHJpdGUgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBjb21tb25qc0dsb2JhbCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDoge307XG5cblxuXG5cblxuZnVuY3Rpb24gY3JlYXRlQ29tbW9uanNNb2R1bGUoZm4sIG1vZHVsZSkge1xuXHRyZXR1cm4gbW9kdWxlID0geyBleHBvcnRzOiB7fSB9LCBmbihtb2R1bGUsIG1vZHVsZS5leHBvcnRzKSwgbW9kdWxlLmV4cG9ydHM7XG59XG5cbnZhciBkZWVwbWVyZ2UkMSA9IGNyZWF0ZUNvbW1vbmpzTW9kdWxlKGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICAgIGlmICh0eXBlb2YgdW5kZWZpbmVkID09PSAnZnVuY3Rpb24nICYmIHVuZGVmaW5lZC5hbWQpIHtcbiAgICAgICAgdW5kZWZpbmVkKGZhY3RvcnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgIH1cbn0oY29tbW9uanNHbG9iYWwsIGZ1bmN0aW9uICgpIHtcblxuZnVuY3Rpb24gaXNNZXJnZWFibGVPYmplY3QodmFsKSB7XG4gICAgdmFyIG5vbk51bGxPYmplY3QgPSB2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG5cbiAgICByZXR1cm4gbm9uTnVsbE9iamVjdFxuICAgICAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKSAhPT0gJ1tvYmplY3QgUmVnRXhwXSdcbiAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCkgIT09ICdbb2JqZWN0IERhdGVdJ1xufVxuXG5mdW5jdGlvbiBlbXB0eVRhcmdldCh2YWwpIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWwpID8gW10gOiB7fVxufVxuXG5mdW5jdGlvbiBjbG9uZUlmTmVjZXNzYXJ5KHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIHtcbiAgICB2YXIgY2xvbmUgPSBvcHRpb25zQXJndW1lbnQgJiYgb3B0aW9uc0FyZ3VtZW50LmNsb25lID09PSB0cnVlO1xuICAgIHJldHVybiAoY2xvbmUgJiYgaXNNZXJnZWFibGVPYmplY3QodmFsdWUpKSA/IGRlZXBtZXJnZShlbXB0eVRhcmdldCh2YWx1ZSksIHZhbHVlLCBvcHRpb25zQXJndW1lbnQpIDogdmFsdWVcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHRhcmdldC5zbGljZSgpO1xuICAgIHNvdXJjZS5mb3JFYWNoKGZ1bmN0aW9uKGUsIGkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZXN0aW5hdGlvbltpXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uW2ldID0gY2xvbmVJZk5lY2Vzc2FyeShlLCBvcHRpb25zQXJndW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGlzTWVyZ2VhYmxlT2JqZWN0KGUpKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltpXSA9IGRlZXBtZXJnZSh0YXJnZXRbaV0sIGUsIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmluZGV4T2YoZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbi5wdXNoKGNsb25lSWZOZWNlc3NhcnkoZSwgb3B0aW9uc0FyZ3VtZW50KSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZGVzdGluYXRpb25cbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3QodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBkZXN0aW5hdGlvbiA9IHt9O1xuICAgIGlmIChpc01lcmdlYWJsZU9iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRhcmdldCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gY2xvbmVJZk5lY2Vzc2FyeSh0YXJnZXRba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghaXNNZXJnZWFibGVPYmplY3Qoc291cmNlW2tleV0pIHx8ICF0YXJnZXRba2V5XSkge1xuICAgICAgICAgICAgZGVzdGluYXRpb25ba2V5XSA9IGNsb25lSWZOZWNlc3Nhcnkoc291cmNlW2tleV0sIG9wdGlvbnNBcmd1bWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbltrZXldID0gZGVlcG1lcmdlKHRhcmdldFtrZXldLCBzb3VyY2Vba2V5XSwgb3B0aW9uc0FyZ3VtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBkZXN0aW5hdGlvblxufVxuXG5mdW5jdGlvbiBkZWVwbWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkge1xuICAgIHZhciBhcnJheSA9IEFycmF5LmlzQXJyYXkoc291cmNlKTtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdGlvbnNBcmd1bWVudCB8fCB7IGFycmF5TWVyZ2U6IGRlZmF1bHRBcnJheU1lcmdlIH07XG4gICAgdmFyIGFycmF5TWVyZ2UgPSBvcHRpb25zLmFycmF5TWVyZ2UgfHwgZGVmYXVsdEFycmF5TWVyZ2U7XG5cbiAgICBpZiAoYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGFyZ2V0KSA/IGFycmF5TWVyZ2UodGFyZ2V0LCBzb3VyY2UsIG9wdGlvbnNBcmd1bWVudCkgOiBjbG9uZUlmTmVjZXNzYXJ5KHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBtZXJnZU9iamVjdCh0YXJnZXQsIHNvdXJjZSwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH1cbn1cblxuZGVlcG1lcmdlLmFsbCA9IGZ1bmN0aW9uIGRlZXBtZXJnZUFsbChhcnJheSwgb3B0aW9uc0FyZ3VtZW50KSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5KSB8fCBhcnJheS5sZW5ndGggPCAyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignZmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGFuIGFycmF5IHdpdGggYXQgbGVhc3QgdHdvIGVsZW1lbnRzJylcbiAgICB9XG5cbiAgICAvLyB3ZSBhcmUgc3VyZSB0aGVyZSBhcmUgYXQgbGVhc3QgMiB2YWx1ZXMsIHNvIGl0IGlzIHNhZmUgdG8gaGF2ZSBubyBpbml0aWFsIHZhbHVlXG4gICAgcmV0dXJuIGFycmF5LnJlZHVjZShmdW5jdGlvbihwcmV2LCBuZXh0KSB7XG4gICAgICAgIHJldHVybiBkZWVwbWVyZ2UocHJldiwgbmV4dCwgb3B0aW9uc0FyZ3VtZW50KVxuICAgIH0pXG59O1xuXG5yZXR1cm4gZGVlcG1lcmdlXG5cbn0pKTtcbn0pO1xuXG52YXIgbmFtZXNwYWNlc18xID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xudmFyIG5hbWVzcGFjZXMgPSB7XG4gIHN2Zzoge1xuICAgIG5hbWU6ICd4bWxucycsXG4gICAgdXJpOiAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gIH0sXG4gIHhsaW5rOiB7XG4gICAgbmFtZTogJ3htbG5zOnhsaW5rJyxcbiAgICB1cmk6ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJ1xuICB9XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSBuYW1lc3BhY2VzO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzLmRlZmF1bHQ7XG59KTtcblxuLyoqXG4gKiBAcGFyYW0ge09iamVjdH0gYXR0cnNcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIG9iamVjdFRvQXR0cnNTdHJpbmcgPSBmdW5jdGlvbiAoYXR0cnMpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKGF0dHJzKS5tYXAoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICB2YXIgdmFsdWUgPSBhdHRyc1thdHRyXS50b1N0cmluZygpLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgICByZXR1cm4gKGF0dHIgKyBcIj1cXFwiXCIgKyB2YWx1ZSArIFwiXFxcIlwiKTtcbiAgfSkuam9pbignICcpO1xufTtcblxudmFyIHN2ZyA9IG5hbWVzcGFjZXNfMS5zdmc7XG52YXIgeGxpbmsgPSBuYW1lc3BhY2VzXzEueGxpbms7XG5cbnZhciBkZWZhdWx0QXR0cnMgPSB7fTtcbmRlZmF1bHRBdHRyc1tzdmcubmFtZV0gPSBzdmcudXJpO1xuZGVmYXVsdEF0dHJzW3hsaW5rLm5hbWVdID0geGxpbmsudXJpO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29udGVudF1cbiAqIEBwYXJhbSB7T2JqZWN0fSBbYXR0cmlidXRlc11cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xudmFyIHdyYXBJblN2Z1N0cmluZyA9IGZ1bmN0aW9uIChjb250ZW50LCBhdHRyaWJ1dGVzKSB7XG4gIGlmICggY29udGVudCA9PT0gdm9pZCAwICkgY29udGVudCA9ICcnO1xuXG4gIHZhciBhdHRycyA9IGRlZXBtZXJnZSQxKGRlZmF1bHRBdHRycywgYXR0cmlidXRlcyB8fCB7fSk7XG4gIHZhciBhdHRyc1JlbmRlcmVkID0gb2JqZWN0VG9BdHRyc1N0cmluZyhhdHRycyk7XG4gIHJldHVybiAoXCI8c3ZnIFwiICsgYXR0cnNSZW5kZXJlZCArIFwiPlwiICsgY29udGVudCArIFwiPC9zdmc+XCIpO1xufTtcblxudmFyIHN2ZyQxID0gbmFtZXNwYWNlc18xLnN2ZztcbnZhciB4bGluayQxID0gbmFtZXNwYWNlc18xLnhsaW5rO1xuXG52YXIgZGVmYXVsdENvbmZpZyA9IHtcbiAgYXR0cnM6ICggb2JqID0ge1xuICAgIHN0eWxlOiBbJ3Bvc2l0aW9uOiBhYnNvbHV0ZScsICd3aWR0aDogMCcsICdoZWlnaHQ6IDAnXS5qb2luKCc7ICcpXG4gIH0sIG9ialtzdmckMS5uYW1lXSA9IHN2ZyQxLnVyaSwgb2JqW3hsaW5rJDEubmFtZV0gPSB4bGluayQxLnVyaSwgb2JqIClcbn07XG52YXIgb2JqO1xuXG52YXIgU3ByaXRlID0gZnVuY3Rpb24gU3ByaXRlKGNvbmZpZykge1xuICB0aGlzLmNvbmZpZyA9IGRlZXBtZXJnZSQxKGRlZmF1bHRDb25maWcsIGNvbmZpZyB8fCB7fSk7XG4gIHRoaXMuc3ltYm9scyA9IFtdO1xufTtcblxuLyoqXG4gKiBBZGQgbmV3IHN5bWJvbC4gSWYgc3ltYm9sIHdpdGggdGhlIHNhbWUgaWQgZXhpc3RzIGl0IHdpbGwgYmUgcmVwbGFjZWQuXG4gKiBAcGFyYW0ge1Nwcml0ZVN5bWJvbH0gc3ltYm9sXG4gKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgLSBzeW1ib2wgd2FzIGFkZGVkLCBgZmFsc2VgIC0gcmVwbGFjZWRcbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBhZGQgKHN5bWJvbCkge1xuICB2YXIgcmVmID0gdGhpcztcbiAgICB2YXIgc3ltYm9scyA9IHJlZi5zeW1ib2xzO1xuICB2YXIgZXhpc3RpbmcgPSB0aGlzLmZpbmQoc3ltYm9sLmlkKTtcblxuICBpZiAoZXhpc3RpbmcpIHtcbiAgICBzeW1ib2xzW3N5bWJvbHMuaW5kZXhPZihleGlzdGluZyldID0gc3ltYm9sO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN5bWJvbHMucHVzaChzeW1ib2wpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIHN5bWJvbCAmIGRlc3Ryb3kgaXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIC0gc3ltYm9sIHdhcyBmb3VuZCAmIHN1Y2Nlc3NmdWxseSBkZXN0cm95ZWQsIGBmYWxzZWAgLSBvdGhlcndpc2VcbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUgKGlkKSB7XG4gIHZhciByZWYgPSB0aGlzO1xuICAgIHZhciBzeW1ib2xzID0gcmVmLnN5bWJvbHM7XG4gIHZhciBzeW1ib2wgPSB0aGlzLmZpbmQoaWQpO1xuXG4gIGlmIChzeW1ib2wpIHtcbiAgICBzeW1ib2xzLnNwbGljZShzeW1ib2xzLmluZGV4T2Yoc3ltYm9sKSwgMSk7XG4gICAgc3ltYm9sLmRlc3Ryb3koKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gKiBAcmV0dXJuIHtTcHJpdGVTeW1ib2x8bnVsbH1cbiAqL1xuU3ByaXRlLnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24gZmluZCAoaWQpIHtcbiAgcmV0dXJuIHRoaXMuc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHMpIHsgcmV0dXJuIHMuaWQgPT09IGlkOyB9KVswXSB8fCBudWxsO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblNwcml0ZS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gaGFzIChpZCkge1xuICByZXR1cm4gdGhpcy5maW5kKGlkKSAhPT0gbnVsbDtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGUucHJvdG90eXBlLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeSAoKSB7XG4gIHZhciByZWYgPSB0aGlzLmNvbmZpZztcbiAgICB2YXIgYXR0cnMgPSByZWYuYXR0cnM7XG4gIHZhciBzdHJpbmdpZmllZFN5bWJvbHMgPSB0aGlzLnN5bWJvbHMubWFwKGZ1bmN0aW9uIChzKSB7IHJldHVybiBzLnN0cmluZ2lmeSgpOyB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHdyYXBJblN2Z1N0cmluZyhzdHJpbmdpZmllZFN5bWJvbHMsIGF0dHJzKTtcbn07XG5cbi8qKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5TcHJpdGUucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcgKCkge1xuICByZXR1cm4gdGhpcy5zdHJpbmdpZnkoKTtcbn07XG5cblNwcml0ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIGRlc3Ryb3kgKCkge1xuICB0aGlzLnN5bWJvbHMuZm9yRWFjaChmdW5jdGlvbiAocykgeyByZXR1cm4gcy5kZXN0cm95KCk7IH0pO1xufTtcblxudmFyIHNwcml0ZSA9IG5ldyBTcHJpdGUoeyBhdHRyczogeyBpZDogJ19fU1ZHX1NQUklURV9OT0RFX18nIH0gfSk7XG5cbnJldHVybiBzcHJpdGU7XG5cbn0pKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvaXMtYXJyYXlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZXJ2ZXIvZGlzdC9saWIvdXRpbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZXJ2ZXIvZGlzdC9saWIvcm91dGVyL3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5TcHJpdGVTeW1ib2wgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbnZhciBTcHJpdGVTeW1ib2wgPSBmdW5jdGlvbiBTcHJpdGVTeW1ib2wocmVmKSB7XG4gIHZhciBpZCA9IHJlZi5pZDtcbiAgdmFyIHZpZXdCb3ggPSByZWYudmlld0JveDtcbiAgdmFyIGNvbnRlbnQgPSByZWYuY29udGVudDtcblxuICB0aGlzLmlkID0gaWQ7XG4gIHRoaXMudmlld0JveCA9IHZpZXdCb3g7XG4gIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG59O1xuXG4vKipcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5zdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkgKCkge1xuICByZXR1cm4gdGhpcy5jb250ZW50O1xufTtcblxuLyoqXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblNwcml0ZVN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gIHJldHVybiB0aGlzLnN0cmluZ2lmeSgpO1xufTtcblxuU3ByaXRlU3ltYm9sLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gZGVzdHJveSAoKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgWydpZCcsICd2aWV3Qm94JywgJ2NvbnRlbnQnXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7IHJldHVybiBkZWxldGUgdGhpcyQxW3Byb3BdOyB9KTtcbn07XG5cbnJldHVybiBTcHJpdGVTeW1ib2w7XG5cbn0pKSk7XG4iLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcImxvZ29cIixcbiAgXCJ1c2VcIjogXCJsb2dvLXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAzOTkgMzk5XCIsXG4gIFwiY29udGVudFwiOiBcIjxzeW1ib2wgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB4bWxuczp4bGluaz1cXFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1xcXCIgdmlld0JveD1cXFwiMCAwIDM5OSAzOTlcXFwiIGlkPVxcXCJsb2dvXFxcIj4gIDxpbWFnZSBpZD1cXFwibG9nb19pbWFnZTBcXFwiIHdpZHRoPVxcXCIzOTlcXFwiIGhlaWdodD1cXFwiMzk5XFxcIiB4PVxcXCIwXFxcIiB5PVxcXCIwXFxcIiBocmVmPVxcXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVk4QUFBR1BDQVFBQUFBT2s1UnNBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTlxcbkFBQjZKUUFBZ0lNQUFQbi9BQUNBNlFBQWRUQUFBT3BnQUFBNm1BQUFGMitTWDhWR0FBQUFBbUpMUjBRQS80ZVB6TDhBQUFBSmNFaFpcXG5jd0FBQ3hNQUFBc1RBUUNhbkJnQUFBQUhkRWxOUlFmakNnd0dBeHhud3hlckFBQVk0MGxFUVZSNDJ1MmQ0WlhidHRLR1gzL24vZzlUXFxuUWVnS3dsdEJtQXJDVkhEcENxNjJnaXRYRUxrQ2N5c0lYWUdwQ2lKVkVLbUNTQlh3KzZGZFc3dXJ3WUFreUFHcDk4SEpPVm1UQW9jRVxcblhtS0FBY0IzTFFnaHQvay9hd01JaVJmS2d4QVJ5b01RRWNxREVCSEtneEFSeW9NUUVjcURFQkhLZ3hBUnlvTVFFY3FERUJIS2d4QVJcXG55b01RRWNxREVCSEtneEFSeW9NUUVjcURFQkhLZ3hBUnlvTVFFY3FERUJIS2d4QVJ5b01RRWNxREVCSEtneEFSeW9NUUVjcURFQkhLXFxuZ3hBUnlvTVFFY3FERUJIS2d4QVJ5b01RRWNxREVCSEtneEFSeW9NUUVjcURFQkhLZ3hBUnlvTVFFY3FERUJIS2d4QVJ5b01RRWNxRFxcbkVCSEtneEFSeW9NUUVjcURFQkhLZ3hBUnlvTVFFY3FERUJIS2d4QVJ5b01RRWNxREVCSEtneEFSeW9NUUVjcURFQkhLZ3hBUnlvTVFcXG5FY3FERUJIS2d4QVJ5b01RRWNxREVCSEtneEFSeW9NUUVjcURFQkhLZ3hBUnlvTVFFY3FERUJIS2d4QVJ5b01RRWNxREVCSEtneEFSXFxueW9NUUVjcURFQkhLZ3hBUnlvTVFFY3FERUJIS2d4QVJ5b01RRWNxREVCSEtneEFSeW9NUUVjcURFQkhLZ3hBUnlvTVFFY3FERUJIS1xcbmd4QVJ5b01RRWNxREVCSEtneEFSeW9NUUVjcURFQkhLZ3hBUnlvTVFFY3FERUJIS2d4QVJ5b01RRWNxREVCSEtneEFSeW9NUUVjcURcXG5FQkhLZ3hBUnlvTVFrWDlaRzdCb01pUlhmKzF3c2phSWRJUHlHRXFPWnhua0FJQVVQNm0vMmVPRWkxd09PRkEyOGZLdXRiWmdiaVRJXFxua0NGQkR1Q1hZTGx1Y2NBT096VFd0MGV1b1R6OHlMNmxIMGErMGg0TkdqUnNVV0tBOG5EeExJbHdyWVEvZTlTb3NiTitCUGNONVhHTFxcbkhEbnlDVm9LblNNYVZIUzVyS0E4dnBNOGljS2lyWEJ6UkkwTkR0Wm0zQitVQjNCcExRcjhiRzJHd2hZVkttc2o3b3Y3bGtlR0hEbCtcXG5zemFqQTBkVTJMRGJQaFgzS284Q0JYS1BDRVdNbkxHaFJLYmgzdVNSb0VBeHEvYmlOcFRJSk55UFBGSVVLQ0xzZHZmbmpCWDdJdU55XFxuRC9KSVVLS012dVBkanoxV0hQWWRqMlhMWXltdWxKdFBXTlBOR29mbHlxTkFnU0tDd040VUhGR3lEUm1ESmNvanhRckZURWVsK3ZNUlxcbmEyc1Rsc2ZTNUZHaVhGVDN1d3RiRkhTeXdySWNlYVJZb2J3VFowcmlpSUtUR0VPeURIbmNjNXZ4a2pOSzFOWkdMSWU1eXlQQkN1WGRcXG45VFBjZkdBMEpCUnpYa3liWW4wM1kxTmQrQXhRSUdHWXF6eHlyQllmeitnUEJSS0lPY29qeDVvOURRVUtKQWh6azBlSjFVS25oNFNHXFxuQWduQW5Mcm1KZGJzaEhmaTN4em1IY1pjNUVHSHFnOW5aRnlDTzRRNWJDS2FvOEZYaXFNSFA2QitzVThqNlVqczhraFJVeG9EK0JrYlxcbmF4UG1UTXp5U0xEQjN4eStIY2gvVUZpYk1GL2k3WHVVMkREa0Z3VDJRSG9UWit1Um9jRm5paU1RUDNDQXR5OHh5bU9OdjlqYkNNb3ZcXG5kTEQ2RVp0emxhSm0yRzhFemtpNUZxUTdjYlVlQlhZVXh5ajhnSlcxQ1hNa3B0YWp4R2RyRXhiTmUzYlF1eEpQNjFGUkhDT3p0alpnXFxuZnNUU2VxendoN1VKZHdEYmo0N0UwWHFVRk1ja3JLME5tQnN4dEI0Wm1sbkdPTTVQODJHYnA3K3ZQNkhwK3B4bWd1enAvL0tudjVMSlxcbkJpVFlmblFpQm5uTWE3VHFlRFdwL2wzQWZGT2t5SkNPL1BtZFI1UWo1cjQ0N09XeHh2K3NUVkE0WTRjZER0amhnTU9MWHRKWTcrTHNcXG42Zk50NGR0VXhqODZZUzJQRkg5YlB3S0I0OU9IbEYrNlNTOGR3ZDlIM2pRblF4NTg4K3dIenVIMXgxb2VkWFF6Y3JkbzNvamltUVROXFxuaThvNnpjYWRLUXFzZ3EyVFBDS2R3T2FGWUN1UEhGK3RIOEFUNTZldmllK2NaMVg0ejR1L3Q4Z25zekRENnRYVis4SWx0dDdZRHV5V1xcbjFyY1BZSXNIL0JzSkNteVVhbE1FcXA3OTJLSEVqL2lJOCtDY1NzTzdtQm1XcllkdHYyT1BCazJIdmtPSzNZMnVjc2l4S3o4U3JMQWFcXG4xR21uZStXTnBUdzIrSy9CVmM5b1VLUHBQT1owZS9oNWVua0FsLzBoaDdSa2RLODhzWlRIWWVKdGVZNm9PN1VYMTBqRHp6YnlBSUFjXFxuVmUvbjk0bnpkLzJ3azBlR3Z5YTcxaDROcWdGdlRHa0k0V3k2RDBpQ1RjODJaUDh0YmsrYzJPMlNXRTV5bFQwcTFBT0RkNG5ZNHV3bVxcbnVRZUpFMG8wdlZiay80eVVrMHQ4c0J1NUtrYk9mNDhIdkVlR3plQ0tVSWtWc0I3NUhueHN5M3VOWmVYV2hzOERLM21rSS9ZN2p2Z1lcXG5TQmdBbkR2QjE2UGRnejg3cE5oMy9sVnViZlk4c0hLdThsRnlQYU1hMU1kNFMrYUlpMytKeEVFNUlYOFZ6ZmU1TCtLQmxUeXk0RGwrXFxuUVJYOGJaNDRIQ3RFTkhlcHUwQitSc0twaVRwV3psVVdNSzg5SHZBamloRmNuYldqeW0yaitwTDRxWE1mSkxNMmVRNVl5U1BNbW9Zelxcbkh2RnZaTmlNOGlZc25HSEw5UWhYSEVKWGdXVFdCczhCRzNsa0FmSTQ0Z0VweXRFR1Z4UG4zb0p4dFIwWGRwMkNmWm0xdVhQQVJoN0pcXG53Tjl2OFR2U2tkcU1aMnBuUEdFMTRwWDdVK0dMOTdtcHRiRnp3RVllK1lEZlB1STk4dEdIVkZkTzkrOVR0SE9XU204SEs3TTJkUTdFXFxuc1ZPSkw0OTRqM0tDNGRUTTJiTTRSOWZ2K003SnUxMmI0K1lYa3pPZnZzZFUwZ0RnSE00RlZsRVBpVlk0ZXA2Wlc1c2FQelp4ajZUalxcbitkdE93c2lmcnBFQkFKck9uZWlOTTRLd2pmNXpBQ3Y4YVczQ1Vvai93ODFuckp3Vk1uMUtHWklYVTFYNnJ1dklsVlVvSytzSG9sSy9cXG4yR3hJSm90dzlDMHliT1NSZFRnM3Y5RU56cDcyaEVwdmRxQ1BxRkgzTFBwRWFSdmk3WlJmcy9iYXJ6aXhOak4rYk9UaDN5MDhQcjM5XFxua3ljNVpFZ2RyczhlTmVwQkZkaTl4T2dZY2FmOG1wb2ZuZ3REN003VlQvakh5MVU0b2c0d1E3ZFF0aFdLdTFQK25STnFqNFZTaWJXWlxcbjhUT0hnVjIzT0M0VFMxS3NCb3NqVlJ5ckwxRk1ZUGZEeDlMTTJzajRpYjMxY0xORkZYQWN5VDJjZTU3VkJqZzF6blN2aGpPSDF1TVdcXG5aM3pDZStRQnhiRlNwa211WitKWVBkTllHN0FFNWlpUFBUNGdDZUJNWFpNcFh4alpSclM2dzQvRzJvQWxNRGZuNmxIZHk3QWZsWEs4XFxudEw3eHp1eXNEVmdDTnZMd0MxdTkvazAxMmh6ZHRiTFM3bU1reTJhNzBGZ2JzQVJzNU5GMUE3ZzlOaU5PNWNpVkw0enNaeEx0ZUUyZlxcbmx4QjVnVTNmbys1dzdoZjhpbXhFY1doeDhqazZWaGNPMWdiTW41amxjUm1kS2taMkU5YktPM1llMDBodU1WZTdJOEpHSGdkOFVzNDRcXG40a09RVUorR05nRnhMdE5JYm5HeU5tRCtXQTNzcmgxYmx6M2lWNlNvSmloZUg4ZHFmQ3VzT0ZnYkVEOVc4amdoeCtPYmYvMkNEL2dSXFxuNVdTakx0b2U1NTltUGY2ajJYNndOakIrN09JZUo1UllJMy9hRXVDRTNlUlZVWnVBR1BPaVdUSUp0bUhCZytIS3UvdDJyQUQyVFR5WVxcbjQ2U1NNRlRLbEwwNXpjL3R4ODdhZ1BpNVYzbm9qbFZwYlNLeDV6N2xjUitPVmFJY2I2d05qSi83bElmbVdHMFg0VmhsenFQRFB3QjlcXG5COXlqUE9oWUFleDVlSEYvOHRBZHEvVkNJZ0tKOCtqTzJydzVjSC95MEIycmpiV0pnY2ljUncvVzVzMkJlNU9INWxqTllaczNYMUxuXFxuMFoyMWVYUEE3cnZtRmlRNEtHM0h4d1ZGeXQxRis4N2F2RGx3WDYySDVsak5kZUhUTFhMbFRva0g5eVNQZTNLczZGb0Y0WDdra2FoZFxcbjdublB6MzFON2p5NnBEc2RrZnVSaDdZcWNNNExuMjZSTzQ4MjF1Yk5nM3ZwbXVmNHFwengreUlpNWMraytOdHg5TWd2Qy9weEg2MkhcXG5IZ3BjMnZ6YzNIbDBXZmM2SXZjaEQ4MnhPaStxVXc0QWhmTm9ZMjNlWExnSDV5ckRYOG9aRDR1SmxGOUk4SS9qNkptZkx2RGxIbHFQXFxuU2ptK25Ha2t6eFRPbzQyMWVmTmgrZkxRTmdoZFZyVGpRdUU4V2x1Yk54K1c3bHlsMk4zUk5KTG5lLzdiZWZ6SEJTejFtb2lsdHg3YVxcbk5KTGo0aHdyYmRQVFI0ckRuMlhMbzFRK2FiT01SYk52NzhsRmJXM2VuRml5YzZYUHovMmllT2x6cEhSK3RKa0J3VTRzdWZYUVBsNjhcXG52R2dIQUtVblZWdWJOeStXSzQ5Yy9YVHhVaGJOWGxNcUFkQ050WUh6WXJuT2xmYUpuZjBpUDF6c3Z1dTVPNU1KQ3FUSUFleXdtMlNIXFxuelhhWmFkMXE1T1kyaGsvbG91OTUzWjVlM00ydVRjYSs1akpiRDIza0gzaGM0R1k5MmxERW5MdmxDWm9iNGQzUlMzR1pmWTlLT2I3TVxcblR2bEtHWXBZV3h2WW05dmlnTnE3SE13UzVWR28wWTcxQXFNZG1mSUIwYVBoYnZoRHFjV0pRZm00RjE2ZVBQUkZzL3RGanQ5bzk3UzJcXG5OckEzZW5CM05KWW5EMjF0eHhLbklBSXJwUXJOdCszUVgzY2pzalI1Wk1xbk5JSEhCVTdvenRTMlFUc2VMNlhTb3hxVnBZMWNOY3BiXFxuOUl4c2djSEFuVEpwUDlTWVZmSVVLMm9tdkRkM0pPZlhjVzFaVnV1aGU2bWJCWXBqbzY1b1dRZTRTbzRhLytBcnZ1SXJEcE9GRjNQVlxcblZSNFg4MkJQdUpTOENodTk1VEIrSUdueVZLZ0IwR2J3TmRLMmVaTnJPY25kVmNxOWpYejlKYlVlYTlWTFhkNkFidXJSNVY0UHZFYUJcXG4zWTFXK2ZNa0xVZyt3VFZjbUwvOVFxVjBncmRvYkNscGQrcGQxd092c1hHMHhXUGZYMlpkb3N0cFBTcjFqTFcxaWNIUmV4MUQ1d2RVXFxuanBIQW4wYWYxSmtyeHc4alg5LzR1K2JoMENQbHl4dlFYWGxNcWhneUZKR2dWcDVxMGpHL0RBQnc4dDRBTzFPTysrYlRIM01ISVl5VFxcbmNWQ2RqTlRjeXJCSm01M2J0bTI3Ry9STWRjY3Q3MkR0ZGVmKzFLNjlmcVZaNEgvOW5zbTZrTU1rZmZxNlgzSE1KMlhxS0YzYnRtMDJcXG40QXExbXZ2SjI5Ym14cTk5cHFOcmpQNmNyWXM1UkVyVnFuSmEySUN1bnpnMkE2NmdEYWo2NTErS3RtcS96NVhyTitNL2FldUNEcEgwXFxub2l6TmJReVo5UGhPMnc2TDhmaUl3KytWNDNZQjNiL1ZmSUwxK005Ni9pTlgrcHJ5K1U3SHUwV0N4bXNXVXY4dGlrcXZkUlErK2J0M1xcblRkSElsT1BOZ0x4OU1YOFhEazFOcTFHWTJ4Z3UrWFNZZlJ3WE9lbFIrTFp0Mjhvakp5MXFzVk4rNzI0alQxTThiK3ZpSHByMDhadkdcXG4zTVp3eVZjY3U5NVg4T3ZWK0R4VHZVZTRVaXdaTHREQmFkN09WZUlSNnRQUG1BdlNrdEszbEwydm9HMjZDZ0I3aitra0NXcDFsN0hLXFxuZVR4WHJsRDN2TWRPekZzZUszVSs1NWZGQkFQOXhmSFFPMXhXZVZ4aGo5eWoxNkhuVkNtNTVNNmo1NGsydEROM0dJYTRHcm9qa0pwYlxcbkdTWmxIb0hQQzNYdmEralJJOS9OYzN4eTBrckdYYmJWTk0vZHV0aUhKSDM0Y2FLSE9Icnk2eEcwN1pEaFhDM0s0QzhPbjg2OVZqS2FcXG5OY1UwVDk2NjRQc25mWWJ1VW9LQmhiYzQrc2ZKZlZwaVAzSG9YZksyMWR1T2pmUFhoNm1lL1h6N0hodVBNMDdXUmdhZ3hKL2VxNjAvXFxuOU81MWFCMXA0SXpDNDNucVhYSUFlRlFuU3VhS3RWTmgvbTdzbDNSWFlCbHRoMC84K3BtcTkxVldIazh6QzJodnF1U2llUWJhNzRNbFxcbjYrTHZtL1JnNE5yY3hxRXA4YmpMNyt4NlgwZUxNUGlMUTVkWjIvcUVMTjM1Tk5PVmdYVVY2SmYwenQvQjNNYWhLZk1NQVQ3ZmI5THpcXG5PajZoeHNMVFloOThXdlZkQUd1Q0pPdEswQy9wZzV5bHVZM0RVdG1oTys3L2RyK1ZObXJ1ZnMvU2I2S2tUNnZ1ZHEwT1U1YURkVFhvXFxuVjNVMEpuMkVJeVM5eW9aNm4rcDl1TW96Sno5SDBLZnRjRWROVmxPV2hIVkY2Sk9XM1hha25aeXFZWGVydi9Gcno1eDhBb0crbGR0VlxcbnZoTVB1RmhYaHU1SjcvNDE1amIyVDkyY3FyWWR0dWhKV3hIbys0RVp2MW0rZnEyNk82LzF0T1ZoWFIyNkpoOFBOemUzc3UrOTZRdFlcXG5YMU1OdUo1V3FYMTdOSDZCd0xiMWN3TGRUbG82YlpsWVY0bXVTVy9FRzNNYis2WGNlMVpWR0hIb0w1ckNNeDlmWjlDblpOemQ4aUgzXFxuMnl0WlY0clFSVHBzK3dHNysrcmFHVy9iWWZ1UTZJN1Z4ak1mLzhCbFBqaTNkT3FTc2E0WTNaTGVkbFRtTm5aUGZkcU5vUitlMUJ5clxcbm5XYytmb0ZBMzVKSllpdGI2NnJSSmVsdHgybDJFOWo3OURlR2kwUGJGOHozT2ZyTThuM0dKOGYxNEJ3Q0ordnEwU1V0Ynplcjd1TlVcXG5JY1NoeDFVS3IxeDhBNEZ0NitlcXVmT3JMRXJJdW9MNHA2VjluaURyTktNcXBEaTBkLzdHTXgvLytJeGZ0TUx0cUtVV3BXUmRTZnlUXFxuM25hVTVqYjZwbjVkOFREaTBLcTE3MHVteTF6aXRWZU9oOEU1QkUvV0ZjVy9RdWx0aDdXTnZxbXZTOVcyYlZzUEZvZldtYzZDNUhMTlxcbjhBM2p6QlluV0ZjVjM2UzNIYm01alQ0cDd6eGw1SnBxOFBXMTE4emE4eTY2VUhybEdXSGJNUmQ1NkcxSFkyNmpudnIzTmtLSlEzT0pcXG5EcDczMGFYMTg4dXpkT2FRV0pXWmRaWHhTM3BUbnB2YjZFNXBKMS85RnFzQVZtaHZmWituNkI4bHYxQjZXWFlZbk1Nb3licmErQ1V0XFxuYkZhYlcraEt3NlVScW9xNFc2OU5nRHhlYy9ESzArVTZONVpsWjExMWZKSyt2aU0xdDFGS0lhUXhaTEdULzNQMDYvNTJ2WnZTSTArM1xcbjY1eGJscDkxOWZGSld0dlJtRnQ0TzRXUVJ0dnVnczBpY3ovSHdpTUhueTlTWFhQd3NzdlZkbFMyWldoZGhmU2tyeVhJelcxOG03SWdcXG4wbWpiSmxpM2RLMWNKMFJKdktiMHlOVTFIZDU4a3BCMU5kS1Q1dXZ1ekMxOFc0MkdqVkI5WnhQTUptM3NUNitHM2NhcjJ0YTM3WEM5XFxuUnRiV1pXbGRsYlNrajdDWDVqWmVWOEt5MSt6Ylc1eUMzcG03N2RoNDNGbjNVS2FQL2E3eVBaaVhaL1R5MEYyVXhOekdTMHJiYWtBMFxcbi9HM1Z5QUxhNXE3Y2VxZGNIc3c5RGNnVnJYdUNTMjVlcHBITFE5OUh0emEzOGRKbWhIS25udS9LcDJyNXA2RjdmMGlWK09DWWpyLzJcXG5zTXNWejRxaFpDT1hSL3pURUxPZ2JZWnZkZTJXM0czSFFmMjkzSUs3T3V2SklMc2kyUUwyWDVOdDV0dUhVajJqTWJNdFJZbFMvZnhPXFxuVjQ0b2VtOGpMYkZ5YmdxOVVuNWRpUi9pZkhCOEhQUFI2eE01c2wzclNMWVB0OWFuSS9rTUpGcllsYmFyUVJNTFpVSTdWWmZrYWpzYVxcbjViY2JoNjJ1U0VvMnFIUTFxeVpMNWdZNGt0NHRuL294WnFNSkkvUkkxZmZrRHVYbFBYOTdhQk5IQmRmTHhiMmNOek92ZTAvSjNBREhcXG5BL1JoS211S2RoTnN5UFoyaFVwSHN2emd2S3JybDdJNEx0TmM1RzU1cVZybFdtRy9OcTk3MzVLNUFUMEs1NXA4WkN1eWR0VnpzNFF1XFxuckVhejN4MDNjajA5MS9Ndlc5ZnI2NlJhNVhLc0R1WTE3eXFaR3lBbXYwclpqSFQxaXl4Q2owbmRJdHljcWx1cGNsNVovcDFMSEZXTFxcbjFqVW9XeWsycGZGT1FYeWR6QTBRazIvVnJBSjJaOU8yYU5kdE00a3Myclp0VHlQdk4rNTJVTXRlNG5oZTZ5NzN3VExGS2xlTWFHTmVcXG43MTRrY3dPRTFHVzU1cUZkRFpKSTNwYVRpdUtaOGZvYlB0WDhKUDVxNWZ6VnhXWTVZSHRRYkhKdFFoSGRYak94eGozeUR1ZitoRC93XFxuQjdab3NNTkJqUm9reUFCa1NKNys4LzJzWlZqT1dLRWEvU29yeDdGYStIYzV6Z0VBNWROSE00dk8rZUxwZC85MTVuNGEvWmwwWWdueVxcbnVQQUxmdm4yLzl1YloxaEo0UzJmSmdsN3BmalpjYlM2OFc4Sk5rNXhmUHhXK1hQeG5OcngrOHo1U3Zoa0dPUVZlTmRhVzNDYlV6UlZcXG5PVFJicklMSHhXOVQ0clBqNkxzMy81S2lkZ3JxeTdjMkk4RS93amxuSk9MdkV6U08vUGZJWTJzN0VPbDN6Wk9GaXVPTUQ4Z25Fb2ZMXFxuQVFLT044N2VPY1d4djVyaWs0dG51ZTdOTGI3b0hDc2dWbmxrMWdhTXdrZWtFL1EzdnZPYjQxank2cThLZnpwZlNlY1gxVGNYejJ2RVxcbkk5V1Y4L3VXaDhsZUdwMklVeDZKdFFIQmVjVDdpYWZaNWM2alAzeHJDeEtzY1hEMk9BQ2dmRkY5NWJ3YjRkL2RmWm90TmhNK21RN0VcXG4yVFhQckEwSXluUzlqV3R5NWZobjVEZ2djN1l4enp5ODZuRC83UEdiYTBybmVOWFo2UWFhRXFjOGxzTVdhNlB4bUV3OVEyc3hubmw4XFxuOVc3UEhlZmV1dGNWL25EbVg4VFk2N2dRcHp3U2F3T0NzTWZLY0tneUMzWVg1YUNjSzBXR0grTWJ6djFPbkgyUHpOcUF3ZXp4QVpscFxcbndZZFpxTFcvMFZha2p2TmZucDJnVWNTeHhYclNwOUtST09VeGI3YjRWUW1BalU4V0pKZnpUY2ZIbGZmcTZ2OUxISnlqVlZIM09pN0VcXG42VnpORjd1K3hrdVNBSG1ja1Q5TklmSFAremZVcUhCQ2djS2ovWW93RVBnU3lpTWNqOWpFT1hyZmk3TVl3SFNQVy8zbU5SWUdBQi9pXFxuZjFxVVJ3ak8yS0M2K2FhZEsrZlJvL3Vmak4xUEx5aVBvUnl4UmgyN2s5Q1o4UHVsdk9TTHVrTktGRkFlUTNoRUZVVlBJelFmUnI2clxcbnZjY1dUVkZBZWZUamlBMnF4YlVaRno2TTdQWkVPVGYzTnBSSFY4Nm9aOUJtN0hyZjNkakx0TTR4UjhsZkU2Yzhkc3A0dVJWYlZEUHBcXG5aNXh3N0JFWUhMOURMZzBXUjBxY1ljR1R0UUZ2Mk9NQjc1SFB5S0ZxT3YvQ1Z4eEhqM09HWFNFYTRtdzlEdFlHWExGSGhUb3FpL3lvXFxudmFjY1h2Q3Z1b2VlRTFabUp3N0t3OFZjaFhHaDd1UmVkZWt1TjcxYzMvMnJOU096SU5hMTVyWm1mVUdOWnJiQ2VNYTkxdnpsL1haWlxcbnlwcmphMmRiWmpSYWRVMnM4cWk5cHlhRVpJOEdqYklWelp6d2M0TStkcDQxMjlXOWVzUnFqdUtJMWJtYVdoNUhOR2dXMEY2OHBzQmZcXG42cDJYUFRyeEZmN1g0ZXlIV0pmSzZzVGFldlR2QUhaaGo5MGlaZkVkbDROMXhnYWJYbS8xQkR2UDBobmpjejRURXE4OEN2dzVVczVIXFxuN0xCRGc5MDhHL3lPRkRlL3d0UmZHaGN5TkI2YkxYMGNkSTBJaUZjZVhicVdQbXh4d09GdVJIRk5naFdLYjlQUUw0NWtOVGhYVFNDUFxcbldNKy9WWTVaSGtDR3pZRDQrUlpBZ3hOMk9NeS9vQ0lreGZwbWJPV01lZ25TQUdLWEJ3Q2tLSkFoZGNya3NxZnVDVHZnU1FxTnRkbDNcXG53blBwUE5OZ3Q2Q1J2eG5JNHpVWmtqdDBrSWdKODVNSElaTVI1NVJFUXFLQThpQkVoUElnUklUeUlFU0U4aUJFaFBJZ1JJVHlJRVNFXFxuOGlCRWhQSWdSSVR5SUVTRThpQkVoUElnUklUeUlFU0U4aUJFaFBJZ1JJVHlJRVNFOGlCRWhQSWdSSVR5SUVTRThpQkVoUElnUklUeVxcbklFU0U4aUJFaFBJZ1JJVHlJRVNFOGlCRWhQSWdSSVR5SUVTRThpQkVoUElnUklUeUlFU0U4aUJFaFBJZ1JJVHlJRVNFOGlCRWhQSWdcXG5SSVR5SUVTRThpQkVoUElnUklUeUlFU0U4aUJFaFBJZ1JJVHlJRVNFOGlCRWhQSWdSSVR5SUVTRThpQkVoUElnUklUeUlFU0U4aUJFXFxuaFBJZ1JJVHlJRVNFOGlCRWhQSWdSSVR5SUVTRThpQkVoUElnUklUeUlFU0U4aUJFaFBJZ1JJVHlJRVNFOGlCRWhQSWdSSVR5SUVTRVxcbjhpQkVoUElnUklUeUlFU0U4aUJFaFBJZ1JJVHlJRVNFOGlCRWhQSWdSSVR5SUVTRThpQkVoUElnUklUeUlFU0U4aUJFaFBJZ1JJVHlcXG5JRVNFOGlCRWhQSWdSSVR5SUVTRThpQkVoUElnUklUeUlFU0U4aUJFaFBJZ1JJVHlJRVNFOGlCRWhQSWdSSVR5SUVTRThpQkVoUElnXFxuUklUeUlFU0U4aUJFaFBJZ1JJVHlJRVNFOGlCRTVQOEJ5NGlGeEdvVFBza0FBQUFsZEVWWWRHUmhkR1U2WTNKbFlYUmxBREl3TVRrdFxcbk1UQXRNVEZVTWpJNk1ETTZNamdyTURnNk1EQkd3TmVMQUFBQUpYUkZXSFJrWVhSbE9tMXZaR2xtZVFBeU1ERTVMVEV3TFRFeFZESXlcXG5PakF6T2pJNEt6QTRPakF3TjUxdk53QUFBQUJKUlU1RXJrSmdnZz09XFxcIj48L2ltYWdlPlxcbjwvc3ltYm9sPlwiXG59KTtcbnZhciByZXN1bHQgPSBzcHJpdGUuYWRkKHN5bWJvbCk7XG5leHBvcnQgZGVmYXVsdCBzeW1ib2wiLCJpbXBvcnQgU3ByaXRlU3ltYm9sIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLWJha2VyLXJ1bnRpbWUvc3ltYm9sLmpzXCI7XG5pbXBvcnQgc3ByaXRlIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvc3ZnLXNwcml0ZS1sb2FkZXIvcnVudGltZS9zcHJpdGUuYnVpbGQuanNcIjtcbnZhciBzeW1ib2wgPSBuZXcgU3ByaXRlU3ltYm9sKHtcbiAgXCJpZFwiOiBcIm5leHRcIixcbiAgXCJ1c2VcIjogXCJuZXh0LXVzYWdlXCIsXG4gIFwidmlld0JveFwiOiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgXCJjb250ZW50XCI6IFwiPHN5bWJvbCBjbGFzcz1cXFwiaWNvblxcXCIgdmlld0JveD1cXFwiMCAwIDEwMjQgMTAyNFxcXCIgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBpZD1cXFwibmV4dFxcXCI+PHBhdGggZD1cXFwiTTY1NS43MDYxNzkgNDY1LjYwMjgxOUwzMzIuMDUzODk3IDIxOC41ODgyOTRjLTM4LjQxNDYwOC0yOS4zMjc1MzQtOTMuNzkxMzkzLTEuOTI5MDM5LTkzLjc5MTM5MiA0Ni4zOTYyNzd2NDk0LjAyOTA1MWMwIDQ4LjMyNTMxNiA1NS4zNzY3ODUgNzUuNzI1NjE3IDkzLjc5MTM5MiA0Ni4zOTgwODRsMzIzLjY1MjI4Mi0yNDcuMDE0NTI1YzMwLjYwMjcyMi0yMy4zNTc5ODkgMzAuNjAyNzIyLTY5LjQzNjM3MiAwLTkyLjc5NDM2MnpNNzgxLjA2NDgxNCA3ODAuNzk4Mzk3VjQ1MS42ODQxMTd2LTE2NC41NjI1NTljMC0xOS42MjgxNTIgNS45MDQ1MjEtNjAuNDc1NzMzLTE3LjA1NzkwNy03NS44NDEyMTUtMjUuNTIzNjQyLTE3LjA2ODc0NC01OS43NDc4MjggMS4yMTAxNjUtNTkuNzQ3ODI4IDMxLjkxOTQ1NHY0OTMuNjc2ODM5YzAgMTkuNjI4MTUyLTUuOTE1MzU4IDYwLjQ3MzkyNyAxNy4wNDcwNjkgNzUuODQxMjE1IDI1LjUzMjY3MyAxNy4wNjg3NDQgNTkuNzU4NjY2LTEuMjExOTcxIDU5Ljc1ODY2Ni0zMS45MTk0NTR6XFxcIiBwLWlkPVxcXCIxMjkwMVxcXCIgLz48L3N5bWJvbD5cIlxufSk7XG52YXIgcmVzdWx0ID0gc3ByaXRlLmFkZChzeW1ib2wpO1xuZXhwb3J0IGRlZmF1bHQgc3ltYm9sIiwiaW1wb3J0IFNwcml0ZVN5bWJvbCBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1iYWtlci1ydW50aW1lL3N5bWJvbC5qc1wiO1xuaW1wb3J0IHNwcml0ZSBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL3N2Zy1zcHJpdGUtbG9hZGVyL3J1bnRpbWUvc3ByaXRlLmJ1aWxkLmpzXCI7XG52YXIgc3ltYm9sID0gbmV3IFNwcml0ZVN5bWJvbCh7XG4gIFwiaWRcIjogXCJjYXRcIixcbiAgXCJ1c2VcIjogXCJjYXQtdXNhZ2VcIixcbiAgXCJ2aWV3Qm94XCI6IFwiMCAwIDEwODIgMTAyNFwiLFxuICBcImNvbnRlbnRcIjogXCI8c3ltYm9sIGNsYXNzPVxcXCJpY29uXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTA4MiAxMDI0XFxcIiB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGlkPVxcXCJjYXRcXFwiPjxwYXRoIGQ9XFxcIk04NzcuNzE0Mjg2IDEwMjRIMjA0LjhBMjA0LjggMjA0LjggMCAwIDEgMCA4MTkuMlY0MjQuMjI4NTcxYTI5LjI1NzE0MyAyOS4yNTcxNDMgMCAwIDEgMjkuMjU3MTQzLTI5LjI1NzE0MmgxMDI0YTI5LjI1NzE0MyAyOS4yNTcxNDMgMCAwIDEgMjkuMjU3MTQzIDI5LjI1NzE0MnYzOTQuOTcxNDI5YTIwNC44IDIwNC44IDAgMCAxLTIwNC44IDIwNC44ek01OC41MTQyODYgNDUzLjQ4NTcxNHYzNjUuNzE0Mjg2YTE0Ni4yODU3MTQgMTQ2LjI4NTcxNCAwIDAgMCAxNDYuMjg1NzE0IDE0Ni4yODU3MTRoNjcyLjkxNDI4NmExNDYuMjg1NzE0IDE0Ni4yODU3MTQgMCAwIDAgMTQ2LjI4NTcxNC0xNDYuMjg1NzE0VjQ1My40ODU3MTR6XFxcIiBmaWxsPVxcXCJcXFwiIHAtaWQ9XFxcIjM2MzdcXFwiIC8+PHBhdGggZD1cXFwiTTMyMS44Mjg1NzEgNDUzLjQ4NTcxNEgxNDYuMjg1NzE0YTI5LjI1NzE0MyAyOS4yNTcxNDMgMCAwIDEtMjkuMjU3MTQzLTI5LjI1NzE0M1YyOS4yNTcxNDNhMjkuMjU3MTQzIDI5LjI1NzE0MyAwIDAgMSAyOS4yNTcxNDMtMjkuMjU3MTQzaDE3NS41NDI4NTdhMjkuMjU3MTQzIDI5LjI1NzE0MyAwIDAgMSAyOS4yNTcxNDMgMjkuMjU3MTQzdjM5NC45NzE0MjhhMjkuMjU3MTQzIDI5LjI1NzE0MyAwIDAgMS0yOS4yNTcxNDMgMjkuMjU3MTQzeiBtLTE0Ni4yODU3MTQtNTguNTE0Mjg1aDExNy4wMjg1NzJWNTguNTE0Mjg2aC0xMTcuMDI4NTcyek05NTAuODU3MTQzIDQ1My40ODU3MTRINzc1LjMxNDI4NmEyOS4yNTcxNDMgMjkuMjU3MTQzIDAgMCAxLTI5LjI1NzE0My0yOS4yNTcxNDNWMjkuMjU3MTQzYTI5LjI1NzE0MyAyOS4yNTcxNDMgMCAwIDEgMjkuMjU3MTQzLTI5LjI1NzE0M2gxNzUuNTQyODU3YTI5LjI1NzE0MyAyOS4yNTcxNDMgMCAwIDEgMjkuMjU3MTQzIDI5LjI1NzE0M3YzOTQuOTcxNDI4YTI5LjI1NzE0MyAyOS4yNTcxNDMgMCAwIDEtMjkuMjU3MTQzIDI5LjI1NzE0M3ogbS0xNDYuMjg1NzE0LTU4LjUxNDI4NWgxMTcuMDI4NTcxVjU4LjUxNDI4NmgtMTE3LjAyODU3MXpNNDcxLjA0IDQzOC44NTcxNDNhMjkuMjU3MTQzIDI5LjI1NzE0MyAwIDAgMS0yOC4yMzMxNDMtMjEuNjUwMjg2TDM1Ni43OTA4NTcgOTYuMjU2YTI5LjI1NzE0MyAyOS4yNTcxNDMgMCAwIDEgMjAuNjI2Mjg2LTM1Ljg0TDU0Ny4xMDg1NzEgMTQuNjI4NTcxYTI5LjI1NzE0MyAyOS4yNTcxNDMgMCAwIDEgMzUuNjkzNzE1IDIwLjYyNjI4Nmw5NC4zNTQyODUgMzUxLjA4NTcxNGEyOS4yNTcxNDMgMjkuMjU3MTQzIDAgMCAxLTU2LjYxMjU3MSAxNC42Mjg1NzJsLTg2LjYwMTE0My0zMjEuODI4NTcyLTExMy4wNzg4NTcgMzAuMjgxMTQzIDc4LjQwOTE0MyAyOTIuNTcxNDI5YTI5LjI1NzE0MyAyOS4yNTcxNDMgMCAwIDEtMjAuNjI2Mjg2IDM1Ljg0IDI3Ljk0MDU3MSAyNy45NDA1NzEgMCAwIDEtNy42MDY4NTcgMS4wMjR6XFxcIiBmaWxsPVxcXCJcXFwiIHAtaWQ9XFxcIjM2MzhcXFwiIC8+PC9zeW1ib2w+XCJcbn0pO1xudmFyIHJlc3VsdCA9IHNwcml0ZS5hZGQoc3ltYm9sKTtcbmV4cG9ydCBkZWZhdWx0IHN5bWJvbCIsIi8qKlxuICogQGRlc2NyaXB0aW9uIOaXpeacn+agvOW8j+WMliDlj6/ovazmjaLmiJDoh6rlt7Hmg7PopoHnmoTmoLzlvI9cbiAqIEBwYXJhbSB7IFN0cmluZyB9IGZtdCDmoLzlvI/mqKHmnb8gJ3l5eXktTU0tZGQgaGg6bW06c3MnXG4gKiBAcGFyYW0geyBEYXRlIH0gZGF0ZSDml6XmnJ/lhoXlrrkgIOWmgiDlvZPliY3ml6XmnJ8gbmV3IERhdGUoKVxuICogQHJldHVybiB7IFN0cmluZyB9ICcyMDE4LTA4LTE1IDAxOjQ2OjIyJ1xuICogQGV4YW1wbGVcbiAqIGZvcm1hdERhdGUoYHl5eXktTU0tZGQgaGg6bW06c3NgLCBuZXcgRGF0ZSgpKVxuICogQGV4YW1wbGVcbiAqIGZvcm1hdERhdGUoYHl5eXktTU0tZGRgLCBuZXcgRGF0ZSgpKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShmbXQ6IHN0cmluZywgZGF0ZSA9IG5ldyBEYXRlKCkpIHtcbiAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICBsZXQgbzogYW55ID0ge1xuICAgICAgJ00rJzogbmV3RGF0ZS5nZXRNb250aCgpICsgMSxcbiAgICAgICdkKyc6IG5ld0RhdGUuZ2V0RGF0ZSgpLFxuICAgICAgJ2grJzogbmV3RGF0ZS5nZXRIb3VycygpLFxuICAgICAgJ20rJzogbmV3RGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICAncysnOiBuZXdEYXRlLmdldFNlY29uZHMoKSxcbiAgICAgICdxKyc6IH5+KChuZXdEYXRlLmdldE1vbnRoKCkgKyAzKSAvIDMpLFxuICAgICAgJ1MnOiBuZXdEYXRlLmdldE1pbGxpc2Vjb25kcygpIC8vIOavq+enklxuICB9O1xuICBpZiAoLyh5KykvLnRlc3QoZm10KSkge1xuICAgICAgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAobmV3RGF0ZS5nZXRGdWxsWWVhcigpICsgJycpLnN1YnN0cig0IC0gUmVnRXhwLiQxLmxlbmd0aCkpO1xuICB9XG4gIGZvciAobGV0IGsgaW4gbykge1xuICAgICAgaWYgKG5ldyBSZWdFeHAoJygnICsgayArICcpJykudGVzdChmbXQpKSB7XG4gICAgICAgICAgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoUmVnRXhwLiQxLmxlbmd0aCA9PT0gMSkgPyAob1trXSkgOiAoKCcwMCcgKyBvW2tdKS5zdWJzdHIoKCcnICsgb1trXSkubGVuZ3RoKSkpO1xuICAgICAgfVxuICB9XG4gIHJldHVybiBmbXQ7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOWIpOaWreWFg+e0oOaYr+WQpuWtmOWcqOafkOS4qmNsYXNz57G7XG4gKiBAcGFyYW0geyBIVE1MRWxlbWVudCB9IGVsIGRvbeWFg+e0oFxuICogQHBhcmFtIHsgU3RyaW5nIH0gY2xhc3NOYW1lIGNsYXNz5ZCN56ewXG4gKiBAZXhhbXBsZVxuICogaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2QtdXRpbHMnKVxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzQ2xhc3MgKGVsOiBIVE1MRWxlbWVudCB8IEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpXG4gIH1cbiAgXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDliKTmlq3lhYPntKDmmK/lkKblrZjlnKjmn5DkuKpjbGFzc+exu1xuICogQHBhcmFtIHsgSFRNTEVsZW1lbnQgfSBlbCBkb23lhYPntKBcbiAqIEBwYXJhbSB7IFN0cmluZyB9IGNsYXNzTmFtZSBjbGFzc+WQjeensFxuICogQGV4YW1wbGVcbiAqIGhhc0NsYXNzKGRvY3VtZW50LmJvZHksICdkLXV0aWxzJylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZENsYXNzIChlbDogSFRNTEVsZW1lbnQgfCBFbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XG4gIGlmIChBcnJheS5pc0FycmF5KGNsYXNzTmFtZSkpIHtcbiAgICBjbGFzc05hbWUuZm9yRWFjaCgoaXRlbTogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIWhhc0NsYXNzKGVsLCBpdGVtKSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGl0ZW0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoIWhhc0NsYXNzKGVsLCBjbGFzc05hbWUpKSB7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gIH1cbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g5YWD57Sg5Yig6ZmkY2xhc3NcbiAqIEBwYXJhbSB7IEhUTUxFbGVtZW50IH0gZWwgZG9t5YWD57SgXG4gKiBAcGFyYW0geyAoU3RyaW5nIHwgQXJyYXkpIH0gY2xhc3NOYW1lIGNsYXNz5ZCN56ew77yM5Y+v5Lul5piv5aSa5LiqXG4gKiBAZXhhbXBsZVxuICogcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2QtdXRpbHMnKVxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MgKGVsOiBIVE1MRWxlbWVudCB8IEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nIHwgc3RyaW5nW10pOiB2b2lkIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NOYW1lKSkge1xuICAgIGNsYXNzTmFtZS5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChoYXNDbGFzcyhlbCwgaXRlbSkpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShpdGVtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuXG4gIH1cbiAgaWYgKGhhc0NsYXNzKGVsLCBjbGFzc05hbWUpKSB7XG4gICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpXG4gIH1cbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g6K6+572uQ29va2llXG4gKiBAcGFyYW0geyBTdHJpbmcgfSBuYW1lIGNvb2tpZeWQjeensFxuICogQHBhcmFtIHsgU3RyaW5nIH0gdmFsdWUgY29va2XnmoTlgLxcbiAqIEBwYXJhbSB7IE51bWJlciB9IGV4cCDov4fmnJ/ml7bpl7Qg6buY6K6kMuWwj+aXtiDljZXkvY3mr6vnp5JcbiAqIEBleGFtcGxlXG4gKiAvLyDorr7nva5uYW1l5Li6dGVzdOeahOWAvOS4ujEyMzQ177yM6K6+572u6L+H5pyf5pe26Ze05Li6MeWwj+aXtlxuICogc2V0Q29va2llKCd0ZXN0JywgJzEyMzQ1JywgNjAgKiA2MCAqIDEwMDApXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWUgKG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwOiBudW1iZXIgPSA2MCAqIDYwICogMiAqIDEwMDApOiB2b2lkIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcbiAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgZXhwKVxuICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke2VzY2FwZSh2YWx1ZSl9O2V4cGlyZXM9JHtkYXRlLnRvVVRDU3RyaW5nKCl9YFxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDojrflj5ZDb29raWVcbiAqIEBwYXJhbSB7IFN0cmluZyB9IG5hbWUgY29va2ll5ZCN56ewXG4gKiBAcmV0dXJucyB7IChBcnJheSB8IE51bGwpIH0g6L+U5Zue5pWw5o2uXG4gKiBAZXhhbXBsZVxuICogZ2V0Q29va2llKCd0ZXN0JylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZSAobmFtZT86IHN0cmluZyk6IHN0cmluZyB8IGFueSB7XG4gIGlmIChuYW1lKSB7XG4gICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChgKF58ICkke25hbWV9PShbXjtdKikoO3wkKWApXG4gICAgY29uc3QgYXJyID0gZG9jdW1lbnQuY29va2llLm1hdGNoKHJlZylcbiAgICByZXR1cm4gYXJyJiZhcnJbMl0gPyBhcnJbMl0gOiBudWxsXG4gIH1cbiAgY29uc3QgZ2V0QWxsQ29va2llcyA9IFtdXG4gIGlmIChkb2N1bWVudC5jb29raWUubGVuZ3RoKSB7XG4gICAgY29uc3QgYXJyQ29va2llID0gZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAuY29va2llXG4gICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCc7ICcpXG4gICAgZm9yIChsZXQgayBpbiBhcnJDb29raWUpIHtcbiAgICAgIGdldEFsbENvb2tpZXMucHVzaCh7XG4gICAgICAgIG5hbWU6IGAke3VuZXNjYXBlKGFyckNvb2tpZVtrXS5zcGxpdCgnPScpWzBdKX1gLFxuICAgICAgICB2YWx1ZTogYCR7dW5lc2NhcGUoYXJyQ29va2llW2tdLnNwbGl0KCc9JylbMV0pfWBcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBnZXRBbGxDb29raWVzXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDliKDpmaRDb29raWVcbiAqIEBwYXJhbSB7IFN0cmluZyB9IG5hbWUgY29va2ll5ZCN56ewIOWmguaenOS4jeS8oOWPguaVsOWImeiuvue9ruaJgOaciWNvb2tpZei/h+acn1xuICogQHJldHVybnMgeyBBcnJheSB9IOaYr+S4gOS4quS8quaVsOe7hFxuICogQGV4YW1wbGVcbiAqIHJlbW92ZUNvb2tpZSgndGVzdCcpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDb29raWUgKG5hbWU6IHN0cmluZyk6IGFueSB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSAtIDEpXG4gIGlmIChuYW1lKSB7XG4gICAgY29uc3QgY29va2llSW5mbyA9IGdldENvb2tpZShuYW1lKVxuICAgIGlmIChjb29raWVJbmZvICE9PSBudWxsKSB7XG4gICAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lfT0ke2Nvb2tpZUluZm99O2V4cGlyZXM9JHtkYXRlLnRvVVRDU3RyaW5nKCl9YFxuICAgIH1cbiAgICByZXR1cm5cbiAgfVxuICBjb25zdCBhbGxDb29raWVzID0gZ2V0Q29va2llKClcbiAgZm9yIChsZXQgayBpbiBhbGxDb29raWVzKSB7XG4gICAgZG9jdW1lbnQuY29va2llID0gYCR7YWxsQ29va2llc1trXS5uYW1lfT0ke2FsbENvb2tpZXNba10udmFsdWV9O2V4cGlyZXM9JHtkYXRlLnRvVVRDU3RyaW5nKCl9YFxuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFqQkE7QUF1QkE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFDQTtBQWdCQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQVJBOzs7Ozs7OztBQ3JFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdCQTs7Ozs7Ozs7O0FDQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTs7Ozs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUpBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVEE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNUQTs7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQWZBO0FBQ0E7QUFhQTtBQUNBO0FBREEsYUFDQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQVFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBUUE7QUFDQTtBQUNBOzs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFXQTtBQUNBO0FBdEJBO0FBQ0E7QUF1QkE7Ozs7Ozs7QUNoQ0E7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMvQkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1RBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUNyQkE7QUFDQTtBQUNBLFVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbFBBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBLFVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN0Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNUQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=