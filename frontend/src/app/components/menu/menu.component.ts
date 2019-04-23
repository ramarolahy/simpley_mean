import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  //styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  // Use AuthenticationService to display user firstname and get logout method
  constructor( public auth:AuthenticationService) { }

  /**
   * Attach logout method to menu link
   */
  logout(){
    this.auth.logout()
  }

}
