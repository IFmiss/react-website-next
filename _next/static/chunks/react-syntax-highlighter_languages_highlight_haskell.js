(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_haskell"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/haskell.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/haskell.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var COMMENT = {
    variants: [
      hljs.COMMENT('--', '$'),
      hljs.COMMENT(
        '{-',
        '-}',
        {
          contains: ['self']
        }
      )
    ]
  };

  var PRAGMA = {
    className: 'meta',
    begin: '{-#', end: '#-}'
  };

  var PREPROCESSOR = {
    className: 'meta',
    begin: '^#', end: '$'
  };

  var CONSTRUCTOR = {
    className: 'type',
    begin: '\\b[A-Z][\\w\']*', // TODO: other constructors (build-in, infix).
    relevance: 0
  };

  var LIST = {
    begin: '\\(', end: '\\)',
    illegal: '"',
    contains: [
      PRAGMA,
      PREPROCESSOR,
      {className: 'type', begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'},
      hljs.inherit(hljs.TITLE_MODE, {begin: '[_a-z][\\w\']*'}),
      COMMENT
    ]
  };

  var RECORD = {
    begin: '{', end: '}',
    contains: LIST.contains
  };

  return {
    aliases: ['hs'],
    keywords:
      'let in if then else case of where do module import hiding ' +
      'qualified type data newtype deriving class instance as default ' +
      'infix infixl infixr foreign export ccall stdcall cplusplus ' +
      'jvm dotnet safe unsafe family forall mdo proc rec',
    contains: [

      // Top-level constructions.

      {
        beginKeywords: 'module', end: 'where',
        keywords: 'module where',
        contains: [LIST, COMMENT],
        illegal: '\\W\\.|;'
      },
      {
        begin: '\\bimport\\b', end: '$',
        keywords: 'import qualified as hiding',
        contains: [LIST, COMMENT],
        illegal: '\\W\\.|;'
      },

      {
        className: 'class',
        begin: '^(\\s*)?(class|instance)\\b', end: 'where',
        keywords: 'class family instance where',
        contains: [CONSTRUCTOR, LIST, COMMENT]
      },
      {
        className: 'class',
        begin: '\\b(data|(new)?type)\\b', end: '$',
        keywords: 'data family type newtype deriving',
        contains: [PRAGMA, CONSTRUCTOR, LIST, RECORD, COMMENT]
      },
      {
        beginKeywords: 'default', end: '$',
        contains: [CONSTRUCTOR, LIST, COMMENT]
      },
      {
        beginKeywords: 'infix infixl infixr', end: '$',
        contains: [hljs.C_NUMBER_MODE, COMMENT]
      },
      {
        begin: '\\bforeign\\b', end: '$',
        keywords: 'foreign import export ccall stdcall cplusplus jvm ' +
                  'dotnet safe unsafe',
        contains: [CONSTRUCTOR, hljs.QUOTE_STRING_MODE, COMMENT]
      },
      {
        className: 'meta',
        begin: '#!\\/usr\\/bin\\/env\ runhaskell', end: '$'
      },

      // "Whitespaces".

      PRAGMA,
      PREPROCESSOR,

      // Literals and names.

      // TODO: characters.
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      CONSTRUCTOR,
      hljs.inherit(hljs.TITLE_MODE, {begin: '^[_a-z][\\w\']*'}),

      COMMENT,

      {begin: '->|<-'} // No markup, relevance booster
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9oYXNrZWxsLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvaGFza2VsbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIENPTU1FTlQgPSB7XG4gICAgdmFyaWFudHM6IFtcbiAgICAgIGhsanMuQ09NTUVOVCgnLS0nLCAnJCcpLFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAney0nLFxuICAgICAgICAnLX0nLFxuICAgICAgICB7XG4gICAgICAgICAgY29udGFpbnM6IFsnc2VsZiddXG4gICAgICAgIH1cbiAgICAgIClcbiAgICBdXG4gIH07XG5cbiAgdmFyIFBSQUdNQSA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogJ3stIycsIGVuZDogJyMtfSdcbiAgfTtcblxuICB2YXIgUFJFUFJPQ0VTU09SID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAnXiMnLCBlbmQ6ICckJ1xuICB9O1xuXG4gIHZhciBDT05TVFJVQ1RPUiA9IHtcbiAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICBiZWdpbjogJ1xcXFxiW0EtWl1bXFxcXHdcXCddKicsIC8vIFRPRE86IG90aGVyIGNvbnN0cnVjdG9ycyAoYnVpbGQtaW4sIGluZml4KS5cbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICB2YXIgTElTVCA9IHtcbiAgICBiZWdpbjogJ1xcXFwoJywgZW5kOiAnXFxcXCknLFxuICAgIGlsbGVnYWw6ICdcIicsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIFBSQUdNQSxcbiAgICAgIFBSRVBST0NFU1NPUixcbiAgICAgIHtjbGFzc05hbWU6ICd0eXBlJywgYmVnaW46ICdcXFxcYltBLVpdW1xcXFx3XSooXFxcXCgoXFxcXC5cXFxcLnwsfFxcXFx3KylcXFxcKSk/J30sXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7YmVnaW46ICdbX2Etel1bXFxcXHdcXCddKid9KSxcbiAgICAgIENPTU1FTlRcbiAgICBdXG4gIH07XG5cbiAgdmFyIFJFQ09SRCA9IHtcbiAgICBiZWdpbjogJ3snLCBlbmQ6ICd9JyxcbiAgICBjb250YWluczogTElTVC5jb250YWluc1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydocyddLFxuICAgIGtleXdvcmRzOlxuICAgICAgJ2xldCBpbiBpZiB0aGVuIGVsc2UgY2FzZSBvZiB3aGVyZSBkbyBtb2R1bGUgaW1wb3J0IGhpZGluZyAnICtcbiAgICAgICdxdWFsaWZpZWQgdHlwZSBkYXRhIG5ld3R5cGUgZGVyaXZpbmcgY2xhc3MgaW5zdGFuY2UgYXMgZGVmYXVsdCAnICtcbiAgICAgICdpbmZpeCBpbmZpeGwgaW5maXhyIGZvcmVpZ24gZXhwb3J0IGNjYWxsIHN0ZGNhbGwgY3BsdXNwbHVzICcgK1xuICAgICAgJ2p2bSBkb3RuZXQgc2FmZSB1bnNhZmUgZmFtaWx5IGZvcmFsbCBtZG8gcHJvYyByZWMnLFxuICAgIGNvbnRhaW5zOiBbXG5cbiAgICAgIC8vIFRvcC1sZXZlbCBjb25zdHJ1Y3Rpb25zLlxuXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdtb2R1bGUnLCBlbmQ6ICd3aGVyZScsXG4gICAgICAgIGtleXdvcmRzOiAnbW9kdWxlIHdoZXJlJyxcbiAgICAgICAgY29udGFpbnM6IFtMSVNULCBDT01NRU5UXSxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxXXFxcXC58OydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFxcXGJpbXBvcnRcXFxcYicsIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3JkczogJ2ltcG9ydCBxdWFsaWZpZWQgYXMgaGlkaW5nJyxcbiAgICAgICAgY29udGFpbnM6IFtMSVNULCBDT01NRU5UXSxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxXXFxcXC58OydcbiAgICAgIH0sXG5cbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbjogJ14oXFxcXHMqKT8oY2xhc3N8aW5zdGFuY2UpXFxcXGInLCBlbmQ6ICd3aGVyZScsXG4gICAgICAgIGtleXdvcmRzOiAnY2xhc3MgZmFtaWx5IGluc3RhbmNlIHdoZXJlJyxcbiAgICAgICAgY29udGFpbnM6IFtDT05TVFJVQ1RPUiwgTElTVCwgQ09NTUVOVF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYihkYXRhfChuZXcpP3R5cGUpXFxcXGInLCBlbmQ6ICckJyxcbiAgICAgICAga2V5d29yZHM6ICdkYXRhIGZhbWlseSB0eXBlIG5ld3R5cGUgZGVyaXZpbmcnLFxuICAgICAgICBjb250YWluczogW1BSQUdNQSwgQ09OU1RSVUNUT1IsIExJU1QsIFJFQ09SRCwgQ09NTUVOVF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdkZWZhdWx0JywgZW5kOiAnJCcsXG4gICAgICAgIGNvbnRhaW5zOiBbQ09OU1RSVUNUT1IsIExJU1QsIENPTU1FTlRdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnaW5maXggaW5maXhsIGluZml4cicsIGVuZDogJyQnLFxuICAgICAgICBjb250YWluczogW2hsanMuQ19OVU1CRVJfTU9ERSwgQ09NTUVOVF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFxcXGJmb3JlaWduXFxcXGInLCBlbmQ6ICckJyxcbiAgICAgICAga2V5d29yZHM6ICdmb3JlaWduIGltcG9ydCBleHBvcnQgY2NhbGwgc3RkY2FsbCBjcGx1c3BsdXMganZtICcgK1xuICAgICAgICAgICAgICAgICAgJ2RvdG5ldCBzYWZlIHVuc2FmZScsXG4gICAgICAgIGNvbnRhaW5zOiBbQ09OU1RSVUNUT1IsIGhsanMuUVVPVEVfU1RSSU5HX01PREUsIENPTU1FTlRdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICcjIVxcXFwvdXNyXFxcXC9iaW5cXFxcL2VudlxcIHJ1bmhhc2tlbGwnLCBlbmQ6ICckJ1xuICAgICAgfSxcblxuICAgICAgLy8gXCJXaGl0ZXNwYWNlc1wiLlxuXG4gICAgICBQUkFHTUEsXG4gICAgICBQUkVQUk9DRVNTT1IsXG5cbiAgICAgIC8vIExpdGVyYWxzIGFuZCBuYW1lcy5cblxuICAgICAgLy8gVE9ETzogY2hhcmFjdGVycy5cbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICBDT05TVFJVQ1RPUixcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtiZWdpbjogJ15bX2Etel1bXFxcXHdcXCddKid9KSxcblxuICAgICAgQ09NTUVOVCxcblxuICAgICAge2JlZ2luOiAnLT58PC0nfSAvLyBObyBtYXJrdXAsIHJlbGV2YW5jZSBib29zdGVyXG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=