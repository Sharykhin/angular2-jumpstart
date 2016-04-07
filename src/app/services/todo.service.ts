import {Http, Response} from 'angular2/http';
import {Todo} from './../interfaces/todo.interface';
import {Injectable} from 'angular2/core';
import {Headers} from 'angular2/http';
import {Observable}       from 'rxjs/Observable';

const API_URL = 'http://localhost:2403/todos';

@Injectable()
export class TodoService {

	constructor(private _http: Http) {}

	getTodos() {
		return this._http.get(API_URL).map((res: Response) => res.json());
	}

	removeTodo(todo: Todo) {
		return this._http.delete(`${API_URL}/${todo.id}`)
			.map(res => res.json());
	}

	toggleTodo(todo: Todo) {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this._http.put(`${API_URL}/${todo.id}`, JSON.stringify({ done: !todo.done }), {
			headers: headers
		}).map(res => res.json());
	}

	createTodo(todo: Todo): Observable<Todo> {
		let headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this._http.post(API_URL, JSON.stringify(todo), {
			headers: headers
		}).map(res => res.json());
	}
}
