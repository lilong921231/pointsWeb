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

@NgModule({
  declarations: [
    UserIphoneCommonModule,
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
  ],
  exports: [
    UserIphoneCommonModule,
  ]
})
export class UserIphoneCommonModule { }
