import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserMessageInfoRoutingModule } from './user-message-info-routing.module';
import {UserCommonModule} from '../../user-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserMessageInfoRoutingModule,
    UserCommonModule
  ]
})
export class UserMessageInfoModule { }
