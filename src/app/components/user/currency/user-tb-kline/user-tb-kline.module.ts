import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserTbKlineRoutingModule } from './user-tb-kline-routing.module';
import {UserCommonModule} from '../../user-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserTbKlineRoutingModule,
    UserCommonModule
  ]
})
export class UserTbKlineModule { }
