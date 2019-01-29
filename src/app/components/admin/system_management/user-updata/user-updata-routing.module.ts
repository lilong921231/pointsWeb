import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserUpdataComponent} from './user-updata.component';

const routes: Routes = [
  {
    path: '',
    component: UserUpdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserUpdataRoutingModule { }
