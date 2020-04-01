(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_nix"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/nix.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/nix.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var NIX_KEYWORDS = {
    keyword:
      'rec with let in inherit assert if else then',
    literal:
      'true false or and null',
    built_in:
      'import abort baseNameOf dirOf isNull builtins map removeAttrs throw ' +
      'toString derivation'
  };
  var ANTIQUOTE = {
    className: 'subst',
    begin: /\$\{/,
    end: /}/,
    keywords: NIX_KEYWORDS
  };
  var ATTRS = {
    begin: /[a-zA-Z0-9-_]+(\s*=)/, returnBegin: true,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: /\S+/
      }
    ]
  };
  var STRING = {
    className: 'string',
    contains: [ANTIQUOTE],
    variants: [
      {begin: "''", end: "''"},
      {begin: '"', end: '"'}
    ]
  };
  var EXPRESSIONS = [
    hljs.NUMBER_MODE,
    hljs.HASH_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    STRING,
    ATTRS
  ];
  ANTIQUOTE.contains = EXPRESSIONS;
  return {
    aliases: ["nixos"],
    keywords: NIX_KEYWORDS,
    contains: EXPRESSIONS
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9uaXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9uaXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBOSVhfS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDpcbiAgICAgICdyZWMgd2l0aCBsZXQgaW4gaW5oZXJpdCBhc3NlcnQgaWYgZWxzZSB0aGVuJyxcbiAgICBsaXRlcmFsOlxuICAgICAgJ3RydWUgZmFsc2Ugb3IgYW5kIG51bGwnLFxuICAgIGJ1aWx0X2luOlxuICAgICAgJ2ltcG9ydCBhYm9ydCBiYXNlTmFtZU9mIGRpck9mIGlzTnVsbCBidWlsdGlucyBtYXAgcmVtb3ZlQXR0cnMgdGhyb3cgJyArXG4gICAgICAndG9TdHJpbmcgZGVyaXZhdGlvbidcbiAgfTtcbiAgdmFyIEFOVElRVU9URSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgYmVnaW46IC9cXCRcXHsvLFxuICAgIGVuZDogL30vLFxuICAgIGtleXdvcmRzOiBOSVhfS0VZV09SRFNcbiAgfTtcbiAgdmFyIEFUVFJTID0ge1xuICAgIGJlZ2luOiAvW2EtekEtWjAtOS1fXSsoXFxzKj0pLywgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICBiZWdpbjogL1xcUysvXG4gICAgICB9XG4gICAgXVxuICB9O1xuICB2YXIgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgY29udGFpbnM6IFtBTlRJUVVPVEVdLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7YmVnaW46IFwiJydcIiwgZW5kOiBcIicnXCJ9LFxuICAgICAge2JlZ2luOiAnXCInLCBlbmQ6ICdcIid9XG4gICAgXVxuICB9O1xuICB2YXIgRVhQUkVTU0lPTlMgPSBbXG4gICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgU1RSSU5HLFxuICAgIEFUVFJTXG4gIF07XG4gIEFOVElRVU9URS5jb250YWlucyA9IEVYUFJFU1NJT05TO1xuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFtcIm5peG9zXCJdLFxuICAgIGtleXdvcmRzOiBOSVhfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IEVYUFJFU1NJT05TXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=