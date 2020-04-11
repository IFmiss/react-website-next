(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_rust"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/rust.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/rust.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var NUM_SUFFIX = '([ui](8|16|32|64|128|size)|f(32|64))\?';
  var KEYWORDS =
    'abstract as async await become box break const continue crate do dyn ' +
    'else enum extern false final fn for if impl in let loop macro match mod ' +
    'move mut override priv pub ref return self Self static struct super ' +
    'trait true try type typeof unsafe unsized use virtual where while yield';
  var BUILTINS =
    // functions
    'drop ' +
    // types
    'i8 i16 i32 i64 i128 isize ' +
    'u8 u16 u32 u64 u128 usize ' +
    'f32 f64 ' +
    'str char bool ' +
    'Box Option Result String Vec ' +
    // traits
    'Copy Send Sized Sync Drop Fn FnMut FnOnce ToOwned Clone Debug ' +
    'PartialEq PartialOrd Eq Ord AsRef AsMut Into From Default Iterator ' +
    'Extend IntoIterator DoubleEndedIterator ExactSizeIterator ' +
    'SliceConcatExt ToString ' +
    // macros
    'assert! assert_eq! bitflags! bytes! cfg! col! concat! concat_idents! ' +
    'debug_assert! debug_assert_eq! env! panic! file! format! format_args! ' +
    'include_bin! include_str! line! local_data_key! module_path! ' +
    'option_env! print! println! select! stringify! try! unimplemented! ' +
    'unreachable! vec! write! writeln! macro_rules! assert_ne! debug_assert_ne!';
  return {
    aliases: ['rs'],
    keywords: {
      keyword:
        KEYWORDS,
      literal:
        'true false Some None Ok Err',
      built_in:
        BUILTINS
    },
    lexemes: hljs.IDENT_RE + '!?',
    illegal: '</',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.COMMENT('/\\*', '\\*/', {contains: ['self']}),
      hljs.inherit(hljs.QUOTE_STRING_MODE, {begin: /b?"/, illegal: null}),
      {
        className: 'string',
        variants: [
           { begin: /r(#*)"(.|\n)*?"\1(?!#)/ },
           { begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/ }
        ]
      },
      {
        className: 'symbol',
        begin: /'[a-zA-Z_][a-zA-Z0-9_]*/
      },
      {
        className: 'number',
        variants: [
          { begin: '\\b0b([01_]+)' + NUM_SUFFIX },
          { begin: '\\b0o([0-7_]+)' + NUM_SUFFIX },
          { begin: '\\b0x([A-Fa-f0-9_]+)' + NUM_SUFFIX },
          { begin: '\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)' +
                   NUM_SUFFIX
          }
        ],
        relevance: 0
      },
      {
        className: 'function',
        beginKeywords: 'fn', end: '(\\(|<)', excludeEnd: true,
        contains: [hljs.UNDERSCORE_TITLE_MODE]
      },
      {
        className: 'meta',
        begin: '#\\!?\\[', end: '\\]',
        contains: [
          {
            className: 'meta-string',
            begin: /"/, end: /"/
          }
        ]
      },
      {
        className: 'class',
        beginKeywords: 'type', end: ';',
        contains: [
          hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, {endsParent: true})
        ],
        illegal: '\\S'
      },
      {
        className: 'class',
        beginKeywords: 'trait enum struct union', end: '{',
        contains: [
          hljs.inherit(hljs.UNDERSCORE_TITLE_MODE, {endsParent: true})
        ],
        illegal: '[\\w\\d]'
      },
      {
        begin: hljs.IDENT_RE + '::',
        keywords: {built_in: BUILTINS}
      },
      {
        begin: '->'
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9ydXN0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcnVzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIE5VTV9TVUZGSVggPSAnKFt1aV0oOHwxNnwzMnw2NHwxMjh8c2l6ZSl8ZigzMnw2NCkpXFw/JztcbiAgdmFyIEtFWVdPUkRTID1cbiAgICAnYWJzdHJhY3QgYXMgYXN5bmMgYXdhaXQgYmVjb21lIGJveCBicmVhayBjb25zdCBjb250aW51ZSBjcmF0ZSBkbyBkeW4gJyArXG4gICAgJ2Vsc2UgZW51bSBleHRlcm4gZmFsc2UgZmluYWwgZm4gZm9yIGlmIGltcGwgaW4gbGV0IGxvb3AgbWFjcm8gbWF0Y2ggbW9kICcgK1xuICAgICdtb3ZlIG11dCBvdmVycmlkZSBwcml2IHB1YiByZWYgcmV0dXJuIHNlbGYgU2VsZiBzdGF0aWMgc3RydWN0IHN1cGVyICcgK1xuICAgICd0cmFpdCB0cnVlIHRyeSB0eXBlIHR5cGVvZiB1bnNhZmUgdW5zaXplZCB1c2UgdmlydHVhbCB3aGVyZSB3aGlsZSB5aWVsZCc7XG4gIHZhciBCVUlMVElOUyA9XG4gICAgLy8gZnVuY3Rpb25zXG4gICAgJ2Ryb3AgJyArXG4gICAgLy8gdHlwZXNcbiAgICAnaTggaTE2IGkzMiBpNjQgaTEyOCBpc2l6ZSAnICtcbiAgICAndTggdTE2IHUzMiB1NjQgdTEyOCB1c2l6ZSAnICtcbiAgICAnZjMyIGY2NCAnICtcbiAgICAnc3RyIGNoYXIgYm9vbCAnICtcbiAgICAnQm94IE9wdGlvbiBSZXN1bHQgU3RyaW5nIFZlYyAnICtcbiAgICAvLyB0cmFpdHNcbiAgICAnQ29weSBTZW5kIFNpemVkIFN5bmMgRHJvcCBGbiBGbk11dCBGbk9uY2UgVG9Pd25lZCBDbG9uZSBEZWJ1ZyAnICtcbiAgICAnUGFydGlhbEVxIFBhcnRpYWxPcmQgRXEgT3JkIEFzUmVmIEFzTXV0IEludG8gRnJvbSBEZWZhdWx0IEl0ZXJhdG9yICcgK1xuICAgICdFeHRlbmQgSW50b0l0ZXJhdG9yIERvdWJsZUVuZGVkSXRlcmF0b3IgRXhhY3RTaXplSXRlcmF0b3IgJyArXG4gICAgJ1NsaWNlQ29uY2F0RXh0IFRvU3RyaW5nICcgK1xuICAgIC8vIG1hY3Jvc1xuICAgICdhc3NlcnQhIGFzc2VydF9lcSEgYml0ZmxhZ3MhIGJ5dGVzISBjZmchIGNvbCEgY29uY2F0ISBjb25jYXRfaWRlbnRzISAnICtcbiAgICAnZGVidWdfYXNzZXJ0ISBkZWJ1Z19hc3NlcnRfZXEhIGVudiEgcGFuaWMhIGZpbGUhIGZvcm1hdCEgZm9ybWF0X2FyZ3MhICcgK1xuICAgICdpbmNsdWRlX2JpbiEgaW5jbHVkZV9zdHIhIGxpbmUhIGxvY2FsX2RhdGFfa2V5ISBtb2R1bGVfcGF0aCEgJyArXG4gICAgJ29wdGlvbl9lbnYhIHByaW50ISBwcmludGxuISBzZWxlY3QhIHN0cmluZ2lmeSEgdHJ5ISB1bmltcGxlbWVudGVkISAnICtcbiAgICAndW5yZWFjaGFibGUhIHZlYyEgd3JpdGUhIHdyaXRlbG4hIG1hY3JvX3J1bGVzISBhc3NlcnRfbmUhIGRlYnVnX2Fzc2VydF9uZSEnO1xuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsncnMnXSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgS0VZV09SRFMsXG4gICAgICBsaXRlcmFsOlxuICAgICAgICAndHJ1ZSBmYWxzZSBTb21lIE5vbmUgT2sgRXJyJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICBCVUlMVElOU1xuICAgIH0sXG4gICAgbGV4ZW1lczogaGxqcy5JREVOVF9SRSArICchPycsXG4gICAgaWxsZWdhbDogJzwvJyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5DT01NRU5UKCcvXFxcXConLCAnXFxcXCovJywge2NvbnRhaW5zOiBbJ3NlbGYnXX0pLFxuICAgICAgaGxqcy5pbmhlcml0KGhsanMuUVVPVEVfU1RSSU5HX01PREUsIHtiZWdpbjogL2I/XCIvLCBpbGxlZ2FsOiBudWxsfSksXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgIHsgYmVnaW46IC9yKCMqKVwiKC58XFxuKSo/XCJcXDEoPyEjKS8gfSxcbiAgICAgICAgICAgeyBiZWdpbjogL2I/J1xcXFw/KHhcXHd7Mn18dVxcd3s0fXxVXFx3ezh9fC4pJy8gfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogLydbYS16QS1aX11bYS16QS1aMC05X10qL1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7IGJlZ2luOiAnXFxcXGIwYihbMDFfXSspJyArIE5VTV9TVUZGSVggfSxcbiAgICAgICAgICB7IGJlZ2luOiAnXFxcXGIwbyhbMC03X10rKScgKyBOVU1fU1VGRklYIH0sXG4gICAgICAgICAgeyBiZWdpbjogJ1xcXFxiMHgoW0EtRmEtZjAtOV9dKyknICsgTlVNX1NVRkZJWCB9LFxuICAgICAgICAgIHsgYmVnaW46ICdcXFxcYihcXFxcZFtcXFxcZF9dKihcXFxcLlswLTlfXSspPyhbZUVdWystXT9bMC05X10rKT8pJyArXG4gICAgICAgICAgICAgICAgICAgTlVNX1NVRkZJWFxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdmdW5jdGlvbicsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdmbicsIGVuZDogJyhcXFxcKHw8KScsIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbaGxqcy5VTkRFUlNDT1JFX1RJVExFX01PREVdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICcjXFxcXCE/XFxcXFsnLCBlbmQ6ICdcXFxcXScsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnLFxuICAgICAgICAgICAgYmVnaW46IC9cIi8sIGVuZDogL1wiL1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnY2xhc3MnLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAndHlwZScsIGVuZDogJzsnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSwge2VuZHNQYXJlbnQ6IHRydWV9KVxuICAgICAgICBdLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXFMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICd0cmFpdCBlbnVtIHN0cnVjdCB1bmlvbicsIGVuZDogJ3snLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSwge2VuZHNQYXJlbnQ6IHRydWV9KVxuICAgICAgICBdLFxuICAgICAgICBpbGxlZ2FsOiAnW1xcXFx3XFxcXGRdJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IGhsanMuSURFTlRfUkUgKyAnOjonLFxuICAgICAgICBrZXl3b3Jkczoge2J1aWx0X2luOiBCVUlMVElOU31cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnLT4nXG4gICAgICB9XG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==