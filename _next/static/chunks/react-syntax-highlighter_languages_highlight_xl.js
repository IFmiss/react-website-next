(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_xl"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/xl.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/xl.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var BUILTIN_MODULES =
    'ObjectLoader Animate MovieCredits Slides Filters Shading Materials LensFlare Mapping VLCAudioVideo ' +
    'StereoDecoder PointCloud NetworkAccess RemoteControl RegExp ChromaKey Snowfall NodeJS Speech Charts';

  var XL_KEYWORDS = {
    keyword:
      'if then else do while until for loop import with is as where when by data constant ' +
      'integer real text name boolean symbol infix prefix postfix block tree',
    literal:
      'true false nil',
    built_in:
      'in mod rem and or xor not abs sign floor ceil sqrt sin cos tan asin ' +
      'acos atan exp expm1 log log2 log10 log1p pi at text_length text_range ' +
      'text_find text_replace contains page slide basic_slide title_slide ' +
      'title subtitle fade_in fade_out fade_at clear_color color line_color ' +
      'line_width texture_wrap texture_transform texture scale_?x scale_?y ' +
      'scale_?z? translate_?x translate_?y translate_?z? rotate_?x rotate_?y ' +
      'rotate_?z? rectangle circle ellipse sphere path line_to move_to ' +
      'quad_to curve_to theme background contents locally time mouse_?x ' +
      'mouse_?y mouse_buttons ' +
      BUILTIN_MODULES
  };

  var DOUBLE_QUOTE_TEXT = {
    className: 'string',
    begin: '"', end: '"', illegal: '\\n'
  };
  var SINGLE_QUOTE_TEXT = {
    className: 'string',
    begin: '\'', end: '\'', illegal: '\\n'
  };
  var LONG_TEXT = {
    className: 'string',
    begin: '<<', end: '>>'
  };
  var BASED_NUMBER = {
    className: 'number',
    begin: '[0-9]+#[0-9A-Z_]+(\\.[0-9-A-Z_]+)?#?([Ee][+-]?[0-9]+)?'
  };
  var IMPORT = {
    beginKeywords: 'import', end: '$',
    keywords: XL_KEYWORDS,
    contains: [DOUBLE_QUOTE_TEXT]
  };
  var FUNCTION_DEFINITION = {
    className: 'function',
    begin: /[a-z][^\n]*->/, returnBegin: true, end: /->/,
    contains: [
      hljs.inherit(hljs.TITLE_MODE, {starts: {
        endsWithParent: true,
        keywords: XL_KEYWORDS
      }})
    ]
  };
  return {
    aliases: ['tao'],
    lexemes: /[a-zA-Z][a-zA-Z0-9_?]*/,
    keywords: XL_KEYWORDS,
    contains: [
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    DOUBLE_QUOTE_TEXT,
    SINGLE_QUOTE_TEXT,
    LONG_TEXT,
    FUNCTION_DEFINITION,
    IMPORT,
    BASED_NUMBER,
    hljs.NUMBER_MODE
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF94bC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3hsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgQlVJTFRJTl9NT0RVTEVTID1cbiAgICAnT2JqZWN0TG9hZGVyIEFuaW1hdGUgTW92aWVDcmVkaXRzIFNsaWRlcyBGaWx0ZXJzIFNoYWRpbmcgTWF0ZXJpYWxzIExlbnNGbGFyZSBNYXBwaW5nIFZMQ0F1ZGlvVmlkZW8gJyArXG4gICAgJ1N0ZXJlb0RlY29kZXIgUG9pbnRDbG91ZCBOZXR3b3JrQWNjZXNzIFJlbW90ZUNvbnRyb2wgUmVnRXhwIENocm9tYUtleSBTbm93ZmFsbCBOb2RlSlMgU3BlZWNoIENoYXJ0cyc7XG5cbiAgdmFyIFhMX0tFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6XG4gICAgICAnaWYgdGhlbiBlbHNlIGRvIHdoaWxlIHVudGlsIGZvciBsb29wIGltcG9ydCB3aXRoIGlzIGFzIHdoZXJlIHdoZW4gYnkgZGF0YSBjb25zdGFudCAnICtcbiAgICAgICdpbnRlZ2VyIHJlYWwgdGV4dCBuYW1lIGJvb2xlYW4gc3ltYm9sIGluZml4IHByZWZpeCBwb3N0Zml4IGJsb2NrIHRyZWUnLFxuICAgIGxpdGVyYWw6XG4gICAgICAndHJ1ZSBmYWxzZSBuaWwnLFxuICAgIGJ1aWx0X2luOlxuICAgICAgJ2luIG1vZCByZW0gYW5kIG9yIHhvciBub3QgYWJzIHNpZ24gZmxvb3IgY2VpbCBzcXJ0IHNpbiBjb3MgdGFuIGFzaW4gJyArXG4gICAgICAnYWNvcyBhdGFuIGV4cCBleHBtMSBsb2cgbG9nMiBsb2cxMCBsb2cxcCBwaSBhdCB0ZXh0X2xlbmd0aCB0ZXh0X3JhbmdlICcgK1xuICAgICAgJ3RleHRfZmluZCB0ZXh0X3JlcGxhY2UgY29udGFpbnMgcGFnZSBzbGlkZSBiYXNpY19zbGlkZSB0aXRsZV9zbGlkZSAnICtcbiAgICAgICd0aXRsZSBzdWJ0aXRsZSBmYWRlX2luIGZhZGVfb3V0IGZhZGVfYXQgY2xlYXJfY29sb3IgY29sb3IgbGluZV9jb2xvciAnICtcbiAgICAgICdsaW5lX3dpZHRoIHRleHR1cmVfd3JhcCB0ZXh0dXJlX3RyYW5zZm9ybSB0ZXh0dXJlIHNjYWxlXz94IHNjYWxlXz95ICcgK1xuICAgICAgJ3NjYWxlXz96PyB0cmFuc2xhdGVfP3ggdHJhbnNsYXRlXz95IHRyYW5zbGF0ZV8/ej8gcm90YXRlXz94IHJvdGF0ZV8/eSAnICtcbiAgICAgICdyb3RhdGVfP3o/IHJlY3RhbmdsZSBjaXJjbGUgZWxsaXBzZSBzcGhlcmUgcGF0aCBsaW5lX3RvIG1vdmVfdG8gJyArXG4gICAgICAncXVhZF90byBjdXJ2ZV90byB0aGVtZSBiYWNrZ3JvdW5kIGNvbnRlbnRzIGxvY2FsbHkgdGltZSBtb3VzZV8/eCAnICtcbiAgICAgICdtb3VzZV8/eSBtb3VzZV9idXR0b25zICcgK1xuICAgICAgQlVJTFRJTl9NT0RVTEVTXG4gIH07XG5cbiAgdmFyIERPVUJMRV9RVU9URV9URVhUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcIicsIGVuZDogJ1wiJywgaWxsZWdhbDogJ1xcXFxuJ1xuICB9O1xuICB2YXIgU0lOR0xFX1FVT1RFX1RFWFQgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1xcJycsIGVuZDogJ1xcJycsIGlsbGVnYWw6ICdcXFxcbidcbiAgfTtcbiAgdmFyIExPTkdfVEVYVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnPDwnLCBlbmQ6ICc+PidcbiAgfTtcbiAgdmFyIEJBU0VEX05VTUJFUiA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIGJlZ2luOiAnWzAtOV0rI1swLTlBLVpfXSsoXFxcXC5bMC05LUEtWl9dKyk/Iz8oW0VlXVsrLV0/WzAtOV0rKT8nXG4gIH07XG4gIHZhciBJTVBPUlQgPSB7XG4gICAgYmVnaW5LZXl3b3JkczogJ2ltcG9ydCcsIGVuZDogJyQnLFxuICAgIGtleXdvcmRzOiBYTF9LRVlXT1JEUyxcbiAgICBjb250YWluczogW0RPVUJMRV9RVU9URV9URVhUXVxuICB9O1xuICB2YXIgRlVOQ1RJT05fREVGSU5JVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgYmVnaW46IC9bYS16XVteXFxuXSotPi8sIHJldHVybkJlZ2luOiB0cnVlLCBlbmQ6IC8tPi8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtzdGFydHM6IHtcbiAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgIGtleXdvcmRzOiBYTF9LRVlXT1JEU1xuICAgICAgfX0pXG4gICAgXVxuICB9O1xuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsndGFvJ10sXG4gICAgbGV4ZW1lczogL1thLXpBLVpdW2EtekEtWjAtOV8/XSovLFxuICAgIGtleXdvcmRzOiBYTF9LRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgIERPVUJMRV9RVU9URV9URVhULFxuICAgIFNJTkdMRV9RVU9URV9URVhULFxuICAgIExPTkdfVEVYVCxcbiAgICBGVU5DVElPTl9ERUZJTklUSU9OLFxuICAgIElNUE9SVCxcbiAgICBCQVNFRF9OVU1CRVIsXG4gICAgaGxqcy5OVU1CRVJfTU9ERVxuICAgIF1cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==