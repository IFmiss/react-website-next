(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_step21"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/step21.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/step21.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var STEP21_IDENT_RE = '[A-Z_][A-Z0-9_.]*';
  var STEP21_KEYWORDS = {
    keyword: 'HEADER ENDSEC DATA'
  };
  var STEP21_START = {
    className: 'meta',
    begin: 'ISO-10303-21;',
    relevance: 10
  };
  var STEP21_CLOSE = {
    className: 'meta',
    begin: 'END-ISO-10303-21;',
    relevance: 10
  };

  return {
    aliases: ['p21', 'step', 'stp'],
    case_insensitive: true, // STEP 21 is case insensitive in theory, in practice all non-comments are capitalized.
    lexemes: STEP21_IDENT_RE,
    keywords: STEP21_KEYWORDS,
    contains: [
      STEP21_START,
      STEP21_CLOSE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.COMMENT('/\\*\\*!', '\\*/'),
      hljs.C_NUMBER_MODE,
      hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
      {
        className: 'string',
        begin: "'", end: "'"
      },
      {
        className: 'symbol',
        variants: [
          {
            begin: '#', end: '\\d+',
            illegal: '\\W'
          }
        ]
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9zdGVwMjEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9zdGVwMjEuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBTVEVQMjFfSURFTlRfUkUgPSAnW0EtWl9dW0EtWjAtOV8uXSonO1xuICB2YXIgU1RFUDIxX0tFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6ICdIRUFERVIgRU5EU0VDIERBVEEnXG4gIH07XG4gIHZhciBTVEVQMjFfU1RBUlQgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICdJU08tMTAzMDMtMjE7JyxcbiAgICByZWxldmFuY2U6IDEwXG4gIH07XG4gIHZhciBTVEVQMjFfQ0xPU0UgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICdFTkQtSVNPLTEwMzAzLTIxOycsXG4gICAgcmVsZXZhbmNlOiAxMFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydwMjEnLCAnc3RlcCcsICdzdHAnXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLCAvLyBTVEVQIDIxIGlzIGNhc2UgaW5zZW5zaXRpdmUgaW4gdGhlb3J5LCBpbiBwcmFjdGljZSBhbGwgbm9uLWNvbW1lbnRzIGFyZSBjYXBpdGFsaXplZC5cbiAgICBsZXhlbWVzOiBTVEVQMjFfSURFTlRfUkUsXG4gICAga2V5d29yZHM6IFNURVAyMV9LRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgU1RFUDIxX1NUQVJULFxuICAgICAgU1RFUDIxX0NMT1NFLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ09NTUVOVCgnL1xcXFwqXFxcXCohJywgJ1xcXFwqLycpLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuQVBPU19TVFJJTkdfTU9ERSwge2lsbGVnYWw6IG51bGx9KSxcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7aWxsZWdhbDogbnVsbH0pLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogXCInXCIsIGVuZDogXCInXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICcjJywgZW5kOiAnXFxcXGQrJyxcbiAgICAgICAgICAgIGlsbGVnYWw6ICdcXFxcVydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==