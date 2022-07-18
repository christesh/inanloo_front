import { Component, OnInit ,Injectable, HostListener} from '@angular/core';
import { GlobalvarService } from '../../../globalvar.service';
import { ApiService } from '../../../forms/layouts/basic/api.service';
import { CookieService } from 'ngx-cookie-service';
import { isThisMonth } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-printgetdoc',
  templateUrl: './printgetdoc.component.html',
  styleUrls: ['./printgetdoc.component.scss']
})
export class PrintgetdocComponent implements OnInit {

  constructor(
    private golvar: GlobalvarService,
    private api: ApiService,
    private cookieService: CookieService,
  ) { }
  public sumcost="";
  public sumfran="";
  public sumacc="";
  public NID:string;
  public sum:string;
  public qr:string;
  public sabtkonnade:string;
  public contarct:string;
  public main:string;
  public rows:{row:string,tc:string,name:string,svr:string,date:string,cost:string}[]=[]
  public reps:{name:string,allc:string,accc:string,rejc:string,duringc:string,allsum:string,accsum:string}[]=[]
  public subsvrs:{subsvr:string,cost:string,fran:string,acc:string}[]=[]
  public myAngularxQrCode: string = null;
  public compic=""
  public inspic=""
  public segalpic=""
  public hadis=""
  public emam=""
  public name=""
  public tc=""
  public fullname=""
  public plantitle=""
  ngOnInit() {
    this.emam="امام علی (ع)"
    this.hadis="از دست دادن فرصت‌های خیر، برای انسان مایه غم و اندوه است"
    
    this.myAngularxQrCode = this.golvar.printtitle1[0].qr;
    this.NID=this.golvar.printtitle1[0].nid;
    this.sabtkonnade=this.golvar.printtitle1[0].sabt;
    this.contarct=this.golvar.printtitle1[0].cont;
    this.main=this.golvar.printtitle1[0].rel;
    this.rows=this.golvar.printrows1;
    this.reps=this.golvar.printreps1;
    this.fullname=this.golvar.printrows1[0].name;
    this.subsvrs=this.golvar.printsvrs;
    this.segalpic="../../../../../assets/images/تدبیر_پوشش_لوگو.png"
    this.name=this.rows[0].name;
    this.tc=this.rows[0].tc
    this.contarct=sessionStorage.getItem('conname')
    this.plantitle=sessionStorage.getItem('plnname')
    this.compic="http://bimeh.plus/media/"+sessionStorage.getItem('compic')
    this.inspic="http://bimeh.plus/media/"+sessionStorage.getItem('insurerpic')
    console.log(this.compic+" "+this.inspic)
    console.log(this.rows)
    console.log(this.subsvrs)
    console.log(this.reps)
    var s=0;
    for (let i=0;i<this.rows.length; i++)
    {
      s+=Number( this.rows[i]['cost']);
    }
    this.sum=s.toString();
    var sc=0;
    var sf=0;
    var sa=0;
    for (let i=0;i<this.subsvrs.length; i++)
    {
      sc+=Number( this.subsvrs[i]['cost']);
      sf+=Number( this.subsvrs[i]['fran']);
      sa+=Number( this.subsvrs[i]['acc']);
    }
 
    this.sumcost=sc.toString();
    this.sumfran=sf.toString();
    this.sumacc=sa.toString();
  }
  ngAfterViewInit(){
    console.log("salam")
    // console.log(this.reps)
    // sessionStorage.setItem('showprint','true');
    this.print1()
  }
  print1() {
    let popupWinindow:Window=window.open('', '_blank', 'width=800,height=600');
    let innerContents = document.getElementById('resid1').innerHTML;
    // let innerContents1 = document.getElementById('style').innerHTML;
    if (innerContents != null) {
      popupWinindow.document.open();
      popupWinindow.document.write( innerContents );
      popupWinindow.document.close();
    }
  }
  @HostListener('window:unload', [ '$event' ])
  unloadHandler(event) {
    // ...
    console.log("salamprint")
  }

  @HostListener('window:beforeunload', [ '$event' ])
  beforeUnloadHandler(event) {
    console.log("byeprint")
    // ...
  }
}
