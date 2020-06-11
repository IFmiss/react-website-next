(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_profile"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/profile.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/profile.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    contains: [
      hljs.C_NUMBER_MODE,
      {
        begin: '[a-zA-Z_][\\da-zA-Z_]+\\.[\\da-zA-Z_]{1,3}', end: ':',
        excludeEnd: true
      },
      {
        begin: '(ncalls|tottime|cumtime)', end: '$',
        keywords: 'ncalls tottime|10 cumtime|10 filename',
        relevance: 10
      },
      {
        begin: 'function calls', end: '$',
        contains: [hljs.C_NUMBER_MODE],
        relevance: 10
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'string',
        begin: '\\(', end: '\\)$',
        excludeBegin: true, excludeEnd: true,
        relevance: 0
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9wcm9maWxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcHJvZmlsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1thLXpBLVpfXVtcXFxcZGEtekEtWl9dK1xcXFwuW1xcXFxkYS16QS1aX117MSwzfScsIGVuZDogJzonLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJyhuY2FsbHN8dG90dGltZXxjdW10aW1lKScsIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3JkczogJ25jYWxscyB0b3R0aW1lfDEwIGN1bXRpbWV8MTAgZmlsZW5hbWUnLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ2Z1bmN0aW9uIGNhbGxzJywgZW5kOiAnJCcsXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5DX05VTUJFUl9NT0RFXSxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKSQnLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF1cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=