(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_xml"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/xml.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/xml.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var XML_IDENT_RE = '[A-Za-z0-9\\._:-]+';
  var TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: 'attr',
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: 'string',
            endsParent: true,
            variants: [
              {begin: /"/, end: /"/},
              {begin: /'/, end: /'/},
              {begin: /[^\s"'=<>`]+/}
            ]
          }
        ]
      }
    ]
  };
  return {
    aliases: ['html', 'xhtml', 'rss', 'atom', 'xjb', 'xsd', 'xsl', 'plist', 'wsf'],
    case_insensitive: true,
    contains: [
      {
        className: 'meta',
        begin: '<!DOCTYPE', end: '>',
        relevance: 10,
        contains: [{begin: '\\[', end: '\\]'}]
      },
      hljs.COMMENT(
        '<!--',
        '-->',
        {
          relevance: 10
        }
      ),
      {
        begin: '<\\!\\[CDATA\\[', end: '\\]\\]>',
        relevance: 10
      },
      {
        className: 'meta',
        begin: /<\?xml/, end: /\?>/, relevance: 10
      },
      {
        begin: /<\?(php)?/, end: /\?>/,
        subLanguage: 'php',
        contains: [
          // We don't want the php closing tag ?> to close the PHP block when
          // inside any of the following blocks:
          {begin: '/\\*', end: '\\*/', skip: true},
          {begin: 'b"', end: '"', skip: true},
          {begin: 'b\'', end: '\'', skip: true},
          hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null, className: null, contains: null, skip: true}),
          hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null, className: null, contains: null, skip: true})
        ]
      },
      {
        className: 'tag',
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending braket. The '$' is needed for the lexeme to be recognized
        by hljs.subMode() that tests lexemes outside the stream.
        */
        begin: '<style(?=\\s|>|$)', end: '>',
        keywords: {name: 'style'},
        contains: [TAG_INTERNALS],
        starts: {
          end: '</style>', returnEnd: true,
          subLanguage: ['css', 'xml']
        }
      },
      {
        className: 'tag',
        // See the comment in the <style tag about the lookahead pattern
        begin: '<script(?=\\s|>|$)', end: '>',
        keywords: {name: 'script'},
        contains: [TAG_INTERNALS],
        starts: {
          end: '\<\/script\>', returnEnd: true,
          subLanguage: ['actionscript', 'javascript', 'handlebars', 'xml', 'vbscript']
        }
      },
      {
        className: 'tag',
        begin: '</?', end: '/?>',
        contains: [
          {
            className: 'name', begin: /[^\/><\s]+/, relevance: 0
          },
          TAG_INTERNALS
        ]
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF94bWwuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy94bWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHZhciBYTUxfSURFTlRfUkUgPSAnW0EtWmEtejAtOVxcXFwuXzotXSsnO1xuICB2YXIgVEFHX0lOVEVSTkFMUyA9IHtcbiAgICBlbmRzV2l0aFBhcmVudDogdHJ1ZSxcbiAgICBpbGxlZ2FsOiAvPC8sXG4gICAgcmVsZXZhbmNlOiAwLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2F0dHInLFxuICAgICAgICBiZWdpbjogWE1MX0lERU5UX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAvPVxccyovLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICB7YmVnaW46IC9cIi8sIGVuZDogL1wiL30sXG4gICAgICAgICAgICAgIHtiZWdpbjogLycvLCBlbmQ6IC8nL30sXG4gICAgICAgICAgICAgIHtiZWdpbjogL1teXFxzXCInPTw+YF0rL31cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydodG1sJywgJ3hodG1sJywgJ3JzcycsICdhdG9tJywgJ3hqYicsICd4c2QnLCAneHNsJywgJ3BsaXN0JywgJ3dzZiddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnPCFET0NUWVBFJywgZW5kOiAnPicsXG4gICAgICAgIHJlbGV2YW5jZTogMTAsXG4gICAgICAgIGNvbnRhaW5zOiBbe2JlZ2luOiAnXFxcXFsnLCBlbmQ6ICdcXFxcXSd9XVxuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVChcbiAgICAgICAgJzwhLS0nLFxuICAgICAgICAnLS0+JyxcbiAgICAgICAge1xuICAgICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICc8XFxcXCFcXFxcW0NEQVRBXFxcXFsnLCBlbmQ6ICdcXFxcXVxcXFxdPicsXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogLzxcXD94bWwvLCBlbmQ6IC9cXD8+LywgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC88XFw/KHBocCk/LywgZW5kOiAvXFw/Pi8sXG4gICAgICAgIHN1Ykxhbmd1YWdlOiAncGhwJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRoZSBwaHAgY2xvc2luZyB0YWcgPz4gdG8gY2xvc2UgdGhlIFBIUCBibG9jayB3aGVuXG4gICAgICAgICAgLy8gaW5zaWRlIGFueSBvZiB0aGUgZm9sbG93aW5nIGJsb2NrczpcbiAgICAgICAgICB7YmVnaW46ICcvXFxcXConLCBlbmQ6ICdcXFxcKi8nLCBza2lwOiB0cnVlfSxcbiAgICAgICAgICB7YmVnaW46ICdiXCInLCBlbmQ6ICdcIicsIHNraXA6IHRydWV9LFxuICAgICAgICAgIHtiZWdpbjogJ2JcXCcnLCBlbmQ6ICdcXCcnLCBza2lwOiB0cnVlfSxcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5BUE9TX1NUUklOR19NT0RFLCB7aWxsZWdhbDogbnVsbCwgY2xhc3NOYW1lOiBudWxsLCBjb250YWluczogbnVsbCwgc2tpcDogdHJ1ZX0pLFxuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7aWxsZWdhbDogbnVsbCwgY2xhc3NOYW1lOiBudWxsLCBjb250YWluczogbnVsbCwgc2tpcDogdHJ1ZX0pXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RhZycsXG4gICAgICAgIC8qXG4gICAgICAgIFRoZSBsb29rYWhlYWQgcGF0dGVybiAoPz0uLi4pIGVuc3VyZXMgdGhhdCAnYmVnaW4nIG9ubHkgbWF0Y2hlc1xuICAgICAgICAnPHN0eWxlJyBhcyBhIHNpbmdsZSB3b3JkLCBmb2xsb3dlZCBieSBhIHdoaXRlc3BhY2Ugb3IgYW5cbiAgICAgICAgZW5kaW5nIGJyYWtldC4gVGhlICckJyBpcyBuZWVkZWQgZm9yIHRoZSBsZXhlbWUgdG8gYmUgcmVjb2duaXplZFxuICAgICAgICBieSBobGpzLnN1Yk1vZGUoKSB0aGF0IHRlc3RzIGxleGVtZXMgb3V0c2lkZSB0aGUgc3RyZWFtLlxuICAgICAgICAqL1xuICAgICAgICBiZWdpbjogJzxzdHlsZSg/PVxcXFxzfD58JCknLCBlbmQ6ICc+JyxcbiAgICAgICAga2V5d29yZHM6IHtuYW1lOiAnc3R5bGUnfSxcbiAgICAgICAgY29udGFpbnM6IFtUQUdfSU5URVJOQUxTXSxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAnPC9zdHlsZT4nLCByZXR1cm5FbmQ6IHRydWUsXG4gICAgICAgICAgc3ViTGFuZ3VhZ2U6IFsnY3NzJywgJ3htbCddXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RhZycsXG4gICAgICAgIC8vIFNlZSB0aGUgY29tbWVudCBpbiB0aGUgPHN0eWxlIHRhZyBhYm91dCB0aGUgbG9va2FoZWFkIHBhdHRlcm5cbiAgICAgICAgYmVnaW46ICc8c2NyaXB0KD89XFxcXHN8PnwkKScsIGVuZDogJz4nLFxuICAgICAgICBrZXl3b3Jkczoge25hbWU6ICdzY3JpcHQnfSxcbiAgICAgICAgY29udGFpbnM6IFtUQUdfSU5URVJOQUxTXSxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAnXFw8XFwvc2NyaXB0XFw+JywgcmV0dXJuRW5kOiB0cnVlLFxuICAgICAgICAgIHN1Ykxhbmd1YWdlOiBbJ2FjdGlvbnNjcmlwdCcsICdqYXZhc2NyaXB0JywgJ2hhbmRsZWJhcnMnLCAneG1sJywgJ3Zic2NyaXB0J11cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGFnJyxcbiAgICAgICAgYmVnaW46ICc8Lz8nLCBlbmQ6ICcvPz4nLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ25hbWUnLCBiZWdpbjogL1teXFwvPjxcXHNdKy8sIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgVEFHX0lOVEVSTkFMU1xuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==