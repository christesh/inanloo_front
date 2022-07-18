import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DragulaModule } from 'ng2-dragula';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TaskboardRoutingModule } from "./taskboard-routing.module";

import { TaskboardComponent } from "./taskboard.component";
import { CrudModalComponent } from './crud-modal/crud-modal.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    imports: [
        CommonModule,
        TaskboardRoutingModule,
        Ng2SmartTableModule,
        DragulaModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        NgSelectModule
    ],
    declarations: [
        TaskboardComponent,
        CrudModalComponent
    ],
    entryComponents: [
        CrudModalComponent
    ]
})
export class TaskboardModule { }
