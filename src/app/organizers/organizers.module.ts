import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizersPageRoutingModule } from './organizers-routing.module';

import { OrganizersPage } from './organizers.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    OrganizersPageRoutingModule
  ],
  declarations: [OrganizersPage]
})
export class OrganizersPageModule {}
