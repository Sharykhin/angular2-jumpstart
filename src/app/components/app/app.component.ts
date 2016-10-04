import { Component, OnInit, Inject } from '@angular/core';

import { AuthServiceInterface } from './../../interfaces/services/auth-service.interface';
import { AuthService } from './../../services/auth.service';


@Component({
	selector: 'app',
	templateUrl: '/app/components/app/app.component.html',
	styleUrls: ['app/components/app/app.component.css']
})
export class AppComponent implements OnInit {

	constructor(
		@Inject(AuthService) private _authService: AuthServiceInterface
		) {
		console.log('AppComponent: constructor');
	}

	ngOnInit() {
		console.log('AppComponent: Method ngOnInit');
	}

	login() {
		this._authService.login('admin2', 'admin')
			.subscribe(
				data => console.log('got data', data)				
			);
	}
}
