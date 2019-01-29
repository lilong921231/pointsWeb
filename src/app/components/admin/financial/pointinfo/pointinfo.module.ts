import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointinfoRoutingModule } from './pointinfo-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PointinfoRoutingModule,
    AdminCommonModule
  ]
})
export class PointinfoModule { }
