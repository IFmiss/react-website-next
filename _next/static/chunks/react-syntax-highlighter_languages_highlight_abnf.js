(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_abnf"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/abnf.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/abnf.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
    var regexes = {
        ruleDeclaration: "^[a-zA-Z][a-zA-Z0-9-]*",
        unexpectedChars: "[!@#$^&',?+~`|:]"
    };

    var keywords = [
        "ALPHA",
        "BIT",
        "CHAR",
        "CR",
        "CRLF",
        "CTL",
        "DIGIT",
        "DQUOTE",
        "HEXDIG",
        "HTAB",
        "LF",
        "LWSP",
        "OCTET",
        "SP",
        "VCHAR",
        "WSP"
    ];

    var commentMode = hljs.COMMENT(";", "$");

    var terminalBinaryMode = {
        className: "symbol",
        begin: /%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/
    };

    var terminalDecimalMode = {
        className: "symbol",
        begin: /%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/
    };

    var terminalHexadecimalMode = {
        className: "symbol",
        begin: /%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/,
    };

    var caseSensitivityIndicatorMode = {
        className: "symbol",
        begin: /%[si]/
    };

    var ruleDeclarationMode = {
        begin: regexes.ruleDeclaration + '\\s*=',
        returnBegin: true,
        end: /=/,
        relevance: 0,
        contains: [{className: "attribute", begin: regexes.ruleDeclaration}]
    };

    return {
      illegal: regexes.unexpectedChars,
      keywords: keywords.join(" "),
      contains: [
          ruleDeclarationMode,
          commentMode,
          terminalBinaryMode,
          terminalDecimalMode,
          terminalHexadecimalMode,
          caseSensitivityIndicatorMode,
          hljs.QUOTE_STRING_MODE,
          hljs.NUMBER_MODE
      ]
    };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9hYm5mLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYWJuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgICB2YXIgcmVnZXhlcyA9IHtcbiAgICAgICAgcnVsZURlY2xhcmF0aW9uOiBcIl5bYS16QS1aXVthLXpBLVowLTktXSpcIixcbiAgICAgICAgdW5leHBlY3RlZENoYXJzOiBcIlshQCMkXiYnLD8rfmB8Ol1cIlxuICAgIH07XG5cbiAgICB2YXIga2V5d29yZHMgPSBbXG4gICAgICAgIFwiQUxQSEFcIixcbiAgICAgICAgXCJCSVRcIixcbiAgICAgICAgXCJDSEFSXCIsXG4gICAgICAgIFwiQ1JcIixcbiAgICAgICAgXCJDUkxGXCIsXG4gICAgICAgIFwiQ1RMXCIsXG4gICAgICAgIFwiRElHSVRcIixcbiAgICAgICAgXCJEUVVPVEVcIixcbiAgICAgICAgXCJIRVhESUdcIixcbiAgICAgICAgXCJIVEFCXCIsXG4gICAgICAgIFwiTEZcIixcbiAgICAgICAgXCJMV1NQXCIsXG4gICAgICAgIFwiT0NURVRcIixcbiAgICAgICAgXCJTUFwiLFxuICAgICAgICBcIlZDSEFSXCIsXG4gICAgICAgIFwiV1NQXCJcbiAgICBdO1xuXG4gICAgdmFyIGNvbW1lbnRNb2RlID0gaGxqcy5DT01NRU5UKFwiO1wiLCBcIiRcIik7XG5cbiAgICB2YXIgdGVybWluYWxCaW5hcnlNb2RlID0ge1xuICAgICAgICBjbGFzc05hbWU6IFwic3ltYm9sXCIsXG4gICAgICAgIGJlZ2luOiAvJWJbMC0xXSsoLVswLTFdK3woXFwuWzAtMV0rKSspezAsMX0vXG4gICAgfTtcblxuICAgIHZhciB0ZXJtaW5hbERlY2ltYWxNb2RlID0ge1xuICAgICAgICBjbGFzc05hbWU6IFwic3ltYm9sXCIsXG4gICAgICAgIGJlZ2luOiAvJWRbMC05XSsoLVswLTldK3woXFwuWzAtOV0rKSspezAsMX0vXG4gICAgfTtcblxuICAgIHZhciB0ZXJtaW5hbEhleGFkZWNpbWFsTW9kZSA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBcInN5bWJvbFwiLFxuICAgICAgICBiZWdpbjogLyV4WzAtOUEtRl0rKC1bMC05QS1GXSt8KFxcLlswLTlBLUZdKykrKXswLDF9LyxcbiAgICB9O1xuXG4gICAgdmFyIGNhc2VTZW5zaXRpdml0eUluZGljYXRvck1vZGUgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJzeW1ib2xcIixcbiAgICAgICAgYmVnaW46IC8lW3NpXS9cbiAgICB9O1xuXG4gICAgdmFyIHJ1bGVEZWNsYXJhdGlvbk1vZGUgPSB7XG4gICAgICAgIGJlZ2luOiByZWdleGVzLnJ1bGVEZWNsYXJhdGlvbiArICdcXFxccyo9JyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGVuZDogLz0vLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbe2NsYXNzTmFtZTogXCJhdHRyaWJ1dGVcIiwgYmVnaW46IHJlZ2V4ZXMucnVsZURlY2xhcmF0aW9ufV1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlsbGVnYWw6IHJlZ2V4ZXMudW5leHBlY3RlZENoYXJzLFxuICAgICAga2V5d29yZHM6IGtleXdvcmRzLmpvaW4oXCIgXCIpLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBydWxlRGVjbGFyYXRpb25Nb2RlLFxuICAgICAgICAgIGNvbW1lbnRNb2RlLFxuICAgICAgICAgIHRlcm1pbmFsQmluYXJ5TW9kZSxcbiAgICAgICAgICB0ZXJtaW5hbERlY2ltYWxNb2RlLFxuICAgICAgICAgIHRlcm1pbmFsSGV4YWRlY2ltYWxNb2RlLFxuICAgICAgICAgIGNhc2VTZW5zaXRpdml0eUluZGljYXRvck1vZGUsXG4gICAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICBobGpzLk5VTUJFUl9NT0RFXG4gICAgICBdXG4gICAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9