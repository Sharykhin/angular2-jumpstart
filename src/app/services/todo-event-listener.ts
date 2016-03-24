import {Injectable} from 'angular2/core';

@Injectable()
export class TodoEventListener {

	private ee = new EventEmitter();

	onTodoAdd(title: string) {
		console.log(this.ee);
		this.ee.emitEvent('onTodoAdd', [title]);
	}

	addListener(event: string, listener: any) {
		console.log(this.ee);
		this.ee.addListener(event, listener);
	}
}
