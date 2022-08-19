
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth/auth.service';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../app/login/loginbox/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;                    // {1}
  private formSubmitAttempt: boolean; // {2}
  public theme1:boolean=false;
  public theme2:boolean=true;
  
  public childComponentLoaded: boolean = false;
  loadChildComponent() {
    this.childComponentLoaded = true
    this.loginshow=false;
  }

  constructor(
    private fb: FormBuilder,  
    private api: ApiService,      // {3}
    private authService: AuthService // {4}
  ) {}
    public news:{title:string,shortcontent:string,content:string}[]=[]
    loginshow:boolean=true;
    public applink=""
  public mainpage:boolean=false
  public aboutus:boolean=false
  public contactus:boolean=false
  ngOnInit() {
    this.loginshow=true;
    this.form = this.fb.group({     // {5}
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.mainpage=true;
    this.aboutus=false;
    this.contactus=false;
    this.news.push({title:"سرانه ۷۱۰ هزار تومانی بیمه در ایران",shortcontent:"سلیمانی، رییس کل بیمه مرکزی با بیان اینکه سرانه حق بیمه در ایران ۷۱۰ هزار تومان است، گفت: این رقم برای میانگین کشورهای پیشرفته ۸۱۸ دلار است و ما فاصله زیادی با این رقم داریم.",content:"به گزارش کارگر آنلاین و به نقل از پژوهشکده پولی و بانکی، غلامرضا سلیمانی امیری صبح امروز (دوشنبه) در نشستی خبری با خبرنگاران که به صورت وبینار برگزار شد، اعلام کرد: در سال گذشته ۵۹ هزار میلیارد تومان حق بیمه تولید شد و ضریب خسارت هم حدود ۸۹ درصد بوده است. البته در سطح جهان این ضریب بین ۶۰ تا ۶۵ درصد است."})
    this.news.push({title:"۱۴ هزار جامانده بیمه بیکاری به دفاتر پیشخوان مراجعه کنند",shortcontent:"مدیرکل بیمه بیکاری وزارت کار درباره جاماندگان بیمه بیکاری گفت: آن دسته از جاماندگان بیمه بیکاری که مدت بیکاری آن‌ها تا خردادماه ادامه داشته با مراجعه به دفاتر پیشخوان دولت نسبت به احراز هویت خود اقدام کنند.",content:"ه گزارش خبرنگار اقتصادی خبرگزاری تسنیم، بیکاری، یکی از تبعات اقتصادی شیوع کروناست که به ‌واسطه اعمال محدودیت‌های ترددی و تعطیلی کسب ‌وکارها، دامن‌گیر بخش قابل‌توجهی از نیروی کار کشور شده است.   دولت برای حمایت از معیشت کسانی که بالاجبار در دوره شیوع کرونا کار خود را از دست داده‌اند، 5هزار میلیارد تومان در نظر گرفته که با تزریق به صندوق بیکاری، صرف حمایت از کسانی خواهد شد که با تعطیلی مشاغل در اپیدمی کرونا از ادامه کار بازمانده‌اند. برای همین منظور سامانه‌ای به آدرس bimebikari.mcls.gov.ir  راه‌اندازی شد تا افراد، درخواست خود را در آن ثبت کنند."})
    this.api.checkupdate().subscribe(
      res=>{
        console.log(res)
        this.applink=res[0]["link"]
      },
      err=>{console.log(err)}
    )

  }
  about(){
    this.mainpage=false;
    this.aboutus=true;
    this.contactus=false;
  }
  contact(){
    this.mainpage=false;
    this.aboutus=false;
    this.contactus=true;
  }
  mainp(){
    this.mainpage=true;
    this.aboutus=false;
    this.contactus=false;
  }
  isFieldInvalid(field: string) { // {6}
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  modalClosed(isClosed) {
    this.childComponentLoaded = false;
    this.loginshow=true;
  }
  onSubmit() {
    // if (this.form.valid) {
    //   this.authService.signinUser('masih','123'); // {7}
    // }
    // this.formSubmitAttempt = true;             // {8}
  }

  
}
