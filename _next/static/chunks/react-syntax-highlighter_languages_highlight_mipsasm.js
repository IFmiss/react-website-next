(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_mipsasm"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/mipsasm.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/mipsasm.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
    //local labels: %?[FB]?[AT]?\d{1,2}\w+
  return {
    case_insensitive: true,
    aliases: ['mips'],
    lexemes: '\\.?' + hljs.IDENT_RE,
    keywords: {
      meta:
        //GNU preprocs
        '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .ltorg ',
      built_in:
        '$0 $1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14 $15 ' + // integer registers
        '$16 $17 $18 $19 $20 $21 $22 $23 $24 $25 $26 $27 $28 $29 $30 $31 ' + // integer registers
        'zero at v0 v1 a0 a1 a2 a3 a4 a5 a6 a7 ' + // integer register aliases
        't0 t1 t2 t3 t4 t5 t6 t7 t8 t9 s0 s1 s2 s3 s4 s5 s6 s7 s8 ' + // integer register aliases
        'k0 k1 gp sp fp ra ' + // integer register aliases
        '$f0 $f1 $f2 $f2 $f4 $f5 $f6 $f7 $f8 $f9 $f10 $f11 $f12 $f13 $f14 $f15 ' + // floating-point registers
        '$f16 $f17 $f18 $f19 $f20 $f21 $f22 $f23 $f24 $f25 $f26 $f27 $f28 $f29 $f30 $f31 ' + // floating-point registers
        'Context Random EntryLo0 EntryLo1 Context PageMask Wired EntryHi ' + // Coprocessor 0 registers
        'HWREna BadVAddr Count Compare SR IntCtl SRSCtl SRSMap Cause EPC PRId ' + // Coprocessor 0 registers
        'EBase Config Config1 Config2 Config3 LLAddr Debug DEPC DESAVE CacheErr ' + // Coprocessor 0 registers
        'ECC ErrorEPC TagLo DataLo TagHi DataHi WatchLo WatchHi PerfCtl PerfCnt ' // Coprocessor 0 registers
    },
    contains: [
      {
        className: 'keyword',
        begin: '\\b('+     //mnemonics
            // 32-bit integer instructions
            'addi?u?|andi?|b(al)?|beql?|bgez(al)?l?|bgtzl?|blezl?|bltz(al)?l?|' +
            'bnel?|cl[oz]|divu?|ext|ins|j(al)?|jalr(\.hb)?|jr(\.hb)?|lbu?|lhu?|' +
            'll|lui|lw[lr]?|maddu?|mfhi|mflo|movn|movz|move|msubu?|mthi|mtlo|mul|' +
            'multu?|nop|nor|ori?|rotrv?|sb|sc|se[bh]|sh|sllv?|slti?u?|srav?|' +
            'srlv?|subu?|sw[lr]?|xori?|wsbh|' +
            // floating-point instructions
            'abs\.[sd]|add\.[sd]|alnv.ps|bc1[ft]l?|' +
            'c\.(s?f|un|u?eq|[ou]lt|[ou]le|ngle?|seq|l[et]|ng[et])\.[sd]|' +
            '(ceil|floor|round|trunc)\.[lw]\.[sd]|cfc1|cvt\.d\.[lsw]|' +
            'cvt\.l\.[dsw]|cvt\.ps\.s|cvt\.s\.[dlw]|cvt\.s\.p[lu]|cvt\.w\.[dls]|' +
            'div\.[ds]|ldx?c1|luxc1|lwx?c1|madd\.[sd]|mfc1|mov[fntz]?\.[ds]|' +
            'msub\.[sd]|mth?c1|mul\.[ds]|neg\.[ds]|nmadd\.[ds]|nmsub\.[ds]|' +
            'p[lu][lu]\.ps|recip\.fmt|r?sqrt\.[ds]|sdx?c1|sub\.[ds]|suxc1|' +
            'swx?c1|' +
            // system control instructions
            'break|cache|d?eret|[de]i|ehb|mfc0|mtc0|pause|prefx?|rdhwr|' +
            'rdpgpr|sdbbp|ssnop|synci?|syscall|teqi?|tgei?u?|tlb(p|r|w[ir])|' +
            'tlti?u?|tnei?|wait|wrpgpr'+
        ')',
        end: '\\s'
      },
      hljs.COMMENT('[;#]', '$'),
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'string',
        begin: '\'',
        end: '[^\\\\]\'',
        relevance: 0
      },
      {
        className: 'title',
        begin: '\\|', end: '\\|',
        illegal: '\\n',
        relevance: 0
      },
      {
        className: 'number',
        variants: [
            {begin: '0x[0-9a-f]+'}, //hex
            {begin: '\\b-?\\d+'}           //bare number
        ],
        relevance: 0
      },
      {
        className: 'symbol',
        variants: [
            {begin: '^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:'}, //GNU MIPS syntax
            {begin: '^\\s*[0-9]+:'}, // numbered local labels
            {begin: '[0-9]+[bf]' }  // number local label reference (backwards, forwards)
        ],
        relevance: 0
      }
    ],
    illegal: '\/'
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9taXBzYXNtLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvbWlwc2FzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgICAvL2xvY2FsIGxhYmVsczogJT9bRkJdP1tBVF0/XFxkezEsMn1cXHcrXG4gIHJldHVybiB7XG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBhbGlhc2VzOiBbJ21pcHMnXSxcbiAgICBsZXhlbWVzOiAnXFxcXC4/JyArIGhsanMuSURFTlRfUkUsXG4gICAga2V5d29yZHM6IHtcbiAgICAgIG1ldGE6XG4gICAgICAgIC8vR05VIHByZXByb2NzXG4gICAgICAgICcuMmJ5dGUgLjRieXRlIC5hbGlnbiAuYXNjaWkgLmFzY2l6IC5iYWxpZ24gLmJ5dGUgLmNvZGUgLmRhdGEgLmVsc2UgLmVuZCAuZW5kaWYgLmVuZG0gLmVuZHIgLmVxdSAuZXJyIC5leGl0bSAuZXh0ZXJuIC5nbG9iYWwgLmh3b3JkIC5pZiAuaWZkZWYgLmlmbmRlZiAuaW5jbHVkZSAuaXJwIC5sb25nIC5tYWNybyAucmVwdCAucmVxIC5zZWN0aW9uIC5zZXQgLnNraXAgLnNwYWNlIC50ZXh0IC53b3JkIC5sdG9yZyAnLFxuICAgICAgYnVpbHRfaW46XG4gICAgICAgICckMCAkMSAkMiAkMyAkNCAkNSAkNiAkNyAkOCAkOSAkMTAgJDExICQxMiAkMTMgJDE0ICQxNSAnICsgLy8gaW50ZWdlciByZWdpc3RlcnNcbiAgICAgICAgJyQxNiAkMTcgJDE4ICQxOSAkMjAgJDIxICQyMiAkMjMgJDI0ICQyNSAkMjYgJDI3ICQyOCAkMjkgJDMwICQzMSAnICsgLy8gaW50ZWdlciByZWdpc3RlcnNcbiAgICAgICAgJ3plcm8gYXQgdjAgdjEgYTAgYTEgYTIgYTMgYTQgYTUgYTYgYTcgJyArIC8vIGludGVnZXIgcmVnaXN0ZXIgYWxpYXNlc1xuICAgICAgICAndDAgdDEgdDIgdDMgdDQgdDUgdDYgdDcgdDggdDkgczAgczEgczIgczMgczQgczUgczYgczcgczggJyArIC8vIGludGVnZXIgcmVnaXN0ZXIgYWxpYXNlc1xuICAgICAgICAnazAgazEgZ3Agc3AgZnAgcmEgJyArIC8vIGludGVnZXIgcmVnaXN0ZXIgYWxpYXNlc1xuICAgICAgICAnJGYwICRmMSAkZjIgJGYyICRmNCAkZjUgJGY2ICRmNyAkZjggJGY5ICRmMTAgJGYxMSAkZjEyICRmMTMgJGYxNCAkZjE1ICcgKyAvLyBmbG9hdGluZy1wb2ludCByZWdpc3RlcnNcbiAgICAgICAgJyRmMTYgJGYxNyAkZjE4ICRmMTkgJGYyMCAkZjIxICRmMjIgJGYyMyAkZjI0ICRmMjUgJGYyNiAkZjI3ICRmMjggJGYyOSAkZjMwICRmMzEgJyArIC8vIGZsb2F0aW5nLXBvaW50IHJlZ2lzdGVyc1xuICAgICAgICAnQ29udGV4dCBSYW5kb20gRW50cnlMbzAgRW50cnlMbzEgQ29udGV4dCBQYWdlTWFzayBXaXJlZCBFbnRyeUhpICcgKyAvLyBDb3Byb2Nlc3NvciAwIHJlZ2lzdGVyc1xuICAgICAgICAnSFdSRW5hIEJhZFZBZGRyIENvdW50IENvbXBhcmUgU1IgSW50Q3RsIFNSU0N0bCBTUlNNYXAgQ2F1c2UgRVBDIFBSSWQgJyArIC8vIENvcHJvY2Vzc29yIDAgcmVnaXN0ZXJzXG4gICAgICAgICdFQmFzZSBDb25maWcgQ29uZmlnMSBDb25maWcyIENvbmZpZzMgTExBZGRyIERlYnVnIERFUEMgREVTQVZFIENhY2hlRXJyICcgKyAvLyBDb3Byb2Nlc3NvciAwIHJlZ2lzdGVyc1xuICAgICAgICAnRUNDIEVycm9yRVBDIFRhZ0xvIERhdGFMbyBUYWdIaSBEYXRhSGkgV2F0Y2hMbyBXYXRjaEhpIFBlcmZDdGwgUGVyZkNudCAnIC8vIENvcHJvY2Vzc29yIDAgcmVnaXN0ZXJzXG4gICAgfSxcbiAgICBjb250YWluczogW1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdrZXl3b3JkJyxcbiAgICAgICAgYmVnaW46ICdcXFxcYignKyAgICAgLy9tbmVtb25pY3NcbiAgICAgICAgICAgIC8vIDMyLWJpdCBpbnRlZ2VyIGluc3RydWN0aW9uc1xuICAgICAgICAgICAgJ2FkZGk/dT98YW5kaT98YihhbCk/fGJlcWw/fGJnZXooYWwpP2w/fGJndHpsP3xibGV6bD98Ymx0eihhbCk/bD98JyArXG4gICAgICAgICAgICAnYm5lbD98Y2xbb3pdfGRpdnU/fGV4dHxpbnN8aihhbCk/fGphbHIoXFwuaGIpP3xqcihcXC5oYik/fGxidT98bGh1P3wnICtcbiAgICAgICAgICAgICdsbHxsdWl8bHdbbHJdP3xtYWRkdT98bWZoaXxtZmxvfG1vdm58bW92enxtb3ZlfG1zdWJ1P3xtdGhpfG10bG98bXVsfCcgK1xuICAgICAgICAgICAgJ211bHR1P3xub3B8bm9yfG9yaT98cm90cnY/fHNifHNjfHNlW2JoXXxzaHxzbGx2P3xzbHRpP3U/fHNyYXY/fCcgK1xuICAgICAgICAgICAgJ3NybHY/fHN1YnU/fHN3W2xyXT98eG9yaT98d3NiaHwnICtcbiAgICAgICAgICAgIC8vIGZsb2F0aW5nLXBvaW50IGluc3RydWN0aW9uc1xuICAgICAgICAgICAgJ2Fic1xcLltzZF18YWRkXFwuW3NkXXxhbG52LnBzfGJjMVtmdF1sP3wnICtcbiAgICAgICAgICAgICdjXFwuKHM/Znx1bnx1P2VxfFtvdV1sdHxbb3VdbGV8bmdsZT98c2VxfGxbZXRdfG5nW2V0XSlcXC5bc2RdfCcgK1xuICAgICAgICAgICAgJyhjZWlsfGZsb29yfHJvdW5kfHRydW5jKVxcLltsd11cXC5bc2RdfGNmYzF8Y3Z0XFwuZFxcLltsc3ddfCcgK1xuICAgICAgICAgICAgJ2N2dFxcLmxcXC5bZHN3XXxjdnRcXC5wc1xcLnN8Y3Z0XFwuc1xcLltkbHddfGN2dFxcLnNcXC5wW2x1XXxjdnRcXC53XFwuW2Rsc118JyArXG4gICAgICAgICAgICAnZGl2XFwuW2RzXXxsZHg/YzF8bHV4YzF8bHd4P2MxfG1hZGRcXC5bc2RdfG1mYzF8bW92W2ZudHpdP1xcLltkc118JyArXG4gICAgICAgICAgICAnbXN1YlxcLltzZF18bXRoP2MxfG11bFxcLltkc118bmVnXFwuW2RzXXxubWFkZFxcLltkc118bm1zdWJcXC5bZHNdfCcgK1xuICAgICAgICAgICAgJ3BbbHVdW2x1XVxcLnBzfHJlY2lwXFwuZm10fHI/c3FydFxcLltkc118c2R4P2MxfHN1YlxcLltkc118c3V4YzF8JyArXG4gICAgICAgICAgICAnc3d4P2MxfCcgK1xuICAgICAgICAgICAgLy8gc3lzdGVtIGNvbnRyb2wgaW5zdHJ1Y3Rpb25zXG4gICAgICAgICAgICAnYnJlYWt8Y2FjaGV8ZD9lcmV0fFtkZV1pfGVoYnxtZmMwfG10YzB8cGF1c2V8cHJlZng/fHJkaHdyfCcgK1xuICAgICAgICAgICAgJ3JkcGdwcnxzZGJicHxzc25vcHxzeW5jaT98c3lzY2FsbHx0ZXFpP3x0Z2VpP3U/fHRsYihwfHJ8d1tpcl0pfCcgK1xuICAgICAgICAgICAgJ3RsdGk/dT98dG5laT98d2FpdHx3cnBncHInK1xuICAgICAgICAnKScsXG4gICAgICAgIGVuZDogJ1xcXFxzJ1xuICAgICAgfSxcbiAgICAgIGhsanMuQ09NTUVOVCgnWzsjXScsICckJyksXG4gICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgaGxqcy5RVU9URV9TVFJJTkdfTU9ERSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgYmVnaW46ICdcXCcnLFxuICAgICAgICBlbmQ6ICdbXlxcXFxcXFxcXVxcJycsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICBiZWdpbjogJ1xcXFx8JywgZW5kOiAnXFxcXHwnLFxuICAgICAgICBpbGxlZ2FsOiAnXFxcXG4nLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7YmVnaW46ICcweFswLTlhLWZdKyd9LCAvL2hleFxuICAgICAgICAgICAge2JlZ2luOiAnXFxcXGItP1xcXFxkKyd9ICAgICAgICAgICAvL2JhcmUgbnVtYmVyXG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3ltYm9sJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtiZWdpbjogJ15cXFxccypbYS16X1xcXFwuXFxcXCRdW2EtejAtOV9cXFxcLlxcXFwkXSs6J30sIC8vR05VIE1JUFMgc3ludGF4XG4gICAgICAgICAgICB7YmVnaW46ICdeXFxcXHMqWzAtOV0rOid9LCAvLyBudW1iZXJlZCBsb2NhbCBsYWJlbHNcbiAgICAgICAgICAgIHtiZWdpbjogJ1swLTldK1tiZl0nIH0gIC8vIG51bWJlciBsb2NhbCBsYWJlbCByZWZlcmVuY2UgKGJhY2t3YXJkcywgZm9yd2FyZHMpXG4gICAgICAgIF0sXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfVxuICAgIF0sXG4gICAgaWxsZWdhbDogJ1xcLydcbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9