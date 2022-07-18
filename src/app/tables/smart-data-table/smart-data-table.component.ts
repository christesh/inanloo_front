import { Component, ViewEncapsulation, Output, OnInit } from '@angular/core';
import * as tableData from '../../shared/data/smart-data-table';
import { LocalDataSource } from 'ng2-smart-table';
import { ApiService } from '../../login/loginbox/api.service';
import { GlobalvarService } from '../../globalvar.service';
import { CookieService } from 'ngx-cookie-service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { JdatePipe } from 'ngx-persian';
import { JDate } from 'ngx-persian';
import * as moment from 'jalali-moment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-smart-data-table',
    templateUrl: './smart-data-table.component.html',
    styleUrls: ['./smart-data-table.component.scss'],
    encapsulation: ViewEncapsulation.None
})

export class SmartTableComponent {
    source: LocalDataSource;
    filterSource: LocalDataSource;
    alertSource: LocalDataSource;
    alertSource1: LocalDataSource;
    alertSource2: LocalDataSource;
    alertSource3: LocalDataSource;
    public superadmin: boolean;
    public admin: boolean;
    public insured: boolean;
    public user: boolean;
    public evaluator: boolean;
    public segalemp: boolean;

    constructor(
        private api: ApiService,
        private golvar: GlobalvarService,
        private cookieService: CookieService
    ) {
        // this.source = new LocalDataSource(tableData.data); // create the source
        this.getdata()
        this.filterSource = new LocalDataSource(tableData.filerdata); // create the source
        // this.alertSource = new LocalDataSource(tableData.alertdata); // create the source
    }

    ngOnInit() {

    }
    modalClosed(isClosed) {
        var cb = sessionStorage.getItem("closeb")
        this.showdetial = false;
        if (cb == "save") {
            this.p2 = []
            this.p3 = []
            this.p4 = []
            this.p5 = []
            this.alertSource3 = new LocalDataSource(this.p5);
            this.alertSource2 = new LocalDataSource(this.p3);
            this.alertSource1 = new LocalDataSource(this.p4);
            this.alertSource = new LocalDataSource(this.p2);
            this.getdata()
        }
    }
    //settings = tableData.settings;
    filtersettings = tableData.filtersettings;
    alertsettings = tableData.usertable;
    alertsettings1 = tableData.admintable;
    alertsettings2 = tableData.insuredtable;

    public p2: any;
    public p3: any;
    public p4: any;
    public p5: any;
    public token_parts: string;
    public nid: string;
    public contracts: { id: string, name: string }[] = []
    public usercont: string[] = []
    selectcon() {
        this.getdata()
    }
    getdata() {
        this.superadmin = false;
        this.admin = false;
        this.insured = false;
        this.user = false;
        this.evaluator = false;
        this.token_parts = this.cookieService.get('T');
        this.api.getPersonauth(this.token_parts).subscribe(
            response1 => {
                this.p2 = response1[0].catrgory;
                this.nid = response1[0].person;
                sessionStorage.setItem("evlnid", this.nid)
                this.golvar.authcat = this.p2.toString();
                switch (this.golvar.authcat) {
                    case "1":
                        {
                            this.superadmin = true;
                            this.showsuperadmin();
                            break;
                        }
                    case "2":
                        {
                            this.insured = true;
                            this.showinsured();
                            break;
                        }
                    case "3":
                        {

                            this.user = true;
                            this.showuser();
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
                                        var idx = res[i]['accesskind'].indexOf("/3")
                                        if (idx != -1) {
                                            this.usercont.push(res[i]['contract_id'])
                                            this.usercont = this.usercont.slice(0)
                                            this.contracts.push({ id: res[i]['contract_id'], name: res[i]['contract_id__title'] })
                                            this.contracts = this.contracts.slice(0)
                                        }
                                    }
                                    this.segalemp = true;
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
    public contselected = ""
    showuser() {
        this.api.getrelativeclaimNID(this.token_parts, this.nid).subscribe(
            response1 => {
                this.p2 = response1;
                this.alertSource = new LocalDataSource(this.p2);
                for (let i = 0; i < this.p2.length; i++) {
                    var output = "";
                    var output1 = "";
                    var gdate = this.p2[i]['create_at'].substring(0, 10);
                    var gtime = this.p2[i]['create_at'].substring(11, 19);
                    var m = moment(gdate);
                    if (m.isValid()) {
                        m.locale('fa');
                        output = m.format("YYYY/MM/DD");
                    } else {
                        output = "it is not valid date";
                    }
                    this.p2[i]['create_at'] = output + " " + gtime
                    var gdate1 = this.p2[i]['date']
                    var m1 = moment(gdate1);
                    if (m1.isValid()) {
                        m1.locale('fa');
                        output1 = m1.format("YYYY/MM/DD");
                    } else {
                        output1 = "it is not valid date";
                    }
                    this.p2[i]['date'] = output1
                    if (this.p2[i]['invoice'] != null)
                        this.p2[i]['invoice'] = this.p2[i]['invoice'].toLocaleString()
                    if (this.p2[i]['accInvoice'] != null)
                        this.p2[i]['accInvoice'] = this.p2[i]['accInvoice'].toLocaleString()
                    else
                        this.p2[i]['accInvoice'] = "-"
                    switch (this.p2[i]['status']) {
                        case '1': {
                            this.p2[i]['status'] = 'در انتظار بررسی'
                            break;
                        }
                        case '2': {
                            this.p2[i]['status'] = 'انتظار دریافت اصل مدارک'
                            break;
                        }
                        case '3': {
                            this.p2[i]['status'] = 'نقص در مدارک'
                            break;
                        }
                        case '4': {
                            this.p2[i]['status'] = 'ارزیابی و کارشناسی مبلغ'
                            break;
                        }
                        case '5': {
                            this.p2[i]['status'] = 'ارسال به مالی'
                            break;
                        }
                        case '6': {
                            this.p2[i]['status'] = 'عودت داده شد'
                            break;
                        }
                        case '7': {
                            this.p2[i]['status'] = 'پرداخت شده'
                            break;
                        }
                    }
                    switch (this.p2[i]['user__reltomain']) {

                        case '1': {
                            this.p2[i]['user__reltomain'] = 'پدر'
                            break;
                        }
                        case '2': {
                            this.p2[i]['user__reltomain'] = 'مادر'
                            break;
                        }
                        case '3': {
                            this.p2[i]['user__reltomain'] = 'همسر'
                            break;
                        }
                        case '4': {
                            this.p2[i]['user__reltomain'] = 'دختر'
                            break;
                        }
                        case '5': {
                            this.p2[i]['user__reltomain'] = 'برادر'
                            break;
                        }
                        case '6': {
                            this.p2[i]['user__reltomain'] = 'خواهر'
                            break;
                        }
                        case '7': {
                            this.p2[i]['user__reltomain'] = 'پدر بزرگ'
                            break;
                        }
                        case '8': {
                            this.p2[i]['user__reltomain'] = 'مادر بزرگ'
                            break;
                        }
                        case '9': {
                            this.p2[i]['user__reltomain'] = 'نوه'
                            break;
                        }
                        case '10': {
                            this.p2[i]['user__reltomain'] = 'پسر'
                            break;
                        }
                        case '0': {
                            this.p2[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        case null: {
                            this.p2[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        default: {
                            this.p2[i]['user__reltomain'] = 'اصلی'
                            break;
                        }

                    }
                }
                console.log(this.p2.length)
            },
            err => {
                console.error('refresh error', err);

            }
        )
    }
    showsuperadmin() {
        var con: string[] = []
        if (this.contselected != '')
            con.push(this.contselected)
        else
            if (this.usercont.length != 0)
                con = this.usercont
        this.api.getclaimseteraz(this.token_parts, con).subscribe(
            response1 => {
                this.p5 = response1;
                for (let i = 0; i < this.p5.length; i++) {
                    var output = "";
                    var output1 = "";
                    var dup = this.p5[i]['duplicatecalim']
                    if (dup != "") {
                        this.alertsettings1['columns']['trackingـcode']
                    }
                    var gdate = this.p5[i]['create_at'].substring(0, 10);
                    var gtime = this.p5[i]['create_at'].substring(11, 19);
                    var m = moment(gdate);
                    if (m.isValid()) {
                        m.locale('fa');
                        output = m.format("YYYY/MM/DD");
                    } else {
                        output = "it is not valid date";
                    }
                    this.p5[i]['create_at'] = output + " " + gtime
                    if (this.p5[i]['invoice'] != null)
                        this.p5[i]['invoice'] = this.p5[i]['invoice'].toLocaleString()
                    if (this.p5[i]['accInvoice'] != null)
                        this.p5[i]['accInvoice'] = this.p5[i]['accInvoice'].toLocaleString()
                    else
                        this.p5[i]['accInvoice'] = "-"
                    var gdate1 = this.p5[i]['date']
                    var m1 = moment(gdate1);
                    if (m1.isValid()) {
                        m1.locale('fa');
                        output1 = m1.format("YYYY/MM/DD");
                    } else {
                        output1 = "it is not valid date";
                    }
                    this.p5[i]['date'] = output1
                    switch (this.p5[i]['status']) {

                        case '1': {
                            this.p5[i]['status'] = 'در انتظار بررسی'
                            break;
                        }
                        case '2': {
                            this.p5[i]['status'] = 'انتظار دریافت اصل مدارک'
                            break;
                        }
                        case '3': {
                            this.p5[i]['status'] = 'نقص در مدارک'
                            break;
                        }
                        case '4': {
                            this.p5[i]['status'] = 'ارزیابی و کارشناسی مبلغ'
                            break;
                        }
                        case '5': {
                            this.p5[i]['status'] = 'ارسال به مالی'
                            break;
                        }
                        case '6': {
                            this.p5[i]['status'] = 'عودت داده شد'
                            break;
                        }
                        case '7': {
                            this.p5[i]['status'] = 'پرداخت شده'
                            break;
                        }
                    }
                    switch (this.p5[i]['user__reltomain']) {

                        case '1': {
                            this.p5[i]['user__reltomain'] = 'پدر'
                            break;
                        }
                        case '2': {
                            this.p5[i]['user__reltomain'] = 'مادر'
                            break;
                        }
                        case '3': {
                            this.p5[i]['user__reltomain'] = 'همسر'
                            break;
                        }
                        case '4': {
                            this.p5[i]['user__reltomain'] = 'دختر'
                            break;
                        }
                        case '5': {
                            this.p5[i]['user__reltomain'] = 'برادر'
                            break;
                        }
                        case '6': {
                            this.p5[i]['user__reltomain'] = 'خواهر'
                            break;
                        }
                        case '7': {
                            this.p5[i]['user__reltomain'] = 'پدر بزرگ'
                            break;
                        }
                        case '8': {
                            this.p5[i]['user__reltomain'] = 'مادر بزرگ'
                            break;
                        }
                        case '9': {
                            this.p5[i]['user__reltomain'] = 'نوه'
                            break;
                        }
                        case '10': {
                            this.p5[i]['user__reltomain'] = 'پسر'
                            break;
                        }
                        case '0': {
                            this.p5[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        case null: {
                            this.p5[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        default: {
                            this.p5[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                    }
                    var accdate = this.p5[i]['acc_date']
                    if (accdate != "" && accdate != null) {
                        var gdate = accdate.substring(0, 10);
                        var gtime = accdate.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p5[i]['acc_date'] = output + " " + gtime
                    }
                    var ttpay = this.p5[i]['timetopay']
                    if (ttpay != "" && ttpay != null) {
                        var gdate = ttpay.substring(0, 10);
                        var gtime = ttpay.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p5[i]['timetopay'] = output + " " + gtime
                    }
                    this.alertSource3 = new LocalDataSource(this.p5);
                    // if (this.p5[i]['acc_date'] != null) {
                    //     var gdate1 = this.p5[i]['acc_date'].substring(0, 10);
                    //     var gtime1 = this.p5[i]['acc_date'].substring(11, 19);
                    //     var f = gdate1 + " " + gtime1;
                    //     // this.api.chdays(this.token_parts, f).subscribe(
                    //     //     res => {
                    //     //         console.log(res)

                    //     //         this.p5[i]['acc_date'] = res
                    //     //         var gdate = res.substring(0, 10);
                    //     //         var gtime = res.substring(11, 19);
                    //     //         var m = moment(gdate);
                    //     //         if (m.isValid()) {
                    //     //             m.locale('fa');
                    //     //             output = m.format("YYYY/MM/DD");
                    //     //         } else {
                    //     //             output = "it is not valid date";
                    //     //         }
                    //     //         this.p5[i]['acc_date'] = output + " " + gtime
                    //     //         this.alertSource3 = new LocalDataSource(this.p5);

                    //     //     },
                    //     //     err => {

                    //     //     }
                    //     // )
                    // }
                    // else {
                    //     this.p5[i]['acc_date'] = ""
                    //     this.alertSource3 = new LocalDataSource(this.p5);
                    // }
                }
                console.log(this.p5.length)
            },
            err => {
                console.error('refresh error', err);

            }
        )
        this.api.getclaimsnew(this.token_parts, con).subscribe(
            response1 => {
                console.log(response1)
                this.p2 = response1;
                for (let i = 0; i < this.p2.length; i++) {
                    var output = "";
                    var output1 = "";
                    var dup = this.p2[i]['duplicatecalim']
                    if (dup != "") {
                        this.alertsettings1['columns']['trackingـcode']
                    }
                    var gdate = this.p2[i]['create_at'].substring(0, 10);
                    var gtime = this.p2[i]['create_at'].substring(11, 19);
                    var m = moment(gdate);
                    if (m.isValid()) {
                        m.locale('fa');
                        output = m.format("YYYY/MM/DD");
                    } else {
                        output = "it is not valid date";
                    }
                    this.p2[i]['create_at'] = output + " " + gtime

                    var gdate1 = this.p2[i]['date']
                    var m1 = moment(gdate1);
                    if (m1.isValid()) {
                        m1.locale('fa');
                        output1 = m1.format("YYYY/MM/DD");
                    } else {
                        output1 = "it is not valid date";
                    }
                    if (this.p2[i]['invoice'] != null)
                        this.p2[i]['invoice'] = this.p2[i]['invoice'].toLocaleString()
                    if (this.p2[i]['accInvoice'] != null)
                        this.p2[i]['accInvoice'] = this.p2[i]['accInvoice'].toLocaleString()
                    else
                        this.p2[i]['accInvoice'] = "-"
                    this.p2[i]['date'] = output1
                    switch (this.p2[i]['status']) {

                        case '1': {
                            this.p2[i]['status'] = 'در انتظار بررسی'
                            break;
                        }
                        case '2': {
                            this.p2[i]['status'] = 'انتظار دریافت اصل مدارک'
                            break;
                        }
                        case '3': {
                            this.p2[i]['status'] = 'نقص در مدارک'
                            break;
                        }
                        case '4': {
                            this.p2[i]['status'] = 'ارزیابی و کارشناسی مبلغ'
                            break;
                        }
                        case '5': {
                            this.p2[i]['status'] = 'ارسال به مالی'
                            break;
                        }
                        case '6': {
                            this.p2[i]['status'] = 'عودت داده شد'
                            break;
                        }
                        case '7': {
                            this.p2[i]['status'] = 'پرداخت شده'
                            break;
                        }
                    }
                    switch (this.p2[i]['user__reltomain']) {

                        case '1': {
                            this.p2[i]['user__reltomain'] = 'پدر'
                            break;
                        }
                        case '2': {
                            this.p2[i]['user__reltomain'] = 'مادر'
                            break;
                        }
                        case '3': {
                            this.p2[i]['user__reltomain'] = 'همسر'
                            break;
                        }
                        case '4': {
                            this.p2[i]['user__reltomain'] = 'دختر'
                            break;
                        }
                        case '5': {
                            this.p2[i]['user__reltomain'] = 'برادر'
                            break;
                        }
                        case '6': {
                            this.p2[i]['user__reltomain'] = 'خواهر'
                            break;
                        }
                        case '7': {
                            this.p2[i]['user__reltomain'] = 'پدر بزرگ'
                            break;
                        }
                        case '8': {
                            this.p2[i]['user__reltomain'] = 'مادر بزرگ'
                            break;
                        }
                        case '9': {
                            this.p2[i]['user__reltomain'] = 'نوه'
                            break;
                        }
                        case '10': {
                            this.p2[i]['user__reltomain'] = 'پسر'
                            break;
                        }
                        case '0': {
                            this.p2[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        case null: {
                            this.p2[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        default: {
                            this.p2[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                    }
                    var accdate = this.p2[i]['acc_date']
                    if (accdate != "" && accdate != null) {
                        var gdate = accdate.substring(0, 10);
                        var gtime = accdate.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p2[i]['acc_date'] = output + " " + gtime
                    }
                    var ttpay = this.p2[i]['timetopay']
                    if (ttpay != "" && ttpay != null) {
                        var gdate = ttpay.substring(0, 10);
                        var gtime = ttpay.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p2[i]['timetopay'] = output + " " + gtime
                    }
                    this.alertSource = new LocalDataSource(this.p2);
                    // if (this.p2[i]['acc_date'] != null) {
                    //     var gdate1 = this.p2[i]['acc_date'].substring(0, 10);
                    //     var gtime1 = this.p2[i]['acc_date'].substring(11, 19);
                    //     var f = gdate1 + " " + gtime1;
                    //     // this.api.chdays(this.token_parts, f).subscribe(
                    //     //     res => {
                    //     //         console.log(res)

                    //     //         this.p2[i]['acc_date'] = res
                    //     //         var gdate = res.substring(0, 10);
                    //     //         var gtime = res.substring(11, 19);
                    //     //         var m = moment(gdate);
                    //     //         if (m.isValid()) {
                    //     //             m.locale('fa');
                    //     //             output = m.format("YYYY/MM/DD");
                    //     //         } else {
                    //     //             output = "it is not valid date";
                    //     //         }
                    //     //         this.p2[i]['acc_date'] = output + " " + gtime
                    //     //         this.alertSource = new LocalDataSource(this.p2);

                    //     //     },
                    //     //     err => {

                    //     //     }
                    //     // )
                    // }
                    // else {
                    //     this.p2[i]['acc_date'] = ""
                    //     this.alertSource = new LocalDataSource(this.p2);
                    // }
                }
                console.log(this.p2.length)
            },
            err => {
                console.error('refresh error', err);

            }
        )
        this.api.getclaimsinprocess(this.token_parts, con).subscribe(
            response1 => {
                this.p4 = response1;
                for (let i = 0; i < this.p4.length; i++) {
                    var output = "";
                    var output1 = "";
                    var dup = this.p4[i]['duplicatecalim']
                    if (dup != "") {
                        this.alertsettings1['columns']['trackingـcode']
                    }
                    var gdate = this.p4[i]['create_at'].substring(0, 10);
                    var gtime = this.p4[i]['create_at'].substring(11, 19);
                    var m = moment(gdate);
                    if (m.isValid()) {
                        m.locale('fa');
                        output = m.format("YYYY/MM/DD");
                    } else {
                        output = "it is not valid date";
                    }
                    this.p4[i]['create_at'] = output + " " + gtime
                    if (this.p4[i]['invoice'] != null)
                        this.p4[i]['invoice'] = this.p4[i]['invoice'].toLocaleString()
                    if (this.p4[i]['accInvoice'] != null)
                        this.p4[i]['accInvoice'] = this.p4[i]['accInvoice'].toLocaleString()
                    else
                        this.p4[i]['accInvoice'] = "-"
                    var gdate1 = this.p4[i]['date']
                    var m1 = moment(gdate1);
                    if (m1.isValid()) {
                        m1.locale('fa');
                        output1 = m1.format("YYYY/MM/DD");
                    } else {
                        output1 = "it is not valid date";
                    }
                    this.p4[i]['date'] = output1
                    switch (this.p4[i]['status']) {
                        case '1': {
                            this.p4[i]['status'] = 'در انتظار بررسی'
                            break;
                        }
                        case '2': {
                            this.p4[i]['status'] = 'انتظار دریافت اصل مدارک'
                            break;
                        }
                        case '3': {
                            this.p4[i]['status'] = 'نقص در مدارک'
                            break;
                        }
                        case '4': {
                            this.p4[i]['status'] = 'ارزیابی و کارشناسی مبلغ'
                            break;
                        }
                        case '5': {
                            this.p4[i]['status'] = 'ارسال به مالی'
                            break;
                        }
                        case '6': {
                            this.p4[i]['status'] = 'عودت داده شد'
                            break;
                        }
                        case '7': {
                            this.p4[i]['status'] = 'پرداخت شده'
                            break;
                        }
                    }
                    switch (this.p4[i]['user__reltomain']) {

                        case '1': {
                            this.p4[i]['user__reltomain'] = 'پدر'
                            break;
                        }
                        case '2': {
                            this.p4[i]['user__reltomain'] = 'مادر'
                            break;
                        }
                        case '3': {
                            this.p4[i]['user__reltomain'] = 'همسر'
                            break;
                        }
                        case '4': {
                            this.p4[i]['user__reltomain'] = 'دختر'
                            break;
                        }
                        case '5': {
                            this.p4[i]['user__reltomain'] = 'برادر'
                            break;
                        }
                        case '6': {
                            this.p4[i]['user__reltomain'] = 'خواهر'
                            break;
                        }
                        case '7': {
                            this.p4[i]['user__reltomain'] = 'پدر بزرگ'
                            break;
                        }
                        case '8': {
                            this.p4[i]['user__reltomain'] = 'مادر بزرگ'
                            break;
                        }
                        case '9': {
                            this.p4[i]['user__reltomain'] = 'نوه'
                            break;
                        }
                        case '10': {
                            this.p4[i]['user__reltomain'] = 'پسر'
                            break;
                        }
                        case '0': {
                            this.p4[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        case null: {
                            this.p4[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        default: {
                            this.p4[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                    }
                    var accdate = this.p4[i]['acc_date']
                    if (accdate != "" && accdate != null) {
                        var gdate = accdate.substring(0, 10);
                        var gtime = accdate.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p4[i]['acc_date'] = output + " " + gtime
                    }
                    var ttpay = this.p4[i]['timetopay']
                    if (ttpay != "" && ttpay != null) {
                        var gdate = ttpay.substring(0, 10);
                        var gtime = ttpay.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p4[i]['timetopay'] = output + " " + gtime
                    }
                    this.alertSource1 = new LocalDataSource(this.p4);
                    // if (this.p4[i]['acc_date'] != null) {
                    //     var gdate1 = this.p4[i]['acc_date'].substring(0, 10);
                    //     var gtime1 = this.p4[i]['acc_date'].substring(11, 19);
                    //     var f = gdate1 + " " + gtime1;
                    // this.api.chdays(this.token_parts, f).subscribe(
                    //     res => {
                    //         // console.log(res)

                    //         this.p4[i]['acc_date'] = res
                    //         var gdate = res.substring(0, 10);
                    //         var gtime = res.substring(11, 19);
                    //         var m = moment(gdate);
                    //         if (m.isValid()) {
                    //             m.locale('fa');
                    //             output = m.format("YYYY/MM/DD");
                    //         } else {
                    //             output = "it is not valid date";
                    //         }
                    //         this.p4[i]['acc_date'] = output + " " + gtime
                    //         this.alertSource1 = new LocalDataSource(this.p4);

                    //     },
                    //     err => {

                    //     }
                    // )
                    // }
                    // else {
                    //     this.p4[i]['acc_date'] = ""
                    //     this.alertSource1 = new LocalDataSource(this.p4);
                    // }
                }
                // console.log(this.p4.length)
            },
            err => {
                console.error('refresh error', err);

            }
        )
        this.api.getclaimssendforpay(this.token_parts, con).subscribe(
            response1 => {
                this.p3 = response1;
                for (let i = 0; i < this.p3.length; i++) {
                    var output = "";
                    var output1 = "";
                    var dup = this.p3[i]['duplicatecalim']
                    if (dup != "") {
                        this.alertsettings1['columns']['trackingـcode']
                    }
                    var gdate = this.p3[i]['create_at'].substring(0, 10);
                    var gtime = this.p3[i]['create_at'].substring(11, 19);
                    var m = moment(gdate);
                    if (m.isValid()) {
                        m.locale('fa');
                        output = m.format("YYYY/MM/DD");
                    } else {
                        output = "it is not valid date";
                    }
                    this.p3[i]['create_at'] = output + " " + gtime
                    if (this.p3[i]['invoice'] != null)
                        this.p3[i]['invoice'] = this.p3[i]['invoice'].toLocaleString()
                    if (this.p3[i]['accInvoice'] != null)
                        this.p3[i]['accInvoice'] = this.p3[i]['accInvoice'].toLocaleString()
                    else
                        this.p3[i]['accInvoice'] = "-"
                    var gdate1 = this.p3[i]['date']
                    var m1 = moment(gdate1);
                    if (m1.isValid()) {
                        m1.locale('fa');
                        output1 = m1.format("YYYY/MM/DD");
                    } else {
                        output1 = "it is not valid date";
                    }
                    this.p3[i]['date'] = output1
                    switch (this.p3[i]['status']) {
                        case '1': {
                            this.p3[i]['status'] = 'در انتظار بررسی'
                            break;
                        }
                        case '2': {
                            this.p3[i]['status'] = 'انتظار دریافت اصل مدارک'
                            break;
                        }
                        case '3': {
                            this.p3[i]['status'] = 'نقص در مدارک'
                            break;
                        }
                        case '4': {
                            this.p3[i]['status'] = 'ارزیابی و کارشناسی مبلغ'
                            break;
                        }
                        case '5': {
                            this.p3[i]['status'] = 'ارسال به مالی'
                            break;
                        }
                        case '6': {
                            this.p3[i]['status'] = 'عودت داده شد'
                            break;
                        }
                        case '7': {
                            this.p3[i]['status'] = 'پرداخت شده'
                            break;
                        }
                    }
                    switch (this.p3[i]['user__reltomain']) {

                        case '1': {
                            this.p3[i]['user__reltomain'] = 'پدر'
                            break;
                        }
                        case '2': {
                            this.p3[i]['user__reltomain'] = 'مادر'
                            break;
                        }
                        case '3': {
                            this.p3[i]['user__reltomain'] = 'همسر'
                            break;
                        }
                        case '4': {
                            this.p3[i]['user__reltomain'] = 'دختر'
                            break;
                        }
                        case '5': {
                            this.p3[i]['user__reltomain'] = 'برادر'
                            break;
                        }
                        case '6': {
                            this.p3[i]['user__reltomain'] = 'خواهر'
                            break;
                        }
                        case '7': {
                            this.p3[i]['user__reltomain'] = 'پدر بزرگ'
                            break;
                        }
                        case '8': {
                            this.p3[i]['user__reltomain'] = 'مادر بزرگ'
                            break;
                        }
                        case '9': {
                            this.p3[i]['user__reltomain'] = 'نوه'
                            break;
                        }
                        case '10': {
                            this.p3[i]['user__reltomain'] = 'پسر'
                            break;
                        }
                        case '0': {
                            this.p3[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        case null: {
                            this.p3[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        default: {
                            this.p3[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                    }
                    var accdate = this.p3[i]['acc_date']
                    if (accdate != "" && accdate != null) {
                        var gdate = accdate.substring(0, 10);
                        var gtime = accdate.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p3[i]['acc_date'] = output + " " + gtime
                    }
                    var ttpay = this.p3[i]['timetopay']
                    if (ttpay != "" && ttpay != null) {
                        var gdate = ttpay.substring(0, 10);
                        var gtime = ttpay.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p3[i]['timetopay'] = output + " " + gtime
                    }
                    this.alertSource2 = new LocalDataSource(this.p3);
                    // if (this.p3[i]['acc_date'] != null) {
                    //     var gdate1 = this.p3[i]['acc_date'].substring(0, 10);
                    //     var gtime1 = this.p3[i]['acc_date'].substring(11, 19);
                    //     var f = gdate1 + " " + gtime1;
                    //     // this.api.chdays(this.token_parts, f).subscribe(
                    //     //     res => {
                    //     //         // console.log(res)

                    //     //         this.p3[i]['acc_date'] = res
                    //     //         var gdate = res.substring(0, 10);
                    //     //         var gtime = res.substring(11, 19);
                    //     //         var m = moment(gdate);
                    //     //         if (m.isValid()) {
                    //     //             m.locale('fa');
                    //     //             output = m.format("YYYY/MM/DD");
                    //     //         } else {
                    //     //             output = "it is not valid date";
                    //     //         }
                    //     //         this.p3[i]['acc_date'] = output + " " + gtime
                    //     //         this.alertSource2 = new LocalDataSource(this.p3);

                    //     //     },
                    //     //     err => {

                    //     //     }
                    //     // )
                    //     // this.p3[i]['acc_date'] = output + " " + gtime
                    //     this.alertSource2 = new LocalDataSource(this.p3);
                    // }
                    // else {
                    //     this.p3[i]['acc_date'] = ""
                    //     this.alertSource2 = new LocalDataSource(this.p3);
                    // }
                }
                console.log(this.p3.length)
            },
            err => {
                console.error('refresh error', err);

            }
        )
    }
    showinsured() {
        var con: string[] = []
        if (this.contselected != '')
            con.push(this.contselected)
        else
            if (this.usercont.length != 0)
                con = this.usercont
        this.api.getclaimseteraz(this.token_parts, con).subscribe(
            response1 => {
                this.p5 = response1;
                for (let i = 0; i < this.p5.length; i++) {
                    var output = "";
                    var output1 = "";
                    var dup = this.p5[i]['duplicatecalim']
                    if (dup != "") {
                        this.alertsettings1['columns']['trackingـcode']
                    }
                    var gdate = this.p5[i]['create_at'].substring(0, 10);
                    var gtime = this.p5[i]['create_at'].substring(11, 19);
                    var m = moment(gdate);
                    if (m.isValid()) {
                        m.locale('fa');
                        output = m.format("YYYY/MM/DD");
                    } else {
                        output = "it is not valid date";
                    }
                    this.p5[i]['create_at'] = output + " " + gtime
                    if (this.p5[i]['invoice'] != null)
                        this.p5[i]['invoice'] = this.p5[i]['invoice'].toLocaleString()
                    if (this.p5[i]['accInvoice'] != null)
                        this.p5[i]['accInvoice'] = this.p5[i]['accInvoice'].toLocaleString()
                    else
                        this.p5[i]['accInvoice'] = "-"
                    var gdate1 = this.p5[i]['date']
                    var m1 = moment(gdate1);
                    if (m1.isValid()) {
                        m1.locale('fa');
                        output1 = m1.format("YYYY/MM/DD");
                    } else {
                        output1 = "it is not valid date";
                    }
                    this.p5[i]['date'] = output1
                    switch (this.p5[i]['status']) {

                        case '1': {
                            this.p5[i]['status'] = 'در انتظار بررسی'
                            break;
                        }
                        case '2': {
                            this.p5[i]['status'] = 'انتظار دریافت اصل مدارک'
                            break;
                        }
                        case '3': {
                            this.p5[i]['status'] = 'نقص در مدارک'
                            break;
                        }
                        case '4': {
                            this.p5[i]['status'] = 'ارزیابی و کارشناسی مبلغ'
                            break;
                        }
                        case '5': {
                            this.p5[i]['status'] = 'ارسال به مالی'
                            break;
                        }
                        case '6': {
                            this.p5[i]['status'] = 'عودت داده شد'
                            break;
                        }
                        case '7': {
                            this.p5[i]['status'] = 'پرداخت شده'
                            break;
                        }
                    }
                    switch (this.p5[i]['user__reltomain']) {

                        case '1': {
                            this.p5[i]['user__reltomain'] = 'پدر'
                            break;
                        }
                        case '2': {
                            this.p5[i]['user__reltomain'] = 'مادر'
                            break;
                        }
                        case '3': {
                            this.p5[i]['user__reltomain'] = 'همسر'
                            break;
                        }
                        case '4': {
                            this.p5[i]['user__reltomain'] = 'دختر'
                            break;
                        }
                        case '5': {
                            this.p5[i]['user__reltomain'] = 'برادر'
                            break;
                        }
                        case '6': {
                            this.p5[i]['user__reltomain'] = 'خواهر'
                            break;
                        }
                        case '7': {
                            this.p5[i]['user__reltomain'] = 'پدر بزرگ'
                            break;
                        }
                        case '8': {
                            this.p5[i]['user__reltomain'] = 'مادر بزرگ'
                            break;
                        }
                        case '9': {
                            this.p5[i]['user__reltomain'] = 'نوه'
                            break;
                        }
                        case '10': {
                            this.p5[i]['user__reltomain'] = 'پسر'
                            break;
                        }
                        case '0': {
                            this.p5[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        case null: {
                            this.p5[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        default: {
                            this.p5[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                    }
                    var accdate = this.p5[i]['acc_date']
                    if (accdate != "" && accdate != null) {
                        var gdate = accdate.substring(0, 10);
                        var gtime = accdate.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p5[i]['acc_date'] = output + " " + gtime
                    }
                    var ttpay = this.p5[i]['timetopay']
                    if (ttpay != "" && ttpay != null) {
                        var gdate = ttpay.substring(0, 10);
                        var gtime = ttpay.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p5[i]['timetopay'] = output + " " + gtime
                    }
                    this.alertSource3 = new LocalDataSource(this.p5);
                    // if (this.p5[i]['acc_date'] != null) {
                    //     var gdate1 = this.p5[i]['acc_date'].substring(0, 10);
                    //     var gtime1 = this.p5[i]['acc_date'].substring(11, 19);
                    //     var f = gdate1 + " " + gtime1;
                    //     this.api.chdays(this.token_parts, f).subscribe(
                    //         res => {
                    //             console.log(res)

                    //             this.p5[i]['acc_date'] = res
                    //             var gdate = res.substring(0, 10);
                    //             var gtime = res.substring(11, 19);
                    //             var m = moment(gdate);
                    //             if (m.isValid()) {
                    //                 m.locale('fa');
                    //                 output = m.format("YYYY/MM/DD");
                    //             } else {
                    //                 output = "it is not valid date";
                    //             }
                    //             this.p5[i]['acc_date'] = output + " " + gtime
                    //             this.alertSource3 = new LocalDataSource(this.p5);

                    //         },
                    //         err => {

                    //         }
                    //     )
                    // }
                    // else {
                    //     this.p5[i]['acc_date'] = ""
                    //     this.alertSource3 = new LocalDataSource(this.p5);
                    // }
                }
                console.log(this.p5.length)
            },
            err => {
                console.error('refresh error', err);

            }
        )
        this.api.getclaims(this.token_parts).subscribe(
            response1 => {
                this.p2 = response1;
                this.alertSource = new LocalDataSource(this.p2);
                for (let i = 0; i < this.p2.length; i++) {
                    var output = "";
                    var output1 = "";
                    var gdate = this.p2[i]['create_at'].substring(0, 10);
                    var gtime = this.p2[i]['create_at'].substring(11, 19);
                    var m = moment(gdate);
                    if (m.isValid()) {
                        m.locale('fa');
                        output = m.format("YYYY/MM/DD");
                    } else {
                        output = "it is not valid date";
                    }
                    this.p2[i]['create_at'] = output + " " + gtime
                    if (this.p2[i]['invoice'] != null)
                        this.p2[i]['invoice'] = this.p2[i]['invoice'].toLocaleString()
                    if (this.p2[i]['accInvoice'] != null)
                        this.p2[i]['accInvoice'] = this.p2[i]['accInvoice'].toLocaleString()
                    else
                        this.p2[i]['accInvoice'] = "-"
                    var gdate1 = this.p2[i]['date']
                    var m1 = moment(gdate1);
                    if (m1.isValid()) {
                        m1.locale('fa');
                        output1 = m1.format("YYYY/MM/DD");
                    } else {
                        output1 = "it is not valid date";
                    }
                    this.p2[i]['date'] = output1
                    switch (this.p2[i]['status']) {
                        case '1': {
                            this.p2[i]['status'] = 'در انتظار بررسی'
                            break;
                        }
                        case '2': {
                            this.p2[i]['status'] = 'انتظار دریافت اصل مدارک'
                            break;
                        }
                        case '3': {
                            this.p2[i]['status'] = 'نقص در مدارک'
                            break;
                        }
                        case '4': {
                            this.p2[i]['status'] = 'ارزیابی و کارشناسی مبلغ'
                            break;
                        }
                        case '5': {
                            this.p2[i]['status'] = 'ارسال به مالی'
                            break;
                        }
                        case '6': {
                            this.p2[i]['status'] = 'عودت داده شد'
                            break;
                        }
                        case '7': {
                            this.p2[i]['status'] = 'پرداخت شده'
                            break;
                        }
                    }
                    switch (this.p2[i]['user__reltomain']) {

                        case '1': {
                            this.p2[i]['user__reltomain'] = 'پدر'
                            break;
                        }
                        case '2': {
                            this.p2[i]['user__reltomain'] = 'مادر'
                            break;
                        }
                        case '3': {
                            this.p2[i]['user__reltomain'] = 'همسر'
                            break;
                        }
                        case '4': {
                            this.p2[i]['user__reltomain'] = 'دختر'
                            break;
                        }
                        case '5': {
                            this.p2[i]['user__reltomain'] = 'برادر'
                            break;
                        }
                        case '6': {
                            this.p2[i]['user__reltomain'] = 'خواهر'
                            break;
                        }
                        case '7': {
                            this.p2[i]['user__reltomain'] = 'پدر بزرگ'
                            break;
                        }
                        case '8': {
                            this.p2[i]['user__reltomain'] = 'مادر بزرگ'
                            break;
                        }
                        case '9': {
                            this.p2[i]['user__reltomain'] = 'نوه'
                            break;
                        }
                        case '10': {
                            this.p2[i]['user__reltomain'] = 'پسر'
                            break;
                        }
                        case '0': {
                            this.p2[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        case null: {
                            this.p2[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        default: {
                            this.p2[i]['user__reltomain'] = 'اصلی'
                            break;
                        }

                    }
                }
                console.log(this.p2.length)
            },
            err => {
                console.error('refresh error', err);

            }
        )
    }
    showadmin() {
        var con: string[] = []
        if (this.contselected != '')
            con.push(this.contselected)
        else
            if (this.usercont.length != 0)
                con = this.usercont
        this.api.getclaimseteraz(this.token_parts, con).subscribe(
            response1 => {
                this.p5 = response1;
                for (let i = 0; i < this.p5.length; i++) {
                    var output = "";
                    var output1 = "";
                    var dup = this.p5[i]['duplicatecalim']
                    if (dup != "") {
                        this.alertsettings1['columns']['trackingـcode']
                    }
                    var gdate = this.p5[i]['create_at'].substring(0, 10);
                    var gtime = this.p5[i]['create_at'].substring(11, 19);
                    var m = moment(gdate);
                    if (m.isValid()) {
                        m.locale('fa');
                        output = m.format("YYYY/MM/DD");
                    } else {
                        output = "it is not valid date";
                    }
                    this.p5[i]['create_at'] = output + " " + gtime
                    if (this.p5[i]['invoice'] != null)
                        this.p5[i]['invoice'] = this.p5[i]['invoice'].toLocaleString()
                    if (this.p5[i]['accInvoice'] != null)
                        this.p5[i]['accInvoice'] = this.p5[i]['accInvoice'].toLocaleString()
                    else
                        this.p5[i]['accInvoice'] = "-"
                    var gdate1 = this.p5[i]['date']
                    var m1 = moment(gdate1);
                    if (m1.isValid()) {
                        m1.locale('fa');
                        output1 = m1.format("YYYY/MM/DD");
                    } else {
                        output1 = "it is not valid date";
                    }
                    this.p5[i]['date'] = output1
                    switch (this.p5[i]['status']) {

                        case '1': {
                            this.p5[i]['status'] = 'در انتظار بررسی'
                            break;
                        }
                        case '2': {
                            this.p5[i]['status'] = 'انتظار دریافت اصل مدارک'
                            break;
                        }
                        case '3': {
                            this.p5[i]['status'] = 'نقص در مدارک'
                            break;
                        }
                        case '4': {
                            this.p5[i]['status'] = 'ارزیابی و کارشناسی مبلغ'
                            break;
                        }
                        case '5': {
                            this.p5[i]['status'] = 'ارسال به مالی'
                            break;
                        }
                        case '6': {
                            this.p5[i]['status'] = 'عودت داده شد'
                            break;
                        }
                        case '7': {
                            this.p5[i]['status'] = 'پرداخت شده'
                            break;
                        }
                    }
                    switch (this.p5[i]['user__reltomain']) {

                        case '1': {
                            this.p5[i]['user__reltomain'] = 'پدر'
                            break;
                        }
                        case '2': {
                            this.p5[i]['user__reltomain'] = 'مادر'
                            break;
                        }
                        case '3': {
                            this.p5[i]['user__reltomain'] = 'همسر'
                            break;
                        }
                        case '4': {
                            this.p5[i]['user__reltomain'] = 'دختر'
                            break;
                        }
                        case '5': {
                            this.p5[i]['user__reltomain'] = 'برادر'
                            break;
                        }
                        case '6': {
                            this.p5[i]['user__reltomain'] = 'خواهر'
                            break;
                        }
                        case '7': {
                            this.p5[i]['user__reltomain'] = 'پدر بزرگ'
                            break;
                        }
                        case '8': {
                            this.p5[i]['user__reltomain'] = 'مادر بزرگ'
                            break;
                        }
                        case '9': {
                            this.p5[i]['user__reltomain'] = 'نوه'
                            break;
                        }
                        case '10': {
                            this.p5[i]['user__reltomain'] = 'پسر'
                            break;
                        }
                        case '0': {
                            this.p5[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        case null: {
                            this.p5[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        default: {
                            this.p5[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                    }
                    var accdate = this.p5[i]['acc_date']
                    if (accdate != "" && accdate != null) {
                        var gdate = accdate.substring(0, 10);
                        var gtime = accdate.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p5[i]['acc_date'] = output + " " + gtime
                    }
                    var ttpay = this.p5[i]['timetopay']
                    if (ttpay != "" && ttpay != null) {
                        var gdate = ttpay.substring(0, 10);
                        var gtime = ttpay.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p5[i]['timetopay'] = output + " " + gtime
                    }
                    this.alertSource3 = new LocalDataSource(this.p5);
                    // if (this.p5[i]['acc_date'] != null) {
                    //     var gdate1 = this.p5[i]['acc_date'].substring(0, 10);
                    //     var gtime1 = this.p5[i]['acc_date'].substring(11, 19);
                    //     var f = gdate1 + " " + gtime1;
                    //     this.api.chdays(this.token_parts, f).subscribe(
                    //         res => {
                    //             console.log(res)

                    //             this.p5[i]['acc_date'] = res
                    //             var gdate = res.substring(0, 10);
                    //             var gtime = res.substring(11, 19);
                    //             var m = moment(gdate);
                    //             if (m.isValid()) {
                    //                 m.locale('fa');
                    //                 output = m.format("YYYY/MM/DD");
                    //             } else {
                    //                 output = "it is not valid date";
                    //             }
                    //             this.p5[i]['acc_date'] = output + " " + gtime
                    //             this.alertSource3 = new LocalDataSource(this.p5);

                    //         },
                    //         err => {

                    //         }
                    //     )
                    // }
                    // else {
                    //     this.p5[i]['acc_date'] = ""
                    //     this.alertSource3 = new LocalDataSource(this.p5);
                    // }
                }
                console.log(this.p5.length)
            },
            err => {
                console.error('refresh error', err);

            }
        )
        this.api.getclaimsnew(this.token_parts, con).subscribe(
            response1 => {
                this.p2 = response1;
                for (let i = 0; i < this.p2.length; i++) {
                    var output = "";
                    var output1 = "";
                    var dup = this.p2[i]['duplicatecalim']
                    if (dup != "") {
                        this.alertsettings1['columns']['trackingـcode']
                    }
                    var gdate = this.p2[i]['create_at'].substring(0, 10);
                    var gtime = this.p2[i]['create_at'].substring(11, 19);
                    var m = moment(gdate);
                    if (m.isValid()) {
                        m.locale('fa');
                        output = m.format("YYYY/MM/DD");
                    } else {
                        output = "it is not valid date";
                    }
                    this.p2[i]['create_at'] = output + " " + gtime
                    if (this.p2[i]['invoice'] != null)
                        this.p2[i]['invoice'] = this.p2[i]['invoice'].toLocaleString()
                    if (this.p2[i]['accInvoice'] != null)
                        this.p2[i]['accInvoice'] = this.p2[i]['accInvoice'].toLocaleString()
                    else
                        this.p2[i]['accInvoice'] = "-"
                    var gdate1 = this.p2[i]['date']
                    var m1 = moment(gdate1);
                    if (m1.isValid()) {
                        m1.locale('fa');
                        output1 = m1.format("YYYY/MM/DD");
                    } else {
                        output1 = "it is not valid date";
                    }
                    this.p2[i]['date'] = output1
                    switch (this.p2[i]['status']) {
                        case '1': {
                            this.p2[i]['status'] = 'در انتظار بررسی'
                            break;
                        }
                        case '2': {
                            this.p2[i]['status'] = 'انتظار دریافت اصل مدارک'
                            break;
                        }
                        case '3': {
                            this.p2[i]['status'] = 'نقص در مدارک'
                            break;
                        }
                        case '4': {
                            this.p2[i]['status'] = 'ارزیابی و کارشناسی مبلغ'
                            break;
                        }
                        case '5': {
                            this.p2[i]['status'] = 'ارسال به مالی'
                            break;
                        }
                        case '6': {
                            this.p2[i]['status'] = 'عودت داده شد'
                            break;
                        }
                        case '7': {
                            this.p2[i]['status'] = 'پرداخت شده'
                            break;
                        }
                    }
                    switch (this.p2[i]['user__reltomain']) {

                        case '1': {
                            this.p2[i]['user__reltomain'] = 'پدر'
                            break;
                        }
                        case '2': {
                            this.p2[i]['user__reltomain'] = 'مادر'
                            break;
                        }
                        case '3': {
                            this.p2[i]['user__reltomain'] = 'همسر'
                            break;
                        }
                        case '4': {
                            this.p2[i]['user__reltomain'] = 'دختر'
                            break;
                        }
                        case '5': {
                            this.p2[i]['user__reltomain'] = 'برادر'
                            break;
                        }
                        case '6': {
                            this.p2[i]['user__reltomain'] = 'خواهر'
                            break;
                        }
                        case '7': {
                            this.p2[i]['user__reltomain'] = 'پدر بزرگ'
                            break;
                        }
                        case '8': {
                            this.p2[i]['user__reltomain'] = 'مادر بزرگ'
                            break;
                        }
                        case '9': {
                            this.p2[i]['user__reltomain'] = 'نوه'
                            break;
                        }
                        case '10': {
                            this.p2[i]['user__reltomain'] = 'پسر'
                            break;
                        }
                        case '0': {
                            this.p2[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        case null: {
                            this.p2[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        default: {
                            this.p2[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                    }
                    var accdate = this.p2[i]['acc_date']
                    if (accdate != "" && accdate != null) {
                        var gdate = accdate.substring(0, 10);
                        var gtime = accdate.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p2[i]['acc_date'] = output + " " + gtime
                    }
                    var ttpay = this.p2[i]['timetopay']
                    if (ttpay != "" && ttpay != null) {
                        var gdate = ttpay.substring(0, 10);
                        var gtime = ttpay.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p2[i]['timetopay'] = output + " " + gtime
                    }
                    this.alertSource = new LocalDataSource(this.p2);
                    // if (this.p2[i]['acc_date'] != null) {
                    //     var gdate1 = this.p2[i]['acc_date'].substring(0, 10);
                    //     var gtime1 = this.p2[i]['acc_date'].substring(11, 19);
                    //     var f = gdate1 + " " + gtime1;
                    //     this.api.chdays(this.token_parts, f).subscribe(
                    //         res => {
                    //             console.log(res)

                    //             this.p2[i]['acc_date'] = res
                    //             var gdate = res.substring(0, 10);
                    //             var gtime = res.substring(11, 19);
                    //             var m = moment(gdate);
                    //             if (m.isValid()) {
                    //                 m.locale('fa');
                    //                 output = m.format("YYYY/MM/DD");
                    //             } else {
                    //                 output = "it is not valid date";
                    //             }
                    //             this.p2[i]['acc_date'] = output + " " + gtime
                    //             this.alertSource = new LocalDataSource(this.p2);

                    //         },
                    //         err => {

                    //         }
                    //     )
                    // }
                    // else {
                    //     this.p2[i]['acc_date'] = ""
                    //     this.alertSource = new LocalDataSource(this.p2);
                    // }
                }
                console.log(this.p2.length)
            },
            err => {
                console.error('refresh error', err);

            }
        )
        this.api.getclaimsinprocess(this.token_parts, con).subscribe(
            response1 => {
                this.p4 = response1;
                for (let i = 0; i < this.p4.length; i++) {
                    var output = "";
                    var output1 = "";
                    var dup = this.p4[i]['duplicatecalim']
                    if (dup != "") {
                        this.alertsettings1['columns']['trackingـcode']
                    }
                    var gdate = this.p4[i]['create_at'].substring(0, 10);
                    var gtime = this.p4[i]['create_at'].substring(11, 19);
                    var m = moment(gdate);
                    if (m.isValid()) {
                        m.locale('fa');
                        output = m.format("YYYY/MM/DD");
                    } else {
                        output = "it is not valid date";
                    }
                    this.p4[i]['create_at'] = output + " " + gtime
                    if (this.p4[i]['invoice'] != null)
                        this.p4[i]['invoice'] = this.p4[i]['invoice'].toLocaleString()
                    if (this.p4[i]['accInvoice'] != null)
                        this.p4[i]['accInvoice'] = this.p4[i]['accInvoice'].toLocaleString()
                    else
                        this.p4[i]['accInvoice'] = "-"
                    var gdate1 = this.p4[i]['date']
                    var m1 = moment(gdate1);
                    if (m1.isValid()) {
                        m1.locale('fa');
                        output1 = m1.format("YYYY/MM/DD");
                    } else {
                        output1 = "it is not valid date";
                    }
                    this.p4[i]['date'] = output1
                    switch (this.p4[i]['status']) {
                        case '1': {
                            this.p4[i]['status'] = 'در انتظار بررسی'
                            break;
                        }
                        case '2': {
                            this.p4[i]['status'] = 'انتظار دریافت اصل مدارک'
                            break;
                        }
                        case '3': {
                            this.p4[i]['status'] = 'نقص در مدارک'
                            break;
                        }
                        case '4': {
                            this.p4[i]['status'] = 'ارزیابی و کارشناسی مبلغ'
                            break;
                        }
                        case '5': {
                            this.p4[i]['status'] = 'ارسال به مالی'
                            break;
                        }
                        case '6': {
                            this.p4[i]['status'] = 'عودت داده شد'
                            break;
                        }
                        case '7': {
                            this.p4[i]['status'] = 'پرداخت شده'
                            break;
                        }
                    }
                    switch (this.p4[i]['user__reltomain']) {

                        case '1': {
                            this.p4[i]['user__reltomain'] = 'پدر'
                            break;
                        }
                        case '2': {
                            this.p4[i]['user__reltomain'] = 'مادر'
                            break;
                        }
                        case '3': {
                            this.p4[i]['user__reltomain'] = 'همسر'
                            break;
                        }
                        case '4': {
                            this.p4[i]['user__reltomain'] = 'دختر'
                            break;
                        }
                        case '5': {
                            this.p4[i]['user__reltomain'] = 'برادر'
                            break;
                        }
                        case '6': {
                            this.p4[i]['user__reltomain'] = 'خواهر'
                            break;
                        }
                        case '7': {
                            this.p4[i]['user__reltomain'] = 'پدر بزرگ'
                            break;
                        }
                        case '8': {
                            this.p4[i]['user__reltomain'] = 'مادر بزرگ'
                            break;
                        }
                        case '9': {
                            this.p4[i]['user__reltomain'] = 'نوه'
                            break;
                        }
                        case '10': {
                            this.p4[i]['user__reltomain'] = 'پسر'
                            break;
                        }
                        case '0': {
                            this.p4[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        case null: {
                            this.p4[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        default: {
                            this.p4[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                    }
                    var accdate = this.p4[i]['acc_date']
                    if (accdate != "" && accdate != null) {
                        var gdate = accdate.substring(0, 10);
                        var gtime = accdate.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p4[i]['acc_date'] = output + " " + gtime
                    }
                    var ttpay = this.p4[i]['timetopay']
                    if (ttpay != "" && ttpay != null) {
                        var gdate = ttpay.substring(0, 10);
                        var gtime = ttpay.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p4[i]['timetopay'] = output + " " + gtime
                    }
                    this.alertSource1 = new LocalDataSource(this.p4);
                    // if (this.p4[i]['acc_date'] != null) {
                    //     var gdate1 = this.p4[i]['acc_date'].substring(0, 10);
                    //     var gtime1 = this.p4[i]['acc_date'].substring(11, 19);
                    //     var f = gdate1 + " " + gtime1;
                    //     this.api.chdays(this.token_parts, f).subscribe(
                    //         res => {
                    //             console.log(res)

                    //             this.p4[i]['acc_date'] = res
                    //             var gdate = res.substring(0, 10);
                    //             var gtime = res.substring(11, 19);
                    //             var m = moment(gdate);
                    //             if (m.isValid()) {
                    //                 m.locale('fa');
                    //                 output = m.format("YYYY/MM/DD");
                    //             } else {
                    //                 output = "it is not valid date";
                    //             }
                    //             this.p4[i]['acc_date'] = output + " " + gtime
                    //             this.alertSource1 = new LocalDataSource(this.p4);

                    //         },
                    //         err => {

                    //         }
                    //     )
                    // }
                    // else {
                    //     this.p4[i]['acc_date'] = ""
                    //     this.alertSource1 = new LocalDataSource(this.p4);
                    // }
                }
                console.log(this.p4.length)
            },
            err => {
                console.error('refresh error', err);

            }
        )
        this.api.getclaimssendforpay(this.token_parts, con).subscribe(
            response1 => {
                this.p3 = response1;
                this.alertSource = new LocalDataSource(this.p3);
                for (let i = 0; i < this.p3.length; i++) {
                    var output = "";
                    var output1 = "";
                    var gdate = this.p3[i]['create_at'].substring(0, 10);
                    var gtime = this.p3[i]['create_at'].substring(11, 19);
                    var m = moment(gdate);
                    if (m.isValid()) {
                        m.locale('fa');
                        output = m.format("YYYY/MM/DD");
                    } else {
                        output = "it is not valid date";
                    }
                    this.p3[i]['create_at'] = output + " " + gtime
                    if (this.p3[i]['invoice'] != null)
                        this.p3[i]['invoice'] = this.p3[i]['invoice'].toLocaleString()
                    if (this.p3[i]['accInvoice'] != null)
                        this.p3[i]['accInvoice'] = this.p3[i]['accInvoice'].toLocaleString()
                    else
                        this.p3[i]['accInvoice'] = "-"
                    var gdate1 = this.p3[i]['date']
                    var m1 = moment(gdate1);
                    if (m1.isValid()) {
                        m1.locale('fa');
                        output1 = m1.format("YYYY/MM/DD");
                    } else {
                        output1 = "it is not valid date";
                    }
                    this.p3[i]['date'] = output1
                    switch (this.p3[i]['status']) {
                        case '1': {
                            this.p3[i]['status'] = 'در انتظار بررسی'
                            break;
                        }
                        case '2': {
                            this.p3[i]['status'] = 'انتظار دریافت اصل مدارک'
                            break;
                        }
                        case '3': {
                            this.p3[i]['status'] = 'نقص در مدارک'
                            break;
                        }
                        case '4': {
                            this.p3[i]['status'] = 'ارزیابی و کارشناسی مبلغ'
                            break;
                        }
                        case '5': {
                            this.p3[i]['status'] = 'ارسال به مالی'
                            break;
                        }
                        case '6': {
                            this.p3[i]['status'] = 'عودت داده شد'
                            break;
                        }
                        case '7': {
                            this.p3[i]['status'] = 'پرداخت شده'
                            break;
                        }
                    }
                    switch (this.p3[i]['user__reltomain']) {

                        case '1': {
                            this.p3[i]['user__reltomain'] = 'پدر'
                            break;
                        }
                        case '2': {
                            this.p3[i]['user__reltomain'] = 'مادر'
                            break;
                        }
                        case '3': {
                            this.p3[i]['user__reltomain'] = 'همسر'
                            break;
                        }
                        case '4': {
                            this.p3[i]['user__reltomain'] = 'دختر'
                            break;
                        }
                        case '5': {
                            this.p3[i]['user__reltomain'] = 'برادر'
                            break;
                        }
                        case '6': {
                            this.p3[i]['user__reltomain'] = 'خواهر'
                            break;
                        }
                        case '7': {
                            this.p3[i]['user__reltomain'] = 'پدر بزرگ'
                            break;
                        }
                        case '8': {
                            this.p3[i]['user__reltomain'] = 'مادر بزرگ'
                            break;
                        }
                        case '9': {
                            this.p3[i]['user__reltomain'] = 'نوه'
                            break;
                        }
                        case '10': {
                            this.p3[i]['user__reltomain'] = 'پسر'
                            break;
                        }
                        case '0': {
                            this.p3[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        case null: {
                            this.p3[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        default: {
                            this.p3[i]['user__reltomain'] = 'اصلی'
                            break;
                        }

                    }
                }
                console.log(this.p3.length)
            },
            err => {
                console.error('refresh error', err);

            }
        )
    }
    showevaluator() {
        var con: string[] = []
        if (this.contselected != '')
            con.push(this.contselected)
        else
            if (this.usercont.length != 0)
                con = this.usercont
        this.api.getclaimseteraz(this.token_parts, con).subscribe(
            response1 => {
                this.p5 = response1;
                for (let i = 0; i < this.p5.length; i++) {
                    var output = "";
                    var output1 = "";
                    var dup = this.p5[i]['duplicatecalim']
                    if (dup != "") {
                        this.alertsettings1['columns']['trackingـcode']
                    }
                    var gdate = this.p5[i]['create_at'].substring(0, 10);
                    var gtime = this.p5[i]['create_at'].substring(11, 19);
                    var m = moment(gdate);
                    if (m.isValid()) {
                        m.locale('fa');
                        output = m.format("YYYY/MM/DD");
                    } else {
                        output = "it is not valid date";
                    }
                    this.p5[i]['create_at'] = output + " " + gtime
                    if (this.p5[i]['invoice'] != null)
                        this.p5[i]['invoice'] = this.p5[i]['invoice'].toLocaleString()
                    if (this.p5[i]['accInvoice'] != null)
                        this.p5[i]['accInvoice'] = this.p5[i]['accInvoice'].toLocaleString()
                    else
                        this.p5[i]['accInvoice'] = "-"
                    var gdate1 = this.p5[i]['date']
                    var m1 = moment(gdate1);
                    if (m1.isValid()) {
                        m1.locale('fa');
                        output1 = m1.format("YYYY/MM/DD");
                    } else {
                        output1 = "it is not valid date";
                    }
                    this.p5[i]['date'] = output1
                    switch (this.p5[i]['status']) {

                        case '1': {
                            this.p5[i]['status'] = 'در انتظار بررسی'
                            break;
                        }
                        case '2': {
                            this.p5[i]['status'] = 'انتظار دریافت اصل مدارک'
                            break;
                        }
                        case '3': {
                            this.p5[i]['status'] = 'نقص در مدارک'
                            break;
                        }
                        case '4': {
                            this.p5[i]['status'] = 'ارزیابی و کارشناسی مبلغ'
                            break;
                        }
                        case '5': {
                            this.p5[i]['status'] = 'ارسال به مالی'
                            break;
                        }
                        case '6': {
                            this.p5[i]['status'] = 'عودت داده شد'
                            break;
                        }
                        case '7': {
                            this.p5[i]['status'] = 'پرداخت شده'
                            break;
                        }
                    }
                    switch (this.p5[i]['user__reltomain']) {

                        case '1': {
                            this.p5[i]['user__reltomain'] = 'پدر'
                            break;
                        }
                        case '2': {
                            this.p5[i]['user__reltomain'] = 'مادر'
                            break;
                        }
                        case '3': {
                            this.p5[i]['user__reltomain'] = 'همسر'
                            break;
                        }
                        case '4': {
                            this.p5[i]['user__reltomain'] = 'دختر'
                            break;
                        }
                        case '5': {
                            this.p5[i]['user__reltomain'] = 'برادر'
                            break;
                        }
                        case '6': {
                            this.p5[i]['user__reltomain'] = 'خواهر'
                            break;
                        }
                        case '7': {
                            this.p5[i]['user__reltomain'] = 'پدر بزرگ'
                            break;
                        }
                        case '8': {
                            this.p5[i]['user__reltomain'] = 'مادر بزرگ'
                            break;
                        }
                        case '9': {
                            this.p5[i]['user__reltomain'] = 'نوه'
                            break;
                        }
                        case '10': {
                            this.p5[i]['user__reltomain'] = 'پسر'
                            break;
                        }
                        case '0': {
                            this.p5[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        case null: {
                            this.p5[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        default: {
                            this.p5[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                    }
                    var accdate = this.p5[i]['acc_date']
                    if (accdate != "" && accdate != null) {
                        var gdate = accdate.substring(0, 10);
                        var gtime = accdate.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p5[i]['acc_date'] = output + " " + gtime
                    }
                    var ttpay = this.p5[i]['timetopay']
                    if (ttpay != "" && ttpay != null) {
                        var gdate = ttpay.substring(0, 10);
                        var gtime = ttpay.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p5[i]['timetopay'] = output + " " + gtime
                    }
                    this.alertSource3 = new LocalDataSource(this.p5);
                    // if (this.p5[i]['acc_date'] != null) {
                    //     var gdate1 = this.p5[i]['acc_date'].substring(0, 10);
                    //     var gtime1 = this.p5[i]['acc_date'].substring(11, 19);
                    //     var f = gdate1 + " " + gtime1;
                    //     this.api.chdays(this.token_parts, f).subscribe(
                    //         res => {
                    //             console.log(res)

                    //             this.p5[i]['acc_date'] = res
                    //             var gdate = res.substring(0, 10);
                    //             var gtime = res.substring(11, 19);
                    //             var m = moment(gdate);
                    //             if (m.isValid()) {
                    //                 m.locale('fa');
                    //                 output = m.format("YYYY/MM/DD");
                    //             } else {
                    //                 output = "it is not valid date";
                    //             }
                    //             this.p5[i]['acc_date'] = output + " " + gtime
                    //             this.alertSource3 = new LocalDataSource(this.p5);

                    //         },
                    //         err => {

                    //         }
                    //     )
                    // }
                    // else {
                    //     this.p5[i]['acc_date'] = ""
                    //     this.alertSource3 = new LocalDataSource(this.p5);
                    // }
                }
                console.log(this.p5.length)
            },
            err => {
                console.error('refresh error', err);

            }
        )
        this.api.getclaimsnew(this.token_parts, con).subscribe(
            response1 => {
                this.p2 = response1;
                for (let i = 0; i < this.p2.length; i++) {
                    var output = "";
                    var output1 = "";
                    var dup = this.p2[i]['duplicatecalim']
                    if (dup != "") {
                        this.alertsettings1['columns']['trackingـcode']
                    }
                    var gdate = this.p2[i]['create_at'].substring(0, 10);
                    var gtime = this.p2[i]['create_at'].substring(11, 19);
                    var m = moment(gdate);
                    if (m.isValid()) {
                        m.locale('fa');
                        output = m.format("YYYY/MM/DD");
                    } else {
                        output = "it is not valid date";
                    }
                    this.p2[i]['create_at'] = output + " " + gtime
                    if (this.p2[i]['invoice'] != null)
                        this.p2[i]['invoice'] = this.p2[i]['invoice'].toLocaleString()
                    if (this.p2[i]['accInvoice'] != null)
                        this.p2[i]['accInvoice'] = this.p2[i]['accInvoice'].toLocaleString()
                    else
                        this.p2[i]['accInvoice'] = "-"
                    var gdate1 = this.p2[i]['date']
                    var m1 = moment(gdate1);
                    if (m1.isValid()) {
                        m1.locale('fa');
                        output1 = m1.format("YYYY/MM/DD");
                    } else {
                        output1 = "it is not valid date";
                    }
                    this.p2[i]['date'] = output1
                    switch (this.p2[i]['status']) {
                        case '1': {
                            this.p2[i]['status'] = 'در انتظار بررسی'
                            break;
                        }
                        case '2': {
                            this.p2[i]['status'] = 'انتظار دریافت اصل مدارک'
                            break;
                        }
                        case '3': {
                            this.p2[i]['status'] = 'نقص در مدارک'
                            break;
                        }
                        case '4': {
                            this.p2[i]['status'] = 'ارزیابی و کارشناسی مبلغ'
                            break;
                        }
                        case '5': {
                            this.p2[i]['status'] = 'ارسال به مالی'
                            break;
                        }
                        case '6': {
                            this.p2[i]['status'] = 'عودت داده شد'
                            break;
                        }
                        case '7': {
                            this.p2[i]['status'] = 'پرداخت شده'
                            break;
                        }
                    }
                    switch (this.p2[i]['user__reltomain']) {

                        case '1': {
                            this.p2[i]['user__reltomain'] = 'پدر'
                            break;
                        }
                        case '2': {
                            this.p2[i]['user__reltomain'] = 'مادر'
                            break;
                        }
                        case '3': {
                            this.p2[i]['user__reltomain'] = 'همسر'
                            break;
                        }
                        case '4': {
                            this.p2[i]['user__reltomain'] = 'دختر'
                            break;
                        }
                        case '5': {
                            this.p2[i]['user__reltomain'] = 'برادر'
                            break;
                        }
                        case '6': {
                            this.p2[i]['user__reltomain'] = 'خواهر'
                            break;
                        }
                        case '7': {
                            this.p2[i]['user__reltomain'] = 'پدر بزرگ'
                            break;
                        }
                        case '8': {
                            this.p2[i]['user__reltomain'] = 'مادر بزرگ'
                            break;
                        }
                        case '9': {
                            this.p2[i]['user__reltomain'] = 'نوه'
                            break;
                        }
                        case '10': {
                            this.p2[i]['user__reltomain'] = 'پسر'
                            break;
                        }
                        case '0': {
                            this.p2[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        case null: {
                            this.p2[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        default: {
                            this.p2[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                    }
                    var accdate = this.p2[i]['acc_date']
                    if (accdate != "" && accdate != null) {
                        var gdate = accdate.substring(0, 10);
                        var gtime = accdate.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p2[i]['acc_date'] = output + " " + gtime
                    }
                    var ttpay = this.p2[i]['timetopay']
                    if (ttpay != "" && ttpay != null) {
                        var gdate = ttpay.substring(0, 10);
                        var gtime = ttpay.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p2[i]['timetopay'] = output + " " + gtime
                    }
                    this.alertSource = new LocalDataSource(this.p2);
                    // if (this.p2[i]['acc_date'] != null) {
                    //     var gdate1 = this.p2[i]['acc_date'].substring(0, 10);
                    //     var gtime1 = this.p2[i]['acc_date'].substring(11, 19);
                    //     var f = gdate1 + " " + gtime1;
                    //     this.api.chdays(this.token_parts, f).subscribe(
                    //         res => {
                    //             console.log(res)

                    //             this.p2[i]['acc_date'] = res
                    //             var gdate = res.substring(0, 10);
                    //             var gtime = res.substring(11, 19);
                    //             var m = moment(gdate);
                    //             if (m.isValid()) {
                    //                 m.locale('fa');
                    //                 output = m.format("YYYY/MM/DD");
                    //             } else {
                    //                 output = "it is not valid date";
                    //             }
                    //             this.p2[i]['acc_date'] = output + " " + gtime
                    //             this.alertSource = new LocalDataSource(this.p2);

                    //         },
                    //         err => {

                    //         }
                    //     )
                    // }
                    // else {
                    //     this.p2[i]['acc_date'] = ""
                    //     this.alertSource = new LocalDataSource(this.p2);
                    // }
                }
                console.log(this.p2.length)
            },
            err => {
                console.error('refresh error', err);

            }
        )
        this.api.getclaimsinprocess(this.token_parts, con).subscribe(
            response1 => {
                this.p4 = response1;
                for (let i = 0; i < this.p4.length; i++) {
                    var output = "";
                    var output1 = "";
                    var dup = this.p4[i]['duplicatecalim']
                    if (dup != "") {
                        this.alertsettings1['columns']['trackingـcode']
                    }
                    var gdate = this.p4[i]['create_at'].substring(0, 10);
                    var gtime = this.p4[i]['create_at'].substring(11, 19);
                    var m = moment(gdate);
                    if (m.isValid()) {
                        m.locale('fa');
                        output = m.format("YYYY/MM/DD");
                    } else {
                        output = "it is not valid date";
                    }
                    this.p4[i]['create_at'] = output + " " + gtime
                    if (this.p4[i]['invoice'] != null)
                        this.p4[i]['invoice'] = this.p4[i]['invoice'].toLocaleString()
                    if (this.p4[i]['accInvoice'] != null)
                        this.p4[i]['accInvoice'] = this.p4[i]['accInvoice'].toLocaleString()
                    else
                        this.p4[i]['accInvoice'] = "-"
                    var gdate1 = this.p4[i]['date']
                    var m1 = moment(gdate1);
                    if (m1.isValid()) {
                        m1.locale('fa');
                        output1 = m1.format("YYYY/MM/DD");
                    } else {
                        output1 = "it is not valid date";
                    }
                    this.p4[i]['date'] = output1
                    switch (this.p4[i]['status']) {
                        case '1': {
                            this.p4[i]['status'] = 'در انتظار بررسی'
                            break;
                        }
                        case '2': {
                            this.p4[i]['status'] = 'انتظار دریافت اصل مدارک'
                            break;
                        }
                        case '3': {
                            this.p4[i]['status'] = 'نقص در مدارک'
                            break;
                        }
                        case '4': {
                            this.p4[i]['status'] = 'ارزیابی و کارشناسی مبلغ'
                            break;
                        }
                        case '5': {
                            this.p4[i]['status'] = 'ارسال به مالی'
                            break;
                        }
                        case '6': {
                            this.p4[i]['status'] = 'عودت داده شد'
                            break;
                        }
                        case '7': {
                            this.p4[i]['status'] = 'پرداخت شده'
                            break;
                        }
                    }
                    switch (this.p4[i]['user__reltomain']) {

                        case '1': {
                            this.p4[i]['user__reltomain'] = 'پدر'
                            break;
                        }
                        case '2': {
                            this.p4[i]['user__reltomain'] = 'مادر'
                            break;
                        }
                        case '3': {
                            this.p4[i]['user__reltomain'] = 'همسر'
                            break;
                        }
                        case '4': {
                            this.p4[i]['user__reltomain'] = 'دختر'
                            break;
                        }
                        case '5': {
                            this.p4[i]['user__reltomain'] = 'برادر'
                            break;
                        }
                        case '6': {
                            this.p4[i]['user__reltomain'] = 'خواهر'
                            break;
                        }
                        case '7': {
                            this.p4[i]['user__reltomain'] = 'پدر بزرگ'
                            break;
                        }
                        case '8': {
                            this.p4[i]['user__reltomain'] = 'مادر بزرگ'
                            break;
                        }
                        case '9': {
                            this.p4[i]['user__reltomain'] = 'نوه'
                            break;
                        }
                        case '10': {
                            this.p4[i]['user__reltomain'] = 'پسر'
                            break;
                        }
                        case '0': {
                            this.p4[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        case null: {
                            this.p4[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        default: {
                            this.p4[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                    }
                    var accdate = this.p4[i]['acc_date']
                    if (accdate != "" && accdate != null) {
                        var gdate = accdate.substring(0, 10);
                        var gtime = accdate.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p4[i]['acc_date'] = output + " " + gtime
                    }
                    var ttpay = this.p4[i]['timetopay']
                    if (ttpay != "" && ttpay != null) {
                        var gdate = ttpay.substring(0, 10);
                        var gtime = ttpay.substring(11, 19);
                        var m = moment(gdate);
                        if (m.isValid()) {
                            m.locale('fa');
                            output = m.format("YYYY/MM/DD");
                        } else {
                            output = "it is not valid date";
                        }
                        this.p4[i]['timetopay'] = output + " " + gtime
                    }
                    this.alertSource1 = new LocalDataSource(this.p4);
                    // if (this.p4[i]['acc_date'] != null) {
                    //     var gdate1 = this.p4[i]['acc_date'].substring(0, 10);
                    //     var gtime1 = this.p4[i]['acc_date'].substring(11, 19);
                    //     var f = gdate1 + " " + gtime1;
                    //     this.api.chdays(this.token_parts, f).subscribe(
                    //         res => {
                    //             console.log(res)

                    //             this.p4[i]['acc_date'] = res
                    //             var gdate = res.substring(0, 10);
                    //             var gtime = res.substring(11, 19);
                    //             var m = moment(gdate);
                    //             if (m.isValid()) {
                    //                 m.locale('fa');
                    //                 output = m.format("YYYY/MM/DD");
                    //             } else {
                    //                 output = "it is not valid date";
                    //             }
                    //             this.p4[i]['acc_date'] = output + " " + gtime
                    //             this.alertSource1 = new LocalDataSource(this.p4);

                    //         },
                    //         err => {

                    //         }
                    //     )
                    // }
                    // else {
                    //     this.p4[i]['acc_date'] = ""
                    //     this.alertSource1 = new LocalDataSource(this.p4);
                    // }
                }
                console.log(this.p4.length)
            },
            err => {
                console.error('refresh error', err);

            }
        )
        this.api.getclaimssendforpay(this.token_parts, con).subscribe(
            response1 => {
                this.p3 = response1;
                this.alertSource = new LocalDataSource(this.p3);
                for (let i = 0; i < this.p3.length; i++) {
                    var output = "";
                    var output1 = "";
                    var gdate = this.p3[i]['create_at'].substring(0, 10);
                    var gtime = this.p3[i]['create_at'].substring(11, 19);
                    var m = moment(gdate);
                    if (m.isValid()) {
                        m.locale('fa');
                        output = m.format("YYYY/MM/DD");
                    } else {
                        output = "it is not valid date";
                    }
                    this.p3[i]['create_at'] = output + " " + gtime
                    if (this.p3[i]['invoice'] != null)
                        this.p3[i]['invoice'] = this.p3[i]['invoice'].toLocaleString()
                    if (this.p3[i]['accInvoice'] != null)
                        this.p3[i]['accInvoice'] = this.p3[i]['accInvoice'].toLocaleString()
                    else
                        this.p3[i]['accInvoice'] = "-"
                    var gdate1 = this.p3[i]['date']
                    var m1 = moment(gdate1);
                    if (m1.isValid()) {
                        m1.locale('fa');
                        output1 = m1.format("YYYY/MM/DD");
                    } else {
                        output1 = "it is not valid date";
                    }
                    this.p3[i]['date'] = output1
                    switch (this.p3[i]['status']) {
                        case '1': {
                            this.p3[i]['status'] = 'در انتظار بررسی'
                            break;
                        }
                        case '2': {
                            this.p3[i]['status'] = 'انتظار دریافت اصل مدارک'
                            break;
                        }
                        case '3': {
                            this.p3[i]['status'] = 'نقص در مدارک'
                            break;
                        }
                        case '4': {
                            this.p3[i]['status'] = 'ارزیابی و کارشناسی مبلغ'
                            break;
                        }
                        case '5': {
                            this.p3[i]['status'] = 'ارسال به مالی'
                            break;
                        }
                        case '6': {
                            this.p3[i]['status'] = 'عودت داده شد'
                            break;
                        }
                        case '7': {
                            this.p3[i]['status'] = 'پرداخت شده'
                            break;
                        }
                    }
                    switch (this.p3[i]['user__reltomain']) {

                        case '1': {
                            this.p3[i]['user__reltomain'] = 'پدر'
                            break;
                        }
                        case '2': {
                            this.p3[i]['user__reltomain'] = 'مادر'
                            break;
                        }
                        case '3': {
                            this.p3[i]['user__reltomain'] = 'همسر'
                            break;
                        }
                        case '4': {
                            this.p3[i]['user__reltomain'] = 'دختر'
                            break;
                        }
                        case '5': {
                            this.p3[i]['user__reltomain'] = 'برادر'
                            break;
                        }
                        case '6': {
                            this.p3[i]['user__reltomain'] = 'خواهر'
                            break;
                        }
                        case '7': {
                            this.p3[i]['user__reltomain'] = 'پدر بزرگ'
                            break;
                        }
                        case '8': {
                            this.p3[i]['user__reltomain'] = 'مادر بزرگ'
                            break;
                        }
                        case '9': {
                            this.p3[i]['user__reltomain'] = 'نوه'
                            break;
                        }
                        case '10': {
                            this.p3[i]['user__reltomain'] = 'پسر'
                            break;
                        }
                        case '0': {
                            this.p3[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        case null: {
                            this.p3[i]['user__reltomain'] = 'اصلی'
                            break;
                        }
                        default: {
                            this.p3[i]['user__reltomain'] = 'اصلی'
                            break;
                        }

                    }
                }
                console.log(this.p3.length)
            },
            err => {
                console.error('refresh error', err);

            }
        )
    }

    public tc = "";
    public showdetial: boolean = false;
    regclaim(event) {
        this.tc = event.data['trackingـcode'].toString();
        this.showdetial = true;
    }

    onSearch(query: string = '') {
        this.source.setFilter([
            // fields we want to inclue in the search
            {
                field: 'id',
                search: query,
            },
            {
                field: 'name',
                search: query,
            },
            {
                field: 'username',
                search: query,
            },
            {
                field: 'email',
                search: query,
            },
        ], false);

    }

    onDeleteConfirm(event) {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }

    onSaveConfirm(event) {
        if (window.confirm('Are you sure you want to save?')) {
            event.newData['name'] += ' + added in code';
            event.confirm.resolve(event.newData);
        } else {
            event.confirm.reject();
        }
    }

    onCreateConfirm(event) {
        if (window.confirm('Are you sure you want to create?')) {
            event.newData['name'] += ' + added in code';
            event.confirm.resolve(event.newData);
        } else {
            event.confirm.reject();
        }
    }
    sendnotif(tk: string, ti: string, bo: string) {
        this.checkHoliday("1399/06/06", "1399/06/11")
    }
    checkHoliday(accdate: string, currentDate: string) {

        var sDate: string[] = accdate.split("/");
        var sDateDay = sDate[2];
        var sDateMonth = sDate[1];
        var sDateYear = sDate[0];
        var cDate: string[] = currentDate.split("/");
        var cDateDay = cDate[2];

        this.api.holiday(this.token_parts, sDateYear, sDateMonth, sDateDay).subscribe(
            response => {
                console.log(response)
                if (response.length != 0) {

                }

            },
            err => {
                console.log(err)
            }
        )



    }


}