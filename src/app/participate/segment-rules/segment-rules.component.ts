import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-segment-rules",
  templateUrl: "./segment-rules.component.html",
  styleUrls: ["./segment-rules.component.scss"],
})
export class SegmentRulesComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  ngOnInit() {}
}
