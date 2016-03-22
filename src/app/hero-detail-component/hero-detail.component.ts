import {Component, Input} from 'angular2/core';
import {Hero} from '../interfaces/hero';


@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/hero-detail-component/hero-detail-component.html',
})
export class HeroDetailComponent {

	@Input('hero') hero: Hero;
}
