import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import 'rxjs/add/operator/map';
import {HTTP_PROVIDERS} from 'angular2/http';
import {TodoListComponent} from './../todo-list/todo-list.component';
import {TodoFormComponent} from './../todo-form/todo-form.component';

@Component({
	selector: 'app',
	templateUrl: '/app/components/app/app.component.html',
	styleUrls: ['app/components/app/app.component.css'],
	providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS],
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
