(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_pony"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/pony.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/pony.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var KEYWORDS = {
    keyword:
      'actor addressof and as be break class compile_error compile_intrinsic ' +
      'consume continue delegate digestof do else elseif embed end error ' +
      'for fun if ifdef in interface is isnt lambda let match new not object ' +
      'or primitive recover repeat return struct then trait try type until ' +
      'use var where while with xor',
    meta:
      'iso val tag trn box ref',
    literal:
      'this false true'
  };

  var TRIPLE_QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"""', end: '"""',
    relevance: 10
  };

  var QUOTE_STRING_MODE = {
    className: 'string',
    begin: '"', end: '"',
    contains: [hljs.BACKSLASH_ESCAPE]
  };

  var SINGLE_QUOTE_CHAR_MODE = {
    className: 'string',
    begin: '\'', end: '\'',
    contains: [hljs.BACKSLASH_ESCAPE],
    relevance: 0
  };

  var TYPE_NAME = {
    className: 'type',
    begin: '\\b_?[A-Z][\\w]*',
    relevance: 0
  };

  var PRIMED_NAME = {
    begin: hljs.IDENT_RE + '\'', relevance: 0
  };

  /**
   * The `FUNCTION` and `CLASS` modes were intentionally removed to simplify
   * highlighting and fix cases like
   * ```
   * interface Iterator[A: A]
   *   fun has_next(): Bool
   *   fun next(): A?
   * ```
   * where it is valid to have a function head without a body
   */

  return {
    keywords: KEYWORDS,
    contains: [
      TYPE_NAME,
      TRIPLE_QUOTE_STRING_MODE,
      QUOTE_STRING_MODE,
      SINGLE_QUOTE_CHAR_MODE,
      PRIMED_NAME,
      hljs.C_NUMBER_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9wb255LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcG9ueS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIEtFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6XG4gICAgICAnYWN0b3IgYWRkcmVzc29mIGFuZCBhcyBiZSBicmVhayBjbGFzcyBjb21waWxlX2Vycm9yIGNvbXBpbGVfaW50cmluc2ljICcgK1xuICAgICAgJ2NvbnN1bWUgY29udGludWUgZGVsZWdhdGUgZGlnZXN0b2YgZG8gZWxzZSBlbHNlaWYgZW1iZWQgZW5kIGVycm9yICcgK1xuICAgICAgJ2ZvciBmdW4gaWYgaWZkZWYgaW4gaW50ZXJmYWNlIGlzIGlzbnQgbGFtYmRhIGxldCBtYXRjaCBuZXcgbm90IG9iamVjdCAnICtcbiAgICAgICdvciBwcmltaXRpdmUgcmVjb3ZlciByZXBlYXQgcmV0dXJuIHN0cnVjdCB0aGVuIHRyYWl0IHRyeSB0eXBlIHVudGlsICcgK1xuICAgICAgJ3VzZSB2YXIgd2hlcmUgd2hpbGUgd2l0aCB4b3InLFxuICAgIG1ldGE6XG4gICAgICAnaXNvIHZhbCB0YWcgdHJuIGJveCByZWYnLFxuICAgIGxpdGVyYWw6XG4gICAgICAndGhpcyBmYWxzZSB0cnVlJ1xuICB9O1xuXG4gIHZhciBUUklQTEVfUVVPVEVfU1RSSU5HX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1wiXCJcIicsIGVuZDogJ1wiXCJcIicsXG4gICAgcmVsZXZhbmNlOiAxMFxuICB9O1xuXG4gIHZhciBRVU9URV9TVFJJTkdfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnXCInLCBlbmQ6ICdcIicsXG4gICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gIH07XG5cbiAgdmFyIFNJTkdMRV9RVU9URV9DSEFSX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1xcJycsIGVuZDogJ1xcJycsXG4gICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHZhciBUWVBFX05BTUUgPSB7XG4gICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgYmVnaW46ICdcXFxcYl8/W0EtWl1bXFxcXHddKicsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgdmFyIFBSSU1FRF9OQU1FID0ge1xuICAgIGJlZ2luOiBobGpzLklERU5UX1JFICsgJ1xcJycsIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIC8qKlxuICAgKiBUaGUgYEZVTkNUSU9OYCBhbmQgYENMQVNTYCBtb2RlcyB3ZXJlIGludGVudGlvbmFsbHkgcmVtb3ZlZCB0byBzaW1wbGlmeVxuICAgKiBoaWdobGlnaHRpbmcgYW5kIGZpeCBjYXNlcyBsaWtlXG4gICAqIGBgYFxuICAgKiBpbnRlcmZhY2UgSXRlcmF0b3JbQTogQV1cbiAgICogICBmdW4gaGFzX25leHQoKTogQm9vbFxuICAgKiAgIGZ1biBuZXh0KCk6IEE/XG4gICAqIGBgYFxuICAgKiB3aGVyZSBpdCBpcyB2YWxpZCB0byBoYXZlIGEgZnVuY3Rpb24gaGVhZCB3aXRob3V0IGEgYm9keVxuICAgKi9cblxuICByZXR1cm4ge1xuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgVFlQRV9OQU1FLFxuICAgICAgVFJJUExFX1FVT1RFX1NUUklOR19NT0RFLFxuICAgICAgUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBTSU5HTEVfUVVPVEVfQ0hBUl9NT0RFLFxuICAgICAgUFJJTUVEX05BTUUsXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==