import {Component} from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {TokenPayload} from "../../services/api/api.service";
import {Router} from "@angular/router";

@Component({
  //selector: 'app-login',
  templateUrl: './login.component.html',
  //styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials: TokenPayload = {
    email: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {
  }

  // See http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#instance-method-subscribe
  // to read about subscribe() from RxJS
  login() {
    this.auth.login(this.credentials).subscribe(() => {
      // TODO: Add alert/messaging system
      this.router.navigateByUrl('/today');
    }, (err) => {
      // TODO: Add alert/messaging system
      console.error(err);
    });
  }

}
