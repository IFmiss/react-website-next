(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_ocaml"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ocaml.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ocaml.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  /* missing support for heredoc-like string (OCaml 4.0.2+) */
  return {
    aliases: ['ml'],
    keywords: {
      keyword:
        'and as assert asr begin class constraint do done downto else end ' +
        'exception external for fun function functor if in include ' +
        'inherit! inherit initializer land lazy let lor lsl lsr lxor match method!|10 method ' +
        'mod module mutable new object of open! open or private rec sig struct ' +
        'then to try type val! val virtual when while with ' +
        /* camlp4 */
        'parser value',
      built_in:
        /* built-in types */
        'array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 string unit ' +
        /* (some) types in Pervasives */
        'in_channel out_channel ref',
      literal:
        'true false'
    },
    illegal: /\/\/|>>/,
    lexemes: '[a-z_]\\w*!?',
    contains: [
      {
        className: 'literal',
        begin: '\\[(\\|\\|)?\\]|\\(\\)',
        relevance: 0
      },
      hljs.COMMENT(
        '\\(\\*',
        '\\*\\)',
        {
          contains: ['self']
        }
      ),
      { /* type variable */
        className: 'symbol',
        begin: '\'[A-Za-z_](?!\')[\\w\']*'
        /* the grammar is ambiguous on how 'a'b should be interpreted but not the compiler */
      },
      { /* polymorphic variant */
        className: 'type',
        begin: '`[A-Z][\\w\']*'
      },
      { /* module or constructor */
        className: 'type',
        begin: '\\b[A-Z][\\w\']*',
        relevance: 0
      },
      { /* don't color identifiers, but safely catch all identifiers with '*/
        begin: '[a-z_]\\w*\'[\\w\']*', relevance: 0
      },
      hljs.inherit(hljs.APOS_STRING_MODE, {className: 'string', relevance: 0}),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
      {
        className: 'number',
        begin:
          '\\b(0[xX][a-fA-F0-9_]+[Lln]?|' +
          '0[oO][0-7_]+[Lln]?|' +
          '0[bB][01_]+[Lln]?|' +
          '[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)',
        relevance: 0
      },
      {
        begin: /[-=]>/ // relevance booster
      }
    ]
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9vY2FtbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL29jYW1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICAvKiBtaXNzaW5nIHN1cHBvcnQgZm9yIGhlcmVkb2MtbGlrZSBzdHJpbmcgKE9DYW1sIDQuMC4yKykgKi9cbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ21sJ10sXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdhbmQgYXMgYXNzZXJ0IGFzciBiZWdpbiBjbGFzcyBjb25zdHJhaW50IGRvIGRvbmUgZG93bnRvIGVsc2UgZW5kICcgK1xuICAgICAgICAnZXhjZXB0aW9uIGV4dGVybmFsIGZvciBmdW4gZnVuY3Rpb24gZnVuY3RvciBpZiBpbiBpbmNsdWRlICcgK1xuICAgICAgICAnaW5oZXJpdCEgaW5oZXJpdCBpbml0aWFsaXplciBsYW5kIGxhenkgbGV0IGxvciBsc2wgbHNyIGx4b3IgbWF0Y2ggbWV0aG9kIXwxMCBtZXRob2QgJyArXG4gICAgICAgICdtb2QgbW9kdWxlIG11dGFibGUgbmV3IG9iamVjdCBvZiBvcGVuISBvcGVuIG9yIHByaXZhdGUgcmVjIHNpZyBzdHJ1Y3QgJyArXG4gICAgICAgICd0aGVuIHRvIHRyeSB0eXBlIHZhbCEgdmFsIHZpcnR1YWwgd2hlbiB3aGlsZSB3aXRoICcgK1xuICAgICAgICAvKiBjYW1scDQgKi9cbiAgICAgICAgJ3BhcnNlciB2YWx1ZScsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgLyogYnVpbHQtaW4gdHlwZXMgKi9cbiAgICAgICAgJ2FycmF5IGJvb2wgYnl0ZXMgY2hhciBleG58NSBmbG9hdCBpbnQgaW50MzIgaW50NjQgbGlzdCBsYXp5X3R8NSBuYXRpdmVpbnR8NSBzdHJpbmcgdW5pdCAnICtcbiAgICAgICAgLyogKHNvbWUpIHR5cGVzIGluIFBlcnZhc2l2ZXMgKi9cbiAgICAgICAgJ2luX2NoYW5uZWwgb3V0X2NoYW5uZWwgcmVmJyxcbiAgICAgIGxpdGVyYWw6XG4gICAgICAgICd0cnVlIGZhbHNlJ1xuICAgIH0sXG4gICAgaWxsZWdhbDogL1xcL1xcL3w+Pi8sXG4gICAgbGV4ZW1lczogJ1thLXpfXVxcXFx3KiE/JyxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdsaXRlcmFsJyxcbiAgICAgICAgYmVnaW46ICdcXFxcWyhcXFxcfFxcXFx8KT9cXFxcXXxcXFxcKFxcXFwpJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgaGxqcy5DT01NRU5UKFxuICAgICAgICAnXFxcXChcXFxcKicsXG4gICAgICAgICdcXFxcKlxcXFwpJyxcbiAgICAgICAge1xuICAgICAgICAgIGNvbnRhaW5zOiBbJ3NlbGYnXVxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgeyAvKiB0eXBlIHZhcmlhYmxlICovXG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIGJlZ2luOiAnXFwnW0EtWmEtel9dKD8hXFwnKVtcXFxcd1xcJ10qJ1xuICAgICAgICAvKiB0aGUgZ3JhbW1hciBpcyBhbWJpZ3VvdXMgb24gaG93ICdhJ2Igc2hvdWxkIGJlIGludGVycHJldGVkIGJ1dCBub3QgdGhlIGNvbXBpbGVyICovXG4gICAgICB9LFxuICAgICAgeyAvKiBwb2x5bW9ycGhpYyB2YXJpYW50ICovXG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICBiZWdpbjogJ2BbQS1aXVtcXFxcd1xcJ10qJ1xuICAgICAgfSxcbiAgICAgIHsgLyogbW9kdWxlIG9yIGNvbnN0cnVjdG9yICovXG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICBiZWdpbjogJ1xcXFxiW0EtWl1bXFxcXHdcXCddKicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHsgLyogZG9uJ3QgY29sb3IgaWRlbnRpZmllcnMsIGJ1dCBzYWZlbHkgY2F0Y2ggYWxsIGlkZW50aWZpZXJzIHdpdGggJyovXG4gICAgICAgIGJlZ2luOiAnW2Etel9dXFxcXHcqXFwnW1xcXFx3XFwnXSonLCByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5BUE9TX1NUUklOR19NT0RFLCB7Y2xhc3NOYW1lOiAnc3RyaW5nJywgcmVsZXZhbmNlOiAwfSksXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge2lsbGVnYWw6IG51bGx9KSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46XG4gICAgICAgICAgJ1xcXFxiKDBbeFhdW2EtZkEtRjAtOV9dK1tMbG5dP3wnICtcbiAgICAgICAgICAnMFtvT11bMC03X10rW0xsbl0/fCcgK1xuICAgICAgICAgICcwW2JCXVswMV9dK1tMbG5dP3wnICtcbiAgICAgICAgICAnWzAtOV1bMC05X10qKFtMbG5dfChcXFxcLlswLTlfXSopPyhbZUVdWy0rXT9bMC05X10rKT8pPyknLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvWy09XT4vIC8vIHJlbGV2YW5jZSBib29zdGVyXG4gICAgICB9XG4gICAgXVxuICB9XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==