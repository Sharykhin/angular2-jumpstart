import {Component} from 'angular2/core';
import {TodoListener} from './../../listeners/todo.listener';

@Component({
	selector: 'todo-form',
	templateUrl: '/app/components/todo-form/todo-form.component.html'
})
export class TodoFormComponent {

	constructor(private _todoListener: TodoListener) {

	}

	onSubmit(title) {
		console.log(title.value);
		this._todoListener.onTodoAdd(title.value);
	}
}
