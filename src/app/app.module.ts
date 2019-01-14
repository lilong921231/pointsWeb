import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationModule } from 'ngx-bootstrap';
import { CKEditorComponent, CKEditorModule } from 'ng2-ckeditor';
import { MomentModule } from 'ngx-moment';
import { UserMainComponent } from './components/user/currency/user-main/user-main.component';
import { UserRegComponent } from './components/user/currency/user-reg/user-reg.component';
import { UserUserInfoComponent } from './components/user/currency/user-user-info/user-user-info.component';
import { UserMessageComponent } from './components/user/currency/user-message/user-message.component';
import { UserTbKlineComponent } from './components/user/currency/user-tb-kline/user-tb-kline.component';
import { UserRepassComponent } from './components/user/currency/user-repass/user-repass.component';
import { UserPointComponent } from './components/user/currency/user-point/user-point.component';
import { UserMoneyComponent } from './components/user/currency/user-money/user-money.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserMenuComponent } from './components/user/common/user-menu/user-menu.component';
import { UserHeaderComponent } from './components/user/common/user-header/user-header.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { UserMessageInfoComponent } from './components/user/currency/user-message-info/user-message-info.component';
import { CommonModule, HashLocationStrategy , LocationStrategy } from '@angular/common';

/**
 * @author lilong 2018-12-23
 * 添加组件模块
 */
@NgModule({
  declarations: [
    AppComponent,
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
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    PaginationModule.forRoot(),
    HttpClientModule,
    MomentModule,
    NgxEchartsModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
