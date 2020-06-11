(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["react-syntax-highlighter_languages_highlight_swift"],{

/***/ "./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/swift.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/react-syntax-highlighter/node_modules/highlight.js/lib/languages/swift.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  var SWIFT_KEYWORDS = {
      keyword: '#available #colorLiteral #column #else #elseif #endif #file ' +
        '#fileLiteral #function #if #imageLiteral #line #selector #sourceLocation ' +
        '_ __COLUMN__ __FILE__ __FUNCTION__ __LINE__ Any as as! as? associatedtype ' +
        'associativity break case catch class continue convenience default defer deinit didSet do ' +
        'dynamic dynamicType else enum extension fallthrough false fileprivate final for func ' +
        'get guard if import in indirect infix init inout internal is lazy left let ' +
        'mutating nil none nonmutating open operator optional override postfix precedence ' +
        'prefix private protocol Protocol public repeat required rethrows return ' +
        'right self Self set static struct subscript super switch throw throws true ' +
        'try try! try? Type typealias unowned var weak where while willSet',
      literal: 'true false nil',
      built_in: 'abs advance alignof alignofValue anyGenerator assert assertionFailure ' +
        'bridgeFromObjectiveC bridgeFromObjectiveCUnconditional bridgeToObjectiveC ' +
        'bridgeToObjectiveCUnconditional c contains count countElements countLeadingZeros ' +
        'debugPrint debugPrintln distance dropFirst dropLast dump encodeBitsAsWords ' +
        'enumerate equal fatalError filter find getBridgedObjectiveCType getVaList ' +
        'indices insertionSort isBridgedToObjectiveC isBridgedVerbatimToObjectiveC ' +
        'isUniquelyReferenced isUniquelyReferencedNonObjC join lazy lexicographicalCompare ' +
        'map max maxElement min minElement numericCast overlaps partition posix ' +
        'precondition preconditionFailure print println quickSort readLine reduce reflect ' +
        'reinterpretCast reverse roundUpToAlignment sizeof sizeofValue sort split ' +
        'startsWith stride strideof strideofValue swap toString transcode ' +
        'underestimateCount unsafeAddressOf unsafeBitCast unsafeDowncast unsafeUnwrap ' +
        'unsafeReflect withExtendedLifetime withObjectAtPlusZero withUnsafePointer ' +
        'withUnsafePointerToObject withUnsafeMutablePointer withUnsafeMutablePointers ' +
        'withUnsafePointer withUnsafePointers withVaList zip'
    };

  var TYPE = {
    className: 'type',
    begin: '\\b[A-Z][\\w\u00C0-\u02B8\']*',
    relevance: 0
  };
  // slightly more special to swift
  var OPTIONAL_USING_TYPE = {
    className: 'type',
    begin: '\\b[A-Z][\\w\u00C0-\u02B8\']*[!?]'
  }
  var BLOCK_COMMENT = hljs.COMMENT(
    '/\\*',
    '\\*/',
    {
      contains: ['self']
    }
  );
  var SUBST = {
    className: 'subst',
    begin: /\\\(/, end: '\\)',
    keywords: SWIFT_KEYWORDS,
    contains: [] // assigned later
  };
  var STRING = {
    className: 'string',
    contains: [hljs.BACKSLASH_ESCAPE, SUBST],
    variants: [
      {begin: /"""/, end: /"""/},
      {begin: /"/, end: /"/},
    ]
  };
  var NUMBERS = {
      className: 'number',
      begin: '\\b([\\d_]+(\\.[\\deE_]+)?|0x[a-fA-F0-9_]+(\\.[a-fA-F0-9p_]+)?|0b[01_]+|0o[0-7_]+)\\b',
      relevance: 0
  };
  SUBST.contains = [NUMBERS];

  return {
    keywords: SWIFT_KEYWORDS,
    contains: [
      STRING,
      hljs.C_LINE_COMMENT_MODE,
      BLOCK_COMMENT,
      OPTIONAL_USING_TYPE,
      TYPE,
      NUMBERS,
      {
        className: 'function',
        beginKeywords: 'func', end: '{', excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {
            begin: /[A-Za-z$_][0-9A-Za-z$_]*/
          }),
          {
            begin: /</, end: />/
          },
          {
            className: 'params',
            begin: /\(/, end: /\)/, endsParent: true,
            keywords: SWIFT_KEYWORDS,
            contains: [
              'self',
              NUMBERS,
              STRING,
              hljs.C_BLOCK_COMMENT_MODE,
              {begin: ':'} // relevance booster
            ],
            illegal: /["']/
          }
        ],
        illegal: /\[|%/
      },
      {
        className: 'class',
        beginKeywords: 'struct protocol class extension enum',
        keywords: SWIFT_KEYWORDS,
        end: '\\{',
        excludeEnd: true,
        contains: [
          hljs.inherit(hljs.TITLE_MODE, {begin: /[A-Za-z$_][\u00C0-\u02B80-9A-Za-z$_]*/})
        ]
      },
      {
        className: 'meta', // @attributes
        begin: '(@discardableResult|@warn_unused_result|@exported|@lazy|@noescape|' +
                  '@NSCopying|@NSManaged|@objc|@objcMembers|@convention|@required|' +
                  '@noreturn|@IBAction|@IBDesignable|@IBInspectable|@IBOutlet|' +
                  '@infix|@prefix|@postfix|@autoclosure|@testable|@available|' +
                  '@nonobjc|@NSApplicationMain|@UIApplicationMain)'

      },
      {
        beginKeywords: 'import', end: /$/,
        contains: [hljs.C_LINE_COMMENT_MODE, BLOCK_COMMENT]
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL2NodW5rcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX2hpZ2hsaWdodF9zd2lmdC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3N3aWZ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaGxqcykge1xuICB2YXIgU1dJRlRfS0VZV09SRFMgPSB7XG4gICAgICBrZXl3b3JkOiAnI2F2YWlsYWJsZSAjY29sb3JMaXRlcmFsICNjb2x1bW4gI2Vsc2UgI2Vsc2VpZiAjZW5kaWYgI2ZpbGUgJyArXG4gICAgICAgICcjZmlsZUxpdGVyYWwgI2Z1bmN0aW9uICNpZiAjaW1hZ2VMaXRlcmFsICNsaW5lICNzZWxlY3RvciAjc291cmNlTG9jYXRpb24gJyArXG4gICAgICAgICdfIF9fQ09MVU1OX18gX19GSUxFX18gX19GVU5DVElPTl9fIF9fTElORV9fIEFueSBhcyBhcyEgYXM/IGFzc29jaWF0ZWR0eXBlICcgK1xuICAgICAgICAnYXNzb2NpYXRpdml0eSBicmVhayBjYXNlIGNhdGNoIGNsYXNzIGNvbnRpbnVlIGNvbnZlbmllbmNlIGRlZmF1bHQgZGVmZXIgZGVpbml0IGRpZFNldCBkbyAnICtcbiAgICAgICAgJ2R5bmFtaWMgZHluYW1pY1R5cGUgZWxzZSBlbnVtIGV4dGVuc2lvbiBmYWxsdGhyb3VnaCBmYWxzZSBmaWxlcHJpdmF0ZSBmaW5hbCBmb3IgZnVuYyAnICtcbiAgICAgICAgJ2dldCBndWFyZCBpZiBpbXBvcnQgaW4gaW5kaXJlY3QgaW5maXggaW5pdCBpbm91dCBpbnRlcm5hbCBpcyBsYXp5IGxlZnQgbGV0ICcgK1xuICAgICAgICAnbXV0YXRpbmcgbmlsIG5vbmUgbm9ubXV0YXRpbmcgb3BlbiBvcGVyYXRvciBvcHRpb25hbCBvdmVycmlkZSBwb3N0Zml4IHByZWNlZGVuY2UgJyArXG4gICAgICAgICdwcmVmaXggcHJpdmF0ZSBwcm90b2NvbCBQcm90b2NvbCBwdWJsaWMgcmVwZWF0IHJlcXVpcmVkIHJldGhyb3dzIHJldHVybiAnICtcbiAgICAgICAgJ3JpZ2h0IHNlbGYgU2VsZiBzZXQgc3RhdGljIHN0cnVjdCBzdWJzY3JpcHQgc3VwZXIgc3dpdGNoIHRocm93IHRocm93cyB0cnVlICcgK1xuICAgICAgICAndHJ5IHRyeSEgdHJ5PyBUeXBlIHR5cGVhbGlhcyB1bm93bmVkIHZhciB3ZWFrIHdoZXJlIHdoaWxlIHdpbGxTZXQnLFxuICAgICAgbGl0ZXJhbDogJ3RydWUgZmFsc2UgbmlsJyxcbiAgICAgIGJ1aWx0X2luOiAnYWJzIGFkdmFuY2UgYWxpZ25vZiBhbGlnbm9mVmFsdWUgYW55R2VuZXJhdG9yIGFzc2VydCBhc3NlcnRpb25GYWlsdXJlICcgK1xuICAgICAgICAnYnJpZGdlRnJvbU9iamVjdGl2ZUMgYnJpZGdlRnJvbU9iamVjdGl2ZUNVbmNvbmRpdGlvbmFsIGJyaWRnZVRvT2JqZWN0aXZlQyAnICtcbiAgICAgICAgJ2JyaWRnZVRvT2JqZWN0aXZlQ1VuY29uZGl0aW9uYWwgYyBjb250YWlucyBjb3VudCBjb3VudEVsZW1lbnRzIGNvdW50TGVhZGluZ1plcm9zICcgK1xuICAgICAgICAnZGVidWdQcmludCBkZWJ1Z1ByaW50bG4gZGlzdGFuY2UgZHJvcEZpcnN0IGRyb3BMYXN0IGR1bXAgZW5jb2RlQml0c0FzV29yZHMgJyArXG4gICAgICAgICdlbnVtZXJhdGUgZXF1YWwgZmF0YWxFcnJvciBmaWx0ZXIgZmluZCBnZXRCcmlkZ2VkT2JqZWN0aXZlQ1R5cGUgZ2V0VmFMaXN0ICcgK1xuICAgICAgICAnaW5kaWNlcyBpbnNlcnRpb25Tb3J0IGlzQnJpZGdlZFRvT2JqZWN0aXZlQyBpc0JyaWRnZWRWZXJiYXRpbVRvT2JqZWN0aXZlQyAnICtcbiAgICAgICAgJ2lzVW5pcXVlbHlSZWZlcmVuY2VkIGlzVW5pcXVlbHlSZWZlcmVuY2VkTm9uT2JqQyBqb2luIGxhenkgbGV4aWNvZ3JhcGhpY2FsQ29tcGFyZSAnICtcbiAgICAgICAgJ21hcCBtYXggbWF4RWxlbWVudCBtaW4gbWluRWxlbWVudCBudW1lcmljQ2FzdCBvdmVybGFwcyBwYXJ0aXRpb24gcG9zaXggJyArXG4gICAgICAgICdwcmVjb25kaXRpb24gcHJlY29uZGl0aW9uRmFpbHVyZSBwcmludCBwcmludGxuIHF1aWNrU29ydCByZWFkTGluZSByZWR1Y2UgcmVmbGVjdCAnICtcbiAgICAgICAgJ3JlaW50ZXJwcmV0Q2FzdCByZXZlcnNlIHJvdW5kVXBUb0FsaWdubWVudCBzaXplb2Ygc2l6ZW9mVmFsdWUgc29ydCBzcGxpdCAnICtcbiAgICAgICAgJ3N0YXJ0c1dpdGggc3RyaWRlIHN0cmlkZW9mIHN0cmlkZW9mVmFsdWUgc3dhcCB0b1N0cmluZyB0cmFuc2NvZGUgJyArXG4gICAgICAgICd1bmRlcmVzdGltYXRlQ291bnQgdW5zYWZlQWRkcmVzc09mIHVuc2FmZUJpdENhc3QgdW5zYWZlRG93bmNhc3QgdW5zYWZlVW53cmFwICcgK1xuICAgICAgICAndW5zYWZlUmVmbGVjdCB3aXRoRXh0ZW5kZWRMaWZldGltZSB3aXRoT2JqZWN0QXRQbHVzWmVybyB3aXRoVW5zYWZlUG9pbnRlciAnICtcbiAgICAgICAgJ3dpdGhVbnNhZmVQb2ludGVyVG9PYmplY3Qgd2l0aFVuc2FmZU11dGFibGVQb2ludGVyIHdpdGhVbnNhZmVNdXRhYmxlUG9pbnRlcnMgJyArXG4gICAgICAgICd3aXRoVW5zYWZlUG9pbnRlciB3aXRoVW5zYWZlUG9pbnRlcnMgd2l0aFZhTGlzdCB6aXAnXG4gICAgfTtcblxuICB2YXIgVFlQRSA9IHtcbiAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICBiZWdpbjogJ1xcXFxiW0EtWl1bXFxcXHdcXHUwMEMwLVxcdTAyQjhcXCddKicsXG4gICAgcmVsZXZhbmNlOiAwXG4gIH07XG4gIC8vIHNsaWdodGx5IG1vcmUgc3BlY2lhbCB0byBzd2lmdFxuICB2YXIgT1BUSU9OQUxfVVNJTkdfVFlQRSA9IHtcbiAgICBjbGFzc05hbWU6ICd0eXBlJyxcbiAgICBiZWdpbjogJ1xcXFxiW0EtWl1bXFxcXHdcXHUwMEMwLVxcdTAyQjhcXCddKlshP10nXG4gIH1cbiAgdmFyIEJMT0NLX0NPTU1FTlQgPSBobGpzLkNPTU1FTlQoXG4gICAgJy9cXFxcKicsXG4gICAgJ1xcXFwqLycsXG4gICAge1xuICAgICAgY29udGFpbnM6IFsnc2VsZiddXG4gICAgfVxuICApO1xuICB2YXIgU1VCU1QgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3Vic3QnLFxuICAgIGJlZ2luOiAvXFxcXFxcKC8sIGVuZDogJ1xcXFwpJyxcbiAgICBrZXl3b3JkczogU1dJRlRfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtdIC8vIGFzc2lnbmVkIGxhdGVyXG4gIH07XG4gIHZhciBTVFJJTkcgPSB7XG4gICAgY2xhc3NOYW1lOiAnc3RyaW5nJyxcbiAgICBjb250YWluczogW2hsanMuQkFDS1NMQVNIX0VTQ0FQRSwgU1VCU1RdLFxuICAgIHZhcmlhbnRzOiBbXG4gICAgICB7YmVnaW46IC9cIlwiXCIvLCBlbmQ6IC9cIlwiXCIvfSxcbiAgICAgIHtiZWdpbjogL1wiLywgZW5kOiAvXCIvfSxcbiAgICBdXG4gIH07XG4gIHZhciBOVU1CRVJTID0ge1xuICAgICAgY2xhc3NOYW1lOiAnbnVtYmVyJyxcbiAgICAgIGJlZ2luOiAnXFxcXGIoW1xcXFxkX10rKFxcXFwuW1xcXFxkZUVfXSspP3wweFthLWZBLUYwLTlfXSsoXFxcXC5bYS1mQS1GMC05cF9dKyk/fDBiWzAxX10rfDBvWzAtN19dKylcXFxcYicsXG4gICAgICByZWxldmFuY2U6IDBcbiAgfTtcbiAgU1VCU1QuY29udGFpbnMgPSBbTlVNQkVSU107XG5cbiAgcmV0dXJuIHtcbiAgICBrZXl3b3JkczogU1dJRlRfS0VZV09SRFMsXG4gICAgY29udGFpbnM6IFtcbiAgICAgIFNUUklORyxcbiAgICAgIGhsanMuQ19MSU5FX0NPTU1FTlRfTU9ERSxcbiAgICAgIEJMT0NLX0NPTU1FTlQsXG4gICAgICBPUFRJT05BTF9VU0lOR19UWVBFLFxuICAgICAgVFlQRSxcbiAgICAgIE5VTUJFUlMsXG4gICAgICB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2Z1bmN0aW9uJyxcbiAgICAgICAgYmVnaW5LZXl3b3JkczogJ2Z1bmMnLCBlbmQ6ICd7JywgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7XG4gICAgICAgICAgICBiZWdpbjogL1tBLVphLXokX11bMC05QS1aYS16JF9dKi9cbiAgICAgICAgICB9KSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBiZWdpbjogLzwvLCBlbmQ6IC8+L1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiAncGFyYW1zJyxcbiAgICAgICAgICAgIGJlZ2luOiAvXFwoLywgZW5kOiAvXFwpLywgZW5kc1BhcmVudDogdHJ1ZSxcbiAgICAgICAgICAgIGtleXdvcmRzOiBTV0lGVF9LRVlXT1JEUyxcbiAgICAgICAgICAgIGNvbnRhaW5zOiBbXG4gICAgICAgICAgICAgICdzZWxmJyxcbiAgICAgICAgICAgICAgTlVNQkVSUyxcbiAgICAgICAgICAgICAgU1RSSU5HLFxuICAgICAgICAgICAgICBobGpzLkNfQkxPQ0tfQ09NTUVOVF9NT0RFLFxuICAgICAgICAgICAgICB7YmVnaW46ICc6J30gLy8gcmVsZXZhbmNlIGJvb3N0ZXJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBpbGxlZ2FsOiAvW1wiJ10vXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBpbGxlZ2FsOiAvXFxbfCUvXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBjbGFzc05hbWU6ICdjbGFzcycsXG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdzdHJ1Y3QgcHJvdG9jb2wgY2xhc3MgZXh0ZW5zaW9uIGVudW0nLFxuICAgICAgICBrZXl3b3JkczogU1dJRlRfS0VZV09SRFMsXG4gICAgICAgIGVuZDogJ1xcXFx7JyxcbiAgICAgICAgZXhjbHVkZUVuZDogdHJ1ZSxcbiAgICAgICAgY29udGFpbnM6IFtcbiAgICAgICAgICBobGpzLmluaGVyaXQoaGxqcy5USVRMRV9NT0RFLCB7YmVnaW46IC9bQS1aYS16JF9dW1xcdTAwQzAtXFx1MDJCODAtOUEtWmEteiRfXSovfSlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnbWV0YScsIC8vIEBhdHRyaWJ1dGVzXG4gICAgICAgIGJlZ2luOiAnKEBkaXNjYXJkYWJsZVJlc3VsdHxAd2Fybl91bnVzZWRfcmVzdWx0fEBleHBvcnRlZHxAbGF6eXxAbm9lc2NhcGV8JyArXG4gICAgICAgICAgICAgICAgICAnQE5TQ29weWluZ3xATlNNYW5hZ2VkfEBvYmpjfEBvYmpjTWVtYmVyc3xAY29udmVudGlvbnxAcmVxdWlyZWR8JyArXG4gICAgICAgICAgICAgICAgICAnQG5vcmV0dXJufEBJQkFjdGlvbnxASUJEZXNpZ25hYmxlfEBJQkluc3BlY3RhYmxlfEBJQk91dGxldHwnICtcbiAgICAgICAgICAgICAgICAgICdAaW5maXh8QHByZWZpeHxAcG9zdGZpeHxAYXV0b2Nsb3N1cmV8QHRlc3RhYmxlfEBhdmFpbGFibGV8JyArXG4gICAgICAgICAgICAgICAgICAnQG5vbm9iamN8QE5TQXBwbGljYXRpb25NYWlufEBVSUFwcGxpY2F0aW9uTWFpbiknXG5cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGJlZ2luS2V5d29yZHM6ICdpbXBvcnQnLCBlbmQ6IC8kLyxcbiAgICAgICAgY29udGFpbnM6IFtobGpzLkNfTElORV9DT01NRU5UX01PREUsIEJMT0NLX0NPTU1FTlRdXG4gICAgICB9XG4gICAgXVxuICB9O1xufTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9