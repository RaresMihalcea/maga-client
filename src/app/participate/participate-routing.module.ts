import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipatePage } from './participate.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipatePageRoutingModule {}
