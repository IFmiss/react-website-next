(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_applescript"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/applescript.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/applescript.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: ''});
  var PARAMS = {
    className: 'params',
    begin: '\\(', end: '\\)',
    contains: ['self', hljs.C_NUMBER_MODE, STRING]
  };
  var COMMENT_MODE_1 = hljs.COMMENT('--', '$');
  var COMMENT_MODE_2 = hljs.COMMENT(
    '\\(\\*',
    '\\*\\)',
    {
      contains: ['self', COMMENT_MODE_1] //allow nesting
    }
  );
  var COMMENTS = [
    COMMENT_MODE_1,
    COMMENT_MODE_2,
    hljs.HASH_COMMENT_MODE
  ];

  return {
    aliases: ['osascript'],
    keywords: {
      keyword:
        'about above after against and around as at back before beginning ' +
        'behind below beneath beside between but by considering ' +
        'contain contains continue copy div does eighth else end equal ' +
        'equals error every exit fifth first for fourth from front ' +
        'get given global if ignoring in into is it its last local me ' +
        'middle mod my ninth not of on onto or over prop property put ref ' +
        'reference repeat returning script second set seventh since ' +
        'sixth some tell tenth that the|0 then third through thru ' +
        'timeout times to transaction try until where while whose with ' +
        'without',
      literal:
        'AppleScript false linefeed return pi quote result space tab true',
      built_in:
        'alias application boolean class constant date file integer list ' +
        'number real record string text ' +
        'activate beep count delay launch log offset read round ' +
        'run say summarize write ' +
        'character characters contents day frontmost id item length ' +
        'month name paragraph paragraphs rest reverse running time version ' +
        'weekday word words year'
    },
    contains: [
      STRING,
      hljs.C_NUMBER_MODE,
      {
        className: 'built_in',
        begin:
          '\\b(clipboard info|the clipboard|info for|list (disks|folder)|' +
          'mount volume|path to|(close|open for) access|(get|set) eof|' +
          'current date|do shell script|get volume settings|random number|' +
          'set volume|system attribute|system info|time to GMT|' +
          '(load|run|store) script|scripting components|' +
          'ASCII (character|number)|localized string|' +
          'choose (application|color|file|file name|' +
          'folder|from list|remote application|URL)|' +
          'display (alert|dialog))\\b|^\\s*return\\b'
      },
      {
        className: 'literal',
        begin:
          '\\b(text item delimiters|current application|missing value)\\b'
      },
      {
        className: 'keyword',
        begin:
          '\\b(apart from|aside from|instead of|out of|greater than|' +
          "isn't|(doesn't|does not) (equal|come before|come after|contain)|" +
          '(greater|less) than( or equal)?|(starts?|ends|begins?) with|' +
          'contained by|comes (before|after)|a (ref|reference)|POSIX file|' +
          'POSIX path|(date|time) string|quoted form)\\b'
      },
      {
        beginKeywords: 'on',
        illegal: '[${=;\\n]',
        contains: [hljs.UNDERSCORE_TITLE_MODE, PARAMS]
      }
    ].concat(COMMENTS),
    illegal: '//|->|=>|\\[\\['
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9hcHBsZXNjcmlwdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FwcGxlc2NyaXB0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgU1RSSU5HID0gaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtpbGxlZ2FsOiAnJ30pO1xuICB2YXIgUEFSQU1TID0ge1xuICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgYmVnaW46ICdcXFxcKCcsIGVuZDogJ1xcXFwpJyxcbiAgICBjb250YWluczogWydzZWxmJywgaGxqcy5DX05VTUJFUl9NT0RFLCBTVFJJTkddXG4gIH07XG4gIHZhciBDT01NRU5UX01PREVfMSA9IGhsanMuQ09NTUVOVCgnLS0nLCAnJCcpO1xuICB2YXIgQ09NTUVOVF9NT0RFXzIgPSBobGpzLkNPTU1FTlQoXG4gICAgJ1xcXFwoXFxcXConLFxuICAgICdcXFxcKlxcXFwpJyxcbiAgICB7XG4gICAgICBjb250YWluczogWydzZWxmJywgQ09NTUVOVF9NT0RFXzFdIC8vYWxsb3cgbmVzdGluZ1xuICAgIH1cbiAgKTtcbiAgdmFyIENPTU1FTlRTID0gW1xuICAgIENPTU1FTlRfTU9ERV8xLFxuICAgIENPTU1FTlRfTU9ERV8yLFxuICAgIGhsanMuSEFTSF9DT01NRU5UX01PREVcbiAgXTtcblxuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsnb3Nhc2NyaXB0J10sXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdhYm91dCBhYm92ZSBhZnRlciBhZ2FpbnN0IGFuZCBhcm91bmQgYXMgYXQgYmFjayBiZWZvcmUgYmVnaW5uaW5nICcgK1xuICAgICAgICAnYmVoaW5kIGJlbG93IGJlbmVhdGggYmVzaWRlIGJldHdlZW4gYnV0IGJ5IGNvbnNpZGVyaW5nICcgK1xuICAgICAgICAnY29udGFpbiBjb250YWlucyBjb250aW51ZSBjb3B5IGRpdiBkb2VzIGVpZ2h0aCBlbHNlIGVuZCBlcXVhbCAnICtcbiAgICAgICAgJ2VxdWFscyBlcnJvciBldmVyeSBleGl0IGZpZnRoIGZpcnN0IGZvciBmb3VydGggZnJvbSBmcm9udCAnICtcbiAgICAgICAgJ2dldCBnaXZlbiBnbG9iYWwgaWYgaWdub3JpbmcgaW4gaW50byBpcyBpdCBpdHMgbGFzdCBsb2NhbCBtZSAnICtcbiAgICAgICAgJ21pZGRsZSBtb2QgbXkgbmludGggbm90IG9mIG9uIG9udG8gb3Igb3ZlciBwcm9wIHByb3BlcnR5IHB1dCByZWYgJyArXG4gICAgICAgICdyZWZlcmVuY2UgcmVwZWF0IHJldHVybmluZyBzY3JpcHQgc2Vjb25kIHNldCBzZXZlbnRoIHNpbmNlICcgK1xuICAgICAgICAnc2l4dGggc29tZSB0ZWxsIHRlbnRoIHRoYXQgdGhlfDAgdGhlbiB0aGlyZCB0aHJvdWdoIHRocnUgJyArXG4gICAgICAgICd0aW1lb3V0IHRpbWVzIHRvIHRyYW5zYWN0aW9uIHRyeSB1bnRpbCB3aGVyZSB3aGlsZSB3aG9zZSB3aXRoICcgK1xuICAgICAgICAnd2l0aG91dCcsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAnQXBwbGVTY3JpcHQgZmFsc2UgbGluZWZlZWQgcmV0dXJuIHBpIHF1b3RlIHJlc3VsdCBzcGFjZSB0YWIgdHJ1ZScsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJ2FsaWFzIGFwcGxpY2F0aW9uIGJvb2xlYW4gY2xhc3MgY29uc3RhbnQgZGF0ZSBmaWxlIGludGVnZXIgbGlzdCAnICtcbiAgICAgICAgJ251bWJlciByZWFsIHJlY29yZCBzdHJpbmcgdGV4dCAnICtcbiAgICAgICAgJ2FjdGl2YXRlIGJlZXAgY291bnQgZGVsYXkgbGF1bmNoIGxvZyBvZmZzZXQgcmVhZCByb3VuZCAnICtcbiAgICAgICAgJ3J1biBzYXkgc3VtbWFyaXplIHdyaXRlICcgK1xuICAgICAgICAnY2hhcmFjdGVyIGNoYXJhY3RlcnMgY29udGVudHMgZGF5IGZyb250bW9zdCBpZCBpdGVtIGxlbmd0aCAnICtcbiAgICAgICAgJ21vbnRoIG5hbWUgcGFyYWdyYXBoIHBhcmFncmFwaHMgcmVzdCByZXZlcnNlIHJ1bm5pbmcgdGltZSB2ZXJzaW9uICcgK1xuICAgICAgICAnd2Vla2RheSB3b3JkIHdvcmRzIHllYXInXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgU1RSSU5HLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOlxuICAgICAgICAgICdcXFxcYihjbGlwYm9hcmQgaW5mb3x0aGUgY2xpcGJvYXJkfGluZm8gZm9yfGxpc3QgKGRpc2tzfGZvbGRlcil8JyArXG4gICAgICAgICAgJ21vdW50IHZvbHVtZXxwYXRoIHRvfChjbG9zZXxvcGVuIGZvcikgYWNjZXNzfChnZXR8c2V0KSBlb2Z8JyArXG4gICAgICAgICAgJ2N1cnJlbnQgZGF0ZXxkbyBzaGVsbCBzY3JpcHR8Z2V0IHZvbHVtZSBzZXR0aW5nc3xyYW5kb20gbnVtYmVyfCcgK1xuICAgICAgICAgICdzZXQgdm9sdW1lfHN5c3RlbSBhdHRyaWJ1dGV8c3lzdGVtIGluZm98dGltZSB0byBHTVR8JyArXG4gICAgICAgICAgJyhsb2FkfHJ1bnxzdG9yZSkgc2NyaXB0fHNjcmlwdGluZyBjb21wb25lbnRzfCcgK1xuICAgICAgICAgICdBU0NJSSAoY2hhcmFjdGVyfG51bWJlcil8bG9jYWxpemVkIHN0cmluZ3wnICtcbiAgICAgICAgICAnY2hvb3NlIChhcHBsaWNhdGlvbnxjb2xvcnxmaWxlfGZpbGUgbmFtZXwnICtcbiAgICAgICAgICAnZm9sZGVyfGZyb20gbGlzdHxyZW1vdGUgYXBwbGljYXRpb258VVJMKXwnICtcbiAgICAgICAgICAnZGlzcGxheSAoYWxlcnR8ZGlhbG9nKSlcXFxcYnxeXFxcXHMqcmV0dXJuXFxcXGInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICAgICAgYmVnaW46XG4gICAgICAgICAgJ1xcXFxiKHRleHQgaXRlbSBkZWxpbWl0ZXJzfGN1cnJlbnQgYXBwbGljYXRpb258bWlzc2luZyB2YWx1ZSlcXFxcYidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgICAgICBiZWdpbjpcbiAgICAgICAgICAnXFxcXGIoYXBhcnQgZnJvbXxhc2lkZSBmcm9tfGluc3RlYWQgb2Z8b3V0IG9mfGdyZWF0ZXIgdGhhbnwnICtcbiAgICAgICAgICBcImlzbid0fChkb2Vzbid0fGRvZXMgbm90KSAoZXF1YWx8Y29tZSBiZWZvcmV8Y29tZSBhZnRlcnxjb250YWluKXxcIiArXG4gICAgICAgICAgJyhncmVhdGVyfGxlc3MpIHRoYW4oIG9yIGVxdWFsKT98KHN0YXJ0cz98ZW5kc3xiZWdpbnM/KSB3aXRofCcgK1xuICAgICAgICAgICdjb250YWluZWQgYnl8Y29tZXMgKGJlZm9yZXxhZnRlcil8YSAocmVmfHJlZmVyZW5jZSl8UE9TSVggZmlsZXwnICtcbiAgICAgICAgICAnUE9TSVggcGF0aHwoZGF0ZXx0aW1lKSBzdHJpbmd8cXVvdGVkIGZvcm0pXFxcXGInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiAnb24nLFxuICAgICAgICBpbGxlZ2FsOiAnWyR7PTtcXFxcbl0nLFxuICAgICAgICBjb250YWluczogW2hsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFLCBQQVJBTVNdXG4gICAgICB9XG4gICAgXS5jb25jYXQoQ09NTUVOVFMpLFxuICAgIGlsbGVnYWw6ICcvL3wtPnw9PnxcXFxcW1xcXFxbJ1xuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=