import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActiveYearService } from '../services/active-year.service';
import { Invited } from '../models/invited';

@Component({
    selector: 'app-invitations',
    templateUrl: './invitations.page.html',
    styleUrls: ['./invitations.page.scss'],
})
export class InvitationsPage implements OnInit {

    public mobile = true;
	public tablet = true;

	invited: Invited[] = [];
	activeYear: number;
	defaultYear: number;
    alreadyFetchedYears: number[] = [];

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
			const invitedQuery = this.firestore.collection('invitations').ref.where("year", "==", this.activeYear)

			await invitedQuery.get().then(data => { 
				data.forEach(doc => {
					const fetchedInvited: Invited = doc.data() as Invited;
					fetchedInvited.id = doc.id
					this.invited.push(fetchedInvited)
				})
			})

			this.alreadyFetchedYears.push(this.activeYear)
		}
	} 

    changeActiveYear(activeYear: number) {
		this.activeYear = activeYear
		this.fetchData();
		console.log(this.activeYear)
	}

	filter(invited: Invited[]): Invited[] {
		let result: Invited[] = []

		invited.forEach(el => {
			if(el.year == this.activeYear) {
				result.push(el)
			}
		})

		return result
	}

	navToSingleEntry(invited) {
		this.navCtrl.navigateForward(`/single-entry?type=invitations&id=${invited.id}`, {animated: false});
	}

}
