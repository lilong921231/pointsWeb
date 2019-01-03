import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  levelData: any;
  levelTotal: any;
  pageNo = 1;
  private pageSize = 10;

  constructor(
    private router: Router,
    private management: ManagementService
  ) { }

  ngOnInit() {
    this.levelInfo(this.pageSize, this.pageNo);
  }
  /**
   * 分页计算
   * @param event 当前页数
   */
  pageChanged(event: PageChangedEvent): void {
    this.pageNo = event.page;
    this.levelInfo(this.pageSize, this.pageNo);
  }

  /**
   * 显示会员等级数据
   */
  levelInfo(pageSize, pageNo) {

    this.management.levelInfoServie(pageSize, pageNo)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.levelData = response;
      } else {
        alert(response.message);
        return false;
      }
      });
  }

  /**
   * 跳转到添加页面
   */
  levelAdd() {
    this.router.navigateByUrl('/admin/levelAdd');
  }

  /**
   * 根据id跳到修改页面
   * @param levelId 等级id
   */
  levelUpdataId(levelId) {
    this.management.levelIdInfoService(levelId);
  }
}
