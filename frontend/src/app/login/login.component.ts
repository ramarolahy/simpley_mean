import {Component} from '@angular/core';
import {AuthenticationService, TokenPayload} from "../services/authentication.service";
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
      this.router.navigateByUrl('/today');
    }, (err) => {
      console.error(err);
    });
  }

}
