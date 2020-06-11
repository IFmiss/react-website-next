(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_angelscript"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/angelscript.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/angelscript.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var builtInTypeMode = {
    className: 'built_in',
    begin: '\\b(void|bool|int|int8|int16|int32|int64|uint|uint8|uint16|uint32|uint64|string|ref|array|double|float|auto|dictionary)'
  };

  var objectHandleMode = {
    className: 'symbol',
    begin: '[a-zA-Z0-9_]+@'
  };

  var genericMode = {
    className: 'keyword',
    begin: '<', end: '>',
    contains: [ builtInTypeMode, objectHandleMode ]
  };

  builtInTypeMode.contains = [ genericMode ];
  objectHandleMode.contains = [ genericMode ];

  return {
    aliases: [ 'asc' ],

    keywords:
      'for in|0 break continue while do|0 return if else case switch namespace is cast ' +
      'or and xor not get|0 in inout|10 out override set|0 private public const default|0 ' +
      'final shared external mixin|10 enum typedef funcdef this super import from interface ' +
      'abstract|0 try catch protected explicit',

    // avoid close detection with C# and JS
    illegal: '(^using\\s+[A-Za-z0-9_\\.]+;$|\\bfunction\s*[^\\(])',

    contains: [
      { // 'strings'
        className: 'string',
        begin: '\'', end: '\'',
        illegal: '\\n',
        contains: [ hljs.BACKSLASH_ESCAPE ],
        relevance: 0
      },

      { // "strings"
        className: 'string',
        begin: '"', end: '"',
        illegal: '\\n',
        contains: [ hljs.BACKSLASH_ESCAPE ],
        relevance: 0
      },

      // """heredoc strings"""
      {
        className: 'string',
        begin: '"""', end: '"""'
      },

      hljs.C_LINE_COMMENT_MODE, // single-line comments
      hljs.C_BLOCK_COMMENT_MODE, // comment blocks

      { // interface or namespace declaration
        beginKeywords: 'interface namespace', end: '{',
        illegal: '[;.\\-]',
        contains: [
          { // interface or namespace name
            className: 'symbol',
            begin: '[a-zA-Z0-9_]+'
          }
        ]
      },

      { // class declaration
        beginKeywords: 'class', end: '{',
        illegal: '[;.\\-]',
        contains: [
          { // class name
            className: 'symbol',
            begin: '[a-zA-Z0-9_]+',
            contains: [
              {
                begin: '[:,]\\s*',
                contains: [
                  {
                    className: 'symbol',
                    begin: '[a-zA-Z0-9_]+'
                  }
                ]
              }
            ]
          }
        ]
      },

      builtInTypeMode, // built-in types
      objectHandleMode, // object handles

      { // literals
        className: 'literal',
        begin: '\\b(null|true|false)'
      },

      { // numbers
        className: 'number',
        begin: '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?f?|\\.\\d+f?)([eE][-+]?\\d+f?)?)'
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9hbmdlbHNjcmlwdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FuZ2Vsc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgYnVpbHRJblR5cGVNb2RlID0ge1xuICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICBiZWdpbjogJ1xcXFxiKHZvaWR8Ym9vbHxpbnR8aW50OHxpbnQxNnxpbnQzMnxpbnQ2NHx1aW50fHVpbnQ4fHVpbnQxNnx1aW50MzJ8dWludDY0fHN0cmluZ3xyZWZ8YXJyYXl8ZG91YmxlfGZsb2F0fGF1dG98ZGljdGlvbmFyeSknXG4gIH07XG5cbiAgdmFyIG9iamVjdEhhbmRsZU1vZGUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICBiZWdpbjogJ1thLXpBLVowLTlfXStAJ1xuICB9O1xuXG4gIHZhciBnZW5lcmljTW9kZSA9IHtcbiAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICBiZWdpbjogJzwnLCBlbmQ6ICc+JyxcbiAgICBjb250YWluczogWyBidWlsdEluVHlwZU1vZGUsIG9iamVjdEhhbmRsZU1vZGUgXVxuICB9O1xuXG4gIGJ1aWx0SW5UeXBlTW9kZS5jb250YWlucyA9IFsgZ2VuZXJpY01vZGUgXTtcbiAgb2JqZWN0SGFuZGxlTW9kZS5jb250YWlucyA9IFsgZ2VuZXJpY01vZGUgXTtcblxuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsgJ2FzYycgXSxcblxuICAgIGtleXdvcmRzOlxuICAgICAgJ2ZvciBpbnwwIGJyZWFrIGNvbnRpbnVlIHdoaWxlIGRvfDAgcmV0dXJuIGlmIGVsc2UgY2FzZSBzd2l0Y2ggbmFtZXNwYWNlIGlzIGNhc3QgJyArXG4gICAgICAnb3IgYW5kIHhvciBub3QgZ2V0fDAgaW4gaW5vdXR8MTAgb3V0IG92ZXJyaWRlIHNldHwwIHByaXZhdGUgcHVibGljIGNvbnN0IGRlZmF1bHR8MCAnICtcbiAgICAgICdmaW5hbCBzaGFyZWQgZXh0ZXJuYWwgbWl4aW58MTAgZW51bSB0eXBlZGVmIGZ1bmNkZWYgdGhpcyBzdXBlciBpbXBvcnQgZnJvbSBpbnRlcmZhY2UgJyArXG4gICAgICAnYWJzdHJhY3R8MCB0cnkgY2F0Y2ggcHJvdGVjdGVkIGV4cGxpY2l0JyxcblxuICAgIC8vIGF2b2lkIGNsb3NlIGRldGVjdGlvbiB3aXRoIEMjIGFuZCBKU1xuICAgIGlsbGVnYWw6ICcoXnVzaW5nXFxcXHMrW0EtWmEtejAtOV9cXFxcLl0rOyR8XFxcXGJmdW5jdGlvblxccypbXlxcXFwoXSknLFxuXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHsgLy8gJ3N0cmluZ3MnXG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAnXFwnJywgZW5kOiAnXFwnJyxcbiAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgY29udGFpbnM6IFsgaGxqcy5CQUNLU0xBU0hfRVNDQVBFIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcblxuICAgICAgeyAvLyBcInN0cmluZ3NcIlxuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1wiJywgZW5kOiAnXCInLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICBjb250YWluczogWyBobGpzLkJBQ0tTTEFTSF9FU0NBUEUgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuXG4gICAgICAvLyBcIlwiXCJoZXJlZG9jIHN0cmluZ3NcIlwiXCJcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICdcIlwiXCInLCBlbmQ6ICdcIlwiXCInXG4gICAgICB9LFxuXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsIC8vIHNpbmdsZS1saW5lIGNvbW1lbnRzXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLCAvLyBjb21tZW50IGJsb2Nrc1xuXG4gICAgICB7IC8vIGludGVyZmFjZSBvciBuYW1lc3BhY2UgZGVjbGFyYXRpb25cbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2ludGVyZmFjZSBuYW1lc3BhY2UnLCBlbmQ6ICd7JyxcbiAgICAgICAgaWxsZWdhbDogJ1s7LlxcXFwtXScsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgeyAvLyBpbnRlcmZhY2Ugb3IgbmFtZXNwYWNlIG5hbWVcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgICAgICBiZWdpbjogJ1thLXpBLVowLTlfXSsnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuXG4gICAgICB7IC8vIGNsYXNzIGRlY2xhcmF0aW9uXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcycsIGVuZDogJ3snLFxuICAgICAgICBpbGxlZ2FsOiAnWzsuXFxcXC1dJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7IC8vIGNsYXNzIG5hbWVcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgICAgICBiZWdpbjogJ1thLXpBLVowLTlfXSsnLFxuICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAnWzosXVxcXFxzKicsXG4gICAgICAgICAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46ICdbYS16QS1aMC05X10rJ1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcblxuICAgICAgYnVpbHRJblR5cGVNb2RlLCAvLyBidWlsdC1pbiB0eXBlc1xuICAgICAgb2JqZWN0SGFuZGxlTW9kZSwgLy8gb2JqZWN0IGhhbmRsZXNcblxuICAgICAgeyAvLyBsaXRlcmFsc1xuICAgICAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYihudWxsfHRydWV8ZmFsc2UpJ1xuICAgICAgfSxcblxuICAgICAgeyAvLyBudW1iZXJzXG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiAnKC0/KShcXFxcYjBbeFhdW2EtZkEtRjAtOV0rfChcXFxcYlxcXFxkKyhcXFxcLlxcXFxkKik/Zj98XFxcXC5cXFxcZCtmPykoW2VFXVstK10/XFxcXGQrZj8pPyknXG4gICAgICB9XG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=