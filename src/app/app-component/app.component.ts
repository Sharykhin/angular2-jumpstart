import {Component, OnInit} from 'angular2/core';
import {HeroDetailComponent} from './../hero-detail-component/hero-detail.component';
import {HeroService} from './../services/hero.service';


interface Hero {
	id: number;
	name: string;
}

@Component({
	selector: 'app-component',
	templateUrl: 'app/app-component/app.component.html',
	styleUrls: ['app/app-component/main.css'],
	directives: [HeroDetailComponent],
	providers: [HeroService]
})
export class AppComponent implements OnInit {

	public heroes: Hero[];

	public selectedHero: Hero;

	constructor(private _heroService: HeroService) {
		var list = [1, 2, 3];
		console.log(list.length);
	}

	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero) {
		console.log(hero);
		this.selectedHero = hero;
	}

	ngOnInit() {
		this.getHeroes();
	}
}
