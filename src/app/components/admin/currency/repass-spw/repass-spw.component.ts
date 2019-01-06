import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-repass-spw',
  templateUrl: './repass-spw.component.html',
  styleUrls: ['./repass-spw.component.css']
})
export class RepassSpwComponent implements OnInit {

  private data: any;
  constructor(
    private currency: CurrencyService
  ) { }

  ngOnInit() {
  }
  /**
   * 修改超级密码
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
      'oldPassword': oldPassWord,
      'newPassword': newPassWord,
      'sureNewPassword': sureNewPassWord
    };
    // 访问currency服务
    this.currency.repassSuperService(this.data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          alert('修改成功');
        } else {
          alert(response.message);
          return false;
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
