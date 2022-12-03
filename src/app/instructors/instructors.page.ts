import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Instructor } from '../models/instructor';
import { ActiveYearService } from '../services/active-year.service';
import { BreakpointsService } from '../services/breakpoints.service';

@Component({
    selector: 'app-instructors',
    templateUrl: './instructors.page.html',
    styleUrls: ['./instructors.page.scss'],
})
export class InstructorsPage implements OnInit {

    public mobile = true;
	public tablet = true;

	isLoading: boolean = true;

	instructors: Instructor[] = [];
	activeYear: number;
	defaultYear: number;
    alreadyFetchedYears: number[] = [];
	alreadyFetchedInstructors: Set<string> = new Set();

    constructor(public breakpointObserver: BreakpointObserver,
		public breakpoints: BreakpointsService,
		public firestore: AngularFirestore,
		public activeYearService: ActiveYearService,
		public navCtrl: NavController) { }

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
		if(!this.alreadyFetchedYears.includes(this.activeYear)) {
			this.isLoading = true;
			const instructorQuery = this.firestore.collection('instructors').ref.where("years", 'array-contains', this.activeYear)

			await instructorQuery.get().then(data => { 
				data.forEach(doc => {
					const fetchedInstructor: Instructor = doc.data() as Instructor;
					fetchedInstructor.id = doc.id
					if(!this.alreadyFetchedInstructors.has(fetchedInstructor.id)) {
						this.instructors.push(fetchedInstructor)
						this.alreadyFetchedInstructors.add(fetchedInstructor.id)
					}
				})
				this.isLoading = false;
			})

			this.alreadyFetchedYears.push(this.activeYear)
		}
	} 

    changeActiveYear(activeYear: number) {
		this.activeYear = activeYear
		this.fetchData();
		console.log(this.activeYear)
	}

	filter(instructors: Instructor[]): Instructor[] {
		let result: Instructor[] = []

		instructors.forEach(instructor => {
			if(instructor.years.includes(this.activeYear)) {
				result.push(instructor)
			}
		})

		return result
	}

	navToSingleEntry(instructor) {
		this.navCtrl.navigateForward(`/single-entry?type=instructors&id=${instructor.id}`, {animated: false});
	}

}
