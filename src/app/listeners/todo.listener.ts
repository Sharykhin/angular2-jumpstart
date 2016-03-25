import {Injectable} from 'angular2/core';

declare var EventEmitter: any;

import {TodoListenerInterface} from './../interfaces/todo-listener.interface';

const TODO_ADD = 'onTodoAdd';

@Injectable()
export class TodoListener implements TodoListenerInterface {

	private ee = new EventEmitter();

	static get TODO_ADD() {
		return TODO_ADD;
	}

	register(event, listener) {
		this.ee.addListener(event, listener);
	}

	onTodoAdd(title: string) {
		this.ee.emitEvent(TodoListener.TODO_ADD, [title]);
	}


}
