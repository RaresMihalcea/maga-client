import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipatePageRoutingModule } from './participate-routing.module';

import { ParticipatePage } from './participate.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    ParticipatePageRoutingModule
  ],
  declarations: [ParticipatePage]
})
export class ParticipatePageModule {}
