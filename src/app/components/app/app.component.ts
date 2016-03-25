import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {TodoListComponent} from './../todo-list/todo-list.component';

@Component({
	selector: 'app',
	templateUrl: '/app/components/app/app.component.html',
	styleUrls: ['app/components/app/app.component.css'],
	providers: [ROUTER_PROVIDERS],
	directives: [ROUTER_DIRECTIVES],
	encapsulation: ViewEncapsulation.None
})
@RouteConfig([
	{
		path: '/',
		name: 'TodoList',
		component: TodoListComponent,
		useAsDefault: true
	}
])
export class AppComponent {
	public title: string = 'Todo List';
}
