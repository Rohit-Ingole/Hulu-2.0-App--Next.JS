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
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "./node_modules/@heroicons/react/outline/esm/index.js");


var _jsxFileName = "F:\\React JS\\hulu-v2-app\\components\\Thumbnail.js",
    _this = undefined;



var Thumbnail = forwardRef(_c = function _c(_ref, ref) {
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
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "truncate max-w-md",
        children: result.overview
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold",
        children: result.title || result.original_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "flex items-center opacity-0 group-hover:opacity-100",
        children: [result.media_type && "".concat(result.media_type, " ."), " ", result.release_date || result.first_air_date, " .", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__["ThumbUpIcon"], {
          className: "h-5 mx-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this), result.vote_count]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaHVtYm5haWwuanMiXSwibmFtZXMiOlsiVGh1bWJuYWlsIiwiZm9yd2FyZFJlZiIsInJlZiIsInJlc3VsdCIsIkJBU0VfVVJMIiwiYmFja2Ryb3BfcGF0aCIsInBvc3Rlcl9wYXRoIiwib3ZlcnZpZXciLCJ0aXRsZSIsIm9yaWdpbmFsX25hbWUiLCJtZWRpYV90eXBlIiwicmVsZWFzZV9kYXRlIiwiZmlyc3RfYWlyX2RhdGUiLCJ2b3RlX2NvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxVQUFVLE1BQUMsa0JBQWFDLEdBQWIsRUFBcUI7QUFBQSxNQUFsQkMsTUFBa0IsUUFBbEJBLE1BQWtCO0FBQ2hELE1BQU1DLFFBQVEsR0FBRyxzQ0FBakI7QUFDQSxzQkFDRTtBQUNFLE9BQUcsRUFBRUYsR0FEUDtBQUVFLGFBQVMsRUFBQyxrR0FGWjtBQUFBLDRCQUlFLHFFQUFDLGlEQUFEO0FBQ0UsWUFBTSxFQUFDLFlBRFQ7QUFFRSxTQUFHLEVBQ0QsVUFBR0UsUUFBSCxTQUFjRCxNQUFNLENBQUNFLGFBQVAsSUFBd0JGLE1BQU0sQ0FBQ0csV0FBN0MsZUFDR0YsUUFESCxTQUNjRCxNQUFNLENBQUNHLFdBRHJCLENBSEo7QUFNRSxZQUFNLEVBQUMsTUFOVDtBQU9FLFdBQUssRUFBQztBQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQWFFO0FBQUssZUFBUyxFQUFDLEtBQWY7QUFBQSw4QkFDRTtBQUFHLGlCQUFTLEVBQUMsbUJBQWI7QUFBQSxrQkFBa0NILE1BQU0sQ0FBQ0k7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBR0U7QUFBSSxpQkFBUyxFQUFDLHdGQUFkO0FBQUEsa0JBQ0dKLE1BQU0sQ0FBQ0ssS0FBUCxJQUFnQkwsTUFBTSxDQUFDTTtBQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsZUFPRTtBQUFHLGlCQUFTLEVBQUMscURBQWI7QUFBQSxtQkFDR04sTUFBTSxDQUFDTyxVQUFQLGNBQXdCUCxNQUFNLENBQUNPLFVBQS9CLE9BREgsRUFDa0QsR0FEbEQsRUFFR1AsTUFBTSxDQUFDUSxZQUFQLElBQXVCUixNQUFNLENBQUNTLGNBRmpDLFFBRW1ELEdBRm5ELGVBR0UscUVBQUMsb0VBQUQ7QUFBYSxtQkFBUyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsRUFJR1QsTUFBTSxDQUFDVSxVQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBaEMyQixDQUE1QjtNQUFNYixTO0FBa0NTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNTk4M2ZiMjg3NjgxOTBlOTdiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IFRodW1iVXBJY29uIH0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZVwiO1xyXG5cclxuY29uc3QgVGh1bWJuYWlsID0gZm9yd2FyZFJlZigoeyByZXN1bHQgfSwgcmVmKSA9PiB7XHJcbiAgY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsL1wiO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIHJlZj17cmVmfVxyXG4gICAgICBjbGFzc05hbWU9XCJncm91cCBjdXJzb3ItcG9pbnRlciBwLTIgdHJhbnNpdGlvbiBkdXJhdGlvbi0yMDAgZWFzZS1pbiB0cmFuc2Zvcm0gc206aG92ZXI6c2NhbGUtMTA1IGhvdmVyOnotNTBcIlxyXG4gICAgPlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcclxuICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgYCR7QkFTRV9VUkx9JHtyZXN1bHQuYmFja2Ryb3BfcGF0aCB8fCByZXN1bHQucG9zdGVyX3BhdGh9YCB8fFxyXG4gICAgICAgICAgYCR7QkFTRV9VUkx9JHtyZXN1bHQucG9zdGVyX3BhdGh9YFxyXG4gICAgICAgIH1cclxuICAgICAgICBoZWlnaHQ9XCIxMDgwXCJcclxuICAgICAgICB3aWR0aD1cIjE5MjBcIlxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMlwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRydW5jYXRlIG1heC13LW1kXCI+e3Jlc3VsdC5vdmVydmlld308L3A+XHJcblxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJtdC0xIHRleHQtMnhsIHRleHQtd2hpdGUgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwIGVhc2UtaW4tb3V0IGdyb3VwLWhvdmVyOmZvbnQtYm9sZFwiPlxyXG4gICAgICAgICAge3Jlc3VsdC50aXRsZSB8fCByZXN1bHQub3JpZ2luYWxfbmFtZX1cclxuICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBvcGFjaXR5LTAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDBcIj5cclxuICAgICAgICAgIHtyZXN1bHQubWVkaWFfdHlwZSAmJiBgJHtyZXN1bHQubWVkaWFfdHlwZX0gLmB9e1wiIFwifVxyXG4gICAgICAgICAge3Jlc3VsdC5yZWxlYXNlX2RhdGUgfHwgcmVzdWx0LmZpcnN0X2Fpcl9kYXRlfSAue1wiIFwifVxyXG4gICAgICAgICAgPFRodW1iVXBJY29uIGNsYXNzTmFtZT1cImgtNSBteC0yXCIgLz5cclxuICAgICAgICAgIHtyZXN1bHQudm90ZV9jb3VudH1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaHVtYm5haWw7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=