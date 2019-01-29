import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TbIndexUpdataComponent} from './tb-index-updata.component';

const routes: Routes = [
  {
    path: '',
    component: TbIndexUpdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TbIndexUpdataRoutingModule { }
