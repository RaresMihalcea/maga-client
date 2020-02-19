import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
	selector: 'app-fancy-card',
	templateUrl: './fancy-card.component.html',
	styleUrls: ['./fancy-card.component.scss'],
})
export class FancyCardComponent implements OnInit {

	@HostBinding("style.--background-img")

	@Input()
	image: string;
	@Input()
	name: string;
	@Input()
	title: string;

	constructor() { }

	ngOnInit() { }

}
