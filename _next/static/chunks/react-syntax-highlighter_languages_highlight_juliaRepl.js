(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_juliaRepl"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/julia-repl.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/julia-repl.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    contains: [
      {
        className: 'meta',
        begin: /^julia>/,
        relevance: 10,
        starts: {
          // end the highlighting if we are on a new line and the line does not have at
          // least six spaces in the beginning
          end: /^(?![ ]{6})/,
          subLanguage: 'julia'
      },
      // jldoctest Markdown blocks are used in the Julia manual and package docs indicate
      // code snippets that should be verified when the documentation is built. They can be
      // either REPL-like or script-like, but are usually REPL-like and therefore we apply
      // julia-repl highlighting to them. More information can be found in Documenter's
      // manual: https://juliadocs.github.io/Documenter.jl/latest/man/doctests.html
      aliases: ['jldoctest']
      }
    ]
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9qdWxpYVJlcGwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qdWxpYS1yZXBsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogL15qdWxpYT4vLFxuICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAvLyBlbmQgdGhlIGhpZ2hsaWdodGluZyBpZiB3ZSBhcmUgb24gYSBuZXcgbGluZSBhbmQgdGhlIGxpbmUgZG9lcyBub3QgaGF2ZSBhdFxuICAgICAgICAgIC8vIGxlYXN0IHNpeCBzcGFjZXMgaW4gdGhlIGJlZ2lubmluZ1xuICAgICAgICAgIGVuZDogL14oPyFbIF17Nn0pLyxcbiAgICAgICAgICBzdWJMYW5ndWFnZTogJ2p1bGlhJ1xuICAgICAgfSxcbiAgICAgIC8vIGpsZG9jdGVzdCBNYXJrZG93biBibG9ja3MgYXJlIHVzZWQgaW4gdGhlIEp1bGlhIG1hbnVhbCBhbmQgcGFja2FnZSBkb2NzIGluZGljYXRlXG4gICAgICAvLyBjb2RlIHNuaXBwZXRzIHRoYXQgc2hvdWxkIGJlIHZlcmlmaWVkIHdoZW4gdGhlIGRvY3VtZW50YXRpb24gaXMgYnVpbHQuIFRoZXkgY2FuIGJlXG4gICAgICAvLyBlaXRoZXIgUkVQTC1saWtlIG9yIHNjcmlwdC1saWtlLCBidXQgYXJlIHVzdWFsbHkgUkVQTC1saWtlIGFuZCB0aGVyZWZvcmUgd2UgYXBwbHlcbiAgICAgIC8vIGp1bGlhLXJlcGwgaGlnaGxpZ2h0aW5nIHRvIHRoZW0uIE1vcmUgaW5mb3JtYXRpb24gY2FuIGJlIGZvdW5kIGluIERvY3VtZW50ZXInc1xuICAgICAgLy8gbWFudWFsOiBodHRwczovL2p1bGlhZG9jcy5naXRodWIuaW8vRG9jdW1lbnRlci5qbC9sYXRlc3QvbWFuL2RvY3Rlc3RzLmh0bWxcbiAgICAgIGFsaWFzZXM6IFsnamxkb2N0ZXN0J11cbiAgICAgIH1cbiAgICBdXG4gIH1cbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=