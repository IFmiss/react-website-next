(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_less"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/less.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/less.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var IDENT_RE        = '[\\w-]+'; // yes, Less identifiers may begin with a digit
  var INTERP_IDENT_RE = '(' + IDENT_RE + '|@{' + IDENT_RE + '})';

  /* Generic Modes */

  var RULES = [], VALUE = []; // forward def. for recursive modes

  var STRING_MODE = function(c) { return {
    // Less strings are not multiline (also include '~' for more consistent coloring of "escaped" strings)
    className: 'string', begin: '~?' + c + '.*?' + c
  };};

  var IDENT_MODE = function(name, begin, relevance) { return {
    className: name, begin: begin, relevance: relevance
  };};

  var PARENS_MODE = {
    // used only to properly balance nested parens inside mixin call, def. arg list
    begin: '\\(', end: '\\)', contains: VALUE, relevance: 0
  };

  // generic Less highlighter (used almost everywhere except selectors):
  VALUE.push(
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    STRING_MODE("'"),
    STRING_MODE('"'),
    hljs.CSS_NUMBER_MODE, // fixme: it does not include dot for numbers like .5em :(
    {
      begin: '(url|data-uri)\\(',
      starts: {className: 'string', end: '[\\)\\n]', excludeEnd: true}
    },
    IDENT_MODE('number', '#[0-9A-Fa-f]+\\b'),
    PARENS_MODE,
    IDENT_MODE('variable', '@@?' + IDENT_RE, 10),
    IDENT_MODE('variable', '@{'  + IDENT_RE + '}'),
    IDENT_MODE('built_in', '~?`[^`]*?`'), // inline javascript (or whatever host language) *multiline* string
    { // @media features (it’s here to not duplicate things in AT_RULE_MODE with extra PARENS_MODE overriding):
      className: 'attribute', begin: IDENT_RE + '\\s*:', end: ':', returnBegin: true, excludeEnd: true
    },
    {
      className: 'meta',
      begin: '!important'
    }
  );

  var VALUE_WITH_RULESETS = VALUE.concat({
    begin: '{', end: '}', contains: RULES
  });

  var MIXIN_GUARD_MODE = {
    beginKeywords: 'when', endsWithParent: true,
    contains: [{beginKeywords: 'and not'}].concat(VALUE) // using this form to override VALUE’s 'function' match
  };

  /* Rule-Level Modes */

  var RULE_MODE = {
    begin: INTERP_IDENT_RE + '\\s*:', returnBegin: true, end: '[;}]',
    relevance: 0,
    contains: [
      {
        className: 'attribute',
        begin: INTERP_IDENT_RE, end: ':', excludeEnd: true,
        starts: {
          endsWithParent: true, illegal: '[<=$]',
          relevance: 0,
          contains: VALUE
        }
      }
    ]
  };

  var AT_RULE_MODE = {
    className: 'keyword',
    begin: '@(import|media|charset|font-face|(-[a-z]+-)?keyframes|supports|document|namespace|page|viewport|host)\\b',
    starts: {end: '[;{}]', returnEnd: true, contains: VALUE, relevance: 0}
  };

  // variable definitions and calls
  var VAR_RULE_MODE = {
    className: 'variable',
    variants: [
      // using more strict pattern for higher relevance to increase chances of Less detection.
      // this is *the only* Less specific statement used in most of the sources, so...
      // (we’ll still often loose to the css-parser unless there's '//' comment,
      // simply because 1 variable just can't beat 99 properties :)
      {begin: '@' + IDENT_RE + '\\s*:', relevance: 15},
      {begin: '@' + IDENT_RE}
    ],
    starts: {end: '[;}]', returnEnd: true, contains: VALUE_WITH_RULESETS}
  };

  var SELECTOR_MODE = {
    // first parse unambiguous selectors (i.e. those not starting with tag)
    // then fall into the scary lookahead-discriminator variant.
    // this mode also handles mixin definitions and calls
    variants: [{
      begin: '[\\.#:&\\[>]', end: '[;{}]'  // mixin calls end with ';'
      }, {
      begin: INTERP_IDENT_RE, end: '{'
    }],
    returnBegin: true,
    returnEnd:   true,
    illegal: '[<=\'$"]',
    relevance: 0,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      MIXIN_GUARD_MODE,
      IDENT_MODE('keyword',  'all\\b'),
      IDENT_MODE('variable', '@{'  + IDENT_RE + '}'),     // otherwise it’s identified as tag
      IDENT_MODE('selector-tag',  INTERP_IDENT_RE + '%?', 0), // '%' for more consistent coloring of @keyframes "tags"
      IDENT_MODE('selector-id', '#' + INTERP_IDENT_RE),
      IDENT_MODE('selector-class', '\\.' + INTERP_IDENT_RE, 0),
      IDENT_MODE('selector-tag',  '&', 0),
      {className: 'selector-attr', begin: '\\[', end: '\\]'},
      {className: 'selector-pseudo', begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},
      {begin: '\\(', end: '\\)', contains: VALUE_WITH_RULESETS}, // argument list of parametric mixins
      {begin: '!important'} // eat !important after mixin call or it will be colored as tag
    ]
  };

  RULES.push(
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    AT_RULE_MODE,
    VAR_RULE_MODE,
    RULE_MODE,
    SELECTOR_MODE
  );

  return {
    case_insensitive: true,
    illegal: '[=>\'/<($"]',
    contains: RULES
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9sZXNzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbGVzcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIElERU5UX1JFICAgICAgICA9ICdbXFxcXHctXSsnOyAvLyB5ZXMsIExlc3MgaWRlbnRpZmllcnMgbWF5IGJlZ2luIHdpdGggYSBkaWdpdFxuICB2YXIgSU5URVJQX0lERU5UX1JFID0gJygnICsgSURFTlRfUkUgKyAnfEB7JyArIElERU5UX1JFICsgJ30pJztcblxuICAvKiBHZW5lcmljIE1vZGVzICovXG5cbiAgdmFyIFJVTEVTID0gW10sIFZBTFVFID0gW107IC8vIGZvcndhcmQgZGVmLiBmb3IgcmVjdXJzaXZlIG1vZGVzXG5cbiAgdmFyIFNUUklOR19NT0RFID0gZnVuY3Rpb24oYykgeyByZXR1cm4ge1xuICAgIC8vIExlc3Mgc3RyaW5ncyBhcmUgbm90IG11bHRpbGluZSAoYWxzbyBpbmNsdWRlICd+JyBmb3IgbW9yZSBjb25zaXN0ZW50IGNvbG9yaW5nIG9mIFwiZXNjYXBlZFwiIHN0cmluZ3MpXG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJywgYmVnaW46ICd+PycgKyBjICsgJy4qPycgKyBjXG4gIH07fTtcblxuICB2YXIgSURFTlRfTU9ERSA9IGZ1bmN0aW9uKG5hbWUsIGJlZ2luLCByZWxldmFuY2UpIHsgcmV0dXJuIHtcbiAgICBjbGFzc05hbWU6IG5hbWUsIGJlZ2luOiBiZWdpbiwgcmVsZXZhbmNlOiByZWxldmFuY2VcbiAgfTt9O1xuXG4gIHZhciBQQVJFTlNfTU9ERSA9IHtcbiAgICAvLyB1c2VkIG9ubHkgdG8gcHJvcGVybHkgYmFsYW5jZSBuZXN0ZWQgcGFyZW5zIGluc2lkZSBtaXhpbiBjYWxsLCBkZWYuIGFyZyBsaXN0XG4gICAgYmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJywgY29udGFpbnM6IFZBTFVFLCByZWxldmFuY2U6IDBcbiAgfTtcblxuICAvLyBnZW5lcmljIExlc3MgaGlnaGxpZ2h0ZXIgKHVzZWQgYWxtb3N0IGV2ZXJ5d2hlcmUgZXhjZXB0IHNlbGVjdG9ycyk6XG4gIFZBTFVFLnB1c2goXG4gICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgU1RSSU5HX01PREUoXCInXCIpLFxuICAgIFNUUklOR19NT0RFKCdcIicpLFxuICAgIGhsanMuQ1NTX05VTUJFUl9NT0RFLCAvLyBmaXhtZTogaXQgZG9lcyBub3QgaW5jbHVkZSBkb3QgZm9yIG51bWJlcnMgbGlrZSAuNWVtIDooXG4gICAge1xuICAgICAgYmVnaW46ICcodXJsfGRhdGEtdXJpKVxcXFwoJyxcbiAgICAgIHN0YXJ0czoge2NsYXNzTmFtZTogJ3N0cmluZycsIGVuZDogJ1tcXFxcKVxcXFxuXScsIGV4Y2x1ZGVFbmQ6IHRydWV9XG4gICAgfSxcbiAgICBJREVOVF9NT0RFKCdudW1iZXInLCAnI1swLTlBLUZhLWZdK1xcXFxiJyksXG4gICAgUEFSRU5TX01PREUsXG4gICAgSURFTlRfTU9ERSgndmFyaWFibGUnLCAnQEA/JyArIElERU5UX1JFLCAxMCksXG4gICAgSURFTlRfTU9ERSgndmFyaWFibGUnLCAnQHsnICArIElERU5UX1JFICsgJ30nKSxcbiAgICBJREVOVF9NT0RFKCdidWlsdF9pbicsICd+P2BbXmBdKj9gJyksIC8vIGlubGluZSBqYXZhc2NyaXB0IChvciB3aGF0ZXZlciBob3N0IGxhbmd1YWdlKSAqbXVsdGlsaW5lKiBzdHJpbmdcbiAgICB7IC8vIEBtZWRpYSBmZWF0dXJlcyAoaXTigJlzIGhlcmUgdG8gbm90IGR1cGxpY2F0ZSB0aGluZ3MgaW4gQVRfUlVMRV9NT0RFIHdpdGggZXh0cmEgUEFSRU5TX01PREUgb3ZlcnJpZGluZyk6XG4gICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLCBiZWdpbjogSURFTlRfUkUgKyAnXFxcXHMqOicsIGVuZDogJzonLCByZXR1cm5CZWdpbjogdHJ1ZSwgZXhjbHVkZUVuZDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICBiZWdpbjogJyFpbXBvcnRhbnQnXG4gICAgfVxuICApO1xuXG4gIHZhciBWQUxVRV9XSVRIX1JVTEVTRVRTID0gVkFMVUUuY29uY2F0KHtcbiAgICBiZWdpbjogJ3snLCBlbmQ6ICd9JywgY29udGFpbnM6IFJVTEVTXG4gIH0pO1xuXG4gIHZhciBNSVhJTl9HVUFSRF9NT0RFID0ge1xuICAgIGJlZ2luS2V5d29yZHM6ICd3aGVuJywgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgY29udGFpbnM6IFt7YmVnaW5LZXl3b3JkczogJ2FuZCBub3QnfV0uY29uY2F0KFZBTFVFKSAvLyB1c2luZyB0aGlzIGZvcm0gdG8gb3ZlcnJpZGUgVkFMVUXigJlzICdmdW5jdGlvbicgbWF0Y2hcbiAgfTtcblxuICAvKiBSdWxlLUxldmVsIE1vZGVzICovXG5cbiAgdmFyIFJVTEVfTU9ERSA9IHtcbiAgICBiZWdpbjogSU5URVJQX0lERU5UX1JFICsgJ1xcXFxzKjonLCByZXR1cm5CZWdpbjogdHJ1ZSwgZW5kOiAnWzt9XScsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2F0dHJpYnV0ZScsXG4gICAgICAgIGJlZ2luOiBJTlRFUlBfSURFTlRfUkUsIGVuZDogJzonLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSwgaWxsZWdhbDogJ1s8PSRdJyxcbiAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgY29udGFpbnM6IFZBTFVFXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgdmFyIEFUX1JVTEVfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICBiZWdpbjogJ0AoaW1wb3J0fG1lZGlhfGNoYXJzZXR8Zm9udC1mYWNlfCgtW2Etel0rLSk/a2V5ZnJhbWVzfHN1cHBvcnRzfGRvY3VtZW50fG5hbWVzcGFjZXxwYWdlfHZpZXdwb3J0fGhvc3QpXFxcXGInLFxuICAgIHN0YXJ0czoge2VuZDogJ1s7e31dJywgcmV0dXJuRW5kOiB0cnVlLCBjb250YWluczogVkFMVUUsIHJlbGV2YW5jZTogMH1cbiAgfTtcblxuICAvLyB2YXJpYWJsZSBkZWZpbml0aW9ucyBhbmQgY2FsbHNcbiAgdmFyIFZBUl9SVUxFX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICAvLyB1c2luZyBtb3JlIHN0cmljdCBwYXR0ZXJuIGZvciBoaWdoZXIgcmVsZXZhbmNlIHRvIGluY3JlYXNlIGNoYW5jZXMgb2YgTGVzcyBkZXRlY3Rpb24uXG4gICAgICAvLyB0aGlzIGlzICp0aGUgb25seSogTGVzcyBzcGVjaWZpYyBzdGF0ZW1lbnQgdXNlZCBpbiBtb3N0IG9mIHRoZSBzb3VyY2VzLCBzby4uLlxuICAgICAgLy8gKHdl4oCZbGwgc3RpbGwgb2Z0ZW4gbG9vc2UgdG8gdGhlIGNzcy1wYXJzZXIgdW5sZXNzIHRoZXJlJ3MgJy8vJyBjb21tZW50LFxuICAgICAgLy8gc2ltcGx5IGJlY2F1c2UgMSB2YXJpYWJsZSBqdXN0IGNhbid0IGJlYXQgOTkgcHJvcGVydGllcyA6KVxuICAgICAge2JlZ2luOiAnQCcgKyBJREVOVF9SRSArICdcXFxccyo6JywgcmVsZXZhbmNlOiAxNX0sXG4gICAgICB7YmVnaW46ICdAJyArIElERU5UX1JFfVxuICAgIF0sXG4gICAgc3RhcnRzOiB7ZW5kOiAnWzt9XScsIHJldHVybkVuZDogdHJ1ZSwgY29udGFpbnM6IFZBTFVFX1dJVEhfUlVMRVNFVFN9XG4gIH07XG5cbiAgdmFyIFNFTEVDVE9SX01PREUgPSB7XG4gICAgLy8gZmlyc3QgcGFyc2UgdW5hbWJpZ3VvdXMgc2VsZWN0b3JzIChpLmUuIHRob3NlIG5vdCBzdGFydGluZyB3aXRoIHRhZylcbiAgICAvLyB0aGVuIGZhbGwgaW50byB0aGUgc2NhcnkgbG9va2FoZWFkLWRpc2NyaW1pbmF0b3IgdmFyaWFudC5cbiAgICAvLyB0aGlzIG1vZGUgYWxzbyBoYW5kbGVzIG1peGluIGRlZmluaXRpb25zIGFuZCBjYWxsc1xuICAgIHZhcmlhbnRzOiBbe1xuICAgICAgYmVnaW46ICdbXFxcXC4jOiZcXFxcWz5dJywgZW5kOiAnWzt7fV0nICAvLyBtaXhpbiBjYWxscyBlbmQgd2l0aCAnOydcbiAgICAgIH0sIHtcbiAgICAgIGJlZ2luOiBJTlRFUlBfSURFTlRfUkUsIGVuZDogJ3snXG4gICAgfV0sXG4gICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgcmV0dXJuRW5kOiAgIHRydWUsXG4gICAgaWxsZWdhbDogJ1s8PVxcJyRcIl0nLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIE1JWElOX0dVQVJEX01PREUsXG4gICAgICBJREVOVF9NT0RFKCdrZXl3b3JkJywgICdhbGxcXFxcYicpLFxuICAgICAgSURFTlRfTU9ERSgndmFyaWFibGUnLCAnQHsnICArIElERU5UX1JFICsgJ30nKSwgICAgIC8vIG90aGVyd2lzZSBpdOKAmXMgaWRlbnRpZmllZCBhcyB0YWdcbiAgICAgIElERU5UX01PREUoJ3NlbGVjdG9yLXRhZycsICBJTlRFUlBfSURFTlRfUkUgKyAnJT8nLCAwKSwgLy8gJyUnIGZvciBtb3JlIGNvbnNpc3RlbnQgY29sb3Jpbmcgb2YgQGtleWZyYW1lcyBcInRhZ3NcIlxuICAgICAgSURFTlRfTU9ERSgnc2VsZWN0b3ItaWQnLCAnIycgKyBJTlRFUlBfSURFTlRfUkUpLFxuICAgICAgSURFTlRfTU9ERSgnc2VsZWN0b3ItY2xhc3MnLCAnXFxcXC4nICsgSU5URVJQX0lERU5UX1JFLCAwKSxcbiAgICAgIElERU5UX01PREUoJ3NlbGVjdG9yLXRhZycsICAnJicsIDApLFxuICAgICAge2NsYXNzTmFtZTogJ3NlbGVjdG9yLWF0dHInLCBiZWdpbjogJ1xcXFxbJywgZW5kOiAnXFxcXF0nfSxcbiAgICAgIHtjbGFzc05hbWU6ICdzZWxlY3Rvci1wc2V1ZG8nLCBiZWdpbjogLzooOik/W2EtekEtWjAtOVxcX1xcLVxcK1xcKFxcKVwiJy5dKy99LFxuICAgICAge2JlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKScsIGNvbnRhaW5zOiBWQUxVRV9XSVRIX1JVTEVTRVRTfSwgLy8gYXJndW1lbnQgbGlzdCBvZiBwYXJhbWV0cmljIG1peGluc1xuICAgICAge2JlZ2luOiAnIWltcG9ydGFudCd9IC8vIGVhdCAhaW1wb3J0YW50IGFmdGVyIG1peGluIGNhbGwgb3IgaXQgd2lsbCBiZSBjb2xvcmVkIGFzIHRhZ1xuICAgIF1cbiAgfTtcblxuICBSVUxFUy5wdXNoKFxuICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgIEFUX1JVTEVfTU9ERSxcbiAgICBWQVJfUlVMRV9NT0RFLFxuICAgIFJVTEVfTU9ERSxcbiAgICBTRUxFQ1RPUl9NT0RFXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGlsbGVnYWw6ICdbPT5cXCcvPCgkXCJdJyxcbiAgICBjb250YWluczogUlVMRVNcbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9