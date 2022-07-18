import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ApiService } from '../../../forms/layouts/basic/api.service';
import { GlobalvarService } from '../../../globalvar.service'
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'jalali-moment';
import { NgbModalOptions, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatTreeFlatDataSource } from '@angular/material';
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { DpDatePickerModule } from 'ng2-jalali-date-picker'


@Component({
  selector: 'app-claimdetail',
  templateUrl: './claimdetail.component.html',
  styleUrls: ['./claimdetail.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClaimdetailComponent implements OnInit {
  @Input() childMessage1: any;
  @Output()
  onClose: EventEmitter<boolean> = new EventEmitter();
  @ViewChild('showdetail', { static: false })
  private showdetail: TemplateRef<any>;
  @ViewChild('answerticket', { static: false })
  private answerticket: TemplateRef<any>;
  @ViewChild('edit1', { static: false })
  private edit1: TemplateRef<any>;
  @ViewChild('edit2', { static: false })
  private edit2: TemplateRef<any>;
  @ViewChild('edit3', { static: false })
  private edit3: TemplateRef<any>;
  @ViewChild('edit4', { static: false })
  private edit4: TemplateRef<any>;

  closeModal() {
    sessionStorage.setItem("closeb", "exit")
    this.onClose.emit(true);
  }
  currentRate = 8;
  currentRating = 6;
  selected = "";
  hovered = 0;
  readonly = false;
  decimalCurrentRate = 4.50;

  // Form integration

  constructor(
    private glbvar: GlobalvarService,
    private cookieService: CookieService,
    private api: ApiService,
    private modalService: NgbModal,
    private http: HttpClient,
    public dateObject: DpDatePickerModule,
    public paydateObject: DpDatePickerModule,
    public senddateObject: DpDatePickerModule
  ) { }
  public tc = "";
  public date = "";
  public date2 = "";
  public created_at = ""
  public inv = "";
  public cov = "";
  public used = "";
  public subsvr = "";
  public help = "";
  public fullname = "";
  public rel = "";
  public fullnameedit = "";
  public reledit = "";
  public natidedit = "";
  public doctor = "";
  public res: any[] = [];
  public images: string[] = [];
  public gimages: { image: string, thumbImage: string, title: string }[] = []
  public gimages1: { path: string }[] = []
  public doctorfullname = "";
  public specialty = "";
  public status = "";
  public statusid = "";
  public accinv = "";
  public des = "";
  public accdate = "";
  public pic = "";
  public docid = "";
  public token_parts = "";
  public contracted = "";
  public medical_id = "";
  public degree = "";
  public mt = "";
  public haveeval: boolean;
  public superadmin: boolean;
  public admin: boolean;
  public insured: boolean;
  public user: boolean;
  public evaluator: boolean;
  public evalname: string;
  public evalrate: number = 3;
  public userid = "";
  public timetogo = "";
  public showcountdown: boolean = false;
  public svr = ""
  public natid = ""
  public subsrevices: any;
  public planname = ""
  public items: any[] = [];
  public conract = "";
  public evaltable: { date: string, name: string, status: string, result: string }[] = []
  public svbghtimeline: { date: string, times: { time: string, pic: string, name: string, position: string, subject: string, f1: { titel: string, value: string }[], f2: { titel: string, value: string }[] }[] }[] = []
  public isdup: boolean = false
  public duptc = "";
  public editable: boolean = false;
  public saveable: boolean = false;
  public regreq: boolean = false;
  public hasticket: boolean = false;
  public cdate = "";
  public planid = "";
  public contractid = "";
  public chdate: boolean = false;
  public chinv: boolean = false;
  public chclaim: boolean = false;
  public dateeditbtn = "ویرایش"
  public inveditbtn = "ویرایش"
  public claimedit = "ویرایش"
  public newinv = ""
  public newinvedit = ""
  public dateforupdate
  changeclaim() {
    var con = this.conract
    var pln = this.planname
    var subsvr = this.selected;
    console.log(con + " " + pln + " " + subsvr)
    var token_parts = this.cookieService.get('T');
    this.api.getcpsid(token_parts, con, pln, subsvr).subscribe(
      response => {
        console.log(response)
        // console.log(response[0].id.toString())
        this.svr = response[0].Sub_service__service__title.toString() + " *"
        this.cps = response[0].id.toString();
        this.subsvr = this.selected + " *"
      },
      err => {
        console.log(err)
      }
    )
  }
  changedate() {
    var output = ""
    var datevizit = ""
    var gdate = this.dateObject.toString()
    if (gdate != "") {
      var m1 = moment(gdate);
      // console.log("date"+m1);
      if (m1.isValid()) {
        m1.locale('en');
        datevizit = m1.format("YYYY-MM-DD");
      } else {
        datevizit = "it is not valid date";
      }
      if (datevizit != "it is not valid date")
        this.dateforupdate = datevizit
      var m = moment(gdate);
      if (m.isValid()) {
        m.locale('fa');
        output = m.format("YYYY/MM/DD");
      } else {
        output = "it is not valid date";
      }
      if (output != "it is not valid date")
        this.date = output + " *";
    }
    if (this.newinv != "") {
      this.invst = Number(this.newinv).toLocaleString() + " ريال" + " *"
      this.inv = this.newinv
    }
  }

  cancelclaim() {
    if (this.chclaim) {
      this.chclaim = false
    }
    else {
      this.chclaim = true
    }

    if (this.chclaim) {
      this.claimedit = "تایید"
    }
    else {
      this.claimedit = "ویرایش"
    }
  }
  canceldate() {
    if (this.chdate) {
      this.chdate = false
    }
    else {
      this.chdate = true
    }

    if (this.chdate) {
      this.dateeditbtn = "تایید"
    }
    else {
      this.dateeditbtn = "ویرایش"
    }
  }
  cancelinv() {
    if (this.chinv) {
      this.chinv = false
    }
    else {
      this.chinv = true
    }
    if (this.chinv) {
      this.inveditbtn = "تایید"
    }
    else {
      this.inveditbtn = "ویرایش"
    }
  }
  public deletedimg: { url: string }[] = []
  deleteimg(url) {
    console.log(url)
    var urls = url.toString().substring(24)
    this.deletedimg.push({ url: urls })
    this.deletedimg = this.deletedimg.slice(0)
    const index: number = this.images.indexOf(url);
    if (index !== -1) {
      this.images.splice(index, 1);
    }
  }
  public invst = ""
  public selectedimg = ""
  public imageObject = []
  public havedoctor: boolean = false
  public nodoctor: boolean = false
  zoomimg() {
    this.popupimmg = this.selectedimg
    this.showpopup = true;
  }
  clickimg(event) {
    this.selectedimg = this.imageObject[event]['image']
  }
  public tecketid = ""
  showticketdetail(id) {
    this.tecketid = id
    this.savabegh(this.showdetail)
  }
  answertickets(id) {
    this.tecketid = id
    this.savabegh(this.answerticket)
  }
  editb1() {
    this.contractf = true
    this.savabegh(this.edit1)
  }
  editb2() {
    this.userf = true
    this.savabegh(this.edit2)
  }
  editb3() {
    this.claimf = true
    this.savabegh(this.edit3)
  }
  editb4() {
    this.doctorf = !this.doctorf
    this.savabegh(this.edit4)
  }
  public created_bynid = ""
  public created_byfname = ""
  public created_bylname = ""
  public created_byposition = ""
  public createrpic = ""
  public firstsubsvr = ""
  public firstnatid = ""
  public firstfullname = ""
  public firstinvst = ""
  public firstdate = ""
  public firstmedical_id = ""
  public firststatus = ""
  public firstevalinv = ""
  public firstaccinv = ""
  public firstresult = ""
  public firstimages = []
  public pos = ""
  ngOnInit() {
    this.haveeval = false;
    this.superadmin = false;
    this.admin = false;
    this.insured = false;
    this.user = false;
    this.evaluator = false;
    this.regreq = false;
    switch (this.glbvar.authcat) {
      case "1":
        {
          this.superadmin = true;
          this.saveable = true;
          break;
        }
      case "3":
        {
          this.user = true;
          break;
        }
      case "2":
        {
          this.insured = true;
          break;
        }
      case "4":
        {
          this.superadmin = true;
          this.saveable = true;
          break;
        }
      case "5":
        {
          this.evaluator = true;
          this.saveable = true;
          break;
        }
      case "6":
        {
          this.superadmin = true;
          this.saveable = true;

          break;
        }
    }
    this.tc = this.childMessage1;
    var token_parts = this.cookieService.get('T');
    /// get person auth id
    this.api.getclaimTC(token_parts, this.tc).subscribe(
      response1 => {
        var output = "";
        var output1 = "";
        var output2 = "";
        var output3 = "";
        if (response1[0]['editable']) {
          this.editable = true
        }
        else {
          this.editable = false
        }
        if (this.superadmin) {
          this.editable = true
        }
        this.created_byposition = response1[0]['creatorposition'].toString()

        switch (this.created_byposition) {
          case "1":
            this.created_byposition = "مدیر سیستم"
            break;
          case "2":
            this.created_byposition = "کارشناس بیمه"
            break;
          case "3":
            this.created_byposition = "بیمه شده"
            break;
          case "4":
            this.created_byposition = "مدیر سیستم"
            break;
          case "5":
            this.created_byposition = "ارزیاب بیمه"
            break;
          case "6":
            this.created_byposition = "کارشناس سگال"
            break;
        }
        this.created_bynid = response1[0]['create_by__person__national_id']
        this.created_byfname = response1[0]['create_by__person__f_name']
        this.created_bylname = response1[0]['create_by__person__l_name']
        this.cdate = response1[0]['create_at']
        this.createrpic = response1[0]['create_by__person__picture']
        this.planname = response1[0]['contract_plan_subservice__plan__title']
        this.planid = response1[0]['contract_plan_subservice__plan__id']
        this.conract = response1[0]['contract_plan_subservice__contract__title']
        this.contractid = response1[0]['contract_plan_subservice__contract__id']
        this.svr = response1[0]['contract_plan_subservice__Sub_service__service__title']
        this.subsvr = response1[0]['contract_plan_subservice__Sub_service__title']
        sessionStorage.setItem("conname", this.conract)
        sessionStorage.setItem("plnname", this.planname)
        this.duptc = response1[0]['duplicatecalim']
        this.evalinv = response1[0]['evalinv']
        console.log(this.duptc)
        this.cps = response1[0]['contract_plan_subservice_id']

        if (this.duptc == null || this.duptc == "") {
          this.isdup = false
        }
        else {
          this.isdup = true
        }
        this.api.showtickettc(token_parts, this.tc).subscribe(
          res1 => {
            if (res1.length != 0) {
              this.hasticket = true;
            }
            else {
              this.hasticket = false;
            }

            this.api.getplandetail(token_parts, this.planid).subscribe(
              response12 => {
                this.subsrevices = response12
                this.fillitems(this.subsrevices)
                console.log(response1)

                if (response1[0]['acc_date'] != null) {
                  var gdate1 = response1[0]['acc_date'].substring(0, 10);
                  var gtime1 = response1[0]['acc_date'].substring(11, 19);
                  var f = gdate1 + " " + gtime1;
                  this.api.chdayssec(this.token_parts, f).subscribe(
                    res => {
                      console.log(res)
                      this.timetogo = res
                      this.showcountdown = true;
                    },
                    err => {

                    })
                }
                else {
                  this.showcountdown = false;
                }
                this.inv = response1[0]['invoice'];
                this.invst = this.inv.toLocaleString() + " ريال"
                this.userid = response1[0]['user__national_id']
                var gdate = response1[0]['date'].toString().substring(0, 10);
                this.dateforupdate = gdate
                var m = moment(gdate);
                if (m.isValid()) {
                  m.locale('fa');
                  output = m.format("YYYY/MM/DD");
                } else {
                  output = "it is not valid date";
                }
                this.date = output;
                // alert(response1[0]['create_at'] )
                if (response1[0]['create_at'] != null) {
                  var gdate1 = response1[0]['create_at'].toString().substring(0, 10);
                  var gtime1 = response1[0]['create_at'].toString().substring(11, 19);
                  var m = moment(gdate1);
                  if (m.isValid()) {
                    m.locale('fa');
                    output1 = m.format("YYYY/MM/DD");
                  } else {
                    output1 = "it is not valid date";
                  }
                  this.created_at = output1 + " " + gtime1;
                }
                else {
                  this.created_at = "";
                }
                if (response1[0]['doctor_id'] != null && response1[0]['doctor_id'] != "1") {
                  this.havedoctor = true
                  this.doctor = response1[0]['doctor_id'];
                }
                else {
                  this.nodoctor = true;
                }
                this.accinv = response1[0]['accInvoice'];

                this.natid = response1[0]['user__national_id']
                this.fullname = response1[0]['user__f_name'] + " " + response1[0]['user__l_name'];

                if (response1[0]['acc_date'] != null) {
                  var gdate2 = response1[0]['acc_date'].toString().substring(0, 10);
                  var gtime2 = response1[0]['acc_date'].toString().substring(11, 19);
                  var m = moment(gdate2);
                  if (m.isValid()) {
                    m.locale('fa');
                    output2 = m.format("YYYY/MM/DD");
                  } else {
                    output2 = "it is not valid date";
                  }
                  this.accdate = output2 + " " + gtime2
                }
                else {
                  this.accdate = "";
                }
                this.des = response1[0]['status_description'];
                this.status = response1[0]['status'];
                this.statuschange = this.status;
                this.statusid = this.status
                var v = Number(this.status)
                if (v == 4 || v == 5 || v == 7) {
                  this.printgetdoc = true;
                }
                else {
                  this.printgetdoc = false;
                }
                if (v == 7) {
                  this.payflag = true;
                }
                else {
                  this.payflag = false;
                }
                if (v == 5) {
                  this.sendforpay = true;
                }
                else {
                  this.sendforpay = false;
                }
                if (v == 4) {
                  this.evalflag = true;
                }
                else {
                  this.evalflag = false;
                }
                switch (this.status) {
                  case '1': {
                    this.status = 'در انتظار بررسی'
                    break;
                  }
                  case '2': {
                    this.status = 'انتظار دریافت اصل مدارک'
                    break;
                  }
                  case '3': {
                    this.status = 'نقص در مدارک'
                    this.saveable = true;
                    this.editable = true;

                    break;
                  }
                  case '4': {
                    this.status = 'ارزیابی و کارشناسی مبلغ'

                    break;
                  }
                  case '5': {
                    this.status = 'ارسال به مالی'
                    if (this.user) {
                      this.regreq = true
                    }
                    break;
                  }
                  case '6': {
                    this.status = 'عودت داده شد'
                    if (this.user) {
                      this.regreq = true
                    }
                    break;
                  }
                  case '7': {
                    this.status = 'پرداخت شده'
                    break;
                  }
                }
                switch (response1[0]['user__reltomain']) {
                  case '1': {
                    this.rel = 'پدر'
                    break;
                  }
                  case '2': {
                    this.rel = 'مادر'
                    break;
                  }
                  case '3': {
                    this.rel = 'همسر'
                    break;
                  }
                  case '4': {
                    this.rel = 'دختر'
                    break;
                  }
                  case '5': {
                    this.rel = 'برادر'
                    break;
                  }
                  case '6': {
                    this.rel = 'خواهر'
                    break;
                  }
                  case '7': {
                    this.rel = 'پدر بزرگ'
                    break;
                  }
                  case '8': {
                    this.rel = 'مادر بزرگ'
                    break;
                  }
                  case '9': {
                    this.rel = 'نوه'
                    break;
                  }
                  case '10': {
                    this.rel = 'پسر'
                    break;
                  }
                  case '0': {
                    this.rel = 'اصلی'
                    break;
                  }
                  case null: {
                    this.rel = 'اصلی'
                    break;
                  }
                  default: {
                    this.rel = 'اصلی'
                    break;
                  }

                }

                this.api.getdoc(token_parts, Number(this.doctor)).subscribe(
                  response => {
                    // console.log(response)

                    this.doctorfullname = response[0]['name'] + " " + response[0]['family'];
                    this.specialty = response[0]['specialty']
                    this.pic = "http://bimeh.plus/media/" + response[0]['picture']
                    this.docid = response[0]['id']
                    if (response[0]['contracted'] == "true") {
                      this.contracted = "بله"
                    }
                    else {
                      this.contracted = "خیر"
                    }

                    this.medical_id = response[0]['medical_id']
                    this.mt = response[0]['medicalـtariff']
                    this.degree = response[0]['degree']
                    this.api.getevalofclaim(token_parts, this.tc).subscribe(
                      response => {
                        console.log(response)

                        if (response.length != 0) {
                          this.evalname = response[response.length - 1]['eval__f_name'] + " " + response[response.length - 1]['eval__l_name']
                          this.result = response[response.length - 1]['result']
                          this.evalrate = 5
                          if (this.evalname != "") {
                            this.haveeval = true;
                          }
                          var evalpos = response[0]['eval__position'].toString()
                          switch (evalpos) {
                            case "1":
                              evalpos = "مدیر سیستم"
                              break;
                            case "2":
                              evalpos = "کارشناس بیمه"
                              break;
                            case "3":
                              evalpos = "بیمه شده"
                              break;
                            case "4":
                              evalpos = "مدیر سیستم"
                              break;
                            case "5":
                              evalpos = "ارزیاب بیمه"
                              break;
                            case "6":
                              evalpos = "کارشناس سگال"
                              break;
                          }
                        }
                        this.svbghtimeline = []
                        for (let i = 0; i < response.length; i++) {
                          var sts
                          switch (response[i]['status']) {
                            case '1': {
                              sts = 'در انتظار بررسی'
                              break;
                            }
                            case '2': {
                              sts = 'انتظار دریافت اصل مدارک'
                              break;
                            }
                            case '3': {
                              sts = 'نقص در مدارک'
                              break;
                            }
                            case '4': {
                              sts = 'ارزیابی و کارشناسی مبلغ'
                              break;
                            }
                            case '5': {
                              sts = 'ارسال به مالی'

                              break;
                            }
                            case '6': {
                              sts = 'عودت داده شد'

                              break;
                            }
                            case '7': {
                              sts = 'پرداخت شده'
                              break;
                            }
                          }
                          var gdate2 = response[i]['date'].toString().substring(0, 10);
                          var gtime2 = response[i]['date'].toString().substring(11, 19);
                          var m = moment(gdate2);
                          if (m.isValid()) {
                            m.locale('fa');
                            output2 = m.format("YYYY/MM/DD");
                          } else {
                            output2 = "it is not valid date";
                          }
                          var date = output2 + " " + gtime2
                          this.evaltable.push({ date: date, name: response[i]['eval__f_name'] + " " + response[i]['eval__l_name'], status: sts, result: response[i]['result'] })
                          var idx = -1
                          console.log(this.svbghtimeline)
                          idx = this.svbghtimeline.findIndex(item => item.date == output2)
                          if (idx == -1) {
                            var time: { time: string, pic: string, name: string, position: string, subject: string, f1: { titel: string, value: string }[], f2: { titel: string, value: string }[] }[] = []
                            var f01 = [], f02 = []
                            f01.push({ title: "وضعیت جدید", value: sts })
                            f02.push({ title: "پیام کاربر", value: response[i]['result'].toString() })
                            time.push({
                              pic: "http://bimeh.plus/media/" + response[i]['eval__picture'],
                              time: gtime2,
                              position: evalpos,
                              name: response[i]['eval__f_name'] + " " + response[i]['eval__l_name'],
                              subject: 'تغییر وضعیت',
                              f1: f01,
                              f2: f02
                            })
                            this.svbghtimeline.push({ date: output2, times: time })
                            this.svbghtimeline = this.svbghtimeline.slice(0)
                          }
                          else {
                            f01 = [], f02 = []
                            f01.push({ title: "وضعیت جدید", value: sts })
                            f02.push({ title: "پیام کاربر", value: response[i]['result'].toString() })
                            this.svbghtimeline[idx].times.push({ pic: "http://bimeh.plus/media/" + response[i]['eval__picture'], time: gtime2, position: evalpos, name: response[i]['eval__f_name'] + " " + response[i]['eval__l_name'], subject: 'تغییر وضعیت', f1: f01, f2: f02 })
                          }
                        }
                        ////////////////////////////////////////////////////////////////////
                        this.firstsubsvr = this.subsvr
                        this.firstnatid = this.natid
                        this.firstfullname = this.fullname
                        this.firstinvst = this.invst
                        this.firstdate = this.date
                        this.firstmedical_id = this.medical_id
                        this.firststatus = this.status
                        this.firstevalinv = this.evalinv
                        this.firstaccinv = this.accinv
                        this.firstresult = this.result
                        this.firstimages = this.images
                        ////////////////////////////////////////////////////////////////////
                        this.api.getclaimlogTC(token_parts, this.tc).subscribe(
                          res => {
                            console.log(res)
                            for (let i = 0; i < res.length; i++) {
                              var gdate2 = res[i]['logdate'].toString().substring(0, 10);
                              var gtime2 = res[i]['logdate'].toString().substring(11, 19);
                              var m = moment(gdate2);
                              if (m.isValid()) {
                                m.locale('fa');
                                output2 = m.format("YYYY/MM/DD");
                              } else {
                                output2 = "it is not valid date";
                              }
                              if (res[i]['position'] != null) {
                                var evalpos = res[i]['position'].toString()
                                switch (evalpos) {
                                  case "1":
                                    evalpos = "مدیر سیستم"
                                    break;
                                  case "2":
                                    evalpos = "کارشناس بیمه"
                                    break;
                                  case "3":
                                    evalpos = "بیمه شده"
                                    break;
                                  case "4":
                                    evalpos = "مدیر سیستم"
                                    break;
                                  case "5":
                                    evalpos = "ارزیاب بیمه"
                                    break;
                                  case "6":
                                    evalpos = "کارشناس سگال"
                                    break;
                                }
                              }
                              idx = this.svbghtimeline.findIndex(item => item.date == output2)
                              if (idx == -1) {
                                var tt1 = []
                                tt1.push({ pic: "http://bimeh.plus/media/" + res[i]['user__picture'], position: evalpos, time: gtime2, name: res[i]['user__f_name'] + " " + res[i]['user__l_name'], subject: res[i]['logsubject'], f1: res[i]['logfield1'], f2: res[i]['logfield2'] })
                                this.svbghtimeline.push({ date: output2, times: tt1 })
                              }
                              else {
                                var tt1 = []
                                this.svbghtimeline[idx].times.push({ pic: "http://bimeh.plus/media/" + res[i]['user__picture'], position: evalpos, time: gtime2, name: res[i]['user__f_name'] + " " + res[i]['user__l_name'], subject: res[i]['logsubject'], f1: res[i]['logfield1'], f2: res[i]['logfield2'] })
                                
                              }
                            }
                            for(let i=0;i<this.svbghtimeline.length;i++){
                              this.svbghtimeline[i].times=this.sorttime(this.svbghtimeline[i].times)
                            }
                            this.svbghtimeline = this.sort(this.svbghtimeline)   
                            console.log(this.svbghtimeline)
                            var crdate = this.created_at.substring(0, 10)
                            var crtime = this.created_at.substring(11, 19);
                            var tt = []
                            f01 = []
                            f02 = []
                            tt.push({ pic: "http://bimeh.plus/media/" + this.createrpic, position: this.created_byposition, time: crtime, name: this.created_byfname + " " + this.created_bylname, subject: 'ثبت خسارت', f1: f01, f2: f02 })
                            this.svbghtimeline.push({ date: "ثبت شده در تاریخ" + crdate, times: tt })
                            console.log(this.svbghtimeline)
                          },
                          err => {
                            console.log(err)
                          }
                        )
                      },
                      err1 => {
                        console.log(err1)
                      });

                  },
                  err1 => {
                    console.log(err1)
                    this.haveeval = false;
                  });
              },
              err => {
                //this.router.navigate(['login']);
                console.error('refresh error', err);
              }
            )

          },
          err => {
            //this.router.navigate(['login']);
            console.error('refresh error', err);
          }
        )
      },
      err => {
        //this.router.navigate(['login']);
        console.error('refresh error', err);
      }
    )

    this.api.getclaimdocTC(token_parts, this.tc).subscribe(
      response1 => {
        this.res = response1
        for (let i = 0; i < this.res.length; i++) {
          this.images[i] = "http://bimeh.plus/media/" + this.res[i]['image'].toString();
          this.imageObject.push({
            image: this.images[i],
            thumbImage: this.images[i],
            title: (i + 1).toString() + "/" + this.res.length.toString()
          })
        }
        this.selectedimg = this.imageObject[0]['image']
      },
      err => {
        //this.router.navigate(['login']);
        console.error('refresh error', err);
      }
    )

  }
  sort(list: any[]): any[] {
    let sorted = list.sort((a, b) => b.date.localeCompare(a.date))
    return sorted
  }
  sorttime(list: any[]): any[] {
    let sorted = list.sort((a, b) => b.time.localeCompare(a.time))
    return sorted
  }
  public showprint: boolean = false;
  public popupimmg = "";
  public showpopup: boolean = false;
  cilckimage(image) {
    this.popupimmg = image
    this.showpopup = true;
  }
  modalClosed(isClosed) {
    this.showpopup = false;
  }
  image: File[] = [];
  progress: number;
  public falg: boolean = false;
  urls = [];

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        this.image.push(event.target.files[i])

        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
          this.imageObject.push({
            image: event.target.result,
            thumbImage: event.target.result,
            title: "جدید"
          })
        }
        console.log(this.urls)
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  public printgetdoc: boolean = false;
  public resultchange = ""
  public statuschange = ""
  public accinvchange = ""
  public result;
  public doctorid = ""
  public evalinv = ""
  public changeitems: boolean = false;
  save() {
    var f1 = []
    var f2 = []
    var subj = ""
    if (this.firstsubsvr != this.subsvr) {
      subj = "ویرایش اطلاعات"
      f1.push({ title: "تغییر خدمت", value: "از " + this.firstsubsvr + " به " + this.subsvr })
      this.changeitems = true
    }
    if (this.firstnatid != this.natid) {
      subj = "ویرایش اطلاعات"
      f1.push({ title: "تغییر بیمه شده", value: "از " + this.firstfullname + " به " + this.fullname })
      this.changeitems = true
    }
    if (this.firstinvst != this.invst) {
      subj = "ویرایش اطلاعات"
      f1.push({ title: "تغییر هزینه خسارت", value: "از " + this.firstinvst + " به " + this.invst })
      this.changeitems = true
    }
    if (this.firstdate != this.date) {
      subj = "ویرایش اطلاعات"
      f1.push({ title: "تغییر تاریخ خسارت", value: "از " + this.firstdate + " به " + this.date })
      this.changeitems = true
    }
    if (this.firstmedical_id != this.medical_id) {
      subj = "ویرایش اطلاعات"
      f1.push({ title: "تغییر پزشک", value: "از " + this.firstmedical_id + " به " + this.medical_id })
      this.changeitems = true
    }
    if (this.firststatus != this.status && this.firstevalinv == this.evalinv && this.firstresult == this.result) {
      subj = "تغییر وضعیت"
      f1.push({ title: "وضعیت جدید", value: this.status })
      this.changeitems = true
    }
    if (this.firststatus != this.status && this.firstevalinv == this.evalinv && this.firstresult != this.result) {
      subj = "تغییر وضعیت"
      f1.push({ title: "وضعیت جدید", value: this.status })
      f2.push({ title: "پیام کاربر", value: this.accinv })
      this.changeitems = true
    }
    if (this.firststatus != this.status && this.firstevalinv != this.evalinv && this.firstresult == this.result) {
      subj = "تغییر وضعیت"
      f1.push({ title: "وضعیت جدید", value: this.status })
      f2.push({ title: "مبلغ ارزیابی", value: this.evalinv })
      this.changeitems = true
    }
    if (this.firststatus != this.status && this.firstevalinv != this.evalinv && this.firstresult != this.result) {
      subj = "تغییر وضعیت"
      f1.push({ title: "وضعیت جدید", value: this.status })
      f2.push({ title: "مبلغ ارزیابی", value: this.evalinv })
      f2.push({ title: "پیام کاربر", value: this.accinv })
      this.changeitems = true
    }
    if (this.firststatus == this.status && this.firstevalinv == this.evalinv && this.firstresult != this.result) {
      subj = "تغییر وضعیت"
      f1.push({ title: "پیام کاربر", value: this.accinv })
      this.changeitems = true
    }
    if (this.firststatus == this.status && this.firstevalinv != this.evalinv && this.firstresult == this.result) {
      subj = "تغییر وضعیت"
      f1.push({ title: "مبلغ ارزیابی", value: this.evalinv })
      this.changeitems = true
    }
    if (this.firststatus == this.status && this.firstevalinv != this.evalinv && this.firstresult != this.result) {
      subj = "تغییر وضعیت"
      f1.push({ title: "مبلغ ارزیابی", value: this.evalinv })
      f2.push({ title: "پیام کاربر", value: this.accinv })
      this.changeitems = true
    }
    if (this.firstaccinv != this.accinv) {
      subj = "تغییر وضعیت"
      f1.push({ title: "مبلغ مورد پذیرش", value: this.accinv })
      this.changeitems = true
    }
    if (this.firstimages != this.images) {
      subj = "ویرایش اطلاعات"
      f1.push({ title: "تغییر در تعداد مستندات", value: this.images.length })
      this.changeitems = true
    }
    if (this.changeitems) {
      var token_parts = this.cookieService.get('T');
      this.api.getdatetime(token_parts).subscribe(
        res => {
          var eval1 = sessionStorage.getItem("evlnid")
          var claim = this.tc;
          var result1 = "";
          if (this.result != null && this.result != "") {
            result1 = this.result;
          }
          var date = res.toString();
          var status1 = this.statuschange;
          var ai = null
          var ad = null;
          var pma = "";
          var editab: boolean = false;
          if (status1 == "5" || status1 == "7") {
            // alert(this.accinv)
            if (this.accinv == "") {
              alert("لطفا مقدار هزینه پرداختی را تعیین کنید")
            }
            if (this.accinv != "") {
              ai = Number(this.accinv.toString());
            }
            ad = res.toString();
            var gdate2 = ad.substring(0, 10);
            var m = moment(gdate2);
            if (m.isValid()) {
              m.locale('fa');
              pma = m.format("MM");
            } else {
              pma = "";
            }
            var gdate1 = ad.substring(0, 10);
            var gtime1 = ad.substring(11, 19);
            var f = gdate1 + " " + gtime1;
            this.api.chdays(token_parts, f).subscribe(
              res => {
                console.log(res)
                var ttp = res
                this.api.createclaimlog(token_parts, claim, eval1, date, this.glbvar.authcat, subj, f1, f2).subscribe(
                  response1 => {
                    var res = response1
                    if (this.inv.toString().substring(this.inv.toString().length - 2) == " *") {
                      var iinn = this.inv.toString().substring(0, this.inv.toString().length - 2)
                    }
                    else {
                      var iinn = this.inv.toString()
                    }
                    if (this.natid.toString().substring(this.natid.toString().length - 2) == " *") {
                      this.natid = this.natid.toString().substring(0, this.natid.toString().length - 2)
                    }

                    this.api.updateclaims(token_parts, this.evalinv, claim, status1, ai, ad, pma, editab, this.natid, ttp, this.cps, eval1, iinn, this.dateforupdate, this.doctor).subscribe(
                      response2 => {
                        var r = response2
                        console.log(response2)
                        for (let i = 0; i < this.image.length; i++) {
                          console.log(this.image[i].name)
                          var myHeaders = new Headers();
                          myHeaders.append("Authorization", "Token " + token_parts);
                          this.progress = 1;
                          var formdata = new FormData();
                          formdata.append("claimTC", claim);
                          formdata.append("image", this.image[i], this.image[i].name);
                          this.http.post("http://api.bimeh.plus/darman/uploadveiw/", formdata, {
                            headers: new HttpHeaders({
                              'Authorization': 'Token  ' + token_parts
                            }),
                            responseType: 'text',
                            reportProgress: true,
                            observe: "events"
                          })
                            .pipe(
                              map((event: any) => {
                                console.log(event.type)
                                if (event.type == HttpEventType.UploadProgress) {
                                  this.progress = Math.round((100 / event.total) * event.loaded);
                                } else if (event.type == HttpEventType.Response) {
                                  var res = event.body;
                                  this.progress = null;
                                }
                              }),
                              catchError((err: any) => {
                                this.progress = null;
                                // alert(err.message);
                                return throwError(err.message);
                              })
                            )
                            .subscribe(
                              response => {
                                this.falg = true
                              }
                            );
                        }
                        let json = JSON.stringify(this.deletedimg);
                        console.log(json)
                        this.api.deleteimgurl(token_parts, json).subscribe(
                          res => {
                            console.log(res)
                          },
                          err => {
                            console.log(err)
                          }
                        )
                        this.api.getdevice(token_parts, this.userid).subscribe(
                          res => {
                            for (let i = 0; i < res.length; i++) {
                              var sts = "";
                              switch (status1) {
                                case '1': {
                                  sts = 'در انتظار بررسی'
                                  break;
                                }
                                case '2': {
                                  sts = 'انتظار دریافت اصل مدارک'
                                  break;
                                }
                                case '3': {
                                  sts = 'نقص در مدارک'
                                  break;
                                }
                                case '4': {
                                  sts = 'ارزیابی و کارشناسی مبلغ'
                                  break;
                                }
                                case '5': {
                                  sts = 'ارسال به مالی'
                                  break;
                                }
                                case '6': {
                                  sts = 'عودت داده شد'
                                  break;
                                }
                                case '7': {
                                  sts = 'پرداخت شده'
                                  break;
                                }
                              }
                              var tk = res[i]['device']

                              var ti = "تغییر در خسارت با کد پیگیری " + this.userid
                              var bo = "وضعیت خسارت" + sts + "\n" + "توضیحات \n" + result1
                              this.sendnotif(tk, ti, bo)

                            }

                          },
                          err => {
                            console.error('refresh error', err);
                          }
                        )
                        sessionStorage.setItem("closeb", "save")
                        this.onClose.emit(true);
                      }, err => {

                        console.error('refresh error', err);
                      }
                    )
                  },
                  err => {
                    console.error('refresh error', err);
                  }
                )
              },
              err => {
                //this.router.navigate(['login']);
                console.error('refresh error', err);
              }
            )
          }
          else {
            if (status1 == "3") {
              editab = true;
              if (this.user) {
                status1 = "1"
              }
            }
            else {
              editab = false;
            }
            // alert(this.natid)
            console.log(f1)
            console.log(f2)
            this.api.createclaimlog(token_parts, claim, eval1, date, this.glbvar.authcat, subj, f1, f2).subscribe(
              response1 => {
                var res = response1
                console.log(res)
                if (this.inv.toString().substring(this.inv.toString().length - 2) == " *") {
                  var iinn = this.inv.toString().substring(0, this.inv.toString().length - 2)
                }
                else {
                  var iinn = this.inv.toString()
                }
                if (this.natid.toString().substring(this.natid.toString().length - 2) == " *") {
                  this.natid = this.natid.toString().substring(0, this.natid.toString().length - 2)
                }

                this.api.updateclaims(token_parts, this.evalinv, claim, status1, ai, ad, pma, editab, this.natid, null, this.cps, eval1, iinn, this.dateforupdate, this.doctor).subscribe(
                  response2 => {
                    var r = response2
                    console.log(response2)
                    for (let i = 0; i < this.image.length; i++) {
                      console.log(this.image[i].name)
                      var myHeaders = new Headers();
                      myHeaders.append("Authorization", "Token " + token_parts);
                      this.progress = 1;
                      var formdata = new FormData();
                      formdata.append("claimTC", claim);
                      formdata.append("image", this.image[i], this.image[i].name);
                      this.http.post("http://api.bimeh.plus/darman/uploadveiw/", formdata, {
                        headers: new HttpHeaders({
                          'Authorization': 'Token  ' + token_parts
                        }),
                        responseType: 'text',
                        reportProgress: true,
                        observe: "events"
                      })
                        .pipe(
                          map((event: any) => {
                            console.log(event.type)
                            if (event.type == HttpEventType.UploadProgress) {
                              this.progress = Math.round((100 / event.total) * event.loaded);
                            } else if (event.type == HttpEventType.Response) {
                              var res = event.body;
                              this.progress = null;
                            }
                          }),
                          catchError((err: any) => {
                            this.progress = null;
                            // alert(err.message);
                            return throwError(err.message);
                          })
                        )
                        .subscribe(
                          response => {
                            this.falg = true
                          }
                        );
                    }
                    // #2 Converting the object to JSON...
                    let json = JSON.stringify(this.deletedimg);
                    console.log(json)
                    this.api.deleteimgurl(token_parts, json).subscribe(
                      res => {
                        console.log(res)
                      },
                      err => {
                        console.log(err)
                      }
                    )
                    this.api.getdevice(token_parts, this.userid).subscribe(
                      res => {
                        for (let i = 0; i < res.length; i++) {
                          var sts = "";
                          switch (status1) {
                            case '1': {
                              sts = 'در انتظار بررسی'
                              break;
                            }
                            case '2': {
                              sts = 'انتظار دریافت اصل مدارک'
                              break;
                            }
                            case '3': {
                              sts = 'نقص در مدارک'
                              break;
                            }
                            case '4': {
                              sts = 'ارزیابی و کارشناسی مبلغ'
                              break;
                            }
                            case '5': {
                              sts = 'ارسال به مالی'
                              break;
                            }
                            case '6': {
                              sts = 'عودت داده شد'
                              break;
                            }
                            case '7': {
                              sts = 'پرداخت شده'
                              break;
                            }
                          }
                          var tk = res[i]['device']

                          var ti = "تغییر در خسارت با کد پیگیری " + this.userid
                          var bo = "وضعیت خسارت" + sts + "\n" + "توضیحات \n" + result1
                          this.sendnotif(tk, ti, bo)

                        }

                      },
                      err => {
                        console.error('refresh error', err);
                      }
                    )
                    sessionStorage.setItem("closeb", "save")
                    this.onClose.emit(true);
                  }, err => {

                    console.error('refresh error', err);
                  }
                )
              },
              err => {

                console.error('refresh error', err);
              }
            )
          }
        },
        err => {
          //this.router.navigate(['login']);
          console.error('refresh error', err);
        }
      )
    }
    else {
      sessionStorage.setItem("closeb", "save")
      this.onClose.emit(true);
    }
  }
  public payflag: boolean = false
  public sendforpay: boolean = false
  public evalflag: boolean = false
  changestatus(v: any) {
    this.statuschange = v
    if (v == 4 || v == 5 || v == 7) {
      this.printgetdoc = true;
    }
    else {
      this.printgetdoc = false;
    }
    if (v == 7) {
      this.payflag = true;
      if (this.accinv == null) {
        this.accinv = this.evalinv
      }

    }
    else {
      this.payflag = false;
    }
    if (v == 5) {
      this.sendforpay = true;
      if (this.accinv == null) {
        this.accinv = this.evalinv
      }
    }
    else {
      this.sendforpay = false;
    }
    if (v == 4) {
      this.evalflag = true;
    }
    else {
      this.evalflag = false;
    }
  }
  closeResult: string;
  public etrezsbj = "";
  public etrezcomment = "";
  public newnid = "";
  public showerr: boolean = false;
  public errmsg = ""
  public doctorf: boolean = false
  public claimf: boolean = true
  public userf: boolean = true
  public userfedit: boolean = false
  public contractf: boolean = true
  public evalf: boolean = true
  doctorview() {
    this.doctorf = !this.doctorf
  }
  claimview() {
    this.claimf = !this.claimf
  }
  userview() {
    this.userf = !this.userf
  }
  contractview() {
    this.contractf = !this.contractf
  }
  evlaview() {
    this.evalf = !this.evalf
  }

  changeinsured() {
    if (this.newnid != "") {
      var token_parts = this.cookieService.get('T');
      console.log(this.newnid + " " + this.planid + " " + this.contractid)
      this.api.checknidincon(token_parts, this.newnid, this.contractid, this.planid).subscribe(
        res => {
          console.log(res)
          if (res.length != 0) {
            this.fullnameedit = res[0]['f_name'] + " " + res[0]['l_name']
            this.natidedit = res[0]['national_id']
            switch (res[0]['reltomain']) {
              case '1': {
                this.reledit = 'پدر'
                break;
              }
              case '2': {
                this.reledit = 'مادر'
                break;
              }
              case '3': {
                this.reledit = 'همسر'
                break;
              }
              case '4': {
                this.reledit = 'دختر'
                break;
              }
              case '5': {
                this.reledit = 'برادر'
                break;
              }
              case '6': {
                this.reledit = 'خواهر'
                break;
              }
              case '7': {
                this.reledit = 'پدر بزرگ'
                break;
              }
              case '8': {
                this.reledit = 'مادر بزرگ'
                break;
              }
              case '9': {
                this.reledit = 'نوه'
                break;
              }
              case '10': {
                this.reledit = 'پسر'
                break;
              }
              case '0': {
                this.reledit = 'اصلی'
                break;
              }
              case null: {
                this.reledit = 'اصلی'
                break;
              }
              default: {
                this.reledit = 'اصلی'
                break;
              }

            }
            this.userfedit = true
            this.showerr = false;
          }
          else {
            this.userfedit = false
            this.showerr = true;
            this.errmsg = "شخصی با کدملی وارد شده در این قرارداد و طرح، ثبت نام نشده است"
          }

        },
        err => {
          this.showerr = true;
          this.errmsg = "شخصی با کدملی وارد شده در این قرارداد و طرح، ثبت نام نشده است"
        }
      )
    }

  }
  public tickets: {
    id: string,
    tc: string,
    Comment: string,
    subject: string,
    answer: string,
    regdate: string,
    ansdate: string,
    regperson: string,
    regpersonname: string,
    ansperson: string,
    anspersonname: string,
    turnto: string
  }[] = []
  public ticketsdetail: {
    id: string,
    tc: string,
    Comment: string,
    subject: string,
    answer: string,
    regdate: string,
    ansdate: string,
    regperson: string,
    regpersonname: string,
    ansperson: string,
    anspersonname: string,
    turnto: string
  }[] = []
  public noanswer: boolean = false
  public etrezanswer = ""
  public plhd = ""
  public plhinv = ""
  public doctors = []
  public selecteddr
  public selecteddrf: boolean = false;
  getdoctor() {
    for (let i = 0; this.doctors.length; i++) {
      if (this.selecteddr == this.doctors[i]['medical_id']) {
        this.doctorfullname = this.doctors[i]['name'].toString() + " " + this.doctors[i]['family'].toString();
        this.specialty = this.doctors[i]['specialty']
        if (this.doctors[i]['picture'] == null || this.doctors[i]['picture'] == "")
          this.pic = "http://bimeh.plus/media/images/drs/images.png"
        else
          this.pic = this.doctors[i]['picture']

        this.docid = this.doctors[i]['id']
        if (this.doctors[i]['contracted'] == "true") this.contracted = "بله"
        else this.contracted = "خیر"

        this.medical_id = this.doctors[i]['medical_id']
        this.mt = this.doctors[i]['medicalـtariff']
        this.degree = this.doctors[i]['degree']
        this.selecteddrf = true;
        break;
      }
    }
  }
  savabegh(content) {
    var obj = content['_def']['references']
    let ngbModalOptions: NgbModalOptions = {
      size: "lg",
      backdrop: 'static',
      keyboard: false,
    };
    var page = Object.keys(obj)

    if (page[0] == "regreqpop") {

    }
    if (page[0] == "hastic") {
      var token_parts = this.cookieService.get('T');
      this.tickets = []
      this.api.showticketTC(token_parts, this.tc).subscribe(
        res => {
          for (let i = 0; i < res.length; i++) {
            var ad = res[i]['regdate']
            var gdate2 = ad.substring(0, 10);
            var m1 = moment(gdate2);
            var sdate = ""
            if (m1.isValid()) {
              m1.locale('fa');
              sdate = m1.format("YYYY/MM/DD");
            } else {
              sdate = "it is not valid date";
            }
            res[i]['regdate'] = sdate
            if (res[i]['ansdate'] != null) {
              var m2 = moment(res[i]['ansdate'].toString().substring(0, 10));
              var sdate = ""
              if (m1.isValid()) {
                m2.locale('fa');
                sdate = m2.format("YYYY/MM/DD");
              } else {
                sdate = "it is not valid date";
              }
              res[i]['ansdate'] = sdate
              this.noanswer = false;
            }
            else {
              this.noanswer = true;
            }
          }
          this.tickets = res
          this.tickets = this.tickets.slice(0)
        },
        err => { }
      )
    }
    if (page[0] == "answerticket") {
      var token_parts = this.cookieService.get('T');
      this.ticketsdetail = []
      this.api.showticket(token_parts, this.tecketid).subscribe(
        res => {
          for (let i = 0; i < res.length; i++) {
            var m1 = moment(res[i]['regdate']);
            var sdate = ""
            if (m1.isValid()) {
              m1.locale('fa');
              sdate = m1.format("YYYY/MM/DD");
            } else {
              sdate = "it is not valid date";
            }
            res[i]['regdate'] = sdate
            if (res[i]['ansdate'] != null) {
              var m2 = moment(res[i]['ansdate']);
              var sdate = ""
              if (m1.isValid()) {
                m2.locale('fa');
                sdate = m2.format("YYYY/MM/DD");
              } else {
                sdate = "it is not valid date";
              }
              res[i]['ansdate'] = sdate
              this.noanswer = false;
            }
            else {
              this.noanswer = true;
            }
          }
          this.ticketsdetail = res
          this.ticketsdetail = this.ticketsdetail.slice(0)
        },
        err => { }
      )
    }
    if (page[0] == "showdetail") {
      var token_parts = this.cookieService.get('T');
      this.ticketsdetail = []
      this.api.showticket(token_parts, this.tecketid).subscribe(
        res => {
          for (let i = 0; i < res.length; i++) {
            var m1 = moment(res[i]['regdate']);
            var sdate = ""
            if (m1.isValid()) {
              m1.locale('fa');
              sdate = m1.format("YYYY/MM/DD");
            } else {
              sdate = "it is not valid date";
            }
            res[i]['regdate'] = sdate
            if (res[i]['ansdate'] != null) {
              var m2 = moment(res[i]['ansdate']);
              var sdate = ""
              if (m1.isValid()) {
                m2.locale('fa');
                sdate = m2.format("YYYY/MM/DD");
              } else {
                sdate = "it is not valid date";
              }
              res[i]['ansdate'] = sdate
              this.noanswer = false;
            }
            else {
              this.noanswer = true;
            }
          }
          this.ticketsdetail = res
          this.ticketsdetail = this.ticketsdetail.slice(0)
        },
        err => { }
      )

    }
    if (page[0] == "edit1") {
      this.contractf = true
    }
    if (page[0] == "edit2") {
      this.newnid = ""
      this.userf = true
    }
    if (page[0] == "edit3") {
      this.claimf = true
      this.plhinv = this.invst
      this.plhd = this.date

    }
    if (page[0] == "edit4") {
      this.doctorf = !this.doctorf
      this.doctors = []
      var token_parts = this.cookieService.get('T');
      this.api.getdoctors(token_parts).subscribe(
        res => {
          console.log(res)
          var d1 = JSON.stringify(res)
          var drs = JSON.parse(d1)
          for (let i = 0; i < drs.length; i++) {
            this.doctors.push(drs[i])
            this.doctors = this.doctors.slice(0);
            // console.log(this.doctors)
            if (this.doctors[i]['picture'] == null || this.doctors[i]['picture'] == "")
              this.doctors[i]['picture'] = "http://bimeh.plus/media/images/drs/images.png"
            else
              this.doctors[i]['picture'] = "http://bimeh.plus/media/" + this.doctors[i]['picture']
            // console.log(this.doctors)
          }
        },
        err => { console.log(err) }
      )
    }
    this.modalService.open(content, ngbModalOptions).result.then((result) => {
      if (page[0] == "regreqpop") {
        var token_parts = this.cookieService.get('T');
        var eval1 = sessionStorage.getItem("evlnid")
        this.api.createticket(token_parts, this.tc, this.etrezsbj, this.etrezcomment, eval1).subscribe(
          res => {
            this.etrezsbj = ""
            this.etrezcomment = ""
            this.closeResult = `Closed with: ${result}`;
          },
          err => {
            this.closeResult = `Closed with: ${result}`;
          }
        )

      }
      if (page[0] == "answerticket") {
        var token_parts = this.cookieService.get('T');
        var eval1 = sessionStorage.getItem("evlnid")
        this.api.answerticket(token_parts, this.tecketid, this.tecketid, this.etrezanswer, eval1).subscribe(
          res => {
            this.etrezanswer = ""
            this.closeResult = `Closed with: ${result}`;
          },
          err => {
            console.log(err)
            this.closeResult = `Closed with: ${result}`;
          }
        )

      }
      if (page[0] == "edit1") {
        this.changeclaim()
      }
      if (page[0] == "edit2") {
        if (this.fullnameedit != "") {
          this.fullname = this.fullnameedit + " *"
          this.rel = this.reledit + " *"
          this.natid = this.natidedit + " *"
        }
      }
      if (page[0] == "edit3") {
        this.changedate()

      }
      if (page[0] == "edit4") {
        this.havedoctor = true
        this.nodoctor = false
        this.doctorf = true
        this.doctor = this.docid
        console.log(this.doctor)
      }

    }, (reason) => {
      if (page[0] == "regreqpop") {
        this.etrezsbj = ""
        this.etrezcomment = ""
      }
      if (page[0] == "answerticket") {
        this.etrezanswer = ""
      }
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;

    });


  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  sendnotif(tk: string, ti: string, bo: string) {
    var skey = "AAAABbBeLfA:APA91bHuHpeSjZby2ZAVBxFvBcbqrFz3pio5nsiyVb2QhnRM4aD3zvG_1YLQXJ-7YvelRIKgXYgrGE3u8-hdcyt8i2IZfi59GkbRK5lbCtrOgvUsgg9xwlbUm9sK_eO-7p6Ua_oEbQe1"

    this.api.sendnotif(skey, tk, ti, bo).subscribe(
      response1 => {
        console.log(response1)
      }
      ,
      err => {
        console.log(err)
      }
    )
  }
  public svrname = ""
  printPage() {
    this.glbvar.printsvrs = []
    this.glbvar.printreps1 = []
    for (let i = 0; i < this.costofsvr.length; i++) {
      this.glbvar.printsvrs.push({ subsvr: this.ss[i].name, cost: this.costofsvr[i], fran: this.fransvr[i], acc: this.acsvr[i] })
      this.glbvar.printsvrs = this.glbvar.printsvrs.slice(0);
    }
    this.showprint = false;
    var token_parts = this.cookieService.get('T');
    console.log(this.userid)
    this.api.getClaimNIDreport(token_parts, this.userid).subscribe(
      res => {
        console.log(res)
        this.glbvar.printreps1 = []

        for (let i = 0; i < res.length; i++) {
          this.svrname = res[i]['contract_plan_subservice__Sub_service__service__title']
          this.glbvar.printreps1.push({ name: res[i]['user__f_name'] + " " + res[i]['user__l_name'], allc: res[i]['invoice__count'], accc: res[i]['countacc'], rejc: res[i]['countrej'], duringc: res[i]['countduring'], allsum: res[i]['suminv'], accsum: res[i]['suminvacc'] })
          this.glbvar.printreps1 = this.glbvar.printreps.slice(0);
        }
        var qr = "";
        this.glbvar.printrows1 = []


        qr += "/" + this.tc
        this.glbvar.printrows1.push({ row: "1", tc: this.tc, name: this.fullname, svr: this.svr, cost: this.inv, date: this.date, fran: "" })

        sessionStorage.setItem('insurerpic', res[0]['contract_plan_subservice__contract__insurer__picture'])
        sessionStorage.setItem('compic', res[0]['user__company__picture'])

        this.glbvar.printtitle1 = []
        this.glbvar.printtitle1.push({ qr: qr, nid: this.userid, sabt: this.userid, rel: this.rel, cont: "" })

        this.showprint = true;
      },
      err => { console.log(err) }
    )

  }
  public showprinttc: boolean = false;
  printPagetc() {
    this.showprinttc = false;
    var token_parts = this.cookieService.get('T');
    // console.log(this.nid)
    // console.log(this.personNID)
    this.api.getClaimNIDreport(token_parts, this.natid).subscribe(
      res => {
        //    console.log(res)
        this.glbvar.printreps = []
        for (let i = 0; i < res.length; i++) {
          this.glbvar.printreps.push({ name: res[i]['user__f_name'] + " " + res[i]['user__l_name'], allc: res[i]['invoice__count'], accc: res[i]['countacc'], rejc: res[i]['countrej'], duringc: res[i]['countduring'], allsum: res[i]['suminv'], accsum: res[i]['suminvacc'] })
          this.glbvar.printreps = this.glbvar.printreps.slice(0);
        }
        var qr = "";
        this.glbvar.printrows = []

        sessionStorage.setItem("createdate", this.cdate)
        qr += "/" + this.tc
        var sdate = ""
        var m1 = moment(this.date);
        if (m1.isValid()) {
          m1.locale('fa');
          sdate = m1.format("YYYY/MM/DD");
        } else {
          sdate = "it is not valid date";
        }
        this.glbvar.printrows.push({ row: "1", tc: this.tc, name: this.fullname, svr: this.subsvr, cost: this.inv, date: this.date, fran: "" })


        sessionStorage.setItem('insurerpic', res[0]['contract_plan_subservice__contract__insurer__picture'])
        sessionStorage.setItem('compic', res[0]['user__company__picture'])

        this.glbvar.printtitle = []
        this.glbvar.printtitle.push({ qr: qr, nid: this.natid, sabt: this.fullname, rel: this.rel, cont: this.conract })

        this.showprinttc = true;
      },
      err => { console.log(err) }
    )

  }
  public servgp: { title: string, cov: string, used: number, inv: number, during: string, remain: string, pooshesh: string, cclaim: string }[] = [];
  public j1 = 0;
  fillitems(subservices: any[]) {

    //console.log(subservices)
    this.j1 = 0;
    this.servgp = []
    this.items = []
    for (let i = 0; i < subservices.length; i++) {
      for (let j = 0; j < subservices[i].subs.length; j++) {
        this.items.push({ id: subservices[i].subs[j].subid, serv: subservices[i]['svr'], subserv: subservices[i].subs[j].subver })
        this.items = this.items.slice(0);
      }
      this.servgp.push({ title: subservices[i]['svr'].toString(), cov: "0", used: 0, inv: 0, during: "", remain: "", pooshesh: "", cclaim: "" });
      this.j1++;
    }
    console.log(this.items)
  }
  selectedsvr: number[];
  acsvr: string[] = []
  fransvr: string[] = []
  costofsvr: string[] = []
  public ss: { name: string, accsum: string, remsum: string, tc: string, showtc: boolean, cost: string, sdate: string }[] = [];
  public selectedsvrf: boolean = false;
  public changesubsvr: boolean = false;
  public cps = ""
  getValues1() {

    this.changesubsvr = true;
  }
  getValues() {
    if (this.selectedsvr.length != 0) {
      this.selectedsvrf = true
    } else {
      this.selectedsvrf = false
    }
    this.ss = []
    console.log(this.selectedsvr)
    if (this.selectedsvr.length < this.ss.length) {
      for (let j = 0; j < this.ss.length; j++) {
        var sf: boolean = true;
        for (let i = 0; i < this.selectedsvr.length; i++) {
          if (this.ss[j]['id'] == this.selectedsvr[i]) {
            sf = false;
          }
        }
        if (sf) {
          this.acsvr.splice(j, 1);
          this.fransvr.splice(j, 1);
          this.costofsvr.splice(j, 1);
        }
      }
    }
    for (let i = 0; i < this.selectedsvr.length; i++) {
      for (let j = 0; j < this.items.length; j++) {
        var f = false;
        if (this.items[j].id == this.selectedsvr[i]) {
          f = false;
          if (this.ss.length != 0) {
            var t = 0;
            for (let k = 0; k < this.ss.length; k++) {
              if (this.ss[k].name == this.items[j].subserv.toString()) {
                t++;
                break;
              }
            }
            if (t > 0) {
              f = true
            }
          }
          if (!f) {
            this.ss.push({ name: this.items[j].subserv.toString(), accsum: "0", remsum: "0", tc: "", showtc: false, cost: "", sdate: "" });
            this.ss = this.ss.slice(0);
            break;
          }

        }
      }

    }
  }
  notchange(event): boolean {

    return false;

  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  public sumcost: number = 0
  public sumfran: number = 0
  public sumacc: number = 0
  costchange(a: number) {
    if (this.fransvr[a] != "") {
      this.acsvr[a] = (Number(this.costofsvr[a]) - Number(this.fransvr[a])).toString()
    }
    else {
      this.acsvr[a] = this.costofsvr[a]
    }
    this.sumacc = 0;
    for (let i = 0; i < this.acsvr.length; i++) {
      this.sumacc += Number(this.acsvr[i])
    }
    this.accinv = this.sumacc.toString()
  }
  franchange(a: number) {
    if (this.fransvr[a] != "") {
      this.acsvr[a] = (Number(this.costofsvr[a]) - Number(this.fransvr[a])).toString()
    }
    else {
      this.acsvr[a] = this.costofsvr[a]
    }
    this.sumacc = 0;
    for (let i = 0; i < this.acsvr.length; i++) {
      this.sumacc += Number(this.acsvr[i])
    }
    this.accinv = this.sumacc.toString()
  }
  acchange() {
    this.sumacc = 0;
    for (let i = 0; i < this.acsvr.length; i++) {
      this.sumacc += Number(this.acsvr[i])
    }
    this.accinv = this.sumacc.toString()
  }
}
