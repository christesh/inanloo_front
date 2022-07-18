(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~forms-forms-module~tables-tables-module"],{

/***/ "./src/app/shared/data/smart-data-table.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/data/smart-data-table.ts ***!
  \*************************************************/
/*! exports provided: filtersettings, filerdata, admintable, insuredtable, usertable, alertdata, adminregtable, insuredregtable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filtersettings", function() { return filtersettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filerdata", function() { return filerdata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "admintable", function() { return admintable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insuredtable", function() { return insuredtable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usertable", function() { return usertable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertdata", function() { return alertdata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminregtable", function() { return adminregtable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insuredregtable", function() { return insuredregtable; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var filtersettings = {
    columns: {
        id: {
            title: 'ID',
        },
        name: {
            title: 'Full Name',
            filter: {
                type: 'list',
                config: {
                    selectText: 'Select...',
                    list: [
                        { value: 'Glenna Reichert', title: 'Glenna Reichert' },
                        { value: 'Kurtis Weissnat', title: 'Kurtis Weissnat' },
                        { value: 'Chelsey Dietrich', title: 'Chelsey Dietrich' },
                    ],
                },
            },
        },
        email: {
            title: 'Email',
        },
        passed: {
            title: 'Passed',
            filter: {
                type: 'checkbox',
                config: {
                    true: 'Yes',
                    false: 'No',
                    resetText: 'clear',
                },
            },
        },
    },
    attr: {
        class: "table table-responsive"
    },
};
var filerdata = [
    {
        id: 4,
        name: 'Patricia Lebsack',
        email: 'Julianne.OConner@kory.org',
        passed: 'Yes',
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        email: 'Lucio_Hettinger@annie.ca',
        passed: 'No',
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        email: 'Karley_Dach@jasper.info',
        passed: 'Yes',
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        email: 'Telly.Hoeger@billy.biz',
        passed: 'No',
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        email: 'Sherwood@rosamond.me',
        passed: 'Yes',
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        email: 'Chaim_McDermott@dana.io',
        passed: 'No',
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        email: 'Rey.Padberg@karina.biz',
        passed: 'No',
    },
    {
        id: 11,
        name: 'Nicholas DuBuque',
        email: 'Rey.Padberg@rosamond.biz',
        passed: 'Yes',
    },
];
var admintable = {
    editable: false,
    pager: {
        display: true,
        perPage: 10
    },
    actions: {
        columnTitle: "مشاهده جزییات",
        custom: [
            {
                name: 'جزییات',
                title: ' <a class="d-flex  btn-round gradient-blackberry py-2 width-100 height-25 justify-content-center white" (click)="showitem()" >جزییات</a>'
            },
        ],
        add: false,
        edit: false,
        delete: false
    },
    columns: {
        contract_plan_subservice__contract__title: {
            title: 'قرارداد',
        },
        contract_plan_subservice__plan__title: {
            title: 'طرح',
        },
        trackingـcode: {
            title: 'کد پیگیری',
        },
        create_at: {
            title: 'تاریخ ثبت',
        },
        user__national_id: {
            title: 'کد ملی',
        },
        user__f_name: {
            title: 'نام',
        },
        user__l_name: {
            title: 'نام خانوادگی',
        },
        create_by__person__national_id: {
            title: 'ثبت شده توسط',
        },
        contract_plan_subservice__Sub_service__service__title: {
            title: 'تعهد',
        },
        contract_plan_subservice__Sub_service__title: {
            title: 'خدمات',
        },
        invoice: {
            title: 'هزینه',
        },
        user__reltomain: {
            title: 'وضعیت بیمه شده',
        },
        date: {
            title: 'تاریخ خدمت',
        },
        status: {
            title: 'وضعیت',
        },
        accInvoice: {
            title: 'هزینه پرداخت شده',
        },
        acc_date: {
            title: 'تاریخ پرداخت'
        }
    },
    attr: {
        class: "table table-responsive"
    },
    noDataMessage: "هیچ اطلاعاتی یافت نشد"
};
var insuredtable = {
    editable: false,
    pager: {
        display: true,
        perPage: 10
    },
    actions: {
        columnTitle: "مشاهده جزییات",
        custom: [
            {
                name: 'جزییات',
                title: ' <a class="d-flex  btn-round gradient-blackberry py-2 width-100 height-25 justify-content-center white" (click)="showitem()" >جزییات</a>'
            },
        ],
        add: false,
        edit: false,
        delete: false
    },
    columns: {
        contract_plan_subservice__plan__title: {
            title: 'طرح',
        },
        trackingـcode: {
            title: 'کد پیگیری',
        },
        create_at: {
            title: 'تاریخ ثبت',
        },
        user__national_id: {
            title: 'کد ملی',
        },
        user__f_name: {
            title: 'نام',
        },
        user__l_name: {
            title: 'نام خانوادگی',
        },
        create_by__person__national_id: {
            title: 'ثبت شده توسط',
        },
        contract_plan_subservice__Sub_service__service__title: {
            title: 'تعهد',
        },
        contract_plan_subservice__Sub_service__title: {
            title: 'خدمات',
        },
        invoice: {
            title: 'هزینه',
        },
        user__reltomain: {
            title: 'وضعیت بیمه شده',
        },
        date: {
            title: 'تاریخ خدمت',
        },
        status: {
            title: 'وضعیت',
        },
        accInvoice: {
            title: 'هزینه پرداخت شده',
        },
    },
    attr: {
        class: "table table-responsive"
    },
    noDataMessage: "هیچ اطلاعاتی یافت نشد"
};
var usertable = {
    editable: false,
    pager: {
        display: true,
        perPage: 10
    },
    actions: {
        columnTitle: "مشاهده جزییات",
        custom: [
            {
                name: 'جزییات',
                title: ' <a class="d-flex  btn-round gradient-blackberry py-2 width-100 height-25 justify-content-center white" (click)="showitem()" >جزییات</a>'
            },
        ],
        add: false,
        edit: false,
        delete: false
    },
    columns: {
        trackingـcode: {
            title: 'کد پیگیری',
        },
        create_at: {
            title: 'تاریخ ثبت',
        },
        user__national_id: {
            title: 'کد ملی',
        },
        user__f_name: {
            title: 'نام',
        },
        user__l_name: {
            title: 'نام خانوادگی',
        },
        create_by__person__national_id: {
            title: 'ثبت شده توسط',
        },
        contract_plan_subservice__Sub_service__service__title: {
            title: 'تعهد',
        },
        contract_plan_subservice__Sub_service__title: {
            title: 'خدمات',
        },
        invoice: {
            title: 'هزینه',
        },
        user__reltomain: {
            title: 'وضعیت بیمه شده',
        },
        date: {
            title: 'تاریخ خدمت',
        },
        status: {
            title: 'وضعیت',
        },
        accInvoice: {
            title: 'هزینه پرداخت شده',
        },
    },
    attr: {
        class: "table table-responsive"
    },
    noDataMessage: "هیچ اطلاعاتی یافت نشد"
};
var alertdata = [
    {
        id: 1,
        name: 'Leanne Grahصبح',
        username: 'Bret',
        email: 'Sincere@april.biz',
        notShownField: true,
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        notShownField: true,
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        notShownField: false,
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        notShownField: false,
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        notShownField: false,
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        notShownField: false,
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        notShownField: false,
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        notShownField: true,
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        notShownField: false,
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        notShownField: false,
    },
    {
        id: 11,
        name: 'Nicholas DuBuque',
        username: 'Nicholas.Stanton',
        email: 'Rey.Padberg@rosamond.biz',
        notShownField: true,
    }
];
var adminregtable = {
    editable: false,
    pager: {
        display: true,
        perPage: 10
    },
    actions: {
        columnTitle: "ثبت خسارت",
        custom: [
            {
                name: 'خسارت',
                title: ' <a class="d-flex  btn-round gradient-blackberry py-2 width-100 height-25 justify-content-center white" (click)="regclaim()" >ثبت خسارت</a>'
            },
        ],
        add: false,
        edit: false,
        delete: false
    },
    columns: {
        con__title: {
            title: 'قرارداد',
        },
        pln__title: {
            title: 'طرح',
        },
        us__national_id: {
            title: 'کد ملی',
        },
        us__f_name: {
            title: 'نام',
        },
        us__l_name: {
            title: 'نام خانوادگی',
        },
        us__father_name: {
            title: 'نام پدر',
        },
        us__reltomain: {
            title: 'نسبت با بیمه شده اصلی',
        },
    },
    attr: {
        class: "table table-responsive"
    },
    noDataMessage: "هیچ اطلاعاتی یافت نشد"
};
var insuredregtable = {
    editable: false,
    pager: {
        display: true,
        perPage: 10
    },
    actions: {
        columnTitle: "ثبت خسارت",
        custom: [
            {
                name: 'خسارت',
                title: ' <a class="d-flex  btn-round gradient-blackberry py-2 width-100 height-25 justify-content-center white" (click)="regclaim()" >ثبت خسارت</a>'
            },
        ],
        add: false,
        edit: false,
        delete: false
    },
    columns: {
        pln__title: {
            title: 'طرح',
        },
        us__national_id: {
            title: 'کد ملی',
        },
        us__f_name: {
            title: 'نام',
        },
        us__l_name: {
            title: 'نام خانوادگی',
        },
        us__father_name: {
            title: 'نام پدر',
        },
        us__reltomain: {
            title: 'نسبت با بیمه شده اصلی',
        },
    },
    attr: {
        class: "table table-responsive"
    },
    noDataMessage: "هیچ اطلاعاتی یافت نشد"
};


/***/ })

}]);
//# sourceMappingURL=default~forms-forms-module~tables-tables-module.js.map