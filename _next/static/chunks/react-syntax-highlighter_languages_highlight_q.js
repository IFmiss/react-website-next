(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_q"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/q.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/q.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var Q_KEYWORDS = {
  keyword:
    'do while select delete by update from',
  literal:
    '0b 1b',
  built_in:
    'neg not null string reciprocal floor ceiling signum mod xbar xlog and or each scan over prior mmu lsq inv md5 ltime gtime count first var dev med cov cor all any rand sums prds mins maxs fills deltas ratios avgs differ prev next rank reverse iasc idesc asc desc msum mcount mavg mdev xrank mmin mmax xprev rotate distinct group where flip type key til get value attr cut set upsert raze union inter except cross sv vs sublist enlist read0 read1 hopen hclose hdel hsym hcount peach system ltrim rtrim trim lower upper ssr view tables views cols xcols keys xkey xcol xasc xdesc fkeys meta lj aj aj0 ij pj asof uj ww wj wj1 fby xgroup ungroup ej save load rsave rload show csv parse eval min max avg wavg wsum sin cos tan sum',
  type:
    '`float `double int `timestamp `timespan `datetime `time `boolean `symbol `char `byte `short `long `real `month `date `minute `second `guid'
  };
  return {
  aliases:['k', 'kdb'],
  keywords: Q_KEYWORDS,
  lexemes: /(`?)[A-Za-z0-9_]+\b/,
  contains: [
  hljs.C_LINE_COMMENT_MODE,
    hljs.QUOTE_STRING_MODE,
    hljs.C_NUMBER_MODE
     ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9xLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIFFfS0VZV09SRFMgPSB7XG4gIGtleXdvcmQ6XG4gICAgJ2RvIHdoaWxlIHNlbGVjdCBkZWxldGUgYnkgdXBkYXRlIGZyb20nLFxuICBsaXRlcmFsOlxuICAgICcwYiAxYicsXG4gIGJ1aWx0X2luOlxuICAgICduZWcgbm90IG51bGwgc3RyaW5nIHJlY2lwcm9jYWwgZmxvb3IgY2VpbGluZyBzaWdudW0gbW9kIHhiYXIgeGxvZyBhbmQgb3IgZWFjaCBzY2FuIG92ZXIgcHJpb3IgbW11IGxzcSBpbnYgbWQ1IGx0aW1lIGd0aW1lIGNvdW50IGZpcnN0IHZhciBkZXYgbWVkIGNvdiBjb3IgYWxsIGFueSByYW5kIHN1bXMgcHJkcyBtaW5zIG1heHMgZmlsbHMgZGVsdGFzIHJhdGlvcyBhdmdzIGRpZmZlciBwcmV2IG5leHQgcmFuayByZXZlcnNlIGlhc2MgaWRlc2MgYXNjIGRlc2MgbXN1bSBtY291bnQgbWF2ZyBtZGV2IHhyYW5rIG1taW4gbW1heCB4cHJldiByb3RhdGUgZGlzdGluY3QgZ3JvdXAgd2hlcmUgZmxpcCB0eXBlIGtleSB0aWwgZ2V0IHZhbHVlIGF0dHIgY3V0IHNldCB1cHNlcnQgcmF6ZSB1bmlvbiBpbnRlciBleGNlcHQgY3Jvc3Mgc3YgdnMgc3VibGlzdCBlbmxpc3QgcmVhZDAgcmVhZDEgaG9wZW4gaGNsb3NlIGhkZWwgaHN5bSBoY291bnQgcGVhY2ggc3lzdGVtIGx0cmltIHJ0cmltIHRyaW0gbG93ZXIgdXBwZXIgc3NyIHZpZXcgdGFibGVzIHZpZXdzIGNvbHMgeGNvbHMga2V5cyB4a2V5IHhjb2wgeGFzYyB4ZGVzYyBma2V5cyBtZXRhIGxqIGFqIGFqMCBpaiBwaiBhc29mIHVqIHd3IHdqIHdqMSBmYnkgeGdyb3VwIHVuZ3JvdXAgZWogc2F2ZSBsb2FkIHJzYXZlIHJsb2FkIHNob3cgY3N2IHBhcnNlIGV2YWwgbWluIG1heCBhdmcgd2F2ZyB3c3VtIHNpbiBjb3MgdGFuIHN1bScsXG4gIHR5cGU6XG4gICAgJ2BmbG9hdCBgZG91YmxlIGludCBgdGltZXN0YW1wIGB0aW1lc3BhbiBgZGF0ZXRpbWUgYHRpbWUgYGJvb2xlYW4gYHN5bWJvbCBgY2hhciBgYnl0ZSBgc2hvcnQgYGxvbmcgYHJlYWwgYG1vbnRoIGBkYXRlIGBtaW51dGUgYHNlY29uZCBgZ3VpZCdcbiAgfTtcbiAgcmV0dXJuIHtcbiAgYWxpYXNlczpbJ2snLCAna2RiJ10sXG4gIGtleXdvcmRzOiBRX0tFWVdPUkRTLFxuICBsZXhlbWVzOiAvKGA/KVtBLVphLXowLTlfXStcXGIvLFxuICBjb250YWluczogW1xuICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICBobGpzLkNfTlVNQkVSX01PREVcbiAgICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=