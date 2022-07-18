(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["player-player-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-raised btn-danger btn-block my-2\" (click)=\"open(content)\" style=\"width:20%;\">\n  <i class=\"ft-mail\"></i>ثبت نام بیمه شده</button>\n\n<!-- <div class=\"row text-left\">\n  <div class=\"col-sm-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <h4 class=\"card-title\">فیلترینگ </h4>\n      </div>\n      <div class=\"card-content\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-3\" style=\"margin: 10px;\">\n              <label for=\"eventInput2\"> انتخاب قرارداد</label>\n              <div class=\"row\">\n                <select id=\"projectinput6\" name=\"interested\" class=\"form-control\">\n                  <option value=\"none\" selected=\"\" disabled=\"\"></option>\n                  <option value=\"design\">طراحی</option>\n                  <option value=\"development\">توسعه دهنده</option>\n                  <option value=\"illustration\">تصویر</option>\n                  <option value=\"branding\">نام تجاری</option>\n                  <option value=\"video\">ویدئو</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-sm-3\" style=\"margin: 10px;\">\n              <label for=\"eventInput2\"> انتخاب طرح</label>\n              <div class=\"row\">\n                <select id=\"projectinput6\" name=\"interested\" class=\"form-control\">\n                  <option value=\"none\" selected=\"\" disabled=\"\"></option>\n                  <option value=\"design\">طراحی</option>\n                  <option value=\"development\">توسعه دهنده</option>\n                  <option value=\"illustration\">تصویر</option>\n                  <option value=\"branding\">نام تجاری</option>\n                  <option value=\"video\">ویدئو</option>\n                </select>\n\n              </div>\n            </div>\n            <div class=\"col-sm-3\" style=\"margin: 10px;\">\n              <label for=\"eventInput2\"> انتخاب بیمه گذار</label>\n              <div class=\"row\">\n\n                <select id=\"projectinput6\" name=\"interested\" class=\"form-control\">\n                  <option value=\"none\" selected=\"\" disabled=\"\"></option>\n                  <option value=\"design\">طراحی</option>\n                  <option value=\"development\">توسعه دهنده</option>\n                  <option value=\"illustration\">تصویر</option>\n                  <option value=\"branding\">نام تجاری</option>\n                  <option value=\"video\">ویدئو</option>\n                </select>\n              </div>\n            </div>\n            <div class=\"col-sm-1\" style=\"margin: auto;text-align: center;\">\n              <label for=\"eventInput2\"> </label>\n              <button type=\"button\" class=\"btn btn-raised btn-primary\" style=\"width: 100%;text-align: center;\">\n                <i class=\"fa fa-check-square-o\"></i> اعمال فیلتر\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n<div class=\"row text-left\">\n  <div class=\"col-12\">\n    <div class=\"content-header\">ثبت نام کاربران</div>\n    <p class=\"content-sub-header\">\n     فایل اکسل خود را انتخاب فرمائید\n    </p>\n  </div>\n</div>\n<!--Simple Table Starts-->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-8 form-group\">\n      <input type=\"file\" class=\"form-control\" (change)=\"uploadedFile($event)\" placeholder=\"Upload file\" accept=\".xlsx\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <!-- <div class=\"col-md-2 form-group\">\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"readAsCSV()\">Read as CSV</button>\n    </div> -->\n    <div class=\"col-md-2 form-group\">\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"readAsJson()\">ورود اطلاعات</button>\n    </div>\n    <!-- <div class=\"col-md-2 form-group\">\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"readAsHTML()\">Read as HTML</button>\n    </div>\n    <div class=\"col-md-2 form-group\">\n      <button type=\"button\" class=\"btn btn-info\" (click)=\"readAsText()\">Read as Text</button>\n    </div> -->\n  </div>\n</div>\n\n\n\n<!-- <div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"content-header text-left\">پخش کننده</div>\n    <p class=\"content-sub-header\"></p>\n  </div>\n</div>\n Player Starts \n<section id=\"players\">\n  <div class=\"card\">\n    <div class=\"card-header text-left\">\n      <h4>پخش کننده فیلم</h4>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12\">\n          <vg-player>\n            <vg-overlay-play></vg-overlay-play>\n            <vg-buffering></vg-buffering>\n\n            <vg-scrub-bar>\n              <vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n              <vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n            </vg-scrub-bar>\n\n            <vg-controls>\n              <vg-play-pause></vg-play-pause>\n              <vg-playback-button></vg-playback-button>\n\n              <vg-time-display vgProperty=\"current\" vgFormat=\"mm:ss\"></vg-time-display>\n\n              <vg-scrub-bar style=\"pointer-events: none;\"></vg-scrub-bar>\n\n              <vg-time-display vgProperty=\"left\" vgFormat=\"mm:ss\"></vg-time-display>\n              <vg-time-display vgProperty=\"total\" vgFormat=\"mm:ss\"></vg-time-display>\n\n              <vg-track-selector></vg-track-selector>\n              <vg-mute></vg-mute>\n              <vg-volume></vg-volume>\n\n              <vg-fullscreen></vg-fullscreen>\n            </vg-controls>\n\n            <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" crossorigin>\n              <source src=\"http://static.videogular.com/assets/videos/videogular.mp4\" type=\"video/mp4\">\n              <source src=\"http://static.videogular.com/assets/videos/videogular.ogg\" type=\"video/ogg\">\n              <source src=\"http://static.videogular.com/assets/videos/videogular.webm\" type=\"video/webm\">\n\n              <track kind=\"subtitles\" label=\"English\" src=\"http://static.videogular.com/assets/subs/pale-blue-dot.vtt\"\n                srclang=\"en\" default>\n              <track kind=\"subtitles\" label=\"Español\" src=\"http://static.videogular.com/assets/subs/pale-blue-dot-es.vtt\"\n                srclang=\"es\">\n            </video>\n          </vg-player>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"card audio-player\">\n    <div class=\"card-header text-left\">\n      <h4>پخش کننده آهنگ</h4>\n    </div>\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12\">\n          <vg-player class=\"bg-white\">\n            <audio [vgMedia]=\"media1\" #media1 id=\"singleAudio\" preload=\"auto\" controls style=\"width: 100%\">\n              <source src=\"http://static.videogular.com/assets/audios/videogular.mp3\" type=\"audio/mp3\">\n            </audio>\n          </vg-player>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\nPlayer Ends -->");

/***/ }),

/***/ "./src/app/player/player-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/player/player-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PlayerRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerRoutingModule", function() { return PlayerRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./player.component */ "./src/app/player/player.component.ts");




var routes = [
    {
        path: '',
        component: _player_component__WEBPACK_IMPORTED_MODULE_3__["PlayerComponent"],
        data: {
            title: 'Player'
        },
    }
];
var PlayerRoutingModule = /** @class */ (function () {
    function PlayerRoutingModule() {
    }
    PlayerRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], PlayerRoutingModule);
    return PlayerRoutingModule;
}());



/***/ }),

/***/ "./src/app/player/player.component.scss":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_forms_layouts_basic_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/forms/layouts/basic/api.service */ "./src/app/forms/layouts/basic/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm5/ngx-cookie-service.js");






var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(api, cookieService) {
        this.api = api;
        this.cookieService = cookieService;
        this.title = 'read-excel-in-angular8';
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent.prototype.uploadedFile = function (event) {
        this.fileUploaded = event.target.files[0];
        this.readExcel();
    };
    PlayerComponent.prototype.readExcel = function () {
        var _this = this;
        var readFile = new FileReader();
        readFile.onload = function (e) {
            _this.storeData = readFile.result;
            var data = new Uint8Array(_this.storeData);
            var arr = new Array();
            for (var i = 0; i != data.length; ++i)
                arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = xlsx__WEBPACK_IMPORTED_MODULE_2__["read"](bstr, { type: "binary" });
            var first_sheet_name = workbook.SheetNames[0];
            _this.worksheet = workbook.Sheets[first_sheet_name];
        };
        readFile.readAsArrayBuffer(this.fileUploaded);
    };
    PlayerComponent.prototype.readAsCSV = function () {
        this.csvData = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_csv(this.worksheet);
        var data = new Blob([this.csvData], { type: 'text/csv;charset=utf-8;' });
        file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"](data, "CSVFile" + new Date().getTime() + '.csv');
    };
    PlayerComponent.prototype.readAsJson = function () {
        this.jsonData = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_json(this.worksheet, { raw: false });
        this.jsonData = JSON.stringify(this.jsonData);
        var token_parts = this.cookieService.get('T');
        this.api.importuser(token_parts, this.jsonData).subscribe(function (res) {
            // alert("ok"+res)
        }, function (err) {
            // alert("error"+err)
        });
        var data = new Blob([this.jsonData], { type: "application/json" });
        //   FileSaver.saveAs(data, "JsonFile" + new Date().getTime() + '.json');
        console.log(this.jsonData);
    };
    PlayerComponent.prototype.readAsHTML = function () {
        this.htmlData = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_html(this.worksheet);
        var data = new Blob([this.htmlData], { type: "text/html;charset=utf-8;" });
        file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"](data, "HtmlFile" + new Date().getTime() + '.html');
    };
    PlayerComponent.prototype.readAsText = function () {
        this.textData = xlsx__WEBPACK_IMPORTED_MODULE_2__["utils"].sheet_to_txt(this.worksheet);
        var data = new Blob([this.textData], { type: 'text/plain;charset=utf-8;' });
        file_saver__WEBPACK_IMPORTED_MODULE_3__["saveAs"](data, "TextFile" + new Date().getTime() + '.txt');
    };
    PlayerComponent.ctorParameters = function () { return [
        { type: _app_forms_layouts_basic_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
    ]; };
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player.component.scss */ "./src/app/player/player.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_forms_layouts_basic_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/player/player.module.ts":
/*!*****************************************!*\
  !*** ./src/app/player/player.module.ts ***!
  \*****************************************/
/*! exports provided: PlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerModule", function() { return PlayerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! videogular2/core */ "./node_modules/videogular2/core.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(videogular2_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! videogular2/controls */ "./node_modules/videogular2/controls.js");
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(videogular2_controls__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! videogular2/overlay-play */ "./node_modules/videogular2/overlay-play.js");
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! videogular2/buffering */ "./node_modules/videogular2/buffering.js");
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(videogular2_buffering__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _player_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player-routing.module */ "./src/app/player/player-routing.module.ts");
/* harmony import */ var _player_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./player.component */ "./src/app/player/player.component.ts");









var PlayerModule = /** @class */ (function () {
    function PlayerModule() {
    }
    PlayerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _player_routing_module__WEBPACK_IMPORTED_MODULE_7__["PlayerRoutingModule"],
                videogular2_core__WEBPACK_IMPORTED_MODULE_3__["VgCoreModule"],
                videogular2_controls__WEBPACK_IMPORTED_MODULE_4__["VgControlsModule"],
                videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_5__["VgOverlayPlayModule"],
                videogular2_buffering__WEBPACK_IMPORTED_MODULE_6__["VgBufferingModule"]
            ],
            declarations: [
                _player_component__WEBPACK_IMPORTED_MODULE_8__["PlayerComponent"]
            ]
        })
    ], PlayerModule);
    return PlayerModule;
}());



/***/ })

}]);
//# sourceMappingURL=player-player-module.js.map