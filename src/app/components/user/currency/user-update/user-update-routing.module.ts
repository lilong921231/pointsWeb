import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserUpdateComponent} from './user-update.component';

const routes: Routes = [
  {
    path: '',
    component: UserUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserUpdateRoutingModule { }
