import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserTbKlineComponent} from './user-tb-kline.component';

const routes: Routes = [
  {
    path: '',
    component: UserTbKlineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserTbKlineRoutingModule { }
