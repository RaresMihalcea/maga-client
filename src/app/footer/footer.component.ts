import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

	constructor(public router: Router,
		public navCtrl: NavController) { }

	ngOnInit() { }

	navContact(): void {
		this.navCtrl.navigateForward('/contact', {animated: false});
	}



}
