import { Component, OnInit, ElementRef, HostListener, ViewChild, AfterViewInit, Renderer2, OnDestroy, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbAlertConfig, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { InboxService } from './inbox.service';
import { Mail, Message } from './inbox.model';
// import { LayoutService } from '../services/layout.service';
import { Subscription, throwError } from 'rxjs';
import { LayoutService } from 'app/shared/services/layout.service';
import { ConfigService } from 'app/shared/services/config.service';
// import { ConfigService } from '../services/config.service';
import { ApiService } from 'app/forms/layouts/basic/api.service';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'jalali-moment';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { NgSelectModule, NgSelectConfig } from '@ng-select/ng-select';
import {
  HttpClient, HttpEventType,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { map, catchError } from "rxjs/operators";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  providers: [InboxService]
})
export class InboxComponent implements OnInit, AfterViewInit, OnDestroy {

  placement = "bottom-right";
  public innerWidth: any;

  public config: any = {};
  layoutSub: Subscription;

  @Input() cValue;
  @ViewChild('emailSidebar', { static: false }) sidebar: ElementRef;
  @ViewChild('contentOverlay', { static: false }) overlay: ElementRef;
  @ViewChild('emailContent', { static: false }) content: ElementRef;

  searchQuery: string = '';
  selectedMailId: number = 4;
  isEmailImportant: boolean = false;
  public isCollapsed = true;
  public isCollapsed1 = false;
  public isMessageSelected = true;
  public selectedpaln: string;
  public token_parts;
  closeResult: string;
  mail: Mail[];
  message: Message;
  constructor(
    private http: HttpClient,
    private startcondate: DpDatePickerModule,
    private endcondate: DpDatePickerModule,
    private cookieService: CookieService,
    private api: ApiService,
    private elRef: ElementRef, private renderer: Renderer2,
    private modalService: NgbModal, private inboxService: InboxService,
    private layoutService: LayoutService, private configService: ConfigService) {
    this.mail = this.inboxService.inbox.filter((mail: Mail) => mail.mailType === 'Inbox');
    this.message = this.inboxService.message.filter((message: Message) => message.mailId === this.selectedMailId)[0];
    this.markAsRead();
    this.checkEmailImportantStatus();

    this.layoutSub = layoutService.changeEmitted$.subscribe(
      direction => {
        const dir = direction.direction;
        if (dir === "rtl") {
          this.placement = "bottom-left";
        } else if (dir === "ltr") {
          this.placement = "bottom-right";
        }
      });
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.config = this.configService.templateConf;
  }
  public start: string;
  public end: string;
  public des: string;
  public contract_image: string;
  public cons: { id: string, title: string, start: string, end: string, pl: string, ins: string, img: string }[] = []
  public paymd: { id: string, title: string }[] = []
  ngAfterViewInit() {
    this.conselect = false;
    this.token_parts = this.cookieService.get('T');
    this.paymd.push({ id: "1", title: "سالانه" })
    this.paymd.push({ id: "2", title: "شش ماهه" })
    this.paymd.push({ id: "4", title: "سه ماهه" })
    this.paymd.push({ id: "12", title: "ماهانه" })
    this.api.getallContract(this.token_parts).subscribe(
      response1 => {
        // console.log(response1[0])
        for (let i = 0; i < response1.length; i++) {
          var contract = response1[i]['title']
          var start = ""
          var m = moment(response1[i].start_date.toString());
          if (m.isValid()) {
            m.locale('fa');
            start = m.format("YYYY/MM/DD");
          } else {
            start = "it is not valid date";
          }

          var end = ""
          var m1 = moment(response1[0].end_date.toString());
          if (m1.isValid()) {
            m1.locale('fa');
            end = m1.format("YYYY/MM/DD");
          } else {
            end = "it is not valid date";
          }
          var des = 'بیمه گر : ' + response1[0]['insurer_id__name'].toString()
          var contract_image = "http://bimeh.plus/media/" + response1[0]['contract_image'].toString()
          this.cons.push({ id: response1[i]['id'], title: contract, start: start, end: end, pl: response1[i]['policy_owner_id__name'].toString(), ins: des, img: contract_image })
        }
      },
      err => {
        console.error('refresh error', err);
      }
    )

  }

  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  markAsRead() {
    let updateItem = this.mail.find(item => item.mailId.toString() === this.selectedMailId.toString());
    let index = this.mail.indexOf(updateItem);
    this.mail[index].isRead = true;
  }

  markAsUnread() {
    let updateItem = this.mail.find(item => item.mailId.toString() === this.selectedMailId.toString());
    let index = this.mail.indexOf(updateItem);
    this.mail[index].isRead = false;
  }

  markAsImportant() {
    let updateItem = this.mail.find(item => item.mailId.toString() === this.selectedMailId.toString());
    let index = this.mail.indexOf(updateItem);
    this.mail[index].isImportant = true;
    this.isEmailImportant = true;
  }

  markAsUnimportant() {
    let updateItem = this.mail.find(item => item.mailId.toString() === this.selectedMailId.toString());
    let index = this.mail.indexOf(updateItem);
    this.mail[index].isImportant = false;
    this.isEmailImportant = false;
  }

  checkEmailImportantStatus() {
    let selectedEmail = this.mail.find(item => item.mailId.toString() === this.selectedMailId.toString());
    this.isEmailImportant = selectedEmail.isImportant;
  }

  public table: { svr: string, subsvr: any[], cov: string ,fran:string}[] = [];
  public plnselect: boolean = false;
  public plnselectn: boolean = false;
  public isnotnumber: boolean = false;
  public isnumber: boolean = false;
  //inbox user list click event function
  public planti: string = "";
  DisplayMessage(event, planid: string, plant: string) {
    this.planti = plant;
    this.selectedpaln = planid;
    this.token_parts = this.cookieService.get('T');
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token " + this.token_parts);
    var formdata = new FormData();
    formdata.append("id", planid);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
    };
    fetch("http://api.bimeh.plus/darman/getplandetail/", requestOptions)
      .then(response => response.text())
      .then(result => {
        this.table = [];
        var h = JSON.parse(result.toString());
        if (h.length != 0) {
          this.plnselect = true;
          this.plnselectn = false;
          this.isnotnumber=false
          this.isnumber=false
          for (let i = 0; i < h.length; i++) {
            var s = h[i]['subs']
            var c = ""
            if (h[i]['cov'].toString() == 0) {
              this.isnotnumber=true
              this.isnumber=false
              c = "نامحدود"
            }
            else
            {
              this.isnumber=true
              this.isnotnumber=false
              c=h[i]['cov'].toString()
            }
            this.table.push({ svr: h[i]['svr'].toString(), subsvr: s, cov: c,fran:h[i]['fran']})
            this.table = this.table.slice(0);
          }
        } else {
          this.plnselectn = true;
          this.plnselect = false;
        }
      })
      .catch(error => console.log('error', error));
    var hElement: HTMLElement = this.elRef.nativeElement;
  }
  public companies: { id: string, name: string }[] = [];
  public insurers: { id: string, name: string }[] = [];
  public allplans: { id: string, title: string }[] = [];
  public svrtable: { svrid: string, svr: string, subsvr: any[], cov: string }[] = [];
  public plntable: { id: string, title: string, permium: string, payduring1: string }[] = []
  public servs: { svrid: string, svr: string, subsvr: any[] }[] = [];
  public perrel: { name: string, NID: string, img: string, reltomain: string }[] = [];
  selectedsvr1: any[];
  public selectedflag: boolean = false;
  flagval: boolean[] = []
  covval: string[] = []
  permium: string[] = []
  payduring: string[] = []
  //compose popup start
  planname: string;
  plandes: string;
  //////// entakhab comboboxha ////////
  getservs() {
    /////entekhab service dar ijad plan
    var covrage = ""
    var sid: any = []
    var f: boolean = false;
    this.selectedflag = true;
    if (this.selectedsvr1.length != 0)
      this.selectedsvr1f = true;
    else
      this.selectedsvr1f = false;
    if (this.selectedsvr1.length < this.svrtable.length) {
      for (let j = 0; j < this.svrtable.length; j++) {
        var sf: boolean = true;
        for (let i = 0; i < this.selectedsvr1.length; i++) {
          if (this.svrtable[j]['svrid'] == this.selectedsvr1[i]) {
            sf = false;
          }
        }
        if (sf) {
          this.svrtable.splice(j, 1);
          this.covval.splice(j, 1);
        }
      }
    }
    for (let i = 0; i < this.selectedsvr1.length; i++) {
      var svrex: Boolean = false;
      for (let j = 0; j < this.svrtable.length; j++) {
        if (this.svrtable[j]['svrid'] == this.selectedsvr1[i]) {
          svrex = true;
          break;
        }
      }

      if (!svrex) {
        for (let j = 0; j < this.servs.length; j++) {
          if (this.servs[j].svrid == this.selectedsvr1[i]) {
            var su: any = []
            for (let k = 0; k < this.servs[j].subsvr.length; k++) {
              su.push({ sub_id: this.servs[j].subsvr[k]['sub_id'], sub_title: this.servs[j].subsvr[k]['sub_title'], sub_des: this.servs[j].subsvr[k]['sub_des'], flag: f })
            }
            this.svrtable.push({ svrid: this.servs[j].svrid, svr: this.servs[j].svr, subsvr: su, cov: covrage });
            this.svrtable = this.svrtable.slice(0);
            break;
          }
        }
      }

    }
  }
  getValuesins() {
    //alert(this.insselected)
  }
  conplnselected: string[] = [];
  selectedplnf: boolean = false;
  getValuespln() {
    var perm = ""
    var plnid: any = []
    var f: boolean = false;
    this.selectedflag = true;
    if (this.conplnselected.length != 0)
      this.selectedplnf = true;
    else
      this.selectedplnf = false;
    if (this.conplnselected.length < this.plntable.length) {
      for (let j = 0; j < this.plntable.length; j++) {
        var sf: boolean = true;
        for (let i = 0; i < this.conplnselected.length; i++) {
          if (this.plntable[j]['id'] == this.conplnselected[i]) {
            sf = false;
          }
        }
        if (sf) {
          this.plntable.splice(j, 1);
          this.permium.splice(j, 1);
          this.payduring.splice(j, 1);
        }
      }
    }
    for (let i = 0; i < this.conplnselected.length; i++) {
      var svrex: Boolean = false;
      for (let j = 0; j < this.plntable.length; j++) {
        if (this.plntable[j]['id'] == this.conplnselected[i]) {
          svrex = true;
          break;
        }
      }

      if (!svrex) {
        for (let j = 0; j < this.allplans.length; j++) {
          if (this.allplans[j].id == this.conplnselected[i]) {
            this.plntable.push({ id: this.allplans[j].id, title: this.allplans[j].title, permium: "", payduring1: "" });
            this.plntable = this.plntable.slice(0);
            break;
          }
        }
      }

    }
  }
  /////////////////////////////////////
  ///////// sabt dar database /////////
  plancreate() {
    // alert("Salam")
    console.log(this.flagval)
    var plnn = this.planname;
    var plnd = this.plandes;
    var nid;
    this.api.getPersonauth(this.token_parts).subscribe(
      response1 => {
        nid = response1[0].person;
      },
      err => { }
    )
    this.api.getdatetime(this.token_parts).subscribe(
      response => {
        // console.log(response)
        var dtnow = response;
        var gdate = response.substring(0, 10);
        var timenow = response.substring(11, 19);
        var m = moment(gdate);
        if (m.isValid()) {
          m.locale('fa');
          var datenow = m.format("YYMMDD");
        } else {
          var datenow = "it is not valid date";
        }
        this.api.createplan(this.token_parts, plnn, dtnow, plnd, nid).subscribe(
          response => {
            for (let i = 0; i < this.svrtable.length; i++) {
              this.allplans.push({ id: response[0]['id'].toString(), title: plnn })
              this.allplans = this.allplans.slice(0);
              var sid = this.svrtable[i].svrid;
              var ca = this.covval[i];
              var pid = response[0]['id']
              this.api.createplansvr(this.token_parts, pid, sid, ca).subscribe(
                response => {
                  for (let j = 0; j < this.svrtable[i].subsvr.length; j++) {
                    console.log(this.svrtable[i].subsvr[j])
                    var subsvrid = this.svrtable[i].subsvr[j].sub_id
                    var subsvrf = false;
                    try {
                      subsvrf = this.flagval[this.svrtable[i].subsvr[j].sub_id]
                    } catch
                    {
                      subsvrf = false
                    }
                    if (subsvrf == null) {
                      subsvrf = false
                    }

                    this.api.createplansubsvr(this.token_parts, pid, subsvrid, subsvrf).subscribe(
                      response => {
                        console.log("طرح " + plnn + " با موفقیت ایجاد شد.")
                        this.planname = "";
                        this.plandes = "";
                        this.svrtable = [];
                        this.selectedsvr1 = []
                      },
                      err => {
                        console.log(err)
                      }
                    )
                  }
                },
                err => { }
              )

            }
          },
          err => { console.log(err) }
        )

      }
    )
  }
  //////////////////////
  image: File[] = [];
  insprogress: number;
  insconame: string;
  inscoid: string;
  inscotel: string;
  inscomail: string;
  inscoadd: string;
  inscreate() {
    this.insprogress = 1;
    var formdata = new FormData();
    formdata.append("name", this.insconame);
    formdata.append("national_no", this.inscoid);
    formdata.append("phone_number", this.inscotel);
    formdata.append("email", this.inscomail);
    formdata.append("address", this.inscoadd);
    formdata.append("picture", this.insimage[0], this.insimage[0].name);
    this.http.post("http://api.bimeh.plus/darman/createins/", formdata, {
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
            this.insprogress = Math.round((100 / event.total) * event.loaded);
          } else if (event.type == HttpEventType.Response) {
            var res = event.body;
            var h = JSON.parse(res);
            console.log(h.id)
            this.insurers.push({ id: h.id.toString(), name: h.name.toString() })
            this.insurers = this.insurers.slice(0);
            this.insprogress = null;
          }
        }),
        catchError((err: any) => {
          this.insprogress = null;
          // alert(err.message);
          return throwError(err.message);
        })
      )
      .subscribe(data => {
        // console.log(data)
        // this.insurers.push({id:data[0]['id'],name:data[0]['name']})
        // this.insurers = this.insurers.slice(0);
      },
        err => {
          //alert("error")
        }

      );

  }
  /////////////////////
  coname: string;
  coid: string;
  cotel: string;
  comail: string;
  coadd: string;
  insselected: string;
  pwprogress: number;
  pwcreate() {
    var ins=this.insselected
    this.insprogress = 1;
    var formdata = new FormData();
    formdata.append("name", this.coname);
    formdata.append("national_no", this.coid);
    formdata.append("phone_number", this.cotel);
    formdata.append("email", this.comail);
    formdata.append("address", this.coadd);
    formdata.append("picture", this.pwimage[0], this.pwimage[0].name);
    formdata.append("last_insurer", ins);
    this.http.post("http://api.bimeh.plus/darman/createco/", formdata, {
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
            this.pwprogress = Math.round((100 / event.total) * event.loaded);
          } else 
          if (event.type == HttpEventType.Response) {
            var res = event.body;
            var h = JSON.parse(res)
            this.companies.push({ id: h.id, name: h.name })
            this.companies = this.companies.slice(0);
            this.pwprogress = null;
          }
          
        }),
        catchError((err: any) => {
          this.insprogress = null;
          // alert(err.message);
          return throwError(err.message);
        })
      ).subscribe(data => {
        console.log(data)
        // this.insurers.push({id:data[0]['id'],name:data[0]['name']})
        // this.insurers = this.insurers.slice(0);
      },
        err => {
          console.log(err)
        }

      );

  }
  //////////////////////

  conttitle: string;
  contno: string;
  continsselected: string;
  contplnselected: string[] = [];
  contpwselected: string;
  contprogress: number;
  contarctcreate() {
    // this.conttitle
    // this.contpwselected
    // this.continsselected
    // startdate
    // enddate
    // datenow
    var nid;
    this.api.getPersonauth(this.token_parts).subscribe(
      response1 => {
        nid = response1[0].person;

        this.api.getdatetime(this.token_parts).subscribe(
          response => {
            // console.log(response)
            var dtnow = response;
            var h;
            var sdate;
            var edate;
            var pw1 = "";
            var ins1 = "";
            var gdate = response.substring(0, 10);
            var timenow = response.substring(11, 19);
            var m = moment(gdate);
            if (m.isValid()) {
              m.locale('en');
              var datenow = m.format("YYYY-MM-DD");
            } else {
              var datenow = "it is not valid date";
            }
            var m1 = moment(this.startcondate);
            if (m1.isValid()) {
              m1.locale('en');
              var startdate = m1.format("YYYY-MM-DD");
            } else {
              var startdate = "it is not valid date";
            }
            var m2 = moment(this.endcondate);
            if (m2.isValid()) {
              m2.locale('en');
              var enddate = m2.format("YYYY-MM-DD");
            } else {
              var enddate = "it is not valid date";
            }
            this.contprogress = 1;
            var formdata = new FormData();
            formdata.append("title", this.conttitle);
            formdata.append("policy_owner", this.contpwselected);
            formdata.append("insurer", this.continsselected);
            formdata.append("start_date", startdate);
            formdata.append("end_date", enddate);
            formdata.append("created_at", datenow);
            formdata.append("created_by", nid);
            formdata.append("contract_image", this.contimage[0], this.contimage[0].name);
            formdata.append("contract_number", this.contno);
            //

            this.http.post("http://api.bimeh.plus/darman/createcont/", formdata, {
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
                    this.pwprogress = Math.round((100 / event.total) * event.loaded);
                  } else if (event.type == HttpEventType.Response) {
                    var res = event.body;
                    h = JSON.parse(res)

                    for (let i = 0; i < this.companies.length; i++) {
                      if (this.companies[i].id == this.contpwselected) {
                        pw1 = this.companies[i].name
                        break;
                      }
                    }

                    for (let i = 0; i < this.insurers.length; i++) {
                      if (this.insurers[i].id == this.continsselected)
                        ins1 = this.insurers[i].name
                    }
                    var ms = moment(h.start_date);
                    if (ms.isValid()) {
                      ms.locale('fa');
                      sdate = ms.format("YYYY-MM-DD");
                    } else {
                      sdate = "it is not valid date";
                    }
                    var me = moment(h.end_date);
                    if (me.isValid()) {
                      me.locale('fa');
                      edate = me.format("YYYY-MM-DD");
                    } else {
                      edate = "it is not valid date";
                    }
                    this.cons.push({ id: h.id, title: h.title, start: sdate, end: edate, pl: pw1, ins: ins1, img: h.contract_image })
                    this.cons = this.cons.slice(0);
                    this.contprogress = null;
                    console.log(this.plntable.length)
                    for (let i = 0; i < this.plntable.length; i++) {
                      this.api.getplandetail(this.token_parts, this.plntable[i]['id']).subscribe(
                        response => {
                          var res = response
                          for (let j = 0; j < res.length; j++) {
                            for (let k = 0; k < res[j].subs.length; k++) {
                              this.api.createcps(this.token_parts, h.id, this.plntable[i]['id'], res[j].subs[k].subid).subscribe(
                                response => { console.log("success") },
                                err => { console.log("error") }
                              )
                            }
                          }
                        },
                        err => { console.log("error") }
                      )
                      console.log(h.id)
                      console.log(this.plntable[i]['id'])
                      console.log(this.permium[i])
                      console.log(this.payduring[i])

                      this.api.createcontplan(this.token_parts, h.id, this.plntable[i]['id'], this.permium[i], this.payduring[i]).subscribe(
                        response => {
                          console.log("success")
                        },
                        err => { console.log(err) }
                      )
                    }

                  }
                }),
                catchError((err: any) => {
                  this.insprogress = null;
                  // alert(err.message);
                  return throwError(err.message);
                })
              ).subscribe(data => {

                // console.log(data)
                // this.insurers.push({id:data[0]['id'],name:data[0]['name']})
                // this.insurers = this.insurers.slice(0);
              },
                err => {
                  //alert("error")
                }

              );


          },
          err => { }
        )
      },
      err => { }
    )
  }
  subsvrtitle: string;
  subsvrdes: string;
  selectedsvrforsub: string;
  subsvrcreate() {
    var title = this.subsvrtitle
    var des = this.subsvrdes
    var svr = this.selectedsvrforsub
    this.api.createsubsvr(this.token_parts, title, des, svr).subscribe(
      res => {
        var id = res.id
        for (let i = 0; i < this.servs.length; i++) {
          if (this.servs[i].svrid == svr) {
            this.servs[i].subsvr.push({ sub_id: id, sub_title: title, sub_des: svr })
            break;
          }
        }
      },
      err => {
        console.log(err)
      }
    )
  }
  /////////////////////////////////////
  selectedsvr1f: boolean = false;
  public plnshow: boolean = false;

  open(content) {
    var obj = content['_def']['references']
    var page = Object.keys(obj)
    if (page[0] == "plns") {
      if (!this.plnshow) {
        this.selectedsvr1f = false;
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token bd787a1d593f84c729cd0db9de374200da276bc0");
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
        };
        fetch("http://api.bimeh.plus/darman/getallservices/", requestOptions)
          .then(response => response.text())
          .then(result => {
            this.servs = [];
            var h = JSON.parse(result.toString());
            if (h.length != 0) {
              for (let i = 0; i < h.length; i++) {
                var s = h[i]['subs']
                this.servs.push({ svrid: h[i]['svr_id'].toString(), svr: h[i]['svr_title'].toString(), subsvr: s })
                this.servs = this.servs.slice(0);
              }
            }
            this.plnshow = true;
          })
          .catch(error => console.log('error', error));
      }
    }
    if (page[0] == "pw") {
    }
    if (page[0] == "insu") {
    }
    if (page[0] == "servi") {
    }
    if (page[0] == "selservi") {
    }
    if (page[0] == "selplns") {
    }
    if (page[0] == "subservice") {
    }
    if (page[0] == "content") {
      this.companies = []
      this.allplans = []
      this.insurers = []
      this.api.getallcom(this.token_parts).subscribe(
        responce => {

          for (let i = 0; i < responce.length; i++) {
            this.companies.push({ id: responce[i]['id'], name: responce[i]['name'] })
            this.companies = this.companies.slice(0);
          }
        },
        err => {
          console.error('refresh error', err);
        }
      )
      this.api.getallplan(this.token_parts).subscribe(
        responce => {

          for (let i = 0; i < responce.length; i++) {
            this.allplans.push({ id: responce[i]['id'].toString(), title: responce[i]['title'].toString() })
            this.allplans = this.allplans.slice(0);
          }
        },
        err => {
          console.error('refresh error', err);
        }
      )
      this.api.getallins(this.token_parts).subscribe(
        responce => {

          for (let i = 0; i < responce.length; i++) {
            this.insurers.push({ id: responce[i]['id'].toString(), name: responce[i]['name'].toString() })
            this.insurers = this.insurers.slice(0);
          }
        },
        err => {
          console.error('refresh error', err);
        }
      )
    }

    let ngbModalOptions: NgbModalOptions = {
      size: "lg",
      backdrop: 'static',
      keyboard: false,
    };
    this.modalService.open(content, ngbModalOptions).result.then((result) => {
      if (page[0] == "plns") {
        this.plancreate()
      }
      if (page[0] == "insu") {
        this.inscreate()
      }
      if (page[0] == "pw") {
        this.pwcreate()
      }
      if (page[0] == "content") {
        this.contarctcreate()
      }
      if (page[0] == "subservice") {
        this.subsvrcreate()
      }
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      if (page[0] == "plns") {
        this.planname = "";
        this.plandes = "";
        this.svrtable = [];
        this.selectedsvr1 = []
      }
      if (page[0] == "insu") {
        this.insprogress = 0;
        this.insconame = "";
        this.inscoid = "";
        this.inscotel = "";
        this.inscomail = "";
        this.inscoadd = "";
        this.insurls = [];
      }
      if (page[0] == "pw") {
        this.pwprogress = 0;
        this.coname = "";
        this.coid = "";
        this.cotel = "";
        this.comail = "";
        this.coadd = "";
        this.insurls = [];
      }
      if (page[0] == "content") {
        this.conttitle = "";
        this.contpwselected = ""
        this.continsselected = ""
        this.startcondate = ""
        this.endcondate = "";
        this.contimage = []
        this.contno = ""
      }
      if (page[0] == "subservice") {
        this.subsvrtitle = "";
        this.subsvrdes = ""
        this.selectedsvrforsub = ""

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
  //compose popup ends

  //inbox labels click event function
  GetEmailsByLabel(event, labelType: string) {
    this.mail = this.inboxService.inbox.filter((mail: Mail) => mail.labelType === labelType);
    this.SetItemActive(event);
  }
  public plans: { id: string, title: string, permium: string, paymentmode: string }[] = [];
  public conselect: boolean;
  public conti: string = "";
  //inbox type click event function
  GetEmailsByType(event, type: string) {
    this.plans = [];
    this.plnselect = false;
    this.conselect = true;
    this.api.getplancon(this.token_parts, Number(type)).subscribe(
      response => {
        this.conti = response[0]['contract__title'];
        console.log(response)
        for (let i = 0; i < response.length; i++) {
          var pym = "";
          switch (response[i]['payment_mode']) {
            case "1":
              pym = "سالانه"
              break;
            case "2":
              pym = "شش ماهه"
              break;
            case "4":
              pym = "سه ماهه"
              break;
            case "12":
              pym = "ماهانه"
              break;
          }

          this.plans.push({ id: response[i]['plan_id'], title: response[i]['plan__title'], permium: response[i]['premium'], paymentmode: pym })
console.log(this.plans)
        }
      },
      err => {
        console.error('refresh error', err);
      }
    )
  }

  //inbox Starred click event function
  GetStarredEmails(event) {
    this.mail = this.inboxService.inbox.filter((mail: Mail) => mail.isImportant === true);
    this.SetItemActive(event);
  }

  SetItemActive(event) {

    var hElement: HTMLElement = this.elRef.nativeElement;
    //now you can simply get your elements with their class name
    var allAnchors = hElement.querySelectorAll('.list-group-messages > a.list-group-item');
    //do something with selected elements
    [].forEach.call(allAnchors, function (item: HTMLElement) {
      item.setAttribute('class', 'list-group-item list-group-item-action no-border');
    });
    //set active class for selected item
    event.currentTarget.setAttribute('class', 'list-group-item active no-border');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 768) {
      this.renderer.addClass(this.content.nativeElement, 'hide-email-content');
    }
    if (this.innerWidth > 768) {
      this.renderer.removeClass(this.content.nativeElement, 'hide-email-content');
    }
  }

  onListItemClick() {
    this.renderer.removeClass(this.content.nativeElement, 'hide-email-content');
  }

  OnBackToInbox() {
    this.renderer.addClass(this.content.nativeElement, 'hide-email-content');
  }

  onSidebarToggle() {
    this.renderer.removeClass(this.sidebar.nativeElement, 'd-none');
    this.renderer.addClass(this.sidebar.nativeElement, 'd-block');
    this.renderer.addClass(this.overlay.nativeElement, 'show');
  }

  onContentOverlay() {
    this.renderer.removeClass(this.overlay.nativeElement, 'show');
    this.renderer.removeClass(this.sidebar.nativeElement, 'd-block');
    this.renderer.addClass(this.sidebar.nativeElement, 'd-none');
  }


  ///////////////// daryaft fail ha /////////////////
  public insimage: File[] = []
  public pwimage: File[] = []
  public contimage: File[] = []
  public urls = [];
  public conturls = [];
  public insurls = [];
  public pwurls = [];

  contSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        this.contimage[i] = event.target.files[i]
        reader.onload = (event: any) => {
          this.conturls.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  insSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        this.insimage[i] = event.target.files[i]
        reader.onload = (event: any) => {
          this.insurls.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }
  pwSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var filesAmount = event.target.files.length;
      for (let i = 0; i < filesAmount; i++) {
        var reader = new FileReader();
        this.pwimage[i] = event.target.files[i]
        reader.onload = (event: any) => {
          this.pwurls.push(event.target.result);
        }
        reader.readAsDataURL(event.target.files[i]);
      }
    }
  }

}
