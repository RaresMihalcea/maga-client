import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.page.html',
    styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

	public mobile = true;
	public tablet = true;
	private emailBody: string;
	private emailAddress: string;
	private displayError: boolean = false;
	private displayFailedApiReq = false;
	private displaySuccess: boolean = false;

	constructor(public breakpointObserver: BreakpointObserver,
		public breakpoints: BreakpointsService,
		public auth: AuthService,
		public api: ApiService) { }

	ngOnInit() {
		this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
			this.mobile = (result.matches) ? true : false;
		});
		this.breakpointObserver.observe(this.breakpoints.tablet).subscribe(result => {
			this.tablet = (result.matches) ? true : false;
		});
	}

	sendEmail() {
		if(this.auth.validateEmail(this.emailAddress) && this.emailBody.length > 0) {
			this.api.sendEmail(this.emailAddress.toLocaleLowerCase(), this.emailBody).then(sent => {
				if(sent) {
					this.displayError = false;
					this.displaySuccess = true;
				} else {
					this.displayError = true;
					this.displaySuccess = false;
				}
			})

		} else {
			this.displayError = true;
			this.displaySuccess = false;
		}
	}

}
