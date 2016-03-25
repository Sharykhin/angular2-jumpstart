import {Component, OnInit, ViewEncapsulation} from 'angular2/core';
import {TodoFormComponent} from './../todo-form/todo-form.component';
import {TodoListener} from './../../listeners/todo.listener';
import {TodoService} from './../../services/todo.service';
import {Todo} from './../../interfaces/todo.interface';


@Component({
	selector: 'todo-list',
	templateUrl: '/app/components/todo-list/todo-list.component.html',
	styleUrls: ['app/components/todo-list/todo-list.component.css'],
	directives: [TodoFormComponent],
	providers: [TodoListener, TodoService]
	//encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {

	public todos: Todo[];

	constructor(private _todoListener: TodoListener, private _todoService: TodoService) {
	}

	getTodos() {
		this._todoService.getTodos()
			.subscribe(
				data => { this.todos = data; },
				err => console.error(err)
			);
	}

	onDoneChange(todo: Todo) {
		todo.done = !todo.done;
	}

	ngOnInit() {
		this._todoListener.register(TodoListener.TODO_ADD, (todo: Todo) => {
			console.info('Yes todo has been added', todo);
			this.todos.push(todo);
		});

		this.getTodos();
	}
}
