import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RepassSpwComponent} from './repass-spw.component';

const routes: Routes = [
  {
    path: '',
    component: RepassSpwComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepassSpwRoutingModule { }
