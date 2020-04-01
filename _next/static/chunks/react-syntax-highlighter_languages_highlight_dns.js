(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_dns"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dns.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/dns.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    aliases: ['bind', 'zone'],
    keywords: {
      keyword:
        'IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX ' +
        'LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT'
    },
    contains: [
      hljs.COMMENT(';', '$', {relevance: 0}),
      {
        className: 'meta',
        begin: /^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/
      },
      // IPv6
      {
        className: 'number',
        begin: '((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b'
      },
      // IPv4
      {
        className: 'number',
        begin: '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b'
      },
      hljs.inherit(hljs.NUMBER_MODE, {begin: /\b\d+[dhwm]?/})
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9kbnMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9kbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydiaW5kJywgJ3pvbmUnXSxcbiAgICBrZXl3b3Jkczoge1xuICAgICAga2V5d29yZDpcbiAgICAgICAgJ0lOIEEgQUFBQSBBRlNEQiBBUEwgQ0FBIENETlNLRVkgQ0RTIENFUlQgQ05BTUUgREhDSUQgRExWIEROQU1FIEROU0tFWSBEUyBISVAgSVBTRUNLRVkgS0VZIEtYICcgK1xuICAgICAgICAnTE9DIE1YIE5BUFRSIE5TIE5TRUMgTlNFQzMgTlNFQzNQQVJBTSBQVFIgUlJTSUcgUlAgU0lHIFNPQSBTUlYgU1NIRlAgVEEgVEtFWSBUTFNBIFRTSUcgVFhUJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ09NTUVOVCgnOycsICckJywge3JlbGV2YW5jZTogMH0pLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46IC9eXFwkKFRUTHxHRU5FUkFURXxJTkNMVURFfE9SSUdJTilcXGIvXG4gICAgICB9LFxuICAgICAgLy8gSVB2NlxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBiZWdpbjogJygoKFswLTlBLUZhLWZdezEsNH06KXs3fShbMC05QS1GYS1mXXsxLDR9fDopKXwoKFswLTlBLUZhLWZdezEsNH06KXs2fSg6WzAtOUEtRmEtZl17MSw0fXwoKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKFxcXFwuKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKXszfSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezV9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsMn0pfDooKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKFxcXFwuKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKXszfSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezR9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsM30pfCgoOlswLTlBLUZhLWZdezEsNH0pPzooKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKFxcXFwuKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKXszfSkpfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXszfSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDR9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDJ9OigoMjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XT9cXFxcZCkoXFxcXC4oMjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XT9cXFxcZCkpezN9KSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezJ9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsNX0pfCgoOlswLTlBLUZhLWZdezEsNH0pezAsM306KCgyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldP1xcXFxkKShcXFxcLigyNVswLTVdfDJbMC00XVxcXFxkfDFcXFxcZFxcXFxkfFsxLTldP1xcXFxkKSl7M30pKXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7MX0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSw2fSl8KCg6WzAtOUEtRmEtZl17MSw0fSl7MCw0fTooKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKFxcXFwuKDI1WzAtNV18MlswLTRdXFxcXGR8MVxcXFxkXFxcXGR8WzEtOV0/XFxcXGQpKXszfSkpfDopKXwoOigoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDd9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDV9OigoMjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XT9cXFxcZCkoXFxcXC4oMjVbMC01XXwyWzAtNF1cXFxcZHwxXFxcXGRcXFxcZHxbMS05XT9cXFxcZCkpezN9KSl8OikpKVxcXFxiJ1xuICAgICAgfSxcbiAgICAgIC8vIElQdjRcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46ICcoKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7MywzfSgyNVswLTVdfCgyWzAtNF18MXswLDF9WzAtOV0pezAsMX1bMC05XSlcXFxcYidcbiAgICAgIH0sXG4gICAgICBobGpzLmluaGVyaXQoaGxqcy5OVU1CRVJfTU9ERSwge2JlZ2luOiAvXFxiXFxkK1tkaHdtXT8vfSlcbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==