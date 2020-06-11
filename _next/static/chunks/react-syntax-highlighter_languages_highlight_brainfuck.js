(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_brainfuck"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/brainfuck.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/brainfuck.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs){
  var LITERAL = {
    className: 'literal',
    begin: '[\\+\\-]',
    relevance: 0
  };
  return {
    aliases: ['bf'],
    contains: [
      hljs.COMMENT(
        '[^\\[\\]\\.,\\+\\-<> \r\n]',
        '[\\[\\]\\.,\\+\\-<> \r\n]',
        {
          returnEnd: true,
          relevance: 0
        }
      ),
      {
        className: 'title',
        begin: '[\\[\\]]',
        relevance: 0
      },
      {
        className: 'string',
        begin: '[\\.,]',
        relevance: 0
      },
      {
        // this mode works as the only relevance counter
        begin: /\+\+|\-\-/, returnBegin: true,
        contains: [LITERAL]
      },
      LITERAL
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9icmFpbmZ1Y2suanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9icmFpbmZ1Y2suanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKXtcbiAgdmFyIExJVEVSQUwgPSB7XG4gICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgYmVnaW46ICdbXFxcXCtcXFxcLV0nLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsnYmYnXSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAnW15cXFxcW1xcXFxdXFxcXC4sXFxcXCtcXFxcLTw+IFxcclxcbl0nLFxuICAgICAgICAnW1xcXFxbXFxcXF1cXFxcLixcXFxcK1xcXFwtPD4gXFxyXFxuXScsXG4gICAgICAgIHtcbiAgICAgICAgICByZXR1cm5FbmQ6IHRydWUsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICAgICAgYmVnaW46ICdbXFxcXFtcXFxcXV0nLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnW1xcXFwuLF0nLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIHRoaXMgbW9kZSB3b3JrcyBhcyB0aGUgb25seSByZWxldmFuY2UgY291bnRlclxuICAgICAgICBiZWdpbjogL1xcK1xcK3xcXC1cXC0vLCByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtMSVRFUkFMXVxuICAgICAgfSxcbiAgICAgIExJVEVSQUxcbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=