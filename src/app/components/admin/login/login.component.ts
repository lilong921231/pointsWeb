import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  adminUser: string;
  password: string;
  loginCode: number;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  tiaozhuan() {
    this.router.navigateByUrl('/admin/main');
  }
  /**
   * 登陆检查
   * 核查input有没有值存在
   */
  checkInput() {
    // 检查用户是否为空
    if ($('input[name="username"]').val() === null || $('input[name="username"]').val() === '') {
      alert('用户名或密码错误!');
      return false;
    }
    // 检查密码是否为空
    if ($('input[name="password"]').val() === null || $('input[name="password"]').val() === '') {
      alert('用户名或密码错误!');
      return false;
    }
    // 检查验证码是否为空
    if ($('input[name="validateCode"]').val() === null || $('input[name="validateCode"]').val() === '') {
      alert('验证码不能为空');
      return false;
      }

    // post方法
  }

  /**
   * 重置事件
   */
  reset() {
    //  账户和验证码
    $('input[type="text"]').prop('value', '');
    //  密码
    $('input[type="password"]').prop('value', '');
  }

}
