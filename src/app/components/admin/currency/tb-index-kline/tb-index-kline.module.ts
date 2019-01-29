import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TbIndexKlineRoutingModule } from './tb-index-kline-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TbIndexKlineRoutingModule,
    AdminCommonModule
  ]
})
export class TbIndexKlineModule { }
