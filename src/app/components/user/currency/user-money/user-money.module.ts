import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMoneyRoutingModule } from './user-money-routing.module';
import {UserCommonModule} from '../../user-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserMoneyRoutingModule,
    UserCommonModule
  ]
})
export class UserMoneyModule { }
