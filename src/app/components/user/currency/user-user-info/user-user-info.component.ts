import { Component, OnInit } from '@angular/core';
import { UserCommonService } from '../user-common.service';

@Component({
  selector: 'app-user-user-info',
  templateUrl: './user-user-info.component.html',
  styleUrls: ['./user-user-info.component.css']
})
export class UserUserInfoComponent implements OnInit {

  userData: any;
  constructor(
    private userCommon: UserCommonService
  ) { }

  ngOnInit() {
    this.userInfo();
  }

  /**
   * 显示个人档案
   */
  userInfo() {
    this.userCommon.userInfoService()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.userData = response;
          console.log(response);
        } else {
          alert(response.message);
          return false;
        }
      });
  }
}
