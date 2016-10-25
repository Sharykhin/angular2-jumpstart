import { Observable } from 'rxjs/Observable';

export interface AuthApiInterface {
	
	isLoggedIn() : Observable<any>;

	login(username: string, password: string) : Observable<any>
}