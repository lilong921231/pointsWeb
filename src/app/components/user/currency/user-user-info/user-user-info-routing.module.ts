import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserUserInfoComponent} from './user-user-info.component';

const routes: Routes = [
  {
    path: '',
    component: UserUserInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserUserInfoRoutingModule { }
