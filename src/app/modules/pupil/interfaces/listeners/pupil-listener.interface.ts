import { EventsInterface } from './../events.interface';
import { PupilInterface } from './../models/pupil.interface';

export interface PupilListenerInterface extends EventsInterface {

	onPupilCreated(pupil: PupilInterface) : void;

	onPupilDeleted(pupil: PupilInterface) : void;

	PUPIL_DELETED: string;

	PUPIL_CREATED: string;
}