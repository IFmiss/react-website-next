(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_delphi"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/delphi.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/delphi.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var KEYWORDS =
    'exports register file shl array record property for mod while set ally label uses raise not ' +
    'stored class safecall var interface or private static exit index inherited to else stdcall ' +
    'override shr asm far resourcestring finalization packed virtual out and protected library do ' +
    'xorwrite goto near function end div overload object unit begin string on inline repeat until ' +
    'destructor write message program with read initialization except default nil if case cdecl in ' +
    'downto threadvar of try pascal const external constructor type public then implementation ' +
    'finally published procedure absolute reintroduce operator as is abstract alias assembler ' +
    'bitpacked break continue cppdecl cvar enumerator experimental platform deprecated ' +
    'unimplemented dynamic export far16 forward generic helper implements interrupt iochecks ' +
    'local name nodefault noreturn nostackframe oldfpccall otherwise saveregisters softfloat ' +
    'specialize strict unaligned varargs ';
  var COMMENT_MODES = [
    hljs.C_LINE_COMMENT_MODE,
    hljs.COMMENT(/\{/, /\}/, {relevance: 0}),
    hljs.COMMENT(/\(\*/, /\*\)/, {relevance: 10})
  ];
  var DIRECTIVE = {
    className: 'meta',
    variants: [
      {begin: /\{\$/, end: /\}/},
      {begin: /\(\*\$/, end: /\*\)/}
    ]
  };
  var STRING = {
    className: 'string',
    begin: /'/, end: /'/,
    contains: [{begin: /''/}]
  };
  var CHAR_STRING = {
    className: 'string', begin: /(#\d+)+/
  };
  var CLASS = {
    begin: hljs.IDENT_RE + '\\s*=\\s*class\\s*\\(', returnBegin: true,
    contains: [
      hljs.TITLE_MODE
    ]
  };
  var FUNCTION = {
    className: 'function',
    beginKeywords: 'function constructor destructor procedure', end: /[:;]/,
    keywords: 'function constructor|10 destructor|10 procedure|10',
    contains: [
      hljs.TITLE_MODE,
      {
        className: 'params',
        begin: /\(/, end: /\)/,
        keywords: KEYWORDS,
        contains: [STRING, CHAR_STRING, DIRECTIVE].concat(COMMENT_MODES)
      },
      DIRECTIVE
    ].concat(COMMENT_MODES)
  };
  return {
    aliases: ['dpr', 'dfm', 'pas', 'pascal', 'freepascal', 'lazarus', 'lpr', 'lfm'],
    case_insensitive: true,
    keywords: KEYWORDS,
    illegal: /"|\$[G-Zg-z]|\/\*|<\/|\|/,
    contains: [
      STRING, CHAR_STRING,
      hljs.NUMBER_MODE,
      CLASS,
      FUNCTION,
      DIRECTIVE
    ].concat(COMMENT_MODES)
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9kZWxwaGkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9kZWxwaGkuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBLRVlXT1JEUyA9XG4gICAgJ2V4cG9ydHMgcmVnaXN0ZXIgZmlsZSBzaGwgYXJyYXkgcmVjb3JkIHByb3BlcnR5IGZvciBtb2Qgd2hpbGUgc2V0IGFsbHkgbGFiZWwgdXNlcyByYWlzZSBub3QgJyArXG4gICAgJ3N0b3JlZCBjbGFzcyBzYWZlY2FsbCB2YXIgaW50ZXJmYWNlIG9yIHByaXZhdGUgc3RhdGljIGV4aXQgaW5kZXggaW5oZXJpdGVkIHRvIGVsc2Ugc3RkY2FsbCAnICtcbiAgICAnb3ZlcnJpZGUgc2hyIGFzbSBmYXIgcmVzb3VyY2VzdHJpbmcgZmluYWxpemF0aW9uIHBhY2tlZCB2aXJ0dWFsIG91dCBhbmQgcHJvdGVjdGVkIGxpYnJhcnkgZG8gJyArXG4gICAgJ3hvcndyaXRlIGdvdG8gbmVhciBmdW5jdGlvbiBlbmQgZGl2IG92ZXJsb2FkIG9iamVjdCB1bml0IGJlZ2luIHN0cmluZyBvbiBpbmxpbmUgcmVwZWF0IHVudGlsICcgK1xuICAgICdkZXN0cnVjdG9yIHdyaXRlIG1lc3NhZ2UgcHJvZ3JhbSB3aXRoIHJlYWQgaW5pdGlhbGl6YXRpb24gZXhjZXB0IGRlZmF1bHQgbmlsIGlmIGNhc2UgY2RlY2wgaW4gJyArXG4gICAgJ2Rvd250byB0aHJlYWR2YXIgb2YgdHJ5IHBhc2NhbCBjb25zdCBleHRlcm5hbCBjb25zdHJ1Y3RvciB0eXBlIHB1YmxpYyB0aGVuIGltcGxlbWVudGF0aW9uICcgK1xuICAgICdmaW5hbGx5IHB1Ymxpc2hlZCBwcm9jZWR1cmUgYWJzb2x1dGUgcmVpbnRyb2R1Y2Ugb3BlcmF0b3IgYXMgaXMgYWJzdHJhY3QgYWxpYXMgYXNzZW1ibGVyICcgK1xuICAgICdiaXRwYWNrZWQgYnJlYWsgY29udGludWUgY3BwZGVjbCBjdmFyIGVudW1lcmF0b3IgZXhwZXJpbWVudGFsIHBsYXRmb3JtIGRlcHJlY2F0ZWQgJyArXG4gICAgJ3VuaW1wbGVtZW50ZWQgZHluYW1pYyBleHBvcnQgZmFyMTYgZm9yd2FyZCBnZW5lcmljIGhlbHBlciBpbXBsZW1lbnRzIGludGVycnVwdCBpb2NoZWNrcyAnICtcbiAgICAnbG9jYWwgbmFtZSBub2RlZmF1bHQgbm9yZXR1cm4gbm9zdGFja2ZyYW1lIG9sZGZwY2NhbGwgb3RoZXJ3aXNlIHNhdmVyZWdpc3RlcnMgc29mdGZsb2F0ICcgK1xuICAgICdzcGVjaWFsaXplIHN0cmljdCB1bmFsaWduZWQgdmFyYXJncyAnO1xuICB2YXIgQ09NTUVOVF9NT0RFUyA9IFtcbiAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgaGxqcy5DT01NRU5UKC9cXHsvLCAvXFx9Lywge3JlbGV2YW5jZTogMH0pLFxuICAgIGhsanMuQ09NTUVOVCgvXFwoXFwqLywgL1xcKlxcKS8sIHtyZWxldmFuY2U6IDEwfSlcbiAgXTtcbiAgdmFyIERJUkVDVElWRSA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge2JlZ2luOiAvXFx7XFwkLywgZW5kOiAvXFx9L30sXG4gICAgICB7YmVnaW46IC9cXChcXCpcXCQvLCBlbmQ6IC9cXCpcXCkvfVxuICAgIF1cbiAgfTtcbiAgdmFyIFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvJy8sIGVuZDogLycvLFxuICAgIGNvbnRhaW5zOiBbe2JlZ2luOiAvJycvfV1cbiAgfTtcbiAgdmFyIENIQVJfU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsIGJlZ2luOiAvKCNcXGQrKSsvXG4gIH07XG4gIHZhciBDTEFTUyA9IHtcbiAgICBiZWdpbjogaGxqcy5JREVOVF9SRSArICdcXFxccyo9XFxcXHMqY2xhc3NcXFxccypcXFxcKCcsIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLlRJVExFX01PREVcbiAgICBdXG4gIH07XG4gIHZhciBGVU5DVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgYmVnaW5LZXl3b3JkczogJ2Z1bmN0aW9uIGNvbnN0cnVjdG9yIGRlc3RydWN0b3IgcHJvY2VkdXJlJywgZW5kOiAvWzo7XS8sXG4gICAga2V5d29yZHM6ICdmdW5jdGlvbiBjb25zdHJ1Y3RvcnwxMCBkZXN0cnVjdG9yfDEwIHByb2NlZHVyZXwxMCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuVElUTEVfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvLFxuICAgICAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgICAgIGNvbnRhaW5zOiBbU1RSSU5HLCBDSEFSX1NUUklORywgRElSRUNUSVZFXS5jb25jYXQoQ09NTUVOVF9NT0RFUylcbiAgICAgIH0sXG4gICAgICBESVJFQ1RJVkVcbiAgICBdLmNvbmNhdChDT01NRU5UX01PREVTKVxuICB9O1xuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsnZHByJywgJ2RmbScsICdwYXMnLCAncGFzY2FsJywgJ2ZyZWVwYXNjYWwnLCAnbGF6YXJ1cycsICdscHInLCAnbGZtJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgaWxsZWdhbDogL1wifFxcJFtHLVpnLXpdfFxcL1xcKnw8XFwvfFxcfC8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIFNUUklORywgQ0hBUl9TVFJJTkcsXG4gICAgICBobGpzLk5VTUJFUl9NT0RFLFxuICAgICAgQ0xBU1MsXG4gICAgICBGVU5DVElPTixcbiAgICAgIERJUkVDVElWRVxuICAgIF0uY29uY2F0KENPTU1FTlRfTU9ERVMpXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9