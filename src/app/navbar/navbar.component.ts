import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from '../services/localization.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    public mobile = true;
    public scrollDownNavbarFlag = false;

    public callToAction: string;
    public language: string = this.translate.getDefaultLang();

    constructor(public platform: Platform,
                public breakpointObserver: BreakpointObserver,
                public breakpoints: BreakpointsService,
                public router: Router,
                public navCtrl: NavController,
                public translate: TranslateService,
                public localization: LocalizationService) {}
                
    ngOnInit(): void {
        this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
            this.mobile = (result.matches) ? true : false;
        });
        this.localization.languageChange.subscribe(value => {this.language = value});
    }

    changeLanguage() {
        // this.translate.use(this.language);
        this.localization.changeLang(this.language);
        console.log(this.translate.currentLang);
    }
    
    navigateToHome(): void {
        // this.router.navigate(['/home']);
        this.navCtrl.navigateForward('/home', {animated: false});
    }

    navigateToInvitations(): void {
        // this.router.navigate(['./invitations']);
        this.navCtrl.navigateForward('/invitations', {animated: false});
    }

    navigateToCourses(): void {
        // this.router.navigate(['/courses']);
        this.navCtrl.navigateForward('/courses', {animated: false});
    }

    navigateToConferences(): void {
        // this.router.navigate(['/conferences']);
        this.navCtrl.navigateForward('/conferences', {animated: false});
    }

    navigateToInstructors(): void {
        // this.router.navigate(['./instructors']);
        this.navCtrl.navigateForward('/instructors', {animated: false});
    }

    navigateToSponsors(): void {
        // this.router.navigate(['/sponsors']);
        this.navCtrl.navigateForward('/sponsors', {animated: false});
    }

    navigateToContact(): void {
        // this.router.navigate(['/contact']);
        this.navCtrl.navigateForward('/contact', {animated: false});
    }

    navigateToLogin(): void {
        // this.router.navigate(['./login']);
        this.navCtrl.navigateForward('/login', {animated: false});
    }

}
