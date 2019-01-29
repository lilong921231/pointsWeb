import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PointlistComponent} from './pointlist.component';

const routes: Routes = [
  {
    path: '',
    component: PointlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointlistRoutingModule { }
