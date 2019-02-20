import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserIphoneMessageRoutingModule } from './user-iphone-message-routing.module';
import {UserIphoneCommonModule} from '../user-iphone-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserIphoneMessageRoutingModule,
    UserIphoneCommonModule
  ]
})
export class UserIphoneMessageModule { }
