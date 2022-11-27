import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-segment-login',
  templateUrl: './segment-login.component.html',
  styleUrls: ['./segment-login.component.scss'],
})
export class SegmentLoginComponent implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {}

  navigateToLogin(): void {
    this.navCtrl.navigateForward('/login', {animated: false});
  }

}
