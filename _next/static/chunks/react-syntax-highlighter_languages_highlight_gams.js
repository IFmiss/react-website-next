(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_gams"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/gams.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/gams.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (hljs) {
  var KEYWORDS = {
    'keyword':
      'abort acronym acronyms alias all and assign binary card diag display ' +
      'else eq file files for free ge gt if integer le loop lt maximizing ' +
      'minimizing model models ne negative no not option options or ord ' +
      'positive prod put putpage puttl repeat sameas semicont semiint smax ' +
      'smin solve sos1 sos2 sum system table then until using while xor yes',
    'literal': 'eps inf na',
    'built-in':
      'abs arccos arcsin arctan arctan2 Beta betaReg binomial ceil centropy ' +
      'cos cosh cvPower div div0 eDist entropy errorf execSeed exp fact ' +
      'floor frac gamma gammaReg log logBeta logGamma log10 log2 mapVal max ' +
      'min mod ncpCM ncpF ncpVUpow ncpVUsin normal pi poly power ' +
      'randBinomial randLinear randTriangle round rPower sigmoid sign ' +
      'signPower sin sinh slexp sllog10 slrec sqexp sqlog10 sqr sqrec sqrt ' +
      'tan tanh trunc uniform uniformInt vcPower bool_and bool_eqv bool_imp ' +
      'bool_not bool_or bool_xor ifThen rel_eq rel_ge rel_gt rel_le rel_lt ' +
      'rel_ne gday gdow ghour gleap gmillisec gminute gmonth gsecond gyear ' +
      'jdate jnow jstart jtime errorLevel execError gamsRelease gamsVersion ' +
      'handleCollect handleDelete handleStatus handleSubmit heapFree ' +
      'heapLimit heapSize jobHandle jobKill jobStatus jobTerminate ' +
      'licenseLevel licenseStatus maxExecError sleep timeClose timeComp ' +
      'timeElapsed timeExec timeStart'
  };
  var PARAMS = {
    className: 'params',
    begin: /\(/, end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
  };
  var SYMBOLS = {
    className: 'symbol',
    variants: [
      {begin: /\=[lgenxc]=/},
      {begin: /\$/},
    ]
  };
  var QSTR = { // One-line quoted comment string
    className: 'comment',
    variants: [
      {begin: '\'', end: '\''},
      {begin: '"', end: '"'},
    ],
    illegal: '\\n',
    contains: [hljs.BACKSLASH_ESCAPE]
  };
  var ASSIGNMENT = {
    begin: '/',
    end: '/',
    keywords: KEYWORDS,
    contains: [
      QSTR,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      hljs.C_NUMBER_MODE,
    ],
  };
  var DESCTEXT = { // Parameter/set/variable description text
    begin: /[a-z][a-z0-9_]*(\([a-z0-9_, ]*\))?[ \t]+/,
    excludeBegin: true,
    end: '$',
    endsWithParent: true,
    contains: [
      QSTR,
      ASSIGNMENT,
      {
        className: 'comment',
        begin: /([ ]*[a-z0-9&#*=?@>\\<:\-,()$\[\]_.{}!+%^]+)+/,
        relevance: 0
      },
    ],
  };

  return {
    aliases: ['gms'],
    case_insensitive: true,
    keywords: KEYWORDS,
    contains: [
      hljs.COMMENT(/^\$ontext/, /^\$offtext/),
      {
        className: 'meta',
        begin: '^\\$[a-z0-9]+',
        end: '$',
        returnBegin: true,
        contains: [
          {
            className: 'meta-keyword',
            begin: '^\\$[a-z0-9]+',
          }
        ]
      },
      hljs.COMMENT('^\\*', '$'),
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,
      // Declarations
      {
        beginKeywords:
          'set sets parameter parameters variable variables ' +
          'scalar scalars equation equations',
        end: ';',
        contains: [
          hljs.COMMENT('^\\*', '$'),
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          ASSIGNMENT,
          DESCTEXT,
        ]
      },
      { // table environment
        beginKeywords: 'table',
        end: ';',
        returnBegin: true,
        contains: [
          { // table header row
            beginKeywords: 'table',
            end: '$',
            contains: [DESCTEXT],
          },
          hljs.COMMENT('^\\*', '$'),
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.QUOTE_STRING_MODE,
          hljs.APOS_STRING_MODE,
          hljs.C_NUMBER_MODE,
          // Table does not contain DESCTEXT or ASSIGNMENT
        ]
      },
      // Function definitions
      {
        className: 'function',
        begin: /^[a-z][a-z0-9_,\-+' ()$]+\.{2}/,
        returnBegin: true,
        contains: [
              { // Function title
                className: 'title',
                begin: /^[a-z0-9_]+/,
              },
              PARAMS,
              SYMBOLS,
            ],
      },
      hljs.C_NUMBER_MODE,
      SYMBOLS,
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9nYW1zLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZ2Ftcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChobGpzKSB7XG4gIHZhciBLRVlXT1JEUyA9IHtcbiAgICAna2V5d29yZCc6XG4gICAgICAnYWJvcnQgYWNyb255bSBhY3JvbnltcyBhbGlhcyBhbGwgYW5kIGFzc2lnbiBiaW5hcnkgY2FyZCBkaWFnIGRpc3BsYXkgJyArXG4gICAgICAnZWxzZSBlcSBmaWxlIGZpbGVzIGZvciBmcmVlIGdlIGd0IGlmIGludGVnZXIgbGUgbG9vcCBsdCBtYXhpbWl6aW5nICcgK1xuICAgICAgJ21pbmltaXppbmcgbW9kZWwgbW9kZWxzIG5lIG5lZ2F0aXZlIG5vIG5vdCBvcHRpb24gb3B0aW9ucyBvciBvcmQgJyArXG4gICAgICAncG9zaXRpdmUgcHJvZCBwdXQgcHV0cGFnZSBwdXR0bCByZXBlYXQgc2FtZWFzIHNlbWljb250IHNlbWlpbnQgc21heCAnICtcbiAgICAgICdzbWluIHNvbHZlIHNvczEgc29zMiBzdW0gc3lzdGVtIHRhYmxlIHRoZW4gdW50aWwgdXNpbmcgd2hpbGUgeG9yIHllcycsXG4gICAgJ2xpdGVyYWwnOiAnZXBzIGluZiBuYScsXG4gICAgJ2J1aWx0LWluJzpcbiAgICAgICdhYnMgYXJjY29zIGFyY3NpbiBhcmN0YW4gYXJjdGFuMiBCZXRhIGJldGFSZWcgYmlub21pYWwgY2VpbCBjZW50cm9weSAnICtcbiAgICAgICdjb3MgY29zaCBjdlBvd2VyIGRpdiBkaXYwIGVEaXN0IGVudHJvcHkgZXJyb3JmIGV4ZWNTZWVkIGV4cCBmYWN0ICcgK1xuICAgICAgJ2Zsb29yIGZyYWMgZ2FtbWEgZ2FtbWFSZWcgbG9nIGxvZ0JldGEgbG9nR2FtbWEgbG9nMTAgbG9nMiBtYXBWYWwgbWF4ICcgK1xuICAgICAgJ21pbiBtb2QgbmNwQ00gbmNwRiBuY3BWVXBvdyBuY3BWVXNpbiBub3JtYWwgcGkgcG9seSBwb3dlciAnICtcbiAgICAgICdyYW5kQmlub21pYWwgcmFuZExpbmVhciByYW5kVHJpYW5nbGUgcm91bmQgclBvd2VyIHNpZ21vaWQgc2lnbiAnICtcbiAgICAgICdzaWduUG93ZXIgc2luIHNpbmggc2xleHAgc2xsb2cxMCBzbHJlYyBzcWV4cCBzcWxvZzEwIHNxciBzcXJlYyBzcXJ0ICcgK1xuICAgICAgJ3RhbiB0YW5oIHRydW5jIHVuaWZvcm0gdW5pZm9ybUludCB2Y1Bvd2VyIGJvb2xfYW5kIGJvb2xfZXF2IGJvb2xfaW1wICcgK1xuICAgICAgJ2Jvb2xfbm90IGJvb2xfb3IgYm9vbF94b3IgaWZUaGVuIHJlbF9lcSByZWxfZ2UgcmVsX2d0IHJlbF9sZSByZWxfbHQgJyArXG4gICAgICAncmVsX25lIGdkYXkgZ2RvdyBnaG91ciBnbGVhcCBnbWlsbGlzZWMgZ21pbnV0ZSBnbW9udGggZ3NlY29uZCBneWVhciAnICtcbiAgICAgICdqZGF0ZSBqbm93IGpzdGFydCBqdGltZSBlcnJvckxldmVsIGV4ZWNFcnJvciBnYW1zUmVsZWFzZSBnYW1zVmVyc2lvbiAnICtcbiAgICAgICdoYW5kbGVDb2xsZWN0IGhhbmRsZURlbGV0ZSBoYW5kbGVTdGF0dXMgaGFuZGxlU3VibWl0IGhlYXBGcmVlICcgK1xuICAgICAgJ2hlYXBMaW1pdCBoZWFwU2l6ZSBqb2JIYW5kbGUgam9iS2lsbCBqb2JTdGF0dXMgam9iVGVybWluYXRlICcgK1xuICAgICAgJ2xpY2Vuc2VMZXZlbCBsaWNlbnNlU3RhdHVzIG1heEV4ZWNFcnJvciBzbGVlcCB0aW1lQ2xvc2UgdGltZUNvbXAgJyArXG4gICAgICAndGltZUVsYXBzZWQgdGltZUV4ZWMgdGltZVN0YXJ0J1xuICB9O1xuICB2YXIgUEFSQU1TID0ge1xuICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvLFxuICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICBleGNsdWRlRW5kOiB0cnVlLFxuICB9O1xuICB2YXIgU1lNQk9MUyA9IHtcbiAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7YmVnaW46IC9cXD1bbGdlbnhjXT0vfSxcbiAgICAgIHtiZWdpbjogL1xcJC99LFxuICAgIF1cbiAgfTtcbiAgdmFyIFFTVFIgPSB7IC8vIE9uZS1saW5lIHF1b3RlZCBjb21tZW50IHN0cmluZ1xuICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7YmVnaW46ICdcXCcnLCBlbmQ6ICdcXCcnfSxcbiAgICAgIHtiZWdpbjogJ1wiJywgZW5kOiAnXCInfSxcbiAgICBdLFxuICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gIH07XG4gIHZhciBBU1NJR05NRU5UID0ge1xuICAgIGJlZ2luOiAnLycsXG4gICAgZW5kOiAnLycsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBRU1RSLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgXSxcbiAgfTtcbiAgdmFyIERFU0NURVhUID0geyAvLyBQYXJhbWV0ZXIvc2V0L3ZhcmlhYmxlIGRlc2NyaXB0aW9uIHRleHRcbiAgICBiZWdpbjogL1thLXpdW2EtejAtOV9dKihcXChbYS16MC05XywgXSpcXCkpP1sgXFx0XSsvLFxuICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICBlbmQ6ICckJyxcbiAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICBjb250YWluczogW1xuICAgICAgUVNUUixcbiAgICAgIEFTU0lHTk1FTlQsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgICAgICBiZWdpbjogLyhbIF0qW2EtejAtOSYjKj0/QD5cXFxcPDpcXC0sKCkkXFxbXFxdXy57fSErJV5dKykrLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgIF0sXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ2dtcyddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNPTU1FTlQoL15cXCRvbnRleHQvLCAvXlxcJG9mZnRleHQvKSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnXlxcXFwkW2EtejAtOV0rJyxcbiAgICAgICAgZW5kOiAnJCcsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ21ldGEta2V5d29yZCcsXG4gICAgICAgICAgICBiZWdpbjogJ15cXFxcJFthLXowLTldKycsXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgaGxqcy5DT01NRU5UKCdeXFxcXConLCAnJCcpLFxuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAvLyBEZWNsYXJhdGlvbnNcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczpcbiAgICAgICAgICAnc2V0IHNldHMgcGFyYW1ldGVyIHBhcmFtZXRlcnMgdmFyaWFibGUgdmFyaWFibGVzICcgK1xuICAgICAgICAgICdzY2FsYXIgc2NhbGFycyBlcXVhdGlvbiBlcXVhdGlvbnMnLFxuICAgICAgICBlbmQ6ICc7JyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLkNPTU1FTlQoJ15cXFxcKicsICckJyksXG4gICAgICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgQVNTSUdOTUVOVCxcbiAgICAgICAgICBERVNDVEVYVCxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHsgLy8gdGFibGUgZW52aXJvbm1lbnRcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ3RhYmxlJyxcbiAgICAgICAgZW5kOiAnOycsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHsgLy8gdGFibGUgaGVhZGVyIHJvd1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ3RhYmxlJyxcbiAgICAgICAgICAgIGVuZDogJyQnLFxuICAgICAgICAgICAgY29udGFpbnM6IFtERVNDVEVYVF0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLkNPTU1FTlQoJ15cXFxcKicsICckJyksXG4gICAgICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgICAgICBobGpzLkFQT1NfU1RSSU5HX01PREUsXG4gICAgICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAgICAgIC8vIFRhYmxlIGRvZXMgbm90IGNvbnRhaW4gREVTQ1RFWFQgb3IgQVNTSUdOTUVOVFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8gRnVuY3Rpb24gZGVmaW5pdGlvbnNcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbjogL15bYS16XVthLXowLTlfLFxcLSsnICgpJF0rXFwuezJ9LyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHsgLy8gRnVuY3Rpb24gdGl0bGVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgICAgICAgICAgYmVnaW46IC9eW2EtejAtOV9dKy8sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFBBUkFNUyxcbiAgICAgICAgICAgICAgU1lNQk9MUyxcbiAgICAgICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAgU1lNQk9MUyxcbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=