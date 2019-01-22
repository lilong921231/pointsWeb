import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPointRoutingModule } from './user-point-routing.module';
import {UserCommonModule} from '../../user-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserPointRoutingModule,
    UserCommonModule
  ]
})
export class UserPointModule { }
