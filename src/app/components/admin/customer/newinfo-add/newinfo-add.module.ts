import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewinfoAddRoutingModule } from './newinfo-add-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NewinfoAddRoutingModule,
    AdminCommonModule
  ]
})
export class NewinfoAddModule { }
