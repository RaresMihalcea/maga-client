import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from './services/breakpoints.service';

import { TranslateService } from '@ngx-translate/core';
// import { Globalization } from '@ionic-native/globalization/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    public callToAction: string;
    public language = "ro";

    
    public appPages = [
        {
            title: 'Acasă',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'Invitați',
            url: '/invitations',
            icon: 'globe'
        },
        {
            title: 'Cursuri',
            url: '/courses',
            icon: 'school'
        },
        {
            title: 'Conferințe',
            url: '/conferences',
            icon: 'bonfire'
        },
        {
            title: 'Instructori',
            url: '/instructors',
            icon: 'medal'
        },
        {
            title: 'Sponsori',
            url: '/sponsors',
            icon: 'star'
        },
        {
            title: 'Contact',
            url: '/contact',
            icon: 'mail'
        },
        {
            title: 'Login',
            url: '/login',
            icon: 'key'
        }
    ];
    public mobile: boolean;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private menu: MenuController,
        public breakpointObserver: BreakpointObserver,
        public breakpoints: BreakpointsService,
        // private globalization: Globalization,
        private _translate: TranslateService
    ) {
        this.initializeApp();
    }

    ngOnInit() {
        this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
            this.mobile = (result.matches) ? true : false;
            console.log(this.mobile);
            this.menu.enable(this.mobile, 'main-menu');
        });
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
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
