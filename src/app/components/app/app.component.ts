import { Component, OnInit, Inject } from '@angular/core';

import { AuthServiceInterface } from './../../interfaces/services/auth-service.interface';
import { AuthService } from './../../services/auth.service';
import { AuthApiInterface } from './../../modules/auth/interfaces/auth-api.interface';
import { AuthApiService } from './../../modules/auth/services/auth-api.service';

@Component({
	selector: 'app',
	templateUrl: '/app/components/app/app.component.html',
	styleUrls: ['app/components/app/app.component.css'],
	providers: [ AuthApiService ]
})
export class AppComponent implements OnInit {

	public isAuthenticated: boolean = false;

	constructor(
		@Inject(AuthService) private _authService: AuthServiceInterface,
		@Inject(AuthApiService) private _authApiService: AuthApiInterface
		) {
		console.log('AppComponent: constructor');
	}

	ngOnInit() {
		console.log('AppComponent: Method ngOnInit');
		this._authApiService.isLoggedIn()
			.subscribe(data => {
				if (data.id) {
					this.isAuthenticated = true;
				}
			});
	}

	login() {
		this._authService.login('admin2', 'admin')
			.subscribe(
				data => console.log('got data', data)				
			);
	}
}
