/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Poppins&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".shadow {\n  -webkit-box-shadow: 3px 3px 5px 6px #ccc;\n  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */\n  -moz-box-shadow: 3px 3px 5px 6px #ccc;\n  /* Firefox 3.5 - 3.6 */\n  box-shadow: 3px 3px 5px 6px #ccc;\n  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */ }\n\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n*, *:before, *:after {\n  box-sizing: border-box; }\n\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: 'Open Sans', sans-serif;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\nhidden {\n  display: none; }\n\n.shadow {\n  -webkit-box-shadow: 3px 3px 5px 6px #ccc;\n  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */\n  -moz-box-shadow: 3px 3px 5px 6px #ccc;\n  /* Firefox 3.5 - 3.6 */\n  box-shadow: 3px 3px 5px 6px #ccc;\n  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */ }\n\n@media only screen and (max-width: 750px) {\n  .trips-and-booking {\n    display: flex;\n    flex-direction: column;\n    width: 80vh; }\n  .sidecolumn {\n    left: 0;\n    bottom: 0;\n    width: 100%; }\n  .booking {\n    left: 0;\n    bottom: 0;\n    width: 100%; } }\n\n@media only screen and (max-width: 450px) {\n  .trips-and-booking {\n    display: flex;\n    flex-direction: column;\n    width: 80vh; } }\n\n.shadow {\n  -webkit-box-shadow: 3px 3px 5px 6px #ccc;\n  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */\n  -moz-box-shadow: 3px 3px 5px 6px #ccc;\n  /* Firefox 3.5 - 3.6 */\n  box-shadow: 3px 3px 5px 6px #ccc;\n  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */ }\n\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  height: 15vh;\n  width: 100%;\n  top: 0;\n  background-image: linear-gradient(0.25turn, #85BCDA, #067BC1);\n  padding: 1em;\n  opacity: 100%;\n  z-index: 10; }\n\n.welcome-banner {\n  align-self: center;\n  top: 0px;\n  right: 0px;\n  font-family: \"Open Sans\", sans-serif; }\n\n.logo {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-apart; }\n\n.page-title {\n  padding: .5em; }\n\n.shadow {\n  -webkit-box-shadow: 3px 3px 5px 6px #ccc;\n  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */\n  -moz-box-shadow: 3px 3px 5px 6px #ccc;\n  /* Firefox 3.5 - 3.6 */\n  box-shadow: 3px 3px 5px 6px #ccc;\n  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */ }\n\n.login {\n  flex-direction: column;\n  justify-content: center;\n  padding: 10%;\n  align-self: center;\n  width: 100%;\n  height: 80vh; }\n\n.login-field {\n  display: flex;\n  flex-direction: column;\n  padding: 10% 15% 0% 10%;\n  justify-content: center;\n  align-content: center; }\n\n.login-button {\n  cursor: pointer;\n  font-family: \"Poppins\", sans-serif;\n  border: 1px solid black;\n  background-color: #EBC405;\n  padding: 10px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);\n  border-radius: 10px; }\n\n.login-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: auto;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);\n  padding: 2em;\n  border-radius: 10px;\n  background-color: white;\n  padding: 2% 5% 5% 5%; }\n  .login-form input {\n    border-radius: 10px;\n    margin: 10px;\n    padding: 10px; }\n  .login-form button {\n    display: flex;\n    justify-content: center;\n    width: 40%;\n    align-self: center;\n    margin: 15%; }\n  .login-form legend {\n    padding: 1em;\n    font-family: \"Poppins\", sans-serif;\n    font-size: 1.5em;\n    margin: auto; }\n  .login-form fieldset {\n    border: none; }\n\n.shadow {\n  -webkit-box-shadow: 3px 3px 5px 6px #ccc;\n  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */\n  -moz-box-shadow: 3px 3px 5px 6px #ccc;\n  /* Firefox 3.5 - 3.6 */\n  box-shadow: 3px 3px 5px 6px #ccc;\n  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */ }\n\n.money {\n  border: solid 2px #F37848;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);\n  display: flex;\n  align-self: center;\n  justify-content: space-evenly;\n  align-content: center;\n  padding: 1em;\n  margin: 1em;\n  margin-bottom: 2em;\n  border-radius: 10px; }\n  .money h2, .money p {\n    align-self: center;\n    margin: 1em; }\n\n.shadow {\n  -webkit-box-shadow: 3px 3px 5px 6px #ccc;\n  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */\n  -moz-box-shadow: 3px 3px 5px 6px #ccc;\n  /* Firefox 3.5 - 3.6 */\n  box-shadow: 3px 3px 5px 6px #ccc;\n  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */ }\n\n.traveler {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  position: relative; }\n\n.no-trips {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: white;\n  height: 2em;\n  width: auto;\n  padding: 2em; }\n  .no-trips h2, .no-trips p {\n    font-size: smaller; }\n\n.trips-label, .new-trip-title {\n  padding: 2em; }\n\n.trip-card {\n  border: 1px solid black;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-wrap: column;\n  align-items: baseline;\n  justify-content: space-around;\n  z-index: 1;\n  margin-bottom: 2em; }\n  .trip-card .trip-title, .trip-card .new-trip-title {\n    background-color: black;\n    color: white;\n    height: 5%;\n    border-radius: 10px;\n    padding: 1em;\n    width: auto; }\n  .trip-card h2 {\n    padding: 0;\n    margin: auto; }\n  .trip-card .card-info {\n    display: column;\n    background-color: #F4FAFE;\n    padding: 1em;\n    border-radius: 10px;\n    height: 100%;\n    width: 30vh;\n    align-items: flex-end;\n    opacity: 70%;\n    margin: 10%;\n    background-color: black;\n    color: white; }\n  .trip-card h3 {\n    color: #EBC405; }\n  .trip-card img {\n    border-radius: 10px;\n    max-width: 100%;\n    height: 100px; }\n\n.booking-confirmation {\n  display: flex;\n  flex-direction: column;\n  position: relative; }\n  .booking-confirmation .new-trip-title {\n    left: 0;\n    z-index: 9;\n    opacity: 100%;\n    color: #F37848; }\n\n.display-booking-button, .display-destination-form-button {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  font-family: \"Poppins\", sans-serif;\n  border: 1px solid black;\n  background-color: #EBC405;\n  padding: 10px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);\n  border-radius: 10px;\n  width: 20vh;\n  padding-bottom: 1.5em; }\n  .display-booking-button img, .display-destination-form-button img {\n    align-self: center;\n    margin-bottom: -1.5em; }\n\n.booking-area, .add-destination-area {\n  top: 5em;\n  position: fixed;\n  z-index: 60;\n  flex-direction: column;\n  justify-content: center;\n  padding: 3%;\n  align-self: center;\n  width: 80vh;\n  height: 80vh; }\n\n.booking-form, .add-destination-form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: auto;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);\n  padding: 2em;\n  border-radius: 10px;\n  background-color: white;\n  padding: 2% 5% 5% 5%;\n  height: 100%; }\n  .booking-form input, .add-destination-form input {\n    border-radius: 10px;\n    margin: 10px;\n    padding: 10px; }\n  .booking-form button, .add-destination-form button {\n    display: flex;\n    justify-content: center;\n    width: 40%;\n    align-self: center;\n    margin: 15%; }\n  .booking-form legend, .add-destination-form legend {\n    padding: 1em;\n    font-family: \"Poppins\", sans-serif;\n    font-size: 1.5em;\n    margin: auto; }\n  .booking-form fieldset, .add-destination-form fieldset {\n    border: none; }\n  .booking-form select, .add-destination-form select {\n    width: 100%;\n    padding: 10px;\n    border-radius: 10px; }\n\n.booking-field, .add-destination-field {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-content: center;\n  height: 100%; }\n  .booking-field select, .add-destination-field select {\n    border-radius: 10px;\n    margin: 10px;\n    padding: 10px; }\n  .booking-field input, .add-destination-field input {\n    border-radius: 10px;\n    margin: 10px;\n    padding: 10px; }\n  .booking-field button, .add-destination-field button {\n    cursor: pointer;\n    font-family: \"Poppins\", sans-serif;\n    border: 1px solid black;\n    background-color: #85BCDA;\n    padding: 10px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);\n    border-radius: 10px;\n    margin: 0px; }\n\n.booking-exit-button, .add-destination-exit-button {\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);\n  cursor: pointer;\n  font-family: \"Poppins\", sans-serif;\n  border: 1px solid black;\n  background-color: #F37848;\n  padding: 10px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);\n  border-radius: 10px;\n  padding: .5em;\n  position: absolute;\n  top: 3em;\n  left: 3em;\n  color: white;\n  height: 2em;\n  width: 2em; }\n\n.client-interaction {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: auto;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);\n  padding: 2em;\n  border-radius: 10px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: center;\n  border: solid 2px #F37848; }\n  .client-interaction input {\n    border-radius: 10px;\n    margin: 10px;\n    padding: 10px; }\n  .client-interaction button {\n    display: flex;\n    justify-content: center;\n    width: 40%;\n    align-self: center;\n    margin: 15%; }\n  .client-interaction legend {\n    padding: 1em;\n    font-family: \"Poppins\", sans-serif;\n    font-size: 1.5em;\n    margin: auto; }\n  .client-interaction fieldset {\n    border: none; }\n  .client-interaction button {\n    cursor: pointer;\n    font-family: \"Poppins\", sans-serif;\n    border: 1px solid black;\n    background-color: #EBC405;\n    padding: 10px;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);\n    border-radius: 10px; }\n\n.add-destination-area {\n  overflow: auto;\n  align-self: center;\n  top: 15vh; }\n\n.add-destination-form {\n  height: 100vh;\n  margin-top: 0;\n  align-self: center; }\n\n.confirmation {\n  border: solid 2px #F37848;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-content: space-evenly;\n  align-content: center;\n  padding: 1em;\n  margin: 1em;\n  margin-bottom: 2em;\n  border-radius: 10px; }\n  .confirmation h2, .confirmation p {\n    align-self: center;\n    margin: 1em; }\n  .confirmation .new-destination-image {\n    display: flex;\n    align-self: center;\n    height: 10vh;\n    width: 13vh; }\n\n.display-destination-form-button {\n  flex-direction: row;\n  justify-content: baseline; }\n  .display-destination-form-button p {\n    font-size: 1em;\n    margin: 0;\n    padding: .3vh;\n    align-self: center; }\n\n.shadow {\n  -webkit-box-shadow: 3px 3px 5px 6px #ccc;\n  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */\n  -moz-box-shadow: 3px 3px 5px 6px #ccc;\n  /* Firefox 3.5 - 3.6 */\n  box-shadow: 3px 3px 5px 6px #ccc;\n  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */ }\n\n.airplane {\n  height: 6vh;\n  width: 8vh; }\n\n.globe {\n  height: 10vh;\n  width: 10vh;\n  background-color: #067BC1;\n  padding: .5em;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12); }\n\n.travel {\n  height: 10vh;\n  width: 10vh; }\n\n.destination {\n  height: 4vh;\n  width: 4vh; }\n\n* {\n  font-family: \"Open Sans\", sans-serif; }\n\n.hidden {\n  display: none; }\n\n.sticky {\n  position: fixed; }\n\nh1, h2 {\n  font-family: \"Poppins\", sans-serif; }\n\nmain {\n  padding-top: 20vh;\n  display: flex;\n  flex-direction: column;\n  background-color: #F4FAFE; }\n\nlabel {\n  border: none; }\n\n#blockColorblindContent {\n  display: none; }\n", "",{"version":3,"sources":["webpack://./src/css/_variables.scss","webpack://./src/css/_normalize.scss","webpack://./src/css/base.scss","webpack://./src/css/_media-queries.scss","webpack://./src/css/_header.scss","webpack://./src/css/_login.scss","webpack://./src/css/_money.scss","webpack://./src/css/_trips.scss","webpack://./src/css/_booking-form.scss","webpack://./src/css/_client-interaction.scss","webpack://./src/css/_add-destination-form.scss","webpack://./src/css/_icons.scss"],"names":[],"mappings":"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","sourcesContent":["$primary-font:'Open Sans', sans-serif;\n$secondary-font: 'Poppins', sans-serif;\n\n$bold-color1: #067BC1;\n$bold-color2: #85BCDA;\n$bold-color3: #EBC405;\n$bold-color4: #F37848;\n$bold-color5: #F37848;\n$muted-color1: #FEEAEE;\n$muted-color2: #E1F1C3;\n$muted-color3: #F4FAFE;\n\n// @mixin hoverShadow(element) {\n//   #{element}: {\n//       &:hover {\n//       box-shadow: 10px 10px 5px $bold-color5;\n//     }\n//   }\n// }\n\n// @mixin hover() {\n//   background-color: $bold-color2;\n// }\n\n// @mixin shadowStyle() {\n//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n// // }\n\n// @mixin formStyle($padding) {\n//   padding: $padding;\n//   margin:10px 0;\n//   border: 2px solid $bold-color2;\n//   border-radius:10px;\n//   width:100%;\n//   background-color: $bold-color3;\n\n//   input, textarea {\n//     font-family: inherit;\n//     font-size: inherit;\n//     resize: vertical;\n//   }\n// }\n\n// @mixin buttonStyling() {\n//   appearance: none;\n//   -webkit-appearance: none;\n//   padding: 10px;\n//   border: none;\n//   font-weight: 600;\n//   border-radius: 5px;\n//   width: 100%;\n// }\n@mixin boxShadow() {\n  box-shadow: 0 1px 1px rgba(0,0,0,0.12), \n              0 2px 2px rgba(0,0,0,0.12), \n              0 4px 4px rgba(0,0,0,0.12), \n              0 8px 8px rgba(0,0,0,0.12),\n              0 16px 16px rgba(0,0,0,0.12);\n}\n\n.shadow {\n  -webkit-box-shadow: 3px 3px 5px 6px #ccc;  /* Safari 3-4, iOS 4.0.2 - 4.2, Android 2.3+ */\n  -moz-box-shadow:    3px 3px 5px 6px #ccc;  /* Firefox 3.5 - 3.6 */\n  box-shadow:         3px 3px 5px 6px #ccc;  /* Opera 10.5, IE 9, Firefox 4+, Chrome 6+, iOS 5 */\n}\n\n@mixin formStyle() {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  height: auto;\n @include boxShadow()\n  padding: 2em;\n  border-radius: 10px;\n  background-color: white;\n\n  input {\n    border-radius: 10px;\n    margin: 10px;\n    padding: 10px;\n  }\n\n  button {\n    display: flex;\n    justify-content: center;\n    width: 40%;\n    align-self: center;\n    margin: 15%;\n  }\n\n  legend {\n    padding: 1em;\n    font-family: $secondary-font;\n    font-size: 1.5em;\n    margin: auto;\n  }\n\n  fieldset {\n    border: none;\n    \n  }\n}\n\n@mixin buttonStyle($color) {\n  cursor: pointer;\n  font-family: $secondary-font;\n  border: 1px solid black;\n  background-color: $color;\n  padding: 10px;\n @include boxShadow()\n  // display: block;\n @include roundedCorners()\n}\n\n@mixin roundedCorners() {\n  border-radius: 10px;\n}","/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: 'Open Sans', sans-serif; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\nhidden {\n  display: none;\n}","@import \"variables\";\n@import \"normalize\";\n@import \"media-queries\";\n@import \"header\";\n@import \"login\";\n@import \"money\";\n@import \"trips\";\n@import \"booking-form\";\n@import \"client-interaction\";\n@import \"add-destination-form\";\n@import \"icons\";\n@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Poppins&display=swap\");\n\n* {\n  font-family: $primary-font;\n}\n\n.hidden {\n  display: none;\n}\n\n.sticky {\n  position: fixed;\n}\n\nh1, h2 {\n  font-family: $secondary-font;\n}\n\nmain {\n  padding-top: 20vh;\n  display: flex;\n  flex-direction: column;\n  background-color: $muted-color3;\n}\n\nlabel {\n  border: none;\n}\n\n#blockColorblindContent {\n  display: none;\n}\n\n\n\n\n\n\n\n\n\n\n\n","@import \"variables\";\n\n@media only screen and (max-width: 1100px) {\n\n\n}\n\n\n@media only screen and (max-width: 750px) {\n .trips-and-booking {\n  display: flex;\n  flex-direction: column;\n  width: 80vh;\n  }\n\n  .sidecolumn {\n    left: 0;\n    bottom: 0;\n    width: 100%;\n  }\n  \n  .booking {\n    left: 0;\n    bottom: 0;\n    width: 100%;\n  }\n\n}\n\n@media only screen and (max-width: 450px) {\n .trips-and-booking {\n  display: flex;\n  flex-direction: column;\n  width: 80vh;\n  }\n}","@import \"variables\";\n\nheader {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  height: 15vh;\n  width: 100%;\n  top: 0;\n  background-image: linear-gradient(0.25turn, $bold-color2, $bold-color1);\n  padding: 1em;\n  opacity: 100%;\n  z-index: 10;\n}\n\n.welcome-banner {\n  align-self: center;\n  top: 0px;\n  right: 0px;\n  font-family: $primary-font;\n}\n\n.logo {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-apart;\n}\n\n.page-title {\n  padding: .5em;\n}","@import \"variables\";\n\n.login {\n  flex-direction: column;\n  justify-content: center;\n  padding: 10%;\n  align-self: center;\n  width: 100%;\n height: 80vh;\n}\n\n.login-field {\n  display: flex;\n  flex-direction: column;\n  padding: 10% 15% 0% 10%;\n  justify-content: center;\n  align-content: center;\n}\n\n.login-button {\n  @include buttonStyle($bold-color3)\n}\n\n.login-form {\n  @include formStyle();\n  padding: 2% 5% 5% 5%;\n}\n","@import \"variables\";\n\n.money {\n  border: solid 2px $bold-color5;\n  @include boxShadow()\n  display: flex;\n  align-self: center;\n  justify-content: space-evenly;\n  align-content: center;\n  padding: 1em;\n  margin: 1em;\n  margin-bottom: 2em;\n  @include roundedCorners()\n\n  h2, p {\n    align-self: center;\n    margin: 1em;\n  }\n}","@import \"variables\";\n\n.traveler {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  position: relative;\n}\n\n.no-trips {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-evenly;\n  background-color: white;\n  height: 2em;\n  width: auto;\n  padding: 2em;\n\n  h2, p {\n    font-size: smaller;\n  }\n}\n\n.trips-label, .new-trip-title {\n  padding: 2em;\n}\n\n.trip-card, {\n  border: 1px solid black;\n  @include boxShadow()\n  display: flex;\n  flex-wrap: column;\n  align-items: baseline;\n  justify-content: space-around;\n  z-index: 1;\n  margin-bottom: 2em;\n  \n\n  .trip-title, .new-trip-title {\n    background-color: black;\n    color: white;\n    height: 5%;\n    @include roundedCorners()\n    padding: 1em;\n    width: auto;\n    // margin-left: 0;\n  }\n\n  h2 {\n    padding: 0;\n    margin: auto;\n  }\n\n  .card-info {\n    display: column;\n    background-color: $muted-color3;\n    padding: 1em;\n    @include roundedCorners()\n    height: 100%;\n    width: 30vh;\n    align-items: flex-end;\n    opacity: 70%;\n    margin: 10%;\n    background-color: black;\n    color: white;\n    // @include boxShadow()\n  }\n\n  h3 {\n    color: $bold-color3;\n  }\n\n  img {\n    @include roundedCorners()\n    max-width: 100%;\n    height: 100px;\n  }\n\n}\n\n.booking-confirmation {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n\n  .new-trip-title {\n    left: 0;\n    z-index: 9;\n    opacity: 100%;\n    color: $bold-color5;\n  }\n}",".display-booking-button, .display-destination-form-button {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  @include buttonStyle($bold-color3)\n  width: 20vh;\n  padding-bottom: 1.5em;\n\n  img {\n    align-self: center;\n    margin-bottom: -1.5em;\n  }\n\n}\n\n.booking-area, .add-destination-area {\n  top: 5em;\n  position: fixed;\n  z-index: 60;\n  flex-direction: column;\n  justify-content: center;\n  padding: 3%;\n  align-self: center;\n  width: 80vh;\n  height: 80vh;\n}\n\n.booking-form, .add-destination-form {\n  @include formStyle();\n  padding: 2% 5% 5% 5%;\n  height: 100%;\n  \n  select {\n    width: 100%;\n    padding: 10px;\n    border-radius: 10px;\n  }\n}\n\n.booking-field, .add-destination-field {\n  display: flex;\n  flex-direction: column;\n  // padding: 10% 15% 0% 10%;\n  justify-content: center;\n  align-content: center;\n  height: 100%;\n\n  select {\n    border-radius: 10px;\n    margin: 10px;\n    padding: 10px;\n  }\n\n  input {\n    border-radius: 10px;\n    margin: 10px;\n    padding: 10px;\n  }\n\n  button {\n    @include buttonStyle($bold-color2)\n    margin: 0px;\n  }\n}\n\n.booking-exit-button, .add-destination-exit-button {\n  @include boxShadow();\n  @include buttonStyle($bold-color5);\n  padding: .5em;\n  position: absolute;\n  top: 3em;\n  left: 3em;\n  color: white;\n  height:2em;\n  width:2em;\n\n}\n\n",".client-interaction {\n  @include formStyle()\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: center;\n  border: solid 2px $bold-color5;\n\n  button {\n    @include buttonStyle($bold-color3)\n  }\n}",".add-destination-area {\n  overflow: auto;\n  align-self: center;\n  top: 15vh;\n}\n\n.add-destination-form {\n  height: 100vh;\n  margin-top: 0;\n  align-self: center;\n}\n\n.confirmation {\n  border: solid 2px $bold-color5;\n  @include boxShadow()\n  display: flex;\n  flex-direction: column;\n  align-self: center;\n  justify-content: space-evenly;\n  align-content: center;\n  padding: 1em;\n  margin: 1em;\n  margin-bottom: 2em;\n  @include roundedCorners()\n\n  h2, p {\n    align-self: center;\n    margin: 1em;\n  }\n\n  .new-destination-image {\n    display: flex;\n    align-self: center;\n    height: 10vh;\n    width: 13vh;\n  }\n}\n\n.display-destination-form-button {\n  flex-direction: row;\n  justify-content: baseline;\n  p {\n    font-size: 1em;\n    margin: 0;\n    padding: .3vh;\n    align-self: center;\n  }\n}","@import \"variables\";\n\n.airplane {\n  height: 6vh;\n  width: 8vh;\n}\n\n.globe {\n  height: 10vh;\n  width: 10vh;\n  background-color: $bold-color1;\n  padding: .5em;\n  @include boxShadow()\n}\n\n.travel {\n  height: 10vh;\n  width: 10vh;\n}\n\n.destination {\n  height: 4vh;\n  width: 4vh;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Agent.js":
/*!**********************!*\
  !*** ./src/Agent.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Agent {
  constructor() {
    this.name = 'agent' 
  }

  calculateYearlyIncome(trips) {
    const approvedTrips = trips.filter(trip => trip.status === "approved")
    
    const approvedTripsTotal = trips.reduce((total, trip) => {
      const tripTotal = trip.calculateTotalCost()
      if (typeof tripTotal === 'number') {
        total += tripTotal
      }
      return total
    }, 0)
    const cutOfTripsTotal = Math.round(approvedTripsTotal * .1)
  
    return cutOfTripsTotal
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Agent);

/***/ }),

/***/ "./src/Destination.js":
/*!****************************!*\
  !*** ./src/Destination.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Destination {
  constructor(destination) {
      this.id = destination.id
      this.name = destination.destination
      this.estimatedLodgingCostPerDay = destination.estimatedLodgingCostPerDay
      this.estimatedFlightCostPerPerson = destination.estimatedFlightCostPerPerson
      this.image = destination.image
      this.alt = destination.alt
  }

  calculateFee(subtotal) {
    return subtotal + (subtotal * .1) 
  }

  calculateCost(num, priceProperty) {
    return this[priceProperty] * num
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Destination);

/***/ }),

/***/ "./src/Traveler.js":
/*!*************************!*\
  !*** ./src/Traveler.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _test_trips_test_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../test/trips-test-data */ "./test/trips-test-data.js");


class Traveler {
  constructor(traveler, trips) {
    this.id = traveler.id
    this.name = traveler.name
    this.travelerType = traveler.travelerType
    this.trips = this.getTrips(trips)
  }

  getTrips(trips) {
    const userTrips = trips.filter(trip => trip.userID === this.id)
    return userTrips.length ? userTrips : []
  }

  convertDateToNumber(date) {
    return date ? parseInt(date.split('/').join('')) : 0
  }

  getTripsTimeline(today) {
    let tripTimeline = {
      currentTrips: [],
      pastTrips: [],
      upcomingTrips: []
    }

    const approvedTrips = this.trips.filter(trip => trip.status === 'approved')
    approvedTrips.forEach(trip => {
      const todayDateNumber = this.convertDateToNumber(today)
      const startDateNumber = this.convertDateToNumber(trip.date)
      const endDateNumber = this.convertDateToNumber(trip.endDate)

      if (todayDateNumber >= startDateNumber 
        && todayDateNumber <= endDateNumber) {
        tripTimeline.currentTrips.push(trip)
      } else if (todayDateNumber > endDateNumber) {
        tripTimeline.pastTrips.push(trip)
      } else {
        tripTimeline.upcomingTrips.push(trip)
      }
    })

    return tripTimeline
  }

  calculateTotalTripSpending(today) {
    if (!this.trips.length) {
      return 0
    }
    const approvedTripsThisYear = this.trips.filter(trip => {
      return trip.status === 'approved'
      && trip.date.split('/')[0] === today.split('/')[0]
    })

    const totalCostOfAllApprovedTrips = 
      approvedTripsThisYear.reduce((total, trip) => {
        total += trip.calculateTotalCost() 
        return total
      }, 0)
    return totalCostOfAllApprovedTrips
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);

/***/ }),

/***/ "./src/Trip.js":
/*!*********************!*\
  !*** ./src/Trip.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Trip {
  constructor(trip, destinations) {
    this.id = trip.id || Date.now()
    this.userID = trip.userID
    this.getDestination(destinations, trip.destinationID)
    this.travelers = trip.travelers
    this.date = trip.date
    this.duration = trip.duration
    this.status = trip.status || "pending"
    this.suggestedActivities = trip.suggestedActivities
    this.setEndDate() 
  }
  
  getDestination(destinations, destinationID) {
    const matchingDestination = destinations.find(destination => destination.id === destinationID)

    if (matchingDestination) {
      this.destination = matchingDestination 
    } else {
      this.destination = destinationID
    }
  }

  setEndDate() {
    const splitDate = this.date.split('/')
    const dateRearrange = [splitDate[1], splitDate[2], splitDate[0]].join('/')
    const startDate = new Date(dateRearrange)
    const endDateMilliseconds = startDate.setDate(startDate.getDate() + this.duration)
    const endDate = new Date(endDateMilliseconds)
    this.endDate = endDate.toLocaleDateString('en-ZA')
  }

  calculateTotalCost() {
    if (typeof this.destination === "number") {
      return 'This trip requires a valid destination to estimate cost.'
    } else {
      const lodgingCost = this.destination.calculateCost(this.duration, 'estimatedLodgingCostPerDay')
      const flightCost = this.destination.calculateCost(this.travelers, 'estimatedFlightCostPerPerson')
      const totalWithFee = this.destination.calculateFee(lodgingCost + flightCost)
      return totalWithFee
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Trip);

/***/ }),

/***/ "./src/apis.js":
/*!*********************!*\
  !*** ./src/apis.js ***!
  \*********************/
/*! exports provided: getData, postData, deleteTrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postData", function() { return postData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTrip", function() { return deleteTrip; });
// possible databases: 'travelers', 'travelers/${id}', 'trips', 'destinations'

function getData(database, localArray) {
  return fetch(`http://localhost:3001/api/v1/${database}`)
  .then(response => response.json())
  .then(dataObject => {
    dataObject[database].forEach(dataObject => {
      localArray.push(dataObject)
    })
  })
  .catch(error => {
    console.log('FETCH GET ERROR', error)
    alert(`Sorry, there was an error loading the page!`)
  })
}

// post to 'trips'
//{id: <number>, userID: <number>, destinationID: <number>, travelers: <number>, date: <string 'YYYY/MM/DD'>, duration: <number>, status: <string 'approved' or 'pending'>, suggestedActivities: <array of strings>}

// post to 'destinations'
//{id: <number>, destination: <string>, estimatedLodgingCostPerDay: <number>, estimatedFlightCostPerPerson: <number>, image: <string>, alt: <string>}

//post to 'updateTrip'
//{id: <number>, destination: <string>, estimatedLodgingCostPerDay: <number>, estimatedFlightCostPerPerson: <number>, image: <string>, alt: <string>}

function postData(database, bodyPost) {
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(bodyPost)
  }
  return fetch(`http://localhost:3001/api/v1/${database}`, settings)
    .then(response => {
      const responseParsed = response.json()
      console.log('API RESPONSE POST', responseParsed)
      return responseParsed
    })
    .catch(error => {
      console.log('FETCH POST ERROR', error)
      alert(`Sorry, there was an error submitting your data!`)
    })
}

function deleteTrip(tripId) {
  const settings = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`http://localhost:3001/api/v1/trips/${tripId}`, settings)
    .then(response => {
      const responseParsed = response.json()
      console.log('API RESPONSE DELETE', responseParsed)
      return responseParsed
    })
    .catch(error => {
      console.log('FETCH DELETE ERROR', error)
      alert(`Sorry, there is an error deleting this trip!`)
    })
}

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/dom-updates.js":
/*!****************************!*\
  !*** ./src/dom-updates.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const domUpdates = {
  toggle(anyArr) {
    anyArr.forEach(area =>
      document.querySelector(area).classList.toggle("hidden"))
  },

  addDisplay(area, where, what) {
    document.querySelector(area).insertAdjacentHTML(where, what)
  },

  clearDisplay(area) {
    document.querySelector(area).innerHTML = ''
  },

  displayWelcomeBanner(user) {
    this.clearDisplay('h2')
    const firstName = user.name.split(' ')[0]
    const welcomeHTML = `Welcome ${firstName}!`
    this.addDisplay('h2', 'afterbegin', welcomeHTML)
  },

 createBookingsSelection(destinations) {
    let selectionHTML = ''
    destinations.forEach(destination => {
      selectionHTML += `<option value="${destination.name}">
      ${destination.name}</option>`
    });
    this.addDisplay('select', 'beforeend', selectionHTML)
  },

  displayTrips(tripsList, area) {
    this.clearDisplay(area)
    let tripsHTML = ''
    if (!tripsList.length) {
      tripsHTML += `<div class="no-trips">
      ${this.addTripLabel(area)} 
      <p>No trips to display, better book a trip!</p></div>`
    } else {
      tripsHTML = `${this.addTripLabel(area)}`
      tripsHTML += tripsList.map(trip => this.createCardHtml(trip)).join('')
    } 

    this.addDisplay( area, 'beforeend', tripsHTML)
  }, 

  createCardHtml(trip) {
    const suggestedActivities = trip.suggestedActivities.length 
      ? `<h3>Suggested Activites:</h3> 
            <p>${trip.suggestedActivities}</p>`
      : ''
    return `
        <article class="trip-card ${trip.status}" 
        id="${trip.id}" 
        style="background-image: url(${trip.destination.image});"
        alt="${trip.destination.alt}">
          <div class="trip-title">
            <h2>Trip to ${trip.destination.name}</h2>
          </div>
          <div class="card-info">
            <h3>Status:</h3>
              <p>${trip.status}</p>
            <h3>Start Date:</h3>
              <p>${trip.date}</p>
            <h3>Length of Stay:</h3>
              <p>${trip.duration} days</p>
            <h3>Number of Travelers:</h3>
              <p>${trip.travelers}</p>
            ${suggestedActivities}
          </div>
        </article>
        `
  },

  addTripLabel(area) {
    switch (area) {
    case ('.present'):
      return '<h2 class="trips-label">Present Trips</h2>'
    case ('.upcoming'):
      return '<h2 class="trips-label">Upcoming Trips</h2>'
    case ('.pending-trips'):
      return '<h2 class="trips-label">Pending Trips</h2>'
    case ('.approved'):
      return '<h2 class="trips-label">Approved Trips</h2>'
    case ('.rejected'):
      return '<h2 class="trips-label">Rejected Trips</h2>'
    case ('.past'):
      return '<h2 class="trips-label">Past Trips</h2>' 
    case ('.today-travels'):
      return '<h2 class="trips-label">Traveling Today</h2>'
    case ('.pending-for-agent'):
      return '<h2 class="trips-label">Pending Review</h2>'
    }
  },

  confirmTripBookingSubmission(newTrip) {
    this.clearDisplay('.booking-confirmation')
    let confirmationHtml = `<h2 class="new-trip-title">
    Confirmation of New Trip Pending</h2>`
    confirmationHtml += this.createCardHtml(newTrip)
    this.addDisplay('.booking-confirmation', 'beforeend', confirmationHtml)
    this.toggle([
      '.booking-area', 
      '.booking-confirmation'
    ])
  },

  confirmNewDestination(newDestination) {
    this.clearDisplay('.confirmation')

    let confirmationHTML = `<p>Successfully added new destination of 
    </p><h2>${newDestination.name}</h2><p> with estimated lodging cost of 
    </p><h2>$${newDestination.estimatedLodgingCostPerDay} per day</h2><p> 
    with estimated flight cost of 
    </p><h2>$${newDestination.estimatedFlightCostPerPerson} per person round trip</h2><p>
    to the selection of possible places for your clients to travel!</p>
    <img class="new-destination-image" src="${newDestination.image}" alt="${newDestination.alt}">
    `

    this.addDisplay('.confirmation', 'beforeend', confirmationHTML)
  },

  displayTotalTripSpending(user, today) {
    this.clearDisplay('.investment')
    let moneyHTML = '<h2>Yearly Travel Investment</h2>'
    const tripTotal = user.calculateTotalTripSpending(today)
    if (tripTotal) {
      moneyHTML += `<p>$${tripTotal}</p>`
    } else {
      moneyHTML = 'Experiences are investments: book a trip!'
    }
    this.addDisplay( '.investment', 'beforeend', moneyHTML)
  },

  displayTotalIncome(user, trips) {
    this.clearDisplay('.income')
    let moneyHTML = '<h2>Total Yearly Earnings</h2>'
    const incomeTotal = user.calculateYearlyIncome(trips)
    if (incomeTotal) {
      moneyHTML += `<p>$${incomeTotal}</p>`
    } else {
      moneyHTML += 'Work hard, play hard: book some trips!'
    }
    this.addDisplay( '.income', 'beforeend', moneyHTML)
  },

  displaySearchResults(userResults) {
    this.clearDisplay('.user-search-results')
    let searchResultsHTML = `<h2>Search Results</h2>`
    if (userResults.length) {
      userResults.forEach(client => {
      searchResultsHTML +=  `
        <div class="search-result-card ${client.id}">
          <h2>Client Name:</h2>
            <p>${client.name}</p>
          <button class="client-trips-button">All Client Trips</button>
        <div>
        `
      })
       console.log('INEACH', searchResultsHTML)
    } else {
       searchResultsHTML += 'Sorry, no clients found with that name...'
    }
    console.log('BEFORERETURN', searchResultsHTML)
    this.addDisplay('.user-search-results', 'beforeend', searchResultsHTML)
  },

  displayClientTripsForAgent(client) {
    this.clearDisplay('.client-trips')
    this.toggle(['.user-search-results', '.client-trips'])
    let clientTripsHTML = '<div class="client-trips-card"><h2>Client Trips</h2>'
    if (!client.trips.length) {
      clientTripsHTML += `No trips to display, better book some trips!`
    } else {
      clientTripsHTML += client.trips.forEach(trip => {
        return this.createCardHtml(trip) + 
        `
          <div class="agent-trip-interaction"
            <button class="approve-button agent-interaction" 
            aria-label="approve tripbutton">
            Approve Booking
            </button>
            <button class="reject-button agent-interaction" 
            aria-label="reject tripbutton">
            Reject Booking
            </button>
            <button class="delete-trip-button agent-interaction" 
            aria-label="deletetrip button">
            Delete Trip
            </button>
            <button class="back-to-search-results" 
            aria-label="back to seach resultsbutton">
            Back to Search Results
            </button>
          </div>
        </div>
        `
      })
    }
    this.addDisplay('.client-trips', 'beforeend', clientTripsHTML)
  },

  displayAgentConfirmation(trip, confirmingWhat) {
    this.clearDisplay('.confirmation')
    this.toggle(['.confirmation', ])

    const clientName = travelers.find(user => user.id === trips.userID).name
    let confirmationHtml = `
    <h2>Update Confirmed!</h2>
      <p>Trip id #${trip.id} to 
      ${trip.name} for 
      ${clientName} has been 
      ${confirmingWhat}!</p>
    `
    this.addDisplay('.confirmation', 'beforeend', confirmationHtml)
  },

  displayTodayTrips(travelers, today) {
    const todayTrips = travelers.reduce((todayTrips, client) => {
      client.getTripsTimeline(today).currentTrips.forEach(trip => todayTrips.push(trip))
      return todayTrips
    }, [])

    this.displayTrips(todayTrips, '.today-travels')
  },

  displayPendingTrips(trips) {
    const pendingTrips = trips.filter(trip => trip.status === 'pending')

    this.displayTrips(pendingTrips, '.pending-for-agent')
  }
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);

/***/ }),

/***/ "./src/images/airplane.svg":
/*!*********************************!*\
  !*** ./src/images/airplane.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/airplane.svg");

/***/ }),

/***/ "./src/images/destination.svg":
/*!************************************!*\
  !*** ./src/images/destination.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/destination.svg");

/***/ }),

/***/ "./src/images/globe.png":
/*!******************************!*\
  !*** ./src/images/globe.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/globe.png");

/***/ }),

/***/ "./src/images/travel.svg":
/*!*******************************!*\
  !*** ./src/images/travel.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/travel.svg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _images_airplane_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/airplane.svg */ "./src/images/airplane.svg");
/* harmony import */ var _images_globe_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/globe.png */ "./src/images/globe.png");
/* harmony import */ var _images_travel_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/travel.svg */ "./src/images/travel.svg");
/* harmony import */ var _images_destination_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/destination.svg */ "./src/images/destination.svg");
/* harmony import */ var _dom_updates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom-updates */ "./src/dom-updates.js");
/* harmony import */ var _Traveler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Traveler */ "./src/Traveler.js");
/* harmony import */ var _Trip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Trip */ "./src/Trip.js");
/* harmony import */ var _Destination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Destination */ "./src/Destination.js");
/* harmony import */ var _Agent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Agent */ "./src/Agent.js");
/* harmony import */ var _apis__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./apis */ "./src/apis.js");












let travelers = [];
let trips = [];
let destinations = [];
let user, today;

window.addEventListener("load", getPageData);

function addEvent(area, eventType, func) {
  document.querySelector(area).addEventListener(eventType, func)
}

addEvent('.login-button', 'click', login)
addEvent('.display-booking-button', 'click', displayBookingForm)
addEvent('.booking-form', 'submit', bookTrip)
addEvent('.booking-exit-button', 'click', displayBookingForm)
addEvent('.user-search-form', 'submit', searchForUser)
addEvent('.display-destination-form-button', 'click', displayDestinationForm)
addEvent('.add-desination-exit-button', 'click', displayDestinationForm)
addEvent('.add-destination-form', 'submit', addDestination)
addEvent('.user-search-results', 'click', reviewTrips)

function getPageData(event) {
  travelers = [];
  trips = [];
  destinations = [];
  Object(_apis__WEBPACK_IMPORTED_MODULE_10__["getData"])('travelers', travelers),
  Object(_apis__WEBPACK_IMPORTED_MODULE_10__["getData"])('trips', trips),
  Object(_apis__WEBPACK_IMPORTED_MODULE_10__["getData"])('destinations', destinations)
}

function login(event) {
  event.preventDefault()
  getToday()
  convertDataIntoClassInstances()

  const username = document.querySelector('#username').value
  const password = document.querySelector('#password').value

  if (username === 'agency' && password === 'travel2020') {
    user = new _Agent__WEBPACK_IMPORTED_MODULE_9__["default"]
    displayAgentDashboard(user)
    _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].toggle(['.login', '.travel-agent', '.display-destination-form-button'])
  } else if (username.includes('traveler') && password === 'travel2020') {
    findUser(username)
    _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].toggle(['.login', '.traveler', '.display-booking-button'])
    displayUserDashboard(user)
  } else {
    alert('Sorry, check username and password and try again')
    setTimeout(getPageData, 1000)
  }
}

function getToday() {
  const dateToday = new Date()
  today = dateToday.toLocaleDateString('en-ZA')
  const todayForCalendarMin = today.split('/').join('-')
  document.querySelector('.start-date')
    .setAttribute('min', todayForCalendarMin);
}

function convertDataIntoClassInstances() {
  destinations = destinations.map(destination => new _Destination__WEBPACK_IMPORTED_MODULE_8__["default"](destination))
  trips = trips.map(trip => new _Trip__WEBPACK_IMPORTED_MODULE_7__["default"](trip, destinations))
  travelers = travelers.map(traveler => new _Traveler__WEBPACK_IMPORTED_MODULE_6__["default"](traveler, trips))
}

function findUser(username) {
  const userId = parseInt(username.slice(8))
  user = travelers.find(traveler => traveler.id === userId)
}

function displayUserDashboard() {
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayWelcomeBanner(user)
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayTotalTripSpending(user, today)
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].createBookingsSelection(destinations)
  displayUserTrips(today)
}

function displayAgentDashboard(user) {
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayTotalIncome(user, trips)
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayTodayTrips(travelers, today)
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayPendingTrips(trips)
}

function displayUserTrips(today) {
  const pendingTrips = user.trips.filter(trip => trip.status === 'pending')
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayTrips(pendingTrips, '.pending-trips')

  const tripsTimeline = user.getTripsTimeline(today)
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayTrips(tripsTimeline.currentTrips, '.present')
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayTrips(tripsTimeline.upcomingTrips, '.upcoming')
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayTrips(tripsTimeline.pastTrips, '.past') 
}

function displayBookingForm(event) {
  event.preventDefault()  
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].toggle(['.booking-area'])
}

function bookTrip(event) {
  event.preventDefault()

  let startDateInput = document.querySelector('#date').value
  startDateInput = startDateInput.replaceAll('-', '/')
  const durationInput = document.querySelector('#duration').value
  const numTravelersInput = document.querySelector('#num-travelers').value
  let destinationsInput = document.querySelector('#destinations').value
  destinationsInput = destinations.find(destination => 
    (destination.name === destinationsInput)).id

  let postTripBody = {
    id: Date.now(), 
    userID: user.id, 
    destinationID: destinationsInput, 
    travelers: numTravelersInput, 
    date: startDateInput, 
    duration: durationInput, 
    status: 'pending', 
    suggestedActivities: []
  }

  Object(_apis__WEBPACK_IMPORTED_MODULE_10__["postData"])('trips', postTripBody)
    .then(response => {
      const newTripLocal = new _Trip__WEBPACK_IMPORTED_MODULE_7__["default"](response.newTrip, destinations)
      user.trips.push(newTripLocal)
      displayUserDashboard(user)
      _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].confirmTripBookingSubmission(newTripLocal, destinations)
    })
}

function searchForUser(event) {
  event.preventDefault()
  const searchInput = document.querySelector('.user-search-input').value
  const searchResults = travelers.filter(traveler => traveler.name.includes(searchInput))
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displaySearchResults(searchResults)
}

function displayDestinationForm(event) {
  event.preventDefault()
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].toggle(['.add-destination-area'])
}

function addDestination(event) {
  event.preventDefault()

  const destinationInput = document.querySelector('.destination-name').value
  const lodgingPerDayInput = document.querySelector('.lodging-per-day').value
  const flightPerDayInput = document.querySelector('.flight-per-person').value
  const imageInput = document.querySelector('.destination-image').value
  const altInput = document.querySelector('.alt-image').value
  
  const postDestinationBody = {
    id: Date.now(), 
    destination: destinationInput, 
    estimatedLodgingCostPerDay: lodgingPerDayInput, 
    estimatedFlightCostPerPerson: flightPerDayInput, 
    image: imageInput, 
    alt: altInput
  }

  Object(_apis__WEBPACK_IMPORTED_MODULE_10__["postData"])('destinations', postDestinationBody)
    .then(response => {
      const newDestinationLocal = new _Destination__WEBPACK_IMPORTED_MODULE_8__["default"](response.newDestination)
      displayAgentDashboard(user)
      _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].confirmNewDestination(newDestinationLocal)
      _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].toggle(['.add-destination-area', '.confirmation'])
    })

}

function reviewTrips(event) {
  const targetCard = event.target.closest('.search-result-card')
  const targetButtonName = event.target.closest('button').getAttribute('name')

  switch (targetButtonName) {
  case '.client-trips-button':
    showClientTrips(event)
  case 'approve':
    updateTripStatus(reviewedTrip, 'approved')
    break;
  case 'reject':
    updateTripStatus(reviewedTrip, 'rejected')
    break;
  case 'delete':
    deleteClientTrip(tripID)
    break;
  }
}

function showClientTrips(event) {
  const clientID = event.target.closest('search-result-card')
  const client = travelers.find(client => client.id === clientID)

  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayClientTripsForAgent(client)
}

function updateTripStatus(trip, statusUpdate) {
  trip.status = statusUpdate
  displayAgentDashboard()
  _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayAgentConfirmation(trip, statusUpdate)
}

function deleteClientTrip(tripId) {
  Object(_apis__WEBPACK_IMPORTED_MODULE_10__["deleteTrip"])(tripId)
    .then(response => {
      const responseTripId = response.deletedTrip
      const index = trips.indexOf(trip => trip.id === responseTripId)
      trips.splice(index, 1)
      _dom_updates__WEBPACK_IMPORTED_MODULE_5__["default"].displayAgentConfirmation(trip, 'deleted')
    })
}

/***/ }),

/***/ "./test/trips-test-data.js":
/*!*********************************!*\
  !*** ./test/trips-test-data.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const trips = { 
  "trips": [
    {
      "id":1,
      "userID":4,
      "destinationID":1,
      "travelers":1,
      "date":"2019/09/16",
      "duration":8,
      "status":"approved",
      "suggestedActivities":[]
    },
    
    {
      "id":2,
      "userID":2,
      "destinationID":25,
      "travelers":5,
      "date":"2020/10/04",
      "duration":18,
      "status":"pending",
      "suggestedActivities":[]
    },
    {
      "id":3,
      "userID":2,
      "destinationID":2,
      "travelers":4,
      "date":"2020/05/22",
      "duration":17,
      "status":"pending",
      "suggestedActivities":[]
    },
    {
      "id":4,
      "userID":1,
      "destinationID":3,
      "travelers":2,
      "date":"2020/02/25",
      "duration":10,
      "status":"approved",
      "suggestedActivities":[]
    },
    {
      "id":5,
      "userID":1,
      "destinationID":5,
      "travelers":3,
      "date":"2020/04/30",
      "duration":18,
      "status":"approved",
      "suggestedActivities":[]
    }
  ]
}

/* harmony default export */ __webpack_exports__["default"] = (trips);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FnZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9EZXN0aW5hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJhdmVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyaXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3M/MTEwNyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tLXVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9haXJwbGFuZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9kZXN0aW5hdGlvbi5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9nbG9iZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy90cmF2ZWwuc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0L3RyaXBzLXRlc3QtZGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7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QUFNLFlBQVksVUFBVSxhQUFhLGdCQUFnQixNQUFNLE9BQU8sT0FBTyxLQUFLLEtBQUssZ0JBQWdCLE1BQU0sS0FBSyxLQUFLLGdCQUFnQixRQUFRLEtBQUssS0FBSyxVQUFVLGtCQUFrQixNQUFNLE9BQU8sUUFBUSxLQUFLLEtBQUssWUFBWSxVQUFVLFdBQVcsVUFBVSxZQUFZLGdCQUFnQixRQUFRLEtBQUssS0FBSyxZQUFZLFVBQVUsV0FBVyxnQkFBZ0IsTUFBTSxPQUFPLE9BQU8sS0FBSyxLQUFLLGtCQUFrQixRQUFRLEtBQUssS0FBSyxZQUFZLFVBQVUsYUFBYSxVQUFVLGFBQWEsZ0JBQWdCLE9BQU8sS0FBSyxNQUFNLGtCQUFrQixRQUFRLEtBQUssT0FBTyxZQUFZLFVBQVUsV0FBVyxnQkFBZ0IsT0FBTyxLQUFLLEtBQUssZ0JBQWdCLFFBQVEsS0FBSyxNQUFNLFVBQVUsVUFBVSxZQUFZLG1CQUFtQixNQUFNLGdCQUFnQixNQUFNLGdCQUFnQixLQUFLLE9BQU8sT0FBTyxLQUFLLEtBQUssa0JBQWtCLE1BQU0sT0FBTyxRQUFRLEtBQUssVUFBVSxZQUFZLFVBQVUsV0FBVyxVQUFVLGFBQWEsVUFBVSxXQUFXLGdCQUFnQixRQUFRLEtBQUssTUFBTSxVQUFVLGtCQUFrQixRQUFRLEtBQUssTUFBTSxVQUFVLGtCQUFrQixPQUFPLEtBQUssU0FBUyxrQkFBa0IsT0FBTyxLQUFLLFNBQVMsWUFBWSxpQkFBaUIsTUFBTSxNQUFNLFNBQVMsa0JBQWtCLE9BQU8sTUFBTSxNQUFNLGtCQUFrQixVQUFVLE1BQU0sTUFBTSxZQUFZLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFlBQVksZ0JBQWdCLE9BQU8sTUFBTSxNQUFNLGtCQUFrQixPQUFPLE1BQU0sTUFBTSxnQkFBZ0IsUUFBUSxNQUFNLE1BQU0sYUFBYSxVQUFVLFdBQVcsZ0JBQWdCLE9BQU8sTUFBTSxNQUFNLGlCQUFpQixPQUFPLE1BQU0sS0FBSyxhQUFhLFVBQVUsYUFBYSxnQkFBZ0IsT0FBTyxNQUFNLEtBQUssbUJBQW1CLFFBQVEsTUFBTSxNQUFNLFlBQVksVUFBVSxXQUFXLGdCQUFnQixNQUFNLFFBQVEsUUFBUSxNQUFNLE1BQU0sZ0JBQWdCLE9BQU8sTUFBTSxNQUFNLGtCQUFrQixNQUFNLFFBQVEsUUFBUSxNQUFNLE1BQU0sZ0JBQWdCLE1BQU0sTUFBTSxNQUFNLGdCQUFnQixNQUFNLFlBQVksV0FBVyxhQUFhLFdBQVcsYUFBYSxrQkFBa0IsT0FBTyxLQUFLLFVBQVUsWUFBWSxnQkFBZ0IsS0FBSyxVQUFVLFVBQVUsZUFBZSxLQUFLLFVBQVUsVUFBVSxxQkFBcUIsS0FBSyxLQUFLLFVBQVUsWUFBWSxzQkFBc0IsTUFBTSxZQUFZLFdBQVcsYUFBYSxXQUFXLGFBQWEsa0JBQWtCLE9BQU8sVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsZ0JBQWdCLEtBQUssWUFBWSxXQUFXLFVBQVUsbUJBQW1CLE9BQU8sVUFBVSxZQUFZLG1CQUFtQixNQUFNLGdCQUFnQixNQUFNLFlBQVksV0FBVyxhQUFhLFdBQVcsYUFBYSxrQkFBa0IsT0FBTyxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsZ0JBQWdCLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxtQkFBbUIsTUFBTSxXQUFXLGFBQWEsY0FBYyxjQUFjLFlBQVksYUFBYSxvQkFBb0IsT0FBTyxXQUFXLFlBQVksYUFBYSxXQUFXLGFBQWEsV0FBVyxZQUFZLGFBQWEsbUJBQW1CLE9BQU8sWUFBWSxXQUFXLGVBQWUsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGdCQUFnQixLQUFLLFVBQVUsYUFBYSxjQUFjLGdCQUFnQixLQUFLLGdCQUFnQixPQUFPLFlBQVksV0FBVyxhQUFhLFdBQVcsYUFBYSxrQkFBa0IsT0FBTyxZQUFZLGNBQWMsWUFBWSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxtQkFBbUIsT0FBTyxZQUFZLGlCQUFpQixNQUFNLFlBQVksV0FBVyxhQUFhLFdBQVcsYUFBYSxrQkFBa0IsT0FBTyxVQUFVLFlBQVksYUFBYSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLGVBQWUsS0FBSyxrQkFBa0IsTUFBTSxnQkFBZ0IsS0FBSyxZQUFZLGNBQWMsWUFBWSxZQUFZLGFBQWEsYUFBYSxXQUFXLGlCQUFpQixNQUFNLFlBQVksV0FBVyxVQUFVLGFBQWEsWUFBWSxlQUFlLE1BQU0sV0FBVyxlQUFlLE9BQU8sV0FBVyxhQUFhLFlBQVksYUFBYSxZQUFZLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxnQkFBZ0IsT0FBTyxrQkFBa0IsT0FBTyxhQUFhLFlBQVksZ0JBQWdCLE1BQU0sVUFBVSxZQUFZLGtCQUFrQixNQUFNLFVBQVUsVUFBVSxVQUFVLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxhQUFhLGNBQWMsY0FBYyxZQUFZLGFBQWEsY0FBYyxZQUFZLGlCQUFpQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLGdCQUFnQixLQUFLLFdBQVcsWUFBWSxhQUFhLFdBQVcsYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLGdCQUFnQixNQUFNLFlBQVksV0FBVyxlQUFlLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxnQkFBZ0IsS0FBSyxVQUFVLGFBQWEsY0FBYyxnQkFBZ0IsS0FBSyxlQUFlLE9BQU8sVUFBVSxVQUFVLGtCQUFrQixNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsZ0JBQWdCLEtBQUssWUFBWSxXQUFXLGVBQWUsTUFBTSxZQUFZLFdBQVcsZUFBZSxPQUFPLFdBQVcsYUFBYSxjQUFjLGNBQWMsWUFBWSxhQUFhLGNBQWMsa0JBQWtCLEtBQUssWUFBWSxZQUFZLGFBQWEsY0FBYyxjQUFjLFlBQVksYUFBYSxjQUFjLFlBQVksWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLGdCQUFnQixNQUFNLFdBQVcsWUFBWSxhQUFhLFdBQVcsYUFBYSxXQUFXLFlBQVksYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGtCQUFrQixPQUFPLFlBQVksV0FBVyxlQUFlLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxnQkFBZ0IsS0FBSyxVQUFVLGFBQWEsY0FBYyxnQkFBZ0IsS0FBSyxlQUFlLE9BQU8sV0FBVyxhQUFhLGNBQWMsY0FBYyxZQUFZLGFBQWEsb0JBQW9CLE9BQU8sVUFBVSxZQUFZLGlCQUFpQixLQUFLLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxZQUFZLGNBQWMsWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLG1CQUFtQixPQUFPLFlBQVksZ0JBQWdCLEtBQUssV0FBVyxZQUFZLFdBQVcsZ0JBQWdCLEtBQUssWUFBWSxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxZQUFZLFdBQVcsYUFBYSxXQUFXLGFBQWEsa0JBQWtCLE9BQU8sVUFBVSxnQkFBZ0IsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLG1CQUFtQixPQUFPLFVBQVUsZ0JBQWdCLEtBQUssVUFBVSxnQkFBZ0IsS0FBSyxrQkFBa0IsT0FBTyxnQkFBZ0IsS0FBSyxnQkFBZ0IsTUFBTSxtQkFBbUIsT0FBTyxZQUFZLFdBQVcsWUFBWSxvQkFBb0IsT0FBTyxnQkFBZ0IsS0FBSyx5RUFBeUUseUNBQXlDLDBCQUEwQix3QkFBd0Isd0JBQXdCLHdCQUF3Qix3QkFBd0IseUJBQXlCLHlCQUF5Qix5QkFBeUIsb0NBQW9DLFNBQVMsUUFBUSxHQUFHLG9CQUFvQixrREFBa0QsVUFBVSxRQUFRLE1BQU0sdUJBQXVCLHNDQUFzQyxNQUFNLDZCQUE2QixvRkFBb0YsU0FBUyxtQ0FBbUMseUJBQXlCLHFCQUFxQixzQ0FBc0MsMEJBQTBCLGtCQUFrQixzQ0FBc0MsMEJBQTBCLDhCQUE4Qiw0QkFBNEIsMEJBQTBCLFFBQVEsTUFBTSwrQkFBK0Isd0JBQXdCLGdDQUFnQyxxQkFBcUIsb0JBQW9CLHdCQUF3QiwwQkFBMEIsbUJBQW1CLE1BQU0sc0JBQXNCLDROQUE0TixHQUFHLGFBQWEsNkNBQTZDLDhGQUE4RixzRUFBc0UseURBQXlELHdCQUF3QixrQkFBa0IsMkJBQTJCLDRCQUE0QixpQkFBaUIsd0NBQXdDLHdCQUF3Qiw0QkFBNEIsYUFBYSwwQkFBMEIsbUJBQW1CLG9CQUFvQixLQUFLLGNBQWMsb0JBQW9CLDhCQUE4QixpQkFBaUIseUJBQXlCLGtCQUFrQixLQUFLLGNBQWMsbUJBQW1CLG1DQUFtQyx1QkFBdUIsbUJBQW1CLEtBQUssZ0JBQWdCLG1CQUFtQixXQUFXLEdBQUcsZ0NBQWdDLG9CQUFvQixpQ0FBaUMsNEJBQTRCLDZCQUE2QixrQkFBa0IsNkNBQTZDLCtCQUErQiw2QkFBNkIsd0JBQXdCLEdBQUcsOFVBQThVLDJCQUEyQixHQUFHLFVBQVUsc0JBQXNCLDJDQUEyQyxXQUFXLDhKQUE4SixjQUFjLEdBQUcsd0VBQXdFLG1CQUFtQixHQUFHLHNKQUFzSixtQkFBbUIscUJBQXFCLEdBQUcsb05BQW9OLDRCQUE0QixzQkFBc0IsOEJBQThCLFdBQVcsdUpBQXVKLHlDQUF5QywyQkFBMkIsV0FBVyx5TEFBeUwsa0NBQWtDLEdBQUcsMEpBQTBKLHdCQUF3Qix1Q0FBdUMsOENBQThDLFdBQVcseUZBQXlGLHdCQUF3QixHQUFHLHFLQUFxSyxzQ0FBc0MsMkJBQTJCLFdBQVcsc0VBQXNFLG1CQUFtQixHQUFHLG9IQUFvSCxtQkFBbUIsbUJBQW1CLHVCQUF1Qiw2QkFBNkIsR0FBRyxTQUFTLG9CQUFvQixHQUFHLFNBQVMsZ0JBQWdCLEdBQUcscUxBQXFMLHVCQUF1QixHQUFHLDRQQUE0UCx5QkFBeUIsNEJBQTRCLDhCQUE4QixzQkFBc0IsV0FBVywrRkFBK0YsOEJBQThCLEdBQUcsb0tBQW9LLGlDQUFpQyxHQUFHLHlKQUF5SiwrQkFBK0IsR0FBRywrTUFBK00sdUJBQXVCLGVBQWUsR0FBRyx3TUFBd00sbUNBQW1DLEdBQUcsOERBQThELG1DQUFtQyxHQUFHLHdRQUF3USwyQkFBMkIsMkJBQTJCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLGdDQUFnQyxXQUFXLGdHQUFnRyw2QkFBNkIsR0FBRywrRUFBK0UsbUJBQW1CLEdBQUcsd0lBQXdJLDJCQUEyQix1QkFBdUIsV0FBVyx3TEFBd0wsaUJBQWlCLEdBQUcsdUlBQXVJLGtDQUFrQyxpQ0FBaUMsV0FBVywwSEFBMEgsNkJBQTZCLEdBQUcsNktBQTZLLCtCQUErQiwwQkFBMEIsV0FBVyxzTEFBc0wsbUJBQW1CLEdBQUcscUVBQXFFLHVCQUF1QixHQUFHLDhKQUE4SixrQkFBa0IsR0FBRyw4REFBOEQsa0JBQWtCLEdBQUcseUJBQXlCLHdCQUF3Qiw0QkFBNEIscUJBQXFCLG9CQUFvQixvQkFBb0Isb0JBQW9CLDJCQUEyQixpQ0FBaUMsbUNBQW1DLG9CQUFvQiwyR0FBMkcsT0FBTywrQkFBK0IsR0FBRyxhQUFhLGtCQUFrQixHQUFHLGFBQWEsb0JBQW9CLEdBQUcsWUFBWSxpQ0FBaUMsR0FBRyxVQUFVLHNCQUFzQixrQkFBa0IsMkJBQTJCLG9DQUFvQyxHQUFHLFdBQVcsaUJBQWlCLEdBQUcsNkJBQTZCLGtCQUFrQixHQUFHLGlEQUFpRCxnREFBZ0QsT0FBTyxpREFBaUQsdUJBQXVCLGtCQUFrQiwyQkFBMkIsZ0JBQWdCLEtBQUssbUJBQW1CLGNBQWMsZ0JBQWdCLGtCQUFrQixLQUFLLGtCQUFrQixjQUFjLGdCQUFnQixrQkFBa0IsS0FBSyxLQUFLLCtDQUErQyx1QkFBdUIsa0JBQWtCLDJCQUEyQixnQkFBZ0IsS0FBSyxHQUFHLHlCQUF5QixZQUFZLGtCQUFrQix3QkFBd0Isa0NBQWtDLGlCQUFpQixnQkFBZ0IsV0FBVyw0RUFBNEUsaUJBQWlCLGtCQUFrQixnQkFBZ0IsR0FBRyxxQkFBcUIsdUJBQXVCLGFBQWEsZUFBZSwrQkFBK0IsR0FBRyxXQUFXLGtCQUFrQix3QkFBd0IsaUNBQWlDLEdBQUcsaUJBQWlCLGtCQUFrQixHQUFHLHlCQUF5QixZQUFZLDJCQUEyQiw0QkFBNEIsaUJBQWlCLHVCQUF1QixnQkFBZ0IsZ0JBQWdCLEdBQUcsa0JBQWtCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLDRCQUE0QiwwQkFBMEIsR0FBRyxtQkFBbUIseUNBQXlDLGlCQUFpQix5QkFBeUIseUJBQXlCLEdBQUcsMkJBQTJCLFlBQVksbUNBQW1DLDBDQUEwQyx1QkFBdUIsa0NBQWtDLDBCQUEwQixpQkFBaUIsZ0JBQWdCLHVCQUF1QiwwQ0FBMEMseUJBQXlCLGtCQUFrQixLQUFLLEdBQUcseUJBQXlCLGVBQWUsa0JBQWtCLDJCQUEyQixrQ0FBa0MsdUJBQXVCLEdBQUcsZUFBZSxrQkFBa0Isd0JBQXdCLHdCQUF3QixrQ0FBa0MsNEJBQTRCLGdCQUFnQixnQkFBZ0IsaUJBQWlCLGFBQWEseUJBQXlCLEtBQUssR0FBRyxtQ0FBbUMsaUJBQWlCLEdBQUcsaUJBQWlCLDRCQUE0QiwwQ0FBMEMsc0JBQXNCLDBCQUEwQixrQ0FBa0MsZUFBZSx1QkFBdUIsd0NBQXdDLDhCQUE4QixtQkFBbUIsaUJBQWlCLGtEQUFrRCxrQkFBa0Isd0JBQXdCLEtBQUssVUFBVSxpQkFBaUIsbUJBQW1CLEtBQUssa0JBQWtCLHNCQUFzQixzQ0FBc0MsbUJBQW1CLGtEQUFrRCxrQkFBa0IsNEJBQTRCLG1CQUFtQixrQkFBa0IsOEJBQThCLG1CQUFtQixrQ0FBa0MsVUFBVSwwQkFBMEIsS0FBSyxXQUFXLHFEQUFxRCxvQkFBb0IsS0FBSyxLQUFLLDJCQUEyQixrQkFBa0IsMkJBQTJCLHVCQUF1Qix1QkFBdUIsY0FBYyxpQkFBaUIsb0JBQW9CLDBCQUEwQixLQUFLLEdBQUcsOERBQThELGtCQUFrQiwyQkFBMkIsd0JBQXdCLDRCQUE0QixzREFBc0QsMEJBQTBCLFdBQVcseUJBQXlCLDRCQUE0QixLQUFLLEtBQUssMENBQTBDLGFBQWEsb0JBQW9CLGdCQUFnQiwyQkFBMkIsNEJBQTRCLGdCQUFnQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixHQUFHLDBDQUEwQyx5QkFBeUIseUJBQXlCLGlCQUFpQixnQkFBZ0Isa0JBQWtCLG9CQUFvQiwwQkFBMEIsS0FBSyxHQUFHLDRDQUE0QyxrQkFBa0IsMkJBQTJCLCtCQUErQiw0QkFBNEIsMEJBQTBCLGlCQUFpQixjQUFjLDBCQUEwQixtQkFBbUIsb0JBQW9CLEtBQUssYUFBYSwwQkFBMEIsbUJBQW1CLG9CQUFvQixLQUFLLGNBQWMsMERBQTBELEtBQUssR0FBRyx3REFBd0QseUJBQXlCLHVDQUF1QyxrQkFBa0IsdUJBQXVCLGFBQWEsY0FBYyxpQkFBaUIsZUFBZSxjQUFjLEtBQUssNEJBQTRCLDBDQUEwQywyQkFBMkIsMEJBQTBCLDRCQUE0QixtQ0FBbUMsY0FBYyw2Q0FBNkMsR0FBRywwQkFBMEIsbUJBQW1CLHVCQUF1QixjQUFjLEdBQUcsMkJBQTJCLGtCQUFrQixrQkFBa0IsdUJBQXVCLEdBQUcsbUJBQW1CLG1DQUFtQywwQ0FBMEMsMkJBQTJCLHVCQUF1QixrQ0FBa0MsMEJBQTBCLGlCQUFpQixnQkFBZ0IsdUJBQXVCLDBDQUEwQyx5QkFBeUIsa0JBQWtCLEtBQUssOEJBQThCLG9CQUFvQix5QkFBeUIsbUJBQW1CLGtCQUFrQixLQUFLLEdBQUcsc0NBQXNDLHdCQUF3Qiw4QkFBOEIsT0FBTyxxQkFBcUIsZ0JBQWdCLG9CQUFvQix5QkFBeUIsS0FBSyxHQUFHLHlCQUF5QixlQUFlLGdCQUFnQixlQUFlLEdBQUcsWUFBWSxpQkFBaUIsZ0JBQWdCLG1DQUFtQyxrQkFBa0IsMkJBQTJCLGFBQWEsaUJBQWlCLGdCQUFnQixHQUFHLGtCQUFrQixnQkFBZ0IsZUFBZSxHQUFHLG1CQUFtQjtBQUMvNnpDO0FBQ2Usc0ZBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLHFCQUFxQjtBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixpQ0FBaUMsMkhBQTJIOztBQUU1Siw2QkFBNkIsa0tBQWtLOztBQUUvTCxpREFBaUQsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRCxrSEFBa0g7O0FBRTlaLHNDQUFzQyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxrQkFBa0IsRUFBRSxhQUFhOztBQUVyTCx3Q0FBd0MsZ0ZBQWdGLGVBQWUsZUFBZSxnQkFBZ0Isb0JBQW9CLE1BQU0sMENBQTBDLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUV2ZSwrQkFBK0Isb0NBQW9DOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQy9CYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzVRQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSxvRUFBSyxFOzs7Ozs7Ozs7Ozs7QUNyQnBCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSwwRUFBVyxFOzs7Ozs7Ozs7Ozs7QUNuQjFCO0FBQUE7QUFBNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFZSx1RUFBUSxFOzs7Ozs7Ozs7Ozs7QUNoRXZCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRTs7Ozs7Ozs7Ozs7O0FDNUNuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlEQUFpRCxHQUFHOztBQUU3QztBQUNQLCtDQUErQyxTQUFTO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLEdBQUc7O0FBRUk7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsK0NBQStDLFNBQVM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELE9BQU87QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEM7Ozs7Ozs7Ozs7OztBQzlEQTtBQUFBO0FBQUE7QUFBQTtBQUE0RjtBQUM1RixZQUFxSTs7QUFFckk7O0FBRUE7QUFDQTs7QUFFQSxhQUFhLDBHQUFHLENBQUMsMkhBQU87Ozs7QUFJVCwwTEFBTyxhQUFhLEU7Ozs7Ozs7Ozs7OztBQ1puQztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsVUFBVTtBQUM3QztBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLGlCQUFpQjtBQUMxRCxRQUFRLGlCQUFpQjtBQUN6QixLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdCO0FBQ1I7QUFDQSxLQUFLO0FBQ0wscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBLEs7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQix5QkFBeUI7QUFDMUM7QUFDQTtBQUNBLG9DQUFvQyxZQUFZO0FBQ2hELGNBQWMsUUFBUTtBQUN0Qix1Q0FBdUMsdUJBQXVCLEVBQUU7QUFDaEUsZUFBZSxxQkFBcUI7QUFDcEM7QUFDQSwwQkFBMEIsc0JBQXNCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0EsbUJBQW1CLFVBQVU7QUFDN0I7QUFDQSxtQkFBbUIsY0FBYztBQUNqQztBQUNBLG1CQUFtQixlQUFlO0FBQ2xDLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLGNBQWMsb0JBQW9CO0FBQ2xDLGVBQWUsMENBQTBDO0FBQ3pEO0FBQ0EsZUFBZSw0Q0FBNEM7QUFDM0Q7QUFDQSw4Q0FBOEMscUJBQXFCLFNBQVMsbUJBQW1CO0FBQy9GOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFVBQVU7QUFDcEMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixZQUFZO0FBQ3RDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QyxVQUFVO0FBQ25EO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFFBQVE7QUFDNUIsUUFBUSxVQUFVO0FBQ2xCLFFBQVEsV0FBVztBQUNuQixRQUFRLGVBQWU7QUFDdkI7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFZSx5RUFBVSxFOzs7Ozs7Ozs7Ozs7QUN4T3pCO0FBQWUsb0ZBQXFCLEU7Ozs7Ozs7Ozs7OztBQ0FwQztBQUFlLHVGQUF3QixFOzs7Ozs7Ozs7Ozs7QUNBdkM7QUFBZSxpRkFBa0IsRTs7Ozs7Ozs7Ozs7O0FDQWpDO0FBQWUsa0ZBQW1CLEU7Ozs7Ozs7Ozs7OztBQ0FsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUI7QUFDTTtBQUNIO0FBQ0M7QUFDSztBQUNLO0FBQ0w7QUFDUjtBQUNjO0FBQ1o7QUFDeUI7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHNEQUFPO0FBQ1QsRUFBRSxzREFBTztBQUNULEVBQUUsc0RBQU87QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSw4Q0FBSztBQUNwQjtBQUNBLElBQUksb0RBQVU7QUFDZCxHQUFHO0FBQ0g7QUFDQSxJQUFJLG9EQUFVO0FBQ2Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQsb0RBQVc7QUFDaEUsZ0NBQWdDLDZDQUFJO0FBQ3BDLDRDQUE0QyxpREFBUTtBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEVBQUUsb0RBQVU7QUFDWixFQUFFLG9EQUFVO0FBQ1osRUFBRSxvREFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLG9EQUFVO0FBQ1osRUFBRSxvREFBVTtBQUNaLEVBQUUsb0RBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxvREFBVTs7QUFFWjtBQUNBLEVBQUUsb0RBQVU7QUFDWixFQUFFLG9EQUFVO0FBQ1osRUFBRSxvREFBVTtBQUNaOztBQUVBO0FBQ0E7QUFDQSxFQUFFLG9EQUFVO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxFQUFFLHVEQUFRO0FBQ1Y7QUFDQSwrQkFBK0IsNkNBQUk7QUFDbkM7QUFDQTtBQUNBLE1BQU0sb0RBQVU7QUFDaEIsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxvREFBVTtBQUNaOztBQUVBO0FBQ0E7QUFDQSxFQUFFLG9EQUFVO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSx1REFBUTtBQUNWO0FBQ0Esc0NBQXNDLG9EQUFXO0FBQ2pEO0FBQ0EsTUFBTSxvREFBVTtBQUNoQixNQUFNLG9EQUFVO0FBQ2hCLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLEVBQUUsb0RBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLG9EQUFVO0FBQ1o7O0FBRUE7QUFDQSxFQUFFLHlEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLG9EQUFVO0FBQ2hCLEtBQUs7QUFDTCxDOzs7Ozs7Ozs7Ozs7QUM5TkE7QUFBQSxlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSxvRUFBSyxFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDMwMCZmYW1pbHk9UG9wcGlucyZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuc2hhZG93IHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICNjY2M7XFxuICAvKiBTYWZhcmkgMy00LCBpT1MgNC4wLjIgLSA0LjIsIEFuZHJvaWQgMi4zKyAqL1xcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcXG4gIC8qIEZpcmVmb3ggMy41IC0gMy42ICovXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcXG4gIC8qIE9wZXJhIDEwLjUsIElFIDksIEZpcmVmb3ggNCssIENocm9tZSA2KywgaU9TIDUgKi8gfVxcblxcbi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgLyogMiAqLyB9XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7IH1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcbiAgLyogMSAqL1xcbiAgaGVpZ2h0OiAwO1xcbiAgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07XFxuICAvKiAyICovIH1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gIC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlOyB9XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07IH1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07IH1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7IH1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7XFxuICAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTtcXG4gIC8qIDEgKi9cXG4gIG1hcmdpbjogMDtcXG4gIC8qIDIgKi8gfVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gIC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7IH1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyB9XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDsgfVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07IH1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgLyogMSAqL1xcbiAgcGFkZGluZzogMDtcXG4gIC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAvKiAxICovIH1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvOyB9XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAvKiAxICovXFxuICBwYWRkaW5nOiAwO1xcbiAgLyogMiAqLyB9XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvOyB9XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xcbiAgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XFxuICAvKiAyICovIH1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxuICAvKiAxICovXFxuICBmb250OiBpbmhlcml0O1xcbiAgLyogMiAqLyB9XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07IH1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcbmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnNoYWRvdyB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xcbiAgLyogU2FmYXJpIDMtNCwgaU9TIDQuMC4yIC0gNC4yLCBBbmRyb2lkIDIuMysgKi9cXG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICNjY2M7XFxuICAvKiBGaXJlZm94IDMuNSAtIDMuNiAqL1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICNjY2M7XFxuICAvKiBPcGVyYSAxMC41LCBJRSA5LCBGaXJlZm94IDQrLCBDaHJvbWUgNissIGlPUyA1ICovIH1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuICAudHJpcHMtYW5kLWJvb2tpbmcge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODB2aDsgfVxcbiAgLnNpZGVjb2x1bW4ge1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlOyB9XFxuICAuYm9va2luZyB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7IH0gfVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gIC50cmlwcy1hbmQtYm9va2luZyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHdpZHRoOiA4MHZoOyB9IH1cXG5cXG4uc2hhZG93IHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICNjY2M7XFxuICAvKiBTYWZhcmkgMy00LCBpT1MgNC4wLjIgLSA0LjIsIEFuZHJvaWQgMi4zKyAqL1xcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcXG4gIC8qIEZpcmVmb3ggMy41IC0gMy42ICovXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcXG4gIC8qIE9wZXJhIDEwLjUsIElFIDksIEZpcmVmb3ggNCssIENocm9tZSA2KywgaU9TIDUgKi8gfVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDA7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMC4yNXR1cm4sICM4NUJDREEsICMwNjdCQzEpO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgb3BhY2l0eTogMTAwJTtcXG4gIHotaW5kZXg6IDEwOyB9XFxuXFxuLndlbGNvbWUtYmFubmVyIHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiT3BlbiBTYW5zXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbi5sb2dvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcGFydDsgfVxcblxcbi5wYWdlLXRpdGxlIHtcXG4gIHBhZGRpbmc6IC41ZW07IH1cXG5cXG4uc2hhZG93IHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICNjY2M7XFxuICAvKiBTYWZhcmkgMy00LCBpT1MgNC4wLjIgLSA0LjIsIEFuZHJvaWQgMi4zKyAqL1xcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcXG4gIC8qIEZpcmVmb3ggMy41IC0gMy42ICovXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcXG4gIC8qIE9wZXJhIDEwLjUsIElFIDksIEZpcmVmb3ggNCssIENocm9tZSA2KywgaU9TIDUgKi8gfVxcblxcbi5sb2dpbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogODB2aDsgfVxcblxcbi5sb2dpbi1maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwJSAxNSUgMCUgMTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4ubG9naW4tYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNFQkM0MDU7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XFxuXFxuLmxvZ2luLWZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDE2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMiUgNSUgNSUgNSU7IH1cXG4gIC5sb2dpbi1mb3JtIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAubG9naW4tZm9ybSBidXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDE1JTsgfVxcbiAgLmxvZ2luLWZvcm0gbGVnZW5kIHtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBtYXJnaW46IGF1dG87IH1cXG4gIC5sb2dpbi1mb3JtIGZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiBub25lOyB9XFxuXFxuLnNoYWRvdyB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xcbiAgLyogU2FmYXJpIDMtNCwgaU9TIDQuMC4yIC0gNC4yLCBBbmRyb2lkIDIuMysgKi9cXG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICNjY2M7XFxuICAvKiBGaXJlZm94IDMuNSAtIDMuNiAqL1xcbiAgYm94LXNoYWRvdzogM3B4IDNweCA1cHggNnB4ICNjY2M7XFxuICAvKiBPcGVyYSAxMC41LCBJRSA5LCBGaXJlZm94IDQrLCBDaHJvbWUgNissIGlPUyA1ICovIH1cXG5cXG4ubW9uZXkge1xcbiAgYm9yZGVyOiBzb2xpZCAycHggI0YzNzg0ODtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDE2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWFyZ2luOiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XFxuICAubW9uZXkgaDIsIC5tb25leSBwIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDFlbTsgfVxcblxcbi5zaGFkb3cge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcXG4gIC8qIFNhZmFyaSAzLTQsIGlPUyA0LjAuMiAtIDQuMiwgQW5kcm9pZCAyLjMrICovXFxuICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xcbiAgLyogRmlyZWZveCAzLjUgLSAzLjYgKi9cXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xcbiAgLyogT3BlcmEgMTAuNSwgSUUgOSwgRmlyZWZveCA0KywgQ2hyb21lIDYrLCBpT1MgNSAqLyB9XFxuXFxuLnRyYXZlbGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4ubm8tdHJpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IGF1dG87XFxuICBwYWRkaW5nOiAyZW07IH1cXG4gIC5uby10cmlwcyBoMiwgLm5vLXRyaXBzIHAge1xcbiAgICBmb250LXNpemU6IHNtYWxsZXI7IH1cXG5cXG4udHJpcHMtbGFiZWwsIC5uZXctdHJpcC10aXRsZSB7XFxuICBwYWRkaW5nOiAyZW07IH1cXG5cXG4udHJpcC1jYXJkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHotaW5kZXg6IDE7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07IH1cXG4gIC50cmlwLWNhcmQgLnRyaXAtdGl0bGUsIC50cmlwLWNhcmQgLm5ldy10cmlwLXRpdGxlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA1JTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICB3aWR0aDogYXV0bzsgfVxcbiAgLnRyaXAtY2FyZCBoMiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogYXV0bzsgfVxcbiAgLnRyaXAtY2FyZCAuY2FyZC1pbmZvIHtcXG4gICAgZGlzcGxheTogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGQUZFO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDMwdmg7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gICAgb3BhY2l0eTogNzAlO1xcbiAgICBtYXJnaW46IDEwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgLnRyaXAtY2FyZCBoMyB7XFxuICAgIGNvbG9yOiAjRUJDNDA1OyB9XFxuICAudHJpcC1jYXJkIGltZyB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDsgfVxcblxcbi5ib29raW5nLWNvbmZpcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcbiAgLmJvb2tpbmctY29uZmlybWF0aW9uIC5uZXctdHJpcC10aXRsZSB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDk7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIGNvbG9yOiAjRjM3ODQ4OyB9XFxuXFxuLmRpc3BsYXktYm9va2luZy1idXR0b24sIC5kaXNwbGF5LWRlc3RpbmF0aW9uLWZvcm0tYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCQzQwNTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxNnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB3aWR0aDogMjB2aDtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjVlbTsgfVxcbiAgLmRpc3BsYXktYm9va2luZy1idXR0b24gaW1nLCAuZGlzcGxheS1kZXN0aW5hdGlvbi1mb3JtLWJ1dHRvbiBpbWcge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xLjVlbTsgfVxcblxcbi5ib29raW5nLWFyZWEsIC5hZGQtZGVzdGluYXRpb24tYXJlYSB7XFxuICB0b3A6IDVlbTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDYwO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMyU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogODB2aDtcXG4gIGhlaWdodDogODB2aDsgfVxcblxcbi5ib29raW5nLWZvcm0sIC5hZGQtZGVzdGluYXRpb24tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBwYWRkaW5nOiAyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAyJSA1JSA1JSA1JTtcXG4gIGhlaWdodDogMTAwJTsgfVxcbiAgLmJvb2tpbmctZm9ybSBpbnB1dCwgLmFkZC1kZXN0aW5hdGlvbi1mb3JtIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAuYm9va2luZy1mb3JtIGJ1dHRvbiwgLmFkZC1kZXN0aW5hdGlvbi1mb3JtIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTUlOyB9XFxuICAuYm9va2luZy1mb3JtIGxlZ2VuZCwgLmFkZC1kZXN0aW5hdGlvbi1mb3JtIGxlZ2VuZCB7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgbWFyZ2luOiBhdXRvOyB9XFxuICAuYm9va2luZy1mb3JtIGZpZWxkc2V0LCAuYWRkLWRlc3RpbmF0aW9uLWZvcm0gZmllbGRzZXQge1xcbiAgICBib3JkZXI6IG5vbmU7IH1cXG4gIC5ib29raW5nLWZvcm0gc2VsZWN0LCAuYWRkLWRlc3RpbmF0aW9uLWZvcm0gc2VsZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7IH1cXG5cXG4uYm9va2luZy1maWVsZCwgLmFkZC1kZXN0aW5hdGlvbi1maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlOyB9XFxuICAuYm9va2luZy1maWVsZCBzZWxlY3QsIC5hZGQtZGVzdGluYXRpb24tZmllbGQgc2VsZWN0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAuYm9va2luZy1maWVsZCBpbnB1dCwgLmFkZC1kZXN0aW5hdGlvbi1maWVsZCBpbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDsgfVxcbiAgLmJvb2tpbmctZmllbGQgYnV0dG9uLCAuYWRkLWRlc3RpbmF0aW9uLWZpZWxkIGJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4NUJDREE7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDE2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXJnaW46IDBweDsgfVxcblxcbi5ib29raW5nLWV4aXQtYnV0dG9uLCAuYWRkLWRlc3RpbmF0aW9uLWV4aXQtYnV0dG9uIHtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDE2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YzNzg0ODtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxNnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAuNWVtO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzZW07XFxuICBsZWZ0OiAzZW07XFxuICBjb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDJlbTtcXG4gIHdpZHRoOiAyZW07IH1cXG5cXG4uY2xpZW50LWludGVyYWN0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxNnB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXI6IHNvbGlkIDJweCAjRjM3ODQ4OyB9XFxuICAuY2xpZW50LWludGVyYWN0aW9uIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4OyB9XFxuICAuY2xpZW50LWludGVyYWN0aW9uIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTUlOyB9XFxuICAuY2xpZW50LWludGVyYWN0aW9uIGxlZ2VuZCB7XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgbWFyZ2luOiBhdXRvOyB9XFxuICAuY2xpZW50LWludGVyYWN0aW9uIGZpZWxkc2V0IHtcXG4gICAgYm9yZGVyOiBub25lOyB9XFxuICAuY2xpZW50LWludGVyYWN0aW9uIGJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQkM0MDU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDE2cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XFxuXFxuLmFkZC1kZXN0aW5hdGlvbi1hcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgdG9wOiAxNXZoOyB9XFxuXFxuLmFkZC1kZXN0aW5hdGlvbi1mb3JtIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuXFxuLmNvbmZpcm1hdGlvbiB7XFxuICBib3JkZXI6IHNvbGlkIDJweCAjRjM3ODQ4O1xcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWFyZ2luOiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4OyB9XFxuICAuY29uZmlybWF0aW9uIGgyLCAuY29uZmlybWF0aW9uIHAge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMWVtOyB9XFxuICAuY29uZmlybWF0aW9uIC5uZXctZGVzdGluYXRpb24taW1hZ2Uge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTB2aDtcXG4gICAgd2lkdGg6IDEzdmg7IH1cXG5cXG4uZGlzcGxheS1kZXN0aW5hdGlvbi1mb3JtLWJ1dHRvbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBiYXNlbGluZTsgfVxcbiAgLmRpc3BsYXktZGVzdGluYXRpb24tZm9ybS1idXR0b24gcCB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IC4zdmg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcblxcbi5zaGFkb3cge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDVweCA2cHggI2NjYztcXG4gIC8qIFNhZmFyaSAzLTQsIGlPUyA0LjAuMiAtIDQuMiwgQW5kcm9pZCAyLjMrICovXFxuICAtbW96LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xcbiAgLyogRmlyZWZveCAzLjUgLSAzLjYgKi9cXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xcbiAgLyogT3BlcmEgMTAuNSwgSUUgOSwgRmlyZWZveCA0KywgQ2hyb21lIDYrLCBpT1MgNSAqLyB9XFxuXFxuLmFpcnBsYW5lIHtcXG4gIGhlaWdodDogNnZoO1xcbiAgd2lkdGg6IDh2aDsgfVxcblxcbi5nbG9iZSB7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICB3aWR0aDogMTB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjdCQzE7XFxuICBwYWRkaW5nOiAuNWVtO1xcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTZweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cXG5cXG4udHJhdmVsIHtcXG4gIGhlaWdodDogMTB2aDtcXG4gIHdpZHRoOiAxMHZoOyB9XFxuXFxuLmRlc3RpbmF0aW9uIHtcXG4gIGhlaWdodDogNHZoO1xcbiAgd2lkdGg6IDR2aDsgfVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJPcGVuIFNhbnNcXFwiLCBzYW5zLXNlcmlmOyB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLnN0aWNreSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7IH1cXG5cXG5oMSwgaDIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJQb3BwaW5zXFxcIiwgc2Fucy1zZXJpZjsgfVxcblxcbm1haW4ge1xcbiAgcGFkZGluZy10b3A6IDIwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNEZBRkU7IH1cXG5cXG5sYWJlbCB7XFxuICBib3JkZXI6IG5vbmU7IH1cXG5cXG4jYmxvY2tDb2xvcmJsaW5kQ29udGVudCB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX25vcm1hbGl6ZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbWVkaWEtcXVlcmllcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbG9naW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbW9uZXkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdHJpcHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fYm9va2luZy1mb3JtLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2NsaWVudC1pbnRlcmFjdGlvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19hZGQtZGVzdGluYXRpb24tZm9ybS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19pY29ucy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQTREQTtFQUNFLHdDQUF3QztFQUFHLDhDQUFBO0VBQzNDLHFDQUF3QztFQUFHLHNCQUFBO0VBQzNDLGdDQUF3QztFQUFHLG1EQUFBLEVBQW9EOztBQy9EakcsMkVBQUE7QUFFQTsrRUNTK0U7QUROL0U7OztFQ1VFO0FETkY7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxpQkFBaUI7RUFBRSxNQUFBO0VBQ25CLDhCQUE4QjtFQUFFLE1BQUEsRUFBTzs7QUFHekM7K0VDUStFO0FETC9FOztFQ1FFO0FESkY7RUFDRSxTQUFTLEVBQUE7O0FBR1g7O0VDTUU7QURGRjtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7OztFQ0tFO0FEQUY7RUFDRSxj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RUFDWCxVQUFVLEVBQUE7O0FUVFo7RUFDRSxvQ0ZkbUMsRUFBQTs7QUVpQnJDO0VBQ0UsYUFBYSxFQUFBOztBQUdmO0VBQ0UsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGtDRnpCb0MsRUFBQTs7QUU0QnRDO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIseUJGdkJvQixFQUFBOztBRTBCdEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxhQUFhLEVBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiJHByaW1hcnktZm9udDonT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4kc2Vjb25kYXJ5LWZvbnQ6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXG5cXG4kYm9sZC1jb2xvcjE6ICMwNjdCQzE7XFxuJGJvbGQtY29sb3IyOiAjODVCQ0RBO1xcbiRib2xkLWNvbG9yMzogI0VCQzQwNTtcXG4kYm9sZC1jb2xvcjQ6ICNGMzc4NDg7XFxuJGJvbGQtY29sb3I1OiAjRjM3ODQ4O1xcbiRtdXRlZC1jb2xvcjE6ICNGRUVBRUU7XFxuJG11dGVkLWNvbG9yMjogI0UxRjFDMztcXG4kbXV0ZWQtY29sb3IzOiAjRjRGQUZFO1xcblxcbi8vIEBtaXhpbiBob3ZlclNoYWRvdyhlbGVtZW50KSB7XFxuLy8gICAje2VsZW1lbnR9OiB7XFxuLy8gICAgICAgJjpob3ZlciB7XFxuLy8gICAgICAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCAkYm9sZC1jb2xvcjU7XFxuLy8gICAgIH1cXG4vLyAgIH1cXG4vLyB9XFxuXFxuLy8gQG1peGluIGhvdmVyKCkge1xcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGJvbGQtY29sb3IyO1xcbi8vIH1cXG5cXG4vLyBAbWl4aW4gc2hhZG93U3R5bGUoKSB7XFxuLy8gICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xcbi8vIC8vIH1cXG5cXG4vLyBAbWl4aW4gZm9ybVN0eWxlKCRwYWRkaW5nKSB7XFxuLy8gICBwYWRkaW5nOiAkcGFkZGluZztcXG4vLyAgIG1hcmdpbjoxMHB4IDA7XFxuLy8gICBib3JkZXI6IDJweCBzb2xpZCAkYm9sZC1jb2xvcjI7XFxuLy8gICBib3JkZXItcmFkaXVzOjEwcHg7XFxuLy8gICB3aWR0aDoxMDAlO1xcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogJGJvbGQtY29sb3IzO1xcblxcbi8vICAgaW5wdXQsIHRleHRhcmVhIHtcXG4vLyAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuLy8gICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4vLyAgICAgcmVzaXplOiB2ZXJ0aWNhbDtcXG4vLyAgIH1cXG4vLyB9XFxuXFxuLy8gQG1peGluIGJ1dHRvblN0eWxpbmcoKSB7XFxuLy8gICBhcHBlYXJhbmNlOiBub25lO1xcbi8vICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbi8vICAgcGFkZGluZzogMTBweDtcXG4vLyAgIGJvcmRlcjogbm9uZTtcXG4vLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuLy8gICBib3JkZXItcmFkaXVzOiA1cHg7XFxuLy8gICB3aWR0aDogMTAwJTtcXG4vLyB9XFxuQG1peGluIGJveFNoYWRvdygpIHtcXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLDAuMTIpLCBcXG4gICAgICAgICAgICAgIDAgMnB4IDJweCByZ2JhKDAsMCwwLDAuMTIpLCBcXG4gICAgICAgICAgICAgIDAgNHB4IDRweCByZ2JhKDAsMCwwLDAuMTIpLCBcXG4gICAgICAgICAgICAgIDAgOHB4IDhweCByZ2JhKDAsMCwwLDAuMTIpLFxcbiAgICAgICAgICAgICAgMCAxNnB4IDE2cHggcmdiYSgwLDAsMCwwLjEyKTtcXG59XFxuXFxuLnNoYWRvdyB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjOyAgLyogU2FmYXJpIDMtNCwgaU9TIDQuMC4yIC0gNC4yLCBBbmRyb2lkIDIuMysgKi9cXG4gIC1tb3otYm94LXNoYWRvdzogICAgM3B4IDNweCA1cHggNnB4ICNjY2M7ICAvKiBGaXJlZm94IDMuNSAtIDMuNiAqL1xcbiAgYm94LXNoYWRvdzogICAgICAgICAzcHggM3B4IDVweCA2cHggI2NjYzsgIC8qIE9wZXJhIDEwLjUsIElFIDksIEZpcmVmb3ggNCssIENocm9tZSA2KywgaU9TIDUgKi9cXG59XFxuXFxuQG1peGluIGZvcm1TdHlsZSgpIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IGF1dG87XFxuIEBpbmNsdWRlIGJveFNoYWRvdygpXFxuICBwYWRkaW5nOiAyZW07XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICBpbnB1dCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG5cXG4gIGJ1dHRvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTUlO1xcbiAgfVxcblxcbiAgbGVnZW5kIHtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuXFxuICBmaWVsZHNldCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgXFxuICB9XFxufVxcblxcbkBtaXhpbiBidXR0b25TdHlsZSgkY29sb3IpIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAkc2Vjb25kYXJ5LWZvbnQ7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuIEBpbmNsdWRlIGJveFNoYWRvdygpXFxuICAvLyBkaXNwbGF5OiBibG9jaztcXG4gQGluY2x1ZGUgcm91bmRlZENvcm5lcnMoKVxcbn1cXG5cXG5AbWl4aW4gcm91bmRlZENvcm5lcnMoKSB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cIixcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVwiLFwiQGltcG9ydCBcXFwidmFyaWFibGVzXFxcIjtcXG5AaW1wb3J0IFxcXCJub3JtYWxpemVcXFwiO1xcbkBpbXBvcnQgXFxcIm1lZGlhLXF1ZXJpZXNcXFwiO1xcbkBpbXBvcnQgXFxcImhlYWRlclxcXCI7XFxuQGltcG9ydCBcXFwibG9naW5cXFwiO1xcbkBpbXBvcnQgXFxcIm1vbmV5XFxcIjtcXG5AaW1wb3J0IFxcXCJ0cmlwc1xcXCI7XFxuQGltcG9ydCBcXFwiYm9va2luZy1mb3JtXFxcIjtcXG5AaW1wb3J0IFxcXCJjbGllbnQtaW50ZXJhY3Rpb25cXFwiO1xcbkBpbXBvcnQgXFxcImFkZC1kZXN0aW5hdGlvbi1mb3JtXFxcIjtcXG5AaW1wb3J0IFxcXCJpY29uc1xcXCI7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwJmZhbWlseT1Qb3BwaW5zJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbioge1xcbiAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQ7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnN0aWNreSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcblxcbmgxLCBoMiB7XFxuICBmb250LWZhbWlseTogJHNlY29uZGFyeS1mb250O1xcbn1cXG5cXG5tYWluIHtcXG4gIHBhZGRpbmctdG9wOiAyMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbXV0ZWQtY29sb3IzO1xcbn1cXG5cXG5sYWJlbCB7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbiNibG9ja0NvbG9yYmxpbmRDb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLFwiQGltcG9ydCBcXFwidmFyaWFibGVzXFxcIjtcXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMDBweCkge1xcblxcblxcbn1cXG5cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XFxuIC50cmlwcy1hbmQtYm9va2luZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA4MHZoO1xcbiAgfVxcblxcbiAgLnNpZGVjb2x1bW4ge1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgfVxcbiAgXFxuICAuYm9va2luZyB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICB9XFxuXFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gLnRyaXBzLWFuZC1ib29raW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDgwdmg7XFxuICB9XFxufVwiLFwiQGltcG9ydCBcXFwidmFyaWFibGVzXFxcIjtcXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGhlaWdodDogMTV2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDAuMjV0dXJuLCAkYm9sZC1jb2xvcjIsICRib2xkLWNvbG9yMSk7XFxuICBwYWRkaW5nOiAxZW07XFxuICBvcGFjaXR5OiAxMDAlO1xcbiAgei1pbmRleDogMTA7XFxufVxcblxcbi53ZWxjb21lLWJhbm5lciB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB0b3A6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICBmb250LWZhbWlseTogJHByaW1hcnktZm9udDtcXG59XFxuXFxuLmxvZ28ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFwYXJ0O1xcbn1cXG5cXG4ucGFnZS10aXRsZSB7XFxuICBwYWRkaW5nOiAuNWVtO1xcbn1cIixcIkBpbXBvcnQgXFxcInZhcmlhYmxlc1xcXCI7XFxuXFxuLmxvZ2luIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiBoZWlnaHQ6IDgwdmg7XFxufVxcblxcbi5sb2dpbi1maWVsZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwJSAxNSUgMCUgMTAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5sb2dpbi1idXR0b24ge1xcbiAgQGluY2x1ZGUgYnV0dG9uU3R5bGUoJGJvbGQtY29sb3IzKVxcbn1cXG5cXG4ubG9naW4tZm9ybSB7XFxuICBAaW5jbHVkZSBmb3JtU3R5bGUoKTtcXG4gIHBhZGRpbmc6IDIlIDUlIDUlIDUlO1xcbn1cXG5cIixcIkBpbXBvcnQgXFxcInZhcmlhYmxlc1xcXCI7XFxuXFxuLm1vbmV5IHtcXG4gIGJvcmRlcjogc29saWQgMnB4ICRib2xkLWNvbG9yNTtcXG4gIEBpbmNsdWRlIGJveFNoYWRvdygpXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxZW07XFxuICBtYXJnaW46IDFlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJlbTtcXG4gIEBpbmNsdWRlIHJvdW5kZWRDb3JuZXJzKClcXG5cXG4gIGgyLCBwIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW46IDFlbTtcXG4gIH1cXG59XCIsXCJAaW1wb3J0IFxcXCJ2YXJpYWJsZXNcXFwiO1xcblxcbi50cmF2ZWxlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubm8tdHJpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMmVtO1xcbiAgd2lkdGg6IGF1dG87XFxuICBwYWRkaW5nOiAyZW07XFxuXFxuICBoMiwgcCB7XFxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcXG4gIH1cXG59XFxuXFxuLnRyaXBzLWxhYmVsLCAubmV3LXRyaXAtdGl0bGUge1xcbiAgcGFkZGluZzogMmVtO1xcbn1cXG5cXG4udHJpcC1jYXJkLCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIEBpbmNsdWRlIGJveFNoYWRvdygpXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHotaW5kZXg6IDE7XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICBcXG5cXG4gIC50cmlwLXRpdGxlLCAubmV3LXRyaXAtdGl0bGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDUlO1xcbiAgICBAaW5jbHVkZSByb3VuZGVkQ29ybmVycygpXFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIC8vIG1hcmdpbi1sZWZ0OiAwO1xcbiAgfVxcblxcbiAgaDIge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICB9XFxuXFxuICAuY2FyZC1pbmZvIHtcXG4gICAgZGlzcGxheTogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbXV0ZWQtY29sb3IzO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIEBpbmNsdWRlIHJvdW5kZWRDb3JuZXJzKClcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMzB2aDtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBvcGFjaXR5OiA3MCU7XFxuICAgIG1hcmdpbjogMTAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICAvLyBAaW5jbHVkZSBib3hTaGFkb3coKVxcbiAgfVxcblxcbiAgaDMge1xcbiAgICBjb2xvcjogJGJvbGQtY29sb3IzO1xcbiAgfVxcblxcbiAgaW1nIHtcXG4gICAgQGluY2x1ZGUgcm91bmRlZENvcm5lcnMoKVxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICB9XFxuXFxufVxcblxcbi5ib29raW5nLWNvbmZpcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIC5uZXctdHJpcC10aXRsZSB7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHotaW5kZXg6IDk7XFxuICAgIG9wYWNpdHk6IDEwMCU7XFxuICAgIGNvbG9yOiAkYm9sZC1jb2xvcjU7XFxuICB9XFxufVwiLFwiLmRpc3BsYXktYm9va2luZy1idXR0b24sIC5kaXNwbGF5LWRlc3RpbmF0aW9uLWZvcm0tYnV0dG9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgQGluY2x1ZGUgYnV0dG9uU3R5bGUoJGJvbGQtY29sb3IzKVxcbiAgd2lkdGg6IDIwdmg7XFxuICBwYWRkaW5nLWJvdHRvbTogMS41ZW07XFxuXFxuICBpbWcge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xLjVlbTtcXG4gIH1cXG5cXG59XFxuXFxuLmJvb2tpbmctYXJlYSwgLmFkZC1kZXN0aW5hdGlvbi1hcmVhIHtcXG4gIHRvcDogNWVtO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogNjA7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzJTtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MHZoO1xcbiAgaGVpZ2h0OiA4MHZoO1xcbn1cXG5cXG4uYm9va2luZy1mb3JtLCAuYWRkLWRlc3RpbmF0aW9uLWZvcm0ge1xcbiAgQGluY2x1ZGUgZm9ybVN0eWxlKCk7XFxuICBwYWRkaW5nOiAyJSA1JSA1JSA1JTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIFxcbiAgc2VsZWN0IHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB9XFxufVxcblxcbi5ib29raW5nLWZpZWxkLCAuYWRkLWRlc3RpbmF0aW9uLWZpZWxkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLy8gcGFkZGluZzogMTAlIDE1JSAwJSAxMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIHNlbGVjdCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gIH1cXG5cXG4gIGlucHV0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgfVxcblxcbiAgYnV0dG9uIHtcXG4gICAgQGluY2x1ZGUgYnV0dG9uU3R5bGUoJGJvbGQtY29sb3IyKVxcbiAgICBtYXJnaW46IDBweDtcXG4gIH1cXG59XFxuXFxuLmJvb2tpbmctZXhpdC1idXR0b24sIC5hZGQtZGVzdGluYXRpb24tZXhpdC1idXR0b24ge1xcbiAgQGluY2x1ZGUgYm94U2hhZG93KCk7XFxuICBAaW5jbHVkZSBidXR0b25TdHlsZSgkYm9sZC1jb2xvcjUpO1xcbiAgcGFkZGluZzogLjVlbTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogM2VtO1xcbiAgbGVmdDogM2VtO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OjJlbTtcXG4gIHdpZHRoOjJlbTtcXG5cXG59XFxuXFxuXCIsXCIuY2xpZW50LWludGVyYWN0aW9uIHtcXG4gIEBpbmNsdWRlIGZvcm1TdHlsZSgpXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyOiBzb2xpZCAycHggJGJvbGQtY29sb3I1O1xcblxcbiAgYnV0dG9uIHtcXG4gICAgQGluY2x1ZGUgYnV0dG9uU3R5bGUoJGJvbGQtY29sb3IzKVxcbiAgfVxcbn1cIixcIi5hZGQtZGVzdGluYXRpb24tYXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHRvcDogMTV2aDtcXG59XFxuXFxuLmFkZC1kZXN0aW5hdGlvbi1mb3JtIHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uY29uZmlybWF0aW9uIHtcXG4gIGJvcmRlcjogc29saWQgMnB4ICRib2xkLWNvbG9yNTtcXG4gIEBpbmNsdWRlIGJveFNoYWRvdygpXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMWVtO1xcbiAgbWFyZ2luOiAxZW07XFxuICBtYXJnaW4tYm90dG9tOiAyZW07XFxuICBAaW5jbHVkZSByb3VuZGVkQ29ybmVycygpXFxuXFxuICBoMiwgcCB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxZW07XFxuICB9XFxuXFxuICAubmV3LWRlc3RpbmF0aW9uLWltYWdlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwdmg7XFxuICAgIHdpZHRoOiAxM3ZoO1xcbiAgfVxcbn1cXG5cXG4uZGlzcGxheS1kZXN0aW5hdGlvbi1mb3JtLWJ1dHRvbiB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBiYXNlbGluZTtcXG4gIHAge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAuM3ZoO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB9XFxufVwiLFwiQGltcG9ydCBcXFwidmFyaWFibGVzXFxcIjtcXG5cXG4uYWlycGxhbmUge1xcbiAgaGVpZ2h0OiA2dmg7XFxuICB3aWR0aDogOHZoO1xcbn1cXG5cXG4uZ2xvYmUge1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgd2lkdGg6IDEwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9sZC1jb2xvcjE7XFxuICBwYWRkaW5nOiAuNWVtO1xcbiAgQGluY2x1ZGUgYm94U2hhZG93KClcXG59XFxuXFxuLnRyYXZlbCB7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICB3aWR0aDogMTB2aDtcXG59XFxuXFxuLmRlc3RpbmF0aW9uIHtcXG4gIGhlaWdodDogNHZoO1xcbiAgd2lkdGg6IDR2aDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNsYXNzIEFnZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYW1lID0gJ2FnZW50JyBcbiAgfVxuXG4gIGNhbGN1bGF0ZVllYXJseUluY29tZSh0cmlwcykge1xuICAgIGNvbnN0IGFwcHJvdmVkVHJpcHMgPSB0cmlwcy5maWx0ZXIodHJpcCA9PiB0cmlwLnN0YXR1cyA9PT0gXCJhcHByb3ZlZFwiKVxuICAgIFxuICAgIGNvbnN0IGFwcHJvdmVkVHJpcHNUb3RhbCA9IHRyaXBzLnJlZHVjZSgodG90YWwsIHRyaXApID0+IHtcbiAgICAgIGNvbnN0IHRyaXBUb3RhbCA9IHRyaXAuY2FsY3VsYXRlVG90YWxDb3N0KClcbiAgICAgIGlmICh0eXBlb2YgdHJpcFRvdGFsID09PSAnbnVtYmVyJykge1xuICAgICAgICB0b3RhbCArPSB0cmlwVG90YWxcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b3RhbFxuICAgIH0sIDApXG4gICAgY29uc3QgY3V0T2ZUcmlwc1RvdGFsID0gTWF0aC5yb3VuZChhcHByb3ZlZFRyaXBzVG90YWwgKiAuMSlcbiAgXG4gICAgcmV0dXJuIGN1dE9mVHJpcHNUb3RhbFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFnZW50OyIsImNsYXNzIERlc3RpbmF0aW9uIHtcbiAgY29uc3RydWN0b3IoZGVzdGluYXRpb24pIHtcbiAgICAgIHRoaXMuaWQgPSBkZXN0aW5hdGlvbi5pZFxuICAgICAgdGhpcy5uYW1lID0gZGVzdGluYXRpb24uZGVzdGluYXRpb25cbiAgICAgIHRoaXMuZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgPSBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheVxuICAgICAgdGhpcy5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uID0gZGVzdGluYXRpb24uZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvblxuICAgICAgdGhpcy5pbWFnZSA9IGRlc3RpbmF0aW9uLmltYWdlXG4gICAgICB0aGlzLmFsdCA9IGRlc3RpbmF0aW9uLmFsdFxuICB9XG5cbiAgY2FsY3VsYXRlRmVlKHN1YnRvdGFsKSB7XG4gICAgcmV0dXJuIHN1YnRvdGFsICsgKHN1YnRvdGFsICogLjEpIFxuICB9XG5cbiAgY2FsY3VsYXRlQ29zdChudW0sIHByaWNlUHJvcGVydHkpIHtcbiAgICByZXR1cm4gdGhpc1twcmljZVByb3BlcnR5XSAqIG51bVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlc3RpbmF0aW9uOyIsImltcG9ydCB0cmlwcyBmcm9tIFwiLi4vdGVzdC90cmlwcy10ZXN0LWRhdGFcIjtcblxuY2xhc3MgVHJhdmVsZXIge1xuICBjb25zdHJ1Y3Rvcih0cmF2ZWxlciwgdHJpcHMpIHtcbiAgICB0aGlzLmlkID0gdHJhdmVsZXIuaWRcbiAgICB0aGlzLm5hbWUgPSB0cmF2ZWxlci5uYW1lXG4gICAgdGhpcy50cmF2ZWxlclR5cGUgPSB0cmF2ZWxlci50cmF2ZWxlclR5cGVcbiAgICB0aGlzLnRyaXBzID0gdGhpcy5nZXRUcmlwcyh0cmlwcylcbiAgfVxuXG4gIGdldFRyaXBzKHRyaXBzKSB7XG4gICAgY29uc3QgdXNlclRyaXBzID0gdHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC51c2VySUQgPT09IHRoaXMuaWQpXG4gICAgcmV0dXJuIHVzZXJUcmlwcy5sZW5ndGggPyB1c2VyVHJpcHMgOiBbXVxuICB9XG5cbiAgY29udmVydERhdGVUb051bWJlcihkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUgPyBwYXJzZUludChkYXRlLnNwbGl0KCcvJykuam9pbignJykpIDogMFxuICB9XG5cbiAgZ2V0VHJpcHNUaW1lbGluZSh0b2RheSkge1xuICAgIGxldCB0cmlwVGltZWxpbmUgPSB7XG4gICAgICBjdXJyZW50VHJpcHM6IFtdLFxuICAgICAgcGFzdFRyaXBzOiBbXSxcbiAgICAgIHVwY29taW5nVHJpcHM6IFtdXG4gICAgfVxuXG4gICAgY29uc3QgYXBwcm92ZWRUcmlwcyA9IHRoaXMudHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5zdGF0dXMgPT09ICdhcHByb3ZlZCcpXG4gICAgYXBwcm92ZWRUcmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgY29uc3QgdG9kYXlEYXRlTnVtYmVyID0gdGhpcy5jb252ZXJ0RGF0ZVRvTnVtYmVyKHRvZGF5KVxuICAgICAgY29uc3Qgc3RhcnREYXRlTnVtYmVyID0gdGhpcy5jb252ZXJ0RGF0ZVRvTnVtYmVyKHRyaXAuZGF0ZSlcbiAgICAgIGNvbnN0IGVuZERhdGVOdW1iZXIgPSB0aGlzLmNvbnZlcnREYXRlVG9OdW1iZXIodHJpcC5lbmREYXRlKVxuXG4gICAgICBpZiAodG9kYXlEYXRlTnVtYmVyID49IHN0YXJ0RGF0ZU51bWJlciBcbiAgICAgICAgJiYgdG9kYXlEYXRlTnVtYmVyIDw9IGVuZERhdGVOdW1iZXIpIHtcbiAgICAgICAgdHJpcFRpbWVsaW5lLmN1cnJlbnRUcmlwcy5wdXNoKHRyaXApXG4gICAgICB9IGVsc2UgaWYgKHRvZGF5RGF0ZU51bWJlciA+IGVuZERhdGVOdW1iZXIpIHtcbiAgICAgICAgdHJpcFRpbWVsaW5lLnBhc3RUcmlwcy5wdXNoKHRyaXApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cmlwVGltZWxpbmUudXBjb21pbmdUcmlwcy5wdXNoKHRyaXApXG4gICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiB0cmlwVGltZWxpbmVcbiAgfVxuXG4gIGNhbGN1bGF0ZVRvdGFsVHJpcFNwZW5kaW5nKHRvZGF5KSB7XG4gICAgaWYgKCF0aGlzLnRyaXBzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIDBcbiAgICB9XG4gICAgY29uc3QgYXBwcm92ZWRUcmlwc1RoaXNZZWFyID0gdGhpcy50cmlwcy5maWx0ZXIodHJpcCA9PiB7XG4gICAgICByZXR1cm4gdHJpcC5zdGF0dXMgPT09ICdhcHByb3ZlZCdcbiAgICAgICYmIHRyaXAuZGF0ZS5zcGxpdCgnLycpWzBdID09PSB0b2RheS5zcGxpdCgnLycpWzBdXG4gICAgfSlcblxuICAgIGNvbnN0IHRvdGFsQ29zdE9mQWxsQXBwcm92ZWRUcmlwcyA9IFxuICAgICAgYXBwcm92ZWRUcmlwc1RoaXNZZWFyLnJlZHVjZSgodG90YWwsIHRyaXApID0+IHtcbiAgICAgICAgdG90YWwgKz0gdHJpcC5jYWxjdWxhdGVUb3RhbENvc3QoKSBcbiAgICAgICAgcmV0dXJuIHRvdGFsXG4gICAgICB9LCAwKVxuICAgIHJldHVybiB0b3RhbENvc3RPZkFsbEFwcHJvdmVkVHJpcHNcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbGVyOyIsImNsYXNzIFRyaXAge1xuICBjb25zdHJ1Y3Rvcih0cmlwLCBkZXN0aW5hdGlvbnMpIHtcbiAgICB0aGlzLmlkID0gdHJpcC5pZCB8fCBEYXRlLm5vdygpXG4gICAgdGhpcy51c2VySUQgPSB0cmlwLnVzZXJJRFxuICAgIHRoaXMuZ2V0RGVzdGluYXRpb24oZGVzdGluYXRpb25zLCB0cmlwLmRlc3RpbmF0aW9uSUQpXG4gICAgdGhpcy50cmF2ZWxlcnMgPSB0cmlwLnRyYXZlbGVyc1xuICAgIHRoaXMuZGF0ZSA9IHRyaXAuZGF0ZVxuICAgIHRoaXMuZHVyYXRpb24gPSB0cmlwLmR1cmF0aW9uXG4gICAgdGhpcy5zdGF0dXMgPSB0cmlwLnN0YXR1cyB8fCBcInBlbmRpbmdcIlxuICAgIHRoaXMuc3VnZ2VzdGVkQWN0aXZpdGllcyA9IHRyaXAuc3VnZ2VzdGVkQWN0aXZpdGllc1xuICAgIHRoaXMuc2V0RW5kRGF0ZSgpIFxuICB9XG4gIFxuICBnZXREZXN0aW5hdGlvbihkZXN0aW5hdGlvbnMsIGRlc3RpbmF0aW9uSUQpIHtcbiAgICBjb25zdCBtYXRjaGluZ0Rlc3RpbmF0aW9uID0gZGVzdGluYXRpb25zLmZpbmQoZGVzdGluYXRpb24gPT4gZGVzdGluYXRpb24uaWQgPT09IGRlc3RpbmF0aW9uSUQpXG5cbiAgICBpZiAobWF0Y2hpbmdEZXN0aW5hdGlvbikge1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG1hdGNoaW5nRGVzdGluYXRpb24gXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbklEXG4gICAgfVxuICB9XG5cbiAgc2V0RW5kRGF0ZSgpIHtcbiAgICBjb25zdCBzcGxpdERhdGUgPSB0aGlzLmRhdGUuc3BsaXQoJy8nKVxuICAgIGNvbnN0IGRhdGVSZWFycmFuZ2UgPSBbc3BsaXREYXRlWzFdLCBzcGxpdERhdGVbMl0sIHNwbGl0RGF0ZVswXV0uam9pbignLycpXG4gICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoZGF0ZVJlYXJyYW5nZSlcbiAgICBjb25zdCBlbmREYXRlTWlsbGlzZWNvbmRzID0gc3RhcnREYXRlLnNldERhdGUoc3RhcnREYXRlLmdldERhdGUoKSArIHRoaXMuZHVyYXRpb24pXG4gICAgY29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKGVuZERhdGVNaWxsaXNlY29uZHMpXG4gICAgdGhpcy5lbmREYXRlID0gZW5kRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVpBJylcbiAgfVxuXG4gIGNhbGN1bGF0ZVRvdGFsQ29zdCgpIHtcbiAgICBpZiAodHlwZW9mIHRoaXMuZGVzdGluYXRpb24gPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHJldHVybiAnVGhpcyB0cmlwIHJlcXVpcmVzIGEgdmFsaWQgZGVzdGluYXRpb24gdG8gZXN0aW1hdGUgY29zdC4nXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxvZGdpbmdDb3N0ID0gdGhpcy5kZXN0aW5hdGlvbi5jYWxjdWxhdGVDb3N0KHRoaXMuZHVyYXRpb24sICdlc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheScpXG4gICAgICBjb25zdCBmbGlnaHRDb3N0ID0gdGhpcy5kZXN0aW5hdGlvbi5jYWxjdWxhdGVDb3N0KHRoaXMudHJhdmVsZXJzLCAnZXN0aW1hdGVkRmxpZ2h0Q29zdFBlclBlcnNvbicpXG4gICAgICBjb25zdCB0b3RhbFdpdGhGZWUgPSB0aGlzLmRlc3RpbmF0aW9uLmNhbGN1bGF0ZUZlZShsb2RnaW5nQ29zdCArIGZsaWdodENvc3QpXG4gICAgICByZXR1cm4gdG90YWxXaXRoRmVlXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXA7IiwiLy8gcG9zc2libGUgZGF0YWJhc2VzOiAndHJhdmVsZXJzJywgJ3RyYXZlbGVycy8ke2lkfScsICd0cmlwcycsICdkZXN0aW5hdGlvbnMnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXRhKGRhdGFiYXNlLCBsb2NhbEFycmF5KSB7XG4gIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS8ke2RhdGFiYXNlfWApXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLnRoZW4oZGF0YU9iamVjdCA9PiB7XG4gICAgZGF0YU9iamVjdFtkYXRhYmFzZV0uZm9yRWFjaChkYXRhT2JqZWN0ID0+IHtcbiAgICAgIGxvY2FsQXJyYXkucHVzaChkYXRhT2JqZWN0KVxuICAgIH0pXG4gIH0pXG4gIC5jYXRjaChlcnJvciA9PiB7XG4gICAgY29uc29sZS5sb2coJ0ZFVENIIEdFVCBFUlJPUicsIGVycm9yKVxuICAgIGFsZXJ0KGBTb3JyeSwgdGhlcmUgd2FzIGFuIGVycm9yIGxvYWRpbmcgdGhlIHBhZ2UhYClcbiAgfSlcbn1cblxuLy8gcG9zdCB0byAndHJpcHMnXG4vL3tpZDogPG51bWJlcj4sIHVzZXJJRDogPG51bWJlcj4sIGRlc3RpbmF0aW9uSUQ6IDxudW1iZXI+LCB0cmF2ZWxlcnM6IDxudW1iZXI+LCBkYXRlOiA8c3RyaW5nICdZWVlZL01NL0REJz4sIGR1cmF0aW9uOiA8bnVtYmVyPiwgc3RhdHVzOiA8c3RyaW5nICdhcHByb3ZlZCcgb3IgJ3BlbmRpbmcnPiwgc3VnZ2VzdGVkQWN0aXZpdGllczogPGFycmF5IG9mIHN0cmluZ3M+fVxuXG4vLyBwb3N0IHRvICdkZXN0aW5hdGlvbnMnXG4vL3tpZDogPG51bWJlcj4sIGRlc3RpbmF0aW9uOiA8c3RyaW5nPiwgZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXk6IDxudW1iZXI+LCBlc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uOiA8bnVtYmVyPiwgaW1hZ2U6IDxzdHJpbmc+LCBhbHQ6IDxzdHJpbmc+fVxuXG4vL3Bvc3QgdG8gJ3VwZGF0ZVRyaXAnXG4vL3tpZDogPG51bWJlcj4sIGRlc3RpbmF0aW9uOiA8c3RyaW5nPiwgZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXk6IDxudW1iZXI+LCBlc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uOiA8bnVtYmVyPiwgaW1hZ2U6IDxzdHJpbmc+LCBhbHQ6IDxzdHJpbmc+fVxuXG5leHBvcnQgZnVuY3Rpb24gcG9zdERhdGEoZGF0YWJhc2UsIGJvZHlQb3N0KSB7XG4gIGNvbnN0IHNldHRpbmdzID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHlQb3N0KVxuICB9XG4gIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS8ke2RhdGFiYXNlfWAsIHNldHRpbmdzKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlUGFyc2VkID0gcmVzcG9uc2UuanNvbigpXG4gICAgICBjb25zb2xlLmxvZygnQVBJIFJFU1BPTlNFIFBPU1QnLCByZXNwb25zZVBhcnNlZClcbiAgICAgIHJldHVybiByZXNwb25zZVBhcnNlZFxuICAgIH0pXG4gICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdGRVRDSCBQT1NUIEVSUk9SJywgZXJyb3IpXG4gICAgICBhbGVydChgU29ycnksIHRoZXJlIHdhcyBhbiBlcnJvciBzdWJtaXR0aW5nIHlvdXIgZGF0YSFgKVxuICAgIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVUcmlwKHRyaXBJZCkge1xuICBjb25zdCBzZXR0aW5ncyA9IHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzLyR7dHJpcElkfWAsIHNldHRpbmdzKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlUGFyc2VkID0gcmVzcG9uc2UuanNvbigpXG4gICAgICBjb25zb2xlLmxvZygnQVBJIFJFU1BPTlNFIERFTEVURScsIHJlc3BvbnNlUGFyc2VkKVxuICAgICAgcmV0dXJuIHJlc3BvbnNlUGFyc2VkXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0ZFVENIIERFTEVURSBFUlJPUicsIGVycm9yKVxuICAgICAgYWxlcnQoYFNvcnJ5LCB0aGVyZSBpcyBhbiBlcnJvciBkZWxldGluZyB0aGlzIHRyaXAhYClcbiAgICB9KVxufSIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImNvbnN0IGRvbVVwZGF0ZXMgPSB7XG4gIHRvZ2dsZShhbnlBcnIpIHtcbiAgICBhbnlBcnIuZm9yRWFjaChhcmVhID0+XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFyZWEpLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIikpXG4gIH0sXG5cbiAgYWRkRGlzcGxheShhcmVhLCB3aGVyZSwgd2hhdCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYXJlYSkuaW5zZXJ0QWRqYWNlbnRIVE1MKHdoZXJlLCB3aGF0KVxuICB9LFxuXG4gIGNsZWFyRGlzcGxheShhcmVhKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihhcmVhKS5pbm5lckhUTUwgPSAnJ1xuICB9LFxuXG4gIGRpc3BsYXlXZWxjb21lQmFubmVyKHVzZXIpIHtcbiAgICB0aGlzLmNsZWFyRGlzcGxheSgnaDInKVxuICAgIGNvbnN0IGZpcnN0TmFtZSA9IHVzZXIubmFtZS5zcGxpdCgnICcpWzBdXG4gICAgY29uc3Qgd2VsY29tZUhUTUwgPSBgV2VsY29tZSAke2ZpcnN0TmFtZX0hYFxuICAgIHRoaXMuYWRkRGlzcGxheSgnaDInLCAnYWZ0ZXJiZWdpbicsIHdlbGNvbWVIVE1MKVxuICB9LFxuXG4gY3JlYXRlQm9va2luZ3NTZWxlY3Rpb24oZGVzdGluYXRpb25zKSB7XG4gICAgbGV0IHNlbGVjdGlvbkhUTUwgPSAnJ1xuICAgIGRlc3RpbmF0aW9ucy5mb3JFYWNoKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgIHNlbGVjdGlvbkhUTUwgKz0gYDxvcHRpb24gdmFsdWU9XCIke2Rlc3RpbmF0aW9uLm5hbWV9XCI+XG4gICAgICAke2Rlc3RpbmF0aW9uLm5hbWV9PC9vcHRpb24+YFxuICAgIH0pO1xuICAgIHRoaXMuYWRkRGlzcGxheSgnc2VsZWN0JywgJ2JlZm9yZWVuZCcsIHNlbGVjdGlvbkhUTUwpXG4gIH0sXG5cbiAgZGlzcGxheVRyaXBzKHRyaXBzTGlzdCwgYXJlYSkge1xuICAgIHRoaXMuY2xlYXJEaXNwbGF5KGFyZWEpXG4gICAgbGV0IHRyaXBzSFRNTCA9ICcnXG4gICAgaWYgKCF0cmlwc0xpc3QubGVuZ3RoKSB7XG4gICAgICB0cmlwc0hUTUwgKz0gYDxkaXYgY2xhc3M9XCJuby10cmlwc1wiPlxuICAgICAgJHt0aGlzLmFkZFRyaXBMYWJlbChhcmVhKX0gXG4gICAgICA8cD5ObyB0cmlwcyB0byBkaXNwbGF5LCBiZXR0ZXIgYm9vayBhIHRyaXAhPC9wPjwvZGl2PmBcbiAgICB9IGVsc2Uge1xuICAgICAgdHJpcHNIVE1MID0gYCR7dGhpcy5hZGRUcmlwTGFiZWwoYXJlYSl9YFxuICAgICAgdHJpcHNIVE1MICs9IHRyaXBzTGlzdC5tYXAodHJpcCA9PiB0aGlzLmNyZWF0ZUNhcmRIdG1sKHRyaXApKS5qb2luKCcnKVxuICAgIH0gXG5cbiAgICB0aGlzLmFkZERpc3BsYXkoIGFyZWEsICdiZWZvcmVlbmQnLCB0cmlwc0hUTUwpXG4gIH0sIFxuXG4gIGNyZWF0ZUNhcmRIdG1sKHRyaXApIHtcbiAgICBjb25zdCBzdWdnZXN0ZWRBY3Rpdml0aWVzID0gdHJpcC5zdWdnZXN0ZWRBY3Rpdml0aWVzLmxlbmd0aCBcbiAgICAgID8gYDxoMz5TdWdnZXN0ZWQgQWN0aXZpdGVzOjwvaDM+IFxuICAgICAgICAgICAgPHA+JHt0cmlwLnN1Z2dlc3RlZEFjdGl2aXRpZXN9PC9wPmBcbiAgICAgIDogJydcbiAgICByZXR1cm4gYFxuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRyaXAtY2FyZCAke3RyaXAuc3RhdHVzfVwiIFxuICAgICAgICBpZD1cIiR7dHJpcC5pZH1cIiBcbiAgICAgICAgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHt0cmlwLmRlc3RpbmF0aW9uLmltYWdlfSk7XCJcbiAgICAgICAgYWx0PVwiJHt0cmlwLmRlc3RpbmF0aW9uLmFsdH1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidHJpcC10aXRsZVwiPlxuICAgICAgICAgICAgPGgyPlRyaXAgdG8gJHt0cmlwLmRlc3RpbmF0aW9uLm5hbWV9PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbmZvXCI+XG4gICAgICAgICAgICA8aDM+U3RhdHVzOjwvaDM+XG4gICAgICAgICAgICAgIDxwPiR7dHJpcC5zdGF0dXN9PC9wPlxuICAgICAgICAgICAgPGgzPlN0YXJ0IERhdGU6PC9oMz5cbiAgICAgICAgICAgICAgPHA+JHt0cmlwLmRhdGV9PC9wPlxuICAgICAgICAgICAgPGgzPkxlbmd0aCBvZiBTdGF5OjwvaDM+XG4gICAgICAgICAgICAgIDxwPiR7dHJpcC5kdXJhdGlvbn0gZGF5czwvcD5cbiAgICAgICAgICAgIDxoMz5OdW1iZXIgb2YgVHJhdmVsZXJzOjwvaDM+XG4gICAgICAgICAgICAgIDxwPiR7dHJpcC50cmF2ZWxlcnN9PC9wPlxuICAgICAgICAgICAgJHtzdWdnZXN0ZWRBY3Rpdml0aWVzfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIGBcbiAgfSxcblxuICBhZGRUcmlwTGFiZWwoYXJlYSkge1xuICAgIHN3aXRjaCAoYXJlYSkge1xuICAgIGNhc2UgKCcucHJlc2VudCcpOlxuICAgICAgcmV0dXJuICc8aDIgY2xhc3M9XCJ0cmlwcy1sYWJlbFwiPlByZXNlbnQgVHJpcHM8L2gyPidcbiAgICBjYXNlICgnLnVwY29taW5nJyk6XG4gICAgICByZXR1cm4gJzxoMiBjbGFzcz1cInRyaXBzLWxhYmVsXCI+VXBjb21pbmcgVHJpcHM8L2gyPidcbiAgICBjYXNlICgnLnBlbmRpbmctdHJpcHMnKTpcbiAgICAgIHJldHVybiAnPGgyIGNsYXNzPVwidHJpcHMtbGFiZWxcIj5QZW5kaW5nIFRyaXBzPC9oMj4nXG4gICAgY2FzZSAoJy5hcHByb3ZlZCcpOlxuICAgICAgcmV0dXJuICc8aDIgY2xhc3M9XCJ0cmlwcy1sYWJlbFwiPkFwcHJvdmVkIFRyaXBzPC9oMj4nXG4gICAgY2FzZSAoJy5yZWplY3RlZCcpOlxuICAgICAgcmV0dXJuICc8aDIgY2xhc3M9XCJ0cmlwcy1sYWJlbFwiPlJlamVjdGVkIFRyaXBzPC9oMj4nXG4gICAgY2FzZSAoJy5wYXN0Jyk6XG4gICAgICByZXR1cm4gJzxoMiBjbGFzcz1cInRyaXBzLWxhYmVsXCI+UGFzdCBUcmlwczwvaDI+JyBcbiAgICBjYXNlICgnLnRvZGF5LXRyYXZlbHMnKTpcbiAgICAgIHJldHVybiAnPGgyIGNsYXNzPVwidHJpcHMtbGFiZWxcIj5UcmF2ZWxpbmcgVG9kYXk8L2gyPidcbiAgICBjYXNlICgnLnBlbmRpbmctZm9yLWFnZW50Jyk6XG4gICAgICByZXR1cm4gJzxoMiBjbGFzcz1cInRyaXBzLWxhYmVsXCI+UGVuZGluZyBSZXZpZXc8L2gyPidcbiAgICB9XG4gIH0sXG5cbiAgY29uZmlybVRyaXBCb29raW5nU3VibWlzc2lvbihuZXdUcmlwKSB7XG4gICAgdGhpcy5jbGVhckRpc3BsYXkoJy5ib29raW5nLWNvbmZpcm1hdGlvbicpXG4gICAgbGV0IGNvbmZpcm1hdGlvbkh0bWwgPSBgPGgyIGNsYXNzPVwibmV3LXRyaXAtdGl0bGVcIj5cbiAgICBDb25maXJtYXRpb24gb2YgTmV3IFRyaXAgUGVuZGluZzwvaDI+YFxuICAgIGNvbmZpcm1hdGlvbkh0bWwgKz0gdGhpcy5jcmVhdGVDYXJkSHRtbChuZXdUcmlwKVxuICAgIHRoaXMuYWRkRGlzcGxheSgnLmJvb2tpbmctY29uZmlybWF0aW9uJywgJ2JlZm9yZWVuZCcsIGNvbmZpcm1hdGlvbkh0bWwpXG4gICAgdGhpcy50b2dnbGUoW1xuICAgICAgJy5ib29raW5nLWFyZWEnLCBcbiAgICAgICcuYm9va2luZy1jb25maXJtYXRpb24nXG4gICAgXSlcbiAgfSxcblxuICBjb25maXJtTmV3RGVzdGluYXRpb24obmV3RGVzdGluYXRpb24pIHtcbiAgICB0aGlzLmNsZWFyRGlzcGxheSgnLmNvbmZpcm1hdGlvbicpXG5cbiAgICBsZXQgY29uZmlybWF0aW9uSFRNTCA9IGA8cD5TdWNjZXNzZnVsbHkgYWRkZWQgbmV3IGRlc3RpbmF0aW9uIG9mIFxuICAgIDwvcD48aDI+JHtuZXdEZXN0aW5hdGlvbi5uYW1lfTwvaDI+PHA+IHdpdGggZXN0aW1hdGVkIGxvZGdpbmcgY29zdCBvZiBcbiAgICA8L3A+PGgyPiQke25ld0Rlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5fSBwZXIgZGF5PC9oMj48cD4gXG4gICAgd2l0aCBlc3RpbWF0ZWQgZmxpZ2h0IGNvc3Qgb2YgXG4gICAgPC9wPjxoMj4kJHtuZXdEZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29ufSBwZXIgcGVyc29uIHJvdW5kIHRyaXA8L2gyPjxwPlxuICAgIHRvIHRoZSBzZWxlY3Rpb24gb2YgcG9zc2libGUgcGxhY2VzIGZvciB5b3VyIGNsaWVudHMgdG8gdHJhdmVsITwvcD5cbiAgICA8aW1nIGNsYXNzPVwibmV3LWRlc3RpbmF0aW9uLWltYWdlXCIgc3JjPVwiJHtuZXdEZXN0aW5hdGlvbi5pbWFnZX1cIiBhbHQ9XCIke25ld0Rlc3RpbmF0aW9uLmFsdH1cIj5cbiAgICBgXG5cbiAgICB0aGlzLmFkZERpc3BsYXkoJy5jb25maXJtYXRpb24nLCAnYmVmb3JlZW5kJywgY29uZmlybWF0aW9uSFRNTClcbiAgfSxcblxuICBkaXNwbGF5VG90YWxUcmlwU3BlbmRpbmcodXNlciwgdG9kYXkpIHtcbiAgICB0aGlzLmNsZWFyRGlzcGxheSgnLmludmVzdG1lbnQnKVxuICAgIGxldCBtb25leUhUTUwgPSAnPGgyPlllYXJseSBUcmF2ZWwgSW52ZXN0bWVudDwvaDI+J1xuICAgIGNvbnN0IHRyaXBUb3RhbCA9IHVzZXIuY2FsY3VsYXRlVG90YWxUcmlwU3BlbmRpbmcodG9kYXkpXG4gICAgaWYgKHRyaXBUb3RhbCkge1xuICAgICAgbW9uZXlIVE1MICs9IGA8cD4kJHt0cmlwVG90YWx9PC9wPmBcbiAgICB9IGVsc2Uge1xuICAgICAgbW9uZXlIVE1MID0gJ0V4cGVyaWVuY2VzIGFyZSBpbnZlc3RtZW50czogYm9vayBhIHRyaXAhJ1xuICAgIH1cbiAgICB0aGlzLmFkZERpc3BsYXkoICcuaW52ZXN0bWVudCcsICdiZWZvcmVlbmQnLCBtb25leUhUTUwpXG4gIH0sXG5cbiAgZGlzcGxheVRvdGFsSW5jb21lKHVzZXIsIHRyaXBzKSB7XG4gICAgdGhpcy5jbGVhckRpc3BsYXkoJy5pbmNvbWUnKVxuICAgIGxldCBtb25leUhUTUwgPSAnPGgyPlRvdGFsIFllYXJseSBFYXJuaW5nczwvaDI+J1xuICAgIGNvbnN0IGluY29tZVRvdGFsID0gdXNlci5jYWxjdWxhdGVZZWFybHlJbmNvbWUodHJpcHMpXG4gICAgaWYgKGluY29tZVRvdGFsKSB7XG4gICAgICBtb25leUhUTUwgKz0gYDxwPiQke2luY29tZVRvdGFsfTwvcD5gXG4gICAgfSBlbHNlIHtcbiAgICAgIG1vbmV5SFRNTCArPSAnV29yayBoYXJkLCBwbGF5IGhhcmQ6IGJvb2sgc29tZSB0cmlwcyEnXG4gICAgfVxuICAgIHRoaXMuYWRkRGlzcGxheSggJy5pbmNvbWUnLCAnYmVmb3JlZW5kJywgbW9uZXlIVE1MKVxuICB9LFxuXG4gIGRpc3BsYXlTZWFyY2hSZXN1bHRzKHVzZXJSZXN1bHRzKSB7XG4gICAgdGhpcy5jbGVhckRpc3BsYXkoJy51c2VyLXNlYXJjaC1yZXN1bHRzJylcbiAgICBsZXQgc2VhcmNoUmVzdWx0c0hUTUwgPSBgPGgyPlNlYXJjaCBSZXN1bHRzPC9oMj5gXG4gICAgaWYgKHVzZXJSZXN1bHRzLmxlbmd0aCkge1xuICAgICAgdXNlclJlc3VsdHMuZm9yRWFjaChjbGllbnQgPT4ge1xuICAgICAgc2VhcmNoUmVzdWx0c0hUTUwgKz0gIGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHQtY2FyZCAke2NsaWVudC5pZH1cIj5cbiAgICAgICAgICA8aDI+Q2xpZW50IE5hbWU6PC9oMj5cbiAgICAgICAgICAgIDxwPiR7Y2xpZW50Lm5hbWV9PC9wPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjbGllbnQtdHJpcHMtYnV0dG9uXCI+QWxsIENsaWVudCBUcmlwczwvYnV0dG9uPlxuICAgICAgICA8ZGl2PlxuICAgICAgICBgXG4gICAgICB9KVxuICAgICAgIGNvbnNvbGUubG9nKCdJTkVBQ0gnLCBzZWFyY2hSZXN1bHRzSFRNTClcbiAgICB9IGVsc2Uge1xuICAgICAgIHNlYXJjaFJlc3VsdHNIVE1MICs9ICdTb3JyeSwgbm8gY2xpZW50cyBmb3VuZCB3aXRoIHRoYXQgbmFtZS4uLidcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ0JFRk9SRVJFVFVSTicsIHNlYXJjaFJlc3VsdHNIVE1MKVxuICAgIHRoaXMuYWRkRGlzcGxheSgnLnVzZXItc2VhcmNoLXJlc3VsdHMnLCAnYmVmb3JlZW5kJywgc2VhcmNoUmVzdWx0c0hUTUwpXG4gIH0sXG5cbiAgZGlzcGxheUNsaWVudFRyaXBzRm9yQWdlbnQoY2xpZW50KSB7XG4gICAgdGhpcy5jbGVhckRpc3BsYXkoJy5jbGllbnQtdHJpcHMnKVxuICAgIHRoaXMudG9nZ2xlKFsnLnVzZXItc2VhcmNoLXJlc3VsdHMnLCAnLmNsaWVudC10cmlwcyddKVxuICAgIGxldCBjbGllbnRUcmlwc0hUTUwgPSAnPGRpdiBjbGFzcz1cImNsaWVudC10cmlwcy1jYXJkXCI+PGgyPkNsaWVudCBUcmlwczwvaDI+J1xuICAgIGlmICghY2xpZW50LnRyaXBzLmxlbmd0aCkge1xuICAgICAgY2xpZW50VHJpcHNIVE1MICs9IGBObyB0cmlwcyB0byBkaXNwbGF5LCBiZXR0ZXIgYm9vayBzb21lIHRyaXBzIWBcbiAgICB9IGVsc2Uge1xuICAgICAgY2xpZW50VHJpcHNIVE1MICs9IGNsaWVudC50cmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVDYXJkSHRtbCh0cmlwKSArIFxuICAgICAgICBgXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImFnZW50LXRyaXAtaW50ZXJhY3Rpb25cIlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFwcHJvdmUtYnV0dG9uIGFnZW50LWludGVyYWN0aW9uXCIgXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiYXBwcm92ZSB0cmlwYnV0dG9uXCI+XG4gICAgICAgICAgICBBcHByb3ZlIEJvb2tpbmdcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlamVjdC1idXR0b24gYWdlbnQtaW50ZXJhY3Rpb25cIiBcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJyZWplY3QgdHJpcGJ1dHRvblwiPlxuICAgICAgICAgICAgUmVqZWN0IEJvb2tpbmdcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS10cmlwLWJ1dHRvbiBhZ2VudC1pbnRlcmFjdGlvblwiIFxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImRlbGV0ZXRyaXAgYnV0dG9uXCI+XG4gICAgICAgICAgICBEZWxldGUgVHJpcFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmFjay10by1zZWFyY2gtcmVzdWx0c1wiIFxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cImJhY2sgdG8gc2VhY2ggcmVzdWx0c2J1dHRvblwiPlxuICAgICAgICAgICAgQmFjayB0byBTZWFyY2ggUmVzdWx0c1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgICB9KVxuICAgIH1cbiAgICB0aGlzLmFkZERpc3BsYXkoJy5jbGllbnQtdHJpcHMnLCAnYmVmb3JlZW5kJywgY2xpZW50VHJpcHNIVE1MKVxuICB9LFxuXG4gIGRpc3BsYXlBZ2VudENvbmZpcm1hdGlvbih0cmlwLCBjb25maXJtaW5nV2hhdCkge1xuICAgIHRoaXMuY2xlYXJEaXNwbGF5KCcuY29uZmlybWF0aW9uJylcbiAgICB0aGlzLnRvZ2dsZShbJy5jb25maXJtYXRpb24nLCBdKVxuXG4gICAgY29uc3QgY2xpZW50TmFtZSA9IHRyYXZlbGVycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gdHJpcHMudXNlcklEKS5uYW1lXG4gICAgbGV0IGNvbmZpcm1hdGlvbkh0bWwgPSBgXG4gICAgPGgyPlVwZGF0ZSBDb25maXJtZWQhPC9oMj5cbiAgICAgIDxwPlRyaXAgaWQgIyR7dHJpcC5pZH0gdG8gXG4gICAgICAke3RyaXAubmFtZX0gZm9yIFxuICAgICAgJHtjbGllbnROYW1lfSBoYXMgYmVlbiBcbiAgICAgICR7Y29uZmlybWluZ1doYXR9ITwvcD5cbiAgICBgXG4gICAgdGhpcy5hZGREaXNwbGF5KCcuY29uZmlybWF0aW9uJywgJ2JlZm9yZWVuZCcsIGNvbmZpcm1hdGlvbkh0bWwpXG4gIH0sXG5cbiAgZGlzcGxheVRvZGF5VHJpcHModHJhdmVsZXJzLCB0b2RheSkge1xuICAgIGNvbnN0IHRvZGF5VHJpcHMgPSB0cmF2ZWxlcnMucmVkdWNlKCh0b2RheVRyaXBzLCBjbGllbnQpID0+IHtcbiAgICAgIGNsaWVudC5nZXRUcmlwc1RpbWVsaW5lKHRvZGF5KS5jdXJyZW50VHJpcHMuZm9yRWFjaCh0cmlwID0+IHRvZGF5VHJpcHMucHVzaCh0cmlwKSlcbiAgICAgIHJldHVybiB0b2RheVRyaXBzXG4gICAgfSwgW10pXG5cbiAgICB0aGlzLmRpc3BsYXlUcmlwcyh0b2RheVRyaXBzLCAnLnRvZGF5LXRyYXZlbHMnKVxuICB9LFxuXG4gIGRpc3BsYXlQZW5kaW5nVHJpcHModHJpcHMpIHtcbiAgICBjb25zdCBwZW5kaW5nVHJpcHMgPSB0cmlwcy5maWx0ZXIodHJpcCA9PiB0cmlwLnN0YXR1cyA9PT0gJ3BlbmRpbmcnKVxuXG4gICAgdGhpcy5kaXNwbGF5VHJpcHMocGVuZGluZ1RyaXBzLCAnLnBlbmRpbmctZm9yLWFnZW50JylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGVzOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2FpcnBsYW5lLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2Rlc3RpbmF0aW9uLnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2dsb2JlLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL3RyYXZlbC5zdmdcIjsiLCJpbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2FpcnBsYW5lLnN2Zyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2dsb2JlLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL3RyYXZlbC5zdmcnO1xuaW1wb3J0ICcuL2ltYWdlcy9kZXN0aW5hdGlvbi5zdmcnO1xuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb20tdXBkYXRlcyc7XG5pbXBvcnQgVHJhdmVsZXIgZnJvbSAnLi9UcmF2ZWxlcic7XG5pbXBvcnQgVHJpcCBmcm9tICcuL1RyaXAnO1xuaW1wb3J0IERlc3RpbmF0aW9uIGZyb20gJy4vRGVzdGluYXRpb24nO1xuaW1wb3J0IEFnZW50IGZyb20gJy4vQWdlbnQnO1xuaW1wb3J0IHtnZXREYXRhLCBwb3N0RGF0YSwgZGVsZXRlVHJpcH0gZnJvbSAnLi9hcGlzJztcblxubGV0IHRyYXZlbGVycyA9IFtdO1xubGV0IHRyaXBzID0gW107XG5sZXQgZGVzdGluYXRpb25zID0gW107XG5sZXQgdXNlciwgdG9kYXk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBnZXRQYWdlRGF0YSk7XG5cbmZ1bmN0aW9uIGFkZEV2ZW50KGFyZWEsIGV2ZW50VHlwZSwgZnVuYykge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGFyZWEpLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBmdW5jKVxufVxuXG5hZGRFdmVudCgnLmxvZ2luLWJ1dHRvbicsICdjbGljaycsIGxvZ2luKVxuYWRkRXZlbnQoJy5kaXNwbGF5LWJvb2tpbmctYnV0dG9uJywgJ2NsaWNrJywgZGlzcGxheUJvb2tpbmdGb3JtKVxuYWRkRXZlbnQoJy5ib29raW5nLWZvcm0nLCAnc3VibWl0JywgYm9va1RyaXApXG5hZGRFdmVudCgnLmJvb2tpbmctZXhpdC1idXR0b24nLCAnY2xpY2snLCBkaXNwbGF5Qm9va2luZ0Zvcm0pXG5hZGRFdmVudCgnLnVzZXItc2VhcmNoLWZvcm0nLCAnc3VibWl0Jywgc2VhcmNoRm9yVXNlcilcbmFkZEV2ZW50KCcuZGlzcGxheS1kZXN0aW5hdGlvbi1mb3JtLWJ1dHRvbicsICdjbGljaycsIGRpc3BsYXlEZXN0aW5hdGlvbkZvcm0pXG5hZGRFdmVudCgnLmFkZC1kZXNpbmF0aW9uLWV4aXQtYnV0dG9uJywgJ2NsaWNrJywgZGlzcGxheURlc3RpbmF0aW9uRm9ybSlcbmFkZEV2ZW50KCcuYWRkLWRlc3RpbmF0aW9uLWZvcm0nLCAnc3VibWl0JywgYWRkRGVzdGluYXRpb24pXG5hZGRFdmVudCgnLnVzZXItc2VhcmNoLXJlc3VsdHMnLCAnY2xpY2snLCByZXZpZXdUcmlwcylcblxuZnVuY3Rpb24gZ2V0UGFnZURhdGEoZXZlbnQpIHtcbiAgdHJhdmVsZXJzID0gW107XG4gIHRyaXBzID0gW107XG4gIGRlc3RpbmF0aW9ucyA9IFtdO1xuICBnZXREYXRhKCd0cmF2ZWxlcnMnLCB0cmF2ZWxlcnMpLFxuICBnZXREYXRhKCd0cmlwcycsIHRyaXBzKSxcbiAgZ2V0RGF0YSgnZGVzdGluYXRpb25zJywgZGVzdGluYXRpb25zKVxufVxuXG5mdW5jdGlvbiBsb2dpbihldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGdldFRvZGF5KClcbiAgY29udmVydERhdGFJbnRvQ2xhc3NJbnN0YW5jZXMoKVxuXG4gIGNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lJykudmFsdWVcbiAgY29uc3QgcGFzc3dvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKS52YWx1ZVxuXG4gIGlmICh1c2VybmFtZSA9PT0gJ2FnZW5jeScgJiYgcGFzc3dvcmQgPT09ICd0cmF2ZWwyMDIwJykge1xuICAgIHVzZXIgPSBuZXcgQWdlbnRcbiAgICBkaXNwbGF5QWdlbnREYXNoYm9hcmQodXNlcilcbiAgICBkb21VcGRhdGVzLnRvZ2dsZShbJy5sb2dpbicsICcudHJhdmVsLWFnZW50JywgJy5kaXNwbGF5LWRlc3RpbmF0aW9uLWZvcm0tYnV0dG9uJ10pXG4gIH0gZWxzZSBpZiAodXNlcm5hbWUuaW5jbHVkZXMoJ3RyYXZlbGVyJykgJiYgcGFzc3dvcmQgPT09ICd0cmF2ZWwyMDIwJykge1xuICAgIGZpbmRVc2VyKHVzZXJuYW1lKVxuICAgIGRvbVVwZGF0ZXMudG9nZ2xlKFsnLmxvZ2luJywgJy50cmF2ZWxlcicsICcuZGlzcGxheS1ib29raW5nLWJ1dHRvbiddKVxuICAgIGRpc3BsYXlVc2VyRGFzaGJvYXJkKHVzZXIpXG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoJ1NvcnJ5LCBjaGVjayB1c2VybmFtZSBhbmQgcGFzc3dvcmQgYW5kIHRyeSBhZ2FpbicpXG4gICAgc2V0VGltZW91dChnZXRQYWdlRGF0YSwgMTAwMClcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRUb2RheSgpIHtcbiAgY29uc3QgZGF0ZVRvZGF5ID0gbmV3IERhdGUoKVxuICB0b2RheSA9IGRhdGVUb2RheS50b0xvY2FsZURhdGVTdHJpbmcoJ2VuLVpBJylcbiAgY29uc3QgdG9kYXlGb3JDYWxlbmRhck1pbiA9IHRvZGF5LnNwbGl0KCcvJykuam9pbignLScpXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1kYXRlJylcbiAgICAuc2V0QXR0cmlidXRlKCdtaW4nLCB0b2RheUZvckNhbGVuZGFyTWluKTtcbn1cblxuZnVuY3Rpb24gY29udmVydERhdGFJbnRvQ2xhc3NJbnN0YW5jZXMoKSB7XG4gIGRlc3RpbmF0aW9ucyA9IGRlc3RpbmF0aW9ucy5tYXAoZGVzdGluYXRpb24gPT4gbmV3IERlc3RpbmF0aW9uKGRlc3RpbmF0aW9uKSlcbiAgdHJpcHMgPSB0cmlwcy5tYXAodHJpcCA9PiBuZXcgVHJpcCh0cmlwLCBkZXN0aW5hdGlvbnMpKVxuICB0cmF2ZWxlcnMgPSB0cmF2ZWxlcnMubWFwKHRyYXZlbGVyID0+IG5ldyBUcmF2ZWxlcih0cmF2ZWxlciwgdHJpcHMpKVxufVxuXG5mdW5jdGlvbiBmaW5kVXNlcih1c2VybmFtZSkge1xuICBjb25zdCB1c2VySWQgPSBwYXJzZUludCh1c2VybmFtZS5zbGljZSg4KSlcbiAgdXNlciA9IHRyYXZlbGVycy5maW5kKHRyYXZlbGVyID0+IHRyYXZlbGVyLmlkID09PSB1c2VySWQpXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlVc2VyRGFzaGJvYXJkKCkge1xuICBkb21VcGRhdGVzLmRpc3BsYXlXZWxjb21lQmFubmVyKHVzZXIpXG4gIGRvbVVwZGF0ZXMuZGlzcGxheVRvdGFsVHJpcFNwZW5kaW5nKHVzZXIsIHRvZGF5KVxuICBkb21VcGRhdGVzLmNyZWF0ZUJvb2tpbmdzU2VsZWN0aW9uKGRlc3RpbmF0aW9ucylcbiAgZGlzcGxheVVzZXJUcmlwcyh0b2RheSlcbn1cblxuZnVuY3Rpb24gZGlzcGxheUFnZW50RGFzaGJvYXJkKHVzZXIpIHtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5VG90YWxJbmNvbWUodXNlciwgdHJpcHMpXG4gIGRvbVVwZGF0ZXMuZGlzcGxheVRvZGF5VHJpcHModHJhdmVsZXJzLCB0b2RheSlcbiAgZG9tVXBkYXRlcy5kaXNwbGF5UGVuZGluZ1RyaXBzKHRyaXBzKVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VXNlclRyaXBzKHRvZGF5KSB7XG4gIGNvbnN0IHBlbmRpbmdUcmlwcyA9IHVzZXIudHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5zdGF0dXMgPT09ICdwZW5kaW5nJylcbiAgZG9tVXBkYXRlcy5kaXNwbGF5VHJpcHMocGVuZGluZ1RyaXBzLCAnLnBlbmRpbmctdHJpcHMnKVxuXG4gIGNvbnN0IHRyaXBzVGltZWxpbmUgPSB1c2VyLmdldFRyaXBzVGltZWxpbmUodG9kYXkpXG4gIGRvbVVwZGF0ZXMuZGlzcGxheVRyaXBzKHRyaXBzVGltZWxpbmUuY3VycmVudFRyaXBzLCAnLnByZXNlbnQnKVxuICBkb21VcGRhdGVzLmRpc3BsYXlUcmlwcyh0cmlwc1RpbWVsaW5lLnVwY29taW5nVHJpcHMsICcudXBjb21pbmcnKVxuICBkb21VcGRhdGVzLmRpc3BsYXlUcmlwcyh0cmlwc1RpbWVsaW5lLnBhc3RUcmlwcywgJy5wYXN0JykgXG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlCb29raW5nRm9ybShldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpICBcbiAgZG9tVXBkYXRlcy50b2dnbGUoWycuYm9va2luZy1hcmVhJ10pXG59XG5cbmZ1bmN0aW9uIGJvb2tUcmlwKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBsZXQgc3RhcnREYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlXG4gIHN0YXJ0RGF0ZUlucHV0ID0gc3RhcnREYXRlSW5wdXQucmVwbGFjZUFsbCgnLScsICcvJylcbiAgY29uc3QgZHVyYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdXJhdGlvbicpLnZhbHVlXG4gIGNvbnN0IG51bVRyYXZlbGVyc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI251bS10cmF2ZWxlcnMnKS52YWx1ZVxuICBsZXQgZGVzdGluYXRpb25zSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzdGluYXRpb25zJykudmFsdWVcbiAgZGVzdGluYXRpb25zSW5wdXQgPSBkZXN0aW5hdGlvbnMuZmluZChkZXN0aW5hdGlvbiA9PiBcbiAgICAoZGVzdGluYXRpb24ubmFtZSA9PT0gZGVzdGluYXRpb25zSW5wdXQpKS5pZFxuXG4gIGxldCBwb3N0VHJpcEJvZHkgPSB7XG4gICAgaWQ6IERhdGUubm93KCksIFxuICAgIHVzZXJJRDogdXNlci5pZCwgXG4gICAgZGVzdGluYXRpb25JRDogZGVzdGluYXRpb25zSW5wdXQsIFxuICAgIHRyYXZlbGVyczogbnVtVHJhdmVsZXJzSW5wdXQsIFxuICAgIGRhdGU6IHN0YXJ0RGF0ZUlucHV0LCBcbiAgICBkdXJhdGlvbjogZHVyYXRpb25JbnB1dCwgXG4gICAgc3RhdHVzOiAncGVuZGluZycsIFxuICAgIHN1Z2dlc3RlZEFjdGl2aXRpZXM6IFtdXG4gIH1cblxuICBwb3N0RGF0YSgndHJpcHMnLCBwb3N0VHJpcEJvZHkpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgbmV3VHJpcExvY2FsID0gbmV3IFRyaXAocmVzcG9uc2UubmV3VHJpcCwgZGVzdGluYXRpb25zKVxuICAgICAgdXNlci50cmlwcy5wdXNoKG5ld1RyaXBMb2NhbClcbiAgICAgIGRpc3BsYXlVc2VyRGFzaGJvYXJkKHVzZXIpXG4gICAgICBkb21VcGRhdGVzLmNvbmZpcm1UcmlwQm9va2luZ1N1Ym1pc3Npb24obmV3VHJpcExvY2FsLCBkZXN0aW5hdGlvbnMpXG4gICAgfSlcbn1cblxuZnVuY3Rpb24gc2VhcmNoRm9yVXNlcihldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItc2VhcmNoLWlucHV0JykudmFsdWVcbiAgY29uc3Qgc2VhcmNoUmVzdWx0cyA9IHRyYXZlbGVycy5maWx0ZXIodHJhdmVsZXIgPT4gdHJhdmVsZXIubmFtZS5pbmNsdWRlcyhzZWFyY2hJbnB1dCkpXG4gIGRvbVVwZGF0ZXMuZGlzcGxheVNlYXJjaFJlc3VsdHMoc2VhcmNoUmVzdWx0cylcbn1cblxuZnVuY3Rpb24gZGlzcGxheURlc3RpbmF0aW9uRm9ybShldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGRvbVVwZGF0ZXMudG9nZ2xlKFsnLmFkZC1kZXN0aW5hdGlvbi1hcmVhJ10pXG59XG5cbmZ1bmN0aW9uIGFkZERlc3RpbmF0aW9uKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICBjb25zdCBkZXN0aW5hdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc3RpbmF0aW9uLW5hbWUnKS52YWx1ZVxuICBjb25zdCBsb2RnaW5nUGVyRGF5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9kZ2luZy1wZXItZGF5JykudmFsdWVcbiAgY29uc3QgZmxpZ2h0UGVyRGF5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxpZ2h0LXBlci1wZXJzb24nKS52YWx1ZVxuICBjb25zdCBpbWFnZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc3RpbmF0aW9uLWltYWdlJykudmFsdWVcbiAgY29uc3QgYWx0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWx0LWltYWdlJykudmFsdWVcbiAgXG4gIGNvbnN0IHBvc3REZXN0aW5hdGlvbkJvZHkgPSB7XG4gICAgaWQ6IERhdGUubm93KCksIFxuICAgIGRlc3RpbmF0aW9uOiBkZXN0aW5hdGlvbklucHV0LCBcbiAgICBlc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheTogbG9kZ2luZ1BlckRheUlucHV0LCBcbiAgICBlc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uOiBmbGlnaHRQZXJEYXlJbnB1dCwgXG4gICAgaW1hZ2U6IGltYWdlSW5wdXQsIFxuICAgIGFsdDogYWx0SW5wdXRcbiAgfVxuXG4gIHBvc3REYXRhKCdkZXN0aW5hdGlvbnMnLCBwb3N0RGVzdGluYXRpb25Cb2R5KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IG5ld0Rlc3RpbmF0aW9uTG9jYWwgPSBuZXcgRGVzdGluYXRpb24ocmVzcG9uc2UubmV3RGVzdGluYXRpb24pXG4gICAgICBkaXNwbGF5QWdlbnREYXNoYm9hcmQodXNlcilcbiAgICAgIGRvbVVwZGF0ZXMuY29uZmlybU5ld0Rlc3RpbmF0aW9uKG5ld0Rlc3RpbmF0aW9uTG9jYWwpXG4gICAgICBkb21VcGRhdGVzLnRvZ2dsZShbJy5hZGQtZGVzdGluYXRpb24tYXJlYScsICcuY29uZmlybWF0aW9uJ10pXG4gICAgfSlcblxufVxuXG5mdW5jdGlvbiByZXZpZXdUcmlwcyhldmVudCkge1xuICBjb25zdCB0YXJnZXRDYXJkID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy5zZWFyY2gtcmVzdWx0LWNhcmQnKVxuICBjb25zdCB0YXJnZXRCdXR0b25OYW1lID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLmdldEF0dHJpYnV0ZSgnbmFtZScpXG5cbiAgc3dpdGNoICh0YXJnZXRCdXR0b25OYW1lKSB7XG4gIGNhc2UgJy5jbGllbnQtdHJpcHMtYnV0dG9uJzpcbiAgICBzaG93Q2xpZW50VHJpcHMoZXZlbnQpXG4gIGNhc2UgJ2FwcHJvdmUnOlxuICAgIHVwZGF0ZVRyaXBTdGF0dXMocmV2aWV3ZWRUcmlwLCAnYXBwcm92ZWQnKVxuICAgIGJyZWFrO1xuICBjYXNlICdyZWplY3QnOlxuICAgIHVwZGF0ZVRyaXBTdGF0dXMocmV2aWV3ZWRUcmlwLCAncmVqZWN0ZWQnKVxuICAgIGJyZWFrO1xuICBjYXNlICdkZWxldGUnOlxuICAgIGRlbGV0ZUNsaWVudFRyaXAodHJpcElEKVxuICAgIGJyZWFrO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dDbGllbnRUcmlwcyhldmVudCkge1xuICBjb25zdCBjbGllbnRJRCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdzZWFyY2gtcmVzdWx0LWNhcmQnKVxuICBjb25zdCBjbGllbnQgPSB0cmF2ZWxlcnMuZmluZChjbGllbnQgPT4gY2xpZW50LmlkID09PSBjbGllbnRJRClcblxuICBkb21VcGRhdGVzLmRpc3BsYXlDbGllbnRUcmlwc0ZvckFnZW50KGNsaWVudClcbn1cblxuZnVuY3Rpb24gdXBkYXRlVHJpcFN0YXR1cyh0cmlwLCBzdGF0dXNVcGRhdGUpIHtcbiAgdHJpcC5zdGF0dXMgPSBzdGF0dXNVcGRhdGVcbiAgZGlzcGxheUFnZW50RGFzaGJvYXJkKClcbiAgZG9tVXBkYXRlcy5kaXNwbGF5QWdlbnRDb25maXJtYXRpb24odHJpcCwgc3RhdHVzVXBkYXRlKVxufVxuXG5mdW5jdGlvbiBkZWxldGVDbGllbnRUcmlwKHRyaXBJZCkge1xuICBkZWxldGVUcmlwKHRyaXBJZClcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZVRyaXBJZCA9IHJlc3BvbnNlLmRlbGV0ZWRUcmlwXG4gICAgICBjb25zdCBpbmRleCA9IHRyaXBzLmluZGV4T2YodHJpcCA9PiB0cmlwLmlkID09PSByZXNwb25zZVRyaXBJZClcbiAgICAgIHRyaXBzLnNwbGljZShpbmRleCwgMSlcbiAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheUFnZW50Q29uZmlybWF0aW9uKHRyaXAsICdkZWxldGVkJylcbiAgICB9KVxufSIsImNvbnN0IHRyaXBzID0geyBcbiAgXCJ0cmlwc1wiOiBbXG4gICAge1xuICAgICAgXCJpZFwiOjEsXG4gICAgICBcInVzZXJJRFwiOjQsXG4gICAgICBcImRlc3RpbmF0aW9uSURcIjoxLFxuICAgICAgXCJ0cmF2ZWxlcnNcIjoxLFxuICAgICAgXCJkYXRlXCI6XCIyMDE5LzA5LzE2XCIsXG4gICAgICBcImR1cmF0aW9uXCI6OCxcbiAgICAgIFwic3RhdHVzXCI6XCJhcHByb3ZlZFwiLFxuICAgICAgXCJzdWdnZXN0ZWRBY3Rpdml0aWVzXCI6W11cbiAgICB9LFxuICAgIFxuICAgIHtcbiAgICAgIFwiaWRcIjoyLFxuICAgICAgXCJ1c2VySURcIjoyLFxuICAgICAgXCJkZXN0aW5hdGlvbklEXCI6MjUsXG4gICAgICBcInRyYXZlbGVyc1wiOjUsXG4gICAgICBcImRhdGVcIjpcIjIwMjAvMTAvMDRcIixcbiAgICAgIFwiZHVyYXRpb25cIjoxOCxcbiAgICAgIFwic3RhdHVzXCI6XCJwZW5kaW5nXCIsXG4gICAgICBcInN1Z2dlc3RlZEFjdGl2aXRpZXNcIjpbXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOjMsXG4gICAgICBcInVzZXJJRFwiOjIsXG4gICAgICBcImRlc3RpbmF0aW9uSURcIjoyLFxuICAgICAgXCJ0cmF2ZWxlcnNcIjo0LFxuICAgICAgXCJkYXRlXCI6XCIyMDIwLzA1LzIyXCIsXG4gICAgICBcImR1cmF0aW9uXCI6MTcsXG4gICAgICBcInN0YXR1c1wiOlwicGVuZGluZ1wiLFxuICAgICAgXCJzdWdnZXN0ZWRBY3Rpdml0aWVzXCI6W11cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjo0LFxuICAgICAgXCJ1c2VySURcIjoxLFxuICAgICAgXCJkZXN0aW5hdGlvbklEXCI6MyxcbiAgICAgIFwidHJhdmVsZXJzXCI6MixcbiAgICAgIFwiZGF0ZVwiOlwiMjAyMC8wMi8yNVwiLFxuICAgICAgXCJkdXJhdGlvblwiOjEwLFxuICAgICAgXCJzdGF0dXNcIjpcImFwcHJvdmVkXCIsXG4gICAgICBcInN1Z2dlc3RlZEFjdGl2aXRpZXNcIjpbXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOjUsXG4gICAgICBcInVzZXJJRFwiOjEsXG4gICAgICBcImRlc3RpbmF0aW9uSURcIjo1LFxuICAgICAgXCJ0cmF2ZWxlcnNcIjozLFxuICAgICAgXCJkYXRlXCI6XCIyMDIwLzA0LzMwXCIsXG4gICAgICBcImR1cmF0aW9uXCI6MTgsXG4gICAgICBcInN0YXR1c1wiOlwiYXBwcm92ZWRcIixcbiAgICAgIFwic3VnZ2VzdGVkQWN0aXZpdGllc1wiOltdXG4gICAgfVxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyaXBzOyJdLCJzb3VyY2VSb290IjoiIn0=