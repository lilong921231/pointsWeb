import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-repass',
  templateUrl: './user-repass.component.html',
  styleUrls: ['./user-repass.component.css']
})
export class UserRepassComponent implements OnInit {

  constructor() { }

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
    }
  }
}
