import { Component, OnInit, Output, Input, EventEmitter, ViewChildren, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
//import { AuthService } from '../../shared/auth/auth.service';
import { ApiService } from './api.service';
// import {HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';
import { contract } from '../../../app/Models/contract';
import { person } from '../../../app/Models/person';
import { personauth } from '../../../app/Models/personauth';
import { plan } from '../../../app/Models/plan';
import { subservice } from '../../../app/Models/subservice';
import { AllmodelsService } from '../../Models/allmodels.service'
import { CookieService } from 'ngx-cookie-service';
import { GlobalvarService } from '../../globalvar.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { value } from '../../shared/data/dropdowns';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-loginbox',
  templateUrl: './loginbox.component.html',
  styleUrls: ['./loginbox.component.scss'],
  providers: [ApiService],

})
export class LoginboxComponent implements OnInit {
  @Input() childMessage1: any;
  loguser = [{ username: 'ad', password: 'ad' }];
  selecteduser;
  title = 'otp';
  otpForm: FormGroup;
  formInput = ['input1', 'input2', 'input3', 'input4'];
  @ViewChildren('formRow') rows: any;
  OTPTIME = 10;
  private httpOptions: any;
  public token: string;
  public token_expires: Date;
  public username: string;
  public errors: any = [];
  @Output() p1: person;
  @Output() p2: personauth;
  @Output() c1: contract;
  @Output() s1: subservice;
  @Output() pl1: subservice;
  public otpReSend: boolean = false;
  public loginByUserName: boolean = false;
  public getOtp: boolean = false;
  form: FormGroup;
  userForm: FormGroup;                    // {1}
  private formSubmitAttempt: boolean; // {2}

  constructor(
    private fb: FormBuilder, private fbuser: FormBuilder,        // {3}
    private api: ApiService,
    private golvar: GlobalvarService,
    private router: Router,
    private pdata: AllmodelsService, // {4}
    private cookieService: CookieService,
    private _snackBar: MatSnackBar, public dialog: MatDialog
  ) {
    this.otpForm = this.toFormGroup(this.formInput);
  }
  toFormGroup(elements) {
    const group: any = {};

    elements.forEach(key => {
      group[key] = new FormControl('', Validators.required);
    });
    return new FormGroup(group);
  }
  keyUpEvent(event, index) {
    let pos = index;
    if (event.keyCode === 8 && event.which === 8) {
      pos = index - 1;
    } else {
      pos = index + 1;
    }
    if (pos > -1 && pos < this.formInput.length) {
      this.rows._results[pos].nativeElement.focus();
    }
  }
  ngOnInit() {
    this.form = this.fb.group({     // {5}
      mobilenumber: ['', Validators.required],
      otpcode: ['', Validators.required]
    });
    this.userForm = this.fbuser.group({     // {5}
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.getMobile = true;
  }
  userIsFieldInvalid(field: string) { // {6}
    return (
      (!this.userForm.get(field).valid && this.userForm.get(field).touched) ||
      (this.userForm.get(field).untouched && this.formSubmitAttempt)
    );
  }
  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  destroy() {
    this.destroy();
  }
  public ca: boolean = false;
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  cancel() {
    this.ca = true;
    this.onClose.emit(this.childMessage1);
  }
  public getMobile: boolean = true;
  public errormsg = "";
  public invalidpass: boolean = false;
  signin() {
    //check mobilenumber exist in db
    if (this.form.controls.mobilenumber.value == "09120762744") {
      this.getMobile = false;
      this.getOtp = true;
      this.loginByUserName = false;
      this.otpWait = this.OTPTIME;
      this.startTimer();
    }
    else {
      this.form.reset();
      this.openSnackBar('شماره تلفن همراه وارد شده در سیستم ثبت نشده است!', '', 'red-snackbar', 5)
    }
  }
  signup(): void {
    const dialogRef = this.dialog.open(SignUPDialog, {
      width: '350px',
      data: { mobilenumber: "12313"},
      disableClose: true 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  OtpCheck() {
    var otpArray = [];
    otpArray = this.otpForm.value
    var otp = otpArray['input1'] + "" + otpArray['input2'] + "" + otpArray['input3'] + "" + otpArray['input4']
    if (otp == "1234") {
      this.router.navigate(['dashboard/dashboard1']);
      this.openSnackBar('شما با موفقیت وارد شدید!', '', 'green-snackbar', 4)
    }
    else {
      this.otpForm.reset();
      this.openSnackBar('کد وارد شده صحیح نمی باشد!', 'متوجه شدم', 'red-snackbar', 7)
    }
  }
  OtpReSend() {
    this.otpReSend = false;
    this.otpForm.reset();
    this.openSnackBar('پیامک مجددا ارسال شد!', '', 'green-snackbar', 4)
  }
  EditMobileNumber() {
    this.getMobile = true;
    this.getOtp = false;
    this.otpReSend = false;
    this.otpForm.reset();
    this.form.reset();
  }
  EnterByUserName() {
    this.getMobile = false;
    this.getOtp = false;
    this.loginByUserName = true;
  }
  usersignin(){
    //check username and password exist in db
    if(this.userForm.controls.username.value == "masih" && this.userForm.controls.password.value == "1234"){
      this.router.navigate(['dashboard/dashboard1']);
      this.openSnackBar('شما با موفقیت وارد شدید!', '', 'green-snackbar', 4)
    }
    else {
      this.otpForm.reset();
      this.openSnackBar('نام کاربری و یا گذرواژه وارد شده صحیح نمی باشد!', '', 'red-snackbar', 7)
    }
  }
  EnterByOtp() {
    this.getMobile = true;
    this.getOtp = false;
    this.loginByUserName = false;
  }
  // onSubmit() {
  //   if (!this.ca) {
  //     var resstat = 0;
  //     var u = this.form.controls.username.value;
  //     var p = this.form.controls.password.value;
  //     if (u != "" && p != "") {
  //       this.api.login(u, p).subscribe(
  //         response => {
  //           resstat = response.status;
  //           // console.log(response.status);
  //           if (resstat == 200) {
  //             this.invalidpass = false
  //             // console.log(response.body.key)
  //             const token_parts = response.body.key;
  //             // console.log(token_parts)
  //             this.cookieService.set('T', token_parts);
  //             this.api.getPersonauth(token_parts).subscribe(
  //               response1 => {
  //                 console.log(response1)
  //                 var rr = []
  //                 rr = response1
  //                 if (rr.length != 0) {
  //                   if (response1[0].active != null && response1[0].active == true) {

  //                     this.p2 = response1[0].catrgory;
  //                     this.golvar.authcat = this.p2.toString();
  //                     sessionStorage.setItem('auth', this.p2.toString())
  //                     sessionStorage.setItem('NID', response1[0].person)
  //                     sessionStorage.setItem('NIDmain', response1[0].person)
  //                     this.router.navigate(['dashboard/dashboard1']);
  //                   }
  //                   else {
  //                     this.router.navigate(['forms/bordered']);
  //                     this.p2 = response1[0].catrgory;
  //                     this.golvar.authcat = this.p2.toString();
  //                     // alert("is not active user")
  //                   }
  //                 }
  //                 else {
  //                   this.invalidpass = true;
  //                   this.errormsg = "فرآیند ثبت نام به صورت کامل طی نشده است، لطفا با کارشناسان پشتیبانی شرکت در تماس باشید!"

  //                 }
  //               },
  //               err => {
  //                 console.error('refresh error', err);
  //                 this.errors = err['error'];
  //               }
  //             )
  //           }
  //           else {
  //             this.invalidpass = true;
  //             this.errormsg = "نام کاربری و یا گذرواژه نادرست می باشد."

  //           }
  //         },
  //         error => {
  //           this.invalidpass = true;
  //           this.errormsg = "نام کاربری و یا گذرواژه نادرست می باشد."
  //           console.log(error.status);

  //         }
  //       );
  //     }
  //   } else {
  //     this.invalidpass = true;
  //     this.errormsg = "عدم امکان ارتباط با سرور!"
  //     this.openSnackBar(this.errormsg, "متوجه شدم", "r-snackbar") 

  //   }
  // }
  interval;
  public otpWait = 10;
  startTimer() {
    clearInterval(this.interval);
    this.otpWait = this.OTPTIME;
    this.interval = setInterval(() => {
      if (this.otpWait > 1)
        this.otpWait--;
      else {
        this.otpReSend = true;
        this.otpWait = this.OTPTIME;
      }
    }, 1000)
  }
  openSnackBar(message: string, action: string, alertkind: string, showtime: number) {
    this._snackBar.open(message, action, {
      duration: showtime * 1000,
      panelClass: [alertkind],
    });
  }
}
export interface DialogData {
  mobilenumber: string;
}
@Component({
  selector: 'sign-uP-Dialog',
  templateUrl: 'signupdialog.html',
})
export class SignUPDialog implements OnInit {
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<SignUPDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
  form: FormGroup;
  private formSubmitAttempt: boolean; 
  ngOnInit() {
    this.form = this.fb.group({     // {5}
      mobilenumber: ['', Validators.required],
      name: ['', Validators.required],
      family: ['', Validators.required]
    });
  }
  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  close(){
    this.dialogRef.close();
  }
  signup(): void {
    var mobileNumaber=this.form.value['mobilenumber']
    var name=this.form.value['mobilenumber']
    var family=this.form.value['mobilenumber']
    ////call singup api to register user in db
    this.dialogRef.close();
  }
}
