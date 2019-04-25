import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

interface TokenResponse {
    token: string;
}

export interface TokenPayload {
    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
}

// See https://angular.io/api/core/Injectable for Injectable decorator
@Injectable()
export class ApiService {
    private token: string;

    constructor(private http: HttpClient) {
    }

    /**
     * Method to save token to localStorage
     * @param token
     * returns void
     */
    public saveToken(token: string): void {
        localStorage.setItem('simpley-ng-token', token);
        this.token = token;
    }

    /**
     * Method to get token from localStorage
     * return token: string
     */
    public getToken(): string {
        if (!this.token) {
            this.token = localStorage.getItem('simpley-ng-token');
        }
        return this.token;
    }

    /**
     * Private method to facilitate making API calls. This will construct and return the proper HTTP request observable
     * depending on the specific type of request.
     * @param method
     * @param type: 'login'|'register'|'todo'
     * @param param: ':userid' | ':todoid'
     * @param user
     * @param body
     * @param all
     */
    public request(method: 'post' | 'get' | 'put' | 'delete', type: 'login' | 'signup' | 'today', param?: ':userid' | ':todoid', user?: TokenPayload, body?, all?: boolean): Observable<any> {
        let base;
        const jsonMimeType = {
            'Content-type': 'application/json'
        };
        const tokenAuth = {
            'token': `${this.getToken()}`
        };
        const baseURL = 'http://localhost:3000';
        if (type === 'login' || type === 'signup') {
            // Depending one the request method, send token or set request headers accordingly
            if (method === 'post') {
                base = this.http.post(`${baseURL}/api/${type}`, user);
            } else {
                base = this.http.get(`${baseURL}/api/${type}`, {headers: {Authorization: `Bearer ${tokenAuth.token}`}});
            }

            // See https://blog.angularindepth.com/reading-the-rxjs-6-sources-map-and-pipe-94d51fec71c2 to read about pipe() and
            // map()
            // ** NOT to be confused with Angular 2.0 pipes https://angular.io/guide/pipes
            return base.pipe(
                map((res: TokenResponse) => {
                    if (res.token) {
                        this.saveToken(res.token);
                    }
                    return res;
                })
            );

        } else {
            switch (method) {
                case "post":
                    return this.http.post(`${baseURL}/api/${type}/${param}`, body, {headers: jsonMimeType}).pipe(
                        map(res => res)
                    );
                case 'get':
                    return this.http.get(`${baseURL}/api/${type}/${param}`).pipe(
                        map(res => res)
                    );
                case "put":
                    return this.http.put(`${baseURL}/api/${type}/${param}`, body, {headers: jsonMimeType}).pipe(
                        map(res => res)
                    );
                case "delete":
                    return this.http.delete(`${baseURL}/api/${type}/${param}`).pipe(
                        map(res => res)
                    );
                default:
                    break;
            }
        }
    }
}
