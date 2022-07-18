import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import {person} from '../Models/person'
import {personauth} from '../Models/personauth'
@Injectable({
  providedIn: 'root'
})
export class AllmodelsService {
  
  private token = new BehaviorSubject<string>("");
  currenttoken = this.token.asObservable();
  
  i:any[];
  private items = new BehaviorSubject<any[]>(this.i);
  currentitems = this.items.asObservable();
  
  p:person;
  private person = new BehaviorSubject<person>(this.p);
  currentperson = this.person.asObservable();

  pa:string;
  private personauth = new BehaviorSubject<string>(this.pa);
  currentpersonauth = this.personauth.asObservable();

  constructor() { }
  changepersonauth(p1: string) {
    this.personauth.next(p1)
  }
  changeperson(p1: person) {
    this.person.next(p1)
  }
  changetoken(p1: string) {
    this.token.next(p1)
  }
  changeitmes(p1: any[]) {
    this.items.next(p1)
  }
}
