import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router
  ) {}
  title = 'Sqshtb';

  ngOnInit() {

    console.log(location.href);


    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
      if (location.href === 'http;//wwww.sqshtb.com/iphone') {


        this.router.navigate(['/iphone']); // 跳转到用户首页界面
      } else if (location.href === 'http;//www.sqshtb.com/iphone/admin') {


        this.router.navigate(['/iphone/admin']);
      }
      alert('手机端');
    } else {
      // pc端
      if (location.href === 'http://localhost:4200/') {

        this.router.navigate(['']); // 跳转到用户首页界面
      } else if (location.href === 'http://localhost:4200/admin') {

        this.router.navigate(['/admin']);
      }


     /* if (location.href === 'http;//wwww.sqshtb.com') {
        this.router.navigate(['']); // 跳转到用户首页界面
      } else if (location.href === 'http;//www.sqshtb.com/admin') {
        this.router.navigate(['/admin']);
      }*/
    }
  }
}
