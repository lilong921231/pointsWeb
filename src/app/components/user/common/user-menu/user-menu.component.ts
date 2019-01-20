import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {

  constructor(
    private router: Router, // 引入Router路由组件
  ) { }

  ngOnInit() {
  }

  main() {
    this.router.navigate(['main']);
  }
  repass() {
    this.router.navigate(['repass']); // 跳转到用户首页界面
  }
  userInfo() {
    this.router.navigate(['userInfo']);
  }
  reg() {
    this.router.navigate(['reg']);
  }
  money_user_list() {
    this.router.navigate(['money_user_list']);
  }
  kline() {
    this.router.navigate(['tb-kline']);
  }
  point() {
    this.router.navigate(['point']);
  }
  message() {
    this.router.navigate(['message']);
  }
}
