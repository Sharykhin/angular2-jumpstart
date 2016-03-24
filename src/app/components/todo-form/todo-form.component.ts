import {Component} from 'angular2/core';
import {TodoEventListener} from './../../services/todo-event-listener';

@Component({
	selector: 'todo-form',
	templateUrl: '/app/components/todo-form/todo-form.component.html'
})
export class TodoFormComponent {

	constructor(private _todoEventListener: TodoEventListener) {

	}

	onSubmit(title) {
		console.log(title.value);
		this._todoEventListener.onTodoAdd(title.value);
	}
}
