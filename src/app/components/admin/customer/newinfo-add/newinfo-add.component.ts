import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-newinfo-add',
  templateUrl: './newinfo-add.component.html',
  styleUrls: ['./newinfo-add.component.css']
})
export class NewinfoAddComponent implements OnInit {

  myData: any;
  constructor(
    private router: Router,
    private customer: CustomerService
  ) { }

  ngOnInit() {
  }

  newAdd(title, content, publishTime) {
    const data = {
      'title': title,
      'content': content,
      'publishTime': publishTime
    };
    this.customer.newAdd(data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          alert('添加成功');
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
