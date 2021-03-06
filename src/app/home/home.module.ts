import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';

import { HomePage } from './home.page';
import { HeroComponent } from '../hero/hero.component';
import { SharedModule } from '../shared/shared.module';
import { PresentationComponent } from '../presentation/presentation.component';
import { InvitedShowcaseComponent } from '../invited-showcase/invited-showcase.component';
import { GuideComponent } from '../guide/guide.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { MapComponent } from '../map/map.component';
import { SponsorsShowcaseComponent } from '../sponsors-showcase/sponsors-showcase.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    declarations: [
        HomePage,
        HeroComponent,
        PresentationComponent,
        InvitedShowcaseComponent,
        GuideComponent,
        CarouselComponent,
        MapComponent,
        SponsorsShowcaseComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HttpClientModule,
        SharedModule,
        TranslateModule.forChild(),
        RouterModule.forChild([
            {
                path: '',
                component: HomePage
            }
        ]),
        NgImageSliderModule
    ],
    providers: [HTTP]
})
export class HomePageModule { }
