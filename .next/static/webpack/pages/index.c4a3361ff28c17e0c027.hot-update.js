webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "F:\\React JS\\hulu-v2-app\\components\\Thumbnail.js",
    _this = undefined;




var Thumbnail = function Thumbnail(_ref) {
  var result = _ref.result;
  var BASE_URL = "https://image.tmdb.org/t/p/original/";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "group cursor-pointer",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
      layout: "responsive",
      height: 1080,
      width: 1920,
      src: "".concat(BASE_URL).concat(result.backdrop_path || result.poster_path) || "".concat(BASE_URL).concat(result.poster_path)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "truncate max-w-md",
        children: result.overview
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "m",
        children: result.title || result.original_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "flex items-center opacity-0 group-hover:opacity-100",
        children: [result.media_type && "".concat(result.media_type, " \xB7"), " ", result.release_date || result.first_air_date, " \xB7", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__["ThumbUpIcon"], {
          className: "h-5 mx-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this), result.vote_count]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaHVtYm5haWwuanMiXSwibmFtZXMiOlsiVGh1bWJuYWlsIiwicmVzdWx0IiwiQkFTRV9VUkwiLCJiYWNrZHJvcF9wYXRoIiwicG9zdGVyX3BhdGgiLCJvdmVydmlldyIsInRpdGxlIiwib3JpZ2luYWxfbmFtZSIsIm1lZGlhX3R5cGUiLCJyZWxlYXNlX2RhdGUiLCJmaXJzdF9haXJfZGF0ZSIsInZvdGVfY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZ0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDaEMsTUFBTUMsUUFBUSxHQUFHLHNDQUFqQjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUEsNEJBQ0UscUVBQUMsaURBQUQ7QUFDRSxZQUFNLEVBQUMsWUFEVDtBQUVFLFlBQU0sRUFBRSxJQUZWO0FBR0UsV0FBSyxFQUFFLElBSFQ7QUFJRSxTQUFHLEVBQ0QsVUFBR0EsUUFBSCxTQUFjRCxNQUFNLENBQUNFLGFBQVAsSUFBd0JGLE1BQU0sQ0FBQ0csV0FBN0MsZUFDR0YsUUFESCxTQUNjRCxNQUFNLENBQUNHLFdBRHJCO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBVUU7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQyxtQkFBYjtBQUFBLGtCQUFrQ0gsTUFBTSxDQUFDSTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFJLGlCQUFTLEVBQUMsR0FBZDtBQUFBLGtCQUFtQkosTUFBTSxDQUFDSyxLQUFQLElBQWdCTCxNQUFNLENBQUNNO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFO0FBQUcsaUJBQVMsRUFBQyxxREFBYjtBQUFBLG1CQUNHTixNQUFNLENBQUNPLFVBQVAsY0FBd0JQLE1BQU0sQ0FBQ08sVUFBL0IsVUFESCxFQUNrRCxHQURsRCxFQUVHUCxNQUFNLENBQUNRLFlBQVAsSUFBdUJSLE1BQU0sQ0FBQ1MsY0FGakMsV0FFbUQsR0FGbkQsZUFHRSxxRUFBQyxvRUFBRDtBQUFhLG1CQUFTLEVBQUM7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixFQUlHVCxNQUFNLENBQUNVLFVBSlY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF1QkQsQ0F6QkQ7O0tBQU1YLFM7QUEyQlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM0YTMzNjFmZjI4YzE3ZTBjMDI3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaHVtYlVwSWNvbiB9IGZyb20gXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5jb25zdCBUaHVtYm5haWwgPSAoeyByZXN1bHQgfSkgPT4ge1xyXG4gIGNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC9cIjtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICBoZWlnaHQ9ezEwODB9XHJcbiAgICAgICAgd2lkdGg9ezE5MjB9XHJcbiAgICAgICAgc3JjPXtcclxuICAgICAgICAgIGAke0JBU0VfVVJMfSR7cmVzdWx0LmJhY2tkcm9wX3BhdGggfHwgcmVzdWx0LnBvc3Rlcl9wYXRofWAgfHxcclxuICAgICAgICAgIGAke0JBU0VfVVJMfSR7cmVzdWx0LnBvc3Rlcl9wYXRofWBcclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0yXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJ1bmNhdGUgbWF4LXctbWRcIj57cmVzdWx0Lm92ZXJ2aWV3fTwvcD5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibVwiPntyZXN1bHQudGl0bGUgfHwgcmVzdWx0Lm9yaWdpbmFsX25hbWV9PC9oMj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDBcIj5cclxuICAgICAgICAgIHtyZXN1bHQubWVkaWFfdHlwZSAmJiBgJHtyZXN1bHQubWVkaWFfdHlwZX0gwrdgfXtcIiBcIn1cclxuICAgICAgICAgIHtyZXN1bHQucmVsZWFzZV9kYXRlIHx8IHJlc3VsdC5maXJzdF9haXJfZGF0ZX0gwrd7XCIgXCJ9XHJcbiAgICAgICAgICA8VGh1bWJVcEljb24gY2xhc3NOYW1lPVwiaC01IG14LTJcIiAvPlxyXG4gICAgICAgICAge3Jlc3VsdC52b3RlX2NvdW50fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGh1bWJuYWlsO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9