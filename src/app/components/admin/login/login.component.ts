import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { HttpService } from '../../../common/service/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  password: string;

  code: any;
  identityId: any;

  constructor(
    private router: Router,
    private http: HttpService,
  ) { }

  ngOnInit() {
    this.generate();
  }

  /**
   * 图形code
   */
  generate() {
    const url = this.http.adminUrl + '/security/captcha/generate';
    this.http.getDataCode(url)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.code = response;
          console.log(response);
          this.identityId = response.identityId;
        } else {
         this.http.codeSelect(response.code, response);
          return false;
        }
      });
  }

  tiaozhuan() {
    this.router.navigateByUrl('/admin/main');
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
      'account': account,
      'password': password,
      'userCaptcha': userCaptcha,
      'identityId': this.identityId
    };

    console.log(data);


    const url = this.http.adminUrl + '/security/login';
    this.http.postData(url, data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.http.setToken(response.data['token']);
          this.http.setId(response.data['id']);
          this.http.setAdmin('admin');
          this.http.setCookie('admin');
          this.http.setMenuId(1);
          this.router.navigate(['/admin/main']);
        } else {
          this.http.codeSelect(response.code, response);
          return false;
        }
      });
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
