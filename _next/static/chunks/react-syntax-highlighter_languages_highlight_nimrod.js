(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_nimrod"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/nimrod.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/nimrod.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    aliases: ['nim'],
    keywords: {
      keyword:
        'addr and as asm bind block break case cast const continue converter ' +
        'discard distinct div do elif else end enum except export finally ' +
        'for from generic if import in include interface is isnot iterator ' +
        'let macro method mixin mod nil not notin object of or out proc ptr ' +
        'raise ref return shl shr static template try tuple type using var ' +
        'when while with without xor yield',
      literal:
        'shared guarded stdin stdout stderr result true false',
      built_in:
        'int int8 int16 int32 int64 uint uint8 uint16 uint32 uint64 float ' +
        'float32 float64 bool char string cstring pointer expr stmt void ' +
        'auto any range array openarray varargs seq set clong culong cchar ' +
        'cschar cshort cint csize clonglong cfloat cdouble clongdouble ' +
        'cuchar cushort cuint culonglong cstringarray semistatic'
    },
    contains: [ {
        className: 'meta', // Actually pragma
        begin: /{\./,
        end: /\.}/,
        relevance: 10
      }, {
        className: 'string',
        begin: /[a-zA-Z]\w*"/,
        end: /"/,
        contains: [{begin: /""/}]
      }, {
        className: 'string',
        begin: /([a-zA-Z]\w*)?"""/,
        end: /"""/
      },
      hljs.QUOTE_STRING_MODE,
      {
        className: 'type',
        begin: /\b[A-Z]\w+\b/,
        relevance: 0
      }, {
        className: 'number',
        relevance: 0,
        variants: [
          {begin: /\b(0[xX][0-9a-fA-F][_0-9a-fA-F]*)('?[iIuU](8|16|32|64))?/},
          {begin: /\b(0o[0-7][_0-7]*)('?[iIuUfF](8|16|32|64))?/},
          {begin: /\b(0(b|B)[01][_01]*)('?[iIuUfF](8|16|32|64))?/},
          {begin: /\b(\d[_\d]*)('?[iIuUfF](8|16|32|64))?/}
        ]
      },
      hljs.HASH_COMMENT_MODE
    ]
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9uaW1yb2QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9uaW1yb2QuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWyduaW0nXSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgJ2FkZHIgYW5kIGFzIGFzbSBiaW5kIGJsb2NrIGJyZWFrIGNhc2UgY2FzdCBjb25zdCBjb250aW51ZSBjb252ZXJ0ZXIgJyArXG4gICAgICAgICdkaXNjYXJkIGRpc3RpbmN0IGRpdiBkbyBlbGlmIGVsc2UgZW5kIGVudW0gZXhjZXB0IGV4cG9ydCBmaW5hbGx5ICcgK1xuICAgICAgICAnZm9yIGZyb20gZ2VuZXJpYyBpZiBpbXBvcnQgaW4gaW5jbHVkZSBpbnRlcmZhY2UgaXMgaXNub3QgaXRlcmF0b3IgJyArXG4gICAgICAgICdsZXQgbWFjcm8gbWV0aG9kIG1peGluIG1vZCBuaWwgbm90IG5vdGluIG9iamVjdCBvZiBvciBvdXQgcHJvYyBwdHIgJyArXG4gICAgICAgICdyYWlzZSByZWYgcmV0dXJuIHNobCBzaHIgc3RhdGljIHRlbXBsYXRlIHRyeSB0dXBsZSB0eXBlIHVzaW5nIHZhciAnICtcbiAgICAgICAgJ3doZW4gd2hpbGUgd2l0aCB3aXRob3V0IHhvciB5aWVsZCcsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAnc2hhcmVkIGd1YXJkZWQgc3RkaW4gc3Rkb3V0IHN0ZGVyciByZXN1bHQgdHJ1ZSBmYWxzZScsXG4gICAgICBidWlsdF9pbjpcbiAgICAgICAgJ2ludCBpbnQ4IGludDE2IGludDMyIGludDY0IHVpbnQgdWludDggdWludDE2IHVpbnQzMiB1aW50NjQgZmxvYXQgJyArXG4gICAgICAgICdmbG9hdDMyIGZsb2F0NjQgYm9vbCBjaGFyIHN0cmluZyBjc3RyaW5nIHBvaW50ZXIgZXhwciBzdG10IHZvaWQgJyArXG4gICAgICAgICdhdXRvIGFueSByYW5nZSBhcnJheSBvcGVuYXJyYXkgdmFyYXJncyBzZXEgc2V0IGNsb25nIGN1bG9uZyBjY2hhciAnICtcbiAgICAgICAgJ2NzY2hhciBjc2hvcnQgY2ludCBjc2l6ZSBjbG9uZ2xvbmcgY2Zsb2F0IGNkb3VibGUgY2xvbmdkb3VibGUgJyArXG4gICAgICAgICdjdWNoYXIgY3VzaG9ydCBjdWludCBjdWxvbmdsb25nIGNzdHJpbmdhcnJheSBzZW1pc3RhdGljJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFsge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJywgLy8gQWN0dWFsbHkgcHJhZ21hXG4gICAgICAgIGJlZ2luOiAve1xcLi8sXG4gICAgICAgIGVuZDogL1xcLn0vLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAvW2EtekEtWl1cXHcqXCIvLFxuICAgICAgICBlbmQ6IC9cIi8sXG4gICAgICAgIGNvbnRhaW5zOiBbe2JlZ2luOiAvXCJcIi99XVxuICAgICAgfSwge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogLyhbYS16QS1aXVxcdyopP1wiXCJcIi8sXG4gICAgICAgIGVuZDogL1wiXCJcIi9cbiAgICAgIH0sXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgYmVnaW46IC9cXGJbQS1aXVxcdytcXGIvLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtiZWdpbjogL1xcYigwW3hYXVswLTlhLWZBLUZdW18wLTlhLWZBLUZdKikoJz9baUl1VV0oOHwxNnwzMnw2NCkpPy99LFxuICAgICAgICAgIHtiZWdpbjogL1xcYigwb1swLTddW18wLTddKikoJz9baUl1VWZGXSg4fDE2fDMyfDY0KSk/L30sXG4gICAgICAgICAge2JlZ2luOiAvXFxiKDAoYnxCKVswMV1bXzAxXSopKCc/W2lJdVVmRl0oOHwxNnwzMnw2NCkpPy99LFxuICAgICAgICAgIHtiZWdpbjogL1xcYihcXGRbX1xcZF0qKSgnP1tpSXVVZkZdKDh8MTZ8MzJ8NjQpKT8vfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERVxuICAgIF1cbiAgfVxufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9