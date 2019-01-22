import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserMessageInfoComponent} from './user-message-info.component';

const routes: Routes = [
  {
    path: '',
    component: UserMessageInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserMessageInfoRoutingModule { }
