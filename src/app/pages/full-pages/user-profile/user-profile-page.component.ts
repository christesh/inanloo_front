import { Component, OnInit } from '@angular/core';
import { AllmodelsService } from '../../../Models/allmodels.service'
import { person } from 'app/Models/person';
import { ApiService } from '../../../../app/login/loginbox/api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-profile-page',
    templateUrl: './user-profile-page.component.html',
    styleUrls: ['./user-profile-page.component.scss']
})

export class UserProfilePageComponent implements OnInit {
    public jobposition="";
    public personData: person;
    public personname: string;
    public prsonpic: string;
    public name="";
    public father="";
    public address="";
    public mobile="";
    public gender="";
    public company="";
    public shaba="";
    public email="";
    wallpaperpic=""
    //Variable Declaration
    currentPage: string = "About"
    constructor(private pdata: AllmodelsService,private router: Router, private api: ApiService, private cookieService: CookieService) { }
    ngOnInit() {
        
    }
    ngAfterViewInit() {
        var token_parts = this.cookieService.get('T');
        this.api.getPerson(token_parts).subscribe(
            response1 => {
                this.personData = response1;
                this.personname = response1[0]['f_name'] + " " + response1[0]['l_name']
                this.name=this.personname
                this.father=response1[0]['father_name']
                this.email=response1[0]['e_mail']
                this.address=response1[0]['address']
                this.mobile=response1[0]['mobile']
                if(response1[0]['gender']==1)
                {
                    this.gender="مرد"
                }
                else
                {
                    this.gender="زن"
                }
                this.company=response1[0]['company_id__name']
                this.shaba=response1[0]['shaba_number']
                var imgsrc = "http://bimeh.plus/media/" + response1[0]['picture']
                this.wallpaperpic="http://bimeh.plus/media/" + response1[0]['company_id__picture']
                this.prsonpic = imgsrc;
            },
            err => {
                this.router.navigate(['login']);
                console.error('refresh error', err);
            }
        )

    }
    showPage(page: string) {
        this.currentPage = page;
    }
}