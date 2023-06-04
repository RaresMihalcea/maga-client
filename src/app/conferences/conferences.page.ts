import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Conference } from '../models/conference';
import { ActiveYearService } from '../services/active-year.service';
import { BreakpointsService } from '../services/breakpoints.service';
import { LocalizationService } from '../services/localization.service';

@Component({
	selector: 'app-conferences',
	templateUrl: './conferences.page.html',
	styleUrls: ['./conferences.page.scss'],
})
export class ConferencesPage implements OnInit {

	public mobile = true;
	public tablet = true;
	public language: string = this.localization.getLanguage();

	isLoading: boolean = true;

	conferences: Conference[] = [];
	activeYear: number;
	defaultYear: number;
	alreadyFetchedYears: number[] = []
	alreadyFetchedConferences: Set<string> = new Set();

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
			const conferenceQuery = this.firestore.collection('conferences').ref.where("years", 'array-contains', this.activeYear)

			await conferenceQuery.get().then(data => {
				data.forEach(doc => {
					const fetchedConference: Conference = doc.data() as Conference;
					fetchedConference.id = doc.id
					if (!this.alreadyFetchedConferences.has(fetchedConference.id)) {
						this.conferences.push(fetchedConference)
						this.alreadyFetchedConferences.add(fetchedConference.id)
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

	filter(conferences: Conference[]): Conference[] {
		let result: Conference[] = []

		conferences.forEach(conference => {
			if (conference.years.includes(this.activeYear)) {
				result.push(conference)
			}
		})

		return result
	}

	navToSingleEntry(conference) {
		this.navCtrl.navigateForward(`/single-entry?type=conferences&id=${conference.id}`, { animated: false });
	}

}
