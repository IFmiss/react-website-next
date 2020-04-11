(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_openscad"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/openscad.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/openscad.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
	var SPECIAL_VARS = {
		className: 'keyword',
		begin: '\\$(f[asn]|t|vp[rtd]|children)'
	},
	LITERALS = {
		className: 'literal',
		begin: 'false|true|PI|undef'
	},
	NUMBERS = {
		className: 'number',
		begin: '\\b\\d+(\\.\\d+)?(e-?\\d+)?', //adds 1e5, 1e-10
		relevance: 0
	},
	STRING = hljs.inherit(hljs.QUOTE_STRING_MODE,{illegal: null}),
	PREPRO = {
		className: 'meta',
		keywords: {'meta-keyword': 'include use'},
		begin: 'include|use <',
		end: '>'
	},
	PARAMS = {
		className: 'params',
		begin: '\\(', end: '\\)',
		contains: ['self', NUMBERS, STRING, SPECIAL_VARS, LITERALS]
	},
	MODIFIERS = {
		begin: '[*!#%]',
		relevance: 0
	},
	FUNCTIONS = {
		className: 'function',
		beginKeywords: 'module function',
		end: '\\=|\\{',
		contains: [PARAMS, hljs.UNDERSCORE_TITLE_MODE]
	};

	return {
		aliases: ['scad'],
		keywords: {
			keyword: 'function module include use for intersection_for if else \\%',
			literal: 'false true PI undef',
			built_in: 'circle square polygon text sphere cube cylinder polyhedron translate rotate scale resize mirror multmatrix color offset hull minkowski union difference intersection abs sign sin cos tan acos asin atan atan2 floor round ceil ln log pow sqrt exp rands min max concat lookup str chr search version version_num norm cross parent_module echo import import_dxf dxf_linear_extrude linear_extrude rotate_extrude surface projection render children dxf_cross dxf_dim let assign'
		},
		contains: [
			hljs.C_LINE_COMMENT_MODE,
			hljs.C_BLOCK_COMMENT_MODE,
			NUMBERS,
			PREPRO,
			STRING,
			SPECIAL_VARS,
			MODIFIERS,
			FUNCTIONS
		]
	}
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9vcGVuc2NhZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL29wZW5zY2FkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuXHR2YXIgU1BFQ0lBTF9WQVJTID0ge1xuXHRcdGNsYXNzTmFtZTogJ2tleXdvcmQnLFxuXHRcdGJlZ2luOiAnXFxcXCQoZlthc25dfHR8dnBbcnRkXXxjaGlsZHJlbiknXG5cdH0sXG5cdExJVEVSQUxTID0ge1xuXHRcdGNsYXNzTmFtZTogJ2xpdGVyYWwnLFxuXHRcdGJlZ2luOiAnZmFsc2V8dHJ1ZXxQSXx1bmRlZidcblx0fSxcblx0TlVNQkVSUyA9IHtcblx0XHRjbGFzc05hbWU6ICdudW1iZXInLFxuXHRcdGJlZ2luOiAnXFxcXGJcXFxcZCsoXFxcXC5cXFxcZCspPyhlLT9cXFxcZCspPycsIC8vYWRkcyAxZTUsIDFlLTEwXG5cdFx0cmVsZXZhbmNlOiAwXG5cdH0sXG5cdFNUUklORyA9IGhsanMuaW5oZXJpdChobGpzLlFVT1RFX1NUUklOR19NT0RFLHtpbGxlZ2FsOiBudWxsfSksXG5cdFBSRVBSTyA9IHtcblx0XHRjbGFzc05hbWU6ICdtZXRhJyxcblx0XHRrZXl3b3JkczogeydtZXRhLWtleXdvcmQnOiAnaW5jbHVkZSB1c2UnfSxcblx0XHRiZWdpbjogJ2luY2x1ZGV8dXNlIDwnLFxuXHRcdGVuZDogJz4nXG5cdH0sXG5cdFBBUkFNUyA9IHtcblx0XHRjbGFzc05hbWU6ICdwYXJhbXMnLFxuXHRcdGJlZ2luOiAnXFxcXCgnLCBlbmQ6ICdcXFxcKScsXG5cdFx0Y29udGFpbnM6IFsnc2VsZicsIE5VTUJFUlMsIFNUUklORywgU1BFQ0lBTF9WQVJTLCBMSVRFUkFMU11cblx0fSxcblx0TU9ESUZJRVJTID0ge1xuXHRcdGJlZ2luOiAnWyohIyVdJyxcblx0XHRyZWxldmFuY2U6IDBcblx0fSxcblx0RlVOQ1RJT05TID0ge1xuXHRcdGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcblx0XHRiZWdpbktleXdvcmRzOiAnbW9kdWxlIGZ1bmN0aW9uJyxcblx0XHRlbmQ6ICdcXFxcPXxcXFxceycsXG5cdFx0Y29udGFpbnM6IFtQQVJBTVMsIGhsanMuVU5ERVJTQ09SRV9USVRMRV9NT0RFXVxuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0YWxpYXNlczogWydzY2FkJ10sXG5cdFx0a2V5d29yZHM6IHtcblx0XHRcdGtleXdvcmQ6ICdmdW5jdGlvbiBtb2R1bGUgaW5jbHVkZSB1c2UgZm9yIGludGVyc2VjdGlvbl9mb3IgaWYgZWxzZSBcXFxcJScsXG5cdFx0XHRsaXRlcmFsOiAnZmFsc2UgdHJ1ZSBQSSB1bmRlZicsXG5cdFx0XHRidWlsdF9pbjogJ2NpcmNsZSBzcXVhcmUgcG9seWdvbiB0ZXh0IHNwaGVyZSBjdWJlIGN5bGluZGVyIHBvbHloZWRyb24gdHJhbnNsYXRlIHJvdGF0ZSBzY2FsZSByZXNpemUgbWlycm9yIG11bHRtYXRyaXggY29sb3Igb2Zmc2V0IGh1bGwgbWlua293c2tpIHVuaW9uIGRpZmZlcmVuY2UgaW50ZXJzZWN0aW9uIGFicyBzaWduIHNpbiBjb3MgdGFuIGFjb3MgYXNpbiBhdGFuIGF0YW4yIGZsb29yIHJvdW5kIGNlaWwgbG4gbG9nIHBvdyBzcXJ0IGV4cCByYW5kcyBtaW4gbWF4IGNvbmNhdCBsb29rdXAgc3RyIGNociBzZWFyY2ggdmVyc2lvbiB2ZXJzaW9uX251bSBub3JtIGNyb3NzIHBhcmVudF9tb2R1bGUgZWNobyBpbXBvcnQgaW1wb3J0X2R4ZiBkeGZfbGluZWFyX2V4dHJ1ZGUgbGluZWFyX2V4dHJ1ZGUgcm90YXRlX2V4dHJ1ZGUgc3VyZmFjZSBwcm9qZWN0aW9uIHJlbmRlciBjaGlsZHJlbiBkeGZfY3Jvc3MgZHhmX2RpbSBsZXQgYXNzaWduJ1xuXHRcdH0sXG5cdFx0Y29udGFpbnM6IFtcblx0XHRcdGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcblx0XHRcdGhsanMuQ19CTE9DS19DT01NRU5UX01PREUsXG5cdFx0XHROVU1CRVJTLFxuXHRcdFx0UFJFUFJPLFxuXHRcdFx0U1RSSU5HLFxuXHRcdFx0U1BFQ0lBTF9WQVJTLFxuXHRcdFx0TU9ESUZJRVJTLFxuXHRcdFx0RlVOQ1RJT05TXG5cdFx0XVxuXHR9XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9