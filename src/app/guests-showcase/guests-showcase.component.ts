import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-guests-showcase',
	templateUrl: './guests-showcase.component.html',
	styleUrls: ['./guests-showcase.component.scss'],
})
export class GuestsShowcaseComponent implements OnInit {

	public mobile = true;
	public tablet = true;

	constructor(public breakpointObserver: BreakpointObserver,
		public breakpoints: BreakpointsService,
		public navCtrl: NavController,
		public translate: TranslateService) { }

	ngOnInit() {
		this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
			this.mobile = (result.matches) ? true : false;
		});
		this.breakpointObserver.observe(this.breakpoints.tablet).subscribe(result => {
			this.tablet = (result.matches) ? true : false;
		});
	}

	navGuests(): void {
		this.navCtrl.navigateForward('/guests', { animated: false });
	}

}
