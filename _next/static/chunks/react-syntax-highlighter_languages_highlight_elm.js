(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_elm"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/elm.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/elm.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var COMMENT = {
    variants: [
      hljs.COMMENT('--', '$'),
      hljs.COMMENT(
        '{-',
        '-}',
        {
          contains: ['self']
        }
      )
    ]
  };

  var CONSTRUCTOR = {
    className: 'type',
    begin: '\\b[A-Z][\\w\']*', // TODO: other constructors (built-in, infix).
    relevance: 0
  };

  var LIST = {
    begin: '\\(', end: '\\)',
    illegal: '"',
    contains: [
      {className: 'type', begin: '\\b[A-Z][\\w]*(\\((\\.\\.|,|\\w+)\\))?'},
      COMMENT
    ]
  };

  var RECORD = {
    begin: '{', end: '}',
    contains: LIST.contains
  };

  var CHARACTER = {
    className: 'string',
    begin: '\'\\\\?.', end: '\'',
    illegal: '.'
  };

  return {
    keywords:
      'let in if then else case of where module import exposing ' +
      'type alias as infix infixl infixr port effect command subscription',
    contains: [

      // Top-level constructions.

      {
        beginKeywords: 'port effect module', end: 'exposing',
        keywords: 'port effect module where command subscription exposing',
        contains: [LIST, COMMENT],
        illegal: '\\W\\.|;'
      },
      {
        begin: 'import', end: '$',
        keywords: 'import as exposing',
        contains: [LIST, COMMENT],
        illegal: '\\W\\.|;'
      },
      {
        begin: 'type', end: '$',
        keywords: 'type alias',
        contains: [CONSTRUCTOR, LIST, RECORD, COMMENT]
      },
      {
        beginKeywords: 'infix infixl infixr', end: '$',
        contains: [hljs.C_NUMBER_MODE, COMMENT]
      },
      {
        begin: 'port', end: '$',
        keywords: 'port',
        contains: [COMMENT]
      },

      // Literals and names.

      CHARACTER,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE,
      CONSTRUCTOR,
      hljs.inherit(hljs.TITLE_MODE, {begin: '^[_a-z][\\w\']*'}),
      COMMENT,

      {begin: '->|<-'} // No markup, relevance booster
    ],
    illegal: /;/
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9lbG0uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9lbG0uanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBDT01NRU5UID0ge1xuICAgIHZhcmlhbnRzOiBbXG4gICAgICBobGpzLkNPTU1FTlQoJy0tJywgJyQnKSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJ3stJyxcbiAgICAgICAgJy19JyxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnXVxuICAgICAgICB9XG4gICAgICApXG4gICAgXVxuICB9O1xuXG4gIHZhciBDT05TVFJVQ1RPUiA9IHtcbiAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICBiZWdpbjogJ1xcXFxiW0EtWl1bXFxcXHdcXCddKicsIC8vIFRPRE86IG90aGVyIGNvbnN0cnVjdG9ycyAoYnVpbHQtaW4sIGluZml4KS5cbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICB2YXIgTElTVCA9IHtcbiAgICBiZWdpbjogJ1xcXFwoJywgZW5kOiAnXFxcXCknLFxuICAgIGlsbGVnYWw6ICdcIicsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtjbGFzc05hbWU6ICd0eXBlJywgYmVnaW46ICdcXFxcYltBLVpdW1xcXFx3XSooXFxcXCgoXFxcXC5cXFxcLnwsfFxcXFx3KylcXFxcKSk/J30sXG4gICAgICBDT01NRU5UXG4gICAgXVxuICB9O1xuXG4gIHZhciBSRUNPUkQgPSB7XG4gICAgYmVnaW46ICd7JywgZW5kOiAnfScsXG4gICAgY29udGFpbnM6IExJU1QuY29udGFpbnNcbiAgfTtcblxuICB2YXIgQ0hBUkFDVEVSID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcXCdcXFxcXFxcXD8uJywgZW5kOiAnXFwnJyxcbiAgICBpbGxlZ2FsOiAnLidcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGtleXdvcmRzOlxuICAgICAgJ2xldCBpbiBpZiB0aGVuIGVsc2UgY2FzZSBvZiB3aGVyZSBtb2R1bGUgaW1wb3J0IGV4cG9zaW5nICcgK1xuICAgICAgJ3R5cGUgYWxpYXMgYXMgaW5maXggaW5maXhsIGluZml4ciBwb3J0IGVmZmVjdCBjb21tYW5kIHN1YnNjcmlwdGlvbicsXG4gICAgY29udGFpbnM6IFtcblxuICAgICAgLy8gVG9wLWxldmVsIGNvbnN0cnVjdGlvbnMuXG5cbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ3BvcnQgZWZmZWN0IG1vZHVsZScsIGVuZDogJ2V4cG9zaW5nJyxcbiAgICAgICAga2V5d29yZHM6ICdwb3J0IGVmZmVjdCBtb2R1bGUgd2hlcmUgY29tbWFuZCBzdWJzY3JpcHRpb24gZXhwb3NpbmcnLFxuICAgICAgICBjb250YWluczogW0xJU1QsIENPTU1FTlRdLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXFdcXFxcLnw7J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdpbXBvcnQnLCBlbmQ6ICckJyxcbiAgICAgICAga2V5d29yZHM6ICdpbXBvcnQgYXMgZXhwb3NpbmcnLFxuICAgICAgICBjb250YWluczogW0xJU1QsIENPTU1FTlRdLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXFdcXFxcLnw7J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICd0eXBlJywgZW5kOiAnJCcsXG4gICAgICAgIGtleXdvcmRzOiAndHlwZSBhbGlhcycsXG4gICAgICAgIGNvbnRhaW5zOiBbQ09OU1RSVUNUT1IsIExJU1QsIFJFQ09SRCwgQ09NTUVOVF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdpbmZpeCBpbmZpeGwgaW5maXhyJywgZW5kOiAnJCcsXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5DX05VTUJFUl9NT0RFLCBDT01NRU5UXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdwb3J0JywgZW5kOiAnJCcsXG4gICAgICAgIGtleXdvcmRzOiAncG9ydCcsXG4gICAgICAgIGNvbnRhaW5zOiBbQ09NTUVOVF1cbiAgICAgIH0sXG5cbiAgICAgIC8vIExpdGVyYWxzIGFuZCBuYW1lcy5cblxuICAgICAgQ0hBUkFDVEVSLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIENPTlNUUlVDVE9SLFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge2JlZ2luOiAnXltfYS16XVtcXFxcd1xcJ10qJ30pLFxuICAgICAgQ09NTUVOVCxcblxuICAgICAge2JlZ2luOiAnLT58PC0nfSAvLyBObyBtYXJrdXAsIHJlbGV2YW5jZSBib29zdGVyXG4gICAgXSxcbiAgICBpbGxlZ2FsOiAvOy9cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=