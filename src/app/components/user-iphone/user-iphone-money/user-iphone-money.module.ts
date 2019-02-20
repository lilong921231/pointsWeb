import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserIphoneMoneyRoutingModule } from './user-iphone-money-routing.module';
import {UserIphoneCommonModule} from '../user-iphone-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserIphoneMoneyRoutingModule,
    UserIphoneCommonModule
  ]
})
export class UserIphoneMoneyModule { }
