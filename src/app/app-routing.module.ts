import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import {UserLoginGuard} from './components/user/user-login.guard';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

/**
 * 设定路由界面
 * @author lilong 2018-12-23
 */
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserLoginComponent
  },
  // 用户首页
  { path: 'main',
    loadChildren: './components/user/currency/user-main/user-main.module#UserMainModule',
    canActivate: [UserLoginGuard]
  },
  // 用户修改密码界面
  { path: 'repass',
    loadChildren: './components/user/currency/user-repass/user-repass.module#UserRepassModule',
    canActivate: [UserLoginGuard]
  },
  // 用户档案界面
  {
    path: 'userInfo',
    loadChildren: './components/user/currency/user-user-info/user-user-info.module#UserUserInfoModule',
    canActivate: [UserLoginGuard]
  },
  // 用户居住权登记信息界面
  {
    path: 'reg',
    loadChildren: './components/user/currency/user-reg/user-reg.module#UserRegModule',
    canActivate: [UserLoginGuard]
  },
  // 用户消费记录
  {
    path: 'money_user_list',
    loadChildren: './components/user/currency/user-money/user-money.module#UserMoneyModule',
    canActivate: [UserLoginGuard]
  },
  // 用户界面的天宝K线图
  {
    path: 'tb-kline',
    loadChildren: './components/user/currency/user-tb-kline/user-tb-kline.module#UserTbKlineModule',
    canActivate: [UserLoginGuard],
  },
  // 用户界面福利积分
  {
    path: 'point',
    loadChildren: './components/user/currency/user-point/user-point.module#UserPointModule',
    canActivate: [UserLoginGuard]
  },
  // 用户界面留言
  {
    path: 'message',
    loadChildren: './components/user/currency/user-message/user-message.module#UserMessageModule',
    canActivate: [UserLoginGuard]
  },
  // 查看留言详情页面
  {
    path: 'messageInfo/:id',
    loadChildren: './components/user/currency/user-message-info/user-message-info.module#UserMessageInfoModule',
    canActivate: [UserLoginGuard]
  },
  {
    path: 'admin',
    loadChildren: './components/admin/admin.module#AdminModule'
  },
  {
    path: 'user-update/:id',
    loadChildren: './components/user/currency/user-update/user-update.module#UserUpdateModule',
    canActivate: [UserLoginGuard]
  }
 /* {
    path: 'pc',
    loadChildren: './components/user-iphone/user-iphone.module#UserIphoneModule'
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
