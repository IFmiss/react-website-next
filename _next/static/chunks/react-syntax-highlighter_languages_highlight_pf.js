(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_pf"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/pf.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/pf.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var MACRO = {
    className: 'variable',
    begin: /\$[\w\d#@][\w\d_]*/
  };
  var TABLE = {
    className: 'variable',
    begin: /<(?!\/)/, end: />/
  };
  var QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/
  };

  return {
    aliases: ['pf.conf'],
    lexemes: /[a-z0-9_<>-]+/,
    keywords: {
      built_in: /* block match pass are "actions" in pf.conf(5), the rest are
                 * lexically similar top-level commands.
                 */
        'block match pass load anchor|5 antispoof|10 set table',
      keyword:
        'in out log quick on rdomain inet inet6 proto from port os to route' +
        'allow-opts divert-packet divert-reply divert-to flags group icmp-type' +
        'icmp6-type label once probability recieved-on rtable prio queue' +
        'tos tag tagged user keep fragment for os drop' +
        'af-to|10 binat-to|10 nat-to|10 rdr-to|10 bitmask least-stats random round-robin' +
        'source-hash static-port' +
        'dup-to reply-to route-to' +
        'parent bandwidth default min max qlimit' +
        'block-policy debug fingerprints hostid limit loginterface optimization' +
        'reassemble ruleset-optimization basic none profile skip state-defaults' +
        'state-policy timeout' +
        'const counters persist' +
        'no modulate synproxy state|5 floating if-bound no-sync pflow|10 sloppy' +
        'source-track global rule max-src-nodes max-src-states max-src-conn' +
        'max-src-conn-rate overload flush' +
        'scrub|5 max-mss min-ttl no-df|10 random-id',
      literal:
        'all any no-route self urpf-failed egress|5 unknown'
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.NUMBER_MODE,
      hljs.QUOTE_STRING_MODE,
      MACRO,
      TABLE
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9wZi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3BmLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgTUFDUk8gPSB7XG4gICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLFxuICAgIGJlZ2luOiAvXFwkW1xcd1xcZCNAXVtcXHdcXGRfXSovXG4gIH07XG4gIHZhciBUQUJMRSA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgYmVnaW46IC88KD8hXFwvKS8sIGVuZDogLz4vXG4gIH07XG4gIHZhciBRVU9URV9TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogL1wiLywgZW5kOiAvXCIvXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ3BmLmNvbmYnXSxcbiAgICBsZXhlbWVzOiAvW2EtejAtOV88Pi1dKy8sXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGJ1aWx0X2luOiAvKiBibG9jayBtYXRjaCBwYXNzIGFyZSBcImFjdGlvbnNcIiBpbiBwZi5jb25mKDUpLCB0aGUgcmVzdCBhcmVcbiAgICAgICAgICAgICAgICAgKiBsZXhpY2FsbHkgc2ltaWxhciB0b3AtbGV2ZWwgY29tbWFuZHMuXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICdibG9jayBtYXRjaCBwYXNzIGxvYWQgYW5jaG9yfDUgYW50aXNwb29mfDEwIHNldCB0YWJsZScsXG4gICAgICBrZXl3b3JkOlxuICAgICAgICAnaW4gb3V0IGxvZyBxdWljayBvbiByZG9tYWluIGluZXQgaW5ldDYgcHJvdG8gZnJvbSBwb3J0IG9zIHRvIHJvdXRlJyArXG4gICAgICAgICdhbGxvdy1vcHRzIGRpdmVydC1wYWNrZXQgZGl2ZXJ0LXJlcGx5IGRpdmVydC10byBmbGFncyBncm91cCBpY21wLXR5cGUnICtcbiAgICAgICAgJ2ljbXA2LXR5cGUgbGFiZWwgb25jZSBwcm9iYWJpbGl0eSByZWNpZXZlZC1vbiBydGFibGUgcHJpbyBxdWV1ZScgK1xuICAgICAgICAndG9zIHRhZyB0YWdnZWQgdXNlciBrZWVwIGZyYWdtZW50IGZvciBvcyBkcm9wJyArXG4gICAgICAgICdhZi10b3wxMCBiaW5hdC10b3wxMCBuYXQtdG98MTAgcmRyLXRvfDEwIGJpdG1hc2sgbGVhc3Qtc3RhdHMgcmFuZG9tIHJvdW5kLXJvYmluJyArXG4gICAgICAgICdzb3VyY2UtaGFzaCBzdGF0aWMtcG9ydCcgK1xuICAgICAgICAnZHVwLXRvIHJlcGx5LXRvIHJvdXRlLXRvJyArXG4gICAgICAgICdwYXJlbnQgYmFuZHdpZHRoIGRlZmF1bHQgbWluIG1heCBxbGltaXQnICtcbiAgICAgICAgJ2Jsb2NrLXBvbGljeSBkZWJ1ZyBmaW5nZXJwcmludHMgaG9zdGlkIGxpbWl0IGxvZ2ludGVyZmFjZSBvcHRpbWl6YXRpb24nICtcbiAgICAgICAgJ3JlYXNzZW1ibGUgcnVsZXNldC1vcHRpbWl6YXRpb24gYmFzaWMgbm9uZSBwcm9maWxlIHNraXAgc3RhdGUtZGVmYXVsdHMnICtcbiAgICAgICAgJ3N0YXRlLXBvbGljeSB0aW1lb3V0JyArXG4gICAgICAgICdjb25zdCBjb3VudGVycyBwZXJzaXN0JyArXG4gICAgICAgICdubyBtb2R1bGF0ZSBzeW5wcm94eSBzdGF0ZXw1IGZsb2F0aW5nIGlmLWJvdW5kIG5vLXN5bmMgcGZsb3d8MTAgc2xvcHB5JyArXG4gICAgICAgICdzb3VyY2UtdHJhY2sgZ2xvYmFsIHJ1bGUgbWF4LXNyYy1ub2RlcyBtYXgtc3JjLXN0YXRlcyBtYXgtc3JjLWNvbm4nICtcbiAgICAgICAgJ21heC1zcmMtY29ubi1yYXRlIG92ZXJsb2FkIGZsdXNoJyArXG4gICAgICAgICdzY3J1Ynw1IG1heC1tc3MgbWluLXR0bCBuby1kZnwxMCByYW5kb20taWQnLFxuICAgICAgbGl0ZXJhbDpcbiAgICAgICAgJ2FsbCBhbnkgbm8tcm91dGUgc2VsZiB1cnBmLWZhaWxlZCBlZ3Jlc3N8NSB1bmtub3duJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICBobGpzLk5VTUJFUl9NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIE1BQ1JPLFxuICAgICAgVEFCTEVcbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=