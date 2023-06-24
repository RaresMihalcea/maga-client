import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { BreakpointsService } from 'src/app/services/breakpoints.service';

@Component({
  selector: 'app-segment-guide',
  templateUrl: './segment-guide.component.html',
  styleUrls: ['./segment-guide.component.scss'],
})
export class SegmentGuideComponent implements OnInit {

  public menuBreakpoint = true;

  constructor(public breakpointObserver: BreakpointObserver, public breakpoints: BreakpointsService) { }

  ngOnInit() {
    this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
			this.menuBreakpoint = (result.matches) ? true : false;
		});
  }

}
