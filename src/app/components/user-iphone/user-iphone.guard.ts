import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {HttpService} from '../../common/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserIphoneGuard implements CanActivate {
  constructor(
    private router: Router,
    private http: HttpService
  ) {
  }

  isLogin = false;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    const path = route.routeConfig.path;
    // nextRoute: 设置需要路由守卫的路由集合
    const nextRoute = ['main', 'repass', 'info', 'reg', 'money_user_list', 'point', 'message', 'messageInfo/:id'];

    if (this.http.getCookie() === 'pc') {
      return this.isLogin = true;
    }
    // 当前路由是nextRoute指定页时
    if (nextRoute.indexOf(path) >= 0) {
      if (!this.isLogin) {
        console.log('if');
        // 未登录，跳转到login
        this.router.navigate(['pc']);
        return false;
      } else {
        console.log(path);
        // 已登录，跳转到当前路由
        return true;
      }
    }
  }
}
