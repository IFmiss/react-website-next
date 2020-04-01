(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_erlangRepl"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/erlang-repl.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/erlang-repl.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    keywords: {
      built_in:
        'spawn spawn_link self',
      keyword:
        'after and andalso|10 band begin bnot bor bsl bsr bxor case catch cond div end fun if ' +
        'let not of or orelse|10 query receive rem try when xor'
    },
    contains: [
      {
        className: 'meta', begin: '^[0-9]+> ',
        relevance: 10
      },
      hljs.COMMENT('%', '$'),
      {
        className: 'number',
        begin: '\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)',
        relevance: 0
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        begin: '\\?(::)?([A-Z]\\w*(::)?)+'
      },
      {
        begin: '->'
      },
      {
        begin: 'ok'
      },
      {
        begin: '!'
      },
      {
        begin: '(\\b[a-z\'][a-zA-Z0-9_\']*:[a-z\'][a-zA-Z0-9_\']*)|(\\b[a-z\'][a-zA-Z0-9_\']*)',
        relevance: 0
      },
      {
        begin: '[A-Z][a-zA-Z0-9_\']*',
        relevance: 0
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9lcmxhbmdSZXBsLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZXJsYW5nLXJlcGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHJldHVybiB7XG4gICAga2V5d29yZHM6IHtcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAnc3Bhd24gc3Bhd25fbGluayBzZWxmJyxcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdhZnRlciBhbmQgYW5kYWxzb3wxMCBiYW5kIGJlZ2luIGJub3QgYm9yIGJzbCBic3IgYnhvciBjYXNlIGNhdGNoIGNvbmQgZGl2IGVuZCBmdW4gaWYgJyArXG4gICAgICAgICdsZXQgbm90IG9mIG9yIG9yZWxzZXwxMCBxdWVyeSByZWNlaXZlIHJlbSB0cnkgd2hlbiB4b3InXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJywgYmVnaW46ICdeWzAtOV0rPiAnLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAgaGxqcy5DT01NRU5UKCclJywgJyQnKSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYihcXFxcZCsjW2EtZkEtRjAtOV0rfFxcXFxkKyhcXFxcLlxcXFxkKyk/KFtlRV1bLStdP1xcXFxkKyk/KScsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFxcXD8oOjopPyhbQS1aXVxcXFx3Kig6Oik/KSsnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJy0+J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdvaydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnISdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnKFxcXFxiW2EtelxcJ11bYS16QS1aMC05X1xcJ10qOlthLXpcXCddW2EtekEtWjAtOV9cXCddKil8KFxcXFxiW2EtelxcJ11bYS16QS1aMC05X1xcJ10qKScsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdbQS1aXVthLXpBLVowLTlfXFwnXSonLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=