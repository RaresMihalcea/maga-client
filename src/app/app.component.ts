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
            url: '/home'
        },
        {
            title: 'Invitați',
            url: '/invitations'
        },
        {
            title: 'Cursuri',
            url: '/courses'
        },
        {
            title: 'Conferințe',
            url: '/conferences'
        },
        {
            title: 'Instructori',
            url: '/instructors'
        },
        {
            title: 'Sponsori',
            url: '/sponsors'
        },
        {
            title: 'Contact',
            url: '/contact'
        },
        {
            title: 'Login',
            url: '/login'
        }
    ];
    public mobile = true;

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
