webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./module/blog.list/index.tsx":
/*!************************************!*\
  !*** ./module/blog.list/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _root_constance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @root/constance */ "./constance/index.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ripple_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ripple-button */ "./node_modules/ripple-button/dist/index.js");
/* harmony import */ var ripple_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ripple_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _list_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.less */ "./module/blog.list/list.less");
/* harmony import */ var _list_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_list_less__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/daiwei/pr/react-website-next/module/blog.list/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







var BlogList = function BlogList(_ref) {
  var list = _ref.list;
  var classString = classnames__WEBPACK_IMPORTED_MODULE_3___default()(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, "".concat(_root_constance__WEBPACK_IMPORTED_MODULE_2__["PROJECT_NAME"], "-comp-blog-list"), true));
  return __jsx("li", {
    className: classString,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(ripple_button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("a", {
    title: list.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/blog/detail?id=".concat(list.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("h2", {
    className: "".concat(classString, "-title"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, list.name)))));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogList);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2Jsb2cuanMuZWM1M2FmYWVjOTE3ZmFlMmI2ZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL21vZHVsZS9ibG9nLmxpc3QvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1xuICAvLyB1c2VFZmZlY3Rcbn0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQUk9KRUNUX05BTUUgfSBmcm9tICdAcm9vdC9jb25zdGFuY2UnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJpcHBsZSBmcm9tICdyaXBwbGUtYnV0dG9uJ1xuaW1wb3J0ICcuL2xpc3QubGVzcydcblxuZXhwb3J0IGludGVyZmFjZSBCbG9nTGlzdENhdGVnb3JpZU9yVGFnIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElCbG9nTGlzdCB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcmVhZENvdW50OiBzdHJpbmc7XG4gIGVkaXREYXRlOiBzdHJpbmc7XG4gIGNyZWF0ZURhdGU6IHN0cmluZztcbiAgY2F0ZWdvcmllOiBCbG9nTGlzdENhdGVnb3JpZU9yVGFnW107XG4gIHRhZ0xpc3RzOiBCbG9nTGlzdENhdGVnb3JpZU9yVGFnW107XG4gIGNvbnRlbnRMaXRlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBCbG9nTGlzdFByb3BzIHtcbiAgbGlzdDogSUJsb2dMaXN0O1xufVxuXG5jb25zdCBCbG9nTGlzdDogUmVhY3QuRkM8QmxvZ0xpc3RQcm9wcz4gPSAoeyBsaXN0IH0pID0+IHtcbiAgY29uc3QgY2xhc3NTdHJpbmcgPSBjbGFzc05hbWVzKHtcbiAgICBbYCR7UFJPSkVDVF9OQU1FfS1jb21wLWJsb2ctbGlzdGBdOiB0cnVlXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtjbGFzc1N0cmluZ30+XG4gICAgICA8UmlwcGxlPlxuICAgICAgICAgIDxhIHRpdGxlPXtsaXN0Lm5hbWV9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nL2RldGFpbD9pZD0ke2xpc3QuaWR9YH0+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgJHtjbGFzc1N0cmluZ30tdGl0bGVgfT57bGlzdC5uYW1lfTwvaDI+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9hPlxuICAgICAgPC9SaXBwbGU+XG4gICAgPC9saT5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nTGlzdFxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcUJBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==