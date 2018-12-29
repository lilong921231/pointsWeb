import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  // 全选状态
  checkSum: boolean;
  // 数据check的状态
  userStatus: boolean[] = [];
  // 数据集合
  status: any[] = [];

  userdata: any;
  userTotal: any;
  pageNo = 1;
  pageSize = 10;
  constructor(
    private management: ManagementService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.userInfo(this.pageSize, this.pageNo);
  }
  /**
   * 分页计算
   * @param event 当前页数
   */
  pageChanged(event: PageChangedEvent): void {
    this.pageNo = event.page;
    this.userInfo(this.pageSize, this.pageNo);
  }

  userInfo(pageSize, pageNo) {
    // 访问显示会员信息服务
    this.management.userInfo(this.pageSize, this.pageNo)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.userdata = response;
        this.userTotal = response['total'];
        this.status = response.data;
      } else {
        alert(response.message);
        return false;
      }
      });
  }

  /**
   * 查看id明细
   */
  userIdInfo(userId) {
    this.management.userIdInfo(userId);
  }

  /**
   * 查看要修改id的明细
   * @param userId 要查看的id
   */
  userIdUpdata(userId) {
    this.management.userIdUpdata(userId);
  }

  /**
   * 重置用户密码
   */
  userResetPassword(userId) {
    this.management.userResetService(userId)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        alert('重置成功');
      } else {
        alert(response.message);
        return false;
      }
      });
  }

  /**
   * 根据类型和关键字搜索
   * @param typeId 类型
   * @param condition 关键字
   */
  condition(typeId, condition) {
    this.management.conditionService(typeId, condition)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.userdata = response;
        console.log(response);
      } else {
        alert(response.message);
        return false;
      }
      });
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
        this.userStatus[i] = true;
      }
      // 如果全选框状态不是true
    } else {
      // 根据页面当前的数据长度，把全部数据的checke状态赋值为false
      for(let i = 0; i < this.status.length; i++) {
        // 给数据的复选框赋值true
        this.userStatus[i] = false;
      }
    }

  }

  /**
   * check单选事件
   * @param i 当前位置
   */
  checked(i) {
    // 根据当前i的顺序，判断check的状态
    this.userStatus[i] = this.userStatus[i] ? false : true;
  }

  /**
   * 全选后，随意点掉一个复选框，全选框则被点掉
   */
  checkAllNo() {
    // 循环查看userStatus是否由false的状态
    for (let i = 0; i < this.status.length; i++ ) {
      // 如果userStatus有false的状态
      if (this.userStatus[i] === false) {
        // 更改全选框的状态
        this.checkSum = false;
      }
    }
  }

  /**
   * 删除选取的N个id
   */
  idsDelete() {
    let num = 0; // 为了存储ID，赋予ids数据位置
    const ids = []; // 选择事件后，给ids至空
    // 循环查看userStatus的状态
    for(let i = 0; i < this.status.length; i++) {
      // 如果userStatus[i]的状态为true
      if(this.userStatus[i] === true) {
        // 则给ids赋值，赋值顺序根据num
        ids[num] = this.status[i].id;
        // 每次赋值，num + 1
        num++;
      }
    }
    const userIdsDelete = confirm('确认删除以上' + num + '条记录？');
    if (userIdsDelete) {
      this.management.userIdsDeleteService(ids)
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
