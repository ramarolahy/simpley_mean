import {Component} from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {TokenPayload} from "../../services/api/api.service";
import {AlertService} from "../../services/alerts/alert.service";
import {Router} from "@angular/router";

@Component({
    templateUrl: './login.component.html',
})
export class LoginComponent {
    credentials: TokenPayload = {
        email: '',
        password: ''
    };

    constructor(private auth: AuthenticationService, private router: Router, private toastr: AlertService) {
    }

    // See http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-subscribe
    // to read about subscribe() from RxJS
    login() {
        this.auth.login(this.credentials).subscribe(() => {
            this.router.navigateByUrl('/today');
            this.toastr.showSuccess('Login successful! Happy planning!', null);
        }, (err) => {
            this.toastr.showWarning('Oops! Please check your credentials.', null);
            console.error(err);
            // TODO: Set up login fail counter and suggest signing up?
        });
    }


}
