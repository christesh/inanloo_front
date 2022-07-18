import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { FormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-jalali-date-picker'
import { StaffreportRoutingModule } from "./staffreport-routing.module";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StaffreportComponent } from "./staffreport.component";
import { DragulaModule } from 'ng2-dragula';
@NgModule({
    imports: [
        FormsModule,
        Ng2SmartTableModule,
        // NgbModalRef,
        DragulaModule,
        DpDatePickerModule,
        NgSelectModule,
        NgbModule,
        CommonModule,
        StaffreportRoutingModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule
    ],
    declarations: [
        StaffreportComponent
    ]
})
export class StaffreportModule { }