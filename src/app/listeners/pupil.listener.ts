declare var EventEmitter;

const PUPIL_CREATED = 'onPupilCreated';

import { EventEmitterInterface } from './../interfaces/listeners/event-emitter.interface';
import { PupilInterface } from './../modules/pupil/interfaces/models/pupil.interface';

export class PupilListener extends EventEmitter {	
	
	get PUPIL_CREATED() {		
		return PUPIL_CREATED;
	}

	onPupilCreated(pupil: PupilInterface) {
		this.emitEvent(PUPIL_CREATED, [pupil]);
	}
}