(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_livescript"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/livescript.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/livescript.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var KEYWORDS = {
    keyword:
      // JS keywords
      'in if for while finally new do return else break catch instanceof throw try this ' +
      'switch continue typeof delete debugger case default function var with ' +
      // LiveScript keywords
      'then unless until loop of by when and or is isnt not it that otherwise from to til fallthrough super ' +
      'case default function var void const let enum export import native ' +
      '__hasProp __extends __slice __bind __indexOf',
    literal:
      // JS literals
      'true false null undefined ' +
      // LiveScript literals
      'yes no on off it that void',
    built_in:
      'npm require console print module global window document'
  };
  var JS_IDENT_RE = '[A-Za-z$_](?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*';
  var TITLE = hljs.inherit(hljs.TITLE_MODE, {begin: JS_IDENT_RE});
  var SUBST = {
    className: 'subst',
    begin: /#\{/, end: /}/,
    keywords: KEYWORDS
  };
  var SUBST_SIMPLE = {
    className: 'subst',
    begin: /#[A-Za-z$_]/, end: /(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,
    keywords: KEYWORDS
  };
  var EXPRESSIONS = [
    hljs.BINARY_NUMBER_MODE,
    {
      className: 'number',
      begin: '(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)',
      relevance: 0,
      starts: {end: '(\\s*/)?', relevance: 0} // a number tries to eat the following slash to prevent treating it as a regexp
    },
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
          contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE]
        },
        {
          begin: /"/, end: /"/,
          contains: [hljs.BACKSLASH_ESCAPE, SUBST, SUBST_SIMPLE]
        },
        {
          begin: /\\/, end: /(\s|$)/,
          excludeEnd: true
        }
      ]
    },
    {
      className: 'regexp',
      variants: [
        {
          begin: '//', end: '//[gim]*',
          contains: [SUBST, hljs.HASH_COMMENT_MODE]
        },
        {
          // regex can't start with space to parse x / 2 / 3 as two divisions
          // regex can't start with *, and it supports an "illegal" in the main mode
          begin: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/
        }
      ]
    },
    {
      begin: '@' + JS_IDENT_RE
    },
    {
      begin: '``', end: '``',
      excludeBegin: true, excludeEnd: true,
      subLanguage: 'javascript'
    }
  ];
  SUBST.contains = EXPRESSIONS;

  var PARAMS = {
    className: 'params',
    begin: '\\(', returnBegin: true,
    /* We need another contained nameless mode to not have every nested
    pair of parens to be called "params" */
    contains: [
      {
        begin: /\(/, end: /\)/,
        keywords: KEYWORDS,
        contains: ['self'].concat(EXPRESSIONS)
      }
    ]
  };

  return {
    aliases: ['ls'],
    keywords: KEYWORDS,
    illegal: /\/\*/,
    contains: EXPRESSIONS.concat([
      hljs.COMMENT('\\/\\*', '\\*\\/'),
      hljs.HASH_COMMENT_MODE,
      {
        className: 'function',
        contains: [TITLE, PARAMS],
        returnBegin: true,
        variants: [
          {
            begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?', end: '\\->\\*?'
          },
          {
            begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?', end: '[-~]{1,2}>\\*?'
          },
          {
            begin: '(' + JS_IDENT_RE + '\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?', end: '!?[-~]{1,2}>\\*?'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9saXZlc2NyaXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbGl2ZXNjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIEtFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6XG4gICAgICAvLyBKUyBrZXl3b3Jkc1xuICAgICAgJ2luIGlmIGZvciB3aGlsZSBmaW5hbGx5IG5ldyBkbyByZXR1cm4gZWxzZSBicmVhayBjYXRjaCBpbnN0YW5jZW9mIHRocm93IHRyeSB0aGlzICcgK1xuICAgICAgJ3N3aXRjaCBjb250aW51ZSB0eXBlb2YgZGVsZXRlIGRlYnVnZ2VyIGNhc2UgZGVmYXVsdCBmdW5jdGlvbiB2YXIgd2l0aCAnICtcbiAgICAgIC8vIExpdmVTY3JpcHQga2V5d29yZHNcbiAgICAgICd0aGVuIHVubGVzcyB1bnRpbCBsb29wIG9mIGJ5IHdoZW4gYW5kIG9yIGlzIGlzbnQgbm90IGl0IHRoYXQgb3RoZXJ3aXNlIGZyb20gdG8gdGlsIGZhbGx0aHJvdWdoIHN1cGVyICcgK1xuICAgICAgJ2Nhc2UgZGVmYXVsdCBmdW5jdGlvbiB2YXIgdm9pZCBjb25zdCBsZXQgZW51bSBleHBvcnQgaW1wb3J0IG5hdGl2ZSAnICtcbiAgICAgICdfX2hhc1Byb3AgX19leHRlbmRzIF9fc2xpY2UgX19iaW5kIF9faW5kZXhPZicsXG4gICAgbGl0ZXJhbDpcbiAgICAgIC8vIEpTIGxpdGVyYWxzXG4gICAgICAndHJ1ZSBmYWxzZSBudWxsIHVuZGVmaW5lZCAnICtcbiAgICAgIC8vIExpdmVTY3JpcHQgbGl0ZXJhbHNcbiAgICAgICd5ZXMgbm8gb24gb2ZmIGl0IHRoYXQgdm9pZCcsXG4gICAgYnVpbHRfaW46XG4gICAgICAnbnBtIHJlcXVpcmUgY29uc29sZSBwcmludCBtb2R1bGUgZ2xvYmFsIHdpbmRvdyBkb2N1bWVudCdcbiAgfTtcbiAgdmFyIEpTX0lERU5UX1JFID0gJ1tBLVphLXokX10oPzpcXC1bMC05QS1aYS16JF9dfFswLTlBLVphLXokX10pKic7XG4gIHZhciBUSVRMRSA9IGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtiZWdpbjogSlNfSURFTlRfUkV9KTtcbiAgdmFyIFNVQlNUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICBiZWdpbjogLyNcXHsvLCBlbmQ6IC99LyxcbiAgICBrZXl3b3JkczogS0VZV09SRFNcbiAgfTtcbiAgdmFyIFNVQlNUX1NJTVBMRSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgYmVnaW46IC8jW0EtWmEteiRfXS8sIGVuZDogLyg/OlxcLVswLTlBLVphLXokX118WzAtOUEtWmEteiRfXSkqLyxcbiAgICBrZXl3b3JkczogS0VZV09SRFNcbiAgfTtcbiAgdmFyIEVYUFJFU1NJT05TID0gW1xuICAgIGhsanMuQklOQVJZX05VTUJFUl9NT0RFLFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICBiZWdpbjogJyhcXFxcYjBbeFhdW2EtZkEtRjAtOV9dKyl8KFxcXFxiXFxcXGQoXFxcXGR8X1xcXFxkKSooXFxcXC4oXFxcXGQoXFxcXGR8X1xcXFxkKSopPyk/KF8qW2VFXShbLStdXFxcXGQoX1xcXFxkfFxcXFxkKSopPyk/W19hLXpdKiknLFxuICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgc3RhcnRzOiB7ZW5kOiAnKFxcXFxzKi8pPycsIHJlbGV2YW5jZTogMH0gLy8gYSBudW1iZXIgdHJpZXMgdG8gZWF0IHRoZSBmb2xsb3dpbmcgc2xhc2ggdG8gcHJldmVudCB0cmVhdGluZyBpdCBhcyBhIHJlZ2V4cFxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogLycnJy8sIGVuZDogLycnJy8sXG4gICAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogLycvLCBlbmQ6IC8nLyxcbiAgICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAvXCJcIlwiLywgZW5kOiAvXCJcIlwiLyxcbiAgICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRSwgU1VCU1QsIFNVQlNUX1NJTVBMRV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAvXCIvLCBlbmQ6IC9cIi8sXG4gICAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEUsIFNVQlNULCBTVUJTVF9TSU1QTEVdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogL1xcXFwvLCBlbmQ6IC8oXFxzfCQpLyxcbiAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ3JlZ2V4cCcsXG4gICAgICB2YXJpYW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICcvLycsIGVuZDogJy8vW2dpbV0qJyxcbiAgICAgICAgICBjb250YWluczogW1NVQlNULCBobGpzLkhBU0hfQ09NTUVOVF9NT0RFXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLy8gcmVnZXggY2FuJ3Qgc3RhcnQgd2l0aCBzcGFjZSB0byBwYXJzZSB4IC8gMiAvIDMgYXMgdHdvIGRpdmlzaW9uc1xuICAgICAgICAgIC8vIHJlZ2V4IGNhbid0IHN0YXJ0IHdpdGggKiwgYW5kIGl0IHN1cHBvcnRzIGFuIFwiaWxsZWdhbFwiIGluIHRoZSBtYWluIG1vZGVcbiAgICAgICAgICBiZWdpbjogL1xcLyg/IVsgKl0pKFxcXFxcXC98LikqP1xcL1tnaW1dKig/PVxcV3wkKS9cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgYmVnaW46ICdAJyArIEpTX0lERU5UX1JFXG4gICAgfSxcbiAgICB7XG4gICAgICBiZWdpbjogJ2BgJywgZW5kOiAnYGAnLFxuICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgc3ViTGFuZ3VhZ2U6ICdqYXZhc2NyaXB0J1xuICAgIH1cbiAgXTtcbiAgU1VCU1QuY29udGFpbnMgPSBFWFBSRVNTSU9OUztcblxuICB2YXIgUEFSQU1TID0ge1xuICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgYmVnaW46ICdcXFxcKCcsIHJldHVybkJlZ2luOiB0cnVlLFxuICAgIC8qIFdlIG5lZWQgYW5vdGhlciBjb250YWluZWQgbmFtZWxlc3MgbW9kZSB0byBub3QgaGF2ZSBldmVyeSBuZXN0ZWRcbiAgICBwYWlyIG9mIHBhcmVucyB0byBiZSBjYWxsZWQgXCJwYXJhbXNcIiAqL1xuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLyxcbiAgICAgICAga2V5d29yZHM6IEtFWVdPUkRTLFxuICAgICAgICBjb250YWluczogWydzZWxmJ10uY29uY2F0KEVYUFJFU1NJT05TKVxuICAgICAgfVxuICAgIF1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsnbHMnXSxcbiAgICBrZXl3b3JkczogS0VZV09SRFMsXG4gICAgaWxsZWdhbDogL1xcL1xcKi8sXG4gICAgY29udGFpbnM6IEVYUFJFU1NJT05TLmNvbmNhdChbXG4gICAgICBobGpzLkNPTU1FTlQoJ1xcXFwvXFxcXConLCAnXFxcXCpcXFxcLycpLFxuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBjb250YWluczogW1RJVExFLCBQQVJBTVNdLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJygnICsgSlNfSURFTlRfUkUgKyAnXFxcXHMqKD86PXw6PSlcXFxccyopPyhcXFxcKC4qXFxcXCkpP1xcXFxzKlxcXFxCXFxcXC0+XFxcXCo/JywgZW5kOiAnXFxcXC0+XFxcXCo/J1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICcoJyArIEpTX0lERU5UX1JFICsgJ1xcXFxzKig/Oj18Oj0pXFxcXHMqKT8hPyhcXFxcKC4qXFxcXCkpP1xcXFxzKlxcXFxCWy1+XXsxLDJ9PlxcXFwqPycsIGVuZDogJ1stfl17MSwyfT5cXFxcKj8nXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJygnICsgSlNfSURFTlRfUkUgKyAnXFxcXHMqKD86PXw6PSlcXFxccyopPyhcXFxcKC4qXFxcXCkpP1xcXFxzKlxcXFxCIT9bLX5dezEsMn0+XFxcXCo/JywgZW5kOiAnIT9bLX5dezEsMn0+XFxcXCo/J1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnY2xhc3MnLFxuICAgICAgICBlbmQ6ICckJyxcbiAgICAgICAgaWxsZWdhbDogL1s6PVwiXFxbXFxdXS8sXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ2V4dGVuZHMnLFxuICAgICAgICAgICAgZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICBpbGxlZ2FsOiAvWzo9XCJcXFtcXF1dLyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbVElUTEVdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBUSVRMRVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogSlNfSURFTlRfUkUgKyAnOicsIGVuZDogJzonLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSwgcmV0dXJuRW5kOiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdKVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=