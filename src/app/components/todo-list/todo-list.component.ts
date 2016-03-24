import {Component} from 'angular2/core';
import {TodoFormComponent} from './../todo-form/todo-form.component';
import {TodoEventListener} from './../../services/todo-event-listener';

@Component({
	selector: 'todo-list',
	templateUrl: '/app/components/todo-list/todo-list.component.html',
	directives: [TodoFormComponent],
	providers: [TodoEventListener]
})
export class TodoListComponent {

	constructor(private _todoEventListener: TodoEventListener) {
		this._todoEventListener.addListener('onTodoAdd', (title: string) => {
			console.info('Yes todo has been added', title);
		});
	}
}
