import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { AuthServiceInterface } from './../interfaces/services/auth-service.interface';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthService implements AuthServiceInterface {

	constructor(
		@Inject(Http) private _http,
		@Inject('ApiUserEndpoint') private _url) {}

	public isLoggedIn() : boolean {
		return true;
	}

	public login(username: string, password: string) : Observable<any> {
		let body = JSON.stringify({ username: username, password: password});
		return this._http.post(`${this._url}/login`, body)
			.map((res: Response) => res.json())
			.catch((error: any) => { console.error(error.json()); })
	}
}