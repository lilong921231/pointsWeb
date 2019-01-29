import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LevelComponent} from './level.component';

const routes: Routes = [
  {
    path: '',
    component: LevelComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelRoutingModule { }
