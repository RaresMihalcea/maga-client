import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import 'firebase/auth';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.page.html',
	styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

	public mobile = true;
	public tablet = true;

	private email: string;
	private password: string;
	private confirmPassword: string;
	private displayError: boolean = false;

	constructor(public breakpointObserver: BreakpointObserver,
		public breakpoints: BreakpointsService,
		public router: Router,
		public navCtrl: NavController,
		public authService: AuthService) { }

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

	emailRegistrationHandler(): void {
		if(this.authService.validateRegistrationInput(this.email, this.password, this.confirmPassword)) {
			this.authService.registerWithEmailAndPassword(this.email, this.password);
		} else {
			this.displayError = true;
		}
	}

	googleRegistrationHandler(): void {
		this.authService.loginWithGoogle();
	}

	facebookRegistrationHandler(): void {
		this.authService.loginWithFacebook();
	}

}
