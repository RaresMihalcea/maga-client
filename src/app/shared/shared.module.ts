import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { CardPopoverComponent } from '../card-popover/card-popover.component';
import { FancyCardComponent } from '../fancy-card/fancy-card.component';
import { FooterComponent } from '../footer/footer.component';
import { MapComponent } from '../map/map.component';

@NgModule({
    declarations: [
        NavbarComponent,
        CardPopoverComponent,
        FancyCardComponent,
        FooterComponent,
        MapComponent,
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        NavbarComponent,
        CardPopoverComponent,
        FancyCardComponent,
        FooterComponent,
        MapComponent,
    ]
})
export class SharedModule { }
