import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LevelUpdataComponent} from './level-updata.component';

const routes: Routes = [
  {
    path: '',
    component: LevelUpdataComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelUpdataRoutingModule { }
