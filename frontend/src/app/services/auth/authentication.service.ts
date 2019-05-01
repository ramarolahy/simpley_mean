import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

import {ApiService, TokenPayload} from "../api/api.service";

// Interfaces here
// The interface is to handle the data types (useful for type checking the application.
export interface UserDetails {
    _id: string;
    email: string;
    firstname: string;
    exp: number;
    iat: number;
}

// See https://angular.io/api/core/Injectable for Injectable decorator
@Injectable()
export class AuthenticationService {
    private token: string;

    constructor(private api: ApiService, private http: HttpClient, private router: Router) {
    }

    /**
     * Method to check
     */
    public getUserDetails(): UserDetails {
        const token = this.api.getToken();
        let payload;
        if (token) {
            payload = token.split('.')[1];
            payload = window.atob(payload);
            return JSON.parse(payload);
        } else {
            return null;
        }
    }

    /**
     * Public Class method to check if user is logged in.
     */
    public isLoggedIn(): boolean {
        const user = this.getUserDetails();
        if (user) {
            return user.exp > Date.now() / 1000;
        } else {
            return false;
        }
    }


    /**
     * Public method to register new user
     * @param user
     */
    public signup(user: TokenPayload): Observable<any> {
        return this.api.request('post', 'signup', null, user);
    }

    /**
     * Public method to login user
     * @param user
     */
    public login(user: TokenPayload): Observable<any> {
        return this.api.request('post', 'login', null, user);
    }

    /**
     * Method to logout user and remove token from localStorage
     * return void
     */
    public logout(): void {
        this.token = '';
        window.localStorage.removeItem('simpley-ng-token');
        this.router.navigateByUrl('/');
    }

}
