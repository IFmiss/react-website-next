(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_routeros"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/routeros.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/routeros.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = // Colors from RouterOS terminal:
//   green        - #0E9A00
//   teal         - #0C9A9A
//   purple       - #99069A
//   light-brown  - #9A9900

function(hljs) {

  var STATEMENTS = 'foreach do while for if from to step else on-error and or not in';

  // Global commands: Every global command should start with ":" token, otherwise it will be treated as variable.
  var GLOBAL_COMMANDS = 'global local beep delay put len typeof pick log time set find environment terminal error execute parse resolve toarray tobool toid toip toip6 tonum tostr totime';

  // Common commands: Following commands available from most sub-menus:
  var COMMON_COMMANDS = 'add remove enable disable set get print export edit find run debug error info warning';

  var LITERALS = 'true false yes no nothing nil null';

  var OBJECTS = 'traffic-flow traffic-generator firewall scheduler aaa accounting address-list address align area bandwidth-server bfd bgp bridge client clock community config connection console customer default dhcp-client dhcp-server discovery dns e-mail ethernet filter firewall firmware gps graphing group hardware health hotspot identity igmp-proxy incoming instance interface ip ipsec ipv6 irq l2tp-server lcd ldp logging mac-server mac-winbox mangle manual mirror mme mpls nat nd neighbor network note ntp ospf ospf-v3 ovpn-server page peer pim ping policy pool port ppp pppoe-client pptp-server prefix profile proposal proxy queue radius resource rip ripng route routing screen script security-profiles server service service-port settings shares smb sms sniffer snmp snooper socks sstp-server system tool tracking type upgrade upnp user-manager users user vlan secret vrrp watchdog web-access wireless pptp pppoe lan wan layer7-protocol lease simple raw';

  // print parameters
  // Several parameters are available for print command:
  // ToDo: var PARAMETERS_PRINT = 'append as-value brief detail count-only file follow follow-only from interval terse value-list without-paging where info';
  // ToDo: var OPERATORS = '&& and ! not || or in ~ ^ & << >> + - * /';
  // ToDo: var TYPES = 'num number bool boolean str string ip ip6-prefix id time array';
  // ToDo: The following tokens serve as delimiters in the grammar: ()  []  {}  :   ;   $   / 

  var VAR_PREFIX = 'global local set for foreach';

  var VAR = {
    className: 'variable',
    variants: [
      {begin: /\$[\w\d#@][\w\d_]*/},
      {begin: /\$\{(.*?)}/}
    ]
  };
  
  var QUOTE_STRING = {
    className: 'string',
    begin: /"/, end: /"/,
    contains: [
      hljs.BACKSLASH_ESCAPE,
      VAR,
      {
        className: 'variable',
        begin: /\$\(/, end: /\)/,
        contains: [hljs.BACKSLASH_ESCAPE]
      }
    ]
  };
  
  var APOS_STRING = {
    className: 'string',
    begin: /'/, end: /'/
  };
  
  var IPADDR = '((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b';
  var IPADDR_wBITMASK =  IPADDR+'/(3[0-2]|[1-2][0-9]|\\d)';
  //////////////////////////////////////////////////////////////////////
  return {
    aliases: ['routeros', 'mikrotik'],
    case_insensitive: true,
    lexemes: /:?[\w-]+/,
    keywords: {
      literal: LITERALS,
      keyword: STATEMENTS + ' :' + STATEMENTS.split(' ').join(' :') + ' :' + GLOBAL_COMMANDS.split(' ').join(' :'),
    },
    contains: [
      { // недопустимые конструкции
        variants: [
          { begin: /^@/, end: /$/, },               // dns
          { begin: /\/\*/, end: /\*\//, },          // -- comment
          { begin: /%%/, end: /$/, },               // -- comment
          { begin: /^'/, end: /$/, },               // Monkey one line comment
          { begin: /^\s*\/[\w-]+=/, end: /$/, },    // jboss-cli
          { begin: /\/\//, end: /$/, },             // Stan comment
          { begin: /^\[\</, end: /\>\]$/, },        // F# class declaration?
          { begin: /<\//, end: />/, },              // HTML tags
          { begin: /^facet /, end: /\}/, },         // roboconf - лютый костыль )))
          { begin: '^1\\.\\.(\\d+)$', end: /$/, },  // tap  
        ],
        illegal: /./,
      },
      hljs.COMMENT('^#', '$'),
      QUOTE_STRING,
      APOS_STRING,
      VAR,
      { // attribute=value
        begin: /[\w-]+\=([^\s\{\}\[\]\(\)]+)/, 
        relevance: 0,
        returnBegin: true,
        contains: [
          {
            className: 'attribute',
            begin: /[^=]+/
          },
          {
            begin: /=/, 
            endsWithParent:  true,
            relevance: 0,
            contains: [
              QUOTE_STRING,
              APOS_STRING,
              VAR,
              {
                className: 'literal',
                begin: '\\b(' + LITERALS.split(' ').join('|') + ')\\b',
              },
              /*{
                // IPv4 addresses and subnets
                className: 'number',
                variants: [
                  {begin: IPADDR_wBITMASK+'(,'+IPADDR_wBITMASK+')*'}, //192.168.0.0/24,1.2.3.0/24
                  {begin: IPADDR+'-'+IPADDR},       // 192.168.0.1-192.168.0.3
                  {begin: IPADDR+'(,'+IPADDR+')*'}, // 192.168.0.1,192.168.0.34,192.168.24.1,192.168.0.1
                ]
              }, // */
              /*{
                // MAC addresses and DHCP Client IDs
                className: 'number',
                begin: /\b(1:)?([0-9A-Fa-f]{1,2}[:-]){5}([0-9A-Fa-f]){1,2}\b/,
              }, //*/
              {
                // Не форматировать не классифицированные значения. Необходимо для исключения подсветки значений как built_in.
                // className: 'number',  
                begin: /("[^"]*"|[^\s\{\}\[\]]+)/,
              }, //*/
            ]
          } //*/
        ]
      },//*/
      {
        // HEX values
        className: 'number',
        begin: /\*[0-9a-fA-F]+/,
      }, //*/

      { 
        begin: '\\b(' + COMMON_COMMANDS.split(' ').join('|') + ')([\\s\[\(]|\])',
        returnBegin: true,
        contains: [
          {
            className: 'builtin-name', //'function',
            begin: /\w+/,
          },
        ],  
      },
      
      { 
        className: 'built_in',
        variants: [
          {begin: '(\\.\\./|/|\\s)((' + OBJECTS.split(' ').join('|') + ');?\\s)+',relevance: 10,},
          {begin: /\.\./,},
        ],
      },//*/
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9yb3V0ZXJvcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3JvdXRlcm9zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gLy8gQ29sb3JzIGZyb20gUm91dGVyT1MgdGVybWluYWw6XG4vLyAgIGdyZWVuICAgICAgICAtICMwRTlBMDBcbi8vICAgdGVhbCAgICAgICAgIC0gIzBDOUE5QVxuLy8gICBwdXJwbGUgICAgICAgLSAjOTkwNjlBXG4vLyAgIGxpZ2h0LWJyb3duICAtICM5QTk5MDBcblxuZnVuY3Rpb24oaGxqcykge1xuXG4gIHZhciBTVEFURU1FTlRTID0gJ2ZvcmVhY2ggZG8gd2hpbGUgZm9yIGlmIGZyb20gdG8gc3RlcCBlbHNlIG9uLWVycm9yIGFuZCBvciBub3QgaW4nO1xuXG4gIC8vIEdsb2JhbCBjb21tYW5kczogRXZlcnkgZ2xvYmFsIGNvbW1hbmQgc2hvdWxkIHN0YXJ0IHdpdGggXCI6XCIgdG9rZW4sIG90aGVyd2lzZSBpdCB3aWxsIGJlIHRyZWF0ZWQgYXMgdmFyaWFibGUuXG4gIHZhciBHTE9CQUxfQ09NTUFORFMgPSAnZ2xvYmFsIGxvY2FsIGJlZXAgZGVsYXkgcHV0IGxlbiB0eXBlb2YgcGljayBsb2cgdGltZSBzZXQgZmluZCBlbnZpcm9ubWVudCB0ZXJtaW5hbCBlcnJvciBleGVjdXRlIHBhcnNlIHJlc29sdmUgdG9hcnJheSB0b2Jvb2wgdG9pZCB0b2lwIHRvaXA2IHRvbnVtIHRvc3RyIHRvdGltZSc7XG5cbiAgLy8gQ29tbW9uIGNvbW1hbmRzOiBGb2xsb3dpbmcgY29tbWFuZHMgYXZhaWxhYmxlIGZyb20gbW9zdCBzdWItbWVudXM6XG4gIHZhciBDT01NT05fQ09NTUFORFMgPSAnYWRkIHJlbW92ZSBlbmFibGUgZGlzYWJsZSBzZXQgZ2V0IHByaW50IGV4cG9ydCBlZGl0IGZpbmQgcnVuIGRlYnVnIGVycm9yIGluZm8gd2FybmluZyc7XG5cbiAgdmFyIExJVEVSQUxTID0gJ3RydWUgZmFsc2UgeWVzIG5vIG5vdGhpbmcgbmlsIG51bGwnO1xuXG4gIHZhciBPQkpFQ1RTID0gJ3RyYWZmaWMtZmxvdyB0cmFmZmljLWdlbmVyYXRvciBmaXJld2FsbCBzY2hlZHVsZXIgYWFhIGFjY291bnRpbmcgYWRkcmVzcy1saXN0IGFkZHJlc3MgYWxpZ24gYXJlYSBiYW5kd2lkdGgtc2VydmVyIGJmZCBiZ3AgYnJpZGdlIGNsaWVudCBjbG9jayBjb21tdW5pdHkgY29uZmlnIGNvbm5lY3Rpb24gY29uc29sZSBjdXN0b21lciBkZWZhdWx0IGRoY3AtY2xpZW50IGRoY3Atc2VydmVyIGRpc2NvdmVyeSBkbnMgZS1tYWlsIGV0aGVybmV0IGZpbHRlciBmaXJld2FsbCBmaXJtd2FyZSBncHMgZ3JhcGhpbmcgZ3JvdXAgaGFyZHdhcmUgaGVhbHRoIGhvdHNwb3QgaWRlbnRpdHkgaWdtcC1wcm94eSBpbmNvbWluZyBpbnN0YW5jZSBpbnRlcmZhY2UgaXAgaXBzZWMgaXB2NiBpcnEgbDJ0cC1zZXJ2ZXIgbGNkIGxkcCBsb2dnaW5nIG1hYy1zZXJ2ZXIgbWFjLXdpbmJveCBtYW5nbGUgbWFudWFsIG1pcnJvciBtbWUgbXBscyBuYXQgbmQgbmVpZ2hib3IgbmV0d29yayBub3RlIG50cCBvc3BmIG9zcGYtdjMgb3Zwbi1zZXJ2ZXIgcGFnZSBwZWVyIHBpbSBwaW5nIHBvbGljeSBwb29sIHBvcnQgcHBwIHBwcG9lLWNsaWVudCBwcHRwLXNlcnZlciBwcmVmaXggcHJvZmlsZSBwcm9wb3NhbCBwcm94eSBxdWV1ZSByYWRpdXMgcmVzb3VyY2UgcmlwIHJpcG5nIHJvdXRlIHJvdXRpbmcgc2NyZWVuIHNjcmlwdCBzZWN1cml0eS1wcm9maWxlcyBzZXJ2ZXIgc2VydmljZSBzZXJ2aWNlLXBvcnQgc2V0dGluZ3Mgc2hhcmVzIHNtYiBzbXMgc25pZmZlciBzbm1wIHNub29wZXIgc29ja3Mgc3N0cC1zZXJ2ZXIgc3lzdGVtIHRvb2wgdHJhY2tpbmcgdHlwZSB1cGdyYWRlIHVwbnAgdXNlci1tYW5hZ2VyIHVzZXJzIHVzZXIgdmxhbiBzZWNyZXQgdnJycCB3YXRjaGRvZyB3ZWItYWNjZXNzIHdpcmVsZXNzIHBwdHAgcHBwb2UgbGFuIHdhbiBsYXllcjctcHJvdG9jb2wgbGVhc2Ugc2ltcGxlIHJhdyc7XG5cbiAgLy8gcHJpbnQgcGFyYW1ldGVyc1xuICAvLyBTZXZlcmFsIHBhcmFtZXRlcnMgYXJlIGF2YWlsYWJsZSBmb3IgcHJpbnQgY29tbWFuZDpcbiAgLy8gVG9EbzogdmFyIFBBUkFNRVRFUlNfUFJJTlQgPSAnYXBwZW5kIGFzLXZhbHVlIGJyaWVmIGRldGFpbCBjb3VudC1vbmx5IGZpbGUgZm9sbG93IGZvbGxvdy1vbmx5IGZyb20gaW50ZXJ2YWwgdGVyc2UgdmFsdWUtbGlzdCB3aXRob3V0LXBhZ2luZyB3aGVyZSBpbmZvJztcbiAgLy8gVG9EbzogdmFyIE9QRVJBVE9SUyA9ICcmJiBhbmQgISBub3QgfHwgb3IgaW4gfiBeICYgPDwgPj4gKyAtICogLyc7XG4gIC8vIFRvRG86IHZhciBUWVBFUyA9ICdudW0gbnVtYmVyIGJvb2wgYm9vbGVhbiBzdHIgc3RyaW5nIGlwIGlwNi1wcmVmaXggaWQgdGltZSBhcnJheSc7XG4gIC8vIFRvRG86IFRoZSBmb2xsb3dpbmcgdG9rZW5zIHNlcnZlIGFzIGRlbGltaXRlcnMgaW4gdGhlIGdyYW1tYXI6ICgpICBbXSAge30gIDogICA7ICAgJCAgIC8gXG5cbiAgdmFyIFZBUl9QUkVGSVggPSAnZ2xvYmFsIGxvY2FsIHNldCBmb3IgZm9yZWFjaCc7XG5cbiAgdmFyIFZBUiA9IHtcbiAgICBjbGFzc05hbWU6ICd2YXJpYWJsZScsXG4gICAgdmFyaWFudHM6IFtcbiAgICAgIHtiZWdpbjogL1xcJFtcXHdcXGQjQF1bXFx3XFxkX10qL30sXG4gICAgICB7YmVnaW46IC9cXCRcXHsoLio/KX0vfVxuICAgIF1cbiAgfTtcbiAgXG4gIHZhciBRVU9URV9TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogL1wiLywgZW5kOiAvXCIvLFxuICAgIGNvbnRhaW5zOiBbXG4gICAgICBobGpzLkJBQ0tTTEFTSF9FU0NBUEUsXG4gICAgICBWQVIsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ3ZhcmlhYmxlJyxcbiAgICAgICAgYmVnaW46IC9cXCRcXCgvLCBlbmQ6IC9cXCkvLFxuICAgICAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRV1cbiAgICAgIH1cbiAgICBdXG4gIH07XG4gIFxuICB2YXIgQVBPU19TVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBiZWdpbjogLycvLCBlbmQ6IC8nL1xuICB9O1xuICBcbiAgdmFyIElQQUREUiA9ICcoKDI1WzAtNV18KDJbMC00XXwxezAsMX1bMC05XSl7MCwxfVswLTldKVxcLil7M30oMjVbMC01XXwoMlswLTRdfDF7MCwxfVswLTldKXswLDF9WzAtOV0pXFxcXGInO1xuICB2YXIgSVBBRERSX3dCSVRNQVNLID0gIElQQUREUisnLygzWzAtMl18WzEtMl1bMC05XXxcXFxcZCknO1xuICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIHJldHVybiB7XG4gICAgYWxpYXNlczogWydyb3V0ZXJvcycsICdtaWtyb3RpayddLFxuICAgIGNhc2VfaW5zZW5zaXRpdmU6IHRydWUsXG4gICAgbGV4ZW1lczogLzo/W1xcdy1dKy8sXG4gICAga2V5d29yZHM6IHtcbiAgICAgIGxpdGVyYWw6IExJVEVSQUxTLFxuICAgICAga2V5d29yZDogU1RBVEVNRU5UUyArICcgOicgKyBTVEFURU1FTlRTLnNwbGl0KCcgJykuam9pbignIDonKSArICcgOicgKyBHTE9CQUxfQ09NTUFORFMuc3BsaXQoJyAnKS5qb2luKCcgOicpLFxuICAgIH0sXG4gICAgY29udGFpbnM6IFtcbiAgICAgIHsgLy8g0L3QtdC00L7Qv9GD0YHRgtC40LzRi9C1INC60L7QvdGB0YLRgNGD0LrRhtC40LhcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7IGJlZ2luOiAvXkAvLCBlbmQ6IC8kLywgfSwgICAgICAgICAgICAgICAvLyBkbnNcbiAgICAgICAgICB7IGJlZ2luOiAvXFwvXFwqLywgZW5kOiAvXFwqXFwvLywgfSwgICAgICAgICAgLy8gLS0gY29tbWVudFxuICAgICAgICAgIHsgYmVnaW46IC8lJS8sIGVuZDogLyQvLCB9LCAgICAgICAgICAgICAgIC8vIC0tIGNvbW1lbnRcbiAgICAgICAgICB7IGJlZ2luOiAvXicvLCBlbmQ6IC8kLywgfSwgICAgICAgICAgICAgICAvLyBNb25rZXkgb25lIGxpbmUgY29tbWVudFxuICAgICAgICAgIHsgYmVnaW46IC9eXFxzKlxcL1tcXHctXSs9LywgZW5kOiAvJC8sIH0sICAgIC8vIGpib3NzLWNsaVxuICAgICAgICAgIHsgYmVnaW46IC9cXC9cXC8vLCBlbmQ6IC8kLywgfSwgICAgICAgICAgICAgLy8gU3RhbiBjb21tZW50XG4gICAgICAgICAgeyBiZWdpbjogL15cXFtcXDwvLCBlbmQ6IC9cXD5cXF0kLywgfSwgICAgICAgIC8vIEYjIGNsYXNzIGRlY2xhcmF0aW9uP1xuICAgICAgICAgIHsgYmVnaW46IC88XFwvLywgZW5kOiAvPi8sIH0sICAgICAgICAgICAgICAvLyBIVE1MIHRhZ3NcbiAgICAgICAgICB7IGJlZ2luOiAvXmZhY2V0IC8sIGVuZDogL1xcfS8sIH0sICAgICAgICAgLy8gcm9ib2NvbmYgLSDQu9GO0YLRi9C5INC60L7RgdGC0YvQu9GMICkpKVxuICAgICAgICAgIHsgYmVnaW46ICdeMVxcXFwuXFxcXC4oXFxcXGQrKSQnLCBlbmQ6IC8kLywgfSwgIC8vIHRhcCAgXG4gICAgICAgIF0sXG4gICAgICAgIGlsbGVnYWw6IC8uLyxcbiAgICAgIH0sXG4gICAgICBobGpzLkNPTU1FTlQoJ14jJywgJyQnKSxcbiAgICAgIFFVT1RFX1NUUklORyxcbiAgICAgIEFQT1NfU1RSSU5HLFxuICAgICAgVkFSLFxuICAgICAgeyAvLyBhdHRyaWJ1dGU9dmFsdWVcbiAgICAgICAgYmVnaW46IC9bXFx3LV0rXFw9KFteXFxzXFx7XFx9XFxbXFxdXFwoXFwpXSspLywgXG4gICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgcmV0dXJuQmVnaW46IHRydWUsXG4gICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAnYXR0cmlidXRlJyxcbiAgICAgICAgICAgIGJlZ2luOiAvW149XSsvXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogLz0vLCBcbiAgICAgICAgICAgIGVuZHNXaXRoUGFyZW50OiAgdHJ1ZSxcbiAgICAgICAgICAgIHJlbGV2YW5jZTogMCxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgIFFVT1RFX1NUUklORyxcbiAgICAgICAgICAgICAgQVBPU19TVFJJTkcsXG4gICAgICAgICAgICAgIFZBUixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogJ2xpdGVyYWwnLFxuICAgICAgICAgICAgICAgIGJlZ2luOiAnXFxcXGIoJyArIExJVEVSQUxTLnNwbGl0KCcgJykuam9pbignfCcpICsgJylcXFxcYicsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIC8qe1xuICAgICAgICAgICAgICAgIC8vIElQdjQgYWRkcmVzc2VzIGFuZCBzdWJuZXRzXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgICAge2JlZ2luOiBJUEFERFJfd0JJVE1BU0srJygsJytJUEFERFJfd0JJVE1BU0srJykqJ30sIC8vMTkyLjE2OC4wLjAvMjQsMS4yLjMuMC8yNFxuICAgICAgICAgICAgICAgICAge2JlZ2luOiBJUEFERFIrJy0nK0lQQUREUn0sICAgICAgIC8vIDE5Mi4xNjguMC4xLTE5Mi4xNjguMC4zXG4gICAgICAgICAgICAgICAgICB7YmVnaW46IElQQUREUisnKCwnK0lQQUREUisnKSonfSwgLy8gMTkyLjE2OC4wLjEsMTkyLjE2OC4wLjM0LDE5Mi4xNjguMjQuMSwxOTIuMTY4LjAuMVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfSwgLy8gKi9cbiAgICAgICAgICAgICAgLyp7XG4gICAgICAgICAgICAgICAgLy8gTUFDIGFkZHJlc3NlcyBhbmQgREhDUCBDbGllbnQgSURzXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgICAgICAgICBiZWdpbjogL1xcYigxOik/KFswLTlBLUZhLWZdezEsMn1bOi1dKXs1fShbMC05QS1GYS1mXSl7MSwyfVxcYi8sXG4gICAgICAgICAgICAgIH0sIC8vKi9cbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vINCd0LUg0YTQvtGA0LzQsNGC0LjRgNC+0LLQsNGC0Ywg0L3QtSDQutC70LDRgdGB0LjRhNC40YbQuNGA0L7QstCw0L3QvdGL0LUg0LfQvdCw0YfQtdC90LjRjy4g0J3QtdC+0LHRhdC+0LTQuNC80L4g0LTQu9GPINC40YHQutC70Y7Rh9C10L3QuNGPINC/0L7QtNGB0LLQtdGC0LrQuCDQt9C90LDRh9C10L3QuNC5INC60LDQuiBidWlsdF9pbi5cbiAgICAgICAgICAgICAgICAvLyBjbGFzc05hbWU6ICdudW1iZXInLCAgXG4gICAgICAgICAgICAgICAgYmVnaW46IC8oXCJbXlwiXSpcInxbXlxcc1xce1xcfVxcW1xcXV0rKS8sXG4gICAgICAgICAgICAgIH0sIC8vKi9cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9IC8vKi9cbiAgICAgICAgXVxuICAgICAgfSwvLyovXG4gICAgICB7XG4gICAgICAgIC8vIEhFWCB2YWx1ZXNcbiAgICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgICAgYmVnaW46IC9cXCpbMC05YS1mQS1GXSsvLFxuICAgICAgfSwgLy8qL1xuXG4gICAgICB7IFxuICAgICAgICBiZWdpbjogJ1xcXFxiKCcgKyBDT01NT05fQ09NTUFORFMuc3BsaXQoJyAnKS5qb2luKCd8JykgKyAnKShbXFxcXHNcXFtcXChdfFxcXSknLFxuICAgICAgICByZXR1cm5CZWdpbjogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzc05hbWU6ICdidWlsdGluLW5hbWUnLCAvLydmdW5jdGlvbicsXG4gICAgICAgICAgICBiZWdpbjogL1xcdysvLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sICBcbiAgICAgIH0sXG4gICAgICBcbiAgICAgIHsgXG4gICAgICAgIGNsYXNzTmFtZTogJ2J1aWx0X2luJyxcbiAgICAgICAgdmFyaWFudHM6IFtcbiAgICAgICAgICB7YmVnaW46ICcoXFxcXC5cXFxcLi98L3xcXFxccykoKCcgKyBPQkpFQ1RTLnNwbGl0KCcgJykuam9pbignfCcpICsgJyk7P1xcXFxzKSsnLHJlbGV2YW5jZTogMTAsfSxcbiAgICAgICAgICB7YmVnaW46IC9cXC5cXC4vLH0sXG4gICAgICAgIF0sXG4gICAgICB9LC8vKi9cbiAgICBdXG4gIH07XG59OyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9