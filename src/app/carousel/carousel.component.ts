import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

	imageObject: Array<object> = [{
		image: 'assets/gallery/Atlantykron-48.jpg',
		thumbImage: 'assets/gallery/Atlantykron-48.jpg',
		alt: 'alt of image',
	}, 
	{
		image: 'assets/gallery/Atlantykron-63.jpg',
		thumbImage: 'assets/gallery/Atlantykron-63.jpg',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/Atlantykron-65.jpg',
		thumbImage: 'assets/gallery/Atlantykron-65.jpg',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/Atlantykron-92.jpg',
		thumbImage: 'assets/gallery/Atlantykron-92.jpg',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/Atlantykron-145.jpg',
		thumbImage: 'assets/gallery/Atlantykron-145.jpg',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/Atlantykron-481.jpg',
		thumbImage: 'assets/gallery/Atlantykron-481.jpg',
		alt: 'alt of image',
	},
	];

	constructor() { }

	ngOnInit() { }


}
