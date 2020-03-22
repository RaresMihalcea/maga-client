import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ContactPage } from './contact.page';
import { SharedModule } from '../shared/shared.module';
import { MapComponent } from '../map/map.component';

const routes: Routes = [
    {
        path: '',
        component: ContactPage
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
    declarations: [ContactPage,
    MapComponent,
]
})
export class ContactPageModule { }
