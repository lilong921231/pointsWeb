import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserMainComponent} from './user-main.component';

const userMainroutes: Routes = [
  {
    path: '',
    component: UserMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(userMainroutes)],
  exports: [RouterModule]
})
export class UserMainRoutingModule { }
