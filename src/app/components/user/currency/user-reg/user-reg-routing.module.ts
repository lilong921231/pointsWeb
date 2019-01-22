import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserRegComponent} from './user-reg.component';

const routes: Routes = [
  {
    path: '',
    component: UserRegComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRegRoutingModule { }
