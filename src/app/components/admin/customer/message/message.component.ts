import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ManagementService } from '../../services/management.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  // 全选状态
  checkSum: boolean;
  // 数据check的状态
  messageStatus: boolean[] = [];
  // 数据集合
  status: any[] = [];

  messageData: any;
  total: any;
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
    // 未处理的所有留言信息类型为 1
    const typeId = 1;
    this.customer.messageListService(typeId)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.messageData = response;
        this.status = response.data;
        this.total = response.total;
      } else {
        if (response.code === 706) {
          const messageNull = [
            {
              status: '',
              message: {
                id: '',
                title: '',
                content: ''
              },
              sender: {
                account: ''
              }
            }
          ];
          this.messageData = messageNull;
          this.total = 0;
        } else {
          alert(response.message);
        }

        return false;
      }
      });
  }

  /**
   * 根据keyword来搜索信息
   * @param keyword 关键字
   */
  messageSearch(keyword) {
    const typeId = 1;
    this.customer.messsageSearchService(typeId, keyword)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.messageData = response;
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

  /**
   * 删除id
   * @param messageId 留言信息id
   */
  messageIdDelete(messageId) {
    const data = {
      'ids': messageId
    };
    const message_select = confirm('确认删除？');
    if (message_select) {
      alert('您选择了确认删除信息');
      this.customer.userIdDeleteService(data)
        .subscribe((response: any) => {
          if (response.code === 200 || response.ok) {
            alert('删除成功');
            this.messageInfo();
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
    if (this.checkSum) {
      // 根据页面现实的数据长度，把全部数据的check状态赋值为true
      for (let i = 0; i < this.status.length; i++) {
        // 给数据的复选框赋值true
        this.messageStatus[i] = true;
      }
      // 如果全选框状态不是true
    } else {
      // 根据页面当前的数据长度，把全部数据的checke状态赋值为false
      for (let i = 0; i < this.status.length; i++) {
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
    // 设定自加变量值，并初始化
    let k = 0;
    // 循环查看数据长度查看状态
    for (let j = 0; j < this.status.length; j++) {
      // 查看所有状态是否都等于true
      if (this.messageStatus[j] === true) {
        // 数据状态等于true，则自加变量k加1
        k++;
        // k+1是为了等于数组长度
        if (k === this.status.length) {
          // 返回全选状态为true
          return this.checkSum = true;
        }
      }
    }
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
    for (let i = 0; i < this.status.length; i++) {
      // messageStatus[i]的状态为true
      if (this.messageStatus[i] === true) {
        // 则给ids赋值，赋值顺序根据num
        messages[num] = this.status[i].message.id;
        // 每次赋值，num + 1
        num++;
      }
    }

    const data = {
      'ids': messages.toString()
    };

    const userIdsDelete = confirm('确认删除以上' + num + '条记录？');
    if (userIdsDelete) {
      this.customer.messagesDeleteService(data)
        .subscribe((response: any) => {
          if (response.code === 200 || response.ok) {
            alert('删除成功');
            this.messageInfo();
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
