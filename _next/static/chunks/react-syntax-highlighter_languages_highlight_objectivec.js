(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_objectivec"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/objectivec.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/objectivec.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var API_CLASS = {
    className: 'built_in',
    begin: '\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+',
  };
  var OBJC_KEYWORDS = {
    keyword:
      'int float while char export sizeof typedef const struct for union ' +
      'unsigned long volatile static bool mutable if do return goto void ' +
      'enum else break extern asm case short default double register explicit ' +
      'signed typename this switch continue wchar_t inline readonly assign ' +
      'readwrite self @synchronized id typeof ' +
      'nonatomic super unichar IBOutlet IBAction strong weak copy ' +
      'in out inout bycopy byref oneway __strong __weak __block __autoreleasing ' +
      '@private @protected @public @try @property @end @throw @catch @finally ' +
      '@autoreleasepool @synthesize @dynamic @selector @optional @required ' +
      '@encode @package @import @defs @compatibility_alias ' +
      '__bridge __bridge_transfer __bridge_retained __bridge_retain ' +
      '__covariant __contravariant __kindof ' +
      '_Nonnull _Nullable _Null_unspecified ' +
      '__FUNCTION__ __PRETTY_FUNCTION__ __attribute__ ' +
      'getter setter retain unsafe_unretained ' +
      'nonnull nullable null_unspecified null_resettable class instancetype ' +
      'NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER ' +
      'NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED ' +
      'NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE ' +
      'NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END ' +
      'NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW ' +
      'NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN',
    literal:
      'false true FALSE TRUE nil YES NO NULL',
    built_in:
      'BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once'
  };
  var LEXEMES = /[a-zA-Z@][a-zA-Z0-9_]*/;
  var CLASS_KEYWORDS = '@interface @class @protocol @implementation';
  return {
    aliases: ['mm', 'objc', 'obj-c'],
    keywords: OBJC_KEYWORDS,
    lexemes: LEXEMES,
    illegal: '</',
    contains: [
      API_CLASS,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_NUMBER_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'string',
        variants: [
          {
            begin: '@"', end: '"',
            illegal: '\\n',
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          {
            begin: '\'', end: '[^\\\\]\'',
            illegal: '[^\\\\][^\']'
          }
        ]
      },
      {
        className: 'meta',
        begin: '#',
        end: '$',
        contains: [
          {
            className: 'meta-string',
            variants: [
              { begin: '\"', end: '\"' },
              { begin: '<', end: '>' }
            ]
          }
        ]
      },
      {
        className: 'class',
        begin: '(' + CLASS_KEYWORDS.split(' ').join('|') + ')\\b', end: '({|$)', excludeEnd: true,
        keywords: CLASS_KEYWORDS, lexemes: LEXEMES,
        contains: [
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        begin: '\\.'+hljs.UNDERSCORE_IDENT_RE,
        relevance: 0
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9vYmplY3RpdmVjLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvb2JqZWN0aXZlYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIEFQSV9DTEFTUyA9IHtcbiAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgYmVnaW46ICdcXFxcYihBVnxDQXxDRnxDR3xDSXxDTHxDTXxDTnxDVHxNS3xNUHxNVEt8TVRMfE5TfFNDTnxTS3xVSXxXS3xYQylcXFxcdysnLFxuICB9O1xuICB2YXIgT0JKQ19LRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOlxuICAgICAgJ2ludCBmbG9hdCB3aGlsZSBjaGFyIGV4cG9ydCBzaXplb2YgdHlwZWRlZiBjb25zdCBzdHJ1Y3QgZm9yIHVuaW9uICcgK1xuICAgICAgJ3Vuc2lnbmVkIGxvbmcgdm9sYXRpbGUgc3RhdGljIGJvb2wgbXV0YWJsZSBpZiBkbyByZXR1cm4gZ290byB2b2lkICcgK1xuICAgICAgJ2VudW0gZWxzZSBicmVhayBleHRlcm4gYXNtIGNhc2Ugc2hvcnQgZGVmYXVsdCBkb3VibGUgcmVnaXN0ZXIgZXhwbGljaXQgJyArXG4gICAgICAnc2lnbmVkIHR5cGVuYW1lIHRoaXMgc3dpdGNoIGNvbnRpbnVlIHdjaGFyX3QgaW5saW5lIHJlYWRvbmx5IGFzc2lnbiAnICtcbiAgICAgICdyZWFkd3JpdGUgc2VsZiBAc3luY2hyb25pemVkIGlkIHR5cGVvZiAnICtcbiAgICAgICdub25hdG9taWMgc3VwZXIgdW5pY2hhciBJQk91dGxldCBJQkFjdGlvbiBzdHJvbmcgd2VhayBjb3B5ICcgK1xuICAgICAgJ2luIG91dCBpbm91dCBieWNvcHkgYnlyZWYgb25ld2F5IF9fc3Ryb25nIF9fd2VhayBfX2Jsb2NrIF9fYXV0b3JlbGVhc2luZyAnICtcbiAgICAgICdAcHJpdmF0ZSBAcHJvdGVjdGVkIEBwdWJsaWMgQHRyeSBAcHJvcGVydHkgQGVuZCBAdGhyb3cgQGNhdGNoIEBmaW5hbGx5ICcgK1xuICAgICAgJ0BhdXRvcmVsZWFzZXBvb2wgQHN5bnRoZXNpemUgQGR5bmFtaWMgQHNlbGVjdG9yIEBvcHRpb25hbCBAcmVxdWlyZWQgJyArXG4gICAgICAnQGVuY29kZSBAcGFja2FnZSBAaW1wb3J0IEBkZWZzIEBjb21wYXRpYmlsaXR5X2FsaWFzICcgK1xuICAgICAgJ19fYnJpZGdlIF9fYnJpZGdlX3RyYW5zZmVyIF9fYnJpZGdlX3JldGFpbmVkIF9fYnJpZGdlX3JldGFpbiAnICtcbiAgICAgICdfX2NvdmFyaWFudCBfX2NvbnRyYXZhcmlhbnQgX19raW5kb2YgJyArXG4gICAgICAnX05vbm51bGwgX051bGxhYmxlIF9OdWxsX3Vuc3BlY2lmaWVkICcgK1xuICAgICAgJ19fRlVOQ1RJT05fXyBfX1BSRVRUWV9GVU5DVElPTl9fIF9fYXR0cmlidXRlX18gJyArXG4gICAgICAnZ2V0dGVyIHNldHRlciByZXRhaW4gdW5zYWZlX3VucmV0YWluZWQgJyArXG4gICAgICAnbm9ubnVsbCBudWxsYWJsZSBudWxsX3Vuc3BlY2lmaWVkIG51bGxfcmVzZXR0YWJsZSBjbGFzcyBpbnN0YW5jZXR5cGUgJyArXG4gICAgICAnTlNfREVTSUdOQVRFRF9JTklUSUFMSVpFUiBOU19VTkFWQUlMQUJMRSBOU19SRVFVSVJFU19TVVBFUiAnICtcbiAgICAgICdOU19SRVRVUk5TX0lOTkVSX1BPSU5URVIgTlNfSU5MSU5FIE5TX0FWQUlMQUJMRSBOU19ERVBSRUNBVEVEICcgK1xuICAgICAgJ05TX0VOVU0gTlNfT1BUSU9OUyBOU19TV0lGVF9VTkFWQUlMQUJMRSAnICtcbiAgICAgICdOU19BU1NVTUVfTk9OTlVMTF9CRUdJTiBOU19BU1NVTUVfTk9OTlVMTF9FTkQgJyArXG4gICAgICAnTlNfUkVGSU5FRF9GT1JfU1dJRlQgTlNfU1dJRlRfTkFNRSBOU19TV0lGVF9OT1RIUk9XICcgK1xuICAgICAgJ05TX0RVUklORyBOU19IQU5ETEVSIE5TX0VOREhBTkRMRVIgTlNfVkFMVUVSRVRVUk4gTlNfVk9JRFJFVFVSTicsXG4gICAgbGl0ZXJhbDpcbiAgICAgICdmYWxzZSB0cnVlIEZBTFNFIFRSVUUgbmlsIFlFUyBOTyBOVUxMJyxcbiAgICBidWlsdF9pbjpcbiAgICAgICdCT09MIGRpc3BhdGNoX29uY2VfdCBkaXNwYXRjaF9xdWV1ZV90IGRpc3BhdGNoX3N5bmMgZGlzcGF0Y2hfYXN5bmMgZGlzcGF0Y2hfb25jZSdcbiAgfTtcbiAgdmFyIExFWEVNRVMgPSAvW2EtekEtWkBdW2EtekEtWjAtOV9dKi87XG4gIHZhciBDTEFTU19LRVlXT1JEUyA9ICdAaW50ZXJmYWNlIEBjbGFzcyBAcHJvdG9jb2wgQGltcGxlbWVudGF0aW9uJztcbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ21tJywgJ29iamMnLCAnb2JqLWMnXSxcbiAgICBrZXl3b3JkczogT0JKQ19LRVlXT1JEUyxcbiAgICBsZXhlbWVzOiBMRVhFTUVTLFxuICAgIGlsbGVnYWw6ICc8LycsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIEFQSV9DTEFTUyxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnQFwiJywgZW5kOiAnXCInLFxuICAgICAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICdcXCcnLCBlbmQ6ICdbXlxcXFxcXFxcXVxcJycsXG4gICAgICAgICAgICBpbGxlZ2FsOiAnW15cXFxcXFxcXF1bXlxcJ10nXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICcjJyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgeyBiZWdpbjogJ1xcXCInLCBlbmQ6ICdcXFwiJyB9LFxuICAgICAgICAgICAgICB7IGJlZ2luOiAnPCcsIGVuZDogJz4nIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICAgICAgYmVnaW46ICcoJyArIENMQVNTX0tFWVdPUkRTLnNwbGl0KCcgJykuam9pbignfCcpICsgJylcXFxcYicsIGVuZDogJyh7fCQpJywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAga2V5d29yZHM6IENMQVNTX0tFWVdPUkRTLCBsZXhlbWVzOiBMRVhFTUVTLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFxcXC4nK2hsanMuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9