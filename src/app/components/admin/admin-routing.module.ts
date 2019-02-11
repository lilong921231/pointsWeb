import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
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
          { path: '', loadChildren: './currency/main/main.module#MainModule', canActivate: [AdminLoginGuard] }
        ]
      },
      // 个人档案
      {
        path: 'myinfo',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './currency/myinfo/myinfo.module#MyinfoModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 修改密码
      {
        path: 'repass',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './currency/repass/repass.module#RepassModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 修改超级密码
      {
        path: 'repass-spw',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './currency/repass-spw/repass-spw.module#RepassSpwModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 天宝指数
      {
        path: 'tb-index',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './currency/tb-index/tb-index.module#TbIndexModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 添加天宝指数
      {
        path: 'tb-index-add',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './currency/tb-index-add/tb-index-add.module#TbIndexAddModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 修改天宝指数
      {
        path: 'tb-index-updata/:id',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './currency/tb-index-updata/tb-index-updata.module#TbIndexUpdataModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 天宝K线图
      {
        path: 'tb-index-kline',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './currency/tb-index-kline/tb-index-kline.module#TbIndexKlineModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 增值积分结算
      {
        path: 'point',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './financial/point/point.module#PointModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 增值积分列表
      {
        path: 'pointlist',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './financial/pointlist/pointlist.module#PointlistModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 增值分详情
      {
        path: 'pointinfo/:id',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './financial/pointinfo/pointinfo.module#PointinfoModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 会员留言 未处理状态
      {
        path: 'message',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './customer/message/message.module#MessageModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 会员留言历史 已处理状态
      {
        path: 'message-history',
        component: AdminHomeComponent,
        children: [
          { path: '',
            loadChildren: './customer/message-history/message-history.module#MessageHistoryModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 管理回复页面
      {
        path: 'messageinfo/:id',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './customer/messageinfo/messageinfo.module#MessageinfoModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 首页公告
      {
        path: 'news',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './customer/news/news.module#NewsModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 添加公告
      {
        path: 'newinfo_add',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './customer/newinfo-add/newinfo-add.module#NewinfoAddModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 修改公告
      {
        path: 'newinfo_updata/:id',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './customer/newinfo-updata/newinfo-updata.module#NewinfoUpdataModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 会员档案
      {
        path: 'user',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './system_management/user/user.module#UserModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 查询会员显示
      {
        path: 'user/:id',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './system_management/user-id/user-id.module#UserIdModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 查看会员档案
      {
        path: 'usershow/:id',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './system_management/usershow/usershow.module#UsershowModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 修改会员档案
      {
        path: 'userUpdata/:id',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './system_management/user-updata/user-updata.module#UserUpdataModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 会员级别
      {
        path: 'level',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './system_management/level/level.module#LevelModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 添加会员级别
      {
        path: 'levelAdd',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './system_management/level-add/level-add.module#LevelAddModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 修改会员级别
      {
        path: 'levelUpdata/:id',
        component: AdminHomeComponent,
        children: [
          { path: '',
            loadChildren: './system_management/level-updata/level-updata.module#LevelUpdataModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 管理用户
      {
        path: 'admin',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './system_management/admin/adm.module#AdmModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 添加管理用户
      {
        path: 'adminAdd',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './system_management/admin-add/admin-add.module#AdminAddModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 修改管理用户
      {
        path: 'adminUpdata/:id',
        component: AdminHomeComponent,
        children: [
          { path: '',
            loadChildren: './system_management/admin-updata/admin-updata.module#AdminUpdataModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 管理角色
      {
        path: 'admingroup',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './system_management/admingroup/admingroup.module#AdmingroupModule', canActivate: [AdminLoginGuard]}
        ]
      },
      // 修改管理角色
      {
        path: 'admingroupUpdata/:id',
        component: AdminHomeComponent,
        children: [
          { path: '',
            loadChildren: './system_management/admingroup-updata/admingroup-updata.module#AdmingroupUpdataModule',
            canActivate: [AdminLoginGuard]}
        ]
      },
      // 清空数据
      {
        path: 'deldata',
        component: AdminHomeComponent,
        children: [
          { path: '', loadChildren: './platform/deldata/deldata.module#DeldataModule', canActivate: [AdminLoginGuard]}
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
