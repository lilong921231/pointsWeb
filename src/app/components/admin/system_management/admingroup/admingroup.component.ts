import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';

@Component({
  selector: 'app-admingroup',
  templateUrl: './admingroup.component.html',
  styleUrls: ['./admingroup.component.css']
})
export class AdmingroupComponent implements OnInit {

  admingroupData: any;
  groupTotal: any;
  pageNo: number;
  pageSize = 10;

  constructor(
    private management: ManagementService
  ) { }

  ngOnInit() {
    this.admingroupInfo();
  }

  /**
   * 显示管理角色
   */
  admingroupInfo() {
    // 判断并且给当前页赋值
    if (this.pageNo === 0 || this.pageNo === null || this.pageNo === undefined) {
      this.pageNo = 1;
    }
    const pageData = {
      'pageNo': this.pageNo,
      'pageSize': this.pageSize
    };
    this.management.admingroupService(pageData)
      .subscribe((response: any) => {
      if (response.code = 200 || response.ok) {
        this.admingroupData = response;
      } else {
        alert(response.message);
        return false;
      }
      });
  }

  /**
   * 修改选中id
   * @param id 当前要修改的id
   */
  admingroupUpdataId(id) {
    this.management.admingroupId(id);
  }
}
