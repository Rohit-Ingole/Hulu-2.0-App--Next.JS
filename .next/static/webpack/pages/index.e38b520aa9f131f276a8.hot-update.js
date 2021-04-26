webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Results.js":
/*!*******************************!*\
  !*** ./components/Results.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Thumbnail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Thumbnail */ "./components/Thumbnail.js");
/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-flip-move */ "./node_modules/react-flip-move/dist/react-flip-move.es.js");

var _jsxFileName = "F:\\React JS\\hulu-v2-app\\components\\Results.js";



function Results(_ref) {
  var _this = this;

  var results = _ref.results;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_flip_move__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center",
    children: results.map(function (result) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Thumbnail__WEBPACK_IMPORTED_MODULE_1__["default"], {
        result: result
      }, result.id, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = Results;
/* harmony default export */ __webpack_exports__["default"] = (Results);

var _c;

$RefreshReg$(_c, "Results");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Thumbnail.js":
/*!*********************************!*\
  !*** ./components/Thumbnail.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "F:\\React JS\\hulu-v2-app\\components\\Thumbnail.js",
    _this = undefined;




var Thumbnail = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(_c = function _c(_ref, ref) {
  var result = _ref.result;
  var BASE_URL = "https://image.tmdb.org/t/p/original/";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: ref,
    className: "group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
      layout: "responsive",
      src: "".concat(BASE_URL).concat(result.backdrop_path || result.poster_path) || "".concat(BASE_URL).concat(result.poster_path),
      height: "1080",
      width: "1920"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "truncate max-w-md",
        children: result.overview
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold",
        children: result.title || result.original_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "flex items-center opacity-0 group-hover:opacity-100",
        children: [result.media_type && "".concat(result.media_type, " ."), " ", result.release_date || result.first_air_date, " .", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__["ThumbUpIcon"], {
          className: "h-5 mx-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this), result.vote_count]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
});
_c2 = Thumbnail;
/* harmony default export */ __webpack_exports__["default"] = (Thumbnail);

var _c, _c2;

$RefreshReg$(_c, "Thumbnail$forwardRef");
$RefreshReg$(_c2, "Thumbnail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/react-flip-move/dist/react-flip-move.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-flip-move/dist/react-flip-move.es.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



function warnOnce(msg) {
  var hasWarned = false;
  return function () {
    if (!hasWarned) {
      console.warn(msg);
      hasWarned = true;
    }
  };
}


var statelessFunctionalComponentSupplied = warnOnce('\n>> Error, via react-flip-move <<\n\nYou provided a stateless functional component as a child to <FlipMove>. Unfortunately, SFCs aren\'t supported, because Flip Move needs access to the backing instances via refs, and SFCs don\'t have a public instance that holds that info.\n\nPlease wrap your components in a native element (eg. <div>), or a non-functional component.\n');

var primitiveNodeSupplied = warnOnce('\n>> Error, via react-flip-move <<\n\nYou provided a primitive (text or number) node as a child to <FlipMove>. Flip Move needs containers with unique keys to move children around.\n\nPlease wrap your value in a native element (eg. <span>), or a component.\n');

var invalidTypeForTimingProp = function invalidTypeForTimingProp(args
// prettier-ignore
) {
  return console.error('\n>> Error, via react-flip-move <<\n\nThe prop you provided for \'' + args.prop + '\' is invalid. It needs to be a positive integer, or a string that can be resolved to a number. The value you provided is \'' + args.value + '\'.\n\nAs a result,  the default value for this parameter will be used, which is \'' + args.defaultValue + '\'.\n');
};

var invalidEnterLeavePreset = function invalidEnterLeavePreset(args
// prettier-ignore
) {
  return console.error('\n>> Error, via react-flip-move <<\n\nThe enter/leave preset you provided is invalid. We don\'t currently have a \'' + args.value + ' preset.\'\n\nAcceptable values are ' + args.acceptableValues + '. The default value of \'' + args.defaultValue + '\' will be used.\n');
};

var parentNodePositionStatic = warnOnce('\n>> Warning, via react-flip-move <<\n\nWhen using "wrapperless" mode (by supplying \'typeName\' of \'null\'), strange things happen when the direct parent has the default "static" position.\n\nFlipMove has added \'position: relative\' to this node, to ensure Flip Move animates correctly.\n\nTo avoid seeing this warning, simply apply a non-static position to that parent node.\n');

var childIsDisabled = warnOnce('\n>> Warning, via react-flip-move <<\n\nOne or more of Flip Move\'s child elements have the html attribute \'disabled\' set to true.\n\nPlease note that this will cause animations to break in Internet Explorer 11 and below. Either remove the disabled attribute or set \'animation\' to false.\n');

var enterPresets = {
  elevator: {
    from: { transform: 'scale(0)', opacity: '0' },
    to: { transform: '', opacity: '' }
  },
  fade: {
    from: { opacity: '0' },
    to: { opacity: '' }
  },
  accordionVertical: {
    from: { transform: 'scaleY(0)', transformOrigin: 'center top' },
    to: { transform: '', transformOrigin: 'center top' }
  },
  accordionHorizontal: {
    from: { transform: 'scaleX(0)', transformOrigin: 'left center' },
    to: { transform: '', transformOrigin: 'left center' }
  },
  none: null
};
/**
 * React Flip Move | enterLeavePresets
 * (c) 2016-present Joshua Comeau
 *
 * This contains the master list of presets available for enter/leave animations,
 * along with the mapping between preset and styles.
 */


var leavePresets = {
  elevator: {
    from: { transform: 'scale(1)', opacity: '1' },
    to: { transform: 'scale(0)', opacity: '0' }
  },
  fade: {
    from: { opacity: '1' },
    to: { opacity: '0' }
  },
  accordionVertical: {
    from: { transform: 'scaleY(1)', transformOrigin: 'center top' },
    to: { transform: 'scaleY(0)', transformOrigin: 'center top' }
  },
  accordionHorizontal: {
    from: { transform: 'scaleX(1)', transformOrigin: 'left center' },
    to: { transform: 'scaleX(0)', transformOrigin: 'left center' }
  },
  none: null
};

// For now, appearPresets will be identical to enterPresets.
// Assigning a custom export in case we ever want to add appear-specific ones.
var appearPresets = enterPresets;

var defaultPreset = 'elevator';
var disablePreset = 'none';

var find = function find(predicate, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) {
      return arr[i];
    }
  }

  return undefined;
};


var every = function every(predicate, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (!predicate(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
};

// eslint-disable-next-line import/no-mutable-exports
var _isArray = function isArray(arr) {
  _isArray = Array.isArray || function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
  return _isArray(arr);
};

var isElementAnSFC = function isElementAnSFC(element) {
  var isNativeDOMElement = typeof element.type === 'string';

  if (isNativeDOMElement) {
    return false;
  }

  return typeof element.type === 'function' && !element.type.prototype.isReactComponent;
};

function omit(obj) {
  var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (attrs.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}

function arraysEqual(a, b) {
  var sameObject = a === b;
  if (sameObject) {
    return true;
  }

  var notBothArrays = !_isArray(a) || !_isArray(b);
  var differentLengths = a.length !== b.length;

  if (notBothArrays || differentLengths) {
    return false;
  }

  return every(function (element, index) {
    return element === b[index];
  }, a);
}

function memoizeString(fn) {
  var cache = {};

  return function (str) {
    if (!cache[str]) {
      cache[str] = fn(str);
    }
    return cache[str];
  };
}

var hyphenate = memoizeString(function (str) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

/**
 * React Flip Move | propConverter
 * (c) 2016-present Joshua Comeau
 *
 * Abstracted away a bunch of the messy business with props.
 *   - props flow types and defaultProps
 *   - Type conversion (We accept 'string' and 'number' values for duration,
 *     delay, and other fields, but we actually need them to be ints.)
 *   - Children conversion (we need the children to be an array. May not always
 *     be, if a single child is passed in.)
 *   - Resolving animation presets into their base CSS styles
 */
/* eslint-disable block-scoped-var */

// eslint-disable-next-line no-duplicate-imports


function propConverter(ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    inherits(FlipMovePropConverter, _Component);

    function FlipMovePropConverter() {
      classCallCheck(this, FlipMovePropConverter);
      return possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    // eslint-disable-next-line class-methods-use-this
    FlipMovePropConverter.prototype.checkChildren = function checkChildren(children) {
      // Skip all console warnings in production.
      // Bail early, to avoid unnecessary work.
      if (false) {}

      // same as React.Node, but without fragments, see https://github.com/facebook/flow/issues/4781


      // FlipMove does not support stateless functional components.
      // Check to see if any supplied components won't work.
      // If the child doesn't have a key, it means we aren't animating it.
      // It's allowed to be an SFC, since we ignore it.
      react__WEBPACK_IMPORTED_MODULE_0__["Children"].forEach(children, function (child) {
        // null, undefined, and booleans will be filtered out by Children.toArray
        if (child == null || typeof child === 'boolean') {
          return;
        }

        if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) !== 'object') {
          primitiveNodeSupplied();
          return;
        }

        if (isElementAnSFC(child) && child.key != null) {
          statelessFunctionalComponentSupplied();
        }
      });
    };

    FlipMovePropConverter.prototype.convertProps = function convertProps(props) {
      var workingProps = {
        // explicitly bypass the props that don't need conversion
        children: props.children,
        easing: props.easing,
        onStart: props.onStart,
        onFinish: props.onFinish,
        onStartAll: props.onStartAll,
        onFinishAll: props.onFinishAll,
        typeName: props.typeName,
        disableAllAnimations: props.disableAllAnimations,
        getPosition: props.getPosition,
        maintainContainerHeight: props.maintainContainerHeight,
        verticalAlignment: props.verticalAlignment,

        // Do string-to-int conversion for all timing-related props
        duration: this.convertTimingProp('duration'),
        delay: this.convertTimingProp('delay'),
        staggerDurationBy: this.convertTimingProp('staggerDurationBy'),
        staggerDelayBy: this.convertTimingProp('staggerDelayBy'),

        // Our enter/leave animations can be specified as boolean (default or
        // disabled), string (preset name), or object (actual animation values).
        // Let's standardize this so that they're always objects
        appearAnimation: this.convertAnimationProp(props.appearAnimation, appearPresets),
        enterAnimation: this.convertAnimationProp(props.enterAnimation, enterPresets),
        leaveAnimation: this.convertAnimationProp(props.leaveAnimation, leavePresets),

        delegated: {}
      };

      this.checkChildren(workingProps.children);

      // Gather any additional props;
      // they will be delegated to the ReactElement created.
      var primaryPropKeys = Object.keys(workingProps);
      var delegatedProps = omit(this.props, primaryPropKeys);

      // The FlipMove container element needs to have a non-static position.
      // We use `relative` by default, but it can be overridden by the user.
      // Now that we're delegating props, we need to merge this in.
      delegatedProps.style = _extends({
        position: 'relative'
      }, delegatedProps.style);

      workingProps.delegated = delegatedProps;

      return workingProps;
    };

    FlipMovePropConverter.prototype.convertTimingProp = function convertTimingProp(prop) {
      var rawValue = this.props[prop];

      var value = typeof rawValue === 'number' ? rawValue : parseInt(rawValue, 10);

      if (isNaN(value)) {
        var defaultValue = FlipMovePropConverter.defaultProps[prop];

        if (true) {
          invalidTypeForTimingProp({
            prop: prop,
            value: rawValue,
            defaultValue: defaultValue
          });
        }

        return defaultValue;
      }

      return value;
    };

    // eslint-disable-next-line class-methods-use-this


    FlipMovePropConverter.prototype.convertAnimationProp = function convertAnimationProp(animation, presets) {
      switch (typeof animation === 'undefined' ? 'undefined' : _typeof(animation)) {
        case 'boolean':
          {
            // If it's true, we want to use the default preset.
            // If it's false, we want to use the 'none' preset.
            return presets[animation ? defaultPreset : disablePreset];
          }

        case 'string':
          {
            var presetKeys = Object.keys(presets);

            if (presetKeys.indexOf(animation) === -1) {
              if (true) {
                invalidEnterLeavePreset({
                  value: animation,
                  acceptableValues: presetKeys.join(', '),
                  defaultValue: defaultPreset
                });
              }

              return presets[defaultPreset];
            }

            return presets[animation];
          }

        default:
          {
            return animation;
          }
      }
    };

    FlipMovePropConverter.prototype.render = function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComposedComponent, this.convertProps(this.props));
    };

    return FlipMovePropConverter;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.defaultProps = {
    easing: 'ease-in-out',
    duration: 350,
    delay: 0,
    staggerDurationBy: 0,
    staggerDelayBy: 0,
    typeName: 'div',
    enterAnimation: defaultPreset,
    leaveAnimation: defaultPreset,
    disableAllAnimations: false,
    getPosition: function getPosition(node) {
      return node.getBoundingClientRect();
    },
    maintainContainerHeight: false,
    verticalAlignment: 'top'
  }, _temp;
}

/**
 * React Flip Move
 * (c) 2016-present Joshua Comeau
 *
 * These methods read from and write to the DOM.
 * They almost always have side effects, and will hopefully become the
 * only spot in the codebase with impure functions.
 */
function applyStylesToDOMNode(_ref) {
  var domNode = _ref.domNode,
      styles = _ref.styles;

  // Can't just do an object merge because domNode.styles is no regular object.
  // Need to do it this way for the engine to fire its `set` listeners.
  Object.keys(styles).forEach(function (key) {
    domNode.style.setProperty(hyphenate(key), styles[key]);
  });
}

// Modified from Modernizr
function whichTransitionEvent() {
  var transitions = {
    transition: 'transitionend',
    '-o-transition': 'oTransitionEnd',
    '-moz-transition': 'transitionend',
    '-webkit-transition': 'webkitTransitionEnd'
  };

  // If we're running in a browserless environment (eg. SSR), it doesn't apply.
  // Return a placeholder string, for consistent type return.
  if (typeof document === 'undefined') return '';

  var el = document.createElement('fakeelement');

  var match = find(function (t) {
    return el.style.getPropertyValue(t) !== undefined;
  }, Object.keys(transitions));

  // If no `transition` is found, we must be running in a browser so ancient,
  // React itself won't run. Return an empty string, for consistent type return
  return match ? transitions[match] : '';
}

var getRelativeBoundingBox = function getRelativeBoundingBox(_ref2) {
  var childDomNode = _ref2.childDomNode,
      parentDomNode = _ref2.parentDomNode,
      getPosition = _ref2.getPosition;

  var parentBox = getPosition(parentDomNode);

  var _getPosition = getPosition(childDomNode),
      top = _getPosition.top,
      left = _getPosition.left,
      right = _getPosition.right,
      bottom = _getPosition.bottom,
      width = _getPosition.width,
      height = _getPosition.height;

  return {
    top: top - parentBox.top,
    left: left - parentBox.left,
    right: parentBox.right - right,
    bottom: parentBox.bottom - bottom,
    width: width,
    height: height
  };
};

/** getPositionDelta
 * This method returns the delta between two bounding boxes, to figure out
 * how many pixels on each axis the element has moved.
 *
 */
var getPositionDelta = function getPositionDelta(_ref3) {
  var childDomNode = _ref3.childDomNode,
      childBoundingBox = _ref3.childBoundingBox,
      parentBoundingBox = _ref3.parentBoundingBox,
      getPosition = _ref3.getPosition;

  // TEMP: A mystery bug is sometimes causing unnecessary boundingBoxes to
  var defaultBox = {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 0,
    width: 0
  };

  // Our old box is its last calculated position, derived on mount or at the
  // start of the previous animation.
  var oldRelativeBox = childBoundingBox || defaultBox;
  var parentBox = parentBoundingBox || defaultBox;

  // Our new box is the new final resting place: Where we expect it to wind up
  // after the animation. First we get the box in absolute terms (AKA relative
  // to the viewport), and then we calculate its relative box (relative to the
  // parent container)
  var newAbsoluteBox = getPosition(childDomNode);
  var newRelativeBox = {
    top: newAbsoluteBox.top - parentBox.top,
    left: newAbsoluteBox.left - parentBox.left
  };

  return [oldRelativeBox.left - newRelativeBox.left, oldRelativeBox.top - newRelativeBox.top];
};

/** removeNodeFromDOMFlow
 * This method does something very sneaky: it removes a DOM node from the
 * document flow, but without actually changing its on-screen position.
 *
 * It works by calculating where the node is, and then applying styles
 * so that it winds up being positioned absolutely, but in exactly the
 * same place.
 *
 * This is a vital part of the FLIP technique.
 */
var removeNodeFromDOMFlow = function removeNodeFromDOMFlow(childData, verticalAlignment) {
  var domNode = childData.domNode,
      boundingBox = childData.boundingBox;


  if (!domNode || !boundingBox) {
    return;
  }

  // For this to work, we have to offset any given `margin`.
  var computed = window.getComputedStyle(domNode);

  // We need to clean up margins, by converting and removing suffix:
  // eg. '21px' -> 21
  var marginAttrs = ['margin-top', 'margin-left', 'margin-right'];
  var margins = marginAttrs.reduce(function (acc, margin) {
    var _babelHelpers$extends;

    var propertyVal = computed.getPropertyValue(margin);

    return _extends({}, acc, (_babelHelpers$extends = {}, _babelHelpers$extends[margin] = Number(propertyVal.replace('px', '')), _babelHelpers$extends));
  }, {});

  // If we're bottom-aligned, we need to add the height of the child to its
  // top offset. This is because, when the container is bottom-aligned, its
  // height shrinks from the top, not the bottom. We're removing this node
  // from the flow, so the top is going to drop by its height.
  var topOffset = verticalAlignment === 'bottom' ? boundingBox.top - boundingBox.height : boundingBox.top;

  var styles = {
    position: 'absolute',
    top: topOffset - margins['margin-top'] + 'px',
    left: boundingBox.left - margins['margin-left'] + 'px',
    right: boundingBox.right - margins['margin-right'] + 'px'
  };

  applyStylesToDOMNode({ domNode: domNode, styles: styles });
};

/** updateHeightPlaceholder
 * An optional property to FlipMove is a `maintainContainerHeight` boolean.
 * This property creates a node that fills space, so that the parent
 * container doesn't collapse when its children are removed from the
 * document flow.
 */
var updateHeightPlaceholder = function updateHeightPlaceholder(_ref4) {
  var domNode = _ref4.domNode,
      parentData = _ref4.parentData,
      getPosition = _ref4.getPosition;

  var parentDomNode = parentData.domNode;
  var parentBoundingBox = parentData.boundingBox;

  if (!parentDomNode || !parentBoundingBox) {
    return;
  }

  // We need to find the height of the container *without* the placeholder.
  // Since it's possible that the placeholder might already be present,
  // we first set its height to 0.
  // This allows the container to collapse down to the size of just its
  // content (plus container padding or borders if any).
  applyStylesToDOMNode({ domNode: domNode, styles: { height: '0' } });

  // Find the distance by which the container would be collapsed by elements
  // leaving. We compare the freshly-available parent height with the original,
  // cached container height.
  var originalParentHeight = parentBoundingBox.height;
  var collapsedParentHeight = getPosition(parentDomNode).height;
  var reductionInHeight = originalParentHeight - collapsedParentHeight;

  // If the container has become shorter, update the padding element's
  // height to take up the difference. Otherwise set its height to zero,
  // so that it has no effect.
  var styles = {
    height: reductionInHeight > 0 ? reductionInHeight + 'px' : '0'
  };

  applyStylesToDOMNode({ domNode: domNode, styles: styles });
};

var getNativeNode = function getNativeNode(element) {
  // When running in a windowless environment, abort!
  if (typeof HTMLElement === 'undefined') {
    return null;
  }

  // `element` may already be a native node.
  if (element instanceof HTMLElement) {
    return element;
  }

  // While ReactDOM's `findDOMNode` is discouraged, it's the only
  // publicly-exposed way to find the underlying DOM node for
  // composite components.
  var foundNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(element);

  if (foundNode && foundNode.nodeType === Node.TEXT_NODE) {
    // Text nodes are not supported
    return null;
  }
  // eslint-disable-next-line flowtype/no-weak-types
  return foundNode;
};

var createTransitionString = function createTransitionString(index, props) {
  var delay = props.delay,
      duration = props.duration;
  var staggerDurationBy = props.staggerDurationBy,
      staggerDelayBy = props.staggerDelayBy,
      easing = props.easing;


  delay += index * staggerDelayBy;
  duration += index * staggerDurationBy;

  var cssProperties = ['transform', 'opacity'];

  return cssProperties.map(function (prop) {
    return prop + ' ' + duration + 'ms ' + easing + ' ' + delay + 'ms';
  }).join(', ');
};

/**
 * React Flip Move
 * (c) 2016-present Joshua Comeau
 *
 * For information on how this code is laid out, check out CODE_TOUR.md
 */

/* eslint-disable react/prop-types */

// eslint-disable-next-line no-duplicate-imports


var transitionEnd = whichTransitionEvent();
var noBrowserSupport = !transitionEnd;

function getKey(childData) {
  return childData.key || '';
}

function getElementChildren(children) {
  // Fix incomplete typing of Children.toArray
  // eslint-disable-next-line flowtype/no-weak-types
  return react__WEBPACK_IMPORTED_MODULE_0__["Children"].toArray(children);
}

var FlipMove$1 = function (_Component) {
  inherits(FlipMove, _Component);

  function FlipMove() {
    var _temp, _this, _ret;

    classCallCheck(this, FlipMove);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      children: getElementChildren(
      // `this.props` ought to always be defined at this point, but a report
      // was made about it not being defined in IE10.
      // TODO: Test in IE10, to see if there's an underlying cause that can
      // be addressed.
      _this.props ? _this.props.children : []).map(function (element) {
        return _extends({}, element, {
          element: element,
          appearing: true
        });
      })
    }, _this.childrenData = {}, _this.parentData = {
      domNode: null,
      boundingBox: null
    }, _this.heightPlaceholderData = {
      domNode: null
    }, _this.remainingAnimations = 0, _this.childrenToAnimate = [], _this.findDOMContainer = function () {
      // eslint-disable-next-line react/no-find-dom-node
      var domNode = react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.findDOMNode(_this);
      var parentNode = domNode && domNode.parentNode;

      // This ought to be impossible, but handling it for Flow's sake.
      if (!parentNode || !(parentNode instanceof HTMLElement)) {
        return;
      }

      // If the parent node has static positioning, leave animations might look
      // really funky. Let's automatically apply `position: relative` in this
      // case, to prevent any quirkiness.
      if (window.getComputedStyle(parentNode).position === 'static') {
        parentNode.style.position = 'relative';
        parentNodePositionStatic();
      }

      _this.parentData.domNode = parentNode;
    }, _this.runAnimation = function () {
      var dynamicChildren = _this.state.children.filter(_this.doesChildNeedToBeAnimated);

      // Splitting DOM reads and writes to be peformed in batches
      var childrenInitialStyles = dynamicChildren.map(function (child) {
        return _this.computeInitialStyles(child);
      });
      dynamicChildren.forEach(function (child, index) {
        _this.remainingAnimations += 1;
        _this.childrenToAnimate.push(getKey(child));
        _this.animateChild(child, index, childrenInitialStyles[index]);
      });

      if (typeof _this.props.onStartAll === 'function') {
        _this.callChildrenHook(_this.props.onStartAll);
      }
    }, _this.doesChildNeedToBeAnimated = function (child) {
      // If the child doesn't have a key, it's an immovable child (one that we
      // do not want to do FLIP stuff to.)
      if (!getKey(child)) {
        return false;
      }

      var childData = _this.getChildData(getKey(child));
      var childDomNode = childData.domNode;
      var childBoundingBox = childData.boundingBox;
      var parentBoundingBox = _this.parentData.boundingBox;

      if (!childDomNode) {
        return false;
      }

      var _this$props = _this.props,
          appearAnimation = _this$props.appearAnimation,
          enterAnimation = _this$props.enterAnimation,
          leaveAnimation = _this$props.leaveAnimation,
          getPosition = _this$props.getPosition;


      var isAppearingWithAnimation = child.appearing && appearAnimation;
      var isEnteringWithAnimation = child.entering && enterAnimation;
      var isLeavingWithAnimation = child.leaving && leaveAnimation;

      if (isAppearingWithAnimation || isEnteringWithAnimation || isLeavingWithAnimation) {
        return true;
      }

      // If it isn't entering/leaving, we want to animate it if it's
      // on-screen position has changed.

      var _getPositionDelta = getPositionDelta({
        childDomNode: childDomNode,
        childBoundingBox: childBoundingBox,
        parentBoundingBox: parentBoundingBox,
        getPosition: getPosition
      }),
          dX = _getPositionDelta[0],
          dY = _getPositionDelta[1];

      return dX !== 0 || dY !== 0;
    }, _temp), possibleConstructorReturn(_this, _ret);
  }
  // Copy props.children into state.
  // To understand why this is important (and not an anti-pattern), consider
  // how "leave" animations work. An item has "left" when the component
  // receives a new set of props that do NOT contain the item.
  // If we just render the props as-is, the item would instantly disappear.
  // We want to keep the item rendered for a little while, until its animation
  // can complete. Because we cannot mutate props, we make `state` the source
  // of truth.


  // FlipMove needs to know quite a bit about its children in order to do
  // its job. We store these as a property on the instance. We're not using
  // state, because we don't want changes to trigger re-renders, we just
  // need a place to keep the data for reference, when changes happen.
  // This field should not be accessed directly. Instead, use getChildData,
  // putChildData, etc...


  // Similarly, track the dom node and box of our parent element.


  // If `maintainContainerHeight` prop is set to true, we'll create a
  // placeholder element which occupies space so that the parent height
  // doesn't change when items are removed from the document flow (which
  // happens during leave animations)


  // Keep track of remaining animations so we know when to fire the
  // all-finished callback, and clean up after ourselves.
  // NOTE: we can't simply use childrenToAnimate.length to track remaining
  // animations, because we need to maintain the list of animating children,
  // to pass to the `onFinishAll` handler.


  FlipMove.prototype.componentDidMount = function componentDidMount() {
    // Because React 16 no longer requires wrapping elements, Flip Move can opt
    // to not wrap the children in an element. In that case, find the parent
    // element using `findDOMNode`.
    if (this.props.typeName === null) {
      this.findDOMContainer();
    }

    // Run our `appearAnimation` if it was requested, right after the
    // component mounts.
    var shouldTriggerFLIP = this.props.appearAnimation && !this.isAnimationDisabled(this.props);

    if (shouldTriggerFLIP) {
      this.prepForAnimation();
      this.runAnimation();
    }
  };

  FlipMove.prototype.componentDidUpdate = function componentDidUpdate(previousProps) {
    if (this.props.typeName === null) {
      this.findDOMContainer();
    }
    // If the children have been re-arranged, moved, or added/removed,
    // trigger the main FLIP animation.
    //
    // IMPORTANT: We need to make sure that the children have actually changed.
    // At the end of the transition, we clean up nodes that need to be removed.
    // We DON'T want this cleanup to trigger another update.

    var oldChildrenKeys = getElementChildren(this.props.children).map(function (d) {
      return d.key;
    });
    var nextChildrenKeys = getElementChildren(previousProps.children).map(function (d) {
      return d.key;
    });

    var shouldTriggerFLIP = !arraysEqual(oldChildrenKeys, nextChildrenKeys) && !this.isAnimationDisabled(this.props);

    if (shouldTriggerFLIP) {
      this.prepForAnimation();
      this.runAnimation();
    }
  };

  FlipMove.prototype.calculateNextSetOfChildren = function calculateNextSetOfChildren(nextChildren) {
    var _this2 = this;

    // We want to:
    //   - Mark all new children as `entering`
    //   - Pull in previous children that aren't in nextChildren, and mark them
    //     as `leaving`
    //   - Preserve the nextChildren list order, with leaving children in their
    //     appropriate places.
    //

    var updatedChildren = nextChildren.map(function (nextChild) {
      var child = _this2.findChildByKey(nextChild.key);

      // If the current child did exist, but it was in the midst of leaving,
      // we want to treat it as though it's entering
      var isEntering = !child || child.leaving;

      return _extends({}, nextChild, { element: nextChild, entering: isEntering });
    });

    // This is tricky. We want to keep the nextChildren's ordering, but with
    // any just-removed items maintaining their original position.
    // eg.
    //   this.state.children  = [ 1, 2, 3, 4 ]
    //   nextChildren         = [ 3, 1 ]
    //
    // In this example, we've removed the '2' & '4'
    // We want to end up with:  [ 2, 3, 1, 4 ]
    //
    // To accomplish that, we'll iterate through this.state.children. whenever
    // we find a match, we'll append our `leaving` flag to it, and insert it
    // into the nextChildren in its ORIGINAL position. Note that, as we keep
    // inserting old items into the new list, the "original" position will
    // keep incrementing.
    var numOfChildrenLeaving = 0;
    this.state.children.forEach(function (child, index) {
      var isLeaving = !find(function (_ref) {
        var key = _ref.key;
        return key === getKey(child);
      }, nextChildren);

      // If the child isn't leaving (or, if there is no leave animation),
      // we don't need to add it into the state children.
      if (!isLeaving || !_this2.props.leaveAnimation) return;

      var nextChild = _extends({}, child, { leaving: true });
      var nextChildIndex = index + numOfChildrenLeaving;

      updatedChildren.splice(nextChildIndex, 0, nextChild);
      numOfChildrenLeaving += 1;
    });

    return updatedChildren;
  };

  FlipMove.prototype.prepForAnimation = function prepForAnimation() {
    var _this3 = this;

    // Our animation prep consists of:
    // - remove children that are leaving from the DOM flow, so that the new
    //   layout can be accurately calculated,
    // - update the placeholder container height, if needed, to ensure that
    //   the parent's height doesn't collapse.

    var _props = this.props,
        leaveAnimation = _props.leaveAnimation,
        maintainContainerHeight = _props.maintainContainerHeight,
        getPosition = _props.getPosition;

    // we need to make all leaving nodes "invisible" to the layout calculations
    // that will take place in the next step (this.runAnimation).

    if (leaveAnimation) {
      var leavingChildren = this.state.children.filter(function (child) {
        return child.leaving;
      });

      leavingChildren.forEach(function (leavingChild) {
        var childData = _this3.getChildData(getKey(leavingChild));

        // Warn if child is disabled
        if (!_this3.isAnimationDisabled(_this3.props) && childData.domNode && childData.domNode.disabled) {
          childIsDisabled();
        }

        // We need to take the items out of the "flow" of the document, so that
        // its siblings can move to take its place.
        if (childData.boundingBox) {
          removeNodeFromDOMFlow(childData, _this3.props.verticalAlignment);
        }
      });

      if (maintainContainerHeight && this.heightPlaceholderData.domNode) {
        updateHeightPlaceholder({
          domNode: this.heightPlaceholderData.domNode,
          parentData: this.parentData,
          getPosition: getPosition
        });
      }
    }

    // For all children not in the middle of entering or leaving,
    // we need to reset the transition, so that the NEW shuffle starts from
    // the right place.
    this.state.children.forEach(function (child) {
      var _getChildData = _this3.getChildData(getKey(child)),
          domNode = _getChildData.domNode;

      // Ignore children that don't render DOM nodes (eg. by returning null)


      if (!domNode) {
        return;
      }

      if (!child.entering && !child.leaving) {
        applyStylesToDOMNode({
          domNode: domNode,
          styles: {
            transition: ''
          }
        });
      }
    });
  };

  // eslint-disable-next-line camelcase


  FlipMove.prototype.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    // When the component is handed new props, we need to figure out the
    // "resting" position of all currently-rendered DOM nodes.
    // We store that data in this.parent and this.children,
    // so it can be used later to work out the animation.
    this.updateBoundingBoxCaches();

    // Convert opaque children object to array.
    var nextChildren = getElementChildren(nextProps.children);

    // Next, we need to update our state, so that it contains our new set of
    // children. If animation is disabled or unsupported, this is easy;
    // we just copy our props into state.
    // Assuming that we can animate, though, we have to do some work.
    // Essentially, we want to keep just-deleted nodes in the DOM for a bit
    // longer, so that we can animate them away.
    this.setState({
      children: this.isAnimationDisabled(nextProps) ? nextChildren.map(function (element) {
        return _extends({}, element, { element: element });
      }) : this.calculateNextSetOfChildren(nextChildren)
    });
  };

  FlipMove.prototype.animateChild = function animateChild(child, index, childInitialStyles) {
    var _this4 = this;

    var _getChildData2 = this.getChildData(getKey(child)),
        domNode = _getChildData2.domNode;

    if (!domNode) {
      return;
    }

    // Apply the relevant style for this DOM node
    // This is the offset from its actual DOM position.
    // eg. if an item has been re-rendered 20px lower, we want to apply a
    // style of 'transform: translate(-20px)', so that it appears to be where
    // it started.
    // In FLIP terminology, this is the 'Invert' stage.
    applyStylesToDOMNode({
      domNode: domNode,
      styles: childInitialStyles
    });

    // Start by invoking the onStart callback for this child.
    if (this.props.onStart) this.props.onStart(child, domNode);

    // Next, animate the item from it's artificially-offset position to its
    // new, natural position.
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        // NOTE, RE: the double-requestAnimationFrame:
        // Sadly, this is the most browser-compatible way to do this I've found.
        // Essentially we need to set the initial styles outside of any request
        // callbacks to avoid batching them. Then, a frame needs to pass with
        // the styles above rendered. Then, on the second frame, we can apply
        // our final styles to perform the animation.

        // Our first order of business is to "undo" the styles applied in the
        // previous frames, while also adding a `transition` property.
        // This way, the item will smoothly transition from its old position
        // to its new position.

        // eslint-disable-next-line flowtype/require-variable-type
        var styles = {
          transition: createTransitionString(index, _this4.props),
          transform: '',
          opacity: ''
        };

        if (child.appearing && _this4.props.appearAnimation) {
          styles = _extends({}, styles, _this4.props.appearAnimation.to);
        } else if (child.entering && _this4.props.enterAnimation) {
          styles = _extends({}, styles, _this4.props.enterAnimation.to);
        } else if (child.leaving && _this4.props.leaveAnimation) {
          styles = _extends({}, styles, _this4.props.leaveAnimation.to);
        }

        // In FLIP terminology, this is the 'Play' stage.
        applyStylesToDOMNode({ domNode: domNode, styles: styles });
      });
    });

    this.bindTransitionEndHandler(child);
  };

  FlipMove.prototype.bindTransitionEndHandler = function bindTransitionEndHandler(child) {
    var _this5 = this;

    var _getChildData3 = this.getChildData(getKey(child)),
        domNode = _getChildData3.domNode;

    if (!domNode) {
      return;
    }

    // The onFinish callback needs to be bound to the transitionEnd event.
    // We also need to unbind it when the transition completes, so this ugly
    // inline function is required (we need it here so it closes over
    // dependent variables `child` and `domNode`)
    var transitionEndHandler = function transitionEndHandler(ev) {
      // It's possible that this handler is fired not on our primary transition,
      // but on a nested transition (eg. a hover effect). Ignore these cases.
      if (ev.target !== domNode) return;

      // Remove the 'transition' inline style we added. This is cleanup.
      domNode.style.transition = '';

      // Trigger any applicable onFinish/onFinishAll hooks
      _this5.triggerFinishHooks(child, domNode);

      domNode.removeEventListener(transitionEnd, transitionEndHandler);

      if (child.leaving) {
        _this5.removeChildData(getKey(child));
      }
    };

    domNode.addEventListener(transitionEnd, transitionEndHandler);
  };

  FlipMove.prototype.triggerFinishHooks = function triggerFinishHooks(child, domNode) {
    var _this6 = this;

    if (this.props.onFinish) this.props.onFinish(child, domNode);

    // Reduce the number of children we need to animate by 1,
    // so that we can tell when all children have finished.
    this.remainingAnimations -= 1;

    if (this.remainingAnimations === 0) {
      // Remove any items from the DOM that have left, and reset `entering`.
      var nextChildren = this.state.children.filter(function (_ref2) {
        var leaving = _ref2.leaving;
        return !leaving;
      }).map(function (item) {
        return _extends({}, item, {
          // fix for Flow
          element: item.element,
          appearing: false,
          entering: false
        });
      });

      this.setState({ children: nextChildren }, function () {
        if (typeof _this6.props.onFinishAll === 'function') {
          _this6.callChildrenHook(_this6.props.onFinishAll);
        }

        // Reset our variables for the next iteration
        _this6.childrenToAnimate = [];
      });

      // If the placeholder was holding the container open while elements were
      // leaving, we we can now set its height to zero.
      if (this.heightPlaceholderData.domNode) {
        this.heightPlaceholderData.domNode.style.height = '0';
      }
    }
  };

  FlipMove.prototype.callChildrenHook = function callChildrenHook(hook) {
    var _this7 = this;

    var elements = [];
    var domNodes = [];

    this.childrenToAnimate.forEach(function (childKey) {
      // If this was an exit animation, the child may no longer exist.
      // If so, skip it.
      var child = _this7.findChildByKey(childKey);

      if (!child) {
        return;
      }

      elements.push(child);

      if (_this7.hasChildData(childKey)) {
        domNodes.push(_this7.getChildData(childKey).domNode);
      }
    });

    hook(elements, domNodes);
  };

  FlipMove.prototype.updateBoundingBoxCaches = function updateBoundingBoxCaches() {
    var _this8 = this;

    // This is the ONLY place that parentData and childrenData's
    // bounding boxes are updated. They will be calculated at other times
    // to be compared to this value, but it's important that the cache is
    // updated once per update.
    var parentDomNode = this.parentData.domNode;

    if (!parentDomNode) {
      return;
    }

    this.parentData.boundingBox = this.props.getPosition(parentDomNode);

    // Splitting DOM reads and writes to be peformed in batches
    var childrenBoundingBoxes = [];

    this.state.children.forEach(function (child) {
      var childKey = getKey(child);

      // It is possible that a child does not have a `key` property;
      // Ignore these children, they don't need to be moved.
      if (!childKey) {
        childrenBoundingBoxes.push(null);
        return;
      }

      // In very rare circumstances, for reasons unknown, the ref is never
      // populated for certain children. In this case, avoid doing this update.
      // see: https://github.com/joshwcomeau/react-flip-move/pull/91
      if (!_this8.hasChildData(childKey)) {
        childrenBoundingBoxes.push(null);
        return;
      }

      var childData = _this8.getChildData(childKey);

      // If the child element returns null, we need to avoid trying to
      // account for it
      if (!childData.domNode || !child) {
        childrenBoundingBoxes.push(null);
        return;
      }

      childrenBoundingBoxes.push(getRelativeBoundingBox({
        childDomNode: childData.domNode,
        parentDomNode: parentDomNode,
        getPosition: _this8.props.getPosition
      }));
    });

    this.state.children.forEach(function (child, index) {
      var childKey = getKey(child);

      var childBoundingBox = childrenBoundingBoxes[index];

      if (!childKey) {
        return;
      }

      _this8.setChildData(childKey, {
        boundingBox: childBoundingBox
      });
    });
  };

  FlipMove.prototype.computeInitialStyles = function computeInitialStyles(child) {
    if (child.appearing) {
      return this.props.appearAnimation ? this.props.appearAnimation.from : {};
    } else if (child.entering) {
      if (!this.props.enterAnimation) {
        return {};
      }
      // If this child was in the middle of leaving, it still has its
      // absolute positioning styles applied. We need to undo those.
      return _extends({
        position: '',
        top: '',
        left: '',
        right: '',
        bottom: ''
      }, this.props.enterAnimation.from);
    } else if (child.leaving) {
      return this.props.leaveAnimation ? this.props.leaveAnimation.from : {};
    }

    var childData = this.getChildData(getKey(child));
    var childDomNode = childData.domNode;
    var childBoundingBox = childData.boundingBox;
    var parentBoundingBox = this.parentData.boundingBox;

    if (!childDomNode) {
      return {};
    }

    var _getPositionDelta2 = getPositionDelta({
      childDomNode: childDomNode,
      childBoundingBox: childBoundingBox,
      parentBoundingBox: parentBoundingBox,
      getPosition: this.props.getPosition
    }),
        dX = _getPositionDelta2[0],
        dY = _getPositionDelta2[1];

    return {
      transform: 'translate(' + dX + 'px, ' + dY + 'px)'
    };
  };

  // eslint-disable-next-line class-methods-use-this


  FlipMove.prototype.isAnimationDisabled = function isAnimationDisabled(props) {
    // If the component is explicitly passed a `disableAllAnimations` flag,
    // we can skip this whole process. Similarly, if all of the numbers have
    // been set to 0, there is no point in trying to animate; doing so would
    // only cause a flicker (and the intent is probably to disable animations)
    // We can also skip this rigamarole if there's no browser support for it.
    return noBrowserSupport || props.disableAllAnimations || props.duration === 0 && props.delay === 0 && props.staggerDurationBy === 0 && props.staggerDelayBy === 0;
  };

  FlipMove.prototype.findChildByKey = function findChildByKey(key) {
    return find(function (child) {
      return getKey(child) === key;
    }, this.state.children);
  };

  FlipMove.prototype.hasChildData = function hasChildData(key) {
    // Object has some built-in properties on its prototype, such as toString.  hasOwnProperty makes
    // sure that key is present on childrenData itself, not on its prototype.
    return Object.prototype.hasOwnProperty.call(this.childrenData, key);
  };

  FlipMove.prototype.getChildData = function getChildData(key) {
    return this.hasChildData(key) ? this.childrenData[key] : {};
  };

  FlipMove.prototype.setChildData = function setChildData(key, data) {
    this.childrenData[key] = _extends({}, this.getChildData(key), data);
  };

  FlipMove.prototype.removeChildData = function removeChildData(key) {
    delete this.childrenData[key];
    this.setState(function (prevState) {
      return _extends({}, prevState, {
        children: prevState.children.filter(function (child) {
          return child.element.key !== key;
        })
      });
    });
  };

  FlipMove.prototype.createHeightPlaceholder = function createHeightPlaceholder() {
    var _this9 = this;

    var typeName = this.props.typeName;

    // If requested, create an invisible element at the end of the list.
    // Its height will be modified to prevent the container from collapsing
    // prematurely.

    var isContainerAList = typeName === 'ul' || typeName === 'ol';
    var placeholderType = isContainerAList ? 'li' : 'div';

    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(placeholderType, {
      key: 'height-placeholder',
      ref: function ref(domNode) {
        _this9.heightPlaceholderData.domNode = domNode;
      },
      style: { visibility: 'hidden', height: 0 }
    });
  };

  FlipMove.prototype.childrenWithRefs = function childrenWithRefs() {
    var _this10 = this;

    // We need to clone the provided children, capturing a reference to the
    // underlying DOM node. Flip Move needs to use the React escape hatches to
    // be able to do its calculations.
    return this.state.children.map(function (child) {
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child.element, {
        ref: function ref(element) {
          // Stateless Functional Components are not supported by FlipMove,
          // because they don't have instances.
          if (!element) {
            return;
          }

          var domNode = getNativeNode(element);
          _this10.setChildData(getKey(child), { domNode: domNode });
        }
      });
    });
  };

  FlipMove.prototype.render = function render() {
    var _this11 = this;

    var _props2 = this.props,
        typeName = _props2.typeName,
        delegated = _props2.delegated,
        leaveAnimation = _props2.leaveAnimation,
        maintainContainerHeight = _props2.maintainContainerHeight;


    var children = this.childrenWithRefs();
    if (leaveAnimation && maintainContainerHeight) {
      children.push(this.createHeightPlaceholder());
    }

    if (!typeName) return children;

    var props = _extends({}, delegated, {
      children: children,
      ref: function ref(node) {
        _this11.parentData.domNode = node;
      }
    });

    return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(typeName, props);
  };

  return FlipMove;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var enhancedFlipMove = /* #__PURE__ */propConverter(FlipMove$1);

/**
 * React Flip Move
 * (c) 2016-present Joshua Comeau
 */

/* harmony default export */ __webpack_exports__["default"] = (enhancedFlipMove);


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Results */ "./components/Results.js");

var _jsxFileName = "F:\\React JS\\hulu-v2-app\\pages\\index.js";




var __N_SSP = true;
function Home(_ref) {
  var results = _ref.results;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Hulu 2.0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Results__WEBPACK_IMPORTED_MODULE_4__["default"], {
      results: results
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHRzLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RodW1ibmFpbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZsaXAtbW92ZS9kaXN0L3JlYWN0LWZsaXAtbW92ZS5lcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiUmVzdWx0cyIsInJlc3VsdHMiLCJtYXAiLCJyZXN1bHQiLCJpZCIsIlRodW1ibmFpbCIsImZvcndhcmRSZWYiLCJyZWYiLCJCQVNFX1VSTCIsImJhY2tkcm9wX3BhdGgiLCJwb3N0ZXJfcGF0aCIsIm92ZXJ2aWV3IiwidGl0bGUiLCJvcmlnaW5hbF9uYW1lIiwibWVkaWFfdHlwZSIsInJlbGVhc2VfZGF0ZSIsImZpcnN0X2Fpcl9kYXRlIiwidm90ZV9jb3VudCIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxPQUFULE9BQThCO0FBQUE7O0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQzVCLHNCQUNFLHFFQUFDLHVEQUFEO0FBQVUsYUFBUyxFQUFDLG9GQUFwQjtBQUFBLGNBQ0dBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQUNDLE1BQUQ7QUFBQSwwQkFDWCxxRUFBQyxrREFBRDtBQUEyQixjQUFNLEVBQUVBO0FBQW5DLFNBQWdCQSxNQUFNLENBQUNDLEVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEVztBQUFBLEtBQVo7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7S0FSUUosTztBQVVNQSxzRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFFQSxJQUFNSyxTQUFTLGdCQUFHQyx3REFBVSxNQUFDLGtCQUFhQyxHQUFiLEVBQXFCO0FBQUEsTUFBbEJKLE1BQWtCLFFBQWxCQSxNQUFrQjtBQUNoRCxNQUFNSyxRQUFRLEdBQUcsc0NBQWpCO0FBQ0Esc0JBQ0U7QUFDRSxPQUFHLEVBQUVELEdBRFA7QUFFRSxhQUFTLEVBQUMsa0dBRlo7QUFBQSw0QkFJRSxxRUFBQyxpREFBRDtBQUNFLFlBQU0sRUFBQyxZQURUO0FBRUUsU0FBRyxFQUNELFVBQUdDLFFBQUgsU0FBY0wsTUFBTSxDQUFDTSxhQUFQLElBQXdCTixNQUFNLENBQUNPLFdBQTdDLGVBQ0dGLFFBREgsU0FDY0wsTUFBTSxDQUFDTyxXQURyQixDQUhKO0FBTUUsWUFBTSxFQUFDLE1BTlQ7QUFPRSxXQUFLLEVBQUM7QUFQUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFhRTtBQUFLLGVBQVMsRUFBQyxLQUFmO0FBQUEsOEJBQ0U7QUFBRyxpQkFBUyxFQUFDLG1CQUFiO0FBQUEsa0JBQWtDUCxNQUFNLENBQUNRO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUdFO0FBQUksaUJBQVMsRUFBQyx3RkFBZDtBQUFBLGtCQUNHUixNQUFNLENBQUNTLEtBQVAsSUFBZ0JULE1BQU0sQ0FBQ1U7QUFEMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBT0U7QUFBRyxpQkFBUyxFQUFDLHFEQUFiO0FBQUEsbUJBQ0dWLE1BQU0sQ0FBQ1csVUFBUCxjQUF3QlgsTUFBTSxDQUFDVyxVQUEvQixPQURILEVBQ2tELEdBRGxELEVBRUdYLE1BQU0sQ0FBQ1ksWUFBUCxJQUF1QlosTUFBTSxDQUFDYSxjQUZqQyxRQUVtRCxHQUZuRCxlQUdFLHFFQUFDLG9FQUFEO0FBQWEsbUJBQVMsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhGLEVBSUdiLE1BQU0sQ0FBQ2MsVUFKVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQThCRCxDQWhDMkIsQ0FBNUI7TUFBTVosUztBQWtDU0Esd0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0Y7QUFDOUI7O0FBRWxEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLHNDQUFzQztBQUNqRCxTQUFTO0FBQ1QsR0FBRztBQUNIO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLFNBQVM7QUFDVCxHQUFHO0FBQ0g7QUFDQSxXQUFXLHdEQUF3RDtBQUNuRSxTQUFTO0FBQ1QsR0FBRztBQUNIO0FBQ0EsV0FBVyx5REFBeUQ7QUFDcEUsU0FBUztBQUNULEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxXQUFXLHNDQUFzQztBQUNqRCxTQUFTO0FBQ1QsR0FBRztBQUNIO0FBQ0EsV0FBVyxlQUFlO0FBQzFCLFNBQVM7QUFDVCxHQUFHO0FBQ0g7QUFDQSxXQUFXLHdEQUF3RDtBQUNuRSxTQUFTO0FBQ1QsR0FBRztBQUNIO0FBQ0EsV0FBVyx5REFBeUQ7QUFDcEUsU0FBUztBQUNULEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBLGlCQUFpQixnQkFBZ0I7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FBVUE7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxLQUFxQyxFQUFFLEVBRTFDOztBQUVQOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOENBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLFlBQVksSUFBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixJQUFxQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYSw0Q0FBSztBQUNsQjs7QUFFQTtBQUNBLEdBQUcsQ0FBQywrQ0FBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsc0JBQXNCLGtDQUFrQztBQUN4RCxHQUFHLElBQUk7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG1DQUFtQztBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0QixjQUFjLEVBQUU7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG1DQUFtQztBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw2REFBVzs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDhDQUFRO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUsseUJBQXlCO0FBQzlCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxvQkFBb0IsZ0RBQVE7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsY0FBYywyQ0FBMkM7QUFDakYsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxVQUFVLGdCQUFnQjtBQUMzRDs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFlBQVksbUJBQW1CO0FBQ3pELE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCO0FBQzlCLFNBQVM7QUFDVCw4QkFBOEI7QUFDOUIsU0FBUztBQUNULDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBLDhCQUE4QixtQ0FBbUM7QUFDakUsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUCxxQkFBcUIseUJBQXlCO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsV0FBVywyREFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsY0FBYztBQUNkLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwwREFBWTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0MsbUJBQW1CO0FBQ2xFO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUwsV0FBVywyREFBYTtBQUN4Qjs7QUFFQTtBQUNBLENBQUMsQ0FBQywrQ0FBUzs7QUFFWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwrRUFBZ0IsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3Y2Q2hDO0FBQ0E7QUFDQTtBQUNBOztBQUdlLFNBQVNhLElBQVQsT0FBMkI7QUFBQSxNQUFYakIsT0FBVyxRQUFYQSxPQUFXO0FBQ3hDLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxXQUFHLEVBQUMsTUFBVjtBQUFpQixZQUFJLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUUscUVBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBT0UscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBGLGVBUUUscUVBQUMsMkRBQUQ7QUFBUyxhQUFPLEVBQUVBO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVlEO0tBYnVCaUIsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMzhiNTIwYWE5ZjEzMWYyNzZhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRodW1ibmFpbCBmcm9tIFwiLi9UaHVtYm5haWxcIjtcclxuaW1wb3J0IEZsaXBNb3ZlIGZyb20gXCJyZWFjdC1mbGlwLW1vdmVcIjtcclxuXHJcbmZ1bmN0aW9uIFJlc3VsdHMoeyByZXN1bHRzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZsaXBNb3ZlIGNsYXNzTmFtZT1cInB4LTUgbXktMTAgc206Z3JpZCBtZDpncmlkLWNvbHMtMiB4bDpncmlkLWNvbHMtMyAzeGw6ZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAge3Jlc3VsdHMubWFwKChyZXN1bHQpID0+IChcclxuICAgICAgICA8VGh1bWJuYWlsIGtleT17cmVzdWx0LmlkfSByZXN1bHQ9e3Jlc3VsdH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0ZsaXBNb3ZlPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XHJcbiIsImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyBUaHVtYlVwSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVGh1bWJuYWlsID0gZm9yd2FyZFJlZigoeyByZXN1bHQgfSwgcmVmKSA9PiB7XHJcbiAgY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsL1wiO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBjbGFzc05hbWU9XCJncm91cCBjdXJzb3ItcG9pbnRlciBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZWFzZS1pbiB0cmFuc2Zvcm0gc206aG92ZXI6c2NhbGUtMTA1IGhvdmVyOnotNTBcIlxyXG4gICAgPlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgYCR7QkFTRV9VUkx9JHtyZXN1bHQuYmFja2Ryb3BfcGF0aCB8fCByZXN1bHQucG9zdGVyX3BhdGh9YCB8fFxyXG4gICAgICAgICAgYCR7QkFTRV9VUkx9JHtyZXN1bHQucG9zdGVyX3BhdGh9YFxyXG4gICAgICAgIH1cclxuICAgICAgICBoZWlnaHQ9XCIxMDgwXCJcclxuICAgICAgICB3aWR0aD1cIjE5MjBcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRydW5jYXRlIG1heC13LW1kXCI+e3Jlc3VsdC5vdmVydmlld308L3A+XHJcblxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC0xIHRleHQtMnhsIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwIGVhc2UtaW4tb3V0IGdyb3VwLWhvdmVyOmZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAge3Jlc3VsdC50aXRsZSB8fCByZXN1bHQub3JpZ2luYWxfbmFtZX1cclxuICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDBcIj5cclxuICAgICAgICAgIHtyZXN1bHQubWVkaWFfdHlwZSAmJiBgJHtyZXN1bHQubWVkaWFfdHlwZX0gLmB9e1wiIFwifVxyXG4gICAgICAgICAge3Jlc3VsdC5yZWxlYXNlX2RhdGUgfHwgcmVzdWx0LmZpcnN0X2Fpcl9kYXRlfSAue1wiIFwifVxyXG4gICAgICAgICAgPFRodW1iVXBJY29uIGNsYXNzTmFtZT1cImgtNSBteC0yXCIgLz5cclxuICAgICAgICAgIHtyZXN1bHQudm90ZV9jb3VudH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaHVtYm5haWw7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50LCBjbG9uZUVsZW1lbnQsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00sIHsgZmluZERPTU5vZGUgfSBmcm9tICdyZWFjdC1kb20nO1xuXG5mdW5jdGlvbiB3YXJuT25jZShtc2cpIHtcbiAgdmFyIGhhc1dhcm5lZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIGlmICghaGFzV2FybmVkKSB7XG4gICAgICBjb25zb2xlLndhcm4obXNnKTtcbiAgICAgIGhhc1dhcm5lZCA9IHRydWU7XG4gICAgfVxuICB9O1xufVxuXG5cbnZhciBzdGF0ZWxlc3NGdW5jdGlvbmFsQ29tcG9uZW50U3VwcGxpZWQgPSB3YXJuT25jZSgnXFxuPj4gRXJyb3IsIHZpYSByZWFjdC1mbGlwLW1vdmUgPDxcXG5cXG5Zb3UgcHJvdmlkZWQgYSBzdGF0ZWxlc3MgZnVuY3Rpb25hbCBjb21wb25lbnQgYXMgYSBjaGlsZCB0byA8RmxpcE1vdmU+LiBVbmZvcnR1bmF0ZWx5LCBTRkNzIGFyZW5cXCd0IHN1cHBvcnRlZCwgYmVjYXVzZSBGbGlwIE1vdmUgbmVlZHMgYWNjZXNzIHRvIHRoZSBiYWNraW5nIGluc3RhbmNlcyB2aWEgcmVmcywgYW5kIFNGQ3MgZG9uXFwndCBoYXZlIGEgcHVibGljIGluc3RhbmNlIHRoYXQgaG9sZHMgdGhhdCBpbmZvLlxcblxcblBsZWFzZSB3cmFwIHlvdXIgY29tcG9uZW50cyBpbiBhIG5hdGl2ZSBlbGVtZW50IChlZy4gPGRpdj4pLCBvciBhIG5vbi1mdW5jdGlvbmFsIGNvbXBvbmVudC5cXG4nKTtcblxudmFyIHByaW1pdGl2ZU5vZGVTdXBwbGllZCA9IHdhcm5PbmNlKCdcXG4+PiBFcnJvciwgdmlhIHJlYWN0LWZsaXAtbW92ZSA8PFxcblxcbllvdSBwcm92aWRlZCBhIHByaW1pdGl2ZSAodGV4dCBvciBudW1iZXIpIG5vZGUgYXMgYSBjaGlsZCB0byA8RmxpcE1vdmU+LiBGbGlwIE1vdmUgbmVlZHMgY29udGFpbmVycyB3aXRoIHVuaXF1ZSBrZXlzIHRvIG1vdmUgY2hpbGRyZW4gYXJvdW5kLlxcblxcblBsZWFzZSB3cmFwIHlvdXIgdmFsdWUgaW4gYSBuYXRpdmUgZWxlbWVudCAoZWcuIDxzcGFuPiksIG9yIGEgY29tcG9uZW50LlxcbicpO1xuXG52YXIgaW52YWxpZFR5cGVGb3JUaW1pbmdQcm9wID0gZnVuY3Rpb24gaW52YWxpZFR5cGVGb3JUaW1pbmdQcm9wKGFyZ3Ncbi8vIHByZXR0aWVyLWlnbm9yZVxuKSB7XG4gIHJldHVybiBjb25zb2xlLmVycm9yKCdcXG4+PiBFcnJvciwgdmlhIHJlYWN0LWZsaXAtbW92ZSA8PFxcblxcblRoZSBwcm9wIHlvdSBwcm92aWRlZCBmb3IgXFwnJyArIGFyZ3MucHJvcCArICdcXCcgaXMgaW52YWxpZC4gSXQgbmVlZHMgdG8gYmUgYSBwb3NpdGl2ZSBpbnRlZ2VyLCBvciBhIHN0cmluZyB0aGF0IGNhbiBiZSByZXNvbHZlZCB0byBhIG51bWJlci4gVGhlIHZhbHVlIHlvdSBwcm92aWRlZCBpcyBcXCcnICsgYXJncy52YWx1ZSArICdcXCcuXFxuXFxuQXMgYSByZXN1bHQsICB0aGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhpcyBwYXJhbWV0ZXIgd2lsbCBiZSB1c2VkLCB3aGljaCBpcyBcXCcnICsgYXJncy5kZWZhdWx0VmFsdWUgKyAnXFwnLlxcbicpO1xufTtcblxudmFyIGludmFsaWRFbnRlckxlYXZlUHJlc2V0ID0gZnVuY3Rpb24gaW52YWxpZEVudGVyTGVhdmVQcmVzZXQoYXJnc1xuLy8gcHJldHRpZXItaWdub3JlXG4pIHtcbiAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoJ1xcbj4+IEVycm9yLCB2aWEgcmVhY3QtZmxpcC1tb3ZlIDw8XFxuXFxuVGhlIGVudGVyL2xlYXZlIHByZXNldCB5b3UgcHJvdmlkZWQgaXMgaW52YWxpZC4gV2UgZG9uXFwndCBjdXJyZW50bHkgaGF2ZSBhIFxcJycgKyBhcmdzLnZhbHVlICsgJyBwcmVzZXQuXFwnXFxuXFxuQWNjZXB0YWJsZSB2YWx1ZXMgYXJlICcgKyBhcmdzLmFjY2VwdGFibGVWYWx1ZXMgKyAnLiBUaGUgZGVmYXVsdCB2YWx1ZSBvZiBcXCcnICsgYXJncy5kZWZhdWx0VmFsdWUgKyAnXFwnIHdpbGwgYmUgdXNlZC5cXG4nKTtcbn07XG5cbnZhciBwYXJlbnROb2RlUG9zaXRpb25TdGF0aWMgPSB3YXJuT25jZSgnXFxuPj4gV2FybmluZywgdmlhIHJlYWN0LWZsaXAtbW92ZSA8PFxcblxcbldoZW4gdXNpbmcgXCJ3cmFwcGVybGVzc1wiIG1vZGUgKGJ5IHN1cHBseWluZyBcXCd0eXBlTmFtZVxcJyBvZiBcXCdudWxsXFwnKSwgc3RyYW5nZSB0aGluZ3MgaGFwcGVuIHdoZW4gdGhlIGRpcmVjdCBwYXJlbnQgaGFzIHRoZSBkZWZhdWx0IFwic3RhdGljXCIgcG9zaXRpb24uXFxuXFxuRmxpcE1vdmUgaGFzIGFkZGVkIFxcJ3Bvc2l0aW9uOiByZWxhdGl2ZVxcJyB0byB0aGlzIG5vZGUsIHRvIGVuc3VyZSBGbGlwIE1vdmUgYW5pbWF0ZXMgY29ycmVjdGx5LlxcblxcblRvIGF2b2lkIHNlZWluZyB0aGlzIHdhcm5pbmcsIHNpbXBseSBhcHBseSBhIG5vbi1zdGF0aWMgcG9zaXRpb24gdG8gdGhhdCBwYXJlbnQgbm9kZS5cXG4nKTtcblxudmFyIGNoaWxkSXNEaXNhYmxlZCA9IHdhcm5PbmNlKCdcXG4+PiBXYXJuaW5nLCB2aWEgcmVhY3QtZmxpcC1tb3ZlIDw8XFxuXFxuT25lIG9yIG1vcmUgb2YgRmxpcCBNb3ZlXFwncyBjaGlsZCBlbGVtZW50cyBoYXZlIHRoZSBodG1sIGF0dHJpYnV0ZSBcXCdkaXNhYmxlZFxcJyBzZXQgdG8gdHJ1ZS5cXG5cXG5QbGVhc2Ugbm90ZSB0aGF0IHRoaXMgd2lsbCBjYXVzZSBhbmltYXRpb25zIHRvIGJyZWFrIGluIEludGVybmV0IEV4cGxvcmVyIDExIGFuZCBiZWxvdy4gRWl0aGVyIHJlbW92ZSB0aGUgZGlzYWJsZWQgYXR0cmlidXRlIG9yIHNldCBcXCdhbmltYXRpb25cXCcgdG8gZmFsc2UuXFxuJyk7XG5cbnZhciBlbnRlclByZXNldHMgPSB7XG4gIGVsZXZhdG9yOiB7XG4gICAgZnJvbTogeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScsIG9wYWNpdHk6ICcwJyB9LFxuICAgIHRvOiB7IHRyYW5zZm9ybTogJycsIG9wYWNpdHk6ICcnIH1cbiAgfSxcbiAgZmFkZToge1xuICAgIGZyb206IHsgb3BhY2l0eTogJzAnIH0sXG4gICAgdG86IHsgb3BhY2l0eTogJycgfVxuICB9LFxuICBhY2NvcmRpb25WZXJ0aWNhbDoge1xuICAgIGZyb206IHsgdHJhbnNmb3JtOiAnc2NhbGVZKDApJywgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIHRvcCcgfSxcbiAgICB0bzogeyB0cmFuc2Zvcm06ICcnLCB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXIgdG9wJyB9XG4gIH0sXG4gIGFjY29yZGlvbkhvcml6b250YWw6IHtcbiAgICBmcm9tOiB7IHRyYW5zZm9ybTogJ3NjYWxlWCgwKScsIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgY2VudGVyJyB9LFxuICAgIHRvOiB7IHRyYW5zZm9ybTogJycsIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgY2VudGVyJyB9XG4gIH0sXG4gIG5vbmU6IG51bGxcbn07XG4vKipcbiAqIFJlYWN0IEZsaXAgTW92ZSB8IGVudGVyTGVhdmVQcmVzZXRzXG4gKiAoYykgMjAxNi1wcmVzZW50IEpvc2h1YSBDb21lYXVcbiAqXG4gKiBUaGlzIGNvbnRhaW5zIHRoZSBtYXN0ZXIgbGlzdCBvZiBwcmVzZXRzIGF2YWlsYWJsZSBmb3IgZW50ZXIvbGVhdmUgYW5pbWF0aW9ucyxcbiAqIGFsb25nIHdpdGggdGhlIG1hcHBpbmcgYmV0d2VlbiBwcmVzZXQgYW5kIHN0eWxlcy5cbiAqL1xuXG5cbnZhciBsZWF2ZVByZXNldHMgPSB7XG4gIGVsZXZhdG9yOiB7XG4gICAgZnJvbTogeyB0cmFuc2Zvcm06ICdzY2FsZSgxKScsIG9wYWNpdHk6ICcxJyB9LFxuICAgIHRvOiB7IHRyYW5zZm9ybTogJ3NjYWxlKDApJywgb3BhY2l0eTogJzAnIH1cbiAgfSxcbiAgZmFkZToge1xuICAgIGZyb206IHsgb3BhY2l0eTogJzEnIH0sXG4gICAgdG86IHsgb3BhY2l0eTogJzAnIH1cbiAgfSxcbiAgYWNjb3JkaW9uVmVydGljYWw6IHtcbiAgICBmcm9tOiB7IHRyYW5zZm9ybTogJ3NjYWxlWSgxKScsIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciB0b3AnIH0sXG4gICAgdG86IHsgdHJhbnNmb3JtOiAnc2NhbGVZKDApJywgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIHRvcCcgfVxuICB9LFxuICBhY2NvcmRpb25Ib3Jpem9udGFsOiB7XG4gICAgZnJvbTogeyB0cmFuc2Zvcm06ICdzY2FsZVgoMSknLCB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IGNlbnRlcicgfSxcbiAgICB0bzogeyB0cmFuc2Zvcm06ICdzY2FsZVgoMCknLCB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IGNlbnRlcicgfVxuICB9LFxuICBub25lOiBudWxsXG59O1xuXG4vLyBGb3Igbm93LCBhcHBlYXJQcmVzZXRzIHdpbGwgYmUgaWRlbnRpY2FsIHRvIGVudGVyUHJlc2V0cy5cbi8vIEFzc2lnbmluZyBhIGN1c3RvbSBleHBvcnQgaW4gY2FzZSB3ZSBldmVyIHdhbnQgdG8gYWRkIGFwcGVhci1zcGVjaWZpYyBvbmVzLlxudmFyIGFwcGVhclByZXNldHMgPSBlbnRlclByZXNldHM7XG5cbnZhciBkZWZhdWx0UHJlc2V0ID0gJ2VsZXZhdG9yJztcbnZhciBkaXNhYmxlUHJlc2V0ID0gJ25vbmUnO1xuXG52YXIgZmluZCA9IGZ1bmN0aW9uIGZpbmQocHJlZGljYXRlLCBhcnIpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycltpXSwgaSwgYXJyKSkge1xuICAgICAgcmV0dXJuIGFycltpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxuXG52YXIgZXZlcnkgPSBmdW5jdGlvbiBldmVyeShwcmVkaWNhdGUsIGFycikge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmICghcHJlZGljYXRlKGFycltpXSwgaSwgYXJyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG52YXIgX2lzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuICBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbiAgfTtcbiAgcmV0dXJuIF9pc0FycmF5KGFycik7XG59O1xuXG52YXIgaXNFbGVtZW50QW5TRkMgPSBmdW5jdGlvbiBpc0VsZW1lbnRBblNGQyhlbGVtZW50KSB7XG4gIHZhciBpc05hdGl2ZURPTUVsZW1lbnQgPSB0eXBlb2YgZWxlbWVudC50eXBlID09PSAnc3RyaW5nJztcblxuICBpZiAoaXNOYXRpdmVET01FbGVtZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiBlbGVtZW50LnR5cGUgPT09ICdmdW5jdGlvbicgJiYgIWVsZW1lbnQudHlwZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudDtcbn07XG5cbmZ1bmN0aW9uIG9taXQob2JqKSB7XG4gIHZhciBhdHRycyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogW107XG5cbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChhdHRycy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG9ialtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGFycmF5c0VxdWFsKGEsIGIpIHtcbiAgdmFyIHNhbWVPYmplY3QgPSBhID09PSBiO1xuICBpZiAoc2FtZU9iamVjdCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgdmFyIG5vdEJvdGhBcnJheXMgPSAhX2lzQXJyYXkoYSkgfHwgIV9pc0FycmF5KGIpO1xuICB2YXIgZGlmZmVyZW50TGVuZ3RocyA9IGEubGVuZ3RoICE9PSBiLmxlbmd0aDtcblxuICBpZiAobm90Qm90aEFycmF5cyB8fCBkaWZmZXJlbnRMZW5ndGhzKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGV2ZXJ5KGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgIHJldHVybiBlbGVtZW50ID09PSBiW2luZGV4XTtcbiAgfSwgYSk7XG59XG5cbmZ1bmN0aW9uIG1lbW9pemVTdHJpbmcoZm4pIHtcbiAgdmFyIGNhY2hlID0ge307XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHIpIHtcbiAgICBpZiAoIWNhY2hlW3N0cl0pIHtcbiAgICAgIGNhY2hlW3N0cl0gPSBmbihzdHIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVbc3RyXTtcbiAgfTtcbn1cblxudmFyIGh5cGhlbmF0ZSA9IG1lbW9pemVTdHJpbmcoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbQS1aXSkvZywgJy0kMScpLnRvTG93ZXJDYXNlKCk7XG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn07XG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cblxuXG5cblxuXG5cblxuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cbi8qKlxuICogUmVhY3QgRmxpcCBNb3ZlIHwgcHJvcENvbnZlcnRlclxuICogKGMpIDIwMTYtcHJlc2VudCBKb3NodWEgQ29tZWF1XG4gKlxuICogQWJzdHJhY3RlZCBhd2F5IGEgYnVuY2ggb2YgdGhlIG1lc3N5IGJ1c2luZXNzIHdpdGggcHJvcHMuXG4gKiAgIC0gcHJvcHMgZmxvdyB0eXBlcyBhbmQgZGVmYXVsdFByb3BzXG4gKiAgIC0gVHlwZSBjb252ZXJzaW9uIChXZSBhY2NlcHQgJ3N0cmluZycgYW5kICdudW1iZXInIHZhbHVlcyBmb3IgZHVyYXRpb24sXG4gKiAgICAgZGVsYXksIGFuZCBvdGhlciBmaWVsZHMsIGJ1dCB3ZSBhY3R1YWxseSBuZWVkIHRoZW0gdG8gYmUgaW50cy4pXG4gKiAgIC0gQ2hpbGRyZW4gY29udmVyc2lvbiAod2UgbmVlZCB0aGUgY2hpbGRyZW4gdG8gYmUgYW4gYXJyYXkuIE1heSBub3QgYWx3YXlzXG4gKiAgICAgYmUsIGlmIGEgc2luZ2xlIGNoaWxkIGlzIHBhc3NlZCBpbi4pXG4gKiAgIC0gUmVzb2x2aW5nIGFuaW1hdGlvbiBwcmVzZXRzIGludG8gdGhlaXIgYmFzZSBDU1Mgc3R5bGVzXG4gKi9cbi8qIGVzbGludC1kaXNhYmxlIGJsb2NrLXNjb3BlZC12YXIgKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWR1cGxpY2F0ZS1pbXBvcnRzXG5cblxuZnVuY3Rpb24gcHJvcENvbnZlcnRlcihDb21wb3NlZENvbXBvbmVudCkge1xuICB2YXIgX2NsYXNzLCBfdGVtcDtcblxuICByZXR1cm4gX3RlbXAgPSBfY2xhc3MgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIGluaGVyaXRzKEZsaXBNb3ZlUHJvcENvbnZlcnRlciwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBGbGlwTW92ZVByb3BDb252ZXJ0ZXIoKSB7XG4gICAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBGbGlwTW92ZVByb3BDb252ZXJ0ZXIpO1xuICAgICAgcmV0dXJuIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0NvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgICB9XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIEZsaXBNb3ZlUHJvcENvbnZlcnRlci5wcm90b3R5cGUuY2hlY2tDaGlsZHJlbiA9IGZ1bmN0aW9uIGNoZWNrQ2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgICAgIC8vIFNraXAgYWxsIGNvbnNvbGUgd2FybmluZ3MgaW4gcHJvZHVjdGlvbi5cbiAgICAgIC8vIEJhaWwgZWFybHksIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHdvcmsuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIHNhbWUgYXMgUmVhY3QuTm9kZSwgYnV0IHdpdGhvdXQgZnJhZ21lbnRzLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL2Zsb3cvaXNzdWVzLzQ3ODFcblxuXG4gICAgICAvLyBGbGlwTW92ZSBkb2VzIG5vdCBzdXBwb3J0IHN0YXRlbGVzcyBmdW5jdGlvbmFsIGNvbXBvbmVudHMuXG4gICAgICAvLyBDaGVjayB0byBzZWUgaWYgYW55IHN1cHBsaWVkIGNvbXBvbmVudHMgd29uJ3Qgd29yay5cbiAgICAgIC8vIElmIHRoZSBjaGlsZCBkb2Vzbid0IGhhdmUgYSBrZXksIGl0IG1lYW5zIHdlIGFyZW4ndCBhbmltYXRpbmcgaXQuXG4gICAgICAvLyBJdCdzIGFsbG93ZWQgdG8gYmUgYW4gU0ZDLCBzaW5jZSB3ZSBpZ25vcmUgaXQuXG4gICAgICBDaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgLy8gbnVsbCwgdW5kZWZpbmVkLCBhbmQgYm9vbGVhbnMgd2lsbCBiZSBmaWx0ZXJlZCBvdXQgYnkgQ2hpbGRyZW4udG9BcnJheVxuICAgICAgICBpZiAoY2hpbGQgPT0gbnVsbCB8fCB0eXBlb2YgY2hpbGQgPT09ICdib29sZWFuJykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgodHlwZW9mIGNoaWxkID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihjaGlsZCkpICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHByaW1pdGl2ZU5vZGVTdXBwbGllZCgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0VsZW1lbnRBblNGQyhjaGlsZCkgJiYgY2hpbGQua2V5ICE9IG51bGwpIHtcbiAgICAgICAgICBzdGF0ZWxlc3NGdW5jdGlvbmFsQ29tcG9uZW50U3VwcGxpZWQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIEZsaXBNb3ZlUHJvcENvbnZlcnRlci5wcm90b3R5cGUuY29udmVydFByb3BzID0gZnVuY3Rpb24gY29udmVydFByb3BzKHByb3BzKSB7XG4gICAgICB2YXIgd29ya2luZ1Byb3BzID0ge1xuICAgICAgICAvLyBleHBsaWNpdGx5IGJ5cGFzcyB0aGUgcHJvcHMgdGhhdCBkb24ndCBuZWVkIGNvbnZlcnNpb25cbiAgICAgICAgY2hpbGRyZW46IHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBlYXNpbmc6IHByb3BzLmVhc2luZyxcbiAgICAgICAgb25TdGFydDogcHJvcHMub25TdGFydCxcbiAgICAgICAgb25GaW5pc2g6IHByb3BzLm9uRmluaXNoLFxuICAgICAgICBvblN0YXJ0QWxsOiBwcm9wcy5vblN0YXJ0QWxsLFxuICAgICAgICBvbkZpbmlzaEFsbDogcHJvcHMub25GaW5pc2hBbGwsXG4gICAgICAgIHR5cGVOYW1lOiBwcm9wcy50eXBlTmFtZSxcbiAgICAgICAgZGlzYWJsZUFsbEFuaW1hdGlvbnM6IHByb3BzLmRpc2FibGVBbGxBbmltYXRpb25zLFxuICAgICAgICBnZXRQb3NpdGlvbjogcHJvcHMuZ2V0UG9zaXRpb24sXG4gICAgICAgIG1haW50YWluQ29udGFpbmVySGVpZ2h0OiBwcm9wcy5tYWludGFpbkNvbnRhaW5lckhlaWdodCxcbiAgICAgICAgdmVydGljYWxBbGlnbm1lbnQ6IHByb3BzLnZlcnRpY2FsQWxpZ25tZW50LFxuXG4gICAgICAgIC8vIERvIHN0cmluZy10by1pbnQgY29udmVyc2lvbiBmb3IgYWxsIHRpbWluZy1yZWxhdGVkIHByb3BzXG4gICAgICAgIGR1cmF0aW9uOiB0aGlzLmNvbnZlcnRUaW1pbmdQcm9wKCdkdXJhdGlvbicpLFxuICAgICAgICBkZWxheTogdGhpcy5jb252ZXJ0VGltaW5nUHJvcCgnZGVsYXknKSxcbiAgICAgICAgc3RhZ2dlckR1cmF0aW9uQnk6IHRoaXMuY29udmVydFRpbWluZ1Byb3AoJ3N0YWdnZXJEdXJhdGlvbkJ5JyksXG4gICAgICAgIHN0YWdnZXJEZWxheUJ5OiB0aGlzLmNvbnZlcnRUaW1pbmdQcm9wKCdzdGFnZ2VyRGVsYXlCeScpLFxuXG4gICAgICAgIC8vIE91ciBlbnRlci9sZWF2ZSBhbmltYXRpb25zIGNhbiBiZSBzcGVjaWZpZWQgYXMgYm9vbGVhbiAoZGVmYXVsdCBvclxuICAgICAgICAvLyBkaXNhYmxlZCksIHN0cmluZyAocHJlc2V0IG5hbWUpLCBvciBvYmplY3QgKGFjdHVhbCBhbmltYXRpb24gdmFsdWVzKS5cbiAgICAgICAgLy8gTGV0J3Mgc3RhbmRhcmRpemUgdGhpcyBzbyB0aGF0IHRoZXkncmUgYWx3YXlzIG9iamVjdHNcbiAgICAgICAgYXBwZWFyQW5pbWF0aW9uOiB0aGlzLmNvbnZlcnRBbmltYXRpb25Qcm9wKHByb3BzLmFwcGVhckFuaW1hdGlvbiwgYXBwZWFyUHJlc2V0cyksXG4gICAgICAgIGVudGVyQW5pbWF0aW9uOiB0aGlzLmNvbnZlcnRBbmltYXRpb25Qcm9wKHByb3BzLmVudGVyQW5pbWF0aW9uLCBlbnRlclByZXNldHMpLFxuICAgICAgICBsZWF2ZUFuaW1hdGlvbjogdGhpcy5jb252ZXJ0QW5pbWF0aW9uUHJvcChwcm9wcy5sZWF2ZUFuaW1hdGlvbiwgbGVhdmVQcmVzZXRzKSxcblxuICAgICAgICBkZWxlZ2F0ZWQ6IHt9XG4gICAgICB9O1xuXG4gICAgICB0aGlzLmNoZWNrQ2hpbGRyZW4od29ya2luZ1Byb3BzLmNoaWxkcmVuKTtcblxuICAgICAgLy8gR2F0aGVyIGFueSBhZGRpdGlvbmFsIHByb3BzO1xuICAgICAgLy8gdGhleSB3aWxsIGJlIGRlbGVnYXRlZCB0byB0aGUgUmVhY3RFbGVtZW50IGNyZWF0ZWQuXG4gICAgICB2YXIgcHJpbWFyeVByb3BLZXlzID0gT2JqZWN0LmtleXMod29ya2luZ1Byb3BzKTtcbiAgICAgIHZhciBkZWxlZ2F0ZWRQcm9wcyA9IG9taXQodGhpcy5wcm9wcywgcHJpbWFyeVByb3BLZXlzKTtcblxuICAgICAgLy8gVGhlIEZsaXBNb3ZlIGNvbnRhaW5lciBlbGVtZW50IG5lZWRzIHRvIGhhdmUgYSBub24tc3RhdGljIHBvc2l0aW9uLlxuICAgICAgLy8gV2UgdXNlIGByZWxhdGl2ZWAgYnkgZGVmYXVsdCwgYnV0IGl0IGNhbiBiZSBvdmVycmlkZGVuIGJ5IHRoZSB1c2VyLlxuICAgICAgLy8gTm93IHRoYXQgd2UncmUgZGVsZWdhdGluZyBwcm9wcywgd2UgbmVlZCB0byBtZXJnZSB0aGlzIGluLlxuICAgICAgZGVsZWdhdGVkUHJvcHMuc3R5bGUgPSBfZXh0ZW5kcyh7XG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnXG4gICAgICB9LCBkZWxlZ2F0ZWRQcm9wcy5zdHlsZSk7XG5cbiAgICAgIHdvcmtpbmdQcm9wcy5kZWxlZ2F0ZWQgPSBkZWxlZ2F0ZWRQcm9wcztcblxuICAgICAgcmV0dXJuIHdvcmtpbmdQcm9wcztcbiAgICB9O1xuXG4gICAgRmxpcE1vdmVQcm9wQ29udmVydGVyLnByb3RvdHlwZS5jb252ZXJ0VGltaW5nUHJvcCA9IGZ1bmN0aW9uIGNvbnZlcnRUaW1pbmdQcm9wKHByb3ApIHtcbiAgICAgIHZhciByYXdWYWx1ZSA9IHRoaXMucHJvcHNbcHJvcF07XG5cbiAgICAgIHZhciB2YWx1ZSA9IHR5cGVvZiByYXdWYWx1ZSA9PT0gJ251bWJlcicgPyByYXdWYWx1ZSA6IHBhcnNlSW50KHJhd1ZhbHVlLCAxMCk7XG5cbiAgICAgIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRWYWx1ZSA9IEZsaXBNb3ZlUHJvcENvbnZlcnRlci5kZWZhdWx0UHJvcHNbcHJvcF07XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBpbnZhbGlkVHlwZUZvclRpbWluZ1Byb3Aoe1xuICAgICAgICAgICAgcHJvcDogcHJvcCxcbiAgICAgICAgICAgIHZhbHVlOiByYXdWYWx1ZSxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFZhbHVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG5cblxuICAgIEZsaXBNb3ZlUHJvcENvbnZlcnRlci5wcm90b3R5cGUuY29udmVydEFuaW1hdGlvblByb3AgPSBmdW5jdGlvbiBjb252ZXJ0QW5pbWF0aW9uUHJvcChhbmltYXRpb24sIHByZXNldHMpIHtcbiAgICAgIHN3aXRjaCAodHlwZW9mIGFuaW1hdGlvbiA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoYW5pbWF0aW9uKSkge1xuICAgICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyBJZiBpdCdzIHRydWUsIHdlIHdhbnQgdG8gdXNlIHRoZSBkZWZhdWx0IHByZXNldC5cbiAgICAgICAgICAgIC8vIElmIGl0J3MgZmFsc2UsIHdlIHdhbnQgdG8gdXNlIHRoZSAnbm9uZScgcHJlc2V0LlxuICAgICAgICAgICAgcmV0dXJuIHByZXNldHNbYW5pbWF0aW9uID8gZGVmYXVsdFByZXNldCA6IGRpc2FibGVQcmVzZXRdO1xuICAgICAgICAgIH1cblxuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBwcmVzZXRLZXlzID0gT2JqZWN0LmtleXMocHJlc2V0cyk7XG5cbiAgICAgICAgICAgIGlmIChwcmVzZXRLZXlzLmluZGV4T2YoYW5pbWF0aW9uKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBpbnZhbGlkRW50ZXJMZWF2ZVByZXNldCh7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogYW5pbWF0aW9uLFxuICAgICAgICAgICAgICAgICAgYWNjZXB0YWJsZVZhbHVlczogcHJlc2V0S2V5cy5qb2luKCcsICcpLFxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlOiBkZWZhdWx0UHJlc2V0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gcHJlc2V0c1tkZWZhdWx0UHJlc2V0XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHByZXNldHNbYW5pbWF0aW9uXTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gYW5pbWF0aW9uO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgRmxpcE1vdmVQcm9wQ29udmVydGVyLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgdGhpcy5jb252ZXJ0UHJvcHModGhpcy5wcm9wcykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gRmxpcE1vdmVQcm9wQ29udmVydGVyO1xuICB9KENvbXBvbmVudCksIF9jbGFzcy5kZWZhdWx0UHJvcHMgPSB7XG4gICAgZWFzaW5nOiAnZWFzZS1pbi1vdXQnLFxuICAgIGR1cmF0aW9uOiAzNTAsXG4gICAgZGVsYXk6IDAsXG4gICAgc3RhZ2dlckR1cmF0aW9uQnk6IDAsXG4gICAgc3RhZ2dlckRlbGF5Qnk6IDAsXG4gICAgdHlwZU5hbWU6ICdkaXYnLFxuICAgIGVudGVyQW5pbWF0aW9uOiBkZWZhdWx0UHJlc2V0LFxuICAgIGxlYXZlQW5pbWF0aW9uOiBkZWZhdWx0UHJlc2V0LFxuICAgIGRpc2FibGVBbGxBbmltYXRpb25zOiBmYWxzZSxcbiAgICBnZXRQb3NpdGlvbjogZnVuY3Rpb24gZ2V0UG9zaXRpb24obm9kZSkge1xuICAgICAgcmV0dXJuIG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgfSxcbiAgICBtYWludGFpbkNvbnRhaW5lckhlaWdodDogZmFsc2UsXG4gICAgdmVydGljYWxBbGlnbm1lbnQ6ICd0b3AnXG4gIH0sIF90ZW1wO1xufVxuXG4vKipcbiAqIFJlYWN0IEZsaXAgTW92ZVxuICogKGMpIDIwMTYtcHJlc2VudCBKb3NodWEgQ29tZWF1XG4gKlxuICogVGhlc2UgbWV0aG9kcyByZWFkIGZyb20gYW5kIHdyaXRlIHRvIHRoZSBET00uXG4gKiBUaGV5IGFsbW9zdCBhbHdheXMgaGF2ZSBzaWRlIGVmZmVjdHMsIGFuZCB3aWxsIGhvcGVmdWxseSBiZWNvbWUgdGhlXG4gKiBvbmx5IHNwb3QgaW4gdGhlIGNvZGViYXNlIHdpdGggaW1wdXJlIGZ1bmN0aW9ucy5cbiAqL1xuZnVuY3Rpb24gYXBwbHlTdHlsZXNUb0RPTU5vZGUoX3JlZikge1xuICB2YXIgZG9tTm9kZSA9IF9yZWYuZG9tTm9kZSxcbiAgICAgIHN0eWxlcyA9IF9yZWYuc3R5bGVzO1xuXG4gIC8vIENhbid0IGp1c3QgZG8gYW4gb2JqZWN0IG1lcmdlIGJlY2F1c2UgZG9tTm9kZS5zdHlsZXMgaXMgbm8gcmVndWxhciBvYmplY3QuXG4gIC8vIE5lZWQgdG8gZG8gaXQgdGhpcyB3YXkgZm9yIHRoZSBlbmdpbmUgdG8gZmlyZSBpdHMgYHNldGAgbGlzdGVuZXJzLlxuICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGRvbU5vZGUuc3R5bGUuc2V0UHJvcGVydHkoaHlwaGVuYXRlKGtleSksIHN0eWxlc1trZXldKTtcbiAgfSk7XG59XG5cbi8vIE1vZGlmaWVkIGZyb20gTW9kZXJuaXpyXG5mdW5jdGlvbiB3aGljaFRyYW5zaXRpb25FdmVudCgpIHtcbiAgdmFyIHRyYW5zaXRpb25zID0ge1xuICAgIHRyYW5zaXRpb246ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnLW8tdHJhbnNpdGlvbic6ICdvVHJhbnNpdGlvbkVuZCcsXG4gICAgJy1tb3otdHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnLXdlYmtpdC10cmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnXG4gIH07XG5cbiAgLy8gSWYgd2UncmUgcnVubmluZyBpbiBhIGJyb3dzZXJsZXNzIGVudmlyb25tZW50IChlZy4gU1NSKSwgaXQgZG9lc24ndCBhcHBseS5cbiAgLy8gUmV0dXJuIGEgcGxhY2Vob2xkZXIgc3RyaW5nLCBmb3IgY29uc2lzdGVudCB0eXBlIHJldHVybi5cbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiAnJztcblxuICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmYWtlZWxlbWVudCcpO1xuXG4gIHZhciBtYXRjaCA9IGZpbmQoZnVuY3Rpb24gKHQpIHtcbiAgICByZXR1cm4gZWwuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSh0KSAhPT0gdW5kZWZpbmVkO1xuICB9LCBPYmplY3Qua2V5cyh0cmFuc2l0aW9ucykpO1xuXG4gIC8vIElmIG5vIGB0cmFuc2l0aW9uYCBpcyBmb3VuZCwgd2UgbXVzdCBiZSBydW5uaW5nIGluIGEgYnJvd3NlciBzbyBhbmNpZW50LFxuICAvLyBSZWFjdCBpdHNlbGYgd29uJ3QgcnVuLiBSZXR1cm4gYW4gZW1wdHkgc3RyaW5nLCBmb3IgY29uc2lzdGVudCB0eXBlIHJldHVyblxuICByZXR1cm4gbWF0Y2ggPyB0cmFuc2l0aW9uc1ttYXRjaF0gOiAnJztcbn1cblxudmFyIGdldFJlbGF0aXZlQm91bmRpbmdCb3ggPSBmdW5jdGlvbiBnZXRSZWxhdGl2ZUJvdW5kaW5nQm94KF9yZWYyKSB7XG4gIHZhciBjaGlsZERvbU5vZGUgPSBfcmVmMi5jaGlsZERvbU5vZGUsXG4gICAgICBwYXJlbnREb21Ob2RlID0gX3JlZjIucGFyZW50RG9tTm9kZSxcbiAgICAgIGdldFBvc2l0aW9uID0gX3JlZjIuZ2V0UG9zaXRpb247XG5cbiAgdmFyIHBhcmVudEJveCA9IGdldFBvc2l0aW9uKHBhcmVudERvbU5vZGUpO1xuXG4gIHZhciBfZ2V0UG9zaXRpb24gPSBnZXRQb3NpdGlvbihjaGlsZERvbU5vZGUpLFxuICAgICAgdG9wID0gX2dldFBvc2l0aW9uLnRvcCxcbiAgICAgIGxlZnQgPSBfZ2V0UG9zaXRpb24ubGVmdCxcbiAgICAgIHJpZ2h0ID0gX2dldFBvc2l0aW9uLnJpZ2h0LFxuICAgICAgYm90dG9tID0gX2dldFBvc2l0aW9uLmJvdHRvbSxcbiAgICAgIHdpZHRoID0gX2dldFBvc2l0aW9uLndpZHRoLFxuICAgICAgaGVpZ2h0ID0gX2dldFBvc2l0aW9uLmhlaWdodDtcblxuICByZXR1cm4ge1xuICAgIHRvcDogdG9wIC0gcGFyZW50Qm94LnRvcCxcbiAgICBsZWZ0OiBsZWZ0IC0gcGFyZW50Qm94LmxlZnQsXG4gICAgcmlnaHQ6IHBhcmVudEJveC5yaWdodCAtIHJpZ2h0LFxuICAgIGJvdHRvbTogcGFyZW50Qm94LmJvdHRvbSAtIGJvdHRvbSxcbiAgICB3aWR0aDogd2lkdGgsXG4gICAgaGVpZ2h0OiBoZWlnaHRcbiAgfTtcbn07XG5cbi8qKiBnZXRQb3NpdGlvbkRlbHRhXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBkZWx0YSBiZXR3ZWVuIHR3byBib3VuZGluZyBib3hlcywgdG8gZmlndXJlIG91dFxuICogaG93IG1hbnkgcGl4ZWxzIG9uIGVhY2ggYXhpcyB0aGUgZWxlbWVudCBoYXMgbW92ZWQuXG4gKlxuICovXG52YXIgZ2V0UG9zaXRpb25EZWx0YSA9IGZ1bmN0aW9uIGdldFBvc2l0aW9uRGVsdGEoX3JlZjMpIHtcbiAgdmFyIGNoaWxkRG9tTm9kZSA9IF9yZWYzLmNoaWxkRG9tTm9kZSxcbiAgICAgIGNoaWxkQm91bmRpbmdCb3ggPSBfcmVmMy5jaGlsZEJvdW5kaW5nQm94LFxuICAgICAgcGFyZW50Qm91bmRpbmdCb3ggPSBfcmVmMy5wYXJlbnRCb3VuZGluZ0JveCxcbiAgICAgIGdldFBvc2l0aW9uID0gX3JlZjMuZ2V0UG9zaXRpb247XG5cbiAgLy8gVEVNUDogQSBteXN0ZXJ5IGJ1ZyBpcyBzb21ldGltZXMgY2F1c2luZyB1bm5lY2Vzc2FyeSBib3VuZGluZ0JveGVzIHRvXG4gIHZhciBkZWZhdWx0Qm94ID0ge1xuICAgIHRvcDogMCxcbiAgICBsZWZ0OiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDBcbiAgfTtcblxuICAvLyBPdXIgb2xkIGJveCBpcyBpdHMgbGFzdCBjYWxjdWxhdGVkIHBvc2l0aW9uLCBkZXJpdmVkIG9uIG1vdW50IG9yIGF0IHRoZVxuICAvLyBzdGFydCBvZiB0aGUgcHJldmlvdXMgYW5pbWF0aW9uLlxuICB2YXIgb2xkUmVsYXRpdmVCb3ggPSBjaGlsZEJvdW5kaW5nQm94IHx8IGRlZmF1bHRCb3g7XG4gIHZhciBwYXJlbnRCb3ggPSBwYXJlbnRCb3VuZGluZ0JveCB8fCBkZWZhdWx0Qm94O1xuXG4gIC8vIE91ciBuZXcgYm94IGlzIHRoZSBuZXcgZmluYWwgcmVzdGluZyBwbGFjZTogV2hlcmUgd2UgZXhwZWN0IGl0IHRvIHdpbmQgdXBcbiAgLy8gYWZ0ZXIgdGhlIGFuaW1hdGlvbi4gRmlyc3Qgd2UgZ2V0IHRoZSBib3ggaW4gYWJzb2x1dGUgdGVybXMgKEFLQSByZWxhdGl2ZVxuICAvLyB0byB0aGUgdmlld3BvcnQpLCBhbmQgdGhlbiB3ZSBjYWxjdWxhdGUgaXRzIHJlbGF0aXZlIGJveCAocmVsYXRpdmUgdG8gdGhlXG4gIC8vIHBhcmVudCBjb250YWluZXIpXG4gIHZhciBuZXdBYnNvbHV0ZUJveCA9IGdldFBvc2l0aW9uKGNoaWxkRG9tTm9kZSk7XG4gIHZhciBuZXdSZWxhdGl2ZUJveCA9IHtcbiAgICB0b3A6IG5ld0Fic29sdXRlQm94LnRvcCAtIHBhcmVudEJveC50b3AsXG4gICAgbGVmdDogbmV3QWJzb2x1dGVCb3gubGVmdCAtIHBhcmVudEJveC5sZWZ0XG4gIH07XG5cbiAgcmV0dXJuIFtvbGRSZWxhdGl2ZUJveC5sZWZ0IC0gbmV3UmVsYXRpdmVCb3gubGVmdCwgb2xkUmVsYXRpdmVCb3gudG9wIC0gbmV3UmVsYXRpdmVCb3gudG9wXTtcbn07XG5cbi8qKiByZW1vdmVOb2RlRnJvbURPTUZsb3dcbiAqIFRoaXMgbWV0aG9kIGRvZXMgc29tZXRoaW5nIHZlcnkgc25lYWt5OiBpdCByZW1vdmVzIGEgRE9NIG5vZGUgZnJvbSB0aGVcbiAqIGRvY3VtZW50IGZsb3csIGJ1dCB3aXRob3V0IGFjdHVhbGx5IGNoYW5naW5nIGl0cyBvbi1zY3JlZW4gcG9zaXRpb24uXG4gKlxuICogSXQgd29ya3MgYnkgY2FsY3VsYXRpbmcgd2hlcmUgdGhlIG5vZGUgaXMsIGFuZCB0aGVuIGFwcGx5aW5nIHN0eWxlc1xuICogc28gdGhhdCBpdCB3aW5kcyB1cCBiZWluZyBwb3NpdGlvbmVkIGFic29sdXRlbHksIGJ1dCBpbiBleGFjdGx5IHRoZVxuICogc2FtZSBwbGFjZS5cbiAqXG4gKiBUaGlzIGlzIGEgdml0YWwgcGFydCBvZiB0aGUgRkxJUCB0ZWNobmlxdWUuXG4gKi9cbnZhciByZW1vdmVOb2RlRnJvbURPTUZsb3cgPSBmdW5jdGlvbiByZW1vdmVOb2RlRnJvbURPTUZsb3coY2hpbGREYXRhLCB2ZXJ0aWNhbEFsaWdubWVudCkge1xuICB2YXIgZG9tTm9kZSA9IGNoaWxkRGF0YS5kb21Ob2RlLFxuICAgICAgYm91bmRpbmdCb3ggPSBjaGlsZERhdGEuYm91bmRpbmdCb3g7XG5cblxuICBpZiAoIWRvbU5vZGUgfHwgIWJvdW5kaW5nQm94KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yIHRoaXMgdG8gd29yaywgd2UgaGF2ZSB0byBvZmZzZXQgYW55IGdpdmVuIGBtYXJnaW5gLlxuICB2YXIgY29tcHV0ZWQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb21Ob2RlKTtcblxuICAvLyBXZSBuZWVkIHRvIGNsZWFuIHVwIG1hcmdpbnMsIGJ5IGNvbnZlcnRpbmcgYW5kIHJlbW92aW5nIHN1ZmZpeDpcbiAgLy8gZWcuICcyMXB4JyAtPiAyMVxuICB2YXIgbWFyZ2luQXR0cnMgPSBbJ21hcmdpbi10b3AnLCAnbWFyZ2luLWxlZnQnLCAnbWFyZ2luLXJpZ2h0J107XG4gIHZhciBtYXJnaW5zID0gbWFyZ2luQXR0cnMucmVkdWNlKGZ1bmN0aW9uIChhY2MsIG1hcmdpbikge1xuICAgIHZhciBfYmFiZWxIZWxwZXJzJGV4dGVuZHM7XG5cbiAgICB2YXIgcHJvcGVydHlWYWwgPSBjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKG1hcmdpbik7XG5cbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIGFjYywgKF9iYWJlbEhlbHBlcnMkZXh0ZW5kcyA9IHt9LCBfYmFiZWxIZWxwZXJzJGV4dGVuZHNbbWFyZ2luXSA9IE51bWJlcihwcm9wZXJ0eVZhbC5yZXBsYWNlKCdweCcsICcnKSksIF9iYWJlbEhlbHBlcnMkZXh0ZW5kcykpO1xuICB9LCB7fSk7XG5cbiAgLy8gSWYgd2UncmUgYm90dG9tLWFsaWduZWQsIHdlIG5lZWQgdG8gYWRkIHRoZSBoZWlnaHQgb2YgdGhlIGNoaWxkIHRvIGl0c1xuICAvLyB0b3Agb2Zmc2V0LiBUaGlzIGlzIGJlY2F1c2UsIHdoZW4gdGhlIGNvbnRhaW5lciBpcyBib3R0b20tYWxpZ25lZCwgaXRzXG4gIC8vIGhlaWdodCBzaHJpbmtzIGZyb20gdGhlIHRvcCwgbm90IHRoZSBib3R0b20uIFdlJ3JlIHJlbW92aW5nIHRoaXMgbm9kZVxuICAvLyBmcm9tIHRoZSBmbG93LCBzbyB0aGUgdG9wIGlzIGdvaW5nIHRvIGRyb3AgYnkgaXRzIGhlaWdodC5cbiAgdmFyIHRvcE9mZnNldCA9IHZlcnRpY2FsQWxpZ25tZW50ID09PSAnYm90dG9tJyA/IGJvdW5kaW5nQm94LnRvcCAtIGJvdW5kaW5nQm94LmhlaWdodCA6IGJvdW5kaW5nQm94LnRvcDtcblxuICB2YXIgc3R5bGVzID0ge1xuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgIHRvcDogdG9wT2Zmc2V0IC0gbWFyZ2luc1snbWFyZ2luLXRvcCddICsgJ3B4JyxcbiAgICBsZWZ0OiBib3VuZGluZ0JveC5sZWZ0IC0gbWFyZ2luc1snbWFyZ2luLWxlZnQnXSArICdweCcsXG4gICAgcmlnaHQ6IGJvdW5kaW5nQm94LnJpZ2h0IC0gbWFyZ2luc1snbWFyZ2luLXJpZ2h0J10gKyAncHgnXG4gIH07XG5cbiAgYXBwbHlTdHlsZXNUb0RPTU5vZGUoeyBkb21Ob2RlOiBkb21Ob2RlLCBzdHlsZXM6IHN0eWxlcyB9KTtcbn07XG5cbi8qKiB1cGRhdGVIZWlnaHRQbGFjZWhvbGRlclxuICogQW4gb3B0aW9uYWwgcHJvcGVydHkgdG8gRmxpcE1vdmUgaXMgYSBgbWFpbnRhaW5Db250YWluZXJIZWlnaHRgIGJvb2xlYW4uXG4gKiBUaGlzIHByb3BlcnR5IGNyZWF0ZXMgYSBub2RlIHRoYXQgZmlsbHMgc3BhY2UsIHNvIHRoYXQgdGhlIHBhcmVudFxuICogY29udGFpbmVyIGRvZXNuJ3QgY29sbGFwc2Ugd2hlbiBpdHMgY2hpbGRyZW4gYXJlIHJlbW92ZWQgZnJvbSB0aGVcbiAqIGRvY3VtZW50IGZsb3cuXG4gKi9cbnZhciB1cGRhdGVIZWlnaHRQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIHVwZGF0ZUhlaWdodFBsYWNlaG9sZGVyKF9yZWY0KSB7XG4gIHZhciBkb21Ob2RlID0gX3JlZjQuZG9tTm9kZSxcbiAgICAgIHBhcmVudERhdGEgPSBfcmVmNC5wYXJlbnREYXRhLFxuICAgICAgZ2V0UG9zaXRpb24gPSBfcmVmNC5nZXRQb3NpdGlvbjtcblxuICB2YXIgcGFyZW50RG9tTm9kZSA9IHBhcmVudERhdGEuZG9tTm9kZTtcbiAgdmFyIHBhcmVudEJvdW5kaW5nQm94ID0gcGFyZW50RGF0YS5ib3VuZGluZ0JveDtcblxuICBpZiAoIXBhcmVudERvbU5vZGUgfHwgIXBhcmVudEJvdW5kaW5nQm94KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gV2UgbmVlZCB0byBmaW5kIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRhaW5lciAqd2l0aG91dCogdGhlIHBsYWNlaG9sZGVyLlxuICAvLyBTaW5jZSBpdCdzIHBvc3NpYmxlIHRoYXQgdGhlIHBsYWNlaG9sZGVyIG1pZ2h0IGFscmVhZHkgYmUgcHJlc2VudCxcbiAgLy8gd2UgZmlyc3Qgc2V0IGl0cyBoZWlnaHQgdG8gMC5cbiAgLy8gVGhpcyBhbGxvd3MgdGhlIGNvbnRhaW5lciB0byBjb2xsYXBzZSBkb3duIHRvIHRoZSBzaXplIG9mIGp1c3QgaXRzXG4gIC8vIGNvbnRlbnQgKHBsdXMgY29udGFpbmVyIHBhZGRpbmcgb3IgYm9yZGVycyBpZiBhbnkpLlxuICBhcHBseVN0eWxlc1RvRE9NTm9kZSh7IGRvbU5vZGU6IGRvbU5vZGUsIHN0eWxlczogeyBoZWlnaHQ6ICcwJyB9IH0pO1xuXG4gIC8vIEZpbmQgdGhlIGRpc3RhbmNlIGJ5IHdoaWNoIHRoZSBjb250YWluZXIgd291bGQgYmUgY29sbGFwc2VkIGJ5IGVsZW1lbnRzXG4gIC8vIGxlYXZpbmcuIFdlIGNvbXBhcmUgdGhlIGZyZXNobHktYXZhaWxhYmxlIHBhcmVudCBoZWlnaHQgd2l0aCB0aGUgb3JpZ2luYWwsXG4gIC8vIGNhY2hlZCBjb250YWluZXIgaGVpZ2h0LlxuICB2YXIgb3JpZ2luYWxQYXJlbnRIZWlnaHQgPSBwYXJlbnRCb3VuZGluZ0JveC5oZWlnaHQ7XG4gIHZhciBjb2xsYXBzZWRQYXJlbnRIZWlnaHQgPSBnZXRQb3NpdGlvbihwYXJlbnREb21Ob2RlKS5oZWlnaHQ7XG4gIHZhciByZWR1Y3Rpb25JbkhlaWdodCA9IG9yaWdpbmFsUGFyZW50SGVpZ2h0IC0gY29sbGFwc2VkUGFyZW50SGVpZ2h0O1xuXG4gIC8vIElmIHRoZSBjb250YWluZXIgaGFzIGJlY29tZSBzaG9ydGVyLCB1cGRhdGUgdGhlIHBhZGRpbmcgZWxlbWVudCdzXG4gIC8vIGhlaWdodCB0byB0YWtlIHVwIHRoZSBkaWZmZXJlbmNlLiBPdGhlcndpc2Ugc2V0IGl0cyBoZWlnaHQgdG8gemVybyxcbiAgLy8gc28gdGhhdCBpdCBoYXMgbm8gZWZmZWN0LlxuICB2YXIgc3R5bGVzID0ge1xuICAgIGhlaWdodDogcmVkdWN0aW9uSW5IZWlnaHQgPiAwID8gcmVkdWN0aW9uSW5IZWlnaHQgKyAncHgnIDogJzAnXG4gIH07XG5cbiAgYXBwbHlTdHlsZXNUb0RPTU5vZGUoeyBkb21Ob2RlOiBkb21Ob2RlLCBzdHlsZXM6IHN0eWxlcyB9KTtcbn07XG5cbnZhciBnZXROYXRpdmVOb2RlID0gZnVuY3Rpb24gZ2V0TmF0aXZlTm9kZShlbGVtZW50KSB7XG4gIC8vIFdoZW4gcnVubmluZyBpbiBhIHdpbmRvd2xlc3MgZW52aXJvbm1lbnQsIGFib3J0IVxuICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gYGVsZW1lbnRgIG1heSBhbHJlYWR5IGJlIGEgbmF0aXZlIG5vZGUuXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFdoaWxlIFJlYWN0RE9NJ3MgYGZpbmRET01Ob2RlYCBpcyBkaXNjb3VyYWdlZCwgaXQncyB0aGUgb25seVxuICAvLyBwdWJsaWNseS1leHBvc2VkIHdheSB0byBmaW5kIHRoZSB1bmRlcmx5aW5nIERPTSBub2RlIGZvclxuICAvLyBjb21wb3NpdGUgY29tcG9uZW50cy5cbiAgdmFyIGZvdW5kTm9kZSA9IGZpbmRET01Ob2RlKGVsZW1lbnQpO1xuXG4gIGlmIChmb3VuZE5vZGUgJiYgZm91bmROb2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xuICAgIC8vIFRleHQgbm9kZXMgYXJlIG5vdCBzdXBwb3J0ZWRcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZmxvd3R5cGUvbm8td2Vhay10eXBlc1xuICByZXR1cm4gZm91bmROb2RlO1xufTtcblxudmFyIGNyZWF0ZVRyYW5zaXRpb25TdHJpbmcgPSBmdW5jdGlvbiBjcmVhdGVUcmFuc2l0aW9uU3RyaW5nKGluZGV4LCBwcm9wcykge1xuICB2YXIgZGVsYXkgPSBwcm9wcy5kZWxheSxcbiAgICAgIGR1cmF0aW9uID0gcHJvcHMuZHVyYXRpb247XG4gIHZhciBzdGFnZ2VyRHVyYXRpb25CeSA9IHByb3BzLnN0YWdnZXJEdXJhdGlvbkJ5LFxuICAgICAgc3RhZ2dlckRlbGF5QnkgPSBwcm9wcy5zdGFnZ2VyRGVsYXlCeSxcbiAgICAgIGVhc2luZyA9IHByb3BzLmVhc2luZztcblxuXG4gIGRlbGF5ICs9IGluZGV4ICogc3RhZ2dlckRlbGF5Qnk7XG4gIGR1cmF0aW9uICs9IGluZGV4ICogc3RhZ2dlckR1cmF0aW9uQnk7XG5cbiAgdmFyIGNzc1Byb3BlcnRpZXMgPSBbJ3RyYW5zZm9ybScsICdvcGFjaXR5J107XG5cbiAgcmV0dXJuIGNzc1Byb3BlcnRpZXMubWFwKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgcmV0dXJuIHByb3AgKyAnICcgKyBkdXJhdGlvbiArICdtcyAnICsgZWFzaW5nICsgJyAnICsgZGVsYXkgKyAnbXMnO1xuICB9KS5qb2luKCcsICcpO1xufTtcblxuLyoqXG4gKiBSZWFjdCBGbGlwIE1vdmVcbiAqIChjKSAyMDE2LXByZXNlbnQgSm9zaHVhIENvbWVhdVxuICpcbiAqIEZvciBpbmZvcm1hdGlvbiBvbiBob3cgdGhpcyBjb2RlIGlzIGxhaWQgb3V0LCBjaGVjayBvdXQgQ09ERV9UT1VSLm1kXG4gKi9cblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZHVwbGljYXRlLWltcG9ydHNcblxuXG52YXIgdHJhbnNpdGlvbkVuZCA9IHdoaWNoVHJhbnNpdGlvbkV2ZW50KCk7XG52YXIgbm9Ccm93c2VyU3VwcG9ydCA9ICF0cmFuc2l0aW9uRW5kO1xuXG5mdW5jdGlvbiBnZXRLZXkoY2hpbGREYXRhKSB7XG4gIHJldHVybiBjaGlsZERhdGEua2V5IHx8ICcnO1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50Q2hpbGRyZW4oY2hpbGRyZW4pIHtcbiAgLy8gRml4IGluY29tcGxldGUgdHlwaW5nIG9mIENoaWxkcmVuLnRvQXJyYXlcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZsb3d0eXBlL25vLXdlYWstdHlwZXNcbiAgcmV0dXJuIENoaWxkcmVuLnRvQXJyYXkoY2hpbGRyZW4pO1xufVxuXG52YXIgRmxpcE1vdmUkMSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIGluaGVyaXRzKEZsaXBNb3ZlLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBGbGlwTW92ZSgpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRmxpcE1vdmUpO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuY2FsbC5hcHBseShfQ29tcG9uZW50LCBbdGhpc10uY29uY2F0KGFyZ3MpKSksIF90aGlzKSwgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBjaGlsZHJlbjogZ2V0RWxlbWVudENoaWxkcmVuKFxuICAgICAgLy8gYHRoaXMucHJvcHNgIG91Z2h0IHRvIGFsd2F5cyBiZSBkZWZpbmVkIGF0IHRoaXMgcG9pbnQsIGJ1dCBhIHJlcG9ydFxuICAgICAgLy8gd2FzIG1hZGUgYWJvdXQgaXQgbm90IGJlaW5nIGRlZmluZWQgaW4gSUUxMC5cbiAgICAgIC8vIFRPRE86IFRlc3QgaW4gSUUxMCwgdG8gc2VlIGlmIHRoZXJlJ3MgYW4gdW5kZXJseWluZyBjYXVzZSB0aGF0IGNhblxuICAgICAgLy8gYmUgYWRkcmVzc2VkLlxuICAgICAgX3RoaXMucHJvcHMgPyBfdGhpcy5wcm9wcy5jaGlsZHJlbiA6IFtdKS5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBlbGVtZW50LCB7XG4gICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICBhcHBlYXJpbmc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIH0sIF90aGlzLmNoaWxkcmVuRGF0YSA9IHt9LCBfdGhpcy5wYXJlbnREYXRhID0ge1xuICAgICAgZG9tTm9kZTogbnVsbCxcbiAgICAgIGJvdW5kaW5nQm94OiBudWxsXG4gICAgfSwgX3RoaXMuaGVpZ2h0UGxhY2Vob2xkZXJEYXRhID0ge1xuICAgICAgZG9tTm9kZTogbnVsbFxuICAgIH0sIF90aGlzLnJlbWFpbmluZ0FuaW1hdGlvbnMgPSAwLCBfdGhpcy5jaGlsZHJlblRvQW5pbWF0ZSA9IFtdLCBfdGhpcy5maW5kRE9NQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0L25vLWZpbmQtZG9tLW5vZGVcbiAgICAgIHZhciBkb21Ob2RlID0gUmVhY3RET00uZmluZERPTU5vZGUoX3RoaXMpO1xuICAgICAgdmFyIHBhcmVudE5vZGUgPSBkb21Ob2RlICYmIGRvbU5vZGUucGFyZW50Tm9kZTtcblxuICAgICAgLy8gVGhpcyBvdWdodCB0byBiZSBpbXBvc3NpYmxlLCBidXQgaGFuZGxpbmcgaXQgZm9yIEZsb3cncyBzYWtlLlxuICAgICAgaWYgKCFwYXJlbnROb2RlIHx8ICEocGFyZW50Tm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoZSBwYXJlbnQgbm9kZSBoYXMgc3RhdGljIHBvc2l0aW9uaW5nLCBsZWF2ZSBhbmltYXRpb25zIG1pZ2h0IGxvb2tcbiAgICAgIC8vIHJlYWxseSBmdW5reS4gTGV0J3MgYXV0b21hdGljYWxseSBhcHBseSBgcG9zaXRpb246IHJlbGF0aXZlYCBpbiB0aGlzXG4gICAgICAvLyBjYXNlLCB0byBwcmV2ZW50IGFueSBxdWlya2luZXNzLlxuICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmVudE5vZGUpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICBwYXJlbnROb2RlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgcGFyZW50Tm9kZVBvc2l0aW9uU3RhdGljKCk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLnBhcmVudERhdGEuZG9tTm9kZSA9IHBhcmVudE5vZGU7XG4gICAgfSwgX3RoaXMucnVuQW5pbWF0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGR5bmFtaWNDaGlsZHJlbiA9IF90aGlzLnN0YXRlLmNoaWxkcmVuLmZpbHRlcihfdGhpcy5kb2VzQ2hpbGROZWVkVG9CZUFuaW1hdGVkKTtcblxuICAgICAgLy8gU3BsaXR0aW5nIERPTSByZWFkcyBhbmQgd3JpdGVzIHRvIGJlIHBlZm9ybWVkIGluIGJhdGNoZXNcbiAgICAgIHZhciBjaGlsZHJlbkluaXRpYWxTdHlsZXMgPSBkeW5hbWljQ2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY29tcHV0ZUluaXRpYWxTdHlsZXMoY2hpbGQpO1xuICAgICAgfSk7XG4gICAgICBkeW5hbWljQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgIF90aGlzLnJlbWFpbmluZ0FuaW1hdGlvbnMgKz0gMTtcbiAgICAgICAgX3RoaXMuY2hpbGRyZW5Ub0FuaW1hdGUucHVzaChnZXRLZXkoY2hpbGQpKTtcbiAgICAgICAgX3RoaXMuYW5pbWF0ZUNoaWxkKGNoaWxkLCBpbmRleCwgY2hpbGRyZW5Jbml0aWFsU3R5bGVzW2luZGV4XSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBfdGhpcy5wcm9wcy5vblN0YXJ0QWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIF90aGlzLmNhbGxDaGlsZHJlbkhvb2soX3RoaXMucHJvcHMub25TdGFydEFsbCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuZG9lc0NoaWxkTmVlZFRvQmVBbmltYXRlZCA9IGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgLy8gSWYgdGhlIGNoaWxkIGRvZXNuJ3QgaGF2ZSBhIGtleSwgaXQncyBhbiBpbW1vdmFibGUgY2hpbGQgKG9uZSB0aGF0IHdlXG4gICAgICAvLyBkbyBub3Qgd2FudCB0byBkbyBGTElQIHN0dWZmIHRvLilcbiAgICAgIGlmICghZ2V0S2V5KGNoaWxkKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZERhdGEgPSBfdGhpcy5nZXRDaGlsZERhdGEoZ2V0S2V5KGNoaWxkKSk7XG4gICAgICB2YXIgY2hpbGREb21Ob2RlID0gY2hpbGREYXRhLmRvbU5vZGU7XG4gICAgICB2YXIgY2hpbGRCb3VuZGluZ0JveCA9IGNoaWxkRGF0YS5ib3VuZGluZ0JveDtcbiAgICAgIHZhciBwYXJlbnRCb3VuZGluZ0JveCA9IF90aGlzLnBhcmVudERhdGEuYm91bmRpbmdCb3g7XG5cbiAgICAgIGlmICghY2hpbGREb21Ob2RlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgYXBwZWFyQW5pbWF0aW9uID0gX3RoaXMkcHJvcHMuYXBwZWFyQW5pbWF0aW9uLFxuICAgICAgICAgIGVudGVyQW5pbWF0aW9uID0gX3RoaXMkcHJvcHMuZW50ZXJBbmltYXRpb24sXG4gICAgICAgICAgbGVhdmVBbmltYXRpb24gPSBfdGhpcyRwcm9wcy5sZWF2ZUFuaW1hdGlvbixcbiAgICAgICAgICBnZXRQb3NpdGlvbiA9IF90aGlzJHByb3BzLmdldFBvc2l0aW9uO1xuXG5cbiAgICAgIHZhciBpc0FwcGVhcmluZ1dpdGhBbmltYXRpb24gPSBjaGlsZC5hcHBlYXJpbmcgJiYgYXBwZWFyQW5pbWF0aW9uO1xuICAgICAgdmFyIGlzRW50ZXJpbmdXaXRoQW5pbWF0aW9uID0gY2hpbGQuZW50ZXJpbmcgJiYgZW50ZXJBbmltYXRpb247XG4gICAgICB2YXIgaXNMZWF2aW5nV2l0aEFuaW1hdGlvbiA9IGNoaWxkLmxlYXZpbmcgJiYgbGVhdmVBbmltYXRpb247XG5cbiAgICAgIGlmIChpc0FwcGVhcmluZ1dpdGhBbmltYXRpb24gfHwgaXNFbnRlcmluZ1dpdGhBbmltYXRpb24gfHwgaXNMZWF2aW5nV2l0aEFuaW1hdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gSWYgaXQgaXNuJ3QgZW50ZXJpbmcvbGVhdmluZywgd2Ugd2FudCB0byBhbmltYXRlIGl0IGlmIGl0J3NcbiAgICAgIC8vIG9uLXNjcmVlbiBwb3NpdGlvbiBoYXMgY2hhbmdlZC5cblxuICAgICAgdmFyIF9nZXRQb3NpdGlvbkRlbHRhID0gZ2V0UG9zaXRpb25EZWx0YSh7XG4gICAgICAgIGNoaWxkRG9tTm9kZTogY2hpbGREb21Ob2RlLFxuICAgICAgICBjaGlsZEJvdW5kaW5nQm94OiBjaGlsZEJvdW5kaW5nQm94LFxuICAgICAgICBwYXJlbnRCb3VuZGluZ0JveDogcGFyZW50Qm91bmRpbmdCb3gsXG4gICAgICAgIGdldFBvc2l0aW9uOiBnZXRQb3NpdGlvblxuICAgICAgfSksXG4gICAgICAgICAgZFggPSBfZ2V0UG9zaXRpb25EZWx0YVswXSxcbiAgICAgICAgICBkWSA9IF9nZXRQb3NpdGlvbkRlbHRhWzFdO1xuXG4gICAgICByZXR1cm4gZFggIT09IDAgfHwgZFkgIT09IDA7XG4gICAgfSwgX3RlbXApLCBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuICAvLyBDb3B5IHByb3BzLmNoaWxkcmVuIGludG8gc3RhdGUuXG4gIC8vIFRvIHVuZGVyc3RhbmQgd2h5IHRoaXMgaXMgaW1wb3J0YW50IChhbmQgbm90IGFuIGFudGktcGF0dGVybiksIGNvbnNpZGVyXG4gIC8vIGhvdyBcImxlYXZlXCIgYW5pbWF0aW9ucyB3b3JrLiBBbiBpdGVtIGhhcyBcImxlZnRcIiB3aGVuIHRoZSBjb21wb25lbnRcbiAgLy8gcmVjZWl2ZXMgYSBuZXcgc2V0IG9mIHByb3BzIHRoYXQgZG8gTk9UIGNvbnRhaW4gdGhlIGl0ZW0uXG4gIC8vIElmIHdlIGp1c3QgcmVuZGVyIHRoZSBwcm9wcyBhcy1pcywgdGhlIGl0ZW0gd291bGQgaW5zdGFudGx5IGRpc2FwcGVhci5cbiAgLy8gV2Ugd2FudCB0byBrZWVwIHRoZSBpdGVtIHJlbmRlcmVkIGZvciBhIGxpdHRsZSB3aGlsZSwgdW50aWwgaXRzIGFuaW1hdGlvblxuICAvLyBjYW4gY29tcGxldGUuIEJlY2F1c2Ugd2UgY2Fubm90IG11dGF0ZSBwcm9wcywgd2UgbWFrZSBgc3RhdGVgIHRoZSBzb3VyY2VcbiAgLy8gb2YgdHJ1dGguXG5cblxuICAvLyBGbGlwTW92ZSBuZWVkcyB0byBrbm93IHF1aXRlIGEgYml0IGFib3V0IGl0cyBjaGlsZHJlbiBpbiBvcmRlciB0byBkb1xuICAvLyBpdHMgam9iLiBXZSBzdG9yZSB0aGVzZSBhcyBhIHByb3BlcnR5IG9uIHRoZSBpbnN0YW5jZS4gV2UncmUgbm90IHVzaW5nXG4gIC8vIHN0YXRlLCBiZWNhdXNlIHdlIGRvbid0IHdhbnQgY2hhbmdlcyB0byB0cmlnZ2VyIHJlLXJlbmRlcnMsIHdlIGp1c3RcbiAgLy8gbmVlZCBhIHBsYWNlIHRvIGtlZXAgdGhlIGRhdGEgZm9yIHJlZmVyZW5jZSwgd2hlbiBjaGFuZ2VzIGhhcHBlbi5cbiAgLy8gVGhpcyBmaWVsZCBzaG91bGQgbm90IGJlIGFjY2Vzc2VkIGRpcmVjdGx5LiBJbnN0ZWFkLCB1c2UgZ2V0Q2hpbGREYXRhLFxuICAvLyBwdXRDaGlsZERhdGEsIGV0Yy4uLlxuXG5cbiAgLy8gU2ltaWxhcmx5LCB0cmFjayB0aGUgZG9tIG5vZGUgYW5kIGJveCBvZiBvdXIgcGFyZW50IGVsZW1lbnQuXG5cblxuICAvLyBJZiBgbWFpbnRhaW5Db250YWluZXJIZWlnaHRgIHByb3AgaXMgc2V0IHRvIHRydWUsIHdlJ2xsIGNyZWF0ZSBhXG4gIC8vIHBsYWNlaG9sZGVyIGVsZW1lbnQgd2hpY2ggb2NjdXBpZXMgc3BhY2Ugc28gdGhhdCB0aGUgcGFyZW50IGhlaWdodFxuICAvLyBkb2Vzbid0IGNoYW5nZSB3aGVuIGl0ZW1zIGFyZSByZW1vdmVkIGZyb20gdGhlIGRvY3VtZW50IGZsb3cgKHdoaWNoXG4gIC8vIGhhcHBlbnMgZHVyaW5nIGxlYXZlIGFuaW1hdGlvbnMpXG5cblxuICAvLyBLZWVwIHRyYWNrIG9mIHJlbWFpbmluZyBhbmltYXRpb25zIHNvIHdlIGtub3cgd2hlbiB0byBmaXJlIHRoZVxuICAvLyBhbGwtZmluaXNoZWQgY2FsbGJhY2ssIGFuZCBjbGVhbiB1cCBhZnRlciBvdXJzZWx2ZXMuXG4gIC8vIE5PVEU6IHdlIGNhbid0IHNpbXBseSB1c2UgY2hpbGRyZW5Ub0FuaW1hdGUubGVuZ3RoIHRvIHRyYWNrIHJlbWFpbmluZ1xuICAvLyBhbmltYXRpb25zLCBiZWNhdXNlIHdlIG5lZWQgdG8gbWFpbnRhaW4gdGhlIGxpc3Qgb2YgYW5pbWF0aW5nIGNoaWxkcmVuLFxuICAvLyB0byBwYXNzIHRvIHRoZSBgb25GaW5pc2hBbGxgIGhhbmRsZXIuXG5cblxuICBGbGlwTW92ZS5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAvLyBCZWNhdXNlIFJlYWN0IDE2IG5vIGxvbmdlciByZXF1aXJlcyB3cmFwcGluZyBlbGVtZW50cywgRmxpcCBNb3ZlIGNhbiBvcHRcbiAgICAvLyB0byBub3Qgd3JhcCB0aGUgY2hpbGRyZW4gaW4gYW4gZWxlbWVudC4gSW4gdGhhdCBjYXNlLCBmaW5kIHRoZSBwYXJlbnRcbiAgICAvLyBlbGVtZW50IHVzaW5nIGBmaW5kRE9NTm9kZWAuXG4gICAgaWYgKHRoaXMucHJvcHMudHlwZU5hbWUgPT09IG51bGwpIHtcbiAgICAgIHRoaXMuZmluZERPTUNvbnRhaW5lcigpO1xuICAgIH1cblxuICAgIC8vIFJ1biBvdXIgYGFwcGVhckFuaW1hdGlvbmAgaWYgaXQgd2FzIHJlcXVlc3RlZCwgcmlnaHQgYWZ0ZXIgdGhlXG4gICAgLy8gY29tcG9uZW50IG1vdW50cy5cbiAgICB2YXIgc2hvdWxkVHJpZ2dlckZMSVAgPSB0aGlzLnByb3BzLmFwcGVhckFuaW1hdGlvbiAmJiAhdGhpcy5pc0FuaW1hdGlvbkRpc2FibGVkKHRoaXMucHJvcHMpO1xuXG4gICAgaWYgKHNob3VsZFRyaWdnZXJGTElQKSB7XG4gICAgICB0aGlzLnByZXBGb3JBbmltYXRpb24oKTtcbiAgICAgIHRoaXMucnVuQW5pbWF0aW9uKCk7XG4gICAgfVxuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldmlvdXNQcm9wcykge1xuICAgIGlmICh0aGlzLnByb3BzLnR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICB0aGlzLmZpbmRET01Db250YWluZXIoKTtcbiAgICB9XG4gICAgLy8gSWYgdGhlIGNoaWxkcmVuIGhhdmUgYmVlbiByZS1hcnJhbmdlZCwgbW92ZWQsIG9yIGFkZGVkL3JlbW92ZWQsXG4gICAgLy8gdHJpZ2dlciB0aGUgbWFpbiBGTElQIGFuaW1hdGlvbi5cbiAgICAvL1xuICAgIC8vIElNUE9SVEFOVDogV2UgbmVlZCB0byBtYWtlIHN1cmUgdGhhdCB0aGUgY2hpbGRyZW4gaGF2ZSBhY3R1YWxseSBjaGFuZ2VkLlxuICAgIC8vIEF0IHRoZSBlbmQgb2YgdGhlIHRyYW5zaXRpb24sIHdlIGNsZWFuIHVwIG5vZGVzIHRoYXQgbmVlZCB0byBiZSByZW1vdmVkLlxuICAgIC8vIFdlIERPTidUIHdhbnQgdGhpcyBjbGVhbnVwIHRvIHRyaWdnZXIgYW5vdGhlciB1cGRhdGUuXG5cbiAgICB2YXIgb2xkQ2hpbGRyZW5LZXlzID0gZ2V0RWxlbWVudENoaWxkcmVuKHRoaXMucHJvcHMuY2hpbGRyZW4pLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQua2V5O1xuICAgIH0pO1xuICAgIHZhciBuZXh0Q2hpbGRyZW5LZXlzID0gZ2V0RWxlbWVudENoaWxkcmVuKHByZXZpb3VzUHJvcHMuY2hpbGRyZW4pLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgcmV0dXJuIGQua2V5O1xuICAgIH0pO1xuXG4gICAgdmFyIHNob3VsZFRyaWdnZXJGTElQID0gIWFycmF5c0VxdWFsKG9sZENoaWxkcmVuS2V5cywgbmV4dENoaWxkcmVuS2V5cykgJiYgIXRoaXMuaXNBbmltYXRpb25EaXNhYmxlZCh0aGlzLnByb3BzKTtcblxuICAgIGlmIChzaG91bGRUcmlnZ2VyRkxJUCkge1xuICAgICAgdGhpcy5wcmVwRm9yQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLnJ1bkFuaW1hdGlvbigpO1xuICAgIH1cbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUuY2FsY3VsYXRlTmV4dFNldE9mQ2hpbGRyZW4gPSBmdW5jdGlvbiBjYWxjdWxhdGVOZXh0U2V0T2ZDaGlsZHJlbihuZXh0Q2hpbGRyZW4pIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIC8vIFdlIHdhbnQgdG86XG4gICAgLy8gICAtIE1hcmsgYWxsIG5ldyBjaGlsZHJlbiBhcyBgZW50ZXJpbmdgXG4gICAgLy8gICAtIFB1bGwgaW4gcHJldmlvdXMgY2hpbGRyZW4gdGhhdCBhcmVuJ3QgaW4gbmV4dENoaWxkcmVuLCBhbmQgbWFyayB0aGVtXG4gICAgLy8gICAgIGFzIGBsZWF2aW5nYFxuICAgIC8vICAgLSBQcmVzZXJ2ZSB0aGUgbmV4dENoaWxkcmVuIGxpc3Qgb3JkZXIsIHdpdGggbGVhdmluZyBjaGlsZHJlbiBpbiB0aGVpclxuICAgIC8vICAgICBhcHByb3ByaWF0ZSBwbGFjZXMuXG4gICAgLy9cblxuICAgIHZhciB1cGRhdGVkQ2hpbGRyZW4gPSBuZXh0Q2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChuZXh0Q2hpbGQpIHtcbiAgICAgIHZhciBjaGlsZCA9IF90aGlzMi5maW5kQ2hpbGRCeUtleShuZXh0Q2hpbGQua2V5KTtcblxuICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgY2hpbGQgZGlkIGV4aXN0LCBidXQgaXQgd2FzIGluIHRoZSBtaWRzdCBvZiBsZWF2aW5nLFxuICAgICAgLy8gd2Ugd2FudCB0byB0cmVhdCBpdCBhcyB0aG91Z2ggaXQncyBlbnRlcmluZ1xuICAgICAgdmFyIGlzRW50ZXJpbmcgPSAhY2hpbGQgfHwgY2hpbGQubGVhdmluZztcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBuZXh0Q2hpbGQsIHsgZWxlbWVudDogbmV4dENoaWxkLCBlbnRlcmluZzogaXNFbnRlcmluZyB9KTtcbiAgICB9KTtcblxuICAgIC8vIFRoaXMgaXMgdHJpY2t5LiBXZSB3YW50IHRvIGtlZXAgdGhlIG5leHRDaGlsZHJlbidzIG9yZGVyaW5nLCBidXQgd2l0aFxuICAgIC8vIGFueSBqdXN0LXJlbW92ZWQgaXRlbXMgbWFpbnRhaW5pbmcgdGhlaXIgb3JpZ2luYWwgcG9zaXRpb24uXG4gICAgLy8gZWcuXG4gICAgLy8gICB0aGlzLnN0YXRlLmNoaWxkcmVuICA9IFsgMSwgMiwgMywgNCBdXG4gICAgLy8gICBuZXh0Q2hpbGRyZW4gICAgICAgICA9IFsgMywgMSBdXG4gICAgLy9cbiAgICAvLyBJbiB0aGlzIGV4YW1wbGUsIHdlJ3ZlIHJlbW92ZWQgdGhlICcyJyAmICc0J1xuICAgIC8vIFdlIHdhbnQgdG8gZW5kIHVwIHdpdGg6ICBbIDIsIDMsIDEsIDQgXVxuICAgIC8vXG4gICAgLy8gVG8gYWNjb21wbGlzaCB0aGF0LCB3ZSdsbCBpdGVyYXRlIHRocm91Z2ggdGhpcy5zdGF0ZS5jaGlsZHJlbi4gd2hlbmV2ZXJcbiAgICAvLyB3ZSBmaW5kIGEgbWF0Y2gsIHdlJ2xsIGFwcGVuZCBvdXIgYGxlYXZpbmdgIGZsYWcgdG8gaXQsIGFuZCBpbnNlcnQgaXRcbiAgICAvLyBpbnRvIHRoZSBuZXh0Q2hpbGRyZW4gaW4gaXRzIE9SSUdJTkFMIHBvc2l0aW9uLiBOb3RlIHRoYXQsIGFzIHdlIGtlZXBcbiAgICAvLyBpbnNlcnRpbmcgb2xkIGl0ZW1zIGludG8gdGhlIG5ldyBsaXN0LCB0aGUgXCJvcmlnaW5hbFwiIHBvc2l0aW9uIHdpbGxcbiAgICAvLyBrZWVwIGluY3JlbWVudGluZy5cbiAgICB2YXIgbnVtT2ZDaGlsZHJlbkxlYXZpbmcgPSAwO1xuICAgIHRoaXMuc3RhdGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICB2YXIgaXNMZWF2aW5nID0gIWZpbmQoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIGtleSA9IF9yZWYua2V5O1xuICAgICAgICByZXR1cm4ga2V5ID09PSBnZXRLZXkoY2hpbGQpO1xuICAgICAgfSwgbmV4dENoaWxkcmVuKTtcblxuICAgICAgLy8gSWYgdGhlIGNoaWxkIGlzbid0IGxlYXZpbmcgKG9yLCBpZiB0aGVyZSBpcyBubyBsZWF2ZSBhbmltYXRpb24pLFxuICAgICAgLy8gd2UgZG9uJ3QgbmVlZCB0byBhZGQgaXQgaW50byB0aGUgc3RhdGUgY2hpbGRyZW4uXG4gICAgICBpZiAoIWlzTGVhdmluZyB8fCAhX3RoaXMyLnByb3BzLmxlYXZlQW5pbWF0aW9uKSByZXR1cm47XG5cbiAgICAgIHZhciBuZXh0Q2hpbGQgPSBfZXh0ZW5kcyh7fSwgY2hpbGQsIHsgbGVhdmluZzogdHJ1ZSB9KTtcbiAgICAgIHZhciBuZXh0Q2hpbGRJbmRleCA9IGluZGV4ICsgbnVtT2ZDaGlsZHJlbkxlYXZpbmc7XG5cbiAgICAgIHVwZGF0ZWRDaGlsZHJlbi5zcGxpY2UobmV4dENoaWxkSW5kZXgsIDAsIG5leHRDaGlsZCk7XG4gICAgICBudW1PZkNoaWxkcmVuTGVhdmluZyArPSAxO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVwZGF0ZWRDaGlsZHJlbjtcbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUucHJlcEZvckFuaW1hdGlvbiA9IGZ1bmN0aW9uIHByZXBGb3JBbmltYXRpb24oKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAvLyBPdXIgYW5pbWF0aW9uIHByZXAgY29uc2lzdHMgb2Y6XG4gICAgLy8gLSByZW1vdmUgY2hpbGRyZW4gdGhhdCBhcmUgbGVhdmluZyBmcm9tIHRoZSBET00gZmxvdywgc28gdGhhdCB0aGUgbmV3XG4gICAgLy8gICBsYXlvdXQgY2FuIGJlIGFjY3VyYXRlbHkgY2FsY3VsYXRlZCxcbiAgICAvLyAtIHVwZGF0ZSB0aGUgcGxhY2Vob2xkZXIgY29udGFpbmVyIGhlaWdodCwgaWYgbmVlZGVkLCB0byBlbnN1cmUgdGhhdFxuICAgIC8vICAgdGhlIHBhcmVudCdzIGhlaWdodCBkb2Vzbid0IGNvbGxhcHNlLlxuXG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGxlYXZlQW5pbWF0aW9uID0gX3Byb3BzLmxlYXZlQW5pbWF0aW9uLFxuICAgICAgICBtYWludGFpbkNvbnRhaW5lckhlaWdodCA9IF9wcm9wcy5tYWludGFpbkNvbnRhaW5lckhlaWdodCxcbiAgICAgICAgZ2V0UG9zaXRpb24gPSBfcHJvcHMuZ2V0UG9zaXRpb247XG5cbiAgICAvLyB3ZSBuZWVkIHRvIG1ha2UgYWxsIGxlYXZpbmcgbm9kZXMgXCJpbnZpc2libGVcIiB0byB0aGUgbGF5b3V0IGNhbGN1bGF0aW9uc1xuICAgIC8vIHRoYXQgd2lsbCB0YWtlIHBsYWNlIGluIHRoZSBuZXh0IHN0ZXAgKHRoaXMucnVuQW5pbWF0aW9uKS5cblxuICAgIGlmIChsZWF2ZUFuaW1hdGlvbikge1xuICAgICAgdmFyIGxlYXZpbmdDaGlsZHJlbiA9IHRoaXMuc3RhdGUuY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICByZXR1cm4gY2hpbGQubGVhdmluZztcbiAgICAgIH0pO1xuXG4gICAgICBsZWF2aW5nQ2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAobGVhdmluZ0NoaWxkKSB7XG4gICAgICAgIHZhciBjaGlsZERhdGEgPSBfdGhpczMuZ2V0Q2hpbGREYXRhKGdldEtleShsZWF2aW5nQ2hpbGQpKTtcblxuICAgICAgICAvLyBXYXJuIGlmIGNoaWxkIGlzIGRpc2FibGVkXG4gICAgICAgIGlmICghX3RoaXMzLmlzQW5pbWF0aW9uRGlzYWJsZWQoX3RoaXMzLnByb3BzKSAmJiBjaGlsZERhdGEuZG9tTm9kZSAmJiBjaGlsZERhdGEuZG9tTm9kZS5kaXNhYmxlZCkge1xuICAgICAgICAgIGNoaWxkSXNEaXNhYmxlZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2UgbmVlZCB0byB0YWtlIHRoZSBpdGVtcyBvdXQgb2YgdGhlIFwiZmxvd1wiIG9mIHRoZSBkb2N1bWVudCwgc28gdGhhdFxuICAgICAgICAvLyBpdHMgc2libGluZ3MgY2FuIG1vdmUgdG8gdGFrZSBpdHMgcGxhY2UuXG4gICAgICAgIGlmIChjaGlsZERhdGEuYm91bmRpbmdCb3gpIHtcbiAgICAgICAgICByZW1vdmVOb2RlRnJvbURPTUZsb3coY2hpbGREYXRhLCBfdGhpczMucHJvcHMudmVydGljYWxBbGlnbm1lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKG1haW50YWluQ29udGFpbmVySGVpZ2h0ICYmIHRoaXMuaGVpZ2h0UGxhY2Vob2xkZXJEYXRhLmRvbU5vZGUpIHtcbiAgICAgICAgdXBkYXRlSGVpZ2h0UGxhY2Vob2xkZXIoe1xuICAgICAgICAgIGRvbU5vZGU6IHRoaXMuaGVpZ2h0UGxhY2Vob2xkZXJEYXRhLmRvbU5vZGUsXG4gICAgICAgICAgcGFyZW50RGF0YTogdGhpcy5wYXJlbnREYXRhLFxuICAgICAgICAgIGdldFBvc2l0aW9uOiBnZXRQb3NpdGlvblxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGb3IgYWxsIGNoaWxkcmVuIG5vdCBpbiB0aGUgbWlkZGxlIG9mIGVudGVyaW5nIG9yIGxlYXZpbmcsXG4gICAgLy8gd2UgbmVlZCB0byByZXNldCB0aGUgdHJhbnNpdGlvbiwgc28gdGhhdCB0aGUgTkVXIHNodWZmbGUgc3RhcnRzIGZyb21cbiAgICAvLyB0aGUgcmlnaHQgcGxhY2UuXG4gICAgdGhpcy5zdGF0ZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgdmFyIF9nZXRDaGlsZERhdGEgPSBfdGhpczMuZ2V0Q2hpbGREYXRhKGdldEtleShjaGlsZCkpLFxuICAgICAgICAgIGRvbU5vZGUgPSBfZ2V0Q2hpbGREYXRhLmRvbU5vZGU7XG5cbiAgICAgIC8vIElnbm9yZSBjaGlsZHJlbiB0aGF0IGRvbid0IHJlbmRlciBET00gbm9kZXMgKGVnLiBieSByZXR1cm5pbmcgbnVsbClcblxuXG4gICAgICBpZiAoIWRvbU5vZGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWNoaWxkLmVudGVyaW5nICYmICFjaGlsZC5sZWF2aW5nKSB7XG4gICAgICAgIGFwcGx5U3R5bGVzVG9ET01Ob2RlKHtcbiAgICAgICAgICBkb21Ob2RlOiBkb21Ob2RlLFxuICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogJydcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcblxuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIFVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIC8vIFdoZW4gdGhlIGNvbXBvbmVudCBpcyBoYW5kZWQgbmV3IHByb3BzLCB3ZSBuZWVkIHRvIGZpZ3VyZSBvdXQgdGhlXG4gICAgLy8gXCJyZXN0aW5nXCIgcG9zaXRpb24gb2YgYWxsIGN1cnJlbnRseS1yZW5kZXJlZCBET00gbm9kZXMuXG4gICAgLy8gV2Ugc3RvcmUgdGhhdCBkYXRhIGluIHRoaXMucGFyZW50IGFuZCB0aGlzLmNoaWxkcmVuLFxuICAgIC8vIHNvIGl0IGNhbiBiZSB1c2VkIGxhdGVyIHRvIHdvcmsgb3V0IHRoZSBhbmltYXRpb24uXG4gICAgdGhpcy51cGRhdGVCb3VuZGluZ0JveENhY2hlcygpO1xuXG4gICAgLy8gQ29udmVydCBvcGFxdWUgY2hpbGRyZW4gb2JqZWN0IHRvIGFycmF5LlxuICAgIHZhciBuZXh0Q2hpbGRyZW4gPSBnZXRFbGVtZW50Q2hpbGRyZW4obmV4dFByb3BzLmNoaWxkcmVuKTtcblxuICAgIC8vIE5leHQsIHdlIG5lZWQgdG8gdXBkYXRlIG91ciBzdGF0ZSwgc28gdGhhdCBpdCBjb250YWlucyBvdXIgbmV3IHNldCBvZlxuICAgIC8vIGNoaWxkcmVuLiBJZiBhbmltYXRpb24gaXMgZGlzYWJsZWQgb3IgdW5zdXBwb3J0ZWQsIHRoaXMgaXMgZWFzeTtcbiAgICAvLyB3ZSBqdXN0IGNvcHkgb3VyIHByb3BzIGludG8gc3RhdGUuXG4gICAgLy8gQXNzdW1pbmcgdGhhdCB3ZSBjYW4gYW5pbWF0ZSwgdGhvdWdoLCB3ZSBoYXZlIHRvIGRvIHNvbWUgd29yay5cbiAgICAvLyBFc3NlbnRpYWxseSwgd2Ugd2FudCB0byBrZWVwIGp1c3QtZGVsZXRlZCBub2RlcyBpbiB0aGUgRE9NIGZvciBhIGJpdFxuICAgIC8vIGxvbmdlciwgc28gdGhhdCB3ZSBjYW4gYW5pbWF0ZSB0aGVtIGF3YXkuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjaGlsZHJlbjogdGhpcy5pc0FuaW1hdGlvbkRpc2FibGVkKG5leHRQcm9wcykgPyBuZXh0Q2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgZWxlbWVudCwgeyBlbGVtZW50OiBlbGVtZW50IH0pO1xuICAgICAgfSkgOiB0aGlzLmNhbGN1bGF0ZU5leHRTZXRPZkNoaWxkcmVuKG5leHRDaGlsZHJlbilcbiAgICB9KTtcbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUuYW5pbWF0ZUNoaWxkID0gZnVuY3Rpb24gYW5pbWF0ZUNoaWxkKGNoaWxkLCBpbmRleCwgY2hpbGRJbml0aWFsU3R5bGVzKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICB2YXIgX2dldENoaWxkRGF0YTIgPSB0aGlzLmdldENoaWxkRGF0YShnZXRLZXkoY2hpbGQpKSxcbiAgICAgICAgZG9tTm9kZSA9IF9nZXRDaGlsZERhdGEyLmRvbU5vZGU7XG5cbiAgICBpZiAoIWRvbU5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBcHBseSB0aGUgcmVsZXZhbnQgc3R5bGUgZm9yIHRoaXMgRE9NIG5vZGVcbiAgICAvLyBUaGlzIGlzIHRoZSBvZmZzZXQgZnJvbSBpdHMgYWN0dWFsIERPTSBwb3NpdGlvbi5cbiAgICAvLyBlZy4gaWYgYW4gaXRlbSBoYXMgYmVlbiByZS1yZW5kZXJlZCAyMHB4IGxvd2VyLCB3ZSB3YW50IHRvIGFwcGx5IGFcbiAgICAvLyBzdHlsZSBvZiAndHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgpJywgc28gdGhhdCBpdCBhcHBlYXJzIHRvIGJlIHdoZXJlXG4gICAgLy8gaXQgc3RhcnRlZC5cbiAgICAvLyBJbiBGTElQIHRlcm1pbm9sb2d5LCB0aGlzIGlzIHRoZSAnSW52ZXJ0JyBzdGFnZS5cbiAgICBhcHBseVN0eWxlc1RvRE9NTm9kZSh7XG4gICAgICBkb21Ob2RlOiBkb21Ob2RlLFxuICAgICAgc3R5bGVzOiBjaGlsZEluaXRpYWxTdHlsZXNcbiAgICB9KTtcblxuICAgIC8vIFN0YXJ0IGJ5IGludm9raW5nIHRoZSBvblN0YXJ0IGNhbGxiYWNrIGZvciB0aGlzIGNoaWxkLlxuICAgIGlmICh0aGlzLnByb3BzLm9uU3RhcnQpIHRoaXMucHJvcHMub25TdGFydChjaGlsZCwgZG9tTm9kZSk7XG5cbiAgICAvLyBOZXh0LCBhbmltYXRlIHRoZSBpdGVtIGZyb20gaXQncyBhcnRpZmljaWFsbHktb2Zmc2V0IHBvc2l0aW9uIHRvIGl0c1xuICAgIC8vIG5ldywgbmF0dXJhbCBwb3NpdGlvbi5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gTk9URSwgUkU6IHRoZSBkb3VibGUtcmVxdWVzdEFuaW1hdGlvbkZyYW1lOlxuICAgICAgICAvLyBTYWRseSwgdGhpcyBpcyB0aGUgbW9zdCBicm93c2VyLWNvbXBhdGlibGUgd2F5IHRvIGRvIHRoaXMgSSd2ZSBmb3VuZC5cbiAgICAgICAgLy8gRXNzZW50aWFsbHkgd2UgbmVlZCB0byBzZXQgdGhlIGluaXRpYWwgc3R5bGVzIG91dHNpZGUgb2YgYW55IHJlcXVlc3RcbiAgICAgICAgLy8gY2FsbGJhY2tzIHRvIGF2b2lkIGJhdGNoaW5nIHRoZW0uIFRoZW4sIGEgZnJhbWUgbmVlZHMgdG8gcGFzcyB3aXRoXG4gICAgICAgIC8vIHRoZSBzdHlsZXMgYWJvdmUgcmVuZGVyZWQuIFRoZW4sIG9uIHRoZSBzZWNvbmQgZnJhbWUsIHdlIGNhbiBhcHBseVxuICAgICAgICAvLyBvdXIgZmluYWwgc3R5bGVzIHRvIHBlcmZvcm0gdGhlIGFuaW1hdGlvbi5cblxuICAgICAgICAvLyBPdXIgZmlyc3Qgb3JkZXIgb2YgYnVzaW5lc3MgaXMgdG8gXCJ1bmRvXCIgdGhlIHN0eWxlcyBhcHBsaWVkIGluIHRoZVxuICAgICAgICAvLyBwcmV2aW91cyBmcmFtZXMsIHdoaWxlIGFsc28gYWRkaW5nIGEgYHRyYW5zaXRpb25gIHByb3BlcnR5LlxuICAgICAgICAvLyBUaGlzIHdheSwgdGhlIGl0ZW0gd2lsbCBzbW9vdGhseSB0cmFuc2l0aW9uIGZyb20gaXRzIG9sZCBwb3NpdGlvblxuICAgICAgICAvLyB0byBpdHMgbmV3IHBvc2l0aW9uLlxuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmbG93dHlwZS9yZXF1aXJlLXZhcmlhYmxlLXR5cGVcbiAgICAgICAgdmFyIHN0eWxlcyA9IHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjcmVhdGVUcmFuc2l0aW9uU3RyaW5nKGluZGV4LCBfdGhpczQucHJvcHMpLFxuICAgICAgICAgIHRyYW5zZm9ybTogJycsXG4gICAgICAgICAgb3BhY2l0eTogJydcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY2hpbGQuYXBwZWFyaW5nICYmIF90aGlzNC5wcm9wcy5hcHBlYXJBbmltYXRpb24pIHtcbiAgICAgICAgICBzdHlsZXMgPSBfZXh0ZW5kcyh7fSwgc3R5bGVzLCBfdGhpczQucHJvcHMuYXBwZWFyQW5pbWF0aW9uLnRvKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5lbnRlcmluZyAmJiBfdGhpczQucHJvcHMuZW50ZXJBbmltYXRpb24pIHtcbiAgICAgICAgICBzdHlsZXMgPSBfZXh0ZW5kcyh7fSwgc3R5bGVzLCBfdGhpczQucHJvcHMuZW50ZXJBbmltYXRpb24udG8pO1xuICAgICAgICB9IGVsc2UgaWYgKGNoaWxkLmxlYXZpbmcgJiYgX3RoaXM0LnByb3BzLmxlYXZlQW5pbWF0aW9uKSB7XG4gICAgICAgICAgc3R5bGVzID0gX2V4dGVuZHMoe30sIHN0eWxlcywgX3RoaXM0LnByb3BzLmxlYXZlQW5pbWF0aW9uLnRvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluIEZMSVAgdGVybWlub2xvZ3ksIHRoaXMgaXMgdGhlICdQbGF5JyBzdGFnZS5cbiAgICAgICAgYXBwbHlTdHlsZXNUb0RPTU5vZGUoeyBkb21Ob2RlOiBkb21Ob2RlLCBzdHlsZXM6IHN0eWxlcyB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5iaW5kVHJhbnNpdGlvbkVuZEhhbmRsZXIoY2hpbGQpO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5iaW5kVHJhbnNpdGlvbkVuZEhhbmRsZXIgPSBmdW5jdGlvbiBiaW5kVHJhbnNpdGlvbkVuZEhhbmRsZXIoY2hpbGQpIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHZhciBfZ2V0Q2hpbGREYXRhMyA9IHRoaXMuZ2V0Q2hpbGREYXRhKGdldEtleShjaGlsZCkpLFxuICAgICAgICBkb21Ob2RlID0gX2dldENoaWxkRGF0YTMuZG9tTm9kZTtcblxuICAgIGlmICghZG9tTm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRoZSBvbkZpbmlzaCBjYWxsYmFjayBuZWVkcyB0byBiZSBib3VuZCB0byB0aGUgdHJhbnNpdGlvbkVuZCBldmVudC5cbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gdW5iaW5kIGl0IHdoZW4gdGhlIHRyYW5zaXRpb24gY29tcGxldGVzLCBzbyB0aGlzIHVnbHlcbiAgICAvLyBpbmxpbmUgZnVuY3Rpb24gaXMgcmVxdWlyZWQgKHdlIG5lZWQgaXQgaGVyZSBzbyBpdCBjbG9zZXMgb3ZlclxuICAgIC8vIGRlcGVuZGVudCB2YXJpYWJsZXMgYGNoaWxkYCBhbmQgYGRvbU5vZGVgKVxuICAgIHZhciB0cmFuc2l0aW9uRW5kSGFuZGxlciA9IGZ1bmN0aW9uIHRyYW5zaXRpb25FbmRIYW5kbGVyKGV2KSB7XG4gICAgICAvLyBJdCdzIHBvc3NpYmxlIHRoYXQgdGhpcyBoYW5kbGVyIGlzIGZpcmVkIG5vdCBvbiBvdXIgcHJpbWFyeSB0cmFuc2l0aW9uLFxuICAgICAgLy8gYnV0IG9uIGEgbmVzdGVkIHRyYW5zaXRpb24gKGVnLiBhIGhvdmVyIGVmZmVjdCkuIElnbm9yZSB0aGVzZSBjYXNlcy5cbiAgICAgIGlmIChldi50YXJnZXQgIT09IGRvbU5vZGUpIHJldHVybjtcblxuICAgICAgLy8gUmVtb3ZlIHRoZSAndHJhbnNpdGlvbicgaW5saW5lIHN0eWxlIHdlIGFkZGVkLiBUaGlzIGlzIGNsZWFudXAuXG4gICAgICBkb21Ob2RlLnN0eWxlLnRyYW5zaXRpb24gPSAnJztcblxuICAgICAgLy8gVHJpZ2dlciBhbnkgYXBwbGljYWJsZSBvbkZpbmlzaC9vbkZpbmlzaEFsbCBob29rc1xuICAgICAgX3RoaXM1LnRyaWdnZXJGaW5pc2hIb29rcyhjaGlsZCwgZG9tTm9kZSk7XG5cbiAgICAgIGRvbU5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kLCB0cmFuc2l0aW9uRW5kSGFuZGxlcik7XG5cbiAgICAgIGlmIChjaGlsZC5sZWF2aW5nKSB7XG4gICAgICAgIF90aGlzNS5yZW1vdmVDaGlsZERhdGEoZ2V0S2V5KGNoaWxkKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcih0cmFuc2l0aW9uRW5kLCB0cmFuc2l0aW9uRW5kSGFuZGxlcik7XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLnRyaWdnZXJGaW5pc2hIb29rcyA9IGZ1bmN0aW9uIHRyaWdnZXJGaW5pc2hIb29rcyhjaGlsZCwgZG9tTm9kZSkge1xuICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgaWYgKHRoaXMucHJvcHMub25GaW5pc2gpIHRoaXMucHJvcHMub25GaW5pc2goY2hpbGQsIGRvbU5vZGUpO1xuXG4gICAgLy8gUmVkdWNlIHRoZSBudW1iZXIgb2YgY2hpbGRyZW4gd2UgbmVlZCB0byBhbmltYXRlIGJ5IDEsXG4gICAgLy8gc28gdGhhdCB3ZSBjYW4gdGVsbCB3aGVuIGFsbCBjaGlsZHJlbiBoYXZlIGZpbmlzaGVkLlxuICAgIHRoaXMucmVtYWluaW5nQW5pbWF0aW9ucyAtPSAxO1xuXG4gICAgaWYgKHRoaXMucmVtYWluaW5nQW5pbWF0aW9ucyA9PT0gMCkge1xuICAgICAgLy8gUmVtb3ZlIGFueSBpdGVtcyBmcm9tIHRoZSBET00gdGhhdCBoYXZlIGxlZnQsIGFuZCByZXNldCBgZW50ZXJpbmdgLlxuICAgICAgdmFyIG5leHRDaGlsZHJlbiA9IHRoaXMuc3RhdGUuY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICB2YXIgbGVhdmluZyA9IF9yZWYyLmxlYXZpbmc7XG4gICAgICAgIHJldHVybiAhbGVhdmluZztcbiAgICAgIH0pLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGl0ZW0sIHtcbiAgICAgICAgICAvLyBmaXggZm9yIEZsb3dcbiAgICAgICAgICBlbGVtZW50OiBpdGVtLmVsZW1lbnQsXG4gICAgICAgICAgYXBwZWFyaW5nOiBmYWxzZSxcbiAgICAgICAgICBlbnRlcmluZzogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNoaWxkcmVuOiBuZXh0Q2hpbGRyZW4gfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodHlwZW9mIF90aGlzNi5wcm9wcy5vbkZpbmlzaEFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIF90aGlzNi5jYWxsQ2hpbGRyZW5Ib29rKF90aGlzNi5wcm9wcy5vbkZpbmlzaEFsbCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXNldCBvdXIgdmFyaWFibGVzIGZvciB0aGUgbmV4dCBpdGVyYXRpb25cbiAgICAgICAgX3RoaXM2LmNoaWxkcmVuVG9BbmltYXRlID0gW107XG4gICAgICB9KTtcblxuICAgICAgLy8gSWYgdGhlIHBsYWNlaG9sZGVyIHdhcyBob2xkaW5nIHRoZSBjb250YWluZXIgb3BlbiB3aGlsZSBlbGVtZW50cyB3ZXJlXG4gICAgICAvLyBsZWF2aW5nLCB3ZSB3ZSBjYW4gbm93IHNldCBpdHMgaGVpZ2h0IHRvIHplcm8uXG4gICAgICBpZiAodGhpcy5oZWlnaHRQbGFjZWhvbGRlckRhdGEuZG9tTm9kZSkge1xuICAgICAgICB0aGlzLmhlaWdodFBsYWNlaG9sZGVyRGF0YS5kb21Ob2RlLnN0eWxlLmhlaWdodCA9ICcwJztcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmNhbGxDaGlsZHJlbkhvb2sgPSBmdW5jdGlvbiBjYWxsQ2hpbGRyZW5Ib29rKGhvb2spIHtcbiAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgIHZhciBlbGVtZW50cyA9IFtdO1xuICAgIHZhciBkb21Ob2RlcyA9IFtdO1xuXG4gICAgdGhpcy5jaGlsZHJlblRvQW5pbWF0ZS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZEtleSkge1xuICAgICAgLy8gSWYgdGhpcyB3YXMgYW4gZXhpdCBhbmltYXRpb24sIHRoZSBjaGlsZCBtYXkgbm8gbG9uZ2VyIGV4aXN0LlxuICAgICAgLy8gSWYgc28sIHNraXAgaXQuXG4gICAgICB2YXIgY2hpbGQgPSBfdGhpczcuZmluZENoaWxkQnlLZXkoY2hpbGRLZXkpO1xuXG4gICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgZWxlbWVudHMucHVzaChjaGlsZCk7XG5cbiAgICAgIGlmIChfdGhpczcuaGFzQ2hpbGREYXRhKGNoaWxkS2V5KSkge1xuICAgICAgICBkb21Ob2Rlcy5wdXNoKF90aGlzNy5nZXRDaGlsZERhdGEoY2hpbGRLZXkpLmRvbU5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaG9vayhlbGVtZW50cywgZG9tTm9kZXMpO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS51cGRhdGVCb3VuZGluZ0JveENhY2hlcyA9IGZ1bmN0aW9uIHVwZGF0ZUJvdW5kaW5nQm94Q2FjaGVzKCkge1xuICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgLy8gVGhpcyBpcyB0aGUgT05MWSBwbGFjZSB0aGF0IHBhcmVudERhdGEgYW5kIGNoaWxkcmVuRGF0YSdzXG4gICAgLy8gYm91bmRpbmcgYm94ZXMgYXJlIHVwZGF0ZWQuIFRoZXkgd2lsbCBiZSBjYWxjdWxhdGVkIGF0IG90aGVyIHRpbWVzXG4gICAgLy8gdG8gYmUgY29tcGFyZWQgdG8gdGhpcyB2YWx1ZSwgYnV0IGl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIGNhY2hlIGlzXG4gICAgLy8gdXBkYXRlZCBvbmNlIHBlciB1cGRhdGUuXG4gICAgdmFyIHBhcmVudERvbU5vZGUgPSB0aGlzLnBhcmVudERhdGEuZG9tTm9kZTtcblxuICAgIGlmICghcGFyZW50RG9tTm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucGFyZW50RGF0YS5ib3VuZGluZ0JveCA9IHRoaXMucHJvcHMuZ2V0UG9zaXRpb24ocGFyZW50RG9tTm9kZSk7XG5cbiAgICAvLyBTcGxpdHRpbmcgRE9NIHJlYWRzIGFuZCB3cml0ZXMgdG8gYmUgcGVmb3JtZWQgaW4gYmF0Y2hlc1xuICAgIHZhciBjaGlsZHJlbkJvdW5kaW5nQm94ZXMgPSBbXTtcblxuICAgIHRoaXMuc3RhdGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHZhciBjaGlsZEtleSA9IGdldEtleShjaGlsZCk7XG5cbiAgICAgIC8vIEl0IGlzIHBvc3NpYmxlIHRoYXQgYSBjaGlsZCBkb2VzIG5vdCBoYXZlIGEgYGtleWAgcHJvcGVydHk7XG4gICAgICAvLyBJZ25vcmUgdGhlc2UgY2hpbGRyZW4sIHRoZXkgZG9uJ3QgbmVlZCB0byBiZSBtb3ZlZC5cbiAgICAgIGlmICghY2hpbGRLZXkpIHtcbiAgICAgICAgY2hpbGRyZW5Cb3VuZGluZ0JveGVzLnB1c2gobnVsbCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gSW4gdmVyeSByYXJlIGNpcmN1bXN0YW5jZXMsIGZvciByZWFzb25zIHVua25vd24sIHRoZSByZWYgaXMgbmV2ZXJcbiAgICAgIC8vIHBvcHVsYXRlZCBmb3IgY2VydGFpbiBjaGlsZHJlbi4gSW4gdGhpcyBjYXNlLCBhdm9pZCBkb2luZyB0aGlzIHVwZGF0ZS5cbiAgICAgIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2pvc2h3Y29tZWF1L3JlYWN0LWZsaXAtbW92ZS9wdWxsLzkxXG4gICAgICBpZiAoIV90aGlzOC5oYXNDaGlsZERhdGEoY2hpbGRLZXkpKSB7XG4gICAgICAgIGNoaWxkcmVuQm91bmRpbmdCb3hlcy5wdXNoKG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGlsZERhdGEgPSBfdGhpczguZ2V0Q2hpbGREYXRhKGNoaWxkS2V5KTtcblxuICAgICAgLy8gSWYgdGhlIGNoaWxkIGVsZW1lbnQgcmV0dXJucyBudWxsLCB3ZSBuZWVkIHRvIGF2b2lkIHRyeWluZyB0b1xuICAgICAgLy8gYWNjb3VudCBmb3IgaXRcbiAgICAgIGlmICghY2hpbGREYXRhLmRvbU5vZGUgfHwgIWNoaWxkKSB7XG4gICAgICAgIGNoaWxkcmVuQm91bmRpbmdCb3hlcy5wdXNoKG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNoaWxkcmVuQm91bmRpbmdCb3hlcy5wdXNoKGdldFJlbGF0aXZlQm91bmRpbmdCb3goe1xuICAgICAgICBjaGlsZERvbU5vZGU6IGNoaWxkRGF0YS5kb21Ob2RlLFxuICAgICAgICBwYXJlbnREb21Ob2RlOiBwYXJlbnREb21Ob2RlLFxuICAgICAgICBnZXRQb3NpdGlvbjogX3RoaXM4LnByb3BzLmdldFBvc2l0aW9uXG4gICAgICB9KSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0YXRlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgdmFyIGNoaWxkS2V5ID0gZ2V0S2V5KGNoaWxkKTtcblxuICAgICAgdmFyIGNoaWxkQm91bmRpbmdCb3ggPSBjaGlsZHJlbkJvdW5kaW5nQm94ZXNbaW5kZXhdO1xuXG4gICAgICBpZiAoIWNoaWxkS2V5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgX3RoaXM4LnNldENoaWxkRGF0YShjaGlsZEtleSwge1xuICAgICAgICBib3VuZGluZ0JveDogY2hpbGRCb3VuZGluZ0JveFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmNvbXB1dGVJbml0aWFsU3R5bGVzID0gZnVuY3Rpb24gY29tcHV0ZUluaXRpYWxTdHlsZXMoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQuYXBwZWFyaW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5hcHBlYXJBbmltYXRpb24gPyB0aGlzLnByb3BzLmFwcGVhckFuaW1hdGlvbi5mcm9tIDoge307XG4gICAgfSBlbHNlIGlmIChjaGlsZC5lbnRlcmluZykge1xuICAgICAgaWYgKCF0aGlzLnByb3BzLmVudGVyQW5pbWF0aW9uKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICAgIC8vIElmIHRoaXMgY2hpbGQgd2FzIGluIHRoZSBtaWRkbGUgb2YgbGVhdmluZywgaXQgc3RpbGwgaGFzIGl0c1xuICAgICAgLy8gYWJzb2x1dGUgcG9zaXRpb25pbmcgc3R5bGVzIGFwcGxpZWQuIFdlIG5lZWQgdG8gdW5kbyB0aG9zZS5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIHBvc2l0aW9uOiAnJyxcbiAgICAgICAgdG9wOiAnJyxcbiAgICAgICAgbGVmdDogJycsXG4gICAgICAgIHJpZ2h0OiAnJyxcbiAgICAgICAgYm90dG9tOiAnJ1xuICAgICAgfSwgdGhpcy5wcm9wcy5lbnRlckFuaW1hdGlvbi5mcm9tKTtcbiAgICB9IGVsc2UgaWYgKGNoaWxkLmxlYXZpbmcpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLmxlYXZlQW5pbWF0aW9uID8gdGhpcy5wcm9wcy5sZWF2ZUFuaW1hdGlvbi5mcm9tIDoge307XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkRGF0YSA9IHRoaXMuZ2V0Q2hpbGREYXRhKGdldEtleShjaGlsZCkpO1xuICAgIHZhciBjaGlsZERvbU5vZGUgPSBjaGlsZERhdGEuZG9tTm9kZTtcbiAgICB2YXIgY2hpbGRCb3VuZGluZ0JveCA9IGNoaWxkRGF0YS5ib3VuZGluZ0JveDtcbiAgICB2YXIgcGFyZW50Qm91bmRpbmdCb3ggPSB0aGlzLnBhcmVudERhdGEuYm91bmRpbmdCb3g7XG5cbiAgICBpZiAoIWNoaWxkRG9tTm9kZSkge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIHZhciBfZ2V0UG9zaXRpb25EZWx0YTIgPSBnZXRQb3NpdGlvbkRlbHRhKHtcbiAgICAgIGNoaWxkRG9tTm9kZTogY2hpbGREb21Ob2RlLFxuICAgICAgY2hpbGRCb3VuZGluZ0JveDogY2hpbGRCb3VuZGluZ0JveCxcbiAgICAgIHBhcmVudEJvdW5kaW5nQm94OiBwYXJlbnRCb3VuZGluZ0JveCxcbiAgICAgIGdldFBvc2l0aW9uOiB0aGlzLnByb3BzLmdldFBvc2l0aW9uXG4gICAgfSksXG4gICAgICAgIGRYID0gX2dldFBvc2l0aW9uRGVsdGEyWzBdLFxuICAgICAgICBkWSA9IF9nZXRQb3NpdGlvbkRlbHRhMlsxXTtcblxuICAgIHJldHVybiB7XG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoJyArIGRYICsgJ3B4LCAnICsgZFkgKyAncHgpJ1xuICAgIH07XG4gIH07XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcblxuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5pc0FuaW1hdGlvbkRpc2FibGVkID0gZnVuY3Rpb24gaXNBbmltYXRpb25EaXNhYmxlZChwcm9wcykge1xuICAgIC8vIElmIHRoZSBjb21wb25lbnQgaXMgZXhwbGljaXRseSBwYXNzZWQgYSBgZGlzYWJsZUFsbEFuaW1hdGlvbnNgIGZsYWcsXG4gICAgLy8gd2UgY2FuIHNraXAgdGhpcyB3aG9sZSBwcm9jZXNzLiBTaW1pbGFybHksIGlmIGFsbCBvZiB0aGUgbnVtYmVycyBoYXZlXG4gICAgLy8gYmVlbiBzZXQgdG8gMCwgdGhlcmUgaXMgbm8gcG9pbnQgaW4gdHJ5aW5nIHRvIGFuaW1hdGU7IGRvaW5nIHNvIHdvdWxkXG4gICAgLy8gb25seSBjYXVzZSBhIGZsaWNrZXIgKGFuZCB0aGUgaW50ZW50IGlzIHByb2JhYmx5IHRvIGRpc2FibGUgYW5pbWF0aW9ucylcbiAgICAvLyBXZSBjYW4gYWxzbyBza2lwIHRoaXMgcmlnYW1hcm9sZSBpZiB0aGVyZSdzIG5vIGJyb3dzZXIgc3VwcG9ydCBmb3IgaXQuXG4gICAgcmV0dXJuIG5vQnJvd3NlclN1cHBvcnQgfHwgcHJvcHMuZGlzYWJsZUFsbEFuaW1hdGlvbnMgfHwgcHJvcHMuZHVyYXRpb24gPT09IDAgJiYgcHJvcHMuZGVsYXkgPT09IDAgJiYgcHJvcHMuc3RhZ2dlckR1cmF0aW9uQnkgPT09IDAgJiYgcHJvcHMuc3RhZ2dlckRlbGF5QnkgPT09IDA7XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmZpbmRDaGlsZEJ5S2V5ID0gZnVuY3Rpb24gZmluZENoaWxkQnlLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGZpbmQoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICByZXR1cm4gZ2V0S2V5KGNoaWxkKSA9PT0ga2V5O1xuICAgIH0sIHRoaXMuc3RhdGUuY2hpbGRyZW4pO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5oYXNDaGlsZERhdGEgPSBmdW5jdGlvbiBoYXNDaGlsZERhdGEoa2V5KSB7XG4gICAgLy8gT2JqZWN0IGhhcyBzb21lIGJ1aWx0LWluIHByb3BlcnRpZXMgb24gaXRzIHByb3RvdHlwZSwgc3VjaCBhcyB0b1N0cmluZy4gIGhhc093blByb3BlcnR5IG1ha2VzXG4gICAgLy8gc3VyZSB0aGF0IGtleSBpcyBwcmVzZW50IG9uIGNoaWxkcmVuRGF0YSBpdHNlbGYsIG5vdCBvbiBpdHMgcHJvdG90eXBlLlxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5jaGlsZHJlbkRhdGEsIGtleSk7XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmdldENoaWxkRGF0YSA9IGZ1bmN0aW9uIGdldENoaWxkRGF0YShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNDaGlsZERhdGEoa2V5KSA/IHRoaXMuY2hpbGRyZW5EYXRhW2tleV0gOiB7fTtcbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUuc2V0Q2hpbGREYXRhID0gZnVuY3Rpb24gc2V0Q2hpbGREYXRhKGtleSwgZGF0YSkge1xuICAgIHRoaXMuY2hpbGRyZW5EYXRhW2tleV0gPSBfZXh0ZW5kcyh7fSwgdGhpcy5nZXRDaGlsZERhdGEoa2V5KSwgZGF0YSk7XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLnJlbW92ZUNoaWxkRGF0YSA9IGZ1bmN0aW9uIHJlbW92ZUNoaWxkRGF0YShrZXkpIHtcbiAgICBkZWxldGUgdGhpcy5jaGlsZHJlbkRhdGFba2V5XTtcbiAgICB0aGlzLnNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcHJldlN0YXRlLCB7XG4gICAgICAgIGNoaWxkcmVuOiBwcmV2U3RhdGUuY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgIHJldHVybiBjaGlsZC5lbGVtZW50LmtleSAhPT0ga2V5O1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmNyZWF0ZUhlaWdodFBsYWNlaG9sZGVyID0gZnVuY3Rpb24gY3JlYXRlSGVpZ2h0UGxhY2Vob2xkZXIoKSB7XG4gICAgdmFyIF90aGlzOSA9IHRoaXM7XG5cbiAgICB2YXIgdHlwZU5hbWUgPSB0aGlzLnByb3BzLnR5cGVOYW1lO1xuXG4gICAgLy8gSWYgcmVxdWVzdGVkLCBjcmVhdGUgYW4gaW52aXNpYmxlIGVsZW1lbnQgYXQgdGhlIGVuZCBvZiB0aGUgbGlzdC5cbiAgICAvLyBJdHMgaGVpZ2h0IHdpbGwgYmUgbW9kaWZpZWQgdG8gcHJldmVudCB0aGUgY29udGFpbmVyIGZyb20gY29sbGFwc2luZ1xuICAgIC8vIHByZW1hdHVyZWx5LlxuXG4gICAgdmFyIGlzQ29udGFpbmVyQUxpc3QgPSB0eXBlTmFtZSA9PT0gJ3VsJyB8fCB0eXBlTmFtZSA9PT0gJ29sJztcbiAgICB2YXIgcGxhY2Vob2xkZXJUeXBlID0gaXNDb250YWluZXJBTGlzdCA/ICdsaScgOiAnZGl2JztcblxuICAgIHJldHVybiBjcmVhdGVFbGVtZW50KHBsYWNlaG9sZGVyVHlwZSwge1xuICAgICAga2V5OiAnaGVpZ2h0LXBsYWNlaG9sZGVyJyxcbiAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGRvbU5vZGUpIHtcbiAgICAgICAgX3RoaXM5LmhlaWdodFBsYWNlaG9sZGVyRGF0YS5kb21Ob2RlID0gZG9tTm9kZTtcbiAgICAgIH0sXG4gICAgICBzdHlsZTogeyB2aXNpYmlsaXR5OiAnaGlkZGVuJywgaGVpZ2h0OiAwIH1cbiAgICB9KTtcbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUuY2hpbGRyZW5XaXRoUmVmcyA9IGZ1bmN0aW9uIGNoaWxkcmVuV2l0aFJlZnMoKSB7XG4gICAgdmFyIF90aGlzMTAgPSB0aGlzO1xuXG4gICAgLy8gV2UgbmVlZCB0byBjbG9uZSB0aGUgcHJvdmlkZWQgY2hpbGRyZW4sIGNhcHR1cmluZyBhIHJlZmVyZW5jZSB0byB0aGVcbiAgICAvLyB1bmRlcmx5aW5nIERPTSBub2RlLiBGbGlwIE1vdmUgbmVlZHMgdG8gdXNlIHRoZSBSZWFjdCBlc2NhcGUgaGF0Y2hlcyB0b1xuICAgIC8vIGJlIGFibGUgdG8gZG8gaXRzIGNhbGN1bGF0aW9ucy5cbiAgICByZXR1cm4gdGhpcy5zdGF0ZS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICByZXR1cm4gY2xvbmVFbGVtZW50KGNoaWxkLmVsZW1lbnQsIHtcbiAgICAgICAgcmVmOiBmdW5jdGlvbiByZWYoZWxlbWVudCkge1xuICAgICAgICAgIC8vIFN0YXRlbGVzcyBGdW5jdGlvbmFsIENvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYnkgRmxpcE1vdmUsXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGV5IGRvbid0IGhhdmUgaW5zdGFuY2VzLlxuICAgICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBkb21Ob2RlID0gZ2V0TmF0aXZlTm9kZShlbGVtZW50KTtcbiAgICAgICAgICBfdGhpczEwLnNldENoaWxkRGF0YShnZXRLZXkoY2hpbGQpLCB7IGRvbU5vZGU6IGRvbU5vZGUgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzMTEgPSB0aGlzO1xuXG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICB0eXBlTmFtZSA9IF9wcm9wczIudHlwZU5hbWUsXG4gICAgICAgIGRlbGVnYXRlZCA9IF9wcm9wczIuZGVsZWdhdGVkLFxuICAgICAgICBsZWF2ZUFuaW1hdGlvbiA9IF9wcm9wczIubGVhdmVBbmltYXRpb24sXG4gICAgICAgIG1haW50YWluQ29udGFpbmVySGVpZ2h0ID0gX3Byb3BzMi5tYWludGFpbkNvbnRhaW5lckhlaWdodDtcblxuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbldpdGhSZWZzKCk7XG4gICAgaWYgKGxlYXZlQW5pbWF0aW9uICYmIG1haW50YWluQ29udGFpbmVySGVpZ2h0KSB7XG4gICAgICBjaGlsZHJlbi5wdXNoKHRoaXMuY3JlYXRlSGVpZ2h0UGxhY2Vob2xkZXIoKSk7XG4gICAgfVxuXG4gICAgaWYgKCF0eXBlTmFtZSkgcmV0dXJuIGNoaWxkcmVuO1xuXG4gICAgdmFyIHByb3BzID0gX2V4dGVuZHMoe30sIGRlbGVnYXRlZCwge1xuICAgICAgY2hpbGRyZW46IGNoaWxkcmVuLFxuICAgICAgcmVmOiBmdW5jdGlvbiByZWYobm9kZSkge1xuICAgICAgICBfdGhpczExLnBhcmVudERhdGEuZG9tTm9kZSA9IG5vZGU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gY3JlYXRlRWxlbWVudCh0eXBlTmFtZSwgcHJvcHMpO1xuICB9O1xuXG4gIHJldHVybiBGbGlwTW92ZTtcbn0oQ29tcG9uZW50KTtcblxudmFyIGVuaGFuY2VkRmxpcE1vdmUgPSAvKiAjX19QVVJFX18gKi9wcm9wQ29udmVydGVyKEZsaXBNb3ZlJDEpO1xuXG4vKipcbiAqIFJlYWN0IEZsaXAgTW92ZVxuICogKGMpIDIwMTYtcHJlc2VudCBKb3NodWEgQ29tZWF1XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZW5oYW5jZWRGbGlwTW92ZTtcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdlwiO1xuaW1wb3J0IFJlc3VsdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVzdWx0c1wiO1xuaW1wb3J0IHJlcXVlc3RzIGZyb20gXCIuLi91dGlscy9yZXF1ZXN0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcmVzdWx0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SHVsdSAyLjA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxOYXYgLz5cbiAgICAgIDxSZXN1bHRzIHJlc3VsdHM9e3Jlc3VsdHN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBnZW5yZSA9IGNvbnRleHQucXVlcnkuZ2VucmU7XG5cbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zJHtcbiAgICAgIHJlcXVlc3RzW2dlbnJlXT8udXJsIHx8IHJlcXVlc3RzLmZldGNoVHJlbmRpbmcudXJsXG4gICAgfWBcbiAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHJlc3VsdHM6IHJlcXVlc3QucmVzdWx0cyxcbiAgICB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==