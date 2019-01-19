import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from './currency/main/main.component';
import {HeaderComponent} from './common/header/header.component';
import {MyinfoComponent} from './currency/myinfo/myinfo.component';
import {RepassComponent} from './currency/repass/repass.component';
import {RepassSpwComponent} from './currency/repass-spw/repass-spw.component';
import {TbIndexComponent} from './currency/tb-index/tb-index.component';
import {TbIndexKlineComponent} from './currency/tb-index-kline/tb-index-kline.component';
import {PointComponent} from './financial/point/point.component';
import {PointlistComponent} from './financial/pointlist/pointlist.component';
import {MessageComponent} from './customer/message/message.component';
import {NewsComponent} from './customer/news/news.component';
import {UserComponent} from './system_management/user/user.component';
import {LevelComponent} from './system_management/level/level.component';
import {AdmingroupComponent} from './system_management/admingroup/admingroup.component';
import {AdminComponent} from './system_management/admin/admin.component';
import {DeldataComponent} from './platform/deldata/deldata.component';
import {NewinfoAddComponent} from './customer/newinfo-add/newinfo-add.component';
import {NewinfoUpdataComponent} from './customer/newinfo-updata/newinfo-updata.component';
import {MessageHistoryComponent} from './customer/message-history/message-history.component';
import {MessageinfoComponent} from './customer/messageinfo/messageinfo.component';
import {PointinfoComponent} from './financial/pointinfo/pointinfo.component';
import {UsershowComponent} from './system_management/usershow/usershow.component';
import {TbIndexAddComponent} from './currency/tb-index-add/tb-index-add.component';
import {TbIndexUpdataComponent} from './currency/tb-index-updata/tb-index-updata.component';
import {UserUpdataComponent} from './system_management/user-updata/user-updata.component';
import {LevelAddComponent} from './system_management/level-add/level-add.component';
import {LevelUpdataComponent} from './system_management/level-updata/level-updata.component';
import {AdmingroupUpdataComponent} from './system_management/admingroup-updata/admingroup-updata.component';
import {AdminAddComponent} from './system_management/admin-add/admin-add.component';
import {AdminUpdataComponent} from './system_management/admin-updata/admin-updata.component';
import {UserIdComponent} from './system_management/user-id/user-id.component';
import {LoginComponent} from './login/login.component';
import {MomentModule} from 'ngx-moment';
import {NgxEchartsModule} from 'ngx-echarts';
import {CKEditorModule} from 'ng2-ckeditor';
import {PaginationModule} from 'ngx-bootstrap';
import {AdminRoutingModule} from './admin-routing.module';
import {MenuComponent} from './common/menu/menu.component';

/**
 * @desc admin端公共组件及声明模块
 * @author lilong
 * @date 2019-1-18
 */
@NgModule({
  declarations: [
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
    UserIdComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    PaginationModule.forRoot(),
    MomentModule,
    NgxEchartsModule,
    CKEditorModule,
  ],
  exports: [
    AdminRoutingModule,
    MomentModule,
    NgxEchartsModule,
    CKEditorModule,
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
    UserIdComponent,
    MenuComponent
  ]
})
export class AdminCommonModule { }
