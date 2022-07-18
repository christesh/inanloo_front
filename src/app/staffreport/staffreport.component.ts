import { Component, ViewEncapsulation, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from '../../app/forms/layouts/basic/api.service';
import { TaskBoardService } from '../../app/taskboard/taskboard.service';
import { CrudModalComponent } from '../../app/taskboard/crud-modal/crud-modal.component';
import { Task } from '../../app/taskboard/taskboard.model';
import { DragulaService } from 'ng2-dragula';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-staffreport',
  templateUrl: './staffreport.component.html',
  styleUrls: ['./staffreport.component.scss'],
  providers: [TaskBoardService],
  encapsulation: ViewEncapsulation.None
})
export class StaffreportComponent implements OnInit {

  @ViewChild('picbox',{static:true})
  picbox: ElementRef;

  constructor(
    private api: ApiService,
    private cookieService: CookieService,
  ) { }

  public staffs: any[] = []
  public hasreg: boolean = true
  public haseval: boolean = true
  public hasregeval: boolean = true
  ngOnInit() {
    var token = this.cookieService.get('T')
    this.api.staffreports(token).subscribe(
      res => {
        for (let i = 0; i < res.length; i++) {
          switch (res[i]['staff_cat'].toString()) {
            case "1":
              res[i]['staff_cat'] = "مدیر سیستم"
              break;
            case "2":
              res[i]['staff_cat'] = "کارشناس بیمه"
              break;
            case "3":
              res[i]['staff_cat'] = "بیمه شده"
              break;
            case "4":
              res[i]['staff_cat'] = "مدیر سیستم"
              break;
            case "5":
              res[i]['staff_cat'] = "ارزیاب بیمه"
              break;
            case "6":
              res[i]['staff_cat'] = "کارشناس سگال"
              break;
          }
          if (res[i]['reg'].length == 0)
            this.hasreg = false
          else
            this.hasreg = true
          if (res[i]['eval'].length == 0)
            this.haseval = false
            else
            this.haseval = true
          if (res[i]['regeval'].length == 0)
            this.hasregeval = false
            else
            this.hasregeval = true
          this.staffs.push({nid:res[i]['staff_national_id'], name: res[i]['staff_name'] + " " + res[i]['staff_family'], pic: "http://bimeh.plus/media/" + res[i]['staff_pic'], cat: res[i]['staff_cat'], reg: res[i]['reg'], eval: res[i]['eval'], regeval: res[i]['regeval'], hasreg: this.hasreg, haseval: this.haseval, hasregeval: this.hasregeval,selected:false,selectedbg:"white",selectedc:"rgb(19, 31, 202)" })
        }
      },
      err => {
        console.log(err)
      }
    )
  }
  public picw:any
  ngAfterViewInit() {
    
    
  }
  search(){
    // this.picw= document.getElementById('picuser')
    this.picw=this.picbox.nativeElement.offsetWidth
    console.log('width: '+this.picw)
  }
  public selectedbg="white"
  public selectedc="rgb(19, 31, 202)"

  selectstaff(name){
    var idx= this.staffs.findIndex(item=>item.name==name)
    for(let i=0;i<this.staffs.length;i++)
    {
      if(i!=idx)
      {
        this.staffs[i].selected=false
        this.staffs[i].selectedbg="white"
        this.staffs[i].selectedc="rgb(19, 31, 202)"
      }
      else
      {
        this.staffs[i].selected=true
        this.staffs[i].selectedbg=" rgb(81, 180, 226)"
        this.staffs[i].selectedc="white"
      }
    }
  }

}
