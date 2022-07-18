import { Component, TemplateRef, OnInit, ViewChild } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../app/forms/layouts/basic/api.service';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from '../shared/data/smart-data-table';
import { NgbModal, ModalDismissReasons, NgbAlertConfig, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {

  @ViewChild('content', { static: false })
  private content: TemplateRef<any>;

  @ViewChild('showdetail', { static: false })
  private showdetail: TemplateRef<any>;

  constructor(
    private api: ApiService,
    private modalService: NgbModal,
    private cookieService: CookieService,
  ) { }

  public users: { national_id: string, f_name: string, l_name: string, Contracts: string }[] = []

  public reporttable: any
  alertSource: LocalDataSource;
  public cont: { id: string, title: string, access: { id: string, gp: string, title: string }[], selected: string[] }[] = []

  ngOnInit() {
    this.reporttable = {
      editable: false,
      pager: {
        display: true,
        perPage: 50
      },
      actions: {
        columnTitle: "عملیات",
        add: false,
        edit: false,
        delete: false,
        custom: [
          { name: 'viewrecord', title: '<i class="fa fa-eye" ></i>' },
          { name: 'editrecord', title: '&nbsp;&nbsp;<i class="fa  fa-pencil" ></i>' }]
      },
      columns: {
        national_id: {
          title: "کد ملی کاربر"
        },
        f_name: {
          title: "نام کاربر"
        },
        l_name: {
          title: "نام خانوادگی کاربر"
        },
        Contracts: {
          title: "تعداد قرارداد"
        }
      },
      attr: {
        class: "table table-responsive"
      },
      noDataMessage: "هیچ اطلاعاتی یافت نشد"
    };

    var token = this.cookieService.get('T')
    this.api.getevaloter(token).subscribe(
      res => {
        this.users = res
        console.log(this.users)
        this.alertSource = new LocalDataSource(this.users);
        this.api.getallContract(token).subscribe(
          res => {

            for (let i = 0; i < res.length; i++) {
              var ac: { id: string, gp: string, title: string }[] = []
              ac.push({ id: res[i]['id'] + "/0", gp: "دسترسی کامل", title: "ثبت الحاقیه" })
              ac.push({ id: res[i]['id'] + "/1", gp: "دسترسی کامل", title: "گزارش سازی" })
              ac.push({ id: res[i]['id'] + "/2", gp: "دسترسی کامل", title: "ثبت خسارت" })
              ac.push({ id: res[i]['id'] + "/3", gp: "دسترسی کامل", title: "ارزیابی خسارت" })
              this.cont.push({ id: res[i]['id'], title: res[i]['title'], access: ac, selected: [] })
              this.cont = this.cont.slice(0)
              this.amarallflag.push(false)
            }
          },
          err => {

          }
        )
      },
      err => { }
    )

  }

  getValues1(id) {

    if (id.length != 0) {
      var conids = id[0].toString()
      var idx = conids.indexOf("/")
      var conid = conids.substring(0, idx)
      var flagidx = this.cont.findIndex(item => item.id == conid)
      this.amarallflag[flagidx] = true
    }

  }
  public amarallflag: boolean[] = []
  conselect(id) {
    if (this.amarallflag[id]) {

    }
    else {
      console.log( this.cont[id])
      this.cont[id].selected=[]
    }
  }
  public contshow: { title: string, access: { title: string }[] }[] = []
  regclaim(event) {
    for (let i = 0; i < this.amarallflag.length; i++)
      this.amarallflag[i] = false
    switch (event.action) {
      case 'viewrecord':
        this.contshow = []
        var token = this.cookieService.get('T')
        this.nid = event.data['national_id']
        this.name = event.data['f_name'] + " " + event.data['l_name']
        this.api.getaccessevalnid(token, event.data['national_id']).subscribe(
          res => {
            for (let i = 0; i < res.length; i++) {
              var accs = res[i]['accesskind'].toString().split("/")
              var a = []
              for (let j = 0; j < accs.length; j++)
                switch (accs[j]) {
                  case "0":
                    a.push({ title: "ثبت الحاقیه" })
                    break;
                  case "1":
                    a.push({ title: "گزارش سازی" })
                    break;
                  case "2":
                    a.push({ title: "ثبت خسارت" })
                    break;
                  case "3":
                    a.push({ title: "ارزیابی خسارت" })
                    break;
                }
              this.contshow.push({ title: res[i]['contract_id__title'], access: a })
            }
            console.log(this.contshow)
            this.view(this.showdetail)
          },
          err => {
            console.log(err)
          }
        )



        break;
      case 'editrecord':

        var token = this.cookieService.get('T')
        this.nid = event.data['national_id']
        this.name = event.data['f_name'] + " " + event.data['l_name']
        this.api.getaccessevalnid(token, event.data['national_id']).subscribe(
          res => {
            console.log(res)
            console.log(this.cont)
            for (let i = 0; i < res.length; i++) {
              var idx = this.cont.findIndex(item => item.id == res[i]['contract_id'])
              var accs = res[i]['accesskind'].toString().split("/")
              for (let j = 0; j < accs.length; j++)
                if (accs[j] != "")
                  this.cont[idx].selected.push(res[i]['contract_id'] + "/" + accs[j])
              this.amarallflag[idx] = true
            }
            console.log(this.cont)
            this.view(this.content)

          },
          err => {
            console.log(err)
          }
        )

    }
  }
  closeResult: string;
  public name: string
  public nid: string
  view(content1) {
    let ngbModalOptions: NgbModalOptions = {
      size: "lg",
      backdrop: 'static',
      keyboard: false,
    };
    this.modalService.open(content1, ngbModalOptions).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  save() {
    console.log(this.cont)
    console.log(this.amarallflag)
    var data: { nid: string, conid: string, acckind: string }[] = []
    for (let i = 0; i < this.amarallflag.length; i++) {
      var acc = ""
      if (this.cont[i].selected.length != 0 && this.amarallflag[i]!=false) {
        for (let j = 0; j < this.cont[i].selected.length; j++) {
          var idx = this.cont[i].selected[j].indexOf("/")
          acc += this.cont[i].selected[j].substring(idx)
        }
        data.push({ nid: this.nid, conid: this.cont[i].id, acckind: acc })
      }
    }
    var token = this.cookieService.get('T')
    this.api.createaccesseval(token, data).subscribe(
      res => {
        console.log(res)
        this.refreshpopup()
        this.modalService.dismissAll()
      },
      err => {

      }
    )

  }
  cancel() {
    this.refreshpopup()
    this.modalService.dismissAll()
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
  refreshpopup() {
    this.cont = []
    this.amarallflag = []
    this.reporttable = {
      editable: false,
      pager: {
        display: true,
        perPage: 50
      },
      actions: {
        columnTitle: "عملیات",
        add: false,
        edit: false,
        delete: false,
        custom: [
          { name: 'viewrecord', title: '<i class="fa fa-eye" ></i>' },
          { name: 'editrecord', title: '&nbsp;&nbsp;<i class="fa  fa-pencil" ></i>' }]
      },
      columns: {
        national_id: {
          title: "کد ملی کاربر"
        },
        f_name: {
          title: "نام کاربر"
        },
        l_name: {
          title: "نام خانوادگی کاربر"
        },
        Contracts: {
          title: "تعداد قرارداد"
        }
      },
      attr: {
        class: "table table-responsive"
      },
      noDataMessage: "هیچ اطلاعاتی یافت نشد"
    };

    var token = this.cookieService.get('T')
    this.api.getevaloter(token).subscribe(
      res => {
        this.users = res
        console.log(this.users)
        this.alertSource = new LocalDataSource(this.users);
        this.api.getallContract(token).subscribe(
          res => {
            for (let i = 0; i < res.length; i++) {
              var ac: { id: string, gp: string, title: string }[] = []
              ac.push({ id: res[i]['id'] + "/0", gp: "دسترسی کامل", title: "ثبت الحاقیه" })
              ac.push({ id: res[i]['id'] + "/1", gp: "دسترسی کامل", title: "گزارش سازی" })
              ac.push({ id: res[i]['id'] + "/2", gp: "دسترسی کامل", title: "ثبت خسارت" })
              ac.push({ id: res[i]['id'] + "/3", gp: "دسترسی کامل", title: "ارزیابی خسارت" })

              this.cont.push({ id: res[i]['id'], title: res[i]['title'], access: ac, selected: [] })
              this.cont = this.cont.slice(0)
              this.amarallflag.push(false)
            }
          },
          err => {

          }
        )
      },
      err => { }
    )
  }
}
