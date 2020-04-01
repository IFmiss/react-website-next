(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_dsconfig"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dsconfig.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dsconfig.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var QUOTED_PROPERTY = {
    className: 'string',
    begin: /"/, end: /"/
  };
  var APOS_PROPERTY = {
    className: 'string',
    begin: /'/, end: /'/
  };
  var UNQUOTED_PROPERTY = {
    className: 'string',
    begin: '[\\w-?]+:\\w+', end: '\\W',
    relevance: 0
  };
  var VALUELESS_PROPERTY = {
    className: 'string',
    begin: '\\w+-?\\w+', end: '\\W',
    relevance: 0
  };

  return {
    keywords: 'dsconfig',
    contains: [
      {
        className: 'keyword',
        begin: '^dsconfig', end: '\\s', excludeEnd: true,
        relevance: 10
      },
      {
        className: 'built_in',
        begin: '(list|create|get|set|delete)-(\\w+)', end: '\\s', excludeEnd: true,
        illegal: '!@#$%^&*()',
        relevance: 10
      },
      {
        className: 'built_in',
        begin: '--(\\w+)', end: '\\s', excludeEnd: true
      },
      QUOTED_PROPERTY,
      APOS_PROPERTY,
      UNQUOTED_PROPERTY,
      VALUELESS_PROPERTY,
      hljs.HASH_COMMENT_MODE
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9kc2NvbmZpZy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2RzY29uZmlnLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgUVVPVEVEX1BST1BFUlRZID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46IC9cIi8sIGVuZDogL1wiL1xuICB9O1xuICB2YXIgQVBPU19QUk9QRVJUWSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvJy8sIGVuZDogLycvXG4gIH07XG4gIHZhciBVTlFVT1RFRF9QUk9QRVJUWSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnW1xcXFx3LT9dKzpcXFxcdysnLCBlbmQ6ICdcXFxcVycsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIHZhciBWQUxVRUxFU1NfUFJPUEVSVFkgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1xcXFx3Ky0/XFxcXHcrJywgZW5kOiAnXFxcXFcnLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAga2V5d29yZHM6ICdkc2NvbmZpZycsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIGJlZ2luOiAnXmRzY29uZmlnJywgZW5kOiAnXFxcXHMnLCBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOiAnKGxpc3R8Y3JlYXRlfGdldHxzZXR8ZGVsZXRlKS0oXFxcXHcrKScsIGVuZDogJ1xcXFxzJywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgaWxsZWdhbDogJyFAIyQlXiYqKCknLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdidWlsdF9pbicsXG4gICAgICAgIGJlZ2luOiAnLS0oXFxcXHcrKScsIGVuZDogJ1xcXFxzJywgZXhjbHVkZUVuZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIFFVT1RFRF9QUk9QRVJUWSxcbiAgICAgIEFQT1NfUFJPUEVSVFksXG4gICAgICBVTlFVT1RFRF9QUk9QRVJUWSxcbiAgICAgIFZBTFVFTEVTU19QUk9QRVJUWSxcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREVcbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==