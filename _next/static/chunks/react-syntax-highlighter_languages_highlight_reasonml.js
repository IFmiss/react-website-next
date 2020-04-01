(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_reasonml"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/reasonml.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/reasonml.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  function orReValues(ops){
    return ops
    .map(function(op) {
      return op
        .split('')
        .map(function(char) {
          return '\\' + char;
        })
        .join('');
    })
    .join('|');
  }

  var RE_IDENT = '~?[a-z$_][0-9a-zA-Z$_]*';
  var RE_MODULE_IDENT = '`?[A-Z$_][0-9a-zA-Z$_]*';

  var RE_PARAM_TYPEPARAM = '\'?[a-z$_][0-9a-z$_]*';
  var RE_PARAM_TYPE = '\s*:\s*[a-z$_][0-9a-z$_]*(\(\s*(' + RE_PARAM_TYPEPARAM + '\s*(,' + RE_PARAM_TYPEPARAM + ')*)?\s*\))?';
  var RE_PARAM = RE_IDENT + '(' + RE_PARAM_TYPE + ')?(' + RE_PARAM_TYPE + ')?';
  var RE_OPERATOR = "(" + orReValues(['||', '&&', '++', '**', '+.', '*', '/', '*.', '/.', '...', '|>']) + "|==|===)";
  var RE_OPERATOR_SPACED = "\\s+" + RE_OPERATOR + "\\s+";

  var KEYWORDS = {
    keyword:
      'and as asr assert begin class constraint do done downto else end exception external' +
      'for fun function functor if in include inherit initializer' +
      'land lazy let lor lsl lsr lxor match method mod module mutable new nonrec' +
      'object of open or private rec sig struct then to try type val virtual when while with',
    built_in:
      'array bool bytes char exn|5 float int int32 int64 list lazy_t|5 nativeint|5 ref string unit ',
    literal:
      'true false'
  };

  var RE_NUMBER = '\\b(0[xX][a-fA-F0-9_]+[Lln]?|' +
    '0[oO][0-7_]+[Lln]?|' +
    '0[bB][01_]+[Lln]?|' +
    '[0-9][0-9_]*([Lln]|(\\.[0-9_]*)?([eE][-+]?[0-9_]+)?)?)';

  var NUMBER_MODE = {
    className: 'number',
    relevance: 0,
    variants: [
      {
        begin: RE_NUMBER
      },
      {
        begin: '\\(\\-' + RE_NUMBER + '\\)'
      }
    ]
  };

  var OPERATOR_MODE = {
    className: 'operator',
    relevance: 0,
    begin: RE_OPERATOR
  };
  var LIST_CONTENTS_MODES = [
    {
      className: 'identifier',
      relevance: 0,
      begin: RE_IDENT
    },
    OPERATOR_MODE,
    NUMBER_MODE
  ];

  var MODULE_ACCESS_CONTENTS = [
    hljs.QUOTE_STRING_MODE,
    OPERATOR_MODE,
    {
      className: 'module',
      begin: "\\b" + RE_MODULE_IDENT, returnBegin: true,
      end: "\.",
      contains: [
        {
          className: 'identifier',
          begin: RE_MODULE_IDENT,
          relevance: 0
        }
      ]
    }
  ];

  var PARAMS_CONTENTS = [
    {
      className: 'module',
      begin: "\\b" + RE_MODULE_IDENT, returnBegin: true,
      end: "\.",
      relevance: 0,
      contains: [
        {
          className: 'identifier',
          begin: RE_MODULE_IDENT,
          relevance: 0
        }
      ]
    }
  ];

  var PARAMS_MODE = {
    begin: RE_IDENT,
    end: '(,|\\n|\\))',
    relevance: 0,
    contains: [
      OPERATOR_MODE,
      {
        className: 'typing',
        begin: ':',
        end: '(,|\\n)',
        returnBegin: true,
        relevance: 0,
        contains: PARAMS_CONTENTS
      }
    ]
  };

  var FUNCTION_BLOCK_MODE = {
    className: 'function',
    relevance: 0,
    keywords: KEYWORDS,
    variants: [
      {
        begin: '\\s(\\(\\.?.*?\\)|' + RE_IDENT + ')\\s*=>',
        end: '\\s*=>',
        returnBegin: true,
        relevance: 0,
        contains: [
          {
            className: 'params',
            variants: [
              {
                begin: RE_IDENT
              },
              {
                begin: RE_PARAM
              },
              {
                begin: /\(\s*\)/,
              }
            ]
          }
        ]
      },
      {
        begin: '\\s\\(\\.?[^;\\|]*\\)\\s*=>',
        end: '\\s=>',
        returnBegin: true,
        relevance: 0,
        contains: [
          {
            className: 'params',
            relevance: 0,
            variants: [
              PARAMS_MODE
            ]
          }
        ]
      },
      {
        begin: '\\(\\.\\s' + RE_IDENT + '\\)\\s*=>'
      }
    ]
  };
  MODULE_ACCESS_CONTENTS.push(FUNCTION_BLOCK_MODE);

  var CONSTRUCTOR_MODE = {
    className: 'constructor',
    begin: RE_MODULE_IDENT + '\\(',
    end: '\\)',
    illegal: '\\n',
    keywords: KEYWORDS,
    contains: [
      hljs.QUOTE_STRING_MODE,
      OPERATOR_MODE,
      {
        className: 'params',
        begin: '\\b' + RE_IDENT
      }
    ]
  };

  var PATTERN_MATCH_BLOCK_MODE = {
    className: 'pattern-match',
    begin: '\\|',
    returnBegin: true,
    keywords: KEYWORDS,
    end: '=>',
    relevance: 0,
    contains: [
      CONSTRUCTOR_MODE,
      OPERATOR_MODE,
      {
        relevance: 0,
        className: 'constructor',
        begin: RE_MODULE_IDENT
      }
    ]
  };

  var MODULE_ACCESS_MODE = {
    className: 'module-access',
    keywords: KEYWORDS,
    returnBegin: true,
    variants: [
      {
        begin: "\\b(" + RE_MODULE_IDENT + "\\.)+" + RE_IDENT
      },
      {
        begin: "\\b(" + RE_MODULE_IDENT + "\\.)+\\(",
        end: "\\)",
        returnBegin: true,
        contains: [
          FUNCTION_BLOCK_MODE,
          {
            begin: '\\(',
            end: '\\)',
            skip: true
          }
        ].concat(MODULE_ACCESS_CONTENTS)
      },
      {
        begin: "\\b(" + RE_MODULE_IDENT + "\\.)+{",
        end: "}"
      }
    ],
    contains: MODULE_ACCESS_CONTENTS
  };

  PARAMS_CONTENTS.push(MODULE_ACCESS_MODE);

  return {
    aliases: ['re'],
    keywords: KEYWORDS,
    illegal: '(:\\-|:=|\\${|\\+=)',
    contains: [
      hljs.COMMENT('/\\*', '\\*/', { illegal: '^(\\#,\\/\\/)' }),
      {
        className: 'character',
        begin: '\'(\\\\[^\']+|[^\'])\'',
        illegal: '\\n',
        relevance: 0
      },
      hljs.QUOTE_STRING_MODE,
      {
        className: 'literal',
        begin: '\\(\\)',
        relevance: 0
      },
      {
        className: 'literal',
        begin: '\\[\\|',
        end: '\\|\\]',
        relevance:  0,
        contains: LIST_CONTENTS_MODES
      },
      {
        className: 'literal',
        begin: '\\[',
        end: '\\]',
        relevance: 0,
        contains: LIST_CONTENTS_MODES
      },
      CONSTRUCTOR_MODE,
      {
        className: 'operator',
        begin: RE_OPERATOR_SPACED,
        illegal: '\\-\\->',
        relevance: 0
      },
      NUMBER_MODE,
      hljs.C_LINE_COMMENT_MODE,
      PATTERN_MATCH_BLOCK_MODE,
      FUNCTION_BLOCK_MODE,
      {
        className: 'module-def',
        begin: "\\bmodule\\s+" + RE_IDENT + "\\s+" + RE_MODULE_IDENT + "\\s+=\\s+{",
        end: "}",
        returnBegin: true,
        keywords: KEYWORDS,
        relevance: 0,
        contains: [
          {
            className: 'module',
            relevance: 0,
            begin: RE_MODULE_IDENT
          },
          {
            begin: '{',
            end: '}',
            skip: true
          }
        ].concat(MODULE_ACCESS_CONTENTS)
      },
      MODULE_ACCESS_MODE
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9yZWFzb25tbC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3JlYXNvbm1sLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICBmdW5jdGlvbiBvclJlVmFsdWVzKG9wcyl7XG4gICAgcmV0dXJuIG9wc1xuICAgIC5tYXAoZnVuY3Rpb24ob3ApIHtcbiAgICAgIHJldHVybiBvcFxuICAgICAgICAuc3BsaXQoJycpXG4gICAgICAgIC5tYXAoZnVuY3Rpb24oY2hhcikge1xuICAgICAgICAgIHJldHVybiAnXFxcXCcgKyBjaGFyO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbignJyk7XG4gICAgfSlcbiAgICAuam9pbignfCcpO1xuICB9XG5cbiAgdmFyIFJFX0lERU5UID0gJ34/W2EteiRfXVswLTlhLXpBLVokX10qJztcbiAgdmFyIFJFX01PRFVMRV9JREVOVCA9ICdgP1tBLVokX11bMC05YS16QS1aJF9dKic7XG5cbiAgdmFyIFJFX1BBUkFNX1RZUEVQQVJBTSA9ICdcXCc/W2EteiRfXVswLTlhLXokX10qJztcbiAgdmFyIFJFX1BBUkFNX1RZUEUgPSAnXFxzKjpcXHMqW2EteiRfXVswLTlhLXokX10qKFxcKFxccyooJyArIFJFX1BBUkFNX1RZUEVQQVJBTSArICdcXHMqKCwnICsgUkVfUEFSQU1fVFlQRVBBUkFNICsgJykqKT9cXHMqXFwpKT8nO1xuICB2YXIgUkVfUEFSQU0gPSBSRV9JREVOVCArICcoJyArIFJFX1BBUkFNX1RZUEUgKyAnKT8oJyArIFJFX1BBUkFNX1RZUEUgKyAnKT8nO1xuICB2YXIgUkVfT1BFUkFUT1IgPSBcIihcIiArIG9yUmVWYWx1ZXMoWyd8fCcsICcmJicsICcrKycsICcqKicsICcrLicsICcqJywgJy8nLCAnKi4nLCAnLy4nLCAnLi4uJywgJ3w+J10pICsgXCJ8PT18PT09KVwiO1xuICB2YXIgUkVfT1BFUkFUT1JfU1BBQ0VEID0gXCJcXFxccytcIiArIFJFX09QRVJBVE9SICsgXCJcXFxccytcIjtcblxuICB2YXIgS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDpcbiAgICAgICdhbmQgYXMgYXNyIGFzc2VydCBiZWdpbiBjbGFzcyBjb25zdHJhaW50IGRvIGRvbmUgZG93bnRvIGVsc2UgZW5kIGV4Y2VwdGlvbiBleHRlcm5hbCcgK1xuICAgICAgJ2ZvciBmdW4gZnVuY3Rpb24gZnVuY3RvciBpZiBpbiBpbmNsdWRlIGluaGVyaXQgaW5pdGlhbGl6ZXInICtcbiAgICAgICdsYW5kIGxhenkgbGV0IGxvciBsc2wgbHNyIGx4b3IgbWF0Y2ggbWV0aG9kIG1vZCBtb2R1bGUgbXV0YWJsZSBuZXcgbm9ucmVjJyArXG4gICAgICAnb2JqZWN0IG9mIG9wZW4gb3IgcHJpdmF0ZSByZWMgc2lnIHN0cnVjdCB0aGVuIHRvIHRyeSB0eXBlIHZhbCB2aXJ0dWFsIHdoZW4gd2hpbGUgd2l0aCcsXG4gICAgYnVpbHRfaW46XG4gICAgICAnYXJyYXkgYm9vbCBieXRlcyBjaGFyIGV4bnw1IGZsb2F0IGludCBpbnQzMiBpbnQ2NCBsaXN0IGxhenlfdHw1IG5hdGl2ZWludHw1IHJlZiBzdHJpbmcgdW5pdCAnLFxuICAgIGxpdGVyYWw6XG4gICAgICAndHJ1ZSBmYWxzZSdcbiAgfTtcblxuICB2YXIgUkVfTlVNQkVSID0gJ1xcXFxiKDBbeFhdW2EtZkEtRjAtOV9dK1tMbG5dP3wnICtcbiAgICAnMFtvT11bMC03X10rW0xsbl0/fCcgK1xuICAgICcwW2JCXVswMV9dK1tMbG5dP3wnICtcbiAgICAnWzAtOV1bMC05X10qKFtMbG5dfChcXFxcLlswLTlfXSopPyhbZUVdWy0rXT9bMC05X10rKT8pPyknO1xuXG4gIHZhciBOVU1CRVJfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICB2YXJpYW50czogW1xuICAgICAge1xuICAgICAgICBiZWdpbjogUkVfTlVNQkVSXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1xcXFwoXFxcXC0nICsgUkVfTlVNQkVSICsgJ1xcXFwpJ1xuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICB2YXIgT1BFUkFUT1JfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdvcGVyYXRvcicsXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGJlZ2luOiBSRV9PUEVSQVRPUlxuICB9O1xuICB2YXIgTElTVF9DT05URU5UU19NT0RFUyA9IFtcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdpZGVudGlmaWVyJyxcbiAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgIGJlZ2luOiBSRV9JREVOVFxuICAgIH0sXG4gICAgT1BFUkFUT1JfTU9ERSxcbiAgICBOVU1CRVJfTU9ERVxuICBdO1xuXG4gIHZhciBNT0RVTEVfQUNDRVNTX0NPTlRFTlRTID0gW1xuICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgT1BFUkFUT1JfTU9ERSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdtb2R1bGUnLFxuICAgICAgYmVnaW46IFwiXFxcXGJcIiArIFJFX01PRFVMRV9JREVOVCwgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICBlbmQ6IFwiXFwuXCIsXG4gICAgICBjb250YWluczogW1xuICAgICAgICB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAnaWRlbnRpZmllcicsXG4gICAgICAgICAgYmVnaW46IFJFX01PRFVMRV9JREVOVCxcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXTtcblxuICB2YXIgUEFSQU1TX0NPTlRFTlRTID0gW1xuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ21vZHVsZScsXG4gICAgICBiZWdpbjogXCJcXFxcYlwiICsgUkVfTU9EVUxFX0lERU5ULCByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgIGVuZDogXCJcXC5cIixcbiAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdpZGVudGlmaWVyJyxcbiAgICAgICAgICBiZWdpbjogUkVfTU9EVUxFX0lERU5ULFxuICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdO1xuXG4gIHZhciBQQVJBTVNfTU9ERSA9IHtcbiAgICBiZWdpbjogUkVfSURFTlQsXG4gICAgZW5kOiAnKCx8XFxcXG58XFxcXCkpJyxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIE9QRVJBVE9SX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3R5cGluZycsXG4gICAgICAgIGJlZ2luOiAnOicsXG4gICAgICAgIGVuZDogJygsfFxcXFxuKScsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBQQVJBTVNfQ09OVEVOVFNcbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgdmFyIEZVTkNUSU9OX0JMT0NLX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxccyhcXFxcKFxcXFwuPy4qP1xcXFwpfCcgKyBSRV9JREVOVCArICcpXFxcXHMqPT4nLFxuICAgICAgICBlbmQ6ICdcXFxccyo9PicsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBiZWdpbjogUkVfSURFTlRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJlZ2luOiBSRV9QQVJBTVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmVnaW46IC9cXChcXHMqXFwpLyxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcc1xcXFwoXFxcXC4/W147XFxcXHxdKlxcXFwpXFxcXHMqPT4nLFxuICAgICAgICBlbmQ6ICdcXFxccz0+JyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAgUEFSQU1TX01PREVcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXFxcXChcXFxcLlxcXFxzJyArIFJFX0lERU5UICsgJ1xcXFwpXFxcXHMqPT4nXG4gICAgICB9XG4gICAgXVxuICB9O1xuICBNT0RVTEVfQUNDRVNTX0NPTlRFTlRTLnB1c2goRlVOQ1RJT05fQkxPQ0tfTU9ERSk7XG5cbiAgdmFyIENPTlNUUlVDVE9SX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnY29uc3RydWN0b3InLFxuICAgIGJlZ2luOiBSRV9NT0RVTEVfSURFTlQgKyAnXFxcXCgnLFxuICAgIGVuZDogJ1xcXFwpJyxcbiAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIE9QRVJBVE9SX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICAgIGJlZ2luOiAnXFxcXGInICsgUkVfSURFTlRcbiAgICAgIH1cbiAgICBdXG4gIH07XG5cbiAgdmFyIFBBVFRFUk5fTUFUQ0hfQkxPQ0tfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXR0ZXJuLW1hdGNoJyxcbiAgICBiZWdpbjogJ1xcXFx8JyxcbiAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgZW5kOiAnPT4nLFxuICAgIHJlbGV2YW5jZTogMCxcbiAgICBjb250YWluczogW1xuICAgICAgQ09OU1RSVUNUT1JfTU9ERSxcbiAgICAgIE9QRVJBVE9SX01PREUsXG4gICAgICB7XG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgY2xhc3NOYW1lOiAnY29uc3RydWN0b3InLFxuICAgICAgICBiZWdpbjogUkVfTU9EVUxFX0lERU5UXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHZhciBNT0RVTEVfQUNDRVNTX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnbW9kdWxlLWFjY2VzcycsXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBcIlxcXFxiKFwiICsgUkVfTU9EVUxFX0lERU5UICsgXCJcXFxcLikrXCIgKyBSRV9JREVOVFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IFwiXFxcXGIoXCIgKyBSRV9NT0RVTEVfSURFTlQgKyBcIlxcXFwuKStcXFxcKFwiLFxuICAgICAgICBlbmQ6IFwiXFxcXClcIixcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgRlVOQ1RJT05fQkxPQ0tfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ1xcXFwoJyxcbiAgICAgICAgICAgIGVuZDogJ1xcXFwpJyxcbiAgICAgICAgICAgIHNraXA6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF0uY29uY2F0KE1PRFVMRV9BQ0NFU1NfQ09OVEVOVFMpXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogXCJcXFxcYihcIiArIFJFX01PRFVMRV9JREVOVCArIFwiXFxcXC4pK3tcIixcbiAgICAgICAgZW5kOiBcIn1cIlxuICAgICAgfVxuICAgIF0sXG4gICAgY29udGFpbnM6IE1PRFVMRV9BQ0NFU1NfQ09OVEVOVFNcbiAgfTtcblxuICBQQVJBTVNfQ09OVEVOVFMucHVzaChNT0RVTEVfQUNDRVNTX01PREUpO1xuXG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydyZSddLFxuICAgIGtleXdvcmRzOiBLRVlXT1JEUyxcbiAgICBpbGxlZ2FsOiAnKDpcXFxcLXw6PXxcXFxcJHt8XFxcXCs9KScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ09NTUVOVCgnL1xcXFwqJywgJ1xcXFwqLycsIHsgaWxsZWdhbDogJ14oXFxcXCMsXFxcXC9cXFxcLyknIH0pLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjaGFyYWN0ZXInLFxuICAgICAgICBiZWdpbjogJ1xcJyhcXFxcXFxcXFteXFwnXSt8W15cXCddKVxcJycsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIGhsanMuUVVPVEVfU1RSSU5HX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2xpdGVyYWwnLFxuICAgICAgICBiZWdpbjogJ1xcXFwoXFxcXCknLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2xpdGVyYWwnLFxuICAgICAgICBiZWdpbjogJ1xcXFxbXFxcXHwnLFxuICAgICAgICBlbmQ6ICdcXFxcfFxcXFxdJyxcbiAgICAgICAgcmVsZXZhbmNlOiAgMCxcbiAgICAgICAgY29udGFpbnM6IExJU1RfQ09OVEVOVFNfTU9ERVNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2xpdGVyYWwnLFxuICAgICAgICBiZWdpbjogJ1xcXFxbJyxcbiAgICAgICAgZW5kOiAnXFxcXF0nLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBMSVNUX0NPTlRFTlRTX01PREVTXG4gICAgICB9LFxuICAgICAgQ09OU1RSVUNUT1JfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnb3BlcmF0b3InLFxuICAgICAgICBiZWdpbjogUkVfT1BFUkFUT1JfU1BBQ0VELFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXC1cXFxcLT4nLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICBOVU1CRVJfTU9ERSxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIFBBVFRFUk5fTUFUQ0hfQkxPQ0tfTU9ERSxcbiAgICAgIEZVTkNUSU9OX0JMT0NLX01PREUsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21vZHVsZS1kZWYnLFxuICAgICAgICBiZWdpbjogXCJcXFxcYm1vZHVsZVxcXFxzK1wiICsgUkVfSURFTlQgKyBcIlxcXFxzK1wiICsgUkVfTU9EVUxFX0lERU5UICsgXCJcXFxccys9XFxcXHMre1wiLFxuICAgICAgICBlbmQ6IFwifVwiLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbW9kdWxlJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGJlZ2luOiBSRV9NT0RVTEVfSURFTlRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAneycsXG4gICAgICAgICAgICBlbmQ6ICd9JyxcbiAgICAgICAgICAgIHNraXA6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF0uY29uY2F0KE1PRFVMRV9BQ0NFU1NfQ09OVEVOVFMpXG4gICAgICB9LFxuICAgICAgTU9EVUxFX0FDQ0VTU19NT0RFXG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==