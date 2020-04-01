(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_aspectj"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/aspectj.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/aspectj.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (hljs) {
  var KEYWORDS =
    'false synchronized int abstract float private char boolean static null if const ' +
    'for true while long throw strictfp finally protected import native final return void ' +
    'enum else extends implements break transient new catch instanceof byte super volatile case ' +
    'assert short package default double public try this switch continue throws privileged ' +
    'aspectOf adviceexecution proceed cflowbelow cflow initialization preinitialization ' +
    'staticinitialization withincode target within execution getWithinTypeName handler ' +
    'thisJoinPoint thisJoinPointStaticPart thisEnclosingJoinPointStaticPart declare parents '+
    'warning error soft precedence thisAspectInstance';
  var SHORTKEYS = 'get set args call';
  return {
    keywords : KEYWORDS,
    illegal : /<\/|#/,
    contains : [
      hljs.COMMENT(
        '/\\*\\*',
        '\\*/',
        {
          relevance : 0,
          contains : [
            {
              // eat up @'s in emails to prevent them to be recognized as doctags
              begin: /\w+@/, relevance: 0
            },
            {
              className : 'doctag',
              begin : '@[A-Za-z]+'
            }
          ]
        }
      ),
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className : 'class',
        beginKeywords : 'aspect',
        end : /[{;=]/,
        excludeEnd : true,
        illegal : /[:;"\[\]]/,
        contains : [
          {
            beginKeywords : 'extends implements pertypewithin perthis pertarget percflowbelow percflow issingleton'
          },
          hljs.UNDERSCORE_TITLE_MODE,
          {
            begin : /\([^\)]*/,
            end : /[)]+/,
            keywords : KEYWORDS + ' ' + SHORTKEYS,
            excludeEnd : false
          }
        ]
      },
      {
        className : 'class',
        beginKeywords : 'class interface',
        end : /[{;=]/,
        excludeEnd : true,
        relevance: 0,
        keywords : 'class interface',
        illegal : /[:"\[\]]/,
        contains : [
          {beginKeywords : 'extends implements'},
          hljs.UNDERSCORE_TITLE_MODE
        ]
      },
      {
        // AspectJ Constructs
        beginKeywords : 'pointcut after before around throwing returning',
        end : /[)]/,
        excludeEnd : false,
        illegal : /["\[\]]/,
        contains : [
          {
            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
            returnBegin : true,
            contains : [hljs.UNDERSCORE_TITLE_MODE]
          }
        ]
      },
      {
        begin : /[:]/,
        returnBegin : true,
        end : /[{;]/,
        relevance: 0,
        excludeEnd : false,
        keywords : KEYWORDS,
        illegal : /["\[\]]/,
        contains : [
          {
            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
            keywords : KEYWORDS + ' ' + SHORTKEYS,
            relevance: 0
          },
          hljs.QUOTE_STRING_MODE
        ]
      },
      {
        // this prevents 'new Name(...), or throw ...' from being recognized as a function definition
        beginKeywords : 'new throw',
        relevance : 0
      },
      {
        // the function class is a bit different for AspectJ compared to the Java language
        className : 'function',
        begin : /\w+ +\w+(\.)?\w+\s*\([^\)]*\)\s*((throws)[\w\s,]+)?[\{;]/,
        returnBegin : true,
        end : /[{;=]/,
        keywords : KEYWORDS,
        excludeEnd : true,
        contains : [
          {
            begin : hljs.UNDERSCORE_IDENT_RE + '\\s*\\(',
            returnBegin : true,
            relevance: 0,
            contains : [hljs.UNDERSCORE_TITLE_MODE]
          },
          {
            className : 'params',
            begin : /\(/, end : /\)/,
            relevance: 0,
            keywords : KEYWORDS,
            contains : [
              hljs.APOS_STRING_MODE,
              hljs.QUOTE_STRING_MODE,
              hljs.C_NUMBER_MODE,
              hljs.C_BLOCK_COMMENT_MODE
            ]
          },
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },
      hljs.C_NUMBER_MODE,
      {
        // annotation is also used in this language
        className : 'meta',
        begin : '@[A-Za-z]+'
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9hc3BlY3RqLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYXNwZWN0ai5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChobGpzKSB7XG4gIHZhciBLRVlXT1JEUyA9XG4gICAgJ2ZhbHNlIHN5bmNocm9uaXplZCBpbnQgYWJzdHJhY3QgZmxvYXQgcHJpdmF0ZSBjaGFyIGJvb2xlYW4gc3RhdGljIG51bGwgaWYgY29uc3QgJyArXG4gICAgJ2ZvciB0cnVlIHdoaWxlIGxvbmcgdGhyb3cgc3RyaWN0ZnAgZmluYWxseSBwcm90ZWN0ZWQgaW1wb3J0IG5hdGl2ZSBmaW5hbCByZXR1cm4gdm9pZCAnICtcbiAgICAnZW51bSBlbHNlIGV4dGVuZHMgaW1wbGVtZW50cyBicmVhayB0cmFuc2llbnQgbmV3IGNhdGNoIGluc3RhbmNlb2YgYnl0ZSBzdXBlciB2b2xhdGlsZSBjYXNlICcgK1xuICAgICdhc3NlcnQgc2hvcnQgcGFja2FnZSBkZWZhdWx0IGRvdWJsZSBwdWJsaWMgdHJ5IHRoaXMgc3dpdGNoIGNvbnRpbnVlIHRocm93cyBwcml2aWxlZ2VkICcgK1xuICAgICdhc3BlY3RPZiBhZHZpY2VleGVjdXRpb24gcHJvY2VlZCBjZmxvd2JlbG93IGNmbG93IGluaXRpYWxpemF0aW9uIHByZWluaXRpYWxpemF0aW9uICcgK1xuICAgICdzdGF0aWNpbml0aWFsaXphdGlvbiB3aXRoaW5jb2RlIHRhcmdldCB3aXRoaW4gZXhlY3V0aW9uIGdldFdpdGhpblR5cGVOYW1lIGhhbmRsZXIgJyArXG4gICAgJ3RoaXNKb2luUG9pbnQgdGhpc0pvaW5Qb2ludFN0YXRpY1BhcnQgdGhpc0VuY2xvc2luZ0pvaW5Qb2ludFN0YXRpY1BhcnQgZGVjbGFyZSBwYXJlbnRzICcrXG4gICAgJ3dhcm5pbmcgZXJyb3Igc29mdCBwcmVjZWRlbmNlIHRoaXNBc3BlY3RJbnN0YW5jZSc7XG4gIHZhciBTSE9SVEtFWVMgPSAnZ2V0IHNldCBhcmdzIGNhbGwnO1xuICByZXR1cm4ge1xuICAgIGtleXdvcmRzIDogS0VZV09SRFMsXG4gICAgaWxsZWdhbCA6IC88XFwvfCMvLFxuICAgIGNvbnRhaW5zIDogW1xuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAnL1xcXFwqXFxcXConLFxuICAgICAgICAnXFxcXCovJyxcbiAgICAgICAge1xuICAgICAgICAgIHJlbGV2YW5jZSA6IDAsXG4gICAgICAgICAgY29udGFpbnMgOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIC8vIGVhdCB1cCBAJ3MgaW4gZW1haWxzIHRvIHByZXZlbnQgdGhlbSB0byBiZSByZWNvZ25pemVkIGFzIGRvY3RhZ3NcbiAgICAgICAgICAgICAgYmVnaW46IC9cXHcrQC8sIHJlbGV2YW5jZTogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lIDogJ2RvY3RhZycsXG4gICAgICAgICAgICAgIGJlZ2luIDogJ0BbQS1aYS16XSsnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZSA6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHMgOiAnYXNwZWN0JyxcbiAgICAgICAgZW5kIDogL1t7Oz1dLyxcbiAgICAgICAgZXhjbHVkZUVuZCA6IHRydWUsXG4gICAgICAgIGlsbGVnYWwgOiAvWzo7XCJcXFtcXF1dLyxcbiAgICAgICAgY29udGFpbnMgOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkcyA6ICdleHRlbmRzIGltcGxlbWVudHMgcGVydHlwZXdpdGhpbiBwZXJ0aGlzIHBlcnRhcmdldCBwZXJjZmxvd2JlbG93IHBlcmNmbG93IGlzc2luZ2xldG9uJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW4gOiAvXFwoW15cXCldKi8sXG4gICAgICAgICAgICBlbmQgOiAvWyldKy8sXG4gICAgICAgICAgICBrZXl3b3JkcyA6IEtFWVdPUkRTICsgJyAnICsgU0hPUlRLRVlTLFxuICAgICAgICAgICAgZXhjbHVkZUVuZCA6IGZhbHNlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWUgOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzIDogJ2NsYXNzIGludGVyZmFjZScsXG4gICAgICAgIGVuZCA6IC9bezs9XS8sXG4gICAgICAgIGV4Y2x1ZGVFbmQgOiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGtleXdvcmRzIDogJ2NsYXNzIGludGVyZmFjZScsXG4gICAgICAgIGlsbGVnYWwgOiAvWzpcIlxcW1xcXV0vLFxuICAgICAgICBjb250YWlucyA6IFtcbiAgICAgICAgICB7YmVnaW5LZXl3b3JkcyA6ICdleHRlbmRzIGltcGxlbWVudHMnfSxcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBBc3BlY3RKIENvbnN0cnVjdHNcbiAgICAgICAgYmVnaW5LZXl3b3JkcyA6ICdwb2ludGN1dCBhZnRlciBiZWZvcmUgYXJvdW5kIHRocm93aW5nIHJldHVybmluZycsXG4gICAgICAgIGVuZCA6IC9bKV0vLFxuICAgICAgICBleGNsdWRlRW5kIDogZmFsc2UsXG4gICAgICAgIGlsbGVnYWwgOiAvW1wiXFxbXFxdXS8sXG4gICAgICAgIGNvbnRhaW5zIDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luIDogaGxqcy5VTkRFUlNDT1JFX0lERU5UX1JFICsgJ1xcXFxzKlxcXFwoJyxcbiAgICAgICAgICAgIHJldHVybkJlZ2luIDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRhaW5zIDogW2hsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW4gOiAvWzpdLyxcbiAgICAgICAgcmV0dXJuQmVnaW4gOiB0cnVlLFxuICAgICAgICBlbmQgOiAvW3s7XS8sXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgZXhjbHVkZUVuZCA6IGZhbHNlLFxuICAgICAgICBrZXl3b3JkcyA6IEtFWVdPUkRTLFxuICAgICAgICBpbGxlZ2FsIDogL1tcIlxcW1xcXV0vLFxuICAgICAgICBjb250YWlucyA6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbiA6IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSArICdcXFxccypcXFxcKCcsXG4gICAgICAgICAgICBrZXl3b3JkcyA6IEtFWVdPUkRTICsgJyAnICsgU0hPUlRLRVlTLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIHRoaXMgcHJldmVudHMgJ25ldyBOYW1lKC4uLiksIG9yIHRocm93IC4uLicgZnJvbSBiZWluZyByZWNvZ25pemVkIGFzIGEgZnVuY3Rpb24gZGVmaW5pdGlvblxuICAgICAgICBiZWdpbktleXdvcmRzIDogJ25ldyB0aHJvdycsXG4gICAgICAgIHJlbGV2YW5jZSA6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIHRoZSBmdW5jdGlvbiBjbGFzcyBpcyBhIGJpdCBkaWZmZXJlbnQgZm9yIEFzcGVjdEogY29tcGFyZWQgdG8gdGhlIEphdmEgbGFuZ3VhZ2VcbiAgICAgICAgY2xhc3NOYW1lIDogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW4gOiAvXFx3KyArXFx3KyhcXC4pP1xcdytcXHMqXFwoW15cXCldKlxcKVxccyooKHRocm93cylbXFx3XFxzLF0rKT9bXFx7O10vLFxuICAgICAgICByZXR1cm5CZWdpbiA6IHRydWUsXG4gICAgICAgIGVuZCA6IC9bezs9XS8sXG4gICAgICAgIGtleXdvcmRzIDogS0VZV09SRFMsXG4gICAgICAgIGV4Y2x1ZGVFbmQgOiB0cnVlLFxuICAgICAgICBjb250YWlucyA6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbiA6IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSArICdcXFxccypcXFxcKCcsXG4gICAgICAgICAgICByZXR1cm5CZWdpbiA6IHRydWUsXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBjb250YWlucyA6IFtobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZSA6ICdwYXJhbXMnLFxuICAgICAgICAgICAgYmVnaW4gOiAvXFwoLywgZW5kIDogL1xcKS8sXG4gICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICBrZXl3b3JkcyA6IEtFWVdPUkRTLFxuICAgICAgICAgICAgY29udGFpbnMgOiBbXG4gICAgICAgICAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAge1xuICAgICAgICAvLyBhbm5vdGF0aW9uIGlzIGFsc28gdXNlZCBpbiB0aGlzIGxhbmd1YWdlXG4gICAgICAgIGNsYXNzTmFtZSA6ICdtZXRhJyxcbiAgICAgICAgYmVnaW4gOiAnQFtBLVphLXpdKydcbiAgICAgIH1cbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=