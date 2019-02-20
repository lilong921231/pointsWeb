import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserIphoneMainComponent} from './user-iphone-main.component';

const routes: Routes = [
  {
    path: '',
    component: UserIphoneMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserIphoneMainRoutingModule { }
