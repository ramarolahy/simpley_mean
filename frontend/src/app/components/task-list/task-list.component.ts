import {Component, OnInit} from '@angular/core';
import {TodayService} from "../../services/today/today.service";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Todo} from "../../models/Todo";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    //styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    private todos: Todo[] = [];
    private updatedTodo: Todo;


    constructor(private todayService: TodayService, private auth: AuthenticationService) {
    }

    ngOnInit() {
        this.getTodos();
    }
    drop(event: CdkDragDrop<Todo[]>) {
        moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
        let newIndex = 0;
       this.todos.forEach(todo =>{
           this.todayService.editTodo(todo._id, {owner: todo.owner, order: newIndex}).subscribe(
               res => res,
           );
           newIndex++;
       });
        console.log(this.todos);
    }
    public getTodos() {
        const userid = this.auth.getUserDetails()._id;
        this.todayService.getTodos(userid).subscribe(
            res => this.todos = res,)
    }

    public onAddTodo(newTodo) {
        this.todos = this.todos.concat(newTodo)
    }

    public setDate() {
        const d = new Date();
        return d.getUTCDate();
    }

    public editTodo(todoid, body){
        this.updatedTodo = body;
        this.todayService.editTodo(todoid, this.updatedTodo).subscribe(
            res => res,
        )
    }

    public deleteTodo(todoid) {
        this.todayService.deleteTodo(todoid).subscribe(
            res => this.todos = this.todos.filter(todo => todo._id !== todoid),
        )
    }


}
