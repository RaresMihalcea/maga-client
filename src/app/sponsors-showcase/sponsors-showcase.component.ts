import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-sponsors-showcase',
	templateUrl: './sponsors-showcase.component.html',
	styleUrls: ['./sponsors-showcase.component.scss'],
})
export class SponsorsShowcaseComponent implements OnInit {

	constructor(public translate: TranslateService) { }

	ngOnInit() { }

}
