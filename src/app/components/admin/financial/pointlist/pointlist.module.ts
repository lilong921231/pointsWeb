import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointlistRoutingModule } from './pointlist-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PointlistRoutingModule,
    AdminCommonModule
  ]
})
export class PointlistModule { }
