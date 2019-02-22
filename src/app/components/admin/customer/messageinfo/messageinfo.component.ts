import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-messageinfo',
  templateUrl: './messageinfo.component.html',
  styleUrls: ['./messageinfo.component.css']
})
export class MessageinfoComponent implements OnInit {

  magList: any;
  magData: any;
  userId: any;
  messageStatus = false;
  statusOK: number;

  constructor(
    private customer: CustomerService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.messageInfo();
  }

  /**
   * 根据id显示留言详情
   */
  messageInfo() {
    const messageId = this.route.snapshot.paramMap.get('id');
    this.customer.messageInfoService(messageId)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.magData = response;
        this.userId = response.data['senderId'];
        if (response.data.status === 6) {
          this.messageStatus = true;
        }
        this.messageList(this.userId);
      } else {
        this.customer.customerCode(response.code, response);
        return false;
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
        this.customer.customerCode(response.code, response);
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

  status() {
    this.messageStatus = this.messageStatus ? false : true;
  }


  /**
   * 回复管理员留言信息
   */
  messageUpdata(id, reply) {
    if (this.messageStatus) {
      this.statusOK = 6;
    } else {
      this.statusOK = 5;
    }
    this.customer.messageUpdataService(id, reply, this.statusOK)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.router.navigateByUrl('/admin/message');
        } else {
          this.customer.customerCode(response.code, response);
          return false;
        }
      });
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
            this.messageInfo();
          } else {
            this.customer.customerCode(response.code, response);
            return false;
          }
        });
    } else {
      return false;
    }
  }


  /**
   * 清空回复留言
   */
  reset() {
    //  密码
    $('textarea').prop('value', '');
  }

}
