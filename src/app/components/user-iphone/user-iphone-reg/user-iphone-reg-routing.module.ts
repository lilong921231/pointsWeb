import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserIphoneRegComponent} from './user-iphone-reg.component';

const routes: Routes = [
  {
    path: '',
    component: UserIphoneRegComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserIphoneRegRoutingModule { }
