import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleEntryPage } from './single-entry.page';

const routes: Routes = [
	{
		path: '',
		component: SingleEntryPage
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SingleEntryPageRoutingModule { }
