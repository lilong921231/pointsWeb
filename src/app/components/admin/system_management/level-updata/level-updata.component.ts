import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as $ from "jquery";

@Component({
  selector: 'app-level-updata',
  templateUrl: './level-updata.component.html',
  styleUrls: ['./level-updata.component.css']
})
export class LevelUpdataComponent implements OnInit {

  updataData: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private management: ManagementService
  ) { }

  ngOnInit() {
    this.levelIdInfo();
  }
  /**
   * 显示要修改会员Id的信息
   */
  levelIdInfo() {
    const levelId = this.route.snapshot.paramMap.get('id');
    this.management.levelIdIService(levelId)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.updataData = response;
        } else {
          alert(response.message);
          return false;
        }
      });
  }

  /**
   * 修改会员等级
   * @param id 会员等级id
   * @param name 会员等级名称
   * @param alias 会员等级级别
   * @param color 会员等级识别色
   * @param point 会员等级基础积分
   * @param money 会员等级奖金
   * @param maxMoney 会员等级封顶奖金
   * @param order 排序编号
   */
  levelUpdata(
    id,
    name, alias, color, point,
    money, maxMoney, order
  ) {
    // 存入的数据
    const data = {
      'id': id,
      'name': name,
      'alias': alias,
      'basePoints': point,
      'baseMoney': money,
      'color': color,
      'maxBonus': maxMoney,
      'order': order,
    };
    // 访问添加会员等级的service
    this.management.levelUpdataService(data)
      .subscribe((response: any) => {
        if (response.code = 200 || response.ok) {
          alert('修改成功');
          this.router.navigateByUrl('/admin/level');
        } else {
          alert(response.message);
          return false;
        }
      });
  }

  /**
   * 重置事件
   */
  reset() {
    $('input[type="text"]').prop('value', '');
  }

}
