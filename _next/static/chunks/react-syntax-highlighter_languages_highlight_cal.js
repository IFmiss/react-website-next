(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_cal"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/cal.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/cal.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var KEYWORDS =
    'div mod in and or not xor asserterror begin case do downto else end exit for if of repeat then to ' +
    'until while with var';
  var LITERALS = 'false true';
  var COMMENT_MODES = [
    hljs.C_LINE_COMMENT_MODE,
    hljs.COMMENT(
      /\{/,
      /\}/,
      {
        relevance: 0
      }
    ),
    hljs.COMMENT(
      /\(\*/,
      /\*\)/,
      {
        relevance: 10
      }
    )
  ];
  var STRING = {
    className: 'string',
    begin: /'/, end: /'/,
    contains: [{begin: /''/}]
  };
  var CHAR_STRING = {
    className: 'string', begin: /(#\d+)+/
  };
  var DATE = {
      className: 'number',
      begin: '\\b\\d+(\\.\\d+)?(DT|D|T)',
      relevance: 0
  };
  var DBL_QUOTED_VARIABLE = {
      className: 'string', // not a string technically but makes sense to be highlighted in the same style
      begin: '"',
      end: '"'
  };

  var PROCEDURE = {
    className: 'function',
    beginKeywords: 'procedure', end: /[:;]/,
    keywords: 'procedure|10',
    contains: [
      hljs.TITLE_MODE,
      {
        className: 'params',
        begin: /\(/, end: /\)/,
        keywords: KEYWORDS,
        contains: [STRING, CHAR_STRING]
      }
    ].concat(COMMENT_MODES)
  };

  var OBJECT = {
    className: 'class',
    begin: 'OBJECT (Table|Form|Report|Dataport|Codeunit|XMLport|MenuSuite|Page|Query) (\\d+) ([^\\r\\n]+)',
    returnBegin: true,
    contains: [
      hljs.TITLE_MODE,
        PROCEDURE
    ]
  };

  return {
    case_insensitive: true,
    keywords: { keyword: KEYWORDS, literal: LITERALS },
    illegal: /\/\*/,
    contains: [
      STRING, CHAR_STRING,
      DATE, DBL_QUOTED_VARIABLE,
      hljs.NUMBER_MODE,
      OBJECT,
      PROCEDURE
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9jYWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jYWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBLRVlXT1JEUyA9XG4gICAgJ2RpdiBtb2QgaW4gYW5kIG9yIG5vdCB4b3IgYXNzZXJ0ZXJyb3IgYmVnaW4gY2FzZSBkbyBkb3dudG8gZWxzZSBlbmQgZXhpdCBmb3IgaWYgb2YgcmVwZWF0IHRoZW4gdG8gJyArXG4gICAgJ3VudGlsIHdoaWxlIHdpdGggdmFyJztcbiAgdmFyIExJVEVSQUxTID0gJ2ZhbHNlIHRydWUnO1xuICB2YXIgQ09NTUVOVF9NT0RFUyA9IFtcbiAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgaGxqcy5DT01NRU5UKFxuICAgICAgL1xcey8sXG4gICAgICAvXFx9LyxcbiAgICAgIHtcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgKSxcbiAgICBobGpzLkNPTU1FTlQoXG4gICAgICAvXFwoXFwqLyxcbiAgICAgIC9cXCpcXCkvLFxuICAgICAge1xuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9XG4gICAgKVxuICBdO1xuICB2YXIgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC8nLywgZW5kOiAvJy8sXG4gICAgY29udGFpbnM6IFt7YmVnaW46IC8nJy99XVxuICB9O1xuICB2YXIgQ0hBUl9TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJywgYmVnaW46IC8oI1xcZCspKy9cbiAgfTtcbiAgdmFyIERBVEUgPSB7XG4gICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgYmVnaW46ICdcXFxcYlxcXFxkKyhcXFxcLlxcXFxkKyk/KERUfER8VCknLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIHZhciBEQkxfUVVPVEVEX1ZBUklBQkxFID0ge1xuICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJywgLy8gbm90IGEgc3RyaW5nIHRlY2huaWNhbGx5IGJ1dCBtYWtlcyBzZW5zZSB0byBiZSBoaWdobGlnaHRlZCBpbiB0aGUgc2FtZSBzdHlsZVxuICAgICAgYmVnaW46ICdcIicsXG4gICAgICBlbmQ6ICdcIidcbiAgfTtcblxuICB2YXIgUFJPQ0VEVVJFID0ge1xuICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICBiZWdpbktleXdvcmRzOiAncHJvY2VkdXJlJywgZW5kOiAvWzo7XS8sXG4gICAga2V5d29yZHM6ICdwcm9jZWR1cmV8MTAnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLlRJVExFX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgIGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLyxcbiAgICAgICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgICAgICBjb250YWluczogW1NUUklORywgQ0hBUl9TVFJJTkddXG4gICAgICB9XG4gICAgXS5jb25jYXQoQ09NTUVOVF9NT0RFUylcbiAgfTtcblxuICB2YXIgT0JKRUNUID0ge1xuICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICBiZWdpbjogJ09CSkVDVCAoVGFibGV8Rm9ybXxSZXBvcnR8RGF0YXBvcnR8Q29kZXVuaXR8WE1McG9ydHxNZW51U3VpdGV8UGFnZXxRdWVyeSkgKFxcXFxkKykgKFteXFxcXHJcXFxcbl0rKScsXG4gICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuVElUTEVfTU9ERSxcbiAgICAgICAgUFJPQ0VEVVJFXG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3JkczogeyBrZXl3b3JkOiBLRVlXT1JEUywgbGl0ZXJhbDogTElURVJBTFMgfSxcbiAgICBpbGxlZ2FsOiAvXFwvXFwqLyxcbiAgICBjb250YWluczogW1xuICAgICAgU1RSSU5HLCBDSEFSX1NUUklORyxcbiAgICAgIERBVEUsIERCTF9RVU9URURfVkFSSUFCTEUsXG4gICAgICBobGpzLk5VTUJFUl9NT0RFLFxuICAgICAgT0JKRUNULFxuICAgICAgUFJPQ0VEVVJFXG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=