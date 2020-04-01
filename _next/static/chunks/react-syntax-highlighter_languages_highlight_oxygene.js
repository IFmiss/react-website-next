(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_oxygene"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/oxygene.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/oxygene.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var OXYGENE_KEYWORDS = 'abstract add and array as asc aspect assembly async begin break block by case class concat const copy constructor continue '+
    'create default delegate desc distinct div do downto dynamic each else empty end ensure enum equals event except exit extension external false '+
    'final finalize finalizer finally flags for forward from function future global group has if implementation implements implies in index inherited '+
    'inline interface into invariants is iterator join locked locking loop matching method mod module namespace nested new nil not notify nullable of '+
    'old on operator or order out override parallel params partial pinned private procedure property protected public queryable raise read readonly '+
    'record reintroduce remove repeat require result reverse sealed select self sequence set shl shr skip static step soft take then to true try tuple '+
    'type union unit unsafe until uses using var virtual raises volatile where while with write xor yield await mapped deprecated stdcall cdecl pascal '+
    'register safecall overload library platform reference packed strict published autoreleasepool selector strong weak unretained';
  var CURLY_COMMENT =  hljs.COMMENT(
    '{',
    '}',
    {
      relevance: 0
    }
  );
  var PAREN_COMMENT = hljs.COMMENT(
    '\\(\\*',
    '\\*\\)',
    {
      relevance: 10
    }
  );
  var STRING = {
    className: 'string',
    begin: '\'', end: '\'',
    contains: [{begin: '\'\''}]
  };
  var CHAR_STRING = {
    className: 'string', begin: '(#\\d+)+'
  };
  var FUNCTION = {
    className: 'function',
    beginKeywords: 'function constructor destructor procedure method', end: '[:;]',
    keywords: 'function constructor|10 destructor|10 procedure|10 method|10',
    contains: [
      hljs.TITLE_MODE,
      {
        className: 'params',
        begin: '\\(', end: '\\)',
        keywords: OXYGENE_KEYWORDS,
        contains: [STRING, CHAR_STRING]
      },
      CURLY_COMMENT, PAREN_COMMENT
    ]
  };
  return {
    case_insensitive: true,
    lexemes: /\.?\w+/,
    keywords: OXYGENE_KEYWORDS,
    illegal: '("|\\$[G-Zg-z]|\\/\\*|</|=>|->)',
    contains: [
      CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE,
      STRING, CHAR_STRING,
      hljs.NUMBER_MODE,
      FUNCTION,
      {
        className: 'class',
        begin: '=\\bclass\\b', end: 'end;',
        keywords: OXYGENE_KEYWORDS,
        contains: [
          STRING, CHAR_STRING,
          CURLY_COMMENT, PAREN_COMMENT, hljs.C_LINE_COMMENT_MODE,
          FUNCTION
        ]
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9veHlnZW5lLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvb3h5Z2VuZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIE9YWUdFTkVfS0VZV09SRFMgPSAnYWJzdHJhY3QgYWRkIGFuZCBhcnJheSBhcyBhc2MgYXNwZWN0IGFzc2VtYmx5IGFzeW5jIGJlZ2luIGJyZWFrIGJsb2NrIGJ5IGNhc2UgY2xhc3MgY29uY2F0IGNvbnN0IGNvcHkgY29uc3RydWN0b3IgY29udGludWUgJytcbiAgICAnY3JlYXRlIGRlZmF1bHQgZGVsZWdhdGUgZGVzYyBkaXN0aW5jdCBkaXYgZG8gZG93bnRvIGR5bmFtaWMgZWFjaCBlbHNlIGVtcHR5IGVuZCBlbnN1cmUgZW51bSBlcXVhbHMgZXZlbnQgZXhjZXB0IGV4aXQgZXh0ZW5zaW9uIGV4dGVybmFsIGZhbHNlICcrXG4gICAgJ2ZpbmFsIGZpbmFsaXplIGZpbmFsaXplciBmaW5hbGx5IGZsYWdzIGZvciBmb3J3YXJkIGZyb20gZnVuY3Rpb24gZnV0dXJlIGdsb2JhbCBncm91cCBoYXMgaWYgaW1wbGVtZW50YXRpb24gaW1wbGVtZW50cyBpbXBsaWVzIGluIGluZGV4IGluaGVyaXRlZCAnK1xuICAgICdpbmxpbmUgaW50ZXJmYWNlIGludG8gaW52YXJpYW50cyBpcyBpdGVyYXRvciBqb2luIGxvY2tlZCBsb2NraW5nIGxvb3AgbWF0Y2hpbmcgbWV0aG9kIG1vZCBtb2R1bGUgbmFtZXNwYWNlIG5lc3RlZCBuZXcgbmlsIG5vdCBub3RpZnkgbnVsbGFibGUgb2YgJytcbiAgICAnb2xkIG9uIG9wZXJhdG9yIG9yIG9yZGVyIG91dCBvdmVycmlkZSBwYXJhbGxlbCBwYXJhbXMgcGFydGlhbCBwaW5uZWQgcHJpdmF0ZSBwcm9jZWR1cmUgcHJvcGVydHkgcHJvdGVjdGVkIHB1YmxpYyBxdWVyeWFibGUgcmFpc2UgcmVhZCByZWFkb25seSAnK1xuICAgICdyZWNvcmQgcmVpbnRyb2R1Y2UgcmVtb3ZlIHJlcGVhdCByZXF1aXJlIHJlc3VsdCByZXZlcnNlIHNlYWxlZCBzZWxlY3Qgc2VsZiBzZXF1ZW5jZSBzZXQgc2hsIHNociBza2lwIHN0YXRpYyBzdGVwIHNvZnQgdGFrZSB0aGVuIHRvIHRydWUgdHJ5IHR1cGxlICcrXG4gICAgJ3R5cGUgdW5pb24gdW5pdCB1bnNhZmUgdW50aWwgdXNlcyB1c2luZyB2YXIgdmlydHVhbCByYWlzZXMgdm9sYXRpbGUgd2hlcmUgd2hpbGUgd2l0aCB3cml0ZSB4b3IgeWllbGQgYXdhaXQgbWFwcGVkIGRlcHJlY2F0ZWQgc3RkY2FsbCBjZGVjbCBwYXNjYWwgJytcbiAgICAncmVnaXN0ZXIgc2FmZWNhbGwgb3ZlcmxvYWQgbGlicmFyeSBwbGF0Zm9ybSByZWZlcmVuY2UgcGFja2VkIHN0cmljdCBwdWJsaXNoZWQgYXV0b3JlbGVhc2Vwb29sIHNlbGVjdG9yIHN0cm9uZyB3ZWFrIHVucmV0YWluZWQnO1xuICB2YXIgQ1VSTFlfQ09NTUVOVCA9ICBobGpzLkNPTU1FTlQoXG4gICAgJ3snLFxuICAgICd9JyxcbiAgICB7XG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9XG4gICk7XG4gIHZhciBQQVJFTl9DT01NRU5UID0gaGxqcy5DT01NRU5UKFxuICAgICdcXFxcKFxcXFwqJyxcbiAgICAnXFxcXCpcXFxcKScsXG4gICAge1xuICAgICAgcmVsZXZhbmNlOiAxMFxuICAgIH1cbiAgKTtcbiAgdmFyIFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnXFwnJywgZW5kOiAnXFwnJyxcbiAgICBjb250YWluczogW3tiZWdpbjogJ1xcJ1xcJyd9XVxuICB9O1xuICB2YXIgQ0hBUl9TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJywgYmVnaW46ICcoI1xcXFxkKykrJ1xuICB9O1xuICB2YXIgRlVOQ1RJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgIGJlZ2luS2V5d29yZHM6ICdmdW5jdGlvbiBjb25zdHJ1Y3RvciBkZXN0cnVjdG9yIHByb2NlZHVyZSBtZXRob2QnLCBlbmQ6ICdbOjtdJyxcbiAgICBrZXl3b3JkczogJ2Z1bmN0aW9uIGNvbnN0cnVjdG9yfDEwIGRlc3RydWN0b3J8MTAgcHJvY2VkdXJlfDEwIG1ldGhvZHwxMCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuVElUTEVfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgYmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJyxcbiAgICAgICAga2V5d29yZHM6IE9YWUdFTkVfS0VZV09SRFMsXG4gICAgICAgIGNvbnRhaW5zOiBbU1RSSU5HLCBDSEFSX1NUUklOR11cbiAgICAgIH0sXG4gICAgICBDVVJMWV9DT01NRU5ULCBQQVJFTl9DT01NRU5UXG4gICAgXVxuICB9O1xuICByZXR1cm4ge1xuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgbGV4ZW1lczogL1xcLj9cXHcrLyxcbiAgICBrZXl3b3JkczogT1hZR0VORV9LRVlXT1JEUyxcbiAgICBpbGxlZ2FsOiAnKFwifFxcXFwkW0ctWmctel18XFxcXC9cXFxcKnw8L3w9PnwtPiknLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBDVVJMWV9DT01NRU5ULCBQQVJFTl9DT01NRU5ULCBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBTVFJJTkcsIENIQVJfU1RSSU5HLFxuICAgICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICAgIEZVTkNUSU9OLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luOiAnPVxcXFxiY2xhc3NcXFxcYicsIGVuZDogJ2VuZDsnLFxuICAgICAgICBrZXl3b3JkczogT1hZR0VORV9LRVlXT1JEUyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBTVFJJTkcsIENIQVJfU1RSSU5HLFxuICAgICAgICAgIENVUkxZX0NPTU1FTlQsIFBBUkVOX0NPTU1FTlQsIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgICAgICBGVU5DVElPTlxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9