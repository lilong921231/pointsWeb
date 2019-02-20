import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserIphoneRegRoutingModule } from './user-iphone-reg-routing.module';
import {UserIphoneCommonModule} from '../user-iphone-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserIphoneRegRoutingModule,
    UserIphoneCommonModule
  ]
})
export class UserIphoneRegModule { }
