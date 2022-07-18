import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsRoutingModule } from "./forms-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { NGXFormWizardModule } from "./ngx-wizard/ngx-wizard.module";
import { CustomFormsModule } from 'ng2-validation';
import { MatchHeightModule } from "../shared/directives/match-height.directive";
import { ArchwizardModule } from 'angular-archwizard';
import { Ng2SmartTableModule } from 'ng2-smart-table';
// import { ValidationFormsComponent } from "./validation/validation-forms.component";
import { BasicComponent } from './layouts/basic/basic.component';
// import { HorizontalComponent } from './layouts/horizontal/horizontal.component';
// import { HiddenLabelsComponent } from './layouts/hidden-labels/hidden-labels.component';
// import { FormActionsComponent } from './layouts/form-actions/form-actions.component';
// import { BorderedComponent } from './layouts/bordered/bordered.component';
// import { StripedRowsComponent } from './layouts/striped-rows/striped-rows.component';
// import { InputsComponent } from './elements/inputs/inputs.component';
// import { InputGroupsComponent } from './elements/input-groups/input-groups.component';
// import { InputGridComponent } from './elements/input-grid/input-grid.component';
// import { ArchwizardComponent } from './archwizard/archwizard.component';
import { FormdocComponent } from './layouts/basic/formdoc/formdoc.component';
import { ServlistComponent } from './layouts/basic/servlist/servlist.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DpDatePickerModule } from 'ng2-jalali-date-picker';
import { PrintComponent } from './layouts/basic/print/print.component';
import { AnQrcodeModule } from 'an-qrcode';
import {TablesModule} from '../tables/tables.module';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import {NgxImageCompressService} from 'ngx-image-compress';

@NgModule({
    imports: [
        NgCircleProgressModule.forRoot({        
            backgroundColor: "#F1F1F1",
            backgroundPadding: -18,
            radius: 47,
            space: 4,
            toFixed: 0,
            maxPercent: 100,
            outerStrokeWidth: 10,
            outerStrokeColor: "#FF6347",
            innerStrokeColor: "#32CD32",
            innerStrokeWidth: 1,
            titleFontSize: "14",
            titleFontWeight: "700",
            responsive: true,
            startFromZero: false

        }),
        Ng2ImgMaxModule, 
        Ng2SmartTableModule,
        AnQrcodeModule,
        NgSelectModule,
        CommonModule,
        FormsRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        // TablesModule,
        ArchwizardModule,
        CustomFormsModule,
        MatchHeightModule,
        NgbModule,
        DpDatePickerModule
    ],
    declarations: [
        FormdocComponent,
        BasicComponent,
        ServlistComponent,
        PrintComponent
    ],
    providers: [NgxImageCompressService],
    exports:[PrintComponent]

})
export class FormModule { }
