import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminAddRoutingModule } from './admin-add-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminAddRoutingModule,
    AdminCommonModule
  ]
})
export class AdminAddModule { }
