import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { CurrencyService } from '../../services/currency.service';
import { Router } from '@angular/router';

/**
 * 管理员用户密码
 * @author lilong 2018-12-16
 */

@Component({
  selector: 'app-repass',
  templateUrl: './repass.component.html',
  styleUrls: ['./repass.component.css']
})
export class RepassComponent implements OnInit {

  data: any;

  constructor(
    private router: Router,
    private currency: CurrencyService
  ) { }

  ngOnInit() {
  }
  /**
   * 修改密码
   * 核查input有没有值存在
   * 并提交请求数据
   * @param oldPassWord 就密码
   * @param newPassWord 新密码
   * @param sureNewPassWord  确认密码
   */
  checkInput(oldPassWord, newPassWord, sureNewPassWord) {
    // 检查旧密码是否为空
    if (oldPassWord === null || oldPassWord === '') {
      alert('请输入原密码!');
      return false;
    }
    // 检查新密码
    if (newPassWord === null || newPassWord === '') {
      alert('请输入新密码!');
      return false;
    }
    // 检查确认密码
    if (sureNewPassWord === null || sureNewPassWord === '') {
      alert('请输入确认密码');
      return false;
    }
    // 检查两次密码输入的是否一致
    if (newPassWord !== sureNewPassWord) {
      alert('两次密码不一致!');
      return false;
    }
    // 检查密码是否小于6位
    if (newPassWord.toLocaleString().length < 6 ) {
      alert('密码不能小于6位!');
      return false;
    }
    // 存入修改密码的值
    this.data = {
      'oldPassWord': oldPassWord,
      'newPassWord': newPassWord,
      'sureNewPassword': sureNewPassWord
    };
    // 访问currency服务
    this.currency.repassService(this.data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          alert(response.message);
         // this.router.navigateByUrl('/admin');
        }
      });

  }

  /**
   * 重置事件
   */
  reset() {
    //  密码
    $('input[type="password"]').prop('value', '');
  }
}
