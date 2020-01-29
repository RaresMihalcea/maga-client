import { Component, OnInit } from '@angular/core';
import { CardPopoverComponent } from '../card-popover/card-popover.component';
import { PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-invitations',
    templateUrl: './invitations.page.html',
    styleUrls: ['./invitations.page.scss'],
})
export class InvitationsPage implements OnInit {

    constructor(public popoverController: PopoverController) { }
    ngOnInit() { }

    async presentPopover(ev: any) {
        const popover = await this.popoverController.create({
            component: CardPopoverComponent,
            event: ev,
            translucent: true
        });
        return await popover.present();
    }

}
