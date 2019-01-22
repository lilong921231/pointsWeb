import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserMessageComponent} from './user-message.component';

const routes: Routes = [
  {
    path: '',
    component: UserMessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMessageRoutingModule { }
