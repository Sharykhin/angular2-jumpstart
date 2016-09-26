import { Component, Inject, OnDestroy, OnInit } from '@angular/core';

import { PupilListener } from './../../listeners/pupil.listener';
import { PupilInterface } from './../../modules/pupil/interfaces/models/pupil.interface';

@Component({
	selector: 'notification',
	templateUrl: '/app/components/notification/notification.component.html',
	styleUrls: ['app/components/notification/notification.component.css']
})
export class NotificationComponent implements OnDestroy, OnInit {

	pupilCounter = 0;

	constructor(private _ee: PupilListener) {}

	ngOnDestroy() {
		this._ee.removeListener(this._ee.PUPIL_CREATED, this.updatePupilCounter);
	}

	ngOnInit() {
		this._ee.addListener(this._ee.PUPIL_CREATED, this.updatePupilCounter);

	}

	private	updatePupilCounter(pupil: PupilInterface) {
		this.pupilCounter++;
	}
}
