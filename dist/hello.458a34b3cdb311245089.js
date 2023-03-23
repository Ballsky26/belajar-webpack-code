"use strict";
(self["webpackChunkbelajar_webpack_code"] = self["webpackChunkbelajar_webpack_code"] || []).push([["hello"],{

/***/ "./src/hello.js":
/*!**********************!*\
  !*** ./src/hello.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

const player = [{
  nama: "Ballsky",
  email: "Ballsky@gmail.com",
  motor: "Suzuki"
}, {
  nama: "Ari",
  email: "ari@gmail.com",
  motor: "Ducati"
}, {
  nama: "Miki",
  email: "miki@gmail.com",
  motor: "Honda"
}];
const ply = lodash__WEBPACK_IMPORTED_MODULE_0___default().find(player, {
  nama: "Miki"
});
console.log(ply);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/hello.js"));
/******/ }
]);