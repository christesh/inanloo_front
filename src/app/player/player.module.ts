import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { FormsModule } from '@angular/forms';
import { DpDatePickerModule} from 'ng2-jalali-date-picker'
import { PlayerRoutingModule } from "./player-routing.module";
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PlayerComponent } from "./player.component";
@NgModule({
    imports: [
        FormsModule,
        Ng2SmartTableModule,
        // NgbModalRef,
        DpDatePickerModule,
        NgSelectModule,
        NgbModule,
        CommonModule,
        PlayerRoutingModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule
    ],
    declarations: [
        PlayerComponent
    ]
})
export class PlayerModule { }
