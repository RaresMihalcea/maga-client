import { Component, OnInit, HostListener } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    scrollDownNavbarFlag: boolean;

    // corsHeaders = new HttpHeaders({
    //     'Content-Type': 'application/json'
    // });

    constructor(public platform: Platform,
                public breakpointObserver: BreakpointObserver) { }

    ngOnInit() {}

    @HostListener("window:scroll", [])
    onWindowScroll() {
        this.scrollDownNavbarFlag = true;
        console.log('scrolling');
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
