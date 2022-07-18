import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import {LoginComponent} from './login/login.component'

import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";

import { Full_ROUTES } from "./shared/routes/full-layout.routes";
import { CONTENT_ROUTES } from "./shared/routes/content-layout.routes";
import {BorderedComponent} from "../app/forms/layouts/bordered/bordered.component"
import { AuthGuard } from './shared/auth/auth-guard.service';

const appRoutes: Routes = [
  {path:'' , component:LoginComponent},
  {
    path: '',
    redirectTo: 'dashboard/dashboard1',
    pathMatch: 'full',
  },
  {
    path: 'logout',
    component:LoginComponent
  },
  {
    path: 'forms/bordered',
    component:BorderedComponent
  },
  { path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: Full_ROUTES, canActivate: [AuthGuard] },
  { path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES, canActivate: [AuthGuard] },
  {
    path: '**',
    redirectTo: 'pages/error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
