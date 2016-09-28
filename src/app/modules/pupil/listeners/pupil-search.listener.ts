import { Injectable } from '@angular/core';
import { PupilSearchListenerInterface } from './../interfaces/listeners/pupil-search-listener.interface';
import { PupilInterface } from './../interfaces/models/pupil.interface';
import { ConstructorInterface } from './../interfaces/constructor.interface';

declare var EventEmitter: ConstructorInterface;

const SEARCH = 'onSearch';

@Injectable()
export class PupilSearchListener extends EventEmitter implements PupilSearchListenerInterface {

	static instance: PupilSearchListener;

	constructor() {
		super();
		return PupilSearchListener.instance = PupilSearchListener.instance || this;
	}

	get SEARCH() : string {		
		return SEARCH;
	}

	onSearch(pupils: Array<PupilInterface>) {
		this.emit(SEARCH, pupils);
	}
}
