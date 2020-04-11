(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_lua"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/lua.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/lua.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var OPENING_LONG_BRACKET = '\\[=*\\[';
  var CLOSING_LONG_BRACKET = '\\]=*\\]';
  var LONG_BRACKETS = {
    begin: OPENING_LONG_BRACKET, end: CLOSING_LONG_BRACKET,
    contains: ['self']
  };
  var COMMENTS = [
    hljs.COMMENT('--(?!' + OPENING_LONG_BRACKET + ')', '$'),
    hljs.COMMENT(
      '--' + OPENING_LONG_BRACKET,
      CLOSING_LONG_BRACKET,
      {
        contains: [LONG_BRACKETS],
        relevance: 10
      }
    )
  ];
  return {
    lexemes: hljs.UNDERSCORE_IDENT_RE,
    keywords: {
      literal: "true false nil",
      keyword: "and break do else elseif end for goto if in local not or repeat return then until while",
      built_in:
        //Metatags and globals:
        '_G _ENV _VERSION __index __newindex __mode __call __metatable __tostring __len ' +
        '__gc __add __sub __mul __div __mod __pow __concat __unm __eq __lt __le assert ' +
        //Standard methods and properties:
        'collectgarbage dofile error getfenv getmetatable ipairs load loadfile loadstring' +
        'module next pairs pcall print rawequal rawget rawset require select setfenv' +
        'setmetatable tonumber tostring type unpack xpcall arg self' +
        //Library methods and properties (one line per library):
        'coroutine resume yield status wrap create running debug getupvalue ' +
        'debug sethook getmetatable gethook setmetatable setlocal traceback setfenv getinfo setupvalue getlocal getregistry getfenv ' +
        'io lines write close flush open output type read stderr stdin input stdout popen tmpfile ' +
        'math log max acos huge ldexp pi cos tanh pow deg tan cosh sinh random randomseed frexp ceil floor rad abs sqrt modf asin min mod fmod log10 atan2 exp sin atan ' +
        'os exit setlocale date getenv difftime remove time clock tmpname rename execute package preload loadlib loaded loaders cpath config path seeall ' +
        'string sub upper len gfind rep find match char dump gmatch reverse byte format gsub lower ' +
        'table setn insert getn foreachi maxn foreach concat sort remove'
    },
    contains: COMMENTS.concat([
      {
        className: 'function',
        beginKeywords: 'function', end: '\\)',
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'}),
          {
            className: 'params',
            begin: '\\(', endsWithParent: true,
            contains: COMMENTS
          }
        ].concat(COMMENTS)
      },
      hljs.C_NUMBER_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'string',
        begin: OPENING_LONG_BRACKET, end: CLOSING_LONG_BRACKET,
        contains: [LONG_BRACKETS],
        relevance: 5
      }
    ])
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9sdWEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9sdWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBPUEVOSU5HX0xPTkdfQlJBQ0tFVCA9ICdcXFxcWz0qXFxcXFsnO1xuICB2YXIgQ0xPU0lOR19MT05HX0JSQUNLRVQgPSAnXFxcXF09KlxcXFxdJztcbiAgdmFyIExPTkdfQlJBQ0tFVFMgPSB7XG4gICAgYmVnaW46IE9QRU5JTkdfTE9OR19CUkFDS0VULCBlbmQ6IENMT1NJTkdfTE9OR19CUkFDS0VULFxuICAgIGNvbnRhaW5zOiBbJ3NlbGYnXVxuICB9O1xuICB2YXIgQ09NTUVOVFMgPSBbXG4gICAgaGxqcy5DT01NRU5UKCctLSg/IScgKyBPUEVOSU5HX0xPTkdfQlJBQ0tFVCArICcpJywgJyQnKSxcbiAgICBobGpzLkNPTU1FTlQoXG4gICAgICAnLS0nICsgT1BFTklOR19MT05HX0JSQUNLRVQsXG4gICAgICBDTE9TSU5HX0xPTkdfQlJBQ0tFVCxcbiAgICAgIHtcbiAgICAgICAgY29udGFpbnM6IFtMT05HX0JSQUNLRVRTXSxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfVxuICAgIClcbiAgXTtcbiAgcmV0dXJuIHtcbiAgICBsZXhlbWVzOiBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUsXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGxpdGVyYWw6IFwidHJ1ZSBmYWxzZSBuaWxcIixcbiAgICAgIGtleXdvcmQ6IFwiYW5kIGJyZWFrIGRvIGVsc2UgZWxzZWlmIGVuZCBmb3IgZ290byBpZiBpbiBsb2NhbCBub3Qgb3IgcmVwZWF0IHJldHVybiB0aGVuIHVudGlsIHdoaWxlXCIsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgLy9NZXRhdGFncyBhbmQgZ2xvYmFsczpcbiAgICAgICAgJ19HIF9FTlYgX1ZFUlNJT04gX19pbmRleCBfX25ld2luZGV4IF9fbW9kZSBfX2NhbGwgX19tZXRhdGFibGUgX190b3N0cmluZyBfX2xlbiAnICtcbiAgICAgICAgJ19fZ2MgX19hZGQgX19zdWIgX19tdWwgX19kaXYgX19tb2QgX19wb3cgX19jb25jYXQgX191bm0gX19lcSBfX2x0IF9fbGUgYXNzZXJ0ICcgK1xuICAgICAgICAvL1N0YW5kYXJkIG1ldGhvZHMgYW5kIHByb3BlcnRpZXM6XG4gICAgICAgICdjb2xsZWN0Z2FyYmFnZSBkb2ZpbGUgZXJyb3IgZ2V0ZmVudiBnZXRtZXRhdGFibGUgaXBhaXJzIGxvYWQgbG9hZGZpbGUgbG9hZHN0cmluZycgK1xuICAgICAgICAnbW9kdWxlIG5leHQgcGFpcnMgcGNhbGwgcHJpbnQgcmF3ZXF1YWwgcmF3Z2V0IHJhd3NldCByZXF1aXJlIHNlbGVjdCBzZXRmZW52JyArXG4gICAgICAgICdzZXRtZXRhdGFibGUgdG9udW1iZXIgdG9zdHJpbmcgdHlwZSB1bnBhY2sgeHBjYWxsIGFyZyBzZWxmJyArXG4gICAgICAgIC8vTGlicmFyeSBtZXRob2RzIGFuZCBwcm9wZXJ0aWVzIChvbmUgbGluZSBwZXIgbGlicmFyeSk6XG4gICAgICAgICdjb3JvdXRpbmUgcmVzdW1lIHlpZWxkIHN0YXR1cyB3cmFwIGNyZWF0ZSBydW5uaW5nIGRlYnVnIGdldHVwdmFsdWUgJyArXG4gICAgICAgICdkZWJ1ZyBzZXRob29rIGdldG1ldGF0YWJsZSBnZXRob29rIHNldG1ldGF0YWJsZSBzZXRsb2NhbCB0cmFjZWJhY2sgc2V0ZmVudiBnZXRpbmZvIHNldHVwdmFsdWUgZ2V0bG9jYWwgZ2V0cmVnaXN0cnkgZ2V0ZmVudiAnICtcbiAgICAgICAgJ2lvIGxpbmVzIHdyaXRlIGNsb3NlIGZsdXNoIG9wZW4gb3V0cHV0IHR5cGUgcmVhZCBzdGRlcnIgc3RkaW4gaW5wdXQgc3Rkb3V0IHBvcGVuIHRtcGZpbGUgJyArXG4gICAgICAgICdtYXRoIGxvZyBtYXggYWNvcyBodWdlIGxkZXhwIHBpIGNvcyB0YW5oIHBvdyBkZWcgdGFuIGNvc2ggc2luaCByYW5kb20gcmFuZG9tc2VlZCBmcmV4cCBjZWlsIGZsb29yIHJhZCBhYnMgc3FydCBtb2RmIGFzaW4gbWluIG1vZCBmbW9kIGxvZzEwIGF0YW4yIGV4cCBzaW4gYXRhbiAnICtcbiAgICAgICAgJ29zIGV4aXQgc2V0bG9jYWxlIGRhdGUgZ2V0ZW52IGRpZmZ0aW1lIHJlbW92ZSB0aW1lIGNsb2NrIHRtcG5hbWUgcmVuYW1lIGV4ZWN1dGUgcGFja2FnZSBwcmVsb2FkIGxvYWRsaWIgbG9hZGVkIGxvYWRlcnMgY3BhdGggY29uZmlnIHBhdGggc2VlYWxsICcgK1xuICAgICAgICAnc3RyaW5nIHN1YiB1cHBlciBsZW4gZ2ZpbmQgcmVwIGZpbmQgbWF0Y2ggY2hhciBkdW1wIGdtYXRjaCByZXZlcnNlIGJ5dGUgZm9ybWF0IGdzdWIgbG93ZXIgJyArXG4gICAgICAgICd0YWJsZSBzZXRuIGluc2VydCBnZXRuIGZvcmVhY2hpIG1heG4gZm9yZWFjaCBjb25jYXQgc29ydCByZW1vdmUnXG4gICAgfSxcbiAgICBjb250YWluczogQ09NTUVOVFMuY29uY2F0KFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24nLCBlbmQ6ICdcXFxcKScsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge2JlZ2luOiAnKFtfYS16QS1aXVxcXFx3KlxcXFwuKSooW19hLXpBLVpdXFxcXHcqOik/W19hLXpBLVpdXFxcXHcqJ30pLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgICAgICBiZWdpbjogJ1xcXFwoJywgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICBjb250YWluczogQ09NTUVOVFNcbiAgICAgICAgICB9XG4gICAgICAgIF0uY29uY2F0KENPTU1FTlRTKVxuICAgICAgfSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiBPUEVOSU5HX0xPTkdfQlJBQ0tFVCwgZW5kOiBDTE9TSU5HX0xPTkdfQlJBQ0tFVCxcbiAgICAgICAgY29udGFpbnM6IFtMT05HX0JSQUNLRVRTXSxcbiAgICAgICAgcmVsZXZhbmNlOiA1XG4gICAgICB9XG4gICAgXSlcbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=