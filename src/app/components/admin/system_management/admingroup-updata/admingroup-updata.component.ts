import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../../services/management.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-admingroup-updata',
  templateUrl: './admingroup-updata.component.html',
  styleUrls: ['./admingroup-updata.component.css']
})
export class AdmingroupUpdataComponent implements OnInit {

  groupData: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private management: ManagementService
  ) { }

  ngOnInit() {
    this.admingroupId();
  }

  /**
   * 显示id信息
   */
  admingroupId() {
    const admingroupId = this.route.snapshot.paramMap.get('id');
    this.management.admingroupInfoId(admingroupId)
      .subscribe((response: any) => {
      if (response.code === 200 || response.ok) {
        this.groupData = response;
      } else {
        this.management.managementCode(response.code, response);
        return false;
      }
      });
  }

  /**
   * 修改管理校色
   * @param id 会员等级id
   * @param name 会员等级名称
   * @param description 会员等级级别
   */
  admingroupUpdataId(
    id, name, description) {
    // 存入的数据
    const data = {
      'id': id,
      'name': name,
      'description': description,
    };
    // 访问修改管理角色的service
    this.management.admingroupUpdata(data)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          alert('修改成功');
          this.router.navigateByUrl('/admin/admingroup');
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
    $('input[type="text"]').prop('value', '');
  }
}
