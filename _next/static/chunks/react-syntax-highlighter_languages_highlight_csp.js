(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_csp"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/csp.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/csp.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    case_insensitive: false,
    lexemes: '[a-zA-Z][a-zA-Z0-9_-]*',
    keywords: {
      keyword: 'base-uri child-src connect-src default-src font-src form-action' +
        ' frame-ancestors frame-src img-src media-src object-src plugin-types' +
        ' report-uri sandbox script-src style-src', 
    },
    contains: [
    {
      className: 'string',
      begin: "'", end: "'"
    },
    {
      className: 'attribute',
      begin: '^Content', end: ':', excludeEnd: true,
    },
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9jc3AuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jc3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogZmFsc2UsXG4gICAgbGV4ZW1lczogJ1thLXpBLVpdW2EtekEtWjAtOV8tXSonLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOiAnYmFzZS11cmkgY2hpbGQtc3JjIGNvbm5lY3Qtc3JjIGRlZmF1bHQtc3JjIGZvbnQtc3JjIGZvcm0tYWN0aW9uJyArXG4gICAgICAgICcgZnJhbWUtYW5jZXN0b3JzIGZyYW1lLXNyYyBpbWctc3JjIG1lZGlhLXNyYyBvYmplY3Qtc3JjIHBsdWdpbi10eXBlcycgK1xuICAgICAgICAnIHJlcG9ydC11cmkgc2FuZGJveCBzY3JpcHQtc3JjIHN0eWxlLXNyYycsIFxuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgYmVnaW46IFwiJ1wiLCBlbmQ6IFwiJ1wiXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgICAgYmVnaW46ICdeQ29udGVudCcsIGVuZDogJzonLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgIH0sXG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9