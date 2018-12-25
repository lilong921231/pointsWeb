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
  private pageNo = 1;
  // 每页显示的数据数量
  // 公司报告页面显示数据数量固定为15
  private pageSize = 15;


  constructor(
    private router: Router,
    private customer: CustomerService
  ) {
  }

  ngOnInit() {
    this.newListInit(this.pageSize, this.pageNo);
  }

  /**
   * 分页计算
   * @param event 当前页数
   */
  pageChanged(event: any) {
    this.pageNo = event.page;
    this.newListInit(this.pageSize, this.pageNo);
  }

  /**
   *  首页公告列表
   */
  newListInit(pageSize, pageNo) {
    // 请求页面数据
    this.customer.newInfo(pageSize, pageNo)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.data = response;
          this.newsTotal = response['total'];
          console.log(this.newsTotal);
          console.log(this.data);
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
