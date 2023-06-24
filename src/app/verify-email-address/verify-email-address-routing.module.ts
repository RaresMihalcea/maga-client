import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerifyEmailAddressPage } from './verify-email-address.page';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  {
    path: '',
    component: VerifyEmailAddressPage
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    TranslateModule.forChild()
  ],
  exports: [RouterModule],
})
export class VerifyEmailAddressPageRoutingModule {}
