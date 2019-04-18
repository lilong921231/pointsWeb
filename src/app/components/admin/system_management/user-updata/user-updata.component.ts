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

  genderSex: any;
  genderSelect: boolean;
  genderSexMan: boolean;
  genderSexWoman: boolean;
  name: any;

  addresses = [];
  // 各个省名
  provinces = ['北京市', '上海市', '天津市', '重庆市', '河北省', '山西省',
    '内蒙古省', '辽宁省', '吉林省', '黑龙江省', '江苏省', '浙江省', '安徽省', '福建省', '江西省',
    '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西省', '海南省', '四川省', '贵州省',
    '云南省', '西藏省', '陕西省', '甘肃省', '宁夏省', '青海省', '新疆省', '香港', '澳门', '台湾'];


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
        this.name = response.data.rank['name'];


        let dataProvince = '';
        dataProvince = response.data.province;
        console.log(dataProvince);

        let j = 1;
        for (let i = 0; i < this.provinces.length; i++) {

          if (dataProvince === null || dataProvince === '' || dataProvince === undefined) {
            this.addresses[0] = '请选择省份';
          }
          if (this.provinces[i] === dataProvince) {
            this.addresses[0] = dataProvince;
          } else {
            this.addresses[j] = this.provinces[i];
            j++;
          }
        }


        if (response.data.gender === 2) {
          this.genderSelect = false;
          this.genderSexWoman = true;
        } else {
          this.genderSelect = true;
          if (response.data.gender === 0) {
            this.genderSex = '男';
            this.genderSexMan = true;
          } else {
            this.genderSex = '女';
            this.genderSexWoman = true;
          }
        }
        for (let i = 0; i < this.leveldata.length; i++) {
          if (this.name ===  this.leveldata[i].levelName) {
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
    if (gender === '男') {
      gender = 1;
    } else if (gender === '女') {
      gender = 2;
    }
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
