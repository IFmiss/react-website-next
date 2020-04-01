(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_clean"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/clean.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/clean.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    aliases: ['clean','icl','dcl'],
    keywords: {
      keyword:
        'if let in with where case of class instance otherwise ' +
        'implementation definition system module from import qualified as ' +
        'special code inline foreign export ccall stdcall generic derive ' +
        'infix infixl infixr',
      built_in:
        'Int Real Char Bool',
      literal:
        'True False'
    },
    contains: [

      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,

      {begin: '->|<-[|:]?|#!?|>>=|\\{\\||\\|\\}|:==|=:|<>'} // relevance booster
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9jbGVhbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NsZWFuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsnY2xlYW4nLCdpY2wnLCdkY2wnXSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgJ2lmIGxldCBpbiB3aXRoIHdoZXJlIGNhc2Ugb2YgY2xhc3MgaW5zdGFuY2Ugb3RoZXJ3aXNlICcgK1xuICAgICAgICAnaW1wbGVtZW50YXRpb24gZGVmaW5pdGlvbiBzeXN0ZW0gbW9kdWxlIGZyb20gaW1wb3J0IHF1YWxpZmllZCBhcyAnICtcbiAgICAgICAgJ3NwZWNpYWwgY29kZSBpbmxpbmUgZm9yZWlnbiBleHBvcnQgY2NhbGwgc3RkY2FsbCBnZW5lcmljIGRlcml2ZSAnICtcbiAgICAgICAgJ2luZml4IGluZml4bCBpbmZpeHInLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgICdJbnQgUmVhbCBDaGFyIEJvb2wnLFxuICAgICAgbGl0ZXJhbDpcbiAgICAgICAgJ1RydWUgRmFsc2UnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcblxuICAgICAge2JlZ2luOiAnLT58PC1bfDpdP3wjIT98Pj49fFxcXFx7XFxcXHx8XFxcXHxcXFxcfXw6PT18PTp8PD4nfSAvLyByZWxldmFuY2UgYm9vc3RlclxuICAgIF1cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=