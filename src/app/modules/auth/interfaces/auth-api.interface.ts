import { Observable } from 'rxjs/Observable';

export interface AuthApiInterface {
	isLoggedIn() : boolean;

	login(username: string, password: string) : Observable<any>
}