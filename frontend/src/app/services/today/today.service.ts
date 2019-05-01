import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

import {ApiService} from "../api/api.service";

@Injectable()
export class TodayService {

    constructor(private api: ApiService, private http: HttpClient, private router: Router) {
    }

    /**
     * Public method to CREATE new todo
     * @param userid
     * @param newTodo
     */
    public addTodo(userid, newTodo: object): Observable<any> {
        const body = JSON.stringify(newTodo);
        return this.api.request('post', 'today', userid, null, body)
    }
    /**
     * Public method to READ user's today
     */
    public getTodos(userid): Observable<any> {
        return this.api.request('get', 'today', userid);
    }

    /**
     * Public method to UPDATE todo
     * @param todoid
     * @param body
     */
    public editTodo(todoid, body): Observable<any> {
        return this.api.request('put', 'today', todoid, null, body)
    }

    public deleteTodo(todoid: ':todoid'): Observable<any> {
        return this.api.request('delete', 'today', todoid)
    }

}
