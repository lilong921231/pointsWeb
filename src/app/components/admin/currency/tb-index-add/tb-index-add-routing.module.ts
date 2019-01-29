import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TbIndexAddComponent} from './tb-index-add.component';

const routes: Routes = [
  {
    path: '',
    component: TbIndexAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TbIndexAddRoutingModule { }
