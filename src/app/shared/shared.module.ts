import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { CardPopoverComponent } from '../card-popover/card-popover.component';
import { FancyCardComponent } from '../fancy-card/fancy-card.component';
import { FooterComponent } from '../footer/footer.component';
<<<<<<< HEAD
import { MapComponent } from '../map/map.component';
=======
import { FormsModule } from '@angular/forms';
// import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
>>>>>>> master

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
        IonicModule,
        FormsModule,
        HttpClientModule,
        // TranslateModule.forChild()
    ],
    exports: [
        NavbarComponent,
        CardPopoverComponent,
        FancyCardComponent,
<<<<<<< HEAD
        FooterComponent,
        MapComponent,
    ]
=======
        FooterComponent
    ],
    providers: []
>>>>>>> master
})
export class SharedModule { }
