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
    // Data Structure for tasks list
    public todos: Todo[] = [];
    private updatedTodo: Todo;
    @Input('cdkDropListOrientation') orientation: 'vertical';

    constructor(private todayService: TodayService, private auth: AuthenticationService) {
    }

    /**
     * GET todos from db on init
     */
    ngOnInit() {
        this.getTodos();
    }

    /**
     * Method to handle todo reordering with dragNdrop event
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

    /**
     * Method for event emitter to add todo to component
     * @param newTodo
     */
    public onAddTodo(newTodo) {
        this.todos = this.todos.concat(newTodo);
    }

    /**
     * Method to set complete date
     */
    public setDate() {
        const d = new Date();
        return d.getUTCDate();
    }

    /**
     * Method to update todo in db
     * @param todoid
     * @param body
     */
    public editTodo(todoid, body) {
        this.updatedTodo = body;
        this.todayService.editTodo(todoid, this.updatedTodo).subscribe(
            res => res,
        )
    }

    /**
     * Method to delete todo in database
     * @param todoid
     */
    public deleteTodo(todoid) {
        this.todayService.deleteTodo(todoid).subscribe(
            res => this.todos = this.todos.filter(todo => todo._id !== todoid),
        )
    }

    private deleteState;

    toggleDelete(event) {
        this.deleteState = event.target.checked;
    }

    /**
     * Method to toggle display for delete icon and drag icon
     * @param item
     */
    display(item: string) {
        if (this.deleteState) {
            return item === 'trash' ? 'block' : 'none';
        } else {
            return item === 'trash' ? 'none' : 'block';
        }
    }

}
