(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_golo"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/golo.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/golo.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
    return {
      keywords: {
        keyword:
          'println readln print import module function local return let var ' +
          'while for foreach times in case when match with break continue ' +
          'augment augmentation each find filter reduce ' +
          'if then else otherwise try catch finally raise throw orIfNull ' +
          'DynamicObject|10 DynamicVariable struct Observable map set vector list array',
        literal:
          'true false null'
      },
      contains: [
        hljs.HASH_COMMENT_MODE,
        hljs.QUOTE_STRING_MODE,
        hljs.C_NUMBER_MODE,
        {
          className: 'meta', begin: '@[A-Za-z]+'
        }
      ]
    }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9nb2xvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZ29sby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5d29yZHM6IHtcbiAgICAgICAga2V5d29yZDpcbiAgICAgICAgICAncHJpbnRsbiByZWFkbG4gcHJpbnQgaW1wb3J0IG1vZHVsZSBmdW5jdGlvbiBsb2NhbCByZXR1cm4gbGV0IHZhciAnICtcbiAgICAgICAgICAnd2hpbGUgZm9yIGZvcmVhY2ggdGltZXMgaW4gY2FzZSB3aGVuIG1hdGNoIHdpdGggYnJlYWsgY29udGludWUgJyArXG4gICAgICAgICAgJ2F1Z21lbnQgYXVnbWVudGF0aW9uIGVhY2ggZmluZCBmaWx0ZXIgcmVkdWNlICcgK1xuICAgICAgICAgICdpZiB0aGVuIGVsc2Ugb3RoZXJ3aXNlIHRyeSBjYXRjaCBmaW5hbGx5IHJhaXNlIHRocm93IG9ySWZOdWxsICcgK1xuICAgICAgICAgICdEeW5hbWljT2JqZWN0fDEwIER5bmFtaWNWYXJpYWJsZSBzdHJ1Y3QgT2JzZXJ2YWJsZSBtYXAgc2V0IHZlY3RvciBsaXN0IGFycmF5JyxcbiAgICAgICAgbGl0ZXJhbDpcbiAgICAgICAgICAndHJ1ZSBmYWxzZSBudWxsJ1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLCBiZWdpbjogJ0BbQS1aYS16XSsnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==