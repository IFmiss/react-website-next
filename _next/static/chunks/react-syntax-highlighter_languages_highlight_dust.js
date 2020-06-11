(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_dust"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dust.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dust.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var EXPRESSION_KEYWORDS = 'if eq ne lt lte gt gte select default math sep';
  return {
    aliases: ['dst'],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [
      {
        className: 'template-tag',
        begin: /\{[#\/]/, end: /\}/, illegal: /;/,
        contains: [
          {
            className: 'name',
            begin: /[a-zA-Z\.-]+/,
            starts: {
              endsWithParent: true, relevance: 0,
              contains: [
                hljs.QUOTE_STRING_MODE
              ]
            }
          }
        ]
      },
      {
        className: 'template-variable',
        begin: /\{/, end: /\}/, illegal: /;/,
        keywords: EXPRESSION_KEYWORDS
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9kdXN0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZHVzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIEVYUFJFU1NJT05fS0VZV09SRFMgPSAnaWYgZXEgbmUgbHQgbHRlIGd0IGd0ZSBzZWxlY3QgZGVmYXVsdCBtYXRoIHNlcCc7XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydkc3QnXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIHN1Ykxhbmd1YWdlOiAneG1sJyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0ZW1wbGF0ZS10YWcnLFxuICAgICAgICBiZWdpbjogL1xce1sjXFwvXS8sIGVuZDogL1xcfS8sIGlsbGVnYWw6IC87LyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIGJlZ2luOiAvW2EtekEtWlxcLi1dKy8sXG4gICAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RlbXBsYXRlLXZhcmlhYmxlJyxcbiAgICAgICAgYmVnaW46IC9cXHsvLCBlbmQ6IC9cXH0vLCBpbGxlZ2FsOiAvOy8sXG4gICAgICAgIGtleXdvcmRzOiBFWFBSRVNTSU9OX0tFWVdPUkRTXG4gICAgICB9XG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=