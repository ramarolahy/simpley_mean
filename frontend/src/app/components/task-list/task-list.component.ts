import {Component, OnInit} from '@angular/core';
import {TodayService} from "../../services/today/today.service";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {Todo} from "../../models/Todo";

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    //styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    private todos: Todo[] = [];


    constructor(private todayService: TodayService, private auth: AuthenticationService) {
    }

    ngOnInit() {
        this.getTodos()
    }

    public getTodos() {
        const userid = this.auth.getUserDetails()._id;
        this.todayService.getTodos(userid).subscribe(
            res => this.todos = res,)
    }

    public deleteTodo(todoid) {
        console.log(todoid);
        this.todayService.deleteTodo(todoid).subscribe(
            res => this.todos = this.todos.filter(todo => todo._id !== todoid),
        )
    }

    public onAddTodo(newTodo) {
        this.todos = this.todos.concat(newTodo)
    }

}
