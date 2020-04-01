(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_scilab"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/scilab.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/scilab.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {

  var COMMON_CONTAINS = [
    hljs.C_NUMBER_MODE,
    {
      className: 'string',
      begin: '\'|\"', end: '\'|\"',
      contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}]
    }
  ];

  return {
    aliases: ['sci'],
    lexemes: /%?\w+/,
    keywords: {
      keyword: 'abort break case clear catch continue do elseif else endfunction end for function '+
        'global if pause return resume select try then while',
      literal:
        '%f %F %t %T %pi %eps %inf %nan %e %i %z %s',
      built_in: // Scilab has more than 2000 functions. Just list the most commons
       'abs and acos asin atan ceil cd chdir clearglobal cosh cos cumprod deff disp error '+
       'exec execstr exists exp eye gettext floor fprintf fread fsolve imag isdef isempty '+
       'isinfisnan isvector lasterror length load linspace list listfiles log10 log2 log '+
       'max min msprintf mclose mopen ones or pathconvert poly printf prod pwd rand real '+
       'round sinh sin size gsort sprintf sqrt strcat strcmps tring sum system tanh tan '+
       'type typename warning zeros matrix'
    },
    illegal: '("|#|/\\*|\\s+/\\w+)',
    contains: [
      {
        className: 'function',
        beginKeywords: 'function', end: '$',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          {
            className: 'params',
            begin: '\\(', end: '\\)'
          }
        ]
      },
      {
        begin: '[a-zA-Z_][a-zA-Z_0-9]*(\'+[\\.\']*|[\\.\']+)', end: '',
        relevance: 0
      },
      {
        begin: '\\[', end: '\\]\'*[\\.\']*',
        relevance: 0,
        contains: COMMON_CONTAINS
      },
      hljs.COMMENT('//', '$')
    ].concat(COMMON_CONTAINS)
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9zY2lsYWIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9zY2lsYWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG5cbiAgdmFyIENPTU1PTl9DT05UQUlOUyA9IFtcbiAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgIGJlZ2luOiAnXFwnfFxcXCInLCBlbmQ6ICdcXCd8XFxcIicsXG4gICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRSwge2JlZ2luOiAnXFwnXFwnJ31dXG4gICAgfVxuICBdO1xuXG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydzY2knXSxcbiAgICBsZXhlbWVzOiAvJT9cXHcrLyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDogJ2Fib3J0IGJyZWFrIGNhc2UgY2xlYXIgY2F0Y2ggY29udGludWUgZG8gZWxzZWlmIGVsc2UgZW5kZnVuY3Rpb24gZW5kIGZvciBmdW5jdGlvbiAnK1xuICAgICAgICAnZ2xvYmFsIGlmIHBhdXNlIHJldHVybiByZXN1bWUgc2VsZWN0IHRyeSB0aGVuIHdoaWxlJyxcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICclZiAlRiAldCAlVCAlcGkgJWVwcyAlaW5mICVuYW4gJWUgJWkgJXogJXMnLFxuICAgICAgYnVpbHRfaW46IC8vIFNjaWxhYiBoYXMgbW9yZSB0aGFuIDIwMDAgZnVuY3Rpb25zLiBKdXN0IGxpc3QgdGhlIG1vc3QgY29tbW9uc1xuICAgICAgICdhYnMgYW5kIGFjb3MgYXNpbiBhdGFuIGNlaWwgY2QgY2hkaXIgY2xlYXJnbG9iYWwgY29zaCBjb3MgY3VtcHJvZCBkZWZmIGRpc3AgZXJyb3IgJytcbiAgICAgICAnZXhlYyBleGVjc3RyIGV4aXN0cyBleHAgZXllIGdldHRleHQgZmxvb3IgZnByaW50ZiBmcmVhZCBmc29sdmUgaW1hZyBpc2RlZiBpc2VtcHR5ICcrXG4gICAgICAgJ2lzaW5maXNuYW4gaXN2ZWN0b3IgbGFzdGVycm9yIGxlbmd0aCBsb2FkIGxpbnNwYWNlIGxpc3QgbGlzdGZpbGVzIGxvZzEwIGxvZzIgbG9nICcrXG4gICAgICAgJ21heCBtaW4gbXNwcmludGYgbWNsb3NlIG1vcGVuIG9uZXMgb3IgcGF0aGNvbnZlcnQgcG9seSBwcmludGYgcHJvZCBwd2QgcmFuZCByZWFsICcrXG4gICAgICAgJ3JvdW5kIHNpbmggc2luIHNpemUgZ3NvcnQgc3ByaW50ZiBzcXJ0IHN0cmNhdCBzdHJjbXBzIHRyaW5nIHN1bSBzeXN0ZW0gdGFuaCB0YW4gJytcbiAgICAgICAndHlwZSB0eXBlbmFtZSB3YXJuaW5nIHplcm9zIG1hdHJpeCdcbiAgICB9LFxuICAgIGlsbGVnYWw6ICcoXCJ8I3wvXFxcXCp8XFxcXHMrL1xcXFx3KyknLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2Z1bmN0aW9uJywgZW5kOiAnJCcsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKSdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnW2EtekEtWl9dW2EtekEtWl8wLTldKihcXCcrW1xcXFwuXFwnXSp8W1xcXFwuXFwnXSspJywgZW5kOiAnJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFxbJywgZW5kOiAnXFxcXF1cXCcqW1xcXFwuXFwnXSonLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBDT01NT05fQ09OVEFJTlNcbiAgICAgIH0sXG4gICAgICBobGpzLkNPTU1FTlQoJy8vJywgJyQnKVxuICAgIF0uY29uY2F0KENPTU1PTl9DT05UQUlOUylcbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=