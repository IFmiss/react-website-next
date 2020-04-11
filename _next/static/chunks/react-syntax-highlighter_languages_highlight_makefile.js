(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_makefile"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/makefile.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/makefile.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  /* Variables: simple (eg $(var)) and special (eg $@) */
  var VARIABLE = {
    className: 'variable',
    variants: [
      {
        begin: '\\$\\(' + hljs.UNDERSCORE_IDENT_RE + '\\)',
        contains: [hljs.BACKSLASH_ESCAPE],
      },
      {
        begin: /\$[@%<?\^\+\*]/
      },
    ]
  };
  /* Quoted string with variables inside */
  var QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VARIABLE,
    ]
  };
  /* Function: $(func arg,...) */
  var FUNC = {
    className: 'variable',
    begin: /\$\([\w-]+\s/, end: /\)/,
    keywords: {
      built_in:
        'subst patsubst strip findstring filter filter-out sort ' +
        'word wordlist firstword lastword dir notdir suffix basename ' +
        'addsuffix addprefix join wildcard realpath abspath error warning ' +
        'shell origin flavor foreach if or and call eval file value',
    },
    contains: [
      VARIABLE,
    ]
  };
  /* Variable assignment */
  var VAR_ASSIG = {
    begin: '^' + hljs.UNDERSCORE_IDENT_RE + '\\s*[:+?]?=',
    illegal: '\\n',
    returnBegin: true,
    contains: [
      {
        begin: '^' + hljs.UNDERSCORE_IDENT_RE, end: '[:+?]?=',
        excludeEnd: true,
      }
    ]
  };
  /* Meta targets (.PHONY) */
  var META = {
    className: 'meta',
    begin: /^\.PHONY:/, end: /$/,
    keywords: {'meta-keyword': '.PHONY'},
    lexemes: /[\.\w]+/
  };
  /* Targets */
  var TARGET = {
    className: 'section',
    begin: /^[^\s]+:/, end: /$/,
    contains: [VARIABLE,]
  };
  return {
    aliases: ['mk', 'mak'],
    keywords:
      'define endef undefine ifdef ifndef ifeq ifneq else endif ' +
      'include -include sinclude override export unexport private vpath',
    lexemes: /[\w-]+/,
    contains: [
      hljs.HASH_COMMENT_MODE,
      VARIABLE,
      QUOTE_STRING,
      FUNC,
      VAR_ASSIG,
      META,
      TARGET,
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9tYWtlZmlsZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL21ha2VmaWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICAvKiBWYXJpYWJsZXM6IHNpbXBsZSAoZWcgJCh2YXIpKSBhbmQgc3BlY2lhbCAoZWcgJEApICovXG4gIHZhciBWQVJJQUJMRSA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcJFxcXFwoJyArIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSArICdcXFxcKScsXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwkW0AlPD9cXF5cXCtcXCpdL1xuICAgICAgfSxcbiAgICBdXG4gIH07XG4gIC8qIFF1b3RlZCBzdHJpbmcgd2l0aCB2YXJpYWJsZXMgaW5zaWRlICovXG4gIHZhciBRVU9URV9TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogL1wiLywgZW5kOiAvXCIvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICBWQVJJQUJMRSxcbiAgICBdXG4gIH07XG4gIC8qIEZ1bmN0aW9uOiAkKGZ1bmMgYXJnLC4uLikgKi9cbiAgdmFyIEZVTkMgPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIGJlZ2luOiAvXFwkXFwoW1xcdy1dK1xccy8sIGVuZDogL1xcKS8sXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAnc3Vic3QgcGF0c3Vic3Qgc3RyaXAgZmluZHN0cmluZyBmaWx0ZXIgZmlsdGVyLW91dCBzb3J0ICcgK1xuICAgICAgICAnd29yZCB3b3JkbGlzdCBmaXJzdHdvcmQgbGFzdHdvcmQgZGlyIG5vdGRpciBzdWZmaXggYmFzZW5hbWUgJyArXG4gICAgICAgICdhZGRzdWZmaXggYWRkcHJlZml4IGpvaW4gd2lsZGNhcmQgcmVhbHBhdGggYWJzcGF0aCBlcnJvciB3YXJuaW5nICcgK1xuICAgICAgICAnc2hlbGwgb3JpZ2luIGZsYXZvciBmb3JlYWNoIGlmIG9yIGFuZCBjYWxsIGV2YWwgZmlsZSB2YWx1ZScsXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgVkFSSUFCTEUsXG4gICAgXVxuICB9O1xuICAvKiBWYXJpYWJsZSBhc3NpZ25tZW50ICovXG4gIHZhciBWQVJfQVNTSUcgPSB7XG4gICAgYmVnaW46ICdeJyArIGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSArICdcXFxccypbOis/XT89JyxcbiAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXicgKyBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUsIGVuZDogJ1s6Kz9dPz0nLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgfVxuICAgIF1cbiAgfTtcbiAgLyogTWV0YSB0YXJnZXRzICguUEhPTlkpICovXG4gIHZhciBNRVRBID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAvXlxcLlBIT05ZOi8sIGVuZDogLyQvLFxuICAgIGtleXdvcmRzOiB7J21ldGEta2V5d29yZCc6ICcuUEhPTlknfSxcbiAgICBsZXhlbWVzOiAvW1xcLlxcd10rL1xuICB9O1xuICAvKiBUYXJnZXRzICovXG4gIHZhciBUQVJHRVQgPSB7XG4gICAgY2xhc3NOYW1lOiAnc2VjdGlvbicsXG4gICAgYmVnaW46IC9eW15cXHNdKzovLCBlbmQ6IC8kLyxcbiAgICBjb250YWluczogW1ZBUklBQkxFLF1cbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ21rJywgJ21hayddLFxuICAgIGtleXdvcmRzOlxuICAgICAgJ2RlZmluZSBlbmRlZiB1bmRlZmluZSBpZmRlZiBpZm5kZWYgaWZlcSBpZm5lcSBlbHNlIGVuZGlmICcgK1xuICAgICAgJ2luY2x1ZGUgLWluY2x1ZGUgc2luY2x1ZGUgb3ZlcnJpZGUgZXhwb3J0IHVuZXhwb3J0IHByaXZhdGUgdnBhdGgnLFxuICAgIGxleGVtZXM6IC9bXFx3LV0rLyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIFZBUklBQkxFLFxuICAgICAgUVVPVEVfU1RSSU5HLFxuICAgICAgRlVOQyxcbiAgICAgIFZBUl9BU1NJRyxcbiAgICAgIE1FVEEsXG4gICAgICBUQVJHRVQsXG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==