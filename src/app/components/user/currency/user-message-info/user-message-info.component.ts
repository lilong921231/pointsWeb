import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {UserCommonService} from "../user-common.service";

@Component({
  selector: 'app-user-message-info',
  templateUrl: './user-message-info.component.html',
  styleUrls: ['./user-message-info.component.css']
})
export class UserMessageInfoComponent implements OnInit {

  data: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userCommon : UserCommonService
  ) { }

  ngOnInit() {
    this.messageIdInfo();
  }

  /**
   * 根据id显示信息
   */
  messageIdInfo() {
    const messageId = this.route.snapshot.paramMap.get('id');
    this.userCommon.messageIdInfoService(messageId)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.data = response;
          console.log(response);
        } else {
          alert(response.message);
          return false;
        }
      })
  }
}
