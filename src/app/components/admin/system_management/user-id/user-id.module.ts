import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserIdRoutingModule } from './user-id-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserIdRoutingModule,
    AdminCommonModule
  ]
})
export class UserIdModule { }
