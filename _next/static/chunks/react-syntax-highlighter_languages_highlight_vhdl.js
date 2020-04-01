(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_vhdl"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/vhdl.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/vhdl.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  // Regular expression for VHDL numeric literals.

  // Decimal literal:
  var INTEGER_RE = '\\d(_|\\d)*';
  var EXPONENT_RE = '[eE][-+]?' + INTEGER_RE;
  var DECIMAL_LITERAL_RE = INTEGER_RE + '(\\.' + INTEGER_RE + ')?' + '(' + EXPONENT_RE + ')?';
  // Based literal:
  var BASED_INTEGER_RE = '\\w+';
  var BASED_LITERAL_RE = INTEGER_RE + '#' + BASED_INTEGER_RE + '(\\.' + BASED_INTEGER_RE + ')?' + '#' + '(' + EXPONENT_RE + ')?';

  var NUMBER_RE = '\\b(' + BASED_LITERAL_RE + '|' + DECIMAL_LITERAL_RE + ')';

  return {
    case_insensitive: true,
    keywords: {
      keyword:
        'abs access after alias all and architecture array assert assume assume_guarantee attribute ' +
        'begin block body buffer bus case component configuration constant context cover disconnect ' +
        'downto default else elsif end entity exit fairness file for force function generate ' +
        'generic group guarded if impure in inertial inout is label library linkage literal ' +
        'loop map mod nand new next nor not null of on open or others out package parameter port ' +
        'postponed procedure process property protected pure range record register reject ' +
        'release rem report restrict restrict_guarantee return rol ror select sequence ' +
        'severity shared signal sla sll sra srl strong subtype then to transport type ' +
        'unaffected units until use variable view vmode vprop vunit wait when while with xnor xor',
      built_in:
        'boolean bit character ' +
        'integer time delay_length natural positive ' +
        'string bit_vector file_open_kind file_open_status ' +
        'std_logic std_logic_vector unsigned signed boolean_vector integer_vector ' +
        'std_ulogic std_ulogic_vector unresolved_unsigned u_unsigned unresolved_signed u_signed ' +
        'real_vector time_vector',
      literal:
        'false true note warning error failure ' +  // severity_level
        'line text side width'                      // textio
    },
    illegal: '{',
    contains: [
      hljs.C_BLOCK_COMMENT_MODE,      // VHDL-2008 block commenting.
      hljs.COMMENT('--', '$'),
      hljs.QUOTE_STRING_MODE,
      {
        className: 'number',
        begin: NUMBER_RE,
        relevance: 0
      },
      {
        className: 'string',
        begin: '\'(U|X|0|1|Z|W|L|H|-)\'',
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      {
        className: 'symbol',
        begin: '\'[A-Za-z](_?[A-Za-z0-9])*',
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF92aGRsLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdmhkbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgLy8gUmVndWxhciBleHByZXNzaW9uIGZvciBWSERMIG51bWVyaWMgbGl0ZXJhbHMuXG5cbiAgLy8gRGVjaW1hbCBsaXRlcmFsOlxuICB2YXIgSU5URUdFUl9SRSA9ICdcXFxcZChffFxcXFxkKSonO1xuICB2YXIgRVhQT05FTlRfUkUgPSAnW2VFXVstK10/JyArIElOVEVHRVJfUkU7XG4gIHZhciBERUNJTUFMX0xJVEVSQUxfUkUgPSBJTlRFR0VSX1JFICsgJyhcXFxcLicgKyBJTlRFR0VSX1JFICsgJyk/JyArICcoJyArIEVYUE9ORU5UX1JFICsgJyk/JztcbiAgLy8gQmFzZWQgbGl0ZXJhbDpcbiAgdmFyIEJBU0VEX0lOVEVHRVJfUkUgPSAnXFxcXHcrJztcbiAgdmFyIEJBU0VEX0xJVEVSQUxfUkUgPSBJTlRFR0VSX1JFICsgJyMnICsgQkFTRURfSU5URUdFUl9SRSArICcoXFxcXC4nICsgQkFTRURfSU5URUdFUl9SRSArICcpPycgKyAnIycgKyAnKCcgKyBFWFBPTkVOVF9SRSArICcpPyc7XG5cbiAgdmFyIE5VTUJFUl9SRSA9ICdcXFxcYignICsgQkFTRURfTElURVJBTF9SRSArICd8JyArIERFQ0lNQUxfTElURVJBTF9SRSArICcpJztcblxuICByZXR1cm4ge1xuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdhYnMgYWNjZXNzIGFmdGVyIGFsaWFzIGFsbCBhbmQgYXJjaGl0ZWN0dXJlIGFycmF5IGFzc2VydCBhc3N1bWUgYXNzdW1lX2d1YXJhbnRlZSBhdHRyaWJ1dGUgJyArXG4gICAgICAgICdiZWdpbiBibG9jayBib2R5IGJ1ZmZlciBidXMgY2FzZSBjb21wb25lbnQgY29uZmlndXJhdGlvbiBjb25zdGFudCBjb250ZXh0IGNvdmVyIGRpc2Nvbm5lY3QgJyArXG4gICAgICAgICdkb3dudG8gZGVmYXVsdCBlbHNlIGVsc2lmIGVuZCBlbnRpdHkgZXhpdCBmYWlybmVzcyBmaWxlIGZvciBmb3JjZSBmdW5jdGlvbiBnZW5lcmF0ZSAnICtcbiAgICAgICAgJ2dlbmVyaWMgZ3JvdXAgZ3VhcmRlZCBpZiBpbXB1cmUgaW4gaW5lcnRpYWwgaW5vdXQgaXMgbGFiZWwgbGlicmFyeSBsaW5rYWdlIGxpdGVyYWwgJyArXG4gICAgICAgICdsb29wIG1hcCBtb2QgbmFuZCBuZXcgbmV4dCBub3Igbm90IG51bGwgb2Ygb24gb3BlbiBvciBvdGhlcnMgb3V0IHBhY2thZ2UgcGFyYW1ldGVyIHBvcnQgJyArXG4gICAgICAgICdwb3N0cG9uZWQgcHJvY2VkdXJlIHByb2Nlc3MgcHJvcGVydHkgcHJvdGVjdGVkIHB1cmUgcmFuZ2UgcmVjb3JkIHJlZ2lzdGVyIHJlamVjdCAnICtcbiAgICAgICAgJ3JlbGVhc2UgcmVtIHJlcG9ydCByZXN0cmljdCByZXN0cmljdF9ndWFyYW50ZWUgcmV0dXJuIHJvbCByb3Igc2VsZWN0IHNlcXVlbmNlICcgK1xuICAgICAgICAnc2V2ZXJpdHkgc2hhcmVkIHNpZ25hbCBzbGEgc2xsIHNyYSBzcmwgc3Ryb25nIHN1YnR5cGUgdGhlbiB0byB0cmFuc3BvcnQgdHlwZSAnICtcbiAgICAgICAgJ3VuYWZmZWN0ZWQgdW5pdHMgdW50aWwgdXNlIHZhcmlhYmxlIHZpZXcgdm1vZGUgdnByb3AgdnVuaXQgd2FpdCB3aGVuIHdoaWxlIHdpdGggeG5vciB4b3InLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgICdib29sZWFuIGJpdCBjaGFyYWN0ZXIgJyArXG4gICAgICAgICdpbnRlZ2VyIHRpbWUgZGVsYXlfbGVuZ3RoIG5hdHVyYWwgcG9zaXRpdmUgJyArXG4gICAgICAgICdzdHJpbmcgYml0X3ZlY3RvciBmaWxlX29wZW5fa2luZCBmaWxlX29wZW5fc3RhdHVzICcgK1xuICAgICAgICAnc3RkX2xvZ2ljIHN0ZF9sb2dpY192ZWN0b3IgdW5zaWduZWQgc2lnbmVkIGJvb2xlYW5fdmVjdG9yIGludGVnZXJfdmVjdG9yICcgK1xuICAgICAgICAnc3RkX3Vsb2dpYyBzdGRfdWxvZ2ljX3ZlY3RvciB1bnJlc29sdmVkX3Vuc2lnbmVkIHVfdW5zaWduZWQgdW5yZXNvbHZlZF9zaWduZWQgdV9zaWduZWQgJyArXG4gICAgICAgICdyZWFsX3ZlY3RvciB0aW1lX3ZlY3RvcicsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAnZmFsc2UgdHJ1ZSBub3RlIHdhcm5pbmcgZXJyb3IgZmFpbHVyZSAnICsgIC8vIHNldmVyaXR5X2xldmVsXG4gICAgICAgICdsaW5lIHRleHQgc2lkZSB3aWR0aCcgICAgICAgICAgICAgICAgICAgICAgLy8gdGV4dGlvXG4gICAgfSxcbiAgICBpbGxlZ2FsOiAneycsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsICAgICAgLy8gVkhETC0yMDA4IGJsb2NrIGNvbW1lbnRpbmcuXG4gICAgICBobGpzLkNPTU1FTlQoJy0tJywgJyQnKSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiBOVU1CRVJfUkUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICdcXCcoVXxYfDB8MXxafFd8THxIfC0pXFwnJyxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogJ1xcJ1tBLVphLXpdKF8/W0EtWmEtejAtOV0pKicsXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXVxuICAgICAgfVxuICAgIF1cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==