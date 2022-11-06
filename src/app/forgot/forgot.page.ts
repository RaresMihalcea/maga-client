import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
	selector: 'app-forgot',
	templateUrl: './forgot.page.html',
	styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

	public mobile = true;
	public tablet = true;
	private email: string;
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

	forgotEmail() {
		if(this.authService.validateEmail(this.email)) {
			this.authService.forgotPassword(this.email)
		} else {
			this.displayError = true;
		}
	}
}
