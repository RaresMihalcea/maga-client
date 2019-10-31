import { Component, OnInit } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from './services/breakpoints.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
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
        public breakpoints: BreakpointsService
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
}
