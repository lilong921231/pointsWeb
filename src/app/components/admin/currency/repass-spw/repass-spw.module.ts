import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepassSpwRoutingModule } from './repass-spw-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RepassSpwRoutingModule,
    AdminCommonModule
  ]
})
export class RepassSpwModule { }
