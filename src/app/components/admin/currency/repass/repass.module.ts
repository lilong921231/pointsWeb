import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepassRoutingModule } from './repass-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RepassRoutingModule,
    AdminCommonModule
  ]
})
export class RepassModule { }
