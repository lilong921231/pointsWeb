import { Component, OnInit } from '@angular/core';
import {UserCommonService} from '../user-common.service';
import * as $ from 'jquery';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {

  genderSex: any;
  genderSelect: boolean;
  genderSexMan: boolean;
  genderSexWoman: boolean;

  user: any;

  addresses = [];
  // 各个省名
  provinces = ['北京市', '上海市', '天津市', '重庆市', '河北省', '山西省',
    '内蒙古省', '辽宁省', '吉林省', '黑龙江省', '江苏省', '浙江省', '安徽省', '福建省', '江西省',
    '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西省', '海南省', '四川省', '贵州省',
    '云南省', '西藏省', '陕西省', '甘肃省', '宁夏省', '青海省', '新疆省', '香港', '澳门', '台湾'];


  constructor(
    private userCommon: UserCommonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.userInfo();
  }

  /**
   * 显示个人档案
   */
  userInfo() {
    this.userCommon.userInfoService()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.user = response;
          console.log(response.data);
          let dataProvince = '';
          dataProvince = response.data.province;

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
              this.genderSexWoman = false;
            }
          }
        } else {
          this.userCommon.userCommonCode(response.code, response);
          return false;
        }
      });
  }


  userUpdate(account, realName, gender,
             province, city, address, phone) {


    /**
     * 判断值不能为空
     */
    if (account === null || account === undefined || account === '') {
      alert('证书编号不能为空');
      return false;
    }
    if (realName === null || realName === undefined || realName === '') {
      alert('真实姓名不能为空');
      return false;
    }
    if (gender === null || gender === undefined || gender === '') {
      alert('请选择性别');
      return false;
    }
    if (phone === null || phone === undefined || phone === '') {
      alert('手机号不能为空');
      return false;
    }
    if (province === null || province === undefined || province === '') {
      alert('请选择省份');
      return false;
    }
    if (province !== '北京市' ) {
      if (city === null || city === undefined || city === '') {
        alert('城市不能为空');
        return false;
      }
    }
    if (address === null || address === undefined || address === '') {
      alert('详细地址不能为空');
      return false;
    }

    const data = {
      'account': account,
      'realName': realName,
      'gender': gender,
      'phone': phone,
      'province': province,
      'city': city + '市',
      'address': address,
    };

    this.userCommon.userInfoUpdate(data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          alert('修改成功');
          this.router.navigateByUrl('/userInfo');
        } else {
          this.userCommon.userCommonCode(response.code, response);
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
