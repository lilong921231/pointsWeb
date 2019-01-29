import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdmingroupComponent} from './admingroup.component';

const routes: Routes = [
  {
    path: '',
    component: AdmingroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmingroupRoutingModule { }
