(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_hsp"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/hsp.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/hsp.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    case_insensitive: true,
    lexemes: /[\w\._]+/,
    keywords: 'goto gosub return break repeat loop continue wait await dim sdim foreach dimtype dup dupptr end stop newmod delmod mref run exgoto on mcall assert logmes newlab resume yield onexit onerror onkey onclick oncmd exist delete mkdir chdir dirlist bload bsave bcopy memfile if else poke wpoke lpoke getstr chdpm memexpand memcpy memset notesel noteadd notedel noteload notesave randomize noteunsel noteget split strrep setease button chgdisp exec dialog mmload mmplay mmstop mci pset pget syscolor mes print title pos circle cls font sysfont objsize picload color palcolor palette redraw width gsel gcopy gzoom gmode bmpsave hsvcolor getkey listbox chkbox combox input mesbox buffer screen bgscr mouse objsel groll line clrobj boxf objprm objmode stick grect grotate gsquare gradf objimage objskip objenable celload celdiv celput newcom querycom delcom cnvstow comres axobj winobj sendmsg comevent comevarg sarrayconv callfunc cnvwtos comevdisp libptr system hspstat hspver stat cnt err strsize looplev sublev iparam wparam lparam refstr refdval int rnd strlen length length2 length3 length4 vartype gettime peek wpeek lpeek varptr varuse noteinfo instr abs limit getease str strmid strf getpath strtrim sin cos tan atan sqrt double absf expf logf limitf powf geteasef mousex mousey mousew hwnd hinstance hdc ginfo objinfo dirinfo sysinfo thismod __hspver__ __hsp30__ __date__ __time__ __line__ __file__ _debug __hspdef__ and or xor not screen_normal screen_palette screen_hide screen_fixedsize screen_tool screen_frame gmode_gdi gmode_mem gmode_rgb0 gmode_alpha gmode_rgb0alpha gmode_add gmode_sub gmode_pixela ginfo_mx ginfo_my ginfo_act ginfo_sel ginfo_wx1 ginfo_wy1 ginfo_wx2 ginfo_wy2 ginfo_vx ginfo_vy ginfo_sizex ginfo_sizey ginfo_winx ginfo_winy ginfo_mesx ginfo_mesy ginfo_r ginfo_g ginfo_b ginfo_paluse ginfo_dispx ginfo_dispy ginfo_cx ginfo_cy ginfo_intid ginfo_newid ginfo_sx ginfo_sy objinfo_mode objinfo_bmscr objinfo_hwnd notemax notesize dir_cur dir_exe dir_win dir_sys dir_cmdline dir_desktop dir_mydoc dir_tv font_normal font_bold font_italic font_underline font_strikeout font_antialias objmode_normal objmode_guifont objmode_usefont gsquare_grad msgothic msmincho do until while wend for next _break _continue switch case default swbreak swend ddim ldim alloc m_pi rad2deg deg2rad ease_linear ease_quad_in ease_quad_out ease_quad_inout ease_cubic_in ease_cubic_out ease_cubic_inout ease_quartic_in ease_quartic_out ease_quartic_inout ease_bounce_in ease_bounce_out ease_bounce_inout ease_shake_in ease_shake_out ease_shake_inout ease_loop',
    contains: [
      hljs.C_LINE_COMMENT_MODE,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.APOS_STRING_MODE,

      {
        // multi-line string
        className: 'string',
        begin: '{"', end: '"}',
        contains: [hljs.BACKSLASH_ESCAPE]
      },

      hljs.COMMENT(';', '$', {relevance: 0}),

      {
        // pre-processor
        className: 'meta',
        begin: '#', end: '$',
        keywords: {'meta-keyword': 'addion cfunc cmd cmpopt comfunc const defcfunc deffunc define else endif enum epack func global if ifdef ifndef include modcfunc modfunc modinit modterm module pack packopt regcmd runtime undef usecom uselib'},
        contains: [
          hljs.inherit(hljs.QUOTE_STRING_MODE, {className: 'meta-string'}),
          hljs.NUMBER_MODE,
          hljs.C_NUMBER_MODE,
          hljs.C_LINE_COMMENT_MODE,
          hljs.C_BLOCK_COMMENT_MODE
        ]
      },

      {
        // label
        className: 'symbol',
        begin: '^\\*(\\w+|@)'
      },

      hljs.NUMBER_MODE,
      hljs.C_NUMBER_MODE
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9oc3AuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9oc3AuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihobGpzKSB7XG4gIHJldHVybiB7XG4gICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICBsZXhlbWVzOiAvW1xcd1xcLl9dKy8sXG4gICAga2V5d29yZHM6ICdnb3RvIGdvc3ViIHJldHVybiBicmVhayByZXBlYXQgbG9vcCBjb250aW51ZSB3YWl0IGF3YWl0IGRpbSBzZGltIGZvcmVhY2ggZGltdHlwZSBkdXAgZHVwcHRyIGVuZCBzdG9wIG5ld21vZCBkZWxtb2QgbXJlZiBydW4gZXhnb3RvIG9uIG1jYWxsIGFzc2VydCBsb2dtZXMgbmV3bGFiIHJlc3VtZSB5aWVsZCBvbmV4aXQgb25lcnJvciBvbmtleSBvbmNsaWNrIG9uY21kIGV4aXN0IGRlbGV0ZSBta2RpciBjaGRpciBkaXJsaXN0IGJsb2FkIGJzYXZlIGJjb3B5IG1lbWZpbGUgaWYgZWxzZSBwb2tlIHdwb2tlIGxwb2tlIGdldHN0ciBjaGRwbSBtZW1leHBhbmQgbWVtY3B5IG1lbXNldCBub3Rlc2VsIG5vdGVhZGQgbm90ZWRlbCBub3RlbG9hZCBub3Rlc2F2ZSByYW5kb21pemUgbm90ZXVuc2VsIG5vdGVnZXQgc3BsaXQgc3RycmVwIHNldGVhc2UgYnV0dG9uIGNoZ2Rpc3AgZXhlYyBkaWFsb2cgbW1sb2FkIG1tcGxheSBtbXN0b3AgbWNpIHBzZXQgcGdldCBzeXNjb2xvciBtZXMgcHJpbnQgdGl0bGUgcG9zIGNpcmNsZSBjbHMgZm9udCBzeXNmb250IG9ianNpemUgcGljbG9hZCBjb2xvciBwYWxjb2xvciBwYWxldHRlIHJlZHJhdyB3aWR0aCBnc2VsIGdjb3B5IGd6b29tIGdtb2RlIGJtcHNhdmUgaHN2Y29sb3IgZ2V0a2V5IGxpc3Rib3ggY2hrYm94IGNvbWJveCBpbnB1dCBtZXNib3ggYnVmZmVyIHNjcmVlbiBiZ3NjciBtb3VzZSBvYmpzZWwgZ3JvbGwgbGluZSBjbHJvYmogYm94ZiBvYmpwcm0gb2JqbW9kZSBzdGljayBncmVjdCBncm90YXRlIGdzcXVhcmUgZ3JhZGYgb2JqaW1hZ2Ugb2Jqc2tpcCBvYmplbmFibGUgY2VsbG9hZCBjZWxkaXYgY2VscHV0IG5ld2NvbSBxdWVyeWNvbSBkZWxjb20gY252c3RvdyBjb21yZXMgYXhvYmogd2lub2JqIHNlbmRtc2cgY29tZXZlbnQgY29tZXZhcmcgc2FycmF5Y29udiBjYWxsZnVuYyBjbnZ3dG9zIGNvbWV2ZGlzcCBsaWJwdHIgc3lzdGVtIGhzcHN0YXQgaHNwdmVyIHN0YXQgY250IGVyciBzdHJzaXplIGxvb3BsZXYgc3VibGV2IGlwYXJhbSB3cGFyYW0gbHBhcmFtIHJlZnN0ciByZWZkdmFsIGludCBybmQgc3RybGVuIGxlbmd0aCBsZW5ndGgyIGxlbmd0aDMgbGVuZ3RoNCB2YXJ0eXBlIGdldHRpbWUgcGVlayB3cGVlayBscGVlayB2YXJwdHIgdmFydXNlIG5vdGVpbmZvIGluc3RyIGFicyBsaW1pdCBnZXRlYXNlIHN0ciBzdHJtaWQgc3RyZiBnZXRwYXRoIHN0cnRyaW0gc2luIGNvcyB0YW4gYXRhbiBzcXJ0IGRvdWJsZSBhYnNmIGV4cGYgbG9nZiBsaW1pdGYgcG93ZiBnZXRlYXNlZiBtb3VzZXggbW91c2V5IG1vdXNldyBod25kIGhpbnN0YW5jZSBoZGMgZ2luZm8gb2JqaW5mbyBkaXJpbmZvIHN5c2luZm8gdGhpc21vZCBfX2hzcHZlcl9fIF9faHNwMzBfXyBfX2RhdGVfXyBfX3RpbWVfXyBfX2xpbmVfXyBfX2ZpbGVfXyBfZGVidWcgX19oc3BkZWZfXyBhbmQgb3IgeG9yIG5vdCBzY3JlZW5fbm9ybWFsIHNjcmVlbl9wYWxldHRlIHNjcmVlbl9oaWRlIHNjcmVlbl9maXhlZHNpemUgc2NyZWVuX3Rvb2wgc2NyZWVuX2ZyYW1lIGdtb2RlX2dkaSBnbW9kZV9tZW0gZ21vZGVfcmdiMCBnbW9kZV9hbHBoYSBnbW9kZV9yZ2IwYWxwaGEgZ21vZGVfYWRkIGdtb2RlX3N1YiBnbW9kZV9waXhlbGEgZ2luZm9fbXggZ2luZm9fbXkgZ2luZm9fYWN0IGdpbmZvX3NlbCBnaW5mb193eDEgZ2luZm9fd3kxIGdpbmZvX3d4MiBnaW5mb193eTIgZ2luZm9fdnggZ2luZm9fdnkgZ2luZm9fc2l6ZXggZ2luZm9fc2l6ZXkgZ2luZm9fd2lueCBnaW5mb193aW55IGdpbmZvX21lc3ggZ2luZm9fbWVzeSBnaW5mb19yIGdpbmZvX2cgZ2luZm9fYiBnaW5mb19wYWx1c2UgZ2luZm9fZGlzcHggZ2luZm9fZGlzcHkgZ2luZm9fY3ggZ2luZm9fY3kgZ2luZm9faW50aWQgZ2luZm9fbmV3aWQgZ2luZm9fc3ggZ2luZm9fc3kgb2JqaW5mb19tb2RlIG9iamluZm9fYm1zY3Igb2JqaW5mb19od25kIG5vdGVtYXggbm90ZXNpemUgZGlyX2N1ciBkaXJfZXhlIGRpcl93aW4gZGlyX3N5cyBkaXJfY21kbGluZSBkaXJfZGVza3RvcCBkaXJfbXlkb2MgZGlyX3R2IGZvbnRfbm9ybWFsIGZvbnRfYm9sZCBmb250X2l0YWxpYyBmb250X3VuZGVybGluZSBmb250X3N0cmlrZW91dCBmb250X2FudGlhbGlhcyBvYmptb2RlX25vcm1hbCBvYmptb2RlX2d1aWZvbnQgb2JqbW9kZV91c2Vmb250IGdzcXVhcmVfZ3JhZCBtc2dvdGhpYyBtc21pbmNobyBkbyB1bnRpbCB3aGlsZSB3ZW5kIGZvciBuZXh0IF9icmVhayBfY29udGludWUgc3dpdGNoIGNhc2UgZGVmYXVsdCBzd2JyZWFrIHN3ZW5kIGRkaW0gbGRpbSBhbGxvYyBtX3BpIHJhZDJkZWcgZGVnMnJhZCBlYXNlX2xpbmVhciBlYXNlX3F1YWRfaW4gZWFzZV9xdWFkX291dCBlYXNlX3F1YWRfaW5vdXQgZWFzZV9jdWJpY19pbiBlYXNlX2N1YmljX291dCBlYXNlX2N1YmljX2lub3V0IGVhc2VfcXVhcnRpY19pbiBlYXNlX3F1YXJ0aWNfb3V0IGVhc2VfcXVhcnRpY19pbm91dCBlYXNlX2JvdW5jZV9pbiBlYXNlX2JvdW5jZV9vdXQgZWFzZV9ib3VuY2VfaW5vdXQgZWFzZV9zaGFrZV9pbiBlYXNlX3NoYWtlX291dCBlYXNlX3NoYWtlX2lub3V0IGVhc2VfbG9vcCcsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAgaGxqcy5BUE9TX1NUUklOR19NT0RFLFxuXG4gICAgICB7XG4gICAgICAgIC8vIG11bHRpLWxpbmUgc3RyaW5nXG4gICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgIGJlZ2luOiAne1wiJywgZW5kOiAnXCJ9JyxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLkJBQ0tTTEFTSF9FU0NBUEVdXG4gICAgICB9LFxuXG4gICAgICBobGpzLkNPTU1FTlQoJzsnLCAnJCcsIHtyZWxldmFuY2U6IDB9KSxcblxuICAgICAge1xuICAgICAgICAvLyBwcmUtcHJvY2Vzc29yXG4gICAgICAgIGNsYXNzTmFtZTogJ21ldGEnLFxuICAgICAgICBiZWdpbjogJyMnLCBlbmQ6ICckJyxcbiAgICAgICAga2V5d29yZHM6IHsnbWV0YS1rZXl3b3JkJzogJ2FkZGlvbiBjZnVuYyBjbWQgY21wb3B0IGNvbWZ1bmMgY29uc3QgZGVmY2Z1bmMgZGVmZnVuYyBkZWZpbmUgZWxzZSBlbmRpZiBlbnVtIGVwYWNrIGZ1bmMgZ2xvYmFsIGlmIGlmZGVmIGlmbmRlZiBpbmNsdWRlIG1vZGNmdW5jIG1vZGZ1bmMgbW9kaW5pdCBtb2R0ZXJtIG1vZHVsZSBwYWNrIHBhY2tvcHQgcmVnY21kIHJ1bnRpbWUgdW5kZWYgdXNlY29tIHVzZWxpYid9LFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLCB7Y2xhc3NOYW1lOiAnbWV0YS1zdHJpbmcnfSksXG4gICAgICAgICAgaGxqcy5OVU1CRVJfTU9ERSxcbiAgICAgICAgICBobGpzLkNfTlVNQkVSX01PREUsXG4gICAgICAgICAgaGxqcy5DX0xJTkVfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREVcbiAgICAgICAgXVxuICAgICAgfSxcblxuICAgICAge1xuICAgICAgICAvLyBsYWJlbFxuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogJ15cXFxcKihcXFxcdyt8QCknXG4gICAgICB9LFxuXG4gICAgICBobGpzLk5VTUJFUl9NT0RFLFxuICAgICAgaGxqcy5DX05VTUJFUl9NT0RFXG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9