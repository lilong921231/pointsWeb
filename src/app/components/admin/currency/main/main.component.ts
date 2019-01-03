import { Component, OnInit } from '@angular/core';
import {CurrencyService} from "../../services/currency.service";
import {HttpService} from "../../../../common/service/http.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  newData: any;
  constructor(
    private currency: CurrencyService,
  ) { }

  ngOnInit() {
    this.newInfo();
  }

  /**
   * 显示首页
   */
  newInfo() {
    this.currency.newService()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.newData = response;
          console.log(response);
        } else {
          alert(response.message);
          return false;
        }
      })
  }
}
