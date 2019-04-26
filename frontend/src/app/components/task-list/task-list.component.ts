import {Component, Input, OnInit} from '@angular/core';
import {TodayService} from "../../services/today/today.service";
import {AuthenticationService} from "../../services/auth/authentication.service";
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {Todo} from "../../models/Todo";

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    //styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    private todos: Todo[] = [];
    private updatedTodo: Todo;
    @Input('cdkDropListOrientation') orientation: 'vertical';

    constructor(private todayService: TodayService, private auth: AuthenticationService) {
    }

    ngOnInit() {
        this.getTodos();
    }

    /**
     * Method to handle todo reordering with dragNdrop
     * @param event
     */
    drop(event: CdkDragDrop<Todo[]>) {
        // Reorder todo items in the array
        moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
        let newIndex = 0;
        // Update order field in the db for each todo with updated index.
        this.todos.forEach(todo => {
            this.todayService.editTodo(todo._id, {owner: todo.owner, order: newIndex}).subscribe(
                res => res,
            );
            newIndex++;
        });
    }

    /**
     * Method to fetch all todos from db
     */
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

    public editTodo(todoid, body) {
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
