import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MessageinfoComponent} from './messageinfo.component';

const routes: Routes = [
  {
    path: '',
    component: MessageinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessageinfoRoutingModule { }
