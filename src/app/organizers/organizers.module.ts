import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrganizersPageRoutingModule } from './organizers-routing.module';

import { OrganizersPage } from './organizers.page';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    OrganizersPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [OrganizersPage]
})
export class OrganizersPageModule { }
