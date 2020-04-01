(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_ini"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ini.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ini.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var STRING = {
    className: "string",
    contains: [hljs.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: "'''", end: "'''",
        relevance: 10
      }, {
        begin: '"""', end: '"""',
        relevance: 10
      }, {
        begin: '"', end: '"'
      }, {
        begin: "'", end: "'"
      }
    ]
  };
  return {
    aliases: ['toml'],
    case_insensitive: true,
    illegal: /\S/,
    contains: [
      hljs.COMMENT(';', '$'),
      hljs.HASH_COMMENT_MODE,
      {
        className: 'section',
        begin: /^\s*\[+/, end: /\]+/
      },
      {
        begin: /^[a-z0-9\[\]_\.-]+\s*=\s*/, end: '$',
        returnBegin: true,
        contains: [
          {
            className: 'attr',
            begin: /[a-z0-9\[\]_\.-]+/
          },
          {
            begin: /=/, endsWithParent: true,
            relevance: 0,
            contains: [
              hljs.COMMENT(';', '$'),
              hljs.HASH_COMMENT_MODE,
              {
                className: 'literal',
                begin: /\bon|off|true|false|yes|no\b/
              },
              {
                className: 'variable',
                variants: [
                  {begin: /\$[\w\d"][\w\d_]*/},
                  {begin: /\$\{(.*?)}/}
                ]
              },
              STRING,
              {
                className: 'number',
                begin: /([\+\-]+)?[\d]+_[\d_]+/
              },
              hljs.NUMBER_MODE
            ]
          }
        ]
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9pbmkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9pbmkuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiBcInN0cmluZ1wiLFxuICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXSxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogXCInJydcIiwgZW5kOiBcIicnJ1wiLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LCB7XG4gICAgICAgIGJlZ2luOiAnXCJcIlwiJywgZW5kOiAnXCJcIlwiJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSwge1xuICAgICAgICBiZWdpbjogJ1wiJywgZW5kOiAnXCInXG4gICAgICB9LCB7XG4gICAgICAgIGJlZ2luOiBcIidcIiwgZW5kOiBcIidcIlxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ3RvbWwnXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGlsbGVnYWw6IC9cXFMvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNPTU1FTlQoJzsnLCAnJCcpLFxuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc2VjdGlvbicsXG4gICAgICAgIGJlZ2luOiAvXlxccypcXFsrLywgZW5kOiAvXFxdKy9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXlthLXowLTlcXFtcXF1fXFwuLV0rXFxzKj1cXHMqLywgZW5kOiAnJCcsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICAgICAgYmVnaW46IC9bYS16MC05XFxbXFxdX1xcLi1dKy9cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAvPS8sIGVuZHNXaXRoUGFyZW50OiB0cnVlLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgaGxqcy5DT01NRU5UKCc7JywgJyQnKSxcbiAgICAgICAgICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xpdGVyYWwnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAvXFxib258b2ZmfHRydWV8ZmFsc2V8eWVzfG5vXFxiL1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICB7YmVnaW46IC9cXCRbXFx3XFxkXCJdW1xcd1xcZF9dKi99LFxuICAgICAgICAgICAgICAgICAge2JlZ2luOiAvXFwkXFx7KC4qPyl9L31cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFNUUklORyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgYmVnaW46IC8oW1xcK1xcLV0rKT9bXFxkXStfW1xcZF9dKy9cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgaGxqcy5OVU1CRVJfTU9ERVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9