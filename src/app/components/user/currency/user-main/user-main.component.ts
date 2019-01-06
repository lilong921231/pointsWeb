import { Component, OnInit } from '@angular/core';
import { UserCommonService } from '../user-common.service';

/**
 * @desc 用户首页界面
 * @author lilong
 * @date 2019-12-29
 */
@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css'],

})
export class UserMainComponent implements OnInit {

  /**
   * 定义接收数据变量
   */
  newData: any; // 公告数据
  constructor(
    private userCommon: UserCommonService,  // 引入UserCommonService服务
  ) { }

  ngOnInit() {
    this.new(); // 初始化数据
  }

  /**
   * 显示公告信息
   */
  new() {
    // 访问newService请求方法
    this.userCommon.newService()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {  // 判断是否正确取得数据
          // 获取的返回值赋给newDate
          this.newData = response;
        } else { // 没有正确取到值
          alert(response.message);  // 从后台报错误信息
          return false; // 不跳转页面
        }
      });
  }


}
