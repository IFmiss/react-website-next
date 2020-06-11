(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_diff"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/diff.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/diff.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    aliases: ['patch'],
    contains: [
      {
        className: 'meta',
        relevance: 10,
        variants: [
          {begin: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/},
          {begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/},
          {begin: /^\-\-\- +\d+,\d+ +\-\-\-\-$/}
        ]
      },
      {
        className: 'comment',
        variants: [
          {begin: /Index: /, end: /$/},
          {begin: /={3,}/, end: /$/},
          {begin: /^\-{3}/, end: /$/},
          {begin: /^\*{3} /, end: /$/},
          {begin: /^\+{3}/, end: /$/},
          {begin: /\*{5}/, end: /\*{5}$/}
        ]
      },
      {
        className: 'addition',
        begin: '^\\+', end: '$'
      },
      {
        className: 'deletion',
        begin: '^\\-', end: '$'
      },
      {
        className: 'addition',
        begin: '^\\!', end: '$'
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9kaWZmLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZGlmZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ3BhdGNoJ10sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIHJlbGV2YW5jZTogMTAsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge2JlZ2luOiAvXkBAICtcXC1cXGQrLFxcZCsgK1xcK1xcZCssXFxkKyArQEAkL30sXG4gICAgICAgICAge2JlZ2luOiAvXlxcKlxcKlxcKiArXFxkKyxcXGQrICtcXCpcXCpcXCpcXCokL30sXG4gICAgICAgICAge2JlZ2luOiAvXlxcLVxcLVxcLSArXFxkKyxcXGQrICtcXC1cXC1cXC1cXC0kL31cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY29tbWVudCcsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge2JlZ2luOiAvSW5kZXg6IC8sIGVuZDogLyQvfSxcbiAgICAgICAgICB7YmVnaW46IC89ezMsfS8sIGVuZDogLyQvfSxcbiAgICAgICAgICB7YmVnaW46IC9eXFwtezN9LywgZW5kOiAvJC99LFxuICAgICAgICAgIHtiZWdpbjogL15cXCp7M30gLywgZW5kOiAvJC99LFxuICAgICAgICAgIHtiZWdpbjogL15cXCt7M30vLCBlbmQ6IC8kL30sXG4gICAgICAgICAge2JlZ2luOiAvXFwqezV9LywgZW5kOiAvXFwqezV9JC99XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2FkZGl0aW9uJyxcbiAgICAgICAgYmVnaW46ICdeXFxcXCsnLCBlbmQ6ICckJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZGVsZXRpb24nLFxuICAgICAgICBiZWdpbjogJ15cXFxcLScsIGVuZDogJyQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhZGRpdGlvbicsXG4gICAgICAgIGJlZ2luOiAnXlxcXFwhJywgZW5kOiAnJCdcbiAgICAgIH1cbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=