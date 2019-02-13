import { Component, OnInit } from '@angular/core';
import { FinancialService } from '../../services/financial.service';
import { PageChangedEvent } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pointinfo',
  templateUrl: './pointinfo.component.html',
  styleUrls: ['./pointinfo.component.css']
})
export class PointinfoComponent implements OnInit {

  data: any;
  pointInfoTotal: any;
  private pageSize = 10;
  private pageNo = 1;

  constructor(
    private financial: FinancialService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.pointIdInfo(this.pageSize, this.pageNo);
  }
  /**
   * point分页计算
   * @param event 当前页数
   */
  pageChanged(event: PageChangedEvent): void {
    this.pageNo = event.page;
    this.pointIdInfo(this.pageSize, this.pageNo);
  }
  /**
   * 显示根据id查询到的数据
   */
  pointIdInfo(pageSize, pageNo) {
    const id = this.route.snapshot.paramMap.get('id');
    this.financial.pointInfo(id, pageSize, pageNo)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.data = response;
        this.pointInfoTotal = response['total'];
      } else {
        alert(response.message);
      }
      });
  }

  /**
   * 显示隐藏个人数据
   * @param pointId 个人id
   */
  pointVisibleId(pointId) {
    this.financial.pointIdVisibleService(pointId)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.pointIdInfo(this.pageSize, this.pageNo);
      } else {
        alert(response.message);
        return false;
      }
      });
  }

  /**
   * 模糊搜索
   * @param keyword 关键字
   * @param pageSize 页面显示数量大小
   * @param pageNo 当前页面
   */
  pointSearch(keyword) {
    const sysBonusId = this.route.snapshot.paramMap.get('id');
    this.financial.pointSearchService(sysBonusId, keyword, this.pageSize, this.pageNo)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.data = response;
      } else {
        alert(response.message);
        return false;
      }
      });
  }
}
