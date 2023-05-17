import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleEntryPageRoutingModule } from './single-entry-routing.module';

import { SingleEntryPage } from './single-entry.page';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		SingleEntryPageRoutingModule,
		SharedModule,
		TranslateModule.forChild()
	],
	declarations: [SingleEntryPage]
})
export class SingleEntryPageModule { }
