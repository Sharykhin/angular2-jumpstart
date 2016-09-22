import { Component } from '@angular/core';

@Component({
	selector: 'not-found',
	templateUrl: 'app/components/not-found/not-found.component.html'
})
export class NotFoundComponent {

	constructor() {
		console.log('NotFoundComponent: constructor');
	}
}