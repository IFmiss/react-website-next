(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_perl"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/perl.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/perl.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var PERL_KEYWORDS = 'getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ' +
    'ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime ' +
    'readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qq' +
    'fileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent ' +
    'shutdown dump chomp connect getsockname die socketpair close flock exists index shmget' +
    'sub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr ' +
    'unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 ' +
    'getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline ' +
    'endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand ' +
    'mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink ' +
    'getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr ' +
    'untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link ' +
    'getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller ' +
    'lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and ' +
    'sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 ' +
    'chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach ' +
    'tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedir' +
    'ioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe ' +
    'atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when';
  var SUBST = {
    className: 'subst',
    begin: '[$@]\\{', end: '\\}',
    keywords: PERL_KEYWORDS
  };
  var METHOD = {
    begin: '->{', end: '}'
    // contains defined later
  };
  var VAR = {
    variants: [
      {begin: /\$\d/},
      {begin: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/},
      {begin: /[\$%@][^\s\w{]/, relevance: 0}
    ]
  };
  var STRING_CONTAINS = [hljs.BACKSLASH_ESCAPE, SUBST, VAR];
  var PERL_DEFAULT_CONTAINS = [
    VAR,
    hljs.HASH_COMMENT_MODE,
    hljs.COMMENT(
      '^\\=\\w',
      '\\=cut',
      {
        endsWithParent: true
      }
    ),
    METHOD,
    {
      className: 'string',
      contains: STRING_CONTAINS,
      variants: [
        {
          begin: 'q[qwxr]?\\s*\\(', end: '\\)',
          relevance: 5
        },
        {
          begin: 'q[qwxr]?\\s*\\[', end: '\\]',
          relevance: 5
        },
        {
          begin: 'q[qwxr]?\\s*\\{', end: '\\}',
          relevance: 5
        },
        {
          begin: 'q[qwxr]?\\s*\\|', end: '\\|',
          relevance: 5
        },
        {
          begin: 'q[qwxr]?\\s*\\<', end: '\\>',
          relevance: 5
        },
        {
          begin: 'qw\\s+q', end: 'q',
          relevance: 5
        },
        {
          begin: '\'', end: '\'',
          contains: [hljs.BACKSLASH_ESCAPE]
        },
        {
          begin: '"', end: '"'
        },
        {
          begin: '`', end: '`',
          contains: [hljs.BACKSLASH_ESCAPE]
        },
        {
          begin: '{\\w+}',
          contains: [],
          relevance: 0
        },
        {
          begin: '\-?\\w+\\s*\\=\\>',
          contains: [],
          relevance: 0
        }
      ]
    },
    {
      className: 'number',
      begin: '(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b',
      relevance: 0
    },
    { // regexp container
      begin: '(\\/\\/|' + hljs.RE_STARTERS_RE + '|\\b(split|return|print|reverse|grep)\\b)\\s*',
      keywords: 'split return print reverse grep',
      relevance: 0,
      contains: [
        hljs.HASH_COMMENT_MODE,
        {
          className: 'regexp',
          begin: '(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*',
          relevance: 10
        },
        {
          className: 'regexp',
          begin: '(m|qr)?/', end: '/[a-z]*',
          contains: [hljs.BACKSLASH_ESCAPE],
          relevance: 0 // allows empty "//" which is a common comment delimiter in other languages
        }
      ]
    },
    {
      className: 'function',
      beginKeywords: 'sub', end: '(\\s*\\(.*?\\))?[;{]', excludeEnd: true,
      relevance: 5,
      contains: [hljs.TITLE_MODE]
    },
    {
      begin: '-\\w\\b',
      relevance: 0
    },
    {
      begin: "^__DATA__$",
      end: "^__END__$",
      subLanguage: 'mojolicious',
      contains: [
        {
            begin: "^@@.*",
            end: "$",
            className: "comment"
        }
      ]
    }
  ];
  SUBST.contains = PERL_DEFAULT_CONTAINS;
  METHOD.contains = PERL_DEFAULT_CONTAINS;

  return {
    aliases: ['pl', 'pm'],
    lexemes: /[\w\.]+/,
    keywords: PERL_KEYWORDS,
    contains: PERL_DEFAULT_CONTAINS
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9wZXJsLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN5bnRheC1oaWdobGlnaHRlci9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL2xpYi9sYW5ndWFnZXMvcGVybC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGhsanMpIHtcbiAgdmFyIFBFUkxfS0VZV09SRFMgPSAnZ2V0cHdlbnQgZ2V0c2VydmVudCBxdW90ZW1ldGEgbXNncmN2IHNjYWxhciBraWxsIGRibWNsb3NlIHVuZGVmIGxjICcgK1xuICAgICdtYSBzeXN3cml0ZSB0ciBzZW5kIHVtYXNrIHN5c29wZW4gc2htd3JpdGUgdmVjIHF4IHV0aW1lIGxvY2FsIG9jdCBzZW1jdGwgbG9jYWx0aW1lICcgK1xuICAgICdyZWFkcGlwZSBkbyByZXR1cm4gZm9ybWF0IHJlYWQgc3ByaW50ZiBkYm1vcGVuIHBvcCBnZXRwZ3JwIG5vdCBnZXRwd25hbSByZXdpbmRkaXIgcXEnICtcbiAgICAnZmlsZW5vIHF3IGVuZHByb3RvZW50IHdhaXQgc2V0aG9zdGVudCBibGVzcyBzfDAgb3BlbmRpciBjb250aW51ZSBlYWNoIHNsZWVwIGVuZGdyZW50ICcgK1xuICAgICdzaHV0ZG93biBkdW1wIGNob21wIGNvbm5lY3QgZ2V0c29ja25hbWUgZGllIHNvY2tldHBhaXIgY2xvc2UgZmxvY2sgZXhpc3RzIGluZGV4IHNobWdldCcgK1xuICAgICdzdWIgZm9yIGVuZHB3ZW50IHJlZG8gbHN0YXQgbXNnY3RsIHNldHBncnAgYWJzIGV4aXQgc2VsZWN0IHByaW50IHJlZiBnZXRob3N0YnlhZGRyICcgK1xuICAgICd1bnNoaWZ0IGZjbnRsIHN5c2NhbGwgZ290byBnZXRuZXRieWFkZHIgam9pbiBnbXRpbWUgc3ltbGluayBzZW1nZXQgc3BsaWNlIHh8MCAnICtcbiAgICAnZ2V0cGVlcm5hbWUgcmVjdiBsb2cgc2V0c29ja29wdCBjb3MgbGFzdCByZXZlcnNlIGdldGhvc3RieW5hbWUgZ2V0Z3JuYW0gc3R1ZHkgZm9ybWxpbmUgJyArXG4gICAgJ2VuZGhvc3RlbnQgdGltZXMgY2hvcCBsZW5ndGggZ2V0aG9zdGVudCBnZXRuZXRlbnQgcGFjayBnZXRwcm90b2VudCBnZXRzZXJ2YnluYW1lIHJhbmQgJyArXG4gICAgJ21rZGlyIHBvcyBjaG1vZCB5fDAgc3Vic3RyIGVuZG5ldGVudCBwcmludGYgbmV4dCBvcGVuIG1zZ3NuZCByZWFkZGlyIHVzZSB1bmxpbmsgJyArXG4gICAgJ2dldHNvY2tvcHQgZ2V0cHJpb3JpdHkgcmluZGV4IHdhbnRhcnJheSBoZXggc3lzdGVtIGdldHNlcnZieXBvcnQgZW5kc2VydmVudCBpbnQgY2hyICcgK1xuICAgICd1bnRpZSBybWRpciBwcm90b3R5cGUgdGVsbCBsaXN0ZW4gZm9yayBzaG1yZWFkIHVjZmlyc3Qgc2V0cHJvdG9lbnQgZWxzZSBzeXNzZWVrIGxpbmsgJyArXG4gICAgJ2dldGdyZ2lkIHNobWN0bCB3YWl0cGlkIHVucGFjayBnZXRuZXRieW5hbWUgcmVzZXQgY2hkaXIgZ3JlcCBzcGxpdCByZXF1aXJlIGNhbGxlciAnICtcbiAgICAnbGNmaXJzdCB1bnRpbCB3YXJuIHdoaWxlIHZhbHVlcyBzaGlmdCB0ZWxsZGlyIGdldHB3dWlkIG15IGdldHByb3RvYnludW1iZXIgZGVsZXRlIGFuZCAnICtcbiAgICAnc29ydCB1YyBkZWZpbmVkIHNyYW5kIGFjY2VwdCBwYWNrYWdlIHNlZWtkaXIgZ2V0cHJvdG9ieW5hbWUgc2Vtb3Agb3VyIHJlbmFtZSBzZWVrIGlmIHF8MCAnICtcbiAgICAnY2hyb290IHN5c3JlYWQgc2V0cHdlbnQgbm8gY3J5cHQgZ2V0YyBjaG93biBzcXJ0IHdyaXRlIHNldG5ldGVudCBzZXRwcmlvcml0eSBmb3JlYWNoICcgK1xuICAgICd0aWUgc2luIG1zZ2dldCBtYXAgc3RhdCBnZXRsb2dpbiB1bmxlc3MgZWxzaWYgdHJ1bmNhdGUgZXhlYyBrZXlzIGdsb2IgdGllZCBjbG9zZWRpcicgK1xuICAgICdpb2N0bCBzb2NrZXQgcmVhZGxpbmsgZXZhbCB4b3IgcmVhZGxpbmUgYmlubW9kZSBzZXRzZXJ2ZW50IGVvZiBvcmQgYmluZCBhbGFybSBwaXBlICcgK1xuICAgICdhdGFuMiBnZXRncmVudCBleHAgdGltZSBwdXNoIHNldGdyZW50IGd0IGx0IG9yIG5lIG18MCBicmVhayBnaXZlbiBzYXkgc3RhdGUgd2hlbic7XG4gIHZhciBTVUJTVCA9IHtcbiAgICBjbGFzc05hbWU6ICdzdWJzdCcsXG4gICAgYmVnaW46ICdbJEBdXFxcXHsnLCBlbmQ6ICdcXFxcfScsXG4gICAga2V5d29yZHM6IFBFUkxfS0VZV09SRFNcbiAgfTtcbiAgdmFyIE1FVEhPRCA9IHtcbiAgICBiZWdpbjogJy0+eycsIGVuZDogJ30nXG4gICAgLy8gY29udGFpbnMgZGVmaW5lZCBsYXRlclxuICB9O1xuICB2YXIgVkFSID0ge1xuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7YmVnaW46IC9cXCRcXGQvfSxcbiAgICAgIHtiZWdpbjogL1tcXCQlQF0oXFxeXFx3XFxifCNcXHcrKDo6XFx3KykqfHtcXHcrfXxcXHcrKDo6XFx3KikqKS99LFxuICAgICAge2JlZ2luOiAvW1xcJCVAXVteXFxzXFx3e10vLCByZWxldmFuY2U6IDB9XG4gICAgXVxuICB9O1xuICB2YXIgU1RSSU5HX0NPTlRBSU5TID0gW2hsanMuQkFDS1NMQVNIX0VTQ0FQRSwgU1VCU1QsIFZBUl07XG4gIHZhciBQRVJMX0RFRkFVTFRfQ09OVEFJTlMgPSBbXG4gICAgVkFSLFxuICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgaGxqcy5DT01NRU5UKFxuICAgICAgJ15cXFxcPVxcXFx3JyxcbiAgICAgICdcXFxcPWN1dCcsXG4gICAgICB7XG4gICAgICAgIGVuZHNXaXRoUGFyZW50OiB0cnVlXG4gICAgICB9XG4gICAgKSxcbiAgICBNRVRIT0QsXG4gICAge1xuICAgICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICAgIGNvbnRhaW5zOiBTVFJJTkdfQ09OVEFJTlMsXG4gICAgICB2YXJpYW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdxW3F3eHJdP1xcXFxzKlxcXFwoJywgZW5kOiAnXFxcXCknLFxuICAgICAgICAgIHJlbGV2YW5jZTogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdxW3F3eHJdP1xcXFxzKlxcXFxbJywgZW5kOiAnXFxcXF0nLFxuICAgICAgICAgIHJlbGV2YW5jZTogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdxW3F3eHJdP1xcXFxzKlxcXFx7JywgZW5kOiAnXFxcXH0nLFxuICAgICAgICAgIHJlbGV2YW5jZTogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdxW3F3eHJdP1xcXFxzKlxcXFx8JywgZW5kOiAnXFxcXHwnLFxuICAgICAgICAgIHJlbGV2YW5jZTogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdxW3F3eHJdP1xcXFxzKlxcXFw8JywgZW5kOiAnXFxcXD4nLFxuICAgICAgICAgIHJlbGV2YW5jZTogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdxd1xcXFxzK3EnLCBlbmQ6ICdxJyxcbiAgICAgICAgICByZWxldmFuY2U6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnXFwnJywgZW5kOiAnXFwnJyxcbiAgICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnXCInLCBlbmQ6ICdcIidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGJlZ2luOiAnYCcsIGVuZDogJ2AnLFxuICAgICAgICAgIGNvbnRhaW5zOiBbaGxqcy5CQUNLU0xBU0hfRVNDQVBFXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICd7XFxcXHcrfScsXG4gICAgICAgICAgY29udGFpbnM6IFtdLFxuICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgYmVnaW46ICdcXC0/XFxcXHcrXFxcXHMqXFxcXD1cXFxcPicsXG4gICAgICAgICAgY29udGFpbnM6IFtdLFxuICAgICAgICAgIHJlbGV2YW5jZTogMFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBjbGFzc05hbWU6ICdudW1iZXInLFxuICAgICAgYmVnaW46ICcoXFxcXGIwWzAtN19dKyl8KFxcXFxiMHhbMC05YS1mQS1GX10rKXwoXFxcXGJbMS05XVswLTlfXSooXFxcXC5bMC05X10rKT8pfFswX11cXFxcYicsXG4gICAgICByZWxldmFuY2U6IDBcbiAgICB9LFxuICAgIHsgLy8gcmVnZXhwIGNvbnRhaW5lclxuICAgICAgYmVnaW46ICcoXFxcXC9cXFxcL3wnICsgaGxqcy5SRV9TVEFSVEVSU19SRSArICd8XFxcXGIoc3BsaXR8cmV0dXJufHByaW50fHJldmVyc2V8Z3JlcClcXFxcYilcXFxccyonLFxuICAgICAga2V5d29yZHM6ICdzcGxpdCByZXR1cm4gcHJpbnQgcmV2ZXJzZSBncmVwJyxcbiAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIGhsanMuSEFTSF9DT01NRU5UX01PREUsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdyZWdleHAnLFxuICAgICAgICAgIGJlZ2luOiAnKHN8dHJ8eSkvKFxcXFxcXFxcLnxbXi9dKSovKFxcXFxcXFxcLnxbXi9dKSovW2Etel0qJyxcbiAgICAgICAgICByZWxldmFuY2U6IDEwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICdyZWdleHAnLFxuICAgICAgICAgIGJlZ2luOiAnKG18cXIpPy8nLCBlbmQ6ICcvW2Etel0qJyxcbiAgICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV0sXG4gICAgICAgICAgcmVsZXZhbmNlOiAwIC8vIGFsbG93cyBlbXB0eSBcIi8vXCIgd2hpY2ggaXMgYSBjb21tb24gY29tbWVudCBkZWxpbWl0ZXIgaW4gb3RoZXIgbGFuZ3VhZ2VzXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgIGJlZ2luS2V5d29yZHM6ICdzdWInLCBlbmQ6ICcoXFxcXHMqXFxcXCguKj9cXFxcKSk/Wzt7XScsIGV4Y2x1ZGVFbmQ6IHRydWUsXG4gICAgICByZWxldmFuY2U6IDUsXG4gICAgICBjb250YWluczogW2hsanMuVElUTEVfTU9ERV1cbiAgICB9LFxuICAgIHtcbiAgICAgIGJlZ2luOiAnLVxcXFx3XFxcXGInLFxuICAgICAgcmVsZXZhbmNlOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICBiZWdpbjogXCJeX19EQVRBX18kXCIsXG4gICAgICBlbmQ6IFwiXl9fRU5EX18kXCIsXG4gICAgICBzdWJMYW5ndWFnZTogJ21vam9saWNpb3VzJyxcbiAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGJlZ2luOiBcIl5AQC4qXCIsXG4gICAgICAgICAgICBlbmQ6IFwiJFwiLFxuICAgICAgICAgICAgY2xhc3NOYW1lOiBcImNvbW1lbnRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdO1xuICBTVUJTVC5jb250YWlucyA9IFBFUkxfREVGQVVMVF9DT05UQUlOUztcbiAgTUVUSE9ELmNvbnRhaW5zID0gUEVSTF9ERUZBVUxUX0NPTlRBSU5TO1xuXG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydwbCcsICdwbSddLFxuICAgIGxleGVtZXM6IC9bXFx3XFwuXSsvLFxuICAgIGtleXdvcmRzOiBQRVJMX0tFWVdPUkRTLFxuICAgIGNvbnRhaW5zOiBQRVJMX0RFRkFVTFRfQ09OVEFJTlNcbiAgfTtcbn07Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==