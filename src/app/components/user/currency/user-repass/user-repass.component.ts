import { Component, OnInit } from '@angular/core';
import { UserCommonService } from '../user-common.service';
import * as $ from "jquery";

@Component({
  selector: 'app-user-repass',
  templateUrl: './user-repass.component.html',
  styleUrls: ['./user-repass.component.css']
})
export class UserRepassComponent implements OnInit {

  constructor(
    private userCommon: UserCommonService
  ) { }

  ngOnInit() {
  }

  /**
   * 修改密码
   * @param oldPassword 旧密码
   * @param newpassword 新密码
   * @param sureNewPassWord 确认密码
   */
  repass(oldPassword, newpassword, sureNewPassWord) {
    const data = {
      'oldPassword': oldPassword,
      'newpassword': newpassword,
      'sureNewPassWord': sureNewPassWord
    };
    this.userCommon.userRepassService(data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          alert('修改成功');
        } else {
          alert(response.message);
          return false;
        }
      })
  }

  /**
   * 重置事件
   */
  reset() {
    //  密码
    $('input[type="password"]').prop('value', '');
  }
}
