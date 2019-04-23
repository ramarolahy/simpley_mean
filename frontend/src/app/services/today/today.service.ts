import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

import {ApiService} from "../api/api.service";




@Injectable()
export class TodayService {

    constructor(private api: ApiService, private http: HttpClient, private router: Router) {
    }

    /**
     * Public method to get user's today page
     */
    public getTodos(userid): Observable<any> {
        return this.api.request('get', 'today', userid);
    }

    public addTodo(userid, newTodo): Observable<any> {
        const body = JSON.stringify(newTodo);
        return this.api.request('post', 'today', userid, null, body)
    }

    public deleteTodo(todoid): Observable<any> {
        console.log('delete');
        return this.api.request('delete', 'today', todoid)
    }

}
