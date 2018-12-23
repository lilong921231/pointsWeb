import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagementService } from '../../services/management.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-updata',
  templateUrl: './admin-updata.component.html',
  styleUrls: ['./admin-updata.component.css']
})
export class AdminUpdataComponent implements OnInit {

  adminData: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private management: ManagementService
  ) { }

  ngOnInit() {
    this.adminUpdataIdInfo();
  }

  /**
   * 显示要修改id的信息
   */
  adminUpdataIdInfo() {
    const adminId = +this.route.snapshot.paramMap.get('id');
    this.management.adminUpdataIdInfo(adminId)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.adminData = response;
      } else {
        alert(response.message);
        return false;
      }
      });
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
  adminUpdata(
    id, acconet, password, surePassword,
    roleId, realName, identityNumber,
    phone, email, order
  ) {
    const data = {
      'id': id,
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
        alert(response.message);
        return false;
      }
      });
  }

  /**
   * 重置事件
   */
  rest() {
    $('input[type="text"]').prop('value', '');
  }
}
