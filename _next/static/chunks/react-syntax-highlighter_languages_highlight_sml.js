(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_sml"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/sml.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/sml.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    aliases: ['ml'],
    keywords: {
      keyword:
        /* according to Definition of Standard ML 97  */
        'abstype and andalso as case datatype do else end eqtype ' +
        'exception fn fun functor handle if in include infix infixr ' +
        'let local nonfix of op open orelse raise rec sharing sig ' +
        'signature struct structure then type val with withtype where while',
      built_in:
        /* built-in types according to basis library */
        'array bool char exn int list option order real ref string substring vector unit word',
      literal:
        'true false NONE SOME LESS EQUAL GREATER nil'
    },
    illegal: /\/\/|>>/,
    lexemes: '[a-z_]\\w*!?',
    contains: [
      {
        className: 'literal',
        begin: /\[(\|\|)?\]|\(\)/,
        relevance: 0
      },
      hljs.COMMENT(
        '\\(\\*',
        '\\*\\)',
        {
          contains: ['self']
        }
      ),
      { /* type variable */
        className: 'symbol',
        begin: '\'[A-Za-z_](?!\')[\\w\']*'
        /* the grammar is ambiguous on how 'a'b should be interpreted but not the compiler */
      },
      { /* polymorphic variant */
        className: 'type',
        begin: '`[A-Z][\\w\']*'
      },
      { /* module or constructor */
        className: 'type',
        begin: '\\b[A-Z][\\w\']*',
        relevance: 0
      },
      { /* don't color identifiers, but safely catch all identifiers with '*/
        begin: '[a-z_]\\w*\'[\\w\']*'
      },
      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'string', relevance: 0}),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
      {
        className: 'number',
        begin:
          '\\b(0[xX][a-fA-F0-9_]+[Lln]?|' +
          '0[oO][0-7_]+[Lln]?|' +
          '0[bB][01_]+[Lln]?|' +
          '[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',
        relevance: 0
      },
      {
        begin: /[-=]>/ // relevance booster
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9zbWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9zbWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydtbCddLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOlxuICAgICAgICAvKiBhY2NvcmRpbmcgdG8gRGVmaW5pdGlvbiBvZiBTdGFuZGFyZCBNTCA5NyAgKi9cbiAgICAgICAgJ2Fic3R5cGUgYW5kIGFuZGFsc28gYXMgY2FzZSBkYXRhdHlwZSBkbyBlbHNlIGVuZCBlcXR5cGUgJyArXG4gICAgICAgICdleGNlcHRpb24gZm4gZnVuIGZ1bmN0b3IgaGFuZGxlIGlmIGluIGluY2x1ZGUgaW5maXggaW5maXhyICcgK1xuICAgICAgICAnbGV0IGxvY2FsIG5vbmZpeCBvZiBvcCBvcGVuIG9yZWxzZSByYWlzZSByZWMgc2hhcmluZyBzaWcgJyArXG4gICAgICAgICdzaWduYXR1cmUgc3RydWN0IHN0cnVjdHVyZSB0aGVuIHR5cGUgdmFsIHdpdGggd2l0aHR5cGUgd2hlcmUgd2hpbGUnLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgIC8qIGJ1aWx0LWluIHR5cGVzIGFjY29yZGluZyB0byBiYXNpcyBsaWJyYXJ5ICovXG4gICAgICAgICdhcnJheSBib29sIGNoYXIgZXhuIGludCBsaXN0IG9wdGlvbiBvcmRlciByZWFsIHJlZiBzdHJpbmcgc3Vic3RyaW5nIHZlY3RvciB1bml0IHdvcmQnLFxuICAgICAgbGl0ZXJhbDpcbiAgICAgICAgJ3RydWUgZmFsc2UgTk9ORSBTT01FIExFU1MgRVFVQUwgR1JFQVRFUiBuaWwnXG4gICAgfSxcbiAgICBpbGxlZ2FsOiAvXFwvXFwvfD4+LyxcbiAgICBsZXhlbWVzOiAnW2Etel9dXFxcXHcqIT8nLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2xpdGVyYWwnLFxuICAgICAgICBiZWdpbjogL1xcWyhcXHxcXHwpP1xcXXxcXChcXCkvLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICdcXFxcKFxcXFwqJyxcbiAgICAgICAgJ1xcXFwqXFxcXCknLFxuICAgICAgICB7XG4gICAgICAgICAgY29udGFpbnM6IFsnc2VsZiddXG4gICAgICAgIH1cbiAgICAgICksXG4gICAgICB7IC8qIHR5cGUgdmFyaWFibGUgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgYmVnaW46ICdcXCdbQS1aYS16X10oPyFcXCcpW1xcXFx3XFwnXSonXG4gICAgICAgIC8qIHRoZSBncmFtbWFyIGlzIGFtYmlndW91cyBvbiBob3cgJ2EnYiBzaG91bGQgYmUgaW50ZXJwcmV0ZWQgYnV0IG5vdCB0aGUgY29tcGlsZXIgKi9cbiAgICAgIH0sXG4gICAgICB7IC8qIHBvbHltb3JwaGljIHZhcmlhbnQgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgIGJlZ2luOiAnYFtBLVpdW1xcXFx3XFwnXSonXG4gICAgICB9LFxuICAgICAgeyAvKiBtb2R1bGUgb3IgY29uc3RydWN0b3IgKi9cbiAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgIGJlZ2luOiAnXFxcXGJbQS1aXVtcXFxcd1xcJ10qJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgeyAvKiBkb24ndCBjb2xvciBpZGVudGlmaWVycywgYnV0IHNhZmVseSBjYXRjaCBhbGwgaWRlbnRpZmllcnMgd2l0aCAnKi9cbiAgICAgICAgYmVnaW46ICdbYS16X11cXFxcdypcXCdbXFxcXHdcXCddKidcbiAgICAgIH0sXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5BUE9TX1NUUklOR19NT0RFLCB7Y2xhc3NOYW1lOiAnc3RyaW5nJywgcmVsZXZhbmNlOiAwfSksXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge2lsbGVnYWw6IG51bGx9KSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46XG4gICAgICAgICAgJ1xcXFxiKDBbeFhdW2EtZkEtRjAtOV9dK1tMbG5dP3wnICtcbiAgICAgICAgICAnMFtvT11bMC03X10rW0xsbl0/fCcgK1xuICAgICAgICAgICcwW2JCXVswMV9dK1tMbG5dP3wnICtcbiAgICAgICAgICAnWzAtOV1bMC05X10qKFtMbG5dfChcXFxcLlswLTlfXSopPyhbZUVdWy0rXT9bMC05X10rKT8pPyknLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvWy09XT4vIC8vIHJlbGV2YW5jZSBib29zdGVyXG4gICAgICB9XG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==