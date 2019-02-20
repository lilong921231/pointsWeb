import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserIphoneMainRoutingModule } from './user-iphone-main-routing.module';
import {UserIphoneCommonModule} from '../user-iphone-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserIphoneMainRoutingModule,
    UserIphoneCommonModule
  ]
})
export class UserIphoneMainModule { }
