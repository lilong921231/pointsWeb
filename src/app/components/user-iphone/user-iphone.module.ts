import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserIphoneRoutingModule } from './user-iphone-routing.module';
import { UserIphoneComponent } from './user-iphone.component';
import {UserIphoneCommonModule} from './user-iphone-common.module';

@NgModule({
  declarations: [UserIphoneComponent],
  imports: [
    CommonModule,
    UserIphoneRoutingModule,
    UserIphoneCommonModule
  ]
})
export class UserIphoneModule { }
