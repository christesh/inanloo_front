import { Component, Output, ViewEncapsulation } from '@angular/core';
import { NgSelectModule, NgSelectConfig } from '@ng-select/ng-select';
import { ApiService } from './api.service';
import { AllmodelsService } from '../../../Models/allmodels.service'
import { stringify } from 'querystring';
import { subservice } from 'app/Models/subservice';
import * as moment from 'jalali-moment';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { REDUCER_MANAGER_PROVIDERS } from '@ngrx/store/src/reducer_manager';
import { FormsModule } from '@angular/forms';
import { PrintComponent } from '../basic/print/print.component'
import { GlobalvarService } from '../../../globalvar.service';
import * as tableData from '../../../shared/data/smart-data-table';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BasicComponent {
  public planname: string
  public claimNID: any[] = []
  public contract: string;
  public start: string;
  public end: string;
  public des: string;
  public claims: any[] = [];
  public svrcov: any[] = [];
  public showclaim: boolean = false;
  public contract_image: string;
  token: string;
  public subsrevices: any;
  public servgp: { title: string, cov: string, used: number, inv: number, during: string, remain: string, pooshesh: string, cclaim: string }[] = [];
  public items: any[] = [];
  public NID: string;
  public rel: any[] = [];
  public perrel: { name: string, NID: string, img: string, reltomain: string }[] = [];
  public isshowed: boolean = false;
  public superadmin: boolean;
  public admin: boolean;
  public insured: boolean;
  public user: boolean;
  public evaluator: boolean;
  public p2: any;
  public token_parts: string;
  public nid: string;
  source: LocalDataSource;
  filterSource: LocalDataSource;
  alertSource: LocalDataSource;

  filtersettings = tableData.filtersettings;
  alertsettings1 = tableData.adminregtable;
  alertsettings2 = tableData.insuredregtable;
  constructor(
    private cookieService: CookieService,
    private api: ApiService,
    private router: Router,
    private itemdata: AllmodelsService,
    private printa: PrintComponent,
    private golvar: GlobalvarService,

  ) {

  }
  public docs: { con: string, pln: string, subsvr: string, nid: string, createby: string, id: number }[] = [];
  public contracts: { id: string, name: string }[] = []
  ngOnInit() {
    this.docs = [];
    this.contracts = [];
    this.token_parts = this.cookieService.get('T');
    this.api.getallContract(this.token_parts).subscribe(
      response1 => {
        var res = response1;
        for (let i = 0; i < res.length; i++) {
          this.contracts.push({ id: res[i]['id'], name: res[i]['title'] })
          this.contracts = this.contracts.slice(0)
        }
      }
      ,
      err => {
        console.log(err);
      }
    )
  }
  ngAfterViewInit() {

    this.getusercat()
    this.filterSource = new LocalDataSource(tableData.filerdata);
    this.isshowed = true;
  }
  public segaluser: boolean = false;
  public usercont: string[] = []
  getusercat() {
    this.usercont = []
    this.superadmin = false;
    this.admin = false;
    this.insured = false;
    this.user = false;
    this.evaluator = false;
    this.segaluser = false;
    this.token_parts = this.cookieService.get('T');
    this.api.getPersonauth(this.token_parts).subscribe(
      response1 => {
        this.p2 = response1[0].catrgory;
        this.nid = response1[0].person;
        this.golvar.authcat = this.p2.toString();
        switch (this.golvar.authcat) {
          case "1":
            {
              this.superadmin = true;
              this.showsuperadmin();
              break;
            }
          case "3":
            {
              this.user = true;
              this.showuser();
              break;
            }
          case "2":
            {
              this.insured = true;
              this.showinsurer();
              break;
            }
          case "4":
            {
              this.admin = true;
              this.showsuperadmin();
              break;
            }
          case "5":
            {
              this.evaluator = true;
              this.showevaluator();
              break;
            }
          case "6":
            {
              var token = this.cookieService.get('T')
              this.api.getaccessevalnid(token, this.nid).subscribe(
                res => {
                  console.log(res)
                  this.contracts = []
                  for (let i = 0; i < res.length; i++) {
                    var idx = res[i]['accesskind'].indexOf("/2")
                    if (idx != -1) {
                      this.usercont.push(res[i]['contract_id'])
                      this.contracts.push({ id: res[i]['contract_id'], name: res[i]['contract_id__title'] })
                    }
                  }
                  this.superadmin = true;
                  this.showsuperadmin();
                },
                err => {
                  console.log(err)
                }
              )

              break;
            }
        }
      },
      err => {
        console.error('refresh error', err);
      }
    )
  }
  public showperson: boolean = false;
  public per: string;
  public perimg: string;
  public contselected = ""
  selectcon() {
    this.getusercat()
  }
  regclaim(event) {
    this.showclaim = false
    var selectesdNID = event.data['us__national_id'].toString();
    sessionStorage.setItem('NID', selectesdNID);
    this.personNID = selectesdNID
    var firstname = event.data['us__f_name'].toString();
    var surname = event.data['us__l_name'].toString();
    var img = event.data['us__picture'];
    this.planname = event.data['pln__title'].toString();
    this.contract = event.data['con__title'].toString();
    this.per = firstname + " " + surname
    if (img != "" && img != null) {
      this.perimg = "http://bimeh.plus/media/" + img
    }
    else {
      this.perimg = "";
    }
    this.showperson = true;
    if (this.isshowed) {
      this.ss1 = [];
      this.ss = [];
      this.docs = [];
      this.selectedflag = true;
      if (selectesdNID !== null) {

        var token_parts = this.cookieService.get('T');

        //console.log(res)
        var plnid = event.data['pln__id'].toString();
        this.api.getplandetail(token_parts, plnid).subscribe(
          response1 => {
            this.subsrevices = response1
            this.fillitems(this.subsrevices)
            ////////////////
            this.api.getClaiminfoNID(token_parts, selectesdNID).subscribe(
              response1 => {
                this.claims = response1
                for (let i = 0; i < this.claims.length; i++) {
                  for (let j = 0; j < this.servgp.length; j++) {
                    if (this.claims[i]['contract_plan_subservice__Sub_service__service__title'] == this.servgp[j].title) {
                      this.servgp[j].used = this.claims[i]['accInvoice__sum'];
                      this.servgp[j].inv = this.claims[i]['Invoice__sum'];
                      this.servgp[j].during = (Number(this.claims[i]['s2']) + Number(this.claims[i]['s2'])).toString();
                      this.servgp[j].cclaim = this.claims[i]['invoice__count'];
                    }
                  }
                }
                //////////////////////
                this.api.getPlanservNID(token_parts, selectesdNID).subscribe(
                  response1 => {
                    this.svrcov = response1
                    // console.log(response1)
                    for (let i = 0; i < this.svrcov.length; i++) {
                      for (let j = 0; j < this.servgp.length; j++) {
                        if (this.svrcov[i]['service_id__title'] == this.servgp[j].title) {
                          // console.log(j + " / " + this.servgp[j])
                          // console.log(this.svrcov[i])
                          if (this.svrcov[i]['max_coverage'] != 0)
                            this.servgp[j].cov = this.svrcov[i]['max_coverage']
                          else
                            this.servgp[j].cov = "نامحدود"
                          // console.log(j + ":" + this.servgp[j].title + "/" + this.servgp[j].cov + "/" + this.servgp[j].used)
                          break;
                        }
                      }
                    }
                    for (let i = 0; i < this.servgp.length; i++) {
                      if (this.servgp[i].cov != "نامحدود")
                        this.servgp[i].remain = (Number(this.servgp[i].cov) - Number(this.servgp[i].used)).toString()
                      else
                        this.servgp[i].remain = "نامحدود"
                    }
                    console.log(this.servgp)
                    this.showclaim = true
                  },
                  err => {
                    // this.router.navigate(['login']);
                    console.error('refresh error', err);
                  }
                )
              },
              err => {
                // this.router.navigate(['login']);
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
        this.showclaim = false
      }
    }

  }
  public prrel: string;
  showsuperadmin() {
    var con: string[] = []
    if (this.contselected != '')
      con.push(this.contselected)
    else
      if (this.usercont.length != 0)
        con = this.usercont

    this.api.getPerson(this.token_parts).subscribe(
      response1 => {
        this.authid = response1[0].auth_id
        switch (response1[0]['reltomain']) {
          case '1': {
            this.prrel = 'تبعی'
            break;
          }
          case '2': {
            this.prrel = 'تبعی'
            break;
          }
          case '3': {
            this.prrel = 'تبعی'
            break;
          }
          case '4': {
            this.prrel = 'تبعی'
            break;
          }
          case '5': {
            this.prrel = 'تبعی'
            break;
          }
          case '6': {
            this.prrel = 'تبعی'
            break;
          }
          case '7': {
            this.prrel = 'تبعی'
            break;
          }
          case '8': {
            this.prrel = 'تبعی'
            break;
          }
          case '9': {
            this.prrel = 'تبعی'
            break;
          }
          case '0': {
            this.prrel = 'اصلی'
            break;
          }
          case null: {
            this.prrel = 'اصلی'
            break;
          }
          default: {
            this.prrel = 'اصلی'
            break;
          }
        }
      },
      err => {
        //this.router.navigate(['login']);
        console.error('refresh error', err);
      }
    )
    this.api.getuserclaims(this.token_parts, con).subscribe(
      response1 => {
        this.p2 = response1;

        this.alertSource = new LocalDataSource(this.p2);
        for (let i = 0; i < this.p2.length; i++) {
          // console.log(this.p2[i]['us__reltomain'])
          if (this.p2[i]['us__rate'] != null) {
            this.p2[i]['us__rate'] = "<span>&#11088;</span>"
          }
          switch (this.p2[i]['us__reltomain']) {

            case '1': {
              this.p2[i]['us__reltomain'] = 'پدر'
              break;
            }
            case '2': {
              this.p2[i]['us__reltomain'] = 'مادر'
              break;
            }
            case '3': {
              this.p2[i]['us__reltomain'] = 'همسر'
              break;
            }
            case '4': {
              this.p2[i]['us__reltomain'] = 'دختر'
              break;
            }
            case '5': {
              this.p2[i]['us__reltomain'] = 'برادر'
              break;
            }
            case '6': {
              this.p2[i]['us__reltomain'] = 'خواهر'
              break;
            }
            case '7': {
              this.p2[i]['us__reltomain'] = 'پدر بزرگ'
              break;
            }
            case '8': {
              this.p2[i]['us__reltomain'] = 'مادر بزرگ'
              break;
            }
            case '9': {
              this.p2[i]['us__reltomain'] = 'نوه'
              break;
            }
            case '10': {
              this.p2[i]['us__reltomain'] = 'پسر'
              break;
            }
            case '0': {
              this.p2[i]['us__reltomain'] = 'اصلی'
              break;
            }
            case null: {
              this.p2[i]['us__reltomain'] = 'اصلی'
              break;
            }
            default: {
              this.p2[i]['us__reltomain'] = 'اصلی'
              break;
            }
          }
        }

      },
      err => {
        console.error('refresh error', err);
      }
    )
  }
  ////////////////////
  showinsurer() {
    var con: string[] = []
    con.push(this.contract)
    this.api.getuserclaims(this.token_parts, con).subscribe(
      response1 => {
        this.p2 = response1;
        // console.log(response1)
        this.alertSource = new LocalDataSource(this.p2);
        for (let i = 0; i < this.p2.length; i++) {
          // console.log(this.p2[i]['us__reltomain'])
          switch (this.p2[i]['us__reltomain']) {

            case '1': {
              this.p2[i]['us__reltomain'] = 'پدر'
              break;
            }
            case '2': {
              this.p2[i]['us__reltomain'] = 'مادر'
              break;
            }
            case '3': {
              this.p2[i]['us__reltomain'] = 'همسر'
              break;
            }
            case '4': {
              this.p2[i]['us__reltomain'] = 'دختر'
              break;
            }
            case '5': {
              this.p2[i]['us__reltomain'] = 'برادر'
              break;
            }
            case '6': {
              this.p2[i]['us__reltomain'] = 'خواهر'
              break;
            }
            case '7': {
              this.p2[i]['us__reltomain'] = 'پدر بزرگ'
              break;
            }
            case '8': {
              this.p2[i]['us__reltomain'] = 'مادر بزرگ'
              break;
            }
            case '9': {
              this.p2[i]['us__reltomain'] = 'نوه'
              break;
            }
            case '10': {
              this.p2[i]['us__reltomain'] = 'پسر'
              break;
            }
            case '0': {
              this.p2[i]['us__reltomain'] = 'اصلی'
              break;
            }
            case null: {
              this.p2[i]['us__reltomain'] = 'اصلی'
              break;
            }
            default: {
              this.p2[i]['us__reltomain'] = 'اصلی'
              break;
            }
          }

        }
        // console.log(this.p2.length)
      },
      err => {
        console.error('refresh error', err);

      }
    )
  }
  ////////////////////
  showadmin() {
    var con: string[] = []
    if (this.contselected != '')
      con.push(this.contselected)
    this.api.getuserclaims(this.token_parts, con).subscribe(
      response1 => {
        this.p2 = response1;
        // console.log(response1)
        this.alertSource = new LocalDataSource(this.p2);
        for (let i = 0; i < this.p2.length; i++) {
          // console.log(this.p2[i]['us__reltomain'])
          switch (this.p2[i]['us__reltomain']) {

            case '1': {
              this.p2[i]['us__reltomain'] = 'پدر'
              break;
            }
            case '2': {
              this.p2[i]['us__reltomain'] = 'مادر'
              break;
            }
            case '3': {
              this.p2[i]['us__reltomain'] = 'همسر'
              break;
            }
            case '4': {
              this.p2[i]['us__reltomain'] = 'دختر'
              break;
            }
            case '5': {
              this.p2[i]['us__reltomain'] = 'برادر'
              break;
            }
            case '6': {
              this.p2[i]['us__reltomain'] = 'خواهر'
              break;
            }
            case '7': {
              this.p2[i]['us__reltomain'] = 'پدر بزرگ'
              break;
            }
            case '8': {
              this.p2[i]['us__reltomain'] = 'مادر بزرگ'
              break;
            }
            case '9': {
              this.p2[i]['us__reltomain'] = 'نوه'
              break;
            }
            case '10': {
              this.p2[i]['us__reltomain'] = 'پسر'
              break;
            }
            case '0': {
              this.p2[i]['us__reltomain'] = 'اصلی'
              break;
            }
            case null: {
              this.p2[i]['us__reltomain'] = 'اصلی'
              break;
            }
            default: {
              this.p2[i]['us__reltomain'] = 'اصلی'
              break;
            }
          }

        }
        // console.log(this.p2.length)
      },
      err => {
        console.error('refresh error', err);

      }
    )
  }
  ////////////////////
  showevaluator() { }
  ////////////////////
  showuser() {
    var token_parts = this.cookieService.get('T');
    /// get person auth id
    this.api.getPerson(token_parts).subscribe(
      response1 => {
        this.NID = response1[0].national_id
        this.authid = response1[0].auth_id
        this.api.getrelativeNID(token_parts, this.NID).subscribe(
          response1 => {
            this.rel = response1
            this.fillperrel(this.rel)
            this.api.getPersonPlan(token_parts).subscribe(
              response1 => {
                this.planname = response1[0].title
                var plnid = response1[0].id
                this.api.getplandetail(token_parts, plnid).subscribe(
                  response1 => {
                    this.subsrevices = response1
                    this.fillitems(this.subsrevices)
                  },
                  err => {
                    //this.router.navigate(['login']);
                    console.error('refresh error', err);
                  }
                )

              },
              err => {
                this.router.navigate(['login']);
                //console.error('refresh error', err);
              }

            )
          },
          err => {
            //this.router.navigate(['']);
            console.log('شخصی با این کد ملی وجود ندارد');
          }
        )
      },
      err => {
        //this.router.navigate(['login']);
        console.error('refresh error', err);
      }
    )
    /////////////////////////////



    //////////////////////////////

    ////////////////////////// 
    this.api.getPersonContract(token_parts).subscribe(
      response1 => {
        // console.log(response1[0])
        this.contract = response1[0].title

        this.start = ""
        var m = moment(response1[0].start_date.toString());
        if (m.isValid()) {
          m.locale('fa');
          this.start = m.format("YYYY/MM/DD");
        } else {
          this.start = "it is not valid date";
        }

        this.end = ""
        var m1 = moment(response1[0].end_date.toString());
        if (m1.isValid()) {
          m1.locale('fa');
          this.end = m1.format("YYYY/MM/DD");
        } else {
          this.end = "it is not valid date";
        }
        this.des = 'بیمه گر : ' + response1[0].insurer.name.toString()
        this.api.getContractpic(token_parts).subscribe(
          response2 => {

            this.contract_image = "http://bimeh.plus/media/" + response2[0]['contract_image'].toString()
          },
          err => {
            console.error('refresh error', err);
          }
        )



      },
      err => {
        console.error('refresh error', err);
      }
    )
  }


  fillitems(subservices: any[]) {
    if (this.isshowed) {
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
    }
  }
  public personNID = ""
  fillperrel(rel: any[]) {
    //console.log(rel)
    this.j1 = 0;
    for (let i = 0; i < rel.length; i++) {
      switch (rel[i]['reltomain']) {

        case '1': {
          rel[i]['reltomain'] = 'پدر'
          break;
        }
        case '2': {
          rel[i]['reltomain'] = 'مادر'
          break;
        }
        case '3': {
          rel[i]['reltomain'] = 'همسر'
          break;
        }
        case '4': {
          rel[i]['reltomain'] = 'دختر'
          break;
        }
        case '5': {
          rel[i]['reltomain'] = 'برادر'
          break;
        }
        case '6': {
          rel[i]['reltomain'] = 'خواهر'
          break;
        }
        case '7': {
          rel[i]['reltomain'] = 'پدر بزرگ'
          break;
        }
        case '8': {
          rel[i]['reltomain'] = 'مادر بزرگ'
          break;
        }
        case '9': {
          rel[i]['reltomain'] = 'نوه'
          break;
        }
        case '10': {
          rel[i]['reltomain'] = 'پسر'
          break;
        }
        case '0': {
          rel[i]['reltomain'] = 'اصلی'
          break;
        }
        case null: {
          rel[i]['reltomain'] = 'اصلی'
          break;
        }
        default: {
          rel[i]['reltomain'] = 'اصلی'
          break;
        }
      }

      var indx = ""
      var imgsrc = ""
      if (rel[i].picture != null && rel[i].picture != "") {
        indx = rel[i].picture.toString().indexOf("images")
        imgsrc = "http://bimeh.plus/media/" + rel[i].picture.toString().substring(indx);
      }
      if (rel[i]['reltomain'] == null) rel[i]['reltomain'] = "بیمه شده اصلی"
      this.personNID = rel[i]['national_id']
      this.perrel.push({ name: rel[i]['f_name'] + " " + rel[i]['l_name'], NID: rel[i]['national_id'], img: imgsrc, reltomain: rel[i]['reltomain'] })
      this.perrel = this.perrel.slice(0);
    }
  }

  ////////////////////////////////////
  selected: number[];
  selected1: string[];
  public ss: { name: string, accsum: string, remsum: string, tc: string, showtc: boolean, cost: string, sdate: string, id: number }[] = [];
  public authid = "";
  public ss1: string[] = [];
  public selectedflag: boolean = false;
  selecteditems: { id: number; serv: string; subserv: string; }[];
  ////////////////////////
  delete(event, hero) {
    const index: number = this.ss.indexOf(hero);
    if (index !== -1) {
      this.ss.splice(index, 1);
    }
  }
  duplicate(event, hero) {
    console.log(hero)
    this.ss.push({ name: hero.name, accsum: "0", remsum: "0", tc: "", showtc: false, cost: "", sdate: "", id: this.docid });
    this.docid++;
  }
  //// select subservices
  getValues() {
    if (this.isshowed) {
      this.selectedflag = true;
      for (let i = 0; i < this.selected.length; i++) {
        for (let j = 0; j < this.items.length; j++) {
          var f = false;
          if (this.items[j].id == this.selected[i]) {
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
              this.ss.push({ name: this.items[j].subserv.toString(), accsum: "0", remsum: "0", tc: "", showtc: false, cost: "", sdate: "", id: this.docid });
              this.docid++;
              break;
            }
          }
        }
      }
    }
  }
  //// select rel person
  getValues1() {
    if (this.isshowed) {
      this.ss1 = [];
      this.ss = [];
      this.docs = [];
      this.selectedflag = true;

      if (this.selected1 !== null) {

        // console.log(this.selected1)
        var nid = this.selected1.toString()
        sessionStorage.setItem('NID', nid);
        var token_parts = this.cookieService.get('T');
        this.api.getPlanidnid(token_parts, nid).subscribe(
          res => {

            var plnid = res[0]['pln_id'].toString()
            this.api.getplandetail(token_parts, plnid).subscribe(
              response1 => {
                this.subsrevices = response1
                this.fillitems(this.subsrevices)
                ////////////////
                this.api.getClaiminfoNID(token_parts, nid).subscribe(
                  response1 => {
                    this.claims = response1

                    for (let i = 0; i < this.claims.length; i++) {
                      for (let j = 0; j < this.servgp.length; j++) {
                        if (this.claims[i]['contract_plan_subservice__Sub_service__service__title'] == this.servgp[j].title) {
                          this.servgp[j].used = this.claims[i]['accInvoice__sum']

                        }
                      }
                    }

                    //////////////////////
                    this.api.getPlanservNID(token_parts, nid).subscribe(
                      response1 => {
                        this.svrcov = response1
                        for (let i = 0; i < this.svrcov.length; i++) {
                          for (let j = 0; j < this.servgp.length; j++) {
                            if (this.svrcov[i]['service_id__title'] == this.servgp[j].title) {

                              if (this.svrcov[i]['max_coverage'] != 0)
                                this.servgp[j].cov = this.svrcov[i]['max_coverage']
                              else
                                this.servgp[j].cov = "نامحدود"
                              //console.log(j+":"+this.servgp[j].title+"/"+this.servgp[j].cov+"/"+this.servgp[j].used)
                            }
                          }
                        }
                        console.log(this.servgp)
                        this.showclaim = true
                      },
                      err => {
                        // this.router.navigate(['login']);
                        console.error('refresh error', err);
                      }
                    )
                  },
                  err => {
                    // this.router.navigate(['login']);
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
          err => { console.error('refresh error', err); }
        )
      }
      else {
        this.showclaim = false
      }
    }
  }



  public j: number = 0;
  public showdocs: boolean = false;
  public docid: number = 0;
  loadChildComponent(event, hero) {
    // alert(this.docid)
    // console.log(this.contract + ", pln:" + this.planname + ", subsvr:" + hero + ", nid:" + this.nid + ", createby:" + this.authid)
    this.docs.push({ con: this.contract, pln: this.planname, subsvr: hero.name, nid: this.personNID, createby: this.authid, id: hero.id });
    this.showdocs = true;

    this.j++;
  }

  modalClosed(isClosed) {
    //  console.log(isClosed);
    this.docs = this.docs.filter(item => item !== isClosed);
  }
  saveClosed(isClosed, doc) {
    this.ss[isClosed[1]['id']]['tc'] = isClosed[0];
    this.ss[isClosed[1]['id']]['showtc'] = true;
    this.ss[isClosed[1]['id']]['cost'] = isClosed[2];
    this.ss[isClosed[1]['id']]['sdate'] = isClosed[3];
    this.docs = this.docs.filter(item => item !== isClosed[1]);
  }

  public svrsubs: string[] = [];
  public showsubload: boolean = false;
  j1: number = 0;
  showsubservs(event, svr) {
    this.svrsubs = [];
    this.showsubload = true;
    this.j1 = 0;
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].serv == svr) {
        this.svrsubs[this.j1] = this.items[i].subserv.valueOf();
        this.j1++;
      }

    }
  }

  countss() {
    if (this.ss.length == 0)
      this.showdocs = false;
  }
  public showprint: boolean = false;
  printPage() {
    this.showprint = false;
    var token_parts = this.cookieService.get('T');
    // console.log(this.nid)
    // console.log(this.personNID)
    this.api.getClaimNIDreport(token_parts, this.personNID).subscribe(
      res => {
        //    console.log(res)
        this.golvar.printreps = []
        for (let i = 0; i < res.length; i++) {
          this.golvar.printreps.push({ name: res[i]['user__f_name'] + " " + res[i]['user__l_name'], allc: res[i]['invoice__count'], accc: res[i]['countacc'], rejc: res[i]['countrej'], duringc: res[i]['countduring'], allsum: res[i]['suminv'], accsum: res[i]['suminvacc'] })
          this.golvar.printreps = this.golvar.printreps.slice(0);
        }
        var qr = "";
        this.golvar.printrows = []
        for (let i = 0; i < this.ss.length; i++) {
          if (this.ss[i].showtc) {
            qr += "/" + this.ss[i].tc
            var sdate = ""
            var m1 = moment(this.ss[i].sdate);
            if (m1.isValid()) {
              m1.locale('fa');
              sdate = m1.format("YYYY/MM/DD");
            } else {
              sdate = "it is not valid date";
            }
            console.log(this.ss[i])
            this.golvar.printrows.push({ row: (i + 1).toString(), tc: this.ss[i].tc, name: this.per, svr: this.ss[i].name, cost: this.ss[i].cost, date: sdate, fran: "" })
          }
        }
        sessionStorage.setItem('insurerpic', res[0]['contract_plan_subservice__contract__insurer__picture'])
        sessionStorage.setItem('compic', res[0]['user__company__picture'])

        this.golvar.printtitle = []
        this.golvar.printtitle.push({ qr: qr, nid: this.personNID, sabt: this.per, rel: this.prrel, cont: this.contract })

        this.showprint = true;
      },
      err => { console.log(err) }
    )

  }
  printclose() {
    // alert("salam")
  }

}
