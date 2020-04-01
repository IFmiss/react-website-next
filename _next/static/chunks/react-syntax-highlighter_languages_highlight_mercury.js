(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_mercury"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/mercury.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/mercury.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var KEYWORDS = {
    keyword:
      'module use_module import_module include_module end_module initialise ' +
      'mutable initialize finalize finalise interface implementation pred ' +
      'mode func type inst solver any_pred any_func is semidet det nondet ' +
      'multi erroneous failure cc_nondet cc_multi typeclass instance where ' +
      'pragma promise external trace atomic or_else require_complete_switch ' +
      'require_det require_semidet require_multi require_nondet ' +
      'require_cc_multi require_cc_nondet require_erroneous require_failure',
    meta:
      // pragma
      'inline no_inline type_spec source_file fact_table obsolete memo ' +
      'loop_check minimal_model terminates does_not_terminate ' +
      'check_termination promise_equivalent_clauses ' +
      // preprocessor
      'foreign_proc foreign_decl foreign_code foreign_type ' +
      'foreign_import_module foreign_export_enum foreign_export ' +
      'foreign_enum may_call_mercury will_not_call_mercury thread_safe ' +
      'not_thread_safe maybe_thread_safe promise_pure promise_semipure ' +
      'tabled_for_io local untrailed trailed attach_to_io_state ' +
      'can_pass_as_mercury_type stable will_not_throw_exception ' +
      'may_modify_trail will_not_modify_trail may_duplicate ' +
      'may_not_duplicate affects_liveness does_not_affect_liveness ' +
      'doesnt_affect_liveness no_sharing unknown_sharing sharing',
    built_in:
      'some all not if then else true fail false try catch catch_any ' +
      'semidet_true semidet_false semidet_fail impure_true impure semipure'
  };

  var COMMENT = hljs.COMMENT('%', '$');

  var NUMCODE = {
    className: 'number',
    begin: "0'.\\|0[box][0-9a-fA-F]*"
  };

  var ATOM = hljs.inherit(hljs.APOS_STRING_MODE, {relevance: 0});
  var STRING = hljs.inherit(hljs.QUOTE_STRING_MODE, {relevance: 0});
  var STRING_FMT = {
    className: 'subst',
    begin: '\\\\[abfnrtv]\\|\\\\x[0-9a-fA-F]*\\\\\\|%[-+# *.0-9]*[dioxXucsfeEgGp]',
    relevance: 0
  };
  STRING.contains.push(STRING_FMT);

  var IMPLICATION = {
    className: 'built_in',
    variants: [
      {begin: '<=>'},
      {begin: '<=', relevance: 0},
      {begin: '=>', relevance: 0},
      {begin: '/\\\\'},
      {begin: '\\\\/'}
    ]
  };

  var HEAD_BODY_CONJUNCTION = {
    className: 'built_in',
    variants: [
      {begin: ':-\\|-->'},
      {begin: '=', relevance: 0}
    ]
  };

  return {
    aliases: ['m', 'moo'],
    keywords: KEYWORDS,
    contains: [
      IMPLICATION,
      HEAD_BODY_CONJUNCTION,
      COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      NUMCODE,
      hljs.NUMBER_MODE,
      ATOM,
      STRING,
      {begin: /:-/} // relevance booster
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9tZXJjdXJ5LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbWVyY3VyeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIEtFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6XG4gICAgICAnbW9kdWxlIHVzZV9tb2R1bGUgaW1wb3J0X21vZHVsZSBpbmNsdWRlX21vZHVsZSBlbmRfbW9kdWxlIGluaXRpYWxpc2UgJyArXG4gICAgICAnbXV0YWJsZSBpbml0aWFsaXplIGZpbmFsaXplIGZpbmFsaXNlIGludGVyZmFjZSBpbXBsZW1lbnRhdGlvbiBwcmVkICcgK1xuICAgICAgJ21vZGUgZnVuYyB0eXBlIGluc3Qgc29sdmVyIGFueV9wcmVkIGFueV9mdW5jIGlzIHNlbWlkZXQgZGV0IG5vbmRldCAnICtcbiAgICAgICdtdWx0aSBlcnJvbmVvdXMgZmFpbHVyZSBjY19ub25kZXQgY2NfbXVsdGkgdHlwZWNsYXNzIGluc3RhbmNlIHdoZXJlICcgK1xuICAgICAgJ3ByYWdtYSBwcm9taXNlIGV4dGVybmFsIHRyYWNlIGF0b21pYyBvcl9lbHNlIHJlcXVpcmVfY29tcGxldGVfc3dpdGNoICcgK1xuICAgICAgJ3JlcXVpcmVfZGV0IHJlcXVpcmVfc2VtaWRldCByZXF1aXJlX211bHRpIHJlcXVpcmVfbm9uZGV0ICcgK1xuICAgICAgJ3JlcXVpcmVfY2NfbXVsdGkgcmVxdWlyZV9jY19ub25kZXQgcmVxdWlyZV9lcnJvbmVvdXMgcmVxdWlyZV9mYWlsdXJlJyxcbiAgICBtZXRhOlxuICAgICAgLy8gcHJhZ21hXG4gICAgICAnaW5saW5lIG5vX2lubGluZSB0eXBlX3NwZWMgc291cmNlX2ZpbGUgZmFjdF90YWJsZSBvYnNvbGV0ZSBtZW1vICcgK1xuICAgICAgJ2xvb3BfY2hlY2sgbWluaW1hbF9tb2RlbCB0ZXJtaW5hdGVzIGRvZXNfbm90X3Rlcm1pbmF0ZSAnICtcbiAgICAgICdjaGVja190ZXJtaW5hdGlvbiBwcm9taXNlX2VxdWl2YWxlbnRfY2xhdXNlcyAnICtcbiAgICAgIC8vIHByZXByb2Nlc3NvclxuICAgICAgJ2ZvcmVpZ25fcHJvYyBmb3JlaWduX2RlY2wgZm9yZWlnbl9jb2RlIGZvcmVpZ25fdHlwZSAnICtcbiAgICAgICdmb3JlaWduX2ltcG9ydF9tb2R1bGUgZm9yZWlnbl9leHBvcnRfZW51bSBmb3JlaWduX2V4cG9ydCAnICtcbiAgICAgICdmb3JlaWduX2VudW0gbWF5X2NhbGxfbWVyY3VyeSB3aWxsX25vdF9jYWxsX21lcmN1cnkgdGhyZWFkX3NhZmUgJyArXG4gICAgICAnbm90X3RocmVhZF9zYWZlIG1heWJlX3RocmVhZF9zYWZlIHByb21pc2VfcHVyZSBwcm9taXNlX3NlbWlwdXJlICcgK1xuICAgICAgJ3RhYmxlZF9mb3JfaW8gbG9jYWwgdW50cmFpbGVkIHRyYWlsZWQgYXR0YWNoX3RvX2lvX3N0YXRlICcgK1xuICAgICAgJ2Nhbl9wYXNzX2FzX21lcmN1cnlfdHlwZSBzdGFibGUgd2lsbF9ub3RfdGhyb3dfZXhjZXB0aW9uICcgK1xuICAgICAgJ21heV9tb2RpZnlfdHJhaWwgd2lsbF9ub3RfbW9kaWZ5X3RyYWlsIG1heV9kdXBsaWNhdGUgJyArXG4gICAgICAnbWF5X25vdF9kdXBsaWNhdGUgYWZmZWN0c19saXZlbmVzcyBkb2VzX25vdF9hZmZlY3RfbGl2ZW5lc3MgJyArXG4gICAgICAnZG9lc250X2FmZmVjdF9saXZlbmVzcyBub19zaGFyaW5nIHVua25vd25fc2hhcmluZyBzaGFyaW5nJyxcbiAgICBidWlsdF9pbjpcbiAgICAgICdzb21lIGFsbCBub3QgaWYgdGhlbiBlbHNlIHRydWUgZmFpbCBmYWxzZSB0cnkgY2F0Y2ggY2F0Y2hfYW55ICcgK1xuICAgICAgJ3NlbWlkZXRfdHJ1ZSBzZW1pZGV0X2ZhbHNlIHNlbWlkZXRfZmFpbCBpbXB1cmVfdHJ1ZSBpbXB1cmUgc2VtaXB1cmUnXG4gIH07XG5cbiAgdmFyIENPTU1FTlQgPSBobGpzLkNPTU1FTlQoJyUnLCAnJCcpO1xuXG4gIHZhciBOVU1DT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgYmVnaW46IFwiMCcuXFxcXHwwW2JveF1bMC05YS1mQS1GXSpcIlxuICB9O1xuXG4gIHZhciBBVE9NID0gaGxqcy5pbmhlcml0KGhsanMuQVBPU19TVFJJTkdfTU9ERSwge3JlbGV2YW5jZTogMH0pO1xuICB2YXIgU1RSSU5HID0gaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtyZWxldmFuY2U6IDB9KTtcbiAgdmFyIFNUUklOR19GTVQgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIGJlZ2luOiAnXFxcXFxcXFxbYWJmbnJ0dl1cXFxcfFxcXFxcXFxceFswLTlhLWZBLUZdKlxcXFxcXFxcXFxcXHwlWy0rIyAqLjAtOV0qW2Rpb3hYdWNzZmVFZ0dwXScsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIFNUUklORy5jb250YWlucy5wdXNoKFNUUklOR19GTVQpO1xuXG4gIHZhciBJTVBMSUNBVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtiZWdpbjogJzw9Pid9LFxuICAgICAge2JlZ2luOiAnPD0nLCByZWxldmFuY2U6IDB9LFxuICAgICAge2JlZ2luOiAnPT4nLCByZWxldmFuY2U6IDB9LFxuICAgICAge2JlZ2luOiAnL1xcXFxcXFxcJ30sXG4gICAgICB7YmVnaW46ICdcXFxcXFxcXC8nfVxuICAgIF1cbiAgfTtcblxuICB2YXIgSEVBRF9CT0RZX0NPTkpVTkNUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICB2YXJpYW50czogW1xuICAgICAge2JlZ2luOiAnOi1cXFxcfC0tPid9LFxuICAgICAge2JlZ2luOiAnPScsIHJlbGV2YW5jZTogMH1cbiAgICBdXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ20nLCAnbW9vJ10sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBJTVBMSUNBVElPTixcbiAgICAgIEhFQURfQk9EWV9DT05KVU5DVElPTixcbiAgICAgIENPTU1FTlQsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgTlVNQ09ERSxcbiAgICAgIGhsanMuTlVNQkVSX01PREUsXG4gICAgICBBVE9NLFxuICAgICAgU1RSSU5HLFxuICAgICAge2JlZ2luOiAvOi0vfSAvLyByZWxldmFuY2UgYm9vc3RlclxuICAgIF1cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==