(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_ada"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ada.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/ada.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = // We try to support full Ada2012
//
// We highlight all appearances of types, keywords, literals (string, char, number, bool)
// and titles (user defined function/procedure/package)
// CSS classes are set accordingly
//
// Languages causing problems for language detection:
// xml (broken by Foo : Bar type), elm (broken by Foo : Bar type), vbscript-html (broken by body keyword)
// sql (ada default.txt has a lot of sql keywords)

function(hljs) {
    // Regular expression for Ada numeric literals.
    // stolen form the VHDL highlighter

    // Decimal literal:
    var INTEGER_RE = '\\d(_|\\d)*';
    var EXPONENT_RE = '[eE][-+]?' + INTEGER_RE;
    var DECIMAL_LITERAL_RE = INTEGER_RE + '(\\.' + INTEGER_RE + ')?' + '(' + EXPONENT_RE + ')?';

    // Based literal:
    var BASED_INTEGER_RE = '\\w+';
    var BASED_LITERAL_RE = INTEGER_RE + '#' + BASED_INTEGER_RE + '(\\.' + BASED_INTEGER_RE + ')?' + '#' + '(' + EXPONENT_RE + ')?';

    var NUMBER_RE = '\\b(' + BASED_LITERAL_RE + '|' + DECIMAL_LITERAL_RE + ')';

    // Identifier regex
    var ID_REGEX = '[A-Za-z](_?[A-Za-z0-9.])*';

    // bad chars, only allowed in literals
    var BAD_CHARS = '[]{}%#\'\"'

    // Ada doesn't have block comments, only line comments
    var COMMENTS = hljs.COMMENT('--', '$');

    // variable declarations of the form
    // Foo : Bar := Baz;
    // where only Bar will be highlighted
    var VAR_DECLS = {
        // TODO: These spaces are not required by the Ada syntax
        // however, I have yet to see handwritten Ada code where
        // someone does not put spaces around :
        begin: '\\s+:\\s+', end: '\\s*(:=|;|\\)|=>|$)',
        // endsWithParent: true,
        // returnBegin: true,
        illegal: BAD_CHARS,
        contains: [
            {
                // workaround to avoid highlighting
                // named loops and declare blocks
                beginKeywords: 'loop for declare others',
                endsParent: true,
            },
            {
                // properly highlight all modifiers
                className: 'keyword',
                beginKeywords: 'not null constant access function procedure in out aliased exception'
            },
            {
                className: 'type',
                begin: ID_REGEX,
                endsParent: true,
                relevance: 0,
            }
        ]
    };

    return {
        case_insensitive: true,
        keywords: {
            keyword:
                'abort else new return abs elsif not reverse abstract end ' +
                'accept entry select access exception of separate aliased exit or some ' +
                'all others subtype and for out synchronized array function overriding ' +
                'at tagged generic package task begin goto pragma terminate ' +
                'body private then if procedure type case in protected constant interface ' +
                'is raise use declare range delay limited record when delta loop rem while ' +
                'digits renames with do mod requeue xor',
            literal:
                'True False',
        },
        contains: [
            COMMENTS,
            // strings "foobar"
            {
                className: 'string',
                begin: /"/, end: /"/,
                contains: [{begin: /""/, relevance: 0}]
            },
            // characters ''
            {
                // character literals always contain one char
                className: 'string',
                begin: /'.'/
            },
            {
                // number literals
                className: 'number',
                begin: NUMBER_RE,
                relevance: 0
            },
            {
                // Attributes
                className: 'symbol',
                begin: "'" + ID_REGEX,
            },
            {
                // package definition, maybe inside generic
                className: 'title',
                begin: '(\\bwith\\s+)?(\\bprivate\\s+)?\\bpackage\\s+(\\bbody\\s+)?', end: '(is|$)',
                keywords: 'package body',
                excludeBegin: true,
                excludeEnd: true,
                illegal: BAD_CHARS
            },
            {
                // function/procedure declaration/definition
                // maybe inside generic
                begin: '(\\b(with|overriding)\\s+)?\\b(function|procedure)\\s+', end: '(\\bis|\\bwith|\\brenames|\\)\\s*;)',
                keywords: 'overriding function procedure with is renames return',
                // we need to re-match the 'function' keyword, so that
                // the title mode below matches only exactly once
                returnBegin: true,
                contains:
                [
                    COMMENTS,
                    {
                        // name of the function/procedure
                        className: 'title',
                        begin: '(\\bwith\\s+)?\\b(function|procedure)\\s+',
                        end: '(\\(|\\s+|$)',
                        excludeBegin: true,
                        excludeEnd: true,
                        illegal: BAD_CHARS
                    },
                    // 'self'
                    // // parameter types
                    VAR_DECLS,
                    {
                        // return type
                        className: 'type',
                        begin: '\\breturn\\s+', end: '(\\s+|;|$)',
                        keywords: 'return',
                        excludeBegin: true,
                        excludeEnd: true,
                        // we are done with functions
                        endsParent: true,
                        illegal: BAD_CHARS

                    },
                ]
            },
            {
                // new type declarations
                // maybe inside generic
                className: 'type',
                begin: '\\b(sub)?type\\s+', end: '\\s+',
                keywords: 'type',
                excludeBegin: true,
                illegal: BAD_CHARS
            },

            // see comment above the definition
            VAR_DECLS,

            // no markup
            // relevance boosters for small snippets
            // {begin: '\\s*=>\\s*'},
            // {begin: '\\s*:=\\s*'},
            // {begin: '\\s+:=\\s+'},
        ]
    };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9hZGEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9hZGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSAvLyBXZSB0cnkgdG8gc3VwcG9ydCBmdWxsIEFkYTIwMTJcbi8vXG4vLyBXZSBoaWdobGlnaHQgYWxsIGFwcGVhcmFuY2VzIG9mIHR5cGVzLCBrZXl3b3JkcywgbGl0ZXJhbHMgKHN0cmluZywgY2hhciwgbnVtYmVyLCBib29sKVxuLy8gYW5kIHRpdGxlcyAodXNlciBkZWZpbmVkIGZ1bmN0aW9uL3Byb2NlZHVyZS9wYWNrYWdlKVxuLy8gQ1NTIGNsYXNzZXMgYXJlIHNldCBhY2NvcmRpbmdseVxuLy9cbi8vIExhbmd1YWdlcyBjYXVzaW5nIHByb2JsZW1zIGZvciBsYW5ndWFnZSBkZXRlY3Rpb246XG4vLyB4bWwgKGJyb2tlbiBieSBGb28gOiBCYXIgdHlwZSksIGVsbSAoYnJva2VuIGJ5IEZvbyA6IEJhciB0eXBlKSwgdmJzY3JpcHQtaHRtbCAoYnJva2VuIGJ5IGJvZHkga2V5d29yZClcbi8vIHNxbCAoYWRhIGRlZmF1bHQudHh0IGhhcyBhIGxvdCBvZiBzcWwga2V5d29yZHMpXG5cbmZ1bmN0aW9uKGhsanMpIHtcbiAgICAvLyBSZWd1bGFyIGV4cHJlc3Npb24gZm9yIEFkYSBudW1lcmljIGxpdGVyYWxzLlxuICAgIC8vIHN0b2xlbiBmb3JtIHRoZSBWSERMIGhpZ2hsaWdodGVyXG5cbiAgICAvLyBEZWNpbWFsIGxpdGVyYWw6XG4gICAgdmFyIElOVEVHRVJfUkUgPSAnXFxcXGQoX3xcXFxcZCkqJztcbiAgICB2YXIgRVhQT05FTlRfUkUgPSAnW2VFXVstK10/JyArIElOVEVHRVJfUkU7XG4gICAgdmFyIERFQ0lNQUxfTElURVJBTF9SRSA9IElOVEVHRVJfUkUgKyAnKFxcXFwuJyArIElOVEVHRVJfUkUgKyAnKT8nICsgJygnICsgRVhQT05FTlRfUkUgKyAnKT8nO1xuXG4gICAgLy8gQmFzZWQgbGl0ZXJhbDpcbiAgICB2YXIgQkFTRURfSU5URUdFUl9SRSA9ICdcXFxcdysnO1xuICAgIHZhciBCQVNFRF9MSVRFUkFMX1JFID0gSU5URUdFUl9SRSArICcjJyArIEJBU0VEX0lOVEVHRVJfUkUgKyAnKFxcXFwuJyArIEJBU0VEX0lOVEVHRVJfUkUgKyAnKT8nICsgJyMnICsgJygnICsgRVhQT05FTlRfUkUgKyAnKT8nO1xuXG4gICAgdmFyIE5VTUJFUl9SRSA9ICdcXFxcYignICsgQkFTRURfTElURVJBTF9SRSArICd8JyArIERFQ0lNQUxfTElURVJBTF9SRSArICcpJztcblxuICAgIC8vIElkZW50aWZpZXIgcmVnZXhcbiAgICB2YXIgSURfUkVHRVggPSAnW0EtWmEtel0oXz9bQS1aYS16MC05Ll0pKic7XG5cbiAgICAvLyBiYWQgY2hhcnMsIG9ubHkgYWxsb3dlZCBpbiBsaXRlcmFsc1xuICAgIHZhciBCQURfQ0hBUlMgPSAnW117fSUjXFwnXFxcIidcblxuICAgIC8vIEFkYSBkb2Vzbid0IGhhdmUgYmxvY2sgY29tbWVudHMsIG9ubHkgbGluZSBjb21tZW50c1xuICAgIHZhciBDT01NRU5UUyA9IGhsanMuQ09NTUVOVCgnLS0nLCAnJCcpO1xuXG4gICAgLy8gdmFyaWFibGUgZGVjbGFyYXRpb25zIG9mIHRoZSBmb3JtXG4gICAgLy8gRm9vIDogQmFyIDo9IEJhejtcbiAgICAvLyB3aGVyZSBvbmx5IEJhciB3aWxsIGJlIGhpZ2hsaWdodGVkXG4gICAgdmFyIFZBUl9ERUNMUyA9IHtcbiAgICAgICAgLy8gVE9ETzogVGhlc2Ugc3BhY2VzIGFyZSBub3QgcmVxdWlyZWQgYnkgdGhlIEFkYSBzeW50YXhcbiAgICAgICAgLy8gaG93ZXZlciwgSSBoYXZlIHlldCB0byBzZWUgaGFuZHdyaXR0ZW4gQWRhIGNvZGUgd2hlcmVcbiAgICAgICAgLy8gc29tZW9uZSBkb2VzIG5vdCBwdXQgc3BhY2VzIGFyb3VuZCA6XG4gICAgICAgIGJlZ2luOiAnXFxcXHMrOlxcXFxzKycsIGVuZDogJ1xcXFxzKig6PXw7fFxcXFwpfD0+fCQpJyxcbiAgICAgICAgLy8gZW5kc1dpdGhQYXJlbnQ6IHRydWUsXG4gICAgICAgIC8vIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICBpbGxlZ2FsOiBCQURfQ0hBUlMsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gd29ya2Fyb3VuZCB0byBhdm9pZCBoaWdobGlnaHRpbmdcbiAgICAgICAgICAgICAgICAvLyBuYW1lZCBsb29wcyBhbmQgZGVjbGFyZSBibG9ja3NcbiAgICAgICAgICAgICAgICBiZWdpbktleXdvcmRzOiAnbG9vcCBmb3IgZGVjbGFyZSBvdGhlcnMnLFxuICAgICAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIHByb3Blcmx5IGhpZ2hsaWdodCBhbGwgbW9kaWZpZXJzXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAna2V5d29yZCcsXG4gICAgICAgICAgICAgICAgYmVnaW5LZXl3b3JkczogJ25vdCBudWxsIGNvbnN0YW50IGFjY2VzcyBmdW5jdGlvbiBwcm9jZWR1cmUgaW4gb3V0IGFsaWFzZWQgZXhjZXB0aW9uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogSURfUkVHRVgsXG4gICAgICAgICAgICAgICAgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZWxldmFuY2U6IDAsXG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY2FzZV9pbnNlbnNpdGl2ZTogdHJ1ZSxcbiAgICAgICAga2V5d29yZHM6IHtcbiAgICAgICAgICAgIGtleXdvcmQ6XG4gICAgICAgICAgICAgICAgJ2Fib3J0IGVsc2UgbmV3IHJldHVybiBhYnMgZWxzaWYgbm90IHJldmVyc2UgYWJzdHJhY3QgZW5kICcgK1xuICAgICAgICAgICAgICAgICdhY2NlcHQgZW50cnkgc2VsZWN0IGFjY2VzcyBleGNlcHRpb24gb2Ygc2VwYXJhdGUgYWxpYXNlZCBleGl0IG9yIHNvbWUgJyArXG4gICAgICAgICAgICAgICAgJ2FsbCBvdGhlcnMgc3VidHlwZSBhbmQgZm9yIG91dCBzeW5jaHJvbml6ZWQgYXJyYXkgZnVuY3Rpb24gb3ZlcnJpZGluZyAnICtcbiAgICAgICAgICAgICAgICAnYXQgdGFnZ2VkIGdlbmVyaWMgcGFja2FnZSB0YXNrIGJlZ2luIGdvdG8gcHJhZ21hIHRlcm1pbmF0ZSAnICtcbiAgICAgICAgICAgICAgICAnYm9keSBwcml2YXRlIHRoZW4gaWYgcHJvY2VkdXJlIHR5cGUgY2FzZSBpbiBwcm90ZWN0ZWQgY29uc3RhbnQgaW50ZXJmYWNlICcgK1xuICAgICAgICAgICAgICAgICdpcyByYWlzZSB1c2UgZGVjbGFyZSByYW5nZSBkZWxheSBsaW1pdGVkIHJlY29yZCB3aGVuIGRlbHRhIGxvb3AgcmVtIHdoaWxlICcgK1xuICAgICAgICAgICAgICAgICdkaWdpdHMgcmVuYW1lcyB3aXRoIGRvIG1vZCByZXF1ZXVlIHhvcicsXG4gICAgICAgICAgICBsaXRlcmFsOlxuICAgICAgICAgICAgICAgICdUcnVlIEZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICAgIENPTU1FTlRTLFxuICAgICAgICAgICAgLy8gc3RyaW5ncyBcImZvb2JhclwiXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogL1wiLywgZW5kOiAvXCIvLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOiBbe2JlZ2luOiAvXCJcIi8sIHJlbGV2YW5jZTogMH1dXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gY2hhcmFjdGVycyAnJ1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIGNoYXJhY3RlciBsaXRlcmFscyBhbHdheXMgY29udGFpbiBvbmUgY2hhclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgYmVnaW46IC8nLicvXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIG51bWJlciBsaXRlcmFsc1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgYmVnaW46IE5VTUJFUl9SRSxcbiAgICAgICAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gQXR0cmlidXRlc1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3N5bWJvbCcsXG4gICAgICAgICAgICAgICAgYmVnaW46IFwiJ1wiICsgSURfUkVHRVgsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIHBhY2thZ2UgZGVmaW5pdGlvbiwgbWF5YmUgaW5zaWRlIGdlbmVyaWNcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0aXRsZScsXG4gICAgICAgICAgICAgICAgYmVnaW46ICcoXFxcXGJ3aXRoXFxcXHMrKT8oXFxcXGJwcml2YXRlXFxcXHMrKT9cXFxcYnBhY2thZ2VcXFxccysoXFxcXGJib2R5XFxcXHMrKT8nLCBlbmQ6ICcoaXN8JCknLFxuICAgICAgICAgICAgICAgIGtleXdvcmRzOiAncGFja2FnZSBib2R5JyxcbiAgICAgICAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpbGxlZ2FsOiBCQURfQ0hBUlNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gZnVuY3Rpb24vcHJvY2VkdXJlIGRlY2xhcmF0aW9uL2RlZmluaXRpb25cbiAgICAgICAgICAgICAgICAvLyBtYXliZSBpbnNpZGUgZ2VuZXJpY1xuICAgICAgICAgICAgICAgIGJlZ2luOiAnKFxcXFxiKHdpdGh8b3ZlcnJpZGluZylcXFxccyspP1xcXFxiKGZ1bmN0aW9ufHByb2NlZHVyZSlcXFxccysnLCBlbmQ6ICcoXFxcXGJpc3xcXFxcYndpdGh8XFxcXGJyZW5hbWVzfFxcXFwpXFxcXHMqOyknLFxuICAgICAgICAgICAgICAgIGtleXdvcmRzOiAnb3ZlcnJpZGluZyBmdW5jdGlvbiBwcm9jZWR1cmUgd2l0aCBpcyByZW5hbWVzIHJldHVybicsXG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byByZS1tYXRjaCB0aGUgJ2Z1bmN0aW9uJyBrZXl3b3JkLCBzbyB0aGF0XG4gICAgICAgICAgICAgICAgLy8gdGhlIHRpdGxlIG1vZGUgYmVsb3cgbWF0Y2hlcyBvbmx5IGV4YWN0bHkgb25jZVxuICAgICAgICAgICAgICAgIHJldHVybkJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5zOlxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgQ09NTUVOVFMsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5hbWUgb2YgdGhlIGZ1bmN0aW9uL3Byb2NlZHVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46ICcoXFxcXGJ3aXRoXFxcXHMrKT9cXFxcYihmdW5jdGlvbnxwcm9jZWR1cmUpXFxcXHMrJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogJyhcXFxcKHxcXFxccyt8JCknLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlsbGVnYWw6IEJBRF9DSEFSU1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAnc2VsZidcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8gcGFyYW1ldGVyIHR5cGVzXG4gICAgICAgICAgICAgICAgICAgIFZBUl9ERUNMUyxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmV0dXJuIHR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46ICdcXFxcYnJldHVyblxcXFxzKycsIGVuZDogJyhcXFxccyt8O3wkKScsXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkczogJ3JldHVybicsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgYXJlIGRvbmUgd2l0aCBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZHNQYXJlbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbGxlZ2FsOiBCQURfQ0hBUlNcblxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gbmV3IHR5cGUgZGVjbGFyYXRpb25zXG4gICAgICAgICAgICAgICAgLy8gbWF5YmUgaW5zaWRlIGdlbmVyaWNcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogJ1xcXFxiKHN1Yik/dHlwZVxcXFxzKycsIGVuZDogJ1xcXFxzKycsXG4gICAgICAgICAgICAgICAga2V5d29yZHM6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICBleGNsdWRlQmVnaW46IHRydWUsXG4gICAgICAgICAgICAgICAgaWxsZWdhbDogQkFEX0NIQVJTXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBzZWUgY29tbWVudCBhYm92ZSB0aGUgZGVmaW5pdGlvblxuICAgICAgICAgICAgVkFSX0RFQ0xTLFxuXG4gICAgICAgICAgICAvLyBubyBtYXJrdXBcbiAgICAgICAgICAgIC8vIHJlbGV2YW5jZSBib29zdGVycyBmb3Igc21hbGwgc25pcHBldHNcbiAgICAgICAgICAgIC8vIHtiZWdpbjogJ1xcXFxzKj0+XFxcXHMqJ30sXG4gICAgICAgICAgICAvLyB7YmVnaW46ICdcXFxccyo6PVxcXFxzKid9LFxuICAgICAgICAgICAgLy8ge2JlZ2luOiAnXFxcXHMrOj1cXFxccysnfSxcbiAgICAgICAgXVxuICAgIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==