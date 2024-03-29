import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-guide',
	templateUrl: './guide.component.html',
	styleUrls: ['./guide.component.scss'],
})
export class GuideComponent implements OnInit {

	public mobile = true;
	public tablet = true;

	constructor(public breakpointObserver: BreakpointObserver,
		public breakpoints: BreakpointsService,
		public navCtrl: NavController,
		public transate: TranslateService) { }

	ngOnInit() {
		this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
			this.mobile = (result.matches) ? true : false;
		});
		this.breakpointObserver.observe(this.breakpoints.tablet).subscribe(result => {
			this.tablet = (result.matches) ? true : false;
		});
	}

	navigateToParticipateGuide(): void {
		this.navCtrl.navigateForward('/participate/guide', { animated: false });
	}

	navigateToParticipateRules(): void {
		this.navCtrl.navigateForward('/participate/rules', { animated: false });
	}

}
