import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from '../../../../app/login/loginbox/api.service'
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-forgot-password-page',
    templateUrl: './forgot-password-page.component.html',
    styleUrls: ['./forgot-password-page.component.scss']
})

export class ForgotPasswordPageComponent {
    @ViewChild('f', { static: false }) forogtPasswordForm: NgForm;

    constructor(
        private cookieService: CookieService,
        private api: ApiService,
        private router: Router,
        private route: ActivatedRoute) { }

    public getmobile: boolean = false
    public getsms: boolean = false
    public changepass: boolean = false
    public errbox: boolean = false
    public token_parts = ""
    public user = ""
    public mobile = ""
    public smscode = ""
    public pass1 = ""
    public pass2 = ""
    public recivesms = ""
    public errmsg = ""
    public showpass: boolean = false
    public passok: boolean = false

    ngOnInit() {
        this.token_parts = this.cookieService.get('T');
        this.getmobile = true;
        this.getsms = false
        this.changepass = false
        this.errbox = false
        this.showpass = false
        this.passok = false;
    }

    showpass1() {
        this.showpass != this.showpass
    }

    // sendsms() {
    //     console.log(this.user, this.mobile)
    //     this.api.sendsms(this.user, this.mobile).subscribe(
    //         res => {
    //             console.log(res)
    //             if (res['result'] == "username and mobile number not match") {
    //                 this.errmsg = res['result']
    //                 this.errbox = true
    //             }
    //             else {
    //                 this.passok = false;
    //                 this.errbox = false
    //                 this.getsms = true
    //                 this.getmobile = false
    //                 this.changepass = false
    //             }
    //         },
    //         err => {
    //             console.log(err)
    //         }
    //     )
    // }
    // checksms() {
    //     console.log(this.user, this.mobile, this.smscode)
    //     this.api.checksms(this.user, this.mobile, this.smscode).subscribe(
    //         res => {
    //             console.log(res)
    //             if (res['result'] == "code does not match") {
    //                 this.errmsg = res['result']
    //                 this.errbox = true
    //             }
    //             else {
    //                 this.passok = false;
    //                 this.errbox = false
    //                 this.getsms = false
    //                 this.getmobile = false
    //                 this.changepass = true
    //             }
    //         },
    //         err => {
    //             console.log(err)
    //         }
    //     )
    // }

    changepass1() {
        console.log(this.user, this.pass1, this.pass2)
        if(this.pass1==this.pass2)
        {
        this.api.changepass(this.user, this.pass1).subscribe(
            res => {
                console.log(res['result'])
                this.passok = true;
                this.errbox = false
                this.getsms = false
                this.getmobile = false
                this.changepass = false
            },
            err => {
                console.log(err)
            }
        )
        }
        else
        {
            this.errbox = true
            this.errmsg ="تکرار گذرواژه با گذرواژه وارد شده تطابق ندارد!"
        }
    }



    // On submit click, reset form fields
    // onSubmit() {
    //     this.forogtPasswordForm.reset();
    // }

    // // On login link click
    // onLogin() {
    //     this.router.navigate(['login'], { relativeTo: this.route.parent });
    // }

    // // On registration link click
    // onRegister() {
    //     this.router.navigate(['register'], { relativeTo: this.route.parent });
    // }
}
