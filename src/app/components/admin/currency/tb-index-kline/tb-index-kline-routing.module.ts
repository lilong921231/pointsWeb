import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TbIndexKlineComponent} from './tb-index-kline.component';

const routes: Routes = [
  {
    path: '',
    component: TbIndexKlineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TbIndexKlineRoutingModule { }
