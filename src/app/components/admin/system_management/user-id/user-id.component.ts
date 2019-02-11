import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {PageChangedEvent} from 'ngx-bootstrap';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {

  // 全选状态
  checkSum: boolean;
  // 数据check的状态
  userStatus: boolean[] = [];
  status: any[] = [];
  userTotal: any;

  pageNo = 1;
  pageSize = 10;
  userdata: any;
  constructor(
    private management: ManagementService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.userIdShow(this.pageSize, this.pageNo);
  }

  /**
   * 分页计算
   * @param event 当前页数
   */
  pageChanged(event: PageChangedEvent): void {
    this.pageNo = event.page;
    this.userIdShow(this.pageSize, this.pageNo);
  }

  /**
   * 根据跳转的id查询并显示
   */
  userIdShow(pageSize, pageNo) {
    const typeid = 0;
    const userId = this.route.snapshot.paramMap.get('id');
    this.management.conditionService(typeid, userId)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.userdata = response;
          this.status = response.data;
          this.userTotal = response['total'];
        } else {
          alert(response.message);
        }
      });
  }

  /**
   * 根据关键字搜索
   */
  condition(type, keyword) {
    this.management.conditionService(type, keyword)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.userdata = response;
        } else {
          alert(response.message);
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
    if (this.checkSum) {
      // 根据页面现实的数据长度，把全部数据的check状态赋值为true
      for (let i = 0; i < this.status.length; i++) {
        // 给数据的复选框赋值true
        this.userStatus[i] = true;
      }
      // 如果全选框状态不是true
    } else {
      // 根据页面当前的数据长度，把全部数据的checke状态赋值为false
      for (let i = 0; i < this.status.length; i++) {
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
    // 设定自加变量值，并初始化
    let k = 0;
    // 循环查看数据长度查看状态
    for (let j = 0; j < this.status.length; j++) {
      // 查看所有状态是否都等于true
      if (this.userStatus[j] === true) {
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
    for (let i = 0; i < this.status.length; i++) {
      // 如果userStatus[i]的状态为true
      if (this.userStatus[i] === true) {
        // 则给ids赋值，赋值顺序根据num
        ids[num] = this.status[i].id;
        // 每次赋值，num + 1
        num++;
      }
    }
    const data = {
      'ids': ids.toString()
    };
    const userIdsDelete = confirm('确认屏蔽以上' + num + '个会员？');
    if (userIdsDelete) {
      this.management.userIdsDeleteService(data)
        .subscribe((response: any) => {
          if (response.code === 200 || response.ok) {
            this.ngOnInit();
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
          alert('重置成功!密码为：888888');
          this.router.navigateByUrl('/admin/user');
        } else {
          alert(response.message);
          return false;
        }
      });
  }


}
