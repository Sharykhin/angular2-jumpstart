import {Todo} from './../interfaces/todo.interface';

export interface Listener {
	register(event: string, listener: () => any): void;
}

export interface TodoListenerInterface extends Listener {
	onTodoAdd(todo: Todo): void;
}
