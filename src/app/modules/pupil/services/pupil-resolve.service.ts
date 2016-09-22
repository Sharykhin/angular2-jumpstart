import { Injectable, Inject } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { PupilApiInterface } from './../interfaces/services/pupil-api.interface';
import { PupilInterface } from './../interfaces/models/pupil.interface';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PupilResolveService implements Resolve<PupilInterface> {

	constructor(
		@Inject('PupilApiInterface') private pupilApiService: PupilApiInterface,
		private router: Router) {}

	resolve(route: ActivatedRouteSnapshot): Observable<any> {
		let id = route.params['id'];
		return Observable.create(observer => {
			this.pupilApiService.getPupil(id)
						.subscribe(
							pupil => { observer.next(pupil); observer.complete(); },
							error => { 
								if (error.status === 404) {
									this.router.navigate(['/pupils']);
								} 
							}
							);
		});		
	}
}
