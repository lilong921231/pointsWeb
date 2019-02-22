import { Component, OnInit } from '@angular/core';
import { FinancialService } from '../../services/financial.service';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  styleUrls: ['./point.component.css']
})
export class PointComponent implements OnInit {

  data: any;
  systemRatio: any;
  date: Date;
  constructor(
    private financial: FinancialService,
  ) { }

  ngOnInit() {
    this.pointBalance();
    this.date = new Date();
  }
  setRatio(value) {
    window.localStorage.ratio = value;
  }
  getRatio() {
    return window.localStorage.ratio;
  }

  /**
   * 显示总积分和权重比例
   */
  pointBalance() {
    this.financial.pointBalance()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.data = response;
          this.systemRatio = this.data.data['systemRatio'];
          this.setRatio(this.systemRatio);
        } else {
          if (response.code === 706) {
            this.systemRatio = 0.01;
          } else {
            this.financial.financialCode(response.code, response);
            return false;
          }
        }
      });
  }

  // 传入的参数形式有问题
  /**
   * 结算总积分和个人积分
   */
  checkPoint() {
    alert('结算中。点击确定后，请稍等，不要离开页面');
    const ratio = '?systemRatio=' + this.getRatio();
    this.financial.pointSystemRatio(ratio)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          alert('结算成功');
        } else {
          // 返回error信息
          this.financial.financialCode(response.code, response);
          return false;
        }
      });
  }
}
