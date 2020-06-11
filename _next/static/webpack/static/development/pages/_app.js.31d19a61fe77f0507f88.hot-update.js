webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @style/index.less */ "./style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _root_components_Nav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @root/components/Nav */ "./components/Nav/index.tsx");
/* harmony import */ var _root_components_CopyRight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @root/components/CopyRight */ "./components/CopyRight/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @store/index */ "./store/index.ts");
/* harmony import */ var _root_utils_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @root/utils/utils */ "./utils/utils.ts");
/* harmony import */ var _root_use_useGrayPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @root/use/useGrayPage */ "./use/useGrayPage.tsx");








var _jsxFileName = "/Users/daiwei/Sf/react-website-next/pages/_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;








 // import SiderWarp from '@root/components/SiderWarp'
// import Music from '@components/Music'



var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2, _classNames;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "classWrapperString", classnames__WEBPACK_IMPORTED_MODULE_10___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_classNames, "react-next-wrapper", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_classNames, "theme-default", true), _classNames)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "showFn", function () {
      Object(_root_utils_utils__WEBPACK_IMPORTED_MODULE_16__["addClass"])(document.getElementById('dw-next-container'), 'perspective');
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "hideFn", function () {
      Object(_root_utils_utils__WEBPACK_IMPORTED_MODULE_16__["removeClass"])(document.getElementById('dw-next-container'), 'perspective');
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      Object(_root_use_useGrayPage__WEBPACK_IMPORTED_MODULE_17__["default"])();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_14__["Provider"], {
        store: _store_index__WEBPACK_IMPORTED_MODULE_15__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("script", {
        dangerouslySetInnerHTML: {
          __html: "if ('serviceWorker' in navigator) {\n                window.addEventListener('load', function() {\n                  navigator.serviceWorker.register('/sw.js').then(function(registration) {\n                    // Registration was successful\n                    console.log('ServiceWorker registration successful with scope: ', registration.scope);\n                  }, function(err) {\n                    // registration failed :(\n                    console.log('ServiceWorker registration failed: ', err);\n                  });\n                });\n              }"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), __jsx("div", {
        className: "".concat(this.classWrapperString),
        id: "dw-next-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, __jsx("div", {
        className: "react-next-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, __jsx("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, __jsx(_root_components_Nav__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      })), __jsx("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }))), __jsx(_root_components_CopyRight__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMuMzFkMTlhNjFmZTc3ZjA1MDdmODguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0ICAnQHN0eWxlL2luZGV4Lmxlc3MnXG5pbXBvcnQgTmF2IGZyb20gJ0Byb290L2NvbXBvbmVudHMvTmF2J1xuaW1wb3J0IENvcHlSaWdodCBmcm9tICdAcm9vdC9jb21wb25lbnRzL0NvcHlSaWdodCdcblxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCdcbmltcG9ydCBzdG9yZSBmcm9tICdAc3RvcmUvaW5kZXgnXG5pbXBvcnQgeyBhZGRDbGFzcywgcmVtb3ZlQ2xhc3MgfSBmcm9tICdAcm9vdC91dGlscy91dGlscydcbi8vIGltcG9ydCBTaWRlcldhcnAgZnJvbSAnQHJvb3QvY29tcG9uZW50cy9TaWRlcldhcnAnXG4vLyBpbXBvcnQgTXVzaWMgZnJvbSAnQGNvbXBvbmVudHMvTXVzaWMnXG5pbXBvcnQgdXNlR3JheVBhZ2UgZnJvbSAnQHJvb3QvdXNlL3VzZUdyYXlQYWdlJ1xuXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIHB1YmxpYyBjbGFzc1dyYXBwZXJTdHJpbmcgPSBjbGFzc05hbWVzKHtcbiAgICBbYHJlYWN0LW5leHQtd3JhcHBlcmBdOiB0cnVlLFxuICAgIFtgdGhlbWUtZGVmYXVsdGBdOiB0cnVlXG4gIH0pXG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdXNlR3JheVBhZ2UoKVxuICB9XG5cbiAgcHVibGljIHNob3dGbiA9ICgpID0+IHtcbiAgICBhZGRDbGFzcyhkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHctbmV4dC1jb250YWluZXInKSBhcyBIVE1MRWxlbWVudCwgJ3BlcnNwZWN0aXZlJylcbiAgfVxuXG4gIHB1YmxpYyBoaWRlRm4gPSAoKSA9PiB7XG4gICAgcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R3LW5leHQtY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQsICdwZXJzcGVjdGl2ZScpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9ID0gdGhpcy5wcm9wc1xuICAgIHJldHVybiAoXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6XG4gICAgICAgICAgICAgIGBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL3N3LmpzJykudGhlbihmdW5jdGlvbihyZWdpc3RyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVnaXN0cmF0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVnaXN0cmF0aW9uIGZhaWxlZCA6KFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgey8qIDxTaWRlcldhcnAgc2hvd0ZuPXt0aGlzLnNob3dGbn1cbiAgICAgICAgICAgICAgICAgIGhpZGVGbj17dGhpcy5oaWRlRm59XG4gICAgICAgICAgICAgICAgICB0eXBlPSdmaXhlZCc+XG4gICAgICAgICAgPE11c2ljPjwvTXVzaWM+XG4gICAgICAgIDwvU2lkZXJXYXJwPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3RoaXMuY2xhc3NXcmFwcGVyU3RyaW5nfWB9IGlkPSdkdy1uZXh0LWNvbnRhaW5lcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlYWN0LW5leHQtY29udGVudCc+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICA8TmF2Lz5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxDb3B5UmlnaHQvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFYQTtBQUNBO0FBQ0E7OztBQVVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTs7OztBQXhEQTtBQUNBO0FBMERBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=