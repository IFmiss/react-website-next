webpackHotUpdate("static/development/pages/blog/detail.js",{

/***/ "./node_modules/react-lazyload/lib/index.js":
false,

/***/ "./node_modules/react-lazyload/lib/utils/debounce.js":
false,

/***/ "./node_modules/react-lazyload/lib/utils/event.js":
false,

/***/ "./node_modules/react-lazyload/lib/utils/scrollParent.js":
false,

/***/ "./node_modules/react-lazyload/lib/utils/throttle.js":
false,

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
/* harmony import */ var _root_store_actions_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @root/store/actions/index */ "./store/actions/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_14__);


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
                alt: "图片的占位文字，作为图片的标题, 请尽量保持简短",
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
              react_dom__WEBPACK_IMPORTED_MODULE_14___default.a.render(__jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Zmage, {
                src: src,
                alt: alt,
                set: lists,
                defaultPage: index,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 83
                },
                __self: this
              })), wrapperEle);
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
      lineNumber: 105
    },
    __self: this
  }, __jsx("div", {
    className: classString,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("h1", {
    className: "".concat(classString, "-title"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
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
      lineNumber: 108
    },
    __self: this
  }), __jsx("div", {
    className: "".concat(classString, "-entry"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, prev && prev.id ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/blog/detail?id=".concat(prev.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx("a", {
    className: "".concat(classString, "-entry-prev"),
    title: prev.name || '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, prev.name ? "\u4E0A\u4E00\u7BC7 : ".concat(prev.name) : '')) : null, next && next.id ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/blog/detail?id=".concat(next.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("a", {
    className: "".concat(classString, "-entry-next"),
    title: next.name || '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, next.name ? "\u4E0B\u4E00\u7BC7 : ".concat(next.name) : '')) : null))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
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

var mapDispatch = _root_store_actions_index__WEBPACK_IMPORTED_MODULE_12__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_13__["connect"])(mapState, mapDispatch)(BlogDetail));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2Jsb2cvZGV0YWlsLmpzLmUxMDg5NzY2ZmM1YzJmMmQ0MDk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL2RldGFpbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBOZXh0UGFnZVxufSBmcm9tICduZXh0J1xuaW1wb3J0IExheW91dCBmcm9tICdAY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQge1xuICBBUlRJQ0xFX0RFVEFJTFxufSBmcm9tICdAY29uc3RhbmNlL2FwaSdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQge1xuICBQUk9KRUNUX05BTUVcbn0gZnJvbSAnQGNvbnN0YW5jZS9pbmRleCdcbmltcG9ydCBodHRwIGZyb20gJ0B1dGlscy9yZXEnXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcbmltcG9ydCAnLi9kZXRhaWwubGVzcydcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSBcIkBjb21wb25lbnRzL0NvZGVCbG9ja1wiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExhenlMb2FkIGZyb20gJ3JlYWN0LWxhenlsb2FkJ1xuXG5pbXBvcnQgeyBcbiAgSVN0b3JlXG59IGZyb20gJ0BzdG9yZS90eXBlcyc7XG5pbXBvcnQgTWFpbkFjdGlvbiBmcm9tICdAcm9vdC9zdG9yZS9hY3Rpb25zL2luZGV4J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcblxuaW50ZXJmYWNlIElCbG9nTGlzdENhdGVnb3JpZU9yVGFnIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgSUJsb2dEZXRhaWwge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHJlYWRDb3VudDogc3RyaW5nO1xuICBlZGl0RGF0ZTogc3RyaW5nO1xuICBjcmVhdGVEYXRlOiBzdHJpbmc7XG4gIHRhZ0xpc3RzOiBJQmxvZ0xpc3RDYXRlZ29yaWVPclRhZ1tdO1xuICBjb250ZW50OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJQmxvZ1ByZXZOZXh0IHtcbiAgaWQ6IHN0cmluZyB8IG51bGw7XG4gIG5hbWU6IHN0cmluZyB8IG51bGw7XG59XG5cbmludGVyZmFjZSBCbG9nRGV0YWlsUHJvcHMge1xuICBkZXRhaWw6IElCbG9nRGV0YWlsLFxuICBuZXh0OiBJQmxvZ1ByZXZOZXh0LFxuICBwcmV2OiBJQmxvZ1ByZXZOZXh0XG59XG5cbmNvbnN0IEJsb2dEZXRhaWw6IE5leHRQYWdlPEJsb2dEZXRhaWxQcm9wcywge30+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGV0YWlsLCBwcmV2LCBuZXh0IH0gPSBwcm9wc1xuICBjb25zdCBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMoe1xuICAgIFtgJHtQUk9KRUNUX05BTUV9LWJsb2ctZGV0YWlsYF06IHRydWVcbiAgfSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGVsZVRvVG9wKClcbiAgICByZW5kZXJJbWFnZSgpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IHJlbmRlckltYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IFptYWdlID0gcmVxdWlyZSgncmVhY3Qtem1hZ2UnKS5kZWZhdWx0XG4gICAgY29uc3QgaW1ncyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlYWN0LW5leHQtd2ViLWJsb2ctZGV0YWlsIGltZycpKVxuICAgIGNvbnN0IGxpc3RzID0gaW1ncy5tYXAoaXRlbSA9PiAoXG4gICAgICB7XG4gICAgICAgIHNyYzogaXRlbS5nZXRBdHRyaWJ1dGUoJ3NyYycpIHx8ICcnLFxuICAgICAgICBhbHQ6IFwi5Zu+54mH55qE5Y2g5L2N5paH5a2X77yM5L2c5Li65Zu+54mH55qE5qCH6aKYLCDor7flsL3ph4/kv53mjIHnroDnn61cIixcbiAgICAgICAgY2xhc3NOYW1lOiAndGVzdENsYXNzTmFtZSdcbiAgICAgIH1cbiAgICApKVxuICAgIGNvbnNvbGUubG9nKGxpc3RzKVxuICAgIGltZ3MuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHsgc3JjLCBhbHQgfSA9IGxpc3RzW2luZGV4XVxuICAgICAgY29uc3QgZWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICBlbGUuY2xhc3NOYW1lID0gJ2ltYWdlLXdyYXBwZXInXG4gICAgICBjb25zdCB3cmFwcGVyRWxlID0gaXRlbS5wYXJlbnROb2RlICYmIGl0ZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlLCBpdGVtKVxuICAgICAgaXRlbS5wYXJlbnROb2RlPy5yZW1vdmVDaGlsZChpdGVtKVxuICAgICAgUmVhY3RET00ucmVuZGVyKFxuICAgICAgICA8PlxuICAgICAgICAgIDxabWFnZSBzcmM9e3NyY31cbiAgICAgICAgICAgICAgYWx0PXthbHR9XG4gICAgICAgICAgICAgIHNldD17bGlzdHN9XG4gICAgICAgICAgICAgIGRlZmF1bHRQYWdlPXtpbmRleH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgIDwvWm1hZ2U+XG4gICAgICAgIDwvPixcbiAgICAgICAgd3JhcHBlckVsZSBhcyBFbGVtZW50XG4gICAgICApXG4gICAgfSlcbiAgfVxuICBcbiAgY29uc3QgZWxlVG9Ub3AgPSAoKSA9PiB7XG4gICAgY29uc3QgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R3LW5leHQtY29udGFpbmVyJylcbiAgICBpZiAoZWxlKSB7XG4gICAgICBlbGUuc2Nyb2xsVG9wID0gMFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgKFxuICAgICAgZGV0YWlsICYmIGRldGFpbC5pZCA/IChcbiAgICAgICAgPExheW91dCB0aXRsZT17ZGV0YWlsLm5hbWV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1N0cmluZ30+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtgJHtjbGFzc1N0cmluZ30tdGl0bGVgfT57ZGV0YWlsLm5hbWV9PC9oMT5cbiAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICAgICAgICAgIHNvdXJjZT17ZGV0YWlsLmNvbnRlbnR9XG4gICAgICAgICAgICAgIGVzY2FwZUh0bWw9e3RydWV9XG4gICAgICAgICAgICAgIHNraXBIdG1sPXt0cnVlfVxuICAgICAgICAgICAgICByZW5kZXJlcnM9e3tcbiAgICAgICAgICAgICAgICBjb2RlOiBDb2RlQmxvY2tcbiAgICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzU3RyaW5nfS1lbnRyeWB9PlxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJldiAmJiBwcmV2LmlkID8gKFxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nL2RldGFpbD9pZD0ke3ByZXYuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7Y2xhc3NTdHJpbmd9LWVudHJ5LXByZXZgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3ByZXYubmFtZSB8fCAnJ30+XG4gICAgICAgICAgICAgICAgICAgICAgeyBwcmV2Lm5hbWUgPyBg5LiK5LiA56+HIDogJHtwcmV2Lm5hbWV9YCA6ICcnIH1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5leHQgJiYgbmV4dC5pZCA/IChcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy9kZXRhaWw/aWQ9JHtuZXh0LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Ake2NsYXNzU3RyaW5nfS1lbnRyeS1uZXh0YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtuZXh0Lm5hbWUgfHwgJyd9PlxuICAgICAgICAgICAgICAgICAgICAgIHsgbmV4dC5uYW1lID8gYOS4i+S4gOevhyA6ICR7bmV4dC5uYW1lfWAgOiAnJyB9XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluayA+XG4gICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj7liqDovb3kuK0uLi48L2Rpdj5cbiAgICAgIClcbiAgICApXG4gIClcbn1cblxuQmxvZ0RldGFpbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XG4gIGNvbnN0IHsgaWQgfSAgPSBjdHgucXVlcnlcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBodHRwLmdldChgJHtBUlRJQ0xFX0RFVEFJTH0vJHtpZH1gKVxuICByZXR1cm4ge1xuICAgIGRldGFpbDogZGF0YS5yZXN1bHQgJiYgZGF0YS5yZXN1bHQuZGV0YWlsIHx8IHt9LFxuICAgIG5leHQ6IGRhdGEucmVzdWx0ICYmIGRhdGEucmVzdWx0Lm5leHQgfHwgbnVsbCxcbiAgICBwcmV2OiBkYXRhLnJlc3VsdCAmJiBkYXRhLnJlc3VsdC5wcmV2IHx8IG51bGxcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZSA9IChzdGF0ZTogSVN0b3JlKSA9PiAoeyBcbiAgY29udGFpbmVyRWxlOiBzdGF0ZS5iYXNlLmNvbnRhaW5lckVsZVxuIH0pXG5cbmNvbnN0IG1hcERpc3BhdGNoID0gTWFpbkFjdGlvblxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlLCBtYXBEaXNwYXRjaCkoQmxvZ0RldGFpbClcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUEyQkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQThCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUdBO0FBRUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==