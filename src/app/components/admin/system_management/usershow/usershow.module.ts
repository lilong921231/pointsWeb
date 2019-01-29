import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsershowRoutingModule } from './usershow-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsershowRoutingModule,
    AdminCommonModule
  ]
})
export class UsershowModule { }
