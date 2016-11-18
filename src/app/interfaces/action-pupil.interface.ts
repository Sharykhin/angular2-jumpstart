import {ActionInterface} from './action.interface';
import {PupilInterface} from './pupil.interface';

export interface PupilCreateActionInterface extends ActionInterface {
	payload: Object<PupilInterface>
}