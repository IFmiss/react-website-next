(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_dos"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dos.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dos.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var COMMENT = hljs.COMMENT(
    /^\s*@?rem\b/, /$/,
    {
      relevance: 10
    }
  );
  var LABEL = {
    className: 'symbol',
    begin: '^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)',
    relevance: 0
  };
  return {
    aliases: ['bat', 'cmd'],
    case_insensitive: true,
    illegal: /\/\*/,
    keywords: {
      keyword:
        'if else goto for in do call exit not exist errorlevel defined ' +
        'equ neq lss leq gtr geq',
      built_in:
        'prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux ' +
        'shift cd dir echo setlocal endlocal set pause copy ' +
        'append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color ' +
        'comp compact convert date dir diskcomp diskcopy doskey erase fs ' +
        'find findstr format ftype graftabl help keyb label md mkdir mode more move path ' +
        'pause print popd pushd promt rd recover rem rename replace restore rmdir shift' +
        'sort start subst time title tree type ver verify vol ' +
        // winutils
        'ping net ipconfig taskkill xcopy ren del'
    },
    contains: [
      {
        className: 'variable', begin: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
      },
      {
        className: 'function',
        begin: LABEL.begin, end: 'goto:eof',
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: '([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*'}),
          COMMENT
        ]
      },
      {
        className: 'number', begin: '\\b\\d+',
        relevance: 0
      },
      COMMENT
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9kb3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9kb3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBDT01NRU5UID0gaGxqcy5DT01NRU5UKFxuICAgIC9eXFxzKkA/cmVtXFxiLywgLyQvLFxuICAgIHtcbiAgICAgIHJlbGV2YW5jZTogMTBcbiAgICB9XG4gICk7XG4gIHZhciBMQUJFTCA9IHtcbiAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgIGJlZ2luOiAnXlxcXFxzKltBLVphLXouXz9dW0EtWmEtejAtOV8kI0B+Lj9dKig6fFxcXFxzK2xhYmVsKScsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydiYXQnLCAnY21kJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBpbGxlZ2FsOiAvXFwvXFwqLyxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgJ2lmIGVsc2UgZ290byBmb3IgaW4gZG8gY2FsbCBleGl0IG5vdCBleGlzdCBlcnJvcmxldmVsIGRlZmluZWQgJyArXG4gICAgICAgICdlcXUgbmVxIGxzcyBsZXEgZ3RyIGdlcScsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJ3BybiBudWwgbHB0MyBscHQyIGxwdDEgY29uIGNvbTQgY29tMyBjb20yIGNvbTEgYXV4ICcgK1xuICAgICAgICAnc2hpZnQgY2QgZGlyIGVjaG8gc2V0bG9jYWwgZW5kbG9jYWwgc2V0IHBhdXNlIGNvcHkgJyArXG4gICAgICAgICdhcHBlbmQgYXNzb2MgYXQgYXR0cmliIGJyZWFrIGNhY2xzIGNkIGNoY3AgY2hkaXIgY2hrZHNrIGNoa250ZnMgY2xzIGNtZCBjb2xvciAnICtcbiAgICAgICAgJ2NvbXAgY29tcGFjdCBjb252ZXJ0IGRhdGUgZGlyIGRpc2tjb21wIGRpc2tjb3B5IGRvc2tleSBlcmFzZSBmcyAnICtcbiAgICAgICAgJ2ZpbmQgZmluZHN0ciBmb3JtYXQgZnR5cGUgZ3JhZnRhYmwgaGVscCBrZXliIGxhYmVsIG1kIG1rZGlyIG1vZGUgbW9yZSBtb3ZlIHBhdGggJyArXG4gICAgICAgICdwYXVzZSBwcmludCBwb3BkIHB1c2hkIHByb210IHJkIHJlY292ZXIgcmVtIHJlbmFtZSByZXBsYWNlIHJlc3RvcmUgcm1kaXIgc2hpZnQnICtcbiAgICAgICAgJ3NvcnQgc3RhcnQgc3Vic3QgdGltZSB0aXRsZSB0cmVlIHR5cGUgdmVyIHZlcmlmeSB2b2wgJyArXG4gICAgICAgIC8vIHdpbnV0aWxzXG4gICAgICAgICdwaW5nIG5ldCBpcGNvbmZpZyB0YXNra2lsbCB4Y29weSByZW4gZGVsJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndmFyaWFibGUnLCBiZWdpbjogLyUlW14gXXwlW14gXSs/JXwhW14gXSs/IS9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW46IExBQkVMLmJlZ2luLCBlbmQ6ICdnb3RvOmVvZicsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuVElUTEVfTU9ERSwge2JlZ2luOiAnKFtfYS16QS1aXVxcXFx3KlxcXFwuKSooW19hLXpBLVpdXFxcXHcqOik/W19hLXpBLVpdXFxcXHcqJ30pLFxuICAgICAgICAgIENPTU1FTlRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJywgYmVnaW46ICdcXFxcYlxcXFxkKycsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIENPTU1FTlRcbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=