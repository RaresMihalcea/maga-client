import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InvitationsPage } from './invitations.page';
import { SharedModule } from '../shared/shared.module';
import { CardPopoverComponent } from '../card-popover/card-popover.component';

const routes: Routes = [
    {
        path: '',
        component: InvitationsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        InvitationsPage,
    ],
    entryComponents: [CardPopoverComponent]
})
export class InvitationsPageModule { }
