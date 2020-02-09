import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
	selector: 'app-presentation',
	templateUrl: './presentation.component.html',
	styleUrls: ['./presentation.component.scss'],
})
export class PresentationComponent implements OnInit {

	constructor(public navCtrl: NavController) { }

	ngOnInit() { }

	navCourses(): void {
		this.navCtrl.navigateForward('/courses', {animated: false});
	}

}
