import {Component, OnInit, ViewEncapsulation} from 'angular2/core';
import {TodoFormComponent} from './../todo-form/todo-form.component';
import {TodoListener} from './../../listeners/todo.listener';
import {TodoService} from './../../services/todo.service';
import {Todo} from './../../interfaces/todo.interface';
import { Router } from 'angular2/router';


@Component({
	selector: 'todo-list',
	templateUrl: '/app/components/todo-list/todo-list.component.html',
	styleUrls: ['app/components/todo-list/todo-list.component.css'],
	directives: [TodoFormComponent],
	providers: [TodoListener, TodoService, Router]
	//encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {

	public todos: Todo[];

	constructor(
		private _todoListener: TodoListener,
		private _todoService: TodoService,
		private _router: Router) {
	}

	getTodos() {
		this._todoService.getTodos()
			.subscribe(
				data => { this.todos = data; },
				err => console.error(err)
			);
	}

	onDoneChange(todo: Todo) {
		this._todoService.toggleTodo(todo)
			.subscribe(
				res => todo.done = !todo.done,
				err => console.error(err)
			);
	}

	onEditTodo(todo: Todo) {
		//this._router.navigate(['TodoEdit', { id: todo.id }]);
	}

	onDeleteTodo(todo: Todo) {
		let confirm = window.confirm('Are you sure?');
		if (confirm) {
			this._todoService.removeTodo(todo)
				.subscribe(
					res => {
						this._todoListener.onTodoDelete(todo);
						let index = this.todos.indexOf(todo);
						this.todos.splice(index, 1);
					},
					err => console.error(err)
				);
		}
	}

	ngOnInit() {
		this._todoListener.register(TodoListener.TODO_ADD, (todo: Todo) => {
			console.info('New todo has been added', todo);
			this.todos.push(todo);
		});

		this._todoListener.register(TodoListener.TODO_DELETE, (todo: Todo) => {
			console.info('Todo has been removed', todo);
		});

		this.getTodos();
	}
}
