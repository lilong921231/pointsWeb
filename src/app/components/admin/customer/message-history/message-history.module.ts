import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageHistoryRoutingModule } from './message-history-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MessageHistoryRoutingModule,
    AdminCommonModule
  ]
})
export class MessageHistoryModule { }
