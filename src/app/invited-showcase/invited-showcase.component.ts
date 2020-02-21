import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-invited-showcase',
	templateUrl: './invited-showcase.component.html',
	styleUrls: ['./invited-showcase.component.scss'],
})
export class InvitedShowcaseComponent implements OnInit {

	public mobile = true;
	public tablet = true;

	constructor(public breakpointObserver: BreakpointObserver,
		public breakpoints: BreakpointsService,
		public navCtrl: NavController) { }

	ngOnInit() {
		this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
			this.mobile = (result.matches) ? true : false;
		});
		this.breakpointObserver.observe(this.breakpoints.tablet).subscribe(result => {
			this.tablet = (result.matches) ? true : false;
		});
	}

	navInvitations(): void {
		this.navCtrl.navigateForward('/invitations', { animated: false });
	}

}
