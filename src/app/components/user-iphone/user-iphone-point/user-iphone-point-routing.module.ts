import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserIphonePointComponent} from './user-iphone-point.component';

const routes: Routes = [
  {
    path: '',
    component: UserIphonePointComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserIphonePointRoutingModule { }
