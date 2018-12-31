import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagementService } from '../../services/management.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-user-updata',
  templateUrl: './user-updata.component.html',
  styleUrls: ['./user-updata.component.css']
})
export class UserUpdataComponent implements OnInit {

  dataUpdata: any;
  leveldata = ['普通会员', '银卡会员', '金卡会员', '钻石会员'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private management: ManagementService
  ) { }

  ngOnInit() {
    this.userShowInfo();
  }

  /**
   * 显示要修改会员Id的信息
   */
  userShowInfo() {
    const userId = this.route.snapshot.paramMap.get('id');
    this.management.userShowId(userId)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.dataUpdata = response;
        console.log(response);
      } else {
        alert(response.message);
        return false;
      }
      });
  }

  /**
   * 保存修改后的会员档案信息
   * @param id 查询的会员实体id
   * @param realName 真实姓名
   * @param rankId 会员等级id
   * @param phone 手机号码
   * @param province 所属省份
   * @param city 详细地址
   * @param address 详细地址
   * @param identityNumber 身份证号
   */
  updataUser(
    id, realName, rankId, phone, province,
    city, address, identityNumber
  ) {
    const data = {
      'id': id,
      'realName': realName,
      'rankId': rankId,
      'phone': phone,
      'province': province,
      'city': city,
      'address': address,
      'identityNumber': identityNumber

    };
    this.management.updataUser(data)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.router.navigateByUrl('/admin/user');
      } else {
        alert(response.message);
        return false;
      }
      })
  }

  /**
   * 重置事件
   */
  rest() {
    $('input[type="text"]').prop('value', '');
  }
}
