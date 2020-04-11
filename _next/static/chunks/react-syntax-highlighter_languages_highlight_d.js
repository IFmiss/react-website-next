(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_d"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/d.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/d.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = /**
 * Known issues:
 *
 * - invalid hex string literals will be recognized as a double quoted strings
 *   but 'x' at the beginning of string will not be matched
 *
 * - delimited string literals are not checked for matching end delimiter
 *   (not possible to do with js regexp)
 *
 * - content of token string is colored as a string (i.e. no keyword coloring inside a token string)
 *   also, content of token string is not validated to contain only valid D tokens
 *
 * - special token sequence rule is not strictly following D grammar (anything following #line
 *   up to the end of line is matched as special token sequence)
 */

function(hljs) {
  /**
   * Language keywords
   *
   * @type {Object}
   */
  var D_KEYWORDS = {
    keyword:
      'abstract alias align asm assert auto body break byte case cast catch class ' +
      'const continue debug default delete deprecated do else enum export extern final ' +
      'finally for foreach foreach_reverse|10 goto if immutable import in inout int ' +
      'interface invariant is lazy macro mixin module new nothrow out override package ' +
      'pragma private protected public pure ref return scope shared static struct ' +
      'super switch synchronized template this throw try typedef typeid typeof union ' +
      'unittest version void volatile while with __FILE__ __LINE__ __gshared|10 ' +
      '__thread __traits __DATE__ __EOF__ __TIME__ __TIMESTAMP__ __VENDOR__ __VERSION__',
    built_in:
      'bool cdouble cent cfloat char creal dchar delegate double dstring float function ' +
      'idouble ifloat ireal long real short string ubyte ucent uint ulong ushort wchar ' +
      'wstring',
    literal:
      'false null true'
  };

  /**
   * Number literal regexps
   *
   * @type {String}
   */
  var decimal_integer_re = '(0|[1-9][\\d_]*)',
    decimal_integer_nosus_re = '(0|[1-9][\\d_]*|\\d[\\d_]*|[\\d_]+?\\d)',
    binary_integer_re = '0[bB][01_]+',
    hexadecimal_digits_re = '([\\da-fA-F][\\da-fA-F_]*|_[\\da-fA-F][\\da-fA-F_]*)',
    hexadecimal_integer_re = '0[xX]' + hexadecimal_digits_re,

    decimal_exponent_re = '([eE][+-]?' + decimal_integer_nosus_re + ')',
    decimal_float_re = '(' + decimal_integer_nosus_re + '(\\.\\d*|' + decimal_exponent_re + ')|' +
                '\\d+\\.' + decimal_integer_nosus_re + decimal_integer_nosus_re + '|' +
                '\\.' + decimal_integer_re + decimal_exponent_re + '?' +
              ')',
    hexadecimal_float_re = '(0[xX](' +
                  hexadecimal_digits_re + '\\.' + hexadecimal_digits_re + '|'+
                  '\\.?' + hexadecimal_digits_re +
                 ')[pP][+-]?' + decimal_integer_nosus_re + ')',

    integer_re = '(' +
      decimal_integer_re + '|' +
      binary_integer_re  + '|' +
       hexadecimal_integer_re   +
    ')',

    float_re = '(' +
      hexadecimal_float_re + '|' +
      decimal_float_re  +
    ')';

  /**
   * Escape sequence supported in D string and character literals
   *
   * @type {String}
   */
  var escape_sequence_re = '\\\\(' +
              '[\'"\\?\\\\abfnrtv]|' +  // common escapes
              'u[\\dA-Fa-f]{4}|' +     // four hex digit unicode codepoint
              '[0-7]{1,3}|' +       // one to three octal digit ascii char code
              'x[\\dA-Fa-f]{2}|' +    // two hex digit ascii char code
              'U[\\dA-Fa-f]{8}' +      // eight hex digit unicode codepoint
              ')|' +
              '&[a-zA-Z\\d]{2,};';      // named character entity

  /**
   * D integer number literals
   *
   * @type {Object}
   */
  var D_INTEGER_MODE = {
    className: 'number',
      begin: '\\b' + integer_re + '(L|u|U|Lu|LU|uL|UL)?',
      relevance: 0
  };

  /**
   * [D_FLOAT_MODE description]
   * @type {Object}
   */
  var D_FLOAT_MODE = {
    className: 'number',
    begin: '\\b(' +
        float_re + '([fF]|L|i|[fF]i|Li)?|' +
        integer_re + '(i|[fF]i|Li)' +
      ')',
    relevance: 0
  };

  /**
   * D character literal
   *
   * @type {Object}
   */
  var D_CHARACTER_MODE = {
    className: 'string',
    begin: '\'(' + escape_sequence_re + '|.)', end: '\'',
    illegal: '.'
  };

  /**
   * D string escape sequence
   *
   * @type {Object}
   */
  var D_ESCAPE_SEQUENCE = {
    begin: escape_sequence_re,
    relevance: 0
  };

  /**
   * D double quoted string literal
   *
   * @type {Object}
   */
  var D_STRING_MODE = {
    className: 'string',
    begin: '"',
    contains: [D_ESCAPE_SEQUENCE],
    end: '"[cwd]?'
  };

  /**
   * D wysiwyg and delimited string literals
   *
   * @type {Object}
   */
  var D_WYSIWYG_DELIMITED_STRING_MODE = {
    className: 'string',
    begin: '[rq]"',
    end: '"[cwd]?',
    relevance: 5
  };

  /**
   * D alternate wysiwyg string literal
   *
   * @type {Object}
   */
  var D_ALTERNATE_WYSIWYG_STRING_MODE = {
    className: 'string',
    begin: '`',
    end: '`[cwd]?'
  };

  /**
   * D hexadecimal string literal
   *
   * @type {Object}
   */
  var D_HEX_STRING_MODE = {
    className: 'string',
    begin: 'x"[\\da-fA-F\\s\\n\\r]*"[cwd]?',
    relevance: 10
  };

  /**
   * D delimited string literal
   *
   * @type {Object}
   */
  var D_TOKEN_STRING_MODE = {
    className: 'string',
    begin: 'q"\\{',
    end: '\\}"'
  };

  /**
   * Hashbang support
   *
   * @type {Object}
   */
  var D_HASHBANG_MODE = {
    className: 'meta',
    begin: '^#!',
    end: '$',
    relevance: 5
  };

  /**
   * D special token sequence
   *
   * @type {Object}
   */
  var D_SPECIAL_TOKEN_SEQUENCE_MODE = {
    className: 'meta',
    begin: '#(line)',
    end: '$',
    relevance: 5
  };

  /**
   * D attributes
   *
   * @type {Object}
   */
  var D_ATTRIBUTE_MODE = {
    className: 'keyword',
    begin: '@[a-zA-Z_][a-zA-Z_\\d]*'
  };

  /**
   * D nesting comment
   *
   * @type {Object}
   */
  var D_NESTING_COMMENT_MODE = hljs.COMMENT(
    '\\/\\+',
    '\\+\\/',
    {
      contains: ['self'],
      relevance: 10
    }
  );

  return {
    lexemes: hljs.UNDERSCORE_IDENT_RE,
    keywords: D_KEYWORDS,
    contains: [
      hljs.C_LINE_COMMENT_MODE,
        hljs.C_BLOCK_COMMENT_MODE,
        D_NESTING_COMMENT_MODE,
        D_HEX_STRING_MODE,
        D_STRING_MODE,
        D_WYSIWYG_DELIMITED_STRING_MODE,
        D_ALTERNATE_WYSIWYG_STRING_MODE,
        D_TOKEN_STRING_MODE,
        D_FLOAT_MODE,
        D_INTEGER_MODE,
        D_CHARACTER_MODE,
        D_HASHBANG_MODE,
        D_SPECIAL_TOKEN_SEQUENCE_MODE,
        D_ATTRIBUTE_MODE
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9kLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IC8qKlxuICogS25vd24gaXNzdWVzOlxuICpcbiAqIC0gaW52YWxpZCBoZXggc3RyaW5nIGxpdGVyYWxzIHdpbGwgYmUgcmVjb2duaXplZCBhcyBhIGRvdWJsZSBxdW90ZWQgc3RyaW5nc1xuICogICBidXQgJ3gnIGF0IHRoZSBiZWdpbm5pbmcgb2Ygc3RyaW5nIHdpbGwgbm90IGJlIG1hdGNoZWRcbiAqXG4gKiAtIGRlbGltaXRlZCBzdHJpbmcgbGl0ZXJhbHMgYXJlIG5vdCBjaGVja2VkIGZvciBtYXRjaGluZyBlbmQgZGVsaW1pdGVyXG4gKiAgIChub3QgcG9zc2libGUgdG8gZG8gd2l0aCBqcyByZWdleHApXG4gKlxuICogLSBjb250ZW50IG9mIHRva2VuIHN0cmluZyBpcyBjb2xvcmVkIGFzIGEgc3RyaW5nIChpLmUuIG5vIGtleXdvcmQgY29sb3JpbmcgaW5zaWRlIGEgdG9rZW4gc3RyaW5nKVxuICogICBhbHNvLCBjb250ZW50IG9mIHRva2VuIHN0cmluZyBpcyBub3QgdmFsaWRhdGVkIHRvIGNvbnRhaW4gb25seSB2YWxpZCBEIHRva2Vuc1xuICpcbiAqIC0gc3BlY2lhbCB0b2tlbiBzZXF1ZW5jZSBydWxlIGlzIG5vdCBzdHJpY3RseSBmb2xsb3dpbmcgRCBncmFtbWFyIChhbnl0aGluZyBmb2xsb3dpbmcgI2xpbmVcbiAqICAgdXAgdG8gdGhlIGVuZCBvZiBsaW5lIGlzIG1hdGNoZWQgYXMgc3BlY2lhbCB0b2tlbiBzZXF1ZW5jZSlcbiAqL1xuXG5mdW5jdGlvbihobGpzKSB7XG4gIC8qKlxuICAgKiBMYW5ndWFnZSBrZXl3b3Jkc1xuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIERfS0VZV09SRFMgPSB7XG4gICAga2V5d29yZDpcbiAgICAgICdhYnN0cmFjdCBhbGlhcyBhbGlnbiBhc20gYXNzZXJ0IGF1dG8gYm9keSBicmVhayBieXRlIGNhc2UgY2FzdCBjYXRjaCBjbGFzcyAnICtcbiAgICAgICdjb25zdCBjb250aW51ZSBkZWJ1ZyBkZWZhdWx0IGRlbGV0ZSBkZXByZWNhdGVkIGRvIGVsc2UgZW51bSBleHBvcnQgZXh0ZXJuIGZpbmFsICcgK1xuICAgICAgJ2ZpbmFsbHkgZm9yIGZvcmVhY2ggZm9yZWFjaF9yZXZlcnNlfDEwIGdvdG8gaWYgaW1tdXRhYmxlIGltcG9ydCBpbiBpbm91dCBpbnQgJyArXG4gICAgICAnaW50ZXJmYWNlIGludmFyaWFudCBpcyBsYXp5IG1hY3JvIG1peGluIG1vZHVsZSBuZXcgbm90aHJvdyBvdXQgb3ZlcnJpZGUgcGFja2FnZSAnICtcbiAgICAgICdwcmFnbWEgcHJpdmF0ZSBwcm90ZWN0ZWQgcHVibGljIHB1cmUgcmVmIHJldHVybiBzY29wZSBzaGFyZWQgc3RhdGljIHN0cnVjdCAnICtcbiAgICAgICdzdXBlciBzd2l0Y2ggc3luY2hyb25pemVkIHRlbXBsYXRlIHRoaXMgdGhyb3cgdHJ5IHR5cGVkZWYgdHlwZWlkIHR5cGVvZiB1bmlvbiAnICtcbiAgICAgICd1bml0dGVzdCB2ZXJzaW9uIHZvaWQgdm9sYXRpbGUgd2hpbGUgd2l0aCBfX0ZJTEVfXyBfX0xJTkVfXyBfX2dzaGFyZWR8MTAgJyArXG4gICAgICAnX190aHJlYWQgX190cmFpdHMgX19EQVRFX18gX19FT0ZfXyBfX1RJTUVfXyBfX1RJTUVTVEFNUF9fIF9fVkVORE9SX18gX19WRVJTSU9OX18nLFxuICAgIGJ1aWx0X2luOlxuICAgICAgJ2Jvb2wgY2RvdWJsZSBjZW50IGNmbG9hdCBjaGFyIGNyZWFsIGRjaGFyIGRlbGVnYXRlIGRvdWJsZSBkc3RyaW5nIGZsb2F0IGZ1bmN0aW9uICcgK1xuICAgICAgJ2lkb3VibGUgaWZsb2F0IGlyZWFsIGxvbmcgcmVhbCBzaG9ydCBzdHJpbmcgdWJ5dGUgdWNlbnQgdWludCB1bG9uZyB1c2hvcnQgd2NoYXIgJyArXG4gICAgICAnd3N0cmluZycsXG4gICAgbGl0ZXJhbDpcbiAgICAgICdmYWxzZSBudWxsIHRydWUnXG4gIH07XG5cbiAgLyoqXG4gICAqIE51bWJlciBsaXRlcmFsIHJlZ2V4cHNcbiAgICpcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIHZhciBkZWNpbWFsX2ludGVnZXJfcmUgPSAnKDB8WzEtOV1bXFxcXGRfXSopJyxcbiAgICBkZWNpbWFsX2ludGVnZXJfbm9zdXNfcmUgPSAnKDB8WzEtOV1bXFxcXGRfXSp8XFxcXGRbXFxcXGRfXSp8W1xcXFxkX10rP1xcXFxkKScsXG4gICAgYmluYXJ5X2ludGVnZXJfcmUgPSAnMFtiQl1bMDFfXSsnLFxuICAgIGhleGFkZWNpbWFsX2RpZ2l0c19yZSA9ICcoW1xcXFxkYS1mQS1GXVtcXFxcZGEtZkEtRl9dKnxfW1xcXFxkYS1mQS1GXVtcXFxcZGEtZkEtRl9dKiknLFxuICAgIGhleGFkZWNpbWFsX2ludGVnZXJfcmUgPSAnMFt4WF0nICsgaGV4YWRlY2ltYWxfZGlnaXRzX3JlLFxuXG4gICAgZGVjaW1hbF9leHBvbmVudF9yZSA9ICcoW2VFXVsrLV0/JyArIGRlY2ltYWxfaW50ZWdlcl9ub3N1c19yZSArICcpJyxcbiAgICBkZWNpbWFsX2Zsb2F0X3JlID0gJygnICsgZGVjaW1hbF9pbnRlZ2VyX25vc3VzX3JlICsgJyhcXFxcLlxcXFxkKnwnICsgZGVjaW1hbF9leHBvbmVudF9yZSArICcpfCcgK1xuICAgICAgICAgICAgICAgICdcXFxcZCtcXFxcLicgKyBkZWNpbWFsX2ludGVnZXJfbm9zdXNfcmUgKyBkZWNpbWFsX2ludGVnZXJfbm9zdXNfcmUgKyAnfCcgK1xuICAgICAgICAgICAgICAgICdcXFxcLicgKyBkZWNpbWFsX2ludGVnZXJfcmUgKyBkZWNpbWFsX2V4cG9uZW50X3JlICsgJz8nICtcbiAgICAgICAgICAgICAgJyknLFxuICAgIGhleGFkZWNpbWFsX2Zsb2F0X3JlID0gJygwW3hYXSgnICtcbiAgICAgICAgICAgICAgICAgIGhleGFkZWNpbWFsX2RpZ2l0c19yZSArICdcXFxcLicgKyBoZXhhZGVjaW1hbF9kaWdpdHNfcmUgKyAnfCcrXG4gICAgICAgICAgICAgICAgICAnXFxcXC4/JyArIGhleGFkZWNpbWFsX2RpZ2l0c19yZSArXG4gICAgICAgICAgICAgICAgICcpW3BQXVsrLV0/JyArIGRlY2ltYWxfaW50ZWdlcl9ub3N1c19yZSArICcpJyxcblxuICAgIGludGVnZXJfcmUgPSAnKCcgK1xuICAgICAgZGVjaW1hbF9pbnRlZ2VyX3JlICsgJ3wnICtcbiAgICAgIGJpbmFyeV9pbnRlZ2VyX3JlICArICd8JyArXG4gICAgICAgaGV4YWRlY2ltYWxfaW50ZWdlcl9yZSAgICtcbiAgICAnKScsXG5cbiAgICBmbG9hdF9yZSA9ICcoJyArXG4gICAgICBoZXhhZGVjaW1hbF9mbG9hdF9yZSArICd8JyArXG4gICAgICBkZWNpbWFsX2Zsb2F0X3JlICArXG4gICAgJyknO1xuXG4gIC8qKlxuICAgKiBFc2NhcGUgc2VxdWVuY2Ugc3VwcG9ydGVkIGluIEQgc3RyaW5nIGFuZCBjaGFyYWN0ZXIgbGl0ZXJhbHNcbiAgICpcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIHZhciBlc2NhcGVfc2VxdWVuY2VfcmUgPSAnXFxcXFxcXFwoJyArXG4gICAgICAgICAgICAgICdbXFwnXCJcXFxcP1xcXFxcXFxcYWJmbnJ0dl18JyArICAvLyBjb21tb24gZXNjYXBlc1xuICAgICAgICAgICAgICAndVtcXFxcZEEtRmEtZl17NH18JyArICAgICAvLyBmb3VyIGhleCBkaWdpdCB1bmljb2RlIGNvZGVwb2ludFxuICAgICAgICAgICAgICAnWzAtN117MSwzfXwnICsgICAgICAgLy8gb25lIHRvIHRocmVlIG9jdGFsIGRpZ2l0IGFzY2lpIGNoYXIgY29kZVxuICAgICAgICAgICAgICAneFtcXFxcZEEtRmEtZl17Mn18JyArICAgIC8vIHR3byBoZXggZGlnaXQgYXNjaWkgY2hhciBjb2RlXG4gICAgICAgICAgICAgICdVW1xcXFxkQS1GYS1mXXs4fScgKyAgICAgIC8vIGVpZ2h0IGhleCBkaWdpdCB1bmljb2RlIGNvZGVwb2ludFxuICAgICAgICAgICAgICAnKXwnICtcbiAgICAgICAgICAgICAgJyZbYS16QS1aXFxcXGRdezIsfTsnOyAgICAgIC8vIG5hbWVkIGNoYXJhY3RlciBlbnRpdHlcblxuICAvKipcbiAgICogRCBpbnRlZ2VyIG51bWJlciBsaXRlcmFsc1xuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIERfSU5URUdFUl9NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICBiZWdpbjogJ1xcXFxiJyArIGludGVnZXJfcmUgKyAnKEx8dXxVfEx1fExVfHVMfFVMKT8nLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgLyoqXG4gICAqIFtEX0ZMT0FUX01PREUgZGVzY3JpcHRpb25dXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgRF9GTE9BVF9NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgYmVnaW46ICdcXFxcYignICtcbiAgICAgICAgZmxvYXRfcmUgKyAnKFtmRl18THxpfFtmRl1pfExpKT98JyArXG4gICAgICAgIGludGVnZXJfcmUgKyAnKGl8W2ZGXWl8TGkpJyArXG4gICAgICAnKScsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG5cbiAgLyoqXG4gICAqIEQgY2hhcmFjdGVyIGxpdGVyYWxcbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHZhciBEX0NIQVJBQ1RFUl9NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcXCcoJyArIGVzY2FwZV9zZXF1ZW5jZV9yZSArICd8LiknLCBlbmQ6ICdcXCcnLFxuICAgIGlsbGVnYWw6ICcuJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBEIHN0cmluZyBlc2NhcGUgc2VxdWVuY2VcbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHZhciBEX0VTQ0FQRV9TRVFVRU5DRSA9IHtcbiAgICBiZWdpbjogZXNjYXBlX3NlcXVlbmNlX3JlLFxuICAgIHJlbGV2YW5jZTogMFxuICB9O1xuXG4gIC8qKlxuICAgKiBEIGRvdWJsZSBxdW90ZWQgc3RyaW5nIGxpdGVyYWxcbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHZhciBEX1NUUklOR19NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICdcIicsXG4gICAgY29udGFpbnM6IFtEX0VTQ0FQRV9TRVFVRU5DRV0sXG4gICAgZW5kOiAnXCJbY3dkXT8nXG4gIH07XG5cbiAgLyoqXG4gICAqIEQgd3lzaXd5ZyBhbmQgZGVsaW1pdGVkIHN0cmluZyBsaXRlcmFsc1xuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIERfV1lTSVdZR19ERUxJTUlURURfU1RSSU5HX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogJ1tycV1cIicsXG4gICAgZW5kOiAnXCJbY3dkXT8nLFxuICAgIHJlbGV2YW5jZTogNVxuICB9O1xuXG4gIC8qKlxuICAgKiBEIGFsdGVybmF0ZSB3eXNpd3lnIHN0cmluZyBsaXRlcmFsXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgRF9BTFRFUk5BVEVfV1lTSVdZR19TVFJJTkdfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnYCcsXG4gICAgZW5kOiAnYFtjd2RdPydcbiAgfTtcblxuICAvKipcbiAgICogRCBoZXhhZGVjaW1hbCBzdHJpbmcgbGl0ZXJhbFxuICAgKlxuICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgdmFyIERfSEVYX1NUUklOR19NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgYmVnaW46ICd4XCJbXFxcXGRhLWZBLUZcXFxcc1xcXFxuXFxcXHJdKlwiW2N3ZF0/JyxcbiAgICByZWxldmFuY2U6IDEwXG4gIH07XG5cbiAgLyoqXG4gICAqIEQgZGVsaW1pdGVkIHN0cmluZyBsaXRlcmFsXG4gICAqXG4gICAqIEB0eXBlIHtPYmplY3R9XG4gICAqL1xuICB2YXIgRF9UT0tFTl9TVFJJTkdfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAncVwiXFxcXHsnLFxuICAgIGVuZDogJ1xcXFx9XCInXG4gIH07XG5cbiAgLyoqXG4gICAqIEhhc2hiYW5nIHN1cHBvcnRcbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHZhciBEX0hBU0hCQU5HX01PREUgPSB7XG4gICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgYmVnaW46ICdeIyEnLFxuICAgIGVuZDogJyQnLFxuICAgIHJlbGV2YW5jZTogNVxuICB9O1xuXG4gIC8qKlxuICAgKiBEIHNwZWNpYWwgdG9rZW4gc2VxdWVuY2VcbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHZhciBEX1NQRUNJQUxfVE9LRU5fU0VRVUVOQ0VfTU9ERSA9IHtcbiAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICBiZWdpbjogJyMobGluZSknLFxuICAgIGVuZDogJyQnLFxuICAgIHJlbGV2YW5jZTogNVxuICB9O1xuXG4gIC8qKlxuICAgKiBEIGF0dHJpYnV0ZXNcbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHZhciBEX0FUVFJJQlVURV9NT0RFID0ge1xuICAgIGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuICAgIGJlZ2luOiAnQFthLXpBLVpfXVthLXpBLVpfXFxcXGRdKidcbiAgfTtcblxuICAvKipcbiAgICogRCBuZXN0aW5nIGNvbW1lbnRcbiAgICpcbiAgICogQHR5cGUge09iamVjdH1cbiAgICovXG4gIHZhciBEX05FU1RJTkdfQ09NTUVOVF9NT0RFID0gaGxqcy5DT01NRU5UKFxuICAgICdcXFxcL1xcXFwrJyxcbiAgICAnXFxcXCtcXFxcLycsXG4gICAge1xuICAgICAgY29udGFpbnM6IFsnc2VsZiddLFxuICAgICAgcmVsZXZhbmNlOiAxMFxuICAgIH1cbiAgKTtcblxuICByZXR1cm4ge1xuICAgIGxleGVtZXM6IGhsanMuVU5ERVJTQ09SRV9JREVOVF9SRSxcbiAgICBrZXl3b3JkczogRF9LRVlXT1JEUyxcbiAgICBjb250YWluczogW1xuICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICBEX05FU1RJTkdfQ09NTUVOVF9NT0RFLFxuICAgICAgICBEX0hFWF9TVFJJTkdfTU9ERSxcbiAgICAgICAgRF9TVFJJTkdfTU9ERSxcbiAgICAgICAgRF9XWVNJV1lHX0RFTElNSVRFRF9TVFJJTkdfTU9ERSxcbiAgICAgICAgRF9BTFRFUk5BVEVfV1lTSVdZR19TVFJJTkdfTU9ERSxcbiAgICAgICAgRF9UT0tFTl9TVFJJTkdfTU9ERSxcbiAgICAgICAgRF9GTE9BVF9NT0RFLFxuICAgICAgICBEX0lOVEVHRVJfTU9ERSxcbiAgICAgICAgRF9DSEFSQUNURVJfTU9ERSxcbiAgICAgICAgRF9IQVNIQkFOR19NT0RFLFxuICAgICAgICBEX1NQRUNJQUxfVE9LRU5fU0VRVUVOQ0VfTU9ERSxcbiAgICAgICAgRF9BVFRSSUJVVEVfTU9ERVxuICAgIF1cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=