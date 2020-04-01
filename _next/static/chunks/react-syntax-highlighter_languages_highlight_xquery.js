(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_xquery"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/xquery.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/xquery.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  // see https://www.w3.org/TR/xquery/#id-terminal-delimitation
  var KEYWORDS = 'module schema namespace boundary-space preserve no-preserve strip default collation base-uri ordering context decimal-format decimal-separator copy-namespaces empty-sequence except exponent-separator external grouping-separator inherit no-inherit lax minus-sign per-mille percent schema-attribute schema-element strict unordered zero-digit ' +
  'declare import option function validate variable ' +
  'for at in let where order group by return if then else ' +
  'tumbling sliding window start when only end previous next stable ' +
  'ascending descending allowing empty greatest least some every satisfies switch case typeswitch try catch ' +
  'and or to union intersect instance of treat as castable cast map array ' +
  'delete insert into replace value rename copy modify update';

  // Node Types (sorted by inheritance)
  // atomic types (sorted by inheritance)
  var TYPE = 'item document-node node attribute document element comment namespace namespace-node processing-instruction text construction ' +
  'xs:anyAtomicType xs:untypedAtomic xs:duration xs:time xs:decimal xs:float xs:double xs:gYearMonth xs:gYear xs:gMonthDay xs:gMonth xs:gDay xs:boolean xs:base64Binary xs:hexBinary xs:anyURI xs:QName xs:NOTATION xs:dateTime xs:dateTimeStamp xs:date xs:string xs:normalizedString xs:token xs:language xs:NMTOKEN xs:Name xs:NCName xs:ID xs:IDREF xs:ENTITY xs:integer xs:nonPositiveInteger xs:negativeInteger xs:long xs:int xs:short xs:byte xs:nonNegativeInteger xs:unisignedLong xs:unsignedInt xs:unsignedShort xs:unsignedByte xs:positiveInteger xs:yearMonthDuration xs:dayTimeDuration';

  var LITERAL = 'eq ne lt le gt ge is ' +
    'self:: child:: descendant:: descendant-or-self:: attribute:: following:: following-sibling:: parent:: ancestor:: ancestor-or-self:: preceding:: preceding-sibling:: ' +
    'NaN';

  // functions (TODO: find regex for op: without breaking build)
  var BUILT_IN = {
    className: 'built_in',
    variants: [{
      begin: /\barray\:/,
      end: /(?:append|filter|flatten|fold\-(?:left|right)|for-each(?:\-pair)?|get|head|insert\-before|join|put|remove|reverse|size|sort|subarray|tail)\b/
    }, {
      begin: /\bmap\:/,
      end: /(?:contains|entry|find|for\-each|get|keys|merge|put|remove|size)\b/
    }, {
      begin: /\bmath\:/,
      end: /(?:a(?:cos|sin|tan[2]?)|cos|exp(?:10)?|log(?:10)?|pi|pow|sin|sqrt|tan)\b/
    }, {
      begin: /\bop\:/,
      end: /\(/,
      excludeEnd: true
    }, {
      begin: /\bfn\:/,
      end: /\(/,
      excludeEnd: true
    },
// do not highlight inbuilt strings as variable or xml element names
    {
      begin: /[^<\/\$\:'"-]\b(?:abs|accumulator\-(?:after|before)|adjust\-(?:date(?:Time)?|time)\-to\-timezone|analyze\-string|apply|available\-(?:environment\-variables|system\-properties)|avg|base\-uri|boolean|ceiling|codepoints?\-(?:equal|to\-string)|collation\-key|collection|compare|concat|contains(?:\-token)?|copy\-of|count|current(?:\-)?(?:date(?:Time)?|time|group(?:ing\-key)?|output\-uri|merge\-(?:group|key))?data|dateTime|days?\-from\-(?:date(?:Time)?|duration)|deep\-equal|default\-(?:collation|language)|distinct\-values|document(?:\-uri)?|doc(?:\-available)?|element\-(?:available|with\-id)|empty|encode\-for\-uri|ends\-with|environment\-variable|error|escape\-html\-uri|exactly\-one|exists|false|filter|floor|fold\-(?:left|right)|for\-each(?:\-pair)?|format\-(?:date(?:Time)?|time|integer|number)|function\-(?:arity|available|lookup|name)|generate\-id|has\-children|head|hours\-from\-(?:dateTime|duration|time)|id(?:ref)?|implicit\-timezone|in\-scope\-prefixes|index\-of|innermost|insert\-before|iri\-to\-uri|json\-(?:doc|to\-xml)|key|lang|last|load\-xquery\-module|local\-name(?:\-from\-QName)?|(?:lower|upper)\-case|matches|max|minutes\-from\-(?:dateTime|duration|time)|min|months?\-from\-(?:date(?:Time)?|duration)|name(?:space\-uri\-?(?:for\-prefix|from\-QName)?)?|nilled|node\-name|normalize\-(?:space|unicode)|not|number|one\-or\-more|outermost|parse\-(?:ietf\-date|json)|path|position|(?:prefix\-from\-)?QName|random\-number\-generator|regex\-group|remove|replace|resolve\-(?:QName|uri)|reverse|root|round(?:\-half\-to\-even)?|seconds\-from\-(?:dateTime|duration|time)|snapshot|sort|starts\-with|static\-base\-uri|stream\-available|string\-?(?:join|length|to\-codepoints)?|subsequence|substring\-?(?:after|before)?|sum|system\-property|tail|timezone\-from\-(?:date(?:Time)?|time)|tokenize|trace|trans(?:form|late)|true|type\-available|unordered|unparsed\-(?:entity|text)?\-?(?:public\-id|uri|available|lines)?|uri\-collection|xml\-to\-json|years?\-from\-(?:date(?:Time)?|duration)|zero\-or\-one)\b/,
    }, {
      begin: /\blocal\:/,
      end: /\(/,
      excludeEnd: true
    }, {
      begin: /\bzip\:/,
      end: /(?:zip\-file|(?:xml|html|text|binary)\-entry| (?:update\-)?entries)\b/
    }, {
      begin: /\b(?:util|db|functx|app|xdmp|xmldb)\:/,
      end: /\(/,
      excludeEnd: true
    }
  ]
  };

  var TITLE = {
    className: 'title',
    begin: /\bxquery version "[13]\.[01]"\s?(?:encoding ".+")?/,
    end: /;/
  };

  var VAR = {
    className: 'variable',
    begin: /[\$][\w-:]+/
  };

  var NUMBER = {
    className: 'number',
    begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
    relevance: 0
  };

  var STRING = {
    className: 'string',
    variants: [{
        begin: /"/,
        end: /"/,
        contains: [{
          begin: /""/,
          relevance: 0
        }]
      },
      {
        begin: /'/,
        end: /'/,
        contains: [{
          begin: /''/,
          relevance: 0
        }]
      }
    ]
  };

  var ANNOTATION = {
    className: 'meta',
    begin: /%[\w-:]+/
  };

  var COMMENT = {
    className: 'comment',
    begin: '\\(:',
    end: ':\\)',
    relevance: 10,
    contains: [{
      className: 'doctag',
      begin: '@\\w+'
    }]
  };

  // see https://www.w3.org/TR/xquery/#id-computedConstructors
  // mocha: computed_inbuilt
  // see https://www.regexpal.com/?fam=99749
  var COMPUTED = {
    beginKeywords: 'element attribute comment document processing-instruction',
    end: '{',
    excludeEnd: true
  };

  // mocha: direct_method
    var DIRECT = {
      begin: /<([\w\._:\-]+)((\s*.*)=('|").*('|"))?>/,
      end: /(\/[\w\._:\-]+>)/,
      subLanguage: 'xml',
      contains: [{
        begin: '{',
        end: '}',
        subLanguage: 'xquery'
      }, 'self']
    };


  var CONTAINS = [
    VAR,
    BUILT_IN,
    STRING,
    NUMBER,
    COMMENT,
    ANNOTATION,
    TITLE,
    COMPUTED,
    DIRECT
  ];



    var METHOD = {
      begin: '{',
      end: '}',
      contains: CONTAINS
    };



  return {
    aliases: ['xpath', 'xq'],
    case_insensitive: false,
    lexemes: /[a-zA-Z\$][a-zA-Z0-9_:\-]*/,
    illegal: /(proc)|(abstract)|(extends)|(until)|(#)/,
    keywords: {
      keyword: KEYWORDS,
      type: TYPE,
      literal: LITERAL
    },
    contains: CONTAINS
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF94cXVlcnkuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy94cXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIC8vIHNlZSBodHRwczovL3d3dy53My5vcmcvVFIveHF1ZXJ5LyNpZC10ZXJtaW5hbC1kZWxpbWl0YXRpb25cbiAgdmFyIEtFWVdPUkRTID0gJ21vZHVsZSBzY2hlbWEgbmFtZXNwYWNlIGJvdW5kYXJ5LXNwYWNlIHByZXNlcnZlIG5vLXByZXNlcnZlIHN0cmlwIGRlZmF1bHQgY29sbGF0aW9uIGJhc2UtdXJpIG9yZGVyaW5nIGNvbnRleHQgZGVjaW1hbC1mb3JtYXQgZGVjaW1hbC1zZXBhcmF0b3IgY29weS1uYW1lc3BhY2VzIGVtcHR5LXNlcXVlbmNlIGV4Y2VwdCBleHBvbmVudC1zZXBhcmF0b3IgZXh0ZXJuYWwgZ3JvdXBpbmctc2VwYXJhdG9yIGluaGVyaXQgbm8taW5oZXJpdCBsYXggbWludXMtc2lnbiBwZXItbWlsbGUgcGVyY2VudCBzY2hlbWEtYXR0cmlidXRlIHNjaGVtYS1lbGVtZW50IHN0cmljdCB1bm9yZGVyZWQgemVyby1kaWdpdCAnICtcbiAgJ2RlY2xhcmUgaW1wb3J0IG9wdGlvbiBmdW5jdGlvbiB2YWxpZGF0ZSB2YXJpYWJsZSAnICtcbiAgJ2ZvciBhdCBpbiBsZXQgd2hlcmUgb3JkZXIgZ3JvdXAgYnkgcmV0dXJuIGlmIHRoZW4gZWxzZSAnICtcbiAgJ3R1bWJsaW5nIHNsaWRpbmcgd2luZG93IHN0YXJ0IHdoZW4gb25seSBlbmQgcHJldmlvdXMgbmV4dCBzdGFibGUgJyArXG4gICdhc2NlbmRpbmcgZGVzY2VuZGluZyBhbGxvd2luZyBlbXB0eSBncmVhdGVzdCBsZWFzdCBzb21lIGV2ZXJ5IHNhdGlzZmllcyBzd2l0Y2ggY2FzZSB0eXBlc3dpdGNoIHRyeSBjYXRjaCAnICtcbiAgJ2FuZCBvciB0byB1bmlvbiBpbnRlcnNlY3QgaW5zdGFuY2Ugb2YgdHJlYXQgYXMgY2FzdGFibGUgY2FzdCBtYXAgYXJyYXkgJyArXG4gICdkZWxldGUgaW5zZXJ0IGludG8gcmVwbGFjZSB2YWx1ZSByZW5hbWUgY29weSBtb2RpZnkgdXBkYXRlJztcblxuICAvLyBOb2RlIFR5cGVzIChzb3J0ZWQgYnkgaW5oZXJpdGFuY2UpXG4gIC8vIGF0b21pYyB0eXBlcyAoc29ydGVkIGJ5IGluaGVyaXRhbmNlKVxuICB2YXIgVFlQRSA9ICdpdGVtIGRvY3VtZW50LW5vZGUgbm9kZSBhdHRyaWJ1dGUgZG9jdW1lbnQgZWxlbWVudCBjb21tZW50IG5hbWVzcGFjZSBuYW1lc3BhY2Utbm9kZSBwcm9jZXNzaW5nLWluc3RydWN0aW9uIHRleHQgY29uc3RydWN0aW9uICcgK1xuICAneHM6YW55QXRvbWljVHlwZSB4czp1bnR5cGVkQXRvbWljIHhzOmR1cmF0aW9uIHhzOnRpbWUgeHM6ZGVjaW1hbCB4czpmbG9hdCB4czpkb3VibGUgeHM6Z1llYXJNb250aCB4czpnWWVhciB4czpnTW9udGhEYXkgeHM6Z01vbnRoIHhzOmdEYXkgeHM6Ym9vbGVhbiB4czpiYXNlNjRCaW5hcnkgeHM6aGV4QmluYXJ5IHhzOmFueVVSSSB4czpRTmFtZSB4czpOT1RBVElPTiB4czpkYXRlVGltZSB4czpkYXRlVGltZVN0YW1wIHhzOmRhdGUgeHM6c3RyaW5nIHhzOm5vcm1hbGl6ZWRTdHJpbmcgeHM6dG9rZW4geHM6bGFuZ3VhZ2UgeHM6Tk1UT0tFTiB4czpOYW1lIHhzOk5DTmFtZSB4czpJRCB4czpJRFJFRiB4czpFTlRJVFkgeHM6aW50ZWdlciB4czpub25Qb3NpdGl2ZUludGVnZXIgeHM6bmVnYXRpdmVJbnRlZ2VyIHhzOmxvbmcgeHM6aW50IHhzOnNob3J0IHhzOmJ5dGUgeHM6bm9uTmVnYXRpdmVJbnRlZ2VyIHhzOnVuaXNpZ25lZExvbmcgeHM6dW5zaWduZWRJbnQgeHM6dW5zaWduZWRTaG9ydCB4czp1bnNpZ25lZEJ5dGUgeHM6cG9zaXRpdmVJbnRlZ2VyIHhzOnllYXJNb250aER1cmF0aW9uIHhzOmRheVRpbWVEdXJhdGlvbic7XG5cbiAgdmFyIExJVEVSQUwgPSAnZXEgbmUgbHQgbGUgZ3QgZ2UgaXMgJyArXG4gICAgJ3NlbGY6OiBjaGlsZDo6IGRlc2NlbmRhbnQ6OiBkZXNjZW5kYW50LW9yLXNlbGY6OiBhdHRyaWJ1dGU6OiBmb2xsb3dpbmc6OiBmb2xsb3dpbmctc2libGluZzo6IHBhcmVudDo6IGFuY2VzdG9yOjogYW5jZXN0b3Itb3Itc2VsZjo6IHByZWNlZGluZzo6IHByZWNlZGluZy1zaWJsaW5nOjogJyArXG4gICAgJ05hTic7XG5cbiAgLy8gZnVuY3Rpb25zIChUT0RPOiBmaW5kIHJlZ2V4IGZvciBvcDogd2l0aG91dCBicmVha2luZyBidWlsZClcbiAgdmFyIEJVSUxUX0lOID0ge1xuICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICB2YXJpYW50czogW3tcbiAgICAgIGJlZ2luOiAvXFxiYXJyYXlcXDovLFxuICAgICAgZW5kOiAvKD86YXBwZW5kfGZpbHRlcnxmbGF0dGVufGZvbGRcXC0oPzpsZWZ0fHJpZ2h0KXxmb3ItZWFjaCg/OlxcLXBhaXIpP3xnZXR8aGVhZHxpbnNlcnRcXC1iZWZvcmV8am9pbnxwdXR8cmVtb3ZlfHJldmVyc2V8c2l6ZXxzb3J0fHN1YmFycmF5fHRhaWwpXFxiL1xuICAgIH0sIHtcbiAgICAgIGJlZ2luOiAvXFxibWFwXFw6LyxcbiAgICAgIGVuZDogLyg/OmNvbnRhaW5zfGVudHJ5fGZpbmR8Zm9yXFwtZWFjaHxnZXR8a2V5c3xtZXJnZXxwdXR8cmVtb3ZlfHNpemUpXFxiL1xuICAgIH0sIHtcbiAgICAgIGJlZ2luOiAvXFxibWF0aFxcOi8sXG4gICAgICBlbmQ6IC8oPzphKD86Y29zfHNpbnx0YW5bMl0/KXxjb3N8ZXhwKD86MTApP3xsb2coPzoxMCk/fHBpfHBvd3xzaW58c3FydHx0YW4pXFxiL1xuICAgIH0sIHtcbiAgICAgIGJlZ2luOiAvXFxib3BcXDovLFxuICAgICAgZW5kOiAvXFwoLyxcbiAgICAgIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgICB9LCB7XG4gICAgICBiZWdpbjogL1xcYmZuXFw6LyxcbiAgICAgIGVuZDogL1xcKC8sXG4gICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgfSxcbi8vIGRvIG5vdCBoaWdobGlnaHQgaW5idWlsdCBzdHJpbmdzIGFzIHZhcmlhYmxlIG9yIHhtbCBlbGVtZW50IG5hbWVzXG4gICAge1xuICAgICAgYmVnaW46IC9bXjxcXC9cXCRcXDonXCItXVxcYig/OmFic3xhY2N1bXVsYXRvclxcLSg/OmFmdGVyfGJlZm9yZSl8YWRqdXN0XFwtKD86ZGF0ZSg/OlRpbWUpP3x0aW1lKVxcLXRvXFwtdGltZXpvbmV8YW5hbHl6ZVxcLXN0cmluZ3xhcHBseXxhdmFpbGFibGVcXC0oPzplbnZpcm9ubWVudFxcLXZhcmlhYmxlc3xzeXN0ZW1cXC1wcm9wZXJ0aWVzKXxhdmd8YmFzZVxcLXVyaXxib29sZWFufGNlaWxpbmd8Y29kZXBvaW50cz9cXC0oPzplcXVhbHx0b1xcLXN0cmluZyl8Y29sbGF0aW9uXFwta2V5fGNvbGxlY3Rpb258Y29tcGFyZXxjb25jYXR8Y29udGFpbnMoPzpcXC10b2tlbik/fGNvcHlcXC1vZnxjb3VudHxjdXJyZW50KD86XFwtKT8oPzpkYXRlKD86VGltZSk/fHRpbWV8Z3JvdXAoPzppbmdcXC1rZXkpP3xvdXRwdXRcXC11cml8bWVyZ2VcXC0oPzpncm91cHxrZXkpKT9kYXRhfGRhdGVUaW1lfGRheXM/XFwtZnJvbVxcLSg/OmRhdGUoPzpUaW1lKT98ZHVyYXRpb24pfGRlZXBcXC1lcXVhbHxkZWZhdWx0XFwtKD86Y29sbGF0aW9ufGxhbmd1YWdlKXxkaXN0aW5jdFxcLXZhbHVlc3xkb2N1bWVudCg/OlxcLXVyaSk/fGRvYyg/OlxcLWF2YWlsYWJsZSk/fGVsZW1lbnRcXC0oPzphdmFpbGFibGV8d2l0aFxcLWlkKXxlbXB0eXxlbmNvZGVcXC1mb3JcXC11cml8ZW5kc1xcLXdpdGh8ZW52aXJvbm1lbnRcXC12YXJpYWJsZXxlcnJvcnxlc2NhcGVcXC1odG1sXFwtdXJpfGV4YWN0bHlcXC1vbmV8ZXhpc3RzfGZhbHNlfGZpbHRlcnxmbG9vcnxmb2xkXFwtKD86bGVmdHxyaWdodCl8Zm9yXFwtZWFjaCg/OlxcLXBhaXIpP3xmb3JtYXRcXC0oPzpkYXRlKD86VGltZSk/fHRpbWV8aW50ZWdlcnxudW1iZXIpfGZ1bmN0aW9uXFwtKD86YXJpdHl8YXZhaWxhYmxlfGxvb2t1cHxuYW1lKXxnZW5lcmF0ZVxcLWlkfGhhc1xcLWNoaWxkcmVufGhlYWR8aG91cnNcXC1mcm9tXFwtKD86ZGF0ZVRpbWV8ZHVyYXRpb258dGltZSl8aWQoPzpyZWYpP3xpbXBsaWNpdFxcLXRpbWV6b25lfGluXFwtc2NvcGVcXC1wcmVmaXhlc3xpbmRleFxcLW9mfGlubmVybW9zdHxpbnNlcnRcXC1iZWZvcmV8aXJpXFwtdG9cXC11cml8anNvblxcLSg/OmRvY3x0b1xcLXhtbCl8a2V5fGxhbmd8bGFzdHxsb2FkXFwteHF1ZXJ5XFwtbW9kdWxlfGxvY2FsXFwtbmFtZSg/OlxcLWZyb21cXC1RTmFtZSk/fCg/Omxvd2VyfHVwcGVyKVxcLWNhc2V8bWF0Y2hlc3xtYXh8bWludXRlc1xcLWZyb21cXC0oPzpkYXRlVGltZXxkdXJhdGlvbnx0aW1lKXxtaW58bW9udGhzP1xcLWZyb21cXC0oPzpkYXRlKD86VGltZSk/fGR1cmF0aW9uKXxuYW1lKD86c3BhY2VcXC11cmlcXC0/KD86Zm9yXFwtcHJlZml4fGZyb21cXC1RTmFtZSk/KT98bmlsbGVkfG5vZGVcXC1uYW1lfG5vcm1hbGl6ZVxcLSg/OnNwYWNlfHVuaWNvZGUpfG5vdHxudW1iZXJ8b25lXFwtb3JcXC1tb3JlfG91dGVybW9zdHxwYXJzZVxcLSg/OmlldGZcXC1kYXRlfGpzb24pfHBhdGh8cG9zaXRpb258KD86cHJlZml4XFwtZnJvbVxcLSk/UU5hbWV8cmFuZG9tXFwtbnVtYmVyXFwtZ2VuZXJhdG9yfHJlZ2V4XFwtZ3JvdXB8cmVtb3ZlfHJlcGxhY2V8cmVzb2x2ZVxcLSg/OlFOYW1lfHVyaSl8cmV2ZXJzZXxyb290fHJvdW5kKD86XFwtaGFsZlxcLXRvXFwtZXZlbik/fHNlY29uZHNcXC1mcm9tXFwtKD86ZGF0ZVRpbWV8ZHVyYXRpb258dGltZSl8c25hcHNob3R8c29ydHxzdGFydHNcXC13aXRofHN0YXRpY1xcLWJhc2VcXC11cml8c3RyZWFtXFwtYXZhaWxhYmxlfHN0cmluZ1xcLT8oPzpqb2lufGxlbmd0aHx0b1xcLWNvZGVwb2ludHMpP3xzdWJzZXF1ZW5jZXxzdWJzdHJpbmdcXC0/KD86YWZ0ZXJ8YmVmb3JlKT98c3VtfHN5c3RlbVxcLXByb3BlcnR5fHRhaWx8dGltZXpvbmVcXC1mcm9tXFwtKD86ZGF0ZSg/OlRpbWUpP3x0aW1lKXx0b2tlbml6ZXx0cmFjZXx0cmFucyg/OmZvcm18bGF0ZSl8dHJ1ZXx0eXBlXFwtYXZhaWxhYmxlfHVub3JkZXJlZHx1bnBhcnNlZFxcLSg/OmVudGl0eXx0ZXh0KT9cXC0/KD86cHVibGljXFwtaWR8dXJpfGF2YWlsYWJsZXxsaW5lcyk/fHVyaVxcLWNvbGxlY3Rpb258eG1sXFwtdG9cXC1qc29ufHllYXJzP1xcLWZyb21cXC0oPzpkYXRlKD86VGltZSk/fGR1cmF0aW9uKXx6ZXJvXFwtb3JcXC1vbmUpXFxiLyxcbiAgICB9LCB7XG4gICAgICBiZWdpbjogL1xcYmxvY2FsXFw6LyxcbiAgICAgIGVuZDogL1xcKC8sXG4gICAgICBleGNsdWRlRW5kOiB0cnVlXG4gICAgfSwge1xuICAgICAgYmVnaW46IC9cXGJ6aXBcXDovLFxuICAgICAgZW5kOiAvKD86emlwXFwtZmlsZXwoPzp4bWx8aHRtbHx0ZXh0fGJpbmFyeSlcXC1lbnRyeXwgKD86dXBkYXRlXFwtKT9lbnRyaWVzKVxcYi9cbiAgICB9LCB7XG4gICAgICBiZWdpbjogL1xcYig/OnV0aWx8ZGJ8ZnVuY3R4fGFwcHx4ZG1wfHhtbGRiKVxcOi8sXG4gICAgICBlbmQ6IC9cXCgvLFxuICAgICAgZXhjbHVkZUVuZDogdHJ1ZVxuICAgIH1cbiAgXVxuICB9O1xuXG4gIHZhciBUSVRMRSA9IHtcbiAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgYmVnaW46IC9cXGJ4cXVlcnkgdmVyc2lvbiBcIlsxM11cXC5bMDFdXCJcXHM/KD86ZW5jb2RpbmcgXCIuK1wiKT8vLFxuICAgIGVuZDogLzsvXG4gIH07XG5cbiAgdmFyIFZBUiA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgYmVnaW46IC9bXFwkXVtcXHctOl0rL1xuICB9O1xuXG4gIHZhciBOVU1CRVIgPSB7XG4gICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICBiZWdpbjogJyhcXFxcYjBbMC03X10rKXwoXFxcXGIweFswLTlhLWZBLUZfXSspfChcXFxcYlsxLTldWzAtOV9dKihcXFxcLlswLTlfXSspPyl8WzBfXVxcXFxiJyxcbiAgICByZWxldmFuY2U6IDBcbiAgfTtcblxuICB2YXIgU1RSSU5HID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgdmFyaWFudHM6IFt7XG4gICAgICAgIGJlZ2luOiAvXCIvLFxuICAgICAgICBlbmQ6IC9cIi8sXG4gICAgICAgIGNvbnRhaW5zOiBbe1xuICAgICAgICAgIGJlZ2luOiAvXCJcIi8sXG4gICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBiZWdpbjogLycvLFxuICAgICAgICBlbmQ6IC8nLyxcbiAgICAgICAgY29udGFpbnM6IFt7XG4gICAgICAgICAgYmVnaW46IC8nJy8sXG4gICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgIH1dXG4gICAgICB9XG4gICAgXVxuICB9O1xuXG4gIHZhciBBTk5PVEFUSU9OID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAvJVtcXHctOl0rL1xuICB9O1xuXG4gIHZhciBDT01NRU5UID0ge1xuICAgIGNsYXNzTmFtZTogJ2NvbW1lbnQnLFxuICAgIGJlZ2luOiAnXFxcXCg6JyxcbiAgICBlbmQ6ICc6XFxcXCknLFxuICAgIHJlbGV2YW5jZTogMTAsXG4gICAgY29udGFpbnM6IFt7XG4gICAgICBjbGFzc05hbWU6ICdkb2N0YWcnLFxuICAgICAgYmVnaW46ICdAXFxcXHcrJ1xuICAgIH1dXG4gIH07XG5cbiAgLy8gc2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi94cXVlcnkvI2lkLWNvbXB1dGVkQ29uc3RydWN0b3JzXG4gIC8vIG1vY2hhOiBjb21wdXRlZF9pbmJ1aWx0XG4gIC8vIHNlZSBodHRwczovL3d3dy5yZWdleHBhbC5jb20vP2ZhbT05OTc0OVxuICB2YXIgQ09NUFVURUQgPSB7XG4gICAgYmVnaW5LZXl3b3JkczogJ2VsZW1lbnQgYXR0cmlidXRlIGNvbW1lbnQgZG9jdW1lbnQgcHJvY2Vzc2luZy1pbnN0cnVjdGlvbicsXG4gICAgZW5kOiAneycsXG4gICAgZXhjbHVkZUVuZDogdHJ1ZVxuICB9O1xuXG4gIC8vIG1vY2hhOiBkaXJlY3RfbWV0aG9kXG4gICAgdmFyIERJUkVDVCA9IHtcbiAgICAgIGJlZ2luOiAvPChbXFx3XFwuXzpcXC1dKykoKFxccyouKik9KCd8XCIpLiooJ3xcIikpPz4vLFxuICAgICAgZW5kOiAvKFxcL1tcXHdcXC5fOlxcLV0rPikvLFxuICAgICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgICAgY29udGFpbnM6IFt7XG4gICAgICAgIGJlZ2luOiAneycsXG4gICAgICAgIGVuZDogJ30nLFxuICAgICAgICBzdWJMYW5ndWFnZTogJ3hxdWVyeSdcbiAgICAgIH0sICdzZWxmJ11cbiAgICB9O1xuXG5cbiAgdmFyIENPTlRBSU5TID0gW1xuICAgIFZBUixcbiAgICBCVUlMVF9JTixcbiAgICBTVFJJTkcsXG4gICAgTlVNQkVSLFxuICAgIENPTU1FTlQsXG4gICAgQU5OT1RBVElPTixcbiAgICBUSVRMRSxcbiAgICBDT01QVVRFRCxcbiAgICBESVJFQ1RcbiAgXTtcblxuXG5cbiAgICB2YXIgTUVUSE9EID0ge1xuICAgICAgYmVnaW46ICd7JyxcbiAgICAgIGVuZDogJ30nLFxuICAgICAgY29udGFpbnM6IENPTlRBSU5TXG4gICAgfTtcblxuXG5cbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ3hwYXRoJywgJ3hxJ10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogZmFsc2UsXG4gICAgbGV4ZW1lczogL1thLXpBLVpcXCRdW2EtekEtWjAtOV86XFwtXSovLFxuICAgIGlsbGVnYWw6IC8ocHJvYyl8KGFic3RyYWN0KXwoZXh0ZW5kcyl8KHVudGlsKXwoIykvLFxuICAgIGtleXdvcmRzOiB7XG4gICAgICBrZXl3b3JkOiBLRVlXT1JEUyxcbiAgICAgIHR5cGU6IFRZUEUsXG4gICAgICBsaXRlcmFsOiBMSVRFUkFMXG4gICAgfSxcbiAgICBjb250YWluczogQ09OVEFJTlNcbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9