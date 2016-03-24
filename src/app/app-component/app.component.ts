import {Component} from 'angular2/core';
import {HeroesComponent} from './../heroes-component/heroes.component';
import {DashboardComponent} from './../dashboard-component/dashboard.comonent';
import {HeroDetailComponent} from './../hero-detail-component/hero-detail.component';
import {HeroService} from './../services/hero.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';


@Component({
	selector: 'app-component',
	templateUrl: '/app/app-component/app.component.html',
	styleUrls: ['/app/app-component/app.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [ROUTER_PROVIDERS, HeroService]
})
@RouteConfig([
	{
		path: '/heroes',
		name: 'Heroes',
		component: HeroesComponent
	},
	{
		path: '/dashboard',
		name: 'Dashboard',
		component: DashboardComponent,
		useAsDefault: true
	},
	{
		path: '/detail/:id',
		name: 'HeroDetail',
		component: HeroDetailComponent
	}
])
export class AppComponent {
	public title: string = 'Tour of Heroes';
}
