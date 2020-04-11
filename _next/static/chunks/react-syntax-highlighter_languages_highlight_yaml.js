(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_yaml"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/yaml.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/yaml.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var LITERALS = 'true false yes no null';

  var keyPrefix = '^[ \\-]*';
  var keyName =  '[a-zA-Z_][\\w\\-]*';
  var KEY = {
    className: 'attr',
    variants: [
      { begin: keyPrefix + keyName + ":"},
      { begin: keyPrefix + '"' + keyName + '"' + ":"},
      { begin: keyPrefix + "'" + keyName + "'" + ":"}
    ]
  };

  var TEMPLATE_VARIABLES = {
    className: 'template-variable',
    variants: [
      { begin: '\{\{', end: '\}\}' }, // jinja templates Ansible
      { begin: '%\{', end: '\}' } // Ruby i18n
    ]
  };
  var STRING = {
    className: 'string',
    relevance: 0,
    variants: [
      {begin: /'/, end: /'/},
      {begin: /"/, end: /"/},
      {begin: /\S+/}
    ],
    contains: [
      hljs.BACKSLASH_ESCAPE,
      TEMPLATE_VARIABLES
    ]
  };

  return {
    case_insensitive: true,
    aliases: ['yml', 'YAML', 'yaml'],
    contains: [
      KEY,
      {
        className: 'meta',
        begin: '^---\s*$',
        relevance: 10
      },
      { // multi line string
        className: 'string',
        begin: '[\\|>] *$',
        returnEnd: true,
        contains: STRING.contains,
        // very simple termination: next hash key
        end: KEY.variants[0].begin
      },
      { // Ruby/Rails erb
        begin: '<%[%=-]?', end: '[%-]?%>',
        subLanguage: 'ruby',
        excludeBegin: true,
        excludeEnd: true,
        relevance: 0
      },
      { // local tags
        className: 'type',
        begin: '!' + hljs.UNDERSCORE_IDENT_RE,
      },
      { // data type
        className: 'type',
        begin: '!!' + hljs.UNDERSCORE_IDENT_RE,
      },
      { // fragment id &ref
        className: 'meta',
        begin: '&' + hljs.UNDERSCORE_IDENT_RE + '$',
      },
      { // fragment reference *ref
        className: 'meta',
        begin: '\\*' + hljs.UNDERSCORE_IDENT_RE + '$'
      },
      { // array listing
        className: 'bullet',
        begin: '^ *-',
        relevance: 0
      },
      hljs.HASH_COMMENT_MODE,
      {
        beginKeywords: LITERALS,
        keywords: {literal: LITERALS}
      },
      hljs.C_NUMBER_MODE,
      STRING
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF95YW1sLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMveWFtbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIExJVEVSQUxTID0gJ3RydWUgZmFsc2UgeWVzIG5vIG51bGwnO1xuXG4gIHZhciBrZXlQcmVmaXggPSAnXlsgXFxcXC1dKic7XG4gIHZhciBrZXlOYW1lID0gICdbYS16QS1aX11bXFxcXHdcXFxcLV0qJztcbiAgdmFyIEtFWSA9IHtcbiAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjoga2V5UHJlZml4ICsga2V5TmFtZSArIFwiOlwifSxcbiAgICAgIHsgYmVnaW46IGtleVByZWZpeCArICdcIicgKyBrZXlOYW1lICsgJ1wiJyArIFwiOlwifSxcbiAgICAgIHsgYmVnaW46IGtleVByZWZpeCArIFwiJ1wiICsga2V5TmFtZSArIFwiJ1wiICsgXCI6XCJ9XG4gICAgXVxuICB9O1xuXG4gIHZhciBURU1QTEFURV9WQVJJQUJMRVMgPSB7XG4gICAgY2xhc3NOYW1lOiAndGVtcGxhdGUtdmFyaWFibGUnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7IGJlZ2luOiAnXFx7XFx7JywgZW5kOiAnXFx9XFx9JyB9LCAvLyBqaW5qYSB0ZW1wbGF0ZXMgQW5zaWJsZVxuICAgICAgeyBiZWdpbjogJyVcXHsnLCBlbmQ6ICdcXH0nIH0gLy8gUnVieSBpMThuXG4gICAgXVxuICB9O1xuICB2YXIgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7YmVnaW46IC8nLywgZW5kOiAvJy99LFxuICAgICAge2JlZ2luOiAvXCIvLCBlbmQ6IC9cIi99LFxuICAgICAge2JlZ2luOiAvXFxTKy99XG4gICAgXSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgVEVNUExBVEVfVkFSSUFCTEVTXG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBhbGlhc2VzOiBbJ3ltbCcsICdZQU1MJywgJ3lhbWwnXSxcbiAgICBjb250YWluczogW1xuICAgICAgS0VZLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdeLS0tXFxzKiQnLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAgeyAvLyBtdWx0aSBsaW5lIHN0cmluZ1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1tcXFxcfD5dICokJyxcbiAgICAgICAgcmV0dXJuRW5kOiB0cnVlLFxuICAgICAgICBjb250YWluczogU1RSSU5HLmNvbnRhaW5zLFxuICAgICAgICAvLyB2ZXJ5IHNpbXBsZSB0ZXJtaW5hdGlvbjogbmV4dCBoYXNoIGtleVxuICAgICAgICBlbmQ6IEtFWS52YXJpYW50c1swXS5iZWdpblxuICAgICAgfSxcbiAgICAgIHsgLy8gUnVieS9SYWlscyBlcmJcbiAgICAgICAgYmVnaW46ICc8JVslPS1dPycsIGVuZDogJ1slLV0/JT4nLFxuICAgICAgICBzdWJMYW5ndWFnZTogJ3J1YnknLFxuICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHsgLy8gbG9jYWwgdGFnc1xuICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgYmVnaW46ICchJyArIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICAgIH0sXG4gICAgICB7IC8vIGRhdGEgdHlwZVxuICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgYmVnaW46ICchIScgKyBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUsXG4gICAgICB9LFxuICAgICAgeyAvLyBmcmFnbWVudCBpZCAmcmVmXG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJyYnICsgaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJyQnLFxuICAgICAgfSxcbiAgICAgIHsgLy8gZnJhZ21lbnQgcmVmZXJlbmNlICpyZWZcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnXFxcXConICsgaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJyQnXG4gICAgICB9LFxuICAgICAgeyAvLyBhcnJheSBsaXN0aW5nXG4gICAgICAgIGNsYXNzTmFtZTogJ2J1bGxldCcsXG4gICAgICAgIGJlZ2luOiAnXiAqLScsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6IExJVEVSQUxTLFxuICAgICAgICBrZXl3b3Jkczoge2xpdGVyYWw6IExJVEVSQUxTfVxuICAgICAgfSxcbiAgICAgIGhsanMuQ19OVU1CRVJfTU9ERSxcbiAgICAgIFNUUklOR1xuICAgIF1cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9