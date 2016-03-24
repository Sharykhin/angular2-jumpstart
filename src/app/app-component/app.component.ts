import {Component, OnInit} from 'angular2/core';

@Component({
	selector: 'app-component',
	templateUrl: 'app/app-component/app.component.html',
	styleUrls: ['app/app-component/main.css']
})
export class AppComponent implements OnInit {

	constructor() {
		console.log('constructor');
		this.check().then((response: string) => console.log(response));
	}

	check() {
		return Promise.resolve('ha ha ha');
	}

	ngOnInit() {
		console.log('init app component has been completed');
	}
}
