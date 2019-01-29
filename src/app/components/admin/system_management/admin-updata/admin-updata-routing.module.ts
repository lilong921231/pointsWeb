import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminUpdataComponent} from './admin-updata.component';

const routes: Routes = [
  {
    path: '',
    component: AdminUpdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminUpdataRoutingModule { }
