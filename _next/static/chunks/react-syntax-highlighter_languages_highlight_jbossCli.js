(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_jbossCli"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/jboss-cli.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/jboss-cli.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (hljs) {
  var PARAM = {
    begin: /[\w-]+ *=/, returnBegin: true,
    relevance: 0,
    contains: [{className: 'attr', begin: /[\w-]+/}]
  };
  var PARAMSBLOCK = {
    className: 'params',
    begin: /\(/,
    end: /\)/,
    contains: [PARAM],
    relevance : 0
  };
  var OPERATION = {
    className: 'function',
    begin: /:[\w\-.]+/,
    relevance: 0
  };
  var PATH = {
    className: 'string',
    begin: /\B(([\/.])[\w\-.\/=]+)+/,
  };
  var COMMAND_PARAMS = {
    className: 'params',
    begin: /--[\w\-=\/]+/,
  };
  return {
    aliases: ['wildfly-cli'],
    lexemes: '[a-z\-]+',
    keywords: {
      keyword: 'alias batch cd clear command connect connection-factory connection-info data-source deploy ' +
      'deployment-info deployment-overlay echo echo-dmr help history if jdbc-driver-info jms-queue|20 jms-topic|20 ls ' +
      'patch pwd quit read-attribute read-operation reload rollout-plan run-batch set shutdown try unalias ' +
      'undeploy unset version xa-data-source', // module
      literal: 'true false'
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      COMMAND_PARAMS,
      OPERATION,
      PATH,
      PARAMSBLOCK
    ]
  }
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9qYm9zc0NsaS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2pib3NzLWNsaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChobGpzKSB7XG4gIHZhciBQQVJBTSA9IHtcbiAgICBiZWdpbjogL1tcXHctXSsgKj0vLCByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFt7Y2xhc3NOYW1lOiAnYXR0cicsIGJlZ2luOiAvW1xcdy1dKy99XVxuICB9O1xuICB2YXIgUEFSQU1TQkxPQ0sgPSB7XG4gICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICBiZWdpbjogL1xcKC8sXG4gICAgZW5kOiAvXFwpLyxcbiAgICBjb250YWluczogW1BBUkFNXSxcbiAgICByZWxldmFuY2UgOiAwXG4gIH07XG4gIHZhciBPUEVSQVRJT04gPSB7XG4gICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgIGJlZ2luOiAvOltcXHdcXC0uXSsvLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuICB2YXIgUEFUSCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAvXFxCKChbXFwvLl0pW1xcd1xcLS5cXC89XSspKy8sXG4gIH07XG4gIHZhciBDT01NQU5EX1BBUkFNUyA9IHtcbiAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgIGJlZ2luOiAvLS1bXFx3XFwtPVxcL10rLyxcbiAgfTtcbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ3dpbGRmbHktY2xpJ10sXG4gICAgbGV4ZW1lczogJ1thLXpcXC1dKycsXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6ICdhbGlhcyBiYXRjaCBjZCBjbGVhciBjb21tYW5kIGNvbm5lY3QgY29ubmVjdGlvbi1mYWN0b3J5IGNvbm5lY3Rpb24taW5mbyBkYXRhLXNvdXJjZSBkZXBsb3kgJyArXG4gICAgICAnZGVwbG95bWVudC1pbmZvIGRlcGxveW1lbnQtb3ZlcmxheSBlY2hvIGVjaG8tZG1yIGhlbHAgaGlzdG9yeSBpZiBqZGJjLWRyaXZlci1pbmZvIGptcy1xdWV1ZXwyMCBqbXMtdG9waWN8MjAgbHMgJyArXG4gICAgICAncGF0Y2ggcHdkIHF1aXQgcmVhZC1hdHRyaWJ1dGUgcmVhZC1vcGVyYXRpb24gcmVsb2FkIHJvbGxvdXQtcGxhbiBydW4tYmF0Y2ggc2V0IHNodXRkb3duIHRyeSB1bmFsaWFzICcgK1xuICAgICAgJ3VuZGVwbG95IHVuc2V0IHZlcnNpb24geGEtZGF0YS1zb3VyY2UnLCAvLyBtb2R1bGVcbiAgICAgIGxpdGVyYWw6ICd0cnVlIGZhbHNlJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgQ09NTUFORF9QQVJBTVMsXG4gICAgICBPUEVSQVRJT04sXG4gICAgICBQQVRILFxuICAgICAgUEFSQU1TQkxPQ0tcbiAgICBdXG4gIH1cbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9