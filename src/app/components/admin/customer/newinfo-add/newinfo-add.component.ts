import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newinfo-add',
  templateUrl: './newinfo-add.component.html',
  styleUrls: ['./newinfo-add.component.css']
})
export class NewinfoAddComponent implements OnInit {

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
    console.log(data);
    this.customer.newAdd(data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          alert('添加成功');
          this.router.navigateByUrl('/admin/news');
        } else {
          alert(response.message);
          return false;
        }
      });
  }
}
