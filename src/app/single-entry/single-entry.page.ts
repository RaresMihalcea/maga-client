import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { BreakpointsService } from '../services/breakpoints.service';
import { LocalizationService } from '../services/localization.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.page.html',
  styleUrls: ['./single-entry.page.scss'],
})
export class SingleEntryPage implements OnInit {

  isLoading: boolean = true;
  public language: string = this.localization.getLanguage();

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
    public navCtrl: NavController,
    public localization: LocalizationService,
    public translate: TranslateService) {
  }

  ngOnInit() {
    this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
      this.mobile = (result.matches) ? true : false;
    });
    this.breakpointObserver.observe(this.breakpoints.tablet).subscribe(result => {
      this.tablet = (result.matches) ? true : false;
    });
    this.data = {}
    this.route.queryParams.subscribe(params => {
      this.type = params['type']
      this.id = params['id']

      this.fetchSingleEntryData()
      console.log(this.type)
    });

    this.localization.languageChange.subscribe(value => { this.language = value })
  }

  async fetchSingleEntryData() {
    this.isLoading = true
    await this.firestore.collection(this.type).doc(this.id).valueChanges().subscribe(data => {
      this.data = data
      this.isLoading = false
    })
  }

  formatYears(years: number[]): string {
    const smallest = Math.min(...years)
    const largest = Math.max(...years)
    return years.length === 1 ? years[0].toString() : smallest.toString() + ' - ' + largest
  }

}
