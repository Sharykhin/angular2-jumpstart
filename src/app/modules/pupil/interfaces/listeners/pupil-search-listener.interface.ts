import { PupilInterface } from './../models/pupil.interface';
import { EventsInterface } from './../events.interface';

export interface PupilSearchListenerInterface extends EventsInterface {
	
	SEARCH: string;

	onSearch(pupils: Array<PupilInterface>);
}