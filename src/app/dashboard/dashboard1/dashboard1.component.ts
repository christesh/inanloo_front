import { Component, HostListener,OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import * as tableData from '../../shared/data/smart-data-table';
import { ChartType, ChartEvent } from "ng-chartist";
import * as CanvasJS from '../../../assets/canvasjs.min';
import { ApiService } from '../../forms/layouts/basic/api.service';
import { CookieService } from 'ngx-cookie-service';
import { GlobalvarService } from '../../globalvar.service';
import * as moment from 'jalali-moment';
import { LocalDataSource } from 'ng2-smart-table';
import { delay } from 'rxjs/operators';
import { NgbModal, ModalDismissReasons, NgbAlertConfig, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';


@Component({
    selector: 'app-dashboard1',
    templateUrl: './dashboard1.component.html',
    styleUrls: ['./dashboard1.component.scss']
})

export class Dashboard1Component implements OnInit {
    public firstEnter:boolean=false;
    constructor() {

    }
    ngOnInit()
    {
        this.firstEnter=true;
    }
}
