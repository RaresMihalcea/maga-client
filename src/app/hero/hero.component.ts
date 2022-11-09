import { Component, OnInit } from '@angular/core';
import { BreakpointsService } from '../services/breakpoints.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {

    public mobile = true;
    public tablet = true;

    constructor(public breakpointObserver: BreakpointObserver,
        public breakpoints: BreakpointsService,
        public translate: TranslateService) { }

    ngOnInit() {
        this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
            this.mobile = (result.matches) ? true : false;
        });
        this.breakpointObserver.observe(this.breakpoints.smallerBreakpoint).subscribe(result => {
            this.tablet = (result.matches) ? true : false;
        });
    }

}
