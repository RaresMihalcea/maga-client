import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-organizers-showcase',
  templateUrl: './organizers-showcase.component.html',
  styleUrls: ['./organizers-showcase.component.scss'],
})
export class OrganizersShowcaseComponent implements OnInit {

	constructor(public translate: TranslateService) { }

  ngOnInit() {}

}
