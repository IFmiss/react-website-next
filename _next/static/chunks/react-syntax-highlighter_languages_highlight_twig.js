(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_twig"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/twig.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/twig.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var PARAMS = {
    className: 'params',
    begin: '\\(', end: '\\)'
  };

  var FUNCTION_NAMES = 'attribute block constant cycle date dump include ' +
                  'max min parent random range source template_from_string';

  var FUNCTIONS = {
    beginKeywords: FUNCTION_NAMES,
    keywords: {name: FUNCTION_NAMES},
    relevance: 0,
    contains: [
      PARAMS
    ]
  };

  var FILTER = {
    begin: /\|[A-Za-z_]+:?/,
    keywords:
      'abs batch capitalize convert_encoding date date_modify default ' +
      'escape first format join json_encode keys last length lower ' +
      'merge nl2br number_format raw replace reverse round slice sort split ' +
      'striptags title trim upper url_encode',
    contains: [
      FUNCTIONS
    ]
  };

  var TAGS = 'autoescape block do embed extends filter flush for ' +
    'if import include macro sandbox set spaceless use verbatim';

  TAGS = TAGS + ' ' + TAGS.split(' ').map(function(t){return 'end' + t}).join(' ');

  return {
    aliases: ['craftcms'],
    case_insensitive: true,
    subLanguage: 'xml',
    contains: [
      hljs.COMMENT(/\{#/, /#}/),
      {
        className: 'template-tag',
        begin: /\{%/, end: /%}/,
        contains: [
          {
            className: 'name',
            begin: /\w+/,
            keywords: TAGS,
            starts: {
              endsWithParent: true,
              contains: [FILTER, FUNCTIONS],
              relevance: 0
            }
          }
        ]
      },
      {
        className: 'template-variable',
        begin: /\{\{/, end: /}}/,
        contains: ['self', FILTER, FUNCTIONS]
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF90d2lnLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdHdpZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIFBBUkFNUyA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKSdcbiAgfTtcblxuICB2YXIgRlVOQ1RJT05fTkFNRVMgPSAnYXR0cmlidXRlIGJsb2NrIGNvbnN0YW50IGN5Y2xlIGRhdGUgZHVtcCBpbmNsdWRlICcgK1xuICAgICAgICAgICAgICAgICAgJ21heCBtaW4gcGFyZW50IHJhbmRvbSByYW5nZSBzb3VyY2UgdGVtcGxhdGVfZnJvbV9zdHJpbmcnO1xuXG4gIHZhciBGVU5DVElPTlMgPSB7XG4gICAgYmVnaW5LZXl3b3JkczogRlVOQ1RJT05fTkFNRVMsXG4gICAga2V5d29yZHM6IHtuYW1lOiBGVU5DVElPTl9OQU1FU30sXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBQQVJBTVNcbiAgICBdXG4gIH07XG5cbiAgdmFyIEZJTFRFUiA9IHtcbiAgICBiZWdpbjogL1xcfFtBLVphLXpfXSs6Py8sXG4gICAga2V5d29yZHM6XG4gICAgICAnYWJzIGJhdGNoIGNhcGl0YWxpemUgY29udmVydF9lbmNvZGluZyBkYXRlIGRhdGVfbW9kaWZ5IGRlZmF1bHQgJyArXG4gICAgICAnZXNjYXBlIGZpcnN0IGZvcm1hdCBqb2luIGpzb25fZW5jb2RlIGtleXMgbGFzdCBsZW5ndGggbG93ZXIgJyArXG4gICAgICAnbWVyZ2UgbmwyYnIgbnVtYmVyX2Zvcm1hdCByYXcgcmVwbGFjZSByZXZlcnNlIHJvdW5kIHNsaWNlIHNvcnQgc3BsaXQgJyArXG4gICAgICAnc3RyaXB0YWdzIHRpdGxlIHRyaW0gdXBwZXIgdXJsX2VuY29kZScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIEZVTkNUSU9OU1xuICAgIF1cbiAgfTtcblxuICB2YXIgVEFHUyA9ICdhdXRvZXNjYXBlIGJsb2NrIGRvIGVtYmVkIGV4dGVuZHMgZmlsdGVyIGZsdXNoIGZvciAnICtcbiAgICAnaWYgaW1wb3J0IGluY2x1ZGUgbWFjcm8gc2FuZGJveCBzZXQgc3BhY2VsZXNzIHVzZSB2ZXJiYXRpbSc7XG5cbiAgVEFHUyA9IFRBR1MgKyAnICcgKyBUQUdTLnNwbGl0KCcgJykubWFwKGZ1bmN0aW9uKHQpe3JldHVybiAnZW5kJyArIHR9KS5qb2luKCcgJyk7XG5cbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ2NyYWZ0Y21zJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBzdWJMYW5ndWFnZTogJ3htbCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ09NTUVOVCgvXFx7Iy8sIC8jfS8pLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0ZW1wbGF0ZS10YWcnLFxuICAgICAgICBiZWdpbjogL1xceyUvLCBlbmQ6IC8lfS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbmFtZScsXG4gICAgICAgICAgICBiZWdpbjogL1xcdysvLFxuICAgICAgICAgICAga2V5d29yZHM6IFRBR1MsXG4gICAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbRklMVEVSLCBGVU5DVElPTlNdLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RlbXBsYXRlLXZhcmlhYmxlJyxcbiAgICAgICAgYmVnaW46IC9cXHtcXHsvLCBlbmQ6IC99fS8sXG4gICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnLCBGSUxURVIsIEZVTkNUSU9OU11cbiAgICAgIH1cbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9