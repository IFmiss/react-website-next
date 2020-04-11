(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_r"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/r.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/r.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var IDENT_RE = '([a-zA-Z]|\\.[a-zA-Z.])[a-zA-Z0-9._]*';

  return {
    contains: [
      hljs.HASH_COMMENT_MODE,
      {
        begin: IDENT_RE,
        lexemes: IDENT_RE,
        keywords: {
          keyword:
            'function if in break next repeat else for return switch while try tryCatch ' +
            'stop warning require library attach detach source setMethod setGeneric ' +
            'setGroupGeneric setClass ...',
          literal:
            'NULL NA TRUE FALSE T F Inf NaN NA_integer_|10 NA_real_|10 NA_character_|10 ' +
            'NA_complex_|10'
        },
        relevance: 0
      },
      {
        // hex value
        className: 'number',
        begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
        relevance: 0
      },
      {
        // explicit integer
        className: 'number',
        begin: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
        relevance: 0
      },
      {
        // number with trailing decimal
        className: 'number',
        begin: "\\d+\\.(?!\\d)(?:i\\b)?",
        relevance: 0
      },
      {
        // number
        className: 'number',
        begin: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
        relevance: 0
      },
      {
        // number with leading decimal
        className: 'number',
        begin: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
        relevance: 0
      },

      {
        // escaped identifier
        begin: '`',
        end: '`',
        relevance: 0
      },

      {
        className: 'string',
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
          {begin: '"', end: '"'},
          {begin: "'", end: "'"}
        ]
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9yLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIElERU5UX1JFID0gJyhbYS16QS1aXXxcXFxcLlthLXpBLVouXSlbYS16QS1aMC05Ll9dKic7XG5cbiAgcmV0dXJuIHtcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IElERU5UX1JFLFxuICAgICAgICBsZXhlbWVzOiBJREVOVF9SRSxcbiAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICBrZXl3b3JkOlxuICAgICAgICAgICAgJ2Z1bmN0aW9uIGlmIGluIGJyZWFrIG5leHQgcmVwZWF0IGVsc2UgZm9yIHJldHVybiBzd2l0Y2ggd2hpbGUgdHJ5IHRyeUNhdGNoICcgK1xuICAgICAgICAgICAgJ3N0b3Agd2FybmluZyByZXF1aXJlIGxpYnJhcnkgYXR0YWNoIGRldGFjaCBzb3VyY2Ugc2V0TWV0aG9kIHNldEdlbmVyaWMgJyArXG4gICAgICAgICAgICAnc2V0R3JvdXBHZW5lcmljIHNldENsYXNzIC4uLicsXG4gICAgICAgICAgbGl0ZXJhbDpcbiAgICAgICAgICAgICdOVUxMIE5BIFRSVUUgRkFMU0UgVCBGIEluZiBOYU4gTkFfaW50ZWdlcl98MTAgTkFfcmVhbF98MTAgTkFfY2hhcmFjdGVyX3wxMCAnICtcbiAgICAgICAgICAgICdOQV9jb21wbGV4X3wxMCdcbiAgICAgICAgfSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBoZXggdmFsdWVcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46IFwiMFt4WF1bMC05YS1mQS1GXStbTGldP1xcXFxiXCIsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gZXhwbGljaXQgaW50ZWdlclxuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogXCJcXFxcZCsoPzpbZUVdWytcXFxcLV0/XFxcXGQqKT9MXFxcXGJcIixcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBudW1iZXIgd2l0aCB0cmFpbGluZyBkZWNpbWFsXG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiBcIlxcXFxkK1xcXFwuKD8hXFxcXGQpKD86aVxcXFxiKT9cIixcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBudW1iZXJcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46IFwiXFxcXGQrKD86XFxcXC5cXFxcZCopPyg/OltlRV1bK1xcXFwtXT9cXFxcZCopP2k/XFxcXGJcIixcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBudW1iZXIgd2l0aCBsZWFkaW5nIGRlY2ltYWxcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46IFwiXFxcXC5cXFxcZCsoPzpbZUVdWytcXFxcLV0/XFxcXGQqKT9pP1xcXFxiXCIsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICAvLyBlc2NhcGVkIGlkZW50aWZpZXJcbiAgICAgICAgYmVnaW46ICdgJyxcbiAgICAgICAgZW5kOiAnYCcsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV0sXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge2JlZ2luOiAnXCInLCBlbmQ6ICdcIid9LFxuICAgICAgICAgIHtiZWdpbjogXCInXCIsIGVuZDogXCInXCJ9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=