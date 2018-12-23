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
  pageNo: any;
  private pageSize = 10;

  constructor(
    private router: Router,
    private management: ManagementService
  ) { }

  ngOnInit() {
    this.levelInfo();
    this.levelTotal = this.levelTotal.map((v: string, i: number) => `Content line ${i + 1}`);
    this.levelData = this.levelData.slice(0, this.pageSize);
  }
  /**
   * 分页计算
   * @param event 当前页数
   */
  pageChanged(event: PageChangedEvent): void {
    this.pageNo = event.page;
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.levelData = this.levelData.slice(startItem, endItem);
  }

  /**
   * 显示会员等级数据
   */
  levelInfo() {
    // 判断并且给当前页赋值
    if (this.pageNo === 0 || this.pageNo === null || this.pageNo === undefined) {
      this.pageNo = 1;
    }
    // 存入当前页和每页显示的数据的数量
    const pageData = {
      'pageNo': this.pageNo,
      'pageSize': this.pageSize
    };
    this.management.levelInfoServie(pageData)
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
