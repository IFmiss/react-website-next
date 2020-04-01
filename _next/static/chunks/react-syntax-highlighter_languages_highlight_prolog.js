(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_prolog"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/prolog.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/prolog.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {

  var ATOM = {

    begin: /[a-z][A-Za-z0-9_]*/,
    relevance: 0
  };

  var VAR = {

    className: 'symbol',
    variants: [
      {begin: /[A-Z][a-zA-Z0-9_]*/},
      {begin: /_[A-Za-z0-9_]*/},
    ],
    relevance: 0
  };

  var PARENTED = {

    begin: /\(/,
    end: /\)/,
    relevance: 0
  };

  var LIST = {

    begin: /\[/,
    end: /\]/
  };

  var LINE_COMMENT = {

    className: 'comment',
    begin: /%/, end: /$/,
    contains: [hljs.PHRASAL_WORDS_MODE]
  };

  var BACKTICK_STRING = {

    className: 'string',
    begin: /`/, end: /`/,
    contains: [hljs.BACKSLASH_ESCAPE]
  };

  var CHAR_CODE = {

    className: 'string', // 0'a etc.
    begin: /0\'(\\\'|.)/
  };

  var SPACE_CODE = {

    className: 'string',
    begin: /0\'\\s/ // 0'\s
  };

  var PRED_OP = { // relevance booster
    begin: /:-/
  };

  var inner = [

    ATOM,
    VAR,
    PARENTED,
    PRED_OP,
    LIST,
    LINE_COMMENT,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.APOS_STRING_MODE,
    BACKTICK_STRING,
    CHAR_CODE,
    SPACE_CODE,
    hljs.C_NUMBER_MODE
  ];

  PARENTED.contains = inner;
  LIST.contains = inner;

  return {
    contains: inner.concat([
      {begin: /\.$/} // relevance booster
    ])
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9wcm9sb2cuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9wcm9sb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG5cbiAgdmFyIEFUT00gPSB7XG5cbiAgICBiZWdpbjogL1thLXpdW0EtWmEtejAtOV9dKi8sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgdmFyIFZBUiA9IHtcblxuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtiZWdpbjogL1tBLVpdW2EtekEtWjAtOV9dKi99LFxuICAgICAge2JlZ2luOiAvX1tBLVphLXowLTlfXSovfSxcbiAgICBdLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHZhciBQQVJFTlRFRCA9IHtcblxuICAgIGJlZ2luOiAvXFwoLyxcbiAgICBlbmQ6IC9cXCkvLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHZhciBMSVNUID0ge1xuXG4gICAgYmVnaW46IC9cXFsvLFxuICAgIGVuZDogL1xcXS9cbiAgfTtcblxuICB2YXIgTElORV9DT01NRU5UID0ge1xuXG4gICAgY2xhc3NOYW1lOiAnY29tbWVudCcsXG4gICAgYmVnaW46IC8lLywgZW5kOiAvJC8sXG4gICAgY29udGFpbnM6IFtobGpzLlBIUkFTQUxfV09SRFNfTU9ERV1cbiAgfTtcblxuICB2YXIgQkFDS1RJQ0tfU1RSSU5HID0ge1xuXG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogL2AvLCBlbmQ6IC9gLyxcbiAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV1cbiAgfTtcblxuICB2YXIgQ0hBUl9DT0RFID0ge1xuXG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJywgLy8gMCdhIGV0Yy5cbiAgICBiZWdpbjogLzBcXCcoXFxcXFxcJ3wuKS9cbiAgfTtcblxuICB2YXIgU1BBQ0VfQ09ERSA9IHtcblxuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC8wXFwnXFxcXHMvIC8vIDAnXFxzXG4gIH07XG5cbiAgdmFyIFBSRURfT1AgPSB7IC8vIHJlbGV2YW5jZSBib29zdGVyXG4gICAgYmVnaW46IC86LS9cbiAgfTtcblxuICB2YXIgaW5uZXIgPSBbXG5cbiAgICBBVE9NLFxuICAgIFZBUixcbiAgICBQQVJFTlRFRCxcbiAgICBQUkVEX09QLFxuICAgIExJU1QsXG4gICAgTElORV9DT01NRU5ULFxuICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgQkFDS1RJQ0tfU1RSSU5HLFxuICAgIENIQVJfQ09ERSxcbiAgICBTUEFDRV9DT0RFLFxuICAgIGhsanMuQ19OVU1CRVJfTU9ERVxuICBdO1xuXG4gIFBBUkVOVEVELmNvbnRhaW5zID0gaW5uZXI7XG4gIExJU1QuY29udGFpbnMgPSBpbm5lcjtcblxuICByZXR1cm4ge1xuICAgIGNvbnRhaW5zOiBpbm5lci5jb25jYXQoW1xuICAgICAge2JlZ2luOiAvXFwuJC99IC8vIHJlbGV2YW5jZSBib29zdGVyXG4gICAgXSlcbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==