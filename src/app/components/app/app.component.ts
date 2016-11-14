import { Component, OnInit, Inject } from '@angular/core';


@Component({
	selector: 'app',
	templateUrl: '/app/components/app/app.component.html',
	styleUrls: ['app/components/app/app.component.css'],
	providers: []
})
export class AppComponent implements OnInit {

	constructor() {
		console.log('AppComponent: constructor');
	}

	ngOnInit() {
		console.log('AppComponent: Method ngOnInit');		
	}
}
