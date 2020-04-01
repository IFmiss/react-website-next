(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_haxe"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/haxe.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/haxe.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var IDENT_RE = '[a-zA-Z_$][a-zA-Z0-9_$]*';
  var IDENT_FUNC_RETURN_TYPE_RE = '([*]|[a-zA-Z_$][a-zA-Z0-9_$]*)';

  var HAXE_BASIC_TYPES = 'Int Float String Bool Dynamic Void Array ';

  return {
    aliases: ['hx'],
    keywords: {
      keyword: 'break case cast catch continue default do dynamic else enum extern ' +
               'for function here if import in inline never new override package private get set ' +
               'public return static super switch this throw trace try typedef untyped using var while ' +
               HAXE_BASIC_TYPES,
      built_in:
        'trace this',
      literal:
        'true false null _'
    },
    contains: [
      { className: 'string', // interpolate-able strings
        begin: '\'', end: '\'',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          { className: 'subst', // interpolation
            begin: '\\$\\{', end: '\\}'
          },
          { className: 'subst', // interpolation
            begin: '\\$', end: '\\W}'
          }
        ]
      },
      hljs.QUOTE_STRING_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_NUMBER_MODE,
      { className: 'meta', // compiler meta
        begin: '@:', end: '$'
      },
      { className: 'meta', // compiler conditionals
        begin: '#', end: '$',
        keywords: {'meta-keyword': 'if else elseif end error'}
      },
      { className: 'type', // function types
        begin: ':[ \t]*', end: '[^A-Za-z0-9_ \t\\->]',
        excludeBegin: true, excludeEnd: true,
        relevance: 0
      },
      { className: 'type', // types
        begin: ':[ \t]*', end: '\\W',
        excludeBegin: true, excludeEnd: true
      },
      { className: 'type', // instantiation
        begin: 'new *', end: '\\W',
        excludeBegin: true, excludeEnd: true
      },
      { className: 'class', // enums
        beginKeywords: 'enum', end: '\\{',
        contains: [
          hljs.TITLE_MODE
        ]
      },
      { className: 'class', // abstracts
        beginKeywords: 'abstract', end: '[\\{$]',
        contains: [
          { className: 'type',
            begin: '\\(', end: '\\)',
            excludeBegin: true, excludeEnd: true
          },
          { className: 'type',
            begin: 'from +', end: '\\W',
            excludeBegin: true, excludeEnd: true
          },
          { className: 'type',
            begin: 'to +', end: '\\W',
            excludeBegin: true, excludeEnd: true
          },
          hljs.TITLE_MODE
        ],
        keywords: {
          keyword: 'abstract from to'
        }
      },
      { className: 'class', // classes
        begin: '\\b(class|interface) +', end: '[\\{$]',  excludeEnd: true,
        keywords: 'class interface',
        contains: [
          { className: 'keyword',
            begin: '\\b(extends|implements) +',
            keywords: 'extends implements',
            contains: [
              {
                className: 'type',
                begin: hljs.IDENT_RE,
                relevance: 0
              }
            ]
          },
          hljs.TITLE_MODE
        ]
      },
      { className: 'function',
        beginKeywords: 'function', end: '\\(', excludeEnd: true,
        illegal: '\\S',
        contains: [
          hljs.TITLE_MODE
        ]
      }
    ],
    illegal: /<\//
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9oYXhlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvaGF4ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIElERU5UX1JFID0gJ1thLXpBLVpfJF1bYS16QS1aMC05XyRdKic7XG4gIHZhciBJREVOVF9GVU5DX1JFVFVSTl9UWVBFX1JFID0gJyhbKl18W2EtekEtWl8kXVthLXpBLVowLTlfJF0qKSc7XG5cbiAgdmFyIEhBWEVfQkFTSUNfVFlQRVMgPSAnSW50IEZsb2F0IFN0cmluZyBCb29sIER5bmFtaWMgVm9pZCBBcnJheSAnO1xuXG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydoeCddLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOiAnYnJlYWsgY2FzZSBjYXN0IGNhdGNoIGNvbnRpbnVlIGRlZmF1bHQgZG8gZHluYW1pYyBlbHNlIGVudW0gZXh0ZXJuICcgK1xuICAgICAgICAgICAgICAgJ2ZvciBmdW5jdGlvbiBoZXJlIGlmIGltcG9ydCBpbiBpbmxpbmUgbmV2ZXIgbmV3IG92ZXJyaWRlIHBhY2thZ2UgcHJpdmF0ZSBnZXQgc2V0ICcgK1xuICAgICAgICAgICAgICAgJ3B1YmxpYyByZXR1cm4gc3RhdGljIHN1cGVyIHN3aXRjaCB0aGlzIHRocm93IHRyYWNlIHRyeSB0eXBlZGVmIHVudHlwZWQgdXNpbmcgdmFyIHdoaWxlICcgK1xuICAgICAgICAgICAgICAgSEFYRV9CQVNJQ19UWVBFUyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAndHJhY2UgdGhpcycsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAndHJ1ZSBmYWxzZSBudWxsIF8nXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgeyBjbGFzc05hbWU6ICdzdHJpbmcnLCAvLyBpbnRlcnBvbGF0ZS1hYmxlIHN0cmluZ3NcbiAgICAgICAgYmVnaW46ICdcXCcnLCBlbmQ6ICdcXCcnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3N1YnN0JywgLy8gaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgYmVnaW46ICdcXFxcJFxcXFx7JywgZW5kOiAnXFxcXH0nXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3N1YnN0JywgLy8gaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgYmVnaW46ICdcXFxcJCcsIGVuZDogJ1xcXFxXfSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIHsgY2xhc3NOYW1lOiAnbWV0YScsIC8vIGNvbXBpbGVyIG1ldGFcbiAgICAgICAgYmVnaW46ICdAOicsIGVuZDogJyQnXG4gICAgICB9LFxuICAgICAgeyBjbGFzc05hbWU6ICdtZXRhJywgLy8gY29tcGlsZXIgY29uZGl0aW9uYWxzXG4gICAgICAgIGJlZ2luOiAnIycsIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3JkczogeydtZXRhLWtleXdvcmQnOiAnaWYgZWxzZSBlbHNlaWYgZW5kIGVycm9yJ31cbiAgICAgIH0sXG4gICAgICB7IGNsYXNzTmFtZTogJ3R5cGUnLCAvLyBmdW5jdGlvbiB0eXBlc1xuICAgICAgICBiZWdpbjogJzpbIFxcdF0qJywgZW5kOiAnW15BLVphLXowLTlfIFxcdFxcXFwtPl0nLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHsgY2xhc3NOYW1lOiAndHlwZScsIC8vIHR5cGVzXG4gICAgICAgIGJlZ2luOiAnOlsgXFx0XSonLCBlbmQ6ICdcXFxcVycsXG4gICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSwgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHsgY2xhc3NOYW1lOiAndHlwZScsIC8vIGluc3RhbnRpYXRpb25cbiAgICAgICAgYmVnaW46ICduZXcgKicsIGVuZDogJ1xcXFxXJyxcbiAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLCBleGNsdWRlRW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgeyBjbGFzc05hbWU6ICdjbGFzcycsIC8vIGVudW1zXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdlbnVtJywgZW5kOiAnXFxcXHsnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuVElUTEVfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgeyBjbGFzc05hbWU6ICdjbGFzcycsIC8vIGFic3RyYWN0c1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnYWJzdHJhY3QnLCBlbmQ6ICdbXFxcXHskXScsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKScsXG4gICAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgICAgICBiZWdpbjogJ2Zyb20gKycsIGVuZDogJ1xcXFxXJyxcbiAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSwgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgIGJlZ2luOiAndG8gKycsIGVuZDogJ1xcXFxXJyxcbiAgICAgICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSwgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5USVRMRV9NT0RFXG4gICAgICAgIF0sXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAga2V5d29yZDogJ2Fic3RyYWN0IGZyb20gdG8nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7IGNsYXNzTmFtZTogJ2NsYXNzJywgLy8gY2xhc3Nlc1xuICAgICAgICBiZWdpbjogJ1xcXFxiKGNsYXNzfGludGVyZmFjZSkgKycsIGVuZDogJ1tcXFxceyRdJywgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGtleXdvcmRzOiAnY2xhc3MgaW50ZXJmYWNlJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICAgICAgYmVnaW46ICdcXFxcYihleHRlbmRzfGltcGxlbWVudHMpICsnLFxuICAgICAgICAgICAga2V5d29yZHM6ICdleHRlbmRzIGltcGxlbWVudHMnLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiBobGpzLklERU5UX1JFLFxuICAgICAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLlRJVExFX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24nLCBlbmQ6ICdcXFxcKCcsIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcUycsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdLFxuICAgIGlsbGVnYWw6IC88XFwvL1xuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9