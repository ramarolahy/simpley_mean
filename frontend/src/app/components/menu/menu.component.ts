import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";
import {AlertService} from "../../services/alerts/alert.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  //styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  // Use AuthenticationService to display user firstname and get logout method
  constructor( public auth:AuthenticationService, private toastr: AlertService ) { }

  /**
   * Attach logout method to menu link.
   * Show loggout message to user.
   */
  logout(){
    this.auth.logout();
    this.toastr.showInfo('You have been logged out successfully!', null);
  }

}
