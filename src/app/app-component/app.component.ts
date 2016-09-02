import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HomeComponent} from './../components/home/home.component';
import {AboutComponent} from './../components/about/about.component';

@Component({
	selector: 'app-component',
	templateUrl: 'app/app-component/app.component.html',
	styleUrls: ['app/app-component/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
	{
		path: '/', component: HomeComponent, name: 'Home', useAsDefault: true
	},
	{
		path: '/about', component: AboutComponent, name: 'About', useAsDefault: true
	}
])
export class AppComponent implements OnInit {

	constructor() {
		console.log('AppComponent: constructor');
		this.check().then((response: string) => console.log(response));
	}

	check() {
		return Promise.resolve('AppComponent: promise resolved with message -> ha ha ha');
	}

	ngOnInit() {
		console.log('AppComponent: Method ngOnInit');
	}
}
