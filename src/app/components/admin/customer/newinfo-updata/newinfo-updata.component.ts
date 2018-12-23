import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-newinfo-updata',
  templateUrl: './newinfo-updata.component.html',
  styleUrls: ['./newinfo-updata.component.css']
})
export class NewinfoUpdataComponent implements OnInit {

  constructor(
    private customer: CustomerService
  ) { }

  ngOnInit() {
  }
/*
  /!**
   * 修改公告
   *!/
  info_updata() {
    alert('保存成功');
  }
*/

}
