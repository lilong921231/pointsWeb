import { Component, OnInit } from '@angular/core';
import { UserCommonService } from "../user-common.service";

@Component({
  selector: 'app-user-main',
  templateUrl: './user-main.component.html',
  styleUrls: ['./user-main.component.css'],

})
export class UserMainComponent implements OnInit {

  newData: any;
  constructor(
    private userCommon: UserCommonService,
  ) { }

  ngOnInit() {
    this.new();
  }

  /**
   * 显示公告信息
   */
  new() {
    this.userCommon.newService()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.newData = response;
        } else {
          alert(response.message);
          return false;
        }
      })
  }


}
