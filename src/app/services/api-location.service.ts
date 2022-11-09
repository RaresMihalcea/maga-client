import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiLocationService {

    // tslint:disable-next-line: variable-name
    private _apiLocation = '';

    constructor() {
        this._apiLocation = 'http://localhost:8080/api/v1';
    }

    get apiLocation(): string {
        return this._apiLocation;
    }
}
