import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';
import {PageChangedEvent} from "ngx-bootstrap";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminData: any;
  adminTotal: number;
  pageNo = 1;
  pageSize = 10;
  constructor(
    private management: ManagementService
  ) { }

  ngOnInit() {
    this.adminInfo(this.pageSize, this.pageNo);
  }

  /**
   * 分页计算
   * @param event 当前页数
   */
  pageChanged(event: PageChangedEvent): void {
    this.pageNo = event.page;
    this.adminInfo(this.pageSize, this.pageNo);
  }
  /**
   * 显示管理用户
   */
  adminInfo(pageSize, pageNo) {
    // 判断并且给当前页赋值
    this.management.adminService(pageSize, pageNo)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.adminData = response;
        this.adminTotal = response.total;
      } else {
        alert(response.message);
        return false;
      }
      });
  }

  /**
   * 跳转到添加页面
   */
  adminAdd() {
    this.management.adminAddUrl();
  }

  /**
   * 根据id跳转到修改页面
   */
  adminUpdata(adminId) {
    this.management.adminUpdataId(adminId);
  }

  /**
   * 根据id删除管理用户
   * @param adminId 管理用户id
   */
  adminDelete(adminId) {
    const adminIdDelete = confirm('确认删除？');
    if (adminIdDelete) {
      this.management.adminDeleteService(adminId)
        .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          alert('删除成功');
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
