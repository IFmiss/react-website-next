(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_php"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/php.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/php.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var VARIABLE = {
    begin: '\\$+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*'
  };
  var PREPROCESSOR = {
    className: 'meta', begin: /<\?(php)?|\?>/
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, PREPROCESSOR],
    variants: [
      {
        begin: 'b"', end: '"'
      },
      {
        begin: 'b\'', end: '\''
      },
      hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null})
    ]
  };
  var NUMBER = {variants: [hljs.BINARY_NUMBER_MODE, hljs.C_NUMBER_MODE]};
  return {
    aliases: ['php', 'php3', 'php4', 'php5', 'php6', 'php7'],
    case_insensitive: true,
    keywords:
      'and include_once list abstract global private echo interface as static endswitch ' +
      'array null if endwhile or const for endforeach self var while isset public ' +
      'protected exit foreach throw elseif include __FILE__ empty require_once do xor ' +
      'return parent clone use __CLASS__ __LINE__ else break print eval new ' +
      'catch __METHOD__ case exception default die require __FUNCTION__ ' +
      'enddeclare final try switch continue endfor endif declare unset true false ' +
      'trait goto instanceof insteadof __DIR__ __NAMESPACE__ ' +
      'yield finally',
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.COMMENT('//', '$', {contains: [PREPROCESSOR]}),
      hljs.COMMENT(
        '/\\*',
        '\\*/',
        {
          contains: [
            {
              className: 'doctag',
              begin: '@[A-Za-z]+'
            }
          ]
        }
      ),
      hljs.COMMENT(
        '__halt_compiler.+?;',
        false,
        {
          endsWithParent: true,
          keywords: '__halt_compiler',
          lexemes: hljs.UNDERSCORE_IDENT_RE
        }
      ),
      {
        className: 'string',
        begin: /<<<['"]?\w+['"]?$/, end: /^\w+;?$/,
        contains: [
          hljs.BACKSLASH_ESCAPE,
          {
            className: 'subst',
            variants: [
              {begin: /\$\w+/},
              {begin: /\{\$/, end: /\}/}
            ]
          }
        ]
      },
      PREPROCESSOR,
      {
        className: 'keyword', begin: /\$this\b/
      },
      VARIABLE,
      {
        // swallow composed identifiers to avoid parsing them as keywords
        begin: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
      },
      {
        className: 'function',
        beginKeywords: 'function', end: /[;{]/, excludeEnd: true,
        illegal: '\\$|\\[|%',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          {
            className: 'params',
            begin: '\\(', end: '\\)',
            contains: [
              'self',
              VARIABLE,
              hljs.C_BLOCK_COMMENT_MODE,
              STRING,
              NUMBER
            ]
          }
        ]
      },
      {
        className: 'class',
        beginKeywords: 'class interface', end: '{', excludeEnd: true,
        illegal: /[:\(\$"]/,
        contains: [
          {beginKeywords: 'extends implements'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        beginKeywords: 'namespace', end: ';',
        illegal: /[\.']/,
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      {
        beginKeywords: 'use', end: ';',
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      {
        begin: '=>' // No markup, just a relevance booster
      },
      STRING,
      NUMBER
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9waHAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9waHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBWQVJJQUJMRSA9IHtcbiAgICBiZWdpbjogJ1xcXFwkK1thLXpBLVpfXFx4N2YtXFx4ZmZdW2EtekEtWjAtOV9cXHg3Zi1cXHhmZl0qJ1xuICB9O1xuICB2YXIgUFJFUFJPQ0VTU09SID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLCBiZWdpbjogLzxcXD8ocGhwKT98XFw/Pi9cbiAgfTtcbiAgdmFyIFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFLCBQUkVQUk9DRVNTT1JdLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnYlwiJywgZW5kOiAnXCInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ2JcXCcnLCBlbmQ6ICdcXCcnXG4gICAgICB9LFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuQVBPU19TVFJJTkdfTU9ERSwge2lsbGVnYWw6IG51bGx9KSxcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7aWxsZWdhbDogbnVsbH0pXG4gICAgXVxuICB9O1xuICB2YXIgTlVNQkVSID0ge3ZhcmlhbnRzOiBbaGxqcy5CSU5BUllfTlVNQkVSX01PREUsIGhsanMuQ19OVU1CRVJfTU9ERV19O1xuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsncGhwJywgJ3BocDMnLCAncGhwNCcsICdwaHA1JywgJ3BocDYnLCAncGhwNyddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAga2V5d29yZHM6XG4gICAgICAnYW5kIGluY2x1ZGVfb25jZSBsaXN0IGFic3RyYWN0IGdsb2JhbCBwcml2YXRlIGVjaG8gaW50ZXJmYWNlIGFzIHN0YXRpYyBlbmRzd2l0Y2ggJyArXG4gICAgICAnYXJyYXkgbnVsbCBpZiBlbmR3aGlsZSBvciBjb25zdCBmb3IgZW5kZm9yZWFjaCBzZWxmIHZhciB3aGlsZSBpc3NldCBwdWJsaWMgJyArXG4gICAgICAncHJvdGVjdGVkIGV4aXQgZm9yZWFjaCB0aHJvdyBlbHNlaWYgaW5jbHVkZSBfX0ZJTEVfXyBlbXB0eSByZXF1aXJlX29uY2UgZG8geG9yICcgK1xuICAgICAgJ3JldHVybiBwYXJlbnQgY2xvbmUgdXNlIF9fQ0xBU1NfXyBfX0xJTkVfXyBlbHNlIGJyZWFrIHByaW50IGV2YWwgbmV3ICcgK1xuICAgICAgJ2NhdGNoIF9fTUVUSE9EX18gY2FzZSBleGNlcHRpb24gZGVmYXVsdCBkaWUgcmVxdWlyZSBfX0ZVTkNUSU9OX18gJyArXG4gICAgICAnZW5kZGVjbGFyZSBmaW5hbCB0cnkgc3dpdGNoIGNvbnRpbnVlIGVuZGZvciBlbmRpZiBkZWNsYXJlIHVuc2V0IHRydWUgZmFsc2UgJyArXG4gICAgICAndHJhaXQgZ290byBpbnN0YW5jZW9mIGluc3RlYWRvZiBfX0RJUl9fIF9fTkFNRVNQQUNFX18gJyArXG4gICAgICAneWllbGQgZmluYWxseScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNPTU1FTlQoJy8vJywgJyQnLCB7Y29udGFpbnM6IFtQUkVQUk9DRVNTT1JdfSksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICcvXFxcXConLFxuICAgICAgICAnXFxcXCovJyxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2RvY3RhZycsXG4gICAgICAgICAgICAgIGJlZ2luOiAnQFtBLVphLXpdKydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICdfX2hhbHRfY29tcGlsZXIuKz87JyxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHtcbiAgICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICAgICAgICBrZXl3b3JkczogJ19faGFsdF9jb21waWxlcicsXG4gICAgICAgICAgbGV4ZW1lczogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAvPDw8WydcIl0/XFx3K1snXCJdPyQvLCBlbmQ6IC9eXFx3Kzs/JC8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHtiZWdpbjogL1xcJFxcdysvfSxcbiAgICAgICAgICAgICAge2JlZ2luOiAvXFx7XFwkLywgZW5kOiAvXFx9L31cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBQUkVQUk9DRVNTT1IsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLCBiZWdpbjogL1xcJHRoaXNcXGIvXG4gICAgICB9LFxuICAgICAgVkFSSUFCTEUsXG4gICAgICB7XG4gICAgICAgIC8vIHN3YWxsb3cgY29tcG9zZWQgaWRlbnRpZmllcnMgdG8gYXZvaWQgcGFyc2luZyB0aGVtIGFzIGtleXdvcmRzXG4gICAgICAgIGJlZ2luOiAvKDo6fC0+KStbYS16QS1aX1xceDdmLVxceGZmXVthLXpBLVowLTlfXFx4N2YtXFx4ZmZdKi9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2Z1bmN0aW9uJywgZW5kOiAvWzt7XS8sIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcJHxcXFxcW3wlJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICdzZWxmJyxcbiAgICAgICAgICAgICAgVkFSSUFCTEUsXG4gICAgICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgICAgIFNUUklORyxcbiAgICAgICAgICAgICAgTlVNQkVSXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBpbnRlcmZhY2UnLCBlbmQ6ICd7JywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgaWxsZWdhbDogL1s6XFwoXFwkXCJdLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7YmVnaW5LZXl3b3JkczogJ2V4dGVuZHMgaW1wbGVtZW50cyd9LFxuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICduYW1lc3BhY2UnLCBlbmQ6ICc7JyxcbiAgICAgICAgaWxsZWdhbDogL1tcXC4nXS8sXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAndXNlJywgZW5kOiAnOycsXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJz0+JyAvLyBObyBtYXJrdXAsIGp1c3QgYSByZWxldmFuY2UgYm9vc3RlclxuICAgICAgfSxcbiAgICAgIFNUUklORyxcbiAgICAgIE5VTUJFUlxuICAgIF1cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==