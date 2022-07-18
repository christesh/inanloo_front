import { Component, OnInit, Injectable, HostListener } from '@angular/core';
import { GlobalvarService } from '../../../../globalvar.service';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'jalali-moment';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {

  constructor(
    private golvar: GlobalvarService,
    private api: ApiService,
    private cookieService: CookieService,
  ) {

  }
  public NID: string;
  public sum: string;
  public qr: string;
  public sabtkonnade: string;
  public contarct: string;
  public main: string;
  public rows: { row: string, tc: string, name: string, svr: string, date: string, cost: string }[] = []
  public reps: { name: string, allc: string, accc: string, rejc: string, duringc: string, allsum: string, accsum: string }[] = []
  public myAngularxQrCode: string = null;
  public compic = ""
  public inspic = ""
  public segalpic = ""
  public hadis = ""
  public emam = ""
  public insurno = ""
  public cdate = "";
  ngOnInit() {
    var ccdd = sessionStorage.getItem("createdate")
    var m1 = moment(ccdd);
    if (m1.isValid()) {
      m1.locale('fa');
      this.cdate = m1.format("YYYY/MM/DD");
    } else {
      this.cdate = "it is not valid date";
    }
    this.emam = "امام علی (ع)"
    this.hadis = "از دست دادن فرصت‌های خیر، برای انسان مایه غم و اندوه است"
    this.reps.push({ name: "salam", allc: "salam", accc: "salam", rejc: "salam", duringc: "salam", allsum: "asa;", accsum: "asass" })
    this.reps = this.reps.slice(0);
    this.myAngularxQrCode = this.golvar.printtitle[0].qr;
    this.NID = this.golvar.printtitle[0].nid;
    this.sabtkonnade = this.golvar.printtitle[0].sabt;
    this.contarct = this.golvar.printtitle[0].cont;
    this.main = this.golvar.printtitle[0].rel;
    this.rows = this.golvar.printrows;
    this.reps = this.golvar.printreps;
    this.segalpic = "../../../../../assets/images/تدبیر_پوشش_لوگو.png"

    this.compic = "http://bimeh.plus/media/" + sessionStorage.getItem('compic')
    this.inspic = "http://bimeh.plus/media/" + sessionStorage.getItem('insurerpic')
    console.log(this.compic + " " + this.inspic)
    var s = 0;
    for (let i = 0; i < this.rows.length; i++) {
      s += Number(this.rows[i]['cost']);
    }
    this.sum = s.toString();
  }

  ngAfterViewInit() {
    // console.log("salam")
    // console.log(this.reps)
    // sessionStorage.setItem('showprint','true');
    this.print1()
  }
  print1() {

    let popupWinindow: Window = window.open('', '_blank', 'width=800,height=600');
    let innerContents = document.getElementById('resid').innerHTML;
    // let innerContents1 = document.getElementById('style').innerHTML;
    if (innerContents != null) {
      popupWinindow.document.open();
      popupWinindow.document.write(innerContents);
      popupWinindow.document.close();
    }
  }
  @HostListener('window:unload', ['$event'])
  unloadHandler(event) {
    // ...
    console.log("salamprint")
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event) {
    console.log("byeprint")
    // ...
  }

}
