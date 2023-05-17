import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Organizer } from '../models/organizer';
import { BreakpointsService } from '../services/breakpoints.service';
import { LocalizationService } from '../services/localization.service';

@Component({
  selector: 'app-organizers',
  templateUrl: './organizers.page.html',
  styleUrls: ['./organizers.page.scss'],
})
export class OrganizersPage implements OnInit {

  public mobile = true;
  public tablet = true;
  public language: string = this.translate.getDefaultLang();

  isLoading: boolean = true;

  organizers: Organizer[] = [];

  constructor(
    public breakpointObserver: BreakpointObserver,
    public breakpoints: BreakpointsService,
    public firestore: AngularFirestore,
    public navCtrl: NavController,
    public localization: LocalizationService,
    public translate: TranslateService) { }

  ngOnInit(): void {
    this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
      this.mobile = (result.matches) ? true : false;
    });
    this.breakpointObserver.observe(this.breakpoints.tablet).subscribe(result => {
      this.tablet = (result.matches) ? true : false;
    });
    this.fetchData()

    this.localization.languageChange.subscribe(value => { this.language = value })
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
