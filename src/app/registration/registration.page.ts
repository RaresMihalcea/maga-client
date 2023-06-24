import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import 'firebase/auth';
import { AuthService } from '../services/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.page.html',
	styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

	public mobile = true;
	public tablet = true;

	public email: string;
	public password: string;
	public confirmPassword: string;
	public displayError: boolean = false;
	public displayPasswordsDontMatchError: boolean = false;

	constructor(public breakpointObserver: BreakpointObserver,
		public breakpoints: BreakpointsService,
		public router: Router,
		public navCtrl: NavController,
		public authService: AuthService,
		public translate: TranslateService) { }

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

	navTerms(): void {
		this.navCtrl.navigateForward('/terms', { animated: false });
	}

	emailRegistrationHandler(): void {
		
		if(this.password !== this.confirmPassword) {
			this.displayPasswordsDontMatchError = true; 
		} else {
			if (this.authService.validateRegistrationInput(this.email, this.password, this.confirmPassword)) {
				this.authService.registerWithEmailAndPassword(this.email, this.password);
			} else {
				this.displayError = true;
			}
		}
	}

	googleRegistrationHandler(): void {
		this.authService.loginWithGoogle();
	}

	facebookRegistrationHandler(): void {
		this.authService.loginWithFacebook();
	}

}
