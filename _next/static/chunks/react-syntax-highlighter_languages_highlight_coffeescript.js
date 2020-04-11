(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_coffeescript"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/coffeescript.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/coffeescript.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var KEYWORDS = {
    keyword:
      // JS keywords
      'in if for while finally new do return else break catch instanceof throw try this ' +
      'switch continue typeof delete debugger super yield import export from as default await ' +
      // Coffee keywords
      'then unless until loop of by when and or is isnt not',
    literal:
      // JS literals
      'true false null undefined ' +
      // Coffee literals
      'yes no on off',
    built_in:
      'npm require console print module global window document'
  };
  var JS_IDENT_RE = '[A-Za-z$_][0-9A-Za-z$_]*';
  var SUBST = {
    className: 'subst',
    begin: /#\{/, end: /}/,
    keywords: KEYWORDS
  };
  var EXPRESSIONS = [
    hljs.BINARY_NUMBER_MODE,
    hljs.inherit(hljs.C_NUMBER_MODE, {starts: {end: '(\\s*/)?', relevance: 0}}), // a number tries to eat the following slash to prevent treating it as a regexp
    {
      className: 'string',
      variants: [
        {
          begin: /'''/, end: /'''/,
          contains: [hljs.BACKSLASH_ESCAPE]
        },
        {
          begin: /'/, end: /'/,
          contains: [hljs.BACKSLASH_ESCAPE]
        },
        {
          begin: /"""/, end: /"""/,
          contains: [hljs.BACKSLASH_ESCAPE, SUBST]
        },
        {
          begin: /"/, end: /"/,
          contains: [hljs.BACKSLASH_ESCAPE, SUBST]
        }
      ]
    },
    {
      className: 'regexp',
      variants: [
        {
          begin: '///', end: '///',
          contains: [SUBST, hljs.HASH_COMMENT_MODE]
        },
        {
          begin: '//[gim]*',
          relevance: 0
        },
        {
          // regex can't start with space to parse x / 2 / 3 as two divisions
          // regex can't start with *, and it supports an "illegal" in the main mode
          begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
        }
      ]
    },
    {
      begin: '@' + JS_IDENT_RE // relevance booster
    },
    {
      subLanguage: 'javascript',
      excludeBegin: true, excludeEnd: true,
      variants: [
        {
          begin: '```', end: '```',
        },
        {
          begin: '`', end: '`',
        }
      ]
    }
  ];
  SUBST.contains = EXPRESSIONS;

  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: JS_IDENT_RE});
  var PARAMS_RE = '(\\(.*\\))?\\s*\\B[-=]>';
  var PARAMS = {
    className: 'params',
    begin: '\\([^\\(]', returnBegin: true,
    /* We need another contained nameless mode to not have every nested
    pair of parens to be called "params" */
    contains: [{
      begin: /\(/, end: /\)/,
      keywords: KEYWORDS,
      contains: ['self'].concat(EXPRESSIONS)
    }]
  };

  return {
    aliases: ['coffee', 'cson', 'iced'],
    keywords: KEYWORDS,
    illegal: /\/\*/,
    contains: EXPRESSIONS.concat([
      hljs.COMMENT('###', '###'),
      hljs.HASH_COMMENT_MODE,
      {
        className: 'function',
        begin: '^\\s*' + JS_IDENT_RE + '\\s*=\\s*' + PARAMS_RE, end: '[-=]>',
        returnBegin: true,
        contains: [TITLE, PARAMS]
      },
      {
        // anonymous function start
        begin: /[:\(,=]\s*/,
        relevance: 0,
        contains: [
          {
            className: 'function',
            begin: PARAMS_RE, end: '[-=]>',
            returnBegin: true,
            contains: [PARAMS]
          }
        ]
      },
      {
        className: 'class',
        beginKeywords: 'class',
        end: '$',
        illegal: /[:="\[\]]/,
        contains: [
          {
            beginKeywords: 'extends',
            endsWithParent: true,
            illegal: /[:="\[\]]/,
            contains: [TITLE]
          },
          TITLE
        ]
      },
      {
        begin: JS_IDENT_RE + ':', end: ':',
        returnBegin: true, returnEnd: true,
        relevance: 0
      }
    ])
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9jb2ZmZWVzY3JpcHQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9jb2ZmZWVzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBLRVlXT1JEUyA9IHtcbiAgICBrZXl3b3JkOlxuICAgICAgLy8gSlMga2V5d29yZHNcbiAgICAgICdpbiBpZiBmb3Igd2hpbGUgZmluYWxseSBuZXcgZG8gcmV0dXJuIGVsc2UgYnJlYWsgY2F0Y2ggaW5zdGFuY2VvZiB0aHJvdyB0cnkgdGhpcyAnICtcbiAgICAgICdzd2l0Y2ggY29udGludWUgdHlwZW9mIGRlbGV0ZSBkZWJ1Z2dlciBzdXBlciB5aWVsZCBpbXBvcnQgZXhwb3J0IGZyb20gYXMgZGVmYXVsdCBhd2FpdCAnICtcbiAgICAgIC8vIENvZmZlZSBrZXl3b3Jkc1xuICAgICAgJ3RoZW4gdW5sZXNzIHVudGlsIGxvb3Agb2YgYnkgd2hlbiBhbmQgb3IgaXMgaXNudCBub3QnLFxuICAgIGxpdGVyYWw6XG4gICAgICAvLyBKUyBsaXRlcmFsc1xuICAgICAgJ3RydWUgZmFsc2UgbnVsbCB1bmRlZmluZWQgJyArXG4gICAgICAvLyBDb2ZmZWUgbGl0ZXJhbHNcbiAgICAgICd5ZXMgbm8gb24gb2ZmJyxcbiAgICBidWlsdF9pbjpcbiAgICAgICducG0gcmVxdWlyZSBjb25zb2xlIHByaW50IG1vZHVsZSBnbG9iYWwgd2luZG93IGRvY3VtZW50J1xuICB9O1xuICB2YXIgSlNfSURFTlRfUkUgPSAnW0EtWmEteiRfXVswLTlBLVphLXokX10qJztcbiAgdmFyIFNVQlNUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICBiZWdpbjogLyNcXHsvLCBlbmQ6IC99LyxcbiAgICBrZXl3b3JkczogS0VZV09SRFNcbiAgfTtcbiAgdmFyIEVYUFJFU1NJT05TID0gW1xuICAgIGhsanMuQklOQVJZX05VTUJFUl9NT0RFLFxuICAgIGhsanMuaW5oZXJpdChobGpzLkNfTlVNQkVSX01PREUsIHtzdGFydHM6IHtlbmQ6ICcoXFxcXHMqLyk/JywgcmVsZXZhbmNlOiAwfX0pLCAvLyBhIG51bWJlciB0cmllcyB0byBlYXQgdGhlIGZvbGxvd2luZyBzbGFzaCB0byBwcmV2ZW50IHRyZWF0aW5nIGl0IGFzIGEgcmVnZXhwXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogLycnJy8sIGVuZDogLycnJy8sXG4gICAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogLycvLCBlbmQ6IC8nLyxcbiAgICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAvXCJcIlwiLywgZW5kOiAvXCJcIlwiLyxcbiAgICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRSwgU1VCU1RdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogL1wiLywgZW5kOiAvXCIvLFxuICAgICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFLCBTVUJTVF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAncmVnZXhwJyxcbiAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogJy8vLycsIGVuZDogJy8vLycsXG4gICAgICAgICAgY29udGFpbnM6IFtTVUJTVCwgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnLy9bZ2ltXSonLFxuICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLy8gcmVnZXggY2FuJ3Qgc3RhcnQgd2l0aCBzcGFjZSB0byBwYXJzZSB4IC8gMiAvIDMgYXMgdHdvIGRpdmlzaW9uc1xuICAgICAgICAgIC8vIHJlZ2V4IGNhbid0IHN0YXJ0IHdpdGggKiwgYW5kIGl0IHN1cHBvcnRzIGFuIFwiaWxsZWdhbFwiIGluIHRoZSBtYWluIG1vZGVcbiAgICAgICAgICBiZWdpbjogL1xcLyg/IVsgKl0pKFxcXFxcXC98LikqP1xcL1tnaW1dKig/PVxcV3wkKS9cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgYmVnaW46ICdAJyArIEpTX0lERU5UX1JFIC8vIHJlbGV2YW5jZSBib29zdGVyXG4gICAgfSxcbiAgICB7XG4gICAgICBzdWJMYW5ndWFnZTogJ2phdmFzY3JpcHQnLFxuICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnYGBgJywgZW5kOiAnYGBgJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnYCcsIGVuZDogJ2AnLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdO1xuICBTVUJTVC5jb250YWlucyA9IEVYUFJFU1NJT05TO1xuXG4gIHZhciBUSVRMRSA9IGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtiZWdpbjogSlNfSURFTlRfUkV9KTtcbiAgdmFyIFBBUkFNU19SRSA9ICcoXFxcXCguKlxcXFwpKT9cXFxccypcXFxcQlstPV0+JztcbiAgdmFyIFBBUkFNUyA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAnXFxcXChbXlxcXFwoXScsIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIC8qIFdlIG5lZWQgYW5vdGhlciBjb250YWluZWQgbmFtZWxlc3MgbW9kZSB0byBub3QgaGF2ZSBldmVyeSBuZXN0ZWRcbiAgICBwYWlyIG9mIHBhcmVucyB0byBiZSBjYWxsZWQgXCJwYXJhbXNcIiAqL1xuICAgIGNvbnRhaW5zOiBbe1xuICAgICAgYmVnaW46IC9cXCgvLCBlbmQ6IC9cXCkvLFxuICAgICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgICAgY29udGFpbnM6IFsnc2VsZiddLmNvbmNhdChFWFBSRVNTSU9OUylcbiAgICB9XVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydjb2ZmZWUnLCAnY3NvbicsICdpY2VkJ10sXG4gICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgIGlsbGVnYWw6IC9cXC9cXCovLFxuICAgIGNvbnRhaW5zOiBFWFBSRVNTSU9OUy5jb25jYXQoW1xuICAgICAgaGxqcy5DT01NRU5UKCcjIyMnLCAnIyMjJyksXG4gICAgICBobGpzLkhBU0hfQ09NTUVOVF9NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luOiAnXlxcXFxzKicgKyBKU19JREVOVF9SRSArICdcXFxccyo9XFxcXHMqJyArIFBBUkFNU19SRSwgZW5kOiAnWy09XT4nLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtUSVRMRSwgUEFSQU1TXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gYW5vbnltb3VzIGZ1bmN0aW9uIHN0YXJ0XG4gICAgICAgIGJlZ2luOiAvWzpcXCgsPV1cXHMqLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgICAgIGJlZ2luOiBQQVJBTVNfUkUsIGVuZDogJ1stPV0+JyxcbiAgICAgICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgY29udGFpbnM6IFtQQVJBTVNdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcycsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICBpbGxlZ2FsOiAvWzo9XCJcXFtcXF1dLyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnZXh0ZW5kcycsXG4gICAgICAgICAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgIGlsbGVnYWw6IC9bOj1cIlxcW1xcXV0vLFxuICAgICAgICAgICAgY29udGFpbnM6IFtUSVRMRV1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFRJVExFXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiBKU19JREVOVF9SRSArICc6JywgZW5kOiAnOicsXG4gICAgICAgIHJldHVybkJlZ2luOiB0cnVlLCByZXR1cm5FbmQ6IHRydWUsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF0pXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==