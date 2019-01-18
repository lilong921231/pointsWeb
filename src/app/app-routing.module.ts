import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserMainComponent } from './components/user/currency/user-main/user-main.component';
import { UserRepassComponent } from './components/user/currency/user-repass/user-repass.component';
import { UserUserInfoComponent } from './components/user/currency/user-user-info/user-user-info.component';
import { UserRegComponent } from './components/user/currency/user-reg/user-reg.component';
import { UserMoneyComponent } from './components/user/currency/user-money/user-money.component';
import { UserTbKlineComponent } from './components/user/currency/user-tb-kline/user-tb-kline.component';
import { UserPointComponent } from './components/user/currency/user-point/user-point.component';
import { UserMessageComponent } from './components/user/currency/user-message/user-message.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { UserMessageInfoComponent } from './components/user/currency/user-message-info/user-message-info.component';
import {UserLoginGuard} from './components/user/user-login.guard';
import {AdminLoginGuard} from './components/admin/admin-login.guard';

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
  { path: 'main', component: UserMainComponent, canActivate: [UserLoginGuard]},
  // 用户修改密码界面
  { path: 'repass', component: UserRepassComponent, canActivate: [UserLoginGuard] },
  // 用户档案界面
  { path: 'userInfo', component: UserUserInfoComponent, canActivate: [UserLoginGuard] },
  // 用户居住权登记信息界面
  { path: 'reg', component: UserRegComponent, canActivate: [UserLoginGuard] },
  // 用户消费记录
  { path: 'money_user_list', component: UserMoneyComponent, canActivate: [UserLoginGuard] },
  // 用户界面的天宝K线图
  { path: 'tb-kline', component: UserTbKlineComponent, canActivate: [UserLoginGuard] },
  // 用户界面福利积分
  { path: 'point', component: UserPointComponent, canActivate: [UserLoginGuard] },
  // 用户界面留言
  { path: 'message', component: UserMessageComponent, canActivate: [UserLoginGuard] },
  // 查看留言详情页面
  { path: 'messageInfo/:id', component: UserMessageInfoComponent, canActivate: [UserLoginGuard] },
  // 管理员界面
  {
    path: 'admin',
    // canActivateChild: [AdminLoginGuard],
    loadChildren: './components/admin/admin.module#AdminModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
