import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyinfoRoutingModule } from './myinfo-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MyinfoRoutingModule,
    AdminCommonModule
  ]
})
export class MyinfoModule { }
