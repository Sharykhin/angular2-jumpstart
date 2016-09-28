import { EventsInterface } from './../events.interface';
import { PupilInterface } from './../models/pupil.interface';

export interface PupilListenerInterface extends EventsInterface {

	onPupilCreated(pupil: PupilInterface);

	onPupilDeleted(pupil: PupilInterface);

	PUPIL_DELETED:string;

	PUPIL_CREATED:string;
}