import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TbIndexRoutingModule } from './tb-index-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TbIndexRoutingModule,
    AdminCommonModule
  ]
})
export class TbIndexModule { }
