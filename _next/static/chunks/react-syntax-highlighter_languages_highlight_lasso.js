(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_lasso"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/lasso.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/lasso.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var LASSO_IDENT_RE = '[a-zA-Z_][\\w.]*';
  var LASSO_ANGLE_RE = '<\\?(lasso(script)?|=)';
  var LASSO_CLOSE_RE = '\\]|\\?>';
  var LASSO_KEYWORDS = {
    literal:
      'true false none minimal full all void and or not ' +
      'bw nbw ew new cn ncn lt lte gt gte eq neq rx nrx ft',
    built_in:
      'array date decimal duration integer map pair string tag xml null ' +
      'boolean bytes keyword list locale queue set stack staticarray ' +
      'local var variable global data self inherited currentcapture givenblock',
    keyword:
      'cache database_names database_schemanames database_tablenames ' +
      'define_tag define_type email_batch encode_set html_comment handle ' +
      'handle_error header if inline iterate ljax_target link ' +
      'link_currentaction link_currentgroup link_currentrecord link_detail ' +
      'link_firstgroup link_firstrecord link_lastgroup link_lastrecord ' +
      'link_nextgroup link_nextrecord link_prevgroup link_prevrecord log ' +
      'loop namespace_using output_none portal private protect records ' +
      'referer referrer repeating resultset rows search_args ' +
      'search_arguments select sort_args sort_arguments thread_atomic ' +
      'value_list while abort case else fail_if fail_ifnot fail if_empty ' +
      'if_false if_null if_true loop_abort loop_continue loop_count params ' +
      'params_up return return_value run_children soap_definetag ' +
      'soap_lastrequest soap_lastresponse tag_name ascending average by ' +
      'define descending do equals frozen group handle_failure import in ' +
      'into join let match max min on order parent protected provide public ' +
      'require returnhome skip split_thread sum take thread to trait type ' +
      'where with yield yieldhome'
  };
  var HTML_COMMENT = hljs.COMMENT(
    '<!--',
    '-->',
    {
      relevance: 0
    }
  );
  var LASSO_NOPROCESS = {
    className: 'meta',
    begin: '\\[noprocess\\]',
    starts: {
      end: '\\[/noprocess\\]',
      returnEnd: true,
      contains: [HTML_COMMENT]
    }
  };
  var LASSO_START = {
    className: 'meta',
    begin: '\\[/noprocess|' + LASSO_ANGLE_RE
  };
  var LASSO_DATAMEMBER = {
    className: 'symbol',
    begin: '\'' + LASSO_IDENT_RE + '\''
  };
  var LASSO_CODE = [
    hljs.C_LINE_COMMENT_MODE,
    hljs.C_BLOCK_COMMENT_MODE,
    hljs.inherit(hljs.C_NUMBER_MODE, {begin: hljs.C_NUMBER_RE + '|(-?infinity|NaN)\\b'}),
    hljs.inherit(hljs.APOS_STRING_MODE, {illegal: null}),
    hljs.inherit(hljs.QUOTE_STRING_MODE, {illegal: null}),
    {
      className: 'string',
      begin: '`', end: '`'
    },
    { // variables
      variants: [
        {
          begin: '[#$]' + LASSO_IDENT_RE
        },
        {
          begin: '#', end: '\\d+',
          illegal: '\\W'
        }
      ]
    },
    {
      className: 'type',
      begin: '::\\s*', end: LASSO_IDENT_RE,
      illegal: '\\W'
    },
    {
      className: 'params',
      variants: [
        {
          begin: '-(?!infinity)' + LASSO_IDENT_RE,
          relevance: 0
        },
        {
          begin: '(\\.\\.\\.)'
        }
      ]
    },
    {
      begin: /(->|\.)\s*/,
      relevance: 0,
      contains: [LASSO_DATAMEMBER]
    },
    {
      className: 'class',
      beginKeywords: 'define',
      returnEnd: true, end: '\\(|=>',
      contains: [
        hljs.inherit(hljs.TITLE_MODE, {begin: LASSO_IDENT_RE + '(=(?!>))?|[-+*/%](?!>)'})
      ]
    }
  ];
  return {
    aliases: ['ls', 'lassoscript'],
    case_insensitive: true,
    lexemes: LASSO_IDENT_RE + '|&[lg]t;',
    keywords: LASSO_KEYWORDS,
    contains: [
      {
        className: 'meta',
        begin: LASSO_CLOSE_RE,
        relevance: 0,
        starts: { // markup
          end: '\\[|' + LASSO_ANGLE_RE,
          returnEnd: true,
          relevance: 0,
          contains: [HTML_COMMENT]
        }
      },
      LASSO_NOPROCESS,
      LASSO_START,
      {
        className: 'meta',
        begin: '\\[no_square_brackets',
        starts: {
          end: '\\[/no_square_brackets\\]', // not implemented in the language
          lexemes: LASSO_IDENT_RE + '|&[lg]t;',
          keywords: LASSO_KEYWORDS,
          contains: [
            {
              className: 'meta',
              begin: LASSO_CLOSE_RE,
              relevance: 0,
              starts: {
                end: '\\[noprocess\\]|' + LASSO_ANGLE_RE,
                returnEnd: true,
                contains: [HTML_COMMENT]
              }
            },
            LASSO_NOPROCESS,
            LASSO_START
          ].concat(LASSO_CODE)
        }
      },
      {
        className: 'meta',
        begin: '\\[',
        relevance: 0
      },
      {
        className: 'meta',
        begin: '^#!', end:'lasso9$',
        relevance: 10
      }
    ].concat(LASSO_CODE)
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9sYXNzby5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2xhc3NvLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgTEFTU09fSURFTlRfUkUgPSAnW2EtekEtWl9dW1xcXFx3Ll0qJztcbiAgdmFyIExBU1NPX0FOR0xFX1JFID0gJzxcXFxcPyhsYXNzbyhzY3JpcHQpP3w9KSc7XG4gIHZhciBMQVNTT19DTE9TRV9SRSA9ICdcXFxcXXxcXFxcPz4nO1xuICB2YXIgTEFTU09fS0VZV09SRFMgPSB7XG4gICAgbGl0ZXJhbDpcbiAgICAgICd0cnVlIGZhbHNlIG5vbmUgbWluaW1hbCBmdWxsIGFsbCB2b2lkIGFuZCBvciBub3QgJyArXG4gICAgICAnYncgbmJ3IGV3IG5ldyBjbiBuY24gbHQgbHRlIGd0IGd0ZSBlcSBuZXEgcnggbnJ4IGZ0JyxcbiAgICBidWlsdF9pbjpcbiAgICAgICdhcnJheSBkYXRlIGRlY2ltYWwgZHVyYXRpb24gaW50ZWdlciBtYXAgcGFpciBzdHJpbmcgdGFnIHhtbCBudWxsICcgK1xuICAgICAgJ2Jvb2xlYW4gYnl0ZXMga2V5d29yZCBsaXN0IGxvY2FsZSBxdWV1ZSBzZXQgc3RhY2sgc3RhdGljYXJyYXkgJyArXG4gICAgICAnbG9jYWwgdmFyIHZhcmlhYmxlIGdsb2JhbCBkYXRhIHNlbGYgaW5oZXJpdGVkIGN1cnJlbnRjYXB0dXJlIGdpdmVuYmxvY2snLFxuICAgIGtleXdvcmQ6XG4gICAgICAnY2FjaGUgZGF0YWJhc2VfbmFtZXMgZGF0YWJhc2Vfc2NoZW1hbmFtZXMgZGF0YWJhc2VfdGFibGVuYW1lcyAnICtcbiAgICAgICdkZWZpbmVfdGFnIGRlZmluZV90eXBlIGVtYWlsX2JhdGNoIGVuY29kZV9zZXQgaHRtbF9jb21tZW50IGhhbmRsZSAnICtcbiAgICAgICdoYW5kbGVfZXJyb3IgaGVhZGVyIGlmIGlubGluZSBpdGVyYXRlIGxqYXhfdGFyZ2V0IGxpbmsgJyArXG4gICAgICAnbGlua19jdXJyZW50YWN0aW9uIGxpbmtfY3VycmVudGdyb3VwIGxpbmtfY3VycmVudHJlY29yZCBsaW5rX2RldGFpbCAnICtcbiAgICAgICdsaW5rX2ZpcnN0Z3JvdXAgbGlua19maXJzdHJlY29yZCBsaW5rX2xhc3Rncm91cCBsaW5rX2xhc3RyZWNvcmQgJyArXG4gICAgICAnbGlua19uZXh0Z3JvdXAgbGlua19uZXh0cmVjb3JkIGxpbmtfcHJldmdyb3VwIGxpbmtfcHJldnJlY29yZCBsb2cgJyArXG4gICAgICAnbG9vcCBuYW1lc3BhY2VfdXNpbmcgb3V0cHV0X25vbmUgcG9ydGFsIHByaXZhdGUgcHJvdGVjdCByZWNvcmRzICcgK1xuICAgICAgJ3JlZmVyZXIgcmVmZXJyZXIgcmVwZWF0aW5nIHJlc3VsdHNldCByb3dzIHNlYXJjaF9hcmdzICcgK1xuICAgICAgJ3NlYXJjaF9hcmd1bWVudHMgc2VsZWN0IHNvcnRfYXJncyBzb3J0X2FyZ3VtZW50cyB0aHJlYWRfYXRvbWljICcgK1xuICAgICAgJ3ZhbHVlX2xpc3Qgd2hpbGUgYWJvcnQgY2FzZSBlbHNlIGZhaWxfaWYgZmFpbF9pZm5vdCBmYWlsIGlmX2VtcHR5ICcgK1xuICAgICAgJ2lmX2ZhbHNlIGlmX251bGwgaWZfdHJ1ZSBsb29wX2Fib3J0IGxvb3BfY29udGludWUgbG9vcF9jb3VudCBwYXJhbXMgJyArXG4gICAgICAncGFyYW1zX3VwIHJldHVybiByZXR1cm5fdmFsdWUgcnVuX2NoaWxkcmVuIHNvYXBfZGVmaW5ldGFnICcgK1xuICAgICAgJ3NvYXBfbGFzdHJlcXVlc3Qgc29hcF9sYXN0cmVzcG9uc2UgdGFnX25hbWUgYXNjZW5kaW5nIGF2ZXJhZ2UgYnkgJyArXG4gICAgICAnZGVmaW5lIGRlc2NlbmRpbmcgZG8gZXF1YWxzIGZyb3plbiBncm91cCBoYW5kbGVfZmFpbHVyZSBpbXBvcnQgaW4gJyArXG4gICAgICAnaW50byBqb2luIGxldCBtYXRjaCBtYXggbWluIG9uIG9yZGVyIHBhcmVudCBwcm90ZWN0ZWQgcHJvdmlkZSBwdWJsaWMgJyArXG4gICAgICAncmVxdWlyZSByZXR1cm5ob21lIHNraXAgc3BsaXRfdGhyZWFkIHN1bSB0YWtlIHRocmVhZCB0byB0cmFpdCB0eXBlICcgK1xuICAgICAgJ3doZXJlIHdpdGggeWllbGQgeWllbGRob21lJ1xuICB9O1xuICB2YXIgSFRNTF9DT01NRU5UID0gaGxqcy5DT01NRU5UKFxuICAgICc8IS0tJyxcbiAgICAnLS0+JyxcbiAgICB7XG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9XG4gICk7XG4gIHZhciBMQVNTT19OT1BST0NFU1MgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICdcXFxcW25vcHJvY2Vzc1xcXFxdJyxcbiAgICBzdGFydHM6IHtcbiAgICAgIGVuZDogJ1xcXFxbL25vcHJvY2Vzc1xcXFxdJyxcbiAgICAgIHJldHVybkVuZDogdHJ1ZSxcbiAgICAgIGNvbnRhaW5zOiBbSFRNTF9DT01NRU5UXVxuICAgIH1cbiAgfTtcbiAgdmFyIExBU1NPX1NUQVJUID0ge1xuICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgIGJlZ2luOiAnXFxcXFsvbm9wcm9jZXNzfCcgKyBMQVNTT19BTkdMRV9SRVxuICB9O1xuICB2YXIgTEFTU09fREFUQU1FTUJFUiA9IHtcbiAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgIGJlZ2luOiAnXFwnJyArIExBU1NPX0lERU5UX1JFICsgJ1xcJydcbiAgfTtcbiAgdmFyIExBU1NPX0NPREUgPSBbXG4gICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgaGxqcy5pbmhlcml0KGhsanMuQ19OVU1CRVJfTU9ERSwge2JlZ2luOiBobGpzLkNfTlVNQkVSX1JFICsgJ3woLT9pbmZpbml0eXxOYU4pXFxcXGInfSksXG4gICAgaGxqcy5pbmhlcml0KGhsanMuQVBPU19TVFJJTkdfTU9ERSwge2lsbGVnYWw6IG51bGx9KSxcbiAgICBobGpzLmluaGVyaXQoaGxqcy5RVU9URV9TVFJJTkdfTU9ERSwge2lsbGVnYWw6IG51bGx9KSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgYmVnaW46ICdgJywgZW5kOiAnYCdcbiAgICB9LFxuICAgIHsgLy8gdmFyaWFibGVzXG4gICAgICB2YXJpYW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdbIyRdJyArIExBU1NPX0lERU5UX1JFXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBiZWdpbjogJyMnLCBlbmQ6ICdcXFxcZCsnLFxuICAgICAgICAgIGlsbGVnYWw6ICdcXFxcVydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICBiZWdpbjogJzo6XFxcXHMqJywgZW5kOiBMQVNTT19JREVOVF9SRSxcbiAgICAgIGlsbGVnYWw6ICdcXFxcVydcbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ3BhcmFtcycsXG4gICAgICB2YXJpYW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICctKD8haW5maW5pdHkpJyArIExBU1NPX0lERU5UX1JFLFxuICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICcoXFxcXC5cXFxcLlxcXFwuKSdcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgYmVnaW46IC8oLT58XFwuKVxccyovLFxuICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgY29udGFpbnM6IFtMQVNTT19EQVRBTUVNQkVSXVxuICAgIH0sXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgYmVnaW5LZXl3b3JkczogJ2RlZmluZScsXG4gICAgICByZXR1cm5FbmQ6IHRydWUsIGVuZDogJ1xcXFwofD0+JyxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIGhsanMuaW5oZXJpdChobGpzLlRJVExFX01PREUsIHtiZWdpbjogTEFTU09fSURFTlRfUkUgKyAnKD0oPyE+KSk/fFstKyovJV0oPyE+KSd9KVxuICAgICAgXVxuICAgIH1cbiAgXTtcbiAgcmV0dXJuIHtcbiAgICBhbGlhc2VzOiBbJ2xzJywgJ2xhc3Nvc2NyaXB0J10sXG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBsZXhlbWVzOiBMQVNTT19JREVOVF9SRSArICd8JltsZ110OycsXG4gICAga2V5d29yZHM6IExBU1NPX0tFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogTEFTU09fQ0xPU0VfUkUsXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgc3RhcnRzOiB7IC8vIG1hcmt1cFxuICAgICAgICAgIGVuZDogJ1xcXFxbfCcgKyBMQVNTT19BTkdMRV9SRSxcbiAgICAgICAgICByZXR1cm5FbmQ6IHRydWUsXG4gICAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICAgIGNvbnRhaW5zOiBbSFRNTF9DT01NRU5UXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgTEFTU09fTk9QUk9DRVNTLFxuICAgICAgTEFTU09fU1RBUlQsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ1xcXFxbbm9fc3F1YXJlX2JyYWNrZXRzJyxcbiAgICAgICAgc3RhcnRzOiB7XG4gICAgICAgICAgZW5kOiAnXFxcXFsvbm9fc3F1YXJlX2JyYWNrZXRzXFxcXF0nLCAvLyBub3QgaW1wbGVtZW50ZWQgaW4gdGhlIGxhbmd1YWdlXG4gICAgICAgICAgbGV4ZW1lczogTEFTU09fSURFTlRfUkUgKyAnfCZbbGdddDsnLFxuICAgICAgICAgIGtleXdvcmRzOiBMQVNTT19LRVlXT1JEUyxcbiAgICAgICAgICBjb250YWluczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgICAgICAgYmVnaW46IExBU1NPX0NMT1NFX1JFLFxuICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICAgIHN0YXJ0czoge1xuICAgICAgICAgICAgICAgIGVuZDogJ1xcXFxbbm9wcm9jZXNzXFxcXF18JyArIExBU1NPX0FOR0xFX1JFLFxuICAgICAgICAgICAgICAgIHJldHVybkVuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250YWluczogW0hUTUxfQ09NTUVOVF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIExBU1NPX05PUFJPQ0VTUyxcbiAgICAgICAgICAgIExBU1NPX1NUQVJUXG4gICAgICAgICAgXS5jb25jYXQoTEFTU09fQ09ERSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnXFxcXFsnLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJ14jIScsIGVuZDonbGFzc285JCcsXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH1cbiAgICBdLmNvbmNhdChMQVNTT19DT0RFKVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9