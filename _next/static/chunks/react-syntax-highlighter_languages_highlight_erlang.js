(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_erlang"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/erlang.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/erlang.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var BASIC_ATOM_RE = '[a-z\'][a-zA-Z0-9_\']*';
  var FUNCTION_NAME_RE = '(' + BASIC_ATOM_RE + ':' + BASIC_ATOM_RE + '|' + BASIC_ATOM_RE + ')';
  var ERLANG_RESERVED = {
    keyword:
      'after and andalso|10 band begin bnot bor bsl bzr bxor case catch cond div end fun if ' +
      'let not of orelse|10 query receive rem try when xor',
    literal:
      'false true'
  };

  var COMMENT = hljs.COMMENT('%', '$');
  var NUMBER = {
    className: 'number',
    begin: '\\b(\\d+#[a-fA-F0-9]+|\\d+(\\.\\d+)?([eE][-+]?\\d+)?)',
    relevance: 0
  };
  var NAMED_FUN = {
    begin: 'fun\\s+' + BASIC_ATOM_RE + '/\\d+'
  };
  var FUNCTION_CALL = {
    begin: FUNCTION_NAME_RE + '\\(', end: '\\)',
    returnBegin: true,
    relevance: 0,
    contains: [
      {
        begin: FUNCTION_NAME_RE, relevance: 0
      },
      {
        begin: '\\(', end: '\\)', endsWithParent: true,
        returnEnd: true,
        relevance: 0
        // "contains" defined later
      }
    ]
  };
  var TUPLE = {
    begin: '{', end: '}',
    relevance: 0
    // "contains" defined later
  };
  var VAR1 = {
    begin: '\\b_([A-Z][A-Za-z0-9_]*)?',
    relevance: 0
  };
  var VAR2 = {
    begin: '[A-Z][a-zA-Z0-9_]*',
    relevance: 0
  };
  var RECORD_ACCESS = {
    begin: '#' + hljs.UNDERSCORE_IDENT_RE,
    relevance: 0,
    returnBegin: true,
    contains: [
      {
        begin: '#' + hljs.UNDERSCORE_IDENT_RE,
        relevance: 0
      },
      {
        begin: '{', end: '}',
        relevance: 0
        // "contains" defined later
      }
    ]
  };

  var BLOCK_STATEMENTS = {
    beginKeywords: 'fun receive if try case', end: 'end',
    keywords: ERLANG_RESERVED
  };
  BLOCK_STATEMENTS.contains = [
    COMMENT,
    NAMED_FUN,
    hljs.inherit(hljs.APOS_STRING_MODE, {className: ''}),
    BLOCK_STATEMENTS,
    FUNCTION_CALL,
    hljs.QUOTE_STRING_MODE,
    NUMBER,
    TUPLE,
    VAR1, VAR2,
    RECORD_ACCESS
  ];

  var BASIC_MODES = [
    COMMENT,
    NAMED_FUN,
    BLOCK_STATEMENTS,
    FUNCTION_CALL,
    hljs.QUOTE_STRING_MODE,
    NUMBER,
    TUPLE,
    VAR1, VAR2,
    RECORD_ACCESS
  ];
  FUNCTION_CALL.contains[1].contains = BASIC_MODES;
  TUPLE.contains = BASIC_MODES;
  RECORD_ACCESS.contains[1].contains = BASIC_MODES;

  var PARAMS = {
    className: 'params',
    begin: '\\(', end: '\\)',
    contains: BASIC_MODES
  };
  return {
    aliases: ['erl'],
    keywords: ERLANG_RESERVED,
    illegal: '(</|\\*=|\\+=|-=|/\\*|\\*/|\\(\\*|\\*\\))',
    contains: [
      {
        className: 'function',
        begin: '^' + BASIC_ATOM_RE + '\\s*\\(', end: '->',
        returnBegin: true,
        illegal: '\\(|#|//|/\\*|\\\\|:|;',
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, {begin: BASIC_ATOM_RE})
        ],
        starts: {
          end: ';|\\.',
          keywords: ERLANG_RESERVED,
          contains: BASIC_MODES
        }
      },
      COMMENT,
      {
        begin: '^-', end: '\\.',
        relevance: 0,
        excludeEnd: true,
        returnBegin: true,
        lexemes: '-' + hljs.IDENT_RE,
        keywords:
          '-module -record -undef -export -ifdef -ifndef -author -copyright -doc -vsn ' +
          '-import -include -include_lib -compile -define -else -endif -file -behaviour ' +
          '-behavior -spec',
        contains: [PARAMS]
      },
      NUMBER,
      hljs.QUOTE_STRING_MODE,
      RECORD_ACCESS,
      VAR1, VAR2,
      TUPLE,
      {begin: /\.$/} // relevance booster
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9lcmxhbmcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9lcmxhbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBCQVNJQ19BVE9NX1JFID0gJ1thLXpcXCddW2EtekEtWjAtOV9cXCddKic7XG4gIHZhciBGVU5DVElPTl9OQU1FX1JFID0gJygnICsgQkFTSUNfQVRPTV9SRSArICc6JyArIEJBU0lDX0FUT01fUkUgKyAnfCcgKyBCQVNJQ19BVE9NX1JFICsgJyknO1xuICB2YXIgRVJMQU5HX1JFU0VSVkVEID0ge1xuICAgIGtleXdvcmQ6XG4gICAgICAnYWZ0ZXIgYW5kIGFuZGFsc298MTAgYmFuZCBiZWdpbiBibm90IGJvciBic2wgYnpyIGJ4b3IgY2FzZSBjYXRjaCBjb25kIGRpdiBlbmQgZnVuIGlmICcgK1xuICAgICAgJ2xldCBub3Qgb2Ygb3JlbHNlfDEwIHF1ZXJ5IHJlY2VpdmUgcmVtIHRyeSB3aGVuIHhvcicsXG4gICAgbGl0ZXJhbDpcbiAgICAgICdmYWxzZSB0cnVlJ1xuICB9O1xuXG4gIHZhciBDT01NRU5UID0gaGxqcy5DT01NRU5UKCclJywgJyQnKTtcbiAgdmFyIE5VTUJFUiA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGJlZ2luOiAnXFxcXGIoXFxcXGQrI1thLWZBLUYwLTldK3xcXFxcZCsoXFxcXC5cXFxcZCspPyhbZUVdWy0rXT9cXFxcZCspPyknLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICB2YXIgTkFNRURfRlVOID0ge1xuICAgIGJlZ2luOiAnZnVuXFxcXHMrJyArIEJBU0lDX0FUT01fUkUgKyAnL1xcXFxkKydcbiAgfTtcbiAgdmFyIEZVTkNUSU9OX0NBTEwgPSB7XG4gICAgYmVnaW46IEZVTkNUSU9OX05BTUVfUkUgKyAnXFxcXCgnLCBlbmQ6ICdcXFxcKScsXG4gICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBGVU5DVElPTl9OQU1FX1JFLCByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKScsIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICByZXR1cm5FbmQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAvLyBcImNvbnRhaW5zXCIgZGVmaW5lZCBsYXRlclxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgdmFyIFRVUExFID0ge1xuICAgIGJlZ2luOiAneycsIGVuZDogJ30nLFxuICAgIHJlbGV2YW5jZTogMFxuICAgIC8vIFwiY29udGFpbnNcIiBkZWZpbmVkIGxhdGVyXG4gIH07XG4gIHZhciBWQVIxID0ge1xuICAgIGJlZ2luOiAnXFxcXGJfKFtBLVpdW0EtWmEtejAtOV9dKik/JyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgdmFyIFZBUjIgPSB7XG4gICAgYmVnaW46ICdbQS1aXVthLXpBLVowLTlfXSonLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICB2YXIgUkVDT1JEX0FDQ0VTUyA9IHtcbiAgICBiZWdpbjogJyMnICsgaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogJyMnICsgaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAneycsIGVuZDogJ30nLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgLy8gXCJjb250YWluc1wiIGRlZmluZWQgbGF0ZXJcbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgdmFyIEJMT0NLX1NUQVRFTUVOVFMgPSB7XG4gICAgYmVnaW5LZXl3b3JkczogJ2Z1biByZWNlaXZlIGlmIHRyeSBjYXNlJywgZW5kOiAnZW5kJyxcbiAgICBrZXl3b3JkczogRVJMQU5HX1JFU0VSVkVEXG4gIH07XG4gIEJMT0NLX1NUQVRFTUVOVFMuY29udGFpbnMgPSBbXG4gICAgQ09NTUVOVCxcbiAgICBOQU1FRF9GVU4sXG4gICAgaGxqcy5pbmhlcml0KGhsanMuQVBPU19TVFJJTkdfTU9ERSwge2NsYXNzTmFtZTogJyd9KSxcbiAgICBCTE9DS19TVEFURU1FTlRTLFxuICAgIEZVTkNUSU9OX0NBTEwsXG4gICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICBOVU1CRVIsXG4gICAgVFVQTEUsXG4gICAgVkFSMSwgVkFSMixcbiAgICBSRUNPUkRfQUNDRVNTXG4gIF07XG5cbiAgdmFyIEJBU0lDX01PREVTID0gW1xuICAgIENPTU1FTlQsXG4gICAgTkFNRURfRlVOLFxuICAgIEJMT0NLX1NUQVRFTUVOVFMsXG4gICAgRlVOQ1RJT05fQ0FMTCxcbiAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgIE5VTUJFUixcbiAgICBUVVBMRSxcbiAgICBWQVIxLCBWQVIyLFxuICAgIFJFQ09SRF9BQ0NFU1NcbiAgXTtcbiAgRlVOQ1RJT05fQ0FMTC5jb250YWluc1sxXS5jb250YWlucyA9IEJBU0lDX01PREVTO1xuICBUVVBMRS5jb250YWlucyA9IEJBU0lDX01PREVTO1xuICBSRUNPUkRfQUNDRVNTLmNvbnRhaW5zWzFdLmNvbnRhaW5zID0gQkFTSUNfTU9ERVM7XG5cbiAgdmFyIFBBUkFNUyA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKScsXG4gICAgY29udGFpbnM6IEJBU0lDX01PREVTXG4gIH07XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydlcmwnXSxcbiAgICBrZXl3b3JkczogRVJMQU5HX1JFU0VSVkVELFxuICAgIGlsbGVnYWw6ICcoPC98XFxcXCo9fFxcXFwrPXwtPXwvXFxcXCp8XFxcXCovfFxcXFwoXFxcXCp8XFxcXCpcXFxcKSknLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW46ICdeJyArIEJBU0lDX0FUT01fUkUgKyAnXFxcXHMqXFxcXCgnLCBlbmQ6ICctPicsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXCh8I3wvL3wvXFxcXCp8XFxcXFxcXFx8Onw7JyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBQQVJBTVMsXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge2JlZ2luOiBCQVNJQ19BVE9NX1JFfSlcbiAgICAgICAgXSxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAnO3xcXFxcLicsXG4gICAgICAgICAga2V5d29yZHM6IEVSTEFOR19SRVNFUlZFRCxcbiAgICAgICAgICBjb250YWluczogQkFTSUNfTU9ERVNcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIENPTU1FTlQsXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXi0nLCBlbmQ6ICdcXFxcLicsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGxleGVtZXM6ICctJyArIGhsanMuSURFTlRfUkUsXG4gICAgICAgIGtleXdvcmRzOlxuICAgICAgICAgICctbW9kdWxlIC1yZWNvcmQgLXVuZGVmIC1leHBvcnQgLWlmZGVmIC1pZm5kZWYgLWF1dGhvciAtY29weXJpZ2h0IC1kb2MgLXZzbiAnICtcbiAgICAgICAgICAnLWltcG9ydCAtaW5jbHVkZSAtaW5jbHVkZV9saWIgLWNvbXBpbGUgLWRlZmluZSAtZWxzZSAtZW5kaWYgLWZpbGUgLWJlaGF2aW91ciAnICtcbiAgICAgICAgICAnLWJlaGF2aW9yIC1zcGVjJyxcbiAgICAgICAgY29udGFpbnM6IFtQQVJBTVNdXG4gICAgICB9LFxuICAgICAgTlVNQkVSLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIFJFQ09SRF9BQ0NFU1MsXG4gICAgICBWQVIxLCBWQVIyLFxuICAgICAgVFVQTEUsXG4gICAgICB7YmVnaW46IC9cXC4kL30gLy8gcmVsZXZhbmNlIGJvb3N0ZXJcbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==