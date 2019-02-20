import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserIphoneMoneyComponent} from './user-iphone-money.component';

const routes: Routes = [
  {
    path: '',
    component: UserIphoneMoneyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserIphoneMoneyRoutingModule { }
