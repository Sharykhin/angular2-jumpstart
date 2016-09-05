import { Component, OnInit } from '@angular/core';

import { FooterFaceComponent } from './../../modules/user/components/footer-face/footer-face.component';

@Component({
	selector: 'app',
	templateUrl: '/app/components/app/app.component.html',
	styleUrls: ['/app/components/app/app.component.css']	

})
export class AppComponent implements OnInit {

	constructor() {
		console.log('AppComponent: constructor');
	}

	ngOnInit() {
		console.log('AppComponent: Method ngOnInit');
	}
}
