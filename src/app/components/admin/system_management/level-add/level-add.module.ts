import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelAddRoutingModule } from './level-add-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LevelAddRoutingModule,
    AdminCommonModule
  ]
})
export class LevelAddModule { }
