(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_axapta"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/axapta.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/axapta.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    keywords: 'false int abstract private char boolean static null if for true ' +
      'while long throw finally protected final return void enum else ' +
      'break new catch byte super case short default double public try this switch ' +
      'continue reverse firstfast firstonly forupdate nofetch sum avg minof maxof count ' +
      'order group by asc desc index hint like dispaly edit client server ttsbegin ' +
      'ttscommit str real date container anytype common div mod',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'meta',
        begin: '#', end: '$'
      },
      {
        className: 'class',
        beginKeywords: 'class interface', end: '{', excludeEnd: true,
        illegal: ':',
        contains: [
          {beginKeywords: 'extends implements'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9heGFwdGEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9heGFwdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHJldHVybiB7XG4gICAga2V5d29yZHM6ICdmYWxzZSBpbnQgYWJzdHJhY3QgcHJpdmF0ZSBjaGFyIGJvb2xlYW4gc3RhdGljIG51bGwgaWYgZm9yIHRydWUgJyArXG4gICAgICAnd2hpbGUgbG9uZyB0aHJvdyBmaW5hbGx5IHByb3RlY3RlZCBmaW5hbCByZXR1cm4gdm9pZCBlbnVtIGVsc2UgJyArXG4gICAgICAnYnJlYWsgbmV3IGNhdGNoIGJ5dGUgc3VwZXIgY2FzZSBzaG9ydCBkZWZhdWx0IGRvdWJsZSBwdWJsaWMgdHJ5IHRoaXMgc3dpdGNoICcgK1xuICAgICAgJ2NvbnRpbnVlIHJldmVyc2UgZmlyc3RmYXN0IGZpcnN0b25seSBmb3J1cGRhdGUgbm9mZXRjaCBzdW0gYXZnIG1pbm9mIG1heG9mIGNvdW50ICcgK1xuICAgICAgJ29yZGVyIGdyb3VwIGJ5IGFzYyBkZXNjIGluZGV4IGhpbnQgbGlrZSBkaXNwYWx5IGVkaXQgY2xpZW50IHNlcnZlciB0dHNiZWdpbiAnICtcbiAgICAgICd0dHNjb21taXQgc3RyIHJlYWwgZGF0ZSBjb250YWluZXIgYW55dHlwZSBjb21tb24gZGl2IG1vZCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICcjJywgZW5kOiAnJCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzIGludGVyZmFjZScsIGVuZDogJ3snLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiAnOicsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge2JlZ2luS2V5d29yZHM6ICdleHRlbmRzIGltcGxlbWVudHMnfSxcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9