import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-message-history',
  templateUrl: './message-history.component.html',
  styleUrls: ['./message-history.component.css']
})
export class MessageHistoryComponent implements OnInit {

  historyData: any;
  constructor(
    private customer: CustomerService
  ) { }

  ngOnInit() {
    this.messageHistory();
  }

  /**
   * 查看已处理的留言历史
   */
  messageHistory() {
    this.customer.messageHistoryService()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.historyData = response;
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
   * 删除id
   * @param messageId 留言信息id
   */
  userIdDelete(messageId) {
    const data = {messageId};
    const message_select = confirm('确认删除？');
    if (message_select) {
      alert('您选择了确认删除信息');
      this.customer.userIdDeleteService(data)
        .subscribe((response: any) => {
          if (response.code === 200 || response.ok) {
            this.messageHistory();
          } else {
            alert(response.message);
            return false;
          }
        });
    } else {
      return false;
    }
  }


}
