import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { BreakpointsService } from 'src/app/services/breakpoints.service';

@Component({
  selector: 'app-segment-about',
  templateUrl: './segment-about.component.html',
  styleUrls: ['./segment-about.component.scss'],
})
export class SegmentAboutComponent implements OnInit {

  public menuBreakpoint = true;

  constructor(public breakpointObserver: BreakpointObserver, public breakpoints: BreakpointsService) { }

  ngOnInit() {
    this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
			this.menuBreakpoint = (result.matches) ? true : false;
		});
  }

}
