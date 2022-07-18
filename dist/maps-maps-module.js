(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maps-maps-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/maps/full-screen-map/full-screen-map.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/full-screen-map/full-screen-map.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Fullscreen Map Starts-->\n<section id=\"fullscreenMap\" class=\"mb-3\">\n    <div class=\"row\">\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" style=\"height: 100%; width: 100%; position: absolute; top: 0px; left: 0px;\n        background-color: rgb(229, 227, 223);\">\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n        </agm-map>\n    </div>\n</section>\n<!--Fullscreen Map Ends-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/maps/google-map/google-map.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/maps/google-map/google-map.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Basic google map starts-->\n<section id=\"map\">\n    <div class=\"row text-left\">\n        <div class=\"col-sm-12\">\n            <div class=\"content-header\">گوگل مپ</div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-content\">\n                    <div class=\"card-body mt-2\">\n                        <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n                            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n                        </agm-map>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Basic google map ends-->");

/***/ }),

/***/ "./src/app/maps/full-screen-map/full-screen-map.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/maps/full-screen-map/full-screen-map.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcHMvZnVsbC1zY3JlZW4tbWFwL2Z1bGwtc2NyZWVuLW1hcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/maps/full-screen-map/full-screen-map.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/maps/full-screen-map/full-screen-map.component.ts ***!
  \*******************************************************************/
/*! exports provided: FullScreenMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenMapComponent", function() { return FullScreenMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FullScreenMapComponent = /** @class */ (function () {
    function FullScreenMapComponent() {
        // Google map lat-long
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    FullScreenMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-full-screen-map',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./full-screen-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/maps/full-screen-map/full-screen-map.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./full-screen-map.component.scss */ "./src/app/maps/full-screen-map/full-screen-map.component.scss")).default]
        })
    ], FullScreenMapComponent);
    return FullScreenMapComponent;
}());



/***/ }),

/***/ "./src/app/maps/google-map/google-map.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/maps/google-map/google-map.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("agm-map {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwcy9nb29nbGUtbWFwL0M6XFxVc2Vyc1xcTWFzaWhcXERlc2t0b3BcXGZyb250XFxhcGV4X3J0bC9zcmNcXGFwcFxcbWFwc1xcZ29vZ2xlLW1hcFxcZ29vZ2xlLW1hcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFwcy9nb29nbGUtbWFwL2dvb2dsZS1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9tYXBzL2dvb2dsZS1tYXAvZ29vZ2xlLW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xuICBoZWlnaHQ6IDMwMHB4O1xufSIsImFnbS1tYXAge1xuICBoZWlnaHQ6IDMwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/maps/google-map/google-map.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/maps/google-map/google-map.component.ts ***!
  \*********************************************************/
/*! exports provided: GoogleMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleMapComponent", function() { return GoogleMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent() {
        // Google map lat-long
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    GoogleMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-google-map',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./google-map.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/maps/google-map/google-map.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./google-map.component.scss */ "./src/app/maps/google-map/google-map.component.scss")).default]
        })
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());



/***/ }),

/***/ "./src/app/maps/maps-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/maps/maps-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MapsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsRoutingModule", function() { return MapsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./full-screen-map/full-screen-map.component */ "./src/app/maps/full-screen-map/full-screen-map.component.ts");
/* harmony import */ var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./google-map/google-map.component */ "./src/app/maps/google-map/google-map.component.ts");





var routes = [
    {
        path: '',
        children: [
            {
                path: 'fullscreen',
                component: _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_3__["FullScreenMapComponent"],
                data: {
                    title: 'Full Screen Map'
                }
            },
            {
                path: 'google',
                component: _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_4__["GoogleMapComponent"],
                data: {
                    title: 'Google Map'
                }
            }
        ]
    }
];
var MapsRoutingModule = /** @class */ (function () {
    function MapsRoutingModule() {
    }
    MapsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MapsRoutingModule);
    return MapsRoutingModule;
}());



/***/ }),

/***/ "./src/app/maps/maps.module.ts":
/*!*************************************!*\
  !*** ./src/app/maps/maps.module.ts ***!
  \*************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _maps_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maps-routing.module */ "./src/app/maps/maps-routing.module.ts");
/* harmony import */ var _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./full-screen-map/full-screen-map.component */ "./src/app/maps/full-screen-map/full-screen-map.component.ts");
/* harmony import */ var _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./google-map/google-map.component */ "./src/app/maps/google-map/google-map.component.ts");







var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _maps_routing_module__WEBPACK_IMPORTED_MODULE_4__["MapsRoutingModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_3__["AgmCoreModule"]
            ],
            declarations: [
                _full_screen_map_full_screen_map_component__WEBPACK_IMPORTED_MODULE_5__["FullScreenMapComponent"],
                _google_map_google_map_component__WEBPACK_IMPORTED_MODULE_6__["GoogleMapComponent"]
            ]
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ })

}]);
//# sourceMappingURL=maps-maps-module.js.map