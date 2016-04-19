import {Component, OnInit} from 'angular2/core';
import {TodoListener} from './../../listeners/todo.listener';
import {Todo} from './../../interfaces/todo.interface';
import {TodoService} from './../../services/todo.service';
import {HighlightDirective} from './../../directives/highlight.directive';
import {Observable}     from 'rxjs/Observable';

@Component({
	selector: 'todo-form',
	templateUrl: '/app/components/todo-form/todo-form.component.html',
	directives: [HighlightDirective],
	inputs: ['todo']
})
export class TodoFormComponent {
	
	public todo: Todo;

	constructor(
		private _todoListener: TodoListener,
		private _todoService: TodoService	
	) { console.log(this.todo); }

	onSubmit(title) {
		this._todoService.createTodo({
			done: false,
			title: title.value
		}).subscribe(
			todo => this._todoListener.onTodoAdd(todo),
			err => console.error(err)
		);
	}	
}
