import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BreakpointsService {

    constructor() { }

    menuBreakpoint = '(max-width: 1277px)';
    tablet = '(max-width: 1185px)';
    smallerBreakpoint = '(min-width: 700px)';
}
