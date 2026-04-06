/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/image/about_image.avif"
/*!************************************!*\
  !*** ./src/image/about_image.avif ***!
  \************************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "83b72852b1f57c1be84a.avif";

/***/ },

/***/ "./src/image/home_image.avif"
/*!***********************************!*\
  !*** ./src/image/home_image.avif ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f566bc08ce98cec52f89.avif";

/***/ },

/***/ "./src/image/menu_image.avif"
/*!***********************************!*\
  !*** ./src/image/menu_image.avif ***!
  \***********************************/
(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8ed4bce4aa50cdd75660.avif";

/***/ },

/***/ "./src/about.js"
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeAbout: () => (/* binding */ makeAbout)\n/* harmony export */ });\n/* harmony import */ var _image_about_image_avif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image/about_image.avif */ \"./src/image/about_image.avif\");\n\n\nfunction makeAbout(){\n    const content = document.getElementById(\"content\");\n\n    const title = document.createElement(\"h1\");\n    title.textContent = \"About Us\";\n    content.appendChild(title);\n\n    const description = document.createElement(\"h2\");\n    description.textContent = \"We specialize in [type of cuisine], bringing you carefully crafted dishes made from fresh, high-quality ingredients. Our passion for food comes from [your story – family tradition, love of cooking, cultural inspiration, etc.].\";\n    content.appendChild(description);\n\n    const imageContainer = document.createElement(\"div\");\n    const image = document.createElement(\"img\");\n    image.src = _image_about_image_avif__WEBPACK_IMPORTED_MODULE_0__;\n    image.alt = \"about image\";\n    imageContainer.appendChild(image);\n    content.appendChild(imageContainer);\n\n    const paragraph = document.createElement(\"p\");\n    paragraph.textContent = \"At [Restaurant Name], we believe that dining is more than just eating — it’s an experience. Whether you're here for a quick meal or a special occasion, we aim to make every visit memorable.Join us and enjoy flavors that feel like home.\";\n    content.appendChild(paragraph);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYWJvdXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBa0Q7O0FBRTNDO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG9EQUFVO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcz85NzExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBhYm91dEltYWdlIGZyb20gXCIuL2ltYWdlL2Fib3V0X2ltYWdlLmF2aWZcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VBYm91dCgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQWJvdXQgVXNcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJXZSBzcGVjaWFsaXplIGluIFt0eXBlIG9mIGN1aXNpbmVdLCBicmluZ2luZyB5b3UgY2FyZWZ1bGx5IGNyYWZ0ZWQgZGlzaGVzIG1hZGUgZnJvbSBmcmVzaCwgaGlnaC1xdWFsaXR5IGluZ3JlZGllbnRzLiBPdXIgcGFzc2lvbiBmb3IgZm9vZCBjb21lcyBmcm9tIFt5b3VyIHN0b3J5IOKAkyBmYW1pbHkgdHJhZGl0aW9uLCBsb3ZlIG9mIGNvb2tpbmcsIGN1bHR1cmFsIGluc3BpcmF0aW9uLCBldGMuXS5cIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2Uuc3JjID0gYWJvdXRJbWFnZTtcbiAgICBpbWFnZS5hbHQgPSBcImFib3V0IGltYWdlXCI7XG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJBdCBbUmVzdGF1cmFudCBOYW1lXSwgd2UgYmVsaWV2ZSB0aGF0IGRpbmluZyBpcyBtb3JlIHRoYW4ganVzdCBlYXRpbmcg4oCUIGl04oCZcyBhbiBleHBlcmllbmNlLiBXaGV0aGVyIHlvdSdyZSBoZXJlIGZvciBhIHF1aWNrIG1lYWwgb3IgYSBzcGVjaWFsIG9jY2FzaW9uLCB3ZSBhaW0gdG8gbWFrZSBldmVyeSB2aXNpdCBtZW1vcmFibGUuSm9pbiB1cyBhbmQgZW5qb3kgZmxhdm9ycyB0aGF0IGZlZWwgbGlrZSBob21lLlwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/about.js\n\n}");

/***/ },

/***/ "./src/home.js"
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeHome: () => (/* binding */ makeHome)\n/* harmony export */ });\n/* harmony import */ var _image_home_image_avif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image/home_image.avif */ \"./src/image/home_image.avif\");\n\n\nfunction makeHome(){\n    const content = document.getElementById(\"content\");\n\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Home\";\n    content.appendChild(title);\n\n    const description = document.createElement(\"h2\");\n    description.textContent = \"Wellcome to our restaurant\";\n    content.appendChild(description);\n\n    const imageContainer = document.createElement(\"div\");\n    const image = document.createElement(\"img\");\n    image.src = _image_home_image_avif__WEBPACK_IMPORTED_MODULE_0__;\n    image.alt = \"home image\";\n    imageContainer.appendChild(image);\n    content.appendChild(imageContainer);\n\n    const paragraph = document.createElement(\"p\");\n    paragraph.textContent = \"if i would have a restaurant. It will be shushi restaurant\";\n    content.appendChild(paragraph);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFnRDs7QUFFekM7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQVM7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanM/MDg4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaG9tZUltYWdlIGZyb20gXCIuL2ltYWdlL2hvbWVfaW1hZ2UuYXZpZlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZUhvbWUoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJXZWxsY29tZSB0byBvdXIgcmVzdGF1cmFudFwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgaW1hZ2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBpbWFnZS5zcmMgPSBob21lSW1hZ2U7XG4gICAgaW1hZ2UuYWx0ID0gXCJob21lIGltYWdlXCI7XG4gICAgaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xuXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgcGFyYWdyYXBoLnRleHRDb250ZW50ID0gXCJpZiBpIHdvdWxkIGhhdmUgYSByZXN0YXVyYW50LiBJdCB3aWxsIGJlIHNodXNoaSByZXN0YXVyYW50XCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/home.js\n\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\n\n\nfunction srceenControl(){\n    const content = document.getElementById(\"content\");\n    const home = document.getElementById(\"home\");\n    const about = document.getElementById(\"about\");\n    const menu = document.getElementById(\"menu\");\n\n    const resetContent = () => {\n        content.innerHTML = \"\";\n    }\n\n    home.addEventListener(\"click\", e => {\n        resetContent();\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_1__.makeHome)();\n    });\n\n    about.addEventListener(\"click\", e => {\n        resetContent();\n        (0,_about_js__WEBPACK_IMPORTED_MODULE_0__.makeAbout)();\n    });\n\n    menu.addEventListener(\"click\", e => {\n        resetContent();\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.makeMenu)();\n    });\n}\n\nsrceenControl();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF1QztBQUNGO0FBQ0E7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLGtEQUFRO0FBQ2hCLEtBQUs7O0FBRUw7QUFDQTtBQUNBLFFBQVEsb0RBQVM7QUFDakIsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsUUFBUSxrREFBUTtBQUNoQixLQUFLO0FBQ0w7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanM/ZDQ5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlQWJvdXQgfSBmcm9tIFwiLi9hYm91dC5qc1wiO1xuaW1wb3J0IHsgbWFrZUhvbWUgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBtYWtlTWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcblxuZnVuY3Rpb24gc3JjZWVuQ29udHJvbCgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZVwiKTtcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWJvdXRcIik7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcblxuICAgIGNvbnN0IHJlc2V0Q29udGVudCA9ICgpID0+IHtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cblxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICByZXNldENvbnRlbnQoKTtcbiAgICAgICAgbWFrZUhvbWUoKTtcbiAgICB9KTtcblxuICAgIGFib3V0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgcmVzZXRDb250ZW50KCk7XG4gICAgICAgIG1ha2VBYm91dCgpO1xuICAgIH0pO1xuXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgIHJlc2V0Q29udGVudCgpO1xuICAgICAgICBtYWtlTWVudSgpO1xuICAgIH0pO1xufVxuXG5zcmNlZW5Db250cm9sKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/menu.js"
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeMenu: () => (/* binding */ makeMenu)\n/* harmony export */ });\n/* harmony import */ var _image_menu_image_avif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image/menu_image.avif */ \"./src/image/menu_image.avif\");\n\n\nfunction makeMenu(){\n    const content = document.getElementById(\"content\");\n\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Menu\";\n    content.appendChild(title);\n\n    const description = document.createElement(\"h2\");\n    description.textContent = \"MAIN COURSES\";\n    content.appendChild(description);\n\n    const imageContainer = document.createElement(\"div\");\n    const image = document.createElement(\"img\");\n    image.src = _image_menu_image_avif__WEBPACK_IMPORTED_MODULE_0__;\n    image.alt = \"menu image\";\n    imageContainer.appendChild(image);\n    content.appendChild(imageContainer);\n\n    const paragraph = document.createElement(\"p\");\n    paragraph.textContent = \"Grilled Chicken – Juicy grilled chicken served with rice and fresh salad. $12.99\";\n    content.appendChild(paragraph);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFnRDs7QUFFekM7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsbURBQVM7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanM/NTE3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVudUltYWdlIGZyb20gXCIuL2ltYWdlL21lbnVfaW1hZ2UuYXZpZlwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbWFrZU1lbnUoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJNQUlOIENPVVJTRVNcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIGNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2Uuc3JjID0gbWVudUltYWdlO1xuICAgIGltYWdlLmFsdCA9IFwibWVudSBpbWFnZVwiO1xuICAgIGltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGltYWdlQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IFwiR3JpbGxlZCBDaGlja2VuIOKAkyBKdWljeSBncmlsbGVkIGNoaWNrZW4gc2VydmVkIHdpdGggcmljZSBhbmQgZnJlc2ggc2FsYWQuICQxMi45OVwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n\n}");

/***/ }

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;