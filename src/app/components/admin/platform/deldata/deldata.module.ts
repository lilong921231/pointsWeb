import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeldataRoutingModule } from './deldata-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DeldataRoutingModule,
    AdminCommonModule
  ]
})
export class DeldataModule { }
