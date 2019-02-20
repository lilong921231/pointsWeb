import {BrowserModule, BrowserTransferStateModule} from '@angular/platform-browser';
import {APP_ID, Inject, NgModule, PLATFORM_ID} from '@angular/core';
import { AppComponent } from './app.component';
import {CommonModule, HashLocationStrategy, isPlatformBrowser, LocationStrategy} from '@angular/common';
import {UserCommonModule} from './components/user/user-common.module';
import {PaginationModule} from 'ngx-bootstrap';
import {AppRoutingModule} from './app-routing.module';

/**
 * @author lilong 2018-12-23
 * 添加组件模块
 */
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    BrowserModule,
    // TransferHttpCacheModule,
    // BrowserTransferStateModule,
    AppRoutingModule,
    UserCommonModule, // 引入user端公共module模块
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
/*  constructor(@Inject(PLATFORM_ID) private platformId: Object,
              @Inject(APP_ID) private appId: string) {

    // 判断运行环境为客户端还是服务端
    const platform = isPlatformBrowser(platformId) ? 'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }*/
}
