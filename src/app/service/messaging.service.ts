import { Injectable } from '@angular/core';
// import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs'
@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject(null);
  constructor() {
  
  }

  // requestPermission() {
  //   this.angularFireMessaging.requestToken.subscribe(
  //     (token) => {
  //       console.log(token);
  //     },
  //     (err) => {
  //       console.error('Unable to get permission to notify.', err);
  //     }
  //   );
  // }
  // receiveMessage() {
  //   this.angularFireMessaging.messages.subscribe(
  //     (payload) => {
  //       console.log("new message received. ", payload);
  //       this.currentMessage.next(payload);
  //     })
  // }
}