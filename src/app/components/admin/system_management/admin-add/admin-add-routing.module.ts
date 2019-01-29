import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminAddComponent} from './admin-add.component';

const routes: Routes = [
  {
    path: '',
    component: AdminAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAddRoutingModule { }
