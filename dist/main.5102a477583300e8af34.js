"use strict";
(self["webpackChunkbelajar_webpack_code"] = self["webpackChunkbelajar_webpack_code"] || []).push([["main"],{

/***/ "./src/app/alert.service.js":
/*!**********************************!*\
  !*** ./src/app/alert.service.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var _utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/cekInputValid.js */ "./src/app/utils/cekInputValid.js");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

class AlertService {
  constructor() {
    _defineProperty(this, "tampilkanErrorPenjumlahan", (input, angka) => {
      const hasil = input.reduce((pesan, nilai, index) => {
        if ((0,_utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__.cekInputValid)(angka[index])) {
          return pesan + "";
        } else {
          return pesan + `${nilai} itu bukan angka! `;
        }
      }, "Silahkan masukkan angka yang benar: ");
      this.error.classList.remove("d-none");
      this.error.innerText = hasil;
    });
    _defineProperty(this, "sembunyikanError", () => this.error.classList.add("d-none"));
    this.error = document.querySelector("#error");
  }
}

/***/ }),

/***/ "./src/app/app.js":
/*!************************!*\
  !*** ./src/app/app.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "run": () => (/* binding */ run)
/* harmony export */ });
/* harmony import */ var _utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/cekInputValid.js */ "./src/app/utils/cekInputValid.js");
/* harmony import */ var _utils_parseInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/parseInput.js */ "./src/app/utils/parseInput.js");


const run = (alertService, calculatorService, jokesService) => {
  alertService.sembunyikanError();
  calculatorService.onClick(() => {
    alertService.sembunyikanError();
    const input = calculatorService.getInput();
    const angka = (0,_utils_parseInput_js__WEBPACK_IMPORTED_MODULE_1__.parseInput)(...input);
    if ((0,_utils_cekInputValid_js__WEBPACK_IMPORTED_MODULE_0__.cekInputValid)(...angka)) {
      const [angka1, angka2] = angka;
      calculatorService.setResult(angka1, angka2);
    } else {
      calculatorService.setResult("");
      alertService.tampilkanErrorPenjumlahan(input, angka);
    }
  });
  jokesService.onClick(() => {
    fetch("https://candaan-api.vercel.app/api/text/random").then(response => response.json()).then(data => {
      jokesService.setModal(data.data);
    });
  });
};

/***/ }),

/***/ "./src/app/calculator.service.js":
/*!***************************************!*\
  !*** ./src/app/calculator.service.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalculatorService": () => (/* binding */ CalculatorService)
/* harmony export */ });
class CalculatorService {
  constructor() {
    this.operand1 = document.querySelector("#operand1");
    this.operand2 = document.querySelector("#operand2");
    this.tombolTambah = document.querySelector("#tombol-tambah");
    this.hasil = document.querySelector("#hasil");
  }
  getInput() {
    return [this.operand1.value, this.operand2.value];
  }
  setResult(angka1, angka2) {
    this.hasil.innerText = angka1 + angka2;
  }
  onClick(cb) {
    this.tombolTambah.addEventListener("click", cb);
  }
}

/***/ }),

/***/ "./src/app/jokes.service.js":
/*!**********************************!*\
  !*** ./src/app/jokes.service.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JokesService": () => (/* binding */ JokesService)
/* harmony export */ });
class JokesService {
  constructor() {
    this.tombolJokes = document.querySelector("#jokes-receh");
    this.modalBody = document.querySelector(".modal-body");
  }
  setModal(str) {
    this.modalBody.innerHTML = str;
  }
  onClick(cb) {
    this.tombolJokes.addEventListener("click", cb);
  }
}

/***/ }),

/***/ "./src/app/utils/cekInputValid.js":
/*!****************************************!*\
  !*** ./src/app/utils/cekInputValid.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cekInputValid": () => (/* binding */ cekInputValid)
/* harmony export */ });
const cekInputValid = function () {
  for (var _len = arguments.length, angka = new Array(_len), _key = 0; _key < _len; _key++) {
    angka[_key] = arguments[_key];
  }
  return angka.every(num => typeof num === "number" && !isNaN(num));
};

/***/ }),

/***/ "./src/app/utils/parseInput.js":
/*!*************************************!*\
  !*** ./src/app/utils/parseInput.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseInput": () => (/* binding */ parseInput)
/* harmony export */ });
const parseInput = function () {
  for (var _len = arguments.length, input = new Array(_len), _key = 0; _key < _len; _key++) {
    input[_key] = arguments[_key];
  }
  return input.map(str => parseInt(str));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_app_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.js */ "./src/app/app.js");
/* harmony import */ var _app_alert_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/alert.service.js */ "./src/app/alert.service.js");
/* harmony import */ var _app_calculator_service_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/calculator.service.js */ "./src/app/calculator.service.js");
/* harmony import */ var _app_jokes_service_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/jokes.service.js */ "./src/app/jokes.service.js");
__webpack_require__(/*! ./vendor */ "./src/vendor.js");






const alertService = new _app_alert_service_js__WEBPACK_IMPORTED_MODULE_3__.AlertService();
const calculatorService = new _app_calculator_service_js__WEBPACK_IMPORTED_MODULE_4__.CalculatorService();
const jokesService = new _app_jokes_service_js__WEBPACK_IMPORTED_MODULE_5__.JokesService();
(0,_app_app_js__WEBPACK_IMPORTED_MODULE_2__.run)(alertService, calculatorService, jokesService);
console.log(lodash__WEBPACK_IMPORTED_MODULE_1___default().toUpper("Hello from index.js"));

/***/ }),

/***/ "./src/vendor.js":
/*!***********************!*\
  !*** ./src/vendor.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.esm.js");
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vanilla-tilt */ "./node_modules/vanilla-tilt/lib/vanilla-tilt.js");
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vanilla_tilt__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_bootstrap_dist_js_bootstrap_esm_js-node_modules_vanilla-tilt_lib_vanilla-161c68"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);