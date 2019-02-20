import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserIphoneRepassComponent} from './user-iphone-repass.component';

const routes: Routes = [
  {
    path: '',
    component: UserIphoneRepassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserIphoneRepassRoutingModule { }
