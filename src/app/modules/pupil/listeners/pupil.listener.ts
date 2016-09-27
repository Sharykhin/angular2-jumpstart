import { Injectable } from '@angular/core';
declare var EventEmitter;

const PUPIL_CREATED = 'onPupilCreated';
const PUPIL_DELETED = 'onPupilDeleted';

import { PupilInterface } from './../interfaces/models/pupil.interface';

@Injectable()
export class PupilListener extends EventEmitter {	
	
	static instance: PupilListener;

	constructor() {
		super();
	    return PupilListener.instance = PupilListener.instance || this;
	}

	get PUPIL_CREATED() {		
		return PUPIL_CREATED;
	}

	get PUPIL_DELETED() {
		return PUPIL_DELETED;
	}

	onPupilCreated(pupil: PupilInterface) {
		this.emitEvent(PUPIL_CREATED, [pupil]);
	}

	onPupilDeleted(pupil: PupilInterface) {
		this.emitEvent(PUPIL_DELETED, [pupil]);
	}
}