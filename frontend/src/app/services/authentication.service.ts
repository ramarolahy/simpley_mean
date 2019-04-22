import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

// Interfaces here
// The interface is to handle the data types (useful for type checking the application.
export interface UserDetails {
  _id: string;
  email: string;
  firstname: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  firstname?: string;
  lastname?: string;
  email: string;
  password: string;
}

// See https://angular.io/api/core/Injectable for Injectable decorator
@Injectable()
export class AuthenticationService {
  private token: string;

  constructor(private http: HttpClient, private router: Router) {}

  /**
   * Method to save token to localStorage
   * @param token
   * returns void
   */
  private saveToken(token: string): void {
    localStorage.setItem('simpley-ng-token', token);
    this.token = token;
  }

  /**
   * Method to get token from localStorage
   * return token: string
   */
  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('simpley-ng-token');
    }
    return this.token;
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

  /**
   * Method to check
   */
  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  /**
   * Private method to facilitate making API calls. This will construct and return the proper HTTP request observable
   * depending on the specific type of request.
   * @param method
   * @param type: 'login'|'register'|'todo'
   * @param user
   */
  private request(method: 'post'|'get', type: 'login'|'signup'|'today', user?: TokenPayload): Observable<any> {
    let base;
    if (method === 'post') {
      // Depending one the request method, send token or set request headers accordingly
      base = this.http.post(`/api/${type}`, user);
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    // See https://blog.angularindepth.com/reading-the-rxjs-6-sources-map-and-pipe-94d51fec71c2 to read about pipe() and
    // map()
    // ** NOT to be confused with Angular 2.0 pipes https://angular.io/guide/pipes
    return base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
  }

  /**
   * Public method to register new user
   * @param user
   */
  public signup(user: TokenPayload): Observable<any> {
    return this.request('post', 'signup', user);
  }

  /**
   * Public method to login user
   * @param user
   */
  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }

  /**
   * Public method to get user's today page
   */
  public today(): Observable<any> {
    return this.request('get', 'today');
  }
}
