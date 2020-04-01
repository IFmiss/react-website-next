(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_autohotkey"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/autohotkey.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/autohotkey.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var BACKTICK_ESCAPE = {
    begin: '`[\\s\\S]'
  };

  return {
    case_insensitive: true,
    aliases: [ 'ahk' ],
    keywords: {
      keyword: 'Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group',
      literal: 'true false NOT AND OR',
      built_in: 'ComSpec Clipboard ClipboardAll ErrorLevel',
    },
    contains: [
      BACKTICK_ESCAPE,
      hljs.inherit(hljs.QUOTE_STRING_MODE, {contains: [BACKTICK_ESCAPE]}),
      hljs.COMMENT(';', '$', {relevance: 0}),
      hljs.C_BLOCK_COMMENT_MODE,
      {
        className: 'number',
        begin: hljs.NUMBER_RE,
        relevance: 0
      },
      {
        className: 'variable', //subst would be the most accurate however fails the point of highlighting. variable is comparably the most accurate that actually has some effect
        begin: '%[a-zA-Z0-9#_$@]+%'
      },
      {
        className: 'built_in',
        begin: '^\\s*\\w+\\s*(,|%)'
        //I don't really know if this is totally relevant
      },
      {
        className: 'title', //symbol would be most accurate however is higlighted just like built_in and that makes up a lot of AutoHotkey code
		                        //meaning that it would fail to highlight anything
        variants: [
          {begin: '^[^\\n";]+::(?!=)'},
          {begin: '^[^\\n";]+:(?!=)', relevance: 0} // zero relevance as it catches a lot of things
                                                    // followed by a single ':' in many languages
        ]
      },
      {
        className: 'meta', 
        begin: '^\\s*#\\w+', end:'$',
        relevance: 0
      },
	    {
        className: 'built_in',
        begin: 'A_[a-zA-Z0-9]+'
      },
      {
        // consecutive commas, not for highlighting but just for relevance
        begin: ',\\s*,'
      }
    ]
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9hdXRvaG90a2V5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvYXV0b2hvdGtleS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIEJBQ0tUSUNLX0VTQ0FQRSA9IHtcbiAgICBiZWdpbjogJ2BbXFxcXHNcXFxcU10nXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBjYXNlX2luc2Vuc2l0aXZlOiB0cnVlLFxuICAgIGFsaWFzZXM6IFsgJ2FoaycgXSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDogJ0JyZWFrIENvbnRpbnVlIENyaXRpY2FsIEV4aXQgRXhpdEFwcCBHb3N1YiBHb3RvIE5ldyBPbkV4aXQgUGF1c2UgcmV0dXJuIFNldEJhdGNoTGluZXMgU2V0VGltZXIgU3VzcGVuZCBUaHJlYWQgVGhyb3cgVW50aWwgYWhrX2lkIGFoa19jbGFzcyBhaGtfcGlkIGFoa19leGUgYWhrX2dyb3VwJyxcbiAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlIE5PVCBBTkQgT1InLFxuICAgICAgYnVpbHRfaW46ICdDb21TcGVjIENsaXBib2FyZCBDbGlwYm9hcmRBbGwgRXJyb3JMZXZlbCcsXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgQkFDS1RJQ0tfRVNDQVBFLFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtjb250YWluczogW0JBQ0tUSUNLX0VTQ0FQRV19KSxcbiAgICAgIGhsanMuQ09NTUVOVCgnOycsICckJywge3JlbGV2YW5jZTogMH0pLFxuICAgICAgaGxqcy5DX0JMT0NLX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46IGhsanMuTlVNQkVSX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJywgLy9zdWJzdCB3b3VsZCBiZSB0aGUgbW9zdCBhY2N1cmF0ZSBob3dldmVyIGZhaWxzIHRoZSBwb2ludCBvZiBoaWdobGlnaHRpbmcuIHZhcmlhYmxlIGlzIGNvbXBhcmFibHkgdGhlIG1vc3QgYWNjdXJhdGUgdGhhdCBhY3R1YWxseSBoYXMgc29tZSBlZmZlY3RcbiAgICAgICAgYmVnaW46ICclW2EtekEtWjAtOSNfJEBdKyUnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOiAnXlxcXFxzKlxcXFx3K1xcXFxzKigsfCUpJ1xuICAgICAgICAvL0kgZG9uJ3QgcmVhbGx5IGtub3cgaWYgdGhpcyBpcyB0b3RhbGx5IHJlbGV2YW50XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsIC8vc3ltYm9sIHdvdWxkIGJlIG1vc3QgYWNjdXJhdGUgaG93ZXZlciBpcyBoaWdsaWdodGVkIGp1c3QgbGlrZSBidWlsdF9pbiBhbmQgdGhhdCBtYWtlcyB1cCBhIGxvdCBvZiBBdXRvSG90a2V5IGNvZGVcblx0XHQgICAgICAgICAgICAgICAgICAgICAgICAvL21lYW5pbmcgdGhhdCBpdCB3b3VsZCBmYWlsIHRvIGhpZ2hsaWdodCBhbnl0aGluZ1xuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtiZWdpbjogJ15bXlxcXFxuXCI7XSs6Oig/IT0pJ30sXG4gICAgICAgICAge2JlZ2luOiAnXlteXFxcXG5cIjtdKzooPyE9KScsIHJlbGV2YW5jZTogMH0gLy8gemVybyByZWxldmFuY2UgYXMgaXQgY2F0Y2hlcyBhIGxvdCBvZiB0aGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmb2xsb3dlZCBieSBhIHNpbmdsZSAnOicgaW4gbWFueSBsYW5ndWFnZXNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsIFxuICAgICAgICBiZWdpbjogJ15cXFxccyojXFxcXHcrJywgZW5kOickJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuXHQgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOiAnQV9bYS16QS1aMC05XSsnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBjb25zZWN1dGl2ZSBjb21tYXMsIG5vdCBmb3IgaGlnaGxpZ2h0aW5nIGJ1dCBqdXN0IGZvciByZWxldmFuY2VcbiAgICAgICAgYmVnaW46ICcsXFxcXHMqLCdcbiAgICAgIH1cbiAgICBdXG4gIH1cbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==