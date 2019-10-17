import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform, LoadingController } from '@ionic/angular';
import { HTTP } from '@ionic-native/http/ngx';
import { finalize } from 'rxjs/operators';
import { from } from 'rxjs';
import { ApiLocationService } from '../services/api-location.service';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    // corsHeaders = new HttpHeaders({
    //     'Content-Type': 'application/json'
    // });

    constructor(private http: HttpClient,
                public platform: Platform,
                private nativeHttp: HTTP,
                private loadingCtrl: LoadingController,
                private apiLocationService: ApiLocationService,
                public breakpointObserver: BreakpointObserver) { }

    ngOnInit() {}

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
