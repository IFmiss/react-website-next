(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_armasm"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/armasm.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/armasm.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
    //local labels: %?[FB]?[AT]?\d{1,2}\w+
  return {
    case_insensitive: true,
    aliases: ['arm'],
    lexemes: '\\.?' + hljs.IDENT_RE,
    keywords: {
      meta:
        //GNU preprocs
        '.2byte .4byte .align .ascii .asciz .balign .byte .code .data .else .end .endif .endm .endr .equ .err .exitm .extern .global .hword .if .ifdef .ifndef .include .irp .long .macro .rept .req .section .set .skip .space .text .word .arm .thumb .code16 .code32 .force_thumb .thumb_func .ltorg '+
        //ARM directives
        'ALIAS ALIGN ARM AREA ASSERT ATTR CN CODE CODE16 CODE32 COMMON CP DATA DCB DCD DCDU DCDO DCFD DCFDU DCI DCQ DCQU DCW DCWU DN ELIF ELSE END ENDFUNC ENDIF ENDP ENTRY EQU EXPORT EXPORTAS EXTERN FIELD FILL FUNCTION GBLA GBLL GBLS GET GLOBAL IF IMPORT INCBIN INCLUDE INFO KEEP LCLA LCLL LCLS LTORG MACRO MAP MEND MEXIT NOFP OPT PRESERVE8 PROC QN READONLY RELOC REQUIRE REQUIRE8 RLIST FN ROUT SETA SETL SETS SN SPACE SUBT THUMB THUMBX TTL WHILE WEND ',
      built_in:
        'r0 r1 r2 r3 r4 r5 r6 r7 r8 r9 r10 r11 r12 r13 r14 r15 '+ //standard registers
        'pc lr sp ip sl sb fp '+ //typical regs plus backward compatibility
        'a1 a2 a3 a4 v1 v2 v3 v4 v5 v6 v7 v8 f0 f1 f2 f3 f4 f5 f6 f7 '+ //more regs and fp
        'p0 p1 p2 p3 p4 p5 p6 p7 p8 p9 p10 p11 p12 p13 p14 p15 '+ //coprocessor regs
        'c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 c10 c11 c12 c13 c14 c15 '+ //more coproc
        'q0 q1 q2 q3 q4 q5 q6 q7 q8 q9 q10 q11 q12 q13 q14 q15 '+ //advanced SIMD NEON regs

        //program status registers
        'cpsr_c cpsr_x cpsr_s cpsr_f cpsr_cx cpsr_cxs cpsr_xs cpsr_xsf cpsr_sf cpsr_cxsf '+
        'spsr_c spsr_x spsr_s spsr_f spsr_cx spsr_cxs spsr_xs spsr_xsf spsr_sf spsr_cxsf '+

        //NEON and VFP registers
        's0 s1 s2 s3 s4 s5 s6 s7 s8 s9 s10 s11 s12 s13 s14 s15 '+
        's16 s17 s18 s19 s20 s21 s22 s23 s24 s25 s26 s27 s28 s29 s30 s31 '+
        'd0 d1 d2 d3 d4 d5 d6 d7 d8 d9 d10 d11 d12 d13 d14 d15 '+
        'd16 d17 d18 d19 d20 d21 d22 d23 d24 d25 d26 d27 d28 d29 d30 d31 ' +

        '{PC} {VAR} {TRUE} {FALSE} {OPT} {CONFIG} {ENDIAN} {CODESIZE} {CPU} {FPU} {ARCHITECTURE} {PCSTOREOFFSET} {ARMASM_VERSION} {INTER} {ROPI} {RWPI} {SWST} {NOSWST} . @'
    },
    contains: [
      {
        className: 'keyword',
        begin: '\\b('+     //mnemonics
            'adc|'+
            '(qd?|sh?|u[qh]?)?add(8|16)?|usada?8|(q|sh?|u[qh]?)?(as|sa)x|'+
            'and|adrl?|sbc|rs[bc]|asr|b[lx]?|blx|bxj|cbn?z|tb[bh]|bic|'+
            'bfc|bfi|[su]bfx|bkpt|cdp2?|clz|clrex|cmp|cmn|cpsi[ed]|cps|'+
            'setend|dbg|dmb|dsb|eor|isb|it[te]{0,3}|lsl|lsr|ror|rrx|'+
            'ldm(([id][ab])|f[ds])?|ldr((s|ex)?[bhd])?|movt?|mvn|mra|mar|'+
            'mul|[us]mull|smul[bwt][bt]|smu[as]d|smmul|smmla|'+
            'mla|umlaal|smlal?([wbt][bt]|d)|mls|smlsl?[ds]|smc|svc|sev|'+
            'mia([bt]{2}|ph)?|mrr?c2?|mcrr2?|mrs|msr|orr|orn|pkh(tb|bt)|rbit|'+
            'rev(16|sh)?|sel|[su]sat(16)?|nop|pop|push|rfe([id][ab])?|'+
            'stm([id][ab])?|str(ex)?[bhd]?|(qd?)?sub|(sh?|q|u[qh]?)?sub(8|16)|'+
            '[su]xt(a?h|a?b(16)?)|srs([id][ab])?|swpb?|swi|smi|tst|teq|'+
            'wfe|wfi|yield'+
        ')'+
        '(eq|ne|cs|cc|mi|pl|vs|vc|hi|ls|ge|lt|gt|le|al|hs|lo)?'+ //condition codes
        '[sptrx]?' ,                                             //legal postfixes
        end: '\\s'
      },
      hljs.COMMENT('[;@]', '$', {relevance: 0}),
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
            {begin: '[#$=]?0x[0-9a-f]+'}, //hex
            {begin: '[#$=]?0b[01]+'},     //bin
            {begin: '[#$=]\\d+'},        //literal
            {begin: '\\b\\d+'}           //bare number
        ],
        relevance: 0
      },
      {
        className: 'symbol',
        variants: [
            {begin: '^[a-z_\\.\\$][a-z0-9_\\.\\$]+'}, //ARM syntax
            {begin: '^\\s*[a-z_\\.\\$][a-z0-9_\\.\\$]+:'}, //GNU ARM syntax
            {begin: '[=#]\\w+' }  //label reference
        ],
        relevance: 0
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9hcm1hc20uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9hcm1hc20uanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gICAgLy9sb2NhbCBsYWJlbHM6ICU/W0ZCXT9bQVRdP1xcZHsxLDJ9XFx3K1xuICByZXR1cm4ge1xuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgYWxpYXNlczogWydhcm0nXSxcbiAgICBsZXhlbWVzOiAnXFxcXC4/JyArIGhsanMuSURFTlRfUkUsXG4gICAga2V5d29yZHM6IHtcbiAgICAgIG1ldGE6XG4gICAgICAgIC8vR05VIHByZXByb2NzXG4gICAgICAgICcuMmJ5dGUgLjRieXRlIC5hbGlnbiAuYXNjaWkgLmFzY2l6IC5iYWxpZ24gLmJ5dGUgLmNvZGUgLmRhdGEgLmVsc2UgLmVuZCAuZW5kaWYgLmVuZG0gLmVuZHIgLmVxdSAuZXJyIC5leGl0bSAuZXh0ZXJuIC5nbG9iYWwgLmh3b3JkIC5pZiAuaWZkZWYgLmlmbmRlZiAuaW5jbHVkZSAuaXJwIC5sb25nIC5tYWNybyAucmVwdCAucmVxIC5zZWN0aW9uIC5zZXQgLnNraXAgLnNwYWNlIC50ZXh0IC53b3JkIC5hcm0gLnRodW1iIC5jb2RlMTYgLmNvZGUzMiAuZm9yY2VfdGh1bWIgLnRodW1iX2Z1bmMgLmx0b3JnICcrXG4gICAgICAgIC8vQVJNIGRpcmVjdGl2ZXNcbiAgICAgICAgJ0FMSUFTIEFMSUdOIEFSTSBBUkVBIEFTU0VSVCBBVFRSIENOIENPREUgQ09ERTE2IENPREUzMiBDT01NT04gQ1AgREFUQSBEQ0IgRENEIERDRFUgRENETyBEQ0ZEIERDRkRVIERDSSBEQ1EgRENRVSBEQ1cgRENXVSBETiBFTElGIEVMU0UgRU5EIEVOREZVTkMgRU5ESUYgRU5EUCBFTlRSWSBFUVUgRVhQT1JUIEVYUE9SVEFTIEVYVEVSTiBGSUVMRCBGSUxMIEZVTkNUSU9OIEdCTEEgR0JMTCBHQkxTIEdFVCBHTE9CQUwgSUYgSU1QT1JUIElOQ0JJTiBJTkNMVURFIElORk8gS0VFUCBMQ0xBIExDTEwgTENMUyBMVE9SRyBNQUNSTyBNQVAgTUVORCBNRVhJVCBOT0ZQIE9QVCBQUkVTRVJWRTggUFJPQyBRTiBSRUFET05MWSBSRUxPQyBSRVFVSVJFIFJFUVVJUkU4IFJMSVNUIEZOIFJPVVQgU0VUQSBTRVRMIFNFVFMgU04gU1BBQ0UgU1VCVCBUSFVNQiBUSFVNQlggVFRMIFdISUxFIFdFTkQgJyxcbiAgICAgIGJ1aWx0X2luOlxuICAgICAgICAncjAgcjEgcjIgcjMgcjQgcjUgcjYgcjcgcjggcjkgcjEwIHIxMSByMTIgcjEzIHIxNCByMTUgJysgLy9zdGFuZGFyZCByZWdpc3RlcnNcbiAgICAgICAgJ3BjIGxyIHNwIGlwIHNsIHNiIGZwICcrIC8vdHlwaWNhbCByZWdzIHBsdXMgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICAgICAgICAnYTEgYTIgYTMgYTQgdjEgdjIgdjMgdjQgdjUgdjYgdjcgdjggZjAgZjEgZjIgZjMgZjQgZjUgZjYgZjcgJysgLy9tb3JlIHJlZ3MgYW5kIGZwXG4gICAgICAgICdwMCBwMSBwMiBwMyBwNCBwNSBwNiBwNyBwOCBwOSBwMTAgcDExIHAxMiBwMTMgcDE0IHAxNSAnKyAvL2NvcHJvY2Vzc29yIHJlZ3NcbiAgICAgICAgJ2MwIGMxIGMyIGMzIGM0IGM1IGM2IGM3IGM4IGM5IGMxMCBjMTEgYzEyIGMxMyBjMTQgYzE1ICcrIC8vbW9yZSBjb3Byb2NcbiAgICAgICAgJ3EwIHExIHEyIHEzIHE0IHE1IHE2IHE3IHE4IHE5IHExMCBxMTEgcTEyIHExMyBxMTQgcTE1ICcrIC8vYWR2YW5jZWQgU0lNRCBORU9OIHJlZ3NcblxuICAgICAgICAvL3Byb2dyYW0gc3RhdHVzIHJlZ2lzdGVyc1xuICAgICAgICAnY3Bzcl9jIGNwc3JfeCBjcHNyX3MgY3Bzcl9mIGNwc3JfY3ggY3Bzcl9jeHMgY3Bzcl94cyBjcHNyX3hzZiBjcHNyX3NmIGNwc3JfY3hzZiAnK1xuICAgICAgICAnc3Bzcl9jIHNwc3JfeCBzcHNyX3Mgc3Bzcl9mIHNwc3JfY3ggc3Bzcl9jeHMgc3Bzcl94cyBzcHNyX3hzZiBzcHNyX3NmIHNwc3JfY3hzZiAnK1xuXG4gICAgICAgIC8vTkVPTiBhbmQgVkZQIHJlZ2lzdGVyc1xuICAgICAgICAnczAgczEgczIgczMgczQgczUgczYgczcgczggczkgczEwIHMxMSBzMTIgczEzIHMxNCBzMTUgJytcbiAgICAgICAgJ3MxNiBzMTcgczE4IHMxOSBzMjAgczIxIHMyMiBzMjMgczI0IHMyNSBzMjYgczI3IHMyOCBzMjkgczMwIHMzMSAnK1xuICAgICAgICAnZDAgZDEgZDIgZDMgZDQgZDUgZDYgZDcgZDggZDkgZDEwIGQxMSBkMTIgZDEzIGQxNCBkMTUgJytcbiAgICAgICAgJ2QxNiBkMTcgZDE4IGQxOSBkMjAgZDIxIGQyMiBkMjMgZDI0IGQyNSBkMjYgZDI3IGQyOCBkMjkgZDMwIGQzMSAnICtcblxuICAgICAgICAne1BDfSB7VkFSfSB7VFJVRX0ge0ZBTFNFfSB7T1BUfSB7Q09ORklHfSB7RU5ESUFOfSB7Q09ERVNJWkV9IHtDUFV9IHtGUFV9IHtBUkNISVRFQ1RVUkV9IHtQQ1NUT1JFT0ZGU0VUfSB7QVJNQVNNX1ZFUlNJT059IHtJTlRFUn0ge1JPUEl9IHtSV1BJfSB7U1dTVH0ge05PU1dTVH0gLiBAJ1xuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgIGJlZ2luOiAnXFxcXGIoJysgICAgIC8vbW5lbW9uaWNzXG4gICAgICAgICAgICAnYWRjfCcrXG4gICAgICAgICAgICAnKHFkP3xzaD98dVtxaF0/KT9hZGQoOHwxNik/fHVzYWRhPzh8KHF8c2g/fHVbcWhdPyk/KGFzfHNhKXh8JytcbiAgICAgICAgICAgICdhbmR8YWRybD98c2JjfHJzW2JjXXxhc3J8YltseF0/fGJseHxieGp8Y2JuP3p8dGJbYmhdfGJpY3wnK1xuICAgICAgICAgICAgJ2JmY3xiZml8W3N1XWJmeHxia3B0fGNkcDI/fGNsenxjbHJleHxjbXB8Y21ufGNwc2lbZWRdfGNwc3wnK1xuICAgICAgICAgICAgJ3NldGVuZHxkYmd8ZG1ifGRzYnxlb3J8aXNifGl0W3RlXXswLDN9fGxzbHxsc3J8cm9yfHJyeHwnK1xuICAgICAgICAgICAgJ2xkbSgoW2lkXVthYl0pfGZbZHNdKT98bGRyKChzfGV4KT9bYmhkXSk/fG1vdnQ/fG12bnxtcmF8bWFyfCcrXG4gICAgICAgICAgICAnbXVsfFt1c11tdWxsfHNtdWxbYnd0XVtidF18c211W2FzXWR8c21tdWx8c21tbGF8JytcbiAgICAgICAgICAgICdtbGF8dW1sYWFsfHNtbGFsPyhbd2J0XVtidF18ZCl8bWxzfHNtbHNsP1tkc118c21jfHN2Y3xzZXZ8JytcbiAgICAgICAgICAgICdtaWEoW2J0XXsyfXxwaCk/fG1ycj9jMj98bWNycjI/fG1yc3xtc3J8b3JyfG9ybnxwa2godGJ8YnQpfHJiaXR8JytcbiAgICAgICAgICAgICdyZXYoMTZ8c2gpP3xzZWx8W3N1XXNhdCgxNik/fG5vcHxwb3B8cHVzaHxyZmUoW2lkXVthYl0pP3wnK1xuICAgICAgICAgICAgJ3N0bShbaWRdW2FiXSk/fHN0cihleCk/W2JoZF0/fChxZD8pP3N1Ynwoc2g/fHF8dVtxaF0/KT9zdWIoOHwxNil8JytcbiAgICAgICAgICAgICdbc3VdeHQoYT9ofGE/YigxNik/KXxzcnMoW2lkXVthYl0pP3xzd3BiP3xzd2l8c21pfHRzdHx0ZXF8JytcbiAgICAgICAgICAgICd3ZmV8d2ZpfHlpZWxkJytcbiAgICAgICAgJyknK1xuICAgICAgICAnKGVxfG5lfGNzfGNjfG1pfHBsfHZzfHZjfGhpfGxzfGdlfGx0fGd0fGxlfGFsfGhzfGxvKT8nKyAvL2NvbmRpdGlvbiBjb2Rlc1xuICAgICAgICAnW3NwdHJ4XT8nICwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2xlZ2FsIHBvc3RmaXhlc1xuICAgICAgICBlbmQ6ICdcXFxccydcbiAgICAgIH0sXG4gICAgICBobGpzLkNPTU1FTlQoJ1s7QF0nLCAnJCcsIHtyZWxldmFuY2U6IDB9KSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICBiZWdpbjogJ1xcJycsXG4gICAgICAgIGVuZDogJ1teXFxcXFxcXFxdXFwnJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgIGJlZ2luOiAnXFxcXHwnLCBlbmQ6ICdcXFxcfCcsXG4gICAgICAgIGlsbGVnYWw6ICdcXFxcbicsXG4gICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICAgIHtiZWdpbjogJ1sjJD1dPzB4WzAtOWEtZl0rJ30sIC8vaGV4XG4gICAgICAgICAgICB7YmVnaW46ICdbIyQ9XT8wYlswMV0rJ30sICAgICAvL2JpblxuICAgICAgICAgICAge2JlZ2luOiAnWyMkPV1cXFxcZCsnfSwgICAgICAgIC8vbGl0ZXJhbFxuICAgICAgICAgICAge2JlZ2luOiAnXFxcXGJcXFxcZCsnfSAgICAgICAgICAgLy9iYXJlIG51bWJlclxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICB7YmVnaW46ICdeW2Etel9cXFxcLlxcXFwkXVthLXowLTlfXFxcXC5cXFxcJF0rJ30sIC8vQVJNIHN5bnRheFxuICAgICAgICAgICAge2JlZ2luOiAnXlxcXFxzKlthLXpfXFxcXC5cXFxcJF1bYS16MC05X1xcXFwuXFxcXCRdKzonfSwgLy9HTlUgQVJNIHN5bnRheFxuICAgICAgICAgICAge2JlZ2luOiAnWz0jXVxcXFx3KycgfSAgLy9sYWJlbCByZWZlcmVuY2VcbiAgICAgICAgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9XG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=