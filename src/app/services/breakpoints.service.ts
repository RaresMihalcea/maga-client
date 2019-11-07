import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BreakpointsService {

    constructor() { }

    menuBreakpoint = '(max-width: 1096px)';
    smallerBreakpoint = '(min-width: 700px)';
}
