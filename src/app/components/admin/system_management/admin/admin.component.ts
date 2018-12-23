import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminData: any;
  adminTotal: number;
  pageNo: number;
  pageSize = 10;
  constructor(
    private management: ManagementService
  ) { }

  ngOnInit() {
    this.adminInfo();
  }

  /**
   * 显示管理用户
   */
  adminInfo() {
    // 判断并且给当前页赋值
    if (this.pageNo === 0 || this.pageNo === null || this.pageNo === undefined) {
      this.pageNo = 1;
    }
    // 存入当前页和每页显示的数据的数量
    const pageData = {
      'pageNo': this.pageNo,
      'pageSize': this.pageSize
    };
    this.management.adminService(pageData)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.adminData = response;
        this.adminTotal = response.total;
        console.log(response);
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
