import { Component, OnInit } from '@angular/core';
import { FinancialService } from '../../services/financial.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pointlist',
  templateUrl: './pointlist.component.html',
  styleUrls: ['./pointlist.component.css']
})
export class PointlistComponent implements OnInit {

  data: any;
  pointtotal: any;
  pageSize = 20;
  pageNo = 1;

  constructor(
    private financial: FinancialService,
  ) { }

  ngOnInit() {
    this.pointList(this.pageSize, this.pageNo);
  }

  /**
   * point分页计算
   * @param event 当前页数
   */
  pageChanged(event: any) {
    this.pageNo = event.page;
    this.pointList(this.pageSize, this.pageNo);
  }

  /**
   * 分页取得数据
   */
  pointList(pageSize, pageNo) {
    this.financial.pointList(this.pageSize, this.pageNo)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.data = response;
          console.log(response);
          this.pointtotal = response['total'];
          console.log(this.pointtotal);
        } else {
          alert(response.message);
          return false;
        }
      });
  }

  /**
   * 查看id明细
   */
  pointInfo(pointId) {
    this.financial.pointInfoId(pointId);
  }

  /**
   * 前台隐藏
   */
  pointVisible(pointId) {
    this.financial.pointVisibleService(pointId)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.pointList(this.pageSize, this.pageNo);
      } else {
        alert(response.message);
        return false;
      }
      });
  }

  /**
   * 强行清空积分数据
   * @param pointId id编号
   */
  pointDelete(pointId) {
    const pointDelete = confirm('确认清空？');
    if (pointDelete) {
      this.financial.pointDelete(pointId)
        .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.pointList(this.pageSize, this.pageNo);
        } else {
          alert(response.message);
          return false;
        }
        });
    } else {
      return false;
    }
  }
}

