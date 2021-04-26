module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/head.js");

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/to-base-64.js");

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/image-config.js");

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ "@heroicons/react/outline");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _HeaderItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderItem */ "./components/HeaderItem.js");

var _jsxFileName = "F:\\React JS\\hulu-v2-app\\components\\Header.js";




function Header() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: "flex flex-col sm:flex-row m-5 justify-between items-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex flex-grow justify-evenly max-w-2xl",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeaderItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "HOME",
        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__["HomeIcon"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeaderItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "TRENDING",
        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__["LightningBoltIcon"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeaderItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "VERIFIED",
        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__["BadgeCheckIcon"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeaderItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "COLLECTIONS",
        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__["CollectionIcon"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeaderItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "SEARCH",
        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__["SearchIcon"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeaderItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "ACCOUNT",
        Icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__["UserIcon"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "object-contain ",
      src: "https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png",
      width: 200,
      height: 100
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/HeaderItem.js":
/*!**********************************!*\
  !*** ./components/HeaderItem.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "F:\\React JS\\hulu-v2-app\\components\\HeaderItem.js";

const HeaderItems = ({
  title,
  Icon
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Icon, {
      className: "h-8 mb-1 group-hover:animate-bounce"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "tracking-widest opacity-0 group-hover:opacity-100",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderItems);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/requests */ "./utils/requests.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\React JS\\hulu-v2-app\\components\\Nav.js";



const Nav = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
    className: "relative",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide",
      children: Object.entries(_utils_requests__WEBPACK_IMPORTED_MODULE_1__["default"]).map(([key, {
        title,
        url
      }]) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        onClick: () => router.push(`/?genre=${key}`),
        className: "last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500",
        children: title
      }, key, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./components/Results.js":
/*!*******************************!*\
  !*** ./components/Results.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Thumbnail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Thumbnail */ "./components/Thumbnail.js");
/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-flip-move */ "./node_modules/react-flip-move/dist/react-flip-move.cjs.js");
/* harmony import */ var react_flip_move__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_flip_move__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "F:\\React JS\\hulu-v2-app\\components\\Results.js";



function Results({
  results
}) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_flip_move__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center",
    children: results.map(result => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Thumbnail__WEBPACK_IMPORTED_MODULE_1__["default"], {
      result: result
    }, result.id, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (Results);

/***/ }),

/***/ "./components/Thumbnail.js":
/*!*********************************!*\
  !*** ./components/Thumbnail.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ "@heroicons/react/outline");
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "F:\\React JS\\hulu-v2-app\\components\\Thumbnail.js";



const Thumbnail = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(({
  result
}, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: ref,
    className: "group cursor-pointer p-2 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_image__WEBPACK_IMPORTED_MODULE_1___default.a, {
      layout: "responsive",
      src: `${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`,
      height: "1080",
      width: "1920"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "p-2",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "truncate max-w-md",
        children: result.overview
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold",
        children: result.title || result.original_name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        className: "flex items-center opacity-0 group-hover:opacity-100",
        children: [result.media_type && `${result.media_type} .`, " ", result.release_date || result.first_air_date, " .", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__["ThumbUpIcon"], {
          className: "h-5 mx-2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined), result.vote_count]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
});
/* harmony default export */ __webpack_exports__["default"] = (Thumbnail);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["press.hulu.com","image.tmdb.org"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "./node_modules/react-flip-move/dist/react-flip-move.cjs.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-flip-move/dist/react-flip-move.cjs.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = __webpack_require__(/*! react */ "react");
var React__default = _interopDefault(React);
var ReactDOM = __webpack_require__(/*! react-dom */ "react-dom");
var ReactDOM__default = _interopDefault(ReactDOM);

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
      React.Children.forEach(children, function (child) {
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
      return React__default.createElement(ComposedComponent, this.convertProps(this.props));
    };

    return FlipMovePropConverter;
  }(React.Component), _class.defaultProps = {
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
  var foundNode = ReactDOM.findDOMNode(element);

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
  return React.Children.toArray(children);
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
      var domNode = ReactDOM__default.findDOMNode(_this);
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

    return React.createElement(placeholderType, {
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
      return React.cloneElement(child.element, {
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

    return React.createElement(typeName, props);
  };

  return FlipMove;
}(React.Component);

var enhancedFlipMove = /* #__PURE__ */propConverter(FlipMove$1);

/**
 * React Flip Move
 * (c) 2016-present Joshua Comeau
 */

module.exports = enhancedFlipMove;


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Results */ "./components/Results.js");
/* harmony import */ var _utils_requests__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/requests */ "./utils/requests.js");

var _jsxFileName = "F:\\React JS\\hulu-v2-app\\pages\\index.js";





function Home({
  results
}) {
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
async function getServerSideProps(context) {
  var _requests$genre;

  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${((_requests$genre = _utils_requests__WEBPACK_IMPORTED_MODULE_5__["default"][genre]) === null || _requests$genre === void 0 ? void 0 : _requests$genre.url) || _utils_requests__WEBPACK_IMPORTED_MODULE_5__["default"].fetchTrending.url}`).then(res => res.json());
  return {
    props: {
      results: request.results
    }
  };
}

/***/ }),

/***/ "./utils/requests.js":
/*!***************************!*\
  !*** ./utils/requests.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const API_KEY = process.env.API_KEY;
/* harmony default export */ __webpack_exports__["default"] = ({
  fetchTrending: {
    title: "Trending",
    url: `/trending/all/week?api_key=${API_KEY}&language=en-US`
  },
  fetchTopRated: {
    title: "Top Rated",
    url: `/movie/top_rated?api_key=${API_KEY}&language=en-US`
  },
  fetchActionMovies: {
    title: "Action",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=28`
  },
  fetchComedyMovies: {
    title: "Comedy",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=35`
  },
  fetchHorrorMovies: {
    title: "Horror",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=27`
  },
  fetchRomanceMovies: {
    title: "Romance",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`
  },
  fetchMystery: {
    title: "Mystery",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=9648`
  },
  fetchSciFi: {
    title: "Sci-Fi",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=878`
  },
  fetchWestern: {
    title: "Western",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=37`
  },
  fetchAnimation: {
    title: "Animation",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=16`
  },
  fetchTv: {
    title: "TV Movie",
    url: `/discover/movie?api_key=${API_KEY}&with_genres=10770`
  }
});

/***/ }),

/***/ "@heroicons/react/outline":
/*!*******************************************!*\
  !*** external "@heroicons/react/outline" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9OYXYuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXN1bHRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVGh1bWJuYWlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtZmxpcC1tb3ZlL2Rpc3QvcmVhY3QtZmxpcC1tb3ZlLmNqcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9yZXF1ZXN0cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAaGVyb2ljb25zL3JlYWN0L291dGxpbmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiSGVhZGVyIiwiSG9tZUljb24iLCJMaWdodG5pbmdCb2x0SWNvbiIsIkJhZGdlQ2hlY2tJY29uIiwiQ29sbGVjdGlvbkljb24iLCJTZWFyY2hJY29uIiwiVXNlckljb24iLCJIZWFkZXJJdGVtcyIsInRpdGxlIiwiSWNvbiIsIk5hdiIsInJvdXRlciIsInVzZVJvdXRlciIsIk9iamVjdCIsImVudHJpZXMiLCJyZXF1ZXN0cyIsIm1hcCIsImtleSIsInVybCIsInB1c2giLCJSZXN1bHRzIiwicmVzdWx0cyIsInJlc3VsdCIsImlkIiwiVGh1bWJuYWlsIiwiZm9yd2FyZFJlZiIsInJlZiIsIkJBU0VfVVJMIiwiYmFja2Ryb3BfcGF0aCIsInBvc3Rlcl9wYXRoIiwib3ZlcnZpZXciLCJvcmlnaW5hbF9uYW1lIiwibWVkaWFfdHlwZSIsInJlbGVhc2VfZGF0ZSIsImZpcnN0X2Fpcl9kYXRlIiwidm90ZV9jb3VudCIsImdsb2JhbCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwibG9hZGVycyIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJkZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJsb2FkZXIiLCJwYXRoIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsInNpemVzIiwibGF5b3V0IiwicGVyY2VudFNpemVzIiwibSIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIk1hdGgiLCJ3aWR0aHMiLCJzIiwia2luZCIsIndpZHRoIiwidyIsInAiLCJzcmNTZXQiLCJnZXRXaWR0aHMiLCJsYXN0IiwiaSIsInNyYyIsImxvYWQiLCJyb290IiwiVkFMSURfTE9BREVSUyIsImNvbmZpZ0xvYWRlciIsInVub3B0aW1pemVkIiwicHJpb3JpdHkiLCJhbGwiLCJyZXN0IiwidW5zaXplZCIsIkJvb2xlYW4iLCJKU09OIiwibG9hZGluZyIsImlzTGF6eSIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndpZHRoSW50IiwiZ2V0SW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImltZ1N0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwiYm9yZGVyIiwibWFyZ2luIiwiZGlzcGxheSIsImhlaWdodCIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpc05hTiIsIndyYXBwZXJTdHlsZSIsIm92ZXJmbG93Iiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nQXR0cmlidXRlcyIsImdlbmVyYXRlSW1nQXR0cnMiLCJxdWFsaXR5IiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibm9ybWFsaXplU3JjIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImNvbnNvbGUiLCJjb25maWdEb21haW5zIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwic2V0UmVmIiwiZWwiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsIm9wdGlvbnMiLCJpbnN0YW5jZSIsImVudHJ5IiwiY2FsbGJhY2siLCJIb21lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImdlbnJlIiwicXVlcnkiLCJyZXF1ZXN0IiwiZmV0Y2giLCJmZXRjaFRyZW5kaW5nIiwidGhlbiIsInJlcyIsImpzb24iLCJwcm9wcyIsIkFQSV9LRVkiLCJlbnYiLCJmZXRjaFRvcFJhdGVkIiwiZmV0Y2hBY3Rpb25Nb3ZpZXMiLCJmZXRjaENvbWVkeU1vdmllcyIsImZldGNoSG9ycm9yTW92aWVzIiwiZmV0Y2hSb21hbmNlTW92aWVzIiwiZmV0Y2hNeXN0ZXJ5IiwiZmV0Y2hTY2lGaSIsImZldGNoV2VzdGVybiIsImZldGNoQW5pbWF0aW9uIiwiZmV0Y2hUdiJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsS0FBcUMsRUFBRSxFQUUxQzs7QUFFUDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsWUFBWSxJQUFxQztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLElBQXFDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsc0JBQXNCLGtDQUFrQztBQUN4RCxHQUFHLElBQUk7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG1DQUFtQztBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0QixjQUFjLEVBQUU7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG1DQUFtQztBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsbUVBQW1FLGFBQWE7QUFDaEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLLHlCQUF5QjtBQUM5QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixjQUFjLDJDQUEyQztBQUNqRixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLFVBQVUsZ0JBQWdCO0FBQzNEOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsWUFBWSxtQkFBbUI7QUFDekQsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7QUFDOUIsU0FBUztBQUNULDhCQUE4QjtBQUM5QixTQUFTO0FBQ1QsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0EsOEJBQThCLG1DQUFtQztBQUNqRSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQLHFCQUFxQix5QkFBeUI7QUFDOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FB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Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsImltcG9ydCB7XHJcbiAgQmFkZ2VDaGVja0ljb24sXHJcbiAgSG9tZUljb24sXHJcbiAgVXNlckljb24sXHJcbiAgQ29sbGVjdGlvbkljb24sXHJcbiAgTGlnaHRuaW5nQm9sdEljb24sXHJcbiAgU2VhcmNoSWNvbixcclxufSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcblxyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IEhlYWRlckl0ZW0gZnJvbSBcIi4vSGVhZGVySXRlbVwiO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgc206ZmxleC1yb3cgbS01IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtZ3JvdyBqdXN0aWZ5LWV2ZW5seSBtYXgtdy0yeGxcIj5cclxuICAgICAgICA8SGVhZGVySXRlbSB0aXRsZT1cIkhPTUVcIiBJY29uPXtIb21lSWNvbn0gLz5cclxuICAgICAgICA8SGVhZGVySXRlbSB0aXRsZT1cIlRSRU5ESU5HXCIgSWNvbj17TGlnaHRuaW5nQm9sdEljb259IC8+XHJcbiAgICAgICAgPEhlYWRlckl0ZW0gdGl0bGU9XCJWRVJJRklFRFwiIEljb249e0JhZGdlQ2hlY2tJY29ufSAvPlxyXG4gICAgICAgIDxIZWFkZXJJdGVtIHRpdGxlPVwiQ09MTEVDVElPTlNcIiBJY29uPXtDb2xsZWN0aW9uSWNvbn0gLz5cclxuICAgICAgICA8SGVhZGVySXRlbSB0aXRsZT1cIlNFQVJDSFwiIEljb249e1NlYXJjaEljb259IC8+XHJcbiAgICAgICAgPEhlYWRlckl0ZW0gdGl0bGU9XCJBQ0NPVU5UXCIgSWNvbj17VXNlckljb259IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY29udGFpbiBcIlxyXG4gICAgICAgIHNyYz1cImh0dHBzOi8vcHJlc3MuaHVsdS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDIvaHVsdS13aGl0ZS5wbmdcIlxyXG4gICAgICAgIHdpZHRoPXsyMDB9XHJcbiAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgIC8+XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiIsImNvbnN0IEhlYWRlckl0ZW1zID0gKHsgdGl0bGUsIEljb24gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyIHctMTIgc206dy0yMCBob3Zlcjp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgIDxJY29uIGNsYXNzTmFtZT1cImgtOCBtYi0xIGdyb3VwLWhvdmVyOmFuaW1hdGUtYm91bmNlXCIgLz5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidHJhY2tpbmctd2lkZXN0IG9wYWNpdHktMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMFwiPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgPC9wPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlckl0ZW1zO1xyXG4iLCJpbXBvcnQgcmVxdWVzdHMgZnJvbSBcIi4uL3V0aWxzL3JlcXVlc3RzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgTmF2ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweC0xMCBzbTpweC0yMCB0ZXh0LTJ4bCB3aGl0ZXNwYWNlLW5vd3JhcCBzcGFjZS14LTEwIHNtOnNwYWNlLXgtMjAgb3ZlcmZsb3cteC1zY3JvbGwgc2Nyb2xsYmFyLWhpZGVcIj5cclxuICAgICAgICB7T2JqZWN0LmVudHJpZXMocmVxdWVzdHMpLm1hcCgoW2tleSwgeyB0aXRsZSwgdXJsIH1dKSA9PiAoXHJcbiAgICAgICAgICA8aDJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC8/Z2VucmU9JHtrZXl9YCl9XHJcbiAgICAgICAgICAgIGtleT17a2V5fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJsYXN0OnByLTI0IGN1cnNvci1wb2ludGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMTAwIHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMjUgaG92ZXI6dGV4dC13aGl0ZSBhY3RpdmU6dGV4dC1yZWQtNTAwXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgPC9oMj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgcmlnaHQtMCBiZy1ncmFkaWVudC10by1sIGZyb20tWyMwNjIwMkFdIGgtMTAgdy0xLzEyXCIgLz5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7XHJcbiIsImltcG9ydCBUaHVtYm5haWwgZnJvbSBcIi4vVGh1bWJuYWlsXCI7XHJcbmltcG9ydCBGbGlwTW92ZSBmcm9tIFwicmVhY3QtZmxpcC1tb3ZlXCI7XHJcblxyXG5mdW5jdGlvbiBSZXN1bHRzKHsgcmVzdWx0cyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGlwTW92ZSBjbGFzc05hbWU9XCJweC01IG15LTEwIHNtOmdyaWQgbWQ6Z3JpZC1jb2xzLTIgeGw6Z3JpZC1jb2xzLTMgM3hsOmZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIHtyZXN1bHRzLm1hcCgocmVzdWx0KSA9PiAoXHJcbiAgICAgICAgPFRodW1ibmFpbCBrZXk9e3Jlc3VsdC5pZH0gcmVzdWx0PXtyZXN1bHR9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9GbGlwTW92ZT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xyXG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgVGh1bWJVcEljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCI7XHJcbmltcG9ydCB7IGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFRodW1ibmFpbCA9IGZvcndhcmRSZWYoKHsgcmVzdWx0IH0sIHJlZikgPT4ge1xyXG4gIGNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC9cIjtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgY3Vyc29yLXBvaW50ZXIgcC0yIHRyYW5zaXRpb24gZHVyYXRpb24tMjAwIGVhc2UtaW4gdHJhbnNmb3JtIHNtOmhvdmVyOnNjYWxlLTEwNSBob3Zlcjp6LTUwXCJcclxuICAgID5cclxuICAgICAgPEltYWdlXHJcbiAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXHJcbiAgICAgICAgc3JjPXtcclxuICAgICAgICAgIGAke0JBU0VfVVJMfSR7cmVzdWx0LmJhY2tkcm9wX3BhdGggfHwgcmVzdWx0LnBvc3Rlcl9wYXRofWAgfHxcclxuICAgICAgICAgIGAke0JBU0VfVVJMfSR7cmVzdWx0LnBvc3Rlcl9wYXRofWBcclxuICAgICAgICB9XHJcbiAgICAgICAgaGVpZ2h0PVwiMTA4MFwiXHJcbiAgICAgICAgd2lkdGg9XCIxOTIwXCJcclxuICAgICAgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0cnVuY2F0ZSBtYXgtdy1tZFwiPntyZXN1bHQub3ZlcnZpZXd9PC9wPlxyXG5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwibXQtMSB0ZXh0LTJ4bCB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMCBlYXNlLWluLW91dCBncm91cC1ob3Zlcjpmb250LWJvbGRcIj5cclxuICAgICAgICAgIHtyZXN1bHQudGl0bGUgfHwgcmVzdWx0Lm9yaWdpbmFsX25hbWV9XHJcbiAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgb3BhY2l0eS0wIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwXCI+XHJcbiAgICAgICAgICB7cmVzdWx0Lm1lZGlhX3R5cGUgJiYgYCR7cmVzdWx0Lm1lZGlhX3R5cGV9IC5gfXtcIiBcIn1cclxuICAgICAgICAgIHtyZXN1bHQucmVsZWFzZV9kYXRlIHx8IHJlc3VsdC5maXJzdF9haXJfZGF0ZX0gLntcIiBcIn1cclxuICAgICAgICAgIDxUaHVtYlVwSWNvbiBjbGFzc05hbWU9XCJoLTUgbXgtMlwiIC8+XHJcbiAgICAgICAgICB7cmVzdWx0LnZvdGVfY291bnR9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGh1bWJuYWlsO1xyXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZCdcbmltcG9ydCB7IHRvQmFzZTY0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQnXG5pbXBvcnQge1xuICBJbWFnZUNvbmZpZyxcbiAgaW1hZ2VDb25maWdEZWZhdWx0LFxuICBMb2FkZXJWYWx1ZSxcbiAgVkFMSURfTE9BREVSUyxcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZydcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gIDsoZ2xvYmFsIGFzIGFueSkuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZVxufVxuXG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFsnbGF6eScsICdlYWdlcicsIHVuZGVmaW5lZF0gYXMgY29uc3RcbnR5cGUgTG9hZGluZ1ZhbHVlID0gdHlwZW9mIFZBTElEX0xPQURJTkdfVkFMVUVTW251bWJlcl1cblxuZXhwb3J0IHR5cGUgSW1hZ2VMb2FkZXIgPSAocmVzb2x2ZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nXG4gIHdpZHRoOiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxufVxuXG50eXBlIERlZmF1bHRJbWFnZUxvYWRlclByb3BzID0gSW1hZ2VMb2FkZXJQcm9wcyAmIHsgcm9vdDogc3RyaW5nIH1cblxuY29uc3QgbG9hZGVycyA9IG5ldyBNYXA8XG4gIExvYWRlclZhbHVlLFxuICAocHJvcHM6IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKSA9PiBzdHJpbmdcbj4oW1xuICBbJ2ltZ2l4JywgaW1naXhMb2FkZXJdLFxuICBbJ2Nsb3VkaW5hcnknLCBjbG91ZGluYXJ5TG9hZGVyXSxcbiAgWydha2FtYWknLCBha2FtYWlMb2FkZXJdLFxuICBbJ2RlZmF1bHQnLCBkZWZhdWx0TG9hZGVyXSxcbl0pXG5cbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICdmaWxsJyxcbiAgJ2ZpeGVkJyxcbiAgJ2ludHJpbnNpYycsXG4gICdyZXNwb25zaXZlJyxcbiAgdW5kZWZpbmVkLFxuXSBhcyBjb25zdFxudHlwZSBMYXlvdXRWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MQVlPVVRfVkFMVUVTW251bWJlcl1cblxudHlwZSBJbWdFbGVtZW50U3R5bGUgPSBOb25OdWxsYWJsZTxKU1guSW50cmluc2ljRWxlbWVudHNbJ2ltZyddWydzdHlsZSddPlxuXG5leHBvcnQgdHlwZSBJbWFnZVByb3BzID0gT21pdDxcbiAgSlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXSxcbiAgJ3NyYycgfCAnc3JjU2V0JyB8ICdyZWYnIHwgJ3dpZHRoJyB8ICdoZWlnaHQnIHwgJ2xvYWRpbmcnIHwgJ3N0eWxlJ1xuPiAmIHtcbiAgc3JjOiBzdHJpbmdcbiAgbG9hZGVyPzogSW1hZ2VMb2FkZXJcbiAgcXVhbGl0eT86IG51bWJlciB8IHN0cmluZ1xuICBwcmlvcml0eT86IGJvb2xlYW5cbiAgbG9hZGluZz86IExvYWRpbmdWYWx1ZVxuICB1bm9wdGltaXplZD86IGJvb2xlYW5cbiAgb2JqZWN0Rml0PzogSW1nRWxlbWVudFN0eWxlWydvYmplY3RGaXQnXVxuICBvYmplY3RQb3NpdGlvbj86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0UG9zaXRpb24nXVxufSAmIChcbiAgICB8IHtcbiAgICAgICAgd2lkdGg/OiBuZXZlclxuICAgICAgICBoZWlnaHQ/OiBuZXZlclxuICAgICAgICAvKiogQGRlcHJlY2F0ZWQgVXNlIGBsYXlvdXQ9XCJmaWxsXCJgIGluc3RlYWQgKi9cbiAgICAgICAgdW5zaXplZDogdHJ1ZVxuICAgICAgfVxuICAgIHwgeyB3aWR0aD86IG5ldmVyOyBoZWlnaHQ/OiBuZXZlcjsgbGF5b3V0OiAnZmlsbCcgfVxuICAgIHwge1xuICAgICAgICB3aWR0aDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGhlaWdodDogbnVtYmVyIHwgc3RyaW5nXG4gICAgICAgIGxheW91dD86IEV4Y2x1ZGU8TGF5b3V0VmFsdWUsICdmaWxsJz5cbiAgICAgIH1cbiAgKVxuXG5jb25zdCB7XG4gIGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyxcbiAgbG9hZGVyOiBjb25maWdMb2FkZXIsXG4gIHBhdGg6IGNvbmZpZ1BhdGgsXG4gIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMsXG59ID1cbiAgKChwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyBhcyBhbnkpIGFzIEltYWdlQ29uZmlnKSB8fCBpbWFnZUNvbmZpZ0RlZmF1bHRcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbLi4uY29uZmlnRGV2aWNlU2l6ZXMsIC4uLmNvbmZpZ0ltYWdlU2l6ZXNdXG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcbmFsbFNpemVzLnNvcnQoKGEsIGIpID0+IGEgLSBiKVxuXG5mdW5jdGlvbiBnZXRXaWR0aHMoXG4gIHdpZHRoOiBudW1iZXIgfCB1bmRlZmluZWQsXG4gIGxheW91dDogTGF5b3V0VmFsdWUsXG4gIHNpemVzOiBzdHJpbmcgfCB1bmRlZmluZWRcbik6IHsgd2lkdGhzOiBudW1iZXJbXTsga2luZDogJ3cnIHwgJ3gnIH0ge1xuICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgY29uc3QgcGVyY2VudFNpemVzID0gWy4uLnNpemVzLm1hdGNoQWxsKC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nKV0ubWFwKChtKSA9PlxuICAgICAgcGFyc2VJbnQobVsyXSlcbiAgICApXG4gICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoXG4gICAgICAgICAgKHMpID0+IHMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICksXG4gICAgICAgIGtpbmQ6ICd3JyxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBhbGxTaXplcywga2luZDogJ3cnIH1cbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fFxuICAgIGxheW91dCA9PT0gJ2ZpbGwnIHx8XG4gICAgbGF5b3V0ID09PSAncmVzcG9uc2l2ZSdcbiAgKSB7XG4gICAgcmV0dXJuIHsgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcywga2luZDogJ3cnIH1cbiAgfVxuXG4gIGNvbnN0IHdpZHRocyA9IFtcbiAgICAuLi5uZXcgU2V0KFxuICAgICAgLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgW3dpZHRoLCB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovXS5tYXAoXG4gICAgICAgICh3KSA9PiBhbGxTaXplcy5maW5kKChwKSA9PiBwID49IHcpIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICApXG4gICAgKSxcbiAgXVxuICByZXR1cm4geyB3aWR0aHMsIGtpbmQ6ICd4JyB9XG59XG5cbnR5cGUgR2VuSW1nQXR0cnNEYXRhID0ge1xuICBzcmM6IHN0cmluZ1xuICB1bm9wdGltaXplZDogYm9vbGVhblxuICBsYXlvdXQ6IExheW91dFZhbHVlXG4gIGxvYWRlcjogSW1hZ2VMb2FkZXJcbiAgd2lkdGg/OiBudW1iZXJcbiAgcXVhbGl0eT86IG51bWJlclxuICBzaXplcz86IHN0cmluZ1xufVxuXG50eXBlIEdlbkltZ0F0dHJzUmVzdWx0ID0ge1xuICBzcmM6IHN0cmluZ1xuICBzcmNTZXQ6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoe1xuICBzcmMsXG4gIHVub3B0aW1pemVkLFxuICBsYXlvdXQsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxuICBzaXplcyxcbiAgbG9hZGVyLFxufTogR2VuSW1nQXR0cnNEYXRhKTogR2VuSW1nQXR0cnNSZXN1bHQge1xuICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICByZXR1cm4geyBzcmMsIHNyY1NldDogdW5kZWZpbmVkLCBzaXplczogdW5kZWZpbmVkIH1cbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGhzLCBraW5kIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpXG4gIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMVxuXG4gIHJldHVybiB7XG4gICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgc3JjU2V0OiB3aWR0aHNcbiAgICAgIC5tYXAoXG4gICAgICAgICh3LCBpKSA9PlxuICAgICAgICAgIGAke2xvYWRlcih7IHNyYywgcXVhbGl0eSwgd2lkdGg6IHcgfSl9ICR7XG4gICAgICAgICAgICBraW5kID09PSAndycgPyB3IDogaSArIDFcbiAgICAgICAgICB9JHtraW5kfWBcbiAgICAgIClcbiAgICAgIC5qb2luKCcsICcpLFxuXG4gICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgc3JjOiBsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3aWR0aHNbbGFzdF0gfSksXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SW50KHg6IHVua25vd24pOiBudW1iZXIgfCB1bmRlZmluZWQge1xuICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHhcbiAgfVxuICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKVxuICB9XG4gIHJldHVybiB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzOiBJbWFnZUxvYWRlclByb3BzKSB7XG4gIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpXG4gIGlmIChsb2FkKSB7XG4gICAgcmV0dXJuIGxvYWQoeyByb290OiBjb25maWdQYXRoLCAuLi5sb2FkZXJQcm9wcyB9KVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICBgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7VkFMSURfTE9BREVSUy5qb2luKFxuICAgICAgJywgJ1xuICAgICl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YFxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHtcbiAgc3JjLFxuICBzaXplcyxcbiAgdW5vcHRpbWl6ZWQgPSBmYWxzZSxcbiAgcHJpb3JpdHkgPSBmYWxzZSxcbiAgbG9hZGluZyxcbiAgY2xhc3NOYW1lLFxuICBxdWFsaXR5LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBvYmplY3RGaXQsXG4gIG9iamVjdFBvc2l0aW9uLFxuICBsb2FkZXIgPSBkZWZhdWx0SW1hZ2VMb2FkZXIsXG4gIC4uLmFsbFxufTogSW1hZ2VQcm9wcykge1xuICBsZXQgcmVzdDogUGFydGlhbDxJbWFnZVByb3BzPiA9IGFsbFxuICBsZXQgbGF5b3V0OiBOb25OdWxsYWJsZTxMYXlvdXRWYWx1ZT4gPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnXG4gIGxldCB1bnNpemVkID0gZmFsc2VcbiAgaWYgKCd1bnNpemVkJyBpbiByZXN0KSB7XG4gICAgdW5zaXplZCA9IEJvb2xlYW4ocmVzdC51bnNpemVkKVxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsndW5zaXplZCddXG4gIH0gZWxzZSBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dFxuXG4gICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoIXNyYykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgd2lkdGgsIGhlaWdodCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChcbiAgICAgICAgICBTdHJpbmdcbiAgICAgICAgKS5qb2luKCcsJyl9LmBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICh1bnNpemVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBkZXByZWNhdGVkIFwidW5zaXplZFwiIHByb3BlcnR5LCB3aGljaCB3YXMgcmVtb3ZlZCBpbiBmYXZvciBvZiB0aGUgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHlgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgbGV0IGlzTGF6eSA9XG4gICAgIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKVxuICBpZiAoc3JjICYmIHNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICB1bm9wdGltaXplZCA9IHRydWVcbiAgICBpc0xhenkgPSBmYWxzZVxuICB9XG5cbiAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSB1c2VJbnRlcnNlY3Rpb248SFRNTEltYWdlRWxlbWVudD4oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gICAgZGlzYWJsZWQ6ICFpc0xhenksXG4gIH0pXG4gIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZFxuXG4gIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKVxuICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KVxuICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpXG5cbiAgbGV0IHdyYXBwZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdHlsZTogSlNYLkludHJpbnNpY0VsZW1lbnRzWydkaXYnXVsnc3R5bGUnXSB8IHVuZGVmaW5lZFxuICBsZXQgc2l6ZXJTdmc6IHN0cmluZyB8IHVuZGVmaW5lZFxuICBsZXQgaW1nU3R5bGU6IEltZ0VsZW1lbnRTdHlsZSB8IHVuZGVmaW5lZCA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBib3R0b206IDAsXG4gICAgcmlnaHQ6IDAsXG5cbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICBwYWRkaW5nOiAwLFxuICAgIGJvcmRlcjogJ25vbmUnLFxuICAgIG1hcmdpbjogJ2F1dG8nLFxuXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICB3aWR0aDogMCxcbiAgICBoZWlnaHQ6IDAsXG4gICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgIG1heEhlaWdodDogJzEwMCUnLFxuXG4gICAgb2JqZWN0Rml0LFxuICAgIG9iamVjdFBvc2l0aW9uLFxuICB9XG4gIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgIT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludFxuICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYFxuICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcblxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdHlsZSA9IHsgZGlzcGxheTogJ2Jsb2NrJywgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsIHBhZGRpbmdUb3AgfVxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgfVxuICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YFxuICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIGhlaWdodDogaGVpZ2h0SW50LFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICB0eXBlb2Ygd2lkdGhJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGhlaWdodEludCA9PT0gJ3VuZGVmaW5lZCcgJiZcbiAgICBsYXlvdXQgPT09ICdmaWxsJ1xuICApIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICByaWdodDogMCxcblxuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpbWdBdHRyaWJ1dGVzOiBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgICBzcmM6XG4gICAgICAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICBzaXplczogdW5kZWZpbmVkLFxuICB9XG5cbiAgaWYgKGlzVmlzaWJsZSkge1xuICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgIHNyYyxcbiAgICAgIHVub3B0aW1pemVkLFxuICAgICAgbGF5b3V0LFxuICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgIHNpemVzLFxuICAgICAgbG9hZGVyLFxuICAgIH0pXG4gIH1cblxuICBpZiAodW5zaXplZCkge1xuICAgIHdyYXBwZXJTdHlsZSA9IHVuZGVmaW5lZFxuICAgIHNpemVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBpbWdTdHlsZSA9IHVuZGVmaW5lZFxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17d3JhcHBlclN0eWxlfT5cbiAgICAgIHtzaXplclN0eWxlID8gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzaXplclN0eWxlfT5cbiAgICAgICAgICB7c2l6ZXJTdmcgPyAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17dHJ1ZX1cbiAgICAgICAgICAgICAgcm9sZT1cInByZXNlbnRhdGlvblwiXG4gICAgICAgICAgICAgIHNyYz17YGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHt0b0Jhc2U2NChzaXplclN2Zyl9YH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7IWlzVmlzaWJsZSAmJiAoXG4gICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICB7Li4ucmVzdH1cbiAgICAgICAgICAgIHsuLi5nZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgICBsb2FkZXIsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHNyYz17c3JjfVxuICAgICAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgICAgICBzaXplcz17c2l6ZXN9XG4gICAgICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgKX1cbiAgICAgIDxpbWdcbiAgICAgICAgey4uLnJlc3R9XG4gICAgICAgIHsuLi5pbWdBdHRyaWJ1dGVzfVxuICAgICAgICBkZWNvZGluZz1cImFzeW5jXCJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIHJlZj17c2V0UmVmfVxuICAgICAgICBzdHlsZT17aW1nU3R5bGV9XG4gICAgICAvPlxuICAgICAge3ByaW9yaXR5ID8gKFxuICAgICAgICAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgICAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAga2V5PXtcbiAgICAgICAgICAgICAgJ19fbmltZy0nICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmMgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNyY1NldCArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgYXM9XCJpbWFnZVwiXG4gICAgICAgICAgICBocmVmPXtpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc3Jjc2V0PXtpbWdBdHRyaWJ1dGVzLnNyY1NldH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGVcbiAgICAgICAgICAgIGltYWdlc2l6ZXM9e2ltZ0F0dHJpYnV0ZXMuc2l6ZXN9XG4gICAgICAgICAgPjwvbGluaz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy9CVUlMVCBJTiBMT0FERVJTXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyY1xufVxuXG5mdW5jdGlvbiBpbWdpeExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/Zm9ybWF0PWF1dG8mZml0PW1heCZ3PTMwMFxuICBjb25zdCBwYXJhbXMgPSBbJ2F1dG89Zm9ybWF0JywgJ2ZpdD1tYXgnLCAndz0nICsgd2lkdGhdXG4gIGxldCBwYXJhbXNTdHJpbmcgPSAnJ1xuICBpZiAocXVhbGl0eSkge1xuICAgIHBhcmFtcy5wdXNoKCdxPScgKyBxdWFsaXR5KVxuICB9XG5cbiAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICBwYXJhbXNTdHJpbmcgPSAnPycgKyBwYXJhbXMuam9pbignJicpXG4gIH1cbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0ke3BhcmFtc1N0cmluZ31gXG59XG5cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QsIHNyYywgd2lkdGggfTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YFxufVxuXG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgY29uc3QgcGFyYW1zID0gWydmX2F1dG8nLCAnY19saW1pdCcsICd3XycgKyB3aWR0aCwgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJyldXG4gIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nXG4gIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YFxufVxuXG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHtcbiAgcm9vdCxcbiAgc3JjLFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbn06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW11cblxuICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpXG4gICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpXG5cbiAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbihcbiAgICAgICAgICAnLCAnXG4gICAgICAgICl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgc3JjLCB3aWR0aCwgcXVhbGl0eSB9XG4gICAgICAgICl9YFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICBsZXQgcGFyc2VkU3JjOiBVUkxcbiAgICAgIHRyeSB7XG4gICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgaWYgKCFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICtcbiAgICAgICAgICAgIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWBcbn1cbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9pbWFnZScpXG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZXgpIHsgcmV0dXJuIChleCAmJiAodHlwZW9mIGV4ID09PSAnb2JqZWN0JykgJiYgJ2RlZmF1bHQnIGluIGV4KSA/IGV4WydkZWZhdWx0J10gOiBleDsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIFJlYWN0X19kZWZhdWx0ID0gX2ludGVyb3BEZWZhdWx0KFJlYWN0KTtcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xudmFyIFJlYWN0RE9NX19kZWZhdWx0ID0gX2ludGVyb3BEZWZhdWx0KFJlYWN0RE9NKTtcblxuZnVuY3Rpb24gd2Fybk9uY2UobXNnKSB7XG4gIHZhciBoYXNXYXJuZWQgPSBmYWxzZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWhhc1dhcm5lZCkge1xuICAgICAgY29uc29sZS53YXJuKG1zZyk7XG4gICAgICBoYXNXYXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgfTtcbn1cblxuXG52YXIgc3RhdGVsZXNzRnVuY3Rpb25hbENvbXBvbmVudFN1cHBsaWVkID0gd2Fybk9uY2UoJ1xcbj4+IEVycm9yLCB2aWEgcmVhY3QtZmxpcC1tb3ZlIDw8XFxuXFxuWW91IHByb3ZpZGVkIGEgc3RhdGVsZXNzIGZ1bmN0aW9uYWwgY29tcG9uZW50IGFzIGEgY2hpbGQgdG8gPEZsaXBNb3ZlPi4gVW5mb3J0dW5hdGVseSwgU0ZDcyBhcmVuXFwndCBzdXBwb3J0ZWQsIGJlY2F1c2UgRmxpcCBNb3ZlIG5lZWRzIGFjY2VzcyB0byB0aGUgYmFja2luZyBpbnN0YW5jZXMgdmlhIHJlZnMsIGFuZCBTRkNzIGRvblxcJ3QgaGF2ZSBhIHB1YmxpYyBpbnN0YW5jZSB0aGF0IGhvbGRzIHRoYXQgaW5mby5cXG5cXG5QbGVhc2Ugd3JhcCB5b3VyIGNvbXBvbmVudHMgaW4gYSBuYXRpdmUgZWxlbWVudCAoZWcuIDxkaXY+KSwgb3IgYSBub24tZnVuY3Rpb25hbCBjb21wb25lbnQuXFxuJyk7XG5cbnZhciBwcmltaXRpdmVOb2RlU3VwcGxpZWQgPSB3YXJuT25jZSgnXFxuPj4gRXJyb3IsIHZpYSByZWFjdC1mbGlwLW1vdmUgPDxcXG5cXG5Zb3UgcHJvdmlkZWQgYSBwcmltaXRpdmUgKHRleHQgb3IgbnVtYmVyKSBub2RlIGFzIGEgY2hpbGQgdG8gPEZsaXBNb3ZlPi4gRmxpcCBNb3ZlIG5lZWRzIGNvbnRhaW5lcnMgd2l0aCB1bmlxdWUga2V5cyB0byBtb3ZlIGNoaWxkcmVuIGFyb3VuZC5cXG5cXG5QbGVhc2Ugd3JhcCB5b3VyIHZhbHVlIGluIGEgbmF0aXZlIGVsZW1lbnQgKGVnLiA8c3Bhbj4pLCBvciBhIGNvbXBvbmVudC5cXG4nKTtcblxudmFyIGludmFsaWRUeXBlRm9yVGltaW5nUHJvcCA9IGZ1bmN0aW9uIGludmFsaWRUeXBlRm9yVGltaW5nUHJvcChhcmdzXG4vLyBwcmV0dGllci1pZ25vcmVcbikge1xuICByZXR1cm4gY29uc29sZS5lcnJvcignXFxuPj4gRXJyb3IsIHZpYSByZWFjdC1mbGlwLW1vdmUgPDxcXG5cXG5UaGUgcHJvcCB5b3UgcHJvdmlkZWQgZm9yIFxcJycgKyBhcmdzLnByb3AgKyAnXFwnIGlzIGludmFsaWQuIEl0IG5lZWRzIHRvIGJlIGEgcG9zaXRpdmUgaW50ZWdlciwgb3IgYSBzdHJpbmcgdGhhdCBjYW4gYmUgcmVzb2x2ZWQgdG8gYSBudW1iZXIuIFRoZSB2YWx1ZSB5b3UgcHJvdmlkZWQgaXMgXFwnJyArIGFyZ3MudmFsdWUgKyAnXFwnLlxcblxcbkFzIGEgcmVzdWx0LCAgdGhlIGRlZmF1bHQgdmFsdWUgZm9yIHRoaXMgcGFyYW1ldGVyIHdpbGwgYmUgdXNlZCwgd2hpY2ggaXMgXFwnJyArIGFyZ3MuZGVmYXVsdFZhbHVlICsgJ1xcJy5cXG4nKTtcbn07XG5cbnZhciBpbnZhbGlkRW50ZXJMZWF2ZVByZXNldCA9IGZ1bmN0aW9uIGludmFsaWRFbnRlckxlYXZlUHJlc2V0KGFyZ3Ncbi8vIHByZXR0aWVyLWlnbm9yZVxuKSB7XG4gIHJldHVybiBjb25zb2xlLmVycm9yKCdcXG4+PiBFcnJvciwgdmlhIHJlYWN0LWZsaXAtbW92ZSA8PFxcblxcblRoZSBlbnRlci9sZWF2ZSBwcmVzZXQgeW91IHByb3ZpZGVkIGlzIGludmFsaWQuIFdlIGRvblxcJ3QgY3VycmVudGx5IGhhdmUgYSBcXCcnICsgYXJncy52YWx1ZSArICcgcHJlc2V0LlxcJ1xcblxcbkFjY2VwdGFibGUgdmFsdWVzIGFyZSAnICsgYXJncy5hY2NlcHRhYmxlVmFsdWVzICsgJy4gVGhlIGRlZmF1bHQgdmFsdWUgb2YgXFwnJyArIGFyZ3MuZGVmYXVsdFZhbHVlICsgJ1xcJyB3aWxsIGJlIHVzZWQuXFxuJyk7XG59O1xuXG52YXIgcGFyZW50Tm9kZVBvc2l0aW9uU3RhdGljID0gd2Fybk9uY2UoJ1xcbj4+IFdhcm5pbmcsIHZpYSByZWFjdC1mbGlwLW1vdmUgPDxcXG5cXG5XaGVuIHVzaW5nIFwid3JhcHBlcmxlc3NcIiBtb2RlIChieSBzdXBwbHlpbmcgXFwndHlwZU5hbWVcXCcgb2YgXFwnbnVsbFxcJyksIHN0cmFuZ2UgdGhpbmdzIGhhcHBlbiB3aGVuIHRoZSBkaXJlY3QgcGFyZW50IGhhcyB0aGUgZGVmYXVsdCBcInN0YXRpY1wiIHBvc2l0aW9uLlxcblxcbkZsaXBNb3ZlIGhhcyBhZGRlZCBcXCdwb3NpdGlvbjogcmVsYXRpdmVcXCcgdG8gdGhpcyBub2RlLCB0byBlbnN1cmUgRmxpcCBNb3ZlIGFuaW1hdGVzIGNvcnJlY3RseS5cXG5cXG5UbyBhdm9pZCBzZWVpbmcgdGhpcyB3YXJuaW5nLCBzaW1wbHkgYXBwbHkgYSBub24tc3RhdGljIHBvc2l0aW9uIHRvIHRoYXQgcGFyZW50IG5vZGUuXFxuJyk7XG5cbnZhciBjaGlsZElzRGlzYWJsZWQgPSB3YXJuT25jZSgnXFxuPj4gV2FybmluZywgdmlhIHJlYWN0LWZsaXAtbW92ZSA8PFxcblxcbk9uZSBvciBtb3JlIG9mIEZsaXAgTW92ZVxcJ3MgY2hpbGQgZWxlbWVudHMgaGF2ZSB0aGUgaHRtbCBhdHRyaWJ1dGUgXFwnZGlzYWJsZWRcXCcgc2V0IHRvIHRydWUuXFxuXFxuUGxlYXNlIG5vdGUgdGhhdCB0aGlzIHdpbGwgY2F1c2UgYW5pbWF0aW9ucyB0byBicmVhayBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMSBhbmQgYmVsb3cuIEVpdGhlciByZW1vdmUgdGhlIGRpc2FibGVkIGF0dHJpYnV0ZSBvciBzZXQgXFwnYW5pbWF0aW9uXFwnIHRvIGZhbHNlLlxcbicpO1xuXG52YXIgZW50ZXJQcmVzZXRzID0ge1xuICBlbGV2YXRvcjoge1xuICAgIGZyb206IHsgdHJhbnNmb3JtOiAnc2NhbGUoMCknLCBvcGFjaXR5OiAnMCcgfSxcbiAgICB0bzogeyB0cmFuc2Zvcm06ICcnLCBvcGFjaXR5OiAnJyB9XG4gIH0sXG4gIGZhZGU6IHtcbiAgICBmcm9tOiB7IG9wYWNpdHk6ICcwJyB9LFxuICAgIHRvOiB7IG9wYWNpdHk6ICcnIH1cbiAgfSxcbiAgYWNjb3JkaW9uVmVydGljYWw6IHtcbiAgICBmcm9tOiB7IHRyYW5zZm9ybTogJ3NjYWxlWSgwKScsIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciB0b3AnIH0sXG4gICAgdG86IHsgdHJhbnNmb3JtOiAnJywgdHJhbnNmb3JtT3JpZ2luOiAnY2VudGVyIHRvcCcgfVxuICB9LFxuICBhY2NvcmRpb25Ib3Jpem9udGFsOiB7XG4gICAgZnJvbTogeyB0cmFuc2Zvcm06ICdzY2FsZVgoMCknLCB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IGNlbnRlcicgfSxcbiAgICB0bzogeyB0cmFuc2Zvcm06ICcnLCB0cmFuc2Zvcm1PcmlnaW46ICdsZWZ0IGNlbnRlcicgfVxuICB9LFxuICBub25lOiBudWxsXG59O1xuLyoqXG4gKiBSZWFjdCBGbGlwIE1vdmUgfCBlbnRlckxlYXZlUHJlc2V0c1xuICogKGMpIDIwMTYtcHJlc2VudCBKb3NodWEgQ29tZWF1XG4gKlxuICogVGhpcyBjb250YWlucyB0aGUgbWFzdGVyIGxpc3Qgb2YgcHJlc2V0cyBhdmFpbGFibGUgZm9yIGVudGVyL2xlYXZlIGFuaW1hdGlvbnMsXG4gKiBhbG9uZyB3aXRoIHRoZSBtYXBwaW5nIGJldHdlZW4gcHJlc2V0IGFuZCBzdHlsZXMuXG4gKi9cblxuXG52YXIgbGVhdmVQcmVzZXRzID0ge1xuICBlbGV2YXRvcjoge1xuICAgIGZyb206IHsgdHJhbnNmb3JtOiAnc2NhbGUoMSknLCBvcGFjaXR5OiAnMScgfSxcbiAgICB0bzogeyB0cmFuc2Zvcm06ICdzY2FsZSgwKScsIG9wYWNpdHk6ICcwJyB9XG4gIH0sXG4gIGZhZGU6IHtcbiAgICBmcm9tOiB7IG9wYWNpdHk6ICcxJyB9LFxuICAgIHRvOiB7IG9wYWNpdHk6ICcwJyB9XG4gIH0sXG4gIGFjY29yZGlvblZlcnRpY2FsOiB7XG4gICAgZnJvbTogeyB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLCB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXIgdG9wJyB9LFxuICAgIHRvOiB7IHRyYW5zZm9ybTogJ3NjYWxlWSgwKScsIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciB0b3AnIH1cbiAgfSxcbiAgYWNjb3JkaW9uSG9yaXpvbnRhbDoge1xuICAgIGZyb206IHsgdHJhbnNmb3JtOiAnc2NhbGVYKDEpJywgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCBjZW50ZXInIH0sXG4gICAgdG86IHsgdHJhbnNmb3JtOiAnc2NhbGVYKDApJywgdHJhbnNmb3JtT3JpZ2luOiAnbGVmdCBjZW50ZXInIH1cbiAgfSxcbiAgbm9uZTogbnVsbFxufTtcblxuLy8gRm9yIG5vdywgYXBwZWFyUHJlc2V0cyB3aWxsIGJlIGlkZW50aWNhbCB0byBlbnRlclByZXNldHMuXG4vLyBBc3NpZ25pbmcgYSBjdXN0b20gZXhwb3J0IGluIGNhc2Ugd2UgZXZlciB3YW50IHRvIGFkZCBhcHBlYXItc3BlY2lmaWMgb25lcy5cbnZhciBhcHBlYXJQcmVzZXRzID0gZW50ZXJQcmVzZXRzO1xuXG52YXIgZGVmYXVsdFByZXNldCA9ICdlbGV2YXRvcic7XG52YXIgZGlzYWJsZVByZXNldCA9ICdub25lJztcblxudmFyIGZpbmQgPSBmdW5jdGlvbiBmaW5kKHByZWRpY2F0ZSwgYXJyKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJbaV0sIGksIGFycikpIHtcbiAgICAgIHJldHVybiBhcnJbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cblxudmFyIGV2ZXJ5ID0gZnVuY3Rpb24gZXZlcnkocHJlZGljYXRlLCBhcnIpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIXByZWRpY2F0ZShhcnJbaV0sIGksIGFycikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xudmFyIF9pc0FycmF5ID0gZnVuY3Rpb24gaXNBcnJheShhcnIpIHtcbiAgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChhcmcpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZykgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG4gIHJldHVybiBfaXNBcnJheShhcnIpO1xufTtcblxudmFyIGlzRWxlbWVudEFuU0ZDID0gZnVuY3Rpb24gaXNFbGVtZW50QW5TRkMoZWxlbWVudCkge1xuICB2YXIgaXNOYXRpdmVET01FbGVtZW50ID0gdHlwZW9mIGVsZW1lbnQudHlwZSA9PT0gJ3N0cmluZyc7XG5cbiAgaWYgKGlzTmF0aXZlRE9NRWxlbWVudCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiB0eXBlb2YgZWxlbWVudC50eXBlID09PSAnZnVuY3Rpb24nICYmICFlbGVtZW50LnR5cGUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ7XG59O1xuXG5mdW5jdGlvbiBvbWl0KG9iaikge1xuICB2YXIgYXR0cnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IFtdO1xuXG4gIHZhciByZXN1bHQgPSB7fTtcbiAgT2JqZWN0LmtleXMob2JqKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAoYXR0cnMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgcmVzdWx0W2tleV0gPSBvYmpba2V5XTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBhcnJheXNFcXVhbChhLCBiKSB7XG4gIHZhciBzYW1lT2JqZWN0ID0gYSA9PT0gYjtcbiAgaWYgKHNhbWVPYmplY3QpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBub3RCb3RoQXJyYXlzID0gIV9pc0FycmF5KGEpIHx8ICFfaXNBcnJheShiKTtcbiAgdmFyIGRpZmZlcmVudExlbmd0aHMgPSBhLmxlbmd0aCAhPT0gYi5sZW5ndGg7XG5cbiAgaWYgKG5vdEJvdGhBcnJheXMgfHwgZGlmZmVyZW50TGVuZ3Rocykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBldmVyeShmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcbiAgICByZXR1cm4gZWxlbWVudCA9PT0gYltpbmRleF07XG4gIH0sIGEpO1xufVxuXG5mdW5jdGlvbiBtZW1vaXplU3RyaW5nKGZuKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuXG4gIHJldHVybiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgaWYgKCFjYWNoZVtzdHJdKSB7XG4gICAgICBjYWNoZVtzdHJdID0gZm4oc3RyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlW3N0cl07XG4gIH07XG59XG5cbnZhciBoeXBoZW5hdGUgPSBtZW1vaXplU3RyaW5nKGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oW0EtWl0pL2csICctJDEnKS50b0xvd2VyQ2FzZSgpO1xufSk7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqO1xufSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5cblxuXG5cblxuXG5cblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbiAoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG59O1xuXG5cblxuXG5cblxuXG5cblxuXG5cbnZhciBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuID0gZnVuY3Rpb24gKHNlbGYsIGNhbGwpIHtcbiAgaWYgKCFzZWxmKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG59O1xuXG4vKipcbiAqIFJlYWN0IEZsaXAgTW92ZSB8IHByb3BDb252ZXJ0ZXJcbiAqIChjKSAyMDE2LXByZXNlbnQgSm9zaHVhIENvbWVhdVxuICpcbiAqIEFic3RyYWN0ZWQgYXdheSBhIGJ1bmNoIG9mIHRoZSBtZXNzeSBidXNpbmVzcyB3aXRoIHByb3BzLlxuICogICAtIHByb3BzIGZsb3cgdHlwZXMgYW5kIGRlZmF1bHRQcm9wc1xuICogICAtIFR5cGUgY29udmVyc2lvbiAoV2UgYWNjZXB0ICdzdHJpbmcnIGFuZCAnbnVtYmVyJyB2YWx1ZXMgZm9yIGR1cmF0aW9uLFxuICogICAgIGRlbGF5LCBhbmQgb3RoZXIgZmllbGRzLCBidXQgd2UgYWN0dWFsbHkgbmVlZCB0aGVtIHRvIGJlIGludHMuKVxuICogICAtIENoaWxkcmVuIGNvbnZlcnNpb24gKHdlIG5lZWQgdGhlIGNoaWxkcmVuIHRvIGJlIGFuIGFycmF5LiBNYXkgbm90IGFsd2F5c1xuICogICAgIGJlLCBpZiBhIHNpbmdsZSBjaGlsZCBpcyBwYXNzZWQgaW4uKVxuICogICAtIFJlc29sdmluZyBhbmltYXRpb24gcHJlc2V0cyBpbnRvIHRoZWlyIGJhc2UgQ1NTIHN0eWxlc1xuICovXG4vKiBlc2xpbnQtZGlzYWJsZSBibG9jay1zY29wZWQtdmFyICovXG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1kdXBsaWNhdGUtaW1wb3J0c1xuXG5cbmZ1bmN0aW9uIHByb3BDb252ZXJ0ZXIoQ29tcG9zZWRDb21wb25lbnQpIHtcbiAgdmFyIF9jbGFzcywgX3RlbXA7XG5cbiAgcmV0dXJuIF90ZW1wID0gX2NsYXNzID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBpbmhlcml0cyhGbGlwTW92ZVByb3BDb252ZXJ0ZXIsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gRmxpcE1vdmVQcm9wQ29udmVydGVyKCkge1xuICAgICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRmxpcE1vdmVQcm9wQ29udmVydGVyKTtcbiAgICAgIHJldHVybiBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBGbGlwTW92ZVByb3BDb252ZXJ0ZXIucHJvdG90eXBlLmNoZWNrQ2hpbGRyZW4gPSBmdW5jdGlvbiBjaGVja0NoaWxkcmVuKGNoaWxkcmVuKSB7XG4gICAgICAvLyBTa2lwIGFsbCBjb25zb2xlIHdhcm5pbmdzIGluIHByb2R1Y3Rpb24uXG4gICAgICAvLyBCYWlsIGVhcmx5LCB0byBhdm9pZCB1bm5lY2Vzc2FyeSB3b3JrLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBzYW1lIGFzIFJlYWN0Lk5vZGUsIGJ1dCB3aXRob3V0IGZyYWdtZW50cywgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9mbG93L2lzc3Vlcy80NzgxXG5cblxuICAgICAgLy8gRmxpcE1vdmUgZG9lcyBub3Qgc3VwcG9ydCBzdGF0ZWxlc3MgZnVuY3Rpb25hbCBjb21wb25lbnRzLlxuICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIGFueSBzdXBwbGllZCBjb21wb25lbnRzIHdvbid0IHdvcmsuXG4gICAgICAvLyBJZiB0aGUgY2hpbGQgZG9lc24ndCBoYXZlIGEga2V5LCBpdCBtZWFucyB3ZSBhcmVuJ3QgYW5pbWF0aW5nIGl0LlxuICAgICAgLy8gSXQncyBhbGxvd2VkIHRvIGJlIGFuIFNGQywgc2luY2Ugd2UgaWdub3JlIGl0LlxuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChjaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIC8vIG51bGwsIHVuZGVmaW5lZCwgYW5kIGJvb2xlYW5zIHdpbGwgYmUgZmlsdGVyZWQgb3V0IGJ5IENoaWxkcmVuLnRvQXJyYXlcbiAgICAgICAgaWYgKGNoaWxkID09IG51bGwgfHwgdHlwZW9mIGNoaWxkID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKHR5cGVvZiBjaGlsZCA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YoY2hpbGQpKSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBwcmltaXRpdmVOb2RlU3VwcGxpZWQoKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFbGVtZW50QW5TRkMoY2hpbGQpICYmIGNoaWxkLmtleSAhPSBudWxsKSB7XG4gICAgICAgICAgc3RhdGVsZXNzRnVuY3Rpb25hbENvbXBvbmVudFN1cHBsaWVkKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBGbGlwTW92ZVByb3BDb252ZXJ0ZXIucHJvdG90eXBlLmNvbnZlcnRQcm9wcyA9IGZ1bmN0aW9uIGNvbnZlcnRQcm9wcyhwcm9wcykge1xuICAgICAgdmFyIHdvcmtpbmdQcm9wcyA9IHtcbiAgICAgICAgLy8gZXhwbGljaXRseSBieXBhc3MgdGhlIHByb3BzIHRoYXQgZG9uJ3QgbmVlZCBjb252ZXJzaW9uXG4gICAgICAgIGNoaWxkcmVuOiBwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgZWFzaW5nOiBwcm9wcy5lYXNpbmcsXG4gICAgICAgIG9uU3RhcnQ6IHByb3BzLm9uU3RhcnQsXG4gICAgICAgIG9uRmluaXNoOiBwcm9wcy5vbkZpbmlzaCxcbiAgICAgICAgb25TdGFydEFsbDogcHJvcHMub25TdGFydEFsbCxcbiAgICAgICAgb25GaW5pc2hBbGw6IHByb3BzLm9uRmluaXNoQWxsLFxuICAgICAgICB0eXBlTmFtZTogcHJvcHMudHlwZU5hbWUsXG4gICAgICAgIGRpc2FibGVBbGxBbmltYXRpb25zOiBwcm9wcy5kaXNhYmxlQWxsQW5pbWF0aW9ucyxcbiAgICAgICAgZ2V0UG9zaXRpb246IHByb3BzLmdldFBvc2l0aW9uLFxuICAgICAgICBtYWludGFpbkNvbnRhaW5lckhlaWdodDogcHJvcHMubWFpbnRhaW5Db250YWluZXJIZWlnaHQsXG4gICAgICAgIHZlcnRpY2FsQWxpZ25tZW50OiBwcm9wcy52ZXJ0aWNhbEFsaWdubWVudCxcblxuICAgICAgICAvLyBEbyBzdHJpbmctdG8taW50IGNvbnZlcnNpb24gZm9yIGFsbCB0aW1pbmctcmVsYXRlZCBwcm9wc1xuICAgICAgICBkdXJhdGlvbjogdGhpcy5jb252ZXJ0VGltaW5nUHJvcCgnZHVyYXRpb24nKSxcbiAgICAgICAgZGVsYXk6IHRoaXMuY29udmVydFRpbWluZ1Byb3AoJ2RlbGF5JyksXG4gICAgICAgIHN0YWdnZXJEdXJhdGlvbkJ5OiB0aGlzLmNvbnZlcnRUaW1pbmdQcm9wKCdzdGFnZ2VyRHVyYXRpb25CeScpLFxuICAgICAgICBzdGFnZ2VyRGVsYXlCeTogdGhpcy5jb252ZXJ0VGltaW5nUHJvcCgnc3RhZ2dlckRlbGF5QnknKSxcblxuICAgICAgICAvLyBPdXIgZW50ZXIvbGVhdmUgYW5pbWF0aW9ucyBjYW4gYmUgc3BlY2lmaWVkIGFzIGJvb2xlYW4gKGRlZmF1bHQgb3JcbiAgICAgICAgLy8gZGlzYWJsZWQpLCBzdHJpbmcgKHByZXNldCBuYW1lKSwgb3Igb2JqZWN0IChhY3R1YWwgYW5pbWF0aW9uIHZhbHVlcykuXG4gICAgICAgIC8vIExldCdzIHN0YW5kYXJkaXplIHRoaXMgc28gdGhhdCB0aGV5J3JlIGFsd2F5cyBvYmplY3RzXG4gICAgICAgIGFwcGVhckFuaW1hdGlvbjogdGhpcy5jb252ZXJ0QW5pbWF0aW9uUHJvcChwcm9wcy5hcHBlYXJBbmltYXRpb24sIGFwcGVhclByZXNldHMpLFxuICAgICAgICBlbnRlckFuaW1hdGlvbjogdGhpcy5jb252ZXJ0QW5pbWF0aW9uUHJvcChwcm9wcy5lbnRlckFuaW1hdGlvbiwgZW50ZXJQcmVzZXRzKSxcbiAgICAgICAgbGVhdmVBbmltYXRpb246IHRoaXMuY29udmVydEFuaW1hdGlvblByb3AocHJvcHMubGVhdmVBbmltYXRpb24sIGxlYXZlUHJlc2V0cyksXG5cbiAgICAgICAgZGVsZWdhdGVkOiB7fVxuICAgICAgfTtcblxuICAgICAgdGhpcy5jaGVja0NoaWxkcmVuKHdvcmtpbmdQcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgIC8vIEdhdGhlciBhbnkgYWRkaXRpb25hbCBwcm9wcztcbiAgICAgIC8vIHRoZXkgd2lsbCBiZSBkZWxlZ2F0ZWQgdG8gdGhlIFJlYWN0RWxlbWVudCBjcmVhdGVkLlxuICAgICAgdmFyIHByaW1hcnlQcm9wS2V5cyA9IE9iamVjdC5rZXlzKHdvcmtpbmdQcm9wcyk7XG4gICAgICB2YXIgZGVsZWdhdGVkUHJvcHMgPSBvbWl0KHRoaXMucHJvcHMsIHByaW1hcnlQcm9wS2V5cyk7XG5cbiAgICAgIC8vIFRoZSBGbGlwTW92ZSBjb250YWluZXIgZWxlbWVudCBuZWVkcyB0byBoYXZlIGEgbm9uLXN0YXRpYyBwb3NpdGlvbi5cbiAgICAgIC8vIFdlIHVzZSBgcmVsYXRpdmVgIGJ5IGRlZmF1bHQsIGJ1dCBpdCBjYW4gYmUgb3ZlcnJpZGRlbiBieSB0aGUgdXNlci5cbiAgICAgIC8vIE5vdyB0aGF0IHdlJ3JlIGRlbGVnYXRpbmcgcHJvcHMsIHdlIG5lZWQgdG8gbWVyZ2UgdGhpcyBpbi5cbiAgICAgIGRlbGVnYXRlZFByb3BzLnN0eWxlID0gX2V4dGVuZHMoe1xuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICAgICAgfSwgZGVsZWdhdGVkUHJvcHMuc3R5bGUpO1xuXG4gICAgICB3b3JraW5nUHJvcHMuZGVsZWdhdGVkID0gZGVsZWdhdGVkUHJvcHM7XG5cbiAgICAgIHJldHVybiB3b3JraW5nUHJvcHM7XG4gICAgfTtcblxuICAgIEZsaXBNb3ZlUHJvcENvbnZlcnRlci5wcm90b3R5cGUuY29udmVydFRpbWluZ1Byb3AgPSBmdW5jdGlvbiBjb252ZXJ0VGltaW5nUHJvcChwcm9wKSB7XG4gICAgICB2YXIgcmF3VmFsdWUgPSB0aGlzLnByb3BzW3Byb3BdO1xuXG4gICAgICB2YXIgdmFsdWUgPSB0eXBlb2YgcmF3VmFsdWUgPT09ICdudW1iZXInID8gcmF3VmFsdWUgOiBwYXJzZUludChyYXdWYWx1ZSwgMTApO1xuXG4gICAgICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgICAgIHZhciBkZWZhdWx0VmFsdWUgPSBGbGlwTW92ZVByb3BDb252ZXJ0ZXIuZGVmYXVsdFByb3BzW3Byb3BdO1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgaW52YWxpZFR5cGVGb3JUaW1pbmdQcm9wKHtcbiAgICAgICAgICAgIHByb3A6IHByb3AsXG4gICAgICAgICAgICB2YWx1ZTogcmF3VmFsdWUsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH07XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuXG5cbiAgICBGbGlwTW92ZVByb3BDb252ZXJ0ZXIucHJvdG90eXBlLmNvbnZlcnRBbmltYXRpb25Qcm9wID0gZnVuY3Rpb24gY29udmVydEFuaW1hdGlvblByb3AoYW5pbWF0aW9uLCBwcmVzZXRzKSB7XG4gICAgICBzd2l0Y2ggKHR5cGVvZiBhbmltYXRpb24gPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGFuaW1hdGlvbikpIHtcbiAgICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8gSWYgaXQncyB0cnVlLCB3ZSB3YW50IHRvIHVzZSB0aGUgZGVmYXVsdCBwcmVzZXQuXG4gICAgICAgICAgICAvLyBJZiBpdCdzIGZhbHNlLCB3ZSB3YW50IHRvIHVzZSB0aGUgJ25vbmUnIHByZXNldC5cbiAgICAgICAgICAgIHJldHVybiBwcmVzZXRzW2FuaW1hdGlvbiA/IGRlZmF1bHRQcmVzZXQgOiBkaXNhYmxlUHJlc2V0XTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcHJlc2V0S2V5cyA9IE9iamVjdC5rZXlzKHByZXNldHMpO1xuXG4gICAgICAgICAgICBpZiAocHJlc2V0S2V5cy5pbmRleE9mKGFuaW1hdGlvbikgPT09IC0xKSB7XG4gICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaW52YWxpZEVudGVyTGVhdmVQcmVzZXQoe1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IGFuaW1hdGlvbixcbiAgICAgICAgICAgICAgICAgIGFjY2VwdGFibGVWYWx1ZXM6IHByZXNldEtleXMuam9pbignLCAnKSxcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZGVmYXVsdFByZXNldFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHByZXNldHNbZGVmYXVsdFByZXNldF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwcmVzZXRzW2FuaW1hdGlvbl07XG4gICAgICAgICAgfVxuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGFuaW1hdGlvbjtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIEZsaXBNb3ZlUHJvcENvbnZlcnRlci5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9zZWRDb21wb25lbnQsIHRoaXMuY29udmVydFByb3BzKHRoaXMucHJvcHMpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEZsaXBNb3ZlUHJvcENvbnZlcnRlcjtcbiAgfShSZWFjdC5Db21wb25lbnQpLCBfY2xhc3MuZGVmYXVsdFByb3BzID0ge1xuICAgIGVhc2luZzogJ2Vhc2UtaW4tb3V0JyxcbiAgICBkdXJhdGlvbjogMzUwLFxuICAgIGRlbGF5OiAwLFxuICAgIHN0YWdnZXJEdXJhdGlvbkJ5OiAwLFxuICAgIHN0YWdnZXJEZWxheUJ5OiAwLFxuICAgIHR5cGVOYW1lOiAnZGl2JyxcbiAgICBlbnRlckFuaW1hdGlvbjogZGVmYXVsdFByZXNldCxcbiAgICBsZWF2ZUFuaW1hdGlvbjogZGVmYXVsdFByZXNldCxcbiAgICBkaXNhYmxlQWxsQW5pbWF0aW9uczogZmFsc2UsXG4gICAgZ2V0UG9zaXRpb246IGZ1bmN0aW9uIGdldFBvc2l0aW9uKG5vZGUpIHtcbiAgICAgIHJldHVybiBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH0sXG4gICAgbWFpbnRhaW5Db250YWluZXJIZWlnaHQ6IGZhbHNlLFxuICAgIHZlcnRpY2FsQWxpZ25tZW50OiAndG9wJ1xuICB9LCBfdGVtcDtcbn1cblxuLyoqXG4gKiBSZWFjdCBGbGlwIE1vdmVcbiAqIChjKSAyMDE2LXByZXNlbnQgSm9zaHVhIENvbWVhdVxuICpcbiAqIFRoZXNlIG1ldGhvZHMgcmVhZCBmcm9tIGFuZCB3cml0ZSB0byB0aGUgRE9NLlxuICogVGhleSBhbG1vc3QgYWx3YXlzIGhhdmUgc2lkZSBlZmZlY3RzLCBhbmQgd2lsbCBob3BlZnVsbHkgYmVjb21lIHRoZVxuICogb25seSBzcG90IGluIHRoZSBjb2RlYmFzZSB3aXRoIGltcHVyZSBmdW5jdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGFwcGx5U3R5bGVzVG9ET01Ob2RlKF9yZWYpIHtcbiAgdmFyIGRvbU5vZGUgPSBfcmVmLmRvbU5vZGUsXG4gICAgICBzdHlsZXMgPSBfcmVmLnN0eWxlcztcblxuICAvLyBDYW4ndCBqdXN0IGRvIGFuIG9iamVjdCBtZXJnZSBiZWNhdXNlIGRvbU5vZGUuc3R5bGVzIGlzIG5vIHJlZ3VsYXIgb2JqZWN0LlxuICAvLyBOZWVkIHRvIGRvIGl0IHRoaXMgd2F5IGZvciB0aGUgZW5naW5lIHRvIGZpcmUgaXRzIGBzZXRgIGxpc3RlbmVycy5cbiAgT2JqZWN0LmtleXMoc3R5bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBkb21Ob2RlLnN0eWxlLnNldFByb3BlcnR5KGh5cGhlbmF0ZShrZXkpLCBzdHlsZXNba2V5XSk7XG4gIH0pO1xufVxuXG4vLyBNb2RpZmllZCBmcm9tIE1vZGVybml6clxuZnVuY3Rpb24gd2hpY2hUcmFuc2l0aW9uRXZlbnQoKSB7XG4gIHZhciB0cmFuc2l0aW9ucyA9IHtcbiAgICB0cmFuc2l0aW9uOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgJy1vLXRyYW5zaXRpb24nOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgICctbW96LXRyYW5zaXRpb24nOiAndHJhbnNpdGlvbmVuZCcsXG4gICAgJy13ZWJraXQtdHJhbnNpdGlvbic6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJ1xuICB9O1xuXG4gIC8vIElmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBicm93c2VybGVzcyBlbnZpcm9ubWVudCAoZWcuIFNTUiksIGl0IGRvZXNuJ3QgYXBwbHkuXG4gIC8vIFJldHVybiBhIHBsYWNlaG9sZGVyIHN0cmluZywgZm9yIGNvbnNpc3RlbnQgdHlwZSByZXR1cm4uXG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gJyc7XG5cbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmFrZWVsZW1lbnQnKTtcblxuICB2YXIgbWF0Y2ggPSBmaW5kKGZ1bmN0aW9uICh0KSB7XG4gICAgcmV0dXJuIGVsLnN0eWxlLmdldFByb3BlcnR5VmFsdWUodCkgIT09IHVuZGVmaW5lZDtcbiAgfSwgT2JqZWN0LmtleXModHJhbnNpdGlvbnMpKTtcblxuICAvLyBJZiBubyBgdHJhbnNpdGlvbmAgaXMgZm91bmQsIHdlIG11c3QgYmUgcnVubmluZyBpbiBhIGJyb3dzZXIgc28gYW5jaWVudCxcbiAgLy8gUmVhY3QgaXRzZWxmIHdvbid0IHJ1bi4gUmV0dXJuIGFuIGVtcHR5IHN0cmluZywgZm9yIGNvbnNpc3RlbnQgdHlwZSByZXR1cm5cbiAgcmV0dXJuIG1hdGNoID8gdHJhbnNpdGlvbnNbbWF0Y2hdIDogJyc7XG59XG5cbnZhciBnZXRSZWxhdGl2ZUJvdW5kaW5nQm94ID0gZnVuY3Rpb24gZ2V0UmVsYXRpdmVCb3VuZGluZ0JveChfcmVmMikge1xuICB2YXIgY2hpbGREb21Ob2RlID0gX3JlZjIuY2hpbGREb21Ob2RlLFxuICAgICAgcGFyZW50RG9tTm9kZSA9IF9yZWYyLnBhcmVudERvbU5vZGUsXG4gICAgICBnZXRQb3NpdGlvbiA9IF9yZWYyLmdldFBvc2l0aW9uO1xuXG4gIHZhciBwYXJlbnRCb3ggPSBnZXRQb3NpdGlvbihwYXJlbnREb21Ob2RlKTtcblxuICB2YXIgX2dldFBvc2l0aW9uID0gZ2V0UG9zaXRpb24oY2hpbGREb21Ob2RlKSxcbiAgICAgIHRvcCA9IF9nZXRQb3NpdGlvbi50b3AsXG4gICAgICBsZWZ0ID0gX2dldFBvc2l0aW9uLmxlZnQsXG4gICAgICByaWdodCA9IF9nZXRQb3NpdGlvbi5yaWdodCxcbiAgICAgIGJvdHRvbSA9IF9nZXRQb3NpdGlvbi5ib3R0b20sXG4gICAgICB3aWR0aCA9IF9nZXRQb3NpdGlvbi53aWR0aCxcbiAgICAgIGhlaWdodCA9IF9nZXRQb3NpdGlvbi5oZWlnaHQ7XG5cbiAgcmV0dXJuIHtcbiAgICB0b3A6IHRvcCAtIHBhcmVudEJveC50b3AsXG4gICAgbGVmdDogbGVmdCAtIHBhcmVudEJveC5sZWZ0LFxuICAgIHJpZ2h0OiBwYXJlbnRCb3gucmlnaHQgLSByaWdodCxcbiAgICBib3R0b206IHBhcmVudEJveC5ib3R0b20gLSBib3R0b20sXG4gICAgd2lkdGg6IHdpZHRoLFxuICAgIGhlaWdodDogaGVpZ2h0XG4gIH07XG59O1xuXG4vKiogZ2V0UG9zaXRpb25EZWx0YVxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZGVsdGEgYmV0d2VlbiB0d28gYm91bmRpbmcgYm94ZXMsIHRvIGZpZ3VyZSBvdXRcbiAqIGhvdyBtYW55IHBpeGVscyBvbiBlYWNoIGF4aXMgdGhlIGVsZW1lbnQgaGFzIG1vdmVkLlxuICpcbiAqL1xudmFyIGdldFBvc2l0aW9uRGVsdGEgPSBmdW5jdGlvbiBnZXRQb3NpdGlvbkRlbHRhKF9yZWYzKSB7XG4gIHZhciBjaGlsZERvbU5vZGUgPSBfcmVmMy5jaGlsZERvbU5vZGUsXG4gICAgICBjaGlsZEJvdW5kaW5nQm94ID0gX3JlZjMuY2hpbGRCb3VuZGluZ0JveCxcbiAgICAgIHBhcmVudEJvdW5kaW5nQm94ID0gX3JlZjMucGFyZW50Qm91bmRpbmdCb3gsXG4gICAgICBnZXRQb3NpdGlvbiA9IF9yZWYzLmdldFBvc2l0aW9uO1xuXG4gIC8vIFRFTVA6IEEgbXlzdGVyeSBidWcgaXMgc29tZXRpbWVzIGNhdXNpbmcgdW5uZWNlc3NhcnkgYm91bmRpbmdCb3hlcyB0b1xuICB2YXIgZGVmYXVsdEJveCA9IHtcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwXG4gIH07XG5cbiAgLy8gT3VyIG9sZCBib3ggaXMgaXRzIGxhc3QgY2FsY3VsYXRlZCBwb3NpdGlvbiwgZGVyaXZlZCBvbiBtb3VudCBvciBhdCB0aGVcbiAgLy8gc3RhcnQgb2YgdGhlIHByZXZpb3VzIGFuaW1hdGlvbi5cbiAgdmFyIG9sZFJlbGF0aXZlQm94ID0gY2hpbGRCb3VuZGluZ0JveCB8fCBkZWZhdWx0Qm94O1xuICB2YXIgcGFyZW50Qm94ID0gcGFyZW50Qm91bmRpbmdCb3ggfHwgZGVmYXVsdEJveDtcblxuICAvLyBPdXIgbmV3IGJveCBpcyB0aGUgbmV3IGZpbmFsIHJlc3RpbmcgcGxhY2U6IFdoZXJlIHdlIGV4cGVjdCBpdCB0byB3aW5kIHVwXG4gIC8vIGFmdGVyIHRoZSBhbmltYXRpb24uIEZpcnN0IHdlIGdldCB0aGUgYm94IGluIGFic29sdXRlIHRlcm1zIChBS0EgcmVsYXRpdmVcbiAgLy8gdG8gdGhlIHZpZXdwb3J0KSwgYW5kIHRoZW4gd2UgY2FsY3VsYXRlIGl0cyByZWxhdGl2ZSBib3ggKHJlbGF0aXZlIHRvIHRoZVxuICAvLyBwYXJlbnQgY29udGFpbmVyKVxuICB2YXIgbmV3QWJzb2x1dGVCb3ggPSBnZXRQb3NpdGlvbihjaGlsZERvbU5vZGUpO1xuICB2YXIgbmV3UmVsYXRpdmVCb3ggPSB7XG4gICAgdG9wOiBuZXdBYnNvbHV0ZUJveC50b3AgLSBwYXJlbnRCb3gudG9wLFxuICAgIGxlZnQ6IG5ld0Fic29sdXRlQm94LmxlZnQgLSBwYXJlbnRCb3gubGVmdFxuICB9O1xuXG4gIHJldHVybiBbb2xkUmVsYXRpdmVCb3gubGVmdCAtIG5ld1JlbGF0aXZlQm94LmxlZnQsIG9sZFJlbGF0aXZlQm94LnRvcCAtIG5ld1JlbGF0aXZlQm94LnRvcF07XG59O1xuXG4vKiogcmVtb3ZlTm9kZUZyb21ET01GbG93XG4gKiBUaGlzIG1ldGhvZCBkb2VzIHNvbWV0aGluZyB2ZXJ5IHNuZWFreTogaXQgcmVtb3ZlcyBhIERPTSBub2RlIGZyb20gdGhlXG4gKiBkb2N1bWVudCBmbG93LCBidXQgd2l0aG91dCBhY3R1YWxseSBjaGFuZ2luZyBpdHMgb24tc2NyZWVuIHBvc2l0aW9uLlxuICpcbiAqIEl0IHdvcmtzIGJ5IGNhbGN1bGF0aW5nIHdoZXJlIHRoZSBub2RlIGlzLCBhbmQgdGhlbiBhcHBseWluZyBzdHlsZXNcbiAqIHNvIHRoYXQgaXQgd2luZHMgdXAgYmVpbmcgcG9zaXRpb25lZCBhYnNvbHV0ZWx5LCBidXQgaW4gZXhhY3RseSB0aGVcbiAqIHNhbWUgcGxhY2UuXG4gKlxuICogVGhpcyBpcyBhIHZpdGFsIHBhcnQgb2YgdGhlIEZMSVAgdGVjaG5pcXVlLlxuICovXG52YXIgcmVtb3ZlTm9kZUZyb21ET01GbG93ID0gZnVuY3Rpb24gcmVtb3ZlTm9kZUZyb21ET01GbG93KGNoaWxkRGF0YSwgdmVydGljYWxBbGlnbm1lbnQpIHtcbiAgdmFyIGRvbU5vZGUgPSBjaGlsZERhdGEuZG9tTm9kZSxcbiAgICAgIGJvdW5kaW5nQm94ID0gY2hpbGREYXRhLmJvdW5kaW5nQm94O1xuXG5cbiAgaWYgKCFkb21Ob2RlIHx8ICFib3VuZGluZ0JveCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvciB0aGlzIHRvIHdvcmssIHdlIGhhdmUgdG8gb2Zmc2V0IGFueSBnaXZlbiBgbWFyZ2luYC5cbiAgdmFyIGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9tTm9kZSk7XG5cbiAgLy8gV2UgbmVlZCB0byBjbGVhbiB1cCBtYXJnaW5zLCBieSBjb252ZXJ0aW5nIGFuZCByZW1vdmluZyBzdWZmaXg6XG4gIC8vIGVnLiAnMjFweCcgLT4gMjFcbiAgdmFyIG1hcmdpbkF0dHJzID0gWydtYXJnaW4tdG9wJywgJ21hcmdpbi1sZWZ0JywgJ21hcmdpbi1yaWdodCddO1xuICB2YXIgbWFyZ2lucyA9IG1hcmdpbkF0dHJzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBtYXJnaW4pIHtcbiAgICB2YXIgX2JhYmVsSGVscGVycyRleHRlbmRzO1xuXG4gICAgdmFyIHByb3BlcnR5VmFsID0gY29tcHV0ZWQuZ2V0UHJvcGVydHlWYWx1ZShtYXJnaW4pO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhY2MsIChfYmFiZWxIZWxwZXJzJGV4dGVuZHMgPSB7fSwgX2JhYmVsSGVscGVycyRleHRlbmRzW21hcmdpbl0gPSBOdW1iZXIocHJvcGVydHlWYWwucmVwbGFjZSgncHgnLCAnJykpLCBfYmFiZWxIZWxwZXJzJGV4dGVuZHMpKTtcbiAgfSwge30pO1xuXG4gIC8vIElmIHdlJ3JlIGJvdHRvbS1hbGlnbmVkLCB3ZSBuZWVkIHRvIGFkZCB0aGUgaGVpZ2h0IG9mIHRoZSBjaGlsZCB0byBpdHNcbiAgLy8gdG9wIG9mZnNldC4gVGhpcyBpcyBiZWNhdXNlLCB3aGVuIHRoZSBjb250YWluZXIgaXMgYm90dG9tLWFsaWduZWQsIGl0c1xuICAvLyBoZWlnaHQgc2hyaW5rcyBmcm9tIHRoZSB0b3AsIG5vdCB0aGUgYm90dG9tLiBXZSdyZSByZW1vdmluZyB0aGlzIG5vZGVcbiAgLy8gZnJvbSB0aGUgZmxvdywgc28gdGhlIHRvcCBpcyBnb2luZyB0byBkcm9wIGJ5IGl0cyBoZWlnaHQuXG4gIHZhciB0b3BPZmZzZXQgPSB2ZXJ0aWNhbEFsaWdubWVudCA9PT0gJ2JvdHRvbScgPyBib3VuZGluZ0JveC50b3AgLSBib3VuZGluZ0JveC5oZWlnaHQgOiBib3VuZGluZ0JveC50b3A7XG5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IHRvcE9mZnNldCAtIG1hcmdpbnNbJ21hcmdpbi10b3AnXSArICdweCcsXG4gICAgbGVmdDogYm91bmRpbmdCb3gubGVmdCAtIG1hcmdpbnNbJ21hcmdpbi1sZWZ0J10gKyAncHgnLFxuICAgIHJpZ2h0OiBib3VuZGluZ0JveC5yaWdodCAtIG1hcmdpbnNbJ21hcmdpbi1yaWdodCddICsgJ3B4J1xuICB9O1xuXG4gIGFwcGx5U3R5bGVzVG9ET01Ob2RlKHsgZG9tTm9kZTogZG9tTm9kZSwgc3R5bGVzOiBzdHlsZXMgfSk7XG59O1xuXG4vKiogdXBkYXRlSGVpZ2h0UGxhY2Vob2xkZXJcbiAqIEFuIG9wdGlvbmFsIHByb3BlcnR5IHRvIEZsaXBNb3ZlIGlzIGEgYG1haW50YWluQ29udGFpbmVySGVpZ2h0YCBib29sZWFuLlxuICogVGhpcyBwcm9wZXJ0eSBjcmVhdGVzIGEgbm9kZSB0aGF0IGZpbGxzIHNwYWNlLCBzbyB0aGF0IHRoZSBwYXJlbnRcbiAqIGNvbnRhaW5lciBkb2Vzbid0IGNvbGxhcHNlIHdoZW4gaXRzIGNoaWxkcmVuIGFyZSByZW1vdmVkIGZyb20gdGhlXG4gKiBkb2N1bWVudCBmbG93LlxuICovXG52YXIgdXBkYXRlSGVpZ2h0UGxhY2Vob2xkZXIgPSBmdW5jdGlvbiB1cGRhdGVIZWlnaHRQbGFjZWhvbGRlcihfcmVmNCkge1xuICB2YXIgZG9tTm9kZSA9IF9yZWY0LmRvbU5vZGUsXG4gICAgICBwYXJlbnREYXRhID0gX3JlZjQucGFyZW50RGF0YSxcbiAgICAgIGdldFBvc2l0aW9uID0gX3JlZjQuZ2V0UG9zaXRpb247XG5cbiAgdmFyIHBhcmVudERvbU5vZGUgPSBwYXJlbnREYXRhLmRvbU5vZGU7XG4gIHZhciBwYXJlbnRCb3VuZGluZ0JveCA9IHBhcmVudERhdGEuYm91bmRpbmdCb3g7XG5cbiAgaWYgKCFwYXJlbnREb21Ob2RlIHx8ICFwYXJlbnRCb3VuZGluZ0JveCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFdlIG5lZWQgdG8gZmluZCB0aGUgaGVpZ2h0IG9mIHRoZSBjb250YWluZXIgKndpdGhvdXQqIHRoZSBwbGFjZWhvbGRlci5cbiAgLy8gU2luY2UgaXQncyBwb3NzaWJsZSB0aGF0IHRoZSBwbGFjZWhvbGRlciBtaWdodCBhbHJlYWR5IGJlIHByZXNlbnQsXG4gIC8vIHdlIGZpcnN0IHNldCBpdHMgaGVpZ2h0IHRvIDAuXG4gIC8vIFRoaXMgYWxsb3dzIHRoZSBjb250YWluZXIgdG8gY29sbGFwc2UgZG93biB0byB0aGUgc2l6ZSBvZiBqdXN0IGl0c1xuICAvLyBjb250ZW50IChwbHVzIGNvbnRhaW5lciBwYWRkaW5nIG9yIGJvcmRlcnMgaWYgYW55KS5cbiAgYXBwbHlTdHlsZXNUb0RPTU5vZGUoeyBkb21Ob2RlOiBkb21Ob2RlLCBzdHlsZXM6IHsgaGVpZ2h0OiAnMCcgfSB9KTtcblxuICAvLyBGaW5kIHRoZSBkaXN0YW5jZSBieSB3aGljaCB0aGUgY29udGFpbmVyIHdvdWxkIGJlIGNvbGxhcHNlZCBieSBlbGVtZW50c1xuICAvLyBsZWF2aW5nLiBXZSBjb21wYXJlIHRoZSBmcmVzaGx5LWF2YWlsYWJsZSBwYXJlbnQgaGVpZ2h0IHdpdGggdGhlIG9yaWdpbmFsLFxuICAvLyBjYWNoZWQgY29udGFpbmVyIGhlaWdodC5cbiAgdmFyIG9yaWdpbmFsUGFyZW50SGVpZ2h0ID0gcGFyZW50Qm91bmRpbmdCb3guaGVpZ2h0O1xuICB2YXIgY29sbGFwc2VkUGFyZW50SGVpZ2h0ID0gZ2V0UG9zaXRpb24ocGFyZW50RG9tTm9kZSkuaGVpZ2h0O1xuICB2YXIgcmVkdWN0aW9uSW5IZWlnaHQgPSBvcmlnaW5hbFBhcmVudEhlaWdodCAtIGNvbGxhcHNlZFBhcmVudEhlaWdodDtcblxuICAvLyBJZiB0aGUgY29udGFpbmVyIGhhcyBiZWNvbWUgc2hvcnRlciwgdXBkYXRlIHRoZSBwYWRkaW5nIGVsZW1lbnQnc1xuICAvLyBoZWlnaHQgdG8gdGFrZSB1cCB0aGUgZGlmZmVyZW5jZS4gT3RoZXJ3aXNlIHNldCBpdHMgaGVpZ2h0IHRvIHplcm8sXG4gIC8vIHNvIHRoYXQgaXQgaGFzIG5vIGVmZmVjdC5cbiAgdmFyIHN0eWxlcyA9IHtcbiAgICBoZWlnaHQ6IHJlZHVjdGlvbkluSGVpZ2h0ID4gMCA/IHJlZHVjdGlvbkluSGVpZ2h0ICsgJ3B4JyA6ICcwJ1xuICB9O1xuXG4gIGFwcGx5U3R5bGVzVG9ET01Ob2RlKHsgZG9tTm9kZTogZG9tTm9kZSwgc3R5bGVzOiBzdHlsZXMgfSk7XG59O1xuXG52YXIgZ2V0TmF0aXZlTm9kZSA9IGZ1bmN0aW9uIGdldE5hdGl2ZU5vZGUoZWxlbWVudCkge1xuICAvLyBXaGVuIHJ1bm5pbmcgaW4gYSB3aW5kb3dsZXNzIGVudmlyb25tZW50LCBhYm9ydCFcbiAgaWYgKHR5cGVvZiBIVE1MRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIGBlbGVtZW50YCBtYXkgYWxyZWFkeSBiZSBhIG5hdGl2ZSBub2RlLlxuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cblxuICAvLyBXaGlsZSBSZWFjdERPTSdzIGBmaW5kRE9NTm9kZWAgaXMgZGlzY291cmFnZWQsIGl0J3MgdGhlIG9ubHlcbiAgLy8gcHVibGljbHktZXhwb3NlZCB3YXkgdG8gZmluZCB0aGUgdW5kZXJseWluZyBET00gbm9kZSBmb3JcbiAgLy8gY29tcG9zaXRlIGNvbXBvbmVudHMuXG4gIHZhciBmb3VuZE5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZShlbGVtZW50KTtcblxuICBpZiAoZm91bmROb2RlICYmIGZvdW5kTm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5URVhUX05PREUpIHtcbiAgICAvLyBUZXh0IG5vZGVzIGFyZSBub3Qgc3VwcG9ydGVkXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZsb3d0eXBlL25vLXdlYWstdHlwZXNcbiAgcmV0dXJuIGZvdW5kTm9kZTtcbn07XG5cbnZhciBjcmVhdGVUcmFuc2l0aW9uU3RyaW5nID0gZnVuY3Rpb24gY3JlYXRlVHJhbnNpdGlvblN0cmluZyhpbmRleCwgcHJvcHMpIHtcbiAgdmFyIGRlbGF5ID0gcHJvcHMuZGVsYXksXG4gICAgICBkdXJhdGlvbiA9IHByb3BzLmR1cmF0aW9uO1xuICB2YXIgc3RhZ2dlckR1cmF0aW9uQnkgPSBwcm9wcy5zdGFnZ2VyRHVyYXRpb25CeSxcbiAgICAgIHN0YWdnZXJEZWxheUJ5ID0gcHJvcHMuc3RhZ2dlckRlbGF5QnksXG4gICAgICBlYXNpbmcgPSBwcm9wcy5lYXNpbmc7XG5cblxuICBkZWxheSArPSBpbmRleCAqIHN0YWdnZXJEZWxheUJ5O1xuICBkdXJhdGlvbiArPSBpbmRleCAqIHN0YWdnZXJEdXJhdGlvbkJ5O1xuXG4gIHZhciBjc3NQcm9wZXJ0aWVzID0gWyd0cmFuc2Zvcm0nLCAnb3BhY2l0eSddO1xuXG4gIHJldHVybiBjc3NQcm9wZXJ0aWVzLm1hcChmdW5jdGlvbiAocHJvcCkge1xuICAgIHJldHVybiBwcm9wICsgJyAnICsgZHVyYXRpb24gKyAnbXMgJyArIGVhc2luZyArICcgJyArIGRlbGF5ICsgJ21zJztcbiAgfSkuam9pbignLCAnKTtcbn07XG5cbi8qKlxuICogUmVhY3QgRmxpcCBNb3ZlXG4gKiAoYykgMjAxNi1wcmVzZW50IEpvc2h1YSBDb21lYXVcbiAqXG4gKiBGb3IgaW5mb3JtYXRpb24gb24gaG93IHRoaXMgY29kZSBpcyBsYWlkIG91dCwgY2hlY2sgb3V0IENPREVfVE9VUi5tZFxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWR1cGxpY2F0ZS1pbXBvcnRzXG5cblxudmFyIHRyYW5zaXRpb25FbmQgPSB3aGljaFRyYW5zaXRpb25FdmVudCgpO1xudmFyIG5vQnJvd3NlclN1cHBvcnQgPSAhdHJhbnNpdGlvbkVuZDtcblxuZnVuY3Rpb24gZ2V0S2V5KGNoaWxkRGF0YSkge1xuICByZXR1cm4gY2hpbGREYXRhLmtleSB8fCAnJztcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIC8vIEZpeCBpbmNvbXBsZXRlIHR5cGluZyBvZiBDaGlsZHJlbi50b0FycmF5XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmbG93dHlwZS9uby13ZWFrLXR5cGVzXG4gIHJldHVybiBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKTtcbn1cblxudmFyIEZsaXBNb3ZlJDEgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBpbmhlcml0cyhGbGlwTW92ZSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gRmxpcE1vdmUoKSB7XG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIEZsaXBNb3ZlKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLnN0YXRlID0ge1xuICAgICAgY2hpbGRyZW46IGdldEVsZW1lbnRDaGlsZHJlbihcbiAgICAgIC8vIGB0aGlzLnByb3BzYCBvdWdodCB0byBhbHdheXMgYmUgZGVmaW5lZCBhdCB0aGlzIHBvaW50LCBidXQgYSByZXBvcnRcbiAgICAgIC8vIHdhcyBtYWRlIGFib3V0IGl0IG5vdCBiZWluZyBkZWZpbmVkIGluIElFMTAuXG4gICAgICAvLyBUT0RPOiBUZXN0IGluIElFMTAsIHRvIHNlZSBpZiB0aGVyZSdzIGFuIHVuZGVybHlpbmcgY2F1c2UgdGhhdCBjYW5cbiAgICAgIC8vIGJlIGFkZHJlc3NlZC5cbiAgICAgIF90aGlzLnByb3BzID8gX3RoaXMucHJvcHMuY2hpbGRyZW4gOiBbXSkubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgZWxlbWVudCwge1xuICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgICAgYXBwZWFyaW5nOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICB9LCBfdGhpcy5jaGlsZHJlbkRhdGEgPSB7fSwgX3RoaXMucGFyZW50RGF0YSA9IHtcbiAgICAgIGRvbU5vZGU6IG51bGwsXG4gICAgICBib3VuZGluZ0JveDogbnVsbFxuICAgIH0sIF90aGlzLmhlaWdodFBsYWNlaG9sZGVyRGF0YSA9IHtcbiAgICAgIGRvbU5vZGU6IG51bGxcbiAgICB9LCBfdGhpcy5yZW1haW5pbmdBbmltYXRpb25zID0gMCwgX3RoaXMuY2hpbGRyZW5Ub0FuaW1hdGUgPSBbXSwgX3RoaXMuZmluZERPTUNvbnRhaW5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC9uby1maW5kLWRvbS1ub2RlXG4gICAgICB2YXIgZG9tTm9kZSA9IFJlYWN0RE9NX19kZWZhdWx0LmZpbmRET01Ob2RlKF90aGlzKTtcbiAgICAgIHZhciBwYXJlbnROb2RlID0gZG9tTm9kZSAmJiBkb21Ob2RlLnBhcmVudE5vZGU7XG5cbiAgICAgIC8vIFRoaXMgb3VnaHQgdG8gYmUgaW1wb3NzaWJsZSwgYnV0IGhhbmRsaW5nIGl0IGZvciBGbG93J3Mgc2FrZS5cbiAgICAgIGlmICghcGFyZW50Tm9kZSB8fCAhKHBhcmVudE5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiB0aGUgcGFyZW50IG5vZGUgaGFzIHN0YXRpYyBwb3NpdGlvbmluZywgbGVhdmUgYW5pbWF0aW9ucyBtaWdodCBsb29rXG4gICAgICAvLyByZWFsbHkgZnVua3kuIExldCdzIGF1dG9tYXRpY2FsbHkgYXBwbHkgYHBvc2l0aW9uOiByZWxhdGl2ZWAgaW4gdGhpc1xuICAgICAgLy8gY2FzZSwgdG8gcHJldmVudCBhbnkgcXVpcmtpbmVzcy5cbiAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShwYXJlbnROb2RlKS5wb3NpdGlvbiA9PT0gJ3N0YXRpYycpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIHBhcmVudE5vZGVQb3NpdGlvblN0YXRpYygpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5wYXJlbnREYXRhLmRvbU5vZGUgPSBwYXJlbnROb2RlO1xuICAgIH0sIF90aGlzLnJ1bkFuaW1hdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkeW5hbWljQ2hpbGRyZW4gPSBfdGhpcy5zdGF0ZS5jaGlsZHJlbi5maWx0ZXIoX3RoaXMuZG9lc0NoaWxkTmVlZFRvQmVBbmltYXRlZCk7XG5cbiAgICAgIC8vIFNwbGl0dGluZyBET00gcmVhZHMgYW5kIHdyaXRlcyB0byBiZSBwZWZvcm1lZCBpbiBiYXRjaGVzXG4gICAgICB2YXIgY2hpbGRyZW5Jbml0aWFsU3R5bGVzID0gZHluYW1pY0NoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNvbXB1dGVJbml0aWFsU3R5bGVzKGNoaWxkKTtcbiAgICAgIH0pO1xuICAgICAgZHluYW1pY0NoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgICBfdGhpcy5yZW1haW5pbmdBbmltYXRpb25zICs9IDE7XG4gICAgICAgIF90aGlzLmNoaWxkcmVuVG9BbmltYXRlLnB1c2goZ2V0S2V5KGNoaWxkKSk7XG4gICAgICAgIF90aGlzLmFuaW1hdGVDaGlsZChjaGlsZCwgaW5kZXgsIGNoaWxkcmVuSW5pdGlhbFN0eWxlc1tpbmRleF0pO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgX3RoaXMucHJvcHMub25TdGFydEFsbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBfdGhpcy5jYWxsQ2hpbGRyZW5Ib29rKF90aGlzLnByb3BzLm9uU3RhcnRBbGwpO1xuICAgICAgfVxuICAgIH0sIF90aGlzLmRvZXNDaGlsZE5lZWRUb0JlQW5pbWF0ZWQgPSBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIC8vIElmIHRoZSBjaGlsZCBkb2Vzbid0IGhhdmUgYSBrZXksIGl0J3MgYW4gaW1tb3ZhYmxlIGNoaWxkIChvbmUgdGhhdCB3ZVxuICAgICAgLy8gZG8gbm90IHdhbnQgdG8gZG8gRkxJUCBzdHVmZiB0by4pXG4gICAgICBpZiAoIWdldEtleShjaGlsZCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGREYXRhID0gX3RoaXMuZ2V0Q2hpbGREYXRhKGdldEtleShjaGlsZCkpO1xuICAgICAgdmFyIGNoaWxkRG9tTm9kZSA9IGNoaWxkRGF0YS5kb21Ob2RlO1xuICAgICAgdmFyIGNoaWxkQm91bmRpbmdCb3ggPSBjaGlsZERhdGEuYm91bmRpbmdCb3g7XG4gICAgICB2YXIgcGFyZW50Qm91bmRpbmdCb3ggPSBfdGhpcy5wYXJlbnREYXRhLmJvdW5kaW5nQm94O1xuXG4gICAgICBpZiAoIWNoaWxkRG9tTm9kZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzLFxuICAgICAgICAgIGFwcGVhckFuaW1hdGlvbiA9IF90aGlzJHByb3BzLmFwcGVhckFuaW1hdGlvbixcbiAgICAgICAgICBlbnRlckFuaW1hdGlvbiA9IF90aGlzJHByb3BzLmVudGVyQW5pbWF0aW9uLFxuICAgICAgICAgIGxlYXZlQW5pbWF0aW9uID0gX3RoaXMkcHJvcHMubGVhdmVBbmltYXRpb24sXG4gICAgICAgICAgZ2V0UG9zaXRpb24gPSBfdGhpcyRwcm9wcy5nZXRQb3NpdGlvbjtcblxuXG4gICAgICB2YXIgaXNBcHBlYXJpbmdXaXRoQW5pbWF0aW9uID0gY2hpbGQuYXBwZWFyaW5nICYmIGFwcGVhckFuaW1hdGlvbjtcbiAgICAgIHZhciBpc0VudGVyaW5nV2l0aEFuaW1hdGlvbiA9IGNoaWxkLmVudGVyaW5nICYmIGVudGVyQW5pbWF0aW9uO1xuICAgICAgdmFyIGlzTGVhdmluZ1dpdGhBbmltYXRpb24gPSBjaGlsZC5sZWF2aW5nICYmIGxlYXZlQW5pbWF0aW9uO1xuXG4gICAgICBpZiAoaXNBcHBlYXJpbmdXaXRoQW5pbWF0aW9uIHx8IGlzRW50ZXJpbmdXaXRoQW5pbWF0aW9uIHx8IGlzTGVhdmluZ1dpdGhBbmltYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIGl0IGlzbid0IGVudGVyaW5nL2xlYXZpbmcsIHdlIHdhbnQgdG8gYW5pbWF0ZSBpdCBpZiBpdCdzXG4gICAgICAvLyBvbi1zY3JlZW4gcG9zaXRpb24gaGFzIGNoYW5nZWQuXG5cbiAgICAgIHZhciBfZ2V0UG9zaXRpb25EZWx0YSA9IGdldFBvc2l0aW9uRGVsdGEoe1xuICAgICAgICBjaGlsZERvbU5vZGU6IGNoaWxkRG9tTm9kZSxcbiAgICAgICAgY2hpbGRCb3VuZGluZ0JveDogY2hpbGRCb3VuZGluZ0JveCxcbiAgICAgICAgcGFyZW50Qm91bmRpbmdCb3g6IHBhcmVudEJvdW5kaW5nQm94LFxuICAgICAgICBnZXRQb3NpdGlvbjogZ2V0UG9zaXRpb25cbiAgICAgIH0pLFxuICAgICAgICAgIGRYID0gX2dldFBvc2l0aW9uRGVsdGFbMF0sXG4gICAgICAgICAgZFkgPSBfZ2V0UG9zaXRpb25EZWx0YVsxXTtcblxuICAgICAgcmV0dXJuIGRYICE9PSAwIHx8IGRZICE9PSAwO1xuICAgIH0sIF90ZW1wKSwgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cbiAgLy8gQ29weSBwcm9wcy5jaGlsZHJlbiBpbnRvIHN0YXRlLlxuICAvLyBUbyB1bmRlcnN0YW5kIHdoeSB0aGlzIGlzIGltcG9ydGFudCAoYW5kIG5vdCBhbiBhbnRpLXBhdHRlcm4pLCBjb25zaWRlclxuICAvLyBob3cgXCJsZWF2ZVwiIGFuaW1hdGlvbnMgd29yay4gQW4gaXRlbSBoYXMgXCJsZWZ0XCIgd2hlbiB0aGUgY29tcG9uZW50XG4gIC8vIHJlY2VpdmVzIGEgbmV3IHNldCBvZiBwcm9wcyB0aGF0IGRvIE5PVCBjb250YWluIHRoZSBpdGVtLlxuICAvLyBJZiB3ZSBqdXN0IHJlbmRlciB0aGUgcHJvcHMgYXMtaXMsIHRoZSBpdGVtIHdvdWxkIGluc3RhbnRseSBkaXNhcHBlYXIuXG4gIC8vIFdlIHdhbnQgdG8ga2VlcCB0aGUgaXRlbSByZW5kZXJlZCBmb3IgYSBsaXR0bGUgd2hpbGUsIHVudGlsIGl0cyBhbmltYXRpb25cbiAgLy8gY2FuIGNvbXBsZXRlLiBCZWNhdXNlIHdlIGNhbm5vdCBtdXRhdGUgcHJvcHMsIHdlIG1ha2UgYHN0YXRlYCB0aGUgc291cmNlXG4gIC8vIG9mIHRydXRoLlxuXG5cbiAgLy8gRmxpcE1vdmUgbmVlZHMgdG8ga25vdyBxdWl0ZSBhIGJpdCBhYm91dCBpdHMgY2hpbGRyZW4gaW4gb3JkZXIgdG8gZG9cbiAgLy8gaXRzIGpvYi4gV2Ugc3RvcmUgdGhlc2UgYXMgYSBwcm9wZXJ0eSBvbiB0aGUgaW5zdGFuY2UuIFdlJ3JlIG5vdCB1c2luZ1xuICAvLyBzdGF0ZSwgYmVjYXVzZSB3ZSBkb24ndCB3YW50IGNoYW5nZXMgdG8gdHJpZ2dlciByZS1yZW5kZXJzLCB3ZSBqdXN0XG4gIC8vIG5lZWQgYSBwbGFjZSB0byBrZWVwIHRoZSBkYXRhIGZvciByZWZlcmVuY2UsIHdoZW4gY2hhbmdlcyBoYXBwZW4uXG4gIC8vIFRoaXMgZmllbGQgc2hvdWxkIG5vdCBiZSBhY2Nlc3NlZCBkaXJlY3RseS4gSW5zdGVhZCwgdXNlIGdldENoaWxkRGF0YSxcbiAgLy8gcHV0Q2hpbGREYXRhLCBldGMuLi5cblxuXG4gIC8vIFNpbWlsYXJseSwgdHJhY2sgdGhlIGRvbSBub2RlIGFuZCBib3ggb2Ygb3VyIHBhcmVudCBlbGVtZW50LlxuXG5cbiAgLy8gSWYgYG1haW50YWluQ29udGFpbmVySGVpZ2h0YCBwcm9wIGlzIHNldCB0byB0cnVlLCB3ZSdsbCBjcmVhdGUgYVxuICAvLyBwbGFjZWhvbGRlciBlbGVtZW50IHdoaWNoIG9jY3VwaWVzIHNwYWNlIHNvIHRoYXQgdGhlIHBhcmVudCBoZWlnaHRcbiAgLy8gZG9lc24ndCBjaGFuZ2Ugd2hlbiBpdGVtcyBhcmUgcmVtb3ZlZCBmcm9tIHRoZSBkb2N1bWVudCBmbG93ICh3aGljaFxuICAvLyBoYXBwZW5zIGR1cmluZyBsZWF2ZSBhbmltYXRpb25zKVxuXG5cbiAgLy8gS2VlcCB0cmFjayBvZiByZW1haW5pbmcgYW5pbWF0aW9ucyBzbyB3ZSBrbm93IHdoZW4gdG8gZmlyZSB0aGVcbiAgLy8gYWxsLWZpbmlzaGVkIGNhbGxiYWNrLCBhbmQgY2xlYW4gdXAgYWZ0ZXIgb3Vyc2VsdmVzLlxuICAvLyBOT1RFOiB3ZSBjYW4ndCBzaW1wbHkgdXNlIGNoaWxkcmVuVG9BbmltYXRlLmxlbmd0aCB0byB0cmFjayByZW1haW5pbmdcbiAgLy8gYW5pbWF0aW9ucywgYmVjYXVzZSB3ZSBuZWVkIHRvIG1haW50YWluIHRoZSBsaXN0IG9mIGFuaW1hdGluZyBjaGlsZHJlbixcbiAgLy8gdG8gcGFzcyB0byB0aGUgYG9uRmluaXNoQWxsYCBoYW5kbGVyLlxuXG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgLy8gQmVjYXVzZSBSZWFjdCAxNiBubyBsb25nZXIgcmVxdWlyZXMgd3JhcHBpbmcgZWxlbWVudHMsIEZsaXAgTW92ZSBjYW4gb3B0XG4gICAgLy8gdG8gbm90IHdyYXAgdGhlIGNoaWxkcmVuIGluIGFuIGVsZW1lbnQuIEluIHRoYXQgY2FzZSwgZmluZCB0aGUgcGFyZW50XG4gICAgLy8gZWxlbWVudCB1c2luZyBgZmluZERPTU5vZGVgLlxuICAgIGlmICh0aGlzLnByb3BzLnR5cGVOYW1lID09PSBudWxsKSB7XG4gICAgICB0aGlzLmZpbmRET01Db250YWluZXIoKTtcbiAgICB9XG5cbiAgICAvLyBSdW4gb3VyIGBhcHBlYXJBbmltYXRpb25gIGlmIGl0IHdhcyByZXF1ZXN0ZWQsIHJpZ2h0IGFmdGVyIHRoZVxuICAgIC8vIGNvbXBvbmVudCBtb3VudHMuXG4gICAgdmFyIHNob3VsZFRyaWdnZXJGTElQID0gdGhpcy5wcm9wcy5hcHBlYXJBbmltYXRpb24gJiYgIXRoaXMuaXNBbmltYXRpb25EaXNhYmxlZCh0aGlzLnByb3BzKTtcblxuICAgIGlmIChzaG91bGRUcmlnZ2VyRkxJUCkge1xuICAgICAgdGhpcy5wcmVwRm9yQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLnJ1bkFuaW1hdGlvbigpO1xuICAgIH1cbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUuY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZpb3VzUHJvcHMpIHtcbiAgICBpZiAodGhpcy5wcm9wcy50eXBlTmFtZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5maW5kRE9NQ29udGFpbmVyKCk7XG4gICAgfVxuICAgIC8vIElmIHRoZSBjaGlsZHJlbiBoYXZlIGJlZW4gcmUtYXJyYW5nZWQsIG1vdmVkLCBvciBhZGRlZC9yZW1vdmVkLFxuICAgIC8vIHRyaWdnZXIgdGhlIG1haW4gRkxJUCBhbmltYXRpb24uXG4gICAgLy9cbiAgICAvLyBJTVBPUlRBTlQ6IFdlIG5lZWQgdG8gbWFrZSBzdXJlIHRoYXQgdGhlIGNoaWxkcmVuIGhhdmUgYWN0dWFsbHkgY2hhbmdlZC5cbiAgICAvLyBBdCB0aGUgZW5kIG9mIHRoZSB0cmFuc2l0aW9uLCB3ZSBjbGVhbiB1cCBub2RlcyB0aGF0IG5lZWQgdG8gYmUgcmVtb3ZlZC5cbiAgICAvLyBXZSBET04nVCB3YW50IHRoaXMgY2xlYW51cCB0byB0cmlnZ2VyIGFub3RoZXIgdXBkYXRlLlxuXG4gICAgdmFyIG9sZENoaWxkcmVuS2V5cyA9IGdldEVsZW1lbnRDaGlsZHJlbih0aGlzLnByb3BzLmNoaWxkcmVuKS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkLmtleTtcbiAgICB9KTtcbiAgICB2YXIgbmV4dENoaWxkcmVuS2V5cyA9IGdldEVsZW1lbnRDaGlsZHJlbihwcmV2aW91c1Byb3BzLmNoaWxkcmVuKS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiBkLmtleTtcbiAgICB9KTtcblxuICAgIHZhciBzaG91bGRUcmlnZ2VyRkxJUCA9ICFhcnJheXNFcXVhbChvbGRDaGlsZHJlbktleXMsIG5leHRDaGlsZHJlbktleXMpICYmICF0aGlzLmlzQW5pbWF0aW9uRGlzYWJsZWQodGhpcy5wcm9wcyk7XG5cbiAgICBpZiAoc2hvdWxkVHJpZ2dlckZMSVApIHtcbiAgICAgIHRoaXMucHJlcEZvckFuaW1hdGlvbigpO1xuICAgICAgdGhpcy5ydW5BbmltYXRpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmNhbGN1bGF0ZU5leHRTZXRPZkNoaWxkcmVuID0gZnVuY3Rpb24gY2FsY3VsYXRlTmV4dFNldE9mQ2hpbGRyZW4obmV4dENoaWxkcmVuKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAvLyBXZSB3YW50IHRvOlxuICAgIC8vICAgLSBNYXJrIGFsbCBuZXcgY2hpbGRyZW4gYXMgYGVudGVyaW5nYFxuICAgIC8vICAgLSBQdWxsIGluIHByZXZpb3VzIGNoaWxkcmVuIHRoYXQgYXJlbid0IGluIG5leHRDaGlsZHJlbiwgYW5kIG1hcmsgdGhlbVxuICAgIC8vICAgICBhcyBgbGVhdmluZ2BcbiAgICAvLyAgIC0gUHJlc2VydmUgdGhlIG5leHRDaGlsZHJlbiBsaXN0IG9yZGVyLCB3aXRoIGxlYXZpbmcgY2hpbGRyZW4gaW4gdGhlaXJcbiAgICAvLyAgICAgYXBwcm9wcmlhdGUgcGxhY2VzLlxuICAgIC8vXG5cbiAgICB2YXIgdXBkYXRlZENoaWxkcmVuID0gbmV4dENoaWxkcmVuLm1hcChmdW5jdGlvbiAobmV4dENoaWxkKSB7XG4gICAgICB2YXIgY2hpbGQgPSBfdGhpczIuZmluZENoaWxkQnlLZXkobmV4dENoaWxkLmtleSk7XG5cbiAgICAgIC8vIElmIHRoZSBjdXJyZW50IGNoaWxkIGRpZCBleGlzdCwgYnV0IGl0IHdhcyBpbiB0aGUgbWlkc3Qgb2YgbGVhdmluZyxcbiAgICAgIC8vIHdlIHdhbnQgdG8gdHJlYXQgaXQgYXMgdGhvdWdoIGl0J3MgZW50ZXJpbmdcbiAgICAgIHZhciBpc0VudGVyaW5nID0gIWNoaWxkIHx8IGNoaWxkLmxlYXZpbmc7XG5cbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgbmV4dENoaWxkLCB7IGVsZW1lbnQ6IG5leHRDaGlsZCwgZW50ZXJpbmc6IGlzRW50ZXJpbmcgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBUaGlzIGlzIHRyaWNreS4gV2Ugd2FudCB0byBrZWVwIHRoZSBuZXh0Q2hpbGRyZW4ncyBvcmRlcmluZywgYnV0IHdpdGhcbiAgICAvLyBhbnkganVzdC1yZW1vdmVkIGl0ZW1zIG1haW50YWluaW5nIHRoZWlyIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgIC8vIGVnLlxuICAgIC8vICAgdGhpcy5zdGF0ZS5jaGlsZHJlbiAgPSBbIDEsIDIsIDMsIDQgXVxuICAgIC8vICAgbmV4dENoaWxkcmVuICAgICAgICAgPSBbIDMsIDEgXVxuICAgIC8vXG4gICAgLy8gSW4gdGhpcyBleGFtcGxlLCB3ZSd2ZSByZW1vdmVkIHRoZSAnMicgJiAnNCdcbiAgICAvLyBXZSB3YW50IHRvIGVuZCB1cCB3aXRoOiAgWyAyLCAzLCAxLCA0IF1cbiAgICAvL1xuICAgIC8vIFRvIGFjY29tcGxpc2ggdGhhdCwgd2UnbGwgaXRlcmF0ZSB0aHJvdWdoIHRoaXMuc3RhdGUuY2hpbGRyZW4uIHdoZW5ldmVyXG4gICAgLy8gd2UgZmluZCBhIG1hdGNoLCB3ZSdsbCBhcHBlbmQgb3VyIGBsZWF2aW5nYCBmbGFnIHRvIGl0LCBhbmQgaW5zZXJ0IGl0XG4gICAgLy8gaW50byB0aGUgbmV4dENoaWxkcmVuIGluIGl0cyBPUklHSU5BTCBwb3NpdGlvbi4gTm90ZSB0aGF0LCBhcyB3ZSBrZWVwXG4gICAgLy8gaW5zZXJ0aW5nIG9sZCBpdGVtcyBpbnRvIHRoZSBuZXcgbGlzdCwgdGhlIFwib3JpZ2luYWxcIiBwb3NpdGlvbiB3aWxsXG4gICAgLy8ga2VlcCBpbmNyZW1lbnRpbmcuXG4gICAgdmFyIG51bU9mQ2hpbGRyZW5MZWF2aW5nID0gMDtcbiAgICB0aGlzLnN0YXRlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgdmFyIGlzTGVhdmluZyA9ICFmaW5kKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBrZXkgPSBfcmVmLmtleTtcbiAgICAgICAgcmV0dXJuIGtleSA9PT0gZ2V0S2V5KGNoaWxkKTtcbiAgICAgIH0sIG5leHRDaGlsZHJlbik7XG5cbiAgICAgIC8vIElmIHRoZSBjaGlsZCBpc24ndCBsZWF2aW5nIChvciwgaWYgdGhlcmUgaXMgbm8gbGVhdmUgYW5pbWF0aW9uKSxcbiAgICAgIC8vIHdlIGRvbid0IG5lZWQgdG8gYWRkIGl0IGludG8gdGhlIHN0YXRlIGNoaWxkcmVuLlxuICAgICAgaWYgKCFpc0xlYXZpbmcgfHwgIV90aGlzMi5wcm9wcy5sZWF2ZUFuaW1hdGlvbikgcmV0dXJuO1xuXG4gICAgICB2YXIgbmV4dENoaWxkID0gX2V4dGVuZHMoe30sIGNoaWxkLCB7IGxlYXZpbmc6IHRydWUgfSk7XG4gICAgICB2YXIgbmV4dENoaWxkSW5kZXggPSBpbmRleCArIG51bU9mQ2hpbGRyZW5MZWF2aW5nO1xuXG4gICAgICB1cGRhdGVkQ2hpbGRyZW4uc3BsaWNlKG5leHRDaGlsZEluZGV4LCAwLCBuZXh0Q2hpbGQpO1xuICAgICAgbnVtT2ZDaGlsZHJlbkxlYXZpbmcgKz0gMTtcbiAgICB9KTtcblxuICAgIHJldHVybiB1cGRhdGVkQ2hpbGRyZW47XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLnByZXBGb3JBbmltYXRpb24gPSBmdW5jdGlvbiBwcmVwRm9yQW5pbWF0aW9uKCkge1xuICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgLy8gT3VyIGFuaW1hdGlvbiBwcmVwIGNvbnNpc3RzIG9mOlxuICAgIC8vIC0gcmVtb3ZlIGNoaWxkcmVuIHRoYXQgYXJlIGxlYXZpbmcgZnJvbSB0aGUgRE9NIGZsb3csIHNvIHRoYXQgdGhlIG5ld1xuICAgIC8vICAgbGF5b3V0IGNhbiBiZSBhY2N1cmF0ZWx5IGNhbGN1bGF0ZWQsXG4gICAgLy8gLSB1cGRhdGUgdGhlIHBsYWNlaG9sZGVyIGNvbnRhaW5lciBoZWlnaHQsIGlmIG5lZWRlZCwgdG8gZW5zdXJlIHRoYXRcbiAgICAvLyAgIHRoZSBwYXJlbnQncyBoZWlnaHQgZG9lc24ndCBjb2xsYXBzZS5cblxuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBsZWF2ZUFuaW1hdGlvbiA9IF9wcm9wcy5sZWF2ZUFuaW1hdGlvbixcbiAgICAgICAgbWFpbnRhaW5Db250YWluZXJIZWlnaHQgPSBfcHJvcHMubWFpbnRhaW5Db250YWluZXJIZWlnaHQsXG4gICAgICAgIGdldFBvc2l0aW9uID0gX3Byb3BzLmdldFBvc2l0aW9uO1xuXG4gICAgLy8gd2UgbmVlZCB0byBtYWtlIGFsbCBsZWF2aW5nIG5vZGVzIFwiaW52aXNpYmxlXCIgdG8gdGhlIGxheW91dCBjYWxjdWxhdGlvbnNcbiAgICAvLyB0aGF0IHdpbGwgdGFrZSBwbGFjZSBpbiB0aGUgbmV4dCBzdGVwICh0aGlzLnJ1bkFuaW1hdGlvbikuXG5cbiAgICBpZiAobGVhdmVBbmltYXRpb24pIHtcbiAgICAgIHZhciBsZWF2aW5nQ2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgcmV0dXJuIGNoaWxkLmxlYXZpbmc7XG4gICAgICB9KTtcblxuICAgICAgbGVhdmluZ0NoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGxlYXZpbmdDaGlsZCkge1xuICAgICAgICB2YXIgY2hpbGREYXRhID0gX3RoaXMzLmdldENoaWxkRGF0YShnZXRLZXkobGVhdmluZ0NoaWxkKSk7XG5cbiAgICAgICAgLy8gV2FybiBpZiBjaGlsZCBpcyBkaXNhYmxlZFxuICAgICAgICBpZiAoIV90aGlzMy5pc0FuaW1hdGlvbkRpc2FibGVkKF90aGlzMy5wcm9wcykgJiYgY2hpbGREYXRhLmRvbU5vZGUgJiYgY2hpbGREYXRhLmRvbU5vZGUuZGlzYWJsZWQpIHtcbiAgICAgICAgICBjaGlsZElzRGlzYWJsZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gdGFrZSB0aGUgaXRlbXMgb3V0IG9mIHRoZSBcImZsb3dcIiBvZiB0aGUgZG9jdW1lbnQsIHNvIHRoYXRcbiAgICAgICAgLy8gaXRzIHNpYmxpbmdzIGNhbiBtb3ZlIHRvIHRha2UgaXRzIHBsYWNlLlxuICAgICAgICBpZiAoY2hpbGREYXRhLmJvdW5kaW5nQm94KSB7XG4gICAgICAgICAgcmVtb3ZlTm9kZUZyb21ET01GbG93KGNoaWxkRGF0YSwgX3RoaXMzLnByb3BzLnZlcnRpY2FsQWxpZ25tZW50KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChtYWludGFpbkNvbnRhaW5lckhlaWdodCAmJiB0aGlzLmhlaWdodFBsYWNlaG9sZGVyRGF0YS5kb21Ob2RlKSB7XG4gICAgICAgIHVwZGF0ZUhlaWdodFBsYWNlaG9sZGVyKHtcbiAgICAgICAgICBkb21Ob2RlOiB0aGlzLmhlaWdodFBsYWNlaG9sZGVyRGF0YS5kb21Ob2RlLFxuICAgICAgICAgIHBhcmVudERhdGE6IHRoaXMucGFyZW50RGF0YSxcbiAgICAgICAgICBnZXRQb3NpdGlvbjogZ2V0UG9zaXRpb25cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gRm9yIGFsbCBjaGlsZHJlbiBub3QgaW4gdGhlIG1pZGRsZSBvZiBlbnRlcmluZyBvciBsZWF2aW5nLFxuICAgIC8vIHdlIG5lZWQgdG8gcmVzZXQgdGhlIHRyYW5zaXRpb24sIHNvIHRoYXQgdGhlIE5FVyBzaHVmZmxlIHN0YXJ0cyBmcm9tXG4gICAgLy8gdGhlIHJpZ2h0IHBsYWNlLlxuICAgIHRoaXMuc3RhdGUuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgIHZhciBfZ2V0Q2hpbGREYXRhID0gX3RoaXMzLmdldENoaWxkRGF0YShnZXRLZXkoY2hpbGQpKSxcbiAgICAgICAgICBkb21Ob2RlID0gX2dldENoaWxkRGF0YS5kb21Ob2RlO1xuXG4gICAgICAvLyBJZ25vcmUgY2hpbGRyZW4gdGhhdCBkb24ndCByZW5kZXIgRE9NIG5vZGVzIChlZy4gYnkgcmV0dXJuaW5nIG51bGwpXG5cblxuICAgICAgaWYgKCFkb21Ob2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjaGlsZC5lbnRlcmluZyAmJiAhY2hpbGQubGVhdmluZykge1xuICAgICAgICBhcHBseVN0eWxlc1RvRE9NTm9kZSh7XG4gICAgICAgICAgZG9tTm9kZTogZG9tTm9kZSxcbiAgICAgICAgICBzdHlsZXM6IHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICcnXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5cblxuICBGbGlwTW92ZS5wcm90b3R5cGUuVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBVTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAvLyBXaGVuIHRoZSBjb21wb25lbnQgaXMgaGFuZGVkIG5ldyBwcm9wcywgd2UgbmVlZCB0byBmaWd1cmUgb3V0IHRoZVxuICAgIC8vIFwicmVzdGluZ1wiIHBvc2l0aW9uIG9mIGFsbCBjdXJyZW50bHktcmVuZGVyZWQgRE9NIG5vZGVzLlxuICAgIC8vIFdlIHN0b3JlIHRoYXQgZGF0YSBpbiB0aGlzLnBhcmVudCBhbmQgdGhpcy5jaGlsZHJlbixcbiAgICAvLyBzbyBpdCBjYW4gYmUgdXNlZCBsYXRlciB0byB3b3JrIG91dCB0aGUgYW5pbWF0aW9uLlxuICAgIHRoaXMudXBkYXRlQm91bmRpbmdCb3hDYWNoZXMoKTtcblxuICAgIC8vIENvbnZlcnQgb3BhcXVlIGNoaWxkcmVuIG9iamVjdCB0byBhcnJheS5cbiAgICB2YXIgbmV4dENoaWxkcmVuID0gZ2V0RWxlbWVudENoaWxkcmVuKG5leHRQcm9wcy5jaGlsZHJlbik7XG5cbiAgICAvLyBOZXh0LCB3ZSBuZWVkIHRvIHVwZGF0ZSBvdXIgc3RhdGUsIHNvIHRoYXQgaXQgY29udGFpbnMgb3VyIG5ldyBzZXQgb2ZcbiAgICAvLyBjaGlsZHJlbi4gSWYgYW5pbWF0aW9uIGlzIGRpc2FibGVkIG9yIHVuc3VwcG9ydGVkLCB0aGlzIGlzIGVhc3k7XG4gICAgLy8gd2UganVzdCBjb3B5IG91ciBwcm9wcyBpbnRvIHN0YXRlLlxuICAgIC8vIEFzc3VtaW5nIHRoYXQgd2UgY2FuIGFuaW1hdGUsIHRob3VnaCwgd2UgaGF2ZSB0byBkbyBzb21lIHdvcmsuXG4gICAgLy8gRXNzZW50aWFsbHksIHdlIHdhbnQgdG8ga2VlcCBqdXN0LWRlbGV0ZWQgbm9kZXMgaW4gdGhlIERPTSBmb3IgYSBiaXRcbiAgICAvLyBsb25nZXIsIHNvIHRoYXQgd2UgY2FuIGFuaW1hdGUgdGhlbSBhd2F5LlxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgY2hpbGRyZW46IHRoaXMuaXNBbmltYXRpb25EaXNhYmxlZChuZXh0UHJvcHMpID8gbmV4dENoaWxkcmVuLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGVsZW1lbnQsIHsgZWxlbWVudDogZWxlbWVudCB9KTtcbiAgICAgIH0pIDogdGhpcy5jYWxjdWxhdGVOZXh0U2V0T2ZDaGlsZHJlbihuZXh0Q2hpbGRyZW4pXG4gICAgfSk7XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmFuaW1hdGVDaGlsZCA9IGZ1bmN0aW9uIGFuaW1hdGVDaGlsZChjaGlsZCwgaW5kZXgsIGNoaWxkSW5pdGlhbFN0eWxlcykge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgdmFyIF9nZXRDaGlsZERhdGEyID0gdGhpcy5nZXRDaGlsZERhdGEoZ2V0S2V5KGNoaWxkKSksXG4gICAgICAgIGRvbU5vZGUgPSBfZ2V0Q2hpbGREYXRhMi5kb21Ob2RlO1xuXG4gICAgaWYgKCFkb21Ob2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgdGhlIHJlbGV2YW50IHN0eWxlIGZvciB0aGlzIERPTSBub2RlXG4gICAgLy8gVGhpcyBpcyB0aGUgb2Zmc2V0IGZyb20gaXRzIGFjdHVhbCBET00gcG9zaXRpb24uXG4gICAgLy8gZWcuIGlmIGFuIGl0ZW0gaGFzIGJlZW4gcmUtcmVuZGVyZWQgMjBweCBsb3dlciwgd2Ugd2FudCB0byBhcHBseSBhXG4gICAgLy8gc3R5bGUgb2YgJ3RyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4KScsIHNvIHRoYXQgaXQgYXBwZWFycyB0byBiZSB3aGVyZVxuICAgIC8vIGl0IHN0YXJ0ZWQuXG4gICAgLy8gSW4gRkxJUCB0ZXJtaW5vbG9neSwgdGhpcyBpcyB0aGUgJ0ludmVydCcgc3RhZ2UuXG4gICAgYXBwbHlTdHlsZXNUb0RPTU5vZGUoe1xuICAgICAgZG9tTm9kZTogZG9tTm9kZSxcbiAgICAgIHN0eWxlczogY2hpbGRJbml0aWFsU3R5bGVzXG4gICAgfSk7XG5cbiAgICAvLyBTdGFydCBieSBpbnZva2luZyB0aGUgb25TdGFydCBjYWxsYmFjayBmb3IgdGhpcyBjaGlsZC5cbiAgICBpZiAodGhpcy5wcm9wcy5vblN0YXJ0KSB0aGlzLnByb3BzLm9uU3RhcnQoY2hpbGQsIGRvbU5vZGUpO1xuXG4gICAgLy8gTmV4dCwgYW5pbWF0ZSB0aGUgaXRlbSBmcm9tIGl0J3MgYXJ0aWZpY2lhbGx5LW9mZnNldCBwb3NpdGlvbiB0byBpdHNcbiAgICAvLyBuZXcsIG5hdHVyYWwgcG9zaXRpb24uXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIE5PVEUsIFJFOiB0aGUgZG91YmxlLXJlcXVlc3RBbmltYXRpb25GcmFtZTpcbiAgICAgICAgLy8gU2FkbHksIHRoaXMgaXMgdGhlIG1vc3QgYnJvd3Nlci1jb21wYXRpYmxlIHdheSB0byBkbyB0aGlzIEkndmUgZm91bmQuXG4gICAgICAgIC8vIEVzc2VudGlhbGx5IHdlIG5lZWQgdG8gc2V0IHRoZSBpbml0aWFsIHN0eWxlcyBvdXRzaWRlIG9mIGFueSByZXF1ZXN0XG4gICAgICAgIC8vIGNhbGxiYWNrcyB0byBhdm9pZCBiYXRjaGluZyB0aGVtLiBUaGVuLCBhIGZyYW1lIG5lZWRzIHRvIHBhc3Mgd2l0aFxuICAgICAgICAvLyB0aGUgc3R5bGVzIGFib3ZlIHJlbmRlcmVkLiBUaGVuLCBvbiB0aGUgc2Vjb25kIGZyYW1lLCB3ZSBjYW4gYXBwbHlcbiAgICAgICAgLy8gb3VyIGZpbmFsIHN0eWxlcyB0byBwZXJmb3JtIHRoZSBhbmltYXRpb24uXG5cbiAgICAgICAgLy8gT3VyIGZpcnN0IG9yZGVyIG9mIGJ1c2luZXNzIGlzIHRvIFwidW5kb1wiIHRoZSBzdHlsZXMgYXBwbGllZCBpbiB0aGVcbiAgICAgICAgLy8gcHJldmlvdXMgZnJhbWVzLCB3aGlsZSBhbHNvIGFkZGluZyBhIGB0cmFuc2l0aW9uYCBwcm9wZXJ0eS5cbiAgICAgICAgLy8gVGhpcyB3YXksIHRoZSBpdGVtIHdpbGwgc21vb3RobHkgdHJhbnNpdGlvbiBmcm9tIGl0cyBvbGQgcG9zaXRpb25cbiAgICAgICAgLy8gdG8gaXRzIG5ldyBwb3NpdGlvbi5cblxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZmxvd3R5cGUvcmVxdWlyZS12YXJpYWJsZS10eXBlXG4gICAgICAgIHZhciBzdHlsZXMgPSB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogY3JlYXRlVHJhbnNpdGlvblN0cmluZyhpbmRleCwgX3RoaXM0LnByb3BzKSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICcnLFxuICAgICAgICAgIG9wYWNpdHk6ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNoaWxkLmFwcGVhcmluZyAmJiBfdGhpczQucHJvcHMuYXBwZWFyQW5pbWF0aW9uKSB7XG4gICAgICAgICAgc3R5bGVzID0gX2V4dGVuZHMoe30sIHN0eWxlcywgX3RoaXM0LnByb3BzLmFwcGVhckFuaW1hdGlvbi50byk7XG4gICAgICAgIH0gZWxzZSBpZiAoY2hpbGQuZW50ZXJpbmcgJiYgX3RoaXM0LnByb3BzLmVudGVyQW5pbWF0aW9uKSB7XG4gICAgICAgICAgc3R5bGVzID0gX2V4dGVuZHMoe30sIHN0eWxlcywgX3RoaXM0LnByb3BzLmVudGVyQW5pbWF0aW9uLnRvKTtcbiAgICAgICAgfSBlbHNlIGlmIChjaGlsZC5sZWF2aW5nICYmIF90aGlzNC5wcm9wcy5sZWF2ZUFuaW1hdGlvbikge1xuICAgICAgICAgIHN0eWxlcyA9IF9leHRlbmRzKHt9LCBzdHlsZXMsIF90aGlzNC5wcm9wcy5sZWF2ZUFuaW1hdGlvbi50byk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbiBGTElQIHRlcm1pbm9sb2d5LCB0aGlzIGlzIHRoZSAnUGxheScgc3RhZ2UuXG4gICAgICAgIGFwcGx5U3R5bGVzVG9ET01Ob2RlKHsgZG9tTm9kZTogZG9tTm9kZSwgc3R5bGVzOiBzdHlsZXMgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuYmluZFRyYW5zaXRpb25FbmRIYW5kbGVyKGNoaWxkKTtcbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUuYmluZFRyYW5zaXRpb25FbmRIYW5kbGVyID0gZnVuY3Rpb24gYmluZFRyYW5zaXRpb25FbmRIYW5kbGVyKGNoaWxkKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICB2YXIgX2dldENoaWxkRGF0YTMgPSB0aGlzLmdldENoaWxkRGF0YShnZXRLZXkoY2hpbGQpKSxcbiAgICAgICAgZG9tTm9kZSA9IF9nZXRDaGlsZERhdGEzLmRvbU5vZGU7XG5cbiAgICBpZiAoIWRvbU5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBUaGUgb25GaW5pc2ggY2FsbGJhY2sgbmVlZHMgdG8gYmUgYm91bmQgdG8gdGhlIHRyYW5zaXRpb25FbmQgZXZlbnQuXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHVuYmluZCBpdCB3aGVuIHRoZSB0cmFuc2l0aW9uIGNvbXBsZXRlcywgc28gdGhpcyB1Z2x5XG4gICAgLy8gaW5saW5lIGZ1bmN0aW9uIGlzIHJlcXVpcmVkICh3ZSBuZWVkIGl0IGhlcmUgc28gaXQgY2xvc2VzIG92ZXJcbiAgICAvLyBkZXBlbmRlbnQgdmFyaWFibGVzIGBjaGlsZGAgYW5kIGBkb21Ob2RlYClcbiAgICB2YXIgdHJhbnNpdGlvbkVuZEhhbmRsZXIgPSBmdW5jdGlvbiB0cmFuc2l0aW9uRW5kSGFuZGxlcihldikge1xuICAgICAgLy8gSXQncyBwb3NzaWJsZSB0aGF0IHRoaXMgaGFuZGxlciBpcyBmaXJlZCBub3Qgb24gb3VyIHByaW1hcnkgdHJhbnNpdGlvbixcbiAgICAgIC8vIGJ1dCBvbiBhIG5lc3RlZCB0cmFuc2l0aW9uIChlZy4gYSBob3ZlciBlZmZlY3QpLiBJZ25vcmUgdGhlc2UgY2FzZXMuXG4gICAgICBpZiAoZXYudGFyZ2V0ICE9PSBkb21Ob2RlKSByZXR1cm47XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgJ3RyYW5zaXRpb24nIGlubGluZSBzdHlsZSB3ZSBhZGRlZC4gVGhpcyBpcyBjbGVhbnVwLlxuICAgICAgZG9tTm9kZS5zdHlsZS50cmFuc2l0aW9uID0gJyc7XG5cbiAgICAgIC8vIFRyaWdnZXIgYW55IGFwcGxpY2FibGUgb25GaW5pc2gvb25GaW5pc2hBbGwgaG9va3NcbiAgICAgIF90aGlzNS50cmlnZ2VyRmluaXNoSG9va3MoY2hpbGQsIGRvbU5vZGUpO1xuXG4gICAgICBkb21Ob2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZCwgdHJhbnNpdGlvbkVuZEhhbmRsZXIpO1xuXG4gICAgICBpZiAoY2hpbGQubGVhdmluZykge1xuICAgICAgICBfdGhpczUucmVtb3ZlQ2hpbGREYXRhKGdldEtleShjaGlsZCkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBkb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIodHJhbnNpdGlvbkVuZCwgdHJhbnNpdGlvbkVuZEhhbmRsZXIpO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS50cmlnZ2VyRmluaXNoSG9va3MgPSBmdW5jdGlvbiB0cmlnZ2VyRmluaXNoSG9va3MoY2hpbGQsIGRvbU5vZGUpIHtcbiAgICB2YXIgX3RoaXM2ID0gdGhpcztcblxuICAgIGlmICh0aGlzLnByb3BzLm9uRmluaXNoKSB0aGlzLnByb3BzLm9uRmluaXNoKGNoaWxkLCBkb21Ob2RlKTtcblxuICAgIC8vIFJlZHVjZSB0aGUgbnVtYmVyIG9mIGNoaWxkcmVuIHdlIG5lZWQgdG8gYW5pbWF0ZSBieSAxLFxuICAgIC8vIHNvIHRoYXQgd2UgY2FuIHRlbGwgd2hlbiBhbGwgY2hpbGRyZW4gaGF2ZSBmaW5pc2hlZC5cbiAgICB0aGlzLnJlbWFpbmluZ0FuaW1hdGlvbnMgLT0gMTtcblxuICAgIGlmICh0aGlzLnJlbWFpbmluZ0FuaW1hdGlvbnMgPT09IDApIHtcbiAgICAgIC8vIFJlbW92ZSBhbnkgaXRlbXMgZnJvbSB0aGUgRE9NIHRoYXQgaGF2ZSBsZWZ0LCBhbmQgcmVzZXQgYGVudGVyaW5nYC5cbiAgICAgIHZhciBuZXh0Q2hpbGRyZW4gPSB0aGlzLnN0YXRlLmNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgdmFyIGxlYXZpbmcgPSBfcmVmMi5sZWF2aW5nO1xuICAgICAgICByZXR1cm4gIWxlYXZpbmc7XG4gICAgICB9KS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBpdGVtLCB7XG4gICAgICAgICAgLy8gZml4IGZvciBGbG93XG4gICAgICAgICAgZWxlbWVudDogaXRlbS5lbGVtZW50LFxuICAgICAgICAgIGFwcGVhcmluZzogZmFsc2UsXG4gICAgICAgICAgZW50ZXJpbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBjaGlsZHJlbjogbmV4dENoaWxkcmVuIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBfdGhpczYucHJvcHMub25GaW5pc2hBbGwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBfdGhpczYuY2FsbENoaWxkcmVuSG9vayhfdGhpczYucHJvcHMub25GaW5pc2hBbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzZXQgb3VyIHZhcmlhYmxlcyBmb3IgdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICAgIF90aGlzNi5jaGlsZHJlblRvQW5pbWF0ZSA9IFtdO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIElmIHRoZSBwbGFjZWhvbGRlciB3YXMgaG9sZGluZyB0aGUgY29udGFpbmVyIG9wZW4gd2hpbGUgZWxlbWVudHMgd2VyZVxuICAgICAgLy8gbGVhdmluZywgd2Ugd2UgY2FuIG5vdyBzZXQgaXRzIGhlaWdodCB0byB6ZXJvLlxuICAgICAgaWYgKHRoaXMuaGVpZ2h0UGxhY2Vob2xkZXJEYXRhLmRvbU5vZGUpIHtcbiAgICAgICAgdGhpcy5oZWlnaHRQbGFjZWhvbGRlckRhdGEuZG9tTm9kZS5zdHlsZS5oZWlnaHQgPSAnMCc7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5jYWxsQ2hpbGRyZW5Ib29rID0gZnVuY3Rpb24gY2FsbENoaWxkcmVuSG9vayhob29rKSB7XG4gICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICB2YXIgZWxlbWVudHMgPSBbXTtcbiAgICB2YXIgZG9tTm9kZXMgPSBbXTtcblxuICAgIHRoaXMuY2hpbGRyZW5Ub0FuaW1hdGUuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGRLZXkpIHtcbiAgICAgIC8vIElmIHRoaXMgd2FzIGFuIGV4aXQgYW5pbWF0aW9uLCB0aGUgY2hpbGQgbWF5IG5vIGxvbmdlciBleGlzdC5cbiAgICAgIC8vIElmIHNvLCBza2lwIGl0LlxuICAgICAgdmFyIGNoaWxkID0gX3RoaXM3LmZpbmRDaGlsZEJ5S2V5KGNoaWxkS2V5KTtcblxuICAgICAgaWYgKCFjaGlsZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnRzLnB1c2goY2hpbGQpO1xuXG4gICAgICBpZiAoX3RoaXM3Lmhhc0NoaWxkRGF0YShjaGlsZEtleSkpIHtcbiAgICAgICAgZG9tTm9kZXMucHVzaChfdGhpczcuZ2V0Q2hpbGREYXRhKGNoaWxkS2V5KS5kb21Ob2RlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGhvb2soZWxlbWVudHMsIGRvbU5vZGVzKTtcbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUudXBkYXRlQm91bmRpbmdCb3hDYWNoZXMgPSBmdW5jdGlvbiB1cGRhdGVCb3VuZGluZ0JveENhY2hlcygpIHtcbiAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgIC8vIFRoaXMgaXMgdGhlIE9OTFkgcGxhY2UgdGhhdCBwYXJlbnREYXRhIGFuZCBjaGlsZHJlbkRhdGEnc1xuICAgIC8vIGJvdW5kaW5nIGJveGVzIGFyZSB1cGRhdGVkLiBUaGV5IHdpbGwgYmUgY2FsY3VsYXRlZCBhdCBvdGhlciB0aW1lc1xuICAgIC8vIHRvIGJlIGNvbXBhcmVkIHRvIHRoaXMgdmFsdWUsIGJ1dCBpdCdzIGltcG9ydGFudCB0aGF0IHRoZSBjYWNoZSBpc1xuICAgIC8vIHVwZGF0ZWQgb25jZSBwZXIgdXBkYXRlLlxuICAgIHZhciBwYXJlbnREb21Ob2RlID0gdGhpcy5wYXJlbnREYXRhLmRvbU5vZGU7XG5cbiAgICBpZiAoIXBhcmVudERvbU5vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnBhcmVudERhdGEuYm91bmRpbmdCb3ggPSB0aGlzLnByb3BzLmdldFBvc2l0aW9uKHBhcmVudERvbU5vZGUpO1xuXG4gICAgLy8gU3BsaXR0aW5nIERPTSByZWFkcyBhbmQgd3JpdGVzIHRvIGJlIHBlZm9ybWVkIGluIGJhdGNoZXNcbiAgICB2YXIgY2hpbGRyZW5Cb3VuZGluZ0JveGVzID0gW107XG5cbiAgICB0aGlzLnN0YXRlLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICB2YXIgY2hpbGRLZXkgPSBnZXRLZXkoY2hpbGQpO1xuXG4gICAgICAvLyBJdCBpcyBwb3NzaWJsZSB0aGF0IGEgY2hpbGQgZG9lcyBub3QgaGF2ZSBhIGBrZXlgIHByb3BlcnR5O1xuICAgICAgLy8gSWdub3JlIHRoZXNlIGNoaWxkcmVuLCB0aGV5IGRvbid0IG5lZWQgdG8gYmUgbW92ZWQuXG4gICAgICBpZiAoIWNoaWxkS2V5KSB7XG4gICAgICAgIGNoaWxkcmVuQm91bmRpbmdCb3hlcy5wdXNoKG51bGwpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEluIHZlcnkgcmFyZSBjaXJjdW1zdGFuY2VzLCBmb3IgcmVhc29ucyB1bmtub3duLCB0aGUgcmVmIGlzIG5ldmVyXG4gICAgICAvLyBwb3B1bGF0ZWQgZm9yIGNlcnRhaW4gY2hpbGRyZW4uIEluIHRoaXMgY2FzZSwgYXZvaWQgZG9pbmcgdGhpcyB1cGRhdGUuXG4gICAgICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3Nod2NvbWVhdS9yZWFjdC1mbGlwLW1vdmUvcHVsbC85MVxuICAgICAgaWYgKCFfdGhpczguaGFzQ2hpbGREYXRhKGNoaWxkS2V5KSkge1xuICAgICAgICBjaGlsZHJlbkJvdW5kaW5nQm94ZXMucHVzaChudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB2YXIgY2hpbGREYXRhID0gX3RoaXM4LmdldENoaWxkRGF0YShjaGlsZEtleSk7XG5cbiAgICAgIC8vIElmIHRoZSBjaGlsZCBlbGVtZW50IHJldHVybnMgbnVsbCwgd2UgbmVlZCB0byBhdm9pZCB0cnlpbmcgdG9cbiAgICAgIC8vIGFjY291bnQgZm9yIGl0XG4gICAgICBpZiAoIWNoaWxkRGF0YS5kb21Ob2RlIHx8ICFjaGlsZCkge1xuICAgICAgICBjaGlsZHJlbkJvdW5kaW5nQm94ZXMucHVzaChudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjaGlsZHJlbkJvdW5kaW5nQm94ZXMucHVzaChnZXRSZWxhdGl2ZUJvdW5kaW5nQm94KHtcbiAgICAgICAgY2hpbGREb21Ob2RlOiBjaGlsZERhdGEuZG9tTm9kZSxcbiAgICAgICAgcGFyZW50RG9tTm9kZTogcGFyZW50RG9tTm9kZSxcbiAgICAgICAgZ2V0UG9zaXRpb246IF90aGlzOC5wcm9wcy5nZXRQb3NpdGlvblxuICAgICAgfSkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdGF0ZS5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgIHZhciBjaGlsZEtleSA9IGdldEtleShjaGlsZCk7XG5cbiAgICAgIHZhciBjaGlsZEJvdW5kaW5nQm94ID0gY2hpbGRyZW5Cb3VuZGluZ0JveGVzW2luZGV4XTtcblxuICAgICAgaWYgKCFjaGlsZEtleSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIF90aGlzOC5zZXRDaGlsZERhdGEoY2hpbGRLZXksIHtcbiAgICAgICAgYm91bmRpbmdCb3g6IGNoaWxkQm91bmRpbmdCb3hcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5jb21wdXRlSW5pdGlhbFN0eWxlcyA9IGZ1bmN0aW9uIGNvbXB1dGVJbml0aWFsU3R5bGVzKGNoaWxkKSB7XG4gICAgaWYgKGNoaWxkLmFwcGVhcmluZykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuYXBwZWFyQW5pbWF0aW9uID8gdGhpcy5wcm9wcy5hcHBlYXJBbmltYXRpb24uZnJvbSA6IHt9O1xuICAgIH0gZWxzZSBpZiAoY2hpbGQuZW50ZXJpbmcpIHtcbiAgICAgIGlmICghdGhpcy5wcm9wcy5lbnRlckFuaW1hdGlvbikge1xuICAgICAgICByZXR1cm4ge307XG4gICAgICB9XG4gICAgICAvLyBJZiB0aGlzIGNoaWxkIHdhcyBpbiB0aGUgbWlkZGxlIG9mIGxlYXZpbmcsIGl0IHN0aWxsIGhhcyBpdHNcbiAgICAgIC8vIGFic29sdXRlIHBvc2l0aW9uaW5nIHN0eWxlcyBhcHBsaWVkLiBXZSBuZWVkIHRvIHVuZG8gdGhvc2UuXG4gICAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICBwb3NpdGlvbjogJycsXG4gICAgICAgIHRvcDogJycsXG4gICAgICAgIGxlZnQ6ICcnLFxuICAgICAgICByaWdodDogJycsXG4gICAgICAgIGJvdHRvbTogJydcbiAgICAgIH0sIHRoaXMucHJvcHMuZW50ZXJBbmltYXRpb24uZnJvbSk7XG4gICAgfSBlbHNlIGlmIChjaGlsZC5sZWF2aW5nKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5sZWF2ZUFuaW1hdGlvbiA/IHRoaXMucHJvcHMubGVhdmVBbmltYXRpb24uZnJvbSA6IHt9O1xuICAgIH1cblxuICAgIHZhciBjaGlsZERhdGEgPSB0aGlzLmdldENoaWxkRGF0YShnZXRLZXkoY2hpbGQpKTtcbiAgICB2YXIgY2hpbGREb21Ob2RlID0gY2hpbGREYXRhLmRvbU5vZGU7XG4gICAgdmFyIGNoaWxkQm91bmRpbmdCb3ggPSBjaGlsZERhdGEuYm91bmRpbmdCb3g7XG4gICAgdmFyIHBhcmVudEJvdW5kaW5nQm94ID0gdGhpcy5wYXJlbnREYXRhLmJvdW5kaW5nQm94O1xuXG4gICAgaWYgKCFjaGlsZERvbU5vZGUpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICB2YXIgX2dldFBvc2l0aW9uRGVsdGEyID0gZ2V0UG9zaXRpb25EZWx0YSh7XG4gICAgICBjaGlsZERvbU5vZGU6IGNoaWxkRG9tTm9kZSxcbiAgICAgIGNoaWxkQm91bmRpbmdCb3g6IGNoaWxkQm91bmRpbmdCb3gsXG4gICAgICBwYXJlbnRCb3VuZGluZ0JveDogcGFyZW50Qm91bmRpbmdCb3gsXG4gICAgICBnZXRQb3NpdGlvbjogdGhpcy5wcm9wcy5nZXRQb3NpdGlvblxuICAgIH0pLFxuICAgICAgICBkWCA9IF9nZXRQb3NpdGlvbkRlbHRhMlswXSxcbiAgICAgICAgZFkgPSBfZ2V0UG9zaXRpb25EZWx0YTJbMV07XG5cbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKCcgKyBkWCArICdweCwgJyArIGRZICsgJ3B4KSdcbiAgICB9O1xuICB9O1xuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG5cblxuICBGbGlwTW92ZS5wcm90b3R5cGUuaXNBbmltYXRpb25EaXNhYmxlZCA9IGZ1bmN0aW9uIGlzQW5pbWF0aW9uRGlzYWJsZWQocHJvcHMpIHtcbiAgICAvLyBJZiB0aGUgY29tcG9uZW50IGlzIGV4cGxpY2l0bHkgcGFzc2VkIGEgYGRpc2FibGVBbGxBbmltYXRpb25zYCBmbGFnLFxuICAgIC8vIHdlIGNhbiBza2lwIHRoaXMgd2hvbGUgcHJvY2Vzcy4gU2ltaWxhcmx5LCBpZiBhbGwgb2YgdGhlIG51bWJlcnMgaGF2ZVxuICAgIC8vIGJlZW4gc2V0IHRvIDAsIHRoZXJlIGlzIG5vIHBvaW50IGluIHRyeWluZyB0byBhbmltYXRlOyBkb2luZyBzbyB3b3VsZFxuICAgIC8vIG9ubHkgY2F1c2UgYSBmbGlja2VyIChhbmQgdGhlIGludGVudCBpcyBwcm9iYWJseSB0byBkaXNhYmxlIGFuaW1hdGlvbnMpXG4gICAgLy8gV2UgY2FuIGFsc28gc2tpcCB0aGlzIHJpZ2FtYXJvbGUgaWYgdGhlcmUncyBubyBicm93c2VyIHN1cHBvcnQgZm9yIGl0LlxuICAgIHJldHVybiBub0Jyb3dzZXJTdXBwb3J0IHx8IHByb3BzLmRpc2FibGVBbGxBbmltYXRpb25zIHx8IHByb3BzLmR1cmF0aW9uID09PSAwICYmIHByb3BzLmRlbGF5ID09PSAwICYmIHByb3BzLnN0YWdnZXJEdXJhdGlvbkJ5ID09PSAwICYmIHByb3BzLnN0YWdnZXJEZWxheUJ5ID09PSAwO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5maW5kQ2hpbGRCeUtleSA9IGZ1bmN0aW9uIGZpbmRDaGlsZEJ5S2V5KGtleSkge1xuICAgIHJldHVybiBmaW5kKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuIGdldEtleShjaGlsZCkgPT09IGtleTtcbiAgICB9LCB0aGlzLnN0YXRlLmNoaWxkcmVuKTtcbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUuaGFzQ2hpbGREYXRhID0gZnVuY3Rpb24gaGFzQ2hpbGREYXRhKGtleSkge1xuICAgIC8vIE9iamVjdCBoYXMgc29tZSBidWlsdC1pbiBwcm9wZXJ0aWVzIG9uIGl0cyBwcm90b3R5cGUsIHN1Y2ggYXMgdG9TdHJpbmcuICBoYXNPd25Qcm9wZXJ0eSBtYWtlc1xuICAgIC8vIHN1cmUgdGhhdCBrZXkgaXMgcHJlc2VudCBvbiBjaGlsZHJlbkRhdGEgaXRzZWxmLCBub3Qgb24gaXRzIHByb3RvdHlwZS5cbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuY2hpbGRyZW5EYXRhLCBrZXkpO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5nZXRDaGlsZERhdGEgPSBmdW5jdGlvbiBnZXRDaGlsZERhdGEoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzQ2hpbGREYXRhKGtleSkgPyB0aGlzLmNoaWxkcmVuRGF0YVtrZXldIDoge307XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLnNldENoaWxkRGF0YSA9IGZ1bmN0aW9uIHNldENoaWxkRGF0YShrZXksIGRhdGEpIHtcbiAgICB0aGlzLmNoaWxkcmVuRGF0YVtrZXldID0gX2V4dGVuZHMoe30sIHRoaXMuZ2V0Q2hpbGREYXRhKGtleSksIGRhdGEpO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5yZW1vdmVDaGlsZERhdGEgPSBmdW5jdGlvbiByZW1vdmVDaGlsZERhdGEoa2V5KSB7XG4gICAgZGVsZXRlIHRoaXMuY2hpbGRyZW5EYXRhW2tleV07XG4gICAgdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAocHJldlN0YXRlKSB7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHByZXZTdGF0ZSwge1xuICAgICAgICBjaGlsZHJlbjogcHJldlN0YXRlLmNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGQuZWxlbWVudC5rZXkgIT09IGtleTtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIEZsaXBNb3ZlLnByb3RvdHlwZS5jcmVhdGVIZWlnaHRQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIGNyZWF0ZUhlaWdodFBsYWNlaG9sZGVyKCkge1xuICAgIHZhciBfdGhpczkgPSB0aGlzO1xuXG4gICAgdmFyIHR5cGVOYW1lID0gdGhpcy5wcm9wcy50eXBlTmFtZTtcblxuICAgIC8vIElmIHJlcXVlc3RlZCwgY3JlYXRlIGFuIGludmlzaWJsZSBlbGVtZW50IGF0IHRoZSBlbmQgb2YgdGhlIGxpc3QuXG4gICAgLy8gSXRzIGhlaWdodCB3aWxsIGJlIG1vZGlmaWVkIHRvIHByZXZlbnQgdGhlIGNvbnRhaW5lciBmcm9tIGNvbGxhcHNpbmdcbiAgICAvLyBwcmVtYXR1cmVseS5cblxuICAgIHZhciBpc0NvbnRhaW5lckFMaXN0ID0gdHlwZU5hbWUgPT09ICd1bCcgfHwgdHlwZU5hbWUgPT09ICdvbCc7XG4gICAgdmFyIHBsYWNlaG9sZGVyVHlwZSA9IGlzQ29udGFpbmVyQUxpc3QgPyAnbGknIDogJ2Rpdic7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChwbGFjZWhvbGRlclR5cGUsIHtcbiAgICAgIGtleTogJ2hlaWdodC1wbGFjZWhvbGRlcicsXG4gICAgICByZWY6IGZ1bmN0aW9uIHJlZihkb21Ob2RlKSB7XG4gICAgICAgIF90aGlzOS5oZWlnaHRQbGFjZWhvbGRlckRhdGEuZG9tTm9kZSA9IGRvbU5vZGU7XG4gICAgICB9LFxuICAgICAgc3R5bGU6IHsgdmlzaWJpbGl0eTogJ2hpZGRlbicsIGhlaWdodDogMCB9XG4gICAgfSk7XG4gIH07XG5cbiAgRmxpcE1vdmUucHJvdG90eXBlLmNoaWxkcmVuV2l0aFJlZnMgPSBmdW5jdGlvbiBjaGlsZHJlbldpdGhSZWZzKCkge1xuICAgIHZhciBfdGhpczEwID0gdGhpcztcblxuICAgIC8vIFdlIG5lZWQgdG8gY2xvbmUgdGhlIHByb3ZpZGVkIGNoaWxkcmVuLCBjYXB0dXJpbmcgYSByZWZlcmVuY2UgdG8gdGhlXG4gICAgLy8gdW5kZXJseWluZyBET00gbm9kZS4gRmxpcCBNb3ZlIG5lZWRzIHRvIHVzZSB0aGUgUmVhY3QgZXNjYXBlIGhhdGNoZXMgdG9cbiAgICAvLyBiZSBhYmxlIHRvIGRvIGl0cyBjYWxjdWxhdGlvbnMuXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZC5lbGVtZW50LCB7XG4gICAgICAgIHJlZjogZnVuY3Rpb24gcmVmKGVsZW1lbnQpIHtcbiAgICAgICAgICAvLyBTdGF0ZWxlc3MgRnVuY3Rpb25hbCBDb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGJ5IEZsaXBNb3ZlLFxuICAgICAgICAgIC8vIGJlY2F1c2UgdGhleSBkb24ndCBoYXZlIGluc3RhbmNlcy5cbiAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZG9tTm9kZSA9IGdldE5hdGl2ZU5vZGUoZWxlbWVudCk7XG4gICAgICAgICAgX3RoaXMxMC5zZXRDaGlsZERhdGEoZ2V0S2V5KGNoaWxkKSwgeyBkb21Ob2RlOiBkb21Ob2RlIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBGbGlwTW92ZS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczExID0gdGhpcztcblxuICAgIHZhciBfcHJvcHMyID0gdGhpcy5wcm9wcyxcbiAgICAgICAgdHlwZU5hbWUgPSBfcHJvcHMyLnR5cGVOYW1lLFxuICAgICAgICBkZWxlZ2F0ZWQgPSBfcHJvcHMyLmRlbGVnYXRlZCxcbiAgICAgICAgbGVhdmVBbmltYXRpb24gPSBfcHJvcHMyLmxlYXZlQW5pbWF0aW9uLFxuICAgICAgICBtYWludGFpbkNvbnRhaW5lckhlaWdodCA9IF9wcm9wczIubWFpbnRhaW5Db250YWluZXJIZWlnaHQ7XG5cblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW5XaXRoUmVmcygpO1xuICAgIGlmIChsZWF2ZUFuaW1hdGlvbiAmJiBtYWludGFpbkNvbnRhaW5lckhlaWdodCkge1xuICAgICAgY2hpbGRyZW4ucHVzaCh0aGlzLmNyZWF0ZUhlaWdodFBsYWNlaG9sZGVyKCkpO1xuICAgIH1cblxuICAgIGlmICghdHlwZU5hbWUpIHJldHVybiBjaGlsZHJlbjtcblxuICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCBkZWxlZ2F0ZWQsIHtcbiAgICAgIGNoaWxkcmVuOiBjaGlsZHJlbixcbiAgICAgIHJlZjogZnVuY3Rpb24gcmVmKG5vZGUpIHtcbiAgICAgICAgX3RoaXMxMS5wYXJlbnREYXRhLmRvbU5vZGUgPSBub2RlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodHlwZU5hbWUsIHByb3BzKTtcbiAgfTtcblxuICByZXR1cm4gRmxpcE1vdmU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbnZhciBlbmhhbmNlZEZsaXBNb3ZlID0gLyogI19fUFVSRV9fICovcHJvcENvbnZlcnRlcihGbGlwTW92ZSQxKTtcblxuLyoqXG4gKiBSZWFjdCBGbGlwIE1vdmVcbiAqIChjKSAyMDE2LXByZXNlbnQgSm9zaHVhIENvbWVhdVxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZW5oYW5jZWRGbGlwTW92ZTtcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL05hdlwiO1xuaW1wb3J0IFJlc3VsdHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVzdWx0c1wiO1xuaW1wb3J0IHJlcXVlc3RzIGZyb20gXCIuLi91dGlscy9yZXF1ZXN0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcmVzdWx0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SHVsdSAyLjA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxOYXYgLz5cbiAgICAgIDxSZXN1bHRzIHJlc3VsdHM9e3Jlc3VsdHN9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBnZW5yZSA9IGNvbnRleHQucXVlcnkuZ2VucmU7XG5cbiAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS50aGVtb3ZpZWRiLm9yZy8zJHtcbiAgICAgIHJlcXVlc3RzW2dlbnJlXT8udXJsIHx8IHJlcXVlc3RzLmZldGNoVHJlbmRpbmcudXJsXG4gICAgfWBcbiAgKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHJlc3VsdHM6IHJlcXVlc3QucmVzdWx0cyxcbiAgICB9LFxuICB9O1xufVxuIiwiY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52LkFQSV9LRVk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZmV0Y2hUcmVuZGluZzoge1xyXG4gICAgdGl0bGU6IFwiVHJlbmRpbmdcIixcclxuICAgIHVybDogYC90cmVuZGluZy9hbGwvd2Vlaz9hcGlfa2V5PSR7QVBJX0tFWX0mbGFuZ3VhZ2U9ZW4tVVNgLFxyXG4gIH0sXHJcbiAgZmV0Y2hUb3BSYXRlZDoge1xyXG4gICAgdGl0bGU6IFwiVG9wIFJhdGVkXCIsXHJcbiAgICB1cmw6IGAvbW92aWUvdG9wX3JhdGVkP2FwaV9rZXk9JHtBUElfS0VZfSZsYW5ndWFnZT1lbi1VU2AsXHJcbiAgfSxcclxuICBmZXRjaEFjdGlvbk1vdmllczoge1xyXG4gICAgdGl0bGU6IFwiQWN0aW9uXCIsXHJcbiAgICB1cmw6IGAvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTI4YCxcclxuICB9LFxyXG4gIGZldGNoQ29tZWR5TW92aWVzOiB7XHJcbiAgICB0aXRsZTogXCJDb21lZHlcIixcclxuICAgIHVybDogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MzVgLFxyXG4gIH0sXHJcbiAgZmV0Y2hIb3Jyb3JNb3ZpZXM6IHtcclxuICAgIHRpdGxlOiBcIkhvcnJvclwiLFxyXG4gICAgdXJsOiBgL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz0yN2AsXHJcbiAgfSxcclxuICBmZXRjaFJvbWFuY2VNb3ZpZXM6IHtcclxuICAgIHRpdGxlOiBcIlJvbWFuY2VcIixcclxuICAgIHVybDogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MTA3NDlgLFxyXG4gIH0sXHJcbiAgZmV0Y2hNeXN0ZXJ5OiB7XHJcbiAgICB0aXRsZTogXCJNeXN0ZXJ5XCIsXHJcbiAgICB1cmw6IGAvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTk2NDhgLFxyXG4gIH0sXHJcbiAgZmV0Y2hTY2lGaToge1xyXG4gICAgdGl0bGU6IFwiU2NpLUZpXCIsXHJcbiAgICB1cmw6IGAvZGlzY292ZXIvbW92aWU/YXBpX2tleT0ke0FQSV9LRVl9JndpdGhfZ2VucmVzPTg3OGAsXHJcbiAgfSxcclxuICBmZXRjaFdlc3Rlcm46IHtcclxuICAgIHRpdGxlOiBcIldlc3Rlcm5cIixcclxuICAgIHVybDogYC9kaXNjb3Zlci9tb3ZpZT9hcGlfa2V5PSR7QVBJX0tFWX0md2l0aF9nZW5yZXM9MzdgLFxyXG4gIH0sXHJcbiAgZmV0Y2hBbmltYXRpb246IHtcclxuICAgIHRpdGxlOiBcIkFuaW1hdGlvblwiLFxyXG4gICAgdXJsOiBgL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz0xNmAsXHJcbiAgfSxcclxuICBmZXRjaFR2OiB7XHJcbiAgICB0aXRsZTogXCJUViBNb3ZpZVwiLFxyXG4gICAgdXJsOiBgL2Rpc2NvdmVyL21vdmllP2FwaV9rZXk9JHtBUElfS0VZfSZ3aXRoX2dlbnJlcz0xMDc3MGAsXHJcbiAgfSxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb21cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=