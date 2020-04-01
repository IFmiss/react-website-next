(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_vbnet"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/vbnet.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/vbnet.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    aliases: ['vb'],
    case_insensitive: true,
    keywords: {
      keyword:
        'addhandler addressof alias and andalso aggregate ansi as assembly auto binary by byref byval ' + /* a-b */
        'call case catch class compare const continue custom declare default delegate dim distinct do ' + /* c-d */
        'each equals else elseif end enum erase error event exit explicit finally for friend from function ' + /* e-f */
        'get global goto group handles if implements imports in inherits interface into is isfalse isnot istrue ' + /* g-i */
        'join key let lib like loop me mid mod module mustinherit mustoverride mybase myclass ' + /* j-m */
        'namespace narrowing new next not notinheritable notoverridable ' + /* n */
        'of off on operator option optional or order orelse overloads overridable overrides ' + /* o */
        'paramarray partial preserve private property protected public ' + /* p */
        'raiseevent readonly redim rem removehandler resume return ' + /* r */
        'select set shadows shared skip static step stop structure strict sub synclock ' + /* s */
        'take text then throw to try unicode until using when where while widening with withevents writeonly xor', /* t-x */
      built_in:
        'boolean byte cbool cbyte cchar cdate cdec cdbl char cint clng cobj csbyte cshort csng cstr ctype ' +  /* b-c */
        'date decimal directcast double gettype getxmlnamespace iif integer long object ' + /* d-o */
        'sbyte short single string trycast typeof uinteger ulong ushort', /* s-u */
      literal:
        'true false nothing'
    },
    illegal: '//|{|}|endif|gosub|variant|wend|^\\$ ', /* reserved deprecated keywords */
    contains: [
      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [{begin: '""'}]}),
      hljs.COMMENT(
        '\'',
        '$',
        {
          returnBegin: true,
          contains: [
            {
              className: 'doctag',
              begin: '\'\'\'|<!--|-->',
              contains: [hljs.PHRASAL_WORDS_MODE]
            },
            {
              className: 'doctag',
              begin: '</?', end: '>',
              contains: [hljs.PHRASAL_WORDS_MODE]
            }
          ]
        }
      ),
      hljs.C_NUMBER_MODE,
      {
        className: 'meta',
        begin: '#', end: '$',
        keywords: {'meta-keyword': 'if else elseif end region externalsource'}
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF92Ym5ldC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3ZibmV0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsndmInXSxcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnYWRkaGFuZGxlciBhZGRyZXNzb2YgYWxpYXMgYW5kIGFuZGFsc28gYWdncmVnYXRlIGFuc2kgYXMgYXNzZW1ibHkgYXV0byBiaW5hcnkgYnkgYnlyZWYgYnl2YWwgJyArIC8qIGEtYiAqL1xuICAgICAgICAnY2FsbCBjYXNlIGNhdGNoIGNsYXNzIGNvbXBhcmUgY29uc3QgY29udGludWUgY3VzdG9tIGRlY2xhcmUgZGVmYXVsdCBkZWxlZ2F0ZSBkaW0gZGlzdGluY3QgZG8gJyArIC8qIGMtZCAqL1xuICAgICAgICAnZWFjaCBlcXVhbHMgZWxzZSBlbHNlaWYgZW5kIGVudW0gZXJhc2UgZXJyb3IgZXZlbnQgZXhpdCBleHBsaWNpdCBmaW5hbGx5IGZvciBmcmllbmQgZnJvbSBmdW5jdGlvbiAnICsgLyogZS1mICovXG4gICAgICAgICdnZXQgZ2xvYmFsIGdvdG8gZ3JvdXAgaGFuZGxlcyBpZiBpbXBsZW1lbnRzIGltcG9ydHMgaW4gaW5oZXJpdHMgaW50ZXJmYWNlIGludG8gaXMgaXNmYWxzZSBpc25vdCBpc3RydWUgJyArIC8qIGctaSAqL1xuICAgICAgICAnam9pbiBrZXkgbGV0IGxpYiBsaWtlIGxvb3AgbWUgbWlkIG1vZCBtb2R1bGUgbXVzdGluaGVyaXQgbXVzdG92ZXJyaWRlIG15YmFzZSBteWNsYXNzICcgKyAvKiBqLW0gKi9cbiAgICAgICAgJ25hbWVzcGFjZSBuYXJyb3dpbmcgbmV3IG5leHQgbm90IG5vdGluaGVyaXRhYmxlIG5vdG92ZXJyaWRhYmxlICcgKyAvKiBuICovXG4gICAgICAgICdvZiBvZmYgb24gb3BlcmF0b3Igb3B0aW9uIG9wdGlvbmFsIG9yIG9yZGVyIG9yZWxzZSBvdmVybG9hZHMgb3ZlcnJpZGFibGUgb3ZlcnJpZGVzICcgKyAvKiBvICovXG4gICAgICAgICdwYXJhbWFycmF5IHBhcnRpYWwgcHJlc2VydmUgcHJpdmF0ZSBwcm9wZXJ0eSBwcm90ZWN0ZWQgcHVibGljICcgKyAvKiBwICovXG4gICAgICAgICdyYWlzZWV2ZW50IHJlYWRvbmx5IHJlZGltIHJlbSByZW1vdmVoYW5kbGVyIHJlc3VtZSByZXR1cm4gJyArIC8qIHIgKi9cbiAgICAgICAgJ3NlbGVjdCBzZXQgc2hhZG93cyBzaGFyZWQgc2tpcCBzdGF0aWMgc3RlcCBzdG9wIHN0cnVjdHVyZSBzdHJpY3Qgc3ViIHN5bmNsb2NrICcgKyAvKiBzICovXG4gICAgICAgICd0YWtlIHRleHQgdGhlbiB0aHJvdyB0byB0cnkgdW5pY29kZSB1bnRpbCB1c2luZyB3aGVuIHdoZXJlIHdoaWxlIHdpZGVuaW5nIHdpdGggd2l0aGV2ZW50cyB3cml0ZW9ubHkgeG9yJywgLyogdC14ICovXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJ2Jvb2xlYW4gYnl0ZSBjYm9vbCBjYnl0ZSBjY2hhciBjZGF0ZSBjZGVjIGNkYmwgY2hhciBjaW50IGNsbmcgY29iaiBjc2J5dGUgY3Nob3J0IGNzbmcgY3N0ciBjdHlwZSAnICsgIC8qIGItYyAqL1xuICAgICAgICAnZGF0ZSBkZWNpbWFsIGRpcmVjdGNhc3QgZG91YmxlIGdldHR5cGUgZ2V0eG1sbmFtZXNwYWNlIGlpZiBpbnRlZ2VyIGxvbmcgb2JqZWN0ICcgKyAvKiBkLW8gKi9cbiAgICAgICAgJ3NieXRlIHNob3J0IHNpbmdsZSBzdHJpbmcgdHJ5Y2FzdCB0eXBlb2YgdWludGVnZXIgdWxvbmcgdXNob3J0JywgLyogcy11ICovXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAndHJ1ZSBmYWxzZSBub3RoaW5nJ1xuICAgIH0sXG4gICAgaWxsZWdhbDogJy8vfHt8fXxlbmRpZnxnb3N1Ynx2YXJpYW50fHdlbmR8XlxcXFwkICcsIC8qIHJlc2VydmVkIGRlcHJlY2F0ZWQga2V5d29yZHMgKi9cbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtjb250YWluczogW3tiZWdpbjogJ1wiXCInfV19KSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJ1xcJycsXG4gICAgICAgICckJyxcbiAgICAgICAge1xuICAgICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2RvY3RhZycsXG4gICAgICAgICAgICAgIGJlZ2luOiAnXFwnXFwnXFwnfDwhLS18LS0+JyxcbiAgICAgICAgICAgICAgY29udGFpbnM6IFtobGpzLlBIUkFTQUxfV09SRFNfTU9ERV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2RvY3RhZycsXG4gICAgICAgICAgICAgIGJlZ2luOiAnPC8/JywgZW5kOiAnPicsXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBbaGxqcy5QSFJBU0FMX1dPUkRTX01PREVdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICcjJywgZW5kOiAnJCcsXG4gICAgICAgIGtleXdvcmRzOiB7J21ldGEta2V5d29yZCc6ICdpZiBlbHNlIGVsc2VpZiBlbmQgcmVnaW9uIGV4dGVybmFsc291cmNlJ31cbiAgICAgIH1cbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==