import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMessageRoutingModule } from './user-message-routing.module';
import {UserCommonModule} from '../../user-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserCommonModule,
    UserMessageRoutingModule
  ]
})
export class UserMessageModule { }
