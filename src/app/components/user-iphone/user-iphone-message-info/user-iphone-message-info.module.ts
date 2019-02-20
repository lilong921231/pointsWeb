import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserIphoneMessageInfoRoutingModule } from './user-iphone-message-info-routing.module';
import {UserIphoneCommonModule} from '../user-iphone-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserIphoneMessageInfoRoutingModule,
    UserIphoneCommonModule
  ]
})
export class UserIphoneMessageInfoModule { }
