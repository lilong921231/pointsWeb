import { Component, OnInit } from '@angular/core';
import {UserCommonService} from "../user-common.service";
import * as $ from "jquery";
import {HttpService} from "../../../../common/service/http.service";

@Component({
  selector: 'app-user-message',
  templateUrl: './user-message.component.html',
  styleUrls: ['./user-message.component.css']
})
export class UserMessageComponent implements OnInit {

  // 当前页数
  pageNo = 1;
  // 每页显示的数据数量
  // 公司报告页面显示数据数量固定为20
  pageSize = 20;
  messageData: any;
  messageTotal: any;
  userId: any;

  constructor(
    private userCommon: UserCommonService,
    private http: HttpService
  ) { }

  ngOnInit() {
    this.messageInfo(this.pageSize, this.pageNo);
    this.userId = this.http.getId();
  }

  /**
   * 保存留言信息
   * @param id 用户id
   * @param title 留言标题
   * @param content 留言内容
   */
  messageUpdata(id, title, content) {
    const data = {
      'ids': id,
      "title": title,
      "content": content,
    };
    console.log(id,title,content);
    this.userCommon.messageUpdateService(data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.messageInfo(this.pageSize, this.pageNo);
        } else {
          alert(response.message);
          return false;
        }
      })
  }

  /**
   * 重置事件
   */
  reset() {
    //  密码
    $('input[type="text"]').prop('value', '');
    $('textarea').prop('value', '');
  }

  /**
   * 分页计算
   * @param event 当前页数
   */
  pageChanged(event: any) {
    this.pageNo = event.page;
    this.messageInfo(this.pageSize, this.pageNo);
  }


  /**
   * 显示留言信息
   * @param pageSize pageSize 页面显示数量
   * @param pageno pageNo 当前页
   */
  messageInfo(pageSize, pageno) {
    this.userCommon.messageInfoService(pageSize, pageno)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.messageData = response;
          this.messageTotal = response['total'];
          console.log(response);
        } else {
          alert(response.message);
          return false;
        }
      })
  }

  /**
   * 根据id跳到查看详情页面
   * @param messageId 留言信息id
   */
  messageInfoSkip(messageId) {
    this.userCommon.messageIdSkip(messageId);
  }
}
