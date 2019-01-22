import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserPointComponent} from './user-point.component';

const routes: Routes = [
  {
    path: '',
    component: UserPointComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPointRoutingModule { }
