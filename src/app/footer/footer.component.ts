import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

	constructor(public router: Router,
		public navCtrl: NavController,
		public translate: TranslateService) { }

	ngOnInit() { }

	navContact(): void {
		this.navCtrl.navigateForward('/contact', { animated: false });
	}

	navPrivacyPolicy(): void {
		this.navCtrl.navigateForward('/privacy-policy', { animated: false });
	}

	navTerms(): void {
		this.navCtrl.navigateForward('/terms', { animated: false });
	}
}
