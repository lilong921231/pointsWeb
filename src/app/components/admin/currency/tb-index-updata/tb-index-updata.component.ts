import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-tb-index-updata',
  templateUrl: './tb-index-updata.component.html',
  styleUrls: ['./tb-index-updata.component.css']
})
export class TbIndexUpdataComponent implements OnInit {

  updateDate: any;
  constructor(
    private currency: CurrencyService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.tbUpdataId();
  }

  /**
   * 查询id数据
   * 并跳转到修改页面
   */
  tbUpdataId() {
    const tbIndexId = this.route.snapshot.paramMap.get('id');
    this.currency.tbIndexIdService(tbIndexId)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.updateDate = response;
        } else {
          alert(response.message);
          return false;
        }
      });
  }


  /**
   * 添加天宝指数
   * @param publishTime 发布时间
   * @param shOpenExponent 上证开盘指数
   * @param shCloseExponent 上证收盘指数
   * @param shMaxExponent 上证最高指数
   * @param shMinExponent 上证最低指数
   * @param tbOpenExponent 天宝开盘指数
   * @param tbCloseExponent 天宝收盘指数
   * @param tbMaxExponent 天宝最高指数
   * @param tbMinExponent 天宝最低指数
   */
  tbIndexupdate(
    publishTime,
    shOpenExponent, shMaxExponent, shMinExponent, shCloseExponent,
    tbOpenExponent, tbMaxExponent, tbMinExponent, tbCloseExponent
  ) {
    const tbIndexId = this.route.snapshot.paramMap.get('id');
    // 传入参数的数据
    const tbUpdateData = {
      'id': tbIndexId,
      'publishTime': publishTime,
      'shOpenExponent': shOpenExponent,
      'shMaxExponent': shMaxExponent,
      'shMinExponent': shMinExponent,
      'shCloseExponent': shCloseExponent,
      'tbOpenExponent': tbOpenExponent,
      'tbMaxExponent': tbMaxExponent,
      'tbMinExponent': tbMinExponent,
      'tbCloseExponent': tbCloseExponent,
    };

    return this.currency.tbIndexUpdateService(tbUpdateData)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          alert('修改成功');
          this.router.navigateByUrl('/admin/tb-index');
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
