(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_monkey"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/monkey.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/monkey.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var NUMBER = {
    className: 'number', relevance: 0,
    variants: [
      {
        begin: '[$][a-fA-F0-9]+'
      },
      hljs.NUMBER_MODE
    ]
  };

  return {
    case_insensitive: true,
    keywords: {
      keyword: 'public private property continue exit extern new try catch ' +
        'eachin not abstract final select case default const local global field ' +
        'end if then else elseif endif while wend repeat until forever for ' +
        'to step next return module inline throw import',

      built_in: 'DebugLog DebugStop Error Print ACos ACosr ASin ASinr ATan ATan2 ATan2r ATanr Abs Abs Ceil ' +
        'Clamp Clamp Cos Cosr Exp Floor Log Max Max Min Min Pow Sgn Sgn Sin Sinr Sqrt Tan Tanr Seed PI HALFPI TWOPI',

      literal: 'true false null and or shl shr mod'
    },
    illegal: /\/\*/,
    contains: [
      hljs.COMMENT('#rem', '#end'),
      hljs.COMMENT(
        "'",
        '$',
        {
          relevance: 0
        }
      ),
      {
        className: 'function',
        beginKeywords: 'function method', end: '[(=:]|$',
        illegal: /\n/,
        contains: [
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        className: 'class',
        beginKeywords: 'class interface', end: '$',
        contains: [
          {
            beginKeywords: 'extends implements'
          },
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        className: 'built_in',
        begin: '\\b(self|super)\\b'
      },
      {
        className: 'meta',
        begin: '\\s*#', end: '$',
        keywords: {'meta-keyword': 'if else elseif endif end then'}
      },
      {
        className: 'meta',
        begin: '^\\s*strict\\b'
      },
      {
        beginKeywords: 'alias', end: '=',
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      hljs.QUOTE_STRING_MODE,
      NUMBER
    ]
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9tb25rZXkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9tb25rZXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBOVU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJywgcmVsZXZhbmNlOiAwLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnWyRdW2EtZkEtRjAtOV0rJ1xuICAgICAgfSxcbiAgICAgIGhsanMuTlVNQkVSX01PREVcbiAgICBdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOiAncHVibGljIHByaXZhdGUgcHJvcGVydHkgY29udGludWUgZXhpdCBleHRlcm4gbmV3IHRyeSBjYXRjaCAnICtcbiAgICAgICAgJ2VhY2hpbiBub3QgYWJzdHJhY3QgZmluYWwgc2VsZWN0IGNhc2UgZGVmYXVsdCBjb25zdCBsb2NhbCBnbG9iYWwgZmllbGQgJyArXG4gICAgICAgICdlbmQgaWYgdGhlbiBlbHNlIGVsc2VpZiBlbmRpZiB3aGlsZSB3ZW5kIHJlcGVhdCB1bnRpbCBmb3JldmVyIGZvciAnICtcbiAgICAgICAgJ3RvIHN0ZXAgbmV4dCByZXR1cm4gbW9kdWxlIGlubGluZSB0aHJvdyBpbXBvcnQnLFxuXG4gICAgICBidWlsdF9pbjogJ0RlYnVnTG9nIERlYnVnU3RvcCBFcnJvciBQcmludCBBQ29zIEFDb3NyIEFTaW4gQVNpbnIgQVRhbiBBVGFuMiBBVGFuMnIgQVRhbnIgQWJzIEFicyBDZWlsICcgK1xuICAgICAgICAnQ2xhbXAgQ2xhbXAgQ29zIENvc3IgRXhwIEZsb29yIExvZyBNYXggTWF4IE1pbiBNaW4gUG93IFNnbiBTZ24gU2luIFNpbnIgU3FydCBUYW4gVGFuciBTZWVkIFBJIEhBTEZQSSBUV09QSScsXG5cbiAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlIG51bGwgYW5kIG9yIHNobCBzaHIgbW9kJ1xuICAgIH0sXG4gICAgaWxsZWdhbDogL1xcL1xcKi8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ09NTUVOVCgnI3JlbScsICcjZW5kJyksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgIFwiJ1wiLFxuICAgICAgICAnJCcsXG4gICAgICAgIHtcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24gbWV0aG9kJywgZW5kOiAnWyg9Ol18JCcsXG4gICAgICAgIGlsbGVnYWw6IC9cXG4vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzIGludGVyZmFjZScsIGVuZDogJyQnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luS2V5d29yZHM6ICdleHRlbmRzIGltcGxlbWVudHMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOiAnXFxcXGIoc2VsZnxzdXBlcilcXFxcYidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ1xcXFxzKiMnLCBlbmQ6ICckJyxcbiAgICAgICAga2V5d29yZHM6IHsnbWV0YS1rZXl3b3JkJzogJ2lmIGVsc2UgZWxzZWlmIGVuZGlmIGVuZCB0aGVuJ31cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ15cXFxccypzdHJpY3RcXFxcYidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdhbGlhcycsIGVuZDogJz0nLFxuICAgICAgICBjb250YWluczogW2hsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXVxuICAgICAgfSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBOVU1CRVJcbiAgICBdXG4gIH1cbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=