import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmRoutingModule } from './adm-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdmRoutingModule,
    AdminCommonModule
  ]
})
export class AdmModule { }
