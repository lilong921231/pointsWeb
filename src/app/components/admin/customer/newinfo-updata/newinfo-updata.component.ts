import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import {DatePipe} from '@angular/common';
import * as $ from 'jquery';

@Component({
  selector: 'app-newinfo-updata',
  templateUrl: './newinfo-updata.component.html',
  styleUrls: ['./newinfo-updata.component.css'],
  providers: [DatePipe]
})
export class NewinfoUpdataComponent implements OnInit {

  newUpdataData: any;
  constructor(
    private customer: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
    private datePipe: DatePipe  // 引用DatePipe日期格式化组件
  ) { }

  ngOnInit() {
    this.newinfoUpdata();
  }

  newinfoUpdata() {
    const newid = this.route.snapshot.paramMap.get('id');
    this.customer.newIdService(newid)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.newUpdataData = response;
        } else {
          this.customer.customerCode(response.code, response);
          return false;
        }
      });
  }

  newUpdate(title, content) {
    const updateTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss');
    const newid = this.route.snapshot.paramMap.get('id');
    const data = {
      'id': newid,
      'title': title,
      'content': content,
      'publishTime': updateTime
    };
    this.customer.newUpdataService(data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          alert('修改成功');
          this.router.navigateByUrl('/admin/news');
        } else {
          this.customer.customerCode(response.code, response);
          return false;
        }
      });
  }

  /**
   * 重置按钮
   */
  reset() {
    $('input[type="text"]').prop('value', '');
    $('ckeditor').prop('value', '');
  }
}
