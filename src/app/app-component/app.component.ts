
import {Component, OnInit} from 'angular2/core';
import {HeroDetailComponent} from './../hero-detail-component/hero-detail.component';

interface Hero {
	id: number;
	name: string;
}

let HEROES: Hero[] = [
	{ "id": 11, "name": "Mr. Nice" },
	{ "id": 12, "name": "Narco" },
	{ "id": 13, "name": "Bombasto" },
	{ "id": 14, "name": "Celeritas" },
	{ "id": 15, "name": "Magneta" },
	{ "id": 16, "name": "RubberMan" },
	{ "id": 17, "name": "Dynama" },
	{ "id": 18, "name": "Dr IQ" },
	{ "id": 19, "name": "Magma" },
	{ "id": 20, "name": "Tornado" }
];

@Component({
	selector: 'app-component',
	templateUrl: 'app/app-component/app.component.html',
	styleUrls: ['app/app-component/main.css'],
	directives: [HeroDetailComponent]
})
export class AppComponent implements OnInit {

	public heroes = HEROES;

	public selectedHero: Hero;

	constructor() {
		var list = [1, 2, 3];
		console.log(list.length);
	}

	onSelect(hero: Hero) {
		console.log(hero);
		this.selectedHero = hero;
	}

	ngOnInit() {
		console.log('init app component has been completed');
	}
}
