import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserMoneyComponent} from './user-money.component';

const routes: Routes = [
  {
    path: '',
    component: UserMoneyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMoneyRoutingModule { }
