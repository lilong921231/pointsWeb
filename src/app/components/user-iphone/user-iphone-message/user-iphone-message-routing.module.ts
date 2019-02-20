import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserIphoneMessageComponent} from './user-iphone-message.component';

const routes: Routes = [
  {
    path: '',
    component: UserIphoneMessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserIphoneMessageRoutingModule { }
