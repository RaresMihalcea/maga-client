import { Component, OnInit } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { Course } from '../models/course';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActiveYearService } from '../services/active-year.service';
import { NavController } from '@ionic/angular';
import { LocalizationService } from '../services/localization.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-courses',
	templateUrl: './courses.page.html',
	styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

	public mobile = true;
	public tablet = true;
	public language: string = this.localization.getLanguage();

	isLoading: boolean = true;

	courses: Course[] = [];
	activeYear: number;
	defaultYear: number;
	alreadyFetchedYears: number[] = []
	alreadyFetchedCourses: Set<string> = new Set();

	constructor(public breakpointObserver: BreakpointObserver,
		public breakpoints: BreakpointsService,
		public firestore: AngularFirestore,
		public activeYearService: ActiveYearService,
		public navCtrl: NavController,
		public localization: LocalizationService,
		public translate: TranslateService
	) { }

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

		this.localization.languageChange.subscribe(value => { this.language = value })
	}

	async fetchData() {
		if (!this.alreadyFetchedYears.includes(this.activeYear)) {
			this.isLoading = true;
			const courseQuery = this.firestore.collection('courses').ref.where("years", 'array-contains', this.activeYear)

			await courseQuery.get().then(data => {
				data.forEach(doc => {
					const fetchedCourse: Course = doc.data() as Course;
					fetchedCourse.id = doc.id
					if (!this.alreadyFetchedCourses.has(fetchedCourse.id)) {
						this.courses.push(fetchedCourse)
						this.alreadyFetchedCourses.add(fetchedCourse.id)
					}
				})
				this.isLoading = false;
			})

			this.alreadyFetchedYears.push(this.activeYear)
		}
	}

	changeActiveYear(activeYear: string) {
		this.activeYear = parseInt(activeYear)
		this.fetchData();
	}
	
	filter(courses: Course[], category: string): Course[] {
		let result: Course[] = []

		courses.forEach(course => {
			if (course.years.includes(this.activeYear) && course.category == category) {
				result.push(course)
			}
		})

		result.sort((a, b) => {
			if(a.priority > b.priority) return 1;
			if(a.priority <= b.priority) return -1;
		});

		return result
	}

	navToSingleEntry(course) {
		this.navCtrl.navigateForward(`/single-entry?type=courses&id=${course.id}`, { animated: false });
	}

}