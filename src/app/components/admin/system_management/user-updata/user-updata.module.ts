import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserUpdataRoutingModule } from './user-updata-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserUpdataRoutingModule,
    AdminCommonModule
  ]
})
export class UserUpdataModule { }
