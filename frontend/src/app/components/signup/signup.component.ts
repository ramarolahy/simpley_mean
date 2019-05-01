import {Component} from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {TokenPayload} from "../../services/api/api.service";
import {AlertService} from "../../services/alerts/alert.service";
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

    constructor(private auth: AuthenticationService, private router: Router, private toastr: AlertService) {
    }

    // See http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-subscribe
    // to read about subscribe() from RxJS
    /**
     * Method to signup a new user.
     */
    signup() {
        this.auth.signup(this.credentials).subscribe(() => {
            // Redirect to login page if signup successful
            this.router.navigateByUrl('/login');
            this.toastr.showSuccess('Signup successful! You may now login.', null);
        }, (err) => {
            this.toastr.showWarning('Oops! Please make sure your information are correct.', null);
            console.error(err);
        });
    }

}
