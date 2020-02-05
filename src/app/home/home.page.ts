import { Component, OnInit, HostListener } from '@angular/core';
import { Platform } from '@ionic/angular';
import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointsService } from '../services/breakpoints.service';

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

    constructor(public platform: Platform,
                public breakpointObserver: BreakpointObserver,
                public breakpoints: BreakpointsService) { }

    ngOnInit() {
        this.breakpointObserver.observe(this.breakpoints.menuBreakpoint).subscribe(result => {
            this.mobile = (result.matches) ? true : false;
        });
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
