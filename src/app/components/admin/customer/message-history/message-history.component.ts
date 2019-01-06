import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-message-history',
  templateUrl: './message-history.component.html',
  styleUrls: ['./message-history.component.css']
})
export class MessageHistoryComponent implements OnInit {

  // 全选状态
  checkSum: boolean;
  // 数据check的状态
  messageStatus: boolean[] = [];
  // 数据集合
  status: any[] = [];
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
          console.log(response);
          alert(response.message);
          return false;
        }
      });
  }

  /**
   * 根据keyword来搜索信息
   * @param keyword 关键字
   */
  messageSearch(keyword) {
    const typeId = 2;
    this.customer.messsageSearchService(typeId, keyword)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.historyData = response;
        } else {
          alert(response.message);
          return false;
        }
      })
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
  messageIdDelete(messageId) {
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


  /**
   * check全选事件
   */
  checkAll() {
    // 全选框的状态
    this.checkSum = this.checkSum ? false : true;
    // 如果全选框状态为true
    if (this.checkSum){
      // 根据页面现实的数据长度，把全部数据的check状态赋值为true
      for(let i = 0; i < this.status.length; i++) {
        // 给数据的复选框赋值true
        this.messageStatus[i] = true;
      }
      // 如果全选框状态不是true
    } else {
      // 根据页面当前的数据长度，把全部数据的checke状态赋值为false
      for(let i = 0; i < this.status.length; i++) {
        // 给数据的复选框赋值true
        this.messageStatus[i] = false;
      }
    }

  }

  /**
   * check单选事件
   * @param i 当前位置
   */
  checked(i) {
    // 根据当前i的顺序，判断check的状态
    this.messageStatus[i] = this.messageStatus[i] ? false : true;
  }

  /**
   * 全选后，随意点掉一个复选框，全选框则被点掉
   */
  checkAllNo() {
    // messageStatus
    for (let i = 0; i < this.status.length; i++ ) {
      // messageStatus
      if (this.messageStatus[i] === false) {
        // 更改全选框的状态
        this.checkSum = false;
      }
    }
  }

  /**
   * 删除选取的N个留言信息
   */
  messagesDelete() {
    let num = 0; // 为了存储ID，赋予ids数据位置
    const messages = []; // 选择事件后，给ids至空
    // messageStatus
    for(let i = 0; i < this.status.length; i++) {
      // messageStatus[i]的状态为true
      if(this.messageStatus[i] === true) {
        // 则给ids赋值，赋值顺序根据num
        messages[num] = this.status[i].id;
        // 每次赋值，num + 1
        num++;
      }
    }
    const userIdsDelete = confirm('确认删除以上' + num + '条记录？');
    if (userIdsDelete) {
      this.customer.messagesDeleteService(messages)
        .subscribe((response: any) => {
          if (response.code === 200 || response.ok) {
            this.ngOnInit();
          } else {
            alert(response.message);
            return false;
          }
        })
    } else {
      return false;
    }
  }




}
