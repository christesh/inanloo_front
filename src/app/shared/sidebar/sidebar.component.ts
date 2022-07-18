import { Component, OnInit, Input, ViewChild, OnDestroy, ElementRef, Renderer2, AfterViewInit } from "@angular/core";

import { ROUTES } from './sidebar-routes.config';
import { ROUTES1 } from './sidebar-admin-routes.config';
import { RouteInfo } from "./sidebar.metadata";
import { Router, ActivatedRoute } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { customAnimations } from "../animations/custom-animations";
import { ConfigService } from '../services/config.service';
import { LayoutService } from '../services/layout.service';
import { Subscription } from 'rxjs';
import { AllmodelsService } from '../../Models/allmodels.service'
import { person } from 'app/Models/person';
import { ApiService } from '../../login/loginbox/api.service';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  animations: customAnimations
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('toggleIcon', { static: false }) toggleIcon: ElementRef;
  public menuItems: any[];
  depth: number;
  activeTitle: string;
  activeTitles: string[] = [];
  expanded: boolean;
  nav_collapsed_open = false;
  logoUrl = 'assets/img/logo.png';
  public config: any = {};
  layoutSub: Subscription;


  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private route: ActivatedRoute,
    public translate: TranslateService,
    private configService: ConfigService,
    private layoutService: LayoutService,
    private pdata: AllmodelsService,
    private api: ApiService,
    private cookieService: CookieService,
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
      this.expanded = true;
    }
    this.layoutSub = layoutService.customizerChangeEmitted$.subscribe(
      options => {
        if (options) {
          if (options.bgColor) {
            if (options.bgColor === 'white') {
              this.logoUrl = 'assets/img/logo-dark.png';
            }
            else {
              this.logoUrl = 'assets/img/logo.png';
            }
          }
          if (options.compactMenu === true) {
            this.expanded = false;
            this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
            this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
            this.nav_collapsed_open = true;
          }
          else if (options.compactMenu === false) {
            this.expanded = true;
            this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
            this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
            this.nav_collapsed_open = false;
          }
          this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
        }
      });

  }

  public p1
  public menus: RouteInfo[] = []
  ngOnInit() {
    var dash = { path: '/dashboard/dashboard1', title: 'Dashboard1', icon: 'ft-home', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    var contract = { path: '/Contaracts', title: 'Inbox', icon: 'ft-mail', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    var elhaghie = { path: '/Users', title: 'Player', icon: 'ft-music', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    var useraccess = { path: '/UsersAccess', title: 'دسترسی کاربران', icon: 'ft-music', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    var basicinfo = { path: '', title: 'contracts', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [] }
    var health = { path: '', title: 'Dashboard', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [] }
    var regclaim = { path: '/HealthIns/RegClaim', title: 'Basic Forms', icon: 'ft-edit', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    var evalclaim = { path: '/Health-Ins/Claims', title: 'Smart Tables', icon: 'ft-grid', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    var polet = { path: '/colorpalettes', title: 'Color Palette', icon: 'ft-droplet', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    var report = { path: '/ReportBuilder', title: 'گزارش ساز', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }

    
    var accmenu = ["0", "1"];

    this.menus.push(dash)
    this.menus = this.menus.slice(0)
    for (let j = 0; j < accmenu.length; j++) {

      if (accmenu[j] == "0") {
        this.menus.push(basicinfo)
        this.menus = this.menus.slice(0)
        this.menus[this.menus.length - 1].submenu.push(elhaghie)
        this.menus = this.menus.slice(0)
      }
      if (accmenu[j] == "1") {
        this.menus.push(report)
        this.menus = this.menus.slice(0)
      }
      if (accmenu[j] == "2") {
        var idx1 = -1
        idx1 = this.menus.findIndex(item => item.title == "Dashboard")
        if (idx1 != -1) {
          this.menus[idx1].submenu.push(regclaim)
          this.menus = this.menus.slice(0)
        }
        else {
          this.menus.push(health)
          this.menus = this.menus.slice(0)
          this.menus[this.menus.length - 1].submenu.push(regclaim)
          this.menus = this.menus.slice(0)
        }
      }
      if (accmenu[j] == "3") {
        var idx1 = -1
        idx1 = this.menus.findIndex(item => item.title == "Dashboard")
        if (idx1 != -1) {
          this.menus[idx1].submenu.push(evalclaim)
          this.menus = this.menus.slice(0)
        }
        else {
          this.menus.push(health)
          this.menus = this.menus.slice(0)
          this.menus[this.menus.length - 1].submenu.push(evalclaim)
          this.menus = this.menus.slice(0)
        }
      }
    }
    this.menuItems = this.menus;

    this.menuItems = ROUTES1;

    if (this.config.layout.sidebar.backgroundColor === 'white') {
      this.logoUrl = 'assets/img/logo-dark.png';
    }
    else {
      this.logoUrl = 'assets/img/logo.png';
    }


  }

  ngAfterViewInit() {

    setTimeout(() => {
      if (this.config.layout.sidebar.collapsed != undefined) {
        if (this.config.layout.sidebar.collapsed === true) {
          this.expanded = false;
          this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
          this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
          this.nav_collapsed_open = true;
        }
        else if (this.config.layout.sidebar.collapsed === false) {
          this.expanded = true;
          this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-toggle-left');
          this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-toggle-right');
          this.nav_collapsed_open = false;
        }
      }
    }, 0);


  }

  ngOnDestroy() {
    if (this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }

  toggleSlideInOut() {
    this.expanded = !this.expanded;
  }

  handleToggle(titles) {
    this.activeTitles = titles;
  }

  // NGX Wizard - skip url change
  ngxWizardFunction(path: string) {
    if (path.indexOf("forms/ngx") !== -1)
      this.router.navigate(["forms/ngx/wizard"], { skipLocationChange: false });
  }
}
