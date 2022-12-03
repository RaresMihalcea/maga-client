import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-segment-form',
  templateUrl: './segment-form.component.html',
  styleUrls: ['./segment-form.component.scss'],
})
export class SegmentFormComponent implements OnInit {

  isLoggedIn: boolean;

  constructor(public auth: AuthService, public navCtrl: NavController) { }

  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedInStatus
  }

  navigateToLogin(): void {
    this.navCtrl.navigateForward('/login', {animated: false});
  }
}
