(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_asciidoc"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/asciidoc.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/asciidoc.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    aliases: ['adoc'],
    contains: [
      // block comment
      hljs.COMMENT(
        '^/{4,}\\n',
        '\\n/{4,}$',
        // can also be done as...
        //'^/{4,}$',
        //'^/{4,}$',
        {
          relevance: 10
        }
      ),
      // line comment
      hljs.COMMENT(
        '^//',
        '$',
        {
          relevance: 0
        }
      ),
      // title
      {
        className: 'title',
        begin: '^\\.\\w.*$'
      },
      // example, admonition & sidebar blocks
      {
        begin: '^[=\\*]{4,}\\n',
        end: '\\n^[=\\*]{4,}$',
        relevance: 10
      },
      // headings
      {
        className: 'section',
        relevance: 10,
        variants: [
          {begin: '^(={1,5}) .+?( \\1)?$'},
          {begin: '^[^\\[\\]\\n]+?\\n[=\\-~\\^\\+]{2,}$'},
        ]
      },
      // document attributes
      {
        className: 'meta',
        begin: '^:.+?:',
        end: '\\s',
        excludeEnd: true,
        relevance: 10
      },
      // block attributes
      {
        className: 'meta',
        begin: '^\\[.+?\\]$',
        relevance: 0
      },
      // quoteblocks
      {
        className: 'quote',
        begin: '^_{4,}\\n',
        end: '\\n_{4,}$',
        relevance: 10
      },
      // listing and literal blocks
      {
        className: 'code',
        begin: '^[\\-\\.]{4,}\\n',
        end: '\\n[\\-\\.]{4,}$',
        relevance: 10
      },
      // passthrough blocks
      {
        begin: '^\\+{4,}\\n',
        end: '\\n\\+{4,}$',
        contains: [
          {
            begin: '<', end: '>',
            subLanguage: 'xml',
            relevance: 0
          }
        ],
        relevance: 10
      },
      // lists (can only capture indicators)
      {
        className: 'bullet',
        begin: '^(\\*+|\\-+|\\.+|[^\\n]+?::)\\s+'
      },
      // admonition
      {
        className: 'symbol',
        begin: '^(NOTE|TIP|IMPORTANT|WARNING|CAUTION):\\s+',
        relevance: 10
      },
      // inline strong
      {
        className: 'strong',
        // must not follow a word character or be followed by an asterisk or space
        begin: '\\B\\*(?![\\*\\s])',
        end: '(\\n{2}|\\*)',
        // allow escaped asterisk followed by word char
        contains: [
          {
            begin: '\\\\*\\w',
            relevance: 0
          }
        ]
      },
      // inline emphasis
      {
        className: 'emphasis',
        // must not follow a word character or be followed by a single quote or space
        begin: '\\B\'(?![\'\\s])',
        end: '(\\n{2}|\')',
        // allow escaped single quote followed by word char
        contains: [
          {
            begin: '\\\\\'\\w',
            relevance: 0
          }
        ],
        relevance: 0
      },
      // inline emphasis (alt)
      {
        className: 'emphasis',
        // must not follow a word character or be followed by an underline or space
        begin: '_(?![_\\s])',
        end: '(\\n{2}|_)',
        relevance: 0
      },
      // inline smart quotes
      {
        className: 'string',
        variants: [
          {begin: "``.+?''"},
          {begin: "`.+?'"}
        ]
      },
      // inline code snippets (TODO should get same treatment as strong and emphasis)
      {
        className: 'code',
        begin: '(`.+?`|\\+.+?\\+)',
        relevance: 0
      },
      // indented literal block
      {
        className: 'code',
        begin: '^[ \\t]',
        end: '$',
        relevance: 0
      },
      // horizontal rules
      {
        begin: '^\'{3,}[ \\t]*$',
        relevance: 10
      },
      // images and links
      {
        begin: '(link:)?(http|https|ftp|file|irc|image:?):\\S+\\[.*?\\]',
        returnBegin: true,
        contains: [
          {
            begin: '(link|image:?):',
            relevance: 0
          },
          {
            className: 'link',
            begin: '\\w',
            end: '[^\\[]+',
            relevance: 0
          },
          {
            className: 'string',
            begin: '\\[',
            end: '\\]',
            excludeBegin: true,
            excludeEnd: true,
            relevance: 0
          }
        ],
        relevance: 10
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9hc2NpaWRvYy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL2FzY2lpZG9jLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICByZXR1cm4ge1xuICAgIGFsaWFzZXM6IFsnYWRvYyddLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICAvLyBibG9jayBjb21tZW50XG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICdeL3s0LH1cXFxcbicsXG4gICAgICAgICdcXFxcbi97NCx9JCcsXG4gICAgICAgIC8vIGNhbiBhbHNvIGJlIGRvbmUgYXMuLi5cbiAgICAgICAgLy8nXi97NCx9JCcsXG4gICAgICAgIC8vJ14vezQsfSQnLFxuICAgICAgICB7XG4gICAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgICB9XG4gICAgICApLFxuICAgICAgLy8gbGluZSBjb21tZW50XG4gICAgICBobGpzLkNPTU1FTlQoXG4gICAgICAgICdeLy8nLFxuICAgICAgICAnJCcsXG4gICAgICAgIHtcbiAgICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgICAgfVxuICAgICAgKSxcbiAgICAgIC8vIHRpdGxlXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3RpdGxlJyxcbiAgICAgICAgYmVnaW46ICdeXFxcXC5cXFxcdy4qJCdcbiAgICAgIH0sXG4gICAgICAvLyBleGFtcGxlLCBhZG1vbml0aW9uICYgc2lkZWJhciBibG9ja3NcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdeWz1cXFxcKl17NCx9XFxcXG4nLFxuICAgICAgICBlbmQ6ICdcXFxcbl5bPVxcXFwqXXs0LH0kJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIC8vIGhlYWRpbmdzXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3NlY3Rpb24nLFxuICAgICAgICByZWxldmFuY2U6IDEwLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtiZWdpbjogJ14oPXsxLDV9KSAuKz8oIFxcXFwxKT8kJ30sXG4gICAgICAgICAge2JlZ2luOiAnXlteXFxcXFtcXFxcXVxcXFxuXSs/XFxcXG5bPVxcXFwtflxcXFxeXFxcXCtdezIsfSQnfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vIGRvY3VtZW50IGF0dHJpYnV0ZXNcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsXG4gICAgICAgIGJlZ2luOiAnXjouKz86JyxcbiAgICAgICAgZW5kOiAnXFxcXHMnLFxuICAgICAgICBleGNsdWRlRW5kOiB0cnVlLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAgLy8gYmxvY2sgYXR0cmlidXRlc1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdtZXRhJyxcbiAgICAgICAgYmVnaW46ICdeXFxcXFsuKz9cXFxcXSQnLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICAvLyBxdW90ZWJsb2Nrc1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdxdW90ZScsXG4gICAgICAgIGJlZ2luOiAnXl97NCx9XFxcXG4nLFxuICAgICAgICBlbmQ6ICdcXFxcbl97NCx9JCcsXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICAvLyBsaXN0aW5nIGFuZCBsaXRlcmFsIGJsb2Nrc1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjb2RlJyxcbiAgICAgICAgYmVnaW46ICdeW1xcXFwtXFxcXC5dezQsfVxcXFxuJyxcbiAgICAgICAgZW5kOiAnXFxcXG5bXFxcXC1cXFxcLl17NCx9JCcsXG4gICAgICAgIHJlbGV2YW5jZTogMTBcbiAgICAgIH0sXG4gICAgICAvLyBwYXNzdGhyb3VnaCBibG9ja3NcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICdeXFxcXCt7NCx9XFxcXG4nLFxuICAgICAgICBlbmQ6ICdcXFxcblxcXFwrezQsfSQnLFxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnPCcsIGVuZDogJz4nLFxuICAgICAgICAgICAgc3ViTGFuZ3VhZ2U6ICd4bWwnLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICB9LFxuICAgICAgLy8gbGlzdHMgKGNhbiBvbmx5IGNhcHR1cmUgaW5kaWNhdG9ycylcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnYnVsbGV0JyxcbiAgICAgICAgYmVnaW46ICdeKFxcXFwqK3xcXFxcLSt8XFxcXC4rfFteXFxcXG5dKz86OilcXFxccysnXG4gICAgICB9LFxuICAgICAgLy8gYWRtb25pdGlvblxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzeW1ib2wnLFxuICAgICAgICBiZWdpbjogJ14oTk9URXxUSVB8SU1QT1JUQU5UfFdBUk5JTkd8Q0FVVElPTik6XFxcXHMrJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIC8vIGlubGluZSBzdHJvbmdcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnc3Ryb25nJyxcbiAgICAgICAgLy8gbXVzdCBub3QgZm9sbG93IGEgd29yZCBjaGFyYWN0ZXIgb3IgYmUgZm9sbG93ZWQgYnkgYW4gYXN0ZXJpc2sgb3Igc3BhY2VcbiAgICAgICAgYmVnaW46ICdcXFxcQlxcXFwqKD8hW1xcXFwqXFxcXHNdKScsXG4gICAgICAgIGVuZDogJyhcXFxcbnsyfXxcXFxcKiknLFxuICAgICAgICAvLyBhbGxvdyBlc2NhcGVkIGFzdGVyaXNrIGZvbGxvd2VkIGJ5IHdvcmQgY2hhclxuICAgICAgICBjb250YWluczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXFxcXFwqXFxcXHcnLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8gaW5saW5lIGVtcGhhc2lzXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2VtcGhhc2lzJyxcbiAgICAgICAgLy8gbXVzdCBub3QgZm9sbG93IGEgd29yZCBjaGFyYWN0ZXIgb3IgYmUgZm9sbG93ZWQgYnkgYSBzaW5nbGUgcXVvdGUgb3Igc3BhY2VcbiAgICAgICAgYmVnaW46ICdcXFxcQlxcJyg/IVtcXCdcXFxcc10pJyxcbiAgICAgICAgZW5kOiAnKFxcXFxuezJ9fFxcJyknLFxuICAgICAgICAvLyBhbGxvdyBlc2NhcGVkIHNpbmdsZSBxdW90ZSBmb2xsb3dlZCBieSB3b3JkIGNoYXJcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogJ1xcXFxcXFxcXFwnXFxcXHcnLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICAvLyBpbmxpbmUgZW1waGFzaXMgKGFsdClcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnZW1waGFzaXMnLFxuICAgICAgICAvLyBtdXN0IG5vdCBmb2xsb3cgYSB3b3JkIGNoYXJhY3RlciBvciBiZSBmb2xsb3dlZCBieSBhbiB1bmRlcmxpbmUgb3Igc3BhY2VcbiAgICAgICAgYmVnaW46ICdfKD8hW19cXFxcc10pJyxcbiAgICAgICAgZW5kOiAnKFxcXFxuezJ9fF8pJyxcbiAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICB9LFxuICAgICAgLy8gaW5saW5lIHNtYXJ0IHF1b3Rlc1xuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdzdHJpbmcnLFxuICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgIHtiZWdpbjogXCJgYC4rPycnXCJ9LFxuICAgICAgICAgIHtiZWdpbjogXCJgLis/J1wifVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgLy8gaW5saW5lIGNvZGUgc25pcHBldHMgKFRPRE8gc2hvdWxkIGdldCBzYW1lIHRyZWF0bWVudCBhcyBzdHJvbmcgYW5kIGVtcGhhc2lzKVxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjb2RlJyxcbiAgICAgICAgYmVnaW46ICcoYC4rP2B8XFxcXCsuKz9cXFxcKyknLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICAvLyBpbmRlbnRlZCBsaXRlcmFsIGJsb2NrXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2NvZGUnLFxuICAgICAgICBiZWdpbjogJ15bIFxcXFx0XScsXG4gICAgICAgIGVuZDogJyQnLFxuICAgICAgICByZWxldmFuY2U6IDBcbiAgICAgIH0sXG4gICAgICAvLyBob3Jpem9udGFsIHJ1bGVzXG4gICAgICB7XG4gICAgICAgIGJlZ2luOiAnXlxcJ3szLH1bIFxcXFx0XSokJyxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfSxcbiAgICAgIC8vIGltYWdlcyBhbmQgbGlua3NcbiAgICAgIHtcbiAgICAgICAgYmVnaW46ICcobGluazopPyhodHRwfGh0dHBzfGZ0cHxmaWxlfGlyY3xpbWFnZTo/KTpcXFxcUytcXFxcWy4qP1xcXFxdJyxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmVnaW46ICcobGlua3xpbWFnZTo/KTonLFxuICAgICAgICAgICAgcmVsZXZhbmNlOiAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdsaW5rJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXHcnLFxuICAgICAgICAgICAgZW5kOiAnW15cXFxcW10rJyxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgICAgICAgIGJlZ2luOiAnXFxcXFsnLFxuICAgICAgICAgICAgZW5kOiAnXFxcXF0nLFxuICAgICAgICAgICAgZXhjbHVkZUJlZ2luOiB0cnVlLFxuICAgICAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVsZXZhbmNlOiAxMFxuICAgICAgfVxuICAgIF1cbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9