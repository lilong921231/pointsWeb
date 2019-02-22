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
  leveldata = [
    {'levelName': '普通会员', 'state': true},
    {'levelName': '银卡会员', 'state': true},
    {'levelName': '金卡会员', 'state': true},
    {'levelName': '钻石会员', 'state': true}
    ];

  genderSelect: boolean;
  ceshi: any;

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
        this.ceshi = response.data.rank['name'];

        if (response.data.gender === 0) {
          this.genderSelect = false;
        } else {
          this.genderSelect = true;
        }
        console.log(this.genderSelect);
        for (let i = 0; i < this.leveldata.length; i++) {
          if (this.ceshi ===  this.leveldata[i].levelName) {
            this.leveldata[i].state = false;
          }
        }
      } else {
        this.management.managementCode(response.code, response);
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
    city, address, identityNumber, gender
  ) {
    const data = {
      'id': id,
      'realName': realName,
      'rankId': rankId,
      'phone': phone,
      'province': province,
      'city': city,
      'address': address,
      'identityNumber': identityNumber,
      'gender': gender

    };
    if ( gender === '' || gender === null || gender === undefined ) {
      alert('请选择会员性别');
    } else if ( gender === 0) {
      alert('请选择会员性别');
    }
    if ( realName === '' || realName === null || realName === undefined ) {
      alert('请输入真实姓名');
    }
    if ( identityNumber === '' || identityNumber === null || identityNumber === undefined ) {
      alert('请输入身份账号');
    }
    this.management.updataUser(data)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.router.navigateByUrl('/admin/user');
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
  }
}
