import { Component } from '@angular/core';

declare var module: {
	id: string
};

@Component({
	selector: 'not-found',
	moduleId: module.id,
	templateUrl: 'not-found.component.html'
})
export class NotFoundComponent {

	constructor() {
		console.log('NotFoundComponent: constructor');
	}
}