(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_ebnf"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ebnf.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ebnf.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
    var commentMode = hljs.COMMENT(/\(\*/, /\*\)/);

    var nonTerminalMode = {
        className: "attribute",
        begin: /^[ ]*[a-zA-Z][a-zA-Z-]*([\s-]+[a-zA-Z][a-zA-Z]*)*/
    };

    var specialSequenceMode = {
        className: "meta",
        begin: /\?.*\?/
    };

    var ruleBodyMode = {
        begin: /=/, end: /;/,
        contains: [
            commentMode,
            specialSequenceMode,
            // terminals
            hljs.APOS_STRING_MODE, hljs.QUOTE_STRING_MODE
        ]
    };

    return {
        illegal: /\S/,
        contains: [
            commentMode,
            nonTerminalMode,
            ruleBodyMode
        ]
    };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9lYm5mLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZWJuZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgICB2YXIgY29tbWVudE1vZGUgPSBobGpzLkNPTU1FTlQoL1xcKFxcKi8sIC9cXCpcXCkvKTtcblxuICAgIHZhciBub25UZXJtaW5hbE1vZGUgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJhdHRyaWJ1dGVcIixcbiAgICAgICAgYmVnaW46IC9eWyBdKlthLXpBLVpdW2EtekEtWi1dKihbXFxzLV0rW2EtekEtWl1bYS16QS1aXSopKi9cbiAgICB9O1xuXG4gICAgdmFyIHNwZWNpYWxTZXF1ZW5jZU1vZGUgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogXCJtZXRhXCIsXG4gICAgICAgIGJlZ2luOiAvXFw/LipcXD8vXG4gICAgfTtcblxuICAgIHZhciBydWxlQm9keU1vZGUgPSB7XG4gICAgICAgIGJlZ2luOiAvPS8sIGVuZDogLzsvLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAgY29tbWVudE1vZGUsXG4gICAgICAgICAgICBzcGVjaWFsU2VxdWVuY2VNb2RlLFxuICAgICAgICAgICAgLy8gdGVybWluYWxzXG4gICAgICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsIGhsanMuUVVPVEVfU1RSSU5HX01PREVcbiAgICAgICAgXVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbGxlZ2FsOiAvXFxTLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIGNvbW1lbnRNb2RlLFxuICAgICAgICAgICAgbm9uVGVybWluYWxNb2RlLFxuICAgICAgICAgICAgcnVsZUJvZHlNb2RlXG4gICAgICAgIF1cbiAgICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==