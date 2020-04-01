(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_crmsh"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/crmsh.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/crmsh.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var RESOURCES = 'primitive rsc_template';

  var COMMANDS = 'group clone ms master location colocation order fencing_topology ' +
      'rsc_ticket acl_target acl_group user role ' +
      'tag xml';

  var PROPERTY_SETS = 'property rsc_defaults op_defaults';

  var KEYWORDS = 'params meta operations op rule attributes utilization';

  var OPERATORS = 'read write deny defined not_defined in_range date spec in ' +
      'ref reference attribute type xpath version and or lt gt tag ' +
      'lte gte eq ne \\';

  var TYPES = 'number string';

  var LITERALS = 'Master Started Slave Stopped start promote demote stop monitor true false';

  return {
    aliases: ['crm', 'pcmk'],
    case_insensitive: true,
    keywords: {
      keyword: KEYWORDS + ' ' + OPERATORS + ' ' + TYPES,
      literal: LITERALS
    },
    contains: [
      hljs.HASH_COMMENT_MODE,
      {
        beginKeywords: 'node',
        starts: {
          end: '\\s*([\\w_-]+:)?',
          starts: {
            className: 'title',
            end: '\\s*[\\$\\w_][\\w_-]*'
          }
        }
      },
      {
        beginKeywords: RESOURCES,
        starts: {
          className: 'title',
          end: '\\s*[\\$\\w_][\\w_-]*',
          starts: {
            end: '\\s*@?[\\w_][\\w_\\.:-]*'
          }
        }
      },
      {
        begin: '\\b(' + COMMANDS.split(' ').join('|') + ')\\s+',
        keywords: COMMANDS,
        starts: {
          className: 'title',
          end: '[\\$\\w_][\\w_-]*'
        }
      },
      {
        beginKeywords: PROPERTY_SETS,
        starts: {
          className: 'title',
          end: '\\s*([\\w_-]+:)?'
        }
      },
      hljs.QUOTE_STRING_MODE,
      {
        className: 'meta',
        begin: '(ocf|systemd|service|lsb):[\\w_:-]+',
        relevance: 0
      },
      {
        className: 'number',
        begin: '\\b\\d+(\\.\\d+)?(ms|s|h|m)?',
        relevance: 0
      },
      {
        className: 'literal',
        begin: '[-]?(infinity|inf)',
        relevance: 0
      },
      {
        className: 'attr',
        begin: /([A-Za-z\$_\#][\w_-]+)=/,
        relevance: 0
      },
      {
        className: 'tag',
        begin: '</?',
        end: '/?>',
        relevance: 0
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9jcm1zaC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2NybXNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgUkVTT1VSQ0VTID0gJ3ByaW1pdGl2ZSByc2NfdGVtcGxhdGUnO1xuXG4gIHZhciBDT01NQU5EUyA9ICdncm91cCBjbG9uZSBtcyBtYXN0ZXIgbG9jYXRpb24gY29sb2NhdGlvbiBvcmRlciBmZW5jaW5nX3RvcG9sb2d5ICcgK1xuICAgICAgJ3JzY190aWNrZXQgYWNsX3RhcmdldCBhY2xfZ3JvdXAgdXNlciByb2xlICcgK1xuICAgICAgJ3RhZyB4bWwnO1xuXG4gIHZhciBQUk9QRVJUWV9TRVRTID0gJ3Byb3BlcnR5IHJzY19kZWZhdWx0cyBvcF9kZWZhdWx0cyc7XG5cbiAgdmFyIEtFWVdPUkRTID0gJ3BhcmFtcyBtZXRhIG9wZXJhdGlvbnMgb3AgcnVsZSBhdHRyaWJ1dGVzIHV0aWxpemF0aW9uJztcblxuICB2YXIgT1BFUkFUT1JTID0gJ3JlYWQgd3JpdGUgZGVueSBkZWZpbmVkIG5vdF9kZWZpbmVkIGluX3JhbmdlIGRhdGUgc3BlYyBpbiAnICtcbiAgICAgICdyZWYgcmVmZXJlbmNlIGF0dHJpYnV0ZSB0eXBlIHhwYXRoIHZlcnNpb24gYW5kIG9yIGx0IGd0IHRhZyAnICtcbiAgICAgICdsdGUgZ3RlIGVxIG5lIFxcXFwnO1xuXG4gIHZhciBUWVBFUyA9ICdudW1iZXIgc3RyaW5nJztcblxuICB2YXIgTElURVJBTFMgPSAnTWFzdGVyIFN0YXJ0ZWQgU2xhdmUgU3RvcHBlZCBzdGFydCBwcm9tb3RlIGRlbW90ZSBzdG9wIG1vbml0b3IgdHJ1ZSBmYWxzZSc7XG5cbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ2NybScsICdwY21rJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDogS0VZV09SRFMgKyAnICcgKyBPUEVSQVRPUlMgKyAnICcgKyBUWVBFUyxcbiAgICAgIGxpdGVyYWw6IExJVEVSQUxTXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5IQVNIX0NPTU1FTlRfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ25vZGUnLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBlbmQ6ICdcXFxccyooW1xcXFx3Xy1dKzopPycsXG4gICAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgICAgICBlbmQ6ICdcXFxccypbXFxcXCRcXFxcd19dW1xcXFx3Xy1dKidcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6IFJFU09VUkNFUyxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICAgIGVuZDogJ1xcXFxzKltcXFxcJFxcXFx3X11bXFxcXHdfLV0qJyxcbiAgICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICAgIGVuZDogJ1xcXFxzKkA/W1xcXFx3X11bXFxcXHdfXFxcXC46LV0qJ1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdcXFxcYignICsgQ09NTUFORFMuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKVxcXFxzKycsXG4gICAgICAgIGtleXdvcmRzOiBDT01NQU5EUyxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICAgIGVuZDogJ1tcXFxcJFxcXFx3X11bXFxcXHdfLV0qJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbktleXdvcmRzOiBQUk9QRVJUWV9TRVRTLFxuICAgICAgICBzdGFydHM6IHtcbiAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgICAgZW5kOiAnXFxcXHMqKFtcXFxcd18tXSs6KT8nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICcob2NmfHN5c3RlbWR8c2VydmljZXxsc2IpOltcXFxcd186LV0rJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogJ1xcXFxiXFxcXGQrKFxcXFwuXFxcXGQrKT8obXN8c3xofG0pPycsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbGl0ZXJhbCcsXG4gICAgICAgIGJlZ2luOiAnWy1dPyhpbmZpbml0eXxpbmYpJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdhdHRyJyxcbiAgICAgICAgYmVnaW46IC8oW0EtWmEtelxcJF9cXCNdW1xcd18tXSspPS8sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGFnJyxcbiAgICAgICAgYmVnaW46ICc8Lz8nLFxuICAgICAgICBlbmQ6ICcvPz4nLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=