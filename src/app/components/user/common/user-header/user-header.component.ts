import { Component, OnInit } from '@angular/core';
import {UserCommonService} from '../../currency/user-common.service';
import {HttpService} from '../../../../common/service/http.service';

/**
 * @desc header
 * @author lilong
 * @date 2018-12-29
 */

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

  /**
   * 定义接收数据变量
   */
  userHeader: any;  // 用户数据

  constructor(
    private userCommon: UserCommonService, // 引用UserCommonService服务组件
  ) { }

  ngOnInit() {
    this.userInfo();  // 为header初始化用户信息
  }


  /**
   * 显示会员信息
   */
  userInfo() {
    // 访问userInfoService服务
    this.userCommon.userInfoService()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) { // 判断是否正确取得数据
          this.userHeader = response; // 获取的返回值赋给newDate
          // 没有正确取到值
        } else {
          alert(response.message); // 从后台报错误信息
          return false; // 不跳转页面
        }
      });
  }

  loginOut() {
    this.userCommon.loginOut();
  }
}
