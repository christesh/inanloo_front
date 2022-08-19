import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { ToastrModule } from "ngx-toastr";
import { AgmCoreModule } from "@agm/core";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { StoreModule } from "@ngrx/store";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar';
import { NgSelectModule } from '@ng-select/ng-select';
//import { DpDatePickerModule } from 'ng2-jalali-date-picker'
import { AppComponent } from "./app.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { AppMaterialModule } from './app-material/app-material.module';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DragulaService } from "ng2-dragula";
import { AuthService } from "./shared/auth/auth.service";
import { AuthGuard } from "./shared/auth/auth-guard.service";
import { LoginComponent } from './login/login.component';
import { ForgetPassDialog, LoginboxComponent,SignUPDialog } from '../app/login/loginbox/loginbox.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
// import {JdatePipe} from 'ngx-persian';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StarRatingModule } from 'angular-star-rating';
import { NgxPrintModule } from 'ngx-print';
import { BorderedComponent } from "../app/forms/layouts/bordered/bordered.component"
import {MatDialogModule} from '@angular/material/dialog';
import {MatNativeDateModule} from '@angular/material/core';
// import { PrintComponent } from '../app/forms/layouts/basic/print/print.component'
// import { AnQrcodeModule } from 'an-qrcode';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
// import { StaffreportComponent } from './staffreport/staffreport.component';
// import {UsersComponent} from './users/users.component'
// import { AngularFireMessagingModule } from '@angular/fire/messaging';
// import { AngularFireDatabaseModule } from '@angular/fire/database';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireModule } from '@angular/fire';
// import { MessagingService } from './service/messaging.service';
// import { environment } from '../environments/environment';
// import { AsyncPipe } from '../../node_modules/@angular/common';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonToggleModule} from '@angular/material/button-toggle'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent,SignUPDialog,ForgetPassDialog, FullLayoutComponent, ContentLayoutComponent, LoginComponent, LoginboxComponent, BorderedComponent],
  imports: [
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatNativeDateModule,
    MatSnackBarModule,
    NgxPrintModule,
    BrowserModule,
    StarRatingModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    NgSelectModule,
    DpDatePickerModule,
    MatCardModule,
    MatToolbarModule,
    AppMaterialModule,
    MatSidenavModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    SharedModule,
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
    // AngularFireMessagingModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AnQrcodeModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgbModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AgmCoreModule.forRoot({
      apiKey: "YOUR KEY"
    }),
    PerfectScrollbarModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    CookieService,
    AuthService,
    // MessagingService,
    // AsyncPipe,
    AuthGuard,
    DragulaService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },

  ],
  entryComponents: [SignUPDialog,ForgetPassDialog],
  bootstrap: [AppComponent],

})
export class AppModule { }
