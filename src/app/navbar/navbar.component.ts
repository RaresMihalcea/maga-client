import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
// import { Globalization } from '@ionic-native/globalization/ngx';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    public mobile = true;
    public scrollDownNavbarFlag = false;

    public callToAction: string;
    public language = "ro";

    constructor(public platform: Platform,
                public breakpointObserver: BreakpointObserver,
                public breakpoints: BreakpointsService,
                public router: Router,
                public navCtrl: NavController,
                // private globalization: Globalization,
                private _translate: TranslateService) {}

    ngOnInit(): void {
        this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
            this.mobile = (result.matches) ? true : false;
        });
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

    ionViewDidEnter(): void {
        // this.getDeviceLanguage();
        this._initTranslate(this.language);
        // this._initialiseTranslation();
    }
    
    _initialiseTranslation(): void {
        this._translate.get('callToAction').subscribe((res: string) => {
            this.callToAction = res;
            console.log(this.callToAction);
            // console.log(res);
        });
    }
    
    public changeLanguage(): void {
        console.log(this.language)
        this._translateLanguage();
    }
    
    _translateLanguage(): void {
        this._translate.use(this.language);
        this._initialiseTranslation();
    }
    
    _initTranslate(language) {
        // Set the default language for translation strings, and the current language.
        this._translate.setDefaultLang('ro');
        if (language) {
            this.language = language;
        }
        else {
            // Set your language here
            this.language = 'en';
        }
        this._translateLanguage();
    }
    
    // getDeviceLanguage() {
    //     if (window.Intl && typeof window.Intl === 'object') {
    //         this._initTranslate(navigator.language)
    //     }
    //     else {
    //         this.globalization.getPreferredLanguage()
    //         .then(res => {
    //             this._initTranslate(res.value)
    //         })
    //         .catch(e => { console.log(e); });
    //     }
    // }

}
