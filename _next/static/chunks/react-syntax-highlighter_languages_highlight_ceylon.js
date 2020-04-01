(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_ceylon"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ceylon.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ceylon.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  // 2.3. Identifiers and keywords
  var KEYWORDS =
    'assembly module package import alias class interface object given value ' +
    'assign void function new of extends satisfies abstracts in out return ' +
    'break continue throw assert dynamic if else switch case for while try ' +
    'catch finally then let this outer super is exists nonempty';
  // 7.4.1 Declaration Modifiers
  var DECLARATION_MODIFIERS =
    'shared abstract formal default actual variable late native deprecated' +
    'final sealed annotation suppressWarnings small';
  // 7.4.2 Documentation
  var DOCUMENTATION =
    'doc by license see throws tagged';
  var SUBST = {
    className: 'subst', excludeBegin: true, excludeEnd: true,
    begin: /``/, end: /``/,
    keywords: KEYWORDS,
    relevance: 10
  };
  var EXPRESSIONS = [
    {
      // verbatim string
      className: 'string',
      begin: '"""',
      end: '"""',
      relevance: 10
    },
    {
      // string literal or template
      className: 'string',
      begin: '"', end: '"',
      contains: [SUBST]
    },
    {
      // character literal
      className: 'string',
      begin: "'",
      end: "'"
    },
    {
      // numeric literal
      className: 'number',
      begin: '#[0-9a-fA-F_]+|\\$[01_]+|[0-9_]+(?:\\.[0-9_](?:[eE][+-]?\\d+)?)?[kMGTPmunpf]?',
      relevance: 0
    }
  ];
  SUBST.contains = EXPRESSIONS;

  return {
    keywords: {
      keyword: KEYWORDS + ' ' + DECLARATION_MODIFIERS,
      meta: DOCUMENTATION
    },
    illegal: '\\$[^01]|#[^0-9a-fA-F]',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.COMMENT('/\\*', '\\*/', {contains: ['self']}),
      {
        // compiler annotation
        className: 'meta',
        begin: '@[a-z]\\w*(?:\\:\"[^\"]*\")?'
      }
    ].concat(EXPRESSIONS)
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9jZXlsb24uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jZXlsb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIC8vIDIuMy4gSWRlbnRpZmllcnMgYW5kIGtleXdvcmRzXG4gIHZhciBLRVlXT1JEUyA9XG4gICAgJ2Fzc2VtYmx5IG1vZHVsZSBwYWNrYWdlIGltcG9ydCBhbGlhcyBjbGFzcyBpbnRlcmZhY2Ugb2JqZWN0IGdpdmVuIHZhbHVlICcgK1xuICAgICdhc3NpZ24gdm9pZCBmdW5jdGlvbiBuZXcgb2YgZXh0ZW5kcyBzYXRpc2ZpZXMgYWJzdHJhY3RzIGluIG91dCByZXR1cm4gJyArXG4gICAgJ2JyZWFrIGNvbnRpbnVlIHRocm93IGFzc2VydCBkeW5hbWljIGlmIGVsc2Ugc3dpdGNoIGNhc2UgZm9yIHdoaWxlIHRyeSAnICtcbiAgICAnY2F0Y2ggZmluYWxseSB0aGVuIGxldCB0aGlzIG91dGVyIHN1cGVyIGlzIGV4aXN0cyBub25lbXB0eSc7XG4gIC8vIDcuNC4xIERlY2xhcmF0aW9uIE1vZGlmaWVyc1xuICB2YXIgREVDTEFSQVRJT05fTU9ESUZJRVJTID1cbiAgICAnc2hhcmVkIGFic3RyYWN0IGZvcm1hbCBkZWZhdWx0IGFjdHVhbCB2YXJpYWJsZSBsYXRlIG5hdGl2ZSBkZXByZWNhdGVkJyArXG4gICAgJ2ZpbmFsIHNlYWxlZCBhbm5vdGF0aW9uIHN1cHByZXNzV2FybmluZ3Mgc21hbGwnO1xuICAvLyA3LjQuMiBEb2N1bWVudGF0aW9uXG4gIHZhciBET0NVTUVOVEFUSU9OID1cbiAgICAnZG9jIGJ5IGxpY2Vuc2Ugc2VlIHRocm93cyB0YWdnZWQnO1xuICB2YXIgU1VCU1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLCBleGNsdWRlQmVnaW46IHRydWUsIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgYmVnaW46IC9gYC8sIGVuZDogL2BgLyxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgcmVsZXZhbmNlOiAxMFxuICB9O1xuICB2YXIgRVhQUkVTU0lPTlMgPSBbXG4gICAge1xuICAgICAgLy8gdmVyYmF0aW0gc3RyaW5nXG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgYmVnaW46ICdcIlwiXCInLFxuICAgICAgZW5kOiAnXCJcIlwiJyxcbiAgICAgIHJlbGV2YW5jZTogMTBcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIHN0cmluZyBsaXRlcmFsIG9yIHRlbXBsYXRlXG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgYmVnaW46ICdcIicsIGVuZDogJ1wiJyxcbiAgICAgIGNvbnRhaW5zOiBbU1VCU1RdXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyBjaGFyYWN0ZXIgbGl0ZXJhbFxuICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgIGJlZ2luOiBcIidcIixcbiAgICAgIGVuZDogXCInXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIG51bWVyaWMgbGl0ZXJhbFxuICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgIGJlZ2luOiAnI1swLTlhLWZBLUZfXSt8XFxcXCRbMDFfXSt8WzAtOV9dKyg/OlxcXFwuWzAtOV9dKD86W2VFXVsrLV0/XFxcXGQrKT8pP1trTUdUUG11bnBmXT8nLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfVxuICBdO1xuICBTVUJTVC5jb250YWlucyA9IEVYUFJFU1NJT05TO1xuXG4gIHJldHVybiB7XG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6IEtFWVdPUkRTICsgJyAnICsgREVDTEFSQVRJT05fTU9ESUZJRVJTLFxuICAgICAgbWV0YTogRE9DVU1FTlRBVElPTlxuICAgIH0sXG4gICAgaWxsZWdhbDogJ1xcXFwkW14wMV18I1teMC05YS1mQS1GXScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ09NTUVOVCgnL1xcXFwqJywgJ1xcXFwqLycsIHtjb250YWluczogWydzZWxmJ119KSxcbiAgICAgIHtcbiAgICAgICAgLy8gY29tcGlsZXIgYW5ub3RhdGlvblxuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdAW2Etel1cXFxcdyooPzpcXFxcOlxcXCJbXlxcXCJdKlxcXCIpPydcbiAgICAgIH1cbiAgICBdLmNvbmNhdChFWFBSRVNTSU9OUylcbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==