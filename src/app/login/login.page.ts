import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	public mobile = true;
	public tablet = true;
	public email: string;
	public password: string;
	public displayError: boolean = false;
	

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

		this.authService.getPublishError().subscribe((error) => {
			if(error) {
				this.displayError = true;
			} else {
				this.displayError = false;
			}
		});
	}

	navRegistration(): void {
		this.navCtrl.navigateForward('/registration', { animated: false });
	}

	navForgot(): void {
		this.navCtrl.navigateForward('/forgot', { animated: false });
	}

	emailAndPasswordLoginHandler(): void {
		if(this.authService.validateLoginInput(this.email, this.password)) {
			this.authService.loginWithEmailAndPassword(this.email, this.password)
		} else {
			this.displayError = true;
		}
	}

	googleLoginHandler(): void {
		this.authService.loginWithGoogle()
	}

	facebookLoginHandler(): void {
		this.authService.loginWithFacebook()
	}

}
