import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 adminHeader: any;
  constructor(
    private management: ManagementService,
    private router: Router
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
          console.log(response);
        } else {
            this.management.managementCode(response.code, response);
            return ;
        }
      });
  }

  loginOut() {
    this.management.loginOut();
  }
}
