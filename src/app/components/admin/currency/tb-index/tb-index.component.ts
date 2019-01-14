import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyService } from '../../services/currency.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-tb-index',
  templateUrl: './tb-index.component.html',
  styleUrls: ['./tb-index.component.css'],
})
export class TbIndexComponent implements OnInit {

  // 存入返回的数据
  data: any;
  // 天宝指数的数据总量
  tbIndexTotal: any;
  // 当前页数
  pageNo = 1;
  // 每页显示的数据数量
  // 公司报告页面显示数据数量固定为20
  pageSize = 20;

  constructor(
    private router: Router,
    private currency: CurrencyService
  ) { }

  ngOnInit() {
    this.tbInfo(this.pageSize, this.pageNo);
  }

  /**
   * 分页计算
   * @param event 当前页数
   */
  pageChanged(event: any) {
   this.pageNo = event.page;
   this.tbInfo(this.pageSize, this.pageNo);
  }

  /**
   * 显示天宝指数页面
   */
  tbInfo(pageSize, pageNo) {
    // 请求页面数据
    this.currency.tbIndexService(this.pageSize, this.pageNo)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.data = response;
          this.tbIndexTotal = response['total'];
          console.log(response);
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
   * 根据id跳转界面
   */
  tbIdSkip(id) {
    this.currency.tbIdSkip(id);
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
            this.tbInfo(this.pageSize, this.pageNo);
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
