import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {

	imageObject: Array<object> = [
	{
		image: 'assets/gallery/1.jpg',
		thumbImage: 'assets/gallery/1.jpg',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/2.jpg',
		thumbImage: 'assets/gallery/2.jpg',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/4.jpg',
		thumbImage: 'assets/gallery/4.jpg',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/5.jpg',
		thumbImage: 'assets/gallery/5.jpg',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/6.jpg',
		thumbImage: 'assets/gallery/6.jpg',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/7.jpg',
		thumbImage: 'assets/gallery/7.jpg',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/8.jpg',
		thumbImage: 'assets/gallery/8.jpg',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/9.jpg',
		thumbImage: 'assets/gallery/9.jpg',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/10.jpg',
		thumbImage: 'assets/gallery/10.jpg',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/11.jpg',
		thumbImage: 'assets/gallery/11.jpg',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/12.jpg',
		thumbImage: 'assets/gallery/12.jpg',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/13.jpg',
		thumbImage: 'assets/gallery/13.jpg',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/14.JPG',
		thumbImage: 'assets/gallery/14.JPG',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/15.JPG',
		thumbImage: 'assets/gallery/15.JPG',
		alt: 'alt of image',
	},
	{
		image: 'assets/gallery/16.JPG',
		thumbImage: 'assets/gallery/16.JPG',
		alt: 'alt of image',
	}
	];

	constructor(public translate: TranslateService) { }

	ngOnInit() { }


}
