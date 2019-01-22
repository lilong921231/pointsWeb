import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMainRoutingModule } from './user-main-routing.module';
import {UserCommonModule} from '../../user-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserMainRoutingModule,
    UserCommonModule
  ]
})
export class UserMainModule { }
