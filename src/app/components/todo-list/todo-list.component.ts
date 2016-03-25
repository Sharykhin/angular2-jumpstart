import {Component, OnInit, ViewEncapsulation} from 'angular2/core';
import {TodoFormComponent} from './../todo-form/todo-form.component';
import {TodoListener} from './../../listeners/todo.listener';

@Component({
	selector: 'todo-list',
	templateUrl: '/app/components/todo-list/todo-list.component.html',
	styleUrls: ['/app/components/todo-list/todo-list.component.css'],
	directives: [TodoFormComponent],
	providers: [TodoListener]
	//encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {

	constructor(private _todoListener: TodoListener) {
	}

	ngOnInit() {
		this._todoListener.register(TodoListener.TODO_ADD, (title: string) => {
			console.info('Yes todo has been added', title);
		});
	}
}
