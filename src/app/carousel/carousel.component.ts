import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

	imageObject: Array<object> = [{
		image: 'assets/images/avatar.png',
		thumbImage: 'assets/images/avatar.png',
		alt: 'alt of image',
		title: 'title of image'
	}, {
		image: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
		thumbImage: '.../iOe/xHHf4nf8AE75h3j1x64ZmZ//Z==', // Support base64 image
		title: 'Image title', //Optional: You can use this key if want to show image with title
		alt: 'Image alt' //Optional: You can use this key if want to show image with alt
	}
	];

	constructor() { }

	ngOnInit() { }


}
