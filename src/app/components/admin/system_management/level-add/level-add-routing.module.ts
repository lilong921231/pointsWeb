import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LevelAddComponent} from './level-add.component';

const routes: Routes = [
  {
    path: '',
    component: LevelAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LevelAddRoutingModule { }
