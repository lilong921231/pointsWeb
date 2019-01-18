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

  tiaoye() {
    this.router.navigate(['../repass']); // 跳转到用户首页界面
  }

}
