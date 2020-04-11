(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_vala"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/vala.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/vala.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    keywords: {
      keyword:
        // Value types
        'char uchar unichar int uint long ulong short ushort int8 int16 int32 int64 uint8 ' +
        'uint16 uint32 uint64 float double bool struct enum string void ' +
        // Reference types
        'weak unowned owned ' +
        // Modifiers
        'async signal static abstract interface override virtual delegate ' +
        // Control Structures
        'if while do for foreach else switch case break default return try catch ' +
        // Visibility
        'public private protected internal ' +
        // Other
        'using new this get set const stdout stdin stderr var',
      built_in:
        'DBus GLib CCode Gee Object Gtk Posix',
      literal:
        'false true null'
    },
    contains: [
      {
        className: 'class',
        beginKeywords: 'class interface namespace', end: '{', excludeEnd: true,
        illegal: '[^,:\\n\\s\\.]',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'string',
        begin: '"""', end: '"""',
        relevance: 5
      },
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      {
        className: 'meta',
        begin: '^#', end: '$',
        relevance: 2
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF92YWxhLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdmFsYS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgLy8gVmFsdWUgdHlwZXNcbiAgICAgICAgJ2NoYXIgdWNoYXIgdW5pY2hhciBpbnQgdWludCBsb25nIHVsb25nIHNob3J0IHVzaG9ydCBpbnQ4IGludDE2IGludDMyIGludDY0IHVpbnQ4ICcgK1xuICAgICAgICAndWludDE2IHVpbnQzMiB1aW50NjQgZmxvYXQgZG91YmxlIGJvb2wgc3RydWN0IGVudW0gc3RyaW5nIHZvaWQgJyArXG4gICAgICAgIC8vIFJlZmVyZW5jZSB0eXBlc1xuICAgICAgICAnd2VhayB1bm93bmVkIG93bmVkICcgK1xuICAgICAgICAvLyBNb2RpZmllcnNcbiAgICAgICAgJ2FzeW5jIHNpZ25hbCBzdGF0aWMgYWJzdHJhY3QgaW50ZXJmYWNlIG92ZXJyaWRlIHZpcnR1YWwgZGVsZWdhdGUgJyArXG4gICAgICAgIC8vIENvbnRyb2wgU3RydWN0dXJlc1xuICAgICAgICAnaWYgd2hpbGUgZG8gZm9yIGZvcmVhY2ggZWxzZSBzd2l0Y2ggY2FzZSBicmVhayBkZWZhdWx0IHJldHVybiB0cnkgY2F0Y2ggJyArXG4gICAgICAgIC8vIFZpc2liaWxpdHlcbiAgICAgICAgJ3B1YmxpYyBwcml2YXRlIHByb3RlY3RlZCBpbnRlcm5hbCAnICtcbiAgICAgICAgLy8gT3RoZXJcbiAgICAgICAgJ3VzaW5nIG5ldyB0aGlzIGdldCBzZXQgY29uc3Qgc3Rkb3V0IHN0ZGluIHN0ZGVyciB2YXInLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgICdEQnVzIEdMaWIgQ0NvZGUgR2VlIE9iamVjdCBHdGsgUG9zaXgnLFxuICAgICAgbGl0ZXJhbDpcbiAgICAgICAgJ2ZhbHNlIHRydWUgbnVsbCdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2NsYXNzIGludGVyZmFjZSBuYW1lc3BhY2UnLCBlbmQ6ICd7JywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgaWxsZWdhbDogJ1teLDpcXFxcblxcXFxzXFxcXC5dJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICdcIlwiXCInLCBlbmQ6ICdcIlwiXCInLFxuICAgICAgICByZWxldmFuY2U6IDVcbiAgICAgIH0sXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdeIycsIGVuZDogJyQnLFxuICAgICAgICByZWxldmFuY2U6IDJcbiAgICAgIH1cbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==