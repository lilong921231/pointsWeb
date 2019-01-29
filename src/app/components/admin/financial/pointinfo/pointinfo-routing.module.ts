import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PointinfoComponent} from './pointinfo.component';

const routes: Routes = [
  {
    path: '',
    component: PointinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointinfoRoutingModule { }
