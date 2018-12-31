import { Component, OnInit } from '@angular/core';
import { UserCommonService } from '../user-common.service';

@Component({
  selector: 'app-user-point',
  templateUrl: './user-point.component.html',
  styleUrls: ['./user-point.component.css']
})
export class UserPointComponent implements OnInit {

  pointData: any;
  pointTotal: any;
  // 当前页数
  pageNo = 1;
  // 每页显示的数据数量
  // 公司报告页面显示数据数量固定为20
  pageSize = 20;
  constructor(
    private userCommon : UserCommonService
  ) { }

  ngOnInit() {
    this.pointInfo(this.pageSize, this.pageNo);
  }

  /**
   * 分页计算
   * @param event 当前页数
   */
  pageChanged(event: any) {
    this.pageNo = event.page;
    this.pointInfo(this.pageSize, this.pageNo);
  }

  /**
   * 显示个人福利积分
   * @param pageSize 页面显示数量
   * @param pageNo 当前页
   */
  pointInfo(pageSize, pageNo) {
    this.userCommon.pointService(pageSize, pageNo)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.pointData = response;
        } else {
          alert(response.message);
          return false;
        }
      })

  }
}
