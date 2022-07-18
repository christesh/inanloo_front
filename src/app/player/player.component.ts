import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { JdatePipe } from 'ngx-persian';
import { JDate } from 'ngx-persian';
import { ApiService } from '../../app/forms/layouts/basic/api.service';
import { NgbModal, ModalDismissReasons, NgbAlertConfig, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'jalali-moment';
import * as tableData from '../../app/shared/data/smart-data-table'
import { LocalDataSource } from 'ng2-smart-table';
import { DpDatePickerModule } from 'ng2-jalali-date-picker'
import { ROUTES1 } from 'app/shared/sidebar/sidebar-admin-routes.config';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  source: LocalDataSource;
  filterSource: LocalDataSource;
  alertSource3: LocalDataSource;
  constructor(private api: ApiService, private cookieService: CookieService,
    private modalService: NgbModal,
    public birthday: DpDatePickerModule) {
    this.filterSource = new LocalDataSource(tableData.filerdata);
  }
  public reguser: boolean = false;
  alertsettings3 = tableData.activeperson;
  ngOnInit() {
    this.reguser = true
    this.companyselected = false;
    this.contractselected = false;
    this.isnotmain = false;
    this.ismain = false;
    this.validnid = false;
    this.errnid = false;
    this.bskinds = []
    this.rels = []
    this.genders = []
    this.companies = []
    this.contracts = []
    this.plans = []
    this.bskind = ""
    this.rel = ""
    this.gender = ""
    this.mainnidname = ""
    this.errmsg = ""
    this.companyname = ""
    this.contarctname = ""
    this.planname = ""
    this.companyid = ""
    this.contarctid = ""
    this.planid = ""
    this.comp = ""
    this.cont = ""
    var token_parts = this.cookieService.get('T');
    this.api.getdeactiveper(token_parts).subscribe(
      res => {
        var p = res

        console.log(p)
        this.alertSource3 = new LocalDataSource(p)
      },
      err => {
        console.log(err)
      }
    )

  }
  title = 'read-excel-in-angular8';
  storeData: any;
  csvData: any;
  jsonData: any;
  textData: any;
  htmlData: any;
  fileUploaded: File;
  worksheet: any;
  closeResult: string;
  uploadedFile(event) {
    this.fileUploaded = event.target.files[0];
    this.readExcel();
  }
  uploadedFilestar(event) {
    this.fileUploaded = event.target.files[0];
    this.readExcelstar();
  }
  uploadedFilebirthdate(event) {
    this.fileUploaded = event.target.files[0];
    this.readExcelbirthdate();
  }


  public companyselected: boolean = false;
  public contractselected: boolean = false;
  public isnotmain: boolean = false;
  public ismain: boolean = false;
  public validnid: boolean = false;
  public errnid: boolean = false;
  public err1: boolean = false;
  public err2: boolean = false;
  public err3: boolean = false;
  public err4: boolean = false;
  public err5: boolean = false;
  public err6: boolean = false;
  public err7: boolean = false;
  public err8: boolean = false;
  public err9: boolean = false;
  public err10: boolean = false;
  public err11: boolean = false;
  public err12: boolean = false;
  public err13: boolean = false;
  public err14: boolean = false;
  public err15: boolean = false;
  public err16: boolean = false;
  public err17: boolean = false;
  public err18: boolean = false;
  public err19: boolean = false;
  public errmsg1 = "لطفا موارد مشخص شده را تکمیل نمائید"
  public errmsg2 = ""
  public errmsg3 = ""
  public errmsg4 = ""
  public errmsg5 = ""
  public errmsg6 = ""
  public errmsg7 = ""
  public errmsg8 = ""
  public errmsg9 = ""
  public errmsg10 = ""
  public errmsg11 = ""
  public errmsg12 = ""
  public errmsg13 = ""
  public errmsg14 = ""
  public errmsg15 = ""
  public errmsg16 = ""
  public errmsg17 = ""
  public errmsg18 = ""
  public errmsg19 = ""


  public bskinds: { id: string, name: string }[] = []
  public rels: { id: string, name: string }[] = []
  public genders: { id: string, name: string }[] = []
  public companies: { id: string, name: string }[] = []
  public contracts: { id: string, name: string }[] = []
  public plans: { id: string, name: string }[] = []
  public provinces: { id: string, name: string }[] = []
  public bskind = ""
  public rel = ""
  public relid = ""
  public gender = ""
  public genderid = ""
  public mainnidname = ""
  public errmsg = ""
  public companyname = ""
  public contarctname = ""
  public planname = ""
  public companyid = ""
  public contarctid = ""
  public planid = ""
  public comp = ""
  public cont = ""
  public plan = ""
  public persnid = ""
  public mobile = ""
  public mainnid = ""
  public address = ""
  public fname = ""
  public lname = ""
  public father = ""
  public shaba = ""
  public province = ""
  public provinceid = ""
  bskindchange() {
    if (this.bskind == "1") {
      this.isnotmain = false
      this.ismain = true
      this.companyselected = false
      this.contractselected = false
      var token_parts = this.cookieService.get('T');
      this.api.getallcompany(token_parts).subscribe(
        res => {
          for (var i = 0; i < res.length; i++) {
            this.companies.push({ id: res[i]['policy_owner_id'], name: res[i]['policy_owner__name'] })
            this.companies = this.companies.slice(0)
          }
        },
        err => {
          console.log(err)
        }
      )
    }
    else {
      this.isnotmain = true
      this.ismain = false
      this.companyselected = false
      this.contractselected = false
    }
  }
  companychange() {
    if (this.comp != "") {
      this.companyid = this.comp
      this.contracts = []
      this.companyselected = true
      this.contractselected = false
      var token_parts = this.cookieService.get('T');
      this.api.getcompanyconts(token_parts, this.comp).subscribe(
        res => {
          for (var i = 0; i < res.length; i++) {
            this.contracts.push({ id: res[i]['id'], name: res[i]['title'] })
            this.contracts = this.contracts.slice(0)
          }
        },
        err => {

        }
      )

    }
    else {
      this.companyselected = false
      this.contractselected = false
    }
  }
  contractchange() {
    if (this.cont != "") {
      this.contarctid = this.cont
      this.plans = []
      this.contractselected = true
      var token_parts = this.cookieService.get('T');
      this.api.getcontsplans(token_parts, this.cont).subscribe(
        res => {
          for (var i = 0; i < res.length; i++) {
            this.plans.push({ id: res[i]['plan_id'], name: res[i]['plan__title'] })
            this.plans = this.plans.slice(0)
          }
        },
        err => {

        }
      )

    }
    else {
      this.contractselected = false
    }
  }
  planchange() {
    if (this.plan != "") {
      this.planid = this.plan
    }
  }
  relchange() {
    if (this.rel != "") {
      this.relid = this.rel
    }
  }
  genderchange() {
    if (this.gender != "") {
      this.genderid = this.gender
    }
  }
  provincechange() {
    if (this.province != "") {
      this.provinceid = this.province
    }
  }
  checkmainuser(mainnid) {
    if (mainnid.length == 10) {
      var token_parts = this.cookieService.get('T');

      this.api.getmaindetail(token_parts, mainnid).subscribe(
        res => {
          if (res.length != 0) {
            if (res.keys[0] != "result") {
              this.errnid = false;
              this.mainnid = mainnid
              this.mainnidname = res[0]['us__f_name'] + " " + res[0]['us__l_name']
              this.companyname = res[0]['us__company__name']
              this.contarctname = res[0]['con__title']
              this.planname = res[0]['pln__title']
              this.companyid = res[0]['us__company_id']
              this.contarctid = res[0]['con_id']
              this.planid = res[0]['pln_id']
              this.validnid = true
            }
            else {
              this.errnid = true;
              this.errmsg = "شخصی با کد ملی وارد شده به عنوان سرپرست در سیستم ثبت نشده است!"
            }
          }
          else {
            this.errnid = true;
            this.errmsg = "شخصی با کد ملی وارد شده در سیستم ثبت نشده است!"
          }

        },
        err => {
          console.log(err)
        }
      )
    }
  }
  open(content) {
    var obj = content['_def']['references']
    var page = Object.keys(obj)
    if (page[0] == "content") {
      this.companyselected = false;
      this.contractselected = false;
      this.isnotmain = false;
      this.ismain = false;
      this.validnid = false;
      this.errnid = false;
      this.bskinds = []
      this.rels = []
      this.genders = []
      this.companies = []
      this.contracts = []
      this.plans = []
      this.bskind = ""
      this.rel = ""
      this.gender = ""
      this.mainnidname = ""
      this.errmsg = ""
      this.companyname = ""
      this.contarctname = ""
      this.planname = ""
      this.companyid = ""
      this.contarctid = ""
      this.planid = ""
      this.comp = ""
      this.cont = ""
      this.bskinds.push({ id: "1", name: "اصلی" })
      this.bskinds.push({ id: "2", name: "تبعی" })
      this.rels.push({ id: "1", name: "پدر" })
      this.rels.push({ id: "2", name: "مادر" })
      this.rels.push({ id: "3", name: "همسر" })
      this.rels.push({ id: "4", name: "دختر" })
      this.rels.push({ id: "10", name: "پسر" })
      this.rels.push({ id: "5", name: "برادر" })
      this.rels.push({ id: "6", name: "خواهر" })
      this.rels.push({ id: "7", name: "پدر بزرگ" })
      this.rels.push({ id: "8", name: "مادر بزرگ" })
      this.rels.push({ id: "9", name: "نوه" })
      this.genders.push({ id: "0", name: "زن" })
      this.genders.push({ id: "1", name: "مرد" })
      var token_parts = this.cookieService.get('T');
      this.api.getprovince(token_parts).subscribe(
        res => {
          for (var i = 0; i < res.length; i++) {
            this.provinces.push({ id: res[i]['id'], name: res[i]['p_name'] })
            this.provinces = this.provinces.slice(0)
          }
        },
        err => {

        }
      )

    }
    let ngbModalOptions: NgbModalOptions = {
      size: "lg",
      backdrop: 'static',
      keyboard: false,
    };

    this.modalService.open(content, ngbModalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  save() {
    var checked: boolean = false
    var contract = this.contarctid
    var plan = this.planid
    var CodeMelli = this.persnid
    var company = this.companyid
    var bskind = this.bskind
    var Nesbat
    var sarparast
    if (this.bskind == "1") {
      Nesbat = "0"
      sarparast = this.persnid
    }
    else {
      Nesbat = this.relid
      sarparast = this.mainnid
    }
    var m1 = moment(this.birthday);
    var datevizit = ""
    if (m1.isValid()) {
      m1.locale('en');
      datevizit = m1.format("YYYY-MM-DD");
    } else {
      datevizit = "it is not valid date";
    }
    var birthDate = datevizit
    var address = this.address
    var Name = this.fname
    var shaba = this.shaba
    var gender = this.genderid
    var Mobile = this.mobile
    var province = this.provinceid
    var LName = this.lname
    var FatherName = this.father
    checked = this.checkitems(contract, plan, CodeMelli, company, bskind, Nesbat, sarparast, birthDate, address, Name, shaba, gender, Mobile, province, LName, FatherName)
    if (checked) {
      this.api.register(this.persnid, this.mobile).subscribe(
        res => {
          if (res.keys[0] = "key") {
            if (res[0]["key"] != "") {

              // var token_parts = res[0]["key"]
              var token_parts = this.cookieService.get('T');

              this.api.createperson(token_parts, contract, plan, CodeMelli, company, bskind, Nesbat, sarparast, birthDate, address, Name, shaba, gender, Mobile, province, LName, FatherName).subscribe(
                res => {
                  console.log(res)
                  this.api.activeperson(token_parts, CodeMelli).subscribe(
                    res => { },
                    err => { }
                  )

                },
                err => {
                  console.log(err)
                }
              )

            }
          }
        },
        err => { }
      )
    }
  }
  checkitems(contract: string, plan: string, CodeMelli: string, company: string, bskind: string, Nesbat: string, sarparast: string, birthDate: string, address: string, Name: string, shaba: string, gender: string, Mobile: string, province: string, LName: string, FatherName: string): boolean {
    var f = 0
    if (contract == "") {
      this.err1 = true;
      this.err7 = true
      this.errmsg7 = "لطفا قرارداد را انتخاب نمائید"
      f = 1
    }
    if (plan == "") {
      this.err1 = true;
      this.err8 = true
      this.errmsg8 = "لطفا طرح را انتخاب نمائید"
      f = 1
    }
    if (CodeMelli == "") {
      this.err1 = true;
      this.err9 = true
      this.errmsg9 = "وارد کردن کدملی فرد اجباری است"
      f = 1
    }
    if (company == "") {
      this.err1 = true;
      this.err6 = true
      this.errmsg6 = "لطفا بیمه گذار را انتخاب نمائید"
      f = 1
    }
    if (bskind == "") {
      this.err1 = true;
      this.err19 = true
      this.errmsg19 = "لطفا نوع بیمه شده را انتخاب نمائید"
      f = 1
    }
    if (Nesbat = "") {
      this.err1 = true;
      this.err2 = true
      this.errmsg2 = "لطفا نسبت بیمه شده با سرپرست را انتخاب نمائید"
      f = 1
    }
    if (sarparast = "") {
      this.err1 = true;
      this.errnid = true
      this.errmsg = "لطفا کد ملی سرپرست را وارد نمائید"
      f = 1
    }
    if (birthDate == "") {
      this.err1 = true;
      this.err15 = true
      this.errmsg15 = "لطفا تاریخ تولد را انتخاب نمائید"
      f = 1
    }
    if (address == "") {
      this.err1 = true;
      this.err17 = true
      this.errmsg17 = "لطفا آدرس را وارد نمائید"
      f = 1
    }
    if (Name == "") {
      this.err1 = true;
      this.err10 = true
      this.errmsg10 = "لطفا نام فرد را وارد نمائید"
      f = 1
    }
    if (shaba == "") {
      this.err1 = true;
      this.err10 = true
      this.errmsg10 = "لطفا شماره شبا را وارد نمائید"
      f = 1
    }
    if (gender == "") {
      this.err1 = true;
      this.err13 = true
      this.errmsg13 = "لطفا جنسیت را انتخاب نمائید"
      f = 1
    }
    if (Mobile == "") {
      this.err1 = true;
      this.err14 = true
      this.errmsg14 = "لطفا شماره موبایل را وارد نمائید"
      f = 1
    }
    if (province == "") {
      this.err1 = true;
      this.err16 = true
      this.errmsg16 = "لطفا استان را انتخاب نمائید"
      f = 1
    }
    if (LName == "") {
      this.err1 = true;
      this.err11 = true
      this.errmsg11 = "لطفا نام خانوادگی را وارد نمائید"
      f = 1
    }
    if (FatherName == "") {
      this.err1 = true;
      this.err12 = true
      this.errmsg12 = "لطفا نام پدر را وارد نمائید"
      f = 1
    }
    if (f == 1) {
      return (false)
    }
    else {
      return (true)
    }
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
  public totalrow1 = 0
  public totalrow2 = 0
  public totalrow3 = 0
  public excelpath1 = ""
  public excelpath2 = ""
  readExcel() {
    this.totalrow1 = 0;
    var jj: any
    let readFile = new FileReader();
    readFile.onload = (e) => {
      console.log(e)
      this.storeData = readFile.result;
      var data = new Uint8Array(this.storeData);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      this.worksheet = workbook.Sheets[first_sheet_name];
      jj = XLSX.utils.sheet_to_json(this.worksheet, { raw: false });
      this.totalrow1 = jj.length
      jj = JSON.stringify(jj);
      console.log(jj)

    }
    readFile.readAsArrayBuffer(this.fileUploaded);
    // this.totalrow1 = jj.length
  }
  readExcelstar() {
    this.totalrow2 = 0;
    var jj: any
    let readFile = new FileReader();
    readFile.onload = (e) => {
      this.storeData = readFile.result;
      var data = new Uint8Array(this.storeData);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      this.worksheet = workbook.Sheets[first_sheet_name];
      jj = XLSX.utils.sheet_to_json(this.worksheet, { raw: false });
      this.totalrow2 = jj.length
      jj = JSON.stringify(jj);

    }
    readFile.readAsArrayBuffer(this.fileUploaded);
    // this.totalrow2 = jj.length
  }
  readExcelbirthdate(){
    this.totalrow3 = 0;
    var jj: any
    let readFile = new FileReader();
    readFile.onload = (e) => {
      this.storeData = readFile.result;
      var data = new Uint8Array(this.storeData);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      this.worksheet = workbook.Sheets[first_sheet_name];
      jj = XLSX.utils.sheet_to_json(this.worksheet, { raw: false });
      this.totalrow3 = jj.length
      jj = JSON.stringify(jj);

    }
    readFile.readAsArrayBuffer(this.fileUploaded);
    // this.totalrow2 = jj.length
  }
  readAsCSV() {
    this.csvData = XLSX.utils.sheet_to_csv(this.worksheet);
    const data: Blob = new Blob([this.csvData], { type: 'text/csv;charset=utf-8;' });
    FileSaver.saveAs(data, "CSVFile" + new Date().getTime() + '.csv');
  }
  reg() {
    this.readAsJson()
  }
  star() {
    this.readAsJsonstar()
  }
  birth(){
    this.readAsJsonbirth()
  }
  readAsJson() {
    this.jsonData = []
    this.jsonData = XLSX.utils.sheet_to_json(this.worksheet, { raw: false });
    this.jsonData = JSON.stringify(this.jsonData);
    var token_parts = this.cookieService.get('T');
    this.api.importuser(token_parts, this.jsonData).subscribe(
      res => {
        console.log(res)
        
      },
      err => {
        console.log(err)
      }
    )
    const data: Blob = new Blob([this.jsonData], { type: "application/json" });
    // FileSaver.saveAs(data, "JsonFile" + new Date().getTime() + '.json');
    console.log(this.jsonData)
  }
  public activenids: { nid: string }[] = []
  onRowSelect(event) {
    this.activenids = event.selected
  }
  aciveperson() {
    let json = JSON.stringify(this.activenids);
    console.log(json)
    var token_parts = this.cookieService.get('T');
    this.api.activepersons(token_parts, json).subscribe(
      res => {
        console.log(res)
        this.activenids=[]
        this.api.getdeactiveper(token_parts).subscribe(
          res1 => {
            var p = res1
    
            console.log(p)
            this.alertSource3 = new LocalDataSource(p)
          },
          err1 => {
            console.log(err1)
          }
        )
      },
      err => {
        console.log(err)
      }
    )
  }
  readAsJsonstar() {
    this.jsonData = []
    this.jsonData = XLSX.utils.sheet_to_json(this.worksheet, { raw: false });
    this.jsonData = JSON.stringify(this.jsonData);
    var token_parts = this.cookieService.get('T');
    this.api.setstarperson(token_parts, this.jsonData).subscribe(
      res => {
        console.log(res)

      },
      err => {
        console.log(err)

      }
    )
    const data: Blob = new Blob([this.jsonData], { type: "application/json" });
    // FileSaver.saveAs(data, "JsonFile" + new Date().getTime() + '.json');
    console.log(this.jsonData)
  }
  readAsJsonbirth() {
    this.jsonData = []
    this.jsonData = XLSX.utils.sheet_to_json(this.worksheet, { raw: false });
    this.jsonData = JSON.stringify(this.jsonData);
    var token_parts = this.cookieService.get('T');
    this.api.setbirthperson(token_parts, this.jsonData).subscribe(
      res => {
        console.log(res)

      },
      err => {
        console.log(err)

      }
    )
    const data: Blob = new Blob([this.jsonData], { type: "application/json" });
    // FileSaver.saveAs(data, "JsonFile" + new Date().getTime() + '.json');
    console.log(this.jsonData)
  }
  readAsHTML() {
    this.htmlData = XLSX.utils.sheet_to_html(this.worksheet);
    const data: Blob = new Blob([this.htmlData], { type: "text/html;charset=utf-8;" });
    FileSaver.saveAs(data, "HtmlFile" + new Date().getTime() + '.html');
  }
  readAsText() {
    this.textData = XLSX.utils.sheet_to_txt(this.worksheet);
    const data: Blob = new Blob([this.textData], { type: 'text/plain;charset=utf-8;' });
    FileSaver.saveAs(data, "TextFile" + new Date().getTime() + '.txt');
  }
}
