import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LevelUpdataRoutingModule } from './level-updata-routing.module';
import {AdminCommonModule} from '../../admin-common.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LevelUpdataRoutingModule,
    AdminCommonModule
  ]
})
export class LevelUpdataModule { }
