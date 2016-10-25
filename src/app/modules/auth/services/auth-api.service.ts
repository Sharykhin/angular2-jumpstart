import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { AuthApiInterface } from './../interfaces/auth-api.interface';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AuthApiService implements AuthApiInterface {

	private uid = null;

	constructor(
		@Inject(Http) private _http,
		@Inject('ApiUserEndpoint') private _url) {}

	public isLoggedIn() : Observable<any> {
		return this._http.get(`${this._url}/me`)
			.map((res: Response) => res.json())
			.catch((error: any) => Observable.throw('error'));
	}

	public login(username: string, password: string) : Observable<any> {
		let body = JSON.stringify({ username: username, password: password});
		return this._http.post(`${this._url}/login`, body)
			.map((res: Response) => {
				let result = res.json();
				console.info(result);
				if (result.uid) {
					this.uid = result.uid;
				}
				return result;
			})
			.catch((error: any) => { console.error(error.json()); })
	}
}