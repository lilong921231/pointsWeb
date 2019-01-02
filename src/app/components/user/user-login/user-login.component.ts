import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserCommonService} from "../currency/user-common.service";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {


  code: any;

  constructor(
    private router: Router,
    private userCommon: UserCommonService
  ) { }

  ngOnInit() {
    this.generateInfo();
  }

  generateInfo() {
    this.userCommon.generateService()
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.code = response;
        } else {
          alert(response.message);
          return false;
        }
      })
  }

  mainSkip() {
    this.router.navigateByUrl('/main');
  }
}
