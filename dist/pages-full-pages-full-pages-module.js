(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-full-pages-full-pages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/faq/faq.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/faq/faq.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"content-header\">سوالات متداول</div>\n    <p class=\"content-sub-header\">ما برای کمک اینجا هستیم</p>\n  </div>\n</div>\n<!-- faq starts -->\n<section id=\"faq\">\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card gradient-purple-bliss white text-center p-4\">\n        <div class=\"card-header\">\n          <h1>ما برای کمک اینجا هستیم</h1>\n          <p><em>اگر شما هر گونه سوال شما می توانید از زیر درخواست کنید و یا آنچه را که دنبال آن هستید وارد کنید!</em></p>\n        </div>\n        <div class=\"card-body\">\n          <fieldset class=\"form-group col-xl-12 col-lg-10 col-10\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"جستجو در سوالات متداول...\" (input)=\"filter($event.target.value)\"\n              #messageInput>\n          </fieldset>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <div class=\"card text-truncate\">\n        <div class=\"card-body\">\n          <ngb-accordion [closeOthers]=\"true\">\n            <ngb-panel [id]=\"faq.faqId\" *ngFor=\"let faq of faqs\">\n              <ng-template ngbPanelTitle>\n                <h5 class=\"mb-0\"><i class=\"icon-question mr-2\"></i> <span> {{faq.title}}</span></h5>\n              </ng-template>\n              <ng-template ngbPanelContent>\n                <div >\n                  {{faq.content}}\n                </div>\n              </ng-template>\n            </ngb-panel>\n          </ngb-accordion>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- faq Ends -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/gallery/gallery-page.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/gallery/gallery-page.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Gallery Hover Effect Starts-->\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"content-header\">افکت شناور</div>\n        <p class=\"content-sub-header\">\n            گالری گالری تصویر با 30 اثر ظریف شناور. برای نشان دادن هر اثر شناور سعی کنید به زیر تصاویر نمایشی بتابانید. \n        </p>\n    </div>\n</div>\n<section id=\"hover-effects\" class=\"card\">\n  <div class=\"card-content\">\n    <div class=\"card-body my-gallery\" itemscope itemtype=\"http://schema.org/ImageGallery\">\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">Lily</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-lily\">\n              <img src=\"assets/img/gallery/12.jpg\" alt=\"img12\" />\n              <figcaption>\n                <div>\n                  <h2>رضا\n                    <span>حسینی</span>\n                  </h2>\n                  <p>لورم ایپسوم متن ساختگی با تولید سادگی</p>\n                </div>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-lily\">\n              <img src=\"assets/img/gallery/1.jpg\" alt=\"img1\" />\n              <figcaption>\n                <div>\n                  <h2>رضا\n                    <span>حسینی</span>\n                  </h2>\n                  <p>لورم ایپسوم متن ساختگی با تولید سادگی</p>\n                </div>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">زیبا</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-sadie\">\n              <img src=\"assets/img/gallery/2.jpg\" alt=\"img02\" />\n              <figcaption>\n                <h2>مقدس\n                  <span>زیبا</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی\n                  <br>تولید سادگی نامفهوم</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-sadie\">\n              <img src=\"assets/img/gallery/14.jpg\" alt=\"img14\" />\n              <figcaption>\n                <h2>مقدس\n                  <span>Sadie</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی\n                  <br>تولید سادگی نامفهوم</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">عسل</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-honey\">\n              <img src=\"assets/img/gallery/4.jpg\" alt=\"img04\" />\n              <figcaption>\n                <h2>رویایی\n                  <span>عسل</span> <i>جدید</i></h2>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-honey\">\n              <img src=\"assets/img/gallery/5.jpg\" alt=\"img05\" />\n              <figcaption>\n                <h2>رویایی\n                  <span>عسل</span> <i>جدید</i></h2>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">لیلا</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-layla\">\n              <img src=\"assets/img/gallery/6.jpg\" alt=\"img06\" />\n              <figcaption>\n                <h2>باهوش\n                  <span>لیلا</span>\n                </h2>\n                <p>شرایط فعلی تکنولوژی مورد نیاز </p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-layla\">\n              <img src=\"assets/img/gallery/3.jpg\" alt=\"img03\" />\n              <figcaption>\n                <h2>باهوش\n                  <span>لیلا</span>\n                </h2>\n                <p>شرایط فعلی تکنولوژی مورد نیاز </p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">کوه</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-zoe\">\n              <img src=\"assets/img/gallery/25.jpg\" alt=\"img25\" />\n              <figcaption>\n                <h2>ساختن\n                  <span>کوه</span>\n                </h2>\n                <p class=\"icon-links\">\n                  <a class=\"mr-1\"><i class=\"ft-heart\"></i></a>\n                  <a class=\"mr-1\"><i class=\"ft-eye\"></i></a>\n                  <a class=\"mr-1\"><i class=\"ft-edit\"></i></a>\n                </p>\n                <p class=\"description\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-zoe\">\n              <img src=\"assets/img/gallery/26.jpg\" alt=\"img26\" />\n              <figcaption>\n                <h2>ساختن\n                  <span>کوه</span>\n                </h2>\n                <p class=\"icon-links\">\n                  <a class=\"mr-1\"><i class=\"ft-heart\"></i></a>\n                  <a class=\"mr-1\"><i class=\"ft-eye\"></i></a>\n                  <a class=\"mr-1\"><i class=\"ft-edit\"></i></a>\n                </p>\n                <p class=\"description\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">زیبا شناسی</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-oscar\">\n              <img src=\"assets/img/gallery/9.jpg\" alt=\"img09\" />\n              <figcaption>\n                <h2>عمیق\n                  <span>زیبا شناسی</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-oscar\">\n              <img src=\"assets/img/gallery/10.jpg\" alt=\"img10\" />\n              <figcaption>\n                <h2>عمیق\n                  <span>زیبا شناسی</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">کتاب</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-marley\">\n              <img src=\"assets/img/gallery/11.jpg\" alt=\"img11\" />\n              <figcaption>\n                <h2>زیبا\n                  <span>کتاب</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-marley\">\n              <img src=\"assets/img/gallery/12.jpg\" alt=\"img12\" />\n              <figcaption>\n                <h2>زیبا\n                  <span>کتاب</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">ذهن</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-ruby\">\n              <img src=\"assets/img/gallery/13.jpg\" alt=\"img13\" />\n              <figcaption>\n                <h2>آرام\n                  <span>ذهن</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-ruby\">\n              <img src=\"assets/img/gallery/14.jpg\" alt=\"img14\" />\n              <figcaption>\n                <h2>آرام\n                  <span>ذهن</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">آرامش</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-roxy\">\n              <img src=\"assets/img/gallery/15.jpg\" alt=\"img15\" />\n              <figcaption>\n                <h2>سکوت\n                  <span>آرامش</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-roxy\">\n              <img src=\"assets/img/gallery/1.jpg\" alt=\"img01\" />\n              <figcaption>\n                <h2>سکوت\n                  <span>آرامش</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">طبیعت</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-bubba\">\n              <img src=\"assets/img/gallery/2.jpg\" alt=\"img02\" />\n              <figcaption>\n                <h2>بکر\n                  <span>طبیعت</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-bubba\">\n              <img src=\"assets/img/gallery/16.jpg\" alt=\"img16\" />\n              <figcaption>\n                <h2>بکر\n                  <span>طبیعت</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">ابزار</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-romeo\">\n              <img src=\"assets/img/gallery/17.jpg\" alt=\"img17\" />\n              <figcaption>\n                <h2>کاربردی\n                  <span>ابزار</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-romeo\">\n              <img src=\"assets/img/gallery/18.jpg\" alt=\"img18\" />\n              <figcaption>\n                <h2>کاربردی\n                  <span>ابزار</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">دکور</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-dexter\">\n              <img src=\"assets/img/gallery/19.jpg\" alt=\"img19\" />\n              <figcaption>\n                <h2>عالی\n                  <span>دکور</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم\n                </p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-dexter\">\n              <img src=\"assets/img/gallery/12.jpg\" alt=\"img12\" />\n              <figcaption>\n                <h2>عالی\n                  <span>دکور</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم\n                </p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">زمان</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-sarah\">\n              <img src=\"assets/img/gallery/13.jpg\" alt=\"img13\" />\n              <figcaption>\n                <h2>عالی\n                  <span>زمان</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-sarah\">\n              <img src=\"assets/img/gallery/20.jpg\" alt=\"img20\" />\n              <figcaption>\n                <h2>عالی\n                  <span>زمان</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">متن</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-chico\">\n              <img src=\"assets/img/gallery/15.jpg\" alt=\"img15\" />\n              <figcaption>\n                <h2>کلاسیک\n                  <span>متن</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-chico\">\n              <img src=\"assets/img/gallery/4.jpg\" alt=\"img04\" />\n              <figcaption>\n                <h2>کلاسیک\n                  <span>متن</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n      <div class=\"grid-hover\">\n        <h5 class=\"text-bold-400 text-uppercase\">روزنامه</h5>\n        <div class=\"row\">\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-milo\">\n              <img src=\"assets/img/gallery/11.jpg\" alt=\"img11\" />\n              <figcaption>\n                <h2>به روز\n                  <span>روزنامه</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم\n                </p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n          <div class=\"col-md-6 col-12\">\n            <figure class=\"effect-milo\">\n              <img src=\"assets/img/gallery/3.jpg\" alt=\"img03\" />\n              <figcaption>\n                <h2>به روز\n                  <span>روزنامه</span>\n                </h2>\n                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم\n                </p>\n                <a>دیدن بیشتر</a>\n              </figcaption>\n            </figure>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!--Gallery Hover Effect Starts-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/invoice/invoice-page.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/invoice/invoice-page.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Invoice template starts-->\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <h4>صورتحساب</h4>\n  </div>\n</div>\n<section class=\"invoice-template\">\n  <div class=\"card\">\n    <div class=\"card-body p-3\">\n      <div id=\"invoice-template\" class=\"card-block\">\n        <!-- Invoice Company Details -->\n        <div id=\"invoice-company-details\" class=\"row\">\n          <div class=\"col-md-6 col-sm-12 text-center text-md-left\">\n            <img src=\"assets/img/logos/logo-big-black.png\" alt=\"company logo\" class=\"mb-2\" width=\"80\" height=\"80\">\n            <ul class=\"px-0 list-unstyled\">\n              <li class=\"text-bold-800\">استدیو ضبط صدا</li>\n              <li>خیابان 57</li>\n              <li>میدان ولیعصر،</li>\n              <li>تهران،</li>\n              <li>ایران</li>\n            </ul>\n          </div>\n          <div class=\"col-md-6 col-sm-12 text-center text-md-right\">\n            <h2>صورتحساب</h2>\n            <p class=\"pb-3\"># INV-001001</p>\n            <ul class=\"px-0 list-unstyled\">\n              <li>تعادل</li>\n              <li class=\"lead text-bold-800\">1200000 ریال</li>\n            </ul>\n          </div>\n        </div>\n        <!--/ Invoice Company Details -->\n        <!-- Invoice Customer Details -->\n        <div id=\"invoice-customer-details\" class=\"row pt-2\">\n          <div class=\"col-sm-12 text-left\">\n            <p class=\"text-muted\">به</p>\n          </div>\n          <div class=\"col-md-6 col-sm-12  text-center text-md-left\">\n            <ul class=\"px-0 list-unstyled\">\n              <li class=\"text-bold-800\">آقای احمد رضایی</li>\n              <li>کوچه 45،</li>\n              <li>خیابان اقاقیا،</li>\n              <li>تهران،</li>\n            </ul>\n          </div>\n          <div class=\"col-md-6 col-sm-12 text-center text-md-right\">\n            <p><span class=\"text-muted\">تاریخ صورتحساب :</span> 08/12/97</p>\n            <p><span class=\"text-muted\">مقررات :</span> بر اساس رسید</p>\n            <p><span class=\"text-muted\">تاریخ تحویل :</span> 10/12/97</p>\n          </div>\n        </div>\n        <!--/ Invoice Customer Details -->\n        <!-- Invoice Items Details -->\n        <div id=\"invoice-items-details\" class=\"pt-2\">\n          <div class=\"row\">\n            <div class=\"table-responsive col-sm-12\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th>#</th>\n                    <th>مورد و شرح</th>\n                    <th class=\"text-right\">نرخ</th>\n                    <th class=\"text-right\">ساعت ها</th>\n                    <th class=\"text-right\">میزان</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <th scope=\"row\">1</th>\n                    <td>\n                      <p>ایجاد فایل فتوشاپ برای نرم افزار اندروید</p>\n                      <p class=\"text-muted\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n                    </td>\n                    <td class=\"text-right\">20000 ریال/ ساعت</td>\n                    <td class=\"text-right\">120</td>\n                    <td class=\"text-right\">20000 ریال</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">2</th>\n                    <td>\n                      <p>برنامه توسعه iOS</p>\n                      <p class=\"text-muted\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </p>\n                    </td>\n                    <td class=\"text-right\">20000 ریال/ ساعت</td>\n                    <td class=\"text-right\">120</td>\n                    <td class=\"text-right\">20000 ریال</td>\n                  </tr>\n                  <tr>\n                    <th scope=\"row\">3</th>\n                    <td>\n                      <p>توسعه قالب وردپرس</p>\n                      <p class=\"text-muted\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </p>\n                    </td>\n                    <td class=\"text-right\">20000 ریال/ ساعت</td>\n                    <td class=\"text-right\">120</td>\n                    <td class=\"text-right\">20000 ریال</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6 col-sm-12 text-left\">\n              <p class=\"lead\">روش های پرداخت:</p>\n              <div class=\"row\">\n                <div class=\"col-12\">\n                  <table class=\"table table-borderless table-sm\">\n                    <tbody>\n                      <tr>\n                        <td>نام بانک:</td>\n                        <td class=\"text-right\">ایران، بانک ملت</td>\n                      </tr>\n                      <tr>\n                        <td>نام اصلی:</td>\n                        <td class=\"text-right\">علی زمانی</td>\n                      </tr>\n                      <tr>\n                        <td>شماره کارت:</td>\n                        <td class=\"text-right\">FGS165461646546AA</td>\n                      </tr>\n                      <tr>\n                        <td>شماره حساب:</td>\n                        <td class=\"text-right\">BTNPP34</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-md-6 col-sm-12\">\n              <p class=\"lead\">مجموع به دلیل</p>\n              <div class=\"table-responsive\">\n                <table class=\"table\">\n                  <tbody>\n                    <tr>\n                      <td>زیر مجموع</td>\n                      <td class=\"text-right\">120000 ریال</td>\n                    </tr>\n                    <tr>\n                      <td>مالیات بر ارزش افزوده (12٪)</td>\n                      <td class=\"text-right\">70000 ریال</td>\n                    </tr>\n                    <tr>\n                      <td class=\"text-bold-800\">جمع کل</td>\n                      <td class=\"text-bold-800 text-right\"> 10000000 ریال</td>\n                    </tr>\n                    <tr>\n                      <td>پرداخت انجام شده</td>\n                      <td class=\"pink text-right\">(-) 1000 ریال</td>\n                    </tr>\n                    <tr class=\"bg-grey bg-lighten-4\">\n                      <td class=\"text-bold-800\">تخفیف</td>\n                      <td class=\"text-bold-800 text-right\">120000 ریال</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <div class=\"text-center\">\n                <p>فرد مجاز</p>\n                <img src=\"assets/img/pages/signature-scan.png\" alt=\"signature\" class=\"width-250\">\n                <h6>علی زمانی</h6>\n                <p class=\"text-muted\">مدیر عامل</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- Invoice Footer -->\n        <div id=\"invoice-footer\">\n          <div class=\"row\">\n            <div class=\"col-md-9 col-sm-12\">\n              <h6>شرایط و وضعیت</h6>\n              <p>\n                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. \n              </p>\n            </div>\n            <div class=\"col-md-3 col-sm-12 text-center\">\n              <button type=\"button\" class=\"btn btn-primary btn-raised my-1\"><i class=\"fa fa-paper-plane-o\"></i> \n              ارسال صورت حساب\n              </button>\n            </div>\n          </div>\n        </div>\n        <!--/ Invoice Footer -->\n      </div>\n    </div>\n  </div>\n</section>\n<!--Invoice template ends-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/knowledge-base/knowledge-base.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/knowledge-base/knowledge-base.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <div class=\"content-header\">دانش محور </div>\n    <p class=\"content-sub-header\"></p>\n  </div>\n</div>\n<!-- Apex template Knowledge Base starts -->\n<section id=\"kb\">\n  <div class=\"row\">\n    <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"ft-bell font-large-1 float-left mr-2\"></i>\n          <h4 class=\"card-title mb-0\">شروع شدن</h4>\n          <p class=\"card-text\">لورم ایپسوم</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Activating an Account and Logging in')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> فعال کردن یک حساب کاربری\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'User Profile')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span>مشخصات کاربر\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Using the Dashboard')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> با استفاده از داشبورد\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Subscribing to Email Alerts')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> اشتراک در هشدارهای ایمیل\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Changing a Password')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span>تغییر رمز عبور\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <a class=\"card-link primary\">مشاهده تمام مقالات (20) </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"ft-book font-large-1 float-left mr-2\"></i>\n          <h4 class=\"card-title\">راهنمای استفاده</h4>\n          <p class=\"card-text\">لورم ایپسوم</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Files Overview')\">\n                <span class=\"badge bg-warning float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> مرور فایلها\n\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Search Overview')\">\n                <span class=\"badge bg-warning float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> مرور اجمالی\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Using Tasks')\">\n                <span class=\"badge bg-warning float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> با استفاده از وظایف\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Events')\">\n                <span class=\"badge bg-warning float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> رویداد\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Blogs')\">\n                <span class=\"badge bg-warning float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> وبلاگ\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <a class=\"card-link primary\">مشاهده تمام مقالات (13)            </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"ft-file-text text-white font-large-1 float-left mr-2\"></i>\n          <h4 class=\"card-title\">فایل ها</h4>\n          <p class=\"card-text\">لورم ایپسوم</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Basic Files Module Features')\">\n                <span class=\"badge bg-info float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> ویژگی های اصلی ماژول\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'How to Add a Single File')\">\n                <span class=\"badge bg-info float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span>نحوه اضافه کردن یک فایل تک\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Drag-and-Drop upload files and folders')\">\n                <span class=\"badge bg-info float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> کشیدن و انداختن\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Searching Files')\">\n                <span class=\"badge bg-info float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span>جستجو فایل ها\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Digital Rights Management')\">\n                <span class=\"badge bg-info float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> مدیریت حقوق دیجیتال\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <a class=\"card-link primary\">مشاهده تمام مقالات (7)            </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"ft-user font-large-1 float-left mr-2\"></i>\n          <h4 class=\"card-title\">مدیریت کاربران</h4>\n          <p class=\"card-text\">لورم ایپسوم</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Inviting and Managing Users')\">\n                <span class=\"badge bg-success float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> دعوت و مدیریت کاربران\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Creating and Managing Groups')\">\n                <span class=\"badge bg-success float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> ایجاد و مدیریت گروه ها\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Granting Roles')\">\n                <span class=\"badge bg-success float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> اعطای نقش\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Quick Guide: Organizing Security Groups')\">\n                <span class=\"badge bg-success float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span>راهنمای سریع: گروه ها\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'What to Do if a User is Unable to Login')\">\n                <span class=\"badge bg-success float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> برای \"ورد\" وارد شوید\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <a class=\"card-link primary\">مشاهده تمام مقالات (11)</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"ft-unlock font-large-1 float-left mr-2\"></i>\n          <h4 class=\"card-title\">مدیریت سایت</h4>\n          <p class=\"card-text\">لورم ایپسوم</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Introduction to the Site Admin Module')\">\n                <span class=\"badge bg-danger float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> معرفی ماژول\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'How to Create a Virtual Deal Room')\">\n                <span class=\"badge bg-danger float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> چگونه یک اتاق مجازی ایجاد کنیم\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Best Practices for Setting up a New Site')\">\n                <span class=\"badge bg-danger float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> بهترین روش برای سایت جدید\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'General Settings')\">\n                <span class=\"badge bg-danger float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> تنظیمات عمومی\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Advanced Settings')\">\n                <span class=\"badge bg-danger float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> تنظیمات پیشرفته\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <a class=\"card-link primary\">مشاهده تمام مقالات (21) </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-xl-4 col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <i class=\"ft-airplay font-large-1 float-left mr-2\"></i>\n          <h4 class=\"card-title\">مدیریت سیستم            </h4>\n          <p class=\"card-text\">لورم ایپسوم</p>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <ul class=\"list-group\">\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'System Administration Overview')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span>بررسی اجمالی\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Creating Sites')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> ایجاد سایت ها\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'User Administration')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span>مدیریت کاربر\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Org Administration')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> اداره سازمان\n              </li>\n              <li class=\"list-group-item cursor-pointer\" (click)=\"GetDetails(content, 'Site Category System Settings')\">\n                <span class=\"badge bg-primary float-left mr-2\">\n                  <i class=\"ft-file-text text-white\"></i>\n                </span> تنظیمات سیستم رده سایت\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <a class=\"card-link primary\">مشاهده تمام مقالات (17)            </a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Apex template Knowledge Base Ends -->\n\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header bg-info\">\n      <h4 class=\"modal-title white\">{{title}}</h4>\n      <button type=\"button\" class=\"close white\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\" id=\"kbModal-body\">\n      <p class=\"text-bold-500\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </p>\n      <p>از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>\n      \n      <p class=\"text-bold-500\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </p>\n      <p>از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>\n      \n      <p class=\"text-bold-500\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم </p>\n      <p>از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>\n      \n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-info btn-raised\" (click)=\"c('Close click')\">بستن</button>\n    </div>\n  </ng-template>\n\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/search/search.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/search/search.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Search form-->\n<section id=\"search-website\" class=\"card overflow-hidden\">\n\t<div class=\"card-header\">\n\t\t<h4 class=\"card-title\">نتایج جستجوی وب سایت</h4>\n\n\t</div>\n\t<div class=\"card-content\">\n\t\t<div class=\"card-body pb-0\">\n\t\t\t<form action=\"#\">\n\t\t\t\t<fieldset class=\"form-group position-relative has-icon-right mb-0\">\n\t\t\t\t\t<input type=\"text\" class=\"form-control form-control-lg \" id=\"iconLeft\" placeholder=\"قالب ادمین\">\n\t\t\t\t\t<div class=\"form-control-position\">\n\t\t\t\t\t\t<i class=\"ft-mic font-medium-4\"></i>\n\t\t\t\t\t</div>\n\t\t\t\t</fieldset>\n\t\t\t</form>\n\t\t</div>\n\t\t<!--Search Navbar-->\n\t\t<div id=\"search-nav\" class=\"card-body\">\n\t\t\t<ul class=\"nav nav-inline\">\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link active\"><i class=\"fa fa-link\"></i> سایت</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\"><i class=\"fa fa-file-image-o\"></i> عکس</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\"><i class=\"fa fa-file-video-o\"></i> فیلم</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"nav-item\">\n\t\t\t\t\t<a class=\"nav-link\"><i class=\"fa fa-map-o\"></i> نقشه</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"dropdown nav-item float-right mt-1\">\n\t\t\t\t\t<a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\">\n\t\t\t\t\t\t<i class=\"fa fa-cog\"></i> <span class=\"caret\"></span>\n\t\t\t\t\t</a>\n\t\t\t\t\t<ul class=\"dropdown-menu dropdown-menu-right\">\n\t\t\t\t\t\t<li class=\"dropdown-item\"><a class=\"dropdown-link\">زبان</a></li>\n\t\t\t\t\t\t<li class=\"dropdown-item\"><a class=\"dropdown-link\">تنظیمات جستجو</a></li>\n\t\t\t\t\t\t<li class=\"dropdown-item\"><a class=\"dropdown-link\">تاریخچه</a></li>\n\t\t\t\t\t\t<li class=\"dropdown-item\"><a class=\"dropdown-link\">راهنما جستجو</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<!--/ Search Navbar-->\n\t\t<!--Search Result-->\n\t\t<div id=\"search-results\" class=\"card-body\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-8\">\n\t\t\t\t\t<p class=\"text-muted font-small-3\">حدود 2000000 نتیجه (در 0.2 ثانیه) </p>\n\t\t\t\t\t<ul class=\"media-list row\">\n\t\t\t\t\t\t<!--search with list-->\n\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t<p class=\"lead mb-0\"><a><span class=\"text-bold-600\">Apex</span> - ریسپانسیو قالب </a></p>\n\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">https://pixinvent.com/<span class=\"text-bold-600\">Apex</span>/\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n\t\t\t\t\t\t\t\t<ul class=\"list-inline list-inline-pipe text-muted\">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i> &nbsp;5 ستاره\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>590 نظر</li>\n\t\t\t\t\t\t\t\t\t<li>2000 ریال</li>\n\t\t\t\t\t\t\t\t\t<li>در انبار</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<p><span class=\"text-muted\">24 آبان 1397 - </span><span class=\"text-bold-600\">Apex</span> لورم ایپسوم\n\t\t\t\t\t\t\t\t\tمتن ساختگی با تولید سادگی نامفهوم<span class=\"text-bold-600\">لورم ایپسوم</span> چاپگرها و متون بلکه\n\t\t\t\t\t\t\t\t\tروزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع\n\t\t\t\t\t\t\t\t\tبا هدف بهبود ابزارهای کاربردی می باشد. </p>\n\t\t\t\t\t\t\t\t<div class=\"website-detailed-list mx-1 my-1\">\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"content-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">داشبور</a></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"content-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">جزء فرم</a></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی </p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"content-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">نمودار</a></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"content-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">قطعات طراحی</a></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"content-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">پشتیبانی</a></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>چاپگرها و متون روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"content-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">مستندات</a></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</p>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<!--search with image-->\n\t\t\t\t\t\t<li class=\"media flex-column\">\n\t\t\t\t\t\t\t<div class=\"media-left\">\n\t\t\t\t\t\t\t\t<a>\n\t\t\t\t\t\t\t\t\t<img class=\"media-object width-150\" src=\"assets/img/width-600/portfolio-14.jpg\"\n\t\t\t\t\t\t\t\t\t\talt=\"Generic placeholder image\">\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"media-body media-search\">\n\t\t\t\t\t\t\t\t<p class=\"lead mb-0\"><a class=\"teal darken-1\"><span class=\"text-bold-600\">سارا محمدی</span> - سریع به من\n\t\t\t\t\t\t\t\t\t\tایمیل بزن</a></p>\n\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">https://pixinvent.com/<span class=\"text-bold-600\">Apex</span>/\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n\t\t\t\t\t\t\t\t<ul class=\"list-inline list-inline-pipe text-muted\">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-half yellow darken-2\"></i> &nbsp;4.5 ستاره\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>50 نظر</li>\n\t\t\t\t\t\t\t\t\t<li>40000 ریال</li>\n\t\t\t\t\t\t\t\t\t<li>در انبار</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<p><span class=\"text-muted\">25 مرداد 1396 - </span> ما باید گفتگو کنیم <span class=\"text-bold-600\">Apex\n\t\t\t\t\t\t\t\t\t\tادمین</span> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک\n\t\t\t\t\t\t\t\t\tاست. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی\n\t\t\t\t\t\t\t\t\tمورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد\n\t\t\t\t\t\t\t\t\tگذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای\n\t\t\t\t\t\t\t\t\tطراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<!--search with video-->\n\t\t\t\t\t\t<li class=\"media flex-column\">\n\t\t\t\t\t\t\t<div class=\"media-left media-search\">\n\t\t\t\t\t\t\t\t<iframe width=\"150\" height=\"110\"\n\t\t\t\t\t\t\t\t\tsrc=\"https://www.youtube.com/embed/SsE5U7ta9Lw?rel=0&amp;controls=0&amp;showinfo=0\"></iframe>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t<p class=\"lead mb-0\"><a class=\"teal darken-1\"><span class=\"text-bold-600\">جدول</span> - اطلاعات شما و\n\t\t\t\t\t\t\t\t\t\tکارهای شما</a></p>\n\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">http://youtube.com/<span class=\"text-bold-600\">Apex</span>/ <i\n\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n\t\t\t\t\t\t\t\t<ul class=\"list-inline list-inline-pipe text-muted\">\n\t\t\t\t\t\t\t\t\t<li>23 تیر 1308</li>\n\t\t\t\t\t\t\t\t\t<li>1 میلیون بازدید</li>\n\t\t\t\t\t\t\t\t\t<li>آپلود شده توسط سارا عزیزی</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<p><span class=\"text-bold-600\">لورم ایپسوم</span> متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با\n\t\t\t\t\t\t\t\t\tاستفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و\n\t\t\t\t\t\t\t\t\tبرای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t<p class=\"lead mb-0\"><a class=\"teal darken-1\"><span class=\"text-bold-600\">کتاب</span> - زیادی در شصت و\n\t\t\t\t\t\t\t\t\t\tسه درصد</a></p>\n\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">http://themeforest.net/<span\n\t\t\t\t\t\t\t\t\t\t\tclass=\"text-bold-600\">Apex</span>/کتاب\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n\t\t\t\t\t\t\t\t<p> <span class=\"text-bold-600\">گذشته، حال و آینده</span>\n\t\t\t\t\t\t\t\t\t\tشناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی\n\t\t\t\t\t\t\t\t\t\tالخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و\n\t\t\t\t\t\t\t\t\t\tدشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی\n\t\t\t\t\t\t\t\t\t\tدستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t<p class=\"lead mb-0\"><a class=\"teal darken-1\">لورم ایپسوم متن<span class=\"text-bold-600\">ساختگی </span>,\n\t\t\t\t\t\t\t\t\t\tتولید سادگی</a>\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">http://envato.com/literally/<span\n\t\t\t\t\t\t\t\t\t\t\tclass=\"text-bold-600\">Apex</span>/\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n\t\t\t\t\t\t\t\t<p><span class=\"text-muted\">30 مهر 1398 - </span><span class=\"text-bold-600\">تهران</span> لورم ایپسوم\n\t\t\t\t\t\t\t\t\tمتن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه\n\t\t\t\t\t\t\t\t\tروزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع\n\t\t\t\t\t\t\t\t\tبا هدف بهبود ابزارهای کاربردی می باشد.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t<p class=\"lead mb-0\"><a class=\"teal darken-1\"><span class=\"text-bold-600\">کلمه</span> - با جزئیات\n\t\t\t\t\t\t\t\t\t\tدقیق</a></p>\n\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">http://google.com/<span class=\"text-bold-600\">کلمه</span>/ <i\n\t\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n\t\t\t\t\t\t\t\t<ul class=\"list-inline list-inline-pipe text-muted\">\n\t\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star yellow darken-2\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-half yellow darken-2\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-outline yellow darken-2\"></i>\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-star-outline yellow darken-2\"></i> &nbsp;2.5 ستاره\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li>590 نظر</li>\n\t\t\t\t\t\t\t\t\t<li>390000 ریال</li>\n\t\t\t\t\t\t\t\t\t<li>در انبار</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t<p><span class=\"text-muted\">12 مهر 1398 - </span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم\n\t\t\t\t\t\t\t\t\t<span class=\"text-bold-600\">از صنعت چاپ و با استفاده از طراحان</span> گرافیک است. چاپگرها و متون بلکه\n\t\t\t\t\t\t\t\t\tروزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع\n\t\t\t\t\t\t\t\t\tبا هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان\n\t\t\t\t\t\t\t\t\tجامعه و متخصصان را می طلبد\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<li class=\"media\">\n\t\t\t\t\t\t\t<div class=\"media-body\">\n\t\t\t\t\t\t\t\t<p class=\"lead mb-0\"><a class=\"teal darken-1\"><span class=\"text-bold-600\">آن را اجرا کنید </span> - لورم\n\t\t\t\t\t\t\t\t\t\tایپسوم متن ساختگی</a></p>\n\t\t\t\t\t\t\t\t<p class=\"mb-0\"><a class=\"teal darken-1\">http://mail.example.com/<span\n\t\t\t\t\t\t\t\t\t\t\tclass=\"text-bold-600\">اجرا</span>/\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-down\" aria-hidden=\"true\"></i></a></p>\n\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\tبا نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان\n\t\t\t\t\t\t\t\t\tفارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت\n\t\t\t\t\t\t\t\t\tتایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای\n\t\t\t\t\t\t\t\t\tموجود طراحی اساسا مورد استفاده قرار گیرد.\n\t\t\t\t\t\t\t\t</p>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<div class=\"text-center\">\n\t\t\t\t\t\t<nav aria-label=\"Page navigation\">\n\t\t\t\t\t\t\t<ul class=\"pagination pagination-separate pagination-round pagination-flat\">\n\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t<a class=\"page-link\" aria-label=\"Previous\">\n\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">« قبل</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">قبلی</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\">1</a></li>\n\t\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\">2</a></li>\n\t\t\t\t\t\t\t\t<li class=\"page-item active\"><a class=\"page-link\">3</a></li>\n\t\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\">4</a></li>\n\t\t\t\t\t\t\t\t<li class=\"page-item\"><a class=\"page-link\">5</a></li>\n\t\t\t\t\t\t\t\t<li class=\"page-item\">\n\t\t\t\t\t\t\t\t\t<a class=\"page-link\" aria-label=\"Next\">\n\t\t\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">بعد »</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"sr-only\">بعدی</span>\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</nav>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t<div class=\"card\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Apex</h4>\n\t\t\t\t\t\t\t<h6 class=\"card-subtitle text-muted\">Angular 5 قالب پروژه ی مدیریت با </h6>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<img class=\"img-fluid\" src=\"assets/img/width-600/portfolio-3.jpg\" alt=\"logo\">\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<p class=\"card-text\">بعضی از نمونه های سریع نمونه ای که بر روی عنوان کارت ساخته می شوند و بخش عمده ای از\n\t\t\t\t\t\t\t\tمحتوای کارت را تشکیل می دهند.<a>ویکی پدیا</a></p>\n\t\t\t\t\t\t\t<ul class=\"list-group mb-2\">\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\"><strong>سایت :</strong> <a class=\"card-link\">https://pixinvent.com/</a></li>\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\"><strong>خدمات مشتری:</strong> 022 8888 9999</li>\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\"><strong>پایه گذار:</strong> خانم کاظمی</li>\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\"><strong>تأسیس شد:</strong> 1398</li>\n\t\t\t\t\t\t\t\t<li class=\"list-group-item\"><strong>پشتیبانی:</strong> <a>fKazemi5236@gmail.com</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<div class=\"py-1 text-center\">\n\t\t\t\t\t\t\t\t<a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-facebook\"><span class=\"fa fa-facebook\"></span></a>\n\t\t\t\t\t\t\t\t<a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-twitter\"><span class=\"fa fa-twitter\"></span></a>\n\t\t\t\t\t\t\t\t<a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-linkedin\"><span\n\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-linkedin font-medium-4\"></span></a>\n\t\t\t\t\t\t\t\t<a class=\"btn btn-social-icon mr-1 mb-1 btn-outline-github\"><span\n\t\t\t\t\t\t\t\t\t\tclass=\"fa fa-github font-medium-4\"></span></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"card-body\">\n\t\t\t\t\t\t\t<p class=\"text-bold-600\">موارد جستجوی دیگران</p>\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t<img class=\"img-fluid rounded\" src=\"assets/img/gallery/11.jpg\" alt=\"Image description\">\n\t\t\t\t\t\t\t\t\t<a class=\"font-small-2\">شکلات</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t<img class=\"img-fluid rounded\" src=\"assets/img/gallery/12.jpg\" alt=\"Image description\">\n\t\t\t\t\t\t\t\t\t<a class=\"font-small-2\">متریالز</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t<img class=\"img-fluid rounded\" src=\"assets/img/gallery/13.jpg\" alt=\"Image description\">\n\t\t\t\t\t\t\t\t\t<a class=\"font-small-2\">HTML </a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t<img class=\"img-fluid rounded\" src=\"assets/img/gallery/14.jpg\" alt=\"Image description\">\n\t\t\t\t\t\t\t\t\t<a class=\"font-small-2\">شکلات</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t<img class=\"img-fluid rounded\" src=\"assets/img/gallery/25.jpg\" alt=\"Image description\">\n\t\t\t\t\t\t\t\t\t<a class=\"font-small-2\">متریالز</a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\n\t\t\t\t\t\t\t\t\t<img class=\"img-fluid rounded\" src=\"assets/img/gallery/23.jpg\" alt=\"Image description\">\n\t\t\t\t\t\t\t\t\t<a class=\"font-small-2\">HTML </a>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n<!--/ Search form -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"cd-horizontal-timeline\" [ngClass]=\"{'loaded': loaded}\">\n  <div class=\"timeline\">\n    <div class=\"events-wrapper\">\n      <div class=\"events\" #eventsWrapper [style.width.px]=\"eventsWrapperWidth\">\n        <ol>\n          <li *ngFor=\"let item of timelineElements; let index = index\">\n            <a #timelineEvents href=\"#\" [ngClass]=\"{'selected': item.selected, 'older-event': index < selectedIndex}\"\n              (click)=\"onEventClick($event, item)\">{{item.date | date:dateFormatTop}}</a>\n            <span></span>\n          </li>\n        </ol>\n        <span class=\"filling-line\" aria-hidden=\"true\" #fillingLine></span>\n      </div>\n    </div>\n\n    <ul class=\"cd-timeline-navigation\">\n      <li>\n        <a href=\"#\" (click)=\"onScrollClick($event, false)\" class=\"prev\" [ngClass]=\"{'inactive':prevLinkInactive}\">قبلی</a>\n      </li>\n      <li>\n        <a href=\"#\" (click)=\"onScrollClick($event, true)\" class=\"next\" [ngClass]=\"{'inactive':nextLinkInactive}\">بعدی</a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"events-content\" *ngIf=\"showContent\">\n    <ol>\n      <li *ngFor=\"let item of timelineElements; let index = index\" [@contentState]=\"item.selected ? 'active' : (index < selectedIndex ? 'left' : 'right')\">\n        <h2 class=\"text-bold-500\">{{item.title}}</h2>\n        <em>{{item.date | date:dateFormat}}</em>\n        <p>{{item.content}}</p>\n      </li>\n    </ol>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Horizontal Timeline Starts-->\n<div class=\"row\">\n    <div class=\"col-sm-12\">\n        <div class=\"content-header\">گاهشمار افقی\t\t\t</div>\n        <p class=\"content-sub-header\">این جدول زمانی افقی حاوی جدول زمان بندی پست تاریخ است</p>\n    </div>\n</div>\n<div class=\"card\">\n\t<div class=\"card-content\">\n\t\t<div class=\"card-body\">\n\t\t\t<horizontal-timeline [timelineElements]=\"timeline\" [showContent]=\"true\"></horizontal-timeline>\n\t\t</div>\n\t</div>\n</div>\n<!--Horizontal Timeline Starts-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/timeline/vertical/vertical-timeline-page.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/timeline/vertical/vertical-timeline-page.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--Vertical Timeline Starts-->\n<section id=\"timeline\" class=\"timeline-center timeline-wrapper\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"content-header\">گاهشمار عمودی</div>\n      <p class=\"content-sub-header\">این جدول زمانی عمودی حاوی پست با عکس ها، فیلم ها، نمودار ها و نقشه ها برای ایجاد جدول زمانی موثرتر است.</p>\n    </div>\n  </div>\n  <h3 class=\"page-title text-center\">گاهشمار</h3>\n  <ul class=\"timeline\">\n    <li class=\"timeline-line\"></li>\n    <li class=\"timeline-group\">\n      <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> امروز</a>\n    </li>\n  </ul>\n  <ul class=\"timeline\">\n    <li class=\"timeline-line\"></li>\n    <li class=\"timeline-item\">\n      <div class=\"timeline-badge\">\n        <span class=\"bg-red bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Portfolio project work\"><i class=\"fa fa-plane\"></i></span>\n      </div>\n      <div class=\"timeline-card card border-grey border-lighten-2\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title mb-0\"><a>کار پروژه نمونه کارها</a></h4>\n          <div class=\"card-subtitle text-muted mt-0\">\n            <span class=\"font-small-3\">5 ساعت قبل</span>\n          </div>\n        </div>\n        <div class=\"card-content\">\n          <img class=\"img-fluid\" src=\"assets/img/photos/01.jpg\" alt=\"Timeline Image 1\">\n          <div class=\"card-content\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. \n              </p>\n              <div class=\"list-inline mb-1\">\n                <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-thumbs-o-up\"></span> پسندیدن</a>\n                </span>\n                <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> نظرات</a>\n                </span>\n                <span><a class=\"primary\"><span class=\"fa fa-share-alt\"></span> اشتراک گذاری</a>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer px-0 py-0\">\n            <div class=\"card-body \">\n              <div class=\"media\">\n                <div class=\"media-left\">\n                  <a>\n                      <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-1.png\" alt=\"avatar\" width=\"50\"></span>\n                    </a>\n                </div>\n                <div class=\"media-body\">\n                  <p class=\"text-bold-600 mb-0\"><a>علی رضایی</a></p>\n                  <p class=\"m-0\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>\n                  <div class=\"list-inline mb-1\">\n                    <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-thumbs-o-up\"></span> پسندیدن</a>\n                    </span>\n                    <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> پاسخ</a>\n                    </span>\n                  </div>\n                  <div class=\"media\">\n                    <div class=\"media-left\">\n                      <a>\n                          <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-18.png\" alt=\"avatar\" width=\"50\"></span>\n                        </a>\n                    </div>\n                    <div class=\"media-body\">\n                      <p class=\"text-bold-600 mb-0\"><a>احمد محمدی</a></p>\n                      <p>زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود</p>\n                      <div class=\"list-inline mb-1\">\n                        <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-thumbs-o-up\"></span> پسندیدن</a>\n                        </span>\n                        <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> پاسخ</a>\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card-body\">\n              <form>\n                <fieldset class=\"form-group position-relative has-icon-left mb-0\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"نوشتن نظر ...\">\n                  <div class=\"form-control-position\">\n                    <i class=\"fa fa-dashcube\"></i>\n                  </div>\n                </fieldset>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-item mt-5\">\n      <div class=\"timeline-badge\">\n        <span class=\"avatar avatar-online\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Eu pid nunc urna integer\"><img src=\"assets/img/portrait/small/avatar-s-14.png\" alt=\"avatar\" width=\"40\"></span>\n      </div>\n      <div class=\"timeline-card card border-grey border-lighten-2\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title mb-0\"><a>سوفیا محمدی</a></h4>\n          <div class=\"card-subtitle text-muted mt-0\">\n            <span class=\"font-small-3\">8 ساعت پیش</span>\n          </div>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"embed-responsive embed-responsive-4by3\">\n            <iframe src=\"https://player.vimeo.com/video/118589137?title=0&byline=0\"></iframe>\n          </div>\n          <div class=\"card-content\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. \n              </p>\n              <p class=\"card-text\">\n                  کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\n              </p>\n              <div class=\"list-inline mb-1\">\n                <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-thumbs-o-up\"></span> پسندیدن</a>\n                </span>\n                <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> نظرات</a>\n                </span>\n                <span><a class=\"primary\"><span class=\"fa fa-share-alt\"></span> اشتراک گذاری</a>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer px-0 py-0\">\n            <div class=\"card-body \">\n              <form>\n                <fieldset class=\"form-group position-relative has-icon-left mb-0\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"نوشتن نظر ...\">\n                  <div class=\"form-control-position\">\n                    <i class=\"fa fa-dashcube\"></i>\n                  </div>\n                </fieldset>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n\n    <li class=\"timeline-item block\">\n      <div class=\"timeline-badge\"><a title=\"\" data-context=\"inverse\" data-container=\"body\" class=\"border-silc\" data-original-title=\"block highlight\"></a></div>\n      <div class=\"timeline-card card border-grey border-lighten-2\">\n        <div class=\"card-header\">\n          <div class=\"text-center\">\n            <p><i class=\"fa fa-bar-chart font-medium-4\"></i></p>\n            <h4>گزارش کمپین</h4>\n            <p class=\"timeline-date\">18 ساعت پیش</p>\n            <p>\n                مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\n            </p>\n          </div>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div class=\"chart-container\">\n              <div id=\"stacked-column\" class=\"height-400 echart-container overflow-hidden lineArea1\">\n                <x-chartist class=\"\" [data]=\"lineArea1.data\" [type]=\"lineArea1.type\" [options]=\"lineArea1.options\" [responsiveOptions]=\"lineArea1.responsiveOptions\"\n                  [events]=\"lineArea1.events\">\n                </x-chartist>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n  <!-- 2016 -->\n  <ul class=\"timeline\">\n    <li class=\"timeline-line\"></li>\n    <li class=\"timeline-group\">\n      <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> 1395</a>\n    </li>\n  </ul>\n  <ul class=\"timeline\">\n\n    <li class=\"timeline-line\"></li>\n    <!-- /.timeline-line -->\n\n    <li class=\"timeline-item\">\n      <div class=\"timeline-badge\">\n        <span class=\"avatar avatar-online\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Eu pid nunc urna integer\"><img src=\"assets/img/portrait/small/avatar-s-5.png\" alt=\"avatar\" width=\"40\"></span>\n      </div>\n      <div class=\"timeline-card card card-inverse\">\n        <img class=\"card-img img-fluid\" src=\"assets/img/photos/02.jpg\" alt=\"Card image\">\n        <div class=\"card-img-overlay bg-overlay\">\n          <h4 class=\"card-title\">صبح بخیر</h4>\n          <p class=\"card-text\"><small>26 تیر 1396 ساعت 9:00 صبح</small></p>\n        </div>\n      </div>\n    </li>\n\n    <li class=\"timeline-item mt-5\">\n      <div class=\"timeline-badge\">\n        <span class=\"bg-teal bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Nullam facilisis fermentum\"><i class=\"fa fa-check-square-o\"></i></span>\n      </div>\n      <div class=\"timeline-card card border-grey border-lighten-2\">\n        <div class=\"card-header\">\n          <h4 class=\"mb-0 card-title\"><a>نیما نیازی</a></h4>\n          <div class=\"card-subtitle text-muted mt-0\">\n            <span class=\"font-small-3\">18 دی 1396 ساعت 10:00 صبح</span>\n          </div>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-content\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. \n\n              </p>\n              <ul class=\"list-group icheck-task\">\n                <li class=\"list-group-item\">\n                  <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"1st-item\">\n                    <label class=\"custom-control-label\" for=\"1st-item\">لورم ایپسوم </label>\n                  </div>\n                </li>\n                <li class=\"list-group-item\">\n                  <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"2nd-item\">\n                    <label class=\"custom-control-label\" for=\"2nd-item\">سادگی نامفهوم</label>\n                  </div>\n                </li>\n                <li class=\"list-group-item\">\n                  <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"3rd-item\">\n                    <label class=\"custom-control-label\" for=\"3rd-item\">شرایط فعلی تکنولوژی </label>\n                  </div>\n                </li>\n                <li class=\"list-group-item\">\n                  <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"4th-item\">\n                    <label class=\"custom-control-label\" for=\"4th-item\">شناخت فراوان جامعه</label>\n                  </div>\n                </li>\n                <li class=\"list-group-item\">\n                  <div class=\"custom-control custom-checkbox mb-2 mr-sm-2 mb-sm-0\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" checked id=\"5th-item\">\n                    <label class=\"custom-control-label\" for=\"5th-item\">نرم افزار</label>\n                  </div>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"card-footer px-0 py-0\">\n            <div class=\"card-body \">\n              <form>\n                <fieldset class=\"form-group position-relative has-icon-left mb-0\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"نوشتن نظر ...\">\n                  <div class=\"form-control-position\">\n                    <i class=\"fa fa-dashcube\"></i>\n                  </div>\n                </fieldset>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n\n  <!-- 2015 -->\n  <ul class=\"timeline\">\n    <li class=\"timeline-line\"></li>\n    <li class=\"timeline-group\">\n      <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> 1396</a>\n    </li>\n  </ul>\n  <ul class=\"timeline\">\n    <li class=\"timeline-line\"></li>\n    <!-- /.timeline-line -->\n    <li class=\"timeline-item block\">\n      <div class=\"timeline-badge\"><a title=\"\" data-context=\"inverse\" data-container=\"body\" class=\"border-silc\" data-original-title=\"block highlight\"></a></div>\n      <div class=\"timeline-card card border-grey border-lighten-2\">\n        <div class=\"card-header\">\n          <div class=\"text-center\">\n            <p class=\"mt-1\"><i class=\"fa fa-file-image-o font-medium-4\"></i></p>\n            <h4>گالری رسانه</h4>\n            <p class=\"timeline-date\">1 آبان 1398</p>\n            <p>\n                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. \n            </p>\n          </div>\n        </div>\n        <!-- Image grid -->\n        <div class=\"card-content\">\n          <div class=\"card-body my-gallery\" itemscope itemtype=\"http://schema.org/ImageGallery\">\n            <div class=\"row\">\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/1.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/2.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/3.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/4.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n            </div>\n            <div class=\"row\">\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/5.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/6.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/7.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/8.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n            </div>\n            <div class=\"row\">\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/9.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/10.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/11.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n              <figure class=\"col-md-3 col-sm-6 col-12\" itemprop=\"associatedMedia\" itemscope itemtype=\"http://schema.org/ImageObject\">\n                <a itemprop=\"contentUrl\" data-size=\"480x360\">\n                      <img class=\"img-thumbnail img-fluid\" src=\"assets/img/gallery/12.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                  </a>\n              </figure>\n            </div>\n          </div>\n          <!--/ Image grid -->\n        </div>\n        <!--/ PhotoSwipe -->\n      </div>\n    </li>\n    <li class=\"timeline-item\">\n      <div class=\"timeline-badge\">\n        <span class=\"bg-warning bg-darken-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Application API Support\"><i class=\"fa fa-life-ring\"></i></span>\n      </div>\n      <div class=\"timeline-card card border-grey border-lighten-2\">\n        <div class=\"card-header\">\n          <div class=\"media\">\n            <div class=\"media-left\">\n              <a>\n                  <span class=\"avatar avatar-md avatar-busy\"><img src=\"assets/img/portrait/small/avatar-s-18.png\" alt=\"avatar\" width=\"50\"></span>\n                  <i></i>\n                </a>\n            </div>\n            <div class=\"media-body\">\n              <h4 class=\"card-title mb-0\"><a>پشتیبانی برنامه کاربردی</a></h4>\n              <div class=\"card-subtitle text-muted mt-0\">\n                <span class=\"font-small-3\">15 آذر 1397 ساعت 10:00 صبح</span>\n                <span class=\"tag tag-pill tag-default tag-warning float-right\">بالا</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-content\">\n          <img class=\"img-fluid\" src=\"assets/img/photos/03.jpg\" alt=\"Timeline Image 1\">\n          <div class=\"card-content\">\n            <div class=\"card-body\">\n              <p class=\"card-text\">\n                  کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد\n              </p>\n              <div class=\"list-inline mb-1\">\n                <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> نظرات</a>\n                </span>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer px-0 py-0\">\n            <div class=\"card-body\">\n              <div class=\"media\">\n                <div class=\"media-left\">\n                  <a>\n                      <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-4.png\" alt=\"avatar\" width=\"50\"></span>\n                    </a>\n                </div>\n                <div class=\"media-body\">\n                  <p class=\"text-bold-600 mb-0\"><a>زیبا حسنی</a></p>\n                  <p class=\"m-0\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. </p>\n                  <div class=\"media\">\n                    <div class=\"media-left\">\n                      <a>\n                          <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-6.png\" alt=\"avatar\" width=\"50\"></span>\n                        </a>\n                    </div>\n                    <div class=\"media-body\">\n                      <p class=\"text-bold-600 mb-0\"><a>نسرین امامی</a></p>\n                      <p>زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <form>\n                <fieldset class=\"form-group position-relative has-icon-left mb-0\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"نوشتن نظر ...\">\n                  <div class=\"form-control-position\">\n                    <i class=\"fa fa-dashcube\"></i>\n                  </div>\n                </fieldset>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n    <li class=\"timeline-item mt-5\">\n      <div class=\"timeline-badge\">\n        <span class=\"bg-amber bg-darken-1\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Quote of the day\"><i class=\"fa fa-smile-o\"></i></span>\n      </div>\n      <div class=\"timeline-card card border-grey border-lighten-2\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title mb-0\"><a>نقل قول روز</a></h4>\n          <div class=\"card-subtitle text-muted mt-0\">\n            <span class=\"font-small-3\">3 آبان 1397 ساعت 8:00 بعد از ظهر</span>\n          </div>\n        </div>\n        <div class=\"card-content\">\n          <img class=\"img-fluid\" src=\"assets/img/photos/04.jpg\" alt=\"Timeline Image 1\">\n          <div class=\"card-body\">\n            <blockquote class=\"card-bodyquote\">\n              <p class=\"card-text\">\n                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. \n              </p>\n              <div>کسی که معروف است<cite title=\"Source Title\"> - عنوان منبع</cite></div>\n            </blockquote>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n\n  <!-- 2014 -->\n  <ul class=\"timeline\">\n    <li class=\"timeline-line\"></li>\n    <li class=\"timeline-group\">\n      <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> 1397</a>\n    </li>\n  </ul>\n  <ul class=\"timeline\">\n    <li class=\"timeline-line\"></li>\n    <!-- /.timeline-line -->\n    <li class=\"timeline-item block\">\n      <div class=\"timeline-badge\"><a title=\"\" data-context=\"inverse\" data-container=\"body\" class=\"border-silc\" data-original-title=\"block highlight\"></a></div>\n      <div class=\"timeline-card card border-grey border-lighten-2\">\n        <div class=\"card-header\">\n          <div class=\"text-center\">\n            <p><i class=\"fa fa-map-marker font-medium-4\"></i></p>\n            <h4>به تهران منتقل شد</h4>\n            <p class=\"timeline-date\">1 مهر 1397</p>\n            <p>\n                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\n            </p>\n          </div>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"card-body\">\n            <div id=\"moved-brooklyn\" class=\"height-450\">\n              <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\n                <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n              </agm-map>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </li>\n  </ul>\n  <!-- 2014 -->\n  <ul class=\"timeline\">\n    <li class=\"timeline-line\"></li>\n    <li class=\"timeline-group\">\n      <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> در سال 1397 تاسیس شد</a>\n    </li>\n  </ul>\n</section>\n<!--Vertical Timeline Ends-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/user-profile/user-profile-page.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/user-profile/user-profile-page.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--User Profile Starts-->\n<!--Basic User Details Starts-->\n<section id=\"user-profile\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card profile-with-cover\">\n                <div class=\"card-img-top img-fluid bg-cover height-300 \" style=\"margin:auto;text-align: center; \" >\n                   \n                   <img [src]=\"wallpaperpic\" style=\" opacity: 0.3; height:   100%;margin:20px \">\n                </div>\n                <div class=\"media profil-cover-details row\">\n                    <div class=\"col-5\">\n                        <div class=\"align-self-start halfway-fab pl-3 pt-2\">\n                            <div class=\"text-left\">\n                                <!-- <h3 class=\"card-title white\">{{personname}}</h3> -->\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-2\">\n                        <div class=\"align-self-center halfway-fab text-center\">\n                            <a class=\"profile-image\">\n                                <img [src]=\"prsonpic\" class=\"rounded-circle img-border gradient-summer width-100\" alt=\"Card image\">\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"col-5\">                        \n                    </div>                    \n                </div>\n                <!-- <div class=\"profile-cover-buttons\">\n                    <div class=\"media-body halfway-fab align-self-end\">\n                        <div class=\"text-right d-none d-sm-none d-md-none d-lg-block\">\n                            <button type=\"button\" class=\"btn btn-primary btn-raised mr-2\"><i class=\"fa fa-plus\"></i> دنبال کنید</button>\n                            <button type=\"button\" class=\"btn btn-success btn-raised mr-3\"><i class=\"fa fa-dashcube\"></i> پیام</button>\n                        </div>\n                        <div class=\"text-right d-block d-sm-block d-md-block d-lg-none\">\n                            <button type=\"button\" class=\"btn btn-primary btn-raised mr-2\"><i class=\"fa fa-plus\"></i></button>\n                            <button type=\"button\" class=\"btn btn-success btn-raised mr-3\"><i class=\"fa fa-dashcube\"></i></button>\n                        </div>\n                    </div>\n                </div> -->\n                <div class=\"profile-section\">\n                    <div class=\"row\">\n                        <div class=\"col-lg-5 col-md-5 \">\n                            <ul class=\"profile-menu no-list-style\">\n                                <li>\n                                    <!-- <a (click)=\"showPage('About')\" [ngClass]=\"currentPage === 'About' ? 'primary font-medium-2 font-weight-600 active' : 'primary font-medium-2 font-weight-600'\">درباه</a> -->\n                                </li>\n                                <li>\n                                    <!-- <a (click)=\"showPage('TimeLine')\" [ngClass]=\"currentPage === 'TimeLine' ? 'primary font-medium-2 font-weight-600 active' : 'primary font-medium-2 font-weight-600'\">گاهشمار</a> -->\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"col-lg-2 col-md-2 text-center\">\n                            <span class=\"font-medium-2 text-uppercase\">{{personname}}</span>\n                            <p class=\"grey font-small-2\">{{jobposition}}</p>\n                        </div>\n                        <div class=\"col-lg-5 col-md-5\">\n                            <ul class=\"profile-menu no-list-style\">\n                                <li>\n                                    <!-- <a (click)=\"showPage('Friends')\" [ngClass]=\"currentPage === 'Friends' ? 'primary font-medium-2 font-weight-600 active' : 'primary font-medium-2 font-weight-600'\">دوستان</a> -->\n                                </li>\n                                <li>\n                                    <!-- <a (click)=\"showPage('Photos')\" [ngClass]=\"currentPage === 'Photos' ? 'primary font-medium-2 font-weight-600 active' : 'primary font-medium-2 font-weight-600'\">عکس ها</a> -->\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--Basic User Details Ends-->\n\n<!--About section starts-->\n<section id=\"about\" *ngIf=\"currentPage === 'About'\">\n    <div class=\"row\">\n        <!-- <div class=\"col-12\">\n            <div class=\"content-header\">درباره</div>\n        </div> -->\n    </div>\n    <div class=\"row\">\n        <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <h5>اطلاعات شخصی</h5>\n                </div>\n                <div class=\"card-content\">\n                    <div class=\"card-body\">\n                        <!-- <div class=\"mb-3\">\n                            <span class=\"text-bold-500 primary\">درباره ی من </span>\n                            <span class=\"d-block overflow-hidden\">\n                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\n\n                            </span>\n                        </div> -->\n                        <hr>\n                        <div class=\"row\">\n                            <div class=\"col-12 col-md-6 col-lg-4\">\n                                <ul class=\"no-list-style\">\n                                    <li class=\"mb-2\">\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-user font-small-3\"></i> نام:</a></span>\n                                        <span class=\"d-block overflow-hidden\">{{name}}</span>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-map-pin font-small-3\"></i> جنسیت:</a></span>\n                                        <span class=\"d-block overflow-hidden\">{{gender}}</span>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-map-pin font-small-3\"></i> آدرس:</a></span>\n                                        <span class=\"d-block overflow-hidden\">{{address}}</span>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"col-12 col-md-6 col-lg-4\">\n                                <ul class=\"no-list-style\">\n                                    <li class=\"mb-2\">\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-user font-small-3\"></i> نام پدر:</a></span>\n                                        <span class=\"d-block overflow-hidden\">{{father}}</span>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-mail font-small-3\"></i> ایمیل:</a></span>\n                                        <a class=\"d-block overflow-hidden\">{{email}}</a>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <!-- <span class=\"text-bold-500 primary\"><a><i class=\"ft-monitor font-small-3\"></i> موبایل:</a></span>\n                                        <a class=\"d-block overflow-hidden\">{{mobile}}</a> -->\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"col-12 col-md-6 col-lg-4\">\n                                <ul class=\"no-list-style\">\n                                    <li class=\"mb-2\">\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-smartphone font-small-3\"></i> شماره تماس:</a></span>\n                                        <span class=\"d-block overflow-hidden\">{{mobile}}</span>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <span class=\"text-bold-500 primary\"><a><i class=\"ft-briefcase font-small-3\"></i> شماره شبا:</a></span>\n                                        <span class=\"d-block overflow-hidden\">{{shaba}}</span>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <!-- <span class=\"text-bold-500 primary\"><a><i class=\"ft-book font-small-3\"></i> عضویت:</a></span>\n                                        <span class=\"d-block overflow-hidden\">1 اسفند 1390</span> -->\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                        <hr>\n                        <!-- <div class=\"mt-3\">\n                            <span class=\"text-bold-500 primary\">سرگرمی:</span>\n                            <span class=\"d-block overflow-hidden\">\n                                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\n\n                            </span>\n                        </div> -->\n                        <!-- <div class=\"mt-2 overflow-hidden\">\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-plane danger font-large-2\"></i> <div class=\"mt-2\">مسافرت</div></span>\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-speedometer danger font-large-2\"></i> <div class=\"mt-2\">رانندگی</div></span>\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-camera danger font-large-2\"></i> <div class=\"mt-2\">عکاسی</div></span>\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-game-controller danger font-large-2\"></i> <div class=\"mt-2\">بازی</div></span>\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-music-tone-alt danger font-large-2\"></i> <div class=\"mt-2\">موزیک</div></span>\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"ft-monitor danger font-large-2\"></i> <div class=\"mt-2\">موج سواری</div></span>\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"ft-pie-chart danger font-large-2\"></i> <div class=\"mt-2\">غذا</div></span>\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"ft-tv danger font-large-2\"></i> <div class=\"mt-2\">تلویزیون</div></span>\n                            <span class=\"mr-3 mt-2 text-center float-left width-100\"> <i class=\"icon-basket-loaded danger font-large-2\"></i> <div class=\"mt-2\">خرید</div></span>\n                        </div> -->\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- <div class=\"col-sm-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <h5>اطلاعات آموزشی</h5>\n                </div>\n                <div class=\"card-content\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\n                                <ul class=\"no-list-style\">\n                                    <li class=\"mb-2\">\n                                        <span class=\"primary text-bold-500\"><a><i class=\"ft-home font-small-3\"></i> موسسه طراحی افق</a></span>\n                                        <span class=\"grey line-height-0 d-block mb-2 font-small-2\">1390 - 1391</span>\n                                        <span class=\"line-height-2 d-block overflow-hidden\">استاد: محمد صالحی. شش ماه بهترین ابزار توسعه ابزار.</span>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <span class=\"primary text-bold-500\"><a><i class=\"ft-home font-small-3\"></i> دانشگاه تهران </a></span>\n                                        <span class=\"grey line-height-0 d-block mb-2 font-small-2\">1391 - 1392</span>\n                                        <span class=\"line-height-2 d-block overflow-hidden\">استاد: علی ناصری. بهترین اطلاعات آموزشی را به من داد.</span>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"col-lg-6 col-md-6 col-sm-12 col-12\">\n                                <ul class=\"no-list-style\">\n                                    <li class=\"mb-2\">\n                                        <span class=\"primary text-bold-500\"><a><i class=\"ft-home font-small-3\"></i> توسعه دهنده</a></span>\n                                        <span class=\"grey line-height-0 d-block mb-2 font-small-2\">1392 - 1393</span>\n                                        <span class=\"line-height-2 d-block overflow-hidden\">توسعه دهنده ی زبان های وب</span>\n                                    </li>\n                                    <li class=\"mb-2\">\n                                        <span class=\"primary text-bold-500\"><a><i class=\"ft-home font-small-3\"></i> ارشد توسعه دهنده</a></span>\n                                        <span class=\"grey line-height-0 d-block mb-2 font-small-2\">1395- تاکنون</span>\n                                        <span class=\"line-height-2 d-block overflow-hidden\">ارشد توسعه دهنده ی زبان های وب</span>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div> -->\n    </div>\n</section>\n<!--About section ends-->\n\n<!--User Timeline section starts-->\n<section *ngIf=\"currentPage === 'TimeLine'\">   \n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"content-header\">گاهشمار کاربر</div>\n        </div>\n    </div>\n    <div id=\"timeline\" class=\"timeline-center timeline-wrapper\">\n        <ul class=\"timeline\">\n            <li class=\"timeline-line\"></li>\n            <li class=\"timeline-group\">\n                <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> امروز</a>\n            </li>\n        </ul>\n        <ul class=\"timeline\">\n            <li class=\"timeline-line\"></li>\n            <li class=\"timeline-item\">\n                <div class=\"timeline-badge\">\n                <span class=\"bg-red bg-lighten-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"کار پروژه نمونه کارها\"><i class=\"fa fa-plane\"></i></span>\n                </div>\n                <div class=\"timeline-card card border-grey border-lighten-2\">\n                <div class=\"card-header\">\n                    <h4 class=\"mb-0 card-title\"><a>کار پروژه نمونه کارها</a></h4>\n                    <div class=\"card-subtitle text-muted mt-0\">\n                        <span class=\"font-small-3\">5 ساعت پیش</span>\n                    </div>\n                </div>\n                <div class=\"card-content\">\n                    <img class=\"img-fluid\" src=\"assets/img/photos/06.jpg\" alt=\"Timeline Image 1\">\n                    <div class=\"card-content\">\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">\n                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. \n                        </p>\n                        <div class=\"list-inline mb-1\">\n                        <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-thumbs-o-up\"></span> پسندیدن</a></span>\n                        <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> نظر</a></span>\n                        <span><a class=\"primary\"><span class=\"fa fa-share-alt\"></span> اشتراک</a></span>\n                        </div>\n                    </div>\n                    </div>\n                    <div class=\"card-footer px-0 py-0\">\n                    <div class=\"card-body\">\n                        <form>\n                            <fieldset class=\"form-group position-relative has-icon-left mb-0\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"نوشتن نظر ...\">\n                                <div class=\"form-control-position\">\n                                    <i class=\"fa fa-dashcube\"></i>\n                                </div>\n                            </fieldset>\n                        </form>\n                    </div>\n                    </div>\n                </div>\n                </div>\n            </li>            \n            <li class=\"timeline-item mt-5\">\n                <div class=\"timeline-badge\">\n                <span class=\"avatar avatar-online\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Eu pid nunc urna integer\"><img src=\"assets/img/portrait/small/avatar-s-5.png\" alt=\"avatar\" width=\"40\"></span>\n                </div>\n                <div class=\"timeline-card card card-inverse\">\n                <img class=\"card-img img-fluid\" src=\"assets/img/photos/07.jpg\" alt=\"Card image\">\n                <div class=\"card-img-overlay bg-overlay\">\n                    <h4 class=\"card-title\">صبح بخیر</h4>\n                    <p class=\"card-text\"><small>15 ساعت پیش</small></p>\n                </div>\n                </div>\n            </li>\n        </ul>\n\n        <!-- 2016 -->\n        <ul class=\"timeline\">\n            <li class=\"timeline-line\"></li>\n            <li class=\"timeline-group\">\n                <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> 1396</a>\n            </li>\n        </ul>\n        <ul class=\"timeline\">\n            <li class=\"timeline-line\"></li><!-- /.timeline-line -->\n            <li class=\"timeline-item\">\n                <div class=\"timeline-badge\">\n                <span class=\"bg-warning bg-darken-1\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"پشتیبانی برنامه کاربردی\"><i class=\"fa fa-life-ring\"></i></span>\n                </div>\n                <div class=\"timeline-card card border-grey border-lighten-2\">\n                <div class=\"card-header\">\n                    <div class=\"media\">\n                    <div class=\"media-left\">\n                        <a>\n                        <span class=\"avatar avatar-md avatar-busy\"><img src=\"assets/img/portrait/small/avatar-s-11.png\" alt=\"avatar\" width=\"50\"></span>\n                        <i></i>\n                        </a>\n                    </div>\n                    <div class=\"media-body\">\n                        <h4 class=\"mb-0 card-title\"><a>پشتیبانی برنامه کاربردی</a></h4>\n                        <div class=\"card-subtitle text-muted mt-0\">\n                            <span class=\"font-small-3\">15 بهمن 1396 ساعت 17:00</span>\n                            <span class=\"tag tag-pill tag-default tag-warning float-right\">بالا</span>\n                        </div>  \n                    </div>\n                    </div>\n                </div>\n                <div class=\"card-content\">\n                    <img class=\"img-fluid\" src=\"assets/img/photos/08.jpg\" alt=\"Timeline Image 1\">\n                    <div class=\"card-content\">\n                    <div class=\"card-body\">\n                        <p class=\"card-text\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. </p>\n                        <div class=\"list-inline mb-1\">\n                        <span class=\"pr-1\"><a class=\"primary\"><span class=\"fa fa-commenting-o\"></span> نظر</a></span>\n                        </div>\n                    </div>\n                    </div>\n                    <div class=\"card-footer px-0 py-0\">\n                    <div class=\"card-body\">\n                        <div class=\"media\">\n                        <div class=\"media-left\">\n                            <a>\n                            <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-14.png\" alt=\"avatar\" width=\"50\"></span>\n                            </a>\n                        </div>\n                        <div class=\"media-body\">\n                            <p class=\"text-bold-600 mb-0\"><a>زیبا حسنی کیا</a></p>\n                            <p class=\"m-0\">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>\n                            <div class=\"media\">\n                            <div class=\"media-left\">\n                                <a>\n                                <span class=\"avatar avatar-online\"><img src=\"assets/img/portrait/small/avatar-s-16.png\" alt=\"avatar\" width=\"50\"></span>\n                                </a>\n                            </div>\n                            <div class=\"media-body\">\n                                <p class=\"text-bold-600 mb-0\"><a>زهرا اسدی</a></p>\n                                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</p>\n                            </div>\n                            </div>\n                        </div>\n                        </div>\n                        <form>\n                            <fieldset class=\"form-group position-relative has-icon-left mb-0\">\n                                <input type=\"text\" class=\"form-control\" placeholder=\"نوشتن نظر ...\">\n                                <div class=\"form-control-position\">\n                                    <i class=\"fa fa-dashcube\"></i>\n                                </div>\n                            </fieldset>\n                        </form>\n                    </div>\n                    </div>\n                </div>\n                </div>\n            </li>\n            <li class=\"timeline-item mt-5\">\n                <div class=\"timeline-badge\">\n                <span class=\"bg-amber bg-darken-1\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"Quote of the day\"><i class=\"fa fa-smile-o\"></i></span>\n                </div>\n                <div class=\"timeline-card card border-grey border-lighten-2\">\n                <div class=\"card-header\">\n                    <h4 class=\"mb-0 card-title\"><a>نقل قول روز</a></h4>\n                    <div class=\"card-subtitle text-muted mt-0\">\n                        <span class=\"font-small-3\">3 دی 1396 ساعت 120:00 ظهر</span>\n                    </div>\n                </div>\n                <div class=\"card-content\">\n                    <img class=\"img-fluid\" src=\"assets/img/photos/09.jpg\" alt=\"Timeline Image 1\">\n                    <div class=\"card-body\">\n                    <blockquote class=\"card-bodyquote\">\n                        <p class=\"card-text\">\n                                چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. \n                        </p>\n                        <footer>کسی که معروف است <cite title=\"Source Title\"> - عنوان منبع</cite></footer>\n                    </blockquote>\n                    </div>\n                </div>\n                </div>\n            </li>\n        </ul>\n        <!-- 2015 -->\n        <ul class=\"timeline\">\n            <li class=\"timeline-line\"></li>\n            <li class=\"timeline-group\">\n                <a class=\"btn btn-raised btn-primary\"><i class=\"fa fa-calendar-o\"></i> در سال 1396 تاسیس شد</a>\n            </li>\n        </ul>\n    </div>\n</section>\n<!--User Timeline section ends-->\n\n<!--User's friend section starts-->\n<section id=\"friends\" *ngIf=\"currentPage === 'Friends'\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"content-header\">دوستان</div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12 col-md-6 col-lg-4\">\n            <div class=\"card\">\n                <div class=\"card-header text-center\">\n                    <img src=\"./assets/img/portrait/small/avatar-s-3.png\" alt=\"Brek\" width=\"150\" class=\"rounded-circle gradient-mint\">\n                </div>\n                <div class=\"card-content\">\n                    <div class=\"card-body text-center\">\n                        <h4 class=\"card-title\">رضا مرادی</h4>\n                        <p class=\"category text-gray font-small-4\">مدیر عامل شرکت / موسس</p>\n                        <a class=\"btn btn-lg gradient-mint font-small-2 white p-2 mr-2\">افزودن به عنوان دوست</a>\n                        <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">پیام</a>\n                        <hr class=\"grey\">\n                        <div class=\"row grey\">\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-star mr-1\"></i> <span>4.9</span></a>\n                            </div>\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-globe mr-1\"></i> <span>ایران</span></a>\n                            </div>\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-book mr-1\"></i> <span>21</span></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 col-md-6 col-lg-4\">\n            <div class=\"card\">\n                <div class=\"card-header text-center\">\n                    <img src=\"./assets/img/portrait/small/avatar-s-18.png\" alt=\"Jassi\" width=\"150\" class=\"rounded-circle gradient-pomegranate\">\n                </div>\n                <div class=\"card-content\">\n                    <div class=\"card-body text-center\">\n                        <h4 class=\"card-title\">زهرا اسعدی</h4>\n                        <p class=\"category text-gray font-small-4\">توسعه دهنده</p>\n                        <a class=\"btn btn-lg gradient-pomegranate font-small-2 white p-2 mr-2\">افزودن به عنوان دوست</a>\n                        <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">پیام</a>\n                        <hr class=\"grey\">\n                        <div class=\"row grey\">\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-star mr-1\">ستاره</i> <span>4.7</span></a>\n                            </div>\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-globe mr-1\"></i> <span>ایران</span></a>\n                            </div>\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-book mr-1\"></i> <span>14</span></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 col-md-6 col-lg-4\">\n            <div class=\"card\">\n                <div class=\"card-header text-center\">\n                    <img src=\"./assets/img/portrait/small/avatar-s-11.png\" alt=\"Brek\" width=\"150\" class=\"rounded-circle gradient-orange-amber\">\n                </div>\n                <div class=\"card-content\">\n                    <div class=\"card-body text-center\">\n                        <h4 class=\"card-title\">سارا حسینی</h4>\n                        <p class=\"category text-gray font-small-4\">توسعه دهنده اندروید</p>\n                        <a class=\"btn btn-lg gradient-orange-amber font-small-2 white p-2 mr-2\">افزودن به عنوان دوست</a>\n                        <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">پیام</a>\n                        <hr class=\"grey\">\n                        <div class=\"row grey\">\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-star mr-1\">ستاره</i> <span>5.0</span></a>\n                            </div>\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-globe mr-1\"></i> <span>ایران</span></a>\n                            </div>\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-book mr-1\"></i> <span>18</span></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 col-md-6 col-lg-4\">\n            <div class=\"card\">\n                <div class=\"card-header text-center\">\n                    <img src=\"./assets/img/portrait/small/avatar-s-6.png\" alt=\"Maitri\" width=\"150\" class=\"rounded-circle gradient-red-pink\">\n                </div>\n                <div class=\"card-content\">\n                    <div class=\"card-body text-center\">\n                        <h4 class=\"card-title\">ثنا شاملی</h4>\n                        <p class=\"category text-gray font-small-4\">طراح</p>\n                        <a class=\"btn btn-lg gradient-red-pink font-small-2 white p-2 mr-2\">افزودن به عنوان دوست</a>\n                        <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">پیام</a>\n                        <hr class=\"grey\">\n                        <div class=\"row grey\">\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-star mr-1\">ستاره</i> <span>4.5</span></a>\n                            </div>\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-globe mr-1\"></i> <span>ایران</span></a>\n                            </div>\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-book mr-1\"></i> <span>19</span></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 col-md-6 col-lg-4\">\n            <div class=\"card\">\n                <div class=\"card-header text-center\">\n                    <img src=\"./assets/img/portrait/small/avatar-s-9.png\" alt=\"Anibal\" width=\"150\" class=\"rounded-circle gradient-blackberry\">\n                </div>\n                <div class=\"card-content\">\n                    <div class=\"card-body text-center\">\n                        <h4 class=\"card-title\">آرزو محمدی</h4>\n                        <p class=\"category text-gray font-small-4\">توسعه دهنده پروژه</p>\n                        <a class=\"btn btn-lg gradient-blackberry font-small-2 white p-2 mr-2\">افزودن به عنوان دوست</a>\n                        <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">پیام</a>\n                        <hr class=\"grey\">\n                        <div class=\"row grey\">\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-star mr-1\">ستاره</i> <span>4.8</span></a>\n                            </div>\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-globe mr-1\"></i> <span>لندن</span></a>\n                            </div>\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-book mr-1\"></i> <span>20</span></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-12 col-md-6 col-lg-4\">\n            <div class=\"card\">\n                <div class=\"card-header text-center\">\n                    <img src=\"./assets/img/portrait/small/avatar-s-12.png\" alt=\"Gini\" width=\"150\" class=\"rounded-circle gradient-back-to-earth\">\n                </div>\n                <div class=\"card-content\">\n                    <div class=\"card-body text-center\">\n                        <h4 class=\"card-title\">علیرضا زمانی</h4>\n                        <p class=\"category text-gray font-small-4\">منابع انسانی</p>\n                        <a class=\"btn btn-lg gradient-back-to-earth font-small-2 white p-2 mr-2\">افزودن به عنوان دوست</a>\n                        <a class=\"btn btn-lg btn-outline-grey font-small-2 p-2\">پیام</a>\n                        <hr class=\"grey\">\n                        <div class=\"row grey\">\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-star mr-1\">ستاره</i> <span>4.4</span></a>\n                            </div>\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-globe mr-1\"></i> <span>ایران</span></a>\n                            </div>\n                            <div class=\"col-4\">\n                                <a><i class=\"ft-book mr-1\"></i> <span>15</span></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--User's friend section starts-->\n\n<!--User's uploaded photos section starts-->\n<section id=\"photos\" *ngIf=\"currentPage === 'Photos'\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"content-header\">عکس ها</div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card\">\n                <div class=\"card-header\">\n                    <h5>عکس آپلود شده</h5>\n                </div>\n                <div class=\"card-content\">\n                    <div class=\"card-body\">\n                        <div class=\"row\">\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/1.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/2.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/3.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/4.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                        </div>\n                        <div class=\"row\">\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/5.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/6.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/7.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/8.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                        </div>\n                        <div class=\"row\">\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/9.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/10.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/11.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/12.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                        </div>\n                        <div class=\"row\">\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/13.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/14.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/15.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                            <figure class=\"col-lg-3 col-md-6 col-12\">\n                                <img class=\"img-thumbnail img-fluid\" src=\"./assets/img/gallery/16.jpg\" itemprop=\"thumbnail\" alt=\"Image description\" />\n                            </figure>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<!--User's uploaded photos section starts-->\n<!--User Profile Starts-->");

/***/ }),

/***/ "./src/app/pages/full-pages/faq/faq.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/full-pages/faq/faq.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMvZmFxL2ZhcS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/full-pages/faq/faq.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/full-pages/faq/faq.component.ts ***!
  \*******************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _faq_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.service */ "./src/app/pages/full-pages/faq/faq.service.ts");



// import { Object } from 'core-js/library/web/timers';
var FaqComponent = /** @class */ (function () {
    function FaqComponent(faqService) {
        this.faqService = faqService;
        this.faqs = faqService.faqs;
    }
    FaqComponent.prototype.filter = function (searchValue) {
        if (searchValue === '') {
            this.faqs = this.faqService.faqs;
        }
        else {
            this.faqs = this.faqService.faqs.filter(function (faqs) { return faqs.title.toUpperCase().indexOf(searchValue.toUpperCase()) != -1 || faqs.content.toUpperCase().indexOf(searchValue.toUpperCase()) != -1; });
        }
    };
    FaqComponent.ctorParameters = function () { return [
        { type: _faq_service__WEBPACK_IMPORTED_MODULE_2__["FaqService"] }
    ]; };
    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/faq/faq.component.html")).default,
            providers: [_faq_service__WEBPACK_IMPORTED_MODULE_2__["FaqService"]],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./faq.component.scss */ "./src/app/pages/full-pages/faq/faq.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_faq_service__WEBPACK_IMPORTED_MODULE_2__["FaqService"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/pages/full-pages/faq/faq.model.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/full-pages/faq/faq.model.ts ***!
  \***************************************************/
/*! exports provided: FAQ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQ", function() { return FAQ; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var FAQ = /** @class */ (function () {
    function FAQ(faqId, title, content) {
        this.faqId = faqId;
        this.title = title;
        this.content = content;
    }
    return FAQ;
}());



/***/ }),

/***/ "./src/app/pages/full-pages/faq/faq.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/full-pages/faq/faq.service.ts ***!
  \*****************************************************/
/*! exports provided: FaqService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqService", function() { return FaqService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _faq_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.model */ "./src/app/pages/full-pages/faq/faq.model.ts");



var FaqService = /** @class */ (function () {
    function FaqService() {
        this.faqs = [
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](1, 'چگونه سرویس دیتای سیم کارت خود را فعال کنیم؟', "Aenean eget leo vel lorem tincidunt tempor sit amet non ex.\n             Aenean porta, velit ut efficitur fringilla, enim est suscipit augue."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](2, 'چگونه تنظیمات اینترنت نوترینو را بر روی گوشی دریافت نماییم؟', "Nam tincidunt rhoncus dolor nec imperdiet. Ut ut mauris tortor. Nulla cursus mattis elit, sed egestas augue laoreet id."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](3, 'چگونه می توانم از فعال بودن سرویس اینترنت گوشی خود مطمئن شوم؟', "Aenean eget leo vel lorem tincidunt tempor sit amet non ex.\n            Aenean porta, velit ut efficitur fringilla, enim est suscipit augue."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](4, 'کدام مناطق تحت پوشش اینترنت نوترینوی همراه اول می باشد؟', "Nam tincidunt rhoncus dolor nec imperdiet. Ut ut mauris tortor. Nulla cursus mattis elit."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](5, 'برای کاهش هزینه سرویس دیتا چه راهکاری وجود دارد؟', "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](6, 'چگونه می توان تمدید خودکار بسته های نوترینو را لغو نمود؟', "Sed sit amet feugiat mi. Morbi dui dui, ultrices id commodo in, commodo ut erat."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](7, 'آیا همراه اول بسته های اینترنت شبانه ارائه می دهد؟', "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et ."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](8, 'در زمان اتصال به سرویس اینترنت نوترینو، هزینه اتصال بر چه مبنایی محاسبه می شود؟', "Sed sit amet feugiat mi. Morbi dui dui, ultrices id commodo in, commodo ut erat. Ut vitae condimentum lorem."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](9, 'آیا با تغییر نام سیم کارت، سرویس اینترنت نوترینو قطع می گردد؟', "Vivamus eu consectetur dui. Pellentesque eu mi et lacus mollis tempor. Etiam sed lobortis sapien. Mauris ultrices."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](10, 'چه شرایطی برای فعال سازی و استفاده از اینترنت نسل ۴ (4G) بر روی سیم کارت لازم است؟', "Integer ornare elementum augue, in scelerisque magna efficitur non. Suspendisse laoreet purus nec augue malesuada auctor. Donec mollis eleifend auctor."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](11, 'چگونه می توان از سرعت اینترنت نوترینوی سیم کارت خود مطلع شوم؟', "Vivamus eu consectetur dui. Pellentesque eu mi et lacus mollis tempor. Etiam sed lobortis sapien. Mauris ultrices bibendum elit, at egestas felis elementum vitae. Mauris viverra nulla vitae pulvinar sollicitudin.\n             "),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](12, 'چگونه تنظیمات اینترنت نوترینو را بر روی گوشی دریافت نماییم؟', "Integer ornare elementum augue, in scelerisque magna efficitur non. Suspendisse laoreet purus nec augue malesuada auctor. Donec mollis eleifend auctor. Aliquam arcu erat "),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](13, 'تعرفه عادی اینترنت نوترینو چه میزان می باشد؟', "Aenean eget leo vel lorem tincidunt tempor sit amet non ex.\n            Phasellus ut odio in dolor eleifend tincidunt eget id tellus."),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](14, 'چگونه نوع پوشش شبکه در مناطق مختلف را می توان تشخیص داد؟', "Integer ornare elementum augue, in scelerisque magna efficitur non. Suspendisse laoreet purus nec augue malesuada auctor.\n             Ut sed viverra neque, nec hendrerit tortor. "),
            new _faq_model__WEBPACK_IMPORTED_MODULE_2__["FAQ"](15, 'آیا پس از اتمام بسته های نوترینو، مصرف بعدی اینترنت با هزینه بیشتری محاسبه می گردد؟', "Enim est suscipit augue, in porta ex nisi quis est.\n            Phasellus ut odio in dolor eleifend tincidunt eget id tellus."),
        ];
    }
    FaqService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaqService);
    return FaqService;
}());



/***/ }),

/***/ "./src/app/pages/full-pages/full-pages-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/full-pages/full-pages-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: FullPagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPagesRoutingModule", function() { return FullPagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gallery_gallery_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery-page.component */ "./src/app/pages/full-pages/gallery/gallery-page.component.ts");
/* harmony import */ var _invoice_invoice_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invoice/invoice-page.component */ "./src/app/pages/full-pages/invoice/invoice-page.component.ts");
/* harmony import */ var _timeline_horizontal_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline/horizontal/horizontal-timeline-page.component */ "./src/app/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.ts");
/* harmony import */ var _timeline_vertical_vertical_timeline_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timeline/vertical/vertical-timeline-page.component */ "./src/app/pages/full-pages/timeline/vertical/vertical-timeline-page.component.ts");
/* harmony import */ var _user_profile_user_profile_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-profile/user-profile-page.component */ "./src/app/pages/full-pages/user-profile/user-profile-page.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search/search.component */ "./src/app/pages/full-pages/search/search.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/pages/full-pages/faq/faq.component.ts");
/* harmony import */ var _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./knowledge-base/knowledge-base.component */ "./src/app/pages/full-pages/knowledge-base/knowledge-base.component.ts");











var routes = [
    {
        path: '',
        children: [
            {
                path: 'gallery',
                component: _gallery_gallery_page_component__WEBPACK_IMPORTED_MODULE_3__["GalleryPageComponent"],
                data: {
                    title: 'Gallery Page'
                }
            },
            {
                path: 'invoice',
                component: _invoice_invoice_page_component__WEBPACK_IMPORTED_MODULE_4__["InvoicePageComponent"],
                data: {
                    title: 'Invoice Page'
                }
            },
            {
                path: 'horizontaltimeline',
                component: _timeline_horizontal_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_5__["HorizontalTimelinePageComponent"],
                data: {
                    title: 'Horizontal Timeline Page'
                }
            },
            {
                path: 'verticaltimeline',
                component: _timeline_vertical_vertical_timeline_page_component__WEBPACK_IMPORTED_MODULE_6__["VerticalTimelinePageComponent"],
                data: {
                    title: 'Vertical Timeline Page'
                }
            },
            {
                path: 'profile',
                component: _user_profile_user_profile_page_component__WEBPACK_IMPORTED_MODULE_7__["UserProfilePageComponent"],
                data: {
                    title: 'User Profile Page'
                }
            },
            {
                path: 'search',
                component: _search_search_component__WEBPACK_IMPORTED_MODULE_8__["SearchComponent"],
                data: {
                    title: 'Search'
                }
            },
            {
                path: 'faq',
                component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_9__["FaqComponent"],
                data: {
                    title: 'FAQ'
                }
            },
            {
                path: 'kb',
                component: _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_10__["KnowledgeBaseComponent"],
                data: {
                    title: 'Knowledge Base'
                }
            }
        ]
    }
];
var FullPagesRoutingModule = /** @class */ (function () {
    function FullPagesRoutingModule() {
    }
    FullPagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], FullPagesRoutingModule);
    return FullPagesRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/full-pages/full-pages.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/full-pages/full-pages.module.ts ***!
  \*******************************************************/
/*! exports provided: FullPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPagesModule", function() { return FullPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
/* harmony import */ var _full_pages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./full-pages-routing.module */ "./src/app/pages/full-pages/full-pages-routing.module.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/fesm5/ng-chartist.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _gallery_gallery_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./gallery/gallery-page.component */ "./src/app/pages/full-pages/gallery/gallery-page.component.ts");
/* harmony import */ var _invoice_invoice_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./invoice/invoice-page.component */ "./src/app/pages/full-pages/invoice/invoice-page.component.ts");
/* harmony import */ var _timeline_horizontal_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./timeline/horizontal/horizontal-timeline-page.component */ "./src/app/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.ts");
/* harmony import */ var _timeline_horizontal_component_horizontal_timeline_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./timeline/horizontal/component/horizontal-timeline.component */ "./src/app/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.ts");
/* harmony import */ var _timeline_vertical_vertical_timeline_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timeline/vertical/vertical-timeline-page.component */ "./src/app/pages/full-pages/timeline/vertical/vertical-timeline-page.component.ts");
/* harmony import */ var _user_profile_user_profile_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-profile/user-profile-page.component */ "./src/app/pages/full-pages/user-profile/user-profile-page.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/search.component */ "./src/app/pages/full-pages/search/search.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/pages/full-pages/faq/faq.component.ts");
/* harmony import */ var _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./knowledge-base/knowledge-base.component */ "./src/app/pages/full-pages/knowledge-base/knowledge-base.component.ts");


















var FullPagesModule = /** @class */ (function () {
    function FullPagesModule() {
    }
    FullPagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_4__["Ng2SmartTableModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _full_pages_routing_module__WEBPACK_IMPORTED_MODULE_5__["FullPagesRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_6__["ChartistModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"]
            ],
            declarations: [
                _gallery_gallery_page_component__WEBPACK_IMPORTED_MODULE_9__["GalleryPageComponent"],
                _invoice_invoice_page_component__WEBPACK_IMPORTED_MODULE_10__["InvoicePageComponent"],
                _timeline_horizontal_horizontal_timeline_page_component__WEBPACK_IMPORTED_MODULE_11__["HorizontalTimelinePageComponent"],
                _timeline_horizontal_component_horizontal_timeline_component__WEBPACK_IMPORTED_MODULE_12__["HorizontalTimelineComponent"],
                _timeline_vertical_vertical_timeline_page_component__WEBPACK_IMPORTED_MODULE_13__["VerticalTimelinePageComponent"],
                _user_profile_user_profile_page_component__WEBPACK_IMPORTED_MODULE_14__["UserProfilePageComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_16__["FaqComponent"],
                _knowledge_base_knowledge_base_component__WEBPACK_IMPORTED_MODULE_17__["KnowledgeBaseComponent"]
            ]
        })
    ], FullPagesModule);
    return FullPagesModule;
}());



/***/ }),

/***/ "./src/app/pages/full-pages/gallery/gallery-page.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/full-pages/gallery/gallery-page.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMvZ2FsbGVyeS9nYWxsZXJ5LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/full-pages/gallery/gallery-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/full-pages/gallery/gallery-page.component.ts ***!
  \********************************************************************/
/*! exports provided: GalleryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageComponent", function() { return GalleryPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryPageComponent = /** @class */ (function () {
    function GalleryPageComponent() {
    }
    GalleryPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery-page',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gallery-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/gallery/gallery-page.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gallery-page.component.scss */ "./src/app/pages/full-pages/gallery/gallery-page.component.scss")).default]
        })
    ], GalleryPageComponent);
    return GalleryPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/full-pages/invoice/invoice-page.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/full-pages/invoice/invoice-page.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMvaW52b2ljZS9pbnZvaWNlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/full-pages/invoice/invoice-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/full-pages/invoice/invoice-page.component.ts ***!
  \********************************************************************/
/*! exports provided: InvoicePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageComponent", function() { return InvoicePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InvoicePageComponent = /** @class */ (function () {
    function InvoicePageComponent() {
    }
    InvoicePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invoice-page',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./invoice-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/invoice/invoice-page.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./invoice-page.component.scss */ "./src/app/pages/full-pages/invoice/invoice-page.component.scss")).default]
        })
    ], InvoicePageComponent);
    return InvoicePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/full-pages/knowledge-base/knowledge-base.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/full-pages/knowledge-base/knowledge-base.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMva25vd2xlZGdlLWJhc2Uva25vd2xlZGdlLWJhc2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/full-pages/knowledge-base/knowledge-base.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/full-pages/knowledge-base/knowledge-base.component.ts ***!
  \*****************************************************************************/
/*! exports provided: KnowledgeBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KnowledgeBaseComponent", function() { return KnowledgeBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var KnowledgeBaseComponent = /** @class */ (function () {
    function KnowledgeBaseComponent(modalService) {
        this.modalService = modalService;
    }
    KnowledgeBaseComponent.prototype.GetDetails = function (content, titleText) {
        this.title = titleText;
        this.modalService.open(content, { size: 'lg' }).result.then(function (result) {
        }, function (reason) {
        });
    };
    KnowledgeBaseComponent.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    KnowledgeBaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-knowledge-base',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./knowledge-base.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/knowledge-base/knowledge-base.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./knowledge-base.component.scss */ "./src/app/pages/full-pages/knowledge-base/knowledge-base.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], KnowledgeBaseComponent);
    return KnowledgeBaseComponent;
}());



/***/ }),

/***/ "./src/app/pages/full-pages/search/search.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/full-pages/search/search.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/full-pages/search/search.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/full-pages/search/search.component.ts ***!
  \*************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SearchComponent = /** @class */ (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/search/search.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search.component.scss */ "./src/app/pages/full-pages/search/search.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".cd-horizontal-timeline .events-content {\n  margin: 1rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnVsbC1wYWdlcy90aW1lbGluZS9ob3Jpem9udGFsL2NvbXBvbmVudC9DOlxcVXNlcnNcXE1hc2loXFxEZXNrdG9wXFxmcm9udFxcYXBleF9ydGwvc3JjXFxhcHBcXHBhZ2VzXFxmdWxsLXBhZ2VzXFx0aW1lbGluZVxcaG9yaXpvbnRhbFxcY29tcG9uZW50XFxob3Jpem9udGFsLXRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9mdWxsLXBhZ2VzL3RpbWVsaW5lL2hvcml6b250YWwvY29tcG9uZW50L2hvcml6b250YWwtdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxjQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mdWxsLXBhZ2VzL3RpbWVsaW5lL2hvcml6b250YWwvY29tcG9uZW50L2hvcml6b250YWwtdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2QtaG9yaXpvbnRhbC10aW1lbGluZSB7XG4gIC5ldmVudHMtY29udGVudCB7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gIH1cbn1cbiIsIi5jZC1ob3Jpem9udGFsLXRpbWVsaW5lIC5ldmVudHMtY29udGVudCB7XG4gIG1hcmdpbjogMXJlbSAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: HorizontalTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalTimelineComponent", function() { return HorizontalTimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var HorizontalTimelineComponent = /** @class */ (function () {
    function HorizontalTimelineComponent(_cdr) {
        this._cdr = _cdr;
        this.prevLinkInactive = true;
        this.nextLinkInactive = false;
        this.loaded = false;
        this.selectedIndex = 0;
        this.eventsWrapperWidth = 0;
        this._viewInitialized = false;
        this._timelineWrapperWidth = 720;
        this._eventsMinDistance = 80;
        this._dateFormat = 'dd.MM.yyyy';
        this._dateFormatTop = 'dd MMM';
        this._disabled = false;
        this._showContent = false;
    }
    HorizontalTimelineComponent_1 = HorizontalTimelineComponent;
    Object.defineProperty(HorizontalTimelineComponent.prototype, "timelineWrapperWidth", {
        set: function (value) {
            this._timelineWrapperWidth = value;
            this._cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "eventsMinDistance", {
        set: function (value) {
            this._eventsMinDistance = value;
            this.initView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "timelineElements", {
        get: function () {
            return this._timelineElements;
        },
        set: function (value) {
            this._timelineElements = value;
            this.initView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "dateFormat", {
        get: function () {
            return this._dateFormat;
        },
        set: function (value) {
            this._dateFormat = value;
            this.initView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "dateFormatTop", {
        get: function () {
            return this._dateFormatTop;
        },
        set: function (value) {
            this._dateFormatTop = value;
            this.initView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "disabled", {
        set: function (value) {
            this._disabled = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HorizontalTimelineComponent.prototype, "showContent", {
        get: function () {
            return this._showContent;
        },
        set: function (value) {
            this._showContent = value;
            this._cdr.detectChanges();
        },
        enumerable: true,
        configurable: true
    });
    HorizontalTimelineComponent.pxToNumber = function (val) {
        return Number(val.replace('px', ''));
    };
    HorizontalTimelineComponent.getElementWidth = function (element) {
        var computedStyle = window.getComputedStyle(element);
        if (!computedStyle.width) {
            return 0;
        }
        return HorizontalTimelineComponent_1.pxToNumber(computedStyle.width);
    };
    HorizontalTimelineComponent.parentElement = function (element, tagName) {
        if (!element || !element.parentNode) {
            return null;
        }
        var parent = element.parentNode;
        while (true) {
            if (parent.tagName.toLowerCase() == tagName) {
                return parent;
            }
            parent = parent.parentNode;
            if (!parent) {
                return null;
            }
        }
    };
    HorizontalTimelineComponent.getTranslateValue = function (timeline) {
        var timelineStyle = window.getComputedStyle(timeline);
        var timelineTranslate = timelineStyle.getPropertyValue('-webkit-transform') ||
            timelineStyle.getPropertyValue('-moz-transform') ||
            timelineStyle.getPropertyValue('-ms-transform') ||
            timelineStyle.getPropertyValue('-o-transform') ||
            timelineStyle.getPropertyValue('transform');
        var translateValue = 0;
        if (timelineTranslate.indexOf('(') >= 0) {
            var timelineTranslateStr = timelineTranslate
                .split('(')[1]
                .split(')')[0]
                .split(',')[4];
            translateValue = Number(timelineTranslateStr);
        }
        return translateValue;
    };
    HorizontalTimelineComponent.setTransformValue = function (element, property, value) {
        element.style['-webkit-transform'] = property + '(' + value + ')';
        element.style['-moz-transform'] = property + '(' + value + ')';
        element.style['-ms-transform'] = property + '(' + value + ')';
        element.style['-o-transform'] = property + '(' + value + ')';
        element.style['transform'] = property + '(' + value + ')';
    };
    HorizontalTimelineComponent.dayDiff = function (first, second) {
        return Math.round(second.getTime() - first.getTime());
    };
    HorizontalTimelineComponent.minLapse = function (elements) {
        if (elements && elements.length && elements.length === 1) {
            return 0;
        }
        var result = 0;
        for (var i = 1; i < elements.length; i++) {
            var distance = HorizontalTimelineComponent_1.dayDiff(elements[i - 1].date, elements[i].date);
            result = result ? Math.min(result, distance) : distance;
        }
        return result;
    };
    HorizontalTimelineComponent.prototype.ngAfterViewInit = function () {
        this._cdr.detach();
        this._viewInitialized = true;
        this.initView();
    };
    HorizontalTimelineComponent.prototype.onScrollClick = function (event, forward) {
        event.preventDefault();
        this.updateSlide(this.eventsWrapperWidth, forward);
        this._cdr.detectChanges();
    };
    HorizontalTimelineComponent.prototype.onEventClick = function (event, selectedItem) {
        event.preventDefault();
        if (this._disabled) {
            return;
        }
        var element = event.target;
        // detect click on the a single event - show new event content
        var visibleItem = this._timelineElements[0];
        this._timelineElements.forEach(function (item) {
            if (item.selected && item != selectedItem) {
                visibleItem = item;
                item.selected = false;
            }
        });
        this.selectedIndex = this._timelineElements.indexOf(selectedItem);
        selectedItem.selected = true;
        this.updateFilling(element);
        this._cdr.detectChanges();
    };
    HorizontalTimelineComponent.prototype.initTimeline = function (timeLines) {
        var eventsMinLapse = HorizontalTimelineComponent_1.minLapse(timeLines);
        // assign a left position to the single events along the timeline
        this.setDatePosition(timeLines, this._eventsMinDistance, eventsMinLapse);
        // assign a width to the timeline
        this.setTimelineWidth(timeLines, this._eventsMinDistance, eventsMinLapse);
        // the timeline has been initialize - show it
        this.loaded = true;
    };
    HorizontalTimelineComponent.prototype.updateSlide = function (timelineTotWidth, forward) {
        var translateValue = HorizontalTimelineComponent_1.getTranslateValue(this.eventsWrapper.nativeElement);
        if (forward) {
            this.translateTimeline(translateValue - this._timelineWrapperWidth + this._eventsMinDistance, this._timelineWrapperWidth - timelineTotWidth);
        }
        else {
            this.translateTimeline(translateValue + this._timelineWrapperWidth - this._eventsMinDistance, null);
        }
    };
    HorizontalTimelineComponent.prototype.updateTimelinePosition = function (element) {
        var eventStyle = window.getComputedStyle(element);
        var eventLeft = HorizontalTimelineComponent_1.pxToNumber(eventStyle.getPropertyValue('left'));
        var translateValue = HorizontalTimelineComponent_1.getTranslateValue(this.eventsWrapper.nativeElement);
        if (eventLeft > this._timelineWrapperWidth - translateValue) {
            this.translateTimeline(-eventLeft + this._timelineWrapperWidth / 2, this._timelineWrapperWidth - this.eventsWrapperWidth);
        }
    };
    HorizontalTimelineComponent.prototype.translateTimeline = function (value, totWidth) {
        // only negative translate value
        value = (value > 0) ? 0 : value;
        // do not translate more than timeline width
        value = (!(totWidth === null) && value < totWidth) ? totWidth : value;
        HorizontalTimelineComponent_1.setTransformValue(this.eventsWrapper.nativeElement, 'translateX', value + 'px');
        // update navigation arrows visibility
        this.prevLinkInactive = value === 0;
        this.nextLinkInactive = value === totWidth;
    };
    HorizontalTimelineComponent.prototype.setTimelineWidth = function (elements, width, eventsMinLapse) {
        var timeSpan = 100;
        if (elements.length > 1) {
            timeSpan = HorizontalTimelineComponent_1.dayDiff(elements[0].date, elements[elements.length - 1].date);
        }
        var timeSpanNorm = timeSpan / eventsMinLapse;
        timeSpanNorm = Math.round(timeSpanNorm) + 4;
        this.eventsWrapperWidth = timeSpanNorm * width;
        var aHref = this.eventsWrapper.nativeElement.querySelectorAll('a.selected')[0];
        this.updateFilling(aHref);
        this.updateTimelinePosition(aHref);
        return this.eventsWrapperWidth;
    };
    HorizontalTimelineComponent.prototype.updateFilling = function (element) {
        // change .filling-line length according to the selected event
        var eventStyle = window.getComputedStyle(element);
        var eventLeft = eventStyle.getPropertyValue('left');
        var eventWidth = eventStyle.getPropertyValue('width');
        var eventLeftNum = HorizontalTimelineComponent_1.pxToNumber(eventLeft) + HorizontalTimelineComponent_1.pxToNumber(eventWidth) / 2;
        var scaleValue = eventLeftNum / this.eventsWrapperWidth;
        HorizontalTimelineComponent_1.setTransformValue(this.fillingLine.nativeElement, 'scaleX', scaleValue);
    };
    HorizontalTimelineComponent.prototype.initView = function () {
        if (!this._viewInitialized) {
            return;
        }
        if (this._timelineElements && this._timelineElements.length) {
            for (var i = 0; i < this._timelineElements.length; i++) {
                if (this._timelineElements[i].selected) {
                    this.selectedIndex = i;
                    break;
                }
            }
            this.initTimeline(this._timelineElements);
        }
        this._cdr.detectChanges();
    };
    HorizontalTimelineComponent.prototype.setDatePosition = function (elements, min, eventsMinLapse) {
        var timelineEventsArray = this.timelineEvents.toArray();
        var i = 0;
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var component = elements_1[_i];
            var distance = HorizontalTimelineComponent_1.dayDiff(elements[0].date, component.date);
            var distanceNorm = Math.round(distance / eventsMinLapse);
            timelineEventsArray[i].nativeElement.style.left = distanceNorm * min + 'px';
            // span
            var span = timelineEventsArray[i].nativeElement.parentElement.children[1];
            var spanWidth = HorizontalTimelineComponent_1.getElementWidth(span);
            span.style.left = distanceNorm * min + spanWidth / 2 + 'px';
            i++;
        }
    };
    var HorizontalTimelineComponent_1;
    HorizontalTimelineComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('eventsWrapper', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HorizontalTimelineComponent.prototype, "eventsWrapper", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fillingLine', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HorizontalTimelineComponent.prototype, "fillingLine", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('timelineEvents'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], HorizontalTimelineComponent.prototype, "timelineEvents", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], HorizontalTimelineComponent.prototype, "timelineWrapperWidth", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], HorizontalTimelineComponent.prototype, "eventsMinDistance", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], HorizontalTimelineComponent.prototype, "timelineElements", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], HorizontalTimelineComponent.prototype, "dateFormat", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], HorizontalTimelineComponent.prototype, "dateFormatTop", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], HorizontalTimelineComponent.prototype, "disabled", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
    ], HorizontalTimelineComponent.prototype, "showContent", null);
    HorizontalTimelineComponent = HorizontalTimelineComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'horizontal-timeline',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./horizontal-timeline.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.html")).default,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('contentState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        position: 'relative', 'z-index': 2, opacity: 1,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('right => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateX(100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active => right', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateX(-100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('active => left', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateX(-100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 1.0 })
                        ]))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('left => active', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                            transform: 'translateX(100%)'
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
                        ]))
                    ]),
                ])
            ],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./horizontal-timeline.component.scss */ "./src/app/pages/full-pages/timeline/horizontal/component/horizontal-timeline.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], HorizontalTimelineComponent);
    return HorizontalTimelineComponent;
}());



/***/ }),

/***/ "./src/app/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMvdGltZWxpbmUvaG9yaXpvbnRhbC9ob3Jpem9udGFsLXRpbWVsaW5lLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.ts ***!
  \********************************************************************************************/
/*! exports provided: HorizontalTimelinePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HorizontalTimelinePageComponent", function() { return HorizontalTimelinePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HorizontalTimelinePageComponent = /** @class */ (function () {
    function HorizontalTimelinePageComponent() {
        this.content = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum praesentium officia, fugit recusandae \n    ipsa, quia velit nulla adipisci? Consequuntur aspernatur at, eaque hic repellendus sit dicta consequatur quae, \n    ut harum ipsam molestias maxime non nisi reiciendis eligendi! Doloremque quia pariatur harum ea amet quibusdam \n    quisquam, quae, temporibus dolores porro doloribus.";
        this.timeline = [
            { date: new Date(2014, 1, 16), selected: true, title: 'Horizontal Timeline', content: this.content },
            { date: new Date(2014, 2, 28), title: 'Event title here', content: this.content },
            { date: new Date(2014, 3, 20), title: 'Event title here', content: this.content },
            { date: new Date(2014, 5, 20), title: 'Event title here', content: this.content },
            { date: new Date(2014, 7, 9), title: 'Event title here', content: this.content },
            { date: new Date(2014, 8, 30), title: 'Event title here', content: this.content },
            { date: new Date(2014, 9, 15), title: 'Event title here', content: this.content },
            { date: new Date(2014, 11, 1), title: 'Event title here', content: this.content },
            { date: new Date(2014, 12, 10), title: 'Event title here', content: this.content },
            { date: new Date(2015, 1, 19), title: 'Event title here', content: this.content },
            { date: new Date(2015, 3, 3), title: 'Event title here', content: this.content },
        ];
    }
    HorizontalTimelinePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-horizontal-timeline-page',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./horizontal-timeline-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./horizontal-timeline-page.component.scss */ "./src/app/pages/full-pages/timeline/horizontal/horizontal-timeline-page.component.scss")).default]
        })
    ], HorizontalTimelinePageComponent);
    return HorizontalTimelinePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/full-pages/timeline/vertical/vertical-timeline-page.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/full-pages/timeline/vertical/vertical-timeline-page.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host ::ng-deep .ct-area {\n  stroke: none;\n  fill-opacity: 0.1;\n}\n\n:host ::ng-deep .ct-grid {\n  stroke-dasharray: 0px;\n  stroke: rgba(0, 0, 0, 0.1);\n}\n\n:host ::ng-deep .ct-label {\n  font-size: 0.9rem;\n}\n\n:host ::ng-deep .lineArea1 .ct-series-a .ct-area {\n  fill-opacity: 0.3;\n  fill: #FF586B;\n}\n\n:host ::ng-deep .lineArea1 .ct-series-b .ct-area {\n  fill: #FF586B;\n  fill-opacity: 0.6;\n}\n\n:host ::ng-deep .lineArea1 .ct-line {\n  stroke: #FF586B;\n  stroke-width: 0px;\n}\n\n:host ::ng-deep .lineArea1 .ct-point {\n  stroke-width: 0px;\n}\n\nagm-map {\n  height: 450px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnVsbC1wYWdlcy90aW1lbGluZS92ZXJ0aWNhbC9DOlxcVXNlcnNcXE1hc2loXFxEZXNrdG9wXFxmcm9udFxcYXBleF9ydGwvc3JjXFxhcHBcXHBhZ2VzXFxmdWxsLXBhZ2VzXFx0aW1lbGluZVxcdmVydGljYWxcXHZlcnRpY2FsLXRpbWVsaW5lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Z1bGwtcGFnZXMvdGltZWxpbmUvdmVydGljYWwvdmVydGljYWwtdGltZWxpbmUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7RUFDQSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURJQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FDREo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURFQTtFQUNJLGlCQUFBO0FDQ0o7O0FESUE7RUFDSSxhQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mdWxsLXBhZ2VzL3RpbWVsaW5lL3ZlcnRpY2FsL3ZlcnRpY2FsLXRpbWVsaW5lLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmN0LWFyZWEge1xuICAgIHN0cm9rZTogbm9uZTtcbiAgICBmaWxsLW9wYWNpdHk6IDAuMTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdC1ncmlke1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDBweDtcbiAgICBzdHJva2U6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdC1sYWJlbHtcbiAgICBmb250LXNpemU6IDAuOXJlbTtcbn1cblxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMSBDU1MgU3RhcnRzXG5cbjpob3N0IDo6bmctZGVlcCAubGluZUFyZWExIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XG4gICAgZmlsbC1vcGFjaXR5OiAwLjM7XG4gICAgZmlsbDogI0ZGNTg2Qjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQXJlYTEgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcbiAgICBmaWxsOiAjRkY1ODZCO1xuICAgIGZpbGwtb3BhY2l0eTogMC42O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQXJlYTEgLmN0LWxpbmV7XG4gICAgc3Ryb2tlOiAjRkY1ODZCO1xuICAgIHN0cm9rZS13aWR0aDogMHB4O1xufVxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQXJlYTEgLmN0LXBvaW50IHtcbiAgICBzdHJva2Utd2lkdGg6IDBweDtcbn1cblxuLy8gTGluZSB3aXRoIEFyZWEgQ2hhcnQgMSBDU1MgRW5kc1xuXG5hZ20tbWFwIHtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICB9IiwiOmhvc3QgOjpuZy1kZWVwIC5jdC1hcmVhIHtcbiAgc3Ryb2tlOiBub25lO1xuICBmaWxsLW9wYWNpdHk6IDAuMTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdC1ncmlkIHtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMHB4O1xuICBzdHJva2U6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5jdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVBcmVhMSAuY3Qtc2VyaWVzLWEgLmN0LWFyZWEge1xuICBmaWxsLW9wYWNpdHk6IDAuMztcbiAgZmlsbDogI0ZGNTg2Qjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQXJlYTEgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcbiAgZmlsbDogI0ZGNTg2QjtcbiAgZmlsbC1vcGFjaXR5OiAwLjY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGluZUFyZWExIC5jdC1saW5lIHtcbiAgc3Ryb2tlOiAjRkY1ODZCO1xuICBzdHJva2Utd2lkdGg6IDBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQXJlYTEgLmN0LXBvaW50IHtcbiAgc3Ryb2tlLXdpZHRoOiAwcHg7XG59XG5cbmFnbS1tYXAge1xuICBoZWlnaHQ6IDQ1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/full-pages/timeline/vertical/vertical-timeline-page.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/full-pages/timeline/vertical/vertical-timeline-page.component.ts ***!
  \****************************************************************************************/
/*! exports provided: VerticalTimelinePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerticalTimelinePageComponent", function() { return VerticalTimelinePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var data = __webpack_require__(/*! ../../../../shared/data/chartist.json */ "./src/app/shared/data/chartist.json");
var VerticalTimelinePageComponent = /** @class */ (function () {
    function VerticalTimelinePageComponent() {
        // Google map lat-long
        this.lat = 40.650002;
        this.lng = -73.949997;
        // Line with Area Chart 1 Starts
        this.lineArea1 = {
            type: 'Line',
            data: data['lineArea1'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true,
                onlyInteger: true,
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                axisX: {
                    showGrid: false
                }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(255, 255, 255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(38, 198, 218, 1)'
                    });
                },
            },
        };
        // Line with Area Chart 1 Ends
    }
    VerticalTimelinePageComponent.prototype.ngOnInit = function () {
    };
    VerticalTimelinePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-vertical-timeline-page',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vertical-timeline-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/timeline/vertical/vertical-timeline-page.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vertical-timeline-page.component.scss */ "./src/app/pages/full-pages/timeline/vertical/vertical-timeline-page.component.scss")).default]
        })
    ], VerticalTimelinePageComponent);
    return VerticalTimelinePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/full-pages/user-profile/user-profile-page.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/pages/full-pages/user-profile/user-profile-page.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".profile-menu .active {\n  border-bottom: 2px solid;\n  margin-bottom: -2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnVsbC1wYWdlcy91c2VyLXByb2ZpbGUvQzpcXFVzZXJzXFxNYXNpaFxcRGVza3RvcFxcZnJvbnRcXGFwZXhfcnRsL3NyY1xcYXBwXFxwYWdlc1xcZnVsbC1wYWdlc1xcdXNlci1wcm9maWxlXFx1c2VyLXByb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZnVsbC1wYWdlcy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx3QkFBQTtFQUNBLG1CQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mdWxsLXBhZ2VzL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLW1lbnV7XG4gICAgLmFjdGl2ZXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMnB4O1xuICAgIH1cbn0iLCIucHJvZmlsZS1tZW51IC5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gIG1hcmdpbi1ib3R0b206IC0ycHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/full-pages/user-profile/user-profile-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/full-pages/user-profile/user-profile-page.component.ts ***!
  \******************************************************************************/
/*! exports provided: UserProfilePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageComponent", function() { return UserProfilePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Models_allmodels_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Models/allmodels.service */ "./src/app/Models/allmodels.service.ts");
/* harmony import */ var _app_login_loginbox_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../app/login/loginbox/api.service */ "./src/app/login/loginbox/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/fesm5/ngx-cookie-service.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var UserProfilePageComponent = /** @class */ (function () {
    function UserProfilePageComponent(pdata, router, api, cookieService) {
        this.pdata = pdata;
        this.router = router;
        this.api = api;
        this.cookieService = cookieService;
        this.name = "";
        this.father = "";
        this.address = "";
        this.mobile = "";
        this.gender = "";
        this.company = "";
        this.shaba = "";
        this.email = "";
        this.wallpaperpic = "";
        //Variable Declaration
        this.currentPage = "About";
    }
    UserProfilePageComponent.prototype.ngOnInit = function () {
    };
    UserProfilePageComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var token_parts = this.cookieService.get('T');
        this.api.getPerson(token_parts).subscribe(function (response1) {
            _this.personData = response1;
            _this.personname = response1[0]['f_name'] + " " + response1[0]['l_name'];
            _this.name = _this.personname;
            _this.father = response1[0]['father_name'];
            _this.email = response1[0]['e_mail'];
            _this.address = response1[0]['address'];
            _this.mobile = response1[0]['mobile'];
            if (response1[0]['gender'] == 1) {
                _this.gender = "مرد";
            }
            else {
                _this.gender = "زن";
            }
            _this.company = response1[0]['company_id__name'];
            _this.shaba = response1[0]['shaba_number'];
            var imgsrc = "http://bimeh.plus/media/" + response1[0]['picture'];
            _this.wallpaperpic = "http://bimeh.plus/media/" + response1[0]['company_id__picture'];
            _this.prsonpic = imgsrc;
        }, function (err) {
            _this.router.navigate(['login']);
            console.error('refresh error', err);
        });
    };
    UserProfilePageComponent.prototype.showPage = function (page) {
        this.currentPage = page;
    };
    UserProfilePageComponent.ctorParameters = function () { return [
        { type: _Models_allmodels_service__WEBPACK_IMPORTED_MODULE_2__["AllmodelsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _app_login_loginbox_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] }
    ]; };
    UserProfilePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-profile-page',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/full-pages/user-profile/user-profile-page.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile-page.component.scss */ "./src/app/pages/full-pages/user-profile/user-profile-page.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Models_allmodels_service__WEBPACK_IMPORTED_MODULE_2__["AllmodelsService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _app_login_loginbox_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"]])
    ], UserProfilePageComponent);
    return UserProfilePageComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-full-pages-full-pages-module.js.map