import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Rx';

import { PupilInterface } from './../../interfaces/models/pupil.interface';
import { PupilApiInterface } from './../../interfaces/services/pupil-api.interface';

@Component({
	selector: 'pupil-profile',
	templateUrl: '/app/modules/pupil/components/pupil-profile/pupil-profile.component.html'
})
export class PupilProfileComponent implements OnInit {

	private sub: Subscription;

	pupil: PupilInterface;

	constructor(
		    @Inject('PupilApiInterface') private pupilApiService: PupilApiInterface,
			private route: ActivatedRoute
		) {
		console.log('PupilProfileComponent: constructor');
	}

	ngOnInit() {
		this.route.params
			.map(params => params['id'])
			.switchMap(id => this.pupilApiService.getPupil(id))
			.subscribe(pupil => this.pupil = pupil);
	}
}
