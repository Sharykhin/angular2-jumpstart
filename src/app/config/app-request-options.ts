import { BaseRequestOptions } from '@angular/http';

export class AppRequestOptions extends BaseRequestOptions {
	constructor() {
		super();
		this.headers.append('Content-Type', 'application/json');
	}
}