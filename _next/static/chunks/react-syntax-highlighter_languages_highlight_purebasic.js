(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_purebasic"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/purebasic.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/purebasic.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = // Base deafult colors in PB IDE: background: #FFFFDF; foreground: #000000;

function(hljs) {
  var STRINGS = { // PB IDE color: #0080FF (Azure Radiance)
    className: 'string',
    begin: '(~)?"', end: '"',
    illegal: '\\n'
  };
  var CONSTANTS = { // PB IDE color: #924B72 (Cannon Pink)
    //  "#" + a letter or underscore + letters, digits or underscores + (optional) "$"
    className: 'symbol',
    begin: '#[a-zA-Z_]\\w*\\$?'
  };

  return {
    aliases: ['pb', 'pbi'],
    keywords: // PB IDE color: #006666 (Blue Stone) + Bold
      // Keywords from all version of PureBASIC 5.00 upward ...
      'Align And Array As Break CallDebugger Case CompilerCase CompilerDefault ' +
      'CompilerElse CompilerElseIf CompilerEndIf CompilerEndSelect CompilerError ' +
      'CompilerIf CompilerSelect CompilerWarning Continue Data DataSection Debug ' +
      'DebugLevel Declare DeclareC DeclareCDLL DeclareDLL DeclareModule Default ' +
      'Define Dim DisableASM DisableDebugger DisableExplicit Else ElseIf EnableASM ' +
      'EnableDebugger EnableExplicit End EndDataSection EndDeclareModule EndEnumeration ' +
      'EndIf EndImport EndInterface EndMacro EndModule EndProcedure EndSelect ' +
      'EndStructure EndStructureUnion EndWith Enumeration EnumerationBinary Extends ' +
      'FakeReturn For ForEach ForEver Global Gosub Goto If Import ImportC ' +
      'IncludeBinary IncludeFile IncludePath Interface List Macro MacroExpandedCount ' +
      'Map Module NewList NewMap Next Not Or Procedure ProcedureC ' +
      'ProcedureCDLL ProcedureDLL ProcedureReturn Protected Prototype PrototypeC ReDim ' +
      'Read Repeat Restore Return Runtime Select Shared Static Step Structure ' +
      'StructureUnion Swap Threaded To UndefineMacro Until Until  UnuseModule ' +
      'UseModule Wend While With XIncludeFile XOr',
    contains: [
      // COMMENTS | PB IDE color: #00AAAA (Persian Green)
      hljs.COMMENT(';', '$', {relevance: 0}),

      { // PROCEDURES DEFINITIONS
        className: 'function',
        begin: '\\b(Procedure|Declare)(C|CDLL|DLL)?\\b',
        end: '\\(',
        excludeEnd: true,
        returnBegin: true,
        contains: [
          { // PROCEDURE KEYWORDS | PB IDE color: #006666 (Blue Stone) + Bold
            className: 'keyword',
            begin: '(Procedure|Declare)(C|CDLL|DLL)?',
            excludeEnd: true
          },
          { // PROCEDURE RETURN TYPE SETTING | PB IDE color: #000000 (Black)
            className: 'type',
            begin: '\\.\\w*'
            // end: ' ',
          },
          hljs.UNDERSCORE_TITLE_MODE // PROCEDURE NAME | PB IDE color: #006666 (Blue Stone)
        ]
      },
      STRINGS,
      CONSTANTS
    ]
  };
}

/*  ==============================================================================
                                      CHANGELOG                                   
    ==============================================================================
    - v.1.2 (2017-05-12)
        -- BUG-FIX: Some keywords were accidentally joyned together. Now fixed.
    - v.1.1 (2017-04-30)
        -- Updated to PureBASIC 5.60.
        -- Keywords list now built by extracting them from the PureBASIC SDK's
           "SyntaxHilighting.dll" (from each PureBASIC version). Tokens from each
           version are added to the list, and renamed or removed tokens are kept
           for the sake of covering all versions of the language from PureBASIC
           v5.00 upward. (NOTE: currently, there are no renamed or deprecated
           tokens in the keywords list). For more info, see:
           -- http://www.purebasic.fr/english/viewtopic.php?&p=506269
           -- https://github.com/tajmone/purebasic-archives/tree/master/syntax-highlighting/guidelines
    - v.1.0 (April 2016)
        -- First release
        -- Keywords list taken and adapted from GuShH's (Gustavo Julio Fiorenza)
           PureBasic language file for GeSHi:
           -- https://github.com/easybook/geshi/blob/master/geshi/purebasic.php
*/;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9wdXJlYmFzaWMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9wdXJlYmFzaWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAvLyBCYXNlIGRlYWZ1bHQgY29sb3JzIGluIFBCIElERTogYmFja2dyb3VuZDogI0ZGRkZERjsgZm9yZWdyb3VuZDogIzAwMDAwMDtcblxuZnVuY3Rpb24oaGxqcykge1xuICB2YXIgU1RSSU5HUyA9IHsgLy8gUEIgSURFIGNvbG9yOiAjMDA4MEZGIChBenVyZSBSYWRpYW5jZSlcbiAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgIGJlZ2luOiAnKH4pP1wiJywgZW5kOiAnXCInLFxuICAgIGlsbGVnYWw6ICdcXFxcbidcbiAgfTtcbiAgdmFyIENPTlNUQU5UUyA9IHsgLy8gUEIgSURFIGNvbG9yOiAjOTI0QjcyIChDYW5ub24gUGluaylcbiAgICAvLyAgXCIjXCIgKyBhIGxldHRlciBvciB1bmRlcnNjb3JlICsgbGV0dGVycywgZGlnaXRzIG9yIHVuZGVyc2NvcmVzICsgKG9wdGlvbmFsKSBcIiRcIlxuICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgYmVnaW46ICcjW2EtekEtWl9dXFxcXHcqXFxcXCQ/J1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydwYicsICdwYmknXSxcbiAgICBrZXl3b3JkczogLy8gUEIgSURFIGNvbG9yOiAjMDA2NjY2IChCbHVlIFN0b25lKSArIEJvbGRcbiAgICAgIC8vIEtleXdvcmRzIGZyb20gYWxsIHZlcnNpb24gb2YgUHVyZUJBU0lDIDUuMDAgdXB3YXJkIC4uLlxuICAgICAgJ0FsaWduIEFuZCBBcnJheSBBcyBCcmVhayBDYWxsRGVidWdnZXIgQ2FzZSBDb21waWxlckNhc2UgQ29tcGlsZXJEZWZhdWx0ICcgK1xuICAgICAgJ0NvbXBpbGVyRWxzZSBDb21waWxlckVsc2VJZiBDb21waWxlckVuZElmIENvbXBpbGVyRW5kU2VsZWN0IENvbXBpbGVyRXJyb3IgJyArXG4gICAgICAnQ29tcGlsZXJJZiBDb21waWxlclNlbGVjdCBDb21waWxlcldhcm5pbmcgQ29udGludWUgRGF0YSBEYXRhU2VjdGlvbiBEZWJ1ZyAnICtcbiAgICAgICdEZWJ1Z0xldmVsIERlY2xhcmUgRGVjbGFyZUMgRGVjbGFyZUNETEwgRGVjbGFyZURMTCBEZWNsYXJlTW9kdWxlIERlZmF1bHQgJyArXG4gICAgICAnRGVmaW5lIERpbSBEaXNhYmxlQVNNIERpc2FibGVEZWJ1Z2dlciBEaXNhYmxlRXhwbGljaXQgRWxzZSBFbHNlSWYgRW5hYmxlQVNNICcgK1xuICAgICAgJ0VuYWJsZURlYnVnZ2VyIEVuYWJsZUV4cGxpY2l0IEVuZCBFbmREYXRhU2VjdGlvbiBFbmREZWNsYXJlTW9kdWxlIEVuZEVudW1lcmF0aW9uICcgK1xuICAgICAgJ0VuZElmIEVuZEltcG9ydCBFbmRJbnRlcmZhY2UgRW5kTWFjcm8gRW5kTW9kdWxlIEVuZFByb2NlZHVyZSBFbmRTZWxlY3QgJyArXG4gICAgICAnRW5kU3RydWN0dXJlIEVuZFN0cnVjdHVyZVVuaW9uIEVuZFdpdGggRW51bWVyYXRpb24gRW51bWVyYXRpb25CaW5hcnkgRXh0ZW5kcyAnICtcbiAgICAgICdGYWtlUmV0dXJuIEZvciBGb3JFYWNoIEZvckV2ZXIgR2xvYmFsIEdvc3ViIEdvdG8gSWYgSW1wb3J0IEltcG9ydEMgJyArXG4gICAgICAnSW5jbHVkZUJpbmFyeSBJbmNsdWRlRmlsZSBJbmNsdWRlUGF0aCBJbnRlcmZhY2UgTGlzdCBNYWNybyBNYWNyb0V4cGFuZGVkQ291bnQgJyArXG4gICAgICAnTWFwIE1vZHVsZSBOZXdMaXN0IE5ld01hcCBOZXh0IE5vdCBPciBQcm9jZWR1cmUgUHJvY2VkdXJlQyAnICtcbiAgICAgICdQcm9jZWR1cmVDRExMIFByb2NlZHVyZURMTCBQcm9jZWR1cmVSZXR1cm4gUHJvdGVjdGVkIFByb3RvdHlwZSBQcm90b3R5cGVDIFJlRGltICcgK1xuICAgICAgJ1JlYWQgUmVwZWF0IFJlc3RvcmUgUmV0dXJuIFJ1bnRpbWUgU2VsZWN0IFNoYXJlZCBTdGF0aWMgU3RlcCBTdHJ1Y3R1cmUgJyArXG4gICAgICAnU3RydWN0dXJlVW5pb24gU3dhcCBUaHJlYWRlZCBUbyBVbmRlZmluZU1hY3JvIFVudGlsIFVudGlsICBVbnVzZU1vZHVsZSAnICtcbiAgICAgICdVc2VNb2R1bGUgV2VuZCBXaGlsZSBXaXRoIFhJbmNsdWRlRmlsZSBYT3InLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICAvLyBDT01NRU5UUyB8IFBCIElERSBjb2xvcjogIzAwQUFBQSAoUGVyc2lhbiBHcmVlbilcbiAgICAgIGhsanMuQ09NTUVOVCgnOycsICckJywge3JlbGV2YW5jZTogMH0pLFxuXG4gICAgICB7IC8vIFBST0NFRFVSRVMgREVGSU5JVElPTlNcbiAgICAgICAgY2xhc3NOYW1lOiAnZnVuY3Rpb24nLFxuICAgICAgICBiZWdpbjogJ1xcXFxiKFByb2NlZHVyZXxEZWNsYXJlKShDfENETEx8RExMKT9cXFxcYicsXG4gICAgICAgIGVuZDogJ1xcXFwoJyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgeyAvLyBQUk9DRURVUkUgS0VZV09SRFMgfCBQQiBJREUgY29sb3I6ICMwMDY2NjYgKEJsdWUgU3RvbmUpICsgQm9sZFxuICAgICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgICBiZWdpbjogJyhQcm9jZWR1cmV8RGVjbGFyZSkoQ3xDRExMfERMTCk/JyxcbiAgICAgICAgICAgIGV4Y2x1ZGVFbmQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgLy8gUFJPQ0VEVVJFIFJFVFVSTiBUWVBFIFNFVFRJTkcgfCBQQiBJREUgY29sb3I6ICMwMDAwMDAgKEJsYWNrKVxuICAgICAgICAgICAgY2xhc3NOYW1lOiAndHlwZScsXG4gICAgICAgICAgICBiZWdpbjogJ1xcXFwuXFxcXHcqJ1xuICAgICAgICAgICAgLy8gZW5kOiAnICcsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBobGpzLlVOREVSU0NPUkVfVElUTEVfTU9ERSAvLyBQUk9DRURVUkUgTkFNRSB8IFBCIElERSBjb2xvcjogIzAwNjY2NiAoQmx1ZSBTdG9uZSlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFNUUklOR1MsXG4gICAgICBDT05TVEFOVFNcbiAgICBdXG4gIH07XG59XG5cbi8qICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ0hBTkdFTE9HICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAtIHYuMS4yICgyMDE3LTA1LTEyKVxuICAgICAgICAtLSBCVUctRklYOiBTb21lIGtleXdvcmRzIHdlcmUgYWNjaWRlbnRhbGx5IGpveW5lZCB0b2dldGhlci4gTm93IGZpeGVkLlxuICAgIC0gdi4xLjEgKDIwMTctMDQtMzApXG4gICAgICAgIC0tIFVwZGF0ZWQgdG8gUHVyZUJBU0lDIDUuNjAuXG4gICAgICAgIC0tIEtleXdvcmRzIGxpc3Qgbm93IGJ1aWx0IGJ5IGV4dHJhY3RpbmcgdGhlbSBmcm9tIHRoZSBQdXJlQkFTSUMgU0RLJ3NcbiAgICAgICAgICAgXCJTeW50YXhIaWxpZ2h0aW5nLmRsbFwiIChmcm9tIGVhY2ggUHVyZUJBU0lDIHZlcnNpb24pLiBUb2tlbnMgZnJvbSBlYWNoXG4gICAgICAgICAgIHZlcnNpb24gYXJlIGFkZGVkIHRvIHRoZSBsaXN0LCBhbmQgcmVuYW1lZCBvciByZW1vdmVkIHRva2VucyBhcmUga2VwdFxuICAgICAgICAgICBmb3IgdGhlIHNha2Ugb2YgY292ZXJpbmcgYWxsIHZlcnNpb25zIG9mIHRoZSBsYW5ndWFnZSBmcm9tIFB1cmVCQVNJQ1xuICAgICAgICAgICB2NS4wMCB1cHdhcmQuIChOT1RFOiBjdXJyZW50bHksIHRoZXJlIGFyZSBubyByZW5hbWVkIG9yIGRlcHJlY2F0ZWRcbiAgICAgICAgICAgdG9rZW5zIGluIHRoZSBrZXl3b3JkcyBsaXN0KS4gRm9yIG1vcmUgaW5mbywgc2VlOlxuICAgICAgICAgICAtLSBodHRwOi8vd3d3LnB1cmViYXNpYy5mci9lbmdsaXNoL3ZpZXd0b3BpYy5waHA/JnA9NTA2MjY5XG4gICAgICAgICAgIC0tIGh0dHBzOi8vZ2l0aHViLmNvbS90YWptb25lL3B1cmViYXNpYy1hcmNoaXZlcy90cmVlL21hc3Rlci9zeW50YXgtaGlnaGxpZ2h0aW5nL2d1aWRlbGluZXNcbiAgICAtIHYuMS4wIChBcHJpbCAyMDE2KVxuICAgICAgICAtLSBGaXJzdCByZWxlYXNlXG4gICAgICAgIC0tIEtleXdvcmRzIGxpc3QgdGFrZW4gYW5kIGFkYXB0ZWQgZnJvbSBHdVNoSCdzIChHdXN0YXZvIEp1bGlvIEZpb3JlbnphKVxuICAgICAgICAgICBQdXJlQmFzaWMgbGFuZ3VhZ2UgZmlsZSBmb3IgR2VTSGk6XG4gICAgICAgICAgIC0tIGh0dHBzOi8vZ2l0aHViLmNvbS9lYXN5Ym9vay9nZXNoaS9ibG9iL21hc3Rlci9nZXNoaS9wdXJlYmFzaWMucGhwXG4qLzsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9