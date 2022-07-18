

export var filtersettings = {
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
  // edit:{
  //   editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
  // },
  // delete:{
  //   deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
  // }
};

export var filerdata = [
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

export var admintable = {
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
      title: 'تاریخ ارسال به مالی',
    },
    timetopay: {
      title: 'پرداخت تا تاریخ',
    }
  },
  attr: {
    class: "table table-responsive"
  },
  noDataMessage: "هیچ اطلاعاتی یافت نشد"
};

export var insuredtable = {
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
    acc_date: {
      title: 'تاریخ ارسال به مالی',
    },
    timetopay: {
      title: 'پرداخت تا تاریخ',
    }
  },
  attr: {
    class: "table table-responsive"
  },
  noDataMessage: "هیچ اطلاعاتی یافت نشد"
};

export var usertable = {
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

export var alertdata = [
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

export var adminregtable = {
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
    us__rate: {
      title: 'VIP',
      type: 'html'
    },
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

export var insuredregtable = {
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

export var activeperson = {
  editable: false,
  selectMode: 'multi',
  pager: {
    display: true,
    perPage: 10
  },
  actions: { 
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

export var dashtable = {
  editable: false,
  pager: {
    display: true,
    perPage: 50
  },
  actions: {
    // columnTitle: "مشاهده جزییات",
    // custom: [
    //   {
    //     name: 'جزییات',
    //     title: ' <a class="d-flex  btn-round gradient-blackberry py-2 width-100 height-25 justify-content-center white" (click)="showitem()" >جزییات</a>'
    //   },
    // ],
    add: false,
    edit: false,
    delete: false
  },
  columns: {
    date: {
      title: 'تاریخ',
    },
    contname: {
      title: 'قرارداد',
    },
    allc: {
      title: 'تعداد خسارت ثبت شده',
    },
    accc: {
      title: 'تعداد خسارت تایید شده',
    },
    duringc: {
      title: 'تعداد خسارت در جریان',
    },
    rejc: {
      title: 'تعداد خسارت رد شده',
    },
    allsum: {
      title: 'کل مبلغ ثبتی',
    },
    accsum: {
      title: 'کل مبلغ پرداختی',
    },
    perc: {
      title: 'میزان پوشش خسارت',
    }


  },
  attr: {
    class: "table table-responsive"
  },
  noDataMessage: "هیچ اطلاعاتی یافت نشد"
};

export var dashtable2 = {
  editable: false,
  pager: {
    display: true,
    perPage: 10
  },
  actions: {
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
    contract_plan_subservice__Sub_service__service__title: {
      title: 'تعهد',
    },
    continv: {
      title: 'تعداد کل خسارت ها ',
    },
    countacc: {
      title: 'تعداد خسارت پرداخت شده',
    },
    countduring: {
      title: 'تعداد خسارت در جریان',
    },
    countrej: {
      title: 'تعداد خسارت رد شده',
    },
    suminv: {
      title: 'مبلغ کل خسارت ها ',
    },
    suminvacc: {
      title: 'مبلغ خسارت پرداخت شده',
    },
    duringinv: {
      title: 'مبلغ خسارت در جریان',
    },
    rejInv: {
      title:'مبلغ خسارت رد شده',
    },
    maxInv: {
      title: 'بیشترین مبلغ ثبت شده',
    },
    minInv: {
      title: 'کمترین مبلغ ثبت شده',
    },
    maxInvacc: {
      title: 'بیشترین مبلغ پرداخت شده',
    },
    minInvacc: {
      title: 'کمترین مبلغ پرداخت شده',
    }


  },
  attr: {
    class: "table table-responsive"
  },
  noDataMessage: "هیچ اطلاعاتی یافت نشد"
};

export var r1data = {
  editable: false,
  hideSubHeader: true, 
  selectMode: 'multi',
  pager: {
    display: true,
    perPage: 10
  },
  actions: { 
    add: false,
    edit: false,
    delete: false
  },
  columns: {
  
    title: {
      title: 'گروه بندی نتایج',
    },
 
    yourField: {
      title: 'Your field title',
      editor: {
        type: 'list',
        config: {
          selectText: 'Select',
          list: [
            { value: '1', title: 'Admin' },
            { value: '2', title: 'Manager' },
          ],
        },
      },
      type: 'number',
    },
  },
  attr: {
    class: "table table-responsive"
  },
  noDataMessage: "هیچ اطلاعاتی یافت نشد"
};

export var r2data = {
  editable: false,
  hideSubHeader: true, 
  selectMode: 'multi',
  pager: {
    display: true,
    perPage: 10
  },
  actions: { 
    add: false,
    edit: false,
    delete: false
  },
  columns: {
  
    title: {
      title: 'آمار',
    },
    selectcon: {
      title: 'انتخاب شرایط',
      
    },
    

  },
  attr: {
    class: "table table-responsive"
  },
  noDataMessage: "هیچ اطلاعاتی یافت نشد"
};