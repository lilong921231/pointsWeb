import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { HttpService } from '../../common/service/http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginGuard implements CanActivate {
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
    const nextRoute = ['main', 'myinfo', 'repass', 'repass-spw', 'tb-index', 'tb-index-add',
      'tb-index-updata/:id', 'tb-index-kline', 'point', 'pointlist', 'pointinfo/:id', 'message',
      'message-history', 'messageinfo/:id', 'news', 'newinfo_add', 'newinfo_updata/:id', 'user',
      'user/:id', 'usershow/:id', 'userUpdata/:id', 'level', 'levelAdd', 'levelUpdata/:id',
      'admin', 'adminAdd', 'adminUpdata/:id', 'admingroup', 'admingroupUpdata/:id', 'deldata'];

    if (this.http.getCookie('admin') === 'admin') {
      return this.isLogin = true;
    }
    // 当前路由是nextRoute指定页时
    if (nextRoute.indexOf(path) >= 0) {
      if (!this.isLogin) {
        console.log('if');
        // 未登录，跳转到login
        this.router.navigate(['admin']);
        return false;
      } else {
        console.log(path);
        // 已登录，跳转到当前路由
        return true;
      }
    }
  }
}
