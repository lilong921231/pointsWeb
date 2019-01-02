import { Component, OnInit } from '@angular/core';
import { UserCommonService } from '../user-common.service';

@Component({
  selector: 'app-user-money',
  templateUrl: './user-money.component.html',
  styleUrls: ['./user-money.component.css']
})
export class UserMoneyComponent implements OnInit {

  moneyData: any;
  moneyTotal: any;
  // 当前页数
  pageNo = 1;
  // 每页显示的数据数量
  // 公司报告页面显示数据数量固定为20
  pageSize = 20;
  constructor(
    private userCommon: UserCommonService
  ) { }

  ngOnInit() {
    this.moneyInfo(this.pageSize, this.pageNo);
  }

  /**
   * 分页计算
   * @param event 当前页数
   */
  pageChanged(event: any) {
    this.pageNo = event.page;
    this.moneyInfo(this.pageSize, this.pageNo);
  }
  /**
   * 显示消费记录
   * @param pageSize 页面显示数量
   * @param pageNo 当前页
   */
  moneyInfo(pageSize, pageNo) {
    this.userCommon.moneyService(this.pageSize, this.pageNo)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.moneyData = response;
          this.moneyTotal = response['total'];
        } else {
          alert(response.message);
          return false;
        }

      })

  }
}
