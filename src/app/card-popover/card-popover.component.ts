import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
	selector: 'app-card-popover',
	templateUrl: './card-popover.component.html',
	styleUrls: ['./card-popover.component.scss'],
})
export class CardPopoverComponent implements OnInit {

	constructor(public popoverController: PopoverController) {
	}

	ngOnInit() { }

}
