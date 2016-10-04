import { Observable } from 'rxjs/Observable';

export interface AuthServiceInterface {
	isLoggedIn() : boolean;

	login(username: string, password: string) : Observable<any>
}