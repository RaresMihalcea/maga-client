import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyEmailAddressPageRoutingModule } from './verify-email-address-routing.module';

import { VerifyEmailAddressPage } from './verify-email-address.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    VerifyEmailAddressPageRoutingModule
  ],
  declarations: [VerifyEmailAddressPage]
})
export class VerifyEmailAddressPageModule {}
