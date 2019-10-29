import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    public mobile = true;

    constructor(public platform: Platform,
                public breakpointObserver: BreakpointObserver,
                public breakpoints: BreakpointsService,
                public router: Router) {}

    ngOnInit(): void {
        this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
            this.mobile = (result.matches) ? true : false;
        });
    }

    navigateToHome(): void {
        this.router.navigate(['/home']);
    }

    navigateToInvitations(): void {
        this.router.navigate(['./invitations']);
    }

    navigateToCourses(): void {
        this.router.navigate(['/courses']);
    }

    navigateToConferences(): void {
        this.router.navigate(['/conferences']);
    }

    navigateToInstructors(): void {
        this.router.navigate(['./instructors']);
    }

    navigateToSponsors(): void {
        this.router.navigate(['/sponsors']);
    }

    navigateToContact(): void {
        this.router.navigate(['/contact']);
    }

    navigateToLogin(): void {
        this.router.navigate(['./login']);
    }

}
