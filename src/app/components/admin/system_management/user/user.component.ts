import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import * as $ from 'jquery';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userdata: any;
  userTotal: any;
  pageNo: any;
  private pageSize = 20;
  constructor(
    private management: ManagementService
  ) { }

  ngOnInit() {
    this.userInfo();
    this.userTotal = this.userTotal.map((v: string, i: number) => `Content line ${i + 1}`);
    this.userdata = this.userdata.slice(0, this.pageSize);
  }

  /**
   * 分页计算
   * @param event 当前页数
   */
  pageChanged(event: PageChangedEvent): void {
    this.pageNo = event.page;
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.userdata = this.userdata.slice(startItem, endItem);
  }

  userInfo() {
    // 判断并且给当前页赋值
    if (this.pageNo === 0 || this.pageNo === null || this.pageNo === undefined) {
      this.pageNo = 1;
    }
    // 存入当前页和每页显示的数据的数量
    const pageData = {
      'pageNo': this.pageNo,
      'pageSize': this.pageSize
    };
    // 访问显示会员信息服务
    this.management.userInfo(pageData)
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
    // 判断并且给当前页赋值
    if (this.pageNo === 0 || this.pageNo === null || this.pageNo === undefined) {
      this.pageNo = 1;
    }
    const data = {
      'type': typeId,
      'condition': condition,
      'pageNo': this.pageNo,
      'pageSize': this.pageSize
    };
    this.management.conditionService(data)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.userdata = response;
      } else {
        alert(response.message);
        return false;
      }
      });
  }

}
