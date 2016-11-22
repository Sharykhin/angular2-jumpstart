import { Injectable, Inject } from '@angular/core';
import { PupilInterface } from './../interfaces/pupil.interface';

export const PUPIL_ACTIONS = {
	CREATE: 'PUPIL_CREATE',
	DELETE: 'PUPIL_DELETE',
	UPDATE: 'PUPIL_UPDATE',
	PLUS: 'PLUS'
};

@Injectable()
export class PupilActions {

	static createPupil(pupil: PupilInterface) {
		return {
			type: PUPIL_ACTIONS.CREATE,
			payload: pupil
		}
	}
}
