(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_properties"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/properties.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/properties.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {

  // whitespaces: space, tab, formfeed
  var WS0 = '[ \\t\\f]*';
  var WS1 = '[ \\t\\f]+';
  // delimiter
  var DELIM = '(' + WS0+'[:=]'+WS0+ '|' + WS1 + ')';
  var KEY_ALPHANUM = '([^\\\\\\W:= \\t\\f\\n]|\\\\.)+';
  var KEY_OTHER = '([^\\\\:= \\t\\f\\n]|\\\\.)+';

  var DELIM_AND_VALUE = {
          // skip DELIM
          end: DELIM,
          relevance: 0,
          starts: {
            // value: everything until end of line (again, taking into account backslashes)
            className: 'string',
            end: /$/,
            relevance: 0,
            contains: [
              { begin: '\\\\\\n' }
            ]
          }
        };

  return {
    case_insensitive: true,
    illegal: /\S/,
    contains: [
      hljs.COMMENT('^\\s*[!#]', '$'),
      // key: everything until whitespace or = or : (taking into account backslashes)
      // case of a "normal" key
      {
        begin: KEY_ALPHANUM + DELIM,
        returnBegin: true,
        contains: [
          {
            className: 'attr',
            begin: KEY_ALPHANUM,
            endsParent: true,
            relevance: 0
          }
        ],
        starts: DELIM_AND_VALUE
      },
      // case of key containing non-alphanumeric chars => relevance = 0
      {
        begin: KEY_OTHER + DELIM,
        returnBegin: true,
        relevance: 0,
        contains: [
          {
            className: 'meta',
            begin: KEY_OTHER,
            endsParent: true,
            relevance: 0
          }
        ],
        starts: DELIM_AND_VALUE
      },
      // case of an empty key
      {
        className: 'attr',
        relevance: 0,
        begin: KEY_OTHER + WS0 + '$'
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9wcm9wZXJ0aWVzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcHJvcGVydGllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcblxuICAvLyB3aGl0ZXNwYWNlczogc3BhY2UsIHRhYiwgZm9ybWZlZWRcbiAgdmFyIFdTMCA9ICdbIFxcXFx0XFxcXGZdKic7XG4gIHZhciBXUzEgPSAnWyBcXFxcdFxcXFxmXSsnO1xuICAvLyBkZWxpbWl0ZXJcbiAgdmFyIERFTElNID0gJygnICsgV1MwKydbOj1dJytXUzArICd8JyArIFdTMSArICcpJztcbiAgdmFyIEtFWV9BTFBIQU5VTSA9ICcoW15cXFxcXFxcXFxcXFxXOj0gXFxcXHRcXFxcZlxcXFxuXXxcXFxcXFxcXC4pKyc7XG4gIHZhciBLRVlfT1RIRVIgPSAnKFteXFxcXFxcXFw6PSBcXFxcdFxcXFxmXFxcXG5dfFxcXFxcXFxcLikrJztcblxuICB2YXIgREVMSU1fQU5EX1ZBTFVFID0ge1xuICAgICAgICAgIC8vIHNraXAgREVMSU1cbiAgICAgICAgICBlbmQ6IERFTElNLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgIC8vIHZhbHVlOiBldmVyeXRoaW5nIHVudGlsIGVuZCBvZiBsaW5lIChhZ2FpbiwgdGFraW5nIGludG8gYWNjb3VudCBiYWNrc2xhc2hlcylcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICBlbmQ6IC8kLyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHsgYmVnaW46ICdcXFxcXFxcXFxcXFxuJyB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBpbGxlZ2FsOiAvXFxTLyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DT01NRU5UKCdeXFxcXHMqWyEjXScsICckJyksXG4gICAgICAvLyBrZXk6IGV2ZXJ5dGhpbmcgdW50aWwgd2hpdGVzcGFjZSBvciA9IG9yIDogKHRha2luZyBpbnRvIGFjY291bnQgYmFja3NsYXNoZXMpXG4gICAgICAvLyBjYXNlIG9mIGEgXCJub3JtYWxcIiBrZXlcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IEtFWV9BTFBIQU5VTSArIERFTElNLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICAgICAgICAgIGJlZ2luOiBLRVlfQUxQSEFOVU0sXG4gICAgICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGFydHM6IERFTElNX0FORF9WQUxVRVxuICAgICAgfSxcbiAgICAgIC8vIGNhc2Ugb2Yga2V5IGNvbnRhaW5pbmcgbm9uLWFscGhhbnVtZXJpYyBjaGFycyA9PiByZWxldmFuY2UgPSAwXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBLRVlfT1RIRVIgKyBERUxJTSxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgIGJlZ2luOiBLRVlfT1RIRVIsXG4gICAgICAgICAgICBlbmRzUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGFydHM6IERFTElNX0FORF9WQUxVRVxuICAgICAgfSxcbiAgICAgIC8vIGNhc2Ugb2YgYW4gZW1wdHkga2V5XG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGJlZ2luOiBLRVlfT1RIRVIgKyBXUzAgKyAnJCdcbiAgICAgIH1cbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=