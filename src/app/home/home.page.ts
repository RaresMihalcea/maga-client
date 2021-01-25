import { Component, OnInit, HostListener } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';
import { TranslateService } from '@ngx-translate/core';
import { Globalization } from '@ionic-native/globalization/ngx';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    
    // corsHeaders = new HttpHeaders({
    //     'Content-Type': 'application/json'
    // });

    public mobile = true;
    public callToActionText;
    public language: string;

    constructor(public platform: Platform,
        public breakpointObserver: BreakpointObserver,
        public breakpoints: BreakpointsService,
        private globalization: Globalization,
        private _translate: TranslateService) { }

    ngOnInit() {
        this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
            this.mobile = (result.matches) ? true : false;
        });
    }

    ionViewDidEnter(): void {
        this.getDeviceLanguage();
    }
    
    _initialiseTranslation(): void {
        this._translate.get('callToActionText').subscribe((res: string) => {
            this.callToActionText = res;
        });
    }
    
    public changeLanguage(): void {
        this._translateLanguage();
    }
    
    _translateLanguage(): void {
        this._translate.use(this.language);
        this._initialiseTranslation();
    }
    
    _initTranslate(language) {
        // Set the default language for translation strings, and the current language.
        this._translate.setDefaultLang('ro');
        if (language) {
            this.language = language;
        }
        else {
            // Set your language here
            this.language = 'en';
        }
        this._translateLanguage();
    }
    
    getDeviceLanguage() {
        if (window.Intl && typeof window.Intl === 'object') {
            this._initTranslate(navigator.language)
        }
        else {
            this.globalization.getPreferredLanguage()
            .then(res => {
                this._initTranslate(res.value)
            })
            .catch(e => { console.log(e); });
        }
    }
    
    // async testApi() {
    //     if (this.platform.is('cordova') === true) {
    //         const loading = await this.loadingCtrl.create();
    //         await loading.present();
    //         const nativeCall = this.nativeHttp.get(this.apiLocationService.apiLocation + '/hello', {}, {
    //             'Content-Type': 'application/json'
    //         });
    //         from(nativeCall).pipe(
    //             finalize(() => loading.dismiss())
    //         )
    //             .subscribe(data => {
    //                 console.log(data);
    //             });
    //     } else {
    //         this.http.get(this.apiLocationService.apiLocation + '/hello').subscribe(res => { console.log(res) });
    //     }
    // }
}
