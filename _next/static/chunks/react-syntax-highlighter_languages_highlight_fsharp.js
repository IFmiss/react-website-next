(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_fsharp"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/fsharp.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/fsharp.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var TYPEPARAM = {
    begin: '<', end: '>',
    contains: [
      hljs.inherit(hljs.TITLE_MODE, {begin: /'[a-zA-Z0-9_]+/})
    ]
  };

  return {
    aliases: ['fs'],
    keywords:
      'abstract and as assert base begin class default delegate do done ' +
      'downcast downto elif else end exception extern false finally for ' +
      'fun function global if in inherit inline interface internal lazy let ' +
      'match member module mutable namespace new null of open or ' +
      'override private public rec return sig static struct then to ' +
      'true try type upcast use val void when while with yield',
    illegal: /\/\*/,
    contains: [
      {
        // monad builder keywords (matches before non-bang kws)
        className: 'keyword',
        begin: /\b(yield|return|let|do)!/
      },
      {
        className: 'string',
        begin: '@"', end: '"',
        contains: [{begin: '""'}]
      },
      {
        className: 'string',
        begin: '"""', end: '"""'
      },
      hljs.COMMENT('\\(\\*', '\\*\\)'),
      {
        className: 'class',
        beginKeywords: 'type', end: '\\(|=|$', excludeEnd: true,
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          TYPEPARAM
        ]
      },
      {
        className: 'meta',
        begin: '\\[<', end: '>\\]',
        relevance: 10
      },
      {
        className: 'symbol',
        begin: '\\B(\'[A-Za-z])\\b',
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      hljs.C_LINE_COMMENT_MODE,
      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
      hljs.C_NUMBER_MODE
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9mc2hhcnAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9mc2hhcnAuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBUWVBFUEFSQU0gPSB7XG4gICAgYmVnaW46ICc8JywgZW5kOiAnPicsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtiZWdpbjogLydbYS16QS1aMC05X10rL30pXG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydmcyddLFxuICAgIGtleXdvcmRzOlxuICAgICAgJ2Fic3RyYWN0IGFuZCBhcyBhc3NlcnQgYmFzZSBiZWdpbiBjbGFzcyBkZWZhdWx0IGRlbGVnYXRlIGRvIGRvbmUgJyArXG4gICAgICAnZG93bmNhc3QgZG93bnRvIGVsaWYgZWxzZSBlbmQgZXhjZXB0aW9uIGV4dGVybiBmYWxzZSBmaW5hbGx5IGZvciAnICtcbiAgICAgICdmdW4gZnVuY3Rpb24gZ2xvYmFsIGlmIGluIGluaGVyaXQgaW5saW5lIGludGVyZmFjZSBpbnRlcm5hbCBsYXp5IGxldCAnICtcbiAgICAgICdtYXRjaCBtZW1iZXIgbW9kdWxlIG11dGFibGUgbmFtZXNwYWNlIG5ldyBudWxsIG9mIG9wZW4gb3IgJyArXG4gICAgICAnb3ZlcnJpZGUgcHJpdmF0ZSBwdWJsaWMgcmVjIHJldHVybiBzaWcgc3RhdGljIHN0cnVjdCB0aGVuIHRvICcgK1xuICAgICAgJ3RydWUgdHJ5IHR5cGUgdXBjYXN0IHVzZSB2YWwgdm9pZCB3aGVuIHdoaWxlIHdpdGggeWllbGQnLFxuICAgIGlsbGVnYWw6IC9cXC9cXCovLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIC8vIG1vbmFkIGJ1aWxkZXIga2V5d29yZHMgKG1hdGNoZXMgYmVmb3JlIG5vbi1iYW5nIGt3cylcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIGJlZ2luOiAvXFxiKHlpZWxkfHJldHVybnxsZXR8ZG8pIS9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnQFwiJywgZW5kOiAnXCInLFxuICAgICAgICBjb250YWluczogW3tiZWdpbjogJ1wiXCInfV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXCJcIlwiJywgZW5kOiAnXCJcIlwiJ1xuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVCgnXFxcXChcXFxcKicsICdcXFxcKlxcXFwpJyksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ3R5cGUnLCBlbmQ6ICdcXFxcKHw9fCQnLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFLFxuICAgICAgICAgIFRZUEVQQVJBTVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdcXFxcWzwnLCBlbmQ6ICc+XFxcXF0nLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogJ1xcXFxCKFxcJ1tBLVphLXpdKVxcXFxiJyxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICB9LFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtpbGxlZ2FsOiBudWxsfSksXG4gICAgICBobGpzLkNfTlVNQkVSX01PREVcbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==