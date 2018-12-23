import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyService } from '../../services/currency.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-tb-index',
  templateUrl: './tb-index.component.html',
  styleUrls: ['./tb-index.component.css']
})
export class TbIndexComponent implements OnInit {

  // 存入返回的数据
  data: any;
  // 天宝指数的数据总量
  tbIndexTotal: any;
  // 天宝指数id
  tbExponentId: any;
  // 当前页数
  pageNo: any;
  // 每页显示的数据数量
  // 公司报告页面显示数据数量固定为20
  private pageSize = 20;

  constructor(
    private router: Router,
    private currency: CurrencyService
  ) { }

  ngOnInit() {
    this.tbInfo();
    this.tbIndexTotal = this.tbIndexTotal.map((v: string, i: number) => `Content line ${i + 1}`);
    this.data = this.data.slice(0, this.pageSize);
  }

  /**
   * 分页计算
   * @param event 当前页数
   */
  pageChanged(event: PageChangedEvent): void {
    this.pageNo = event.page;
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.data = this.data.slice(startItem, endItem);
  }

  /**
   * 显示天宝指数页面
   */
  tbInfo() {
    // 判断并且给当前页赋值
    if (this.pageNo === 0 || this.pageNo === null || this.pageNo === undefined) {
      this.pageNo = 1;
    }
    // 存入当前页和每页显示的数据的数量
    const pageData = {
      // 当前页数
      'pageNo': this.pageNo,
      // 每页显示的数据的数量
      'pageSize': this.pageSize
    };
    // 请求页面数据
    this.currency.tbIndexService(pageData)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.data = response;
        } else {
          alert(response.message);
          return false;
        }
      });
  }

  /**
   * 跳转到天宝添加指数页面
   */
  tbAdd() {
    this.router.navigateByUrl('/admin/tb-index-add');
  }

  /**
   * 查询id数据
   * 并跳转到修改页面
   * @param tbExponentId id数据
   */
  tbUpdataId(tbExponentId) {
    this.currency.tbIndexIdService(tbExponentId)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.currency.tbUpdataIdService(response);
      } else {
        alert(response.message);
        return false;
      }
      });
  }

  /**
   * 删除天宝指数数据
   */
  tbDeleteId(tbExponentId) {
    const message = '确认删除这条数据？';
    const tbDeleteSelects = confirm(message);
    if (tbDeleteSelects) {
      this.currency.tbDeleteService(tbExponentId)
        .subscribe((response: any) => {
          if (response.code === 200 || response.ok) {
            alert('删除成功');
            this.tbInfo();
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
