import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdmingroupUpdataComponent} from './admingroup-updata.component';

const routes: Routes = [
  {
    path: '',
    component: AdmingroupUpdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmingroupUpdataRoutingModule { }
