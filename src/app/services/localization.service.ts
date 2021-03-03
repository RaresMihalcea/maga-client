import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';

@Injectable({
  	providedIn: 'root'
})
export class LocalizationService {

	// public callToAction: string;
	// public language = "ro";
	// private queries = new Set();

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
		
	// initialiseTranslation(): void {
	// 	this.translate.get('callToAction').subscribe((res: string) => {
	// 		this.callToAction = res;
	// 		console.log(this.callToAction);
	// 	});
	// }
	
	// public changeLanguage(): void {
	// 	console.log(this.language)
	// 	this.translateLanguage();
	// }
	
	// translateLanguage(): void {
	// 	this.translate.use(this.language);
	// 	this.initialiseTranslation();
	// }
	
	// initTranslate(language) {
	// 	// Set the default language for translation strings, and the current language.
	// 	this.translate.setDefaultLang('ro');
	// 	if (language) {
	// 		this.language = language;
	// 	}
	// 	else {
	// 		// Set your language here
	// 		this.language = 'en';
	// 	}
	// 	this.translateLanguage();
	// }
	

}
