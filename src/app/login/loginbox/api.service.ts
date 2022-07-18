import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {person} from '../../Models/person'
import { map } from 'rxjs/operators';
import { options } from 'app/shared/data/dropdowns';
import { personauth } from 'app/Models/personauth';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public p1:person;
  // baseurl = "http://api.bimeh.plus";
  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getUserID(tokenk: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    
    return this.http.get(this.baseurl + '/api/v1/personauth/',{headers: new HttpHeaders({
      'Content-Type':  'application/json',
     
       'Authorization': 'Token  '+tokenk,
     
    })});
   
  }
  getallContract(tokenk: string): Observable<any> {
    return this.http.get(this.baseurl + '/darman/getallContract/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token  ' + tokenk,
      })
    });
  }
  checkupdate(): Observable<any> {
    return this.http.get(this.baseurl + '/darman/checkupdate/', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
      })
    });
  }
  getPersonPlan(tokenk: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    
    return this.http.get(this.baseurl + '/darman/getPlan/',{headers: new HttpHeaders({
      'Content-Type':  'application/json',
     
      'Authorization': 'Token  '+tokenk,
     
    })});
   
  }
  getPerson(tokenk: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    
    return this.http.get<person>(this.baseurl + '/api/v1/Person/',{headers: new HttpHeaders({
      'Content-Type':  'application/json',
     
      'Authorization': 'Token  '+tokenk,
     
    })});
   
  }
  getrelativeclaimNID(tokenk: string ,nid:string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { NID: nid };
    return this.http.post(this.baseurl + '/darman/getrelativeclaimNID/',body,{headers: new HttpHeaders({
      'Content-Type':  'application/json',
     
      'Authorization': 'Token  '+tokenk,
     
    })});
   
  }
  getclaims(tokenk: string ): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    return this.http.get(this.baseurl + '/darman/getclaims/',{headers: new HttpHeaders({
      'Content-Type':  'application/json',
     
      'Authorization': 'Token  '+tokenk,
     
    })});
   
  }
  changepassword(tokenk: string ,newpass1:string,newpass2:string,oldpass:string): Observable<any> {
    const body = { new_password1: newpass1,new_password2: newpass2,old_password:oldpass };
    return this.http.post(this.baseurl + '/api/v1/rest-auth/password/change/',body,{headers: new HttpHeaders({
      'Content-Type':  'application/json',   
      'Authorization': 'Token  '+tokenk,
    })});
  }
  getclaimseteraz(tokenk: string ,con:string[]): Observable<any> {
    const body = {Con:con}
    return this.http.post(this.baseurl + '/darman/getclaimseteraz2/',body,{headers: new HttpHeaders({
      'Content-Type':  'application/json',   
      'Authorization': 'Token  '+tokenk,
    })});
  }
  getclaimsnew(tokenk: string,con:string[] ): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = {Con:con}
    return this.http.post(this.baseurl + '/darman/getclaimsnew2/',body,{headers: new HttpHeaders({
      'Content-Type':  'application/json',   
      'Authorization': 'Token  '+tokenk,
    })});
  }
  getclaimssendforpay(tokenk: string ,con:string[]): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = {Con:con}
    return this.http.post(this.baseurl + '/darman/getclaimssendforpay2/',body,{headers: new HttpHeaders({
      'Content-Type':  'application/json',   
      'Authorization': 'Token  '+tokenk,
    })});
  }
  getclaimsinprocess(tokenk: string,con:string[] ): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = {Con:con}
    return this.http.post(this.baseurl + '/darman/getclaimsinprocess2/',body,{headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Token  '+tokenk,     
    })});
  }
  
  getregmobile(tokenk: string): Observable<any> {
    return this.http.get(this.baseurl + '/darman/getregmobile/',{headers: new HttpHeaders({
      'Content-Type':  'application/json',  
      'Authorization': 'Token  '+tokenk,    
    })});
  }
  
  sendsms(user:string,mobile:string): Observable<any> {
    const body = { NID: user,mobile: mobile };
    return this.http.post(this.baseurl + '/darman/sendsms/',body,{headers: new HttpHeaders({
      'Content-Type':  'application/json',  
       
    })});
  }

  changepass(user:string,pass:string): Observable<any> {
    const body = { NID: user,pass: pass };
    return this.http.post(this.baseurl + '/darman/changepass/',body,{headers: new HttpHeaders({
      'Content-Type':  'application/json',  
      
    })});
  }

  checksms(user:string,mobile:string,code:string): Observable<any> {
    const body = { NID: user,mobile: mobile ,code:code};
    return this.http.post(this.baseurl + '/darman/checksms/',body,{headers: new HttpHeaders({
      'Content-Type':  'application/json',  
    })});
  }

  getPersonauth(tokenk: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    
    return this.http.get<personauth>(this.baseurl + '/api/v1/personuser/',{headers: new HttpHeaders({
      'Content-Type':  'application/json',
     
      'Authorization': 'Token  '+tokenk,
     
    })});
   
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
  chdays(tokenk: string ,f:string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { fdate: f };
    return this.http.post(this.baseurl + '/darman/chdays/',body,{headers: new HttpHeaders({
      'Content-Type':  'application/json',
     
      'Authorization': 'Token  '+tokenk,
     
    })});
   
  }
  chdayssec(tokenk: string ,f:string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    const body = { fdate: f };
    return this.http.post(this.baseurl + '/darman/chdayssec/',body,{headers: new HttpHeaders({
      'Content-Type':  'application/json',
     
      'Authorization': 'Token  '+tokenk,
     
    })});
   
  }
  getPersonContract(tokenk: string): Observable<any> {
    //this.httpHeaders1.append('Authorization','Token b237ebb38a864aa445987beb7b31d4fc49b09abc');
    
    return this.http.get(this.baseurl + '/darman/getContracts/',{headers: new HttpHeaders({
      'Content-Type':  'application/json',
     
      'Authorization': 'Token  '+tokenk,
     
    })});
   
  }
  login(u, p): Observable<any> {
    const body = { username: u, password: p };
    return this.http.post(this.baseurl + '/api/v1/rest-auth/login/', body,
      { headers: this.httpHeaders, observe: 'response' });
  }

  getpersondetail(id,tokenk): Observable<any> {
    return this.http.get(this.baseurl + '/api/v1/' + id + '/',{headers: new HttpHeaders({
      'Content-Type':  'application/json',
     
      'Authorization': 'Token  '+tokenk,
     
    })});
  }
  createdevice(tokenk: string, nid: string,dev:string): Observable<any> {
    const body={user:nid,dev:dev}
    return this.http.post(this.baseurl + '/darman/createdevice/',body,{headers: new HttpHeaders({
      'Content-Type':  'application/json',
     
      'Authorization': 'Token  '+tokenk,
     
    })});
  }
  

  sendnotif(tokenk: string, tc: string,ti:string,bd:string): Observable<any> {
    const body1 = {
      to: tc, notification: {
        body: ti,
        title: bd,

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
  holiday(tokenk: string,d:string,m:string,k:string): Observable<any> {
    const body={day:d,month:m,kind:k}
    return this.http.post(this.baseurl + '/darman/checkholiday/',body,{headers: new HttpHeaders({
      'Content-Type':  'application/json',
     
      'Authorization': 'Token  '+tokenk,
     
    })});
  }
}

