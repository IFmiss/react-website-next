(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_subunit"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/subunit.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/subunit.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var DETAILS = {
    className: 'string',
    begin: '\\[\n(multipart)?', end: '\\]\n'
  };
  var TIME = {
    className: 'string',
    begin: '\\d{4}-\\d{2}-\\d{2}(\\s+)\\d{2}:\\d{2}:\\d{2}\.\\d+Z'
  };
  var PROGRESSVALUE = {
    className: 'string',
    begin: '(\\+|-)\\d+'
  };
  var KEYWORDS = {
    className: 'keyword',
    relevance: 10,
    variants: [
      { begin: '^(test|testing|success|successful|failure|error|skip|xfail|uxsuccess)(:?)\\s+(test)?' },
      { begin: '^progress(:?)(\\s+)?(pop|push)?' },
      { begin: '^tags:' },
      { begin: '^time:' }
    ],
  };
  return {
    case_insensitive: true,
    contains: [
      DETAILS,
      TIME,
      PROGRESSVALUE,
      KEYWORDS
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9zdWJ1bml0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc3VidW5pdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIERFVEFJTFMgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1xcXFxbXFxuKG11bHRpcGFydCk/JywgZW5kOiAnXFxcXF1cXG4nXG4gIH07XG4gIHZhciBUSU1FID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcXFxcZHs0fS1cXFxcZHsyfS1cXFxcZHsyfShcXFxccyspXFxcXGR7Mn06XFxcXGR7Mn06XFxcXGR7Mn1cXC5cXFxcZCtaJ1xuICB9O1xuICB2YXIgUFJPR1JFU1NWQUxVRSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnKFxcXFwrfC0pXFxcXGQrJ1xuICB9O1xuICB2YXIgS0VZV09SRFMgPSB7XG4gICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgcmVsZXZhbmNlOiAxMCxcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogJ14odGVzdHx0ZXN0aW5nfHN1Y2Nlc3N8c3VjY2Vzc2Z1bHxmYWlsdXJlfGVycm9yfHNraXB8eGZhaWx8dXhzdWNjZXNzKSg6PylcXFxccysodGVzdCk/JyB9LFxuICAgICAgeyBiZWdpbjogJ15wcm9ncmVzcyg6PykoXFxcXHMrKT8ocG9wfHB1c2gpPycgfSxcbiAgICAgIHsgYmVnaW46ICdedGFnczonIH0sXG4gICAgICB7IGJlZ2luOiAnXnRpbWU6JyB9XG4gICAgXSxcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBERVRBSUxTLFxuICAgICAgVElNRSxcbiAgICAgIFBST0dSRVNTVkFMVUUsXG4gICAgICBLRVlXT1JEU1xuICAgIF1cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==