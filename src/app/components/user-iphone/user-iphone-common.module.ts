import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserIphoneMainComponent } from './user-iphone-main/user-iphone-main.component';
import { UserIphoneMessageComponent } from './user-iphone-message/user-iphone-message.component';
import { UserIphoneMoneyComponent } from './user-iphone-money/user-iphone-money.component';
import { UserIphoneRepassComponent } from './user-iphone-repass/user-iphone-repass.component';
import { UserIphoneRegComponent } from './user-iphone-reg/user-iphone-reg.component';
import { UserIphoneInfoComponent } from './user-iphone-info/user-iphone-info.component';
import { UserIphonePointComponent } from './user-iphone-point/user-iphone-point.component';
import { UserIphoneMessageInfoComponent } from './user-iphone-message-info/user-iphone-message-info.component';
import {UserIphoneRoutingModule} from './user-iphone-routing.module';
import {MomentModule} from 'ngx-moment';
import {UserIphoneLoginComponent} from './user-iphone-login/user-iphone-login.component';
import {UserIphoneComponent} from './user-iphone.component';

@NgModule({
  declarations: [
    UserIphoneComponent,
    UserIphoneLoginComponent,
    UserIphoneMainComponent,
    UserIphoneMessageComponent,
    UserIphoneMoneyComponent,
    UserIphoneRepassComponent,
    UserIphoneRegComponent,
    UserIphoneInfoComponent,
    UserIphonePointComponent,
    UserIphoneMessageInfoComponent,
  ],
  imports: [
    CommonModule,
    UserIphoneRoutingModule,
    MomentModule
  ],
  exports: [
    MomentModule,
    UserIphoneComponent,
    UserIphoneLoginComponent,
    UserIphoneMainComponent,
    UserIphoneMessageComponent,
    UserIphoneMoneyComponent,
    UserIphoneRepassComponent,
    UserIphoneRegComponent,
    UserIphoneInfoComponent,
    UserIphonePointComponent,
    UserIphoneMessageInfoComponent,
  ]
})
export class UserIphoneCommonModule { }
