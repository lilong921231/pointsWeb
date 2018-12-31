import { Component, OnInit } from '@angular/core';
import { UserCommonService } from '../user-common.service';
import * as $ from "jquery";

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {

  constructor(
    private userCommon: UserCommonService
  ) { }

  ngOnInit() {
  }

  /**
   * 添加居住证信息等数据
   * @param account 账户
   * @param realName 真实姓名
   * @param gender 性别
   * @param rankId 会员等级id
   * @param identityNumber 身份证号
   * @param password 新建密码
   * @param surePassword 确认密码
   * @param phone 手机号码
   * @param province 省
   * @param city 城市
   * @param address 详细地址
   * @param certificationTime 发布时间
   */
  regAdd(
    account, realName, gender, rankId,
    identityNumber, password, surePassword,
    phone, province, city, address, certificationTime
  ) {
    const data = {
      'account': account,
      'realName': realName,
      'gender': gender,
      'rankId': rankId,
      'identityNumber': identityNumber,
      'password': password,
      'surePassword': surePassword,
      'phone': phone,
      'province': province,
      'city': city,
      'address': address,
      'certificationTime': certificationTime,
    };
    this.userCommon.regAddService(data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          alert('登记成功');
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
