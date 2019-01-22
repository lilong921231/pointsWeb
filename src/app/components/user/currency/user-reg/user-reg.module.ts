import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRegRoutingModule } from './user-reg-routing.module';
import {UserCommonModule} from '../../user-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRegRoutingModule,
    UserCommonModule
  ]
})
export class UserRegModule { }
