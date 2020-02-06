import { Component, OnInit } from '@angular/core';
import { CardPopoverComponent } from '../card-popover/card-popover.component';
import { PopoverController } from '@ionic/angular';
import { InvitatiService } from '../services/invitati.service';

@Component({
    selector: 'app-invitations',
    templateUrl: './invitations.page.html',
    styleUrls: ['./invitations.page.scss'],
})
export class InvitationsPage implements OnInit {

    public invitations = [];

    constructor(public popoverController: PopoverController,  private invitatiService: InvitatiService) {
    }
    ngOnInit() {
        this.invitations = this.invitatiService.getInvitati();
    }

    async presentPopover(ev: Event) {
        const popover = await this.popoverController.create({
            component: CardPopoverComponent,
            event: ev,
            translucent: true
        });
        return await popover.present();
    }

}
