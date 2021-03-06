import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {TodayService} from "../../services/today/today.service";
import {Todo} from "../../models/Todo";
import {AuthenticationService} from "../../services/auth/authentication.service";

@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    //styleUrls: ['../css/styles.css']
})
export class AddTaskComponent implements OnInit {
    // Variable newTodo of type Todo
    public newTodo: Todo;
    private owner = this.auth.getUserDetails()._id;
    @Output() addTodo: EventEmitter<Todo> = new EventEmitter<Todo>();

    constructor(private todayService: TodayService, private auth: AuthenticationService) {
    }

    /**
     * Initialize new task
     */
    ngOnInit() {
        this.newTodo = {
            owner: this.owner ,
            desc: '',
            completed: false,
            order: 9999,
        }
    }

    /**
     * Method to add new task to db
     * Emit onAddTodo to component and add new task to list
     */
    public onSubmit() {
        this.todayService.addTodo(this.owner, this.newTodo).subscribe(
            res => {
                if (res) {
                    this.addTodo.emit(res);
                    this.newTodo.desc = '';
                }
            }
        );
    }

}
