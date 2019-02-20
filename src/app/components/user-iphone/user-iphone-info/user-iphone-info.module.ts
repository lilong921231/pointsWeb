import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserIphoneInfoRoutingModule } from './user-iphone-info-routing.module';
import {UserIphoneCommonModule} from '../user-iphone-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserIphoneInfoRoutingModule,
    UserIphoneCommonModule
  ]
})
export class UserIphoneInfoModule { }
