import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { person } from '../../../Models/person'
import { personauth } from '../../../Models/personauth'
import { map } from 'rxjs/operators';
import { options } from 'app/shared/data/dropdowns';
import { claim } from '../../../Models/claim'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public p1: person;
  // baseurl = "http://api.bimeh.plus";
  baseurl = "http://127.0.0.1:8000";

  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }
  getPersonPlan(tokenk: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');

    return this.http.get(this.baseurl + '/darman/getPlan/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  getClaimNID(tokenk: string, nid: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { NID: nid };
    return this.http.post(this.baseurl + '/darman/getUserClaimsDetailsNID/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  getClaiminfoNID(tokenk: string, nid: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { NID: nid };
    return this.http.post(this.baseurl + '/darman/getClaiminfoNID/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  getPlanservNID(tokenk: string, nid: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { NID: nid };
    return this.http.post(this.baseurl + '/darman/getPlanservNID/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  getPerson(tokenk: string): Observable<person> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');

    return this.http.get<person>(this.baseurl + '/api/v1/Person/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  getPersonNID(tokenk: string, nid: string): Observable<person> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { NID: nid };
    return this.http.post<person>(this.baseurl + '/api/v1/getPersonNID/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  getPersonauth(tokenk: string): Observable<personauth> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');

    return this.http.get<personauth>(this.baseurl + '/api/v1/personuser/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  getuserclaims(tokenk: string, con: string[]): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { Con: con };
    return this.http.post(this.baseurl + '/darman/getuserclaims/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  
  setstarperson(tokenk: string, data1: any): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { data: data1 };
    return this.http.post(this.baseurl + '/darman/setstarperson/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  setbirthperson(tokenk: string, data1: any): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { data: data1 };
    return this.http.post(this.baseurl + '/darman/setbirthperson/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  importuser(tokenk: string, data1: any): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { data: data1 };
    return this.http.post(this.baseurl + '/darman/importuser/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  getdeactiveper(tokenk: string): Observable<any> {
    return this.http.get(this.baseurl + '/darman/getdeactiveper/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  getallcompany(tokenk: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');

    return this.http.get(this.baseurl + '/darman/getallcompany/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  getcompanyconts(tokenk: string, id: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { id: id };
    return this.http.post(this.baseurl + '/darman/getcompanyconts/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  getcontsplans(tokenk: string, id: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { id: id };
    return this.http.post(this.baseurl + '/darman/getcontsplans/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  getmaindetail(tokenk: string, nid: any): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { NID: nid };
    return this.http.post(this.baseurl + '/darman/getmaindetail/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  getprovince(tokenk: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');

    return this.http.get(this.baseurl + '/api/v1/getprovince/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });
  }
  register(user: string, mobile: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { username: user, password1: user, password2: user, last_name: mobile };
    return this.http.post(this.baseurl + '/darman/register/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        
      })
    });
  }
  createperson(tokenk: string,contract: string, plan: string, CodeMelli: string, company: string ,bskind:string,Nesbat:string,sarparast:string,birthDate:string,address:string,Name:string,shaba:string,gender:string,Mobile:string,province:string,LName:string,FatherName:string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc'); 
    const body = { contract: contract, plan: plan, CodeMelli: CodeMelli, company: company ,bskind:bskind,Nesbat:Nesbat,sarparast:sarparast,birthDate:birthDate,address:address,Name:Name,shaba:shaba,gender:gender,Mobile:Mobile,province:province,LName:LName,FatherName:FatherName};
    return this.http.post(this.baseurl + '/darman/createperson/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  activeperson(tokenk: string, nid: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { NID: nid };
    return this.http.post(this.baseurl + '/darman/activeperson/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  activepersons(tokenk: string, nids: any): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { nids: nids };
    return this.http.post(this.baseurl + '/darman/activepersons/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  getrelativeNID(tokenk: string, nid: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { NID: nid };
    return this.http.post(this.baseurl + '/darman/getrelativeNID/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  getplancon(tokenk: string, id: number): Observable<any> {
    const body = { id: id };
    return this.http.post(this.baseurl + '/darman/getplancon/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getplancons(tokenk: string, id: number[]): Observable<any> {
    const body = { id: id };
    return this.http.post(this.baseurl + '/darman/getplancons/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getplansvr(tokenk: string, id: number[]): Observable<any> {
    const body = { id: id };
    return this.http.post(this.baseurl + '/darman/getplansvr/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getsvrsubsvr(tokenk: string, id: number[]): Observable<any> {
    const body = { id: id };
    return this.http.post(this.baseurl + '/darman/getsvrsubsvr/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getpgetsvrsubsvrlancon(tokenk: string, id: number[]): Observable<any> {
    const body = { id: id };
    return this.http.post(this.baseurl + '/darman/getsvrsubsvr/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  dynareport(tokenk: string, annotate: any,groupby:any,filterData:any): Observable<any> {
    const body = { annotate: annotate, groupby:groupby,filterData:filterData};
    return this.http.post(this.baseurl + '/darman/dynareport/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  alldynareport(tokenk: string, annotate: any,groupby:any,filterData:any): Observable<any> {
    const body = { annotate: annotate, groupby:groupby,filterData:filterData};
    return this.http.post(this.baseurl + '/darman/alldynareport/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }

  getallcom(tokenk: string): Observable<any> {
    return this.http.get(this.baseurl + '/api/v1/getallcom/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getallins(tokenk: string): Observable<any> {
    return this.http.get(this.baseurl + '/api/v1/getallins/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getallplan(tokenk: string): Observable<any> {
    return this.http.get(this.baseurl + '/darman/getallplan/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  permcost(tokenk: string): Observable<any> {
    return this.http.get(this.baseurl + '/darman/permcost/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getPersonContract(tokenk: string): Observable<any> {
    return this.http.get(this.baseurl + '/darman/getContracts/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getallContract(tokenk: string): Observable<any> {
    return this.http.get(this.baseurl + '/darman/getallContract/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getservicesubservice(tokenk: string, nid: string): Observable<any> {
    const body = { NID: nid }
    return this.http.post(this.baseurl + '/darman/getPlanDetail/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getcpsdoc(tokenk: string, con: string, pln: string, subsvr: string): Observable<any> {
    const body = { c: con, p: pln, s: subsvr };
    return this.http.post(this.baseurl + '/darman/getcpsdoc/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getcpsid(tokenk: string, con: string, pln: string, subsvr: string): Observable<any> {
    const body = { c: con, p: pln, s: subsvr };
    return this.http.post(this.baseurl + '/darman/getcpsid/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getdoctors(tokenk: string) {
    return this.http.get(this.baseurl + '/darman/doctors/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  uploadveiw(tokenk: string, tc: string, doc: File): Observable<any> {
    const uploadDate = new FormData()
    uploadDate.append('claim', tc)
    uploadDate.append('image', doc, doc.name)
    return this.http.post(this.baseurl + '/darman/uploadveiw/', uploadDate, {
      headers: new HttpHeaders({
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getlasttc(tokenk: string, nid: string): Observable<any> {
    const body = { NID: nid };
    return this.http.post(this.baseurl + '/darman/getlasttc/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getdatetime(tokenk: string): Observable<any> {
    return this.http.get(this.baseurl + '/darman/getdatetime/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  chdays(tokenk: string, f: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { fdate: f };
    return this.http.post(this.baseurl + '/darman/chdays/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  checkTCExist(tokenk: string, tc: string) : Observable<any> {
    const body = { tc: tc }
    return this.http.post(this.baseurl + '/darman/checkTCExist/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  checkclaim(tokenk: string, cps: string, nid: string, dt: string, dr: string, inv: string): Observable<any> {
    const body = { cps: cps, NID: nid, dt: dt, dr: dr, inv: inv }
    return this.http.post(this.baseurl + '/darman/checkclaim/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getclaimdocTC(tokenk: string, tc: string): Observable<any> {
    const body = { TC: tc }
    return this.http.post(this.baseurl + '/darman/getclaimdocTC/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  showticket(tokenk: string, id: string): Observable<any> {
    const body = {
      id: id}
      return this.http.post(this.baseurl + '/darman/showticket/', body, {
        headers: new HttpHeaders({
          'Authorization': 'Token  ' + tokenk,
        })
      });  
  }
  showticketTC(tokenk: string, tc: string): Observable<any> {
    const body = {
      tc: tc}
      return this.http.post(this.baseurl + '/darman/showticketTC/', body, {
        headers: new HttpHeaders({
          'Authorization': 'Token  ' + tokenk,
        })
      });  
  }

  showallticketnid(tokenk: string, nid: string): Observable<any> {
    const body = {
      nid: nid}
      return this.http.post(this.baseurl + '/darman/showallticketnid/', body, {
        headers: new HttpHeaders({
          'Authorization': 'Token  ' + tokenk,
        })
      });  
  }
  answerticket(tokenk: string, id: string, turnto: string, ans: string, regp: string): Observable<any> {
    const body = {
      id: id,
      answer: ans,
      turnto: turnto,
      ansperson: regp
    }
    return this.http.post(this.baseurl + '/darman/answerticket/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  createticket(tokenk: string, tc: string, sbj: string, com: string, regp: string): Observable<any> {
    const body = {
      tc: tc,
      comment: com,
      sbj: sbj,
      regperson: regp
    }
    return this.http.post(this.baseurl + '/darman/createticket/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  createins(tokenk: string, p1: any, p2: any, p3: any, p4: any): Observable<any> {
    const body = {
      title: p1,
      created_by: p4,
      created_at: p2,
      description: p3
    }
    return this.http.post(this.baseurl + '/darman/createplan/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  createplan(tokenk: string, p1: any, p2: any, p3: any, p4: any): Observable<any> {
    const body = {
      title: p1,
      created_by: p4,
      created_at: p2,
      description: p3
    }
    return this.http.post(this.baseurl + '/darman/createplan/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  createcps(tokenk: string, p1: any, p2: any, p3: any): Observable<any> {
    const body = {
      contract: p1,
      plan: p2,
      Sub_service: p3,
    }
    return this.http.post(this.baseurl + '/darman/createcps/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  createcontplan(tokenk: string, p1: any, p2: any, p3: any, p4: any): Observable<any> {
    const body = {
      contract: p1,
      plan: p2,
      premium: p3,
      payment_mode: p4,
    }
    return this.http.post(this.baseurl + '/darman/createcontplan/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }

  createplansvr(tokenk: string, p1: any, p2: any, p3: any): Observable<any> {
    const body = {
      plan: p1,
      service: p2,
      max_coverage: p3,
    }
    return this.http.post(this.baseurl + '/darman/createplanserv/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }

  createsubsvr(tokenk: string, p1: any, p2: any, p3: any): Observable<any> {
    const body = {
      title: p1,
      description: p2,
      service: p3,
    }
    return this.http.post(this.baseurl + '/darman/createsubsvr/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  createplansubsvr(tokenk: string, p1: any, p2: any, p3: any): Observable<any> {
    const body = {
      plan: p1,
      subservice: p2,
      official_rate: p3,
    }
    return this.http.post(this.baseurl + '/darman/createplansub/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  createclaimlog(tokenk: string, claimtc: string,user: string,logdate: string,position:string ,logsubject: string,logfi1: any[],logfi2: any[]): Observable<any> {
    const body = { 
    claimtc:claimtc,
    user:user,
    position:position,
    logdate:logdate,
    logsubject:logsubject,
    logfield1:logfi1,
    logfield2:logfi2,}
    console.log(body)
    return this.http.post(this.baseurl + '/darman/createclaimlog/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getclaimlogTC(tokenk: string, tc: string): Observable<any> {
    const body = { claimtc: tc }
    return this.http.post(this.baseurl + '/darman/getclaimlogTC/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getclaimTC(tokenk: string, tc: string): Observable<any> {
    const body = { TC: tc }
    return this.http.post(this.baseurl + '/darman/getclaimTC/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  getdoc(tokenk: string, id: number): Observable<any> {
    const body = { ID: id }
    return this.http.post(this.baseurl + '/darman/getdoc/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + tokenk,

      })
    });
  }
  getContractpic(tokenk: string): Observable<any> {
    return this.http.get(this.baseurl + '/darman/getContractpic/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + tokenk,
      })
    });
  }
  staffreports(tokenk: string): Observable<any> {
    return this.http.get(this.baseurl + '/darman/staffreports/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + tokenk,
      })
    });
  }
  getevalofclaim(tokenk: string, tc: string): Observable<any> {
    const body = { claimtc: tc }
    return this.http.post(this.baseurl + '/darman/getevalofclaim/', body, {
      headers: new HttpHeaders({

        'Authorization': 'Token ' + tokenk,
      })
    });
  }
  getplandetail(tokenk: string, pid: string): Observable<any> {
    const body = { id: pid }
    return this.http.post(this.baseurl + '/darman/getplandetail/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + tokenk,
      })
    });
  }
  getClaimstaffreport(tokenk: string): Observable<any> {

    return this.http.get(this.baseurl + '/darman/getClaimstaffreport/', {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + tokenk,
      })
    });
  }

  getrelative(tokenk: string): Observable<any> {

    return this.http.get(this.baseurl + '/darman/getrelative/', {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + tokenk,
      })
    });
  }
  getClaimNIDreport(tokenk: string, nid: string): Observable<any> {
    const body = { NID: nid }
    return this.http.post(this.baseurl + '/darman/getClaimNIDreport/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + tokenk,
      })
    });
  }
  getPlanid(tokenk: string, pt: string): Observable<any> {
    const body = { title: pt }
    return this.http.post(this.baseurl + '/darman/getPlanid/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + tokenk,
      })
    });
  }
  r1(tokenk: string): Observable<any> {
    return this.http.get(this.baseurl + '/darman/r1/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + tokenk,
      })
    });
  }
  r2(tokenk: string): Observable<any> {
    console.log(tokenk)
    return this.http.get(this.baseurl + '/darman/r2/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + tokenk,
      })
    });
  }
  ruser1(tokenk: string): Observable<any> {
    return this.http.get(this.baseurl + '/darman/ruser1/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + tokenk,
      })
    });
  }
  getavgtime(tokenk: string, cont: string): Observable<any> {
    const body = { cont: cont }
    return this.http.post(this.baseurl + '/darman/getavgtime/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + tokenk,
      })
    });
  }
  getPlanidnid(tokenk: string, nid1: string): Observable<any> {
    const body = { NID: nid1 }
    return this.http.post(this.baseurl + '/darman/getplanidnid/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + tokenk,
      })
    });
  }
  showtickettc(tokenk: string, tc: string): Observable<any> {
    const body = { tc: tc }
    return this.http.post(this.baseurl + '/darman/showticketTC/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + tokenk,
      })
    });
  }
  getPlans(tokenk: string): Observable<any> {
    // console.log(tokenk)
    return this.http.get(this.baseurl + '/darman/getPlan/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + tokenk,
      })
    });
  }
  updateclaims(tokenk: string,evalinv:any, tc: string, s: string, ai: any, ad: any, pma: string, ea: boolean, nid: string, ttp: string,cps:string,editby:string,invoice:string,invdate:string,doctorid:string): Observable<any> {
    const body = { claimtc: tc,evalinv:evalinv, status: s, accinv: ai, accdate: ad, persianmonthacc: pma, edit: ea, nid: nid, timetopay: ttp ,cps:cps,editby:editby,invoice:invoice,invdate:invdate,did:doctorid}
    return this.http.post(this.baseurl + '/darman/updateclaims/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + tokenk,
      })
    });
  }
  createevalclaim(tokenk: string, p1: string, p2: string, p3: string, p4: string, p5: string): Observable<any> {
    const body = { eval: p1, claim: p2, result: p3, date: p4, status: p5 }
    return this.http.post(this.baseurl + '/darman/createevalclaim/', body, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + tokenk,
      })
    });
  }
  checknidincon(tokenk: string, nid: string, con: string, pln: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { nid: nid, con: con, pln: pln };
    return this.http.post(this.baseurl + '/darman/checknidincon/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  chdayssec(tokenk: string, f: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { fdate: f };
    return this.http.post(this.baseurl + '/darman/chdayssec/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,

      })
    });

  }
  deleteimgurl(tokenk: string, urls: any): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { imgs: urls };
    return this.http.post(this.baseurl + '/darman/deleteimgurl/', body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',

        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  sendnotif(tokenk: string, tc: string, ti: string, bd: string): Observable<any> {
    const body1 = {
      to: tc, notification: {
        body: bd,
        title: ti,
      },
      data:
      {
        image: "http://bimeh.plus/media/images/logo.png"
      }
    }
    return this.http.post('https://fcm.googleapis.com/fcm/send', body1, {
      headers: new HttpHeaders({
        'Authorization': 'key=' + tokenk,
        'Content-Type': 'application/json',
      })
    });
  }
  getdevice(tokenk: string, nid: string): Observable<any> {
    const body1 = {
      NID: nid
    }
    return this.http.post(this.baseurl + '/darman/getdevice/', body1, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + tokenk,
        'Content-Type': 'application/json',
      })
    });
  }
  createaccesseval(tokenk: string, data: any): Observable<any> {
    const body1 = {
      data: data
    }
    return this.http.post(this.baseurl + '/darman/createaccesseval/', body1, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + tokenk,
        'Content-Type': 'application/json',
      })
    });
  }
  getaccessevalnid(tokenk: string, nid: string): Observable<any> {
    const body1 = {
      NID: nid
    }
    return this.http.post(this.baseurl + '/darman/getaccessevalnid/', body1, {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + tokenk,
        'Content-Type': 'application/json',
      })
    });
  }
  getevaloter(tokenk: string): Observable<any> {
    return this.http.get(this.baseurl + '/darman/getevaloter/',  {
      headers: new HttpHeaders({
        'Authorization': 'Token ' + tokenk,
        'Content-Type': 'application/json',
      })
    });
  }
}

