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
        className: "mt-1 text-2xl text-white ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaHVtYm5haWwuanMiXSwibmFtZXMiOlsiVGh1bWJuYWlsIiwicmVzdWx0IiwiQkFTRV9VUkwiLCJiYWNrZHJvcF9wYXRoIiwicG9zdGVyX3BhdGgiLCJvdmVydmlldyIsInRpdGxlIiwib3JpZ2luYWxfbmFtZSIsIm1lZGlhX3R5cGUiLCJyZWxlYXNlX2RhdGUiLCJmaXJzdF9haXJfZGF0ZSIsInZvdGVfY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBZ0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDaEMsTUFBTUMsUUFBUSxHQUFHLHNDQUFqQjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFDLHNCQUFmO0FBQUEsNEJBQ0UscUVBQUMsaURBQUQ7QUFDRSxZQUFNLEVBQUMsWUFEVDtBQUVFLFlBQU0sRUFBRSxJQUZWO0FBR0UsV0FBSyxFQUFFLElBSFQ7QUFJRSxTQUFHLEVBQ0QsVUFBR0EsUUFBSCxTQUFjRCxNQUFNLENBQUNFLGFBQVAsSUFBd0JGLE1BQU0sQ0FBQ0csV0FBN0MsZUFDR0YsUUFESCxTQUNjRCxNQUFNLENBQUNHLFdBRHJCO0FBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBVUU7QUFBSyxlQUFTLEVBQUMsS0FBZjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQyxtQkFBYjtBQUFBLGtCQUFrQ0gsTUFBTSxDQUFDSTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFJLGlCQUFTLEVBQUMsMkJBQWQ7QUFBQSxrQkFBMkNKLE1BQU0sQ0FBQ0ssS0FBUCxJQUFnQkwsTUFBTSxDQUFDTTtBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFHLGlCQUFTLEVBQUMscURBQWI7QUFBQSxtQkFDR04sTUFBTSxDQUFDTyxVQUFQLGNBQXdCUCxNQUFNLENBQUNPLFVBQS9CLFVBREgsRUFDa0QsR0FEbEQsRUFFR1AsTUFBTSxDQUFDUSxZQUFQLElBQXVCUixNQUFNLENBQUNTLGNBRmpDLFdBRW1ELEdBRm5ELGVBR0UscUVBQUMsb0VBQUQ7QUFBYSxtQkFBUyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsRUFJR1QsTUFBTSxDQUFDVSxVQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBdUJELENBekJEOztLQUFNWCxTO0FBMkJTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZGEzYzgyMWI2NmQxODcxZGNlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGh1bWJVcEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgVGh1bWJuYWlsID0gKHsgcmVzdWx0IH0pID0+IHtcclxuICBjb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwvXCI7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAgY3Vyc29yLXBvaW50ZXJcIj5cclxuICAgICAgPEltYWdlXHJcbiAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgaGVpZ2h0PXsxMDgwfVxyXG4gICAgICAgIHdpZHRoPXsxOTIwfVxyXG4gICAgICAgIHNyYz17XHJcbiAgICAgICAgICBgJHtCQVNFX1VSTH0ke3Jlc3VsdC5iYWNrZHJvcF9wYXRoIHx8IHJlc3VsdC5wb3N0ZXJfcGF0aH1gIHx8XHJcbiAgICAgICAgICBgJHtCQVNFX1VSTH0ke3Jlc3VsdC5wb3N0ZXJfcGF0aH1gXHJcbiAgICAgICAgfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRydW5jYXRlIG1heC13LW1kXCI+e3Jlc3VsdC5vdmVydmlld308L3A+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LTEgdGV4dC0yeGwgdGV4dC13aGl0ZSBcIj57cmVzdWx0LnRpdGxlIHx8IHJlc3VsdC5vcmlnaW5hbF9uYW1lfTwvaDI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwXCI+XHJcbiAgICAgICAgICB7cmVzdWx0Lm1lZGlhX3R5cGUgJiYgYCR7cmVzdWx0Lm1lZGlhX3R5cGV9IMK3YH17XCIgXCJ9XHJcbiAgICAgICAgICB7cmVzdWx0LnJlbGVhc2VfZGF0ZSB8fCByZXN1bHQuZmlyc3RfYWlyX2RhdGV9IMK3e1wiIFwifVxyXG4gICAgICAgICAgPFRodW1iVXBJY29uIGNsYXNzTmFtZT1cImgtNSBteC0yXCIgLz5cclxuICAgICAgICAgIHtyZXN1bHQudm90ZV9jb3VudH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRodW1ibmFpbDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==