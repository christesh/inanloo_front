import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
// import { MessagingService } from './service/messaging.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

    subscription: Subscription;
    title = 'push-notification';
    message;
    constructor(private router: Router,
       ) {
    }

    ngOnInit() {
        // this.messagingService.requestPermission()
        // this.messagingService.receiveMessage()
        // this.message = this.messagingService.currentMessage
        this.subscription = this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe(() => window.scrollTo(0, 0));
    }


    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }



}