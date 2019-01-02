import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationModule } from 'ngx-bootstrap';
import { LoginComponent } from './components/admin/login/login.component';
import { MainComponent } from './components/admin/currency/main/main.component';
import { HeaderComponent } from './components/admin/common/header/header.component';
import { MyinfoComponent } from './components/admin/currency/myinfo/myinfo.component';
import { RepassComponent } from './components/admin/currency/repass/repass.component';
import { RepassSpwComponent } from './components/admin/currency/repass-spw/repass-spw.component';
import { TbIndexComponent } from './components/admin/currency/tb-index/tb-index.component';
import { TbIndexKlineComponent } from './components/admin/currency/tb-index-kline/tb-index-kline.component';
import { PointComponent } from './components/admin/financial/point/point.component';
import { PointlistComponent } from './components/admin/financial/pointlist/pointlist.component';
import { MessageComponent } from './components/admin/customer/message/message.component';
import { NewsComponent } from './components/admin/customer/news/news.component';
import { UserComponent } from './components/admin/system_management/user/user.component';
import { LevelComponent } from './components/admin/system_management/level/level.component';
import { AdmingroupComponent } from './components/admin/system_management/admingroup/admingroup.component';
import { AdminComponent } from './components/admin/system_management/admin/admin.component';
import { DeldataComponent } from './components/admin/platform/deldata/deldata.component';
import { NewinfoAddComponent } from './components/admin/customer/newinfo-add/newinfo-add.component';
import { NewinfoUpdataComponent } from './components/admin/customer/newinfo-updata/newinfo-updata.component';
import { CKEditorComponent, CKEditorModule } from 'ng2-ckeditor';
import { MessageHistoryComponent } from './components/admin/customer/message-history/message-history.component';
import { MessageinfoComponent } from './components/admin/customer/messageinfo/messageinfo.component';
import { PointinfoComponent } from './components/admin/financial/pointinfo/pointinfo.component';
import { UsershowComponent } from './components/admin/system_management/usershow/usershow.component';
import { MomentModule } from 'ngx-moment';
import { TbIndexAddComponent } from './components/admin/currency/tb-index-add/tb-index-add.component';
import { TbIndexUpdataComponent } from './components/admin/currency/tb-index-updata/tb-index-updata.component';
import { UserUpdataComponent } from './components/admin/system_management/user-updata/user-updata.component';
import { LevelAddComponent } from './components/admin/system_management/level-add/level-add.component';
import { LevelUpdataComponent } from './components/admin/system_management/level-updata/level-updata.component';
import { AdmingroupUpdataComponent } from './components/admin/system_management/admingroup-updata/admingroup-updata.component';
import { AdminAddComponent } from './components/admin/system_management/admin-add/admin-add.component';
import { AdminUpdataComponent } from './components/admin/system_management/admin-updata/admin-updata.component';
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
import { UserIdComponent } from './components/admin/system_management/user-id/user-id.component';
import { CurrencyMenuComponent } from './components/admin/common/currency-menu/currency-menu.component';
import { CustomerMenuComponent } from './components/admin/common/customer-menu/customer-menu.component';
import { FinancialMenuComponent } from './components/admin/common/financial-menu/financial-menu.component';
import { PlatformServiceComponent } from './components/admin/common/platform-service/platform-service.component';
import { SystemManagementMenuComponent } from './components/admin/common/system-management-menu/system-management-menu.component';

/**
 * @author lilong 2018-12-23
 * 添加组件模块
 */
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HeaderComponent,
    MyinfoComponent,
    RepassComponent,
    RepassSpwComponent,
    TbIndexComponent,
    TbIndexKlineComponent,
    PointComponent,
    PointlistComponent,
    MessageComponent,
    NewsComponent,
    UserComponent,
    LevelComponent,
    AdmingroupComponent,
    AdminComponent,
    DeldataComponent,
    NewinfoAddComponent,
    NewinfoUpdataComponent,
    MessageHistoryComponent,
    MessageinfoComponent,
    PointinfoComponent,
    UsershowComponent,
    TbIndexAddComponent,
    TbIndexUpdataComponent,
    UserUpdataComponent,
    LevelAddComponent,
    LevelUpdataComponent,
    AdmingroupUpdataComponent,
    AdminAddComponent,
    AdminUpdataComponent,
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
    UserIdComponent,
    CurrencyMenuComponent,
    CustomerMenuComponent,
    FinancialMenuComponent,
    PlatformServiceComponent,
    SystemManagementMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    PaginationModule.forRoot(),
    HttpClientModule,
    MomentModule,
    NgxEchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
