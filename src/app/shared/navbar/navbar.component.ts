import { Component, Output, EventEmitter, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from '../services/layout.service';
import { Subscription } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { LoginboxComponent } from '../../login/loginbox/loginbox.component';
import { AllmodelsService } from '../../Models/allmodels.service'
import { person } from 'app/Models/person';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../../app/login/loginbox/api.service';

import { Router } from '@angular/router';


@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {
  currentLang = "fa";
  toggleClass = "ft-maximize";
  placement = "bottom-right";
  public isCollapsed = true;

  layoutSub: Subscription;
  @Output()
  toggleHideSidebar = new EventEmitter<Object>();

  public config: any = {};
  public personname: string;
  public prsonpic: string;
  public personData: person;

  constructor(private api: ApiService,private router: Router, private cookieService: CookieService, public translate: TranslateService, private pdata: AllmodelsService, private layoutService: LayoutService, private configService: ConfigService) {
    // const browserLang: string = translate.getBrowserLang();
    const browserLang: string = "fa";
    translate.use(browserLang.match(/fa|en|es|pt|de/) ? browserLang : "fa");

    this.layoutSub = layoutService.changeEmitted$.subscribe(
      direction => {
        const dir = direction.direction;
        if (dir === "rtl") {
          this.placement = "bottom-left";
        } else if (dir === "ltr") {
          this.placement = "bottom-right";
        }
      });
  }

  ngOnInit() {
   // console.log("navjadid")
    this.config = this.configService.templateConf;

  }
public applink=""
  ngAfterViewInit() {
    this.personname="مسیح ابراهیم نژاد"
    // var token_parts = this.cookieService.get('T');
    // console.log(token_parts);
    // this.api.getPerson(token_parts).subscribe(
    //   response1 => {
    //     this.personData = response1;
    // //    console.log(this.personData)
    //     this.personname = this.personData[0].f_name.toString() + " " + this.personData[0].l_name.toString()
    //     var indx = this.personData[0].picture.toString().indexOf("images")
    //     var imgsrc = "http://bimeh.plus/media/" + this.personData[0].picture.toString().substring(indx);

    //     this.prsonpic =imgsrc;
    //   },
    //   err => {
    //     this.router.navigate(['login']);
    //     console.error('refresh error', err);
    //   }
    // )

    if (this.config.layout.dir) {
      setTimeout(() => {
        const dir = this.config.layout.dir;
        if (dir === "rtl") {
          this.placement = "bottom-left";
        } else if (dir === "ltr") {
          this.placement = "bottom-right";
        }
      }, 0);

    }
  }

  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  ChangeLanguage(language: string) {
    this.translate.use(language);
  }

  ToggleClass() {
    if (this.toggleClass === "ft-maximize") {
      this.toggleClass = "ft-minimize";
    } else {
      this.toggleClass = "ft-maximize";
    }
  }
  fullScreen() {
    if (this.toggleClass === "ft-maximize") {
      this.toggleClass = "ft-minimize";
    } else {
      this.toggleClass = "ft-maximize";
    }
    let elem = document.documentElement;
    let methodToBeInvoked = elem.requestFullscreen ||
     elem['mozRequestFullscreen']
      ||
      elem['msRequestFullscreen'];
    if (methodToBeInvoked) methodToBeInvoked.call(elem);
}

  toggleNotificationSidebar() {
    this.layoutService.emitNotiSidebarChange(true);
  }

  toggleSidebar() {
    const appSidebar = document.getElementsByClassName("app-sidebar")[0];
    if (appSidebar.classList.contains("hide-sidebar")) {
      this.toggleHideSidebar.emit(false);
    } else {
      this.toggleHideSidebar.emit(true);
    }
  }
}
