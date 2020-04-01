(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_awk"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/awk.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/awk.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var VARIABLE = {
    className: 'variable',
    variants: [
      {begin: /\$[\w\d#@][\w\d_]*/},
      {begin: /\$\{(.*?)}/}
    ]
  };
  var KEYWORDS = 'BEGIN END if else while do for in break continue delete next nextfile function func exit|10';
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /(u|b)?r?'''/, end: /'''/,
        relevance: 10
      },
      {
        begin: /(u|b)?r?"""/, end: /"""/,
        relevance: 10
      },
      {
        begin: /(u|r|ur)'/, end: /'/,
        relevance: 10
      },
      {
        begin: /(u|r|ur)"/, end: /"/,
        relevance: 10
      },
      {
        begin: /(b|br)'/, end: /'/
      },
      {
        begin: /(b|br)"/, end: /"/
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ]
  };
  return {
	 keywords: {
	   keyword: KEYWORDS
    },
    contains: [
      VARIABLE,
      STRING,
      hljs.REGEXP_MODE,
      hljs.HASH_COMMENT_MODE,
      hljs.NUMBER_MODE
    ]
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9hd2suanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9hd2suanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBWQVJJQUJMRSA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtiZWdpbjogL1xcJFtcXHdcXGQjQF1bXFx3XFxkX10qL30sXG4gICAgICB7YmVnaW46IC9cXCRcXHsoLio/KX0vfVxuICAgIF1cbiAgfTtcbiAgdmFyIEtFWVdPUkRTID0gJ0JFR0lOIEVORCBpZiBlbHNlIHdoaWxlIGRvIGZvciBpbiBicmVhayBjb250aW51ZSBkZWxldGUgbmV4dCBuZXh0ZmlsZSBmdW5jdGlvbiBmdW5jIGV4aXR8MTAnO1xuICB2YXIgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvKHV8Yik/cj8nJycvLCBlbmQ6IC8nJycvLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogLyh1fGIpP3I/XCJcIlwiLywgZW5kOiAvXCJcIlwiLyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8odXxyfHVyKScvLCBlbmQ6IC8nLyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8odXxyfHVyKVwiLywgZW5kOiAvXCIvLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogLyhifGJyKScvLCBlbmQ6IC8nL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8oYnxicilcIi8sIGVuZDogL1wiL1xuICAgICAgfSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREVcbiAgICBdXG4gIH07XG4gIHJldHVybiB7XG5cdCBrZXl3b3Jkczoge1xuXHQgICBrZXl3b3JkOiBLRVlXT1JEU1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIFZBUklBQkxFLFxuICAgICAgU1RSSU5HLFxuICAgICAgaGxqcy5SRUdFWFBfTU9ERSxcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICBobGpzLk5VTUJFUl9NT0RFXG4gICAgXVxuICB9XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==