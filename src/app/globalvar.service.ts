import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalvarService {

  constructor() { }
  public authcat:string;
  public printtitle:{qr:string,nid:string,sabt:string,rel:string,cont:string}[]=[];
  public printrows:{row:string,tc:string,name:string,svr:string,date:string,cost:string,fran:string}[]=[]
  public printreps:{name:string,allc:string,accc:string,rejc:string,duringc:string,allsum:string,accsum:string}[]=[]
  public printtitle1:{qr:string,nid:string,sabt:string,rel:string,cont:string}[]=[];
  public printrows1:{row:string,tc:string,name:string,svr:string,date:string,cost:string,fran:string}[]=[]
  public printreps1:{name:string,allc:string,accc:string,rejc:string,duringc:string,allsum:string,accsum:string}[]=[]
  public printsvrs:{subsvr:string,cost:string,fran:string,acc:string}[]=[]
}
