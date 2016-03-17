
import {Component, OnInit} from 'angular2/core';
import { List } from 'immutable';

@Component({
	selector: 'app-component',
	templateUrl: 'app/app-component/app.component.html',
	styleUrls: ['app/app-component/main.css']
})
export class AppComponent implements OnInit {

	constructor() {
		var list = List.of(1, 2, 3);
		console.log(list.size);
	}

	ngOnInit() {
		console.log('init app component has been completed');
	}
}
