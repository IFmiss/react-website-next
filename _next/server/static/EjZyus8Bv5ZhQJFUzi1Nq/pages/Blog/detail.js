module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("g55T");


/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

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

/***/ "88KH":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter/dist/cjs/styles/prism");

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

/***/ "K2gz":
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "KoE+":
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

/***/ "RyM3":
/***/ (function(module, exports) {

module.exports = require("react-syntax-highlighter");

/***/ }),

/***/ "TG9l":
/***/ (function(module, exports) {



/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "g55T":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layout/index.tsx
var Layout = __webpack_require__("+oBk");

// EXTERNAL MODULE: ./constance/api.ts
var api = __webpack_require__("QvMJ");

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__("K2gz");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./constance/index.ts
var constance = __webpack_require__("153H");

// EXTERNAL MODULE: ./utils/http.ts
var http = __webpack_require__("Isvs");

// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// EXTERNAL MODULE: ./pages/Blog/detail/detail.less
var detail_detail = __webpack_require__("KoE+");

// EXTERNAL MODULE: external "react-syntax-highlighter"
var external_react_syntax_highlighter_ = __webpack_require__("RyM3");

// EXTERNAL MODULE: ./components/CodeBlock/code-block.less
var code_block = __webpack_require__("TG9l");

// EXTERNAL MODULE: external "react-syntax-highlighter/dist/cjs/styles/prism"
var prism_ = __webpack_require__("88KH");

// CONCATENATED MODULE: ./components/CodeBlock/index.tsx
var __jsx = external_react_default.a.createElement;





const CodeBlock = ({
  language,
  value
}) => {
  return __jsx("figure", {
    className: "highlight-block"
  }, __jsx(external_react_syntax_highlighter_["PrismLight"], {
    language: language,
    showLineNumbers: true,
    useInlineStyles: true,
    style: prism_["dark"]
  }, value));
};

/* harmony default export */ var components_CodeBlock = (CodeBlock);
// CONCATENATED MODULE: ./pages/Blog/detail/index.tsx
var detail_jsx = external_react_default.a.createElement;










const BlogDetail = ({
  detail,
  prev,
  next
}) => {
  const classString = external_classnames_default()({
    [`${constance["b" /* PROJECT_NAME */]}-blog-detail`]: true
  });
  return detail_jsx(Layout["a" /* default */], {
    title: detail.name
  }, detail_jsx(external_react_markdown_default.a, {
    className: classString,
    source: detail.content,
    escapeHtml: false,
    renderers: {
      code: components_CodeBlock
    }
  }));
};

BlogDetail.getInitialProps = async ctx => {
  const id = ctx.query.id;
  const res = await http["a" /* default */].get(`${api["a" /* ARTICLE_DETAIL */]}/${id}`);
  return {
    detail: res.result.detail,
    next: res.result.next,
    prev: res.result.prev
  };
};

/* harmony default export */ var Blog_detail = __webpack_exports__["default"] = (BlogDetail);

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL0VqWnl1czhCdjVaaFFKRlV6aTFOcS9wYWdlcy9CbG9nL2RldGFpbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xheW91dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy11bmZldGNoXCIiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbmNlL2luZGV4LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9zdHlsZXMvcHJpc21cIiIsIndlYnBhY2s6Ly8vLi91dGlscy9odHRwLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vLi9jb25zdGFuY2UvYXBpLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN5bnRheC1oaWdobGlnaHRlclwiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS1jb3JlanMyL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb3JlLWpzL2xpYnJhcnkvZm4vcHJvbWlzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUtY29yZWpzMi9jb3JlLWpzL3Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db2RlQmxvY2svaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL0Jsb2cvZGV0YWlsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXJrZG93blwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5cbmludGVyZmFjZSBMYXlvdXRQcm9wcyB7XG4gIGNoaWxkcmVuOiBhbnk7XG4gIHRpdGxlPzogc3RyaW5nO1xufVxuXG5jb25zdCBMYXlvdXQ6IE5leHRQYWdlPExheW91dFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBjbGFzc1N0cmluZ0NvbnRhaW5lciA9IGNsYXNzTmFtZXMoe1xuICAgICdkdy1wYWdlLXJvdXRlcic6IHRydWVcbiAgfSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cHJvcHMudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgY2hhclNldD0ndXRmLTgnIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9J3ZpZXdwb3J0JyBjb250ZW50PSdpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoJyAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBpZD1cImR3LXJlYWN0LXdlYi1jb250YWluZXJcIiBjbGFzc05hbWU9e2NsYXNzU3RyaW5nQ29udGFpbmVyfT5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuTGF5b3V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgdGl0bGU6ICfov5nmmK/kuIDkuKrpu5jorqTnmoR0aXRsZSdcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwiZXhwb3J0IGNvbnN0IFBST0pFQ1RfTkFNRSA9ICdyZWFjdC1uZXh0LXdlYidcbmV4cG9ydCBjb25zdCBXRUJTSVRFX1RJVExFID0gJ0QudydcbmV4cG9ydCBjb25zdCBUSVRMRSA9ICfmnKrmm77pgZflv5jnmoTpnZLmmKUgfCB3ZWLliY3nq69f5oqA5pyv5YiG5LqrX+aItOS8n+eahOS4quS6uue9keermSdcbmV4cG9ydCBjb25zdCBUSVRMRV9FTlRSWSA9ICfjg70o4py/776f4pa9776fKeODjiDmrKLov47lm57mnaUnXG5leHBvcnQgY29uc3QgVElUTEVfT1VUID0gJ3co776f0JTvvp8pdyDkvaDotbDkuoYg5ZGc5ZWK5ZWKJ1xuZXhwb3J0IGNvbnN0IFNWR19ERUZBVUxUX0NPTE9SID0gJ2dyZWVuJ1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfVEVYVCA9ICcgICAgUiBFIEEgQyBUIC0gVyBFIEIgUyBJIFQgRSAgICAnXG5leHBvcnQgY29uc3QgQ09OU09MRV9CR1MgPSBbJyNhMThjZDEnLCAnI2ZiYzJlYiddXG5cbmV4cG9ydCBjb25zdCBTRUxGX1NIRUVUX0lORk8gPSB7XG4gIGlkOiAyMTc5Mzc3Nzk4LFxuICBuYW1lOiAn56iL5bqP5ZGY5b+F5aSH77yM5bim5LiK6ICz5py65Luj56CB5bCx5piv5YWo5LiW55WMJ1xufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9CTE9HX0RFVEFJTCA9IHtcbiAgZGV0YWlsOiB7XG4gICAgaWQ6ICcnLFxuICAgIG5hbWU6ICcnLFxuICAgIHJlYWRDb3VudDogJycsXG4gICAgZWRpdERhdGU6ICcnLFxuICAgIGNyZWF0ZURhdGU6ICcnLFxuICAgIGNvbnRlbnQ6ICcnLFxuICAgIHRhZ0xpc3RzOiBbe1xuICAgICAgaWQ6ICcnLFxuICAgICAgbmFtZTogJydcbiAgICB9XVxuICB9LFxuICBuZXh0OiB7XG4gICAgaWQ6IG51bGwsXG4gICAgbmFtZTogbnVsbFxuICB9LFxuICBwcmV2OiB7XG4gICAgaWQ6IG51bGwsXG4gICAgbmFtZTogbnVsbFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBNVVNJQ19TSEVFVF9ERUZBVUxUX0xJTUlUID0gMzBcbmV4cG9ydCBjb25zdCBNVVNJQ19TSEVFVF9UUkFOU0lUSU9OX0RVUkFUSU9OID0gTVVTSUNfU0hFRVRfREVGQVVMVF9MSU1JVCAqIDIwMCAvIDJcblxuZXhwb3J0IGNvbnN0IE1VU0lDX1NFQVJDSF9ERUZBVUxUX0xJTUlUID0gMjBcblxuZXhwb3J0IGNvbnN0IEJMT0dfTElTVF9ERUZBVUxUX0xJTUlUID0gMTJcblxuZXhwb3J0IGNvbnN0IElOVEVSX0xJTktfREVGQVVMVF9MSU1JVCA9IDEyXG5cbmV4cG9ydCBjb25zdCBCTE9HX1RBR1NfQUxMX0lORk8gPSB7XG4gIGlkOiAnJyxcbiAgbmFtZTogJ+WFqOmDqCdcbn1cblxuLy8g5o6S6KGM5qac5L+h5oGvXG5leHBvcnQgY29uc3QgTVVTSUNfUkFOS19UWVBFOiBhbnkgPSB7XG4gICcwJzogJ+S6kemfs+aWsOatjOamnCcsXG4gICcxJzogJ+S6kemfs+eDreatjOamnCcsXG4gICcyJzogJ+e9keaYk+WOn+WIm+atjOabsuamnCcsXG4gICczJzogJ+S6kemfs+S5kOmjmeWNh+amnCcsXG4gICc0JzogJ+S6kemfs+S5kOeUtemfs+amnCcsXG4gICc1JzogJ1VL5o6S6KGM5qac5ZGo5qacJyxcbiAgJzYnOiAn576O5Zu9QmlsbGJvYXJk5ZGo5qacJyxcbiAgJzcnOiAnS1RW5Zeo5qacJyxcbiAgJzgnOiAnaVR1bmVz5qacJyxcbiAgJzEwJzogJ+aXpeacrE9yaWNvbuWRqOamnCcsXG4gICcxMic6ICfpn6nlm71NbmV05o6S6KGM5qac5ZGo5qacJyxcbiAgJzE3JzogJ+WNjuivremHkeabsuamnCcsXG4gICcyMic6ICfkupHpn7PkuZBBQ0fpn7PkuZDmppwnXG59XG5cbi8vIGNvcHlyaWdodCDphY3nva5cbmV4cG9ydCBjb25zdCBDT1BZX1JJR0hUX0NPTkZJRyA9IFtcbiAge1xuICAgIG5hbWU6ICdkLXV0aWxzJyxcbiAgICB0bzogJ2h0dHBzOi8vZC11dGlscy5kYWl3ZWkuc2l0ZSdcbiAgfVxuICAvLyAsIHtcbiAgLy8gICBuYW1lOiAn5Y+L5oOF6ZO+5o6lJyxcbiAgLy8gICB0bzogJy9pbnRlcmxpbmsnXG4gIC8vIH1cbl0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvZGlzdC9janMvc3R5bGVzL3ByaXNtXCIpOyIsImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5cbi8vIDIwMCDmiJDlip9cbi8vIDEwMDAwMSDlpLHotKVcbi8vIDEwMDAwMiDotoXml7ZcblxudHlwZSBSRVNfQ09ERSA9IDIwMCB8IDEwMDAwMSB8IDEwMDAwMlxuXG5pbnRlcmZhY2UgSVJlc0luZm88VD4ge1xuICBjb2RlOiBSRVNfQ09ERSxcbiAgbXNnOiBzdHJpbmcsXG4gIHJlc3VsdDogVFxufVxuXG5jb25zdCBUSU1FX09VVCA9IDUwMDBcblxuY29uc3QgdGltZU91dCA9ICgpOiBQcm9taXNlPElSZXNJbmZvPG51bGw+PiA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzb2x2ZSh7XG4gICAgICAgIGNvZGU6IDEwMDAwMixcbiAgICAgICAgbXNnOiAn6K+35rGC6LaF5pe2JyxcbiAgICAgICAgcmVzdWx0OiBudWxsXG4gICAgICB9KVxuICAgIH0sIFRJTUVfT1VUKVxuICB9KVxufVxuXG5jb25zdCBmZXRjaERhdGEgPSAodXJsOiBSZXF1ZXN0SW5mbywgY29uZmlnOiBSZXF1ZXN0SW5pdCB8IHVuZGVmaW5lZCk6IFByb21pc2U8SVJlc0luZm88bnVsbCB8IG5ldmVyPj4gID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsLCBjb25maWcpXG4gICAgICBjb25zdCBqc29uOiBJUmVzSW5mbzxhbnk+ID0gYXdhaXQgcmVzLmpzb24oKVxuICAgICAgcmVzb2x2ZShqc29uKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmVqZWN0KGVycilcbiAgICB9XG4gIH0pXG59XG5cbmNvbnN0IGh0dHAgPSAodXJsOiBSZXF1ZXN0SW5mbywgY29uZmlnOiBSZXF1ZXN0SW5pdCB8IHVuZGVmaW5lZCA9IHt9KSA9PiB7XG4gIHJldHVybiBQcm9taXNlLnJhY2UoW3RpbWVPdXQoKSwgZmV0Y2hEYXRhKHVybCwgY29uZmlnKV0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmIChyZXMgJiYgcmVzLmNvZGUgJiYgcmVzLmNvZGUgPT09IDIwMCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXMpXG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlcylcbiAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKVxuICB9KVxufVxuXG50eXBlIEh0dHBGbiA9ICh1cmw6IFJlcXVlc3RJbmZvLCBjb25maWc/OiBSZXF1ZXN0SW5pdCB8IHVuZGVmaW5lZCkgPT4gUHJvbWlzZTxJUmVzSW5mbzxhbnk+PlxuXG5jb25zdCBodHRwR2V0OiBIdHRwRm4gPSBhc3luYyAodXJsLCBjb25maWcgPSB7fSkgPT4ge1xuICByZXR1cm4gYXdhaXQgaHR0cCh1cmwsIE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZywge1xuICAgIG1ldGhvZDogJ2dldCdcbiAgfSkpXG59XG5cbmNvbnN0IGh0dHBQb3N0OiBIdHRwRm4gPSBhc3luYyAodXJsLCBjb25maWcgPSB7fSkgPT4ge1xuICByZXR1cm4gYXdhaXQgaHR0cCh1cmwsIE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZywge1xuICAgIG1ldGhvZDogJ3Bvc3QnXG4gIH0pKVxufVxuXG5jb25zdCBodHRwUHV0OiBIdHRwRm4gPSBhc3luYyAodXJsLCBjb25maWcgPSB7fSkgPT4ge1xuICByZXR1cm4gYXdhaXQgaHR0cCh1cmwsIE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZywge1xuICAgIG1ldGhvZDogJ3B1dCdcbiAgfSkpXG59XG5cbmNvbnN0IGh0dHBEZWxldGU6IEh0dHBGbiA9IGFzeW5jICh1cmwsIGNvbmZpZyA9IHt9KSA9PiB7XG4gIHJldHVybiBhd2FpdCBodHRwKHVybCwgT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnLCB7XG4gICAgbWV0aG9kOiAnZGVsZXRlJ1xuICB9KSlcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBnZXQ6IGh0dHBHZXQsXG4gIHBvc3Q6IGh0dHBQb3N0LFxuICBwdXQ6IGh0dHBQdXQsXG4gIGRlbGV0ZTogaHR0cERlbGV0ZVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiLCJjb25zdCBCQVNFX1VSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjQwMDInXG5cbmV4cG9ydCBjb25zdCBBUlRJQ0xFX0xJU1RTID0gYCR7QkFTRV9VUkx9L2FydGljbGUvbGlzdHNgXG5leHBvcnQgY29uc3QgQVJUSUNMRV9ERVRBSUwgPSBgJHtCQVNFX1VSTH0vYXJ0aWNsZS9kZXRhaWxgIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9wcm9taXNlXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByaXNtTGlnaHQgYXMgU3ludGF4SGlnaGxpZ2h0ZXIgfSBmcm9tICdyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXInXG5pbXBvcnQgJy4vY29kZS1ibG9jay5sZXNzJ1xuaW1wb3J0IHsgZGFyayB9IGZyb20gJ3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9kaXN0L2Nqcy9zdHlsZXMvcHJpc20nXG5cbmludGVyZmFjZSBDb2RlQmxvY2tQcm9wcyB7XG4gIGxhbmd1YWdlOiBzdHJpbmdcbiAgdmFsdWU6IHN0cmluZ1xufVxuXG5jb25zdCBDb2RlQmxvY2s6IFJlYWN0LkZDPENvZGVCbG9ja1Byb3BzPiA9ICh7IGxhbmd1YWdlLCB2YWx1ZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGZpZ3VyZSBjbGFzc05hbWU9XCJoaWdobGlnaHQtYmxvY2tcIj5cbiAgICAgIDxTeW50YXhIaWdobGlnaHRlciBsYW5ndWFnZT17bGFuZ3VhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0xpbmVOdW1iZXJzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgIHVzZUlubGluZVN0eWxlcz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17ZGFya30+XG4gICAgICAgIHt2YWx1ZX1cbiAgICAgIDwvU3ludGF4SGlnaGxpZ2h0ZXI+XG4gICAgPC9maWd1cmU+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29kZUJsb2NrXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBOZXh0UGFnZVxufSBmcm9tICduZXh0J1xuaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQge1xuICBBUlRJQ0xFX0RFVEFJTFxufSBmcm9tICdAY29uc3RhbmNlL2FwaSdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQge1xuICBQUk9KRUNUX05BTUVcbn0gZnJvbSAnQGNvbnN0YW5jZS9pbmRleCdcbmltcG9ydCBodHRwIGZyb20gJ0B1dGlscy9odHRwJ1xuaW1wb3J0IFJlYWN0TWFya2Rvd24gZnJvbSAncmVhY3QtbWFya2Rvd24nXG5pbXBvcnQgJy4vZGV0YWlsLmxlc3MnXG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gXCJAY29tcG9uZW50cy9Db2RlQmxvY2tcIjtcblxuaW50ZXJmYWNlIElCbG9nTGlzdENhdGVnb3JpZU9yVGFnIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSUJsb2dEZXRhaWwge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHJlYWRDb3VudDogc3RyaW5nO1xuICBlZGl0RGF0ZTogc3RyaW5nO1xuICBjcmVhdGVEYXRlOiBzdHJpbmc7XG4gIHRhZ0xpc3RzOiBJQmxvZ0xpc3RDYXRlZ29yaWVPclRhZ1tdO1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJQmxvZ1ByZXZOZXh0IHtcbiAgaWQ6IHN0cmluZyB8IG51bGw7XG4gIG5hbWU6IHN0cmluZyB8IG51bGw7XG59XG5cbmludGVyZmFjZSBCbG9nRGV0YWlsUHJvcHMge1xuICBkZXRhaWw6IElCbG9nRGV0YWlsLFxuICBuZXh0OiBJQmxvZ1ByZXZOZXh0LFxuICBwcmV2OiBJQmxvZ1ByZXZOZXh0XG59XG5cbmNvbnN0IEJsb2dEZXRhaWw6IE5leHRQYWdlPEJsb2dEZXRhaWxQcm9wcywge30+ID0gKHsgZGV0YWlsLCBwcmV2LCBuZXh0IH0pID0+IHtcbiAgY29uc3QgY2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKHtcbiAgICBbYCR7UFJPSkVDVF9OQU1FfS1ibG9nLWRldGFpbGBdOiB0cnVlXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPExheW91dCB0aXRsZT17ZGV0YWlsLm5hbWV9PlxuICAgICAgIDxSZWFjdE1hcmtkb3duIGNsYXNzTmFtZT17Y2xhc3NTdHJpbmd9XG4gICAgICAgICAgICAgICAgICAgc291cmNlPXtkZXRhaWwuY29udGVudH1cbiAgICAgICAgICAgICAgICAgICBlc2NhcGVIdG1sPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICByZW5kZXJlcnM9e3tcbiAgICAgICAgICAgICAgICAgICAgY29kZTogQ29kZUJsb2NrXG4gICAgICAgICAgICAgICAgICAgfX0vPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbkJsb2dEZXRhaWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCBpZCA9IGN0eC5xdWVyeS5pZFxuICBjb25zdCByZXMgPSBhd2FpdCBodHRwLmdldChgJHtBUlRJQ0xFX0RFVEFJTH0vJHtpZH1gKVxuICByZXR1cm4ge1xuICAgIGRldGFpbDogcmVzLnJlc3VsdC5kZXRhaWwsXG4gICAgbmV4dDogcmVzLnJlc3VsdC5uZXh0LFxuICAgIHByZXY6IHJlcy5yZXN1bHQucHJldlxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBCbG9nRGV0YWlsXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXJrZG93blwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7Il0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FDaENBOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQWpCQTtBQXVCQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQTtBQUNBO0FBZ0JBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBUkE7Ozs7Ozs7QUNyRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUdBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7Ozs7Ozs7QUM5RUE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7Ozs7QUNIQTs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUUE7QUFDQTtBQUNBOzs7QUN2QkE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQUE7Ozs7Ozs7QUNwRUE7Ozs7Ozs7QUNBQTs7OztBIiwic291cmNlUm9vdCI6IiJ9