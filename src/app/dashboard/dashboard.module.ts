import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgSelectModule } from '@ng-select/ng-select';
import { DashboardRoutingModule } from "./dashboard-routing.module";
// import { ChartistModule } from 'ng-chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatchHeightModule } from "../shared/directives/match-height.directive";

import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {FormsModule} from '@angular/forms';
import { NgxD3LiquidFillGaugeModule } from '../modules/ngx-d3-liquid-fill-gauge/ngx-d3-liquid-fill-gauge.module';

@NgModule({
    imports: [
        FormsModule,
        NgSelectModule,
        CommonModule,
        DashboardRoutingModule,
        NgxD3LiquidFillGaugeModule,
        NgbModule,
        Ng2SmartTableModule,
        MatchHeightModule
    ],
    exports: [],
    declarations: [
        Dashboard1Component
    ],
    providers: [],
})
export class DashboardModule { }
