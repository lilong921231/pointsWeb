import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminUpdataRoutingModule } from './admin-updata-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminUpdataRoutingModule,
    AdminCommonModule
  ]
})
export class AdminUpdataModule { }
