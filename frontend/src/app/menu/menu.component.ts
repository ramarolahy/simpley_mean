import { Component } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  //selector: 'app-menu',
  templateUrl: './menu.component.html',
  //styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  // Use AuthenticationService to display user firstname
  constructor( public auth:AuthenticationService) { }

}
