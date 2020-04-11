(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_verilog"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/verilog.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/verilog.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var SV_KEYWORDS = {
    keyword:
      'accept_on alias always always_comb always_ff always_latch and assert assign ' +
      'assume automatic before begin bind bins binsof bit break buf|0 bufif0 bufif1 ' +
      'byte case casex casez cell chandle checker class clocking cmos config const ' +
      'constraint context continue cover covergroup coverpoint cross deassign default ' +
      'defparam design disable dist do edge else end endcase endchecker endclass ' +
      'endclocking endconfig endfunction endgenerate endgroup endinterface endmodule ' +
      'endpackage endprimitive endprogram endproperty endspecify endsequence endtable ' +
      'endtask enum event eventually expect export extends extern final first_match for ' +
      'force foreach forever fork forkjoin function generate|5 genvar global highz0 highz1 ' +
      'if iff ifnone ignore_bins illegal_bins implements implies import incdir include ' +
      'initial inout input inside instance int integer interconnect interface intersect ' +
      'join join_any join_none large let liblist library local localparam logic longint ' +
      'macromodule matches medium modport module nand negedge nettype new nexttime nmos ' +
      'nor noshowcancelled not notif0 notif1 or output package packed parameter pmos ' +
      'posedge primitive priority program property protected pull0 pull1 pulldown pullup ' +
      'pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos ' +
      'real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran ' +
      'rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared ' +
      'sequence shortint shortreal showcancelled signed small soft solve specify specparam ' +
      'static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on ' +
      'sync_reject_on table tagged task this throughout time timeprecision timeunit tran ' +
      'tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 ' +
      'unsigned until until_with untyped use uwire var vectored virtual void wait wait_order ' +
      'wand weak weak0 weak1 while wildcard wire with within wor xnor xor',
    literal:
      'null',
    built_in:
      '$finish $stop $exit $fatal $error $warning $info $realtime $time $printtimescale ' +
      '$bitstoreal $bitstoshortreal $itor $signed $cast $bits $stime $timeformat ' +
      '$realtobits $shortrealtobits $rtoi $unsigned $asserton $assertkill $assertpasson ' +
      '$assertfailon $assertnonvacuouson $assertoff $assertcontrol $assertpassoff ' +
      '$assertfailoff $assertvacuousoff $isunbounded $sampled $fell $changed $past_gclk ' +
      '$fell_gclk $changed_gclk $rising_gclk $steady_gclk $coverage_control ' +
      '$coverage_get $coverage_save $set_coverage_db_name $rose $stable $past ' +
      '$rose_gclk $stable_gclk $future_gclk $falling_gclk $changing_gclk $display ' +
      '$coverage_get_max $coverage_merge $get_coverage $load_coverage_db $typename ' +
      '$unpacked_dimensions $left $low $increment $clog2 $ln $log10 $exp $sqrt $pow ' +
      '$floor $ceil $sin $cos $tan $countbits $onehot $isunknown $fatal $warning ' +
      '$dimensions $right $high $size $asin $acos $atan $atan2 $hypot $sinh $cosh ' +
      '$tanh $asinh $acosh $atanh $countones $onehot0 $error $info $random ' +
      '$dist_chi_square $dist_erlang $dist_exponential $dist_normal $dist_poisson ' +
      '$dist_t $dist_uniform $q_initialize $q_remove $q_exam $async$and$array ' +
      '$async$nand$array $async$or$array $async$nor$array $sync$and$array ' +
      '$sync$nand$array $sync$or$array $sync$nor$array $q_add $q_full $psprintf ' +
      '$async$and$plane $async$nand$plane $async$or$plane $async$nor$plane ' +
      '$sync$and$plane $sync$nand$plane $sync$or$plane $sync$nor$plane $system ' +
      '$display $displayb $displayh $displayo $strobe $strobeb $strobeh $strobeo ' +
      '$write $readmemb $readmemh $writememh $value$plusargs ' +
      '$dumpvars $dumpon $dumplimit $dumpports $dumpportson $dumpportslimit ' +
      '$writeb $writeh $writeo $monitor $monitorb $monitorh $monitoro $writememb ' +
      '$dumpfile $dumpoff $dumpall $dumpflush $dumpportsoff $dumpportsall ' +
      '$dumpportsflush $fclose $fdisplay $fdisplayb $fdisplayh $fdisplayo ' +
      '$fstrobe $fstrobeb $fstrobeh $fstrobeo $swrite $swriteb $swriteh ' +
      '$swriteo $fscanf $fread $fseek $fflush $feof $fopen $fwrite $fwriteb ' +
      '$fwriteh $fwriteo $fmonitor $fmonitorb $fmonitorh $fmonitoro $sformat ' +
      '$sformatf $fgetc $ungetc $fgets $sscanf $rewind $ftell $ferror'
    };
  return {
    aliases: ['v', 'sv', 'svh'],
    case_insensitive: false,
    keywords: SV_KEYWORDS, lexemes: /[\w\$]+/,
    contains: [
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE,
      hljs.QUOTE_STRING_MODE,
      {
        className: 'number',
        contains: [hljs.BACKSLASH_ESCAPE],
        variants: [
          {begin: '\\b((\\d+\'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)'},
          {begin: '\\B((\'(b|h|o|d|B|H|O|D))[0-9xzXZa-fA-F_]+)'},
          {begin: '\\b([0-9_])+', relevance: 0}
        ]
      },
      /* parameters to instances */
      {
        className: 'variable',
        variants: [
          {begin: '#\\((?!parameter).+\\)'},
          {begin: '\\.\\w+', relevance: 0},
        ]
      },
      {
        className: 'meta',
        begin: '`', end: '$',
        keywords: {'meta-keyword': 'define __FILE__ ' +
          '__LINE__ begin_keywords celldefine default_nettype define ' +
          'else elsif end_keywords endcelldefine endif ifdef ifndef ' +
          'include line nounconnected_drive pragma resetall timescale ' +
          'unconnected_drive undef undefineall'},
        relevance: 0
      }
    ]
  }; // return
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF92ZXJpbG9nLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvdmVyaWxvZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIFNWX0tFWVdPUkRTID0ge1xuICAgIGtleXdvcmQ6XG4gICAgICAnYWNjZXB0X29uIGFsaWFzIGFsd2F5cyBhbHdheXNfY29tYiBhbHdheXNfZmYgYWx3YXlzX2xhdGNoIGFuZCBhc3NlcnQgYXNzaWduICcgK1xuICAgICAgJ2Fzc3VtZSBhdXRvbWF0aWMgYmVmb3JlIGJlZ2luIGJpbmQgYmlucyBiaW5zb2YgYml0IGJyZWFrIGJ1ZnwwIGJ1ZmlmMCBidWZpZjEgJyArXG4gICAgICAnYnl0ZSBjYXNlIGNhc2V4IGNhc2V6IGNlbGwgY2hhbmRsZSBjaGVja2VyIGNsYXNzIGNsb2NraW5nIGNtb3MgY29uZmlnIGNvbnN0ICcgK1xuICAgICAgJ2NvbnN0cmFpbnQgY29udGV4dCBjb250aW51ZSBjb3ZlciBjb3Zlcmdyb3VwIGNvdmVycG9pbnQgY3Jvc3MgZGVhc3NpZ24gZGVmYXVsdCAnICtcbiAgICAgICdkZWZwYXJhbSBkZXNpZ24gZGlzYWJsZSBkaXN0IGRvIGVkZ2UgZWxzZSBlbmQgZW5kY2FzZSBlbmRjaGVja2VyIGVuZGNsYXNzICcgK1xuICAgICAgJ2VuZGNsb2NraW5nIGVuZGNvbmZpZyBlbmRmdW5jdGlvbiBlbmRnZW5lcmF0ZSBlbmRncm91cCBlbmRpbnRlcmZhY2UgZW5kbW9kdWxlICcgK1xuICAgICAgJ2VuZHBhY2thZ2UgZW5kcHJpbWl0aXZlIGVuZHByb2dyYW0gZW5kcHJvcGVydHkgZW5kc3BlY2lmeSBlbmRzZXF1ZW5jZSBlbmR0YWJsZSAnICtcbiAgICAgICdlbmR0YXNrIGVudW0gZXZlbnQgZXZlbnR1YWxseSBleHBlY3QgZXhwb3J0IGV4dGVuZHMgZXh0ZXJuIGZpbmFsIGZpcnN0X21hdGNoIGZvciAnICtcbiAgICAgICdmb3JjZSBmb3JlYWNoIGZvcmV2ZXIgZm9yayBmb3Jram9pbiBmdW5jdGlvbiBnZW5lcmF0ZXw1IGdlbnZhciBnbG9iYWwgaGlnaHowIGhpZ2h6MSAnICtcbiAgICAgICdpZiBpZmYgaWZub25lIGlnbm9yZV9iaW5zIGlsbGVnYWxfYmlucyBpbXBsZW1lbnRzIGltcGxpZXMgaW1wb3J0IGluY2RpciBpbmNsdWRlICcgK1xuICAgICAgJ2luaXRpYWwgaW5vdXQgaW5wdXQgaW5zaWRlIGluc3RhbmNlIGludCBpbnRlZ2VyIGludGVyY29ubmVjdCBpbnRlcmZhY2UgaW50ZXJzZWN0ICcgK1xuICAgICAgJ2pvaW4gam9pbl9hbnkgam9pbl9ub25lIGxhcmdlIGxldCBsaWJsaXN0IGxpYnJhcnkgbG9jYWwgbG9jYWxwYXJhbSBsb2dpYyBsb25naW50ICcgK1xuICAgICAgJ21hY3JvbW9kdWxlIG1hdGNoZXMgbWVkaXVtIG1vZHBvcnQgbW9kdWxlIG5hbmQgbmVnZWRnZSBuZXR0eXBlIG5ldyBuZXh0dGltZSBubW9zICcgK1xuICAgICAgJ25vciBub3Nob3djYW5jZWxsZWQgbm90IG5vdGlmMCBub3RpZjEgb3Igb3V0cHV0IHBhY2thZ2UgcGFja2VkIHBhcmFtZXRlciBwbW9zICcgK1xuICAgICAgJ3Bvc2VkZ2UgcHJpbWl0aXZlIHByaW9yaXR5IHByb2dyYW0gcHJvcGVydHkgcHJvdGVjdGVkIHB1bGwwIHB1bGwxIHB1bGxkb3duIHB1bGx1cCAnICtcbiAgICAgICdwdWxzZXN0eWxlX29uZGV0ZWN0IHB1bHNlc3R5bGVfb25ldmVudCBwdXJlIHJhbmQgcmFuZGMgcmFuZGNhc2UgcmFuZHNlcXVlbmNlIHJjbW9zICcgK1xuICAgICAgJ3JlYWwgcmVhbHRpbWUgcmVmIHJlZyByZWplY3Rfb24gcmVsZWFzZSByZXBlYXQgcmVzdHJpY3QgcmV0dXJuIHJubW9zIHJwbW9zIHJ0cmFuICcgK1xuICAgICAgJ3J0cmFuaWYwIHJ0cmFuaWYxIHNfYWx3YXlzIHNfZXZlbnR1YWxseSBzX25leHR0aW1lIHNfdW50aWwgc191bnRpbF93aXRoIHNjYWxhcmVkICcgK1xuICAgICAgJ3NlcXVlbmNlIHNob3J0aW50IHNob3J0cmVhbCBzaG93Y2FuY2VsbGVkIHNpZ25lZCBzbWFsbCBzb2Z0IHNvbHZlIHNwZWNpZnkgc3BlY3BhcmFtICcgK1xuICAgICAgJ3N0YXRpYyBzdHJpbmcgc3Ryb25nIHN0cm9uZzAgc3Ryb25nMSBzdHJ1Y3Qgc3VwZXIgc3VwcGx5MCBzdXBwbHkxIHN5bmNfYWNjZXB0X29uICcgK1xuICAgICAgJ3N5bmNfcmVqZWN0X29uIHRhYmxlIHRhZ2dlZCB0YXNrIHRoaXMgdGhyb3VnaG91dCB0aW1lIHRpbWVwcmVjaXNpb24gdGltZXVuaXQgdHJhbiAnICtcbiAgICAgICd0cmFuaWYwIHRyYW5pZjEgdHJpIHRyaTAgdHJpMSB0cmlhbmQgdHJpb3IgdHJpcmVnIHR5cGUgdHlwZWRlZiB1bmlvbiB1bmlxdWUgdW5pcXVlMCAnICtcbiAgICAgICd1bnNpZ25lZCB1bnRpbCB1bnRpbF93aXRoIHVudHlwZWQgdXNlIHV3aXJlIHZhciB2ZWN0b3JlZCB2aXJ0dWFsIHZvaWQgd2FpdCB3YWl0X29yZGVyICcgK1xuICAgICAgJ3dhbmQgd2VhayB3ZWFrMCB3ZWFrMSB3aGlsZSB3aWxkY2FyZCB3aXJlIHdpdGggd2l0aGluIHdvciB4bm9yIHhvcicsXG4gICAgbGl0ZXJhbDpcbiAgICAgICdudWxsJyxcbiAgICBidWlsdF9pbjpcbiAgICAgICckZmluaXNoICRzdG9wICRleGl0ICRmYXRhbCAkZXJyb3IgJHdhcm5pbmcgJGluZm8gJHJlYWx0aW1lICR0aW1lICRwcmludHRpbWVzY2FsZSAnICtcbiAgICAgICckYml0c3RvcmVhbCAkYml0c3Rvc2hvcnRyZWFsICRpdG9yICRzaWduZWQgJGNhc3QgJGJpdHMgJHN0aW1lICR0aW1lZm9ybWF0ICcgK1xuICAgICAgJyRyZWFsdG9iaXRzICRzaG9ydHJlYWx0b2JpdHMgJHJ0b2kgJHVuc2lnbmVkICRhc3NlcnRvbiAkYXNzZXJ0a2lsbCAkYXNzZXJ0cGFzc29uICcgK1xuICAgICAgJyRhc3NlcnRmYWlsb24gJGFzc2VydG5vbnZhY3VvdXNvbiAkYXNzZXJ0b2ZmICRhc3NlcnRjb250cm9sICRhc3NlcnRwYXNzb2ZmICcgK1xuICAgICAgJyRhc3NlcnRmYWlsb2ZmICRhc3NlcnR2YWN1b3Vzb2ZmICRpc3VuYm91bmRlZCAkc2FtcGxlZCAkZmVsbCAkY2hhbmdlZCAkcGFzdF9nY2xrICcgK1xuICAgICAgJyRmZWxsX2djbGsgJGNoYW5nZWRfZ2NsayAkcmlzaW5nX2djbGsgJHN0ZWFkeV9nY2xrICRjb3ZlcmFnZV9jb250cm9sICcgK1xuICAgICAgJyRjb3ZlcmFnZV9nZXQgJGNvdmVyYWdlX3NhdmUgJHNldF9jb3ZlcmFnZV9kYl9uYW1lICRyb3NlICRzdGFibGUgJHBhc3QgJyArXG4gICAgICAnJHJvc2VfZ2NsayAkc3RhYmxlX2djbGsgJGZ1dHVyZV9nY2xrICRmYWxsaW5nX2djbGsgJGNoYW5naW5nX2djbGsgJGRpc3BsYXkgJyArXG4gICAgICAnJGNvdmVyYWdlX2dldF9tYXggJGNvdmVyYWdlX21lcmdlICRnZXRfY292ZXJhZ2UgJGxvYWRfY292ZXJhZ2VfZGIgJHR5cGVuYW1lICcgK1xuICAgICAgJyR1bnBhY2tlZF9kaW1lbnNpb25zICRsZWZ0ICRsb3cgJGluY3JlbWVudCAkY2xvZzIgJGxuICRsb2cxMCAkZXhwICRzcXJ0ICRwb3cgJyArXG4gICAgICAnJGZsb29yICRjZWlsICRzaW4gJGNvcyAkdGFuICRjb3VudGJpdHMgJG9uZWhvdCAkaXN1bmtub3duICRmYXRhbCAkd2FybmluZyAnICtcbiAgICAgICckZGltZW5zaW9ucyAkcmlnaHQgJGhpZ2ggJHNpemUgJGFzaW4gJGFjb3MgJGF0YW4gJGF0YW4yICRoeXBvdCAkc2luaCAkY29zaCAnICtcbiAgICAgICckdGFuaCAkYXNpbmggJGFjb3NoICRhdGFuaCAkY291bnRvbmVzICRvbmVob3QwICRlcnJvciAkaW5mbyAkcmFuZG9tICcgK1xuICAgICAgJyRkaXN0X2NoaV9zcXVhcmUgJGRpc3RfZXJsYW5nICRkaXN0X2V4cG9uZW50aWFsICRkaXN0X25vcm1hbCAkZGlzdF9wb2lzc29uICcgK1xuICAgICAgJyRkaXN0X3QgJGRpc3RfdW5pZm9ybSAkcV9pbml0aWFsaXplICRxX3JlbW92ZSAkcV9leGFtICRhc3luYyRhbmQkYXJyYXkgJyArXG4gICAgICAnJGFzeW5jJG5hbmQkYXJyYXkgJGFzeW5jJG9yJGFycmF5ICRhc3luYyRub3IkYXJyYXkgJHN5bmMkYW5kJGFycmF5ICcgK1xuICAgICAgJyRzeW5jJG5hbmQkYXJyYXkgJHN5bmMkb3IkYXJyYXkgJHN5bmMkbm9yJGFycmF5ICRxX2FkZCAkcV9mdWxsICRwc3ByaW50ZiAnICtcbiAgICAgICckYXN5bmMkYW5kJHBsYW5lICRhc3luYyRuYW5kJHBsYW5lICRhc3luYyRvciRwbGFuZSAkYXN5bmMkbm9yJHBsYW5lICcgK1xuICAgICAgJyRzeW5jJGFuZCRwbGFuZSAkc3luYyRuYW5kJHBsYW5lICRzeW5jJG9yJHBsYW5lICRzeW5jJG5vciRwbGFuZSAkc3lzdGVtICcgK1xuICAgICAgJyRkaXNwbGF5ICRkaXNwbGF5YiAkZGlzcGxheWggJGRpc3BsYXlvICRzdHJvYmUgJHN0cm9iZWIgJHN0cm9iZWggJHN0cm9iZW8gJyArXG4gICAgICAnJHdyaXRlICRyZWFkbWVtYiAkcmVhZG1lbWggJHdyaXRlbWVtaCAkdmFsdWUkcGx1c2FyZ3MgJyArXG4gICAgICAnJGR1bXB2YXJzICRkdW1wb24gJGR1bXBsaW1pdCAkZHVtcHBvcnRzICRkdW1wcG9ydHNvbiAkZHVtcHBvcnRzbGltaXQgJyArXG4gICAgICAnJHdyaXRlYiAkd3JpdGVoICR3cml0ZW8gJG1vbml0b3IgJG1vbml0b3JiICRtb25pdG9yaCAkbW9uaXRvcm8gJHdyaXRlbWVtYiAnICtcbiAgICAgICckZHVtcGZpbGUgJGR1bXBvZmYgJGR1bXBhbGwgJGR1bXBmbHVzaCAkZHVtcHBvcnRzb2ZmICRkdW1wcG9ydHNhbGwgJyArXG4gICAgICAnJGR1bXBwb3J0c2ZsdXNoICRmY2xvc2UgJGZkaXNwbGF5ICRmZGlzcGxheWIgJGZkaXNwbGF5aCAkZmRpc3BsYXlvICcgK1xuICAgICAgJyRmc3Ryb2JlICRmc3Ryb2JlYiAkZnN0cm9iZWggJGZzdHJvYmVvICRzd3JpdGUgJHN3cml0ZWIgJHN3cml0ZWggJyArXG4gICAgICAnJHN3cml0ZW8gJGZzY2FuZiAkZnJlYWQgJGZzZWVrICRmZmx1c2ggJGZlb2YgJGZvcGVuICRmd3JpdGUgJGZ3cml0ZWIgJyArXG4gICAgICAnJGZ3cml0ZWggJGZ3cml0ZW8gJGZtb25pdG9yICRmbW9uaXRvcmIgJGZtb25pdG9yaCAkZm1vbml0b3JvICRzZm9ybWF0ICcgK1xuICAgICAgJyRzZm9ybWF0ZiAkZmdldGMgJHVuZ2V0YyAkZmdldHMgJHNzY2FuZiAkcmV3aW5kICRmdGVsbCAkZmVycm9yJ1xuICAgIH07XG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWyd2JywgJ3N2JywgJ3N2aCddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IGZhbHNlLFxuICAgIGtleXdvcmRzOiBTVl9LRVlXT1JEUywgbGV4ZW1lczogL1tcXHdcXCRdKy8sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG4gICAgICBobGpzLkNfTElORV9DT01NRU5UX01PREUsXG4gICAgICBobGpzLlFVT1RFX1NUUklOR19NT0RFLFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV0sXG4gICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAge2JlZ2luOiAnXFxcXGIoKFxcXFxkK1xcJyhifGh8b3xkfEJ8SHxPfEQpKVswLTl4elhaYS1mQS1GX10rKSd9LFxuICAgICAgICAgIHtiZWdpbjogJ1xcXFxCKChcXCcoYnxofG98ZHxCfEh8T3xEKSlbMC05eHpYWmEtZkEtRl9dKyknfSxcbiAgICAgICAgICB7YmVnaW46ICdcXFxcYihbMC05X10pKycsIHJlbGV2YW5jZTogMH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8qIHBhcmFtZXRlcnMgdG8gaW5zdGFuY2VzICovXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7YmVnaW46ICcjXFxcXCgoPyFwYXJhbWV0ZXIpLitcXFxcKSd9LFxuICAgICAgICAgIHtiZWdpbjogJ1xcXFwuXFxcXHcrJywgcmVsZXZhbmNlOiAwfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnYCcsIGVuZDogJyQnLFxuICAgICAgICBrZXl3b3JkczogeydtZXRhLWtleXdvcmQnOiAnZGVmaW5lIF9fRklMRV9fICcgK1xuICAgICAgICAgICdfX0xJTkVfXyBiZWdpbl9rZXl3b3JkcyBjZWxsZGVmaW5lIGRlZmF1bHRfbmV0dHlwZSBkZWZpbmUgJyArXG4gICAgICAgICAgJ2Vsc2UgZWxzaWYgZW5kX2tleXdvcmRzIGVuZGNlbGxkZWZpbmUgZW5kaWYgaWZkZWYgaWZuZGVmICcgK1xuICAgICAgICAgICdpbmNsdWRlIGxpbmUgbm91bmNvbm5lY3RlZF9kcml2ZSBwcmFnbWEgcmVzZXRhbGwgdGltZXNjYWxlICcgK1xuICAgICAgICAgICd1bmNvbm5lY3RlZF9kcml2ZSB1bmRlZiB1bmRlZmluZWFsbCd9LFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH1cbiAgICBdXG4gIH07IC8vIHJldHVyblxufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==