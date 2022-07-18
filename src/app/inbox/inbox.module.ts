import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule } from '@angular/forms';
import {DpDatePickerModule} from 'ng2-jalali-date-picker'
import { InboxRoutingModule } from "./inbox-routing.module";


import { InboxComponent } from "./inbox.component";

import { SearchPipe } from 'app/shared/pipes/search.pipe';


@NgModule({
    imports: [
        DpDatePickerModule,
        NgSelectModule,
        CommonModule,
        InboxRoutingModule,
        NgbModule,
        QuillModule,
        FormsModule,
        PerfectScrollbarModule
    ],
    declarations: [
        InboxComponent,
        SearchPipe
    ]
})
export class InboxModule { }
