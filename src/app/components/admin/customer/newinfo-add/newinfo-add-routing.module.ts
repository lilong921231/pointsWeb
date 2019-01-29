import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewinfoAddComponent} from './newinfo-add.component';

const routes: Routes = [
  {
    path: '',
    component: NewinfoAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewinfoAddRoutingModule { }
