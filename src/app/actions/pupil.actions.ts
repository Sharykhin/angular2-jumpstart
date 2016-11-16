import {Injectable, Inject} from '@angular/core';
import { Store } from '@ngrx/store';

export const PUPIL_ACTIONS = {
	CREATE: 'CREATE',
	DELETE: 'DELETE',
	UPDATE: 'UPDATE',
	PLUS: 'PLUS'
};

@Injectable()
export class PupilActions {

	constructor(@Inject('Store') private _store: Store) {

	}

}

