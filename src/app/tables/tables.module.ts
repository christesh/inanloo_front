import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { StarRatingModule } from 'angular-star-rating';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TablesRoutingModule } from "./tables-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ExtendedTableComponent } from "./extended/extended-table.component";
import { RegularTableComponent } from "./regular/regular-table.component";
import { SmartTableComponent } from "./smart-data-table/smart-data-table.component";
import { ClaimdetailComponent } from './smart-data-table/claimdetail/claimdetail.component';
import { ShowpicComponent } from './smart-data-table/claimdetail/showpic/showpic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CountdownComponent } from './smart-data-table/countdown/countdown.component';
import { CountdownModule, CountdownGlobalConfig, CountdownConfig } from 'ngx-countdown';
import { CdownComponent } from './smart-data-table/cdown/cdown.component';
import { PrintgetdocComponent } from './smart-data-table/printgetdoc/printgetdoc.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatTabsModule } from '@angular/material/tabs';
// import { PrintComponent } from '../forms/layouts/basic/print/print.component'
import { AnQrcodeModule } from 'an-qrcode';
import { FormModule } from '../forms/forms.module'
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
// import { LightBoxModule, CarouselModule, ModalModule, WavesModule } from 'ng-uikit-pro-standard'
// import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgImageSliderModule } from 'ng-image-slider';
export function countdownConfigFactory(): CountdownConfig {
    return { format: 'd hh:mm:ss' };
}
@NgModule({
    imports: [
        NgImageSliderModule,
        MatTabsModule,
        NgbModule,
        StarRatingModule.forRoot(),
        CommonModule,
        TablesRoutingModule,
        AnQrcodeModule,
        Ng2SmartTableModule,
        FormsModule,
        FormModule,
        ReactiveFormsModule,
        CountdownModule,
        NgSelectModule,
        DpDatePickerModule
    ],
    declarations: [

        ExtendedTableComponent,
        RegularTableComponent,
        SmartTableComponent,
        ClaimdetailComponent,
        ShowpicComponent,
        // PrintComponent,
        CountdownComponent,
        CdownComponent,
        PrintgetdocComponent
    ],
    providers: [{ provide: CountdownGlobalConfig }],
    bootstrap: [CdownComponent],
    
})
export class TablesModule { }
