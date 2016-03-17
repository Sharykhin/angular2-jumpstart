import {Component, OnInit} from 'angular2/core';

@Component({
	selector: 'app-component',
	templateUrl: 'app/app-component/app.component.html',
	styleUrls: ['app/app-component/main.css']
})
export class AppComponent implements OnInit {

	ngOnInit() {
		console.log('init app component has been completed');
	}
}
