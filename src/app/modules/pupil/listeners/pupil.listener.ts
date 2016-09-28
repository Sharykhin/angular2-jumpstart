import { Injectable } from '@angular/core';
import { EventsInterface } from './../interfaces/events.interface';
import { ConstructorInterface } from './../interfaces/constructor.interface';
import { PupilInterface } from './../interfaces/models/pupil.interface';
import { PupilListenerInterface } from './../interfaces/listeners/pupil-listener.interface';

const PUPIL_CREATED = 'onPupilCreated';
const PUPIL_DELETED = 'onPupilDeleted';

declare let EventEmitter: ConstructorInterface;

@Injectable()
export class PupilListener extends EventEmitter implements PupilListenerInterface {	
	
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

	onPupilCreated(pupil: PupilInterface): void {
		//this.emit(PUPIL_CREATED, [pupil]);
	}

	onPupilDeleted(pupil: PupilInterface): void {
		//this.emit(PUPIL_DELETED, [pupil]);
	}
}