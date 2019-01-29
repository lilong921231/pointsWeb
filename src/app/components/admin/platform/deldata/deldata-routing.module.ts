import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeldataComponent} from './deldata.component';

const routes: Routes = [
  {
    path: '',
    component: DeldataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeldataRoutingModule { }
