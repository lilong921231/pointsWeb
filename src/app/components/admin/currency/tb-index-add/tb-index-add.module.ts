import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TbIndexAddRoutingModule } from './tb-index-add-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TbIndexAddRoutingModule,
    AdminCommonModule
  ]
})
export class TbIndexAddModule { }
