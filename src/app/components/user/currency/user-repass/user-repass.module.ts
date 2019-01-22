import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRepassRoutingModule } from './user-repass-routing.module';
import {UserCommonModule} from '../../user-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRepassRoutingModule,
    UserCommonModule
  ]
})
export class UserRepassModule { }
