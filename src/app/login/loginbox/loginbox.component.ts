import { Component, OnInit, Output, Input, ElementRef, EventEmitter, ViewChildren, Inject, ViewChild, Directive, ContentChild } from '@angular/core';
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
import {
  MatSnackBar, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition
} from '@angular/material/snack-bar';
import { value } from '../../shared/data/dropdowns';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  mobilenumber: string;
}
export enum ToggleEnum {
  Option1,
  Option2,
  Option3
}

@Component({
  selector: 'app-loginbox',
  templateUrl: './loginbox.component.html',
  styleUrls: ['./loginbox.component.scss'],
  providers: [ApiService],

})
export class LoginboxComponent implements OnInit {
  @Input() childMessage1: any;
  login: boolean = false;
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
  userForm: FormGroup;
  private formSubmitAttempt: boolean;
  constructor(
    private fb: FormBuilder,
    private fbuser: FormBuilder,
    private golvar: GlobalvarService,
    private router: Router,
    private api: ApiService,
    private pdata: AllmodelsService,
    private cookieService: CookieService,
    private _snackBar: MatSnackBar,
    public signupdialog: MatDialog,
    public forgetpassdialog: MatDialog
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
  public mobileforregister: string;
  ////////////////////
  public signupData: { mn: string, nationalid: string, name: string, family: string, btn: string, userKind: number };
  ////////////////////
  EnterByOtp() {
    this.getMobile = true;
    this.getOtp = false;
    this.loginByUserName = false;
  }
  signin() {
    this.mobileforregister = this.form.controls.mobilenumber.value;
    this.login = true;
    this.api.sendsms(this.form.controls.mobilenumber.value).subscribe(
      res => {
        console.log(res)
        if (res['result'] == 'mobile number not match') {
          this.form.reset();
          this.openSnackBar('?????????? ???????? ?????????? ???????? ?????? ???? ?????????? ?????? ???????? ??????!', '', 'red-snackbar', 5)
          this.signup()
        }
        else {
          this.getMobile = false;
          this.getOtp = true;
          this.loginByUserName = false;
          this.otpWait = this.OTPTIME;
          this.startTimer();
        }

      },
      err => {
        console.log(err)
        this.openSnackBar('???????? ???????????? ???? ????????!', '', 'red-snackbar', 5)

      }
    )
  }
  signup(): void {
    console.log(this.mobileforregister)
    const dialogRef = this.signupdialog.open(SignUPDialog, {
      width: '400px',
      data: { mobilenumber: this.mobileforregister },
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result.btn == "ok") {
        this.login = false;
        this.signupData = result;
        console.log('The dialog was closed');
        this.api.justsms(result.mn).subscribe(
          res => {
            this.getMobile = false;
            this.getOtp = true;
            this.loginByUserName = false;
            this.otpWait = this.OTPTIME;
            this.startTimer();
          },
          err => {
            console.log(err)
            this.openSnackBar('???????? ???????????? ???? ????????!', '', 'red-snackbar', 5)
          }
        )
      }
    });
  }
  OtpCheck() {
    var otpArray = [];
    otpArray = this.otpForm.value
    var otp = otpArray['input1'] + "" + otpArray['input2'] + "" + otpArray['input3'] + "" + otpArray['input4']
    this.api.checksms(otp, this.mobileforregister).subscribe(
      res => {
        if (res['result'] == 'success') {
          if (this.login) {
            this.router.navigate(['dashboard/dashboard1']);
            this.openSnackBar('?????? ???? ???????????? ???????? ????????!', '', 'green-snackbar', 4)
          }
          else {
            console.log(this.signupData)
            this.api.register(this.signupData.mn, this.signupData.name, this.signupData.family, this.signupData.nationalid, this.signupData.userKind).subscribe(
              res => {
                console.log(res)
                this.router.navigate(['dashboard/dashboard1']);
                this.openSnackBar('?????? ???? ???????????? ?????? ?????? ?????? ??????!', '', 'green-snackbar', 4)
              },
              err => {
                console.log(err)
                this.openSnackBar('?????? ???? ???????????? ???? ????????', '', 'red-snackbar', 5)

              }
            )
          }
        } else {
          this.otpForm.reset();
          this.openSnackBar('???? ???????? ?????? ????????  ????????', '', 'red-snackbar', 5)
        }
      }
      ,
      err => {
        this.otpForm.reset();
        this.openSnackBar('?????? ???? ???????????? ???? ????????', '', 'red-snackbar', 5)
      }
    )
  }
  OtpReSend() {
    this.otpReSend = false;
    this.otpForm.reset();
    this.openSnackBar('?????????? ?????????? ?????????? ????!', '', 'green-snackbar', 4)
    this.api.sendsms(this.form.controls.mobilenumber.value).subscribe(
      res => {
        console.log(res)
        if (res['result'] == 'mobile number not match') {
          this.form.reset();
          this.openSnackBar('?????????? ???????? ?????????? ???????? ?????? ???? ?????????? ?????? ???????? ??????!', '', 'red-snackbar', 5)
          this.signup()
        }
        else {
          this.getMobile = false;
          this.getOtp = true;
          this.loginByUserName = false;
          this.otpWait = this.OTPTIME;
          this.startTimer();
        }
      },
      err => { console.log(err) }
    )
  }
  EditMobileNumber() {
    this.getMobile = true;
    this.getOtp = false;
    this.otpReSend = false;
    this.otpForm.reset();
    this.form.reset();
  }
  /////////////////////////
  EnterByUserName() {
    this.getMobile = false;
    this.getOtp = false;
    this.loginByUserName = true;
  }
  usersignin() {
    //check username and password exist in db
    if (this.userForm.controls.username.value == "masih" && this.userForm.controls.password.value == "1234") {
      this.router.navigate(['dashboard/dashboard1']);
      this.openSnackBar('?????? ???? ???????????? ???????? ????????!', '', 'green-snackbar', 4)
    }
    else {
      this.otpForm.reset();
      this.openSnackBar('?????? ???????????? ?? ???? ?????????????? ???????? ?????? ???????? ?????? ????????!', '', 'red-snackbar', 7)
    }
  }
  forgetpass(): void {
    const dialogRef1 = this.forgetpassdialog.open(ForgetPassDialog, {
      width: '800px',
      data: { mobilenumber: "12313" },
      disableClose: true
    });

    dialogRef1.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }


  interval;
  public otpWait = 60;
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
  openSnackBar(message: string, action: string, alertkind: string, showtime: number, hp?: MatSnackBarHorizontalPosition, vp?: MatSnackBarVerticalPosition) {
    this._snackBar.open(message, action, {
      duration: showtime * 1000,
      panelClass: [alertkind],
      horizontalPosition: hp,
      verticalPosition: vp

    });
  }
}


/////////////signup dialog//////////////

@Component({
  selector: 'sign-uP-Dialog',
  templateUrl: 'signupdialog.html',
})
export class SignUPDialog implements OnInit {
  public alertshow: boolean = false;
  public userkind: string = "null";
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private api: ApiService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<SignUPDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
  form: FormGroup;
  private formSubmitAttempt: boolean;
  public isCustomer: boolean = true;
  public usercategory: { id: string, name: string }[]
  public uc = 0;
  radioModel;
  ngOnInit() {
    console.log(this.data)

    this.api.GetPersonCategories().subscribe(
      res => {
        this.usercategory = res
        console.log(this.usercategory)
      },
      err => {
        console.log(err)
      }
    )
    this.form = this.fb.group({
      nationalid: [''],    // {5}
      mobilenumber: [this.data.mobilenumber, Validators.required],
      name: ['', Validators.required],
      family: ['', Validators.required]
    });
  }
  selectuserkind(uk: number) {
    this.uc = uk
  }

  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  close() {
    this.dialogRef.close();
  }
  signup(): void {
    var nationalid = this.form.value['nationalid']
    var mobileNumaber = this.form.value['mobilenumber']
    var name = this.form.value['name']
    var family = this.form.value['family']
    if (this.uc == 0) {
      this.alertshow = true;
    }
    else {
      var data: { mn: string, nationalid: string, name: string, family: string, btn: string, userKind: number } = { mn: mobileNumaber, nationalid: nationalid, name: name, family: family, btn: "ok", userKind: this.uc }
      this.dialogRef.close(data);
    }
  }

  openSnackBar(message: string, action: string, alertkind: string, showtime: number, hp?: MatSnackBarHorizontalPosition, vp?: MatSnackBarVerticalPosition) {
    this._snackBar.open(message, action, {
      duration: showtime * 1000,
      panelClass: [alertkind],
      horizontalPosition: hp = 'start',
      verticalPosition: vp = 'bottom',
    });
  }
}

/////////////forgetpassword dialog//////////////

@Component({
  selector: 'forget-pass-Dialog',
  templateUrl: 'forgetpassword.html',
})
export class ForgetPassDialog implements OnInit {
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ForgetPassDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }
  form: FormGroup;
  private formSubmitAttempt: boolean;
  public getmobile: boolean;
  public getsms: boolean;
  public changepassword: boolean;
  public passok: boolean;
  ngOnInit() {
    this.getmobile = true;
    this.form = this.fb.group({     // {5}
      mobilenumber: ['', Validators.required],
      username: ['', Validators.required]
    });
  }
  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  close() {
    this.dialogRef.close();
  }
  sendsms() {

  }
  changepass(): void {
    var mobileNumaber = this.form.value['mobilenumber']
    var name = this.form.value['username']
    ////call singup api to register user in db
    this.dialogRef.close();
  }
}

