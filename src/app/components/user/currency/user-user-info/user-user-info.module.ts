import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserUserInfoRoutingModule } from './user-user-info-routing.module';
import {UserCommonModule} from '../../user-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserUserInfoRoutingModule,
    UserCommonModule
  ]
})
export class UserUserInfoModule { }
