(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_matlab"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/matlab.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/matlab.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = /*
  Formal syntax is not published, helpful link:
  https://github.com/kornilova-l/matlab-IntelliJ-plugin/blob/master/src/main/grammar/Matlab.bnf
*/
function(hljs) {

  var TRANSPOSE_RE = '(\'|\\.\')+';
  var TRANSPOSE = {
    relevance: 0,
    contains: [
      { begin: TRANSPOSE_RE }
    ]
  };

  return {
    keywords: {
      keyword:
        'break case catch classdef continue else elseif end enumerated events for function ' +
        'global if methods otherwise parfor persistent properties return spmd switch try while',
      built_in:
        'sin sind sinh asin asind asinh cos cosd cosh acos acosd acosh tan tand tanh atan ' +
        'atand atan2 atanh sec secd sech asec asecd asech csc cscd csch acsc acscd acsch cot ' +
        'cotd coth acot acotd acoth hypot exp expm1 log log1p log10 log2 pow2 realpow reallog ' +
        'realsqrt sqrt nthroot nextpow2 abs angle complex conj imag real unwrap isreal ' +
        'cplxpair fix floor ceil round mod rem sign airy besselj bessely besselh besseli ' +
        'besselk beta betainc betaln ellipj ellipke erf erfc erfcx erfinv expint gamma ' +
        'gammainc gammaln psi legendre cross dot factor isprime primes gcd lcm rat rats perms ' +
        'nchoosek factorial cart2sph cart2pol pol2cart sph2cart hsv2rgb rgb2hsv zeros ones ' +
        'eye repmat rand randn linspace logspace freqspace meshgrid accumarray size length ' +
        'ndims numel disp isempty isequal isequalwithequalnans cat reshape diag blkdiag tril ' +
        'triu fliplr flipud flipdim rot90 find sub2ind ind2sub bsxfun ndgrid permute ipermute ' +
        'shiftdim circshift squeeze isscalar isvector ans eps realmax realmin pi i inf nan ' +
        'isnan isinf isfinite j why compan gallery hadamard hankel hilb invhilb magic pascal ' +
        'rosser toeplitz vander wilkinson max min nanmax nanmin mean nanmean type table ' +
        'readtable writetable sortrows sort figure plot plot3 scatter scatter3 cellfun ' +
        'legend intersect ismember procrustes hold num2cell '
    },
    illegal: '(//|"|#|/\\*|\\s+/\\w+)',
    contains: [
      {
        className: 'function',
        beginKeywords: 'function', end: '$',
        contains: [
          hljs.UNDERSCORE_TITLE_MODE,
          {
            className: 'params',
            variants: [
              {begin: '\\(', end: '\\)'},
              {begin: '\\[', end: '\\]'}
            ]
          }
        ]
      },
      {
        className: 'built_in',
        begin: /true|false/,
        relevance: 0,
        starts: TRANSPOSE
      },
      {
        begin: '[a-zA-Z][a-zA-Z_0-9]*' + TRANSPOSE_RE,
        relevance: 0
      },
      {
        className: 'number',
        begin: hljs.C_NUMBER_RE,
        relevance: 0,
        starts: TRANSPOSE
      },
      {
        className: 'string',
        begin: '\'', end: '\'',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          {begin: '\'\''}]
      },
      {
        begin: /\]|}|\)/,
        relevance: 0,
        starts: TRANSPOSE
      },
      {
        className: 'string',
        begin: '"', end: '"',
        contains: [
          hljs.BACKSLASH_ESCAPE,
          {begin: '""'}
        ],
        starts: TRANSPOSE
      },
      hljs.COMMENT('^\\s*\\%\\{\\s*$', '^\\s*\\%\\}\\s*$'),
      hljs.COMMENT('\\%', '$')
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9tYXRsYWIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9tYXRsYWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAvKlxuICBGb3JtYWwgc3ludGF4IGlzIG5vdCBwdWJsaXNoZWQsIGhlbHBmdWwgbGluazpcbiAgaHR0cHM6Ly9naXRodWIuY29tL2tvcm5pbG92YS1sL21hdGxhYi1JbnRlbGxpSi1wbHVnaW4vYmxvYi9tYXN0ZXIvc3JjL21haW4vZ3JhbW1hci9NYXRsYWIuYm5mXG4qL1xuZnVuY3Rpb24oaGxqcykge1xuXG4gIHZhciBUUkFOU1BPU0VfUkUgPSAnKFxcJ3xcXFxcLlxcJykrJztcbiAgdmFyIFRSQU5TUE9TRSA9IHtcbiAgICByZWxldmFuY2U6IDAsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHsgYmVnaW46IFRSQU5TUE9TRV9SRSB9XG4gICAgXVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAga2V5d29yZHM6IHtcbiAgICAgIGtleXdvcmQ6XG4gICAgICAgICdicmVhayBjYXNlIGNhdGNoIGNsYXNzZGVmIGNvbnRpbnVlIGVsc2UgZWxzZWlmIGVuZCBlbnVtZXJhdGVkIGV2ZW50cyBmb3IgZnVuY3Rpb24gJyArXG4gICAgICAgICdnbG9iYWwgaWYgbWV0aG9kcyBvdGhlcndpc2UgcGFyZm9yIHBlcnNpc3RlbnQgcHJvcGVydGllcyByZXR1cm4gc3BtZCBzd2l0Y2ggdHJ5IHdoaWxlJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAnc2luIHNpbmQgc2luaCBhc2luIGFzaW5kIGFzaW5oIGNvcyBjb3NkIGNvc2ggYWNvcyBhY29zZCBhY29zaCB0YW4gdGFuZCB0YW5oIGF0YW4gJyArXG4gICAgICAgICdhdGFuZCBhdGFuMiBhdGFuaCBzZWMgc2VjZCBzZWNoIGFzZWMgYXNlY2QgYXNlY2ggY3NjIGNzY2QgY3NjaCBhY3NjIGFjc2NkIGFjc2NoIGNvdCAnICtcbiAgICAgICAgJ2NvdGQgY290aCBhY290IGFjb3RkIGFjb3RoIGh5cG90IGV4cCBleHBtMSBsb2cgbG9nMXAgbG9nMTAgbG9nMiBwb3cyIHJlYWxwb3cgcmVhbGxvZyAnICtcbiAgICAgICAgJ3JlYWxzcXJ0IHNxcnQgbnRocm9vdCBuZXh0cG93MiBhYnMgYW5nbGUgY29tcGxleCBjb25qIGltYWcgcmVhbCB1bndyYXAgaXNyZWFsICcgK1xuICAgICAgICAnY3BseHBhaXIgZml4IGZsb29yIGNlaWwgcm91bmQgbW9kIHJlbSBzaWduIGFpcnkgYmVzc2VsaiBiZXNzZWx5IGJlc3NlbGggYmVzc2VsaSAnICtcbiAgICAgICAgJ2Jlc3NlbGsgYmV0YSBiZXRhaW5jIGJldGFsbiBlbGxpcGogZWxsaXBrZSBlcmYgZXJmYyBlcmZjeCBlcmZpbnYgZXhwaW50IGdhbW1hICcgK1xuICAgICAgICAnZ2FtbWFpbmMgZ2FtbWFsbiBwc2kgbGVnZW5kcmUgY3Jvc3MgZG90IGZhY3RvciBpc3ByaW1lIHByaW1lcyBnY2QgbGNtIHJhdCByYXRzIHBlcm1zICcgK1xuICAgICAgICAnbmNob29zZWsgZmFjdG9yaWFsIGNhcnQyc3BoIGNhcnQycG9sIHBvbDJjYXJ0IHNwaDJjYXJ0IGhzdjJyZ2IgcmdiMmhzdiB6ZXJvcyBvbmVzICcgK1xuICAgICAgICAnZXllIHJlcG1hdCByYW5kIHJhbmRuIGxpbnNwYWNlIGxvZ3NwYWNlIGZyZXFzcGFjZSBtZXNoZ3JpZCBhY2N1bWFycmF5IHNpemUgbGVuZ3RoICcgK1xuICAgICAgICAnbmRpbXMgbnVtZWwgZGlzcCBpc2VtcHR5IGlzZXF1YWwgaXNlcXVhbHdpdGhlcXVhbG5hbnMgY2F0IHJlc2hhcGUgZGlhZyBibGtkaWFnIHRyaWwgJyArXG4gICAgICAgICd0cml1IGZsaXBsciBmbGlwdWQgZmxpcGRpbSByb3Q5MCBmaW5kIHN1YjJpbmQgaW5kMnN1YiBic3hmdW4gbmRncmlkIHBlcm11dGUgaXBlcm11dGUgJyArXG4gICAgICAgICdzaGlmdGRpbSBjaXJjc2hpZnQgc3F1ZWV6ZSBpc3NjYWxhciBpc3ZlY3RvciBhbnMgZXBzIHJlYWxtYXggcmVhbG1pbiBwaSBpIGluZiBuYW4gJyArXG4gICAgICAgICdpc25hbiBpc2luZiBpc2Zpbml0ZSBqIHdoeSBjb21wYW4gZ2FsbGVyeSBoYWRhbWFyZCBoYW5rZWwgaGlsYiBpbnZoaWxiIG1hZ2ljIHBhc2NhbCAnICtcbiAgICAgICAgJ3Jvc3NlciB0b2VwbGl0eiB2YW5kZXIgd2lsa2luc29uIG1heCBtaW4gbmFubWF4IG5hbm1pbiBtZWFuIG5hbm1lYW4gdHlwZSB0YWJsZSAnICtcbiAgICAgICAgJ3JlYWR0YWJsZSB3cml0ZXRhYmxlIHNvcnRyb3dzIHNvcnQgZmlndXJlIHBsb3QgcGxvdDMgc2NhdHRlciBzY2F0dGVyMyBjZWxsZnVuICcgK1xuICAgICAgICAnbGVnZW5kIGludGVyc2VjdCBpc21lbWJlciBwcm9jcnVzdGVzIGhvbGQgbnVtMmNlbGwgJ1xuICAgIH0sXG4gICAgaWxsZWdhbDogJygvL3xcInwjfC9cXFxcKnxcXFxccysvXFxcXHcrKScsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbktleXdvcmRzOiAnZnVuY3Rpb24nLCBlbmQ6ICckJyxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdwYXJhbXMnLFxuICAgICAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgICAge2JlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKSd9LFxuICAgICAgICAgICAgICB7YmVnaW46ICdcXFxcWycsIGVuZDogJ1xcXFxdJ31cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICAgICAgYmVnaW46IC90cnVlfGZhbHNlLyxcbiAgICAgICAgcmVsZXZhbmNlOiAwLFxuICAgICAgICBzdGFydHM6IFRSQU5TUE9TRVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdbYS16QS1aXVthLXpBLVpfMC05XSonICsgVFJBTlNQT1NFX1JFLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIGJlZ2luOiBobGpzLkNfTlVNQkVSX1JFLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIHN0YXJ0czogVFJBTlNQT1NFXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1xcJycsIGVuZDogJ1xcJycsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgaGxqcy5CQUNLU0xBU0hfRVNDQVBFLFxuICAgICAgICAgIHtiZWdpbjogJ1xcJ1xcJyd9XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYmVnaW46IC9cXF18fXxcXCkvLFxuICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgIHN0YXJ0czogVFJBTlNQT1NFXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1wiJywgZW5kOiAnXCInLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuQkFDS1NMQVNIX0VTQ0FQRSxcbiAgICAgICAgICB7YmVnaW46ICdcIlwiJ31cbiAgICAgICAgXSxcbiAgICAgICAgc3RhcnRzOiBUUkFOU1BPU0VcbiAgICAgIH0sXG4gICAgICBobGpzLkNPTU1FTlQoJ15cXFxccypcXFxcJVxcXFx7XFxcXHMqJCcsICdeXFxcXHMqXFxcXCVcXFxcfVxcXFxzKiQnKSxcbiAgICAgIGhsanMuQ09NTUVOVCgnXFxcXCUnLCAnJCcpXG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==