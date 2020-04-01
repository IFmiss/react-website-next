(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_scala"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/scala.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/scala.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {

  var ANNOTATION = { className: 'meta', begin: '@[A-Za-z]+' };

  // used in strings for escaping/interpolation/substitution
  var SUBST = {
    className: 'subst',
    variants: [
      {begin: '\\$[A-Za-z0-9_]+'},
      {begin: '\\${', end: '}'}
    ]
  };

  var STRING = {
    className: 'string',
    variants: [
      {
        begin: '"', end: '"',
        illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE]
      },
      {
        begin: '"""', end: '"""',
        relevance: 10
      },
      {
        begin: '[a-z]+"', end: '"',
        illegal: '\\n',
        contains: [hljs.BACKSLASH_ESCAPE, SUBST]
      },
      {
        className: 'string',
        begin: '[a-z]+"""', end: '"""',
        contains: [SUBST],
        relevance: 10
      }
    ]

  };

  var SYMBOL = {
    className: 'symbol',
    begin: '\'\\w[\\w\\d_]*(?!\')'
  };

  var TYPE = {
    className: 'type',
    begin: '\\b[A-Z][A-Za-z0-9_]*',
    relevance: 0
  };

  var NAME = {
    className: 'title',
    begin: /[^0-9\n\t "'(),.`{}\[\]:;][^\n\t "'(),.`{}\[\]:;]+|[^0-9\n\t "'(),.`{}\[\]:;=]/,
    relevance: 0
  };

  var CLASS = {
    className: 'class',
    beginKeywords: 'class object trait type',
    end: /[:={\[\n;]/,
    excludeEnd: true,
    contains: [
      {
        beginKeywords: 'extends with',
        relevance: 10
      },
      {
        begin: /\[/,
        end: /\]/,
        excludeBegin: true,
        excludeEnd: true,
        relevance: 0,
        contains: [TYPE]
      },
      {
        className: 'params',
        begin: /\(/,
        end: /\)/,
        excludeBegin: true,
        excludeEnd: true,
        relevance: 0,
        contains: [TYPE]
      },
      NAME
    ]
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
      literal: 'true false null',
      keyword: 'type yield lazy override def with val var sealed abstract private trait object if forSome for while throw finally protected extends import final return else break new catch super class case package default try this match continue throws implicit'
    },
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      STRING,
      SYMBOL,
      TYPE,
      METHOD,
      CLASS,
      hljs.C_NUMBER_MODE,
      ANNOTATION
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9zY2FsYS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3NjYWxhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuXG4gIHZhciBBTk5PVEFUSU9OID0geyBjbGFzc05hbWU6ICdtZXRhJywgYmVnaW46ICdAW0EtWmEtel0rJyB9O1xuXG4gIC8vIHVzZWQgaW4gc3RyaW5ncyBmb3IgZXNjYXBpbmcvaW50ZXJwb2xhdGlvbi9zdWJzdGl0dXRpb25cbiAgdmFyIFNVQlNUID0ge1xuICAgIGNsYXNzTmFtZTogJ3N1YnN0JyxcbiAgICB2YXJpYW50czogW1xuICAgICAge2JlZ2luOiAnXFxcXCRbQS1aYS16MC05X10rJ30sXG4gICAgICB7YmVnaW46ICdcXFxcJHsnLCBlbmQ6ICd9J31cbiAgICBdXG4gIH07XG5cbiAgdmFyIFNUUklORyA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXCInLCBlbmQ6ICdcIicsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcIlwiXCInLCBlbmQ6ICdcIlwiXCInLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogJ1thLXpdK1wiJywgZW5kOiAnXCInLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRSwgU1VCU1RdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1thLXpdK1wiXCJcIicsIGVuZDogJ1wiXCJcIicsXG4gICAgICAgIGNvbnRhaW5zOiBbU1VCU1RdLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9XG4gICAgXVxuXG4gIH07XG5cbiAgdmFyIFNZTUJPTCA9IHtcbiAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgIGJlZ2luOiAnXFwnXFxcXHdbXFxcXHdcXFxcZF9dKig/IVxcJyknXG4gIH07XG5cbiAgdmFyIFRZUEUgPSB7XG4gICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgYmVnaW46ICdcXFxcYltBLVpdW0EtWmEtejAtOV9dKicsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgdmFyIE5BTUUgPSB7XG4gICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgIGJlZ2luOiAvW14wLTlcXG5cXHQgXCInKCksLmB7fVxcW1xcXTo7XVteXFxuXFx0IFwiJygpLC5ge31cXFtcXF06O10rfFteMC05XFxuXFx0IFwiJygpLC5ge31cXFtcXF06Oz1dLyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICB2YXIgQ0xBU1MgPSB7XG4gICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgIGJlZ2luS2V5d29yZHM6ICdjbGFzcyBvYmplY3QgdHJhaXQgdHlwZScsXG4gICAgZW5kOiAvWzo9e1xcW1xcbjtdLyxcbiAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdleHRlbmRzIHdpdGgnLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogL1xcWy8sXG4gICAgICAgIGVuZDogL1xcXS8sXG4gICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1RZUEVdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICBiZWdpbjogL1xcKC8sXG4gICAgICAgIGVuZDogL1xcKS8sXG4gICAgICAgIGV4Y2x1ZGVCZWdpbjogdHJ1ZSxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBjb250YWluczogW1RZUEVdXG4gICAgICB9LFxuICAgICAgTkFNRVxuICAgIF1cbiAgfTtcblxuICB2YXIgTUVUSE9EID0ge1xuICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICBiZWdpbktleXdvcmRzOiAnZGVmJyxcbiAgICBlbmQ6IC9bOj17XFxbKFxcbjtdLyxcbiAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgIGNvbnRhaW5zOiBbTkFNRV1cbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGtleXdvcmRzOiB7XG4gICAgICBsaXRlcmFsOiAndHJ1ZSBmYWxzZSBudWxsJyxcbiAgICAgIGtleXdvcmQ6ICd0eXBlIHlpZWxkIGxhenkgb3ZlcnJpZGUgZGVmIHdpdGggdmFsIHZhciBzZWFsZWQgYWJzdHJhY3QgcHJpdmF0ZSB0cmFpdCBvYmplY3QgaWYgZm9yU29tZSBmb3Igd2hpbGUgdGhyb3cgZmluYWxseSBwcm90ZWN0ZWQgZXh0ZW5kcyBpbXBvcnQgZmluYWwgcmV0dXJuIGVsc2UgYnJlYWsgbmV3IGNhdGNoIHN1cGVyIGNsYXNzIGNhc2UgcGFja2FnZSBkZWZhdWx0IHRyeSB0aGlzIG1hdGNoIGNvbnRpbnVlIHRocm93cyBpbXBsaWNpdCdcbiAgICB9LFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgU1RSSU5HLFxuICAgICAgU1lNQk9MLFxuICAgICAgVFlQRSxcbiAgICAgIE1FVEhPRCxcbiAgICAgIENMQVNTLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFLFxuICAgICAgQU5OT1RBVElPTlxuICAgIF1cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==