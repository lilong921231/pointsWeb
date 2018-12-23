import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  // 存入返回的数据
  data: any;
  // 公告的数据总量
  newsTotal: any;
  // 当前页数
  private pageNo: any;
  // 每页显示的数据数量
  // 公司报告页面显示数据数量固定为15
  private pageSize = 15;


  constructor(
    private router: Router,
    private customer: CustomerService
  ) {
  }

  ngOnInit() {
    this.newListInit();
    this.newsTotal = this.newsTotal.map((v: string, i: number) => `Content line ${i + 1}`);
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
   *  首页公告列表
   */
  newListInit() {
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
    this.customer.newInfo(pageData)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          console.log(response);
          this.data = response;
        } else {
          alert(response.message);
          return false;
        }
      });
  }

  /**
   * 添加公告
   */
  new_add() {
    this.router.navigateByUrl('/admin/newinfo_add');
  }

}
