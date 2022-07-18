import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AllmodelsService } from '../../../../Models/allmodels.service'
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { subservice } from 'app/Models/subservice';
import { title } from 'process';

@Component({
  selector: 'app-servlist',
  templateUrl: './servlist.component.html',
  styleUrls: ['./servlist.component.scss']
})
export class ServlistComponent {
  @Input() childMessage: any;
  public items: any[] = []


  @Output() countChanged: EventEmitter<string> = new EventEmitter();


  public show: boolean = false;
  public buttonName: any;
  toggle() {
    this.show = !this.show;
    if (this.show)
      this.buttonName = 'عدم نمایش';
    else
      this.buttonName = 'نمایش زیر مجموعه';
  }
  public ch: { title: string, cov: number, used: number, inv: number, during: string, remain: string, pooshesh: string, cclaim: string };
  public service: string = "";
  public ssact: string = "";
  public svrsubs: string[] = [];
  public showsubload: boolean = false;
  public percent: number;
  public subsrevices: Array<any>;
  public svrused: string="0";
  public svrduring: string="0";
  public svrremain: string="0";
  public svrpooshesh: string="0";
  public svrcclaim: string="0";
  public svrcov: string="0";
  j1: number = 0;

  constructor(
    private cookieService: CookieService,
    private api: ApiService,
    private router: Router,
    private itempost: AllmodelsService,
  ) {

  }

  runapi() {
    var token_parts = this.cookieService.get('T');
    var NID=sessionStorage.getItem('NID')
    this.api.getservicesubservice(token_parts,NID).subscribe(
      response1 => {
        this.subsrevices = response1
        this.fillitems(this.subsrevices)
      },
      err => {
        //this.router.navigate(['login']);
        console.error('refresh error', err);
      }
    )
  }

  fillitems(subservices:any[]) {

    this.j1 = 0;
    for (let i = 0; i < subservices.length; i++) {
      this.items.push({ id: i, serv: subservices[i]['service_id__title'], subserv: subservices[i]['title'] })
      this.items = this.items.slice(0);
    }
    var svr = this.ch;
    this.svrused = "0"
    this.svrduring = "0"
    this.svrremain = "0"
    this.svrpooshesh = "0"
    this.svrcov = "0";
    this.svrcclaim="0";
    // console.log(svr)
    this.service = svr.title;
    this.svrsubs = [];
    if (svr.cov != 0) {
      this.percent = svr.used * 100 / svr.cov
      if (svr.used != null) {
        this.svrused = svr.used.toString();
      } else {
        this.svrused = "0";
      }
      if ( svr.during != "") {
        this.svrduring = svr.during
      }
      else {
        this.svrduring = "0"
      }
      if ( svr.remain != "") {
        this.svrremain = svr.remain
      }
      else {
        this.svrremain = "0"
      }
      if ( svr.pooshesh != "") {
        this.svrpooshesh = svr.pooshesh
      }
      else {
        this.svrpooshesh = "0"
      }

      this.svrcclaim = svr.cclaim
      if (svr.cov != null) {
        this.svrcov = svr.cov.toString();;
      } else {
        this.svrcov = "0";
      }

      this.showsubload = true;
      this.j1 = 0;
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].serv == svr.title) {
          this.svrsubs[this.j1] = this.items[i].subserv.valueOf();
          this.j1++;
        }
      }
    }
  }


  ngOnInit(): void {

  }
  ngAfterViewInit() {
    // console.log(this.childMessage)
    this.ch = this.childMessage;
    console.log(this.ch);
    this.runapi()
    this.show = false;
    this.buttonName = 'نمایش زیر مجموعه';
  }

  subservselect(event, ss) {
    // console.log(ss);
    this.countChanged.emit(ss);
  }
}
