import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserCommonService} from "../currency/user-common.service";
import * as $ from "jquery";
import {HttpService} from "../../../common/service/http.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {


  code: any;

  constructor(
    private router: Router,
    private userCommon: UserCommonService,
    private http: HttpService
  ) { }

  ngOnInit() {
    this.generateInfo();
  }

  generateInfo() {
    this.userCommon.generateService()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.code = response;
        } else {
          alert(response.message);
          return false;
        }
      })
  }

  /**
   * 登陆检查
   * 核查input有没有值存在
   */
  checkInput(account, password, userCaptcha) {
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
    const data = {
      "account": account,
      "password": password,
      "userCaptcha": userCaptcha
    };
    this.userCommon.loginService(data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.http.setToken(response.data['token']);
          this.http.setId(response.data['id']);
          this.router.navigateByUrl('/main');
        } else {
          alert(response.message);
          return false;
        }
      })
  }



  /**
   * 重置事件
   */
  reset(){
    //  账户和验证码
    $('input[type="text"]').prop('value', '');
    //  密码
    $('input[type="password"]').prop('value', '');
  }
}
