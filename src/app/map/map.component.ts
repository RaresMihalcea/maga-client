import { Component, AfterViewInit, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
	selector: 'app-map',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
	@ViewChild('mapContainer', { static: false }) gmap: ElementRef;
	map: google.maps.Map;
	lat = 44.499943;
	lng = 28.077157;
	coordinates = new google.maps.LatLng(this.lat, this.lng);
	mapOptions: google.maps.MapOptions = {
		center: this.coordinates,
		styles:
			[
				{
					"featureType": "administrative",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"color": "#444444"
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"color": "#f2f2f2"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"saturation": -100
						},
						{
							"lightness": 45
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "simplified"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"color": "#CEDBF7"
						},
						{
							"visibility": "on"
						}
					]
				}
			],
		zoom: 15,
	};
	marker = new google.maps.Marker({
		position: this.coordinates,
		map: this.map,
	});

	mapInitializer() {
		this.map = new google.maps.Map(this.gmap.nativeElement,
			this.mapOptions);
		this.marker.setMap(this.map);

	}

	initMap() {
		console.log('hello')
	}

	constructor() { }

	ngOnInit() { }

	ngAfterViewInit() {
		this.mapInitializer();
	}

}
