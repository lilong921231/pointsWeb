import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';

@Component({
  selector: 'app-tb-index-updata',
  templateUrl: './tb-index-updata.component.html',
  styleUrls: ['./tb-index-updata.component.css']
})
export class TbIndexUpdataComponent implements OnInit {

  constructor(
    private currency: CurrencyService
  ) { }

  ngOnInit() {

  }

}
