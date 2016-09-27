import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

import { PupilListener } from './../../modules/pupil/listeners/pupil.listener';
import { PupilInterface } from './../../modules/pupil/interfaces/models/pupil.interface';
import { PupilApiService } from './../../modules/pupil/services/pupil-api.service';

@Component({
	selector: 'notification',
	templateUrl: '/app/components/notification/notification.component.html',
	styleUrls: ['app/components/notification/notification.component.css'],
	providers: [
		PupilListener,
		/*{
            provide: PupilListener, useFactory: () => {
                console.log('use factory to create a new instance of PupilListener in the Notification  component');
                return new PupilListener();
            }
        },*/
        PupilApiService
    ]
})
export class NotificationComponent implements OnDestroy, OnInit {

	pupilCounter: number = 0;

	constructor(
		private _ee: PupilListener,
		private _pupilApiService: PupilApiService) { console.log(this._ee); }

	ngOnDestroy() {
		this._ee.removeListener(this._ee.PUPIL_CREATED, this.updatePupilCounter.bind(this));
		this._ee.removeListener(this._ee.PUPIL_DELETED, this.reducePupilCounter.bind(this));
	}

	ngOnInit() {
		this._ee.addListener(this._ee.PUPIL_CREATED, this.updatePupilCounter.bind(this));
		this._ee.addListener(this._ee.PUPIL_DELETED, this.reducePupilCounter.bind(this));
		this._pupilApiService.getPupils()
			.subscribe(pupils => this.pupilCounter = pupils.length);
	}

	private	updatePupilCounter(pupil: PupilInterface) {
		console.log('ha ha ha');
		this.pupilCounter++;
	}

	private reducePupilCounter() {
		this.pupilCounter--;
	}
}
