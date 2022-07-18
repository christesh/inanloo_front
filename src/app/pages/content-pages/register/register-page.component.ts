import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../login/loginbox/api.service';
import { CookieService } from 'ngx-cookie-service';
@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})

export class RegisterPageComponent {
    @ViewChild('f', { static: false }) registerForm: NgForm;

    //  On submit click, reset field value
    constructor(
        private cookieService: CookieService,
        private api: ApiService,

    ) {
        //this.selectedMovie = {id: -1, username: '' , password:'' };
    }
    public oldpass = "";
    public newpass1 = ""
    public newpass2 = "";
    public invalidoldpass:boolean=false;
    public newpasscom:boolean=false;
    public newpassnotmatch:boolean=false;   
    public newpasstooshort:boolean=false;
    public notsave:boolean=true;
    public saved:boolean=false;
    public errormsg1="";
    public errormsg2="";
    public errormsg3="";
    public errormsg4="";
    changepass() {
        this.invalidoldpass=false;
        this.newpasscom=false;
        this.newpassnotmatch=false;
        this.newpasstooshort=false;
        this.errormsg1="";
        this.errormsg2="";
        this.errormsg3="";
        this.errormsg4="";
        if(this.oldpass=="")
        {
            this.errormsg1="لطفا گذرواژه قبلی را وارد نمائید!"
            this.invalidoldpass=true
            return
        }
        if(this.newpass1=="")
        {
            this.errormsg1="لطفا گذرواژه جدید را وارد نمائید!"
            this.invalidoldpass=true
            return
        }
        if(this.newpass2=="")
        {
            this.errormsg1="لطفا تکرار گذرواژه جدید را وارد نمائید!"
            this.invalidoldpass=true
            return
        }
        if(this.newpass2!=this.newpass1)
        {
            this.errormsg1="تکرار گذرواژه با گذرواژه وارد شده تطابق ندارد!"
            this.invalidoldpass=true
            return
        }
        var token = this.cookieService.get('T');
        this.api.changepassword(token, this.newpass1, this.newpass2, this.oldpass).subscribe(
            res => {
                this.notsave=false;
                this.saved=true;
            },
            errr => {
                this.notsave=true
                for (let key in errr.error) {
                    console.log("      key:", key, "value:", errr.error[key][0]);
                    if (key == "old_password") {
                        this.errormsg1="گذرواژه قبلی صحیح نمی باشد!"
                        this.invalidoldpass=true
                    }
                    if (key == "new_password2") {
                        for (let er in errr.error[key]) {
                            if (errr.error[key][Number(er)] == "The two password fields didn’t match.") {
                                this.errormsg2="دو گذرواژه جدید با هم برابر نیستند!"
                                this.newpassnotmatch=true
                            }
                            if (errr.error[key][Number(er)] == "This password is too short. It must contain at least 8 characters.") {
                                this.errormsg3="گذرواژه جدید باید حداقل شامل 8 کارکتر باشد!"
                                this.newpasstooshort=true
                            }
                            if (errr.error[key][Number(er)] == "This password is too common.") {
                                this.errormsg4="گذرواژه جدید بسیار ساده می باشد، لطفا از گذرواژه ای پیچیده تر استفاده کنید!"
                                this.newpasscom=true
                            }
                        }
                    }
                }
            }
        )
    }
}
