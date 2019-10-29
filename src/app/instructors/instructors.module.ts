import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { InstructorsPage } from './instructors.page';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: InstructorsPage
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
    declarations: [InstructorsPage]
})
export class InstructorsPageModule { }
