import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiLocationService {

    // tslint:disable-next-line: variable-name
    private _ip = '172.31.31.162';
    // tslint:disable-next-line: variable-name
    private _apiLocation = '';

    constructor() {
        this._apiLocation = 'http://maga-server/w';
    }

    get apiLocation(): string {
        return this._apiLocation;
    }
}
