import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import {ManagementService} from '../../services/management.service';
import {HttpService} from '../../../../common/service/http.service';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  newData: any;
  adminData: any;
  constructor(
    private currency: CurrencyService,
    private management: ManagementService,
    private http: HttpService,
    private router: Router
  ) { }

  ngOnInit() {
    this.newInfo();
    this.adminInfo();
  }

  /**
   * 显示首页
   */
  newInfo() {
    this.currency.newService()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.newData = response.data;
        } else {
          if (response.code === 706) {
            const data = [{content: '暂无内容...'}];
            this.newData = data;
          } else {
            alert(response.message);
          }
            return ;
        }
      });
  }

  /**
   * 显示登陆信息
   */
  adminInfo() {
    this.management.adminInfo()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.adminData = response;
          this.http.setName(response.data.roleList[0].name);
        } else {
          if (response.message === '用户没有该访问权限') {
            return this.router.navigateByUrl('/admin');
          } else {
            alert(response.message);
            return ;
          }
        }
      });
  }
}
