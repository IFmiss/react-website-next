(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_flix"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/flix.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/flix.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (hljs) {

    var CHAR = {
        className: 'string',
        begin: /'(.|\\[xXuU][a-zA-Z0-9]+)'/
    };

    var STRING = {
        className: 'string',
        variants: [
            {
                begin: '"', end: '"'
            }
        ]
    };

    var NAME = {
        className: 'title',
        begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/
    };

    var METHOD = {
        className: 'function',
        beginKeywords: 'def',
        end: /[:={\[(\n;]/,
        excludeEnd: true,
        contains: [NAME]
    };

    return {
        keywords: {
            literal: 'true false',
            keyword: 'case class def else enum if impl import in lat rel index let match namespace switch type yield with'
        },
        contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.C_BLOCK_COMMENT_MODE,
            CHAR,
            STRING,
            METHOD,
            hljs.C_NUMBER_MODE
        ]
    };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9mbGl4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZmxpeC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChobGpzKSB7XG5cbiAgICB2YXIgQ0hBUiA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46IC8nKC58XFxcXFt4WHVVXVthLXpBLVowLTldKyknL1xuICAgIH07XG5cbiAgICB2YXIgU1RSSU5HID0ge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiAnXCInLCBlbmQ6ICdcIidcbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH07XG5cbiAgICB2YXIgTkFNRSA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICBiZWdpbjogL1teMC05XFxuXFx0IFwiJygpLC5ge31cXFtcXF06O11bXlxcblxcdCBcIicoKSwuYHt9XFxbXFxdOjtdK3xbXjAtOVxcblxcdCBcIicoKSwuYHt9XFxbXFxdOjs9XS9cbiAgICB9O1xuXG4gICAgdmFyIE1FVEhPRCA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZGVmJyxcbiAgICAgICAgZW5kOiAvWzo9e1xcWyhcXG47XS8sXG4gICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbTkFNRV1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlJyxcbiAgICAgICAgICAgIGtleXdvcmQ6ICdjYXNlIGNsYXNzIGRlZiBlbHNlIGVudW0gaWYgaW1wbCBpbXBvcnQgaW4gbGF0IHJlbCBpbmRleCBsZXQgbWF0Y2ggbmFtZXNwYWNlIHN3aXRjaCB0eXBlIHlpZWxkIHdpdGgnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgQ0hBUixcbiAgICAgICAgICAgIFNUUklORyxcbiAgICAgICAgICAgIE1FVEhPRCxcbiAgICAgICAgICAgIGhsanMuQ19OVU1CRVJfTU9ERVxuICAgICAgICBdXG4gICAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=