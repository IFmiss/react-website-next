webpackHotUpdate("static/development/pages/blog/detail.js",{

/***/ "./pages/blog/detail/index.tsx":
/*!*************************************!*\
  !*** ./pages/blog/detail/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Layout */ "./components/Layout/index.tsx");
/* harmony import */ var _constance_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @constance/api */ "./constance/api.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constance_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @constance/index */ "./constance/index.ts");
/* harmony import */ var _utils_req__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils/req */ "./utils/req.ts");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _detail_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail.less */ "./pages/blog/detail/detail.less");
/* harmony import */ var _detail_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_detail_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_CodeBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/CodeBlock */ "./components/CodeBlock/index.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _root_store_actions_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @root/store/actions/index */ "./store/actions/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_15__);


var _jsxFileName = "/Users/daiwei/pr/react-website-next/pages/blog/detail/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;















var BlogDetail = function BlogDetail(props) {
  var detail = props.detail,
      prev = props.prev,
      next = props.next;
  var classString = classnames__WEBPACK_IMPORTED_MODULE_5___default()(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(_constance_index__WEBPACK_IMPORTED_MODULE_6__["PROJECT_NAME"], "-blog-detail"), true));
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    eleToTop();
    renderImage();
  }, []);

  var renderImage = function renderImage() {
    var imgs = Array.from(document.querySelectorAll('.react-next-web-blog-detail img'));
    imgs.forEach(function (item) {
      var src = item.getAttribute('src') || '';
      var alt = item.getAttribute('alt') || '';
      console.log(item.parentNode);
      react_dom__WEBPACK_IMPORTED_MODULE_15___default.a.render(__jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_12___default.a, {
        placeholder: __jsx("img", {
          className: "title-header-logo",
          src: "https://w4.hoopchina.com.cn/images/m/default_head.png",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), item);
    });
  };

  var eleToTop = function eleToTop() {
    var ele = document.getElementById('dw-next-container');

    if (ele) {
      ele.scrollTop = 0;
    }
  };

  return detail && detail.id ? __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: detail.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    className: classString,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("h1", {
    className: "".concat(classString, "-title"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, detail.name), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_8___default.a, {
    source: detail.content,
    escapeHtml: true,
    renderers: {
      code: _components_CodeBlock__WEBPACK_IMPORTED_MODULE_10__["default"]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }), __jsx("div", {
    className: "".concat(classString, "-entry"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, prev && prev.id ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/blog/detail?id=".concat(prev.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, __jsx("a", {
    className: "".concat(classString, "-entry-prev"),
    title: prev.name || '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, prev.name ? "\u4E0A\u4E00\u7BC7 : ".concat(prev.name) : '')) : null, next && next.id ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/blog/detail?id=".concat(next.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx("a", {
    className: "".concat(classString, "-entry-next"),
    title: next.name || '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, next.name ? "\u4E0B\u4E00\u7BC7 : ".concat(next.name) : '')) : null))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "\u52A0\u8F7D\u4E2D...");
};

BlogDetail.getInitialProps = function _callee(ctx) {
  var id, _ref, data;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = ctx.query.id;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_req__WEBPACK_IMPORTED_MODULE_7__["default"].get("".concat(_constance_api__WEBPACK_IMPORTED_MODULE_4__["ARTICLE_DETAIL"], "/").concat(id)));

        case 3:
          _ref = _context.sent;
          data = _ref.data;
          return _context.abrupt("return", {
            detail: data.result && data.result.detail || {},
            next: data.result && data.result.next || null,
            prev: data.result && data.result.prev || null
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var mapState = function mapState(state) {
  return {
    containerEle: state.base.containerEle
  };
};

var mapDispatch = _root_store_actions_index__WEBPACK_IMPORTED_MODULE_13__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapState, mapDispatch)(BlogDetail));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2Jsb2cvZGV0YWlsLmpzLmYzZmMzNmVmZmMzOWUzYWUzZjllLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL2RldGFpbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBOZXh0UGFnZVxufSBmcm9tICduZXh0J1xuaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQge1xuICBBUlRJQ0xFX0RFVEFJTFxufSBmcm9tICdAY29uc3RhbmNlL2FwaSdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQge1xuICBQUk9KRUNUX05BTUVcbn0gZnJvbSAnQGNvbnN0YW5jZS9pbmRleCdcbmltcG9ydCBodHRwIGZyb20gJ0B1dGlscy9yZXEnXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCAnLi9kZXRhaWwubGVzcydcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSBcIkBjb21wb25lbnRzL0NvZGVCbG9ja1wiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJ1xuXG5pbXBvcnQgeyBcbiAgSVN0b3JlXG59IGZyb20gJ0BzdG9yZS90eXBlcyc7XG5pbXBvcnQgTWFpbkFjdGlvbiBmcm9tICdAcm9vdC9zdG9yZS9hY3Rpb25zL2luZGV4J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcblxuaW50ZXJmYWNlIElCbG9nTGlzdENhdGVnb3JpZU9yVGFnIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSUJsb2dEZXRhaWwge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHJlYWRDb3VudDogc3RyaW5nO1xuICBlZGl0RGF0ZTogc3RyaW5nO1xuICBjcmVhdGVEYXRlOiBzdHJpbmc7XG4gIHRhZ0xpc3RzOiBJQmxvZ0xpc3RDYXRlZ29yaWVPclRhZ1tdO1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJQmxvZ1ByZXZOZXh0IHtcbiAgaWQ6IHN0cmluZyB8IG51bGw7XG4gIG5hbWU6IHN0cmluZyB8IG51bGw7XG59XG5cbmludGVyZmFjZSBCbG9nRGV0YWlsUHJvcHMge1xuICBkZXRhaWw6IElCbG9nRGV0YWlsLFxuICBuZXh0OiBJQmxvZ1ByZXZOZXh0LFxuICBwcmV2OiBJQmxvZ1ByZXZOZXh0XG59XG5cbmNvbnN0IEJsb2dEZXRhaWw6IE5leHRQYWdlPEJsb2dEZXRhaWxQcm9wcywge30+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGV0YWlsLCBwcmV2LCBuZXh0IH0gPSBwcm9wc1xuICBjb25zdCBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMoe1xuICAgIFtgJHtQUk9KRUNUX05BTUV9LWJsb2ctZGV0YWlsYF06IHRydWVcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGVsZVRvVG9wKClcbiAgICByZW5kZXJJbWFnZSgpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHJlbmRlckltYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGltZ3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWFjdC1uZXh0LXdlYi1ibG9nLWRldGFpbCBpbWcnKSlcbiAgICBpbWdzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBjb25zdCBzcmMgPSBpdGVtLmdldEF0dHJpYnV0ZSgnc3JjJykgfHwgJydcbiAgICAgIGNvbnN0IGFsdCA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdhbHQnKSB8fCAnJ1xuICAgICAgY29uc29sZS5sb2coaXRlbS5wYXJlbnROb2RlKVxuICAgICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICA8PlxuICAgICAgICAgIDxMYXp5TG9hZFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0bGUtaGVhZGVyLWxvZ29cIlxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdzQuaG9vcGNoaW5hLmNvbS5jbi9pbWFnZXMvbS9kZWZhdWx0X2hlYWQucG5nXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogPGltZyBzcmM9e3NyY30gYWx0PXthbHR9Lz4gKi99XG4gICAgICAgICAgPC9MYXp5TG9hZD5cbiAgICAgICAgPC8+LFxuICAgICAgICBpdGVtIGFzIEVsZW1lbnRcbiAgICAgIClcbiAgICB9KVxuICB9XG4gIFxuICBjb25zdCBlbGVUb1RvcCA9ICgpID0+IHtcbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHctbmV4dC1jb250YWluZXInKVxuICAgIGlmIChlbGUpIHtcbiAgICAgIGVsZS5zY3JvbGxUb3AgPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAoXG4gICAgICBkZXRhaWwgJiYgZGV0YWlsLmlkID8gKFxuICAgICAgICA8TGF5b3V0IHRpdGxlPXtkZXRhaWwubmFtZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU3RyaW5nfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2Ake2NsYXNzU3RyaW5nfS10aXRsZWB9PntkZXRhaWwubmFtZX08L2gxPlxuICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgICAgc291cmNlPXtkZXRhaWwuY29udGVudH1cbiAgICAgICAgICAgICAgZXNjYXBlSHRtbD17dHJ1ZX1cbiAgICAgICAgICAgICAgcmVuZGVyZXJzPXt7XG4gICAgICAgICAgICAgICAgY29kZTogQ29kZUJsb2NrXG4gICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc1N0cmluZ30tZW50cnlgfT5cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByZXYgJiYgcHJldi5pZCA/IChcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy9kZXRhaWw/aWQ9JHtwcmV2LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake2NsYXNzU3RyaW5nfS1lbnRyeS1wcmV2YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcmV2Lm5hbWUgfHwgJyd9PlxuICAgICAgICAgICAgICAgICAgICAgIHsgcHJldi5uYW1lID8gYOS4iuS4gOevhyA6ICR7cHJldi5uYW1lfWAgOiAnJyB9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuZXh0ICYmIG5leHQuaWQgPyAoXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2cvZGV0YWlsP2lkPSR7bmV4dC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtjbGFzc1N0cmluZ30tZW50cnktbmV4dGB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17bmV4dC5uYW1lIHx8ICcnfT5cbiAgICAgICAgICAgICAgICAgICAgICB7IG5leHQubmFtZSA/IGDkuIvkuIDnr4cgOiAke25leHQubmFtZX1gIDogJycgfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbmsgPlxuICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xheW91dD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXY+5Yqg6L295LitLi4uPC9kaXY+XG4gICAgICApXG4gICAgKVxuICApXG59XG5cbkJsb2dEZXRhaWwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zdCB7IGlkIH0gID0gY3R4LnF1ZXJ5XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgaHR0cC5nZXQoYCR7QVJUSUNMRV9ERVRBSUx9LyR7aWR9YClcbiAgcmV0dXJuIHtcbiAgICBkZXRhaWw6IGRhdGEucmVzdWx0ICYmIGRhdGEucmVzdWx0LmRldGFpbCB8fCB7fSxcbiAgICBuZXh0OiBkYXRhLnJlc3VsdCAmJiBkYXRhLnJlc3VsdC5uZXh0IHx8IG51bGwsXG4gICAgcHJldjogZGF0YS5yZXN1bHQgJiYgZGF0YS5yZXN1bHQucHJldiB8fCBudWxsXG4gIH1cbn1cblxuY29uc3QgbWFwU3RhdGUgPSAoc3RhdGU6IElTdG9yZSkgPT4gKHsgXG4gIGNvbnRhaW5lckVsZTogc3RhdGUuYmFzZS5jb250YWluZXJFbGVcbiB9KVxuXG5jb25zdCBtYXBEaXNwYXRjaCA9IE1haW5BY3Rpb25cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZSwgbWFwRGlzcGF0Y2gpKEJsb2dEZXRhaWwpXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQTJCQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9