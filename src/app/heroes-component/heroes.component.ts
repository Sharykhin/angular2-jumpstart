import {Component, OnInit} from 'angular2/core';
import {HeroDetailComponent} from './../hero-detail-component/hero-detail.component';
import {Hero} from './../interfaces/hero';
import {Router} from 'angular2/router';
import {HeroService} from './../services/hero.service';


@Component({
	selector: 'heroes-component',
	templateUrl: 'app/heroes-component/heroes.component.html',
	styleUrls: ['app/heroes-component/heroes.component.css'],
	directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {

	public heroes: Hero[];

	public selectedHero: Hero;

	constructor(private _heroService: HeroService, private _router: Router) {}

	getHeroes() {
		this._heroService.getHeroes()
			.then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}

	ngOnInit() {
		this.getHeroes();
	}

	gotoDetail() {
		this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
	}
}
