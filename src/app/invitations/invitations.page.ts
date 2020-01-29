import { Component, OnInit } from '@angular/core';
import { CardPopoverComponent } from '../card-popover/card-popover.component';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-invitations',
    templateUrl: './invitations.page.html',
    styleUrls: ['./invitations.page.scss'],
})
export class InvitationsPage implements OnInit {

    constructor(public popoverControler: PopoverController) { }
    ngOnInit() {
    }

    async presentPopover(event) {
        const popover = await this.popoverControler.create({
            component: CardPopoverComponent,
            event
        });
        return await popover.present();
    }

}
