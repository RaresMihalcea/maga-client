import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "../services/auth.service";
import { BreakpointsService } from "../services/breakpoints.service";
import { LocalizationService } from "../services/localization.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-participate",
  templateUrl: "./participate.page.html",
  styleUrls: ["./participate.page.scss"],
})
export class ParticipatePage implements OnInit {
  public menuBreakpoint = true;
  public isLoggedIn: boolean;
  public step: string;

  public language: string = this.localization.getLanguage();

  public stepDisplay = {
    guide:
      this.language === "ro" ? "Ghidul Participantului" : "Participant's Guide",
    rules:
      this.language === "ro"
        ? "Condiții de Participare"
        : "Participation Rules",
    enrollForm:
      this.language === "ro" ? "Formular înscrieri" : "Registration Form",
  };
  constructor(
    public breakpointObserver: BreakpointObserver,
    public breakpoints: BreakpointsService,
    public auth: AuthService,
    public localization: LocalizationService,
    public translate: TranslateService,
    public router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
  }

  ionViewDidEnter() {
    this.isLoggedIn = this.auth.isLoggedInStatus();
  }

  ngOnInit() {
    this.breakpointObserver
      .observe(this.breakpoints.menuBreakpoint)
      .subscribe((result) => {
        this.menuBreakpoint = result.matches ? true : false;
      });

    this.step = "enrollForm";
    if(this.router.url.includes("guide")) {
      this.step = "guide";
    }
    if(this.router.url.includes("rules")) {
      this.step = "rules";
    }

    this.localization.languageChange.subscribe((value) => {
      this.stepDisplay = {
        guide:
          value === "ro" ? "Ghidul Participantului" : "Participant's Guide",
        rules:
          value === "ro" ? "Condiții de Participare" : "Participation Rules",
        enrollForm: value === "ro" ? "Formular înscrieri" : "Registration Form",
      };
    });
  }

  segmentChanged(value: string): void {
    this.step = value;
  }
}
