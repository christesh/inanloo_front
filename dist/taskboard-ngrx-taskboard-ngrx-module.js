(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["taskboard-ngrx-taskboard-ngrx-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/taskboard-ngrx/taskboard-ngrx.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/taskboard-ngrx/taskboard-ngrx.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header px-4\" style=\"direction: rtl; text-align: right;\">\n  <h4 class=\"modal-title\">ثبت طرح جدید</h4>\n\n</div>\n<div class=\"modal-body px-4\">\n  <div class=\"row text-right justify-content-md-center\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <!-- <h4 class=\"card-title\" id=\"from-actions-top-bottom-center\"> ثبت قرارداد</h4> -->\n          <div class=\"alert alert-info\" role=\"alert\">\n            <strong> لطفا کلیه موارد زیر را تکمیل فرمائید </strong>\n          </div>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"px-3\">\n            <form class=\"form\">\n              <div class=\"form-body\">\n                <div class=\"row\">\n                  <div class=\"form-group col-12 mb-2\">\n                    <label for=\"eventInput1\">عنوان طرح</label>\n                    <input type=\"text\" style=\"direction: rtl; text-align: right;\" id=\"eventInput1\" class=\"form-control\"\n                      placeholder=\"نام\" name=\"fullname\">\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"form-group col-12 mb-2\">\n                    <label for=\"eventInput3\">توضیحات طرح</label>\n                    <input type=\"text\" style=\"direction: rtl; text-align: right;\" id=\"eventInput3\" class=\"form-control\"\n                      placeholder=\"شرکت\" name=\"company\">\n                  </div>\n                </div>\n                <div class=\"row\" style=\"direction: rtl; text-align: right;\">\n                  <div class=\"form-group col-12 mb-2\">\n                    <label for=\"eventInput2\"> انتخاب تعهد</label>\n                    <div class=\"row\">\n                      <div class=\"col-4\">\n                        <div class=\"related-widget-wrapper\">\n                          <ng-select [items]=\"items\" [multiple]=\"true\" bindLabel=\"subserv\" groupBy=\"serv\"\n                            [selectableGroup]=\"true\" [selectableGroupAsModel]=\"false\" [closeOnSelect]=\"false\"\n                            bindValue=\"id\" (change)=\"getValues()\" [(ngModel)]=\"selected\"\n                            style=\"direction: rtl;text-align: right; width:100%; margin: auto;\" id=\"sgp\">\n                            <ng-template ng-optgroup-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\">\n                              <div style=\" font-size: larger;color: darkblue;height: 30px;\">\n                                {{item.serv }}\n                              </div>\n                            </ng-template>\n                            <ng-template ng-option-tmp let-item=\"item\" let-item$=\"item$\" let-index=\"index\" id=\"sgp\">\n                              <div style=\"padding-right: 10px;\">\n                                <input id=\"item-{{index}}\" type=\"checkbox\" [ngModel]=\"item$.selected\" id=\"sgp\" />\n                                {{item.subserv}}\n                              </div>\n                            </ng-template>\n                          </ng-select>\n                        </div>\n                      </div>\n                      <div class=\"col-4\">\n                        <button type=\"button\" class=\"btn btn-raised btn-primary\">\n                          <i class=\"fa fa-check-square-o\"></i> ایجاد تعهد جدید\n                        </button>\n                      </div>\n                      <div>\n                        <div *ngFor=\"let hero of ss\">\n                          <div\n                            style=\"width: 100%; margin:auto;background-color: whitesmoke; height: 100%;border: solid 1px gainsboro;border-radius: 8px;margin-top: 10px; font-size: 10px; font-family: myFirstFont1;\">\n                            <div class=\"row\" style=\"direction: rtl;\">\n                              <div class=\"col-sm-8\" style=\"margin: auto; text-align: right;\">\n                                <p style=\"margin-top: 10px; margin-right: 10px;\">{{ hero }}</p>\n                                <label for=\"eventInput3\">حداکثر پوشش</label>\n                                <input type=\"text\" style=\"direction: rtl; text-align: right;\" id=\"eventInput1\"\n                                  class=\"form-control\" placeholder=\"نام\" name=\"fullname\">\n                              </div>\n                              <div class=\"col-sm-4\" style=\"margin: auto;\">\n                                <div style=\"width: 100px;height: 100px; padding: 10px;float: left;\">\n                                  <button type=\"button\" class=\"btn btn-raised btn-warning mr-1\"\n                                    style=\"margin-left: auto;width: 70px;height: 70px; float: left;\"\n                                    (click)=\"loadChildComponent($event, hero);\">انتخاب خدمت</button>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"form-actions center\">\n                  <button type=\"button\" class=\"btn btn-raised btn-warning mr-1\" (click)=\"d('Cross click')\">\n                    <i class=\"ft-x\"></i> انصراف\n                  </button>\n                  <button type=\"button\" class=\"btn btn-raised btn-primary\">\n                    <i class=\"fa fa-check-square-o\"></i> ذخیره\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/taskboard-ngrx/store/taskboard.actions.ts":
/*!***********************************************************!*\
  !*** ./src/app/taskboard-ngrx/store/taskboard.actions.ts ***!
  \***********************************************************/
/*! exports provided: ADD_TODO, AddTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodo", function() { return AddTodo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ADD_TODO = 'ADD_TODO';
var AddTodo = /** @class */ (function () {
    function AddTodo(payload) {
        this.payload = payload;
        this.type = ADD_TODO;
    }
    return AddTodo;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/store/taskboard.reducers.ts":
/*!************************************************************!*\
  !*** ./src/app/taskboard-ngrx/store/taskboard.reducers.ts ***!
  \************************************************************/
/*! exports provided: taskReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskReducer", function() { return taskReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../taskboard-ngrx.model */ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts");
/* harmony import */ var _taskboard_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskboard.actions */ "./src/app/taskboard-ngrx/store/taskboard.actions.ts");



var initialState = {
    todo: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('ریسپانسیو', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'بهمن 17', 'الیزابت الیوت', 'assets/img/portrait/small/avatar-s-3.png', 'جدید'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('تست دیتابیس', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'بهمن 17', 'الیزابت الیوت', 'assets/img/portrait/small/avatar-s-3.png', 'جدید'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('باگ ها', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'بهمن 17', 'الیزابت الیوت', 'assets/img/portrait/small/avatar-s-3.png', 'جدید')
    ],
    inProcess: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('بازبینی پروژه', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'اردیبهشت 11', 'بروس راید', 'assets/img/portrait/small/avatar-s-1.png', 'درحال پردازش'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('نویگیشن سایت', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'اردیبهشت 11', 'بروس راید', 'assets/img/portrait/small/avatar-s-1.png', 'درحال پردازش'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('بوتسترپ 4', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'اردیبهشت 11', 'بروس راید', 'assets/img/portrait/small/avatar-s-1.png', 'درحال پردازش')
    ],
    backLog: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('ارزیابی', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'مرداد 19', 'کلی رایز', 'assets/img/portrait/small/avatar-s-5.png', 'تکمیل'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('زمان بندی', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'مرداد 19', 'کلی رایز', 'assets/img/portrait/small/avatar-s-5.png', 'تکمیل'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('یونیت تست', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'مرداد 19', 'کلی رایز', 'assets/img/portrait/small/avatar-s-5.png', 'تکمیل')
    ],
    completed: [
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('آنگولار 8', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'دی 22', 'سارا کریمی', 'assets/img/portrait/small/avatar-s-7.png', 'تکمیل'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('فیلد ها', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'دی 22', 'سارا کریمی', 'assets/img/portrait/small/avatar-s-7.png', 'تکمیل'),
        new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Task"]('بازبینی وظیفه', 'تغییر عملکرد ها به یک حرکت نرم در ریسپانسیو', 'دی 22', 'سارا کریمی', 'assets/img/portrait/small/avatar-s-7.png', 'تکمیل')
    ]
};
function taskReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (_taskboard_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_TODO"]):
            var todo = state.todo.slice();
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { todo: state.todo.concat([action.payload]) });
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TaskboardNGRXRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXRoutingModule", function() { return TaskboardNGRXRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./taskboard-ngrx.component */ "./src/app/taskboard-ngrx/taskboard-ngrx.component.ts");




var routes = [
    {
        path: '',
        component: _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_3__["TaskboardNGRXComponent"],
        data: {
            title: 'Taskboard'
        },
    }
];
var TaskboardNGRXRoutingModule = /** @class */ (function () {
    function TaskboardNGRXRoutingModule() {
    }
    TaskboardNGRXRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], TaskboardNGRXRoutingModule);
    return TaskboardNGRXRoutingModule;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gh-fork {\n  position: fixed;\n  top: 0;\n  right: 0;\n  border: 0;\n}\n\n/* dragula-specific example page styles */\n\n.dragdrop-wrapper {\n  display: table;\n}\n\n/* .dragdrop-container {\n    display: table-cell;\n    background-color: rgba(255, 255, 255, 0.2);\n    width: 25%;\n  } */\n\n.dragdrop-container:nth-child(odd) {\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n/*\n   * note that styling gu-mirror directly is a bad practice because it's too generic.\n   * you're better off giving the draggable elements a unique class and styling that directly!\n   */\n\n.dragdrop-container > div,\n.gu-mirror {\n  -webkit-transition: opacity 0.4s ease-in-out;\n  transition: opacity 0.4s ease-in-out;\n}\n\n.dragdrop-container > div {\n  cursor: move;\n  cursor: grab;\n  cursor: -webkit-grab;\n}\n\n.gu-mirror {\n  cursor: grabbing;\n  cursor: -webkit-grabbing;\n}\n\n.dragdrop-container .ex-moved {\n  background-color: #e74c3c;\n}\n\n.dragdrop-container.ex-over {\n  background-color: rgba(255, 255, 255, 0.3);\n}\n\n#left-lovehandles > div,\n#right-lovehandles > div {\n  cursor: initial;\n}\n\n.handle {\n  padding: 0 5px;\n  margin-right: 5px;\n  background-color: rgba(0, 0, 0, 0.4);\n  cursor: move;\n}\n\n.image-thing {\n  margin: 20px 0;\n  display: block;\n  text-align: center;\n}\n\n.slack-join {\n  position: absolute;\n  font-weight: normal;\n  font-size: 14px;\n  right: 10px;\n  top: 50%;\n  margin-top: -8px;\n  line-height: 16px;\n}\n\n.taskboard-app-input i.ft.ft-plus-circle {\n  position: relative;\n  top: 2px;\n}\n\n.taskboard-app-input .form-control-position.control-position-right .gallery-icon-title {\n  position: absolute;\n  left: 363px;\n  font-size: 1.2rem;\n  top: 7px;\n}\n\n.taskboard-app-input .form-control-position.control-position-right .gallery-icon-msg {\n  position: absolute;\n  left: 573px;\n  font-size: 1.2rem;\n  top: 7px;\n}\n\n@media (max-width: 992px) {\n  .taskboard-app-input i.ft.ft-plus-circle {\n    padding: 0.25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza2JvYXJkLW5ncngvQzpcXFVzZXJzXFxNYXNpaFxcRGVza3RvcFxcZnJvbnRcXGFwZXhfcnRsL3NyY1xcYXBwXFx0YXNrYm9hcmQtbmdyeFxcdGFza2JvYXJkLW5ncnguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Rhc2tib2FyZC1uZ3J4L3Rhc2tib2FyZC1uZ3J4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQ0NGOztBREVBLHlDQUFBOztBQUNBO0VBQ0UsY0FBQTtBQ0NGOztBREVBOzs7O0tBQUE7O0FBS0E7RUFDRSxvQ0FBQTtBQ0NGOztBREVBOzs7SUFBQTs7QUFJQTs7RUFLRSw0Q0FBQTtFQUFBLG9DQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUVBLG9CQUFBO0FDRkY7O0FES0E7RUFDRSxnQkFBQTtFQUVBLHdCQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtBQ0ZGOztBREtBO0VBQ0UsMENBQUE7QUNGRjs7QURLQTs7RUFFRSxlQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLFlBQUE7QUNGRjs7QURLQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNGRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDRkY7O0FETUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUNISjs7QURNSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtBQ0pOOztBRE9JO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxRQUFBO0FDTE47O0FEVUE7RUFFSTtJQUNFLGdCQUFBO0VDUko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tib2FyZC1uZ3J4L3Rhc2tib2FyZC1uZ3J4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdoLWZvcmsge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuLyogZHJhZ3VsYS1zcGVjaWZpYyBleGFtcGxlIHBhZ2Ugc3R5bGVzICovXG4uZHJhZ2Ryb3Atd3JhcHBlciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4vKiAuZHJhZ2Ryb3AtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbiAgICB3aWR0aDogMjUlO1xuICB9ICovXG4uZHJhZ2Ryb3AtY29udGFpbmVyOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4vKlxuICAgKiBub3RlIHRoYXQgc3R5bGluZyBndS1taXJyb3IgZGlyZWN0bHkgaXMgYSBiYWQgcHJhY3RpY2UgYmVjYXVzZSBpdCdzIHRvbyBnZW5lcmljLlxuICAgKiB5b3UncmUgYmV0dGVyIG9mZiBnaXZpbmcgdGhlIGRyYWdnYWJsZSBlbGVtZW50cyBhIHVuaXF1ZSBjbGFzcyBhbmQgc3R5bGluZyB0aGF0IGRpcmVjdGx5IVxuICAgKi9cbi5kcmFnZHJvcC1jb250YWluZXIgPiBkaXYsXG4uZ3UtbWlycm9yIHtcbiAgLy8gbWFyZ2luOiAxMHB4O1xuICAvLyBwYWRkaW5nOiAxMHB4O1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLmRyYWdkcm9wLWNvbnRhaW5lciA+IGRpdiB7XG4gIGN1cnNvcjogbW92ZTtcbiAgY3Vyc29yOiBncmFiO1xuICBjdXJzb3I6IC1tb3otZ3JhYjtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG59XG5cbi5ndS1taXJyb3Ige1xuICBjdXJzb3I6IGdyYWJiaW5nO1xuICBjdXJzb3I6IC1tb3otZ3JhYmJpbmc7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbn1cblxuLmRyYWdkcm9wLWNvbnRhaW5lciAuZXgtbW92ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xufVxuXG4uZHJhZ2Ryb3AtY29udGFpbmVyLmV4LW92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbiNsZWZ0LWxvdmVoYW5kbGVzID4gZGl2LFxuI3JpZ2h0LWxvdmVoYW5kbGVzID4gZGl2IHtcbiAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG4uaGFuZGxlIHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLmltYWdlLXRoaW5nIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zbGFjay1qb2luIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLXRvcDogLThweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi50YXNrYm9hcmQtYXBwLWlucHV0IHtcbiAgaS5mdC5mdC1wbHVzLWNpcmNsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMnB4O1xuICB9XG4gIC5mb3JtLWNvbnRyb2wtcG9zaXRpb24uY29udHJvbC1wb3NpdGlvbi1yaWdodCB7XG4gICAgLmdhbGxlcnktaWNvbi10aXRsZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAzNjNweDtcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgdG9wOiA3cHg7XG4gICAgfVxuXG4gICAgLmdhbGxlcnktaWNvbi1tc2cge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogNTczcHg7XG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgIHRvcDogN3B4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcbiAgLnRhc2tib2FyZC1hcHAtaW5wdXQge1xuICAgIGkuZnQuZnQtcGx1cy1jaXJjbGUge1xuICAgICAgcGFkZGluZzogMC4yNXJlbTtcbiAgICB9XG4gIH1cbn1cbiIsIi5naC1mb3JrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXI6IDA7XG59XG5cbi8qIGRyYWd1bGEtc3BlY2lmaWMgZXhhbXBsZSBwYWdlIHN0eWxlcyAqL1xuLmRyYWdkcm9wLXdyYXBwZXIge1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLyogLmRyYWdkcm9wLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgd2lkdGg6IDI1JTtcbiAgfSAqL1xuLmRyYWdkcm9wLWNvbnRhaW5lcjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLypcbiAgICogbm90ZSB0aGF0IHN0eWxpbmcgZ3UtbWlycm9yIGRpcmVjdGx5IGlzIGEgYmFkIHByYWN0aWNlIGJlY2F1c2UgaXQncyB0b28gZ2VuZXJpYy5cbiAgICogeW91J3JlIGJldHRlciBvZmYgZ2l2aW5nIHRoZSBkcmFnZ2FibGUgZWxlbWVudHMgYSB1bmlxdWUgY2xhc3MgYW5kIHN0eWxpbmcgdGhhdCBkaXJlY3RseSFcbiAgICovXG4uZHJhZ2Ryb3AtY29udGFpbmVyID4gZGl2LFxuLmd1LW1pcnJvciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cyBlYXNlLWluLW91dDtcbn1cblxuLmRyYWdkcm9wLWNvbnRhaW5lciA+IGRpdiB7XG4gIGN1cnNvcjogbW92ZTtcbiAgY3Vyc29yOiBncmFiO1xuICBjdXJzb3I6IC1tb3otZ3JhYjtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG59XG5cbi5ndS1taXJyb3Ige1xuICBjdXJzb3I6IGdyYWJiaW5nO1xuICBjdXJzb3I6IC1tb3otZ3JhYmJpbmc7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbn1cblxuLmRyYWdkcm9wLWNvbnRhaW5lciAuZXgtbW92ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTc0YzNjO1xufVxuXG4uZHJhZ2Ryb3AtY29udGFpbmVyLmV4LW92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG59XG5cbiNsZWZ0LWxvdmVoYW5kbGVzID4gZGl2LFxuI3JpZ2h0LWxvdmVoYW5kbGVzID4gZGl2IHtcbiAgY3Vyc29yOiBpbml0aWFsO1xufVxuXG4uaGFuZGxlIHtcbiAgcGFkZGluZzogMCA1cHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGN1cnNvcjogbW92ZTtcbn1cblxuLmltYWdlLXRoaW5nIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zbGFjay1qb2luIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHJpZ2h0OiAxMHB4O1xuICB0b3A6IDUwJTtcbiAgbWFyZ2luLXRvcDogLThweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG5cbi50YXNrYm9hcmQtYXBwLWlucHV0IGkuZnQuZnQtcGx1cy1jaXJjbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMnB4O1xufVxuLnRhc2tib2FyZC1hcHAtaW5wdXQgLmZvcm0tY29udHJvbC1wb3NpdGlvbi5jb250cm9sLXBvc2l0aW9uLXJpZ2h0IC5nYWxsZXJ5LWljb24tdGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDM2M3B4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdG9wOiA3cHg7XG59XG4udGFza2JvYXJkLWFwcC1pbnB1dCAuZm9ybS1jb250cm9sLXBvc2l0aW9uLmNvbnRyb2wtcG9zaXRpb24tcmlnaHQgLmdhbGxlcnktaWNvbi1tc2cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDU3M3B4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdG9wOiA3cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAudGFza2JvYXJkLWFwcC1pbnB1dCBpLmZ0LmZ0LXBsdXMtY2lyY2xlIHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.component.ts":
/*!************************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.component.ts ***!
  \************************************************************/
/*! exports provided: TaskboardNGRXComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXComponent", function() { return TaskboardNGRXComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskboard-ngrx.model */ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_taskboard_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/taskboard.actions */ "./src/app/taskboard-ngrx/store/taskboard.actions.ts");





var TaskboardNGRXComponent = /** @class */ (function () {
    function TaskboardNGRXComponent(elRef, store) {
        this.elRef = elRef;
        this.store = store;
    }
    TaskboardNGRXComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskboardState = this.store.select('task');
        this.subscription = this.taskboardState.subscribe(function (data) {
            _this.todo = data.todo;
            _this.inProcess = data.inProcess;
            _this.backLog = data.backLog;
            _this.completed = data.completed;
        });
    };
    TaskboardNGRXComponent.prototype.onAddTask = function () {
        if (this.messageInputRef.nativeElement.value != "" && this.titleInputRef.nativeElement.value != "") {
            this.store.dispatch(new _store_taskboard_actions__WEBPACK_IMPORTED_MODULE_4__["AddTodo"](new _taskboard_ngrx_model__WEBPACK_IMPORTED_MODULE_2__["Task"](this.titleInputRef.nativeElement.value, this.messageInputRef.nativeElement.value, 'Nov 12', 'الیزابت الیوت', 'assets/img/portrait/small/avatar-s-3.png', 'New')));
        }
        this.titleInputRef.nativeElement.value = "";
        this.messageInputRef.nativeElement.value = "";
        this.titleInputRef.nativeElement.focus();
    };
    TaskboardNGRXComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoTitle', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardNGRXComponent.prototype, "titleInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('todoMessage', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], TaskboardNGRXComponent.prototype, "messageInputRef", void 0);
    TaskboardNGRXComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngrx-taskboard',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./taskboard-ngrx.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/taskboard-ngrx/taskboard-ngrx.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./taskboard-ngrx.component.scss */ "./src/app/taskboard-ngrx/taskboard-ngrx.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], TaskboardNGRXComponent);
    return TaskboardNGRXComponent;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.model.ts":
/*!********************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.model.ts ***!
  \********************************************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Task = /** @class */ (function () {
    function Task(taskTitle, taskMessage, createdOn, createdBy, assignedTo, status) {
        this.taskTitle = taskTitle;
        this.taskMessage = taskMessage;
        this.createdOn = createdOn;
        this.createdBy = createdBy;
        this.assignedTo = assignedTo;
        this.status = status;
    }
    return Task;
}());



/***/ }),

/***/ "./src/app/taskboard-ngrx/taskboard-ngrx.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/taskboard-ngrx/taskboard-ngrx.module.ts ***!
  \*********************************************************/
/*! exports provided: TaskboardNGRXModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardNGRXModule", function() { return TaskboardNGRXModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ng2_dragula__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-dragula */ "./node_modules/ng2-dragula/dist/fesm5/ng2-dragula.js");
/* harmony import */ var _taskboard_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./taskboard-ngrx-routing.module */ "./src/app/taskboard-ngrx/taskboard-ngrx-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./taskboard-ngrx.component */ "./src/app/taskboard-ngrx/taskboard-ngrx.component.ts");
/* harmony import */ var _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../taskboard-ngrx/store/taskboard.reducers */ "./src/app/taskboard-ngrx/store/taskboard.reducers.ts");










var TaskboardNGRXModule = /** @class */ (function () {
    function TaskboardNGRXModule() {
    }
    TaskboardNGRXModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__["NgSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _taskboard_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_6__["TaskboardNGRXRoutingModule"],
                ng2_dragula__WEBPACK_IMPORTED_MODULE_5__["DragulaModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('task', _taskboard_ngrx_store_taskboard_reducers__WEBPACK_IMPORTED_MODULE_9__["taskReducer"])
            ],
            declarations: [
                _taskboard_ngrx_component__WEBPACK_IMPORTED_MODULE_8__["TaskboardNGRXComponent"]
            ]
        })
    ], TaskboardNGRXModule);
    return TaskboardNGRXModule;
}());



/***/ })

}]);
//# sourceMappingURL=taskboard-ngrx-taskboard-ngrx-module.js.map