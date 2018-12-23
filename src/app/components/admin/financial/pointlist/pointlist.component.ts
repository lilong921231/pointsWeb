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
  pointSelect = true;
  private pageSize = 20;
  private pageNo: any;

  constructor(
    private financial: FinancialService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.pointList();
    this.pointtotal = this.pointtotal.map((v: string, i: number) => `Content line ${i + 1}`);
    this.data = this.data.slice(0, this.pageSize);
  }

  /**
   * point分页计算
   * @param event 当前页数
   */
  pageChanged(event: PageChangedEvent): void {
    this.pageNo = event.page;
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.data = this.data.slice(startItem, endItem);

  }

  /**
   * 分页取得数据
   */
  pointList() {
    if (this.pageNo === 0 || this.pageNo === '' || this.pageNo === undefined) {
      this.pageNo = 1;
    }
    const data = {
      'pageNo': this.pageNo,
      'pageSize': this.pageSize
    };
    this.financial.pointList(data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.data = response;
          this.pointtotal = this.data.total;
          console.log(response);
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
        this.pointList();
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
          this.pointList();
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

