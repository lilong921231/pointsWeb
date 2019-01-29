import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepassComponent} from './repass.component';

const routes: Routes = [
  {
    path: '',
    component: RepassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepassRoutingModule { }
