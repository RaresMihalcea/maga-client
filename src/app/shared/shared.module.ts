import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { CardPopoverComponent } from '../card-popover/card-popover.component';

@NgModule({
    declarations: [
        NavbarComponent,
        CardPopoverComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        NavbarComponent,
        CardPopoverComponent
    ]
})
export class SharedModule { }
