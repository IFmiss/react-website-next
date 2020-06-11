(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_tex"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/tex.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/tex.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var COMMAND = {
    className: 'tag',
    begin: /\\/,
    relevance: 0,
    contains: [
      {
        className: 'name',
        variants: [
          {begin: /[a-zA-Z\u0430-\u044f\u0410-\u042f]+[*]?/},
          {begin: /[^a-zA-Z\u0430-\u044f\u0410-\u042f0-9]/}
        ],
        starts: {
          endsWithParent: true,
          relevance: 0,
          contains: [
            {
              className: 'string', // because it looks like attributes in HTML tags
              variants: [
                {begin: /\[/, end: /\]/},
                {begin: /\{/, end: /\}/}
              ]
            },
            {
              begin: /\s*=\s*/, endsWithParent: true,
              relevance: 0,
              contains: [
                {
                  className: 'number',
                  begin: /-?\d*\.?\d+(pt|pc|mm|cm|in|dd|cc|ex|em)?/
                }
              ]
            }
          ]
        }
      }
    ]
  };

  return {
    contains: [
      COMMAND,
      {
        className: 'formula',
        contains: [COMMAND],
        relevance: 0,
        variants: [
          {begin: /\$\$/, end: /\$\$/},
          {begin: /\$/, end: /\$/}
        ]
      },
      hljs.COMMENT(
        '%',
        '$',
        {
          relevance: 0
        }
      )
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF90ZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy90ZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBDT01NQU5EID0ge1xuICAgIGNsYXNzTmFtZTogJ3RhZycsXG4gICAgYmVnaW46IC9cXFxcLyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbmFtZScsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge2JlZ2luOiAvW2EtekEtWlxcdTA0MzAtXFx1MDQ0ZlxcdTA0MTAtXFx1MDQyZl0rWypdPy99LFxuICAgICAgICAgIHtiZWdpbjogL1teYS16QS1aXFx1MDQzMC1cXHUwNDRmXFx1MDQxMC1cXHUwNDJmMC05XS99XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLCAvLyBiZWNhdXNlIGl0IGxvb2tzIGxpa2UgYXR0cmlidXRlcyBpbiBIVE1MIHRhZ3NcbiAgICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICB7YmVnaW46IC9cXFsvLCBlbmQ6IC9cXF0vfSxcbiAgICAgICAgICAgICAgICB7YmVnaW46IC9cXHsvLCBlbmQ6IC9cXH0vfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogL1xccyo9XFxzKi8sIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgIGJlZ2luOiAvLT9cXGQqXFwuP1xcZCsocHR8cGN8bW18Y218aW58ZGR8Y2N8ZXh8ZW0pPy9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjb250YWluczogW1xuICAgICAgQ09NTUFORCxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZm9ybXVsYScsXG4gICAgICAgIGNvbnRhaW5zOiBbQ09NTUFORF0sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7YmVnaW46IC9cXCRcXCQvLCBlbmQ6IC9cXCRcXCQvfSxcbiAgICAgICAgICB7YmVnaW46IC9cXCQvLCBlbmQ6IC9cXCQvfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAnJScsXG4gICAgICAgICckJyxcbiAgICAgICAge1xuICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICB9XG4gICAgICApXG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=