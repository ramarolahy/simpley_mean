import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticateService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) {}

  /**
   * Class method to check if user is logged in before rendering auth guarded component.
   */
  canActivate() {
    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
