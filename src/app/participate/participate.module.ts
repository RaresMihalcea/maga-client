import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipatePageRoutingModule } from './participate-routing.module';

import { ParticipatePage } from './participate.page';
import { SharedModule } from '../shared/shared.module';
import { SegmentFormComponent } from './segment-form/segment-form.component';
import { SegmentGuideComponent } from './segment-guide/segment-guide.component';
import { SegmentLoginComponent } from './segment-login/segment-login.component';
import { SegmentRulesComponent } from './segment-rules/segment-rules.component';
import { SegmentParticipantsComponent } from './segment-participants/segment-participants.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ParticipatePageRoutingModule
  ],
  declarations: [
    ParticipatePage,
    SegmentLoginComponent,
    SegmentGuideComponent,
    SegmentRulesComponent,
    SegmentFormComponent,
    SegmentParticipantsComponent
  ]
})
export class ParticipatePageModule {}
