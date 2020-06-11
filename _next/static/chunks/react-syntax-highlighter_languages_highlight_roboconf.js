(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_roboconf"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/roboconf.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/roboconf.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var IDENTIFIER = '[a-zA-Z-_][^\\n{]+\\{';

  var PROPERTY = {
    className: 'attribute',
    begin: /[a-zA-Z-_]+/, end: /\s*:/, excludeEnd: true,
    starts: {
      end: ';',
      relevance: 0,
      contains: [
        {
          className: 'variable',
          begin: /\.[a-zA-Z-_]+/
        },
        {
          className: 'keyword',
          begin: /\(optional\)/
        }
      ]
    }
  };

  return {
    aliases: ['graph', 'instances'],
    case_insensitive: true,
    keywords: 'import',
    contains: [
      // Facet sections
      {
        begin: '^facet ' + IDENTIFIER,
        end: '}',
        keywords: 'facet',
        contains: [
          PROPERTY,
          hljs.HASH_COMMENT_MODE
        ]
      },

      // Instance sections
      {
        begin: '^\\s*instance of ' + IDENTIFIER,
        end: '}',
        keywords: 'name count channels instance-data instance-state instance of',
        illegal: /\S/,
        contains: [
          'self',
          PROPERTY,
          hljs.HASH_COMMENT_MODE
        ]
      },

      // Component sections
      {
        begin: '^' + IDENTIFIER,
        end: '}',
        contains: [
          PROPERTY,
          hljs.HASH_COMMENT_MODE
        ]
      },

      // Comments
      hljs.HASH_COMMENT_MODE
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9yb2JvY29uZi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3JvYm9jb25mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgSURFTlRJRklFUiA9ICdbYS16QS1aLV9dW15cXFxcbntdK1xcXFx7JztcblxuICB2YXIgUFJPUEVSVFkgPSB7XG4gICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICBiZWdpbjogL1thLXpBLVotX10rLywgZW5kOiAvXFxzKjovLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgIHN0YXJ0czoge1xuICAgICAgZW5kOiAnOycsXG4gICAgICByZWxldmFuY2U6IDAsXG4gICAgICBjb250YWluczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICAgIGJlZ2luOiAvXFwuW2EtekEtWi1fXSsvXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgICBiZWdpbjogL1xcKG9wdGlvbmFsXFwpL1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydncmFwaCcsICdpbnN0YW5jZXMnXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiAnaW1wb3J0JyxcbiAgICBjb250YWluczogW1xuICAgICAgLy8gRmFjZXQgc2VjdGlvbnNcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdeZmFjZXQgJyArIElERU5USUZJRVIsXG4gICAgICAgIGVuZDogJ30nLFxuICAgICAgICBrZXl3b3JkczogJ2ZhY2V0JyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBQUk9QRVJUWSxcbiAgICAgICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG5cbiAgICAgIC8vIEluc3RhbmNlIHNlY3Rpb25zXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXlxcXFxzKmluc3RhbmNlIG9mICcgKyBJREVOVElGSUVSLFxuICAgICAgICBlbmQ6ICd9JyxcbiAgICAgICAga2V5d29yZHM6ICduYW1lIGNvdW50IGNoYW5uZWxzIGluc3RhbmNlLWRhdGEgaW5zdGFuY2Utc3RhdGUgaW5zdGFuY2Ugb2YnLFxuICAgICAgICBpbGxlZ2FsOiAvXFxTLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAnc2VsZicsXG4gICAgICAgICAgUFJPUEVSVFksXG4gICAgICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuXG4gICAgICAvLyBDb21wb25lbnQgc2VjdGlvbnNcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdeJyArIElERU5USUZJRVIsXG4gICAgICAgIGVuZDogJ30nLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIFBST1BFUlRZLFxuICAgICAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcblxuICAgICAgLy8gQ29tbWVudHNcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREVcbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=