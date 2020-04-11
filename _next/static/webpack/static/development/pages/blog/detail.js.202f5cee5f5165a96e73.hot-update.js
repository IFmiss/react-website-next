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
    var Zmage, imgs, lists;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function renderImage$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Zmage = __webpack_require__(/*! react-zmage */ "./node_modules/react-zmage/lib/index.js")["default"];
            imgs = Array.from(document.querySelectorAll('.react-next-web-blog-detail img'));
            lists = imgs.map(function (item) {
              return {
                src: item.getAttribute('src') || '',
                alt: item.getAttribute('alt') || '',
                className: 'testClassName'
              };
            });
            console.log(lists);
            imgs.forEach(function (item, index) {
              var _item$parentNode;

              var _lists$index = lists[index],
                  src = _lists$index.src,
                  alt = _lists$index.alt;
              var ele = document.createElement('p');
              ele.className = 'image-wrapper';
              var wrapperEle = item.parentNode && item.parentNode.insertBefore(ele, item);
              (_item$parentNode = item.parentNode) === null || _item$parentNode === void 0 ? void 0 : _item$parentNode.removeChild(item);
              react_dom__WEBPACK_IMPORTED_MODULE_15___default.a.render(__jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_12___default.a, {
                placeholder: __jsx("img", {
                  className: "title-header-logo",
                  src: "https://w4.hoopchina.com.cn/images/m/default_head.png",
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                  },
                  __self: this
                }),
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
                },
                __self: this
              }, __jsx(Zmage, {
                src: src,
                backdrop: 'rgba(0, 0, 0, 0.8)',
                alt: alt,
                set: lists,
                defaultPage: index,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 91
                },
                __self: this
              }))), wrapperEle);
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
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
      lineNumber: 115
    },
    __self: this
  }, __jsx("div", {
    className: classString,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("h1", {
    className: "".concat(classString, "-title"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, detail.name), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_8___default.a, {
    source: detail.content,
    escapeHtml: true,
    skipHtml: true,
    renderers: {
      code: _components_CodeBlock__WEBPACK_IMPORTED_MODULE_10__["default"]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), __jsx("div", {
    className: "".concat(classString, "-entry"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, prev && prev.id ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/blog/detail?id=".concat(prev.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("a", {
    className: "".concat(classString, "-entry-prev"),
    title: prev.name || '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, prev.name ? "\u4E0A\u4E00\u7BC7 : ".concat(prev.name) : '')) : null, next && next.id ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/blog/detail?id=".concat(next.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("a", {
    className: "".concat(classString, "-entry-next"),
    title: next.name || '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, next.name ? "\u4E0B\u4E00\u7BC7 : ".concat(next.name) : '')) : null))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "\u52A0\u8F7D\u4E2D...");
};

BlogDetail.getInitialProps = function _callee(ctx) {
  var id, _ref, data;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = ctx.query.id;
          _context2.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_req__WEBPACK_IMPORTED_MODULE_7__["default"].get("".concat(_constance_api__WEBPACK_IMPORTED_MODULE_4__["ARTICLE_DETAIL"], "/").concat(id)));

        case 3:
          _ref = _context2.sent;
          data = _ref.data;
          return _context2.abrupt("return", {
            detail: data.result && data.result.detail || {},
            next: data.result && data.result.next || null,
            prev: data.result && data.result.prev || null
          });

        case 6:
        case "end":
          return _context2.stop();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2Jsb2cvZGV0YWlsLmpzLjIwMmY1Y2VlNWY1MTY1YTk2ZTczLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL2RldGFpbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBOZXh0UGFnZVxufSBmcm9tICduZXh0J1xuaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQge1xuICBBUlRJQ0xFX0RFVEFJTFxufSBmcm9tICdAY29uc3RhbmNlL2FwaSdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQge1xuICBQUk9KRUNUX05BTUVcbn0gZnJvbSAnQGNvbnN0YW5jZS9pbmRleCdcbmltcG9ydCBodHRwIGZyb20gJ0B1dGlscy9yZXEnXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCAnLi9kZXRhaWwubGVzcydcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSBcIkBjb21wb25lbnRzL0NvZGVCbG9ja1wiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJ1xuXG5pbXBvcnQgeyBcbiAgSVN0b3JlXG59IGZyb20gJ0BzdG9yZS90eXBlcyc7XG5pbXBvcnQgTWFpbkFjdGlvbiBmcm9tICdAcm9vdC9zdG9yZS9hY3Rpb25zL2luZGV4J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcblxuaW50ZXJmYWNlIElCbG9nTGlzdENhdGVnb3JpZU9yVGFnIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSUJsb2dEZXRhaWwge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHJlYWRDb3VudDogc3RyaW5nO1xuICBlZGl0RGF0ZTogc3RyaW5nO1xuICBjcmVhdGVEYXRlOiBzdHJpbmc7XG4gIHRhZ0xpc3RzOiBJQmxvZ0xpc3RDYXRlZ29yaWVPclRhZ1tdO1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJQmxvZ1ByZXZOZXh0IHtcbiAgaWQ6IHN0cmluZyB8IG51bGw7XG4gIG5hbWU6IHN0cmluZyB8IG51bGw7XG59XG5cbmludGVyZmFjZSBCbG9nRGV0YWlsUHJvcHMge1xuICBkZXRhaWw6IElCbG9nRGV0YWlsLFxuICBuZXh0OiBJQmxvZ1ByZXZOZXh0LFxuICBwcmV2OiBJQmxvZ1ByZXZOZXh0XG59XG5cbmNvbnN0IEJsb2dEZXRhaWw6IE5leHRQYWdlPEJsb2dEZXRhaWxQcm9wcywge30+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGV0YWlsLCBwcmV2LCBuZXh0IH0gPSBwcm9wc1xuICBjb25zdCBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMoe1xuICAgIFtgJHtQUk9KRUNUX05BTUV9LWJsb2ctZGV0YWlsYF06IHRydWVcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGVsZVRvVG9wKClcbiAgICByZW5kZXJJbWFnZSgpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHJlbmRlckltYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IFptYWdlID0gcmVxdWlyZSgncmVhY3Qtem1hZ2UnKS5kZWZhdWx0XG4gICAgY29uc3QgaW1ncyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlYWN0LW5leHQtd2ViLWJsb2ctZGV0YWlsIGltZycpKVxuICAgIGNvbnN0IGxpc3RzID0gaW1ncy5tYXAoaXRlbSA9PiAoXG4gICAgICB7XG4gICAgICAgIHNyYzogaXRlbS5nZXRBdHRyaWJ1dGUoJ3NyYycpIHx8ICcnLFxuICAgICAgICBhbHQ6IGl0ZW0uZ2V0QXR0cmlidXRlKCdhbHQnKSB8fCAnJyxcbiAgICAgICAgY2xhc3NOYW1lOiAndGVzdENsYXNzTmFtZSdcbiAgICAgIH1cbiAgICApKVxuICAgIGNvbnNvbGUubG9nKGxpc3RzKVxuICAgIGltZ3MuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHsgc3JjLCBhbHQgfSA9IGxpc3RzW2luZGV4XVxuICAgICAgY29uc3QgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICBlbGUuY2xhc3NOYW1lID0gJ2ltYWdlLXdyYXBwZXInXG4gICAgICBjb25zdCB3cmFwcGVyRWxlID0gaXRlbS5wYXJlbnROb2RlICYmIGl0ZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlLCBpdGVtKVxuICAgICAgaXRlbS5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZChpdGVtKVxuICAgICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICA8PlxuICAgICAgICAgIDxMYXp5TG9hZFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e1xuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGl0bGUtaGVhZGVyLWxvZ29cIlxuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vdzQuaG9vcGNoaW5hLmNvbS5jbi9pbWFnZXMvbS9kZWZhdWx0X2hlYWQucG5nXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Wm1hZ2Ugc3JjPXtzcmN9XG4gICAgICAgICAgICAgICAgYmFja2Ryb3A9eydyZ2JhKDAsIDAsIDAsIDAuOCknfVxuICAgICAgICAgICAgICAgIGFsdD17YWx0fVxuICAgICAgICAgICAgICAgIHNldD17bGlzdHN9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFBhZ2U9e2luZGV4fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvWm1hZ2U+XG4gICAgICAgICAgPC9MYXp5TG9hZD5cbiAgICAgICAgPC8+LFxuICAgICAgICB3cmFwcGVyRWxlIGFzIEVsZW1lbnRcbiAgICAgIClcbiAgICB9KVxuICB9XG4gIFxuICBjb25zdCBlbGVUb1RvcCA9ICgpID0+IHtcbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHctbmV4dC1jb250YWluZXInKVxuICAgIGlmIChlbGUpIHtcbiAgICAgIGVsZS5zY3JvbGxUb3AgPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAoXG4gICAgICBkZXRhaWwgJiYgZGV0YWlsLmlkID8gKFxuICAgICAgICA8TGF5b3V0IHRpdGxlPXtkZXRhaWwubmFtZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU3RyaW5nfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2Ake2NsYXNzU3RyaW5nfS10aXRsZWB9PntkZXRhaWwubmFtZX08L2gxPlxuICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgICAgc291cmNlPXtkZXRhaWwuY29udGVudH1cbiAgICAgICAgICAgICAgZXNjYXBlSHRtbD17dHJ1ZX1cbiAgICAgICAgICAgICAgc2tpcEh0bWw9e3RydWV9XG4gICAgICAgICAgICAgIHJlbmRlcmVycz17e1xuICAgICAgICAgICAgICAgIGNvZGU6IENvZGVCbG9ja1xuICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NTdHJpbmd9LWVudHJ5YH0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcmV2ICYmIHByZXYuaWQgPyAoXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2cvZGV0YWlsP2lkPSR7cHJldi5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtjbGFzc1N0cmluZ30tZW50cnktcHJldmB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cHJldi5uYW1lIHx8ICcnfT5cbiAgICAgICAgICAgICAgICAgICAgICB7IHByZXYubmFtZSA/IGDkuIrkuIDnr4cgOiAke3ByZXYubmFtZX1gIDogJycgfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmV4dCAmJiBuZXh0LmlkID8gKFxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nL2RldGFpbD9pZD0ke25leHQuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7Y2xhc3NTdHJpbmd9LWVudHJ5LW5leHRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e25leHQubmFtZSB8fCAnJ30+XG4gICAgICAgICAgICAgICAgICAgICAgeyBuZXh0Lm5hbWUgPyBg5LiL5LiA56+HIDogJHtuZXh0Lm5hbWV9YCA6ICcnIH1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rID5cbiAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PuWKoOi9veS4rS4uLjwvZGl2PlxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5CbG9nRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgY29uc3QgeyBpZCB9ICA9IGN0eC5xdWVyeVxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGh0dHAuZ2V0KGAke0FSVElDTEVfREVUQUlMfS8ke2lkfWApXG4gIHJldHVybiB7XG4gICAgZGV0YWlsOiBkYXRhLnJlc3VsdCAmJiBkYXRhLnJlc3VsdC5kZXRhaWwgfHwge30sXG4gICAgbmV4dDogZGF0YS5yZXN1bHQgJiYgZGF0YS5yZXN1bHQubmV4dCB8fCBudWxsLFxuICAgIHByZXY6IGRhdGEucmVzdWx0ICYmIGRhdGEucmVzdWx0LnByZXYgfHwgbnVsbFxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlOiBJU3RvcmUpID0+ICh7IFxuICBjb250YWluZXJFbGU6IHN0YXRlLmJhc2UuY29udGFpbmVyRWxlXG4gfSlcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSBNYWluQWN0aW9uXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShCbG9nRGV0YWlsKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUEyQkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQXZDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBd0NBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9