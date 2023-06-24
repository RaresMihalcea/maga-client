import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { BreakpointsService } from '../services/breakpoints.service';
import { LocalizationService } from '../services/localization.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-verify-email-address',
  templateUrl: './verify-email-address.page.html',
  styleUrls: ['./verify-email-address.page.scss'],
})
export class VerifyEmailAddressPage implements OnInit {

  public mobile = true;
  public language: string = this.localization.getLanguage();

  constructor(public breakpointObserver: BreakpointObserver,
    public breakpoints: BreakpointsService,
		public localization: LocalizationService,
		public translate: TranslateService) { }

  ngOnInit() {
  }

}
