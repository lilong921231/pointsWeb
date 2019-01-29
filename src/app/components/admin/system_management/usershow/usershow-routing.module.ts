import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsershowComponent} from './usershow.component';

const routes: Routes = [
  {
    path: '',
    component: UsershowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsershowRoutingModule { }
