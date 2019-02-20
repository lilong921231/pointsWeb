import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserIphonePointRoutingModule } from './user-iphone-point-routing.module';
import {UserIphoneCommonModule} from '../user-iphone-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserIphonePointRoutingModule,
    UserIphoneCommonModule
  ]
})
export class UserIphonePointModule { }
