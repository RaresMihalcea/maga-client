import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { Organizer } from '../models/organizer';
import { BreakpointsService } from '../services/breakpoints.service';

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.page.html',
  styleUrls: ['./organizers.page.scss'],
})
export class OrganizersPage implements OnInit {

  public mobile = true;
	public tablet = true;

  isLoading: boolean = true;

	organizers: Organizer[] = [];

	constructor(
    public breakpointObserver: BreakpointObserver,
		public breakpoints: BreakpointsService,
    public firestore: AngularFirestore,
    public navCtrl: NavController) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
			this.mobile = (result.matches) ? true : false;
		});
		this.breakpointObserver.observe(this.breakpoints.tablet).subscribe(result => {
			this.tablet = (result.matches) ? true : false;
		});
    this.fetchData()
  }

	async fetchData() {
    this.isLoading = true;
    const organizersQuery = this.firestore.collection('organizers').ref

    await organizersQuery.get().then(data => { 
      data.forEach(doc => {
        const fetchedorganizers: Organizer = doc.data() as Organizer;
        fetchedorganizers.id = doc.id
        this.organizers.push(fetchedorganizers)
      })
      this.isLoading = false;
    })
	}
}
