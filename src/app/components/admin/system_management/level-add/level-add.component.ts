import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';
import * as $ from 'jquery';
import {Router} from '@angular/router';

@Component({
  selector: 'app-level-add',
  templateUrl: './level-add.component.html',
  styleUrls: ['./level-add.component.css']
})
export class LevelAddComponent implements OnInit {

  constructor(
    private router: Router,
    private management: ManagementService
  ) { }

  ngOnInit() {
  }

  /**
   * 添加会员等级
   * @param name 会员等级名称
   * @param alias 会员等级级别
   * @param color 会员等级识别色
   * @param point 会员等级基础积分
   * @param money 会员等级奖金
   * @param maxMoney 会员等级封顶奖金
   * @param order 排序编号
   */
  levelAdd(
    name, alias, color, point,
    money, maxMoney, order
  ) {
    // 存入的数据
    const data = {
      'name': name,
      'alias': alias,
      'basePoints': point,
      'baseMoney': money,
      'color': color,
      'maxBonus': maxMoney,
      'order': order,
    };
    // 访问添加会员等级的service
    this.management.levelAddService(data)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        alert('添加成功');
        this.router.navigateByUrl('/admin/level');
      } else {
        this.management.managementCode(response.code, response);
        return false;
      }
      });
  }

  /**
   * 重置事件
   */
  reset() {
    //  密码
    $('input[type="text"]').prop('value', '');
  }
}
