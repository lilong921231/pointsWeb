import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messageinfo',
  templateUrl: './messageinfo.component.html',
  styleUrls: ['./messageinfo.component.css']
})
export class MessageinfoComponent implements OnInit {

  magList: any;
  magData: any;
  userId: any;
  ceshi = true;

  constructor(
    private customer: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.messagInfo();
  }

  /**
   * 根据id显示留言详情
   */
  messagInfo() {
    const messageId = this.route.snapshot.paramMap.get('id');
    this.customer.messageInfoService(messageId)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.magData = response;
        this.userId = response.data['senderId'];
        this.messageList(this.userId);
      } else {
        alert(response.message);
      }
      });
  }

  /**
   * 根据用户id显示会员的全部留言
   * @param userId 用户id
   */
  messageList(userId) {
    const type = '1&currentId=' + this.userId;
    this.customer.messageListService(type)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.magList = response;
      } else {
        alert(response.message);
      }
      });
  }
  /**
   * 根据留言的ID查看详情
   */
  messageIdInfo(messageId) {
    this.customer.messageIdSkip(messageId);
  }

}
