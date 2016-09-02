import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app',
	templateUrl: '/dist/app/components/app/app.component.html',
	styleUrls: ['/dist/app/components/app/app.component.css'],
})
export class AppComponent implements OnInit {

	constructor() {
		console.log('AppComponent: constructor');
	}

	ngOnInit() {
		console.log('AppComponent: Method ngOnInit');
	}
}
