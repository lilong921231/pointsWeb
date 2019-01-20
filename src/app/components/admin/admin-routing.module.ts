import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MyinfoComponent} from './currency/myinfo/myinfo.component';
import {RepassComponent} from './currency/repass/repass.component';
import {RepassSpwComponent} from './currency/repass-spw/repass-spw.component';
import {TbIndexComponent} from './currency/tb-index/tb-index.component';
import {TbIndexAddComponent} from './currency/tb-index-add/tb-index-add.component';
import {TbIndexUpdataComponent} from './currency/tb-index-updata/tb-index-updata.component';
import {TbIndexKlineComponent} from './currency/tb-index-kline/tb-index-kline.component';
import {PointComponent} from './financial/point/point.component';
import {PointlistComponent} from './financial/pointlist/pointlist.component';
import {PointinfoComponent} from './financial/pointinfo/pointinfo.component';
import {MessageComponent} from './customer/message/message.component';
import {MessageHistoryComponent} from './customer/message-history/message-history.component';
import {MessageinfoComponent} from './customer/messageinfo/messageinfo.component';
import {NewsComponent} from './customer/news/news.component';
import {NewinfoAddComponent} from './customer/newinfo-add/newinfo-add.component';
import {NewinfoUpdataComponent} from './customer/newinfo-updata/newinfo-updata.component';
import {UserComponent} from './system_management/user/user.component';
import {UserIdComponent} from './system_management/user-id/user-id.component';
import {UsershowComponent} from './system_management/usershow/usershow.component';
import {UserUpdataComponent} from './system_management/user-updata/user-updata.component';
import {LevelComponent} from './system_management/level/level.component';
import {LevelAddComponent} from './system_management/level-add/level-add.component';
import {LevelUpdataComponent} from './system_management/level-updata/level-updata.component';
import {AdminComponent} from './system_management/admin/admin.component';
import {AdminAddComponent} from './system_management/admin-add/admin-add.component';
import {AdminUpdataComponent} from './system_management/admin-updata/admin-updata.component';
import {AdmingroupComponent} from './system_management/admingroup/admingroup.component';
import {AdmingroupUpdataComponent} from './system_management/admingroup-updata/admingroup-updata.component';
import {DeldataComponent} from './platform/deldata/deldata.component';
import {MainComponent} from './currency/main/main.component';
import {AdminLoginGuard} from './admin-login.guard';
import {AdminHomeComponent} from './admin-home.component';

const router: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LoginComponent },
      // 首页
      {
        path: 'main',
        component: AdminHomeComponent,
        children: [
          { path: '', component: MainComponent, canActivate: [AdminLoginGuard] }
        ]
      },
      // 个人档案
      {
        path: 'myinfo',
        component: AdminHomeComponent,
        children: [
          { path: '', component: MyinfoComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 修改密码
      {
        path: 'repass',
        component: AdminHomeComponent,
        children: [
          { path: '', component: RepassComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 修改超级密码
      {
        path: 'repass-spw',
        component: AdminHomeComponent,
        children: [
          { path: '', component: RepassSpwComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 天宝指数
      {
        path: 'tb-index',
        component: AdminHomeComponent,
        children: [
          { path: '', component: TbIndexComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 添加天宝指数
      {
        path: 'tb-index-add',
        component: AdminHomeComponent,
        children: [
          { path: '', component: TbIndexAddComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 修改天宝指数
      {
        path: 'tb-index-updata/:id',
        component: AdminHomeComponent,
        children: [
          { path: '', component: TbIndexUpdataComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 天宝K线图
      {
        path: 'tb-index-kline',
        component: AdminHomeComponent,
        children: [
          { path: '', component: TbIndexKlineComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 增值积分结算
      {
        path: 'point',
        component: AdminHomeComponent,
        children: [
          { path: '', component: PointComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 增值积分列表
      {
        path: 'pointlist',
        component: AdminHomeComponent,
        children: [
          { path: '', component: PointlistComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 增值分详情
      {
        path: 'pointinfo/:id',
        component: AdminHomeComponent,
        children: [
          { path: '', component: PointinfoComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 会员留言 未处理状态
      {
        path: 'message',
        component: AdminHomeComponent,
        children: [
          { path: '', component: MessageComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 会员留言历史 已处理状态
      {
        path: 'message-history',
        component: AdminHomeComponent,
        children: [
          { path: '', component: MessageHistoryComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 管理回复页面
      {
        path: 'messageinfo/:id',
        component: AdminHomeComponent,
        children: [
          { path: '', component: MessageinfoComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 首页公告
      {
        path: 'news',
        component: AdminHomeComponent,
        children: [
          { path: '', component: NewsComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 添加公告
      {
        path: 'newinfo_add',
        component: AdminHomeComponent,
        children: [
          { path: '', component: NewinfoAddComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 修改公告
      {
        path: 'newinfo_updata/:id',
        component: AdminHomeComponent,
        children: [
          { path: '', component: NewinfoUpdataComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 会员档案
      {
        path: 'user',
        component: AdminHomeComponent,
        children: [
          { path: '', component: UserComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 查询会员显示
      {
        path: 'user/:id',
        component: AdminHomeComponent,
        children: [
          { path: '', component: UserIdComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 查看会员档案
      {
        path: 'usershow/:id',
        component: AdminHomeComponent,
        children: [
          { path: '', component: UsershowComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 修改会员档案
      {
        path: 'userUpdata/:id',
        component: AdminHomeComponent,
        children: [
          { path: '', component: UserUpdataComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 会员级别
      {
        path: 'level',
        component: AdminHomeComponent,
        children: [
          { path: '', component: LevelComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 添加会员级别
      {
        path: 'levelAdd',
        component: AdminHomeComponent,
        children: [
          { path: '', component: LevelAddComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 修改会员级别
      {
        path: 'levelUpdata/:id',
        component: AdminHomeComponent,
        children: [
          { path: '', component: LevelUpdataComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 管理用户
      {
        path: 'admin',
        component: AdminHomeComponent,
        children: [
          { path: '', component: AdminComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 添加管理用户
      {
        path: 'adminAdd',
        component: AdminHomeComponent,
        children: [
          { path: '', component: AdminAddComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 修改管理用户
      {
        path: 'adminUpdata/:id',
        component: AdminHomeComponent,
        children: [
          { path: '', component: AdminUpdataComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 管理角色
      {
        path: 'admingroup',
        component: AdminHomeComponent,
        children: [
          { path: '', component: AdmingroupComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 修改管理角色
      {
        path: 'admingroupUpdata/:id',
        component: AdminHomeComponent,
        children: [
          { path: '', component: AdmingroupUpdataComponent, canActivate: [AdminLoginGuard]}
        ]
      },
      // 清空数据
      {
        path: 'deldata',
        component: AdminHomeComponent,
        children: [
          { path: '', component: DeldataComponent, canActivate: [AdminLoginGuard]}
        ]
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
