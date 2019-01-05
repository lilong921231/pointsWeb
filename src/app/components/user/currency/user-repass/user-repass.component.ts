import { Component, OnInit } from '@angular/core';
import { UserCommonService } from '../user-common.service';
import * as $ from 'jquery';

/**
 * @desc 修改用户个人密码
 * @author lilong
 * @date 2018-12-29
 */
@Component({
  selector: 'app-user-repass',
  templateUrl: './user-repass.component.html',
  styleUrls: ['./user-repass.component.css']
})
export class UserRepassComponent implements OnInit {

  /**
   * 定义接收数据变量
   */
  userRepass: any;  // 会员信息数据
  constructor(
    private userCommon: UserCommonService  // 引入UserCommonService服务
  ) { }

  ngOnInit() {
    this.userInfo();  // 初始化用户信息
  }

  /**
   * 显示会员信息
   */
  userInfo() {
    // 访问userInfoService请求方法
    this.userCommon.userInfoService()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {  // 判断是否正确取得数据
          this.userRepass = response;  // 获取的数据赋值给定义变量userRepass
          console.log(response);
        } else { // 没有正确取到值
          alert(response.message);  // 从后台报错误信息
          return false; // 不跳转页面
        }
      })
  }

  /**
   * 修改密码
   * @param oldPassword 旧密码
   * @param newpassword 新密码
   * @param sureNewPassWord 确认密码
   */
  repass(oldPassword, newpassword, sureNewPassWord) {
    // 检查旧密码是否为空
    if (oldPassword === null || oldPassword === '') {
      alert('请输入原密码!');
      return false;
    }
    // 检查新密码
    if (newpassword === null || newpassword === '') {
      alert('请输入新密码!');
      return false;
    }
    // 检查确认密码
    if (sureNewPassWord === null || sureNewPassWord === '') {
      alert('请输入确认密码');
      return false;
    }
    // 检查两次密码输入的是否一致
    if (newpassword !== sureNewPassWord) {
      alert('两次密码不一致!');
      return false;
    }
    // 检查密码是否小于6位
    if (newpassword.toLocaleString().length < 6 ) {
      alert('密码不能小于6位!');
      return false;
    }
    // 赋值成json数据
    const data = {
      'oldPassword': oldPassword,
      'newPassword': newpassword,
      'sureNewPassword': sureNewPassWord
    };
    // 访问userRepassService请求方法
    this.userCommon.userRepassService(data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {  // 判断是否正确取得数据
          alert('修改成功');
        } else { // 没有正确取到值
          alert(response.message);  // 从后台报错误信息
          return false; // 不跳转页面
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
