import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserRepassComponent} from './user-repass.component';

const routes: Routes = [
  {
    path: '',
    component: UserRepassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRepassRoutingModule { }
