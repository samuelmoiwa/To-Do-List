/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: border-box;\\r\\n  -webkit-box-sizing: border-box;\\r\\n  font-family: 'Courier Prime', sans-serif;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background: #3b57a9;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: #041444;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 400px;\\r\\n  margin: 100px auto;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n/* stylelint-disable */\\r\\nsection {\\r\\n  width: 550px;\\r\\n  padding: 10px;\\r\\n  border: 4px solid #041444;\\r\\n  border-radius: 10px;\\r\\n  background: linear-gradient(315deg, #3b57a9, #3252b0);\\r\\n  box-shadow: -19px 16px 32px #233878,\\r\\n  16px -19px 32px #4c70dc;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 24px;\\r\\n  color: #041444;\\r\\n}\\r\\n\\r\\n#list-title {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  height: 50px;\\r\\n  padding: 0 10px;\\r\\n  border-radius: 10px 10px 0 0;\\r\\n  border-bottom: 3px solid #041444;\\r\\n}\\r\\n\\r\\n#title-icon,\\r\\n#add-icon,\\r\\n#item-icon {\\r\\n  cursor: pointer;\\r\\n  transition: 1s;\\r\\n}\\r\\n\\r\\n#add-icon:hover,\\r\\n#item-icon:hover {\\r\\n  transform: translateY(2px);\\r\\n}\\r\\n\\r\\n#input-area {\\r\\n  height: 50px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding: 0 10px;\\r\\n  border-bottom: 2px solid #041444;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  font-style: italic;\\r\\n  color: #041444;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  outline: none;\\r\\n  border: none;\\r\\n  background: transparent;\\r\\n  font-size: 16px;\\r\\n}\\r\\n\\r\\n#do-input {\\r\\n  width: 90%;\\r\\n}\\r\\n\\r\\n.task-item {\\r\\n  color: #041444;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\ninput[type=checkbox] {\\r\\n  accent-color: #0ac36a;\\r\\n  margin-right: 10px;\\r\\n}\\r\\n\\r\\ninput:checked + .task-item {\\r\\n  text-decoration: line-through; \\r\\n}\\r\\n\\r\\n.todo_list_div {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: auto;\\r\\n  max-height: 400px;\\r\\n  overflow: scroll;\\r\\n  scroll-behavior: smooth;\\r\\n  scrollbar-color: #041444;\\r\\n  scrollbar-width: none; /* Firefox */\\r\\n  -ms-overflow-style: none;  /* Internet Explorer 10+ */\\r\\n}\\r\\n\\r\\n.todo_list_div::-webkit-scrollbar { /* WebKit */\\r\\n  width: 0;\\r\\n  height: 0;\\r\\n}\\r\\n\\r\\nli {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  height: 50px;\\r\\n  padding: 0 10px;\\r\\n  border-bottom: 2px solid #041444;\\r\\n}\\r\\n\\r\\n.item-info {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  width: 95%;\\r\\n}\\r\\n\\r\\n.bottom {\\r\\n  display: flex;\\r\\n  height: 50px;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  border-radius: 0 0 10px 10px;\\r\\n}\\r\\n\\r\\n#clear {\\r\\n  font-size: 22px;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n#clear:hover {\\r\\n  text-decoration: underline;\\r\\n}\\r\\n\\r\\n.alert {\\r\\n  color: #db0505;\\r\\n  font-size: 22px;\\r\\n  font-weight: 700;\\r\\n  margin: 25px 0;\\r\\n}\\r\\n/* stylelint-disable */\\r\\n.reset:hover {\\r\\n  -webkit-animation: rotate-center 0.6s ease-in-out both;\\r\\n  animation: rotate-center 0.6s ease-in-out both;\\r\\n}\\r\\n\\r\\n/* stylelint-enable */\\r\\n@-webkit-keyframes rotate-center {\\r\\n  0% {\\r\\n    -webkit-transform: rotate(0);\\r\\n    transform: rotate(0);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    -webkit-transform: rotate(360deg);\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\\r\\n\\r\\n@keyframes rotate-center {\\r\\n  0% {\\r\\n    -webkit-transform: rotate(0);\\r\\n    transform: rotate(0);\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    -webkit-transform: rotate(360deg);\\r\\n    transform: rotate(360deg);\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _icons_refresh_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/refresh.png */ \"./src/icons/refresh.png\");\n/* harmony import */ var _icons_add_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/add.png */ \"./src/icons/add.png\");\n/* harmony import */ var _modules_manage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/manage.js */ \"./src/modules/manage.js\");\n/* harmony import */ var _modules_check_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/check.js */ \"./src/modules/check.js\");\n/* eslint-disable import/no-unresolved */\n\n\n\n\n\n\nconst titleSpan = document.getElementById('title-icon');\nconst addSpan = document.getElementById('add-icon');\nconst icon1 = new Image();\nicon1.src = _icons_refresh_png__WEBPACK_IMPORTED_MODULE_1__;\nicon1.classList.add('reset');\nconst icon2 = new Image();\nicon2.src = _icons_add_png__WEBPACK_IMPORTED_MODULE_2__;\ntitleSpan.appendChild(icon1);\naddSpan.appendChild(icon2);\n\n_modules_manage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].add();\n_modules_manage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].show();\n_modules_manage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove();\n_modules_manage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].edit();\n_modules_manage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].clear();\n(0,_modules_check_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n_modules_manage_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].reset();\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/check.js":
/*!******************************!*\
  !*** ./src/modules/check.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ check)\n/* harmony export */ });\nfunction check() {\n  const inputChecks = document.querySelectorAll('.check');\n  inputChecks.forEach((check) => {\n    check.addEventListener('change', (e) => {\n      let toDos = [];\n      toDos = JSON.parse(localStorage.getItem('toDos') || '[]');\n      toDos.forEach((task) => {\n        if ((e.target.id === `input${task.index}`) && (task.completed === false)) {\n          task.completed = true;\n          e.target.checked = true;\n          localStorage.setItem('toDos', JSON.stringify(toDos));\n        } else if ((e.target.id === `input${task.index}`) && (task.completed === true)) {\n          task.completed = false;\n          e.target.checked = false;\n          localStorage.setItem('toDos', JSON.stringify(toDos));\n        }\n      });\n    });\n  });\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/check.js?");

/***/ }),

/***/ "./src/modules/manage.js":
/*!*******************************!*\
  !*** ./src/modules/manage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ToDo)\n/* harmony export */ });\n/* harmony import */ var _icons_remove_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons/remove.png */ \"./src/icons/remove.png\");\n/* eslint-disable no-restricted-globals */\n/* eslint-disable no-alert */\n/* eslint-disable no-lonely-if */\n\n\nconst icon3 = new Image();\nicon3.src = _icons_remove_png__WEBPACK_IMPORTED_MODULE_0__;\nconst toDos = [];\n\nclass ToDo {\n  constructor(todo) {\n    this.description = todo;\n    this.index = toDos.length + 1;\n    this.id = Date.now().toString();\n    this.completed = false;\n  }\n\n  static add() {\n    const alert = document.querySelector('.alert');\n    const addIcon = document.getElementById('add-icon');\n    const doInput = document.getElementById('do-input');\n    alert.style.display = 'none';\n    addIcon.addEventListener('click', () => {\n      let toDos = [];\n      toDos = JSON.parse(localStorage.getItem('toDos') || '[]');\n      if (doInput.value !== '') {\n        const newTask = new ToDo(doInput.value);\n        toDos.push(newTask);\n        toDos.forEach((task, i) => {\n          task.index = i + 1;\n        });\n        localStorage.setItem('toDos', JSON.stringify(toDos));\n        doInput.value = '';\n        window.location.reload();\n      } else {\n        alert.innerText = 'input in empty, add text!';\n        alert.style.display = 'flex';\n      }\n    });\n  }\n\n  static show() {\n    const todoList = document.getElementById('do-list');\n    const toDos = JSON.parse(localStorage.getItem('toDos') || '[]');\n    let inputCheck = '';\n    todoList.innerHTML = '';\n    toDos.forEach((task) => {\n      if (task.completed === false) {\n        inputCheck = '';\n      } else {\n        inputCheck = 'checked';\n      }\n      todoList.innerHTML += `\n  \n      <li>\n        <div class=\"item-info\">\n          <input ${inputCheck} type=\"checkbox\" class=\"check\" id=\"input${task.index}\">\n          <input id=\"${task.index}\" class=\"task-item\" value=\"${task.description}\">\n        </div>\n        <span id=\"item-icon\">\n          <img src=\"${icon3.src}\" class=\"remove\" id=\"${task.id}\" alt=\"Remove Task\" title=\"Remove Task\">\n        </span>\n      </li>\n    \n      `;\n    });\n  }\n\n  static remove() {\n    const removeIcon = document.querySelectorAll('.remove');\n    removeIcon.forEach((icon) => {\n      icon.addEventListener('click', (e) => {\n        let toDos = JSON.parse(localStorage.getItem('toDos') || '[]');\n        toDos = toDos.filter((task) => task.id !== e.target.id);\n        toDos.forEach((task, i) => {\n          task.index = i + 1;\n        });\n        localStorage.setItem('toDos', JSON.stringify(toDos));\n        window.location.reload();\n      });\n    });\n  }\n\n  static edit() {\n    const taskItems = document.querySelectorAll('.task-item');\n    taskItems.forEach((item) => {\n      item.addEventListener('click', () => {\n        item.style.background = '#ddd';\n        item.setAttribute('contenteditable', 'true');\n      });\n      item.addEventListener('focusout', () => {\n        const toDos = JSON.parse(localStorage.getItem('toDos') || '[]');\n        item.style.background = 'none';\n        toDos.forEach((task) => {\n          if (task.index.toString() === item.id) {\n            task.description = item.value;\n            localStorage.setItem('toDos', JSON.stringify(toDos));\n          }\n        });\n      });\n    });\n  }\n\n  static clear() {\n    const clearButton = document.getElementById('clear');\n    clearButton.addEventListener('click', (e) => {\n      e.preventDefault();\n      let toDos = JSON.parse(localStorage.getItem('toDos') || '[]');\n      toDos = toDos.filter((task) => task.completed === false);\n      localStorage.setItem('toDos', JSON.stringify(toDos));\n      window.location.reload();\n    });\n  }\n\n  static reset() {\n    const resetButton = document.querySelector('.reset');\n    const alert = document.querySelector('.alert');\n    let toDos = JSON.parse(localStorage.getItem('toDos') || '[]');\n    resetButton.addEventListener('click', () => {\n      if (toDos === '') {\n        alert.innerText = 'List is empty.';\n        alert.style.display = 'flex';\n      } else {\n        if (confirm('All items will be remove perminately. Are you sure?')) {\n          toDos = [];\n          localStorage.setItem('toDos', JSON.stringify(toDos));\n          window.location.reload();\n        }\n      }\n    });\n  }\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/manage.js?");

/***/ }),

/***/ "./src/icons/add.png":
/*!***************************!*\
  !*** ./src/icons/add.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"013a2007f2b0adcc09ce.png\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/add.png?");

/***/ }),

/***/ "./src/icons/refresh.png":
/*!*******************************!*\
  !*** ./src/icons/refresh.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"948a1e56a4f73a341975.png\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/refresh.png?");

/***/ }),

/***/ "./src/icons/remove.png":
/*!******************************!*\
  !*** ./src/icons/remove.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2a5b8ecc63cc97974031.png\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/remove.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;