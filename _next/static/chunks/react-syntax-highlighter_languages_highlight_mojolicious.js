(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_mojolicious"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/mojolicious.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/mojolicious.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    subLanguage: 'xml',
    contains: [
      {
        className: 'meta',
        begin: '^__(END|DATA)__$'
      },
    // mojolicious line
      {
        begin: "^\\s*%{1,2}={0,2}", end: '$',
        subLanguage: 'perl'
      },
    // mojolicious block
      {
        begin: "<%{1,2}={0,2}",
        end: "={0,1}%>",
        subLanguage: 'perl',
        excludeBegin: true,
        excludeEnd: true
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9tb2pvbGljaW91cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21vam9saWNpb3VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICByZXR1cm4ge1xuICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdeX18oRU5EfERBVEEpX18kJ1xuICAgICAgfSxcbiAgICAvLyBtb2pvbGljaW91cyBsaW5lXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBcIl5cXFxccyolezEsMn09ezAsMn1cIiwgZW5kOiAnJCcsXG4gICAgICAgIHN1Ykxhbmd1YWdlOiAncGVybCdcbiAgICAgIH0sXG4gICAgLy8gbW9qb2xpY2lvdXMgYmxvY2tcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IFwiPCV7MSwyfT17MCwyfVwiLFxuICAgICAgICBlbmQ6IFwiPXswLDF9JT5cIixcbiAgICAgICAgc3ViTGFuZ3VhZ2U6ICdwZXJsJyxcbiAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICB9XG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9