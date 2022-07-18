import { Component, OnInit, Output, Input, OnChanges, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgCircleProgressModule } from 'ng-circle-progress';
import * as moment from 'jalali-moment';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { claim } from '../../../../Models/claim'
import {
  HttpClient, HttpEventType, HttpClientModule,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Ng2ImgMaxService } from 'ng2-img-max';
//port { MatDialog, MatDialogModule, MatDialogConfig } from '@angular/material/dialog';
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { DpDatePickerModule } from 'ng2-jalali-date-picker'
//import { NgbModalOptions, ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons, NgbAlertConfig, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { GlobalvarService } from '../../../../globalvar.service'
import { NgxImageCompressService } from 'ngx-image-compress';


@Component({
  selector: 'app-formdoc',
  templateUrl: './formdoc.component.html',
  styleUrls: ['./formdoc.component.scss']
})

export class FormdocComponent implements OnChanges {
  @Input() childMessage1: any;
  public msg = ""
  public docsname: { con: string, pln: string, subsvr: string, nid: string, createby: string };
  public imagepath: any;
  public datenow = "";
  public timenow = "";
  public cps = "";
  public degid = "";
  public selecteddeg = "";
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any[]> = new EventEmitter();
  public degrees: { id: string, title: string }[] = []
  closeModal() {
    this.onClose.emit(this.childMessage1);
  }

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
  public doctor = "";
  public res: any[] = [];
  public images: string[] = [];
  public doctorfullname = "";
  public specialty = "";
  public status = "";
  public statusid = "";
  public accinv = "";
  public des = "";
  public accdate = "";
  public pic = "";
  public docid = "";

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
  public isdup: boolean = false
  public duptc = "";
  public editable: boolean = false;
  public saveable: boolean = false;
  public regreq: boolean = false;
  public hasticket: boolean = false;
  public cdate = "";
  public servgp: { title: string, cov: string, used: number, inv: number, during: string, remain: string, pooshesh: string, cclaim: string }[] = [];
  public j1 = 0;
  public printgetdoc: boolean = false;
  public resultchange = ""
  public statuschange = ""
  public accinvchange = ""
  public result;
  public adddetail: boolean = false;
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
          this.adddetail = true;
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
          this.adddetail = true;
          break;
        }
      case "5":
        {
          this.evaluator = true;
          this.saveable = true;
          this.adddetail = true;
          break;
        }
      case "6":
        {
          this.superadmin = true;
          this.saveable = true;
          this.adddetail = true;
          break;
        }
    }
    this.tc = this.childMessage1;
    var token_parts = this.cookieService.get('T');
    /// get person auth id
    console.log(this.tc)
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
        this.cdate = response1[0]['create_at']
        this.planname = response1[0]['contract_plan_subservice__plan__title']
        this.conract = response1[0]['contract_plan_subservice__contract__title']
        sessionStorage.setItem("conname", this.conract)
        sessionStorage.setItem("plnname", this.planname)
        this.duptc = response1[0]['duplicatecalim']
        console.log(this.duptc)

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
            this.api.getPlanid(token_parts, this.planname).subscribe(
              res => {
                console.log(res)
                var plnid = res[0]['id'].toString()
                this.api.getplandetail(token_parts, plnid).subscribe(
                  response12 => {
                    this.subsrevices = response12
                    this.fillitems(this.subsrevices)
                    console.log(response1)
                    this.svr = response1[0]['contract_plan_subservice__Sub_service__service__title']
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
                    this.userid = response1[0]['user__national_id']
                    var gdate = response1[0]['date'].toString().substring(0, 10);
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

                    this.doctor = response1[0]['doctor_id'];
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
                    this.statusid = this.status
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
                            }
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
                            }
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
        }
      },
      err => {
        //this.router.navigate(['login']);
        console.error('refresh error', err);
      }
    )
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
  public selectedsvr: number[];
  acsvr: string[] = []
  fransvr: string[] = []
  costofsvr: string[] = []
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
  public ss: { name: string, accsum: string, remsum: string, tc: string, showtc: boolean, cost: string, sdate: string }[] = [];
  public selectedsvrf: boolean = false;
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
  invoiceval = "";
  constructor(
    private imageCompress: NgxImageCompressService,
    private ng2ImgMax: Ng2ImgMaxService,
    private modalService: NgbModal,
    private cookieService: CookieService,
    private route: ActivatedRoute,
    private api: ApiService,
    private http: HttpClient,
    private glbvar: GlobalvarService,
    // private dialog: MatDialog,
    public dateObject: DpDatePickerModule
  ) { }
  public token_parts: any;
  public doctors: any[] = []
  selectdeg() {
    this.selecteddeg = this.degid
  }
  ngAfterViewInit() {
    this.degrees.push({ id: "0", title: "عمومی" })
    this.degrees.push({ id: "1", title: "متخصص" })
    this.degrees.push({ id: "2", title: "فوق تخصص" })
    this.degrees.push({ id: "3", title: "رزیدنت" })
    this.api.getdoctors(this.token_parts).subscribe(
      res => {
        console.log(res)
        var d1 = JSON.stringify(res)
        var drs = JSON.parse(d1)
        for (let i = 0; i < drs.length; i++) {
          this.doctors.push(drs[i])
          if (this.doctors[i]['picture'] == null || this.doctors[i]['picture'] == "")
            this.doctors[i]['picture'] = "http://bimeh.plus/media/images/drs/images.png"
          else
            this.doctors[i]['picture'] = "http://bimeh.plus/media/" + this.doctors[i]['picture']
        }
      },
      err => { }
    )
  }
  public claiminfo: claim;
  public dtnow: any;
  ngOnChanges() {
    this.docsname = this.childMessage1;
    console.log(this.docsname);
    this.token_parts = this.cookieService.get('T');
  }
  image: File[] = [];
  progress: number;
  public falg: boolean = false;
  urls = [];
  deleteimg(url) {
    const index: number = this.urls.indexOf(url);
    if (index !== -1) {
      this.urls.splice(index, 1);
    }
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        this.image[i] = event.target.files[i]
        reader.onload = (event: any) => {
          this.urls.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  public sdate: string;
  public showsave: boolean = true;
  save() {
    this.showsave = false
    var con = this.docsname.con;
    var pln = this.docsname.pln;
    var subsvr = this.docsname.subsvr;
    console.log(con + " " + pln + " " + subsvr)
    this.api.getcpsid(this.token_parts, con, pln, subsvr).subscribe(
      response => {
        console.log("cpsid:" + response)
        // console.log(response[0].id.toString())
        this.cps = response[0].id.toString();
        var datevizit
        var m1 = moment(this.dateObject);
        // console.log("date"+m1);
        if (m1.isValid()) {
          m1.locale('en');
          datevizit = m1.format("YYYY-MM-DD");
        } else {
          datevizit = "it is not valid date";
        }
        var doctorid = ""
        if (this.docid == "") doctorid = ""
        else
          doctorid = this.docid
        console.log("doctorid:" + doctorid)
        this.api.checkclaim(this.token_parts, this.cps, this.docsname.nid, datevizit, doctorid, this.invoiceval).subscribe(
          resp => {
            var tc1 = ""
            var rr = resp
            console.log('checkclaim:' + resp)
            for (let i = 0; i < rr.length; i++)
              tc1 += "/" + rr[i]['trackingـcode']
            if (rr.length != 0) {
              if (rr.length == 1) {
                this.msg = "قبلا هزینه ای با این مشخصات و با کد پیگیری " + tc1 + "  ثبت شده است، توجه داشته باشید در صورت تشخیص تکراری بودن هزینه توسط ارزیابان این هزینه رد خواد شد. آیا از غیر تکراری بودن این هزینه مطمئن هستید؟!"
              }
              else {
                this.msg = "قبلا هزینه هایی با این مشخصات و با کدهای پیگیری " + tc1 + "  ثبت شده است، توجه داشته باشید در صورت تشخیص تکراری بودن هزینه توسط ارزیابان این هزینه رد خواد شد. آیا از غیر تکراری بودن این هزینه مطمئن هستید؟!"
              }

            }
            this.api.getdatetime(this.token_parts).subscribe(
              response => {
                console.log('getdate :' + response)
                this.dtnow = response;

                var gdate = response.substring(0, 10);
                this.timenow = response.substring(11, 19);
                var m = moment(gdate);
                if (m.isValid()) {
                  m.locale('fa');
                  this.datenow = m.format("YYMMDD");
                } else {
                  this.datenow = "it is not valid date";
                }
                // console.log(this.datenow + "   " + this.timenow)
                // alert(this.datenow.substr(2,2))
                var trackingcode = "";
                this.claiminfo = null;
                // console.log(this.docsname);
                console.log("ready for get last tc (NID):" + this.docsname.nid)
                var NID = this.docsname.nid;
                var creator = this.docsname.createby;
                this.api.getlasttc(this.token_parts, NID).subscribe(
                  response => {
                    console.log('lasttc :' + response)
                    var tc: { trackingـcode: string } = response;
                    // console.log(tc.trackingـcode)
                    if (response.length != 0) {
                      if (tc.trackingـcode.substring(0, 6) == this.datenow) {
                        var co = ""
                        var conter = Number(tc.trackingـcode.substring(6, 8)) + 1
                        if (conter < 10) {
                          co = "0" + conter.toString();
                        }
                        else {
                          co = conter.toString();
                        }
                        trackingcode = this.datenow + co + NID.substring(7, 10)
                        // console.log(trackingcode)
                      }
                      else {
                        trackingcode = this.datenow + "01" + NID.substring(7, 10)
                      }
                    } else {
                      trackingcode = this.datenow + "01" + NID.substring(7, 10)
                    }
                    console.log("created tc" + trackingcode)
                    this.api.checkTCExist(this.token_parts, trackingcode).subscribe(
                      response1 => {
                        console.log('checktx exist :' + response1)
                        if (response1.length != 0) {
                          var tc2 = response1;
                          var co = ""
                          var conter = Number(tc2['trackingـcode'].substring(6, 8)) + 1
                          if (conter < 10) {
                            co = "0" + conter.toString();
                          }
                          else {
                            co = conter.toString();
                          }
                          trackingcode = this.datenow + co + NID.substring(7, 10)
                        }
                        console.log("final tc:" + trackingcode)
                        var myHeaders = new Headers();
                        myHeaders.append("Authorization", "Token " + this.token_parts);
                        // console.log(this.cps);
                        this.sdate = datevizit.toString();
                        var formdata = new FormData();
                        sessionStorage.setItem("createdate", this.dtnow)
                        formdata.append("invoice", this.invoiceval);
                        formdata.append("date", datevizit);
                        formdata.append("create_at", this.dtnow);
                        formdata.append("accInvoice", "");
                        formdata.append("acc_date", "");
                        formdata.append("trackingـcode", trackingcode);
                        formdata.append("status", "2");
                        formdata.append("status_description", "");
                        formdata.append("contract_plan_subservice", this.cps);
                        formdata.append("create_by", this.docsname.createby);
                        formdata.append("doctor", doctorid);
                        formdata.append("user", NID);
                        formdata.append("duplicatecalim", tc1);
                        formdata.append("readbyperson", "true");
                        formdata.append("persianmonthreg", this.datenow.substr(2, 2));
                        console.log("parameters to send:" + formdata)
                        var requestOptions = {
                          method: 'POST',
                          headers: myHeaders,
                          body: formdata,
                        };

                        fetch("http://api.bimeh.plus/darman/createclaim/", requestOptions)
                          .then(response => response.text())
                          .then(
                            result => {
                              console.log("claim is created:" + result);
                              for (let i = 0; i < this.image.length; i++) {
                                let img = this.image[i]
                                console.log("Before: " + img.size)
                                var compimg = this.image[i]
                                this.ng2ImgMax.resizeImage(compimg, 600, 450).subscribe(
                                  result => {
                                    compimg=result
                                    console.log("After: " + compimg.size)
                                    var myHeaders = new Headers();
                                    myHeaders.append("Authorization", "Token " + this.token_parts);
                                    this.progress = 1;
                                    var formdata1 = new FormData();
                                    formdata1.append("claimTC", trackingcode);
                                    formdata1.append("image", compimg, this.image[i].name);

                                    console.log("parameter to send image:" + formdata1)
                                    this.http.post("http://api.bimeh.plus/darman/uploadveiw/", formdata1, {
                                      headers: new HttpHeaders({
                                        'Authorization': 'Token  ' + this.token_parts
                                      }),
                                      responseType: 'text',
                                      reportProgress: true,
                                      observe: "events"
                                    })
                                      .pipe(
                                        map((event: any) => {
                                          if (event.type == HttpEventType.UploadProgress) {
                                            this.progress = Math.round((100 / event.total) * event.loaded);
                                          } else if (event.type == HttpEventType.Response) {
                                            console.log("images is uploaded:" + event.body)
                                            var res = event.body;
                                            this.progress = null;

                                          }
                                        }),
                                        catchError((err: any) => {
                                          this.progress = null;
                                          // alert(err.message);
                                          return throwError("error1 to upload img:" + err.message);
                                        })
                                      )
                                      .subscribe(
                                        response => {
                                          this.falg = true
                                        }
                                        ,
                                        err => {
                                          console.log("error2 to upload img:" + err)
                                        }
                                      )
                                  },
                                  err => {
                                    console.log("error in resize: "+err)
                                   })
                              }
                              console.log("tc for show:" + trackingcode)
                              this.onSave.emit([trackingcode, this.docsname, this.invoiceval, this.sdate]);
                            }
                          )
                          .catch(error => console.log('error to create claim:', error));

                      },
                      err1 => {
                        console.log("error1:" + err1)
                      });
                  },
                  err2 => {
                    console.log("error2:" + err2)
                  });
              },
              err3 => {
                console.log("error3:" + err3)
              });
          },
          err4 => {
            console.log("error4:" + err4)
          });
      },
      err5 => {
        console.log("error5:" + err5)
      });
  }
  closeResult: string;
  public selecteddrf1: boolean = false;
  public drname = "";
  public drfamily = "";
  public drmid = "";
  public drsp = "";
  compressFile(images: File): File {
    let image = images
    var imageName = images.name
    var orientation = -1;
    var img: File = null
    this.imageCompress.uploadFile().then(({ image, orientation }) => {
      console.warn('Size in bytes was:', this.imageCompress.byteCount(image));
      this.imageCompress.compressFile(image, orientation, 50, 50).then(
        result => {
          const imageFile = new File([result], imageName, { type: 'image/jpeg' });
          img = imageFile
          console.warn('Size in bytes is now:', this.imageCompress.byteCount(result));

        }
        ,
        err => {
          console.log(err)
        }
      );

    });

    return img;
  }

  open(content) {
    var obj = content['_def']['references']
    var page = Object.keys(obj)
    if (page[0] == "doctor") {
    }
    let ngbModalOptions: NgbModalOptions = {
      size: "lg",
      backdrop: 'static',
      keyboard: false,
    };
    this.modalService.open(content, ngbModalOptions).result.then((result) => {

      if (page[0] == "doctor") {
        this.selecteddrf1 = true;
        this.closeResult = `Closed with: ${result}`;
      }
      if (page[0] == "createdr") {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token " + this.token_parts);
        // console.log(this.cps);

        var formdata = new FormData();
        formdata.append("name", this.drname);
        formdata.append("family", this.drfamily);
        formdata.append("medical_id", this.drmid);
        formdata.append("specialty", this.drsp);
        formdata.append("degree", this.selecteddeg);
        console.log(formdata)
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: formdata,
        };
        fetch("http://api.bimeh.plus/darman/createdoctor/", requestOptions)
          .then(response => response.text())
          .then(
            result => {
              console.log(result);
              this.doctors = []
              this.api.getdoctors(this.token_parts).subscribe(
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
                err => { }
              )
            }
          )
          .catch(error => console.log('error', error));
      }
    }, (reason) => {
      this.selecteddrf1 = false;
      this.docid = ""
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
  public selecteddr
  public selecteddrf: boolean = false;

getdoctor  () {
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
}