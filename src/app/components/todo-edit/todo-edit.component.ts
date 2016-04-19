import {Component, OnInit} from 'angular2/core';
import {TodoFormComponent} from './../todo-form/todo-form.component';
import { Router, RouteParams } from 'angular2/router';
import { Todo } from './../interfaces/todo.interface';
import {TodoService} from './../../services/todo.service';
import {TodoListener} from './../../listeners/todo.listener';

@Component({
	selector:'todo-edit',
	templateUrl: '/app/components/todo-edit/todo-edit.component.html',
	directives: [TodoFormComponent],
	providers: [TodoService, TodoListener]
})
export class TodoEditComponent implements OnInit {

	public todo: Todo;

	constructor(
		private _router: Router,
		private _routeParams: RouteParams,
		private _todoService: TodoService) { }

	ngOnInit() {
		this._todoService.getTodo(this._routeParams.get('id'))
			.subscribe(
				data => this.todo = data,
				err => console.error(err)
			);
		console.log('Edit todo', this._routeParams.get('id'));
	}
}