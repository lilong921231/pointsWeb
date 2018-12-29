import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  master:boolean = false; //默认全选按钮没有被选中
  batchShow:boolean = true; //批量操作按钮是否可以编辑


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
    console.log(this.pageNo + this.pageSize);
    this.userInfo(this.pageSize, this.pageNo);
  }

  userInfo(pageSize, pageNo) {
    // 访问显示会员信息服务
    this.management.userInfo(this.pageSize, this.pageNo)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.userdata = response;
        this.userTotal = response['total'];
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

}
