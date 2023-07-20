import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActiveYearService } from '../services/active-year.service';
import { Guest } from '../models/guests';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from '../services/localization.service';

@Component({
	selector: 'app-guests',
	templateUrl: './guests.page.html',
	styleUrls: ['./guests.page.scss'],
})
export class GuestsPage implements OnInit {

	public mobile = true;
	public tablet = true;
	public language: string = this.localization.getLanguage();

	isLoading: boolean = true;

	guests: Guest[] = [];
	activeYear: number;
	defaultYear: number;
	alreadyFetchedYears: number[] = [];
	alreadyFetchedGuests: Set<string> = new Set();

	constructor(public breakpointObserver: BreakpointObserver,
		public breakpoints: BreakpointsService,
		public firestore: AngularFirestore,
		public activeYearService: ActiveYearService,
		public navCtrl: NavController,
		public translate: TranslateService,
		public localization: LocalizationService
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
			const guestsQuery = this.firestore.collection('guests').ref.where("years", 'array-contains', this.activeYear)

			await guestsQuery.get().then(data => {
				data.forEach(doc => {
					const fetchedGuests: Guest = doc.data() as Guest;
					fetchedGuests.id = doc.id
					if (!this.alreadyFetchedGuests.has(fetchedGuests.id)) {
						this.guests.push(fetchedGuests)
						this.alreadyFetchedGuests.add(fetchedGuests.id)
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

	filter(guests: Guest[]): Guest[] {
		let result: Guest[] = []

		guests.forEach(el => {
			if (el.years.includes(this.activeYear)) {
				result.push(el)
			}
		})

		result.sort((a, b) => {
			if(a.priority > b.priority) return 1;
			if(a.priority <= b.priority) return -1;
		});

		return result
	}

	navToSingleEntry(guest) {
		this.navCtrl.navigateForward(`/single-entry?type=guests&id=${guest.id}`, { animated: false });
	}

}
