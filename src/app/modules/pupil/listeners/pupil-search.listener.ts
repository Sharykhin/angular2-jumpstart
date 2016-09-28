
import { Injectable } from '@angular/core';
import { PupilSearchListenerInterface } from './../interfaces/listeners/pupil-search-listener.interface';
import { PupilInterface } from './../interfaces/models/pupil.interface';

declare var EventEmitter: any;

const SEARCH = 'onSearch';

@Injectable()
export class PupilSearchListener extends EventEmitter implements PupilSearchListenerInterface {

	static instance: PupilSearchListener;

	constructor() {
		super();
		return PupilSearchListener.instance = PupilSearchListener.instance || this;
	}

	get SEARCH() {		
		return SEARCH;
	}

	onSearch(pupils: Array<PupilInterface>) {
		this.emitEvent(SEARCH, [pupils]);
	}
}
