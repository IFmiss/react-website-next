(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_apache"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/apache.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/apache.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var NUMBER = {className: 'number', begin: '[\\$%]\\d+'};
  return {
    aliases: ['apacheconf'],
    case_insensitive: true,
    contains: [
      hljs.HASH_COMMENT_MODE,
      {className: 'section', begin: '</?', end: '>'},
      {
        className: 'attribute',
        begin: /\w+/,
        relevance: 0,
        // keywords aren’t needed for highlighting per se, they only boost relevance
        // for a very generally defined mode (starts with a word, ends with line-end
        keywords: {
          nomarkup:
            'order deny allow setenv rewriterule rewriteengine rewritecond documentroot ' +
            'sethandler errordocument loadmodule options header listen serverroot ' +
            'servername'
        },
        starts: {
          end: /$/,
          relevance: 0,
          keywords: {
            literal: 'on off all'
          },
          contains: [
            {
              className: 'meta',
              begin: '\\s\\[', end: '\\]$'
            },
            {
              className: 'variable',
              begin: '[\\$%]\\{', end: '\\}',
              contains: ['self', NUMBER]
            },
            NUMBER,
            hljs.QUOTE_STRING_MODE
          ]
        }
      }
    ],
    illegal: /\S/
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9hcGFjaGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9hcGFjaGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBOVU1CRVIgPSB7Y2xhc3NOYW1lOiAnbnVtYmVyJywgYmVnaW46ICdbXFxcXCQlXVxcXFxkKyd9O1xuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsnYXBhY2hlY29uZiddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICB7Y2xhc3NOYW1lOiAnc2VjdGlvbicsIGJlZ2luOiAnPC8/JywgZW5kOiAnPid9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyaWJ1dGUnLFxuICAgICAgICBiZWdpbjogL1xcdysvLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIC8vIGtleXdvcmRzIGFyZW7igJl0IG5lZWRlZCBmb3IgaGlnaGxpZ2h0aW5nIHBlciBzZSwgdGhleSBvbmx5IGJvb3N0IHJlbGV2YW5jZVxuICAgICAgICAvLyBmb3IgYSB2ZXJ5IGdlbmVyYWxseSBkZWZpbmVkIG1vZGUgKHN0YXJ0cyB3aXRoIGEgd29yZCwgZW5kcyB3aXRoIGxpbmUtZW5kXG4gICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgbm9tYXJrdXA6XG4gICAgICAgICAgICAnb3JkZXIgZGVueSBhbGxvdyBzZXRlbnYgcmV3cml0ZXJ1bGUgcmV3cml0ZWVuZ2luZSByZXdyaXRlY29uZCBkb2N1bWVudHJvb3QgJyArXG4gICAgICAgICAgICAnc2V0aGFuZGxlciBlcnJvcmRvY3VtZW50IGxvYWRtb2R1bGUgb3B0aW9ucyBoZWFkZXIgbGlzdGVuIHNlcnZlcnJvb3QgJyArXG4gICAgICAgICAgICAnc2VydmVybmFtZSdcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAvJC8sXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIGtleXdvcmRzOiB7XG4gICAgICAgICAgICBsaXRlcmFsOiAnb24gb2ZmIGFsbCdcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxzXFxcXFsnLCBlbmQ6ICdcXFxcXSQnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICAgICAgICAgIGJlZ2luOiAnW1xcXFwkJV1cXFxceycsIGVuZDogJ1xcXFx9JyxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFsnc2VsZicsIE5VTUJFUl1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBOVU1CRVIsXG4gICAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBpbGxlZ2FsOiAvXFxTL1xuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9