import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserIphoneLoginComponent} from './user-iphone-login/user-iphone-login.component';
import {UserIphoneComponent} from './user-iphone.component';
import {UserIphoneGuard} from './user-iphone.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: UserIphoneLoginComponent },
      {
        path: 'main',
        component: UserIphoneComponent,
        children: [
          { path: '', loadChildren: './user-iphone-main/user-iphone-main.module#UserIphoneMainModule', canActivate: [UserIphoneGuard] }
        ]
      },
      {
        path: 'info',
        component: UserIphoneComponent,
        children: [
          { path: '', loadChildren: './user-iphone-info/user-iphone-info.module#UserIphoneInfoModule', canActivate: [UserIphoneGuard]}
        ]
      },
      {
        path: 'reg',
        component: UserIphoneComponent,
        children: [
          { path: '', loadChildren: './user-iphone-reg/user-iphone-reg.module#UserIphoneRegModule', canActivate: [UserIphoneGuard]}
        ]
      },
      {
        path: 'repass',
        component: UserIphoneComponent,
        children: [
          { path: '', loadChildren: './user-iphone-repass/user-iphone-repass.module#UserIphoneRepassModule', canActivate: [UserIphoneGuard]}
        ]
      },
      {
        path: 'message',
        component: UserIphoneComponent,
        children: [
          { path: '', loadChildren: './user-iphone-message/user-iphone-message.module#UserIphoneMessageModule',
            canActivate: [UserIphoneGuard]}
        ]
      },
      {
        path: 'message/:id',
        component: UserIphoneComponent,
        children: [
          { path: '', loadChildren: './user-iphone-message-info/user-iphone-message-info.module#UserIphoneMessageInfoModule',
            canActivate: [UserIphoneGuard]}
        ]
      },
      {
        path: 'point',
        component: UserIphoneComponent,
        children: [
          { path: '', loadChildren: './user-iphone-point/user-iphone-point.module#UserIphonePointModule', canActivate: [UserIphoneGuard]}
        ]
      },
      {
        path: 'money',
        component: UserIphoneComponent,
        children: [
          { path: '', loadChildren: './user-iphone-money/user-iphone-money.module#UserIphoneMoneyModule', canActivate: [UserIphoneGuard]}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserIphoneRoutingModule { }
