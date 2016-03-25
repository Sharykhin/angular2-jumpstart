export interface Listener {
	register(event: string, listener: () => any): void;
}

export interface TodoListenerInterface extends Listener {
	onTodoAdd(): void;
}
