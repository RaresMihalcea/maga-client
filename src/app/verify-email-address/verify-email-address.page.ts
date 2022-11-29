import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { BreakpointsService } from '../services/breakpoints.service';

@Component({
  selector: 'app-verify-email-address',
  templateUrl: './verify-email-address.page.html',
  styleUrls: ['./verify-email-address.page.scss'],
})
export class VerifyEmailAddressPage implements OnInit {

  public mobile = true;

  constructor(public breakpointObserver: BreakpointObserver, public breakpoints: BreakpointsService) { }

  ngOnInit() {
  }

}
