import {Component} from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {TokenPayload} from "../../services/api/api.service";
import {Router} from "@angular/router";

@Component({
    //selector: 'app-signup',
    templateUrl: './signup.component.html',
    //styleUrls: ['./signup.component.css']
})
export class SignupComponent {
    credentials: TokenPayload = {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
    };

    constructor(private auth: AuthenticationService, private router: Router) {
    }

    // See http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-subscribe
    // to read about subscribe() from RxJS
    signup() {
        this.auth.signup(this.credentials).subscribe(() => {
            // Redirect to login page if signup successful
            // TODO: Add alert/messaging system
            this.router.navigateByUrl('/login');
        }, (err) => {
            // TODO: Add alert/messaging system
            console.error(err);
        });
    }

}
