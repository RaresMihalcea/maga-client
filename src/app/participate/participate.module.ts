import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipatePageRoutingModule } from './participate-routing.module';

import { ParticipatePage } from './participate.page';
import { SharedModule } from '../shared/shared.module';
import { SegmentFormComponent } from './segment-form/segment-form.component';
import { SegmentGuideComponent } from './segment-guide/segment-guide.component';
import { SegmentRulesComponent } from './segment-rules/segment-rules.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ParticipatePageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [
    ParticipatePage,
    SegmentGuideComponent,
    SegmentRulesComponent,
    SegmentFormComponent
  ]
})
export class ParticipatePageModule { }
