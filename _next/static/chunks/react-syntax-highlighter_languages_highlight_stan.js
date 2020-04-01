(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_stan"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/stan.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/stan.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      {
        begin: hljs.UNDERSCORE_IDENT_RE,
        lexemes: hljs.UNDERSCORE_IDENT_RE,
        keywords: {
          // Stan's keywords
          name:
            'for in while repeat until if then else',
          // Stan's probablity distributions (less beta and gamma, as commonly
          // used for parameter names). So far, _log and _rng variants are not
          // included
          symbol:
            'bernoulli bernoulli_logit binomial binomial_logit '               +
            'beta_binomial hypergeometric categorical categorical_logit '      +
            'ordered_logistic neg_binomial neg_binomial_2 '                    +
            'neg_binomial_2_log poisson poisson_log multinomial normal '       +
            'exp_mod_normal skew_normal student_t cauchy double_exponential '  +
            'logistic gumbel lognormal chi_square inv_chi_square '             +
            'scaled_inv_chi_square exponential inv_gamma weibull frechet '     +
            'rayleigh wiener pareto pareto_type_2 von_mises uniform '          +
            'multi_normal multi_normal_prec multi_normal_cholesky multi_gp '   +
            'multi_gp_cholesky multi_student_t gaussian_dlm_obs dirichlet '    +
            'lkj_corr lkj_corr_cholesky wishart inv_wishart',
          // Stan's data types
          'selector-tag':
            'int real vector simplex unit_vector ordered positive_ordered '    +
            'row_vector matrix cholesky_factor_corr cholesky_factor_cov '      +
            'corr_matrix cov_matrix',
          // Stan's model blocks
          title:
            'functions model data parameters quantities transformed '          +
            'generated',
          literal:
            'true false'
        },
        relevance: 0
      },
      // The below is all taken from the R language definition
      {
        // hex value
        className: 'number',
        begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
        relevance: 0
      },
      {
        // hex value
        className: 'number',
        begin: "0[xX][0-9a-fA-F]+[Li]?\\b",
        relevance: 0
      },
      {
        // explicit integer
        className: 'number',
        begin: "\\d+(?:[eE][+\\-]?\\d*)?L\\b",
        relevance: 0
      },
      {
        // number with trailing decimal
        className: 'number',
        begin: "\\d+\\.(?!\\d)(?:i\\b)?",
        relevance: 0
      },
      {
        // number
        className: 'number',
        begin: "\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d*)?i?\\b",
        relevance: 0
      },
      {
        // number with leading decimal
        className: 'number',
        begin: "\\.\\d+(?:[eE][+\\-]?\\d*)?i?\\b",
        relevance: 0
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9zdGFuLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvc3Rhbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgcmV0dXJuIHtcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBobGpzLlVOREVSU0NPUkVfSURFTlRfUkUsXG4gICAgICAgIGxleGVtZXM6IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAvLyBTdGFuJ3Mga2V5d29yZHNcbiAgICAgICAgICBuYW1lOlxuICAgICAgICAgICAgJ2ZvciBpbiB3aGlsZSByZXBlYXQgdW50aWwgaWYgdGhlbiBlbHNlJyxcbiAgICAgICAgICAvLyBTdGFuJ3MgcHJvYmFibGl0eSBkaXN0cmlidXRpb25zIChsZXNzIGJldGEgYW5kIGdhbW1hLCBhcyBjb21tb25seVxuICAgICAgICAgIC8vIHVzZWQgZm9yIHBhcmFtZXRlciBuYW1lcykuIFNvIGZhciwgX2xvZyBhbmQgX3JuZyB2YXJpYW50cyBhcmUgbm90XG4gICAgICAgICAgLy8gaW5jbHVkZWRcbiAgICAgICAgICBzeW1ib2w6XG4gICAgICAgICAgICAnYmVybm91bGxpIGJlcm5vdWxsaV9sb2dpdCBiaW5vbWlhbCBiaW5vbWlhbF9sb2dpdCAnICAgICAgICAgICAgICAgK1xuICAgICAgICAgICAgJ2JldGFfYmlub21pYWwgaHlwZXJnZW9tZXRyaWMgY2F0ZWdvcmljYWwgY2F0ZWdvcmljYWxfbG9naXQgJyAgICAgICtcbiAgICAgICAgICAgICdvcmRlcmVkX2xvZ2lzdGljIG5lZ19iaW5vbWlhbCBuZWdfYmlub21pYWxfMiAnICAgICAgICAgICAgICAgICAgICArXG4gICAgICAgICAgICAnbmVnX2Jpbm9taWFsXzJfbG9nIHBvaXNzb24gcG9pc3Nvbl9sb2cgbXVsdGlub21pYWwgbm9ybWFsICcgICAgICAgK1xuICAgICAgICAgICAgJ2V4cF9tb2Rfbm9ybWFsIHNrZXdfbm9ybWFsIHN0dWRlbnRfdCBjYXVjaHkgZG91YmxlX2V4cG9uZW50aWFsICcgICtcbiAgICAgICAgICAgICdsb2dpc3RpYyBndW1iZWwgbG9nbm9ybWFsIGNoaV9zcXVhcmUgaW52X2NoaV9zcXVhcmUgJyAgICAgICAgICAgICArXG4gICAgICAgICAgICAnc2NhbGVkX2ludl9jaGlfc3F1YXJlIGV4cG9uZW50aWFsIGludl9nYW1tYSB3ZWlidWxsIGZyZWNoZXQgJyAgICAgK1xuICAgICAgICAgICAgJ3JheWxlaWdoIHdpZW5lciBwYXJldG8gcGFyZXRvX3R5cGVfMiB2b25fbWlzZXMgdW5pZm9ybSAnICAgICAgICAgICtcbiAgICAgICAgICAgICdtdWx0aV9ub3JtYWwgbXVsdGlfbm9ybWFsX3ByZWMgbXVsdGlfbm9ybWFsX2Nob2xlc2t5IG11bHRpX2dwICcgICArXG4gICAgICAgICAgICAnbXVsdGlfZ3BfY2hvbGVza3kgbXVsdGlfc3R1ZGVudF90IGdhdXNzaWFuX2RsbV9vYnMgZGlyaWNobGV0ICcgICAgK1xuICAgICAgICAgICAgJ2xral9jb3JyIGxral9jb3JyX2Nob2xlc2t5IHdpc2hhcnQgaW52X3dpc2hhcnQnLFxuICAgICAgICAgIC8vIFN0YW4ncyBkYXRhIHR5cGVzXG4gICAgICAgICAgJ3NlbGVjdG9yLXRhZyc6XG4gICAgICAgICAgICAnaW50IHJlYWwgdmVjdG9yIHNpbXBsZXggdW5pdF92ZWN0b3Igb3JkZXJlZCBwb3NpdGl2ZV9vcmRlcmVkICcgICAgK1xuICAgICAgICAgICAgJ3Jvd192ZWN0b3IgbWF0cml4IGNob2xlc2t5X2ZhY3Rvcl9jb3JyIGNob2xlc2t5X2ZhY3Rvcl9jb3YgJyAgICAgICtcbiAgICAgICAgICAgICdjb3JyX21hdHJpeCBjb3ZfbWF0cml4JyxcbiAgICAgICAgICAvLyBTdGFuJ3MgbW9kZWwgYmxvY2tzXG4gICAgICAgICAgdGl0bGU6XG4gICAgICAgICAgICAnZnVuY3Rpb25zIG1vZGVsIGRhdGEgcGFyYW1ldGVycyBxdWFudGl0aWVzIHRyYW5zZm9ybWVkICcgICAgICAgICAgK1xuICAgICAgICAgICAgJ2dlbmVyYXRlZCcsXG4gICAgICAgICAgbGl0ZXJhbDpcbiAgICAgICAgICAgICd0cnVlIGZhbHNlJ1xuICAgICAgICB9LFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICAvLyBUaGUgYmVsb3cgaXMgYWxsIHRha2VuIGZyb20gdGhlIFIgbGFuZ3VhZ2UgZGVmaW5pdGlvblxuICAgICAge1xuICAgICAgICAvLyBoZXggdmFsdWVcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46IFwiMFt4WF1bMC05YS1mQS1GXStbTGldP1xcXFxiXCIsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gaGV4IHZhbHVlXG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiBcIjBbeFhdWzAtOWEtZkEtRl0rW0xpXT9cXFxcYlwiLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIGV4cGxpY2l0IGludGVnZXJcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46IFwiXFxcXGQrKD86W2VFXVsrXFxcXC1dP1xcXFxkKik/TFxcXFxiXCIsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gbnVtYmVyIHdpdGggdHJhaWxpbmcgZGVjaW1hbFxuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogXCJcXFxcZCtcXFxcLig/IVxcXFxkKSg/OmlcXFxcYik/XCIsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gbnVtYmVyXG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiBcIlxcXFxkKyg/OlxcXFwuXFxcXGQqKT8oPzpbZUVdWytcXFxcLV0/XFxcXGQqKT9pP1xcXFxiXCIsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gbnVtYmVyIHdpdGggbGVhZGluZyBkZWNpbWFsXG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiBcIlxcXFwuXFxcXGQrKD86W2VFXVsrXFxcXC1dP1xcXFxkKik/aT9cXFxcYlwiLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==