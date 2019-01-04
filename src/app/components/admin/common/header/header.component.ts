import { Component, OnInit } from '@angular/core';
import {ManagementService} from "../../services/management.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 adminHeader: any;
  constructor(
    private management: ManagementService
  ) {
  }

  ngOnInit() {
    this.adminInfo();
  }

  /**
   * 显示登陆信息
   */
  adminInfo() {
    this.management.adminInfo()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.adminHeader = response;
        } else {
          alert(response.message);
          return false;
        }
      })
  }
}
