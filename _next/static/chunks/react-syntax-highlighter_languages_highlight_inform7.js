(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_inform7"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/inform7.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/inform7.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var START_BRACKET = '\\[';
  var END_BRACKET = '\\]';
  return {
    aliases: ['i7'],
    case_insensitive: true,
    keywords: {
      // Some keywords more or less unique to I7, for relevance.
      keyword:
        // kind:
        'thing room person man woman animal container ' +
        'supporter backdrop door ' +
        // characteristic:
        'scenery open closed locked inside gender ' +
        // verb:
        'is are say understand ' +
        // misc keyword:
        'kind of rule'
    },
    contains: [
      {
        className: 'string',
        begin: '"', end: '"',
        relevance: 0,
        contains: [
          {
            className: 'subst',
            begin: START_BRACKET, end: END_BRACKET
          }
        ]
      },
      {
        className: 'section',
        begin: /^(Volume|Book|Part|Chapter|Section|Table)\b/,
        end: '$'
      },
      {
        // Rule definition
        // This is here for relevance.
        begin: /^(Check|Carry out|Report|Instead of|To|Rule|When|Before|After)\b/,
        end: ':',
        contains: [
          {
            //Rule name
            begin: '\\(This', end: '\\)'
          }
        ]
      },
      {
        className: 'comment',
        begin: START_BRACKET, end: END_BRACKET,
        contains: ['self']
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9pbmZvcm03LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvaW5mb3JtNy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIFNUQVJUX0JSQUNLRVQgPSAnXFxcXFsnO1xuICB2YXIgRU5EX0JSQUNLRVQgPSAnXFxcXF0nO1xuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsnaTcnXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICAvLyBTb21lIGtleXdvcmRzIG1vcmUgb3IgbGVzcyB1bmlxdWUgdG8gSTcsIGZvciByZWxldmFuY2UuXG4gICAgICBrZXl3b3JkOlxuICAgICAgICAvLyBraW5kOlxuICAgICAgICAndGhpbmcgcm9vbSBwZXJzb24gbWFuIHdvbWFuIGFuaW1hbCBjb250YWluZXIgJyArXG4gICAgICAgICdzdXBwb3J0ZXIgYmFja2Ryb3AgZG9vciAnICtcbiAgICAgICAgLy8gY2hhcmFjdGVyaXN0aWM6XG4gICAgICAgICdzY2VuZXJ5IG9wZW4gY2xvc2VkIGxvY2tlZCBpbnNpZGUgZ2VuZGVyICcgK1xuICAgICAgICAvLyB2ZXJiOlxuICAgICAgICAnaXMgYXJlIHNheSB1bmRlcnN0YW5kICcgK1xuICAgICAgICAvLyBtaXNjIGtleXdvcmQ6XG4gICAgICAgICdraW5kIG9mIHJ1bGUnXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1wiJywgZW5kOiAnXCInLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgICAgICAgICAgYmVnaW46IFNUQVJUX0JSQUNLRVQsIGVuZDogRU5EX0JSQUNLRVRcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NlY3Rpb24nLFxuICAgICAgICBiZWdpbjogL14oVm9sdW1lfEJvb2t8UGFydHxDaGFwdGVyfFNlY3Rpb258VGFibGUpXFxiLyxcbiAgICAgICAgZW5kOiAnJCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFJ1bGUgZGVmaW5pdGlvblxuICAgICAgICAvLyBUaGlzIGlzIGhlcmUgZm9yIHJlbGV2YW5jZS5cbiAgICAgICAgYmVnaW46IC9eKENoZWNrfENhcnJ5IG91dHxSZXBvcnR8SW5zdGVhZCBvZnxUb3xSdWxlfFdoZW58QmVmb3JlfEFmdGVyKVxcYi8sXG4gICAgICAgIGVuZDogJzonLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vUnVsZSBuYW1lXG4gICAgICAgICAgICBiZWdpbjogJ1xcXFwoVGhpcycsIGVuZDogJ1xcXFwpJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY29tbWVudCcsXG4gICAgICAgIGJlZ2luOiBTVEFSVF9CUkFDS0VULCBlbmQ6IEVORF9CUkFDS0VULFxuICAgICAgICBjb250YWluczogWydzZWxmJ11cbiAgICAgIH1cbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9