import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BreakpointsService } from '../services/breakpoints.service';

@Component({
  selector: 'app-participate',
  templateUrl: './participate.page.html',
  styleUrls: ['./participate.page.scss'],
})
export class ParticipatePage implements OnInit {

  public menuBreakpoint = true;
  public isLoggedIn: boolean;
  public step: string;
  public stepDisplay = {
    'guide': 'Ghidul Participantului',
    'rules': 'Condiții de Participare',
    'enrollForm': 'Formular înscrieri',
  }

  constructor(
    public breakpointObserver: BreakpointObserver,
		public breakpoints: BreakpointsService,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
			this.menuBreakpoint = (result.matches) ? true : false;
		});

    this.isLoggedIn = this.auth.isLoggedInStatus;
    this.step = 'enrollForm'
  }

  segmentChanged(value: string): void {
    this.step = value
  }

}
