import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BreakpointsService } from '../services/breakpoints.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-presentation',
	templateUrl: './presentation.component.html',
	styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {


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

	navCourses(): void {
		this.navCtrl.navigateForward('/courses', { animated: false });
	}

}
