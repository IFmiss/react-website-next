(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_vbscript"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/vbscript.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/vbscript.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    aliases: ['vbs'],
    case_insensitive: true,
    keywords: {
      keyword:
        'call class const dim do loop erase execute executeglobal exit for each next function ' +
        'if then else on error option explicit new private property let get public randomize ' +
        'redim rem select case set stop sub while wend with end to elseif is or xor and not ' +
        'class_initialize class_terminate default preserve in me byval byref step resume goto',
      built_in:
        'lcase month vartype instrrev ubound setlocale getobject rgb getref string ' +
        'weekdayname rnd dateadd monthname now day minute isarray cbool round formatcurrency ' +
        'conversions csng timevalue second year space abs clng timeserial fixs len asc ' +
        'isempty maths dateserial atn timer isobject filter weekday datevalue ccur isdate ' +
        'instr datediff formatdatetime replace isnull right sgn array snumeric log cdbl hex ' +
        'chr lbound msgbox ucase getlocale cos cdate cbyte rtrim join hour oct typename trim ' +
        'strcomp int createobject loadpicture tan formatnumber mid scriptenginebuildversion ' +
        'scriptengine split scriptengineminorversion cint sin datepart ltrim sqr ' +
        'scriptenginemajorversion time derived eval date formatpercent exp inputbox left ascw ' +
        'chrw regexp server response request cstr err',
      literal:
        'true false null nothing empty'
    },
    illegal: '//',
    contains: [
      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [{begin: '""'}]}),
      hljs.COMMENT(
        /'/,
        /$/,
        {
          relevance: 0
        }
      ),
      hljs.C_NUMBER_MODE
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF92YnNjcmlwdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3Zic2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsndmJzJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgJ2NhbGwgY2xhc3MgY29uc3QgZGltIGRvIGxvb3AgZXJhc2UgZXhlY3V0ZSBleGVjdXRlZ2xvYmFsIGV4aXQgZm9yIGVhY2ggbmV4dCBmdW5jdGlvbiAnICtcbiAgICAgICAgJ2lmIHRoZW4gZWxzZSBvbiBlcnJvciBvcHRpb24gZXhwbGljaXQgbmV3IHByaXZhdGUgcHJvcGVydHkgbGV0IGdldCBwdWJsaWMgcmFuZG9taXplICcgK1xuICAgICAgICAncmVkaW0gcmVtIHNlbGVjdCBjYXNlIHNldCBzdG9wIHN1YiB3aGlsZSB3ZW5kIHdpdGggZW5kIHRvIGVsc2VpZiBpcyBvciB4b3IgYW5kIG5vdCAnICtcbiAgICAgICAgJ2NsYXNzX2luaXRpYWxpemUgY2xhc3NfdGVybWluYXRlIGRlZmF1bHQgcHJlc2VydmUgaW4gbWUgYnl2YWwgYnlyZWYgc3RlcCByZXN1bWUgZ290bycsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJ2xjYXNlIG1vbnRoIHZhcnR5cGUgaW5zdHJyZXYgdWJvdW5kIHNldGxvY2FsZSBnZXRvYmplY3QgcmdiIGdldHJlZiBzdHJpbmcgJyArXG4gICAgICAgICd3ZWVrZGF5bmFtZSBybmQgZGF0ZWFkZCBtb250aG5hbWUgbm93IGRheSBtaW51dGUgaXNhcnJheSBjYm9vbCByb3VuZCBmb3JtYXRjdXJyZW5jeSAnICtcbiAgICAgICAgJ2NvbnZlcnNpb25zIGNzbmcgdGltZXZhbHVlIHNlY29uZCB5ZWFyIHNwYWNlIGFicyBjbG5nIHRpbWVzZXJpYWwgZml4cyBsZW4gYXNjICcgK1xuICAgICAgICAnaXNlbXB0eSBtYXRocyBkYXRlc2VyaWFsIGF0biB0aW1lciBpc29iamVjdCBmaWx0ZXIgd2Vla2RheSBkYXRldmFsdWUgY2N1ciBpc2RhdGUgJyArXG4gICAgICAgICdpbnN0ciBkYXRlZGlmZiBmb3JtYXRkYXRldGltZSByZXBsYWNlIGlzbnVsbCByaWdodCBzZ24gYXJyYXkgc251bWVyaWMgbG9nIGNkYmwgaGV4ICcgK1xuICAgICAgICAnY2hyIGxib3VuZCBtc2dib3ggdWNhc2UgZ2V0bG9jYWxlIGNvcyBjZGF0ZSBjYnl0ZSBydHJpbSBqb2luIGhvdXIgb2N0IHR5cGVuYW1lIHRyaW0gJyArXG4gICAgICAgICdzdHJjb21wIGludCBjcmVhdGVvYmplY3QgbG9hZHBpY3R1cmUgdGFuIGZvcm1hdG51bWJlciBtaWQgc2NyaXB0ZW5naW5lYnVpbGR2ZXJzaW9uICcgK1xuICAgICAgICAnc2NyaXB0ZW5naW5lIHNwbGl0IHNjcmlwdGVuZ2luZW1pbm9ydmVyc2lvbiBjaW50IHNpbiBkYXRlcGFydCBsdHJpbSBzcXIgJyArXG4gICAgICAgICdzY3JpcHRlbmdpbmVtYWpvcnZlcnNpb24gdGltZSBkZXJpdmVkIGV2YWwgZGF0ZSBmb3JtYXRwZXJjZW50IGV4cCBpbnB1dGJveCBsZWZ0IGFzY3cgJyArXG4gICAgICAgICdjaHJ3IHJlZ2V4cCBzZXJ2ZXIgcmVzcG9uc2UgcmVxdWVzdCBjc3RyIGVycicsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAndHJ1ZSBmYWxzZSBudWxsIG5vdGhpbmcgZW1wdHknXG4gICAgfSxcbiAgICBpbGxlZ2FsOiAnLy8nLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge2NvbnRhaW5zOiBbe2JlZ2luOiAnXCJcIid9XX0pLFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAvJy8sXG4gICAgICAgIC8kLyxcbiAgICAgICAge1xuICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFXG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==