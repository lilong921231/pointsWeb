import { Component, OnInit } from '@angular/core';
import { FinancialService } from '../../services/financial.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pointinfo',
  templateUrl: './pointinfo.component.html',
  styleUrls: ['./pointinfo.component.css']
})
export class PointinfoComponent implements OnInit {

  data: any;
  pointInfoTotal: any;
  pointID: number;
  private pageSize = 10;
  private pageNo: any;

  constructor(
    private financial: FinancialService,
    private routerInfo: ActivatedRoute,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.pointIdInfo();
    this.pointInfoTotal = this.pointInfoTotal.map((v: string, i: number) => `Content line ${i + 1}`);
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
   * 显示根据id查询到的数据
   */
  pointIdInfo() {
    if (this.pageNo === 0 || this.pageNo === '' || this.pageNo === undefined) {
      this.pageNo = 1;
    }
    const pageData = {
      'pageNo': this.pageNo,
      'pageSize': this.pageSize
    };
    const id = +this.route.snapshot.paramMap.get('id');
    this.financial.pointInfo(id, pageData)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.data = response;
        console.log(response);
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
        this.pointIdInfo();
      } else {
        alert(response.message);
        return false;
      }
      });
  }

  /**
   * 模糊搜索
   * @param keyword 关键字
   */
  pointSearch(keyword) {
    const sysBonusId = +this.route.snapshot.paramMap.get('id');
    const data = {
      'sysBonusId': sysBonusId,
      'keyword': keyword,
      'pageNo': this.pageNo,
      'pageSize': this.pageSize
    };
    this.financial.pointSearchService(sysBonusId, data)
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
