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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "+oBk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K2gz");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Layout = props => {
  const classStringContainer = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
    'dw-page-router': true
  });
  return __jsx("div", null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, null, __jsx("title", null, props.title), __jsx("meta", {
    charSet: "utf-8"
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width"
  })), __jsx("div", {
    id: "dw-react-web-container",
    className: classStringContainer
  }, props.children));
};

Layout.defaultProps = {
  title: '这是一个默认的title'
};
/* harmony default export */ __webpack_exports__["a"] = (Layout);

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

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("7VuA");


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

/***/ "7VuA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout/index.tsx
var Layout = __webpack_require__("+oBk");

// EXTERNAL MODULE: ./constance/index.ts
var constance = __webpack_require__("153H");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: ./components/Icon/icon.less
var icon = __webpack_require__("ZUMK");

// CONCATENATED MODULE: ./components/Icon/index.tsx
var __jsx = external_react_default.a.createElement;





const Icon = props => {
  const {
    0: color,
    1: setColor
  } = Object(external_react_["useState"])(props.active ? props.activeColor : props.color || constance["c" /* SVG_DEFAULT_COLOR */]);
  const svgStyle = {
    'width': `${props.size ? props.size : 16}px`,
    'height': `${props.size ? props.size : 16}px`,
    'marginRight': props.children ? '5px' : '0'
  };
  const classString = external_classnames_default()({
    [`${constance["b" /* PROJECT_NAME */]}-comp-icon`]: true
  });

  const setHover = () => {
    if (props.hoverColor) {
      setColor(color => color = props.hoverColor);
      return true;
    }

    return false;
  };

  const setDefault = () => {
    if (props.hoverColor) {
      setColor(color => color = props.color || constance["c" /* SVG_DEFAULT_COLOR */]);
      return true;
    }

    return false;
  };

  const mouseEnter = () => {
    setHover();
  };

  const mouseLeave = () => {
    setDefault();
  };

  return __jsx("div", {
    className: classString
  }, __jsx("svg", {
    style: svgStyle,
    onMouseEnter: mouseEnter,
    onMouseLeave: mouseLeave
  }, __jsx("use", {
    xlinkHref: `#${props.svgId}`,
    fill: color
  })), props.children);
};

/* harmony default export */ var components_Icon = (Icon);
// EXTERNAL MODULE: ./module/blog.list/list.less
var blog_list_list = __webpack_require__("Mhdn");

// EXTERNAL MODULE: ./utils/utils.ts
var utils = __webpack_require__("z1bh");

// CONCATENATED MODULE: ./module/blog.list/index.tsx
var blog_list_jsx = external_react_default.a.createElement;








const BlogList = ({
  list
}) => {
  const classString = external_classnames_default()({
    [`${constance["b" /* PROJECT_NAME */]}-comp-blog-list`]: true
  });
  return blog_list_jsx("li", {
    className: classString
  }, blog_list_jsx(link_default.a, {
    href: `/blog/detail?id=${list.id}`
  }, blog_list_jsx("a", null, blog_list_jsx("h2", {
    className: `${classString}-title`
  }, list.name), blog_list_jsx("div", {
    className: `${classString}-conf`
  }, blog_list_jsx("div", {
    className: `${classString}-date`
  }, blog_list_jsx(components_Icon, {
    svgId: "creat",
    color: "#999"
  }, " ", Object(utils["a" /* formatDate */])('yyyy-MM-dd', new Date(list.createDate.split(' ')[0])), " ")), blog_list_jsx("div", {
    className: `${classString}-read`,
    title: `浏览量${list.readCount}`
  }, blog_list_jsx(components_Icon, {
    svgId: "read",
    color: "#999"
  }, " ", list.readCount, " ")), blog_list_jsx("div", {
    className: `${classString}-tag`,
    title: "\u5206\u7C7B"
  }, blog_list_jsx(components_Icon, {
    svgId: "tag",
    color: "#999"
  }, list.tagLists && list.tagLists.map((item, index) => blog_list_jsx("div", {
    className: "cat-list",
    key: index
  }, index > 0 ? blog_list_jsx("span", null, " , ") : null, item.name))))))));
};

/* harmony default export */ var blog_list = (BlogList);
// EXTERNAL MODULE: ./utils/http.ts
var http = __webpack_require__("Isvs");

// EXTERNAL MODULE: ./constance/api.ts
var api = __webpack_require__("QvMJ");

// EXTERNAL MODULE: ./pages/Blog/blog.less
var blog = __webpack_require__("i9qc");

// CONCATENATED MODULE: ./pages/Blog/index.tsx
var Blog_jsx = external_react_default.a.createElement;









const Blog = ({
  blogInfo: {
    lists
  }
}) => {
  const classString = external_classnames_default()({
    [`${constance["b" /* PROJECT_NAME */]}-blog`]: true
  });
  Object(external_react_["useEffect"])(() => {}, []);
  return Blog_jsx(Layout["a" /* default */], {
    title: "this is Blog"
  }, lists && lists.length && lists.map(item => Blog_jsx("div", {
    key: item.id,
    className: classString
  }, Blog_jsx(blog_list, {
    list: item
  }))));
};

Blog.getInitialProps = async ctx => {
  const params = new URLSearchParams({
    page: '0',
    size: '666',
    type: '全部'
  });
  const res = await http["a" /* default */].get(`${api["b" /* ARTICLE_LISTS */]}?${params}`, {});
  return {
    blogInfo: res.result
  };
};

/* harmony default export */ var pages_Blog = __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "Isvs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eVuF");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2__);


 // 200 成功
// 100001 失败
// 100002 超时

const TIME_OUT = 5000;

const timeOut = () => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(resolve => {
    setTimeout(() => {
      resolve({
        code: 100002,
        msg: '请求超时',
        result: null
      });
    }, TIME_OUT);
  });
};

const fetchData = (url, config) => {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a(async (resolve, reject) => {
    try {
      const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_2___default()(url, config);
      const json = await res.json();
      resolve(json);
    } catch (err) {
      reject(err);
    }
  });
};

const http = (url, config = {}) => {
  return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.race([timeOut(), fetchData(url, config)]).then(res => {
    if (res && res.code && res.code === 200) {
      return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(res);
    }

    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.reject(res);
  }).catch(err => {
    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_1___default.a.reject(err);
  });
};

const httpGet = async (url, config = {}) => {
  return await http(url, _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, config, {
    method: 'get'
  }));
};

const httpPost = async (url, config = {}) => {
  return await http(url, _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, config, {
    method: 'post'
  }));
};

const httpPut = async (url, config = {}) => {
  return await http(url, _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, config, {
    method: 'put'
  }));
};

const httpDelete = async (url, config = {}) => {
  return await http(url, _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, config, {
    method: 'delete'
  }));
};

/* harmony default export */ __webpack_exports__["a"] = ({
  get: httpGet,
  post: httpPost,
  put: httpPut,
  delete: httpDelete
});

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

/***/ "Mhdn":
/***/ (function(module, exports) {



/***/ }),

/***/ "QvMJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ARTICLE_LISTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ARTICLE_DETAIL; });
const BASE_URL = 'http://127.0.0.1:4002';
const ARTICLE_LISTS = `${BASE_URL}/article/lists`;
const ARTICLE_DETAIL = `${BASE_URL}/article/detail`;

/***/ }),

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "ZUMK":
/***/ (function(module, exports) {



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

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

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

/***/ "i9qc":
/***/ (function(module, exports) {



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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL0VqWnl1czhCdjVaaFFKRlV6aTFOcS9wYWdlcy9CbG9nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtc2VydmVyL2Rpc3QvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0XCIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy8uL2NvbnN0YW5jZS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9JY29uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9tb2R1bGUvYmxvZy5saXN0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9CbG9nL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9odHRwLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbmNlL2FwaS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2xpYnJhcnkvZm4vYXJyYXkvaXMtYXJyYXlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2xpYnJhcnkvZm4vbWFwXCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9wcm9taXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1zZXJ2ZXIvZGlzdC9saWIvcm91dGVyLWNvbnRleHRcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9hcnJheS9pcy1hcnJheS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXNlcnZlci9kaXN0L2xpYi91dGlsc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtc2VydmVyL2Rpc3QvbGliL3JvdXRlci9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1zZXJ2ZXIvZGlzdC9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnRcIik7IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcblxuaW50ZXJmYWNlIExheW91dFByb3BzIHtcbiAgY2hpbGRyZW46IGFueTtcbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbmNvbnN0IExheW91dDogTmV4dFBhZ2U8TGF5b3V0UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGNsYXNzU3RyaW5nQ29udGFpbmVyID0gY2xhc3NOYW1lcyh7XG4gICAgJ2R3LXBhZ2Utcm91dGVyJzogdHJ1ZVxuICB9KVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwcm9wcy50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J2luaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGgnIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGlkPVwiZHctcmVhY3Qtd2ViLWNvbnRhaW5lclwiIGNsYXNzTmFtZT17Y2xhc3NTdHJpbmdDb250YWluZXJ9PlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5MYXlvdXQuZGVmYXVsdFByb3BzID0ge1xuICB0aXRsZTogJ+i/meaYr+S4gOS4qum7mOiupOeahHRpdGxlJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMyL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD13aXRoUm91dGVyO3ZhciBfZXh0ZW5kczI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2V4dGVuZHNcIikpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfcHJvcFR5cGVzPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInByb3AtdHlwZXNcIikpO2Z1bmN0aW9uIHdpdGhSb3V0ZXIoQ29tcG9zZWRDb21wb25lbnQpe2NsYXNzIFdpdGhSb3V0ZVdyYXBwZXIgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7Y29uc3RydWN0b3IoKXtzdXBlciguLi5hcmd1bWVudHMpO3RoaXMuY29udGV4dD12b2lkIDA7fXJlbmRlcigpe3JldHVybiBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCgwLF9leHRlbmRzMi5kZWZhdWx0KSh7cm91dGVyOnRoaXMuY29udGV4dC5yb3V0ZXJ9LHRoaXMucHJvcHMpKTt9fVdpdGhSb3V0ZVdyYXBwZXIuZGlzcGxheU5hbWU9dm9pZCAwO1dpdGhSb3V0ZVdyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPXZvaWQgMDtXaXRoUm91dGVXcmFwcGVyLmNvbnRleHRUeXBlcz17cm91dGVyOl9wcm9wVHlwZXMuZGVmYXVsdC5vYmplY3R9O1dpdGhSb3V0ZVdyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgbmFtZT1Db21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9zZWRDb21wb25lbnQubmFtZXx8J1Vua25vd24nO1dpdGhSb3V0ZVdyYXBwZXIuZGlzcGxheU5hbWU9XCJ3aXRoUm91dGVyKFwiK25hbWUrXCIpXCI7fXJldHVybiBXaXRoUm91dGVXcmFwcGVyO30iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwiZXhwb3J0IGNvbnN0IFBST0pFQ1RfTkFNRSA9ICdyZWFjdC1uZXh0LXdlYidcbmV4cG9ydCBjb25zdCBXRUJTSVRFX1RJVExFID0gJ0QudydcbmV4cG9ydCBjb25zdCBUSVRMRSA9ICfmnKrmm77pgZflv5jnmoTpnZLmmKUgfCB3ZWLliY3nq69f5oqA5pyv5YiG5LqrX+aItOS8n+eahOS4quS6uue9keermSdcbmV4cG9ydCBjb25zdCBUSVRMRV9FTlRSWSA9ICfjg70o4py/776f4pa9776fKeODjiDmrKLov47lm57mnaUnXG5leHBvcnQgY29uc3QgVElUTEVfT1VUID0gJ3co776f0JTvvp8pdyDkvaDotbDkuoYg5ZGc5ZWK5ZWKJ1xuZXhwb3J0IGNvbnN0IFNWR19ERUZBVUxUX0NPTE9SID0gJ2dyZWVuJ1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfVEVYVCA9ICcgICAgUiBFIEEgQyBUIC0gVyBFIEIgUyBJIFQgRSAgICAnXG5leHBvcnQgY29uc3QgQ09OU09MRV9CR1MgPSBbJyNhMThjZDEnLCAnI2ZiYzJlYiddXG5cbmV4cG9ydCBjb25zdCBTRUxGX1NIRUVUX0lORk8gPSB7XG4gIGlkOiAyMTc5Mzc3Nzk4LFxuICBuYW1lOiAn56iL5bqP5ZGY5b+F5aSH77yM5bim5LiK6ICz5py65Luj56CB5bCx5piv5YWo5LiW55WMJ1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9CTE9HX0RFVEFJTCA9IHtcbiAgZGV0YWlsOiB7XG4gICAgaWQ6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIHJlYWRDb3VudDogJycsXG4gICAgZWRpdERhdGU6ICcnLFxuICAgIGNyZWF0ZURhdGU6ICcnLFxuICAgIGNvbnRlbnQ6ICcnLFxuICAgIHRhZ0xpc3RzOiBbe1xuICAgICAgaWQ6ICcnLFxuICAgICAgbmFtZTogJydcbiAgICB9XVxuICB9LFxuICBuZXh0OiB7XG4gICAgaWQ6IG51bGwsXG4gICAgbmFtZTogbnVsbFxuICB9LFxuICBwcmV2OiB7XG4gICAgaWQ6IG51bGwsXG4gICAgbmFtZTogbnVsbFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNVVNJQ19TSEVFVF9ERUZBVUxUX0xJTUlUID0gMzBcbmV4cG9ydCBjb25zdCBNVVNJQ19TSEVFVF9UUkFOU0lUSU9OX0RVUkFUSU9OID0gTVVTSUNfU0hFRVRfREVGQVVMVF9MSU1JVCAqIDIwMCAvIDJcblxuZXhwb3J0IGNvbnN0IE1VU0lDX1NFQVJDSF9ERUZBVUxUX0xJTUlUID0gMjBcblxuZXhwb3J0IGNvbnN0IEJMT0dfTElTVF9ERUZBVUxUX0xJTUlUID0gMTJcblxuZXhwb3J0IGNvbnN0IElOVEVSX0xJTktfREVGQVVMVF9MSU1JVCA9IDEyXG5cbmV4cG9ydCBjb25zdCBCTE9HX1RBR1NfQUxMX0lORk8gPSB7XG4gIGlkOiAnJyxcbiAgbmFtZTogJ+WFqOmDqCdcbn1cblxuLy8g5o6S6KGM5qac5L+h5oGvXG5leHBvcnQgY29uc3QgTVVTSUNfUkFOS19UWVBFOiBhbnkgPSB7XG4gICcwJzogJ+S6kemfs+aWsOatjOamnCcsXG4gICcxJzogJ+S6kemfs+eDreatjOamnCcsXG4gICcyJzogJ+e9keaYk+WOn+WIm+atjOabsuamnCcsXG4gICczJzogJ+S6kemfs+S5kOmjmeWNh+amnCcsXG4gICc0JzogJ+S6kemfs+S5kOeUtemfs+amnCcsXG4gICc1JzogJ1VL5o6S6KGM5qac5ZGo5qacJyxcbiAgJzYnOiAn576O5Zu9QmlsbGJvYXJk5ZGo5qacJyxcbiAgJzcnOiAnS1RW5Zeo5qacJyxcbiAgJzgnOiAnaVR1bmVz5qacJyxcbiAgJzEwJzogJ+aXpeacrE9yaWNvbuWRqOamnCcsXG4gICcxMic6ICfpn6nlm71NbmV05o6S6KGM5qac5ZGo5qacJyxcbiAgJzE3JzogJ+WNjuivremHkeabsuamnCcsXG4gICcyMic6ICfkupHpn7PkuZBBQ0fpn7PkuZDmppwnXG59XG5cbi8vIGNvcHlyaWdodCDphY3nva5cbmV4cG9ydCBjb25zdCBDT1BZX1JJR0hUX0NPTkZJRyA9IFtcbiAge1xuICAgIG5hbWU6ICdkLXV0aWxzJyxcbiAgICB0bzogJ2h0dHBzOi8vZC11dGlscy5kYWl3ZWkuc2l0ZSdcbiAgfVxuICAvLyAsIHtcbiAgLy8gICBuYW1lOiAn5Y+L5oOF6ZO+5o6lJyxcbiAgLy8gICB0bzogJy9pbnRlcmxpbmsnXG4gIC8vIH1cbl0iLCJ2YXIgX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yXCIpO1xuXG52YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCIuLi9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbmV3T2JqID0ge307XG5cbiAgICBpZiAob2JqICE9IG51bGwpIHtcbiAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgICB2YXIgZGVzYyA9IF9PYmplY3QkZGVmaW5lUHJvcGVydHkgJiYgX09iamVjdCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPyBfT2JqZWN0JGdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiB7fTtcblxuICAgICAgICAgIGlmIChkZXNjLmdldCB8fCBkZXNjLnNldCkge1xuICAgICAgICAgICAgX09iamVjdCRkZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcbiAgICByZXR1cm4gbmV3T2JqO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiaW1wb3J0IFJlYWN0LCB7XG4gIHVzZVN0YXRlXG59IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7XG4gIFBST0pFQ1RfTkFNRSxcbiAgU1ZHX0RFRkFVTFRfQ09MT1Jcbn0gZnJvbSAnQGNvbnN0YW5jZS9pbmRleCdcbmltcG9ydCAnLi9pY29uLmxlc3MnXG5cbmludGVyZmFjZSBJSWNvblByb3BzIHtcbiAgc3ZnSWQ6IHN0cmluZztcbiAgc2l6ZT86IG51bWJlcjtcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGhvdmVyQ29sb3I/OiBzdHJpbmc7XG4gIGFjdGl2ZUNvbG9yPzogc3RyaW5nO1xuICBhY3RpdmU/OiBib29sZWFuO1xufVxuXG5jb25zdCBJY29uOiBSZWFjdC5GQzxJSWNvblByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlPHN0cmluZyB8IGFueT4ocHJvcHMuYWN0aXZlID8gcHJvcHMuYWN0aXZlQ29sb3IgOiAocHJvcHMuY29sb3IgfHwgU1ZHX0RFRkFVTFRfQ09MT1IpKVxuXG4gIGNvbnN0IHN2Z1N0eWxlOiBhbnkgPSB7XG4gICAgJ3dpZHRoJzogYCR7IHByb3BzLnNpemUgPyBwcm9wcy5zaXplIDogMTYgfXB4YCxcbiAgICAnaGVpZ2h0JzogYCR7IHByb3BzLnNpemUgPyBwcm9wcy5zaXplIDogMTYgfXB4YCxcbiAgICAnbWFyZ2luUmlnaHQnOiBwcm9wcy5jaGlsZHJlbiA/ICc1cHgnIDogJzAnXG4gIH1cblxuICBjb25zdCBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMoe1xuICAgIFtgJHtQUk9KRUNUX05BTUV9LWNvbXAtaWNvbmBdOiB0cnVlXG4gIH0pXG5cbiAgY29uc3Qgc2V0SG92ZXIgPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgaWYgKHByb3BzLmhvdmVyQ29sb3IpIHtcbiAgICAgIHNldENvbG9yKChjb2xvcjogYW55KSA9PiBjb2xvciA9IHByb3BzLmhvdmVyQ29sb3IpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IHNldERlZmF1bHQgPSAoKTogYm9vbGVhbiA9PiB7XG4gICAgaWYgKHByb3BzLmhvdmVyQ29sb3IpIHtcbiAgICAgIHNldENvbG9yKChjb2xvcjogYW55KSA9PiBjb2xvciA9IHByb3BzLmNvbG9yIHx8IFNWR19ERUZBVUxUX0NPTE9SKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICBjb25zdCBtb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIHNldEhvdmVyKClcbiAgfVxuXG4gIGNvbnN0IG1vdXNlTGVhdmUgPSAoKSA9PiB7XG4gICAgc2V0RGVmYXVsdCgpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1N0cmluZ30+XG4gICAgICA8c3ZnIHN0eWxlPXtzdmdTdHlsZX0gb25Nb3VzZUVudGVyPXttb3VzZUVudGVyfSBvbk1vdXNlTGVhdmU9e21vdXNlTGVhdmV9PlxuICAgICAgICA8dXNlIHhsaW5rSHJlZj17YCMke3Byb3BzLnN2Z0lkfWB9IGZpbGw9e2NvbG9yfT48L3VzZT5cbiAgICAgIDwvc3ZnPlxuICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEljb25cbiIsImltcG9ydCBSZWFjdCwge1xuICAvLyB1c2VFZmZlY3Rcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQUk9KRUNUX05BTUUgfSBmcm9tICdAcm9vdC9jb25zdGFuY2UnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEljb24gZnJvbSAnQGNvbXBvbmVudHMvSWNvbidcbmltcG9ydCAnLi9saXN0Lmxlc3MnXG5cbmltcG9ydCB7XG4gIGZvcm1hdERhdGVcbn0gZnJvbSAnQHV0aWxzL3V0aWxzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIEJsb2dMaXN0Q2F0ZWdvcmllT3JUYWcge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJsb2dMaXN0IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICByZWFkQ291bnQ6IHN0cmluZztcbiAgZWRpdERhdGU6IHN0cmluZztcbiAgY3JlYXRlRGF0ZTogc3RyaW5nO1xuICBjYXRlZ29yaWU6IEJsb2dMaXN0Q2F0ZWdvcmllT3JUYWdbXTtcbiAgdGFnTGlzdHM6IEJsb2dMaXN0Q2F0ZWdvcmllT3JUYWdbXTtcbiAgY29udGVudExpdGU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEJsb2dMaXN0UHJvcHMge1xuICBsaXN0OiBJQmxvZ0xpc3Q7XG59XG5cbmNvbnN0IEJsb2dMaXN0OiBSZWFjdC5GQzxCbG9nTGlzdFByb3BzPiA9ICh7IGxpc3QgfSkgPT4ge1xuICBjb25zdCBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMoe1xuICAgIFtgJHtQUk9KRUNUX05BTUV9LWNvbXAtYmxvZy1saXN0YF06IHRydWVcbiAgfSlcblxuICByZXR1cm4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2NsYXNzU3RyaW5nfT5cbiAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy9kZXRhaWw/aWQ9JHtsaXN0LmlkfWB9PlxuICAgICAgICA8YT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgJHtjbGFzc1N0cmluZ30tdGl0bGVgfT57bGlzdC5uYW1lfTwvaDI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzU3RyaW5nfS1jb25mYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzU3RyaW5nfS1kYXRlYH0+XG4gICAgICAgICAgICA8SWNvbiBzdmdJZD1cImNyZWF0XCIgY29sb3I9XCIjOTk5XCI+IHtmb3JtYXREYXRlKCd5eXl5LU1NLWRkJywgbmV3IERhdGUobGlzdC5jcmVhdGVEYXRlLnNwbGl0KCcgJylbMF0pKX0gPC9JY29uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc1N0cmluZ30tcmVhZGB9IHRpdGxlPXtg5rWP6KeI6YePJHtsaXN0LnJlYWRDb3VudH1gfT5cbiAgICAgICAgICAgIDxJY29uIHN2Z0lkPVwicmVhZFwiIGNvbG9yPVwiIzk5OVwiPiB7bGlzdC5yZWFkQ291bnR9IDwvSWNvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NTdHJpbmd9LXRhZ2B9IHRpdGxlPVwi5YiG57G7XCI+XG4gICAgICAgICAgICA8SWNvbiBzdmdJZD1cInRhZ1wiIGNvbG9yPVwiIzk5OVwiPlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGlzdC50YWdMaXN0cyAmJiBsaXN0LnRhZ0xpc3RzLm1hcCAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdC1saXN0XCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleCA+IDAgPyAoPHNwYW4+ICwgPC9zcGFuPikgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvSWNvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dMaXN0XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBOZXh0UGFnZVxufSBmcm9tICduZXh0J1xuaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgQmxvZ0xpc3QsIHtcbiAgSUJsb2dMaXN0XG59IGZyb20gJ0Btb2R1bGUvYmxvZy5saXN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7XG4gIFBST0pFQ1RfTkFNRVxufSBmcm9tICdAY29uc3RhbmNlL2luZGV4J1xuXG5pbXBvcnQgaHR0cCBmcm9tICdAdXRpbHMvaHR0cCdcblxuaW1wb3J0IHtcbiAgQVJUSUNMRV9MSVNUU1xufSBmcm9tICdAY29uc3RhbmNlL2FwaSdcblxuaW1wb3J0ICcuL2Jsb2cubGVzcydcblxuaW50ZXJmYWNlIEJsb2dMaXN0UmVxRGF0YSB7XG4gIGxpc3RzOiBBcnJheTxJQmxvZ0xpc3Q+XG4gIHRvdGFsOiBudW1iZXJcbiAgb2Zmc2V0OiBudW1iZXJcbiAgc2l6ZTogbnVtYmVyXG4gIHR5cGU6IHN0cmluZ1xufVxuXG5pbnRlcmZhY2UgQmxvZ1Byb3BzIHtcbiAgYmxvZ0luZm86IEJsb2dMaXN0UmVxRGF0YVxufVxuXG5jb25zdCBCbG9nOiBOZXh0UGFnZTxCbG9nUHJvcHMsIHt9PiA9ICh7IGJsb2dJbmZvOiB7IGxpc3RzIH0gfSkgPT4ge1xuICBjb25zdCBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMoe1xuICAgIFtgJHtQUk9KRUNUX05BTUV9LWJsb2dgXTogdHJ1ZVxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT0ndGhpcyBpcyBCbG9nJz5cbiAgICAgIHtcbiAgICAgICAgbGlzdHMgJiYgbGlzdHMubGVuZ3RoICYmIGxpc3RzLm1hcChpdGVtID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTdHJpbmd9PlxuICAgICAgICAgICAgPEJsb2dMaXN0IGxpc3Q9e2l0ZW19Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5CbG9nLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7IHBhZ2U6ICcwJywgc2l6ZTogJzY2NicsIHR5cGU6ICflhajpg6gnIH0pXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGh0dHAuZ2V0KGAke0FSVElDTEVfTElTVFN9PyR7cGFyYW1zfWAsIHt9KVxuICByZXR1cm4ge1xuICAgIGJsb2dJbmZvOiByZXMucmVzdWx0XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZ1xuIiwiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcblxuLy8gMjAwIOaIkOWKn1xuLy8gMTAwMDAxIOWksei0pVxuLy8gMTAwMDAyIOi2heaXtlxuXG50eXBlIFJFU19DT0RFID0gMjAwIHwgMTAwMDAxIHwgMTAwMDAyXG5cbmludGVyZmFjZSBJUmVzSW5mbzxUPiB7XG4gIGNvZGU6IFJFU19DT0RFLFxuICBtc2c6IHN0cmluZyxcbiAgcmVzdWx0OiBUXG59XG5cbmNvbnN0IFRJTUVfT1VUID0gNTAwMFxuXG5jb25zdCB0aW1lT3V0ID0gKCk6IFByb21pc2U8SVJlc0luZm88bnVsbD4+ID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNvbHZlKHtcbiAgICAgICAgY29kZTogMTAwMDAyLFxuICAgICAgICBtc2c6ICfor7fmsYLotoXml7YnLFxuICAgICAgICByZXN1bHQ6IG51bGxcbiAgICAgIH0pXG4gICAgfSwgVElNRV9PVVQpXG4gIH0pXG59XG5cbmNvbnN0IGZldGNoRGF0YSA9ICh1cmw6IFJlcXVlc3RJbmZvLCBjb25maWc6IFJlcXVlc3RJbml0IHwgdW5kZWZpbmVkKTogUHJvbWlzZTxJUmVzSW5mbzxudWxsIHwgbmV2ZXI+PiAgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwsIGNvbmZpZylcbiAgICAgIGNvbnN0IGpzb246IElSZXNJbmZvPGFueT4gPSBhd2FpdCByZXMuanNvbigpXG4gICAgICByZXNvbHZlKGpzb24pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZWplY3QoZXJyKVxuICAgIH1cbiAgfSlcbn1cblxuY29uc3QgaHR0cCA9ICh1cmw6IFJlcXVlc3RJbmZvLCBjb25maWc6IFJlcXVlc3RJbml0IHwgdW5kZWZpbmVkID0ge30pID0+IHtcbiAgcmV0dXJuIFByb21pc2UucmFjZShbdGltZU91dCgpLCBmZXRjaERhdGEodXJsLCBjb25maWcpXSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKHJlcyAmJiByZXMuY29kZSAmJiByZXMuY29kZSA9PT0gMjAwKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlcylcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzKVxuICB9KS5jYXRjaChlcnIgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpXG4gIH0pXG59XG5cbnR5cGUgSHR0cEZuID0gKHVybDogUmVxdWVzdEluZm8sIGNvbmZpZz86IFJlcXVlc3RJbml0IHwgdW5kZWZpbmVkKSA9PiBQcm9taXNlPElSZXNJbmZvPGFueT4+XG5cbmNvbnN0IGh0dHBHZXQ6IEh0dHBGbiA9IGFzeW5jICh1cmwsIGNvbmZpZyA9IHt9KSA9PiB7XG4gIHJldHVybiBhd2FpdCBodHRwKHVybCwgT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLCB7XG4gICAgbWV0aG9kOiAnZ2V0J1xuICB9KSlcbn1cblxuY29uc3QgaHR0cFBvc3Q6IEh0dHBGbiA9IGFzeW5jICh1cmwsIGNvbmZpZyA9IHt9KSA9PiB7XG4gIHJldHVybiBhd2FpdCBodHRwKHVybCwgT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLCB7XG4gICAgbWV0aG9kOiAncG9zdCdcbiAgfSkpXG59XG5cbmNvbnN0IGh0dHBQdXQ6IEh0dHBGbiA9IGFzeW5jICh1cmwsIGNvbmZpZyA9IHt9KSA9PiB7XG4gIHJldHVybiBhd2FpdCBodHRwKHVybCwgT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLCB7XG4gICAgbWV0aG9kOiAncHV0J1xuICB9KSlcbn1cblxuY29uc3QgaHR0cERlbGV0ZTogSHR0cEZuID0gYXN5bmMgKHVybCwgY29uZmlnID0ge30pID0+IHtcbiAgcmV0dXJuIGF3YWl0IGh0dHAodXJsLCBPYmplY3QuYXNzaWduKHt9LCBjb25maWcsIHtcbiAgICBtZXRob2Q6ICdkZWxldGUnXG4gIH0pKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldDogaHR0cEdldCxcbiAgcG9zdDogaHR0cFBvc3QsXG4gIHB1dDogaHR0cFB1dCxcbiAgZGVsZXRlOiBodHRwRGVsZXRlXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2dldC1vd24tcHJvcGVydHktZGVzY3JpcHRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL21hcFwiKTsiLCJjb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjQwMDInXG5cbmV4cG9ydCBjb25zdCBBUlRJQ0xFX0xJU1RTID0gYCR7QkFTRV9VUkx9L2FydGljbGUvbGlzdHNgXG5leHBvcnQgY29uc3QgQVJUSUNMRV9ERVRBSUwgPSBgJHtCQVNFX1VSTH0vYXJ0aWNsZS9kZXRhaWxgIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2lzLWFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9tYXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3Byb21pc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXJsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX21hcD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvbWFwXCIpKTt2YXIgX3VybD1yZXF1aXJlKFwidXJsXCIpO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3Byb3BUeXBlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpKTt2YXIgX3JvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3JvdXRlclwiKSk7dmFyIF9yZXdyaXRlVXJsRm9yRXhwb3J0PXJlcXVpcmUoXCJuZXh0LXNlcnZlci9kaXN0L2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydFwiKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCJuZXh0LXNlcnZlci9kaXN0L2xpYi91dGlsc1wiKTsvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL2Z1bmN0aW9uIGlzTG9jYWwoaHJlZil7Y29uc3QgdXJsPSgwLF91cmwucGFyc2UpKGhyZWYsZmFsc2UsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91cmwucGFyc2UpKCgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKSxmYWxzZSx0cnVlKTtyZXR1cm4hdXJsLmhvc3R8fHVybC5wcm90b2NvbD09PW9yaWdpbi5wcm90b2NvbCYmdXJsLmhvc3Q9PT1vcmlnaW4uaG9zdDt9ZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYyl7bGV0IGxhc3RIcmVmPW51bGw7bGV0IGxhc3RBcz1udWxsO2xldCBsYXN0UmVzdWx0PW51bGw7cmV0dXJuKGhyZWYsYXMpPT57aWYobGFzdFJlc3VsdCYmaHJlZj09PWxhc3RIcmVmJiZhcz09PWxhc3RBcyl7cmV0dXJuIGxhc3RSZXN1bHQ7fWNvbnN0IHJlc3VsdD1mb3JtYXRGdW5jKGhyZWYsYXMpO2xhc3RIcmVmPWhyZWY7bGFzdEFzPWFzO2xhc3RSZXN1bHQ9cmVzdWx0O3JldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZm9ybWF0VXJsKHVybCl7cmV0dXJuIHVybCYmdHlwZW9mIHVybD09PSdvYmplY3QnPygwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikodXJsKTp1cmw7fWxldCBvYnNlcnZlcjtjb25zdCBsaXN0ZW5lcnM9bmV3IF9tYXAuZGVmYXVsdCgpO2NvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyPXR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJz93aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXI6bnVsbDtmdW5jdGlvbiBnZXRPYnNlcnZlcigpey8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG5pZihvYnNlcnZlcil7cmV0dXJuIG9ic2VydmVyO30vLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbmlmKCFJbnRlcnNlY3Rpb25PYnNlcnZlcil7cmV0dXJuIHVuZGVmaW5lZDt9cmV0dXJuIG9ic2VydmVyPW5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzPT57ZW50cmllcy5mb3JFYWNoKGVudHJ5PT57aWYoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSl7cmV0dXJuO31jb25zdCBjYj1saXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCk7aWYoZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjApe29ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO2xpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KTtjYigpO319KTt9LHtyb290TWFyZ2luOicyMDBweCd9KTt9Y29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zPShlbCxjYik9Pntjb25zdCBvYnNlcnZlcj1nZXRPYnNlcnZlcigpO2lmKCFvYnNlcnZlcil7cmV0dXJuKCk9Pnt9O31vYnNlcnZlci5vYnNlcnZlKGVsKTtsaXN0ZW5lcnMuc2V0KGVsLGNiKTtyZXR1cm4oKT0+e29ic2VydmVyLnVub2JzZXJ2ZShlbCk7bGlzdGVuZXJzLmRlbGV0ZShlbCk7fTt9O2NsYXNzIExpbmsgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5wPXZvaWQgMDt0aGlzLmNsZWFuVXBMaXN0ZW5lcnM9KCk9Pnt9O3RoaXMuZm9ybWF0VXJscz1tZW1vaXplZEZvcm1hdFVybCgoaHJlZixhc0hyZWYpPT57cmV0dXJue2hyZWY6Zm9ybWF0VXJsKGhyZWYpLGFzOmFzSHJlZj9mb3JtYXRVcmwoYXNIcmVmKTphc0hyZWZ9O30pO3RoaXMubGlua0NsaWNrZWQ9ZT0+ey8vIEB0cy1pZ25vcmUgdGFyZ2V0IGV4aXN0cyBvbiBjdXJyZW50VGFyZ2V0XG5jb25zdHtub2RlTmFtZSx0YXJnZXR9PWUuY3VycmVudFRhcmdldDtpZihub2RlTmFtZT09PSdBJyYmKHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZS5tZXRhS2V5fHxlLmN0cmxLZXl8fGUuc2hpZnRLZXl8fGUubmF0aXZlRXZlbnQmJmUubmF0aXZlRXZlbnQud2hpY2g9PT0yKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxucmV0dXJuO31sZXR7aHJlZixhc309dGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZix0aGlzLnByb3BzLmFzKTtpZighaXNMb2NhbChocmVmKSl7Ly8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxucmV0dXJuO31jb25zdHtwYXRobmFtZX09d2luZG93LmxvY2F0aW9uO2hyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxocmVmKTthcz1hcz8oMCxfdXJsLnJlc29sdmUpKHBhdGhuYW1lLGFzKTpocmVmO2UucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmxldHtzY3JvbGx9PXRoaXMucHJvcHM7aWYoc2Nyb2xsPT1udWxsKXtzY3JvbGw9YXMuaW5kZXhPZignIycpPDA7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuX3JvdXRlci5kZWZhdWx0W3RoaXMucHJvcHMucmVwbGFjZT8ncmVwbGFjZSc6J3B1c2gnXShocmVmLGFzLHtzaGFsbG93OnRoaXMucHJvcHMuc2hhbGxvd30pLnRoZW4oc3VjY2Vzcz0+e2lmKCFzdWNjZXNzKXJldHVybjtpZihzY3JvbGwpe3dpbmRvdy5zY3JvbGxUbygwLDApO2RvY3VtZW50LmJvZHkuZm9jdXMoKTt9fSk7fTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYocHJvcHMucHJlZmV0Y2gpe2NvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX10aGlzLnA9cHJvcHMucHJlZmV0Y2ghPT1mYWxzZTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKTt9aGFuZGxlUmVmKHJlZil7aWYodGhpcy5wJiZJbnRlcnNlY3Rpb25PYnNlcnZlciYmcmVmJiZyZWYudGFnTmFtZSl7dGhpcy5jbGVhblVwTGlzdGVuZXJzKCk7dGhpcy5jbGVhblVwTGlzdGVuZXJzPWxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsKCk9Pnt0aGlzLnByZWZldGNoKCk7fSk7fX0vLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbi8vIGFzIHBlciBodHRwczovL3JlYWN0anMub3JnL2Jsb2cvMjAxOC8wNi8wNy95b3UtcHJvYmFibHktZG9udC1uZWVkLWRlcml2ZWQtc3RhdGUuaHRtbFxucHJlZmV0Y2goKXtpZighdGhpcy5wfHx0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCcpcmV0dXJuOy8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbmNvbnN0e3BhdGhuYW1lfT13aW5kb3cubG9jYXRpb247Y29uc3R7aHJlZjpwYXJzZWRIcmVmfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpO2NvbnN0IGhyZWY9KDAsX3VybC5yZXNvbHZlKShwYXRobmFtZSxwYXJzZWRIcmVmKTtfcm91dGVyLmRlZmF1bHQucHJlZmV0Y2goaHJlZik7fXJlbmRlcigpe2xldHtjaGlsZHJlbn09dGhpcy5wcm9wcztjb25zdHtocmVmLGFzfT10aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLHRoaXMucHJvcHMuYXMpOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPV9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIsbnVsbCxjaGlsZHJlbik7fS8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuY29uc3QgY2hpbGQ9X3JlYWN0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO2NvbnN0IHByb3BzPXtyZWY6ZWw9Pnt0aGlzLmhhbmRsZVJlZihlbCk7aWYoY2hpbGQmJnR5cGVvZiBjaGlsZD09PSdvYmplY3QnJiZjaGlsZC5yZWYpe2lmKHR5cGVvZiBjaGlsZC5yZWY9PT0nZnVuY3Rpb24nKWNoaWxkLnJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGQucmVmPT09J29iamVjdCcpe2NoaWxkLnJlZi5jdXJyZW50PWVsO319fSxvbk1vdXNlRW50ZXI6ZT0+e2lmKGNoaWxkLnByb3BzJiZ0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyPT09J2Z1bmN0aW9uJyl7Y2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpO310aGlzLnByZWZldGNoKCk7fSxvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXt0aGlzLmxpbmtDbGlja2VkKGUpO319Ly8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4vLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbn07aWYodGhpcy5wcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe3Byb3BzLmhyZWY9YXN8fGhyZWY7fS8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbi8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpe2lmKHByb3BzLmhyZWYmJnR5cGVvZiBfX05FWFRfREFUQV9fIT09J3VuZGVmaW5lZCcmJl9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCl7cHJvcHMuaHJlZj0oMCxfcmV3cml0ZVVybEZvckV4cG9ydC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCkocHJvcHMuaHJlZik7fX1yZXR1cm4gX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLHByb3BzKTt9fUxpbmsucHJvcFR5cGVzPXZvaWQgMDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2NvbnN0IHdhcm49KDAsX3V0aWxzLmV4ZWNPbmNlKShjb25zb2xlLmVycm9yKTsvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbmNvbnN0IGV4YWN0PXJlcXVpcmUoJ3Byb3AtdHlwZXMtZXhhY3QnKTtMaW5rLnByb3BUeXBlcz1leGFjdCh7aHJlZjpfcHJvcFR5cGVzLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzLmRlZmF1bHQuc3RyaW5nLF9wcm9wVHlwZXMuZGVmYXVsdC5vYmplY3RdKS5pc1JlcXVpcmVkLGFzOl9wcm9wVHlwZXMuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMuZGVmYXVsdC5zdHJpbmcsX3Byb3BUeXBlcy5kZWZhdWx0Lm9iamVjdF0pLHByZWZldGNoOl9wcm9wVHlwZXMuZGVmYXVsdC5ib29sLHJlcGxhY2U6X3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsc2hhbGxvdzpfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxwYXNzSHJlZjpfcHJvcFR5cGVzLmRlZmF1bHQuYm9vbCxzY3JvbGw6X3Byb3BUeXBlcy5kZWZhdWx0LmJvb2wsY2hpbGRyZW46X3Byb3BUeXBlcy5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlcy5kZWZhdWx0LmVsZW1lbnQsKHByb3BzLHByb3BOYW1lKT0+e2NvbnN0IHZhbHVlPXByb3BzW3Byb3BOYW1lXTtpZih0eXBlb2YgdmFsdWU9PT0nc3RyaW5nJyl7d2FybihcIldhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5cIik7fXJldHVybiBudWxsO31dKS5pc1JlcXVpcmVkfSk7fXZhciBfZGVmYXVsdD1MaW5rO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTsiLCJ2YXIgX09iamVjdCRhc3NpZ24gPSByZXF1aXJlKFwiLi4vY29yZS1qcy9vYmplY3QvYXNzaWduXCIpO1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IF9PYmplY3QkYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2VydmVyL2Rpc3QvbGliL3JvdXRlci1jb250ZXh0XCIpOyIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7dmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2V4dGVuZHMyPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczIvaGVscGVycy9leHRlbmRzXCIpKTt2YXIgX2RlZmluZVByb3BlcnR5PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lLWNvcmVqczIvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpKTt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIm5leHQtc2VydmVyL2Rpc3QvbGliL3JvdXRlci9yb3V0ZXJcIikpO2V4cG9ydHMuUm91dGVyPV9yb3V0ZXIyLmRlZmF1bHQ7ZXhwb3J0cy5OZXh0Um91dGVyPV9yb3V0ZXIyLk5leHRSb3V0ZXI7dmFyIF9yb3V0ZXJDb250ZXh0PXJlcXVpcmUoXCJuZXh0LXNlcnZlci9kaXN0L2xpYi9yb3V0ZXItY29udGV4dFwiKTt2YXIgX3dpdGhSb3V0ZXI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7ZXhwb3J0cy53aXRoUm91dGVyPV93aXRoUm91dGVyLmRlZmF1bHQ7LyogZ2xvYmFsIHdpbmRvdyAqL2NvbnN0IHNpbmdsZXRvblJvdXRlcj17cm91dGVyOm51bGwsLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbnJlYWR5Q2FsbGJhY2tzOltdLHJlYWR5KGNiKXtpZih0aGlzLnJvdXRlcilyZXR1cm4gY2IoKTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3RoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYik7fX19Oy8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzPVsncGF0aG5hbWUnLCdyb3V0ZScsJ3F1ZXJ5JywnYXNQYXRoJywnY29tcG9uZW50cyddO2NvbnN0IHJvdXRlckV2ZW50cz1bJ3JvdXRlQ2hhbmdlU3RhcnQnLCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywncm91dGVDaGFuZ2VDb21wbGV0ZScsJ3JvdXRlQ2hhbmdlRXJyb3InLCdoYXNoQ2hhbmdlU3RhcnQnLCdoYXNoQ2hhbmdlQ29tcGxldGUnXTtjb25zdCBjb3JlTWV0aG9kRmllbGRzPVsncHVzaCcsJ3JlcGxhY2UnLCdyZWxvYWQnLCdiYWNrJywncHJlZmV0Y2gnLCdiZWZvcmVQb3BTdGF0ZSddOy8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbigwLF9kZWZpbmVQcm9wZXJ0eS5kZWZhdWx0KShzaW5nbGV0b25Sb3V0ZXIsJ2V2ZW50cycse2dldCgpe3JldHVybiBfcm91dGVyMi5kZWZhdWx0LmV2ZW50czt9fSk7dXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4vLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbi8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbigwLF9kZWZpbmVQcm9wZXJ0eS5kZWZhdWx0KShzaW5nbGV0b25Sb3V0ZXIsZmllbGQse2dldCgpe2NvbnN0IHJvdXRlcj1nZXRSb3V0ZXIoKTtyZXR1cm4gcm91dGVyW2ZpZWxkXTt9fSk7fSk7Y29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbjtzaW5nbGV0b25Sb3V0ZXJbZmllbGRdPWZ1bmN0aW9uKCl7Y29uc3Qgcm91dGVyPWdldFJvdXRlcigpO3JldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3VtZW50cyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LGZ1bmN0aW9uKCl7Y29uc3QgZXZlbnRGaWVsZD1cIm9uXCIrZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrZXZlbnQuc3Vic3RyaW5nKDEpO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3VtZW50cyk7fWNhdGNoKGVycil7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoXCJFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogXCIrZXZlbnRGaWVsZCk7Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbmNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UrXCJcXG5cIitlcnIuc3RhY2spO319fSk7fSk7fSk7ZnVuY3Rpb24gZ2V0Um91dGVyKCl7aWYoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpe2NvbnN0IG1lc3NhZ2U9J05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nKydZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5jb25zdCBjcmVhdGVSb3V0ZXI9ZnVuY3Rpb24gY3JlYXRlUm91dGVyKCl7Zm9yKHZhciBfbGVuPWFyZ3VtZW50cy5sZW5ndGgsYXJncz1uZXcgQXJyYXkoX2xlbiksX2tleT0wO19rZXk8X2xlbjtfa2V5Kyspe2FyZ3NbX2tleV09YXJndW1lbnRzW19rZXldO31zaW5nbGV0b25Sb3V0ZXIucm91dGVyPW5ldyBfcm91dGVyMi5kZWZhdWx0KC4uLmFyZ3MpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKGNiPT5jYigpKTtzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3M9W107cmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7fTsvLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnRzLmNyZWF0ZVJvdXRlcj1jcmVhdGVSb3V0ZXI7ZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcil7Y29uc3QgX3JvdXRlcj1yb3V0ZXI7Y29uc3QgaW5zdGFuY2U9e307Zm9yKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtpZih0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV09PT0nb2JqZWN0Jyl7aW5zdGFuY2VbcHJvcGVydHldPSgwLF9leHRlbmRzMi5kZWZhdWx0KSh7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09ZnVuY3Rpb24oKXtyZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJndW1lbnRzKTt9O30pO3JldHVybiBpbnN0YW5jZTt9IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2FycmF5L2lzLWFycmF5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2VydmVyL2Rpc3QvbGliL3V0aWxzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtc2VydmVyL2Rpc3QvbGliL3JvdXRlci9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwiLyoqXG4gKiBAZGVzY3JpcHRpb24g5pel5pyf5qC85byP5YyWIOWPr+i9rOaNouaIkOiHquW3seaDs+imgeeahOagvOW8j1xuICogQHBhcmFtIHsgU3RyaW5nIH0gZm10IOagvOW8j+aooeadvyAneXl5eS1NTS1kZCBoaDptbTpzcydcbiAqIEBwYXJhbSB7IERhdGUgfSBkYXRlIOaXpeacn+WGheWuuSAg5aaCIOW9k+WJjeaXpeacnyBuZXcgRGF0ZSgpXG4gKiBAcmV0dXJuIHsgU3RyaW5nIH0gJzIwMTgtMDgtMTUgMDE6NDY6MjInXG4gKiBAZXhhbXBsZVxuICogZm9ybWF0RGF0ZShgeXl5eS1NTS1kZCBoaDptbTpzc2AsIG5ldyBEYXRlKCkpXG4gKiBAZXhhbXBsZVxuICogZm9ybWF0RGF0ZShgeXl5eS1NTS1kZGAsIG5ldyBEYXRlKCkpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGZtdDogc3RyaW5nLCBkYXRlID0gbmV3IERhdGUoKSkge1xuICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gIGxldCBvOiBhbnkgPSB7XG4gICAgICAnTSsnOiBuZXdEYXRlLmdldE1vbnRoKCkgKyAxLFxuICAgICAgJ2QrJzogbmV3RGF0ZS5nZXREYXRlKCksXG4gICAgICAnaCsnOiBuZXdEYXRlLmdldEhvdXJzKCksXG4gICAgICAnbSsnOiBuZXdEYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgICdzKyc6IG5ld0RhdGUuZ2V0U2Vjb25kcygpLFxuICAgICAgJ3ErJzogfn4oKG5ld0RhdGUuZ2V0TW9udGgoKSArIDMpIC8gMyksXG4gICAgICAnUyc6IG5ld0RhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLy8g5q+r56eSXG4gIH07XG4gIGlmICgvKHkrKS8udGVzdChmbXQpKSB7XG4gICAgICBmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsIChuZXdEYXRlLmdldEZ1bGxZZWFyKCkgKyAnJykuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XG4gIH1cbiAgZm9yIChsZXQgayBpbiBvKSB7XG4gICAgICBpZiAobmV3IFJlZ0V4cCgnKCcgKyBrICsgJyknKS50ZXN0KGZtdCkpIHtcbiAgICAgICAgICBmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsIChSZWdFeHAuJDEubGVuZ3RoID09PSAxKSA/IChvW2tdKSA6ICgoJzAwJyArIG9ba10pLnN1YnN0cigoJycgKyBvW2tdKS5sZW5ndGgpKSk7XG4gICAgICB9XG4gIH1cbiAgcmV0dXJuIGZtdDtcbn1cblxuLyoqXG4gKiBAZGVzY3JpcHRpb24g5Yik5pat5YWD57Sg5piv5ZCm5a2Y5Zyo5p+Q5LiqY2xhc3PnsbtcbiAqIEBwYXJhbSB7IEhUTUxFbGVtZW50IH0gZWwgZG9t5YWD57SgXG4gKiBAcGFyYW0geyBTdHJpbmcgfSBjbGFzc05hbWUgY2xhc3PlkI3np7BcbiAqIEBleGFtcGxlXG4gKiBoYXNDbGFzcyhkb2N1bWVudC5ib2R5LCAnZC11dGlscycpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNDbGFzcyAoZWw6IEhUTUxFbGVtZW50IHwgRWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSlcbiAgfVxuICBcbi8qKlxuICogQGRlc2NyaXB0aW9uIOWIpOaWreWFg+e0oOaYr+WQpuWtmOWcqOafkOS4qmNsYXNz57G7XG4gKiBAcGFyYW0geyBIVE1MRWxlbWVudCB9IGVsIGRvbeWFg+e0oFxuICogQHBhcmFtIHsgU3RyaW5nIH0gY2xhc3NOYW1lIGNsYXNz5ZCN56ewXG4gKiBAZXhhbXBsZVxuICogaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ2QtdXRpbHMnKVxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MgKGVsOiBIVE1MRWxlbWVudCB8IEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nIHwgc3RyaW5nW10pOiB2b2lkIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NOYW1lKSkge1xuICAgIGNsYXNzTmFtZS5mb3JFYWNoKChpdGVtOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmICghaGFzQ2xhc3MoZWwsIGl0ZW0pKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoaXRlbSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVyblxuICB9XG4gIGlmICghaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkpIHtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcbiAgfVxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDlhYPntKDliKDpmaRjbGFzc1xuICogQHBhcmFtIHsgSFRNTEVsZW1lbnQgfSBlbCBkb23lhYPntKBcbiAqIEBwYXJhbSB7IChTdHJpbmcgfCBBcnJheSkgfSBjbGFzc05hbWUgY2xhc3PlkI3np7DvvIzlj6/ku6XmmK/lpJrkuKpcbiAqIEBleGFtcGxlXG4gKiByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCAnZC11dGlscycpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDbGFzcyAoZWw6IEhUTUxFbGVtZW50IHwgRWxlbWVudCwgY2xhc3NOYW1lOiBzdHJpbmcgfCBzdHJpbmdbXSk6IHZvaWQge1xuICBpZiAoQXJyYXkuaXNBcnJheShjbGFzc05hbWUpKSB7XG4gICAgY2xhc3NOYW1lLmZvckVhY2goKGl0ZW06IHN0cmluZykgPT4ge1xuICAgICAgaWYgKGhhc0NsYXNzKGVsLCBpdGVtKSkge1xuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGl0ZW0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm5cbiAgfVxuICBpZiAoaGFzQ2xhc3MoZWwsIGNsYXNzTmFtZSkpIHtcbiAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSlcbiAgfVxufVxuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiDorr7nva5Db29raWVcbiAqIEBwYXJhbSB7IFN0cmluZyB9IG5hbWUgY29va2ll5ZCN56ewXG4gKiBAcGFyYW0geyBTdHJpbmcgfSB2YWx1ZSBjb29rZeeahOWAvFxuICogQHBhcmFtIHsgTnVtYmVyIH0gZXhwIOi/h+acn+aXtumXtCDpu5jorqQy5bCP5pe2IOWNleS9jeavq+enklxuICogQGV4YW1wbGVcbiAqIC8vIOiuvue9rm5hbWXkuLp0ZXN055qE5YC85Li6MTIzNDXvvIzorr7nva7ov4fmnJ/ml7bpl7TkuLox5bCP5pe2XG4gKiBzZXRDb29raWUoJ3Rlc3QnLCAnMTIzNDUnLCA2MCAqIDYwICogMTAwMClcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZSAobmFtZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHA6IG51bWJlciA9IDYwICogNjAgKiAyICogMTAwMCk6IHZvaWQge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyBleHApXG4gIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PSR7ZXNjYXBlKHZhbHVlKX07ZXhwaXJlcz0ke2RhdGUudG9VVENTdHJpbmcoKX1gXG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOiOt+WPlkNvb2tpZVxuICogQHBhcmFtIHsgU3RyaW5nIH0gbmFtZSBjb29raWXlkI3np7BcbiAqIEByZXR1cm5zIHsgKEFycmF5IHwgTnVsbCkgfSDov5Tlm57mlbDmja5cbiAqIEBleGFtcGxlXG4gKiBnZXRDb29raWUoJ3Rlc3QnKVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llIChuYW1lPzogc3RyaW5nKTogc3RyaW5nIHwgYW55IHtcbiAgaWYgKG5hbWUpIHtcbiAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGAoXnwgKSR7bmFtZX09KFteO10qKSg7fCQpYClcbiAgICBjb25zdCBhcnIgPSBkb2N1bWVudC5jb29raWUubWF0Y2gocmVnKVxuICAgIHJldHVybiBhcnImJmFyclsyXSA/IGFyclsyXSA6IG51bGxcbiAgfVxuICBjb25zdCBnZXRBbGxDb29raWVzID0gW11cbiAgaWYgKGRvY3VtZW50LmNvb2tpZS5sZW5ndGgpIHtcbiAgICBjb25zdCBhcnJDb29raWUgPSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgIC5jb29raWVcbiAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJzsgJylcbiAgICBmb3IgKGxldCBrIGluIGFyckNvb2tpZSkge1xuICAgICAgZ2V0QWxsQ29va2llcy5wdXNoKHtcbiAgICAgICAgbmFtZTogYCR7dW5lc2NhcGUoYXJyQ29va2llW2tdLnNwbGl0KCc9JylbMF0pfWAsXG4gICAgICAgIHZhbHVlOiBgJHt1bmVzY2FwZShhcnJDb29raWVba10uc3BsaXQoJz0nKVsxXSl9YFxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGdldEFsbENvb2tpZXNcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIOWIoOmZpENvb2tpZVxuICogQHBhcmFtIHsgU3RyaW5nIH0gbmFtZSBjb29raWXlkI3np7Ag5aaC5p6c5LiN5Lyg5Y+C5pWw5YiZ6K6+572u5omA5pyJY29va2ll6L+H5pyfXG4gKiBAcmV0dXJucyB7IEFycmF5IH0g5piv5LiA5Liq5Lyq5pWw57uEXG4gKiBAZXhhbXBsZVxuICogcmVtb3ZlQ29va2llKCd0ZXN0JylcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvb2tpZSAobmFtZTogc3RyaW5nKTogYW55IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcbiAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpIC0gMSlcbiAgaWYgKG5hbWUpIHtcbiAgICBjb25zdCBjb29raWVJbmZvID0gZ2V0Q29va2llKG5hbWUpXG4gICAgaWYgKGNvb2tpZUluZm8gIT09IG51bGwpIHtcbiAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWV9PSR7Y29va2llSW5mb307ZXhwaXJlcz0ke2RhdGUudG9VVENTdHJpbmcoKX1gXG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIGNvbnN0IGFsbENvb2tpZXMgPSBnZXRDb29raWUoKVxuICBmb3IgKGxldCBrIGluIGFsbENvb2tpZXMpIHtcbiAgICBkb2N1bWVudC5jb29raWUgPSBgJHthbGxDb29raWVzW2tdLm5hbWV9PSR7YWxsQ29va2llc1trXS52YWx1ZX07ZXhwaXJlcz0ke2RhdGUudG9VVENTdHJpbmcoKX1gXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hGQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFqQkE7QUF1QkE7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkE7QUFDQTtBQWdCQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQVJBOzs7Ozs7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBR0E7QUFDQTtBQUlBO0FBQ0E7QUFVQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXVCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBZUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2RUE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBRUE7QUFJQTtBQUNBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBR0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQURBO0FBRUE7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUdBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7QUM5RUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDTkE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7QUNIQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQWZBO0FBQ0E7QUFhQTtBQUNBO0FBREEsYUFDQTtBQUNBO0FBREE7QUFBQTs7Ozs7OztBQ2pCQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDcEJBOzs7Ozs7OztBQ0FBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUNyQkE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==