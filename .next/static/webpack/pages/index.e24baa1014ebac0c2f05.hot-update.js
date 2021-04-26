webpackHotUpdate_N_E("pages/index",{

/***/ "./components lazy recursive":
false,

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





var Thumbnail = function Thumbnail(_ref) {
  var result = _ref.result;
  var BASE_URL = "https://image.tmdb.org/t/p/original/";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
      layout: "responsive",
      src: "".concat(BASE_URL).concat(result.backdrop_path || result.poster_path) || "".concat(BASE_URL).concat(result.poster_path),
      height: "1080",
      width: "1920"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "truncate max-w-md",
        children: result.overview
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold",
        children: result.title || result.original_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "flex items-center opacity-0 group-hover:opacity-100",
        children: [result.media_type && "".concat(result.media_type, " ."), " ", result.release_date || result.first_air_date, " .", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__["ThumbUpIcon"], {
          className: "h-5 mx-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this), result.vote_count]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = Thumbnail;
/* harmony default export */ __webpack_exports__["default"] = (Thumbnail);

var _c;

$RefreshReg$(_c, "Thumbnail");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaHVtYm5haWwuanMiXSwibmFtZXMiOlsiVGh1bWJuYWlsIiwicmVzdWx0IiwiQkFTRV9VUkwiLCJiYWNrZHJvcF9wYXRoIiwicG9zdGVyX3BhdGgiLCJvdmVydmlldyIsInRpdGxlIiwib3JpZ2luYWxfbmFtZSIsIm1lZGlhX3R5cGUiLCJyZWxlYXNlX2RhdGUiLCJmaXJzdF9haXJfZGF0ZSIsInZvdGVfY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQWdCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQ2hDLE1BQU1DLFFBQVEsR0FBRyxzQ0FBakI7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxrR0FBZjtBQUFBLDRCQUNFLHFFQUFDLGlEQUFEO0FBQ0UsWUFBTSxFQUFDLFlBRFQ7QUFFRSxTQUFHLEVBQ0QsVUFBR0EsUUFBSCxTQUFjRCxNQUFNLENBQUNFLGFBQVAsSUFBd0JGLE1BQU0sQ0FBQ0csV0FBN0MsZUFDR0YsUUFESCxTQUNjRCxNQUFNLENBQUNHLFdBRHJCLENBSEo7QUFNRSxZQUFNLEVBQUMsTUFOVDtBQU9FLFdBQUssRUFBQztBQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVVFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUMsbUJBQWI7QUFBQSxrQkFBa0NILE1BQU0sQ0FBQ0k7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBR0U7QUFBSSxpQkFBUyxFQUFDLHdGQUFkO0FBQUEsa0JBQ0dKLE1BQU0sQ0FBQ0ssS0FBUCxJQUFnQkwsTUFBTSxDQUFDTTtBQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFPRTtBQUFHLGlCQUFTLEVBQUMscURBQWI7QUFBQSxtQkFDR04sTUFBTSxDQUFDTyxVQUFQLGNBQXdCUCxNQUFNLENBQUNPLFVBQS9CLE9BREgsRUFDa0QsR0FEbEQsRUFFR1AsTUFBTSxDQUFDUSxZQUFQLElBQXVCUixNQUFNLENBQUNTLGNBRmpDLFFBRW1ELEdBRm5ELGVBR0UscUVBQUMsb0VBQUQ7QUFBYSxtQkFBUyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsRUFJR1QsTUFBTSxDQUFDVSxVQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkJELENBN0JEOztLQUFNWCxTO0FBK0JTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMjRiYWExMDE0ZWJhYzBjMmYwNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IFRodW1iVXBJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5pbXBvcnQgeyBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUaHVtYm5haWwgPSAoeyByZXN1bHQgfSkgPT4ge1xyXG4gIGNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC9cIjtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCBjdXJzb3ItcG9pbnRlciBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZWFzZS1pbiB0cmFuc2Zvcm0gc206aG92ZXI6c2NhbGUtMTA1IGhvdmVyOnotNTBcIj5cclxuICAgICAgPEltYWdlXHJcbiAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgc3JjPXtcclxuICAgICAgICAgIGAke0JBU0VfVVJMfSR7cmVzdWx0LmJhY2tkcm9wX3BhdGggfHwgcmVzdWx0LnBvc3Rlcl9wYXRofWAgfHxcclxuICAgICAgICAgIGAke0JBU0VfVVJMfSR7cmVzdWx0LnBvc3Rlcl9wYXRofWBcclxuICAgICAgICB9XHJcbiAgICAgICAgaGVpZ2h0PVwiMTA4MFwiXHJcbiAgICAgICAgd2lkdGg9XCIxOTIwXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0cnVuY2F0ZSBtYXgtdy1tZFwiPntyZXN1bHQub3ZlcnZpZXd9PC9wPlxyXG5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LTJ4bCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMCBlYXNlLWluLW91dCBncm91cC1ob3Zlcjpmb250LWJvbGRcIj5cclxuICAgICAgICAgIHtyZXN1bHQudGl0bGUgfHwgcmVzdWx0Lm9yaWdpbmFsX25hbWV9XHJcbiAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwXCI+XHJcbiAgICAgICAgICB7cmVzdWx0Lm1lZGlhX3R5cGUgJiYgYCR7cmVzdWx0Lm1lZGlhX3R5cGV9IC5gfXtcIiBcIn1cclxuICAgICAgICAgIHtyZXN1bHQucmVsZWFzZV9kYXRlIHx8IHJlc3VsdC5maXJzdF9haXJfZGF0ZX0gLntcIiBcIn1cclxuICAgICAgICAgIDxUaHVtYlVwSWNvbiBjbGFzc05hbWU9XCJoLTUgbXgtMlwiIC8+XHJcbiAgICAgICAgICB7cmVzdWx0LnZvdGVfY291bnR9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaHVtYm5haWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=