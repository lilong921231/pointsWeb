import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointRoutingModule } from './point-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PointRoutingModule,
    AdminCommonModule
  ]
})
export class PointModule { }
