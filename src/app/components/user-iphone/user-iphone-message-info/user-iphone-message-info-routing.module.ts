import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserIphoneMessageInfoComponent} from './user-iphone-message-info.component';

const routes: Routes = [
  {
    path: '',
    component: UserIphoneMessageInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserIphoneMessageInfoRoutingModule { }
