import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {

  constructor(
    private router: Router,
    private management: ManagementService
  ) { }

  ngOnInit() {
  }

  /**
   * 添加管理用户
   * @param acconet 管理用户名称
   * @param password 管理用户密码
   * @param surePassword 管理用户确认密码
   * @param roleId 角色id
   * @param realName 真实姓名
   * @param identityNumber 身份证号
   * @param phone 电话号码
   * @param email 电子邮件
   * @param order 管理员排序编号
   */
  adminAdd(
    acconet, password, surePassword,
    roleId, realName, identityNumber,
    phone, email, order
  ) {
    const data = {
      'account': acconet,
      'password': password,
      'surePassword': surePassword,
      'roleId': roleId,
      'realName': realName,
      'identityNumber': identityNumber,
      'phone': phone,
      'email': email,
      'order': order
    };
    this.management.adminAddService(data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          alert('添加成功');
          this.router.navigateByUrl('/admin/admin');
        } else {
          this.management.managementCode(response.code, response);
          return false;
        }
      });
  }

  /**
   * 重置事件
   */
  reset() {
    $('input[type="text"]').prop('value', '');
    $('input[type="password"]').prop('value', '');
  }
}
