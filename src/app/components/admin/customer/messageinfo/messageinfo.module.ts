import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageinfoRoutingModule } from './messageinfo-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MessageinfoRoutingModule,
    AdminCommonModule
  ]
})
export class MessageinfoModule { }
