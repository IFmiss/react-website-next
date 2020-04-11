(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_smalltalk"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/smalltalk.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/smalltalk.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var VAR_IDENT_RE = '[a-z][a-zA-Z0-9_]*';
  var CHAR = {
    className: 'string',
    begin: '\\$.{1}'
  };
  var SYMBOL = {
    className: 'symbol',
    begin: '#' + hljs.UNDERSCORE_IDENT_RE
  };
  return {
    aliases: ['st'],
    keywords: 'self super nil true false thisContext', // only 6
    contains: [
      hljs.COMMENT('"', '"'),
      hljs.APOS_STRING_MODE,
      {
        className: 'type',
        begin: '\\b[A-Z][A-Za-z0-9_]*',
        relevance: 0
      },
      {
        begin: VAR_IDENT_RE + ':',
        relevance: 0
      },
      hljs.C_NUMBER_MODE,
      SYMBOL,
      CHAR,
      {
        // This looks more complicated than needed to avoid combinatorial
        // explosion under V8. It effectively means `| var1 var2 ... |` with
        // whitespace adjacent to `|` being optional.
        begin: '\\|[ ]*' + VAR_IDENT_RE + '([ ]+' + VAR_IDENT_RE + ')*[ ]*\\|',
        returnBegin: true, end: /\|/,
        illegal: /\S/,
        contains: [{begin: '(\\|[ ]*)?' + VAR_IDENT_RE}]
      },
      {
        begin: '\\#\\(', end: '\\)',
        contains: [
          hljs.APOS_STRING_MODE,
          CHAR,
          hljs.C_NUMBER_MODE,
          SYMBOL
        ]
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9zbWFsbHRhbGsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9zbWFsbHRhbGsuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBWQVJfSURFTlRfUkUgPSAnW2Etel1bYS16QS1aMC05X10qJztcbiAgdmFyIENIQVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1xcXFwkLnsxfSdcbiAgfTtcbiAgdmFyIFNZTUJPTCA9IHtcbiAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgIGJlZ2luOiAnIycgKyBobGpzLlVOREVSU0NPUkVfSURFTlRfUkVcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ3N0J10sXG4gICAga2V5d29yZHM6ICdzZWxmIHN1cGVyIG5pbCB0cnVlIGZhbHNlIHRoaXNDb250ZXh0JywgLy8gb25seSA2XG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ09NTUVOVCgnXCInLCAnXCInKSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgIGJlZ2luOiAnXFxcXGJbQS1aXVtBLVphLXowLTlfXSonLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBWQVJfSURFTlRfUkUgKyAnOicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIFNZTUJPTCxcbiAgICAgIENIQVIsXG4gICAgICB7XG4gICAgICAgIC8vIFRoaXMgbG9va3MgbW9yZSBjb21wbGljYXRlZCB0aGFuIG5lZWRlZCB0byBhdm9pZCBjb21iaW5hdG9yaWFsXG4gICAgICAgIC8vIGV4cGxvc2lvbiB1bmRlciBWOC4gSXQgZWZmZWN0aXZlbHkgbWVhbnMgYHwgdmFyMSB2YXIyIC4uLiB8YCB3aXRoXG4gICAgICAgIC8vIHdoaXRlc3BhY2UgYWRqYWNlbnQgdG8gYHxgIGJlaW5nIG9wdGlvbmFsLlxuICAgICAgICBiZWdpbjogJ1xcXFx8WyBdKicgKyBWQVJfSURFTlRfUkUgKyAnKFsgXSsnICsgVkFSX0lERU5UX1JFICsgJykqWyBdKlxcXFx8JyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsIGVuZDogL1xcfC8sXG4gICAgICAgIGlsbGVnYWw6IC9cXFMvLFxuICAgICAgICBjb250YWluczogW3tiZWdpbjogJyhcXFxcfFsgXSopPycgKyBWQVJfSURFTlRfUkV9XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcI1xcXFwoJywgZW5kOiAnXFxcXCknLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgICBDSEFSLFxuICAgICAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgICAgICBTWU1CT0xcbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9