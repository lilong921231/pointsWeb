import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap';
import { AdminCommonModule } from './admin-common.module';

/**
 * @desc admin懒加载module模块
 * @author lilong
 * @date 2019-1-18
 */

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    AdminCommonModule, // 引入admin端公共module模块
  ],
})
export class AdminModule { }
