import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from './services/breakpoints.service';

import { TranslateService } from '@ngx-translate/core';
import { LocalizationService } from './services/localization.service';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

    public language: string = this.translate.getDefaultLang();

    public appPages = []
    public mobile: boolean;

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private menu: MenuController,
        public breakpointObserver: BreakpointObserver,
        public breakpoints: BreakpointsService,
        public translate: TranslateService,
        public localization: LocalizationService,
        public auth: AuthService
    ) {
        this.initializeApp();
        this.localization.languageChange.subscribe(value => {
            this.language = value
            this.appPages = [
                {
                    title: this.language === 'ro' ? 'Acasă' : 'Home',
                    url: '/home',
                    icon: 'home'
                },
                {
                    title: this.language === 'ro' ? 'Invitați' : 'Guests',
                    url: '/guests',
                    icon: 'globe'
                },
                {
                    title: this.language === 'ro' ? 'Cursuri' : 'Courses',
                    url: '/courses',
                    icon: 'school'
                },
                {
                    title: this.language === 'ro' ? 'Conferințe' : 'Conferences',
                    url: '/conferences',
                    icon: 'chatbubbles'
                },
                {
                    title: this.language === 'ro' ? 'Instructori' : 'Instructors',
                    url: '/instructors',
                    icon: 'medal'
                },
                {
                    title: this.language === 'ro' ? 'Parteneri' : 'Partners',
                    url: '/partners',
                    icon: 'star'
                },
                {
                    title: this.language === 'ro' ? 'Organizatori' : 'Organizers',
                    url: '/organizers',
                    icon: 'extension-puzzle'
                },
                {
                    title: this.language === 'ro' ? 'Înscrieri' : 'Sign up',
                    url: '/participate',
                    icon: 'bonfire'
                },
                {
                    title: 'Contact',
                    url: '/contact',
                    icon: 'mail'
                },
                {
                    title: 'Login',
                    url: '/login',
                    icon: 'key',
                    enabled: false
                }
            ];
        });
    }

    ngOnInit() {
        this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
            this.mobile = (result.matches) ? true : false;
            this.menu.enable(this.mobile, 'main-menu');
        });
        this.localization.init("ro");

        const logoutItem = this.appPages[this.appPages.length - 1]
        this.auth.isLoggedIn.subscribe(value => {
            if (value) {
                logoutItem.enabled = true
                logoutItem.title = 'Logout'
            } else {
                logoutItem.enabled = false
                logoutItem.title = 'Login'
            }
        })
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    changeLanguage() {
        this.localization.changeLang(this.language);
    }

    logout(event) {
        if (event.target.id === 'Logout') {
            this.auth.logout()
        }
    }
}
