import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  // 存入返回的数据
  data: any;
  // 公告的数据总量
  newsTotal: any;
  // 当前页数
  private pageNo = 1;
  // 每页显示的数据数量
  // 公司报告页面显示数据数量固定为15
  private pageSize = 15;

  // 全选状态
  checkSum: boolean;
  // 数据check的状态
  newsStatus: boolean[] = [];
  // 数据集合
  status: any[] = [];


  constructor(
    private router: Router,
    private customer: CustomerService,
  ) {
  }

  ngOnInit() {
    this.newListInit(this.pageSize, this.pageNo);
  }

  /**
   * 分页计算
   * @param event 当前页数
   */
  pageChanged(event: any) {
    this.pageNo = event.page;
    this.newListInit(this.pageSize, this.pageNo);
  }

  /**
   *  首页公告列表
   */
  newListInit(pageSize, pageNo) {
    // 请求页面数据
    this.customer.newInfo(pageSize, pageNo)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.data = response;
          this.newsTotal = response['total'];
          this.status = response.data;
          console.log(this.newsTotal);
          console.log(this.data);
        } else {
          alert(response.message);
          return false;
        }
      });
  }

  /**
   * 添加公告
   */
  new_add() {
    this.router.navigateByUrl('/admin/newinfo_add');
  }



  /**
   * 根据id跳转到修改页面
   */
  newUpdata(userId) {
    this.customer.newUpdataService(userId);
  }


  /**
   * 删除id
   * @param newId 留言信息id
   */
  newIdDelete(newId) {
    const data = {
      'ids': newId
    };
    const new_select = confirm('确认删除？');
    if (new_select) {
      this.customer.newIdDeleteService(data)
        .subscribe((response: any) => {
          if (response.code === 200 || response.ok) {
            this.newListInit(this.pageSize, this.pageNo);
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
        this.newsStatus[i] = true;
      }
      // 如果全选框状态不是true
    } else {
      // 根据页面当前的数据长度，把全部数据的checke状态赋值为false
      for (let i = 0; i < this.status.length; i++) {
        // 给数据的复选框赋值true
        this.newsStatus[i] = false;
      }
    }

  }

  /**
   * check单选事件
   * @param i 当前位置
   */
  checked(i) {
    // 根据当前i的顺序，判断check的状态
    this.newsStatus[i] = this.newsStatus[i] ? false : true;
  }

  /**
   * 全选后，随意点掉一个复选框，全选框则被点掉
   */
  checkAllNo() {
    // messageStatus
    for (let i = 0; i < this.status.length; i++ ) {
      // messageStatus
      if (this.newsStatus[i] === false) {
        // 更改全选框的状态
        this.checkSum = false;
      }
    }
  }

  /**
   * 删除选取的N个留言信息
   */
  newsDelete() {
    let num = 0; // 为了存储ID，赋予ids数据位置
    const messages = []; // 选择事件后，给ids至空
    // messageStatus
    for (let i = 0; i < this.status.length; i++) {
      // messageStatus[i]的状态为true
      if (this.newsStatus[i] === true) {
        // 则给ids赋值，赋值顺序根据num
        messages[num] = this.status[i].id;
        // 每次赋值，num + 1
        num++;
      }
    }
    const userIdsDelete = confirm('确认删除以上' + num + '条记录？');
    if (userIdsDelete) {
      this.customer.newIdDeleteService(messages)
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



}
