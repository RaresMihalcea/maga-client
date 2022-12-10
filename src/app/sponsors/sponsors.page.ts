import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Partner } from '../models/partner';
import { ActiveYearService } from '../services/active-year.service';
import { BreakpointsService } from '../services/breakpoints.service';

@Component({
    selector: 'app-sponsors',
    templateUrl: './sponsors.page.html',
    styleUrls: ['./sponsors.page.scss'],
})
export class SponsorsPage implements OnInit {

	public mobile = true;
	public tablet = true;

	isLoading: boolean = true;

	partners: Partner[] = [];
	activeYear: number;
	defaultYear: number;
	alreadyFetchedYears: number[] = []
	alreadyFetchedPartners: Set<string> = new Set();

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
		if(!this.alreadyFetchedYears.includes(this.activeYear)) {
			this.isLoading = true;
			const partnerQuery = this.firestore.collection('partners').ref.where("years", 'array-contains', this.activeYear)

			await partnerQuery.get().then(data => { 
				data.forEach(doc => {
					const fetchedpartner: Partner = doc.data() as Partner;
					fetchedpartner.id = doc.id
					if(!this.alreadyFetchedPartners.has(fetchedpartner.id)) {
						this.partners.push(fetchedpartner)
						this.alreadyFetchedPartners.add(fetchedpartner.id)
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
	}

	filter(partners: Partner[], category: string): Partner[] {
		let result: Partner[] = []

		partners.forEach(partner => {
			if(partner.years.includes(this.activeYear) && partner.category == category) {
				result.push(partner)
			}
		})

		return result
	}

	navToSingleEntry(partner) {
		this.navCtrl.navigateForward(`/single-entry?type=partners&id=${partner.id}`, {animated: false});
	}

}
