import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import {ManagementService} from "../../services/management.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messageData: any;
  constructor(
    private customer: CustomerService,
    private management: ManagementService
  ) { }

  ngOnInit() {
    this.messageInfo();
  }

  /**
   * 表示查询未处理的留言信息
   */
  messageInfo() {
    // 未处理的留言信息类型为 1
    const typeId = 1;
    this.customer.messageListService(typeId)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.messageData = response;
        console.log(response);
      } else {
        alert(response.message);
        return false;
      }
      });
  }

  /**
   * 根据留言的ID查看详情
   */
  messageIdInfo(messageId) {
    this.customer.messageIdSkip(messageId);
  }

  /**
   * 根据会员编号查询会员详情
   */
  userIdSkip(userId) {
    this.management.userIdSkip(userId);
  }
}
