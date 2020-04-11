(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_fix"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/fix.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/fix.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    contains: [
    {
      begin: /[^\u2401\u0001]+/,
      end: /[\u2401\u0001]/,
      excludeEnd: true,
      returnBegin: true,
      returnEnd: false,
      contains: [
      {
        begin: /([^\u2401\u0001=]+)/,
        end: /=([^\u2401\u0001=]+)/,
        returnEnd: true,
        returnBegin: false,
        className: 'attr'
      },
      {
        begin: /=/,
        end: /([\u2401\u0001])/,
        excludeEnd: true,
        excludeBegin: true,
        className: 'string'
      }]
    }],
    case_insensitive: true
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9maXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9maXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgY29udGFpbnM6IFtcbiAgICB7XG4gICAgICBiZWdpbjogL1teXFx1MjQwMVxcdTAwMDFdKy8sXG4gICAgICBlbmQ6IC9bXFx1MjQwMVxcdTAwMDFdLyxcbiAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgIHJldHVybkVuZDogZmFsc2UsXG4gICAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogLyhbXlxcdTI0MDFcXHUwMDAxPV0rKS8sXG4gICAgICAgIGVuZDogLz0oW15cXHUyNDAxXFx1MDAwMT1dKykvLFxuICAgICAgICByZXR1cm5FbmQ6IHRydWUsXG4gICAgICAgIHJldHVybkJlZ2luOiBmYWxzZSxcbiAgICAgICAgY2xhc3NOYW1lOiAnYXR0cidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvPS8sXG4gICAgICAgIGVuZDogLyhbXFx1MjQwMVxcdTAwMDFdKS8sXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJ1xuICAgICAgfV1cbiAgICB9XSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==