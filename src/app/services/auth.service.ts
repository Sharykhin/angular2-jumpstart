import { Injectable } from '@angular/core';

import { AuthServiceInterface } from './../interfaces/services/auth-service.interface';

@Injectable()
export class AuthService implements AuthServiceInterface {

	public isLoggedIn() : boolean {
		return true;
	}
}