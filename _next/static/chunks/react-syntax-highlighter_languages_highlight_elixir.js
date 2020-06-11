(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_elixir"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/elixir.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/elixir.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var ELIXIR_IDENT_RE = '[a-zA-Z_][a-zA-Z0-9_.]*(\\!|\\?)?';
  var ELIXIR_METHOD_RE = '[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?';
  var ELIXIR_KEYWORDS =
    'and false then defined module in return redo retry end for true self when ' +
    'next until do begin unless nil break not case cond alias while ensure or ' +
    'include use alias fn quote require import with|0';
  var SUBST = {
    className: 'subst',
    begin: '#\\{', end: '}',
    lexemes: ELIXIR_IDENT_RE,
    keywords: ELIXIR_KEYWORDS
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
    variants: [
      {
        begin: /'/, end: /'/
      },
      {
        begin: /"/, end: /"/
      }
    ]
  };
  var FUNCTION = {
    className: 'function',
    beginKeywords: 'def defp defmacro', end: /\B\b/, // the mode is ended by the title
    contains: [
      hljs.inherit(hljs.TITLE_MODE, {
        begin: ELIXIR_IDENT_RE,
        endsParent: true
      })
    ]
  };
  var CLASS = hljs.inherit(FUNCTION, {
    className: 'class',
    beginKeywords: 'defimpl defmodule defprotocol defrecord', end: /\bdo\b|$|;/
  });
  var ELIXIR_DEFAULT_CONTAINS = [
    STRING,
    hljs.HASH_COMMENT_MODE,
    CLASS,
    FUNCTION,
    {
      begin: '::'
    },
    {
      className: 'symbol',
      begin: ':(?![\\s:])',
      contains: [STRING, {begin: ELIXIR_METHOD_RE}],
      relevance: 0
    },
    {
      className: 'symbol',
      begin: ELIXIR_IDENT_RE + ':(?!:)',
      relevance: 0
    },
    {
      className: 'number',
      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
      relevance: 0
    },
    {
      className: 'variable',
      begin: '(\\$\\W)|((\\$|\\@\\@?)(\\w+))'
    },
    {
      begin: '->'
    },
    { // regexp container
      begin: '(' + hljs.RE_STARTERS_RE + ')\\s*',
      contains: [
        hljs.HASH_COMMENT_MODE,
        {
          className: 'regexp',
          illegal: '\\n',
          contains: [hljs.BACKSLASH_ESCAPE, SUBST],
          variants: [
            {
              begin: '/', end: '/[a-z]*'
            },
            {
              begin: '%r\\[', end: '\\][a-z]*'
            }
          ]
        }
      ],
      relevance: 0
    }
  ];
  SUBST.contains = ELIXIR_DEFAULT_CONTAINS;

  return {
    lexemes: ELIXIR_IDENT_RE,
    keywords: ELIXIR_KEYWORDS,
    contains: ELIXIR_DEFAULT_CONTAINS
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9lbGl4aXIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9lbGl4aXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBFTElYSVJfSURFTlRfUkUgPSAnW2EtekEtWl9dW2EtekEtWjAtOV8uXSooXFxcXCF8XFxcXD8pPyc7XG4gIHZhciBFTElYSVJfTUVUSE9EX1JFID0gJ1thLXpBLVpfXVxcXFx3KlshPz1dP3xbLSt+XVxcXFxAfDw8fD4+fD1+fD09PT98PD0+fFs8Pl09P3xcXFxcKlxcXFwqfFstLyslXiYqfmB8XXxcXFxcW1xcXFxdPT8nO1xuICB2YXIgRUxJWElSX0tFWVdPUkRTID1cbiAgICAnYW5kIGZhbHNlIHRoZW4gZGVmaW5lZCBtb2R1bGUgaW4gcmV0dXJuIHJlZG8gcmV0cnkgZW5kIGZvciB0cnVlIHNlbGYgd2hlbiAnICtcbiAgICAnbmV4dCB1bnRpbCBkbyBiZWdpbiB1bmxlc3MgbmlsIGJyZWFrIG5vdCBjYXNlIGNvbmQgYWxpYXMgd2hpbGUgZW5zdXJlIG9yICcgK1xuICAgICdpbmNsdWRlIHVzZSBhbGlhcyBmbiBxdW90ZSByZXF1aXJlIGltcG9ydCB3aXRofDAnO1xuICB2YXIgU1VCU1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIGJlZ2luOiAnI1xcXFx7JywgZW5kOiAnfScsXG4gICAgbGV4ZW1lczogRUxJWElSX0lERU5UX1JFLFxuICAgIGtleXdvcmRzOiBFTElYSVJfS0VZV09SRFNcbiAgfTtcbiAgdmFyIFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFLCBTVUJTVF0sXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC8nLywgZW5kOiAvJy9cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXCIvLCBlbmQ6IC9cIi9cbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIHZhciBGVU5DVElPTiA9IHtcbiAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgYmVnaW5LZXl3b3JkczogJ2RlZiBkZWZwIGRlZm1hY3JvJywgZW5kOiAvXFxCXFxiLywgLy8gdGhlIG1vZGUgaXMgZW5kZWQgYnkgdGhlIHRpdGxlXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtcbiAgICAgICAgYmVnaW46IEVMSVhJUl9JREVOVF9SRSxcbiAgICAgICAgZW5kc1BhcmVudDogdHJ1ZVxuICAgICAgfSlcbiAgICBdXG4gIH07XG4gIHZhciBDTEFTUyA9IGhsanMuaW5oZXJpdChGVU5DVElPTiwge1xuICAgIGNsYXNzTmFtZTogJ2NsYXNzJyxcbiAgICBiZWdpbktleXdvcmRzOiAnZGVmaW1wbCBkZWZtb2R1bGUgZGVmcHJvdG9jb2wgZGVmcmVjb3JkJywgZW5kOiAvXFxiZG9cXGJ8JHw7L1xuICB9KTtcbiAgdmFyIEVMSVhJUl9ERUZBVUxUX0NPTlRBSU5TID0gW1xuICAgIFNUUklORyxcbiAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgIENMQVNTLFxuICAgIEZVTkNUSU9OLFxuICAgIHtcbiAgICAgIGJlZ2luOiAnOjonXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgYmVnaW46ICc6KD8hW1xcXFxzOl0pJyxcbiAgICAgIGNvbnRhaW5zOiBbU1RSSU5HLCB7YmVnaW46IEVMSVhJUl9NRVRIT0RfUkV9XSxcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgIGJlZ2luOiBFTElYSVJfSURFTlRfUkUgKyAnOig/ITopJyxcbiAgICAgIHJlbGV2YW5jZTogMFxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgIGJlZ2luOiAnKFxcXFxiMFswLTdfXSspfChcXFxcYjB4WzAtOWEtZkEtRl9dKyl8KFxcXFxiWzEtOV1bMC05X10qKFxcXFwuWzAtOV9dKyk/KXxbMF9dXFxcXGInLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgICBiZWdpbjogJyhcXFxcJFxcXFxXKXwoKFxcXFwkfFxcXFxAXFxcXEA/KShcXFxcdyspKSdcbiAgICB9LFxuICAgIHtcbiAgICAgIGJlZ2luOiAnLT4nXG4gICAgfSxcbiAgICB7IC8vIHJlZ2V4cCBjb250YWluZXJcbiAgICAgIGJlZ2luOiAnKCcgKyBobGpzLlJFX1NUQVJURVJTX1JFICsgJylcXFxccyonLFxuICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgICAge1xuICAgICAgICAgIGNsYXNzTmFtZTogJ3JlZ2V4cCcsXG4gICAgICAgICAgaWxsZWdhbDogJ1xcXFxuJyxcbiAgICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRSwgU1VCU1RdLFxuICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGJlZ2luOiAnLycsIGVuZDogJy9bYS16XSonXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBiZWdpbjogJyVyXFxcXFsnLCBlbmQ6ICdcXFxcXVthLXpdKidcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9XG4gIF07XG4gIFNVQlNULmNvbnRhaW5zID0gRUxJWElSX0RFRkFVTFRfQ09OVEFJTlM7XG5cbiAgcmV0dXJuIHtcbiAgICBsZXhlbWVzOiBFTElYSVJfSURFTlRfUkUsXG4gICAga2V5d29yZHM6IEVMSVhJUl9LRVlXT1JEUyxcbiAgICBjb250YWluczogRUxJWElSX0RFRkFVTFRfQ09OVEFJTlNcbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==