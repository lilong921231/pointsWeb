import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmingroupRoutingModule } from './admingroup-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdmingroupRoutingModule,
    AdminCommonModule
  ]
})
export class AdmingroupModule { }
