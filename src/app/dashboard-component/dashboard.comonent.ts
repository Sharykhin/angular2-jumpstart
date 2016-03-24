import {Component, OnInit} from 'angular2/core';
import {HeroService} from './../services/hero.service';
import {Hero} from './../interfaces/hero';
import { Router } from 'angular2/router';

@Component({
	selector: 'dashboard-component',
	templateUrl: '/app/dashboard-component/dashboard.component.html',
	styleUrls: ['/app/dashboard-component/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	heroes: Hero[] = [];

	constructor(private _heroService: HeroService, private _router: Router) {

	}

	ngOnInit() {
		this._heroService.getHeroes()
			.then((heroes) => { this.heroes = heroes.slice(1, 5); });
	}

	gotoDetail(hero: Hero) {
		let link = ['HeroDetail', { id: hero.id }];
		this._router.navigate(link);
	}
}
