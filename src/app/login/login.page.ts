import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    pass_forgot() {
        console.log('parola uiata');
    }
    Sign_In() {
        console.log('want to sign in');
    }
}
