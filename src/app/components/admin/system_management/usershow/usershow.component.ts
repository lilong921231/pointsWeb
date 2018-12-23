import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagementService } from '../../services/management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usershow',
  templateUrl: './usershow.component.html',
  styleUrls: ['./usershow.component.css']
})
export class UsershowComponent implements OnInit {

  userData: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private management: ManagementService
  ) { }

  ngOnInit() {
    this.userIdInfo();
  }

  /**
   * 显示查询Id的信息
   */
  userIdInfo() {
    const userId = +this.route.snapshot.paramMap.get('id');
    this.management.userShowId(userId)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.userData = response;
        console.log(response);
      } else {
        alert(response.message);
        return false;
      }
      });
  }
  /**
   * 返回user页面
   */
  goUser() {
    this.router.navigateByUrl('/admin/user');
  }
}
