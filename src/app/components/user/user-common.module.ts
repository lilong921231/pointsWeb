import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserMainComponent} from './currency/user-main/user-main.component';
import {UserRegComponent} from './currency/user-reg/user-reg.component';
import {UserUserInfoComponent} from './currency/user-user-info/user-user-info.component';
import {UserMessageComponent} from './currency/user-message/user-message.component';
import {UserTbKlineComponent} from './currency/user-tb-kline/user-tb-kline.component';
import {UserRepassComponent} from './currency/user-repass/user-repass.component';
import {UserPointComponent} from './currency/user-point/user-point.component';
import {UserMoneyComponent} from './currency/user-money/user-money.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserMenuComponent} from './common/user-menu/user-menu.component';
import {UserHeaderComponent} from './common/user-header/user-header.component';
import {UserMessageInfoComponent} from './currency/user-message-info/user-message-info.component';
import {MomentModule} from 'ngx-moment';
import {NgxEchartsModule} from 'ngx-echarts';
import {CKEditorModule} from 'ng2-ckeditor';
import {PaginationModule} from 'ngx-bootstrap';
import {AppRoutingModule} from '../../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from '../admin/login/login.component';

/**
 * @desc user端公共组件及声明模块
 * @author lilong
 * @date 2019-1-18
 */

@NgModule({
  declarations: [
    UserMainComponent,
    UserRegComponent,
    UserUserInfoComponent,
    UserMessageComponent,
    UserTbKlineComponent,
    UserRepassComponent,
    UserPointComponent,
    UserMoneyComponent,
    UserLoginComponent,
    UserMenuComponent,
    UserHeaderComponent,
    UserMessageInfoComponent,
  ],
  imports: [
    CommonModule,
    MomentModule,
    NgxEchartsModule,
    CKEditorModule,
    HttpClientModule,
    PaginationModule.forRoot(),
  ],
  exports: [
    HttpClientModule,
    CKEditorModule,
    MomentModule,
    NgxEchartsModule,
    UserMainComponent,
    UserRegComponent,
    UserUserInfoComponent,
    UserMessageComponent,
    UserTbKlineComponent,
    UserRepassComponent,
    UserPointComponent,
    UserMoneyComponent,
    UserLoginComponent,
    UserMenuComponent,
    UserHeaderComponent,
    UserMessageInfoComponent,
  ]
})
export class UserCommonModule { }
