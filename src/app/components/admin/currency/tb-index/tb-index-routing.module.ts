import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TbIndexComponent} from './tb-index.component';

const routes: Routes = [
  {
    path: '',
    component: TbIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TbIndexRoutingModule { }
