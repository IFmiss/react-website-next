(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_tap"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/tap.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/tap.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    case_insensitive: true,
    contains: [
      hljs.HASH_COMMENT_MODE,
      // version of format and total amount of testcases
      {
        className: 'meta',
        variants: [
          { begin: '^TAP version (\\d+)$' },
          { begin: '^1\\.\\.(\\d+)$' }
        ],
      },
      // YAML block
      {
        begin: '(\s+)?---$', end: '\\.\\.\\.$',
        subLanguage: 'yaml',
        relevance: 0
      },
	  // testcase number
      {
        className: 'number',
        begin: ' (\\d+) '
      },
	  // testcase status and description
      {
        className: 'symbol',
        variants: [
          { begin: '^ok' },
          { begin: '^not ok' }
        ],
      },
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF90YXAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy90YXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIC8vIHZlcnNpb24gb2YgZm9ybWF0IGFuZCB0b3RhbCBhbW91bnQgb2YgdGVzdGNhc2VzXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHsgYmVnaW46ICdeVEFQIHZlcnNpb24gKFxcXFxkKykkJyB9LFxuICAgICAgICAgIHsgYmVnaW46ICdeMVxcXFwuXFxcXC4oXFxcXGQrKSQnIH1cbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICAvLyBZQU1MIGJsb2NrXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnKFxccyspPy0tLSQnLCBlbmQ6ICdcXFxcLlxcXFwuXFxcXC4kJyxcbiAgICAgICAgc3ViTGFuZ3VhZ2U6ICd5YW1sJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuXHQgIC8vIHRlc3RjYXNlIG51bWJlclxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogJyAoXFxcXGQrKSAnXG4gICAgICB9LFxuXHQgIC8vIHRlc3RjYXNlIHN0YXR1cyBhbmQgZGVzY3JpcHRpb25cbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7IGJlZ2luOiAnXm9rJyB9LFxuICAgICAgICAgIHsgYmVnaW46ICdebm90IG9rJyB9XG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIF1cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=