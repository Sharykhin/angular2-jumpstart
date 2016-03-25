import {Component} from 'angular2/core';
import {TodoListener} from './../../listeners/todo.listener';
import {Todo} from './../../interfaces/todo.interface';
import {TodoService} from './../../services/todo.service';
import {HighlightDirective} from './../../directives/highlight.directive';

@Component({
	selector: 'todo-form',
	templateUrl: '/app/components/todo-form/todo-form.component.html',
	directives: [HighlightDirective]
})
export class TodoFormComponent {

	constructor(private _todoListener: TodoListener, private _todoService: TodoService) {

	}

	onSubmit(title) {
		console.log(title.value);
		//this._todoListener.onTodoAdd(title.value);
		this._todoService.createTodo({
			done: false,
			title: title.value
		}).subscribe(
			todo => this._todoListener.onTodoAdd(todo),
			err => console.error(err)
		);
	}
}
