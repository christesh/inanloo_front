import { Component, OnInit, Output, Input, EventEmitter, ElementRef, Renderer2 } from '@angular/core';
import { ApiService } from 'app/forms/layouts/basic/api.service';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'jalali-moment';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { NgbModalOptions, NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bordered',
  templateUrl: './bordered.component.html',
  styleUrls: ['./bordered.component.scss']
})
export class BorderedComponent {

  constructor(
    private endcondate: DpDatePickerModule, private elRef: ElementRef, private renderer: Renderer2,
    private cookieService: CookieService,
    private router: Router,
    private modalService: NgbModal,
    private api: ApiService) { }
  public pass1 = ""
  public pass2 = ""
  public name = "";
  public family = "";
  public companyname = "";
  public email = "";
  public mobile = "";
  public cons: { id: string, title: string, start: string, end: string, pl: string, ins: string, img: string }[] = []
  public plans: { id: string, title: string, permium: string, paymentmode: string }[] = [];
  contractend: string;
  public token_parts = ""
  ngOnInit() {
    this.contractend = "1399/12/29"
    console.log(this.token_parts)
    this.token_parts = this.cookieService.get('T');
    this.api.getPerson(this.token_parts).subscribe(
      res => {
        var pol_id = res[0]['company_id'];
        this.name = res[0]['f_name']
        this.family = res[0]['l_name']
        this.mobile = res[0]['mobile']
        this.email = res[0]['e_mail']
        this.api.getallContract(this.token_parts).subscribe(
          response1 => {
            for (let i = 0; i < response1.length; i++) {
              if (pol_id == response1[i]['policy_owner_id'].toString()) {
                this.companyname = response1[i]['policy_owner_id__name']
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
                this.cons = this.cons.slice(0);
              }
            }
          },
          err => {
            console.error('refresh error', err);
          }
        )
      },
      err => { }
    )
  }
  closeResult: string;
  public conselect: boolean;
  public plnselect: boolean;
  public contselected: string;
  public plnselected: string;
  getValuespln() {
    this.plnselect = true;
  }
  getValuescont() {
    this.plans = [];
    this.plnselect = false;
    this.conselect = true;
    console.log(this.token_parts)
    this.api.getplancon(this.token_parts, Number(this.contselected)).subscribe(
      response => {
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
          this.plans = this.plans.slice(0);
        }
      },
      err => {
        console.error('refresh error', err);
      }
    )
  }
  open(content) {
    var obj = content['_def']['references']
    var page = Object.keys(obj)
    if (page[0] == "pln") {
      this.palndetail(this.plnselected);

    }
    let ngbModalOptions: NgbModalOptions = {
      size: "lg",
      backdrop: 'static',
      keyboard: false,
    };
    this.modalService.open(content, ngbModalOptions).result.then((result) => {
      if (page[0] == "pln") {

      }

      if (page[0] == "cont") {

      }
      if (page[0] == "changepass") {

      }

      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      if (page[0] == "plns") {

      }

      if (page[0] == "cont") {

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
  public table: { svr: string, subsvr: any[], cov: string }[] = [];
  public planti
  palndetail(planid: string) {

    for (let i = 0; i < this.plans.length; i++) {
      if (planid == this.plans[i].id) {
        this.planti=this.plans[i].title;
        break;
      }
    }
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
          for (let i = 0; i < h.length; i++) {
            var s = h[i]['subs']
            var c = ""
            if (h[i]['cov'].toString() == 0) {
              c = "نامحدود"
            }
            else {
              c = h[i]['cov'].toString()
            }
            this.table.push({ svr: h[i]['svr'].toString(), subsvr: s, cov: c })
            this.table = this.table.slice(0);
          }
        } else {


        }
      })
      .catch(error => console.log('error', error));
    var hElement: HTMLElement = this.elRef.nativeElement;
  }
  exit()
  {
    this.router.navigate(['logout']);
  }
}
