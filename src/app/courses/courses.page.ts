import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { Course } from '../models/course';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ActiveYearService } from '../services/active-year.service';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.page.html',
    styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

	public mobile = true;
	public tablet = true;

	courses: Course[] = [];
	activeYear: number;
	defaultYear: number;

	constructor(public breakpointObserver: BreakpointObserver,
		public breakpoints: BreakpointsService,
		public firestore: AngularFirestore,
		public activeYearService: ActiveYearService,
		public navCtrl: NavController) {}

	ngOnInit() {
		this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
			this.mobile = (result.matches) ? true : false;
		});
		this.breakpointObserver.observe(this.breakpoints.tablet).subscribe(result => {
			this.tablet = (result.matches) ? true : false;
		});

		this.defaultYear = this.activeYearService.getDefaultActiveYear();
		this.activeYear = this.defaultYear;
		this.fetchData()
	}

	async fetchData() {
		const courseQuery = await this.firestore.collection('courses').valueChanges({idField: 'id'})
		courseQuery.subscribe(data => { 
			data.map(el => this.courses.push(el as Course)) 
		})
	} 

	changeActiveYear(activeYear: number) {
		this.activeYear = activeYear
		console.log(this.activeYear)
	}

	filter(courses: Course[], category: string): Course[] {
		let result: Course[] = []

		courses.forEach(course => {
			if(course.year == this.activeYear && course.category == category) {
				result.push(course)
			}
		})

		return result
	}

	navToSingleEntry(course) {
		console.log(course)
		this.navCtrl.navigateForward(`/single-entry?type=courses&id=${course.id}`, {animated: false});
	}

}
