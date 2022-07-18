import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffreportComponent } from './staffreport.component';

const routes: Routes = [
  {
    path: '',
     component: StaffreportComponent,
    data: {
      title: 'Staffreport'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffreportRoutingModule { }