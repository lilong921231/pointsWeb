import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';
import {PageChangedEvent} from "ngx-bootstrap";

@Component({
  selector: 'app-admingroup',
  templateUrl: './admingroup.component.html',
  styleUrls: ['./admingroup.component.css']
})
export class AdmingroupComponent implements OnInit {

  admingroupData: any;
  groupTotal: any;
  pageNo = 1;
  pageSize = 20;

  constructor(
    private management: ManagementService
  ) { }

  ngOnInit() {
    this.admingroupInfo(this.pageSize, this.pageNo);
  }

  /**
   * 分页计算
   * @param event 当前页数
   */
  pageChanged(event: PageChangedEvent): void {
    this.pageNo = event.page;
    this.admingroupInfo(this.pageSize, this.pageNo);
  }
  /**
   * 显示管理角色
   */
  admingroupInfo(pageSize, pageNo) {

    this.management.admingroupService(pageSize, pageNo)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.admingroupData = response;
        this.groupTotal = response['total'];
      } else {
        this.management.managementCode(response.code, response);
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
