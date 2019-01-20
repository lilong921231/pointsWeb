import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule, HashLocationStrategy , LocationStrategy } from '@angular/common';
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
    AppRoutingModule,
    UserCommonModule, // 引入user端公共module模块
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
