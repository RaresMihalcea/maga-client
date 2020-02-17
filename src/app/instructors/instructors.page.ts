import { Component, OnInit } from '@angular/core';
import { InstructorsService } from '../services/instructors.service';
import { CardPopoverComponent } from '../card-popover/card-popover.component';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-instructors',
    templateUrl: './instructors.page.html',
    styleUrls: ['./instructors.page.scss'],
})
export class InstructorsPage implements OnInit {

    public instructors = [];
    status1 = true;
    status2 = false;
    status3 = false;
    constructor( public instructorService: InstructorsService, public popoverControler: PopoverController) { }

    ngOnInit() {
        this.instructors = this.instructorService.getInstructors();
    }
    toggle1() {
        this.status1 = true;
        this.status2 = false;
        this.status3 = false;
    }
    toggle2() {
        this.status1 = false;
        this.status2 = true;
        this.status3 = false;
    }
    toggle3() {
        this.status1 = false;
        this.status2 = false;
        this.status3 = true;
    }

}
