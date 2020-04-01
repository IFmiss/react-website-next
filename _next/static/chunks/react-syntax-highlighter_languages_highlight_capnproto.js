(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_capnproto"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/capnproto.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/capnproto.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    aliases: ['capnp'],
    keywords: {
      keyword:
        'struct enum interface union group import using const annotation extends in of on as with from fixed',
      built_in:
        'Void Bool Int8 Int16 Int32 Int64 UInt8 UInt16 UInt32 UInt64 Float32 Float64 ' +
        'Text Data AnyPointer AnyStruct Capability List',
      literal:
        'true false'
    },
    contains: [
      hljs.QUOTE_STRING_MODE,
      hljs.NUMBER_MODE,
      hljs.HASH_COMMENT_MODE,
      {
        className: 'meta',
        begin: /@0x[\w\d]{16};/,
        illegal: /\n/
      },
      {
        className: 'symbol',
        begin: /@\d+\b/
      },
      {
        className: 'class',
        beginKeywords: 'struct enum', end: /\{/,
        illegal: /\n/,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
          })
        ]
      },
      {
        className: 'class',
        beginKeywords: 'interface', end: /\{/,
        illegal: /\n/,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            starts: {endsWithParent: true, excludeEnd: true} // hack: eating everything after the first title
          })
        ]
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9jYXBucHJvdG8uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jYXBucHJvdG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydjYXBucCddLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnc3RydWN0IGVudW0gaW50ZXJmYWNlIHVuaW9uIGdyb3VwIGltcG9ydCB1c2luZyBjb25zdCBhbm5vdGF0aW9uIGV4dGVuZHMgaW4gb2Ygb24gYXMgd2l0aCBmcm9tIGZpeGVkJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAnVm9pZCBCb29sIEludDggSW50MTYgSW50MzIgSW50NjQgVUludDggVUludDE2IFVJbnQzMiBVSW50NjQgRmxvYXQzMiBGbG9hdDY0ICcgK1xuICAgICAgICAnVGV4dCBEYXRhIEFueVBvaW50ZXIgQW55U3RydWN0IENhcGFiaWxpdHkgTGlzdCcsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAndHJ1ZSBmYWxzZSdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogL0AweFtcXHdcXGRdezE2fTsvLFxuICAgICAgICBpbGxlZ2FsOiAvXFxuL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgYmVnaW46IC9AXFxkK1xcYi9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ3N0cnVjdCBlbnVtJywgZW5kOiAvXFx7LyxcbiAgICAgICAgaWxsZWdhbDogL1xcbi8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge1xuICAgICAgICAgICAgc3RhcnRzOiB7ZW5kc1dpdGhQYXJlbnQ6IHRydWUsIGV4Y2x1ZGVFbmQ6IHRydWV9IC8vIGhhY2s6IGVhdGluZyBldmVyeXRoaW5nIGFmdGVyIHRoZSBmaXJzdCB0aXRsZVxuICAgICAgICAgIH0pXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2ludGVyZmFjZScsIGVuZDogL1xcey8sXG4gICAgICAgIGlsbGVnYWw6IC9cXG4vLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtcbiAgICAgICAgICAgIHN0YXJ0czoge2VuZHNXaXRoUGFyZW50OiB0cnVlLCBleGNsdWRlRW5kOiB0cnVlfSAvLyBoYWNrOiBlYXRpbmcgZXZlcnl0aGluZyBhZnRlciB0aGUgZmlyc3QgdGl0bGVcbiAgICAgICAgICB9KVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9