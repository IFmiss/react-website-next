(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_arcade"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/arcade.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/arcade.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var IDENT_RE = '[A-Za-z_][0-9A-Za-z_]*';
  var KEYWORDS = {
    keyword:
      'if for while var new function do return void else break',
    literal:
      'true false null undefined NaN Infinity PI BackSlash DoubleQuote ForwardSlash NewLine SingleQuote Tab',
    built_in:
      'Abs Acos Area AreaGeodetic Asin Atan Atan2 Average Boolean Buffer BufferGeodetic ' +
      'Ceil Centroid Clip Console Constrain Contains Cos Count Crosses Cut Date DateAdd ' +
      'DateDiff Day Decode DefaultValue Dictionary Difference Disjoint Distance Distinct ' +
      'DomainCode DomainName Equals Exp Extent Feature FeatureSet FeatureSetById FeatureSetByTitle ' +
      'FeatureSetByUrl Filter First Floor Geometry Guid HasKey Hour IIf IndexOf Intersection ' +
      'Intersects IsEmpty Length LengthGeodetic Log Max Mean Millisecond Min Minute Month ' +
      'MultiPartToSinglePart Multipoint NextSequenceValue Now Number OrderBy Overlaps Point Polygon ' +
      'Polyline Pow Random Relate Reverse Round Second SetGeometry Sin Sort Sqrt Stdev Sum ' +
      'SymmetricDifference Tan Text Timestamp Today ToLocal Top Touches ToUTC TypeOf Union Variance ' +
      'Weekday When Within Year '
  };
  var EXPRESSIONS;
  var SYMBOL = {
    className: 'symbol',
    begin: '\\$[feature|layer|map|value|view]+'
  };
  var NUMBER = {
    className: 'number',
    variants: [
      { begin: '\\b(0[bB][01]+)' },
      { begin: '\\b(0[oO][0-7]+)' },
      { begin: hljs.C_NUMBER_RE }
    ],
    relevance: 0
  };
  var SUBST = {
    className: 'subst',
    begin: '\\$\\{', end: '\\}',
    keywords: KEYWORDS,
    contains: []  // defined later
  };
  var TEMPLATE_STRING = {
    className: 'string',
    begin: '`', end: '`',
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  SUBST.contains = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    TEMPLATE_STRING,
    NUMBER,
    hljs.REGEXP_MODE
  ];
  var PARAMS_CONTAINS = SUBST.contains.concat([
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.C_LINE_COMMENT_MODE
  ]);

  return {
    aliases: ['arcade'],
    keywords: KEYWORDS,
    contains: [
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      TEMPLATE_STRING,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      SYMBOL,
      NUMBER,
      { // object attr container
        begin: /[{,]\s*/, relevance: 0,
        contains: [
          {
            begin: IDENT_RE + '\\s*:', returnBegin: true,
            relevance: 0,
            contains: [{className: 'attr', begin: IDENT_RE, relevance: 0}]
          }
        ]
      },
      { // "value" container
        begin: '(' + hljs.RE_STARTERS_RE + '|\\b(return)\\b)\\s*',
        keywords: 'return',
        contains: [
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.REGEXP_MODE,
          {
            className: 'function',
            begin: '(\\(.*?\\)|' + IDENT_RE + ')\\s*=>', returnBegin: true,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  {
                    begin: IDENT_RE
                  },
                  {
                    begin: /\(\s*\)/,
                  },
                  {
                    begin: /\(/, end: /\)/,
                    excludeBegin: true, excludeEnd: true,
                    keywords: KEYWORDS,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'function', end: /\{/, excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: IDENT_RE}),
          {
            className: 'params',
            begin: /\(/, end: /\)/,
            excludeBegin: true,
            excludeEnd: true,
            contains: PARAMS_CONTAINS
          }
        ],
        illegal: /\[|%/
      },
      {
        begin: /\$[(.]/
      }
    ],
    illegal: /#(?!!)/
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9hcmNhZGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9hcmNhZGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBJREVOVF9SRSA9ICdbQS1aYS16X11bMC05QS1aYS16X10qJztcbiAgdmFyIEtFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6XG4gICAgICAnaWYgZm9yIHdoaWxlIHZhciBuZXcgZnVuY3Rpb24gZG8gcmV0dXJuIHZvaWQgZWxzZSBicmVhaycsXG4gICAgbGl0ZXJhbDpcbiAgICAgICd0cnVlIGZhbHNlIG51bGwgdW5kZWZpbmVkIE5hTiBJbmZpbml0eSBQSSBCYWNrU2xhc2ggRG91YmxlUXVvdGUgRm9yd2FyZFNsYXNoIE5ld0xpbmUgU2luZ2xlUXVvdGUgVGFiJyxcbiAgICBidWlsdF9pbjpcbiAgICAgICdBYnMgQWNvcyBBcmVhIEFyZWFHZW9kZXRpYyBBc2luIEF0YW4gQXRhbjIgQXZlcmFnZSBCb29sZWFuIEJ1ZmZlciBCdWZmZXJHZW9kZXRpYyAnICtcbiAgICAgICdDZWlsIENlbnRyb2lkIENsaXAgQ29uc29sZSBDb25zdHJhaW4gQ29udGFpbnMgQ29zIENvdW50IENyb3NzZXMgQ3V0IERhdGUgRGF0ZUFkZCAnICtcbiAgICAgICdEYXRlRGlmZiBEYXkgRGVjb2RlIERlZmF1bHRWYWx1ZSBEaWN0aW9uYXJ5IERpZmZlcmVuY2UgRGlzam9pbnQgRGlzdGFuY2UgRGlzdGluY3QgJyArXG4gICAgICAnRG9tYWluQ29kZSBEb21haW5OYW1lIEVxdWFscyBFeHAgRXh0ZW50IEZlYXR1cmUgRmVhdHVyZVNldCBGZWF0dXJlU2V0QnlJZCBGZWF0dXJlU2V0QnlUaXRsZSAnICtcbiAgICAgICdGZWF0dXJlU2V0QnlVcmwgRmlsdGVyIEZpcnN0IEZsb29yIEdlb21ldHJ5IEd1aWQgSGFzS2V5IEhvdXIgSUlmIEluZGV4T2YgSW50ZXJzZWN0aW9uICcgK1xuICAgICAgJ0ludGVyc2VjdHMgSXNFbXB0eSBMZW5ndGggTGVuZ3RoR2VvZGV0aWMgTG9nIE1heCBNZWFuIE1pbGxpc2Vjb25kIE1pbiBNaW51dGUgTW9udGggJyArXG4gICAgICAnTXVsdGlQYXJ0VG9TaW5nbGVQYXJ0IE11bHRpcG9pbnQgTmV4dFNlcXVlbmNlVmFsdWUgTm93IE51bWJlciBPcmRlckJ5IE92ZXJsYXBzIFBvaW50IFBvbHlnb24gJyArXG4gICAgICAnUG9seWxpbmUgUG93IFJhbmRvbSBSZWxhdGUgUmV2ZXJzZSBSb3VuZCBTZWNvbmQgU2V0R2VvbWV0cnkgU2luIFNvcnQgU3FydCBTdGRldiBTdW0gJyArXG4gICAgICAnU3ltbWV0cmljRGlmZmVyZW5jZSBUYW4gVGV4dCBUaW1lc3RhbXAgVG9kYXkgVG9Mb2NhbCBUb3AgVG91Y2hlcyBUb1VUQyBUeXBlT2YgVW5pb24gVmFyaWFuY2UgJyArXG4gICAgICAnV2Vla2RheSBXaGVuIFdpdGhpbiBZZWFyICdcbiAgfTtcbiAgdmFyIEVYUFJFU1NJT05TO1xuICB2YXIgU1lNQk9MID0ge1xuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgYmVnaW46ICdcXFxcJFtmZWF0dXJlfGxheWVyfG1hcHx2YWx1ZXx2aWV3XSsnXG4gIH07XG4gIHZhciBOVU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICB2YXJpYW50czogW1xuICAgICAgeyBiZWdpbjogJ1xcXFxiKDBbYkJdWzAxXSspJyB9LFxuICAgICAgeyBiZWdpbjogJ1xcXFxiKDBbb09dWzAtN10rKScgfSxcbiAgICAgIHsgYmVnaW46IGhsanMuQ19OVU1CRVJfUkUgfVxuICAgIF0sXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIHZhciBTVUJTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgYmVnaW46ICdcXFxcJFxcXFx7JywgZW5kOiAnXFxcXH0nLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBjb250YWluczogW10gIC8vIGRlZmluZWQgbGF0ZXJcbiAgfTtcbiAgdmFyIFRFTVBMQVRFX1NUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnYCcsIGVuZDogJ2AnLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICBTVUJTVFxuICAgIF1cbiAgfTtcbiAgU1VCU1QuY29udGFpbnMgPSBbXG4gICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgVEVNUExBVEVfU1RSSU5HLFxuICAgIE5VTUJFUixcbiAgICBobGpzLlJFR0VYUF9NT0RFXG4gIF07XG4gIHZhciBQQVJBTVNfQ09OVEFJTlMgPSBTVUJTVC5jb250YWlucy5jb25jYXQoW1xuICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFXG4gIF0pO1xuXG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydhcmNhZGUnXSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQVBPU19TVFJJTkdfTU9ERSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICBURU1QTEFURV9TVFJJTkcsXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgU1lNQk9MLFxuICAgICAgTlVNQkVSLFxuICAgICAgeyAvLyBvYmplY3QgYXR0ciBjb250YWluZXJcbiAgICAgICAgYmVnaW46IC9beyxdXFxzKi8sIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogSURFTlRfUkUgKyAnXFxcXHMqOicsIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgY29udGFpbnM6IFt7Y2xhc3NOYW1lOiAnYXR0cicsIGJlZ2luOiBJREVOVF9SRSwgcmVsZXZhbmNlOiAwfV1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7IC8vIFwidmFsdWVcIiBjb250YWluZXJcbiAgICAgICAgYmVnaW46ICcoJyArIGhsanMuUkVfU1RBUlRFUlNfUkUgKyAnfFxcXFxiKHJldHVybilcXFxcYilcXFxccyonLFxuICAgICAgICBrZXl3b3JkczogJ3JldHVybicsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICAgICAgaGxqcy5SRUdFWFBfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgICAgICBiZWdpbjogJyhcXFxcKC4qP1xcXFwpfCcgKyBJREVOVF9SRSArICcpXFxcXHMqPT4nLCByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgICAgIGVuZDogJ1xcXFxzKj0+JyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiBJREVOVF9SRVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYmVnaW46IC9cXChcXHMqXFwpLyxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLyxcbiAgICAgICAgICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBQQVJBTVNfQ09OVEFJTlNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24nLCBlbmQ6IC9cXHsvLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtiZWdpbjogSURFTlRfUkV9KSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvLFxuICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBQQVJBTVNfQ09OVEFJTlNcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGlsbGVnYWw6IC9cXFt8JS9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwkWyguXS9cbiAgICAgIH1cbiAgICBdLFxuICAgIGlsbGVnYWw6IC8jKD8hISkvXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==