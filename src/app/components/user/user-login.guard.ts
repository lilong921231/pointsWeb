import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {HttpService} from '../../common/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserLoginGuard implements CanActivate {
  constructor(
    private router: Router,
    private http: HttpService
  ) {}

  isLogin = false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const path = route.routeConfig.path;
    // nextRoute: 设置需要路由守卫的路由集合
    const nextRoute = ['main', 'repass', 'userInfo', 'reg', 'money_user_list',
      'point', 'message', 'messageInfo/:id', 'tb-kline', 'user-update'];

    if (this.http.getCookie() === 'user') {
      this.isLogin = true;
      return this.isLogin;
    }
    // 当前路由是nextRoute指定页时
    if (nextRoute.indexOf(path) >= 0) {
      if (!this.isLogin) {
        // 未登录，跳转到login
        this.router.navigate(['']);
        return false;
      } else {
        // 已登录，跳转到当前路由
        return true;
      }
    }
  }
}
