import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCommonService } from '../currency/user-common.service';
import * as $ from 'jquery';
import { HttpService } from '../../../common/service/http.service';
import {lang} from 'moment';

/**
 * @desc 用户登陆界面
 * @author lilong
 * @date 2019-1-4
 */
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  /**
   * 定义接收数据变量
   */
  code: any;  // 验证码
  identityId: any;

  constructor(
    private router: Router, // 引入Router路由组件
    private userCommon: UserCommonService,  // 引入UserCommonService服务
    private http: HttpService,  // 引入http组件
  ) { }

  ngOnInit() {

    this.generateInfo();  // 初始化验证码

  }

  /**
   * 显示验证码
   */
  generateInfo() {
    // 访问generateService请求方法
    this.userCommon.generateService()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {  // 判断是否正确取得数据
          this.code = response;
          this.identityId = response.identityId;
        } else { // 没有正确取到值
          this.userCommon.userCommonCode(response.code, response); // 从后台报错误信息
          return false; // 不跳转页面
        }
      });
  }

  /**
   * 登陆检查
   * 核查input有没有值存在
   */
  checkInput(account, password, userCaptcha) {
    // 检查用户是否为空
    if (account === null || account === '') {
      alert('用户名或密码错误!');
      return false;
    }
    // 检查密码是否为空
    if (password === null || password === '') {
      alert('用户名或密码错误!');
      return false;
    }
    // 检查验证码是否为空
    if (userCaptcha === null || userCaptcha === '') {
      alert('验证码不能为空');
      return false;
    }
    // 赋值成json数据
    const data = {
      'account': account,
      'password': password,
      'userCaptcha': userCaptcha,
      'identityId': this.identityId
    };
    // 访问loginService请求方法
    this.userCommon.loginService(data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {  // 判断是否正确取得数据
          this.http.setToken(response.data['token']); // 获取的数据存入storage
          this.http.setId(response.data['id']); // 获取的数据存入storage
          this.http.setUser('user');
          this.http.setCookie('user');
          this.router.navigate(['/main']); // 跳转到用户首页界面
        } else { // 没有正确取到值
          this.userCommon.userCommonCode(response.code, response);  // 从后台报错误信息
          return false; // 不跳转页面
        }
      });
  }



  /**
   * 重置事件
   */
  reset(account, password) {
    //  账户和验证码
    $('input[type="text"]').prop('value', '');
    //  密码
    $('input[type="password"]').prop('value', '');
  }
}
