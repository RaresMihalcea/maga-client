import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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

	navRegistration(): void {
		this.navCtrl.navigateForward('/registration', { animated: false });
	}

	navForgot(): void {
		this.navCtrl.navigateForward('/forgot', { animated: false });
	}

    pass_forgot() {
        console.log('parola uiata');
    }
    Sign_In() {
        console.log('want to sign in');
    }
}
