import {Component, OnInit} from 'angular2/core';
import {TodoListener} from './../../listeners/todo.listener';
import {Todo} from './../../interfaces/todo.interface';
import {TodoService} from './../../services/todo.service';
import {HighlightDirective} from './../../directives/highlight.directive';
import { Router, RouteParams } from 'angular2/router';

@Component({
	selector: 'todo-form',
	templateUrl: '/app/components/todo-form/todo-form.component.html',
	directives: [HighlightDirective]
})
export class TodoFormComponent implements OnInit {

	constructor(
		private _todoListener: TodoListener,
		private _todoService: TodoService,
		private _router: Router,
		private _routeParams: RouteParams
		) { }

	onSubmit(title) {
		this._todoService.createTodo({
			done: false,
			title: title.value
		}).subscribe(
			todo => this._todoListener.onTodoAdd(todo),
			err => console.error(err)
		);
	}

	ngOnInit() {
		let id = this._routeParams.get('id');
		console.log(id);
	}
}
