(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_gcode"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/gcode.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/gcode.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
    var GCODE_IDENT_RE = '[A-Z_][A-Z0-9_.]*';
    var GCODE_CLOSE_RE = '\\%';
    var GCODE_KEYWORDS =
      'IF DO WHILE ENDWHILE CALL ENDIF SUB ENDSUB GOTO REPEAT ENDREPEAT ' +
      'EQ LT GT NE GE LE OR XOR';
    var GCODE_START = {
        className: 'meta',
        begin: '([O])([0-9]+)'
    };
    var GCODE_CODE = [
        hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        hljs.COMMENT(/\(/, /\)/),
        hljs.inherit(hljs.C_NUMBER_MODE, {begin: '([-+]?([0-9]*\\.?[0-9]+\\.?))|' + hljs.C_NUMBER_RE}),
        hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
        hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
        {
            className: 'name',
            begin: '([G])([0-9]+\\.?[0-9]?)'
        },
        {
            className: 'name',
            begin: '([M])([0-9]+\\.?[0-9]?)'
        },
        {
            className: 'attr',
            begin: '(VC|VS|#)',
            end: '(\\d+)'
        },
        {
            className: 'attr',
            begin: '(VZOFX|VZOFY|VZOFZ)'
        },
        {
            className: 'built_in',
            begin: '(ATAN|ABS|ACOS|ASIN|SIN|COS|EXP|FIX|FUP|ROUND|LN|TAN)(\\[)',
            end: '([-+]?([0-9]*\\.?[0-9]+\\.?))(\\])'
        },
        {
            className: 'symbol',
            variants: [
                {
                    begin: 'N', end: '\\d+',
                    illegal: '\\W'
                }
            ]
        }
    ];

    return {
        aliases: ['nc'],
        // Some implementations (CNC controls) of G-code are interoperable with uppercase and lowercase letters seamlessly.
        // However, most prefer all uppercase and uppercase is customary.
        case_insensitive: true,
        lexemes: GCODE_IDENT_RE,
        keywords: GCODE_KEYWORDS,
        contains: [
            {
                className: 'meta',
                begin: GCODE_CLOSE_RE
            },
            GCODE_START
        ].concat(GCODE_CODE)
    };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9nY29kZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2djb2RlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICAgIHZhciBHQ09ERV9JREVOVF9SRSA9ICdbQS1aX11bQS1aMC05Xy5dKic7XG4gICAgdmFyIEdDT0RFX0NMT1NFX1JFID0gJ1xcXFwlJztcbiAgICB2YXIgR0NPREVfS0VZV09SRFMgPVxuICAgICAgJ0lGIERPIFdISUxFIEVORFdISUxFIENBTEwgRU5ESUYgU1VCIEVORFNVQiBHT1RPIFJFUEVBVCBFTkRSRVBFQVQgJyArXG4gICAgICAnRVEgTFQgR1QgTkUgR0UgTEUgT1IgWE9SJztcbiAgICB2YXIgR0NPREVfU1RBUlQgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJyhbT10pKFswLTldKyknXG4gICAgfTtcbiAgICB2YXIgR0NPREVfQ09ERSA9IFtcbiAgICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICBobGpzLkNPTU1FTlQoL1xcKC8sIC9cXCkvKSxcbiAgICAgICAgaGxqcy5pbmhlcml0KGhsanMuQ19OVU1CRVJfTU9ERSwge2JlZ2luOiAnKFstK10/KFswLTldKlxcXFwuP1swLTldK1xcXFwuPykpfCcgKyBobGpzLkNfTlVNQkVSX1JFfSksXG4gICAgICAgIGhsanMuaW5oZXJpdChobGpzLkFQT1NfU1RSSU5HX01PREUsIHtpbGxlZ2FsOiBudWxsfSksXG4gICAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7aWxsZWdhbDogbnVsbH0pLFxuICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICduYW1lJyxcbiAgICAgICAgICAgIGJlZ2luOiAnKFtHXSkoWzAtOV0rXFxcXC4/WzAtOV0/KSdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbmFtZScsXG4gICAgICAgICAgICBiZWdpbjogJyhbTV0pKFswLTldK1xcXFwuP1swLTldPyknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICAgICAgYmVnaW46ICcoVkN8VlN8IyknLFxuICAgICAgICAgICAgZW5kOiAnKFxcXFxkKyknXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICAgICAgYmVnaW46ICcoVlpPRlh8VlpPRll8VlpPRlopJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgICAgICBiZWdpbjogJyhBVEFOfEFCU3xBQ09TfEFTSU58U0lOfENPU3xFWFB8RklYfEZVUHxST1VORHxMTnxUQU4pKFxcXFxbKScsXG4gICAgICAgICAgICBlbmQ6ICcoWy0rXT8oWzAtOV0qXFxcXC4/WzAtOV0rXFxcXC4/KSkoXFxcXF0pJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGJlZ2luOiAnTicsIGVuZDogJ1xcXFxkKycsXG4gICAgICAgICAgICAgICAgICAgIGlsbGVnYWw6ICdcXFxcVydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWxpYXNlczogWyduYyddLFxuICAgICAgICAvLyBTb21lIGltcGxlbWVudGF0aW9ucyAoQ05DIGNvbnRyb2xzKSBvZiBHLWNvZGUgYXJlIGludGVyb3BlcmFibGUgd2l0aCB1cHBlcmNhc2UgYW5kIGxvd2VyY2FzZSBsZXR0ZXJzIHNlYW1sZXNzbHkuXG4gICAgICAgIC8vIEhvd2V2ZXIsIG1vc3QgcHJlZmVyIGFsbCB1cHBlcmNhc2UgYW5kIHVwcGVyY2FzZSBpcyBjdXN0b21hcnkuXG4gICAgICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgICAgIGxleGVtZXM6IEdDT0RFX0lERU5UX1JFLFxuICAgICAgICBrZXl3b3JkczogR0NPREVfS0VZV09SRFMsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgICAgICAgICAgYmVnaW46IEdDT0RFX0NMT1NFX1JFXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgR0NPREVfU1RBUlRcbiAgICAgICAgXS5jb25jYXQoR0NPREVfQ09ERSlcbiAgICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9