import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/admin/login/login.component';
import { MainComponent } from './components/admin/currency/main/main.component';
import { MyinfoComponent } from './components/admin/currency/myinfo/myinfo.component';
import { RepassComponent } from './components/admin/currency/repass/repass.component';
import { RepassSpwComponent } from './components/admin/currency/repass-spw/repass-spw.component';
import { TbIndexComponent } from './components/admin/currency/tb-index/tb-index.component';
import { TbIndexKlineComponent } from './components/admin/currency/tb-index-kline/tb-index-kline.component';
import { MessageComponent } from './components/admin/customer/message/message.component';
import { NewsComponent } from './components/admin/customer/news/news.component';
import { PointComponent } from './components/admin/financial/point/point.component';
import { PointlistComponent } from './components/admin/financial/pointlist/pointlist.component';
import { UserComponent } from './components/admin/system_management/user/user.component';
import { DeldataComponent } from './components/admin/platform/deldata/deldata.component';
import { LevelComponent } from './components/admin/system_management/level/level.component';
import { AdminComponent } from './components/admin/system_management/admin/admin.component';
import { AdmingroupComponent } from './components/admin/system_management/admingroup/admingroup.component';
import { NewinfoAddComponent } from './components/admin/customer/newinfo-add/newinfo-add.component';
import { NewinfoUpdataComponent } from './components/admin/customer/newinfo-updata/newinfo-updata.component';
import { MessageHistoryComponent } from './components/admin/customer/message-history/message-history.component';
import { MessageinfoComponent } from './components/admin/customer/messageinfo/messageinfo.component';
import { PointinfoComponent } from './components/admin/financial/pointinfo/pointinfo.component';
import { UsershowComponent } from './components/admin/system_management/usershow/usershow.component';
import { TbIndexAddComponent } from './components/admin/currency/tb-index-add/tb-index-add.component';
import { TbIndexUpdataComponent } from './components/admin/currency/tb-index-updata/tb-index-updata.component';
import { UserUpdataComponent } from './components/admin/system_management/user-updata/user-updata.component';
import { LevelUpdataComponent } from './components/admin/system_management/level-updata/level-updata.component';
import { LevelAddComponent } from './components/admin/system_management/level-add/level-add.component';
import { AdmingroupUpdataComponent } from './components/admin/system_management/admingroup-updata/admingroup-updata.component';
import { AdminAddComponent } from './components/admin/system_management/admin-add/admin-add.component';
import { AdminUpdataComponent } from './components/admin/system_management/admin-updata/admin-updata.component';
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
import { UserIdComponent } from './components/admin/system_management/user-id/user-id.component';

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
  { path: 'main', component: UserMainComponent },
  // 用户修改密码界面
  { path: 'repass', component: UserRepassComponent },
  // 用户档案界面
  { path: 'userInfo', component: UserUserInfoComponent },
  // 用户居住权登记信息界面
  { path: 'reg', component: UserRegComponent },
  // 用户消费记录
  { path: 'money_user_list', component: UserMoneyComponent },
  // 用户界面的天宝K线图
  { path: 'tb-kline', component: UserTbKlineComponent },
  // 用户界面福利积分
  { path: 'point', component: UserPointComponent },
  // 用户界面留言
  { path: 'message', component: UserMessageComponent },
  // 查看留言详情页面
  { path: 'messageInfo', component: UserMessageInfoComponent },
  // 管理员界面
  {
    path: 'admin',
  //  component: LoginComponent,
    // 管理员界面的子界面
    children: [
      // 管理员登陆界面
      { path: '', component: LoginComponent },
      // 首页
      { path: 'main', component: MainComponent },
      // 个人档案
      { path: 'myinfo', component: MyinfoComponent },
      // 修改密码
      { path: 'repass', component: RepassComponent },
      // 修改超级密码
      { path: 'repass-spw', component: RepassSpwComponent },
      // 天宝指数
      { path: 'tb-index', component: TbIndexComponent },
      // 添加天宝指数
      { path: 'tb-index-add', component: TbIndexAddComponent },
      // 修改天宝指数
      { path: 'tb-index-updata', component: TbIndexUpdataComponent },
      // 天宝K线图
      { path: 'tb-index-kline', component: TbIndexKlineComponent },
      // 增值积分结算
      { path: 'point', component: PointComponent },
      // 增值积分列表
      { path: 'pointlist', component: PointlistComponent },
      // 增值分详情
      { path: 'pointinfo/:id', component: PointinfoComponent},
      // 会员留言 未处理状态
      { path: 'message', component: MessageComponent },
      // 会员留言历史 已处理状态
      { path: 'message-history', component: MessageHistoryComponent },
      // 管理回复页面
      { path: 'messageinfo/:id', component: MessageinfoComponent },
      // 首页公告
      { path: 'news', component: NewsComponent },
      // 添加公告
      { path: 'newinfo_add', component: NewinfoAddComponent },
      // 修改公告
      { path: 'newinfo_updata/:id', component: NewinfoUpdataComponent },
      // 会员档案
      { path: 'user', component: UserComponent },
      // 查询会员显示
      { path: 'user/:id', component: UserIdComponent },
      // 查看会员档案
      { path: 'usershow/:id', component: UsershowComponent },
      // 修改会员档案
      { path: 'userUpdata/:id', component: UserUpdataComponent },
      // 会员级别
      { path: 'level', component: LevelComponent },
      // 添加会员级别
      { path: 'levelAdd', component: LevelAddComponent },
      // 修改会员级别
      { path: 'levelUpdata/:id', component: LevelUpdataComponent },
      // 管理用户
      { path: 'admin', component: AdminComponent },
      // 添加管理用户
      { path: 'adminAdd', component: AdminAddComponent },
      // 修改管理用户
      { path: 'adminUpdata/:id', component: AdminUpdataComponent },
      // 管理角色
      { path: 'admingroup', component: AdmingroupComponent },
      // 修改管理角色
      { path: 'admingroupUpdata/:id', component: AdmingroupUpdataComponent },
      // 清空数据
      { path: 'deldata', component: DeldataComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
