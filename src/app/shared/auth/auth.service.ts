import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string;
  private baseurl= environment.API_URL;

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) {}

  signupUser(email: string, password: string) {
    //your code for signing up the new user
  }

  signinUser(user: string, pass: string) {
    const body = {username: user ,  password: pass };
    return this.http.post(this.baseurl + '/api/v1/rest-auth/login/', body,
    {headers: this.httpHeaders,observe : 'response'});
  }

  


  logout() {   
    this.token = null;
  }

  getToken() {    
    return this.token;
  }

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token 
    return true;
  }
}
