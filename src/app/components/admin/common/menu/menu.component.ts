import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {HttpService} from '../../../../common/service/http.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {



  showML1: boolean;
  showML2: boolean;
  showML3: boolean;
  showML4: boolean;
  showML5: boolean;
  constructor(
    private router: Router,
    private http: HttpService
  ) { }

  ngOnInit() {
    this.ShowHideButton(this.http.getMenuId());
  }

  menuId(value) {
    this.http.setMenuId(value);
    this.ShowHideButton(this.http.getMenuId());
  }

  /**
   * menu的显示于隐藏
   */

  ShowHideButton(menuID) {
    // 通用操作
    if (menuID === '1') {
      this.showML1 = this.showML1 ? false : true;
      this.showML2 = false;
      this.showML3 = false;
      this.showML4 = false;
      this.showML5 = false;
    }
    // 财务管理
    if (menuID === '2') {
      this.showML1 = false;
      this.showML2 = this.showML2 ? false : true;
      this.showML3 = false;
      this.showML4 = false;
      this.showML5 = false;
    }
    // 客服中心
    if (menuID === '3') {
      this.showML1 = false;
      this.showML2 = false;
      this.showML3 = this.showML3 ? false : true;
      this.showML4 = false;
      this.showML5 = false;
    }
    // 系统管理
    if (menuID === '4') {
      this.showML1 = false;
      this.showML2 = false;
      this.showML3 = false;
      this.showML4 = this.showML4 ? false : true;
      this.showML5 = false;
    }
    // 平台维护
    if (menuID === '5') {
      this.showML1 = false;
      this.showML2 = false;
      this.showML3 = false;
      this.showML4 = false;
      this.showML5 = this.showML5 ? false : true;
    }
  }

  /**
   * 跳转个人档案界面
   */
  myinfo() {
    this.router.navigateByUrl('/myinfo');
  }
  /**
   * 跳转修改密码界面
   */
  repass() {
    this.router.navigateByUrl('/repass');
  }
  /**
   * 跳转修改超级密码界面
   */
  repass_spw() {
    this.router.navigateByUrl('/repass-spw');
  }
  /**
   * 跳转天宝指数界面
   */
  tb_index() {
    this.router.navigateByUrl('/tb-index');
  }
  /**
   * 跳转天宝K线图界面
   */
  tb_index_kline() {
    this.router.navigateByUrl('/tb-index-kline');
  }
  /**
   * 跳转增值积分结算界面
   */
  point() {
    this.router.navigateByUrl('/point');
  }
  /**
   * 跳转增值积分列表
   */
  pointlist() {
    this.router.navigateByUrl('/pointlist');
  }
  /**
   * 跳转会员留言界面
   */
  message() {
    this.router.navigateByUrl('/message');
  }
  /**
   * 跳转首页公告界面
   */
  news() {
    this.router.navigateByUrl('/news');
  }
  /**
   * 跳转会员档案界面
   */
  user() {
    this.router.navigateByUrl('/user');
  }
  /**
   * 跳转会员级别界面
   */
  level() {
    this.router.navigateByUrl('/level');
  }
  /**
   * 跳转管理角色界面
   */
  admin() {

    this.router.navigateByUrl('/admin');
  }
  /**
   * 跳转管理用户界面
   */
  admingroup() {
    this.router.navigateByUrl('/admingroup');
  }
  /**
   * 跳转清空数据界面
   */
  deldata() {
    this.router.navigateByUrl('/deldata');
  }

}
