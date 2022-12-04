import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { BreakpointsService } from '../services/breakpoints.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.page.html',
  styleUrls: ['./single-entry.page.scss'],
})
export class SingleEntryPage implements OnInit {

  isLoading: boolean = true;

  public mobile = true;
	public tablet = true;

  public type: string;
  public id: string;
  public data: any;
  public years: string = '';

  constructor(
    public breakpointObserver: BreakpointObserver,
		public breakpoints: BreakpointsService,
    public route: ActivatedRoute,
    public firestore: AngularFirestore,
    public navCtrl: NavController) { 
  }

  ngOnInit() {
    this.data = {}
    this.route.queryParams.subscribe(params => {
      this.type = params['type']
      this.id = params['id']

      this.fetchSingleEntryData()
    });
  }

	async fetchSingleEntryData() {
		await this.firestore.collection(this.type).doc(this.id).valueChanges().subscribe(data => {
      this.data = data
      this.isLoading = false
    })
	} 

  formatYears(years: number[]): string {
    return years.length === 1 ? years[0].toString() : years[0].toString() + ' - ' + years[years.length - 1]
  }

}
