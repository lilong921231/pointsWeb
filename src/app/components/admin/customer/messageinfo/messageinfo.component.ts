import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';


@Component({
  selector: 'app-messageinfo',
  templateUrl: './messageinfo.component.html',
  styleUrls: ['./messageinfo.component.css']
})
export class MessageinfoComponent implements OnInit {

  constructor(
    private customer: CustomerService
  ) { }

  ngOnInit() {
  }
/*
  /!**
   * 修改管理员回复
   *!/
  meginfo_updata() {
    alert('保存成功');
  }
*/

}
