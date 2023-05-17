import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GuestsPage } from './guests.page';
import { SharedModule } from '../shared/shared.module';
import { CardPopoverComponent } from '../card-popover/card-popover.component';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
    {
        path: '',
        component: GuestsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        RouterModule.forChild(routes),
        TranslateModule.forChild()
    ],
    declarations: [
        GuestsPage,
    ],
    entryComponents: [CardPopoverComponent]
})
export class GuestsPageModule { }
