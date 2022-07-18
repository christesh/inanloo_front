import { Component, ViewEncapsulation, ViewChild, ElementRef, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { TaskBoardService } from './taskboard.service';
import { ApiService } from '../../app/forms/layouts/basic/api.service';
import { DragulaService } from 'ng2-dragula';
import { getMultipleValuesInSingleSelectionError, SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from '../shared/data/smart-data-table';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html',
  styleUrls: ['./taskboard.component.scss'],
  providers: [TaskBoardService],
  encapsulation: ViewEncapsulation.None
})
export class TaskboardComponent {
  constructor(
    private api: ApiService,
    private cookieService: CookieService,
  ) { }
  filtersettings = tableData.filtersettings;
  alertSource: LocalDataSource;
  public contract: { id: number, all: string, title: string }[] = []
  public plan: { id: number, all: string, title: string }[] = []
  public service: { id: number, all: string, title: string, plnid: string, conid: string }[] = []
  public subservice: { id: number, all: string, title: string, plnid: string, conid: string }[] = []
  public gender: { id: number, all: string, title: string }[] = []
  public age: { id: number, all: string, title: string }[] = []
  public rows: { id: number, title: string, atitle: string, agrigate: string, afield: string, condition: string }[] = []
  public allrows: { id: number, title: string, atitle: string, agrigate: string, afield: string, condition: string }[] = []
  public conts: number[] = []
  public plans: number[] = []
  public svrs: number[] = []
  public reporttable: any = {}
  ngOnInit() {
    this.tikcount = 0
    this.reporttable = {
      editable: false,
      pager: {
        display: true,
        perPage: 50
      },
      actions: {
        add: false,
        edit: false,
        delete: false
      },
      columns: {

      },
      attr: {
        class: "table table-responsive"
      },
      noDataMessage: "هیچ اطلاعاتی یافت نشد"
    };
    this.gender.push({ id: 0, all: "همه", title: "زن" })
    this.gender.push({ id: 1, all: "همه", title: "مرد" })
    this.age.push({ id: 1, all: "همه", title: "زیر 10 سال" })
    this.age.push({ id: 2, all: "همه", title: "10 تا 20 سال" })
    this.age.push({ id: 3, all: "همه", title: "20 تا 30 سال" })
    this.age.push({ id: 4, all: "همه", title: "30 تا 40 سال" })
    this.age.push({ id: 5, all: "همه", title: "40 تا 50 سال" })
    this.age.push({ id: 6, all: "همه", title: "50 تا 60 سال" })
    this.age.push({ id: 7, all: "همه", title: "60 تا 70 سال" })
    this.age.push({ id: 8, all: "همه", title: "بالای 70 سال" })
    this.rows.push({ id: 0, title: "تعداد نفرات استفاده کرده از خدمات", atitle: "countuserused", agrigate: "Countif", afield: "user_id", condition: "userdis" })
    this.amarflag[1] = false;
    this.rows.push({ id: 1, title: "تعداد هزینه ثبت شده", atitle: "countinv", agrigate: "Count", afield: "invoice", condition: "" })
    this.amarflag[1] = false;
    this.rows.push({ id: 2, title: "تعداد هزینه تایید شده", atitle: "countacc", agrigate: "Countif", afield: "invoice", condition: "acc" })
    this.amarflag[2] = false;
    this.rows.push({ id: 3, title: "تعداد هزینه درجریان", atitle: "countdue", agrigate: "Countif", afield: "invoice", condition: "due" })
    this.amarflag[3] = false;
    this.rows.push({ id: 4, title: "تعداد هزینه درانتظار بررسی", atitle: "countwait", agrigate: "Countif", afield: "invoice", condition: "wait" })
    this.amarflag[4] = false;
    this.rows.push({ id: 5, title: "تعداد هزینه عودت داد شده", atitle: "countrej", agrigate: "Countif", afield: "invoice", condition: "rej" })
    this.amarflag[5] = false;
    this.rows.push({ id: 6, title: "مبلغ هزینه ثبت شده", atitle: "suminv", agrigate: "Sum", afield: "invoice", condition: "" })
    this.amarflag[6] = false;
    this.rows.push({ id: 7, title: "مبلغ هزینه تایید شده", atitle: "sumacc", agrigate: "Sumif", afield: "accInvoice", condition: "acc" })
    this.amarflag[7] = false;
    this.rows.push({ id: 8, title: "مبلغ هزینه درجریان", atitle: "sumdue", agrigate: "Sumif", afield: "invoice", condition: "due" })
    this.amarflag[8] = false;
    this.rows.push({ id: 9, title: "مبلغ هزینه درانتظار بررسی", atitle: "sumwait", agrigate: "Sumif", afield: "invoice", condition: "wait" })
    this.amarflag[9] = false;
    this.rows.push({ id: 10, title: "مبلغ هزینه عودت داده شده", atitle: "sumrej", agrigate: "Sumif", afield: "invoice", condition: "rej" })
    this.amarflag[10] = false;
    this.rows.push({ id: 11, title: "درصد پوشش", atitle: "coverper", agrigate: "divif", afield: "invoice", condition: "accInvoice" })
    this.amarflag[11] = false;
    var token = this.cookieService.get('T')
    this.api.getallContract(token).subscribe(
      res => {
        for (let i = 0; res.length; i++) {
          this.contract.push({ id: res[i]['id'], all: "همه", title: res[i]['title'] })
          this.contract = this.contract.slice(0)
          this.conts.push(res[i]['id'])
          this.conts = this.conts.slice(0)
        }

      },
      err => {
        console.log(err)
      }
    )
  }
  public selected1: any[] = []
  public selected2: any[] = []
  public selected3: any[] = []
  public selected4: any[] = []
  public selected5: any[] = []
  public selected6: any[] = []
  public conflag: boolean = false;
  public plnflag: boolean = false;
  public svrflag: boolean = false;
  public subsvrflag: boolean = false;
  public genderflag: boolean = false;
  public ageflag: boolean = false;
  public concombo: boolean = false;
  public plancombo: boolean = false;
  public svrcombo: boolean = false;
  public gendercombo: boolean = false;
  public agecombo: boolean = false;
  public subsvrcombo: boolean = false;
  public optionsel: boolean = false;
  public gselect: boolean = false;
  public tikcount = 0
  public amarflag: boolean[] = []
  public amarallflag: boolean[] = []
  contractch() {

    if (this.conflag) {
      this.concombo = true
      this.optionsel = true
      this.tikcount++
      this.allrows.push({ id: 101, title: "تعداد کل نفرات ثبت نامی در قرارداد", atitle: "countusercon", agrigate: "Count", afield: "national_id", condition: "" })
      this.gselect = true
    }
    else {
      this.selected1 = []
      this.concombo = false
      this.tikcount--
      var idx = this.allrows.findIndex(obj => obj.id == 101);
      this.allrows.splice(idx, 1)
      if (this.tikcount == 0)
        this.optionsel = false
      if (this.plnflag)
        this.getallplans()
      this.plan = []
    }
  }
  planch() {
    if (this.plnflag) {
      this.plancombo = true
      this.optionsel = true
      this.tikcount++
      this.allrows.push({ id: 102, title: "تعداد کل نفرات ثبت نامی در طرح", atitle: "countuserpln", agrigate: "Count", afield: "national_id", condition: "" })
      this.gselect = true
      if (this.tikcount == 1) {
        this.getallplans()
      }

    }
    else {
      this.selected2 = []
      this.plancombo = false
      this.tikcount--
      var idx = this.allrows.findIndex(obj => obj.id == 102);
      this.allrows.splice(idx, 1)
      if (this.tikcount == 0)
        this.optionsel = false


      this.plan = []
    }
  }
  getValues1() {
    this.getplans(this.selected1)
  }
  getallplans() {
    var token = this.cookieService.get('T')
    this.api.getplancons(token, this.conts).subscribe(
      res => {
        this.plan = []
        this.plans = []
        for (let i = 0; i < res.length; i++) {
          this.plan.push({ id: res[i]['plan_id'], all: "همه", title: res[i]['plan__title'] + "//" + res[i]['contract__title'] })
          this.plan = this.plan.slice(0)
          this.plans.push(res[i]['plan_id'])
          this.plans = this.plans.slice(0)
        }
      },
      err => { console.log(err) }
    )
  }

  getplans(id: number[]) {
    var token = this.cookieService.get('T')
    this.api.getplancons(token, id).subscribe(
      res => {
        this.plan = []
        this.plans = []
        for (let i = 0; i < res.length; i++) {
          this.plan.push({ id: res[i]['plan_id'], all: "همه", title: res[i]['plan__title'] + "//" + res[i]['contract__title'] })
          this.plan = this.plan.slice(0)
          this.plans.push(res[i]['plan_id'])
          this.plans = this.plans.slice(0)
        }
        this.getsvrs(this.plans)
      },
      err => { console.log(err) }
    )
  }
  servch() {
    if (this.svrflag) {
      this.svrcombo = true
      this.optionsel = true
      this.tikcount++
      this.allrows.push({ id: 103, title: "تعداد کل نفرات ثبت نامی در تعهد", atitle: "countusersvr", agrigate: "Count", afield: "national_id", condition: "" })
      this.gselect = true
      if (this.tikcount == 1) {
        this.getallsvrs()
      }
      else {
        if (this.conflag)
          if (this.selected1.length == 0)
            this.getallsvrs()
        if (this.plnflag)
          if (this.selected2.length == 0)
            this.getallsvrs()
      }
    }
    else {
      this.selected3 = []
      this.svrcombo = false
      this.tikcount--
      var idx = this.allrows.findIndex(obj => obj.id == 103);
      this.allrows.splice(idx, 1)
      if (this.tikcount == 0)
        this.optionsel = false
    }
  }
  getValues2() {
    this.getsvrs(this.selected2)
  }
  getsvrs(id: number[]) {
    var token = this.cookieService.get('T')
    this.api.getplansvr(token, id).subscribe(
      res => {
        this.service = []
        this.svrs = []
        for (let i = 0; i < res.length; i++) {
          this.service.push({ id: res[i]['Sub_service__service_id'], all: "همه", title: res[i]['Sub_service__service__title'] + "//" + res[i]['plan__title'] + "//" + res[i]['contract__title'], plnid: res[i]['plan_id'], conid: res[i]['contract_id'] })
          this.service = this.service.slice(0)
          this.svrs.push(res[i]['Sub_service__service_id'])
          this.svrs = this.svrs.slice(0)
        }
      },
      err => { console.log(err) }
    )
  }
  getallsvrs() {
    var token = this.cookieService.get('T')
    this.api.getplancons(token, this.conts).subscribe(
      res => {
        this.plan = []
        for (let i = 0; i < res.length; i++) {
          this.plans.push(res[i]['plan_id'])
          this.plans = this.plans.slice(0)
        }
        this.api.getplansvr(token, this.plans).subscribe(
          res => {
            this.svrs = []
            this.service = []
            for (let i = 0; i < res.length; i++) {
              this.service.push({ id: res[i]['Sub_service__service_id'], all: "همه", title: res[i]['Sub_service__service__title'] + "//" + res[i]['plan__title'] + "//" + res[i]['contract__title'], plnid: res[i]['plan_id'], conid: res[i]['contract_id'] })
              this.service = this.service.slice(0)
              this.svrs.push(res[i]['Sub_service__service_id'])
              this.svrs = this.svrs.slice(0)
            }
          },
          err => { console.log(err) }
        )
      },
      err => { console.log(err) }
    )
  }
  subservch() {
    if (this.subsvrflag) {
      this.subsvrcombo = true
      this.optionsel = true
      this.tikcount++
      this.allrows.push({ id: 104, title: "تعداد کل نفرات ثبت نامی در خدمت", atitle: "countusersubsvr", agrigate: "Count", afield: "national_id", condition: "" })
      this.gselect = true
      if (this.tikcount == 1) {
        this.getallsubsvrs()
      }
      else {
        if (this.conflag)
          if (this.selected1.length == 0)
            this.getallsubsvrs()
        if (this.plnflag)
          if (this.selected2.length == 0)
            this.getallsubsvrs()
        if (this.svrflag)
          if (this.selected3.length == 0)
            this.getallsubsvrs()
      }
    }
    else {
      this.selected4 = []
      this.subsvrcombo = false
      this.tikcount--
      var idx = this.allrows.findIndex(obj => obj.id == 104);
      this.allrows.splice(idx, 1)
      if (this.tikcount == 0)
        this.optionsel = false
    }
  }
  getValues3() {
    this.getsubsvrs(this.selected3)
  }
  getallsubsvrs() {
    var token = this.cookieService.get('T')
    this.api.getplancons(token, this.conts).subscribe(
      res => {
        this.plans = []
        for (let i = 0; i < res.length; i++) {
          this.plans.push(res[i]['plan_id'])
          this.plans = this.plans.slice(0)
        }
        this.api.getplansvr(token, this.plans).subscribe(
          res => {
            this.svrs = []
            this.service = []
            for (let i = 0; i < res.length; i++) {
              this.svrs.push(res[i]['Sub_service__service_id'])
              this.svrs = this.svrs.slice(0)
            }
            this.api.getsvrsubsvr(token, this.svrs).subscribe(
              res => {
                this.subservice = []
                for (let i = 0; i < res.length; i++) {
                  this.subservice.push({ id: res[i]['Sub_service_id'], all: "همه", title: res[i]['Sub_service__title'] + "//" + res[i]['Sub_service__service__title'] + "//" + res[i]['plan__title'] + "//" + res[i]['contract__title'], plnid: res[i]['plan_id'], conid: res[i]['contract_id'] })
                  this.subservice = this.subservice.slice(0)
                }
              },
              err => { console.log(err) }
            )
          },
          err => { console.log(err) }
        )
      },
      err => { console.log(err) }
    )
  }
  getsubsvrs(id: number[]) {
    var token = this.cookieService.get('T')
    this.api.getsvrsubsvr(token, this.svrs).subscribe(
      res => {
        this.subservice = []
        for (let i = 0; i < res.length; i++) {
          this.subservice.push({ id: res[i]['Sub_service_id'], all: "همه", title: res[i]['Sub_service__title'] + "//" + res[i]['Sub_service__service__title'] + "//" + res[i]['plan__title'] + "//" + res[i]['contract__title'], plnid: res[i]['plan_id'], conid: res[i]['contract_id'] })
          this.subservice = this.subservice.slice(0)
        }
      },
      err => { console.log(err) }
    )
  }
  genderch() {
    if (this.genderflag) {
      this.gendercombo = true
      this.optionsel = true
      this.tikcount++
      this.allrows.push({ id: 105, title: "تعداد کل نفرات ثبت نامی براساس جنسیت", atitle: "countusergen", agrigate: "Count", afield: "national_id", condition: "" })
      this.gselect = true
    }
    else {
      this.gendercombo = false
      this.tikcount--
      var idx = this.allrows.findIndex(obj => obj.id == 105);
      this.allrows.splice(idx, 1)
      if (this.tikcount == 0)
        this.optionsel = false
    }
  }
  agech() {
    if (this.ageflag) {
      this.agecombo = true
      this.optionsel = true
      this.tikcount++

      this.allrows.push({ id: 106, title: "تعداد کل نفرات ثبت نامی براساس بازه سنی", atitle: "countuserage", agrigate: "Count", afield: "national_id", condition: "" })
      this.gselect = true
    }
    else {
      this.agecombo = false
      this.tikcount--
      var idx = this.allrows.findIndex(obj => obj.id == 106);
      this.allrows.splice(idx, 1)
      if (this.tikcount == 0)
        this.optionsel = false
    }
  }
  public rt: { col: string, title: string }[] = []
  amarselect(id: number) {
    if (this.amarflag[id]) {
      var idx = this.rows.findIndex(obj => obj.id == id);
      this.annotate.push({ atitle: this.rows[idx]['atitle'], agrigate: this.rows[idx]['agrigate'], afield: this.rows[idx]['afield'], condition: this.rows[idx]['condition'] })
      this.rt.push({ col: this.rows[idx]['atitle'], title: this.rows[idx]['title'] })
    }
    else {
      var idx = this.rows.findIndex(obj => obj.id == id);
      var idx1 = this.annotate.findIndex(obj => obj.atitle == this.rows[idx]['atitle']);
      this.annotate.splice(idx1, 1)
      var idx2 = this.rt.findIndex(obj => obj.col == this.rows[idx]['atitle']);
      this.rt.splice(idx2, 1)
    }
  }
  public rtall: { col: string, title: string }[] = []
  amarallselect(id: number) {
    
    if (this.amarallflag[id]) {
      var idx = this.allrows.findIndex(obj => obj.id == id);
      this.allannotate.push({ atitle: "countuser_" + this.allrows[idx]['atitle'], agrigate: "Count", afield: "us_id" })
      this.rtall.push({ col: this.allrows[idx]['atitle'], title: this.allrows[idx]['title'] })
    }
    else {
      var idx = this.allrows.findIndex(obj => obj.id == id);
      var idx2 = this.rtall.findIndex(obj => obj.col == this.allrows[idx]['atitle']);
      this.rtall.splice(idx2, 1)
    }
  }
  public groupby: string[] = []
  public annotate: { atitle: string, agrigate: string, afield: string, condition: string }[] = []
  public filterData: { field_name: string, filter_condition: string, filter_value: any[] }[] = []
  public allgroupby: string[] = []
  public allannotate: { atitle: string, agrigate: string, afield: string }[] = []
  public allfilterData: { field_name: string, filter_condition: string, filter_value: any[] }[] = []
  run() {
    this.reporttable = {
      editable: false,
      pager: {
        display: true,
        perPage: 50
      },
      actions: {
        add: false,
        edit: false,
        delete: false
      },
      columns: {

      },
      attr: {
        class: "table table-responsive"
      },
      noDataMessage: "در حال بارگذاری گزارش ..."
    };
    var col: any[] = []
    this.groupby = []
    this.filterData = []
    this.allgroupby = []
    // this.allannotate = []
    this.allfilterData = []
    //////filterdata-groupby////////////////
    if (this.conflag) {
      this.groupby.push("contract_plan_subservice__contract__title")
      this.reporttable.columns["contract_plan_subservice__contract__title"] = { title: 'عنوان قرارداد' };
      this.allgroupby.push("con__title")
      var val = []
      for (let i = 0; i < this.selected1.length; i++) {
        val.push(this.selected1[i])
      }
      this.filterData.push({ field_name: "contract_plan_subservice__contract_id", filter_condition: "equaln", filter_value: val })
      this.allfilterData.push({ field_name: "con_id", filter_condition: "equaln", filter_value: val })
    }
    if (this.plnflag) {
      this.groupby.push("contract_plan_subservice__plan__title")
      this.reporttable.columns["contract_plan_subservice__plan__title"] = { title: 'عنوان طرح' };
      this.allgroupby.push("pln__title")
      var val = []
      for (let i = 0; i < this.selected2.length; i++) {
        val.push(this.selected2[i])
      }
      this.filterData.push({ field_name: "contract_plan_subservice__plan_id", filter_condition: "equaln", filter_value: val })
      this.allfilterData.push({ field_name: "pln_id", filter_condition: "equaln", filter_value: val })
    }
    if (this.genderflag) {
      this.groupby.push("user__gender")
      this.reporttable.columns["user__gender"] = { title: 'جنسیت' };
      this.allgroupby.push("us__gender")
      var val = []
      for (let i = 0; i < this.selected5.length; i++) {
        val.push(this.selected5[i])
      }
      this.filterData.push({ field_name: "user__gender", filter_condition: "equaln", filter_value: val })
      this.allfilterData.push({ field_name: "us__gender", filter_condition: "equaln", filter_value: val })
    }
    if (this.ageflag) {
      this.groupby.push("user__agerang")
      this.reporttable.columns["user__agerang"] = { title: 'بازه سنی' };
      this.allgroupby.push("us__agerang")
      var val = []
      for (let i = 0; i < this.selected6.length; i++) {
        val.push(this.selected6[i])
      }
      this.filterData.push({ field_name: "user__agerang", filter_condition: "equaln", filter_value: val })
      this.allfilterData.push({ field_name: "us__agerang", filter_condition: "equaln", filter_value: val })
    }
    var s: boolean = false
    if (this.svrflag) {
      this.groupby.push("contract_plan_subservice__contract__title")
      this.groupby.push("contract_plan_subservice__plan__title")
      this.groupby.push("contract_plan_subservice__Sub_service__service__title")
      this.reporttable.columns["contract_plan_subservice__Sub_service__service__title"] = { title: 'عنوان تعهد' };
      this.allgroupby.push("con__title")
      this.allgroupby.push("pln__title")
      var val = []
      var allvalpln = []
      var allvalcon = []
      for (let i = 0; i < this.selected3.length; i++) {
        val.push(this.selected3[i])
        var idx = this.service.findIndex(obj => obj.id == this.selected3[i]);
        allvalpln.push(this.service[idx]['plnid'])
        allvalcon.push(this.service[idx]['conid'])
      }
      this.filterData.push({ field_name: "contract_plan_subservice__Sub_service__service_id", filter_condition: "equaln", filter_value: val })
      this.allfilterData.push({ field_name: "pln_id", filter_condition: "equaln", filter_value: allvalpln })
      if (!this.conflag && !this.plnflag) {
        s = true
        this.allgroupby.push("con__title", "pln__title")
        this.allfilterData.push({ field_name: "pln_id", filter_condition: "equaln", filter_value: allvalpln })
        this.allfilterData.push({ field_name: "con_id", filter_condition: "equaln", filter_value: allvalcon })
      }

    }
    if (this.subsvrflag) {
      this.groupby.push("contract_plan_subservice__contract__title")
      this.groupby.push("contract_plan_subservice__plan__title")
      this.groupby.push("contract_plan_subservice__Sub_service__title")
      this.reporttable.columns["contract_plan_subservice__Sub_service__title"] = { title: 'عنوان خدمت' };
      this.allgroupby.push("con__title")
      this.allgroupby.push("pln__title")
      var val = []
      var allvalpln = []
      var allvalcon = []
      for (let i = 0; i < this.selected4.length; i++) {
        val.push(this.selected4[i])
        var idx = this.subservice.findIndex(obj => obj.id == this.selected4[i]);
        allvalpln.push(this.subservice[idx]['plnid'])
        allvalcon.push(this.subservice[idx]['conid'])
      }
      this.filterData.push({ field_name: "contract_plan_subservice__Sub_service_id", filter_condition: "equaln", filter_value: val })
      this.allfilterData.push({ field_name: "pln_id", filter_condition: "equaln", filter_value: allvalpln })
      if (!s) {
        if (!this.conflag && !this.plnflag) {
          s = true
          this.allgroupby.push("con__title", "pln__title")
          this.allfilterData.push({ field_name: "pln_id", filter_condition: "equaln", filter_value: allvalpln })
          this.allfilterData.push({ field_name: "con_id", filter_condition: "equaln", filter_value: allvalcon })
        }
      }
    }
    
    /////////annotate/////////////
    // this.annotate.push({ atitle: "countinv", agrigate: "Count", afield: "invoice" })
    console.log(this.rt)
    for (let i = 0; i < this.rtall.length; i++) {
      this.reporttable.columns[this.rtall[i]['col']] = { title: this.rtall[i]['title'] };
    }
    for (let i = 0; i < this.rt.length; i++) {
      this.reporttable.columns[this.rt[i]['col']] = { title: this.rt[i]['title'] };
    }

    var allgroupbytemp = []
    var allfilterDatatemp = []
    var token = this.cookieService.get('T')
    var tbls: any[] = []


    ///////////makereport////////////
// console.log(this.annotate)
// console.log(this.filterData)
// console.log(this.groupby)
    this.api.dynareport(token, this.annotate, this.groupby, this.filterData).subscribe(
      res => {
        var rep = res
        this.setreporttable()
        for (let i = 0; i < rep.length; i++) {
          for (let j = 0; j < this.annotate.length; j++)
          {
            console.log(rep[i][this.annotate[j]['atitle']])
           if(rep[i][this.annotate[j]['atitle']]!=null)
            rep[i][this.annotate[j]['atitle']] = rep[i][this.annotate[j]['atitle']].toLocaleString()
            else
            rep[i][this.annotate[j]['atitle']] =0
          }
        }
        if (this.genderflag) {
          for (let i = 0; i < rep.length; i++) {
            switch (rep[i]['user__gender']) {
              case '0':
                rep[i]['user__gender'] = "زن"
                break
              case '1':
                rep[i]['user__gender'] = "مرد"
                break
            }
          }
        }
        if (this.ageflag) {
          for (let i = 0; i < rep.length; i++) {
            switch (rep[i]['user__agerang']) {
              case 1:
                rep[i]['user__agerang'] = "زیر 10 سال"
                break
              case 2:
                rep[i]['user__agerang'] = "10 تا 20 سال"
                break
              case 3:
                rep[i]['user__agerang'] = "20 تا 30 سال"
                break
              case 4:
                rep[i]['user__agerang'] = "30 تا 40 سال"
                break
              case 5:
                rep[i]['user__agerang'] = "40 تا 50 سال"
                break
              case 6:
                rep[i]['user__agerang'] = "50 تا 60 سال"
                break
              case 7:
                rep[i]['user__agerang'] = "بالای 70 سال"
                break
            }
          }
        }
        var repkey = Object.keys(rep)
        console.log(this.allgroupby)
        if (this.rtall.length == 0) {
          this.alertSource = new LocalDataSource(rep);
          this.exceljson=rep
        }
        else {
          console.log(this.allgroupby)
          for (let i = 0; i < this.allgroupby.length; i++) {
            allgroupbytemp.push(this.allgroupby[i])
            allfilterDatatemp.push(this.allfilterData[i])
            var allannotatetemp = [{ atitle: this.rtall[i]['col'], agrigate: 'Count', afield: 'us_id' }]
            console.log(allannotatetemp)
            this.api.alldynareport(token, allannotatetemp, allgroupbytemp, allfilterDatatemp).subscribe(
              res => {
                if (this.genderflag) {
                  for (let i = 0; i < res.length; i++) {
                    switch (res[i]['us__gender']) {
                      case '0':
                        res[i]['us__gender'] = "زن"
                        break
                      case '1':
                        res[i]['us__gender'] = "مرد"
                        break
                    }
                  }
                }
                if (this.ageflag) {
                  for (let i = 0; i < res.length; i++) {
                    switch (res[i]['us__agerang']) {
                      case 1:
                        res[i]['us__agerang'] = "زیر 10 سال"
                        break
                      case 2:
                        res[i]['us__agerang'] = "10 تا 20 سال"
                        break
                      case 3:
                        res[i]['us__agerang'] = "20 تا 30 سال"
                        break
                      case 4:
                        res[i]['us__agerang'] = "30 تا 40 سال"
                        break
                      case 5:
                        res[i]['us__agerang'] = "40 تا 50 سال"
                        break
                      case 6:
                        res[i]['us__agerang'] = "50 تا 60 سال"
                        break
                      case 7:
                        res[i]['us__agerang'] = "بالای 70 سال"
                        break
                    }
                  }
                }
                var reskey = Object.keys(res[0])
                var repkey = Object.keys(rep[0])
                for (let k = 0; k < res.length; k++)
                  for (let j = 0; j < rep.length; j++) {
                    switch (reskey.length - 2) {
                      case 0:

                        if (rep[j][repkey[0]] == res[k][reskey[0]]) {
                          rep[j][reskey[reskey.length - 1]] = res[k][reskey[reskey.length - 1]]
                        }
                        break;
                      case 1:
                       
                        if (rep[j][repkey[0]] == res[k][reskey[0]] && rep[j][repkey[1]] == res[k][reskey[1]]) {
                          rep[j][reskey[reskey.length - 1]] = res[k][reskey[reskey.length - 1]]
                        }
                        break;
                      case 2:

                        if (rep[j][repkey[0]] == res[k][reskey[0]] && rep[j][repkey[1]] == res[k][reskey[1]] && rep[j][repkey[2]] == res[k][reskey[2]]) {
                          rep[j][reskey[reskey.length - 1]] = res[k][reskey[reskey.length - 1]]
                        }
                        break;
                      case 3:

                        if (rep[j][repkey[0]] == res[k][reskey[0]] && rep[j][repkey[1]] == res[k][reskey[1]] && rep[j][repkey[2]] == res[k][reskey[2]] && rep[j][repkey[3]] == res[k][reskey[3]]) {
                          rep[j][reskey[reskey.length - 1]] = res[k][reskey[reskey.length - 1]]
                        }
                        break;

                      case 4:

                        if (rep[j][repkey[0]] == res[k][reskey[0]] && rep[j][repkey[1]] == res[k][reskey[1]] && rep[j][repkey[2]] == res[k][reskey[2]] && rep[j][repkey[3]] == res[k][reskey[3]] && rep[j][repkey[4]] == res[k][reskey[4]]) {
                          rep[j][reskey[reskey.length - 1]] = res[k][reskey[reskey.length - 1]]
                        }
                        break;

                      case 5:

                        if (rep[j][repkey[0]] == res[k][reskey[0]] && rep[j][repkey[1]] == res[k][reskey[1]] && rep[j][repkey[2]] == res[k][reskey[2]] && rep[j][repkey[3]] == res[k][reskey[3]] && rep[j][repkey[4]] == res[k][reskey[4]] && rep[j][repkey[5]] == res[k][reskey[5]]) {
                          rep[j][reskey[reskey.length - 1]] = res[k][reskey[reskey.length - 1]]
                        }
                        break;

                    }
                    this.alertSource = new LocalDataSource(rep);
                    this.exceljson=rep
                  }
              },
              err => {
                console.log(err)

              }
            )


          }
        }
      },
      err => {
        console.log(err)
      }
    )
    // this.setreporttable()
  }
  public tablesetting
  public showtable: boolean = false
  setreporttable() {
    this.tablesetting = Object.assign({}, this.reporttable);
    this.showtable = true;
  }

  EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  EXCEL_EXTENSION = '.xlsx';
  exportxls() {
      console.log(this.tablesetting)
      var keysoftblcolumn = Object.keys(this.tablesetting.columns)
      console.log(keysoftblcolumn)
      var keysofjsoncolumn = Object.keys(this.exceljson[0])
      console.log(keysofjsoncolumn)
      for (let i = 0; i < this.exceljson.length; i++) {
          var keysofjsoncolumn = Object.keys(this.exceljson[i])
          for (let j = 0; j < keysofjsoncolumn.length; j++){
             console.log(this.tablesetting.columns[keysofjsoncolumn[j]].title)
             console.log(keysofjsoncolumn[j])
             this.exceljson[i][this.tablesetting.columns[keysofjsoncolumn[j]].title]=this.exceljson[i][keysofjsoncolumn[j]]
             delete this.exceljson[i][keysofjsoncolumn[j]]
          }
      }
      this.exportAsExcelFile(this.exceljson, "Report")
  }
  public exportAsExcelFile(json: any[], excelFileName: string): void {
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
      console.log('worksheet', worksheet);
      const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
      this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  private saveAsExcelFile(buffer: any, fileName: string): void {
      const data: Blob = new Blob([buffer], {
          type: this.EXCEL_TYPE
      });
      FileSaver.saveAs(data, fileName  + this.EXCEL_EXTENSION);
  }
  public exceljson:any[]=[]
  clear(){
    this.showtable=false
    var ntbl=[]
    this.alertSource=new LocalDataSource(ntbl);
    this.exceljson=ntbl
    this.selected1= []
    this.selected2= []
    this.selected3= []
    this.selected4= []
    this.selected5= []
    this.selected6= []
    this.conflag= false;
    this.plnflag= false;
    this.svrflag= false;
    this.subsvrflag= false;
    this.genderflag= false;
    this.ageflag =false;
    this.concombo =false;
    this.plancombo= false;
    this.svrcombo= false;
    this.gendercombo= false;
    this.agecombo= false;
    this.subsvrcombo= false;
    this.optionsel= false;
    this.gselect= false;
    this.tikcount = 0
    this.amarflag = []
    this.amarallflag = []
    this.contract = []
    this.plan = []
    this.service = []
    this.subservice = []
    this.gender = []
    this.age = []
    this.rows= []
    this.allrows = []
    this.conts = []
    this.plans = []
    this.svrs = []
    this.reporttable = {}
    this.tikcount = 0
    this.reporttable = {
      editable: false,
      pager: {
        display: true,
        perPage: 50
      },
      actions: {
        add: false,
        edit: false,
        delete: false
      },
      columns: {

      },
      attr: {
        class: "table table-responsive"
      },
      noDataMessage: "هیچ اطلاعاتی یافت نشد"
    };
    this.gender.push({ id: 0, all: "همه", title: "زن" })
    this.gender.push({ id: 1, all: "همه", title: "مرد" })
    this.age.push({ id: 1, all: "همه", title: "زیر 10 سال" })
    this.age.push({ id: 2, all: "همه", title: "10 تا 20 سال" })
    this.age.push({ id: 3, all: "همه", title: "20 تا 30 سال" })
    this.age.push({ id: 4, all: "همه", title: "30 تا 40 سال" })
    this.age.push({ id: 5, all: "همه", title: "40 تا 50 سال" })
    this.age.push({ id: 6, all: "همه", title: "50 تا 60 سال" })
    this.age.push({ id: 7, all: "همه", title: "60 تا 70 سال" })
    this.age.push({ id: 8, all: "همه", title: "بالای 70 سال" })
    this.rows.push({ id: 0, title: "تعداد نفرات استفاده کرده از خدمات", atitle: "countuserused", agrigate: "Countif", afield: "user_id", condition: "userdis" })
    this.amarflag[1] = false;
    this.rows.push({ id: 1, title: "تعداد هزینه ثبت شده", atitle: "countinv", agrigate: "Count", afield: "invoice", condition: "" })
    this.amarflag[1] = false;
    this.rows.push({ id: 2, title: "تعداد هزینه تایید شده", atitle: "countacc", agrigate: "Countif", afield: "invoice", condition: "acc" })
    this.amarflag[2] = false;
    this.rows.push({ id: 3, title: "تعداد هزینه درجریان", atitle: "countdue", agrigate: "Countif", afield: "invoice", condition: "due" })
    this.amarflag[3] = false;
    this.rows.push({ id: 4, title: "تعداد هزینه درانتظار بررسی", atitle: "countwait", agrigate: "Countif", afield: "invoice", condition: "wait" })
    this.amarflag[4] = false;
    this.rows.push({ id: 5, title: "تعداد هزینه عودت داد شده", atitle: "countrej", agrigate: "Countif", afield: "invoice", condition: "rej" })
    this.amarflag[5] = false;
    this.rows.push({ id: 6, title: "مبلغ هزینه ثبت شده", atitle: "suminv", agrigate: "Sum", afield: "invoice", condition: "" })
    this.amarflag[6] = false;
    this.rows.push({ id: 7, title: "مبلغ هزینه تایید شده", atitle: "sumacc", agrigate: "Sumif", afield: "accInvoice", condition: "acc" })
    this.amarflag[7] = false;
    this.rows.push({ id: 8, title: "مبلغ هزینه درجریان", atitle: "sumdue", agrigate: "Sumif", afield: "invoice", condition: "due" })
    this.amarflag[8] = false;
    this.rows.push({ id: 9, title: "مبلغ هزینه درانتظار بررسی", atitle: "sumwait", agrigate: "Sumif", afield: "invoice", condition: "wait" })
    this.amarflag[9] = false;
    this.rows.push({ id: 10, title: "مبلغ هزینه عودت داده شده", atitle: "sumrej", agrigate: "Sumif", afield: "invoice", condition: "rej" })
    this.amarflag[10] = false;
    this.rows.push({ id: 11, title: "درصد پوشش", atitle: "coverper", agrigate: "divif", afield: "invoice", condition: "accInvoice" })
    this.amarflag[11] = false;
    this.rt=[]
    this.rtall=[]
    var token = this.cookieService.get('T')
    this.api.getallContract(token).subscribe(
      res => {
        for (let i = 0; res.length; i++) {
          this.contract.push({ id: res[i]['id'], all: "همه", title: res[i]['title'] })
          this.contract = this.contract.slice(0)
          this.conts.push(res[i]['id'])
          this.conts = this.conts.slice(0)
        }

      },
      err => {
        console.log(err)
      }
    )
  }
}

