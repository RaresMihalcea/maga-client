import { toBase64String } from "@angular/compiler/src/output/source_map";
import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LocalizationService {
  private language: string = "";
  public languageChange: Subject<string> = new Subject<string>();

  constructor(public translate: TranslateService) {
    this.languageChange.subscribe((value) => {
      this.language = value;
    });
  }

  public init(lang: string) {
    this.languageChange.next(lang);
    this.translate.setDefaultLang(lang);
  }

  public changeLang(lang: string) {
    this.language = lang;
    this.languageChange.next(lang);
    this.translate.use(this.language);
  }

  public getLanguage() {
    return this.language;
  }
}
