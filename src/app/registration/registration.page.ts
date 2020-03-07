import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.page.html',
	styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

	public mobile = true;
	public tablet = true;

	constructor(public breakpointObserver: BreakpointObserver,
		public breakpoints: BreakpointsService,
		public router: Router,
		public navCtrl: NavController) { }

	ngOnInit() {
		this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
			this.mobile = (result.matches) ? true : false;
		});
		this.breakpointObserver.observe(this.breakpoints.tablet).subscribe(result => {
			this.tablet = (result.matches) ? true : false;
		});
	}

	navLogin(): void {
		this.navCtrl.navigateForward('/login', { animated: false });
	}

	navForgot(): void {
		this.navCtrl.navigateForward('/forgot', { animated: false });
	}

}
