import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tb-index-add',
  templateUrl: './tb-index-add.component.html',
  styleUrls: ['./tb-index-add.component.css'],
  providers: [DatePipe]
})
export class TbIndexAddComponent implements OnInit {

  date: any;

  constructor(
    private router: Router,
    private currency: CurrencyService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.date = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
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
  tbIndexAdd(
    publishTime,
    shOpenExponent, shCloseExponent, shMaxExponent, shMinExponent,
    tbOpenExponent, tbCloseExponent, tbMaxExponent, tbMinExponent
  ) {
    // 传入参数的数据
    const tbAddData = {
      'publishTime': publishTime,
      'shOpenExponent': shOpenExponent,
      'shCloseExponent': shCloseExponent,
      'shMaxExponent': shMaxExponent,
      'shMinExponent': shMinExponent,
      'tbOpenExponent': tbOpenExponent,
      'tbCloseExponent': tbCloseExponent,
      'tbMaxExponent': tbMaxExponent,
      'tbMinExponent': tbMinExponent,
    };
    return this.currency.tbIndexAddService(tbAddData)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        alert('添加成功');
        this.router.navigateByUrl('/admin/tb-index');
      } else {
        alert(response.message);
        return false;
      }
      });
  }
}
