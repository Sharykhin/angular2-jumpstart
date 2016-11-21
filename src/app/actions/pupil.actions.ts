import {Injectable, Inject} from '@angular/core';
import { Store } from '@ngrx/store';
import {PupilInterface} from './../interfaces/pupil.interface';

export const PUPIL_ACTIONS = {
	CREATE: 'PUPIL_CREATE',
	DELETE: 'PUPIL_DELETE',
	UPDATE: 'PUPIL_UPDATE',
	PLUS: 'PLUS'
};

@Injectable()
export class PupilActions {

	constructor(@Inject('Store') private _store: Store) {

	}

	static createPupil(pupil: PupilInterface) {
		return {
			type: PUPIL_ACTIONS.CREATE,
			payload: pupil
		}
	}

}

