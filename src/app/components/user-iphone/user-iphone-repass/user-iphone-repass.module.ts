import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserIphoneRepassRoutingModule } from './user-iphone-repass-routing.module';
import {UserIphoneCommonModule} from '../user-iphone-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserIphoneRepassRoutingModule,
    UserIphoneCommonModule
  ]
})
export class UserIphoneRepassModule { }
