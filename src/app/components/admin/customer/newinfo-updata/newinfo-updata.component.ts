import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-newinfo-updata',
  templateUrl: './newinfo-updata.component.html',
  styleUrls: ['./newinfo-updata.component.css']
})
export class NewinfoUpdataComponent implements OnInit {

  newUpdataData: any;
  constructor(
    private customer: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.newinfoUpdata();
  }

  newinfoUpdata() {
    const newid = this.route.snapshot.paramMap.get('id');
    this.customer.newIdService(newid)
      .subscribe((response: any) => {
        if (response.code === 200 || response.ok) {
          this.newUpdataData = response;
          console.log(response);
        } else {
          alert(response.message);
          return false;
        }
      })
  }
}
