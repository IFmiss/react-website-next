webpackHotUpdate("static/development/pages/blog/detail.js",{

/***/ "./node_modules/react-lazyload/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-lazyload/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forceVisible = exports.forceCheck = exports.lazyload = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _event = __webpack_require__(/*! ./utils/event */ "./node_modules/react-lazyload/lib/utils/event.js");

var _scrollParent = __webpack_require__(/*! ./utils/scrollParent */ "./node_modules/react-lazyload/lib/utils/scrollParent.js");

var _scrollParent2 = _interopRequireDefault(_scrollParent);

var _debounce = __webpack_require__(/*! ./utils/debounce */ "./node_modules/react-lazyload/lib/utils/debounce.js");

var _debounce2 = _interopRequireDefault(_debounce);

var _throttle = __webpack_require__(/*! ./utils/throttle */ "./node_modules/react-lazyload/lib/utils/throttle.js");

var _throttle2 = _interopRequireDefault(_throttle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * react-lazyload
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var defaultBoundingClientRect = { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
var LISTEN_FLAG = 'data-lazyload-listened';
var listeners = [];
var pending = [];

// try to handle passive events
var passiveEventSupported = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function get() {
      passiveEventSupported = true;
    }
  });
  window.addEventListener('test', null, opts);
} catch (e) {}
// if they are supported, setup the optional params
// IMPORTANT: FALSE doubles as the default CAPTURE value!
var passiveEvent = passiveEventSupported ? { capture: false, passive: true } : false;

/**
 * Check if `component` is visible in overflow container `parent`
 * @param  {node} component React component
 * @param  {node} parent    component's scroll parent
 * @return {bool}
 */
var checkOverflowVisible = function checkOverflowVisible(component, parent) {
  var node = _reactDom2.default.findDOMNode(component);
  // const node = component.ref;

  var parentTop = void 0;
  var parentLeft = void 0;
  var parentHeight = void 0;
  var parentWidth = void 0;

  try {
    var _parent$getBoundingCl = parent.getBoundingClientRect();

    parentTop = _parent$getBoundingCl.top;
    parentLeft = _parent$getBoundingCl.left;
    parentHeight = _parent$getBoundingCl.height;
    parentWidth = _parent$getBoundingCl.width;
  } catch (e) {
    parentTop = defaultBoundingClientRect.top;
    parentLeft = defaultBoundingClientRect.left;
    parentHeight = defaultBoundingClientRect.height;
    parentWidth = defaultBoundingClientRect.width;
  }

  var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;
  var windowInnerWidth = window.innerWidth || document.documentElement.clientWidth;

  // calculate top and height of the intersection of the element's scrollParent and viewport
  var intersectionTop = Math.max(parentTop, 0); // intersection's top relative to viewport
  var intersectionLeft = Math.max(parentLeft, 0); // intersection's left relative to viewport
  var intersectionHeight = Math.min(windowInnerHeight, parentTop + parentHeight) - intersectionTop; // height
  var intersectionWidth = Math.min(windowInnerWidth, parentLeft + parentWidth) - intersectionLeft; // width

  // check whether the element is visible in the intersection
  var top = void 0;
  var left = void 0;
  var height = void 0;
  var width = void 0;

  try {
    var _node$getBoundingClie = node.getBoundingClientRect();

    top = _node$getBoundingClie.top;
    left = _node$getBoundingClie.left;
    height = _node$getBoundingClie.height;
    width = _node$getBoundingClie.width;
  } catch (e) {
    top = defaultBoundingClientRect.top;
    left = defaultBoundingClientRect.left;
    height = defaultBoundingClientRect.height;
    width = defaultBoundingClientRect.width;
  }

  var offsetTop = top - intersectionTop; // element's top relative to intersection
  var offsetLeft = left - intersectionLeft; // element's left relative to intersection

  var offsets = Array.isArray(component.props.offset) ? component.props.offset : [component.props.offset, component.props.offset]; // Be compatible with previous API

  return offsetTop - offsets[0] <= intersectionHeight && offsetTop + height + offsets[1] >= 0 && offsetLeft - offsets[0] <= intersectionWidth && offsetLeft + width + offsets[1] >= 0;
};

/**
 * Check if `component` is visible in document
 * @param  {node} component React component
 * @return {bool}
 */
var checkNormalVisible = function checkNormalVisible(component) {
  var node = _reactDom2.default.findDOMNode(component);
  // const node = component.ref;

  // If this element is hidden by css rules somehow, it's definitely invisible
  if (!(node.offsetWidth || node.offsetHeight || node.getClientRects().length)) return false;

  var top = void 0;
  var elementHeight = void 0;

  try {
    var _node$getBoundingClie2 = node.getBoundingClientRect();

    top = _node$getBoundingClie2.top;
    elementHeight = _node$getBoundingClie2.height;
  } catch (e) {
    top = defaultBoundingClientRect.top;
    elementHeight = defaultBoundingClientRect.height;
  }

  var windowInnerHeight = window.innerHeight || document.documentElement.clientHeight;

  var offsets = Array.isArray(component.props.offset) ? component.props.offset : [component.props.offset, component.props.offset]; // Be compatible with previous API

  return top - offsets[0] <= windowInnerHeight && top + elementHeight + offsets[1] >= 0;
};

/**
 * Detect if element is visible in viewport, if so, set `visible` state to true.
 * If `once` prop is provided true, remove component as listener after checkVisible
 *
 * @param  {React} component   React component that respond to scroll and resize
 */
var checkVisible = function checkVisible(component) {
  var node = _reactDom2.default.findDOMNode(component);
  // const node = component.ref;
  if (!(node instanceof HTMLElement)) {
    return;
  }

  var parent = (0, _scrollParent2.default)(node);
  var isOverflow = component.props.overflow && parent !== node.ownerDocument && parent !== document && parent !== document.documentElement;
  var visible = isOverflow ? checkOverflowVisible(component, parent) : checkNormalVisible(component);
  if (visible) {
    // Avoid extra render if previously is visible
    if (!component.visible) {
      if (component.props.once) {
        pending.push(component);
      }

      component.visible = true;
      component.forceUpdate();
    }
  } else if (!(component.props.once && component.visible)) {
    component.visible = false;
    if (component.props.unmountIfInvisible) {
      component.forceUpdate();
    }
  }
};

var purgePending = function purgePending() {
  pending.forEach(function (component) {
    var index = listeners.indexOf(component);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  });

  pending = [];
};

var lazyLoadHandler = function lazyLoadHandler() {
  for (var i = 0; i < listeners.length; ++i) {
    var listener = listeners[i];
    checkVisible(listener);
  }
  // Remove `once` component in listeners
  purgePending();
};

/**
 * Forces the component to display regardless of whether the element is visible in the viewport.
 */
var forceVisible = function forceVisible() {
  for (var i = 0; i < listeners.length; ++i) {
    var listener = listeners[i];
    listener.visible = true;
    listener.forceUpdate();
  }
  // Remove `once` component in listeners
  purgePending();
};

// Depending on component's props
var delayType = void 0;
var finalLazyLoadHandler = null;

var isString = function isString(string) {
  return typeof string === 'string';
};

var LazyLoad = function (_Component) {
  _inherits(LazyLoad, _Component);

  function LazyLoad(props) {
    _classCallCheck(this, LazyLoad);

    var _this = _possibleConstructorReturn(this, (LazyLoad.__proto__ || Object.getPrototypeOf(LazyLoad)).call(this, props));

    _this.visible = false;
    // this.setRef = this.setRef.bind(this);
    return _this;
  }

  // setRef(element) {
  //   if (element) {
  //     this.ref = element;
  //   }
  // }

  _createClass(LazyLoad, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // It's unlikely to change delay type on the fly, this is mainly
      // designed for tests
      var scrollport = window;
      var scrollContainer = this.props.scrollContainer;

      if (scrollContainer) {
        if (isString(scrollContainer)) {
          scrollport = scrollport.document.querySelector(scrollContainer);
        }
      }
      var needResetFinalLazyLoadHandler = this.props.debounce !== undefined && delayType === 'throttle' || delayType === 'debounce' && this.props.debounce === undefined;

      if (needResetFinalLazyLoadHandler) {
        (0, _event.off)(scrollport, 'scroll', finalLazyLoadHandler, passiveEvent);
        (0, _event.off)(window, 'resize', finalLazyLoadHandler, passiveEvent);
        finalLazyLoadHandler = null;
      }

      if (!finalLazyLoadHandler) {
        if (this.props.debounce !== undefined) {
          finalLazyLoadHandler = (0, _debounce2.default)(lazyLoadHandler, typeof this.props.debounce === 'number' ? this.props.debounce : 300);
          delayType = 'debounce';
        } else if (this.props.throttle !== undefined) {
          finalLazyLoadHandler = (0, _throttle2.default)(lazyLoadHandler, typeof this.props.throttle === 'number' ? this.props.throttle : 300);
          delayType = 'throttle';
        } else {
          finalLazyLoadHandler = lazyLoadHandler;
        }
      }

      if (this.props.overflow) {
        var parent = (0, _scrollParent2.default)(_reactDom2.default.findDOMNode(this));
        // const parent = scrollParent(this.ref);
        if (parent && typeof parent.getAttribute === 'function') {
          var listenerCount = 1 + +parent.getAttribute(LISTEN_FLAG);
          if (listenerCount === 1) {
            parent.addEventListener('scroll', finalLazyLoadHandler, passiveEvent);
          }
          parent.setAttribute(LISTEN_FLAG, listenerCount);
        }
      } else if (listeners.length === 0 || needResetFinalLazyLoadHandler) {
        var _props = this.props,
            scroll = _props.scroll,
            resize = _props.resize;


        if (scroll) {
          (0, _event.on)(scrollport, 'scroll', finalLazyLoadHandler, passiveEvent);
        }

        if (resize) {
          (0, _event.on)(window, 'resize', finalLazyLoadHandler, passiveEvent);
        }
      }

      listeners.push(this);
      checkVisible(this);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate() {
      return this.visible;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.overflow) {
        var parent = (0, _scrollParent2.default)(_reactDom2.default.findDOMNode(this));
        // const parent = scrollParent(this.ref);
        if (parent && typeof parent.getAttribute === 'function') {
          var listenerCount = +parent.getAttribute(LISTEN_FLAG) - 1;
          if (listenerCount === 0) {
            parent.removeEventListener('scroll', finalLazyLoadHandler, passiveEvent);
            parent.removeAttribute(LISTEN_FLAG);
          } else {
            parent.setAttribute(LISTEN_FLAG, listenerCount);
          }
        }
      }

      var index = listeners.indexOf(this);
      if (index !== -1) {
        listeners.splice(index, 1);
      }

      if (listeners.length === 0 && typeof window !== 'undefined') {
        (0, _event.off)(window, 'resize', finalLazyLoadHandler, passiveEvent);
        (0, _event.off)(window, 'scroll', finalLazyLoadHandler, passiveEvent);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.visible ? this.props.children : this.props.placeholder ? this.props.placeholder : _react2.default.createElement('div', { style: { height: this.props.height }, className: 'lazyload-placeholder' });
      // <span ref={this.setRef} className="lazyload-custom-placeholder">
      //   {this.props.placeholder}
      // </span> :
      // <div ref={this.setRef} style={{ height: this.props.height }} className="lazyload-placeholder" />;
    }
  }]);

  return LazyLoad;
}(_react.Component);

LazyLoad.propTypes = {
  once: _propTypes2.default.bool,
  height: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  offset: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.arrayOf(_propTypes2.default.number)]),
  overflow: _propTypes2.default.bool,
  resize: _propTypes2.default.bool,
  scroll: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  throttle: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
  debounce: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.bool]),
  placeholder: _propTypes2.default.node,
  scrollContainer: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
  unmountIfInvisible: _propTypes2.default.bool
};

LazyLoad.defaultProps = {
  once: false,
  offset: 0,
  overflow: false,
  resize: false,
  scroll: true,
  unmountIfInvisible: false
};

var getDisplayName = function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

var decorator = function decorator() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function lazyload(WrappedComponent) {
    return function (_Component2) {
      _inherits(LazyLoadDecorated, _Component2);

      function LazyLoadDecorated() {
        _classCallCheck(this, LazyLoadDecorated);

        var _this2 = _possibleConstructorReturn(this, (LazyLoadDecorated.__proto__ || Object.getPrototypeOf(LazyLoadDecorated)).call(this));

        _this2.displayName = 'LazyLoad' + getDisplayName(WrappedComponent);
        return _this2;
      }

      _createClass(LazyLoadDecorated, [{
        key: 'render',
        value: function render() {
          return _react2.default.createElement(
            LazyLoad,
            options,
            _react2.default.createElement(WrappedComponent, this.props)
          );
        }
      }]);

      return LazyLoadDecorated;
    }(_react.Component);
  };
};

exports.lazyload = decorator;
exports.default = LazyLoad;
exports.forceCheck = lazyLoadHandler;
exports.forceVisible = forceVisible;

/***/ }),

/***/ "./node_modules/react-lazyload/lib/utils/debounce.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-lazyload/lib/utils/debounce.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;
function debounce(func, wait, immediate) {
  var timeout = void 0;
  var args = void 0;
  var context = void 0;
  var timestamp = void 0;
  var result = void 0;

  var later = function later() {
    var last = +new Date() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) {
          context = null;
          args = null;
        }
      }
    }
  };

  return function debounced() {
    context = this;
    args = arguments;
    timestamp = +new Date();

    var callNow = immediate && !timeout;
    if (!timeout) {
      timeout = setTimeout(later, wait);
    }

    if (callNow) {
      result = func.apply(context, args);
      context = null;
      args = null;
    }

    return result;
  };
}

/***/ }),

/***/ "./node_modules/react-lazyload/lib/utils/event.js":
/*!********************************************************!*\
  !*** ./node_modules/react-lazyload/lib/utils/event.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.on = on;
exports.off = off;
function on(el, eventName, callback, opts) {
  opts = opts || false;
  if (el.addEventListener) {
    el.addEventListener(eventName, callback, opts);
  } else if (el.attachEvent) {
    el.attachEvent("on" + eventName, function (e) {
      callback.call(el, e || window.event);
    });
  }
}

function off(el, eventName, callback, opts) {
  opts = opts || false;
  if (el.removeEventListener) {
    el.removeEventListener(eventName, callback, opts);
  } else if (el.detachEvent) {
    el.detachEvent("on" + eventName, callback);
  }
}

/***/ }),

/***/ "./node_modules/react-lazyload/lib/utils/scrollParent.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-lazyload/lib/utils/scrollParent.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
 * @fileOverview Find scroll parent
 */

exports.default = function (node) {
  if (!(node instanceof HTMLElement)) {
    return document.documentElement;
  }

  var excludeStaticParent = node.style.position === 'absolute';
  var overflowRegex = /(scroll|auto)/;
  var parent = node;

  while (parent) {
    if (!parent.parentNode) {
      return node.ownerDocument || document.documentElement;
    }

    var style = window.getComputedStyle(parent);
    var position = style.position;
    var overflow = style.overflow;
    var overflowX = style['overflow-x'];
    var overflowY = style['overflow-y'];

    if (position === 'static' && excludeStaticParent) {
      parent = parent.parentNode;
      continue;
    }

    if (overflowRegex.test(overflow) && overflowRegex.test(overflowX) && overflowRegex.test(overflowY)) {
      return parent;
    }

    parent = parent.parentNode;
  }

  return node.ownerDocument || node.documentElement || document.documentElement;
};

/***/ }),

/***/ "./node_modules/react-lazyload/lib/utils/throttle.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-lazyload/lib/utils/throttle.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = throttle;
/*eslint-disable */
function throttle(fn, threshhold, scope) {
  threshhold || (threshhold = 250);
  var last, deferTimer;
  return function () {
    var context = scope || this;

    var now = +new Date(),
        args = arguments;
    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshhold);
    } else {
      last = now;
      fn.apply(context, args);
    }
  };
}

/***/ }),

/***/ "./pages/blog/detail/index.tsx":
/*!*************************************!*\
  !*** ./pages/blog/detail/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Layout */ "./components/Layout/index.tsx");
/* harmony import */ var _constance_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @constance/api */ "./constance/api.ts");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constance_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @constance/index */ "./constance/index.ts");
/* harmony import */ var _utils_req__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utils/req */ "./utils/req.ts");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _detail_less__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./detail.less */ "./pages/blog/detail/detail.less");
/* harmony import */ var _detail_less__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_detail_less__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_CodeBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/CodeBlock */ "./components/CodeBlock/index.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-lazyload */ "./node_modules/react-lazyload/lib/index.js");
/* harmony import */ var react_lazyload__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_lazyload__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _root_store_actions_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @root/store/actions/index */ "./store/actions/index.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_15__);


var _jsxFileName = "/Users/daiwei/pr/react-website-next/pages/blog/detail/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;















var BlogDetail = function BlogDetail(props) {
  var detail = props.detail,
      prev = props.prev,
      next = props.next;
  var classString = classnames__WEBPACK_IMPORTED_MODULE_5___default()(Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "".concat(_constance_index__WEBPACK_IMPORTED_MODULE_6__["PROJECT_NAME"], "-blog-detail"), true));
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    eleToTop();
    renderImage();
  }, []);

  var renderImage = function renderImage() {
    var imgs = Array.from(document.querySelectorAll('.react-next-web-blog-detail img'));
    imgs.forEach(function (item) {
      var src = item.getAttribute('src') || '';
      var alt = item.getAttribute('alt') || '';
      console.log(item.parentNode);
      react_dom__WEBPACK_IMPORTED_MODULE_15___default.a.render(__jsx(react_lazyload__WEBPACK_IMPORTED_MODULE_12___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, __jsx("img", {
        src: src,
        alt: alt,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      })), item);
    });
    console.log(imgs);
  };

  var eleToTop = function eleToTop() {
    var ele = document.getElementById('dw-next-container');

    if (ele) {
      ele.scrollTop = 0;
    }
  };

  return detail && detail.id ? __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: detail.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("div", {
    className: classString,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("h1", {
    className: "".concat(classString, "-title"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, detail.name), __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_8___default.a, {
    source: detail.content,
    escapeHtml: false,
    renderers: {
      code: _components_CodeBlock__WEBPACK_IMPORTED_MODULE_10__["default"]
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx("div", {
    className: "".concat(classString, "-entry"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, prev && prev.id ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/blog/detail?id=".concat(prev.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("a", {
    className: "".concat(classString, "-entry-prev"),
    title: prev.name || '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, prev.name ? "\u4E0A\u4E00\u7BC7 : ".concat(prev.name) : '')) : null, next && next.id ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_11___default.a, {
    href: "/blog/detail?id=".concat(next.id),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, __jsx("a", {
    className: "".concat(classString, "-entry-next"),
    title: next.name || '',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, next.name ? "\u4E0B\u4E00\u7BC7 : ".concat(next.name) : '')) : null))) : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "\u52A0\u8F7D\u4E2D...");
};

BlogDetail.getInitialProps = function _callee(ctx) {
  var id, _ref, data;

  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = ctx.query.id;
          _context.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(_utils_req__WEBPACK_IMPORTED_MODULE_7__["default"].get("".concat(_constance_api__WEBPACK_IMPORTED_MODULE_4__["ARTICLE_DETAIL"], "/").concat(id)));

        case 3:
          _ref = _context.sent;
          data = _ref.data;
          return _context.abrupt("return", {
            detail: data.result && data.result.detail || {},
            next: data.result && data.result.next || null,
            prev: data.result && data.result.prev || null
          });

        case 6:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var mapState = function mapState(state) {
  return {
    containerEle: state.base.containerEle
  };
};

var mapDispatch = _root_store_actions_index__WEBPACK_IMPORTED_MODULE_13__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__["connect"])(mapState, mapDispatch)(BlogDetail));

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL2Jsb2cvZGV0YWlsLmpzLmJhZWQ1MTk2Zjg3OTUyZWY5MTFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbGF6eWxvYWQvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1sYXp5bG9hZC9saWIvdXRpbHMvZGVib3VuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWxhenlsb2FkL2xpYi91dGlscy9ldmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbGF6eWxvYWQvbGliL3V0aWxzL3Njcm9sbFBhcmVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtbGF6eWxvYWQvbGliL3V0aWxzL3Rocm90dGxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Jsb2cvZGV0YWlsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmZvcmNlVmlzaWJsZSA9IGV4cG9ydHMuZm9yY2VDaGVjayA9IGV4cG9ydHMubGF6eWxvYWQgPSB1bmRlZmluZWQ7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF9wcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJyk7XG5cbnZhciBfcHJvcFR5cGVzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3Byb3BUeXBlcyk7XG5cbnZhciBfZXZlbnQgPSByZXF1aXJlKCcuL3V0aWxzL2V2ZW50Jyk7XG5cbnZhciBfc2Nyb2xsUGFyZW50ID0gcmVxdWlyZSgnLi91dGlscy9zY3JvbGxQYXJlbnQnKTtcblxudmFyIF9zY3JvbGxQYXJlbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc2Nyb2xsUGFyZW50KTtcblxudmFyIF9kZWJvdW5jZSA9IHJlcXVpcmUoJy4vdXRpbHMvZGVib3VuY2UnKTtcblxudmFyIF9kZWJvdW5jZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWJvdW5jZSk7XG5cbnZhciBfdGhyb3R0bGUgPSByZXF1aXJlKCcuL3V0aWxzL3Rocm90dGxlJyk7XG5cbnZhciBfdGhyb3R0bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGhyb3R0bGUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9IC8qKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICogcmVhY3QtbGF6eWxvYWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqL1xuXG5cbnZhciBkZWZhdWx0Qm91bmRpbmdDbGllbnRSZWN0ID0geyB0b3A6IDAsIHJpZ2h0OiAwLCBib3R0b206IDAsIGxlZnQ6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDAgfTtcbnZhciBMSVNURU5fRkxBRyA9ICdkYXRhLWxhenlsb2FkLWxpc3RlbmVkJztcbnZhciBsaXN0ZW5lcnMgPSBbXTtcbnZhciBwZW5kaW5nID0gW107XG5cbi8vIHRyeSB0byBoYW5kbGUgcGFzc2l2ZSBldmVudHNcbnZhciBwYXNzaXZlRXZlbnRTdXBwb3J0ZWQgPSBmYWxzZTtcbnRyeSB7XG4gIHZhciBvcHRzID0gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHBhc3NpdmVFdmVudFN1cHBvcnRlZCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Rlc3QnLCBudWxsLCBvcHRzKTtcbn0gY2F0Y2ggKGUpIHt9XG4vLyBpZiB0aGV5IGFyZSBzdXBwb3J0ZWQsIHNldHVwIHRoZSBvcHRpb25hbCBwYXJhbXNcbi8vIElNUE9SVEFOVDogRkFMU0UgZG91YmxlcyBhcyB0aGUgZGVmYXVsdCBDQVBUVVJFIHZhbHVlIVxudmFyIHBhc3NpdmVFdmVudCA9IHBhc3NpdmVFdmVudFN1cHBvcnRlZCA/IHsgY2FwdHVyZTogZmFsc2UsIHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlO1xuXG4vKipcbiAqIENoZWNrIGlmIGBjb21wb25lbnRgIGlzIHZpc2libGUgaW4gb3ZlcmZsb3cgY29udGFpbmVyIGBwYXJlbnRgXG4gKiBAcGFyYW0gIHtub2RlfSBjb21wb25lbnQgUmVhY3QgY29tcG9uZW50XG4gKiBAcGFyYW0gIHtub2RlfSBwYXJlbnQgICAgY29tcG9uZW50J3Mgc2Nyb2xsIHBhcmVudFxuICogQHJldHVybiB7Ym9vbH1cbiAqL1xudmFyIGNoZWNrT3ZlcmZsb3dWaXNpYmxlID0gZnVuY3Rpb24gY2hlY2tPdmVyZmxvd1Zpc2libGUoY29tcG9uZW50LCBwYXJlbnQpIHtcbiAgdmFyIG5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUoY29tcG9uZW50KTtcbiAgLy8gY29uc3Qgbm9kZSA9IGNvbXBvbmVudC5yZWY7XG5cbiAgdmFyIHBhcmVudFRvcCA9IHZvaWQgMDtcbiAgdmFyIHBhcmVudExlZnQgPSB2b2lkIDA7XG4gIHZhciBwYXJlbnRIZWlnaHQgPSB2b2lkIDA7XG4gIHZhciBwYXJlbnRXaWR0aCA9IHZvaWQgMDtcblxuICB0cnkge1xuICAgIHZhciBfcGFyZW50JGdldEJvdW5kaW5nQ2wgPSBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBwYXJlbnRUb3AgPSBfcGFyZW50JGdldEJvdW5kaW5nQ2wudG9wO1xuICAgIHBhcmVudExlZnQgPSBfcGFyZW50JGdldEJvdW5kaW5nQ2wubGVmdDtcbiAgICBwYXJlbnRIZWlnaHQgPSBfcGFyZW50JGdldEJvdW5kaW5nQ2wuaGVpZ2h0O1xuICAgIHBhcmVudFdpZHRoID0gX3BhcmVudCRnZXRCb3VuZGluZ0NsLndpZHRoO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcGFyZW50VG9wID0gZGVmYXVsdEJvdW5kaW5nQ2xpZW50UmVjdC50b3A7XG4gICAgcGFyZW50TGVmdCA9IGRlZmF1bHRCb3VuZGluZ0NsaWVudFJlY3QubGVmdDtcbiAgICBwYXJlbnRIZWlnaHQgPSBkZWZhdWx0Qm91bmRpbmdDbGllbnRSZWN0LmhlaWdodDtcbiAgICBwYXJlbnRXaWR0aCA9IGRlZmF1bHRCb3VuZGluZ0NsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICB2YXIgd2luZG93SW5uZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcbiAgdmFyIHdpbmRvd0lubmVyV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG5cbiAgLy8gY2FsY3VsYXRlIHRvcCBhbmQgaGVpZ2h0IG9mIHRoZSBpbnRlcnNlY3Rpb24gb2YgdGhlIGVsZW1lbnQncyBzY3JvbGxQYXJlbnQgYW5kIHZpZXdwb3J0XG4gIHZhciBpbnRlcnNlY3Rpb25Ub3AgPSBNYXRoLm1heChwYXJlbnRUb3AsIDApOyAvLyBpbnRlcnNlY3Rpb24ncyB0b3AgcmVsYXRpdmUgdG8gdmlld3BvcnRcbiAgdmFyIGludGVyc2VjdGlvbkxlZnQgPSBNYXRoLm1heChwYXJlbnRMZWZ0LCAwKTsgLy8gaW50ZXJzZWN0aW9uJ3MgbGVmdCByZWxhdGl2ZSB0byB2aWV3cG9ydFxuICB2YXIgaW50ZXJzZWN0aW9uSGVpZ2h0ID0gTWF0aC5taW4od2luZG93SW5uZXJIZWlnaHQsIHBhcmVudFRvcCArIHBhcmVudEhlaWdodCkgLSBpbnRlcnNlY3Rpb25Ub3A7IC8vIGhlaWdodFxuICB2YXIgaW50ZXJzZWN0aW9uV2lkdGggPSBNYXRoLm1pbih3aW5kb3dJbm5lcldpZHRoLCBwYXJlbnRMZWZ0ICsgcGFyZW50V2lkdGgpIC0gaW50ZXJzZWN0aW9uTGVmdDsgLy8gd2lkdGhcblxuICAvLyBjaGVjayB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIHZpc2libGUgaW4gdGhlIGludGVyc2VjdGlvblxuICB2YXIgdG9wID0gdm9pZCAwO1xuICB2YXIgbGVmdCA9IHZvaWQgMDtcbiAgdmFyIGhlaWdodCA9IHZvaWQgMDtcbiAgdmFyIHdpZHRoID0gdm9pZCAwO1xuXG4gIHRyeSB7XG4gICAgdmFyIF9ub2RlJGdldEJvdW5kaW5nQ2xpZSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICB0b3AgPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUudG9wO1xuICAgIGxlZnQgPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUubGVmdDtcbiAgICBoZWlnaHQgPSBfbm9kZSRnZXRCb3VuZGluZ0NsaWUuaGVpZ2h0O1xuICAgIHdpZHRoID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLndpZHRoO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdG9wID0gZGVmYXVsdEJvdW5kaW5nQ2xpZW50UmVjdC50b3A7XG4gICAgbGVmdCA9IGRlZmF1bHRCb3VuZGluZ0NsaWVudFJlY3QubGVmdDtcbiAgICBoZWlnaHQgPSBkZWZhdWx0Qm91bmRpbmdDbGllbnRSZWN0LmhlaWdodDtcbiAgICB3aWR0aCA9IGRlZmF1bHRCb3VuZGluZ0NsaWVudFJlY3Qud2lkdGg7XG4gIH1cblxuICB2YXIgb2Zmc2V0VG9wID0gdG9wIC0gaW50ZXJzZWN0aW9uVG9wOyAvLyBlbGVtZW50J3MgdG9wIHJlbGF0aXZlIHRvIGludGVyc2VjdGlvblxuICB2YXIgb2Zmc2V0TGVmdCA9IGxlZnQgLSBpbnRlcnNlY3Rpb25MZWZ0OyAvLyBlbGVtZW50J3MgbGVmdCByZWxhdGl2ZSB0byBpbnRlcnNlY3Rpb25cblxuICB2YXIgb2Zmc2V0cyA9IEFycmF5LmlzQXJyYXkoY29tcG9uZW50LnByb3BzLm9mZnNldCkgPyBjb21wb25lbnQucHJvcHMub2Zmc2V0IDogW2NvbXBvbmVudC5wcm9wcy5vZmZzZXQsIGNvbXBvbmVudC5wcm9wcy5vZmZzZXRdOyAvLyBCZSBjb21wYXRpYmxlIHdpdGggcHJldmlvdXMgQVBJXG5cbiAgcmV0dXJuIG9mZnNldFRvcCAtIG9mZnNldHNbMF0gPD0gaW50ZXJzZWN0aW9uSGVpZ2h0ICYmIG9mZnNldFRvcCArIGhlaWdodCArIG9mZnNldHNbMV0gPj0gMCAmJiBvZmZzZXRMZWZ0IC0gb2Zmc2V0c1swXSA8PSBpbnRlcnNlY3Rpb25XaWR0aCAmJiBvZmZzZXRMZWZ0ICsgd2lkdGggKyBvZmZzZXRzWzFdID49IDA7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGBjb21wb25lbnRgIGlzIHZpc2libGUgaW4gZG9jdW1lbnRcbiAqIEBwYXJhbSAge25vZGV9IGNvbXBvbmVudCBSZWFjdCBjb21wb25lbnRcbiAqIEByZXR1cm4ge2Jvb2x9XG4gKi9cbnZhciBjaGVja05vcm1hbFZpc2libGUgPSBmdW5jdGlvbiBjaGVja05vcm1hbFZpc2libGUoY29tcG9uZW50KSB7XG4gIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKGNvbXBvbmVudCk7XG4gIC8vIGNvbnN0IG5vZGUgPSBjb21wb25lbnQucmVmO1xuXG4gIC8vIElmIHRoaXMgZWxlbWVudCBpcyBoaWRkZW4gYnkgY3NzIHJ1bGVzIHNvbWVob3csIGl0J3MgZGVmaW5pdGVseSBpbnZpc2libGVcbiAgaWYgKCEobm9kZS5vZmZzZXRXaWR0aCB8fCBub2RlLm9mZnNldEhlaWdodCB8fCBub2RlLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciB0b3AgPSB2b2lkIDA7XG4gIHZhciBlbGVtZW50SGVpZ2h0ID0gdm9pZCAwO1xuXG4gIHRyeSB7XG4gICAgdmFyIF9ub2RlJGdldEJvdW5kaW5nQ2xpZTIgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgdG9wID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllMi50b3A7XG4gICAgZWxlbWVudEhlaWdodCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZTIuaGVpZ2h0O1xuICB9IGNhdGNoIChlKSB7XG4gICAgdG9wID0gZGVmYXVsdEJvdW5kaW5nQ2xpZW50UmVjdC50b3A7XG4gICAgZWxlbWVudEhlaWdodCA9IGRlZmF1bHRCb3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0O1xuICB9XG5cbiAgdmFyIHdpbmRvd0lubmVySGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cbiAgdmFyIG9mZnNldHMgPSBBcnJheS5pc0FycmF5KGNvbXBvbmVudC5wcm9wcy5vZmZzZXQpID8gY29tcG9uZW50LnByb3BzLm9mZnNldCA6IFtjb21wb25lbnQucHJvcHMub2Zmc2V0LCBjb21wb25lbnQucHJvcHMub2Zmc2V0XTsgLy8gQmUgY29tcGF0aWJsZSB3aXRoIHByZXZpb3VzIEFQSVxuXG4gIHJldHVybiB0b3AgLSBvZmZzZXRzWzBdIDw9IHdpbmRvd0lubmVySGVpZ2h0ICYmIHRvcCArIGVsZW1lbnRIZWlnaHQgKyBvZmZzZXRzWzFdID49IDA7XG59O1xuXG4vKipcbiAqIERldGVjdCBpZiBlbGVtZW50IGlzIHZpc2libGUgaW4gdmlld3BvcnQsIGlmIHNvLCBzZXQgYHZpc2libGVgIHN0YXRlIHRvIHRydWUuXG4gKiBJZiBgb25jZWAgcHJvcCBpcyBwcm92aWRlZCB0cnVlLCByZW1vdmUgY29tcG9uZW50IGFzIGxpc3RlbmVyIGFmdGVyIGNoZWNrVmlzaWJsZVxuICpcbiAqIEBwYXJhbSAge1JlYWN0fSBjb21wb25lbnQgICBSZWFjdCBjb21wb25lbnQgdGhhdCByZXNwb25kIHRvIHNjcm9sbCBhbmQgcmVzaXplXG4gKi9cbnZhciBjaGVja1Zpc2libGUgPSBmdW5jdGlvbiBjaGVja1Zpc2libGUoY29tcG9uZW50KSB7XG4gIHZhciBub2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKGNvbXBvbmVudCk7XG4gIC8vIGNvbnN0IG5vZGUgPSBjb21wb25lbnQucmVmO1xuICBpZiAoIShub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHBhcmVudCA9ICgwLCBfc2Nyb2xsUGFyZW50Mi5kZWZhdWx0KShub2RlKTtcbiAgdmFyIGlzT3ZlcmZsb3cgPSBjb21wb25lbnQucHJvcHMub3ZlcmZsb3cgJiYgcGFyZW50ICE9PSBub2RlLm93bmVyRG9jdW1lbnQgJiYgcGFyZW50ICE9PSBkb2N1bWVudCAmJiBwYXJlbnQgIT09IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgdmFyIHZpc2libGUgPSBpc092ZXJmbG93ID8gY2hlY2tPdmVyZmxvd1Zpc2libGUoY29tcG9uZW50LCBwYXJlbnQpIDogY2hlY2tOb3JtYWxWaXNpYmxlKGNvbXBvbmVudCk7XG4gIGlmICh2aXNpYmxlKSB7XG4gICAgLy8gQXZvaWQgZXh0cmEgcmVuZGVyIGlmIHByZXZpb3VzbHkgaXMgdmlzaWJsZVxuICAgIGlmICghY29tcG9uZW50LnZpc2libGUpIHtcbiAgICAgIGlmIChjb21wb25lbnQucHJvcHMub25jZSkge1xuICAgICAgICBwZW5kaW5nLnB1c2goY29tcG9uZW50KTtcbiAgICAgIH1cblxuICAgICAgY29tcG9uZW50LnZpc2libGUgPSB0cnVlO1xuICAgICAgY29tcG9uZW50LmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCEoY29tcG9uZW50LnByb3BzLm9uY2UgJiYgY29tcG9uZW50LnZpc2libGUpKSB7XG4gICAgY29tcG9uZW50LnZpc2libGUgPSBmYWxzZTtcbiAgICBpZiAoY29tcG9uZW50LnByb3BzLnVubW91bnRJZkludmlzaWJsZSkge1xuICAgICAgY29tcG9uZW50LmZvcmNlVXBkYXRlKCk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgcHVyZ2VQZW5kaW5nID0gZnVuY3Rpb24gcHVyZ2VQZW5kaW5nKCkge1xuICBwZW5kaW5nLmZvckVhY2goZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgIHZhciBpbmRleCA9IGxpc3RlbmVycy5pbmRleE9mKGNvbXBvbmVudCk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgbGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9KTtcblxuICBwZW5kaW5nID0gW107XG59O1xuXG52YXIgbGF6eUxvYWRIYW5kbGVyID0gZnVuY3Rpb24gbGF6eUxvYWRIYW5kbGVyKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7ICsraSkge1xuICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgICBjaGVja1Zpc2libGUobGlzdGVuZXIpO1xuICB9XG4gIC8vIFJlbW92ZSBgb25jZWAgY29tcG9uZW50IGluIGxpc3RlbmVyc1xuICBwdXJnZVBlbmRpbmcoKTtcbn07XG5cbi8qKlxuICogRm9yY2VzIHRoZSBjb21wb25lbnQgdG8gZGlzcGxheSByZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiB0aGUgdmlld3BvcnQuXG4gKi9cbnZhciBmb3JjZVZpc2libGUgPSBmdW5jdGlvbiBmb3JjZVZpc2libGUoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuICAgIGxpc3RlbmVyLnZpc2libGUgPSB0cnVlO1xuICAgIGxpc3RlbmVyLmZvcmNlVXBkYXRlKCk7XG4gIH1cbiAgLy8gUmVtb3ZlIGBvbmNlYCBjb21wb25lbnQgaW4gbGlzdGVuZXJzXG4gIHB1cmdlUGVuZGluZygpO1xufTtcblxuLy8gRGVwZW5kaW5nIG9uIGNvbXBvbmVudCdzIHByb3BzXG52YXIgZGVsYXlUeXBlID0gdm9pZCAwO1xudmFyIGZpbmFsTGF6eUxvYWRIYW5kbGVyID0gbnVsbDtcblxudmFyIGlzU3RyaW5nID0gZnVuY3Rpb24gaXNTdHJpbmcoc3RyaW5nKSB7XG4gIHJldHVybiB0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJztcbn07XG5cbnZhciBMYXp5TG9hZCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhMYXp5TG9hZCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGF6eUxvYWQocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGF6eUxvYWQpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKExhenlMb2FkLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTGF6eUxvYWQpKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgLy8gdGhpcy5zZXRSZWYgPSB0aGlzLnNldFJlZi5iaW5kKHRoaXMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIC8vIHNldFJlZihlbGVtZW50KSB7XG4gIC8vICAgaWYgKGVsZW1lbnQpIHtcbiAgLy8gICAgIHRoaXMucmVmID0gZWxlbWVudDtcbiAgLy8gICB9XG4gIC8vIH1cblxuICBfY3JlYXRlQ2xhc3MoTGF6eUxvYWQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIC8vIEl0J3MgdW5saWtlbHkgdG8gY2hhbmdlIGRlbGF5IHR5cGUgb24gdGhlIGZseSwgdGhpcyBpcyBtYWlubHlcbiAgICAgIC8vIGRlc2lnbmVkIGZvciB0ZXN0c1xuICAgICAgdmFyIHNjcm9sbHBvcnQgPSB3aW5kb3c7XG4gICAgICB2YXIgc2Nyb2xsQ29udGFpbmVyID0gdGhpcy5wcm9wcy5zY3JvbGxDb250YWluZXI7XG5cbiAgICAgIGlmIChzY3JvbGxDb250YWluZXIpIHtcbiAgICAgICAgaWYgKGlzU3RyaW5nKHNjcm9sbENvbnRhaW5lcikpIHtcbiAgICAgICAgICBzY3JvbGxwb3J0ID0gc2Nyb2xscG9ydC5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNjcm9sbENvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBuZWVkUmVzZXRGaW5hbExhenlMb2FkSGFuZGxlciA9IHRoaXMucHJvcHMuZGVib3VuY2UgIT09IHVuZGVmaW5lZCAmJiBkZWxheVR5cGUgPT09ICd0aHJvdHRsZScgfHwgZGVsYXlUeXBlID09PSAnZGVib3VuY2UnICYmIHRoaXMucHJvcHMuZGVib3VuY2UgPT09IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKG5lZWRSZXNldEZpbmFsTGF6eUxvYWRIYW5kbGVyKSB7XG4gICAgICAgICgwLCBfZXZlbnQub2ZmKShzY3JvbGxwb3J0LCAnc2Nyb2xsJywgZmluYWxMYXp5TG9hZEhhbmRsZXIsIHBhc3NpdmVFdmVudCk7XG4gICAgICAgICgwLCBfZXZlbnQub2ZmKSh3aW5kb3csICdyZXNpemUnLCBmaW5hbExhenlMb2FkSGFuZGxlciwgcGFzc2l2ZUV2ZW50KTtcbiAgICAgICAgZmluYWxMYXp5TG9hZEhhbmRsZXIgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZpbmFsTGF6eUxvYWRIYW5kbGVyKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmRlYm91bmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBmaW5hbExhenlMb2FkSGFuZGxlciA9ICgwLCBfZGVib3VuY2UyLmRlZmF1bHQpKGxhenlMb2FkSGFuZGxlciwgdHlwZW9mIHRoaXMucHJvcHMuZGVib3VuY2UgPT09ICdudW1iZXInID8gdGhpcy5wcm9wcy5kZWJvdW5jZSA6IDMwMCk7XG4gICAgICAgICAgZGVsYXlUeXBlID0gJ2RlYm91bmNlJztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByb3BzLnRocm90dGxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBmaW5hbExhenlMb2FkSGFuZGxlciA9ICgwLCBfdGhyb3R0bGUyLmRlZmF1bHQpKGxhenlMb2FkSGFuZGxlciwgdHlwZW9mIHRoaXMucHJvcHMudGhyb3R0bGUgPT09ICdudW1iZXInID8gdGhpcy5wcm9wcy50aHJvdHRsZSA6IDMwMCk7XG4gICAgICAgICAgZGVsYXlUeXBlID0gJ3Rocm90dGxlJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaW5hbExhenlMb2FkSGFuZGxlciA9IGxhenlMb2FkSGFuZGxlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5vdmVyZmxvdykge1xuICAgICAgICB2YXIgcGFyZW50ID0gKDAsIF9zY3JvbGxQYXJlbnQyLmRlZmF1bHQpKF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKSk7XG4gICAgICAgIC8vIGNvbnN0IHBhcmVudCA9IHNjcm9sbFBhcmVudCh0aGlzLnJlZik7XG4gICAgICAgIGlmIChwYXJlbnQgJiYgdHlwZW9mIHBhcmVudC5nZXRBdHRyaWJ1dGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgbGlzdGVuZXJDb3VudCA9IDEgKyArcGFyZW50LmdldEF0dHJpYnV0ZShMSVNURU5fRkxBRyk7XG4gICAgICAgICAgaWYgKGxpc3RlbmVyQ291bnQgPT09IDEpIHtcbiAgICAgICAgICAgIHBhcmVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmaW5hbExhenlMb2FkSGFuZGxlciwgcGFzc2l2ZUV2ZW50KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFyZW50LnNldEF0dHJpYnV0ZShMSVNURU5fRkxBRywgbGlzdGVuZXJDb3VudCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMCB8fCBuZWVkUmVzZXRGaW5hbExhenlMb2FkSGFuZGxlcikge1xuICAgICAgICB2YXIgX3Byb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHNjcm9sbCA9IF9wcm9wcy5zY3JvbGwsXG4gICAgICAgICAgICByZXNpemUgPSBfcHJvcHMucmVzaXplO1xuXG5cbiAgICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICAgICgwLCBfZXZlbnQub24pKHNjcm9sbHBvcnQsICdzY3JvbGwnLCBmaW5hbExhenlMb2FkSGFuZGxlciwgcGFzc2l2ZUV2ZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXNpemUpIHtcbiAgICAgICAgICAoMCwgX2V2ZW50Lm9uKSh3aW5kb3csICdyZXNpemUnLCBmaW5hbExhenlMb2FkSGFuZGxlciwgcGFzc2l2ZUV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMucHVzaCh0aGlzKTtcbiAgICAgIGNoZWNrVmlzaWJsZSh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUoKSB7XG4gICAgICByZXR1cm4gdGhpcy52aXNpYmxlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NvbXBvbmVudFdpbGxVbm1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5vdmVyZmxvdykge1xuICAgICAgICB2YXIgcGFyZW50ID0gKDAsIF9zY3JvbGxQYXJlbnQyLmRlZmF1bHQpKF9yZWFjdERvbTIuZGVmYXVsdC5maW5kRE9NTm9kZSh0aGlzKSk7XG4gICAgICAgIC8vIGNvbnN0IHBhcmVudCA9IHNjcm9sbFBhcmVudCh0aGlzLnJlZik7XG4gICAgICAgIGlmIChwYXJlbnQgJiYgdHlwZW9mIHBhcmVudC5nZXRBdHRyaWJ1dGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICB2YXIgbGlzdGVuZXJDb3VudCA9ICtwYXJlbnQuZ2V0QXR0cmlidXRlKExJU1RFTl9GTEFHKSAtIDE7XG4gICAgICAgICAgaWYgKGxpc3RlbmVyQ291bnQgPT09IDApIHtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmaW5hbExhenlMb2FkSGFuZGxlciwgcGFzc2l2ZUV2ZW50KTtcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmVBdHRyaWJ1dGUoTElTVEVOX0ZMQUcpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQuc2V0QXR0cmlidXRlKExJU1RFTl9GTEFHLCBsaXN0ZW5lckNvdW50KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGluZGV4ID0gbGlzdGVuZXJzLmluZGV4T2YodGhpcyk7XG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuXG4gICAgICBpZiAobGlzdGVuZXJzLmxlbmd0aCA9PT0gMCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAoMCwgX2V2ZW50Lm9mZikod2luZG93LCAncmVzaXplJywgZmluYWxMYXp5TG9hZEhhbmRsZXIsIHBhc3NpdmVFdmVudCk7XG4gICAgICAgICgwLCBfZXZlbnQub2ZmKSh3aW5kb3csICdzY3JvbGwnLCBmaW5hbExhenlMb2FkSGFuZGxlciwgcGFzc2l2ZUV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy52aXNpYmxlID8gdGhpcy5wcm9wcy5jaGlsZHJlbiA6IHRoaXMucHJvcHMucGxhY2Vob2xkZXIgPyB0aGlzLnByb3BzLnBsYWNlaG9sZGVyIDogX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHsgc3R5bGU6IHsgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB9LCBjbGFzc05hbWU6ICdsYXp5bG9hZC1wbGFjZWhvbGRlcicgfSk7XG4gICAgICAvLyA8c3BhbiByZWY9e3RoaXMuc2V0UmVmfSBjbGFzc05hbWU9XCJsYXp5bG9hZC1jdXN0b20tcGxhY2Vob2xkZXJcIj5cbiAgICAgIC8vICAge3RoaXMucHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAvLyA8L3NwYW4+IDpcbiAgICAgIC8vIDxkaXYgcmVmPXt0aGlzLnNldFJlZn0gc3R5bGU9e3sgaGVpZ2h0OiB0aGlzLnByb3BzLmhlaWdodCB9fSBjbGFzc05hbWU9XCJsYXp5bG9hZC1wbGFjZWhvbGRlclwiIC8+O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBMYXp5TG9hZDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbkxhenlMb2FkLnByb3BUeXBlcyA9IHtcbiAgb25jZTogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBoZWlnaHQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlciwgX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmddKSxcbiAgb2Zmc2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9uZU9mVHlwZShbX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsIF9wcm9wVHlwZXMyLmRlZmF1bHQuYXJyYXlPZihfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlcildKSxcbiAgb3ZlcmZsb3c6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbCxcbiAgcmVzaXplOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIHNjcm9sbDogX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sLFxuICBjaGlsZHJlbjogX3Byb3BUeXBlczIuZGVmYXVsdC5ub2RlLFxuICB0aHJvdHRsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLCBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2xdKSxcbiAgZGVib3VuY2U6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKFtfcHJvcFR5cGVzMi5kZWZhdWx0Lm51bWJlciwgX3Byb3BUeXBlczIuZGVmYXVsdC5ib29sXSksXG4gIHBsYWNlaG9sZGVyOiBfcHJvcFR5cGVzMi5kZWZhdWx0Lm5vZGUsXG4gIHNjcm9sbENvbnRhaW5lcjogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZlR5cGUoW19wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLCBfcHJvcFR5cGVzMi5kZWZhdWx0Lm9iamVjdF0pLFxuICB1bm1vdW50SWZJbnZpc2libGU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuYm9vbFxufTtcblxuTGF6eUxvYWQuZGVmYXVsdFByb3BzID0ge1xuICBvbmNlOiBmYWxzZSxcbiAgb2Zmc2V0OiAwLFxuICBvdmVyZmxvdzogZmFsc2UsXG4gIHJlc2l6ZTogZmFsc2UsXG4gIHNjcm9sbDogdHJ1ZSxcbiAgdW5tb3VudElmSW52aXNpYmxlOiBmYWxzZVxufTtcblxudmFyIGdldERpc3BsYXlOYW1lID0gZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkge1xuICByZXR1cm4gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG59O1xuXG52YXIgZGVjb3JhdG9yID0gZnVuY3Rpb24gZGVjb3JhdG9yKCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHJldHVybiBmdW5jdGlvbiBsYXp5bG9hZChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChfQ29tcG9uZW50Mikge1xuICAgICAgX2luaGVyaXRzKExhenlMb2FkRGVjb3JhdGVkLCBfQ29tcG9uZW50Mik7XG5cbiAgICAgIGZ1bmN0aW9uIExhenlMb2FkRGVjb3JhdGVkKCkge1xuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTGF6eUxvYWREZWNvcmF0ZWQpO1xuXG4gICAgICAgIHZhciBfdGhpczIgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTGF6eUxvYWREZWNvcmF0ZWQuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihMYXp5TG9hZERlY29yYXRlZCkpLmNhbGwodGhpcykpO1xuXG4gICAgICAgIF90aGlzMi5kaXNwbGF5TmFtZSA9ICdMYXp5TG9hZCcgKyBnZXREaXNwbGF5TmFtZShXcmFwcGVkQ29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIF90aGlzMjtcbiAgICAgIH1cblxuICAgICAgX2NyZWF0ZUNsYXNzKExhenlMb2FkRGVjb3JhdGVkLCBbe1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIExhenlMb2FkLFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFdyYXBwZWRDb21wb25lbnQsIHRoaXMucHJvcHMpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gTGF6eUxvYWREZWNvcmF0ZWQ7XG4gICAgfShfcmVhY3QuQ29tcG9uZW50KTtcbiAgfTtcbn07XG5cbmV4cG9ydHMubGF6eWxvYWQgPSBkZWNvcmF0b3I7XG5leHBvcnRzLmRlZmF1bHQgPSBMYXp5TG9hZDtcbmV4cG9ydHMuZm9yY2VDaGVjayA9IGxhenlMb2FkSGFuZGxlcjtcbmV4cG9ydHMuZm9yY2VWaXNpYmxlID0gZm9yY2VWaXNpYmxlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVib3VuY2U7XG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgdmFyIHRpbWVvdXQgPSB2b2lkIDA7XG4gIHZhciBhcmdzID0gdm9pZCAwO1xuICB2YXIgY29udGV4dCA9IHZvaWQgMDtcbiAgdmFyIHRpbWVzdGFtcCA9IHZvaWQgMDtcbiAgdmFyIHJlc3VsdCA9IHZvaWQgMDtcblxuICB2YXIgbGF0ZXIgPSBmdW5jdGlvbiBsYXRlcigpIHtcbiAgICB2YXIgbGFzdCA9ICtuZXcgRGF0ZSgpIC0gdGltZXN0YW1wO1xuXG4gICAgaWYgKGxhc3QgPCB3YWl0ICYmIGxhc3QgPj0gMCkge1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQobGF0ZXIsIHdhaXQgLSBsYXN0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkge1xuICAgICAgICByZXN1bHQgPSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBpZiAoIXRpbWVvdXQpIHtcbiAgICAgICAgICBjb250ZXh0ID0gbnVsbDtcbiAgICAgICAgICBhcmdzID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdGltZXN0YW1wID0gK25ldyBEYXRlKCk7XG5cbiAgICB2YXIgY2FsbE5vdyA9IGltbWVkaWF0ZSAmJiAhdGltZW91dDtcbiAgICBpZiAoIXRpbWVvdXQpIHtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICB9XG5cbiAgICBpZiAoY2FsbE5vdykge1xuICAgICAgcmVzdWx0ID0gZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICAgIGNvbnRleHQgPSBudWxsO1xuICAgICAgYXJncyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMub24gPSBvbjtcbmV4cG9ydHMub2ZmID0gb2ZmO1xuZnVuY3Rpb24gb24oZWwsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwgZmFsc2U7XG4gIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBvcHRzKTtcbiAgfSBlbHNlIGlmIChlbC5hdHRhY2hFdmVudCkge1xuICAgIGVsLmF0dGFjaEV2ZW50KFwib25cIiArIGV2ZW50TmFtZSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGNhbGxiYWNrLmNhbGwoZWwsIGUgfHwgd2luZG93LmV2ZW50KTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZmYoZWwsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwgZmFsc2U7XG4gIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBvcHRzKTtcbiAgfSBlbHNlIGlmIChlbC5kZXRhY2hFdmVudCkge1xuICAgIGVsLmRldGFjaEV2ZW50KFwib25cIiArIGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuICB9XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG4vKipcbiAqIEBmaWxlT3ZlcnZpZXcgRmluZCBzY3JvbGwgcGFyZW50XG4gKi9cblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG5vZGUpIHtcbiAgaWYgKCEobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgIHJldHVybiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cblxuICB2YXIgZXhjbHVkZVN0YXRpY1BhcmVudCA9IG5vZGUuc3R5bGUucG9zaXRpb24gPT09ICdhYnNvbHV0ZSc7XG4gIHZhciBvdmVyZmxvd1JlZ2V4ID0gLyhzY3JvbGx8YXV0bykvO1xuICB2YXIgcGFyZW50ID0gbm9kZTtcblxuICB3aGlsZSAocGFyZW50KSB7XG4gICAgaWYgKCFwYXJlbnQucGFyZW50Tm9kZSkge1xuICAgICAgcmV0dXJuIG5vZGUub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocGFyZW50KTtcbiAgICB2YXIgcG9zaXRpb24gPSBzdHlsZS5wb3NpdGlvbjtcbiAgICB2YXIgb3ZlcmZsb3cgPSBzdHlsZS5vdmVyZmxvdztcbiAgICB2YXIgb3ZlcmZsb3dYID0gc3R5bGVbJ292ZXJmbG93LXgnXTtcbiAgICB2YXIgb3ZlcmZsb3dZID0gc3R5bGVbJ292ZXJmbG93LXknXTtcblxuICAgIGlmIChwb3NpdGlvbiA9PT0gJ3N0YXRpYycgJiYgZXhjbHVkZVN0YXRpY1BhcmVudCkge1xuICAgICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAob3ZlcmZsb3dSZWdleC50ZXN0KG92ZXJmbG93KSAmJiBvdmVyZmxvd1JlZ2V4LnRlc3Qob3ZlcmZsb3dYKSAmJiBvdmVyZmxvd1JlZ2V4LnRlc3Qob3ZlcmZsb3dZKSkge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG5cbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZS5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHRocm90dGxlO1xuLyplc2xpbnQtZGlzYWJsZSAqL1xuZnVuY3Rpb24gdGhyb3R0bGUoZm4sIHRocmVzaGhvbGQsIHNjb3BlKSB7XG4gIHRocmVzaGhvbGQgfHwgKHRocmVzaGhvbGQgPSAyNTApO1xuICB2YXIgbGFzdCwgZGVmZXJUaW1lcjtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY29udGV4dCA9IHNjb3BlIHx8IHRoaXM7XG5cbiAgICB2YXIgbm93ID0gK25ldyBEYXRlKCksXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgaWYgKGxhc3QgJiYgbm93IDwgbGFzdCArIHRocmVzaGhvbGQpIHtcbiAgICAgIC8vIGhvbGQgb24gdG8gaXRcbiAgICAgIGNsZWFyVGltZW91dChkZWZlclRpbWVyKTtcbiAgICAgIGRlZmVyVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGFzdCA9IG5vdztcbiAgICAgICAgZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9LCB0aHJlc2hob2xkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFzdCA9IG5vdztcbiAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH1cbiAgfTtcbn0iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIE5leHRQYWdlXG59IGZyb20gJ25leHQnXG5pbXBvcnQgTGF5b3V0IGZyb20gJ0Bjb21wb25lbnRzL0xheW91dCdcbmltcG9ydCB7XG4gIEFSVElDTEVfREVUQUlMXG59IGZyb20gJ0Bjb25zdGFuY2UvYXBpJ1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCB7XG4gIFBST0pFQ1RfTkFNRVxufSBmcm9tICdAY29uc3RhbmNlL2luZGV4J1xuaW1wb3J0IGh0dHAgZnJvbSAnQHV0aWxzL3JlcSdcbmltcG9ydCBSZWFjdE1hcmtkb3duIGZyb20gJ3JlYWN0LW1hcmtkb3duJ1xuaW1wb3J0ICcuL2RldGFpbC5sZXNzJ1xuaW1wb3J0IENvZGVCbG9jayBmcm9tIFwiQGNvbXBvbmVudHMvQ29kZUJsb2NrXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF6eUxvYWQgZnJvbSAncmVhY3QtbGF6eWxvYWQnXG5cbmltcG9ydCB7IFxuICBJU3RvcmVcbn0gZnJvbSAnQHN0b3JlL3R5cGVzJztcbmltcG9ydCBNYWluQWN0aW9uIGZyb20gJ0Byb290L3N0b3JlL2FjdGlvbnMvaW5kZXgnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJ1xuXG5pbnRlcmZhY2UgSUJsb2dMaXN0Q2F0ZWdvcmllT3JUYWcge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJQmxvZ0RldGFpbCB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgcmVhZENvdW50OiBzdHJpbmc7XG4gIGVkaXREYXRlOiBzdHJpbmc7XG4gIGNyZWF0ZURhdGU6IHN0cmluZztcbiAgdGFnTGlzdHM6IElCbG9nTGlzdENhdGVnb3JpZU9yVGFnW107XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElCbG9nUHJldk5leHQge1xuICBpZDogc3RyaW5nIHwgbnVsbDtcbiAgbmFtZTogc3RyaW5nIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIEJsb2dEZXRhaWxQcm9wcyB7XG4gIGRldGFpbDogSUJsb2dEZXRhaWwsXG4gIG5leHQ6IElCbG9nUHJldk5leHQsXG4gIHByZXY6IElCbG9nUHJldk5leHRcbn1cblxuY29uc3QgQmxvZ0RldGFpbDogTmV4dFBhZ2U8QmxvZ0RldGFpbFByb3BzLCB7fT4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkZXRhaWwsIHByZXYsIG5leHQgfSA9IHByb3BzXG4gIGNvbnN0IGNsYXNzU3RyaW5nID0gY2xhc3NOYW1lcyh7XG4gICAgW2Ake1BST0pFQ1RfTkFNRX0tYmxvZy1kZXRhaWxgXTogdHJ1ZVxuICB9KVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZWxlVG9Ub3AoKVxuICAgIHJlbmRlckltYWdlKClcbiAgfSwgW10pXG5cbiAgY29uc3QgcmVuZGVySW1hZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgaW1ncyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlYWN0LW5leHQtd2ViLWJsb2ctZGV0YWlsIGltZycpKVxuICAgIGltZ3MuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGNvbnN0IHNyYyA9IGl0ZW0uZ2V0QXR0cmlidXRlKCdzcmMnKSB8fCAnJ1xuICAgICAgY29uc3QgYWx0ID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2FsdCcpIHx8ICcnXG4gICAgICBjb25zb2xlLmxvZyhpdGVtLnBhcmVudE5vZGUpXG4gICAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgIDxMYXp5TG9hZD5cbiAgICAgICAgICA8aW1nIHNyYz17c3JjfSBhbHQ9e2FsdH0vPlxuICAgICAgICA8L0xhenlMb2FkPixcbiAgICAgICAgaXRlbSBhcyBFbGVtZW50XG4gICAgICApXG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhpbWdzKVxuICB9XG4gIFxuICBjb25zdCBlbGVUb1RvcCA9ICgpID0+IHtcbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHctbmV4dC1jb250YWluZXInKVxuICAgIGlmIChlbGUpIHtcbiAgICAgIGVsZS5zY3JvbGxUb3AgPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAoXG4gICAgICBkZXRhaWwgJiYgZGV0YWlsLmlkID8gKFxuICAgICAgICA8TGF5b3V0IHRpdGxlPXtkZXRhaWwubmFtZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzU3RyaW5nfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e2Ake2NsYXNzU3RyaW5nfS10aXRsZWB9PntkZXRhaWwubmFtZX08L2gxPlxuICAgICAgICAgICAgPFJlYWN0TWFya2Rvd25cbiAgICAgICAgICAgICAgc291cmNlPXtkZXRhaWwuY29udGVudH1cbiAgICAgICAgICAgICAgZXNjYXBlSHRtbD17ZmFsc2V9XG4gICAgICAgICAgICAgIHJlbmRlcmVycz17e1xuICAgICAgICAgICAgICAgIGNvZGU6IENvZGVCbG9ja1xuICAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3NTdHJpbmd9LWVudHJ5YH0+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcmV2ICYmIHByZXYuaWQgPyAoXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2cvZGV0YWlsP2lkPSR7cHJldi5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtgJHtjbGFzc1N0cmluZ30tZW50cnktcHJldmB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17cHJldi5uYW1lIHx8ICcnfT5cbiAgICAgICAgICAgICAgICAgICAgICB7IHByZXYubmFtZSA/IGDkuIrkuIDnr4cgOiAke3ByZXYubmFtZX1gIDogJycgfVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmV4dCAmJiBuZXh0LmlkID8gKFxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nL2RldGFpbD9pZD0ke25leHQuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17YCR7Y2xhc3NTdHJpbmd9LWVudHJ5LW5leHRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e25leHQubmFtZSB8fCAnJ30+XG4gICAgICAgICAgICAgICAgICAgICAgeyBuZXh0Lm5hbWUgPyBg5LiL5LiA56+HIDogJHtuZXh0Lm5hbWV9YCA6ICcnIH1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rID5cbiAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PuWKoOi9veS4rS4uLjwvZGl2PlxuICAgICAgKVxuICAgIClcbiAgKVxufVxuXG5CbG9nRGV0YWlsLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjdHgpID0+IHtcbiAgY29uc3QgeyBpZCB9ICA9IGN0eC5xdWVyeVxuICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGh0dHAuZ2V0KGAke0FSVElDTEVfREVUQUlMfS8ke2lkfWApXG4gIHJldHVybiB7XG4gICAgZGV0YWlsOiBkYXRhLnJlc3VsdCAmJiBkYXRhLnJlc3VsdC5kZXRhaWwgfHwge30sXG4gICAgbmV4dDogZGF0YS5yZXN1bHQgJiYgZGF0YS5yZXN1bHQubmV4dCB8fCBudWxsLFxuICAgIHByZXY6IGRhdGEucmVzdWx0ICYmIGRhdGEucmVzdWx0LnByZXYgfHwgbnVsbFxuICB9XG59XG5cbmNvbnN0IG1hcFN0YXRlID0gKHN0YXRlOiBJU3RvcmUpID0+ICh7IFxuICBjb250YWluZXJFbGU6IHN0YXRlLmJhc2UuY29udGFpbmVyRWxlXG4gfSlcblxuY29uc3QgbWFwRGlzcGF0Y2ggPSBNYWluQWN0aW9uXG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUsIG1hcERpc3BhdGNoKShCbG9nRGV0YWlsKVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0JBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQTJCQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBU0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFKQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBU0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBR0E7QUFFQTs7OztBIiwic291cmNlUm9vdCI6IiJ9