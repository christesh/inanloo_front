(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-ngrx-chat-ngrx-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-ngrx/chat-ngrx.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat-ngrx/chat-ngrx.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"chat-application\">\n  <div #contentOverlay class=\"content-overlay\" (click)=\"onContentOverlay()\"></div>\n  <div [perfectScrollbar] #chatSidebar class=\"chat-sidebar float-left d-none d-sm-none d-md-block d-lg-block\">\n    <div class=\"chat-sidebar-content\">\n      <div class=\"chat-fixed-search p-2\">\n        <form>\n          <div class=\"position-relative has-icon-left\">\n            <input class=\"form-control\" id=\"timesheetinput1\" name=\"employeename\" type=\"text\">\n            <div class=\"form-control-position\">\n              <i class=\"ft-user\"></i>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div id=\"users-list\" class=\"list-group position-relative\">\n        <div class=\"users-list-padding\">\n          <a class=\"list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2\" (click)=\"SetActive($event, 'chat1')\">\n            <span class=\"media\">\n              <span class=\"avatar avatar-md avatar-online\">\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-3.png\"\n                  alt=\"Generic placeholder image\">\n                <i></i>\n              </span>\n              <div class=\"media-body text-left\">\n                <h6 class=\"list-group-item-heading\">المیرا ثابتی\n                  <span class=\"font-small-3 float-right primary\">4:14 صبح</span>\n                </h6>\n                <p class=\"list-group-item-text text-muted\">\n                  <i class=\"ft-check primary font-small-2\"></i> باشه\n                  <span class=\"float-right primary\">\n                    <i class=\"font-medium-1 icon-pin blue-grey lighten-3\"></i>\n                  </span>\n                </p>\n              </div>\n            </span>\n          </a>\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat2')\">\n            <span class=\"media\">\n              <span class=\"avatar avatar-md avatar-busy\">\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-7.png\"\n                  alt=\"Generic placeholder image\">\n                <i></i>\n              </span>\n              <div class=\"media-body  text-left\">\n                <h6 class=\"list-group-item-heading\">کتی ناظری\n                  <span class=\"font-small-3 float-right primary\">9:04 بعد از ظهر</span>\n                </h6>\n                <p class=\"list-group-item-text text-muted\">\n                  <i class=\"ft-check primary font-small-2\"></i> ممنون\n                  <span class=\"float-right\n                        primary\">\n                    <span class=\"badge badge-pill badge-primary\">12</span>\n                  </span>\n                </p>\n              </div>\n            </span>\n          </a>\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat3')\">\n            <span class=\"media\">\n              <span class=\"avatar avatar-md avatar-away\">\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-8.png\"\n                  alt=\"Generic placeholder image\">\n                <i></i>\n              </span>\n              <div class=\"media-body  text-left\">\n                <h6 class=\"list-group-item-heading\">ساره امیری\n                  <span class=\"font-small-3 float-right primary\">2:14 صبح</span>\n                </h6>\n                <p class=\"list-group-item-text text-muted\">\n                  <i class=\"ft-check font-small-2\"></i> سلام امیر\n                  <span class=\"float-right primary\">\n                    <i class=\"font-medium-1 icon-volume-off blue-grey lighten-3 mr-1\"></i>\n                    <span class=\"badge badge-pill badge-primary\">3</span>\n                  </span>\n                </p>\n              </div>\n            </span>\n          </a>\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat4')\">\n            <span class=\"media\">\n              <span class=\"avatar avatar-md avatar-away\">\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-5.png\"\n                  alt=\"Generic placeholder image\">\n                <i></i>\n              </span>\n              <div class=\"media-body  text-left\">\n                <h6 class=\"list-group-item-heading\">حسین امیری\n                  <span class=\"font-small-3 float-right primary\">دیروز</span>\n                </h6>\n                <p class=\"list-group-item-text text-muted\">\n                  <i class=\"ft-check font-small-2\"></i> شما را متصل خواهد کرد</p>\n              </div>\n            </span>\n          </a>\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat5')\">\n            <span class=\"media\">\n              <span class=\"avatar avatar-md avatar-online\">\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-9.png\"\n                  alt=\"Generic placeholder image\">\n                <i></i>\n              </span>\n              <div class=\"media-body  text-left\">\n                <h6 class=\"list-group-item-heading\">حانیه توسلی\n                  <span class=\"font-small-3 float-right primary\">جمعه</span>\n                </h6>\n                <p class=\"list-group-item-text text-muted\">\n                  <i class=\"ft-check font-small-2\"></i> ممنون\n                  <span class=\"float-right primary\">\n                    <span class=\"badge badge-pill badge-primary\">4</span>\n                  </span>\n                </p>\n              </div>\n            </span>\n          </a>\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat6')\">\n            <span class=\"media\">\n              <span class=\"avatar avatar-md avatar-busy\">\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-4.png\"\n                  alt=\"Generic placeholder image\">\n                <i></i>\n              </span>\n              <div class=\"media-body  text-left\">\n                <h6 class=\"list-group-item-heading\">رویا احمدی\n                  <span class=\"font-small-3 float-right primary\">سه شنبه</span>\n                </h6>\n                <p class=\"list-group-item-text text-muted\">\n                  <i class=\"ft-check font-small-2\"></i> خیلی ممنون</p>\n              </div>\n            </span>\n          </a>\n          <a class=\"list-group-item no-border\" (click)=\"SetActive($event,'chat7')\">\n            <span class=\"media\">\n              <span class=\"avatar avatar-md avatar-online\">\n                <img class=\"media-object d-flex mr-3 bg-primary height-50 rounded-circle\" src=\"assets/img/portrait/small/avatar-s-14.png\"\n                  alt=\"Generic placeholder image\">\n                <i></i>\n              </span>\n              <div class=\"media-body  text-left\">\n                <h6 class=\"list-group-item-heading\">نسرین زمانی</h6>\n                <p class=\"list-group-item-text text-muted\">\n                  <i class=\"ft-check primary font-small-2\"></i> شما؟</p>\n              </div>\n            </span>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"chat-name p-2 bg-white\">\n    <div class=\"media\">\n      <span class=\"chat-app-sidebar-toggle ft-align-justify font-large-1 mr-2 d-none d-block d-sm-block d-md-none\" (click)=\"onSidebarToggle()\"></span>\n      <div class=\"media-body text-left\">\n        <img [src]=\"[activeChatUserImg]\" width=\"37\" class=\"rounded-circle mr-1\" alt=\"avatar\" />\n        <span>{{ activeChatUser }}</span>\n        <i class=\"ft-more-vertical float-right mt-1\"></i>\n      </div>\n    </div>\n  </div>\n  <section class=\"chat-app-window\" #scrollMe [scrollTop]=\"scrollMe.scrollHeight\">\n    <div class=\"badge badge-dark mb-1\">NgRx تاریخچه چت  </div>\n    \n    <div class=\"chats\">\n      <div class=\"chats\">\n        <div [ngClass]=\"[chat.chatClass]\" *ngFor=\"let chat of chat\">\n          <div class=\"chat-avatar\">\n            <a class=\"avatar\" data-toggle=\"tooltip\" data-placement=\"[chat.avatar]\" title=\"\" data-original-title=\"\">\n              <img [src]=\"[chat.imagePath]\" class=\"width-50\" alt=\"avatar\" />\n            </a>\n          </div>\n          <div class=\"chat-body\">\n            <div class=\"chat-content\" *ngFor=\"let message of chat.messages\">\n              <p *ngIf=\"chat.messageType === 'text'\">{{ message }}</p>\n              <vg-player *ngIf=\"chat.messageType === 'audio'\">\n                <audio [vgMedia]=\"media1\" #media1 id=\"singleAudio\" preload=\"auto\" controls>\n                  <source [src]=\"message\" type=\"audio/mp3\">\n                </audio>\n              </vg-player>\n              <vg-player *ngIf=\"chat.messageType === 'video'\" style=\"height: 250px; width: 250px\">\n                <video [vgMedia]=\"media\" #media id=\"singleVideo\" preload=\"auto\" controls>\n                  <source [src]=\"message\" type=\"video/mp4\">\n                </video>\n              </vg-player>\n            </div>\n          </div>\n          <p class=\"time\" *ngIf=\"chat.time !='' \">{{chat.time}}</p>\n        </div>\n\n        <div class=\"chat\" *ngIf=\"messages.length > 0\">\n          <div class=\"chat-avatar\">\n            <a class=\"avatar\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"\" data-original-title=\"\">\n              <img src=\"assets/img/portrait/small/avatar-s-1.png\" class=\"width-50\" alt=\"avatar\" />\n            </a>\n          </div>\n          <div class=\"chat-body\">\n            <div class=\"chat-content\" *ngFor=\"let message of messages\">\n              <p>{{ message }}</p>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </section>\n  <section class=\"chat-app-form bg-blue-grey bg-lighten-5\">\n    <form class=\"chat-app-input row mt-2\">\n      <fieldset class=\"form-group position-relative has-icon-left col-lg-10 col-8 m-0 px-3\">\n        <div class=\"form-control-position\">\n          <i class=\"icon-emoticon-smile\"></i>\n        </div>\n        <input type=\"text\" class=\"form-control\" id=\"iconLeft4\" placeholder=\"پیامتان را بنویسید\" (keydown.enter)=\"onAddMessage();$event.preventDefault()\"\n        #messageInput>\n        <div class=\"form-control-position control-position-right\">\n          <i class=\"ft-image mr-1\"></i>\n        </div>\n      </fieldset>\n      <fieldset class=\"form-group position-relative has-icon-left col-lg-2 col-4 m-0\">\n        <button type=\"button\" class=\"btn btn-raised btn-primary px-4\" (click)=\"onAddMessage()\">\n          <i class=\"fa fa-paper-plane-o d-block d-xl-inline-block d-lg-none p-0\"></i>\n          <span class=\"d-none d-lg-inline-block ml-1\">ارسال</span>\n        </button>\n      </fieldset>\n    </form>\n  </section>\n</div>\n");

/***/ }),

/***/ "./src/app/chat-ngrx/chat-ngrx-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/chat-ngrx/chat-ngrx-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ChatNGRXRoutingModule, routedComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatNGRXRoutingModule", function() { return ChatNGRXRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routedComponents", function() { return routedComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _chat_ngrx_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat-ngrx.component */ "./src/app/chat-ngrx/chat-ngrx.component.ts");




var routes = [
    {
        path: '',
        component: _chat_ngrx_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"],
        data: {
            title: 'Chat'
        },
    }
];
var ChatNGRXRoutingModule = /** @class */ (function () {
    function ChatNGRXRoutingModule() {
    }
    ChatNGRXRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], ChatNGRXRoutingModule);
    return ChatNGRXRoutingModule;
}());

var routedComponents = [_chat_ngrx_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"]];


/***/ }),

/***/ "./src/app/chat-ngrx/chat-ngrx.component.scss":
/*!****************************************************!*\
  !*** ./src/app/chat-ngrx/chat-ngrx.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".chat-application .chat-app-form {\n  position: relative;\n  padding: 10px 10px;\n  overflow: hidden;\n}\n.chat-application .chat-app-form .form-group i.fa.fa-paper-plane-o {\n  padding: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1uZ3J4L0M6XFxVc2Vyc1xcTWFzaWhcXERlc2t0b3BcXGZyb250XFxhcGV4X3J0bC9zcmNcXGFwcFxcY2hhdC1uZ3J4XFxjaGF0LW5ncnguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NoYXQtbmdyeC9jaGF0LW5ncnguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdNO0VBQ0UsZ0JBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtbmdyeC9jaGF0LW5ncnguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhdC1hcHBsaWNhdGlvbiB7XG4gIC5jaGF0LWFwcC1mb3JtIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTBweCAxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAuZm9ybS1ncm91cCB7XG4gICAgICBpLmZhLmZhLXBhcGVyLXBsYW5lLW8ge1xuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG59XG4iLCIuY2hhdC1hcHBsaWNhdGlvbiAuY2hhdC1hcHAtZm9ybSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNoYXQtYXBwbGljYXRpb24gLmNoYXQtYXBwLWZvcm0gLmZvcm0tZ3JvdXAgaS5mYS5mYS1wYXBlci1wbGFuZS1vIHtcbiAgcGFkZGluZzogMC4yNXJlbTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/chat-ngrx/chat-ngrx.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-ngrx/chat-ngrx.component.ts ***!
  \**************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-ngrx.model */ "./src/app/chat-ngrx/chat-ngrx.model.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_chat_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/chat.actions */ "./src/app/chat-ngrx/store/chat.actions.ts");





var ChatComponent = /** @class */ (function () {
    function ChatComponent(elRef, renderer, store) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.store = store;
        this.currentChatId = 'chat1';
        this.messages = new Array();
        this.item = 0;
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        // $.getScript('./assets/js/chat.js');
        this.chatState = this.store.select('chat');
        this.subscription = this.chatState.subscribe(function (data) {
            _this.chat = data.chat1;
            _this.activeChatUser = "الیزابت الیوت";
            _this.activeChatUserImg = "assets/img/portrait/small/avatar-s-3.png";
        });
    };
    ChatComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ChatComponent.prototype.onSidebarToggle = function () {
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-none');
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-sm-none');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-block');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-sm-block');
        this.renderer.addClass(this.overlay.nativeElement, 'show');
    };
    ChatComponent.prototype.onContentOverlay = function () {
        this.renderer.removeClass(this.overlay.nativeElement, 'show');
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-block');
        this.renderer.removeClass(this.sidebar.nativeElement, 'd-sm-block');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-none');
        this.renderer.addClass(this.sidebar.nativeElement, 'd-sm-none');
    };
    //send button function calls
    ChatComponent.prototype.onAddMessage = function () {
        if (this.messageInputRef.nativeElement.value != "") {
            if (this.currentChatId === 'chat1') {
                this.store.dispatch(new _store_chat_actions__WEBPACK_IMPORTED_MODULE_4__["AddChat1"](new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                    this.messageInputRef.nativeElement.value
                ], 'text')));
            }
            else if (this.currentChatId === 'chat2') {
                this.store.dispatch(new _store_chat_actions__WEBPACK_IMPORTED_MODULE_4__["AddChat2"](new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                    this.messageInputRef.nativeElement.value
                ], 'text')));
            }
            else if (this.currentChatId === 'chat3') {
                this.store.dispatch(new _store_chat_actions__WEBPACK_IMPORTED_MODULE_4__["AddChat3"](new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                    this.messageInputRef.nativeElement.value
                ], 'text')));
            }
            else if (this.currentChatId === 'chat4') {
                this.store.dispatch(new _store_chat_actions__WEBPACK_IMPORTED_MODULE_4__["AddChat4"](new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                    this.messageInputRef.nativeElement.value
                ], 'text')));
            }
            else if (this.currentChatId === 'chat5') {
                this.store.dispatch(new _store_chat_actions__WEBPACK_IMPORTED_MODULE_4__["AddChat5"](new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                    this.messageInputRef.nativeElement.value
                ], 'text')));
            }
            else if (this.currentChatId === 'chat6') {
                this.store.dispatch(new _store_chat_actions__WEBPACK_IMPORTED_MODULE_4__["AddChat6"](new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                    this.messageInputRef.nativeElement.value
                ], 'text')));
            }
            else if (this.currentChatId === 'chat7') {
                this.store.dispatch(new _store_chat_actions__WEBPACK_IMPORTED_MODULE_4__["AddChat7"](new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_2__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
                    this.messageInputRef.nativeElement.value
                ], 'text')));
            }
        }
        this.messageInputRef.nativeElement.value = "";
        this.messageInputRef.nativeElement.focus();
    };
    //chat user list click event function
    ChatComponent.prototype.SetActive = function (event, chatId) {
        var _this = this;
        this.currentChatId = chatId;
        var hElement = this.elRef.nativeElement;
        //now you can simply get your elements with their class name
        var allAnchors = hElement.getElementsByClassName('list-group-item');
        //do something with selected elements
        [].forEach.call(allAnchors, function (item) {
            item.setAttribute('class', 'list-group-item no-border');
        });
        //set active class for selected item
        event.currentTarget.setAttribute('class', 'list-group-item bg-blue-grey bg-lighten-5 border-right-primary border-right-2');
        this.messages = [];
        if (chatId === 'chat1') {
            this.subscription = this.store.select('chat').subscribe(function (data) {
                _this.chat = data.chat1;
                _this.activeChatUser = "الیزابت الیوت";
                _this.activeChatUserImg = "assets/img/portrait/small/avatar-s-3.png";
            });
        }
        else if (chatId === 'chat2') {
            this.subscription = this.store.select('chat').subscribe(function (data) {
                _this.chat = data.chat2;
                _this.activeChatUser = "کریستوفر کندی";
                _this.activeChatUserImg = "assets/img/portrait/small/avatar-s-7.png";
            });
        }
        else if (chatId === 'chat3') {
            this.subscription = this.store.select('chat').subscribe(function (data) {
                _this.chat = data.chat3;
                _this.activeChatUser = "سارا کریمی";
                _this.activeChatUserImg = "assets/img/portrait/small/avatar-s-8.png";
            });
        }
        else if (chatId === 'chat4') {
            this.subscription = this.store.select('chat').subscribe(function (data) {
                _this.chat = data.chat4;
                _this.activeChatUser = "بروس راید";
                _this.activeChatUserImg = "assets/img/portrait/small/avatar-s-5.png";
            });
        }
        else if (chatId === 'chat5') {
            this.subscription = this.store.select('chat').subscribe(function (data) {
                _this.chat = data.chat5;
                _this.activeChatUser = "هادر هاول";
                _this.activeChatUserImg = "assets/img/portrait/small/avatar-s-9.png";
            });
        }
        else if (chatId === 'chat6') {
            this.subscription = this.store.select('chat').subscribe(function (data) {
                _this.chat = data.chat6;
                _this.activeChatUser = "کلی رایز";
                _this.activeChatUserImg = "assets/img/portrait/small/avatar-s-4.png";
            });
        }
        else if (chatId === 'chat7') {
            this.subscription = this.store.select('chat').subscribe(function (data) {
                _this.chat = data.chat7;
                _this.activeChatUser = "وینسنت نلسون";
                _this.activeChatUserImg = "assets/img/portrait/small/avatar-s-14.png";
            });
        }
    };
    ChatComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageInput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatComponent.prototype, "messageInputRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chatSidebar', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatComponent.prototype, "sidebar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contentOverlay', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatComponent.prototype, "overlay", void 0);
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ngrx-chat',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat-ngrx.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat-ngrx/chat-ngrx.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat-ngrx.component.scss */ "./src/app/chat-ngrx/chat-ngrx.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/chat-ngrx/chat-ngrx.model.ts":
/*!**********************************************!*\
  !*** ./src/app/chat-ngrx/chat-ngrx.model.ts ***!
  \**********************************************/
/*! exports provided: Chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chat", function() { return Chat; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Chat = /** @class */ (function () {
    function Chat(avatar, chatClass, imagePath, time, messages, messageType) {
        this.avatar = avatar;
        this.chatClass = chatClass;
        this.imagePath = imagePath;
        this.time = time;
        this.messages = messages;
        this.messageType = messageType;
    }
    return Chat;
}());



/***/ }),

/***/ "./src/app/chat-ngrx/chat-ngrx.module.ts":
/*!***********************************************!*\
  !*** ./src/app/chat-ngrx/chat-ngrx.module.ts ***!
  \***********************************************/
/*! exports provided: ChatNGRXModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatNGRXModule", function() { return ChatNGRXModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! videogular2/core */ "./node_modules/videogular2/core.js");
/* harmony import */ var videogular2_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(videogular2_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! videogular2/controls */ "./node_modules/videogular2/controls.js");
/* harmony import */ var videogular2_controls__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(videogular2_controls__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! videogular2/overlay-play */ "./node_modules/videogular2/overlay-play.js");
/* harmony import */ var videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! videogular2/buffering */ "./node_modules/videogular2/buffering.js");
/* harmony import */ var videogular2_buffering__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(videogular2_buffering__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _chat_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat-ngrx-routing.module */ "./src/app/chat-ngrx/chat-ngrx-routing.module.ts");
/* harmony import */ var _chat_ngrx_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat-ngrx.component */ "./src/app/chat-ngrx/chat-ngrx.component.ts");
/* harmony import */ var _chat_ngrx_store_chat_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../chat-ngrx/store/chat.reducers */ "./src/app/chat-ngrx/store/chat.reducers.ts");












var ChatNGRXModule = /** @class */ (function () {
    function ChatNGRXModule() {
    }
    ChatNGRXModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _chat_ngrx_routing_module__WEBPACK_IMPORTED_MODULE_9__["ChatNGRXRoutingModule"],
                videogular2_core__WEBPACK_IMPORTED_MODULE_4__["VgCoreModule"],
                videogular2_controls__WEBPACK_IMPORTED_MODULE_5__["VgControlsModule"],
                videogular2_overlay_play__WEBPACK_IMPORTED_MODULE_6__["VgOverlayPlayModule"],
                videogular2_buffering__WEBPACK_IMPORTED_MODULE_7__["VgBufferingModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('chat', _chat_ngrx_store_chat_reducers__WEBPACK_IMPORTED_MODULE_11__["chatReducer"]),
            ],
            declarations: [
                _chat_ngrx_component__WEBPACK_IMPORTED_MODULE_10__["ChatComponent"]
            ]
        })
    ], ChatNGRXModule);
    return ChatNGRXModule;
}());



/***/ }),

/***/ "./src/app/chat-ngrx/store/chat.actions.ts":
/*!*************************************************!*\
  !*** ./src/app/chat-ngrx/store/chat.actions.ts ***!
  \*************************************************/
/*! exports provided: ADD_CHAT1, ADD_CHAT2, ADD_CHAT3, ADD_CHAT4, ADD_CHAT5, ADD_CHAT6, ADD_CHAT7, AddChat1, AddChat2, AddChat3, AddChat4, AddChat5, AddChat6, AddChat7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAT1", function() { return ADD_CHAT1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAT2", function() { return ADD_CHAT2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAT3", function() { return ADD_CHAT3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAT4", function() { return ADD_CHAT4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAT5", function() { return ADD_CHAT5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAT6", function() { return ADD_CHAT6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHAT7", function() { return ADD_CHAT7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChat1", function() { return AddChat1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChat2", function() { return AddChat2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChat3", function() { return AddChat3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChat4", function() { return AddChat4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChat5", function() { return AddChat5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChat6", function() { return AddChat6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddChat7", function() { return AddChat7; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var ADD_CHAT1 = 'ADD_CHAT1';
var ADD_CHAT2 = 'ADD_CHAT2';
var ADD_CHAT3 = 'ADD_CHAT3';
var ADD_CHAT4 = 'ADD_CHAT4';
var ADD_CHAT5 = 'ADD_CHAT5';
var ADD_CHAT6 = 'ADD_CHAT6';
var ADD_CHAT7 = 'ADD_CHAT7';
var AddChat1 = /** @class */ (function () {
    function AddChat1(payload) {
        this.payload = payload;
        this.type = ADD_CHAT1;
    }
    return AddChat1;
}());

var AddChat2 = /** @class */ (function () {
    function AddChat2(payload) {
        this.payload = payload;
        this.type = ADD_CHAT2;
    }
    return AddChat2;
}());

var AddChat3 = /** @class */ (function () {
    function AddChat3(payload) {
        this.payload = payload;
        this.type = ADD_CHAT3;
    }
    return AddChat3;
}());

var AddChat4 = /** @class */ (function () {
    function AddChat4(payload) {
        this.payload = payload;
        this.type = ADD_CHAT4;
    }
    return AddChat4;
}());

var AddChat5 = /** @class */ (function () {
    function AddChat5(payload) {
        this.payload = payload;
        this.type = ADD_CHAT5;
    }
    return AddChat5;
}());

var AddChat6 = /** @class */ (function () {
    function AddChat6(payload) {
        this.payload = payload;
        this.type = ADD_CHAT6;
    }
    return AddChat6;
}());

var AddChat7 = /** @class */ (function () {
    function AddChat7(payload) {
        this.payload = payload;
        this.type = ADD_CHAT7;
    }
    return AddChat7;
}());



/***/ }),

/***/ "./src/app/chat-ngrx/store/chat.reducers.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-ngrx/store/chat.reducers.ts ***!
  \**************************************************/
/*! exports provided: chatReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chatReducer", function() { return chatReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chat-ngrx.model */ "./src/app/chat-ngrx/chat-ngrx.model.ts");
/* harmony import */ var _chat_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat.actions */ "./src/app/chat-ngrx/store/chat.actions.ts");



var initialState = {
    chat1: [
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'چطور میتونم بهتون کمک کنم؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-3.png', '1 ساعت قبل', [
            'سلام خانم کاظمی، من به دنبال یکی از بهترین قالب های مدیریت هستم',
            'میشه کمکم کنی تا اینو پیدا کنم؟',
            'من دنبال قالب مدیریت با انگولار 8 هستم'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '30 دقیقه قبل', [
            'حتتتتتما!',
            'من بهت پیشنهاد میکنم که همینو بخر خیلی خوبه'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-3.png', '20 دقیقه قبل', [
            'میشه برام فایل صوتی بفرستی؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'http://static.videogular.com/assets/audios/videogular.mp3'
        ], 'audio'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-3.png', '10 دقیقه قبل', [
            'میشه حالا برام فایل ویدئویی بفرستی؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'http://static.videogular.com/assets/videos/videogular.mp4'
        ], 'video'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-3.png', 'همین حالا', [
            'به به ببین چه قالب تمیز و خوشگلیه',
            'این واسه پروژه بعدی من عالیه',
            'چطوری میتونم این قالبو خریداری کنم؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'ممنونم. از سایت راستچین'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-3.png', '', [
            'من برای اطمینان اینو ازت میخرم',
            'ممنونم.'
        ], 'text'),
    ],
    chat2: [
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'چطور میتونم بهتون کمک کنم؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.png', '1 hours ago', [
            'اون به من چند راه برای حل مسئله ام معرفی کرد',
            'اما هیچکدوم به دردم نخورد'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '20 دقیقه قبل', [
            'میشه بجای متن برام فایل صوتی بفرستی'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.png', '', [
            'http://static.videogular.com/assets/audios/videogular.mp3'
        ], 'audio'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '10 دقیقه قبل', [
            'میشه قوانین سایتو برام توی یک فایل ویدئویی بفرستی؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.png', '', [
            'http://static.videogular.com/assets/videos/videogular.mp4'
        ], 'video'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'I’m sorry to hear that',
            'Can I ask which model of projector you own?',
            'What steps did he suggest you to take?',
            'What sort of issue are you having?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.png', '', [
            'An issue with the power.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'Did you make sure the outlet you plugged it into was functional.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-7.png', '', [
            'Yes'
        ], 'text'),
    ],
    chat3: [
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'چطور میتونم بهتون کمک کنم؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.png', '1 hours ago', [
            'سلام خانم کاظمی، من به دنبال یکی از بهترین قالب های مدیریت هستم',
            'میشه کمکم کنی تا اینو پیدا کنم؟',
            'من دنبال قالب مدیریت با انگولار 8 هستم'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'حتتتتتما!',
            'من بهت پیشنهاد میکنم که همینو بخر خیلی خوبه'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.png', '20 دقیقه قبل', [
            'میشه برام فایل صوتی بفرستی؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'http://static.videogular.com/assets/audios/videogular.mp3'
        ], 'audio'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.png', '10 دقیقه قبل', [
            'میشه حالا برام فایل ویدئویی بفرستی؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'http://static.videogular.com/assets/videos/videogular.mp4'
        ], 'video'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.png', '', [
            'به به ببین چه قالب تمیز و خوشگلیه',
            'این واسه پروژه بعدی من عالیه',
            'چطوری میتونم این قالبو خریداری کنم؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'ممنونم. از سایت راستچین'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-8.png', '', [
            'من برای اطمینان اینو ازت میخرم',
            'ممنونم.'
        ], 'text'),
    ],
    chat4: [
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'چطور میتونم بهتون کمک کنم؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.png', '1 hours ago', [
            'اون به من چند راه برای حل مسئله ام معرفی کرد',
            'اما هیچکدوم به دردم نخورد'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '20 دقیقه قبل', [
            'میشه بجای متن برام فایل صوتی بفرستی'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.png', '', [
            'http://static.videogular.com/assets/audios/videogular.mp3'
        ], 'audio'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '10 دقیقه قبل', [
            'میشه قوانین سایتو برام توی یک فایل ویدئویی بفرستی؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.png', '', [
            'http://static.videogular.com/assets/videos/videogular.mp4'
        ], 'video'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'I’m sorry to hear that',
            'Can I ask which model of projector you own?',
            'What steps did he suggest you to take?',
            'What sort of issue are you having?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.png', '', [
            'An issue with the power.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'Did you make sure the outlet you plugged it into was functional.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-5.png', '', [
            'Yes'
        ], 'text'),
    ],
    chat5: [
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'چطور میتونم بهتون کمک کنم؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.png', '1 hours ago', [
            'سلام خانم کاظمی، من به دنبال یکی از بهترین قالب های مدیریت هستم',
            'میشه کمکم کنی تا اینو پیدا کنم؟',
            'من دنبال قالب مدیریت با انگولار 8 هستم'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'حتتتتتما!',
            'من بهت پیشنهاد میکنم که همینو بخر خیلی خوبه'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.png', '20 دقیقه قبل', [
            'میشه برام فایل صوتی بفرستی؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'http://static.videogular.com/assets/audios/videogular.mp3'
        ], 'audio'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.png', '10 دقیقه قبل', [
            'میشه حالا برام فایل ویدئویی بفرستی؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'http://static.videogular.com/assets/videos/videogular.mp4'
        ], 'video'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.png', '', [
            'به به ببین چه قالب تمیز و خوشگلیه',
            'این واسه پروژه بعدی من عالیه',
            'چطوری میتونم این قالبو خریداری کنم؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'ممنونم. از سایت راستچین'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-9.png', '', [
            'من برای اطمینان اینو ازت میخرم',
            'ممنونم.'
        ], 'text'),
    ],
    chat6: [
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'چطور میتونم بهتون کمک کنم؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.png', '1 hours ago', [
            'اون به من چند راه برای حل مسئله ام معرفی کرد',
            'اما هیچکدوم به دردم نخورد'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '20 دقیقه قبل', [
            'میشه بجای متن برام فایل صوتی بفرستی'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.png', '', [
            'http://static.videogular.com/assets/audios/videogular.mp3'
        ], 'audio'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '10 دقیقه قبل', [
            'میشه قوانین سایتو برام توی یک فایل ویدئویی بفرستی؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.png', '', [
            'http://static.videogular.com/assets/videos/videogular.mp4'
        ], 'video'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'I’m sorry to hear that',
            'Can I ask which model of projector you own?',
            'What steps did he suggest you to take?',
            'What sort of issue are you having?'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.png', '', [
            'An issue with the power.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'Did you make sure the outlet you plugged it into was functional.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-4.png', '', [
            'Yes'
        ], 'text'),
    ],
    chat7: [
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'چطور میتونم بهتون کمک کنم؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.png', '1 hours ago', [
            'سلام خانم کاظمی، من به دنبال یکی از بهترین قالب های مدیریت هستم',
            'میشه کمکم کنی تا اینو پیدا کنم؟',
            'It should be angular 4 bootstrap compatible.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'حتتتتتما!',
            'Apex admin is the responsive angular 4 bootstrap admin template.'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.png', '20 دقیقه قبل', [
            'میشه برام فایل صوتی بفرستی؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'http://static.videogular.com/assets/audios/videogular.mp3'
        ], 'audio'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.png', '10 دقیقه قبل', [
            'میشه حالا برام فایل ویدئویی بفرستی؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'http://static.videogular.com/assets/videos/videogular.mp4'
        ], 'video'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.png', '', [
            'به به ببین چه قالب تمیز و خوشگلیه',
            'این واسه پروژه بعدی من عالیه',
            'چطوری میتونم این قالبو خریداری کنم؟'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('right', 'chat', 'assets/img/portrait/small/avatar-s-1.png', '', [
            'ممنونم. از سایت راستچین'
        ], 'text'),
        new _chat_ngrx_model__WEBPACK_IMPORTED_MODULE_1__["Chat"]('left', 'chat chat-left', 'assets/img/portrait/small/avatar-s-14.png', '', [
            'من برای اطمینان اینو ازت میخرم',
            'ممنونم.'
        ], 'text'),
    ]
};
function chatReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case (_chat_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_CHAT1"]):
            var chat1 = state.chat1.slice();
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { chat1: state.chat1.concat([action.payload]) });
        case (_chat_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_CHAT2"]):
            var chat2 = state.chat2.slice();
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { chat2: state.chat2.concat([action.payload]) });
        case (_chat_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_CHAT3"]):
            var chat3 = state.chat3.slice();
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { chat3: state.chat3.concat([action.payload]) });
        case (_chat_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_CHAT4"]):
            var chat4 = state.chat4.slice();
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { chat4: state.chat4.concat([action.payload]) });
        case (_chat_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_CHAT5"]):
            var chat5 = state.chat5.slice();
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { chat5: state.chat5.concat([action.payload]) });
        case (_chat_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_CHAT6"]):
            var chat6 = state.chat6.slice();
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { chat6: state.chat6.concat([action.payload]) });
        case (_chat_actions__WEBPACK_IMPORTED_MODULE_2__["ADD_CHAT7"]):
            var chat7 = state.chat7.slice();
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { chat7: state.chat7.concat([action.payload]) });
        default:
            return state;
    }
}


/***/ })

}]);
//# sourceMappingURL=chat-ngrx-chat-ngrx-module.js.map