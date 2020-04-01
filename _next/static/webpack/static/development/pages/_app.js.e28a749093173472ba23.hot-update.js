webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Audio/index.tsx":
/*!************************************!*\
  !*** ./components/Audio/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _audio_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio.less */ "./components/Audio/audio.less");
/* harmony import */ var _audio_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_audio_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _next_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./next.svg */ "./components/Audio/next.svg");
/* harmony import */ var _pause_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pause.svg */ "./components/Audio/pause.svg");
/* harmony import */ var _play_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./play.svg */ "./components/Audio/play.svg");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils */ "./components/Audio/utils.ts");



var _jsxFileName = "/Users/daiwei/pr/react-website-next/components/Audio/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









var DEFAULT_PLAY_INFO = {
  name: 'sunmmer',
  disc: 'hollo sunmmer',
  url: 'https://www.daiwei.site/static/music/background.mp3',
  coverUrl: 'https://www.daiwei.site/static/logo/sunmmer.jpg'
};

var Daudio = function Daudio(_ref, ref) {
  var _cls2, _cls5;

  var _ref$style = _ref.style,
      style = _ref$style === void 0 ? 'circle' : _ref$style,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'handle' : _ref$type,
      _ref$playType = _ref.playType,
      playType = _ref$playType === void 0 ? 'sequential-play' : _ref$playType,
      _ref$playList = _ref.playList,
      playList = _ref$playList === void 0 ? [DEFAULT_PLAY_INFO] : _ref$playList,
      handle = _ref.handle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      playing = _useState[0],
      setPlaying = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      progress = _useState3[0],
      setProgress = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(style),
      audioStyle = _useState4[0],
      setAudioStyle = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(playType),
      playTypeState = _useState5[0],
      setPlayTypeState = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(type),
      audioTypeState = _useState6[0],
      setAudioTypeState = _useState6[1];

  var eventQueue = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      playIndex = _useState7[0],
      setPlayIndex = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(playList),
      playQueue = _useState8[0],
      setPlayQueue = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      muted = _useState9[0],
      setMuted = _useState9[1];

  var audioRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);
  var isHandle = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return audioTypeState === 'handle';
  }, [audioTypeState]);
  var currentPlayList = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return audioTypeState === 'handle' ? playQueue[0] : playQueue[playIndex];
  }, [playIndex, playQueue[0]]);
  var isLoop = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return playTypeState === 'loop-play';
  }, [playTypeState]);

  var checkAudioType = function checkAudioType() {
    if (audioStyle === 'rect') {
      setAudioStyle(function (audioStyle) {
        return audioStyle = 'circle';
      });
    } else {
      setAudioStyle(function (audioStyle) {
        return audioStyle = 'rect';
      });
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    audioRef.current.addEventListener('timeupdate', onAudioTimeUpdate);
    handle && initHandle(handle);
    return function () {
      audioRef.current.removeEventListener('timeupdate', onAudioTimeUpdate);
    };
  }, []);

  var initHandle = function initHandle(handle) {
    // 注册事件
    var handleKeys = handle && Object.keys(handle);
    handleKeys && handleKeys.forEach(function (item) {
      addEvent(item, handle && handle[item] || function () {});
    });
  };

  var setStyle = function setStyle(t) {
    setAudioStyle(t);
  };

  var handlePlayPause = function handlePlayPause(e) {
    e.stopPropagation();
    e.preventDefault();
    playing ? pause() : play();
  };

  var pause = function pause() {
    var _audioRef$current;

    (_audioRef$current = audioRef.current) === null || _audioRef$current === void 0 ? void 0 : _audioRef$current.pause();
    setPlaying(false);
  };

  var play = function play() {
    var _audioRef$current2;

    (_audioRef$current2 = audioRef.current) === null || _audioRef$current2 === void 0 ? void 0 : _audioRef$current2.play();
    setPlaying(true);
  };

  var next = function next(e) {
    e.stopPropagation();
    e.preventDefault(); // setHandleList(audioInfo)

    if (isHandle) {
      var _eventHandler$onNext;

      console.log('by-handle'); // next事件

      var eventHandler = eventQueue.current;
      eventHandler === null || eventHandler === void 0 ? void 0 : (_eventHandler$onNext = eventHandler.onNext) === null || _eventHandler$onNext === void 0 ? void 0 : _eventHandler$onNext.map(function (item) {
        return item.call(null);
      });
      return;
    }

    checkNextByList();
  };

  var setAudioType = function setAudioType(t) {
    setAudioTypeState(t);
  };

  var playByIndex = function playByIndex(index) {
    setPlayIndex(index);
    play();
  };
  /**
   * 列表切换下一首
   */


  var checkNextByList = function checkNextByList() {
    console.log('by-list');
    console.log(playQueue);
    var l = playQueue.length;

    if (l === 1) {
      load();
      play();
      return;
    } // 随机


    if (playType === 'random-play') {
      playByIndex(~~(Math.random() * playQueue.length));
    } else {
      // 列表
      console.log('playIndexplayIndex', playIndex);
      var index = playIndex >= l - 1 ? 0 : playIndex + 1;
      playByIndex(index);
    }
  };
  /**
   * type 为 handle 时可调用
   * @param nextAudio 切换下一首 
   */


  var cut = function cut(nextAudio) {
    console.log(isHandle);

    if (!isHandle) {
      throw Error("The \u3010cut\u3011 method can only be executed when the type is handle");
    }

    load();
    setPlayQueue([nextAudio]);
    play();
  };

  var setPlayList = function setPlayList(list) {
    setPlayQueue(list);
  };

  var setPlayType = function setPlayType(t) {
    setPlayTypeState(t);
  };

  var start = function start() {};

  var ended = function ended() {
    console.log(eventQueue);
    console.log('ended');
  };

  var load = function load() {
    var _audioRef$current3;

    (_audioRef$current3 = audioRef.current) === null || _audioRef$current3 === void 0 ? void 0 : _audioRef$current3.load();
  };

  var onAudioPlay = function onAudioPlay() {
    if (muted) {
      setMuted(false);
    } // other fn

  };
  /**
   * 添加事件
   */


  var addEvent = function addEvent(name, fn) {
    var obj = {};
    var eventHandler = eventQueue.current;
    obj[name] = eventHandler && eventHandler[name] && eventHandler[name].length ? [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(eventHandler[name]), [fn]) : [fn];
    eventQueue.current = Object.assign({}, eventHandler, obj);
  };

  var url = currentPlayList.url,
      coverUrl = currentPlayList.coverUrl,
      name = currentPlayList.name,
      disc = currentPlayList.disc;
  console.log(currentPlayList);
  var mainClass = classnames__WEBPACK_IMPORTED_MODULE_4___default()(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "d-audio", true));
  var classWrapper = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_cls2 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cls2, mainClass, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cls2, audioStyle, true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cls2, "show", true), _cls2));
  var classCricle = classnames__WEBPACK_IMPORTED_MODULE_4___default()(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "d-audio-circle", true));
  var classPlayPause = classnames__WEBPACK_IMPORTED_MODULE_4___default()(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "d-audio-play-pause", true));
  var classLoading = classnames__WEBPACK_IMPORTED_MODULE_4___default()((_cls5 = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cls5, "d-audio-loading", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_cls5, "active", loading), _cls5));
  var blurStyle = {
    backgroundImage: "url(".concat(coverUrl, ")"),
    backgroundSize: 'cover',
    backgroundPosition: 'center center'
  };
  var rangeStyle = {
    border: "3px solid red"
  };
  var progressStyle = {
    backgroundImage: "linear-gradient(to right, red 30%, blue)",
    width: "".concat(progress, "%")
  };
  var onAudioTimeUpdate = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["throttle"])(function (e) {
    var _audioRef$current4, _audioRef$current5;

    setProgress(~~((((_audioRef$current4 = audioRef.current) === null || _audioRef$current4 === void 0 ? void 0 : _audioRef$current4.currentTime) || 0) / (((_audioRef$current5 = audioRef.current) === null || _audioRef$current5 === void 0 ? void 0 : _audioRef$current5.duration) || 1) * 100));
  }, 1000);

  var renderCricle = function renderCricle() {
    return __jsx("div", {
      className: classCricle,
      title: "".concat(name, " - ").concat(disc),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    }, __jsx("img", {
      className: "".concat(classCricle),
      crossOrigin: "anonymous",
      src: coverUrl,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338
      },
      __self: this
    }), __jsx("div", {
      className: "".concat(classCricle, "-range"),
      style: rangeStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339
      },
      __self: this
    }));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useImperativeHandle"])(ref, function () {
    return {
      start: start,
      next: next,
      play: play,
      pause: pause,
      addEvent: addEvent,
      setStyle: setStyle,
      cut: cut,
      setAudioType: setAudioType,
      setPlayList: setPlayList,
      setPlayType: setPlayType
    };
  });

  var renderRect = function renderRect() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358
      },
      __self: this
    }, __jsx("div", {
      className: "".concat(mainClass, "-detail"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359
      },
      __self: this
    }, __jsx("div", {
      className: "".concat(mainClass, "-detail-config"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 360
      },
      __self: this
    }, __jsx("div", {
      className: classPlayPause,
      onClick: handlePlayPause,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 361
      },
      __self: this
    }, playing ? __jsx(_pause_svg__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364
      },
      __self: this
    }) : __jsx(_play_svg__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366
      },
      __self: this
    })), __jsx("div", {
      className: "d-audio-next",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370
      },
      __self: this
    }, __jsx(_next_svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onClick: next,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 371
      },
      __self: this
    }))), __jsx("div", {
      className: "".concat(mainClass, "-detail-info"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374
      },
      __self: this
    }, __jsx("h3", {
      className: "".concat(mainClass, "-detail-info-name"),
      title: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 375
      },
      __self: this
    }, name), __jsx("div", {
      className: "".concat(mainClass, "-detail-info-disc"),
      title: disc,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 376
      },
      __self: this
    }, disc))), __jsx("div", {
      className: "".concat(mainClass, "-blur-bg"),
      style: blurStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379
      },
      __self: this
    }), __jsx("div", {
      className: classLoading,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380
      },
      __self: this
    }), __jsx("div", {
      className: "".concat(mainClass, "-progress"),
      style: progressStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 381
      },
      __self: this
    }));
  };

  return __jsx("div", {
    className: classWrapper,
    onClick: checkAudioType,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: this
  }, renderCricle(), renderRect(), __jsx("audio", {
    className: "".concat(mainClass, "-ele"),
    src: url,
    ref: audioRef,
    muted: muted,
    loop: isLoop,
    onPlay: onAudioPlay,
    onEnded: ended,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: this
  }));
}; // export default Daudio


var AudioComponent = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(Daudio);

function AudioInstance(props) {
  var AudioRef = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
  var div = document.createElement('div');
  document.body.appendChild(div);
  var a = react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.createPortal(__jsx(AudioComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: AudioRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  })), div);
  console.log('a', a);
  console.log('AudioRef.current', AudioRef.current);

  var destroy = function destroy() {
    var _div$parentNode;

    var unmountResult = react_dom__WEBPACK_IMPORTED_MODULE_9___default.a.unmountComponentAtNode(div);
    unmountResult && ((_div$parentNode = div.parentNode) === null || _div$parentNode === void 0 ? void 0 : _div$parentNode.removeChild(div));
  };

  return _objectSpread({}, AudioRef.current, {
    destroy: destroy
  });
}

/* harmony default export */ __webpack_exports__["default"] = (AudioInstance);

/***/ }),

/***/ "./components/Audio/main.ts":
/*!**********************************!*\
  !*** ./components/Audio/main.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./components/Audio/index.tsx");


var instanceWrapper = function instanceWrapper(props) {
  return Object(_index__WEBPACK_IMPORTED_MODULE_0__["default"])(props);
};

/* harmony default export */ __webpack_exports__["default"] = (_index__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Audio/next.svg":
/*!***********************************!*\
  !*** ./components/Audio/next.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M655.706 465.603L332.054 218.588c-38.415-29.327-93.791-1.929-93.791 46.397v494.029c0 48.325 55.376 75.725 93.79 46.398l323.653-247.015c30.603-23.358 30.603-69.436 0-92.794zm125.359 315.195V287.122c0-19.629 5.904-60.476-17.058-75.842-25.524-17.068-59.748 1.21-59.748 31.92v493.677c0 19.628-5.915 60.474 17.047 75.84 25.533 17.07 59.759-1.211 59.759-31.919z"
});

function SvgNext(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    className: "next_svg__icon",
    viewBox: "0 0 1024 1024"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgNext);

/***/ }),

/***/ "./components/Audio/pause.svg":
/*!************************************!*\
  !*** ./components/Audio/pause.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M597.333 213.333h85.334V768h-85.334V213.333zm-256 0h85.334V768h-85.334V213.333z"
});

function SvgPause(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    className: "pause_svg__icon",
    viewBox: "0 0 1024 1024",
    width: 200,
    height: 200
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgPause);

/***/ }),

/***/ "./components/Audio/play.svg":
/*!***********************************!*\
  !*** ./components/Audio/play.svg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M917.811 450.406L160.59 8.55C151.373 3.174 141.824 0 130.944 0c-29.67 0-53.862 24.013-53.862 53.325H76.8v917.35h.256c0 29.312 24.243 53.325 53.888 53.325 11.162 0 20.403-3.738 30.464-9.062l756.429-441.344A79.334 79.334 0 00947.2 512c0-24.806-11.418-46.669-29.389-61.594z"
});

function SvgPlay(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    className: "play_svg__icon",
    viewBox: "0 0 1024 1024"
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgPlay);

/***/ }),

/***/ "./components/Audio/utils.ts":
/*!***********************************!*\
  !*** ./components/Audio/utils.ts ***!
  \***********************************/
/*! exports provided: throttle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
function throttle(fn) {
  var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

  if (typeof fn !== 'function') {
    return;
  }

  var time = null;
  var first = true;
  return function () {
    var _this = this;

    var arg = arguments;

    if (first) {
      fn.apply(this, arg);
      first = false;
      return;
    }

    if (time) return;
    time = setTimeout(function () {
      setTimeout(time);
      time = null;
      fn.apply(_this, arg);
    }, t);
  };
}

/***/ }),

/***/ "./components/Music/index.tsx":
/*!************************************!*\
  !*** ./components/Music/index.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_req__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utils/req */ "./utils/req.ts");
/* harmony import */ var _constance_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @constance/api */ "./constance/api.ts");
/* harmony import */ var _music_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./music.less */ "./components/Music/music.less");
/* harmony import */ var _music_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_music_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _loadable_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @loadable/component */ "./node_modules/@loadable/component/dist/loadable.esm.js");
/* harmony import */ var _components_Audio_main__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Audio/main */ "./components/Audio/main.ts");

var _jsxFileName = "/Users/daiwei/pr/react-website-next/components/Music/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






// const audioInstance = require('@components/Audio/main').default

var audiRef;
var Ripple = Object(_loadable_component__WEBPACK_IMPORTED_MODULE_6__["default"])(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ripple-button */ "./node_modules/ripple-button/dist/index.js", 7));
});

var Music = function Music() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      tracksLists = _useState[0],
      setTracksLists = _useState[1];

  var classString = classnames__WEBPACK_IMPORTED_MODULE_2___default()('music-sider-wrapper');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    getMusic(2179377798);
    audiRef = Object(_components_Audio_main__WEBPACK_IMPORTED_MODULE_7__["default"])({
      handle: {
        onNext: function onNext() {
          console.log('next');
        }
      }
    });
    console.log('audiRef', audiRef);
  }, []);

  var getMusic = function getMusic(id) {
    var res, tracks;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getMusic$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_req__WEBPACK_IMPORTED_MODULE_3__["default"].get("".concat(_constance_api__WEBPACK_IMPORTED_MODULE_4__["MUSIC_DETAIL"], "?id=").concat(id)));

          case 2:
            res = _context.sent;
            tracks = res.data.playlist.tracks;
            setTracksLists(tracks);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var checkMusic = function checkMusic(item) {
    var _ref, musicDetail, formatDetail, st;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function checkMusic$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(getMusicDetailById(item.id));

          case 2:
            _ref = _context2.sent;
            musicDetail = _ref.data.songs;
            console.log('songs', musicDetail);
            formatDetail = formatMusicLists(musicDetail);
            console.log('formatDetail', formatDetail);
            st = {
              url: getUrlById(item.id),
              coverUrl: clipImage(formatDetail[0].album.picUrl),
              name: item.name,
              disc: formatMusicArtists(formatDetail[0].artists)
            };
            console.log('audiRefaudiRefaudiRef', audiRef);
            audiRef && audiRef.cut(st);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var clipImage = function clipImage(src) {
    var w = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 120;
    var h = arguments.length > 2 ? arguments[2] : undefined;
    return "".concat(src, "?param=").concat(w, "y").concat(h ? h : w);
  };

  var formatMusicLists = function formatMusicLists(lists) {
    console.log('lists', lists);
    return lists.map(function (item) {
      item.album = item.al;
      item.artists = item.ar;
      item.duration = item.dt;
      return item;
    });
  };

  var getMusicDetailById = function getMusicDetailById(id) {
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getMusicDetailById$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_req__WEBPACK_IMPORTED_MODULE_3__["default"].get("".concat(_constance_api__WEBPACK_IMPORTED_MODULE_4__["MUSIC_PLAY_DETAIL"], "?ids=").concat(id)));

          case 2:
            data = _context3.sent;
            return _context3.abrupt("return", data);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, null, Promise);
  };

  var formatMusicArtists = function formatMusicArtists(artists) {
    return artists.map(function (artist) {
      return artist.name;
    }).join(', ');
  };

  var getUrlById = function getUrlById(id) {
    return "//music.163.com/song/media/outer/url?id=".concat(id, ".mp3");
  };

  return __jsx("div", {
    className: classString,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("p", {
    className: "".concat(classString, "-title"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "\u97F3\u4E50"), __jsx("div", {
    className: "".concat(classString, "-content"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, tracksLists && tracksLists.map(function (item, index) {
    return __jsx(Ripple, {
      key: index,
      color: "rgba(99, 99, 99, 0.3)",
      onClick: checkMusic.bind(null, item),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, item.name));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Music);

/***/ }),

/***/ "./components/SiderWarp/index.tsx":
/*!****************************************!*\
  !*** ./components/SiderWarp/index.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constance_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @constance/index */ "./constance/index.ts");
/* harmony import */ var _sider_warp_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sider-warp.less */ "./components/SiderWarp/sider-warp.less");
/* harmony import */ var _sider_warp_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sider_warp_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _menu_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.svg */ "./components/SiderWarp/menu.svg");

var _jsxFileName = "/Users/daiwei/pr/react-website-next/components/SiderWarp/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var SiderWarp = function SiderWarp(props, ref) {
  var _classNames;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.show),
      show = _useState[0],
      setShow = _useState[1];

  var classString = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(_constance_index__WEBPACK_IMPORTED_MODULE_3__["PROJECT_NAME"], "-comp-sider-warp"), true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "show", show), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_classNames, "".concat(props.type), true), _classNames));

  var hideComp = function hideComp() {
    setShow(function (show) {
      return show = false;
    });
    props.hideFn && props.hideFn();
  };

  var showComp = function showComp() {
    setShow(function (show) {
      return show = true;
    });
    props.showFn && props.showFn();
  };

  var toggleSiderWarp = function toggleSiderWarp() {
    show ? props.hideFn && props.hideFn() : props.showFn && props.showFn();
    setShow(function (show) {
      return show = !show;
    });
  };

  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useImperativeHandle"])(ref, function () {
    return {
      showComp: showComp,
      hideComp: hideComp
    };
  });
  return __jsx("section", {
    className: classString,
    ref: mapRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("div", {
    className: "mask",
    onClick: hideComp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("div", {
    className: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "content-switch",
    onClick: toggleSiderWarp,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx(_menu_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "memu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx("div", {
    className: "wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, props.children)));
};

var SiderWarpComponent = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(SiderWarp);
/* harmony default export */ __webpack_exports__["default"] = (SiderWarpComponent);

/***/ }),

/***/ "./components/SiderWarp/menu.svg":
/*!***************************************!*\
  !*** ./components/SiderWarp/menu.svg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M51.2 56.32h921.6c28.278 0 51.2 22.922 51.2 51.2s-22.922 51.2-51.2 51.2H51.2c-28.278 0-51.2-22.922-51.2-51.2s22.922-51.2 51.2-51.2zm0 399.36h921.6c28.278 0 51.2 22.922 51.2 51.2s-22.922 51.2-51.2 51.2H51.2c-28.278 0-51.2-22.922-51.2-51.2s22.922-51.2 51.2-51.2zm0 399.36h921.6c28.278 0 51.2 22.922 51.2 51.2s-22.922 51.2-51.2 51.2H51.2c-28.278 0-51.2-22.922-51.2-51.2s22.922-51.2 51.2-51.2z"
});

function SvgMenu(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    className: "menu_svg__icon",
    viewBox: "0 0 1024 1024",
    width: 200,
    height: 200
  }, props), _ref);
}

/* harmony default export */ __webpack_exports__["default"] = (SvgMenu);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@loadable/component/dist/loadable.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@loadable/component/dist/loadable.esm.js ***!
  \***************************************************************/
/*! exports provided: default, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, lazy, loadableReady */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED", function() { return __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lazy", function() { return lazy$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadableReady", function() { return loadableReady; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5__);







/* eslint-disable import/prefer-default-export */
function invariant(condition, message) {
  if (condition) return;
  var error = new Error("loadable: " + message);
  error.framesToPop = 1;
  error.name = 'Invariant Violation';
  throw error;
}
function warn(message) {
  // eslint-disable-next-line no-console
  console.warn("loadable: " + message);
}

var Context = /*#__PURE__*/
react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

var LOADABLE_REQUIRED_CHUNKS_KEY = '__LOADABLE_REQUIRED_CHUNKS__';
function getRequiredChunkKey(namespace) {
  return "" + namespace + LOADABLE_REQUIRED_CHUNKS_KEY;
}

var sharedInternals = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getRequiredChunkKey: getRequiredChunkKey,
  invariant: invariant,
  Context: Context
});

function resolveConstructor(ctor) {
  if (typeof ctor === 'function') {
    return {
      requireAsync: ctor
    };
  }

  return ctor;
}

var withChunkExtractor = function withChunkExtractor(Component) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Context.Consumer, null, function (extractor) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, Object.assign({
        __chunkExtractor: extractor
      }, props));
    });
  };
};

var identity = function identity(v) {
  return v;
};

function createLoadable(_ref) {
  var _ref$resolve = _ref.resolve,
      resolve = _ref$resolve === void 0 ? identity : _ref$resolve,
      _render = _ref.render,
      onLoad = _ref.onLoad;

  function loadable(loadableConstructor, options) {
    if (options === void 0) {
      options = {};
    }

    var ctor = resolveConstructor(loadableConstructor);
    var cache = {};

    function _getCacheKey(props) {
      if (options.cacheKey) {
        return options.cacheKey(props);
      }

      if (ctor.resolve) {
        return ctor.resolve(props);
      }

      return null;
    }

    var InnerLoadable =
    /*#__PURE__*/
    function (_React$Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(InnerLoadable, _React$Component);

      InnerLoadable.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
        var cacheKey = _getCacheKey(props);

        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, state, {
          cacheKey: cacheKey,
          loading: state.loading || state.cacheKey !== cacheKey
        });
      };

      function InnerLoadable(props) {
        var _this;

        _this = _React$Component.call(this, props) || this;
        _this.state = {
          result: null,
          error: null,
          loading: true,
          cacheKey: _getCacheKey(props)
        };
        _this.promise = null;
        invariant(!props.__chunkExtractor || ctor.requireSync, 'SSR requires `@loadable/babel-plugin`, please install it'); // Server-side

        if (props.__chunkExtractor) {
          // This module has been marked with no SSR
          if (options.ssr === false) {
            return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this);
          } // We run load function, we assume that it won't fail and that it
          // triggers a synchronous loading of the module


          ctor.requireAsync(props)["catch"](function () {}); // So we can require now the module synchronously

          _this.loadSync();

          props.__chunkExtractor.addChunk(ctor.chunkName(props));

          return Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this);
        } // Client-side with `isReady` method present (SSR probably)
        // If module is already loaded, we use a synchronous loading
        // Only perform this synchronous loading if the component has not
        // been marked with no SSR, else we risk hydration mismatches


        if (options.ssr !== false && ctor.isReady && ctor.isReady(props)) {
          _this.loadSync();
        }

        return _this;
      }

      var _proto = InnerLoadable.prototype;

      _proto.componentDidMount = function componentDidMount() {
        this.mounted = true;

        if (this.state.loading) {
          this.loadAsync();
        } else if (!this.state.error) {
          this.triggerOnLoad();
        }
      };

      _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        // Component is reloaded if the cacheKey has changed
        if (prevState.cacheKey !== this.state.cacheKey) {
          this.promise = null;
          this.loadAsync();
        }
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
      };

      _proto.safeSetState = function safeSetState(nextState, callback) {
        if (this.mounted) {
          this.setState(nextState, callback);
        }
      };

      _proto.triggerOnLoad = function triggerOnLoad() {
        var _this2 = this;

        if (onLoad) {
          setTimeout(function () {
            onLoad(_this2.state.result, _this2.props);
          });
        }
      };

      _proto.loadSync = function loadSync() {
        if (!this.state.loading) return;

        try {
          var loadedModule = ctor.requireSync(this.props);
          var result = resolve(loadedModule, {
            Loadable: Loadable
          });
          this.state.result = result;
          this.state.loading = false;
        } catch (error) {
          this.state.error = error;
        }
      };

      _proto.getCacheKey = function getCacheKey() {
        return _getCacheKey(this.props) || JSON.stringify(this.props);
      };

      _proto.getCache = function getCache() {
        return cache[this.getCacheKey()];
      };

      _proto.setCache = function setCache(value) {
        cache[this.getCacheKey()] = value;
      };

      _proto.loadAsync = function loadAsync() {
        var _this3 = this;

        if (!this.promise) {
          var _this$props = this.props,
              __chunkExtractor = _this$props.__chunkExtractor,
              forwardedRef = _this$props.forwardedRef,
              props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["__chunkExtractor", "forwardedRef"]);

          this.promise = ctor.requireAsync(props).then(function (loadedModule) {
            var result = resolve(loadedModule, {
              Loadable: Loadable
            });

            if (options.suspense) {
              _this3.setCache(result);
            }

            _this3.safeSetState({
              result: resolve(loadedModule, {
                Loadable: Loadable
              }),
              loading: false
            }, function () {
              return _this3.triggerOnLoad();
            });
          })["catch"](function (error) {
            _this3.safeSetState({
              error: error,
              loading: false
            });
          });
        }

        return this.promise;
      };

      _proto.render = function render() {
        var _this$props2 = this.props,
            forwardedRef = _this$props2.forwardedRef,
            propFallback = _this$props2.fallback,
            __chunkExtractor = _this$props2.__chunkExtractor,
            props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props2, ["forwardedRef", "fallback", "__chunkExtractor"]);

        var _this$state = this.state,
            error = _this$state.error,
            loading = _this$state.loading,
            result = _this$state.result;

        if (options.suspense) {
          var cachedResult = this.getCache();
          if (!cachedResult) throw this.loadAsync();
          return _render({
            loading: false,
            fallback: null,
            result: cachedResult,
            options: options,
            props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
              ref: forwardedRef
            })
          });
        }

        if (error) {
          throw error;
        }

        var fallback = propFallback || options.fallback || null;

        if (loading) {
          return fallback;
        }

        return _render({
          loading: loading,
          fallback: fallback,
          result: result,
          options: options,
          props: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, props, {
            ref: forwardedRef
          })
        });
      };

      return InnerLoadable;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

    var EnhancedInnerLoadable = withChunkExtractor(InnerLoadable);
    var Loadable = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EnhancedInnerLoadable, Object.assign({
        forwardedRef: ref
      }, props));
    }); // In future, preload could use `<link rel="preload">`

    Loadable.preload = function (props) {
      ctor.requireAsync(props);
    };

    Loadable.load = function (props) {
      return ctor.requireAsync(props);
    };

    return Loadable;
  }

  function lazy(ctor, options) {
    return loadable(ctor, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, options, {
      suspense: true
    }));
  }

  return {
    loadable: loadable,
    lazy: lazy
  };
}

function resolveComponent(loadedModule, _ref) {
  var Loadable = _ref.Loadable;
  // eslint-disable-next-line no-underscore-dangle
  var Component = loadedModule.__esModule ? loadedModule["default"] : loadedModule["default"] || loadedModule;
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_5___default()(Loadable, Component, {
    preload: true
  });
  return Component;
}

/* eslint-disable no-use-before-define, react/no-multi-comp */

var _createLoadable =
/*#__PURE__*/
createLoadable({
  resolve: resolveComponent,
  render: function render(_ref) {
    var Component = _ref.result,
        props = _ref.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props);
  }
}),
    loadable = _createLoadable.loadable,
    lazy = _createLoadable.lazy;

/* eslint-disable no-use-before-define, react/no-multi-comp */

var _createLoadable$1 =
/*#__PURE__*/
createLoadable({
  onLoad: function onLoad(result, props) {
    if (result && props.forwardedRef) {
      if (typeof props.forwardedRef === 'function') {
        props.forwardedRef(result);
      } else {
        props.forwardedRef.current = result;
      }
    }
  },
  render: function render(_ref) {
    var result = _ref.result,
        loading = _ref.loading,
        props = _ref.props;

    if (!loading && props.children) {
      return props.children(result);
    }

    return null;
  }
}),
    loadable$1 = _createLoadable$1.loadable,
    lazy$1 = _createLoadable$1.lazy;

/* eslint-disable no-underscore-dangle, camelcase */
var BROWSER = typeof window !== 'undefined';
function loadableReady(done, _temp) {
  if (done === void 0) {
    done = function done() {};
  }

  var _ref = _temp === void 0 ? {} : _temp,
      _ref$namespace = _ref.namespace,
      namespace = _ref$namespace === void 0 ? '' : _ref$namespace;

  if (!BROWSER) {
    warn('`loadableReady()` must be called in browser only');
    done();
    return Promise.resolve();
  }

  var requiredChunks = null;

  if (BROWSER) {
    var dataElement = document.getElementById(getRequiredChunkKey(namespace));

    if (dataElement) {
      requiredChunks = JSON.parse(dataElement.textContent);
    }
  }

  if (!requiredChunks) {
    warn('`loadableReady()` requires state, please use `getScriptTags` or `getScriptElements` server-side');
    done();
    return Promise.resolve();
  }

  var resolved = false;
  return new Promise(function (resolve) {
    window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || [];
    var loadedChunks = window.__LOADABLE_LOADED_CHUNKS__;
    var originalPush = loadedChunks.push.bind(loadedChunks);

    function checkReadyState() {
      if (requiredChunks.every(function (chunk) {
        return loadedChunks.some(function (_ref2) {
          var chunks = _ref2[0];
          return chunks.indexOf(chunk) > -1;
        });
      })) {
        if (!resolved) {
          resolved = true;
          resolve();
          done();
        }
      }
    }

    loadedChunks.push = function () {
      originalPush.apply(void 0, arguments);
      checkReadyState();
    };

    checkReadyState();
  });
}

/* eslint-disable no-underscore-dangle */
var loadable$2 = loadable;
loadable$2.lib = loadable$1;
var lazy$2 = lazy;
lazy$2.lib = lazy$1;
var __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sharedInternals;

/* harmony default export */ __webpack_exports__["default"] = (loadable$2);



/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @style/index.less */ "./style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _root_components_Nav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @root/components/Nav */ "./components/Nav/index.tsx");
/* harmony import */ var _root_components_CopyRight__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @root/components/CopyRight */ "./components/CopyRight/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @store/index */ "./store/index.ts");
/* harmony import */ var _root_utils_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @root/utils/utils */ "./utils/utils.ts");
/* harmony import */ var _root_components_SiderWarp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @root/components/SiderWarp */ "./components/SiderWarp/index.tsx");
/* harmony import */ var _components_Music__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @components/Music */ "./components/Music/index.tsx");








var _jsxFileName = "/Users/daiwei/pr/react-website-next/pages/_app.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;












var MyApp = /*#__PURE__*/function (_App) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2, _classNames;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "classWrapperString", classnames__WEBPACK_IMPORTED_MODULE_10___default()((_classNames = {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_classNames, "react-next-wrapper", true), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(_classNames, "theme-default", true), _classNames)));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "showFn", function () {
      Object(_root_utils_utils__WEBPACK_IMPORTED_MODULE_16__["addClass"])(document.getElementById('dw-next-container'), 'perspective');
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "hideFn", function () {
      Object(_root_utils_utils__WEBPACK_IMPORTED_MODULE_16__["removeClass"])(document.getElementById('dw-next-container'), 'perspective');
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_14__["Provider"], {
        store: _store_index__WEBPACK_IMPORTED_MODULE_15__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx(_root_components_SiderWarp__WEBPACK_IMPORTED_MODULE_17__["default"], {
        showFn: this.showFn,
        hideFn: this.hideFn,
        type: "fixed",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, __jsx(_components_Music__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      })), __jsx("div", {
        className: "".concat(this.classWrapperString),
        id: "dw-next-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        className: "react-next-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx(_root_components_Nav__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      })), __jsx("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }))), __jsx(_root_components_CopyRight__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_9___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMuZTI4YTc0OTA5MzE3MzQ3MmJhMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXVkaW8vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXVkaW8vbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1ZGlvL25leHQuc3ZnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXVkaW8vcGF1c2Uuc3ZnIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXVkaW8vcGxheS5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdWRpby91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL011c2ljL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGVyV2FycC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlcldhcnAvbWVudS5zdmciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGxvYWRhYmxlL2NvbXBvbmVudC9kaXN0L2xvYWRhYmxlLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlSW1wZXJhdGl2ZUhhbmRsZSwgdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgJy4vYXVkaW8ubGVzcydcbmltcG9ydCBOZXh0SWNvbiBmcm9tICcuL25leHQuc3ZnJ1xuaW1wb3J0IFBhdXNlSWNvbiBmcm9tICcuL3BhdXNlLnN2ZydcbmltcG9ydCBQbGF5SWNvbiBmcm9tICcuL3BsYXkuc3ZnJ1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCB7XG4gIHRocm90dGxlXG59IGZyb20gJy4vdXRpbHMnXG5cbmV4cG9ydCB0eXBlIEV2ZW50VHlwZSA9ICdvbkVuZGVkJyB8ICdvbk5leHQnXG5cbnR5cGUgQWRkRXZlbnRGbiA9IChuYW1lOiBFdmVudFR5cGUsIGNiOiBGdW5jdGlvbikgPT4gdm9pZFxuXG50eXBlIERhdWRpb1N0eWxlID0gJ3JlY3QnIHwgJ2NpcmNsZSdcblxudHlwZSBEYXVkaW9FdmVudFR5cGUgPSB7XG4gIFtwcm9wcyBpbiBFdmVudFR5cGVdPzogRnVuY3Rpb25cbn1cblxudHlwZSBEYXVkaW9FdmVudFR5cGVRdWV1ZSA9IHtcbiAgW3Byb3BzIGluIEV2ZW50VHlwZV06IEFycmF5PEZ1bmN0aW9uPlxufSB8IG51bGxcblxuZXhwb3J0IGludGVyZmFjZSBJRGF1ZGlvUGFseUluZm8ge1xuICB1cmw6IHN0cmluZztcbiAgY292ZXJVcmw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkaXNjOiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIERhdWRpb1R5cGUgPSAnbGlzdCcgfCAnaGFuZGxlJ1xuXG5leHBvcnQgdHlwZSBEYXVkaW9QbGF5VHlwZSA9ICdzZXF1ZW50aWFsLXBsYXknIHwgJ3JhbmRvbS1wbGF5JyB8ICdsb29wLXBsYXknXG5cbmV4cG9ydCBpbnRlcmZhY2UgSURhdWRpb1Byb3BzIHtcbiAgc3R5bGU/OiBEYXVkaW9TdHlsZTtcbiAgdHlwZT86IERhdWRpb1R5cGU7XG4gIHBsYXlUeXBlPzogRGF1ZGlvUGxheVR5cGU7XG4gIHBsYXlMaXN0PzogQXJyYXk8SURhdWRpb1BhbHlJbmZvPjtcbiAgaGFuZGxlPzogRGF1ZGlvRXZlbnRUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEQXVkaW9SZWYge1xuICAvKipcbiAgICog5Yid5aeL5YyW77yM5pi+56S6YXVkaW/nu4Tku7ZcbiAgICovXG4gIHN0YXJ0OiAoKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDkuIvkuIDpppZcbiAgICovXG4gIG5leHQ6IChlOiBFdmVudCkgPT4gdm9pZDtcbiAgLy8gbmV4dDogKG5leHRBdWRpbzogSURhdWRpb1BhbHlJbmZvKSA9PiB2b2lkO1xuICBjdXQ6IChuZXh0QXVkaW86IElEYXVkaW9QYWx5SW5mbykgPT4gdm9pZDtcblxuICAvKipcbiAgICog5pKt5pS+XG4gICAqL1xuICBwbGF5OiAoKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDmmoLlgZxcbiAgICovXG4gIHBhdXNlOiAoKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDorr7nva5hdWRpb+eahOexu+Wei+OAguKtle+4j+i/mOaYr+aWueW9olxuICAgKi9cbiAgc2V0U3R5bGU6ICh0OiBEYXVkaW9TdHlsZSkgPT4gdm9pZDtcblxuICAvKipcbiAgICog6K6+572u5pKt5pS+5b2i5byPIOm7mOiupOaYr2hhbmRsZVxuICAgKi9cbiAgc2V0QXVkaW9UeXBlOiAodDogRGF1ZGlvVHlwZSkgPT4gdm9pZDtcblxuICAvKipcbiAgICog6K6+572u5pKt5pS+57G75Z6LXG4gICAqL1xuICBzZXRQbGF5VHlwZTogKHQ6IERhdWRpb1BsYXlUeXBlKSA9PiB2b2lkO1xuXG4gIC8qKlxuICAgKiDorr7nva7mkq3mlL7liJfooahcbiAgICovXG4gIHNldFBsYXlMaXN0OiAocGxheWxpc3Q6IEFycmF5PElEYXVkaW9QYWx5SW5mbz4pID0+IHZvaWQ7XG5cbiAgLyoqXG4gICAqIOiuvue9ruS6i+S7tuebkeWQrFxuICAgKi9cbiAgYWRkRXZlbnQ6IEFkZEV2ZW50Rm5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJREF1ZGlvIGV4dGVuZHMgSURBdWRpb1JlZiB7XG4gIGRlc3Ryb3k6ICgpID0+IHZvaWQ7XG59XG5cbmNvbnN0IERFRkFVTFRfUExBWV9JTkZPID0ge1xuICBuYW1lOiAnc3VubW1lcicsXG4gIGRpc2M6ICdob2xsbyBzdW5tbWVyJyxcbiAgdXJsOiAnaHR0cHM6Ly93d3cuZGFpd2VpLnNpdGUvc3RhdGljL211c2ljL2JhY2tncm91bmQubXAzJyxcbiAgY292ZXJVcmw6ICdodHRwczovL3d3dy5kYWl3ZWkuc2l0ZS9zdGF0aWMvbG9nby9zdW5tbWVyLmpwZydcbn1cblxuY29uc3QgRGF1ZGlvOiBSZWFjdC5Gb3J3YXJkUmVmUmVuZGVyRnVuY3Rpb248SURBdWRpb1JlZiwgSURhdWRpb1Byb3BzPiA9ICh7XG4gIHN0eWxlID0gJ2NpcmNsZScsXG4gIHR5cGUgPSAnaGFuZGxlJyxcbiAgcGxheVR5cGUgPSAnc2VxdWVudGlhbC1wbGF5JyxcbiAgcGxheUxpc3QgPSBbREVGQVVMVF9QTEFZX0lORk9dLFxuICBoYW5kbGVcbn0sIHJlZikgPT4ge1xuICBjb25zdCBbcGxheWluZywgc2V0UGxheWluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpXG4gIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGU8bnVtYmVyPigwKVxuICBjb25zdCBbYXVkaW9TdHlsZSwgc2V0QXVkaW9TdHlsZV0gPSB1c2VTdGF0ZTxEYXVkaW9TdHlsZT4oc3R5bGUpXG4gIGNvbnN0IFtwbGF5VHlwZVN0YXRlLCBzZXRQbGF5VHlwZVN0YXRlXSA9IHVzZVN0YXRlPERhdWRpb1BsYXlUeXBlPihwbGF5VHlwZSlcbiAgY29uc3QgW2F1ZGlvVHlwZVN0YXRlLCBzZXRBdWRpb1R5cGVTdGF0ZV0gPSB1c2VTdGF0ZTxEYXVkaW9UeXBlPih0eXBlKVxuICBjb25zdCBldmVudFF1ZXVlID0gdXNlUmVmPERhdWRpb0V2ZW50VHlwZVF1ZXVlPihudWxsKVxuXG4gIGNvbnN0IFtwbGF5SW5kZXgsIHNldFBsYXlJbmRleF0gPSB1c2VTdGF0ZTxudW1iZXI+KDApXG4gIGNvbnN0IFtwbGF5UXVldWUsIHNldFBsYXlRdWV1ZV0gPSB1c2VTdGF0ZTxBcnJheTxJRGF1ZGlvUGFseUluZm8+PihwbGF5TGlzdClcblxuICBjb25zdCBbbXV0ZWQsIHNldE11dGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KHRydWUpXG5cbiAgY29uc3QgYXVkaW9SZWYgPSB1c2VSZWY8SFRNTEF1ZGlvRWxlbWVudD4obnVsbClcblxuICBjb25zdCBpc0hhbmRsZSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBhdWRpb1R5cGVTdGF0ZSA9PT0gJ2hhbmRsZSdcbiAgfSwgW2F1ZGlvVHlwZVN0YXRlXSlcblxuICBjb25zdCBjdXJyZW50UGxheUxpc3QgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gYXVkaW9UeXBlU3RhdGUgPT09ICdoYW5kbGUnID8gcGxheVF1ZXVlWzBdIDogcGxheVF1ZXVlW3BsYXlJbmRleF1cbiAgfSwgW3BsYXlJbmRleCwgcGxheVF1ZXVlWzBdXSlcblxuICBjb25zdCBpc0xvb3AgPSB1c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gcGxheVR5cGVTdGF0ZSA9PT0gJ2xvb3AtcGxheSdcbiAgfSwgW3BsYXlUeXBlU3RhdGVdKVxuXG4gIGNvbnN0IGNoZWNrQXVkaW9UeXBlID0gKCkgPT4ge1xuICAgIGlmIChhdWRpb1N0eWxlID09PSAncmVjdCcpIHtcbiAgICAgIHNldEF1ZGlvU3R5bGUoKGF1ZGlvU3R5bGUpID0+IGF1ZGlvU3R5bGUgPSAnY2lyY2xlJylcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QXVkaW9TdHlsZSgoYXVkaW9TdHlsZSkgPT4gYXVkaW9TdHlsZSA9ICdyZWN0JylcbiAgICB9XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhdWRpb1JlZi5jdXJyZW50ICBhcyBhbnkpLmFkZEV2ZW50TGlzdGVuZXIoJ3RpbWV1cGRhdGUnLCBvbkF1ZGlvVGltZVVwZGF0ZSk7XG4gICAgaGFuZGxlICYmIGluaXRIYW5kbGUoaGFuZGxlKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIChhdWRpb1JlZi5jdXJyZW50IGFzIGFueSkucmVtb3ZlRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsIG9uQXVkaW9UaW1lVXBkYXRlKVxuICAgIH1cbiAgfSwgW10pXG5cbiAgY29uc3QgaW5pdEhhbmRsZSA9IChoYW5kbGU6IERhdWRpb0V2ZW50VHlwZSkgPT4ge1xuICAgIC8vIOazqOWGjOS6i+S7tlxuICAgIGNvbnN0IGhhbmRsZUtleXMgPSBoYW5kbGUgJiYgT2JqZWN0LmtleXMoaGFuZGxlKVxuICAgIGhhbmRsZUtleXMgJiYgKGhhbmRsZUtleXMgYXMgQXJyYXk8RXZlbnRUeXBlPikuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgYWRkRXZlbnQoaXRlbSwgaGFuZGxlICYmIGhhbmRsZVtpdGVtXSB8fCBmdW5jdGlvbigpe30pXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHNldFN0eWxlID0gKHQ6IERhdWRpb1N0eWxlKSA9PiB7XG4gICAgc2V0QXVkaW9TdHlsZSh0KVxuICB9XG5cbiAgY29uc3QgaGFuZGxlUGxheVBhdXNlID0gKGU6IGFueSkgPT4ge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBwbGF5aW5nID8gcGF1c2UoKSA6IHBsYXkoKVxuICB9XG5cbiAgY29uc3QgcGF1c2UgPSAoKSA9PiB7XG4gICAgYXVkaW9SZWYuY3VycmVudD8ucGF1c2UoKVxuICAgIHNldFBsYXlpbmcoZmFsc2UpXG4gIH1cblxuICBjb25zdCBwbGF5ID0gKCkgPT4ge1xuICAgIGF1ZGlvUmVmLmN1cnJlbnQ/LnBsYXkoKVxuICAgIHNldFBsYXlpbmcodHJ1ZSlcbiAgfVxuXG4gIGNvbnN0IG5leHQgPSAoZTogRXZlbnQpID0+IHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgLy8gc2V0SGFuZGxlTGlzdChhdWRpb0luZm8pXG4gICAgaWYgKGlzSGFuZGxlKSB7XG4gICAgICBjb25zb2xlLmxvZygnYnktaGFuZGxlJylcbiAgICAgIC8vIG5leHTkuovku7ZcbiAgICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IGV2ZW50UXVldWUuY3VycmVudFxuICAgICAgZXZlbnRIYW5kbGVyPy5vbk5leHQ/Lm1hcChpdGVtID0+IGl0ZW0uY2FsbChudWxsKSlcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjaGVja05leHRCeUxpc3QoKVxuICB9XG5cbiAgY29uc3Qgc2V0QXVkaW9UeXBlID0gKHQ6IERhdWRpb1R5cGUpID0+IHtcbiAgICBzZXRBdWRpb1R5cGVTdGF0ZSh0KVxuICB9XG5cbiAgY29uc3QgcGxheUJ5SW5kZXggPSAoaW5kZXg6IG51bWJlcikgPT4ge1xuICAgIHNldFBsYXlJbmRleChpbmRleClcbiAgICBwbGF5KClcbiAgfVxuXG4gIC8qKlxuICAgKiDliJfooajliIfmjaLkuIvkuIDpppZcbiAgICovXG4gIGNvbnN0IGNoZWNrTmV4dEJ5TGlzdCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnYnktbGlzdCcpXG4gICAgY29uc29sZS5sb2cocGxheVF1ZXVlKVxuICAgIGNvbnN0IGwgPSBwbGF5UXVldWUubGVuZ3RoXG4gICAgaWYgKGwgPT09IDEpIHtcbiAgICAgIGxvYWQoKVxuICAgICAgcGxheSgpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8g6ZqP5py6XG4gICAgaWYgKHBsYXlUeXBlID09PSAncmFuZG9tLXBsYXknKSB7XG4gICAgICBwbGF5QnlJbmRleCh+figoTWF0aC5yYW5kb20oKSAqIHBsYXlRdWV1ZS5sZW5ndGgpKSlcbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5YiX6KGoXG4gICAgICBjb25zb2xlLmxvZygncGxheUluZGV4cGxheUluZGV4JywgcGxheUluZGV4KVxuICAgICAgY29uc3QgaW5kZXggPSBwbGF5SW5kZXggPj0gbCAtIDEgPyAwIDogcGxheUluZGV4ICsgMVxuICAgICAgcGxheUJ5SW5kZXgoaW5kZXgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHR5cGUg5Li6IGhhbmRsZSDml7blj6/osIPnlKhcbiAgICogQHBhcmFtIG5leHRBdWRpbyDliIfmjaLkuIvkuIDpppYgXG4gICAqL1xuICBjb25zdCBjdXQgPSAobmV4dEF1ZGlvOiBJRGF1ZGlvUGFseUluZm8pID0+IHtcbiAgICBjb25zb2xlLmxvZyhpc0hhbmRsZSlcbiAgICBpZiAoIWlzSGFuZGxlKSB7XG4gICAgICB0aHJvdyBFcnJvcihgVGhlIOOAkGN1dOOAkSBtZXRob2QgY2FuIG9ubHkgYmUgZXhlY3V0ZWQgd2hlbiB0aGUgdHlwZSBpcyBoYW5kbGVgKVxuICAgIH1cbiAgICBsb2FkKClcbiAgICBzZXRQbGF5UXVldWUoW25leHRBdWRpb10pXG4gICAgcGxheSgpXG4gIH1cblxuICBjb25zdCBzZXRQbGF5TGlzdCA9IChsaXN0OiBBcnJheTxJRGF1ZGlvUGFseUluZm8+KSA9PiB7XG4gICAgc2V0UGxheVF1ZXVlKGxpc3QpXG4gIH1cblxuICBjb25zdCBzZXRQbGF5VHlwZSA9ICh0OiBEYXVkaW9QbGF5VHlwZSkgPT4ge1xuICAgIHNldFBsYXlUeXBlU3RhdGUodClcbiAgfVxuXG4gIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICB9XG5cbiAgY29uc3QgZW5kZWQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coZXZlbnRRdWV1ZSlcbiAgICBjb25zb2xlLmxvZygnZW5kZWQnKVxuICB9XG5cbiAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICBhdWRpb1JlZi5jdXJyZW50Py5sb2FkKClcbiAgfVxuXG4gIGNvbnN0IG9uQXVkaW9QbGF5ID0gKCkgPT4ge1xuICAgIGlmIChtdXRlZCkge1xuICAgICAgc2V0TXV0ZWQoZmFsc2UpXG4gICAgfVxuICAgIC8vIG90aGVyIGZuXG4gIH1cblxuICAvKipcbiAgICog5re75Yqg5LqL5Lu2XG4gICAqL1xuICBjb25zdCBhZGRFdmVudCA9IChuYW1lOiBFdmVudFR5cGUsIGZuOiBGdW5jdGlvbikgPT4ge1xuICAgIGxldCBvYmogPSB7fSBhcyBhbnlcbiAgICBjb25zdCBldmVudEhhbmRsZXIgPSBldmVudFF1ZXVlLmN1cnJlbnRcbiAgICBvYmpbbmFtZV0gPSBldmVudEhhbmRsZXIgJiYgZXZlbnRIYW5kbGVyW25hbWVdICYmIGV2ZW50SGFuZGxlcltuYW1lXS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgID8gKFsuLi5ldmVudEhhbmRsZXJbbmFtZV0sIGZuXSkgOiBbZm5dXG4gICAgZXZlbnRRdWV1ZS5jdXJyZW50ID0gT2JqZWN0LmFzc2lnbih7fSwgZXZlbnRIYW5kbGVyLCBvYmopXG4gIH1cblxuICBjb25zdCB7XG4gICAgdXJsLFxuICAgIGNvdmVyVXJsLFxuICAgIG5hbWUsXG4gICAgZGlzY1xuICB9ID0gY3VycmVudFBsYXlMaXN0XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQbGF5TGlzdClcblxuICBjb25zdCBtYWluQ2xhc3MgPSBjbHMoe1xuICAgIFtgZC1hdWRpb2BdOiB0cnVlLFxuICB9KVxuXG4gIGNvbnN0IGNsYXNzV3JhcHBlciA9IGNscyh7XG4gICAgW21haW5DbGFzc106IHRydWUsXG4gICAgW2F1ZGlvU3R5bGVdOiB0cnVlLFxuICAgIFtgc2hvd2BdOiB0cnVlXG4gIH0pXG5cbiAgY29uc3QgY2xhc3NDcmljbGUgPSBjbHMoe1xuICAgIFtgZC1hdWRpby1jaXJjbGVgXTogdHJ1ZVxuICB9KVxuXG4gIGNvbnN0IGNsYXNzUGxheVBhdXNlID0gY2xzKHtcbiAgICBbYGQtYXVkaW8tcGxheS1wYXVzZWBdOiB0cnVlLFxuICAgIC8vIFtgcGxheWBdOiBwbGF5aW5nLFxuICAgIC8vIFtgcGF1c2VgXTogIXBsYXlpbmdcbiAgfSlcblxuICBjb25zdCBjbGFzc0xvYWRpbmcgPSBjbHMoe1xuICAgIFtgZC1hdWRpby1sb2FkaW5nYF06IHRydWUsXG4gICAgW2BhY3RpdmVgXTogbG9hZGluZ1xuICB9KVxuXG4gIGNvbnN0IGJsdXJTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjb3ZlclVybH0pYCxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJ1xuICB9XG5cbiAgY29uc3QgcmFuZ2VTdHlsZSA9IHtcbiAgICBib3JkZXI6IGAzcHggc29saWQgcmVkYFxuICB9XG5cbiAgY29uc3QgcHJvZ3Jlc3NTdHlsZSA9IHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJlZCAzMCUsIGJsdWUpYCxcbiAgICB3aWR0aDogYCR7cHJvZ3Jlc3N9JWBcbiAgfVxuXG4gIGNvbnN0IG9uQXVkaW9UaW1lVXBkYXRlID0gdGhyb3R0bGUoKGU6IFJlYWN0LlN5bnRoZXRpY0V2ZW50PEhUTUxBdWRpb0VsZW1lbnQsIEV2ZW50PikgPT4ge1xuICAgIHNldFByb2dyZXNzKH5+KChhdWRpb1JlZi5jdXJyZW50Py5jdXJyZW50VGltZSB8fCAwKSAvIChhdWRpb1JlZi5jdXJyZW50Py5kdXJhdGlvbiB8fCAxKSAqIDEwMCkpXG4gIH0sIDEwMDApXG5cbiAgY29uc3QgcmVuZGVyQ3JpY2xlID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NDcmljbGV9XG4gICAgICAgICAgIHRpdGxlPXtgJHtuYW1lfSAtICR7ZGlzY31gfT5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9e2Ake2NsYXNzQ3JpY2xlfWB9IGNyb3NzT3JpZ2luID0gXCJhbm9ueW1vdXNcIiBzcmM9e2NvdmVyVXJsfS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc0NyaWNsZX0tcmFuZ2VgfSBzdHlsZT17cmFuZ2VTdHlsZX0+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICBzdGFydCxcbiAgICBuZXh0LFxuICAgIHBsYXksXG4gICAgcGF1c2UsXG4gICAgYWRkRXZlbnQsXG4gICAgc2V0U3R5bGUsXG4gICAgY3V0LFxuICAgIHNldEF1ZGlvVHlwZSxcbiAgICBzZXRQbGF5TGlzdCxcbiAgICBzZXRQbGF5VHlwZVxuICB9KSk7XG5cbiAgY29uc3QgcmVuZGVyUmVjdCA9ICgpID0+IChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7bWFpbkNsYXNzfS1kZXRhaWxgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake21haW5DbGFzc30tZGV0YWlsLWNvbmZpZ2B9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1BsYXlQYXVzZX0gb25DbGljaz17aGFuZGxlUGxheVBhdXNlfT5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcGxheWluZyA/IChcbiAgICAgICAgICAgICAgICA8UGF1c2VJY29uPjwvUGF1c2VJY29uPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxQbGF5SWNvbj48L1BsYXlJY29uPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWF1ZGlvLW5leHRcIj5cbiAgICAgICAgICAgIDxOZXh0SWNvbiBvbkNsaWNrPXtuZXh0fT48L05leHRJY29uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake21haW5DbGFzc30tZGV0YWlsLWluZm9gfT5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtgJHttYWluQ2xhc3N9LWRldGFpbC1pbmZvLW5hbWVgfSB0aXRsZT17bmFtZX0+e25hbWV9PC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7bWFpbkNsYXNzfS1kZXRhaWwtaW5mby1kaXNjYH0gdGl0bGU9e2Rpc2N9PntkaXNjfTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake21haW5DbGFzc30tYmx1ci1iZ2B9IHN0eWxlPXtibHVyU3R5bGV9PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTG9hZGluZ30+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7bWFpbkNsYXNzfS1wcm9ncmVzc2B9IHN0eWxlPXtwcm9ncmVzc1N0eWxlfT48L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NXcmFwcGVyfSBvbkNsaWNrPXtjaGVja0F1ZGlvVHlwZX0+XG4gICAgICB7IHJlbmRlckNyaWNsZSgpIH1cbiAgICAgIHsgcmVuZGVyUmVjdCgpIH1cbiAgICAgIDxhdWRpbyBjbGFzc05hbWU9e2Ake21haW5DbGFzc30tZWxlYH1cbiAgICAgICAgICAgICBzcmM9e3VybH1cbiAgICAgICAgICAgICByZWY9e2F1ZGlvUmVmfVxuICAgICAgICAgICAgIG11dGVkPXttdXRlZH1cbiAgICAgICAgICAgICBsb29wPXtpc0xvb3B9XG4gICAgICAgICAgICAgb25QbGF5PXtvbkF1ZGlvUGxheX1cbiAgICAgICAgICAgICBvbkVuZGVkPXtlbmRlZH0+PC9hdWRpbz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBEYXVkaW9cbmNvbnN0IEF1ZGlvQ29tcG9uZW50ID0gUmVhY3QuZm9yd2FyZFJlZihEYXVkaW8pXG5cbmZ1bmN0aW9uIEF1ZGlvSW5zdGFuY2UocHJvcHM6IEV4Y2x1ZGU8SURhdWRpb1Byb3BzLCAncGxheUluZm8nPik6IElEQXVkaW8ge1xuICBjb25zdCBBdWRpb1JlZiA9IFJlYWN0LmNyZWF0ZVJlZjxJREF1ZGlvUmVmPigpXG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG5cbiAgY29uc3QgYSA9IFJlYWN0RE9NLmNyZWF0ZVBvcnRhbCg8QXVkaW9Db21wb25lbnQgey4uLnByb3BzfSByZWY9e0F1ZGlvUmVmfT48L0F1ZGlvQ29tcG9uZW50PiwgZGl2KVxuICBjb25zb2xlLmxvZygnYScsIGEpXG4gIGNvbnNvbGUubG9nKCdBdWRpb1JlZi5jdXJyZW50JywgQXVkaW9SZWYuY3VycmVudClcbiAgXG4gIGNvbnN0IGRlc3Ryb3kgPSAoKSA9PiB7XG4gICAgY29uc3QgdW5tb3VudFJlc3VsdCA9IFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoZGl2KVxuICAgIHVubW91bnRSZXN1bHQgJiYgZGl2LnBhcmVudE5vZGU/LnJlbW92ZUNoaWxkKGRpdilcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uQXVkaW9SZWYuY3VycmVudCBhcyBJREF1ZGlvUmVmLFxuICAgIGRlc3Ryb3lcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpb0luc3RhbmNlXG4iLCJpbXBvcnQgQXVkaW9JbnN0YW5jZSwgeyBJRGF1ZGlvUHJvcHMsIElEQXVkaW8gfSBmcm9tICcuL2luZGV4J1xuXG5jb25zdCBpbnN0YW5jZVdyYXBwZXIgPSAocHJvcHM6IElEYXVkaW9Qcm9wcyk6IElEQXVkaW8gPT4gIHtcbiAgcmV0dXJuIEF1ZGlvSW5zdGFuY2UocHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1ZGlvSW5zdGFuY2VcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG52YXIgX3JlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTY1NS43MDYgNDY1LjYwM0wzMzIuMDU0IDIxOC41ODhjLTM4LjQxNS0yOS4zMjctOTMuNzkxLTEuOTI5LTkzLjc5MSA0Ni4zOTd2NDk0LjAyOWMwIDQ4LjMyNSA1NS4zNzYgNzUuNzI1IDkzLjc5IDQ2LjM5OGwzMjMuNjUzLTI0Ny4wMTVjMzAuNjAzLTIzLjM1OCAzMC42MDMtNjkuNDM2IDAtOTIuNzk0em0xMjUuMzU5IDMxNS4xOTVWMjg3LjEyMmMwLTE5LjYyOSA1LjkwNC02MC40NzYtMTcuMDU4LTc1Ljg0Mi0yNS41MjQtMTcuMDY4LTU5Ljc0OCAxLjIxLTU5Ljc0OCAzMS45MnY0OTMuNjc3YzAgMTkuNjI4LTUuOTE1IDYwLjQ3NCAxNy4wNDcgNzUuODQgMjUuNTMzIDE3LjA3IDU5Ljc1OS0xLjIxMSA1OS43NTktMzEuOTE5elwiXG59KTtcblxuZnVuY3Rpb24gU3ZnTmV4dChwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogXCJuZXh0X3N2Z19faWNvblwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDEwMjQgMTAyNFwiXG4gIH0sIHByb3BzKSwgX3JlZik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z05leHQ7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnZhciBfcmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNNTk3LjMzMyAyMTMuMzMzaDg1LjMzNFY3NjhoLTg1LjMzNFYyMTMuMzMzem0tMjU2IDBoODUuMzM0Vjc2OGgtODUuMzM0VjIxMy4zMzN6XCJcbn0pO1xuXG5mdW5jdGlvbiBTdmdQYXVzZShwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogXCJwYXVzZV9zdmdfX2ljb25cIixcbiAgICB2aWV3Qm94OiBcIjAgMCAxMDI0IDEwMjRcIixcbiAgICB3aWR0aDogMjAwLFxuICAgIGhlaWdodDogMjAwXG4gIH0sIHByb3BzKSwgX3JlZik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN2Z1BhdXNlOyIsImZ1bmN0aW9uIF9leHRlbmRzKCkgeyBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG52YXIgX3JlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gIGQ6IFwiTTkxNy44MTEgNDUwLjQwNkwxNjAuNTkgOC41NUMxNTEuMzczIDMuMTc0IDE0MS44MjQgMCAxMzAuOTQ0IDBjLTI5LjY3IDAtNTMuODYyIDI0LjAxMy01My44NjIgNTMuMzI1SDc2Ljh2OTE3LjM1aC4yNTZjMCAyOS4zMTIgMjQuMjQzIDUzLjMyNSA1My44ODggNTMuMzI1IDExLjE2MiAwIDIwLjQwMy0zLjczOCAzMC40NjQtOS4wNjJsNzU2LjQyOS00NDEuMzQ0QTc5LjMzNCA3OS4zMzQgMCAwMDk0Ny4yIDUxMmMwLTI0LjgwNi0xMS40MTgtNDYuNjY5LTI5LjM4OS02MS41OTR6XCJcbn0pO1xuXG5mdW5jdGlvbiBTdmdQbGF5KHByb3BzKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBcInBsYXlfc3ZnX19pY29uXCIsXG4gICAgdmlld0JveDogXCIwIDAgMTAyNCAxMDI0XCJcbiAgfSwgcHJvcHMpLCBfcmVmKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnUGxheTsiLCJleHBvcnQgZnVuY3Rpb24gdGhyb3R0bGUoZm46IEZ1bmN0aW9uLCB0OiBudW1iZXIgPSAxMDAwKSB7XG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybjtcbiAgfVxuICBsZXQgdGltZTogYW55ID0gbnVsbDtcbiAgbGV0IGZpcnN0ID0gdHJ1ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGlzOiBhbnkpIHtcbiAgICBsZXQgYXJnID0gYXJndW1lbnRzO1xuICAgIGlmIChmaXJzdCkge1xuICAgICAgZm4uYXBwbHkodGhpcywgYXJnKTtcbiAgICAgIGZpcnN0ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aW1lKVxuICAgICAgcmV0dXJuO1xuICAgIHRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQodGltZSk7XG4gICAgICB0aW1lID0gbnVsbDtcbiAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZyk7XG4gICAgfSwgdCk7XG4gIH07XG59IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNscyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IGh0dHAgZnJvbSAnQHV0aWxzL3JlcSdcbmltcG9ydCB7IE1VU0lDX0RFVEFJTCwgTVVTSUNfUExBWV9ERVRBSUwgfSBmcm9tICdAY29uc3RhbmNlL2FwaSdcbmltcG9ydCAnLi9tdXNpYy5sZXNzJ1xuaW1wb3J0IGxvYWRhYmxlIGZyb20gJ0Bsb2FkYWJsZS9jb21wb25lbnQnXG5pbXBvcnQge1xuICBhcnRpc3RzLCBNdXNpY0dyb3VwTGlzdFxufSBmcm9tICcuL3R5cGVzJ1xuaW1wb3J0IHsgSURBdWRpbyB9IGZyb20gJy4uL0F1ZGlvJ1xuLy8gY29uc3QgYXVkaW9JbnN0YW5jZSA9IHJlcXVpcmUoJ0Bjb21wb25lbnRzL0F1ZGlvL21haW4nKS5kZWZhdWx0XG5pbXBvcnQgYXVkaW9JbnN0YW5jZSBmcm9tICdAY29tcG9uZW50cy9BdWRpby9tYWluJ1xuXG5sZXQgYXVkaVJlZjogSURBdWRpb1xuY29uc3QgUmlwcGxlID0gbG9hZGFibGUoKCkgPT4gaW1wb3J0KCdyaXBwbGUtYnV0dG9uJykpXG5cbmNvbnN0IE11c2ljID0gKCkgPT4ge1xuICBjb25zdCBbdHJhY2tzTGlzdHMsIHNldFRyYWNrc0xpc3RzXSA9IHVzZVN0YXRlPGFueT4oW10pXG4gIGNvbnN0IGNsYXNzU3RyaW5nID0gY2xzKCdtdXNpYy1zaWRlci13cmFwcGVyJylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldE11c2ljKDIxNzkzNzc3OTgpXG5cbiAgICBhdWRpUmVmID0gYXVkaW9JbnN0YW5jZSh7XG4gICAgICBoYW5kbGU6IHtcbiAgICAgICAgb25OZXh0OiAoKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ25leHQnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZygnYXVkaVJlZicsIGF1ZGlSZWYpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGdldE11c2ljID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwLmdldChgJHtNVVNJQ19ERVRBSUx9P2lkPSR7aWR9YClcbiAgICBjb25zdCB7IHBsYXlsaXN0OiB7IHRyYWNrcyB9IH0gPSByZXMuZGF0YVxuICAgIHNldFRyYWNrc0xpc3RzKHRyYWNrcylcbiAgfVxuXG4gIGNvbnN0IGNoZWNrTXVzaWMgPSBhc3luYyAoaXRlbTogTXVzaWNHcm91cExpc3QpID0+IHtcbiAgICBjb25zdCB7IGRhdGE6IHsgc29uZ3MgOiBtdXNpY0RldGFpbCB9IH0gPSBhd2FpdCBnZXRNdXNpY0RldGFpbEJ5SWQoaXRlbS5pZClcbiAgICBjb25zb2xlLmxvZygnc29uZ3MnLCBtdXNpY0RldGFpbClcbiAgICBjb25zdCBmb3JtYXREZXRhaWw6IGFueSA9IGZvcm1hdE11c2ljTGlzdHMobXVzaWNEZXRhaWwpXG4gICAgY29uc29sZS5sb2coJ2Zvcm1hdERldGFpbCcsIGZvcm1hdERldGFpbClcbiAgICBjb25zdCBzdCA9IHtcbiAgICAgIHVybDogZ2V0VXJsQnlJZChpdGVtLmlkKSxcbiAgICAgIGNvdmVyVXJsOiBjbGlwSW1hZ2UoZm9ybWF0RGV0YWlsWzBdLmFsYnVtLnBpY1VybCksXG4gICAgICBuYW1lOiBpdGVtLm5hbWUsXG4gICAgICBkaXNjOiBmb3JtYXRNdXNpY0FydGlzdHMoZm9ybWF0RGV0YWlsWzBdLmFydGlzdHMpXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdhdWRpUmVmYXVkaVJlZmF1ZGlSZWYnLCBhdWRpUmVmKVxuICAgIGF1ZGlSZWYgJiYgYXVkaVJlZi5jdXQoc3QpXG4gIH1cblxuICBjb25zdCBjbGlwSW1hZ2UgPSAoc3JjOiBzdHJpbmcsIHc6IG51bWJlciA9IDEyMCwgaD86IG51bWJlcik6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIGAke3NyY30/cGFyYW09JHt3fXkke2ggPyBoIDogd31gXG4gIH1cblxuICBjb25zdCBmb3JtYXRNdXNpY0xpc3RzID0gKGxpc3RzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdsaXN0cycsIGxpc3RzKVxuICAgIHJldHVybiBsaXN0cy5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgICAgaXRlbS5hbGJ1bSA9IGl0ZW0uYWxcbiAgICAgIGl0ZW0uYXJ0aXN0cyA9IGl0ZW0uYXJcbiAgICAgIGl0ZW0uZHVyYXRpb24gPSBpdGVtLmR0XG4gICAgICByZXR1cm4gaXRlbVxuICAgIH0pXG4gIH1cblxuICBjb25zdCBnZXRNdXNpY0RldGFpbEJ5SWQgPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBodHRwLmdldChgJHtNVVNJQ19QTEFZX0RFVEFJTH0/aWRzPSR7aWR9YCkgYXMgYW55XG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIGNvbnN0IGZvcm1hdE11c2ljQXJ0aXN0cyA9IChhcnRpc3RzOiBhcnRpc3RzKSA9PiB7XG4gICAgcmV0dXJuIGFydGlzdHMubWFwKChhcnRpc3QpID0+IGFydGlzdC5uYW1lKS5qb2luKCcsICcpXG4gIH1cblxuICBjb25zdCBnZXRVcmxCeUlkID0gKGlkOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gYC8vbXVzaWMuMTYzLmNvbS9zb25nL21lZGlhL291dGVyL3VybD9pZD0ke2lkfS5tcDNgXG4gIH0gIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU3RyaW5nfT5cbiAgICAgIDxwIGNsYXNzTmFtZT17YCR7Y2xhc3NTdHJpbmd9LXRpdGxlYH0+6Z+z5LmQPC9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzU3RyaW5nfS1jb250ZW50YH0+XG4gICAgICAgIHtcbiAgICAgICAgICB0cmFja3NMaXN0cyAmJiB0cmFja3NMaXN0cy5tYXAoKGl0ZW06IE11c2ljR3JvdXBMaXN0LCBpbmRleDogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICA8UmlwcGxlIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPSdyZ2JhKDk5LCA5OSwgOTksIDAuMyknXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NoZWNrTXVzaWMuYmluZChudWxsLCBpdGVtKX0+XG4gICAgICAgICAgICAgIDxsaT57aXRlbS5uYW1lfTwvbGk+XG4gICAgICAgICAgICA8L1JpcHBsZT5cbiAgICAgICAgICApKVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNdXNpY1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlSW1wZXJhdGl2ZUhhbmRsZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7IFBST0pFQ1RfTkFNRSB9IGZyb20gJ0Bjb25zdGFuY2UvaW5kZXgnXG5pbXBvcnQgJy4vc2lkZXItd2FycC5sZXNzJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51LnN2ZydcblxuaW50ZXJmYWNlIElTaWRlcldhcnBQcm9wcyB7XG4gIHNob3c6IGJvb2xlYW47XG4gIHR5cGU6IFNpZGVyVHlwZTtcbiAgaGlkZUZuPzogKCkgPT4gdm9pZDtcbiAgc2hvd0ZuPzogKCkgPT4gdm9pZDtcbn1cblxuaW50ZXJmYWNlIElTaWRlcldyYXBSZWYge1xuICBzaG93Q29tcDogKCkgPT4gdm9pZDtcbiAgaGlkZUNvbXA6ICgpID0+IHZvaWQ7XG59XG5cbnR5cGUgU2lkZXJUeXBlID0gJ2ZpeGVkJyB8ICdhdXRvJ1xuXG5jb25zdCBTaWRlcldhcnA6IFJlYWN0LkZvcndhcmRSZWZSZW5kZXJGdW5jdGlvbjxJU2lkZXJXcmFwUmVmLCBJU2lkZXJXYXJwUHJvcHM+ID0gKHByb3BzLCByZWYpID0+IHtcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGU8Ym9vbGVhbj4ocHJvcHMuc2hvdylcblxuICBjb25zdCBjbGFzc1N0cmluZyA9IGNsYXNzTmFtZXMoe1xuICAgIFtgJHtQUk9KRUNUX05BTUV9LWNvbXAtc2lkZXItd2FycGBdOiB0cnVlLFxuICAgIFtgc2hvd2BdOiBzaG93LFxuICAgIFtgJHtwcm9wcy50eXBlfWBdOiB0cnVlXG4gIH0pXG5cbiAgY29uc3QgaGlkZUNvbXAgPSAoKSA9PiB7XG4gICAgc2V0U2hvdygoc2hvdykgPT4gc2hvdyA9IGZhbHNlKVxuICAgIHByb3BzLmhpZGVGbiAmJiBwcm9wcy5oaWRlRm4oKVxuICB9XG5cbiAgY29uc3Qgc2hvd0NvbXAgPSAoKSA9PiB7XG4gICAgc2V0U2hvdygoc2hvdykgPT4gc2hvdyA9IHRydWUpXG4gICAgcHJvcHMuc2hvd0ZuICYmIHByb3BzLnNob3dGbigpXG4gIH1cblxuICBjb25zdCB0b2dnbGVTaWRlcldhcnAgPSAoKSA9PiB7XG4gICAgc2hvdyA/IHByb3BzLmhpZGVGbiAmJiBwcm9wcy5oaWRlRm4oKSA6IHByb3BzLnNob3dGbiAmJiBwcm9wcy5zaG93Rm4oKVxuICAgIHNldFNob3coKHNob3cpID0+IHNob3cgPSAhc2hvdylcbiAgfVxuXG4gIGNvbnN0IG1hcFJlZiA9IHVzZVJlZihudWxsKVxuXG4gIHVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCAoKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dDb21wLFxuICAgICAgaGlkZUNvbXBcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2NsYXNzU3RyaW5nfSByZWY9e21hcFJlZn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFzaycgb25DbGljaz17aGlkZUNvbXB9PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtc3dpdGNoXCIgb25DbGljaz17dG9nZ2xlU2lkZXJXYXJwfT5cbiAgICAgICAgICA8TWVudSBjbGFzc05hbWU9J21lbXUnPjwvTWVudT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyJz5cbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApXG59XG5cbmNvbnN0IFNpZGVyV2FycENvbXBvbmVudCA9IFJlYWN0LmZvcndhcmRSZWYoU2lkZXJXYXJwKVxuXG5leHBvcnQgZGVmYXVsdCBTaWRlcldhcnBDb21wb25lbnQgYXMgYW55IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbnZhciBfcmVmID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNNTEuMiA1Ni4zMmg5MjEuNmMyOC4yNzggMCA1MS4yIDIyLjkyMiA1MS4yIDUxLjJzLTIyLjkyMiA1MS4yLTUxLjIgNTEuMkg1MS4yYy0yOC4yNzggMC01MS4yLTIyLjkyMi01MS4yLTUxLjJzMjIuOTIyLTUxLjIgNTEuMi01MS4yem0wIDM5OS4zNmg5MjEuNmMyOC4yNzggMCA1MS4yIDIyLjkyMiA1MS4yIDUxLjJzLTIyLjkyMiA1MS4yLTUxLjIgNTEuMkg1MS4yYy0yOC4yNzggMC01MS4yLTIyLjkyMi01MS4yLTUxLjJzMjIuOTIyLTUxLjIgNTEuMi01MS4yem0wIDM5OS4zNmg5MjEuNmMyOC4yNzggMCA1MS4yIDIyLjkyMiA1MS4yIDUxLjJzLTIyLjkyMiA1MS4yLTUxLjIgNTEuMkg1MS4yYy0yOC4yNzggMC01MS4yLTIyLjkyMi01MS4yLTUxLjJzMjIuOTIyLTUxLjIgNTEuMi01MS4yelwiXG59KTtcblxuZnVuY3Rpb24gU3ZnTWVudShwcm9wcykge1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzdmdcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogXCJtZW51X3N2Z19faWNvblwiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDEwMjQgMTAyNFwiLFxuICAgIHdpZHRoOiAyMDAsXG4gICAgaGVpZ2h0OiAyMDBcbiAgfSwgcHJvcHMpLCBfcmVmKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ZnTWVudTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgYXJyMltpXSA9IGFycltpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyMjtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGl0ZXIpID09PSBcIltvYmplY3QgQXJndW1lbnRzXVwiKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZVwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkJztcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCBob2lzdE5vblJlYWN0U3RhdGljcyBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKGNvbmRpdGlvbikgcmV0dXJuO1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IoXCJsb2FkYWJsZTogXCIgKyBtZXNzYWdlKTtcbiAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxO1xuICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICB0aHJvdyBlcnJvcjtcbn1cbmZ1bmN0aW9uIHdhcm4obWVzc2FnZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLndhcm4oXCJsb2FkYWJsZTogXCIgKyBtZXNzYWdlKTtcbn1cblxudmFyIENvbnRleHQgPSAvKiNfX1BVUkVfXyovXG5SZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5cbnZhciBMT0FEQUJMRV9SRVFVSVJFRF9DSFVOS1NfS0VZID0gJ19fTE9BREFCTEVfUkVRVUlSRURfQ0hVTktTX18nO1xuZnVuY3Rpb24gZ2V0UmVxdWlyZWRDaHVua0tleShuYW1lc3BhY2UpIHtcbiAgcmV0dXJuIFwiXCIgKyBuYW1lc3BhY2UgKyBMT0FEQUJMRV9SRVFVSVJFRF9DSFVOS1NfS0VZO1xufVxuXG52YXIgc2hhcmVkSW50ZXJuYWxzID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIGdldFJlcXVpcmVkQ2h1bmtLZXk6IGdldFJlcXVpcmVkQ2h1bmtLZXksXG4gIGludmFyaWFudDogaW52YXJpYW50LFxuICBDb250ZXh0OiBDb250ZXh0XG59KTtcblxuZnVuY3Rpb24gcmVzb2x2ZUNvbnN0cnVjdG9yKGN0b3IpIHtcbiAgaWYgKHR5cGVvZiBjdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlcXVpcmVBc3luYzogY3RvclxuICAgIH07XG4gIH1cblxuICByZXR1cm4gY3Rvcjtcbn1cblxudmFyIHdpdGhDaHVua0V4dHJhY3RvciA9IGZ1bmN0aW9uIHdpdGhDaHVua0V4dHJhY3RvcihDb21wb25lbnQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChleHRyYWN0b3IpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIF9fY2h1bmtFeHRyYWN0b3I6IGV4dHJhY3RvclxuICAgICAgfSwgcHJvcHMpKTtcbiAgICB9KTtcbiAgfTtcbn07XG5cbnZhciBpZGVudGl0eSA9IGZ1bmN0aW9uIGlkZW50aXR5KHYpIHtcbiAgcmV0dXJuIHY7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVMb2FkYWJsZShfcmVmKSB7XG4gIHZhciBfcmVmJHJlc29sdmUgPSBfcmVmLnJlc29sdmUsXG4gICAgICByZXNvbHZlID0gX3JlZiRyZXNvbHZlID09PSB2b2lkIDAgPyBpZGVudGl0eSA6IF9yZWYkcmVzb2x2ZSxcbiAgICAgIF9yZW5kZXIgPSBfcmVmLnJlbmRlcixcbiAgICAgIG9uTG9hZCA9IF9yZWYub25Mb2FkO1xuXG4gIGZ1bmN0aW9uIGxvYWRhYmxlKGxvYWRhYmxlQ29uc3RydWN0b3IsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdmFyIGN0b3IgPSByZXNvbHZlQ29uc3RydWN0b3IobG9hZGFibGVDb25zdHJ1Y3Rvcik7XG4gICAgdmFyIGNhY2hlID0ge307XG5cbiAgICBmdW5jdGlvbiBfZ2V0Q2FjaGVLZXkocHJvcHMpIHtcbiAgICAgIGlmIChvcHRpb25zLmNhY2hlS2V5KSB7XG4gICAgICAgIHJldHVybiBvcHRpb25zLmNhY2hlS2V5KHByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGN0b3IucmVzb2x2ZSkge1xuICAgICAgICByZXR1cm4gY3Rvci5yZXNvbHZlKHByb3BzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIElubmVyTG9hZGFibGUgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzTG9vc2UoSW5uZXJMb2FkYWJsZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgICAgIElubmVyTG9hZGFibGUuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzID0gZnVuY3Rpb24gZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKHByb3BzLCBzdGF0ZSkge1xuICAgICAgICB2YXIgY2FjaGVLZXkgPSBfZ2V0Q2FjaGVLZXkocHJvcHMpO1xuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBjYWNoZUtleTogY2FjaGVLZXksXG4gICAgICAgICAgbG9hZGluZzogc3RhdGUubG9hZGluZyB8fCBzdGF0ZS5jYWNoZUtleSAhPT0gY2FjaGVLZXlcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBmdW5jdGlvbiBJbm5lckxvYWRhYmxlKHByb3BzKSB7XG4gICAgICAgIHZhciBfdGhpcztcblxuICAgICAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgcmVzdWx0OiBudWxsLFxuICAgICAgICAgIGVycm9yOiBudWxsLFxuICAgICAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgICAgICAgY2FjaGVLZXk6IF9nZXRDYWNoZUtleShwcm9wcylcbiAgICAgICAgfTtcbiAgICAgICAgX3RoaXMucHJvbWlzZSA9IG51bGw7XG4gICAgICAgIGludmFyaWFudCghcHJvcHMuX19jaHVua0V4dHJhY3RvciB8fCBjdG9yLnJlcXVpcmVTeW5jLCAnU1NSIHJlcXVpcmVzIGBAbG9hZGFibGUvYmFiZWwtcGx1Z2luYCwgcGxlYXNlIGluc3RhbGwgaXQnKTsgLy8gU2VydmVyLXNpZGVcblxuICAgICAgICBpZiAocHJvcHMuX19jaHVua0V4dHJhY3Rvcikge1xuICAgICAgICAgIC8vIFRoaXMgbW9kdWxlIGhhcyBiZWVuIG1hcmtlZCB3aXRoIG5vIFNTUlxuICAgICAgICAgIGlmIChvcHRpb25zLnNzciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKTtcbiAgICAgICAgICB9IC8vIFdlIHJ1biBsb2FkIGZ1bmN0aW9uLCB3ZSBhc3N1bWUgdGhhdCBpdCB3b24ndCBmYWlsIGFuZCB0aGF0IGl0XG4gICAgICAgICAgLy8gdHJpZ2dlcnMgYSBzeW5jaHJvbm91cyBsb2FkaW5nIG9mIHRoZSBtb2R1bGVcblxuXG4gICAgICAgICAgY3Rvci5yZXF1aXJlQXN5bmMocHJvcHMpW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKCkge30pOyAvLyBTbyB3ZSBjYW4gcmVxdWlyZSBub3cgdGhlIG1vZHVsZSBzeW5jaHJvbm91c2x5XG5cbiAgICAgICAgICBfdGhpcy5sb2FkU3luYygpO1xuXG4gICAgICAgICAgcHJvcHMuX19jaHVua0V4dHJhY3Rvci5hZGRDaHVuayhjdG9yLmNodW5rTmFtZShwcm9wcykpO1xuXG4gICAgICAgICAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpO1xuICAgICAgICB9IC8vIENsaWVudC1zaWRlIHdpdGggYGlzUmVhZHlgIG1ldGhvZCBwcmVzZW50IChTU1IgcHJvYmFibHkpXG4gICAgICAgIC8vIElmIG1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZCwgd2UgdXNlIGEgc3luY2hyb25vdXMgbG9hZGluZ1xuICAgICAgICAvLyBPbmx5IHBlcmZvcm0gdGhpcyBzeW5jaHJvbm91cyBsb2FkaW5nIGlmIHRoZSBjb21wb25lbnQgaGFzIG5vdFxuICAgICAgICAvLyBiZWVuIG1hcmtlZCB3aXRoIG5vIFNTUiwgZWxzZSB3ZSByaXNrIGh5ZHJhdGlvbiBtaXNtYXRjaGVzXG5cblxuICAgICAgICBpZiAob3B0aW9ucy5zc3IgIT09IGZhbHNlICYmIGN0b3IuaXNSZWFkeSAmJiBjdG9yLmlzUmVhZHkocHJvcHMpKSB7XG4gICAgICAgICAgX3RoaXMubG9hZFN5bmMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIF9wcm90byA9IElubmVyTG9hZGFibGUucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5tb3VudGVkID0gdHJ1ZTtcblxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2FkaW5nKSB7XG4gICAgICAgICAgdGhpcy5sb2FkQXN5bmMoKTtcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zdGF0ZS5lcnJvcikge1xuICAgICAgICAgIHRoaXMudHJpZ2dlck9uTG9hZCgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIC8vIENvbXBvbmVudCBpcyByZWxvYWRlZCBpZiB0aGUgY2FjaGVLZXkgaGFzIGNoYW5nZWRcbiAgICAgICAgaWYgKHByZXZTdGF0ZS5jYWNoZUtleSAhPT0gdGhpcy5zdGF0ZS5jYWNoZUtleSkge1xuICAgICAgICAgIHRoaXMucHJvbWlzZSA9IG51bGw7XG4gICAgICAgICAgdGhpcy5sb2FkQXN5bmMoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMubW91bnRlZCA9IGZhbHNlO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnNhZmVTZXRTdGF0ZSA9IGZ1bmN0aW9uIHNhZmVTZXRTdGF0ZShuZXh0U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLm1vdW50ZWQpIHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKG5leHRTdGF0ZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8udHJpZ2dlck9uTG9hZCA9IGZ1bmN0aW9uIHRyaWdnZXJPbkxvYWQoKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvbkxvYWQpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG9uTG9hZChfdGhpczIuc3RhdGUucmVzdWx0LCBfdGhpczIucHJvcHMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8ubG9hZFN5bmMgPSBmdW5jdGlvbiBsb2FkU3luYygpIHtcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmxvYWRpbmcpIHJldHVybjtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBsb2FkZWRNb2R1bGUgPSBjdG9yLnJlcXVpcmVTeW5jKHRoaXMucHJvcHMpO1xuICAgICAgICAgIHZhciByZXN1bHQgPSByZXNvbHZlKGxvYWRlZE1vZHVsZSwge1xuICAgICAgICAgICAgTG9hZGFibGU6IExvYWRhYmxlXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5lcnJvciA9IGVycm9yO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uZ2V0Q2FjaGVLZXkgPSBmdW5jdGlvbiBnZXRDYWNoZUtleSgpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRDYWNoZUtleSh0aGlzLnByb3BzKSB8fCBKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5nZXRDYWNoZSA9IGZ1bmN0aW9uIGdldENhY2hlKCkge1xuICAgICAgICByZXR1cm4gY2FjaGVbdGhpcy5nZXRDYWNoZUtleSgpXTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5zZXRDYWNoZSA9IGZ1bmN0aW9uIHNldENhY2hlKHZhbHVlKSB7XG4gICAgICAgIGNhY2hlW3RoaXMuZ2V0Q2FjaGVLZXkoKV0gPSB2YWx1ZTtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5sb2FkQXN5bmMgPSBmdW5jdGlvbiBsb2FkQXN5bmMoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIGlmICghdGhpcy5wcm9taXNlKSB7XG4gICAgICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgICAgX19jaHVua0V4dHJhY3RvciA9IF90aGlzJHByb3BzLl9fY2h1bmtFeHRyYWN0b3IsXG4gICAgICAgICAgICAgIGZvcndhcmRlZFJlZiA9IF90aGlzJHByb3BzLmZvcndhcmRlZFJlZixcbiAgICAgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiX19jaHVua0V4dHJhY3RvclwiLCBcImZvcndhcmRlZFJlZlwiXSk7XG5cbiAgICAgICAgICB0aGlzLnByb21pc2UgPSBjdG9yLnJlcXVpcmVBc3luYyhwcm9wcykudGhlbihmdW5jdGlvbiAobG9hZGVkTW9kdWxlKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gcmVzb2x2ZShsb2FkZWRNb2R1bGUsIHtcbiAgICAgICAgICAgICAgTG9hZGFibGU6IExvYWRhYmxlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc3VzcGVuc2UpIHtcbiAgICAgICAgICAgICAgX3RoaXMzLnNldENhY2hlKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzMy5zYWZlU2V0U3RhdGUoe1xuICAgICAgICAgICAgICByZXN1bHQ6IHJlc29sdmUobG9hZGVkTW9kdWxlLCB7XG4gICAgICAgICAgICAgICAgTG9hZGFibGU6IExvYWRhYmxlXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMzLnRyaWdnZXJPbkxvYWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBfdGhpczMuc2FmZVNldFN0YXRlKHtcbiAgICAgICAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBmb3J3YXJkZWRSZWYgPSBfdGhpcyRwcm9wczIuZm9yd2FyZGVkUmVmLFxuICAgICAgICAgICAgcHJvcEZhbGxiYWNrID0gX3RoaXMkcHJvcHMyLmZhbGxiYWNrLFxuICAgICAgICAgICAgX19jaHVua0V4dHJhY3RvciA9IF90aGlzJHByb3BzMi5fX2NodW5rRXh0cmFjdG9yLFxuICAgICAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wczIsIFtcImZvcndhcmRlZFJlZlwiLCBcImZhbGxiYWNrXCIsIFwiX19jaHVua0V4dHJhY3RvclwiXSk7XG5cbiAgICAgICAgdmFyIF90aGlzJHN0YXRlID0gdGhpcy5zdGF0ZSxcbiAgICAgICAgICAgIGVycm9yID0gX3RoaXMkc3RhdGUuZXJyb3IsXG4gICAgICAgICAgICBsb2FkaW5nID0gX3RoaXMkc3RhdGUubG9hZGluZyxcbiAgICAgICAgICAgIHJlc3VsdCA9IF90aGlzJHN0YXRlLnJlc3VsdDtcblxuICAgICAgICBpZiAob3B0aW9ucy5zdXNwZW5zZSkge1xuICAgICAgICAgIHZhciBjYWNoZWRSZXN1bHQgPSB0aGlzLmdldENhY2hlKCk7XG4gICAgICAgICAgaWYgKCFjYWNoZWRSZXN1bHQpIHRocm93IHRoaXMubG9hZEFzeW5jKCk7XG4gICAgICAgICAgcmV0dXJuIF9yZW5kZXIoe1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBmYWxsYmFjazogbnVsbCxcbiAgICAgICAgICAgIHJlc3VsdDogY2FjaGVkUmVzdWx0LFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICAgIHByb3BzOiBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgICAgICAgcmVmOiBmb3J3YXJkZWRSZWZcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmYWxsYmFjayA9IHByb3BGYWxsYmFjayB8fCBvcHRpb25zLmZhbGxiYWNrIHx8IG51bGw7XG5cbiAgICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgICByZXR1cm4gZmFsbGJhY2s7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3JlbmRlcih7XG4gICAgICAgICAgbG9hZGluZzogbG9hZGluZyxcbiAgICAgICAgICBmYWxsYmFjazogZmFsbGJhY2ssXG4gICAgICAgICAgcmVzdWx0OiByZXN1bHQsXG4gICAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICBwcm9wczogX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgICAgICByZWY6IGZvcndhcmRlZFJlZlxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIElubmVyTG9hZGFibGU7XG4gICAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gICAgdmFyIEVuaGFuY2VkSW5uZXJMb2FkYWJsZSA9IHdpdGhDaHVua0V4dHJhY3RvcihJbm5lckxvYWRhYmxlKTtcbiAgICB2YXIgTG9hZGFibGUgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChFbmhhbmNlZElubmVyTG9hZGFibGUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBmb3J3YXJkZWRSZWY6IHJlZlxuICAgICAgfSwgcHJvcHMpKTtcbiAgICB9KTsgLy8gSW4gZnV0dXJlLCBwcmVsb2FkIGNvdWxkIHVzZSBgPGxpbmsgcmVsPVwicHJlbG9hZFwiPmBcblxuICAgIExvYWRhYmxlLnByZWxvYWQgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIGN0b3IucmVxdWlyZUFzeW5jKHByb3BzKTtcbiAgICB9O1xuXG4gICAgTG9hZGFibGUubG9hZCA9IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgcmV0dXJuIGN0b3IucmVxdWlyZUFzeW5jKHByb3BzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIExvYWRhYmxlO1xuICB9XG5cbiAgZnVuY3Rpb24gbGF6eShjdG9yLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGxvYWRhYmxlKGN0b3IsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBzdXNwZW5zZTogdHJ1ZVxuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbG9hZGFibGU6IGxvYWRhYmxlLFxuICAgIGxhenk6IGxhenlcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUNvbXBvbmVudChsb2FkZWRNb2R1bGUsIF9yZWYpIHtcbiAgdmFyIExvYWRhYmxlID0gX3JlZi5Mb2FkYWJsZTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlXG4gIHZhciBDb21wb25lbnQgPSBsb2FkZWRNb2R1bGUuX19lc01vZHVsZSA/IGxvYWRlZE1vZHVsZVtcImRlZmF1bHRcIl0gOiBsb2FkZWRNb2R1bGVbXCJkZWZhdWx0XCJdIHx8IGxvYWRlZE1vZHVsZTtcbiAgaG9pc3ROb25SZWFjdFN0YXRpY3MoTG9hZGFibGUsIENvbXBvbmVudCwge1xuICAgIHByZWxvYWQ6IHRydWVcbiAgfSk7XG4gIHJldHVybiBDb21wb25lbnQ7XG59XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lLCByZWFjdC9uby1tdWx0aS1jb21wICovXG5cbnZhciBfY3JlYXRlTG9hZGFibGUgPVxuLyojX19QVVJFX18qL1xuY3JlYXRlTG9hZGFibGUoe1xuICByZXNvbHZlOiByZXNvbHZlQ29tcG9uZW50LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcihfcmVmKSB7XG4gICAgdmFyIENvbXBvbmVudCA9IF9yZWYucmVzdWx0LFxuICAgICAgICBwcm9wcyA9IF9yZWYucHJvcHM7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBwcm9wcyk7XG4gIH1cbn0pLFxuICAgIGxvYWRhYmxlID0gX2NyZWF0ZUxvYWRhYmxlLmxvYWRhYmxlLFxuICAgIGxhenkgPSBfY3JlYXRlTG9hZGFibGUubGF6eTtcblxuLyogZXNsaW50LWRpc2FibGUgbm8tdXNlLWJlZm9yZS1kZWZpbmUsIHJlYWN0L25vLW11bHRpLWNvbXAgKi9cblxudmFyIF9jcmVhdGVMb2FkYWJsZSQxID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZUxvYWRhYmxlKHtcbiAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQocmVzdWx0LCBwcm9wcykge1xuICAgIGlmIChyZXN1bHQgJiYgcHJvcHMuZm9yd2FyZGVkUmVmKSB7XG4gICAgICBpZiAodHlwZW9mIHByb3BzLmZvcndhcmRlZFJlZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcm9wcy5mb3J3YXJkZWRSZWYocmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzLmZvcndhcmRlZFJlZi5jdXJyZW50ID0gcmVzdWx0O1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoX3JlZikge1xuICAgIHZhciByZXN1bHQgPSBfcmVmLnJlc3VsdCxcbiAgICAgICAgbG9hZGluZyA9IF9yZWYubG9hZGluZyxcbiAgICAgICAgcHJvcHMgPSBfcmVmLnByb3BzO1xuXG4gICAgaWYgKCFsb2FkaW5nICYmIHByb3BzLmNoaWxkcmVuKSB7XG4gICAgICByZXR1cm4gcHJvcHMuY2hpbGRyZW4ocmVzdWx0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufSksXG4gICAgbG9hZGFibGUkMSA9IF9jcmVhdGVMb2FkYWJsZSQxLmxvYWRhYmxlLFxuICAgIGxhenkkMSA9IF9jcmVhdGVMb2FkYWJsZSQxLmxhenk7XG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBjYW1lbGNhc2UgKi9cbnZhciBCUk9XU0VSID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiBsb2FkYWJsZVJlYWR5KGRvbmUsIF90ZW1wKSB7XG4gIGlmIChkb25lID09PSB2b2lkIDApIHtcbiAgICBkb25lID0gZnVuY3Rpb24gZG9uZSgpIHt9O1xuICB9XG5cbiAgdmFyIF9yZWYgPSBfdGVtcCA9PT0gdm9pZCAwID8ge30gOiBfdGVtcCxcbiAgICAgIF9yZWYkbmFtZXNwYWNlID0gX3JlZi5uYW1lc3BhY2UsXG4gICAgICBuYW1lc3BhY2UgPSBfcmVmJG5hbWVzcGFjZSA9PT0gdm9pZCAwID8gJycgOiBfcmVmJG5hbWVzcGFjZTtcblxuICBpZiAoIUJST1dTRVIpIHtcbiAgICB3YXJuKCdgbG9hZGFibGVSZWFkeSgpYCBtdXN0IGJlIGNhbGxlZCBpbiBicm93c2VyIG9ubHknKTtcbiAgICBkb25lKCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgdmFyIHJlcXVpcmVkQ2h1bmtzID0gbnVsbDtcblxuICBpZiAoQlJPV1NFUikge1xuICAgIHZhciBkYXRhRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGdldFJlcXVpcmVkQ2h1bmtLZXkobmFtZXNwYWNlKSk7XG5cbiAgICBpZiAoZGF0YUVsZW1lbnQpIHtcbiAgICAgIHJlcXVpcmVkQ2h1bmtzID0gSlNPTi5wYXJzZShkYXRhRWxlbWVudC50ZXh0Q29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFyZXF1aXJlZENodW5rcykge1xuICAgIHdhcm4oJ2Bsb2FkYWJsZVJlYWR5KClgIHJlcXVpcmVzIHN0YXRlLCBwbGVhc2UgdXNlIGBnZXRTY3JpcHRUYWdzYCBvciBgZ2V0U2NyaXB0RWxlbWVudHNgIHNlcnZlci1zaWRlJyk7XG4gICAgZG9uZSgpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlZCA9IGZhbHNlO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICB3aW5kb3cuX19MT0FEQUJMRV9MT0FERURfQ0hVTktTX18gPSB3aW5kb3cuX19MT0FEQUJMRV9MT0FERURfQ0hVTktTX18gfHwgW107XG4gICAgdmFyIGxvYWRlZENodW5rcyA9IHdpbmRvdy5fX0xPQURBQkxFX0xPQURFRF9DSFVOS1NfXztcbiAgICB2YXIgb3JpZ2luYWxQdXNoID0gbG9hZGVkQ2h1bmtzLnB1c2guYmluZChsb2FkZWRDaHVua3MpO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tSZWFkeVN0YXRlKCkge1xuICAgICAgaWYgKHJlcXVpcmVkQ2h1bmtzLmV2ZXJ5KGZ1bmN0aW9uIChjaHVuaykge1xuICAgICAgICByZXR1cm4gbG9hZGVkQ2h1bmtzLnNvbWUoZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgICAgdmFyIGNodW5rcyA9IF9yZWYyWzBdO1xuICAgICAgICAgIHJldHVybiBjaHVua3MuaW5kZXhPZihjaHVuaykgPiAtMTtcbiAgICAgICAgfSk7XG4gICAgICB9KSkge1xuICAgICAgICBpZiAoIXJlc29sdmVkKSB7XG4gICAgICAgICAgcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICBkb25lKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkZWRDaHVua3MucHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG9yaWdpbmFsUHVzaC5hcHBseSh2b2lkIDAsIGFyZ3VtZW50cyk7XG4gICAgICBjaGVja1JlYWR5U3RhdGUoKTtcbiAgICB9O1xuXG4gICAgY2hlY2tSZWFkeVN0YXRlKCk7XG4gIH0pO1xufVxuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlcnNjb3JlLWRhbmdsZSAqL1xudmFyIGxvYWRhYmxlJDIgPSBsb2FkYWJsZTtcbmxvYWRhYmxlJDIubGliID0gbG9hZGFibGUkMTtcbnZhciBsYXp5JDIgPSBsYXp5O1xubGF6eSQyLmxpYiA9IGxhenkkMTtcbnZhciBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IHNoYXJlZEludGVybmFscztcblxuZXhwb3J0IGRlZmF1bHQgbG9hZGFibGUkMjtcbmV4cG9ydCB7IF9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVELCBsYXp5JDIgYXMgbGF6eSwgbG9hZGFibGVSZWFkeSB9O1xuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFwcCBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgICdAc3R5bGUvaW5kZXgubGVzcydcbmltcG9ydCBOYXYgZnJvbSAnQHJvb3QvY29tcG9uZW50cy9OYXYnXG5pbXBvcnQgQ29weVJpZ2h0IGZyb20gJ0Byb290L2NvbXBvbmVudHMvQ29weVJpZ2h0J1xuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHN0b3JlIGZyb20gJ0BzdG9yZS9pbmRleCdcbmltcG9ydCB7IGFkZENsYXNzLCByZW1vdmVDbGFzcyB9IGZyb20gJ0Byb290L3V0aWxzL3V0aWxzJ1xuaW1wb3J0IFNpZGVyV2FycCBmcm9tICdAcm9vdC9jb21wb25lbnRzL1NpZGVyV2FycCdcbmltcG9ydCBNdXNpYyBmcm9tICdAY29tcG9uZW50cy9NdXNpYydcblxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHAge1xuICBwdWJsaWMgY2xhc3NXcmFwcGVyU3RyaW5nID0gY2xhc3NOYW1lcyh7XG4gICAgW2ByZWFjdC1uZXh0LXdyYXBwZXJgXTogdHJ1ZSxcbiAgICBbYHRoZW1lLWRlZmF1bHRgXTogdHJ1ZVxuICB9KVxuXG4gIHB1YmxpYyBzaG93Rm4gPSAoKSA9PiB7XG4gICAgYWRkQ2xhc3MoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R3LW5leHQtY29udGFpbmVyJykgYXMgSFRNTEVsZW1lbnQsICdwZXJzcGVjdGl2ZScpXG4gIH1cblxuICBwdWJsaWMgaGlkZUZuID0gKCkgPT4ge1xuICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkdy1uZXh0LWNvbnRhaW5lcicpIGFzIEhUTUxFbGVtZW50LCAncGVyc3BlY3RpdmUnKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcbiAgICByZXR1cm4gKFxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICAgIDxTaWRlcldhcnAgc2hvd0ZuPXt0aGlzLnNob3dGbn1cbiAgICAgICAgICAgICAgICAgIGhpZGVGbj17dGhpcy5oaWRlRm59XG4gICAgICAgICAgICAgICAgICB0eXBlPSdmaXhlZCc+XG4gICAgICAgICAgPE11c2ljPjwvTXVzaWM+XG4gICAgICAgIDwvU2lkZXJXYXJwPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dGhpcy5jbGFzc1dyYXBwZXJTdHJpbmd9YH0gaWQ9J2R3LW5leHQtY29udGFpbmVyJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVhY3QtbmV4dC1jb250ZW50Jz5cbiAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgIDxOYXYvPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPENvcHlSaWdodC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEwRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQU1BO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFhQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUExS0E7QUFBQTtBQUFBO0FBQUE7QUFpTEE7QUFFQTtBQUlBO0FBTUE7QUFJQTtBQU1BO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBO0FBQUE7QUFDQTtBQVlBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXhCQTtBQUNBO0FBMkJBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2YUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBY0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKQTtBQVdBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFlQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTs7OztBQXBDQTtBQUNBO0FBc0NBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=