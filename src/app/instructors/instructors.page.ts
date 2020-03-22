import { Component, OnInit } from '@angular/core';
import { InstructorsService } from '../services/instructors.service';
import { CardPopoverComponent } from '../card-popover/card-popover.component';
import { PopoverController } from '@ionic/angular';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';

@Component({
    selector: 'app-instructors',
    templateUrl: './instructors.page.html',
    styleUrls: ['./instructors.page.scss'],
})
export class InstructorsPage implements OnInit {

    public mobile = true;
    public tablet = true;
    public instructors = [];
    status1 = true;
    status2 = false;
    status3 = false;
    status4 = false;
    status5 = false;
    constructor( public instructorService: InstructorsService, public popoverControler: PopoverController,
                 public breakpointObserver: BreakpointObserver, public breakpoints: BreakpointsService) { }

    ngOnInit() {
        this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
            this.mobile = (result.matches) ? true : false;
        });
        this.breakpointObserver.observe(this.breakpoints.tablet).subscribe(result => {
            this.tablet = (result.matches) ? true : false;
        });
        this.instructors = this.instructorService.getInstructors();
    }
    toggle1() {
        this.status1 = true;
        this.status2 = false;
        this.status3 = false;
        this.status4 = false;
        this.status5 = false;
    }
    toggle2() {
        this.status1 = false;
        this.status2 = true;
        this.status3 = false;
        this.status4 = false;
        this.status5 = false;
    }
    toggle3() {
        this.status1 = false;
        this.status2 = false;
        this.status3 = true;
        this.status4 = false;
        this.status5 = false;
    }
    toggle4() {
        this.status1 = false;
        this.status2 = false;
        this.status3 = false;
        this.status4 = true;
        this.status5 = false;
    }
    toggle5() {
        this.status1 = false;
        this.status2 = false;
        this.status3 = false;
        this.status4 = false;
        this.status5 = true;
    }

}
