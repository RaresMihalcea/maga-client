import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    public mobile = true;

    constructor(public platform: Platform,
                public breakpointObserver: BreakpointObserver,
                public breakpoints: BreakpointsService) {}

    ngOnInit(): void {
        this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
            this.mobile = (result.matches) ? true : false;
        });
    }
}
