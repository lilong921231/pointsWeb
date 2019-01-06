import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import {ManagementService} from '../../services/management.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  newData: any;
  adminData: any;
  constructor(
    private currency: CurrencyService,
    private management: ManagementService
  ) { }

  ngOnInit() {
    this.newInfo();
    this.adminInfo();
  }

  /**
   * 显示首页
   */
  newInfo() {
    this.currency.newService()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.newData = response;
        } else {
          alert(response.message);
          return false;
        }
      });
  }

  /**
   * 显示登陆信息
   */
  adminInfo() {
    this.management.adminInfo()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.adminData = response;
          console.log(response);
        } else {
          alert(response.message);
          return false;
        }
      });
  }
}
