import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewinfoUpdataRoutingModule } from './newinfo-updata-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NewinfoUpdataRoutingModule,
    AdminCommonModule
  ]
})
export class NewinfoUpdataModule { }
